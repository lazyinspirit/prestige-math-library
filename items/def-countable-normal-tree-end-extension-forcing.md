---
id: def-countable-normal-tree-end-extension-forcing
kind: definition
title: "Countable normal-tree end-extension forcing"
status: draft
origin: pipeline
deps: [def-normal-splitting-set-theoretic-tree, def-forcing-preorder-compatibility-and-filter, def-countable, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorem 4.25, complete forcing definition and proof, printed p. 25"
      url: https://karagila.org/files/Forcing-2023.pdf
    - title: "Monk, Set theory following Jech, special normal trees before Lemma 15.31 and Theorem 15.38, printed pp. 271-275"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

Let

$$\mathcal S=\bigcup_{\beta<\omega_1}{}^\beta\omega$$

be the fixed set of all countable-ordinal-length sequences of natural numbers,
ordered by proper initial segment. For $t\in{}^\beta\omega$ and $\gamma\le\beta$,
write $t\mathbin{\upharpoonright}\gamma$ for its restriction, and write
$t^\frown\langle n\rangle$ for the one-term extension by $n$.

The **countable normal-tree end-extension forcing** $\mathbb P_{\mathrm{ST}}$
consists of pairs $p=(\alpha_p,T_p)$ satisfying all of the following.

1. $\alpha_p<\omega_1$ and $T_p$ is a countable subset of
   $\bigcup_{\beta\le\alpha_p}{}^\beta\omega$.
2. The level $(T_p)_\beta:=T_p\cap{}^\beta\omega$ is nonempty for every
   $\beta\le\alpha_p$, and every $t\in T_p$ has domain at most $\alpha_p$.
   Thus the tree has successor height $\alpha_p+1$ and top level
   $(T_p)_{\alpha_p}$.
3. $T_p$ is closed under restrictions: if $t\in T_p$ and
   $\gamma\le\operatorname{dom}(t)$, then
   $t\mathbin{\upharpoonright}\gamma\in T_p$. Its tree order is proper initial
   segment, so the unique root is the empty function.
4. If $t\in(T_p)_\beta$ and $\beta\le\gamma\le\alpha_p$, some
   $u\in(T_p)_\gamma$ extends $t$.
5. If $t\in(T_p)_\beta$ and $\beta<\alpha_p$, then
   $t^\frown\langle n\rangle\in(T_p)_{\beta+1}$ for every $n<\omega$.

Clauses 2-4 make $T_p$ normal in the published sense
([[def-normal-splitting-set-theoretic-tree]]): uniqueness at a nonzero limit is
automatic because two functions with the same restrictions to all smaller
ordinals are equal. Clause 5 is the stronger $\omega$-splitting form of the
published two-successor requirement. It is imposed only below the top level,
where a condition has room for a next level.

For conditions $p,q$, define

$$q\le p\quad\Longleftrightarrow\quad \alpha_p\le\alpha_q\ \text{ and }\ T_p=T_q\cap\bigcup_{\beta\le\alpha_p}{}^\beta\omega.$$

Thus $q$ is stronger exactly when it **end extends** $p$: every old level and
every old predecessor relation is literally unchanged, and only higher levels
may be added. This relation is reflexive, transitive, and antisymmetric, so it is
a forcing partial order under the stronger-is-smaller convention of
[[def-forcing-preorder-compatibility-and-filter]]. It is nonempty: the condition
$(0,\{\varnothing\})$ has one root/top node, and its splitting clause is
vacuous.

## Remarks

**Why the top level is part of every condition.** Requiring successor height
means that every condition has a last level on which later construction can
attach new branches. The raw union of an increasing sequence of condition trees
may have limit height and no last level; proving countable closure therefore
requires adding a new top level, not merely taking that union.

**Why the coding is fixed.** The sequence carrier makes restriction literal.
Without fixed level coding, “end extension” only up to an unnamed isomorphism
would not determine a coherent generic union.

**Choice ledger.** Forming the poset and checking the singleton condition make
no choice. The ZFC/AC dependency records the next theorem's simultaneous
enumerations of countable levels and branch extensions; those uses will be
identified where they occur, rather than being hidden in this definition.
