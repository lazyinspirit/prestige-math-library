---
id: lem-nonaffine-normal-completion-smooth-locus-antiaffine
kind: lemma
title: "The smooth locus of a normal completion of a group has only constant functions"
status: published
origin: pipeline
deps: [thm-serre-normality-criterion, def-axiom-of-choice, lem-nonaffine-smooth-connected-group-has-ample-line-bundle, lem-nonaffine-ample-finite-type-projective-immersion, thm-integral-closure-finite-finite-type-domain-over-field, lem-finite-normalization-compatible-with-principal-opens, thm-projective-space-proper-over-base, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, thm-regular-equals-smooth-over-perfect-field, lem-r-one-s-two-intersection-of-height-one-localisations, thm-global-functions-proper-integral-variety, thm-smooth-locus-open]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Brion, Some structure theorems for algebraic groups, proof of Lemma 4.1.3, pp.34-35"
      url: https://arxiv.org/pdf/1509.03059
    - title: "Conrad, A modern proof of Chevalleys theorem, Lemma 2.2"
      url: https://virtualmath1.stanford.edu/~conrad/papers/chev.pdf
---

## Statement

Assume the Axiom of Choice. Let $G$ be a smooth integral algebraic group over an algebraically closed field $k$. There is a proper normal integral variety $\overline G$ containing $G$ as a dense open. Its smooth locus $U$ contains $G$ and has $\Gamma(U,\mathcal O_U)=k$.

## Facts & Assumptions

[F1] A smooth geometrically integral group has an ample sheaf and thus a locally closed immersion into projective space. ([[lem-nonaffine-smooth-connected-group-has-ample-line-bundle]], [[lem-nonaffine-ample-finite-type-projective-immersion]])

[F2] Integral closures of finite-type domains over a field are finite, and formation of integral closure commutes with localization. Projective space is proper. ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[lem-finite-normalization-compatible-with-principal-opens]], [[thm-projective-space-proper-over-base]])

[F3] Height-one normal local rings are DVRs; over a perfect field regular local rings give smooth points and the smooth locus is open. By the normality criterion it satisfies $(R_1)$ and $(S_2)$, and a normal Noetherian domain is the intersection of its height-one localizations. ([[thm-serre-normality-criterion]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], [[thm-regular-equals-smooth-over-perfect-field]], [[thm-smooth-locus-open]], [[lem-r-one-s-two-intersection-of-height-one-localisations]])

[F4] Global functions on a proper integral variety over an algebraically closed field are the base field. ([[thm-global-functions-proper-integral-variety]])

## Proof

**Given:** AC, $k$ algebraically closed, and $G$ as above.

1.1 By [F1], place $G$ as a locally closed subvariety of projective space. Its reduced closure $X$ is integral, and $G$ is open in $X$. Normalize each affine chart of $X$ in $k(G)$. By [F2] the resulting affine maps are finite and agree on principal-overlap charts, so they glue to a finite normal variety $\overline G\to X$. A finite map is proper by its integral affine ring description and lying-over after arbitrary base change. Thus $\overline G$ is proper by [F2]. Above the normal open $G$ the integral closures equal the original rings, so $G$ embeds as a dense open of $\overline G$. [F1, F2, given, construct]

2.1 Let $U$ be the smooth locus of $\overline G$. It contains $G$. By [F3] every height-zero or height-one point is smooth, since normal height-one local rings are DVRs and $k$ is perfect; hence $\overline G\setminus U$ has codimension at least two. A global function on $U$ is a rational function on $\overline G$, regular in each height-one local ring. On each normal affine chart it therefore belongs to its coordinate ring by the intersection assertion of [F3]. These extensions agree in the function field and glue. Thus $\Gamma(U,\mathcal O)=\Gamma(\overline G,\mathcal O)=k$ by [F4]. AC is inherited from [F1]–[F4]. No general compactification theorem is used: the ample-sheaf construction supplied the projective completion. [F2, F3, F4, step 1.1, algebra] ∎
