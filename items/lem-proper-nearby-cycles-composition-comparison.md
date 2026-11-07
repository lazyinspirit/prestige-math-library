---
id: lem-proper-nearby-cycles-composition-comparison
kind: lemma
title: "A proper nearby-cycles comparison by derived composition"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $S$ be a strictly henselian Noetherian local trait with separably closed residue field, generic field $K$, and a specified separable closure $K^s$. Let $f:X\to S$ be proper, let $X_s$ be its closed fibre, and write $j_X:X_{K^s}\to X$, $j_S:\operatorname{Spec}K^s\to S$ and $i_X:X_s\to X$ for the canonical maps. Let $\mathcal F$ be an étale sheaf of $\mathbb Z/n$-modules on $X_{K^s}$. Suppose the displayed bounded-below derived functors and their composition maps exist, and assume explicitly that proper base change holds at the closed point for the particular torsion complex $Rj_{X*}\mathcal F$ on $X$. Then there is a canonical, $\operatorname{Gal}(K^s/K)$-equivariant isomorphism
$$R\Gamma(X_s,\,i_X^*Rj_{X*}\mathcal F)\;\cong\;R\Gamma(X_{K^s},\mathcal F).$$
The comparison is assumed for a complex on the original $X$; no descent of $Rj_*\mathcal F$ from a geometric trait is asserted. This lemma does not prove the proper-base-change hypothesis.

## Facts & Assumptions

**Given:** The trait, proper map, specified geometric generic point, torsion sheaf, derived-functor conventions and exact proper-base-change hypothesis in the Statement.

## Proof

1.1 Put $C=Rj_{X*}\mathcal F$. It is bounded below, and multiplication by $n$ is zero on its cohomology sheaves. Apply the assumed proper-base-change comparison to this particular complex at the closed point. Its right-hand side, after taking global sections of the geometric closed fibre, is $R\Gamma(X_s,i_X^*C)$; its left-hand side is the closed stalk of $Rf_*C$. [given, algebra]

2.1 The equality of scheme maps $f\circ j_X=j_S\circ f_{K^s}$ gives the derived-composition isomorphism [step 1.1]
$$Rf_*Rj_{X*}\mathcal F\cong Rj_{S*}Rf_{K^s*}\mathcal F.$$
Indeed inverse-image functors of the relevant étale topoi are exact, so their right adjoints preserve injective objects whenever the stated derived-functor construction uses them; the composition isomorphism is the assumed canonical one. [given, step 1.1, algebra]

3.1 On the small étale site of a strictly henselian local scheme, every covering family has a member with a section through the closed point: its residue point lifts uniquely by the henselian property. Thus global sections are exact and agree with the closed stalk. Taking that stalk in step 2.1 gives [step 2.1]
$$\bigl(Rj_{S*}Rf_{K^s*}\mathcal F\bigr)_s\cong R\Gamma(\operatorname{Spec}K^s,Rf_{K^s*}\mathcal F)\cong R\Gamma(X_{K^s},\mathcal F).$$
The second isomorphism is derived composition with the structure map to the specified geometric generic point. [given, step 2.1, algebra]

4.1 Combine the proper-base-change isomorphism of step 1.1 with steps 2.1 and 3.1. Every map is natural in automorphisms of $K^s/K$, so the resulting isomorphism is Galois equivariant. No assertion about the truth of the assumed proper-base-change comparison is made. [step 1.1, step 2.1, step 3.1, algebra] [step 3.1] ∎
