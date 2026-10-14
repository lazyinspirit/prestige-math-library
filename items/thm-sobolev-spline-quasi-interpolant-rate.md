---
id: thm-sobolev-spline-quasi-interpolant-rate
kind: theorem
title: Sobolev approximation by local spline quasi-interpolants
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-local-spline-quasi-interpolant, thm-spline-polynomial-reproduction, def-sobolev-space-wkp-and-its-norm, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-holder-inequality-for-integrals, def-orthogonal-projection, prop-orthogonal-projection-formula-and-linearity, thm-orthogonal-projection-is-the-unique-nearest-point, prop-pythagorean-parallelogram-and-polarisation-identities]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §§2.1–2.2, Theorem 32 and Example 33
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Statement

Assume the Axiom of Choice. Let $p\in\mathbb N_0$, $0\le l\le p$, and $1\le q\le\infty$. Let $\mathcal T$ be a nonempty family of clamped degree-$p$ knot meshes on $[a,b]$, and let $(Q_\xi)_{\xi\in\mathcal T}$ be a mesh-uniform bounded local quasi-interpolant family as in [[def-local-spline-quasi-interpolant]], with common constants $M$ and $C_Q$. Fix $\xi\in\mathcal T$, write $Q=Q_\xi$, and let $f\in W^{l+1,q}(a,b;\mathbb R)$ with its continuous Sobolev representative. For each nonempty cell $I_m$ of $\xi$, let $J_m$ be its corresponding neighborhood and let $h_m$ be the largest cell length in $J_m$. Then
$$\|f-Qf\|_{L^q(I_m)}\le (1+C_Q)\frac{M^{l+1}}{l!}h_m^{l+1}\|D^{l+1}f\|_{L^q(J_m)}.$$
Writing $h=\max_m h_m$, the global bound is
$$\|f-Qf\|_{L^q([a,b])}\le (1+C_Q)\frac{M^{l+1+1/q}}{l!}h^{l+1}\|D^{l+1}f\|_{L^q([a,b])},$$
where $1/q=0$ for $q=\infty$. In particular, on a uniform mesh with interior knots of multiplicity $p+1$, the cellwise $L^2$ projector onto $\mathcal P_p$ is a local quasi-interpolant and gives the order-$h^s$ approximation bound for every integer $1\le s\le p+1$.

## Facts & Assumptions

**Given:** AC; $p\in\mathbb N_0$, $0\le l\le p$, $1\le q\le\infty$; a mesh-uniform family $(Q_\xi)_{\xi\in\mathcal T}$ and a fixed mesh $\xi\in\mathcal T$; and real-valued $f\in W^{l+1,q}(a,b;\mathbb R)$.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]]. It is used through the supplied one-dimensional Sobolev representative theorem for Taylor values and integral remainders.

[A2] $0\le l\le p$, $1\le q\le\infty$, real-valued $f\in W^{l+1,q}(a,b;\mathbb R)$, and $Q_\xi$ belongs to the mesh-uniform family from [[def-local-spline-quasi-interpolant]].

