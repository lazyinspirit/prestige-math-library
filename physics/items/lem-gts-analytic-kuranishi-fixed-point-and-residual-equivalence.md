---
id: lem-gts-analytic-kuranishi-fixed-point-and-residual-equivalence
kind: lemma
title: Analytic Kuranishi fixed point and detection of its full Maurer–Cartan residual
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - lem-gts-kodaira-spencer-forms-form-dgla
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - cor-sobolev-algebra-above-the-critical-index
  - thm-banach-fixed-point
dependency_roles:
  lem-gts-kodaira-spencer-forms-form-dgla: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Assume full AC. Let X be a compact complex manifold of complex dimension n, choose smooth Hermitian metrics, and put $L^q=A^{0,q}(X,T_X^{1,0})$, $d=\bar\partial$, with the bracket of [[lem-gts-kodaira-spencer-forms-form-dgla]]. Write $H_q$ for harmonic projection, $G_q$ for the Green operator of the Dolbeault Laplacian, and $Q=d^*G$. For an integer $s>n+2$, there are neighborhoods of zero in the finite-dimensional complex harmonic space $\mathcal H^1$ and in $H^s(L^1)$ with the following properties. The equation
$$\xi(t)=t-\tfrac12Q[\xi(t),\xi(t)]$$
has a unique small solution, depending holomorphically on t as an $H^s$-valued function. It satisfies $d^*\xi(t)=0$, $H_1\xi(t)=t$, and $D\xi(0)t=t$. The holomorphic map $\kappa(t)=\tfrac12H_2[\xi(t),\xi(t)]$ has $\kappa(0)=D\kappa(0)=0$, and
$$\kappa(t)=0\quad\Longleftrightarrow\quad d\xi(t)+\tfrac12[\xi(t),\xi(t)]=0.$$
Every sufficiently small $H^s$ Maurer–Cartan element with $d^*\xi=0$ is exactly one such $\xi(t)$, with $t=H_1\xi$. Thus the analytic zero germ of κ parametrizes precisely the small coclosed Sobolev Maurer–Cartan elements. This assertion does not construct a complex analytic deformation family or assert that smooth diffeomorphisms put all deformations into this slice.

## Facts & Assumptions

**Given:** Full AC and the compact Hermitian complex-manifold data in the Statement.

[F1] The coordinate bracket is a differential graded Lie bracket, with $d[\alpha,\beta]=[d\alpha,\beta]+(-1)^{\deg\alpha}[\alpha,d\beta]$. [[lem-gts-kodaira-spencer-forms-form-dgla]]

[F2] A compact formally symmetric scalar-positive second-order operator has the stated smooth finite harmonic kernel and Green operator, bounded $G:H^k\to H^{k+2}$ for every nonnegative integer k; the finite-chart Sobolev spaces are Hilbert, have smooth dense subspaces, and have the stated compact inclusions and embeddings. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]

[F3] At an integer order exceeding half the real dimension, multiplication is bounded on Sobolev spaces. The contraction theorem applies to a closed ball of a Banach space. [[cor-sobolev-algebra-above-the-critical-index]] [[thm-banach-fixed-point]]

## Proof

1.1 The operator $\Delta_q=dd^*+d^*d$ on each $L^q$ has positive scalar principal symbol and is formally symmetric. Thus [F2] applies. A harmonic section h has $dh=d^*h=0$, since $(\Delta h,h)=\|dh\|^2+\|d^*h\|^2$. On smooth sections $\Delta d=d\Delta$. The section $dGx$ is orthogonal to harmonic sections because $(dGx,h)=(Gx,d^*h)=0$, and $\Delta dGx=dx$. These characterize $Gdx$ as well, so $dG=Gd$; the same argument gives $d^*G=Gd^*$. Consequently
$$I=H+dQ+Qd,\qquad Q^2=0,\qquad HQ=QH=0.$$
These identities extend to all Sobolev orders used below by smooth density and boundedness. In particular $Q:H^k\to H^{k+1}$ is bounded for $k\ge0$. [F2, given, algebra]

