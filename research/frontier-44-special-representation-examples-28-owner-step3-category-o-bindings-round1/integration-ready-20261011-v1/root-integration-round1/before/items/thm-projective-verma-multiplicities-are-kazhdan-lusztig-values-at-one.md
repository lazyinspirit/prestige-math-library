---
id: thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one
kind: theorem
title: "Projective Verma multiplicities are Kazhdan–Lusztig values at one"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-projective-verma-multiplicities-equal-soergel-standard-ranks, def-regular-integral-dot-orbit-labelling-convention, thm-soergels-character-conjecture, def-type-a-standard-graph-bimodules-support-filtrations-and-character, thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 15
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46, complete German text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.6 (printed p. 19), Lemma 10(i) and its proof: [P(x^{-1}.0)] = C_x(1)[M(0)] in the Grothendieck group, whose proof the paper reduces to the Kazhdan-Lusztig conjectures; the coefficient of y in C_x(1) is the value at t=1 of the Kazhdan-Lusztig coefficient; complete passage read."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8: Hecke algebras and the Kazhdan-Lusztig conjecture (complete 10-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
      locator: "Section 1 (printed pp. 1-3): Conjecture 1.15, [M_{w'.0}:L_{w.0}] = h_{w',w}(1), with Remark 1.16 fixing the index direction y <= w; complete passage read."
---

## Statement

Assume the Axiom of Choice. In a regular integral type-$A$ block
$\mathcal O_\lambda$, for all $y,w\in W$
$$(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1),$$
the value at $q=1$ of the classical Kazhdan–Lusztig polynomial of the pair
$y\le w$; the multiplicity is the total value at one, not an individual
coefficient of $P_{y,w}$, and it vanishes unless $y\le w$ in the Bruhat order.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the projective-lift theory cited below), a regular integral type-$A$ block $\mathcal O_\lambda$ with $W=S_n$, labels $y,w\in W$, and the grading variable $v$ with $q=v^{-2}$.

[F1] The standard-rank comparison ([[lem-projective-verma-multiplicities-equal-soergel-standard-ranks]]): $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=\sum_d r_{y^{-1},d}(B_{w^{-1}})$, where $B_{w^{-1}}$ is the polynomial lift with right reduction $V(P(w\cdot\lambda))=\bar B_{w^{-1}}$ and the $r_{x,d}$ are the pre-reduction graded standard-support multiplicities in the normalization of [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]].

[F2] Soergel's character theorem ([[thm-soergels-character-conjecture]]): for every $x\in S_n$ the character of the indecomposable type-$A$ Soergel bimodule $B_x$ is the Kazhdan–Lusztig basis element $\mathrm{ch}(B_x)=\underline H_x$, equivalently $[B_x]\mapsto\underline H_x$ under the identification of the split Grothendieck group with the Hecke algebra; the scalar-extension comparison identifies the rational and real versions.

[F3] The split Grothendieck group is the type-$A$ Hecke algebra ([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]]): there is an isomorphism $\Phi$ with $\Phi([B_i])=H_i$ and $\Phi(vX)=v\Phi(X)$; by multiplicativity $\Phi([B_x])=H_x$, so a graded class $\sum_d m_dv^d[B_x]$ is read degree by degree as $\sum_d m_dv^dH_x$.

[F4] Kazhdan–Lusztig basis ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]): $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ with $p_{w,w}=1$, $p_{y,w}=0$ unless $y\le w$, and simultaneous inversion symmetry $p_{y^{-1},w^{-1}}=p_{y,w}$.

[F5] Classical normalization ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]): $p_{y,w}=v^{\ell(w)-\ell(y)}P_{y,w}(v^{-2})$ for $y\le w$, with $P_{y,w}=0$ unless $y\le w$ and $P_{w,w}=1$; specialising $v=1$ gives $p_{y,w}(1)=P_{y,w}(1)$.

[F6] Block conventions ([[def-regular-integral-dot-orbit-labelling-convention]]): $(P(w\cdot\lambda):\Delta(y\cdot\lambda))$ is the Verma-flag multiplicity, $V(P(w\cdot\lambda))=\bar B_{w^{-1}}$ is the label-inverting projective dictionary, and the support convention $p_{y,w}=0$ unless $y\le w$ is the Bruhat direction fixed there.

## Proof

**Proof technique:** direct.

1.1 The comparison of [F1] expresses the Verma-flag multiplicity of the indecomposable projective $P(w\cdot\lambda)$ as the total graded standard-support rank of the polynomial lift $B_{w^{-1}}$: $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=\sum_d r_{y^{-1},d}(B_{w^{-1}})$. [F1, F6]

1.2 The character theorem [F2] identifies the character of $B_{w^{-1}}$ with the Kazhdan–Lusztig basis element $\underline H_{w^{-1}}=\sum_x p_{x,w^{-1}}H_x$ in the split Grothendieck group, and [F3] reads a graded class degree by degree in the Hecke basis $H_x$, so comparing coefficients of $H_x$ gives, for every $x\in S_n$, the identity of Laurent polynomials $\sum_d r_{x,d}(B_{w^{-1}})v^d=p_{x,w^{-1}}(v)$. [F2, F3, F4]

2.1 Evaluate step 1.2 at the label $x=y^{-1}$ and at $v=1$: the left side becomes $\sum_d r_{y^{-1},d}(B_{w^{-1}})$, which equals the multiplicity by step 1.1, and the right side becomes $p_{y^{-1},w^{-1}}(1)$; the inversion symmetry $p_{y^{-1},w^{-1}}=p_{y,w}$ of [F4] and the specialization $p_{y,w}(1)=P_{y,w}(1)$ of [F5] turn this into $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1)$ for all $y,w\in W$. The vanishing clause is the support statement $p_{y,w}=0$ unless $y\le w$ of [F4] and [F5], and only the total value at one is used: no individual coefficient of $P_{y,w}$ is interpreted as a category-$\mathcal O$ multiplicity, and no grading on $\mathcal O$ is constructed — the grading in play is the auxiliary grading of the polynomial lift, normalized on the Soergel side. [F4, F5, step 1.1, step 1.2] ∎
