---
id: lem-waring-ramanujan-sum-bound
kind: lemma
title: "A divisor bound for Ramanujan sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
  - def-number-theoretic-mobius-function
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - lem-divisor-function-subpower-bound
  - thm-fundamental-theorem-of-arithmetic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, the major-arc argument; the coefficient sum over reduced residues"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.2, the singular-series expansion and reduced residue sums"
---

## Statement

For an integer $q\ge1$ and an integer $h\ne0$, define the Ramanujan sum
$$c_q(h):=\sum_{\substack{0\le a<q\\\gcd(a,q)=1}}e\!\left(\frac{ah}{q}\right),$$
where $e(t)=\exp(2\pi i t)$ and the unique residue $a=0$ is included when $q=1$. Then
$$|c_q(h)|\le \gcd(q,|h|)\,d_2(|h|),$$
where $d_2(m)$ is the number of positive divisors of $m$ and $\gcd(q,|h|)$ is the greatest positive common divisor of $q$ and $|h|$. Consequently, for every $\varepsilon>0$ there is a constant $C_\varepsilon$ such that $|c_q(h)|\le C_\varepsilon\gcd(q,|h|)|h|^\varepsilon$, uniformly in $q$ and nonzero $h$.

## Statement references

[Wooley, §10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** An integer $q\ge1$, an integer $h\ne0$, the residue representatives $0\le a<q$, and $e(t)=\exp(2\pi i t)$.

[F1] The number-theoretic Möbius function satisfies $\mu(d)=0$ when a prime square divides $d$, and otherwise equals $(-1)^r$ when $d$ has $r$ distinct prime factors; prime factorization is unique ([[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]]).

[F2] For each positive integer $m$ and integer $u$, $\sum_{b=0}^{m-1}e(bu/m)=m$ if $m\mid u$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]], [[def-exponential-character-e]]).

[F3] For each $m\ge1$ and $\varepsilon>0$, $d_2(m)\le C_\varepsilon m^\varepsilon$ for a constant independent of $m$ ([[lem-divisor-function-subpower-bound]]).

[L1] The positive divisors of a positive integer $m$ are exactly the products formed by choosing, for each prime in its unique prime factorization, an exponent between zero and the exponent of that prime; hence $\sum_{d\mid m}\mu(d)=1$ for $m=1$ and $0$ for $m>1$. This follows by expanding $\prod_{p\mid m}(1-1)$ when $m>1$, while for $m=1$ the empty product is $1$. [F1, [[thm-fundamental-theorem-of-arithmetic]]]

## Proof

**Proof technique:** direct.

1.1 For every positive integer $m$, the sum $\sum_{d\mid m}\mu(d)$ equals $1$ when $m=1$ and $0$ otherwise by [L1]. Apply this with $m=\gcd(a,q)$: it gives the indicator identity $\mathbf 1_{\gcd(a,q)=1}=\sum_{d\mid a,\,d\mid q}\mu(d)$, including $a=0,q=1$ under the stated convention. [F1, L1, given]

1.2 Substitute that identity in the definition and write $a=db$ for each divisor $d\mid q$. The residues $a\pmod q$ divisible by $d$ are in bijection with $b\pmod {q/d}$, so finite reindexing gives
$$c_q(h)=\sum_{d\mid q}\mu(d)\sum_{b=0}^{q/d-1}e\!\left(\frac{bh}{q/d}\right)=\sum_{r\mid q,\,r\mid h}r\,\mu(q/r),$$
where the last equality is [F2] with $r=q/d$. The formula also holds at $q=1$, where it reads $c_1(h)=1$. [F2, step 1.1, given]

2.1 Taking absolute values in the divisor formula and using $|\mu|\le1$ gives $|c_q(h)|\le\sum_{r\mid\gcd(q,|h|)}r\le\gcd(q,|h|)d_2(|h|)$, since each such divisor is at most the gcd and there are at most $d_2(|h|)$ of them. [F1, step 1.2, algebra]

2.2 Apply [F3] to $m=|h|$ in step 2.1. This yields $|c_q(h)|\le C_\varepsilon\gcd(q,|h|)|h|^\varepsilon$ uniformly in $q,h$, as claimed. [F3, step 2.1] ∎
