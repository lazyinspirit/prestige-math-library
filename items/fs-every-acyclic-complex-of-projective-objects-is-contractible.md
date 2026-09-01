---
id: fs-every-acyclic-complex-of-projective-objects-is-contractible
kind: false-statement
title: "FALSE: every acyclic complex of projective objects is contractible"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split, def-contractible-complex]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
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

> **False.** Every acyclic complex of projective objects is contractible.
## Facts & Assumptions

**Given:** The bi-infinite chain complex over $R=\mathbb Z/4\mathbb Z$ with $C_n=R$ for every $n$ and differential $d_n$ equal to multiplication by $2$.

[L1] Contractibility is the existence of a homotopy from the identity to zero ([[def-contractible-complex]]).

[L2] A bounded-below acyclic complex of projectives is contractible once its cycle epimorphisms split ([[thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split]]).
## Refutation

**Proof technique:** direct.

1.1 Since $2^2=4=0$ in $R$, the displayed differentials satisfy $d_{n-1}d_n=0$. Also $$\ker(d_n)=2R=\operatorname{im}(d_{n+1}),$$ so the complex is acyclic. Each term $R$ is a free rank-one $R$-module and hence projective. [given, algebra]

2.1 If a contracting homotopy existed, then for each $n$ one would have $$1_R=d_{n+1}s_n+s_{n-1}d_n=2s_n+2s_{n-1}.$$ But every endomorphism of the free rank-one module $R$ is multiplication by an element of $R$, and the right-hand side is always even while $1_R$ is not. Contradiction. [L1, step 1.1, algebra]

3.1 Therefore the complex is acyclic and degreewise projective but not contractible. The positive theorem [L2] does not apply because this standard counterexample is not bounded below with the required splitting data. [L2, step 2.1] ∎
