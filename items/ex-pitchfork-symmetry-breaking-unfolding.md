---
id: ex-pitchfork-symmetry-breaking-unfolding
kind: example
title: A constant imperfection removes the pitchfork's trivial branch
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-scalar-fold-transcritical-pitchfork-local-normal-forms
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 2, §2.3, printed p. 62, odd-symmetry pitchfork example; Chapter 7, pitchfork symmetry
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 1–2, printed pp. 1–30, symmetry and local equilibrium bifurcations
---

## Example

For a fixed $\varepsilon>0$, consider the perturbed equilibrium equation
$$F(x,\mu,\varepsilon)=x^3+\mu x+\varepsilon=0.$$
This is a symmetry-breaking perturbation of the odd pitchfork equation $x^3+\mu x=0$.

Here $\varepsilon^{1/3}$ denotes the unique positive real number whose cube is $\varepsilon$.

## Facts & Assumptions

**Given:** $F(x,\mu,\varepsilon)=x^3+\mu x+\varepsilon$ with fixed $\varepsilon>0$.

[F1] [[thm-scalar-fold-transcritical-pitchfork-local-normal-forms]]: a pitchfork at $x=0$ requires the trivial branch $F(0,\mu)=0$ and odd symmetry in $x$.

[F2] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: if $F_x$ is nonzero at an equilibrium, there is a unique smooth local equilibrium branch through it.

## Verification

1.1 We have $F(0,\mu,\varepsilon)=\varepsilon\ne0$, and $F(-x,\mu,\varepsilon)+F(x,\mu,\varepsilon)=2\varepsilon\ne0$. Thus both the trivial-branch and odd-symmetry hypotheses in [F1] fail at the former pitchfork point. [F1, given, algebra]

2.1 At $\mu=0$, $x_*=-\varepsilon^{1/3}$ is an equilibrium and $F_x(x_*,0,\varepsilon)=3\varepsilon^{2/3}>0$. By [F2] it continues as a unique smooth simple equilibrium branch near $(x_*,0)$; the equilibrium at the origin has disappeared. [F2, given, algebra] ∎
