---
id: ex-uncountable-cantor-cube-uniformizable-not-first-countable
kind: example
title: "Assuming the Ultrafilter Lemma and Countable Choice, an uncountable Cantor cube is compact Hausdorff and uniformizable but not first countable, hence not metrizable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, def-product-topology, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, def-first-countable-top, lem-metric-ball-neighbourhood-base, thm-cantor-powerset, def-countable-choice, thm-countable-union-of-countable, lem-products-preserve-t0-t1-and-hausdorff]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Example

**Assume the ultrafilter lemma and countable choice.** For an uncountable index set $I$, the Cantor cube $2^I$ is compact Hausdorff and uniformizable, but it is not first countable and therefore not metrizable.

## Facts & Assumptions

**Given:** An uncountable set $I$ and the product $2^I$ of discrete two-point spaces.

[L1] Under the ultrafilter lemma, arbitrary products of compact Hausdorff spaces are compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[L2] Basic product-open sets restrict only finitely many coordinates ([[def-product-topology]]).

[L3] A first-countable space has a countable local base, while every metric space is first countable ([[def-first-countable-top]], [[lem-metric-ball-neighbourhood-base]]).

[L4] Cantor's theorem supplies uncountable power sets ([[thm-cantor-powerset]]).

[L5] A compact Hausdorff space has a unique compatible uniformity ([[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]]).

[L6] Under countable choice, a countable union of finite sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

[L7] An arbitrary product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

## Verification

**Proof technique:** contradiction.

1.1 Each two-point factor is compact Hausdorff, so [L1] makes $2^I$ compact and [L7] makes it Hausdorff; [L5] then makes it uniformizable. [L1, L5, L7]

1.2 At the constant-zero point, suppose $(B_n)$ were a countable local base. For each $n$, choose a finite coordinate set $F_n$ such that the basic zero-cylinder restricting $F_n$ is contained in $B_n$; countable choice licenses these selections. The union $\bigcup_nF_n$ is at most countable by [L6], so choose $i\in I\setminus\bigcup_nF_n$ (for instance take $I=\mathcal P(\mathbb N)$, uncountable by [L4]). The one-coordinate neighbourhood requiring coordinate $i$ to be zero contains no $B_n$, because the cylinder inside $B_n$ permits coordinate $i$ to be $1$. This contradicts the local-base property. [L2, L4, L6, choose]

2.1 Suppose $2^I$ were metrizable. Then [L3] would make it first countable, contradicting step 1.2. [assume-contra, step 1.2, L3]

3.1 Hence it is not metrizable, and step 1.2 gives failure of first countability. [step 2.1, discharge-contradiction] ∎
