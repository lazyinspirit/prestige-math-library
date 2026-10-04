---
id: lem-av7-proper-quasi-finite-factor-is-finite
kind: lemma
title: Proper quasi-finite classical morphisms are finite
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
proof_strategy: direct
deps: [def-axiom-of-choice, def-classical-algebraic-prevariety-regular-maps-and-varieties, lem-av7-classical-zmt-relative-integral-closure-neighbourhoods, thm-classical-projective-projection-closed]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: J. S. Milne, Algebraic Geometry, Proposition 8.54
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: The Stacks Project, Lemma 37.44.1
      url: https://stacks.math.columbia.edu/tag/02LS
---

## Statement

Assume the Axiom of Choice and let $k$ be algebraically closed. A proper quasi-finite morphism $f:X\to Y$ of classical varieties is finite. Here proper means separated, of finite type, and universally closed; quasi-finite means of finite type with finite fibres. This assertion uses the full separated quasi-finite factorization, not merely its affine-source case. In particular a classical projective morphism with finite fibres is finite.

## Facts & Assumptions

**Given:** AC and the proper quasi-finite morphism of the Statement.

[F1] The separated quasi-finite classical Zariski Main theorem gives $f=g\circ j$ with $j:X\hookrightarrow Z$ an open immersion and $g:Z\to Y$ finite ([[lem-av7-classical-zmt-relative-integral-closure-neighbourhoods]]).

[F2] Classical varieties are separated prevarieties with finite affine atlases ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]). AC is the choice-function axiom ([[def-axiom-of-choice]]).

[F3] Projection from $Y\times\mathbf P^N_k$ to any classical variety $Y$ is closed ([[thm-classical-projective-projection-closed]]).

## Proof

1.1 Apply [F1], retaining separatedness and finite type from the properness assumption. The finite map $g$ is separated: over $\operatorname{Spec}A\subseteq Y$, write its inverse image as $\operatorname{Spec}B$, where $B$ is a finite $A$-algebra; its relative diagonal is closed because the multiplication map $B\otimes_A B\twoheadrightarrow B$ is surjective. Thus the graph of $j$ is closed in $X\times_Y Z$, as it is the inverse image of this diagonal under $(x,z)\mapsto(j(x),z)$. [given, F1, F2, algebra]

2.1 The projection $X\times_Y Z\to Z$ is a base change of the universally closed map $f$, so the image of the graph is closed in $Z$. This image is $j(X)$. It is open by [F1], hence open and closed. The open immersion identifies $X$ with this subvariety; its inclusion is also a closed immersion. On any affine open $V=\operatorname{Spec}A$ of $Y$, $g^{-1}(V)=\operatorname{Spec}B$ with $B$ finite over $A$. The open-and-closed subset $j(X)\cap g^{-1}(V)$ is affine: its characteristic function is locally the regular constants $1$ and $0$, which glue to an idempotent $e\in B$; the subset is $D(e)=V(1-e)$ and has coordinate ring $B/(1-e)$. This is a quotient of a finite $A$-module, hence finite over $A$. Therefore $f$ is finite on every affine target open, which proves the assertion. [given, F1, F2, step 1.1, algebra, construct] 

3.1 For the stated projective case, write the morphism as a closed subvariety of $Y\times\mathbf P^N_k$ followed by projection. After any classical base change $Y'\to Y$ this remains a closed subvariety of $Y'\times\mathbf P^N_k$, so [F3] makes its projection closed. The morphism is separated (its relative diagonal is given by the projective cross-product equations) and of finite type (its finite standard affine charts have finite-type coordinate rings). With finite fibres it therefore satisfies all the proper quasi-finite hypotheses of steps 1.1–2.1 and is finite. This proves Chevalley's projective finite-fibre case without assuming algebraic closure of the image model or an affine source. [F2, F3, step 1.1, step 2.1, algebra] ∎
