---
id: lem-tree-schreier-generators-are-freely-independent
kind: lemma
title: "Tree Schreier generators are freely independent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-schreier-generator, lem-spanning-trees-and-schreier-systems-correspond, thm-reduced-words-form-the-free-group, thm-schreier-generating-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let $F(X)$ be a free group, let $H\le F(X)$, and let a Schreier system come
from a rooted spanning tree in the Schreier graph. Then the nontrivial Schreier
generators determined by that tree are freely independent.

## Facts & Assumptions

**Given:** A free group $F(X)$, a subgroup $H\le F(X)$, and a Schreier system coming from a rooted spanning tree.

[L1] Schreier systems correspond to rooted spanning trees in the Schreier graph ([[lem-spanning-trees-and-schreier-systems-correspond]]).

[L2] For a Schreier representative $t$ and a basis letter $x\in X$, the generator $s(t,x)=tx\,\overline{tx}^{-1}$ is read by following the tree path from $H$ to $Ht$, then the single edge from $Ht$ to $Htx$, then the reverse tree path from $Htx$ back to $H$ ([[def-schreier-generator]]).

[L3] In the reduced-word model of a free group, a nonempty reduced word is not the identity ([[thm-reduced-words-form-the-free-group]]).

## Proof

**Proof technique:** direct.

1.1 Let $T$ be the rooted spanning tree corresponding to the given Schreier system by [L1]. If the positive edge from $Ht$ to $Htx$ lay in $T$, then the unique tree path from $H$ to $Htx$ would be the tree path to $Ht$ followed by that edge, so its label would be $tx$ and [L2] would give $s(t,x)=tx(tx)^{-1}=1$. Therefore every nontrivial Schreier generator corresponds to a unique positive edge outside $T$. [L1, L2, given]

2.1 Take a nonempty reduced word in the nontrivial tree Schreier generators and their inverses. Replace each letter by its based loop from [L2] and concatenate those loops. Cancel adjacent inverse tree segments whenever they appear. Tree segments can disappear this way, but an edge outside $T$ can disappear only by meeting its own reverse immediately, which would mean that two consecutive Schreier generators were inverse letters, contrary to the reducedness of the word. So after all cancellations there remains a closed path whose label is a nonempty reduced word on $X\sqcup X^{-1}$. [L2, step 1.1, given]

3.1 By [L3], the nonempty reduced word from step 2.1 is not the identity in the ambient free group. Hence the original reduced word in the tree Schreier generators is nontrivial in $H$. Therefore those generators are freely independent. [L3, step 2.1] ∎
