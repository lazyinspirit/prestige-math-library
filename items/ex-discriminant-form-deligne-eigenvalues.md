---
id: ex-discriminant-form-deligne-eigenvalues
kind: example
title: "The Discriminant Form and Its Deligne-Bounded Eigenvalues"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-modular-discriminant-and-j-invariant
  - cor-dimension-of-level-one-modular-forms
  - def-hecke-operator-on-congruence-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§1 and §5, printed pp. 1 and 17–20: the discriminant form and the Deligne bound under the Weil conjectures."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Example 5.7 and the Ramanujan-conjecture discussion, printed pp. 69–70."
---

## Example

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. The normalized level-one discriminant form $\Delta(\tau)=\sum_{n\ge1}\tau(n)q^n$, whose $q$-expansion begins $q-24q^2+O(q^3)$, is a normalized weight-$12$ holomorphic Hecke eigenform. For $n\ge1$ define $\lambda_\Delta(n)=\tau(n)n^{-11/2}$ and $d(n)=\#\{m\in\mathbb Z_{>0}:m\mid n\}$. Then $|\lambda_\Delta(n)|\le d(n)$ for every $n\ge1$. In particular, $|\lambda_\Delta(2)|=24/2^{11/2}\le2=d(2)$.

## Example references

[[def-modular-discriminant-and-j-invariant]]

[[cor-dimension-of-level-one-modular-forms]]

[[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms]]

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §1 and §5](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Milne, *Modular Functions and Modular Forms*, Chapter 5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

## Facts & Assumptions

**Given:** AC, DC, and Countable Choice; the level-one modular discriminant $\Delta$ and its Fourier coefficients $\tau(n)$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the Galois-representation theorem used in the bound.

[A2] [[def-dependent-choice]]: DC is retained by the local-Galois dependency closure of that theorem; no separate DC construction occurs in this finite example.

[A3] [[def-countable-choice]]: Countable Choice is retained by the local completion and Frobenius dependency closure of that theorem.

[F1] [[def-modular-discriminant-and-j-invariant]]: $\Delta$ is a cusp form of weight $12$ with $q$-expansion $q-24q^2+O(q^3)$.

[F2] [[cor-dimension-of-level-one-modular-forms]]: $\dim S_{12}=\dim M_{12}-1=1$.

[F3] [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]: at $N=1$ and trivial character, each $T_n$ preserves $S_{12}$ and its coefficient at $q^m$ is $\sum_{d\mid\gcd(m,n)}d^{11}a_{mn/d^2}(f)$.

[F4] [[def-hecke-operator-on-congruence-forms]]: $T_1$ is the identity and $T_n$ is the normalized full-level Hecke operator obtained from the prime-power operators.

[F5] [[def-normalized-full-level-holomorphic-hecke-eigenform]]: a normalized full-level eigenform has first coefficient $1$ and satisfies $T_n f=a_f(n)f$ for every $n\ge1$.

[F6] [[thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms]]: under AC, DC, and Countable Choice, every normalized full-level eigenform of even weight $k\ge2$ satisfies $|a_f(n)n^{-(k-1)/2}|\le d(n)$ for all $n\ge1$.

## Verification

1.1 By [F1], $\Delta\in S_{12}$ and its first Fourier coefficient is $1$, so it is nonzero. By [F2], $S_{12}$ is one-dimensional. With the operators $T_n$ of [F4], [F3] gives $T_n\Delta\in S_{12}$ for every $n\ge1$, so there is a scalar $c_n$ with $T_n\Delta=c_n\Delta$. [given, F1, F2, F3, F4, algebra]

2.1 The coefficient formula [F3] at $m=1$ has only divisor $d=1$, so the $q$-coefficient of $T_n\Delta$ is $\tau(n)$. The $q$-coefficient of $c_n\Delta$ is $c_n$ by [F1]. Hence $c_n=\tau(n)$, and [F5] shows that $\Delta$ is a normalized full-level Hecke eigenform of weight $12$. [F1, F3, F5, step 1.1, algebra]

3.1 Apply [F6] to $\Delta$ with $k=12$ to obtain $|\tau(n)n^{-11/2}|\le d(n)$ for every $n\ge1$. [A1, A2, A3, F5, F6, step 2.1, given]

4.1 At $n=2$, [F1] gives $\tau(2)=-24$ and the positive divisors of $2$ are $1,2$, so $d(2)=2$. The claimed finite inequality is equivalent to $24\le 2^{13/2}$; squaring gives $576\le8192$. [F1, step 3.1, algebra] ∎
