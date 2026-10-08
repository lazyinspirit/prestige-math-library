---
id: ex-cg-cambrian-quotient-of-s3-and-two-orientations
kind: example
title: "The c-Cambrian quotient of S3 for both orientations: fibers, endpoints and meet/join preservation"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 30
deps:
  - def-cg-recursive-sortable-projection-and-cambrian-congruence
  - thm-cg-sortable-meet-join-closure-and-cambrian-quotient
  - thm-cg-sortable-projection-greatest-element-and-interval-fibers
  - def-cg-sortable-element-skip-roots-and-cone
  - def-cg-initial-letter-sortable-projection
  - def-cg-left-right-weak-order-and-descents
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "Section 2, pp. 5-6, c-sorting words and block sequences; Section 3, pp. 8-11, endpoint and interval-fiber results consumed through the A-page suppliers."
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Section 7, Theorems 7.1 and 7.3 with proofs, used through the A-page lattice-closure and projection-homomorphism suppliers."
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 3, Sections 3.1-3.2, weak-order prefixes and the finite weak-order lattice."
---

## Statement

Let $(W,S)$ be the Coxeter system of type $A_2$: $W=S_3$ presented by $s_1^2=s_2^2=(s_1s_2)^3=1$, with right weak order $\le_R$, length $\ell$, longest element $w_0=s_1s_2s_1$ and left descent sets $D_L$. The $c^\infty$ and $c$-sorting-word conventions are as in [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]. The six elements of $W$ are

| $w$ | $e$ | $s_1$ | $s_2$ | $s_1s_2$ | $s_2s_1$ | $w_0$ |
| --- | --- | --- | --- | --- | --- | --- |
| reduced word | $e$ | $s_1$ | $s_2$ | $s_1s_2$ | $s_2s_1$ | $s_1s_2s_1$ |
| $\ell(w)$ | 0 | 1 | 1 | 2 | 2 | 3 |
| $D_L(w)$ | $\emptyset$ | $\{s_1\}$ | $\{s_2\}$ | $\{s_1\}$ | $\{s_2\}$ | $\{s_1,s_2\}$ |

**(i) The quotient for $c=s_1s_2$.** With $c^\infty=s_1s_2s_1s_2\cdots$, the $c$-sorting words of the six elements are the empty word, $(1)$, $(2)$, $(1,2)$, $(2,3)$ and $(1,2,3)$ in the positions of $c^\infty$; the corresponding block sets are $\emptyset,\{s_1\},\{s_2\},\{s_1,s_2\},\{s_2\}\not\supseteq\{s_1\},\{s_1,s_2\}\supseteq\{s_1\}$. Hence the $c$-sortable elements (weakly decreasing block sequence) are $e,s_1,s_2,s_1s_2,w_0$ and the unique non-sortable element is $s_2s_1$. The fibers of $\pi_c$ are
$$\{e\},\quad\{s_1\},\quad\{s_2,\,s_2s_1\},\quad\{s_1s_2\},\quad\{w_0\},$$
where $\pi_c(s_2s_1)=s_2$; the nontrivial fiber is the interval $[s_2,s_2s_1]$ with lower endpoint $\pi_c(s_2)=s_2$ and upper endpoint $u_c(s_2)=u_c(s_2s_1)=s_2s_1$ ([[thm-cg-sortable-projection-greatest-element-and-interval-fibers]] (2)–(3)).

**(ii) The quotient for $c'=s_2s_1$.** Exchanging $s_1$ and $s_2$: the $c'$-sortable elements are $e,s_2,s_1,s_2s_1,w_0$, the unique non-$c'$-sortable element is $s_1s_2$, $\pi_{c'}(s_1s_2)=s_1$, and the unique nontrivial fiber is $\{s_1,s_1s_2\}=[s_1,s_1s_2]$. Thus the two orientations of the $A_2$ diagram give the same fiber-size profile $1,1,2,1,1$, and in both cases the non-sortable element is the one whose two letters occur in the order opposite to the Coxeter element, its projection being the shorter of the two rank-two chains.

