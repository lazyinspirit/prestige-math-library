---
id: lem-concave-support-regular-blockade-contains-rooted-tree
kind: lemma
title: "A wide concave support-regular blockade contains a rainbow rooted tree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coherent-graph-and-support-regular-blockade]
justified_by: []
aliases: []
landmark: false
proof_strategy: anchored-minor-maximality
sources:
  scraped: []
  references:
    - title: "Chudnovsky, Scott, Seymour and Spirkl, Pure pairs I, Lemma 3.1"
      url: "https://arxiv.org/pdf/1809.00919"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $\delta\ge2$ and $\eta\ge0$ be integers, put $\tau=\delta^{\eta+1}$, and let $0<\lambda\le2^{-9\delta}\delta^{-\eta-1}$. Suppose an $\epsilon$-coherent graph $G$ has an equicardinal blockade $\mathcal B=(B_1,\ldots,B_K)$ of length $K\ge6\delta^{\eta+2}$ and width $W\ge2^{9\delta}\epsilon|G|$. If $\mathcal B$ is $\lambda$-concave, $\tau$-support-uniform and $(2^{-9\delta},\tau)$-support-invariant, then $G$ has a $\mathcal B$-rainbow induced copy of $T(\delta,\eta)$.

## Facts & Assumptions

**Given:** All data in the Statement. Write $n=|G|$ and $\rho=2^{-9\delta}$. Every vertex has degree $<\epsilon n$ and disjoint anticomplete sets cannot both have size $\ge\epsilon n$.

## Proof

**Proof technique:** maximal anchored minor and a matching of rooted trees.

1.1 Let $\alpha$ and $\beta$ be the greatest heights of a $\mathcal B$-left-rainbow and a $\mathcal B$-right-rainbow rooted complete $\delta$-ary tree, respectively. The single vertex gives both a starting value, and settles the case $\eta=0$. Suppose $\eta\ge1$ and there is no rainbow $T(\delta,\eta)$. Then $\alpha,\beta<\eta$; reverse the blockade if needed so that $\alpha\le\beta$. For $0\le q\le\delta$, define $Q(q)$ by joining a new root to the roots of $q$ disjoint copies of $T(\delta,\alpha)$. Put $R(q)=Q(q)$ for $q\le\delta$; for $q=\delta+i$, $1\le i\le\delta$, use $\delta-i$ copies of $T(\delta,\alpha)$ and $i$ copies of $T(\delta,\beta)$ instead. Let $S(q)$, $0\le q\le\delta$, consist of $q+1$ copies of $T(\delta,\alpha)$ with the root of the first joined to the other $q$ roots and retained as root. Let $\gamma_3$ be maximal such that a left-rainbow $S(\gamma_3)$ occurs. Such a copy exists at $q=0$. Because $Q(\delta)=T(\delta,\alpha+1)$, $R(2\delta)=T(\delta,\beta+1)$ and $S(\delta)$ contains a rooted $T(\delta,\alpha+1)$, none of these three extremal cases can occur. [choose]

2.1 Call a minor $(C_1,\ldots,C_k,C_K)$, with $C_i\subseteq B_i$, **$(\gamma_1,\gamma_2)$-anchored** if some $Y\subseteq B_{k+1}\cup\cdots\cup B_{K-1}$ is anticomplete to $C_2,\ldots,C_k$, every $v\in C_1$ roots a left-rainbow $Q(\gamma_1)$ inside $Y\cup\{v\}$, and every $v\in C_K$ roots a right-rainbow $R(\gamma_2)$ there. The original blockade, with $k=K-1$, $Y=\varnothing$ and $\gamma_1=\gamma_2=0$, is anchored. Choose $\gamma_0=\gamma_1+\gamma_2$ maximal among anchored minors of length at least $K-2\delta^{\eta+1}\gamma_0$ and width at least $W2^{-3\gamma_0}$; trim its blocks equally and call their common size $W'$. From step 1.1, $\gamma_1,\gamma_3<\delta$ and $\gamma_2<2\delta$. Hence $\gamma_0\le3\delta-2$ and $W'\ge W2^{-9\delta+6}\ge64\epsilon n$. [step 1.1, choose]

