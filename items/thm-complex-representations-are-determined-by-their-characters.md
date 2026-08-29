---
id: thm-complex-representations-are-determined-by-their-characters
kind: theorem
title: "Finite-dimensional complex representations of a finite group are determined up to isomorphism by their characters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 3.3.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group and let $V$ and $W$ be finite-dimensional complex
representations of $G$. Then

$$V\cong W\quad\Longleftrightarrow\quad\chi_V=\chi_W.$$

## Facts & Assumptions

**Given:** A finite group $G$ and finite-dimensional complex representations $V$ and $W$ of $G$.

[F1] Every finite-dimensional representation of a finite group over a field of characteristic not dividing $|G|$ is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F2] For irreducible $V_i$, the multiplicity of $V_i$ in a completely reduced representation $U$ is $m_i(U)=\langle\chi_U,\chi_i\rangle$ ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[A1] Equivalent representations have equal characters.

## Proof

**Proof technique:** direct.

1.1 By [F1] there are decompositions $V\cong\bigoplus_im_iV_i$ and $W\cong\bigoplus_in_iV_i$ over the irreducible representations $V_i$. By [F2] the multiplicities are $m_i=\langle\chi_V,\chi_i\rangle$ and $n_i=\langle\chi_W,\chi_i\rangle$. [F1, F2, given]

1.2 Conversely, if $V\cong W$ via an invertible intertwiner, then [A1] gives $\chi_V=\chi_W$. This proves the reverse implication. [A1, given]

2.1 Assume $\chi_V=\chi_W$. Then every inner product in step 1.1 agrees, so $m_i=n_i$ for every $i$; the two direct sums are built from the same irreducibles with the same multiplicities, hence $V\cong W$. This proves the forward implication. [step 1.1, algebra]

3.1 Steps 2.1 and 1.2 prove both implications, hence the equivalence. [step 2.1, step 1.2] ∎
