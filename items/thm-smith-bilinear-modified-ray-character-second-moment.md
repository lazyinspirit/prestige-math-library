---
id: thm-smith-bilinear-modified-ray-character-second-moment
kind: theorem
title: "Second moment for modified ray characters over number fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-axiom-of-choice, def-countable-choice, def-number-field, def-relative-ideal-norm-in-number-field-extension, thm-number-field-integral-ideal-factorisation-in-zf, thm-fundamental-identity-for-primes-in-number-fields, lem-smith-weiss-smoothed-ideal-character-estimate]
justified_by: []
proof_strategy: direct
axiom_use: "AC and Countable Choice are inherited from the smoothed Hecke-character estimate."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§5.1, Proposition 5.5"
verification: {}
---

## Statement

Assume AC and Countable Choice. There is an absolute constant $C>1$ such that the following holds. Let $L/F$ be an extension of number fields, let $n=[L:\mathbb Q]$, $r=[L:F]$, and let $\Delta$ be the absolute discriminant of $L$. For every nonzero prime $\mathfrak p$ of $F$, let $\chi_{\mathfrak p}$ be a finite-order modified ray character of ideals of $L$, extended multiplicatively by the value $1$ at every prime dividing its modulus, and let $c_{\mathfrak p}\in\mathbb C$ have $|c_{\mathfrak p}|\le1$. Suppose that for every distinct $\mathfrak p,\mathfrak p'$ with nonzero coefficients the product $\chi_{\mathfrak p}\overline{\chi_{\mathfrak p'}}$, away from primes above $\mathfrak p\mathfrak p'$, is a nontrivial ray character modulo the squarefree product of the primes of $L$ above $\mathfrak p\mathfrak p'$.

Then for $N_1,N_2>1$,
$$\sum_{N_1\le N_L\mathfrak a\le2N_1}\left|\sum_{N_2\le N_F\mathfrak p\le2N_2}c_{\mathfrak p}\chi_{\mathfrak p}(\mathfrak a)\right|^2\le N_1N_2(C\log(2\Delta))^n+C^n\Delta^{3/4}N_2^{2+3r/2}.$$
The outer sum is over integral ideals of $L$, and the inner sum is over primes of $F$. This is the uniform second-moment input for the bilinear estimate; it does not itself prove the full symbol-sum bound.

## Statement references

[[lem-smith-weiss-smoothed-ideal-character-estimate]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 5.5](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, the fields, modified characters, coefficients, nontriviality condition, and parameters in the Statement.

[F1] A nonnegative common smoothing function majorizes the target norm interval and satisfies the uniform nontrivial-character and all-ideal estimates; also $\kappa_L\le(C\log(2\Delta))^n$. [[lem-smith-weiss-smoothed-ideal-character-estimate]]

[F2] Ideals factor uniquely into prime ideals, the relative prime norm is the lower prime raised to its residue degree, and the total ramification and residue degrees above one prime sum to the extension degree. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[def-relative-ideal-norm-in-number-field-extension]] [[thm-fundamental-identity-for-primes-in-number-fields]]

## Proof

1.1 Let $h=h_L$ from [F1]. It is nonnegative and at least one for $N_1/N\mathfrak a\in[1/2,1]$, so the target sum is bounded by the sum over all integral ideals with weight $h(N_1/N\mathfrak a)$. Expanding the square and using the triangle inequality gives a sum of absolute weighted correlations over ordered pairs $\mathfrak p,\mathfrak p'$. There are at most $2nN_2$ primes of $F$ in the range: their rational prime below is at most $2N_2$, and at most $[F:\mathbb Q]\le n$ primes lie above each rational prime. [F1, F2, given, algebra]

2.1 On the diagonal, every modified character has modulus one on every integral ideal, so the weighted correlation is at most $C^n(\kappa_LN_1+\Delta^{3/4})$ by [F1]. For distinct $\mathfrak p,\mathfrak p'$, let $\mathfrak b$ be the squarefree product of primes of $L$ above them. Its norm satisfies $N\mathfrak b\le(N_F\mathfrak p\,N_F\mathfrak p')^r\le(2N_2)^{2r}$, and $\omega(\mathfrak b)\le2r$, by [F2]. On ideals coprime to $\mathfrak b$, the product is the stated nontrivial ray character, so [F1] bounds that part by $C^n\Delta^{3/4}N_2^{3r/2}$ after absorbing powers of $2$ into $C^n$. [F1, F2, step 1.1, given, algebra]

3.1 The contribution from ideals divisible by a prime $\mathfrak P\mid\mathfrak b$ is at most $$\sum_{\mathfrak a:\mathfrak P\mid\mathfrak a}h\!\left(\frac{N_1}{N\mathfrak a}\right)=\sum_{\mathfrak c}h\!\left(\frac{N_1/N\mathfrak P}{N\mathfrak c}\right)\le C^n\left(\kappa_L\frac{N_1}{N\mathfrak P}+\Delta^{3/4}\right).$$ Here ideal factorization gives the bijection $\mathfrak a=\mathfrak P\mathfrak c$. Every such $\mathfrak P$ has $N\mathfrak P\ge N_2$, and there are at most $2r$ of them. Thus each off-diagonal correlation is at most $$C^n\left(\Delta^{3/4}N_2^{3r/2}+\kappa_L\frac{N_1}{N_2}\right),$$ with the harmless $2r$ absorbed into $C^n$. [F1, F2, step 2.1, given, algebra]

4.1 Sum the diagonal bound over at most $2nN_2$ primes and the off-diagonal bound over at most $(2nN_2)^2$ ordered pairs. Since $N_2>1$ and $n,r\le n$, the polynomial factors are absorbed into $C^n$, and the two diagonal error terms are dominated by the displayed right-hand side. Finally use the residue estimate in [F1] and increase $C$ once. [F1, step 1.1, step 2.1, step 3.1, given, algebra] ∎
