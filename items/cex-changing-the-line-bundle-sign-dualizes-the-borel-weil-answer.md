---
id: cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer
kind: counterexample
title: Changing the line-bundle sign changes the Borel-Weil section space
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
- thm-borel-weil
- thm-minimal-parabolic-flag-projection-is-p1-bundle
- lem-semisimple-minimal-parabolic-root-subgroup
- lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
- def-projective-line-two-affine-cover-and-twisting-sheaf
- thm-cohomology-projective-space-twisting-sheaves
- def-borel-character-equivariant-line-bundle
- def-fundamental-weights-for-a-chosen-simple-root-system
- def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
  generation:
    role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joshua Ng (Hoi Hei Jan Sum), The Borel-Weil-Bott Theorem (Chicago REU 2015)"
      url: "https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf"
      locator: "Sections 3-5, printed pp. 6-12: the character of the Borel and the sign in the associated bundle"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Section 1.6, printed p. 2: the sign convention C(lambda) for the associated bundle"
---

## Statement refuted

The false statement is that the two sign conventions
$\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ and
$\widetilde{\mathcal L}_\lambda=G\times^B\mathbb C_{+\lambda}$ give the same
Borel-Weil answer, so that replacing $\mathbb C_{-\lambda}$ by
$\mathbb C_{+\lambda}$ in the construction of the line bundle is harmless.

## Counterexample

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$G=SL_2(\mathbb C)$ and consider the two bundles attached to
$m\omega_1\in X^*(T)$: the library convention
$\mathcal L_{m\omega_1}=G\times^B\mathbb C_{-m\omega_1}\cong\mathcal O(m)$ of
[[def-borel-character-equivariant-line-bundle]] and the opposite convention
$\widetilde{\mathcal L}_{m\omega_1}=G\times^B\mathbb C_{+m\omega_1}
\cong\mathcal L_{-m\omega_1}\cong\mathcal O(-m)$. For $m>0$ the reader who
silently replaces $\mathbb C_{-\lambda}$ by $\mathbb C_{+\lambda}$ gets
$$H^0(X,\widetilde{\mathcal L}_{m\omega_1})=H^0(X,\mathcal O(-m))=0\quad\text{instead of}\quad H^0(X,\mathcal L_{m\omega_1})\cong L(m\omega_1)^*\neq0,$$
so the opposite convention gives zero sections where the library convention
gives a nonzero irreducible module. The line bundle is dualized by the sign
change, but its space of sections is not obtained by dualizing the original
space of sections. The two conventions are not interchangeable.

**Given:** The Axiom of Choice, $G=SL_2(\mathbb C)$ with upper triangular Borel and flag variety $X=G/B\cong\mathbb P^1$, an integer $m>0$, the fundamental weight $\omega_1$, the library bundles $\mathcal L_{m\omega_1}=G\times^B\mathbb C_{-m\omega_1}$, and the opposite bundles $\widetilde{\mathcal L}_{m\omega_1}=G\times^B\mathbb C_{+m\omega_1}$.

1.1 By definition of the sign convention, $G\times^B\mathbb C_{+\lambda}$ is $G\times^B\mathbb C_{-(-\lambda)}=\mathcal L_{-\lambda}$; hence $\widetilde{\mathcal L}_{m\omega_1}=\mathcal L_{-m\omega_1}$, and for $SL_2$ the fibre is all of $X$ with the restriction of $\mathcal L_{-m\omega_1}$ isomorphic to $\mathcal O(-m)$ by the degree computation for the minimal parabolic fibre under the fixed identification of $X$ with $\mathbb P^1$. [given, algebra]

2.1 For $m>0$ the twist $\mathcal O(-m)$ has negative degree, so it has no nonzero global sections by the projective-space cohomology computation [[thm-cohomology-projective-space-twisting-sheaves]]; in particular $H^0(X,\widetilde{\mathcal L}_{m\omega_1})=0$. [step 1.1, algebra]

3.1 On the other hand $m\omega_1$ is dominant integral, so the Borel-Weil theorem [[thm-borel-weil]] gives $H^0(X,\mathcal L_{m\omega_1})\cong L(m\omega_1)^*$, which is nonzero because an irreducible representation has a nonzero highest weight vector. Thus the two conventions answer differently: the sign change replaces the dual irreducible representation by zero, and the two constructions are not interchangeable. [given, step 2.1] ∎
