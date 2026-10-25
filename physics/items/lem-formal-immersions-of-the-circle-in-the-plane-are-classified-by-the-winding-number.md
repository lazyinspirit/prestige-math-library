---
id: lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number
kind: lemma
title: "Formal immersions of the circle in the plane are classified by the winding number"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle, def-rotation-number-of-an-immersed-oriented-circle-in-the-plane, def-stiefel-space-grassmannian-and-tautological-bundle, def-frame-bundle-and-associated-vector-bundle, def-local-frame-and-global-frame-of-a-vector-bundle, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame, thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree, cor-degree-descends-to-circle-loop-classes, thm-winding-number-equals-circle-degree, cor-winding-number-classifies-loops-in-the-punctured-plane, def-weak-compact-open-smooth-topology-on-mapping-spaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the $n=1$ case, the difference class and the winding-number classification of immersed circles"
    - title: "Hassler Whitney, On regular closed curves in the plane, Compositio Mathematica 4 (1937)"
      url: https://www.numdam.org/item/CM_1937__4__276_0.pdf
      locator: "§1, pp. 276–279; rotation number and its invariance"
dependency_level: 3
---

## Statement

Let $E=V(TS^1,\varepsilon^2)\to S^1$ be the Stiefel bundle of the
section-space proposition for $M=S^1$ and $n=2$, with fibre
$V_1(\mathbb R^2)=S^1$. Then $E\cong S^1\times S^1$ is trivial, its section
space $\Gamma$ is homeomorphic to $C^\infty(S^1,S^1)$ with the weak smooth topology, and
$\pi_0(\Gamma)\cong\mathbb Z$ by degree. The resulting **winding invariant**
$w(f,F)\in\mathbb Z$ of a formal immersion $(f,F)$ is the degree of the section
expressed in the angular trivialisation defined by $\partial_\theta$; for the derivative $(f,df)$ of an
immersion it equals the rotation number $\operatorname{rot}(f)$ of the
preceding definition. Two formal immersions of $S^1$ into $\mathbb R^2$ lie in
the same path component of $\operatorname{FImm}(S^1,\mathbb R^2)$ if and only
if their winding invariants are equal.

## Facts & Assumptions

**Given:** The oriented circle $S^1=\mathbb R/2\pi\mathbb Z$, its positively oriented unit tangent field $\partial_\theta$, the angular frame $s(\theta)=\partial_\theta$, and the bundle $E=V(TS^1,\varepsilon^2)\to S^1$ with fibre $S^1=V_1(\mathbb R^2)$.

[F1] With the standard angular metric, the normalized Stiefel bundle $E=V(TS^1,\varepsilon^2)$ is $S^1\times S^1$. The monomorphism section space retracts to its smooth isometric section space $\Gamma$ by polar normalization, and $\operatorname{FImm}(S^1,\mathbb R^2)\simeq C^\infty(S^1,\mathbb R^2)\times\Gamma$; the contractible first factor gives the same path components. [[prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle]]

[F2] $\operatorname{rot}(f)=\deg(\tau_f)$ for an immersion $f:S^1\to\mathbb R^2$, with $\tau_f$ the normalised velocity. [[def-rotation-number-of-an-immersed-oriented-circle-in-the-plane]]

[F3] A smooth rank-$r$ vector bundle is trivial if and only if it has a global frame; $(\partial_\theta)$ is a global frame of $TS^1$; global frames trivialise the frame bundle and every associated bundle. [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]], [[def-local-frame-and-global-frame-of-a-vector-bundle]], [[def-frame-bundle-and-associated-vector-bundle]]

[F4] $V_1(\mathbb R^2)$ is the unit circle $S^1$ and the fibres of $E$ are the isometric injections $T_\theta S^1\to\mathbb R^2$. [[def-stiefel-space-grassmannian-and-tautological-bundle]]

[F5] Degree descends to path-homotopy classes of based circle loops and identifies them up to homotopy: two based circle loops are path-homotopic exactly when their degrees agree; equivalently the winding number of a closed rectifiable loop in $\mathbb C^\times$ about $0$ is the degree of its normalised circle loop and classifies its loop class. [[thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree]], [[cor-degree-descends-to-circle-loop-classes]], [[thm-winding-number-equals-circle-degree]], [[cor-winding-number-classifies-loops-in-the-punctured-plane]]

