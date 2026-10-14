---
id: ex-countable-likelihood-ratio-vector-on-point-mass-model
kind: example
title: "Likelihood-ratio vector for a point-mass model"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - thm-countable-mixture-likelihood-ratio-vector-is-minimal-sufficient
  - def-minimal-sufficient-statistic
  - def-axiom-of-choice
justified_by: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Example

Assume AC. Let $\mathcal X=\mathbb N_{\ge1}$ with its discrete $\sigma$-field, $P_k=\delta_k$, and $Q=\sum_{k\ge1}2^{-k}P_k$. The vector statistic $T(j)=(dP_k/dQ(j))_{k\ge1}$ is minimal sufficient and injective.

## Facts & Assumptions

**Given:** AC, the point-mass family, and the positive geometric weights.

[A1] [[def-axiom-of-choice]]: AC is the axiom branch of the likelihood-ratio-vector theorem.

[F1] [[thm-countable-mixture-likelihood-ratio-vector-is-minimal-sufficient]]: the RN-density vector relative to a positive countable mixture is minimal sufficient.

[F2] [[def-minimal-sufficient-statistic]]: minimality is interpreted modulo common model-null sets.

## Proof

1.1 Since $Q(\{j\})=2^{-j}$ and $P_k(\{j\})=1$ exactly when $j=k$, the density is $f_k(j)=2^k1_{\{j=k\}}$. Therefore $T(j)$ has coordinate $j$ equal to $2^j$ and all other coordinates zero. [A1, F1, given, algebra]

2.1 The discrete metric on $\mathbb N_{\ge1}$ is complete and separable, and its Borel sigma-field is the full sigma-field. The weights $2^{-k}>0$ sum to one, and step 1.1 gives finite nonnegative measurable density versions. Since every $Q$-atom has positive mass, the common $Q$-null set on which these versions are reset is empty. Thus all hypotheses of [F1], including AC [A1], hold, and that theorem proves minimal sufficiency. The vectors in step 1.1 are distinct for distinct $j$, proving injectivity. Finally, a set null under every $P_j$ contains no $j$, so the family-null ideal is trivial and the minimality comparison in [F2] is exact in this model. [A1, F1, F2, step 1.1, given, algebra] ∎
