---
id: lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity
kind: lemma
title: "Unique lc-place residue pushforward and subadjoint discriminant effectivity"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - thm-regular-local-ring-is-normal
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - def-axiom-of-choice
dependency_roles:
  lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing: mathematical-premise
  lem-normal-noetherian-domain-intersection-of-height-one-localizations: mathematical-premise
  thm-regular-local-ring-is-normal: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Kawamata, Subadjunction of Log Canonical Divisors for a Subvariety of Codimension 2, v1 proof of Theorem
      1 page 6; residue step constructed below
    url: https://arxiv.org/pdf/alg-geom/9511015v1
    locator: 'arXiv:alg-geom/9511015v1, complete printed pp. 1–7 read: Theorem 1; §1 Lemmas 2–3, Theorems 4 and
      6; proof of Theorem 1 p. 6. The affine klt replacement is not imported projectively.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity.md
dependency_level: 3
---

## Statement

Let X be a smooth integral projective complex variety, or a normal integral projective Gorenstein terminal complex threefold with isolated singularities, and let μ:Y→X be an actual proper smooth log resolution and G an effective rational divisor. In the terminal branch retain the supplied effective exceptional divisor with μ-ample negative required by the isolated-centre vanishing supplier; no arbitrary small-resolution claim is included. Let W⊂X be a reduced integral closed subvariety of codimension at least one. Suppose

    K_Y+E+F=μ^*(K_X+G),

where E is ONE smooth prime divisor mapping onto W, all coefficients of F are strictly below one, E is not in Supp F, and E∪Supp F∪Exc(μ) is SNC. Negative coefficients of F are assumed exceptional; this holds for the displayed log pullback because G is effective, with exceptional discrepancies handled by the actual resolution in either branch. Put P=ceil(−F). Thus P is effective integral exceptional and E is not a component of P.

Assume the already constructed isolated-centre ideal/relative-vanishing interface

    μ_*O_Y(P−E)=I_W,     R¹μ_*O_Y(P−E)=0.

The conclusion is the canonical quotient identification

    μ_*O_E(P)=O_W,     (μ|E)_*O_E=O_W.

In particular W is normal and the geometric generic fibre of μ|E is connected. The construction does not assume a klt replacement on W or a residue-pushforward theorem from the literature.

Suppose also μ|E factors as E --f→ V --ν→ W with V smooth and ν birational and an isomorphism at the generic point of each nonexceptional divisor. Write $F_E=F|E$ and assume the SNC restriction permits coefficientwise rounding $P|E=\lceil -F_E\rceil$. This equality follows from the above SNC condition when components restrict as distinct prime divisors; the condition is explicitly retained on any subsequently modified model.

For a prime divisor Q on V not exceptional over W, write $f^*Q=Σ_j$ $w_j$ $P_j$, including all components and setting $d_j=coeff_{P_j}(F_E)$, with $d_j=0$ for omitted boundary components. Then some j satisfies

    d_j≥1−w_j.

Consequently the subadjoint discriminant coefficient $δ_Q=max_j$ $(d_j+w_j-1)/w_j$ is nonnegative, and the pushforward to W of the discriminant is effective. No claim about signs of ν-exceptional discriminant coefficients is made.


Assume the Axiom of Choice through the supplied coherent-cohomology interfaces. A unique lc PLACE is an explicit hypothesis, stronger than a unique lc centre. No connectedness assertion about all special fibres is included.

## Statement references

[[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]]

[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]

[[thm-regular-local-ring-is-normal]]

[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] The actual unique-place resolution and the rounding compatibility on the consumed model are explicit hypotheses, and are not inferred from uniqueness of the non-klt centre. The Axiom of Choice is inherited through the cohomology interfaces.

