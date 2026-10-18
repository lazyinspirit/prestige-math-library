---
id: thm-bem-single-layer-transmission-mapping-and-coercivity
kind: theorem
title: The three-dimensional single layer is bounded and coercive
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-bem-lipschitz-polyhedral-boundary-and-trace-spaces,
    lem-bem-lipschitz-trace-and-lifting,
    def-bem-newtonian-kernel-in-three-dimensions,
    lem-bem-newtonian-kernel-is-fundamental-solution,
    def-bem-laplace-layer-potentials-and-energy-spaces,
    thm-lax-milgram,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
    def-countable-choice,
    def-axiom-of-choice
  ]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is used for Lax–Milgram; the Axiom of Choice is
  inherited through the homogeneous Sobolev inequality in the trace-and-lifting
  supplier.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains:
        Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§2–4, printed pp. 615–621: weak single-layer operators, trace and
        conormal spaces, Green formulas, and the jump relation."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015
        lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.2, printed pp. 3–7, and Chapter 3 §§3.1–3.3, printed pp.
        40–46: the 3D Newton kernel, single-layer jumps, and transmission/energy
        interpretation."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. For every $\lambda\in H^{-1/2}(\Gamma)$, with $\Gamma$ as in [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]], there is a unique $u=S\lambda\in\dot H^1(\mathbb R^3)$ satisfying the weak single-layer equation of [[def-bem-laplace-layer-potentials-and-energy-spaces]]. It is harmonic on $\Omega^-$ and $\Omega^+$, its two traces agree, and its weak conormal traces satisfy
$$\partial_n^-u-\partial_n^+u=\lambda\quad\hbox{in }H^{-1/2}(\Gamma).$$
The trace operator $V\lambda:=\gamma u$ maps $H^{-1/2}(\Gamma)$ boundedly into $H^{1/2}(\Gamma)$, and there are constants $C,c>0$ depending on $\Gamma$ such that
$$\|u\|_{\dot H^1}+\|V\lambda\|_{H^{1/2}}\le C\|\lambda\|_{H^{-1/2}},\qquad \langle\lambda,V\lambda\rangle_\Gamma\ge c\|\lambda\|_{H^{-1/2}}^2.$$
If $\lambda\in L^\infty(\Gamma)$ (in particular for facewise smooth densities reaching edges or discontinuous P0 densities), this weak potential agrees away from $\Gamma$ with $\int_\Gamma(4\pi|x-y|)^{-1}\lambda(y)dS_y$.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the trace-and-lifting result of [[lem-bem-lipschitz-trace-and-lifting]], the spaces and weak-potential convention of [[def-bem-laplace-layer-potentials-and-energy-spaces]], and $\lambda\in H^{-1/2}(\Gamma)$.

[A1] The Axiom of Choice is inherited from the homogeneous Sobolev trace result and Countable Choice from Lax–Milgram ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The boundary $\Gamma$ has a finite Lipschitz graph atlas with its intrinsic surface measure, and the trace map $\gamma:\dot H^1(\mathbb R^3)\to H^{1/2}(\Gamma)$ has a bounded right inverse ([[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]], [[lem-bem-lipschitz-trace-and-lifting]]).

[F2] Lax–Milgram on a real Hilbert space: a bounded coercive bilinear form and a bounded linear functional have a unique weak solution, with solution norm at most the functional norm divided by the coercivity constant ([[thm-lax-milgram]], [[def-countable-choice]]).

[F3] The Newton kernel $G_3$ of [[def-bem-newtonian-kernel-in-three-dimensions]] satisfies $-\Delta_xG_3(x,y)=\delta_y$ in distributions ([[lem-bem-newtonian-kernel-is-fundamental-solution]]).

[F4] Fubini's theorem permits changing the order of an absolutely integrable double integral ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

1.1 For fixed $\lambda$, define $\ell(v)=\langle\lambda,\gamma v\rangle_\Gamma$ on $\dot H^1$. The trace estimate in [F1] gives $|\ell(v)|\le C\|\lambda\|_{H^{-1/2}}\|v\|_{\dot H^1}$. The gradient inner product makes $\dot H^1$ a real Hilbert space by its completion definition, so [F2] applied to $a(u,v)=\int_{\mathbb R^3}\nabla u\cdot\nabla v$ gives a unique $u$ with $a(u,v)=\ell(v)$ for every $v$, and $\|u\|_{\dot H^1}\le C\|\lambda\|_{H^{-1/2}}$. [A1, F1, F2, given, construct]

