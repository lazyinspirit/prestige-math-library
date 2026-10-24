---
id: thm-real-bott-periodicity-from-rank-eight-clifford-thom
kind: theorem
title: Real Bott periodicity from the rank-eight Clifford–Thom map
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 14
deps:
- thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp
- lem-reduced-relative-ko-suspension-exactness-and-product
- def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with
      K-Theory and Reality reprint
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
  - title: Max Karoubi, Lectures on K-theory, ICTP Lecture Notes (2004)
    url: https://webusers.imj-prg.fr/~max.karoubi/Publications/71.pdf
  - title: Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf
      bundles and Morse theory (2021)
    url: https://arxiv.org/pdf/2011.14368
proof_strategy: direct
---

## Statement

Assume AC. Let $\beta\in\widetilde{KO}^0(S^8)=KO^{-8}(\mathrm{pt})$ be the volume-positive rank-eight real spinor symbol of the trivial bundle, with the source-minus-target relative-triple convention. For every finite CW pair $(X,A)$, multiplication by this same class is a natural isomorphism $KO^j(X,A)\to KO^{j-8}(X,A)$ in every integer degree. In particular it gives $KO^0(X)\cong\widetilde{KO}^0(X_+\wedge S^8)$. These maps respect external products; positive degrees are defined by the resulting periodic continuation of the bundle theory. No complexification or coefficient table is used.

## Facts & Assumptions

**Given:** AC and finite CW pairs, with nonpositive groups defined by suspension of the reduced bundle theory.

[F1] For a given Spin bundle of positive rank divisible by eight, tensoring real bundles with its volume-graded irreducible spinor followed by the volume-symbol Thom map is an isomorphism; its map is natural and compatible with tensor symbols ([[thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp]]).

[F2] Reduced and relative groups, suspension, natural exterior products of relative symbols, and their associativity and suspension interchange signs are established in [[lem-reduced-relative-ko-suspension-exactness-and-product]].



**Proof technique:** trivial rank-eight Thom map and split kernels.

## Proof

**Proof technique:** direct construction.

1.1 Give the trivial oriented bundle $\mathbb R_X^8$ its framed Spin lift and let $\Sigma$ be its real irreducible Clifford module, graded by the volume involution. For a real bundle $E\to X$, its spinor module has volume eigenspaces $E\otimes\Sigma^\pm$ and symbol $1_E\otimes c(v)$. Thus the actual isomorphism [F1] is precisely $B_X:x\mapsto x\boxtimes\beta$ into $\widetilde{KO}^0(X_+\wedge S^8)$ by [F2]. This fixes the generator sign before any coefficient computation. Pullback commutes with the displayed eigenspaces and symbol, so $B_X$ is natural, and group completion gives the assertion for virtual bundles. [F1, F2, construct, algebra]


2.1 For based finite CW $Y$, basepoint evaluation splits $KO^0(Y)$ as $\widetilde{KO}^0(Y)\oplus KO^0(\mathrm{pt})$. Target restriction to the basepoint sphere $S^8$ is also split, by $Y\to\mathrm{pt}$. Naturality in step 1.1 gives a commuting square of these split projections with vertical maps $B_Y$ and $B_{\mathrm{pt}}$, both isomorphisms. The induced map on kernels is an isomorphism: injectivity is inherited, and a lift of an element of the target kernel has zero basepoint restriction because $B_{\mathrm{pt}}$ is injective. By the split quotient identification [F2], this is $\widetilde{KO}^0(Y)\cong\widetilde{KO}^0(Y\wedge S^8)$, with map again multiplication by $\beta$. [F2, step 1.1, algebra]


3.1 Apply step 2.1 to $Y=X/A$, using $X_+$ when $A$ is empty. It gives $KO^0(X,A)\cong KO^{-8}(X,A)$. Applying it to $S^k\wedge Y$ for $k\ge0$ gives $KO^{-k}(X,A)\cong KO^{-k-8}(X,A)$. Smash associativity and the suspension product convention of [F2] identify every one of these maps with multiplication by the same $\beta$. All spaces used remain finite CW; no arbitrary-base continuity assertion is needed. [F2, step 2.1, construct]


4.1 For any integer $j$, define its periodic continuation by the groups $KO^{j-8t}(X,A)$ for sufficiently large integers $t$ with $j-8t\le0$, identifying successive groups by the isomorphisms just proved. Formally this is the direct limit under multiplication by $\beta$ as $t$ increases. Since every transition is an isomorphism, each term maps isomorphically to the limit; all choices are canonically identified by finite composites of these maps. In nonpositive degrees this recovers the original groups. The same natural maps define every pair map and connecting map in positive degrees. Shifting $t$ proves the asserted periodicity for all $j$, rather than presupposing positive-degree groups or their periodicity. [step 3.1, construct, algebra]


5.1 Exterior products of the relative symbols are associative by [F2]. Therefore $(xy)\beta=x(y\beta)$ and $(x\beta)(y\beta)=(xy)\beta^2$ after the canonical rearrangement of sphere factors. The interchange sign involving the Bott sphere is $(-1)^{8k}=1$ in every suspended degree $k$. Consequently products pass to the continuation of step 4.1 independent of representatives, and $\beta$ becomes invertible there: its inverse is the unique coefficient sent to the unit by its isomorphism. This proves natural multiplicative periodicity on finite pairs and all degrees. The only choice assumption is that already used in the real Thom and relative bundle constructions [F1]–[F2]. [F1, F2, step 4.1, algebra] ∎
