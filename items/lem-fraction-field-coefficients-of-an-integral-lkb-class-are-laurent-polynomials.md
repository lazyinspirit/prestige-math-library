---
id: lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials
kind: lemma
title: Fraction-field coefficients of an integral LKB class are Laurent polynomials
status: draft
origin: pipeline
deps: [lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank, lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion, lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors, lem-the-fork-noodle-pairing-is-well-defined-and-equivariant, lem-int-cancellation, cor-polynomial-ring-over-a-domain-is-a-domain, def-multiplicative-subset-and-localisation]
justified_by: []
aliases: []
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Lemmas 4.4, 4.5, 4.6 and their proofs, printed pp. 10-12, including Figures 6 and 7"
    - title: "Paoluzzi and Paris, A note on the Lawrence-Krammer-Bigelow representation, Algebr. Geom. Topol. 2 (2002) 499-518"
      url: "https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf"
      locator: "Section 3, printed pp. 507-510: the absolute cellular complex and its integral basis"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

Let $c_{i,j}\in\mathbb Q(q,t)$ for $1\le i<j\le n$ be such that
$v=\sum_{i<j}c_{i,j}v_{i,j}$ lies in $H_2(\widetilde C;\mathbb Z)$. Then
$c_{i,j}\in\Lambda$ for all $i<j$; equivalently the closed surfaces $v_{i,j}$
span $H_2(\widetilde C;\mathbb Z)$ over $\Lambda$.

## Facts & Assumptions

**Given:** the closed surfaces $v_{i,j}$ and dual classes $x_{i,j}$ of [[lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors]], the pairings of [[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]], and the fraction-field rank and saturated inclusion of [[lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank]] and [[lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion]].

[F1] (Bigelow 2002, Lemma 4.6, printed p. 11.) For all $1\le i<j\le n$ the dual class $x_{i,j}$ is a multiple of $(1-q)^2$ in $H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu)$. This is the finite-strip decomposition of source Figure7. Move the two vertical edges, relative to the boundary/end homology, into disjoint U-shaped edges enclosing the prefix punctures $p_1,\ldots,p_i$ and suffix punctures $p_j,\ldots,p_n$. Cut each U along finitely many radial arcs ending in small puncture neighborhoods. The paired shores have opposite orientations and their lifts differ by $q$ (or $q^{-1}$ on the opposite oriented U), so each radial piece has coefficient a Laurent unit times $1-q$ (respectively $1-q^{-1}$). Pieces lying on the outer boundary or inside an end neighborhood are zero in the indicated relative group. The two U regions are disjoint, so their product pieces never collide and introduce no additional mutual winding. Thus the finite product decomposition factors out $(1-q)(1-q^{-1})$, a unit multiple of $(1-q)^2$. The number of pieces depends on the two puncture clusters; it is not an asserted universal eight-piece count.

[F2] (Bigelow 2002, Lemma 4.5, printed p. 11.) The class $x_{n-1,n}$ is a
multiple of $(1-q)(1+qt)(1-t)$ in
$H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu)$. The source cuts the
square $I\times I$ by the four lines $\{x=y\}$, $\{x+y=1\}$, $\{x=\tfrac12\}$,
$\{y=\tfrac12\}$ into eight triangles (the antidiagonal in the unit-square coordinates); restricted to the eight pieces the lifted
representative represents
$$1,\ -q,\ -t,\ qt,\ qt,\ -q^2t,\ -qt^2,\ q^2t^2$$
times the triangle on the edge $\alpha$, and the sum of these eight
coefficients is
$$1-q-t+2qt-q^2t-qt^2+q^2t^2=(1-q)(1+qt)(1-t).$$

[F3] The last-column pairings hold up to a Laurent unit:
$$\langle v,x_{i,n}\rangle=(1-q)^2c_{i,n}\quad(n\ge4,\ i\le n-2),\qquad \langle v,x_{n-1,n}\rangle=(1-q)^2(1+qt)(1-t)c_{n-1,n}\quad(n\ge2).$$
For $n=3$, $\langle v,x_{1,3}\rangle=(1-q)^2(1+qt)c_{1,3}$.
After subtracting the adjacent terms, $v'=c_{1,3}v_{1,3}$ satisfies
$$\langle v',\sigma_2x_{2,3}\rangle=(1-t)(1-q)^2(1+qt)c_{1,3}.$$
The class $\sigma_2x_{2,3}$ is a multiple of $(1-t)(1-q)(1+qt)$.
These are precisely the separate higher-rank and residual three-puncture
computations of Bigelow's Lemma 4.4 proof, not one formula for all ranks.
They use the diagonal and last-column pairings and the closing factors.
The nonunit off-diagonal exception of the corrected surface lemma does not
enter a last-column pairing, and it is absent at $n=3$.



[F4] The integers have no zero divisors ([[lem-int-cancellation]]), polynomial extension preserves this property ([[cor-polynomial-ring-over-a-domain-is-a-domain]]), and localization is the fraction construction of [[def-multiplicative-subset-and-localisation]]. Localizing $\mathbb Z[t]$ or $\mathbb Z[t,q]$ at powers of the variables gives the Laurent domains $\mathbb Z[t^{\pm1}]$ and $\Lambda$: the denominators are nonzero monomials, so clearing them preserves both equality and nonzero products.

