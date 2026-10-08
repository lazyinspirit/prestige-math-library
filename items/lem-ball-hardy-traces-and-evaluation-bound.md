---
id: lem-ball-hardy-traces-and-evaluation-bound
kind: lemma
title: Polynomial traces, monomial basis and bounded evaluation for the ball Hardy space
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
proof_strategy: direct
deps:
  - cor-cauchy-estimates-taylor-coefficients
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-uniqueness-of-complex-power-series-coefficients
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-ck-and-multi-index-notation-in-several-variables
  - def-complex-l-two-inner-product
  - def-countable-choice
  - def-factorial-and-falling-factorial
  - def-holomorphic-function-in-several-complex-variables
  - def-integer-power
  - def-metric-ball
  - def-metric-compactness
  - def-metric-space
  - def-metric-topology
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-path-connected
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-szego-kernel-smooth-bounded-domain
  - lem-compactness-is-intrinsic
  - lem-complex-conjugation-and-modulus-laws
  - lem-derivative-of-a-power
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-sphere-and-torus-monomial-integrals
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - rem-complex-euclidean-space-dictionary
  - thm-absolute-convergence-of-complex-series
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-euclidean-implicit-function-theorem
  - thm-extreme-value-metric
  - thm-geometric-series
  - thm-heine-cantor-metric
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - thm-metric-open-set-algebra
  - thm-multinomial-theorem
  - thm-path-connected-implies-connected
  - thm-power-series-expansion-in-several-complex-variables
  - thm-ratio-test
  - thm-riesz-representation-for-hilbert-space
  - thm-taylor-expansion-holomorphic-function
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.3, printed pp. 165–166 (PDF pp. 164–165): defines the Hardy space as the
        L² closure of traces of holomorphic functions continuous on the closure,
        asks for the ball monomials to be a complete orthonormal system in Exercise
        5.3.1, and introduces Poisson extension and the Riesz evaluation
        representers. The page explicitly omits details; the polynomial density,
        exact evaluation bound and extension argument below are proved here.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), let $m\ge1$, let $\mathbb B^m=\{z\in\mathbb C^m:|z|<1\}$, let $S=\partial\mathbb B^m$, and give $S$ the normalized polar surface measure $\sigma=\sigma_1$ of [[lem-sphere-and-torus-monomial-integrals]]. Let $H^2(S,\sigma)$ be the closure of the traces of $\mathcal O(\mathbb B^m)\cap C(\overline{\mathbb B^m})$ in $L^2(S,\sigma)$, as in [[def-szego-kernel-smooth-bounded-domain]].

1. If $g$ is holomorphic on an open neighbourhood of $\overline{\mathbb B^m}$, its Taylor polynomials at $0$ converge uniformly to $g$ on $\overline{\mathbb B^m}$. More generally, polynomial traces are dense in the trace subspace and hence $H^2(S,\sigma)$ is the closure of the polynomial traces.

2. For $\alpha\in\mathbb N^m$,
   $\|\zeta^\alpha\|_{L^2(S,\sigma)}^2=w_\alpha:=\frac{(m-1)!\,\alpha!}{(m-1+|\alpha|)!}>0.$
   The normalized monomials $e_\alpha(\zeta)=\zeta^\alpha/\sqrt{w_\alpha}$ form a complete orthonormal system of $H^2(S,\sigma)$.

3. For each $0<r<1$, set
   $C_r:=\left(\sum_{k=0}^\infty\frac{(m-1+k)!}{(m-1)!\,k!}\,r^{2k}\right)^{1/2}<\infty.$
   Then every polynomial $p$ satisfies $\sup_{|z|\le r}|p(z)|\le C_r\|\operatorname{tr}_\sigma p\|_{L^2(S,\sigma)}$.

