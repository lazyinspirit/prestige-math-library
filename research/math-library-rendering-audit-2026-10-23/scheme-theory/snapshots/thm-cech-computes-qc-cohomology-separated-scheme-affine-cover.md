---
id: thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
kind: theorem
title: "Cech cohomology computes quasi-coherent cohomology on a separated scheme"
status: published
origin: pipeline
deps:
  - def-separated-morphism-schemes
  - thm-separatedness-gluing-overlap-criterion
  - def-quasi-coherent-module-scheme
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - def-acyclic-cover-for-sheaf
  - thm-leray-acyclic-cover-theorem
  - def-cech-cohomology-open-cover
  - def-cech-cochain-complex-open-cover
  - def-sheaf-cohomology-derived-global-sections
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Section 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice, inherited from sheaf cohomology. Let $X$ be a
quasi-compact separated scheme ([[def-separated-morphism-schemes]]), let
$U_0,\dots,U_r$ be a finite affine open cover of $X$ and let $\mathcal F$ be a
quasi-coherent $\mathcal O_X$-module
([[def-quasi-coherent-module-scheme]]). Then every intersection of one or more
members of this cover is affine, and, writing $C^\bullet(\mathcal U,\mathcal F)$
for the ordered Čech cochain complex of the cover in the given order
([[def-cech-cochain-complex-open-cover]]), the canonical comparison map
$$\check H^q(\mathcal U,\mathcal F)\longrightarrow H^q(X,\mathcal F)$$
of the ordered Čech cohomology ([[def-cech-cohomology-open-cover]]) with sheaf
cohomology ([[def-sheaf-cohomology-derived-global-sections]]) is an isomorphism
for every $q\ge0$. The empty scheme is included: its cover may have no
members or any finite number of empty members, and all cochain and cohomology
groups are zero, so the comparison is the unique map $0\to0$. An empty
index set is allowed in this case; $r=0$ gives a one-member cover.

## Facts & Assumptions

**Given:** A quasi-compact separated scheme $X$, a finite affine open cover $U_0,\dots,U_r$ of $X$ and a quasi-coherent $\mathcal O_X$-module $\mathcal F$.

[F1] Separatedness criterion: if $f:X\to S$, $S=\bigcup_iW_i$ is an affine open cover, and each $f^{-1}(W_i)$ is covered by affine opens $U_{ij}=\operatorname{Spec}B_{ij}$ over $W_i=\operatorname{Spec}A_i$, then $f$ is separated exactly when, for every pair $U_{ij},U_{ik}$ over the same $W_i$, the intersection is affine and the natural map $B_{ij}\otimes_{A_i}B_{ik}\to\Gamma(U_{ij}\cap U_{ik},\mathcal O_X)$ is surjective. Equivalently, this condition may be checked for all pairs of affine opens over a common affine open of $S$; a single pair does not characterize separatedness. Thus, if $X$ is separated over an affine base, every pair of affine opens of $X$ has affine intersection. Empty intersections use the zero ring convention. ([[thm-separatedness-gluing-overlap-criterion]], [[def-separated-morphism-schemes]])

[F2] The restriction of a quasi-coherent module to an open subscheme is quasi-coherent. ([[def-quasi-coherent-module-scheme]])

[F3] If $Y$ is an affine scheme, including the empty affine scheme and the zero module, and $\mathcal G$ is quasi-coherent on $Y$, then $H^q(Y,\mathcal G)=0$ for every $q>0$. ([[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

[F4] A cover $(U_i)_{i\in I}$ indexed by a linearly ordered set is $\mathcal F$-acyclic when $H^q(W,\mathcal F|_W)=0$ for all $q>0$ on every nonempty finite intersection $W$ of its members. ([[def-acyclic-cover-for-sheaf]])

[F5] Leray acyclic-cover comparison: for an open cover indexed by a linearly ordered set and $\mathcal F$-acyclic in the sense of [F4], the canonical comparison $\check H^p(\mathcal U,\mathcal F)\to H^p(X,\mathcal F)$ is an isomorphism for every $p\ge0$. ([[thm-leray-acyclic-cover-theorem]])

[F6] The ordered Čech cohomology $\check H^q(\mathcal U,\mathcal F)$ is the cohomology of the complex $C^\bullet(\mathcal U,\mathcal F)$ under the given linear order of the index set, with the alternating signs of the Čech differential. ([[def-cech-cohomology-open-cover]], [[def-cech-cochain-complex-open-cover]])

## Proof

**Proof technique:** direct: separatedness makes finite intersections of the affine cover affine, affine acyclicity makes the cover acyclic for the quasi-coherent sheaf, and the Leray comparison theorem finishes.

1.1 Let $U=\operatorname{Spec}B$, $V=\operatorname{Spec}C$ be affine opens of $X$. Fix an affine open $W$ of the base of $X$ over which both lie — for the structure morphism $X\to\operatorname{Spec}\mathbb Z$ one may take $W=\operatorname{Spec}\mathbb Z$ itself. Since $X$ is separated, the criterion [F1] applies to the pair $U,V$ and shows that $U\cap V$ is affine, the empty intersection being the empty affine scheme. [F1]

2.1 Every finite intersection of members of the cover is affine. The claim is clear for one member; if $U_{i_1}\cap\cdots\cap U_{i_k}$ is affine, its intersection with the affine open $U_{i_{k+1}}$ is affine by step 1.1. Consequently, for every nonempty finite intersection $W$ of members of the cover, $W$ is affine and $\mathcal F|_W$ is quasi-coherent by [F2], so $H^q(W,\mathcal F|_W)=0$ for every $q>0$ by [F3]. This is exactly the acyclicity condition of [F4] for $\mathcal F$ and the cover, whose index set $\{0,\dots,r\}$ is linearly ordered by the given ordering of the cover. [F2, F3, F4, step 1.1]

3.1 Apply [F5] to the linearly ordered $\mathcal F$-acyclic cover $U_0,\dots,U_r$: the canonical comparison map $\check H^q(\mathcal U,\mathcal F)\to H^q(X,\mathcal F)$ is an isomorphism for every $q\ge0$, where the left-hand side is the cohomology of the ordered complex $C^\bullet(\mathcal U,\mathcal F)$ by [F6]. Boundary cases: if $X=\varnothing$ every member of the cover is empty (including when the index set is empty), so every cochain group and both sides vanish; if $r=0$ the complex has the single term $\Gamma(X,\mathcal F)$ and the comparison is the identity in degree zero; degree $q=0$ is the global-sections identification and positive $q$ is covered by the acyclicity of step 2.1. The Axiom of Choice is inherited from [F3] and [F5], with the finite induction of step 2.1 making no further selection. [F3, F5, F6, step 2.1] ∎
