---
id: thm-exceptional-divisor-normal-cone-proj
kind: theorem
title: "The exceptional divisor is the projectivized normal cone"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-exceptional-divisor-blowup
  - def-blowup-scheme-along-ideal
  - def-associated-graded-ring-and-module
  - def-rees-algebra-ideal-sheaf
  - def-relative-proj-quasi-coherent-graded-algebra
  - thm-relative-proj-base-change
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - lem-blowup-local-on-base-scheme
  - def-quasi-coherent-ideal-sheaf
  - def-base-change-morphism-schemes
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: "Compute the inverse image of the center affine-locally as the base change of the relative Proj of the Rees algebra to A/I, identify its graded algebra with the associated graded ring, and glue"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4 (tag 02OS), the identification I_E=O_{X'}(1) and the description of E on affine charts"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3.6 on the normal cone and projectivized tangent cone, pp. 388-389, and Exercise 19.3.B"
    - title: "The Stacks Project, Commutative Algebra, Section 10.70 (Blow up algebras)"
      url: "https://stacks.math.columbia.edu/tag/052P"
      locator: "Lemma 10.70.2 and the associated graded description of the exceptional fibre"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice, inherited from the relative Proj construction
([[def-axiom-of-choice]]). Let $Z=V(\mathcal I)$ be a closed subscheme of a
scheme $X$ cut out by a quasi-coherent ideal sheaf $\mathcal I$ of finite type
([[def-quasi-coherent-ideal-sheaf]]) and let $E=\pi^{-1}(Z)$ be the exceptional
subscheme of the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$
([[def-exceptional-divisor-blowup]]). Then there is a canonical isomorphism of
$Z$-schemes
$$E\longrightarrow\operatorname{Proj}_Z\Bigl(\operatorname{gr}_{\mathcal I}\mathcal O_X\Bigr)=\operatorname{Proj}_Z\Bigl(\bigoplus_{n\ge0}\mathcal I^n/\mathcal I^{n+1}\Bigr),$$
the projectivized normal cone of $Z$ in $X$. On an affine chart
$\operatorname{Spec}A$ with $\mathcal I=(f_0,\dots,f_r)$, the fibre of $E$
over a point $z$ of $Z$ is
$\operatorname{Proj}\bigl(\operatorname{gr}_I(A)\otimes_{A/I}\kappa(z)\bigr)$,
the projectivized fibre of the normal cone (for a closed point center this is
its projectivized tangent cone), and the closed immersion
$E\hookrightarrow\operatorname{Bl}_{\mathcal I}X$ identifies $E$ with the
divisor $V(a)$ in the chart $\operatorname{Spec}A[I/a]$.

## Facts & Assumptions

**Given:** A scheme $X$, a quasi-coherent ideal sheaf $\mathcal I$ of finite type with zero scheme $Z=V(\mathcal I)$, the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)\to X$ ([[def-blowup-scheme-along-ideal]]), the exceptional subscheme $E=\pi^{-1}(Z)=Z\times_X\operatorname{Bl}_{\mathcal I}X$ with ideal sheaf $\mathcal I\mathcal O_{\operatorname{Bl}}$ ([[def-exceptional-divisor-blowup]]), and the associated graded sheaf $\operatorname{gr}_{\mathcal I}\mathcal O_X =\bigoplus_{n\ge0}\mathcal I^n/\mathcal I^{n+1}$ ([[def-associated-graded-ring-and-module]]).

[F1] [[def-exceptional-divisor-blowup]]: The exceptional subscheme is the scheme-theoretic inverse image $E=Z\times_X\operatorname{Bl}_{\mathcal I}X$, with ideal sheaf the inverse image ideal $\mathcal I\mathcal O_{\operatorname{Bl}}$; it is a closed subscheme of the blowup mapping to $Z$.

[F2] [[thm-relative-proj-base-change]]: For a morphism $S'\to S$ and a quasi-coherent graded $\mathcal O_S$-algebra $\mathcal A$, there is a canonical isomorphism $\operatorname{Proj}_S\mathcal A\times_SS'\cong \operatorname{Proj}_{S'}(\mathcal A\otimes_{\mathcal O_S}\mathcal O_{S'})$, natural in the base and compatible with graded quotients; no flatness is needed.

[F3] [[def-rees-algebra-ideal-sheaf]] and [[def-associated-graded-ring-and-module]]: $\mathcal R(\mathcal I) =\bigoplus_{n\ge0}\mathcal I^n$, and the degree-$n$ piece of $\mathcal R(\mathcal I)/\mathcal I\mathcal R(\mathcal I)$ is $\mathcal I^n/\mathcal I^{n+1}$, so $\mathcal R(\mathcal I)/\mathcal I\mathcal R(\mathcal I) \cong\operatorname{gr}_{\mathcal I}\mathcal O_X$ as quasi-coherent graded $\mathcal O_X$-algebras; the identifications are compatible with restriction to open subschemes and with localisation.

