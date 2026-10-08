---
id: thm-cg-fully-commutative-forbidden-chain-criterion
kind: theorem
title: "Fully commutative elements: the braid-factor criterion and the forbidden-chain heap criterion"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 5
deps: [def-cg-labeled-word-heap-and-fully-commutative-element, lem-cg-convex-chains-consecutive-in-a-linear-extension, thm-cg-heaps-classify-commutation-classes, thm-hh-matsumoto-reduced-word-theorem, def-hh-coxeter-matrix-word-group-and-length]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Proposition 1.1 (braid-factor criterion), PDF p. 4, and Proposition 2.3 with its proof (forbidden convex chains and covering equal labels), PDF pp. 9-10: the criterion is the conjunction of (a) and (b) equivalent to (c)"
    - title: "C. Krattenthaler, The theory of heaps and the Cartier-Foata monoid, appendix to the electronic reedition of P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements (2006)"
      url: "https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf"
      locator: "§3, PDF pp. 4-5 (words in a commutation class are read from linear extensions)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(S,m)$, $W$, $\ell$ and words be as in [[def-hh-coxeter-matrix-word-group-and-length]], and let heaps, linear extensions and commutativity classes be as in [[def-cg-labeled-word-heap-and-fully-commutative-element]]. For a finite alternating word $\langle u,v\rangle_q=(u,v,u,v,\dots)$ of length $q$ and a word $s$, say that $\langle u,v\rangle_q$ **occurs as a contiguous factor** of $s$ when $s$ contains $q$ consecutive letters equal to $\langle u,v\rangle_q$.

**(1) Braid-factor criterion.** For $w\in W$ the following are equivalent: (a) $w$ is fully commutative; (b) no reduced word of $w$ contains $\langle u,v\rangle_{m(u,v)}$ as a contiguous factor for any distinct $u,v\in S$ with $3\le m(u,v)<\infty$.

**(2) Heap criterion.** Let $s$ be a word with heap $P_s$ and let $w:=s_1\cdots s_k\in W$ be the element it represents. Consider the conditions:
(a) $P_s$ contains no convex chain $i_1\prec\cdots\prec i_m$ of length $m=m(u,v)$ whose labels alternate between distinct $u,v\in S$, for any pair with $3\le m(u,v)<\infty$;
(b) $P_s$ contains no covering pair $i\lessdot j$ with $s_i=s_j$;
(c) $s$ is reduced and $w$ is fully commutative.
Then (a) and (b) **together** are equivalent to (c): if $s$ is reduced and $w$ is fully commutative, then (a) and (b) both hold; conversely, if (a) and (b) both hold, then $s$ is reduced and $w$ is fully commutative. When these hold, $P_s$ is the heap of $w$, i.e. it is isomorphic to $P_{s'}$ for every $s'\in\mathcal R(w)$.

**(3) Reformulation.** Clause (2) says in particular that the heap $P_s$ of an arbitrary word is the heap of a fully commutative element if and only if it avoids the two forbidden configurations (a) and (b); the reducedness of $s$ is a consequence, not a hypothesis.

**(4) Caveat.** Only the finite alternating chains of clause (2)(a) are excluded; no condition is imposed for pairs with $m(u,v)=\infty$, and clause (1)(b) likewise quantifies only over pairs with $3\le m(u,v)<\infty$.

## Facts & Assumptions

**Given:** A word $s=(s_1,\dots,s_k)$ in $S$ with heap $P_s$, and the element $w=s_1\cdots s_k\in W$.

[F1] Heaps, labeled linear extensions $L(P_s,s)$, commutation classes $C(s)$, and full commutativity are as in [[def-cg-labeled-word-heap-and-fully-commutative-element]]: $i\prec_s j$ exactly when $i<j$ and ($s_i=s_j$ or $m(s_i,s_j)\ge3$), $s\sim s'$ means that $s'$ is obtained from $s$ by finitely many interchanges of adjacent letters with $m=2$, and $w$ is fully commutative when $\mathcal R(w)=C(s)$ for one (equivalently every) $s\in\mathcal R(w)$.

[F2] The presentation has relators $s^2$ and $(st)^{m(s,t)}$ for $m(s,t)<\infty$, and $m(s,t)$ is the order of $st$ in $W$; replacing a contiguous alternating factor $\langle u,v\rangle_{m(u,v)}$ of a word by $\langle v,u\rangle_{m(u,v)}$ preserves the represented element and the length ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F3] (i) Any two reduced expressions of the same element are braid-equivalent, that is, connected by replacements of alternating subwords of length $m(x,y)<\infty$ by the other alternating word. (ii) A word is reduced if and only if no sequence of braid moves followed by cancellation of a consecutive equal pair can shorten it ([[thm-hh-matsumoto-reduced-word-theorem]], clauses (1) and (2)).

