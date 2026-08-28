---
id: thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree
kind: theorem
title: "If $k$ is algebraically closed and $\\operatorname{char} k \\nmid |G|$, there are finitely many irreducible representations, and each occurs in the regular representation with multiplicity equal to its degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field, thm-simple-modules-over-semisimple-rings, thm-matrix-rings-over-division-rings-are-semisimple, cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 2.1.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.1(ii)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be an algebraically closed field with
$\operatorname{char} k \nmid |G|$. Then there are finitely many irreducible
representations $V_1,\ldots,V_r$ of $G$ over $k$, up to equivalence, and the
regular representation decomposes as

$$
k[G]\cong V_1^{\oplus \dim_k V_1}\oplus\cdots\oplus V_r^{\oplus \dim_k V_r}.
$$

In particular, each irreducible representation occurs in the regular
representation with multiplicity equal to its degree.

## Facts & Assumptions

**Given:** A finite group $G$ and an algebraically closed field $k$ with $\operatorname{char} k \nmid |G|$.

[L1] Under these hypotheses, there is a $k$-algebra decomposition
$$
k[G]\cong\prod_{i=1}^r M_{n_i}(k)
$$
for positive integers $n_i$ ([[thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]]).

[L2] For such a product ring $\prod_{i=1}^r M_{n_i}(k)$ with $r\ge1$, the simple left modules are exactly the column modules $k^{n_i}$, one isomorphism class for each factor ([[thm-simple-modules-over-semisimple-rings]]).

[L3] For $M_{n_i}(k)$, the left regular module is the direct sum of $n_i$ copies of its simple column module $k^{n_i}$ ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

[L4] Under the dictionary, irreducible representations are exactly simple left $k[G]$-modules ([[cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]]).

[L5] The regular representation of $G$ over $k$ is the left action on $k[G]$ ([[def-trivial-regular-and-permutation-representations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the left regular $k[G]$-module is isomorphic to the left regular module of $\prod_{i=1}^r M_{n_i}(k)$. As a module over that product, the regular module splits as the direct sum of the factor regular modules, and [L3] decomposes factor $i$ into $n_i$ copies of the column module $k^{n_i}$. Thus the regular representation [L5] is a direct sum of finitely many simple modules, with the factor-$i$ simple occurring exactly $n_i$ times. [L1, L3, L5, given, algebra]

2.1 By [L2], those factor column modules give all simple module isomorphism classes, one for each factor. Translating with [L4], there are finitely many irreducible representations of $G$, one for each factor, and the factor-$i$ representation has degree $n_i$ because its underlying vector space is $k^{n_i}$. Therefore the regular representation contains each irreducible representation with multiplicity equal to its degree. [L2, L4, step 1.1, given, algebra] ∎
