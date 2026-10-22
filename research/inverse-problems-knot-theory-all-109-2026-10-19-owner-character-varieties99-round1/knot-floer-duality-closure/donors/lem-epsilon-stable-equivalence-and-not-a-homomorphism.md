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
  - lem-epsilon-stable-core-from-finite-filtered-splittings
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

[F1] [[def-epsilon-from-filtered-knot-floer-complex]]: epsilon is $1$ when $F_\tau$ vanishes, $-1$ when $G_\tau$ vanishes, and $0$ when neither vanishes. Its local two-hook supplier proves that both maps cannot vanish; no simultaneous horizontal-representative theorem is supplied by this Definition.

[F2] [[lem-knot-floer-duality-and-filtration-swap]]: conjugation exchanges the two filtrations, while reverse-mirror duality negates both; the actual analytic diagram maps, absolute Seifert origins and Maslov-graded swap equivalence are supplied.

[F4] [[lem-epsilon-stable-core-from-finite-filtered-splittings]] proves invariance of the vertical threshold and both $F_\tau,G_\tau$ zero patterns in the finite free Maslov-graded bifiltered homotopy category used for knot Floer stable equivalence. It permits arbitrary totally acyclic stabilizing summands of that category, and does not define epsilon on them.

[A1] [[lem-tau-connected-sum-filtered-tensor-product]] (present, proof incomplete): its Statement gives the normalized filtered tensor product, but its Proof explicitly leaves the neck-stretching/Kunneth equivalence open. No completed supplier proof is available.

[A2] [[def-knot-floer-filtration-and-tau]]: the current definition fixes the threshold only for specified diagram/surface data and explicitly defers model independence.

[A3] [[thm-tau-is-concordance-invariant-and-four-ball-genus-bound]] (present, proof conditional): its Statement gives the knot-level tau invariant, but its Proof depends on escalated diagram-independence, tensor, and large-surgery suppliers.

[A4] The tensor-rule argument additionally requires simultaneous vertical/horizontal representatives for the distinguished classes, with the horizontal boundary/noncycle/nonboundary-cycle alternatives equivalent to the hook-map definition and compatible with the actual tensor identification. This exact algebraic normal-form supplier has not been proved locally; it is an authoring obligation, not a conclusion of [F1].

## Proof

1.1 In the finite-rank free Maslov-graded knot Floer category, [F4] proves the stable-equivalence conclusion directly. Its finite endomorphism matrices strictify homotopy idempotents and give a unique non-acyclic indecomposable core up to filtered homotopy. The rank-one vertical homology of each original knot complex forces its internal acyclic complementary summands to have acyclic vertical complexes. Consequently its vertical threshold and the zero/nonzero patterns of $F_\tau,G_\tau$ are precisely those of that core. Stable equivalence identifies the two cores even if the externally added acyclic summands have nonzero vertical or associated-graded homology. Thus the three-case epsilon values in [F1] agree. This argument does not apply the epsilon definition to the stabilized complexes themselves. [given, F1, F4, algebra]

1.2 Conditional on [A1] and the exact normal-form input [A4], the vertical generator for $K\#J$ is $x\otimes y$, and the horizontal differential is $\partial_h\otimes1+1\otimes\partial_h$. If both distinguished classes are horizontal boundaries, their tensor is a boundary because each is a horizontal cycle; if both are not horizontal cycles, the tensor is not a cycle; if one is a horizontal cycle that is not a boundary, tensoring with a boundary gives a boundary, and tensoring with a noncycle gives a noncycle. If both classes are cycles that are not boundaries, their tensor class is nonzero in the tensor-product homology over $\mathbb F_2$. These cases prove the two stated tensor rules. [given, F1, A1, A4, algebra]

2.1 For the right-handed trefoil, use the staircase basis $x_0,x_1,x_2$ with $(M,A)(x_0)=(0,1)$, $(M,A)(x_1)=(-1,0)$, $(M,A)(x_2)=(-2,-1)$, and $\partial x_1=Ux_0+x_2$, $\partial x_0=\partial x_2=0$. The vertical differential pairs $x_1$ with $x_2$, leaving $x_0$ as the vertical generator. At the horizontal level of that generator, the horizontal arrow from $U^{-1}x_1$ enters $x_0$, so the generator is a horizontal boundary and $\epsilon(T_{2,3})=1$. Applying step 1.2 gives $\epsilon(T_{2,3}\#T_{2,3})=1$. If epsilon were an additive map to $\mathbb Z$, this value would be $1+1=2$, a contradiction. [given, F1, step 1.2]

3.1 The implication $\epsilon=0\Rightarrow\tau=0$ requires no simultaneous representative normal form once the actual normalized horizontal homology in [F2] is supplied. Set $s=\tau$ and use $G_s\ne0$ to choose a Maslov-zero southwest-hook cycle $y=z+\ell$ mapping to the normalized vertical class, where $z$ is on the lower vertical ray and $\ell$ is strictly left at $j=s$. Homogeneity is available by projecting a preimage to Maslov degree zero. Its horizontal projection $h=z_c+\ell$, with $z_c$ its corner part, is a horizontal cycle. If it were a horizontal boundary, write a bounding chain as $a_++a_-$, splitting strictly right support from support at $i\le0$. The right component of its boundary is zero; the corner is $z_c=(\partial a_+)_c+(\partial a_-)_c$. In the northeast hook, the chain $a_++(a_-)_c$ then has boundary exactly $z_c$: the left part of $a_-$ cannot reach the corner, and differential from the corner toward the left is killed in that hook. But $F_s([z])$ is represented by $z_c$, so this would give $F_s=0$, contrary to $\epsilon=0$. Thus $h$ is a nonzero horizontal homology class in Maslov degree zero. Multiplication by $U^s$ takes it to horizontal level zero and Maslov degree $-2s$. Actual normalized conjugation [F2] identifies that horizontal homology with the vertical homology generated in Maslov degree zero, giving $s=0$. The geometric conjugation and absolute normalization used here are supplied by [F2]; thus this implication no longer has a separate conjugation hold. [given, F1, F2, A2, construct, algebra]

4.1 The displayed converse witness requires locally verifying $\tau(T_{2,5})=2$, $\tau(T_{4,5})=6$, $\tau(T_{2,3;2,5})=4$, the connected-sum value $2-6+4=0$, and the filtered-basis comparison giving $\epsilon=1$. No current in-run item proves these cable/staircase computations or Hom's comparison lemma, so neither the witness's $\tau=0$ nor its $\epsilon=1$ conclusion is established locally. The bibliography records the literature location but does not replace those proofs. [given, A2, A3, step 3.1, algebra]

## Unresolved proof obligations

The finite filtered stable-core argument is supplied in [F4], without assuming arbitrary totally acyclic summands are vertically or horizontally acyclic. The algebraic trichotomy is supplied by the local two-hook proof; actual CFK-infinity realization and the tensor-compatible horizontal-representative normal form [A4] remain separate authoring obligations. The connected-sum tensor identification [A1], the separate grid model comparison remains held; normalized analytic conjugation is supplied by [F2]. The displayed torus/cable witness also requires the exact admitted complexes and Hom comparison computation identified in step 4.1. All original Statement clauses are preserved; the full lemma remains escalated.
