---
id: lem-small-dowker-ch-gives-luzin-set
kind: lemma
title: "CH gives a Luzin set, and classical Luzin sets give the cylinder property"
status: draft
origin: pipeline
deps: [def-small-dowker-luzin-stick-and-ad-principles, def-axiom-of-choice, thm-countable-union-of-countable, thm-omega-one-is-the-least-uncountable-ordinal, thm-transfinite-recursion, cor-baire-sequence-space-is-homeomorphic-to-the-irrationals, thm-rationals-countable, lem-q-and-irrationals-dense-r]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Rinot–Shalev–Todorcevic, A new small Dowker space, Definition 2.10 and Fact 2.11, p.5; local classical-Luzin proof"
      url: https://arxiv.org/pdf/2209.10504
---

## Statement

Assume AC. CH implies a classical Luzin subset of Baire space of size $\aleph_1$, and hence a set with the $\omega_1$-Luzin cylinder property. Every uncountable classical Luzin set in Baire space has an $\aleph_1$-sized subset with that property. From every uncountable classical Luzin set in $\mathbb R$, an $\aleph_1$-sized subset of its irrational part pulls back to such a set in Baire space.

## Facts & Assumptions

**Given:** $\kappa=\omega_1$, Baire space $\mathcal N$, and AC; CH means $|\mathcal P(\omega)|=\aleph_1$.

[F1] The cylinder and classical Luzin definitions are [[def-small-dowker-luzin-stick-and-ad-principles]].

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] Countable unions of at most countable sets are at most countable under countable choice ([[thm-countable-union-of-countable]]).

[F3] $\omega_1$ is uncountable and all smaller ordinals are at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]]).

[F4] A set-valued rule on earlier values defines a function by transfinite recursion ([[thm-transfinite-recursion]]).

[F5] Baire space is homeomorphic to $\mathbb R\setminus\mathbb Q$ ([[cor-baire-sequence-space-is-homeomorphic-to-the-irrationals]]).

[F6] The rationals are countably infinite ([[thm-rationals-countable]]).

[F7] The irrational subspace is dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

## Proof

1.1 There are countably many finite strings: group them by the natural number $\operatorname{length}(t)+\sum_{i<\operatorname{length}(t)}t(i)$, each group being finite, and enumerate each group lexicographically. A closed set is determined by the cylinders disjoint from it, since these cylinders unite to its complement. Thus closed nowhere dense subsets of $\mathcal N$ inject into the powerset of a countable set. Under CH they can be listed as $(F_\beta)_{\beta<\kappa}$, with repetitions permitted; the family is nonempty since it contains $\varnothing$. [given, F1, F3]

1.2 Let $K\subseteq\mathbb R$ be uncountable classical Luzin and put $I=\mathbb R\setminus\mathbb Q$. Then $K\cap I$ is uncountable by F2 and F6. If $H\subseteq I$ is nowhere dense in $I$, its real closure is nowhere dense in $\mathbb R$: an open interval inside $\overline H^{\mathbb R}$ would, by density F7, have nonempty relatively open trace on $I$ inside $\overline H^I=I\cap\overline H^{\mathbb R}$, a contradiction. Consequently each meager subset of $I$ is contained in a meager subset of $\mathbb R$, by taking real closures of its nowhere dense pieces. Therefore $K\cap I$ is classical Luzin in $I$. [A1, F1, F2, F6, F7]

2.1 A countable sequence $(H_n)$ of closed nowhere dense sets misses a point of every cylinder $N_s$. Starting with $t_0=s$, choose $t_{n+1}\supseteq t_n$ of length greater than both $n$ and $\operatorname{length}(t_n)$ with $N_{t_{n+1}}\cap H_n=\varnothing$. Such an extension exists by nowhere density; use the least eligible string in the enumeration of step 1.1. The union $x=\bigcup_n t_n$ is a total sequence extending $s$, and $x\notin H_n$ for every $n$. Singletons are closed nowhere dense: a different next digit refines any cylinder containing their point to a disjoint cylinder. [F1, F4, step 1.1]

3.1 Use AC once to fix a choice function on all nonempty subsets of $\mathcal N$. By recursion choose $g_\alpha$ outside $\bigcup_{\beta\le\alpha}F_\beta\cup\{g_\beta:\beta<\alpha\}$. At stage $\alpha<\kappa$ the forbidden family consists of countably many closed nowhere dense sets by F3, including the old singletons, so step 2.1 proves the complement nonempty. The fixed choice function makes the recursion rule single-valued (on invalid histories give any fixed sequence). Hence $L=\{g_\alpha:\alpha<\kappa\}$ has size $\aleph_1$. This is the exact transfinite witness-selection use of AC. [A1, F3, F4, step 1.1, step 2.1]

4.1 For each $\beta$, all $g_\alpha$ with $\alpha\ge\beta$ avoid $F_\beta$, so $L\cap F_\beta\subseteq\{g_\alpha:\alpha<\beta\}$ is countable. If $M=\bigcup_n M_n$ is meager, each $\overline{M_n}$ is closed nowhere dense; apply the preceding conclusion and F2 to $L\cap M\subseteq\bigcup_n(L\cap\overline{M_n})$. Countable choice in F2 follows by restriction of A1. Thus $L$ is classical Luzin. [A1, F1, F2, F3, step 3.1]

4.2 If $L'$ is any classical Luzin set in $\mathcal N$ and $B\subseteq L'$ is uncountable, $\overline B$ cannot have empty interior: otherwise it is a nowhere dense set meeting $L'$ in the uncountable set $B$. Its interior therefore contains some $N_t$. Every $N_u$ with $u\supseteq t$ meets $B$, since each of its points belongs to $\overline B$ and $N_u$ is an open neighborhood. From an arbitrary uncountable $L'$ select $\kappa$ distinct points by the recursion of step 3.1, now merely excluding previous points; F3 ensures that these never exhaust $L'$. Its resulting $\aleph_1$-sized subset is classical Luzin and has the cylinder property just proved. [A1, F1, F3, F4, step 3.1]

5.1 For the homeomorphism $h:\mathcal N\to I$ of F5, images and preimages preserve closures and interiors (apply continuity of both inverse maps to the definitions), hence preserve nowhere density and countable unions of nowhere dense sets. Thus $h^{-1}[K\cap I]$ is an uncountable classical Luzin set in $\mathcal N$. Apply step 4.2 and take the image of its $\aleph_1$-sized subset to obtain the stated real-line subset and pullback. Together with steps 4.1 and 4.2 this proves every asserted branch. [F1, F5, step 4.1, step 4.2, step 1.2] ∎
