---
id: lem-proj-associated-sheaf-basic-sections
kind: lemma
title: "Sections of a graded-module sheaf on a standard open"
status: published
origin: pipeline
deps:
  - def-associated-sheaf-graded-module-proj
  - lem-proj-prime-localization-correspondence
  - def-standard-open-proj
  - lem-associated-sheaf-sections-basic-open
  - lem-standard-opens-proj-affine
  - def-quasi-coherent-module-scheme
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the existence theorem for the
associated sheaf of a module ([[def-axiom-of-choice]]). Let
$S=\bigoplus_{d\ge0}S_d$ be a commutative nonnegatively graded ring with
$\operatorname{Proj}S$ a scheme ([[thm-proj-structure-sheaf-scheme]]), let
$M=\bigoplus_{d\in\mathbb Z}M_d$ be a graded $S$-module, and let
$\widetilde M$ be its associated sheaf on $X=\operatorname{Proj}S$
([[def-associated-sheaf-graded-module-proj]]).

Then:

1. For every homogeneous $f\in S_+$ of positive degree there is a canonical
   identification
   $$\Gamma(D_+(f),\widetilde M)=M_{(f)}=(M[f^{-1}])_0,$$
   the degree-zero part of the homogeneous localisation of $M$ at $f$
   ([[def-associated-sheaf-graded-module-proj]]), and this identification is
   natural in $f$ and in $M$.
2. For homogeneous $f,g\in S_+$ of positive degrees the restriction
   $$\Gamma(D_+(f),\widetilde M)\longrightarrow\Gamma(D_+(fg),\widetilde M)$$
   is, under the identifications of (1), the degree-zero localisation
   $M_{(f)}\to M_{(fg)}$ induced by inverting $g$; it factors through the
   localisation of $M_{(f)}$ at $\tau_{f,g}=g^{\deg f}/f^{\deg g}$.
3. A homomorphism of graded $S$-modules $\varphi:M\to N$ of degree zero
   induces a morphism $\widetilde\varphi:\widetilde M\to\widetilde N$ of
   $\mathcal O_X$-modules whose component on $D_+(f)$ is the localisation
   $\varphi_{(f)}:M_{(f)}\to N_{(f)}$, and $M\mapsto\widetilde M$ is a functor.
4. $\widetilde M$ is a quasi-coherent $\mathcal O_X$-module
   ([[def-quasi-coherent-module-scheme]]).

The empty chart case is included: if $f$ is nilpotent then $D_+(f)=\varnothing$
and both sides of (1) are zero.

## Facts & Assumptions

**Given:** A commutative nonnegatively graded ring $S$ with $\operatorname{Proj}S$ a scheme $X$, a graded $S$-module $M$, homogeneous positive-degree elements $f,g\in S_+$, and the Axiom of Choice as inherited from the associated-sheaf existence theorem.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] For homogeneous $f\in S_+$ of positive degree the standard open $D_+(f)$ is an affine open chart and the canonical chart map $D_+(f)\to\operatorname{Spec}S_{(f)}$ is an isomorphism of schemes, with $S_{(f)}=(S[f^{-1}])_0$; for nilpotent $f$ the chart is empty. ([[lem-standard-opens-proj-affine]])

[F2] On the chart $D_+(f)=\operatorname{Spec}S_{(f)}$ the sheaf $\widetilde M$ restricts to the associated sheaf of the $S_{(f)}$-module $M_{(f)}$, and for every $h\in S_{(f)}$ one has $\Gamma(D(h),\widetilde{M_{(f)}})= (M_{(f)})_h$, with restriction maps the canonical localisations and with the identification natural in $h$ and in $M_{(f)}$. ([[def-associated-sheaf-graded-module-proj]], [[lem-associated-sheaf-sections-basic-open]])

[F3] $\tau_{f,g}=g^{\deg f}/f^{\deg g}\in S_{(f)}$ is well defined, and $D_+(fg)=D_+(f)\cap D_+(g)$ is the distinguished open $D(\tau_{f,g})$ of $\operatorname{Spec}S_{(f)}$. ([[lem-proj-prime-localization-correspondence]])

[F4] Localising the fraction description of $M_{(f)}$ at $\tau_{f,g}$ yields $(M_{(f)})_{\tau_{f,g}}=(M[f^{-1},g^{-1}])_0=M_{(fg)}$, and the two composites obtained from $M_{(f)}$ and from $M_{(g)}$ agree; the same holds on triple overlaps. ([[def-associated-sheaf-graded-module-proj]])

[F5] A sheaf $\mathcal F$ of $\mathcal O_X$-modules is quasi-coherent if every point has an affine open neighbourhood $U=\operatorname{Spec}A$ with $\mathcal F|_U\cong\widetilde{M}$ for some $A$-module $M$; the condition is local on $X$. ([[def-quasi-coherent-module-scheme]])

