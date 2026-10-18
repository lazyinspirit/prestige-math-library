---
id: thm-temperley-lieb-generator-normal-form
kind: theorem
title: "Jones normal forms span and are counted by Catalan paths"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-temperley-lieb-generator-presentation, def-dyck-path-and-semilength, lem-lattice-paths-are-determined-by-their-step-words, def-catalan-number]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra, §2"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§2, PDF/printed pp. 6–9: Lemma 2.2, Proposition 2.3, and the explicit path-corner bijection; local proof extends the result from C to any commutative ring."
    - title: "Vaughan F. R. Jones, The Jones Polynomial, author-hosted notes"
      url: "https://math.berkeley.edu/~vfr/jones.pdf"
      locator: "§3, printed p. 6: the Catalan upper bound from reduced words."
    - title: "David Guichard, Combinatorics and Graph Theory, Section 3.5: Catalan Numbers"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
      locator: "§3.5, printed p. 69: Dyck and parenthesis conventions for C_n."
---

## Statement

Fix $n\ge0$, a commutative ring $R$, and $\delta\in R$, and use the presented algebra $P_n(R,\delta)$ of [[def-temperley-lieb-generator-presentation]]. For $r\ge0$ and sequences $j_1,\ldots,j_r$ and $k_1,\ldots,k_r$ satisfying

$$1\le k_i\le j_i<n,\qquad j_i<j_{i+1},\qquad k_i<k_{i+1}$$

whenever the indicated indices occur, define the **Jones normal-form word**

$$N(j,k):=(u_{j_1}u_{j_1-1}\cdots u_{k_1})(u_{j_2}u_{j_2-1}\cdots u_{k_2})\cdots(u_{j_r}u_{j_r-1}\cdots u_{k_r});$$

for $r=0$ it is the empty word $1$. Let $\mathcal N_n$ be the set of these formal words. Every generator monomial in $P_n(R,\delta)$ is equal either to $0$ or to $\delta^sN$ for some $s\ge0$ and $N\in\mathcal N_n$. The set $\mathcal N_n$ is in bijection with Dyck paths of semilength $n$; consequently it has $C_n$ elements and spans $P_n(R,\delta)$. This theorem asserts spanning and the count of the named candidates, not their linear independence.

## Facts & Assumptions

**Given:** $n\ge0$, a commutative ring $R$, $\delta\in R$, and the presentation relations of $P_n(R,\delta)$.

[F1] The relations are $u_i^2=\delta u_i$, $u_i u_{i\pm1}u_i=u_i$, and $u_i u_j=u_j u_i$ when $|i-j|>1$; elements of the free associative algebra are finite $R$-linear combinations of words. ([[def-temperley-lieb-generator-presentation]])

[F2] A Dyck path of semilength $n$ is a path of $2n$ up/down steps with total height $0$ and nonnegative prefix heights; each path is determined by its step word. ([[def-dyck-path-and-semilength]], [[lem-lattice-paths-are-determined-by-their-step-words]])

[F3] The Catalan number $C_n$ is the number of Dyck paths of semilength $n$. ([[def-catalan-number]])

## Proof

**Proof technique:** direct.

1.1 A monomial is a finite word in $u_1,\ldots,u_{n-1}$. Regard two words related by commuting letters at distance greater than one as equivalent for the moment. Each such commutation class is finite. If a representative has a square $u_i u_i$ or a consecutive triple $u_i u_{i\pm1}u_i$, use the corresponding relation in [F1]; the generator length drops by one or two. After at most the original length many such drops, the process stops, leaving either zero (if the accumulated scalar is zero) or a word for which no representative under commutations has a square or such a triple. Call the latter word reduced. [F1, given, construct]

1.2 Encode $N(j,k)$ by a grid path from $(0,0)$ to $(n,n)$: move east to $x=j_1$, north to $y=k_1$, east to $x=j_2$, north to $y=k_2$, and continue through $(j_r,k_r)$, then move east to $x=n$ and north to $y=n$. For the empty word use east from $(0,0)$ to $(n,0)$ and then north to $(n,n)$. The inequalities $k_i\le j_i$, $j_i<j_{i+1}$ and $k_i<k_{i+1}$ say exactly that this path stays in $y\le x$. Conversely, in any path from $(0,0)$ to $(n,n)$ using east and north steps and staying in $y\le x$, record each positive vertical run whose $x$-coordinate is less than $n$ by its endpoint $(j_i,k_i)$; omit the forced final vertical run at $x=n$. There is no vertical run at $x=0$, every recorded run is preceded by a positive horizontal run, and consecutive recorded coordinates strictly increase in both coordinates. The path condition gives $k_i\le j_i$, while $j_i<n$ and $k_i<n$ by construction. Thus the corners recover exactly one admissible parameter list; if there are no recorded runs, it is the empty word. The parameterization itself has no duplicate formal words: within each block the indices decrease consecutively, while at every block boundary the next index $j_{i+1}$ is strictly greater than the preceding endpoint $k_i$; hence the block boundaries are exactly the strict ascents in the index sequence and uniquely recover all $(j_i,k_i)$. Mapping east to up and north to down sends $x-y$ to the height, so these paths are exactly the Dyck paths in [F2]. This also covers $n=0$, where the path and word are empty. [F2, given, construct]

