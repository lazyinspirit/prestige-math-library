---
id: def-two-step-forcing-iteration
kind: definition
title: Two-step forcing iterations
status: draft
origin: pipeline
deps: [thm-forcing-theorem, def-forcing-preorder-compatibility-and-filter]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Definition 6.1 and its set-size remark", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

Let $P$ be a set-sized forcing preorder with largest condition and let $\dot Q$
be a $P$-name such that $1_P\Vdash\dot Q$ is a nonempty forcing preorder with
largest condition. Put $S_0=\operatorname{dom}(\dot Q)$, where the domain is
the set of names occurring as first coordinates in $\dot Q$, and recursively
put
$$S_{n+1}=S_n\cup\bigcup_{\sigma\in S_n}\operatorname{dom}(\sigma),\qquad U=\bigcup_{n<\omega}S_n.$$
Thus $U$ contains every immediate subname of each $\sigma\in
\operatorname{dom}(\dot Q)$ and is closed under immediate subnames. It is a
set of $P$-names in the ground model. Let $R$ be the set of all $P$-names
$\rho\subseteq U\times P$; Power Set and Separation make $R$ a set, without
Choice. The **two-step iteration** $P*\dot Q$ is the set of pairs
$(p,\dot q)\in P\times R$ such that $p\Vdash\dot q\in\dot Q$, ordered by

$$(p,\dot q)\le(p',\dot q')\quad\Longleftrightarrow\quad p\le_Pp'\ \text{and}\ p\Vdash\dot q\le_{\dot Q}\dot q'.$$

Names forced equal below $p$ represent equivalent second coordinates at $p$;
substitution into the displayed order is valid because forcing respects
equality. Reflexivity and transitivity follow from the forced preorder axioms.

Under AC, this set-sized convention represents every condition in the
unrestricted local-name convention. If $p\Vdash\dot\tau\in\dot Q$, then below
$p$ it is dense to force $\dot\tau=\sigma$ for some
$\sigma\in\operatorname{dom}(\dot Q)$, by the forcing membership clause.
Choose a maximal antichain $C$ below $p$ inside that dense set and, for each
$c\in C$, one such $\sigma_c$. Mix the $\sigma_c$ along $C$: retain a pair
$(\nu,s)$ whenever $(\nu,t)\in\sigma_c$ for some $c\in C$ and
$s\le c,t$. Every $\nu$ used is an immediate subname of a $\sigma_c$, so
the mixed name $\rho$ lies in $R$. For each $c\in C$,
$c\Vdash\rho=\sigma_c=\dot\tau$; predensity of $C$ below $p$ gives
$p\Vdash\rho=\dot\tau$. Hence $(p,\rho)$ is equivalent to the original
local condition, and the restricted iteration is dense/equivalent to that
convention. The same construction at $p=1_P$ supplies a name in $R$ for the
forced largest condition of $\dot Q$. The set carrier and order exist in ZF;
the maximal-antichain and simultaneous-mixing claim here uses AC. This
definition makes no generic-factorization or chain-condition assertion.
