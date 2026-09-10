---
id: thm-dowker-product-characterization
kind: theorem
title: Dowker product characterization
status: draft
origin: pipeline
deps: [thm-countable-paracompactness-shrinking-criterion, def-product-topology, lem-normality-is-closed-hereditary, def-axiom-of-choice, lem-normality-via-shrinking, lem-locally-finite-unions-and-closures, thm-heine-borel-r, thm-of-archimedean]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Topology, Chapter 4 §3, Exercises 3–4 p. 27 and Theorem 3.4 with Exercises 7–8 p. 28"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. For a $T_1$ space $X$, the product $X\times[0,1]$ is normal if and only if $X$ is normal and countably paracompact. The interval has its usual relative real topology and the product has the product topology.

## Facts & Assumptions

**Given:** A $T_1$ space $X$, $K=[0,1]$, and AC. Closures of subsets of $K$ are relative to $K$.

[F1] A normal space is countably paracompact exactly when every decreasing closed sequence with empty intersection has open expansions with empty intersection ([[thm-countable-paracompactness-shrinking-criterion]]).

[F2] Open rectangles form a basis for the binary product topology ([[def-product-topology]]).

[F3] Closed subspaces of normal spaces are normal ([[lem-normality-is-closed-hereditary]]).

[F4] Normality gives open $V$ with $A\subseteq V\subseteq\overline V\subseteq U$ whenever $A$ is closed and contained in open $U$ ([[lem-normality-via-shrinking]]).

[F5] A locally finite union has closure equal to the union of the closures; taking closures preserves local finiteness ([[lem-locally-finite-unions-and-closures]]).

[F6] Every open cover of a closed bounded real interval has a finite subcover ([[thm-heine-borel-r]], proved there by canonical bisection).

[F8] For every real $r$ there is a natural number greater than $r$ ([[thm-of-archimedean]], applied to $\mathbb R$).

[A1] AC supplies choices from sets of nonempty witness sets ([[def-axiom-of-choice]]).

## Proof

1.1 The interval $K$ is compact also for relative open covers: write each relative open set as $K\cap O$ with $O$ real-open, and apply F6 to the resulting real-open cover. One can use all possible $O$ with a specified trace, so this needs no choice. A closed subset $L$ of $K$ is compact: adjoin $K\setminus L$ to any relative open cover and then remove that member from a finite subcover. For any compact space $L$ and closed $C\subseteq X\times L$, its projection to $X$ is closed. Indeed, if $x$ is outside the projection, for each $t\in L$ the product basis gives a rectangle $U_t\times V_t$ about $(x,t)$ missing $C$. Using AC to select these rectangles, finitely many $V_t$ cover $L$, and their corresponding finite intersection of $U_t$ is an open neighborhood of $x$ missing the projection. If $L$ is empty, the projection is empty and the empty intersection is $X$. [F6, F2, A1]

1.2 Suppose $X\times K$ is normal. The slice $X\times\{0\}$ is closed and its projection to $X$ is a homeomorphism: a relative basic rectangle on the slice is either empty or $U\times\{0\}$, with $U$ open in $X$. By closed heredity $X$ is normal. Given closed $F_n\supseteq F_{n+1}$ with $\bigcap_{n\ge1}F_n=\varnothing$, put $D=\bigcup_{n\ge1}(F_n\times[2^{-n},1])$. This is closed: at a point outside $D$, choose $N$ with $x\notin F_N$. The neighborhood $(X\setminus F_N)\times K$ misses every strip with $n\ge N$; intersect it with the complements of the finitely many earlier closed strips. This remains an open neighborhood avoiding $D$. Also $D$ misses the closed slice at zero. Normal shrinking gives an open $V$ containing that slice with $\overline V\cap D=\varnothing$. [F2, F3, F4]

2.1 In the setting of step 1.2, define $G_n=\{x:(x,2^{-n})\notin\overline V\}$. The fixed-height inclusion is continuous by the rectangle basis, so $G_n$ is open, and $F_n\subseteq G_n$ because $F_n\times\{2^{-n}\}\subseteq D$. For each $x$, a rectangle about $(x,0)$ inside $V$ contains $(x,t)$ for all sufficiently small $t\ge0$. The inequality $2^n\ge n+1$ follows by induction, and F8 therefore gives $2^{-n}\to0$. Consequently $(x,2^{-n})\in V$ for all sufficiently large $n$, whence $x\notin G_n$ then. Thus $\bigcap_nG_n=\varnothing$, and F1 applied to the normal space from step 1.2 gives countable paracompactness. [step 1.2, F2, F8, F1]

