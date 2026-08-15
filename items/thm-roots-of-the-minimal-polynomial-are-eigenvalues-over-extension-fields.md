---
id: thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields
kind: theorem
title: "Over every extension field, a scalar is an eigenvalue of the extended matrix exactly when it is a root of the minimal polynomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-minimal-polynomial-divides-characteristic-polynomial, lem-minimal-polynomial-is-invariant-under-field-extension, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, def-polynomial-evaluation-at-an-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Theorem 4.7'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
    - title: 'Keith Conrad, Potential Diagonalizability, Theorem 4(1)'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/potdiagonalizable.pdf'
pipeline_run: null
---

## Statement

Let $A\in M_n(F)$, let $K/F$ be a field extension, and let $\lambda\in K$. Then $\lambda$ is an eigenvalue of the matrix $A$ acting on $K^n$ if and only if

$$\mu_A(\lambda)=0,$$

where $\mu_A\in F[x]$ is the minimal polynomial over $F$. For $n=0$, both sets are empty.

## Facts & Assumptions

**Given:** A field extension $K/F$, a matrix $A\in M_n(F)$, and $\lambda\in K$.

[L1] Extending the scalar field does not change the minimal polynomial of $A$ ([[lem-minimal-polynomial-is-invariant-under-field-extension]]).

[L2] The minimal polynomial divides the characteristic polynomial ([[cor-minimal-polynomial-divides-characteristic-polynomial]]).

[L3] Over any field, a scalar is an eigenvalue exactly when it is a root of the characteristic polynomial ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

[L4] Polynomial evaluation is $p(A)=\sum a_kA^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $Av=\lambda v$ for some nonzero $v\in K^n$. Induction gives $A^kv=\lambda^kv$, so [L4] gives $p(A)v=p(\lambda)v$ for every $p\in K[x]$. Taking $p=\mu_A$ and using [L1] yields $0=\mu_A(A)v=\mu_A(\lambda)v$, hence $\mu_A(\lambda)=0$. [L1, L4, algebra]

1.2 Conversely, if $\mu_A(\lambda)=0$, then [L2] gives $\chi_A(\lambda)=0$. The determinant formula for $xI-A$ is unchanged after embedding $F$ in $K$, so [L3] applied over $K$ says $\lambda$ is an eigenvalue of $A$ on $K^n$. [L2, L3]

2.1 When $n=0$, $\mu_A=1$ by [L1], so it has no roots, while the zero space has no nonzero eigenvector. [L1] ∎
