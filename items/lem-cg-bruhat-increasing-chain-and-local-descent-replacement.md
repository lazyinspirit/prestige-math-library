---
id: lem-cg-bruhat-increasing-chain-and-local-descent-replacement
kind: lemma
title: "At most one increasing chain, rank-two diamonds, the lexicographically first chain, and the local descent replacement"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 17
deps: [def-cg-deletion-chain-labels-and-shelling, thm-cg-bruhat-lifting-and-cover-criterion, lem-cg-bruhat-right-exchange-and-augmentation, thm-cg-bruhat-subword-characterization, lem-cg-bruhat-chain-refinement-and-gradedness, def-cg-bruhat-order-by-reflection-chains, def-cg-finite-lattice-congruence-and-interval-projections, def-graded-poset-and-rank, def-poset-interval-and-finiteness-conditions, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Sections 2.2 and 2.5-2.7, printed pp. 33-36, 45 and 48-55 (augmentation and lifting; quotients; deleted-position labels of maximal chains; Lemmas 2.7.2-2.7.4, Theorem 2.7.5, Corollaries 2.7.10-2.7.11 and Exercise 13), and Appendix A2.2-A2.4, printed pp. 302-305 (Möbius and shellability facts; cited, not consumed)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $u<v$ in $W$, fix a reduced expression $v=s_1\cdots s_q$ and give $[u,v]$ the deleted-position labeling of [[def-cg-deletion-chain-labels-and-shelling]]. Let $([a,b],c)$ be a rooted interval of $[u,v]$ with its induced labeling (that item (3)): list its retained expression of the top $b$ in increasing order of the original positions as $t_1\cdots t_r$, so that $r=\ell(b)$ and the labels of the rooted interval are these original positions, an order-preserving relabelling that leaves every comparison of labels inside the one rooted interval unchanged; use *increasing*, *falling* and the lexicographic order of label words as in [[def-cg-finite-lattice-congruence-and-interval-projections]] (3).

**(i) At most one increasing chain.** $([a,b],c)$ has at most one maximal chain whose label word is increasing.

**(ii) Rank-two intervals are diamonds.** If $\ell(b)-\ell(a)=2$, then $[a,b]$ has exactly four elements, and its two maximal chains have label words $(i,j)$ and $(p,m)$ with $i<j$, $m<p$ and $i<j\le p$; the first word is increasing and the second is falling.

**(iii) The lexicographically first chain.** $([a,b],c)$ has exactly one increasing maximal chain, and it is the lexicographically first maximal chain of $([a,b],c)$.

**(iv) Local descent replacement.** Let $m\colon b=m_0\gtrdot m_1\gtrdot\cdots\gtrdot m_k=a$ be a maximal chain of $([a,b],c)$ and let $1\le e<k$ with $\lambda_e(m)>\lambda_{e+1}(m)$; let $c_m$ be the root $c$ extended by the prefix $m_0\gtrdot\cdots\gtrdot m_{e-1}$, and write the unique increasing maximal chain of the rooted rank-two interval $([m_{e+1},m_{e-1}],c_m)$ as $m_{e-1}\gtrdot y\gtrdot m_{e+1}$. Then $k':=m_0\gtrdot\cdots\gtrdot m_{e-1}\gtrdot y\gtrdot m_{e+1}\gtrdot\cdots\gtrdot m_k$ is a maximal chain of $([a,b],c)$ with $\lambda(k')\prec\lambda(m)$ and $k'\cap m=m\setminus\{m_e\}$.

## Facts & Assumptions

**Given:** Elements $u<v$ of $W$, a fixed reduced expression $v=s_1\cdots s_q$, a rooted interval $([a,b],c)$ of $[u,v]$ and its retained reduced expression $t_1\cdots t_r$ of the top $b$ with $r=\ell(b)$.

