---
id: thm-basic-properties-of-the-categorical-trace
kind: theorem
title: "Basic properties of the categorical trace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-categorical-trace-of-a-morphism-into-the-double-dual, thm-left-duality-is-a-contravariant-antimonoidal-functor, def-additive-category]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 4.7.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $a:X\to X^{\vee\vee}$ and $b:Y\to Y^{\vee\vee}$.

1. $\operatorname{Tr}_L(a)=\operatorname{Tr}_R(a^\vee)$.
2. If the category is additive, then
   $\operatorname{Tr}_L(a\oplus b)=\operatorname{Tr}_L(a)+\operatorname{Tr}_L(b)$.
3. $\operatorname{Tr}_L(a\otimes b)=\operatorname{Tr}_L(a)\operatorname{Tr}_L(b)$.
4. For every endomorphism $c:X\to X$,
   $\operatorname{Tr}_L(ac)=\operatorname{Tr}_L(c^{\vee\vee}a)$.

The corresponding right-trace statements hold by the same formulas with left
and right exchanged.

## Facts & Assumptions

**Given:** A rigid monoidal category, morphisms $a:X\to X^{\vee\vee}$ and $b:Y\to Y^{\vee\vee}$, and when needed an additive structure.

[L1] Chosen left duality is contravariant and antimonoidal, with evaluation and coevaluation satisfying the two zig-zags ([[thm-left-duality-is-a-contravariant-antimonoidal-functor]]).

[L2] The two trace composites are [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]. Tensor and unit comparison maps are understood in the formulas below.

## Proof

**Proof technique:** direct.

1.1 **Sliding a morphism.** The defining mate identities for $f:U\to V$ are $(f\otimes1_{U^\vee})\operatorname{coev}_U=(1_V\otimes f^\vee)\operatorname{coev}_V$ and $\operatorname{ev}_U(f^\vee\otimes1_U)=\operatorname{ev}_V(1_{V^\vee}\otimes f)$. Apply the first identity to $f=a:X\to X^{\vee\vee}$. Postcomposing with $\operatorname{ev}_{X^\vee}$ gives $\operatorname{Tr}_L(a)=\operatorname{ev}_{X^\vee}(1_{X^{\vee\vee}}\otimes a^\vee)\operatorname{coev}_{X^{\vee\vee}}=\operatorname{Tr}_R(a^\vee)$, where the last trace is taken on $X^\vee$. This proves clause 1 without identifying a double dual with the original object. [given, L1, L2, algebra]

1.2 **Cyclicity, including different objects.** More generally, for $f:U\to V$ and $h:V\to U^{\vee\vee}$, the first mate identity in step 1.1 and then the second identity applied to $f^\vee$ give $\operatorname{ev}_{U^\vee}(hf\otimes1)\operatorname{coev}_U=\operatorname{ev}_{U^\vee}(h\otimes f^\vee)\operatorname{coev}_V=\operatorname{ev}_{V^\vee}(f^{\vee\vee}h\otimes1)\operatorname{coev}_V$. Thus $\operatorname{Tr}_{L,U}(hf)=\operatorname{Tr}_{L,V}(f^{\vee\vee}h)$. Taking $U=V=X$, $f=c$ and $h=a$ proves clause 4. The mirrored mate identities give the corresponding right-trace cyclicity. [L1, L2, step 1.1, algebra]

2.1 **Biproducts.** In an additive rigid category, tensoring by a fixed object has both adjoints, furnished by its two duals, and hence preserves finite biproducts; duality carries a biproduct to the corresponding biproduct of duals. Write $i_U,p_U$ for the injections and projections of $Z=X\oplus Y$. Relative to $Z^\vee=X^\vee\oplus Y^\vee$, its coevaluation is $\sum_{U=X,Y}(i_U\otimes p_U^\vee)\operatorname{coev}_U$, and its evaluation pairs matching summands by $\operatorname{ev}_U$ and different summands by zero. These formulas satisfy the zig-zags since $p_Ui_V$ is the identity for $U=V$ and zero otherwise, so uniqueness of duals permits their use for the chosen dual. Inserting $a\oplus b$ leaves exactly the two diagonal trace composites. Their sum is $\operatorname{Tr}_L(a)+\operatorname{Tr}_L(b)$, proving clause 2. [L1, L2, algebra, construct]

3.1 **Tensor products.** Use $(X\otimes Y)^\vee=Y^\vee\otimes X^\vee$. The coevaluation of $X\otimes Y$ is $(1_X\otimes\operatorname{coev}_Y\otimes1_{X^\vee})\operatorname{coev}_X$. The evaluation of its dual $Y^\vee\otimes X^\vee$ first pairs the middle $Y^{\vee\vee},Y^\vee$ and then the outer $X^{\vee\vee},X^\vee$. Substitution of $a\otimes b$ in this nested composite first gives $\operatorname{Tr}_L(b)$ in the middle and then $\operatorname{Tr}_L(a)$ on the outside. An endomorphism of the unit can be moved past any morphism by the unit constraints and bifunctoriality; two such endomorphisms commute because their composition and tensor product have the same unit and satisfy interchange. Hence the result is $\operatorname{Tr}_L(a)\operatorname{Tr}_L(b)$, proving clause 3. Reversing all tensor orders and exchanging evaluation with coevaluation gives the same biproduct and tensor computations for the right trace. Together with steps 1.1–1.2 this proves all assertions. [L1, L2, step 1.1, step 1.2, step 2.1, algebra] ∎
