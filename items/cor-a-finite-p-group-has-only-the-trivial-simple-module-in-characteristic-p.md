---
id: cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p
kind: corollary
title: "A finite p-group has only the trivial simple module over a field of characteristic p"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kg-is-local-iff-g-is-a-p-group]
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

Let $P$ be a finite $p$-group and $k$ a splitting field of characteristic $p$.
Then the only simple $kP$-module is the trivial module $k$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$ and a splitting field $k$ of characteristic $p$.

[L1] The group algebra $kP$ is local
([[thm-kg-is-local-iff-g-is-a-p-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the algebra $kP$ has a unique simple module up to isomorphism. [L1, given]

2.1 The augmentation map $kP\to k$ makes the ground field $k$ into a simple $kP$-module on which every element of $P$ acts trivially. Since step 1.1 says there is only one simple module, it must be this trivial module. [step 1.1, given, algebra] ∎
