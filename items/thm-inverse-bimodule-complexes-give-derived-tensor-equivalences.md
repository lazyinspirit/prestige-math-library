---
id: thm-inverse-bimodule-complexes-give-derived-tensor-equivalences
kind: theorem
title: "Supplied inverse bimodule complexes give derived tensor equivalences"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
  - thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility
  - thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor
  - prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors
justified_by: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Khovanov and Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c and Proposition 2.4"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Weibel, An Introduction to Homological Algebra, §10.6, printed pp. 395–396"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
    - title: "Stacks Project, Differential Graded Algebra, §22.33, tag 09LP"
      url: "https://stacks.math.columbia.edu/tag/09LP"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Use the standing localization size convention for all bounded derived
categories, as in
[[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]].
Let $k$ be a commutative ring and let $A,B$ be unital graded $k$-algebras. Let
$F$ be a bounded cochain complex of graded $(B,A)$-bimodules and $G$ a bounded
cochain complex of graded $(A,B)$-bimodules. Suppose every $F^p$ is finite
graded projective as a left $B$-module and projective as an underlying right
$A$-module, and every $G^q$ is finite graded projective as a left $A$-module
and projective as an underlying right $B$-module.

Suppose internal-degree-zero bimodule chain maps and homotopies exhibit
$F\otimes_A G\simeq B$ as graded $(B,B)$-bimodule complexes and
$G\otimes_B F\simeq A$ as graded $(A,A)$-bimodule complexes, where each regular
bimodule is concentrated in cochain degree zero. Then the tensor functors
$F\otimes_A^{\mathbf L}-$ and $G\otimes_B^{\mathbf L}-$ are mutually
quasi-inverse exact equivalences on ordinary bounded derived categories and
their graded counterparts. They are also mutually quasi-inverse exact
equivalences between
$K^b(\operatorname{proj}^{gr} A)$ and
$K^b(\operatorname{proj}^{gr} B)$.

The supplied inverse data alone do not choose coherent comparison
isomorphisms for a group action.

## Facts & Assumptions

**Given:** The algebras and bounded bimodule complexes in the statement, and
the supplied internal-degree-zero homotopy equivalences. Write
$H=F\otimes_A G$ and $J=G\otimes_B F$. For the first equivalence let
$u:H\to B$ and $v:B\to H$ be the supplied chain maps, with internal-degree-zero
homotopies between $vu$ and $1_H$ and between $uv$ and $1_B$. For the second
equivalence use maps $u':J\to A$ and $v':A\to J$ with the corresponding
homotopies. All homotopies have cochain degree $-1$.

[L1] The balanced associator is a natural chain isomorphism
$(F\otimes_A G)\otimes_B X\cong F\otimes_A(G\otimes_B X)$ and likewise in
the other tensor order
([[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]]).

[L2] The regular bimodule gives natural chain isomorphisms
$B\otimes_B X\cong X$ and $A\otimes_A Y\cong Y$
([[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]]).

