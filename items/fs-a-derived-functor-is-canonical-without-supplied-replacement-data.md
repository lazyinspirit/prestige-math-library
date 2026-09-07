---
id: "fs-a-derived-functor-is-canonical-without-supplied-replacement-data"
kind: "false-statement"
deps: ["def-left-total-derived-functor-on-the-bounded-above-derived-category", "lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism", "def-contractible-complex"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "Boundary check against the licensed construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A projective replacement model for a total derived functor is literally canonical without supplied replacement data.

## Facts & Assumptions

**Given:** A projective replacement model for a total derived functor is literally canonical without supplied replacement data.

[F1] The left total derived construction includes supplied projective models ([[def-left-total-derived-functor-on-the-bounded-above-derived-category]]).

[F2] Independence means unique natural isomorphism relative to augmentations ([[lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism]]).

[F3] Contractibility means a nullhomotopic identity, reindexed here to cochains ([[def-contractible-complex]]).

## Refutation

1.1 For $F=1_{\mathbf{Ab}}$ and $X=0$, use either the zero projective complex or $C=(\mathbb Z\xrightarrow1\mathbb Z)$ in degrees $-1,0$. Both map quasi-isomorphically to zero. The homotopy with degree-zero component $1:\mathbb Z\to\mathbb Z$ and other components zero contracts $C$. Their literal terms are different. [F1, F3, algebra]

2.1 Applying $F$ leaves these different complexes unchanged, although their derived objects are isomorphic. More generally $P\oplus C\to X$ changes any supplied model $P\to X$ in the same way. Replacement independence gives a unique natural comparison relative to augmentation data, not an equality of all chosen representatives. [F2, step 1.1, algebra] ∎
