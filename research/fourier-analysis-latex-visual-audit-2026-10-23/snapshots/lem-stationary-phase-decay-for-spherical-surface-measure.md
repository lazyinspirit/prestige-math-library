---
id: lem-stationary-phase-decay-for-spherical-surface-measure
kind: lemma
title: Stationary-phase decay for spherical surface measure
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-sphere-finite-graph-charts-and-surface-density
- lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase
- lem-euclidean-chart-measure-agrees-with-polar-surface-measure
- thm-polar-coordinates-formula-for-lebesgue-measure
- thm-algebra-of-derivatives
- thm-chain-rule
- def-ck-and-multi-index-notation-in-several-variables
- def-the-standard-smooth-step-function
- cor-primitives-of-a-continuous-function
- lem-smooth-bump-between-concentric-euclidean-balls
- def-jacobian-matrix-and-gradient
- def-countable-choice
- def-partition-of-unity-subordinate-to-a-cover
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: completed-cumulative-mathematical-review
    date: 2026-10-03
    scope: "Cumulative verification supported by existing completed mathematical readings. Original complete Step 5a reader evidence research/frontier-38-owner-30-reader-6.md, followed by completed Step 7 repair/adjudication reasoning research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u6.json, exact post_sha256 b7bf39d3287165a66308bc356556fa7d4ff203fa60de40a1d402fa3649751a34 with publication status normalized back to draft. The later reasoning covers the substantive changes; its local repair/self-review qualifications remain applicable. This reconciliation adds no new mathematical review, independent post-repair audit, source reading or judge acceptance."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 step7-v2-initial-r1-u6 dispatch"
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Terence Tao, Lecture Notes 8 for Math 247B
    url: https://www.math.ucla.edu/~tao/247b.1.07w/notes8.pdf
    locator: '§4, printed pp.12–13: full chart proof and decay estimate at the end of p.13.'
---

## Statement

Assume Countable Choice and let $n\ge2$. With $\sigma$ the polar surface measure on $S^{n-1}$, $|\widehat\sigma(\xi)|\le C_n(1+|\xi|)^{-(n-1)/2}$ for every $\xi\in\mathbb R^n$, and $\check\sigma$ obeys the same bound.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, the polar surface measure $\sigma$ on $S^{n-1}$ and its transform $\widehat\sigma(\xi)=\int_{S^{n-1}}e^{-2\pi i\xi\cdot\omega}\,d\sigma(\omega)$.

[F1] Sphere charts and partition: the $2n$ hemispheres of the graph charts $X_i^\varepsilon(y)=(y_1,\dots,y_{i-1},\varepsilon\sqrt{1-|y|^2},y_i,\dots,y_{n-1})$ cover $S^{n-1}$, the chart measure is $\sigma$, and there is a finite smooth partition of unity $(\chi_j)$ subordinate to the images of these charts, with compactly supported pieces; the density of each chart is $(1-|y|^2)^{-1/2}$ and the composition with a chart turns $\int \psi\,d\sigma$ into an integral of $\psi(X_i^\varepsilon(y))$ times that density over the unit ball. ([[lem-sphere-finite-graph-charts-and-surface-density]], [[def-partition-of-unity-subordinate-to-a-cover]])

[F2] Orthogonal invariance: orthogonal transformations preserve $\sigma$, so for $\xi=r\nu$ with $r\ge0$, $\nu\in S^{n-1}$ and an orthogonal $R$ with $R\nu=e_n$, $\widehat\sigma(\xi)=\int e^{-2\pi ir\omega\cdot e_n}\,d\sigma(\omega)=\widehat\sigma(re_n)$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F3] Stationary phase: for $d\ge1$, a compactly supported smooth amplitude $b$ on $\mathbb R^d$ and a real phase $\psi\in C^\infty(\mathbb R^d)$: if $\nabla\psi$ does not vanish on a neighbourhood of $\operatorname{supp}b$, then $|\int e^{2\pi i\lambda\psi}b|\le C_N\lambda^{-N}$ for all $N$; if $\psi$ has exactly one stationary point in $\mathbb R^d$, lying in the interior of $\operatorname{supp}b$ with invertible Hessian, then $|\int e^{2\pi i\lambda\psi}b|\le C\lambda^{-d/2}$ for $\lambda\ge1$, with constants depending on finitely many derivatives of $b,\psi$, on a lower bound for $|\det D^2\psi|$ at the point and on a lower bound for $|\nabla\psi|$ off a small ball about it. ([[lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase]])

