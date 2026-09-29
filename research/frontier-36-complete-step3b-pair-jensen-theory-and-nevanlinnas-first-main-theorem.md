# Step 3b checkpoint — Jensen Theory and Nevanlinna's First Main Theorem

Run: `frontier-36-complete`  
Role: `alpha-high`  
Owned pair: `jensen-theory-and-nevanlinnas-first-main-theorem` and its examples page  
Batch: 27

## Authoring conventions and evidence

- Counting uses the closed disc and local multiplicity. Poles are the `a=∞` divisor.
- The integrated count is regularized at the centre. Chordal distance is normalized to diameter one, and target proximity uses its logarithm.
- (T=m(\cdot,\infty)+N(\cdot,\infty)). A constant finite map is allowed for the definitions; the attained target is excluded. Theorems with nonconstant hypotheses say so explicitly.
- No item in this pair uses AC. The local arguments make no choice of a family of discs, divisors, or radii; each compact divisor list is finite.
- Primary mathematical sources inspected in full relevant passages: A. Eremenko, *Lectures on Nevanlinna Theory*, §§1–3, printed pp. 1–6 (Jensen, First Main Theorem, elementary laws, area formula); B. Goldberg and I. Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §§1–2, 4, 6–7 and Ch. 2 §§1, 5 (Poisson–Jensen, integrated counts, characteristic laws, order, maximum modulus, rational composition, reciprocal-Gamma exercise). Local text extractions: `/tmp/frontier36-weizmann.txt` and `/tmp/frontier36-GO.txt`; the corresponding complete PDFs were inspected, not only abstracts.
- Gamma supplier check: published `thm-gamma-weierstrass-product`, `thm-gamma-meromorphic-continuation`, and `thm-stirling-formula-gamma` statements were read with their exact hypotheses. A defect in the last item's proof is recorded below for the owner; it is not edited here.

## Scaffold repair log

- Added direct dependencies to Poisson–Jensen for the published Cauchy–Riemann and holomorphic-smoothness results used to establish harmonicity of the zero-free logarithmic modulus.
- Added `def-integrable-real-and-complex-functions-and-their-integrals` to the well-definedness theorem for its Lebesgue-integrability step.
- Added direct dependencies to the centre-divisor Jensen lemma for the published pole characterization, closed-discrete pole-set theorem, identity theorem, and meromorphic-function definition. These make the finite centre order and connected regular-part argument explicit.
- Added direct dependencies to Ahlfors–Shimizu for the Cauchy–Riemann theorem, holomorphic smoothness, and area-integrability definition, needed for the Laplacian, pole extension, and finite area integral.
- Clarified the order-definition scaffold so the constant-map convention applies to both upper and lower order, and specified the eventual $T>1$ domain for the logarithmic ratio. Refreshed the current pair scope decision as sufficient with evidence; no scope expansion was needed.
- Repaired the characteristic-laws scaffold: clarified that inversion excludes only the identically zero function and removed the redundant direct centre-Jensen edge because the already-proved First Main Theorem at target $0$ supplies the reciprocal identity. This does not change the claim or its level (the First Main Theorem remains a level-3 prerequisite).
- Repaired the pair coverage scaffold: batch 27 had no entry for its assigned B page. Added its canonical six-example inventory and the Eremenko/Goldberg–Ostrovskii source harvest, preserving the existing A-page coverage and source-verification metadata. Refreshed the sufficient pair-scope receipt after the local statement/coverage clarifications.
- The entire maximum-modulus proposition's direct Cauchy-estimate and order prerequisites were added when that item was reached; its exact inequalities and eventual logarithm domain are now explicit. The pair-local dependency order was recomputed and remains the dispatched order. No local supplier has been added.

## Item checkpoints

### 1. `def-nevanlinna-counting-proximity-and-characteristic` — complete

- Claim/conventions: closed-disc divisor count with multiplicity; central term regularizes the integral; half-chordal metric of diameter one; (m) is the angular log-proximity and (T=m_\infty+N_\infty). The attained target is excluded.
- Source: Eremenko §§1–2, pp. 1–4; Goldberg–Ostrovskii Ch. 1 §4, pp. 13–16.
- Dependencies examined: `def-meromorphic-function-complex-domain`, `thm-zero-order-factorization-holomorphic-function`, `thm-pole-characterizations`, `def-integrable-real-and-complex-functions-and-their-integrals`.
- Decision: `accept`, confidence 1. The item is definitional and states no unproved property; the next item proves finiteness and continuity.
- Checks: explicit-path precheck and item-dependency-levels are reserved for the final stable batch pass; proof contract recorded.
- Open gaps: none. Next: `thm-poisson-jensen-formula-meromorphic-function`.

### 2. `thm-poisson-jensen-formula-meromorphic-function` — complete (scaffold repaired)

- Claim/conventions: at an interior nondivisor point, Poisson average of boundary `log|f|` minus zero Green terms plus pole Green terms; regular radii first, boundary-divisor radii by angular `L1` limit.
- Source: Eremenko §1, printed p. 2; Goldberg–Ostrovskii Ch. 1 §§1–2, printed pp. 1–9 (Green factor and center formula). Local arguments independently derived.
- Dependencies examined: the scaffold's six direct inputs plus `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` and `cor-holomorphic-functions-are-real-analytic-and-smooth`, needed to infer harmonicity of the local log modulus.
- Decision: `repaired`, confidence 1.
- Checks: explicit-path precheck (pass); contract (pass); renderer/KaTeX (pass); complete run `item-dependency-levels` (923 items across 60 pages, no stale labels/cycles). The canonical precheck phase sequence was adopted.
- Open gaps: none in the stated interior formula or boundary-radius limit. No AC used. Next: `thm-nevanlinna-quantities-well-defined`.

### 3. `thm-nevanlinna-quantities-well-defined` — complete (scaffold repaired)

- Claim/conventions: finite closed-disc counts; finite continuous $N$ and chordal $m$ across divisor radii; exact lower-limit shift; proximity is not generally monotone.
- Source: Goldberg–Ostrovskii Ch. 1 §4, printed pp. 13–16. The item independently proves the singular-integral continuity rather than relying on a citation.
- Dependencies examined: original five plus `def-integrable-real-and-complex-functions-and-their-integrals` to make the Lebesgue-integrability step explicit.
- Decision: `repaired`, confidence 1.
- Checks: explicit-path precheck (pass); item contract (pass, no warnings); renderer/KaTeX (pass); full-run dependency-level check (923 items, 60 pages, maximum level 18, pass).
- Open gaps: none. No AC used; all divisor lists are finite. Next: `ex-poisson-jensen-with-a-repeated-zero`.

### 4. `ex-poisson-jensen-with-a-repeated-zero` — complete

- Claim/conventions: for $f=(z-b)^2$, $0<|b|<R$, the unique divisor point has multiplicity two; its Green term and center correction are both doubled.
- Source: Eremenko §1, printed pp. 1–2; the numeric boundary and center calculations are shown in the item.
- Dependency examined: the just-completed Poisson–Jensen formula.
- Decision: `accept`, confidence 1.
- Checks: explicit-path precheck (pass after adopting canonical phases 2.1 and 3.1); item contract (pass); renderer/KaTeX (pass); full-run dependency-level check (pass).
- Open gaps: none. Next: `lem-meromorphic-jensen-formula-with-centre-divisor`.

### 5. `lem-meromorphic-jensen-formula-with-centre-divisor` — complete (scaffold repaired)

