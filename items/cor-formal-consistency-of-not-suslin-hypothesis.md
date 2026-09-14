---
id: cor-formal-consistency-of-not-suslin-hypothesis
kind: corollary
title: "Formal relative consistency of not SH"
status: published
origin: pipeline
deps: [lem-finite-fragment-l-interpretation-with-gch, cor-v-equals-l-gives-a-suslin-tree, thm-suslin-tree-implies-suslin-line, thm-formal-relative-consistency-from-verified-proof-reduction, thm-constructible-inner-model-semantic-and-formal-schema, def-suslin-hypothesis-and-suslin-algebra, def-arithmetic-provability-and-consistency, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorems 9.12-9.13 and 15.42, printed pp. 65-69 and 277"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

For the fixed certified proof predicates and contradiction sentence,

$$\mathrm{PA}\vdash\operatorname{Con}(\mathrm{ZFC})\longrightarrow\operatorname{Con}(\mathrm{ZFC}+\neg\mathrm{SH}).$$

Consequently external consistency of ZFC implies external consistency of
ZFC+$\neg$SH. The conclusion is a verified proof-code reduction through the
constructible-universe interpretation. It does not say that consistency
produces a transitive model of full ZFC.

## Facts & Assumptions

**Given:** the fixed pure-membership proof calculus, certified presentations of
ZFC and ZFC+$\neg$SH, and the fixed contradiction sentence.

[F1] The $L$-interpretation dispatcher translates certified finite
ZFC+GCH derivations to ZF derivations by a primitive-recursive map whose
totality and checker acceptance PA verifies.
[[lem-finite-fragment-l-interpretation-with-gch]]

[F2] ZF proves that $L$ satisfies ZFC+$V=L$, with fixed relativized-axiom
derivations; no model or consistency transfer is asserted merely by that
semantic theorem. [[thm-constructible-inner-model-semantic-and-formal-schema]]

[F3] ZF proves that $V=L$ yields a normal splitting Suslin tree on $\omega_1$.
[[cor-v-equals-l-gives-a-suslin-tree]]

[F4] In ZFC, existence of a Suslin tree implies existence of a Suslin line in
the strong convention. [[thm-suslin-tree-implies-suslin-line]]

[F5] SH says that no strong-convention Suslin line exists, so its literal
negation is the existence assertion supplied by [F4].
[[def-suslin-hypothesis-and-suslin-algebra]]

[F6] A base-verified total map from target contradiction proofs to source
contradiction proofs yields the corresponding formal consistency implication.
[[thm-formal-relative-consistency-from-verified-proof-reduction]]

[F7] The chosen $\operatorname{Con}(T)$ formula is the negation of certified
provability of one fixed contradiction sentence.
[[def-arithmetic-provability-and-consistency]]

[A1] Choice is not assumed in ambient ZF for the interpretation. It is proved
inside $L$ and is exactly the hypothesis used there by the tree-to-line
construction. [[def-axiom-of-choice]]

## Proof

**Proof technique:** verified extension of the constructible-universe proof translator.

1.1 By [F2], ZF has fixed derivations saying internally that $L$ satisfies ZFC and $V=L$. Translate the fixed ZF proof [F3] into $L$: internal $V=L$ yields a normal splitting Suslin tree. Since $L$ satisfies AC, translate the fixed ZFC proof [F4] there to obtain a strong-convention Suslin line. By [F5] this conclusion is exactly $(\neg\mathrm{SH})^L$. Concatenating the finitely many fixed derivations, with capture-free substitutions and the interpretation's domain guards, gives one fixed certified ZF proof $d_{\neg\mathrm{SH}}$ of the literal $L$-relativization. Ambient Choice is not used; [A1] holds internally in $L$. [F2, F3, F4, F5, A1, construct]

2.1 Extend the axiom-certificate dispatcher of [F1]. On every certified ZFC axiom use its existing branch; a GCH certificate branch may remain available but is never required by the target theory. On the one new literal $\neg$SH tag, return the constant proof $d_{\neg\mathrm{SH}}$ from step 1.1. On malformed input retain the dispatcher's fixed tautology output. Adding one decidable tag and one constant finite proof block preserves primitive recursiveness, and PA verifies the new branch's checker acceptance by the same finite line-prefix verification used for the old constant branches. [F1, F7, step 1.1, construct]

3.1 Feed any certified ZFC+$\neg$SH derivation through the extended dispatcher and the guarded $L$-translation from [F1]. Logical lines are translated structurally; ZFC axiom lines use the old branches; every $\neg$SH axiom line uses step 2.1. A translated source contradiction is converted by the interpretation's fixed contradiction block to the chosen ZF contradiction. Regard the resulting ZF proof also as a ZFC proof. Thus PA verifies a total primitive-recursive map $r$ satisfying $$\operatorname{Prf}_{\mathrm{ZFC}+\neg\mathrm{SH}}(p,\ulcorner\bot\urcorner)\longrightarrow\operatorname{Prf}_{\mathrm{ZFC}}(r(p),\ulcorner\bot\urcorner).$$ The zero-occurrence case uses only the old dispatcher, and repeated $\neg$SH occurrences reuse the same constant block. [F1, F7, step 2.1]

4.1 Apply [F6] in PA to the verified map of step 3.1, with source theory ZFC and target theory ZFC+$\neg$SH in the consistency direction. This gives the displayed formal implication; its truth on standard proof codes yields the external relative-consistency consequence. [F6, F7, step 3.1]

5.1 This proof constructs a syntactic reduction only. Neither [F2] nor the consistency implication supplies a transitive set model of ZFC. All object-level Choice occurs inside $L$ at step 1.1; the proof-code dispatcher and its PA verification make no choice from a family of sets. [F2, A1, step 1.1, step 4.1] ∎

## Remarks

- GCH is part of the already verified dispatcher but is not used in the fixed
  derivation of $\neg$SH; $V=L$, diamond, the tree construction, and the
  tree-to-line implication are the relevant object-theory route.
- The reduction targets ZF proofs first. Since every ZF axiom is a ZFC axiom,
  the same finite derivation is also a ZFC derivation, which is the orientation
  required for the displayed consistency implication.
