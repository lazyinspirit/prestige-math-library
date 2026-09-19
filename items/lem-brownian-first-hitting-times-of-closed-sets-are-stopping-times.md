---
id: lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times
kind: lemma
title: "Brownian closed-set hitting times are stopping times"
status: draft
origin: pipeline
deps: [def-continuous-time-stopping-time, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, def-wiener-measure-on-continuous-path-space, thm-existence-of-continuous-brownian-motion, def-continuous-time-filtration-and-all-pairs-martingale, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.3.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Theorem 6.15"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion all of whose
paths are continuous, as in the canonical path-space realization of
[[def-wiener-measure-on-continuous-path-space]]. Let $C\subseteq\mathbb R$ be a
closed set, with $\operatorname{dist}(x,\emptyset):=+\infty$, and put
$$\tau_C:=\inf\{t\ge0:B_t\in C\},\qquad\inf\emptyset:=+\infty .$$
Then $\tau_C$ is a stopping time for the raw natural filtration
$(\mathcal F^0_t)$ [[def-natural-and-usual-augmented-brownian-filtrations]];
consequently it is a stopping time for the usual augmentation
$(\mathcal F_t)$ and for every filtration containing $(\mathcal F^0_t)$. The
conclusion uses neither right-continuity of the filtration nor a separation
assumption at time zero.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ with continuous paths, and a closed set $C\subseteq\mathbb R$.

[F1] A stopping time for a filtration is a map $\tau$ with $\{\tau\le t\}\in\mathcal F_t$ for all $t\ge0$; larger filtrations keep the property. [[def-continuous-time-stopping-time]] [[def-continuous-time-filtration-and-all-pairs-martingale]]

[F2] The raw natural filtration is $\mathcal F^0_t=\sigma(B_s:0\le s\le t)$, and the usual augmentation contains it. [[def-natural-and-usual-augmented-brownian-filtrations]]

[F3] By the explicit all-path-continuity hypothesis in the statement, $t\mapsto B_t(\omega)$ is continuous on $[0,\infty)$ for every $\omega$.  The distance function $x\mapsto\operatorname{dist}(x,C)$ is continuous with $\operatorname{dist}(x,C)=0$ exactly on $C$ because $C$ is closed.

[F4] A continuous image of a compact interval is compact, and every sequence in a compact subset of $[0,t]$ has a convergent subsequence; measurable functions build the events below out of countably many coordinate events. [[def-continuous-time-filtration-and-all-pairs-martingale]]

[F5] The canonical coordinate process under Wiener measure is a standard Brownian motion with continuous paths. [[def-wiener-measure-on-continuous-path-space]] [[thm-existence-of-continuous-brownian-motion]]

[F6] AC is declared because the ambient Brownian construction assumes it. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Fix $t\ge0$ and put $G_t:=\bigcap_{n\ge1}\bigcup_{q\in\mathbb Q\cap[0,t]}\{\operatorname{dist}(B_q,C)<1/n\}$. If for every $n$ there is $q_n\in\mathbb Q\cap[0,t]$ with $\operatorname{dist}(B_{q_n},C)<1/n$, then $[0,t]$ is compact so a subsequence $q_{n_k}$ converges to some $q^\ast\in[0,t]$; continuity of the path and of the distance give $0\le\operatorname{dist}(B_{q^\ast},C)\le\liminf_k\bigl(\operatorname{dist}(B_{q^\ast},C)-\operatorname{dist}(B_{q_{n_k}},C)\bigr)+\limsup_k1/n_k=0$, hence $\operatorname{dist}(B_{q^\ast},C)=0$ and $B_{q^\ast}\in C$ by [F3], so $\tau_C\le q^\ast\le t$. Thus $G_t\subseteq\{\tau_C\le t\}$. [F3, F4, given]

2.1 Conversely suppose $\tau_C\le t$. If $\tau_C<t$, the hitting set $\{s\ge0:B_s\in C\}$ is closed, by continuity of the path and closedness of $C$, so its infimum $\tau_C$ is attained and $B_{\tau_C}\in C$ with $\tau_C\le t$; if $\tau_C=t$, then for every $n$ there is $s_n\in[t,t+1/n]$ with $B_{s_n}\in C$, so $s_n\to t$ and $B_t=\lim_nB_{s_n}\in C$ because $C$ is closed. In either case fix $s\in[0,t]$ with $B_s\in C$. Given $n$, choose a rational $q\in[0,t]$ with $|B_q-B_s|<1/n$ (density of the rationals and continuity at $s$; if $s=0$ take $q=0$); then $\operatorname{dist}(B_q,C)\le|B_q-B_s|<1/n$, so $\{\tau_C\le t\}\subseteq G_t$. Combined with step 1.1, $\{\tau_C\le t\}=G_t$ for every $t\ge0$, including $t=0$ where $G_0=\bigcap_n\{\operatorname{dist}(B_0,C)<1/n\}=\{B_0\in C\}$ by closedness of $C$. [F3, step 1.1]

3.1 Each set $\{\operatorname{dist}(B_q,C)<1/n\}$ is in $\mathcal F^0_q\subseteq\mathcal F^0_t$ for $q\le t$, because $\operatorname{dist}(\cdot,C)$ is continuous hence Borel and $B_q$ is $\mathcal F^0_q$-measurable; the union over the countable set $\mathbb Q\cap[0,t]$ and the intersection over $n$ are therefore in $\mathcal F^0_t$. By step 2.1, $\{\tau_C\le t\}\in\mathcal F^0_t$ for every $t\ge0$, so $\tau_C$ is a stopping time for $(\mathcal F^0_t)$ by [F1], and hence for $(\mathcal F_t)$ by [F2]. [F1, F2, step 2.1]

4.1 For a general standard Brownian motion, only continuous-path versions are used: if $B$ is continuous on a probability-one event $A$ and $B^\ast$ is the redefinition of [[def-wiener-measure-on-continuous-path-space]] vanishing off $A$, then $B^\ast$ is a standard Brownian motion with continuous paths, all finite-dimensional laws of $B$ and $B^\ast$ agree, and the sets $\{\tau_C(B)\le t\}$ and $\{\tau_C(B^\ast)\le t\}$ differ by a subset of $A^c$, a null event contained in the completed ambients; for the usual augmentation $(\mathcal F_t)$, which contains all such null subsets, the general conclusion follows. The empty set $C=\emptyset$ gives $\tau_C\equiv+\infty$ and $G_t=\emptyset$ for every $t$ by the convention $\operatorname{dist}(x,\emptyset)=+\infty$, so the formula and the conclusion remain valid; the case $C=\mathbb R$ gives $\tau_C\equiv0$. AC is used only through [F6]. [F5, F6, given, step 3.1] ∎

## Source notes

Durrett, Theorem 7.3.4, approximates the closed hitting event along rational times; Sousi treats the same statement for the augmented filtration. The exact formula proved here is the one consumed by the planar annular lemma, which applies it with the closed set equal to a circle.
