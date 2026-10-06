---
id: ex-the-trivial-one-braid-hhh-grading-normalization
kind: example
title: "The trivial one-braid and the grading normalization"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology, def-reduced-khovanov-rozansky-homology, def-khovanovs-hhh-rouquier-generator-complexes, def-termwise-hochschild-homology-complex-of-a-rouquier-complex, def-hochschild-chain-complex-of-a-bimodule, lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings, def-reduced-type-a-polynomial-ring-for-hhh, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3 (19 printed pages); printed pp. 9-10"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (37 printed pages); end of section 1, printed pp. 11-12"
      url: "https://arxiv.org/pdf/math/0505056v2"
verification:
  precheck: pass
---

## Example

Assume AC, inherited from the comparison theorem used to identify the grading dictionary.
Let $\sigma_*$ be the trivial braid on one strand: $m=1$ and the reduced ring
of [[def-reduced-type-a-polynomial-ring-for-hhh]] is $R=\mathbb Q$ (there are
no differences), so the generator complex of
[[def-khovanovs-hhh-rouquier-generator-complexes]] is the unit complex
$F(\sigma_*)=R=\mathbb Q$ concentrated in cohomological degree $0$. Hence
$$HHH^{0,0,0}(\sigma_*)=\mathbb Q,\qquad HHH^{c,h,p}(\sigma_*)=0\ \text{otherwise},$$
and the one-strand class sits in tridegree $(h,p,c)=(0,0,0)$. On the
Khovanov-Rozansky side the reduced homology of the unknot is one-dimensional
([[def-reduced-khovanov-rozansky-homology]]), and its class sits in the raw
tridegree $(k,l,j)=(-1,1,0)$ of
[[def-khovanov-rozansky-complex-and-trigraded-braid-homology]] before the
correction. Therefore the global correction $(k,l)\mapsto(k+1,l-1)$ of
[[lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings]]
sends this class to $(0,0,0)$, and the dictionary $k=-h$, $l=p-h$, $j=c$ maps
$(0,0,0)$ to $(0,0,0)$; both theories have their one-strand generator in
tridegree $(0,0,0)$, exactly as the source records. This fixes the global
constant in the trigrading dictionary and is the base case of the comparison
of
[[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology]].

Caveats: the correction is a one-time global shift of the Khovanov-Rozansky
trigrading, not a per-diagram normalization; the raw first bigrading $-1$ comes from the universal $(a,0)$ row;
after the correction it is $k=-h=0$; the unreduced theory
keeps the trivial $\mathbb Q[x]$-tower and is not one-dimensional, so the
identification is made in the reduced theory.

## Facts & Assumptions

**Given:** the trivial one-strand braid $\sigma_*$, the reduced ring $R=\mathbb Q$, the unit complex $F(\sigma_*)=\mathbb Q$, and the reductions and dictionary of the cited items.

[L1] For $m=1$ the reduced ring is $R=\mathbb Q$ with no simple reflections, and the generator complex of the trivial braid is the unit complex $R$ concentrated in cohomological degree $0$ ([[def-reduced-type-a-polynomial-ring-for-hhh]], [[def-khovanovs-hhh-rouquier-generator-complexes]]).

[L2] In Hochschild degree $h$, the termwise Hochschild complex of a coefficient complex concentrated in cohomological degree $0$ is the single graded vector space $HH_h(R,M)$; the Hochschild chain complex has $C_0(R,M)=M$ and $C_h(R,M)=M\otimes_{\mathbb Q}R^{\otimes_{\mathbb Q}h}$ with the alternating boundary, and $HH_0(R,M)$ is the coinvariant quotient $M/\langle rm-mr\rangle$ ([[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]], [[def-hochschild-chain-complex-of-a-bimodule]]).

[L3] The reduced Khovanov-Rozansky homology is the construct of the reduced label ring with the coefficient $a$ retained; in its raw trigrading the one-strand class of the reduced unknot sits in tridegree $(-1,1,0)$, whose image under the global correction $(1,-1,0)$ is the class $(0,0,0)$; the unreduced theory is $H(D)\cong\overline H(D)\otimes_{\mathbb Q}\mathbb Q[x]$ with the trivial variable $x$ ([[def-reduced-khovanov-rozansky-homology]]).

[L4] The comparison identifies $HHH$ with the reduced theory by $k=-h$, $l=p-h$, $j=c$ after the global correction $(k,l)\mapsto(k+1,l-1)$, and the correction is fixed by the one-strand normalizations ([[lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings]], [[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology]]).



## Verification

**Proof technique:** direct.

1.1 Compute $HHH(\sigma_*)$. By [L1] the complex $F(\sigma_*)$ is $\mathbb Q$ in cohomological degree $0$; by [L2] the termwise complex in Hochschild degree $0$ is the single space $HH_0(\mathbb Q,\mathbb Q)=\mathbb Q/\langle rm-mr\rangle=\mathbb Q$, because $\mathbb Q$ is commutative, and the space $\mathbb Q$ has internal degree $0$. For $h\ge1$ the Hochschild chain groups are $C_h(\mathbb Q,\mathbb Q)=\mathbb Q$ and the alternating boundary acts on the one-dimensional space as the sum $\sum_{i=0}^h(-1)^i$, which is $1$ in characteristic zero for $h$ even and $0$ for $h$ odd; hence each boundary is either zero or an isomorphism and $HH_h(\mathbb Q,\mathbb Q)=0$ for all $h\ge1$. Thus the termwise complex is $\mathbb Q$ in cohomological degree $0$ and internal degree $0$, so $HHH(\sigma_*)=\mathbb Q$ in $(h,p,c)=(0,0,0)$. [L1, L2, given, algebra]

2.1 The Khovanov-Rozansky side and the correction. By [L3] the reduced unknot class of the one-strand diagram sits in the raw tridegree $(-1,1,0)$. The global correction $(k,l)\mapsto(k+1,l-1)$ moves it to $(k+1,l-1,j)=(0,0,0)$, and the dictionary of [L4] maps the HHH class $(h,p,c)=(0,0,0)$ to $(k,l,j)=(0,0,0)$: indeed $k=-h=0$, $l=p-h=0$ and $j=c=0$. Thus the two one-strand classes agree in the corrected trigrading. [L3, L4, step 1.1, algebra]

3.1 Fix the global constant. The dictionary is determined up to the global shift that carries the one-strand class of one theory to the class of the other; step 2.1 computes that shift to be exactly the correction $(k,l)\mapsto(k+1,l-1)$ used in the dictionary, so no further constant is available: any other correction would move the class $(0,0,0)$ away from itself and contradict the identification of the two one-dimensional classes. Caveat: the unreduced theory keeps the tower $\mathbb Q[x]\{-1,1\}$ and is not one-dimensional, so the normalization is a statement about the reduced theories. [L3, L4, step 2.1, algebra] ∎ 