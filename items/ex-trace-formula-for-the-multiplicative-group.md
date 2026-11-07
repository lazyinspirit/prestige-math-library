---
id: ex-trace-formula-for-the-multiplicative-group
kind: example
title: "Trace formula on the multiplicative group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-compactly-supported-etale-cohomology
  - def-frobenius-trace-on-a-constructible-stalk
  - def-l-adic-sheaf-as-compatible-system
  - def-lisse-l-adic-sheaf-on-a-scheme
  - thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé XV §3"
      url: "https://grothendiecksga.com/read/sga5/en/XV-3.html"
---

## Example

Let $\mathbb F_q$ be a finite field of characteristic $p$, let $\ell\ne p$ be a prime, and let $\mathcal F$ be the rank-one constant $\mathbb Q_\ell$-sheaf on $\mathbb G_{m,\mathbb F_q}=\mathbb A^1_{\mathbb F_q}\setminus\{0\}$, defined by the trivial Galois action on its geometric stalk. Every rational stalk has geometric Frobenius trace $1$, so the point-side sum in the Grothendieck–Lefschetz trace formula is $q-1$; the formula identifies the alternating compactly supported cohomological trace with the same value.

## Example references

[SGA 5, Exposé XV §3](https://grothendiecksga.com/read/sga5/en/XV-3.html)

## Facts & Assumptions

**Given:** The finite field $\mathbb F_q$, the prime $\ell\ne p$, and the rank-one constant sheaf with trivial Galois action described in the Example.

[F1] [[def-frobenius-trace-on-a-constructible-stalk]]: at a rational point $x$, the local term is the trace of geometric Frobenius on the geometric stalk.

[F2] [[thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves]]: for a separated finite-type $X/\mathbb F_q$ and constructible $\mathbb Q_\ell$-sheaf $\mathcal F$, the sum of geometric Frobenius traces on rational stalks equals the alternating sum of geometric Frobenius traces on $H_c^i(X_{\overline{\mathbb F}_q},\mathcal F)$.

## Verification

1.1 The rational points of $\mathbb G_{m,\mathbb F_q}$ are the $q-1$ nonzero elements of $\mathbb F_q$. The sheaf has one-dimensional stalk with trivial Galois action at each such point, so geometric Frobenius acts as the identity and each local trace is $1$ by [F1]. Thus the point-side sum is $q-1$. [given, F1, algebra]

2.1 Apply [F2] to $X=\mathbb G_{m,\mathbb F_q}$ and the stated sheaf. This scheme is the open subscheme $\mathbb A^1_{\mathbb F_q}\setminus\{0\}$, hence separated and finite type, and the constant rank-one sheaf is constructible. Its alternating compactly supported cohomological trace is therefore $q-1$. [given, F2, step 1.1, algebra] ∎
