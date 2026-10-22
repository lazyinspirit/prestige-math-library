from pathlib import Path
import hashlib,json,difflib,datetime
run='physics-non-fluid-129-2026-10-21-r2'
out=Path('research')/(run+'-owner-step5-gr-referrals')
owner='/root/step5_gr_referrals'
def sha(b): return hashlib.sha256(b).hexdigest()
proposals=[]
def proposal(id,changes,interface):
 p=Path('items')/(id+'.md'); b=p.read_bytes(); s=b.decode(); edits=[]
 for old,new in changes:
  assert s.count(old)==1,(id,old[:100],s.count(old))
  edits.append({'old':old,'new':new});s=s.replace(old,new)
 before=out/(id+'.before.md'); after=out/(id+'.candidate.md'); patch=out/(id+'.patch')
 before.write_bytes(b);after.write_text(s)
 patch.write_text(''.join(difflib.unified_diff(b.decode().splitlines(True),s.splitlines(True),fromfile=str(p),tofile=str(p))))
 proposals.append({'id':id,'scientific_owner':owner,'source_path':str(p),'before_raw_sha256':sha(b),'before_archive':str(before),'before_archive_sha256':sha(before.read_bytes()),'candidate_path':str(after),'candidate_sha256':sha(after.read_bytes()),'patch_path':str(patch),'patch_sha256':sha(patch.read_bytes()),'public_interface_changed':interface,'applied':False,'exact_replacements':edits})
proposal('lem-gr-fx-null-focal-boundary-exclusion',[(
'If $\\lambda_0$ is a focal instant, there is $\\varepsilon>0$ such that\n$$\\gamma(\\lambda)\\in I^+(S)\\qquad (\\lambda_0<\\lambda<\\lambda_0+\\varepsilon).$$',
'If $\\lambda_0$ is a focal instant, let $\\widetilde\\gamma:I\\to M$ be the\nunique maximal affine geodesic extension of $\\gamma$, where $I$ is an open\ninterval containing $[0,L_1]$ and\n$\\widetilde\\gamma|_{[0,L_1]}=\\gamma$. There is $\\varepsilon>0$ with\n$[0,\\lambda_0+\\varepsilon]\\subset I$ such that\n$$\\widetilde\\gamma(\\lambda)\\in I^+(S)\\qquad (\\lambda_0<\\lambda<\\lambda_0+\\varepsilon).$$'),(
'1.1 By [F9], the geodesic extends to an open interval containing $[0,\\lambda_0]$.',
'1.1 By [F9], the unique maximal geodesic extension $\\widetilde\\gamma$ in the Statement exists on an open interval containing $[0,L_1]$. In the proof, continue to write $\\gamma$ for this extension.')],True)
proposal('ex-gr-fx01-1',[(
'[F2] For an affine twist-free null congruence,',
'[F2] Under Countable Choice for its Lorentzian supplier conventions, an affine twist-free null congruence satisfies'),(
'; under $\\operatorname{Ric}(\\ell,\\ell)\\ge0$ and $\\theta(0)<0$, the focal bound is $2/|\\theta(0)|$',
'; under $\\operatorname{Ric}(\\ell,\\ell)\\ge0$ and $\\theta(0)<0$, the focal bound is $2/|\\theta(0)|$, provided the smooth congruence and generator exist through that comparison parameter'),(
'[F3] A focal point on a future null normal generator is followed immediately by points in $I^+(S)$',
'[F3] Under Countable Choice and Dependent Choice, a focal point on a future null normal generator is followed immediately by points of its unique geodesic extension in $I^+(S)$'),(
'Differentiating $\\theta$ verifies the equation in [F2], and $2/|\\theta(0)|=2/(2/R)=R$, so the comparison bound is sharp.',
'Differentiating $\\theta$ verifies the displayed equation directly, and $2/|\\theta(0)|=2/(2/R)=R$. Thus the explicit focal parameter equals the comparison value; under its Countable Choice convention, [F2] gives the same sharp bound.'),(
'This agrees with\n[F3] for parameters sufficiently close to $R$; the displayed segment proves\nthe stronger stated range $R<\\lambda<3R$ directly.',
'Under Countable Choice and Dependent Choice this also agrees with\n[F3] for parameters sufficiently close to $R$; the displayed segment proves\nthe stronger stated range $R<\\lambda<3R$ directly, without either choice\nassumption.')],False)
move='The time orientation also extends explicitly. Write $R:=\\partial_r$ in the ingoing product coordinates and set $\\overline N:=\\bar T-(2Mr/\\Sigma)R$. Step 2.1 gives $g(\\bar T,R)=1$, $g(R,R)=0$, and $g(\\bar T,\\bar T)=-(\\Delta-a^2q)/\\Sigma$. Since $\\Sigma=r^2+a^2(1-q)$, $g(\\overline N,\\overline N)=-\\frac{\\Delta-a^2q+4Mr}{\\Sigma}=-\\frac{\\Sigma+2Mr}{\\Sigma}<0$ on the entire extension, where $r>r_+-\\varepsilon>0$. Both product coordinate fields and $\\Sigma$ are smooth globally, including the rotation axis, so this is a smooth nowhere-zero timelike field there.'
newmove='Write $R:=\\partial_r$ in the ingoing product coordinates and set $\\overline N:=\\bar T-(2Mr/\\Sigma)R$. The displayed covariant metric gives $g(\\bar T,R)=1$, $g(R,R)=0$, and $g(\\bar T,\\bar T)=-(\\Delta-a^2q)/\\Sigma$. Since $\\Sigma=r^2+a^2(1-q)$, direct contraction gives $g(\\overline N,\\overline N)=-\\frac{\\Delta-a^2q+4Mr}{\\Sigma}=-\\frac{\\Sigma+2Mr}{\\Sigma}<0$ on the entire extension, where $r>r_+-\\varepsilon>0$. Both product coordinate fields and $\\Sigma$ are smooth globally, including the rotation axis, so this is a smooth nowhere-zero timelike field there. Thus the extension with $\\overline N$ is a time-oriented smooth Lorentzian four-manifold, and [F9] now applies.'
proposal('prop-gr-fx-kerr-horizon-generator',[(
'It is a smooth Lorentzian extension across $r=r_+$. In this chart',
'It is a smooth Lorentzian extension across $r=r_+$. '+newmove+' In this chart'),(move,'It remains to check that this time orientation agrees with the exterior one.')],False)
(out/'proposal-index.json').write_text(json.dumps({'version':1,'run':run,'scientific_owner':owner,'cycle':1,'research_only':True,'native_review':False,'native_acceptance':False,'proposals':proposals},indent=2)+'\n')
print('Prepared',len(proposals),'guarded unapplied proposals')