[F4] [[lem-affine-blowup-algebra-properties]] and [[thm-affine-blowup-standard-charts]]: On the chart $\operatorname{Spec}A[I/a]\subseteq\operatorname{Bl}_I\operatorname{Spec}A$, for $a\in I$, one has $IA[I/a]=aA[I/a]$ with $a$ a nonzerodivisor, and the charts over a generating family cover the blowup.

[F5] [[lem-blowup-local-on-base-scheme]]: The blowup of $U\subseteq X$ is the restriction of the blowup of $X$, canonically over $U$.

## Proof

1.1 Let $U=\operatorname{Spec}A\subseteq X$ be affine with $\mathcal I|_U=\widetilde I$. Restricting the fibre product of [F1] to $U$ gives $E\times_XU=\operatorname{Spec}(A/I)\times_{\operatorname{Spec}A}\operatorname{Bl}_IU$, and $\operatorname{Bl}_IU=\operatorname{Proj}_A R(I)$; applying [F2] to the morphism $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ and the graded algebra $R(I)$ yields a canonical isomorphism $\operatorname{Proj}_A R(I)\times_{\operatorname{Spec}A}\operatorname{Spec}(A/I)\cong\operatorname{Proj}_{A/I}\bigl(R(I)\otimes_AA/I\bigr)$. [F1, F2, F5]

1.2 In the standard chart $\operatorname{Spec}A[I/a]$, $a\in I$, the ideal of $E$ is $\mathcal I\mathcal O_{\operatorname{Bl}}|_{\operatorname{chart}}=IA[I/a]=aA[I/a]$ by [F1] and [F4], so $E$ meets the chart in $V(a)$, and the charts over a generating family of $I$ cover the blowup by [F4]. [F1, F4]

2.1 By [F3] the graded $A/I$-algebra $R(I)\otimes_AA/I=R(I)/IR(I)$ has degree-$n$ piece $I^n/I^{n+1}$, so it is canonically $\operatorname{gr}_I(A)$; combining with step 1.1 gives a canonical isomorphism $E\times_XU\cong\operatorname{Proj}_{A/I}\operatorname{gr}_I(A)$ over $\operatorname{Spec}(A/I)$. [F3, step 1.1]

3.1 The isomorphisms of step 2.1 are canonical and compatible with restriction to smaller affine opens: for $A\to A_f$ both $\operatorname{Bl}$ and the associated graded construction localise, $I^nA_f/I^{n+1}A_f=(IA_f)^n/(IA_f)^{n+1}$, and the identifications of [F2] are natural; hence they glue over an affine cover of $X$ to a canonical isomorphism of $Z$-schemes $E\to\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_X)$, the projectivized normal cone. [F2, F3, F5, step 2.1]

4.1 For a point $z\in Z$, applying [F2] to the morphism $\operatorname{Spec}\kappa(z)\to Z$ and the graded $\mathcal O_Z$-algebra $\operatorname{gr}_{\mathcal I}\mathcal O_X$ identifies the fibre of $\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_X)$ over $z$, and hence the fibre of $E$ over $z$ by step 3.1, with $\operatorname{Proj}_{\kappa(z)}\bigl(\operatorname{gr}_I(A)\otimes_{A/I}\kappa(z)\bigr)$; for a closed point center, where $I=\mathfrak m$ is maximal, $\operatorname{gr}_{\mathfrak m}(A)=\bigoplus_{n\ge0}\mathfrak m^n/\mathfrak{m}^{n+1}$ is the associated graded ring of the local ring at the centre, so its Proj is the projectivized tangent cone. [F2, step 3.1]

5.1 Steps 2.1, 1.2 and 4.1 prove all the assertions: $E\cong\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_X)$ over $Z$, the fibre description over points of $Z$, and the identification of $E$ with the divisor $V(a)$ in each standard chart. [step 2.1, step 1.2, step 4.1] ∎

## Remarks

- The computation is the reason the exceptional divisor of a point blowup is a projective space: for a reduced point the associated graded of a regular local ring is a polynomial ring, so the projectivized tangent cone is projective space over the residue field.
- No regularity, Noetherianity or reducedness of $Z$ is assumed; the identification with the projectivized normal cone is purely a statement about the Rees algebra and its quotient by $\mathcal I$.
