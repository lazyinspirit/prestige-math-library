---
id: def-hamiltonian-vector-field-and-hamiltonian-function
kind: definition
title: Hamiltonian vector field and Hamiltonian function
status: draft
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.1, pp. 105--106
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

For $H\in C^\infty(M)$, its **Hamiltonian vector field** is the vector field
$X_H$ determined by the library sign convention

$$\iota_{X_H}\omega=dH.$$

A vector field $X$ is **Hamiltonian** if $\iota_X\omega=dH$ for some smooth
function $H$; such an $H$ is a **Hamiltonian function for $X$**. A function and
its vector field are distinct data, and completeness of $X_H$ is not assumed.
