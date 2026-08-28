---
id: thm-chordal-arzela-ascoli-criterion-for-meromorphic-families
kind: theorem
title: "Local chordal equicontinuity is equivalent to meromorphic normality on compact exhaustions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-ascoli-arzela-for-compact-metric-domains, def-chordal-local-uniform-convergence-and-meromorphic-normality, lem-canonical-compact-exhaustion-of-a-plane-domain, thm-chordal-limit-theorem-for-meromorphic-functions, thm-metric-compactness-equivalences]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

**Assume the Axiom of Choice, and therefore in particular Countable Choice and
Dependent Choice for the successive subsequence selections.** Let $\Omega$ be a
plane domain and let $\mathcal F$ be a family of meromorphic maps
$\Omega\to\widehat{\mathbb C}$. Then
$$\mathcal F\text{ is meromorphically normal}\quad\Longleftrightarrow\quad \mathcal F|_K\text{ is equicontinuous for every compact }K\subseteq\Omega,$$
where equicontinuity is taken with respect to the chordal metric on
$\widehat{\mathbb C}$. Equivalently, it is enough to check that equicontinuity on
each compact stage of the canonical exhaustion.

## Facts & Assumptions

**Given:** Choice, a plane domain $\Omega$, and a family $\mathcal F$ of meromorphic sphere-valued maps.

[L1] On a compact metric domain, compactness of the uniform closure is equivalent to equicontinuity and pointwise relative compactness ([[cor-ascoli-arzela-for-compact-metric-domains]]).

[L2] The canonical exhaustion $(K_n)$ is compact, nested, and has interiors covering $\Omega$ ([[lem-canonical-compact-exhaustion-of-a-plane-domain]]).

[L3] In a metric space, compactness and sequential compactness are equivalent under Countable Choice and Dependent Choice ([[thm-metric-compactness-equivalences]]).

[L4] A chordally locally uniform meromorphic limit is meromorphic or identically $\infty$ ([[thm-chordal-limit-theorem-for-meromorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 If the compact-set equicontinuity condition holds, then on each compact stage $K_n$ of [L2] the restricted family is equicontinuous. Pointwise relative compactness is automatic because the target sphere is compact, so [L1] makes the uniform closure on $K_n$ compact. [L1, L2, given]

1.2 Using [L3], choose successively a subsequence converging uniformly on $K_1$, then on $K_2$, and so on, and take the diagonal subsequence. By [L2] that diagonal converges chordally locally uniformly on $\Omega$, and [L4] makes its limit meromorphic or identically $\infty$. Thus compact-set chordal equicontinuity implies meromorphic normality. [L2, L3, L4, given, choose]

1.3 Conversely, if $\mathcal F$ is meromorphically normal, then every sequence of restrictions to a fixed $K_n$ has a uniformly convergent subsequence. Fact [L3] turns that sequential compactness into compactness of the restriction closure, and [L1] then gives equicontinuity on $K_n$. Because every compact subset of $\Omega$ lies in some stage of the exhaustion by [L2], the family is chordally equicontinuous on every compact subset. [L1, L2, L3, given]

2.1 The first two steps prove the forward implication and step 1.3 proves the reverse implication, so the two conditions are equivalent. [given] ∎
