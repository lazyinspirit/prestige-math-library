---
id: cex-yangian-one-root-bethe-equation-does-not-guarantee-completeness
kind: counterexample
title: "A one-root Bethe equation need not produce a complete set of vectors"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [prop-yangian-gl-n-rtt-hopf-structure, lem-yangian-gl2-one-root-bethe-cancellation]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§4, equations (88)–(97): the Bethe-vector eigenvalue formula and Bethe equations."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§5.3, equations (5.31)–(5.34): periodic transfer matrices and their commutativity."
---

## Facts & Assumptions

**Given:** The Hopf counit representation, its direct sum on a two-dimensional space, and the one-root Bethe-vector notation from [[lem-yangian-gl2-one-root-bethe-cancellation]].

[F1] [[prop-yangian-gl-n-rtt-hopf-structure]]: $\epsilon(t_{ij}(u))=\delta_{ij}$ defines the counit representation.

[F2] [[lem-yangian-gl2-one-root-bethe-cancellation]]: the cancellation statement uses a common regular spectral domain realizing the RTT identities; its one-root condition is $a(v)=d(v)$, and it assumes the associated Bethe vector is nonzero to conclude it is an eigenvector.

## Counterexample

1.1 Let $\mathcal H=\mathbb C e_0\oplus\mathbb C e_1$ be the direct sum of two counit representations and set $\Omega=e_0$. Applying the counit on each summand gives $t_{ij}(u)=\delta_{ij}I_{\mathcal H}$, hence $A=D=I$ and $B=C=0$. These constant operator families are regular on the common spectral domain $\mathcal D=\mathbb C$ and satisfy the pointwise RTT identities. Thus the pseudovacuum conditions hold there with $a(u)=d(u)=1$, and the one-root equation in [F2] holds for every $v\in\mathcal D$. [given, F1, F2, algebra]

2.1 For every $k\ge1$ and parameters $v_1,\ldots,v_k$, the rightmost $B(v_k)$ sends $\Omega$ to zero, so $B(v_1)\cdots B(v_k)\Omega=0$. The empty product is $e_0$. Hence all Bethe vectors from this pseudovacuum span $\mathbb C e_0$, a proper subspace because $e_1$ is linearly independent from $e_0$. Thus the one-root equation by itself does not guarantee completeness. [given, F1, step 1.1, algebra] ∎
