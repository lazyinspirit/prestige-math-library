---
id: def-standard-intertwining-operator-for-sl2-r
kind: definition
title: The standard intertwining operator A(nu)
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 4
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-real-power-continuity-and-derivatives
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-integral-over-a-null-set-vanishes
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - cor-continuous-functions-are-borel-measurable
  - thm-extreme-value-metric
  - def-lie-group
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - thm-chain-rule-for-total-derivatives
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-euler-beta-function
  - thm-beta-gamma-identity
  - def-countable-choice
  - def-axiom-of-choice
justified_by:
  - lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner
  - thm-meromorphic-continuation-and-intertwining-identity-for-a-nu
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Exercise 2.8(i)–(iii), printed p. 12"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.3(3), printed pp. 293–294, and Exercise 7.4.12, printed p. 302"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.1, printed pp. 49–50 (the isomorphism P±(s) ≅ P±(−s))"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume AC and let $\varepsilon\in\{0,1\}$ and $\nu\in\mathbb C$ with
$\operatorname{Re}\nu>0$. Use the smooth model of
[[def-normalized-principal-series-i-epsilon-nu]], the compact picture of
[[thm-compact-picture-of-the-sl2-principal-series]], and the K-type basis of
[[lem-k-type-decomposition-of-the-sl2-principal-series]]. Put
$$w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}=k_{-\pi/2}\in K.$$
The **standard intertwining integral** is
$$\bigl(A(\nu)\varphi\bigr)(g)=\int_{\mathbb R}\varphi(w n_u g)\,du,$$
where $du$ is Lebesgue measure in the $N$ coordinate.
For positive real bases in complex powers use $x^z:=\exp(z\log x)$ with the
real logarithm.

The proof below shows that the integral is absolutely convergent for every
smooth $\varphi$ and $g\in G$, and defines a linear operator from the smooth
model $I_{\varepsilon,\nu}$ to $I_{\varepsilon,-\nu}$. It commutes with right
translation, maps K-finite vectors to K-finite vectors, and in the compact
picture is diagonal on the parity-$\varepsilon$ K-types:
$$A(\nu)f_n=c_n(\nu)f_n\qquad(n\equiv\varepsilon\pmod2).$$
For $\varepsilon=0$, the base K-type is $f_0=1$ and its eigenvalue is
$$c_0(\nu)=\int_{\mathbb R}(1+u^2)^{-(1+\nu)/2}\,du,$$
which the proof identifies with $B(1/2,\nu/2)$; it is positive for real
$\nu>0$. For $\varepsilon=1$, $f_0$ is not a K-type, and $c_0(\nu)$ denotes
this same scalar function, not an eigenvalue. Its meromorphic continuation
is established by [[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]].
The full family of continuous K-diagonal maps on $C^\infty_\varepsilon(K)$
has the meromorphic continuation proved in
[[thm-meromorphic-continuation-and-intertwining-identity-for-a-nu]]: a common
local scalar factor clears its poles, with holomorphy in every smooth
seminorm. The defining integral itself is only asserted on
$\operatorname{Re}\nu>0$.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\operatorname{Re}\nu>0$, and a smooth left-$P$-covariant function $\varphi\in I_{\varepsilon,\nu}$.

[F1] The model has covariance $\varphi(p g)=\chi_{\varepsilon,\nu}(p)\varphi(g)$, with $\chi_{\varepsilon,\nu}(m a_s n_x)=\sigma_\varepsilon(m)e^{(1+\nu)s/2}$ for $m=\pm I$, and right action $(\Pi_\nu(g_0)\varphi)(g)=\varphi(g g_0)$ ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[def-normalized-principal-series-i-epsilon-nu]]).

