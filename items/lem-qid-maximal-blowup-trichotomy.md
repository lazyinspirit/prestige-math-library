---
id: lem-qid-maximal-blowup-trichotomy
kind: lemma
title: "Qid maximal blowup trichotomy"
status: draft
origin: pipeline
deps: [lem-local-special-copy-trichotomy, lem-few-induced-copies-exclude-a-fixed-labelled-blowup, lem-good-copy-extension-count, lem-qid-bipartite-density-trimming, lem-qid-fixed-size-density-selection, thm-real-power-laws, lem-integer-part]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "4.3 complete proof"
proof_strategy: direct
---

## Statement

For a nonempty finite graph $H$, $g\in V(H)$ and $\alpha>0$, there exist $\beta,\gamma>0$ such that for every finite graph $G$ with $n=|G|\geq2$ and $0<x\leq1/(8h)$, where $h=|H|$, at least one of the following holds:

- Some $A\subseteq V(G)$ has $|A|\geq x^\beta n$ and $\operatorname{ind}_{H-g}(G[A])<x^\alpha|A|^{h-1}$.
- $\operatorname{ind}_H(G)\geq x^\gamma n^h$.
- Disjoint $A,B\subseteq V(G)$ have $|A|\geq x^\beta n$, $|B|\geq n/(2h)$, and $B$ is $x$-sparse to $A$ in $G$ or $\overline G$.

## Facts & Assumptions

**Given:** A fixed nonempty $H$, $g\in V(H)$, $\alpha>0$, and arbitrary $G,x$ in the stated ranges.

[F1] For every real $y$, its unique integer part satisfies $\lfloor y\rfloor\leq y<\lfloor y\rfloor+1$. ([[lem-integer-part]]).

[F2] From [[lem-few-induced-copies-exclude-a-fixed-labelled-blowup]]: If $\operatorname{ind}_J(G)<(t/j)^j$, no $(t,1/j)$-blowup of $J$ exists in $G$.

[F3] For a nonempty pattern with distinguished vertex $g$, parameters $b,c>0$, $a=b+(1+c)|H|$, and disjoint sets $A,B$ with at least $x|B|$ nonneighbors in $B$ for every vertex of $A$, $0<x\leq1/2$, the local trichotomy gives a few-$(H-g)$ subset of $B$ of relative size at least $x$, at least $x^a|A||B|^{|H|-1}$ induced $H$ embeddings, or a pair of relative sizes at least $x^a$ with cross density at most $2x^c$. ([[lem-local-special-copy-trichotomy]]).

[F4] From [[lem-qid-fixed-size-density-selection]]: Some $m$-subset $C\subseteq A$ satisfies $e_G(C,B)\leq m e_G(A,B)/N$.

[F5] From [[lem-qid-bipartite-density-trimming]]: If $e_G(A,B)\leq c|A||B|$, then some $A^{\prime}\subseteq A$ with $|A^{\prime}|\geq|A|/2$ has $|N_G(v)\cap B|\leq2c|B|$ for every $v\in A^{\prime}$.

## Proof

1.1 If $h=1$, take $\beta=\gamma=1$; the count is $n\geq xn$. For $h\geq2$, first prove the assertion when $1/x$ is an integer. Enlarge $\alpha$ to a positive integer at least $h(h+1)$, using [F1]; proving the smaller copy threshold for this enlarged exponent implies the original first alternative. Set $r_h=0$, $r_i=\alpha+2h+1+(h+1)r_{i+1}$ for $i<h$, $\beta_0=r_1+3$, and $\gamma_0=2r_1+h\beta_0$. These are positive integers, $r_i\geq1$ for $i<h$, and $r_1\geq k r_k$ for $1\leq k<h$: iterating $r_i\geq(h+1)r_{i+1}$ gives $r_1\geq(h+1)^{k-1}r_k\geq kr_k$. [F1, given]

2.1 If $x^{\beta_0}n\leq1$, choose a vertex $v$. Of its neighbors and nonneighbors outside $v$, one has size at least $(n-1)/2\geq n/(2h)$. That set is anticomplete to $A=\{v\}$ in one of the two graphs, proving the third alternative. Hence assume $x^{\beta_0}n>1$ and all three alternatives fail for $\beta_0,\gamma_0$. [step 1.1, given]

3.1 Let $t=\lfloor x^{\beta_0-1}n\rfloor$. The argument exceeds $1/x\geq2$, so [F1] gives $t\geq x^{\beta_0-1}n/2\geq x^{\beta_0}n>1$. Put $t_i=x^{-r_i}t$, $q_i=x^{r_i}/h$; the reciprocal-integer assumption makes every $t_i$ an integer, and $t_1\leq x^2n<n$. Since $2r_1/h\geq1$, we have $\gamma_0/h\geq\beta_0+1$, whence $t\geq x^{\beta_0}n\geq h x^{\gamma_0/h}n$. Failure of the count alternative and [F2] exclude a $(t_h,q_h)=(t,1/h)$-blowup of $H$. [F1, F2, step 1.1, step 2.1]

