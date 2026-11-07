---
id: def-siegel-walfisz-coefficient-sequence
kind: definition
title: "Coefficient sequences with the Siegel–Walfisz property"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-smooth-moduli-and-progression-discrepancy, def-natural-logarithm]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§1.2.3, Definition 2, printed pp. 5–6"
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§2, Definition 2.5, printed pp. 9–10"
---

## Definition

Let $x>1$. A coefficient sequence at scale $N(x)\ge1$ is a finitely supported family $\alpha(n;x)\in\mathbb R$ whose support is contained in $[cN(x),CN(x)]$ for fixed constants $0<c<C$, and for which there are fixed constants $C_0,B_0>0$ such that
$$|\alpha(n;x)|\le C_0\,\tau(n)^{B_0}(\log x)^{B_0}$$
for all $n$ and $x>1$. Here $\tau(n)$ is the number of positive divisors of $n$, $\varphi(q)$ is the number of invertible residue classes modulo $q$, and $\log$ is the natural logarithm. Such a sequence has the Siegel–Walfisz property if there is a fixed exponent $B_1>0$ such that, for every $A>1$, all $x>1$, positive integers $q,r$, and integers $a$ with $(a,q)=1$,
$$\left|\sum_{\substack{n\equiv a\ (\mathrm{mod}\ q)\\(n,r)=1}}\alpha(n;x)-\frac1{\varphi(q)}\sum_{\substack{(n,qr)=1}}\alpha(n;x)\right|\ll_{A,\alpha}\tau(qr)^{B_1}\frac{N(x)}{(\log x)^A}.$$
The implied constant is uniform in $x,q,r,a$.

A sequence at scale $N(x)$ is shifted smooth if it has the form $\alpha(n;x)=\psi((n-x_0)/N(x))$, where $x_0\in\mathbb R$, $\psi:\mathbb R\to\mathbb C$ is infinitely differentiable and zero outside a fixed interval $[c,C]$ with $0<c<C$, and for every fixed integer $j\ge0$ there are constants $C_j,B_j$ with $|\psi^{(j)}(t)|\le C_j(\log x)^{B_j}$ for every $t\in\mathbb R$. It is smooth at scale $N(x)$ when $x_0=0$.

## Definition references

[[def-smooth-moduli-and-progression-discrepancy|Squarefree smooth moduli and progression discrepancy]]

[[def-natural-logarithm|The natural logarithm as the inverse of the exponential function]]

[Stadlmann, Definition 2](https://arxiv.org/pdf/2309.00425v3)

[Polymath8a, Definitions 2.5 and 2.6](https://arxiv.org/pdf/1402.0811v3)
