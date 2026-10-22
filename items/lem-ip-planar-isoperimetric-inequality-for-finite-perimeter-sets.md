---
id: lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets
kind: lemma
title: Sharp planar isoperimetric inequality for finite-perimeter sets
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-smooth-coarea
  - lem-ip-bv-strict-approximation
  - lem-ip-bv-test-field-characterization-and-lsc
  - def-countable-choice
  - thm-morse-sard-for-euclidean-maps
  - lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle
  - cor-greens-theorem-from-general-stokes
  - thm-parseval-identity-for-fourier-series
  - lem-ip-vector-radon-variation-is-radon
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §3.4"
      url: "https://arxiv.org/pdf/1711.06495"
      locator: "§3.4, planar isoperimetric estimate used in the density argument"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§7.6, planar finite-perimeter and isoperimetric results"
---

## Statement

Assume Countable Choice. Every Lebesgue-measurable set $E\subseteq\mathbb R^2$ with finite area and finite perimeter satisfies
$$4\pi |E|\le P(E;\mathbb R^2)^2.$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|Area is Lebesgue measure and perimeter is the total variation of the distributional derivative of the indicator.]]

## Facts & Assumptions

**Given:** Countable Choice and a measurable $E\subseteq\mathbb R^2$ with $|E|<\infty$ and $P(E;\mathbb R^2)<\infty$.

[A1] Countable Choice is used by strict smooth approximation and the regular-level selections. ([[def-countable-choice]])

[F1] Every finite-perimeter $L^1$ function on $\mathbb R^2$ has compactly supported smooth strict approximants $u_j$: $u_j\to u$ in $L^1$ and $\int|\nabla u_j|\to TV(u;\mathbb R^2)$. ([[lem-ip-bv-strict-approximation]])

[F2] For $u\in C^\infty(\mathbb R^2)\cap L^1$ with integrable gradient, the integral of its gradient norm equals the sum of the perimeter integrals of its positive-superlevel and negative-sublevel sets; outside a null set of levels the levels are regular and have finite perimeter. ([[lem-ip-bv-smooth-coarea]], [[thm-morse-sard-for-euclidean-maps]])

[F3] The distributional total variation is the supremum over smooth compactly supported vector fields of norm at most one; on a compact smooth planar domain, Stokes gives the boundary flux formula needed to identify the distributional derivative of its indicator. ([[lem-ip-bv-test-field-characterization-and-lsc]], [[cor-greens-theorem-from-general-stokes]])

[F4] The partition variation of a vector Radon measure is a Radon measure; for a unit normal field $\nu$ on a compact smooth curve, the variation of $\nu\,\mathcal H^1$ is $\mathcal H^1$. ([[lem-ip-vector-radon-variation-is-radon]])

[F5] A nonempty compact connected smooth one-dimensional manifold without boundary is diffeomorphic to a circle. ([[lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle]])

[F6] Parseval's identity holds for Fourier series on the circle: the squared $L^2$ norm is the sum of squared Fourier coefficients. ([[thm-parseval-identity-for-fourier-series]])

## Proof

1.1 First suppose $G\subset\mathbb R^2$ is a bounded open set with compact smooth boundary $\Gamma$. The boundary is a compact smooth one-dimensional manifold without boundary. Connected coordinate arcs cover $\Gamma$; compactness gives a finite subcover, so $\Gamma$ has finitely many connected components. By [F5] each component is a smooth embedded circle. Parametrize component $i$ by an orientation-compatible unit-speed smooth periodic curve $\gamma_i:[0,L_i]\to\mathbb R^2$, where $L_i$ is its length. The divergence formula in [F3] gives $D\chi_G=-\nu\,\mathcal H^1|_\Gamma$ with $\nu$ the outward normal, and [F4] therefore gives $P(G;\mathbb R^2)=\mathcal H^1(\Gamma)=\sum_iL_i$. Applying Stokes in [F3] to $\omega=(x\,dy-y\,dx)/2$, whose exterior derivative is $dx\wedge dy$, gives $$|G|=\frac12\sum_i\int_0^{L_i}(\gamma_{i,1}\gamma'_{i,2}-\gamma_{i,2}\gamma'_{i,1})\,ds.$$ For each $i$, translating $\gamma_i$ by its arclength mean $\bar\gamma_i=L_i^{-1}\int_0^{L_i}\gamma_i(s)\,ds$ does not change this integral, since each coordinate derivative integrates to zero over a period. Write $z_i=\gamma_i-\bar\gamma_i$. [F3, F4, F5, given, construct]

