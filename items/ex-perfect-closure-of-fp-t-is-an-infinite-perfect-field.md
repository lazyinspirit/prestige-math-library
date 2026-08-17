---
id: ex-perfect-closure-of-fp-t-is-an-infinite-perfect-field
kind: example
title: "$\\bigcup_{n\\ge0}\\mathbb F_p(t^{1/p^n})$ is an infinite perfect field of characteristic $p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-perfect-field-characterizations, thm-frobenius-endomorphism-and-finite-field-automorphism, cor-rational-function-field-as-a-fraction-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

Inside an algebraic closure of $\mathbb F_p(t)$, let $t_n$ be the unique root
of $x^{p^n}-t$ and put $F_n=\mathbb F_p(t_n)$. Then

$$P:=\bigcup_{n\ge0}F_n$$

is an infinite perfect field of characteristic $p$ containing
$\mathbb F_p(t)$.

## Facts & Assumptions

**Given:** A prime $p$ and an algebraic closure $\Omega$ of $\mathbb F_p(t)$.

[L1] In characteristic $p$, a field is perfect exactly when Frobenius is surjective ([[thm-perfect-field-characterizations]]).

[L2] Frobenius is injective and respects field operations in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L3] The rational function field is the fraction field of its polynomial ring ([[cor-rational-function-field-as-a-fraction-field]]).

## Verification

**Proof technique:** direct.

1.1 The given algebraic closure contains a root $t_n$ of every $x^{p^n}-t$, and [L2] makes that root unique. Take $t_0=t$. Uniqueness gives $t_{n+1}^p=t_n$, so $F_n\subseteq F_{n+1}$. [L2, construct]

2.1 A nested union of fields is a field, so $P$ is a field of characteristic $p$ containing $F_0=\mathbb F_p(t)$. The distinct powers of the indeterminate $t$ show that this fraction field, and hence $P$, is infinite. [step 1.1, L3, algebra]

2.2 If $z=r(t_n)/s(t_n)\in F_n$, replace $t_n$ by $t_{n+1}$ in the same rational expression. Since coefficients in $\mathbb F_p$ are fixed by Frobenius, [L2] shows that the resulting element of $F_{n+1}$ has $p$th power $z$. Thus Frobenius on $P$ is surjective. [step 1.1, L2, algebra]

3.1 By [L1], $P$ is perfect. [step 2.2, L1] ∎
