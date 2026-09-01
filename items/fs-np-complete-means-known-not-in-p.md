---
id: fs-np-complete-means-known-not-in-p
kind: false-statement
title: "FALSE: NP-complete means proven not to lie in P"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-np-hard-and-np-complete, prop-an-np-complete-language-in-p-implies-p-equals-np]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.toronto.edu/~sacook/homepage/1971.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Clay Mathematics Institute, P vs NP"
      url: "https://www.claymath.org/millennium/p-vs-np/"
---

## Statement

If a language is NP-complete, then it has already been proved not to belong to
$P$.

## Facts & Assumptions

**Given:** An NP-complete language $C$.

[L1] NP-complete means that $C$ lies in $NP$ and every NP-language reduces to it, by [[def-np-hard-and-np-complete]].

[L2] If an NP-complete language lies in $P$, then $P=NP$, by [[prop-an-np-complete-language-in-p-implies-p-equals-np]].

[F1] The question whether $P=NP$ remains unsolved; the Clay Mathematics
Institute lists [P versus NP](https://www.claymath.org/millennium/p-vs-np/)
as an unsolved Millennium Prize Problem.

## Refutation

**Proof technique:** direct.

1.1 The definition quoted in [L1] contains no clause asserting $C\notin P$. It says only that $C$ is in $NP$ and is hard for $NP$ under the chosen reductions. [L1, given]

2.1 If $C\notin P$ had already been proved, then [L1] would give a language in $NP\setminus P$ and hence prove $P\ne NP$. But [F1] records that this question remains unsolved. Conversely, [L2] says that finding $C\in P$ would prove $P=NP$. Thus NP-completeness does not mean that exclusion from $P$ has already been proved; it identifies the consequence either kind of resolution would have. [L1, L2, F1, step 1.1] ∎