1.2 Now let $E$ be as in the Statement and put $u=\chi_E$. By [F1], choose $u_j\in C_c^\infty(\mathbb R^2)$ with $e_j:=\|u_j-\chi_E\|_1\to0$ and $a_j:=\int|\nabla u_j|\to P(E;\mathbb R^2)$. If $|E|=0$, the result is immediate. If some $e_j=0$, continuity forces $u_j$ to take only the values $0$ and $1$ everywhere; connectedness of $\mathbb R^2$ and compact support then force $u_j=0$, contradicting $|E|>0$. Thus $e_j>0$. Let $\tau_j=\sqrt{e_j}$ and discard finitely many terms so $0<\tau_j<\min\{1/2,|E|/2\}$. For every $t\in I_j:=[\tau_j,1-\tau_j]$, a point where $\chi_E$ and $\chi_{\{u_j>t\}}$ differ contributes at least $\tau_j$ to $|u_j-\chi_E|$; hence $|\{u_j>t\}\mathbin\triangle E|\le e_j/\tau_j=\tau_j$. [A1, F1, given, choose]

2.1 For a smooth $L$-periodic scalar function $z$ of mean zero, set $v(\theta)=z(L\theta/(2\pi))$. Its zeroth Fourier coefficient vanishes. Integration by parts gives $\widehat{v'}(k)=ik\widehat v(k)$ for every integer $k$. Parseval [F6] and $k^2\ge1$ for $k\ne0$ imply $\int_0^{2\pi}|v|^2\,d\theta\le\int_0^{2\pi}|v'|^2\,d\theta$. Changing variables yields $$\int_0^L|z(s)|^2\,ds\le\left(\frac L{2\pi}\right)^2\int_0^L|z'(s)|^2\,ds.$$ Apply this to both coordinates of $z_i$ and add. Since $|z'_i|=|\gamma'_i|=1$, the Cauchy–Schwarz inequality gives $$\left|\frac12\int_0^{L_i}(z_{i,1}z'_{i,2}-z_{i,2}z'_{i,1})\,ds\right|\le\frac12\|z_i\|_{L^2}\|z'_i\|_{L^2}\le\frac{L_i^2}{4\pi}.$$ Summing over the finitely many boundary components and using $\sum_iL_i^2\le(\sum_iL_i)^2$ proves $4\pi|G|\le P(G;\mathbb R^2)^2$. [F6, step 1.1, algebra]

3.1 By [F2], the measurable level-perimeter function has integral at most $a_j$ on $I_j$, whose length is $1-2\tau_j$. For any $\varepsilon>0$, the set of $t\in I_j$ with $P(\{u_j>t\};\mathbb R^2)\le a_j/(1-2\tau_j)+\varepsilon$ has positive measure; otherwise its integral over $I_j$ would exceed $a_j$. The critical values of $u_j$ form a null set by [F2], so take $\varepsilon=1/(j+1)$ and choose such a regular value $t_j$. Since $t_j>0$ and $u_j$ is compactly supported, $G_j:=\{u_j>t_j\}$ is bounded and its closure is a compact smooth domain with boundary $\{u_j=t_j\}$. Thus step 2.1 applies to $G_j$, and $$|G_j\mathbin\triangle E|\le\tau_j,\qquad P(G_j;\mathbb R^2)\le\frac{a_j}{1-2\tau_j}+\frac1{j+1}.$$ The right side has limit $P(E;\mathbb R^2)$, while $|G_j|\to|E|$. [A1, F2, step 2.1, step 1.2, choose]

4.1 Step 2.1 gives $4\pi|G_j|\le P(G_j;\mathbb R^2)^2$ for every selected $j$. Taking upper limits, the convergence $|G_j|\to|E|$ and the perimeter upper bound from step 3.1 give $4\pi|E|\le P(E;\mathbb R^2)^2$. This proves the claimed inequality for every finite-measure finite-perimeter set. [step 2.1, step 3.1, algebra] ∎

