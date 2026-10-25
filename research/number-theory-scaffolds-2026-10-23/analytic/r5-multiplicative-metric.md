# Analytic number theory R5: multiplicative functions, metric theory, and rational-point interfaces

**Research cut-off:** 2026-10-23. **Scope:** pretentious mean values, short intervals and correlations, additive-function probability, smooth numbers, metric equidistribution and approximation, and analytic rational-point counting. This is a planning dossier: it proposes A supplier pages and B worked-example companions; it does not add library items or claim that a future proof has been written. The canonical row and item fragments are in [`r5-sources/pair-fragment.json`](r5-sources/pair-fragment.json) and [`r5-sources/proposed-inventories.json`](r5-sources/proposed-inventories.json). Full-text source locators, retrieval status and hashes are in [`r5-sources/README.md`](r5-sources/README.md).

## Existing library coverage and exact reuse

| Current supplier | Exact useful interface | Scope boundary / deduplication |
|---|---|---|
| `arithmetic-functions-and-dirichlet-convolution` | `def-arithmetic-function`, `def-multiplicative-arithmetic-function`, `def-completely-multiplicative-arithmetic-function`, `thm-multiplicative-functions-determined-by-prime-powers`, `def-number-theoretic-mobius-function`, `def-liouville-function`, `def-von-mangoldt-function` | Reuse all. In particular, the existing `def-additive-function` is the Cauchy equation (f:mathbb R\to\mathbb R), not additivity of an arithmetic function on coprime factors. The new `def-additive-arithmetic-function` is deliberately separate. |
| `dirichlet-series-and-euler-products` | `def-dirichlet-series`, `thm-multiplicative-dirichlet-series-euler-product`, convergence and Perron prerequisites | Reuse for the Halász proof spine. It has no pretentious-distance or Halász theorem. Dedekind zeta is owned by the separate planned analytic pair `dedekind-zeta-and-split-prime-density`, not defined again in R5. |
| `chebyshev-bounds-and-mertens-theorems` | `def-prime-counting-function`, `thm-first-mertens-theorem-for-primes` and associated prime sums | Reuse for the prime-interval statistic, (\sum_{p\le x}1/p=\log\log x+O(1)), Erdős–Kac normalization, and Euler-product estimates. |
| `perron-inversion-and-the-explicit-formula` | `thm-perron-formula`, `thm-truncated-perron-formula`, explicit-formula entries | Reuse the existing truncated Perron supplier where the Halász proof calls for it; do not create another Perron result. |
| `dirichlet-characters-l-functions-and-primes-in-progressions`, `primitive-dirichlet-l-functions-and-functional-equations`, `classical-zero-free-region-and-the-prime-number-theorem` | Character definitions and the fixed-modulus progression PNT `thm-prime-number-theorem-arithmetic-progressions` | Reuse only at fixed modulus or under the exact new small-modulus hypotheses. The existing progression theorem does not supply growing-modulus uniformity. Menon’s (q\le(\log X)^B) theorem remains its own sourced statement. |
| `regular-continued-fractions-and-diophantine-approximation` | Continued-fraction definitions, algorithm, convergent errors and best-approximation results | Reuse the continued-fraction algorithm as an algorithm. This page does not contain the exact all-real, bounded-denominator Dirichlet theorem required here; R5 adds that theorem as a property with a pigeonhole proof obligation, not as a second algorithm. |
| `the-ergodic-theorems-of-von-neumann-and-birkhoff` | `def-equidistribution-mod-one`, `thm-weyl-equidistribution-for-irrational-rotations` | Reuse the one-dimensional interval definition and rotation theorem only in their current scope. Add a (k)-torus definition and Weyl character criterion; do not say that the current uniquely-ergodic proof is the Fourier criterion. |
| Probability pages `finite-probability-spaces-and-random-variables`, `independence-borel-cantelli-and-zero-one-laws`, `central-limit-theorems`, `modes-of-convergence-for-random-variables`, `weak-convergence-tightness-and-representation`, and `characteristic-functions-inversion-and-continuity` | In particular, uniform finite models, first Borel–Cantelli, Lindeberg–Feller, `def-convergence-in-distribution-of-random-elements`, and `def-standard-normal-and-normal-laws` | Reuse. The probabilistic Erdős–Kac proof still needs its arithmetic finite-prime valuation approximation and moment-comparison steps. No method-of-moments theorem specific to that proof was found. |
| `conjugate-families-and-posterior-prediction` | `def-poisson-law` | Reuse the existing Poisson law definition for the prime-interval moment question; R5 defines the arithmetic statistic, not a second Poisson law. |
| `minkowski-theory-and-number-field-class-groups` | `def-full-euclidean-lattice-and-covolume`, `lem-full-lattice-fundamental-domain-and-bounded-points`, Blichfeldt, Minkowski convex-body and successive-minima results, ideal lattices and class-group finiteness | Reuse these exact results. No current item gives the exact anisotropic coordinate-box count used in Heath-Brown’s determinant argument; R5 makes that a local lemma and proof obligation instead of silently treating Minkowski’s theorem as a lattice-point-count theorem. |
| `projective-algebraic-sets-projective-morphisms-and-cones` | `def-projective-space-points`, homogeneous forms, `def-degree-projective-hypersurface` | Exact projective/hypersurface prerequisites for the determinant pair. |
| `homogeneous-resultants-and-projective-intersection-length` and `plane-curves-local-intersection-multiplicity-and-bezout` | `cor-projective-plane-bezout-length-form`, plane-curve and degree items, `thm-bezout-plane-curves`, `lem-bezout-global-length-degree` | Reuse Bézout only when the projective intersection is proper/no component is shared. These items do not prove Heath-Brown’s auxiliary-form theorem or its elimination lemma. |
| Planned R3 `weil-heights-and-northcott-finiteness` | `def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field` and `def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field` | Schanuel counts the multiplicative height (H_{\rm abs}); the logarithmic item is (h_{\rm abs}=\log H_{\rm abs}). R5 owns the count, not either height definition. |
| Existing discrepancy open item | `op-optimal-star-discrepancy-order-dimension-at-least-three` | Reuse its existing scope. R5 proposes no duplicate discrepancy open item. |

No current supplier was found for pretentious distance/Halász, arithmetic-function short-interval mean-square bounds, the stated Chowla correlation averages, additive arithmetic-function definitions and limit laws, Dickman counting, a (k)-torus Weyl criterion, Khintchine/Duffin–Schaeffer in this library, Schanuel’s projective height count, or Heath-Brown’s determinant-method cover. The R5 inventory supplies these finite contracts.

