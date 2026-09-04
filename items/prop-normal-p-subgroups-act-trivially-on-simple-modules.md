---
id: prop-normal-p-subgroups-act-trivially-on-simple-modules
kind: proposition
title: "A normal p-subgroup acts trivially on every simple module in characteristic p"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kg-is-local-iff-g-is-a-p-group, def-simple-module, thm-composition-series-iff-noetherian-and-artinian]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $N\trianglelefteq G$ be a normal $p$-subgroup and let $S$ be a simple
$kG$-module, where $k$ has characteristic $p$. Then every element of $N$ acts
trivially on $S$.

## Facts & Assumptions

**Given:** A finite group $G$, a normal $p$-subgroup $N\trianglelefteq G$, and a simple $kG$-module $S$.

[L1] For every characteristic-$p$ field, the group algebra of a finite
$p$-group is local ([[thm-kg-is-local-iff-g-is-a-p-group]]).

[F1] A simple module has no proper nonzero submodule ([[def-simple-module]]).

[L2] Finite-dimensional modules have finite length
([[thm-composition-series-iff-noetherian-and-artinian]]).

## Proof

**Proof technique:** direct.

1.1 Restrict $S$ from $G$ to the normal subgroup $N$. By [L2], the restricted module has finite length, so it contains a minimal nonzero $N$-submodule $T$. Then $T$ is simple as an $N$-module by [F1]. [F1, L2, given, choose, algebra]

2.1 Since $N$ is a finite $p$-group, [L1] makes $kN$ local. Its augmentation quotient is the trivial simple module $k$, and every simple module over a local finite-dimensional algebra is its unique simple quotient. Hence $T$ is the trivial $kN$-module. Therefore the fixed-point space $S^N:=\{s\in S:ns=s\text{ for every }n\in N\}$ contains $T$ and is nonzero. Because $N$ is normal in $G$, the subspace $S^N$ is $G$-stable: for $g\in G$, $n\in N$, and $s\in S^N$, one has $n(gs)=g(g^{-1}ng)s=gs$. [L1, step 1.1, given, algebra]

3.1 The nonzero $G$-stable submodule $S^N$ must equal $S$ by simplicity of $S$. Hence every element of $N$ acts trivially on every vector of $S$. [F1, step 2.1] ∎
