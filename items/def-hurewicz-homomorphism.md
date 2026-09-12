---
id: "def-hurewicz-homomorphism"
kind: "definition"
title: "Absolute and relative Hurewicz homomorphisms"
status: published
origin: "pipeline"
proof_strategy: direct
pipeline_run: "phase-2-next-17"
deps: ["def-relative-homotopy-group","prop-cubical-and-spherical-models-of-higher-homotopy-agree","lem-relative-cubical-disk-model-and-compression","lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees","thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one","cor-homology-of-spheres","cor-contractible-nonempty-spaces-have-the-homology-of-a-point","thm-long-exact-sequence-of-a-pair-in-singular-homology","thm-singular-homology-satisfies-dimension-and-arbitrary-additivity","thm-singular-chain-homotopy-formula","lem-cubical-pinch-is-additive-on-relative-homology"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Proposition 4.36 and preceding definition; May Chapter 15 §1
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Definition

Fix positive orientation generators $[S^n]\in H_n(S^n;\mathbb Z)$ for $n\ge1$. The **absolute Hurewicz homomorphism** is
$$h:\pi_n(X,x_0)\longrightarrow H_n(X;\mathbb Z),\qquad h([f])=f_*[S^n],$$
where $f:(S^n,*)\to(X,x_0)$ represents the based class.

For $n\ge2$ and $x_0\in A\subseteq X$, orient $D^n$ and its boundary compatibly, and let $[D^n,S^{n-1}]$ be the unique class whose homology boundary is the positive boundary-sphere generator. The **relative Hurewicz homomorphism** is
$$h:\pi_n(X,A,x_0)\longrightarrow H_n(X,A;\mathbb Z),\qquad h([f])=f_*[D^n,S^{n-1}],$$
using the based disk model $(D^n,S^{n-1},s_0)\to(X,A,x_0)$.

Both maps are well-defined and natural in based maps and based maps of pairs, respectively. Reversing both indicated orientation generators multiplies both homomorphisms by the same sign $-1$. These definitions and their verification use no choice principle, no CW assumption on the target, and no local connectivity or separation assumption. The relative group assertion is only for $n\ge2$.

## Facts & Assumptions

[F1] [[def-relative-homotopy-group]], [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]], [[lem-relative-cubical-disk-model-and-compression]], [[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]] and [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]] provide the models, homotopies, and group laws in exactly the specified degree ranges.

[F2] [[cor-homology-of-spheres]] computes integral sphere homology. [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] and [[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]] give zero positive homology for a disk, and $H_0(*)=\mathbb Z$.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the exact sequence for every subspace pair.

[F4] [[thm-singular-chain-homotopy-formula]] gives the actual prism chain homotopy, whose simplices over a subspace remain in the target subspace for a homotopy of pairs.

[F5] [[lem-cubical-pinch-is-additive-on-relative-homology]] sends every degree-$n$ class to the sum of the two copies under the pinch representing the group law, for the absolute model $n\ge1$ and relative model $n\ge2$.

## Verification

**Given:** The indicated degree, based space or based pair, and supplied orientations. Coefficients below are $\mathbb Z$.

1.1 By [F2], $H_n(S^n)=\mathbb Z$ for $n\ge1$, so a supplied orientation specifies one of its two generators. A disk is contractible by the linear contraction to its center. For $n\ge2$, the pair sequence [F3] has the segment $$0=H_n(D^n)\longrightarrow H_n(D^n,S^{n-1})\xrightarrow{\partial}H_{n-1}(S^{n-1})\longrightarrow H_{n-1}(D^n)=0.$$ Hence $\partial$ is an isomorphism and there is exactly one relative generator with the prescribed oriented boundary. No generator is chosen over an unspecified family: the orientations are supplied and the inverse image is unique. [F2, F3, given]

