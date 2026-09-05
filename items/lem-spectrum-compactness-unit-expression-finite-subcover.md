---
id: lem-spectrum-compactness-unit-expression-finite-subcover
kind: lemma
title: "A finite unit-ideal expression yields a finite distinguished-open subcover"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-principal-distinguished-subset-of-spectrum, lem-distinguished-subset-identities]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (13.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.4(c)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $R$ be a commutative ring. If $$ 1=a_1f_1+\cdots+a_nf_n $$ for elements $a_1,\dots,a_n,f_1,\dots,f_n\in R$, then $$ \operatorname{Spec}(R)=D(f_1)\cup\cdots\cup D(f_n). $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and an identity $1=a_1f_1+\cdots+a_nf_n$ in $R$.

[L1] $D(f)$ is the set of prime ideals that do not contain $f$ ([[def-principal-distinguished-subset-of-spectrum]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p\in\operatorname{Spec}(R)$. If $\mathfrak p$ were outside $D(f_1)\cup\cdots\cup D(f_n)$, then [L1] would give $f_i\in\mathfrak p$ for every $i$. Because $\mathfrak p$ is an ideal, it would then contain the sum $a_1f_1+\cdots+a_nf_n=1$, impossible for a prime ideal. [L1, given, algebra]

2.1 Therefore every prime ideal lies in at least one $D(f_i)$, so $\operatorname{Spec}(R)=D(f_1)\cup\cdots\cup D(f_n)$. [step 1.1]

3.1 The displayed unit expression yields a finite distinguished-open subcover of the spectrum. [step 2.1] ∎
