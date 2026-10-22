---
id: thm-epsilon-upsilon-are-concordance-homomorphism-data
kind: theorem
title: "Epsilon and Upsilon concordance data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - lem-tau-connected-sum-filtered-tensor-product
  - def-epsilon-from-filtered-knot-floer-complex
  - def-upsilon-function-from-filtered-complex
  - lem-epsilon-stable-equivalence-and-not-a-homomorphism
  - thm-upsilon-additivity-mirror-and-genus-bound
  - thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence
  - def-countable-choice
  - def-axiom-of-choice
  - thm-knot-concordance-is-an-abelian-group
  - def-smooth-knot-concordance
  - def-knot-connected-sum-and-prime-knot
  - def-reverse-mirror-of-oriented-knot
  - def-smooth-and-topological-slice-genus
dependency_level: 12
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only the smooth concordance group branch is used. The Floer-theoretic supplier chain declares ACω; full AC remains a separate plan edge. No topological concordance or slice-genus branch is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, Proposition 3.2 and §4"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "PDF pp.6–9; epsilon tensor/sign rules and the associated ordered quotient group"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §§1–5"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Propositions 1.2, 1.4–1.9, Corollary 1.12, and Theorem 1.11"
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon, §§7–12"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: "Additivity, mirror duality, concordance invariance, and the smooth four-genus bound"
---

## Statement

Let $\mathcal C_{\mathrm{sm}}$ be the smooth knot concordance group, with addition induced by oriented connected sum and inverse represented by reverse mirror. The function $\epsilon: \mathcal C_{\mathrm{sm}}\to\{-1,0,1\}$ is well-defined and concordance-invariant, but it is not a homomorphism to $\mathbb Z$. The map
$$ \Upsilon:\mathcal C_{\mathrm{sm}}\longrightarrow \mathrm{PL}([0,2],\mathbb R),\qquad [K]\longmapsto\Upsilon_K, $$
is a group homomorphism, where $\mathrm{PL}([0,2],\mathbb R)$ is the abelian group of continuous piecewise-linear real-valued functions under pointwise addition. For every representative $K$ and $0\le t\le1$, its value satisfies $|\Upsilon_K(t)|\le t\,g_4^{\mathrm{sm}}(K)$.

## Statement references

[[def-smooth-knot-concordance|Smooth concordance classes and the smooth concordance group]]

[[thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence|Stable filtered equivalence under smooth concordance]]

[[lem-epsilon-stable-equivalence-and-not-a-homomorphism|Epsilon stability, sign, tensor rules, and non-additivity]]

[[thm-upsilon-additivity-mirror-and-genus-bound|Upsilon additivity, mirror symmetry, and genus bound]]

[Hom, *The knot Floer complex and the smooth concordance group*, Proposition 3.2 and §4](https://arxiv.org/pdf/1111.6635)

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §§1–5](https://arxiv.org/pdf/1407.1795)

[Livingston, *Notes on the knot concordance invariant Upsilon*, §§7–12](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

## Facts & Assumptions

**Given:** The smooth concordance group, the epsilon invariant, the Upsilon function, and the smooth four-ball genus with the conventions stated above.

[F1] [[thm-knot-concordance-is-an-abelian-group]]: in the smooth branch, the operation is oriented connected sum, the inverse is reverse mirror, and a class is zero precisely when represented by a smoothly slice knot. The smooth proof branch was inspected; the topological branch is not used.

[F2] [[thm-upsilon-additivity-mirror-and-genus-bound]]: Upsilon is additive under connected sum, is negated by reverse mirror, and obeys the smooth four-ball genus bound. Its local proof still has the missing cobordism input recorded there.

[F3] [[lem-epsilon-stable-equivalence-and-not-a-homomorphism]]: epsilon is stable-equivalence invariant, satisfies the sign/tensor rules, and has a non-additivity witness. Its stable-equivalence and tau-zero example obligations remain unresolved.

[F4] [[thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence]]: its Statement gives stable filtered equivalence under smooth concordance; its current proof is conditional on the escalated slice-complex lemma and incomplete filtered tensor input, so it does not establish readiness.

## Proof

1.1 If $K$ and $J$ represent the same smooth concordance class, then $K\#(-J)$ is smoothly slice by [F1], so $g_4^{\mathrm{sm}}(K\#(-J))=0$. The genus bound in [F2] gives $\Upsilon_{K\#(-J)}(t)=0$ for $0\le t\le1$; reflection gives the same for all $t\in[0,2]$. [given, F1, F2]

1.2 By additivity and reverse-mirror antisymmetry in [F2],
$$ 0=\Upsilon_{K\#(-J)}(t)=\Upsilon_K(t)-\Upsilon_J(t), $$
so $\Upsilon_K=\Upsilon_J$ and the function is well-defined on smooth concordance classes. The same additivity identity on arbitrary representatives shows that $[K]\mapsto\Upsilon_K$ is a homomorphism to $\mathrm{PL}([0,2],\mathbb R)$. [given, F1, F2, step 1.1, algebra]

1.3 If $K$ and $J$ are smoothly concordant, [F4] gives stable filtered equivalence of their knot Floer complexes. Stable-equivalence invariance in [F3] then gives $\epsilon(K)=\epsilon(J)$, so epsilon is well-defined on $\mathcal C_{\mathrm{sm}}$. The trefoil witness in [F3] shows that it is not additive as a $\mathbb Z$-valued function. [given, F3, F4] ∎

## Unresolved proof obligations

The concordance-to-stable-equivalence implication [F4] is conditional on the absent tau tensor and large-surgery/cobordism suppliers. Epsilon stability under arbitrary acyclic summands in [F3] is also not proved locally. The Upsilon genus bound in [F2] is conditional on unproved triangle/cobordism inputs. Thus the item is escalated and does not claim readiness or acceptance.
