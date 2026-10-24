---
id: lem-viral-divisive-finite-family-yields-weak-viral
kind: lemma
title: "Quantitatively divisive finite families are viral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-viral-divisive-finite-family, def-viral-property-for-a-finite-family, cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order, def-substitution-of-a-graph-for-a-vertex, def-blockade-length-and-width, def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Theorems 4.2 and 4.3"
      url: "https://arxiv.org/pdf/2307.06455"
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

Every divisive finite family of ordinary finite graphs is viral.

## Facts & Assumptions

**Given:** A divisive finite family $\mathcal F$, with constants $b,c$ from [[def-viral-divisive-finite-family]].

[L1] Every cograph has a clique or stable set of size at least the square root of its order ([[cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order]]).

[F1] Replacing one vertex of a cograph by an independent set gives a cograph: an induced four-vertex path meeting a substituted independent set in at most one vertex would project to one in the original graph; if it met that set twice, its two vertices would have identical outside neighbors and could not lie in an induced $P_4$.

## Proof

**Proof technique:** a maximal cograph layout and quantitative thinning.

1.1 We first prove the local-blockade assertion. Fix a finite graph $Q$ on $N$ vertices, $0<\epsilon<1/2$, and $D\ge1$. Put $x=\epsilon^{12D}$. Assume that every induced subgraph $F$ of $Q$ with $|F|\ge\epsilon^{4D}N$ has an $x$-sparse blockade in $F$ or in its complement, of length at least some real $k\in[2,x^{-1}]$ and width at least $|F|/k^D$. We claim that some $S\subseteq V(Q)$ has $$|S|\ge x^{D+1}N,\qquad \min\{e(Q[S]),e(\overline Q[S])\}\le\epsilon\binom{|S|}{2}.\tag{1}$$ If $N\le x^{-D-1}$, any singleton works, so assume $N>x^{-D-1}$. In particular all block-width thresholds used below exceed one when required. [given]

1.2 A *layout* is a cograph $J$ with pairwise disjoint nonempty blocks $(A_j:j\in V(J))$ of $Q$; vertices outside all blocks are permitted. A pair is undecided when both ends are in one block. All other pairs are decided. A decided pair is wrong if its ends lie in distinct blocks and their adjacency differs from that of the corresponding pair in $J$. Choose a layout satisfying $$|A_j|\ge\epsilon^{6D}N\quad(j\in J),\qquad \sum_{j\in J}|A_j|^{1/D}\ge N^{1/D},\qquad |\mathrm{wrong}|\le x|\mathrm{decided}|,\tag{2}$$ with $|J|$ maximal. The one-block layout $A_1=V(Q)$ qualifies, and finiteness gives a maximum. [F1]

2.1 If $|J|\ge4\epsilon^{-2}$, [L1] supplies a clique or stable set $I\subseteq V(J)$ of size at least $2\epsilon^{-1}$. Complement $Q,J$ together if needed, so $I$ is stable. From each $A_i$, $i\in I$, choose the same number $r=\lceil\epsilon^{6D}N\rceil$ of vertices, and let $S$ be their union. Edges within these equal blocks account for at most $|I|^{-1}\binom{|S|}{2}$. Edges between them are wrong pairs and hence at most $x\binom N2$. Since $|S|=|I|r\ge2\epsilon^{6D-1}N$, their share of $\binom{|S|}{2}$ is at most $x\epsilon^{2-12D}/2=\epsilon^2/2\le\epsilon/2$; the within-block share is at most $\epsilon/2$. Also $|S|\ge\epsilon^{6D}N\ge x^{D+1}N$. This gives (1). We may therefore assume $|J|<4\epsilon^{-2}$. [L1, step 1.2, algebra]

3.1 Let $A_1$ be a largest block. The power-sum condition in (2) and the bound on $|J|$ imply $|A_1|\ge(\epsilon^2/4)^D N\ge\epsilon^{4D}N$. Apply the hypothesis in step 1.1 to $Q[A_1]$, complementing $Q,J$ if needed, to get an $x$-sparse blockade $(B_1,\ldots,B_t)$ of actual integer length $t\ge k$ for some real $k\in[2,x^{-1}]$, with $|B_i|\ge |A_1|/k^D$. Suppose $t<\lceil2/\epsilon\rceil$. Then $t<2/\epsilon$, and $k\le t$ gives $|B_i|\ge |A_1|/t^D\ge(\epsilon/2)^D|A_1| \ge\epsilon^{2D}|A_1|\ge\epsilon^{6D}N$. Replace vertex $1$ of $J$ by $t$ pairwise nonadjacent vertices whose blocks are the $B_i$. By [F1] the new pattern remains a cograph; also $\sum_i|B_i|^{1/D}\ge t(|A_1|/t^D)^{1/D}=|A_1|^{1/D}$. Old decided pairs stay decided. New wrong pairs can occur only between the $B_i$, and $x$-sparsity makes at most an $x$ fraction of those new decided pairs wrong. Thus (2) persists while $|J|$ increases, a contradiction. Hence $t\ge\lceil2/\epsilon\rceil$. [step 1.2, step 2.1, F1, algebra]

