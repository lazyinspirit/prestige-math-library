---
id: lem-pointed-smooth-affine-elementary-curve-fibration
kind: lemma
title: "Pointed smooth affine varieties admit elementary curve fibrations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-integral-closure-finite-finite-type-domain-over-field
  - lem-normalization-isomorphism-over-normal-locus
  - thm-normal-variety-regular-in-codimension-one
  - lem-characteristic-free-pointed-hypersurface-transversality
  - lem-smooth-projective-curves-factor-through-etale-components
  - thm-proper-quasi-finite-is-finite
justified_by: []
proof_strategy: direct
axiom_use: "AC/DC are inherited from the finite étale component factorization."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XI, section 3, Proposition 3.3"
      url: "https://grothendiecksga.com/read/sga4/en/XI-3.html"
      locator: "The projection construction is reconstructed below; finite étale component factoring replaces the connected-section assertion."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be an algebraically closed field, let $X$ be a smooth integral affine $k$-scheme of dimension $n\geq1$, and let $F\subset X(k)$ be finite and nonempty. There are an open neighborhood $U\subset X$ of $F$, a smooth affine $k$-scheme $S$ of dimension $n-1$, a smooth projective $S$-curve $\overline U\to S$ with geometrically connected nonempty fibres, and a closed subscheme $D\subset\overline U$ finite étale and surjective over $S$, such that $U=\overline U\setminus D$ over $S$. The base may be disconnected. No characteristic-zero hypothesis is imposed.

## Facts & Assumptions

**Given:** The algebraically closed field, smooth integral affine variety and finite nonempty marked set in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The normalization of a finite-type domain over a field is finite and is an isomorphism over the normal locus. [[thm-integral-closure-finite-finite-type-domain-over-field]] [[lem-normalization-isomorphism-over-normal-locus]]

[F2] A normal variety over an algebraically closed field is regular in codimension one. [[thm-normal-variety-regular-in-codimension-one]]

[F3] Hypersurfaces through finitely many marked points can be chosen simultaneously transverse to finitely many smooth strata in every characteristic. [[lem-characteristic-free-pointed-hypersurface-transversality]]

[F4] A smooth projective curve family over a smooth base factors locally through a finite étale base indexing its geometrically connected fibre components. [[lem-smooth-projective-curves-factor-through-etale-components]]

[F5] A proper quasi-finite morphism is finite. [[thm-proper-quasi-finite-is-finite]]

## Proof

**Proof technique:** normalize a projective closure, project from a transverse finite centre, and factor the connected components.

1.1 Embed the affine integral $X$ in affine space and take its projective closure. Normalize the closure by gluing the finite affine normalizations in [F1]; the resulting integral normal projective scheme $\overline X$ contains $X$ as an open subscheme. Let $Y$ be its reduced boundary. The smooth locus contains $X$, and [F2] puts the singular locus in codimension at least two. By repeatedly taking smooth loci over the perfect field $k$, decompose $Y$ and the singular locus into finitely many smooth locally closed strata. For $n=1$, normalization is already a smooth projective curve with finite nonempty boundary; take its connected component containing $X$ over $S=\operatorname{Spec}k$. Henceforth $n\geq2$. [A1, F1, F2, given, choose, construct, algebra]

2.1 Choose a common degree $m$ large enough for all uses of [F3]. Successively choose $n-1$ degree-$m$ hypersurfaces through $F$, transverse to the current smooth strata. The strata containing marked points lie in $X$ and remain positive-dimensional during the choices; all other strata of dimension below the number of remaining cuts can be avoided. The resulting complete intersection $C$ is a smooth projective curve containing $F$, disjoint from the singular locus, and meeting $Y$ in a finite reduced set. It may be disconnected. Choose a further degree-$m$ hypersurface $H_0$ transverse to $C$ and avoiding both $F$ and $C\cap Y$, using these points as zero-dimensional avoidance strata in [F3]. Since each projective curve component has positive degree, $H_0$ meets it. Thus the common base locus $Z=C\cap H_0$ is finite, reduced and nonempty on every component, lies in $X$, and is disjoint from $F$. [A1, F3, step 1.1, choose, construct, algebra]

3.1 Use the degree-$m$ Veronese embedding so the chosen hypersurfaces are linear. Blow up the finite smooth centre $Z$ in $\overline X$. The $n$ sections generating its ideal after the common line-bundle twist give a surjection from a polynomial algebra to the correspondingly twisted Rees algebra; its relative Proj embeds the blowup as a closed subscheme of $\overline X\times\mathbb P_k^{n-1}$. Thus the linear system defines a projective morphism $\pi$ to $\mathbb P_k^{n-1}$. Its fibre above $v=[1:0:\cdots:0]$ is $C$: blowing up a smooth curve in its finite Cartier divisor $Z$ is an isomorphism. At every point of that fibre, the map is smooth. Away from $Z$ this is the differential-rank condition from transversality; at a centre point the chosen hypersurface equations are regular parameters $t_0,\ldots,t_{n-1}$, and in the blowup chart where the Rees generator $t_0T$ is nonzero the map has coordinates $t_i/t_0$, whose differentials are independent even on the exceptional divisor $t_0=0$. The boundary consists of the transform of $Y$ and the exceptional divisors. At the fibre it is finite étale: the first part follows from transversality to $Y$, and each exceptional divisor maps isomorphically to the base. Each component of $C$ meets the boundary through $Z$. [step 2.1, construct, algebra]

4.1 The map is projective, so the images of the closed non-smooth locus and of the closed boundary non-étale locus are closed. Remove them and shrink around $v$ to an affine open $V$. The resulting projective family is smooth, and its boundary is proper and étale, hence finite étale by [F5]; shrink once more to its open-and-closed image to make it surjective. Apply [F4] over $v$ and shrink $V$ as necessary: the family factors through a finite étale affine base $S\to V$ with geometrically connected fibres. The boundary remains finite étale after passing to the clopen component corresponding to the factorization. It meets every component of the fibre over $v$, so after retaining the relevant open-and-closed components of $S$ it is surjective. Removing the boundary recovers an open subscheme $U\subset X$ containing all of $F$, since the blowup is an isomorphism off $Z$ and $F$ avoids $Z$. The base $S$ is smooth affine of dimension $n-1$. [A1, F4, F5, step 3.1, construct, algebra] ∎
