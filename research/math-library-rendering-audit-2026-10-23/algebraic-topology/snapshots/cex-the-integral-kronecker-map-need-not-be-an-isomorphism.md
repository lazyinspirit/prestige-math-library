---
id: cex-the-integral-kronecker-map-need-not-be-an-isomorphism
kind: counterexample
title: The integral Kronecker map need not be an isomorphism
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, def-axiom-of-choice, lem-real-projective-space-cellular-homology-and-pinch-map, lem-singular-uct-extension-from-cycle-projections, def-ext-via-a-projective-resolution-of-the-first-variable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, universal coefficients and real projective space
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement refuted

For every space $X$ and every $n\ge0$, integral Kronecker evaluation $H^n(X;\mathbb Z)\to\operatorname{Hom}(H_n(X;\mathbb Z),\mathbb Z)$ is an isomorphism.

## Facts & Assumptions

[F1] [[lem-real-projective-space-cellular-homology-and-pinch-map]] gives $H_1(\mathbb{RP}^2;\mathbb Z)=\mathbb Z/2$ and $H_2(\mathbb{RP}^2;\mathbb Z)=0$.

[F2] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives an injective Ext map with image the kernel of evaluation. Assume [[def-axiom-of-choice]].

[F3] [[def-ext-via-a-projective-resolution-of-the-first-variable]] computes Ext as Hom cohomology; [[lem-singular-uct-extension-from-cycle-projections]] identifies the resulting length-one presentation cokernels canonically and gives the injection $[\psi]\mapsto[\psi d]$.

## Counterexample

**Given:** $X=\mathbb{RP}^2$, $n=2$, coefficients $\mathbb Z$, and AC.

1.1 By [F1], the right term of [F2] is $\operatorname{Hom}(0,\mathbb Z)=0$ and its left term is $\operatorname{Ext}^1(\mathbb Z/2,\mathbb Z)$. The latter is computed from the exact free resolution $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$. Hom into $\mathbb Z$ gives multiplication by two from degree zero to degree one, with zero next differential. Thus its first cohomology is $\mathbb Z/2$. The homomorphism $\psi:\mathbb Z\to\mathbb Z$, $\psi(1)=1$, represents its nonzero class: it cannot be a boundary, since precomposition by multiplication by two always has even value at $1$. [F1, F2, F3, given]

2.1 Transport that presentation class by the canonical comparison of [F3] to an element $e$ of the Ext term in [F2], and put $\alpha=\iota e$. Injectivity of $\iota$ gives $\alpha\ne0$. Exactness gives $\beta\alpha=0$, and since the entire right term is zero, $\iota$ is also onto. Consequently $H^2(X;\mathbb Z)\cong\mathbb Z/2$ and evaluation is the zero map from this nonzero group. This explicit nonzero presentation class and its injective image witness failure of injectivity, and hence of being an isomorphism. [F2, F3, step 1.1]

3.1 Equivalently every integral singular two-cycle is a boundary because $H_2=0$. Any degree-two cocycle vanishes on each such cycle by its cocycle equation, including a representative of $\alpha$. Therefore all pairings with $\alpha$ vanish even though its cohomology class is nonzero. Also $2\alpha=0$, while the generator value one in the presentation is nonzero modulo two. The space is nonempty and finite dimensional; failure is neither a negative-degree convention nor an infinite-rank phenomenon. AC is inherited from [F2] and its comparison supplier, not from the explicit two-term integer calculation. [F1, F2, F3, step 1.1, step 2.1] ∎