## Planned A/B pairs and item contracts

The A page owns every new definition, theorem, corollary and open problem. Each B page is an examples-only companion with worked computations; it does not supply a theorem or an algorithm. The exact IDs and ordered dependencies are in the JSON fragment. The proof obligations below describe the local proof spine needed before any item could be authored.

### 1. Pretentious distance and Halász mean values

**A:** `pretentious-distance-and-multiplicative-mean-values`. **B:** `halasz-mean-value-theorem-examples`.

Define for a multiplicative (f:\mathbb N\to\overline{\mathbb D}), (x\ge3),
\[
D(f,n^{it};x)^2=\sum_{p\le x}\frac{1-\Re(f(p)p^{-it})}{p},\qquad
M(f;x,T)=\min_{|t|\le T}D(f,n^{it};x)^2\quad(T\ge1).
\]
The summands are nonnegative since (|f(p)|\le1). State the triangle inequality only with its exact 1-bounded multiplicative-function hypotheses. The A page owns `thm-halasz-mean-value-bound`: for (f) multiplicative, (|f(n)|\le1), (x\ge3), (T\ge1),
\[
\frac1x\left|\sum_{n\le x}f(n)\right|
\ll (1+M(f;x,T))e^{-M(f;x,T)}+T^{-1}+\frac{\log\log x}{\log x}.
\]
The immediate cancellation corollary requires both a growing minimizing distance and (T\to\infty); no unqualified “nonpretentious means cancellation” statement is proposed. Source: Granville–Soundararajan manuscript §4.1 and §6.1–§6.4, with exact ranges in the source register. Local proof: prime Euler product and Mertens estimate, Perron/truncated Perron, comparison of the Dirichlet series near 1 to the minimizing (n^{it}), and the stated error terms. B examples compare (lambda) and (n^{it}), then choose (T) in a sample bound; these are applications of A items.

### 2. Multiplicative functions on short intervals

**A:** `multiplicative-functions-in-short-intervals`. **B:** `multiplicative-functions-in-short-intervals-examples`.

Define a short-interval sum and its mean-square in the starting point. The A page states two distinct regimes:

