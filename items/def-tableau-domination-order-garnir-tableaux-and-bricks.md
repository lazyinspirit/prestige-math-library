---
id: def-tableau-domination-order-garnir-tableaux-and-bricks
kind: definition
title: "The domination order on tableaux, Garnir tableaux and bricks"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-young-tableau-standard-tableau-and-shape,
       def-dominance-order-on-partitions,
       def-removable-and-addable-nodes-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition,
       def-bruhat-order-on-the-symmetric-group,
       lem-bruhat-order-basic-properties-for-permutations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan, Alexander Kleshchev and Weiqiang Wang, Graded Specht modules, arXiv:0901.0218v3, J. reine angew. Math. 655 (2011) 61-87 (complete 23-page article)"
      url: "https://arxiv.org/pdf/0901.0218"
      locator: "Section 3.2-3.4, printed pp. 10-12: tableaux of multicomposition shape, row-strict and standard tableaux, the Bruhat order on tableaux and Lemmas 3.3-3.7; the weak Bruhat graph and terminal tableaux; the (a,b,n)-Garnir belt and Garnir tableau and Lemma 3.9; Propositions 3.8 and 3.10 with their proofs. Complete passage read."
    - title: "Jun Hu and Andrew Mathas, Graded induction for Specht modules, arXiv:1008.1462v1 (complete 19-page article)"
      url: "https://arxiv.org/pdf/1008.1462"
      locator: "Introduction pp. 1-2 and Section 2 pp. 3-12: the induced graded Specht filtration and the strong-dominance statements used by the consumers of these conventions; complete relevant passages read."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Definition

Retain English Young diagrams, an $l$-multicomposition $\mu$ of $d$, its
diagram, and the row-reading initial standard tableau $t^\mu$, in which
$1,2,\dots,d$ appear in order along the successive rows from top to bottom
([[def-partition-young-diagram-and-conjugate-partition]]); for a single
component this is the standard tableau of
[[def-young-tableau-standard-tableau-and-shape]]. A $\mu$-tableau $T$ is a
placement of $1,\dots,d$ in the nodes of $\mu$. It is **row-strict** if its
entries increase from left to right in every row of every component, and
**standard** if it is row- and column-strict. The group $S_d$ acts on tableaux
by its action on entries, and for a $\mu$-tableau $T$ the permutation $w_T$ is
defined by $w_Tt^\mu=T$. The **strong Bruhat order** on tableaux is
$$S\le_BT\quad:\Longleftrightarrow\quad w_S\le w_T$$
in the Bruhat order of [[def-bruhat-order-on-the-symmetric-group]], identified
with its one-based realization as in
[[lem-bruhat-order-basic-properties-for-permutations]]. We write $S\unlhd T$
for $S\le_BT$ and $S\lhd T$ for strict order; the separately declared meaning
of $\unrhd$ on partitions ([[def-dominance-order-on-partitions]]) is not
reused for tableaux. On row-strict $S,T$ the order $\unlhd$ is equivalent to
the prefix-shape comparison
$$\operatorname{sh}(S^{\le a})\unrhd\operatorname{sh}(T^{\le a})\quad\text{for every }a,$$
where $T^{\le a}$ erases the nodes occupied by entries $>a$ and
$\operatorname{sh}$ records the resulting row lengths read in row-reading
order; this row-sequence dominance is distinct from the weak Bruhat order and
must not be reversed. The transposition criterion is
$$S=(a_1\,b_1)\cdots(a_m\,b_m)T$$
with $a_n<b_n$ and $b_n$ occupying an earlier row-reading node than $a_n$ in
$(a_{n+1}\,b_{n+1})\cdots(a_m\,b_m)T$ for each $n$.

