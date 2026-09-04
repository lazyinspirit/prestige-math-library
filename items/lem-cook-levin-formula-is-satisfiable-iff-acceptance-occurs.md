---
id: lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs
kind: lemma
title: "The Cook-Levin formula is satisfiable if and only if an accepting bounded tableau exists"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boolean-formula-cnf-and-sat, def-bounded-computation-tableau, lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal, lem-exactly-one-symbol-constraints-have-polynomial-size, lem-start-accept-and-transition-constraints-have-polynomial-size]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.utoronto.ca/~sacook/homepage/1971.pdf"
---

## Statement

Fix a nondeterministic one-tape machine $N$, an input $w$, and a bound
$T\ge |w|$ such that every branch of $N$ on $w$ halts within $T$ steps and
never visits a tape cell beyond position $T$. Let
$$ \psi_{N,w}:=\psi_{\mathrm{cell}}\land\psi_{\mathrm{start}}\land\psi_{\mathrm{move}}\land\psi_{\mathrm{accept}} $$
be the standard Cook-Levin formula built from the tableau variables. Then
$\psi_{N,w}$ is satisfiable if and only if there exists an accepting bounded
computation tableau for $N$ on $w$ of height and width $T+1$.

## Facts & Assumptions

**Given:** A nondeterministic one-tape machine $N$, an input $w$, a bound $T$
satisfying the hypotheses in the statement, and the Cook-Levin formula
$\psi_{N,w}$.

[L1] The cell constraints force each tableau position to carry exactly one symbol, by [[lem-exactly-one-symbol-constraints-have-polynomial-size]].

[L2] The start, accept, and transition constraints enforce the initial row, an accepting position, and local transition legality, by [[lem-start-accept-and-transition-constraints-have-polynomial-size]].

[L3] A tableau is a valid branch computation history exactly when its first row is correct and every local window is legal, by [[lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal]].

## Proof

**Proof technique:** direct.

1.1 If an accepting bounded tableau exists, assign each variable $X_{r,c,a}$ the value $1$ exactly when the tableau places symbol $a$ in cell $(r,c)$. The tableau then satisfies $\psi_{\mathrm{cell}}$ by construction, while [L2] and [L3] show that it also satisfies $\psi_{\mathrm{start}}$, $\psi_{\mathrm{move}}$, and $\psi_{\mathrm{accept}}$. Hence $\psi_{N,w}$ is satisfiable. [L2, L3, given, construct]

1.2 Conversely, suppose $\psi_{N,w}$ is satisfiable. By [L1], the satisfying assignment determines one symbol in every tableau cell. [L1, given]

2.1 The tableau extracted in step 1.2 satisfies the required start, accept, and local transition conditions by [L2]. Therefore [L3] turns it into a genuine branch computation history for $N$ on $w$, with later rows allowed to repeat once a halting configuration has appeared, and the accept part of [L2] makes that history accepting. [L2, L3, step 1.2]

3.1 Steps 1.1 and 2.1 prove both implication directions, so $\psi_{N,w}$ is satisfiable exactly when an accepting bounded tableau exists. [step 1.1, step 2.1] ∎
