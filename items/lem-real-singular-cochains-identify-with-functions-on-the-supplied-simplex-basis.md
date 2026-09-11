---
id: "lem-real-singular-cochains-identify-with-functions-on-the-supplied-simplex-basis"
kind: "lemma"
title: "Real singular cochains identify with functions on the supplied simplex basis"
deps: ["def-continuous-singular-simplex-and-real-singular-chain-group"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Explicit coefficient specialization preceding DG-16 item 4; Hatcher §3.1"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For any set $S$, evaluation on the supplied formal generators gives real-linear bijections
$$\operatorname{Hom}_{\mathbb R}(\mathbb R^{(S)},\mathbb R)\cong\mathbb R^S\cong\operatorname{Hom}_{\mathbb Z}(\mathbb Z^{(S)},\mathbb R).$$
For $S=S_k(X)$ these identify real-linear cochains on real singular chains with additive cochains on integer singular chains. They commute with precomposition by every real extension of an integer matrix having finite columns, in particular the signed singular boundary. No basis choice is needed.

## Facts & Assumptions

**Given:** A set $S$ and, for the compatibility assertion, an integer homomorphism $D:\mathbb Z^{(T)}\to\mathbb Z^{(S)}$ specified by finite columns.

[F1] Real singular chains are finite-support functions with unique formal coefficients and the explicit integer-tensor identification ([[def-continuous-singular-simplex-and-real-singular-chain-group]]).

## Proof

1.1 For $a:S\to\mathbb R$ define $L_a(\sum r_s[s])=\sum r_sa(s)$ and $A_a(\sum n_s[s])=\sum n_sa(s)$. Unique finite coefficients make both sums well-defined; finite distributivity proves real linearity of $L_a$ and additivity of $A_a$. Scalar multiplication of additive maps is pointwise. [given, F1, algebra]

2.1 Evaluation sends $L_a$ and $A_a$ back to $a$ because their value on $[s]$ is $a(s)$. Conversely every real-linear $L$ satisfies $L(\sum r_s[s])=\sum r_sL([s])$, and every additive $A$ satisfies $A(\sum n_s[s])=\sum n_sA([s])$, including negative integers by additive inverses. Thus evaluation and extension are inverse in both cases and are real-linear. There is no finite-support condition on $a$. [step 1.1, algebra]

3.1 Write $D[t]=\sum_s d_{st}[s]$ with each column finite, and let $D_{\mathbb R}$ use the same formula over $\mathbb R$. Both $L_aD_{\mathbb R}$ and $A_aD$ have value $\sum_s d_{st}a(s)$ on $[t]$, so the identifications commute with these maps. A signed face sum is such a finite column, even when repeated faces combine. Zero columns and the degree-zero boundary give zero values. [step 1.1, step 2.1, algebra]

4.1 If $S=\varnothing$, all three spaces are zero, with the unique empty function. If $S$ is a singleton, evaluation is the usual identification with $\mathbb R$; in negative singular degrees the groups are zero by convention. All inverse maps have specified formulas on the supplied formal generators, so no representative or basis selection and no AC is used. [F1, step 1.1, step 2.1, step 3.1] ∎
