---
id: "thm-affine-fibre-product-tensor-ring"
kind: "theorem"
title: "Affine fibre products are spectra of tensor products"
status: published
origin: "pipeline"
deps: ["def-fibre-product-schemes-universal-property", "thm-morphisms-into-affine-scheme-global-sections", "thm-coproduct-property-of-tensor-products-of-commutative-algebras"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.1.B; Stacks 26.17.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes,
$$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$$
The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $f:X\to S$ and $g:Y\to S$ be morphisms of schemes. A **fibre product** is a scheme $P$, with projections $p:P\to X$ and $q:P\to Y$, such that $fp=gq$ and, for every scheme $T$ and morphisms $a:T\to X$, $b:T\to Y$ with $fa=gb$, there is exactly one $h:T\to P$ satisfying $ph=a$ and $qh=b$. Thus, naturally in every test scheme $T$, $$\operatorname{Hom}(T,P)\cong\operatorname{Hom}(T,X)\times_{\operatorname{Hom}(T,S)}\operatorname{Hom}(T,Y).$$ Write $P=X\times_S Y$. The commutative square with edges $p,q,f,g$ is **Cartesian** when it has this universal property. Morphisms here are morphisms of locally ringed spaces, as in def-morphism-of-schemes. No existence assertion is part of the definition. ([[def-fibre-product-schemes-universal-property]])

[F2] For a scheme $X$ and a ring $A$, taking global sections induces a natural bijection $$\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(X,\mathcal O_X)).$$ ([[thm-morphisms-into-affine-scheme-global-sections]])

[F3] Let $A,B,C$ be commutative $R$-algebras. For every pair of $R$-algebra homomorphisms $f:A\to C$ and $g:B\to C$, there is a unique $R$-algebra homomorphism $$h:A\otimes_RB\longrightarrow C$$ such that $h(a\otimes1)=f(a)$ and $h(1\otimes b)=g(b)$. It is given by $$h(a\otimes b)=f(a)g(b).$$ Thus $A\otimes_RB$, with its two canonical maps, is the coproduct of $A$ and $B$ among commutative $R$-algebras. ([[thm-coproduct-property-of-tensor-products-of-commutative-algebras]])

## Proof

1.1 For an arbitrary scheme $T$, put $R=\Gamma(T,\mathcal O_T)$. Compatible maps from $T$ to the two affine factors are, by the natural bijection in F2, exactly ring maps $B\to R$ and $C\to R$ whose restrictions to $A$ agree. [given, F2]

2.1 Use their common restriction to regard $R$ as an $A$-algebra. F3 gives precisely one ring map $B\otimes_A C\to R$, sending $b\otimes c$ to the product of the two images. F2 converts it to precisely one morphism $T\to\operatorname{Spec}(B\otimes_A C)$ with the desired projections. [F2, F3, step 1.1]

3.1 This is the universal property F1, for every $T$, not only affine $T$. The argument permits zero rings: a map to $\operatorname{Spec}0$ is possible precisely for the empty test scheme, whose ring of sections is zero. Tensor-unit and identity cases use the same formula. [F1, step 2.1] ∎
