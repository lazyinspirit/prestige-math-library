---
dependency_level: 3
id: lem-selberg-sieve-for-one-or-two-forbidden-residues
kind: lemma
title: A sufficient one-/two-residue sieve from local Selberg optimization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- thm-selberg-sieve-upper-bound-with-remainders
- thm-chinese-remainder-theorem
- thm-product-rule
- def-congruence-modulo-an-integer
- def-integers-modulo-n
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Kedlaya, Notes on Analytic Number Theory, §13.2; local quantitative specialization of the Selberg quadratic sieve
    url: https://kskedlaya.org/ant/chap-selberg.html
---

## Statement

Set $c=1/1000$. There is an absolute $C>0$ with the following property. Let $I$ be a real interval of length $L\ge2$. For any finite set of primes $3\le p\le L^c$, forbid $\nu(p)\in\{1,2\}$ residues at $p$. Then the number of integers in $I$ avoiding all forbidden residues is at most

$$CL\prod_p(1-\nu(p)/p).$$

The same holds for an interval of integer parameters in a progression when the stated forbidden conditions are expressed in that parameter. The constants do not depend on the particular residues or selected subset of primes.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[thm-selberg-sieve-upper-bound-with-remainders]]

[[thm-chinese-remainder-theorem]]

[[thm-product-rule]]

[[def-congruence-modulo-an-integer]]

[[def-integers-modulo-n]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-selberg-sieve-upper-bound-with-remainders]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[thm-chinese-remainder-theorem]] gives its stated result under its stated hypotheses.

[F4] Finite Cartesian products have cardinality equal to the product of the cardinalities of their factors, including the empty product. [[thm-product-rule]]

[F5] A residue class modulo positive $q$ consists of the integers $a+qk$, $k\in\mathbb Z$; distinct classes are disjoint. [[def-congruence-modulo-an-integer]] [[def-integers-modulo-n]]

## Proof

1.1 Use the actual local Selberg theorem, with $g(p)=\nu(p)/p$, $D=L^{1/40}$, and divisor support $d<D$ (the theorem's level $y=D^2$). Put $h(p)=g(p)/(1-g(p))$ and $Z=\prod_p(1+h(p))=\prod_p(1-g(p))^{-1}$. On all squarefree divisors of the prime product, the logarithmic moment satisfies $$\sum_dh(d)\log d=Z\sum_p g(p)\log p\le Z(2\log(L^c)+C_0).$$ This is just finite Euler-product differentiation, or expansion and regrouping according to a distinguished prime divisor. The total weight with $d\ge D$ is at most this moment divided by $\log D$. Take, for example, $c=1/1000$. For $L$ sufficiently large the ratio is less than $1/2$, and thus $H=\sum_{d<D}h(d)\ge Z/2$. [given, F1, F2, F3, algebra]

2.1 The explicit Selberg weights satisfy $|\rho(d)|\le h(d)/g(d)=\prod_{p\mid d}(1-g(p))^{-1}\le d$, since $p\ge3$, $\nu(p)\le2$ and $(1-2/p)^{-1}\le p$. For each squarefree divisor $q$ of the selected prime product, define $\nu(q):=\prod_{p\mid q}\nu(p)$, with $\nu(1)=1$. Let $\Omega_p$ be the forbidden residue set at $p$. The CRT bijection in [F3] restricts to a bijection from the classes satisfying all these forbidden conditions to $\prod_{p\mid q}\Omega_p$. By [F4] their number is exactly $\nu(q)$. By [F5], a fixed class is parametrized as $a+qk$, so its intersection with $I$ corresponds to an interval of integer parameters of length $L/q$. For a closed interval $[u,v]$ this count is $\lfloor v\rfloor-\lceil u\rceil+1$ when nonempty; comparison with $v-u$ gives error at most one. The same bound holds with either endpoint omitted, using the corresponding strict floor or ceiling inequality, and for an empty integer intersection. Thus each class has count $L/q+O(1)$ with absolute error at most one. Summing the disjoint classes gives $A_q=L\nu(q)/q+r_q$ with $|r_q|\le\nu(q)\le q$. Therefore the absolute total quadratic remainder is at most $\sum_{d,e<D}d e[d,e]\le\sum_{d,e<D}d^2e^2\le D^6=L^{3/20}$. The main term is at most $2L/Z$. [F1] gives $Z^{-1}\gg(\log(2L))^{-2}$ even when all allowed primes carry two forbidden classes. Hence the remainder is absorbed by a fixed multiple of $L/Z$. Finally the bounded range of $L$ omitted above contains only finitely many possible sieving primes and has a uniformly positive lower bound for $Z^{-1}$, so enlarging $C$ covers it as well. No general fundamental lemma is used. [given, F1, F2, F3, F4, F5, step 1.1, algebra] ∎
