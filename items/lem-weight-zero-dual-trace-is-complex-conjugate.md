---
id: lem-weight-zero-dual-trace-is-complex-conjugate
kind: lemma
title: "Dual Trace of a Weight-Zero Middle-Extension Sheaf Is Complex Conjugate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-weight-zero-trace-function
  - def-pointwise-purity-and-weights-of-an-l-adic-sheaf
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §2.5"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "PDF p. 9; dual trace identity and attribution to Gabber at ramified points"
    - title: "Pierre Deligne, *La conjecture de Weil II*, §1.2"
      url: "https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf"
      locator: "printed p. 143; weight-zero Frobenius eigenvalue convention"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime, let $\ell\ne p$, fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$, and let $j:U\hookrightarrow\mathbb P^1_{\mathbb F_p}$ be the maximal lisse open inclusion for a finite-rank lisse sheaf $\mathcal L$ whose ordinary middle extension is $\mathcal M=j_*\mathcal L$. Assume $\mathcal M$ is pointwise pure of weight zero on $U$ and its boundary stalks have weights at most zero. Let $\check{\mathcal M}:=j_*(\mathcal L^\vee)$ be the middle extension of the dual lisse sheaf. Then for every finite extension $k/\mathbb F_p$ and every $x\in\mathbb P^1(k)$, the geometric-Frobenius traces computed after base change to $k$ satisfy
$$t_{\check{\mathcal M},k}(x)=\overline{t_{\mathcal M,k}(x)}.$$

## Statement references

[[def-weight-zero-trace-function|Weight-zero trace function]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §2.5](https://people.math.ethz.ch/~kowalski/elements.pdf)

[Pierre Deligne, *La conjecture de Weil II*, §1.2](https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf)

## Facts & Assumptions

**Given:** The prime $p$, the prime $\ell\ne p$, the fixed embedding $\iota$, and the sheaves in the Statement.

[F1] [[def-weight-zero-trace-function]]: on the lisse locus, geometric-Frobenius eigenvalues of $\mathcal M$ have complex absolute value $1$; boundary eigenvalues have absolute value at most $1$.

## Proof status

No proof is supplied for the ramified-stalk assertion. On the lisse locus the identity follows by dualizing the Frobenius eigenvalues, but at a boundary point duality does not identify the invariant stalk with the dual of the invariant stalk by a formal linear-algebra argument. The Fouvry–Kowalski–Michel treatment attributes this equality at ramified points to Gabber. A local Gabber-compatible supplier and its hypotheses are absent, so the all-points claim is escalated without claiming readiness.
