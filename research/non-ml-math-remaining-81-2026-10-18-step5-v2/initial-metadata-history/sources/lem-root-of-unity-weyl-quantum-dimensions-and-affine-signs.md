---
id: lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs
kind: lemma
title: Weyl quantum dimensions and affine Weyl signs
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-root-of-unity-weyl-and-dual-weyl-module-families, lem-root-of-unity-integral-weyl-specialization, thm-weyl-character-formula, thm-root-of-unity-lusztig-module-category-is-braided-rigid, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Section 4, Lemma 9(a), PDF pages 19–20; the proof here uses the selected simply-laced lattice and trace normalization explicitly.
---

## Statement

Use [[def-root-of-unity-weyl-and-dual-weyl-module-families]], normalize every root to have squared length two, and use the pivot $g=K_{-2\rho^\vee}$ from [[thm-root-of-unity-lusztig-module-category-is-braided-rigid]]. With the inherited Axiom of Choice,
$$
\operatorname{qdim}\Delta_\zeta(\lambda)=\prod_{\alpha>0}\frac{[\langle\lambda+\rho,\alpha^\vee\rangle]_\zeta}{[\langle\rho,\alpha^\vee\rangle]_\zeta}.
$$
Every denominator is nonzero. Extend the displayed product to all integral $\lambda$. It is alternating under the dot action of $W$ and periodic under translation by $\ell Q$, hence satisfies $d(w\mathbin{\cdot}\lambda)=\det(w)d(\lambda)$ for the affine Weyl group $W_\ell=W\ltimes\ell Q$. Its zero set is exactly the affine singular weights. In particular all weights in the open bottom alcove have nonzero Weyl quantum dimension. Every Weyl-filtered module all of whose section labels are affine singular has quantum dimension zero. No assertion about arbitrary outside-alcove indecomposable tiltings is inferred without a proof about their actual section labels or their tensor-ideal generation.

## Facts & Assumptions

**Given:** The simply-laced root system, full weight lattice, coroot lattice, root parameter and pivot above.

[F1] Root Weyl characters equal classical finite Weyl characters ([[lem-root-of-unity-integral-weyl-specialization]]), which satisfy $A(\rho)\chi_\lambda=A(\lambda+\rho)$ with the Weyl denominator product ([[thm-weyl-character-formula]]).

[F2] The categorical dimension equals $\operatorname{Tr}(g)$, and $g$ acts on weight $\mu$ by $\zeta^{-(2\rho,\mu)}$ ([[thm-root-of-unity-lusztig-module-category-is-braided-rigid]]).

[F3] The inherited Axiom of Choice is as in [[def-root-of-unity-weyl-and-dual-weyl-module-families]] and [[def-axiom-of-choice]].

## Proof

**Given:** These data. Write $q$ for an indeterminate until specialization.

1.1 Evaluate the finite character identity in [F1] at $e^\mu=q^{(2\rho,\mu)}$. Symmetry of the invariant form and changing $w$ to $w^{-1}$ show that its alternating numerator equals $\sum_w\det(w)q^{(2w\rho,\lambda+\rho)}$. Evaluate the Weyl denominator identity instead at $e^\mu=q^{2(\mu,\lambda+\rho)}$; this gives the numerator product $\prod_{\alpha>0}(q^{(\lambda+\rho,\alpha)}-q^{-(\lambda+\rho,\alpha)})$, since $\sum_{\alpha>0}\alpha=2\rho$. The denominator is the same product with $\lambda=0$. Thus the character specialization is the quotient of these two products as a rational function, or equivalently their cross-multiplied Laurent-polynomial identity. Replacing $q$ by $q^{-1}$ changes neither the quotient nor the quantum-integer factors, so it is also the character evaluated at $e^\mu=q^{-(2\rho,\mu)}$. [F1, algebra]

2.1 Every positive-root height $\langle\rho,\alpha^\vee\rangle$ lies between one and $h-1$, strictly below $\ell$. Since $\operatorname{ord}(\zeta^2)=\ell$, a quantum integer $[n]_\zeta$ vanishes exactly when $\ell$ divides $n$; also $\zeta-\zeta^{-1}\ne0$. The denominator in step 1.1 is therefore nonzero after specializing, so ordinary scalar division is now justified. By [F2] its value is the quantum dimension, proving the formula with no singular evaluation of a formal quotient. [F1, F2, step 1.1, algebra]

3.1 A finite simple reflection permutes positive roots except for reversing its own simple root; invariance of the form shows that the numerator product changes sign under the dot action of that reflection. These reflections generate $W$, yielding finite Weyl alternation. A translation $\lambda\mapsto\lambda+\ell\beta$ with $\beta\in Q$ multiplies each numerator factor by $\zeta^{\ell(\beta,\alpha)}$, because $\zeta^\ell$ is one or minus one. The full multiplier is $\zeta^{\ell(\beta,2\rho)}=1$: write $\beta=\sum n_i\alpha_i$ and use $(\alpha_i,\rho)=1$ to get $(\beta,2\rho)=2\sum n_i$. Therefore the product is $\ell Q$-periodic. Together these give the affine sign relation. A numerator factor vanishes exactly when $\langle\lambda+\rho,\alpha^\vee\rangle\in\ell\mathbb Z$, namely an affine reflection wall. In the open bottom alcove every such integer lies strictly between zero and $\ell$, so none vanishes. [F1, step 2.1, algebra]

4.1 Trace is additive over an invariant-subspace exact sequence: choose a weight-adapted basis and use the block triangular action of $g$. Hence quantum dimension adds along any Weyl filtration. If every section label is affine singular, step 3.1 makes each of its quantum dimensions zero, so their sum is zero. These conclusions are all that has been asserted about tilting dimensions here; cancellation for nonsingular labels outside the alcove requires a separate argument. [F2, F3, step 3.1, algebra] ∎
