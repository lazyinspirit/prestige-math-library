---
id: ex-kloosterman-sum-as-a-sheaf-trace
kind: example
title: "Classical Kloosterman Sums from the Rank-Two Kloosterman Sheaf"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - thm-kloosterman-sheaf-purity-and-conductor
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.3"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "PDF pp. 9–10; normalized rank-two Kloosterman formula"
verification:
  precheck: pending
---

## Example

Let $p$ be prime, let $\ell\ne p$, fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$, let $\psi:\mathbb F_p\to\mathbb C^\times$ be a nontrivial additive character, and let $x\in\mathbb F_p^\times$. The classical normalized Kloosterman sum is
$$\operatorname{Kl}_2(x;p)=-p^{-1/2}\sum_{y\in\mathbb F_p^\times}\psi(y+x/y).$$
The rank-two Kloosterman sheaf $\mathcal K\ell_2$ has trace $\operatorname{Kl}_2(x;p)$ at $x$.

## Example references

[[thm-kloosterman-sheaf-purity-and-conductor|Purity and conductor of the hyper-Kloosterman sheaf]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.3](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The primes $p$ and $\ell\ne p$, the embedding $\iota$, the nontrivial additive character $\psi$, and $x\in\mathbb F_p^\times$.

[F1] [[thm-kloosterman-sheaf-purity-and-conductor]]: for every $n\ge2$, the Kloosterman sheaf trace equals $(-1)^{n-1}p^{-(n-1)/2}\sum_{y_1\cdots y_n=x}\psi(y_1+\cdots+y_n)$.

## Verification

1.1 Set $n=2$ in [F1]. The constraint $y_1y_2=x$ is equivalent to choosing $y=y_1\in\mathbb F_p^\times$ and then $y_2=x/y$. [F1, given]

2.1 The normalization is $(-1)^{1}p^{-1/2}=-p^{-1/2}$ and the phase is $\psi(y+x/y)$, so the trace formula is exactly the displayed classical sum. The Kloosterman-sheaf theorem's local construction and ramification proof remain unresolved, so this specialization is escalated with its supplier. [F1, step 1.1, algebra] ∎
