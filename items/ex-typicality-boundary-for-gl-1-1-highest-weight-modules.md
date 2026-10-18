---
id: ex-typicality-boundary-for-gl-1-1-highest-weight-modules
kind: example
title: The typicality boundary in a gl(1|1) highest-weight module
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-gl-1-1-is-a-lie-superalgebra
  - def-highest-weight-vector-and-module-for-a-lie-superalgebra
  - def-two-dimensional-highest-weight-module-for-gl-1-1
  - thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined
  - def-typicality-for-gl-1-1-highest-weights
  - def-simple-and-semisimple-lie-supermodules
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §§2.4 and 2.6"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 25–26 and 37–39: supermodules and highest-weight conventions."
    - title: "Vera Serganova, Kac–Moody Superalgebras and Integrability, §13"
      url: https://math.berkeley.edu/~serganov/papers/superk.pdf
      locator: "Printed pp. 40–41: typicality is tied to a specified root datum; the gl(1|1) criterion is proved directly here."
---

## Example

For every $(a,b)\in\mathbb C^2$, let $K(a,b)$ be the two-dimensional highest-weight supermodule from [[def-two-dimensional-highest-weight-module-for-gl-1-1]], with highest vector $v$ even and $w=fv$ odd. It is simple exactly when the parameter is typical, namely when $a+b\ne0$.

## Facts & Assumptions

**Given:** The gl(1|1) module $K(a,b)=\mathbb C v\oplus\mathbb C w$, its $\mathbb Z_2$-grading, and the highest-weight convention from the fixed triangular decomposition.

[F1] [[thm-gl-1-1-is-a-lie-superalgebra]]: the positive subalgebra is $\mathbb C e$ and the Cartan subalgebra is $\mathbb C h_1\oplus\mathbb C h_2$.

[F2] [[def-highest-weight-vector-and-module-for-a-lie-superalgebra]]: a highest-weight vector is a nonzero homogeneous weight vector annihilated by the selected positive subalgebra.

[F3] [[def-two-dimensional-highest-weight-module-for-gl-1-1]]: $v$ has weight $(a,b)$, $ev=0$, $fv=w$, and $ew=(a+b)v$.

[F4] [[thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined]]: these data make $K(a,b)$ a supermodule and $v$ a highest-weight vector.

[F5] [[def-typicality-for-gl-1-1-highest-weights]]: this parameter is typical when $a+b\ne0$ and atypical when $a+b=0$.

[F6] [[def-simple-and-semisimple-lie-supermodules]]: a nonzero supermodule is simple when it has no proper nonzero graded submodule.

## Verification

**Proof technique:** direct.


1.1 By [F1], $\mathfrak n^+=\mathbb C e$ and $\mathfrak h=\mathbb C h_1\oplus\mathbb C h_2$. The vector $v$ is nonzero, even, has the displayed $\mathfrak h$-weight, and is killed by $e$, so [F2] and [F4] identify $K(a,b)$ as the stated highest-weight supermodule. Its only nonzero proper graded subspaces are $\mathbb C v$ and $\mathbb C w$, since its even and odd parts are one-dimensional. Neither is invariant when $a+b\ne0$: $f v=w\notin\mathbb C v$, while $e w=(a+b)v\notin\mathbb C w$. By [F6], it is simple for a typical parameter. [F1, F2, F3, F4, F5, F6, given]


2.1 If $a+b=0$, then $e w=0$, $f w=0$, and $h_1,h_2$ preserve $\mathbb C w$, so $\mathbb C w$ is a nonzero proper graded submodule. By [F6], $K(a,b)$ is not simple; by [F5], the parameter is atypical. [given, F3, F4, F5, F6] ∎
