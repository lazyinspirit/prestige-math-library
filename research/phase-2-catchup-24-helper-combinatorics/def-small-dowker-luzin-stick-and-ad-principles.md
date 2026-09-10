---
id: def-small-dowker-luzin-stick-and-ad-principles
kind: definition
title: "Luzin sets, stick, and almost-disjoint guessing at omega one"
status: draft
origin: pipeline
deps: [def-baire-sequence-space, def-diamond-on-omega-one, def-ostaszewski-club-principle, def-axiom-of-choice, thm-omega-one-is-the-least-uncountable-ordinal, thm-countable-subsets-of-omega-one-are-bounded]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Rinot–Shalev–Todorcevic, A new small Dowker space, Definitions 1.1, 2.10, 4.1 and Fact 4.2"
      url: https://arxiv.org/pdf/2209.10504
---

## Definition

Work in ZFC, with the choice axiom [[def-axiom-of-choice]]. Throughout this small-space construction, $\kappa=\omega_1$ and $E$ is the set of nonzero countable limit ordinals, equivalently $E^{\omega_1}_\omega$. This changes the preceding continuum-sized construction's notation. The facts that ordinals below $\omega_1$ are countable and countable subsets of $\omega_1$ are bounded are [[thm-omega-one-is-the-least-uncountable-ordinal]] and [[thm-countable-subsets-of-omega-one-are-bounded]]; their countable-choice hypothesis follows by restricting AC. Every nonzero countable limit has a cofinal increasing sequence: enumerate the ordinal, and successively choose an ordinal above the previous choice and the next enumerated value. Finite sets are bounded in a limit ordinal, so its cofinality is exactly $\omega$. A club is an unbounded subset containing its nonzero limit points below $\kappa$; a stationary set meets every club.

1. In Baire space $\mathcal N=\omega^\omega$ of [[def-baire-sequence-space]], write $\omega^{<\omega}$ for the finite strings and $N_t=\{x:t\subseteq x\}$ for a cylinder. The empty string gives $N_\varnothing=\mathcal N$. A set is nowhere dense when its closure has empty interior, and meager when it is a countable union of nowhere dense sets. A closed $F\subseteq\mathcal N$ is nowhere dense exactly when every cylinder has a subcylinder disjoint from $F$: an open complement meeting each cylinder gives such a subcylinder, and a cylinder in the interior would contradict the subcylinder condition. A **classical Luzin set** in $\mathcal N$, or in $\mathbb R$ with its usual topology, is an uncountable set meeting every meager set in an at most countable set. A set $L\subseteq\mathcal N$ of size $\aleph_1$ has the **$\omega_1$-Luzin cylinder property** if for every uncountable $B\subseteq L$ there is $t\in\omega^{<\omega}$ such that every finite extension $u\supseteq t$ is extended by an element of $B$. This says $B$ is dense in $N_t$; it is a separate definition from classical Luzin.

2. **Stick at $\omega_1$** asserts a sequence $(s_\xi)_{\xi<\kappa}$ of countably infinite subsets of $\kappa$ such that every uncountable $X\subseteq\kappa$ contains some $s_\xi$. Repetitions in the sequence are allowed. Empty and countable targets carry no requirement.

3. Let $\mathcal P$ be a partition of $E$ into stationary sets. An **AD guessing array for $\mathcal P$** is $(A_\alpha^i)_{\alpha\in E,\ i<\omega}$ with $A_\alpha^i\subseteq\alpha$ cofinal, with $A_\alpha^i\cap A_\alpha^{i'}=\varnothing$ for $i\ne i'$, and with $A_\alpha^i\cap A_\beta^j$ bounded in $\alpha$ whenever $\alpha<\beta$ lie in $E$. Its guessing requirement is: for every $1\le r<\omega$, every list of uncountable sets $X_0,\ldots,X_{r-1}\subseteq\kappa$, and every $S\in\mathcal P$, the set

   $$\{\alpha\in S:(\forall i<\omega)(\forall j<r)\ \sup(A_\alpha^i\cap X_j)=\alpha\}$$

   is stationary. Lists may repeat targets. This is $\clubsuit_{\mathrm{AD}}(\mathcal P,\omega,<\omega)$, with bounded intersections, which need not be finite.

4. The **strong diagonal AD property** requires disjoint cofinal members in every row and finite intersections $A_\alpha^i\cap A_\beta^j$ for distinct row indices $\alpha\ne\beta$. For every sequence $(X_\nu)_{\nu<\kappa}$ of uncountable subsets of $\kappa$ and every $S\in\mathcal P$, it requires stationarity of

   $$\{\alpha\in S:(\forall i<\omega)(\forall\nu<\alpha)\ \sup(A_\alpha^i\cap X_\nu)=\alpha\}.$$

   This is the $\omega_1$ instance of $\clubsuit_{\mathrm{AD}^*}(\mathcal P,\omega,\omega_1)$. It implies clause 3: pad a finite list by $\kappa$, and intersect the stationary guessing set with the club tail above its length. Finite intersections are bounded in the nonzero limit indices.

5. A **single-ladder two-target AD system** consists of pairwise disjoint stationary sets $(S_n)_{1\le n<\omega}$ contained in $E$, with union $S$, and sets $A_\alpha\subseteq\alpha$ cofinal for $\alpha\in S$. For $\alpha<\beta$ in $S$, require $A_\alpha\cap A_\beta$ bounded in $\alpha$. For every two uncountable $X_0,X_1\subseteq\kappa$ and each $n\ge1$, require stationarily many $\alpha\in S_n$ with $\sup(A_\alpha\cap X_0)=\sup(A_\alpha\cap X_1)=\alpha$. An array in clause 3 on such a partition supplies this by taking its zeroth member, $A_\alpha=A_\alpha^0$. No order-type-$\omega$ requirement is imposed on these ladders.

These definitions assert no ZFC existence. Zero and successors are excluded as final ladder indices. Ordinary diamond is the subset-guessing principle of [[def-diamond-on-omega-one]], and Ostaszewski $\clubsuit$ is the uncountable-target containment principle of [[def-ostaszewski-club-principle]]. Ordinary club guessing tests club targets; this differs from testing all uncountable targets. Parameterized $\diamondsuit(\mathfrak b)$ is also a different principle, and is not an abbreviation for ordinary diamond here.
