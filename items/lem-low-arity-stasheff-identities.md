---
id: lem-low-arity-stasheff-identities
kind: lemma
title: "The first three Stasheff identities"
status: published
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-a-infinity-algebra
  - def-koszul-sign-rule-for-graded-tensors
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.1"
      url: "https://arxiv.org/pdf/math/9910179v2"
---

## Statement

Let $(A,m_n)$ be an uncurved cohomological A∞-algebra with the unsuspended
convention of [[def-a-infinity-algebra]]. Its first three identities are

$$m_1m_1=0,$$

$$m_1m_2=m_2(m_1\otimes1+1\otimes m_1),$$

and

$$m_1m_3+m_3(m_1\otimes1\otimes1+1\otimes m_1\otimes1+1\otimes1\otimes m_1) +m_2(m_2\otimes1)-m_2(1\otimes m_2)=0.$$

In particular, $m_1$ is a cochain differential and a signed derivation of
$m_2$. The third identity explicitly gives the associator
$m_2(m_2\otimes1)-m_2(1\otimes m_2)$ as the negative of the displayed
$m_1,m_3$ terms.

## Facts & Assumptions

**Given:** An uncurved cohomological A∞-algebra $(A,m_n)$ over a field, with
the Koszul tensor convention specified in its definition.

[F1] [[def-a-infinity-algebra]]: for each $n\ge1$,
$$\sum_{r+s+t=n,\ s\ge1}(-1)^{r+st}m_{r+1+t}(1^{\otimes r}\otimes m_s\otimes1^{\otimes t})=0.$$

[F2] [[def-koszul-sign-rule-for-graded-tensors]]: for homogeneous maps and
inputs, $(f\otimes g)(x\otimes y)=(-1)^{|g||x|}f(x)\otimes g(y)$.

## Proof

1.1 For $n=1$, the only triple $(r,s,t)$ is $(0,1,0)$, so [F1] is exactly $m_1m_1=0$. [given, F1]

1.2 For $n=2$, the triples are $(0,1,1)$, $(1,1,0)$, and $(0,2,0)$; their coefficients are $-1,-1,+1$. Hence [F1] gives $m_1m_2-m_2(m_1\otimes1)-m_2(1\otimes m_1)=0$. On homogeneous $a,b$, [F2] makes the last term $(-1)^{|a|}m_2(a,m_1b)$, which is the signed derivation rule. [F1, F2, algebra]

2.1 For $n=3$, the triples with $s=1$ contribute the three terms $m_3(m_1\otimes1\otimes1)$, $m_3(1\otimes m_1\otimes1)$, $m_3(1\otimes1\otimes m_1)$, each with sign $+1$; $s=2$ contributes $m_2(m_2\otimes1)-m_2(1\otimes m_2)$; and $s=3$ contributes $m_1m_3$. Their sum is the third displayed identity. [F1, algebra] ∎

