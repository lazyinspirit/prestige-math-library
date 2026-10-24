---
id: cex-nonconstant-blaschke-factor-has-constant-boundary-modulus
kind: counterexample
title: "A nonconstant Blaschke factor has constant boundary modulus"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-constant-boundary-modulus-forces-zero-or-constancy, thm-algebra-of-complex-derivatives, lem-complex-conjugation-and-modulus-laws, thm-complex-numbers-form-a-field]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 3.5.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement refuted

A function holomorphic on the unit disc and continuous on its closure must be constant whenever its modulus is constant on the unit circle.

## Facts & Assumptions

**Given:** A parameter $a\in\mathbb C$ with $|a|<1$ and the Blaschke factor $$B_a(z):=\frac{z-a}{1-\overline a z}.$$ Complex conjugation and modulus obey $|zw|=|z||w|$ and $|z|^2=z\overline z$ ([[lem-complex-conjugation-and-modulus-laws]]), and $\mathbb C$ is a field ([[thm-complex-numbers-form-a-field]]).

[L1] If a holomorphic function has constant modulus on the boundary of a bounded domain, then it is constant or has a zero in the domain ([[cor-constant-boundary-modulus-forces-zero-or-constancy]]).

[L2] A quotient of holomorphic functions is holomorphic wherever its denominator is nonzero ([[thm-algebra-of-complex-derivatives]]).

## Counterexample

**Proof technique:** direct.

1.1 If $a=0$, the denominator is $1$. If $a\ne0$, choose $R$ with $1<R<1/|a|$; for $|z|<R$ one has $|\overline a z|<1$, so $1-\overline a z\ne0$. Thus [L2] makes $B_a$ holomorphic on a neighbourhood of the closed unit disc, and hence continuous there. [L2, given, algebra]

2.1 When $|z|=1$, direct expansion gives $$|z-a|^2=1-z\overline a-a\overline z+|a|^2=|1-\overline a z|^2.$$ The denominator is nonzero by step 1.1, so $|B_a(z)|=1$ on the entire unit circle. [step 1.1, given, algebra]

3.1 Since $B_a(a)=0$ and its boundary modulus is $1$, the function is nonconstant. It therefore realizes the zero alternative in [L1] and refutes the proposed implication, including the case $a=0$, where $B_0(z)=z$. [step 1.1, step 2.1, L1, algebra] ∎
