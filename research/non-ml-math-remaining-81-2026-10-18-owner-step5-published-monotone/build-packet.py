import pathlib,json,re,hashlib,copy
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path('research/'+run+'-owner-step5-published-monotone')
sha=lambda b:hashlib.sha256(b).hexdigest();jg=lambda x:sha(json.dumps(x,ensure_ascii=False,separators=(',',':')).encode())
selected=['thm-continuity-iff-oscillation-zero','lem-baire-category-in-a-closed-interval','thm-froda','ex-froda-is-sharp','def-classification-of-discontinuities'];jump='thm-monotone-discontinuities-are-jumps';quant='ex-quantile-coupling-on-the-real-line'
(out/'before').mkdir(exist_ok=True);(out/'proposed').mkdir(exist_ok=True)
old={};new={};ops={};notes={}
def load(id):
 t=pathlib.Path('items/'+id+'.md').read_text();old[id]=new[id]=t;ops[id]=[];return t
def replace(id,a,b):
 assert new[id].count(a)==1,(id,a[:100],new[id].count(a));ops[id].append({'op':'replace-once','old':a,'new':b});new[id]=new[id].replace(a,b,1)
def section(t,s):
 m=re.search(r'^## '+re.escape(s)+r'\n([\s\S]*?)(?=^## |\Z)',t,re.M);return m.group(1).strip() if m else None
