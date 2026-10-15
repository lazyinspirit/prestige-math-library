---
id: lem-rpm-curved-charge-action-variation
kind: lemma
title: "Fixed-endpoint curved charge variation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-gr-smooth-lorentzian-objects
  - def-countable-choice
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-compact-metric-and-timelike-curve-variation
  - lem-em-particle-curve-variation
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-real-power-continuity-and-derivatives
  - thm-integration-by-parts
  - thm-heine-borel-rn
  - thm-bolzano-weierstrass
  - def-real-numbers
  - cor-cauchy-reals-lub-complete
  - cor-archimedean-reciprocal
  - lem-of-naturals-positive
  - lem-of-inverse-positive
  - thm-monotonicity-of-the-integral
  - thm-extreme-value-metric
  - lem-gr-future-causal-classification-by-a-timelike-field
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  lem-em-particle-curve-variation: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-bolzano-weierstrass: mathematical-premise
  def-real-numbers: mathematical-premise
  cor-cauchy-reals-lub-complete: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
  lem-of-naturals-positive: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Complete 55-page Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, especially equation (1.21), printed pp. 8–28. The curved local variation is proved from inspected mathematical suppliers."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Complete author manuscript, arXiv v3, §5.2.1: curved charged-particle interaction/action and worldline equation, with the singular self-field limitation kept separate from the prescribed external-field model."
verification: {}
---

## Statement

Let $(M,g,N)$ be a smooth, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$ ([[def-gr-smooth-lorentzian-objects]]). Assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, as required for the metric-selected Levi–Civita connection $\nabla$ of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Let $O\subseteq M$ be open and let $A$ be a $C^2$ covector field on $O$; define the $C^1$ two-form $F=dA$ by $F_{ab}=\partial_aA_b-\partial_bA_a$ in each chart. Fix constants $c>0$, $m>0$ and $q\in\mathbb R$. Let $z:[a,b]\to O$ be a $C^2$ future-directed timelike curve, where $a<b$ are proper-time values in seconds and $U=dz/d\tau$ satisfies $g(U,U)=-c^2$. For every $C^2$ fixed-endpoint variation $z_\epsilon$ through timelike curves in $O$, with variation field $J=\partial_\epsilon z_\epsilon|_{\epsilon=0}$ and $J(a)=J(b)=0$, define

$$S[z_\epsilon]=-mc\int_a^b\sqrt{-g(\partial_\tau z_\epsilon,\partial_\tau z_\epsilon)}\,d\tau+q\int_a^b A(\partial_\tau z_\epsilon)\,d\tau.$$

Then the first variation is

$$\delta S=\int_a^b\left[-m\,g(J,\nabla_UU)+qF(J,U)\right]d\tau.$$

Consequently, $z$ is stationary under all local chart-supported fixed-endpoint variations if and only if

$$m(\nabla_UU)_a=qF_{ab}U^b,$$

equivalently $m\nabla_UU=qF^\sharp(U)$, where $F^\sharp(v)$ is defined by $g(F^\sharp(v),w)=F(w,v)$. The statement is local to a potential domain; no global potential is assumed.

## Facts & Assumptions

**Given:** A smooth time-oriented Lorentzian four-manifold $(M,g,N)$ of signature $(-,+,+,+)$; assume $\mathrm{AC}_\omega$ for its canonical tangent-bundle smooth structure; a $C^2$ future timelike curve segment with fixed endpoints and proper-time tangent $U$; a $C^2$ potential one-form $A$ on an open neighbourhood of its image; $F=dA$; and $m,c>0$, $q\in\mathbb R$.

[A1] [[def-countable-choice]]: assume the axiom of countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[F1] [[def-gr-smooth-lorentzian-objects]]: a smooth four-manifold with a smooth nondegenerate metric of Lorentzian inertia $(3,1,0)$ and a smooth time orientation; in signature $(-,+,+,+)$ timelike vectors have negative norm.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: under $\mathrm{AC}_\omega$, the smooth nondegenerate metric determines a unique torsion-free, metric-compatible connection; in charts $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ and $\nabla g=0$.