**(iii) Meet and join preservation.** The join and meet tables of the right weak order on $S_3$ (rows and columns in the order $e,s_1,s_2,s_1s_2,s_2s_1,w_0$) are

$$\begin{array}{c|cccccc} \vee & e & s_1 & s_2 & s_1s_2 & s_2s_1 & w_0\\\hline e & e & s_1 & s_2 & s_1s_2 & s_2s_1 & w_0\\ s_1 & s_1 & s_1 & w_0 & s_1s_2 & w_0 & w_0\\ s_2 & s_2 & w_0 & s_2 & w_0 & s_2s_1 & w_0\\ s_1s_2 & s_1s_2 & s_1s_2 & w_0 & s_1s_2 & w_0 & w_0\\ s_2s_1 & s_2s_1 & w_0 & s_2s_1 & w_0 & s_2s_1 & w_0\\ w_0 & w_0 & w_0 & w_0 & w_0 & w_0 & w_0 \end{array} \qquad \begin{array}{c|cccccc} \wedge & e & s_1 & s_2 & s_1s_2 & s_2s_1 & w_0\\\hline e & e & e & e & e & e & e\\ s_1 & e & s_1 & e & s_1 & e & s_1\\ s_2 & e & e & s_2 & e & s_2 & s_2\\ s_1s_2 & e & s_1 & e & s_1s_2 & e & s_1s_2\\ s_2s_1 & e & e & s_2 & e & s_2s_1 & s_2s_1\\ w_0 & e & s_1 & s_2 & s_1s_2 & s_2s_1 & w_0 \end{array}$$

With the values $\pi_c(e)=e$, $\pi_c(s_1)=s_1$, $\pi_c(s_2)=s_2$, $\pi_c(s_1s_2)=s_1s_2$, $\pi_c(s_2s_1)=s_2$, $\pi_c(w_0)=w_0$, the two tables give, for each of the $36$ pairs, $\pi_c(x\vee y)=\pi_c(x)\vee\pi_c(y)$ and $\pi_c(x\wedge y)=\pi_c(x)\wedge\pi_c(y)$; for example $\pi_c(s_2s_1\vee s_1s_2)=\pi_c(w_0)=w_0=s_2\vee s_1s_2=\pi_c(s_2s_1)\vee\pi_c(s_1s_2)$ and $\pi_c(s_2s_1\wedge s_1s_2)=\pi_c(e)=e=s_2\wedge s_1s_2=\pi_c(s_2s_1)\wedge\pi_c(s_1s_2)$. This is the rank-two case of [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] (4).

**(iv) The upper projection.** Here $u_c(w)=w$ for $w\ne s_2$ and $u_c(s_2)=u_c(s_2s_1)=s_2s_1$, so $u_c$ is not the identity but is order preserving and idempotent with $u_c\circ\pi_c=u_c$ and $\pi_c\circ u_c=\pi_c$ ([[thm-cg-sortable-projection-greatest-element-and-interval-fibers]] (2)–(3)).

## Facts & Assumptions

**Given:** The type-$A_2$ Coxeter presentation $s_1^2=s_2^2=(s_1s_2)^3=1$, the two orientations $c=s_1s_2$ and $c'=s_2s_1$, and the standard definitions of right weak order, sortable projection and upper projection.

[F1] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]: the $c^\infty$-sorting word is the lexicographically earliest reduced subword, and its block sequence records the letter sets between successive dividers.

[F2] [[def-cg-sortable-element-skip-roots-and-cone]] (1): an element is $c$-sortable exactly when its sorting-word block sequence is weakly decreasing under inclusion.

[F3] [[def-cg-initial-letter-sortable-projection]]: at an initial letter $s$, use $\pi_c(w)=s\pi_{scs}(sw)$ when $\ell(sw)<\ell(w)$ and $\pi_c(w)=\pi_{sc}(w_J)$ on the parabolic prefix when $\ell(sw)>\ell(w)$; the base value is $\pi_c(1)=1$.

[F4] [[def-cg-left-right-weak-order-and-descents]] (1): $x\le_Ry$ exactly when $y=xv$ with $\ell(y)=\ell(x)+\ell(v)$.

