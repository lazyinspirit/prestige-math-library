---
id: thm-basic-properties-of-the-categorical-trace
kind: theorem
title: "Basic properties of the categorical trace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-categorical-trace-of-a-morphism-into-the-double-dual, thm-left-duality-is-a-contravariant-antimonoidal-functor, def-additive-category, def-braiding]
proof_strategy: direct
verification:
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/published-receipts/thm-basic-properties-of-the-categorical-trace.json
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 4.7.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $\mathcal C$ be a rigid monoidal category, let $a:X\to X^{\vee\vee}$ and $b:Y\to Y^{\vee\vee}$, and suppress the monoidal and chosen-dual comparison maps. For $s\in\operatorname{End}(\mathbf1)$ write $\ell_Z(s)$ and $r_Z(s)$ for its left and right actions on $Z$, transported from $s\otimes1_Z$ and $1_Z\otimes s$ by the unit constraints.

1. $\operatorname{Tr}_L(a)=\operatorname{Tr}_R(a^\vee)$.
2. If the category is additive, then
   $\operatorname{Tr}_L(a\oplus b)=\operatorname{Tr}_L(a)+\operatorname{Tr}_L(b)$.
3. The general tensor formula is
   $\operatorname{Tr}_L(a\otimes b)=\operatorname{Tr}_L(r_{X^{\vee\vee}}(\operatorname{Tr}_L(b))a)$.
   If $r_{X^{\vee\vee}}(\operatorname{Tr}_L(b))=\ell_{X^{\vee\vee}}(\operatorname{Tr}_L(b))$, this becomes
   $\operatorname{Tr}_L(a\otimes b)=\operatorname{Tr}_L(a)\operatorname{Tr}_L(b)$.
   In particular multiplicativity holds when every unit scalar has equal left and right actions on every object. This condition holds in a braided category, and also in a $k$-linear monoidal category with $k$-bilinear tensor product and $\operatorname{End}(\mathbf1)=k$.
4. For every endomorphism $c:X\to X$,
   $\operatorname{Tr}_L(ac)=\operatorname{Tr}_L(c^{\vee\vee}a)$.

The corresponding right-trace duality, additivity and cyclicity statements hold. For right-trace inputs $p:X^{\vee\vee}\to X$ and $q:Y^{\vee\vee}\to Y$, the general tensor formula is

$$\operatorname{Tr}_R(p\otimes q)=\operatorname{Tr}_R(q\ell_{Y^{\vee\vee}}(\operatorname{Tr}_R(p))).$$

It reduces to multiplicativity under the analogous equality of scalar actions, in particular under either sufficient condition above.

## Facts & Assumptions

**Given:** A rigid monoidal category, morphisms $a:X\to X^{\vee\vee}$ and $b:Y\to Y^{\vee\vee}$, and when needed an additive structure.

[L1] Chosen left duality is contravariant and antimonoidal, with evaluation and coevaluation satisfying the two zig-zags ([[thm-left-duality-is-a-contravariant-antimonoidal-functor]]).

[L2] The two trace composites are [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]. Tensor and unit comparison maps are understood in the formulas below.

[L3] A braiding is natural and satisfies the two hexagon identities ([[def-braiding]]).

## Proof

**Proof technique:** direct.

1.1 **Sliding a morphism.** The defining mate identities for $f:U\to V$ are $(f\otimes1_{U^\vee})\operatorname{coev}_U=(1_V\otimes f^\vee)\operatorname{coev}_V$ and $\operatorname{ev}_U(f^\vee\otimes1_U)=\operatorname{ev}_V(1_{V^\vee}\otimes f)$. Apply the first identity to $f=a:X\to X^{\vee\vee}$. Postcomposing with $\operatorname{ev}_{X^\vee}$ gives $\operatorname{Tr}_L(a)=\operatorname{ev}_{X^\vee}(1_{X^{\vee\vee}}\otimes a^\vee)\operatorname{coev}_{X^{\vee\vee}}=\operatorname{Tr}_R(a^\vee)$, where the last trace is taken on $X^\vee$. This proves clause 1 without identifying a double dual with the original object. [given, L1, L2, algebra]

1.2 **Cyclicity, including different objects.** More generally, for $f:U\to V$ and $h:V\to U^{\vee\vee}$, the first mate identity in step 1.1 and then the second identity applied to $f^\vee$ give $\operatorname{ev}_{U^\vee}(hf\otimes1)\operatorname{coev}_U=\operatorname{ev}_{U^\vee}(h\otimes f^\vee)\operatorname{coev}_V=\operatorname{ev}_{V^\vee}(f^{\vee\vee}h\otimes1)\operatorname{coev}_V$. Thus $\operatorname{Tr}_{L,U}(hf)=\operatorname{Tr}_{L,V}(f^{\vee\vee}h)$. Taking $U=V=X$, $f=c$ and $h=a$ proves clause 4. The mirrored mate identities give the corresponding right-trace cyclicity. [L1, L2, step 1.1, algebra]

