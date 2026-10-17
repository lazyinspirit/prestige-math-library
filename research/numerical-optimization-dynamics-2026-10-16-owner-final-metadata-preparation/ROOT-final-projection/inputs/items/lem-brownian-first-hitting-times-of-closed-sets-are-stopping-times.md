---
id: lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times
kind: lemma
title: "Brownian closed-set hitting times are stopping times"
status: published
origin: pipeline
deps: [def-continuous-time-stopping-time, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, def-wiener-measure-on-continuous-path-space, thm-existence-of-continuous-brownian-motion, def-continuous-time-filtration-and-all-pairs-martingale, def-axiom-of-choice, def-open-and-closed-in-r, thm-bolzano-weierstrass, lem-rat-embeds-dense]
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
verification:
  audited: 2026-09-22
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

**Given:** AC, a standard Brownian motion $B$ with everywhere continuous paths, and a closed set $C\subseteq\mathbb R$.

[F1] A stopping time for a filtration is a map $\tau$ with $\{\tau\le t\}\in\mathcal F_t$ for all $t\ge0$; larger filtrations keep the property. [[def-continuous-time-stopping-time]] [[def-continuous-time-filtration-and-all-pairs-martingale]]

[F2] The raw natural filtration is $\mathcal F^0_t=\sigma(B_s:0\le s\le t)$, and the usual augmentation contains it. [[def-natural-and-usual-augmented-brownian-filtrations]]

[F3] The explicit hypothesis gives continuity of every path. For nonempty closed $C$, put $d_C(x)=\inf_{z\in C}|x-z|$. This is a finite nonnegative real. Taking infima in $|x-z|\le|x-y|+|y-z|$ gives $d_C(x)\le|x-y|+d_C(y)$; swapping $x,y$ proves $|d_C(x)-d_C(y)|\le|x-y|$, hence continuity. For $x\in C$, $d_C(x)=0$. For $x\notin C$, the open complement contains $(x-r,x+r)$ for some $r>0$, so $d_C(x)\ge r>0$. Thus $d_C(x)=0$ exactly on $C$. [[def-open-and-closed-in-r]]

[F4] Every bounded real sequence has a convergent subsequence; a limit of points of $[0,t]$ lies in $[0,t]$, since a limit strictly outside would eventually force the points outside. Rationals lie strictly between any two distinct reals. [[thm-bolzano-weierstrass]] [[lem-rat-embeds-dense]]

[F5] The canonical coordinate process under Wiener measure is a standard Brownian motion with continuous paths. [[def-wiener-measure-on-continuous-path-space]] [[thm-existence-of-continuous-brownian-motion]]

[F6] AC is declared because the ambient Brownian construction assumes it. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 If $C=\emptyset$, then $\tau_C=\infty$ and all its finite-time test events are empty; this case is settled. Now assume $C\ne\emptyset$. Fix $t\ge0$ and put $G_t:=\bigcap_{n\ge1}\bigcup_{q\in\mathbb Q\cap[0,t]}\{\operatorname{dist}(B_q,C)<1/n\}$. For a point of $G_t$, use the declared AC to select $q_n\in\mathbb Q\cap[0,t]$ with $\operatorname{dist}(B_{q_n},C)<1/n$ for every $n\ge1$. Apply [F4] to the bounded sequence $(q_{j+1})_{j\in\mathbb N}$, obtaining a subsequence $q_{n_k}$ converges to some $q^\ast\in[0,t]$; continuity of the path and of the distance give $0\le\operatorname{dist}(B_{q^\ast},C)\le\liminf_k\bigl(\operatorname{dist}(B_{q^\ast},C)-\operatorname{dist}(B_{q_{n_k}},C)\bigr)+\limsup_k1/n_k=0$, hence $\operatorname{dist}(B_{q^\ast},C)=0$ and $B_{q^\ast}\in C$ by [F3], so $\tau_C\le q^\ast\le t$. Thus $G_t\subseteq\{\tau_C\le t\}$. [F3, F4, F6, given]

2.1 Conversely suppose $\tau_C\le t$. The hitting set is nonempty and bounded below. By its infimum property choose, using AC, a hit $s_n\in[\tau_C,\tau_C+1/n)$ for each $n\ge1$. Then $s_n\to\tau_C$, so continuity and [F3] imply $d_C(B_{\tau_C})=\lim_n d_C(B_{s_n})=0$; hence $B_{\tau_C}\in C$. Given $n\ge1$, continuity at $s=\tau_C$ and rational density supply $q\in\mathbb Q\cap[0,t]$ with $|B_q-B_s|<1/n$: use an interior rational sufficiently near $s$ when $s>0$, and $q=0$ when $s=0$. Thus $d_C(B_q)\le|B_q-B_s|<1/n$. This proves $\{\tau_C\le t\}\subseteq G_t$. Together with step 1.1 it yields equality for every $t\ge0$. At $t=0$, $G_0=\bigcap_{n\ge1}\{d_C(B_0)<1/n\}=\{B_0\in C\}$. [F3, F4, F6, step 1.1]

3.1 Each set $\{\operatorname{dist}(B_q,C)<1/n\}$ is in $\mathcal F^0_q\subseteq\mathcal F^0_t$ for $q\le t$, because $\operatorname{dist}(\cdot,C)$ is continuous hence Borel and $B_q$ is $\mathcal F^0_q$-measurable; the union over the countable set $\mathbb Q\cap[0,t]$ and the intersection over $n$ are therefore in $\mathcal F^0_t$. By step 2.1, $\{\tau_C\le t\}\in\mathcal F^0_t$ for every $t\ge0$, so $\tau_C$ is a stopping time for $(\mathcal F^0_t)$ by [F1], and hence for $(\mathcal F_t)$ by [F2]. [F1, F2, F3, step 2.1]

4.1 The result concerns the given everywhere-continuous process; [F5] supplies the canonical realization as an example. No transfer to another raw natural filtration by null modification is used. The usual-augmentation conclusion follows solely by inclusion in step 3.1. For $C=\mathbb R$, $\tau_C=0$ and $G_t=\Omega$; the empty-set case was settled in step 1.1. AC supplies the countable selections of approximating rational times and hit times made in steps 1.1 and 2.1, as well as the ambient construction [F6]. [F5, F6, step 1.1, step 2.1, step 3.1] ∎

## Source notes

The proof supplies the exact rational-distance formula for a closed subset of the real line and an everywhere-continuous process. The listed probability texts provide background on hitting times; no extension from an arbitrary almost-surely continuous version by terminal-null completion is claimed.
