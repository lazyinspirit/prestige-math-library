---
id: cex-knot-kt-36-boundary-case
kind: counterexample
title: One finite sequence value does not determine asymptotic growth
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Hitoshi Murakami and Jun Murakami, The colored Jones polynomials and the
        simplicial volume of a knot, §5
      url: https://arxiv.org/pdf/math/9905075
    - title: Hitoshi Murakami, An Introduction to the Volume Conjecture, §§1–4
      url: https://arxiv.org/pdf/1002.0126
---

## Statement refuted

For every positive real sequence $(a_N)_{N\ge1}$, every real $V>0$, and every integer $N_0\ge1$, if $(2\pi/N_0)\log(a_{N_0})=V$, then $\lim_{N\to\infty}(2\pi/N)\log(a_N)=V$.

## Statement references

[Hitoshi Murakami and Jun Murakami, *The colored Jones polynomials and the simplicial volume of a knot*, §5](https://arxiv.org/pdf/math/9905075)

[Hitoshi Murakami, *An Introduction to the Volume Conjecture*, §§1–4](https://arxiv.org/pdf/1002.0126)

## Facts & Assumptions

**Given:** A positive real sequence $(a_N)_{N\ge1}$, a target value $V>0$, and a finite index $N_0\ge1$.

[F1] For every positive real $x$, $\log x$ is defined, and $\log 1=0$.

## Counterexample

1.1 Define $a_{N_0}=\exp(VN_0/(2\pi))$ and $a_N=1$ for every $N\ge1$ with $N\ne N_0$. Each term is positive, and $(2\pi/N_0)\log(a_{N_0})=(2\pi/N_0)(VN_0/(2\pi))=V$. [given, F1, construct, algebra]

2.1 For every $N>N_0$, $a_N=1$, so $(2\pi/N)\log(a_N)=0$. The sequence of normalized logarithms is therefore eventually zero and has limit $0\ne V$. This contradicts the asserted conclusion. [F1, step 1.1, algebra] ∎

## Remarks

This is a sequence-level witness about the information in one finite evaluation. It is not asserted to be a colored Jones sequence and does not refute the volume conjecture.
