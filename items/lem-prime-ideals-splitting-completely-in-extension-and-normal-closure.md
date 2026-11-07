---
id: lem-prime-ideals-splitting-completely-in-extension-and-normal-closure
kind: lemma
title: "Complete splitting in an extension and its normal closure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-fundamental-identity-for-primes-in-number-fields
  - def-axiom-of-choice
  - def-completion-of-a-number-field-at-a-prime
  - lem-number-field-completions-as-local-polynomial-factors
  - def-galois-closure-of-a-finite-separable-extension
  - thm-galois-closures-exist-and-are-minimal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Chapter VI §3, Theorem 3.4 and footnote 3"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.192–193; normal-closure equivalence via completions and composita."
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §13"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Corollaries 13.6–13.7, printed pp.548–549, splitting consequences."
---

## Statement

Assume the Axiom of Choice. Let $L/K$ be a finite extension of number fields and let $M/K$ be the Galois closure of $L/K$. For a finite extension $E/K$ of degree $n_E$ and a nonzero prime ideal $\mathfrak p$ of $\mathcal O_K$, say that $\mathfrak p$ **splits completely in $E/K$** when
$$\mathfrak p\mathcal O_E=\mathfrak P_1\cdots\mathfrak P_{n_E}$$
for distinct prime ideals $\mathfrak P_i$, each with ramification index and residue degree equal to $1$. Then $\mathfrak p$ splits completely in $L/K$ if and only if it splits completely in $M/K$.

## Statement references

[[def-number-field]]

[[def-axiom-of-choice]]

[[def-prime-above-and-residue-degree]]

[[def-ramification-index]]

[[def-galois-closure-of-a-finite-separable-extension]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite extension $L/K$ of number fields, its Galois closure $M/K$, and a nonzero prime ideal $\mathfrak p$ of $\mathcal O_K$.

[A1] The Axiom of Choice is assumed, as required by the completion factorization used below ([[def-axiom-of-choice]]).

[F1] For every finite extension $E/K$ and nonzero prime ideal $\mathfrak p$ of $\mathcal O_K$, the extended ideal has a unique finite prime-ideal factorization; the ramification index is the exponent of each prime above $\mathfrak p$, and the residue degree is $[\mathcal O_E/\mathfrak P:\mathcal O_K/\mathfrak p]$ ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-prime-above-and-residue-degree]], [[def-ramification-index]]).

[F2] For finite $E/K$, the fundamental identity is $\sum_{\mathfrak P\mid\mathfrak p}e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)=[E:K]$ ([[thm-fundamental-identity-for-primes-in-number-fields]]).

[F3] Assuming the Axiom of Choice, if $K_{\mathfrak p}$ is the completion of $K$ at $\mathfrak p$, then $E\otimes_K K_{\mathfrak p}\cong\prod_{\mathfrak P\mid\mathfrak p}E_{\mathfrak P}$ as $K_{\mathfrak p}$-algebras, with $\sum_{\mathfrak P\mid\mathfrak p}[E_{\mathfrak P}:K_{\mathfrak p}]=[E:K]$ ([[lem-number-field-completions-as-local-polynomial-factors]]).

[F4] The Galois closure $M$ is the finite splitting field of the minimal polynomials of a finite generating family for $L/K$; hence it is the compositum of the finitely many $K$-conjugate subfields of $L$ ([[thm-galois-closures-exist-and-are-minimal]]).

## Proof

1.1 For any finite extension $E/K$, complete splitting gives $n_E$ local factors in [F3], whose positive degrees sum to $n_E$, so each local factor has degree one and $E\otimes_K K_{\mathfrak p}\cong K_{\mathfrak p}^{n_E}$. Conversely, if this tensor product is $K_{\mathfrak p}^{n_E}$, its $n_E$ primitive idempotents show that the decomposition in [F3] has $n_E$ prime factors; their positive local degrees sum to $n_E$, so each has degree one. The fundamental identity [F2] then writes $n_E$ as a sum of $n_E$ positive integers $e_if_i$, forcing each $e_if_i=1$ and hence every $e_i=f_i=1$. [A1, F1, F2, F3, given]

2.1 Suppose $\mathfrak p$ splits completely in $L/K$. Every $K$-conjugate field $L_i$ of $L$ is $K$-isomorphic to $L$, so it also splits completely at $\mathfrak p$; by step 1.1, each $L_i\otimes_K K_{\mathfrak p}$ is a finite product of copies of $K_{\mathfrak p}$. Their tensor product is therefore a finite product $K_{\mathfrak p}^N$. Multiplication from $\bigotimes_i L_i$ onto their compositum $M$ is surjective: its image is a finite-dimensional $K$-subalgebra of the field $M$, hence a field containing every $L_i$, so it is $M$. Tensoring this surjection with $K_{\mathfrak p}$ shows that $M\otimes_K K_{\mathfrak p}$ is a quotient of $K_{\mathfrak p}^N$. Every ideal of a finite product of fields is the product of some coordinate fields and zeros, as the coordinate idempotents isolate its factors. Thus the quotient is $K_{\mathfrak p}^m$ for some $m$; its dimension is $[M:K]$, so $m=[M:K]$. Step 1.1 proves complete splitting in $M/K$. [A1, F3, F4, step 1.1, construct, algebra]

2.2 Conversely, suppose $\mathfrak p$ splits completely in $M/K$. The inclusion $L\hookrightarrow M$ remains injective after tensoring over $K$ with the field $K_{\mathfrak p}$, so $L\otimes_K K_{\mathfrak p}$ embeds in $M\otimes_K K_{\mathfrak p}\cong K_{\mathfrak p}^{[M:K]}$. By [F3], the former is a product of fields $L_{\mathfrak P}$. Each factor has a nonzero coordinate map into $K_{\mathfrak p}$; that map is an injective $K_{\mathfrak p}$-algebra homomorphism, hence an isomorphism. Therefore $L\otimes_K K_{\mathfrak p}$ is a product of copies of $K_{\mathfrak p}$, and its dimension is $[L:K]$. Step 1.1 gives complete splitting in $L/K$. [A1, F3, step 1.1, algebra]

3.1 The two implications prove the equivalence. The only axiom assumption is [A1], used by the cited number-field completion factorization; the finite compositum, quotient and dimension arguments introduce no additional choice. [A1, step 2.1, step 2.2] ∎