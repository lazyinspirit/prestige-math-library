---
id: ex-cohen-macaulay-associated-primes-unmixed
title: Associated primes are unmixed in a Cohen--Macaulay example
kind: example
status: published
origin: pipeline
deps: [ex-cohen-macaulay-ring-with-zero-divisors]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
---
## Example

For $A=k\llbracket x,y\rrbracket/(xy)$,
$$\operatorname{Ass}_A(A)=\{(x)A,(y)A\}.$$
Both associated-prime quotients have dimension $1=\dim A$.

## Facts & Assumptions

**Given:** $A$ is the Cohen--Macaulay hypersurface from `ex-cohen-macaulay-ring-with-zero-divisors`.

## Verification

**Proof technique:** direct.

1.1 Put $Q=k\llbracket x,y\rrbracket$. Its quotients by $(x)$ and $(y)$ are the domains $k\llbracket y\rrbracket$ and $k\llbracket x\rrbracket$. Also $(x)\cap(y)=(xy)$: a series divisible by both $x$ and $y$ has every monomial divisible by $xy$. Thus $(x)A$ and $(y)A$ are prime. In $A$, the annihilator of the nonzero class of $x$ is $(y)A$, and that of $y$ is $(x)A$, so both primes are associated. [given, algebra]

2.1 Let $0\ne a\in A$ be represented by $f\in Q$. If $f\in(x)\setminus(y)$, then $ga=0$ implies $gf\in(xy)\subseteq(y)$; reduction in the domain $Q/(y)$ forces $g\in(y)$, and the reverse inclusion follows from $f\in(x)$. Hence $\operatorname{Ann}_A(a)=(y)A$. Symmetrically, if $f\in(y)\setminus(x)$, its annihilator is $(x)A$. If $f$ lies in neither ideal, reduction modulo each of $(x)$ and $(y)$ forces any annihilator $g$ into their intersection $(xy)$, so $\operatorname{Ann}_A(a)=0$. The remaining case $f\in(x)\cap(y)$ represents zero. Since $xy=0$ in $A$ with $x,y\ne0$, the zero ideal is not prime. Therefore $(x)A$ and $(y)A$ are the only associated primes. [step 1.1, algebra]

3.1 Finally $A/(x)\cong k\llbracket y\rrbracket$ and $A/(y)\cong k\llbracket x\rrbracket$, each of dimension $1=\dim A$ by the cited hypersurface example. This verifies unmixedness directly. [given, step 2.1, algebra] ∎
