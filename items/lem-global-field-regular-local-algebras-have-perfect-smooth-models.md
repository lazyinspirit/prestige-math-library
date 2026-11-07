---
id: lem-global-field-regular-local-algebras-have-perfect-smooth-models
kind: lemma
title: "Regular local algebras over finitely generated fields have smooth models"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-regular-equals-smooth-over-perfect-field
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the regular-locus and smoothness suppliers."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, regular and smooth loci over a perfect field"
      url: "https://stacks.math.columbia.edu/tag/0B8X"
      locator: "Lemma 33.25.8; the finitely generated field spread is the local extension proved below."
verification: {}
---

## Statement

Assume AC. Let $k_0$ be a perfect field, $k/k_0$ a finitely generated field extension, and $A$ a regular integral finite-type $k$-algebra. For every prime $\mathfrak p\subset A$ there is a smooth integral finite-type $k_0$-algebra $C$ and a prime $\mathfrak q\subset C$ with an isomorphism of local rings $C_{\mathfrak q}\cong A_{\mathfrak p}$. In particular this applies to global function fields over their finite constant fields and to number fields over $\mathbb Q$.

## Facts & Assumptions

**Given:** The perfect base field, finitely generated field extension, regular integral algebra and prime in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] The regular locus of a reduced finite-type scheme over a perfect field is open. [[thm-nonempty-regular-locus-reduced-variety-perfect-field]]

[F2] A regular finite-type scheme over a perfect field is smooth. [[thm-regular-equals-smooth-over-perfect-field]]

## Proof

**Proof technique:** spread out over a finitely generated subalgebra and shrink its regular locus.

1.1 Choose finitely many generators of $k/k_0$ and let $R$ be the $k_0$-subalgebra they generate. Since $k$ is a field, it is the fraction field of the integral domain $R$. Choose finitely many $k$-algebra generators $a_1,\ldots,a_n$ of $A$, and put $B=R[a_1,\ldots,a_n]\subseteq A$. Then $B$ is an integral domain of finite type over $k_0$. With $S=R\setminus\{0\}$, its localization $S^{-1}B$ is $A$, because it contains $k$ and every $a_i$ and is contained in $A$. [A1, given, choose, construct, algebra]

2.1 The inverse image $\mathfrak q_0$ of $\mathfrak p$ in $B$ is disjoint from $S$, and localization identifies $B_{\mathfrak q_0}$ with $A_{\mathfrak p}$. This local ring is regular by the hypothesis on $A$. Since $B$ is reduced and finite type over the perfect field $k_0$, [F1] gives an open regular locus containing $\mathfrak q_0$. Choose $g\in B\setminus\mathfrak q_0$ such that $D(g)$ lies in that locus, and set $C=B_g$. Every local ring of $C$ is regular, so $C$ is regular. [A1, F1, step 1.1, choose, construct, algebra]

3.1 By [F2], $C$ is smooth over $k_0$. It remains an integral finite-type $k_0$-algebra. The prime $\mathfrak q=\mathfrak q_0C$ satisfies $C_{\mathfrak q}\cong B_{\mathfrak q_0}\cong A_{\mathfrak p}$. For a global function field take its finite constant field as $k_0$; for a number field take $k_0=\mathbb Q$. Both are perfect and the extensions are finitely generated. [F2, step 2.1, algebra] ∎