[F1] The exact suppliers are [[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], [[thm-regular-local-ring-is-normal]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[def-axiom-of-choice]]. The first supplies the actual ideal equality and relative vanishing without imposing the later strict numerical nonvanishing bound. The normal codimension-one criterion handles the exceptional allowance; regular-local normality handles E; flat field base change for H⁰ is constructed by the finite affine Čech kernel argument.

## Proof

**Given:** Exactly the Statement hypotheses.

1.1 Normality of X gives $μ_*O_Y(P)=O_X$. A rational function regular away from the exceptional locus with poles bounded by the effective exceptional P has no pole at any codimension-one point of X and hence is regular on X. Conversely regular functions pull back regularly. This proves the equality as sheaves, not just as global sections. [given, A1, F1, algebra]

2.1 Because E is a Cartier divisor on smooth Y, there is an exact sequence $0→O_Y(P-E)→O_Y(P)→O_E(P)→0$. [given, A1, F1, step 1.1, algebra]

3.1 Pushforward and the assumed R¹ vanishing give $0→I_W→O_X→μ_*O_E(P)→0$. [given, A1, F1, step 2.1, algebra]

4.1 The quotient is $O_W$. The image of 1 under the quotient identification is precisely the restriction to E of the canonical section of $O_Y(P)$. Thus this identifies the relevant map as well as the abstract quotient sheaf. [given, A1, F1, step 3.1, algebra]

5.1 Since P is effective and does not contain E, multiplication by its restricted canonical section gives an injection $O_E→O_E(P)$. Write $g=μ|E$. Pullback of regular functions gives an injection $O_W→g_*O_E$, because W and E are integral and g is dominant. The composite $O_W→g_*O_E→g_*O_E(P)=O_W$ [given, A1, F1, step 4.1, algebra]

6.1 is the identity by the explicit image-of-1 description in Section 1. Since the second arrow is injective, its image lies in $O_W$ and contains all of $O_W$, so $g_*O_E=O_W$ canonically. [given, A1, F1, step 5.1, algebra]

7.1 Here is the direct normality argument. Let U⊂W be affine and h∈K(W) integral over $O_W(U)$. Pull h back to the function field of E. At every point of $g^{-1}U$, the same monic equation makes it integral over the local normal ring of smooth E; hence it is regular there. Therefore it is a section of $g_*O_E(U)=O_W(U)$. Every such affine coordinate ring is integrally closed, so W is normal. No normalization or connectedness theorem is required for this deduction. [given, A1, F1, step 6.1, algebra]

8.1 Let $K=K(W)$ and η its generic point. Localization of the direct-image equality gives $H⁰(E_η,O)=K$. This localization can be checked on a finite affine Čech cover of the proper separated generic fibre: localization commutes with the finite kernel computing H⁰. The same flat Čech argument after a field extension gives $H⁰(E_η×_K Kbar,O)=Kbar$. [given, A1, F1, step 7.1, algebra]

9.1 A disconnected scheme has a nontrivial idempotent global function, obtained by setting 0 and 1 on the two clopen parts. The displayed field has none, proving geometric generic connectedness. The generic fibre is regular, since its affine rings are localizations of the regular rings of Y restricted to smooth E; over the characteristic-zero field K, a regular finite-type scheme is geometrically regular. Thus it is a smooth geometrically connected generic fibre. In the codimension-two case it is a curve; smooth connected components of a smooth curve are disjoint, so it is geometrically integral. [given, A1, F1, step 8.1, algebra]

10.1 This is the precise connectedness used to reconstruct the generic marked rational curve. Connectedness of EVERY special fibre would require a separate Stein-factorization/formal-functions bridge; it is not claimed here or used in this component. The stable rational family, once separately constructed, has connected special fibres by its own definition and construction. [given, A1, F1, step 9.1, algebra]

11.1 Fix Q as in the Statement. Near its generic image in the now normal W, ν is an isomorphism and Q has a uniformizing rational function t. Suppose for contradiction that $d_j<1-w_j$ for every component over Q. Since $w_j$ is a positive integer, $\lceil -d_j\rceil≥w_j$ [given, A1, F1, step 10.1, algebra]

12.1 for every j. The rounding compatibility gives $P|E≥f^*Q$ over that generic point. After removing the images of the finitely many other boundary divisors, the rational function $1/g^*t$ has divisor at least −P|E and so is a local section of $O_E(P)$. By $g_*O_E(P)=O_W$ it must be regular at the generic point of Q downstairs. But 1/t has a simple pole in that discrete valuation ring, a contradiction. [given, A1, F1, step 11.1, algebra]

13.1 Hence some $d_j≥1-w_j$. For that j, $(d_j+w_j-1)/w_j≥0$, so the maximum $δ_Q$ is nonnegative. This proves exactly the needed effectivity after pushing the discriminant to W; exceptional Q do not contribute to that pushforward and are not constrained by this argument. Coefficients $d_j=0$ are included, so a reduced unmarked branch $w_j=1$ already satisfies the required inequality. [given, A1, F1, step 12.1, algebra] ∎

## Remarks

The exact source passage consulted is the retained extracted proof of Kawamata Theorem 1 on page 6. No source-provided residue-pushforward theorem is imported; the short exact sequence and ideal vanishing give it here. Construction of a genuine unique lc place and the marked rational model remains with the geometry lane. Full special-fibre connectedness is not needed by this component and is not asserted.
