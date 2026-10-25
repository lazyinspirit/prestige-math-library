---
id: rem-l-one-sequence-versus-l-one-nonatomic-rnp
kind: remark
title: "Sequence ell-one versus nonatomic L-one for the RNP"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-separable-space, lem-countable-iff-surjection-from-n, thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-product-of-countable, thm-countable-union-of-countable, lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-dual-of-c0-is-ell-one, thm-bounded-operator-space-is-banach, thm-separable-dual-spaces-have-rnp, thm-l-one-of-zero-one-fails-rnp]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://www.math.tamu.edu/~geoffrey.schiebinger/Pisier_Martingales.pdf"
      locator: "Chapter 2, Section 2.1, remarks following Corollary 2.11, printed p. 42"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. Over either $\mathbb R$ or $\mathbb C$, the
sequence space $\ell^1$ has the Radon--Nikodym property, whereas the nonatomic
function space $L^1([0,1],\lambda)$ does not. Thus the notation ``one'' in the
two norms does not determine the RNP.

## Facts & Assumptions

[A1] AC holds and supplies Countable Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L1] Finite truncations are dense in $\ell^1$, while rational numbers are countable and dense in the reals; finite products and countable unions of countable sets are countable under Countable Choice ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]], [[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]], [[lem-countable-iff-surjection-from-n]], [[def-separable-space]]).

[L2] The bilinear coefficient map identifies $\ell^1$ isometrically with the continuous dual $c_0^*$, and continuous duals are Banach ([[thm-dual-of-c0-is-ell-one]], [[thm-bounded-operator-space-is-banach]]).

[L3] Under AC, every norm-separable continuous dual has RNP ([[thm-separable-dual-spaces-have-rnp]]).

[L4] Under AC, real and complex $L^1([0,1],\lambda)$ fail RNP ([[thm-l-one-of-zero-one-fails-rnp]]).

## Proof

**Proof technique:** direct.

**Given:** AC and either scalar field.

1.1 Verify norm separability of the sequence space. Over $\mathbb R$, let $D$ be the finite-support sequences with rational coordinates; over $\mathbb C$, use coordinates in $\mathbb Q+i\mathbb Q$. For each support length the coordinate choices form a finite product of countable sets, and the union over all lengths is countable by [L1]. Given $a\in\ell^1$ and $\varepsilon>0$, first choose a finite truncation within $\varepsilon/2$ in $\ell^1$, then approximate its finitely many coordinates so that the sum of coordinate errors is below $\varepsilon/2$. Thus $D$ is countable and dense, and $\ell^1$ is norm separable. [A1, L1]

2.1 Put the sequence-space side under the separable-dual theorem. By [L2], $\ell^1$ is isometrically the continuous dual $c_0^*$ and is Banach. Step 1.1 supplies norm separability, so [L3], under the assumed AC, gives RNP to $\ell^1$. [A1, L2, L3, step 1.1]

3.1 Contrast the nonatomic function space and audit scope. [A1, L4, step 2.1] The theorem [L4] gives the opposite conclusion for the real and complex Lebesgue quotient spaces $L^1([0,1],\lambda)$. This is not a contradiction: $\ell^1$ consists of summable scalar sequences and is the separable dual $c_0^*$, whereas the second space is built over a nonatomic measure and has the explicit nondifferentiable indicator curve used in [L4]. The zero sequence and zero function occur in both spaces but do not determine a global geometric property. Both scalar fields are covered, and AC is propagated to [L3] and [L4], with Countable Choice used in the countability calculation of step 1.1. [given, A1, L1, L2, L3, L4, step 1.1, step 2.1] ∎