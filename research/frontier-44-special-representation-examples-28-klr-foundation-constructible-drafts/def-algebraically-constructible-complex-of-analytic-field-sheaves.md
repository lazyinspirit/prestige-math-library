---
id: "def-algebraically-constructible-complex-of-analytic-field-sheaves"
kind: definition
title: "Algebraically constructible complexes of analytic field sheaves"
status: draft
origin: session
deps: ["def-sheaf-on-topological-space", "def-derived-category-of-an-abelian-category"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Goresky, Sheaves and Perverse Sheaves; local finite-model reconstruction"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
---

## Definition

Let $X$ be a separated finite-type complex algebraic variety, with its analytic topology, and let $k$ be a field. Let $\operatorname{Sh}_k(X)$ be the category of sheaves of $k$-vector spaces and $k$-linear morphisms. The category $D_c^b(X;k)$ is the full subcategory of $D^b(\operatorname{Sh}_k(X))$ whose cohomology sheaves are locally constant of finite rank on a common finite smooth algebraic stratification with the frontier condition, and vanish outside a finite cohomological interval. These are topological constructible sheaves, not coherent or quasi-coherent sheaves. A groupoid local system is identified with a locally constant sheaf only through the actual local comparison. We use cochains with $H^j(A[m])=H^{j+m}(A)$.
