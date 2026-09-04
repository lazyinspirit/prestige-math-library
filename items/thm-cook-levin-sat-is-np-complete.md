---
id: thm-cook-levin-sat-is-np-complete
kind: theorem
title: "SAT is NP-complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-np-hard-and-np-complete, def-polynomial-time-many-one-reduction, prop-sat-is-in-np, lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs, lem-cook-levin-map-is-polynomial-time, thm-verifier-and-nondeterministic-definitions-of-np-agree]
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
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.utoronto.ca/~sacook/homepage/1971.pdf"
---

## Statement

The satisfiability language $SAT$ is NP-complete.

## Facts & Assumptions

**Given:** A language $L\in NP$.

[L1] The language $SAT$ lies in $NP$, by [[prop-sat-is-in-np]].

[L2] The verifier and nondeterministic-machine definitions of $NP$ agree, by [[thm-verifier-and-nondeterministic-definitions-of-np-agree]].

[L3] For a fixed nondeterministic polynomial-time machine, the Cook-Levin formula is satisfiable exactly when an accepting bounded tableau exists and is computable in polynomial time, by [[lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs]] and [[lem-cook-levin-map-is-polynomial-time]].

[L4] A language is NP-complete exactly when it lies in $NP$ and every language in $NP$ polynomial-time many-one reduces to it, by [[def-np-hard-and-np-complete]] and [[def-polynomial-time-many-one-reduction]].

## Proof

**Proof technique:** direct.

1.1 By [L1], $SAT$ is in $NP$. To prove NP-completeness via [L4], it remains to prove NP-hardness. [L1, L4, given]

1.2 Because $L\in NP$, [L2] supplies a nondeterministic polynomial-time machine $N$ deciding $L$. For an input $x$, let $f(x)$ be the Cook-Levin formula $\psi_{N,x}$ for a polynomial bound on computations of $N$ on $x$. [L2, given, construct]

2.1 By [L3], the formula $f(x)$ is satisfiable exactly when $N$ has an accepting bounded tableau on $x$; with the bounded-tableau convention that later rows may repeat a halting configuration, this happens exactly when $x\in L$. The same citation shows that $f$ is computable in polynomial time. Therefore $L\le_p SAT$. [L3, step 1.2]

3.1 Since $L\in NP$ was arbitrary, step 2.1 proves that every language in $NP$ reduces to $SAT$. Together with step 1.1, [L4] gives that $SAT$ is NP-complete. [L4, step 1.1, step 2.1] ∎
