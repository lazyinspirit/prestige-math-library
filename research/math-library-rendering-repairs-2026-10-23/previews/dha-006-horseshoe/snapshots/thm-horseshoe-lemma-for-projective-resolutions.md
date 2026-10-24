---
id: thm-horseshoe-lemma-for-projective-resolutions
kind: theorem
title: "The horseshoe lemma for projective resolutions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-inductive-horseshoe-step, def-projective-resolution-in-an-abelian-category, thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective, def-dependent-choice]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
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

Assume the Axiom of Dependent Choice.

Let $$0\to A'\to A\to A''\to0$$ be a short exact sequence, and let projective resolutions of $A'$ and $A''$ be given. Then there exists a projective resolution of $A$ whose degree-$n$ term is $P'_n\oplus P''_n$, fitting into a degreewise split short exact sequence of augmented complexes.
## Facts & Assumptions

**Given:** A short exact sequence $0\to A'\to A\to A''\to0$ and projective resolutions of $A'$ and $A''$.

[L1] The inductive horseshoe step advances the construction by one degree ([[lem-inductive-horseshoe-step]]).

[L2] A projective resolution is an exact augmented complex of projective objects ([[def-projective-resolution-in-an-abelian-category]]).

[L3] Finite coproducts of projectives are projective ([[thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective]]).

[L4] Dependent choice licenses the countable successor-by-successor selection of the horseshoe lifts and kernel sequences ([[def-dependent-choice]]).
## Proof

**Proof technique:** direct.

1.1 Start at degree zero with the original short exact sequence $$0\to A'\to A\to A''\to0.$$ Every current short exact kernel sequence extends one more degree by [L1], and the next choice depends on the previously constructed degree. Therefore [L4] produces the whole augmented complex for $A$, whose degree-$n$ term is $P'_n\oplus P''_n$ and whose kernel sequences remain short exact in every degree. [L1, L4, construct]

2.1 Each term $P'_n\oplus P''_n$ is projective by [L3], and the short exact kernel sequences from step 1.1 are exactly the data needed for exactness of the middle augmented complex. Therefore [L2] identifies the resulting complex as a projective resolution of $A$. [L2, L3, step 1.1] ∎


## Remarks

The first two degrees and the augmentations form the following commutative ladder. Here $j_n$ and $q_n$ are the inclusion of the first summand and projection onto the second summand, and $d_n$ denotes the middle differential. The two projective rows are split exact; the bottom row is the original short exact sequence and need not split. The columns continue upwards to the full resolutions.

```tikzcd
0 \arrow[r] & P'_1 \arrow[r, "j_1"] \arrow[d, "d'_1"'] & P'_1\oplus P''_1 \arrow[r, "q_1"] \arrow[d, "d_1"] & P''_1 \arrow[r] \arrow[d, "d''_1"] & 0 \\
0 \arrow[r] & P'_0 \arrow[r, "j_0"] \arrow[d, "\varepsilon'"'] & P'_0\oplus P''_0 \arrow[r, "q_0"] \arrow[d, "\lambda_0"] & P''_0 \arrow[r] \arrow[d, "\varepsilon''"] & 0 \\
0 \arrow[r] & A' \arrow[r, "i"] & A \arrow[r, "p"] & A'' \arrow[r] & 0
```

The augmentation is $\lambda_0=[i\varepsilon',s]$, where $s:P''_0\to A$ is a chosen lift with $ps=\varepsilon''$. Thus $\lambda_0j_0=i\varepsilon'$ and $p\lambda_0=\varepsilon''q_0$. In positive degrees the chain-map identities are $d_nj_n=j_{n-1}d'_n$ and $q_{n-1}d_n=d''_nq_n$; the chosen summand splittings need not be chain maps. In particular, the middle differential need not be block diagonal.

Writing $K_0=\ker\lambda_0$, $K'_0=\ker\varepsilon'$ and $K''_0=\ker\varepsilon''$, and $K_n=\ker d_n$ with the analogous primed notation for $n\geq1$, each stage gives $0\to K'_n\to K_n\to K''_n\to0$. The next epimorphism $P'_{n+1}\oplus P''_{n+1}\twoheadrightarrow K_n$, followed by $K_n\hookrightarrow P'_n\oplus P''_n$, is $d_{n+1}$. Hence consecutive vertical maps compose to zero, including $\lambda_0d_1=0$. This illustrates steps 1.1 and 2.1; the proof is independent of the diagram.
