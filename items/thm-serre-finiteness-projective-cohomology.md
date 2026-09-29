---
id: thm-serre-finiteness-projective-cohomology
kind: theorem
title: "Finite coherent cohomology for proper schemes"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-affine-scheme-quasi-compact
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-coherent-module-scheme
  - def-dependent-choice
  - def-finite-type-finite-presentation-module-sheaf
  - def-higher-direct-image-sheaf
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-proper-morphism
  - def-quasi-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - def-scheme
  - def-separated-morphism-schemes
  - def-sheaf-cohomology-derived-global-sections
  - lem-associated-sheaf-sections-basic-open
  - lem-distinguished-open-refinement-at-a-point
  - lem-higher-direct-image-affine-localization
  - lem-zero-in-a-localised-module
  - thm-affine-quasi-coherent-equivalence
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-finite-generation-and-finite-presentation-over-a-noetherian-ring
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - thm-proper-pushforward-coherent
  - thm-separatedness-gluing-overlap-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-dependent-choice]]), inherited from the
higher-direct-image and Čech-comparison suppliers cited below. Let $A$ be a
Noetherian commutative ring with $1$
([[def-locally-noetherian-and-noetherian-scheme]]), let
$f:X\to\operatorname{Spec}A$ be a proper morphism of schemes
([[def-proper-morphism]]) and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]). Then:

1. for every $q\ge0$ the $A$-module $H^q(X,\mathcal F)$ of sheaf cohomology
   ([[def-sheaf-cohomology-derived-global-sections]]) is finitely generated;
2. Choose a finite affine open cover of $X$ with no empty members when
   $X\ne\varnothing$, and use the empty cover when $X=\varnothing$. If $n$
   is its number of members, then $H^q(X,\mathcal F)=0$ for every $q\ge n$.

In particular $H^q(X,\mathcal F)=0$ for all sufficiently large $q$, with a
bound depending only on $X$ and not on $\mathcal F$; no projectivity of $f$, no
flatness and no bound on the Krull dimension of $A$ is assumed. The empty
source $X=\varnothing$, the zero sheaf $\mathcal F=0$, the zero ring $A=0$, the
degree $q=0$, the one-member case $n=1$ (a proper affine source) and the values
$n=0,1$ are included. The title retains "projective" from the design of this
page, while the theorem is stated and proved in the proper scope.

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a Noetherian commutative ring $A$, a proper morphism $f:X\to\operatorname{Spec}A$ and a coherent $\mathcal O_X$-module $\mathcal F$.

[F1] Properness unpacked: a proper morphism is separated, of finite type and universally closed; a morphism of finite type is quasi-compact; a quasi-compact morphism pulls quasi-compact open subsets back to quasi-compact open subsets; $\operatorname{Spec}A$ is quasi-compact; and every point of a scheme has an affine open neighbourhood, so affine opens form a basis. Hence $X$ is quasi-compact and has a finite affine open cover. For nonempty $X$, discard any empty members of such a cover and retain the resulting nonempty affine opens; for empty $X$, use the empty cover. Thus the chosen cover has no members in the empty case and at least one in the nonempty case. ([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]], [[cor-affine-scheme-quasi-compact]], [[def-scheme]], [[def-affine-open-subscheme]])

[F2] Affine intersections: for affine opens $U,V$ of a scheme separated over an affine base, $U\cap V$ is affine; by induction every intersection $U_I=\bigcap_{i\in I}U_i$ indexed by a nonempty finite set $I$ of members of a finite affine open cover of $X$ is affine, with ring of global sections $B_I:=\mathcal O_X(U_I)$, and if such an intersection is empty, it is the affine scheme $\operatorname{Spec}0$. ([[thm-separatedness-gluing-overlap-criterion]], [[def-separated-morphism-schemes]], [[def-affine-scheme-spectrum]])

[F3] Ordered Čech complex and its comparison with cohomology: for an ordered cover $\mathcal U=(U_0,\dots,U_r)$ of a space and a sheaf of abelian groups $\mathcal G$ one has $C^p(\mathcal U,\mathcal G)=\prod_{i_0<\cdots<i_p}\mathcal G(U_{i_0}\cap\cdots\cap U_{i_p})$ with the alternating-sum differential, $C^p=0$ for $p<0$ and for $p>r$, and $\delta^{p+1}\delta^p=0$; the cohomology of this complex is $\check H^p(\mathcal U,\mathcal G)$. For a quasi-compact separated scheme $X$, a finite affine open cover with affine intersections and a quasi-coherent $\mathcal G$, the canonical comparison $\check H^p(\mathcal U,\mathcal G)\to H^p(X,\mathcal G)$ is an isomorphism for every $p\ge0$. ([[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-open-cover]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[def-sheaf-cohomology-derived-global-sections]])

[F4] Higher direct images: for a quasi-compact separated morphism $f:X\to S$ and a quasi-coherent $\mathcal F$, each $R^qf_*\mathcal F$ is a quasi-coherent $\mathcal O_S$-module, and for an affine open $V=\operatorname{Spec}B\subseteq S$ there is a canonical isomorphism $(R^qf_*\mathcal F)|_V\cong\widetilde{H^q(f^{-1}V,\mathcal F)}$ with the associated sheaf of the $B$-module $H^q(f^{-1}V,\mathcal F)$; and if moreover $S$ is locally Noetherian, $f$ is proper and $\mathcal F$ is coherent, then each $R^qf_*\mathcal F$ is coherent. ([[def-higher-direct-image-sheaf]], [[lem-higher-direct-image-affine-localization]], [[thm-proper-pushforward-coherent]], [[def-associated-sheaf-module-affine-scheme]])

