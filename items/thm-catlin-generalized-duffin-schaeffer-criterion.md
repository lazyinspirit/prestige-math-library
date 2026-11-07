---
dependency_level: 7
id: thm-catlin-generalized-duffin-schaeffer-criterion
kind: theorem
title: "Catlin criterion for unrestricted rational representations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line
  - thm-borel-sets-are-lebesgue-measurable
  - prop-measure-monotonicity
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-duffin-schaeffer-reduced-approximation-theorem
  - def-rational-approximation-limsup-set
  - def-reduced-rational-approximation-limsup-set
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - thm-standard-representatives-modulo-n
  - thm-sum-of-totients-over-divisors
  - def-measure-zero-and-content-zero
  - lem-countable-sets-are-null
  - thm-rationals-countable
  - thm-well-ordering-principle
  - thm-finite-and-countable-subadditivity-of-measures
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Dimitris Koukoulopoulos and James Maynard, On the Duffin–Schaeffer conjecture, Theorem 2 and §2"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf"
    - title: "Glyn Harman, Metric Number Theory, Chapter 2, §§2.1–2.3"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

Assume the Axiom of Countable Choice. Let $\psi:\mathbb N\to[0,\infty)$, let $W(\psi)$ be the unrestricted rational-approximation limsup set, and define

$$
\psi^*(q):=\varphi(q)\sup_{\substack{n\in\mathbb N\\q\mid n}}\frac{\psi(n)}n\qquad(q\in\mathbb N).
$$

The Catlin zero–full law states that $\lambda(W(\psi))=0$ when $\sum_{q=1}^{\infty}\psi^*(q)<\infty$, and $\lambda(W(\psi))=1$ when $\sum_{q=1}^{\infty}\psi^*(q)=\infty$.

## Statement references

[[def-rational-approximation-limsup-set|Unrestricted rational-approximation limsup set]]

[[def-unit-group-modulo-n-and-euler-totient|Euler totient function]]

[[def-countable-choice|Axiom of Countable Choice]]

[[thm-lebesgue-measure-is-a-complete-measure|Lebesgue measure under countable choice]]

[Koukoulopoulos and Maynard, *On the Duffin–Schaeffer conjecture*, Theorem 2 and §2](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

[Harman, *Metric Number Theory*, Chapter 2, §§2.1–2.3](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a function $\psi:\mathbb N\to[0,\infty)$ and $\psi^*(q)=\varphi(q)\sup_{q\mid n}\psi(n)/n$. Interpret suprema in the extended nonnegative reals. Prove the two measure alternatives for $W(\psi)$.

[A1] The Axiom of Countable Choice is assumed so that $\lambda$ is a complete countably additive measure. ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F1] $W(\psi)$ consists of the points in infinitely many unrestricted rational-approximation events $R_n(\psi)$. ([[def-rational-approximation-limsup-set]])

[F2] $A(\xi)$ consists of points lying in infinitely many reduced rational intervals of radius $\xi(q)/q$ for denominators $q$. ([[def-reduced-rational-approximation-limsup-set]])

[F3] $\varphi(q)$ counts the reduced residue classes modulo $q$; each is represented once by a numerator $1\le a\le q$. ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-unit-criterion-modulo-n]], [[thm-standard-representatives-modulo-n]])

[F4] For each positive integer $n$, $\sum_{d\mid n}\varphi(d)=n$. ([[thm-sum-of-totients-over-divisors]])

[F5] Each $A_q(\xi)$ is a union of $\varphi(q)$ intervals of radius $\xi(q)/q$, so these intervals have total length at most $2\varphi(q)\xi(q)/q$. ([[def-reduced-rational-approximation-limsup-set]], [[def-unit-group-modulo-n-and-euler-totient]], [[thm-unit-criterion-modulo-n]], [[thm-standard-representatives-modulo-n]])

[F6] If $\sum_q\varphi(q)\xi(q)/q=\infty$, then the reduced rational-approximation limsup set for $\xi$ has measure $1$. ([[thm-duffin-schaeffer-reduced-approximation-theorem]])

[F7] The rationals form an at most countable subset of $\mathbb R$. ([[thm-rationals-countable]])

[F8] Every at most countable subset of $\mathbb R$ admits, for every $\varepsilon>0$, an interval cover of total length at most $\varepsilon$; this argument uses no choice principle. ([[lem-countable-sets-are-null]])

[F9] A set is null when it has interval covers of arbitrarily small total length. ([[def-measure-zero-and-content-zero]])

[F10] Every nonempty subset of $\mathbb N$ has a least element. ([[thm-well-ordering-principle]])

