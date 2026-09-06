---
id: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion
title: "Tor one of a cyclic abelian group detects n-torsion"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "def-projective-resolution-in-an-abelian-category"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For an abelian group $M$ and $n\ge1$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/n,M)\cong\{m\in M:nm=0\}$.

## Proof

**Given:** the free resolution $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\to0$.

1.1 Tensoring this resolution with $M$ gives $0\to M\xrightarrow{n}M\to0$ in degrees $1,0$. [given]

2.1 Its degree-one homology is $\ker(n:M\to M)$. [step 1.1, algebra]

3.1 That kernel is precisely the $n$-torsion subgroup, and the identification is natural in $M$. [step 2.1, algebra] ∎
