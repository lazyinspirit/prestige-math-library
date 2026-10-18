---
id: ex-periodic-effective-tensor-high-contrast-no-uniform-condition-number
kind: example
title: "High contrast destroys contrast-independent conditioning"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [thm-periodic-effective-tensor-symmetric-elliptic, def-periodic-cell-correctors-and-effective-tensor, lem-fehmm-one-dimensional-nonaligned-resonance-bound, thm-tonelli-theorem-for-sigma-finite-product-spaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Example

In dimension $d\ge2$, let $a_\kappa(y_1)=\kappa$ on the first half-period and $1$ on the second, with $0<\kappa\le1$. Then
$$A^*_\kappa=\operatorname{diag}\left(\frac{2\kappa}{1+\kappa},\frac{1+\kappa}{2},\ldots,\frac{1+\kappa}{2}\right),\qquad \operatorname{cond}_2(A^*_\kappa)=\frac{(1+\kappa)^2}{4\kappa}\longrightarrow\infty\quad(\kappa\downarrow0).$$
Thus pointwise ellipticity of each fixed coefficient does not give a contrast-independent condition number.

## Facts & Assumptions

**Given:** A layered periodic scalar coefficient with positive values $\kappa$ and $1$ on equal fractions, where each fixed $\kappa$ is uniformly elliptic with $\lambda=\kappa$ and $\Lambda=1$.

[F1] [[thm-periodic-effective-tensor-symmetric-elliptic]]: $A^*$ is symmetric positive definite for every fixed $\kappa>0$.

[F2] [[def-periodic-cell-correctors-and-effective-tensor]]: the effective matrix is the mean corrector flux.

[F3] [[lem-fehmm-one-dimensional-nonaligned-resonance-bound]]: the mean-zero harmonic-mean corrector for the one-dimensional profile belongs to $V_\#$; its smooth periodic approximants lift to the higher-dimensional cell.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: iterated integration over the unit cell is valid for the layered coefficient times a smooth periodic test derivative.

## Proof



1.1 The normal corrector has derivative $\chi_1'=c/a_\kappa-1$ with $c=(\int_0^1a_\kappa^{-1})^{-1}=2\kappa/(1+\kappa)$; this derivative has zero mean, and its periodic primitive gives constant normal flux $c$. With $\lambda=\kappa$ and $\Lambda=1$, [F3] supplies the one-dimensional mean-zero corrector; lifting its smooth periodic approximants in the first coordinate gives the required member of $V_\#(Y)$. For each tangential coordinate $j\ge2$, zero is the corrector: for every smooth periodic $v$, Tonelli [F4] and the one-dimensional FTC in $y_j$ give $\int_Ya_\kappa(y_1)\partial_jv(y)dy=0$, and density extends this to $V_\#$. Its mean flux is $\int_0^1a_\kappa=(1+\kappa)/2$. These correctors yield the stated diagonal entries. [F1, F2, F3, F4, algebra]

2.1 Since $0<\kappa\le1$, the tangential eigenvalue is at least the normal one: $(1+\kappa)^2-4\kappa=(1-\kappa)^2\ge0$. The spectral condition number is therefore their ratio, $(1+\kappa)^2/(4\kappa)$, which diverges as $\kappa\downarrow0$. Every fixed $\kappa$ remains positive and satisfies [F1]; only a uniform-in-contrast condition number fails. [F1, step 1.1, algebra] ∎