- Claim/conventions: for finite `a` and nonconstant meromorphic `f`, the exact centre coefficient and signed Laurent exponent satisfy `M_r log|f-a| = log|c_a| + N(r,a;f) - N(r,∞;f)` for every positive radius; a divisor on the circle uses the continuous radial mean. Counts use the closed disc and include the centre through the regularized `n(0) log r` term.
- Source locators: Eremenko, *Lectures on Nevanlinna Theory*, §1, equation (2), printed pp. 1–2, including footnote 1's centre-zero regularization and the independent Blaschke-factor proof immediately below; Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §2, Theorem 2.5 and equation (2.8), printed pp. 8–9. The proof was derived in full rather than inferred from the cited statement.
- Dependencies examined: `thm-poisson-jensen-formula-meromorphic-function`, `def-nevanlinna-counting-proximity-and-characteristic`, `thm-nevanlinna-quantities-well-defined`, `thm-laurent-expansion-annulus`, `thm-zero-order-factorization-holomorphic-function`, `thm-pole-characterizations`, `thm-poles-meromorphic-function-are-discrete-and-countable`, `thm-identity-theorem-holomorphic-functions`, and `def-meromorphic-function-complex-domain`. The four latter direct suppliers were added because the original scaffold did not justify the finite centre order or connected regular-part argument.
- Audit/argument: the pole complement is nonempty and path-connected by finite detours around the poles meeting a compact path; the identity theorem therefore rules out an infinite-order finite-target centre zero for nonconstant `f`. The pole, ordinary-value, and finite-zero cases give `k_a=m_0-ν_0`. Letting the Poisson–Jensen evaluation point tend to zero cancels the central `k_a log|z|` terms; integrating the finite divisor steps produces the exact regularized counts. The chordal pointwise identity and continuity extend the formula to divisor radii. No choice principle is used.
- Decision: `repaired`, confidence 1, recorded after writing and checking the full proof.
- Checks: explicit-path precheck (pass); strict item proof contract (pass, 0 errors/0 warnings); real-KaTeX renderer (pass); pair-local dependency levels (pass, exact dispatch levels 0–7 and order). The run-wide dependency-level gate currently reports three stale labels in sibling Sobolev items; those files are outside this pair and were not edited.
- Open gaps: none in the claim, centre cases, or radial endpoint interpretation. Next: audit `thm-ahlfors-shimizu-characteristic-identity` at level 2.

### 6. `thm-ahlfors-shimizu-characteristic-identity` — complete (scaffold repaired)

- Claim/conventions: for nonconstant meromorphic `f`, with $f^\#=|f'|/(1+|f|^2)$ continuously extended at poles, $A(r)=\pi^{-1}\int_{|z|\le r}(f^\#)^2dA$ and $T_{AS}(r)=\int_0^r A(t)dt/t$, the exact identity is $T=T_{AS}+C_\infty$, where the centre constant is $\frac12\log(1+|f(0)|^2)$ at a finite centre and $\log|c|$ for $f(z)=cz^{-m}+\cdots$ at a pole. The result includes finite area, monotonicity, log-radius convexity, and all radii.
- Source locators: Eremenko, *Lectures on Nevanlinna Theory*, §3, equations (9)–(12), printed pp. 4–6 (area definition and characteristic comparison); Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §2, Theorem 2.6, equation (2.9), printed pp. 8–9, and Ch. 1 §4, Theorem 4.2, equations (4.9)–(4.10), printed pp. 18–20 (exact area-characteristic identity and radial integral). The item derives the pole-corrected radial mean directly, without distribution theory.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic`, `thm-nevanlinna-quantities-well-defined`, `thm-pole-characterizations`, `thm-zero-order-factorization-holomorphic-function`, `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`, `cor-holomorphic-functions-are-real-analytic-and-smooth`, and `def-integrable-real-and-complex-functions-and-their-integrals`. The final three direct suppliers were added because the scaffold did not support the Laplacian calculation or finite area integrals.
- Audit/argument: locally, the reciprocal identity extends $f^\#$ continuously at each pole. The potential $u=\frac12\log(1+|f|^2)$ has $\Delta u=2(f^\#)^2$ off poles; adding each pole order times $\log|z-p|$ makes it $C^2$ and preserves that Laplacian across poles. Its radial mean obeys $(tV')'=A'$, so two integrations give $V(r)-V(0)=T_{AS}$. The explicit mean of $\log|re^{it}-p|$ and the finite count sum identify $T=V(r)-V(0)+C_\infty$ for both finite and pole centres. Continuity handles pole radii; no AC is used.
- Decision: `repaired`, confidence 1, recorded after writing the complete item and checking it.
- Checks: explicit-path precheck (pass); strict proof contract (pass, 0 errors/0 warnings); real-KaTeX renderer (pass); pair-local dependency levels (pass, exact dispatch levels 0–7/order). Run-wide item-level validation still reports only the three stale sibling Sobolev labels noted above.
- Open gaps: none in the stated normalization, centre constant, or radial endpoint case. Next: audit `thm-nevanlinna-first-main-theorem` at level 3.

### 7. `thm-nevanlinna-first-main-theorem` — complete (new authored item)

- Claim/conventions: for each finite target, $m(r,a)+N(r,a)=T(r)+\frac12\log(1+|a|^2)-\log|c_a|$, with $c_a$ the first nonzero Laurent coefficient of $f-a$ at $0$; for $a=\infty$, the identity is $T=m(r,\infty)+N(r,\infty)$ by definition. The finite-target identity holds at every radius.
- Source locators: Eremenko, *Lectures on Nevanlinna Theory*, §1 equation (2), printed pp. 1–2 (Jensen formula with centre-zero regularization), and §3 equations (9)–(14), printed pp. 4–6 (spherical proximity/First Main Theorem); Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §4, Theorem 4.1 and proof, printed pp. 16–17. The exact constant is derived from the centre-divisor lemma rather than inferred from the sources' $O(1)$ form.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic`, `thm-nevanlinna-quantities-well-defined`, and `lem-meromorphic-jensen-formula-with-centre-divisor`. No scaffold repair was needed.
- Audit/argument: at regular circles the normalized chordal identity gives the exact difference between finite-target and infinity proximity. Averaging and substituting the centre-divisor Jensen formula produces the stated constant. Finiteness and continuity of both proximity/count functions extend the equality from dense regular radii to every radius. The infinity-target case is handled directly from the characteristic definition. No AC is used.
- Decision: `accept`, confidence 1; recorded after the initial run-wide JSON parse problem cleared.
- Checks: explicit-path precheck (pass); strict item contract (pass, 0 errors/0 warnings); real-KaTeX renderer (pass); pair-local dependency levels (pass, exact dispatch levels 0–7/order). The pair scope receipt was refreshed as sufficient after the later order-statement clarification.
- Open gaps: none. Next: audit `def-order-of-growth-meromorphic-function` at level 4.

### 8. `def-order-of-growth-meromorphic-function` — complete (scaffold repaired)

