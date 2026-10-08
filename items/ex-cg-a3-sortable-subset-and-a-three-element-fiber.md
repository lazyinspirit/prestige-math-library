---
id: ex-cg-a3-sortable-subset-and-a-three-element-fiber
kind: example
title: The c-sortable subset of A3 for c = s1s2s3, a three-element fiber, and the upper endpoint map
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 30
deps:
  - thm-cg-sortable-meet-join-closure-and-cambrian-quotient
  - thm-cg-sortable-projection-greatest-element-and-interval-fibers
  - def-cg-sortable-element-skip-roots-and-cone
  - def-cg-initial-letter-sortable-projection
  - def-cg-left-right-weak-order-and-descents
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-finite-symmetric-group-and-permutation-notation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "Section 2, pp. 5-7, c-sorting words and block sequences, with Example 1.6 (the source uses c=s2s1s3, so its displayed values are not imported); Section 3, pp. 8-11, endpoint and interval-fiber results consumed through the A-page suppliers"
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Section 7, Theorems 7.1 and 7.3 with proofs (sortable joins and projection homomorphisms); consumed through the A-page supplier"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 3, Section 3.1 (weak order and length-additive products) and Section 3.2 (the finite weak-order lattice)"
---

## Statement

Let $(W,S)$ be the Coxeter system of type $A_3$ with $S=\{s_1,s_2,s_3\}$ and diagram $s_1-s_2-s_3$. Use the standard model on $\{1,2,3,4\}$ with $s_i=(i\ i+1)$, right-to-left composition, and one-line notation; the type-$A$ identification and $\ell=\operatorname{inv}$ are as in [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4) and [[def-finite-symmetric-group-and-permutation-notation]]. Let $c=s_1s_2s_3$, $c^\infty=s_1s_2s_3\,|\,s_1s_2s_3\,|\cdots$, and $w_0=s_1s_2s_1s_3s_2s_1=s_1s_2s_3s_1s_2s_1$. Write $\pi_c$ for the sortable projection and $u_c$ for the upper projection of [[thm-cg-sortable-projection-greatest-element-and-interval-fibers]].

**(i) The $c$-sortable subset.** An element of $S_4$ is $c$-sortable ([[def-cg-sortable-element-skip-roots-and-cone]] (1)) if and only if its $c$-sorting word has weakly decreasing block sequence. There are exactly $14$ such elements:
$$e,\ s_1,\ s_2,\ s_3,\ s_1s_2,\ s_1s_3,\ s_2s_3,\ s_1s_2s_1,\ s_1s_2s_3,\ s_2s_3s_2,\ s_1s_2s_1s_3,\ s_1s_2s_3s_2,\ s_1s_2s_1s_3s_2,\ w_0,$$
where $w_0=s_1s_2s_1s_3s_2s_1=s_1s_2s_3s_1s_2s_1$. The remaining ten elements are
$$s_2s_1,\ s_3s_2,\ s_1s_3s_2,\ s_2s_1s_3,\ s_3s_2s_1,\ s_1s_3s_2s_1,\ s_2s_1s_3s_2,\ s_2s_3s_2s_1,\ s_1s_2s_3s_2s_1,\ s_2s_1s_3s_2s_1,$$
and each has a strict failure of weak decrease in its block sequence.

**(ii) The fibers of $\pi_c$.** The nontrivial fibers are
$$\pi_c^{-1}(s_2)=\{s_2,s_2s_1\},\qquad \pi_c^{-1}(s_3)=\{s_3,\,s_3s_2,\,s_3s_2s_1\},$$
$$\pi_c^{-1}(s_1s_3)=\{s_1s_3,\,s_1s_3s_2,\,s_1s_3s_2s_1\},\qquad \pi_c^{-1}(s_2s_3)=\{s_2s_3,\,s_2s_1s_3,\,s_2s_1s_3s_2\},$$
$$\pi_c^{-1}(s_2s_3s_2)=\{s_2s_3s_2,\,s_2s_3s_2s_1,\,s_2s_1s_3s_2s_1\},\qquad \pi_c^{-1}(s_1s_2s_3s_2)=\{s_1s_2s_3s_2,\,s_1s_2s_3s_2s_1\},$$
and the remaining eight fibers are singletons $\{e\},\{s_1\},\{s_1s_2\},\{s_1s_2s_1\},\{s_1s_2s_3\},\{s_1s_2s_1s_3\},\{s_1s_2s_1s_3s_2\},\{w_0\}$. In particular, the fiber $\pi_c^{-1}(s_3)$ has three elements; by [[thm-cg-sortable-projection-greatest-element-and-interval-fibers]] (3), every fiber is the closed interval $[\pi_c(w),u_c(w)]$, and
$$\pi_c^{-1}(s_3)=[s_3,\,s_3s_2s_1]=\{s_3,\,s_3s_2,\,s_3s_2s_1\}.$$

