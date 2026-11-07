---
id: thm-function-field-product-formula-for-local-norm-residue-symbols
kind: theorem
title: "Product formula for local norm-residue symbols over a function field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-global-field
  - def-roots-of-unity-in-a-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-artin-reciprocity-map
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-global-function-field-artin-reciprocity-and-norm-index
  - lem-finite-local-artin-actions-and-tame-symbols-in-zf
  - lem-function-field-tame-symbol-data-descend-to-constructible-universe
  - thm-constructible-inner-model-semantic-and-formal-schema
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  The original unqualified Statement is proved in ZF. The existing AC/CC/DC
  global Artin argument is used only inside the constructible universe.
  Finite local Artin actions and explicit tame residue values are constructed
  in ZF; a finite-presentation curve model identifies every closed place and
  residue datum across that universe. No ambient Choice, full choice-free
  separable closure, or infinite-product absoluteness is asserted.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Appendix A.7–A.13, printed pp.131–137: finite-constant function-field Brauer sequence and global reciprocity."
    - title: "Seok Ho Yoon, Neukirch’s Approach to the Reciprocity Map and Global Class Field Theory in Positive Characteristic"
      url: "https://arxiv.org/pdf/1610.07486"
      locator: "§§3.3.1–3.4, Theorem 7 and Propositions 9–12."
verification: {}
---

## Statement

Let $F$ be a global function field with exact finite constant field
$\mathbb F_q$ of characteristic $p$. Let $n\ge1$ be prime to $p$, suppose
$|\mu_n(F)|=n$, and take $a,b\in F^\times$. For each closed place $v$
of $F$, let $F_v$ be the completion, choose $\alpha_v$ with
$\alpha_v^n=a$, and use the arithmetic local reciprocity map to define
$$H_{v,n}(a,b):=\operatorname{rec}_{F_v}(b)(\alpha_v)/\alpha_v.$$
Then $H_{v,n}(a,b)=1$ for all but finitely many $v$, and
$$\prod_v H_{v,n}(a,b)=1.$$

## Statement references

[[def-global-field]]

[[def-local-artin-reciprocity-map]]

[[thm-global-function-field-artin-reciprocity-and-norm-index]]

[[lem-finite-local-artin-actions-and-tame-symbols-in-zf]]

[[lem-function-field-tame-symbol-data-descend-to-constructible-universe]]

[[thm-constructible-inner-model-semantic-and-formal-schema]]

[Milne, Arithmetic Duality Theorems, AppendixA.7–A.13](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** Exactly the finite-constant function field, $n$ prime to its characteristic, its $n$ roots of unity, and $a,b\in F^\times$ in the original Statement. No ambient choice axiom is assumed.

[A1] AC, Countable Choice and DC are temporary hypotheses only for the conditional global Artin calculation in step 1.1; they will be satisfied inside the constructible universe. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] Under [A1], the usual global-function-field place and completion conventions give complete discretely valued fields with finite residue fields. The field definition itself has no choice premise. [[def-global-field]] [[def-place-of-a-global-field]] [[def-completion-of-a-global-field-at-a-place]]

[F2] Under [A1], each nonzero global element is a unit outside finitely many places, by applying integrality to it and its inverse. [[thm-global-field-element-integral-at-all-but-finitely-many-places]]

[F3] For a unit $a$ and $p\nmid n$, separability of $X^n-a$ modulo the maximal ideal and simple-root Hensel lifting put an $n$-th root in a finite unramified extension. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] In ZF the finite local Artin actions are defined by the algebraic invariant/finite-character property, agree with finite restrictions of a supplied canonical local Artin map, and satisfy the explicit tame formula. In particular units act trivially on unramified extensions, and the prime-to-$p$ symbol is determined by valuations and one finite residue value. [[lem-finite-local-artin-actions-and-tame-symbols-in-zf]] [[def-local-artin-reciprocity-map]]

