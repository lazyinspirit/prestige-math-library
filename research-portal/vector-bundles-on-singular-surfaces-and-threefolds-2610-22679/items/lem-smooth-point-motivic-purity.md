---
id: lem-smooth-point-motivic-purity
kind: lemma
title: Motivic purity and lower-weight vanishing at a smooth closed point
status: draft
domain: mathematics
deps:
  - def-cohomology-with-support
  - prop-smooth-motivic-comparison
  - prop-smooth-pair-gysin-input
  - lem-open-excision-for-support-fibers
  - lem-author-59b1a831fe59-neighborhood
  - lem-author-59b1a831fe59-actual-support
  - lem-author-59b1a831fe59-cycle-complex
  - lem-author-59b1a831fe59-cancel-twists
  - lem-author-59b1a831fe59-relative-gysin
  - thm-author-59b1a831fe59-perfect-cancellation
  - thm-author-59b1a831fe59-classical-derived-input
  - math:def-axiom-of-choice
dependency_roles:
  def-cohomology-with-support: mathematical-premise
  prop-smooth-motivic-comparison: mathematical-premise
  prop-smooth-pair-gysin-input: mathematical-premise
  lem-open-excision-for-support-fibers: mathematical-premise
  lem-author-59b1a831fe59-neighborhood: mathematical-premise
  lem-author-59b1a831fe59-actual-support: mathematical-premise
  lem-author-59b1a831fe59-cycle-complex: mathematical-premise
  lem-author-59b1a831fe59-cancel-twists: mathematical-premise
  lem-author-59b1a831fe59-relative-gysin: mathematical-premise
  thm-author-59b1a831fe59-perfect-cancellation: mathematical-premise
  thm-author-59b1a831fe59-classical-derived-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p7, Lemma2.9 proof first display and preceding smooth-point
        excision paragraph
      reading_limits: Read the actual full p7. The article has
        qcqs/pure-dimension/perfect-field hypotheses; the draft keeps them and
        checks an actual affine smooth finite-type neighbourhood. It does not
        impose global smoothness, algebraic closure or rationality of the point.
dependency_level: 17
---

## Statement
Assume AC and the completed size conventions. Let $k$ be a perfect field, let $X$ be a qcqs $k$-scheme of pure finite dimension $d$, and let $x\in X$ be a closed point in its smooth locus. Write $L=\kappa(x)$, a finite separable extension of $k$. For every $i\in\mathbb Z$ and $j\geq d$ there is the purity isomorphism
$$H^{i,j}_{\mathrm{mot}}(X/(X\setminus\{x\}),\mathbb Z)\cong H^{i-2d,j-d}_{\mathrm{mot}}(L,\mathbb Z).$$
For every $i$ and $0\leq j<d$, the supported group on the left is zero. If the notation $C_j=0$ and $H^{i,j}=0$ is explicitly adopted for $j<0$, the displayed formula holds for every integer $j$, and the left groups vanish for all $j<d$. This extends the nonnegative EM weight system by zero; it does not assert an unstated negative-weight EM construction.

The quotient notation denotes the actual coherent restriction fiber of the completed support definition. The statement neither requires $x$ to be $k$-rational nor $X$ to be smooth away from an affine neighbourhood of $x$. No separability, perfectness, finite-type-neighbourhood or excision premise is suppressed. For $d=0$ the shift is zero and the argument includes the identity neighbourhood $\operatorname{Spec}L$.

## Facts & Assumptions
**Given:** The stated field, scheme, point, indices and choice/size conventions. $H^{i,j}$ is cohomology in degree $i$ of the unshifted coefficient/support complex.

**Goal:** Establish the actual support purity isomorphism and the full lower-weight vanishing range with the correct $(2d,d)$ shift.

[F1] [[lem-author-59b1a831fe59-neighborhood]] gives the exact smooth finite-type pair and the actual EM excision equivalence.

[F2] [[lem-author-59b1a831fe59-actual-support]] compares the actual smooth open restriction with the classical and cycle arrows for every nonnegative weight. [[lem-author-59b1a831fe59-cycle-complex]] computes its fixed-point-supported chain complex, including multiplicities and low-weight zero.

[F3] [[lem-author-59b1a831fe59-cancel-twists]] supplies coefficient cancellation over the perfect field for $j\geq d$. [[lem-author-59b1a831fe59-relative-gysin]] identifies the already compared fiber with relative classical Hom and applies the completed Gysin input under its exact hypotheses.

[F4] [[def-cohomology-with-support]] fixes the current supported object and cohomological indexing. The negative-weight extension is the explicit zero convention in the Statement, agreeing with classical MVW Definition3.1 as recorded by [[thm-author-59b1a831fe59-classical-derived-input]].

## Proof
1.1 Apply [F1]. It supplies a smooth affine separated finite-type pure-$d$ neighbourhood $V$ and smooth closed point $\operatorname{Spec}L\hookrightarrow V$ of codimension $d$, and identifies the actual point-support complex on $X$ with that on $V$. Thus all subsequent operations apply to the actual restriction arrow and preserve supported cohomology. [F1, F4, given]

2.1 For $j\geq d$, [F2] identifies that arrow with its classical counterpart before taking fibers. Apply [F3] to obtain relative Hom out of the cofiber of $M(V\setminus x)\to M(V)$. The smooth-pair Gysin theorem identifies this cofiber with $M(\operatorname{Spec}L)(d)[2d]$; perfect-field cancellation then identifies its coefficient Hom group with weight $j-d$ and degree $i-2d$ on $L$. This proves the displayed formula. Independently, [F2]'s chain calculation identifies the support complex with $C_{j-d}(L)[-2d]$, confirming the same shift directly in the actual support model; no comparison is inferred just from equality of groups. [F1, F2, F3, step 1.1]

3.1 For $0\leq j<d$, [F2] proves that the fixed-support cycle complex has no generators in any degree. Its actual support fiber is therefore zero, so every degree-$i$ group vanishes. This argument does not cancel a positive Tate twist into an undefined negative effective coefficient. If $j<0$, [F4]'s explicit zero extension makes both sides zero; if $0\leq j<d$, it also gives zero to the negative-weight residue-field side. This proves the all-integer notation version exactly under that convention, and completes the original lower-weight assertion. [F2, F4, step 1.1] ∎