2.1 **Biproducts.** In an additive rigid category, tensoring by a fixed object has both adjoints, furnished by its two duals, and hence preserves finite biproducts; duality carries a biproduct to the corresponding biproduct of duals. Write $i_U,p_U$ for the injections and projections of $Z=X\oplus Y$. Relative to $Z^\vee=X^\vee\oplus Y^\vee$, its coevaluation is $\sum_{U=X,Y}(i_U\otimes p_U^\vee)\operatorname{coev}_U$, and its evaluation pairs matching summands by $\operatorname{ev}_U$ and different summands by zero. These formulas satisfy the zig-zags since $p_Ui_V$ is the identity for $U=V$ and zero otherwise, so uniqueness of duals permits their use for the chosen dual. Inserting $a\oplus b$ leaves exactly the two diagonal trace composites. Their sum is $\operatorname{Tr}_L(a)+\operatorname{Tr}_L(b)$, proving clause 2. [L1, L2, algebra, construct]

3.1 **Nested tensor trace.** Use $(X\otimes Y)^\vee=Y^\vee\otimes X^\vee$. The coevaluation of $X\otimes Y$ is $(1_X\otimes\operatorname{coev}_Y\otimes1_{X^\vee})\operatorname{coev}_X$. The evaluation of its dual $Y^\vee\otimes X^\vee$ first pairs the middle $Y^{\vee\vee},Y^\vee$ and then the outer $X^{\vee\vee},X^\vee$. Substitute $a\otimes b$ into this composite. Evaluating the middle pair gives $s=\operatorname{Tr}_L(b)$ situated between $X^{\vee\vee}$ and $X^\vee$. Thus the result is exactly $\operatorname{ev}_{X^\vee}(r_{X^{\vee\vee}}(s)a\otimes1_{X^\vee})\operatorname{coev}_X=\operatorname{Tr}_L(r_{X^{\vee\vee}}(s)a)$. If $r_{X^{\vee\vee}}(s)=\ell_{X^{\vee\vee}}(s)$, the inserted scalar instead acts on the left of the whole evaluation input. Naturality of that left action at $\operatorname{ev}_{X^\vee}$ moves it to the output unit, giving $s\operatorname{Tr}_L(a)$. Endomorphisms of the unit commute under composition by interchange, so this equals the asserted product. No equality of left and right actions is assumed in the general nested formula. [L1, L2, algebra]

3.2 **Sufficient hypotheses and right trace.** In a braided category the hexagon at $\mathbf1\otimes\mathbf1,Z$, with unit constraints inserted, makes the unit-transported $c_{\mathbf1,Z}$ an idempotent automorphism of $Z$, hence the identity. Naturality of $c_{\mathbf1,Z}$ at $s:\mathbf1\to\mathbf1$ gives $c_{\mathbf1,Z}(s\otimes1_Z)=(1_Z\otimes s)c_{\mathbf1,Z}$. Compatibility with the unit identifies $c_{\mathbf1,Z}$ with the composite $\mathbf1\otimes Z\to Z\to Z\otimes\mathbf1$, so $\ell_Z(s)=r_Z(s)$. Alternatively, in a $k$-linear category with bilinear tensor and $\operatorname{End}(\mathbf1)=k$, each $s=\lambda1_{\mathbf1}$ has both actions $\lambda1_Z$. For the right tensor trace, use the coevaluation of $Y^\vee\otimes X^\vee$: first close the middle $X^\vee,X^{\vee\vee}$ pair with $p$, leaving $\operatorname{Tr}_R(p)$ immediately to the left of $Y^{\vee\vee}$. The remaining composite is exactly $\operatorname{Tr}_R(q\ell_{Y^{\vee\vee}}(\operatorname{Tr}_R(p)))$. When left and right actions agree at this scalar, move it to the outer right of the evaluation and hence to the output unit; this proves the right multiplicative formula. The mirrored mate and biproduct calculations prove the other right-trace identities. Together with steps 1.1–2.1 and 3.1 this proves all assertions. [L1, L2, L3, step 1.1, step 1.2, step 2.1, step 3.1, algebra] ∎

## Remarks

Commutativity of $\operatorname{End}(\mathbf1)$ alone does not imply equality of its two actions. For example, take the rigid matrix category whose simple objects satisfy $E_{ij}\otimes E_{kl}=0$ for $j\ne k$ and $E_{ij}\otimes E_{jl}=E_{il}$, with unit $E_{11}\oplus E_{22}$ and $E_{ij}^\vee=E_{ji}$. Choose the usual matrix-unit evaluations and coevaluations. If $a=1_{E_{12}}$ and $b=1_{E_{21}}$, their left traces are the two orthogonal unit projections $e_1,e_2$. Their product is zero, whereas $\operatorname{Tr}_L(a\otimes b)=\operatorname{Tr}_L(1_{E_{11}})=e_1$. The nested formula remains valid: $r_{E_{12}}(e_2)=1_{E_{12}}$, while $\ell_{E_{12}}(e_2)=0$.
