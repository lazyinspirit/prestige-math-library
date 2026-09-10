---
id: lem-small-dowker-stick-gives-ad-guessing
kind: lemma
title: "Stick gives strong diagonal almost-disjoint guessing"
status: draft
origin: pipeline
deps: [def-small-dowker-luzin-stick-and-ad-principles, def-axiom-of-choice, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal, thm-transfinite-recursion, thm-diagonal-intersection-of-clubs]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Rinot–Shalev–Todorcevic, A new small Dowker space, Fact 4.2 and Theorem 4.3, pp.11–12"
      url: https://arxiv.org/pdf/2209.10504
    - title: "Chen–Garti–Weinert, Cardinal characteristics of the continuum and partitions, Claim 3.2, pp.15–16"
      url: https://arxiv.org/pdf/1801.00238
---

## Statement

Assume AC and stick at $\omega_1$. For every partition $\mathcal P$ of $E=E^{\omega_1}_\omega$ into stationary sets there is an AD guessing array with the strong diagonal property: its members are cofinal and disjoint within each row, cross-row intersections are finite, and every $\omega_1$-sequence of uncountable targets is guessed simultaneously below the row index stationarily often on every part. In particular the finite-target AD property holds.

## Facts & Assumptions

**Given:** $\kappa=\omega_1$, a stick sequence $(s_\xi)_{\xi<\kappa}$, and a stationary partition $\mathcal P$ of $E$.

[F1] Stick and both AD properties have the meanings of [[def-small-dowker-luzin-stick-and-ad-principles]].

[A1] AC allows simultaneous choices from nonempty families ([[def-axiom-of-choice]]).

[F2] A countable union of countable sets is countable under the countable-choice consequence of A1 ([[thm-countable-union-of-countable]]).

[F3] Countable subsets of $\kappa$ are bounded under that same choice assumption ([[thm-countable-subsets-of-omega-one-are-bounded]]).

[F4] Every $\alpha<\kappa$ is countable and $\kappa$ is uncountable ([[thm-omega-one-is-the-least-uncountable-ordinal]]).

[F5] Rules determined from earlier values admit transfinite recursion ([[thm-transfinite-recursion]]).

[F6] The diagonal intersection of clubs on a regular uncountable cardinal is club ([[thm-diagonal-intersection-of-clubs]]).

## Proof

1.1 Set $x_\gamma=\bigcup_{\xi\in s_\gamma}s_\xi$. Each is countably infinite by F2. We prove that this single sequence, fixed independently of later targets, has the following stronger property: for every sequence $(H_\alpha)_{\alpha<\kappa}$ of countable sets with pairwise finite intersections, and every uncountable $X\subseteq\kappa$, some $x_\gamma\subseteq X$ has infinite remainder after removal of any finite union of the $H_\alpha$. For these fixed $H,X$, recursively choose $s_{\xi_i}\subseteq X$ disjoint from all earlier $s_{\xi_j}$ and all earlier selected $H_{\zeta_j}$, for $i<\kappa$; let $\zeta_i$ be the least $\alpha$ for which $H_\alpha\cap s_{\xi_i}$ is infinite, if one exists. At each stage the excluded union is countable by F2 and F4, so the remaining target is uncountable and stick supplies a choice; choose the least eligible stick index. F5 gives the recursion. The $\xi_i$ are distinct, as are the defined $\zeta_i$. [given, F1, A1, F2, F4, F5]

2.1 Apply stick to the uncountable set $\{\xi_i:i<\kappa\}$ and take $s_\gamma$ contained in it. Then $x_\gamma\subseteq X$. Suppose $x_\gamma\setminus\bigcup_{\alpha\in a}H_\alpha$ were finite for some finite $a$. For each of the infinitely many $i$ with $\xi_i\in s_\gamma$, the infinite set $s_{\xi_i}$ is almost contained in that finite union, so it meets some member infinitely and $\zeta_i$ is defined. Moreover $H_{\zeta_i}\cap s_{\xi_i}$ is infinite and almost contained in the same finite union; it meets some $H_\alpha$, $\alpha\in a$, infinitely. Pairwise finite intersections force $\zeta_i=\alpha\in a$. This puts infinitely many distinct $\zeta_i$ in the finite set $a$, an impossibility. Thus the strengthened property holds, including the empty finite union. [F1, step 1.1]

