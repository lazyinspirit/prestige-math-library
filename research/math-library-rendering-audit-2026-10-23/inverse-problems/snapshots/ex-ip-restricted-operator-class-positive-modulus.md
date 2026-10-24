---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
id: ex-ip-restricted-operator-class-positive-modulus
kind: example
title: A restricted two-operator class with a positive stability modulus
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-operator-and-prior-mismatch
  - def-ip-identifiability-and-stability-modulus
  - def-metric-space
  - lem-metrics-on-rn
  - lem-real-line-is-a-metric-space
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let the truth space be $U=[1,2]\cup[4,5]$ with its absolute-value metric, the operator labels be $\mathfrak A=\{1,2\}$, and the data space be $\mathbb R$ with its absolute-value metric. For each $a\in\mathfrak A$, define $F_a:U\to\mathbb R$ by $F_a(x)=ax$. Let the truth-target map be $q_U:U\to Q:=U$, $q_U(x)=x$. Restrict the admissible truth/operator pairs to
$$\mathcal C=\{(x,1):1\le x\le2\}\cup\{(x,2):4\le x\le5\}\subseteq U\times\mathfrak A,$$
with the restriction to $\mathcal C$ of the metric $d_1((x,a),(x',a'))=|x-x'|+|a-a'|$ on $\mathbb R^2$. The first-coordinate projection $\pi_U:\mathcal C\to U$ is bijective, since every $x\in U$ occurs in exactly one admissible pair. Thus the configuration target $q_{\mathcal C}:=q_U\circ\pi_U:\mathcal C\to Q$, given by $q_{\mathcal C}(x,a)=x$, is also bijective and has equality as its recovery equivalence. For the stability-modulus definition, take $\mathcal C$ as the parameter class, with configuration forward map $G:\mathcal C\to\mathbb R$ given by $G(x,a)=F_a(x)=ax$ and target $q_{\mathcal C}$. Then $\omega(t)=t$ is a uniform stability modulus: for every $c,c'\in\mathcal C$, $|q_{\mathcal C}(c)-q_{\mathcal C}(c')|\le\omega(|G(c)-G(c')|)$.

## Facts & Assumptions

**Given:** The truth space and target map $q_U$, operator labels and maps $F_a$, restricted admissible-pair set $\mathcal C$, configuration target $q_{\mathcal C}$, and configuration forward map $G$ in the Example.

[F1] [[def-ip-operator-and-prior-mismatch]]: admissible truth/operator pairs may form a specified subset of the truth-space/operator-label product; each operator label gives a forward map on the truth space.

[F2] [[def-ip-identifiability-and-stability-modulus]]: for a parameter class with a target map and a forward map defined on that class, a uniform stability modulus is nondecreasing, vanishes at $0$, tends to $0$ as its argument decreases to $0$, and bounds target distance by data distance for every pair in the class.

[F3] [[lem-metrics-on-rn]] [[lem-real-line-is-a-metric-space]] [[def-metric-space]]: $d_1$ is a metric on $\mathbb R^2$, and absolute value is a metric on $\mathbb R$; the three metric axioms remain true when restricted to a subset.

## Verification

1.1 By [F1], $\mathcal C$ is the specified admissible set of operator-labelled configurations. By [F3], $d_1$ is a metric on $\mathbb R^2$; restricting its three metric axioms to $\mathcal C$ makes the restriction a metric. Each $x\in U$ belongs to exactly one of $[1,2]$ and $[4,5]$, so it occurs in exactly one admissible pair. Thus $\pi_U$ and $q_{\mathcal C}=q_U\circ\pi_U$ are bijections onto $U=Q$, and equality is the stated recovery equivalence. [given, F1, F3, algebra]

1.2 If $c=(x,1)$ and $c'=(x',1)$, then $|q_{\mathcal C}(c)-q_{\mathcal C}(c')|=|G(c)-G(c')|$. If $c=(x,2)$ and $c'=(x',2)$, then $|q_{\mathcal C}(c)-q_{\mathcal C}(c')|=\tfrac12|G(c)-G(c')|\le|G(c)-G(c')|$. [given, F1, F3, algebra]

1.3 For $c=(x,1)$ with $1\le x\le2$ and $c'=(x',2)$ with $4\le x'\le5$, we have $|x'-x|\le4$ and $|2x'-x|\ge 2\cdot4-2=6$, so $|q_{\mathcal C}(c)-q_{\mathcal C}(c')|\le|G(c)-G(c')|$. The reversed ordering follows by symmetry of absolute value. [given, F3, algebra]

2.1 Steps 1.2 and 1.3 cover every pair in $\mathcal C$, so $|q_{\mathcal C}(c)-q_{\mathcal C}(c')|\le|G(c)-G(c')|$ for all $c,c'$. The function $\omega(t)=t$ is nondecreasing, satisfies $\omega(0)=0$, and has $\lim_{t\downarrow0}\omega(t)=0$; by [F2] it is the stated uniform stability modulus. [given, F2, step 1.2, step 1.3, algebra] ∎