2.1 Work in finitely many precompact holomorphic and bundle charts with smooth cutoffs. The bracket is a finite sum of products of one coefficient and one first derivative. The Sobolev multiplication estimate and bounded smooth coefficient multiplication therefore give
$$\|[u,v]\|_{s-1}\le C\|u\|_s\|v\|_s,\qquad \|[r,u]\|_{s-2}\le C\|r\|_{s-1}\|u\|_s.$$
For the second estimate both factors in each product have at least order $s-2>n$ after the one derivative is taken. A finite partition and the Leibniz rule transfer the estimates to the global finite-chart norms. Thus $B(u,v)=Q[u,v]$ is bounded complex bilinear $H^s\times H^s\to H^s$. Also $Q[r,u]$ has $H^{s-1}$ norm bounded by $C_1\|r\|_{s-1}\|u\|_s$. [F1, F2, F3, step 1.1, algebra]

3.1 Choose $r>0$ so small that the self-map $F_t(u)=t-\tfrac12B(u,u)$ has Lipschitz constant at most $1/2$ on the closed radius-r ball of $H^s$, and also $C_1r<1/2$. Taking $\|t\|_s\le r/2$ and reducing r if necessary makes this ball invariant. The difference estimate is $\|F_t(u)-F_t(v)\|_s\le (C/2)(\|u\|_s+\|v\|_s)\|u-v\|_s$. By [F3] there is a unique fixed point there. Iteration starting at zero converges uniformly for t in this parameter ball, with an error bounded by a common geometric sequence. Every iterate is a complex polynomial in the finitely many harmonic coordinates of t. On any smaller complex coordinate polydisc, the vector-valued Cauchy integral formula for these polynomials passes to the limit in norm. Iterating that formula over the finitely many coordinates gives a norm-convergent local power series for the limit. This proves holomorphic dependence without invoking an analytic Banach implicit-function theorem. The fixed-point equation also gives $\xi(t)=t+O(\|t\|^2)$. [F2, F3, step 2.1, construct, algebra]

4.1 By step 1.1, $d^*Q=0$ and $H_1Q=0$, so the fixed point obeys $d^*\xi=0$ and $H_1\xi=t$. Since the bracket is bounded complex bilinear and $H_2$ is bounded with finite-dimensional smooth range, $\kappa=\tfrac12H_2[\xi,\xi]$ is holomorphic and vanishes to second order. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Let $R=d\xi+\tfrac12[\xi,\xi]\in H^{s-1}(L^2)$. Apply $d$ to the fixed-point equation and use $dQ=I-H-Qd$ to obtain
$$R=\tfrac12H_2[\xi,\xi]+\tfrac12Qd[\xi,\xi].$$
The graded derivation identity gives $d[\xi,\xi]=2[d\xi,\xi]$. Graded Jacobi in characteristic zero gives $[\,[\xi,\xi],\xi]=0$. Both identities hold at these Sobolev orders by approximation and the estimates of step 2.1. Substituting $d\xi=R-\tfrac12[\xi,\xi]$ therefore gives the exact identity
$$R=\kappa+Q[R,\xi].$$
If κ is zero, step 2.1 implies $\|R\|_{s-1}\le C_1r\|R\|_{s-1}$, hence R is zero. Conversely $H_2d\xi=0$, so $H_2R=\kappa$; thus R zero implies κ zero. No elliptic regularity or effectivity assertion is being substituted for this residual calculation. [F1, step 1.1, step 2.1, step 4.1, algebra]

6.1 Suppose $\zeta\in H^s(L^1)$ is sufficiently small, $d^*\zeta=0$, and $d\zeta+\tfrac12[\zeta,\zeta]=0$. Hodge decomposition gives $\zeta=H_1\zeta+dQ\zeta+Qd\zeta$. Since $d^*\zeta=0$ and $Q=Gd^*$, the middle term is zero. Therefore $\zeta=H_1\zeta-\tfrac12Q[\zeta,\zeta]$. Uniqueness in step 3.1 identifies it with $\xi(H_1\zeta)$. The inverse parameter map is the continuous complex-linear projection $H_1$. The zero germ of κ is a finite-dimensional analytic germ with tangent space $\mathcal H^1$, because κ has zero differential. For dimension-zero X there are no positive-degree forms, so all assertions hold on the zero vector space. This proves exactly the coclosed analytic Maurer–Cartan parametrization stated above. [step 1.1, step 3.1, step 4.1, step 5.1, algebra] ∎