3.1 Fix a bijection $\pi:\omega\to\omega\times\omega$ by listing pairs in successive finite diagonals, and write its coordinates as $\pi_0,\pi_1$. Using AC and F4, choose surjections $q_\alpha:\omega\to\alpha$ for every $0<\alpha<\kappa$. Also choose increasing cofinal $\omega$-ladders for all $\alpha\in E$: from $q_\alpha$ choose successively a point above the preceding point and $q_\alpha(n)$, which is possible because $\alpha$ is limit. Recursively define countable $A_\alpha\subseteq\alpha$, starting with $A_0=\varnothing$ and setting $A_{\eta+1}=\{\eta\}$. At $\alpha\in E$, for each $j<\omega$ put $Y_{\alpha,j}=(x_{q_\alpha(\pi_0(j))}\cap\alpha)\setminus\bigcup_{j'\le j}A_{q_\alpha(j')},\qquad J_\alpha=\{j:Y_{\alpha,j}\text{ is infinite}\}.$ In increasing order of $j\in J_\alpha$ select the least $\xi_{\alpha,j}\in Y_{\alpha,j}$ different from all earlier selections. Only finitely many selections precede stage $j$, so the choice exists. Put $R_\alpha^i=\{\xi_{\alpha,j}:j\in J_\alpha,\pi_1(j)=i\}$. If all these sets are cofinal in $\alpha$, call $\alpha$ good and set $A_\alpha^i=R_\alpha^i$, $A_\alpha=\bigcup_iR_\alpha^i$. Otherwise let $A_\alpha$ be the fixed cofinal ladder and partition it into countably many disjoint infinite subsets $A_\alpha^i$, using the fibers of $\pi_0$ on its increasing enumeration. Each is cofinal. The data and least-choice rules make this an instance of F5. [A1, F4, F5, step 2.1]

4.1 Each final limit row is cofinal and disjoint. For $\beta<\alpha$, if $\alpha$ is a successor, $A_\alpha$ is a singleton; if it is a nongood limit, its increasing ladder meets $\beta$ in a finite set. If it is good, choose $j'$ with $q_\alpha(j')=\beta$. For every $j\in J_\alpha$ with $j\ge j'$, the definition of $Y_{\alpha,j}$ excludes $A_\beta$. Thus $A_\alpha\cap A_\beta$ is contained in the finite set of selections at indices $j<j'$. Consequently $(A_\alpha)_{\alpha<\kappa}$ satisfies the hypothesis on $H$ in step 2.1. [step 3.1]

5.1 Fix an uncountable $X\subseteq\kappa$. For each $\epsilon<\kappa$, apply step 2.1 to the now completed sequence $H_\alpha=A_\alpha$ and to $X\setminus(\epsilon+1)$, which is uncountable by F4. Choose the least $\beta_\epsilon$ such that $x_{\beta_\epsilon}\subseteq X\setminus(\epsilon+1)$ has infinite remainder after every finite union of the $A_\alpha$. F3 supplies an ordinal $F(\epsilon)<\kappa$ strictly above $\beta_\epsilon$ and every member of $x_{\beta_\epsilon}$. The set $D_X=\{\delta\in E:(\forall\epsilon<\delta)\ F(\epsilon)<\delta\}$ is club. To prove unboundedness above any $b<\kappa$, recursively take increasing countable ordinals $a_n$ above $b$ such that $a_{n+1}>F(\epsilon)$ for all $\epsilon<a_n$; F2–F4 keep this possible. Their supremum $\delta<\kappa$ belongs to $E$ and closes under $F$. For closedness, if $\delta$ is a limit point of $D_X$ and $\epsilon<\delta$, take $\eta\in D_X$ with $\epsilon<\eta<\delta$; then $F(\epsilon)<\eta<\delta$. [A1, F2, F3, F4, F5, step 2.1, step 4.1]

6.1 For $\delta\in D_X$, $i<\omega$ and $b<\delta$, choose $b<\epsilon<\delta$. Then $\beta_\epsilon<\delta$ and $x_{\beta_\epsilon}\subseteq\delta$. Choose $k$ with $q_\delta(k)=\beta_\epsilon$ and the unique $j$ with $\pi(j)=(k,i)$. The set $Y_{\delta,j}$ is exactly $x_{\beta_\epsilon}$ minus a finite union of earlier $A$ sets, hence is infinite. Thus $j\in J_\delta$ and $\xi_{\delta,j}\in R_\delta^i\cap X$ lies above $b$. Every $R_\delta^i$ meets $X$ cofinally, so $\delta$ is good and $\sup(A_\delta^i\cap X)=\delta$ for all $i$. In particular the recursive replacement rule has not removed these guesses. [step 3.1, step 5.1]

7.1 Finally, given $(X_\nu)_{\nu<\kappa}$, obtain the clubs $D_{X_\nu}$ from step 5.1 and let $D$ be their diagonal intersection. The boundedness property F3 together with F4 says $\kappa$ is regular uncountable, so F6 applies. For $\delta\in D\cap E$ and $\nu<\delta$, $\delta\in D_{X_\nu}$; step 6.1 gives $\sup(A_\delta^i\cap X_\nu)=\delta$ for every $i$. Intersect $D\cap E$ with any stationary $S\in\mathcal P$; this is stationary, because it meets every club after a finite club intersection (or directly because the intersection of two clubs is club). Cofinality, disjointness and finite cross-row intersections are step 4.1. This is precisely the strong diagonal property, whose finite-target consequence is F1, clause 4. [F1, F3, F4, F6, step 4.1, step 5.1, step 6.1] ∎