[F4] The graphing functions $h(y)=\sqrt{1-|y|^2}$ are smooth on the unit ball. Differentiating $h^2=1-|y|^2$ gives $\nabla h=-y/h$, and differentiating again gives $D^2h(0)=-I$. The nonpolar coordinate phase $y_{n-1}$ has gradient $e_{n-1}$. ([[lem-sphere-finite-graph-charts-and-surface-density]], [[def-jacobian-matrix-and-gradient]])

[F5] Trivial bound: $|\widehat\sigma(\xi)|\le\sigma(S^{n-1})=n\lambda_n(B_1^n)<\infty$ for every $\xi$, and for $|\xi|\le1$ one has $(1+|\xi|)^{-(n-1)/2}\ge2^{-(n-1)/2}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-sphere-finite-graph-charts-and-surface-density]])


[F6] One-variable product, quotient and chain rules compute coordinate partials, and smoothness means continuity of all ordered partials. The standard smooth step $s_0$ is smooth, takes values in $[0,1]$, is zero on $(-\infty,0]$ and one on $[1,\infty)$. Every continuous real function on an interval has the integral primitive, unique up to a constant. ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-the-standard-smooth-step-function]], [[cor-primitives-of-a-continuous-function]])

[F7] For $0<r<R$ there is a smooth bump equal to one on $\overline B_r(0)$ and with support inside $B_R(0)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

**Proof technique:** direct; rotate to the preferred axis, split the sphere with the finite graph partition, and apply the non-stationary and stationary alternatives of the stationary-phase lemma to each chart, with the polar caps contributing the exponent $(n-1)/2$.

1.1 Reduction to the axis. For $\xi\ne0$ write $\xi=r\nu$ with $r=|\xi|$ and $\nu\in S^{n-1}$, and choose an orthogonal map $R$ with $R\nu=e_n$. By the orthogonal invariance of [F2], $\widehat\sigma(\xi)=\widehat\sigma(re_n)=\int_{S^{n-1}}e^{-2\pi ir\omega\cdot e_n}\,d\sigma(\omega)$; the same identity with $\xi=0$ is trivial and is covered by the bound of [F5] for $r\le1$. It therefore suffices to estimate $J(r):=\widehat\sigma(re_n)$ for $r\ge1$ and to add the trivial bound at small $r$. [F2, F5, given]

1.2 Splitting with the chart partition. Let $(\chi_j)$ be the finite smooth partition of [F1] subordinate to the hemisphere charts, so that $J(r)=\sum_jJ_j(r)$ with $J_j(r)=\int_{S^{n-1}}e^{-2\pi ir\omega\cdot e_n}\chi_j(\omega)\,d\sigma(\omega)$. Each $\chi_j$ is supported in the image of one chart $X_i^\varepsilon$, and by [F1] the chart formula writes $J_j(r)$ as an integral over the unit ball $B\subseteq\mathbb R^{n-1}$ of $e^{-2\pi ir\Phi(y)}b_j(y)\,dy$ with $b_j:=(\chi_j\circ X_i^\varepsilon)\,(1-|y|^2)^{-1/2}$ and the smooth phase $\Phi(y)=y_{n-1}$ if $i\ne n$, or $\Phi(y)=\varepsilon\sqrt{1-|y|^2}$ if $i=n$ (the $n$-th coordinate of the chart being $\varepsilon\sqrt{1-|y|^2}$). The support of $\chi_j\circ X_i^\varepsilon$ is compact inside $B$, so $b_j$ extends by zero to $C_c^\infty(\mathbb R^{n-1})$. Coordinate-line product rules in [F6] justify its smoothness. [F1, F6, given]

