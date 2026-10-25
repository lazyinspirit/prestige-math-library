---
id: thm-cg-kreweras-complement-and-type-a-partition-model
kind: theorem
title: "The Kreweras complement of [1,c], and the type-A model by noncrossing set partitions"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 23
deps:
  - def-cg-coxeter-noncrossing-poset-and-kreweras-map
  - lem-cg-reversed-reflection-product-and-face-spans
  - thm-cg-noncrossing-finite-lattice-and-conjugacy-independence
  - def-cg-reflection-length-absolute-order-and-moved-space
  - def-hh-coxeter-matrix-word-group-and-length
  - def-cg-coxeter-diagram-components-and-finite-type
  - def-finite-symmetric-group-and-permutation-notation
  - lem-symmetric-group-is-a-group
  - thm-the-symmetric-group-has-the-coxeter-presentation
  - thm-disjoint-cycle-decomposition
  - def-permutation-support-disjoint-cycles-and-cycle-type
  - lem-conjugating-a-cycle-relabels-its-entries
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Armstrong, Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups, Memoirs of the AMS 202 (2009), no. 949, arXiv:math/0611106v2"
      url: "https://arxiv.org/pdf/math/0611106"
      locator: "§2.5, printed pp. 27–28, Definition 2.5.3 and Lemma 2.5.4 (the group-theoretic complement on an absolute-order interval); §4.1, printed pp. 82–85, Definition 4.1.1, Lemmas 4.1.4–4.1.5 and Theorem 4.1.3 (transposition length and the type-A noncrossing partition model); §4.2, printed pp. 87–89, Definitions 4.2.2–4.2.3 and identity (4.4) (interleaving and the classical Kreweras complement). The complete relevant passages were read; the arguments here prove the needed claims locally."
verification:
  audited: "2026-10-08"
---

## Statement

**(1) The general Kreweras complement.** Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, let $n=|S|$, let $T$ be its reflection set, and let $\ell_T$ and $\le_T$ be reflection length and absolute order ([[def-cg-coxeter-diagram-components-and-finite-type]], [[def-cg-reflection-length-absolute-order-and-moved-space]]). For a Coxeter element $c$, let $\operatorname{NC}(W,c)=[1,c]_{\le_T}$ and $K(w)=w^{-1}c$ ([[def-cg-coxeter-noncrossing-poset-and-kreweras-map]]). The length of $c$ is $n$: apply [[lem-cg-reversed-reflection-product-and-face-spans]] (2) to the independent unit simple-root normals in a once-each expression for $c$. Then $K$ maps $\operatorname{NC}(W,c)$ bijectively to itself and, for every $w$ in this interval,
$$K(K(w))=c^{-1}wc,\qquad \ell_T(K(w))=n-\ell_T(w),\qquad wK(w)=c.$$
It reverses order: if $u\le_T v$ in the interval, then $K(v)\le_TK(u)$. Since $\operatorname{NC}(W,c)$ is a finite lattice ([[thm-cg-noncrossing-finite-lattice-and-conjugacy-independence]] (2)–(4)), $K$ is a lattice anti-automorphism.

