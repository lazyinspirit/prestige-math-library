---
id: thm-global-regular-functions-projective-variety
kind: theorem
title: "global regular functions projective variety"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-function-projective-variety, def-homogeneous-coordinate-ring, lem-standard-projective-opens-are-affine-spaces, lem-homogenization-dehomogenization-correspondence, thm-global-regular-functions-affine-variety-coordinate-ring, lem-projective-irreducibility-homogeneous-prime]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Assume the Axiom of Choice. Every global regular function on a classical projective variety $X$ is constant.

## Proof

**Given:** The Axiom of Choice and a global regular function $f$ on a nonempty irreducible projective algebraic set $X\subseteq\mathbf P_k^n$, where $k$ is algebraically closed.

1.1 Put $A=S(X)$. Irreducibility makes $A$ a graded domain, so $f$ is a [given, algebra]
degree-zero element of $\operatorname{Frac}(A)$. If $x_i=0$ in $A$, take
$N_i=1$, and then $x_i^{N_i}f=0\in A_{N_i}$. Otherwise
$U_i=X\cap D_+(x_i)$ is nonempty. Normalizing $x_i=1$ identifies its
defining ideal with the dehomogenizations of the homogeneous elements of
$I_+(X)$; hence its affine coordinate ring is canonically the degree-zero
localization $A_{(x_i)}$. The affine global-functions theorem places
$f|_{U_i}$ in $A_{(x_i)}$, so it has the form $a/x_i^{N_i}$ with
$a\in A_{N_i}$. Therefore, for every $i$, there is $N_i\ge0$ such that
$x_i^{N_i}f\in A_{N_i}$. [given, algebra]

2.1 Choose $N\ge N_i$ for all $i$. If $d>(n+1)(N-1)$, every degree-$d$ monomial is divisible by some $x_i^N$, so multiplication by $f$ sends the finite-dimensional space $A_d$ into itself. This space is nonzero: choose $p\in X$ and a coordinate $x_i$ nonzero at $p$; then $x_i^d$ is nonzero in $A_d$. [step 1.1, algebra]

3.1 Cayley--Hamilton applied to the $k$-linear endomorphism $a\mapsto fa$ of $A_d$ gives a nonzero polynomial $P\in k[T]$ with $P(f)a=0$ for every $a\in A_d$. Taking $0\ne a\in A_d$ and working in the field $\operatorname{Frac}(A)$ gives $P(f)=0$. Since $k$ is algebraically closed, $P$ splits into linear factors, and the domain property forces $f=c$ for some $c\in k$. Thus every global regular function is constant. [step 2.1, algebra] ∎
