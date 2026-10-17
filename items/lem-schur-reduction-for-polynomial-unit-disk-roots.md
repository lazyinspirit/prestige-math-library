---
id: lem-schur-reduction-for-polynomial-unit-disk-roots
kind: lemma
title: "Schur reduction preserves strict unit-disk root location"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
axiom_base: "No additional set-theoretic axiom; finite polynomial algebra and the cited Rouché theorem."
deps: [thm-rouche-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7, Corollary 8.7.12 and Remark 8.7.13 (Rouché theorem used in the proof)"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
---

## Statement

Let $p(z)=z^n+a_{n-1}z^{n-1}+\cdots+a_0$ be a real monic polynomial of
degree $n\ge1$ with $|a_0|<1$. Define the reversed polynomial
$p^\#(z)=z^np(1/z)$ and
$$q(z)=\frac{p(z)-a_0p^\#(z)}{z(1-a_0^2)}.$$
If every zero of $p$ lies strictly inside the unit disk, then every zero of
$q$ does too.

## Facts & Assumptions

**Given:** A real monic polynomial $p$ of degree at least one, $|a_0|<1$, and the assumption that all its zeros lie in $|z|<1$.

[A1] The real polynomial is monic of degree at least one, $|p(0)|<1$, and every root of $p$ is strictly inside the unit disk.


[F1] [[thm-rouche-theorem]]: if $|g(z)|<|f(z)|$ on a simple closed contour, then $f$ and $f+g$ have the same number of zeros inside, counted with multiplicity.

## Proof


1.1 On $|z|=1$, real coefficients give $p^\#(z)=z^n\overline{p(z)}$, so $|p^\#(z)|=|p(z)|$. The strict root hypothesis makes $p$ nonzero on the unit circle, and $|a_0p^\#(z)|<|p(z)|$. Apply [F1] to $p$ and $-a_0p^\#$; $p-a_0p^\#$ has the same $n$ zeros in the disk as $p$. [A1, given, F1, algebra]

2.1 The polynomial $p-a_0p^\#$ has constant term zero and leading coefficient $1-a_0^2\ne0$, so it is $z$ times a degree-$(n-1)$ polynomial. One of its $n$ disk zeros is the factor zero at $z=0$; the remaining $n-1$ zeros are exactly those of the quotient. Dividing by the nonzero scalar $1-a_0^2$ changes no roots. Hence all zeros of $q$ lie strictly inside the disk. [A1, given, step 1.1, algebra] ∎
