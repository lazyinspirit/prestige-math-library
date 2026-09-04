---
id: lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module
kind: lemma
title: "Reducing an OG-lattice modulo the maximal ideal gives a finite-dimensional kG-module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-og-lattice-and-reduction-modulo-the-maximal-ideal]
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

If $L$ is an $\mathcal O G$-lattice, then $\overline L=L/\mathfrak mL$ is a
finite-dimensional $kG$-module.

## Facts & Assumptions

**Given:** A splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group $G$ and an $\mathcal O G$-lattice $L$.

[F1] An $\mathcal O G$-lattice is finite free over $\mathcal O$, and its
reduction modulo $\mathfrak m$ is $L/\mathfrak mL\cong k\otimes_{\mathcal O}L$
with induced $G$-action ([[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose an $\mathcal O$-basis of $L$ of size $r<\infty$. Tensoring with $k=\mathcal O/\mathfrak m$ sends that basis to a $k$-basis of $k\otimes_{\mathcal O}L\cong L/\mathfrak mL$, so $\dim_k\overline L=r$. [F1, given, choose, algebra]

2.1 The $G$-action on $L$ is $\mathcal O$-linear, so $\mathfrak mL$ is $G$-stable and the quotient action on $L/\mathfrak mL$ is well defined. Thus $\overline L$ is a finite-dimensional $kG$-module. [F1, step 1.1, algebra] ∎
