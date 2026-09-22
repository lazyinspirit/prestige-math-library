---
id: lem-weyl-denominator-and-anti-invariant-orbit-sum-basis
kind: lemma
title: Weyl denominator and anti-invariant orbit sums
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-vector-rho, prop-weyl-vector-is-the-sum-of-fundamental-weights, def-character-and-cocharacter-lattices-of-a-torus, thm-analytic-and-root-system-weyl-groups-agree, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, thm-compact-connected-lie-groups-are-classified-by-root-data, def-axiom-of-choice, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-fundamental-weights, thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, prop-weyl-length-equals-positive-root-inversion-number, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part]
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

[L1] On the finite central cover the torus is $T_p=Z(G)^0\times T_{sc}$, with $X^*(T_{sc})=P$. Its roots lie in the semisimple character space E and form a reduced crystallographic Euclidean root system. The analytic Weyl group is the root-system Weyl group, acts trivially on central directions, and acts by $s_\alpha\mu=\mu-\langle\mu,\alpha^\vee\rangle\alpha$ ([[thm-compact-connected-lie-groups-are-classified-by-root-data]], [[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]], [[thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part]], [[thm-analytic-and-root-system-weyl-groups-agree]]).

[L2] Characters form the lattice $X^*(T_p)$. In E, $\rho=\tfrac12\sum_{\alpha>0}\alpha=\sum_i\omega_i$ and $\langle\rho,\alpha_i^\vee\rangle=1$. Fundamental weights form the basis of P dual to simple coroots ([[def-character-and-cocharacter-lattices-of-a-torus]], [[def-weyl-vector-rho]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]], [[def-fundamental-weights]], [[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[L3] Simple roots form a basis of E and every root has simple-root coordinates all of one sign; the Weyl group acts simply transitively on open chambers ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]]). Every Weyl-group element is a product of simple reflections ([[prop-weyl-length-equals-positive-root-inversion-number]]). Moreover $s_i$ permutes $\Phi^+\setminus\{\alpha_i\}$: if $\beta\in\Phi^+$ and $\beta\ne\alpha_i$, reducedness and the nonnegative simple-root expansion give a positive coefficient at some $\alpha_j$ with $j\ne i$; reflection by $s_i$ changes only the $\alpha_i$ coefficient, and since $s_i\beta$ is a root, its unchanged positive $\alpha_j$ coefficient forces all its coordinates to have the positive sign.

## Proof

**Proof technique:** orbit coefficients followed by the product expansion.

1.1 Write $X=X^*(T_p)$ and define $\mathbb Z[X]$ to be the free abelian group on symbols $e^\nu$, with $e^\mu e^\nu=e^{\mu+\nu}$. Thus its elements have finite support. W acts by $we^\nu=e^{w\nu}$. By [L1]–[L2], fundamental weights, extended trivially on the central factor, are characters of $T_p$; so is $\rho$. The formal algebra can also be viewed as finite integral combinations of characters: distinct group characters are linearly independent as functions. Indeed, a nontrivial relation of minimum positive length, translated by an element t and minus the original relation times one of its character values at t, gives a shorter nontrivial relation if two of its distinct characters differ at t. Such t exists by distinctness; a relation of length one is impossible since characters never vanish. [L1, L2, algebra]

1.2 A weight is singular if its semisimple component lies on a root hyperplane; the corresponding reflection fixes the full weight by [L1]. Otherwise that component lies in an open chamber. The chamber theorem [L3] then gives a unique strictly dominant point in its W-orbit, and a trivial stabilizer: a fixing element fixes the chamber containing the component and is the identity. Central coordinates are unchanged. Here strictly dominant means all simple-coroot pairings are positive. If the root system is empty this condition is vacuous, W is trivial and every character is regular and strictly dominant. [L1, L3]

1.3 Put $F=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})$. The simple reflection $s_i$ permutes all positive roots except $\alpha_i$ and has $s_i\rho=\rho-\alpha_i$, by [L2]–[L3]. Thus $s_iF=e^{\rho-\alpha_i}(1-e^{\alpha_i})\prod_{\alpha>0,\alpha\ne\alpha_i}(1-e^{-\alpha})=-F$. Since simple reflections generate W, $wF=\det(w)F$ for every w. Each factor is formal in the integral group algebra and no division or evaluation at a singular torus element is involved. [L1, L2, L3]

2.1 For an anti-invariant element $f=\sum_\mu a_\mu e^\mu$, coefficient comparison gives $a_{w\mu}=\det(w)a_\mu$. If a reflection fixes $\mu$, then $a_\mu=-a_\mu$ in $\mathbb Z$, so $a_\mu=0$. Step 1.2 therefore partitions its support into regular orbits, each with one strictly dominant representative $\nu$ and no repetitions in $A_\nu=\sum_w\det(w)e^{w\nu}$. Its contribution is exactly $a_\nu A_\nu$. These orbit sums are anti-invariant by reindexing, have disjoint supports, and have coefficient 1 at their strictly dominant representative. Hence they form a $\mathbb Z$-basis of all anti-invariant elements. [step 1.1, step 1.2, algebra]

2.2 Expanding F gives $\sum_{S\subseteq\Phi^+}(-1)^{|S|}e^{\rho-\sum_{\alpha\in S}\alpha}$. Every exponent is at most $\rho$ in root order, meaning their difference is a nonnegative integral sum of simple roots by [L3]. The coefficient at $\rho$ is exactly 1: a nonempty subset of positive roots has a nonzero sum by their one-sign coordinates and linear independence. All exponents lie in E, so their central component is zero. [L2, L3, step 1.3]

3.1 Apply the basis of step 2.1 to the anti-invariant F from step 1.3. If a strictly dominant $\nu$ has a nonzero coefficient, it is itself in the support and step 2.2 gives $\rho-\nu=\sum_i n_i\alpha_i$ with $n_i\ge0$ and $\nu\in E$. Set $\delta=\nu-\rho$. Its simple-coroot pairings are nonnegative, because those of $\nu$ are positive integers and those of $\rho$ equal 1. Therefore $(\alpha_i,\delta)\ge0$ for each i in the positive definite Euclidean metric of [L1]. But $$-\|\delta\|^2=(\rho-\nu,\delta)=\sum_i n_i(\alpha_i,\delta)\ge0,$$ forcing $\delta=0$ and $\nu=\rho$. The coefficient at $\rho$ in step 2.2 is 1, so $F=A_\rho$. This derives the identity without assuming any dominance assertion about $\rho-w\rho$. [L1, L2, step 1.3, step 2.1, step 2.2]

4.1 Step 3.1 proves the denominator identity and step 2.1 proves the basis assertion. For empty roots, $\rho=0$, the empty product and $A_0$ both equal 1, and the orbit-sum basis is the full character basis, including all central characters. The construction needs $\rho$ to be a character only of $T_p$, not of the original torus T. All assertions concern finite integral combinations, not all functions on the torus. Choice enters through the supplied covering and compact root theory. [A1, L1, L2, step 2.1, step 3.1] ∎
