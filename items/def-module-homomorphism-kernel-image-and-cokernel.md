---
id: def-module-homomorphism-kernel-image-and-cokernel
kind: definition
title: "Module homomorphism and isomorphism, kernel, image and cokernel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-quotient-module, def-injection-surjection-bijection]
justified_by: [thm-module-kernel-image-and-injectivity]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Definition

For left $R$-modules $M,N$, a function $f:M\to N$ is an **$R$-module
homomorphism** if

$$f(m+m')=f(m)+f(m')\quad\text{and}\quad f(rm)=rf(m)$$

for all $m,m'\in M$ and $r\in R$. It is a **module isomorphism** if it is a
bijective module homomorphism.

Its **kernel** and **image** are

$$\ker f:=\{m\in M:f(m)=0_N\},\qquad\operatorname{im}f:=\{f(m):m\in M\}.$$

Once [[thm-module-kernel-image-and-injectivity]] establishes that the image is a
submodule, the **cokernel** of $f$ is the quotient module
$\operatorname{coker}f:=N/\operatorname{im}f$.
