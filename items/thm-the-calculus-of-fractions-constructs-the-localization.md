---
id: "thm-the-calculus-of-fractions-constructs-the-localization"
kind: "theorem"
title: "The calculus of fractions constructs the localization"
deps: ["def-localization-of-a-category-at-a-class-of-morphisms", "lem-composition-of-roofs-is-well-defined"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.3.1–10.3.14, pp. 379–384"
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under the smallness or supplied cofinal-denominator hypothesis of the multiplicative-system definition, roof classes with the preceding composition form a locally small localization $Q:\mathcal C\to S^{-1}\mathcal C$, with $Q(f)=[(1,f)]$. For parallel $f,g:X\to Y$, $Q(f)=Q(g)$ if and only if $fv=gv$ for some $v:W\to X$ in $S$. Every arrow also has a right-roof presentation $Q(t)^{-1}Q(h)$, with $h:X\to V$ and $t:Y\to V$ in $S$.

## Facts & Assumptions

**Given:** Under the smallness or supplied cofinal-denominator hypothesis of the multiplicative-system definition, roof classes with the preceding composition form a locally small localization $Q:\mathcal C\to S^{-1}\mathcal C$, with $Q(f)=[(1,f)]$. For parallel $f,g:X\to Y$, $Q(f)=Q(g)$ if and only if $fv=gv$ for some $v:W\to X$ in $S$. Every arrow also has a right-roof presentation $Q(t)^{-1}Q(h)$, with $h:X\to V$ and $t:Y\to V$ in $S$.

[F1] The roof composition is well defined, associative, and unital ([[lem-composition-of-roofs-is-well-defined]]).

[F2] A localization inverts $S$ and is universal for functors inverting $S$, including descent of natural transformations ([[def-localization-of-a-category-at-a-class-of-morphisms]]).

## Proof

1.1 Composition, associativity and identities are supplied by the preceding lemma. Every roof into a fixed source $X$ refines to one with denominator in the supplied set $S_X$; its possible numerators lie in a set of Hom sets. Taking the quotient of this set by refinement gives a set of arrows from $X$ to $Y$. In a small category the set of all roofs already suffices. This also constructs the empty localization when there are no objects. [F1, given]

1.2 Identity-denominator roofs show $Q(gf)=Q(g)Q(f)$ and preservation of identities. For $s:U\to X$ in $S$, the roof $(s,1_U)$ is inverse to $Q(s)$: the products are the identity at $U$ and the roof $(s,s)$, which refines the identity at $X$. Thus $Q$ inverts $S$. [F1, algebra]

2.1 Let $F$ invert $S$. Set $\overline F(s,f)=F(f)F(s)^{-1}$. For a refinement $sa=tb=r\in S$, both $F(a)=F(s)^{-1}F(r)$ and $F(b)=F(t)^{-1}F(r)$ are invertible, so $fa=gb$ gives equal values. An Ore equality $fa=tb$ gives $F(t)^{-1}F(f)=F(b)F(a)^{-1}$, proving preservation of composition. Every roof is $Q(f)Q(s)^{-1}$, forcing uniqueness. A natural transformation descends on the same objects: naturality for $s$ implies naturality for $Q(s)^{-1}$ and hence for each roof. This proves the stated localization property. [F1, F2, step 1.2, algebra]

3.1 Equality of $(1,f)$ and $(1,g)$ gives refinement legs $a=b=v\in S$ with $fv=gv$; conversely such $v$ is a common refinement. For the dual presentation apply the other Ore axiom to $s:U\to X$ and $f:U\to Y$, obtaining $t:Y\to V$ in $S$ and $h:X\to V$ with $tf=hs$. Then $Q(f)Q(s)^{-1}=Q(t)^{-1}Q(h)$. This describes right roofs in the same category and requires no second smallness assertion. [given, step 1.2, algebra] ∎
