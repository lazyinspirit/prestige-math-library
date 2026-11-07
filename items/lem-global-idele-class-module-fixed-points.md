---
id: lem-global-idele-class-module-fixed-points
kind: lemma
title: "Finite idèle-class invariants and direct-limit fixed points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-global-idele-class-module-for-galois-group
  - thm-hilbert-90-for-finite-galois-extension
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - thm-global-field-completion-tensor-product-decomposition
  - def-idele-class-group-of-a-global-field
  - def-idele-group-of-a-global-field
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §5, direct-limit idèle-class module"
    - title: "J. Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "VI §2, finite-level idelic invariants, printed pp. 368–370"
verification: {}
---

## Statement
Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). 
Let $F$ be a number field with separable closure $F_s$, let $C_F^{\mathrm{disc}}=\varinjlim_{E/F}C_E$ be the direct-limit idèle-class module, and let $G_F=\operatorname{Gal}(F_s/F)$. For every finite Galois extension $L/F$ in $F_s$ and $G=\operatorname{Gal}(L/F)$, the canonical idelic maps give $C_L^G\cong C_F$. For every finite intermediate field $M/F$, they also give

$$\bigl(C_F^{\mathrm{disc}}\bigr)^{G_M}\cong C_M,\qquad G_M=\operatorname{Gal}(F_s/M).$$

## Statement references

[[def-global-idele-class-module-for-galois-group]]

[[thm-hilbert-90-for-finite-galois-extension]]

[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[Milne, *Class Field Theory*, VII §5](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Neukirch, *Algebraic Number Theory*, VI §2](https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf)

## Facts & Assumptions

**Given:** the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC); A number field $F$, its separable closure, and finite intermediate fields $M\subseteq L$.

[F1] At finite level the sequence $1\to L^\times\to\mathbb A_L^\times\to C_L\to1$ is exact by definition. [[def-idele-class-group-of-a-global-field]] [[def-idele-group-of-a-global-field]]

[F2] The fixed subgroup of the ideles of $L$ under $G$ is the idele group of $F$; this follows place by place from the completion tensor-product decomposition. [[thm-global-field-completion-tensor-product-decomposition]]

[F3] Hilbert 90 gives $H^1(G,L^\times)=0$. [[thm-hilbert-90-for-finite-galois-extension]]

[F4] For a discrete continuous profinite module, continuous $H^0$ is the filtered colimit of finite-level fixed subgroups over open subgroups. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F5] The module $C_F^{\mathrm{disc}}$ and its transition maps are the direct limit of the finite idèle-class groups under extension of ideles. [[def-global-idele-class-module-for-galois-group]]


[A1] The direct-limit module [F5] assumes AC, Countable Choice, and DC; the completion decomposition [F2] assumes AC and Countable Choice, and the continuous cohomology formula [F4] assumes DC. These hypotheses enter through steps 1.1–2.1. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[def-global-idele-class-module-for-galois-group]] [[thm-global-field-completion-tensor-product-decomposition]] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]
## Proof

**Given:** The data above.

1.1 Taking $G$-invariants in the exact sequence [F1] gives the beginning of the long exact sequence $1\to (L^\times)^G\to(\mathbb A_L^\times)^G\to C_L^G\to H^1(G,L^\times)$. By [F2], the first two fixed groups are $F^\times$ and $\mathbb A_F^\times$; by [F3] the last group vanishes. Therefore the induced map $C_F\to C_L^G$ is an isomorphism. [F1, F2, F3, given, A1]

2.1 For $G_M=\operatorname{Gal}(F_s/M)$, [F4] and [F5] identify $(C_F^{\mathrm{disc}})^{G_M}$ with the filtered colimit of $C_E^{\operatorname{Gal}(E/M)}$ over finite Galois $E/M$. Step 1.1, applied to each $E/M$, identifies every term canonically with $C_M$. The transition maps become the identity on $C_M$, so this colimit is $C_M$. [F3, F4, F5, step 1.1, algebra, A1] ∎
