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
running over the strictly dominant characters of $T_p$, form a
$\mathbb Z$-basis of the anti-invariant part of the integral group algebra
$\mathbb Z[X^*(T_p)]$ (equivalently, of the finite integral linear
combinations of characters that are anti-invariant under $W$).

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, the pair $(G,T)$, the finite central covering $p:Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$ with maximal torus $T_p$, the root system $\Phi$ and the Weyl vector $\rho$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the covering and root-data theory of [L1].

[L1] The derived factor $G_{\mathrm{der}}^{\mathrm{sc}}$ is simply connected with character lattice $P$, and $T_p$ is the product of $Z(G)^0$ with the maximal torus of the derived factor; the Weyl group of the pair acts on the character lattice by $w\mu=\mu-\langle\mu,\ldots\rangle$, the reflections act integrally, and $\langle\rho,\alpha_i^\vee\rangle=1$ for the simple roots ([[thm-compact-connected-lie-groups-are-classified-by-root-data]], [[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]], [[thm-analytic-and-root-system-weyl-groups-agree]]).

[L2] The characters of $T_p$ form the lattice $X^*(T_p)$, and $\mathbb Z[X^*(T_p)]$ is its integral group algebra with basis symbols $e^\nu$; every root $\alpha$ and every fundamental weight $\omega_i$, hence also $\rho=\sum_i\omega_i$, belongs to $X^*(T_p)$. For regular $\nu$, the alternating sum $A_\nu$ is anti-invariant and satisfies $A_{w\nu}=\det(w)A_\nu$ ([[def-character-and-cocharacter-lattices-of-a-torus]], [[def-weyl-vector-rho]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]]).

[L3] Dominance order: $\mu\le\nu$ means $\nu-\mu$ is a nonnegative integral combination of simple roots; pairing with the fundamental coweights recovers the coefficients: $\langle\alpha_j,\omega_i^\vee\rangle=\delta_{ij}$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]], [[def-fundamental-weights]]).

## Proof

**Proof technique:** direct.

1.1 On $T_p$ the fundamental weights are characters by [L1] and [L2], hence so is $\rho=\sum_i\omega_i$. Both sides of the displayed identity are anti-invariant under every simple reflection. This is immediate for $A_\rho$. For the product, $s_i$ permutes the positive roots other than $\alpha_i$, sends $\alpha_i$ to $-\alpha_i$, and satisfies $s_i\rho=\rho-\alpha_i$; therefore $s_i(e^\rho\prod_{\alpha>0}(1-e^{-\alpha}))=e^{\rho-\alpha_i}(1-e^{\alpha_i})\prod_{\alpha>0,\alpha\ne\alpha_i}(1-e^{-\alpha})=-e^\rho\prod_{\alpha>0}(1-e^{-\alpha})$. [L1, L2]

2.1 The right-hand side expands as $e^{\rho}\prod_{\alpha>0}(1-e^{-\alpha})=\sum_{S\subseteq\Phi^+}(-1)^{|S|}e^{\rho-\sigma_S}$ with $\sigma_S=\sum_{\alpha\in S}\alpha$; every exponent is of the form $\rho-\sigma$ with $\sigma$ a sum of distinct positive roots, hence $\le\rho$ in dominance order, with equality only for $S=\varnothing$, where the coefficient is $1$. So the difference $D$ between the two sides of the identity is anti-invariant with all exponents strictly below $\rho$ in dominance order, and the coefficient of $e^\rho$ in $D$ is zero. [L1, L3, step 1.1]

3.1 Every anti-invariant element of $\mathbb Z[X^*(T_p)]$ is a finite sum $\sum_\nu c_\nu A_\nu$ over strictly dominant $\nu$: anti-invariance forces the coefficient of a singular weight to vanish (a reflection fixes that weight and negates its coefficient), and on each regular Weyl orbit all coefficients are determined, with the signs $\det(w)$, by the coefficient at its unique strictly dominant representative. If such a sum has all exponents $\le\rho$ and none equal to $\rho$, then all $c_\nu$ vanish. Indeed, if a strictly dominant $\nu$ occurs and $\rho-\nu=\sum_i n_i\alpha_i$ with $n_i\ge0$, write $\nu=\rho+\delta$, where $\delta$ is dominant because $\langle\delta,\alpha_i^\vee\rangle=\langle\nu,\alpha_i^\vee\rangle-1\ge0$. If $\delta\ne0$, then $0>(-\delta,\delta)=(\rho-\nu,\delta)=\sum_i n_i(\alpha_i,\delta)\ge0$, a contradiction; hence $\delta=0$ and $\nu=\rho$. Since the coefficient of $e^\rho$ in $D$ vanishes, $D=0$, proving the denominator identity. [L1, L2, L3, step 2.1]

4.1 By the orbit-by-orbit argument of step 3.1, the $A_\nu$ span the anti-invariant part of $\mathbb Z[X^*(T_p)]$. Their supports are disjoint regular Weyl orbits and the coefficient of $e^\nu$ in $A_\nu$ is $1$, so they are linearly independent and form the asserted $\mathbb Z$-basis. In particular no individual half-root or $\rho$ need be a character of the original $T$; all statements are made on the covering torus $T_p$. [A1, L2, step 3.1]∎
