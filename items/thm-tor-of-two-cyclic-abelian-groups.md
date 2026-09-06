---
id: thm-tor-of-two-cyclic-abelian-groups
title: "Tor one of two cyclic abelian groups is cyclic of gcd order"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For positive integers $m,n$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/m,\mathbb Z/n)\cong\mathbb Z/\gcd(m,n)$.

## Proof

**Given:** the $m$-torsion calculation with $M=\mathbb Z/n$.

1.1 The group $\operatorname{Tor}_1(\mathbb Z/m,\mathbb Z/n)$ is the kernel of multiplication by $m$ on $\mathbb Z/n$. [given]

2.1 Writing $g=\gcd(m,n)$, the congruence $mx\equiv0\pmod n$ has exactly $g$ solutions modulo $n$. [step 1.1, algebra]

3.1 Those solutions form the unique subgroup of the cyclic group $\mathbb Z/n$ of order $g$, hence are isomorphic to $\mathbb Z/g$. [step 2.1, algebra] ∎
