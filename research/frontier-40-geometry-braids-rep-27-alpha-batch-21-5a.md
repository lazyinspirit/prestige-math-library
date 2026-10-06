# Batch 21 Step 5a adjudication

Run: `frontier-40-geometry-braids-rep-27`; group: `batch-21`. Scope: 18 touched items and one A-page carrier. Reader and refuter findings arrays are empty. Reviews below follow the generated dependency order. No judge, certification, dispatch, or engine transition is performed.

Pre/post raw item hashes were compared: twelve item bodies changed; six bodies are unchanged with contract enrichment. All eighteen current raw item hashes matched the post-reader snapshot at entry. The A-page changed and its item order did not.

## `def-canonical-divisor-of-a-smooth-projective-surface`

Verdict: `accepted_repair`; confidence 1.

The current Definition fixes integral smooth projective dimension two over any field and inherited AC. The rational-section theorem supplies the canonical section with divisor exactly D; transport across an isomorphism and multiplication by g give D-D'=div(g), including the converse. Bilinearity makes intersections independent of the representative. Surface Serre duality with E=O and E=L-dual gives both Euler identities, with cohomology zero outside 0..2. Vakil section 18.4.4, printed p.510, gives p_a=chi(O)-1; h0=1 is explicitly conditional over arbitrary fields. All 15 cited supplier interfaces were read. Current bytes equal post-reader bytes; the two reader corrections are justified.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-def-canonical-divisor-of-a-smooth-projective-surface-1`, `frontier-40-geometry-braids-rep-27-5a-batch21-def-canonical-divisor-of-a-smooth-projective-surface-2`.

## `def-numerical-equivalence-and-neron-severi-space`

Verdict: `accepted_repair`; confidence 1.

The quotient is by the integral radical of the symmetric bilinear Picard pairing, not by isotropic elements. Cartier/Picard surjectivity and the effective-difference construction in the intersection supplier give equivalent testing classes; restriction-degree uses an effective first argument. Duals negate pairings. If nv=0 then all integral evaluations vanish and v=0; rational nondegeneracy follows after clearing denominators. On each finite rational span W the restricted evaluations span W*, since their common kernel is zero; an invertible rational evaluation matrix remains invertible over R. Finite support of each tensor then proves real nondegeneracy and [H]=0 iff numerical triviality without a finiteness theorem. Zero, torsion, and both equivalence directions were checked, as were all eleven suppliers. Current bytes equal the reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-def-numerical-equivalence-and-neron-severi-space-1`.

## `lem-ample-divisor-positive-intersection-on-smooth-projective-surface`

Verdict: `reviewed_no_defect`; audit enrichment only.

Item body is unchanged; reader changes only the contract boundary evidence. All six steps and 26 supplier interfaces were checked. A nonzero effective divisor has dimension one by height-one and finite-type-domain dimension formulas. For A=H^m, the nonzero degree-one Hilbert polynomial of O_D has positive leading coefficient by eventual h0>=0; its first difference gives A.D>0 via restriction-degree. For O_X the degree-two polynomial P yields A^2=P(0)-2P(-1)+P(-2)=2c>0; the Hilbert theorem covers every integer twist. A nonzero section on integral X is regular; empty zero scheme trivializes its bundle, while nonempty gives strict positivity. m>=1 prevents division by zero, and the proof needs no rational point or infinite field. Stacks 33.45.1, .8, .9 and .12 support the polynomial and degree conventions. AC is inherited explicitly. No body repair is owed.

No mathematical defect identified; no ledger row.

## `lem-ample-twist-of-line-bundle-is-very-ample`

Verdict: `reviewed_no_defect`; audit enrichment only.

Item body is unchanged; the contract now describes the actual graph argument. All six steps and 19 supplier interfaces were checked. Serre global generation on Noetherian X gives one finite generating family for G=M tensor L^n1. The ample-power theorem gives a uniform d0 for all d>=d0, hence n0=n1+d0. The section map phi need not be an immersion; the graph of phi is closed because projective space is separated, and id times psi is a base change of the chosen closed immersion psi. Their composite and the Segre map are closed immersions, pulling O(1) back to G tensor L^(n-n1). No positivity assumption on M is used. Endpoint n=n0 and p=0 are covered; only finite selections occur beyond inherited AC. The source route is Vakil Exercise 16.2.E, realized by the exact graph and Segre suppliers.

No mathematical defect identified; no ledger row.

## `lem-picard-group-of-a-point-blowup-of-the-projective-plane`

Verdict: `accepted_repair`; confidence 1.

All ten steps and 46 supplier interfaces were read. The centre is explicitly k-rational, so the blowup matrix supplier has residue degree r=1; on plane twists 0,-1,-2 the exact H0/intermediate/top-cohomology interfaces give chi=1,0,0 and ell^2=1. Explicit Rees charts k[u,v/u]=k[u,t], k[u/v,v]=k[s,v] remain polynomial charts after every field extension, proving smoothness rather than merely regularity. A line through p has multiplicity one, and its strict transform is integral by injection of each closure ring into the function field. Off E it is the punctured line, so deleting E and m leaves an affine plane. UFD valuations make its class group zero; restriction preserves the generic local rings, and subtraction of the same rational principal divisor proves the excision kernel. Thus E,m generate Pic, ell=m+E, and pairings with ell,E force any integral relation to have coefficients zero. Additive Picard notation including O(a ell+bE) denotes the associated Cartier class through F7; it has no representative dependence. Inherited AC covers divisor class/cohomology suppliers. Vakil Exercise 20.2.D and hint 20.2.7, printed p.582, match the claim. Reader's explanatory repairs are sound and current bytes equal post-reader bytes.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-lem-picard-group-of-a-point-blowup-of-the-projective-plane-1`, `frontier-40-geometry-braids-rep-27-5a-batch21-lem-picard-group-of-a-point-blowup-of-the-projective-plane-2`.