1.2 The homotopy models in [F1] identify each stated representative and its based homotopies with the appropriate cubical class. If $H$ is a homotopy between two such representative maps of pairs, every prism simplex over a simplex in the source boundary lies in the target subspace, since $H$ is a homotopy of pairs. Thus the prism operator of [F4] sends the source subspace chain group into the target subspace chain group and descends to the relative quotients. Its identity $g_\#-f_\#=\partial P+P\partial$ implies equal induced maps on relative homology: on a cycle the difference is the boundary of its prism. The same calculation without quotienting proves the absolute assertion. Therefore the displayed pushforwards are independent of representative. This uses the actual arbitrary-space prism, not just homotopy invariance stated for CW targets. [F1, F4]

1.3 For every based space $(V,v)$ and $n\ge1$, the canonical map $j_V:H_n(V)\to H_n(V,\{v\})$ is an isomorphism. For $n>1$ this follows at once from [F2], [F3], since the point homology in adjacent positive degrees vanishes. For $n=1$, $H_1(*)=0$, and $H_0(*)\to H_0(V)$ is injective: postcompose the inclusion of the point with the unique map $V\to *$ to get the identity on the point, and then on its homology. Exactness in [F3] therefore again makes $j_V$ bijective. These isomorphisms commute with based maps, because inclusions and quotient chain maps commute with postcomposition on each singular simplex. This remains true when $V$ is disconnected. [F2, F3]

2.1 In the relative disk model, pull the class from step 1.1 back to the model $(Q,R)=(I^n/J,F/(F\cap J))$ along its fixed homeomorphism in [F1]. Apply [F5] to this class and to the two representative maps. Their concatenation represents the relative group product by [F1], so the resulting equality is $$h([f][g])=h([f])+h([g]).$$ The pinch identity holds for every class, so no orientation of a model homeomorphism is being silently substituted for the supplied orientation. The domain is a group for all $n\ge2$, including the potentially nonabelian degree-two case; its homomorphism into an abelian group is exactly what has been proved. [F1, F5, step 1.1, step 1.2]

2.2 For the absolute case, regard $f,g$ as maps of pairs $(S^n,*)\to(X,x_0)$ and apply [F5] to the class $j_{S^n}[S^n]$ in point-relative homology, using the absolute quotient model of [F1]. It gives $$j_X h([f][g])=j_X h([f])+j_X h([g]).$$ Step 1.3 makes $j_X$ injective, so the equality holds in $H_n(X)$ itself. This proves absolute additivity also for $n=1$, with no connectedness assumption on $X$. Constant maps factor through a point, which has zero positive homology by [F2], and in the relative case a constant map factors into the subspace and is zero already on the relative chain quotient. Thus identity classes map to zero, and the additive identity gives $h(a^{-1})=-h(a)$. [F1, F2, F5, step 1.2, step 1.3]

3.1 For a based map $u:X\to Y$, postcomposition on singular simplices gives $(uf)_*=u_*f_*$. Evaluating on the fixed sphere generator yields $h(u_*[f])=u_*h([f])$. The identical chain-map equality on relative quotients holds for maps of based pairs and the fixed disk class. Hence both maps are natural. If the sphere and relative disk orientation classes are replaced by their negatives, linearity gives $f_*(-\alpha)=-f_*\alpha$ in both formulas. This proves the common-sign assertion; no assertion of sign-free boundary compatibility for a different generator convention is implicit. [step 1.1, step 1.2, step 2.1, step 2.2]

4.1 A based space is nonempty, and a based pair has nonempty subspace, so there are no empty-domain basepoint instances. Degree zero is outside both definitions. The absolute degree-one case is covered by step 2.2 and the injective $H_0(*)$ argument in step 1.3; relative degree one has no group operation in [F1] and is not included. A singleton target and an equal pair $(X,X)$ give zero target groups in the positive degrees at issue. Zero classes, inverse classes and constant representatives have been checked explicitly. Supplied orientations, unique inverse images and the explicit prism/pinch maps use no choice principle. [F1, F2, step 1.1, step 1.3, step 2.1, step 2.2, step 3.1] ∎
