---
id: lem-it-finite-type-class-cardinality-bounds
kind: lemma
title: "Finite type-class cardinality bounds"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-finite-strongly-typical-set
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all sequences, types, and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Chapter 2, §2.1, typical sequences and finite type-class cardinality bounds."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "Chapter 11, §11.1, Theorem 11.1.3, printed pp. 350–351, type-class size bounds."
---

## Statement

Let $\mathcal A$ be a finite nonempty alphabet of size $m$, let $n\ge1$, and let $q$ be an attainable empirical distribution with integer counts $n_a=nq(a)$. Its type class $T_q:=\{a^n\in\mathcal A^n:\widehat P_{a^n}=q\}$ satisfies
$$(n+1)^{-m}\exp(nH(q))\le |T_q|\le \exp(nH(q)),$$
where $H(q):=-\sum_{a:q(a)>0}q(a)\ln q(a)$ and $0\ln0:=0$.

## Facts & Assumptions

**Given:** The finite alphabet, positive blocklength, and attainable type $q$.

[F1] [[def-it-finite-strongly-typical-set]]: $\widehat P_{a^n}(a)$ is the count of $a$ in $a^n$ divided by $n$, and a type class is the set of sequences with that count vector.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: for a finite probability vector, $H(q)=-\sum_{a:q(a)>0}q(a)\ln q(a)$, with $0\ln0=0$.

## Proof

1.1 Under the product law $q^{\otimes n}$, every $a^n\in T_q$ has probability $\prod_a q(a)^{n_a}=\exp(-nH(q))$, omitting zero-count coordinates. Since the total probability of $T_q$ is at most one, $|T_q|\exp(-nH(q))\le1$, which gives the upper bound. [F1, F2, algebra]

1.2 To bound the probability of $T_q$ below, compare it with an arbitrary attainable type $r$ with counts $m_a=nr(a)$. If $m_a>0=n_a$ for some $a$, then $\Pr_{q^{\otimes n}}(T_r)=0$. Otherwise let $k_a=m_a-n_a$ for each $a$ with $n_a>0$. The ratio is $\frac{\Pr_{q^{\otimes n}}(T_r)}{\Pr_{q^{\otimes n}}(T_q)}=\frac{\prod_a n_a!}{\prod_a m_a!}\prod_{a:n_a>0}\left(\frac{n_a}{n}\right)^{k_a}.$ For $k_a\ge0$, the corresponding factor is at most $n^{-k_a}$ because $(n_a+1)\cdots(n_a+k_a)\ge n_a^{k_a}$. For $k_a=-s_a<0$, it is at most $n^{s_a}$ because $n_a(n_a-1)\cdots(n_a-s_a+1)\le n_a^{s_a}$. The equal-total-count relation gives $\sum_{k_a>0}k_a=\sum_{k_a<0}s_a$, so the product of these bounds is at most one. Thus $T_q$ has maximum probability among all type classes under $q^{\otimes n}$. [F1, algebra]

2.1 Each of the $m$ counts has at most $n+1$ values, so there are at most $(n+1)^m$ types. Their probabilities sum to one; since $T_q$ is a most probable type class by step 1.2, its probability is at least $(n+1)^{-m}$. Using $\Pr(T_q)=|T_q|\exp(-nH(q))$ proves the lower bound. [F1, F2, step 1.2, algebra] ∎
