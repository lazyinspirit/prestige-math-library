---
id: lem-elliptic-resolvent-identity
kind: lemma
title: "The elliptic resolvent identity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case, def-axiom-of-choice, def-complex-l-two-inner-product, def-complex-lp-and-euclidean-test-function-conventions, def-complexification-of-a-real-linear-map, def-complexification-of-a-real-vector-space, def-compact-linear-operator, def-countable-choice, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, lem-second-resolvent-identity-for-closed-operator-perturbations, thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, resolvent relations for the elliptic operator, printed pp. 100-107 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.8, the resolvent $(L-\lambda I)^{-1}$ and its compactness, printed p. 106 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], let the scalar field be $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $\Omega$ be bounded and open. Define $\widetilde H:=L^2(\Omega;\mathbb C)$ and $\widetilde L=L$ if $\mathbb K=\mathbb C$; if $\mathbb K=\mathbb R$, use the canonical isometric identification $L^2(\Omega;\mathbb R)_{\mathbb C}\cong L^2(\Omega;\mathbb C)$ and set $\widetilde L=L_{\mathbb C}$, the complexification $L_{\mathbb C}(u+iv)=Lu+iLv$ on $D(L)+iD(L)$ ([[def-complex-l-two-inner-product]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]], [[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]]). Write $\sigma(\widetilde L)$ for its complex spectrum as in [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]. For $z\notin\sigma(\widetilde L)$ put $R_z:=(\widetilde L-z)^{-1}$ in the adopted $\widetilde L-z$ convention, so that $R_z:\widetilde H\to D(\widetilde L)$ is bijective onto $D(\widetilde L)$ with $(\widetilde L-z)R_z=I$ on $\widetilde H$ and $R_z(\widetilde L-z)=I$ on $D(\widetilde L)$. Then for all $z,w\notin\sigma(\widetilde L)$
$$R_z-R_w=(z-w)R_zR_w=(z-w)R_wR_z,$$
the identities holding on all of $\widetilde H$; in particular $R_zR_w=R_wR_z$. Each $R_z$ is compact on $\widetilde H$.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric-case operator $L$ and its complex realization $\widetilde L$ with its complex spectrum $\sigma(\widetilde L)$; complex numbers $z,w\notin\sigma(\widetilde L)$; and the resolvents $R_z,R_w$.

[F1] Resolvent data: for $z\notin\sigma(\widetilde L)$ the operator $\widetilde L-z:D(\widetilde L)\to\widetilde H$ is bijective with bounded inverse $R_z$, $R_z$ maps $\widetilde H$ into $D(\widetilde L)$, $(\widetilde L-z)R_z=I$ on $\widetilde H$ and $R_z(\widetilde L-z)=I$ on $D(\widetilde L)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[F2] Compact resolvent: each $R_z$ is compact on $\widetilde H$ ([[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]], [[def-compact-linear-operator]], [[def-axiom-of-choice]]).

[F3] Composition conventions: products of the resolvents in either order are defined on all of $\widetilde H$ because $R_z,R_w$ map $\widetilde H$ into $D(\widetilde L)$, on which the other resolvent is defined; a general second-resolvent identity for closed operators is available for comparison ([[lem-second-resolvent-identity-for-closed-operator-perturbations]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

## Proof

**Proof technique:** direct.

1.1 The identity. On $\widetilde H$ insert the two inverse relations of [F1]: $$R_z-R_w=R_z(\widetilde L-w)R_w-R_z(\widetilde L-z)R_w=R_z\bigl[(\widetilde L-w)-(\widetilde L-z)\bigr]R_w=(z-w)R_zR_w,$$ where the first equality uses $(\widetilde L-w)R_w=I$ and $R_z(\widetilde L-z)=I$; all products are everywhere defined by [F3]. Exchanging $z,w$ gives $R_z-R_w=(z-w)R_wR_z$; comparing the two expressions gives $(z-w)R_zR_w=(z-w)R_wR_z$. If $z\ne w$, divide by $z-w$; if $z=w$, the products are identical. [F1, F3, given, algebra]

2.1 Compactness. Each $R_z$ is compact on $\widetilde H$ by [F2]; the resolvent identity itself is an operator identity on all of $\widetilde H$ and involves no compactness, and no choice beyond [F1] and [F2] is used. [F2, step 1.1, given] ∎
