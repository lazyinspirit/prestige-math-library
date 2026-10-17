---
id: thm-centered-taylor-model-encloses-function-range
kind: theorem
title: Centered Taylor models with derivative intervals enclose the function range
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-centered-taylor-model-with-derivative-interval, lem-taylor-integral-remainder, thm-outward-rounded-operations-are-isotone-and-dag-sound]
sources:
  references:
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §11.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

Under the hypotheses in
[[def-centered-taylor-model-with-derivative-interval]], the exact analytic
set satisfies
$$f(X)\subseteq\mathcal E_n(f,X,c,(C_j)_{j=0}^n,D).$$
If every required outward conversion and interval operation returns a finite
enclosure, the computed Taylor model is a finite interval and
$$f(X)\subseteq\mathcal T_n(f,X,c,(C_j)_{j=0}^n,D).$$
For $n=0$, the analytic inclusion is $f(X)\subseteq C_0+[-MR,MR]$, with this
sum interpreted exactly; its outward-rounded evaluation has the same
finite-success qualification. An unavailable required enclosure or a
non-finite conversion or operation returns no finite Taylor-model
certificate. When valid coefficient and derivative enclosures are supplied,
arithmetic failure does not invalidate the analytic inclusion, but that
inclusion asserts no representable result or fallback computation.

## Facts & Assumptions

**Given:** The data and exact analytic set in
[[def-centered-taylor-model-with-derivative-interval]], Taylor's integral
remainder formula in [[lem-taylor-integral-remainder]], and the conditional
finite-result arithmetic interface in
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]. The
finite-success condition is imposed only for the computed enclosure claim.

[L1] [[def-centered-taylor-model-with-derivative-interval]]: each $C_j$
contains $f^{(j)}(c)/j!$, $D$ contains $f^{(n+1)}(X)$, $M$ bounds the
absolute values of $D$, and $R$ bounds $|x-c|$ on $X$. The analytic set uses
exact set operations. Its computed model includes the required outward
endpoint conversions and returns a finite certificate only when every
conversion and interval operation is finite; otherwise it propagates the
actual status or reports the unavailable enclosure without a certificate.

[L2] [[lem-taylor-integral-remainder]]: each Taylor remainder is an integral
and has absolute value at most $M|x-c|^{n+1}/(n+1)!$ when
$|f^{(n+1)}|\le M$ on the segment.

[L3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: if all
operation nodes of a finite expression DAG return finite enclosures, every
exact node value lies in its computed enclosure. A non-finite status asserts
no finite DAG enclosure.

## Proof

1.1 Fix $x\in X$. If $x=c$, the polynomial already equals $f(c)$ and the remainder is zero. Otherwise the segment from $c$ to $x$ lies in $X$, so [L1] places $f^{(n+1)}$ there in $D$ and gives $|f^{(n+1)}|\le M$; also $|x-c|\le R$. The Taylor integral remainder bound [L2] is therefore at most $\rho:=M R^{n+1}/(n+1)!$. [given, L1, L2]

2.1 Each exact coefficient $f^{(j)}(c)/j!$ lies in $C_j$ by [L1], and $x-c\in X-c$. Thus exact set addition and multiplication place $P_n(x)$ in $\sum_{j=0}^n C_j(X-c)^j$. By step 1.1 the remainder lies in $[-\rho,\rho]$, so $f(x)\in\mathcal E_n$. Since $x$ was arbitrary, this proves the unconditional analytic inclusion. At $n=0$, $(X-c)^0=\{1\}$ and $\rho=MR$, giving the stated exact constant-plus-remainder set. [L1, step 1.1, algebra]

3.1 Now assume every required outward conversion and interval operation is finite. By [L1], converted input intervals contain their exact inputs, and the converted symmetric remainder interval contains $[-\rho,\rho]$. Apply [L3] to the finite polynomial evaluation with the actual coefficients and $x-c$, and then to its final addition with the actual remainder from step 1.1. The returned interval $\mathcal T_n$ contains $f(x)$ for every $x\in X$. If a required enclosure is unavailable or a conversion or operation is non-finite, [L1] instead prescribes its failure return without a finite certificate; [L3] supplies no finite DAG conclusion. When the analytic input enclosures are supplied, arithmetic failure does not affect the exact inclusion already proved in step 2.1. [given, L1, L3, step 1.1, step 2.1, algebra] ∎
