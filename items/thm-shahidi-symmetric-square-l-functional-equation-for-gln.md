---
id: thm-shahidi-symmetric-square-l-functional-equation-for-gln
kind: theorem
title: Shahidi Functional Equation for Symmetric-Square L-Functions on GL(n)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-symmetric-square-l-function-for-gln
proof_strategy: global-langlands-shahidi
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "F. Shahidi, On the Ramanujan conjecture and finiteness of poles for certain L-functions"
      url: "https://www.math.purdue.edu/~fshahidi/articles/Shahidi%20%5B1988%2C%2038pp%5D---On%20the%20Ramanujan%20conjecture%20and%20finiteness%20of%20poles%20for%20certain%20L-functions.pdf"
      locator: "Theorem 6.1, printed p. 576: meromorphic continuation and functional equation in the Langlands–Shahidi method."
    - title: "H. H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 3, printed p. 176: the symmetric-square functional equation is attributed to Shahidi."
---

## Statement

Let $F$ be a number field and let $\pi$ be a cuspidal automorphic
representation of $\mathrm{GL}_n(\mathbb A_F)$ for an integer $n\ge1$.
Assume $\pi$ is globally generic, meaning that its space admits a nonzero
Whittaker functional. Let $\widetilde\pi$ be its contragredient. The completed
Langlands–Shahidi symmetric-square function $\Lambda(s,\pi,\operatorname{Sym}^2)$,
formed from the local factors for the symmetric-square representation, has
meromorphic continuation to $s\in\mathbb C$ and satisfies
$$\Lambda(s,\pi,\operatorname{Sym}^2)
=\epsilon(s,\pi,\operatorname{Sym}^2)
\Lambda(1-s,\widetilde\pi,\operatorname{Sym}^2),$$
where $\epsilon(s,\pi,\operatorname{Sym}^2)$ is the global epsilon factor in
the same normalization.

## Statement references

[F. Shahidi, *On the Ramanujan conjecture and finiteness of poles for certain L-functions*](https://www.math.purdue.edu/~fshahidi/articles/Shahidi%20%5B1988%2C%2038pp%5D---On%20the%20Ramanujan%20conjecture%20and%20finiteness%20of%20poles%20for%20certain%20L-functions.pdf)

[H. H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

## Proof status

This is the Langlands–Shahidi continuation and functional-equation result for
the symmetric-square representation. The local intertwining-operator
normalization, local factors at every place, global factorization, and
functional-equation argument are not reconstructed here. The statement is
therefore escalated; its existence does not certify the standard-factor
assignment in its definition supplier.
