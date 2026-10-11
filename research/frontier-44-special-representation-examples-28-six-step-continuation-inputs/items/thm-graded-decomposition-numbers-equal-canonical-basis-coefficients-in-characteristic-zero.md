---
id: thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero
kind: theorem
title: "Graded decomposition numbers equal canonical-basis coefficients in characteristic zero"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 40
deps: [thm-ariki-canonical-basis-theorem-in-characteristic-zero,
       thm-graded-specht-classes-realize-standard-fock-vectors,
       lem-standard-fock-vectors-expand-in-the-upper-global-basis,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-axiom-of-choice,
       def-nondegenerate-root-of-unity-level-one-hecke-regime,
       prop-qg8-categorification-transports-across-the-hecke-klr-bridge]
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
      locator: "Section 5.5-5.6, printed pp. 52-55: Theorem 5.14 and Corollary 5.15, the graded decomposition-number theorem and its ungraded specialization. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 9.1-9.5, printed pp. 39-46: Theorems 9.8-9.9 and Corollary 9.10, the graded decomposition numbers and their q-support. Complete passages read."
    - title: "Susumu Ariki, On the decomposition numbers of the Hecke algebra of G(m,1,n), J. Math. Kyoto Univ. 36 (1996) 789-808"
      url: "https://projecteuclid.org/journals/journal-of-mathematics-of-kyoto-university/volume-36/issue-4/On-the-decomposition-numbers-of-the-Hecke-algebra-of-Gm/10.1215/kjm/1250518452.pdf"
      locator: "Theorem 4.4 (printed pp. 806-807), read in the recovered full-text extraction; independently carried by BK 2009 Theorem 5.9 and Kleshchev's survey, which were read."
verification:
  precheck: pass
---

## Statement

In branch (C0) of the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]], for every partition
$\mu$ with content $\alpha$ and every $\lambda\in RP_\alpha$, the graded
composition multiplicity satisfies
$$[S(\mu):D(\lambda)]_q=d_{\lambda,\mu}(q),$$
where $d_{\lambda,\mu}$ is the level-one global-basis transition polynomial of
[[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]];
equivalently
$[S(\mu)]=\sum_{\lambda\in RP_\alpha}d_{\lambda,\mu}(q)[D(\lambda)]$ in
$G_0^{\rm gr}(H^\Lambda_\alpha)$, and $d_{\lambda,\mu}=0$ unless
$\lambda\unlhd\mu$. Specializing $q=1$ gives Ariki's ungraded
decomposition-number theorem
$[S(\mu):D(\lambda)]=d_{\lambda,\mu}(1)$. Choice is inherited only through the
QG-8 global-basis suppliers.

## Facts & Assumptions

**Given:** Branch (C0) of the regime, a partition $\mu$ with content $\alpha$,
the graded Specht module $S(\mu)$, and the transported identification
$\Psi_{\rm can}^{\rm Hecke}$.

[F1] The transported identification sends $[S(\mu)]$ to the standard Fock
vector $S_\mu=\pi(M_\mu)$
([[thm-graded-specht-classes-realize-standard-fock-vectors]]); and
$S_\mu=\sum_\lambda d_{(\lambda,\mu)}(q)G^*(\lambda)$ over the restricted
labels, with the same coefficients as the lower expansion, by
[[lem-standard-fock-vectors-expand-in-the-upper-global-basis]].

[F2] In branch (C0) the transported normalized self-dual simples $D(\lambda)$
map to the upper global basis vectors $G^*(\lambda)$ under
$\Psi_{\rm can}^{\rm Hecke}$
([[thm-ariki-canonical-basis-theorem-in-characteristic-zero]] (2)), and the
simple classes form a basis of the free $A$-module $G_0^{\rm gr}(H^\Lambda_\alpha)$
([[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] (2)).

[F3] The transition polynomials have off-diagonal entries in $q\mathbb Z[q]$ and are supported
on $\lambda\unlhd\mu$ with diagonal $1$
([[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]]);
the graded module group is the restricted direct sum of the blockwise groups
with forgetful maps $\zeta$ satisfying $\zeta(qm)=\zeta(m)$
([[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]]).

[F4] The graded Specht module and its basis are those of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]; the regime is
branch (C0) of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]].

[C1] Choice is inherited only through the QG-8 global-basis and Fock suppliers
([[def-axiom-of-choice]],
[[thm-ariki-canonical-basis-theorem-in-characteristic-zero]]).

## Proof

**Proof technique:** direct.

1.1 **Transport the Specht class.** Applying $\Psi_{\rm can}^{\rm Hecke}$ to $[S(\mu)]$ gives $S_\mu$ by [F1], and the expansion of the standard vector in the upper family is $S_\mu=\sum_{\lambda\in RP_\alpha}d_{(\lambda,\mu)}(q)G^*(\lambda)$ by [F1]; the coefficients are the transition polynomials of [F3]. [F1, F3]

2.1 **Replace the upper basis by the simple classes.** By [F2] the vectors $G^*(\lambda)$ are the images of the simple classes $[D(\lambda)]$ under the same isomorphism; applying $(\Psi_{\rm can}^{\rm Hecke})^{-1}$ to step 1.1 therefore gives the expansion $[S(\mu)]=\sum_{\lambda}d_{(\lambda,\mu)}(q)[D(\lambda)]$ in $G_0^{\rm gr}(H^\Lambda_\alpha)$ [F1, F2]. [F1, F2, step 1.1]

3.1 **Read off multiplicities and support.** Since the simple classes form a basis of the free $A$-module $G_0^{\rm gr}(H^\Lambda_\alpha)$ by [F2], the coefficient of $[D(\lambda)]$ in the expansion of step 2.1 is the graded composition multiplicity $[S(\mu):D(\lambda)]_q$, and it equals $d_{(\lambda,\mu)}(q)$; the support statement $d_{(\lambda,\mu)}=0$ unless $\lambda\unlhd\mu$ is the triangularity of [F3]. [F2, F3, step 2.1]

4.1 **The ungraded specialization.** The forgetful map $\zeta$ specializes $q$ to $1$ and sends a graded composition series to an ungraded one with the same multiplicities [F3]; applying $\zeta$ to the expansion of step 2.1 gives $[S(\mu):D(\lambda)]=d_{(\lambda,\mu)}(1)$, Ariki's ungraded decomposition-number theorem. No new choice is made: [C1] is inherited. [C1, F3, F4, given] ∎
