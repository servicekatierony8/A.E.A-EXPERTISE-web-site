import React from 'react';
import { CASE_STUDIES } from '../data/companyData';
import { MapPin, CheckCircle2, TrendingUp } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Références & Réalisations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cas Pratiques & Interventions en Côte d'Ivoire
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Quelques exemples récents illustrant la diversité de nos mandats : garantie bancaire pour tour d'affaires, règlement de sinistre industriel et audit d'extension foncière.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
                  <span className="text-amber-700 font-medium">{study.category}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{study.location}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {study.title}
                </h3>

                <div className="p-3.5 bg-white border border-slate-200 rounded-xl mb-4">
                  <div className="text-xs text-slate-500 font-medium">
                    {study.metricLabel}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">
                    {study.metric}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {study.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 text-[11px] text-slate-500 italic">
                <span className="font-semibold text-slate-700 not-italic">Approche : </span>
                {study.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
