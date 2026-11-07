---
id: thm-jacquet-shalika-archimedean-unitary-parameter-and-gamma-ratio-bound
kind: theorem
title: Jacquet–Shalika Archimedean Unitary-Parameter and Gamma-Ratio Bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-kim-gamma-ratio-from-explicit-parameter-bounds
  - def-unitary-cuspidal-generic-gln-representation
proof_strategy: archimedean-local-factor-estimate
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "H. Jacquet and J. A. Shalika, Exterior Square L-Functions"
      url: "https://www.jmilne.org/math/Books/AA1988b.pdf"
      locator: "Automorphic Forms, Representations and L-Functions, Part 2, printed pp. 143–226; archimedean unitary-parameter estimate used in Kim Appendix 2."
    - title: "H. H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, proof of Proposition 1, printed pp. 178–180: the exact gamma-ratio interface attributed to Jacquet–Shalika."
---

## Statement

Let $n\ge1$, let $\pi_\infty$ be an unramified unitary generic representation
of $\mathrm{GL}_n(\mathbb R)$ with normalized parameters
$\mu_{1,\infty},\ldots,\mu_{n,\infty}$, and put
$$
L_\infty(s,\pi_\infty,\operatorname{Sym}^2) =\prod_{1\le i\le j\le n} \Gamma\!\left(\frac{s-\mu_{i,\infty}-\mu_{j,\infty}}2\right).
$$
If $F$ is smooth and supported in $(1/2,2)$, define its Mellin transform by
$\widetilde F(s)=\int_0^\infty F(x)x^{-s}\,dx$ and set
$$
H_\pi(s)=\widetilde F(-s) \frac{L_\infty(1+s,\widetilde\pi_\infty,\operatorname{Sym}^2)} {L_\infty(-s,\pi_\infty,\operatorname{Sym}^2)}.
$$
The Jacquet–Shalika archimedean unitary-parameter bounds imply that
$H_\pi(s)$ is holomorphic for $\operatorname{Re}(s)>0$ and decreases rapidly
as $|\operatorname{Im}(s)|\to\infty$ in every closed vertical strip contained
in that half-plane.

## Statement references

[H. Jacquet and J. A. Shalika, *Exterior Square L-Functions*](https://www.jmilne.org/math/Books/AA1988b.pdf)

[H. H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

## Proof status

Kim states this gamma-ratio consequence and attributes its needed local
parameter bound to Jacquet–Shalika. The full scanned Jacquet–Shalika volume was
retrieved, but its complete local archimedean gamma-ratio argument and exact
parameter inequality have not been recovered here. No numerical inequality
is inferred or supplied in their place. This required local step remains
escalated and blocks the Appendix-2 weak Ramanujan proof.

The local Gamma-ratio analysis is now supplied conditionally on explicit
parameter inequalities in [[lem-kim-gamma-ratio-from-explicit-parameter-bounds]].
The original full unitary-generic representation-theoretic assertion is
retained. Deriving its exact parameter bound and contragredient-factor
identification remains held; the conditional helper does not prove that bridge.
