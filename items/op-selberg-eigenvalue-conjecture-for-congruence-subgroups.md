---
id: op-selberg-eigenvalue-conjecture-for-congruence-subgroups
kind: open-problem
title: Selberg Eigenvalue Conjecture for Congruence Subgroups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-selberg-exceptional-eigenvalue-parameter
  - def-weight-zero-maass-form-on-gamma0n
  - thm-kim-sarnak-maass-eigenvalue-lower-bound
  - thm-booker-lee-strombergsson-finite-selberg-verification-ranges
proof_strategy: open-problem
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "Introduction and Theorem 1.1: statement of the conjecture and finite verified level ranges."
    - title: "N. Pascadi, On the Exponents of Distribution of Primes and Smooth Numbers"
      url: "https://arxiv.org/pdf/2505.00653v2"
      locator: "§1.4 and equation (1.4): the conjecture and the Kim–Sarnak bound are stated as the current general results."
    - title: "arXiv API exact-phrase status search"
      url: "https://export.arxiv.org/api/query?search_query=all:%22Selberg%20eigenvalue%20conjecture%22&start=0&max_results=20&sortBy=submittedDate&sortOrder=descending"
      locator: "Feed retrieved 2026-10-26; its newest exact-phrase records still assume or discuss the conjecture rather than claim a proof. This is bounded search evidence, not proof of nonexistence."
---

## Statement

Let $\Gamma$ be a congruence subgroup of $\mathrm{SL}_2(\mathbb Z)$, meaning
that it contains the principal subgroup
$$\Gamma(N)=\{\gamma\in\mathrm{SL}_2(\mathbb Z):\gamma\equiv I\pmod N\}$$
for some integer $N\ge1$. Does every positive cuspidal eigenvalue $\lambda$
of the positive-sign weight-zero Laplacian on $\Gamma\backslash\mathbb H$
satisfy $\lambda\ge1/4$? Equivalently, is the exceptional-eigenvalue
parameter $\theta(\lambda)$ zero for every such eigenvalue?

## Statement references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[N. Pascadi, *On the Exponents of Distribution of Primes and Smooth Numbers*](https://arxiv.org/pdf/2505.00653v2)

## Known partial results and status

As of 2026-10-26 the strongest general lower bound recorded in this batch is
$975/4096$, while the finite computations in the cited BLS theorem cover
$\Gamma_1(N)$ through $N=880$ and $\Gamma(N)$ through $N=226$. The exact-phrase
arXiv API search retrieved 20 records with a feed timestamp of 2026-10-25;
the newest located research records still formulate or assume the conjecture.
This bounded search supports the open-problem status but cannot prove that no
resolution exists elsewhere.

## Known partial results and status references

[[thm-kim-sarnak-maass-eigenvalue-lower-bound]]

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[N. Pascadi, *On the Exponents of Distribution of Primes and Smooth Numbers*](https://arxiv.org/pdf/2505.00653v2)

[arXiv API exact-phrase status search retrieved 2026-10-26](https://export.arxiv.org/api/query?search_query=all:%22Selberg%20eigenvalue%20conjecture%22&start=0&max_results=20&sortBy=submittedDate&sortOrder=descending)