4.1 Put $m=\lceil2/\epsilon\rceil\le t$ and $w=\lceil |A_1|/k^D\rceil$. Independently choose uniformly a $w$-element subset $C_i\subseteq B_i$ for each $i\le m$. For each pair $i<j$, its expected number of edges is at most $xw^2$, because the blockade is $x$-sparse. Markov's inequality says that the probability of more than $xm^2w^2/2$ edges in that pair is at most $2/m^2$. There are fewer than $m^2/2$ pairs, so a simultaneous choice exists with every pair below this bound. Let $S=\bigcup_{i\le m}C_i$. The within-block edge fraction is at most $1/m\le\epsilon/2$; the cross-block edge fraction is at most $xm^2\le16\epsilon^{12D-2} \le\epsilon/2$. Thus $e(Q[S])\le\epsilon\binom{|S|}{2}$. Finally, $$|S|\ge w\ge |A_1|/k^D \ge\epsilon^{4D}x^D N\ge x^{D+1}N,$$ where the last inequality follows from $4D+12D^2\le12D(D+1)$. This proves (1), including the case where we complemented $Q$. [step 3.1, algebra]

5.1 Now use the divisiveness constants $b,c$. Enlarge the exponent to $d\ge\max\{b,1/c,4\}$ and decrease the parameter bound to $1/d$; the defining implication persists because a smaller copy threshold and a smaller required width make it weaker. Put $D=d+1$ and $C=12D(D+1)$. We claim that $C$ is a *weak viral exponent*: for $0<\epsilon<1/2$, every graph $G$ with $\operatorname{ind}_H(G)<(\epsilon^C|G|)^{|H|}$ for all $H\in\mathcal F$ has $S$ of size at least $\epsilon^C|G|$ satisfying the edge bound in (1). If $|G|\le\epsilon^{-C}$, take a singleton. Otherwise put $x=\epsilon^{12D}$ and let $F$ be any induced subgraph of $G$ of size at least $\epsilon^{4D}|G|$. Since $12dD+4D<C$, $$x^d|F|\ge\epsilon^{12dD+4D}|G|>\epsilon^C|G|.$$ The copy bounds transfer to $F$. Moreover $|F|>\epsilon^{4D-C}\ge x^{-d/2}$, and $x<1/d\le c$. Divisiveness gives an $x$-sparse blockade in $F$ or its complement of width at least $|F|/k^d\ge|F|/k^D$ for some $k\in[2,x^{-1}]$. Thus every such $F$ satisfies the hypothesis of step 1.1 with $Q=G$ and exponent $D$. Its conclusion has size $x^{D+1}|G|=\epsilon^C|G|$, proving the weak claim. [step 1.1, step 4.1, given, algebra]

6.1 Set $E=4C$. If $G$ satisfies the viral copy bounds at $\epsilon^E$, then it satisfies the weak copy bounds at $(\epsilon/4)^C$, because $\epsilon^{4C}\le(\epsilon/4)^C$ for $\epsilon<1/2$. Step 5.1, with parameter $\epsilon/4$, gives $T$ with $|T|\ge(\epsilon/4)^C|G|$ and, in $G[T]$ or its complement, at most $(\epsilon/4)\binom{|T|}{2}$ edges. The mean degree there is less than $\epsilon|T|/4$, so fewer than half the vertices have degree greater than $\epsilon|T|/2$. Keep the other vertices as $S$. Then $|S|\ge|T|/2$, and every vertex of $S$ has at most $\epsilon|T|/2\le\epsilon|S|$ neighbors in the chosen graph on $S$. Also $|S|\ge (\epsilon/4)^C|G|/2\ge\epsilon^{4C}|G|$ because $C\ge1$ and $\epsilon\le1/2$. Thus $S$ is $\epsilon$-restricted and has the required viral size. [step 5.1, algebra] ∎
