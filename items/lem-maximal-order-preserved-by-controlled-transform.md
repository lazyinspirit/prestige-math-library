---
id: lem-maximal-order-preserved-by-controlled-transform
kind: lemma
title: Controlled transforms preserve maximal order on nonempty transformed schemes
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
- def-ideal-of-derivatives
- def-maximal-order-and-tangent-directions
- def-multiple-test-blowup-and-controlled-transform
- lem-derivative-ideals-have-the-same-support
- lem-derivatives-commute-with-controlled-transform
- lem-controlled-transform-is-well-defined
- lem-regular-sequence-associated-graded-polynomial
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Statement

Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order ([[def-maximal-order-and-tangent-directions]]) and let $C\subseteq\operatorname{supp}(\mathcal I,E,\mu)$ be a regular center with SNC with $E$, with blowup $\sigma\colon X'\to X$ ([[def-multiple-test-blowup-and-controlled-transform]]).
Then the controlled transform has order at most $\mu$ at every point of $X'$. If $X'\ne\varnothing$, it is nonzero and hence again of maximal order. If $X'=\varnothing$ (possible for $\mu=0$ and a whole-space center), the order bound is vacuous; the definition requiring a nonzero ideal does not apply.

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,E,\mu)$ of maximal order, a regular center $C\subseteq\operatorname{supp}(\mathcal I,E,\mu)$ with SNC with $E$, and the blowup $\sigma\colon X'\to X$.

[F1] [[def-maximal-order-and-tangent-directions]]: maximal order means $\operatorname{ord}_x(\mathcal I)\le\mu$ at every point; since $C\subseteq\operatorname{supp}(\mathcal I,\mu)$, equality holds at every $x\in C$. The derivative characterization is restricted to characteristic zero or the safe range $p>\mu$ and is not used here.

[F2] [[def-multiple-test-blowup-and-controlled-transform]]: a test blow-up has a regular center contained in the support, is an isomorphism off that center, and has controlled transform $\mathcal I(D)^{-\mu}\sigma^*\mathcal I$, locally $y^{-\mu}\sigma^*(\mathcal I)$ for an exceptional equation $y$.

## Proof

1.1 If $\mu=0$, maximal order forces $\mathcal I=\mathcal O_X$, so the controlled transform is $\mathcal O_{X'}$, of order zero at every point. On a nonempty $X'$ it is nonzero; on the empty scheme the asserted order bound is vacuous. Now assume $\mu\ge1$. Off the exceptional divisor the blow-up is an isomorphism, so the controlled transform has order at most $\mu$ there. It remains to check points over $C$. [F1, F2]

2.1 Fix $c\in C$ and write the regular center locally as $J=\mathcal I_C=(x_1,\ldots,x_q)$ in regular coordinates transverse to $C$, with additional coordinates along $C$. Since every point of $C$ has $\operatorname{ord}_c(\mathcal I)=\mu$, $\mathcal I\subseteq J^\mu$ near $C$ by [[lem-controlled-transform-is-well-defined]]. The normal associated-graded ring is a polynomial ring over $\mathcal O_C$, by [[lem-regular-sequence-associated-graded-polynomial]]. At each $c$, equality of the order gives some $f\in\mathcal I$ whose initial transverse form $F\in\operatorname{Sym}^\mu(J/J^2)\otimes\kappa(c)$ is nonzero. In any blow-up chart over $c$ with exceptional equation $y=x_j$, the restriction of $y^{-\mu}\sigma^*(f)$ to the exceptional fiber is the nonzero dehomogenization of $F$, a polynomial of degree at most $\mu$. Its order at any point of that fiber is at most $\mu$. Indeed, for a nonzero polynomial $P$ of total degree $d\le\mu$, choose a nonzero top-degree monomial $cZ^\alpha$. The Hasse derivative of index $\alpha$ is the nonzero constant $c$. Hasse derivatives extend to the local polynomial ring by substituting $Z\mapsto Z+T$ and inverting denominators as formal series. Their higher Leibniz rule sends $\mathfrak m^N$ into $\mathfrak m^{N-|\alpha|}$, because at most $|\alpha|$ factors of a product can receive positive derivative index. Thus $P\in\mathfrak m^{d+1}$ would force the unit $c$ into $\mathfrak m$, a contradiction. This establishes the degree bound at every prime and in every characteristic; the order of the full local section is no greater than that of its restriction. Thus the controlled transform has order at most $\mu$ at every point over $C$, and is nonzero when $X'\ne\varnothing$, since the zero ideal at any point has infinite order. This proves the stated maximal-order conclusion with its empty-scheme qualification. [F1, F2, step 1.1] ∎
