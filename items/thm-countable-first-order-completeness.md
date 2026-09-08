---
id: thm-countable-first-order-completeness
kind: theorem
title: "Completeness for explicitly countable set languages"
status: draft
origin: pipeline
deps: [thm-countable-lindenbaum-henkin-completion, thm-henkin-closed-term-truth-lemma, lem-consistent-sentence-decision, thm-set-language-first-order-soundness, lem-countable-henkin-syntax-coding, lem-satisfaction-coincidence]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Theorem 1I.1 pp38–39 and final proof p44; least-code countability supplied explicitly."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In classical ZF, every consistent sentence theory in an explicitly countable set language has a nonempty model whose carrier injects into $\omega$. For every sentence $\sigma$ in that language,

$$T\models\sigma\iff T\vdash\sigma.$$

## Facts & Assumptions

**Given:** A signature with a specified injection into $\omega$ and a sentence theory $T$.

[F1] A consistent $T$ has a consistent complete deductively closed Henkin extension in an explicitly countable constant expansion with a seed. ([[thm-countable-lindenbaum-henkin-completion]])

[F2] The term quotient of such an extension satisfies it. ([[thm-henkin-closed-term-truth-lemma]])

[F3] $T\nvdash\sigma$ implies consistency of $T\cup\{\neg\sigma\}$. ([[lem-consistent-sentence-decision]])

[F4] Provability implies semantic consequence. ([[thm-set-language-first-order-soundness]])

[F5] The expanded closed terms have an injection into $\omega$. ([[lem-countable-henkin-syntax-coding]])

[F6] Reducts preserve truth in the smaller signature. ([[lem-satisfaction-coincidence]])

## Proof

1.1 If $T$ is consistent, use F1 and F2 to form a quotient model $M_H\models H\supseteq T$. Its reduct to the original language satisfies $T$ by F6 and has the same nonempty carrier. [F1, F2, F6]

2.1 Let $q$ be the closed-term injection from F5. For each quotient class $b$, define $j(b)=\min\{q(t):[t]=b\}$. The set minimized is nonempty because $b$ is a class of a closed term. Equal values of $j$ name the same term by injectivity of $q$, hence the same class. Thus $j$ injects the carrier into $\omega$, with no choice of a family of representatives. [F5, step 1.1]

3.1 If $T\models\sigma$ but $T\nvdash\sigma$, F3 makes $T\cup\{\neg\sigma\}$ consistent. Steps 1.1–2.1 supply a model of this theory, which satisfies $T$ and falsifies $\sigma$, a contradiction. Thus semantic consequence implies provability. Conversely F4 gives $T\vdash\sigma\Rightarrow T\models\sigma$, even if $T$ has no model. [F3, F4, step 1.1, step 2.1] ∎