[F6] For $S^1$ and $\mathbb R^2$, use their finite standard atlases: their derivative transitions and fixed rational-ball bases give smooth tangent total spaces without choice. The angular frame identifies $TS^1=S^1\times\mathbb R$, and $T\mathbb R^2=\mathbb R^2\times\mathbb R^2$; these explicit structures supply the tangent-space topology used here. Define the concrete formal space directly as the set of smooth pairs $(f,F)$ with $\pi_{\mathbb R^2}F=f\pi_{S^1}$ and each $F_x$ linear and injective, with the subspace topology from $C^\infty(S^1,\mathbb R^2)\times C^\infty(TS^1,T\mathbb R^2)$ ([[def-weak-compact-open-smooth-topology-on-mapping-spaces]]). The tangent total spaces are the explicit products just constructed, so this instance uses no general tangent-bundle existence premise.

## Proof

1.1 $TS^1$ is trivial with the global frame $(\partial_\theta)$: the field is smooth and nowhere zero at every point of the circle, so it is a global frame by [F3]. Hence $E=V(TS^1,\varepsilon^2)\cong S^1\times S^1$ by the triviality clause of [F1], and its fibres are the isometric injections $T_\theta S^1\to\mathbb R^2$, identified with $S^1$ by [F4]. [F1, F3, F4]

2.1 Under the trivialisation of step 1.1, a smooth section of $E$ is exactly a smooth map $S^1\to S^1$, so $\Gamma\cong C^\infty(S^1,S^1)$; a section $F$ corresponds to $\theta\mapsto$ the coordinate of $F_\theta(\partial_\theta)$ in the trivialisation, a nowhere-zero continuous function for a monomorphism. Writing $v(\theta)=F_\theta(\partial_\theta)$ for a bundle monomorphism over the identity, normalisation $v\mapsto v/\lvert v\rvert$ is a homotopy of nowhere-zero maps, because the straight segment from $v(\theta)$ to $v(\theta)/\lvert v(\theta)\rvert$ stays in the open ray through $v(\theta)$ and misses $0$. [F1, F3]

3.1 Degree classifies the smooth section components. A smooth circle map has a smooth angular lift $\alpha:\mathbb R\to\mathbb R$ with $\alpha(\theta+2\pi)=\alpha(\theta)+2\pi d$, where $d$ is its degree: the continuous lift in the circle-loop model is smooth on each local inverse branch of the exponential. The linear interpolation $(1-t)\alpha(\theta)+td\theta$ exponentiates to a smooth path of circle maps to the standard degree-$d$ map, continuous in the weak $C^\infty$ topology. Thus equal degrees give a path of smooth sections; conversely any such path is a continuous homotopy and preserves degree by [F5]. Every integer occurs via $\theta\mapsto e^{id\theta}$, so $\pi_0(\Gamma)\cong\mathbb Z$. [F5, step 2.1, construct]

4.1 The winding invariant $w(f,F)$ is the degree of the section of $(f,F)$ in the fixed trivialisation of step 1.1, so $w$ is constant on path components and induces the bijection $\pi_0(\Gamma)\cong\mathbb Z$ of step 3.1. For the derivative $(f,df)$ of an immersion, the corresponding section is the velocity map $v(\theta)=df_\theta(\partial_\theta)$, whose normalisation is $\tau_f$; by step 2.1 $v$ and $\tau_f$ are homotopic through nowhere-zero maps, so they have the same degree, and that degree is $\operatorname{rot}(f)$ by [F2]. [F2, step 2.1, step 3.1]

5.1 Two formal immersions $(f,F)$, a smooth $f$ with a smooth bundle monomorphism $F$ over $f$ in the sense of [F6], lie in the same path component of $\operatorname{FImm}(S^1,\mathbb R^2)$ exactly when $w$ agrees: by [F1], $\operatorname{FImm}(S^1,\mathbb R^2)$ is homotopy equivalent to $C^\infty(S^1,\mathbb R^2)\times\Gamma$ via polar normalization, and $C^\infty(S^1,\mathbb R^2)$ is contractible, so path components of the product correspond bijectively to path components of $\Gamma$, which are classified by the degree by step 3.1; the winding invariant is that degree. This fixes the normalisation: the round unit circle traversed once in the positive direction has $w=1$ and its reverse has $w=-1$, matching the sign convention of [F2]. [F1, F2, F6, step 3.1, step 4.1] ∎
