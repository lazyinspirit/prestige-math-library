---
id: lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator
kind: lemma
title: Orthogonality identifies the Weyl numerator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-weyl-integration-formula, cor-irreducible-characters-are-orthonormal-class-functions, thm-highest-weight-classification-for-a-compact-connected-lie-group, lem-weyl-denominator-and-anti-invariant-orbit-sum-basis, prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one, def-axiom-of-choice, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §3, orthogonality and the numerator identity"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§15 and Appendix Z"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$, and let $T_p$ be the maximal torus of the finite central
cover $Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}$. For every dominant
$\lambda\in X^*(T)$, viewed as a character of $T_p$, one has
$$A_\rho\,\chi_\lambda=A_{\lambda+\rho}$$
as functions on $T_p$, where $\chi_\lambda$ is the character of the irreducible
representation of highest weight $\lambda$ and $A_\nu=\sum_{w\in W}\det(w)e^{w\nu}$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, the compact connected $G$, the finite central cover with torus $T_p$, the Weyl group $W$, the Weyl vector $\rho$, and dominant weights $\lambda,\mu\in X^*(T)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar integration and covering theory cited.

[L1] $A_\rho=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})$ and the $A_\nu$, over strictly dominant $\nu$, form a triangular $\mathbb Z$-basis of the anti-invariant functions on $T_p$ ([[lem-weyl-denominator-and-anti-invariant-orbit-sum-basis]]).

[L2] The irreducible characters on $T_p$ are $W$-invariant and satisfy $\chi_\lambda=e^\lambda+\sum_{\mu<\lambda}m_\mu e^\mu$ with nonnegative integer multiplicities; in particular the weight $\lambda$ occurs with multiplicity one and all other weights are $<\lambda$ in dominance order ([[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]], [[thm-highest-weight-classification-for-a-compact-connected-lie-group]]).

[L3] Weyl integration and character orthonormality hold on the compact connected cover with its maximal torus: for class functions $f$, $\int f\,dg=|W|^{-1}\int_{T_p}fJ\,dt$, and $\langle\chi_\lambda,\chi_\mu\rangle=\delta_{\lambda\mu}$; also $J=|A_\rho|^2$ by [L1] and the root/product identities ([[thm-weyl-integration-formula]], [[cor-irreducible-characters-are-orthonormal-class-functions]]).

[L4] The characters $e^\nu$ of $T_p$ are orthonormal in $L^2(T_p,dt)$: $\int_{T_p}e^{\nu}\overline{e^{\mu}}dt=\delta_{\nu\mu}$ ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

## Proof

**Proof technique:** direct.

1.1 The product $A_\rho\chi_\lambda$ is anti-invariant: $A_\rho$ is anti-invariant by [L1] and $\chi_\lambda$ is $W$-invariant by [L2]. By [L2] its expansion has exponents $\lambda+\rho-\sigma$ where $\sigma$ is a sum of positive roots, so all exponents are $\le\lambda+\rho$, the exponent $\lambda+\rho$ occurs with coefficient $1$, and every other exponent is $<\lambda+\rho$; hence, in the triangular basis of [L1], $A_\rho\chi_\lambda=A_{\lambda+\rho}+\sum_{\nu<\lambda}c_{\lambda,\nu}A_{\nu+\rho}$ for integers $c_{\lambda,\nu}$, the sum being finite and over strictly dominant $\nu$. [L1, L2]

2.1 The $A_\nu$ are orthogonal: by [L4], $\int_{T_p}A_\nu\overline{A_\mu}dt=\sum_{w,w'}\det(ww')\int_{T_p}e^{w\nu}\overline{e^{w'\mu}}dt=|W|\delta_{\nu\mu}$ for strictly dominant $\nu,\mu$, because the integral is nonzero exactly when $w\nu=w'\mu$ for some pair, which happens exactly for $\nu=\mu$, each of the $|W|$ pairs $(w,w')$ with $w=w'$ contributing $\det(ww')=1$. [L4, step 1.1]

3.1 Combining Weyl integration, $J=|A_\rho|^2$, and character orthonormality from [L3] gives $|W|\delta_{\lambda\mu}=\int_{T_p}A_\rho\chi_\lambda\overline{A_\rho\chi_\mu}\,dt$; expanding both factors by step 1.1 and using step 2.1 yields $|W|\delta_{\lambda\mu}=|W|\sum_\nu c_{\lambda,\nu}\overline{c_{\mu,\nu}}$, that is, the matrix $(c_{\lambda,\nu})$ is orthogonal. [L3, step 1.1, step 2.1]

4.1 The matrix $(c_{\lambda,\nu})$ is unitriangular for the dominance order by step 1.1 (diagonal entries one, nonzero off-diagonal entries only for $\nu<\lambda$), and a unitriangular matrix that is orthogonal is the identity: its first column, at the least element of the order, has a single nonzero entry $1$, and induction along the order forces every off-diagonal entry to vanish. Hence $c_{\lambda,\nu}=\delta_{\lambda\nu}$ and $A_\rho\chi_\lambda=A_{\lambda+\rho}$, as claimed. [A1, step 1.1, step 3.1]∎
