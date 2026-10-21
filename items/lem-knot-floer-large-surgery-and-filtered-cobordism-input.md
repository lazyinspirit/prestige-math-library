---
id: lem-knot-floer-large-surgery-and-filtered-cobordism-input
kind: lemma
title: "A genus-g knot cobordism bounds the tau difference"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - def-smooth-knot-concordance
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-generic-movie-of-an-oriented-knot-cobordism
  - lem-smooth-link-cobordisms-admit-finite-generic-movies
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - def-countable-choice
  - lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps
  - lem-tau-threshold-under-nonzero-filtered-maps
  - lem-tau-connected-sum-filtered-tensor-product
  - lem-tau-additive-for-filtered-tensor-products
  - lem-knot-floer-duality-and-filtration-swap
  - lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The Statement retains the run’s AC_omega branch. The cut-arc construction is local finite smooth geometry; Hom’s published F2 knot-concordance and genus theorem is imported as stated, with no reconstructed proof under a weaker set-theoretic base."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Proposition 3.1 and Lemma 3.5, §§3.1 and 3.3–3.4; retained as source context in its integral coefficient setup, not used as an F2 map input"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§3.1, Theorem 3.1(2), printed p.8; §3.2.1, Theorem 3.4, pp.8–9; coefficients F=Z/2Z throughout, stated p.2"
    - title: "Ian Zemke, Link cobordisms and absolute gradings on link Floer homology"
      url: "https://arxiv.org/pdf/1701.03454v2"
      locator: "Theorem 1.4, §§7.3, 9.9, and 10.1; Alexander grading shifts and the cobordism genus inequality"
---

## Statement

Assume the Axiom of Countable Choice. Let $S$ be a connected compact smooth oriented surface properly embedded in $S^3\times[0,1]$, with product collars and oriented boundary $-K_0\times\{0\}\sqcup K_1\times\{1\}$ for smooth oriented knots $K_0,K_1$. Let $g$ be the genus of $S$, so its two boundary components give $\chi(S)=-2g$, and use the standard absolute Alexander normalization for the endpoint knot Floer complexes. Then
$$|\tau(K_1)-\tau(K_0)|\le g.$$
In particular, a smooth concordance annulus gives equal tau values, and a genus-$g$ surface from a knot to the unknot gives the four-ball genus estimate.

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized tau value from the filtered complex]]

[[def-smooth-knot-concordance|Smooth cobordisms with oriented boundary and product collars]]

[[def-knot-floer-cobordism-map|The representative map for a decorated knot cobordism]]

[[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing|The required triangle moduli spaces]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, Theorem 1.1 and §§3.3–3.5](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1–3.2](https://arxiv.org/pdf/1512.00383v3)

[Zemke, *Link cobordisms and absolute gradings on link Floer homology*, Theorem 10.1](https://arxiv.org/pdf/1701.03454v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the collared smooth oriented cobordism $S$, its endpoint knots, and the fixed Alexander normalization.

[A1] [[def-countable-choice]] states that every sequence of nonempty sets admits a choice function; this is the assumption retained in the Statement.

[F1] [[def-knot-floer-filtration-and-tau]] defines the finite normalized threshold by the first filtration level mapping nontrivially to total homology. Hom's definition in §3.1 uses the same threshold for the standard knot Floer complex, with target $\widehat{HF}(S^3)\cong\mathbb F_2$; nonzero and surjective are equivalent.

[F2] [[lem-tau-connected-sum-filtered-tensor-product]] uses the fixed oriented connected-sum convention. In Hom's concordance group [F3], $-K$ denotes the reverse mirror, formed using the fixed reflection convention and then reversing the knot orientation.

[F3] **External input, authorized by the run-specific source boundary.** Hom, *A survey on Heegaard Floer homology and concordance*, §3.1, Theorem 3.1(1)–(2), printed p. 8, states that $\tau$ is a homomorphism from the smooth knot concordance group and that $|\tau(K)|\le g_4(K)$. The survey states on printed p. 2 that it works throughout with $\mathbb F_2$ coefficients. I read the theorem and threshold definition; I do not claim to reconstruct the cited proof.

[F4] [[def-knot-floer-filtration-and-tau]] fixes the one-generator standard unknot diagram at filtration zero. In its genus-zero one-pointed model the chain group has one generator and zero differential, so its total homology is $\mathbb F_2$ and the threshold is zero.

[F5] [[def-smooth-and-topological-slice-genus]] defines $g_4^{\mathrm{sm}}$ as the minimum genus of a smooth connected oriented surface in the four-ball with the stated boundary.

## Proof

**Given:** The hypotheses of the Statement.

1.1 Choose a smooth embedded arc in $S$ joining its two boundary components. After orientation-preserving isotopies of the endpoint knots inside their product collars, which preserve their knot types, choose a standard reference arc with both endpoints at the same point of $S^3$; its tubular complement is $(S^3\setminus\operatorname{int}D^3)\times[0,1]$, a four-ball after rounding corners. Since $S^3\times[0,1]$ is simply connected, the chosen arc is homotopic rel endpoints to this reference. A generic one-parameter homotopy is an isotopy through embedded arcs: the double-point condition has parameter-domain dimension $1+1+1=3<4$, and the nonimmersion condition has dimension $1+1=2<4$. Extend its velocity field from the compact arc family to a time-dependent ambient vector field using a tubular neighborhood and a bump function; integrating this field gives an ambient isotopy carrying the arc neighborhood to the reference neighborhood. Delete that tubular neighborhood from the ambient product and delete the corresponding open rectangular strip from $S$. The remaining surface is connected and has one boundary component, the oriented sum $K_1\#(-K_0)$ under [F2]. Since $\chi(S)=-2g$, cutting along this arc raises Euler characteristic by one to $1-2g$; the resulting surface has one boundary component, so its genus is $g$. [A1, F2, F5, given, construct, algebra]

2.1 Apply Hom's imported genus bound [F3] to the surface from step 1.1: $|\tau(K_1\#(-K_0))|\le g_4^{\mathrm{sm}}(K_1\#(-K_0))\le g$. Hom's homomorphism statement [F3] gives $\tau(K_1\#(-K_0))=\tau(K_1)-\tau(K_0)$, proving the asserted inequality. For a concordance annulus $g=0$, so the endpoint values agree. If one endpoint is the standard unknot, [F4] gives $\tau(U)=0$, and the inequality is the four-ball genus estimate for the other endpoint. [F3, F4, F5, step 1.1, algebra] ∎
