---
id: def-relativized-complexity-class
kind: definition
title: "Relativized complexity class"
status: published
origin: pipeline
deps: [def-p, def-np-by-verifiers, def-polynomial-hierarchy-levels]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 Definitions3.6–3.7, pp70–71."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Fix a total language $A\subseteq\{0,1\}^*$. An oracle machine writes a query word and receives its membership bit in $A$ in one answer step. Query writing counts toward time and the query tape toward space. A polynomial time clock bounds every branch for every oracle. $P^A$ and $NP^A$ are deterministic and nondeterministic polynomial-time oracle classes, respectively; the latter equivalently uses a polynomial-length witness and a deterministic polynomial-time $A$-oracle verifier. Use the conventions of [[def-p]] and [[def-np-by-verifiers]].

For $\Sigma_k^{p,A}$ and $\Pi_k^{p,A}$, replace the deterministic predicate in [[def-polynomial-hierarchy-levels]] by a $P^A$ predicate; level zero is $P^A$. Define $\mathrm{PSPACE}^A$ by deterministic polynomial space under the charged-query convention. For a language class $\mathcal D$, $P^{\mathcal D}=\bigcup_{B\in\mathcal D}P^B$ and $NP^{\mathcal D}=\bigcup_{B\in\mathcal D}NP^B$. Finally $\Delta_{k+1}^p=P^{\Sigma_k^p}$. With a fixed base oracle, a machine may query both $A$ and a language $B$; encode this by the tagged union $A\oplus B=\{0x:x\in A\}\cup\{1x:x\in B\}$.
