---
id: lem-weyl-denominator-and-anti-invariant-orbit-sum-basis
kind: lemma
title: Weyl denominator and anti-invariant orbit sums
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-vector-rho, prop-weyl-vector-is-the-sum-of-fundamental-weights, def-character-and-cocharacter-lattices-of-a-torus, thm-analytic-and-root-system-weyl-groups-agree, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, thm-compact-connected-lie-groups-are-classified-by-root-data, def-axiom-of-choice, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-fundamental-weights]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6 and Chapter V §3, the Weyl denominator identity"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://www.math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$, let $p:Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$ be
the finite central covering and let $T_p$ be the maximal torus of the cover.
Then $\rho$ is a character of $T_p$,
$$A_\rho:=\sum_{w\in W}\det(w)\,e^{w\rho}=e^{\rho}\prod_{\alpha>0}\bigl(1-e^{-\alpha}\bigr),$$
and the alternating orbit sums $A_\nu=\sum_{w\in W}\det(w)e^{w\nu}$, for $\nu$
running over the strictly dominant characters of $T_p$, form a triangular
$\mathbb Z$-basis of the anti-invariant functions on $T_p$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, the pair $(G,T)$, the finite central covering $p:Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$ with maximal torus $T_p$, the root system $\Phi$ and the Weyl vector $\rho$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the covering and root-data theory of [L1].

[L1] The derived factor $G_{\mathrm{der}}^{\mathrm{sc}}$ is simply connected with character lattice $P$, and $T_p$ is the product of $Z(G)^0$ with the maximal torus of the derived factor; the Weyl group of the pair acts on the character lattice by $w\mu=\mu-\langle\mu,\ldots\rangle$, the reflections act integrally, and $\langle\rho,\alpha_i^\vee\rangle=1$ for the simple roots ([[thm-compact-connected-lie-groups-are-classified-by-root-data]], [[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]], [[thm-analytic-and-root-system-weyl-groups-agree]]).

[L2] Characters of $T_p$ form the group $\mathbb Z[X^*(T_p)]$; every root $\alpha$ and every fundamental weight $\omega_i$, hence also $\rho=\sum_i\omega_i$, is a character of $T_p$; the alternating sum $A_\nu$ is anti-invariant, $A_{w\nu}=\det(w)A_\nu$, and its coefficients are constant on Weyl orbits with the signs prescribed by $\det$ ([[def-character-and-cocharacter-lattices-of-a-torus]], [[def-weyl-vector-rho]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]]).

[L3] Dominance order: $\mu\le\nu$ means $\nu-\mu$ is a nonnegative integral combination of simple roots; pairing with the fundamental coweights recovers the coefficients: $\langle\alpha_j,\omega_i^\vee\rangle=\delta_{ij}$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]], [[def-fundamental-weights]]).

## Proof

**Proof technique:** direct.

1.1 On $T_p$ the fundamental weights are characters by [L1] and [L2], hence so is $\rho=\sum_i\omega_i$. Both sides of the displayed identity are anti-invariant under every simple reflection: for $A_\rho$ this is $A_{w\rho}=\det(w)A_\rho$, and for the product the simple reflection $s_i$ permutes the positive roots other than $\alpha_i$ and sends $\alpha_i$ to $-\alpha_i$, so $\prod_{\alpha>0}(1-e^{-\alpha})$ changes sign and $e^\rho$ changes by $e^{-\alpha_i}=e^{-(\rho-s_i\rho)}$; multiplying, the two sign changes cancel, giving anti-invariance. [L1, L2]

2.1 The right-hand side expands as $e^{\rho}\prod_{\alpha>0}(1-e^{-\alpha})=\sum_{S\subseteq\Phi^+}(-1)^{|S|}e^{\rho-\sigma_S}$ with $\sigma_S=\sum_{\alpha\in S}\alpha$; every exponent is of the form $\rho-\sigma$ with $\sigma$ a sum of distinct positive roots, hence $\le\rho$ in dominance order, with equality only for $S=\varnothing$, where the coefficient is $1$. So the difference $D$ between the two sides of the identity is anti-invariant with all exponents strictly below $\rho$ in dominance order, and the coefficient of $e^\rho$ in $D$ is zero. [L1, L3, step 1.1]

3.1 An anti-invariant function is a sum $\sum_\nu c_\nu A_\nu$ over strictly dominant $\nu$: anti-invariance forces the coefficient of a singular weight to vanish (a reflection fixes that weight and multiplies the coefficient by $-1$) and the coefficients on a regular Weyl orbit to be $\det(w)$ times the coefficient at the strictly dominant representative. If such a sum has all exponents $\le\rho$ and none equal to $\rho$, then all $c_\nu$ vanish: a strictly dominant $\nu$ with $c_\nu\ne0$ would be an exponent, and writing $\rho-\nu=\sum_in_i\alpha_i$ with $n_i\ge0$, pairing with the fundamental coweights gives $n_i=1-m_i\le0$ where $\nu=\sum_im_i\omega_i$ with $m_i\ge1$; hence $n_i=0$ and $m_i=1$ for all $i$, i.e. $\nu=\rho$, contrary to the vanishing of the coefficient of $e^\rho$. Therefore $D=0$, which is the denominator identity. [L2, L3, step 2.1]

4.1 Triangular basis: every anti-invariant function is $\sum_\nu c_\nu A_\nu$ by step 3.1, the coefficient of $e^\nu$ in $A_\nu$ is $1$, and for strictly dominant $\nu'\ne\nu$ the coefficient of $e^\nu$ in $A_{\nu'}$ is nonzero only if $\nu$ lies in the Weyl orbit of $\nu'$, which for two strictly dominant weights forces $\nu'=\nu$; hence the matrix of coefficients is triangular with diagonal entries one and the $A_\nu$ form a $\mathbb Z$-basis of the anti-invariants. In particular no individual half-root or $\rho$ need be a character of the original $T$; all statements are made on the covering torus $T_p$. [A1, L2, step 3.1]∎
