---
id: "thm-leray-acyclic-cover-theorem"
kind: "theorem"
title: "Leray acyclic-cover comparison"
status: draft
origin: pipeline
deps: [def-acyclic-cover-for-sheaf, thm-cech-to-sheaf-cohomology-comparison, lem-acyclic-rows-and-columns-of-cech-double-complex, def-axiom-of-choice, def-cech-cohomology-open-cover, def-sheaf-cohomology-derived-global-sections, def-quasi-isomorphism, def-godement-resolution]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $\mathcal F$ be a sheaf of abelian groups on $X$ and let
$\mathcal U=(U_i)_{i\in I}$ be an open cover of $X$ indexed by a linearly
ordered set which is $\mathcal F$-acyclic, that is, every nonempty finite
intersection of members of $\mathcal U$ satisfies
$H^q(W,\mathcal F|_W)=0$ for all $q>0$
([[def-acyclic-cover-for-sheaf]]). Then the canonical Čech-to-sheaf comparison
map
$$\varphi^p_{\mathcal U}:\check H^p(\mathcal U,\mathcal F)\longrightarrow H^p(X,\mathcal F)$$
of [[thm-cech-to-sheaf-cohomology-comparison]] is an isomorphism for every
$p\ge0$; it is natural in $\mathcal F$, compatible with refinement, and in
degree zero it is the identity of $\Gamma(X,\mathcal F)$ under the canonical
identifications of $\check H^0(\mathcal U,\mathcal F)$ and
$H^0(X,\mathcal F)$ with the global sections
([[thm-cech-to-sheaf-cohomology-comparison]],
[[def-cech-cohomology-open-cover]],
[[def-sheaf-cohomology-derived-global-sections]]).

## Facts & Assumptions

[F1] In the Čech–Godement double complex of an ordered cover, $u:\Gamma(X,G^\bullet)\to\operatorname{Tot}D$ is a quasi-isomorphism, and if $\mathcal U$ is $\mathcal F$-acyclic then $w:C^\bullet(\mathcal U,\mathcal F)\to\operatorname{Tot}D$ is a quasi-isomorphism as well ([[lem-acyclic-rows-and-columns-of-cech-double-complex]]).

[F2] The comparison map is $\varphi^p_{\mathcal U}=H^p(u)^{-1}\circ H^p(w)$ under the identification $H^p(X,\mathcal F)\cong H^p(\Gamma(X,G^\bullet))$ ([[thm-cech-to-sheaf-cohomology-comparison]]).

[F3] A map of complexes is a quasi-isomorphism when all its induced maps on cohomology are isomorphisms ([[def-quasi-isomorphism]]).

[F4] A cover is $\mathcal F$-acyclic when $H^q(W,\mathcal F|_W)=0$ for $q>0$ on every nonempty finite intersection $W$ of its members ([[def-acyclic-cover-for-sheaf]]).

## Proof

**Given:** A topological space $X$, an abelian sheaf $\mathcal F$, an ordered open cover $\mathcal U$ of $X$ that is $\mathcal F$-acyclic, and the comparison map $\varphi^\bullet_{\mathcal U}$ of [[thm-cech-to-sheaf-cohomology-comparison]].

1.1 The hypothesis is exactly the acyclicity condition of [F4]: every nonempty finite intersection $W$ of members of $\mathcal U$ satisfies $H^q(W,\mathcal F|_W)=0$ for $q>0$. By [F1] the map $w:C^\bullet(\mathcal U,\mathcal F)\to\operatorname{Tot}D$ is therefore a quasi-isomorphism, and the same statement [F1] gives that $u:\Gamma(X,G^\bullet)\to\operatorname{Tot}D$ is a quasi-isomorphism; by [F3] the induced maps $H^p(u)$ and $H^p(w)$ are isomorphisms in every degree. [F1, F4]

2.1 The comparison map is $\varphi^p_{\mathcal U}=H^p(u)^{-1}\circ H^p(w)$ under the identification $H^p(X,\mathcal F)\cong H^p(\Gamma(X,G^\bullet))$ by [F2]; a composite of two isomorphisms of abelian groups is an isomorphism, and $H^p(u)^{-1}$ exists as an isomorphism by [step 1.1]. Hence $\varphi^p_{\mathcal U}$ is an isomorphism for every $p\ge0$. The listed extra properties are the corresponding assertions of [[thm-cech-to-sheaf-cohomology-comparison]], namely naturality in $\mathcal F$, compatibility with refinement together with independence of the refinement function, and the degree-zero identification with the identity of $\Gamma(X,\mathcal F)$. ∎ [F2, step 1.1]
