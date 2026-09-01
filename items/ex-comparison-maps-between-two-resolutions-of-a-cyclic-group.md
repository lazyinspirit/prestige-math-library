---
id: ex-comparison-maps-between-two-resolutions-of-a-cyclic-group
kind: example
title: "Comparison maps between two resolutions of a cyclic group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-a-projective-resolution-of-a-cyclic-abelian-group, thm-projective-comparison-map-exists]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Example

Let $P_\bullet$ and $Q_\bullet$ be two displayed copies of the standard resolution $$0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\mathbb Z\to0.$$ For multiplication by $m$ on $\mathbb Z/n\mathbb Z$, multiplication by $m$ in degrees $0$ and $1$ gives a comparison map $P_\bullet\to Q_\bullet$.
## Facts & Assumptions

**Given:** Integers $n\ge1$ and $m$, and two copies of the standard resolution from [[ex-a-projective-resolution-of-a-cyclic-abelian-group]].

[L1] Projective comparison maps exist ([[thm-projective-comparison-map-exists]]).
## Verification

**Proof technique:** direct.

1.1 Multiplication by $m$ commutes with multiplication by $n$ on $\mathbb Z$, so the square with the two differentials commutes. It also commutes with the quotient maps to $\mathbb Z/n\mathbb Z$, because both routes send $x$ to $\overline{mx}$. [given, algebra]

2.1 Therefore the degreewise multiplication-by-$m$ maps form an augmentation-preserving chain map between the two resolutions. This is the explicit comparison map whose existence is asserted abstractly in [L1]. [L1, step 1.1] ∎
