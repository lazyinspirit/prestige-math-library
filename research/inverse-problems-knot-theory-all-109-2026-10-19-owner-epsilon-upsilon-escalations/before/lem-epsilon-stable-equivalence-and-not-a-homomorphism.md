---
id: lem-epsilon-stable-equivalence-and-not-a-homomorphism
kind: lemma
title: "Epsilon is stable-equivalence invariant but not a homomorphism"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - thm-tau-is-concordance-invariant-and-four-ball-genus-bound
  - lem-tau-connected-sum-filtered-tensor-product
  - def-epsilon-from-filtered-knot-floer-complex
  - def-upsilon-function-from-filtered-complex
  - def-countable-choice
  - def-axiom-of-choice
  - def-smooth-knot-concordance
  - def-knot-connected-sum-and-prime-knot
  - def-reverse-mirror-of-oriented-knot
  - lem-knot-floer-duality-and-filtration-swap
  - thm-knot-concordance-is-an-abelian-group
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite tensor and staircase calculations use no choice. The grid model is declared with ACω by its analytic supplier; that supplier's proof is absent. The plan's separate full-AC edge is retained but is not used by the local algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, §§3 and 6"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "Proposition 3.2 and §6, PDF pp.6–7 and 14–17; epsilon sign and tensor rules, vertical/horizontal arrows, and stable-equivalence algebra"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance, §3.1"
      url: "https://arxiv.org/pdf/1512.00383"
      locator: "PDF pp.8–10; stable-equivalence theorem, epsilon simplified-basis description, sum rules, and the tau-zero counterexample"
    - title: "Jennifer Hom, A note on the concordance invariants epsilon and upsilon, §2"
      url: "https://arxiv.org/pdf/1407.8200"
      locator: "§2, PDF pp.2–4; explicit filtered summand and epsilon/Upsilon counterexample computations"
---

## Statement

Let $K$ and $J$ be smooth oriented knots, and use the epsilon sign convention from the preceding definition. If their knot Floer complexes are stably filtered equivalent, meaning that there are totally acyclic bifiltered complexes $A$ and $B$ with $\mathrm{CFK}^{\infty}(K)\oplus A$ filtered-chain-homotopy equivalent to $\mathrm{CFK}^{\infty}(J)\oplus B$, then $\epsilon(K)=\epsilon(J)$. The acyclic summands here need not be acyclic after taking either associated-graded filtration.