For entries $r,s$ of one component define $r\to_Ts$ if they lie in the same row
and $s$ is strictly to the right of $r$; $r\downarrow_Ts$ if they lie in the
same column and $s$ is strictly below $r$; and $r\nearrow_Ts$ if $s$ is
strictly above and strictly right of $r$ (south-west is the reverse of
$\nearrow_T$). A **weak Bruhat graph edge** $T\xrightarrow{r}S$ requires both
tableaux standard, $S=s_rT$, and $r$ occupying an earlier row-reading node
than $r+1$. Equivalently $r+1\nearrow_Tr$, or $r$ lies in an earlier component
than $r+1$. In particular a same-row or same-column swap is NOT a standard
edge. A **terminal path** is a directed path in this graph, and $T$ is
$(r_1,\dots,r_m)$-**terminal** if there are standard tableaux
$S_1\xrightarrow{r_1}S_2\xrightarrow{r_2}\cdots\xrightarrow{r_m}T$.

The **Garnir belt** at a node $(a,b,n)$ with $(a+1,b,n)$ also a node of $\mu$
consists of the nodes $(a,c,n)$ for $b\le c\le\mu_a$ and the nodes
$(a+1,g,n)$ for $1\le g\le b$. The **Garnir tableau** of shape $\mu$ at
$(a,b,n)$ is the unique maximal standard $\mu$-tableau in the order $\unlhd$
among the standard $\mu$-tableaux agreeing with $t^\mu$ outside the
$(a,b,n)$-Garnir belt; it equals $t^\mu$ in the degenerate case
$b=1=\mu_a$. A **horizontal brick** is a string of consecutive entries along
same-row right arrows. For the vertical exceptional-prefix and terminal assertions assume that
$\mu$ is a multipartition; the rank, prefix-order and row-sorting assertions
allow multicompositions. The following source facts are retained with these
exact conventions and are proved below: the transposition criterion and the
prefix-shape criterion; the row-strictness of a vertical consecutive swap and
its exceptional-prefix comparison; agreement outside the Garnir belt for
tableaux below a Garnir tableau; and the four terminal alternatives for a
horizontal or vertical consecutive pair, the last alternative being $t^\mu$
for a horizontal pair and the corresponding Garnir tableau for a vertical
pair. No choice.

## Facts & Assumptions

**Given:** An $l$-multicomposition $\mu$ of $d$, its row-reading initial
standard tableau $t^\mu$, the notions of row-strict and standard tableaux,
removable and addable nodes ([[def-removable-and-addable-nodes-of-a-partition]])
and partition dominance ([[def-dominance-order-on-partitions]]) for single
components, and the one-based permutation Bruhat order with its basic
properties. We prove the finite combinatorial facts displayed in the
Definition.

[F1] For a partition, tableaux are maps from the diagram with the standard
condition and the left action of $S_n$ as declared in
[[def-young-tableau-standard-tableau-and-shape]]; extending componentwise
defines $\mu$-tableaux, row-strictness, standardness and the action used here.

[F2] Dominance of partitions of $n$ is the partial order by prefix sums,
$\lambda\unrhd\nu$ for all $k$, as declared in
[[def-dominance-order-on-partitions]]; we use the same prefix-sum comparison
on row sequences of multicompositions.

[F3] Removable and addable nodes of a partition are as declared in
[[def-removable-and-addable-nodes-of-a-partition]]; a node $(a,b,n)$ with
$(a+1,b,n)$ a node lets us speak of a two-row belt.

[F4] Young diagrams, their English orientation and the nodes of a
multicomposition are as declared in
[[def-partition-young-diagram-and-conjugate-partition]].

[F5] For $\sigma,\tau\in S_d$ the Bruhat order is the rank-inequality order
$r_\sigma(p,q)\ge r_\tau(p,q)$ for all $p,q$, identified with the one-based
realization by shifting inputs and values by $1$
([[def-bruhat-order-on-the-symmetric-group]]).

