---
id: thm-second-bianchi-identity-for-a-bundle-connection
kind: theorem
title: Second Bianchi identity for a bundle connection
status: draft
origin: pipeline
deps: ["thm-curvature-two-form-structure-equation", "def-product-connection-on-tensor-and-hom-bundles", "prop-induced-connection-on-exterior-powers-is-a-degree-zero-derivation", "thm-the-exterior-derivative-is-a-graded-derivation", "thm-the-exterior-derivative-squares-to-zero"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Theorem 36.21
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 6, Proposition 6.1.5, printed pages 39–40
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $\nabla^{\operatorname{End}}$ be the connection induced on
$\operatorname{End}(E)$. For an $\operatorname{End}(E)$-valued $k$-form $A$,
define its covariant exterior derivative by alternating covariant
differentiation:

$$(d^\nabla A)(X_0,\ldots,X_k)=\sum_a(-1)^a\nabla^{\operatorname{End}}_{X_a}\bigl(A(X_0,\ldots,\widehat X_a,\ldots,X_k)\bigr)+\sum_{a<b}(-1)^{a+b}A([X_a,X_b],X_0,\ldots,\widehat X_a,\ldots,\widehat X_b,\ldots,X_k).$$

If $\Omega$ is the curvature two-form, then

$$d^\nabla\Omega=0.$$

## Facts & Assumptions

[F1] In a local frame the curvature matrix obeys $\Omega=d\omega+\omega\wedge\omega$, with matrix factors in the displayed order. [[thm-curvature-two-form-structure-equation]].

[F2] The induced Hom connection satisfies $(\nabla_XA)(s)=\nabla_X(A(s))-A(\nabla_Xs)$. [[def-product-connection-on-tensor-and-hom-bundles]].

[F3] Induced covariant differentiation preserves exterior powers and is a degree-zero derivation. [[prop-induced-connection-on-exterior-powers-is-a-degree-zero-derivation]].

[F4] The ordinary exterior derivative is a degree-one graded derivation. [[thm-the-exterior-derivative-is-a-graded-derivation]].

[F5] The ordinary exterior derivative satisfies $d^2=0$. [[thm-the-exterior-derivative-squares-to-zero]].

## Proof

**Given:** A local frame $e$ with connection matrix $\omega$ and curvature matrix $\Omega$.

1.1 From [F2], the local matrix of the End$(E)$ connection is the commutator action $\nabla^{\operatorname{End}}_XA=X(A)+\omega(X)A-A\omega(X)$. Alternating this formula as in the definition of $d^\nabla$, with [F3] ensuring the alternating degrees are preserved, gives for an End$(E)$-valued $k$-form $A$ the local identity $d^\nabla A=dA+\omega\wedge A-(-1)^kA\wedge\omega$. In particular, $d^\nabla\Omega=d\Omega+\omega\wedge\Omega-\Omega\wedge\omega$. [F2, F3, algebra]

2.1 Substitute [F1] into step 1.1 and apply the graded Leibniz rule: $d^\nabla\Omega=d^2\omega+d\omega\wedge\omega-\omega\wedge d\omega+\omega\wedge d\omega+\omega\wedge\omega\wedge\omega-d\omega\wedge\omega-\omega\wedge\omega\wedge\omega=0$ by [F5] and associativity of matrix/wedge multiplication. Since this holds in every local frame, it is the intrinsic identity $d^\nabla\Omega=0$. [F1, F4, F5, step 1.1, algebra] ∎
