---
id: thm-formal-consistency-of-zfc-plus-gch-from-zf
kind: theorem
title: Formal consistency of ZFC plus GCH relative to ZF
verification:
  audited: 2026-09-13
status: published
origin: pipeline
deps: [lem-finite-fragment-l-interpretation-with-gch, thm-formal-relative-consistency-from-verified-proof-reduction, lem-hilbert-propositional-and-equality-rules, def-set-coded-formal-derivation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kunen, Set Theory, Chapter VI Corollary 4.9, p. 175"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
    - title: "UCLA 220C notes, Constructible Sets §8, pp. 293–295"
      url: https://www.math.ucla.edu/~dam/220c.1.14s/220Cynm.pdf
justified_by: []
forward_refs: []
---

## Statement

For the fixed arithmetizations, a verified proof transformation establishes
$\operatorname{Con}(\mathrm{ZF})$ implies
$\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$. It does not assume a
transitive set model of ZF.

## Facts & Assumptions

**Given:** The certified theories, contradiction sentence and PA
representations fixed in the preceding lemma and in F2.

[F1] [[lem-finite-fragment-l-interpretation-with-gch]] supplies a total
primitive-recursive translation of certified
$\mathrm{ZFC}+\mathrm{GCH}$ derivations to ZF derivations, together with the
PA proof of checker acceptance at the literal guarded $L$-translation of the
input conclusion. It does not itself supply the final contradiction block.

[F2] [[thm-formal-relative-consistency-from-verified-proof-reduction]] turns a
base-verified total map from target refutations to source refutations into the
corresponding formal consistency implication.

[F3] [[lem-hilbert-propositional-and-equality-rules]] supplies Boolean
reasoning, quantified double-negation replacement and explosion in the fixed
calculus. Equality reflexivity is an axiom of that calculus, not a stated
conclusion of F3 ([[def-set-coded-formal-derivation]]).

## Proof

1.1 Write the fixed target contradiction as $\bot=\exists v_0\neg(v_0=v_0)$. In F1's specialized raw $D$-relativization, its guarded $L$-translation is $\top\to\exists v_0(D(v_0)\land\neg(v_0=v_0))$, where $\top$ is the fixed empty guard. Let $A(v_0)$ denote the exact fixed translation of the equality atom if a term-graph presentation is used instead; its graph witnesses express that both occurrences of $v_0$ have value $v_0$ and that those values are equal. Under $D(v_0)$, equality reflexivity and existential introduction prove $A(v_0)$, so either presentation admits the same fixed refutation block. Fix once and for all a finite ZF block which proves $\top$, applies the translated conclusion, derives the negation of its existential matrix from this equality instance and quantified Boolean reasoning, and concludes the selected ZF contradiction by explosion. Such a block exists by F3 and the reflexivity axiom after the fixed formula $D$ and abbreviations are expanded. Define $r(p)$ by appending this block, with shifted line references, to the translator output of F1. List append, addition of the input proof length to finitely many fixed references, and the malformed-input default are primitive recursive. PA checks each of the finitely many new line templates and combines those checks with F1's uniform checker-acceptance proof. Hence PA proves totality and $\forall p\bigl(\operatorname{Prf}_{\mathrm{ZFC}+\mathrm{GCH}}(p,\ulcorner\bot\urcorner)\to\operatorname{Prf}_{\mathrm{ZF}}(r(p),\ulcorner\bot\urcorner)\bigr)$. This is one assertion about all proof codes, not an external selection of a new finite fragment after entering PA. [F1, F3, given]

2.1 Apply F2 with $T=\mathrm{ZF}$ and $U=\mathrm{ZFC}+\mathrm{GCH}$ to the map $r$. It yields $\mathrm{PA}\vdash\operatorname{Con}(\mathrm{ZF})\longrightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$. Only numerical proof codes occur in this argument. In particular, neither step constructs nor assumes a set model, a well-founded model, or a transitive model of ZF. [F2, step 1.1] ∎
