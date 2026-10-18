---
id: def-formal-distribution-on-a-vector-space
kind: definition
title: Formal distributions and fields on a vector space
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-formal-laurent-series-and-residue]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§1.3–1.4
      url: https://arxiv.org/pdf/0809.1380
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§2.1–2.3
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Definition

Let $V$ be a complex vector space. A **formal distribution** in variables $z,w$ with coefficients in a complex vector space $E$ is an arbitrary coefficient family
$$F(z,w)=\sum_{p,q\in\mathbb Z}F_{p,q}z^pw^q,\qquad F_{p,q}\in E.$$
No convergence or summability is assumed. Multiplication by a polynomial in $z,w$ is defined coefficientwise; each resulting coefficient is a finite sum. The residue $\operatorname{Res}_z F$ is the coefficient of $z^{-1}$, retaining the other variables and coefficients. For a one-variable series $f(z)=\sum_{m\in\mathbb Z}f_mz^m$, write $\operatorname{Res}_z f=f_{-1}$, in the same support convention as [[def-formal-laurent-series-and-residue]].

The **formal delta distribution** is
$$\delta(z,w)=\sum_{n\in\mathbb Z}z^{-n-1}w^n.$$
For each integer $r$, the two binomial expansions of $(z-w)^r$ are
$$\iota_{z,w}(z-w)^r=\sum_{j\ge0}\binom rj(-1)^jz^{r-j}w^j,\qquad \iota_{w,z}(z-w)^r=\sum_{j\ge0}\binom rjz^j(-w)^{r-j},$$
where $\binom rj=r(r-1)\cdots(r-j+1)/j!$ and $\binom r0=1$. The first expansion is in nonnegative powers of $w$ and the second is in nonnegative powers of $z$; they are distinct when $r<0$.

A formal distribution $A(z)=\sum_{n\in\mathbb Z}A_nz^{-n-1}$ with $A_n\in\operatorname{End}_{\mathbb C}(V)$ is a **field on $V$** if for every $v\in V$ there is an integer $N(v,A)$ such that $A_nv=0$ for all $n\ge N(v,A)$. Equivalently, $A(z)v\in V((z))$: its powers of $z$ are bounded below, as in [[def-formal-laurent-series-and-residue]], with coefficients in $V$. Define its modes by $A_{(n)}=A_n=\operatorname{Res}_z z^nA(z)$.

Two fields $A(z),B(w)$ are **mutually local** if some integer $N\ge0$ satisfies $(z-w)^N[A(z),B(w)]=0$ as a formal distribution, where $[A(z),B(w)]=A(z)B(w)-B(w)A(z)$. For any integer $n$, their **$n$th product field** is
$$A(z)_{(n)}B(z)=\operatorname{Res}_x\Bigl(\iota_{x,z}(x-z)^nA(x)B(z)-\iota_{z,x}(x-z)^nB(z)A(x)\Bigr).$$
These conventions use ordinary, ungraded vector spaces and ordinary commutators; no super sign is implicit.

## Remarks

- A formal distribution may have infinitely many positive and negative powers. A field has the additional vectorwise lower-truncation condition; the two notions are not interchangeable.
- The symbols $\iota_{z,w}$ and $\iota_{w,z}$ specify formal expansions only. They do not refer to analytic regions or convergence.
