---
id: lem-spectrum-localization-open-immersion
kind: lemma
title: "A principal localization identifies its spectrum with a distinguished open"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sections-basic-open-affine-scheme, cor-principal-localisation-spectrum-is-distinguished-open, thm-prime-spectrum-of-a-localisation-bijection, def-morphism-locally-ringed-spaces]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.6.6"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
## Statement

For $f\in A$, the morphism induced by $A\to A_f$ identifies
$\operatorname{Spec}(A_f)$ with the open locally ringed subspace $D(f)$ of
$\operatorname{Spec}A$.

## Facts & Assumptions

**Given:** A commutative ring $A$ and $f\in A$.

[F1] The map on prime spectra induced by $A\to A_f$ is a homeomorphism onto
$D(f)$ ([[cor-principal-localisation-spectrum-is-distinguished-open]]).

[F2] The structure-sheaf sections on a distinguished open are the corresponding
localizations ([[thm-sections-basic-open-affine-scheme]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the underlying map is a homeomorphism from $\operatorname{Spec}(A_f)$ onto $D(f)$. [F1]

1.2 On $D(g)\subseteq D(f)$ the relevant section rings are $(A_f)_{g/1}$ and $A_g$, canonically isomorphic and compatible with restrictions. [F2, algebra]

2.1 The basic opens cover $D(f)$, so the preceding identifications give an isomorphism of locally ringed spaces. [step 1.1, step 1.2] ∎
 