## Proof

1.1 *The exact denominator-removal calculation.* Put $R=\mathbb Z[t^{\pm1}]$ and $\Lambda=R[q^{\pm1}]$, both domains by [F4]. Evaluation $q\mapsto1$ has kernel $(1-q)$: clear negative $q$ powers and write each $q^r-1$ as $(q-1)(1+\cdots+q^{r-1})$. Suppose $(1-q)c=A\in\Lambda$ and $Fc=B\in\Lambda$, where $F(1,t)\ne0$. Then $AF=B(1-q)$, and evaluation gives $A(1,t)F(1,t)=0$, forcing $A(1,t)=0$. Therefore $A=(1-q)C$ with $C\in\Lambda$, and cancellation gives $c=C\in\Lambda$. This applies to $F=(1+qt)(1-t)$ and to $F=1+qt$, whose evaluated values are $(1+t)(1-t)$ and $1+t$, both nonzero. No UFD assertion or parameter specialization of the representation is required. [F4, algebra]

2.1 *The ranks below three.* For $n=1$ there are no coefficients; the declared absolute rank calculation and localization injection give $H_2=0$. For $n=2$ only $c_{1,2}$ occurs. By [F3] its pairing is a unit times $(1-q)^2(1+qt)(1-t)c_{1,2}$. Divisibility of the dual class by $(1-q)^2$ in [F1], together with sesquilinearity, gives $(1+qt)(1-t)c_{1,2}\in\Lambda$, since $1-q^{-1}$ is a unit multiple of $1-q$. Divisibility in [F2] gives $(1-q)c_{1,2}\in\Lambda$, since conjugating any of the three factors changes it only by a unit. Step 1.1 therefore gives $c_{1,2}\in\Lambda$. [F1, F2, F3, given, step 1.1, algebra]

2.2 Reduction to $n=3$ and to a single coefficient. Assume $n\ge4$ and the statement known for $n-1$ punctures. For $i\le n-2$ use the pairing with $x_{i,n}$ and [F1]: since $x_{i,n}$ is divisible by $(1-q)^2$, sesquilinearity gives $\langle v,x_{i,n}\rangle\in(1-q^{-1})^2\Lambda$, and by [F3] $(1-q)^2c_{i,n}\in(q-1)^2\Lambda$, so $c_{i,n}\in\Lambda$. For $i=n-1$, [F1] and [F2] give $(1+qt)(1-t)c_{n-1,n}\in\Lambda$ and $(1-q)c_{n-1,n}\in\Lambda$, so $c_{n-1,n}\in\Lambda$ by step 1.1. Subtracting the finitely many terms $c_{i,n}v_{i,n}$ leaves an integral class supported in the smaller configuration, which by [[lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion]] already lies in the image of $H_2(\widetilde C_{n-1};\mathbb Z)$; induction on $n$ reduces the statement to $n=3$. [F1, F2, F3, step 1.1, algebra]

3.1 The case $n=3$. By [F3] and [F1], $(1+qt)(1-t)c_{2,3}\in\Lambda$; by [F3] and [F2], $(1-q)c_{2,3}\in\Lambda$; step 1.1 gives $c_{2,3}\in\Lambda$. The reflected real-puncture picture gives the identical argument at the first puncture for $c_{1,2}$: reflection interchanges the two adjacent classes and inverts the deck variables, an automorphism of $\Lambda$ preserving the denominator-removal calculation. Thus $c_{1,2}\in\Lambda$. Then $v'=v-c_{1,2}v_{1,2}-c_{2,3}v_{2,3}=c_{1,3}v_{1,3}$ is integral, so it remains to show $c_{1,3}\in\Lambda$ from $\langle v',\sigma_2x_{2,3}\rangle=(1-t)(1-q)^2(1+qt)c_{1,3}$ and $\langle v',x_{1,3}\rangle=(1-q)^2(1+qt)c_{1,3}$ ([F3]). Since $\sigma_2x_{2,3}$ is a multiple of $(1-t)(1-q)(1+qt)$, the first pairing lies in $(1-t)(1-q^{-1})(1+qt)\Lambda$, hence $(1-q)c_{1,3}\in\Lambda$. The second pairing lies in $(1-q^{-1})^2\Lambda$, hence $(1+qt)c_{1,3}\in\Lambda$. Step 1.1 with $F=1+qt$ gives $c_{1,3}\in\Lambda$. [F1, F2, F3, step 1.1, step 2.2, algebra]

4.1 Spanning. The classes $v_{i,j}$ are independent over $K=\mathbb Q(q,t)$ by the triangular pairing matrix with Laurent-unit diagonal of [[lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors]], and the field kernel of the cellular differential has dimension $\binom n2$ by [[lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank]]; hence they form a $K$-basis of $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$. Every integral class $v$ is therefore a $K$-linear combination $\sum c_{i,j}v_{i,j}$ with $c_{i,j}\in K$, and steps 2.1, 2.2 and 3.1 show that all coefficients lie in $\Lambda$. Thus the closed surfaces $v_{i,j}$ span $H_2(\widetilde C;\mathbb Z)$ over $\Lambda$, as claimed. [step 2.1, step 2.2, step 3.1, algebra] ∎