## `lem-product-of-projective-lines-is-a-smooth-projective-surface`

Verdict: `accepted_repair`; confidence 1.

All seven steps and 35 supplier interfaces were checked. Four affine product charts are polynomial domains k[t,u], with nonempty localization overlaps identifying their zero-prime generic points; this proves irreducibility and nonemptiness, and localizations prove reducedness. The finite Noetherian cover has dimension two. The arbitrary-field clause of smooth product stability applies, and smoothness implies regularity. Segre with m=n=1 gives the closed embedding into P3 and projectivity/properness. Projections are base changes of the flat proper locally finitely presented projective-line map, and the chart preimages prove quasi-compactness; properness also supplies separatedness and hence quasi-separatedness if included in the finite-presentation convention. No perfectness or algebraic closure of k is assumed. The finite chart construction adds no infinite choice beyond the suppliers' AC. The reader correctly removes the invalid converse regular=>smooth over an arbitrary field; current bytes equal the post snapshot.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-lem-product-of-projective-lines-is-a-smooth-projective-surface-1`.

## `lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces`

Verdict: `reviewed_no_defect`; audit enrichment only.

Current body is unchanged with contract enrichment. All five steps and seventeen cited interfaces were checked. For C and -K-C the four-term definition is chi(O)-chi(-C)-chi(K+C)+chi(K); surface Serre duality identifies the middle Euler terms and chi(K)=chi(O). The effective-divisor structure sequence gives chi(O)-chi(-C)=chi(O_C), so bilinearity changes the sign to C.(K+C)=-2chi(O_C). No curve smoothness, reducedness, or geometric integrality enters; a nonzero effective divisor on the integral surface is a proper dimension-one scheme. If C is integral, the exact genus supplier defines p_a=1-chi even over arbitrary fields. Restriction-degree has an effective first input and applies to K+C. AC is inherited without further selection. Vakil Exercise 20.2.B(a), printed pp.581-582, states this Euler identity; the proof does not import smooth-curve differential adjunction from MIT. No repair needed.