[F2] If $y=p k$ with $p=m a_s n_x$ and $k\in K$, then $\varphi(y)=e^{(1+\nu)s/2}\sigma_\varepsilon(m)\varphi(k)$; the Euclidean norm $r$ of the bottom row of $y$ is $e^{-s/2}$, so $|\varphi(y)|\le\|\varphi|_K\|_\infty r^{-1-\operatorname{Re}\nu}$ by $|e^z|=e^{\operatorname{Re}z}$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F3] In the compact picture, the parity-matching functions $f_n(k_\theta)=e^{in\theta}$ are precisely the one-dimensional K-types ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F4] The nonnegative integral is monotone and homogeneous; nonnegative improper Riemann integrals on a half-line agree with their Lebesgue integrals; positive-base real powers have the stated derivatives ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]], [[thm-real-power-continuity-and-derivatives]]).

[F5] A C1 diffeomorphism obeys change of variables for nonnegative measurable functions and for L1 complex functions. Nonnegative integrals are additive over disjoint measurable pieces, integrals on null sets vanish, and a one-dimensional box has its length as Lebesgue measure ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[cor-c-one-change-of-variables-for-l-one-functions]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[cor-integral-over-a-null-set-vanishes]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F6] Differentiation under the integral sign applies to a common integrable majorant; dominated convergence gives continuity of the resulting parameter integrals; the complex Lebesgue integral is linear on L1 ([[thm-differentiation-under-the-integral-sign]], [[thm-dominated-convergence]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] Products in a Lie group and smooth functions between smooth manifolds are smooth, with the chain rule for coordinate derivatives ([[def-lie-group]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[thm-chain-rule-for-total-derivatives]]).

[F8] A continuous real-valued function on a compact metric space is bounded ([[thm-extreme-value-metric]]); continuous scalar functions on Euclidean spaces are Borel measurable ([[cor-continuous-functions-are-borel-measurable]]).

[F9] AC supplies the normalized Haar probabilities used by the compact-picture and K-type suppliers and implies the countable-choice hypotheses of the half-line integral and Lebesgue change-of-variables results ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[def-axiom-of-choice]], [[def-countable-choice]]).

[F10] For $\operatorname{Re}p,\operatorname{Re}q>0$, the Euler Beta integral is $B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt$ ([[def-euler-beta-function]], [[thm-beta-gamma-identity]]).

## Verification

**Proof technique:** establish a uniform compact-parameter decay estimate, then verify smoothness, covariance, and the K-type claims directly.

1.1 Let $C$ be a compact coordinate box in $G$, write $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, and set $B=\max_{g\in C}\|(a,b)\|$ and $B_1=\max_{g\in C}\|(c,d)\|$; these are finite and positive by [F8] and $\det g=1$. For any two real rows $x,y$, direct expansion gives $\|x\|^2\|y\|^2-\det(x,y)^2=(x\cdot y)^2\ge0$. Thus the rows of $g$ give $1\le\|(a,b)\|\|(c,d)\|$ and hence $\|(c,d)\|\ge B^{-1}$. The rows of $w n_u g$ are $(-c,-d)$ and $(a+uc,b+ud)$, so its determinant also gives $\|(a+uc,b+ud)\|\ge B_1^{-1}$. Set $R:=\max(1,2B^2)$. If $|u|\ge R$, the triangle inequality gives $\|(a+uc,b+ud)\|\ge |u|/(2B)\ge(1+|u|)/(4B)$; for $|u|\le R$ the determinant bound gives $\|(a+uc,b+ud)\|\ge(1+|u|)/(B_1(1+R))$. Thus for $c_C:=\min((4B)^{-1},(B_1(1+R))^{-1})>0$, the bottom-row norm $r(u,g)$ is at least $c_C(1+|u|)$ throughout $C$. The compact-picture formula [F2] therefore gives $$|\varphi(w n_u g)|\le \|\varphi|_K\|_\infty c_C^{-1-\sigma}(1+|u|)^{-1-\sigma},\qquad \sigma=\operatorname{Re}\nu>0.$$ The majorant is integrable: for $T>0$, the antiderivative supplied by [F4] gives $\int_0^T(1+u)^{-1-\sigma}du=(1-(1+T)^{-\sigma})/\sigma\to1/\sigma$; reflection $u\mapsto-u$ in [F5] gives the same finite integral on $(-\infty,0)$, and [F5] combines the two pieces. Taking $C$ to contain any fixed $g$ proves absolute convergence there. [F2, F4, F5, F8, F9, algebra]