2.2 We next prepare the converse. Dyadic intervals form a countable real basis, directly from F8. Given $x\in\mathbb R$ and $\varepsilon>0$, choose $n$ with $2^{-n}<\varepsilon/4$, using $2^n\ge n+1$ and F8. There is an integer $k$ with $k\le2^nx<k+1$: F8 gives integer bounds on $2^nx$ in both directions, and the finite set of integers between those bounds and at most $2^nx$ has a greatest element. Then $x$ lies in $((k-1)2^{-n},(k+2)2^{-n})$, whose closed endpoints are within $\varepsilon$ of $x$. All dyadic intervals with endpoints $k2^{-n}$ and $l2^{-n}$, where $k<l$ are integers, form a countable family: enumerate triples $(n,k,l)$ by increasing $n+|k|+|l|$, each level finite. Finite subsets of this enumerated family are countable by encoding the finite index set $E$ as $\sum_{i\in E}2^i$. Enumerate as $(B_j)_{j<\omega}$ all finite unions of their traces on $K$, including $\varnothing$ and $K$. If disjoint closed sets $P,Q\subseteq K$ are given, each $t\in P$ has a relative interval neighborhood whose closure misses $Q$: choose $\varepsilon>0$ with $(t-\varepsilon,t+\varepsilon)\cap K\subseteq K\setminus Q$, and use the dyadic interval just constructed, whose closure lies inside that neighborhood. Compactness of $P$ from step 1.1 gives finitely many such intervals covering it. Their union is some $B_j$ with $P\subseteq B_j$ and $\overline{B_j}\cap Q=\varnothing$. If $P$ is empty use $B_j=\varnothing$; if $Q$ is empty one may use $B_j=K$. [F8, step 1.1]

3.1 Suppose now that $X$ is normal and countably paracompact, and let $F,G$ be disjoint closed subsets of $X\times K$. Their fibers $F_x,G_x$ are closed in $K$ because fixed-coordinate inclusions are continuous by F2. Put $O_j=\{x:F_x\subseteq B_j\text{ and }G_x\cap\overline{B_j}=\varnothing\}$. The complement of $O_j$ is the union of the projections of $F\cap(X\times(K\setminus B_j))$ and $G\cap(X\times\overline{B_j})$. Both projections are closed by step 1.1, since their compact factors are closed in $K$. Hence $O_j$ is open; the fiber separation in step 2.2 shows these sets cover $X$. Take a locally finite open refining cover $\mathcal R$ and assign each $R$ its least index $a(R)$ with $R\subseteq O_{a(R)}$. Set $V_j=\bigcup\{R:a(R)=j\}$. These sets form a countable open cover and $V_j\subseteq O_j$. Near a point only finitely many $R$ meet a fixed neighborhood, so only their finitely many assigned $V_j$ can meet it. Thus $(V_j)$ is locally finite even as an indexed family. [step 1.1, step 2.2, F2, F1]

4.1 Shrink this locally finite cover as follows. After $W_i$ for $i<j$ have been defined, put $A_j=X\setminus(\bigcup_{i<j}W_i\cup\bigcup_{i>j}V_i)$. Inductively the earlier $W_i$ together with $V_i$ for $i\ge j$ cover $X$, initially because $(V_i)$ covers, so the closed set $A_j$ lies in $V_j$. Choose open $W_j$ with $A_j\subseteq W_j\subseteq\overline{W_j}\subseteq V_j$ by F4. This replacement preserves that covering invariant. AC fixes a choice function on all nonempty sets of open shrinking witnesses in $X$, so ordinary recursion makes the choices simultaneously. If a point missed every $W_j$, the finite nonempty set $\{j:x\in V_j\}$ would have a largest index $j$; that point would lie in $A_j\subseteq W_j$, a contradiction. Thus $(W_j)$ covers. Because $W_j\subseteq V_j$, this family and, by F5, its closures are locally finite. [step 3.1, F4, A1, F5]

5.1 Put $H=\bigcup_j(W_j\times B_j)$. It is open by the rectangle basis. If $(x,t)\in F$, choose $j$ with $x\in W_j$; then $x\in O_j$ and $t\in F_x\subseteq B_j$, so $(x,t)\in H$. The rectangles form a locally finite family because a neighborhood $N$ in $X$ meeting only finitely many $W_j$ gives $N\times K$ with the same property. Also $\overline{W_j\times B_j}=\overline{W_j}\times\overline{B_j}$: every basic rectangle about a pair of closure points meets the product, whereas outside either closure a rectangle misses it. By F5, $\overline H=\bigcup_j(\overline{W_j}\times\overline{B_j})$. If $(x,t)$ belongs to one of these products, then $x\in V_j\subseteq O_j$ and $t\in\overline{B_j}$, so $(x,t)\notin G$. Hence $H$ and $(X\times K)\setminus\overline H$ are disjoint open neighborhoods of $F$ and $G$, proving normality. If $X$ is empty, both sides of the asserted equivalence hold by the empty covers and empty separation; the constructions also allow empty fibers and shrinking sets. Together with step 2.1 this proves both directions. QED. [step 4.1, step 3.1, step 2.1, F2, F5]
