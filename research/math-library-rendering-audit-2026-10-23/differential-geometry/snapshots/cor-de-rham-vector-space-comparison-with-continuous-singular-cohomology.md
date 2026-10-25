---
id: "cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology"
kind: "corollary"
title: "De Rham vector-space comparison with continuous singular cohomology"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-de-rham-theorem-for-smooth-singular-cohomology","thm-smooth-and-continuous-real-singular-cohomology-agree","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For a finite-dimensional Hausdorff second-countable smooth manifold $M$, possibly with boundary, let $r_M:H^k_{\mathrm{sing}}(M;\mathbb R)\to H^k_\infty(M;\mathbb R)$ be restriction to smooth simplices. The map $$J_M=r_M^{-1}I_M:H^k_{\mathrm{dR}}(M)\longrightarrow H^k_{\mathrm{sing}}(M;\mathbb R)$$ is a linear isomorphism in every integer degree, natural for smooth maps. Here $I_M$ is integration on smooth singular simplices. No integration over an arbitrary continuous simplex is asserted.

## Facts & Assumptions

[F1] [[thm-de-rham-theorem-for-smooth-singular-cohomology]] gives the natural linear isomorphism $I_M$ under countable choice, including boundary manifolds.

[F2] [[thm-smooth-and-continuous-real-singular-cohomology-agree]] gives the natural linear isomorphism $r_M$, in the displayed direction, under the same assumption.

[F3] [[def-countable-choice]] is the choice principle assumed here.

## Proof

**Given:** $M$ as stated, an integer $k$, and $\mathrm{AC}_\omega$.

1.1 By [F1] and [F2], each class $a\in H^k_{\mathrm{dR}}(M)$ has a unique class $b\in H^k_{\mathrm{sing}}(M;\mathbb R)$ with $r_Mb=I_Ma$. Define $J_Ma=b$. Uniqueness defines this function without choosing representatives or selecting preimages from non-singleton fibres. Since $r_M$ and $I_M$ are linear, applying $r_M$ to $J_M(sa+tc)$ and to $sJ_Ma+tJ_Mc$ gives the same class; injectivity of $r_M$ proves linearity. The inverse is $I_M^{-1}r_M$, as both composites reduce to identity. [F1, F2, F3, given]

2.1 For a smooth map $f:M\to N$, write $f^*_{\mathrm{sing}},f^*_\infty,f^*_{\mathrm{dR}}$ for the three pullbacks. The two naturality equalities give $$r_M f^*_{\mathrm{sing}}J_N=f^*_\infty r_NJ_N=f^*_\infty I_N=I_Mf^*_{\mathrm{dR}}=r_MJ_Mf^*_{\mathrm{dR}}.$$ Cancel the injective $r_M$ to obtain $f^*_{\mathrm{sing}}J_N=J_Mf^*_{\mathrm{dR}}$. This proves the contravariant naturality claimed, also for maps whose image lies in a target boundary. [F1, F2, step 1.1]

3.1 Empty manifolds and negative degrees give the unique maps between zero spaces. Degree zero, degree one, dimension zero and top degree are already included in both isomorphisms, so their composite and the cancellation proof apply without new endpoint assumptions. Smooth and continuous complexes retain degenerate simplices; the construction uses their actual restriction map. Countable choice is inherited exactly from the two suppliers' partition, countable-product and globalization arguments. Inverting their bijections requires no further choice, and no full AC is used. [F1, F2, F3, step 1.1, step 2.1] ∎