[F6] This order is the strong Bruhat order of type $A$: it is the transitive
closure of the covers $x\to tx$ with $t$ a transposition and
$\ell(tx)=\ell(x)+1$; it is graded by length, with every saturated chain from
$y$ to $w$ of length $\ell(w)-\ell(y)$; and $y\le w$ implies $\ell(y)\le\ell(w)$
with equality only for $y=w$
([[lem-bruhat-order-basic-properties-for-permutations]]).

## Proof

**Proof technique:** direct.

1.1 **The permutation criterion.** Let $t=(a\ b)$ with $a<b$ act on values and write $p=x^{-1}(a)$, $q=x^{-1}(b)$. If $p<q$, direct inversion counting gives $\ell(tx)-\ell(x)=1+2\#\{j:p<j<q,\ a<x(j)<b\}>0$; if $p>q$ the difference is its negative. A positive difference need not equal one. The rank inequalities in [F5] show $x<tx$ precisely in the first case: the rank count decreases by one for $p\le h<q$ and $a\le k<b$, and is unchanged elsewhere. Thus every displayed earlier-node transposition lowers strong Bruhat order. Conversely a saturated strong-Bruhat chain from $w_S$ to $w_T$ consists of transposition covers by [F6], each of whose inverse lowering move has the earlier larger value by the formula just proved. Reading this chain backwards yields the displayed transposition criterion. [F5, F6, algebra]

1.2 **Agreement outside the Garnir belt.** In the row-reading initial labelling the two pieces of the belt form one contiguous interval of positions $[L,U]$: the upper-row tail is immediately followed by the lower-row prefix. A Garnir tableau changes labels only inside this interval, so $w_T$ is in the parabolic subgroup generated by $s_L,\ldots,s_{U-1}$. Sorting its interval permutation gives a reduced expression using only these generators. The Bruhat subword criterion applied to this expression says that every $w_S\le w_T$ likewise uses only these generators. Hence $w_S$ fixes all positions outside $[L,U]$, proving agreement with $t^\mu$ outside the belt. This applies even to nonstandard $S$. [F5, F6, algebra]

2.1 **The prefix-shape criterion.** For a row-strict $W$ and a value $c$, row-strictness makes the entries $\le c$ in each row a prefix, so $\operatorname{sh}(W^{\le c})$ is a row sequence of size $c$, and for $p=P_k+t$ with $P_k$ the number of nodes in the first $k$ rows and $0\le t<\mu_{k+1}$ we get $$N_W(p,c):=\#\{i\le p:\text{entry }i\text{ of }W\le c\}=A_k(W,c)+\min\bigl(t,s_{k+1}(W,c)\bigr),$$ where $A_k(W,c)$ is the number of entries $\le c$ in the first $k$ rows and $s_{k+1}(W,c)$ the prefix length in row $k+1$. By [F5], $w_S\le w_T$ iff $N_S(p,c)\ge N_T(p,c)$ for all $p,c$. At $p=P_k$ this says $A_k(S,c)\ge A_k(T,c)$ for all $k,c$, which is exactly $\operatorname{sh}(S^{\le c})\unrhd\operatorname{sh}(T^{\le c})$ for all $c$; hence the prefix criterion is necessary. Conversely assume all these prefix inequalities, fix $p=P_k+t$ and put $a=A_k(S,c)-A_k(T,c)\ge0$, $s=s_{k+1}(S,c)$, $s'=s_{k+1}(T,c)$; the inequality at $k+1$ gives $a+s\ge s'$. If $t\le s$ then $a+\min(t,s)=a+t\ge\min(t,s')$, because $t\le s'$ gives $a+t\ge t$ and $t>s'$ gives $a+t\ge t\ge s'$; if $t>s$ then $a+\min(t,s)=a+s\ge s'\ge\min(t,s')$. Thus $N_S(p,c)\ge N_T(p,c)$ for all $p,c$ and $S\unlhd T$. Since the first $k$ rows of $t^\mu$ contain $\min(c,P_k)$ entries $\le c$, the maximum possible, $\operatorname{sh}(t^{\mu\le c})$ dominates every $\operatorname{sh}(W^{\le c})$, so $t^\mu$ is the least element of $\unlhd$ on row-strict tableaux. [F1, F2, step 1.1, algebra, F2]

