---
id: lem-normalization-factors-through-blowup-of-curve-point
kind: lemma
title: The finite normalization of a curve factors through the blowup of a closed point
status: published
origin: pipeline
deps: [lem-point-blowup-of-integral-curve-is-finite, thm-blowup-universal-property, def-blowup-scheme-along-ideal, thm-one-dimensional-regular-local-rings-are-dvrs, cor-serre-normality-criterion-two-directions, def-normal-noetherian-ring, def-coherent-module-scheme, thm-coherent-sheaves-abelian-noetherian-scheme, def-integral-scheme, def-axiom-of-choice, thm-equivalent-characterisations-of-a-dvr, cor-blowup-birational-integral-scheme, def-finite-morphism-schemes, thm-normalization-reduced-curve-exists-finite, def-effective-cartier-divisor]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-27.md; immutable carrier: research/frontier-38-owner-30-step5-hash-27-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-27 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, tag 0BI4 (Lemma 54.15.1)"
      url: https://stacks.math.columbia.edu/tag/0BI4
      locator: "Proof of Lemma 54.15.1: for a finite resolution f:X->Y and a singular closed point y, the ideal sheaf m_y O_X is invertible because the local rings of X are discrete valuation rings, so the universal property of the blowup gives X->Y_i; complete text retrieved and read 2026-10-03."
    - title: "The Stacks Project, tag 0BI5 (Lemma 54.15.2)"
      url: https://stacks.math.columbia.edu/tag/0BI5
      locator: "The strict transform sequence for Y inside an ambient Noetherian scheme is obtained from the intrinsic blowup sequence; complete text retrieved and read 2026-10-03."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $Y$ be an integral
Noetherian scheme of dimension one and let $\nu:Y^{\nu}\to Y$ be a finite
**normalization**: a finite birational morphism from a normal one-dimensional
scheme (for a reduced curve of finite type over a field this exists and is
finite by the normalization theory of curves
[[thm-normalization-reduced-curve-exists-finite]]). Let $p\in Y$ be a closed
point and let $\beta:Y_1=\operatorname{Bl}_pY\to Y$ be the blowup of $Y$ in $p$
([[def-blowup-scheme-along-ideal]]). Then $\beta$ is finite, and $\nu$ factors
uniquely through $\beta$: there is a unique $Y$-morphism
$\nu_1:Y^{\nu}\to Y_1$ with $\beta\circ\nu_1=\nu$. Consequently $Y^{\nu}$ is
also the normalization of $Y_1$, and the finite pushforward
$\beta_*\mathcal O_{Y_1}$ is naturally a coherent $\mathcal O_Y$-subalgebra of
$\nu_*\mathcal O_{Y^{\nu}}$. If $\mathcal O_{Y,p}$ is regular then $\beta$ is an
isomorphism and $\nu_1$ is the original normalization map under the
identification $Y_1=Y$.

## Facts & Assumptions

[F1] A normal one-dimensional local ring that is a domain is a discrete
valuation ring: a one-dimensional Noetherian local integrally closed domain is
a discrete valuation ring, and the local rings of a normal scheme are normal
domains ([[thm-equivalent-characterisations-of-a-dvr]],
[[cor-serre-normality-criterion-two-directions]],
[[def-normal-noetherian-ring]]).

[F2] Finiteness: the blowup $\beta$ is finite and restricts to an isomorphism
over $Y\setminus\{p\}$ ([[lem-point-blowup-of-integral-curve-is-finite]]); a
finite morphism is affine, and its pushforward of the structure sheaf is
coherent over the Noetherian base ([[def-finite-morphism-schemes]],
[[def-coherent-module-scheme]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]]).

[F3] Universal property: for a closed subscheme $Z=V(I)\subseteq X$, every
$X$-scheme $f:W\to X$ whose inverse image of $Z$ is an effective Cartier
divisor admits a unique $X$-morphism $W\to\operatorname{Bl}_IX$
([[thm-blowup-universal-property]]); an invertible ideal sheaf with nonzerodivisor
generators cuts out an effective Cartier divisor
([[def-effective-cartier-divisor]]).

[F4] The blowup of an integral scheme in a nonzero ideal is integral
([[cor-blowup-birational-integral-scheme]]).

[F5] The Axiom of Choice is assumed, inherited from the cited blowup,
finiteness and integral-closure suppliers; the only selection is that of the
given normalization $\nu$ ([[def-axiom-of-choice]]).

## Proof

**Given:** AC, an integral Noetherian one-dimensional scheme $Y$, a finite normalization $\nu:Y^{\nu}\to Y$, a closed point $p\in Y$ and the blowup $\beta:Y_1=\operatorname{Bl}_pY\to Y$.

1.1 The blowup $\beta$ is finite and is an isomorphism over $Y\setminus\{p\}$ by [F2]; in particular $\beta$ is affine and $\beta_*\mathcal O_{Y_1}$ is a coherent $\mathcal O_Y$-module. The scheme $Y^{\nu}$ is normal of dimension one, so each of its local rings is a discrete valuation ring or a field by [F1]. [F1, F2]

