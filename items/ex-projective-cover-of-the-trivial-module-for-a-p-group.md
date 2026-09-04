---
id: ex-projective-cover-of-the-trivial-module-for-a-p-group
kind: example
title: "For a finite p-group, the augmentation map from kP to the trivial module is its projective cover"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras, thm-kg-is-local-iff-g-is-a-p-group]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

## Example

Let $P$ be a finite $p$-group and let $k$ have characteristic $p$. Then the
augmentation map

$$ \varepsilon:kP\to k $$

is the projective cover of the trivial module.

## Facts & Assumptions

**Given:** A finite $p$-group $P$, a field $k$ of characteristic $p$, and the augmentation map $\varepsilon:kP\to k$.

[L2] Over every characteristic-$p$ field, the algebra $kP$ is local
([[thm-kg-is-local-iff-g-is-a-p-group]]).

[L3] Projective covers exist and are unique up to isomorphism over the target
([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]).

## Verification

**Proof technique:** direct.

1.1 The regular module $kP$ is projective, and $\varepsilon$ is surjective onto the trivial module. Its kernel is the augmentation ideal, which is the unique maximal ideal because [L2] makes $kP$ local. Hence the kernel is superfluous. [L2, given, algebra]

2.1 By step 1.1, $\varepsilon$ is a projective cover of the trivial module. The uniqueness theorem [L3] says every projective cover of that target is isomorphic to this one over the target. [L3, step 1.1] ∎