[F1] The $W^{l+1,q}$ class has weak derivatives through order $l+1$ in $L^q$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Under AC, each one-dimensional $W^{1,q}$ class has a unique absolutely continuous representative on the closed finite interval, with increments equal to integrals of its weak derivative ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F3] For conjugate exponents, $\int|uv|\le\|u\|_q\|v\|_{q'}$; in particular the $L^q$ norm bounds the integral on a finite interval, with the usual $q=1,\infty$ endpoint conventions ([[thm-holder-inequality-for-integrals]]).

[F4] Orthogonal vectors satisfy the Pythagorean identity ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

[F5] In ZF, the Axiom of Choice implies Countable Choice and the prescribed-start form of Dependent Choice used by the Sobolev and one-dimensional representative interfaces ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Proof

**Proof technique:** direct.

1.1 On any neighborhood $J=[c,d]$, use the continuous representatives of $D^jf$, $0\le j\le l$, supplied by [F2]. Their Sobolev-class convention [F1] and the choice hypotheses for [F2] are available under [A1] by [F5]. Repeated integration by parts for absolutely continuous functions gives the Taylor identity $f(x)-T_{c,l}f(x)=\frac1{l!}\int_c^x(x-t)^lD^{l+1}f(t)\,dt,$ where $T_{c,l}f(x)=\sum_{j=0}^lD^jf(c)(x-c)^j/j!$. For completeness, the case $l=0$ is the increment formula in [F2]; passing from order $l-1$ to $l$ integrates $\int_c^x(x-t)^{l-1}D^lf(t)dt$ by parts with antiderivative $-(x-t)^l/l$, producing the degree-$l$ endpoint term and the displayed remainder. For finite $q$, Hölder [F3] bounds the pointwise remainder by $|J|^{l+1/q'}/l!\,\|D^{l+1}f\|_{L^q(J)}$, where $1/q'=1-1/q$ and $1/q'=0$ for $q=1$; multiplying by $|J|^{1/q}$ gives $\|f-T_{c,l}f\|_{L^q(J)}\le |J|^{l+1}\|D^{l+1}f\|_{L^q(J)}/l!$. For $q=\infty$, integrating the kernel in the remainder gives the same bound. [A1, A2, F1, F2, F3, F5, given, algebra]

2.1 Choose $c$ as the left endpoint of $J_m$ and write $T=T_{c,l}f$. Since $Q$ reproduces $\mathcal P_l$, $QT=T$. Because $I_m\subseteq J_m$, the triangle inequality and local stability give $\|f-Qf\|_{L^q(I_m)}\le\|f-T\|_{L^q(I_m)}+\|Q(f-T)\|_{L^q(I_m)}\le(1+C_Q)\|f-T\|_{L^q(J_m)}.$ The definition gives $|J_m|\le Mh_m$; applying step 1.1 proves the stated local estimate. [A2, F1, step 1.1, given, algebra]

3.1 Raise the local estimates to the $q$th power and sum over the disjoint mesh cells. Each point belongs to at most $M$ neighborhoods, so $\sum_m\|D^{l+1}f\|_{L^q(J_m)}^q\le M\|D^{l+1}f\|_{L^q([a,b])}^q$. Taking the $q$th root and using $h_m\le h$ gives the stated global bound for finite $q$. For $q=\infty$, take the maximum of the local bounds; the factor $M^{1/q}$ is $1$. [A2, step 2.1, given, algebra]

4.1 For a uniform mesh with interior knots repeated $p+1$ times, $S_{p,\xi}$ is the space of independent degree-$p$ polynomials on the cells by the definition and basis theorem. On a cell $I$, use the real $L^2(I)$ pairing $\langle u,v\rangle_I=\int_Iuv$: it is finite by Hölder [F3], bilinear and symmetric by linearity of the integral, and positive definite since $\int_Iu^2=0$ implies each set $\{|u|\ge1/m\}$ has measure zero, hence $u=0$ almost everywhere. Put $\phi_j(x)=x^j$, $0\le j\le p$, and $G_{ij}=\langle\phi_i,\phi_j\rangle_I$. For any nonzero coefficient vector $c$, $c^TGc=\int_I(\sum_jc_jx^j)^2>0$, since a nonzero polynomial has only finitely many roots; hence $G$ is invertible. For $f\in L^2(I)$, put $b_i=\langle f,\phi_i\rangle_I$ and $c=G^{-1}b$, and define $Q_hf=\sum_{j=0}^p c_j\phi_j$ on $I$. The defining equations give $\langle f-Q_hf,\phi_i\rangle_I=0$ for every $i$. Thus $Q_h$ is linear, fixes $\mathcal P_p$, and has residual orthogonal to its range; Pythagoras [F4] gives $\|Q_hf\|_{L^2(I)}\le\|f\|_{L^2(I)}$. Assign knot values from the cell on their right and the value at $b$ by the left limit. The cellwise polynomials then form a member of $S_{p,\xi}$. As $J$ varies, these operators form a mesh-uniform local quasi-interpolant family with one-cell neighborhoods, $M=1$, and $C_Q=1$. Applying steps 1.1–3.1 with $l=s-1$ gives $\|f-Q_hf\|_{L^2}\le 2h^s\|D^sf\|_{L^2}/(s-1)!$ for $1\le s\le p+1$. [A2, F1, F3, F4, step 1.1, step 2.1, step 3.1, given, construct] ∎
