---
id: cor-projective-indecomposable-modules-have-trivial-vertex
kind: corollary
title: "A projective indecomposable module has trivial vertex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-vertex-and-source-of-an-indecomposable-module, thm-green-vertex-source-existence-and-conjugacy, prop-restriction-and-induction-preserve-projectives, thm-projective-module-characterizations]
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
    - title: "J. MacQuarrie, Modular Representations of Profinite Groups"
      url: "https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be finite and let $k$ have characteristic $p$. If $P$ is an
indecomposable finite-dimensional projective $kG$-module, then its vertex is
the trivial subgroup $1$.

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$ of characteristic $p$, and an
indecomposable finite-dimensional projective $kG$-module $P$.

[F1] Vertices are minimal $p$-subgroups for relative projectivity
([[def-vertex-and-source-of-an-indecomposable-module]]).

[L1] Vertices exist for indecomposable modules
([[thm-green-vertex-source-existence-and-conjugacy]]).

[L2] Induction from the trivial subgroup preserves projectives, and projectives
are direct summands of free modules
([[prop-restriction-and-induction-preserve-projectives]], [[thm-projective-module-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $k$-basis of $P$. It gives a surjection from a finite free $kG$-module $(kG)^n$ onto $P$, and projectivity splits that surjection. Thus $P$ is a direct summand of $(kG)^n$. But $(kG)^n$ is induced from the trivial subgroup, namely from the $n$-dimensional $k$-module. Hence $P$ is relatively $1$-projective. [L2, given, algebra]

2.1 By [L1], $P$ has a vertex $Q$. Since vertices are minimal $p$-subgroups for relative projectivity by [F1], and step 1.1 shows that $1$ already works, one must have $Q=1$. [F1, L1, step 1.1] ∎
