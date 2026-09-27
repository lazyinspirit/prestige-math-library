---
id: def-khovanov-seidel-positive-and-negative-twist-complexes
kind: definition
title: "The twist complexes R_i and R_i^{-1}"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-khovanov-seidel-beta-and-gamma-bimodule-maps, def-two-sided-projective-khovanov-seidel-bimodule-functors, def-bounded-projective-homotopy-category-for-a-m, def-signed-totalization-of-graded-a-m-bimodule-actions, lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m, def-mapping-cone-of-a-chain-map, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, def-graded-khovanov-seidel-module-category-and-projectives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2d, printed pp. 11-12"
      url: "https://arxiv.org/pdf/math/0006056"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Definition

Fix $m\ge1$, let $A_m$ be the Khovanov–Seidel type A algebra, let
$U_i=P_i\otimes_{\mathbb Z}{}_iP$ be the graded $(A_m,A_m)$-bimodule of
[[def-two-sided-projective-khovanov-seidel-bimodule-functors]] and let
$\beta_i:U_i\to A_m$ and $\gamma_i:A_m\to U_i\{-1\}$ be the degree-zero
bimodule maps of [[def-khovanov-seidel-beta-and-gamma-bimodule-maps]]. Write
$C_m=K^b(\operatorname{proj}^{gr}A_m)$ for the bounded homotopy category of
[[def-bounded-projective-homotopy-category-for-a-m]], and view $U_i$, $A_m$ and
$U_i\{-1\}$ as complexes concentrated in homological degree $0$.

**The positive twist.** Let
$$R_i:=\bigl[\,U_i\xrightarrow{\ \beta_i\ }A_m\,\bigr]$$
be the two-term cochain complex of graded $(A_m,A_m)$-bimodules with
$R_i^{-1}=U_i$, $R_i^{0}=A_m$ and zero in all other homological degrees, so that
$A_m$ sits in homological degree $0$ and the differential is $\beta_i$. That is,
$R_i$ is the mapping cone $\operatorname{Cone}(\beta_i)$ of
[[def-mapping-cone-of-a-chain-map]] of the map $\beta_i$ between complexes
concentrated in degree $0$, as verified below.

**The negative twist.** Let
$$R_i^{-1}:=\bigl[\,A_m\xrightarrow{\ \gamma_i\ }U_i\{-1\}\,\bigr]$$
be the two-term cochain complex of graded $(A_m,A_m)$-bimodules with
$(R_i^{-1})^{0}=A_m$, $(R_i^{-1})^{1}=U_i\{-1\}$ and zero elsewhere, so that here
$A_m$ again sits in homological degree $0$, the term $U_i\{-1\}$ sits in
homological degree $1$, and the differential is $\gamma_i$. This is the source's
presentation of the negative twist: the mapping cone
$\operatorname{Cone}(-\gamma_i)$ of $-\gamma_i$ between complexes concentrated in
degree $0$, shifted by $[-1]$, which has
$\operatorname{Cone}(-\gamma_i)^{-1}=U_i\{-1\}^{-1}\oplus A_m^{0}=A_m$,
$\operatorname{Cone}(-\gamma_i)^{0}=U_i\{-1\}^{0}\oplus A_m^{1}=U_i\{-1\}$ and
differential $-\gamma_i$, so that the shift convention $d_{X[-1]}=-d_X$ returns
the terms and the differential $\gamma_i$ displayed above, as verified below.
The internal shift $\{-1\}$ in the second term is internal and not homological:
it moves internal degrees only, and the differential $\gamma_i$ is degree zero
for the internal grading because the shift absorbs the degree one of
$\gamma_i(1)$.

**Claims proved below.** Both $R_i$ and $R_i^{-1}$ are bounded complexes of
graded $(A_m,A_m)$-bimodules whose differentials are degree-zero bimodule maps,
every term of either complex is a finitely generated graded projective
$A_m$-module on the left and on the right, and consequently the signed
totalizations $R_i\otimes_{A_m}-$ and $R_i^{-1}\otimes_{A_m}-$ of
[[def-signed-totalization-of-graded-a-m-bimodule-actions]] are exact
endofunctors of $C_m$, identified with the derived tensor products, by
[[lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m]].

