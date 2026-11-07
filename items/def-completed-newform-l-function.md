---
id: def-completed-newform-l-function
kind: definition
title: "Completed L-Function of a Normalized Newform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-euler-gamma-function
  - lem-cusp-form-fourier-coefficients-polynomial-growth
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Kimball Martin, Modular Forms: A Classical Introduction, full course notes"
      url: "https://kimballmartin.github.io/mfs/mfs.pdf"
      locator: "§§7.3 and 8.4; Mellin transform, functional equation and Atkin–Lehner operators."
---

## Definition

Let $f(z)=\sum_{n\ge1}a_ne^{2\pi inz}$ be a normalized cusp form of even weight $k\ge2$, trivial character, and level $N$. Define
$$L(f,s)=\sum_{n\ge1}a_n n^{-s}\quad (\operatorname{Re}s>k/2+1),\qquad \Lambda(f,s)=\left(\frac{\sqrt N}{2\pi}\right)^s\Gamma(s)L(f,s).$$
The displayed half-plane is one of absolute convergence; analytic continuation is a separate theorem.

## Definition references

[Kimball Martin, Modular Forms: A Classical Introduction, full course notes](https://kimballmartin.github.io/mfs/mfs.pdf)

## Facts & Assumptions

**Given:** The Fourier coefficients of a normalized cusp form and the Euler gamma function.

[F1] [[def-normalized-cuspidal-eigenform-over-gl2]]: $f(z)=\sum_{n\ge1}a_ne^{2\pi inz}$.

[F2] [[lem-cusp-form-fourier-coefficients-polynomial-growth]]: $|a_n|\le C_fn^{k/2}$ for a constant $C_f$.

[F3] [[def-euler-gamma-function]]: $\Gamma(s)$ is defined by the Euler integral for $\operatorname{Re}s>0$.

## Proof

**Proof technique:** absolute-convergence estimate.

1.1 If $\sigma=\operatorname{Re}s>k/2+1$, then [F2] gives $\sum_{n\ge1}|a_n n^{-s}|\le C_f\sum_{n\ge1}n^{k/2-\sigma}<\infty$, so the Dirichlet series in the Statement converges absolutely on the stated half-plane. [F1, F2, given, algebra]

2.1 Since $\sigma>0$, the Euler integral in [F3] is defined there. Multiplying the absolutely convergent series by the displayed scalar therefore defines $\Lambda(f,s)$ on that half-plane; no continuation is included in this definition. [step 1.1, F3, algebra] ∎
