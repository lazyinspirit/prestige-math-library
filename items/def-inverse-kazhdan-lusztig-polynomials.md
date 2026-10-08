---
id: def-inverse-kazhdan-lusztig-polynomials
kind: definition
title: Inverse Kazhdan–Lusztig polynomials
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 6
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters, revised version arXiv:math/0208154v2 — §10.1–10.2: chain formula and inverse matrices; §10.7: the dual-basis interpretation."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§10.1–10.2, printed pp. 46–47, and §10.7, printed p. 48; the complete chain definition, matrix argument and dual-basis calculation were read."
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 (18 pp.) — §2.2: the classical Kazhdan–Lusztig polynomial and μ-coefficient conventions used with the sign normalization."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§2.2, Definition 2.3 and the μ-coefficient paragraph, printed pp. 4–5; the complete relevant passage was read."
verification:
  precheck: n/a
---

## Definition

For $x,w\in S_n$ set $$q'_{x,w}:=\sum_{m\ge0}(-1)^m\sum_{x=z_0<z_1<\cdots<z_m=w}p_{z_0,z_1}p_{z_1,z_2}\cdots p_{z_{m-1},z_m}\in A,$$ where the inner sum is over strictly increasing Bruhat chains from $x$ to $w$, the $m=0$ chain occurs only when $x=w$, and $p_{u,v}$ are the coefficients of the Kazhdan–Lusztig basis ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]). Every chain lies in a finite Bruhat interval by [[lem-bruhat-order-basic-properties-for-permutations]], so the sum is finite. If $x\not\le w$ there are no chains; if $x=w$, the empty chain gives $q'_{w,w}=1$. If $x<w$, each chain has at least one factor $p_{u,v}\in v\mathbb Z[v]$ with $u<v$, so $q'_{x,w}\in v\mathbb Z[v]$.

Let $P=(p_{x,w})$ and $Q'=(q'_{x,w})$. The matrix $N:=P-I$ is strictly triangular on the finite Bruhat poset, hence nilpotent; the $(x,w)$ entry of $N^m$ is the sum of products over chains of $m$ strict steps. Therefore $$Q'=I-N+N^2-\cdots+(-1)^M N^M=(I+N)^{-1}=P^{-1},$$ where $M$ can be any integer at least the maximum strict-chain length. In particular, $Q'P=PQ'=I$ and $$\sum_zq'_{x,z}p_{z,w}=\delta_{x,w}=\sum_zp_{x,z}q'_{z,w}.$$

The **inverse Kazhdan–Lusztig polynomials** in the classical sign convention are $q_{x,w}:=\mathrm{sgn}(x)\mathrm{sgn}(w)q'_{x,w}$. If $\Sigma$ is the diagonal matrix with entries $\Sigma_{x,x}=\mathrm{sgn}(x)$, then $Q=(q_{x,w})=\Sigma Q'\Sigma$. Equivalently, if $D_x$ is the basis of $H^*=\mathrm{Hom}_A(H,A)$ dual to the Kazhdan–Lusztig basis, then $$q'_{x,w}=D_x(H_w),$$ since $H_w=\sum_zq'_{z,w}\underline H_z$.

## Remarks

The finite chain inverse and dual-basis description use the locally proved unitriangular basis and coefficient clauses of [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]. Coefficientwise positivity is not required.