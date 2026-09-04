---
id: fs-enough-projectives-implies-a-canonical-resolution-for-every-object
kind: false-statement
title: "FALSE: enough projectives imply a canonical resolution for every object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-supplied-projective-resolution-datum, fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects, prop-the-iterated-free-module-resolution-is-canonical-in-zf]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

If an abelian category has enough projectives, then that property uniquely
determines a projective resolution for every object.
## Facts & Assumptions

**Given:** The category of abelian groups, which has enough projectives, and the object $\mathbb Z/2\mathbb Z$.

[L1] A supplied projective resolution datum is extra objectwise structure, not an existence theorem of its own ([[def-supplied-projective-resolution-datum]]).

[L2] Even chosen objectwise projective resolutions do not uniquely determine comparison maps, and hence do not by themselves determine a resolution functor ([[fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects]]).

[L3] The iterated free resolution is a special canonical construction in module categories, not a general consequence of enough projectives ([[prop-the-iterated-free-module-resolution-is-canonical-in-zf]]).

## Refutation

**Proof technique:** direct.

1.1 One projective resolution of $\mathbb Z/2$ is $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0.$$ Adding the contractible projective complex $0\to\mathbb Z\xrightarrow{1}\mathbb Z\to0$ in degrees $1$ and $0$ gives a different projective resolution $$0\to\mathbb Z\oplus\mathbb Z \xrightarrow{\operatorname{diag}(2,1)}\mathbb Z\oplus\mathbb Z \to\mathbb Z/2\to0,$$ where the augmentation is reduction modulo $2$ on the first summand. Both displayed augmented complexes are exact, but they are not the same resolution. [given, construct, algebra]

2.1 Thus even in a category with enough projectives the property alone does not uniquely determine a resolution of a fixed object. Moreover, [L2] shows that arbitrary objectwise choices still do not uniquely determine the comparison maps of a resolution functor. The special construction in [L3] uses the extra underlying-set structure of a module category, while [L1] records that a general supplied datum is additional structure. Therefore the displayed claim is false. [L1, L2, L3, step 1.1] ∎
