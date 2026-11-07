---
dependency_level: 4
id: lem-final-prime-range-pair-sieve-mean-square
kind: lemma
title: Final-range coefficient error, with the independent Rankin choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- lem-improved-dirichlet-mean-square-from-close-coefficient-pairs
- lem-selberg-sieve-for-one-or-two-forbidden-residues
- lem-elementary-rankin-smooth-number-upper-bound
- lem-chinese-remainder-two-moduli
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals; local adapted proof with explicit endpoint and parameter corrections
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

Fix $R\ge4$. For sufficiently large $X$, let

$$P=\exp\left(\frac{(\log X)(\log\log\log X)}{R\log\log X}\right),\qquad Q=X\exp(- (\log X)^\beta),\qquad 1/2\le\beta\le99/100.$$

Let $h\in[1,X]$ and $T=X/h$. If $|a_n|\le1$ and $A$ consists of the integers $n\in[X,3X]$ with no prime divisor in $[P,Q]$, then

$$\int_{-T}^T\left|\sum_{n\in A}a_nn^{-1-it}\right|^2dt\ll_R (\log X)^{-2(1-\beta)}+h^{-2}.$$

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[lem-improved-dirichlet-mean-square-from-close-coefficient-pairs]]

[[lem-selberg-sieve-for-one-or-two-forbidden-residues]]

[[lem-elementary-rankin-smooth-number-upper-bound]]

[[lem-chinese-remainder-two-moduli]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[lem-improved-dirichlet-mean-square-from-close-coefficient-pairs]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[lem-selberg-sieve-for-one-or-two-forbidden-residues]] gives its stated result under its stated hypotheses.

[F4] The local supplier [[lem-elementary-rankin-smooth-number-upper-bound]] gives its stated result under its stated hypotheses.

[F5] The local supplier [[lem-chinese-remainder-two-moduli]] gives its stated result under its stated hypotheses.

## Proof

1.1 Let $A_0$ consist of $P$-smooth integers in $[X,3X]$ and let $A_1$ consist of integers in that interval divisible by a prime greater than $Q$. Then $A\subset A_0\cup A_1$. [F4] gives $\#A_0\le X\delta$, where $\delta=(\log X)^{1-R+o(1)}$. Put $M=3X/Q=3\exp((\log X)^\beta)$ and $d=\log(2M)/\log X$. [F1] and a union bound over the prime divisor greater than $Q$ give $\#A_1\ll Xd$. Here $\sum_{Q<p\le3X}1/p=\log(\log(3X)/\log Q)+O(1/\log Q)\ll d$. Thus the coefficient diagonal term in [F2] contributes $O((\delta+d)/h)$. [given, F1, F2, F3, F4, F5, algebra]

2.1 For close pairs, the terms with at least one integer in $A_0$ contribute at most $2\#A_0$ for each positive shift; their total contribution to [F2] is $O(\delta)$. Consider pairs in $A_1$. Write $n=m_1p_1$, $n+\ell=m_2p_2$, where $p_1,p_2>Q$ are primes and $m_1,m_2\le M$. For large $X$ this representation is unique, since $Q^2>3X$; using it as an upper-bound union would also suffice. Fix $m_1,m_2$, and set $g=(m_1,m_2)$. The congruences $n\equiv0\pmod {m_1}$ and $n\equiv-\ell\pmod {m_2}$ have no solution unless $g\mid\ell$. If they do, they define one progression of modulus $m_1m_2/g$ by the compatible-modulus assertion of [F5], applied with residues $0$ and $-\ell$. Its integer parameter runs over an interval of length $L=2Xg/(m_1m_2)$. [given, F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 Uniformly in $\beta\le99/100$, $M\le X^{1/100}$ for sufficiently large $X$, so $L\ge X^{49/50}$. Sieve the progression parameter by primes $3\le p\le z=X^{1/2000}$ that do not divide $m_1m_2$. The progression modulus and $m_1,m_2$ are invertible modulo each such $p$. The two conditions that $n/m_1$ and $(n+\ell)/m_2$ be prime therefore exclude two residues of the parameter, coinciding exactly when $p\mid\ell$. These exclusions are necessary because both primes exceed $Q>z$. [F3] applies, since $z\le L^{1/1000}$, and bounds this pair count by $$\ll\frac{Xg}{m_1m_2(\log X)^2}\,u(m_1)^2u(m_2)^2\,w_{m_1m_2}(\ell),$$ where $$u(m)=\prod_{p>2,\ p\mid m}\frac{p-1}{p-2},\qquad w_a(\ell)=\prod_{p>2,\ p\nmid a,\ p\mid\ell}\frac{p-1}{p-2}.$$ To verify the product bound, use $\prod_{3\le p\le z}(1-2/p)\ll1/(\log z)^2$, which follows by the logarithmic expansion in [F1]. A coincident forbidden residue multiplies this baseline by $(p-1)/(p-2)$. Removing the sieve condition at $p\mid m_1m_2$ multiplies by $(1-2/p)^{-1}\le((p-1)/(p-2))^2$. Since $\log z=(\log X)/2000$, these are exactly the stated factors. The fixed factor $2$ in $L$ is absorbed into the absolute constant. [given, F1, F2, F3, F4, F5, step 2.1, algebra]

4.1 If $g\mid\ell$, write $\ell=g\ell'$. Every prime divisor of $g$ divides $m_1m_2$, so $w_{m_1m_2}(g\ell')\le w_1(\ell')$. As in block 9, the divisor expansion shows $\sum_{\ell'\le H/g}w_1(\ell')\ll H/g$, also when the range is empty. Summing the pair bound for $1\le\ell\le H$ cancels $g$ and gives $$\sum_{\ell\le H}\#\{n:n,n+\ell\in A_1\}\ll\frac{XH}{(\log X)^2}\left(\sum_{m\le M}\frac{u(m)^2}{m}\right)^2\ll XHd^2.$$ For the last inequality, positivity and the Euler product give $$\sum_{m\le M}\frac{u(m)^2}{m}\le\prod_{p\le M}\left(1+\frac{u(p)^2}{p-1}\right)\ll\log(2M).$$ For $p>2$ the factor is $1+(p-1)/(p-2)^2=1+1/p+O(p^{-2})$; its ratio to $(1-1/p)^{-1}$ has a convergent product. The prime $2$ contributes the bounded factor $2$. [F1] bounds the remaining Mertens product. [given, F1, F2, F3, F4, F5, step 3.1, algebra]

5.1 Apply [F2] with $N=\lceil3X\rceil$ and $H=N/T\asymp h$. Combining the preceding bounds gives $O((\delta+d)/h+\delta+d^2)$. Use $d/h\le(d^2+h^{-2})/2$, $\delta/h\le\delta$, and $d\asymp(\log X)^{\beta-1}$. Since $R\ge4$, $\delta\ll_R(\log X)^{-2(1-\beta)}$ uniformly for $\beta\ge1/2$. This proves the claim. [given, F1, F2, F3, F4, F5, step 4.1, algebra] ∎