- Claim/conventions: for nonconstant meromorphic `f`, define $\rho=\limsup \log T/\log r$ and $\lambda=\liminf \log T/\log r$ for sufficiently large $r>1$ with $T>1$; constants have both orders zero by convention. Finite order means $\rho<\infty$, and the following proposition compares entire-function order with maximum modulus.
- Source locators: Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 2 §1, generic order/lower-order definition, printed pp. 43–44; the statement that meromorphic-function growth categories are those of $T(r,f)$, printed p. 46.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic`, `thm-nevanlinna-first-main-theorem`, and `thm-ahlfors-shimizu-characteristic-identity`. The manifest dependencies were already sufficient.
- Audit/argument: counts give $N(r,a)\ge n(0,a)\log r$. If $f(0)$ is finite, the First Main Theorem at $a=f(0)$ gives $T\ge\log r-C$; if $0$ is a pole, the defining characteristic gives $T\ge\log r$. Thus $T>1$ eventually. Ahlfors–Shimizu gives monotonicity. Constant maps receive the stated upper/lower-order convention, avoiding a logarithm of zero.
- Decision: `repaired`, confidence 1, recorded after writing and checking the clarified statement and proof.
- Checks: explicit-path precheck (pass); strict proof contract (pass, 0 errors/0 warnings); real-KaTeX renderer (pass); pair-local dependency levels (pass, exact dispatch levels 0–7/order).
- Open gaps: none. Next: audit `thm-nevanlinna-characteristic-elementary-laws` at level 4.

### 9. `thm-nevanlinna-characteristic-elementary-laws` — complete (scaffold repaired)

- Claim/conventions: product and sum have the stated upper bounds; inversion for a function not identically zero has a fixed bounded characteristic difference; composition by a fixed degree-$d$ rational map has $dT(r,f)+O_{R,f}(1)$ for nonconstant $f$ and $d\ge1$; degree-zero maps are constant with bounded characteristic. The proof estimates are established for $r\ge1$, which suffices for $r\to\infty$.
- Source locators: Eremenko, *Lectures on Nevanlinna Theory*, §2, algebraic properties (a)–(d), printed p. 4; Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §6, equations (6.1)–(6.8), printed pp. 28–30; Theorem 6.2 and its polynomial proof, printed pp. 31–32; Theorem 6.1 and its rational-composition proof, printed pp. 32–33. Both relevant arguments were read in full. The proof here derives each estimate in the chordal normalization used by this pair.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic` and `thm-nevanlinna-first-main-theorem`. The original direct centre-divisor Jensen dependency was removed because the First Main Theorem gives the exact reciprocal step; the earlier theorem's own dependency closure still supplies the centre-Jensen proof.
- Audit/argument: set $T_0=m_0+N_\infty$ with $m_0$ the mean of $\log^+|f|$; the pointwise spherical bound gives $T=T_0+O(1)$ uniformly. The product/sum inequalities follow from pointwise logarithmic inequalities and local pole orders. For inversion, $m(r,0;f)=m(r,\infty;1/f)$ and the poles of $1/f$ are the zeros of $f$, so the First Main Theorem applies directly. The polynomial law follows from the leading term on large $|w|$, boundedness on a compact $w$-disc, and multiplication of pole orders. For rational $R=P/Q$, reciprocal/translation reductions give $\deg Q=d>\deg P$; near the finite zero set of $Q$, $P$ is bounded above and away from zero, while on the complement $R$ and $1/Q$ are bounded. Splitting the circular mean gives $m_0(R(f))=m_0(1/Q(f))+O_R(1)$; their pole divisors agree including at poles of $f$. The polynomial and reciprocal laws finish the estimate. Only finite zero sets are used; no AC is used.
- Decision: `repaired`, confidence 1, recorded after the complete proof and gates passed.
- Checks: explicit-path precheck (pass without repair); strict item proof contract (pass, 0 errors/0 warnings); real-KaTeX renderer (pass). The final run-wide item-dependency-level gate remains to be rerun with the batch; the item stays at dispatched level 4.
- Open gaps: none in the constant/nonconstant cases, pole divisor, rational normalization, or boundary-circle interpretation. No local supplier was added. Next: audit `ex-nevanlinna-regularisation-when-f-zero-equals-a` at level 4.

### 10. `ex-nevanlinna-regularisation-when-f-zero-equals-a` — complete (scaffold repaired)

- Claim/conventions: for $a,c\in\mathbb C$, integer $m\ge1$, and $c\ne0$, $f=a+cz^m$ has $n(0,a)=m$ and $N(r,a)=m\log r$ for every $r>0$, while the raw integral $\int_0^r n(t,a)\,dt/t$ diverges. The boundary mean is $\log|c|+m\log r$, and $C(f,a)=\tfrac12\log(1+|a|^2)-\log|c|$; $\log|f(0)-a|$ is not finite.
- Source locators: Eremenko, *Lectures on Nevanlinna Theory*, §1 equation (2), footnotes 1–2, printed pp. 1–2 (regularised count and replacement by the leading coefficient); Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §2 Theorem 2.5, printed pp. 8–9 (Jensen formula with Laurent centre term), and Ch. 1 §4 counting definition and Theorem 4.1 proof, printed pp. 13–17 (regularised $N$ and the First Main Theorem). These exact passages were reread for this item.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic`, `lem-meromorphic-jensen-formula-with-centre-divisor`, and `thm-nevanlinna-first-main-theorem`. The scaffold dependencies are sufficient; no supplier was added.
- Audit/argument: $f-a=cz^m$ has one central zero of multiplicity $m$ and no poles, so $n(t,a)=m$ for all $t\ge0$. Substitution into the regularized definition leaves $m\log r$; truncating the raw integral at $\varepsilon$ gives $m\log(r/\varepsilon)\to\infty$. The boundary logarithm is pointwise $\log|c|+m\log r$, exactly the centre-divisor Jensen mean. Averaging the chordal identity and using $N(r,\infty)=0$ gives $m(r,a)+N(r,a)=T(r,f)+\tfrac12\log(1+|a|^2)-\log|c|$. The coefficient is $c_a=c$, so the First Main Theorem constant matches.
- Decision: `repaired`, confidence 1, recorded after authoring and checking the complete example.
- Checks: explicit-path precheck (pass without repair); strict item proof contract (pass, 0 errors/0 warnings); real-KaTeX renderer (pass). The run-wide dependency-level and remaining batch gates are reserved for the final stable batch pass.
- Open gaps: none; the central zero, raw-integral divergence, Jensen mean, exact FMT constant, and all positive-radius cases are explicit. No AC is used. No local supplier was added. Next: audit `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order` at level 5.

### 11. `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order` — complete (scaffold repaired)

- Claim/conventions: for every nonconstant entire $f$ and $0<r<R$, with $M(r,f)=\max_{|z|=r}|f(z)|$, $m_0(r,f)$ the circular mean of $\log^+|f|$, and $T_0=m_0+N_\infty=m_0$, the exact inequalities are $T_0(r,f)\le\log^+M(r,f)\le\frac{R+r}{R-r}T_0(R,f)$. Both Nevanlinna order and lower order equal the corresponding maximum-modulus limsup/liminf on the eventual domain $\log^+M>1$.
- Source locators read in full: Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §7, Theorem 7.1 and proof, printed pp. 37–38 (Poisson–Jensen maximum bound and Green-kernel estimate; local extraction `/tmp/frontier36-GO.txt`, lines 6204–6303); Ch. 2 §1, Theorem 1.3 and proof, printed p. 46 (order/growth-category comparison; local extraction lines 7480–7492). Their inequality was adapted to this pair's explicit $T_0$ normalization, and both limsup and liminf were derived directly rather than inferred from the source's growth-category statement. Source PDF: https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf.
- Dependencies examined: `def-order-of-growth-meromorphic-function` ($T>1$ eventually and order convention), `thm-poisson-jensen-formula-meromorphic-function` (zero Green terms and boundary-radius limit), `def-nevanlinna-counting-proximity-and-characteristic` ($T=m_\infty+N_\infty$ and spherical mean), `thm-taylor-expansion-holomorphic-function` (entire Taylor expansion), and `cor-cauchy-estimates-taylor-coefficients` (coefficient bound). The last two direct prerequisites and Poisson–Jensen were made explicit in the manifest; no local supplier was added.
- Audit/argument: pointwise $\log^+|w|\le\frac12\log(1+|w|^2)\le\log^+|w|+\frac12\log2$ gives $T=T_0+O(1)$ for entire $f$. A least nonzero positive Taylor coefficient and Cauchy's estimate force $\log^+M>1$ eventually. The lower inequality is the boundary maximum bound. For the upper one, Poisson–Jensen subtracts nonnegative zero Green terms; the kernel is bounded by $(R+r)/(R-r)$, and the outer boundary-divisor case follows by regular-radius limit and continuity of the log-plus mean. With $R=2r$, the inequalities squeeze both logarithmic ratios; dilation by two preserves their limsup and liminf, while the bounded characteristic difference vanishes after division by $\log r$. The scaffold's broad growth-order claim was therefore not treated as proof.
- Decision: `repaired`, confidence 1, recorded after the full argument and checks.
- Checks: explicit-path precheck passes after the engine's canonical phase sequence (the squeeze is phase 2.3); strict item contract passes with 0 errors and 0 warnings; explicit real-KaTeX rendering passes. Pair-local `orderedItems` recomputation gives the exact dispatched levels 0–7 and order, with this proposition at level 5. A prior bare renderer invocation found 26 unrelated existing formatting errors elsewhere in the library; the explicit owned-item render passes.
- Open gaps: none for the nonconstant hypothesis, small/large radius domains, boundary divisors, or either limiting order. The least-index argument uses well-ordering of $\mathbb N$ only; no AC is used. No local supplier was added. Next: `ex-nevanlinna-characteristic-under-target-mobius-map` at level 5.

### 12. `ex-nevanlinna-characteristic-of-reciprocal-gamma` — complete (new assigned item)

- Claim/conventions: $g=1/\Gamma$ has simple zeros exactly at $0,-1,-2,\ldots$, no poles, and $T(r,g)=\Theta(r\log r)$; hence its Nevanlinna order and lower order are both one.
- Source locators read in full: Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 2 §5 reciprocal-Gamma exercise, printed pp. 80–81 (it asks for a sectorial asymptotic but does not prove the characteristic estimates); K. Chandrasekharan, *Lectures on the Riemann Zeta-Function*, Lecture 7 §6, equations (6.1)–(6.5) and uniform sector remainder, printed pp. 60–62 (PDF pp. 66–68). The complete primary-source derivation was downloaded and read, including $\Log(N+z)=\log N+z/N+O(N^{-2})$, the resulting $+z$, Binet's integral, and its $O(1/|z|)$ bound for $|\arg z|\le\pi-\varepsilon$. Source PDF: https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf.
- Gamma prerequisite audit: the B page requires `the-gamma-function` in both the run manifest and `research/plan-spec.json`. `thm-gamma-weierstrass-product`, `thm-gamma-meromorphic-continuation`, and the sectorial statement of `thm-stirling-formula-gamma` were checked with their exact claims. The local proof of the Stirling item has the reported step-3.1 gap; Chandrasekharan's complete proof independently verifies the statement used here. The stale scaffold sentence claiming the plan lacked the Gamma page requirement was repaired.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic`, `def-order-of-growth-meromorphic-function`, `thm-gamma-weierstrass-product`, `thm-stirling-formula-gamma`, and `thm-gamma-meromorphic-continuation`.
- Audit/argument: the locally uniform canonical product gives the reciprocal as an entire function; an explicit $O_K(n^{-2})$ logarithmic-tail bound proves the tail is nonzero, hence the simple zero set is exact. Splitting factors at $n\le2r$ and using the quadratic logarithmic bound for the tail gives a uniform pointwise $O(r\log r)$ upper bound and therefore $m_0=O(r\log r)$. For the lower bound, fix $\delta=\pi/4$ and use the closed arc $2\pi/3\le\arg z\le3\pi/4$, which lies in the exact sector of the Stirling statement. There $\log|g(re^{it})|\ge\frac14r\log r$ uniformly for large $r$; integrating the arc gives $m_0\ge(1/96)r\log r$. For entire $g$, the chordal characteristic differs from $m_0$ by at most $\frac12\log2$. Thus $T=\Theta(r\log r)$ and $\log T/\log r\to1$.
- Decision: this item file was absent before authoring, so it is a new assigned addition. It was registered in the existing manifest, coverage, and contract, and is handled by the dispatch's immutable-baseline addition certification; no Step 3 item-review receipt was created, per the new-item exception.
- Scope: sufficient decision refreshed after the local scaffold/source updates; the pair inventory and scope are unchanged.
- Checks: explicit-path precheck pass after the engine's canonical phase sequence (sector estimate 1.3, mean bound 2.1); strict item contract pass, 0 errors/0 warnings; explicit real-KaTeX render pass; pair-local ordered inventory recomputed with the assigned level-5 order unchanged.
- Open obligations: the owner still needs to repair the published `thm-stirling-formula-gamma` proof at step 3.1 and the serial reconciler should update the published supplier ledger. No local supplier was added. No AC is used. Next: `ex-nevanlinna-characteristics-of-elementary-functions` at level 5.

