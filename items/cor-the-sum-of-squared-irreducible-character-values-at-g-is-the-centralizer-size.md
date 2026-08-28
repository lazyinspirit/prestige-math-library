---
id: cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size
kind: corollary
title: "For $g\\in G$, the sum of $|\\chi_i(g)|^2$ over the irreducible complex characters is $|C_G(g)|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.4"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group with irreducible complex characters
$\chi_1,\dots,\chi_r$. For every $g\in G$,

$$\sum_{i=1}^{r}\bigl|\chi_i(g)\bigr|^{2}=|C_G(g)|.$$

## Facts & Assumptions

**Given:** A finite group $G$, its irreducible characters $\chi_1,\dots,
\chi_r$, and an element $g\in G$.

[F1] For $g,h\in G$,
$\sum_i\chi_i(g)\overline{\chi_i(h)}=|C_G(g)|$ when $h$ is conjugate to $g$,
and $0$ otherwise
([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

## Proof

**Proof technique:** direct.

1.1 The element $g$ is conjugate to itself, so applying [F1] with $h=g$
gives $\sum_i\chi_i(g)\overline{\chi_i(g)}=|C_G(g)|$. [F1, given]

2.1 Each summand equals $|\chi_i(g)|^{2}$, so the sum of step 1.1 is exactly
$\sum_i|\chi_i(g)|^{2}$, which proves the claim. [step 1.1, algebra] ∎
