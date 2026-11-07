---
id: thm-quadratic-local-norm-index-two-elementary
kind: theorem
title: Elementary quadratic local norm index
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: J. S. Milne, Class Field Theory, Chapter III, Theorem 3.4(b), printed p. 108
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: For any finite abelian local extension the norm quotient is its Galois group; the quadratic statement is this theorem's degree-two case, read in the repository source copy. The proof below independently gives the elementary Herbrand quotient argument.
verification: {}
---

## Statement

Let $K$ be a finite extension of $\mathbb Q_p$ and $L/K$ a quadratic field extension with their usual complete nonarchimedean valuations. Then $K^\times/N_{L/K}(L^\times)$ has order $2$. No local class field theory theorem is used in the proof.

## Facts & Assumptions

**Given:** The fields in the Statement, their rings of integers, and the nontrivial automorphism $\sigma$ of $L/K$.

## Proof

**Proof technique:** establish the order-two Herbrand identities, compute the unit quotient by exponential, and use the explicit quadratic Hilbert 90 formula.

For any abelian group $M$ with involution $\sigma$, put $D=\sigma-1$, $N=1+\sigma$, $T_0(M)=\ker D/\operatorname{im}N$, $T_1(M)=\ker N/\operatorname{im}D$, and $h(M)=|T_0(M)|/|T_1(M)|$ when both groups are finite. For multiplicative groups, use multiplicative notation and interpret $N$ as the norm.

1.1 The short exact sequence gives a cyclic exact sequence $$T_0(A)\longrightarrow T_0(B)\longrightarrow T_0(C)\overset{\partial_0}{\longrightarrow}T_1(A)\longrightarrow T_1(B)\longrightarrow T_1(C)\overset{\partial_1}{\longrightarrow}T_0(A).$$ Explicitly, for $c\in\ker D$ choose a lift $b$ and set $\partial_0[c]=[Db]$; for $c\in\ker N$ set $\partial_1[c]=[Nb]$. These lie in $A$ and the required kernels. Changing $b$ by an element of $A$ changes the answer by a boundary. Replacing $c$ by $c+Nc'$ changes $Db$ by zero after lifting $c'$, and replacing $c$ by $c+Dc'$ changes $Nb$ by zero; hence the maps are well-defined. At $T_0(B)$, a class whose image is a norm in $C$ can have a lifted norm subtracted to become an invariant element of $A$. At $T_0(C)$, $\partial_0[c]=0$ means $Db=Da$ for some $a\in A$, so $b-a$ is an invariant lift. At $T_1(A)$, a class that becomes $Db$ in $B$ comes from $[\bar b]\in T_0(C)$. At $T_1(B)$, a class whose image is a $D$-boundary in $C$ can have a lifted $D$-boundary subtracted to lie in $\ker N\cap A$. At $T_1(C)$, $\partial_1[c]=0$ means $Nb=Na$ for some $a\in A$, so $b-a$ is a lift in $\ker N$. At $T_0(A)$, a class that becomes $Nb$ in $B$ comes from $[\bar b]\in T_1(C)$. These checks establish exactness at all six positions. [given, construct, algebra]

1.2 Write $U_L=\mathcal O_L^\times$ and normalize $v_p(p)=1$. The ring of integers of any finite extension $M/\mathbb Q_p$ is a full $\mathbb Z_p$-lattice in $M$. To see the lattice assertion directly, choose a $\mathbb Q_p$-basis $u_1,\ldots,u_d$ made integral by multiplying its entries by sufficiently high powers of $p$, and put $A=\sum\mathbb Z_pu_i$. Integral elements are closed under products, and their field traces belong to $\mathbb Z_p$: the trace is integral over $\mathbb Z_p$ and belongs to $\mathbb Q_p$, whose integral elements are exactly $\mathbb Z_p$. The trace pairing is nondegenerate, since for $x\ne0$ one may take $y=x^{-1}$ and obtain $\operatorname{Tr}(xy)=d\ne0$. Its dual lattice $A^*=\{x:\operatorname{Tr}(xA)\subseteq\mathbb Z_p\}$ is therefore a full lattice, and $A\subseteq\mathcal O_M\subseteq A^*$. The quotient $A^*/A$ is finite, proving the assertion. In particular full integral lattices in the same finite-dimensional space are commensurable, and quotients modulo a nonzero power of $p$ are finite. [given, construct, algebra]

