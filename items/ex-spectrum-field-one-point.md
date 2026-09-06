---
id: ex-spectrum-field-one-point
kind: example
title: "The spectrum of a field is a one-point affine scheme"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme-spectrum, def-field, def-prime-and-maximal-ideals, thm-stalk-structure-sheaf-prime-localization, def-residue-field-scheme-point, thm-global-sections-affine-scheme]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "The Stacks Project, Section 26.5"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Example

For a field $k$, $\operatorname{Spec}k$ has the sole point $(0)$. Its local
ring, residue field, and ring of global functions are all canonically $k$.

## Facts & Assumptions

**Given:** A field $k$.

[F1] The stalk at a prime $\mathfrak p$ of an affine spectrum is $A_{\mathfrak p}$
([[thm-stalk-structure-sheaf-prime-localization]]).

[F2] Global functions on $\operatorname{Spec}A$ recover $A$
([[thm-global-sections-affine-scheme]]).

## Verification

**Proof technique:** direct.

1.1 The only proper ideal of a field is $(0)$, and it is prime; hence the spectrum has exactly that point. [given]

1.2 By [F1], its local ring is $k_{(0)}=k$, whose residue field is $k$. [F1, algebra]

2.1 By [F2], its global sections are $k$. [F2, step 1.1, step 1.2] ∎
 
