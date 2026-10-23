# R3: exponential sums, circle method, and additive interfaces

Research/scaffold report dated 2026-10-23. This track covers quantitative
exponential-sum estimates, mean values and decoupling, Waring/circle-method
inputs, finite-density and relative Szemerédi interfaces, Green–Tao
transference/nilsequence suppliers, trace-function correlation bounds, and the
ternary Goldbach source theorem. The machine-readable planning material is
owned only by this track:

- [`r3-sources/pair-fragment.json`](r3-sources/pair-fragment.json)
- [`r3-sources/proposed-inventories.json`](r3-sources/proposed-inventories.json)
- [`r3-sources/source-review.md`](r3-sources/source-review.md)

These are proposed A/B page pairs and item inventories, not authored or proved
library items. All theorem suppliers are on A pages; B pages contain examples
only. Each mathematical supplier is conditional on the local proof obligations
below being discharged. Do not interpret the cited papers as already-available
library proofs.

## Proposed finite pairs

| A supplier page → B examples page | Exact planned contract and source | Main proof suppliers still required locally |
|---|---|---|
| `van-der-corput-derivative-tests` → `van-der-corput-derivative-tests-examples` | Geometric-sum/Kuzmin first-derivative estimate, then discrete second- and third-derivative estimates. For (S=\sum_{n\in I\cap\mathbb Z}e(f(n))), constant-sign (f''\asymp\lambda_2>0) gives (S\ll N\lambda_2^{1/2}+\lambda_2^{-1/2}); constant-sign (f'''\asymp\lambda_3>0) gives (S\ll N\lambda_3^{1/6}+N^{1/2}\lambda_3^{-1/6}), with constants depending on the two-sided derivative comparison. H. W. E. Elkies, Harvard Math 229, *Exponential sums II–III*, complete 11- and 3-page handouts. | Give the exact interval/endpoint and monotonicity assumptions; prove the geometric sum, first derivative test and differencing inequality. The existing `lem-van-der-corput-oscillatory-integral-estimate` is an integral estimate and does not supply these discrete tests. |
| `polynomial-weyl-sum-estimates` → `polynomial-weyl-sum-estimates-examples` | Classical Weyl differencing bound plus Wooley’s selected-coefficient estimate. For degree (k\ge2), (2\le j\le k), ((a,q)=1), (|\alpha_j-a/q|\le q^{-2}), (q\le X^j), Wooley 2012 Thm. 1.5 gives (\sum_{n\le X}e(\sum_{i=1}^k\alpha_i n^i)\ll_{k,\epsilon}X^{1+\epsilon}(q^{-1}+X^{-1}+qX^{-j})^{1/(2k(k-1))}). | The chosen-denominator Dirichlet approximation lemma, (d_r(n)\ll_{r,\epsilon}n^\epsilon), and exact repeated-differencing proof. The existing divisor summatory-average theorem does not give the subpower divisor bound. The Wooley item depends on the VMVT supplier and should be titled as a rational-approximation estimate, not “poorly approximable coefficient.” |
| `sharp-l2-decoupling-for-the-moment-curve` → `sharp-l2-decoupling-for-the-moment-curve-examples` | Bourgain–Demeter–Guth, Ann. Math. 184 (2016), Thm. 1.2: for every (n\ge1), (0<\delta\le1), ball (B\subset\mathbb R^n) of radius (\delta^{-n}), and integrable (g), the weighted critical (L^{n(n+1)}) extension norm is at most (C_{n,\epsilon}\delta^{-\epsilon}(\sum_{|J|=\delta}\|E_Jg\|_{L^{n(n+1)}(w_B)}^2)^{1/2}). Theorem 1.1 is the associated (J_{s,n}(N)\ll_{n,s,\epsilon}N^{s+\epsilon}+N^{2s-n(n+1)/2+\epsilon}). | Real Fourier-transform/weighted-(L^p) definitions, multilinear Kakeya/Brascamp–Lieb, ball inflation, lower-dimensional decoupling at the flat scale, linear/multilinear comparison, and induction on scales. The existing finite DFT and Schwartz/Plancherel material is not the continuous weighted decoupling proof. |
| `vinogradov-mean-value-theorem` → `vinogradov-mean-value-theorem-examples` | For (s,k\ge1), (J_{s,k}(X)\ll_{s,k,\epsilon}X^\epsilon(X^s+X^{2s-k(k+1)/2})). BDG 2016 Thm. 1.1 for degrees (k\ge4), Wooley’s cubic theorem for (k=3), and elementary low-degree cases. Include the exact integral-to-solution-count identity by torus orthogonality and diagonal lower bounds. | Continuous torus orthogonality is not supplied by the finite cyclic DFT page. Prove the cubic supplier (or a local proof from Wooley) and import the decoupling A page only after its proof chain is built. The large-moment efficient-congruencing theorem is retained as a distinct source-bounded method, not substituted for the full range without the cubic/decoupling cases. |
| `nested-efficient-congruencing-polynomial-mean-values` → `nested-efficient-congruencing-polynomial-mean-values-examples` | Wooley 2019 Thm. 1.1: if (phi_1,\ldots,\phi_k\in\mathbb Z[t]) have nonzero Wronskian, (0<s\le k(k+1)/2), and (a_n\in\mathbb C), then the (2s)-th mean value of (\sum_{|n|\le X}a_ne(\sum_j\alpha_j\phi_j(n))) is (\ll_{\epsilon,\phi,s}X^\epsilon(\sum_{|n|\le X}|a_n|^2)^s). Cor. 1.2 covers distinct positive degrees. | State the polynomial-family normalization and Wronskian hypotheses exactly; build the nested conditioning/congruencing iteration in §§2–12. Number-field and function-field variants in §§13–17 are outside this pair and explicitly deferred. |
| `waring-asymptotic-formula` → `waring-asymptotic-formula-examples` | Classical circle-method representation formula and singular series/integral for sums of (s) positive (k)-th powers, together with Wooley’s source-bounded (\widetilde G(k)\le2k^2+2k-3) threshold (Wooley 2012 Thm. 1.4). | Continuous circle orthogonality, Farey/major-minor arc decomposition, singular integral/series convergence and positivity, major-arc approximation, and a minor-arc bound strong enough for the chosen (s,k). The Bonn notes are a cross-check and are flagged by their author as potentially containing errors; theorem thresholds are cross-checked against the primary Wooley paper. |
| `additive-energy-fourier-identity` → `additive-energy-fourier-identity-examples` | For (A\subset\mathbb Z/N\mathbb Z), (E(A)=\#\{a+b=c+d\in A\}=N\sum_\xi|\widehat{1_A}(\xi)|^4) with the unitary DFT convention. | This is a short finite-group derivation from the existing DFT, Parseval and convolution suppliers. It adds the missing additive-energy interface without duplicating finite character orthogonality or Gauss sums. |
| `generalized-von-neumann-theorem` → `generalized-von-neumann-theorem-examples` | Define (U^d) on finite cyclic groups and prove Gowers Cauchy–Schwarz/monotonicity; for bounded (f_i), a (k)-term progression count is (O_k(\min_i\|f_i\|_{U^{k-1}})), with the exact normalized count and ambient-group hypotheses fixed in the item. Green–Tao 2008 Prop. 5.3 is the sparse pseudorandom version, which is a separate item on the relative pair. | Prove the cube expansion, positivity, Cauchy–Schwarz iteration and progression-counting identity. This A page is the actual supplier of the finite-cyclic (U^d) definition to the finite Szemerédi, relative Szemerédi and GTZ inverse-theorem pairs; there is no separate unplanned `gowers-uniformity-norms-on-finite-groups` page. |
| `szemeredi-finite-density-theorem` → `szemeredi-finite-density-theorem-examples` | For every fixed (k\ge3), (delta>0), all sufficiently large (N), any (A\subset[N]) with (|A|\ge\delta N) contains a (k)-term AP (Gowers 2001, Thm. 1.2). Include Varnavides’ positive normalized count corollary. | The full long density-increment proof needs Fourier/additive-energy input, Freiman/approximate-homomorphism structure, and the inductive density-increment argument. Gowers’s entire 129-page paper was retrieved, but this pass closely read Thm. 1.2, §2, and the start of §3; §§4–18 were mapped by headings, not reconstructed. Thus it is a required bounded supplier pair with a substantial local proof audit still owed. |
| `relative-szemeredi-transference-theorem` → `relative-szemeredi-transference-theorem-examples` | Green–Tao 2008 Thm. 3.5: fixed (k\ge3), (N\to\infty) through primes, a (k)-pseudorandom measure (\nu) satisfying the exact linear-forms and correlation conditions of Defs. 3.1–3.3, and (0\le f\le\nu) with (\mathbb E f\ge\delta>0) give normalized (k)-AP count at least (c(k,\delta)-o(1)). | State the exact Green–Tao 2008 pseudorandomness parameters: linear-forms tuple (m0,t0,L0)=(k·2^{k−1},3k−4,k), correlation-condition order m0=2^{k−1} with all finite moment bounds, and the uniformity in translation parameters. Build the relative generalized von Neumann inequality and Koopman–von Neumann energy increment; invoke finite Szemerédi/Varnavides under the exact transfer hypotheses. |
| `w-tricked-prime-pseudorandomness` → `w-tricked-prime-pseudorandomness-examples` | Green–Tao 2008 Props. 9.1, 9.5–9.6: with (W=\prod_{p\le w(N)}p), slowly growing (w(N)\to\infty), the rescaled prime von Mangoldt weight is majorized by a truncated-divisor-square measure (\nu) which meets the fixed-(k) linear-forms/correlation conditions. Source chooses (R=N^{1/(k2^{k+4})}) and (epsilon_k=1/(2^k(k+4)!)). | Goldston–Yıldırım divisor expansion, multivariable zeta contour asymptotic and correlation factor, uniform prime distribution in the growing moduli supplied by Siegel–Walfisz, plus the classical zeta zero-free/PNT estimates used in the contour error. No Bombieri–Vinogradov edge is used by the 2008 AP proof. |
| `green-tao-prime-arithmetic-progressions` → `green-tao-prime-arithmetic-progressions-examples` | Green–Tao 2008 Thm. 1.1: for each fixed (k\ge3), primes contain infinitely many (k)-term arithmetic progressions; also record the positive-relative-upper-density subset consequence. | Chain the relative Szemerédi theorem to the W-tricked pseudorandom majorant and prove the progression-unwrapping/nondegeneracy step. The original source’s default proof uses its slowly growing (W(N)) route; §11’s fixed-(W) positive-lower-bound alternative is not the chosen dependency route. Do not add Bombieri–Vinogradov. |
| `quantitative-leibman-factorization` → `quantitative-leibman-factorization-examples` | Green–Tao 2012 Thms. 1.16 and 1.19: a polynomial orbit is either totally Lipschitz-equidistributed on a long progression or has a small horizontal character obstruction; factor (g=\epsilon g'\gamma) into smooth, totally equidistributed and rational/periodic factors, with quantitative dependence on dimension, step, rationality, and equidistribution parameters. | Lie group/filtration, Mal’cev coordinates/rationality, polynomial sequences, horizontal characters, quantitative character criterion and factorization proof. Use the one-parameter theorem actually needed here. The 2014 erratum rejects the general multiparameter Thm. 8.6 as originally proved; only the corrected equal-sides case is supported, and Thm. 1.19 is unaffected. |
| `green-tao-ziegler-gowers-inverse-theorem` → `green-tao-ziegler-gowers-inverse-theorem-examples` | For each fixed (s\ge3), a 1-bounded (f:[N]\to\mathbb C) with (\|f\|_{U^{s+1}[N]}\ge\delta) correlates by (c(s,\delta)>0) with a bounded-complexity (s)-step nilsequence (GTZ 2012 Thm. 1.3; lower steps handled by their earlier results). | Interval norm normalized using a cyclic ambient group; filtered nilmanifolds and complexity; corrected nilsequence linearisation; quantitative Leibman. The 2024 erratum states the original Prop. 8.3 is incorrect and false as stated; use replacement Prop. 3.1 (sufficient for Prop. 7.3) and corrected taut-filtration hypotheses. Do not preserve the original Prop. 8.3 as a claim. |
| `mobius-nilsequence-orthogonality` → `mobius-nilsequence-orthogonality-examples` | Green–Tao 2012 Thm. 1.1: for a fixed filtered nilmanifold with a (Q)-rational adapted Mal’cev basis, fixed degree/complexity polynomial sequence (g), Lipschitz (F), and every (A>0), the normalized Möbius correlation is (O_{m,d,A}(Q^{O_{m,d,A}(1)}(1+\|F\|_{\mathrm{Lip}})(\log N)^{-A})). | Orbit factorization, Type I/II decomposition and cancellation, progression Möbius sums/degree-one Dirichlet (L)-estimates, and the ineffectivity from possible Siegel zeros. Platt’s finite bounded-(q) verification is not an input to this all-modulus asymptotic theorem. |
| `green-tao-linear-equations-in-primes` → `green-tao-linear-equations-in-primes-examples` | Green–Tao 2010 Thm. 1.1, initially conditional on GI(s), MN(s): for fixed finite-complexity affine-linear forms system with no affinely related pair, the prime-weight count has generalized Hardy–Littlewood asymptotic with archimedean factor and local factors (\prod_p\beta_p(\Psi)). The corrected GTZ inverse theorem and Möbius–nilsequence theorem provide the inputs for the finite-complexity conclusion. | Exact complexity and nondegeneracy, convex-body/counting normalization, local factors/singular product, enveloping sieve, W-trick and Gowers reduction, inverse theorem and Möbius orthogonality. This does not prove twin primes, binary Goldbach or any infinite-complexity system. |
| `deligne-trace-quasi-orthogonality` → `deligne-trace-quasi-orthogonality-examples` | Fouvry–Kowalski–Michel 2015 Thm. 4.1: for a prime p and a prime ell distinct from p, geometrically irreducible pointwise weight-zero middle-extension sheaves F1,F2 on P1 over Fp, distinct geometric isomorphism classes have correlation (\left|\sum_{x\in\mathbb F_p}t_{F_1}(x)\overline{t_{F_2}(x)}\right|\le3c(F_1)^2c(F_2)^2\sqrt p). If geometrically isomorphic, (t_{F_1}=\alpha t_{F_2}), (|\alpha|=1), and subtracting (\alpha p) gives the same error bound. Definition 2.5 is (c(F)=\operatorname{rank}(F)+|\operatorname{Sing}(F)|+\sum_x\operatorname{Swan}_x(F)). | Requires the ant_r4 exact lisse/constructible sheaf, Frobenius, trace formula, compact-support cohomology, (H_c^0) vanishing, (H_c^2) geometric-invariant/main-term criterion, GOS Euler characteristic, tensor conductor bound and Deligne weights. The current fragment names ant_r4’s planned interfaces; they are not yet local proof suppliers. Kloosterman source examples include rank (n), weight zero, conductor (n+3), and normalized (\mathrm{Kl}_n) absolute value at most (n). |
| `helf-ternary-goldbach-theorem` → `helf-ternary-goldbach-theorem-examples` | Helfgott 2014 main theorem: every odd (n>5) is a sum of three primes. This is the composition of the analytic range (n\ge10^{27}), smoothed major/minor estimates, and a finite remainder check. Binary Goldbach is a separate open-problem item on the A page and is never a dependency. | Exact source-bounded contracts and missing computation data are detailed below. In particular, the major arcs depend on Platt’s finite Dirichlet-(L) verification plus an explicit formula; they do not depend on Siegel–Walfisz, Bombieri–Vinogradov or a fixed-(q) PNT-AP supplier. |

## Quantitative nilsequence and circle-method source clauses

The exact Green–Tao quantitative Leibman alternatives are stated in the pair
inventory and anchored in Green–Tao 2012, Thm. 1.16, p. 473. Its character
alternative is a one-step difference bound:
\[
|\eta|\ll_{m,d}\delta^{-O_{m,d}(1)},\qquad
\|\eta\circ g(n)-\eta\circ g(n-1)\|_{\mathbb R/\mathbb Z}
\ll_{m,d}\delta^{-O_{m,d}(1)}/N.
\]
The hypotheses include the \(1/\delta\)-rational adapted Mal’cev basis; the
meaning of the metric, rationality, horizontal character norm, and
\(\delta\)-equidistribution must be supplied, not left implicit. Thm. 1.19,
pp. 474–475, has a polynomial-in-\(M_0\) bound on \(M\), an
\((M,N)\)-smooth factor, a \(1/M^A\)-totally-equidistributed factor, and an
\(M\)-rational periodic factor of period at most \(M\).

For the inverse theorem, use the precise GI(s) statement recalled as
Conjecture 1.2 and proved as Thm. 1.3 in Green–Tao–Ziegler 2012: for
\(s\ge3\), \(0<\delta\le1\), there is a finite collection of \(s\)-step
nilmanifolds with metrics and constants \(C(s,\delta),c(s,\delta)>0\) such
that every \(f:[N]\to\mathbb C\), \(|f|\le1\), with
\(\|f\|_{U^{s+1}[N]}\ge\delta\) has some member \(G/\Gamma\), \(g\in G\),
starting point \(x\in G/\Gamma\), and \(F:G/\Gamma\to\mathbb C\), \(|F|\le1\),
\(\operatorname{Lip}(F)\le C(s,\delta)\), with
\[
\left|\mathbb E_{n\in[N]} f(n)F(g^n x)\right|\ge c(s,\delta).
\]
The bounded-complexity/polynomial nilsequence restatement may be used only
after its equivalence to this exact theorem is supplied. The 2024 erratum
remains binding: the original Proposition 8.3 is invalid as stated; replace
it with Proposition 3.1 in the corrected proof and impose the corrected
taut-filtration hypotheses.

For Waring’s problem, \(\widetilde G(k)\) denotes the least number threshold
in the source’s asymptotic formula for representations as sums of positive
\(k\)-th powers. Wooley 2012 Thm. 1.4 proves
\(\widetilde G(k)\le2k^2+2k-3\) for every \(k\ge2\), by combining his
efficient-congruencing mean-value bound with the major/minor arc
asymptotic. The planned Waring threshold item should preserve this
source-qualified threshold and its exact singular-series and singular-integral
hypotheses.

## Helfgott source contracts and computation boundary

The `helf-ternary-goldbach-theorem` inventory is split into the source's
actual layers. Helfgott, *Major arcs for Goldbach’s problem*, arXiv:1305.2897,
Thm. 1.4, for
\[
\sum_{n\ge1}\Lambda(n)\chi(n)e(\delta n/x)\eta(n/x)
=\mathbf 1_{q=1}\widehat\eta(-\delta)x+E x,
\]
has smoothing
\(\eta(t)=h_{200}(t)t e^{-t^2/2}\), \(x\ge10^{12}\), primitive
characters with odd \(q\le150{,}000\) or even \(q\le300{,}000\), and
\(|\delta|\le600{,}000\gcd(q,2)/q\). Its stated error is
\[
 |E|\le 6.18\cdot10^{-12}/\sqrt q+1.14\cdot10^{-10}/q
 +x^{-1/2}(499100/\sqrt q+52),
\]
and for \(q=1\), \(|E|\le3.34\cdot10^{-11}+251100/\sqrt x\).
The proof is
the explicit formula (1.9), its zero terms and Mellin transform tail estimates,
then §4.6’s finite Platt verification. The explicit-formula lemma has been
made a distinct planned item so that the chain is visible.

Platt 2016 Thm. 7.1, read by r1 in full §§3–7, verifies primitive characters
for \(q\le400{,}000\): for even \(q\),
\(T_q=\max(10^8/q,75\cdot10^6/q+200)\); for odd \(q\),
\(T_q=\max(10^8/q,37.5\cdot10^6/q+200)\). Helfgott’s q-ranges lie inside
these bounds; for odd \(q\le300{,}000\), \(10^8/q\) dominates the second
term. This is a finite unconditional verification statement, not an unproved
GRH premise. However, neither the Platt replayable machine certificate nor
Helfgott’s below-threshold prime-gap/exhaustive certificate is currently local
in this track. The analytic range can be planned as a cited source-bounded
statement with explicit proof obligations, but the all-odd theorem is not
proof-closed until both computation inputs and their certificate soundness
arguments are present. R1’s zero-count/certificate A pages are planned inputs,
not currently completed local suppliers.

Helfgott, *Minor arcs for Goldbach’s problem*, arXiv:1205.5252v4, Main
Theorem, pp. 2–3, is specifically for
\(S_\eta(\alpha,x)=\sum_n\Lambda(n)e(\alpha n)\eta(n/x)\), with
\(\eta(t)=4\max(\log2-|\log(2t)|,0)\). Assume \(x\ge x_0=2.16\cdot10^{20}\),
\(Q=3x^{2/3}/4\), \(2\alpha=a/q+\delta/x\), \((a,q)=1\), \(q\le Q\), and
\(|\delta/x|\le1/(qQ)\). Put \(\delta_0=\max(2,|\delta|/4)\) and
\[
R_{x,t}=0.27125\log\left(1+\frac{\log(4t)}
 {2\log(9x^{1/3}/(2.004t))}\right)+0.41415,
\]
\[
L_{x,\delta,q}=\min\left(
\frac{\log(\delta^{7/4}q^{13/4})+80/9}{\varphi(q)/q},
\frac56\log x+\frac{50}{9}\right)
+\frac{\log q}{(80/9)\delta^{16/9}+111/5}.
\]
If \(q\le x^{1/3}/6\), then
\[
|S_\eta(\alpha,x)|\le
\frac{R_{x,\delta_0q}\log(\delta_0q)+0.5}{\sqrt{\delta_0\varphi(q)}}x
+\frac{2.5x}{\sqrt{\delta_0q}}+
\frac{2x}{\delta_0q}L_{x,\delta_0,q}+3.2x^{5/6}.
\]
For \(q>x^{1/3}/6\), the bound is
\(0.2727x^{5/6}(\log x)^{3/2}+1218x^{2/3}\log x\).
The paper’s type-I/type-II, large-sieve and numerical estimates are not all
reconstructed as local suppliers yet. The prime-sum identity, continuous
circle orthogonality, source smoothing and finite verification below
\(10^{27}\) also need local proofs/certificates.

The binary open problem item `op-strong-goldbach-conjecture` is formulated as
“every even integer greater than 2 is a sum of two primes,” with a dated
status citation reviewed 2026-10-23. It has no consumers and no dependencies.
The B-page status example has an empty logical dependency list; no example or
theorem is allowed to depend on an `op-` item.

## Existing local interfaces and ownership edges

The current local `finite-fourier-analysis-and-the-fast-fourier-transform`
page supplies unitary DFT, finite cyclic character orthogonality, inversion,
Parseval/Plancherel, convolution and the scaled convolution identity. It does
not supply continuous torus orthogonality or circle-method integration. The
local oscillatory integral van der Corput estimate and one-point stationary
phase expansion are continuous-integral claims, not discrete exponential-sum
tests. The continued-fraction supplier is not the chosen denominator-range
Dirichlet lemma. `thm-divisor-counting-summatory-estimate` is not the fixed-
order subpower bound on \(d_r(n)\). `thm-prime-number-theorem-arithmetic-
progressions` is fixed-modulus and does not imply Siegel–Walfisz or
Bombieri–Vinogradov. Existing additive-combinatorics suppliers such as
Cauchy–Davenport do not supply energy/Gowers/transference proofs.

The fixed-dependency edges are deliberately narrow:

* Green–Tao 2008 APs require the relative Szemerédi and W-tricked
  pseudorandom-majorant A pages; the latter requires r2’s
  `thm-siegel-walfisz-prime-distribution` because the source uses slowly
  growing \(W(N)\). There is no Bombieri–Vinogradov edge.
* Green–Tao–Ziegler requires the actual finite-cyclic Gowers-norm supplier page
  `generalized-von-neumann-theorem` and quantitative Leibman factorization.
  The former page defines \(U^d\), positivity/Cauchy–Schwarz and monotonicity;
  interval \(U^{s+1}[N]\) is then defined on the inverse-theorem A page.
* Helfgott major arcs require r1’s finite Platt-verification A page. That page
  depends on r1’s generic degree-one zero-certificate A page; both remain
  planned and data-gated. No r2 prime-distribution page is a Helfgott edge.
* Trace quasi-orthogonality requires ant_r4’s constructible/lisse, compact-
  support trace formula, Swan/GOS conductor, and Deligne weights A pages. The
  requested exact proof must handle (H_c^0), the (H_c^2) invariant/main
  term, and the tensor conductor before the quoted (H_c^1) bound follows.

## Coverage status and defer boundaries

The attached [`r3-sources/source-review.md`](r3-sources/source-review.md)
records each local full-text snapshot, URL/DOI, hash, exact read extent, and
heading/result disposition. It includes full reads of the short Harvard
handouts, the selected relevant sections of Assing and the primary
Goldbach/VMVT/Green–Tao papers, the full FKM survey §§2–4, the full 2024 GTZ
erratum, and the listed theorem/proof subsections. “Full text present” does
not mean every long proof was reconstructed. Coverage and gaps are explicit:

* The arithmetic-combinatorics/transference branch is represented by additive
  energy, Gowers norms, dense finite Szemerédi, relative Szemerédi,
  W-tricked primes, prime APs, finite-complexity prime systems, and the
  Gowers inverse/Möbius–nilsequence chain. Gowers 2001’s entire 129-page text
  was retrieved and its section/result map checked; this pass read Thm. 1.2,
  §2 and the start of §3 closely, not the full proof in §§5–18. Its
  Freiman/approximate-homomorphism and density-increment suppliers require a
  separate full local proof audit. GT 2012’s nilmanifold proof and GTZ’s long
  nilcharacter proof were not reconstructed line by line. The 2014
  quantitative-orbit erratum and 2024 inverse-theorem erratum are in the
  source chain; their stated corrections bind the planned claims.
* The finite-field trace/Deligne branch is included as a required pair, not
  omitted because its prerequisites are missing. FKM Thm. 4.1 is the exact
  contract; Deligne Weil II Thm. 3.3.1 was read in full statement/context, but
  the extensive étale proof was not independently reconstructed. ant_r4 owns
  the planned prerequisites; until those interfaces and proof bodies exist,
  this remains an explicit unresolved proof chain. FKM §5 automorphic and
  prime/Möbius applications are outside this bounded pair; §5 Thms. 5.1–5.4
  need trace monodromy, automorphic formulae and bilinear estimates not in the
  current chain.
* Kowalski–Soundararajan’s squarefree-modulus polynomial exponential-sum
  moments were read as a later branch and deliberately not included as a
  theorem pair: twisted multiplicativity, sheaf monodromy and bilinear
  suppliers are missing. Do not claim this as exhaustive coverage of all
  exponential-sum frontiers.
* The binary Goldbach statement is open and separately recorded. No claim is
  made for it from ternary Goldbach or finite checks.
* This report does not cover qualitative Weyl criterion, metric Diophantine
  approximation or qualitative uniform distribution, which belong to r5.
  Finite DFT/character orthogonality/Gauss sums already present locally are
  reused rather than duplicated.

The overall inventory is finite and source-bounded. It is not a claim that all
2026 research frontiers in analytic number theory have been found, nor that the
planned items have already passed local proof review.
