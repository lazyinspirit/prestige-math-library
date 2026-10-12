---
id: thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment
kind: theorem
title: "Positive-characteristic decomposition polynomials factor through adjustment"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 45
deps: [def-graded-adjustment-polynomials-in-positive-characteristic,
       lem-reduction-of-characteristic-zero-simple-modules-modulo-p,
       thm-graded-specht-classes-realize-standard-fock-vectors,
       cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group,
       lem-standard-fock-vectors-expand-in-the-upper-global-basis,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular,
       def-nondegenerate-root-of-unity-level-one-hecke-regime,
       lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 5.6-5.7, printed pp. 54-57: Theorem 5.17, the adjustment matrix and its factorization of the positive-characteristic decomposition matrix; Theorem 5.18 and the recorded q=1 comparison. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 9.1-9.5, printed pp. 39-46: the graded decomposition-number statements and the adjustment boundary. Complete passage read."
verification:
  precheck: pass
---

## Statement

In branch (CP) of the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]], for every
$\lambda\in RP_\alpha$ and every partition $\mu$ of content $\alpha$, the
graded decomposition polynomial factors as
$$[S(\mu):D(\lambda)]_q=\sum_{\nu\in RP_\alpha}a_{\lambda,\nu}(q)\,d_{\nu,\mu}(q),$$
where $a_{\lambda,\nu}$ are the adjustment polynomials of
[[def-graded-adjustment-polynomials-in-positive-characteristic]] and
$d_{\nu,\mu}$ the characteristic-independent global-basis transition polynomial
of [[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]];
equivalently
$[J(\nu)]=[D(\nu)]+\sum_{\lambda\lhd\nu}a_{\lambda,\nu}(q)[D(\lambda)]$. In
particular the characteristic-$p$ decomposition matrix is the product of the
dominance-unitriangular adjustment matrix and the (characteristic-independent)
matrix of global-basis coefficients, and no claim is made that the adjustment
matrix is the identity. Choice is inherited only through the transported
global-basis suppliers.

## Facts & Assumptions

**Given:** Branch (CP) of the regime with a content $\alpha$, the graded Specht
modules $S(\mu)$, the reduced modules $J(\nu)$ and the normalized simples
$D(\lambda)$.

[F1] The Specht classes realize the standard Fock vectors: $[S(\mu)]$ maps to
$S_\mu$ under $\Psi_{\rm can}^{\rm Hecke}$
([[thm-graded-specht-classes-realize-standard-fock-vectors]]), and
$S_\mu=\sum_{\nu\in RP_\alpha}d_{\nu,\mu}(q)D_\nu$ in the upper family
([[lem-standard-fock-vectors-expand-in-the-upper-global-basis]]), with the
transition polynomials of
[[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]].

[F2] The reduced modules satisfy
$\Psi_{\rm can}^{\rm Hecke}([J(\nu)])=D_\nu$ over the positive-characteristic
field, and the labels agree with the cellular heads in this branch
([[lem-reduction-of-characteristic-zero-simple-modules-modulo-p]],
[[lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree]]).

[F3] The adjustment polynomials are defined by
$[J(\nu)]=\sum_{\lambda}a_{\lambda,\nu}(q)[D(\lambda)]$, with $a_{\nu,\nu}=1$
and $a_{\lambda,\nu}=0$ unless $\lambda\unlhd\nu$
([[def-graded-adjustment-polynomials-in-positive-characteristic]]); the graded
Grothendieck group has the shift-orbit basis of the normalized simples, so all
expansions are unique
([[cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group]]).

[F4] The ungraded cellular triangularity of the decomposition matrix is
[[cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular]]; the
regime is branch (CP) of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]].

## Proof

**Proof technique:** direct.

1.1 **Expand the Specht class in the reduced basis.** By [F1] the transported isomorphism sends $[S(\mu)]$ to $S_\mu=\sum_{\nu\in RP_\alpha}d_{\nu,\mu}(q)D_\nu$; applying $(\Psi_{\rm can}^{\rm Hecke})^{-1}$ and using that the reduced modules map to the dual-canonical vectors by [F2] gives $[S(\mu)]=\sum_{\nu\in RP_\alpha}d_{\nu,\mu}(q)[J(\nu)]$ in $G_0^{\rm gr}(H^\Lambda_\alpha(F))$ [F1, F2]. [F1, F2]

2.1 **Substitute the adjustment expansion.** Substituting the defining expansion $[J(\nu)]=\sum_{\lambda\in RP_\alpha}a_{\lambda,\nu}(q)[D(\lambda)]$ of [F3] into step 1.1 and collecting the coefficients of the basis elements $[D(\lambda)]$ yields $[S(\mu)]=\sum_{\lambda}\bigl(\sum_{\nu}a_{\lambda,\nu}(q)d_{\nu,\mu}(q)\bigr)[D(\lambda)]$ [F3]. [F3, step 1.1]

3.1 **Read off the multiplicities.** By [F3] the simple classes form the shift-orbit basis, so the coefficient of $[D(\lambda)]$ in the expansion of $[S(\mu)]$ is the graded composition multiplicity $[S(\mu):D(\lambda)]_q$; hence the displayed factorization, and the second displayed form is the same expansion written at the diagonal $a_{\nu,\nu}=1$ and the dominance support $a_{\lambda,\nu}=0$ for $\lambda\ntrianglelefteq\nu$ [F3]. In particular the adjustment matrix is generally not the identity, since the theorem determines no off-diagonal adjustment entry [F3, F4]. [F3, F4, step 2.1]

4.1 **Choice.** The factorization is a substitution of two expansions in a free basis; the only choice is inherited through the transported global-basis suppliers [F1, F2]. [F1, F2, given] ∎
