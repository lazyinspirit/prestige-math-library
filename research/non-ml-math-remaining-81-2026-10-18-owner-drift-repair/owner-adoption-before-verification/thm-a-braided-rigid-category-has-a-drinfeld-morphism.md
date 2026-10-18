---
id: thm-a-braided-rigid-category-has-a-drinfeld-morphism
kind: theorem
title: "A braided rigid category has a Drinfeld morphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rigid-object-and-rigid-monoidal-category, def-braiding, thm-the-double-dual-is-a-monoidal-functor]
landmark: true
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
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, formula (8.30), Proposition 8.9.3, and Proposition 8.10.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "A. Bruguières and A. Virelizier, Hopf monads, Lemma 8.1 and Remark 8.2"
      url: "https://imag.umontpellier.fr/~bruguieres/docs/Hopf-monads.pdf"
    - title: "T. Shibata and K. Shimizu, Modified traces and the Nakayama functor, Section 6.4"
      url: "https://arxiv.org/pdf/2103.13702"
---

## Statement

In a braided rigid monoidal category there is a natural isomorphism

$$u_X:X\to X^{\vee\vee},$$

called the **Drinfeld morphism** (or **Drinfeld isomorphism**), defined by

$$X\xrightarrow{1_X\otimes\operatorname{coev}_{X^\vee}}X\otimes X^\vee\otimes X^{\vee\vee}\xrightarrow{c_{X,X^\vee}\otimes1_{X^{\vee\vee}}}X^\vee\otimes X\otimes X^{\vee\vee}\xrightarrow{\operatorname{ev}_X\otimes1_{X^{\vee\vee}}}X^{\vee\vee}.$$

Write

$$d_{X,Y}:X^{\vee\vee}\otimes Y^{\vee\vee}\xrightarrow{\sim}(X\otimes Y)^{\vee\vee}$$

for the monoidal comparison of the double-dual functor. Then

$$d_{X,Y}\circ(u_X\otimes u_Y)=u_{X\otimes Y}\circ c_{Y,X}\circ c_{X,Y}.$$

Thus $u$ need not be monoidal: the double braiding is precisely its
monoidality obstruction.

## Facts & Assumptions

**Given:** A braided rigid monoidal category with braiding $c$ and chosen left duals.

[L1] Braiding is natural and satisfies the two hexagons ([[def-braiding]]). Duals satisfy the evaluation/coevaluation zig-zags ([[def-rigid-object-and-rigid-monoidal-category]]).

[L2] Double duality has the monoidal comparisons $d_{X,Y}$ ([[thm-the-double-dual-is-a-monoidal-functor]]). In calculations, reassociations, unit constraints and chosen-dual comparison maps are understood.

## Proof

**Proof technique:** direct.

1.1 **Bending a crossing.** For any object $Y$, naturality at evaluation and coevaluation, followed by the two hexagons and the zig-zags, gives
$$c_{X^\vee,Y}=(\operatorname{ev}_X\otimes1_Y\otimes1_{X^\vee})(1_{X^\vee}\otimes c_{X,Y}^{-1}\otimes1_{X^\vee})(1_{X^\vee}\otimes1_Y\otimes\operatorname{coev}_X).$$
Indeed expand $c_{Y,X\otimes X^\vee}=(1_X\otimes c_{Y,X^\vee})(c_{Y,X}\otimes1_{X^\vee})$ in naturality at $\operatorname{coev}_X$, then tensor on the left with $X^\vee$ and apply $\operatorname{ev}_X$ to cancel the adjacent cup and cap. Replacing $c_{A,B}$ throughout by $c_{B,A}^{-1}$ gives the companion identity for $c_{Y,X^\vee}^{-1}$. These are algebraic identities, independent of a graphical calculus. [L1, given, algebra]

