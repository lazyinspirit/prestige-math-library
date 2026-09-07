---
id: ex-prime-number-theorem-in-a-small-progression
title: "Prime number theorem in a small progression"
kind: example
status: draft
origin: pipeline
deps: [thm-prime-number-theorem-arithmetic-progressions, thm-dirichlet-character-orthogonality]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a74.4, Theorem 4.12"
      url: https://kskedlaya.org/ant/chap-primes-in-ap.html
proof_strategy: direct argument
---

## Example

Modulo four, $\chi_0(1)=\chi_0(3)=1$, $\chi_4(1)=1$, $\chi_4(3)=-1$, and both vanish on even integers. Hence
$$\psi(x;4,1)=\tfrac12(\Psi_{\chi_0}(x)+\Psi_{\chi_4}(x)),\quad\psi(x;4,3)=\tfrac12(\Psi_{\chi_0}(x)-\Psi_{\chi_4}(x)).$$
Both corresponding prime counts are asymptotic to $\operatorname{Li}(x)/2$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-prime-number-theorem-arithmetic-progressions]]: For every fixed integer $q\ge1$ and integer a with $\gcd(a,q)=1$, define $\psi(x;q,a)$, $\theta(x;q,a)$ and $\pi(x;q,a)$ by restricting their defining sums to integers, respectively primes, congruent to a modulo q. Then $\psi(x;q,a)\sim\frac{x}{\varphi(q)},\qquad\theta(x;q,a)\sim\frac{x}{\varphi(q)},\qquad\pi(x;q,a)\sim\frac{\operatorname{Li}(x)}{\varphi(q)}.$ No uniformity in a growing modulus is asserted.

[F2] [[thm-dirichlet-character-orthogonality]]: Let $G=(\mathbb Z/q\mathbb Z)^\times$, and let the sum range over all Dirichlet characters modulo $q$. 1. For unit classes $a,b\in G$, $\sum_{\chi\bmod q}\chi(a)\overline{\chi(b)}= \begin{cases} \varphi(q),&a=b,\\ 0,&a\ne b. \end{cases}$ 2. For Dirichlet characters $\chi,\psi$ modulo $q$, $\sum_{a\in G}\chi(a)\overline{\psi(a)}= \begin{cases} \varphi(q),&\chi=\psi,\\ 0,&\chi\ne\psi. \end{cases}$

## Verification

1.1 The displayed character values give the two residue indicators as $(\chi_0+\chi_4)/2$ and $(\chi_0-\chi_4)/2$, including the zero values on even numbers. Multiply by Lambda and sum to obtain both psi identities. [F2, given]

2.1 The principal sum is $\Psi_{\chi_0}(x)=\psi(x)-\sum_{2^k\le x,\ k\ge1}\log2=\psi(x)-\lfloor\log x/\log2\rfloor\log2$ for x at least one. Its correction is O(log x). Since $\varphi(4)=2$, the fixed-progression theorem gives each asserted prime-count asymptotic, including exclusion of the single prime two. [F1, step 1.1] ∎