No mathematical defect identified; no ledger row.

## `lem-top-cohomology-vanishes-above-canonical-ample-threshold`

Verdict: `accepted_repair`; confidence 1.

All three steps and twelve suppliers were checked. Duality is applied to M at q=2 and gives the perfect pairing with H0(omega tensor M-dual), hence equivalence of vanishing in both directions. For N=omega tensor M-dual, a nonzero section is regular on integral X. Empty zero scheme gives N trivial, thus equality M.H=K.H; a nonempty effective divisor gives N.H>0, thus M.H<K.H. Both contradict the strict stated threshold. At equality vanishing is deliberately not claimed (M=omega can have top cohomology). The Picard shorthand (K-M).H is exactly the bundle pairing from F4; the argument never places a line bundle in the O(divisor) constructor. All cohomology is finite-dimensional and AC inherited. Vakil 20.2.15, printed p.586, supplies the same duality/positivity route. Current bytes equal the reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-lem-top-cohomology-vanishes-above-canonical-ample-threshold-1`, `frontier-40-geometry-braids-rep-27-5a-batch21-lem-top-cohomology-vanishes-above-canonical-ample-threshold-2`.

## `thm-riemann-roch-for-smooth-projective-surfaces`

Verdict: `accepted_repair`; confidence 1.

All four steps and ten supplier interfaces were checked. The auxiliary bundles A=L-dual and B=L tensor omega-dual have duals L and L-dual tensor omega, and the latter tensor with L is omega. The four-term pairing therefore equals 2(chi(O)-chi(L)) by surface duality. Bilinearity also makes it L.K-L^2, proving the claimed formula for every line bundle without positivity or h1 vanishing. This integer equality proves the parity/integrality assertion even in characteristic two; division by 2 is in Q, not in k. O, omega, negative representatives, arbitrary-field h0, and canonical representative changes are covered. MIT Lecture 2 Theorem 1, lecture p.2, contains the complete same four-term calculation; Vakil Exercise 20.2.B(b) gives the divisor form. Inherited AC is explicit. Current bytes equal the corrected reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-thm-riemann-roch-for-smooth-projective-surfaces-1`.

## `lem-picard-group-and-intersection-form-of-p1-times-p1`

Verdict: `accepted_repair`; confidence 1.

