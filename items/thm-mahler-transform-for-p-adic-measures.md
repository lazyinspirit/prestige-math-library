---
id: thm-mahler-transform-for-p-adic-measures
kind: theorem
title: Mahler transform identifies bounded measures on $\mathbb Z_p$ with $\mathbb
  Z_p\llbracket T\rrbracket$
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-p-adic-measure-on-profinite-abelian-group
- thm-mahler-expansion-for-continuous-p-adic-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: Theorem 3.25 and complete proof, §3.4, printed pp. 124–125
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: §2.3, printed pp. 47–51
verification: {}
---

## Statement

The assignment
$$\mu\longmapsto A_\mu(T):=\int_{\mathbb Z_p}(1+T)^x\,d\mu(x)$$
is a bijection from bounded $\mathbb Z_p$-valued measures on the additive group $\mathbb Z_p$ to $\mathbb Z_p\llbracket T\rrbracket$. If $A_\mu(T)=\sum_{n\ge0}c_nT^n$, then $c_n=\int\binom{x}{n}\,d\mu(x)$.

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Theorem 3.25, §3.4, pp. 124–125](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory*, §2.3, pp. 47–51](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A bounded measure $\mu$ on the additive group $\mathbb Z_p$.

[F1] Continuous functions have unique uniformly convergent Mahler expansions with coefficients tending to zero. [[thm-mahler-expansion-for-continuous-p-adic-functions]]

[F2] A bounded measure is a continuous $\mathbb Z_p$-linear functional on continuous functions. [[def-p-adic-measure-on-profinite-abelian-group]]


## Proof

1.1 The binomial polynomial $\binom{x}{n}$ is continuous and $\mathbb Z_p$-valued on $\mathbb Z_p$. Thus $c_n=\int\binom{x}{n}\,d\mu$ lies in $\mathbb Z_p$, and the binomial expansion gives $A_\mu(T)=\sum c_nT^n$ as a formal series.[F2, algebra]

1.2 Conversely, for arbitrary coefficients $c_n\in\mathbb Z_p$, write $f=\sum a_n\binom{x}{n}$ by [F1] and define $\mu_c(f)=\sum a_nc_n$. Since $a_n\to0$ and $|c_n|_p\le1$, this sum converges in $\mathbb Z_p$; its norm is at most $\|f\|_\infty$, so it is a bounded linear functional.[F1, F2, algebra]

2.1 The functional in step 1.2 has $\int\binom{x}{n}\,d\mu_c=c_n$, so its transform is $\sum c_nT^n$. Conversely, those integrals determine every functional because the Mahler polynomials span a dense subspace by [F1]. Therefore the map is both onto and one-to-one.[F1, step 1.1, step 1.2, algebra] ∎
