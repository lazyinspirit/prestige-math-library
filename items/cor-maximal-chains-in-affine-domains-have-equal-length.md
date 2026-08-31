---
id: cor-maximal-chains-in-affine-domains-have-equal-length
kind: corollary
title: "Maximal chains in an affine domain all have the same length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-affine-domain-maximal-ideal-height-equals-dimension, cor-minimal-prime-has-height-zero, lem-affine-domain-chain-dimension-formula-step, thm-dimension-formula-for-affine-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $k$ be a field and let $A$ be a finite-type $k$-domain. Every saturated prime chain from $(0)$ to a maximal ideal of $A$ has length $\dim A$.

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-domain $A$, and a saturated prime chain $$ (0)=\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_r=\mathfrak m. $$

[L1] In a domain, the minimal prime $(0)$ has height zero ([[cor-minimal-prime-has-height-zero]]).

[L2] Every maximal ideal of an affine domain has height equal to the full dimension ([[cor-affine-domain-maximal-ideal-height-equals-dimension]]).

[L3] For primes $\mathfrak p\subseteq\mathfrak q$ in an affine domain, $$ \operatorname{ht}(\mathfrak q/\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak q)=\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p) $$ ([[lem-affine-domain-chain-dimension-formula-step]]).

[L4] For every prime $\mathfrak p$ of an affine domain, $$ \operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A) $$ ([[thm-dimension-formula-for-affine-domains]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{ht}(\mathfrak p_0)=0$. [L1, given]

2.1 For each $0\le i<r$, the quotient $A/\mathfrak p_i$ is a domain and the chain is saturated, so there is no prime strictly between $0$ and $\mathfrak p_{i+1}/\mathfrak p_i$ in $A/\mathfrak p_i$. Hence $\operatorname{ht}(\mathfrak p_{i+1}/\mathfrak p_i)=1$. Applying [L3] to $\mathfrak p_i\subseteq\mathfrak p_{i+1}$ and comparing [L4] at $\mathfrak p_i$ and $\mathfrak p_{i+1}$ gives $\operatorname{ht}(\mathfrak p_{i+1})=\operatorname{ht}(\mathfrak p_i)+1$. [L3, L4, step 1.1, given]

3.1 Starting from step 1.1 and iterating step 2.1, we obtain $\operatorname{ht}(\mathfrak m)=r$. By [L2], $\operatorname{ht}(\mathfrak m)=\dim A$. Therefore the saturated chain has length $\dim A$, and every such chain has the same length. [L2, step 2.1] ∎
