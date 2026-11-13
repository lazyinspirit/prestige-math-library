---
id: lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing
kind: lemma
domain: mathematics
title: Partial extension across an artificial sphere and annular cutoff gluing
status: published
deps:
  - math:def-axiom-of-choice
  - lem-se-sobolev-extension-retraction
  - lem-se-author-8d28f6f38ee5-localized-chart-operators
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly
  - math:thm-kernel-of-the-trace-is-w-one-p-zero
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - math:lem-zero-extension-from-w-one-p-zero
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-se-sobolev-extension-retraction: mathematical-premise
  lem-se-author-8d28f6f38ee5-localized-chart-operators: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly: mathematical-premise
  math:thm-kernel-of-the-trace-is-w-one-p-zero: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  math:lem-zero-extension-from-w-one-p-zero: mathematical-premise
  math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
formulation_deps:
  - lem-se-sobolev-extension-retraction
  - lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly
  - lem-se-author-8d28f6f38ee5-localized-chart-operators
  - math:def-axiom-of-choice
  - math:def-wkp-zero-as-a-sobolev-closure
argument_deps:
  - math:def-axiom-of-choice
  - lem-se-sobolev-extension-retraction
  - lem-se-author-8d28f6f38ee5-localized-chart-operators
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly
  - math:thm-kernel-of-the-trace-is-w-one-p-zero
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - math:lem-zero-extension-from-w-one-p-zero
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
proof_strategy: direct
dependency_level: 11
---

## Statement

Assume AC and let $n\ge2$. Let $\Omega=\mathbb R^n\setminus\Theta$ be a smooth compact-obstacle exterior, let $\Theta\Subset B_L$, and put $G_0=\Omega\cap B_L$. If $1\le s\le2$, $v\in H^s(G_0)$ and $v=0$ on a neighborhood of the outer sphere inside $G_0$, then the function equal to $v$ on $G_0$ and zero on $\Omega\setminus G_0$ belongs to $H^s(\Omega)$. For each fixed gap and separating cutoff this extension is bounded, with constants allowed to depend on that gap/cutoff. No vanishing near $\partial\Theta$ is required, and no uniform shrinking-gap assertion is made.

For $1\le s\le2$ and $U\in H^s(\Omega)$, define the exterior obstacle trace by
$$\Gamma_\Omega U=\gamma^{G_0}_{\partial\Theta}(U|_{G_0})\in H^{s-1/2}(\partial\Theta),$$
where $\gamma^{G_0}_{\partial\Theta}$ is the bounded-domain boundary trace, applied on each obstacle-boundary component. This defines a bounded linear map independent of the choice of truncation radius $L$ with $\Theta\Subset B_L$. It is local near $\partial\Theta$ and commutes with smooth cutoffs. The notation $\gamma_{\partial\Theta}$ for an exterior input means $\Gamma_\Omega$; for an input on $G_0$ it means $\gamma^{G_0}_{\partial\Theta}$.

Fix $\varepsilon>0$ with $\Theta\subset B_{L-3\varepsilon}$. Fix smooth bounded cutoffs $\zeta,\widetilde\zeta$ on $\mathbb R^n$, with bounded derivatives through order two, such that $\zeta=0$ on $B_{L-2\varepsilon}$, $\zeta=1$ for $|x|\ge L-\varepsilon$, $\widetilde\zeta=0$ on $B_{L-3\varepsilon}$, and $\widetilde\zeta=1$ on $\operatorname{supp}\zeta$. Let $\mathcal A=\{L-3\varepsilon<|x|<L\}$ and let $E_{\mathcal A}$ be the simultaneous bounded annular extension. Then
$$\mathcal G u=\widehat{(1-\zeta)u}+\widetilde\zeta E_{\mathcal A}((\zeta u)|_{\mathcal A})|_\Omega$$
is a bounded linear map $H^s(G_0)\to H^s(\Omega)$ with $(\mathcal G u)|_{G_0}=u$, where the hat extends only across the artificial sphere. Its canonical trace on $\partial\Theta$ equals that of $u$. If this inner trace is zero, then $\mathcal G u\in H^1_0(\Omega)$ as well. The cutoffs and gap are fixed in this gluing assertion.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available.

[F2] [[lem-se-sobolev-extension-retraction]] provides bounded whole-space extensions from the smooth bounded $G_0$ and annulus $\mathcal A$, and from the exterior, for every order zero through two, in the restriction-quotient convention. Its weak endpoint identification is at order two; the first-order whole-space identification used below is supplied separately in F7.

[F3] [[lem-se-author-8d28f6f38ee5-localized-chart-operators]] bounds whole-space cutoff multiplication at all these orders. [[math:lem-test-function-cutoffs-and-euclidean-localization]] constructs the separating cutoffs. Domain cutoff bounds follow by applying a whole-space extension, multiplying there, and restricting; their constants depend on the chosen cutoff.