4. Every $h\in H^2(S,\sigma)$ has a unique holomorphic extension $\widetilde h$ to $\mathbb B^m$. It is the locally uniform limit of any sequence $(f_n)\subset\mathcal O(\mathbb B^m)\cap C(\overline{\mathbb B^m})$ whose traces converge to $h$ in $L^2(S,\sigma)$. For every $f\in\mathcal O(\mathbb B^m)\cap C(\overline{\mathbb B^m})$, $\sup_{|z|\le r}|f(z)|\le C_r\|\operatorname{tr}_\sigma f\|_2$; thus trace evaluation is well-defined and bounded, and each extended evaluation has a unique Riesz representer in $H^2(S,\sigma)$. In particular, $(\mathbb B^m,\sigma)$ is Szegő-regular.

## Facts & Assumptions

[A1] The only choice principle used is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It selects countably many polynomial approximants or trace generators; the Hilbert-space and surface-measure conventions in [[def-szego-kernel-smooth-bounded-domain]] and its suppliers also assume only $\mathrm{AC}_\omega$. No full Axiom of Choice is used.

[F1] Under $\mathbb C^m\cong\mathbb R^{2m}$, $|z|^2=\sum_{j<m}|z_j|^2$, the open unit ball is bounded and convex, and its closure is the closed Euclidean unit ball ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[rem-complex-euclidean-space-dictionary]]). Its closure is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F2] The unit ball is path-connected by the segments $t\mapsto tz$, and hence connected ([[def-path-connected]], [[thm-path-connected-implies-connected]]). It is a nonempty bounded domain with $C^1$ boundary in the convention of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]. Indeed, put $n=2m$ and take $x_0\in S$ in real coordinates; since $|x_0|=1$, some coordinate $x_{0,i}$ is nonzero, and after the rigid change of coordinates that moves slot $i$ to the last position and, when $x_{0,i}<0$, reflects that coordinate, one has $x_0=(y_0,z_0)$ with $z_0=|x_{0,i}|>0$ and $|y_0|^2+z_0^2=1$. The polynomial $F(y,z)=1-|y|^2-z^2$ has continuous partial derivatives $\partial_{y_j}F=-2y_j$ and $\partial_zF=-2z$ ([[lem-derivative-of-a-power]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]), so it is $C^1$, and $\partial_zF(x_0)=-2z_0\neq0$; the implicit function theorem ([[thm-euclidean-implicit-function-theorem]]) therefore supplies neighbourhoods $P$ of $y_0$ and $Q$ of $z_0$, with $Q\subseteq(0,\infty)$ after shrinking, and a unique $C^1$ function $\varphi:P\to Q$ with $F(y,z)=0\iff z=\varphi(y)$ for $(y,z)\in P\times Q$. Since $\partial_zF=-2z<0$ on $Q$, the map $z\mapsto F(y,z)$ is strictly decreasing on $Q$ for each $y\in P$, so $F(y,z)>0\iff z<\varphi(y)$ there; because $|y|^2+z^2<1\iff F(y,z)>0$, this gives $\mathbb B^m\cap(P\times Q)=\{(y,z)\in P\times Q:z<\varphi(y)\}$, that is, locally exactly the subgraph of the $C^1$ function $\varphi$, whose graph $\{z=\varphi(y)\}$ is locally the sphere. The chart surface measure on $S$ equals polar surface measure ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]); the sphere moment formula gives $0<\sigma(S)<\infty$ and $\sigma(S)=1$ after normalization ([[lem-sphere-and-torus-monomial-integrals]]). Thus this normalization is $c\,dS$ for $c=1/\sigma_{\rm polar}(S)>0$, as required in [[def-szego-kernel-smooth-bounded-domain]].

[F3] The trace subspace and Hardy space are $\mathcal T=\{\operatorname{tr}_\sigma f:f\in\mathcal O(\mathbb B^m)\cap C(\overline{\mathbb B^m})\}$ and $H^2=\overline{\mathcal T}^{L^2(\sigma)}$; the pairing is $\langle f,g\rangle=\int_S f\overline g\,d\sigma$, linear in its first variable ([[def-szego-kernel-smooth-bounded-domain]], [[def-complex-l-two-inner-product]]). Under $\mathrm{AC}_\omega$, this $L^2$ space is Hilbert ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F4] For all $\alpha,\beta\in\mathbb N^m$, the sphere monomial moments are $\int_S\zeta^\alpha\overline{\zeta^\beta}\,d\sigma=\delta_{\alpha\beta}(m-1)!\alpha!/(m-1+|\alpha|)!$ ([[lem-sphere-and-torus-monomial-integrals]]). Multi-index notation has $|\alpha|=\sum_{j<m}\alpha_j$, $\alpha!=\prod_{j<m}\alpha_j!$, and $z^\alpha=\prod_{j<m}z_j^{\alpha_j}$ ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-factorial-and-falling-factorial]]).

