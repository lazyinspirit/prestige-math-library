---
id: ex-free-ultrafilter-on-naturals
kind: example
title: "An ultrafilter extending the Fréchet filter on $\\mathbb{N}$ is free, and its existence uses the ultrafilter lemma"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ultrafilter-lemma, ex-frechet-filter, def-ultrafilter, thm-ultrafilter-characterisation]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Ultrafilter lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_lemma"
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Example

There exists an ultrafilter $\mathcal U$ on $\mathbb N$ containing the Fréchet
filter $\mathcal F_{\mathrm{Fr}}$, and every such extension is free. Its
existence here is obtained from the ultrafilter lemma. That lemma is proved from
Zorn's lemma and therefore from the Axiom of Choice; it does not construct or
distinguish the resulting ultrafilter.

## Facts & Assumptions

**Given:** The Fréchet filter $\mathcal F_{\mathrm{Fr}}$ on $\mathbb N$.

[L1] The Fréchet filter is a proper filter, and $\mathbb N\setminus\{n\}\in\mathcal F_{\mathrm{Fr}}$ for every $n\in\mathbb N$ because this complement contains a tail ([[ex-frechet-filter]]).

[L2] Every filter on a set is contained in an ultrafilter. The proof uses Zorn's lemma and hence the Axiom of Choice ([[thm-ultrafilter-lemma]]).

[F1] An ultrafilter is principal if it has the form $\{A\subseteq X:x\in A\}$ for some $x\in X$, and it is free otherwise ([[def-ultrafilter]]).

[L3] An ultrafilter contains exactly one of $A$ and $X\setminus A$ for every $A\subseteq X$ ([[thm-ultrafilter-characterisation]]).

## Verification

**Proof technique:** constructive.

1.1 Let $\mathcal U$ be an arbitrary ultrafilter on $\mathbb N$ with $\mathcal F_{\mathrm{Fr}}\subseteq\mathcal U$; at least one such $\mathcal U$ exists by applying [L2] to $\mathcal F_{\mathrm{Fr}}$. [L1, L2, construct]

2.1 For every $n\in\mathbb N$, the set $\mathbb N\setminus\{n\}$ lies in $\mathcal U$. [step 1.1, L1]

3.1 By [L3], step 2.1 forces $\{n\}\notin\mathcal U$ for every $n\in\mathbb N$. [step 2.1, L3]

4.1 A principal ultrafilter at $n$ contains $\{n\}$, so step 3.1 shows that $\mathcal U$ is not principal and hence is free. [step 3.1, F1]

5.1 Since $\mathcal U$ was arbitrary, every ultrafilter extending the Fréchet filter is free, and step 1.1 supplies one by the ultrafilter lemma, with the choice cost stated in [L2]. [step 1.1, step 4.1, L2, discharge-construct] ∎