# Vocabulary supplier: title and explanation corrected without altering the classification predicates.
id='def-classification-of-discontinuities';t=load(id)
replace(id,re.search(r'^title:.*$',t,re.M).group(0),'title: "Discontinuity at a domain point: removable, jump and essential cases, and the first- and second-kind grouping"')
a='**On the two vocabularies.** *First kind* and *second kind* are Rudin\'s terms and\nare recorded because the literature uses them; *removable*, *jump* and\n*essential* are the names used in the rest of this library. They name the same\nthree cases and no third classification is introduced.'
b='**On the two vocabularies.** At two-sided points, the first-kind/second-kind\nterminology groups the three cases above: the first kind includes both\nremovable and jump discontinuities, and the second kind is essential. Thus the\ntwo kinds do not name the same three cases individually. At a one-sided point,\nthe convention above uses only the available side: a first-kind discontinuity\ncan also be removed by replacing $f(c)$ with that finite one-sided limit, but\nit is not a jump, since there are not two sides to compare. This endpoint\nextension is stated separately from the two-sided removable/jump split.'
replace(id,a,b);notes[id]='Original negative confirmed as a vocabulary/title error. The actual two-sided Definition already correctly makes first-kind the union of removable and jump, and second-kind essential. Its one-sided predicate already uses the single available real limit, which permits changing f(c) to remove discontinuity. The correction preserves every predicate, isolated-point rule and endpoint scope; it removes the false one-to-one equivalence in the title/final explanation.'
# Necessary jumps supplier: both monotonicity directions retained, never swap the side labels.
id=jump;t=load(id)
replace(id,re.search(r'^title:.*$',t,re.M).group(0),'title: "Monotone functions have every relevant finite one-sided limit; interior discontinuities are jumps, with side limits ordered by the direction of monotonicity"')
a='The same three claims hold for a nonincreasing $f$, with the two one-sided\nlimits exchanged and all inequalities reversed, by applying the above to $-f$,\nwhich is nondecreasing ([[def-monotone-function]]) and has exactly the same\npoints of continuity, since $|(-f)(x) - (-f)(c)| = |f(x) - f(c)|$.'
b='For a nonincreasing $f$, every well-posed one-sided limit likewise exists,\nand at an interior point the side labels stay fixed while the order reverses:\n$\\lim_{x \\to c^{-}} f(x) \\ge f(c) \\ge \\lim_{x \\to c^{+}} f(x)$.\nContinuity is still equivalent to equality of the two limits. An interior\ndiscontinuity is therefore a jump exactly when\n$\\lim_{x \\to c^{-}} f(x)>\\lim_{x \\to c^{+}} f(x)$, with signed jump\n$\\lim_{x \\to c^{+}} f(x)-\\lim_{x \\to c^{-}} f(x)<0$. Apply the\nnondecreasing claims to $-f$: negation preserves the side of a limit and\nnegates its value, and preserves continuity because\n$|(-f)(x)-(-f)(c)|=|f(x)-f(c)|$ ([[def-monotone-function]],\n[[def-one-sided-limits]]).'
replace(id,a,b)
replace(id,'and its proof is exactly the observation that the open intervals','and in the nondecreasing case its proof is exactly the observation that the open intervals')
notes[id]='Confirmed adjacent supplier defect: exchanging limits and reversing inequalities performs two reversals, giving the wrong downward order. The numbered proof is for nondecreasing f and is sound. Keeping side labels and negating values gives L^- >= f(c) >= L^+, downward jump L^+-L^-<0, and the same finite one-sided existence/endpoint statements. The generic title and upward-gap Remark are aligned without narrowing to nondecreasing inputs.'
# Froda: ordered gap on original f; reflection of the fixed rational enumeration makes exact least indices agree.
id='thm-froda';t=load(id)
a='rationals: at a discontinuity $c$ interior to $I$ the value $J(c)$ is read off\nthe **least index** of a rational lying in the gap\n$\\bigl(\\lim_{x \\to c^{-}} f(x),\\ \\lim_{x \\to c^{+}} f(x)\\bigr)$, which is a\nnonempty open interval by [[thm-monotone-discontinuities-are-jumps]].'
b='rationals. Write $L^{-}(c):=\\lim_{x \\to c^{-}}f(x)$ and\n$L^{+}(c):=\\lim_{x \\to c^{+}}f(x)$. At a discontinuity $c$ interior to $I$,\nthe value $J(c)$ is read off the **least index** of a rational in the ordered gap\n$\\bigl(\\min\\{L^{-}(c),L^{+}(c)\\},\\ \\max\\{L^{-}(c),L^{+}(c)\\}\\bigr)$.\nThis is nonempty for either direction of monotonicity by\n[[thm-monotone-discontinuities-are-jumps]]; the at most two included endpoints\nof $I$ receive separate even codes as in the proof.'
replace(id,a,b)
a='1.1 It is enough to treat a nondecreasing $f$: if $f$ is nonincreasing then $-f$ is nondecreasing and has the same discontinuity set, so the conclusion for $-f$ is the conclusion for $f$. Assume from here on that $f$ is nondecreasing. [L6]'
b='1.1 First prove the construction for a nondecreasing function and any fixed rational enumeration $e$. For an original nonincreasing $f$, apply that construction to $-f$ with the reflected enumeration $k\\mapsto-e(k)$. The one-sided limits of $-f$ are $-L^{-}(c)$ and $-L^{+}(c)$, with their side labels unchanged, directly from the absolute-value limit condition. Hence $-L^{-}(c)<-e(k)<-L^{+}(c)$ holds exactly when $L^{+}(c)<e(k)<L^{-}(c)$. The least indices for the transformed upward gap and the original ordered gap therefore agree. The discontinuity set is unchanged, and the endpoint codes depend only on $I$, so the resulting injection has exactly the stated form. Assume from here on that $f$ is nondecreasing. [L1, L6, algebra]'
replace(id,a,b);notes[id]='Original truncated negative independently confirmed by the downward step f(x)=1 for x<0, 0 for x>=0: the old interval (1,0) is empty. The countability theorem and its upward proof are sound. Ordered min/max endpoints fix the scientific precise assertion for both monotonicity directions. The reflected enumeration k->-e(k) for -f proves the original fixed e least-index description exactly, not merely an unspecified injection. Odd interior/even endpoint coding, empty/singleton intervals and at-most-two endpoint scope are preserved.'
# Oscillation: missing triangle supplier and the actual relative superlevel interface.
id='thm-continuity-iff-oscillation-zero';t=load(id)
replace(id,'def-neighbourhood-r, lem-of-abs-value]','def-neighbourhood-r, lem-of-abs-value, lem-of-triangle-inequality]')
replace(id,'accessible: the sets $\\{\\,x : \\omega_f(x) \\ge \\varepsilon\\,\\}$ are closed','accessible: the sets $\\{\\,x\\in A : \\omega_f(x) \\ge \\varepsilon\\,\\}$ are relatively closed in $A$')
replace(id,'[L4] $|u - w| \\le |u - v| + |v - w|$ and $|u| \\ge 0$ for reals $u, v, w$ ([[lem-of-abs-value]]).','[L4] $|u-w|\\le |u-v|+|v-w|$ for reals $u,v,w$, by applying [[lem-of-triangle-inequality]] to $(u-v)+(v-w)=u-w$; and $|u|\\ge0$ by [[lem-of-abs-value]].')
notes[id]='Original negative confirmed: basic absolute-value properties do not contain the triangle inequality. The actual triangle supplier proves |x+y|<=|x|+|y| on ordered fields, which yields the three-point inequality by x=u-v,y=v-w. Both directions of the oscillation theorem, including isolated points and potentially infinite local oscillation, are sound after this exact supplier declaration. The explanatory Statement superlevel claim must also be relative for arbitrary A, matching the actual superlevel lemma. Main iff and full epsilon/supremum proof are unchanged.'
# Interval Baire remark, with theorem/proof unchanged.
id='lem-baire-category-in-a-closed-interval';t=load(id)
a='and the localisation is not formal: a closed set may be nowhere dense in $\\mathbb{R}$ and yet fill an interval, so the conclusion has to be stated as "contains a nondegenerate closed subinterval" rather than "has nonempty interior in $\\mathbb{R}$". The two are in fact the same condition here, which is what step 2.1 uses.'
b='and the localisation is supplied by applying the theorem to the closed traces $G_n=F_n\\cap[a,b]$. A closed set contains a nondegenerate closed interval if and only if it has nonempty interior in $\\mathbb{R}$; in particular, a nowhere dense set cannot fill such an interval. Step 2.1 uses exactly this equivalence for the traces $G_n$, so the conclusion locates the subinterval inside $[a,b]$.'
replace(id,a,b);notes[id]='Original negative confirmed: a closed nowhere dense subset of R has empty interior and cannot contain any interval of positive length. Proof 1.1-4.1 correctly uses the closed traces F_n intersect [a,b] and dense complements, so only the explanatory Remark needs replacement. Nondegenerate interval scope, singleton failure and choice-free Baire interface stay unchanged.'
# Sharpness follows from converse realization plus Froda upper bound, not Froda alone.
id='ex-froda-is-sharp';t=load(id)
a="3.1 Claims 1 and 3 are steps 1.1, 1.2 and 1.3, and the whole is consistent with Froda's theorem, which permits any at most countable discontinuity set and no larger one. [step 1.1, step 1.2, step 1.3, step 2.1, L3] ∎"
b="3.1 Claims 1 and 3 are steps 1.1, 1.2 and 1.3. The realization theorem [L2], applied in step 2.1, supplies the function with discontinuity set $E$; Froda's theorem [L3] supplies the upper bound that every monotone discontinuity set is at most countable. Thus this countably infinite $E$ attains that bound. [step 1.1, step 1.2, step 1.3, step 2.1, L2, L3] ∎"
replace(id,a,b);notes[id]='Original negative confirmed as a supplier attribution defect. The displayed sequence s(k)=1-1/(k+1) is strictly increasing from 0 into [0,1), so its image is countably infinite. Realization L2 gives the bounded nondecreasing witness and continuity at 1, whereas Froda L3 gives only the upper countability bound. Rewriting final step attributes both directions accurately and preserves every Example claim and all endpoint/indexing conventions.'
# Literal source quotation consumer must follow the precise Froda surface.
id=quant;t=load(id)
a=section(old['thm-froda'],'Statement').replace('[[','').replace(']]','')
# This consumer's quotation normalizes line wraps, spaces and wikilinks; replace its entire F3 paragraph block explicitly.
match=re.search(r'^\[F3\][\s\S]*?(?=^\[F4\])',t,re.M);assert match
qnew=section(new['thm-froda'],'Statement').replace('[[','').replace(']]','')
replace(id,match.group(0),'[F3] [[thm-froda]]: '+qnew+'\n\n')
notes[id]='Full current consumer Example, Facts F1-F5 and Verification 1.1-3.1 read. F3 copies the complete old Froda Statement and its invalid arbitrary-monotone upward gap, so that quotation is synchronized to the corrected ordered gap. Proof 2.2 uses only countability of nondecreasing CDF discontinuities to choose continuity points, and 3.1 uses countability for the nondecreasing quantile. Both remain valid; Example and Verification unchanged. No further mathematical interface is changed.'
# Nonlogical page repeats the vocabulary error and must follow the corrected classification.
page='library/real-analysis/monotone-functions-and-discontinuities.md';pt=pathlib.Path(page).read_text()
pa="then sorts discontinuities into removable, jump and essential, equivalently\nRudin's first and second kind, and"
pb='then distinguishes removable, jump and essential discontinuities at two-sided\npoints: the first kind groups removable and jump, while the second kind is\nessential. Its one-sided convention uses only the available limit. The theorem'
assert pt.count(pa)==1
pnew=pt.replace(pa,pb)
# Write only isolated carriers; canonical paths are untouched.
for id in old:
 p=pathlib.Path('items/'+id+'.md');(out/'before'/p.name).write_text(old[id]);(out/'proposed'/p.name).write_text(new[id])
