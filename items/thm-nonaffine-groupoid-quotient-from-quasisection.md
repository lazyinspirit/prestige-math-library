---
id: thm-nonaffine-groupoid-quotient-from-quasisection
kind: theorem
title: "A flat equivalence relation with a suitable quasi-section has a scheme quotient"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-nonaffine-finite-relation-quotient-with-affine-orbits, lem-nonaffine-fppf-descent-of-scheme-morphisms, thm-faithfully-flat-descent-of-flatness]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3, Expose V, Lemma 6.1, pp.270-272"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp5-13oct24.pdf
    - title: "Milne, Algebraic Groups (2022), Appendix B.32"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Let $R\rightrightarrows X$ be a flat finite-type equivalence-relation groupoid on a separated finite-type $k$-scheme. Suppose a locally closed $U\subset X$ satisfies: $V=s^{-1}(U)\xrightarrow{t}X$ is finite locally free and onto, and every orbit of the induced relation $R_U\rightrightarrows U$ lies in an affine open of $U$. Then $X/R$ is represented by a finite-type scheme $Y$; the quotient $q:X\to Y$ is faithfully flat of finite presentation, and $R=X\times_YX$.

## Facts & Assumptions

[F1] Finite locally free equivalence relations with affine-contained orbits have scheme quotients with finite locally free quotient maps. ([[thm-nonaffine-finite-relation-quotient-with-affine-orbits]])

[F2] Compatible scheme morphisms descend along quasi-compact fppf covers; flatness descends under faithful flat base change. ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[thm-faithfully-flat-descent-of-flatness]])

## Proof

**Given:** AC, $R,X,U,V$ satisfying the statement, with $s$ source and $t$ target.

1.1 The source and target projections of $R_U$ are finite locally free: its target projection is the base change of $V\to X$ by $U\subset X$, and inversion exchanges the two. By [F1] it has a scheme quotient $Y$, with $U\to Y$ finite locally free and onto. The morphism $V\xrightarrow{s}U\to Y$ has equal pullbacks along $V\times_XV$: two arrows with equal target determine, by composition and inverse, a relation arrow between their source points in $U$. Therefore [F2] descends it to a morphism $q:X\to Y$. [F1, F2, given, construct]

2.1 As fppf sheaves, the quotient of $X$ by $R$ equals that of $U$ by $R_U$. Indeed every point of $X$ lifts locally along $V\to X$ and is then related to its source point in $U$, proving local surjectivity of the latter quotient into the former. Two points of $U$ are identified exactly when related by $R_U$, by restriction of the original equivalence relation. Thus [F2] gives $Y\cong X/R$. Since $R$ is an equivalence relation, its arrows are unique when source and target are specified, so this equality of sheaves identifies $R$ with the representable kernel pair $X\times_YX$. In particular $X\times_YU\cong V$, by the arrow/source description. [F1, F2, step 1.1, algebra]

3.1 Base change of $q$ by the finite locally free cover $U\to Y$ is $V\to U$, which is flat as a base change of the original relation's source map. Thus [F2] makes $q$ flat. It is onto since the composite $U\to X\to Y$ is onto, and is of finite presentation: both $X$ and $Y$ are finite-type $k$-schemes, so any $k$-morphism between them is finite type, and over their Noetherian affine charts finite type implies finite presentation. Therefore $q$ is faithfully flat of finite presentation with the asserted kernel pair and quotient. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, step 2.1, algebra] ∎
