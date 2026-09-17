---
id: def-complexification-of-a-real-lie-algebra
kind: definition
title: Complexification of a real Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-algebra-over-a-field, def-tensor-product-of-modules-by-generators-and-relations]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, printed pp. 348-353"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.2, printed pp. 199-201"
landmark: false
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real Lie algebra
([[def-lie-algebra-over-a-field]]). Its **complexification** is the real tensor
product $\mathfrak g_{\mathbb C}=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$
([[def-tensor-product-of-modules-by-generators-and-relations]]), equipped with
the scalar multiplication $t\,(X\otimes z)=X\otimes(tz)$ and with the unique
complex-bilinear Lie bracket extending the original one, that is

$$[X\otimes z,\,Y\otimes w]=[X,Y]\otimes zw \qquad (X,Y\in\mathfrak g_0,\ z,w\in\mathbb C),$$

extended to all of $\mathfrak g_{\mathbb C}$ by linearity. Well-definedness and
the Lie-algebra axioms for this bracket are proved in
[[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]],
whose argument verifies bilinearity and the Jacobi identity on generators; the
definition is not being used circularly, since that proof only uses the explicit
formula recorded here.

The map $\varepsilon\colon\mathfrak g_0\to\mathfrak g_{\mathbb C}$,
$\varepsilon(X)=X\otimes 1$, is the **canonical real embedding**, and we write
$\mathfrak g_0^{\mathbb C}:=\mathfrak g_{\mathbb C}$. Every element of
$\mathfrak g_{\mathbb C}$ has a unique expression $X\otimes1+i\,Y\otimes1$ with
$X,Y\in\mathfrak g_0$; the **real part** of such an element is $X$ and its
**imaginary part** is $Y$.
