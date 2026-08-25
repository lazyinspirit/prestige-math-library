---
id: thm-alon-furedi-hyperplane-cover-of-the-cube
kind: theorem
title: "Covering $\\{0,1\\}^{n}$ minus the origin by affine hyperplanes avoiding the origin needs at least $n$ of them"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-combinatorial-nullstellensatz, def-monomials-multidegree-and-total-degree, def-standard-bilinear-form-on-a-coordinate-space, def-polynomial-evaluation-and-root, def-field, def-vector-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Theorem 6.3"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 16"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Statement

For $1\le k\le m$, let $a_k\in\mathbb R^n$ be nonzero, let $b_k\in\mathbb R$
be nonzero, and put

$$H_k:=\{x\in\mathbb R^n:\langle a_k,x\rangle=b_k\}.$$

If every nonzero vertex of the cube $\{0,1\}^n$ lies on at least one $H_k$, then
$m\ge n$.

## Facts & Assumptions

**Given:** nonzero vectors $a_k\in\mathbb R^n$ and nonzero scalars $b_k$, with the hyperplanes $H_k=\{x:\langle a_k,x\rangle=b_k\}$ covering every nonzero cube vertex.

[L1] Over a field, if $\deg f=\sum_it_i$, the coefficient of $x_1^{t_1}\cdots x_n^{t_n}$ is nonzero, and $|S_i|>t_i$ for every $i$, then $f$ is nonzero at some point of $S_1\times\cdots\times S_n$ ([[thm-combinatorial-nullstellensatz]]).

[F1] The standard bilinear form is $\langle a,x\rangle=\sum_{i<n}a_ix_i$ ([[def-standard-bilinear-form-on-a-coordinate-space]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $m<n$, and define $$f(x):=(-1)^{n+m}b_1\cdots b_m\prod_{i<n}(x_i-1)-\prod_{k=1}^{m}(\langle a_k,x\rangle-b_k).$$ [assume-contra, F1, construct]

2.1 The polynomial $f$ vanishes on every vertex of $\{0,1\}^n$. At the origin, the two terms are equal by construction, so they cancel. At any nonzero cube vertex, the first product vanishes because some coordinate equals $1$, and the second vanishes because that vertex lies on one of the hyperplanes. [step 1.1, given]

2.2 The total degree of $f$ is $n$, and the coefficient of $\prod_{i<n}x_i$ is $\pm b_1\cdots b_m\ne0$: the first product contributes that coefficient, while the second product has degree $m<n$ and contributes nothing to that top monomial. [F1, step 1.1]

3.1 Apply [L1] to the $n$ coordinates indexed by $i<n$, taking $t_i=1$ and $S_i=\{0,1\}$ for every $i<n$. Step 2.1 says that $f$ vanishes on the whole grid $\{0,1\}^n$, but step 2.2 says its top coefficient is nonzero and the degree hypothesis is exactly the required one. This contradiction proves $m\ge n$. [L1, step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

- The constant in the first term is chosen only to force cancellation at the origin. That check is the one place where a sign error can hide.