**(iii) The endpoint maps.** On the fiber of $s_3$, $\pi_c$ is constantly $s_3$ and $u_c$ is constantly $s_3s_2s_1$. The other nontrivial upper endpoints are
$$u_c(s_2)=s_2s_1,\qquad u_c(s_2s_3)=s_2s_1s_3s_2,\qquad u_c(s_1s_3)=s_1s_3s_2s_1,\qquad u_c(s_2s_3s_2)=s_2s_1s_3s_2s_1.$$
The map $u_c$ is order-preserving and idempotent, with $u_c\circ\pi_c=u_c$ and $\pi_c\circ u_c=\pi_c$, by [[thm-cg-sortable-projection-greatest-element-and-interval-fibers]] (2)-(3).

**(iv) Meet and join preservation.** For all $x,y\in S_4$, $\pi_c(x\wedge y)=\pi_c(x)\wedge\pi_c(y)$ and $\pi_c(x\vee y)=\pi_c(x)\vee\pi_c(y)$ by [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] (4). For the three-element fibers of $s_3$ and $s_2s_3s_2$,
$$\pi_c\bigl(s_3s_2s_1\vee s_2s_3s_2\bigr)=\pi_c(s_2s_3s_2s_1)=s_2s_3s_2=s_3\vee s_2s_3s_2,$$
$$\pi_c\bigl(s_3s_2s_1\wedge s_2s_3s_2\bigr)=\pi_c(s_3s_2)=s_3=s_3\wedge s_2s_3s_2.$$

**(v) A second orientation.** For $c'=s_1s_3s_2$, the fiber of $s_2$ is
$$\pi_{c'}^{-1}(s_2)=\{s_2,s_2s_1,s_2s_3,s_2s_1s_3,s_2s_1s_3s_2\},$$
whereas $\pi_c^{-1}(s_2)=\{s_2,s_2s_1\}$. The fiber partition depends on the Coxeter element, although the number of sortable elements is $14$ for both orientations.

## Facts & Assumptions

**Given:** The type-$A_3$ Coxeter system, its standard permutation realization, the two displayed Coxeter elements $c=s_1s_2s_3$ and $c'=s_1s_3s_2$, the periodic words, and the right weak order.

[F1] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4): for type $A_3$, $W$ is isomorphic to $S_4$ with $s_i=(i\ i+1)$ and $\ell$ is permutation inversion number.

[F2] [[def-finite-symmetric-group-and-permutation-notation]]: permutation products use $(\sigma\tau)(i)=\sigma(\tau(i))$, so the right factor acts first; one-line notation records values in argument order.

[F3] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (3): $c^\infty$ has a fixed sequence of positions; the sorting word is the lexicographically earliest reduced subword, and its block sequence records the letters selected between dividers.

[F4] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (1): scanning positions in order and selecting a letter exactly when it is a left descent of the current remainder produces the $c^\infty$-sorting word.

[F5] [[def-cg-sortable-element-skip-roots-and-cone]] (1): $w$ is $c$-sortable exactly when its sorting-word block sequence is weakly decreasing under inclusion.

[F6] [[def-cg-initial-letter-sortable-projection]]: if $s$ is initial in $c$, then $\pi_c(w)=s\pi_{scs}(sw)$ when $\ell(sw)<\ell(w)$, and $\pi_c(w)=\pi_{sc}(w_J)$ when $\ell(sw)>\ell(w)$.

