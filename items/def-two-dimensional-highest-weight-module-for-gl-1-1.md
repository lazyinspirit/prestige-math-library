---
id: def-two-dimensional-highest-weight-module-for-gl-1-1
kind: definition
title: Two-dimensional highest-weight module data for gl(1|1)
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - thm-gl-1-1-is-a-lie-superalgebra
  - def-gl-1-1-bracket-data
  - def-lie-supermodule
  - def-highest-weight-vector-and-module-for-a-lie-superalgebra
  - def-algebraic-dual-and-linear-functional
justified_by:
  - thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §§2.4 and 2.6"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 25–26 and 37–39: supermodule and highest-weight conventions. The explicit gl(1|1) matrices below are verified locally."
    - title: "Vera Serganova, Kac–Moody Superalgebras and Integrability, §§10 and 13"
      url: https://math.berkeley.edu/~serganov/papers/superk.pdf
      locator: "Printed pp. 29–31 and 40–41: highest-weight and typicality conventions for specified contragredient superalgebras; not used as a gl(1|1) classification theorem."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

For $a,b\in\mathbb C$, let $K(a,b)=\mathbb C v\oplus\mathbb C w$, with $v$ even and $w$ odd. Specify the candidate action of the basis in [[def-gl-1-1-bracket-data]] by
$$ h_1v=av,\quad h_2v=bv,\quad h_1w=(a-1)w,\quad h_2w=(b+1)w,\quad ev=0,\quad ew=(a+b)v,\quad fv=w,\quad fw=0. $$
The verification item [[thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined]] proves that this data makes $K(a,b)$ a $\mathfrak{gl}(1|1)$-supermodule. Relative to the triangular decomposition in [[thm-gl-1-1-is-a-lie-superalgebra]], define the algebraic-dual functional (in the sense of [[def-algebraic-dual-and-linear-functional]]) $\lambda_{a,b}(c_1h_1+c_2h_2)=c_1a+c_2b$ on $\mathfrak h=\mathbb C h_1\oplus\mathbb C h_2$; then $v$ is a highest-weight vector of weight $\lambda_{a,b}$.