2.1 For each fixed $g$, step 1.1 makes $u\mapsto\varphi(w n_u g)$ integrable; the integrand is continuous, hence measurable by [F8]. Thus the displayed formula defines a value for every $g$. Applying [F6] to the integrands for $\varphi_1,\varphi_2$ and their linear combination, which are all integrable by step 1.1, shows $A(\nu)$ is complex-linear. [F6, F8, F9, step 1.1]

2.2 In a smooth coordinate chart $g=\gamma(z)$ and on any compact sub-box, the map $(u,z)\mapsto\varphi(w n_u\gamma(z))$ is smooth by [F7]. Every coordinate derivative is a finite sum of right derivatives of $\varphi$ at $w n_u\gamma(z)$ with smooth coefficients bounded on that sub-box. Each such right derivative remains left-$P$-covariant with character $\chi_{\varepsilon,\nu}$, and its restriction to compact $K$ is bounded; therefore the estimate of step 1.1 gives one integrable majorant $C_\alpha(1+|u|)^{-1-\sigma}$ for each coordinate derivative $\partial_z^\alpha$, uniformly on the sub-box. These derivatives are continuous in $u$ and hence measurable by [F8]. Applying the differentiation-under-the-integral theorem [F6] successively to the coordinates gives $\partial_z^\alpha(A(\nu)\varphi)(\gamma(z))=\int_{\mathbb R}\partial_z^\alpha[\varphi(w n_u\gamma(z))]du$; dominated convergence [F6] makes each such derivative continuous in $z$. All coordinate derivatives therefore exist and are continuous, so $A(\nu)\varphi$ is smooth. [F6, F7, F8, F9, step 1.1]

3.1 For $n_x\in N$, $n_u n_x=n_{u+x}$, so translation change of variables [F5] gives $A(\nu)\varphi(n_xg)=A(\nu)\varphi(g)$. For $a_s\in A$, use $n_u a_s=a_s n_{e^{-s}u}$ and $w a_s=a_{-s}w$; covariance contributes $e^{-(1+\nu)s/2}$, and the change of variables for integrable complex functions $v=e^{-s}u$ contributes $e^s$. Hence $$A(\nu)\varphi(a_sg)=e^{(1-\nu)s/2}A(\nu)\varphi(g).$$ For $m\in M=\{\pm I\}$, centrality gives $w n_u m g=m w n_u g$, so $A(\nu)\varphi(mg)=\sigma_\varepsilon(m)A(\nu)\varphi(g)$. These are exactly the $P=MAN$ covariance rules for $I_{\varepsilon,-\nu}$. For every $g_0\in G$, $$A(\nu)\Pi_\nu(g_0)\varphi(g)=\int_{\mathbb R}\varphi(w n_u g g_0)du=(\Pi_{-\nu}(g_0)A(\nu)\varphi)(g),$$ so the operator intertwines right translations. Together with step 2.2 this proves that its target is the smooth model $I_{\varepsilon,-\nu}$. [F1, F5, F9, step 1.1, step 2.2, algebra]

4.1 The compact picture identifies source and target with the same parity space and its K-types with the one-dimensional lines $\mathbb C f_n$. Since step 3.1 intertwines every right translation, $A(\nu)$ maps each finite-dimensional right-$K$ orbit span into a finite-dimensional right-$K$ orbit span. If $f_n$ is a K-type vector, its image has the same right-$K$ character; the corresponding target character space is exactly $\mathbb C f_n$ by [F3]. Hence $A(\nu)f_n=c_n(\nu)f_n$ for a scalar $c_n(\nu)$ and every allowed $n$, proving the K-finite-target and diagonalization assertions. [F3, step 3.1, algebra]

