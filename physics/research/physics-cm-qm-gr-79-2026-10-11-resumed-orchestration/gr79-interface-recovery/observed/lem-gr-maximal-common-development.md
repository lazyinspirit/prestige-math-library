---
id: lem-gr-maximal-common-development
kind: lemma
title: "Existence and uniqueness of the maximal common development of two developments"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-portion-inextendibility, lem-gr-isometric-immersion-rigidity, lem-gr-data-fixing-immersion-is-embedding, lem-gr-maximal-geodesics-and-extension, thm-gr-local-geometric-development, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, lem-gr-causal-curve-calculus, def-continuity-real, def-interval, def-axiom-schema-of-separation, def-power-set]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-portion-inextendibility: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  lem-gr-data-fixing-immersion-is-embedding: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-axiom-schema-of-separation: mathematical-premise
  def-power-set: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Theorem 3.4 with proof (the union of all common globally hyperbolic developments is the maximal common development), printed p. 14"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Cauchy hypersurfaces, domains of dependence and global hyperbolicity of domains, Theorem 2.9.9 printed pp. 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same data
in the sense of [[def-gr-development-and-data-fixing-isometry]] clause (a),
with $\Sigma:=j(\Sigma)$. Then there exist $U^*\subseteq M$ and
$\psi^*:U^*\to M'$ such that:

**(a)** $(U^*,\psi^*)$ is a common subdevelopment of $M$ and $M'$ in the sense
of [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a);

**(b)** for every common subdevelopment $(U,\varphi)$ of $M$ and $M'$ one has
$U\subseteq U^*$ and $\psi^*|_U=\varphi$; in particular $(U^*,\psi^*)$ is a
maximal common development in the sense of clause (b) of that definition, and
it contains $j(\Sigma)$;

**(c)** uniqueness: if $(U^\dagger,\psi^\dagger)$ also satisfies (a) and (b),
then $U^\dagger=U^*$ and $\psi^\dagger=\psi^*$.

## Facts & Assumptions