[F1] The deletion recursion is well defined: "the cover $x_j\gtrdot x_{j+1}$ determines a unique position $\lambda_{j+1}(m)\in P_j$ with $x_{j+1}=\prod_{p\in P_j\setminus\{\lambda_{j+1}(m)\}}s_p$, and this deletion word is a reduced expression of $x_{j+1}$"; the entries of a label word are pairwise distinct ([[def-cg-deletion-chain-labels-and-shelling]] (2)).

[F2] In a rooted interval the labels are deleted positions computed with the root chain fixed: "the label of a step of a maximal chain of $[a,b]$ is the position of the letter it deletes from that retained expression", and "a label is determined by the chain above its step and need not be a function of that step alone" ([[def-cg-deletion-chain-labels-and-shelling]] (2), (3)).

[F3] Reflection deletion: for a reduced expression $v=s_1\cdots s_q$, with $v_i:=s_1\cdots\widehat{s_i}\cdots s_q$ and $t_i:=(s_q\cdots s_{i+1})s_i(s_{i+1}\cdots s_q)$, one has "Then $v_i=vt_i$ and $v_i<v$; moreover $v_i$ is covered by $v$ if and only if $\ell(v_i)=q-1$" ([[thm-cg-bruhat-lifting-and-cover-criterion]] (3)).

[F4] Cover criterion: for $u\le v$ the following are equivalent: $u$ is covered by $v$; $\ell(v)=\ell(u)+1$; and $u=vt$ for some reflection $t\in T$ with $\ell(vt)=\ell(v)-1$ ([[thm-cg-bruhat-lifting-and-cover-criterion]] (2)).

[F5] Augmentation: for a reduced expression $w=s_1\cdots s_q$, write a reduced subword expression of $u$ by its deleted positions $D=\{i_1<\cdots<i_k\}$ and choose such a description with $i_k$ minimal. For $t=(s_q\cdots s_{i_k+1})s_{i_k}(s_{i_k+1}\cdots s_q)$ the supplier states: "Then $ut$ is the product of the word obtained from $s_1\cdots s_q$ by deleting only the letters at the positions $i_1,\dots,i_{k-1}$; that word has length $q-k+1=\ell(u)+1$, and it is a reduced expression of $ut$." ([[lem-cg-bruhat-right-exchange-and-augmentation]] (2)).

[F6] Subword characterization: "$u\le w$" holds if and only if some reduced expression of $u$ is a subword of a fixed reduced expression of $w$; "the indices may be chosen with $k=\ell(u)$, so that $s_{i_1}\cdots s_{i_k}$ is a reduced expression of $u$" ([[thm-cg-bruhat-subword-characterization]]).

[F7] Grading: "Every maximal chain in $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps, that is, $\ell(v)-\ell(u)+1$ elements; hence $[u,v]$ is a graded poset with rank function $x\mapsto\ell(x)-\ell(u)$" ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (3)).

[F8] Inversion is an order isomorphism: "For all $u,v\in W$ one has $u\le v$ if and only if $u^{-1}\le v^{-1}$" ([[def-cg-bruhat-order-by-reflection-chains]] (3)).

[F9] Inversion preserves length: "By inversion ($w\mapsto w^{-1}$ preserves lengths and interchanges the two coset families $\{W_Ja\}$ and $\{aW_J\}$)" ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3)); hence for a reduced expression $t_1\cdots t_r$ of $b$ the reversed word $t_r\cdots t_1$ represents $b^{-1}$ and has length $r=\ell(b)=\ell(b^{-1})$, so it is a reduced expression of $b^{-1}$.

[F10] Increasing, falling and lexicographic comparison: "A maximal chain $m$ of $[x,y]$ is **increasing** if $\lambda_1(m)<\lambda_2(m)<\cdots<\lambda_n(m)$; it is **falling** if $\lambda_1(m)\ge\lambda_2(m)\ge\cdots\ge\lambda_n(m)$" ([[def-cg-finite-lattice-congruence-and-interval-projections]] (3)).

