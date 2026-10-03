---
id: cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing
kind: counterexample
title: Ordinary intersection number alone does not give the LKB pairing
status: draft
origin: pipeline
deps: [def-forks-noodles-and-their-lkb-intersection-pairing, def-lexicographic-order-on-fork-noodle-deck-monomials]
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 2.1, printed pp. 475-476 (the sum <N,F> = sum epsilon_{i,j} m_{i,j}, Claim 3.3) and section 3.1, printed pp. 480-481"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 5 (the arcs delta_{i,j} and m_{i,j} = phi(delta_{i,j}))"
verification:
  precheck: n/a
---
## Statement refuted

The LKB intersection number $\langle N,F\rangle$ of a noodle and a fork is
determined by the total algebraic intersection number of the projected
surfaces $\Sigma(N)$ and $\Sigma(F)$ in $C$.

## Counterexample

Work with $n=3$ punctures $p_1<p_2<p_3$ on the real axis of the standard disk
and a fork whose tine runs from $p_1$ to $p_2$.

**Given:** the standard disk with three punctures and the following
configuration.

* The noodle $N$ is a lasso around $p_3$: it leaves $d_1$, crosses the real
  axis once in $(p_2,p_3)$, loops around $p_3$, crosses the axis to the right
  of $p_3$, and returns to $d_2$; the closed curve $N$ together with the
  boundary arc between its endpoints bounds a disk $B$ with
  $B\cap P=\{p_3\}$.
* The tine $T(F)$ leaves $p_1$, travels to the boundary of $B$ and crosses
  $N$ transversely at $z_1$ with positive sign, makes inside $B$ an excursion
  that winds once around $p_3$, crosses $N$ again at $z_2$ with negative sign
  and continues to $p_2$. Thus $T(F)$ crosses $N$ exactly twice, and both
  endpoints of the tine lie outside $B$.
* The parallel copy $T(F')$ is chosen so that $z_i,z'_i$ are joined by a
  short arc of $N$ in the strip between $T(F)$ and $T(F')$; along $N$ starting
  from $d_1$ the four points occur in the order $z_1,z'_1,z'_2,z_2$, which is
  the order forced by the two crossing signs.

1.1 The four pairs of intersection points carry the following signs. The crossing at $z_1$ is positive, so $(-1)^{b_{1,1}}=+1$; the crossing at $z_2$ is negative, so $(-1)^{b_{2,2}}=-1$. Along $N$ the point $z_1$ comes before $z'_2$, hence $(-1)^{b_{1,2}}=+1$, while $z'_1$ comes before $z_2$, hence $(-1)^{b_{2,1}}=-1$. The sign formula $\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$ of [[def-lexicographic-order-on-fork-noodle-deck-monomials]] therefore gives $$\epsilon_{1,1}=-1,\qquad \epsilon_{1,2}=+1,\qquad \epsilon_{2,1}=-1,\qquad \epsilon_{2,2}=+1,\qquad \sum_{i,j=1}^{2}\epsilon_{i,j}=0.$$ The sum is, by [[def-forks-noodles-and-their-lkb-intersection-pairing]], the total algebraic intersection number in $C$ of the projected surfaces $\Sigma(N)$ and $\Sigma(F)$, counted at the four points over $\{z_i,z'_j\}$; hence it vanishes. [algebra]

2.1 The same configuration determines the deck monomials. Let $A_0$ be the sum of the winding numbers of the loop formed by $N$ from $d_1$ to $d_2$ and back to $d_1$ along $\partial D$; $A_0$ is an integer depending only on the orientation conventions. The arcs $\xi_i$ from $d_1$ along the handle of $F$ to the tine vertex, along the tine to $z_i$, and back to $d_1$ along $N$ have winding sums $a_1$ and $a_2$ differing by the winding number of the excursion around $p_3$: $a_2-a_1=1$. Choosing the handle so that the first loop bounds no puncture gives $a_1=0$, $a_2=1$. By $a_{i,j}=a_i+a_j+A_0$ one gets $$a_{1,1}=A_0,\qquad a_{1,2}=a_{2,1}=A_0+1,\qquad a_{2,2}=A_0+2.$$ The mutual winding numbers are the minimal ones compatible with the parities of step 1.1, namely $b_{1,1}=b_{1,2}=0$ and $b_{2,2}=b_{2,1}=1$, as read from the tight position of the two crossings and their parallel copies. Hence $$m_{1,1}=q^{A_0},\qquad m_{1,2}=q^{A_0+1},\qquad m_{2,1}=q^{A_0+1}t,\qquad m_{2,2}=q^{A_0+2}t.$$ [step 1.1, algebra]

3.1 Assembling $\langle N,F\rangle=\sum_{i,j}\epsilon_{i,j}m_{i,j}$ gives $$\langle N,F\rangle=-q^{A_0}+q^{A_0+1}-q^{A_0+1}t+q^{A_0+2}t =q^{A_0}(q-1)(1+qt),$$ which is nonzero in $\Lambda=\mathbb Z[q^{\pm1}, t^{\pm1}]$: the Laurent polynomial ring is a domain and neither $q-1$ nor $1+qt$ is zero. Thus the LKB pairing is a nonzero Laurent polynomial while the total algebraic intersection number of the projected surfaces computed in step 1.1 is zero. The four monomials are pairwise distinct, so no cancellation between geometrically distinct terms can occur; in particular the two tine crossings, whose signed count cancels, contribute terms with different deck monomials. Therefore the LKB pairing is not a function of the ordinary intersection number of the projected surfaces alone. [step 1.1, step 2.1, algebra] ∎
