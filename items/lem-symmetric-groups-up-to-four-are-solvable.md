---
id: lem-symmetric-groups-up-to-four-are-solvable
kind: lemma
title: "The symmetric groups $S_n$ are solvable for $n\\le 4$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-solvable-iff-it-has-an-abelian-factor-series, def-alternating-group, thm-sign-is-a-homomorphism, lem-conjugating-a-cycle-relabels-its-entries]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Chapter 4"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

The symmetric groups $S_n$ are solvable for every $n\le4$.

## Facts & Assumptions
**Given:** The symmetric groups on at most four letters.

[L1] A group is solvable exactly when it has a finite subnormal series with abelian factors ([[thm-solvable-iff-it-has-an-abelian-factor-series]]).

[L2] The alternating group is the sign kernel, and sign is a homomorphism ([[def-alternating-group]], [[thm-sign-is-a-homomorphism]]).

[L3] Conjugation relabels cycles and therefore relabels a double transposition to another double transposition ([[lem-conjugating-a-cycle-relabels-its-entries]]).

## Proof

**Proof technique:** direct.

1.1 The groups $S_0$ and $S_1$ are trivial, and $S_2$ is cyclic of order $2$, so all three are solvable by [L1]. [L1, algebra]

1.2 For $S_3$, the subgroup $A_3$ is normal as the sign kernel by [L2], has order $3$, and the quotient $S_3/A_3$ has order $2$. Thus $$1\triangleleft A_3\triangleleft S_3$$ is a subnormal series with abelian factors, so $S_3$ is solvable by [L1]. [L1, L2, algebra]

1.3 In $A_4$, let $$V_4=\{1,(12)(34),(13)(24),(14)(23)\}.$$ Each listed double transposition is even, and direct multiplication shows that these four elements form a subgroup. By [L3], conjugation by any element of $A_4$ permutes the three nonidentity double transpositions, so $V_4\trianglelefteq A_4$. The quotient $A_4/V_4$ has order $3$, hence is abelian, and $V_4$ is abelian of order $4$. Since $A_4$ is the sign kernel in $S_4$, the chain $$1\triangleleft V_4\triangleleft A_4\triangleleft S_4$$ has abelian factors $V_4$, $A_4/V_4$, and $S_4/A_4$. Therefore $S_4$ is solvable by [L1]. [L1, L2, L3, algebra]

2.1 Steps 1.1, 1.2, and 1.3 cover every $n\le4$. [step 1.1, step 1.2, step 1.3] ∎
