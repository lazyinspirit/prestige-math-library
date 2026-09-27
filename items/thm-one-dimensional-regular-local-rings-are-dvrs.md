---
id: "thm-one-dimensional-regular-local-rings-are-dvrs"
kind: "theorem"
title: "one dimensional regular local rings are dvrs"
deps: ["def-axiom-of-choice", "def-embedding-dimension-and-regular-local-ring", "lem-determinant-trick-for-nakayama", "thm-proper-ideal-contained-in-maximal-ideal", "thm-equivalent-characterisations-of-a-dvr", "thm-krull-intersection-theorem"]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Example 12.10, p.116"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR.

## Facts & Assumptions

**Given:** The Axiom of Choice and a nonzero Noetherian local ring $(R,\mathfrak m,k)$ of dimension one.

[F1] [[def-embedding-dimension-and-regular-local-ring]]: Regularity means $\dim_k(\mathfrak m/\mathfrak m^2)=\dim R=1$.

[F2] [[lem-determinant-trick-for-nakayama]]: If a finite module $M$ satisfies $\mathfrak mM=M$, some $a\in\mathfrak m$ has $(1-a)M=0$. Under AC, [[thm-proper-ideal-contained-in-maximal-ideal]] shows that every nonunit lies in a maximal ideal. In this local ring it must lie in $\mathfrak m$, so $1-a$ is a unit: otherwise $1-a,a\in\mathfrak m$ would force $1\in\mathfrak m$.

[F3] [[thm-equivalent-characterisations-of-a-dvr]]: Let $R$ be a nonfield domain. The following are equivalent. 1. $R$ is a discrete valuation ring. 2. $R$ is a Noetherian valuation ring. 3. $R$ is a one-dimensional Noetherian local integrally closed domain. 4. $R$ is a local principal ideal domain with nonzero maximal ideal.

[F4] The first clause of [[thm-krull-intersection-theorem]] identifies $\bigcap_{n\ge0}\mathfrak m^n$ with the elements annihilated by $1-a$ for some $a\in\mathfrak m$. By [F2], each such $1-a$ is a unit under the stated AC premise, so this intersection is $0$.

## Proof

1.1 Suppose $R$ is regular. Lift a basis of the one-dimensional vector space $\mathfrak m/\mathfrak m^2$ to $t\in\mathfrak m$. Then $\mathfrak m=(t)+\mathfrak m^2$. The finite module $Q=\mathfrak m/(t)$ satisfies $\mathfrak mQ=Q$, so [F2] gives $Q=0$ and $\mathfrak m=(t)$. Since $\dim R=1$, $\mathfrak m\ne0$ and $t$ is a nonzero nonunit. Also $t$ is not nilpotent: if $t^r=0$, every prime contains $t$ and hence $\mathfrak m$, making $\mathfrak m$ the only prime and forcing dimension zero. [F1, F2, given]

2.1 By [F4], $\bigcap_{n\ge0}(t^n)=0$. Thus for every nonzero $a\in R$ there is a largest $n$ with $a\in(t^n)$. Write $a=t^nu$. If $u\in\mathfrak m=(t)$ then $a\in(t^{n+1})$, a contradiction; therefore $u$ is a unit. Products of nonzero elements $t^nu$ and $t^mv$ are nonzero because $t$ is not nilpotent, so $R$ is a domain. In a nonzero ideal choose an element with least such exponent $n$; it generates the ideal. The zero ideal is principal too. Thus $R$ is a local PID with nonzero maximal ideal, hence a DVR by [F3]. [step 1.1, F3, F4, algebra]

3.1 Conversely, a DVR is a nonfield local PID of dimension one by [F3]. Its maximal ideal $(t)$ is nonzero, and $t\notin(t^2)$ by cancellation in a domain, so $\mathfrak m/\mathfrak m^2$ has basis the class of $t$. Its embedding dimension is one, and it is regular by [F1]. [F1, F3, algebra] ∎
