---
id: def-sigma-n-pi-n-and-delta-n-sets
kind: definition
title: "The classes Sigma_n^0, Pi_n^0, and Delta_n^0"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-arithmetic-formula]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Douglas Cenzer and Jeffrey Remmel, Effectively Closed Sets, Definition II.6.5"
      url: "https://people.clas.ufl.edu/cenzer/files/book4.pdf"
---

## Definition

For $n\ge1$, a set $A\subseteq\mathbb N^k$ is **$\Sigma_n^0$** when, for a
primitive-recursive predicate $R$, membership has a formula
$$ \vec x\in A\iff \exists y_1\forall y_2\cdots Qy_n\ R(\vec x,\vec y), $$
where the quantifiers alternate and $Q$ is existential for odd $n$. It is
**$\Pi_n^0$** when its complement is $\Sigma_n^0$, equivalently when the
display begins universally. Put
$$ \Delta_n^0:=\Sigma_n^0\cap\Pi_n^0. $$

Bounded quantifiers in $R$ are allowed under the convention of
[[def-bounded-arithmetic-formula]].