2.1 **A second left dual of $X^\vee$.** Put $e'_X=\operatorname{ev}_Xc_{X,X^\vee}:X\otimes X^\vee\to\mathbf1$ and $h'_X=c_{X^\vee,X}^{-1}\operatorname{coev}_X:\mathbf1\to X^\vee\otimes X$. These give $X$ as a left dual of $X^\vee$. To check the first zig-zag, expand $(e'_X\otimes1_X)(1_X\otimes h'_X)$; move the crossing incident to the cup across that cup by step 1.1, cancel the resulting inverse crossing pair, and the remaining composite is $(1_X\otimes\operatorname{ev}_X)(\operatorname{coev}_X\otimes1_X)=1_X$. For the other zig-zag expand $(1_{X^\vee}\otimes e'_X)(h'_X\otimes1_{X^\vee})$; the companion bending identity cancels the crossing pair and leaves $(\operatorname{ev}_X\otimes1_{X^\vee})(1_{X^\vee}\otimes\operatorname{coev}_X)=1_{X^\vee}$. [L1, step 1.1, algebra, construct]

2.2 **Comparison and inverse.** If $(A,e_A,h_A)$ and $(B,e_B,h_B)$ are left duals of an object $Z$, the maps $(e_A\otimes1_B)(1_A\otimes h_B):A\to B$ and $(e_B\otimes1_A)(1_B\otimes h_A):B\to A$ are inverse: substitution of either composite permits first the $Z,B$ zig-zag and then the $A,Z$ zig-zag, leaving the identity. They are the unique maps intertwining the evaluations, since tensoring that intertwining equation with $h_B$ recovers the displayed formula. Apply this to $Z=X^\vee$, $A=X$ from step 2.1, and $B=X^{\vee\vee}$ with its chosen duality. The comparison is precisely the displayed $u_X$, and its inverse is
$$v_X=(\operatorname{ev}_{X^\vee}\otimes1_X)(1_{X^{\vee\vee}}\otimes c_{X^\vee,X}^{-1})(1_{X^{\vee\vee}}\otimes\operatorname{coev}_X).$$
Thus $v_Xu_X=1_X$ and $u_Xv_X=1_{X^{\vee\vee}}$. For $f:X\to Y$, the mate equations for $f,f^\vee$, and naturality of $c$ show that both $u_Yf$ and $f^{\vee\vee}u_X$ intertwine the same evaluation pairing; uniqueness of the comparison gives $u_Yf=f^{\vee\vee}u_X$. [L1, step 2.1, algebra, construct]

3.1 **Tensor relation.** Work first with the canonical tensor dual $(X\otimes Y)^\vee=Y^\vee\otimes X^\vee$. Its evaluation is $\operatorname{ev}_Y(1_{Y^\vee}\otimes\operatorname{ev}_X\otimes1_Y)$, and the coevaluation of its dual is $(1_{Y^\vee}\otimes\operatorname{coev}_{X^\vee}\otimes1_{Y^{\vee\vee}})\operatorname{coev}_{Y^\vee}$. Insert these into the formula for $u_{X\otimes Y}$. Expand its middle braiding using, successively, $c_{A\otimes B,C}=(c_{A,C}\otimes1_B)(1_A\otimes c_{B,C})$ and $c_{A,B\otimes C}=(1_B\otimes c_{A,C})(c_{A,B}\otimes1_C)$. This produces the four crossings of $X,Y$ with $Y^\vee,X^\vee$. Bend the $X,Y^\vee$ crossing across its $Y$ evaluation and the $Y,X^\vee$ crossing across its $X$ evaluation by the two identities of step 1.1. The remaining $X,X^\vee$ and $Y,Y^\vee$ crossings and their cups and caps are respectively $u_X$ and $u_Y$, while the two bent crossings on the input are $c_{X,Y}^{-1}c_{Y,X}^{-1}$. Consequently the expanded composite is $u_{X\otimes Y}=(u_X\otimes u_Y)c_{X,Y}^{-1}c_{Y,X}^{-1}$. Reinsert the chosen-dual comparison $d_{X,Y}$ from [L2] and multiply on the right by $c_{Y,X}c_{X,Y}$ to obtain exactly the stated identity. Steps 2.2 and 3.1 prove the natural-isomorphism and obstruction claims. [L1, L2, step 1.1, step 2.2, algebra] ∎
