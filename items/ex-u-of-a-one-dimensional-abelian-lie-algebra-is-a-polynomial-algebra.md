---
id: ex-u-of-a-one-dimensional-abelian-lie-algebra-is-a-polynomial-algebra
kind: example
title: The enveloping algebra of a one-dimensional abelian Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-enveloping-algebra-of-an-abelian-lie-algebra-is-its-symmetric-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Example 12.2, printed p. 69"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Example 5.1, printed p. 71"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

If $\mathfrak g=kx$ is one-dimensional and abelian, then
$U(\mathfrak g)\cong k[t]$, with $\iota_{\mathfrak g}(x)$ corresponding to $t$.

## Facts & Assumptions

**Given:** The abelian Lie algebra $\mathfrak g=kx$.

[L1] The enveloping algebra of an abelian Lie algebra is its symmetric algebra ([[prop-enveloping-algebra-of-an-abelian-lie-algebra-is-its-symmetric-algebra]]).

## Verification

**Proof technique:** direct.

1.1 The symmetric algebra $S(kx)$ has one basis monomial $x^n$ in every degree $n\geq0$, and multiplication satisfies $x^mx^n=x^{m+n}$. [given, algebra]

2.1 Sending $t^n\mapsto x^n$ therefore defines a bijective unital algebra map $k[t]\to S(kx)$. Composing with [L1] gives $k[t]\cong U(\mathfrak g)$ and sends $t$ to $\iota_{\mathfrak g}(x)$. [step 1.1, L1, algebra] ∎
