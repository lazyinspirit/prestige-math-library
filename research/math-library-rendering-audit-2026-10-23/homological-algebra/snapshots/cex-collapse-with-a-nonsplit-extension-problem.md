---
id: cex-collapse-with-a-nonsplit-extension-problem
kind: counterexample
title: Collapse with a nonsplit extension problem
deps: ["prop-collapse-does-not-in-general-split-the-abutment", "lem-abelian-group-model-for-spectral-sequence-computations", "def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
generation:
  role: counterexample
---





## Statement refuted

A collapsed spectral sequence can have a nonsplit extension in its abutment: the filtered degree-zero stalk of ℤ/4 with $F_{-1}=0,F_0=\{0,2\},F_1=ℤ/4$ is such a counterexample.

## Facts & Assumptions

**Given:** The filtered ℤ/4 stalk, with filtration constant outside its displayed endpoints.

[F1] Collapse does not in general split the filtered abutment ([[prop-collapse-does-not-in-general-split-the-abutment]]).

[F2] Cyclic groups have their ordinary subgroup and coset-quotient models ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

[F3] The filtered-cycle and boundary subobjects are given by the displayed $A^r$, $Z^r$, and $B^r$ formulas ([[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]]), and the $r$-page is their quotient ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F4] The page differential is induced by the chain differential on local representatives ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Counterexample

**Proof technique:** direct.

1.1 Substituting the zero stalk differential into the formulas of [F3] gives every $r$-cycle numerator as $F_p$ and every denominator as $F_{p-1}$. Thus every page has ℤ/2 at (0,0) and (1,-1), zero elsewhere; [F4] makes all page differentials zero. The underlying stalk itself has homology ℤ/4 in degree zero and zero elsewhere, with the original filtration. This realizes the collapse phenomenon of [F1]. [F1, F2, F3, F4]

2.1 The extension is $0\to\mathbb Z/2\xrightarrow{[a]\mapsto[2a]}\mathbb Z/4\xrightarrow{[b]_4\mapsto[b]_2}\mathbb Z/2\to0$. The first map has image {0,2}, exactly the kernel of the second, and the second is onto. A section would lift 1 to 1 or 3; both double to 2≠0, contradicting the relation 1+1=0 in its source. Hence the extension is nonsplit despite collapse. [F2, step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
