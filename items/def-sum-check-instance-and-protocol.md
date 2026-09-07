---
id: def-sum-check-instance-and-protocol
kind: definition
title: "Sum-check with explicit degree bounds"
status: draft
origin: pipeline
deps: [def-finite-field-and-its-order, def-completeness-and-soundness, def-multivariate-polynomial-ring-by-iteration]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a74.1 protocol box pp.33\u201336"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Definition

A **sum-check instance** consists of a supplied finite field $F$, a fixed formal polynomial $g\in F[X_1,\ldots,X_n]$ with $n\geq1$, trusted nonnegative integer individual degree bounds $d_i$ satisfying $\deg_{X_i}g\leq d_i$ for every $i$, a claimed value $H\in F$, and trusted access to point evaluation of that same $g$ on $F^n$. Zero polynomials satisfy every nonnegative bound. The claim is
$$H=\sum_{b\in\{0,1\}^n}g(b).$$
The field order is as in [[def-finite-field-and-its-order]], the formal ring as in [[def-multivariate-polynomial-ring-by-iteration]], and correctness uses the honest/universal-strategy quantifiers of [[def-completeness-and-soundness]].

Set $C_0=H$. For each $i=1,\ldots,n$, in this order:

1. Receive a coefficient list $(a_0,\ldots,a_m)$ specifying $h_i(T)=\sum_{j=0}^m a_jT^j$, with $0\leq m\leq d_i$. Reject a missing, malformed, non-field, or overlength message. The single coefficient $0$ represents zero; trailing zero coefficients are allowed up to the length cap.
2. Check $h_i(0)+h_i(1)=C_{i-1}$; reject on failure.
3. Only after that message is fixed and checked, draw a fresh independent uniform $r_i\in F$ and put $C_i=h_i(r_i)$. Send $r_i$ to the prover if $i<n$; sending it when $i=n$ is optional.

Finally compute $g(r_1,\ldots,r_n)$ through the trusted evaluator and accept exactly when it equals $C_n$ and every earlier check passed. In particular $n=1$ still has a coefficient message, a fresh challenge, and a terminal comparison. The evaluator's answer is not an unchecked prover assertion.

For a fixed challenge prefix, the honest round polynomial is
$$q_i(T)=\sum_{b\in\{0,1\}^{n-i}}g(r_1,\ldots,r_{i-1},T,b).$$
The cube of dimension zero has one empty tuple, so $q_n(T)=g(r_1,\ldots,r_{n-1},T)$. Write
$$S_i=\sum_{b\in\{0,1\}^{n-i}}g(r_1,\ldots,r_i,b),\qquad S_0=\sum_{b\in\{0,1\}^n}g(b).$$
A scalar claim at stage $i$ is **true** when $C_i=S_i$. The honest prover sends $h_i=q_i$. The input $H$ is not counted as an additional prover message.
