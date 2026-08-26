---
id: lem-foata-transformation-is-bijective
kind: lemma
title: "Foata's transformation is a bijection of $S_n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-foata-schutzenberger-transformation, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$, Foata's transformation $\Phi$ is a bijection
$S_n \to S_n$.

## Facts & Assumptions

**Given:** The recursive Foata transformation $\Phi$ of [[def-foata-schutzenberger-transformation]].

[L1] A function is bijective if it is both injective and surjective ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** constructive.

1.1 For a word $v$ and a letter $x$, define $\delta_x(v)$ by the inverse block rule: if the first letter of $v$ is $\le x$, cut $v$ immediately before each later letter $\le x$; if the first letter is $>x$, cut immediately before each later letter $>x$; in each block move the first letter to the end. This undoes $\gamma_x$, because $\gamma_x$ and $\delta_x$ use the same distinguished letters to recover the same blocks and then reverse the same cyclic move within each block. [construct]

2.1 Define a recursive map $\Psi$ by $\Psi(\epsilon)=\epsilon$ and $\Psi(vx)=\Psi(\delta_x(v))x$, where $x$ is the last letter. Induction on word length, using step 1.1 at the last recursive step, gives $\Psi(\Phi(w))=w=\Phi(\Psi(w))$ for every permutation word $w$. Hence $\Psi$ is a two-sided inverse to $\Phi$. [step 1.1, construct]

3.1 A map with a two-sided inverse is bijective by [L1], so $\Phi$ is a bijection on $S_n$ for every $n$. [step 2.1, L1, discharge-construct] ∎