[F7] [[def-cg-left-right-weak-order-and-descents]] (1) and [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (2): $x\le_Ry$ iff $y=xv$ with additive length; in finite $W$ every pair has a meet and join.

[F8] [[thm-cg-sortable-projection-greatest-element-and-interval-fibers]] (2)-(3): $u_c$ is the upper endpoint of each $\pi_c$-fiber, every fiber is $[\pi_c(w),u_c(w)]$, and the stated monotonicity, idempotence and composites hold.

[F9] [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] (4): $\pi_c$ preserves meet and join in finite weak order.

## Proof

**Proof technique:** enumerate the two sorting scans and the initial-letter recursion in the standard type-$A_3$ model; use right weak-order length additivity for the selected meet and join; apply the A-page endpoint and homomorphism statements for the general conclusions. The enumeration is finite and deterministic; no Choice is used.

1.1 Use $s_i=(i\ i+1)$ and right-to-left composition, as in [F1]-[F2]. In each table, a position list $P_d(w)$ is the set selected by the greedy scan of $d^\infty$, and a block code such as $123\mid12$ means the consecutive subsets $\{s_1,s_2,s_3\}\supseteq\{s_1,s_2\}$. The scan is the sorting word by [F4], so the displayed letters multiply to $w$ and determine its sortable status by [F5]. [F1, F2, F3, F4, F5, given, algebra]

1.2 For $d=c=s_1s_2s_3$, the first twelve scan records are $(w,P_c(w),B_c(w))$: $\begin{array}{c|c|c}e&\varnothing&\varnothing\\s_1&1&1\\s_2&2&2\\s_3&3&3\\s_1s_2&1,2&12\\s_1s_3&1,3&13\\s_2s_1&2,4&2\mid1\\s_2s_3&2,3&23\\s_3s_2&3,5&3\mid2\\s_1s_2s_1&1,2,4&12\mid1\\s_1s_2s_3&1,2,3&123\\s_1s_3s_2&1,3,5&13\mid2\end{array}$. [F1, F3, F4, algebra]

1.3 The remaining twelve scan records for $c$ are $(w,P_c(w),B_c(w))$: $\begin{array}{c|c|c}s_2s_1s_3&2,3,4&23\mid1\\s_2s_3s_2&2,3,5&23\mid2\\s_3s_2s_1&3,5,7&3\mid2\mid1\\s_1s_2s_1s_3&1,2,3,4&123\mid1\\s_1s_2s_3s_2&1,2,3,5&123\mid2\\s_1s_3s_2s_1&1,3,5,7&13\mid2\mid1\\s_2s_1s_3s_2&2,3,4,5&23\mid12\\s_2s_3s_2s_1&2,3,5,7&23\mid2\mid1\\s_1s_2s_1s_3s_2&1,2,3,4,5&123\mid12\\s_1s_2s_3s_2s_1&1,2,3,5,7&123\mid2\mid1\\s_2s_1s_3s_2s_1&2,3,4,5,7&23\mid12\mid1\\w_0&1,2,3,4,5,7&123\mid12\mid1\end{array}$. [F1, F3, F4, algebra]

1.4 The weakly decreasing rows in the c-sorting tables above are exactly $e,s_1,s_2,s_3,s_1s_2,s_1s_3,s_2s_3,s_1s_2s_1,s_1s_2s_3,s_2s_3s_2,s_1s_2s_1s_3,s_1s_2s_3s_2,s_1s_2s_1s_3s_2,w_0$. The other ten rows fail respectively at $2\not\supseteq1$, $3\not\supseteq2$, $13\not\supseteq2$, $23\not\supseteq1$, $3\not\supseteq2$, $13\not\supseteq2$, $23\not\supseteq12$, $2\not\supseteq1$ in the last blocks of $23|2|1$, $2\not\supseteq1$ in the last blocks of $123|2|1$, and $23\not\supseteq12$. Since the tables contain 24 distinct reduced words and $|S_4|=24$, this proves (i). [F1, F5, algebra]

1.5 For $d=c'=s_1s_3s_2$, the first twelve scan records are $(w,P_{c'}(w),B_{c'}(w))$: $\begin{array}{c|c|c}e&\varnothing&\varnothing\\s_1&1&1\\s_2&3&2\\s_3&2&3\\s_1s_2&1,3&12\\s_1s_3&1,2&13\\s_2s_3&3,5&2\mid3\\s_2s_1&3,4&2\mid1\\s_3s_2&2,3&23\\s_1s_2s_1&1,3,4&12\mid1\\s_1s_2s_3&1,3,5&12\mid3\\s_1s_3s_2&1,2,3&123\end{array}$. [F1, F3, F4, algebra]

1.6 The remaining twelve scan records for $c'$ are $(w,P_{c'}(w),B_{c'}(w))$: $\begin{array}{c|c|c}s_2s_3s_2&2,3,5&23\mid3\\s_2s_1s_3&3,4,5&2\mid13\\s_1s_2s_1s_3&1,3,4,5&12\mid13\\s_1s_2s_3s_2&1,2,3,5&123\mid3\\s_2s_1s_3s_2&3,4,5,6&2\mid123\\s_1s_2s_1s_3s_2&1,3,4,5,6&12\mid123\\s_3s_2s_1&2,3,4&23\mid1\\s_2s_3s_2s_1&2,3,4,5&23\mid13\\s_1s_3s_2s_1&1,2,3,4&123\mid1\\s_1s_2s_3s_2s_1&1,2,3,4,5&123\mid13\\s_2s_1s_3s_2s_1&2,3,4,5,6&23\mid123\\w_0&1,2,3,4,5,6&123\mid123\end{array}$. [F1, F3, F4, algebra]

1.7 The weakly decreasing rows in the c'-sorting tables above are exactly $e,s_1,s_2,s_3,s_3s_2,s_2s_3s_2,s_1s_3,s_1s_2,s_1s_3s_2,s_1s_2s_3s_2,s_1s_2s_1,s_1s_3s_2s_1,s_1s_2s_3s_2s_1,w_0$. The ten other rows fail at $2\not\supseteq3$, $12\not\supseteq3$, $2\not\supseteq1$, $2\not\supseteq13$, $12\not\supseteq13$, $2\not\supseteq123$, $12\not\supseteq123$, $23\not\supseteq1$, $23\not\supseteq13$, and $23\not\supseteq123$, respectively; hence $c'$ also has 14 sortable elements. [F1, F5, algebra]

1.8 Write $D_i$ for a descent branch of [F6] at initial letter $s_i$ and $A_i(v)$ for an ascent branch whose $W_{S\setminus\{s_i\}}$-prefix is $v$; after $D_i$ rotate the word to $s_ic s_i$, and after $A_i(v)$ restrict it by deleting the initial $s_i$. Recursing through all inputs gives these image fibers (the indicated traces end at the base $e$): $\begin{array}{c|l|l}\pi_c(w)&\pi_c^{-1}(\pi_c(w))&\text{trace}\\e&\{e\}&\text{base}\\s_1&\{s_1\}&D_1\\s_2&\{s_2,s_2s_1\}&A_1(s_2)D_2\\s_3&\{s_3,s_3s_2,s_3s_2s_1\}&A_1(s_3)A_2(s_3)D_3\text{ for }s_3;\ A_1(s_3s_2)A_2(s_3)D_3\text{ for the other two}\\s_1s_2&\{s_1s_2\}&D_1D_2\\s_1s_3&\{s_1s_3,s_1s_3s_2,s_1s_3s_2s_1\}&D_1A_2(s_3)D_3\\s_2s_3&\{s_2s_3,s_2s_1s_3,s_2s_1s_3s_2\}&A_1(s_2s_3)D_2D_3\\s_1s_2s_1&\{s_1s_2s_1\}&D_1D_2A_3(s_1)D_1\\s_1s_2s_3&\{s_1s_2s_3\}&D_1D_2D_3\\s_2s_3s_2&\{s_2s_3s_2,s_2s_3s_2s_1,s_2s_1s_3s_2s_1\}&A_1(s_2s_3s_2)D_2D_3D_2\\s_1s_2s_1s_3&\{s_1s_2s_1s_3\}&D_1D_2D_3D_1\\s_1s_2s_3s_2&\{s_1s_2s_3s_2,s_1s_2s_3s_2s_1\}&D_1D_2D_3A_1(s_2)D_2\\s_1s_2s_1s_3s_2&\{s_1s_2s_1s_3s_2\}&D_1D_2D_3D_1D_2\\w_0&\{w_0\}&D_1D_2D_3D_1D_2A_3(s_1)D_1\end{array}$. The fibers are disjoint and their sizes sum to $24$, so the table is exhaustive and proves (ii). [F1, F6, algebra]

1.9 In right weak order the nontrivial fiber chains are $s_2<_R s_2s_1$, $s_3<_R s_3s_2<_R s_3s_2s_1$, $s_1s_3<_R s_1s_3s_2<_R s_1s_3s_2s_1$, $s_2s_3<_R s_2s_1s_3<_R s_2s_1s_3s_2$, $s_2s_3s_2<_R s_2s_3s_2s_1<_R s_2s_1s_3s_2s_1$, and $s_1s_2s_3s_2<_R s_1s_2s_3s_2s_1$; successive quotients are simple generators with additive length. By [F8] each top is $u_c$ of the fiber image, giving exactly the endpoint values in (iii), and each displayed fiber is the interval between its bottom and top. [F7, F8, algebra]

1.10 Put $x=s_3s_2s_1=[4,1,2,3]$ and $y=s_2s_3s_2=[1,4,3,2]$. To move $4$ from position $4$ to position $1$ in $x$ requires the adjacent swaps $s_3,s_2,s_1$ in that order, so this is its unique reduced word; $y$ is the longest element on positions $2,3,4$ and has the two reduced words $s_2s_3s_2$ and $s_3s_2s_3$. Their right weak-order prefixes intersect in $e,s_3,s_3s_2$, so $x\wedge y=s_3s_2$. The upper interval of $x$ is $\{x,xs_2,xs_3,xs_2s_3,xs_3s_2,xs_2s_3s_2\}=\{4123,4213,4132,4231,4312,4321\}$: $4123$ has right ascents $s_2,s_3$; $4213$ only $s_3$; $4132$ only $s_2$; $4231$ only $s_2$; $4312$ only $s_3$; and $4321$ none, and every upper element is reached by a sequence of such simple right ascents. For these six $q$, the data $(q,\ell(q),y^{-1}q,\ell(y^{-1}q))$ are $\begin{array}{c|c|c|c}4123&3&2143&2\\4213&4&2413&3\\4132&4&2134&1\\4231&5&2431&4\\4312&5&2314&2\\4321&6&2341&3\end{array}$. By [F7], $y\le_Rq$ exactly when $\ell(y^{-1}q)=\ell(q)-3$, so the common upper bounds are exactly $4132,4312,4321$. Since the latter two are $4132s_2$ and $4132s_2s_3$, the least common upper bound is $x\vee y=s_2s_3s_2s_1$. [F1, F2, F7, algebra]

1.11 The projection table gives $\pi_c(x)=s_3$, $\pi_c(y)=s_2s_3s_2$, $\pi_c(x\wedge y)=\pi_c(s_3s_2)=s_3$, and $\pi_c(x\vee y)=\pi_c(s_2s_3s_2s_1)=s_2s_3s_2$. The same results are $s_3\wedge s_2s_3s_2=s_3$ and $s_3\vee s_2s_3s_2=s_2s_3s_2$ (use the reduced word $s_3s_2s_3$ for $s_2s_3s_2$). This verifies the two sample equalities in (iv); the universal identities there are [F9]. [F7, F9, algebra]

1.12 The complete $c'$ projection recursion table, in the same $D_i,A_i(v)$ notation, is $\begin{array}{c|l|l}\pi_{c'}(w)&\pi_{c'}^{-1}(\pi_{c'}(w))&\text{trace}\\e&\{e\}&\text{base}\\s_1&\{s_1\}&D_1\\s_2&\{s_2,s_2s_1,s_2s_3,s_2s_1s_3,s_2s_1s_3s_2\}&A_1(s_2)A_3(s_2)D_2\text{ for the first two};\ A_1(s_2s_3)A_3(s_2)D_2\text{ for the last three}\\s_3&\{s_3\}&A_1(s_3)D_3\\s_1s_2&\{s_1s_2,s_1s_2s_3\}&D_1A_3(s_2)D_2\\s_1s_3&\{s_1s_3\}&D_1D_3\\s_3s_2&\{s_3s_2,s_3s_2s_1\}&A_1(s_3s_2)D_3D_2\\s_1s_2s_1&\{s_1s_2s_1,s_1s_2s_1s_3,s_1s_2s_1s_3s_2\}&D_1A_3(s_2s_1)D_2D_1\\s_1s_3s_2&\{s_1s_3s_2\}&D_1D_3D_2\\s_2s_3s_2&\{s_2s_3s_2,s_2s_3s_2s_1,s_2s_1s_3s_2s_1\}&A_1(s_2s_3s_2)D_3D_2D_3\\s_1s_2s_3s_2&\{s_1s_2s_3s_2\}&D_1D_3D_2A_1(s_3)D_3\\s_1s_3s_2s_1&\{s_1s_3s_2s_1\}&D_1D_3D_2D_1\\s_1s_2s_3s_2s_1&\{s_1s_2s_3s_2s_1\}&D_1D_3D_2D_1D_3\\w_0&\{w_0\}&D_1D_3D_2D_1D_3D_2\end{array}$. Its disjoint preimages cover all $24$ inputs, and the $s_2$-row is exactly the five-element fiber in (v). [F1, F6, algebra]

2.1 The $c'$-sorting tables show $14$ sortable elements, matching the $14$ in the $c$-sorting tables; the different sizes of the displayed $s_2$-fibers show the partitions differ. Every calculation is finite, with no selection from an arbitrary family, so no Choice is used. [F5, given, algebra] ∎