2.1 In a nonempty reduced word with maximal index $m$, that index occurs only once. Prove this by induction on $m$. The case $m=1$ follows from $u_1^2=\delta u_1$. If two consecutive occurrences of $u_m$ surround a nonempty subword $U$, all indices in $U$ are below $m$ and $U$ is reduced. Let $a$ be its maximal index. By induction $u_a$ occurs once in $U$. If $a<m-1$, every letter of $U$ commutes with $u_m$, so the two copies of $u_m$ can be made adjacent and shortened. If $a=m-1$, write $U=A u_{m-1}B$ with all letters of $A,B$ below $m-1$; these commute with $u_m$, so the subword $u_m Uu_m$ can be reordered to $A u_m u_{m-1}u_m B$ and shortened by the adjacent triple relation. Either contradicts reducedness. The empty intervening word shortens directly by the square relation. [F1, step 1.1, induction]

3.1 We now expose a terminal descending block by commutations. Start with the unique maximal letter $u_m$ from step 2.1 and let the current block be $B=u_m$; write the commutation-equivalent word as $U'BV$. More generally, suppose $B=u_m u_{m-1}\cdots u_r$ and the remaining tail is $V$. If $V$ contained a letter $u_s$ with $s\ge r$, choose the largest such $s$ and its first occurrence in $V$. The earlier occurrence of $u_s$ lies in $B$, and every letter between these two copies has index below $s$: the part of $B$ after its $u_s$ has indices below $s$, and the chosen tail prefix has no index above $s$ or earlier copy of $u_s$. This intervening subword is reduced. If it is empty, the two $u_s$ give a square. Otherwise let $a<s$ be its maximal index. If $a\le s-2$, every intervening generator commutes with $u_s$, so the two copies can be made adjacent. If $a=s-1$, step 2.1 applied to the intervening subword says that $u_{s-1}$ occurs there exactly once; all its other letters commute with $u_s$, so commutations expose $u_su_{s-1}u_s$. Each case contradicts reducedness. Hence every letter in $V$ has index at most $r-1$. If $u_{r-1}$ occurs in $V$, take its first occurrence: every earlier tail letter has index at most $r-2$ and commutes with every letter of $B$, so move those letters before $B$ and append $u_{r-1}$. If $u_{r-1}$ does not occur, every letter of $V$ has index at most $r-2$; move all of them before $B$ and stop. This proves $U=U'B$ with $B=u_m u_{m-1}\cdots u_k$ and all indices of the reduced prefix $U'$ below $m$. Induction on the maximal index of $U'$ yields descending consecutive blocks with maxima strictly increasing from left to right. If successive block endpoints had $k_i\ge k_{i+1}$, the next block contains $u_{k_i+1}u_{k_i}$ because $j_{i+1}>j_i\ge k_i$. The letters between the preceding $u_{k_i}$ and that $u_{k_i+1}$ have indices at least $k_i+2$, so commute with $u_{k_i}$; this exposes $u_{k_i}u_{k_i+1}u_{k_i}$, contradicting reducedness. Thus the endpoints also increase, giving the parameters in the Statement. [F1, step 2.1, induction, algebra]

4.1 By [F3], the normal-form set has $C_n$ elements. Step 1.1 reduces every monomial to a scalar multiple of a word, and step 3.1 puts that reduced word into $\mathcal N_n$. Since every element of $P_n(R,\delta)$ is a finite linear combination of monomials by [F1], the images of $\mathcal N_n$ span the presented algebra. No division by $\delta$ or other scalar is used. [F1, F3, step 1.1, step 3.1] ∎

## Remarks

The conditions are $1\le k_i\le j_i<n$, $j_i<j_{i+1}$, and $k_i<k_{i+1}$ for adjacent block indices. They are the exact corner conditions in the path bijection. When $n=0$ or $n=1$, only the empty normal form occurs.
