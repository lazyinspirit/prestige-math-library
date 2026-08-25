---
id: def-divergence-and-curl-of-a-c1-vector-field
kind: definition
title: "Divergence and curl of a $C^1$ vector field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-cross-product-in-r3, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Definition 4.1.1"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and let $F=(F_0,\ldots,F_{n-1}):U\to\mathbb R^n$ be $C^1$ in the componentwise Euclidean sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]. Then the **divergence** of $F$ is $\operatorname{div}F:=\sum_{i<n}\partial_iF_i$, the function $U\to\mathbb R$ whose value at $p$ is $\sum_{i<n}\partial_iF_i(p)$. The partial derivatives are those of [[def-directional-and-partial-derivatives]], and the sum is the finite sum used throughout [[def-euclidean-inner-product]]. Since each $\partial_iF_i$ is continuous on $U$, so is $\operatorname{div}F$.

Now let $n=3$ and let $F:U\to\mathbb R^3$ be $C^1$ on an open $U\subseteq\mathbb R^3$. Following [[def-cross-product-in-r3]], write the three coordinates of a point and of a vector as $x,y,z$ rather than $0,1,2$, so that $F=(F_x,F_y,F_z)$ means $F=(F_0,F_1,F_2)$ and $\partial_x,\partial_y,\partial_z$ are $\partial_0,\partial_1,\partial_2$. With that naming, the **curl** of $F$ is $\operatorname{curl}F:=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$, a map $U\to\mathbb R^3$ each of whose coordinates is continuous on $U$. In this naming the divergence reads $\operatorname{div}F=\partial_xF_x+\partial_yF_y+\partial_zF_z$.

Both operators are defined pointwise from the first partial derivatives of the components, so no differentiability of $F$ beyond $C^1$ is used and no orientation or metric structure enters beyond the standard coordinates of [[def-jacobian-matrix-and-gradient]]. For a $C^1$ scalar function $f$ on $U$, the gradient $\nabla f=(\partial_0f,\ldots,\partial_{n-1}f)$ is that of [[def-jacobian-matrix-and-gradient]]; in the three-coordinate naming, $\nabla f=(\partial_xf,\partial_yf,\partial_zf)$.

## Remarks

- **Why the curl is only defined in three coordinates.** If $A=JF-(JF)^{\mathsf T}$ with the row-component Jacobian convention, then the curl coordinates are $A_{zy}$, $A_{xz}$ and $A_{yx}$. Thus the curl is encoded, with fixed signs, by the three independent off-diagonal entries of $A$ (or by twice those entries if “antisymmetric part” means $A/2$). In $n$ coordinates there are $n(n-1)/2$ independent entries. Only at $n=3$ is that number again $n$, which is what allows the collection to be read as a vector in the same space. The divergence has no such restriction and is defined for every $n\ge1$.

- **The word "divergence" here is about vector fields.** It has nothing to do with the divergence of a sequence or of a series; the two senses share only the word.

- **Placement of the minus sign in the second coordinate.** Some presentations write the middle coordinate as $-(\partial_xF_z-\partial_zF_x)$. That is the same real number as $\partial_zF_x-\partial_xF_z$, and the form displayed above is the one whose three coordinates read off the coordinate formula of [[def-cross-product-in-r3]] in the same cyclic pattern.
