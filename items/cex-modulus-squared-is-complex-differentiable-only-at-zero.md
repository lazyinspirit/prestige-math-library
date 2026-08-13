---
id: cex-modulus-squared-is-complex-differentiable-only-at-zero
kind: counterexample
title: "$z\\mapsto|z|^2$ is complex differentiable exactly at $0$, with derivative $0$, but is holomorphic on no neighbourhood of $0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-complex-differentiability-holomorphic-and-entire, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, lem-complex-conjugation-and-modulus-laws]
aliases: []
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.1.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: frontier-12
---

## Statement refuted

Complex differentiability at a point automatically extends to holomorphy on some neighbourhood of that point.

## Facts & Assumptions
**Given:** $f(z)=|z|^2=z\bar z$ on $\mathbb C$.

[L1] Complex differentiability at a point is existence of the difference-quotient limit, while holomorphy at a point requires complex differentiability on an open neighbourhood of that point ([[def-complex-differentiability-holomorphic-and-entire]]).

[L2] Complex differentiability implies real total differentiability and the Cauchy–Riemann equations ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L3] $|z|^2=z\bar z$, $\overline{\overline z}=z$, and $|z|=0$ exactly when $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]). Since $\overline{\overline z}=z$ and $z\overline z=|z|^2$, one has $|\overline z|^2=\overline z\,\overline{\overline z}=\overline zz=|z|^2$, and both moduli are nonnegative, so $|\overline z|=|z|$.

## Counterexample

**Proof technique:** cases.

1.1 At $z=0$ and $h\ne0$, $$\frac{f(h)-f(0)}h=\frac{|h|^2}{h}=\bar h,$$ whose modulus is $|h|$ and hence tends to $0$. Thus $f'(0)=0$. [L1, L3, assume-case zero]

1.2 At $z=x+iy$, the components are $u=x^2+y^2$ and $v=0$, so $u_x=2x$, $u_y=2y$, and $v_x=v_y=0$. [algebra]

2.1 If $f$ were complex differentiable at a nonzero $z$, [L2] would force $2x=0$ and $2y=0$, hence $z=0$, a contradiction. Therefore $f$ is not complex differentiable at any nonzero point. [step 1.2, L2, assume-case nonzero, algebra]

3.1 Steps 1.1 and 2.1 cover every $z\in\mathbb C$, so the complex-differentiability locus is exactly $\{0\}$. Every open neighbourhood of $0$ contains a nonzero point, where step 2.1 gives failure; thus [L1] says $f$ is holomorphic on no neighbourhood of $0$. [step 1.1, step 2.1, L1, L3, cases-exhaustive] ∎