[F4] [[lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly]] gives the bounded-domain boundary traces and their locality and cutoff commutation, including equality with the existing $H^1$ trace as an $L^2$ function. In its Proof steps 1.1 and 2.1 these traces are constructed as $\gamma^G_S u=T_S F$ for any whole-space extension $F$ of $u$, with the same ambient surface trace $T_S$ for each fixed compact smooth $S$ and independent of the extension and charts. We apply this bounded-domain construction on truncations of the exterior; no boundary-trace theorem for an unbounded domain is assumed.

[F5] [[math:thm-kernel-of-the-trace-is-w-one-p-zero]] identifies the zero trace kernel in $W^{1,2}$ with $W^{1,2}_0$ on a bounded smooth domain. [[math:def-wkp-zero-as-a-sobolev-closure]] defines this weak-norm closure by compactly supported tests, denoted $H^1_0$ for complex scalars and $p=2$. [[math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn|Compactly supported smooth functions are dense in $W^{k,p}(\mathbb R^n)$]] supplies whole-space $W^{1,2}$ approximation by compactly supported smooth functions. F7 converts the whole-space approximations to the Fourier $H^1$ norm.

[F6] [[math:lem-zero-extension-from-w-one-p-zero]] gives a linear zero-extension isometry $W^{1,2}_0(G_0;\mathbb C)\to W^{1,2}(\mathbb R^n;\mathbb C)$: weak first derivatives are extended by zero and all component norms are preserved. Its Countable Choice hypothesis follows from the standing AC assumption. This applies after the bounded trace-kernel theorem has established zero-boundary membership; it requires no compact support for the limiting input.