3.1 **Consecutive swaps and the edges of the weak graph.** Let $T$ be standard. If $r,r+1$ share a row, row-strictness puts $r$ immediately left of $r+1$ and the swap reverses an adjacent pair, so $s_rT$ is not row-strict; if they share a column, column-strictness puts $r$ immediately above $r+1$ and the swap reverses an adjacent column pair, so $s_rT$ is not column-strict. If in one component $r+1$ lies strictly above and strictly left of $r$, let $x$ be the entry of $T$ in the node in the row of $r$ and the column of $r+1$: row-strictness gives $x<r$ while column-strictness gives $x>r+1$, impossible, and symmetrically $r$ cannot lie strictly above and strictly left of $r+1$. The only remaining same-component configurations are $r\nearrow_Tr+1$ and $r+1\nearrow_Tr$; in either, the nodes sharing a row or column with the two positions are unchanged except for the interchange of the consecutive values $r,r+1$, so all strict neighbour inequalities survive and $s_rT$ is standard. If $r,r+1$ lie in different components the swap is standard as well. This proves the stated equivalence. For the edge criterion note that $S=s_rT$ with both standard and $r$ earlier than $r+1$ in $T$: in one component the alternatives of the equivalence leave only $r+1\nearrow_Tr$ (in the other alternative $r+1$ is in a higher row and hence earlier, and same-row or same-column swaps are excluded), while in different components $r$ is earlier exactly when its component is earlier. [F1, step 2.1, algebra]

3.2 **Row sorting.** Let $S,T$ be $\mu$-tableaux with $S\unlhd T$; by steps 1.1 and 2.1 it suffices to treat a single transposition $S=(a\,b)T$ with $a<b$ and $b$ earlier than $a$ in $T$, the general case following by composing the finitely many single-swap comparisons. Write $S^+,T^+$ for the tableaux obtained by sorting every row increasingly. If $a,b$ share a row of $T$, then $S$ and $T$ have the same row sets and $S^+=T^+$. Otherwise the node of $b$ lies in a strictly earlier row than the node of $a$: they are in different rows by the previous sentence, and $b$ earlier than $a$ forces $b$'s row to be the earlier one. Entries other than $a,b$ occupy the same nodes in $S$ and $T$. For a value $c$, the prefix row lengths of $S^+$ and $T^+$ at $c$ are the rows' counts of entries $\le c$; if $c<a$ or $c\ge b$ these counts agree, while if $a\le c<b$ the count vector of $S^+$ is obtained from that of $T^+$ by moving one unit from the row of $a$ to the earlier row of $b$. Moving a unit to an earlier row raises every partial sum of the row sequence, so $\operatorname{sh}(S^{+\le c})\unrhd\operatorname{sh}(T^{+\le c})$ for every $c$; both tableaux are row-strict, so step 2.1 gives $S^+\unlhd T^+$. Hence $S\unlhd T$ implies $S^+\unlhd T^+$ in general. [step 1.1, step 2.1, algebra]



