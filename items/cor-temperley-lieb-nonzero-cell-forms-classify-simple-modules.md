---
id: cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
kind: corollary
title: "Nonzero Temperley–Lieb cell forms give all simple heads"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-temperley-lieb-link-state-standard-modules, thm-temperley-lieb-link-state-diagram-basis-is-cellular, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §2, printed pp. 11–16, Theorem 2.13 and its proof: nonzero cell-form quotients classify the simple modules of a finite-dimensional cellular algebra. The local statement follows the corrected condition that the form is not identically zero; it does not assert a zero form means the underlying module has zero head."
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§3, PDF pp. 14–15: the special zero-loop, zero-defect standard module and warning that the zero form quotient does not decide its actual head."
---

## Statement

Let $F$ be a field, $\delta\in F$, and $n\ge0$. Put $D_{n,t}=W_{n,t}(F,\delta)/\operatorname{rad}(\phi_{n,t})$ for each allowed $t$. Then the nonzero $D_{n,t}$ are absolutely simple and form a complete set of pairwise nonisomorphic simple right $\mathrm{TL}_n(F,\delta)$-modules. Moreover, $D_{n,t}\ne0$ exactly when $\phi_{n,t}$ is not identically zero; in that case $\operatorname{rad}(\phi_{n,t})$ is the unique maximal proper submodule and $D_{n,t}$ is the simple head of $W_{n,t}$. If $\phi_{n,t}$ is identically zero, then $D_{n,t}=0$, but no conclusion about the actual head of $W_{n,t}$ follows.

## Facts & Assumptions

**Given:** A field $F$, $\delta\in F$, $n\ge0$, and the link-state modules $W_{n,t}(F,\delta)$.

[F1] The link-state diagram basis is a cellular basis of $\mathrm{TL}_n$ and its right cell modules and forms are $W_{n,t}$ and $\phi_{n,t}$ ([[thm-temperley-lieb-link-state-diagram-basis-is-cellular]]).

[F2] For a finite-dimensional unital cellular algebra over a field, the nonzero cell-form quotients are absolutely simple and form a complete pairwise nonisomorphic set of simple modules; the form is nonzero exactly when the quotient is nonzero, in which case its radical is the unique maximal proper submodule. If the form is zero, the theorem makes no assertion about the actual head ([[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\mathrm{TL}_n(F,\delta)$ is a finite-dimensional unital cellular algebra with cell modules $W_{n,t}$ and cell forms $\phi_{n,t}$. It is finite-dimensional because its diagram basis is a subset of the finite set of matchings of $2n$ boundary points. [F1, given, algebra]

2.1 Apply [F2] to this cellular datum. It gives absolute simplicity and pairwise distinction of every nonzero $D_{n,t}$, and says these quotients exhaust the simple right modules. It also gives $D_{n,t}\ne0$ exactly when $\phi_{n,t}$ is not identically zero and identifies $\operatorname{rad}(\phi_{n,t})$ as the unique maximal proper submodule in that case. [F1, F2, step 1.1]

3.1 If $\phi_{n,t}$ is identically zero, its radical is all of $W_{n,t}$, so $D_{n,t}=0$ by definition. The statement in [F2] makes no assertion about the actual head of $W_{n,t}$ in this case. [F2, step 2.1] ∎