2.1 The normalization is integral with the same function field as $Y$. At a point $q$ above $p$, the map $\mathcal O_{Y,p}\to\mathcal O_{Y^{\nu},q}$ embeds both rings into that function field. The maximal ideal $\mathfrak m_p$ contains a nonzero element, whose image remains nonzero; its extended ideal is proper because the map of local rings is local. The point $q$ is closed, since the fibre of the finite morphism $\nu$ is zero-dimensional, and its normal local ring is therefore a DVR by step 1.1. Every nonzero ideal in a DVR is generated by a nonzerodivisor, so $\mathfrak m_p\mathcal O_{Y^{\nu},q}$ is principal and invertible. At points not over $p$ the pullback center ideal is the unit ideal. This coherent ideal is thus locally invertible everywhere: local stalk generators extend to neighbourhoods, and the equality with the principal ideal holds after shrinking because its cokernel is coherent. Its inverse-image subscheme is an effective Cartier divisor. [F1, F2, step 1.1, algebra]

3.1 By the universal property [F3] applied to the center $\{p\}\subseteq Y$ and the morphism $\nu:Y^{\nu}\to Y$ (whose inverse image of $p$ is effective Cartier by step 2.1), there is a unique $Y$-morphism $\nu_1:Y^{\nu}\to Y_1$ with $\beta\circ\nu_1=\nu$. This morphism is dominant: $\nu$ is surjective and $\beta$ is an isomorphism over $Y\setminus\{p\}$, so $\nu_1(Y^{\nu})\supseteq\beta^{-1}(Y\setminus\{p\})$, a nonempty open subset of the irreducible scheme $Y_1$ by [F4] and therefore dense. [F3, F4, step 1.1, step 2.1]

4.1 The morphism $\nu_1$ is finite: over an affine open $U=\operatorname{Spec}R\subseteq Y$, write $Y_1|_U=\operatorname{Spec}B$ and $Y^{\nu}|_U=\operatorname{Spec}C$ with $R\to B$ and $R\to C$ module-finite by [F2]; the factorization gives a ring map $B\to C$, and since $C$ is a finitely generated $R$-module with $R\subseteq B$ acting through $B\to C$, the ring $C$ is a finitely generated $B$-module; hence $\nu_1$ is affine with module-finite coordinate algebras, i.e. finite ([[def-finite-morphism-schemes]]). [F2, step 3.1]

4.2 Finally, if $\mathcal O_{Y,p}$ is regular, then $\beta$ is an isomorphism by [F2], and under the identification $Y_1=Y$ the unique factorization $\nu_1$ of $\nu$ through the identity is $\nu$ itself, by uniqueness in step 3.1; the two displayed clauses about the regular case follow. [F2, step 3.1]

5.1 The morphism $\nu_1$ is birational: $\nu$ is an isomorphism over a dense open $V\subseteq Y$ (birationality), and $\beta$ is an isomorphism over $Y\setminus\{p\}$ by [F2]; hence $\nu_1$ is an isomorphism over the dense open $\beta^{-1}(V\setminus\{p\})$ of $Y_1$ (here $V\setminus\{p\}$ is nonempty open in the one-dimensional irreducible scheme $Y$, hence dense). Since $Y_1$ is integral by [F4] and $Y^{\nu}$ is normal, $\nu_1$ is a finite birational morphism from a normal scheme onto the integral scheme $Y_1$. The affine coordinate ring $C$ of the source is the integral closure of the coordinate ring $B$ of $Y_1$ in their common function field: $C$ is integral over $B$ by finiteness, while every element integral over $B$ is also integral over $C$ and therefore belongs to the integrally closed ring $C$. Thus $\nu_1$ is the normalization of $Y_1$. [F4, step 1.1, step 3.1, step 4.1]

6.1 On an affine chart $V=\operatorname{Spec}B$ of the integral scheme $Y_1$, the inverse image under the finite birational normalization map is $\operatorname{Spec}C$. The map $B\to C$ is injective: localizing it at the generic point is the identified inclusion of the common function field, so any element in its kernel is zero in $\operatorname{Frac}(B)$ and hence zero in the domain $B$. Thus $\mathcal O_{Y_1}\hookrightarrow\nu_{1,*}\mathcal O_{Y^{\nu}}$. Applying the left exact pushforward along $\beta$ gives $\beta_*\mathcal O_{Y_1}\hookrightarrow\nu_*\mathcal O_{Y^{\nu}}$. Coherence follows from finiteness over the Noetherian base, establishing the claimed coherent subalgebra. [F2, F4, step 4.1, step 5.1]

7.1 Steps 1.1-6.1 and 4.2 prove: $\beta$ is finite; $\nu$ factors uniquely as $\beta\circ\nu_1$ with $\nu_1:Y^{\nu}\to Y_1$; $Y^{\nu}$ is a normalization of $Y_1$; and $\beta_*\mathcal O_{Y_1}$ is a coherent $\mathcal O_Y$-subalgebra of $\nu_*\mathcal O_{Y^{\nu}}$, with the regular case giving $\beta=\operatorname{id}_Y$ and $\nu_1=\nu$ under $Y_1=Y$. [F5, step 1.1, step 4.1, step 5.1, step 6.1, step 4.2] ∎