2.1 Testing with smooth functions compactly supported off $\Gamma$ makes the right side zero, so $u$ is weakly harmonic in each side. The same weak equation for a global smooth test $v$ is the distributional identity $-\Delta u=\lambda\delta_\Gamma$, where $\langle\lambda\delta_\Gamma,v\rangle=\langle\lambda,\gamma v\rangle_\Gamma$. Splitting the energy integral across $\Omega^-$ and $\Omega^+$ and using the weak Green definitions in [[def-bem-laplace-layer-potentials-and-energy-spaces]] gives $\langle\partial_n^-u-\partial_n^+u,\gamma v\rangle=\langle\lambda,\gamma v\rangle$; the right inverse in [F1] makes every $H^{1/2}$ trace available, hence the conormal jump is $\lambda$. The global $\dot H^1$ representative has one trace, so $\gamma^-u=\gamma^+u=\gamma u$. [F1, F3, step 1.1, given]

3.1 By the weak equation tested with $v=u$, $\langle\lambda,V\lambda\rangle=\|u\|_{\dot H^1}^2$. For any $g\in H^{1/2}(\Gamma)$ with $\|g\|_{H^{1/2}}\le1$, choose the bounded lift $Lg$ from [F1]; then $|\langle\lambda,g\rangle|=|\int\nabla u\cdot\nabla Lg|\le C\|u\|_{\dot H^1}$. Taking the supremum over such $g$ gives $\|\lambda\|_{H^{-1/2}}\le C\|u\|_{\dot H^1}$. Combining this with the energy identity proves coercivity; applying the trace bound of [F1] and the estimate in step 1.1 proves boundedness of $V$. [F1, step 1.1, step 2.1, algebra]

4.1 Now let $\lambda\in L^\infty(\Gamma)$, and put $U(x)=\int_\Gamma G_3(x,y)\lambda(y)dS_y$. Such a density belongs to $H^{-1/2}(\Gamma)$ because $|\int_\Gamma\lambda g|\le\|\lambda\|_2\|g\|_2\le C\|\lambda\|_2\|g\|_{H^{1/2}}$. The finite Lipschitz graph atlas gives $|\Gamma\cap B(x,r)|\le Cr^2$ for small $r$: each graph area density is bounded and its planar projection inside a radius-$r$ ball lies in a radius-$r$ disk, as proved in [[lem-bem-lipschitz-graph-sobolev-and-green-interface]]. Dyadic annuli about $x$ therefore bound $|U(x)|$ locally by $C$ and $|\nabla U(x)|$ by $C(1+|\log d(x,\Gamma)|)$: on each annulus of radius $r$, the kernels $|x-y|^{-1}$ and $|x-y|^{-2}$ contribute at most $Cr$ and $C$, respectively, and there are at most $C(1+|\log d|)$ annuli. A width-$\delta$ neighborhood of this compact Lipschitz boundary has volume at most $C\delta$: in finitely many smaller graph charts, distance less than $\delta$ implies a vertical gap at most $(1+L)\delta$, and vertical Fubini bounds each bounded-base strip by $C\delta$, with support margins ensuring the smaller charts cover that neighborhood. This is also the strip estimate of [[lem-bem-lipschitz-graph-sobolev-and-green-interface]]. Summing dyadic distance strips shows $\nabla U\in L^2$ near $\Gamma$; at infinity $U=O(|x|^{-1})$ and $\nabla U=O(|x|^{-2})$. The displayed gradient is also the global weak gradient: the first derivative of the locally integrable Newton kernel is locally volume integrable, so the weak derivative of its surface convolution is the same integral by Fubini. Hence $U\in L^6$ and $\nabla U\in L^2$. To see that $U$ belongs to the completion $\dot H^1$, take cutoffs $\chi_R=1$ on $B_R$, supported in $B_{2R}$, with $|\nabla\chi_R|\le C/R$: the gradient tail tends to zero and $R^{-2}\int_{R<|x|<2R}|U|^2=O(R^{-1})$. Each $\chi_RU$ is compactly supported in $H^1$ and convolution approximates it in $H^1$ by smooth compactly supported functions. The fundamental-solution identity [F3] and Fubini [F4], whose local absolute-integrability follows from $|\nabla_xG_3|=O(|x-y|^{-2})$ in three dimensions, give $\int\nabla U\cdot\nabla v=\int_\Gamma\lambda\gamma v$ for smooth compactly supported $v$. Density and [F1] extend this to all $v\in\dot H^1$. Uniqueness in step 1.1 gives $U=u$, proving the kernel representation. [F1, F3, F4, step 1.1, given, algebra] ∎