[F5] [[def-cg-left-right-weak-order-and-descents]] (3): meets and joins are greatest lower and least upper bounds in the right weak order.

[F6] [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (2): finite $W$ has a right-weak-order meet and join for every pair.

[F7] [[thm-cg-sortable-projection-greatest-element-and-interval-fibers]]: $u_c(w)=\pi_{c^{-1}}(ww_0)w_0$.

[F8] [[thm-cg-sortable-projection-greatest-element-and-interval-fibers]] (2)-(3): $u_c$ is order preserving and idempotent, its fibers agree with those of $\pi_c$, and each fiber is the closed interval from $\pi_c(w)$ to $u_c(w)$, with $\pi_cu_c=\pi_c$ and $u_c\pi_c=u_c$.

[F9] [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] (4): $\pi_c$ preserves binary meets and joins in the finite weak-order lattice.

[F10] [[def-cg-recursive-sortable-projection-and-cambrian-congruence]] (1): $x\sim_cy$ exactly when $\pi_c(x)=\pi_c(y)$; the quotient order is the right weak order on the projection images.

## Proof

1.1 Put $a=s_1$ and $b=s_2$. Cancellation reduces every word to an alternating word; $(ab)^3=1$ gives $abab=ba$ and $baba=ab$, so every alternating word of length at least four shortens, while $aba=bab$. Thus every element is represented by one of $e,a,b,ab,ba,aba$. The map $a\mapsto(12)$, $b\mapsto(23)$ satisfies the presentation and sends these six forms to six distinct permutations, so they are exactly the elements of $W$. Their lengths are $0,1,1,2,2,3$ respectively, and left multiplication gives $D_L(e)=\varnothing$, $D_L(a)=\{a\}$, $D_L(b)=\{b\}$, $D_L(ab)=\{a\}$, $D_L(ba)=\{b\}$, $D_L(aba)=\{a,b\}$. [given, algebra]

1.2 For $c=ab$, the lexicographically first reduced position sets in $c^\infty=ab|ab|\cdots$ are $e:\varnothing$, $a:1$, $b:2$, $ab:1,2$, $ba:2,3$, $w_0=aba:1,2,3$. Their block sequences are respectively $\varnothing$, $\{a\}$, $\{b\}$, $\{a,b\}$, $\{b\}\not\supseteq\{a\}$, and $\{a,b\}\supseteq\{a\}$. Hence exactly $e,a,b,ab,w_0$ are sortable, while $ba$ fails the inclusion test. [F1, F2, algebra]

1.3 For $c'=ba$, the first reduced position sets in $c'^\infty=ba|ba|\cdots$ are $e:\varnothing$, $b:1$, $a:2$, $ba:1,2$, $ab:2,3$, $w_0=bab:1,2,3$. Their block sequences are $\varnothing$, $\{b\}$, $\{a\}$, $\{a,b\}$, $\{a\}\not\supseteq\{b\}$, and $\{a,b\}\supseteq\{b\}$. Thus exactly $e,b,a,ba,w_0$ are $c'$-sortable and $ab$ is the unique failure. [F1, F2, algebra]

2.1 On a rank-one parabolic, $\pi_a(e)=e$ and $\pi_a(a)=a\pi_a(e)=a$, and likewise $\pi_b(e)=e$ and $\pi_b(b)=b$. Applying the initial-letter recursion at $a$ for $c=ab$ and at $b$ for $c'=ba$ gives $\begin{array}{c|cccccc}w&e&a&b&ab&ba&w_0\\\hline\pi_c(w)&e&a&b&ab&b&w_0\\\pi_{c'}(w)&e&a&b&a&ba&w_0\end{array}$. For $c$, the entries follow from $\pi_c(a)=a\pi_{ba}(e)=a$, $\pi_c(b)=\pi_b(b)=b$, $\pi_c(ab)=a\pi_{ba}(b)=ab$, $\pi_c(ba)=\pi_b(b)=b$, and $\pi_c(w_0)=a\pi_{ba}(ba)=aba$. For $c'$, they follow from $\pi_{ba}(a)=\pi_a(a)=a$, $\pi_{ba}(b)=b$, $\pi_{ba}(ab)=\pi_a(a)=a$, $\pi_{ba}(ba)=b\pi_{ab}(a)=ba$, and $\pi_{ba}(w_0)=b\pi_{ab}(ab)=bab$. [F3, algebra, step 1.1]