3.1 Let $s=|S(\gamma_3)|$ and $t=|T(\delta,\beta)|$, so $s,t\le\delta^{\eta+1}$, and put $h=k+1-s-t$. The anchor length bound gives $h\ge K-2\delta^{\eta+1}(\gamma_0+1)\ge2\delta^{\eta+1}\ge2$ because $K\ge6\delta^{\eta+2}$ and $\gamma_0+1\le3\delta-1$. Put $r=\lceil W'-\rho W\rceil$; then $r\ge63\rho W\ge63\epsilon n$. Support-uniformity gives a left-rainbow $S(\gamma_3)$ on the consecutive blocks $B_h,\ldots,B_{h+s-1}$ and a right-rainbow $T(\delta,\beta)$ on $B_{h+s},\ldots,B_k$. Greedily pack $r$ pairwise vertex-disjoint copies $E_1,\ldots,E_r$ of the former in the corresponding $C$-blocks, and $r$ pairwise vertex-disjoint copies $F_1,\ldots,F_r$ of the latter. Indeed, if a maximal packing had $r'<r$ members, removing its vertices from each used $C$-block would leave width $W'-r'\ge\rho W$, contradicting $(\rho,\tau)$-support-invariance of the appropriate sub-blockade of $\mathcal B$. The two packings use disjoint intervals of blocks. [step 2.1, given, given]

4.1 For $D\subseteq C_1\cup C_K$, let $a(D)$ count the indices $i\in[r]$ for which $D$ meets $E_i\cup F_i$, and let $b(D)$ count those for which it meets a nonroot vertex. Choose $D$ inclusion-maximal subject to $a(D)\le r/2$ and $b(D)\ge a(D)/4$. At least $r/2\ge\epsilon n$ roots of the $E_i$ have no neighbor in $D$, so coherence implies $|D|<\epsilon n$. The untouched roots in $B_h$ and $B_k$ also show that $D$ $\lambda$-misses both blocks. Concavity therefore says that $D$ does not $\lambda$-cover any of $B_{h+1},\ldots,B_{k-1}$. Every internal meeting of an $E_i\cup F_i$ uses a nonroot vertex in those interior blocks, so $b(D)\le\lambda(s+t-2)W$. Since $s+t\le2\delta^{\eta+1}$, $\lambda\le\rho\delta^{-\eta-1}$, and $r\ge63\rho W$, we get $a(D)\le4b(D)\le8\rho W\le8r/63\le r/2-\epsilon n$. [step 3.1, given, given]

5.1 Let $Z\subseteq(C_1\cup C_K)\setminus D$ be the vertices meeting at least one $E_i\cup F_i$, and let $C\subseteq[r]$ be the indices whose $E_i\cup F_i$ is anticomplete to $D$. Since $r\ge\epsilon n$, coherence bounds the vertices of $C_1\cup C_K$ missing every $E_i\cup F_i$ by $<\epsilon n$; hence $|Z|>2W'-2\epsilon n$. Every $v\in Z$ meets at least one pair indexed by $C$: otherwise adjoining it to $D$ leaves $a$ unchanged and cannot decrease $b$, contrary to maximality. If $v\in Z$, the number of $i\in C$ it meets internally is less than one quarter of the number it meets at all. Otherwise $D\cup\{v\}$ would satisfy the two defining inequalities of $D$: its new $a$ is at most $a(D)+\epsilon n\le r/2$ (one vertex has fewer than $\epsilon n$ neighbors among the disjoint rooted trees), and its new $b$ would be at least a quarter of its new $a$. More directly, maximality says $b(D\cup\{v\})<a(D\cup\{v\})/4$; subtract $b(D)\ge a(D)/4$. [step 4.1, given, choose]