All six steps and 37 supplier interfaces were checked. Flat projection pullbacks give the effective ruling divisors and their O(1) bundles. Restriction to a constant projection is trivial; restriction of the other ruling is O_P1(1), of degree 2-1=1 by H0 and top H1 at d=0,1. Thus the matrix is [[0,1],[1,0]]. The affine-plane complement has zero class group by UFD valuation calculations; restriction and subtraction of the same rational principal divisor give the excision kernel. Pic=Cl then proves generation, and pairing an integral relation with both rulings proves independence. The determinant section defining the diagonal has coordinate-difference equations on equal-index charts and +/- (1-tu) on mixed charts, so its scheme-theoretic zero locus is exactly the diagonal over every field, including characteristic two. Cartier addition gives its linear class ell+m, hence numerical class and square 2. AC is inherited. Vakil Exercise 20.2.C, printed p.582, and Stacks 31.27 definitions support the claim and local class calculation. Current bytes equal the reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-lem-picard-group-and-intersection-form-of-p1-times-p1-1`, `frontier-40-geometry-braids-rep-27-5a-batch21-lem-picard-group-and-intersection-form-of-p1-times-p1-2`, `frontier-40-geometry-braids-rep-27-5a-batch21-lem-picard-group-and-intersection-form-of-p1-times-p1-3`, `frontier-40-geometry-braids-rep-27-5a-batch21-lem-picard-group-and-intersection-form-of-p1-times-p1-4`.

## `lem-positive-square-divisor-has-effective-multiple`

Verdict: `reviewed_no_defect`; audit enrichment only.

All three steps and eleven cited supplier interfaces were checked. Strict L.H>0 makes nL.H eventually exceed K.H, so threshold vanishing kills h2. Riemann-Roch gives chi(L^n)=chi(O)+(n^2 L^2-n L.K)/2, tending to +infinity because L^2>0. Choosing a single integer n>=1 above both bounds gives h0=chi+h1>=chi>0; h1 vanishing is not required. The written hypotheses include both sign conditions, avoiding the negative ample-direction countercase and zero-square boundary. Canonical choices affect no pairing, and AC is inherited rather than used for an infinite section family. Vakil 20.2.16, printed p.586, contains this complete argument. The body matches both pre and post snapshots; the reader's contract update correctly records the sign and both bounds. No mathematical defect.

No mathematical defect identified; no ledger row.

## `thm-hodge-index-theorem-ample-case`

Verdict: `accepted_repair`; confidence 1.

All four steps and fifteen suppliers were checked. If L^2>0 and L.H=0, a large ample twist L'=L tensor H^m has L.L'=L^2>0; effective-multiple applies with L' as ample reference. A section of L^n either has nonempty divisor, contradicting H.L^n=0 by positivity, or empty divisor and L^n trivial, contradicting n^2 L^2>0. Thus L^2<=0. For equality with L nontrivial numerically, Q.L!=0 yields R=H^2 Q-(Q.H)H with R.H=0 and R.L=H^2 Q.L!=0. Choosing an integer n of suitable sign makes (nL+R)^2=2n L.R+R^2>0, contradicting part (a). Negative tensor exponents denote duals; n>=1 in the section case prevents zero division. Numerical triviality gives the converse by testing against L itself. AC is inherited; no global family is selected. Vakil 20.2.17-.18, printed p.586, contains the complete same perturbation argument. The reader removes only an unused converse from the section supplier's quotation; current bytes equal post-reader bytes.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-thm-hodge-index-theorem-ample-case-1`.

## `thm-hodge-index-theorem-for-smooth-projective-surfaces`

Verdict: `reviewed_no_defect`; audit enrichment only.

All three steps and nine supplier interfaces were checked. Projectivity supplies an ample A. If A.L=0 the ample theorem proves both conclusions. Otherwise A.H cannot vanish, since ample Hodge applied to H would contradict H^2>0. The integral tensor expression M=(A.L)H-(A.H)L has M.A=0 and M^2=(A.L)^2 H^2+(A.H)^2 L^2 because L.H=0. Its nonpositivity and the positive first term force L^2<0. Thus equality is possible only in the first case, where it is equivalent to numerical triviality; the reverse follows by evaluation against L. No sign of A.H, ampleness of H, characteristic restriction, or finiteness theorem is used. Zero L and both iff directions are covered; H=0 is excluded by positive square. AC is inherited. Vakil 20.2.13 and complete 20.2.19, printed pp.585-587, agree exactly. Item body is unchanged and only the reader's contract enrichment is accepted as reviewed_no_defect.

No mathematical defect identified; no ledger row.

## `cor-negative-definiteness-of-primitive-numerical-divisors`

Verdict: `accepted_repair`; confidence 1.