2.2 Reduced prefixes give the Hasse diagram $e\lessdot a\lessdot ab\lessdot w_0$ and $e\lessdot b\lessdot ba\lessdot w_0$. These are the only covers: multiplying each of the six reduced forms on the right by $a$ or $b$ either cancels its last letter or gives the next displayed form. The four incomparable pairs are exactly one choice from $\{a,ab\}$ and one from $\{b,ba\}$; their only common lower bound is $e$ and their only common upper bound is $w_0$. Comparable pairs have their lesser and greater elements as meet and join, respectively. This determines both operation tables in the statement and verifies them as greatest lower and least upper bounds. [F4, F5, F6, algebra, step 1.1]

3.1 By the kernel definition, the fibers for $c$ are $\{e\},\{a\},\{b,ba\},\{ab\},\{w_0\}$, and those for $c'$ are $\{e\},\{a,ab\},\{b\},\{ba\},\{w_0\}$. Their sortable images inherit the right weak order as the quotient order, so these are the stated two quotient partitions. [F10, step 2.1]

3.2 The map $\pi_c$ fixes every element except $ba$, which it sends to $b$. If neither operand is $ba$, their meet and join are also fixed: a join can equal $ba$ only when both operands lie below it, and among such pairs without $ba$ their join is $e$ or $b$; a meet can equal $ba$ only when both operands lie above it, and among such pairs without $ba$ the only possibility is $w_0,w_0$, whose meet is $w_0$. For an operand $ba$, the six cases $z=e,a,b,ab,ba,w_0$ give $(ba\vee z,\,b\vee\pi_c(z))=(ba,b),(w_0,w_0),(ba,b),(w_0,w_0),(ba,b),(w_0,w_0)$ and $(ba\wedge z,\,b\wedge\pi_c(z))=(e,e),(e,e),(b,b),(e,e),(ba,b),(ba,b)$; applying $\pi_c$ to the first coordinate yields equality in every case. By symmetry of meet and join this checks all 36 pairs. These are the quotient operations from [F10] and the direct calculation is the rank-two instance of [F9]. [F4, F5, F9, F10, algebra, step 2.1, step 2.2]

3.3 With $w_0=aba=bab$, the products $ww_0$ for $w=e,a,b,ab,ba,w_0$ are respectively $w_0,ba,ab,b,a,e$. Applying the opposite-orientation projection table and multiplying by $w_0$ gives $u_c(w)=e,a,ba,ab,ba,w_0$ in that order. In particular, $u_c(b)=u_c(ba)=ba$. Reversing $a,b$ gives $u_{c'}(w)=e,ab,b,ab,ba,w_0$ in the same input order, so $u_{c'}(a)=u_{c'}(ab)=ab$. [F7, algebra, step 2.1, step 1.1]

4.1 The nontrivial fibers are the chains $b<_Rba$ and $a<_Rab$, since $ba=b\,a$ and $ab=a\,b$ are length-additive right extensions; all other fibers are singletons. The endpoints in step 3.3 therefore give exactly $[b,ba]$ and $[a,ab]$ and singleton intervals. For $c$, $u_c$ changes only $b$ to $ba$; it preserves each cover in step 2.2, is idempotent, and the projection table gives $u_c\pi_c=u_c$ and $\pi_cu_c=\pi_c$. The same checks with $a$ and $ab$ establish the corresponding assertions for $c'$. [F4, F8, algebra, step 2.1, step 3.1, step 2.2, step 3.3]

5.1 Both orientations have five sortable elements, but their nonsortable elements and nontrivial fibers are interchanged: $ba\mapsto b$ for $c=ab$ and $ab\mapsto a$ for $c'=ba$. Thus the fiber-size profile is $1,1,2,1,1$ in either orientation, while the quotient partitions differ. All claims follow from six explicitly listed elements and finite case checks, so no Choice is used. [F2, step 1.2, step 1.3, step 3.1, algebra] ∎
