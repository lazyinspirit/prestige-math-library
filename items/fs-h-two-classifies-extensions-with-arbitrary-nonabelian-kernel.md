---
id: fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel
kind: false-statement
title: "FALSE: H^2 classifies extensions with arbitrary nonabelian kernel"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normalized-two-cocycle-and-two-coboundary, def-second-cohomology-by-factor-sets, def-g-module-over-a-commutative-ring, thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

The group $H^2(G,N)$ classifies extensions of $G$ by an arbitrary nonabelian
kernel $N$.

## Facts & Assumptions

**Given:** A nonabelian kernel $N$.

[L1] Ordinary $H^2(G,M)$ here is the quotient of additive cocycle and coboundary groups for an abelian $G$-module $M$ ([[def-normalized-two-cocycle-and-two-coboundary]], [[def-second-cohomology-by-factor-sets]], [[def-g-module-over-a-commutative-ring]]).

[L2] The published extension-classification theorem fixes an abelian $G$-module $M$ and its action ([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).

## Refutation

**Proof technique:** direct.

1.1 For a nonabelian group $N$, the coefficient $N$ is not an abelian group, hence is not an abelian $G$-module of the type required by [L1]. Consequently the ordinary group $H^2(G,N)$ asserted in the false claim is not defined by the cited construction. [given, L1]

2.1 The classification in [L2] concerns extensions with a fixed abelian kernel and fixed action, so it cannot supply a classification for arbitrary nonabelian $N$. The proposed classification by the ordinary group $H^2(G,N)$ is therefore ill-typed and false as stated. [step 1.1, L2]

3.1 This refutes the false claim without invoking any unproved nonabelian obstruction statement. [step 2.1] ∎