[L3] Internal-degree-zero bimodule chain maps tensor to chain maps and preserve
identities and composition
([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L4] A cochain homotopy in the first bimodule variable transfers by
$K(f\otimes x)=k(f)\otimes x$; tensoring therefore carries supplied homotopy
equivalences in that variable to homotopy equivalences
([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L5] Under the stated left and right projectivity hypotheses, tensor gives an
exact functor between the bounded homotopy categories of finite graded
projective modules
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[L6] Under the same hypotheses, tensor preserves bounded quasi-isomorphisms,
descends to exact ordinary and graded bounded derived functors, and computes
the derived tensor by ordinary signed totalization
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[L7] The homotopy-invariance proposition assumes each of the two bimodule
complexes being compared has finite graded projective left terms and projective
underlying right terms
([[prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors]]).

## Proof

**Proof technique:** Build the two natural transformations from reassociation,
the supplied bimodule maps, and the regular units. Transfer the supplied
homotopies directly in the first tensor variable.

**Given:** The hypotheses and notation of Facts & Assumptions.

1.1 Apply [L5, L6] separately to $F$ and $G$. This defines the two tensor functors on the bounded homotopy categories of finite graded projectives and on ordinary and graded bounded derived categories; in each setting their values are represented by signed ordinary totalization. [L5, L6, given]

1.2 For a bounded left $B$-complex $X$, define $\eta_X:F\otimes_A(G\otimes_B X)\to X$ by the inverse associator to $(F\otimes_A G)\otimes_B X$, followed by $u\otimes_B1_X$ and the unit $B\otimes_B X\to X$. Define $\epsilon_X:X\to F\otimes_A(G\otimes_B X)$ in reverse order using the inverse unit, $v\otimes_B1_X$, and the associator. By [L1, L2, L3] these are chain maps on the balanced total complexes. [L1, L2, L3, given, construct]

1.3 For a bounded left $A$-complex $Y$, use the inverse associator to write $G\otimes_B(F\otimes_A Y)$ as $(G\otimes_B F)\otimes_A Y$, then apply $u'\otimes_A1_Y$ and the unit $A\otimes_A Y\to Y$. The reverse natural map uses the inverse unit, $v'\otimes_A1_Y$, and the associator. These are chain maps by [L1, L2, L3]. [L1, L2, L3, given, construct]

2.1 If $h$ is a supplied homotopy between $vu$ and $1_H$, [L4] gives the homotopy $K_X(z\otimes x)=h(z)\otimes x$ after tensoring with $X$; the homotopy between $uv$ and $1_B$ transfers in the same way. Conjugating these homotopies by the associator and unit maps shows that $\epsilon_X\eta_X$ and $\eta_X\epsilon_X$ are homotopic to the respective identity maps. Thus the two maps are inverse in the homotopy category. [L4, given, step 1.2, algebra]

3.1 For a chain map $g:X\to X'$, the naturality square for $u\otimes1$ commutes on each elementary tensor, since both routes send $z\otimes x$ to $u(z)\otimes g(x)$; the same holds for $v\otimes1$. The associator and units are natural by [L1, L2], and the transferred homotopies are natural because $h(z)\otimes g(x)$ is independent of the order of applying $g$ and the homotopy. Hence $\eta$ and $\epsilon$ are inverse natural isomorphisms on the bounded homotopy category of left $B$-complexes. [L1, L2, L3, step 1.2, step 2.1, algebra]

4.1 Transfer the supplied homotopies between $v'u'$ and $1_J$, and between $u'v'$ and $1_A$, by [L4]. They show that the maps of Step 1.3 are mutually inverse in the homotopy category. Naturality follows on elementary tensors exactly as in Step 3.1, so the two maps give inverse natural isomorphisms for the $G\otimes_B-$ and $F\otimes_A-$ composite on bounded left $A$-complexes. [L4, given, step 1.3, algebra]

5.1 By [L5], $F\otimes_A-$ and $G\otimes_B-$ restrict to the indicated bounded homotopy categories of finite graded projectives. Steps 2.1–4.1 give inverse natural isomorphisms there. Each functor is exact by [L5], so these are exact equivalences. The adjacent proposition [L7] assumes two-sided projectivity for both complexes being compared; that has not been included for $H$ or $J$, so it is not applied to them. No projectivity of $H$ or $J$ is needed because [L4] transfers the supplied homotopies directly in the first variable. [L4, L5, L7, step 2.1, step 3.1, step 4.1, algebra]

5.2 By [L6], each tensor functor preserves quasi-isomorphisms and its derived functor is represented by ordinary signed totalization. The natural transformations from Steps 3.1 and 4.1 commute with every quasi-isomorphism. After localization, the vertical maps in each such naturality square are invertible; the same square therefore commutes for the inverse of a quasi-isomorphism and hence for every morphism generated in the localization. The transformations descend, and their inverse identities from Steps 2.1 and 4.1 remain identities there. The two derived tensor functors are thus quasi-inverse exact equivalences in both ordinary and graded settings. [L6, step 3.1, step 4.1, step 2.1, algebra]

6.1 Empty or zero complexes give zero totalizations, where the maps and homotopies still satisfy the identity equations. One-term complexes and zero-differential complexes use the same formulas; bounded endpoints add only zero summands. All inverse maps and homotopies are supplied in the hypotheses, and the derived models use the supplied $F$ and $G$, so no family of choices or Axiom of Choice is used. The theorem is an implication and proves no biconditional. It gives inverse functors for the specified pair but proves no coherence for comparison isomorphisms indexed by a group. [step 1.2, step 2.1, step 1.3, step 4.1, step 5.1, step 5.2, given, algebra] $\square$