**Scope.** This item defines the two complexes and their actions and nothing
else: no inverse, braid-relation or equivalence claim is made here. That
$R_i$ and $R_i^{-1}$ are mutually inverse equivalences is the source's
Proposition 2.4 and belongs to the later stage of the construction.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the algebra $A_m$ with internal grading and the internal shift $\{r\}$, the bimodules $U_i$ and maps $\beta_i,\gamma_i$, and the category $C_m$ with its homological shift $[1]$ and its cones.

[L1] $\beta_i:U_i\to A_m$ is the multiplication map and a degree-zero map of graded $(A_m,A_m)$-bimodules with $\beta_i(e_i\otimes e_i)=e_i$, and $\gamma_i:A_m\to U_i\{-1\}$ is a degree-zero map of graded $(A_m,A_m)$-bimodules with $\gamma_i(1)=w_i$ and $\gamma_i(a)=a\cdot w_i$ ([[def-khovanov-seidel-beta-and-gamma-bimodule-maps]]).

[L2] $U_i=P_i\otimes_{\mathbb Z}{}_iP$ is finite graded projective as a left $A_m$-module and as a right $A_m$-module, and $U_i\otimes_{A_m}-$ is exact on $A_m\text{-mod}$ and preserves finite graded projectives ([[def-two-sided-projective-khovanov-seidel-bimodule-functors]]).

[L3] A graded left $A_m$-module is finite graded projective exactly when it is a degree-zero direct summand of a finite direct sum of internal shifts of $A_m$, and shifting such a direct summand internally again gives a degree-zero direct summand of a finite direct sum of shifts; $A_m$ itself is free of rank one on $1=\sum_je_j$ ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]], [[def-graded-khovanov-seidel-module-category-and-projectives]]).

[L4] For a chain map $f:X\to Y$ of complexes the cone is $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ with $d(y,x)=(d_Yy+fx,-d_Xx)$, and a bounded complex of graded left $A_m$-modules is an object of $C_m$ exactly when every term is a finite graded projective left $A_m$-module, with $[1]$ the homological shift ([[def-mapping-cone-of-a-chain-map]], [[def-bounded-projective-homotopy-category-for-a-m]]).

[L5] A bounded complex $R^\bullet$ of graded $(A_m,A_m)$-bimodules whose terms are finitely generated graded projective on both sides satisfies: $R^\bullet\otimes_{A_m}X\in C_m$ for every $X\in C_m$; $R^\bullet\otimes_{A_m}-$ is an exact additive functor on $C_m$ sending distinguished triangles to distinguished triangles; and it agrees with the derived tensor product, the identity replacements being available ([[lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m]]).




## Proof

**Proof technique:** direct.

1.1 *$R_i$ is a complex with a degree-zero bimodule differential.* The complex has exactly two nonzero terms and $\beta_i$ is a degree-zero map of graded $(A_m,A_m)$-bimodules by [L1]; the composite $\beta_i$ with the zero map $A_m\to R_i^{1}=0$ is $0$, so $d^0d^{-1}=0$ and the differentials square to zero, and $R_i$ is a bounded complex of graded bimodules in the sense of [L4] with differential of internal degree zero. [L1, L4]

1.2 *$R_i^{-1}$ is a complex with a degree-zero bimodule differential.* Likewise $(R_i^{-1})^n$ is nonzero only for $n=0,1$, where the two terms are $A_m$ and $U_i\{-1\}$, the differential $\gamma_i$ is a degree-zero bimodule map by [L1] with values in $U_i\{-1\}$, and the composite with the zero map $U_i\{-1\}\to R_i^{-1}{}^{2}=0$ is $0$; hence $R_i^{-1}$ is a bounded complex of graded bimodules with degree-zero differential. [L1, L4]

