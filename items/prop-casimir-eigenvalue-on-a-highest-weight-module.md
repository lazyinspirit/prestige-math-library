---
id: prop-casimir-eigenvalue-on-a-highest-weight-module
kind: proposition
title: "The quadratic Casimir eigenvalue on a highest-weight module is $(\\lambda,\\lambda+2\\rho)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-quadratic-casimir-element-is-central, lem-central-action-on-a-cyclic-highest-weight-module-is-scalar, def-weyl-vector-rho-for-a-chosen-positive-system, def-highest-weight-vector-and-cyclic-highest-weight-module, thm-root-space-decomposition-relative-to-a-cartan-subalgebra, prop-killing-form-pairs-only-opposite-root-spaces, def-killing-dual-vector-attached-to-a-root, prop-opposite-root-spaces-bracket-to-the-killing-dual-line, thm-the-root-set-is-a-reduced-crystallographic-root-system]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a cyclic highest-weight module of highest weight $\lambda$. Then the quadratic Casimir element acts on $M$ by the scalar

$$ (\lambda,\lambda+2\rho), $$

where the pairing on $\mathfrak h^*$ is induced by the Killing form and $\rho$ is the Weyl vector from [[def-weyl-vector-rho-for-a-chosen-positive-system]].

## Facts & Assumptions

**Given:** A cyclic highest-weight module $M=U(\mathfrak g)v$ of highest weight $\lambda$ and the quadratic Casimir element $C$.

## Proof

**Proof technique:** direct.

1.1 By [[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]] and [[prop-the-quadratic-casimir-element-is-central]], it is enough to compute $Cv$ on the highest vector $v$. The root-system theorem [[thm-the-root-set-is-a-reduced-crystallographic-root-system]] makes every root space one-dimensional, while nondegeneracy and root-space orthogonality make $\mathfrak g_\alpha$ and $\mathfrak g_{-\alpha}$ dual. Choose a basis of $\mathfrak h$ and root vectors $e_\alpha\in \mathfrak g_\alpha$, $f_\alpha\in \mathfrak g_{-\alpha}$ with $B(e_\alpha,f_\alpha)=1$; these are full dual bases, so the Casimir decomposes as $C=\sum_j h_jh^j + \sum_{\alpha>0}(e_\alpha f_\alpha + f_\alpha e_\alpha)$. [given, construct]

2.1 Since $e_\alpha v=0$ for every positive root, one has $f_\alpha e_\alpha v=0$ and $e_\alpha f_\alpha v=[e_\alpha,f_\alpha]v$. By [[prop-opposite-root-spaces-bracket-to-the-killing-dual-line]], that bracket is $H_\alpha$, so step 1.1 gives $Cv=(\sum_j h_jh^j + \sum_{\alpha>0} H_\alpha)v$. [step 1.1, algebra]

3.1 The Cartan part acts on $v$ by $(\lambda,\lambda)$, and the root contribution acts by $\sum_{\alpha>0}\lambda(H_\alpha)=2(\lambda,\rho)$. Therefore $Cv=(\lambda,\lambda+2\rho)v$, so the Casimir scalar on $M$ is $(\lambda,\lambda+2\rho)$. [step 2.1, algebra] ∎
