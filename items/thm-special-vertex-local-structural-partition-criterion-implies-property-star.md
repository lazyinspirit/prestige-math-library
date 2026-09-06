---
id: thm-special-vertex-local-structural-partition-criterion-implies-property-star
kind: theorem
title: "The special-vertex-local structural-partition criterion implies property (*)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-property-star-for-a-finite-family, def-erdos-hajnal-property-and-constant, def-h-free-and-family-free-graph, def-graph-isomorphism-and-complement, def-comb-in-a-graph, def-blockade-length-and-width, def-complete-anticomplete-pure-and-x-sparse-blockades, def-pattern-graph-of-a-pure-blockade, def-integral-geometric-layers-of-a-decreasing-block-partition, def-real-power, thm-real-power-laws, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, def-structural-comb-partition-hypothesis, thm-geometric-series]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $\mathcal F_1,\mathcal F_2$ have a common Erdős–Hajnal constant $c\in(0,1]$. Suppose that, in every $\overline{\mathcal H}$-free graph, every special-vertex comb occurring in the definition of property $(*)$ has a partition satisfying clauses (1), (2.1)--(2.3) of the structural comb partition. Then $\mathcal H$ has property $(*)$.

## Facts & Assumptions

**Given:** The finite graph families and common constant $c\in(0,1]$ in the Statement, and the supplied partition for each special-vertex comb in the property-$(*)$ trigger. For that comb, write $B_i=X_i\mathbin{\dot\cup}Y_i$. The local clauses mean that $Y_i$ is $\mathcal F_1$-free, $(A^i_1,\ldots,A^i_{t_i})$ partitions $X_i$ into nonempty blocks forming a pure blockade with $\mathcal F_2$-free pattern, and each vertex in another $B_h$ is pure to each $A^i_j$. These are the partition clauses of [[def-structural-comb-partition-hypothesis]]; its universal assertion about all combs is not assumed.

[F1] A common Erdős–Hajnal constant $c$ supplies a clique or stable set of size at least $n^c$ in each nonempty $n$-vertex $\mathcal F_1$-free or $\mathcal F_2$-free graph ([[def-erdos-hajnal-property-and-constant]]). Induced subgraphs of a family-free graph remain family-free ([[def-h-free-and-family-free-graph]]).

[F2] A pure blockade has pairwise complete or anticomplete blocks; its pattern records precisely the complete pairs ([[def-complete-anticomplete-pure-and-x-sparse-blockades]], [[def-pattern-graph-of-a-pure-blockade]]). Blockades have disjoint nonempty blocks and the stated lower bounds on length and width ([[def-blockade-length-and-width]]).

[F3] Integral geometric layers use the cutoff $m_r=\min\{t,\lfloor\ell^{r/2}\rfloor\}$ and consecutive blocks through the first cutoff attaining $t$ ([[def-integral-geometric-layers-of-a-decreasing-block-partition]]).

[F4] Positive real powers satisfy the product and iterated-power laws ([[thm-real-power-laws]]); monotonicity follows from their exponential-logarithm definition ([[def-real-power]], [[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]]).

[F5] The geometric series with ratio $1/16$ has sum $16/15$ ([[thm-geometric-series]]).

## Proof

**Proof technique:** contradiction.

1.1 Set $c_1=c_3=c/4>0$ and $c_2=10/c>0$. Fix an arbitrary $\overline{\mathcal H}$-free finite graph $G$ and a special-vertex $(\ell,w)$-comb from [[def-property-star-for-a-finite-family]], with integral $\ell\ge4$ and real $w\ge4$. Use its supplied local partition. Suppose that all three property-$(*)$ outcomes with these constants fail. [given, assume-contra]

2.1 If $|Y_i|\ge w/2$ for some $i$, then $Y_i$ is nonempty and [F1] supplies a clique or stable set of size at least $(w/2)^c\ge w^{c/2}\ge w^{c/4}$, since $w\ge4$. This contradicts the first failure. Hence every $|Y_i|<w/2$, and $|B_i|\ge w$ implies $|X_i|>w/2$. [given, F1, F4, step 1.1, algebra]