All four steps and nine supplier interfaces were checked. Positive h^2 gives a unique orthogonal projection with denominator nonzero. For a primitive real class of positive square, work in a finite real span V of h and finitely many integral bundle classes. The rational span of those classes is dense in their real span; projection kills h, so its projected rational span is dense in p(V). Rationality of pairings and h^2 lets denominators be cleared to an integral bundle class orthogonal to H and of positive square, contradicting integral Hodge. For an isotropic nonzero x, the numerical-space evaluation-matrix proof supplies z.x!=0; projecting z to z' preserves that pairing, and (z'+t x)^2=z'^2+2t z'.x is positive for suitable t. Thus equality forces zero. This proves unconditional negative definiteness with no topology on an infinite whole space. Only the finite-rho conclusion uses a diagonalizing basis: positive h plus rho-1 negative directions gives inertia (1,rho-1,0), index (1,rho-1), and signature 2-rho in the exact published definiteness convention. rho=0 is excluded by h^2>0; rho=1 gives the zero primitive space. AC is inherited. Vakil 20.2.U and MIT Lecture 2 pp.2-3 corroborate the finite-signature/integral perturbation conventions; the real extension is independently justified locally. Current bytes equal the reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-cor-negative-definiteness-of-primitive-numerical-divisors-1`.

## `cex-intersection-form-not-negative-definite-on-all-divisors`

Verdict: `reviewed_no_defect`; audit enrichment only.

All two counterexample steps and eleven supplier interfaces were checked. Projectivity gives an ample H, and H^2>0 by the already-reviewed Hilbert-polynomial positivity lemma. The numerical quotient preserves this pairing, so [H]!=0 and q([H])>0 contradict both q<=0 everywhere and q<0 on nonzero vectors. P2 with O(1) is an explicit instance; its integral smooth projective surface structure is supplied in the checked plane/blowup context. No separate value H^2=1 is needed by this carrier. The zero-class boundary is avoided because positive square proves nonzero; AC is inherited. Vakil 20.2.U describes the same positive ample direction and primitive restriction. Current body is unchanged; its enriched contract is mathematically faithful. No defect.

No mathematical defect identified; no ledger row.

## `rem-surface-riemann-roch-hodge-index-conventions`

Verdict: `accepted_repair`; confidence 1.

Every paragraph and all ten cited supplier interfaces were checked. The smooth arbitrary-field surface hypotheses match duality and imply regularity; the converse over imperfect fields is not claimed. Numerical triviality, rather than linear triviality, is the equality condition. The Neron-Severi finiteness assertion is recorded as a sourced result outside this page's proof: Vakil 18.4.12, printed p.513, says N1 is a finitely generated torsion-free quotient of NS, hence its real scalar extension is finite-dimensional. The corollary's formal signature implication stays conditional and its negative definiteness does not use that theorem. The blowup class ell has square 1 and ell.E=0, so it supplies the claimed nonample positive-square example. The positivity route uses Hilbert polynomials and none of Bertini, resolution, or Nakai-Moishezon. AC caveats match the suppliers. Current bytes equal the reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-rem-surface-riemann-roch-hodge-index-conventions-1`.

## `ex-hodge-index-on-a-blowup`

Verdict: `accepted_repair`; confidence 1.

All four verification steps and thirteen supplier interfaces were checked. The rational-point blowup supplies smooth projectivity and matrix diag(1,-1); total transform gives m=ell-E, so m.E=1 and m^2=0. Picard generation proves spanning of the real numerical quotient; pairing a real relation with ell and E forces a=0 and b=0, so they are a basis after quotienting. With H=ell, x.H=a and Hperp=R E, whose nonzero squares are -b^2. ell is not ample since the nonzero effective E has ell.E=0. The matrix has eigenvalues +/-1, inertia (1,1,0), index (1,1), signature 0 in the exact published convention; E.m=1 proves numerical nontriviality. Arbitrary fields are allowed because the centre is k-rational, and AC is inherited as stated. Vakil Exercise 20.2.D and hint 20.2.7, printed p.582, give the same example. Current bytes equal the reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-ex-hodge-index-on-a-blowup-1`.

## `ex-hodge-index-on-p1-times-p1`

Verdict: `accepted_repair`; confidence 1.

All four verification steps and nine supplier interfaces were checked. Ruling matrix [[0,1],[1,0]] gives H=ell+m with H^2=2 and x.H=a+b, hence Hperp=R(ell-m), with nonzero square -2t^2. Picard generation spans the numerical space, and pairing any real relation with the rulings forces b=a=0, so the quotient has the asserted basis and dimension two. Matrix eigenvalues +/-1 give inertia (1,1,0), index (1,1), and signature 0 in the library's convention. Positive H square disproves negativity on the whole space; the only zero-square primitive class is zero. No condition on characteristic or algebraic closure occurs, and AC is inherited. Vakil Exercise 20.2.C, printed p.582, matches the ruling matrix. Current bytes equal the reader result.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-ex-hodge-index-on-p1-times-p1-1`.

