---
id: lem-local-integers-of-finite-separable-local-extension-are-monogenic
kind: lemma
title: "The ring of integers of a finite local extension is monogenic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - cor-finite-extensions-of-finite-fields-are-simple
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - def-separable-elements-and-separable-extensions
  - thm-splitting-fields-exist-for-nonzero-polynomials
  - def-integral-element-and-algebraic-integer
  - def-normed-vector-space-over-an-absolutely-valued-field
  - def-formal-derivative-of-a-polynomial
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter II, Section 10, Lemma 10.4"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Proposition 7.55 and Remark 7.56"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite separable extension of
nonarchimedean local fields with finite residue fields, and write
$\mathcal O_K$ and $\mathcal O_L$ for their valuation rings. There is an
$\alpha\in\mathcal O_L$ whose residue generates the residue-field extension
and such that $\mathcal O_L=\mathcal O_K[\alpha]$. If the residue fields are
equal, then every uniformizer $\pi_L$ of $L$ satisfies
$\mathcal O_L=\mathcal O_K[\pi_L]$ and $L=K(\pi_L)$.

## Statement references

[J. Neukirch, *Algebraic Number Theory*, Chapter II, Section 10, Lemma 10.4](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Proposition 7.55 and Remark 7.56](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** Countable Choice and a finite separable extension $L/K$ of nonarchimedean local fields with finite residue fields.

[A1] Countable Choice selects one element from each member of a countable family of nonempty sets. ([[def-countable-choice]])

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: $K$ and $L$ are complete discretely valued fields with finite residue fields, and each valuation ring is a discrete valuation ring with a uniformizer.

[F2] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: Under Countable Choice, for any finite extension $E/F$ of nonarchimedean local fields, $[E:F]=e(E/F)f(E/F)$, with finite ramification index and residue degree; for normalized integer valuations, $v_E|_F=e(E/F)v_F$.

[F3] [[cor-finite-extensions-of-finite-fields-are-simple]]: Every finite extension of a finite field has a primitive element.

[F4] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]: Every finite extension of a finite field is separable.

[F5] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: A complete nonarchimedean absolute value has a unique extension to every finite field extension; every base-field embedding preserves it, and the finite extension is complete.

[F6] [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]: On a finite-dimensional normed vector space over a complete valued field, the given norm and any coordinate maximum norm are equivalent; finite-dimensional subspaces are closed. Its published proof selects a sequence from countably many nonempty sets, so this use is under [A1]; the supplier Statement's omission of Countable Choice is recorded for owner review.

[F7] [[def-integral-element-and-algebraic-integer]]: An element is integral over a ring if it satisfies a monic polynomial over that ring.

[F8] [[thm-splitting-fields-exist-for-nonzero-polynomials]]: Every nonzero polynomial over a field has a splitting field.

[F9] [[def-formal-derivative-of-a-polynomial]]: For $g(T)=\sum_j c_jT^j$, $g'(T)=\sum_{j\ge1}j c_jT^{j-1}$.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 Let $f=[k_L:k_K]$, which is finite by [F2]. Choose a primitive residue element $\bar a\in k_L$ by [F3], let $\bar g\in k_K[T]$ be its monic minimal polynomial, and lift $\bar g$ to a monic $g\in\mathcal O_K[T]$. The residue extension is separable by [F4], so $\bar g'(\bar a)\ne0$. Choose $a_0\in\mathcal O_L$ lifting $\bar a$ and a uniformizer $\pi_L$. [A1, F1, F2, F3, F4, F9, given, choose]

1.2 Now suppose $k_L=k_K$, and let $\pi_L$ be any uniformizer. By [F2], $[L:K]=e(L/K)$. The powers $1,\pi_L,\ldots,\pi_L^{e-1}$ are $K$-linearly independent: in a nonzero linear relation the nonzero terms have valuations $e(L/K)v_K(a_j)+j$, which are distinct modulo $e(L/K)$, so a unique term has minimum valuation and the sum cannot be zero. Therefore $[K(\pi_L):K]\ge e(L/K)=[L:K]$, whence $L=K(\pi_L)$. [A1, F1, F2, given, algebra]

2.1 If $v_L(g(a_0))=1$, set $\alpha=a_0$. Otherwise $v_L(g(a_0))\ge2$, including the possibility $g(a_0)=0$; set $\alpha=a_0+\pi_L$. The polynomial Taylor identity gives $g(a_0+\pi_L)=g(a_0)+g'(a_0)\pi_L+\pi_L^2h$ for some $h\in\mathcal O_L$. Since $g'(a_0)$ is a unit, the middle term has valuation one and the other terms have valuation at least two, so in this case $\pi:=g(\alpha)$ is a uniformizer. In the first case set $\pi:=g(\alpha)$, also of valuation one. [F1, F9, step 1.1, choose, construct, algebra]

3.1 The element $\alpha$ lies in $\mathcal O_L$. Take a splitting field of its minimal polynomial over $K$ using [F8]. By uniqueness of the extending absolute value [F5], every $K$-embedding of $K(\alpha)$ into that splitting field preserves the absolute value, so every conjugate of $\alpha$ has absolute value at most one. The coefficients of its monic minimal polynomial are signed sums of products of these conjugates, hence lie in $\mathcal O_K$; [F7] makes $\alpha$ integral over $\mathcal O_K$. Therefore $A:=\mathcal O_K[\alpha]$ is a finite free $\mathcal O_K$-module with basis the powers of $\alpha$ below its minimal-polynomial degree. By [F6] and [A1], the coordinate vectors of any convergent sequence in $A$ are Cauchy; their coordinates converge in the complete closed ring $\mathcal O_K$, so the limit remains in $A$. Thus $A$ is closed in $L$. [A1, F1, F5, F6, F7, F8, step 2.1, algebra]

4.1 The residue of $\alpha$ generates $k_L/k_K$. For any $x\in\mathcal O_L$, choose $c_0(T)\in\mathcal O_K[T]$ of degree less than $f$ with $x-c_0(\alpha)\in\mathfrak m_L$, and divide by $\pi=g(\alpha)$ to obtain another element of $\mathcal O_L$. Iterating gives partial sums $s_N=\sum_{j=0}^{N-1}\pi^j c_j(\alpha)\in A$ with $v_L(x-s_N)\ge N$. Hence $s_N\to x$ in $L$; since $A$ is closed by step 3.1, $x\in A$. Thus $\mathcal O_L=A$. Every element of $L$ is a fraction of elements of its valuation ring, so $L=\operatorname{Frac}(A)=K(\alpha)$. [A1, F1, step 1.1, step 2.1, step 3.1, choose, construct, algebra]

5.1 The ring $A':=\mathcal O_K[\pi_L]$ is a finite free $\mathcal O_K$-module and is closed in $L$ by the same integral-coefficient and norm-equivalence argument as step 3.1. Since $k_L=k_K$, repeatedly choose $c_j\in\mathcal O_K$ matching the residue of the current quotient after division by $\pi_L$. The resulting partial sums $\sum_{j=0}^{N-1}c_j\pi_L^j$ lie in $A'$ and converge to every $x\in\mathcal O_L$. Closedness gives $\mathcal O_L\subseteq A'$, while $A'\subseteq\mathcal O_L$; hence $\mathcal O_L=\mathcal O_K[\pi_L]$. [A1, F1, F5, F6, step 3.1, step 1.2, construct, choose, algebra] ∎