2.2 If every partition has a block $D_i=A^i_{j_i}$ of size at least $w/(2\ell)$, choose one for each of the finitely many indices $i$. Fix distinct $i,h$. Each vertex of $D_h$ is complete or anticomplete to $D_i$ by the local external-purity clause. Two vertices of $D_h$ with opposite relations would make any vertex of the nonempty $D_i$ mixed on $D_h$, contrary to the same clause with $i,h$ reversed. Thus $D_i,D_h$ are pure. The disjoint sequence $(D_1,\ldots,D_\ell)$ is consequently a pure blockade of width at least $w/(2\ell)\ge w/\ell^2$, contradicting the third failure. [given, F2, step 1.1, choose, algebra]

3.1 By step 2.2 there is an index $i$ such that every $|A^i_j|<w/(2\ell)$, hence is at most this bound. Put $X=X_i$, $t=t_i$, and reorder these blocks as $A_1,\ldots,A_t$ in nonincreasing size. Reordering preserves purity and changes the pattern only by relabelling. Since $w/2<|X|=\sum_{j=1}^t|A_j|\le tw/(2\ell)$, we have $t\ge\ell$. The reordered pattern is still $\mathcal F_2$-free. [given, F2, step 2.1, step 2.2, algebra]

4.1 Form the cutoffs of [F3]. They reach $t$: for example, $\ell^{t/2}\ge2^t\ge t$ for the positive integer $t$, the latter elementary inequality following by induction. Let $q$ be the first index with $m_q=t$. Since $m_1\le\sqrt\ell<\ell\le t$, we have $q\ge2$. For $2\le r\le q$, the integer $m_{r-1}+1$ is at most $t$ and at most $2\ell^{(r-1)/2}\le\ell^{r/2}$, so $m_r\ge m_{r-1}+1$. Thus all layers $C_1,\ldots,C_q$ are nonempty and partition the blocks in order. [F3, F4, step 3.1, construct, algebra]

5.1 For $1\le r<q$, put $x=\ell^{r/2}\ge2$. Then $m_r=\lfloor x\rfloor\ge2$, so $x<m_r+1\le m_r^2$, yielding $m_r\ge\sqrt x=\ell^{r/4}$. Also $m_1\le\ell^{1/2}$ and each $C_{r+1}$ contains at most $m_{r+1}\le\ell^{(r+1)/2}$ blocks, including when $r+1=q$. [F3, F4, step 4.1, algebra]

6.1 Suppose a preterminal layer $C_r$, $1\le r<q$, has every block of size at least $w/\ell^{5r/2}$. The first $m_r$ blocks all have at least that size by their nonincreasing order. Their induced pattern is nonempty and $\mathcal F_2$-free, so [F1] gives a pattern clique or stable set $S$ of integral cardinality $k\ge m_r^c\ge\ell^{cr/4}$. By [F2], the blocks indexed by $S$ form a complete or anticomplete blockade of length $k$ and width at least $w/\ell^{5r/2}$. [F1, F2, F4, step 3.1, step 5.1, assume-hyp]

7.1 Since $k^{10/c}\ge\ell^{5r/2}$ and $k\ge\ell^{cr/4}\ge\ell^{c/4}$, this blockade has width at least $w/k^{10/c}$ and satisfies the second property-$(*)$ outcome. That contradicts step 1.1. Therefore every preterminal $C_r$ contains a block of size strictly less than $w/\ell^{5r/2}$. [F4, step 1.1, step 6.1, algebra]

8.1 The first layer contributes at most $\ell^{1/2}w/(2\ell)=w/(2\sqrt\ell)\le w/4$ vertices. For $1\le r<q$, every block in $C_{r+1}$ follows the small block in $C_r$ and has size less than $w/\ell^{5r/2}$. Hence $C_{r+1}$ contributes less than $w\ell^{(r+1)/2-5r/2}=w\ell^{1/2-2r}$. [F4, step 3.1, step 5.1, step 7.1, algebra]

9.1 Because $\ell\ge4$ and $1/2-2r<0$, the sum of the latter bounds is at most $w\sum_{r\ge1}4^{1/2-2r}=(w/8)\sum_{s\ge0}16^{-s}=2w/15$. All layers have been counted, so $|X|<w/4+2w/15=23w/60<w/2$, contradicting step 2.1. [F4, F5, step 4.1, step 8.1, step 2.1, algebra, discharge-contradiction]

10.1 Thus one of the three outcomes holds for every special-vertex comb required by [[def-property-star-for-a-finite-family]], with constants independent of $G$ and the comb. This proves that $\mathcal H$ has property $(*)$. [step 1.1, step 9.1, discharge-contradiction] ∎