### 13. `ex-nevanlinna-characteristic-under-target-mobius-map` — complete (new assigned item; scaffold repaired)

- Claim/conventions: for nonconstant meromorphic $f$ and finite $a$, $M_a(w)=(1+\overline a w)/(w-a)$, extended by $M_a(\infty)=\overline a$, is degree one; $\delta(M_a(w),\infty)=\delta(w,a)$ at every sphere point, and $T(r,M_a\circ f)=T(r,f)+O_{f,a}(1)$.
- Source locators read in full: Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §6, equation (6.8) and its reduction to scalings, translations, and inversion, printed pp. 29–30 (local extraction `/tmp/frontier36-GO.txt`, lines 5202–5224); Eremenko, *Lectures on Nevanlinna Theory*, §2, algebraic characteristic properties (a)–(d), printed p. 4 (local extraction `/tmp/frontier36-weizmann.txt`, lines 267–282). The exact chordal identity and divisor correspondence were independently derived locally.
- Scaffold repair: added direct `thm-zero-order-factorization-holomorphic-function` and `thm-pole-characterizations` dependencies because the composition's divisor behavior at finite target points and source poles uses their exact local orders. Updated the scaffold strategy to describe those cases and the full-sphere endpoint calculation. Pair-local dependency ordering remains unchanged.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic`, `thm-nevanlinna-first-main-theorem`, `thm-nevanlinna-characteristic-elementary-laws`, `thm-zero-order-factorization-holomorphic-function`, and `thm-pole-characterizations`.
- Audit/argument: the matrix determinant is $-(1+|a|^2)\ne0$. The identity $|1+\overline a w|^2+|w-a|^2=(1+|a|^2)(1+|w|^2)$ proves chordal equality for finite regular values; $w=a$ and $w=\infty$ are checked separately. At an $a$-point of multiplicity $m$, zero factorization gives an order-$m$ pole after composition. At an order-$m$ pole of $f$, $1/(f-a)=(1/f)/(1-a/f)$ has a zero of order $m$, so the composition extends finitely. Thus the closed-disc pole divisor and integrated count equal $f$'s $a$-divisor. The proximity means are identical pointwise; the degree-one law and First Main Theorem give the stated estimate and its exact constant.
- Decision: the assigned item file was absent before authoring, so this is a new addition. It is registered in the existing manifest, coverage, and proof contracts and will receive the dispatch's baseline addition certification; no Step 3 item-review receipt was created.
- Checks: explicit-path precheck pass; strict item contract pass, 0 errors/0 warnings; explicit real-KaTeX rendering pass; pair-local order recomputation retains the dispatched level-5 order.
- Open gaps: none for $a=0$, a centre divisor, source poles, divisor radii, or either sphere endpoint. No local supplier was added. No AC is used. Next: `ex-nevanlinna-characteristics-of-elementary-functions` at level 5.

### 14. `ex-nevanlinna-characteristics-of-elementary-functions` — complete (new assigned item; scaffold repaired)