4.1 A one-label subgraph of $H$ has a $(t_1,q_1)$-blowup by taking any $t_1$ vertices. Among finitely many vertex subsets of $H$ admitting the specified blowup, take one of greatest size, say $J$ of size $1\leq k<h$, with blocks $A_j$. Choose $w\in V(H)\setminus V(J)$ and let $L=\bigcup_j A_j$. Outside $L$, let $M_j$ contain vertices with at most $x|A_j|$ neighbors if $wj$ is an edge of $H$, or at most $x|A_j|$ nonneighbors otherwise. If $|M_j|\geq n/(2h)$, then $A_j,M_j$ give the third alternative. Thus every $|M_j|<n/(2h)$. Also $|L|=kt_k\leq h x^2 n\leq n/(2h)$. Consequently $Z=V(G)\setminus(L\cup\bigcup_jM_j)$ has size at least $n/2$. [step 2.1, step 3.1, algebra]

5.1 Write $R=r_{k+1}$, $\Delta=r_k-R$, and $s=x^\Delta$. Then $t_{k+1}=s t_k$, $q_{k+1}=q_k/s$, and $a_*=\alpha+(R+2)h=\Delta-1$. Fix $j\in V(J)$ and $Y\subseteq Z$ of size at least $|Z|s^{k-1}$. If $wj$ is a nonedge, apply [F3] to $H,g,G,Y,A_j$ with its parameters $b=\alpha$, $c=R+1$. Its nonneighbor hypothesis holds by the definition of $Z$. If $wj$ is an edge, apply it to $\overline H,g,\overline G,Y,A_j$. Complementing both graphs preserves every induced embedding and the count of $H-g$; thus the same first two contradictions below apply in this case too. [F3, step 4.1, algebra]

6.1 The first outcome of [F3] would give a set of size at least $x t_k=x^{1-r_k}t\geq t\geq x^{\beta_0}n$ with the forbidden few-copy property. For the second, $|Y|\geq n x^{(k-1)\Delta}/2\geq n x^{r_1}$: indeed $(k-1)\Delta+1\leq k r_k\leq r_1$ and $1/2\geq x$. Also $|A_j|\geq x^{\beta_0}n$ and $a_*\leq r_k$. Therefore its lower count is at least $x^{r_k+r_1+\beta_0(h-1)}n^h\geq x^{\gamma_0}n^h$. Both outcomes are excluded. The third gives $E\subseteq A_j$, $D\subseteq Y$ of relative sizes at least $x^{\Delta-1}=s/x$, with cross density at most $2x^{R+1}$ in the graph chosen in the previous step. [F3, step 3.1, step 5.1, algebra]

7.1 Because $|E|\geq(s/x)t_k=t_{k+1}/x\geq2t_{k+1}$, [F4] chooses $C\subseteq E$ of exactly $2t_{k+1}$ vertices without increasing its cross density to $D$. Apply [F5] to $D,C$ to get $X\subseteq D$ of size at least $|D|/2\geq s|Y|$, with degrees into $C$ at most $4x^{R+1}|C|\leq(q_{k+1}/2)|C|$. This is the required one-block processing step. [F4, F5, step 6.1, algebra]

8.1 Process the $k$ labels in any fixed order, starting with $Y=Z$ and replacing $Y$ by $X$ at each step. Before the last step its size is at least $|Z|s^{k-1}$, so the preceding construction applies every time. Degree bounds into previously chosen $C_j$ survive restriction of their source set. The final $X$ has size at least $n s^k/2\geq n x^{\beta_0-1-R}\geq t_{k+1}$: use $k\Delta+1+R\leq kr_k+1\leq r_1+1<\beta_0-1$ and $1/2\geq x$. Take $D_w\subseteq X$ of size $t_{k+1}$. [step 1.1, step 7.1, algebra]

9.1 For each $j$, the bound from $D_w$ into $C_j$ implies cross density at most $q_{k+1}/2$. Applying [F5] to $C_j,D_w$ supplies at least $|C_j|/2=t_{k+1}$ vertices with degree into $D_w$ at most $q_{k+1}|D_w|$; take exactly that many as $D_j$. The reverse degree bound into $D_j$ follows from the old bound into $C_j$: it is at most $(q_{k+1}/2)\,2t_{k+1}=q_{k+1}|D_j|$. For two old labels, restricting the target from $A_j$ to $D_j$ changes the bound by a factor at most $1/s$, giving $q_k/s=q_{k+1}$ in both directions. Thus these disjoint sets form a $(t_{k+1},q_{k+1})$-blowup on $J\cup\{w\}$, contrary to maximality. This proves the reciprocal-integer case. [F5, step 4.1, step 5.1, step 8.1]

10.1 For arbitrary allowed $x$, put $N=-\lfloor-1/x\rfloor$ and $y=1/N$. By [F1], $1/x\leq N<1/x+1$, so $x/(1+x)<y\leq x$ and in particular $x^2\leq y\leq x$. Apply the proved case at $y$ and take final $\beta=2\beta_0$, $\gamma=2\gamma_0$. Then $y^{\beta_0}\geq x^\beta$, $y^{\gamma_0}\geq x^\gamma$, $y^\alpha\leq x^\alpha$, and $y$-sparsity implies $x$-sparsity. Each of the three alternatives therefore implies its required counterpart at $x$, including the original unenlarged $\alpha$. [F1, step 1.1, step 9.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 4.3 complete proof.
