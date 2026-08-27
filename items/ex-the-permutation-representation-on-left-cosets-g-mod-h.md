---
id: ex-the-permutation-representation-on-left-cosets-g-mod-h
kind: example
title: "The permutation representation on the left cosets $G/H$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coset, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 4.3.4"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field, let $G$ be a finite group, and let $H \le G$. Left
multiplication on the coset set $G/H$ gives a permutation representation of
$G$ on the vector space $k^{(G/H)}$.

## Facts & Assumptions

**Given:** A field $k$, a finite group $G$, and a subgroup $H \le G$.

[L1] The left cosets are the subsets $xH=\{xh:h \in H\}$ of $G$ ([[def-coset]]).

[L2] A finite $G$-set gives a permutation representation on the free vector space with that basis ([[def-trivial-regular-and-permutation-representations]]).

## Verification

**Proof technique:** direct.

1.1 For $g,x \in G$, left multiplication sends the coset $xH$ to $(gx)H$, so $G$ acts on the finite set $G/H$ by $g \cdot (xH):=(gx)H$. [L1, given]

2.1 By [L2], the induced representation on the basis vectors $e_{xH}$ of $k^{(G/H)}$ is $g \cdot e_{xH}=e_{(gx)H}$. So the matrix of $g$ in this basis is a permutation matrix recording the induced permutation of the cosets. [step 1.1, L2] ∎
