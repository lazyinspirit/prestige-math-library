---
id: ex-completely-split-prime-density
kind: example
title: "Density of primes splitting completely in a Galois extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-completely-split-primes-dirichlet-density
  - def-axiom-of-choice
  - def-number-field
  - def-finite-galois-extension-and-galois-group
  - def-galois-closure-of-a-finite-separable-extension
  - thm-ring-of-integers-of-a-quadratic-field
  - thm-principal-ideal-norm-is-absolute-field-norm
  - cor-norm-of-a-prime-ideal
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - thm-number-field-integral-ideal-factorisation-in-zf
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Chapter VI §3, Theorem 3.4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.192–193: completely split prime density in a finite Galois extension."
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Example 4.5"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 4 Example 4.5, p.71: the Gaussian field and its elementary arithmetic."

---

## Example

Assume the Axiom of Choice. For $K=\mathbb Q(i)$, let $S$ be the rational primes $p$ for which $(p)=\mathfrak p_1\mathfrak p_2$ with two distinct prime ideals of $\mathbb Z[i]$, each having ramification index and residue degree $1$. Its Dirichlet density
$$\lim_{\sigma\downarrow1}\frac{\sum_{p\in S}p^{-\sigma}}{\log(1/(\sigma-1))}$$
is $1/2$. The prime $5$ belongs to $S$ because
$$5=(2+i)(2-i)$$
is a factorization into two distinct prime ideals of $\mathbb Z[i]$, each of residue degree $1$ and ramification index $1$.

## Example references

[[def-axiom-of-choice]]

[[thm-completely-split-primes-dirichlet-density]]

[[thm-ring-of-integers-of-a-quadratic-field]]

[[def-prime-above-and-residue-degree]]

[[def-ramification-index]]

## Facts & Assumptions

**Given:** AC, the field $\mathbb Q(i)$, its ring of integers $\mathbb Z[i]$, and the rational prime $5$.

[A1] The Axiom of Choice is assumed by the split-prime density theorem ([[def-axiom-of-choice]], [[thm-completely-split-primes-dirichlet-density]]).

[F1] For squarefree $d=-1$, the ring of integers of $\mathbb Q(\sqrt d)$ is $\mathbb Z[\sqrt d]$ ([[thm-ring-of-integers-of-a-quadratic-field]]).

[F2] In a quadratic splitting field $L/K$, the normal closure is $L$ itself; the degree of $\mathbb Q(i)/\mathbb Q$ is $2$ because $X^2+1$ is irreducible over $\mathbb Q$ and splits in $\mathbb Q(i)$ ([[def-finite-galois-extension-and-galois-group]], [[def-galois-closure-of-a-finite-separable-extension]]).

[F3] For a nonzero algebraic integer $\alpha$, the norm of the principal ideal $(\alpha)$ is $|N_{K/\mathbb Q}(\alpha)|$; for $a+bi\in\mathbb Z[i]$, this field norm is $a^2+b^2$ ([[thm-principal-ideal-norm-is-absolute-field-norm]]).

[F4] In the unique factorization of $p\mathcal O_K$, the exponents are ramification indices; the residue degree is the extension degree of residue fields and $N\mathfrak p=p^{f(\mathfrak p/p)}$ ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-prime-above-and-residue-degree]], [[def-ramification-index]], [[cor-norm-of-a-prime-ideal]]).

[F5] In the Galois extension $\mathbb Q(i)/\mathbb Q$, the normal closure equals the field and the completely split-prime density is $1/[\mathbb Q(i):\mathbb Q]$ ([[thm-completely-split-primes-dirichlet-density]]).

## Verification

1.1 The polynomial $X^2+1$ has no rational root, so it is irreducible over $\mathbb Q$ and $[\mathbb Q(i):\mathbb Q]=2$. Its roots $i,-i$ both lie in $\mathbb Q(i)$, so this extension is Galois and its normal closure is itself. [F2, given]

1.2 The identity $(2+i)(2-i)=5$ gives the displayed factorization. For each sign, the quotient $\mathbb Z[i]/(2\pm i)$ has cardinality $|N(2\pm i)|=2^2+1^2=5$ by [F3], and is nonzero. Its additive group has prime order, so the class of $1$ generates it; the map $\mathbb Z/5\mathbb Z\to\mathbb Z[i]/(2\pm i)$ sending $1$ to $1$ is a ring isomorphism. Hence both ideals are prime. They are distinct: modulo $(2+i)$ one has $i\equiv-2$, whereas modulo $(2-i)$ one has $i\equiv2$; if the ideals were equal, their common quotient would force $4=0$ in $\mathbb F_5$, which is impossible. Thus the factorization has two distinct primes with exponent one; by [F4] their ramification indices are one, and their residue fields are $\mathbb F_5$, so their residue degrees are one. [F1, F3, F4, algebra]

2.1 By [A1, F5] the splitting set has density $1/2$. Step 1.2 verifies directly that $5$ is one of its members. [A1, F5, step 1.1, step 1.2] ∎