[F4] A convex chain of a finite poset occurs consecutively in some linear extension; in particular, so does every covering pair ([[lem-cg-convex-chains-consecutive-in-a-linear-extension]]).

[F5] The labeled linear extensions of a heap are exactly the words of its commutativity class, $L(P_q,q)=C(q)$; $s\sim s'$ if and only if $P_s\cong P_{s'}$ as labeled posets; and if $w$ is fully commutative then $P_w$ is well defined up to labeled isomorphism ([[thm-cg-heaps-classify-commutation-classes]], clauses (1), (3), (4)).

## Proof

**Given:** A word $s=(s_1,\dots,s_k)$ in $S$, its represented element $w$, and its heap $P_s$.

**Proof technique:** direct.

1.1 Clause (1). Suppose first that some $s\in\mathcal R(w)$ contains the contiguous factor $F=\langle u,v\rangle_m$ with $m:=m(u,v)\in[3,\infty)$, and let $s^\ast$ be obtained from $s$ by replacing $F$ with $\langle v,u\rangle_m$. By [F2], $s^\ast$ represents $w$ and has the same length, so $s^\ast\in\mathcal R(w)$. Delete from a word all letters outside $\{u,v\}$; this projection is unchanged by every interchange of adjacent commuting letters, because such a pair consists of distinct letters with $m=2$, so either both letters lie outside $\{u,v\}$ and are deleted, or exactly one of them lies in $\{u,v\}$ and keeps its position among the surviving letters (both letters in $\{u,v\}$ is impossible since $m(u,v)\ge3$). The projections have a common prefix and suffix outside the factor, while their middle blocks are the distinct alternating words $u,v,u,\dots$ and $v,u,v,\dots$; cancelling the common prefix and suffix shows that the full projections differ. Hence $s^\ast\notin C(s)$, so $\mathcal R(w)$ is not a single commutativity class and $w$ is not fully commutative; this proves (a)$\Rightarrow$(b). Conversely, if $w$ is not fully commutative, choose $s,s'\in\mathcal R(w)$ with $s'\notin C(s)$ and, by [F3](i), a sequence of braid moves $s=q_0,q_1,\dots,q_r=s'$; let $t$ be the first index with $q_t\notin C(s)$. Then $q_{t-1}\in C(s)$ and the move $q_{t-1}\to q_t$ is not a commutation, so it replaces a contiguous factor $\langle x,y\rangle_{m(x,y)}$ by $\langle y,x\rangle_{m(x,y)}$ with $x\ne y$ and $m(x,y)\ge3$. The word $q_{t-1}$ is obtained from $s$ by braid moves, hence has length $k=\ell(w)$ and represents $w$, so it is a reduced word of $w$ containing the forbidden factor; this proves (b)$\Rightarrow$(a). [given, F1, F2, F3]

1.2 Clause (2), (c)$\Rightarrow$(b). Assume $s$ is reduced and $w$ is fully commutative, so $C(s)=\mathcal R(w)$ by [F1]. If $P_s$ had a covering pair $i\lessdot j$ with $s_i=s_j$, then $\{i,j\}$ would be a two-element convex chain, so by [F4] some linear extension of $P_s$ has $i,j$ consecutive; its labeled word $s''$ lies in $L(P_s,s)=C(s)$ by [F5], hence in $\mathcal R(w)$, and contains two consecutive equal letters. Deleting those two letters gives an expression of $w$ with $k-2$ letters, because $s_i^2=1$ in $W$ by [F2], contradicting $\ell(w)=k$. Hence (b) holds. [given, F1, F2, F4, F5]

