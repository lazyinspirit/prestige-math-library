---
id: lem-interval-exponential-law-and-quotient-homotopies
kind: lemma
title: Interval exponential law and quotient homotopies
deps: ["def-compactly-generated-conventions-for-based-homotopy", "thm-product-universal-property", "thm-quotient-universal-property", "lem-continuity-is-local-and-pastes", "lem-compact-generation-preserves-the-cylinder-and-closed-pushouts", "lem-compact-test-exponential-law-and-products-of-quotients", "lem-weak-hausdorff-diagonals-and-closed-quotients", "lem-tube-lemma-for-a-compact-factor"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 5 §2 pp.40–41; interval specialization with local proof
    - title: N. P. Strickland, The category of CGWH spaces
      url: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf
      locator: Propositions2.6,2.11–2.12,2.17–2.20,2.24; interval-specialized ordinary proof supplied locally
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For arbitrary topological spaces $X,Y$, with $C_0(I,Y)$ carrying the ordinary compact-open topology, the assignments $H(x,t)=h(x)(t)$ give a bijection between continuous maps $X\times I\to Y$ and $X\to C_0(I,Y)$. If $q:X\to Q$ is an arbitrary quotient map, $q\times\mathrm{id}_I$ is an ordinary quotient map. For CG spaces the correspondence lifts to kified mapping spaces and respects based restrictions and homotopies. For CGWH targets the based mapping subspaces are CGWH.

## Facts & Assumptions

[F1] A compact fibre in an open set has an open tube. [[lem-tube-lemma-for-a-compact-factor]]

[F2] Fibre-constant continuous maps descend continuously through quotient maps. [[thm-quotient-universal-property]]

[F3] CGWH cylinders are ordinary products and the closed-track quotients are CGWH. [[lem-compact-generation-preserves-the-cylinder-and-closed-pushouts]]

[F4] Currying holds for kified mapping spaces and k-products. [[lem-compact-test-exponential-law-and-products-of-quotients]]

[F5] Based and loop mapping subspaces with CGWH target are CGWH. [[lem-weak-hausdorff-diagonals-and-closed-quotients]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Evaluation $C_0(I,Y)\times I\to Y$ is continuous: at $(f,t)$ with $f(t)\in O$ open, choose a closed interval neighbourhood $J$ of $t$ contained in $f^{-1}O$. Then $W(J,O)\times\operatorname{int}_I J$ is a neighbourhood mapping into $O$. Relative interval neighbourhoods work at 0 and 1. [algebra]

2.1 For continuous $H:X\times I\to Y$, the inverse image of $W(K,O)$ under $h(x)=H(x,-)$ is open: for any of its points $x$, the open set $H^{-1}O$ contains $\{x\}\times K$ and F1 supplies a tube. Thus h is continuous into $C_0(I,Y)$. Conversely compose $h\times\mathrm{id}_I$ with step 1.1. The resulting functions are inverse under evaluation at each $(x,t)$. [F1, step 1.1]

3.1 If a continuous $H:X\times I\to Y$ is constant on each fibre of $q\times\mathrm{id}_I$, its transpose is constant on q-fibres. By F2 it descends to a continuous $Q\to C_0(I,Y)$, which uncurries by step 2.1 to a continuous $Q\times I\to Y$. Apply this to the characteristic function of $U\subseteq Q\times I$ into the Sierpinski space with opens $\varnothing,\{1\},\{0,1\}$. Continuity of the characteristic function is exactly openness of U. If $(q\times\mathrm{id})^{-1}U$ is open, the preceding descent makes U open. The map is surjective and continuous; hence it is quotient. [F2, step 2.1]

4.1 For CG spaces the kified correspondence is F4; the interval product already has its ordinary topology. Endpoint and basepoint equations are preserved pointwise by transpose and inverse transpose. Continuous maps from CG parameters landing in the corresponding subspace lift to its kification by the CG-source property contained in the conventions of F4. For WH targets these subspaces are closed and CGWH by F5; F3 supplies the closed-track quotient constructions. Applying the same correspondence to a cylinder parameter, or using the quotient-times-I conclusion of step 3.1, carries relative and based homotopies to relative and based homotopies. [F3, F4, F5, step 2.1, step 3.1] ∎