- Matomäki–Radziwiłł Theorem 1: for multiplicative (f:\mathbb N\to[-1,1]), (2\le h\le X), (\delta>0), absolute (C,C'>1), all but at most
  \[
  CX\left(\frac{(\log h)^{1/3}}{\delta^2 h^{\delta/25}}+\frac1{\delta^2(\log X)^{1/50}}\right)
  \]
  integer starts (x\in[X,2X]) satisfy the published comparison between the (h)-interval average and the long average, with error (\delta+C'\log\log h/\log h). Retain the article’s endpoint/normalization conventions when authoring the item. The theorem is not a bound for every interval.
- Matomäki–Radziwiłł Theorem 2: the bilinear product-interval average is controlled in every interval in the source’s range (10\le h\le x), with the source’s ((\log\log h)/\log h+ (\log x)^{-1/100}) error.
- Menon Theorems 1.1–1.4: mean-square over (x\in[X,2X]), not pointwise (x). Theorem 1.1 assumes a Dirichlet character of modulus (q\le(\log X)^B) and (f=\chi\lambda), and gives
  \[
  \frac1X\int_X^{2X}\left|\frac1h\sum_{x\le n\le x+h}\chi(n)\lambda(n)\right|^2dx
  \ll_B\frac{(\log\log h)^2}{(\log h)^2}+\frac{(\log\log X)^4}{(\log X)^2}.
  \]
  Theorem 1.2 assumes support on (X^{1-\delta})-smooth numbers for fixed (0<\delta<1), and gives the main term (e^{-(2-o(1))M(f;X)}) plus ((\log\log h)^2/(\log h)^2+(\log X)^{-2+o(1)}). Theorem 1.3 removes the smooth-support restriction, changes the exponent to (e^{-(1-o(1))M(f;X)}), and has final error ((\log\log h)^2/(\log h)^2+(\log X)^{-1+o(1)}). In both, (o(1)) in the exponential is as (M(f;X)\to\infty). Theorem 1.4 gives
  \[
  \sup_{\alpha\in\mathbb R}\frac1X\int_0^X
  \left|\frac1h\sum_{x\le n\le x+h}\lambda(n)e(\alpha n)\right|dx
  \ll \frac{\log\log h}{\log h}+\frac{(\log\log X)^2}{\log X}.
  \]

Local proof obligations: typical factorization restriction, Dirichlet-polynomial mean values, sieve error, Ramaré decomposition, and the source-specific treatment of large prime factors. Keep arithmetic properties distinct from any computational procedure for evaluating intervals. The short-interval source also proves the fixed-(u), almost-all (x^{1/u})-smooth count corollary. It is an A5 item: A5 requires this A2 supplier and depends on the A2 short-interval theorem, with no B-to-B edge. B examples show the constant function and explain why an “almost all starts” theorem cannot be read pointwise.

### 3. Correlation averages and Chowla

**A:** `multiplicative-correlations-and-chowla`. **B:** `multiplicative-correlations-and-chowla-examples`.

Define fixed-shift, shift-averaged and logarithmically averaged Liouville correlations separately. The A page states:

- Matomäki–Radziwiłł–Tao Theorem 1.1/1.3: for (10\le H\le X), fixed (k\),
  \[
  \sum_{1\le h_2,\ldots,h_k\le H}
  \left|\sum_{n\le X}\lambda(n)\lambda(n+h_2)\cdots\lambda(n+h_k)\right|
  \ll_k H^{k-1}X\left(\frac{\log\log H}{\log H}+\frac1{(\log X)^{1/3000}}\right).
  \]
  This averages the shifts and leaves a precise fixed-shift problem open.
- Tao’s 2016 two-point theorem uses logarithmic averaging in (n); do not remove its logarithmic weight or identify it with natural-density Chowla.
- Menon’s 2026 Theorem 1.5 improves the shift-averaged Liouville bound to its stated (\log\log H/\log H+(\log\log X)^2/\log X) range, via the short-interval exponential-sum theorem.

The fixed-shift open item is (\frac1X\sum_{n\le X}\prod_{j=1}^k\lambda(n+h_j)\to0) for fixed distinct integer shifts and (k\ge2). The 2026 sources establish other averaged and dynamical results but do not remove this fixed-shift obstacle. B examples compare these averaging conventions without promoting an averaged result to a fixed-shift result.

### 4. Additive arithmetic functions and probabilistic number theory

**A:** `probabilistic-number-theory-and-additive-functions`. **B:** `probabilistic-number-theory-and-additive-functions-examples`.

Define arithmetic additivity on coprime factors, strong additivity on prime powers, and the uniform integer model. This avoids the existing Cauchy-additive `def-additive-function`. State the sourced sufficient Erdős–Wintner theorem: if (g) is complex-valued additive and
\[
\sum_{|g(p)|\le1}\frac{g(p)}p,\qquad
\sum_{|g(p)|\le1}\frac{|g(p)|^2}p,\qquad
\sum_{|g(p)|>1}\frac1p
\]
converge, then (g(n)) for uniform (n\le X) converges in law to (\sum_p g(pV_p)), with independent geometric (V_p) satisfying (\Pr(V_p=j)=(1-1/p)p^{-j}). The notes state the converse but refer elsewhere; do not include the converse as proved by this source. State Erdős–Kac for (\omega(n)): ( (\omega(n)-\log\log X)/\sqrt{\log\log X}\Rightarrow N(0,1)). Local proof: finite-prime valuation vectors by CRT, truncated independent Bernoulli model, Mertens normalization, CLT/moment convergence, and a controlled truncation error.

The 2025 Gorodetsky preprint provides a stronger high-moment comparison for (\omega), through (k\le A\log\log x), with the exact saddle parameter and factor (F(e^r)e^{-ra}); it is a source-backed frontier result but is not an A-page item because its proof imports Selberg’s mean-value formula, whose local proof is not in the staged item chain. Keep that source gate explicit. The separate exact prime-interval conjecture below is an A-page open item. B examples compute (\omega,\Omega), and the Erdős–Kac centering/scaling.

### 5. Smooth numbers

**A:** `smooth-numbers-and-dickman-function`. **B:** `smooth-numbers-and-dickman-function-examples`.

Define (P^+(1)=1), (\Psi(x,y)=\#\{n\le x:P^+(n)\le y\}), (u=\log x/\log y), and the continuous Dickman–de Bruijn function (\rho(u)=1) on (0\le u\le1), (u\rho'(u)+\rho(u-1)=0) for (u>1). State the Hildebrand–Tenenbaum uniform theorem: for fixed (\varepsilon>0), (y\ge2), (1\le u\le\exp((\log y)^{3/5-\varepsilon})),
\[
\Psi(x,y)=x\rho(u)\left(1+O\left(\frac{\log(u+1)}{\log y}\right)\right).
\]
The precise uniform range is part of the theorem contract. Local proof uses the complete §2 Dickman development. The A5 page also states the short-interval smooth corollary with its A2 theorem prerequisite. B examples evaluate \(\rho\) on its first intervals and the endpoint \(y=x\); they do not introduce a smooth-number enumeration algorithm.

### 6. Uniform distribution on tori and analytic curves

**A:** `uniform-distribution-on-tori-and-weyl-criterion`. **B:** `uniform-distribution-on-tori-and-weyl-criterion-examples`.

Define (k)-dimensional u.d. modulo one and prove the (\mathbb Z^k) Weyl-character criterion. Define (\delta)-scattered, scattered, and jointly scattered exactly as Bergelson–Moreira Definition 2.13 and their joint definition. State Theorem 1.7 with its alternatives: for nonconstant analytic (f_i:\mathbb R\to\mathbb R) and scattered (a_i:\mathbb N\to\mathbb R), if either the (a_i) are jointly scattered or (1,f_1,\ldots,f_k) are linearly independent over (\mathbb R), then ((a_i(n)f_i(x))_{i=1}^k) is u.d. in (\mathbb T^k) for a.e. (x). Include the equivalent nondegenerate analytic-curve formulation and Theorem 1.10’s polynomial Koksma extension as separate property items. Proof obligations: Borel–Cantelli and Weyl criterion, scattered-sequence estimates, Koksma’s theorem, analytic oscillatory-integral estimate, then the theorem-specific Fourier-frequency argument. B examples test a linear orbit and a scattered power sequence.

### 7. Metric Diophantine approximation

**A:** `metric-diophantine-approximation-and-duffin-schaeffer`. **B:** `metric-diophantine-approximation-and-duffin-schaeffer-examples`.

Add the exact bounded-denominator Dirichlet property: for every real (\alpha) and real (Q\ge1), there are coprime (a,q\in\mathbb Z\times\mathbb N), (1\le q\le Q), with ( |\alpha-a/q|\le1/(qQ)). Its proof is pigeonhole plus reduction; no complexity statement. Define unrestricted and reduced limsup sets separately. State Khintchine’s monotone theorem and the Koukoulopoulos–Maynard Duffin–Schaeffer theorem: for reduced intervals of radius (\psi(q)/q), convergence of (\sum_q\varphi(q)\psi(q)/q) gives measure zero by first Borel–Cantelli and divergence gives full measure, without monotonicity. Include Catlin’s unrestricted-representation criterion (\psi^*(q)=\varphi(q)\sup_{q\mid n}\psi(n)/n), with the 0/full measure test (\sum_q\psi^*(q)). The inhomogeneous counterexample item retains the source’s shift and reduction convention. B examples include an explicit (\sqrt2) denominator calculation and a gauge-sum test.

### 8. Projective height counting over number fields

**A:** `projective-height-counting-over-number-fields`. **B:** `projective-height-counting-over-number-fields-examples`.

This A page requires the planned Dedekind-zeta supplier `dedekind-zeta-and-split-prime-density` / `def-dedekind-zeta-function`, R3 `weil-heights-and-northcott-finiteness` / `def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field`, and the existing field, ideal-lattice, class-group and regulator pages. R3 also supplies the equivalent logarithmic height (h_{\rm abs}=\log H_{\rm abs}); the counting threshold remains multiplicative.

Use Schanuel’s normalization without a second complex-place weight. For (N=[K:\mathbb Q]) and (I=(x_0,\ldots,x_{m-1})\),
\[
H_K([x])=N(I)^{-1}
\prod_{\sigma:K\hookrightarrow\mathbb R}\max_i|\sigma x_i|
\prod_{\tau:K\hookrightarrow\mathbb C\;\mathrm{mod\;conjugation}}\max_i|\tau x_i|^2,
\qquad H_{\rm abs}=H_K^{1/N}.
\]
Here (H_{\rm abs}) is the multiplicative height from the R3 item (and its logarithm is (h_{\rm abs}=\log H_{\rm abs})). For fixed (K), (m\ge2), count (H_K\le B):
\[
N_{K,m}(B)=C_{K,m}B^m+O_{K,m}(B^{m-1/N}),\quad
C_{K,m}=\frac{h_K\kappa_{K,m}}{\zeta_K(m)},
\quad
\kappa_{K,m}=\left(\frac{2^{r_1}(2\pi)^{r_2}}{\sqrt{|D_K|}}\right)^m m^{r_1+r_2-1}\frac{R_K}{w_K}.
\]
For (m=2,N=1), replace the error by (O(B\log B)). Under absolute height the exponent/error become (mN) and (mN-1), with the same exception. The (K=\mathbb Q) corollary on (\mathbf P^d) is (2^dB^{d+1}/\zeta(d+1)+O(B^d)) for (d\ge2), and (2B^2/\zeta(2)+O(B\log B)) for (d=1).

Proof obligations: class-by-class lattice count modulo units, a fundamental unit-logarithm region, Lipschitz lattice-point error, ideal Möbius inversion and the absolutely convergent Dedekind zeta factor. Existing Minkowski/Blichfeldt items help but do not replace the local lattice-count estimate. No enumeration algorithm is claimed. B examples compute the (\mathbb Q) constants and convert relative to absolute exponents for a quadratic field.

### 9. Determinant method and rational-point counting

**A:** `determinant-method-and-rational-point-counting`. **B:** `determinant-method-and-rational-point-counting-examples`.

Use primitive normalized representatives of (\mathbf P^{n-1}(\mathbb Q)), coefficient norm (\|F\|\), anisotropic box sizes (B_i\ge1), (V=\prod_iB_i), and (T=\max\prod_iB_i^{e_i}) over monomials (x^e) occurring in (F). For (F\in\mathbb Z[x_1,\ldots,x_n]) irreducible over (\mathbb Q), the Heath-Brown Theorem 14 interface is: for each (\varepsilon>0), some degree bound (D=D(n,d,\varepsilon)) and at most
\[
k\ll_{d,\varepsilon}
\left(\frac{V^d}{T}\right)^{d^{-(n-1)/(n-2)}}
V^\varepsilon\bigl(\log(2+\|F\|)\bigr)^{2n-3}
\]
integral forms (F_j) of degree at most (D), none divisible by (F), cover every counted rational point by (F=F_j=0). The source prints (\log\|F\|); the inventory uses the harmless (\log(2+\|F\|)\) weak form to handle the bounded coefficient-height edge case, which must be recorded in the local proof. In (n=3), use the coefficient-height alternative (source Theorem 4), the cover, and plane-curve Bézout to obtain the source Theorem 3 bound
\[
N(F;B_1,B_2,B_3)\ll_{d,\varepsilon}T^{-1/d^2}V^{1/d+\varepsilon};
\]
in particular (N(F;B)\ll_{d,\varepsilon}B^{2/d+\varepsilon}). The hypothesis is irreducibility over (\mathbb Q), not absolute irreducibility; the source handles the non-absolutely-irreducible rational-point case separately.

Build obligations: prove the source’s lattice-basis/box lemma, determinant rank drop, elimination/resultant bounds, auxiliary form degree bound, and coefficient-height alternative locally. The plane-curve Bézout edge is used only after properness/no common component is established. Heath-Brown Theorem 14 is an existence/covering property; it is not an executable search algorithm with a complexity bound. B examples calculate (V,T) in a ternary box and apply the curve bound to an explicit conic.

## Current frontier results reviewed but not promoted to suppliers

These full-text results define current boundaries; each retains its source hypotheses and is not a general substitute for an item above.

- **Matomäki–Teräväinen, Linnik-type sign changes (2026 preprint).** They define $R(h;q)$ as the least $N$ such that every reduced class $a\bmod q$ contains squarefree $n_1,n_2\le N$, both congruent to $a$, with $h(n_1)<0<h(n_2)$. For sufficiently small fixed $\varepsilon>0$, $c>0$, sufficiently large $q$, and multiplicative real $h$ with $h(p)\ne0$ for $p\nmid q$, Theorem 1.1 gives $R(h;q)\le q^{2+\varepsilon}$ unless an order-at-most-two character $\chi\bmod q$ has
  \[
  \sum_{\substack{p\le q^{1/3}\\h(p)\chi(p)<0}}\frac1p\le c q^{-\varepsilon/100}.
  \]
  Theorem 1.2 replaces the range by $Q_1\in[B(q),q^\varepsilon]$, gives $R(h;q)\le q^2Q_1$, and moves the sign obstruction to $p\le q^{1/2}$ with threshold $cQ_1^{-1/100}$. This is a sign-change-in-progressions theorem, not fixed-shift Chowla.
- **Menon (2026 preprint).** Theorems 1.1–1.5 give the short-interval and averaged-shift bounds listed in A2/A3, with $L^2$ averaging over starts, fixed logarithmic conductor, smooth-support restrictions, or averages over shifts as specified. No pointwise-in-start or fixed-shift result is inferred.
- **Wang (2026), Tardif (2026), and Renard (2026) preprints.** Wang’s Theorems 1.1–1.3 are dynamical/shift-averaged short-average results. Tardif’s dense-orbit Theorem 1.1 gives a resonance alternative for completely multiplicative circle-valued $f,g$ and a zero lower-log-density consecutive-value event; this is not Chowla cancellation. Renard’s Theorems 1.2–1.3 give Elliott-correlation consequences from truncated pretentious distance under stated lower-density/finitely-generated hypotheses; the paper’s Theorem 5.3 blocks an upper-density replacement. They are recorded as scoped advances, not new generic correlation suppliers.
- **Gorodetsky (2025 preprint).** Theorem 1.1 compares centered $\omega$-moments to Poisson moments for $2\le k\le A\log\log x$, using $r>0$ with $r(e^r-1)=k/\log\log x$ and factor $F(e^r)e^{-ra}$; Theorem 1.2 describes the Gaussian-moment transition and odd correction at $k\le A(\log\log x)^{1/3}$. Its full proof imports Selberg’s mean-value formula, which has no current local supplier; the result is therefore retained as source-backed frontier context rather than a completed item contract.

## Open problem: fixed-shift Chowla cancellation

For each (k\ge2) and fixed pairwise distinct integer shifts (h_1,\ldots,h_k\), determine whether
\[
\frac1X\sum_{n\le X}\lambda(n+h_1)\cdots\lambda(n+h_k)\longrightarrow0.
\]
The fixed shifts are essential. Matomäki–Radziwiłł–Tao (2015) and Menon (2026) prove strong estimates after averaging shifts; Tao’s logarithmic result averages the (n)-variable with weight (1/n). Wang’s full 2026 short-average paper, §1 and Theorems 1.1–1.3, explicitly says fixed-shift (k\ge2) Chowla remains open while proving dynamical/shift-averaged versions. Current source status is thus directly supported by a September 2026 primary preprint, with no inference from abstracts.

## Open problem: Poisson moments for primes in subpolynomial short intervals

For fixed (k\ge2) and (h=h(x)>0) with (h=x^{o(1)}), determine whether the centered (k)th moments of the number of primes in ([t,t+h)), averaged over the source’s uniform (t\le x) convention, satisfy Gorodetsky’s Conjecture 1:
\[
\mathbb E_{t\le x}\!\left(\sum_{t\le p<t+h}1-\int_t^{t+h}\frac{du}{\log u}\right)^k
\sim
\mathbb E_{t\le x}\!\left(\frac{\sum_{t\le p<t+h}\log p-h}{\log x}\right)^k
\sim
\mathbb E\!\left(X(h/\log x)-h/\log x\right)^k,
\]
where (X(h/\log x)\) is Poisson with mean (h/\log x). Source: Ofir Gorodetsky, arXiv:2501.00351v1, §1.2, Conjecture 1 (PDF p. 3); the full 15-page preprint was read. The official arXiv record on 2026-10-23 still showed v1 with no journal reference. Gallagher’s earlier Poisson theorem assumes Hardy–Littlewood tuples; the small-(h) range is accessible by a sieve in the source’s discussion. No unconditional proof of the displayed full range is claimed.

## Open problem: multidimensional analytic Koksma extension

In Theorem 1.10 of Bergelson–Moreira (2026), keep (g:\mathbb R\to(1,\infty)) nonconstant analytic, (b(n)\to\infty) scattered, (a_i\) scattered, and the alternatives “the (a_i) are jointly scattered” or “(1,p_1,\ldots,p_k) are linearly independent,” but replace the nonconstant polynomials (p_i) by arbitrary nonconstant analytic functions (f_i). Does
\[
\bigl(g(x)^{b(n)},a_1(n)f_1(x),\ldots,a_k(n)f_k(x)\bigr)_{n\ge1}
\]
be u.d. in (\mathbb T^{k+1}) for almost every (x)? This is exactly Conjecture 1.11 in the peer-reviewed 2026 source, §1, PDF p. 5. Their Corollary 1.12 proves a one-coordinate analytic special case; the report does not promote that special case to all (k).

## Open problem: inhomogeneous Duffin–Schaeffer for non-Liouville shifts

For a fixed irrational non-Liouville shift (\gamma), and arbitrary (\psi:\mathbb N\to[0,\infty)) with
\[
\sum_{q\ge1}\frac{\varphi(q)\psi(q)}q=\infty,
\]
determine whether the inhomogeneous reduced limsup set
\[
W'(\psi,\gamma)=\left\{\alpha\in[0,1):
\left|\alpha-\frac{a+\gamma}{q}\right|\le\frac{\psi(q)}q
\text{ for infinitely many }(a,q),\ (a,q)=1\right\}
\]
has full measure. This is deliberately restricted: the naive all-shifts statement is false. Hauke-Treuer–Maynard–Pollington, full arXiv:2609.30921v1, Theorem 1 and Remarks 1–2 (PDF pp. 2–3), construct counterexamples for every nonzero rational shift and for shifts with ( |\gamma-r/s|<\exp(-s^{12})\) infinitely often, and explicitly say arbitrary, especially non-Liouville, shift behavior remains widely open. They also note a different “shift-reduced” rational formulation with a zero-full theorem; it is not the ordinary coprimality condition above.

## Open problem: Manin–Peyre (owned by R3)

Do not duplicate the AG item `op-manin-peyre-conjecture`, already owned by the R3 A page `arithmetic-geometry-open-problems-and-frontiers`; it is not a dependency of any theorem here. Its exact prediction is for a smooth Fano variety (X/\mathbb Q) with Zariski-dense rational points and anticanonical height (H): for an appropriate dense open (U\subset X),
\[
N_{X,U,H}(B)\sim c_{\rm Peyre}B(\log B)^{\operatorname{rk}\operatorname{Pic}(X)-1},
\]
with the thin-set correction needed because the original form is not always correct. Status evidence reviewed: Blomer–Brüdern–Derenthal–Gagliardi, *Forum of Mathematics, Sigma* 12 (2024), e11, §1.1, printed p. 3, and §1.3–1.5, pp. 4–7; their paper proves specified smooth spherical Fano families with its own Cox-ring/torsor/circle-method hypotheses and reports only a short list of low-dimensional unstructured cases at that source’s date. This is not a comprehensive 2026 census. The determinant-method pair and Schanuel’s (\mathbf P^d) count are analytic interfaces, not a proof of the general Fano asymptotic or Peyre’s constant. R3’s exact source gate also includes Proposition 4.11 and Theorem 9.2 of the same article.

## Rational-point, lattice, and geometry boundary

The finite rational-point scope is deliberately split into two A pairs:

1. `projective-height-counting-over-number-fields` owns Schanuel’s fixed-(K), all-(m\ge2) asymptotic with the exact relative-height normalization, constant, error and exceptional case. Its required upstream height item is the R3 absolute multiplicative height on projective space, with the logarithmic height as an equivalent derived convention. A (\mathbb Q)-only contract would lose the general theorem and is not used.
2. `determinant-method-and-rational-point-counting` owns Heath-Brown’s auxiliary-form cover and the anisotropic plane-curve bound. Its A prerequisites include current projective hypersurface, resultant, Bézout, Minkowski, and planned R3 height interfaces. Existing resultant/Bézout pages cover elimination or intersection only under their own hypotheses; the determinant proof must still establish nondivisibility/proper intersection and prove its local lattice estimate.

No Manin/Peyre theorem is inferred from either count. Current AG carriers have projective spaces, hypersurface degree, a binary resultant, plane-curve Bézout and local intersection multiplicities, but no Fano/anticanonical height/Picard-rank/Tamagawa-measure interface. The algebraic R3 open-frontier page [`arithmetic-geometry-open-problems-and-frontiers`](../algebraic/arithmetic-geometry-open-problems-and-frontiers.md) owns the general Manin–Peyre open item and its missing interface/source gate. Heath-Brown’s Theorem 14 is not a Manin asymptotic and its 2002 open exponent question is not recast here as a current open problem without a new status source.

## Algorithms versus properties

No new algorithm item is proposed in this R5 fragment. The all-denominator Dirichlet approximation statement is a theorem proved by pigeonhole and reduction, without a complexity claim; the existing continued-fraction algorithm remains a distinct algorithmic supplier. Halász, short-interval estimates, theorems about smooth counts, Weyl criteria, metric approximation laws, Schanuel’s count and the determinant cover are properties/theorems. In particular, the determinant theorem gives existence of bounded-degree covering forms but not a finite implemented search procedure or a running-time bound. B pages contain only worked examples, never algorithm suppliers or logical theorem dependencies.

## Added breadth: Hausdorff metric approximation and homogeneous dynamics

These are three new reciprocal A/B pairs appended after the existing nine. Each A page owns all definitions, theorems, and open problems; every B remains examples-only. The exact page prerequisites and ordered item dependencies are in the JSON fragments. The new dynamic results reuse the current Lie homogeneous-space and Euclidean-lattice definitions. No current supplier has the Diophantine lattice-flow correspondence, Khintchine–Groshev laws, Jarník–Besicovitch laws, or nondegenerate-manifold theorem.

### 10. Hausdorff metric Diophantine approximation

**A:** hausdorff-metric-diophantine-approximation. **B:** hausdorff-metric-diophantine-approximation-examples.

The A page adds dimension-function Hausdorff gauges because the current Hausdorff supplier covers power gauges. For balls \(B_i=B(x_i,r_i)\subset\mathbb R^k\), write \(B_i^f=B(x_i,f(r_i)^{1/k})\). The Euclidean mass-transference theorem assumes \(r_i\to0\), \(r^{-k}f(r)\) monotone, and \(\mathcal H^k(B\cap\limsup_i B_i^f)=\mathcal H^k(B)\) for every ball \(B\); its conclusion is \(\mathcal H^f(B\cap\limsup_iB_i)=\mathcal H^f(B)\). The locally regular metric-space version retains all its source hypotheses: \(X\) locally compact, \(g\) a doubling dimension function with \(H^g(B)\asymp g(r(B))\) for small balls, \(f/g\) monotone, and the full \(H^g\)-measure hypothesis for transformed balls \(B_i^f=B(x_i,g^{-1}f(r_i))\).

The system-of-linear-forms MTP is a separate A theorem. Let \(R_j\subset\mathbb R^k\) be affine \(l\)-planes, let \(m=k-l\), let \(\Upsilon_j\to0\), and let \(\Lambda(\Upsilon)=\{x:\operatorname{dist}(x,R_j)<\Upsilon_j\text{ for infinitely many }j\}\). If \(f,g\) are dimension functions, \(g(r)=r^{-l}f(r)\), \(r^{-k}f(r)\) is monotone, and every ball \(B\subset\Omega\) has full \(k\)-dimensional measure in \(\Lambda(g(\Upsilon)^{1/m})\), then every such \(B\) has full \(H^f\)-measure in \(\Lambda(\Upsilon)\). Allen–Beresnevich remove the earlier slice-intersection and uniform-diameter restrictions; do not add them back.

For \(X\in[0,1]^{n\times m}\), \(q\in\mathbb Z^n\setminus\{0\}\), \(p\in\mathbb Z^m\), define \(W_{n,m}(\psi)=\{X:\|qX+p\|_\infty<\psi(\|q\|_\infty)\text{ for infinitely many }(p,q)\}\). Put \(g(r)=r^{-m(n-1)}f(r)\). For \(nm>1\) and monotone \(r^{-nm}f(r)\), the Hausdorff K–G law is
\[
\mathcal H^f(W_{n,m}(\psi))=
\begin{cases}
0,&\sum_{r\ge1}r^{n+m-1}g(\psi(r)/r)<\infty,\\
\mathcal H^f([0,1]^{nm}),&\sum_{r\ge1}r^{n+m-1}g(\psi(r)/r)=\infty.
\end{cases}
\]
For \(\psi(r)=r^{-\tau}\), this gives \(\dim_H W_{n,m}(\tau)=m(n-1)+(n+m)/(\tau+1)\) when \(\tau\ge n/m\); for \(\tau<n/m\), the dimension is the ambient \(nm\). The \((n,m)=(1,1)\) case is not covered by the nonmonotone K–G theorem. Keep the line Jarník–Besicovitch formula \(\dim_H W(\tau)=2/(\tau+1)\), \(\tau\ge1\), the monotone Khintchine–Jarník law, and the reduced Duffin–Schaeffer Hausdorff law separate.

The A inventory includes the sourced extensions with their full restrictions: (i) the reduced-fraction Hausdorff Duffin–Schaeffer zero/full law, now unconditional after Koukoulopoulos–Maynard; (ii) the homogeneous Hausdorff K–G law for partitioned primitive tuples, each block having at least \(m+1\) coordinates, plus the source monotonicity condition on \(r^{n+m-1}g(\psi(r)/r)\); (iii) the fixed-target inhomogeneous Hausdorff K–G law, requiring decreasing \(\psi\) when \(n=1\) or \(n=2\); and (iv) the general \((p,q)\)-dependent transfer with \(y\in[0,1]^m\), nonzero distortion matrix \(\Phi\), \(\sup_p\Psi(p,q)/\|q\|\to0\), and \(\Theta(p,q)=\|q\|g(\Psi(p,q)/\|q\|)^{1/m}\). The last is conditional on full Lebesgue measure at \(\Theta\); it is not itself a new Lebesgue theorem.

**Build obligations.** Prove the gauge-cover and Euclidean comparison details; for plane MTP, build the finite disjoint covering families, nested Cantor levels, measure construction, and Frostman estimate. The Hausdorff K–G proof combines the corresponding Lebesgue law with plane MTP and proves the convergence cover separately. The one-dimensional formula uses Dirichlet approximation and mass transfer. For reduced fractions, retain the coprimality condition. B examples calculate the line and matrix exponents and evaluate the proposed Cantor-set candidate; they do not provide the MTP theorem.

The open item op-jarnik-besicovitch-dimension-on-middle-third-cantor-set asks for \(\dim_H(W(\tau)\cap K)\) for the middle-third Cantor set \(K\), \(\tau\ge1\). The 2026 survey calls this unsolved and records the more likely candidate
\[
\dim_H(W(\tau)\cap K)=\max\!\left\{\frac{2}{\tau+1}-(1-d_K),\frac{d_K}{\tau+1}\right\},\qquad d_K=\frac{\log 2}{\log 3}.
\]
The earlier proposed \(2d_K/(\tau+1)\) formula is historical context, not the current conjectural contract.

### 11. Khintchine–Groshev systems of linear forms

**A:** khintchine-groshev-systems-of-linear-forms-and-approximation-types. **B:** khintchine-groshev-systems-of-linear-forms-and-approximation-types-examples.

Fix the orientation: \(X\in[0,1]^{n\times m}\), \(q\in\mathbb Z^n\setminus\{0\}\) is a row, \(p\in\mathbb Z^m\), \(\|qX+p\|_\infty\) is the maximum over the \(m\) linear forms, and \(\|q\|_\infty=\max_i|q_i|\). “Simultaneous” means \(n=1\), so one denominator controls \(m\) coordinates; “dual” means \(m=1\), so one form is evaluated on \(n\) variables. The A page defines homogeneous, fixed-target inhomogeneous, and tuple-primitive limsup sets separately.

For \(\psi:\mathbb N\to[0,\infty)\), the homogeneous Khintchine–Groshev law is
\[
|W_{n,m}(\psi)|=0\text{ if }\sum_{r\ge1}r^{n-1}\psi(r)^m<\infty,\qquad
|W_{n,m}(\psi)|=1\text{ if }\sum_{r\ge1}r^{n-1}\psi(r)^m=\infty,
\]
with no monotonicity condition when \(nm>1\). For \(n=m=1\), the convergence half remains true but the unrestricted divergence half requires monotone \(\psi\); the nonmonotone unrestricted statement is false. The existing Duffin–Schaeffer supplier applies to reduced rational pairs and is not silently identified with unrestricted representations. For \(nm>1\), the primitive sub-limsup set with the single tuple-gcd condition also has full measure under the same divergence sum, without monotonicity. A separate Dani–Laurent–Nogueira theorem handles partitioned primitivity: each coordinate block must have at least m+1 entries in this page’s transposed convention, and r^(n−1)ψ(r)^m must be nonincreasing; its homogeneous and doubly metric inhomogeneous conclusions are separate. For vector-dependent \(\Psi:\mathbb Z^n\to[0,\infty)\), include the full-measure divergence theorem only for \(m>1\), with \(\sum_{q\ne0}\Psi(q)^m=\infty\).

The fixed-target inhomogeneous theorem is stated for \(y\in[0,1]^m\): it has the same sum criterion, but \(\psi\) must be monotone when \(n=1\) or \(n=2\). It stays separate from the homogeneous result and from inhomogeneous Duffin–Schaeffer. The primitive Hausdorff transfer is not generalized beyond the source’s partition condition that every block has at least \(m+1\) of the \(m+n\) coordinates.

**Build obligations.** Establish the convergence cover and Lebesgue normalization; prove the primitive gcd inclusion–exclusion; and prove pairwise independence for nonparallel normal vectors plus the quasi-independence-on-average estimate for parallel vectors. The one-dimensional exception should point to the existing reduced Duffin–Schaeffer theorem and not erase the distinction between all representations and reduced fractions. B examples compute the divergence threshold in the simultaneous and dual conventions only.

### 12. Homogeneous dynamics, manifolds, and Littlewood

**A:** homogeneous-dynamics-and-diophantine-approximation-on-manifolds. **B:** homogeneous-dynamics-and-diophantine-approximation-on-manifolds-examples.

The A page consumes the exact K–G matrix convention, Hausdorff dimension, the existing homogeneous quotient and Euclidean-lattice definitions, and the regular continued-fraction supplier. For \(A\in M_{m,n}(\mathbb R)\), set
\[
L_A=\begin{pmatrix}I_m&A\\0&I_n\end{pmatrix},\qquad
g_t=\operatorname{diag}(e^{t/m}I_m,e^{-t/n}I_n),\qquad
\Lambda_A=L_A\mathbb Z^{m+n}.
\]
Bad approximability means \(\liminf_{\|q\|_\infty\to\infty}\|Aq+p\|_\infty^m\|q\|_\infty^n>0\). Dani’s correspondence states this is equivalent to a uniform \(\varepsilon>0\) with \(\|g_tL_Av\|_\infty\ge\varepsilon\) for all \(t\ge0\) and \(v\in\mathbb Z^{m+n}\setminus\{0\}\). Mahler’s compactness criterion identifies this with a relatively compact orbit in \(SL_{m+n}(\mathbb R)/SL_{m+n}(\mathbb Z)\). The inventory owns the exact systole formulation, so the compact-orbit statement is a derived interpretation with Mahler’s criterion as a proof obligation.

The affine version is distinct. For \(A\in M_{m,n}(\mathbb R)\), \(b\in\mathbb R^m\), define bad approximation by \(\liminf_{\|q\|_\infty\to\infty}\|Aq+b+p\|_\infty^m\|q\|_\infty^n>0\). Kleinbock’s inhomogeneous Dani criterion is stated for irrational affine systems; the theorem gives the uniform lower bound on all integer vectors along the diagonal flow on free affine unimodular lattices. Rational systems are explicitly excluded from the equivalence. The same paper proves that the set of badly approximable affine systems is thick. Its proof obligations include the affine lattice space, mixing of the diagonal action, the expanding horospherical subgroup, the bounded-orbit-avoidance construction, and the correspondence. The paper’s later winning questions are not imported as current open problems.

For \(f:U\subset\mathbb R^d\to\mathbb R^n\) of class \(C^m\), \(f(x_0)\) is \(l\)-nondegenerate when its partial derivatives through order \(l\) span \(\mathbb R^n\); it is nondegenerate if this holds for some \(l\le m\). Define VWMA by the source’s multiplicative inequalities and strong extremality as almost-everywhere failure of VWMA. Kleinbock–Margulis’s theorem states that a \(C^m\) parametrized manifold is strongly extremal if almost every point is nondegenerate. The load-bearing estimate is their quantitative nondivergence bound: near an \(l\)-nondegenerate point, uniformly over nonnegative diagonal parameters, the measure of parameters with lattice systole \(<\varepsilon\) is at most \(D(\varepsilon/\rho)^{1/(dl)}|B|\), for \(0<\varepsilon\le\rho\). This is not a Hausdorff-dimension formula for very well approximable points on manifolds.

The A page also includes Chow–Technau’s full-text partial result: for \(\epsilon>0\), \(\alpha\) in \(K=\{\alpha:\sup_j\log q_j(\alpha)/j<\infty\}\), and \(\gamma\in\mathbb R\), there exists \(G\subset\mathrm{Bad}\) with \(\dim_HG=1\) such that for every \(\beta\in G\) and every \(\delta\in\mathbb R\), infinitely many \(n\) satisfy
\[
n\|n\alpha-\gamma\|\,\|n\beta-\delta\|<\frac{(\log\log n)^{3+\epsilon}}{\log n}.
\]
This inhomogeneous bound tends to zero and supplies a full-dimensional family of nontrivial pairs; it does not prove the universal Littlewood conjecture.

The three A-page open items have no outgoing dependency edges:

- op-littlewood-conjecture: for every \((\alpha,\beta)\in\mathbb R^2\), determine whether \(\liminf_{n\to\infty}n\|n\alpha\|\|n\beta\|=0\). Shkredov’s 2026 paper §1, printed p. 1, calls it unsolved and records the Einsiedler–Katok–Lindenstrauss theorem that the exceptional set has Hausdorff dimension zero. Chow–Technau’s partial theorem above is not a proof for every pair.
- op-sharp-dual-jarnik-dimension-on-nondegenerate-manifolds: for an analytic nondegenerate \(d\)-manifold \(\mathcal M\subset\mathbb R^n\) and \(\tau>n\), prove \(\dim_H(W_n^*(\tau)\cap\mathcal M)=(n+1)/(\tau+1)+d-1\). The 2026 survey §4.1, printed pp. 12–13, reports the general lower bound and a sharp upper bound only in a restricted \(\tau\)-range and special manifolds.
- op-simultaneous-dimension-threshold-on-nondegenerate-manifolds: for \(n>d\ge1\), determine the largest \(\tau_{n,d}(\mathcal M)>1/n\) such that \(\dim_H(W_n(\tau)\cap\mathcal M)=(n+1)/(\tau+1)-(n-d)\) for \(1/n<\tau<\tau_{n,d}(\mathcal M)\). The survey §4.2, printed pp. 13–15, conjectures the uniform infimum threshold \(1/(n-d)\) for \(d>1\) and \(3/(2n-1)\) for curves; it records proved lower/upper ranges, planar-curve equality, and the nonzero-curvature hypersurface case. The behavior above the threshold may depend on the manifold’s arithmetic geometry.

The B page computes scalar lattice-flow scaling, the rational-coordinate Littlewood example, a planar-curve nondegeneracy example, and the Chow–Technau bound at a fixed \(\epsilon\). No exponential-polynomial or Leibman theorem is proposed, so these rows do not overlap R3’s exponential/Leibman plan.

## Added source and breadth disposition

The full-text extents and versions are in r5-sources/README.md. The source harvest and disposition for the additions is:

| Full text | Results read | Disposition |
|---|---|---|
| Beresnevich–Velani 2010 K–G paper | §§1–5, including Theorems 1–3, primitive limsup sets, all measure/quasi-independence lemmas, multivariable \(\Psi\), and the quantitative count problem. | Include the homogeneous K–G law, primitive divergence law, and \(m>1\) vector-gauge law in A11. The §5 counting-asymptotic question is recorded as a 2010 problem but not promoted to a current open item because I did not verify its 2026 status in a primary source. |
| Beresnevich–Velani 2006 MTP paper | §§1–6, including gauge definitions, Euclidean-ball MTP, full Cantor/Frostman proof, conditional Duffin–Schaeffer transfer, locally regular metric-space MTP, and the distinct-rational variant. | Include the Euclidean and regular-metric MTP. Reuse the DS conclusion only with the 2020 proof and 2026 source; do not preserve the 2006 conditional status as current. |
| Dani–Laurent–Nogueira 2015 primitive-points paper | Entire §§1–7, Theorems 1.1–1.3, the ergodic zero-one law, primitive-point count, strip-intersection estimates and proof. | Include the partitioned primitive homogeneous and doubly metric inhomogeneous K–G theorem with each block-size and monotonicity hypothesis; it supplies the primitive Hausdorff transfer. |
| Allen–Beresnevich 2018 linear-forms MTP | §§1–2, Theorems 1–10 and applications; §§3–5 complete proof of Theorem 1. | Include Theorem 1, homogeneous Hausdorff K–G law, fixed-target inhomogeneous law with \(n=1,2\) monotonicity, primitive Hausdorff transfer, and general distorted inhomogeneous transfer. Keep every dimension-function, partition-size, \(\Phi\ne0\), target, and monotonicity restriction. |
| Beresnevich–Velani 2026 survey | Entire survey: line and higher-dimensional Jarník–Besicovitch/K–J results; dual/simultaneous manifold theory; Cantor intersections; ubiquity; Fourier and Littlewood context; references. | Use for dated open-problem/status formulations. Ubiquity’s simplified framework is context, not an unstated R5 theorem supplier. |
| Kleinbock–Margulis 1998 | Entire §§1–6, including Theorem A, Proposition 2.3, lattice reductions, quantitative nondivergence, and Section 6 scope notes. | Include pointwise nondegeneracy, VWMA, the quantitative bound, and strong extremality. Do not attribute the later matrix extension to this article. |
| Kleinbock 1999 affine forms | Entire §§1–5, including homogeneous and inhomogeneous Dani criteria, mixing proof, expanding-horospherical thick-orbit theorem, and §5 questions. | Include homogeneous matrix correspondence, irrational affine correspondence, and thickness of badly approximable affine systems. §5 game-winning questions are historical content, not current open items. |
| Chow–Technau 2024; Shkredov 2026 | Chow–Technau entire §§1–4 and theorem proofs; Shkredov’s publisher PDF §1, printed p. 1. | Include the exact full-dimensional inhomogeneous partial theorem and unique Littlewood open item. The discrete Littlewood analogue is status evidence only, not a solution to the real-variable conjecture. |

## Algorithms versus properties (new metric branches)

These additions are theorem/definition/open-problem pages. Dani’s map is a mathematical correspondence, not an algorithm that computes best approximants. Mass transference and Khintchine–Groshev are measure properties, not sampling procedures. The manifold and Littlewood items are theorem statements or open questions. B pages contain only worked computations. No item depends on an open problem.

## Source audit

The exact URLs, local full-text paths, version/publication status, read extents and SHA-256 hashes for every cited source are recorded in [`r5-sources/README.md`](r5-sources/README.md). The evidence directly covers all theorem contracts above. Full current-status claims are limited to sources whose theorem/conjecture text was read in full; the arXiv preprints are labeled by their official 2026-10-23 API versions. The 2024 Manin source is used only at its printed date and not as a 2026 exhaustive-status claim.
