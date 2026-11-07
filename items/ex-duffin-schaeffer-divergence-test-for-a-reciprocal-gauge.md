---
dependency_level: 2
id: ex-duffin-schaeffer-divergence-test-for-a-reciprocal-gauge
kind: example
title: "A divergence test for a reciprocal approximation gauge"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-countable-choice
  - def-unit-group-modulo-n-and-euler-totient
  - thm-standard-representatives-modulo-n
  - def-reduced-rational-approximation-limsup-set
  - thm-dirichlet-rational-approximation-with-bounded-denominator
  - thm-rationals-countable
  - lem-countable-sets-are-null
  - thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Dimitris Koukoulopoulos and James Maynard, On the Duffin–Schaeffer conjecture, Theorem 1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf"
    - title: "Glyn Harman, Metric Number Theory, Chapter 2, §§2.1–2.3"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Example

Assume the Axiom of Countable Choice. For the gauge $\psi(q)=1/\varphi(q)$, the Duffin–Schaeffer divergence sum is the harmonic series and diverges. The Duffin–Schaeffer theorem therefore gives full Lebesgue measure for the reduced rational-approximation limsup set associated with this gauge.

## Example references

[[def-unit-group-modulo-n-and-euler-totient|Euler totient function]]

[[def-countable-choice|Axiom of Countable Choice]]

[Koukoulopoulos and Maynard, *On the Duffin–Schaeffer conjecture*, Theorem 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the gauge $\psi(q)=1/\varphi(q)$, and the reduced limsup set $A(\psi)$. We prove its full-measure conclusion directly.

[A1] Countable Choice is assumed for complete Lebesgue measure ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] The unit group modulo $q$ is nonempty and is a subset of the $q$ residue classes, so $1\le\varphi(q)\le q$, including $\varphi(1)=1$ ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-standard-representatives-modulo-n]]).

[F2] For every real $\alpha$ and real $Q\ge1$, some coprime integers $a,q$ with $1\le q\le Q$ satisfy $|\alpha-a/q|\le1/(qQ)$ ([[thm-dirichlet-rational-approximation-with-bounded-denominator]]).

[F3] The reduced limsup requires infinitely many positive denominators $q$ and reduced numerators $1\le a\le q$ with $|\alpha-a/q|\le\psi(q)/q$ ([[def-reduced-rational-approximation-limsup-set]]).

[F4] The rationals are countable and have arbitrarily small countable interval covers; under [A1] every subset of this null set is Lebesgue measurable and null ([[thm-rationals-countable]], [[lem-countable-sets-are-null]], [[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]], [[thm-lebesgue-measure-is-a-complete-measure]]).

[F5] The unit interval has Lebesgue measure $1$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Verification

1.1 By [F1], $\psi(q)$ is finite and positive for every $q\ge1$, and substitution gives $\sum_q\varphi(q)\psi(q)/q=\sum_q1/q$. For each integer $j\ge0$, the block $2^j\le q<2^{j+1}$ has $2^j$ terms at least $2^{-(j+1)}$, so its sum is at least $1/2$. The disjoint block sums prove divergence. [given, F1, algebra]

1.2 Fix irrational $\alpha\in(0,1)$. By [F2], each $Q\ge1$ admits a reduced approximation with $q\le Q$ and error at most $1/(qQ)$. These approximations have unbounded denominators: otherwise, for arbitrarily large $Q$, they would all have $q\le B$ for some fixed integer $B$, and, once the error is at most $1$, also $|a|\le2B$. There are finitely many such fractions, each at positive distance from the irrational $\alpha$. Their minimum distance would be positive, contradicting $1/(qQ)\le1/Q\to0$. Thus infinitely many denominators have reduced approximations with $|\alpha-a/q|\le1/q^2$. [F2, construct, algebra]

2.1 Put $\varepsilon:=\min(\alpha,1-\alpha)>0$. Discarding finitely many denominators makes $1/q^2<\varepsilon$, so all these approximations have $0<a/q<1$, hence $1\le a\le q$. By [F1], $1/q^2\le1/(q\varphi(q))=\psi(q)/q$. Therefore every irrational $\alpha\in(0,1)$ belongs to $A(\psi)$ by [F3]. No simultaneous selection of approximants is required: the preceding argument establishes existence for every bound on the denominator. [F1, F3, step 1.2, algebra]

3.1 The complement $[0,1]\setminus A(\psi)$ is contained in the rational points, including both endpoints, by step 2.1. It is measurable and null by [F4] under [A1]. Completeness and [F5] give $\lambda(A(\psi))=1$. Together with step 1.1 this proves both claims of the example without using an unproved local divergence theorem. [A1, F4, F5, step 1.1, step 2.1, algebra] ∎

## Remarks

The general Duffin–Schaeffer theorem has the same divergence condition computed in step 1.1. This particular gauge also admits the direct Dirichlet proof above.

## Remarks references

[[thm-duffin-schaeffer-reduced-approximation-theorem|The general Duffin–Schaeffer theorem]]
