---
id: ex-all-complex-vector-bundles-over-the-circle-are-trivial
kind: example
title: All complex vector bundles over the circle are trivial
status: published
origin: pipeline
deps: [thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 1.11 discussion"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complex clutching over the circle, printed pp.23–24"
---

## Example

Every finite-rank complex vector bundle over $S^1$ is trivial, including the
rank-zero bundle. This contrasts with the nontrivial Möbius real line bundle.

## Facts & Assumptions

**Given:** a rank-$n$ complex vector bundle $E\to S^1$, where $n\geq0$.

[F1] Clutching over $S^1$ represents $E$ by a map $g:S^0\to\operatorname{GL}_n(\mathbb C)$, and homotopic clutching maps give isomorphic bundles ([[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]]).

## Verification

**Proof technique:** direct.

1.1 Suppose first that $n>0$. Every $A\in\operatorname{GL}_n(\mathbb C)$ has polar form $A=UP$ with $U$ unitary and $P$ positive definite. The path $U((1-t)P+tI)$ joins $A$ to $U$ through invertible matrices. By the finite-dimensional spectral theorem, $U=W\operatorname{diag}(e^{i\theta_1},\ldots,e^{i\theta_n})W^*$ for real angles $\theta_j$, and $W\operatorname{diag}(e^{i(1-t)\theta_1},\ldots,e^{i(1-t)\theta_n})W^*$ joins $U$ to $I$. Hence $\operatorname{GL}_n(\mathbb C)$ is path connected. [construct, algebra]

2.1 The two values of $g$ can therefore be joined independently to $I$, producing a homotopy $S^0\times I\to\operatorname{GL}_n(\mathbb C)$ from $g$ to the constant identity map. By [F1], $E$ is isomorphic to the identity-clutched bundle, which is $S^1\times\mathbb C^n$. [F1, step 1.1]

3.1 If $n=0$, then $\operatorname{GL}_0(\mathbb C)$ is a point and the same conclusion is forced. The real argument fails at step 1.1 because $\operatorname{GL}_1(\mathbb R)=\mathbb R^\times$ has two components; the clutching values in different components give the Möbius line. No choice principle is used. [F1, step 2.1] ∎