6.1 Order the indices of $C$ uniformly at random. For each $v\in Z$, the first pair it meets among $C$ is met **properly** (at one or both roots but at no nonroot vertex) with probability $>3/4$ by step 5.1. On each side $C_1,C_K$, the probability that fewer than half its vertices of $Z$ are proper-first is $<1/2$: otherwise the expected number of proper-first vertices on that side would be at most three quarters of its size. Thus one order makes both sides at least half proper-first. Relabel all pairs so that the chosen order of $C$ occupies the initial segment $1,\ldots,|C|$, with every pair outside $C$ placed afterward, and call the set of proper-first vertices $X$. Then $|X\cap C_1|\ge|Z\cap C_1|/2$ and likewise at $C_K$; moreover each side has at least $W'/2-\epsilon n$ vertices in $X$. Each $v\in X$ has a first proper meeting index, its **happiness**, and one of four types $(1,E),(1,F),(K,E),(K,F)$ according to its side and which root it meets. [step 5.1, algebra]

7.1 As $|X|>W'-\epsilon n\ge63W'/64$, one side has at least $W'/4$ vertices of $X$. Choose the first index $m$ at which either side has at least $W'/4$ vertices of happiness at most $m$. At that side select a set $U$ of at least $W'/8$ such vertices all having one of the two types there. Let $Y'$ be the union of vertices of $E_i,F_i$ over $i\le m$. On each endpoint side fewer than $W'/4$ vertices of $X$ have happiness before $m$, and at most $2\epsilon n$ have happiness exactly $m$ because each of the two roots has degree $<\epsilon n$. Thus each side has at least $W'/4-3\epsilon n>\lambda W$ vertices of $X$ anticomplete to $Y'$. Every $B_j\cap Y'$, $h\le j\le k$, therefore $\lambda$-misses both $B_1$ and $B_K$. By concavity it cannot $\lambda$-cover any $B_i$ with $2\le i<h$. Consequently each $C_i$ in this latter range has at most $(s+t)\lambda W\le2\rho W\le W'/32$ vertices meeting $Y'$, and has more than $W'/8$ vertices anticomplete to $Y'$. [step 6.1, given, given]

8.1 We now enlarge the anchor with $Y'$. In every case choose $\lceil W'/8\rceil$ vertices from $U$ on its active endpoint, from the opposite endpoint anticomplete to $Y'$, and from each $C_i$ with $2\le i<h$ anticomplete to $Y'$. The preceding bounds permit these choices; $Y$ was already anticomplete to the intermediate blocks. The new minor has indices $1,\ldots,h-1,K$, length $h\ge K-2\delta^{\eta+1}(\gamma_0+1)$, and width at least $W'/8\ge W2^{-3(\gamma_0+1)}$. [step 2.1, step 7.1]

9.1 If $U$ has type $(1,E)$, each $v\in U$ joins properly to the root of an $S(\gamma_3)$ in $Y'$, which contains a rooted $T(\delta,\alpha)$; adjoining this to the anchored $Q(\gamma_1)$ at $v$ supplies a left-rainbow $Q(\gamma_1+1)$. The same works for type $(1,F)$ because $\beta\ge\alpha$ and $F_i=T(\delta,\beta)$ contains a rooted $T(\delta,\alpha)$. Type $(K,F)$ supplies a right-rainbow $R(\gamma_2+1)$: before $\gamma_2=\delta$ it adds an $\alpha$-branch, afterward a $\beta$-branch. Type $(K,E)$ with $\gamma_2<\delta$ likewise adds an $\alpha$-branch. Each contradicts maximality of $\gamma_0$ using the new anchored minor from step 8.1. [step 1.1, step 8.1]

10.1 In the only remaining case, $U$ has type $(K,E)$ and $\gamma_2\ge\delta$. Pick $v\in U$ and the $E_i=S(\gamma_3)$ it meets properly. The anchored $R(\gamma_2)$ rooted at $v$ contains a rooted $T(\delta,\alpha)$; join that branch at $v$ to the root of $E_i$. The sets $Y$ and $Y'$ are anticomplete, the meeting is proper, and all used blocks are distinct. This yields a left-rainbow $S(\gamma_3+1)$, contrary to maximality of $\gamma_3$. Every case contradicts the assumption in step 1.1, so a rainbow $T(\delta,\eta)$ exists. [step 1.1, step 2.1, step 9.1] ∎
