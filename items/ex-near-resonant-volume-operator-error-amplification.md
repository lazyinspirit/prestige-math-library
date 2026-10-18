---
id: ex-near-resonant-volume-operator-error-amplification
kind: example
title: A near-unit volume-operator mode amplifies forcing error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-volume-integral-scattering-model, thm-volume-integral-scattering-fredholm-stability, thm-volume-integral-operator-is-compact]
justified_by: []
proof_strategy: direct
axiom_use: "The operator-theoretic existence and residual estimate inherit the Axiom of Choice from the Fredholm theorem; the eigenvector calculation is algebraic."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Printed pp. 60–65, Fredholm solvability and solution-error conditioning."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Printed pp. 12–13, compact Fredholm stability and inverse-norm amplification."
verification:
  precheck: pass
---

## Example

Conditionally suppose a compact volume operator $K_k$ has a normalized eigenmode $\phi$ with eigenvalue $\lambda\ne1$, and suppose $I-K_k$ is injective. The Fredholm branch then applies. Forcing along $\phi$ is amplified by exactly $|1-\lambda|^{-1}$; this example does not claim that every physical contrast has such an eigenvalue.

## Verification

**Given:** AC, the compact volume operator $K_k$, injectivity of $I-K_k$, and $K_k\phi=\lambda\phi$ with $\|\phi\|_2=1$ and $\lambda\ne1$.

[F1] AC, compactness of $K_k$, and injectivity of $I-K_k$ give a unique solution for each forcing and a bounded inverse ([[thm-volume-integral-scattering-fredholm-stability]]).

[F2] The compactness hypothesis is supplied for the model by [[thm-volume-integral-operator-is-compact]].

1.1 By [F2], the model operator is compact; together with the assumed injectivity and $\lambda\ne1$, the Fredholm result [F1] applies. The vector $u=(1-\lambda)^{-1}\phi$ satisfies $(I-K_k)u=(1-\lambda)^{-1}(1-\lambda)\phi=\phi$. Uniqueness from [F1] identifies this with the solution for forcing $f=\phi$, so $\|u\|_2=|1-\lambda|^{-1}$. [given, F1, F2, algebra]

2.1 For perturbed forcing $f_\delta=(1+\delta)\phi$, linearity and the same eigenvector calculation give $u_\delta=(1+\delta)(1-\lambda)^{-1}\phi$. Therefore $\|u_\delta-u\|_2=|\delta|/|1-\lambda|$, while $\|f_\delta-f\|_2=|\delta|$. As $\lambda$ approaches $1$ through values unequal to $1$, this exact amplification factor grows without bound; the eigenpair remains a conditional hypothesis. [given, step 1.1, algebra] ∎
