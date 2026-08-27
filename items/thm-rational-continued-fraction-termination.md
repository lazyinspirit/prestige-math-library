---
id: thm-rational-continued-fraction-termination
kind: theorem
title: "The continued-fraction algorithm terminates exactly on rational numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continued-fraction-complete-quotients, thm-continued-fraction-algorithm-for-real-numbers, thm-division-algorithm-in-z, lem-continued-fraction-convergent-recurrence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

For a real number $\alpha$, the continued-fraction algorithm terminates if and
only if $\alpha$ is rational. When $\alpha$ is rational, the continued-fraction
digits are exactly the successive quotient digits of the Euclidean algorithm.

## Facts & Assumptions

**Given:** A real number $\alpha$ and its continued-fraction algorithm.

[F1] If $u,v\in\mathbb{Z}$ with $v>0$, then there are unique integers $a,r$ with $$u=av+r,\qquad 0\le r<v.$$ ([[thm-division-algorithm-in-z]]).

[F2] A terminating continued-fraction expansion is a finite regular continued fraction, and every finite regular continued fraction equals its last convergent $p_n/q_n\in\mathbb{Q}$ ([[thm-continued-fraction-algorithm-for-real-numbers]], [[lem-continued-fraction-convergent-recurrence]]).

[F3] Every complete quotient after the first is greater than $1$ ([[def-continued-fraction-complete-quotients]]).

## Proof

**Proof technique:** direct.

1.1 If $\alpha$ is an integer, the algorithm stops immediately. Otherwise write $\alpha=u_0/v_0$ with integers $v_0>0$ and $\gcd(u_0,v_0)=1$. Applying [F1] to. [given, F1, algebra] $u_0$ and $v_0$ gives $$u_0 = a_0v_0+r_0,\qquad 0<r_0<v_0,$$ so $$\alpha = a_0 + \frac{r_0}{v_0},\qquad \alpha_1=\frac{1}{\alpha-a_0}=\frac{v_0}{r_0}.$$ Thus the next numerator is the previous denominator. [given, F1, algebra]

1.2 Conversely, if the algorithm terminates, then by [F2] the original number is a finite regular continued fraction and hence rational. [F2]

1.3 Let $n\ge1$, and suppose. [F1, F3, induction, algebra] $$\alpha_n=\frac{u_n}{v_n}\qquad(v_n>0,\ \gcd(u_n,v_n)=1)$$ is not an integer. Since $n\ge1$, fact [F3] gives $\alpha_n>1$, so $u_n>v_n>0$. Applying [F1] gives $$u_n=a_nv_n+r_n,\qquad 0<r_n<v_n,\qquad \alpha_{n+1}=\frac{v_n}{r_n}.$$ Any common divisor of $v_n$ and $r_n=u_n-a_nv_n$ also divides $u_n$, so $\gcd(v_n,r_n)=1$. Hence this is already the reduced form $$\alpha_{n+1}=\frac{u_{n+1}}{v_{n+1}}=\frac{v_n}{r_n},$$ and therefore $u_{n+1}=v_n<u_n$. [F1, F3, induction, algebra]

2.1 When $\alpha$ is a nonintegral rational, step 1.1 gives $$\alpha_1=\frac{v_0}{r_0}>1.$$ So step 1.3 applies successively to $\alpha_1,\alpha_2,\ldots$ as long as they remain nonintegral. Their positive integer numerators $u_1,u_2,u_3,\ldots$ then form a strictly decreasing sequence, which cannot continue forever. Therefore some complete quotient is an integer, and the algorithm terminates. [step 1.1, step 1.3, induction]

3.1 The equations in steps 1.1 and 1.3 are exactly the Euclidean divisions of the successive numerator-denominator pairs, so the continued-fraction digits are. [step 1.1, step 1.3, F1] the Euclidean quotient digits. [step 1.1, step 1.3, F1] ∎