1.3 *Every term is finitely generated graded projective on both sides.* The regular module $A_m$ is free of rank one on each side, hence finitely generated graded projective on the left and on the right by [L3]; the bimodule $U_i$ is finitely generated graded projective on both sides by [L2]; and the internal shift $U_i\{-1\}$ of the finitely generated graded projective $U_i$ is again such a direct summand of a finite sum of shifts, hence finitely generated graded projective on both sides by [L3]. So all terms of $R_i$ and of $R_i^{-1}$ satisfy the two-sided hypothesis. [L2, L3]

2.1 *$R_i$ is the cone of $\beta_i$.* Regard $\beta_i$ as a chain map between the complexes $U_i$ and $A_m$ concentrated in homological degree $0$. By [L4] the cone has $\operatorname{Cone}(\beta_i)^{-1}=A_m^{-1}\oplus U_i^{0}=U_i$, $\operatorname{Cone}(\beta_i)^{0}=A_m^{0}\oplus U_i^{1}=A_m$ and $\operatorname{Cone}(\beta_i)^{n}=0$ for $n\ne-1,0$, with differential $d(y,x)=(d_{A_m}y+\beta_ix,-d_{U_i}x)=(\beta_ix,0)$; this is exactly $R_i$ with $A_m$ in degree $0$. [step 1.1, L1, L4]

2.2 *$R_i^{-1}$ is the shifted cone of $-\gamma_i$.* Regard $\gamma_i$ as a chain map $A_m\to U_i\{-1\}$ between complexes concentrated in degree $0$ and put $f:=-\gamma_i$. The cone of $f$ has $\operatorname{Cone}(f)^{-1}=U_i\{-1\}^{-1}\oplus A_m^{0}=A_m$, $\operatorname{Cone}(f)^{0}=U_i\{-1\}^{0}\oplus A_m^{1}=U_i\{-1\}$ and nothing else, with differential $d(y,x)=(f(x),0)$; shifting by $[-1]$, whose differentials are the negatives of those of $\operatorname{Cone}(f)$ by [L4], places $A_m$ in homological degree $0$ and $U_i\{-1\}$ in homological degree $1$ with differential $-f=\gamma_i$. This is exactly $R_i^{-1}$, the shift inside the second term being the internal one, and it is the source's description of the negative twist as the cone of $-\gamma_i$ shifted by $[-1]$; the sign isomorphism $(y,x)\mapsto(y,-x)$ identifies $\operatorname{Cone}(\gamma_i)$ with $\operatorname{Cone}(-\gamma_i)$, so the choice of sign is immaterial. [step 1.2, L1, L4]

2.3 *The associated functors.* By step 1.3 the terms of $R_i$ and of $R_i^{-1}$ are finitely generated graded projective on both sides, so the action lemma [L5] applies to both complexes: for every $X\in C_m$ the totalizations $R_i\otimes_{A_m}X$ and $R_i^{-1}\otimes_{A_m}X$ lie in $C_m$, the assignments are exact additive functors on $C_m$ carrying distinguished triangles to distinguished triangles, and they agree with the derived tensor products $R_i\otimes^{\mathbf L}_{A_m}X$ and $R_i^{-1}\otimes^{\mathbf L}_{A_m}X$ through the identity replacements. [step 1.3, L5]

3.1 *Conclusion.* The complexes $R_i=[U_i\xrightarrow{\beta_i}A_m]$ and $R_i^{-1}=[A_m\xrightarrow{\gamma_i}U_i\{-1\}]$, with $A_m$ in homological degree $0$ in both cases, are well-defined bounded complexes of graded $(A_m,A_m)$-bimodules with degree-zero differentials by steps 1.1 and 1.2, they are the cone of $\beta_i$ and the cone of $-\gamma_i$ shifted by $[-1]$ by steps 2.1 and 2.2, every term is finitely generated graded projective on both sides by step 1.3, and the resulting functors $R_i\otimes_{A_m}-$ and $R_i^{-1}\otimes_{A_m}-$ are exact endofunctors of $C_m$ agreeing with derived tensor by step 2.3. The two shifts occurring here are the internal shift inside a term and the homological degree of that term, and they are kept distinct; no inverse or braid relation is asserted, and no choice principle is used. [step 2.1, step 2.2, step 1.3, step 2.3] ∎
