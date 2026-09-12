---
id: lem-small-dowker-luzin-gives-tight-coloring
kind: lemma
title: "A Luzin cylinder set gives a tight strongly unbounded coloring"
status: published
origin: pipeline
deps: [def-small-dowker-luzin-stick-and-ad-principles, def-small-dowker-tight-strongly-unbounded-coloring, def-axiom-of-choice, thm-countable-union-of-countable]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Rinot–Shalev–Todorcevic, A new small Dowker space, Lemma 2.12 and Claims 2.12.1–2, p.5"
      url: https://arxiv.org/pdf/2209.10504
---

## Statement

Assume AC. If $L\subseteq\omega^\omega$ has size $\aleph_1$ and the Luzin cylinder property, there is an injective-column tight strongly unbounded coloring $c:\omega\times\omega_1\to\omega$. In fact $\mathcal T_c$ has a countable downward cofinal family.

## Facts & Assumptions

**Given:** Such a set $L$ and $\kappa=\omega_1$.

[F1] Every uncountable subset of $L$ is dense in some cylinder ([[def-small-dowker-luzin-stick-and-ad-principles]], clause 1).

[F2] Strong unboundedness, $[T]_c$, $\mathcal T_c$ and tightness have the quantified definitions of [[def-small-dowker-tight-strongly-unbounded-coloring]].

[A1] Assume [[def-axiom-of-choice]]; in particular countable choice is available.

[F3] Under countable choice a countable union of countable sets is countable ([[thm-countable-union-of-countable]]).

## Proof

1.1 Enumerate $L$ bijectively as $(g_\beta)_{\beta<\kappa}$ and define $c_\beta=g_\beta$. For an uncountable $B\subseteq\kappa$, injectivity makes $\{g_\beta:\beta\in B\}$ uncountable. Choose its cylinder witness $t$ from F1 and put $n=\operatorname{length}(t)$. For each $m<\omega$, the extension $t^{\frown}(m)$ is a prefix of some $g_\beta$ with $\beta\in B$. Hence $\{c_\beta(n):\beta\in B,t\subseteq c_\beta\}=\omega$, proving strong unboundedness, including when $t$ is empty. [given, F1, F2]

2.1 Fix $T\in\mathcal T_c$ and $B=[T]_c$. For each finite string $t$ set $B_t=\{\beta\in B:t\subseteq g_\beta\}$. Finite strings form a countable set: their length plus sum of entries stratifies them into finite sets. Remove $N=\bigcup\{B_t:B_t\text{ is countable}\}$ from $B$. By F3, using precisely the countable-choice consequence of A1, $N$ is countable; therefore $B'=B\setminus N$ is uncountable. [A1, F2, F3, step 1.1]

3.1 Apply F1 to the columns indexed by $B'$ and choose $s$ such that every extension of $s$ occurs among them. Put $T_s=\{t:t\subseteq s\text{ or }s\subseteq t\}$. Every extension of $s$ belongs to $T$, being a prefix of a column in $[T]_c$. Every prefix of $s$ also belongs to $T$, by taking one such column extending $s$. Thus $T_s\subseteq T$, without requiring that $T$ itself be prefix-closed. [F1, F2, step 2.1]

4.1 Some $\beta\in B'$ has $s\subseteq g_\beta$. Since $\beta\notin N$, $B_s$ is uncountable. Every column extending $s$ has all its prefixes comparable with $s$, so $B_s\subseteq[T_s]_c$ and $T_s\in\mathcal T_c$. The fixed family $\{T_s:s\in\omega^{<\omega},T_s\in\mathcal T_c\}$ is countable, and the inclusion and uncountability just proved show it is downward cofinal. This proves tightness with the stated stronger countable bound; injectivity was built into step 1.1. [F2, step 1.1, step 2.1, step 3.1] ∎
