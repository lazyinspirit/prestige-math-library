---
id: cor-the-regular-character-gives-the-sum-of-squares-formula
kind: corollary
title: "The regular character gives a second proof of the sum-of-squares formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product, thm-character-of-the-regular-representation, thm-characters-of-direct-sums-tensor-products-and-duals]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 3.3.7"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group and let $\chi_1,\dots,\chi_r$ be its irreducible
complex characters, of degrees $n_i=\chi_i(1)$. Then

$$\sum_{i=1}^{r}n_i^{2}=|G|.$$

## Facts & Assumptions

**Given:** A finite group $G$ with irreducible characters $\chi_1,\dots, \chi_r$, the regular representation $\mathbb C[G]$, and the regular character $\chi_{\mathrm{reg}}$.

[F1] The regular character is $|G|$ at $1$ and $0$ elsewhere ([[thm-character-of-the-regular-representation]]).

[F2] The multiplicity of an irreducible summand is an inner product: $m_i=\langle\chi_{\mathrm{reg}},\chi_i\rangle$ ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F3] Characters add on direct sums: $\chi_{V\oplus W}=\chi_V+\chi_W$ ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[A1] The degree of a character is its value at $1$, $\chi_i(1)=n_i$.

## Proof

**Proof technique:** direct.

1.1 By [F2], the regular representation decomposes as $\mathbb C[G]\cong\bigoplus_im_iV_i$ with $m_i=\langle\chi_{\mathrm{reg}},\chi_i\rangle$. By [F1] and the definition of the inner product this is $\frac{1}{|G|}\cdot|G|\cdot\chi_i(1)=\chi_i(1)=n_i$, because the only nonzero term is at $g=1$. [F1, F2, A1, given]

2.1 Characters add on direct sums by [F3], so evaluating both sides of the decomposition of step 1.1 at $1$ gives $\chi_{\mathrm{reg}}(1)=\sum_im_in_i$. By [F1] the left side is $|G|$, and step 1.1 gives $m_i=n_i$, so $|G|=\sum_in_i^{2}$. [F1, F3, step 1.1, algebra] ∎