[F7] [[math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] at $k=1$ identifies whole-space Fourier $H^1(\mathbb R^n)$ with $W^{1,2}(\mathbb R^n;\mathbb C)$ under the regular-distribution embedding, with equivalent norms. It uses the negative-sign $2\pi$ Fourier normalization and bracket weight of F2. Its hypotheses $n\ge1$, complex scalars and Countable Choice hold here, the last by F1. We use this whole-space equivalence, not an unstated first-order domain identification.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 Compactness of the artificial sphere gives $\delta>0$ with $v=0$ for $L-\delta<|x|<L$ inside $G_0$; shrink $\delta$ if necessary to separate this collar from $\Theta$. Choose $\rho\in C_c^\infty(B_L)$ equal to $1$ on $B_{L-\delta}$ and supported in $B_{L-\delta/2}$. If $E_{G_0}$ is the ordinary simultaneous extension, then $r_\Omega(\rho E_{G_0}v)$ equals $v$ on $G_0$ and zero outside $B_L$, so it is exactly the partial extension. Its $H^s(\Omega)$ norm is at most $C_{s,\rho}\|v\|_{H^s(G_0)}$ by the whole-space extension and multiplier bounds. The construction uses values inside $\Theta$ only as an ordinary extension auxiliary and then restricts to $\Omega$; it never asserts zero extension across the obstacle. The dependence on $\rho$ is retained, so no uniform bound for arbitrary shrinking gaps is inferred. [F2, F3, given]

1.2 For a fixed admissible truncation $G_0$, restriction $H^s(\Omega)\to H^s(G_0)$ is contractive: every whole-space extension of $U$ is also one of $U|_{G_0}$, so take the infimum of their norms. F4 on each obstacle-boundary component therefore makes $\Gamma_\Omega$ bounded and linear into $H^{s-1/2}(\partial\Theta)$. To compare two admissible truncations $G_a=\Omega\cap B_{L_a}$ and $G_b=\Omega\cap B_{L_b}$, take one whole-space $F\in H^s(\mathbb R^n)$ with $F|_\Omega=U$, which exists by the restriction-space convention. It extends both $U|_{G_a}$ and $U|_{G_b}$. The ambient construction in F4 computes both bounded-domain obstacle traces as $T_{\partial\Theta}F$, componentwise, so their values agree. This also proves independence of any bounded smooth truncation agreeing with $\Omega$ on a neighborhood of its compact obstacle boundary. Locality and cutoff commutation follow by restricting to a fixed such truncation and applying those properties in F4; F3 makes the cutoff products bounded. The $L^2$ value agrees with the bounded-domain $H^1$ trace there. [F2, F3, F4, given]

2.1 For the gluing formula, $(1-\zeta)u$ has the fixed outer gap $\varepsilon$ and bounded $H^s(G_0)$ norm, so the first term is bounded by the preceding construction. Restriction $H^s(G_0)\to H^s(\mathcal A)$ is contractive in the quotient model, and multiplication by the fixed cutoffs is bounded by extension and whole-space multiplication. The second term is therefore bounded $H^s(G_0)\to H^s(\Omega)$ through $E_{\mathcal A}$. These are fixed linear operators. On $\mathcal A$ its correction restricts to $\widetilde\zeta\zeta u=\zeta u$, while below the annulus $\zeta=0$. Hence the two terms sum to $u$ on all of $G_0$. [F2, F3, step 1.1, algebra]

3.1 By step 2.1, $(\mathcal G u)|_{G_0}=u$, so the definition in step 1.2 gives $\Gamma_\Omega\mathcal G u=\gamma^{G_0}_{\partial\Theta}u$. Equivalently, near $\partial\Theta$ the first term of the gluing formula equals $u$ since $\zeta=0$, and the second term vanishes since $\widetilde\zeta=0$. The local exterior trace just constructed thus preserves the inner trace, with its higher regularity and its bounded-domain $H^1$ value in $L^2$. No zero extension across $\partial\Theta$ is involved. [F3, F4, step 2.1, step 1.2]

4.1 If the inner trace is zero, choose a smooth $\theta$ equal to $1$ near $\Theta$ with support inside $B_{L-3\varepsilon}$ and put $U=\mathcal G u$. The function $w=(\theta U)|_{G_0}=\theta u$ belongs to $H^s(G_0)$ and has zero trace on both boundary components of $G_0$: on the inner one by hypothesis and on the outer one because $\theta$ vanishes nearby. To place $w$ in the weak space, take a whole-space $H^s$ extension $Q$ of $w$. The Fourier weights imply $Q\in H^1(\mathbb R^n)$ since $s\ge1$, and F7 gives $Q\in W^{1,2}(\mathbb R^n;\mathbb C)$. Testing its weak derivative identity against the zero extension of any $\psi\in C_c^\infty(G_0)$ gives $D_iw=(D_iQ)|_{G_0}$. Restriction decreases each $L^2$ component norm. More generally the same test calculation on any open $D$, followed by infimizing over all whole-space $H^1$ extensions of $h$, gives $\|h\|_{W^{1,2}(D)}\le C\|h\|_{H^1(D)}$. Thus $w\in W^{1,2}(G_0)$; F4 identifies its zero trace with the first-order trace in F5, and the bounded kernel theorem gives $w\in W^{1,2}_0(G_0;\mathbb C)$. Choose $\varphi_j\in C_c^\infty(G_0;\mathbb C)$ converging to $w$ in $W^{1,2}(G_0)$, using the closure definition and the countable-choice consequence of AC. By F6 their whole-space zero extensions satisfy $\|E_0\varphi_j-E_0w\|_{W^{1,2}(\mathbb R^n)}=\|\varphi_j-w\|_{W^{1,2}(G_0)}\to0$. F7 converts this to whole-space $H^1$ convergence. Their restrictions to $\Omega$ lie in $C_c^\infty(\Omega)$ and converge in quotient $H^1(\Omega)$ by contractive restriction, hence also in $W^{1,2}(\Omega)$ by the bound just proved. The limit is $\theta U$: it agrees with $w$ on $G_0$ and both functions vanish on $\Omega\setminus G_0$, since $\theta$ is supported inside $B_{L-3\varepsilon}$. Thus the weak-norm closure definition gives $\theta U\in H^1_0(\Omega)$. [F1, F2, F3, F4, F5, F6, F7, step 3.1]

5.1 Take an ordinary whole-space $H^1$ extension $F$ of $U$ and set $W=(1-\theta)F$. F3 makes $W\in H^1(\mathbb R^n)$, and F7 identifies it with a $W^{1,2}$ class. Choose a smooth bounded $b$ with bounded derivatives through order two, vanishing near $\Theta$ and equal to $1$ on $\operatorname{supp}(1-\theta)$, so $bW=W$. By F5 choose $W_j\in C_c^\infty(\mathbb R^n;\mathbb C)$ converging to $W$ in $W^{1,2}(\mathbb R^n)$, using the countable-choice consequence of F1. F7 gives convergence in whole-space $H^1$; the fixed multiplier bound in F3 and contractive restriction give $(bW_j)|_\Omega\to(1-\theta)U$ in $H^1(\Omega)$. The restriction bound in step 4.1 also gives convergence in $W^{1,2}(\Omega)$. Each $(bW_j)|_\Omega$ lies in $C_c^\infty(\Omega)$ because $b$ vanishes on a fixed neighborhood of the compact obstacle. Hence the weak-norm closure definition gives $(1-\theta)U\in H^1_0(\Omega)$, and adding $\theta U$ proves the final assertion. This argument proves only the claimed integer zero-trace preservation and ordinary $H^s$ gluing; it does not impose any additional higher normal trace condition. [F1, F2, F3, F5, F7, step 4.1] ∎
