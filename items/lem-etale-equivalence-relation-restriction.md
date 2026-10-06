---
id: lem-etale-equivalence-relation-restriction
kind: lemma
title: "Restriction of an etale equivalence relation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - def-etale-morphism-schemes
  - def-flat-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-fibre-product-schemes-universal-property
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Section 65.10, Lemma 65.10.1"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 65.10.1 (tag 02WT), restriction of an etale equivalence relation along an etale morphism"
---

## Statement

Let $j\colon R\to U\times_SU$ be an etale equivalence relation on $U$ over $S$
([[def-groupoid-in-schemes-and-etale-equivalence-relation]]) and let
$g\colon U'\to U$ be a morphism of $S$-schemes. Form the restriction
$R'=R|_{U'}=R\times_{U\times_SU}(U'\times_SU')$ with source and target the
standard projections
([[def-fibre-product-schemes-universal-property]]). Then
$j'\colon R'\to U'\times_SU'$ is an equivalence relation on $U'$ over $S$; if
$g$ is etale ([[def-etale-morphism-schemes]]), then $j'$ is an etale
equivalence relation. When $g$ is etale, each restricted source or target is a
composition of a base change of $g$ with a base change of $s$ or $t$, hence
etale.

## Facts & Assumptions

**Given:** $S$, an etale equivalence relation $(U,R,s,t,c,e,i)$ on $U$ over $S$ with $j=(t,s)\colon R\to U\times_SU$ a monomorphism, a morphism $g\colon U'\to U$ of $S$-schemes, and the restriction $R'=R\times_{U\times_SU}(U'\times_SU')$ with projections $\mathrm{pr}_R$ and $\mathrm{pr}_{U'\times U'}$.

[F1] The restriction $R'$ carries the base-changed groupoid structure $(U',R',s',t',c',e',i')$ with $j'=(t',s')=\mathrm{pr}_{U'\times U'}$, and $j'$ is a monomorphism whenever $j$ is, so $R'$ is an equivalence relation on $U'$; restricting the etale property is the additional clause at issue ([[def-groupoid-in-schemes-and-etale-equivalence-relation]], [[def-fibre-product-schemes-universal-property]]).

[F2] Étale morphisms are stable under base change and under composition: if $f:X\to S$ is étale and $S'\to S$ is arbitrary, then $X\times_SS'\to S'$ is étale; if $f:X\to S$ and $h:Y\to X$ are étale, then $fh$ is étale ([[def-etale-morphism-schemes]], [[def-flat-morphism-schemes]], [[def-locally-finite-presentation-morphism]]); the needed choice-free stability is verified in step 2.1.

[F3] A monomorphism is stable under base change in any category with fibre products: if $j:X\to Y$ is a monomorphism and $Y'\to Y$ is arbitrary, then $X\times_YY'\to Y'$ is a monomorphism ([[def-fibre-product-schemes-universal-property]]).



## Proof

1.1 $R'$ is an equivalence relation. Since $j$ is a monomorphism, so is its base change $j'=\mathrm{pr}_{U'\times U'}$ by [F3]; concretely, two maps $a,b\colon Z\to R'$ with $j'a=j'b$ have equal composites to $U'\times_SU'$ and, after applying $j$ to the $R$-coordinates, equal composites to $U\times_SU$, so the two projections of $R'$ agree on $a$ and $b$ and the universal property gives $a=b$. The base-changed groupoid structure of [F1] makes $(U',R',s',t',c',e',i')$ a groupoid in $S$-schemes, and $j'$ is a monomorphism, so it is a relation and hence an equivalence relation on $U'$ over $S$. This holds for arbitrary $g$ and is vacuous when $U'$ or $R'$ is empty. [F1, F3]

1.2 Description of the restricted source. Assume now that $g$ is étale. Put $A=R\times_{t,U,g}U'$ and $B=R\times_{s,U,g}U'$, fibre products formed with the structural projections $a\colon A\to R$, $a'\colon A\to U'$ and $b\colon B\to R$, $b'\colon B\to U'$. The universal property of the fibres identifies $R'$ with $A\times_RB$: an object of the latter is a pair of pairs $(r,u'_1)\in A$, $(r,u'_2)\in B$ with the same $R$-coordinate, which is exactly a triple $(r,u'_1,u'_2)$ with $t(r)=g(u'_1)$ and $s(r)=g(u'_2)$, i.e. an object of $R'$; under this identification $t'$ is $a'\circ\mathrm{pr}_A$ and $s'$ is $b'\circ\mathrm{pr}_B$. [F1]

2.1 The two projections are étale, with choice-free stability. Flatness composes on stalks, because tensoring successively is tensoring with the composite algebra, and is preserved by base change: tensor associativity identifies tensoring a module injection with a scalar-extended flat algebra with tensoring the underlying injection with the original flat algebra. This applies at each chosen point after localizing at its two images, so it uses no simultaneous chart choices. Local finite presentation composes and base-changes by substituting finite polynomial presentations and their finitely many relations. For etale morphisms, after any residue-field extension the fibre local rings are zero-dimensional regular local rings, hence fields, with finite separable residue extensions; finiteness follows from the finite-type fibre and separability from geometric reducedness. On further base change these are localizations of tensor products of finite separable fields with fields, which are finite products of fields (factor a separable minimal polynomial); hence they stay regular of dimension zero. Under composition the local fibre fields form finite separable towers, so the same property holds. These pointwise arguments prove the stability in [F2] from the defining flat/lfp/geometric-fibre conditions, without the AC-qualified published stability lemma. Now  The maps $a\colon A\to R$ and $b\colon B\to R$ are base changes of the étale $g$ (along $t$ and along $s$ respectively), and the maps $a'\colon A\to U'$ and $b'\colon B\to U'$ are base changes of the étale $t$ and $s$ (along $g$); by [F2] all four are étale. The projection $\mathrm{pr}_A\colon A\times_RB\to A$ is the base change of $b\colon B\to R$ along $a$, hence étale by [F2]; symmetrically $\mathrm{pr}_B\colon A\times_RB\to B$ is the base change of $a$, hence étale. [F2, step 1.2]

3.1 Conclusion. By step 1.2 and step 2.1, $t'=a'\circ\mathrm{pr}_A$ is a composite of étale morphisms, hence étale, and $s'=b'\circ\mathrm{pr}_B$ is a composite of étale morphisms, hence étale. Together with step 1.1 this shows that $R'$ is an equivalence relation on $U'$ over $S$ which is etale when $g$ is étale, and the displayed factorizations exhibit the asserted composition of a base change of $g$ with a base change of $s$ or $t$. [F2, step 1.1, step 1.2, step 2.1] ∎ 