[F11] The relator list of the presentation contains the squares: "Let $R\subseteq F(S)$ be the set of relators $$R:=\{s^2:s\in S\}\cup\{(st)^{m(s,t)}:s,t\in S,\ m(s,t)<\infty\}$$", so $s^2=1$ in $W$ for every $s\in S$, and hence $t^2=1$ for every conjugate $t=wsw^{-1}$ of a simple reflection ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-group]]).

## Proof

For this proof, relabel the retained original positions by $1,\dots,r$ in their order; this preserves every label comparison, and the conclusions then translate back to the original positions. Throughout, maximal chains of $([a,b],c)$ are written $b=m_0\gtrdot m_1\gtrdot\cdots\gtrdot m_k=a$ with $k=\ell(b)-\ell(a)$ [F7], and their label words have $k$ entries in $\{1,\dots,r\}$ [F2].

1.1 Cancellation identity. Let $P=\{i_1<\cdots<i_k\}\subseteq\{1,\dots,r\}$ index the positions deleted from $t_1\cdots t_r$ by a maximal chain, so that $a=\prod_{p\notin P}t_p$ is a reduced word with $\ell(a)=r-k$, and let $j\notin P$ satisfy $j>i_k$; put $U:=t_{j+1}\cdots t_r$ and $t:=U^{-1}t_jU\in T$. Writing $A:=\prod_{p<j,\ p\notin P}t_p$ one has $a=A\,t_j\,U$, because every position above $j$ is retained; hence $at=A\,t_j\,U\,U^{-1}t_j\,U=A\,t_j^2\,U=A\,U$, where we used $t_j^2=1$, and $AU$ is the product of $t_1\cdots t_r$ with the positions $P\cup\{j\}$ deleted, a word of length $r-k-1=\ell(a)-1$. Therefore $\ell(at)\le\ell(a)-1$. [F1, F3, F11, algebra]

1.2 Rank-two intervals have an increasing chain. Suppose $\ell(b)-\ell(a)=2$. By [F6] the element $a$ is the product of a reduced subword of $t_1\cdots t_r$ of length $r-2$, that is, of a word obtained by deleting exactly two positions; among all such deleted pairs choose $\{d_1<d_2\}$ with $d_2$ minimal, let $y$ be the product of the word obtained by deleting only $d_1$, and put $t:=(t_r\cdots t_{d_2+1})t_{d_2}(t_{d_2+1}\cdots t_r)\in T$. The augmentation lemma applied to this reduced subword expression gives $y=at$, that the deletion word of $y$ is a reduced expression of $y$ of length $\ell(a)+1=r-1$, and that $a\to y$, so $a$ is covered by $y$ by [F4]. Moreover $y\le b$ by [F6], and $\ell(y)=r-1=\ell(b)-1$, so $y$ is covered by $b$ by [F4]. Hence $(b,y,a)$ is a maximal chain of $([a,b],c)$ and its label word is $(d_1,d_2)$, which is increasing. [F1, F4, F5, F6]