[F5] A holomorphic function on an open set is continuous there and has an absolutely convergent local power series on a sufficiently small centered polydisc ([[def-holomorphic-function-in-several-complex-variables]], [[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]], [[thm-power-series-expansion-in-several-complex-variables]]). Absolute convergence permits regrouping by total degree ([[thm-absolute-convergence-of-complex-series]]), and one-variable power-series coefficients are unique ([[cor-uniqueness-of-complex-power-series-coefficients]]).

[F6] A one-variable holomorphic function has its Taylor expansion on every centered disc contained in its domain, and if its modulus is at most $M$ on the circle of radius $R$, its $k$-th Taylor coefficient has modulus at most $M/R^k$ ([[thm-taylor-expansion-holomorphic-function]], [[cor-cauchy-estimates-taylor-coefficients]]).

[F7] The closed Euclidean ball is compact; every ambient open cover of a compact subset has a finite subcover by [[lem-compactness-is-intrinsic]], and metric balls are open in the Euclidean metric topology ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[def-metric-compactness]], [[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]], [[thm-metric-open-set-algebra]], [[rem-complex-euclidean-space-dictionary]]). A continuous real-valued function on a nonempty compact metric space has a finite maximum ([[thm-extreme-value-metric]]). The Euclidean norm is continuous ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]), a continuous function on the compact closed ball is uniformly continuous ([[thm-heine-cantor-metric]]), and complex modulus is subadditive, which implies $\bigl||u|-|v|\bigr|\le|u-v|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F8] For a finite coefficient family, Cauchy–Schwarz bounds the absolute value of its scalar product by the product of the two Euclidean norms ([[thm-cauchy-schwarz-in-an-inner-product-space]]). For $k\ge0$, $\sum_{|\alpha|=k}(k!/\alpha!)x^\alpha=(\sum_{j<m}x_j)^k$ ([[thm-multinomial-theorem]]).

[F9] The natural powers $r^k$ are defined recursively, and the series $\sum_{k\ge0}((m-1+k)!/((m-1)!k!))r^{2k}$ converges for $0<r<1$ by the ratio test: its successive-term ratio is $r^2(m+k)/(k+1)\to r^2<1$ ([[def-integer-power]], [[thm-ratio-test]]). The geometric series with ratio $1/R<1$ converges ([[thm-geometric-series]]).

[F10] A locally uniform limit of holomorphic functions on an open set is holomorphic there ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F11] Each bounded linear functional on a complex Hilbert space has a unique Riesz representer; in the first-variable-linear convention $E(h)=\langle h,S\rangle$ ([[thm-riesz-representation-for-hilbert-space]]). The complete orthonormal-system condition means that the closed linear span is the whole Hilbert space ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

## Proof

**Proof technique:** direct, using radial dilations, homogeneous Taylor polynomials, and the sphere moments.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, the unit ball $\mathbb B^m$, its sphere $S$, and normalized polar surface measure $\sigma$.

1.1 The segment from $0$ to each $z\in\mathbb B^m$ stays in $\mathbb B^m$, so [F2] puts $\mathbb B^m$ in the domain class of [[def-szego-kernel-smooth-bounded-domain]]. By [F2], its normalized polar surface measure is an allowed positive multiple of chart surface measure. [A1, F1, F2, given]