## `surface-riemann-roch-and-the-hodge-index-theorem`

Verdict: `accepted_repair`; confidence 1.

The complete A-page carrier was read, together with its two-page owning manifest and the complete companion page as context. Its twelve-item placement supplies definitions and ampleness tools before formula and Hodge consumers. The summary accurately states arbitrary-field integral smooth projective surface hypotheses, identifies the canonical line bundle and numerical space, describes Hilbert-polynomial positivity and ample twists, and routes threshold vanishing and Riemann-Roch to effective multiples and both Hodge proofs. Its repaired adjunction sentence correctly describes the surface pairing, effective-divisor structure sequence, and surface Serre duality rather than duality on a possibly singular or nonreduced curve. The real-space corollary and closing conventions match the actual checked proofs, and the companion page's Picard/excision/matrix summary is accurate. The four prerequisite page IDs agree with the owning manifest. A-page bytes equal post-reader bytes; its placement is unchanged by this adjudication. No B-page decision is owed.

Closed defect rows: `frontier-40-geometry-braids-rep-27-5a-batch21-surface-riemann-roch-and-the-hodge-index-theorem-1`.

## Manifest reconciliation amendment

The final verdict is `amended_repair` for `def-canonical-divisor-of-a-smooth-projective-surface`, `def-numerical-equivalence-and-neron-severi-space`, `rem-surface-riemann-roch-hodge-index-conventions`, `lem-picard-group-and-intersection-form-of-p1-times-p1`, `lem-picard-group-of-a-point-blowup-of-the-projective-plane`. The preceding accepted item-body reviews stand; their manifest entries were incomplete. Canonical basic property 3 still misnamed chi(O) as arithmetic genus; the numerical definition and conventions remark retained the unsupported infinite-dimensional possibility. These three manifest claim fields now contain their complete reviewed current Definition/Remark. The product-Picard manifest now declares top P1 cohomology and Cartier-addition/tensor instead of the vacuous intermediate-cohomology citation; the blowup manifest now declares geometric regularity/smoothness. Existing page/item order and scope are preserved. All mathematical item bodies remain byte-for-byte at their post-reader state.

## Sources

Primary passages independently opened in this session:

