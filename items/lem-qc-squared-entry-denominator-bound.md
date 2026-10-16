---
id: lem-qc-squared-entry-denominator-bound
kind: lemma
title: Squared entry denominator bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-denominator-exponent
  - lem-qc-denominator-exponent-well-defined
  - lem-qc-sqrt-two-divisibility-criterion
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 4
---

## Statement

For nonzero $z\in D$, write $s=\operatorname{sde}(z)$. There is
$m\in\{0,1\}$ such that
$\operatorname{sde}(|z|^2)=2s-m$. In particular, if
$\operatorname{sde}(|z|^2)\le3$, then $\operatorname{sde}(z)\le2$.

## Facts & Assumptions

**Given:** $O=\mathbb Z[\omega]$, $\sqrt2=\omega-\omega^3$, and the exponent is the least integer power placing an element in $O$.

[F1] [[lem-qc-sqrt-two-divisibility-criterion]]: for $x=a+b\omega+c\omega^2+d\omega^3$, $\sqrt2\mid x$ iff $a+c$ and $b+d$ are even, and $x\bar x=P+\sqrt2Q$ with $P\equiv(a+c)+(b+d)$ and $Q\equiv(a+c)(b+d)\pmod2$.

## Proof


1.1 Put $s=\operatorname{sde}(z)$ and $x=(\sqrt2)^s z\in O$. Minimality of $s$ implies $\sqrt2\nmid x$, since otherwise $x=\sqrt2 y$ with $y\in O$ would make $(\sqrt2)^{s-1}z=y\in O$. [given, F1, algebra]

2.1 Write $x=a+b\omega+c\omega^2+d\omega^3$ and set $A=a+c$, $B=b+d$. By [F1], $\sqrt2\nmid x$ means $(A,B)$ is not $(0,0)$ modulo $2$. The two congruences $P\equiv A+B$ and $Q\equiv AB$ show that $P,Q$ are not both even: among the three nonzero pairs $(A,B)\in\{0,1\}^2$, the pair $(A+B,AB)$ is never $(0,0)$. For $P+\sqrt2Q$, divisibility by $(\sqrt2)^2=2$ is equivalent to both coefficients $P,Q$ being even. Hence $x\bar x$ is divisible by $\sqrt2$ at most once. [F1, step 1.1, algebra]

3.1 Let $m\in\{0,1\}$ be the number of factors $\sqrt2$ dividing $x\bar x$; write $x\bar x=(\sqrt2)^m y$ with $y\in O$ and $\sqrt2\nmid y$. Since $|z|^2=(x\bar x)/(\sqrt2)^{2s}$, its least denominator exponent is $2s-m$: multiplying by that power gives $y$, while any smaller exponent leaves a denominator because $\sqrt2\nmid y$. Thus $\operatorname{sde}(|z|^2)=2s-m$. [step 2.1, algebra]

4.1 The hypothesis gives $2s-m\le3$ and $m\le1$, so $2s\le4$ and $s\le2$. [step 3.1, given, algebra] ∎

## Remarks

The zero case is excluded in the statement; for $z=0$ both denominator
exponents have the stipulated value $-\infty$ and the implication also holds.