[F5] Under AC, Countable Choice and DC, the recorded global function-field Artin theorem proves the product-of-local-maps formula on idèle classes, including triviality on principal idèles and the global norm-index isomorphism. [[thm-global-function-field-artin-reciprocity-and-norm-index]]

[F6] In ZF the field, exact constants, parameter and root set have a finite presentation inside the constructible universe, with the same closed places, normalized valuations and finite residue data. The tame finite symbols agree in both universes, so a finite-support product identity transfers outward. [[lem-function-field-tame-symbol-data-descend-to-constructible-universe]]

[F7] In ZF each fixed ZFC axiom holds relativized to the constructible universe. Thus a fixed finite proof under AC/CC/DC can be relativized there, formula by formula, without asserting a set model, a class truth predicate or consistency transfer. [[thm-constructible-inner-model-semantic-and-formal-schema]]

## Proof

**Proof technique:** prove the finite Kummer product calculation under the recorded Artin hypotheses, then descend its tame finite data from the constructible universe.

1.1 Temporarily assume [A1]. Choose a root $\alpha^n=a$ and put $E=F(\alpha)$. Since $\mu_n\subset F$ and $p\nmid n$, this is a finite Galois extension whose Galois group embeds in the cyclic group $\mu_n$, hence is abelian. Outside the finite set where $a$ or $b$ is not a unit, [F2]–[F3] make the root extension unramified, and [F4] makes the finite local action of $b$ trivial. This proves finite support. The principal idèle $b$ has trivial global Artin image by [F5], while that image is the product of its local finite actions. Acting on $\alpha$ gives exactly the factors $H_{v,n}(a,b)$ and therefore their finite product is1. All roots in one finite Kummer extension may be obtained by adjoining a root of one irreducible factor of $X^n-a$; no infinite family of root choices is part of this calculation. [A1, F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Return to ZF without the temporary choice hypotheses. Apply [F6] to code the original finite field data in the constructible universe $\mathcal L$. Its exact constants and its list of $n$ roots are unchanged. By [F7], all the fixed axioms needed in the recorded global Artin proof and the calculation of step 1.1 hold relativized to $\mathcal L$. Induction along that finite derivation therefore proves its internal finite-support identity: logical inference commutes with relativization, and each axiom instance is supplied by [F7]. In particular, an internal finite exceptional set $S$ contains all its nonidentity factors, and $\prod_{v\in S}H_{v,n}(a,b)=1$ internally. This uses the actual supplied global Artin theorem inside $\mathcal L$; it does not assume its unconditional validity in the ambient universe. [F5, F6, F7, step 1.1, construct, algebra]

2.2 By [F6], every internal place is the same closed-point DVR externally and these exhaust the ambient closed places. For each one, [F4] gives the identical formula in the identical residue field, with the same unique lift through $\mu_n(F)$. Therefore every ambient factor outside the same finite $S$ is1, and the finite product over $S$ is the same multiplication in the finite group $\mu_n(F)$. The internal identity in step 2.1 is thus the desired ambient identity. Only finite residue and root values have been transferred; the sets of infinite completion sequences and full local Galois groups need not coincide. [F4, F6, step 2.1, construct, algebra]

3.1 The finite action used throughout is exactly the action on the root in the original definition: [F4] constructs it by the same canonical finite-character property, and uniqueness makes it agree with any supplied full canonical map. Replacing a local root by a root-of-unity multiple changes no ratio. Thus no choice-free existence theorem for an entire separable closure or full Artin map was substituted for a hypothesis. All finite root evaluations required by the original expression have been constructed in ZF. Step 2.2 proves both the finite-support and product assertions of the unchanged unqualified Statement. For $n=1$ all factors are1 by the same finite construction. [F4, step 2.2, algebra] ∎

## Completion scope

The former global principal-idèle hold is discharged by the recorded supplier. The original axiom-scope gap is removed by a choice-free finite Artin construction, an explicit projective-model/place/residue descent, and formula-by-formula application of the AC global argument internally in the constructible universe. Neither ambient Choice nor an unproved general local-map or cohomology absoluteness assertion is used.
