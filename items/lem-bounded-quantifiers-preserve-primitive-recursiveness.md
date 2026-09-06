---
id: lem-bounded-quantifiers-preserve-primitive-recursiveness
kind: lemma
title: "Bounded quantifiers preserve primitive recursiveness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-primitive-recursive-function, def-bounded-arithmetic-formula]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Douglas Cenzer and Jeffrey Remmel, Effectively Closed Sets, Theorem II.6.6"
      url: "https://people.clas.ufl.edu/cenzer/files/book4.pdf"
---

## Statement

If $R(\vec x,u)$ is primitive recursive and $t(\vec x)$ is primitive
recursive, then each relation
$$ \exists u<t(\vec x)\ R(\vec x,u),\qquad \forall u<t(\vec x)\ R(\vec x,u) $$
is primitive recursive.

## Facts & Assumptions

**Given:** primitive-recursive $R$ and $t$.

## Proof

**Proof technique:** direct.

1.1 Let $r(\vec x,u)$ be the $0$-$1$ characteristic function of $R$. The bounded sum $S(\vec x)=\sum_{u<t(\vec x)}r(\vec x,u)$ is primitive recursive by primitive recursion and composition. [given, construct]

2.1 The existential relation has characteristic test $S(\vec x)>0$. Likewise $P(\vec x)=\prod_{u<t(\vec x)}r(\vec x,u)$ is primitive recursive and equals $1$ exactly for the universal relation, including the empty product case. [step 1.1, algebra] ∎
