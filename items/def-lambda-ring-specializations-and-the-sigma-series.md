---
id: def-lambda-ring-specializations-and-the-sigma-series
kind: definition
title: "Specializations of symmetric functions and the series $\\sigma$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-hall-inner-product-on-symmetric-functions,
       def-power-sum-and-complete-homogeneous-symmetric-polynomials,
       def-stable-graded-ring-of-symmetric-functions,
       prop-power-sums-form-a-rational-not-integral-stable-basis]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); section 2.3 pp. 5-6 (lambda-ring formalism) and section 2.4 p. 7 (vertex operators (4)-(6))"
      url: "https://arxiv.org/pdf/1607.02887"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I sections 2-4 (power sums, complete functions, the Hall inner product)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Definition

Work in $\Lambda_{\mathbb Q}:=\mathbb Q\otimes_{\mathbb Z}\Lambda$, the
$\mathbb Q$-scalar extension of the stable graded ring
([[def-stable-graded-ring-of-symmetric-functions]]). Its power sums
$p_1,p_2,\dots$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]])
are algebraically independent generators:
$\Lambda_{\mathbb Q}=\mathbb Q[p_1,p_2,\dots]$, and for every $d$ the products
$p_\lambda$, $\lambda\vdash d$, form a $\mathbb Q$-basis of
$\Lambda_{\mathbb Q}^d$
([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

A **specialization** is a $\mathbb Q$-algebra homomorphism
$f\mapsto f[A]$ from $\Lambda_{\mathbb Q}$ to a commutative
$\mathbb Q$-algebra. By the algebraic independence of the power sums, a
specialization is determined by the sequence of values $\bigl(p_k[A]\bigr)_{k\ge1}$,
and conversely every sequence of elements of a commutative $\mathbb Q$-algebra
extends uniquely to a specialization. For specializations $A,B$, a scalar
$c\in\mathbb Q$ and a one-letter alphabet $t$ one defines the specializations
$A+B$, $-A$, $AB$, $c\cdot A$ and $tA$ by their power-sum values

$$p_k[A+B]:=p_k[A]+p_k[B],\qquad p_k[-A]:=-p_k[A],\qquad p_k[AB]:=p_k[A]\,p_k[B],$$

$$p_k[c\cdot A]:=c\,p_k[A],\qquad p_k[t]:=t^k\ \ \text{and hence}\ \ p_k[tA]=t^k p_k[A].$$

Here $c\cdot A$ is a coefficient multiplicity, to be distinguished from the
one-letter alphabet $t$, for which $p_k[t]=t^k$ is a power and
$p_k[tA]=t^k p_k[A]$; all occurrences of $tX$, $t^{-1}$, $tA$ and
$\sigma[t]$ on this page use this one-letter convention. The symbol $1$
denotes the one-letter alphabet with $p_k[1]=1$ for all $k$, and $-1$ denotes
its plethystic negative with $p_k[-1]=-1$ for all $k$
([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]); it is
**not** the ordinary one-letter alphabet whose letter is minus one, for which
$p_k$ would equal $(-1)^k$. One writes $f[A+B]$, $f[-A]$, $f[AB]$ and
$f[c\cdot A]$ for the images of $f$ under these specializations.

Define $X^{\perp}$ to be the specialization with $f[X^{\perp}]:=f^{\perp}$ for
all $f$, where $f^{\perp}$ is the adjoint of multiplication by $f$ with respect
to the Hall inner product $\langle\ ,\ \rangle_H$
([[def-hall-inner-product-on-symmetric-functions]]), characterized by
$\langle f^{\perp}g,h\rangle_H=\langle g,fh\rangle_H$. It exists and is unique
because the Hall form is nondegenerate on each finite-dimensional graded piece
$\Lambda_{\mathbb Q}^d$; the adjoints of commuting multiplication operators
commute, so the operators $f^{\perp}$ span a commutative
$\mathbb Q$-algebra and $X^{\perp}$ is a specialization in the sense above.

Define the series
$$\sigma[X]:=\sum_{n\ge0}h_n[X],$$
$h_n$ the complete homogeneous symmetric function
([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).
Here $\sigma$ is interpreted in the graded completion of $\Lambda_{\mathbb Q}$
(or with a formal degree variable): it is a formal series, not an element of
$\Lambda_{\mathbb Q}$, and every occurrence of $\sigma$ below is to be read
degree by degree. Every Hall pairing of a series with a polynomial is the
finite sum obtained by truncating to the degrees of the polynomial. No
convergence of a scalar infinite sum is asserted, and no value of $\sigma$ at
a specialization with infinitely many letters is interpreted analytically.
