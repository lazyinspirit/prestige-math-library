require 'json'; require 'yaml'; require 'date'
RUN='physics-td-qft-rpm-62-2026-10-14'; OUT="research/#{RUN}-owner-frontier-declaration-reconciliation"
def fm(p); YAML.safe_load(File.read(p).split('---')[1], permitted_classes:[Date,Time], aliases:true);end
plan=JSON.parse(File.read('research/plan-spec.json')); patches=[]; observations=[]
def proposal(patches,path,pointer,before,after,basis)
 return if before==after
 patches << {path:path,format:'json-pointer-test-replace',pointer:pointer,test:before,replacement:after,basis:basis}
end
ids=%w[prop-emg-test-field-residual-order ex-qft-quartic-ground-energy-bound thm-qft-bounded-regulator-dyson-factorization pthm-rpm-relativistic-coulomb-scattering def-td-driven-finite-path-model post-td-linear-ornstein-uhlenbeck-bath pthm-td-ornstein-uhlenbeck-thermal-fluctuations ex-td-ornstein-uhlenbeck-spectrum]
[19,29,33,59,61].each do |n|
 path="research/#{RUN}-batch-#{n}.pages.json";rows=JSON.parse(File.read(path))
 rows.each_with_index do |row,ri|
  %w[items examples].each do |list|
   row.fetch(list,[]).each_with_index do |i,ii|
    next unless i.is_a?(Hash)&&ids.include?(i['id'])
    f=fm("items/#{i['id']}.md"); pi=plan['pages'].index{|p|p['id']==row['id']}; pli=plan['pages'][pi].fetch(list,[]).index{|x|x.is_a?(Hash)&&x['id']==i['id']}
    %w[deps dependency_roles physical_scope].each do |key|
     next unless f.key?(key)
     basis="Current released source frontmatter items/#{i['id']}.md; root must bind source currency and release evidence before integration."
     proposal(patches,path,"/#{ri}/#{list}/#{ii}/#{key}",i[key],f[key],basis)
     if pli
      proposal(patches,'research/plan-spec.json',"/pages/#{pi}/#{list}/#{pli}/#{key}",plan['pages'][pi][list][pli][key],f[key],basis)
     else
      observations << {id:i['id'],note:'Canonical plan has no matching item descriptor; owner transcribes current accepted manifest at native join.'}
     end
    end
   end
  end
 end
end
changes={58=>{'qft-f04'=>%w[qft-f01 qft-mf04 qft-mf02 qft-mf03]}}
changes.each do |n,pgs|
 path="research/#{RUN}-batch-#{n}.pages.json"; rows=JSON.parse(File.read(path));pgs.each do |id,after|
  ri=rows.index{|x|x['id']==id};pi=plan['pages'].index{|x|x['id']==id};basis=id=='qft-f04' ? "Native batch58 review1 exact approved design prerequisite restoration." : 'First-home closure for newly declared released source mathematical prerequisites; published immutable prerequisite context.'
  proposal(patches,path,"/#{ri}/requires",rows[ri]['requires'],after,basis);proposal(patches,'research/plan-spec.json',"/pages/#{pi}/requires",plan['pages'][pi]['requires'],after,basis)
  p=Dir["library/*/#{id}.md"].first;src=File.read(p);line=src.lines.find{|l|l.start_with?('requires:')};replacement="requires: #{JSON.generate(after)}\n"
  patches << {path:p,format:'exact-text-replace',test:line||src.split("---",3)[0,2].join("---")+"---\n",replacement:line ? replacement : src.split("---",3)[0,2].join("---").sub("---\n","---\n#{replacement}")+"---\n",expected_occurrences:1,basis:basis} unless line==replacement
 end
end
File.write("#{OUT}/guarded-root-proposals.json",JSON.pretty_generate({version:1,run:RUN,scope:'metadata declaration reconciliation only; unapplied',hash_binding_owner:'/root',patches:patches,observations:observations})+"\n")