**Given:** two developments $(M,g,N,j,\psi)$, $(M',g',N',j',\psi')$ of the same data, with $\Sigma=j(\Sigma)$ Cauchy in both.

[L1] Common subdevelopments form a set: a common subdevelopment is a pair $(U,\varphi)$ with $U\subseteq M$ and $\varphi:U\to M'$; since $U$ is an element of the power set of $M$ and the graph of $\varphi$ is an element of the power set of $M\times M'$, the collection of all common subdevelopments is a set by separation ([[def-power-set]], [[def-axiom-schema-of-separation]]).

[L2] Restriction and gluing of development data: each $U_\alpha$ is open, is a development of the same data with the restricted fields, and $\psi_\alpha$ is a development embedding, hence in particular an isometric immersion fixing the data and the time orientation ([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a), [[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c)).

[L3] Agreement on overlaps and nonemptiness: the maps $\psi_\alpha$ agree on $U_\alpha\cap U_\beta$ ([[lem-gr-isometric-immersion-rigidity]] clause (c)); and at least one common subdevelopment exists: by [[thm-gr-local-geometric-development]] clauses (b)-(c), the two developments of the same data agree near $\Sigma$ up to a data-fixing time-orientation-preserving isometry, so some open neighbourhood of $j(\Sigma)$ in $M$ carries a data-fixing development embedding into $M'$. No choice principle beyond the ambient conventions is used.

[L4] Portion inextendibility and Cauchy property: if a causal curve is inextendible in $U^*$, then for every component $J$ of its preimage under one of the sets $U_\alpha$ the restriction is inextendible in $U_\alpha$ ([[lem-gr-portion-inextendibility]]); and every causal curve inextendible in $U_\alpha$ meets $\Sigma$ in exactly one parameter value ([[def-gr-development-and-data-fixing-isometry]] clause (a)5).

[L5] Two crossings in the ambient development: if a causal curve in $M$ met $\Sigma$ in two distinct parameter values, then by the segment-extension clause the compact segment between them lies on an inextendible causal curve of $M$ meeting $\Sigma$ twice, contradicting that $\Sigma$ is a Cauchy set of $M$ ([[lem-gr-maximal-geodesics-and-extension]] clause (c), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c), [[def-gr-causal-curves-and-reachability]]).

[L6] Local differential geometry on $U^*$: a map whose restriction to an open cover of its domain is a smooth isometric immersion is a smooth isometric immersion, and the field equations of [[def-gr-development-and-data-fixing-isometry]] clause (a)4 are local, so they hold on $U^*$; injectivity of a data-fixing isometric immersion of developments follows from [[lem-gr-data-fixing-immersion-is-embedding]] clause (b).

## Proof

**Proof technique:** direct.

1.1 (The union and the patched map.) Let $\{(U_\alpha,\psi_\alpha)\}_{\alpha\in A}$ be the set of all common subdevelopments, which exists by [L1] and is nonempty by [L3]. Put $U^*:=\bigcup_{\alpha\in A}U_\alpha$, an open subset of $M$ containing $j(\Sigma)$; define $\psi^*:U^*\to M'$ by $\psi^*(p):=\psi_\alpha(p)$ for $p\in U_\alpha$. This is well defined by [L3]: if $p\in U_\alpha\cap U_\beta$, then $\psi_\alpha(p)=\psi_\beta(p)$. [L1, L3, construct]

1.2 ($U^*$ is a development with Cauchy surface $\Sigma$.) Let $\gamma:I\to U^*$ be a future causal curve inextendible in $U^*$, choose $t_0\in I$ with $\gamma(t_0)\in U_{\alpha_0}$, and let $J$ be the connected component of $\gamma^{-1}[U_{\alpha_0}]$ containing $t_0$. By [L4] the restriction $\gamma|_J$ is inextendible in $U_{\alpha_0}$ and therefore meets $\Sigma$ in exactly one parameter value of $J\subseteq I$; hence $\gamma$ meets $\Sigma$ at least once. If it met $\Sigma$ at two distinct parameter values, then by [L5] applied in $M$ this would contradict that $\Sigma$ is a Cauchy set of $M$; hence $\gamma$ meets $\Sigma$ in exactly one parameter value, and the same holds for past causal curves by the time reverse. Thus $(U^*,g|_{U^*},N|_{U^*},j,\psi|_{U^*})$ is a development of the same data: it is a time-oriented smooth Lorentzian four-manifold with $j(\Sigma)$ a spacelike embedded hypersurface (as $U^*$ is open in $M$), the field equations hold by [L6], the induced data are those of $j$ and $\psi$, and $\Sigma$ is Cauchy by the above. [step 1.1, L2, L4, L5, L6, algebra]

2.1 ($\psi^*$ is a data-fixing development embedding.) By [L2] each $\psi_\alpha$ is an isometric immersion fixing the data and the time orientation; these are local properties, so $\psi^*$ is a smooth isometric immersion with $\psi^*\circ j=j'$ and $d\psi^*(N)=N'$ by [L6]. Hence $\psi^*$ is a data-fixing isometric immersion of the development $U^*$ into $M'$; by [L6] it is injective and therefore a data-fixing development embedding. So $(U^*,\psi^*)$ is a common subdevelopment, which is clause (a). [step 1.2, L2, L6, algebra]

2.2 (Universality.) Every $(U_\alpha,\psi_\alpha)$ satisfies $U_\alpha\subseteq U^*$ by definition of the union, and $\psi^*|_{U_\alpha}=\psi_\alpha$ by definition of $\psi^*$; in particular the pair $(U^*,\psi^*)$ satisfies the universal property of clause (b), and $j(\Sigma)\subseteq U^*$ by step 1.1. [step 1.1, step 2.1, algebra]

3.1 (Uniqueness.) Let $(U^\dagger,\psi^\dagger)$ also satisfy (a) and (b). Since $(U^\dagger,\psi^\dagger)$ is itself one of the common subdevelopments, (b) applied to $(U^\dagger,\psi^\dagger)$ gives $U^\dagger\subseteq U^*$; conversely (b) for $(U^*,\psi^*)$ applied to $(U^\dagger,\psi^\dagger)$ gives $U^*\subseteq U^\dagger$. Hence $U^\dagger=U^*$, and then for every $p\in U^*$ the two maps agree because $p$ lies in some common subdevelopment $(U_\alpha,\psi_\alpha)$ and both $\psi^\dagger$ and $\psi^*$ restrict to $\psi_\alpha$ there. This is clause (c). [step 2.2, algebra] ∎

## Remarks

The construction is Sbierski's; the only structural ingredients are the agreement of the maps on overlaps ([[lem-gr-isometric-immersion-rigidity]] clause (c)), the fact that a maximal connected portion of an inextendible curve inside one member remains inextendible there ([[lem-gr-portion-inextendibility]]), and the acyclicity of "two crossings of a Cauchy set" ([[lem-gr-maximal-geodesics-and-extension]] clause (c)). No Zorn's lemma and no selection of representatives of isometry classes is used.
