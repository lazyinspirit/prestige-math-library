---
id: fs-the-horseshoe-middle-resolution-is-canonical
kind: false-statement
title: "FALSE: the degree-zero horseshoe lift is unique"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-degree-zero-horseshoe-lift]
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
## Statement

> **False.** Once the side resolutions and the short exact sequence are fixed,
> the lift $s:P''_0\to A$ of the right augmentation through the middle
> epimorphism in the degree-zero horseshoe step is unique.
## Facts & Assumptions

**Given:** The split short exact sequence
$$0\longrightarrow\mathbb Z\xrightarrow{x\mapsto(x,0)}\mathbb Z\oplus\mathbb Z\xrightarrow{(x,y)\mapsto y}\mathbb Z\longrightarrow0,$$
with each end object resolved by its length-zero identity resolution.

[L1] The degree-zero horseshoe construction chooses a lift of the right augmentation through the middle epimorphism ([[lem-degree-zero-horseshoe-lift]]).
## Refutation

**Proof technique:** direct.

1.1 Let $p(x,y)=y$. The identity augmentation $\mathbb Z\to\mathbb Z$ lifts through $p$ both by $s_1(y)=(0,y)$ and by $s_2(y)=(y,y)$, since $ps_1=ps_2=\operatorname{id}_{\mathbb Z}$. The induced degree-zero middle augmentations are respectively $\lambda_1(x,y)=(x,y)$ and $\lambda_2(x,y)=(x+y,y)$. [given, algebra]

2.1 By step 1.1, both maps satisfy the lifting equation required in [L1], but $s_1(1)=(0,1)\ne(1,1)=s_2(1)$. Thus the degree-zero horseshoe lift is not unique. [L1, step 1.1] ∎