[F3] [[thm-gr-compact-metric-and-timelike-curve-variation]]: for a $C^2$ proper-time-parametrized future timelike curve and a fixed-endpoint timelike-fibre variation contained in one chart, the free-particle action has first variation $-m\int g(J,D_t\gamma')\,dt$.

[F4] [[lem-em-particle-curve-variation]]: in the flat affine convention $F_{\nu\mu}=\partial_\nu A_\mu-\partial_\mu A_\nu$, stationarity under fixed-endpoint $C^2$ variations gives the interaction ordering $qF_{\nu\mu}U^\mu$.

[F5] [[lem-test-function-cutoffs-and-euclidean-localization]]: for compact $K\subseteq\Omega\subseteq\mathbb R^n$ with $\Omega$ open, there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ near $K$.

[F6] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: a jointly continuous integrand with continuous parameter derivative on a compact rectangle may be differentiated under its Riemann integral.

[F7] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable maps, $D(h\circ f)(a)=Dh(f(a))\circ Df(a)$.

[F8] [[thm-algebra-of-derivatives]]: sums and products of differentiable real functions obey the sum and product rules.

[F9] [[thm-real-power-continuity-and-derivatives]]: on positive inputs the square root is differentiable with derivative $1/(2\sqrt{x})$.

[F10] [[thm-integration-by-parts]]: for $C^1$ scalar functions on a compact interval, integration by parts gives the endpoint product minus the integral of the derivative of the other factor.

[F11] [[thm-heine-borel-rn]]: every closed bounded interval in $\mathbb R$ is compact and every open cover of it has a finite subcover.

[F12] [[thm-monotonicity-of-the-integral]]: for integrable $f\ge d>0$ on a nondegenerate interval $K=[u,v]$, $\int_u^v f\ge d(v-u)>0$.

[F13] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric set attains its minimum and maximum.

[F14] [[lem-gr-future-causal-classification-by-a-timelike-field]]: a future-directed timelike vector has negative pairing with the timelike time-orientation field.

[F15] [[thm-continuous-implies-integrable]]: a continuous real-valued function on a compact interval is Riemann integrable.

[F16] [[thm-additivity-over-subintervals]]: the integral over a compact interval is the sum of the integrals over any finite subdivision of that interval.

[F17] [[thm-bolzano-weierstrass]]: every bounded real sequence has a convergent subsequence.

[F18] [[def-real-numbers]], [[cor-cauchy-reals-lub-complete]]: the library's Cauchy-sequence field is the real line and is a complete ordered field; [[cor-archimedean-reciprocal]]: for every $\varepsilon>0$ there is a natural $k\ge1$ with $1/k<\varepsilon$.

[F19] [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]: if natural numbers $m>n\ge1$, then $0<1/m<1/n$ in the real field.


## Proof

**Proof technique:** direct.

1.1 The sets $z^{-1}(W)$, over chart domains $W$, form an open cover of $[a,b]$; by [F11] choose a finite subcover $V_1,\dots,V_r$. There is $\delta>0$ such that every closed subinterval of length $<\delta$ lies in one $V_j$: otherwise [A1] selects closed intervals $I_n$ of length $<1/n$ for each natural $n\ge1$, none contained in any $V_j$, and their midpoints form a bounded sequence in $[a,b]$; [F17] gives a convergent subsequence with limit $t\in[a,b]$ and strictly increasing indices $n_s$. Some $V_j$ contains $t$ and, being relatively open, contains $(t-\eta,t+\eta)\cap[a,b]$ for some $\eta>0$. Choose $N$ with $1/N<\eta/2$ by [F18]. Since $n_s$ is strictly increasing, it eventually exceeds $N$, so [F19] gives $|I_{n_s}|<1/n_s<1/N<\eta/2$; also the midpoint is eventually within $\eta/2$ of $t$. Thus $I_{n_s}\subset V_j$, a contradiction. Since $b-a>0$, [F18] applied to $\delta/(b-a)$ gives $k\ge1$ with $1/k<\delta/(b-a)$; hence $(b-a)/k<\delta$. Divide $[a,b]$ into $k$ equal closed subintervals; each is contained in a $V_j$, so each curve subsegment lies in one chart. For each such subsegment and its chart, the inverse image of that chart under the continuous variation map is open and contains $[t_j,t_{j+1}]\times\{0\}$; a finite subcover of this compact segment by product neighborhoods supplies $\epsilon_j>0$ keeping the whole subsegment in the chart for $|\epsilon|<\epsilon_j$. The minimum over finitely many segments gives a common parameter interval. [given, A1, F11, F17, F18, F19, construct]

2.1 On each chart subsegment, write $x_\epsilon^a(\tau)$ for the coordinates, $J^a=\partial_\epsilon x_\epsilon^a|_0$, and $U^a=\partial_\tau x_0^a$. Differentiating the free-action integrand under the integral by [F6], and applying [F7]–[F9] to $Q=g_{ab}(x_\epsilon)\partial_\tau x_\epsilon^a\partial_\tau x_\epsilon^b$ at $Q=-c^2$, gives $\delta S_{\rm free}=m\int\left(g_{ab}(\partial_\tau J^a)U^b+\tfrac12(\partial_cg_{ab})J^cU^aU^b\right)d\tau$. The integrand is continuous, hence Riemann integrable by [F15]. [step 1.1, given, F1, F6, F7, F8, F9, F15, algebra]

3.1 The factors $J^a$ and $g_{ab}U^b$ are $C^1$, so their derivatives are continuous and integrable by [F15]. Integrating the $\partial_\tau J^a$ term of step 2.1 by parts with [F10], and using the Christoffel formula and metric compatibility of [F2], gives on each subsegment $\delta S_{\rm free}=m[g(J,U)]_{t_j}^{t_{j+1}}-m\int_{t_j}^{t_{j+1}}g(J,\nabla_UU)\,d\tau$. When the subsegment endpoints are fixed, the boundary term vanishes and this is the chart-local specialization of [F3]; at internal subdivision points we retain the displayed term. [step 2.1, A1, F2, F3, F10, F15, algebra]

3.2 On each chart subsegment, $A_a(z(\tau))$ and $J^a$ are $C^1$, so their derivatives are continuous and integrable by [F15]. Differentiating the interaction integrand by [F6]–[F8] gives $q\bigl((\partial_cA_a)J^cU^a+A_a\partial_\tau J^a\bigr)$. Integration by parts [F10] yields $\delta S_{\rm int}=q[A(J)]_{t_j}^{t_{j+1}}+q\int_{t_j}^{t_{j+1}}(\partial_cA_a-\partial_aA_c)J^cU^a\,d\tau=q[A(J)]_{t_j}^{t_{j+1}}+q\int_{t_j}^{t_{j+1}}F_{ca}J^cU^a\,d\tau$, with the component ordering fixed by [F4] and the notation from step 2.1. [step 2.1, given, F4, F6, F7, F8, F10, F15]

4.1 Sum steps 3.1 and 3.2 over the finite subdivision. At each internal cut, the free boundary scalar $g(J,U)$ and interaction boundary scalar $A(J)$ agree in the adjacent charts, so their endpoint terms cancel. At $a,b$ they vanish because $J(a)=J(b)=0$. Repeated use of [F16] sums the remaining integrals to the stated first-variation formula. [step 3.1, step 3.2, given, F16, algebra]

5.1 Let $C_a:=-m(\nabla_UU)_a+qF_{ab}U^b$ be the continuous coefficient from step 4.1. If $C_{a_0}(\tau_0)\ne0$ at an interior point, continuity gives a chart subinterval $I$ on which it has constant sign and magnitude at least $d>0$; choose a nondegenerate compact interval $K=[\tau_-,\tau_+]\subset I$. Define $\sigma=1$ when $C_{a_0}(\tau_0)>0$ and $\sigma=-1$ when $C_{a_0}(\tau_0)<0$. Use [F5] to choose a cutoff $0\le\chi\le1$ equal to $1$ on $K$ and supported in $I$, and set the $a_0$ coordinate of a variation field to $\sigma\chi$ and its other components to zero. Since $K\cup\operatorname{supp}\chi$ is compact in $I$, [F13] applied to the identity function gives a compact interval $H\subset I$ containing it. On the compact support, $-g(U,U)=c^2$ and $-g(U,N)>0$ have positive minima by [F13] and [F14]. For each support point, continuity of the variation map and openness of the chart give an $\epsilon$-neighbourhood whose displacements stay in $O$; compactness gives one uniform neighbourhood. The perturbed norm and time-orientation pairing vary continuously on this compact support and equal $-c^2$ and a strictly negative value at $\epsilon=0$, respectively; the positive minima and compactness let us shrink that neighbourhood so every varied tangent stays timelike and future directed. Extending by $z_\epsilon=z$ outside the support gives an admissible fixed-endpoint variation. [step 4.1, given, F5, F11, F13, F14, construct]

6.1 On $H$, $f(\tau)=\sigma C_{a_0}(\tau)\chi(\tau)$ is nonnegative, and on $K$ it is at least $d$. It is continuous and hence integrable by [F15]; [F12] gives $\int_{\tau_-}^{\tau_+} f\,d\tau\ge d(\tau_+-\tau_-)>0$. Splitting $H$ at the endpoints of $K$ and applying [F16], nonnegativity on $H\setminus K$ yields $\int_H f\,d\tau\ge\int_K f\,d\tau$; since $\chi$ vanishes outside $H$, [F16] makes the first-variation integral over $[a,b]$ equal to the integral over $H$. Thus step 4.1 gives $\delta S>0$, contradicting stationarity. Therefore stationarity for every local chart-supported variation forces $C_a=0$ in the interior and, by continuity, at the endpoints. Conversely, $C_a=0$ makes step 4.1 vanish for every admissible variation; raising the covector index with the nondegenerate metric gives $m\nabla_UU=qF^\sharp(U)$. [step 4.1, step 5.1, A1, F1, F2, F12, F15, F16, algebra] ∎
