---
id: ex-semilocal-adic-completion
kind: example
title: "Semilocal completion decomposes into completed local factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adic-completion-of-a-module, thm-chinese-remainder-theorem-for-comaximal-ideals]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 22.15"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.97.8"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Example

Let $R$ be a Noetherian commutative ring, let $t\ge1$, and let
$\mathfrak m_1,\dots,\mathfrak m_t$ be distinct maximal ideals. Set
$$
\mathfrak m:=\mathfrak m_1 \cap \cdots \cap \mathfrak m_t.
$$
Then the $\mathfrak m$-adic completion of $R$ decomposes as
$$
\widehat R^{\,\mathfrak m} \cong \prod_{i=1}^t \widehat{R_{\mathfrak m_i}}.
$$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an integer $t\ge1$, pairwise
distinct maximal ideals $\mathfrak m_1,\dots,\mathfrak m_t$, and
$\mathfrak m=\bigcap_i \mathfrak m_i$.

[L1] Completion is the inverse limit of the residue rings modulo the powers of
the defining ideal ([[def-adic-completion-of-a-module]]).

[L2] Pairwise comaximal ideals give a product decomposition modulo their intersection ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

## Verification

**Proof technique:** direct.

1.1 Distinct maximal ideals are pairwise comaximal. If $I+J=R$, expanding $(a+b)^{2n-1}=1$ for $a\in I$, $b\in J$, and $a+b=1$ shows that $I^n+J^n=R$; hence the powers $\mathfrak m_i^n$ are again pairwise comaximal. Applying [L2] first to the $\mathfrak m_i$ and then to their powers gives, for every $n\ge1$, $$\mathfrak m^n=\left(\prod_{i=1}^t\mathfrak m_i\right)^n=\prod_{i=1}^t\mathfrak m_i^n=\bigcap_{i=1}^t\mathfrak m_i^n$$ and $$R/\mathfrak m^n \cong \prod_{i=1}^t R/\mathfrak m_i^n.$$ [L2, given, choose, algebra]

2.1 Localizing $R/\mathfrak m_i^n$ at $R\setminus\mathfrak m_i$ changes nothing. Indeed, if $s\notin\mathfrak m_i$, maximality gives $a\in R$ and $u\in\mathfrak m_i$ with $as+u=1$, and $$as(1+u+\cdots+u^{n-1})=1-u^n\equiv1\pmod{\mathfrak m_i^n}.$$ Thus every such $s$ is already a unit modulo $\mathfrak m_i^n$, and $$R/\mathfrak m_i^n \cong R_{\mathfrak m_i}/\mathfrak m_i^n R_{\mathfrak m_i}.$$ Taking inverse limits and using [L1] yields $$\widehat R^{\,\mathfrak m}\cong\varprojlim_n \prod_{i=1}^t R_{\mathfrak m_i}/\mathfrak m_i^n R_{\mathfrak m_i}.$$ [L1, step 1.1, choose, algebra]

3.1 A compatible tuple in the inverse limit of the finite products in step 2.1 is exactly a choice, for each $i$, of a compatible tuple in the $i$th quotient tower. Therefore inverse limit commutes with this finite product, and $$\widehat R^{\,\mathfrak m}\cong\prod_{i=1}^t \varprojlim_n R_{\mathfrak m_i}/\mathfrak m_i^n R_{\mathfrak m_i}=\prod_{i=1}^t \widehat{R_{\mathfrak m_i}}.$$ This is the claimed decomposition. [L1, step 2.1, algebra] ∎
