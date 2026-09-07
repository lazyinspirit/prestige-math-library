---
id: prop-ordinal-ranking-characterizes-well-foundedness
kind: proposition
title: "Ordinal rankings characterize well-foundedness"
status: published
origin: pipeline
deps: ["def-rank-of-a-well-founded-relation"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 Exercise 6.8 p.31."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

A definable setlike relation $R$ on $X$ is well-founded if and only if there is a definable ordinal-valued function $r$ on $X$ with $yRx\Rightarrow r(y)<r(x)$. For well-founded $R$, its rank $\rho_R$ is pointwise least among such functions. No choice or Foundation is needed.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For a well-founded setlike relation $R$ on $X$, its ordinal rank is the definable function determined by $$\rho_R(x)=\sup\{\rho_R(y)+1:yRx\}=\bigcup\{\rho_R(y)\cup\{\rho_R(y)\}:yRx\}.$$ To justify the definition, apply well-founded recursion to the total rule which returns this union if every value of its input function is an ordinal and returns $0$ otherwise. Well-founded induction shows that every actual value is an ordinal: predecessor values are ordinals by the induction hypothesis, their successors are ordinals, Replacement collects them, and their union is an ordinal, including the empty union $0$. Thus the default case never occurs. For $yRx$ the rank equation gives $\rho_R(y)<\rho_R(x)$. The definition requires no ambient Foundation for a supplied well-founded $R$. Conventions and prerequisites: thm-recursion-on-well-founded-setlike-relations, lem-ordinal-basics. ([[def-rank-of-a-well-founded-relation]])

## Proof

1.1 For well-founded $R$, its recursively defined ordinal rank exists and strictly increases along each predecessor edge, providing a ranking. [F1]

1.2 Conversely, for a nonempty set $A\subseteq X$, Replacement makes $r[A]$ a nonempty set of ordinals. It has a least element: choose one value $\alpha$ and minimize within the set of values at most $\alpha$, using the well-order of $\alpha+1$. A preimage $a\in A$ of that least value has no predecessor in $A$, since a predecessor would have smaller rank. [given]

2.1 Finally well-founded induction gives $\rho_R(x)\le r(x)$. If it holds at all $yRx$, then $\rho_R(y)+1\le r(y)+1\le r(x)$ for all such $y$, and taking the ordinal supremum gives the desired bound at $x$. The empty supremum is zero. [F1, step 1.2] ∎