- Claim/conventions: for $d\ge1$, $T(r,z^d)=d\log r+O(1)$, $T(r,e^z)=r/\pi+O(1)$, and the normalized meromorphic tangent has $T(r,\tan z)=2r/\pi+O(1)$; their orders are $0,1,1$. The complex tangent is the meromorphic extension of the quotient of the complex sine and cosine.
- Source locators read: Eremenko, *Lectures on Nevanlinna Theory*, §2 Exercise 2*, printed p. 4 (the exercise asks for the exponential characteristic calculation but gives no proof); Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §6, Theorems 6.1–6.2 and Corollary (6.26), printed pp. 31–33 (the rational-composition law and rational degree characteristic). The relevant passages were read in full; the three estimates and order limits are derived in this item.
- Scaffold repair: removed the real-only sine/cosine definition as an inadequate complex tangent premise. Added the complex sine/cosine definition, exponential Cartesian modulus/Euler formula and addition law, holomorphic composition and exponential derivative, rational characteristic law, isolated-zero/local-factorization facts for tangent poles, and the real trigonometric monotonicity, endpoint, continuity, integrability and FTC facts for both angular integrals. Removed the unused direct zero-set dependency. Recomputed dependencies; the item remains at dispatched pair level 5 and the within-pair order is unchanged. Refreshed the sufficient scope receipt; claim and inventory did not expand.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic`, `thm-nevanlinna-characteristic-elementary-laws`, `def-order-of-growth-meromorphic-function`, `thm-complex-exponential-addition-and-real-extension`, `def-complex-trigonometric-and-hyperbolic-functions`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-derivatives`, `thm-ftc-second-part`, `cor-differentiable-implies-continuous`, `thm-continuous-implies-integrable`, `def-complex-exponential`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-polynomials-and-rational-functions-are-holomorphic`, `thm-chain-rule-for-holomorphic-maps-in-several-variables`, `thm-isolated-zeros-holomorphic-function`, and `thm-zero-order-factorization-holomorphic-function`.
- Audit/argument: the monomial formula is the exact spherical mean $\frac12\log(1+r^{2d})$. For $e^{\lambda z}$, the modulus formula yields the positive cosine part and the explicit integral is $2$, giving $m_0=\lambda r/\pi$. With $E=e^{2iz}$, the complex exponential formulas derive $\tan z=-i(E-1)/(E+1)$; the isolated-zero and local-order inputs verify every denominator zero is a genuine pole. The positive part $(-2r\sin t)^+$ integrates to $2r/\pi$, and degree-one rational composition transfers it to tangent up to $O(1)$. Taking $\log T/\log r$ yields the stated upper and lower orders. The proof includes the zero intervals, endpoint values and pole endpoints explicitly; no AC is used.
- Decision: item file was absent before authoring, so this is a new assigned addition. It was registered in the existing manifest, coverage and proof-contract scope and is handled by the immutable-baseline addition certification; no Step 3 item-review receipt was created.
- Checks: explicit-path precheck passes with canonical phase order $1.1,1.2,1.3,2.1,2.2,3.1,4.1,5.1$; strict single-item contract passes with 0 errors and 0 warnings; explicit real-KaTeX rendering passes. Scope remains sufficient and pair-local order is unchanged.
- Open gaps: none in the exact monomial mean, angular positive-part integrals, complex tangent continuation, poles on divisor radii, or the three order limits. No local supplier was added. Next: audit `thm-rational-functions-characterized-by-logarithmic-characteristic` at level 6.

### 15. `thm-rational-functions-characterized-by-logarithmic-characteristic` — complete (new assigned item; scaffold repaired)

- Claim/conventions: for a nonconstant meromorphic $f$ on $\mathbb C$, rationality is equivalent to $T(r,f)=O(\log r)$; a rational map of degree $d\ge1$ has $T(r,f)=d\log r+O(1)$ in the normalized chordal characteristic.
- Source locators: Eremenko, *Lectures on Nevanlinna Theory*, §2 Exercise 1, printed pp.3–4 (an exercise prompt stating rational degree growth and the stronger transcendental limit, but supplying no proof); Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §6, Theorem 6.1 and Corollary (6.26), printed pp.32–33 (fixed rational composition and rational degree growth); Ch. 1 §7, Theorem 7.1 and proof, printed pp.37–38 (entire maximum-modulus inequality). The relevant arguments were read; the complete reverse implication was derived locally, and the stronger $T/\log r\to\infty$ claim is not asserted here.
- Scaffold repair: added direct dependencies `thm-nevanlinna-quantities-well-defined`, `thm-pole-characterizations`, and `thm-taylor-expansion-holomorphic-function` to the original characteristic-laws, entire-maximum, characteristic-definition, and Cauchy-estimate inputs. Expanded the strategy to prove finite pole count from the integrated counting formula, cancel the finite divisor, and force the resulting entire function to be polynomial. Pair-local order remains the dispatched level 6.
- Dependencies examined: `thm-nevanlinna-characteristic-elementary-laws`, `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order`, `def-nevanlinna-counting-proximity-and-characteristic`, `cor-cauchy-estimates-taylor-coefficients`, `thm-nevanlinna-quantities-well-defined`, `thm-pole-characterizations`, and `thm-taylor-expansion-holomorphic-function`.
- Audit/argument: the identity map has $T(r,z)=\frac12\log(1+r^2)=\log r+O(1)$, so fixed rational composition gives the exact forward degree asymptotic. In the reverse direction, nonnegative chordal proximity yields $N(r,\infty;f)\le T(r,f)\le A\log r$. If there were infinitely many poles, a least integer radius containing at least an integer $M>A$ pole multiplicities gives $N(R,\infty;f)\ge M\log R-C_M$, contradicting that bound. A polynomial $q$ formed from the finite poles, with $q=1$ for no poles, makes $g=qf$ entire. Direct polynomial growth, the product law, and $T_0(g)\le T(g)$ give $T_0(r,g)=O(\log r)$. The entire maximum-modulus bound then gives $M(r,g)\le C r^B$; Cauchy estimates make all coefficients above $B$ vanish, so the entire Taylor expansion makes $g$ a polynomial. The proof explicitly handles an empty pole set, a centre pole, poles on the closed-disc boundary, the constant-$g$ branch, and uses only finite enumeration and well-ordering, not AC.
- Decision: the item file was absent before this dispatch authored it. It is registered in the existing manifest and coverage and now has a complete strict proof contract; no Step 3 item-review receipt was created under the new-addition exception.
- Scope: refreshed this pair's sufficient Step 3a receipt after the dependency repair; the scope hash remains `fe62ddcd4ecf47b4b996cf614096c7345f326014ac1ea18b9da1ee72fc06a315`. Resolved all 11 current scope-decline rows owned by this pair with source and plan evidence in group `d`. The other 18 group-`d` rows belong to the Green-functions and Markov-chain pairs and remain pending for their owners; group `d` scope-decision check therefore still reports those sibling errors.
- Checks: explicit-path precheck passes with canonical phases $1.1,1.2,2.1,3.1,4.1,5.1$; strict single-item contract passes with 0 errors and 0 warnings; explicit real-KaTeX rendering passes. The final content-policy gate found the proof's avoidable applied-$\\iota$ name for the identity map; step 1.1 now names the identity function directly with the same argument. Its explicit-path precheck and rendering pass. `item-dependency-levels check --run frontier-36-complete` passes for 925 items across 60 pages, maximum level 18; the item remains at dispatched level 6.
- Open gaps: no mathematical gap in the stated iff or degree asymptotic; no local supplier was added. The pair-wide content-policy and full strict-contract gates pass after the local text/contract repairs. Step 4 reconciliation and the run-state hold are listed in the final handoff below. Next: `ex-rational-degree-as-logarithmic-characteristic` at level 7.

### 16. `ex-rational-degree-as-logarithmic-characteristic` — complete (new assigned item)

- Claim/conventions: for $R(z)=(z^2+1)/(z-1)$, the coprime numerator and denominator have maximum degree two; the unique pole is simple at $1$. The closed-disc pole count gives $N(1,\infty;R)=0$ and $N(r,\infty;R)=\log r$ for $r>1$. Uniform bounds on the large boundary circles give $m(r,\infty;R)=\log r+O(1)$, so the normalized chordal characteristic is $2\log r+O(1)$.
- Source passages re-read after resuming: Eremenko, *Lectures on Nevanlinna Theory*, §2 Exercise 1, printed pp. 3–4, which states the rational degree asymptotic as an exercise without giving a proof; Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §6, Theorem 6.1 and its complete proof, printed pp. 31–33, including Corollary (6.26), p. 33. The item directly computes its count and proximity and checks the result against both composition and degree laws.
- Dependencies examined: `def-nevanlinna-counting-proximity-and-characteristic` (normalized chordal formula, closed-disc multiplicity and integrated count), `thm-nevanlinna-characteristic-elementary-laws` (fixed rational composition with a nonconstant meromorphic input), and the immediately preceding `thm-rational-functions-characterized-by-logarithmic-characteristic` (degree-$d\ge1$ rational characteristic). All three are completed in this pair and were rechecked before relying on them.
- Audit/argument: polynomial division gives $R=z+1+2/(z-1)$, so the only pole is simple and the centre is finite. The closed-disc convention includes the pole at $r=1$, but its integrated weight is $\log1=0$; for $r>1$, integrating the count gives $N=\log r$. For $r\ge4$, $r/2\le|R(re^{it})|\le2r$ uniformly, so the chordal proximity integrand is $\log r+O(1)$ uniformly and its circular mean has that asymptotic. Adding the exact count yields $T=2\log r+O(1)$, which agrees with the fixed rational composition law applied to the identity and the preceding rational-degree theorem. No AC or choice is used.
- Contract audit: strict-contract citations for the two theorem inputs were tightened to include the applicable degree and nonconstant-input hypotheses; the contract retains the exact steps, derivations and boundary evidence for empty disc, centre, single pole, degeneracy, endpoint, choice and both inapplicable iff directions.
- Decision: the item file was absent from the pre-author baseline, so it is a new assigned addition. It is registered in the batch manifest, coverage and full proof-contract scope. It does not enter a Step 3 self-review or review-repair-author loop; the engine supplies its current scope and item certifications after a successful dispatch.
- Cross-batch dependency input: `research/frontier-36-complete-batch-27.cross-batch-dependencies.json` remains `[]`. The A-page prerequisites are outside this run, and B's edge to A is within batch 27; no direct item edge from this pair crosses to another batch in this run. No sibling rows existed to replace or edit.
- Checks: item-specific explicit-path precheck passes; item-specific renderer passes (0 errors, 0 warnings); strict item contract passes (0 errors, 0 warnings). Final pair-wide explicit-path precheck checks all 15 proof-bearing items with 0 failures (the definition has no proof body); renderer checks all 16 item files with 0 errors and 0 warnings; batch content-policy checks all 16 with 0 errors and 0 warnings; the full strict contract checks all 16 with 0 errors and 0 warnings; run-wide item dependency levels pass for 925 items on 60 pages, maximum level 18; `validate-plan research/plan-spec.json` exits 0 with an acyclic, consistent page order and no hard plan errors.
- Plan reconciliation for Step 4: plan-spec pages 839 and 840 have empty item arrays while batch 27 has the complete 10-item A and 6-item B inventories; splice these manifests into the plan. Their page order and `requires` sets match. The validator flags the A page's direct `isolated-singularities-and-laurent-series` requirement as redundant because it is transitively reached through both `the-argument-principle-and-rouche` and `harmonic-functions-and-the-poisson-integral`; recommend removing that direct edge in the serial Step-4 reconciliation while retaining both transitive prerequisite paths. At global plan scope, `ex-conway-base-13-function` is the single planned item whose file is not present; its planned owner is `monotone-functions-and-discontinuities-examples` (order 152), outside this pair, and its owner should complete it before the final splice.
- Scope checks: this pair's scope receipt remains sufficient. The group-d scope check still reports 18 pending decline rows (36 mechanical errors) owned by `green-functions-harmonic-measure-and-conformal-invariance` and `recurrence-transience-and-hitting-times-for-markov-chains`; they were not changed. The global current-scope check still has seven other page obligations: `fundamental-solutions-newtonian-potentials-and-green-functions`, `jacobi-fields-conjugate-points-and-the-cut-locus`, `alphabet-reduction-and-the-pcp-theorem`, `grothendieck-groups-and-graded-cartan-pairings`, `braids-as-fundamental-groups-of-configuration-spaces`, `recurrence-transience-and-hitting-times-for-markov-chains`, and `weak-derivatives-and-sobolev-spaces`.
- Open gaps: none in the example's pole count, boundary asymptotic or degree calculation; no local supplier was added. The published Gamma proof concern remains open for the owner as detailed below. Step 4 reconciliation and the run-state hold are listed in the final handoff below.

## Published concern for owner

- `thm-stirling-formula-gamma` on published page `the-gamma-function`, proof step 3.1: it replaces `Log(N+z)` by `log N+o(1)` while multiplying by $(N+z-\tfrac12)$. This loses the non-vanishing $z$ contribution. In fact
  \[
  \Log(N+z)=\log N+z/N+O_z(N^{-2}),
  \]
  so the product contributes (+z+o(1)), which is needed for the stated Binet formula in the next line. Confidence: high; this is a confirmed proof gap, not a false statement. Proposed repair: retain the first-order (z/N) term, carry (+z) through the finite-product limit, then continue the integral-remainder argument. Required library suppliers: none; this is a proof-only repair to the published item. The external primary source below supplies the corrected expansion and sector estimate. Primary source: Chandrasekharan, *Lectures on the Riemann Zeta-Function*, Lecture 7, §6, equations (6.1)–(6.5) and the uniform sector remainder estimate, printed pp. 60–62 (PDF pp. 66–68), https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf; it retains the `z/N` term, carries the resulting `+z`, and obtains the `O(1/|z|)` sector estimate. Do not edit the published item or canonical supplier ledger.

## Final dispatch handoff

- Completed assigned IDs, in generated order: `def-nevanlinna-counting-proximity-and-characteristic`, `thm-poisson-jensen-formula-meromorphic-function`, `thm-nevanlinna-quantities-well-defined`, `ex-poisson-jensen-with-a-repeated-zero`, `lem-meromorphic-jensen-formula-with-centre-divisor`, `thm-ahlfors-shimizu-characteristic-identity`, `thm-nevanlinna-first-main-theorem`, `def-order-of-growth-meromorphic-function`, `thm-nevanlinna-characteristic-elementary-laws`, `ex-nevanlinna-regularisation-when-f-zero-equals-a`, `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order`, `ex-nevanlinna-characteristic-of-reciprocal-gamma`, `ex-nevanlinna-characteristic-under-target-mobius-map`, `ex-nevanlinna-characteristics-of-elementary-functions`, `thm-rational-functions-characterized-by-logarithmic-characteristic`, and `ex-rational-degree-as-logarithmic-characteristic`.
- Final checks actually run: explicit-path precheck (15 proof-bearing items, 0 failing); explicit-path rendering (16 item files, 0 errors/warnings); batch-27 content-policy (16 items, 0 errors/warnings); strict full proof contracts (16 items, 0 errors/warnings); `item-dependency-levels check --run frontier-36-complete` (925 items across 60 pages, maximum level 18); `validate-plan research/plan-spec.json` (exit 0, no hard errors, acyclic/consistent page order). The pair-local content-policy and contract findings discovered on the first pass were repaired and these final checks rerun.
- Local suppliers added: none. All arguments remain choice-free; no AC is used. The batch-27 cross-batch input remains the valid empty array because its only same-run page edge is B-to-A inside batch 27, the A prerequisites are outside this run, and no assigned item dependency crosses to another batch in this run. The shared unified ledger and published-consumer ledger were not edited.
- Published concern: confirmed proof gap in `thm-stirling-formula-gamma`, `the-gamma-function`, proof step 3.1; evidence, confidence and repair are recorded above for the owner.
- Step-4/report obligations: splice the 10-item A and 6-item B manifests into plan-spec pages 839–840, which still have empty item arrays; remove the redundant direct A prerequisite `isolated-singularities-and-laurent-series` while retaining its transitive routes; check the absent planned item `ex-conway-base-13-function` in `monotone-functions-and-discontinuities-examples` (outside this pair). The pair's page order and declared prerequisite sets otherwise agree.
- Scope obligations outside this pair: group `d` still has 18 pending rows owned by the Green-functions and Markov-chain pairs. The global scope check lists seven other pages awaiting review or owner-proceed actions: `fundamental-solutions-newtonian-potentials-and-green-functions`, `jacobi-fields-conjugate-points-and-the-cut-locus`, `alphabet-reduction-and-the-pcp-theorem`, `grothendieck-groups-and-graded-cartan-pairings`, `braids-as-fundamental-groups-of-configuration-spaces`, `recurrence-transience-and-hitting-times-for-markov-chains`, and `weak-derivatives-and-sobolev-spaces`.
- Run-state obligation: despite the generated Step-3b task file for this pair, recomputed autopilot status still reports run `frontier-36-complete` at active `1-drift` with its gate not run and `3b-author` waiting for earlier stages. No engine transition or certification was attempted. The owner/operator must reconcile the run stage before expecting the new additions to receive the dispatch's automatic scope and item certifications needed for Step 4.
- Owned mathematical obligations remaining: none. The new additions (items 15 and 16) were absent from the pre-author baseline, are fully registered and contracted, and are subject to the authorized post-dispatch certification exception rather than a self-review loop.

---

# Addendum — dispatch `step3b-pair-jensen-theory-and-nevanlinnas-first-main-theorem-04a4d3f44bf90665`

Same run, pair and batch as the dispatches recorded above (`acc79162f93b0e1e`,
`e123425e6ade58cd`); this section reports the current dispatch's revision pass
and supersedes nothing above. Everything below was re-derived or re-run on the
current working tree at handoff.

## Item revision audit (all 16 assigned items)

- Completed IDs, in the generated dependency order:
  `def-nevanlinna-counting-proximity-and-characteristic`,
  `thm-poisson-jensen-formula-meromorphic-function`,
  `thm-nevanlinna-quantities-well-defined`,
  `ex-poisson-jensen-with-a-repeated-zero`,
  `lem-meromorphic-jensen-formula-with-centre-divisor`,
  `thm-ahlfors-shimizu-characteristic-identity`,
  `thm-nevanlinna-first-main-theorem`,
  `def-order-of-growth-meromorphic-function`,
  `thm-nevanlinna-characteristic-elementary-laws`,
  `ex-nevanlinna-regularisation-when-f-zero-equals-a`,
  `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order`,
  `ex-nevanlinna-characteristic-of-reciprocal-gamma`,
  `ex-nevanlinna-characteristic-under-target-mobius-map`,
  `ex-nevanlinna-characteristics-of-elementary-functions`,
  `thm-rational-functions-characterized-by-logarithmic-characteristic`,
  `ex-rational-degree-as-logarithmic-characteristic`.
- Owner direction in `research/frontier-36-complete-owner-authoring-direction.md`
  ("The Jensen/Nevanlinna companion page directly requires the published Gamma
  page for its reciprocal-Gamma example. Use the published Weierstrass
  product, meromorphic continuation and sectorial Stirling statements with
  their exact hypotheses; prove the example's characteristic estimates rather
  than merely citing a source exercise") is satisfied: the B manifest and
  plan page 840 both require `the-gamma-function`, the example's three
  published Gamma suppliers are used with their exact stated hypotheses, and
  the `Θ(r log r)` estimates are proved inside the item.
- Re-read CLAUDE.md/SCHEMA.md, the batch-27 manifests, coverage, proof
  contracts, the Step-3a scope receipt, all 16 item files and both page files,
  and the dependency statements actually consumed. Recomputed the pair-local
  dependency labels from `research/frontier-36-complete-batch-27.pages.json`:
  the dispatched levels 0–7 and the tie ordering are reproduced exactly (0:
  definition, Poisson–Jensen; 1: well-definedness, repeated zero; 2:
  centre-divisor lemma, Ahlfors–Shimizu; 3: First Main Theorem; 4: order
  definition, elementary laws, regularisation example; 5: maximum-modulus
  proposition, reciprocal Gamma, target Möbius, elementary functions; 6:
  rationality theorem; 7: rational-degree example).
- Ten items already carried a live decision from the earlier passes — eight
  `repaired` (`thm-poisson-jensen-formula-meromorphic-function`,
  `thm-nevanlinna-quantities-well-defined`,
  `lem-meromorphic-jensen-formula-with-centre-divisor`,
  `thm-ahlfors-shimizu-characteristic-identity`,
  `def-order-of-growth-meromorphic-function`,
  `thm-nevanlinna-characteristic-elementary-laws`,
  `ex-nevanlinna-regularisation-when-f-zero-equals-a`,
  `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order`) and two
  `accept` (`ex-poisson-jensen-with-a-repeated-zero`,
  `thm-nevanlinna-first-main-theorem`); each receipt's hash was checked
  current against its item inputs.
  Six items had no live decision when this dispatch resumed; each was re-audited
  in full against the sources and the item file, then recorded `accept` with
  confidence 1, the examined dependency IDs, and a concrete re-derivation in
  the reason:
  - `def-nevanlinna-counting-proximity-and-characteristic` — sha
    `bfad78f6b2cb14ec7b60cf2cb38dae9186c3d20ee98e48cda6fb3f98bdb72fb5`;
    re-derived the diameter-one chordal normalization from stereographic
    projection, checked the closed-disc/local-multiplicity and centre-
    regularized count conventions, both sphere endpoints, and the excluded
    attained target of a constant map.
  - `ex-nevanlinna-characteristic-of-reciprocal-gamma` — sha
    `92383d713a8de7b9af7c6d03e749b1f043221dc033e29122238651c4ce6b087b`;
    re-derived the `O(r log r)` upper bound and the sector lower bound (fixed
    arc `[2π/3,3π/4]`, `δ=π/4`, giving `m₀ ≥ r log r/96`), hence
    `T = Θ(r log r)` and order = lower order = 1; separately verified the
    published Stirling statement's step-3.1 repair now present in the working
    tree.
  - `ex-nevanlinna-characteristic-under-target-mobius-map` — sha
    `c0f1e07346b0ef5d50ea2e08d818bfdb0c6e98495ab9876a45416b024028f67d`;
    re-derived `ad−bc=−(1+|a|²)`, the algebraic identity
    `|1+āw|²+|w−a|²=(1+|a|²)(1+|w|²)`, both sphere endpoints, and the
    divisor/order correspondence including the source-pole case.
  - `ex-nevanlinna-characteristics-of-elementary-functions` — sha
    `11349b8986247ea3326c1081d7423c64c3fd0bb094be4e4a59d43a9c0594ada6`;
    re-derived `T(r,z^d)=d log r+O(1)`, `m₀(r,e^z)=r/π`, the tangent
    continuation `tan z=-i(E-1)/(E+1)` with exact pole set, and the three
    order limits.
  - `thm-rational-functions-characterized-by-logarithmic-characteristic` —
    sha `ad8280d371ea1e577ce60b77d45d2964b57e219148063fd6ced02e516d47cefc`;
    re-derived pole-set finiteness from `N ≤ T ≤ A log r` (a radius carrying
    `M>A` counted poles contradicts the bound), the clearing polynomial, the
    entire maximum-modulus bound `M(r,g) ≤ C r^B`, and Cauchy-estimate
    vanishing of all Taylor coefficients above `B`.
  - `ex-rational-degree-as-logarithmic-characteristic` — sha
    `f48111c1e871debfb11755a5f1b331357c765e05441cfd58a056b6599c7bb1fa`;
    re-derived `R=z+1+2/(z−1)`, `N(r)=log r` for `r>1`, `r/2 ≤ |R| ≤ 2r` for
    `r≥4`, and `T=2 log r+O(1)`.
- Verified with `loadStep3`/`itemDecision` on the live tree: 0 open items for
  this pair; the pair scope receipt is `sufficient` (sha
  `fe62ddcd4ecf47b4b996cf614096c7345f326014ac1ea18b9da1ee72fc06a315`). All 16
  review receipts exist at
  `research/frontier-36-complete-step3b-review-<id>.json` and their recorded
  hashes match the current item inputs.

## Pages authored in this dispatch

- `library/complex-analysis/jensen-theory-and-nevanlinnas-first-main-theorem.md`
  (new; 10 items) and
  `library/complex-analysis/jensen-theory-and-nevanlinnas-first-main-theorem-examples.md`
  (new; 6 examples, links `[[the-gamma-function]]`). Both `status: draft`; the
  item/example lists match the batch manifest; the prose states the
  conventions actually used (closed-disc counts with multiplicity, centre
  regularization by `n(0,a) log r`, diameter-one chordal normalization, exact
  First Main Theorem constant) and that every argument is choice-free.

## Checks actually run at handoff (re-run on the current tree)

- `precheck.mts` explicit 16 item paths: 15 checked (the definition has no
  proof body), 0 failing.
- `rendercheck.mjs` 16 items + 2 pages: 18 files OK — no wikilink inside math,
  no nested/unbalanced delimiters, every math span parses under real KaTeX.
- `content-policy.mjs research/frontier-36-complete-batch-27.pages.json`:
  16 scoped items, 0 errors, 0 warnings.
- `proof-contract.mjs research/frontier-36-complete-batch-27.proof-contracts.json --strict`:
  16/16 items, 0 errors, 0 warnings.
- `item-dependency-levels.mjs check --run frontier-36-complete`: 926 items
  across 60 pages, maximum level 18, pass; pair-local recomputation reproduces
  the dispatched levels and order exactly.
- `coverage-checklist.mjs research/frontier-36-complete-batch-27.coverage.json --require-destination`:
  2 pages, 58 harvested results, 0 errors, 0 warnings.
- `manifest-deps.mjs` (batch 27): 16 items, 0 errors.
  `manifest-integrity.mjs --run frontier-36-complete`: 60/60 pages, no scope
  drift.
- `depsource.mjs --page` for both pages: 0 unresolved. `prosecheck.mjs` on the
  16 items + 2 pages with `--strict`: 0 errors; one heuristic
  `count-in-prose` warning on the B page ("the last two examples"), which is
  accurate — those are the last two example entries. `extcheck.mjs`: exit 0
  (only pre-existing global warnings about unrelated published items).
- `url-sweep.mjs --coverage research/frontier-36-complete-batch-27.coverage.json`:
  3/3 live, 0 failed. `source-fetch-check.mjs` on the same coverage: 5/5
  resolved. `source-backing.mjs` with the sweep output and
  `--require-verified`: 18 authored results, all still backed.
- `validate-plan.mjs research/plan-spec.json`: exit 0.
- `frontier-dependency-ledger.mjs refresh --run frontier-36-complete`:
  refreshed; batch 27's input `[]` contributes no edges (the derived ledger
  now holds 171 edges across 30 reviewed batches; the pair's only cross-page
  edge, B→A, is inside batch 27).

## Local suppliers, AC

- No local supplier was added in this dispatch; all 16 items are already
  registered in the manifest, coverage and proof contracts. No argument in
  the pair uses AC: the itemized audits record finite divisor enumeration and
  well-ordering of the integers only, and `rendercheck`/`content-policy` found
  no hidden premise on a unit-sphere chordal page (the normalization is
  defined locally).

## Published concern (unchanged in substance; the repair is now in the tree)

- `thm-stirling-formula-gamma` (published, page `the-gamma-function`), proof
  step 3.1: confirmed gap — `Log(N+z)` was replaced by `log N+o(1)` and the
  multiplication by `(N+z−1/2)` lost the non-vanishing `+z` term needed by
  the Binet line. The working tree now contains an uncommitted owner repair
  (see `git diff items/thm-stirling-formula-gamma.md`) retaining
  `Log(N+z)=log N+z/N+O_z(N^{-2})` and cancelling the `N`, `log N` and
  `z log N` terms to produce `+z`. I re-derived that cancellation and the
  subsequent integral-remainder step against Chandrasekharan, *Lectures on the
  Riemann Zeta-Function*, Lecture 7 §6, eqs. (6.1)–(6.5), printed pp. 60–62;
  the repair is sound and the statement was never false. The reciprocal-Gamma
  example's use of the sectorial statement is unaffected. The serial
  reconciler has already recorded the finding and repair in
  `research/published-consumer-supplier-ledger.md` ("Gamma Stirling limit
  repaired — 2026-09-28", classification A-R, with the seven direct consumers
  inspected); this dispatch did not edit published content or the ledger, and
  the remaining action is the owner's commit.
- No other published item used by this pair was found defective in this pass.
  The remaining published suppliers actually consumed (meromorphic-function,
  pole, zero-factorization, Laurent, identity-theorem, Poisson-representation,
  Cauchy-estimate, Weierstrass-product, Gamma-continuation, exponential and
  trigonometric items) were re-checked only at their used interfaces and
  matched the hypotheses cited by the items; those bounded reads are not
  independent judgments or whole-closure audits.

## Whole-repo gate failures observed at handoff (outside this pair; not repaired)

- `depcheck.mjs`: 13 errors — 6 `page-item-missing` on
  `library/scheme-theory/finite-proper-and-projective-morphisms-examples.md`
  and 7 `b-leaf-content` errors in Fredholm / spectral / recurrence / schemes
  items whose deps point at example leaves living only on B pages. None in
  batch 27.
- `fwdcheck.mjs`: exit 1 for `forward-undeclared` wikilinks to
  `def-natural-number-coding-of-finite-sequences` in measurable-Hilbert-field
  items (plus a Gelfand-theory forward link). None in batch 27.

## Step-4 plan reconciliation (actual mismatches)

- `research/plan-spec.json` pages 839 and 840 still have empty item arrays;
  splice the complete 10-item A and 6-item B inventories from
  `research/frontier-36-complete-batch-27.pages.json`.
- The validator flags the A page's direct `requires` entry
  `isolated-singularities-and-laurent-series` as redundant (transitively
  reached both via `the-argument-principle-and-rouche` and via
  `harmonic-functions-and-the-poisson-integral`); recommend dropping the
  direct edge in serial Step 4 while keeping both transitive routes. The A
  page's other three direct requirements are not flagged.
- Page 841 `nevanlinna-second-main-theorem-and-defects` is flagged for the
  same pattern on its two measure-theory requirements
  (`measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`,
  both transitively reached through this pair's A page). Reported for that
  page's owner; not edited here.
- The only planned item whose file is absent globally is
  `ex-conway-base-13-function` (planned page
  `monotone-functions-and-discontinuities-examples`, order 152), outside this
  pair.
- `validate-plan` otherwise exits 0: acyclic, consistent page order, and no
  item-level cycles, forward references, B-page dependencies or unresolved ids
  among the pages that carry item lists.

## Scope obligations outside this pair (observed at handoff)

- `step3-decisions.mjs check --run frontier-36-complete --phase scope` (30
  pairs, 926 items) reports four open scope rows, none for this pair:
  `fundamental-solutions-newtonian-potentials-and-green-functions` (owner
  proceed pending), `jacobi-fields-conjugate-points-and-the-cut-locus`
  (current scope review required), `chern-weil-theory-and-characteristic-forms`
  (current scope review required), and `weak-derivatives-and-sobolev-spaces`
  (owner proceed pending). The earlier group-`d` list in the prior report is
  stale and is not restated here.

## Run-state obligation

- Recomputing autopilot status at handoff
  (`node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run
  frontier-36-complete --state-dir .autopilot/frontier-36-complete`) still
  reports `1-drift` active with its gate not run and `3b-author` waiting for
  earlier stages (state updated 2026-09-28T09:42Z). No engine transition,
  judge/audit stamp or `--owner` action was attempted from this dispatch; the
  operator must reconcile the run stage before the additions can receive the
  automatic scope and item certifications.

## Open obligations

- Owned by this pair: none. All 16 items are authored, contracted, checked and
  decision-closed; both pages are written; the cross-batch input `[]` is valid;
  no AC is used; no local supplier was added.
- For the owner/serial reconciler: verify and commit the in-tree Stirling
  proof repair; perform the Step-4 splices and prune the redundant A-page
  prerequisite as listed above.