1.3 Clause (2), the braid class equals the commutation class under (a). Assume (a), and let $H(s)$ be the set of words obtained from $s$ by finitely many braid moves. Then $H(s)=C(s)$: otherwise choose a sequence of braid moves from $s$ to a word outside $C(s)$ with the fewest moves, so that its last move is applied to a word $q\in C(s)$ and leaves $C(s)$; that move is not a commutation, hence replaces a contiguous alternating factor $\langle x,y\rangle_{m(x,y)}$, $x\ne y$, $m(x,y)\ge3$, of $q$. The positions of that factor form a chain in $P_q$, because consecutive positions of the factor carry the noncommuting pair $\{x,y\}$; they are convex, because the order of $P_q$ is contained in the position order, so an element lying between two positions of the factor is itself one of them. Thus $P_q$ contains a convex alternating chain of length $m(x,y)\ge3$, and since $q\in C(s)$ gives $P_q\cong P_s$ by [F5] while containing such a chain is invariant under labeled isomorphism, condition (a) fails for $P_s$, a contradiction. Hence $H(s)=C(s)$. [given, F1, F5]

2.1 Clause (2), (c)$\Rightarrow$(a). Assume $s$ is reduced and $w$ is fully commutative, so $C(s)=\mathcal R(w)$ by [F1]. If $P_s$ contained a convex chain with labels alternating between distinct $u,v$ of length $m=m(u,v)\in[3,\infty)$, then by [F4] some linear extension of $P_s$ has the chain's elements consecutive; its labeled word $s''$ lies in $L(P_s,s)=C(s)$ by [F5], hence in $\mathcal R(w)$, and its consecutive letters at those positions are the alternating factor $\langle u,v\rangle_m$. This contradicts clause (1)(b), proved in step 1.1, so (a) holds. [given, F4, F5, step 1.1]

2.2 Clause (2), (a) and (b) imply that $s$ is reduced. If $s$ were not reduced, then by [F3](ii) there is a sequence of braid moves from $s$ to a word $u$ containing a consecutive equal pair, so $u\in H(s)=C(s)$ by step 1.3. Hence $P_u\cong P_s$ by [F5]. The two consecutive equal positions of $u$ satisfy $i\prec_u i+1$; no element lies strictly between them, because the order of $P_u$ is contained in the position order and there is no integer strictly between $i$ and $i+1$; so they form a covering pair of $P_u$ with equal labels. Under the labeled isomorphism this gives a covering pair of $P_s$ with equal labels, contradicting (b). Hence $s$ is reduced. [given, F1, F3, F5, step 1.3]

3.1 Clause (2), conclusion of (a),(b)$\Rightarrow$(c). Assume (a) and (b). By step 2.2 the word $s$ is reduced, so $\ell(w)=k$. Every word braid-equivalent to $s$ has length $k$, represents $w$ by [F2], and is therefore reduced; hence $H(s)$ consists of reduced words of $w$. By [F3](i) every reduced word of $w$ is braid-equivalent to $s$, so $\mathcal R(w)\subseteq H(s)=C(s)$ by step 1.3, while conversely every member of $C(s)$ is obtained from $s$ by commutations and so has length $k$ and represents $w$, hence lies in $\mathcal R(w)$. Therefore $\mathcal R(w)=C(s)$ and $w$ is fully commutative; by [F5] this also gives $P_s\cong P_{s'}$ for every $s'\in\mathcal R(w)$. [given, F1, F2, F3, F5, step 1.3, step 2.2]

4.1 Clause (3). If $P_s$ avoids (a) and (b), then (c) holds by step 3.1, so $w$ is fully commutative and $P_s$ is its heap. Conversely, if $P_s$ is the heap of a fully commutative element, then $P_s\cong P_{s'}$ for some $s'\in\mathcal R(w')$ with $w'$ fully commutative; by [F5], $s\sim s'$, so $s\in C(s')=\mathcal R(w')$; hence $s$ is reduced and represents the fully commutative element $w'$, and steps 1.2 and 2.1 give (a) and (b). Finally, clause (4) is the restriction already built into the definitions: condition (a) and clause (1)(b) quantify only over pairs with $3\le m(u,v)<\infty$, and for $m(u,v)=\infty$ no braid relator exists by [F2], so no finite alternating block is forbidden. [given, F2, F5, step 1.2, step 2.1, step 3.1] ∎
