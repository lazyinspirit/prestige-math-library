---
id: lem-integrated-semigroup-orbits-belong-to-the-generator-domain
kind: lemma
title: "Time integrals of semigroup orbits lie in the generator domain"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-countable-choice
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - def-strongly-continuous-semigroup
  - lem-average-convergence-of-a-continuous-banach-valued-function
  - lem-linearity-of-the-bochner-integral
  - def-bochner-integrable-function
  - thm-bochner-integrability-criterion
  - lem-bochner-integral-norm-inequality
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-bounded-linear-operator
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Lemma 1.3.(iii)-(iv) and its proof, printed p. 51"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, proof of Corollary 11.10, printed pp. 255-258"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue-measure interfaces. Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $(A,D(A))$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]). For every $x\in X$ and every $t\ge0$ the Bochner integral $J_tx:=\int_0^tT(s)x\,ds$ belongs to $D(A)$, and $AJ_tx=T(t)x-x$. The integral is taken in the sense of [[def-bochner-integrable-function]]; the integrand is continuous, hence Bochner integrable on $[0,t]$.

## Facts & Assumptions

**Given:** Countable Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $(A,D(A))$ ([[def-strongly-continuous-semigroup]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]), and $x\in X$, $t\ge0$.

[F1] The generator is defined by $D(A)=\{y:\lim_{h\downarrow0}\frac{T(h)y-y}{h}\ \text{exists}\}$ and $Ay=$ that limit ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[F2] Every orbit $s\mapsto T(s)y$ is continuous on $[0,\infty)$, $T(s)$ is linear and bounded, and $T(s+r)=T(s)T(r)=T(r)T(s)$ for $s,r\ge0$ ([[def-strongly-continuous-semigroup]], [[def-bounded-linear-operator]]).

[F3] Average convergence ([[lem-average-convergence-of-a-continuous-banach-valued-function]]): a continuous curve on a compact interval is Bochner integrable, and its forward and backward averages converge to its value at the point.

[F4] Linearity of the Bochner integral over measurable sets ([[lem-linearity-of-the-bochner-integral]], [[def-bochner-integrable-function]]), including additivity for adjacent subintervals via indicators.

[F5] The Bochner integral is defined through integral-norm limits of integrable simple functions, and a strongly measurable function is Bochner integrable exactly when the integral of its norm is finite ([[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]]); the norm inequality $\|\int_Eu\|\le\int_E\|u\|$ holds ([[lem-bochner-integral-norm-inequality]]).

[F6] Bounded linear maps commute with Bochner integration: if $S\in\mathcal B(X)$ and $u$ is Bochner integrable, then $S\int u=\int Su$ ([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F7] Lebesgue measure and measurability are translation invariant ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).



## Proof

**Proof technique:** direct, differentiating the orbit integral at $0$ with the functional equation and the average-convergence lemma.

1.1 The orbit $s\mapsto T(s)x$ is continuous on the compact interval $[0,t]$ by [F2], hence Bochner integrable there by [F3]; therefore $J_tx:=\int_0^tT(s)x\,ds$ is a well-defined element of $X$. [F2, F3]

1.2 By [F6] applied to $T(h)$ and [F2], $T(h)J_tx=\int_0^tT(h)T(s)x\,ds=\int_0^tT(s+h)x\,ds$. [F2, F6]

1.3 Shift identity for continuous integrands: if $g$ is continuous on $[0,t+h]$, then $\int_0^tg(s+h)\,ds=\int_h^{t+h}g(u)\,du$. For an integrable simple function $s=\sum_jc_j\mathbf 1_{E_j}$ the identity holds termwise, since translating $E_j\cap[h,t+h]$ back by $h$ gives $E_j-h$ intersected with $[0,t]$, a set of the same measure by [F7]; for a nonnegative measurable function it follows by taking the supremum of the pairings of dominated simple functions, and for a Bochner integrable $g$ it follows by applying the scalar case to the nonnegative integrable $\|g-s_n\|$ and the simple case to $s_n$ along a defining approximation with $\int_h^{t+h}\|g-s_n\|\to0$ [F5]. A continuous $g$ on the compact interval is Bochner integrable by [F3]. [F3, F5, F7]

2.1 Adding the identity $\int_0^{t+h}=\int_0^h+\int_h^{t+h}=\int_0^t+\int_t^{t+h}$ of [F4], [steps 1.2 and 1.3] give $(T(h)-I)J_tx=\int_h^{t+h}T(u)x\,du-\int_0^tT(u)x\,du=\int_t^{t+h}T(u)x\,du-\int_0^hT(u)x\,du$. [F2, F4, step 1.2, step 1.3]

3.1 Dividing by $h>0$ and applying the average-convergence limits of [F3] to the continuous orbit at the points $t$ and $0$ (where $T(0)x=x$) yields $\frac{T(h)J_tx-J_tx}{h}=\frac1h\int_t^{t+h}T(u)x\,du-\frac1h\int_0^hT(u)x\,du\longrightarrow T(t)x-x$. [F2, F3, step 2.1]

4.1 By the definition of the generator [F1], the convergence of these right difference quotients means exactly that $J_tx\in D(A)$ and $AJ_tx=T(t)x-x$. [F1, step 3.1]

5.1 Since $x\in X$ and $t\ge0$ were arbitrary, for every $x$ and every $t$ the integral $J_tx$ lies in $D(A)$ and $A\int_0^tT(s)x\,ds=T(t)x-x$; at $t=0$ both sides are $0$. [step 1.1, step 4.1] ∎
