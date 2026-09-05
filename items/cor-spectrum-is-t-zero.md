---
id: cor-spectrum-is-t-zero
kind: corollary
title: "Distinct primes have distinct closures, so the spectrum is T0"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-specialisation-order-is-prime-inclusion]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring. Distinct prime ideals of $R$ have distinct closures in $\operatorname{Spec}(R)$. Equivalently, $\operatorname{Spec}(R)$ is $T_0$.

## Facts & Assumptions

**Given:** A commutative ring $R$, distinct prime ideals $\mathfrak p,\mathfrak q\subseteq R$, and the Axiom of Choice.

[L1] In a prime spectrum, $\mathfrak q$ is a specialisation of $\mathfrak p$ exactly when $\mathfrak p\subseteq\mathfrak q$ ([[cor-specialisation-order-is-prime-inclusion]]).

[A1] A space is $T_0$ exactly when distinct points have distinct closures.

## Proof

**Proof technique:** direct.

1.1 If $\overline{\{\mathfrak p\}}=\overline{\{\mathfrak q\}}$, then each point lies in the closure of the other. Hence each is a specialisation of the other, so [L1] gives both $\mathfrak p\subseteq\mathfrak q$ and $\mathfrak q\subseteq\mathfrak p$. Therefore $\mathfrak p=\mathfrak q$, contrary to the hypothesis. [L1, given]

2.1 Thus distinct prime ideals have distinct closures. By [A1], this is exactly the $T_0$ property. [A1, step 1.1]

3.1 Therefore $\operatorname{Spec}(R)$ is $T_0$. [step 2.1] ∎