4.1 **The vertical consecutive swap and its exceptional prefix.** Assume $\mu$ is a multipartition, $T$ standard, $r\downarrow_Tr+1$, so $r$ and $r+1$ occupy adjacent rows $a,a+1$ of one component in the same column $b$; the neighbour check of step 3.1 shows that $U:=s_rT$ is row-strict. Let $S$ be standard with $S\lhd U$; we prove $S\unlhd T$. By step 2.1, $\operatorname{sh}(S^{\le c})\unrhd\operatorname{sh}(U^{\le c})$ for all $c$, and for $c\ne r$ the tableaux $U^{\le c}$ and $T^{\le c}$ occupy the same nodes, so their shapes agree. For $c=r$ let $A_k$ be the number of entries $\le r-1$ in the first $k$ rows of $T$ (the same for $U$) and note that $\operatorname{sh}(U^{\le r})$ has row lengths $A_k-A_{k-1}+[k=a+1]$ while $\operatorname{sh}(T^{\le r})$ has $A_k-A_{k-1}+[k=a]$; thus $\operatorname{sh}(T^{\le r})$ is obtained from $\operatorname{sh}(U^{\le r})$ by moving one node from row $a+1$ up to row $a$. Because $T$ is standard, the node of $r$ in row $a$ has column $b$, so exactly $b-1$ entries of row $a$ lie in columns $<b$, all of them $\le r-1$, and the same count holds in row $a+1$ whose node in column $b$ is occupied by $r+1$; hence $A_a-A_{a-1}=b-1=A_{a+1}-A_a$ and the switch hypothesis $\operatorname{sh}(U^{\le r})_a-\operatorname{sh}(U^{\le r})_{a+1}=(b-1)-((b-1)+1)=-1$ holds. Lemma 3.1 of the source, proved here: if $\nu$ is a row sequence and $\nu_a-\nu_{a+1}=-1$, and $\hat\nu$ interchanges the two consecutive parts $\nu_a,\nu_{a+1}$, then $\hat\nu$ has the same partial sums as $\nu$ except at index $a$, where they are larger by one; consequently any multipartition $\lambda$ with $\lambda\unrhd\nu$ also satisfies $\lambda\unrhd\hat\nu$: if its partial sum at $a$ equalled that of $\nu$, the inequalities at $a-1$ and $a+1$ would force $\lambda_a\le\nu_a<\nu_{a+1}\le\lambda_{a+1}$, contradicting the weakly decreasing parts in that component. Thus its partial sum at $a$ is at least one larger; other partial sums are unchanged. Apply this with $\lambda=\operatorname{sh}(S^{\le r})$, $\nu=\operatorname{sh}(U^{\le r})$, $\hat\nu=\operatorname{sh}(T^{\le r})$: the row sequence of a standard tableau's prefix is a multipartition, and the computed switch identity verifies the hypothesis, so $\operatorname{sh}(S^{\le r})\unrhd\operatorname{sh}(T^{\le r})$. With the equalities for $c\ne r$, step 2.1 gives $S\unlhd T$. In the same-row case $r\to_Tr+1$ one has $T=U^+$ and $S=S^+$, so step 3.2 gives $S\unlhd T$ directly; this proves both clauses of the vertical exceptional-prefix fact. [step 2.1, step 3.2, algebra]

4.2 **The four terminal alternatives (horizontal).** Let $\mu$ be a multipartition and $T$ be standard with $r\to_Tr+1$. Consider the three properties: (a) there is $t$ with $|t-r|>1$ such that $t\nearrow_Tt+1$ or $t$ lies in a later component than $t+1$; (b) $r+1\nearrow_Tr+2$ or $r+1$ lies in a later component than $r+2$; (c) $r-1\nearrow_Tr$ or $r-1$ lies in a later component than $r$. By step 3.1 an incoming edge at $t$ (that is, $s_tT$ standard with $t$ earlier than $t+1$ in $s_tT$) is equivalent to $t\nearrow_Tt+1$ or $t$ in a later component than $t+1$. If (a) holds, then $X:=s_tT$ is standard and $X\xrightarrow{t}T$ is an edge, so $T$ is $t$-terminal, and since $t\notin\{r,r+1\}$ the relation $r\to_Tr+1$ persists in $X$; this is alternative (1). If (b) holds with $r+1\nearrow_Tr+2$, then in $X:=s_{r+1}T$ the entry $r+1$ occupies the higher node of $r+2$, so $X\xrightarrow{r+1}T$ is an edge; since $r,r+1$ are adjacent in one row and $r+2$ is above and right, $r+1$ is above and right of $r$ in $X$, so $Y:=s_rX$ is standard and $Y\xrightarrow{r}X$ is an edge with $r$ moving to the higher node, and in $Y$ the entries $r+1,r+2$ are adjacent in one row with $r+1$ to the left; this is alternative (2). If (b) holds with $r+1$ in a later component than $r+2$, the same construction with component arguments gives (2). If (c) holds, the mirror construction gives (3). It remains to observe that if none of (a),(b),(c) holds, then $T$ has no incoming edge: indeed (a) is exactly the incoming-edge alternative at any $t\notin\{r-1,r,r+1\}$, (c) at $t=r-1$, and (b) at $t=r+1$, while at $t=r$ both alternatives of step 3.1 fail because $r$ and $r+1$ lie in one row with $r$ to the left. A standard tableau with no incoming edge is $t^\mu$: if $T\ne t^\mu$, choose the least $t$ with the node of $t+1$ earlier than the node of $t$ in $T$ (such $t$ exists because otherwise the entries occur in the order $1,2,\dots,d$); then standardness forces $t\nearrow_Tt+1$ or an earlier component for $t+1$, so the incoming-edge alternative at $t$ holds and gives the existence of an edge into $T$, a contradiction. Hence in this final case $T=t^\mu$, which is alternative (4). [step 1.1, step 3.1, algebra]