(out/'before'/'monotone-functions-and-discontinuities.page.md').write_text(pt);(out/'proposed'/'monotone-functions-and-discontinuities.page.md').write_text(pnew)
# Affected-use discovery: preserve the full ambient G_delta consequence and supply triangle.
id='thm-baire-one-continuity-points';t=load(id)
replace(id,'lem-of-abs-value, def-max-min','lem-of-abs-value, lem-of-triangle-inequality, def-max-min')
a='$\\mathbb{R}$. It is not claimed that $C$ is $G_\\delta$ as a subset of\n$\\mathbb{R}$, nor that it is dense in $\\mathbb{R}$; neither is true in general,\nsince $C \\subseteq [a,b]$.'
b='$\\mathbb{R}$. In fact $C$ is also $G_\\delta$ as a subset of $\\mathbb{R}$:\n$[a,b]=\\bigcap_{n\\in\\mathbb{N}}(a-1/(n+1),b+1/(n+1))$ is $G_\\delta$,\nand intersecting this sequence of open sets with a sequence presenting $V$\npresents $C$ as $G_\\delta$. Density is relative to $[a,b]$; the bounded set\n$C\\subseteq[a,b]$ is not dense in $\\mathbb{R}$.'
replace(id,a,b)
a=r'[L6] $[a,b]$ and every $[c,d]$ with $c \le d$ are closed; an intersection of a nonempty family of closed sets is closed; a set is closed exactly when its complement is open ([[thm-open-set-algebra-r]], claim 3, [[def-open-and-closed-in-r]], [[def-interval]]).'
b=r'[L6] $[a,b]$ and every $[c,d]$ with $c \le d$ are closed; every open interval is open; an intersection of two open sets is open; an intersection of a nonempty family of closed sets is closed; a set is closed exactly when its complement is open ([[thm-open-set-algebra-r]], claims 2 and 3, [[def-open-and-closed-in-r]], [[def-interval]]).'
replace(id,a,b)
a='[L11] $|u - w| \\le |u - v| + |v - w|$, $|u| \\ge 0$, and a real that is $\\le \\eta$ for every real $\\eta > 0$ and $\\ge 0$ is $0$ ([[lem-of-abs-value]]).'
b='[L11] $|u-w|\\le|u-v|+|v-w|$ by applying [[lem-of-triangle-inequality]] to $(u-v)+(v-w)=u-w$; $|u|\\ge0$ by [[lem-of-abs-value]]. A real $r\\ge0$ that satisfies $r\\le\\eta$ for every real $\\eta>0$ is $0$: otherwise $\\eta=r/2>0$ gives $r\\le r/2<r$.'
replace(id,a,b)
a='1.3 Claim 4. The set of continuity points of $f$ on the domain $[a,b]$ is $[a,b] \\cap V$ for a $G_\\delta$ subset $V \\subseteq \\mathbb{R}$. [L9]'
b='1.3 Claim 4. The set of continuity points of $f$ on the domain $[a,b]$ is $C=[a,b]\\cap V$ for a $G_\\delta$ subset $V\\subseteq\\mathbb{R}$. Write $V=\\bigcap_n U_n$ with every $U_n$ open. Then $C=\\bigcap_{n\\in\\mathbb{N}}(U_n\\cap(a-1/(n+1),b+1/(n+1)))$: points of $[a,b]$ lie in every displayed interval, whereas a point outside $[a,b]$ is excluded for some $n$ by the reciprocal Archimedean property. Each intersectand is open, so $C$ is also $G_\\delta$ in $\\mathbb{R}$. [L6, L9, L10, algebra]'
replace(id,a,b);notes[id]='Actual affected-use review found an independently false ambient G_delta disclaimer: a closed real interval is G_delta, and its intersection with the supplied G_delta V is G_delta. The corrected Statement explanation and proof 1.3 retain this strongest true conclusion as well as all four numbered claims; density remains relative to the interval. L11 also needed the actual triangle supplier, used at 2.2, 4.1 and 5.1; the tiny r/2 argument supplies its final order observation. The remaining complete proof correctly gives nowhere-dense positive oscillation superlevels, meager D and density, including endpoints.'
# Direct Baire-one consumer uses only unchanged density, but its actual proof repeats the supplier defect.
id='ex-indicator-of-q-is-baire-class-two-not-one';t=load(id)
replace(id,'lem-of-abs-value, def-neighbourhood-r','lem-of-abs-value, lem-of-triangle-inequality, def-neighbourhood-r')
a='[L7] $|u - w| \\le |u - v| + |v - w|$ and $|u| \\ge 0$ ([[lem-of-abs-value]]); a sequence of reals converges to $L$ when it is eventually within every positive $\\varepsilon$ of $L$ ([[def-real-limit]], [[def-sequence]]).'
b='[L7] $|u-w|\\le|u-v|+|v-w|$ by applying [[lem-of-triangle-inequality]] to $(u-v)+(v-w)=u-w$, and $|u|\\ge0$ by [[lem-of-abs-value]]; a sequence of reals converges to $L$ when it is eventually within every positive $\\varepsilon$ of $L$ ([[def-real-limit]], [[def-sequence]]).'
replace(id,a,b);notes[id]='Complete Example, Facts and Verification read. L3 and proof 2.2 use only the preserved density claim3 of Baire-one; the ambient G_delta change does not affect them. However Verification 3.1 proves the finite-distance function rho_m is 1-Lipschitz by triangle, absent from its old cited absolute-value supplier. Add the exact triangle supplier at L7 and dependencies; finite indicators remain Baire-one by continuous hat approximants, then converge to D, which is nowhere continuous even at domain endpoints. Example and Verification are byte-unchanged; no onward scientific interface changes.'
for id in ['thm-baire-one-continuity-points','ex-indicator-of-q-is-baire-class-two-not-one']:
 (out/'before'/(id+'.md')).write_text(old[id]);(out/'proposed'/(id+'.md')).write_text(new[id])
