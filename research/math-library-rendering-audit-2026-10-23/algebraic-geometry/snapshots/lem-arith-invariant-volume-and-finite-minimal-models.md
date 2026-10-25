---
id: lem-arith-invariant-volume-and-finite-minimal-models
kind: lemma
title: "Invariant volume and finite minimal classes"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-projective-weak-model-and-rational-mapping
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-line-bundle-rational-section-cartier-divisor
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - lem-scheme-zariski-main-factorization-quasi-finite
  - thm-differentials-smooth-locally-free
  - thm-etale-formally-etale-finite-presentation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 4.2/1-3 and 4.3 (invariant volume, comparison, finite minimal classes)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$, uniformizer $\pi$, residue field $k$. For the model assertions fix an abelian variety $A/K$ and a nonzero invariant top form $\omega$ on $A$; models are smooth separated finite-type $R$-models of this fixed $A$ with nonempty irreducible special fibre. Their order is the valuation of $\omega$ at the special generic point. Two models are equivalent when they have isomorphic $R$-dense opens inducing the identity on $A$.

(a) A smooth $d$-dimensional $R$-group scheme has a nowhere-vanishing invariant top form; on a smooth model $X$ with irreducible special fibre, $\pi^{-\operatorname{ord}}$ times the generic form extends to a generator, where $\operatorname{ord}$ measures the vanishing of the normalized form.

(b) An $R$-rational, generically identical map $\varphi:X\dashrightarrow Y$ between smooth models with irreducible special fibre satisfies $\operatorname{ord}X\ge\operatorname{ord}Y$, with equality if and only if $\varphi$ is etale on its domain; in particular equal orders imply $\varphi$ is an open immersion on its domain.

(c) Orders have a finite minimum and there are finitely many equivalence classes of minimal models; minimal representatives remain minimal and cover all minimal classes after the base change $R\to\mathcal O_{Z,\eta}$ at a generic point of a special fibre, after splitting special components.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with uniformizer $\pi$, fraction field $K$ and residue field $k$, and a smooth finite-type $R$-group scheme (or a smooth model with irreducible special fibre).

[F1] The cotangent space at the identity of a smooth group scheme is locally free of rank the relative dimension and is translation-invariant, so its top exterior power trivializes the sheaf of invariant $d$-forms ([[thm-differentials-smooth-locally-free]], [[thm-ag-standard-smooth-geometric-regularity]]); Hartogs extension in codimension one and the pure-codimension-one support of zeros of sections are available on regular total spaces ([[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-line-bundle-rational-section-cartier-divisor]]).

[F2] A morphism between smooth schemes of equal relative dimension is etale exactly where its relative differential determinant is invertible, and a quasi-finite birational separated morphism onto a normal target with reduced source is an open immersion ([[thm-etale-formally-etale-finite-presentation]], [[lem-scheme-zariski-main-factorization-quasi-finite]], [[lem-ag-flat-local-regularity-ascent-descent]]).

[F3] A weak model collection receives every generic rational map from a smooth $R$-scheme with irreducible special fibre, and weak models remain weak after base change to a special-fibre generic local ring ([[lem-arith-projective-weak-model-and-rational-mapping]]).

## Proof

**Proof technique:** direct: trivialize the invariant top form by translation, compare orders along rational maps, and use the weak collection to bound the minimum.

1.1 On a smooth $d$-dimensional group scheme the cotangent module at the identity is free of rank $d$ over the DVR. Choose a generator of its top exterior power and translate it by the group law; the translation trivialization gives an invariant top form which generates at every point, hence is nowhere vanishing. For a smooth model with irreducible special fibre, let $\operatorname{ord}$ be the valuation of its nowhere-vanishing generic invariant form $\omega$ at the special generic point, and write $\omega=\pi^{\operatorname{ord}}\omega_0$ there. The normalized form $\pi^{-\operatorname{ord}}\omega$ has neither zeros nor poles along the special component, and none along horizontal prime divisors since the generic invariant form is nowhere zero. Hartogs therefore extends it over the regular total space. Its zero locus would have a prime-divisor component by [F1], but no such divisor is available, so it is a generator everywhere. This proves (a). For an abelian variety, left and right invariance agree by commutativity, so the general bounded modular-character argument is unnecessary. [F1, given, construct]

2.1 Let $\varphi:X\dashrightarrow Y$ be $R$-rational and generically identical between smooth models with irreducible special fibres. Pulling back the normalized invariant form of $Y$ along $\varphi$ gives a rational form on $X$ whose scalar coefficient relative to the normalized form of $X$ is $\pi^{\operatorname{ord}X-\operatorname{ord}Y}$ times a unit; invariance under the generic identification and the divisor computation of step 1.1 give $\operatorname{ord}X\ge\operatorname{ord}Y$. If equality holds, the relative differential determinant of $\varphi$ is a unit on its domain, so $\varphi$ is etale there by [F2]; a generically identical etale separated morphism with reduced source onto a normal target is an open immersion by the Zariski Main Theorem argument in [F2]. This proves (b). [F1, F2, step 1.1, algebra]

3.1 Split a finite weak model collection into its finitely many models with irreducible special fibre. By [F3], every smooth model $X$ with irreducible special fibre has an $R$-rational map, generically the identity, into some member $V_i$. Step 2.1 gives $\operatorname{ord}(X)\ge\operatorname{ord}(V_i)$, so the finite minimum of the collection's orders is a lower bound for all model orders. Conversely each $V_i$ is itself a model, so a member attaining that minimum is minimal among all models. A minimal $X$ maps into a $V_i$ with the same order; step 2.1 makes that map an open immersion on a fibre-dense domain, giving equivalence with one of the finitely many minimal collection members. After the smooth-DVR base change $R\to\mathcal O_{Z,\eta}$, [F3] keeps the collection weak, and the uniformizer and the normalized volume orders of its split components are unchanged. The same lower-bound argument therefore preserves the minimum and covers all minimal classes by the base-changed representatives, proving (c). [F1, F2, F3, step 2.1, algebra] ∎
