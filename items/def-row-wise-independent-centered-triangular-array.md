---
id: def-row-wise-independent-centered-triangular-array
kind: definition
title: Row-wise independent centered triangular array
deps: ["def-random-element-and-real-random-variable", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "def-independent-random-elements", "thm-rectangle-criterion-for-independent-random-elements"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Section 3.4.2'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Billingsley, Probability and Measure, Section 27
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
status: draft
origin: pipeline
---

## Definition

For each integer $n\ge1$, let $k_n\ge1$ be a finite integer and let $X_{n,1},\ldots,X_{n,k_n}$ be integrable real random variables on a probability space $(\Omega_n,\mathcal F_n,\mathbb P_n)$. The family is a **centered triangular array** when $\mathbb E_nX_{n,k}=0$ for every admissible pair $(n,k)$. It is **row-wise independent** when, for each fixed n and all Borel sets $B_1,\ldots,B_{k_n}$, $$\mathbb P_n\!\left(\bigcap_{k=1}^{k_n}\{X_{n,k}\in B_k\}\right)=\prod_{k=1}^{k_n}\mathbb P_n(X_{n,k}\in B_k).$$ Taking unused $B_k$ equal to the real line gives the same factorization for each subfamily; by [[thm-rectangle-criterion-for-independent-random-elements]], this is exactly independence in [[def-independent-random-elements]]. Random variables and integrability have the meanings in [[def-random-element-and-real-random-variable]] and [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. There is no independence requirement between different rows. The spaces may differ with n; assertions about row sums compare their laws. A single-entry row is independent automatically, and deterministic zero entries are allowed. Empty rows are excluded by $k_n\ge1$. This definition makes no existence or choice assumption.
