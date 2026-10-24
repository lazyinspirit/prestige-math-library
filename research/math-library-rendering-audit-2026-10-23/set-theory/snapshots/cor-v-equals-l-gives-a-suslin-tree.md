---
id: cor-v-equals-l-gives-a-suslin-tree
kind: corollary
title: V equals L gives a Suslin tree
status: published
origin: pipeline
deps: [thm-v-equals-l-implies-diamond, thm-diamond-constructs-normal-suslin-tree, thm-constructible-universe-satisfies-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Lietz, Set Theory, Theorem 7.20, pp.60–61; published diamond-to-Suslin construction"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
justified_by: []
forward_refs: []
---

## Statement

ZF proves that $V=L$ implies the existence of a normal splitting Suslin tree on $\omega_1$.

## Facts & Assumptions

**Given:** Ambient ZF and the hypothesis $V=L$.

[F1] [[thm-v-equals-l-implies-diamond]] derives a diamond sequence on $\omega_1$ from $V=L$ in ZF.

[F2] [[thm-constructible-universe-satisfies-choice]] says that $L$ satisfies AC; under $V=L$ this is ambient AC.

[F3] [[thm-diamond-constructs-normal-suslin-tree]] proves in ZFC that diamond constructs a normal splitting Suslin tree with underlying set $\omega_1$.

[A1] [[def-axiom-of-choice]] names the hypothesis explicitly required by F3 and supplied here by F2.

## Proof

1.1 By F1, $V=L$ supplies a diamond sequence on $\omega_1$. By F2 and the equality $V=L$, A1 holds in the ambient universe. This explicit use of Choice is essential to the cited tree proof: it supplies its countable-union, maximal-antichain, and deterministic well-ordering steps. [F1, F2, A1, given]

2.1 Apply F3 with the diamond sequence and AC from step 1.1. The resulting tree is normal and splitting, has underlying set $\omega_1$, has countable levels, and has neither an uncountable antichain nor a cofinal branch; hence it is a Suslin tree. No tree is asserted at the degenerate heights zero or one, and no weakening from stationary guessing to merely unbounded guessing is made. [F3, step 1.1] ∎