1.3 Lexicographic minimality of prefix and suffix. Let $m\colon b=m_0\gtrdot\cdots\gtrdot m_k=a$ be a lexicographically minimal maximal chain of $([a,b],c)$; it exists because the set of maximal chains of $[a,b]$ is finite [F7] and nonempty, and $\prec$ is a linear order on label words. Then the prefix $m_0\gtrdot\cdots\gtrdot m_{k-1}$ is lexicographically minimal in the rooted interval $([m_{k-1},b],c)$: its entries are the first $k-1$ entries of $\lambda(m)$, computed from the same root chain $c$ [F2], so if a maximal chain $n$ of that rooted interval had a smaller label word, then the chain obtained by appending the cover $m_{k-1}\gtrdot a$ would be a maximal chain of $([a,b],c)$ whose label word begins with $\lambda(n)$ and hence is lexicographically smaller than $\lambda(m)$, a contradiction. Likewise the suffix $m_1\gtrdot\cdots\gtrdot m_k$ is lexicographically minimal in the rooted interval $([a,m_1],c\cup\{m_0\gtrdot m_1\})$: prepending the cover $m_0\gtrdot m_1$ to a competing maximal chain $n'$ there produces a maximal chain of $([a,b],c)$ whose label word is $(\lambda_1(m),\lambda(n'))$, smaller than $\lambda(m)$ whenever $\lambda(n')$ is smaller than $(\lambda_2(m),\dots,\lambda_k(m))$. [F2, F7, algebra]

2.1 At most one increasing chain. Suppose $m,m'$ are maximal chains of $([a,b],c)$ with increasing label words $(i_1<\cdots<i_k)$ and $(j_1<\cdots<j_k)$; we prove $i_k=j_k$, the claim then following by induction on $k=\ell(b)-\ell(a)$ applied to the rooted interval $([m_{k-1},b],c)$ of rank $k-1$. Assume $i_k<j_k$. Then $a=m_k$ is the product of $t_1\cdots t_r$ with the positions $i_1,\dots,i_k$ deleted, and step 1.1 applied to that deleted set and the position $j:=j_k>i_k$ gives $\ell(at)\le\ell(a)-1$ for $t:=(t_r\cdots t_{j_k+1})t_{j_k}(t_{j_k+1}\cdots t_r)$. On the other hand, the retained expression of $m'_{k-1}$ is $t_1\cdots t_r$ with the positions $j_1,\dots,j_{k-1}$ deleted, and the cover $m'_{k-1}\gtrdot a$ deletes the further position $j_k$; since every position above $j_k$ is retained, [F3] exhibits $a=m'_{k-1}t$ with this same reflection $t$, so $m'_{k-1}=at$. But $\ell(m'_{k-1})=\ell(a)+1$ because $m'_{k-1}$ covers $a$ [F4], contradicting $\ell(at)\le\ell(a)-1$. Hence $i_k\ge j_k$, the same argument with $m$ and $m'$ interchanged gives $j_k\ge i_k$, and therefore $i_k=j_k$; then $m_{k-1}=m'_{k-1}=at$, and the two prefixes are maximal chains of the same rooted interval $([m_{k-1},b],c)$ whose increasing label words are $(i_1,\dots,i_{k-1})$ and $(j_1,\dots,j_{k-1})$, so the induction hypothesis applied to that rooted interval forces the prefixes to coincide. The case $k\le1$ is vacuous: a rank-zero interval has one chain and a rank-one interval has at most one maximal chain. [F1, F2, F3, F4, F7, step 1.1, induction]

2.2 The falling chain by inversion. Apply the argument of step 1.2 to the inverted configuration: the element $b^{-1}$ with the reversed reduced expression $t_r\cdots t_1$ [F9], the interval $[a^{-1},b^{-1}]$ [F8] and the inverted root chain; inversion is an order isomorphism [F8] and mirrors positions by $p\mapsto r+1-p$, so it produces a maximal chain $b\gtrdot z\gtrdot a$ of $([a,b],c)$ whose deleted pair is $\{f_1<f_2\}$ with $f_1$ maximal among the deleted pairs of $t_1\cdots t_r$, and whose label word is $(f_2,f_1)$, which is falling. [F8, F9, step 1.2]

3.1 At most one falling chain. If two maximal chains of $([a,b],c)$ had falling label words, then their inverses would be two maximal chains of the inverted rooted interval $([a^{-1},b^{-1}],c^{-1})$ of $[u^{-1},v^{-1}]$ whose label words are increasing under the position mirror $p\mapsto r+1-p$ [F8, F9]; step 2.1 applied to that rooted interval (which is an instance of the same statement) would force the two inverted chains to coincide, hence the two original chains to coincide. [F8, F9, step 2.1]

