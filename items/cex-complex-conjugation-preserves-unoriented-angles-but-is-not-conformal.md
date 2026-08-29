---
id: cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal
kind: counterexample
title: "Complex conjugation preserves angle magnitudes but is not conformal"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [rem-biholomorphisms-are-conformal-with-holomorphic-inverse]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §2.3 Conformal Mapping"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement refuted

Every map that preserves angle magnitudes is conformal.

## Facts & Assumptions

**Given:** The map $c:\mathbb C\to\mathbb C$, $c(z)=\overline z$.

[F1] This page's conformal convention is orientation-preserving: biholomorphisms
preserve both angle magnitude and orientation, while complex conjugation is the
standard orientation-reversing exclusion
([[rem-biholomorphisms-are-conformal-with-holomorphic-inverse]]).

## Counterexample

1.1 On tangent vectors at $0$, $c$ sends $1\mapsto1$ and $i\mapsto-i$, so the unoriented angle still has magnitude $\pi/2$ but the oriented angle changes from $+\pi/2$ to $-\pi/2$. [F1, given]

2.1 The complex difference quotient at $0$ is $(c(h)-c(0))/h=\overline h/h$; along real $h\to0$ this equals $1$, while along purely imaginary $h\to0$ it equals $-1$, so the limit does not exist, $c$ is not holomorphic, and [F1] therefore excludes it from being conformal in the library's sense. [F1, step 1.1, algebra] ∎
