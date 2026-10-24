---
id: def-bounded-projective-homotopy-category-for-a-m
kind: definition
title: "The bounded projective homotopy category C_m and the two shifts"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-khovanov-seidel-module-category-and-projectives, thm-the-khovanov-seidel-algebra-has-finite-homological-dimension, lem-bounded-finite-projective-model-for-khovanov-seidel-modules, def-homotopy-category-of-chain-complexes, def-shift-of-a-chain-complex, def-mapping-cone-of-a-chain-map, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, def-triangulated-category, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, def-finitely-generated-graded-projective-module, prop-bounded-derived-localizations-embed-fully-faithfully]
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
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2a-2c, printed pp. 9-11"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles Weibel, An Introduction to Homological Algebra, ch. 10 §10.4, pp. 387-390"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Fix $m\ge1$, let $A_m$ be the Khovanov–Seidel type A algebra and let
$A_m\text{-mod}$ be the abelian category of finitely generated graded left
$A_m$-modules and degree-zero maps of
[[def-graded-khovanov-seidel-module-category-and-projectives]]. Write
$\operatorname{proj}^{gr}A_m\subseteq A_m\text{-mod}$ for the full subcategory
of finite graded projective modules.

**The category $C_m$.** Let
$$C_m:=K^b(\operatorname{proj}^{gr}A_m)$$
be the full subcategory of the homotopy category $K(A_m\text{-mod})$ of cochain
complexes of [[def-homotopy-category-of-chain-complexes]] whose objects are the
bounded complexes $P$ with every term $P^n$ a finite graded projective left
$A_m$-module. Its morphisms are the homotopy classes of chain maps, and by the
bounded projective comparison theorem of
[[lem-bounded-finite-projective-model-for-khovanov-seidel-modules]] the
canonical functor $\Theta:C_m\to D^b(A_m\text{-mod})$ into the bounded derived
category $D^b(A_m\text{-mod})$ of
[[def-graded-khovanov-seidel-module-category-and-projectives]] is fully
faithful, and every bounded complex of $A_m$-modules is isomorphic in
$D^b(A_m\text{-mod})$ to the image of an object of $C_m$ built from the explicit
finite resolutions of
[[thm-the-khovanov-seidel-algebra-has-finite-homological-dimension]]. Claims
that $C_m$ is a triangulated category, that its shift, cone and Hom-collections
are those inherited from $K(A_m\text{-mod})$, and that the internal shift acts
on it as a functor are proved below; so each notation denotes.

**The two shifts.** The **homological shift** is the shift
$$(X[1])^n=X^{n+1},\qquad d_{X[1]}=-d_X$$
of [[def-shift-of-a-chain-complex]], with inverse $X\mapsto X[-1]$. The
**internal shift** is defined termwise by
$$(X\{r\})^n:=X^n\{r\},\qquad d_{X\{r\}}:=d_X ,$$
using the internal shift $M\{r\}$ of $A_m\text{-mod}$, whose components satisfy
$(M\{r\})_d=M_{d-r}$. Both shifts are functors on $C_m$ and are automorphisms
of it, and they are **different** functors: the homological shift moves the
homological position of every term, while the internal shift leaves every
homological position fixed and moves internal degrees. Concretely the complex
$P_i$ concentrated in homological degree $0$ has its single nonzero term in
degree $0$ while $P_i[1]$ has its single nonzero term in degree $-1$, whereas
$P_i\{1\}$ again has its single nonzero term in homological degree $0$; the
two shifts therefore cannot be identified, and every consumer of this page uses
$[1]$ for the triangulated shift of $C_m$ and $\{1\}$ for the internal shift.

**Cones.** For a chain map $f:X\to Y$ of $C_m$ the cone is the cone of
[[def-mapping-cone-of-a-chain-map]],
$$\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1},\qquad d(y,x)=(d_Yy+fx,-d_Xx),$$
which is again an object of $C_m$ and carries the distinguished triangles of
$C_m$.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the algebra $A_m$, the abelian category $A_m\text{-mod}$ of finitely generated graded left $A_m$-modules, and the full subcategory $\operatorname{proj}^{gr}A_m$ of finite graded projectives.

[F1] $K(\mathcal A)$ has the cochain complexes of an additive category $\mathcal A$ as objects and homotopy classes of chain maps as morphisms, and if $\mathcal A$ is abelian then $K(\mathcal A)$ is triangulated with the shift $C[1]_n=C_{n-1}$, $d^{C[1]}_n=(-1)^kd^C_{n-k}$ for $k=1$, and the distinguished cone triangles ([[def-homotopy-category-of-chain-complexes]], [[def-shift-of-a-chain-complex]], [[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]], [[def-triangulated-category]]).

[F2] $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ with $d(y,x)=(d_Yy+fx,-d_Xx)$, and $\operatorname{Cone}(f)$ is the third vertex of a distinguished triangle $X\xrightarrow{f}Y\to\operatorname{Cone}(f)\to X[1]$ ([[def-mapping-cone-of-a-chain-map]], [[def-triangulated-category]]).

[L3] $\Theta:K^b(\operatorname{proj}^{gr}A_m)\to D^b(A_m\text{-mod})$ is full and faithful, every bounded complex of $A_m$-modules is isomorphic in $D^b(A_m\text{-mod})$ to $\Theta(P)$ for one of the explicitly constructed bounded complexes $P$ of finite graded projectives, and the construction uses finitely many choices only ([[lem-bounded-finite-projective-model-for-khovanov-seidel-modules]]).

