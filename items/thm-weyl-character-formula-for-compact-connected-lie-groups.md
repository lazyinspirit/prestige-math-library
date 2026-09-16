---
id: thm-weyl-character-formula-for-compact-connected-lie-groups
kind: theorem
title: Weyl character formula for compact connected groups
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-weyl-denominator-and-anti-invariant-orbit-sum-basis, lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator, prop-central-quotients-correspond-to-intermediate-character-lattices, thm-compact-connected-lie-groups-are-classified-by-root-data, def-axiom-of-choice, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t, thm-weyl-integration-formula, thm-highest-weight-classification-for-a-compact-connected-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §8, Theorem 5.113 (compact Weyl character formula)"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$ and let
$p:Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$ be the finite central
cover, with maximal torus $\tilde T$. For a dominant weight
$\lambda\in X^*(T)$ and a regular element $t\in T$, and for any lift
$\tilde t\in\tilde T$ of $t$,
$$\chi_\lambda(t)=\frac{A_{\lambda+\rho}(\tilde t)}{A_\rho(\tilde t)} .$$
The quotient is independent of the chosen lift, and the resulting function on
the regular set extends uniquely and continuously to all of $T$, where it equals
the character $\chi_\lambda$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, the compact connected $G$, the maximal torus $T$, the finite central cover $p:Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$ with maximal torus $\tilde T$, the Weyl group $W$, the Weyl vector $\rho$ and a dominant $\lambda\in X^*(T)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the covering and integration theory cited.

[L1] $A_\rho=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})$ and $A_\rho\chi_\lambda=A_{\lambda+\rho}$ on $\tilde T$ ([[lem-weyl-denominator-and-anti-invariant-orbit-sum-basis]], [[lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator]]).

[L2] Characters of $\tilde T$ are the $e^\mu$, $\mu\in X^*(\tilde T)$; they satisfy $e^\mu(\tilde tz)=e^\mu(\tilde t)e^\mu(z)$, and for $z$ in the finite central kernel $\ker p$ one has $e^{\lambda}(z)=1$ while $e^{w\mu}(z)=e^{\mu}(z)$ because $z$ is central in $Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}$ ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]], [[thm-compact-connected-lie-groups-are-classified-by-root-data]]).

[L3] The kernel of the covering is finite and central, and $p$ restricts on $\tilde T$ to a surjective homomorphism $\tilde T\to T$ with kernel $\ker p$; a character of $T$ pulls back to a character of $\tilde T$ trivial on $\ker p$ ([[thm-compact-connected-lie-groups-are-classified-by-root-data]], [[prop-central-quotients-correspond-to-intermediate-character-lattices]]).

[L4] The regular set $T_{\mathrm{reg}}=\{t:\alpha(t)\ne1\ \forall\alpha\in\Phi\}$ is open and dense in $T$, its complement being the finite union of the closed sets $\ker\alpha$, and the character $\chi_\lambda$ is continuous on $T$ ([[thm-weyl-integration-formula]], [[thm-highest-weight-classification-for-a-compact-connected-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 On $T_{\mathrm{reg}}$ the denominator $A_\rho=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})$ is nonzero, so by [L1] the quotient $A_{\lambda+\rho}/A_\rho$ is defined there and equals $\chi_\lambda$. [L1, L4]

2.1 The quotient is independent of the lift: if $\tilde t'=\tilde tz$ with $z\in\ker p$, then by [L2] each term satisfies $e^{w\mu}(\tilde tz)=e^{w\mu}(\tilde t)e^{\mu}(z)$, and $e^{\mu}(z)$ is the same for every $w$; since $e^{\lambda}(z)=1$ by [L3], the common factor equals $e^{\rho}(z)$ both for $\mu=\rho$ and for $\mu=\lambda+\rho$, so numerator and denominator acquire the same scalar and the quotient is unchanged. [L2, L3, step 1.1]

3.1 Consequently the quotient descends to a well-defined function on $T_{\mathrm{reg}}$, continuous there because numerator and denominator are continuous and the denominator is nowhere zero; it agrees with the continuous character $\chi_\lambda$ on $T_{\mathrm{reg}}$ by step 1.1. [L4, step 1.1, step 2.1]

4.1 Since $T_{\mathrm{reg}}$ is dense in $T$ by [L4], the function $\chi_\lambda$ is the unique continuous extension of the quotient to all of $T$: existence is the already continuous character, and uniqueness is the general fact that a continuous function on a Hausdorff space is determined by its restriction to a dense subset. No step asserts that $\rho$ or any half-root $\alpha/2$ is a character of the original torus $T$; all numerator and denominator computations take place on the covering torus. [A1, L4, step 3.1]∎
