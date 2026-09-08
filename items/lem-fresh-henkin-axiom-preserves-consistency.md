---
id: lem-fresh-henkin-axiom-preserves-consistency
kind: lemma
title: "Adding one fresh witness preserves consistency"
status: published
origin: pipeline
deps: [def-henkin-witness-extension, lem-proof-fresh-constant-elimination, thm-first-order-sentence-deduction, lem-consistent-sentence-decision, lem-hilbert-propositional-and-equality-rules]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Moschovakis, Lemma 1I.4 pp40–41 and Lemma 1H.12(5) p38; witness-implication variant proved locally."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, if $T$ is consistent, $\exists x\phi$ is a sentence, and $c$ is a new constant absent from both, then $T\cup\{\exists x\phi\to\phi[c/x]\}$ is consistent in the expanded language. A seed constant adjoined without axioms is conservative.

## Facts & Assumptions

**Given:** $T$ consistent, $\operatorname{FV}(\phi)\subseteq\{x\}$, and a fresh constant $c$.

[F1] These are the witness axioms of [[def-henkin-witness-extension]].

[F2] Fresh constants can be replaced by proof-fresh variables, and a pure constant expansion is conservative. ([[lem-proof-fresh-constant-elimination]])

[F3] Sentence deduction converts a proof from one extra sentence to an implication. ([[thm-first-order-sentence-deduction]])

[F4] Boolean rules, $\neg\bot$, existential elimination and fresh-variable existential renaming are available. ([[lem-hilbert-propositional-and-equality-rules]])

## Proof

1.1 Write $E=\exists x\phi$ and $h=(E\to\phi[c/x])$, a sentence by the free-variable restriction in F1. If $T\cup\{h\}\vdash\bot$, deduction and $\neg\bot$ give $T\vdash\neg h$. The Boolean implications $\neg(A\to B)\to A$ and $\neg(A\to B)\to\neg B$ then yield proofs from $T$ of $E$ and $\neg\phi[c/x]$. [F1, F3, F4]

2.1 Apply fresh-constant replacement to the latter finite proof, choosing $z$ absent also from $\phi$, $x$ and $\bot$. The result is $T\vdash\neg\phi[z/x]$. This substitution identity follows because $c$ was absent from $\phi$ and $z$ is unbound there. Boolean explosion gives $T\vdash\phi[z/x]\to\bot$. Eliminate $z$ to obtain $T\vdash\exists z\phi[z/x]\to\bot$; $\bot$ is a sentence, so the rule's restriction holds. [F2, F4, step 1.1]

3.1 Fresh-variable existential renaming gives $T\vdash E\to\exists z\phi[z/x]$. Together with the proof of $E$ and step 2.1, MP yields $T\vdash\bot$ in the pure constant expansion. Conservativity removes that expansion, contradicting the given consistency of $T$. Therefore the witness extension is consistent. The same conservativity statement, without adding any sentence axiom, proves the seed-constant assertion. [F2, F4, step 1.1, step 2.1] ∎