[L4] Every object of $A_m\text{-mod}$ has a finite graded projective resolution, and $\operatorname{pd}M\le2m+1$ uniformly; the resolutions come from the explicit staircase complexes ([[thm-the-khovanov-seidel-algebra-has-finite-homological-dimension]]).

[L5] $A_m\text{-mod}$ is abelian, its internal shift $M\{r\}$, $(M\{r\})_d=M_{d-r}$, is an automorphism of it, kernels and cokernels are computed degreewise, and exactness is degreewise ([[def-graded-khovanov-seidel-module-category-and-projectives]]).

[L6] A graded left $A$-module $P$ is finite graded projective if and only if it is a degree-zero direct summand of a finite direct sum of internal shifts $A\{r_1\}\oplus\cdots\oplus A\{r_n\}$; in particular a finite direct sum of finite graded projectives is finite graded projective ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[L8] The canonical functors $D^b(\mathcal A)\to D(\mathcal A)$ are fully faithful and exact, with essential image the complexes whose cohomology is bounded on both sides ([[prop-bounded-derived-localizations-embed-fully-faithfully]]).



## Proof

**Proof technique:** direct.

1.1 *$C_m$ is a full additive triangulated subcategory of $K(A_m\text{-mod})$.* By [F1] the category $K(A_m\text{-mod})$ is additive and triangulated, and $C_m$ is a full subcategory by definition, so it is additive with the inherited addition of homotopy classes and the zero complex. It is closed under the shift $[1]$: if $P$ is bounded with finite graded projective terms, then $P[1]$ has $(P[1])^n=P^{n+1}$, so it is bounded with the same terms. It is closed under cones: by [F2] the cone of a chain map $f:P\to Q$ of $C_m$ has $\operatorname{Cone}(f)^n=Q^n\oplus P^{n+1}$, a finite direct sum of finite graded projectives, hence finite graded projective by [L6], and it vanishes outside the finite interval spanned by the intervals of $P$ and $Q$, so it is bounded; the distinguished triangles of $C_m$ are the distinguished triangles of $K(A_m\text{-mod})$ whose three vertices lie in $C_m$, and [F1] transfers TR1, TR2 and TR3 to this full subcategory. [F1, F2, L6]

1.2 *The bounded projective comparison.* By [L3] the canonical functor $\Theta:C_m\to D^b(A_m\text{-mod})$ is full and faithful and every bounded complex of $A_m$-modules is isomorphic in $D^b(A_m\text{-mod})$ to $\Theta(P)$ for an explicitly constructed $P\in C_m$; by [L4] that construction exists for every bounded complex because every object of $A_m\text{-mod}$ has a finite graded projective resolution; by [L8] the Hom-collections of $D^b(A_m\text{-mod})$ and the exactness of its localizations are those of the comparison. Thus $\Theta$ is exact and fully faithful, and each target object has a projective replacement; the Hom-collections of $C_m$ are sets of homotopy classes of chain maps between sets of complexes. [L3, L4, L8]

2.1 *The internal shift acts on $C_m$.* Let $X$ be an object of $C_m$ and $r\in\mathbb Z$. The termwise assignment $(X\{r\})^n:=X^n\{r\}$ with differential $d_{X\{r\}}:=d_X$ is a cochain complex, because $d_X^n:X^n\to X^{n+1}$ is a degree-zero map between graded modules and the internal shift of a degree-zero map is a degree-zero map of the shifted modules, with $d^2=0$ inherited; it is bounded with finite graded projective terms because each $X^n\{r\}$ is finite graded projective by [L6] and $X^n$ vanishes outside the bounded interval. A chain map $f:X\to Y$ induces $f\{r\}:X\{r\}\to Y\{r\}$ termwise, the assignment preserves composition and identity, and it respects homotopies because a homotopy $h^n:X^n\to Y^{n-1}$ is a family of degree-zero maps and shifting the terms shifts each $h^n$; hence $\{r\}$ is a functor $C_m\to C_m$, with inverse $\{-r\}$ by [L5]. [step 1.1, L5, L6]

3.1 *The two shifts differ.* Let $P_i=A_me_i$ be a vertex projective concentrated in homological degree $0$, that is the complex with $P^0=P_i$ and $P^n=0$ for $n\ne0$, an object of $C_m$ because $P_i$ is finite graded projective by [L5]; the shift $P[1]$ has its single nonzero term in homological degree $-1$ with differential $d_{P[1]}=-d_P$, while $P\{1\}$ has its single nonzero term in homological degree $0$, namely the module $P_i\{1\}$ with $(P_i\{1\})_d=(P_i)_{d-1}$; the two complexes are therefore not equal, and no identification of the two shift functors is available on $C_m$. Both are automorphisms: $[1]$ by step 1.1 with inverse $[-1]$, and $\{1\}$ by step 2.1 with inverse $\{-1\}$. [step 1.1, step 2.1, L5]

4.1 *Conclusion.* $C_m=K^b(\operatorname{proj}^{gr}A_m)$ is an additive triangulated category whose shift $[1]$ and cones are inherited from $K(A_m\text{-mod})$ (step 1.1), whose internal shift $\{1\}$ is a different functor acting termwise with homological degree preserved (steps 2.1 and 3.1), and which has an exact, fully faithful comparison $\Theta$ to $D^b(A_m\text{-mod})$ with an explicit replacement for each target object (step 1.2). Every term of a complex $X$ in $C_m$ is a finite graded projective, so every Hom-set $\operatorname{Hom}_{C_m}(X,Y)$ is the homotopy classes of chain maps between two complexes of finite graded modules, a set; the internal shift is written $\{r\}$ and the homological shift $[r]$ throughout this page, and they are never identified. [step 1.1, step 2.1, step 3.1, step 1.2] ∎
