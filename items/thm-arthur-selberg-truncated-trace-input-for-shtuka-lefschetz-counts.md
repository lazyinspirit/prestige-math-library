---
id: thm-arthur-selberg-truncated-trace-input-for-shtuka-lefschetz-counts
kind: theorem
title: "Arthur–Selberg trace-formula input for truncated shtuka Lefschetz counts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-global-field
  - def-adele-ring-of-a-global-field
  - thm-global-field-adeles-and-ideles-locally-compact
  - thm-function-field-idele-class-degree-exact-sequence
  - def-cuspidal-automorphic-representation-over-function-field
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC is used by the adelic restricted-product compactness and by the chosen
  coefficient-field isomorphism; Countable Choice is used in the local
  compact-open valuation-ring input. No weaker branch is asserted.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et conjecture de Ramanujan–Petersson"
      url: "https://www.numdam.org/item/AST_1997__243__1_0.pdf"
      locator: "Chapter V §2d, Theorem 10, printed p. 241; Chapters V §§3–4 are the unharvested proof gate."
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter I §§1–2 and Theorem I.13, printed pp. 17–33."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§§1.5–2.2, Arthur–Selberg trace formula strategy and its shtuka application."
---

## Statement

Assume AC and Countable Choice. Let $F=\mathbb F_q(X)$ be the function field of a smooth projective geometrically connected curve, let $G=\mathrm{GL}_r$, choose an idele $a$ of degree $1$, and let $h$ be a compactly supported locally constant function on $G(\mathbb A_F)/a^{\mathbb Z}$. Let $\chi_\gamma$ denote the characteristic polynomial of $\gamma\in G(F)$, and let $T_h$ be a finite set of places outside which $h$ is spherical. Suppose that at two distinct places $0,\infty\notin T_h$ the function factors as $h=h_\infty\otimes h^{\infty,0}\otimes h_0$, and that for every proper parabolic subgroup $P<G$ and every $\gamma\in P(F)$ with $\chi_\gamma=X$, the integrals of $h_\infty$ and $h_0$ over the corresponding unipotent radicals vanish for all conjugating elements. Then the Arthur–Selberg orbital sum over $G(F)\backslash G(\mathbb A_F)/a^{\mathbb Z}$ with characteristic polynomial $X$ is zero when $X$ has at least two distinct prime factors. When $X$ has one prime factor $\mu$, the same orbital sum is the sum over the elliptic conjugacy classes $c_\mu=\{\gamma\in G(F):\mu(\gamma)=0\}$, equivalently the integral over $G_{\gamma_\mu}(F)\backslash G(\mathbb A_F)/a^{\mathbb Z}$ of $h(g^{-1}\gamma_\mu g)$ for a representative $\gamma_\mu$ of such a class.

## Statement references

[Laurent Lafforgue, Astérisque 243, Theorem 10](https://www.numdam.org/item/AST_1997__243__1_0.pdf)

[Laurent Lafforgue, Theorem I.13](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §§1.5–2.2](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

The exact hypotheses and orbital-sum conclusions above are Theorem 10 of the 1997 source. The 2002 proof also uses Theorem 12′ of that source for its level-zero trace expansion. Neither full proof is reconstructed here: the Arthur truncation, parabolic vanishing, elliptic-centralizer quotient, and the separate Theorem 12′ transfer calculation remain unresolved. The degree-one idele input now has a local proof under AC in [[thm-function-field-idele-class-degree-exact-sequence]], step 1.2: the closed-place degrees generate $\mathbb Z$, so a finite divisor of degree one gives an idele of degree one. Its full-constant-field hypothesis holds for the smooth projective geometrically connected curve in this Statement. This supplies the choice of $a$, without discharging the trace-formula proof obligations.