# Exact raw source guards and full before/proposed carriers, never final seals.
records=[]
for id in old:
 p=pathlib.Path('items/'+id+'.md');assert p.read_text()==old[id]
 changes=[s for s in ['Definition','Statement','Example','Facts & Assumptions','Proof','Verification','Remarks'] if section(old[id],s)!=section(new[id],s)]
 records.append({'id':id,'path':str(p),'status':'published','raw_source_guard':sha(p.read_bytes()),'before':str(out/'before'/p.name),'proposed':str(out/'proposed'/p.name),'literal_operations':ops[id],'changed_sections':changes,'mathematical_disposition':notes[id],'read':{'complete_current_frontmatter':True,'complete_current_statement_definition_example':True,'complete_current_facts':section(old[id],'Facts & Assumptions') is not None,'complete_current_proof_verification':section(old[id],'Proof') is not None or section(old[id],'Verification') is not None}})
page_record={'path':page,'raw_source_guard':sha(pt.encode()),'before':str(out/'before'/'monotone-functions-and-discontinuities.page.md'),'proposed':str(out/'proposed'/'monotone-functions-and-discontinuities.page.md'),'literal_operations':[{'op':'replace-once','old':pa,'new':pb}],'reason':'The companion page repeats the same false equivalence between three discontinuity cases and two Rudin kinds. The actual one-sided convention and first-kind grouping are now stated exactly.'}
# Proposed field-level contract operations against actual current rows. Integration must refresh all semantic hashes separately.
metadata=[]
tri=section(pathlib.Path('items/lem-of-triangle-inequality.md').read_text(),'Statement')
triangle_facts={'thm-continuity-iff-oscillation-zero':('L4',['2.1']),'thm-baire-one-continuity-points':('L11',['2.2','4.1','5.1']),'ex-indicator-of-q-is-baire-class-two-not-one':('L7',['3.1'])}
for p in sorted(pathlib.Path('research').glob(run+'*proof-contracts.json')):
 x=json.loads(p.read_text());contracts=x.get('contracts',{})
 for cid,c in contracts.items():
  for i,r in enumerate(c.get('citations',[])):
   src=r.get('source');sec=r.get('source_section')
   if src in old and sec and section(old[src],sec)!=section(new[src],sec):
    q=section(new[src],sec)
    if q is not None and r.get('quote')!=q:
     metadata.append({'path':str(p),'pointer':['contracts',cid,'citations',i,'quote'],'current_row':r,'row_guard':jg(r),'old':r.get('quote'),'new':q,'reason':'Exact changed supplier section quotation; cited scientific use examined in consumer review.'})
  if cid=='thm-baire-one-continuity-points':
   for i,r in enumerate(c.get('citations',[])):
    if r.get('fact')=='L6' and r.get('source') in ['thm-open-set-algebra-r','def-open-and-closed-in-r','def-interval'] and '1.3' not in r.get('uses',[]):
     metadata.append({'path':str(p),'pointer':['contracts',cid,'citations',i,'uses'],'current_row':r,'row_guard':jg(r),'old':r.get('uses'),'new':r.get('uses',[])+['1.3'],'reason':'New explicit ambient G_delta construction uses interval openness and finite open intersections at proof 1.3.'})
  if cid in triangle_facts and not any(r.get('source')=='lem-of-triangle-inequality' for r in c.get('citations',[])):
   fact,uses=triangle_facts[cid];r={'fact':fact,'source':'lem-of-triangle-inequality','source_section':'Statement','quote':tri,'uses':uses}
   metadata.append({'path':str(p),'pointer':['contracts',cid,'citations'],'op':'append','current_array':c.get('citations',[]),'row_guard':jg(c.get('citations',[])),'new':r,'reason':'Actual triangle supplier required for the specified three-point inequality proof uses; keep the existing absolute-value citation for nonnegativity.'})
  if cid in {'thm-froda','ex-froda-is-sharp','thm-baire-one-continuity-points'}:
   proof=section(new[cid],'Proof') or section(new[cid],'Verification') or ''
   for i,r in enumerate(c.get('derivations',[])):
    if r.get('step')!={'thm-froda':'1.1','ex-froda-is-sharp':'3.1','thm-baire-one-continuity-points':'1.3'}[cid]: continue
    m=re.search(r'^'+re.escape(r.get('step',''))+r' (.*) \[([^\[\]\n]+)\](?: ∎)?$',proof,re.M)
    if m:
     claim,inputs=m.group(1),[a.strip() for a in m.group(2).split(',')]
     for fld,v in [('claim',claim),('inputs',inputs)]:
      if r.get(fld)!=v:metadata.append({'path':str(p),'pointer':['contracts',cid,'derivations',i,fld],'current_row':r,'row_guard':jg(r),'old':r.get(fld),'new':v,'reason':'Exact changed current numbered proof derivation; preserve its existing identity and all unrelated rows.'})