[F6] The standard opens $D_+(f)$, $f\in S_+$ homogeneous of positive degree, form a basis of the topology of $\operatorname{Proj}S$. ([[def-standard-open-proj]])

## Proof

**Proof technique:** direct: identify each chart with its affine spectrum, read off the section identifications from the affine associated-sheaf theorem, compare restriction maps through the localisations at $\tau_{f,g}$, and verify quasi-coherence chart by chart.

1.1 Sections on a chart. Fix $f\in S_+$ homogeneous of positive degree. By [F1] the chart $D_+(f)$ is isomorphic to $\operatorname{Spec}S_{(f)}$, and by [F2] the restriction of $\widetilde M$ to it is the associated sheaf of $M_{(f)}$. Applying [F2] with the unit section $h=1\in S_{(f)}$, whose distinguished open is all of $\operatorname{Spec}S_{(f)}$, gives $\Gamma(D_+(f),\widetilde M)=(M_{(f)})_1=M_{(f)}$, which is claim (1); the identification is the one specified on the chart, so it is canonical and natural in $M$ through the functoriality of [F2]. [F1, F2]

1.2 Functoriality on charts. A degree-zero homomorphism $\varphi:M\to N$ of graded $S$-modules induces $S_{(f)}$-linear maps $\varphi_{(f)}:M_{(f)}\to N_{(f)}$ commuting with the structure maps, hence morphisms of associated sheaves on each chart by [F2], and these glue because the identifications of [F1], [F2] are compatible on overlaps, as recorded in [F4]; composition and identities are respected because they are on localisations. This proves (3). [F2, F4, construct]

1.3 Restriction to a smaller chart. Let $g$ be homogeneous of positive degree. By [F3] the open $D_+(fg)$ is the distinguished open $D(\tau_{f,g})$ of $\operatorname{Spec}S_{(f)}$, so by [F2] applied to $h=\tau_{f,g}$ the restriction map $\Gamma(D_+(f),\widetilde M)\to\Gamma(D_+(fg),\widetilde M)$ is the localisation $(M_{(f)})\to(M_{(f)})_{\tau_{f,g}}$, and [F4] identifies its target with $M_{(fg)}$. Thus the restriction factors through the localisation at $\tau_{f,g}$ and agrees with the degree-zero localisation $M_{(f)}\to M_{(fg)}$; this is claim (2). [F2, F3, F4, algebra]

1.4 Compatibility on overlaps and the cocycle. For homogeneous positive-degree $f,g,h$ the same computation with $M_{(fg)}$ and the degree-zero element $h^{\deg f+\deg g}/(fg)^{\deg h}$ shows that the composite restriction $D_+(f)\to D_+(fg)\to D_+(fgh)$ equals the localisation $M_{(f)}\to M_{(fgh)}$ directly, and the analogous composites from $M_{(g)}$ and $M_{(h)}$ agree, since all of them are the canonical localisation map into the common localisation $(M[f^{-1},g^{-1},h^{-1}])_0$; the uniqueness of the identification in [F4] therefore gives the cocycle condition on triple overlaps. [F3, F4, algebra]

1.5 Quasi-coherence. The charts $D_+(f)$ with $f\in S_+$ homogeneous of positive degree form a basis of $X$ by [F6] and in particular cover $X$; on each chart $D_+(f)\cong\operatorname{Spec}S_{(f)}$ the sheaf $\widetilde M$ restricts to the associated sheaf of an $S_{(f)}$-module by [F2], and quasi-coherence is local by [F5]. Hence $\widetilde M$ is quasi-coherent, which is claim (4). [F2, F5, F6, construct]

1.6 Empty chart boundary. If $f$ is nilpotent then every prime contains $f$, so $D_+(f)=\varnothing$; then $S_{(f)}=0$ (the localisation of a ring at a nilpotent element is the zero ring) and hence $M_{(f)}=0$, while $\Gamma(\varnothing,\widetilde M)=0$ by the sheaf axiom, so the identification of (1) reads $0=0$ and remains valid; this also covers $S=0$ and the empty $S_+$. [F1, F2, cases: nilpotent or not]

2.1 Conclusion. Steps 1.1 and 1.2 give the natural section identifications of (1) and the functoriality of (3), step 1.3 gives the restriction description of (2), step 1.4 its cocycle compatibility, and step 1.5 gives quasi-coherence (4), empty charts included by step 1.6. The Axiom of Choice [A1] is inherited only through the affine associated-sheaf existence theorem [F2]; no choice is made in this argument. [A1, F2, step 1.1, step 1.3, step 1.5, step 1.6]
\qed
