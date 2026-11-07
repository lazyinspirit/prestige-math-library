---
id: ex-omega-and-big-omega-additivity
kind: example
title: "Distinct and repeated prime factors as additive functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-additive-arithmetic-function
  - def-strongly-additive-arithmetic-function
  - def-coprime
  - def-prime
  - thm-fundamental-theorem-of-arithmetic
  - def-liouville-function
justified_by: []
proof_strategy: direct prime-factor calculation
sources:
  scraped: []
  references:
    - title: "Adam J. Harper, Probabilistic Number Theory Lecture Notes 1, §1"
      url: "https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf"
      locator: "PDF p. 1, omega and Omega as counts of distinct and repeated prime factors."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III, §23"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "PDF p. 8, examples distinguishing additive, strongly additive, and completely additive functions."
---

## Example

For $n\ge1$, let $v_p(n)$ be the exponent of $p$ in the unique prime factorization of $n$, with $v_p(n)=0$ if $p\nmid n$. Define $\omega(n)=\#\{p:v_p(n)>0\}$ and $\Omega(n)=\sum_pv_p(n)$. Then $\omega$ is strongly additive, while $\Omega$ is additive but not strongly additive. For $12=2^2\cdot3$ and $18=2\cdot3^2$, one has $\omega(12)=\omega(18)=2$ and $\Omega(12)=\Omega(18)=3$. The Liouville function satisfies $\lambda(n)=(-1)^{\Omega(n)}$ and is completely multiplicative, but it is not an additive arithmetic function.

## Example references

[Harper, *Probabilistic Number Theory Lecture Notes 1*, §1](https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf)

[Montgomery and Vaughan, *Multiplicative Number Theory III*, §23](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The prime-factor definitions of $\omega$, $\Omega$, and $\lambda$, and the integer factorizations $12=2^2\cdot3$ and $18=2\cdot3^2$.

[F1] Coprime-factor additivity and strong additivity have the definitions stated on their respective A-page items. ([[def-additive-arithmetic-function]], [[def-strongly-additive-arithmetic-function]])

[F2] A prime factorization is unique, and coprimality means the only common positive divisor is $1$. ([[def-prime]], [[def-coprime]], [[thm-fundamental-theorem-of-arithmetic]])

[F3] The Liouville function is $(-1)$ raised to the sum of prime exponents in the factorization. ([[def-liouville-function]])

## Proof

**Proof technique:** direct prime-factor calculation.

1.1 For coprime positive integers $m,n$, [F2] makes their prime supports disjoint and gives $v_p(mn)=v_p(m)+v_p(n)$. Counting the disjoint supports yields $\omega(mn)=\omega(m)+\omega(n)$; summing the exponent identity over primes yields $\Omega(mn)=\Omega(m)+\Omega(n)$. Thus both are additive. [given, F1, F2, algebra]

1.2 For each prime power $p^k$, $\omega(p^k)=1=\omega(p)$, so $\omega$ is strongly additive. But $\Omega(p^2)=2\ne1=\Omega(p)$, so $\Omega$ is not strongly additive. Unique factorization gives the displayed values for $12$ and $18$. [given, F1, F2, algebra]

1.3 For arbitrary positive integers $m,n$, concatenating their prime factorizations and using uniqueness in [F2] gives $v_p(mn)=v_p(m)+v_p(n)$ for every prime $p$. Since each factorization has finite support, summing over primes yields $\Omega(mn)=\Omega(m)+\Omega(n)$ for all positive $m,n$. [given, F2, algebra]

2.1 By [F3], $\lambda(n)=(-1)^{\Omega(n)}$. The identity in step 1.3 gives $\lambda(mn)=(-1)^{\Omega(m)+\Omega(n)}=\lambda(m)\lambda(n)$ for all positive $m,n$. Also $\lambda(1)=1$; an additive function must have value $0$ at $1$, because its law at the coprime pair $(1,1)$ gives $f(1)=2f(1)$. Hence $\lambda$ is not additive. [given, F1, F3, step 1.3, algebra] ∎

## Proof references

[[def-additive-arithmetic-function]]

[[def-strongly-additive-arithmetic-function]]

[[def-coprime]]

[[thm-fundamental-theorem-of-arithmetic]]

[[def-liouville-function]]
