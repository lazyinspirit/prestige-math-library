---
id: ex-standard-two-dimensional-sl2-module-and-enveloping-algebra
kind: example
title: The standard two-dimensional $\mathfrak{sl}_2$ module extends to the enveloping algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-lie-algebra-over-a-field
  - def-representation-of-a-lie-algebra
  - thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, §§1.13–1.14, printed pp. 20–21"
      url: "https://arxiv.org/pdf/0901.0827"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras, §§4.1 and 5.1, printed pp. 49–50 and 71–72"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
---

## Example

Let $V=\mathbb C^2$ and let $\mathfrak{sl}_2(\mathbb C)$ be the Lie algebra of
traceless $2\times2$ complex matrices with commutator bracket. The standard
action is matrix multiplication. In the usual basis, put
$$E=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad F=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** $V=\mathbb C^2$, the subspace $\mathfrak{sl}_2(\mathbb C)$ of
$\operatorname{End}_{\mathbb C}(V)$ consisting of trace-zero matrices, and
the commutator bracket $[A,B]=AB-BA$.

[F1] [[def-lie-algebra-over-a-field]]: a Lie algebra is a vector space with a bilinear alternating bracket satisfying the Jacobi identity.

[F2] [[def-representation-of-a-lie-algebra]]: $\operatorname{End}_k(V)$ with commutator is a Lie algebra, and a representation is a Lie-algebra homomorphism into it.

[F3] [[thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra]]: restriction along $\mathfrak g\to U(\mathfrak g)$ and extension by the enveloping-algebra universal property give mutually inverse correspondences between Lie representations and scalar-compatible unital left $U(\mathfrak g)$-modules.

## Verification

1.1 The matrices $E,F,H$ are linearly independent and every trace-zero matrix is $aH+bE+cF$ for unique $a,b,c\in\mathbb C$. Direct multiplication gives $[H,E]=2E$, $[H,F]=-2F$, and $[E,F]=H$. By bilinearity the span is closed under commutators, and it inherits alternation and Jacobi from $\operatorname{End}_{\mathbb C}(V)$; hence it is the stated Lie algebra. [given, F1, F2, algebra]

2.1 The inclusion $\rho:\mathfrak{sl}_2(\mathbb C)\hookrightarrow\operatorname{End}_{\mathbb C}(V)$ is linear and preserves the bracket because both brackets are the same matrix commutator. Thus $V$ is a Lie-algebra representation. [given, F2, step 1.1]

3.1 By [F3], this representation extends uniquely to a scalar-compatible unital left $U(\mathfrak{sl}_2(\mathbb C))$-module on $V$. This uses neither PBW nor injectivity of the canonical map into the enveloping algebra. [given, F3, step 2.1] ∎
