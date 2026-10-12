---
id: def-laplacian-of-a-c2-function
kind: definition
title: "The Laplacian of a $C^2$ function and of a $C^2$ vector field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-jacobian-matrix-and-gradient, def-ck-and-multi-index-notation-in-several-variables, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
forward_refs: [thm-c2-holomorphic-components-are-harmonic]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Definition 4.1.1"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and let $f:U\to\mathbb R$ be $C^2$ in the sense of [[def-ck-and-multi-index-notation-in-several-variables]]. Then $\nabla f$ is a $C^1$ field on $U$ by [[def-ck-euclidean-maps-and-diffeomorphisms]], since each of its components $\partial_if$ has continuous first partial derivatives, so its divergence is defined; the **Laplacian** of $f$ is

$$\Delta f:=\operatorname{div}\nabla f=\sum_{i<n}\partial_i\partial_if,$$

with the gradient of [[def-jacobian-matrix-and-gradient]] and the divergence of [[def-divergence-and-curl-of-a-c1-vector-field]]. A $C^2$ function with $\Delta f=0$ on $U$ is called **harmonic** on $U$.

For a $C^2$ map $F=(F_0,\ldots,F_{q-1}):U\to\mathbb R^q$, whose components are $C^2$ by [[def-ck-euclidean-maps-and-diffeomorphisms]], $\Delta F$ is the field whose $i$th coordinate is $\Delta F_i$. In the three-coordinate naming of this page, $\Delta f=\partial_x\partial_xf+\partial_y\partial_yf+\partial_z\partial_zf$ and $\Delta F=(\Delta F_x,\Delta F_y,\Delta F_z)$.

## Remarks

- **The vector case is componentwise by convention, and the convention is stated because sources leave it implicit.** Nothing forces a single reading of $\Delta$ on a field; the componentwise one is the one that makes the curl-of-a-curl identity of [[cor-the-curl-of-a-curl-of-a-c2-field]] true as written, and it is the reading in force everywhere on this page.

- **Why $C^2$ and not $C^1$.** Forming $\nabla f$ consumes one degree of differentiability, so $\operatorname{div}\nabla f$ needs $\nabla f$ to be $C^1$; that is exactly $f$ being $C^2$. Nothing here interchanges two partial derivatives, so no appeal to a mixed-partials theorem is made in the definition itself, and $\Delta f$ is defined by the displayed sum in the fixed order $\partial_i\partial_i$.

- **The planar equation.** For $n=2$ the condition $\Delta f=0$ reads $\partial_x\partial_xf+\partial_y\partial_yf=0$. That is the equation written out in [[thm-c2-holomorphic-components-are-harmonic]] for the real and imaginary parts of a holomorphic function; a reader meeting the word "harmonic" in either place is meeting one notion.
