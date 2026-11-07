---
id: thm-hasse-norm-theorem-for-cyclic-extensions
kind: theorem
title: "Hasse norm theorem for cyclic extensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-number-field
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - lem-number-field-completion-tensor-and-norm-in-zf
  - lem-canonical-local-norm-preimages-for-number-field-completions-in-zf
  - lem-early-number-field-idele-norm-index-and-h1
  - lem-cyclic-number-field-local-norm-data-descend-to-constructible-universe
  - thm-constructible-inner-model-semantic-and-formal-schema
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  The original Statement is proved in ZF. The conditional finite-level H1
  argument uses AC/CC/DC only inside the constructible universe, where the
  published formula-by-formula ZF inner-model schema supplies them. Explicit
  residue-tree local-solvability descent and finite rational-coordinate norm
  witnesses transfer the conclusion to the ambient universe. No ambient
  choice or arbitrary idelic-cohomology absoluteness is asserted.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §3, Theorem 3.1 and proof, printed pp.234–235."
    - title: "J. Neukirch, Algebraic Number Theory, English translation"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VI §4.4, Hasse Norm Theorem and proof, printed p.384."
verification: {}
---

## Statement

Let $L/K$ be a finite cyclic extension of number fields. An element
$a\in K^\times$ is a norm from $L^\times$ if and only if, for every place
$v$ of $K$ and every place $w$ of $L$ above $v$, it is a norm from
$L_w^\times$ to $K_v^\times$.

## Statement references

[[def-number-field]]

[[lem-number-field-completion-tensor-and-norm-in-zf]]

[[lem-canonical-local-norm-preimages-for-number-field-completions-in-zf]]

[[lem-early-number-field-idele-norm-index-and-h1]]

[[lem-cyclic-number-field-local-norm-data-descend-to-constructible-universe]]

[[thm-constructible-inner-model-semantic-and-formal-schema]]

[Milne, Class Field Theory, VIII §3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** Exactly the finite cyclic extension and local norm hypotheses in the original Statement. No choice axiom is assumed in the unqualified claim.

[F1] For the ZF calculation, define $I_L$ as the multiplicative group of all nonzero completion families that are units outside finitely many finite places, and $C_L=I_L/L^\times$ by the diagonal subgroup. These are ordinary group and quotient constructions in ZF. Under AC they are the underlying groups in the supplied idèle conventions; no topological existence theorem is used by this definition. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F2] The completion tensor and product-of-local-norm formulas hold in ZF at every finite and archimedean place. [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F3] In ZF, fixed finite rational bases specify simultaneous local norm preimages; local norms of one global parameter at every place lift to one idèle with that norm, with no countable choice. [[lem-canonical-local-norm-preimages-for-number-field-completions-in-zf]]

[F4] Under AC, Countable Choice and DC, the actual finite-level number-field theorem proves $H^1(G,C_L)=0$ for finite Galois $L/K$. This is a number-field supplier, unlike the former function-field-only invariant-module citation. [[lem-early-number-field-idele-norm-index-and-h1]]

[A1] AC, Countable Choice and DC are temporary hypotheses only for step 3.1's supplied conditional branch. They are not hypotheses of the original Statement. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F5] In ZF, every fixed ZFC axiom holds relativized to the constructible universe. This formula-by-formula schema permits relativizing a fixed finite proof using AC; it makes no assertion of a set model or of arithmetized consistency transfer. [[thm-constructible-inner-model-semantic-and-formal-schema]]

[F6] For finite rational presentations of a cyclic number-field extension and parameter, ambient local-norm solvability descends to the constructible universe by finite residue solution trees and algebraic archimedean sign data. An internal global witness has finite rational coordinates and is an ambient global witness. [[lem-cyclic-number-field-local-norm-data-descend-to-constructible-universe]]

[L1] A sufficient cyclic norm-kernel assertion is
$$\ker(N_G:C_L\to C_L)=(\sigma-1)C_L,\qquad N_G=1+\sigma+\cdots+\sigma^{[L:K]-1},$$
where the multiplicative idèle-class group is written additively. For a norm-kernel class it amounts to constructing $[z]$ with $[y]=(\sigma-1)[z]$. The supplied [F4] proves it under [A1]. Steps 4.1–4.2 below use it only internally in the constructible universe for a constructible local lift, not as an assertion about every ambient idèle class. Full global $H^2$ invariants and degree-three class-formation boundaries are unnecessary.

## Proof

**Proof technique:** construct local norm lifts, prove the finite cyclic conditional argument, and transfer its arithmetic conclusion through the constructible universe.

