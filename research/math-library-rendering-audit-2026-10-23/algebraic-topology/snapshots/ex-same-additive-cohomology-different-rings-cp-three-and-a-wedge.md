---
id: "ex-same-additive-cohomology-different-rings-cp-three-and-a-wedge"
kind: "example"
title: "Equal additive cohomology but different rings"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["ex-integral-cohomology-ring-of-complex-projective-space","thm-cellular-homology-computes-singular-homology","prop-cellular-maps-induce-cellular-chain-maps","thm-topological-universal-coefficient-short-exact-sequence-for-cohomology","prop-cup-product-is-natural-unital-and-associative","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher cohomology-ring examples §3.2
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume AC. The spaces $X=\mathbb {CP}^3$ and $Y=S^2\vee S^4\vee S^6$ have isomorphic integral cohomology groups in every degree: $\mathbb Z$ in degrees $0,2,4,6$ and zero otherwise. Their graded cohomology rings are not isomorphic. On $X$ the degree-two generator has nonzero square, whereas every product of positive-degree classes on $Y$ is zero.

## Facts & Assumptions

[F1] [[ex-integral-cohomology-ring-of-complex-projective-space]] gives $H^*(X;\mathbb Z)=\mathbb Z[u]/(u^4)$, with $|u|=2$, under AC.

[F2] [[thm-cellular-homology-computes-singular-homology]] and [[prop-cellular-maps-induce-cellular-chain-maps]] identify the cellular computations and inclusions below with singular homology and its maps.

[F3] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives natural evaluation, including its exact Ext term, under AC.

[F4] [[prop-cup-product-is-natural-unital-and-associative]] makes restriction a graded ring homomorphism.

[F5] [[def-axiom-of-choice]] names the assumed choice principle. Facts [F1] and [F3] state their own uses of that assumption; neither their relative splittings nor their cycle projections are assertions of this definition.

## Verification

**Given:** Form $Y$ by identifying one basepoint from each of the three indicated spheres. Give $S^d=D^d/\partial D^d$ its one-vertex, one-$d$-cell CW structure, with the chosen basepoint its vertex. All coefficients are integral.

1.1 The wedge is the finite CW complex obtained by attaching one disk in each of dimensions two, four and six to a single vertex by the constant boundary maps. This is exactly the stated wedge quotient: both quotients identify each disk boundary and all resulting basepoints, and leave each disk interior unchanged. The finite quotient topologies agree by this description. Its cellular groups are $\mathbb Z$ in degrees $0,2,4,6$, zero elsewhere; every boundary is zero because one of its two adjacent chain groups is zero. By [F2], these are also its singular homology groups. The inclusion of each sphere summand is cellular and sends its sole positive-dimensional characteristic disk to the identically parameterized disk in $Y$. Thus it induces the identity generator map in that dimension and zero into the other positive-dimensional homology groups. [F2, given]

2.1 These homology groups, and those of each sphere computed from its same two-cell complex, are free. Therefore every Ext term of [F3] is zero, using the length-zero identity free resolution for $\mathbb Z$ and the zero resolution for zero. Evaluation identifies cohomology with the integral dual of homology in every degree. Hence $Y$ has the additive groups asserted. Moreover for each $r>0$ the restriction map $$H^r(Y;\mathbb Z)\longrightarrow H^r(S^2;\mathbb Z)\oplus H^r(S^4;\mathbb Z)\oplus H^r(S^6;\mathbb Z)$$ is an isomorphism: for $r=2,4,6$ its sole nonzero coordinate is the dual of the identity generator map from step 1.1, and in every other degree both sides are zero. This is natural singular evaluation, so these are the actual restriction maps. In degree zero restriction is the diagonal $\mathbb Z\to\mathbb Z^3$, not an isomorphism; we do not use it as one. [F3, step 1.1]

3.1 Let $a\in H^p(Y)$ and $b\in H^q(Y)$ with $p,q>0$. On any sphere summand $S^d$, a positive-degree class can be nonzero only in degree $d$. If either $p$ or $q$ differs from $d$, one restriction is zero. If both equal $d$, their product lies in degree $2d>d$ and is zero. In every case [F4] gives $(ab)|_{S^d}=a|_{S^d}\,b|_{S^d}=0$. The jointly injective restrictions of step 2.1 in degree $p+q>0$ imply $ab=0$. Bilinearity handles finite sums of positive-degree homogeneous classes, proving the asserted vanishing for the whole positive-degree ideal. [F4, step 2.1]

4.1 By [F1], the classes $1,u,u^2,u^3$ are infinite-order generators of $H^*(X)$ in degrees $0,2,4,6$, respectively, and $u^2\ne0$. Pairing these bases with the corresponding degree bases from step 2.1 gives the claimed additive isomorphisms. If a graded ring isomorphism $f:H^*(X)\to H^*(Y)$ existed, it would send $u$ to a degree-two class. Step 3.1 gives $f(u)^2=0$, while multiplicativity gives $f(u^2)=f(u)^2$. Injectivity would force $u^2=0$, a contradiction. Thus no graded ring isomorphism exists. [F1, step 2.1, step 3.1]

5.1 The constant unit survives in both rings, so the vanishing assertion is explicitly restricted to two positive-degree inputs. Zero inputs, repeated positive-degree inputs and degrees above six are all covered by step 3.1 and the computed groups. Neither space is empty or a point; the single common vertex is only its zero-skeleton and contributes one copy of $\mathbb Z$. The wedge basepoint identifications were built into its characteristic maps in step 1.1, without treating singular degeneracies as zero. The assumed AC is used only through [F1] and [F3], as their statements record; the finite CW maps and product restrictions require no additional choice. [F1, F3, F5, step 1.1, step 2.1, step 3.1, step 4.1] ∎