[F5] Finite type versus finite generation on an affine scheme: a coherent module is of finite type; for a Noetherian ring $B$ and a $B$-module $N$ the associated sheaf $\widetilde N$ on $\operatorname{Spec}B$ is of finite type if and only if $N$ is finitely generated, because finite type supplies a finite cover of $\operatorname{Spec}B$ by distinguished opens $D(b_i)$ with $N_{b_i}$ finitely generated, generators of $N_{b_i}$ are of the form $x/b_i^{k}$ with $x\in N$, the $b_i$ generate the unit ideal, and a submodule of $N$ whose localisations at all the $b_i$ vanish is zero, so those numerators generate $N$. ([[def-finite-type-finite-presentation-module-sheaf]], [[def-coherent-module-scheme]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[lem-associated-sheaf-sections-basic-open]], [[lem-distinguished-open-refinement-at-a-point]], [[thm-localisation-of-modules-commutes-with-quotients-and-sums]], [[lem-zero-in-a-localised-module]], [[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]])

[F6] The Axiom of Choice and the Axiom of Dependent Choice are the choice principles named in the statement. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Proof

**Proof technique:** direct: finiteness comes from the coherence of the higher direct images together with the affine localisation formula and the equivalence between finite type associated sheaves and finitely generated modules over the Noetherian base; vanishing comes from the bounded ordered Čech complex of a finite affine open cover, whose length is the number of members of the cover.

1.1 The cover. Since $f$ is proper it is separated and of finite type by [F1], hence quasi-compact, and $\operatorname{Spec}A$ is quasi-compact, so $X=f^{-1}(\operatorname{Spec}A)$ is quasi-compact. If $X=\varnothing$, take the empty cover and put $r=-1$, $n=0$. Otherwise take a finite affine open cover, discard any empty members, and reindex it as $U_0,\dots,U_r$; it still covers $X$, has $r\ge0$, and has $n=r+1\ge1$ members. [F1]

1.2 The intersections. For every nonempty finite subset $I\subseteq\{0,\dots,r\}$ the intersection $U_I:=\bigcap_{i\in I}U_i$ is affine, say $U_I=\operatorname{Spec}B_I$ with $B_I=\mathcal O_X(U_I)$, and if such an intersection is empty, it is the affine scheme $\operatorname{Spec}0$; in particular every $U_I$ maps into the affine base $\operatorname{Spec}A$. [F2]

1.3 The bounded Čech complex. The scheme $X$ is quasi-compact and separated by 1.1 and [F1], the cover is finite affine with affine intersections by 1.2, and the coherent $\mathcal F$ is quasi-coherent, so [F3] applies: the ordered Čech complex $K^\bullet:=C^\bullet(\mathcal U,\mathcal F)$ of $\mathcal U=(U_0,\dots,U_r)$ satisfies $K^p=0$ for $p<0$ and for $p>r$, and its cohomology computes the sheaf cohomology, $H^p(K^\bullet)\cong\check H^p(\mathcal U,\mathcal F)\cong H^p(X,\mathcal F)$ for every $p\ge0$. [F3, 1.1, 1.2]

1.4 Vanishing above the length of the cover. The complex $K^\bullet$ is concentrated in degrees $0,\dots,r$ by 1.3, so $H^p(K^\bullet)=0$ for every $p>r$, and therefore $H^p(X,\mathcal F)=0$ for every $p>r$; with $n=r+1$ when $X\neq\varnothing$ this is the assertion $H^p(X,\mathcal F)=0$ for $p\ge n$, and when $X=\varnothing$ one has $K^\bullet=0$ and all cohomology vanishes, so $H^p(X,\mathcal F)=0$ for every $p\ge0=n$. [1.3]

1.5 Finiteness in every degree. Since $A$ is Noetherian, $f$ is proper and $\mathcal F$ is coherent, [F4] shows that each $R^qf_*\mathcal F$ is a coherent $\mathcal O_{\operatorname{Spec}A}$-module; by [F4] again, applied to the affine open $\operatorname{Spec}A$, there is a canonical isomorphism $R^qf_*\mathcal F\cong\widetilde{H^q(X,\mathcal F)}$. Hence the associated sheaf $\widetilde{H^q(X,\mathcal F)}$ is coherent, hence of finite type by [F5], and since $A$ is Noetherian [F5] gives that $H^q(X,\mathcal F)$ is a finitely generated $A$-module. This holds for every $q\ge0$, in particular for $q=0$. [F4, F5, 1.1]

2.1 Boundaries and choice accounting. If $X=\varnothing$ the cover is empty and 1.4 gives $H^q(X,\mathcal F)=0$ for all $q\ge0$, which is finitely generated and has the asserted vanishing with $n=0$. If $\mathcal F=0$ then all cohomology vanishes and both claims hold for every cover. The zero ring $A=0$ is Noetherian and $\operatorname{Spec}0=\varnothing$, so $X=\varnothing$ and the empty case applies. The one-member case $n=1$ is a proper affine source: then $r=0$, and 1.4 gives $H^q(X,\mathcal F)=0$ for $q\ge1$, the classical affine vanishing consistent with 1.3. Degree $q=0$ is treated in 1.5 together with all other degrees; the vanishing bound $n$ is the number of members of a chosen cover, depends only on $X$, and is unaffected by $\mathcal F$. The Axiom of Choice [F6] is used for the finite affine cover of 1.1, the associated-sheaf and localisation machinery of [F5] and the higher-direct-image and Čech-comparison suppliers of [F3] and [F4]; the Axiom of Dependent Choice [F6] is inherited from those same suppliers and from the localisation and distinguished-open arguments of [F5]. [F3, F4, F5, F6, 1.1, 1.4, 1.5] ∎
