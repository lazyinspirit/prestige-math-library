---
id: thm-quadratic-local-norm-group-has-index-two
kind: theorem
title: A quadratic local norm group has index two
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-order-two-herbrand-quotients-multiply]
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Class Field Theory, Chapter III, section 2, Lemmas 2.4 and 2.5
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

Let $K$ be a finite extension of $\mathbb Q_p$ and $L/K$ a quadratic field extension, equipped with their usual complete nonarchimedean valuations. Then $K^\times/N_{L/K}(L^\times)$ has order $2$. This assertion does not require any global reciprocity or local class field theory theorem.

## Statement references

[[lem-order-two-herbrand-quotients-multiply]]

## Facts & Assumptions

**Given:** The fields in the statement, their rings of integers $\mathcal O_K,\mathcal O_L$, and the nontrivial automorphism $\sigma$ of $L/K$. Write $U_L=\mathcal O_L^\times$. The valuation $v_p$ is normalized by $v_p(p)=1$ and extended to $L$.

[F1] For an abelian group with an involution, the quotient $h=|\ker(\sigma-1)/\operatorname{im}(1+\sigma)|/|\ker(1+\sigma)/\operatorname{im}(\sigma-1)|$ multiplies in short exact sequences when defined; a finite group has quotient $1$, and an equivariant finite-index inclusion preserves $h$. The same statements apply in multiplicative notation, with $1+\sigma$ interpreted as the norm. [[lem-order-two-herbrand-quotients-multiply]]

## Proof

1.1 The ring of integers of any finite extension $M/\mathbb Q_p$ is a full $\mathbb Z_p$-lattice in $M$. To see the lattice assertion directly, choose a $\mathbb Q_p$-basis $u_1,\ldots,u_d$ made integral by multiplying its entries by sufficiently high powers of $p$, and put $A=\sum\mathbb Z_pu_i$. Integral elements are closed under products, and their field traces belong to $\mathbb Z_p$: the trace is integral over $\mathbb Z_p$ and belongs to $\mathbb Q_p$, whose integral elements are exactly $\mathbb Z_p$. The trace pairing is nondegenerate, since for $x\ne0$ one may take $y=x^{-1}$ and obtain $\operatorname{Tr}(xy)=d\ne0$. Its dual lattice $A^*=\{x:\operatorname{Tr}(xA)\subseteq\mathbb Z_p\}$ is therefore a full lattice, and $A\subseteq\mathcal O_M\subseteq A^*$. The quotient $A^*/A$ is finite, proving the assertion. In particular full integral lattices in the same finite-dimensional space are commensurable, and quotients modulo a nonzero power of $p$ are finite. [given, construct, algebra]

2.1 Choose a nonzero $\delta\in\mathcal O_L$ with $\sigma\delta=-\delta$: take a nonzero difference $z-\sigma z$ and scale it by a power of $p$ to be integral. Then $L=K\oplus K\delta$, and $A=\mathcal O_K\oplus\mathcal O_K\delta$ is a stable finite-index sublattice of $\mathcal O_L$ by step 1.1. On the first summand $\sigma=1$, so $T_0=\mathcal O_K/2\mathcal O_K$ and $T_1=0$. On the second summand $\sigma=-1$, so $T_0=0$ and $T_1\cong\mathcal O_K/2\mathcal O_K$. These quotients are finite by step 1.1. Their orders cancel, giving $h(A)=1$ and hence $h(\mathcal O_L)=1$ by [F1]. Multiplication by $p^n$ is an equivariant isomorphism, so $h(p^n\mathcal O_L)=1$ as well. [F1, step 1.1, construct, algebra]

3.1 For $n\ge2$, the series $$\log(1+x)=\sum_{j\ge1}(-1)^{j+1}x^j/j,\qquad \exp(x)=\sum_{j\ge0}x^j/j!$$ define inverse equivariant isomorphisms between $1+p^n\mathcal O_L$ under multiplication and $p^n\mathcal O_L$ under addition. Indeed $v_p(x^j/j)\ge nj-v_p(j)$ and $v_p(x^j/j!)\ge nj-j/(p-1)$ tend to infinity, and every term after the linear term has valuation greater than or equal to $n$ (strictly greater for the nonlinear terms). Thus both series converge in the indicated sets. Their inverse and multiplication identities follow from the formal power-series identities by taking convergent partial sums; the rational coefficients make them commute with $\sigma$. By step 1.1, $U_L/(1+p^n\mathcal O_L)$ is finite, since reduction embeds this quotient into the units of the finite ring $\mathcal O_L/p^n\mathcal O_L$. Applying [F1] and step 2.1 therefore gives $h(U_L)=1$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 The normalized integer-valued valuation gives an equivariant exact sequence $$1\longrightarrow U_L\longrightarrow L^\times\overset{v_L}{\longrightarrow}\mathbb Z\longrightarrow0,$$ where $\sigma$ acts trivially on $\mathbb Z$. For the latter module $T_0=\mathbb Z/2\mathbb Z$ and $T_1=0$, so [F1] and step 3.1 yield $h(L^\times)=2$. Finally $T_1(L^\times)$ is trivial by the following explicit calculation. If $z\sigma z=1$ and $z\ne-1$, put $y=1+z$; then $y/\sigma y=z$. If $z=-1$, take $y=\delta$ from step 2.1. Thus every norm-one element is a quotient $y/\sigma y$, exactly the multiplicative form of an element in $\operatorname{im}(\sigma-1)$. The fixed group is $K^\times$, so $T_0(L^\times)=K^\times/N_{L/K}(L^\times)$; its order is $h(L^\times)=2$, as asserted. [F1, step 2.1, step 3.1, construct, algebra] ∎

## Remarks

Only the elementary order-two quotient calculation, integral lattices, and convergent power series enter this proof. No existence theorem for class fields or global norm theorem is used.