4.1 The rank-two diamond. Suppose $\ell(b)-\ell(a)=2$. Every maximal chain of $([a,b],c)$ has two steps and a label word with two distinct entries [F1], hence its word is increasing or falling [F10]; by steps 2.1 and 3.1 there is at most one maximal chain of each kind, so the chains $(b,y,a)$ of step 1.2 and $(b,z,a)$ of step 2.2 are all of them, provided they are distinct. If they coincided, then their label words $(d_1,d_2)$ and $(f_2,f_1)$ would coincide, forcing $d_1=f_2$ and $d_2=f_1$, hence $d_1<d_2=f_1<f_2=d_1$, a contradiction; so the two chains are distinct and $[a,b]$ has exactly two maximal chains. Writing $i:=d_1$, $j:=d_2$, $p:=f_2$ and $m:=f_1$ gives $i<j$, $m<p$, the increasing word $(i,j)$ of the first chain and the falling word $(p,m)$ of the second, and $j\le p$ because $d_2$ was chosen minimal among all deleted pairs while $\{f_1,f_2\}$ is a deleted pair. Finally, a rank-one element of the graded interval $[a,b]$ is the middle element $b\gtrdot x\gtrdot a$ of exactly one maximal chain, so the two distinct middle elements $y,z$ are the only ones, and $[a,b]$ has exactly four elements. [F1, F7, F10, step 1.2, step 2.2, step 2.1, step 3.1]

5.1 The lexicographically first chain is the unique increasing chain. Induct on the rank $k$. For $k\le1$ the sole maximal chain is increasing and lexicographically first. For $k=2$, step 4.1 gives exactly the two words $(i,j)$ and $(p,m)$ with $i<j\le p$, so $(i,j)\prec(p,m)$ and the lexicographically first chain is increasing. For $k\ge3$, let $m$ be a lexicographically minimal maximal chain of $([a,b],c)$; by step 1.3 its prefix and suffix are lexicographically minimal in rooted intervals of rank $k-1$, so their words are increasing by induction. These words cover all adjacent pairs of entries of $\lambda(m)$, so $\lambda(m)$ is increasing. Step 2.1 gives uniqueness, proving (iii). [F7, step 1.3, step 2.1, step 4.1, induction]

6.1 Local descent replacement. Let $m\colon b=m_0\gtrdot\cdots\gtrdot m_k=a$ and $1\le e<k$ with $\lambda_e(m)>\lambda_{e+1}(m)$; let $c_m$ be $c$ extended by $m_0\gtrdot\cdots\gtrdot m_{e-1}$ and consider the rooted rank-two interval $([m_{e+1},m_{e-1}],c_m)$. Its maximal chains are the segment $m_{e-1}\gtrdot m_e\gtrdot m_{e+1}$, whose label word there is the falling $(\lambda_e(m),\lambda_{e+1}(m))$, and the unique increasing chain $m_{e-1}\gtrdot y\gtrdot m_{e+1}$ with word $(i',j')$ satisfying $i'<j'\le\lambda_e(m)$, by step 4.1 (and step 5.1 for its uniqueness). Then $k':=m_0\gtrdot\cdots\gtrdot m_{e-1}\gtrdot y\gtrdot m_{e+1}\gtrdot\cdots\gtrdot m_k$ is a maximal chain of $([a,b],c)$: it has the same number of steps as $m$ and each of its steps is a cover, and $y\ne m_e$ because the increasing chain is distinct from the segment. Only the element in position $e$ changed, so $k'\cap m=m\setminus\{m_e\}$; the labels of $k'$ above $m_{e-1}$ equal those of $m$ because the root chain $c_m$ is the same, and its label at position $e$ is $i'<\lambda_e(m)$, so the first differing entry of the two label words is at position $e$ and $\lambda(k')\prec\lambda(m)$. [F2, F7, step 5.1, step 4.1] ∎