# Record full actual direct/alias/nonlogical reading, while retaining the larger graph without pretending to audit it.
inv=json.loads((out/'inventory.json').read_text());ids=json.loads((out/'direct-read-ids.json').read_text())
ids=sorted(set(ids+['ex-indicator-of-q-is-baire-class-two-not-one','def-baire-class-one']))
used={
'cex-an-integrable-function-with-no-primitive':'Only distinguishes the derivative obstruction from removable/jump cases; classification predicates are unchanged.',
'cex-indicator-of-a-fat-cantor-set-is-not-integrable':'Uses essential discontinuity when both finite one-sided limits do not exist; no first/second-kind equivalence or downward gap used.',
'cor-bv-discontinuities-are-countable-and-of-first-kind':'A BV difference of two nondecreasing functions has finite side limits and countable union of their discontinuities. Froda countability and upward side order are preserved; first kind includes removable as before.',
'cor-countably-many-discontinuities-integrable':'Uses countable D and ordinary discontinuity terminology, not any gap coding or vocabulary equivalence.',
'cor-derivatives-have-no-removable-or-jump-discontinuities':'Uses the unchanged finite equal/unequal one-sided predicates and Darboux contradiction; first-kind grouping is unchanged.',
'cor-no-function-is-continuous-exactly-on-q':'Uses the unchanged F_sigma discontinuity representation and R Baire theorem; no affected ambient-closed assertion for arbitrary A.',
'ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero':'Uses discontinuity at Cantor points and classification essential terminology; no modified explanatory grouping or gap.',
'ex-integral-of-the-floor-function':'Uses upward jumps and finite side limits for the nondecreasing floor function; corrected downward extension does not change these.',
'ex-monotone-function-discontinuous-exactly-at-the-rationals':'Realization supplies the nondecreasing witness; Froda is only the unchanged at-most-countable bound.',
'ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set':'Uses superlevel closure on the stated full real domain and basic jump/essential predicates; no arbitrary-A ambient closure inference.',
'ex-thomae-values-and-oscillation-computed':'Uses only the unchanged continuity iff zero oscillation to identify discontinuities from explicit oscillation values.',
'fs-the-integral-function-is-always-a-primitive':'False-statement refutation distinguishes removable/jump discontinuities of the step integrand from primitive existence; definitions preserved.',
'lem-local-boundedness-of-separately-holomorphic-functions':'Uses interval Baire Statement to find a closed nondegenerate subinterval in a closed cover; the false Remark plays no role.',
'def-baire-class-one':'Its explanatory strictness paragraph uses only density of continuity points on an interval; that conclusion is preserved and no ambient G_delta denial is used.',
 'thm-convex-functions-are-differentiable-off-a-countable-set':'Applies Froda only to the monotone right derivative to obtain countability; no rational-gap implementation is quoted.',
 'thm-dirichlet-and-thomae-continuity-sets':'Invokes only the unchanged oscillation-zero equivalence, on R, after explicit Dirichlet/Thomae oscillation estimates.',
 'thm-discontinuity-set-is-f-sigma':'Uses the unchanged oscillation-zero equivalence and already correctly relative-closed superlevel supplier on arbitrary A. Its C=A intersect V and D=A intersect F_sigma statements remain unchanged.',
 'thm-finitely-many-discontinuities-integrable':'Uses only finite-discontinuity integrability and jump example terminology; classification predicates unchanged.',
 'thm-increasing-functions-split-uniquely-as-jump-plus-continuous':'All gap use is for the explicitly nondecreasing input; Froda supplies countability only. Its positive jump masses and ordered side values stay sound.',
 'thm-jump-functions-have-derivative-zero-almost-everywhere':'Uses Froda countability for nondecreasing summable jumps; modified generic gap coding is not used.',
 'thm-lebesgue-criterion':'Uses pointwise continuity iff zero oscillation and its local epsilon consequence; no changed explanatory ambient-closed assertion is needed.',
 'thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures':'Uses countability of discontinuities to discard the exceptional jump set; Froda bound and both monotonicity directions are preserved.',
 'thm-monotone-implies-integrable':'Riemann sums use nondecreasing endpoint bounds with an explicit -f reduction; unchanged upward side-limit results and first-kind predicates suffice.',
 'thm-monotone-one-sided-limits-exist':'Supplier review: interior nondecreasing limits use sup on the left and inf on the right; its -f paragraph exchanges sup/inf without exchanging side labels, so it already supports the repaired jump theorem.',
 'thm-monotone-with-prescribed-discontinuity-set':'Supplier and consumer review: canonical positive summable jumps realize every countable E on R; its Froda use is countability only. No downward extension is invoked.',
 'thm-riemann-stieltjes-darboux-criterion':'Uses only at-most-countably-many discontinuities of the monotone integrator and unchanged finite side limits; no chosen-rational gap formula is used.'}