5.1 For $\varepsilon=0$, the compact vector $f_0=1$ extends by [F2]. At $g=I$, the bottom row of $w n_u$ is $(1,u)$, so its norm is $r=\sqrt{1+u^2}$. The positive-real-log convention for complex powers gives $\varphi(w n_u)=r^{-1-\nu}=(1+u^2)^{-(1+\nu)/2}$ and $$c_0(\nu)=(A(\nu)f_0)(I)=\int_{\mathbb R}(1+u^2)^{-(1+\nu)/2}du.$$ For real $\nu>0$ the integrand is positive and on $[0,1]$ is at least $2^{-(1+\nu)/2}$; that interval has measure $1$ by [F5], so $c_0(\nu)>0$ by monotonicity [F4]. For complex $\operatorname{Re}\nu>0$, the integrand is even and absolutely integrable by step 1.1. Splitting off the null endpoint and reflecting the negative half-line by [F5] gives twice its integral on $(0,\infty)$. Under the C1 diffeomorphism $t=u^2/(1+u^2):(0,\infty)\to(0,1)$, one has $dt/du=2u/(1+u^2)^2$ and $$t^{-1/2}(1-t)^{\nu/2-1}\frac{dt}{du}=2(1+u^2)^{-(1+\nu)/2}.$$ The change-of-variables formula for integrable complex functions [F5] therefore yields $$c_0(\nu)=\int_0^1t^{-1/2}(1-t)^{\nu/2-1}dt=B(1/2,\nu/2),$$ as claimed by [F10]. For $\varepsilon=1$, the same integral defines the formal scalar $c_0(\nu)$ but is not an eigenvalue because $f_0$ is not an allowed K-type; its scalar continuation is proved by [[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]], while the full smooth-operator continuation is supplied by [[thm-meromorphic-continuation-and-intertwining-identity-for-a-nu]]. [F2, F4, F5, F8, F9, F10, step 1.1, step 4.1] ∎

## Remarks

- **Continuation discharge:** [[thm-meromorphic-continuation-and-intertwining-identity-for-a-nu]], Proof 1.1–5.1, proves the common simple-pole set, uniform polynomial multiplier bounds for both signs of the K-index, locally convergent operator power series in every smooth seminorm, agreement with this integral on its initial half-plane, and the full group-intertwining identity. Its actual base eigenvalue is $c_0$ in even parity and $c_1$ in odd parity; the formal odd-parity scalar $c_0$ is not used as that base. The normalized common-pole extensions and exceptional kernels are established there and in [[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]].
- **Source convention:** Kerr's Exercise 2.8 uses $w_K=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=-w$. Since $-I\in M$, that source integral differs from this item's chosen $w=k_{-\pi/2}$ by the factor $\sigma_\varepsilon(-I)=(-1)^\varepsilon$. The local formulas use the explicit $w$ fixed in the Definition; transfer of any source eigenvalue normalization must include that factor.
- Kerr, Exercise 2.8(i)–(iii), printed p. 12, asks the reader to verify right intertwining, target covariance, and nonvanishing; it does not provide those proofs or meromorphic continuation. Kowalski, Proposition 7.4.3(3) (statement p. 294, discussion pp. 301–302) and Exercise 7.4.12 (p. 302), classify equivalence and leave construction of an inverse-character intertwiner as an exercise. Etingof, §9.1–9.2, printed pp. 48–50, gives the algebraic $P^\pm(s)\cong P^\pm(-s)$ equivalence only in the irreducible regime and the right-$P$ model with parameter $s=-\nu$. These are motivation and convention checks, not substitutes for the local proof or its verified suppliers.