**(2) Type A: reflection length.** Let $N\ge1$ and realize the Coxeter system of type $A_{N-1}$ as $S_N$ on $\{1,\ldots,N\}$, with $s_i=(i\ i+1)$ for $1\le i<N$ and $c=s_1s_2\cdots s_{N-1}=(1\ 2\ \cdots\ N)$ ([[def-finite-symmetric-group-and-permutation-notation]], [[lem-symmetric-group-is-a-group]], [[thm-the-symmetric-group-has-the-coxeter-presentation]], [[def-hh-coxeter-matrix-word-group-and-length]]). Its reflection set $T$ consists of all transpositions. For every $w\in S_N$,
$$\ell_T(w)=N-\#\{\text{cycles of }w\},$$
where fixed points count as one-cycles ([[thm-disjoint-cycle-decomposition]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

**(3) Type A: the noncrossing criterion.** For $w\in S_N$, let $\pi(w)$ be the partition of $\{1,\ldots,N\}$ into the supports of all cycles of $w$, including fixed points. Place the labels at equally spaced points on a circle in cyclic order $1,2,\ldots,N,1$, including one point for $N=1$ and two antipodal points for $N=2$. A partition is **noncrossing** when the convex hulls of distinct blocks are disjoint. A cycle is **cyclically increasing** when its entries, read in the direction of the cycle, advance in that cyclic order. Then
$$w\le_Tc\quad\Longleftrightarrow\quad \pi(w)\text{ is noncrossing and every cycle of }w\text{ is cyclically increasing}.$$

**(4) Type A: the partition model and its complement.** Let $\operatorname{NC}(N)$ be the noncrossing partitions of $\{1,\ldots,N\}$ ordered by refinement. The map $w\mapsto\pi(w)$ is a poset isomorphism
$$([1,c]_{\le_T},\le_T)\;\longrightarrow\;(\operatorname{NC}(N),\text{ refinement});$$
its inverse sends each block to the cycle that lists its elements in cyclically increasing order and multiplies those disjoint cycles. Put black vertices $b_1,\ldots,b_N$ and white vertices $d_1,\ldots,d_N$ alternately at equally spaced points on a circle. For $\pi\in\operatorname{NC}(N)$, its **classical Kreweras complement** $K_{\rm cl}(\pi)$ is the coarsest partition $Q$ of the white labels whose interleaving with $\pi$ is noncrossing. Under the isomorphism of (4),
$$\pi(K(w))=K_{\rm cl}(\pi(w)),\qquad w_{\pi}\,w_{K_{\rm cl}(\pi)}=c,$$
where $w_\pi$ is the inverse image of $\pi$. The complement is an order-reversing bijection, $K_{\rm cl}^2$ rotates labels by $i\mapsto i-1$ (indices modulo $N$), and
$$|K_{\rm cl}(\pi)|=N+1-|\pi|,\qquad \pi\wedge K_{\rm cl}(\pi)=\hat0,\qquad \pi\vee K_{\rm cl}(\pi)=\hat1.$$

**(5) Limits.** No noncrossing set-partition model, crossing criterion, or Catalan count is asserted for finite Coxeter types other than type A. No Lie-theoretic root system is used in (2)–(4). The statements include $N=1$ and rank-zero finite Coxeter systems; no Choice is used.

## Facts & Assumptions

**Given:** A finite-type Coxeter system and a Coxeter element $c$; in type A, the symmetric group $S_N$ with the indicated simple reflections and cyclic order.

[F1] The simple-root normals form a linearly independent unit list. For any once-each product of the corresponding simple reflections, [[lem-cg-reversed-reflection-product-and-face-spans]] (2) gives $\ell_T(c)=|S|$; for the empty list both sides are zero.

[F2] $\ell_T$ is the word length in the conjugation-invariant set $T$, and $u\le_Tv$ means $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$ ([[def-cg-reflection-length-absolute-order-and-moved-space]] (1)–(2)).

[F3] Adjacent transpositions give the Coxeter presentation of $S_N$ and their ordered product is the long cycle $c=(1\ 2\ \cdots\ N)$ ([[thm-the-symmetric-group-has-the-coxeter-presentation]], [[def-hh-coxeter-matrix-word-group-and-length]]). Cycle notation composes from right to left ([[def-finite-symmetric-group-and-permutation-notation]]).

[F4] Every permutation has a unique disjoint-cycle decomposition up to reordering and cyclic rotation, with fixed points added as one-cycles when counting ([[thm-disjoint-cycle-decomposition]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F5] The finite noncrossing interval $[1,c]_{\le_T}$ is a lattice ([[thm-cg-noncrossing-finite-lattice-and-conjugacy-independence]] (2)–(4)).

## Proof

**Proof technique:** prove the interval complement from length additivity, derive the type-A length and interval criteria by transposition moves, then identify the cycle-support order and trace the complementary regions.

**Given:** The data above.

1.1 (Rank of a Coxeter element.) Write $c=s_{i_1}\cdots s_{i_n}$, where each simple reflection occurs once. Its simple-root normals, in the reverse list, are independent unit roots. Clause (2) of [F1] applied to this reversed list gives $\ell_T(c)=n$. If $n=0$, $c=1$ and the same equality is immediate. [F1]

1.2 (The group-theoretic complement maps the interval to itself.) The set $T$ is invariant under conjugation: conjugation permutes its defining conjugates of simple reflections. Conjugating a shortest reflection factorization and then conjugating back shows $\ell_T(gwg^{-1})=\ell_T(w)$ for all $g,w\in W$. If $w\le_Tc$, then $\ell_T(c)=\ell_T(w)+\ell_T(w^{-1}c)$, so $\ell_T(K(w))=n-\ell_T(w)$. Also $K(w)^{-1}c=c^{-1}wc$, whose reflection length is $\ell_T(w)$. Therefore $\ell_T(K(w))+\ell_T(K(w)^{-1}c)=n=\ell_T(c)$ and $K(w)\le_Tc$. Thus $K(w)$ is in the interval. The map is injective, and the interval is finite because $W$ is finite, so it is onto. Direct multiplication gives $K(K(w))=c^{-1}wc$ and $wK(w)=c$. [F1, F2, algebra]

1.3 (The reflection set in type A.) For $N=1$ there are no simple reflections and no transpositions. For $N\ge2$, conjugating any simple reflection $s_i=(i\ i+1)$ by $g\in S_N$ gives $(g(i)\ g(i+1))$ ([[lem-conjugating-a-cycle-relabels-its-entries]]), so every reflection is a transposition. Conversely, for any transposition $(a\ b)$ choose a permutation $g$ with $g(1)=a$ and $g(2)=b$; then $g s_1 g^{-1}=(a\ b)$, so every transposition is a reflection. A right multiplication by a transposition changes the number of cycles by exactly one: if its two labels lie in one cycle, it cuts that cycle at those labels into two; if they lie in different cycles, it joins the cycles. Thus any expression of $w$ as $r$ transpositions must have $r\ge N-\#\{\text{cycles of }w\}$, since reaching the identity requires increasing the cycle count to $N$ one step at a time. Conversely each cycle $(a_1\ a_2\ \cdots\ a_m)$ is $(a_1\ a_m)(a_1\ a_{m-1})\cdots(a_1\ a_2)$, a product of $m-1$ transpositions. Multiplying these expressions over the disjoint cycles gives the matching upper bound and proves the formula. It also covers $N=1$, where the identity is the empty product. [F3, F4, algebra]

1.4 (An interval block exists.) Every noncrossing partition with at least two blocks has a block consisting of consecutive vertices in the original cyclic order. A singleton block suffices. Otherwise choose a block $B$ minimizing $\max B-\min B$ in the linear order $1<\cdots<N$. If $B$ is not a linear interval, there are successive elements $b<b'$ of $B$ and a label $x$ with $b<x<b'$. Let $D$ be the block containing $x$. Any $y\in D$ outside $(b,b')$ would make the chords $bb'$ and $xy$ have alternating endpoints and therefore cross, contradicting disjointness of the block hulls. Hence $D\subseteq(b,b')$, so $\max D-\min D<b'-b\le\max B-\min B$, contrary to minimality. Thus $B$ is a linear interval, and hence consecutive in the original cyclic order. [given, construct]

2.1 (Order reversal and lattice duality.) If $u\le_Tv$, then $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$. The conjugation invariance just proved and $v(u^{-1}v)v^{-1}=vu^{-1}$ give $\ell_T(K(v)^{-1}K(u))=\ell_T(c^{-1}vu^{-1}c)=\ell_T(u^{-1}v)=\ell_T(v)-\ell_T(u)=\ell_T(K(u))-\ell_T(K(v)).$ Hence $K(v)\le_TK(u)$. An order-reversing bijection of a lattice carries every least upper bound to a greatest lower bound and vice versa, by the defining universal properties. The lattice hypothesis is supplied by [F5]. [F1, F2, F5, step 1.2, algebra]

2.2 (Noncrossing increasing cycles lie below $c$: singleton removal.) Define $w_\pi$ to be the product of the cyclically increasing cycles on the blocks of $\pi$. We prove $w_\pi\le_Tc$ by induction on $N$. The one-block partition gives $w_\pi=c$. If $\pi$ has a singleton block $\{a\}$, remove it to obtain a noncrossing partition $\pi'$ on the remaining cyclically ordered set $Y$ of size $N-1$, with long cycle $c_Y$ and permutation $w'$. By induction, $\ell_Y(w')+\ell_Y(w'^{-1}c_Y)=N-2$. Regard these permutations as fixing $a$ in $S_N$, and let $p$ be the predecessor of $a$ in the cyclic order. For $\tau=(p\ a)$, direct evaluation on the labels gives $c=c_Y\tau$. Since $w'$ fixes $a$, $q=w'^{-1}c_Y$ also fixes $a$; multiplying $q$ on the right by $\tau$ joins the singleton cycle $\{a\}$ to the cycle containing $p$. Hence $\ell_N(w_\pi)=\ell_Y(w')$ and $\ell_N(w_\pi^{-1}c)=\ell_Y(w'^{-1}c_Y)+1$. Their sum is $N-1=\ell_N(c)$, proving $w_\pi\le_Tc$. This includes the discrete partition and the cases $N\le2$. [F2, F3, step 1.3, induction]

2.3 (Elements below $c$ have noncrossing increasing cycles.) Induct on $d=N-1-\ell_T(w)$ for $w\le_Tc$. If $d=0$, then $w=c$. If $d>0$, take a shortest transposition factorization $w^{-1}c=t_1\cdots t_d$. A shortest factorization of $w$ followed by this one is a shortest factorization of $c$, so its prefix $x=wt_1$ satisfies $w\le_Tx\le_Tc$ and $\ell_T(x)=\ell_T(w)+1$. By induction, $\pi(x)$ is noncrossing and its cycles are cyclically increasing. Since right multiplication by $t_1$ lowers reflection length by one, step 1.3 shows that $t_1$ splits one cycle of $x$. If that cycle is $(b_1\ b_2\ \cdots\ b_r)$ in cyclic order and $t_1=(b_i\ b_j)$ with $i<j$, the two resulting cycles have supports and cyclic orders $(b_i,b_{j+1},\ldots,b_r,b_1,\ldots,b_{i-1})\quad\text{and}\quad(b_j,b_{i+1},\ldots,b_{j-1}),$ with singleton cycles interpreted as fixed points. Both are cyclically increasing. Their convex hulls lie on opposite sides of the chord $b_ib_j$ and meet its line only at distinct endpoints, so are disjoint. Every other block hull was disjoint from the old block hull and remains disjoint from its two sub-hulls. Thus $\pi(w)$ is noncrossing and every cycle is cyclically increasing. [F2, step 1.3, induction]

3.1 (Noncrossing increasing cycles lie below $c$: interval-block contraction.) Now suppose $\pi$ has no singleton blocks and at least two blocks. By step 1.4 it has a consecutive block $B=\{a,a+1,\ldots,a+m-1\}$ in cyclic order, with $m\ge2$. Contract $B$ to a single label $a$ to obtain a cyclically ordered set $Y$ of size $N-m+1$ and a noncrossing partition $\pi''$ whose block at $a$ is the singleton $\{a\}$. Let $c''$ be the long cycle on $Y$ and $w''=w_{\pi''}$, so $w''$ fixes $a$. Write $\gamma_B=(a\ a+1\ \cdots\ a+m-1)$. Extending permutations of $Y$ to fix the deleted labels gives $w_\pi=\gamma_Bw''$ and $c=c''\gamma_B$, with $w''$ commuting with $\gamma_B$. By induction, $\ell_Y(w'')+\ell_Y(w''^{-1}c'')=|Y|-1=N-m$. The disjoint-cycle formula gives $\ell_N(w_\pi)=(m-1)+\ell_Y(w'')$, while $w_\pi^{-1}c=w''^{-1}\gamma_B^{-1}c''\gamma_B=\gamma_B^{-1}(w''^{-1}c'')\gamma_B,$ so conjugation invariance and the cycle formula give $\ell_N(w_\pi^{-1}c)=\ell_Y(w''^{-1}c'')$. The two lengths sum to $(m-1)+(N-m)=N-1=\ell_N(c)$. Therefore $w_\pi\le_Tc$. The one-block case was handled in step 2.2; these cases exhaust all partitions. [F2, F3, F4, step 1.3, step 1.4, step 2.2, induction]

4.1 (The partition map is a bijection and preserves order.) Steps 2.2, 2.3 and 3.1 show that each noncrossing partition has an interval element $w_\pi$ and every interval element arises this way. Its cycle supports determine each of its cyclically increasing cycles, so this correspondence is bijective. If $u\le_Tv$, choose a shortest transposition factorization of $u^{-1}v$ and append it to a shortest factorization of $u$. Every prefix is shortest, giving a chain in $[1,c]$ from $u$ to $v$ whose steps multiply on the right by a transposition and raise length by one. By step 1.3 each step joins two cycles, so $\pi(u)$ refines $\pi(v)$. Conversely suppose $\pi(u)$ refines $\pi(v)$. For each block $B$ of $\pi(v)$, restrict $v$ to its cyclically increasing cycle $v_B$ and let $u_B$ be the product of the cycles of $u$ supported in $B$. The induced partition $\pi(u)|_B$ is noncrossing, and its cycles remain cyclically increasing in the induced cyclic order on $B$. By steps 2.2, 2.3 and 3.1 applied to the labels in $B$, $u_B\le_Tv_B$. The blocks $B$ are disjoint, and the cycle formula in step 1.3 gives additivity of reflection length across these supports for $u$, $v$, and $u^{-1}v$. Summing $\ell_B(v_B)=\ell_B(u_B)+\ell_B(u_B^{-1}v_B)$ over all $B$ gives $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$, hence $u\le_Tv$. Thus the bijection is an order isomorphism. [F2, step 1.3, step 2.2, step 3.1, step 2.3, algebra]

5.1 (The region partition is the classical complement.) For $N=1$, the sole black and white blocks are singletons, $c=K(1)=1$, and all assertions in (4) hold, with $\hat0=\hat1$. Assume $N\ge2$. Draw the convex hull edges of each black block of $\pi$ in the alternating $2N$-gon. These noncrossing chords cut the disk into polygonal regions. Group white vertices lying in the same region. Each region is a convex polygonal cell of the dissection by noncrossing chords, so grouping its white vertices gives a noncrossing partition. Any compatible white block must lie in one region, since a segment joining vertices in different regions crosses a black block edge. Hence this region partition is the coarsest interleaving partner, namely $K_{\rm cl}(\pi)$. Let $\alpha=w_\pi$, and label $d_i$ as the white vertex in the gap after $b_i$. Tracing the boundary of the region at $d_i$ to the next white vertex passes black vertex $b_{i+1}$ and then follows the boundary edge of its black block back to its predecessor $b_j$, where $j=\alpha^{-1}(i+1)$. Thus the successor permutation of white vertices within their regions is $q(i)=\alpha^{-1}(i+1)=\alpha^{-1}c(i)$. Its cycles are exactly the white blocks of $K_{\rm cl}(\pi)$, so $q=w_{K_{\rm cl}(\pi)}=\alpha^{-1}c$ and $\alpha q=c$. Since $K(w)=w^{-1}c$, this proves $\pi(K(w))=K_{\rm cl}(\pi(w))$. By step 2.1 and the order isomorphism, $K_{\rm cl}$ is an order-reversing bijection, and its square is relabeling by $c^{-1}$, namely $i\mapsto i-1$. From steps 1.2 and 1.3, $\ell_T(K(w))=(N-1)-(N-|\pi(w)|)=|\pi(w)|-1$. Applying the cycle formula to $K(w)$ gives $|K_{\rm cl}(\pi)|=N+1-|\pi|$. If two labels belonged to a common block of both $\pi$ and $K_{\rm cl}(\pi)$, the corresponding black and white chords would have alternating endpoints and cross; hence their only common lower bound in refinement order is $\hat0$, giving $\pi\wedge K_{\rm cl}(\pi)=\hat0$. Each cycle of $w_\pi$ and $w_{K_{\rm cl}(\pi)}$ stays inside a class of the equivalence relation generated by their block memberships. Thus each permutation preserves every equivalence class setwise, so their product $c$ also preserves each class setwise. Since $c$ is transitive, the only such class is the whole label set. Every common upper bound is consequently $\hat1$, so $\pi\vee K_{\rm cl}(\pi)=\hat1$. [F2, step 1.2, step 2.1, step 1.3, step 2.2, step 3.1, step 2.3, step 4.1, algebra]

6.1 The general complement proof uses only finite reflection length, conjugation invariance of its defining set, and the lattice property of the interval. The type-A model uses the Coxeter presentation and permutations only; it invokes no Lie-theoretic root system, crystallographic hypothesis, finite classification, or Choice. No enumeration of the general finite-type interval is asserted. [F1, F2, step 1.2, step 2.1, step 1.3, step 1.4, step 2.2, step 3.1, step 2.3, step 4.1, step 5.1] ∎
