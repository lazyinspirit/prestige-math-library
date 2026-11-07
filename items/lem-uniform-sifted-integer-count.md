---
dependency_level: 3
id: lem-uniform-sifted-integer-count
kind: lemma
title: Uniform count of integers avoiding prime divisors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- thm-selberg-sieve-upper-bound-with-remainders
- thm-first-mertens-theorem-for-primes
- lem-reciprocal-prime-sum-from-mertens-first-theorem
- thm-fundamental-theorem-of-arithmetic
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
  - title: A. D. Pollington and R. C. Vaughan, The k-dimensional Duffin and Schaeffer
      conjecture, Mathematika37(1990),190–200, §§2–3
    url: https://personal.science.psu.edu/rcv4/personal/Publications/kdimensional_duffin_and_schaeffer_conjecture.pdf
proof_strategy: direct
---

## Statement

There is an absolute constant $C$ such that for every positive integer $N$ and real $y\ge1$,
$$ \#\{1\le m\le y:\gcd(m,N)=1\}\le Cy\prod_{\substack{p\mid N\\p\le y}}(1-1/p). $$

## Statement references

[Pollington–Vaughan, §3, p.196 (sieve estimate); locally proved below](https://personal.science.psu.edu/rcv4/personal/Publications/kdimensional_duffin_and_schaeffer_conjecture.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The optimized finite Selberg sieve, including its explicit weights and remainder formula, is proved in [[thm-selberg-sieve-upper-bound-with-remainders]].

[F2] $\sum_{p\le u}\log p/p=\log u+O(1)$ and $\sum_{p\le u}1/p=\log\log u+O(1)$ ([[thm-first-mertens-theorem-for-primes]], [[lem-reciprocal-prime-sum-from-mertens-first-theorem]]).

[F3] Prime factorizations are unique ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

1.1 It suffices to take sufficiently large $y$; bounded $y\ge1$ can be absorbed in the constant because the product over primes at most a fixed bound has a fixed positive lower bound. Put $R=y^{1/8}$, $z=R^{1/8}$, and $P=\prod_{p\mid N,p<z}p$. Apply [F1] with its integer range parameter $N_{\rm sieve}=\lfloor y\rfloor$, weights $a(m)=1$ for $1\le m\le N_{\rm sieve}$, scale $X=y$, and zero residue classes modulo these primes. Then $A_d=\lfloor\lfloor y\rfloor/d\rfloor=\lfloor y/d\rfloor$, $g(p)=1/p$, and each remainder $A_d-g(d)X=\lfloor y/d\rfloor-y/d$ has modulus at most $1$. Use sieve level $R^2$ in [F1]. Its normalizing sum is $H_R=\sum_{d\mid P,d<R}1/\varphi(d)$, where on squarefree $d$ the notation $\varphi(d)=\prod_{p\mid d}(p-1)$ is the explicit product appearing in the sieve weights. The weights have $|\rho(d)|\le d/\varphi(d)\le d$, since their inner sum is at most $H_R$. Thus the absolute remainder is $O((\sum_{d<R}d)^2)=O(R^4)$. [F1, F3, construct, algebra]

2.1 The full finite sum is $H_\infty=\sum_{d\mid P}1/\varphi(d)=\prod_{p\mid P}(1-1/p)^{-1}$. Weight the divisors by $1/(H_\infty\varphi(d))$; this is a probability distribution. Its mean value of $\log d$ is $\sum_{p\mid P}(\log p)/p\le\log z+O(1)$ by [F2], since a given prime occurs with probability $1/p$. Divisors $d\ge R$ have $\log d\ge\log R$, so their total weight is at most $(\log z+O(1))/\log R\le1/2$ for sufficiently large $y$. Hence $H_R\ge H_\infty/2$. [F2, step 1.1, algebra]

3.1 The integers coprime to $N$ are a subset of the sifted integers. Steps 1.1–2.1 and [F1] bound their number by $$ \ll y\prod_{p\mid N,p<z}(1-1/p)+y^{1/2}. $$ Let $V(u)=\prod_{p\mid N,p\le u}(1-1/p)$. The product in this bound differs from $V(z)$ by at most an absolute factor at the endpoint. By [F2] and $\sum_p p^{-2}<\infty$ (direct integral comparison suffices), $$ \frac{V(z)}{V(y)}\le\prod_{z<p\le y}(1-1/p)^{-1}\ll\frac{\log y}{\log z}=64,\qquad V(y)\ge\prod_{p\le y}(1-1/p)\gg\frac1{\log y}. $$ Consequently $y^{1/2}\ll yV(y)$, and the displayed upper bound is $O(yV(y))$. This proves the assertion, including the bounded range addressed in step 1.1. [F1, F2, step 1.1, step 2.1, algebra] ∎
