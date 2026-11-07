---
id: thm-rational-phase-incomplete-sum-bound
kind: theorem
title: "Incomplete rational-phase sums from Deligne and one van der Corput step"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps: [def-polymath-densely-divisible-moduli, thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§4.4, Proposition 4.12 and Corollary 4.16, printed pp. 30–38"
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§3.5, Lemmas 12–13, printed pp. 24–27"
---

## Statement

Let $d_1,d_2$ be squarefree positive integers, put $q=[d_1,d_2]$, and assume $q\in D(y)$ for some $y\ge1$. Let $d\mid q$, let $a$ be a residue class modulo $d$, and let $c_1,c_2,\ell_1,\ell_2\in\mathbb Z$. Write $\delta_i=d_i/(d_1,d_2)$ and $\delta_i'=\delta_i/(d,\delta_i)$. For $N\ge1$, let $\Psi_N(n)=\Psi((n-n_0)/N)$, where $n_0\in\mathbb R$, $\Psi$ is infinitely differentiable and compactly supported, and its fixed-order derivatives are bounded by fixed powers of $\log N$. For a denominator $n+\ell_i$ not invertible modulo $d_i$, interpret $e_{d_i}(c_i/(n+\ell_i))$ as zero; otherwise use the unique modular inverse. If $d\le N\le q^C$ for a fixed $C>0$, then for every $\varepsilon>0$,
$$\left|\sum_{n\equiv a\ (\mathrm{mod}\ d)}\Psi_N(n)e_{d_1}\!\left(\frac{c_1}{n+\ell_1}\right)e_{d_2}\!\left(\frac{c_2}{n+\ell_2}\right)\right|\ll_{\varepsilon,C,\Psi}q^\varepsilon\left(d^{-1/2}N^{1/2}q^{1/6}y^{1/6}+d^{-1}\frac{(c_1,\delta_1')}{\delta_1'}\frac{(c_2,\delta_2')}{\delta_2'}N\right),$$
and also the variant with $q^{1/6}y^{1/6}$ replaced by $q^{1/2}$.

## Statement references

[[def-polymath-densely-divisible-moduli|Iterated dense divisibility of squarefree moduli]]

[[thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions|Deligne Quasi-Orthogonality for Geometrically Irreducible Trace Functions]]

[Polymath8a, Proposition 4.12 and Corollary 4.16](https://arxiv.org/pdf/1402.0811v3)

[Stadlmann, Lemmas 12–13](https://arxiv.org/pdf/2309.00425v3)

## Facts & Assumptions

**Given:** Squarefree $d_1,d_2$, $q=[d_1,d_2]$ densely divisible by $y$, $d\mid q$, a residue class modulo $d$, integer phase parameters, and a shifted smooth cutoff at scale $N\ge d$.

[F1] [[def-polymath-densely-divisible-moduli]]: $D(y)=D^{(1)}(y)$ consists of positive integers that admit the recursive factorization required at every scale $1\le R\le yn$.

[F2] [[thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions]]: geometrically irreducible weight-zero middle-extension trace functions satisfy the square-root correlation bound with the FKM conductor factor, with the stated main-term subtraction when the sheaves are geometrically isomorphic.

## Proof obligation

The primary proof combines completion of sums, Deligne's complete correlation bound, and one $q$-van der Corput step, with separate gcd and diagonal terms. The complete derivation in Polymath §4.4 and Stadlmann Lemmas 12–13 has not been reconstructed into a local proof. The Deligne supplier also has the geometric proof-chain holds recorded in the cross-batch evidence; this item remains escalated.

## Source-scope correction and remaining obligation

The printed source states the bound for every $N\ge1$, but its $d>1$ proof substitutes $n=dm+a$ and applies the preceding $d=1$ argument at scale $N/d$; that argument assumes its scale is at least one. The displayed claim is therefore restricted to $N\ge d$, the range that removes this specific obstruction. This correction does not assert that the remaining completion, geometric correlation, dense-divisor, or diagonal estimates have been proved.

The original unrestricted range is false. Let $q$ run through primorials, let $y$ be the largest prime factor, take $d_1=q$, $d_2=1$, $d=q$, $a=1$, $c_1=c_2=\ell_1=\ell_2=0$, $N=2$ and $n_0=1$. Choose a fixed smooth bump $\Psi$ supported in $(-1/4,1/4)$ with $\Psi(0)=1$. Only $n=1$ contributes, so the sum is one. The accepted smooth-divisor lemma makes $q$ $y$-densely divisible. Here $\delta_1'=\delta_2'=1$, and for any fixed $\varepsilon<1/6$ the first proposed right side is $O(q^{\varepsilon}(q^{-1/3}y^{1/6}+q^{-1}))=O(q^{\varepsilon-1/6})\to0$, using $y\le q$. This is an exact counterexample, not a claim about the correctness of the restricted range.