2.1 The non-stationary charts. If $i\ne n$, then $\Phi(y)=y_{n-1}$ has $\nabla\Phi=e_{n-1}\ne0$ everywhere, so the first alternative of [F3] applied to the global phase $-y_{n-1}$ with $d=n-1$ and $\lambda=r$ gives $|J_j(r)|\le C_Nr^{-N}$ for every $N$; such patches contribute negligibly for every $N$. [F3, F4, step 1.2]

2.2 A global polar phase. For a polar amplitude $b_j$, choose $0<r_0<r_1<1$ with $\operatorname{supp}b_j\subset B_{r_0}(0)$. Put $\kappa(t)=1-s_0((t-r_0^2)/(r_1^2-r_0^2))$ and define $a(t)=\kappa(t)(1-t)^{-1/2}+1-\kappa(t)$ for $t<r_1^2$, and $a(t)=1$ for $t\ge r_1^2$. Rationalization gives $(\sqrt u)' =1/(2\sqrt u)$ for $u>0$; repeated product and quotient rules show that $(1-t)^{-1/2}$ is smooth for $t<1$. Thus $a$ is a positive smooth function on $\mathbb R$: the first formula is smooth for $t<1$, and flatness of the smooth cutoff glues it to one at $r_1^2$. Set $A(s)=1-\tfrac12\int_0^s a(t)\,dt$. By [F6], $A'=-a/2$, so $A$ is smooth. On $s\le r_0^2$ its derivative and value at zero agree with $\sqrt{1-s}$, hence $A(s)=\sqrt{1-s}$. Thus $\widetilde\Phi(y)=\varepsilon A(|y|^2)$ agrees with the original phase near $\operatorname{supp}b_j$, is smooth on all of $\mathbb R^{n-1}$, and satisfies $\nabla\widetilde\Phi(y)=-\varepsilon a(|y|^2)y$. Its only stationary point is zero, with Hessian $-\varepsilon I$. [F4, F6, step 1.2, construct, algebra]

3.1 Application at the pole. Choose a bump $\beta$ equal to one near zero and supported inside $B$ by [F7], and a real $M>\sup|b_j|$. Both $b_j+M\beta$ and $M\beta$ have zero in the interior of their supports, since $\operatorname{Re}(b_j+M\beta)>0$ near zero. Apply the stationary alternative [F3] to each amplitude with the global phase $-\widetilde\Phi$ from step 2.2 and $\lambda=r$, then subtract their integrals. This gives $|J_j(r)|\le C_jr^{-(n-1)/2}$ without any assumption that zero belongs to the original amplitude support. [F3, F7, step 2.2, algebra]

4.1 Summation and the small-frequency bound. Summing the finitely many chart contributions of the non-stationary and polar-cap steps gives $|\widehat\sigma(\xi)|\le C'_n r^{-(n-1)/2}$ for $r=|\xi|\ge1$. For $|\xi|\le1$, [F5] gives $|\widehat\sigma(\xi)|\le n\lambda_n(B_1^n)\le n\lambda_n(B_1^n)2^{(n-1)/2}(1+|\xi|)^{-(n-1)/2}$. Taking $C_n:=2^{(n-1)/2}\max\{C'_n,\ n\lambda_n(B_1^n)\}$ yields the asserted bound for every $\xi$. Since $\check\sigma(\xi)=\widehat\sigma(-\xi)$ and $|-\xi|=|\xi|$, the same bound holds for $\check\sigma$. [F5, step 2.1, step 3.1, algebra]

5.1 Conclusion. Step 4.1 proves $|\widehat\sigma(\xi)|\le C_n(1+|\xi|)^{-(n-1)/2}$ for all $\xi$, and the identity $\check\sigma(\xi)=\widehat\sigma(-\xi)$ transfers it to $\check\sigma$. Countable Choice is inherited from the sphere chart and partition suppliers. [step 1.1, step 4.1] ∎
