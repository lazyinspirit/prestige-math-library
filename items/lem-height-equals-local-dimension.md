---
id: lem-height-equals-local-dimension
kind: lemma
title: "Height equals local dimension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-height-of-a-prime-ideal, cor-primes-of-a-prime-local-ring, def-krull-dimension-of-a-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 3.14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension of rings"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. Then $\operatorname{ht}(\mathfrak p)=\sup\{n\ge 0:\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n=\mathfrak p\text{ is a strict chain of prime ideals in }R\}$. The supremum is allowed to be infinite.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a prime ideal $\mathfrak p\subset R$.

[L1] By definition, $\operatorname{ht}(\mathfrak p)=\dim(R_{\mathfrak p})$ ([[def-height-of-a-prime-ideal]]).

[L2] Prime ideals of $R_{\mathfrak p}$ correspond exactly to prime ideals of $R$ contained in $\mathfrak p$, with strict inclusions preserved ([[cor-primes-of-a-prime-local-ring]]).

[L3] Krull dimension is the supremum of lengths of strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], strict chains of prime ideals in $R_{\mathfrak p}$ are in bijection with strict chains of prime ideals in $R$ that end at $\mathfrak p$. Corresponding chains have the same length because strict inclusions are preserved in both directions. [L2, given]

2.1 By [L1], the left-hand side is $\dim(R_{\mathfrak p})$. By [L3], that dimension is the supremum of the lengths of the strict prime chains in $R_{\mathfrak p}$, so step 1.1 identifies it with the displayed supremum over chains in $R$ ending at $\mathfrak p$. [L1, L3, step 1.1]

3.1 Therefore height agrees with the chain-length description. [step 2.1] ∎
