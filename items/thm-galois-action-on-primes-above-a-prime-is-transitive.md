---
id: thm-galois-action-on-primes-above-a-prime-is-transitive
title: "Galois action on primes above a prime is transitive"
kind: theorem
status: draft
origin: pipeline
deps: [thm-chinese-remainder-theorem-for-comaximal-ideals, thm-number-field-integral-ideal-factorisation-in-zf, thm-field-norm-and-trace-by-embeddings]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.2, Theorem 9.2.2 proof, pp.101\u2013102"
      url: https://wstein.org/books/ant/ant.pdf
proof_strategy: direct argument
---

## Statement

Let L/K be a finite Galois extension of number fields and p a nonzero prime of $\mathcal O_K$. Then $G=\operatorname{Gal}(L/K)$ acts transitively on the primes P above p.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]: Let $R$ be a commutative ring and let $I_1,\ldots,I_r$ be pairwise comaximal ideals, where $r\ge1$. Then the canonical map $ R\longrightarrow \prod_{i=1}^r R/I_i,\qquad x\longmapsto(x+I_1,\ldots,x+I_r) $ is surjective, its kernel is $\bigcap_{i=1}^r I_i$, and $ \bigcap_{i=1}^r I_i=\prod_{i=1}^r I_i. $ Equivalently, $ R/\prod_{i=1}^r I_i\cong\prod_{i=1}^r R/I_i. $

[F2] [[thm-number-field-integral-ideal-factorisation-in-zf]]: Every nonzero integral ideal $\mathfrak a$ of $\mathcal O_K$ has a unique finite factorisation $\mathfrak a=\prod_{i=1}^r\mathfrak p_i^{e_i}$ into distinct nonzero prime ideals, with $e_i>0$. The finite choices in this construction are least-coded finite choices, so the assertion uses no Choice.

[F3] [[thm-field-norm-and-trace-by-embeddings]]: Let $K/F$ be a finite field extension, let $\Omega/F$ be an algebraic closure, let $\Sigma=\operatorname{Hom}_F(K,\Omega)$, and let $[K:F]_i$ be the inseparable degree (def-inseparable-degree). Then for every $a\in K$, $\operatorname{Tr}_{K/F}(a)=[K:F]_i\sum_{\sigma\in\Sigma}\sigma(a),$ and $N_{K/F}(a)=\left(\prod_{\sigma\in\Sigma}\sigma(a)\right)^{[K:F]_i}.$ In particular, when $K/F$ is separable these are the ordinary sum and product over the distinct $F$-embeddings of $K$ into $\Omega$; and when $[K:F]_i>1$ in characteristic $p>0$, the trace map is identically zero because $[K:F]_i$ is a power of $p$.

## Proof

1.1 Factor $p\mathcal O_L$ into its finite nonempty set S of prime divisors. These primes are maximal, hence distinct ones are comaximal; G permutes S because it fixes p. If S had two orbits A,B, CRT would give $\alpha\in\mathcal O_L$ with residue zero at every prime in A and residue one at every prime in B. The remaining finitely many primes may also be assigned residue one. [F1, F2]

2.1 The product $c=\prod_{\sigma\in G}\sigma(\alpha)=N_{L/K}(\alpha)$ belongs to K and is integral, hence belongs to $\mathcal O_K$. At a prime of A every factor is zero modulo that prime; at a prime of B every factor is one, because each inverse image prime is again in B. Thus $c\in p$ but $c\equiv1$ at a prime above p, a contradiction. There is only one orbit. [F3, step 1.1] ∎