1.2 Let $g$ be holomorphic on an open neighbourhood $U$ of $\overline{\mathbb B^m}$. Consider the family of metric balls $B(a,\varepsilon)$ with $a\in\overline{\mathbb B^m}$, $\varepsilon>0$, and $\overline B(a,2\varepsilon)\subset U$. It covers $\overline{\mathbb B^m}$: openness supplies such a radius at each point, and the family is defined by this property, so no uncountable choice of radii is made. The ambient-cover implication of [[lem-compactness-is-intrinsic]] gives a finite subcover $B(a_i,\varepsilon_i)$, and let $\delta=\min_i\varepsilon_i>0$. If $|y|\le1+\delta$, put $x=y/(1+\delta)$, so $|x|\le1$ and $|y-x|\le\delta$. Choose an index $i$ whose covering ball contains $x$; then $|y-a_i|<\delta+\varepsilon_i\le2\varepsilon_i$, hence $y\in U$. Therefore $\overline B(0,1+\delta)\subset U$. [F1, F7, given]

1.3 Fix $R$ with $1<R<1+\delta$. Continuity of $g$ and the modulus inequality in [F7] make $|g|$ continuous on the compact closed ball of radius $R$; let $M_R=\max_{|u|\le R}|g(u)|<\infty$. For each $|z|\le1$, the function $\phi_z(t)=g(tz)$ is holomorphic on $|t|<1+\delta$: if $z\ne0$, complex differentiability of $g$ gives $\phi_z(t+h)-\phi_z(t)=Dg(tz)(hz)+o(|h|\,|z|)$, and for $z=0$ it is constant. [F5, F7, given]

2.1 The local power series of $g$ at $0$ is $\sum_\alpha c_\alpha u^\alpha$. For each fixed $|z|\le1$ and sufficiently small $|t|$, absolute convergence lets us group $g(tz)=\sum_{k\ge0}P_k(z)t^k$, where $P_k(z)=\sum_{|\alpha|=k}c_\alpha z^\alpha$. Uniqueness of power-series coefficients identifies $P_k(z)$ as the $k$-th Taylor coefficient of $\phi_z$. The one-variable Cauchy estimate [F6], applied on $|t|=R$, gives $|P_k(z)|\le M_R/R^k$, uniformly for $|z|\le1$. Thus $\sup_{|z|\le1}|\sum_{k>N}P_k(z)|\le M_R\sum_{k>N}R^{-k}\to0$; the Taylor polynomials $\sum_{k=0}^NP_k$ converge uniformly to $g$ on the closed ball. [F5, F6, F9, step 1.3]

3.1 Let $f\in\mathcal O(\mathbb B^m)\cap C(\overline{\mathbb B^m})$. For $0<\rho<1$, $f_\rho(z)=f(\rho z)$ is holomorphic on the neighbourhood $\rho^{-1}\mathbb B^m$ of the closed unit ball. Uniform continuity of $f$ on that compact ball gives $f_\rho\to f$ uniformly there as $\rho\uparrow1$. For each positive integer $n$, choose $\rho_n$ close enough to $1$ that $\|f_{\rho_n}-f\|_{C(\overline{\mathbb B^m})}<1/(2n)$, then use step 2.1 to choose a polynomial $p_n$ with $\|p_n-f_{\rho_n}\|_{C(\overline{\mathbb B^m})}<1/(2n)$. The countable selection is allowed by [A1], and $\|p_n-f\|_C<1/n$. Since $\sigma(S)=1$, uniform convergence implies $\operatorname{tr}_\sigma p_n\to\operatorname{tr}_\sigma f$ in $L^2(S,\sigma)$. Hence polynomial traces are dense in $\mathcal T$, and by the definition of $H^2$ in [F3] their closure is all of $H^2(S,\sigma)$. [A1, F3, F7, step 2.1]

4.1 By [F4], distinct monomial traces are orthogonal and $\|\zeta^\alpha\|_2^2=w_\alpha>0$. Thus $e_\alpha=\zeta^\alpha/\sqrt{w_\alpha}$ is an orthonormal family. Its finite linear span is exactly the polynomial traces, dense by step 3.1; the definition in [F11] therefore makes it a complete orthonormal system. In particular the zero multi-index has norm squared $w_0=1$, and for $m=1$ every monomial has norm squared $1$. [F4, F11, step 3.1, given]

