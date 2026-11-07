---
id: rem-fixed-modulus-and-growing-modulus-zero-free-claims
kind: remark
title: "Fixed-modulus asymptotics and bounded common zero-free strips"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - thm-classical-zero-free-region-dirichlet-l
  - thm-prime-number-theorem-arithmetic-progressions
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., revised by Hugh L. Montgomery, Chapter 14"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 88–95, distinction between fixed-character and conductor-dependent zero-free regions."
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, §4.4"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
      locator: "Theorem 4.12 and proof: fixed-modulus prime number theorem in arithmetic progressions; no growing-modulus uniformity."

---

## Remark

Assume the Axiom of Choice, Countable Choice, and Dependent Choice for the zero-free-region assertions below. For a fixed integer $q\ge1$ and a reduced residue class $a$ modulo $q$, let $\pi(x;q,a)$ count primes $p\le x$ with $p\equiv a\pmod q$, let $\varphi(q)$ count the invertible residue classes modulo $q$, and put $\operatorname{Li}(x)=\int_2^x dt/\log t$. The fixed-modulus prime number theorem asserts
$$\pi(x;q,a)\sim\frac{\operatorname{Li}(x)}{\varphi(q)}\qquad(x\to\infty)$$
for each fixed $q,a$, and makes no uniformity assertion as $q$ grows. The classical Dirichlet zero-free theorem does give a common bounded-cutoff strip: for any $Q\ge1$ and $T\ge0$, every primitive character of conductor $q\le Q$ has, at heights $|t|\le T$, the common region
$$\sigma>1-\frac{c}{\log(Q(T+3))},$$
with at most one real simple exceptional zero per real nonprincipal character. The theorem makes no uniqueness assertion across distinct characters. As $Q(T+3)\to\infty$, the common width $c/\log(Q(T+3))$ tends to zero, so these bounds give no fixed positive-width strip for unbounded conductor and height cutoffs. Nor does the fixed-modulus prime number theorem provide a uniform error estimate for growing moduli. The quantifier order matters: pointwise convergence in every fixed parameter does not imply convergence uniformly when the parameter varies with $x$.

For instance, the family $E(x,q)=1$ when $x<q$ and $E(x,q)=0$ when $x\ge q$ tends to $0$ as $x\to\infty$ for each fixed $q$, but it equals $1$ along any sequence with $q>x$. A growing-modulus conclusion therefore needs an additional uniform estimate with its modulus range stated.

## Remark references

[[thm-prime-number-theorem-arithmetic-progressions]]

[[thm-classical-zero-free-region-dirichlet-l]]

[Davenport, Chapter 14](https://djvu.online/file/Rh8B8jEVpxFgk)

[Kedlaya, Theorem 4.12](https://kskedlaya.org/ant/chap-primes-in-ap.html)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice; a fixed integer $q\ge1$, a reduced residue class $a$ modulo $q$, and the displayed definition of $\pi(x;q,a)$.

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice are hypotheses of the classical zero-free theorem. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]], [[thm-classical-zero-free-region-dirichlet-l]])

[F1] For every fixed $q\ge1$ and reduced residue class $a$, $\pi(x;q,a)\sim\operatorname{Li}(x)/\varphi(q)$; no uniformity in a growing modulus is asserted. ([[thm-prime-number-theorem-arithmetic-progressions]])

[F2] For each primitive character of conductor $q$, the pointwise zero-free boundary at height $t$ is $1-c/\log(q(|t|+3))$, with at most one real simple exceptional zero per real nonprincipal character. ([[thm-classical-zero-free-region-dirichlet-l]])

[F3] The family $E(x,q)$ in the Remark is pointwise convergent to zero but is not uniformly bounded by any number less than one when $q$ varies with $x$.

## Proof

**Proof technique:** unpack the quantifiers, compare the pointwise and common boundaries, and verify the explicit nonuniform family.

1.1 By [F1], after fixing any $q,a$ and any $\varepsilon>0$, there is a threshold $X(q,a,\varepsilon)$ after which the relative error is smaller than $\varepsilon$. The statement supplies no bound on this threshold uniform in $q$. [given, A1, F1]

1.2 For each fixed $q$, $E(x,q)=0$ for all $x\ge q$, so $E(x,q)\to0$. For every $x>0$, an integer $q>x$ gives $E(x,q)=1$. Thus pointwise convergence does not imply uniform convergence along growing $q$. [given, F3, algebra]

1.3 If $q\le Q$ and $|t|\le T$, then $q(|t|+3)\le Q(T+3)$, so [F2] and monotonicity of logarithm give $$1-\frac{c}{\log(Q(T+3))}\ge1-\frac{c}{\log(q(|t|+3))}.$$ Every zero in the common strip is consequently in the pointwise region for its character and height. The exceptional-zero allowance remains per character, and [F2] gives no uniqueness across distinct characters. [A1, F2, given, algebra]

2.1 The common width is $c/\log(Q(T+3))$, which tends to zero as $Q(T+3)\to\infty$. Hence no fixed positive width is supplied for unbounded cutoffs; the PNT assertion [F1] separately gives no growing-modulus uniform error. [step 1.3, F1, algebra] ∎