reads=[]
(out/'read-current').mkdir(exist_ok=True)
for id in ids:
 p=pathlib.Path('items/'+id+'.md');t=p.read_text()
 (out/'read-current'/(id+'.md')).write_text(t)
 reads.append({'id':id,'path':str(p),'raw_source_guard':sha(p.read_bytes()),'full_current_read_carrier':str(out/'read-current'/(id+'.md')),'read_scope':'Complete current frontmatter and all mathematical sections including the entire Proof/Verification where present.','actual_use_review':notes.get(id,used.get(id,'ERROR MISSING REVIEW')),'outward_mathematical_interface_changed':id=='thm-baire-one-continuity-points','propagation':'Only corrected Baire-one ambient G_delta consequence requires its direct and nonlogical uses; all other untouched consumer claims stop propagation.' if id=='thm-baire-one-continuity-points' else 'The actual interface used by this consumer remains sound; no change to its outward Statement/Example/Definition is necessary.'})
assert not any(r['actual_use_review']=='ERROR MISSING REVIEW' for r in reads)
suppliers=['def-f-sigma-g-delta','thm-open-set-algebra-r','cor-archimedean-reciprocal','lem-of-triangle-inequality','lem-of-abs-value','lem-oscillation-superlevel-sets-are-closed','def-one-sided-limits','thm-two-sided-limit-iff-both-one-sided','thm-monotone-one-sided-limits-exist','thm-monotone-with-prescribed-discontinuity-set','def-continuity-real','def-oscillation','thm-baire-category-r','def-nowhere-dense-meager','def-monotone-function','def-baire-class-one']
supplier_reads=[{'id':id,'path':'items/'+id+'.md','raw_source_guard':sha(pathlib.Path('items/'+id+'.md').read_bytes()),'read_scope':'Complete current mathematical body including full proof when present; actual prerequisites checked independently.'} for id in suppliers]
archives=[str(pathlib.Path('research')/(run+'-owner-step5-'+s+'/owner-record.json')) for s in ['selected-published-preedit','monotone-supplier-preedit','monotone-followthrough-preedit','baire-indicator-preedit']]
archive_rows=[]
for a in archives:
 x=json.loads(pathlib.Path(a).read_text())
 for r in x.get('rows',[x]):
  if r.get('id') in old:
   assert r['before_raw_sha256']==sha(old[r['id']].encode()),r['id'];archive_rows.append({'archive':a,'record':r})
