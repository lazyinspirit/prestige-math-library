---
id: prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors
kind: proposition
title: Bimodule homotopy equivalences induce natural tensor-functor isomorphisms
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
  - thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor
justified_by: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c and Proposition 2.4"
      url: "https://arxiv.org/pdf/math/0006056"
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

Let $F$ and $F'$ be bounded cochain complexes of graded $(B,A)$-bimodules,
each term of each complex finite graded projective on the left over $B$ and
projective as an underlying right $A$-module. Suppose there are internal-degree-
zero bimodule chain maps $u:F\to F'$ and $v:F'\to F$, and internal-degree-zero
bimodule homotopies $h$ and $h'$ of cochain degree $-1$ such that
$$
vu-\operatorname{id}_F=d_Fh+hd_F,\qquad uv-\operatorname{id}_{F'}=d_{F'}h'+h'd_{F'}.
$$
Then $u\otimes_A1_X$ and $v\otimes_A1_X$ induce mutually inverse natural
isomorphisms between the tensor functors on
$$
K^b(\operatorname{proj}^{gr} A)\longrightarrow K^b(\operatorname{proj}^{gr} B),
$$
and between the derived tensor functors on ordinary bounded derived categories
$$
F\otimes_A^{\mathbf L}-\;\cong\;F'\otimes_A^{\mathbf L}-:D^b(A\text{-}\mathrm{Mod})\longrightarrow D^b(B\text{-}\mathrm{Mod}),
$$
and on the corresponding bounded derived categories of graded modules.

## Facts & Assumptions

**Given:** The bounded bimodule complexes, the bimodule-linear chain maps $u,v$,
and the bimodule-linear homotopies $h,h'$ satisfying the displayed equations.
All derived categories use the standing localization size convention from
[[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]].

[L1] Degree-zero bimodule chain maps in both variables induce chain maps on the
balanced totalization ([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L2] A homotopy in the first bimodule variable transfers by
$K(f\otimes x)=k(f)\otimes x$, and the resulting tensor homotopies give descent
to homotopy classes in both variables
([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L3] For each complex satisfying the two-sided projectivity hypotheses, tensor
gives a functor from bounded finite graded projectives over $A$ to bounded finite
graded projectives over $B$
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[L4] For each such complex, tensor preserves quasi-isomorphisms of bounded
ordinary and graded inputs and descends to the corresponding derived categories
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[L5] The descended functor in either module setting is the derived tensor
functor computed by ordinary signed totalization
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

## Proof

**Proof technique:** tensor the supplied maps and homotopies in the first
variable, then check naturality on elementary tensors and pass through the
homotopy and derived localizations.

**Given:** The hypotheses above.

1.1 For every bounded graded left $A$-complex $X$, define $\eta_X=u\otimes_A1_X:F\otimes_A X\to F'\otimes_A X$ and $\epsilon_X=v\otimes_A1_X:F'\otimes_A X\to F\otimes_A X$. Since $u$ and $v$ are degree-zero bimodule chain maps, [L1] makes these balanced, internal-degree-zero $B$-linear chain maps. [L1, given]

1.2 Transfer $h$ to $H_X(f\otimes x)=h(f)\otimes x$. By [L2], $dH_X+H_Xd=(d_Fh+hd_F)\otimes1_X=((vu-\operatorname{id}_F)\otimes1_X)$, which is $\epsilon_X\eta_X-\operatorname{id}$. Transferring $h'$ gives $\eta_X\epsilon_X-\operatorname{id}=dH'_X+H'_Xd$. These homotopies are natural in $X$, since for every $g:X\to Y$ both orders send $f\otimes x$ to $h(f)\otimes g(x)$, and likewise for $h'$. Thus $[\eta]$ and $[\epsilon]$ are mutually inverse natural isomorphisms in the homotopy categories. [L2, given, algebra]

2.1 For every degree-zero chain map $g:X\to Y$, the composites in the naturality square for $\eta$ both send $f\otimes x$ to $u(f)\otimes g(x)$; the same check with $v$ proves naturality of $\epsilon$. The maps are well defined on homotopy classes by [L2], so these are natural transformations on the bounded homotopy categories. [L1, L2, step 1.1, algebra]

2.2 If $X$ has finite graded projective terms, [L3] places both totalizations and both tensor maps in the stated bounded projective homotopy categories. Step 1.2 proves that their composites are the identity morphisms there, so $[\eta]$ and $[\epsilon]$ give inverse natural isomorphisms on $K^b(\operatorname{proj}^{gr} A)$. [L3, step 1.2, algebra]

3.1 For bounded ordinary or graded module complexes, [L4] makes both totalization functors preserve quasi-isomorphisms and [L5] identifies their localizations with the derived tensor functors. The natural transformations of Step 2.1 therefore descend through the localizations, and the homotopies of Step 1.2 still make their composites identities. They are mutually inverse natural isomorphisms on both ordinary and graded bounded derived categories. [L4, L5, step 2.1, step 1.2, algebra]

4.1 Empty diagonals and a zero input give zero total complexes, so the formulas remain valid there. For a one-term input, the same first-variable map and homotopy formulas apply; if either supplied homotopy is zero, its equation reduces to a strict inverse equation. Bounded endpoints add only zero components, and the homotopy formulas have no terms outside the given bounded supports. No map or representative is selected: all maps and homotopies are supplied in the hypotheses. The proposition is an implication, not an iff claim. [step 1.1, step 1.2, given, algebra] $\square$