- [Vakil, 2025-10-21](https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf): arithmetic-genus convention in 18.4.4 (printed p.510); numerical quotient/finiteness in 18.4.11-.12 (pp.512-513); ample twist Exercise 16.2.E and its explicit global-generation/Segre hint (p.461); adjunction and surface Riemann-Roch Exercise 20.2.B (pp.581-582); the ruling and rational-point-blowup exercises 20.2.C-.D and 20.2.7 (p.582); full Hodge proof 20.2.13-.19 and the finiteness caveat in 20.2.U (pp.585-587). Exact hypotheses are arbitrary base field and smooth projective surface; the blowup exercise specifies a k-valued centre. The surface parity is an integer cohomological equality, including characteristic two.
- [MIT Lecture 2](https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf), lecture p.2, Theorem 1 and its complete four-term proof; pp.2-3, Corollary 1 and its signed equality perturbation. This corroborates the authored route, without importing the source's later finite-dimensional cohomological proof.
- [Stacks 33.45](https://stacks.math.columbia.edu/tag/0BEL), complete Lemma 33.45.1 and Definitions 33.45.3, plus Lemmas .8, .9, .12: polynomial Euler characteristics on proper schemes, intersection by coefficients, effective-divisor restriction and positive ample intersection.
- [Stacks 31.27](https://stacks.math.columbia.edu/tag/0BE0), Definitions 31.27.2-.3, Lemmas .4 and .6, and Definition .7: prime divisors, valuation orders, finite support on quasi-compact schemes and the principal-divisor presentation of Cl. [Stacks 31.28.5](https://stacks.math.columbia.edu/tag/02SL), complete proof: multiplying rational sections adds their divisor classes. Excision exactness is proved locally in both owned Picard lemmas by restriction and principal-divisor subtraction, rather than imported as an unstated theorem.

## Consumer and supplier disposition

The 103 distinct direct external supplier Statement/Definition interfaces were read, together with the full bilinear-intersection argument for the effective-difference construction. All 106 distinct contract citation sources belong to declared dependencies or owned items; normalized quoted excerpts match their named current sections (zero mismatches). This is interface checking and selected prerequisite-proof inspection, not a recursive audit of every transitive supplier or of complete books. Source/source-quote checks and mathematical reasoning are distinct.

Searches for uses of the corrected canonical-divisor definition, numerical-space definition, and product-surface claim found only assigned batch-21 consumers. Their actual uses are in the item reviews above: they use canonical line-bundle identities rather than the former arithmetic-genus name, integral/real numerical pairings as now justified, and smoothness=>regularity. No consumer needs a further mathematical change. The batch-21 cross-batch input is empty; comparison against current run batch manifests found no dependency on another batch. Its empty record is preserved under briefs/tasks/frontier-dependency-ledger.md. No withdrawal, published defect, or out-of-batch repair was identified, so no published ledger lock/edit or Step-5b alert is needed.

## Final local checks and handoff

- Initial `node tools/risk-report.mjs research/frontier-40-geometry-braids-rep-27-batch-21.proof-contracts.json`: all 18 routed HIGH/CRITICAL carriers read; final run with `--require-reviewed`: 0 errors, 18 items routed. Complete, item-specific risk reviews are in the owning contract.
- `node tools/proof-contract.mjs research/frontier-40-geometry-braids-rep-27-batch-21.proof-contracts.json --strict`: 0 errors, 0 warnings, 18/18 checked.
- One final `node tools/proof-layout.mjs` command batched all 18 explicit item paths in the scope manifest: 18 items, 71 steps, 0 defects, exit 0. No adjudicator item edit or formatter occurred before or after that command; reader edits are retained.
- `node tools/rendercheck.mjs` on those 18 items and the two explicit page paths: 20 files pass actual YAML/KaTeX rendering, exit 0.
- `node tools/defect-ledger.mjs validate --run frontier-40-geometry-braids-rep-27 --ledger /tmp/batch21-ledger.jsonl`: all 20 rows owned by this dispatch validate with 0 errors, exit 0. Initial local validation rejected a free-text repair_cost enum and a URL-only evidence object; those metadata fields were corrected without creating mechanical-failure defect rows. Existing other owners' rows were not rewritten.
- Exact decision coverage: 19 unique decisions for 18 touched items and one A page, no missing or extra obligation; verdict counts {"accepted_repair": 8, "amended_repair": 5, "reviewed_no_defect": 6}. All 20 closed mathematical defect rows are referenced, with matching subjects and caught_at_stage=5a-adjudicate. All completed repair decisions have repair_confidence=1.
- Final raw item/page comparison: all 18 item bodies and the A-page body still match the post-reader snapshot; five manifest entries differ as documented above, and all risk-review notes are current. No verification.judge record was added or modified. Decision carrier hashes are left for the engine to stamp, as dispatched.

The active run was verified against its .autopilot state (finishedAt=null, persisted stage 5a-refute) and recent git history, not any historical RESUME claim. No engine scheduling, gate battery, judge cycle, or stage transition was initiated.

Unresolved findings/blockers: none identified within this review. Next action: the engine stamps the current decision carriers and runs its gate battery; Step 5b owns any computed cross-group obligations.
