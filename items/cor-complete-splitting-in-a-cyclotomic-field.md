---
id: cor-complete-splitting-in-a-cyclotomic-field
kind: corollary
title: Complete splitting criterion for a cyclotomic field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-unramified-prime-decomposition-in-a-cyclotomic-field
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - def-split-inert-ramified-and-unramified-prime
  - def-order-in-a-group
  - def-unit-group-modulo-n-and-euler-totient
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - def-conductor-of-a-cyclotomic-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.18"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.18, pp. 143-144: the Frobenius of Q(zeta_n) at an unramified p is zeta -> zeta^p of order f with n | p^f - 1; consequently p splits completely exactly when p = 1 modulo n."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 11, Theorem 11.6"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Theorem 11.6 and Remark 11.7, pp. 61-62: unramified primes have residue degree the order of the class modulo the reduced index N, so complete splitting is the condition N | p - 1."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $f$ be the conductor of the cyclotomic field $K=\mathbb Q(\zeta_f)$, and
let $\ell$ be a rational prime with $\ell\nmid f$. Then $\ell$ splits
completely in $K$ if and only if
$$\ell\equiv1\pmod f .$$

## Facts & Assumptions

**Given:** The cyclotomic field $K=\mathbb Q(\zeta_f)$ presented by its
conductor $f$ ([[def-conductor-of-a-cyclotomic-field]]), and a rational prime
$\ell\nmid f$, so $\gcd(\ell,f)=1$ and the class of $\ell$ lies in
$(\mathbb Z/f)^{\times}$.

[F1] Unramified decomposition: for the conductor $f$ and $\ell\nmid f$, every
prime of $\mathcal O_K$ above $\ell$ has residue degree
$\operatorname{ord}_f(\ell)$ and there are exactly
$\varphi(f)/\operatorname{ord}_f(\ell)$ of them; in particular $\ell$ is
unramified
([[cor-unramified-prime-decomposition-in-a-cyclotomic-field]]).

[F2] Splitting terminology: a rational prime $\ell$ splits completely in $K$ if
it is unramified in $K$ and every prime of $\mathcal O_K$ above it has residue
degree $1$
([[def-split-inert-ramified-and-unramified-prime]]).

[F3] For a positive integer $f$ and an integer $\ell$ with $\gcd(\ell,f)=1$,
the order of the class $[\ell]\in(\mathbb Z/f)^{\times}$ equals $1$ if and only
if $\ell\equiv1\pmod f$
([[def-order-in-a-group]], [[def-unit-group-modulo-n-and-euler-totient]]).

[F4] $[K:\mathbb Q]=\varphi(f)$
([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the prime $\ell$ is unramified in $K$ and every prime above it has residue degree $d:=\operatorname{ord}_f(\ell)$, so the primes above $\ell$ number $\varphi(f)/d$. [F1]

1.2 By [F3], $d=1$ holds if and only if $\ell\equiv1\pmod f$. [F3]

2.1 By [F2] and step 1.1, $\ell$ splits completely in $K$ if and only if every prime above $\ell$ has residue degree $1$, i.e., if and only if $d=1$; equivalently (step 1.1) the number of primes above $\ell$ is then $\varphi(f)=[K:\mathbb Q]$ by [F4]. [F2, F4, step 1.1]

3.1 Combining steps 1.2 and 2.1: $\ell$ splits completely in $K=\mathbb Q(\zeta_f)$ if and only if $\operatorname{ord}_f(\ell)=1$, if and only if $\ell\equiv1\pmod f$. [step 1.2, step 2.1] ∎

## Remarks

- **Consistency of counts.** Complete splitting gives $\varphi(f)$ primes of
  residue degree $1$, matching the decomposition count
  $\varphi(f)/\operatorname{ord}_f(\ell)=\varphi(f)$ and the degree
  $[K:\mathbb Q]=\varphi(f)$.
- **Unramified hypothesis.** The equivalence is stated for $\ell\nmid f$; for
  $\ell\mid f$ the prime $\ell$ is ramified and the Frobenius element is not
  defined, by [[cor-cyclotomic-ramification-criterion]].