1.1 First suppose $a=N_{L/K}(x)$ with $x\in L^\times$. For a place $v$, [F2] gives $a=\prod_{w\mid v}N_{L_w/K_v}(x_w)$. The local extensions $L_w/K_v$ above one $v$ are isomorphic over $K_v$, since the finite cyclic group permutes their factors transitively. For a specified factor $w_0$, choose for each of the finitely many $w$ the least power of a fixed cyclic generator carrying $w_0$ to $w$. Transporting $x_w$ back to $L_{w_0}$ preserves its local norm. Their finite product therefore has norm $a$. This proves the global-to-local implication for every $w_0$, with no simultaneous infinite family of selections. [F2, given, construct, algebra]

1.2 Conversely, suppose $a$ is a norm at every completion. If $L=K$, take $x=a$ and the theorem is immediate. Otherwise fix one rational basis of each of the two finite-dimensional fields; these two finite choices require no axiom of choice. Apply [F3] to obtain $y\in I_L$ with idèle norm $a$. The product $\prod_{g\in G}g(y)$ is the diagonal image in $I_L$ of the principal $K$-idèle $a$. Hence its class is zero and $[y]\in\ker N_G$ in $C_L$. This is a ZF construction independent of the full global class-formation theorem. [F1, F2, F3, given, construct, algebra]

2.1 Whenever the equality in [L1] is available, it gives a class $[z]$ with $[y]=(\sigma-1)[z]$. Choose one representative $z$ of this one quotient class; this is a single existential selection, not a choice function. In multiplicative notation, $y=x\,\sigma(z)/z$ for some $x\in L^\times$. Taking the product over the finite group cancels $\prod_g g(\sigma(z)/z)$ by permutation of the factors. Thus $a=N_{L/K}(x)$ as principal idèles, and hence as elements of $K^\times$. The principal embedding is injective, since it is injective at each completion. Together with step 1.1 this gives a sufficient criterion for the original theorem, without the full class-formation claim. [F1, F2, L1, step 1.1, step 1.2, construct, algebra]

3.1 Under the temporary [A1] assumptions, [F4] supplies [L1]. Explicitly a cyclic one-cocycle is determined by $c=z(\sigma)$ with $N_Gc=0$, and the formula $z(\sigma^j)=\sum_{i<j}\sigma^ic$ gives its inverse; coboundaries are exactly $(\sigma-1)C_L$. This finite calculation needs no injective resolution. Thus the supplied $H^1(G,C_L)=0$ yields [L1] and completes the AC/CC/DC branch by step 2.1. This completes the fixed conditional proof to be relativized below; it does not assert arbitrary ambient idèle-class vanishing in ZF. [A1, F4, L1, step 1.1, step 2.1, algebra]


4.1 Return to ZF without the temporary choice hypotheses. Choose one finite rational basis of each of $K$ and $L$ and a generator of their finite cyclic Galois group. Their multiplication, inclusion and generator matrices and the coordinates of $a$ are finite rational data. They give isomorphic coded fields $F/E$ in the constructible universe $\mathcal L$. Transporting the original local norm hypotheses to these coded fields and applying [F6] gives local norm solvability at every completion internally in $\mathcal L$. By [F5], $\mathcal L$ satisfies AC, Countable Choice and DC and every fixed ZF axiom needed in the supplied proofs. Relativize the fixed argument of steps 1.2–3.1, including the supplied finite-level number-field theorem [F4], to this class. This is justified by induction on that finite derivation: logical rules preserve the relativized formulas, and every axiom occurrence is supplied by the corresponding instance of [F5]. No satisfaction predicate for all class formulas or existence of a transitive set model is required. The resulting internal argument gives $x\in F^{\mathcal L}$ with $N_{F/E}(x)=a$. [F4, F5, F6, step 1.2, step 2.1, step 3.1, given, construct, algebra]

4.2 By [F6], $x$ is a finite rational-coordinate element of the coded field, and its norm equality is the same finite determinant calculation in the ambient universe. Decode its coordinates through the original basis isomorphism to obtain $x_0\in L^\times$ with $N_{L/K}(x_0)=a$. Together with step 1.1 this proves both implications of the original Statement in ZF. Only the existence of an arithmetic global norm witness has been transferred; arbitrary ambient idèles need not belong to $\mathcal L$, and no vanishing statement for their entire cohomology has been inferred. [F2, F6, step 1.1, step 4.1, construct, algebra] ∎

## Completion scope

The local choice family is eliminated by the explicit finite-residue selector. The function-field-only invariant-module citation has been removed. The remaining arithmetic existence problem is solved by explicit local-solvability descent to the constructible universe, the supplied AC proof interpreted there, and finite-coordinate witness transfer back to ZF. The original unqualified Statement is unchanged. No ambient AC, general idèle-class absoluteness, full class-formation $H^2/H^3$ theorem, or external computation is used.