5.1 If $F=\emptyset$, then $p=0$ and the bound is immediate. Otherwise write $p(z)=\sum_{\alpha\in F}c_\alpha z^\alpha$ for a finite set $F$. Orthogonality in [F4] gives $\|\operatorname{tr}_\sigma p\|_2^2=\sum_{\alpha\in F}|c_\alpha|^2w_\alpha$. Cauchy–Schwarz and [F8] give, for $|z|\le r$, $|p(z)|^2\le \|\operatorname{tr}_\sigma p\|_2^2\sum_{\alpha\in F}\frac{|z^\alpha|^2}{w_\alpha} \le \|\operatorname{tr}_\sigma p\|_2^2\sum_{k=0}^\infty\frac{(m-1+k)!}{(m-1)!\,k!}r^{2k}$. Indeed, the degree-$k$ part of the full sum is $\frac{(m-1+k)!}{(m-1)!k!}(\sum_{j<m}|z_j|^2)^k$, by the multinomial identity. When $m=1$, this coefficient is $1$ for every $k$ and the series is $\sum_{k\ge0}r^{2k}$. The final series converges by [F9], proving the claimed bound with the displayed $C_r$. [F4, F8, F9, step 4.1]

6.1 If $f\in\mathcal O(\mathbb B^m)\cap C(\overline{\mathbb B^m})$, choose the uniform polynomial approximants from step 3.1. For each $|z|\le r$, step 5.1 bounds $|p_n(z)|$ by $C_r\|\operatorname{tr}_\sigma p_n\|_2$. Uniform convergence gives $p_n(z)\to f(z)$, and $L^2$ convergence gives $\|\operatorname{tr}_\sigma p_n\|_2\to\|\operatorname{tr}_\sigma f\|_2$. Taking the limit pointwise and then the supremum over $|z|\le r$ proves $\sup_{|z|\le r}|f(z)|\le C_r\|\operatorname{tr}_\sigma f\|_2$. If two trace generators determine the same $L^2$ class, apply this bound to their difference for every $r<1$; their holomorphic functions agree throughout $\mathbb B^m$. Thus trace evaluation is well-defined, and for any $w\in\mathbb B^m$, choose $|w|<r<1$ to get $|f(w)|\le C_r\|\operatorname{tr}_\sigma f\|_2$. [F2, F3, step 3.1, step 5.1]

7.1 Given $h\in H^2(S,\sigma)$, [F3] and [A1] give a sequence $f_n\in\mathcal O(\mathbb B^m)\cap C(\overline{\mathbb B^m})$ whose traces converge to $h$ in $L^2$. If a compact $K\subset\mathbb B^m$ is nonempty, the norm attains a maximum $s<1$ on $K$ by [F7]; choose $s<r<1$, so $K\subset r\mathbb B^m$. For empty $K$ the convergence assertion is automatic. Step 6.1 applied to $f_n-f_j$ then shows that $(f_n)$ is uniformly Cauchy on $K$. Its limit $\widetilde h$ is holomorphic by [F10], independent of the approximating sequence by the same estimate, and agrees with every trace generator by applying it to the constant sequence at that generator. Hence it is the unique extension represented by the convergent sequence. Passing the bound in step 6.1 to the limit gives $|\widetilde h(w)|\le C_r\|h\|_2$ whenever $|w|<r<1$. At each $w$, this limit extends the well-defined bounded linear trace evaluation from step 6.1; the extension is linear because the trace subspace is dense and linearity passes to limits. [A1, F3, F7, F10, step 6.1]

8.1 The Hilbert-space and pairing assumptions for $H^2(S,\sigma)$ are [F3]. The Riesz theorem [F11] therefore supplies a unique $S_w\in H^2(S,\sigma)$ with $E_w(h)=\langle h,S_w\rangle$ for every $h\in H^2(S,\sigma)$. Step 7.1 makes $w\mapsto E_w(h)$ holomorphic, so the pair $(\mathbb B^m,\sigma)$ is Szegő-regular by [[def-szego-kernel-smooth-bounded-domain]]. [A1, F3, F11, step 7.1] ∎
