---
id: prop-casimir-eigenvalue-on-a-highest-weight-module
kind: proposition
title: "The quadratic Casimir eigenvalue on a highest-weight module is $(\\lambda,\\lambda+2\\rho)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-quadratic-casimir-element-is-central, def-weyl-vector-rho-for-a-chosen-positive-system, def-highest-weight-vector-and-cyclic-highest-weight-module, lem-finite-semisimple-cartan-root-and-string-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (prop-casimir-eigenvalue-on-a-highest-weight-module). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $M$ be a cyclic highest-weight module of highest weight $\lambda$. Then the quadratic Casimir element acts on $M$ by the scalar

$$ (\lambda,\lambda+2\rho), $$

where the pairing on $\mathfrak h^*$ is induced by the Killing form and $\rho$ is the Weyl vector from [[def-weyl-vector-rho-for-a-chosen-positive-system]].

## Facts & Assumptions

**Given:** A cyclic highest-weight module $M=U(\mathfrak g)v$ of highest weight $\lambda$ and the quadratic Casimir element $C$.

[F1] The chosen triangular decomposition implicit in the highest-weight-module definition comes from a full root-space decomposition $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, with $\mathfrak h$ its common zero weight space ([[def-highest-weight-vector-and-cyclic-highest-weight-module]]). This is supplied data here; no existence claim for an arbitrary Cartan subalgebra is needed.

[F2] A maximal toral subalgebra has one-dimensional root spaces, a nondegenerate Killing-form restriction to itself, perfect pairings between opposite root spaces, and $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathfrak h$ ([[lem-finite-semisimple-cartan-root-and-string-structure]]).

## Proof

**Proof technique:** direct.

1.1 The supplied root-space decomposition [F1] makes every $\operatorname{ad}_h$, $h\in\mathfrak h$, diagonalizable, and its zero weight space is $C_{\mathfrak g}(\mathfrak h)=\mathfrak h$. The latter equality makes $\mathfrak h$ abelian and forces every toral enlargement of $\mathfrak h$ to equal $\mathfrak h$; thus $\mathfrak h$ is maximal toral. Apply [F2]: every root space is one-dimensional, $B|_{\mathfrak h}$ is nondegenerate, and opposite root spaces are perfectly paired. Invariance makes distinct nonopposite weight spaces orthogonal. Choose a basis $h_j$ of $\mathfrak h$ with Killing-dual basis $h^j$, and for each positive root choose $e_\alpha\in\mathfrak g_\alpha$ and $f_\alpha\in\mathfrak g_{-\alpha}$ with $B(e_\alpha,f_\alpha)=1$. These are full dual bases, so $C=\sum_j h_jh^j+\sum_{\alpha>0}(e_\alpha f_\alpha+f_\alpha e_\alpha)$. All choices are finite. [F1, F2, algebra]

2.1 Since $e_\alpha v=0$ for every positive root, one has $f_\alpha e_\alpha v=0$ and $e_\alpha f_\alpha v=[e_\alpha,f_\alpha]v$. By [F2] this bracket belongs to $\mathfrak h$. Let $H_\alpha\in\mathfrak h$ be the unique vector satisfying $B(H_\alpha,h)=\alpha(h)$ for every $h\in\mathfrak h$; it exists by nondegeneracy of $B|_{\mathfrak h}$. Killing invariance gives $B([e_\alpha,f_\alpha],h)=B(e_\alpha,[f_\alpha,h])=\alpha(h)B(e_\alpha,f_\alpha)=\alpha(h)$. Thus $[e_\alpha,f_\alpha]=H_\alpha$, and step 1.1 gives $Cv=(\sum_j h_jh^j+\sum_{\alpha>0}H_\alpha)v$. [F2, step 1.1, algebra]

3.1 The Cartan part acts on $v$ by $(\lambda,\lambda)$, and the root contribution acts by $\sum_{\alpha>0}\lambda(H_\alpha)=2(\lambda,\rho)$. Therefore $Cv=(\lambda,\lambda+2\rho)v$. Because $C$ is central by [[prop-the-quadratic-casimir-element-is-central]] and $M=U(\mathfrak g)v$, this same scalar acts on every element of $M$. [step 2.1, algebra] ∎
