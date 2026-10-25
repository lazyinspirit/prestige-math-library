---
id: ex-kronecker-pairing-for-a-cellular-circle-generator
kind: example
title: Kronecker pairing for a cellular circle generator
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, cor-homology-of-spheres, def-axiom-of-choice, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology, lem-singular-uct-extension-from-cycle-projections]
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
    - title: Hatcher, section 3.1, evaluation and universal coefficients
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Example

Assume AC. Give $S^1$ one vertex and one positively oriented one-cell, and let $z\in H_1(S^1;\mathbb Z)$ be the corresponding cellular generator transported to singular homology. There is a unique $\alpha\in H^1(S^1;\mathbb Z)$ with $\langle\alpha,z\rangle=1$. More generally $\langle r\alpha,sz\rangle=rs$ for integers $r,s$.

## Facts & Assumptions

[F1] [[thm-cellular-boundary-is-the-incidence-degree-matrix]] gives endpoint difference for a one-cell; [[thm-cellular-homology-computes-singular-homology]] transports cellular homology to singular homology. [[cor-homology-of-spheres]] also gives $H_0(S^1;\mathbb Z)=H_1(S^1;\mathbb Z)=\mathbb Z$.

[F2] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] identifies its right map with evaluation. Its local supplier [[lem-singular-uct-extension-from-cycle-projections]] computes Ext using any length-one projective resolution and proves surjectivity by cycle projections. Assume [[def-axiom-of-choice]].

[F3] [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]] gives representative independence and biadditivity.

## Proof

**Given:** The oriented circle and AC as in the example.

1.1 Both endpoints of the oriented one-cell attach to the same vertex, so its cellular boundary is zero. There are no two-cells. Thus the degree-one cellular homology is the infinite cyclic group on this cell; its image $z$ under the isomorphism in [F1] is a singular homology generator. The degree-zero group is likewise $\mathbb Z$. In particular the cellular cell symbol has only been used to specify a homology class, not as a singular cochain. [F1, given]

2.1 The length-zero resolution of $H_0=\mathbb Z$ consisting of $\mathbb Z$ augmented by identity has zero degree-one Hom group, so $\operatorname{Ext}^1(H_0,\mathbb Z)=0$ by [F2]. The degree-one UCT therefore makes evaluation $\beta:H^1(S^1;\mathbb Z)\to\operatorname{Hom}(\mathbb Zz,\mathbb Z)$ an isomorphism. The homomorphism $u(sz)=s$ is well-defined because every element has a unique such expression. Define $\alpha=\beta^{-1}u$. Then $\langle\alpha,z\rangle=u(z)=1$, and injectivity of $\beta$ makes this class unique. [F2, step 1.1]

3.1 A singular cocycle representing this class can be obtained exactly as in [F2]: for integral singular cycles $Z_1$ choose the supplied projection $\pi_1:C_1\to Z_1$, let $q_1:Z_1\to H_1$ be the quotient, and set $\varphi=u q_1\pi_1$. On a two-boundary, $\pi_1$ acts as identity and $q_1$ vanishes, so $\delta\varphi=0$. On any singular cycle representing $sz$, its value is $s$. Thus this actual singular cocycle has the required class and evaluation. The construction does not identify a cellular cochain with a singular cochain. [F2, step 1.1, step 2.1]

4.1 Biadditivity from [F3] yields $\langle r\alpha,sz\rangle=rs$, including zero, negative integers and $r=s=1$. Reversing the cell orientation replaces $z$ by $-z$ and its uniquely normalized dual by $-\alpha$, leaving the normalized value one. The nonempty circle and degree one are fixed; no assertion about a zero-dimensional or empty sphere is involved. AC is inherited from the UCT cycle projection in step 3.1; specifying the single oriented cell adds no infinite choice. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