packet={'run':run,'owner':'/root/math81_boundary_classical_low','cycle':1,'guard_convention':'Raw source SHA256 is over exact UTF-8 bytes. Row guards are SHA256 of compact ensure_ascii=false JSON preserving current key order. Each current_row/current_array is the exact original preimage; compare all guards before grouped operations on a shared row, then apply fields together. No proposed output hash is a final seal.','mode':'isolated ordinary published focused repair proposal; no native adjudication','source_changes':records,'page_changes':[page_record],'contract_field_operations':metadata,'current_preedit_lineage':archive_rows,'consumer_review':reads,'supplier_read_records':supplier_reads,'reachability_inventory':str(out/'inventory.json'),'complete_reachable_ids':str(out/'consumer-ids.json'),'reachability_scope':'Complete 2650-ID graph inventory retained. Actual direct, alias and nonlogical uses of changed interfaces were fully inspected. Propagation stops at unchanged consumer mathematical interfaces; no claim of auditing all 2650 sources. Baire-one aliases and density-only uses were included.','constraints':{'canonical_edits':False,'native_findings_changed':False,'judge_verdicts_changed':False,'claims_or_receipts_written':False,'gates_run':False,'final_hash_seals_computed':False},'root_followthrough':['Recheck all raw source and row guards at integration; apply exact literal source operations only, never overwrite evolving files.','Preserve every old receipt and claim; root owns authorized successor receipt lineage, native policy maintenance, current context refresh, proof layout, hashes and recertification.','Refresh source hashes/manifests and all affected contract quotation seals after applying proposed metadata operations.','Indicator full preimage and existing claim/receipt lineage are archived in the root baire-indicator-preedit record; source remains untouched.']}
(out/'proposal.json').write_text(json.dumps(packet,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'sources':len(records),'contract_field_operations':len(metadata),'actual_consumer_reads':len(reads),'supplier_reads':len(supplier_reads)}))
