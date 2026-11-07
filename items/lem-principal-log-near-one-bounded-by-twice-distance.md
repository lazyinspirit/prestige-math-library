---
id: lem-principal-log-near-one-bounded-by-twice-distance
kind: lemma
title: "The principal logarithm near one is bounded by twice the distance"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-fundamental-theorem-for-complex-line-integrals
  - cor-ml-estimate-for-complex-line-integrals
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Chapter 5"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Statement

For $z\in\mathbb C$ with $|z|\le\tfrac12$, the principal logarithm is defined at $1+z$ and satisfies
$$|\operatorname{Log}(1+z)|\le 2|z|.$$

## Statement references

[[def-complex-logarithms-principal-logarithm-and-complex-powers]]

[[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]

[[thm-fundamental-theorem-for-complex-line-integrals]]

[[cor-ml-estimate-for-complex-line-integrals]]

[Evertse, *Diophantine Equations*, Chapter 5, Corollary 5.3 proof](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** $z\in\mathbb C$ with $|z|\le\tfrac12$.

[F1] The principal logarithm is holomorphic on the slit plane $S=\mathbb C\setminus(-\infty,0]$ and has derivative $\operatorname{Log}'(w)=1/w$ there. ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]])

[F2] If a holomorphic function $F$ has continuous derivative $f$ on an open set containing a rectifiable contour $\gamma$, then $\int_\gamma f(w)\,dw=F(\gamma(1))-F(\gamma(0))$. ([[thm-fundamental-theorem-for-complex-line-integrals]])

[F3] If $|f(w)|\le M$ on a rectifiable contour $\gamma$, then $|\int_\gamma f(w)\,dw|\le M L(\gamma)$. ([[cor-ml-estimate-for-complex-line-integrals]])

## Proof

1.1 Define $\gamma(t)=1+tz$ for $0\le t\le1$. Since $\operatorname{Re}\gamma(t)\ge1-t|z|\ge\tfrac12$, the segment stays in $S$, and $|\gamma(t)|\ge1-t|z|\ge\tfrac12$ gives $|1/\gamma(t)|\le2$. Its length is $L(\gamma)=|z|$. [given, F1, algebra]

1.2 By [F1], $\operatorname{Log}'(w)=1/w$ along $\gamma$. Since $\operatorname{Log}(1)=0$, [F2] gives $\operatorname{Log}(1+z)=\int_\gamma dw/w$. [given, F1, F2]

2.1 Apply [F3] to $f(w)=1/w$, whose modulus is at most $2$ on $\gamma$ by step 1.1. Then $|\operatorname{Log}(1+z)|\le2L(\gamma)=2|z|$. [step 1.1, step 1.2, F3] ∎