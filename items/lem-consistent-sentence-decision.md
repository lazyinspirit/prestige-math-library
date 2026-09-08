---
id: lem-consistent-sentence-decision
kind: lemma
title: "A consistent theory can decide one sentence"
status: draft
origin: pipeline
deps: [def-first-order-syntactic-consistency, thm-first-order-sentence-deduction, lem-hilbert-propositional-and-equality-rules]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Moschovakis, Lemma 1H.12(3)–(4), printed p38; local deduction proof."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, for a consistent sentence theory $T$ and sentence $\sigma$, at least one of $T\cup\{\sigma\}$ and $T\cup\{\neg\sigma\}$ is consistent. Moreover, for any sentence theory $T$,

$$T\cup\{\neg\sigma\}\text{ is inconsistent}\quad\Longleftrightarrow\quad T\vdash\sigma.$$

## Facts & Assumptions

**Given:** A sentence theory $T$ and sentence $\sigma$; consistency is additionally assumed for the first claim.

[F1] Inconsistency means derivability of $\bot$. ([[def-first-order-syntactic-consistency]])

[F2] Sentence deduction discharges a sentence premise as an implication. ([[thm-first-order-sentence-deduction]])

[F3] The fixed calculus proves $\neg\bot$, double negation and Boolean explosion. ([[lem-hilbert-propositional-and-equality-rules]])

## Proof

1.1 If $T\cup\{\neg\sigma\}\vdash\bot$, deduction gives $T\vdash\neg\sigma\to\bot$. Combining with the theorem $\neg\bot$ gives $T\vdash\neg\neg\sigma$ by Boolean contraposition, and hence $T\vdash\sigma$. Conversely a proof of $\sigma$ remains valid after adjoining $\neg\sigma$; explosion then proves $\bot$. This proves both directions for arbitrary $T$. [F1, F2, F3]

2.1 If $T\cup\{\sigma\}$ is inconsistent, deduction and $\neg\bot$ similarly give $T\vdash\neg\sigma$. If also $T\cup\{\neg\sigma\}$ were inconsistent, step 1.1 would give $T\vdash\sigma$; the two conclusions would prove $\bot$ in $T$. For consistent $T$ this is impossible. Thus if the positive extension is inconsistent the negative extension is consistent; otherwise the positive extension itself is consistent. [F1, F2, F3, step 1.1] ∎