The invariant satisfies $\epsilon(-K)=-\epsilon(K)$, $\epsilon(K)=0\Rightarrow\tau(K)=0$, and the tensor rules
$$ \epsilon(K)=\epsilon(J)\Rightarrow\epsilon(K\#J)=\epsilon(K),\qquad \epsilon(K)=0\Rightarrow\epsilon(K\#J)=\epsilon(J). $$
The converse of $\epsilon(K)=0\Rightarrow\tau(K)=0$ fails: the knot $T_{2,5}\#-T_{4,5}\#T_{2,3;2,5}$ has $\tau=0$ and $\epsilon=1$, where $T_{p,q}$ is the positive $(p,q)$ torus knot and $T_{2,3;2,5}$ is the $(2,5)$ cable of the right-handed trefoil with longitudinal winding two. Epsilon is not an integer-valued homomorphism on the smooth concordance group: the right-handed trefoil has $\epsilon=1$ and its connected sum with itself also has $\epsilon=1$, not $2$.

## Statement references

[[def-epsilon-from-filtered-knot-floer-complex|Epsilon sign convention and map definition]]

[[def-knot-floer-filtration-and-tau|The current diagram-specific tau interface; model independence remains unresolved]]

[Hom, *The knot Floer complex and the smooth concordance group*, §§3 and 6](https://arxiv.org/pdf/1111.6635)

[Hom, *A survey on Heegaard Floer homology and concordance*, §3.1](https://arxiv.org/pdf/1512.00383)

[Hom, *A note on the concordance invariants epsilon and upsilon*, §2](https://arxiv.org/pdf/1407.8200)

## Facts & Assumptions

**Given:** The filtered complexes of smooth oriented knots, the epsilon definition above, and the connected-sum tensor-product convention.

[F1] [[def-epsilon-from-filtered-knot-floer-complex]]: epsilon is $1$ when $F_\tau$ vanishes, $-1$ when $G_\tau$ vanishes, and $0$ when neither vanishes; equivalently the distinguished vertical class is respectively a horizontal boundary, not a horizontal cycle, or a horizontal cycle that is not a boundary.

[F2] [[lem-knot-floer-duality-and-filtration-swap]]: conjugation exchanges the two filtrations, while reverse-mirror duality negates both; its current analytic proof remains conditional.

[A1] [[lem-tau-connected-sum-filtered-tensor-product]] (present, proof incomplete): its Statement gives the normalized filtered tensor product, but its Proof explicitly leaves the neck-stretching/Kunneth equivalence open. No completed supplier proof is available.

[A2] [[def-knot-floer-filtration-and-tau]]: the current definition fixes the threshold only for specified diagram/surface data and explicitly defers model independence.

[A3] [[thm-tau-is-concordance-invariant-and-four-ball-genus-bound]] (present, proof conditional): its Statement gives the knot-level tau invariant, but its Proof depends on escalated diagram-independence, tensor, and large-surgery suppliers.

## Proof

1.1 If $f:C\to C'$ is a bifiltered chain homotopy equivalence without stabilization, it induces isomorphisms on the vertical and horizontal subquotient homologies and commutes with the quotient-and-inclusion maps defining $F_\tau$ and $G_\tau$. Isomorphisms preserve whether a map is zero, so the three-case definition gives $\epsilon(C)=\epsilon(C')$. This proves invariance under filtered chain homotopy equivalence, but it does not yet prove invariance after adjoining arbitrary totally acyclic summands. [given, F1, algebra]

1.2 Under [A1], the vertical generator for $K\#J$ is $x\otimes y$, and the horizontal differential is $\partial_h\otimes1+1\otimes\partial_h$. If both distinguished classes are horizontal boundaries, their tensor is a boundary because each is a horizontal cycle; if both are not horizontal cycles, the tensor is not a cycle; if one is a horizontal cycle that is not a boundary, tensoring with a boundary gives a boundary, and tensoring with a noncycle gives a noncycle. If both classes are cycles that are not boundaries, their tensor class is nonzero in the tensor-product homology over $\mathbb F_2$. These cases prove the two stated tensor rules. [given, F1, A1, algebra]

1.3 For the right-handed trefoil, use the staircase basis $x_0,x_1,x_2$ with $(M,A)(x_0)=(0,1)$, $(M,A)(x_1)=(-1,0)$, $(M,A)(x_2)=(-2,-1)$, and $\partial x_1=Ux_0+x_2$, $\partial x_0=\partial x_2=0$. The vertical differential pairs $x_1$ with $x_2$, leaving $x_0$ as the vertical generator. At the horizontal level of that generator, the horizontal arrow from $U^{-1}x_1$ enters $x_0$, so the generator is a horizontal boundary and $\epsilon(T_{2,3})=1$. Applying step 1.2 gives $\epsilon(T_{2,3}\#T_{2,3})=1$. If epsilon were an additive map to $\mathbb Z$, this value would be $1+1=2$, a contradiction. [given, F1, step 1.2]

1.4 When $\epsilon=0$, the distinguished class is a cycle and not a boundary in the horizontal complex, so the same generator represents the vertical and horizontal rank-one homology classes. The knot Floer conjugation symmetry [F2] exchanges the two filtrations and reverses the horizontal filtration level; hence the vertical filtration level $\tau(K)$ equals its negative. Therefore $\tau(K)=0$, conditional on the knot-level normalization in [A3]. [given, F1, F2, A2, A3, algebra]

1.5 The displayed converse witness requires locally verifying $\tau(T_{2,5})=2$, $\tau(T_{4,5})=6$, $\tau(T_{2,3;2,5})=4$, the connected-sum value $2-6+4=0$, and the filtered-basis comparison giving $\epsilon=1$. No current in-run item proves these cable/staircase computations or Hom's comparison lemma, so neither the witness's $\tau=0$ nor its $\epsilon=1$ conclusion is established locally. The bibliography records the literature location but does not replace those proofs. [given, A2, A3, algebra]

## Unresolved proof obligations

The tau page is present, but its definition is diagram/surface-specific; the tau invariance theorem is present but conditional on escalated diagram-independence, tensor, and cobordism suppliers. The central epsilon stable-equivalence step is not proved here. The actual concordance theorem supplies acyclic summands that need not be filtered-acyclic; the filtered-chain-homotopy argument in step 1.1 does not remove them. The needed algebraic cancellation argument must be supplied before the stable-equivalence claim or concordance-invariance conclusion can be marked ready. The tensor rule in step 1.2 awaits the incomplete `lem-tau-connected-sum-filtered-tensor-product` proof. The tau-zero counterexample's epsilon computation awaits a local proof of the cited filtered-basis comparison; Hom's citation is not used as a proof substitute.