[F11] Under the assumed axiom, a set null by countable interval covers has Lebesgue outer measure zero and hence Lebesgue measure zero. ([[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F12] Lebesgue measure is monotone and finitely subadditive, and $\lambda([0,1])=1$. ([[prop-measure-monotonicity]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F13] Under the assumed axiom, Borel sets are Lebesgue measurable; $K$ and $C$ are Borel because they are countable limsups of finite unions of closed intervals. ([[thm-borel-sets-are-lebesgue-measurable]], [[def-rational-approximation-limsup-set]], [[def-reduced-rational-approximation-limsup-set]])

## Proof

1.1 Write $K=W(\psi)$ and $S=\sum_q\psi^*(q)$. First suppose $\psi(n)\ge1/2$ for infinitely many $n$. Set $n_0=1$, take $n_1$ to be the least such index at least $4$, and recursively take $n_{j+1}$ to be the least such index at least $2n_j^2$. These least indices exist by [F10]. For every divisor $d\mid n_j$ with $n_{j-1}<d\le n_j$, $\psi^*(d)\ge\varphi(d)/(2n_j)$. [given, F1, F3, F10, construct]

1.2 For the separate remaining branch, suppose that only finitely many $n$ satisfy $\psi(n)\ge1/2$. Replace $\psi(n)$ by $\min\{\psi(n),1/2\}$. This changes only finitely many denominator events in $K$; it changes $\psi^*(d)$ only for divisors of those finitely many denominators. Hence neither the limsup nor convergence or divergence of $S$ changes, and now $\psi(n)\le1/2$ for all $n$. [given, F1, algebra]

2.1 In the large-gauge branch of step 1.1, by [F4], $\sum_{d\mid n_j}\varphi(d)=n_j$. Since $\varphi(d)\le d$, the divisors $d\le n_{j-1}$ contribute at most $\sum_{d\le n_{j-1}}d\le n_{j-1}^2\le n_j/2$. Hence each disjoint block $n_{j-1}<d\le n_j$ contributes at least $1/4$ to $S$, so $S=\infty$. [step 1.1, F3, F4, algebra]

2.2 Still in the branch of step 1.1, for every $x\in[0,1]$, choose $a\in\{0,\ldots,n_j\}$ nearest to $n_jx$. Then $|x-a/n_j|\le1/(2n_j)\le\psi(n_j)/n_j$, so $x\in R_{n_j}(\psi)$ for all $j$. Thus $K=[0,1]$ and $\lambda(K)=1$. [step 1.1, F1, algebra, choose]

2.3 Return now to the remaining branch of step 1.2. Define $\xi(q)=q\max_{q\mid n}\psi(n)/n$. This maximum exists: the values are nonnegative and tend to zero along multiples $n$ of $q$, so either they are all zero or their positive supremum is attained among finitely many initial multiples. Then $\psi^*(q)=\varphi(q)\xi(q)/q$, and $S=\sum_q\varphi(q)\xi(q)/q$; write $C=A(\xi)$. [step 1.2, F2, F3, construct]

3.1 If $\alpha\in K\setminus\mathbb Q$, infinitely many unrestricted approximations $a/n$ reduce to fractions $b/q$ with $q\mid n$ and $\gcd(b,q)=1$. They yield infinitely many distinct reduced fractions: otherwise one fixed rational fraction would recur for arbitrarily large $n$, while its error is at most $\psi(n)/n\le1/(2n)\to0$, forcing $\alpha$ to equal that rational. Only the endpoint fraction $0/1$ lacks a representative with $1\le b\le q$; removing this single fraction leaves infinitely many distinct fractions in the defining reduced events. For each, $|\alpha-b/q|\le\psi(n)/n\le\xi(q)/q$, hence $\alpha\in C$. [step 1.2, step 2.3, F1, F2, algebra]

3.2 Conversely, if $\alpha\in C\setminus\mathbb Q$, it has infinitely many distinct reduced approximants $a/q$. For each, take the least multiple $n$ of $q$ attaining $\xi(q)/q=\psi(n)/n$; this least multiple exists by [F10]. Put $b=an/q\in\mathbb Z$. Then $|\alpha-b/n|\le\psi(n)/n$. The denominators $n$ are unbounded because $n\ge q$ and the reduced fractions are distinct, so $\alpha\in K$. [step 2.3, F1, F2, F10, algebra, choose]

4.1 Steps 3.1 and 3.2 establish the inclusions $K\subseteq C\cup\mathbb Q$ and $C\setminus\mathbb Q\subseteq K$. No claim about rational points of $C$ is needed. [step 3.1, step 3.2]

5.1 If $S<\infty$, then $\sum_q\varphi(q)\xi(q)/q<\infty$ by step 2.3. For every $N$, $C\subseteq\bigcup_{q\ge N}A_q(\xi)$, and [F5] covers this tail by intervals of total length at most $2\sum_{q\ge N}\varphi(q)\xi(q)/q$, which tends to zero. By step 4.1, $K\subseteq C\cup\mathbb Q$; [F7] and [F8] give arbitrarily small interval covers of $\mathbb Q$. Combining these covers shows $K$ is null in the sense of [F9], hence $\lambda(K)=0$ by [F11] under [A1]. Measurability of $K$ is supplied by [F13]. [A1, step 2.3, step 4.1, F5, F7, F8, F9, F11, F13]

6.1 If $S=\infty$, then $\sum_q\varphi(q)\xi(q)/q=\infty$, so [F6] gives $\lambda(C)=1$. By step 4.1, $C\subseteq K\cup\mathbb Q$; since [F7]–[F8] make $\mathbb Q$ null and hence $\lambda(\mathbb Q)=0$ by [F11], subadditivity [F12] gives $1=\lambda(C)\le\lambda(K)+\lambda(\mathbb Q)=\lambda(K)$. By [F13], $K$ is measurable; also $K\subseteq[0,1]$, so [F12] gives $\lambda(K)\le1$. Thus $\lambda(K)=1$. [A1, step 2.3, step 4.1, F6, F7, F8, F11, F12, F13] ∎
