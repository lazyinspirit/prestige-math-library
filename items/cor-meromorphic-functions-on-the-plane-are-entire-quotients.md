---
id: cor-meromorphic-functions-on-the-plane-are-entire-quotients
kind: corollary
title: "Every meromorphic function on $\\mathbb{C}$ is a quotient of entire functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-weierstrass-product-theorem-on-the-complex-plane, thm-removable-singularity-characterizations, def-meromorphic-function-complex-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 The Weierstrass product theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Every meromorphic function on $\mathbb C$ is a quotient of entire functions.

## Facts & Assumptions

**Given:** A meromorphic function $f$ on $\mathbb C$.

[F1] A meromorphic function on a plane domain is holomorphic off a discrete pole
set, and each pole is an isolated pole in the usual sense
([[def-meromorphic-function-complex-domain]]).

[F2] The Weierstrass product theorem constructs an entire function with any
prescribed discrete zero divisor on $\mathbb C$
([[thm-weierstrass-product-theorem-on-the-complex-plane]]).

[F3] A bounded punctured-neighbourhood singularity is removable
([[thm-removable-singularity-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 Let $(p_n)$ be the poles of $f$, listed with multiplicity equal to the order of the pole. By [F2], there is an entire function $q$ whose zeros are exactly the points $p_n$ with those multiplicities and with no other zeros. [F1, F2, given, construct]

2.1 On $\mathbb C\setminus\{p_n\}$ define $g=fq$. Near a pole $p_n$ of order $m$, the zero of $q$ has the same order $m$, so the product $g$ is locally bounded on the punctured neighbourhood of $p_n$. By [F3], each such singularity is removable, hence $g$ extends to an entire function on $\mathbb C$. [F1, F3, step 1.1, algebra]

3.1 Away from the poles, $f=g/q$ by construction, and both sides are meromorphic with the same removed singularities at the poles. Therefore $f$ is the quotient of the two entire functions $g$ and $q$. [step 1.1, step 2.1, algebra] ∎