2.1 If four of the six groups in step 1.1 are finite and correspond to any two of $A,B,C$, each remaining group has finite kernel and image between finite groups, hence is finite. For six finite groups in a cyclic exact sequence, write the order of each group as the product of the orders of its incoming and outgoing images. Multiplying alternating orders cancels every image order once in numerator and once in denominator. Applied to step 1.1 this gives $$\frac{|T_0(A)|\,|T_0(C)|\,|T_1(B)|}{|T_0(B)|\,|T_1(A)|\,|T_1(C)|}=1,$$ which is $h(B)=h(A)h(C)$. [step 1.1, algebra]

3.1 For finite $M$, the kernel-image formula gives $|\ker D|\,|\operatorname{im}D|=|M|=|\ker N|\,|\operatorname{im}N|$, so $|T_0(M)|=|T_1(M)|$ and $h(M)=1$. A homomorphism with finite kernel and cokernel factors as a surjection onto its image followed by an inclusion. Apply step 2.1 to the two corresponding short exact sequences and use the just-proved value $1$ for the finite kernel and cokernel. This proves the final assertion as well. [step 2.1, algebra]

4.1 Choose a nonzero $\delta\in\mathcal O_L$ with $\sigma\delta=-\delta$: take a nonzero difference $z-\sigma z$ and scale it by a power of $p$ to be integral. Then $L=K\oplus K\delta$, and $A=\mathcal O_K\oplus\mathcal O_K\delta$ is a stable finite-index sublattice of $\mathcal O_L$ by step 1.2. On the first summand $\sigma=1$, so $T_0=\mathcal O_K/2\mathcal O_K$ and $T_1=0$. On the second summand $\sigma=-1$, so $T_0=0$ and $T_1\cong\mathcal O_K/2\mathcal O_K$. These quotients are finite by step 1.2. Their orders cancel, giving $h(A)=1$ and hence $h(\mathcal O_L)=1$ by [step 3.1]. Multiplication by $p^n$ is an equivariant isomorphism, so $h(p^n\mathcal O_L)=1$ as well. [step 3.1, step 1.2, construct, algebra]

5.1 For $n\ge2$, the series $$\log(1+x)=\sum_{j\ge1}(-1)^{j+1}x^j/j,\qquad \exp(x)=\sum_{j\ge0}x^j/j!$$ define inverse equivariant isomorphisms between $1+p^n\mathcal O_L$ under multiplication and $p^n\mathcal O_L$ under addition. Indeed $v_p(x^j/j)\ge nj-v_p(j)$ and $v_p(x^j/j!)\ge nj-j/(p-1)$ tend to infinity, and every term after the linear term has valuation greater than or equal to $n$ (strictly greater for the nonlinear terms). Thus both series converge in the indicated sets. Their inverse and multiplication identities follow from the formal power-series identities by taking convergent partial sums; the rational coefficients make them commute with $\sigma$. By step 1.2, $U_L/(1+p^n\mathcal O_L)$ is finite, since reduction embeds this quotient into the units of the finite ring $\mathcal O_L/p^n\mathcal O_L$. Applying [step 3.1] and step 4.1 therefore gives $h(U_L)=1$. [step 3.1, step 1.2, step 4.1, construct, algebra]

6.1 The normalized integer-valued valuation gives an equivariant exact sequence $$1\longrightarrow U_L\longrightarrow L^\times\overset{v_L}{\longrightarrow}\mathbb Z\longrightarrow0,$$ where $\sigma$ acts trivially on $\mathbb Z$. For the latter module $T_0=\mathbb Z/2\mathbb Z$ and $T_1=0$, so [step 3.1] and step 5.1 yield $h(L^\times)=2$. Finally $T_1(L^\times)$ is trivial by the following explicit calculation. If $z\sigma z=1$ and $z\ne-1$, put $y=1+z$; then $y/\sigma y=z$. If $z=-1$, take $y=\delta$ from step 4.1. Thus every norm-one element is a quotient $y/\sigma y$, exactly the multiplicative form of an element in $\operatorname{im}(\sigma-1)$. The fixed group is $K^\times$, so $T_0(L^\times)=K^\times/N_{L/K}(L^\times)$; its order is $h(L^\times)=2$, as asserted. [step 3.1, step 4.1, step 5.1, construct, algebra] ∎
