---
id: def-regular-generalized-eigenvalue-pencil
kind: definition
title: "Regular matrix pencils and homogeneous generalized eigenvalues"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-determinant-of-a-square-matrix]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§12.8–12.9"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Definition

Let $n\ge1$, let $\mathbb F\in\{\mathbb R,\mathbb C\}$, and let
$A,B\in\mathbb F^{n\times n}$. The **matrix pencil** determined by $(A,B)$ is
$A-\lambda B$. Its determinant polynomial is
$f(\lambda)=\det(A-\lambda B)$, with real coefficients viewed as complex
coefficients when $\mathbb F=\mathbb R$. The pencil is **regular** if $f$ is
not the zero polynomial; otherwise it is **singular**.

For $\alpha,\beta\in\mathbb C$ not both zero, put
$$p(\alpha,\beta)=\det(\beta A-\alpha B).$$
A **homogeneous generalized eigenvalue pair** is an equivalence class of such
pairs satisfying $p(\alpha,\beta)=0$, where $(\alpha,\beta)$ and
$(c\alpha,c\beta)$ represent the same pair for every $c\in\mathbb C\setminus
\{0\}$. If $\beta\ne0$, the associated finite generalized eigenvalue is
$\lambda=\alpha/\beta$; if $\beta=0$, the pair is an infinite generalized
eigenvalue. The pair $(0,0)$ is never an eigenvalue pair.
Write $\sigma(A,B)$ for the set of finite ratios $\alpha/\beta$ among these
homogeneous eigenvalue pairs.

The QZ results on this page assume a regular pencil. They make no assertion
about Kronecker structure or eigenvalues of a singular pencil.
