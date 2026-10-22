---
id: lem-weighted-moduli-boundary-counts-give-floer-chain-identities
kind: lemma
title: "Weighted moduli boundary counts give chain identities"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-boundary-of-a-compact-one-manifold-has-even-cardinality
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "§§2.1 and 3, colored curvature and weighted counts; this item proves only the algebraic assembly from explicitly supplied compact moduli and exact boundary bijections."
---

## Statement

Assume countable choice and put $R=\mathbb F_2[U,V]$. The following principle applies to free $R$-modules with specified bases and $R$-linear maps whose matrix coefficients count finite sets, each point carrying a weight $(a,b)\in\mathbb N^2$ and contributing $U^aV^b$. Require finite support for every input basis vector, so these are polynomial maps, not unspecified infinite sums. Suppose that for each input, output and total weight there is an actual compact smooth one-manifold whose boundary is in a specified weight-preserving bijection with the disjoint union of the products of counted sets occurring in an asserted identity. Product weights are the sums of the two factor weights. Additional boundary points are allowed only when equipped with a weight-preserving fixed-point-free involution. Then that identity, with every displayed term added over $\mathbb F_2$, holds coefficientwise.

In particular the principle proves $d^2=0$ when the unpaired boundary is exactly the twice-broken count defining $d^2$; proves $d_BF+Fd_A=0$ when the unpaired boundary is exactly those two broken types; and proves $F_1+F_0=d_BH+Hd_A$ when the boundary is exactly those four types. With three complexes it proves $F_{12}+F_2F_1=d_CH+Hd_A$ under the corresponding four-type boundary description. These are, respectively, the square-zero, chain-map, chain-homotopy and composition-up-to-homotopy identities. The statement assumes the actual compact manifolds, finiteness and exact boundary bijections; it supplies no analytic regularity, compactification, gluing, exhaustion or naturality theorem.

## Statement references

[[lem-boundary-of-a-compact-one-manifold-has-even-cardinality|Parity of the actual compact boundary]]

[[def-countable-choice|Countable choice]]

## Facts & Assumptions

**Given:** The finite weighted counted sets, free polynomial modules, actual compact one-manifolds and specified exact boundary identifications in the Statement.

[A1] [[def-countable-choice]] is used only through the one-manifold parity supplier. The coefficient calculations themselves use finite sums and products.

[F1] [[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]: under countable choice the boundary of a compact smooth one-manifold is finite and even, including the empty case.

## Proof

1.1 For an input generator $x$ and output generator $y$, let $N_T(x,y;a,b)$ be the finite set counted by a map $T$ at weight $(a,b)$. Its matrix coefficient is $T_{yx}=\sum_{a,b}\#_2N_T(x,y;a,b)U^aV^b$. The finite-support hypothesis says that for fixed $x$ only finitely many of these sets, including all outputs $y$, are nonempty. Thus $T(x)$ is an element of the free polynomial module. An $R$-linear extension is unique. Composing two such maps again gives a finite sum on each generator. [given, construct]

2.1 The coefficient of $U^aV^b z$ in $T_2T_1(x)$ is the mod-two cardinality of the disjoint union, over intermediate generators $y$ and weight splittings $a_1+a_2=a$, $b_1+b_2=b$, of $N_{T_1}(x,y;a_1,b_1)\times N_{T_2}(y,z;a_2,b_2)$. This follows by distributing the two finite polynomial sums from step 1.1; cardinalities of Cartesian products multiply, and their monomials multiply by adding exponents. There is no rearrangement of an infinite sum. [given, step 1.1, algebra]

3.1 Fix $x,z,a,b$ and the supplied compact one-manifold for this coefficient of the asserted identity. By [F1] its boundary has even cardinality. The additional paired points have even cardinality as well: each orbit of their specified fixed-point-free involution has exactly two points and retains the same weight. Remove their contribution modulo two. The remaining boundary is in the stipulated bijection with exactly the counted sets or products appearing in that coefficient of the identity. Steps 1.1–2.1 identify its parity with the sum of those coefficients. It is zero. Since this holds for each $x,z,a,b$, every coefficient of the asserted polynomial identity vanishes. [given, A1, F1, step 1.1, step 2.1, algebra]

4.1 Apply step 3.1 first with the single broken type $d\circ d$, then with the two types $d_B\circ F$ and $F\circ d_A$. It gives $d^2=0$ and $d_BF+Fd_A=0$, respectively. In the first application no square-zero property was assumed beforehand. In the second, when $d_A,d_B$ are the supplied complex differentials, this is precisely the chain-map equation. For a one-parameter homotopy with the stipulated endpoint and broken-boundary bijections, step 3.1 gives $F_1+F_0+d_BH+Hd_A=0$. Characteristic two turns this into the displayed chain-homotopy identity. Replacing the two endpoint types by $F_{12}$ and $F_2F_1$ gives the composition-up-to-homotopy formula in the same way, using step 2.1 for the latter product. [given, step 2.1, step 3.1, algebra]

5.1 Every conclusion used the entire specified boundary bijection; an omitted analytic end cannot be declared paired by this lemma. In particular two degeneration points carrying the same monomial cancel if their actual bijection is supplied, whereas two unrelated boundary classes need not cancel. The empty counted sets and empty compact manifolds contribute zero, and weights with $a=0$ or $b=0$ obey the same product rule. This completes the coefficientwise principle and all four specializations under exactly the stated assumptions. [given, A1, step 3.1, step 4.1] ∎