5.1 **The vertical terminal alternatives.** Let $\mu$ be a multipartition and $r\downarrow_Tr+1$ at $(a,b,n)$, so the two nodes are vertically adjacent. Use the following precise tests: (a) an incoming edge $t$ with $|t-r|>1$; (b) $r\nearrow_Tr+2$ or $r+1$ is in a later component than $r+2$; (c) $r-1\nearrow_Tr+1$ or $r-1$ is in a later component than $r$. Test (a) gives $s_tT\xrightarrow{t}T$ and preserves the vertical pair. In test (b), standardness and the consecutiveness of the three entries force $s_{r+1}T$ and $s_rs_{r+1}T$ to be standard: the node of $r+2$ is above and right of $r$, hence above and right of the node of $r+1$, and after the first swap the nodes of $r,r+1$ are incomparable. Thus $s_rs_{r+1}T\xrightarrow{r}s_{r+1}T\xrightarrow{r+1}T$, while $r+1,r+2$ occupy the original vertical pair in $s_rs_{r+1}T$. The different-component case uses the same two swaps without any within-component inequality. Test (c) gives the analogous $s_rs_{r-1}T\xrightarrow{r}s_{r-1}T\xrightarrow{r-1}T$, with $r-1,r$ in the original vertical pair. If none of the tests holds, labels other than the triple adjacent to $r$ cannot have an inversion between consecutive row-reading positions: any such inverse-order consecutive pair is in incomparable nodes or distinct components and is exactly an incoming edge. Reading $r-1,r-2,\ldots,1$ backwards and $r+2,r+3,\ldots,d$ forwards consequently places them in row-reading order except for the lower-row prefix before the vertical pair and the upper-row tail after it; tests (c) and (b) exclude any further excursion. More explicitly, if $L$ is the initial label at $(a,b,n)$ and $U$ the initial label at $(a+1,b,n)$, the forced belt filling is $L,\ldots,L+b-2$ in the first $b-1$ lower-row positions, $r=L+b-1$ in $(a,b,n)$, $r+1=L+b$ in $(a+1,b,n)$, and $L+b+1,\ldots,U$ in the remaining upper-row tail; all outside entries are unchanged. Among standard belt fillings this is Bruhat-maximal: the $b$ lower-row entries are the lexicographically smallest possible increasing subset, namely $L,\ldots,L+b-2,L+b$, because choosing the $b$ smallest would violate column $b$. Every other valid subset has no smaller prefix counts in the upper row, hence is below it by step 2.1. This is exactly the Garnir tableau, including $b=1=\mu_a$. A horizontal brick is a consecutive same-row string. All selections, chains and comparisons are finite, so no choice principle is used. [F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎
