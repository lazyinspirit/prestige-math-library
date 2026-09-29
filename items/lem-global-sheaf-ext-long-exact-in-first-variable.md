---
id: lem-global-sheaf-ext-long-exact-in-first-variable
kind: lemma
title: Long exact global sheaf Ext sequence in the first variable
status: draft
origin: pipeline
landmark: false
deps:
  - def-sheaf-ext-for-coherent-modules
  - def-ext-via-an-injective-resolution-of-the-second-variable
  - def-injective-object
  - thm-long-exact-sequence-in-cohomology
  - thm-injective-comparison-map-exists
  - thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy
  - lem-ringed-space-module-sheaves-enough-injectives
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: "§27, Lemmas 27.1 and 27.4-27.5, Remarks 27.2-27.3, 27.6"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Classes 53-54"
      url: https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf
      locator: "Class 53 §§1-5, especially the presentation and Ext yoga"
---

## Statement

Assume the Axiom of Choice. Let $(Y,\mathcal O_Y)$ be a ringed space whose
structure sheaf is commutative, let
$$0\longrightarrow\mathcal F'\longrightarrow\mathcal F\longrightarrow\mathcal F''\longrightarrow0$$
be a short exact sequence of $\mathcal O_Y$-modules and let $\mathcal G$ be an
$\mathcal O_Y$-module. Then the injective-resolution global Ext of
[[def-sheaf-ext-for-coherent-modules]] fits into a natural long exact sequence
$$\cdots\to\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F'',\mathcal G)\to\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F,\mathcal G)\to\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F',\mathcal G)\xrightarrow{\partial^q}\operatorname{Ext}^{q+1}_{\mathcal O_Y}(\mathcal F'',\mathcal G)\to\cdots$$
beginning in degree zero with
$$0\to\operatorname{Hom}_{\mathcal O_Y}(\mathcal F'',\mathcal G)\to\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,\mathcal G)\to\operatorname{Hom}_{\mathcal O_Y}(\mathcal F',\mathcal G)\xrightarrow{\partial^0}\operatorname{Ext}^1_{\mathcal O_Y}(\mathcal F'',\mathcal G).$$
The sequence is natural in the short exact sequence and in $\mathcal G$; it is
made from one fixed $\mathcal O_Y$-injective resolution of $\mathcal G$, and the
resulting connecting maps do not depend on that choice. No claim is made here
about a long exact sequence in the second variable, about vanishing of
$\operatorname{Ext}^q$ for $q>0$, or about splitting.


## Facts & Assumptions

**Given:** a ringed space $(Y,\mathcal O_Y)$ with commutative structure sheaf,
a short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ of
$\mathcal O_Y$-modules, and an $\mathcal O_Y$-module $\mathcal G$.

[F1] An object $I$ of an abelian category is injective when for every
monomorphism $m:M\rightarrowtail E$ and every morphism $f:M\to I$ there is a
morphism $\widetilde f:E\to I$ with $\widetilde f m=f$. ([[def-injective-object]])

[F2] A short exact sequence of cochain complexes in an abelian category yields
a natural long exact sequence in cohomology, with connecting maps
$H^n(C)\xrightarrow{\partial^n}H^{n+1}(A)$.
([[thm-long-exact-sequence-in-cohomology]])

[F3] For supplied injective-resolution data $I$ the complex $C_I^\bullet(M,N)$
has $q$th term $\operatorname{Hom}_{\mathcal A}(M,I^q(N))$ and differential
$d^q_I(f)=d^q_{I(N)}\circ f$, and its cohomology is
$\operatorname{Ext}^n_I(M,N)$. ([[def-ext-via-an-injective-resolution-of-the-second-variable]])

[F4] For an $\mathcal O_Y$-module $\mathcal G$ and a supplied injective
resolution $\mathcal G\to I^\bullet$ one sets
$\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F,\mathcal G)=H^q(\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^\bullet))$;
the coaugmentation identifies
$\operatorname{Ext}^0_{\mathcal O_Y}(\mathcal F,\mathcal G)\cong\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,\mathcal G)$,
and comparison maps and homotopies make all of this independent of the
supplied resolution. ([[def-sheaf-ext-for-coherent-modules]])

[F5] Any two coaugmentation-preserving maps between injective resolutions
extending the same object morphism are cochain-homotopic.
([[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]])

[F6] The declared Axiom of Choice implies the Dependent Choice hypothesis of
the published injective-comparison existence and uniqueness theorems.
([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[thm-injective-comparison-map-exists]])

## Proof

1.1 Using AC and the in-run theorem `lem-ringed-space-module-sheaves-enough-injectives` of the cohomology-of-quasi-coherent-sheaves pair, which supplies an $\mathcal O_Y$-injective resolution for every $\mathcal O_Y$-module, fix one such resolution $\mathcal G\to I^\bullet$; by [F3] applied in the abelian category of $\mathcal O_Y$-modules the complex $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^\bullet)$ has $q$th term $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^q)$ and differential $d^q\circ(-)$, and by [F4] its $q$th cohomology is $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F,\mathcal G)$. [F3, F4, given]

1.2 For every $p$ the module $I^p$ is injective, so by [F1] every morphism $M\to I^p$ defined on a subobject of $E$ extends to $E$; applying this to the subobject $\mathcal F'\subseteq\mathcal F$ gives exactness of $0\to\operatorname{Hom}(\mathcal F'',I^p)\to\operatorname{Hom}(\mathcal F,I^p)\to\operatorname{Hom}(\mathcal F',I^p)\to0$: surjectivity of the last map is the extension property applied to $\mathcal F'\subseteq\mathcal F$, injectivity of the first is immediate from the epimorphism $\mathcal F\to\mathcal F''$, and exactness in the middle follows because a morphism $\mathcal F\to I^p$ killing $\mathcal F'$ factors through the quotient $\mathcal F/\mathcal F'\cong\mathcal F''$. [F1, given]

2.1 The three complexes $\operatorname{Hom}(\mathcal F'',I^\bullet)$, $\operatorname{Hom}(\mathcal F,I^\bullet)$ and $\operatorname{Hom}(\mathcal F',I^\bullet)$ are concentrated in degrees $q\ge0$, their differentials are post-composition with the differential $d^q$ of $I^\bullet$, so the degreewise exact sequence of step 1.2 commutes with those differentials; hence $0\to\operatorname{Hom}(\mathcal F'',I^\bullet)\to\operatorname{Hom}(\mathcal F,I^\bullet)\to\operatorname{Hom}(\mathcal F',I^\bullet)\to0$ is a short exact sequence of cochain complexes. [F3, step 1.1, step 1.2]

3.1 By [F2] the sequence of step 2.1 has a natural long exact sequence $\cdots\to H^q(\operatorname{Hom}(\mathcal F'',I^\bullet))\to H^q(\operatorname{Hom}(\mathcal F,I^\bullet))\to H^q(\operatorname{Hom}(\mathcal F',I^\bullet))\xrightarrow{\partial^q}H^{q+1}(\operatorname{Hom}(\mathcal F'',I^\bullet))\to\cdots$, and substituting the identification of [F4] turns its terms into $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F'',\mathcal G)$, $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F,\mathcal G)$ and $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F',\mathcal G)$. [F2, F4, step 2.1]

4.1 Since the complexes are concentrated in degrees $q\ge0$, the terms $H^{-1}$ in the long exact sequence of step 3.1 vanish, so the sequence begins $0\to H^0(\operatorname{Hom}(\mathcal F'',I^\bullet))\to H^0(\operatorname{Hom}(\mathcal F,I^\bullet))\to H^0(\operatorname{Hom}(\mathcal F',I^\bullet))\to H^1(\operatorname{Hom}(\mathcal F'',I^\bullet))\to\cdots$; by the degree-zero clause of [F4] the first three terms are $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F'',\mathcal G)$, $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,\mathcal G)$ and $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F',\mathcal G)$, which is the displayed beginning of the statement. [F2, F4, step 3.1]

5.1 Naturality in $\mathcal G$ and resolution independence hold as follows: a morphism $u:\mathcal G\to\mathcal G'$ with injective resolutions $I^\bullet$, $J^\bullet$ admits a coaugmentation-preserving comparison map $I^\bullet\to J^\bullet$ extending $u$ by [F6], and post-composition with it is a cochain map $\operatorname{Hom}(\mathcal F,I^\bullet)\to\operatorname{Hom}(\mathcal F,J^\bullet)$ inducing maps on cohomology that intertwine the connecting maps of [F2]; two choices of comparison map are cochain-homotopic by [F5], whose Dependent Choice hypothesis is licensed by [F6], so the induced maps on cohomology agree and the sequence depends on $\mathcal G$ and not on the resolution. [F2, F4, F5, F6, step 4.1]

6.1 Naturality in the short exact sequence holds because a morphism of short exact sequences of $\mathcal O_Y$-modules induces a morphism of the degreewise exact sequences of complexes built in step 2.1, and [F2] provides the induced morphism of long exact sequences; the connecting maps $\partial^q$ are then those supplied by [F2] composed with the identifications of [F4]. The statement claims the long exact sequence and its naturality, and no splitting or vanishing beyond degree zero, so nothing further is asserted. [F2, F4, step 3.1, step 5.1, discharge-construct] ∎
