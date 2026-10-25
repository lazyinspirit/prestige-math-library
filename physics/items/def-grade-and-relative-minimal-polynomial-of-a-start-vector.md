---
id: def-grade-and-relative-minimal-polynomial-of-a-start-vector
kind: definition
title: "The grade of a start vector and its relative minimal polynomial"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-krylov-subspace-of-a-matrix-and-start-vector]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Definition

Let $A$ be a square matrix over $\mathbb R$ or $\mathbb C$, and let $b$ be a
vector of matching size. The **relative minimal polynomial of $b$ with respect
to $A$** is the unique monic polynomial over the same field
$q_{A,b}$ of least degree such that

$$q_{A,b}(A)b=0.$$

Its degree

$$\nu(A,b):=\deg q_{A,b}$$

is the **grade** of $b$ relative to $A$.

If $b=0$, then $q_{A,b}=1$ and $\nu(A,b)=0$.

This polynomial is well defined. If $A$ is $n\times n$, then the $n+1$
vectors $b,Ab,\dots,A^n b$ are linearly dependent, so some nonzero polynomial
annihilates $b$; dividing a least-degree annihilator by its leading coefficient
makes it monic. If two monic least-degree annihilators existed, their
difference would be an annihilator of strictly smaller degree, so they would be
equal.
