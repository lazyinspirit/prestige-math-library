---
id: cor-contravariant-yoneda-lemma
kind: corollary
title: "For a presheaf $P$, $\\operatorname{Nat}(\\mathcal C(-,a),P)\\cong P(a)$ naturally in $a$ and $P$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-yoneda-evaluation-bijection, thm-yoneda-lemma-is-natural-in-both-variables, def-opposite-category, thm-category-theoretic-duality-principle, def-presheaf-representable-functor-and-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Exercise 2.2.i"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Theorem 4.2.1"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be locally small, let $a$ be an object, and let
$P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ be a presheaf. Evaluation at the
identity gives a bijection

$$E^a_P:\operatorname{Nat}(\mathcal C(-,a),P)\xrightarrow{\cong}P(a),\qquad E^a_P(\alpha)=\alpha_a(1_a),$$

whose inverse sends $x\in P(a)$ to the natural transformation with
$c$-component $f:c\to a\mapsto P(f)(x)$. It is natural in both variables. In
particular, for $h:a\to a'$ and
$\beta:\mathcal C(-,a')\Rightarrow P$,

$$E^a_P\bigl(\beta\circ\mathcal C(-,h)\bigr)=P(h)\bigl(E^{a'}_P(\beta)\bigr),$$

and postcomposition by a natural transformation $P\Rightarrow Q$ corresponds
to its component at $a$.

## Facts & Assumptions

**Given:** The locally small category $\mathcal C$, object $a$, presheaf $P$, and the morphisms and natural transformations in the statement.

[L1] For a covariant functor $F:\mathcal D\to\mathbf{Set}$, evaluation at the identity is a bijection $\operatorname{Nat}(\mathcal D(d,-),F)\to F(d)$ whose inverse sends $x\in F(d)$ to the transformation with component $\alpha^x_c(f)=F(f)(x)$ ([[lem-yoneda-evaluation-bijection]]), and this bijection is natural in $d$ and in $F$ ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[F1] The opposite category has the same objects and satisfies $\mathcal C^{\mathrm{op}}(a,c)=\mathcal C(c,a)$ ([[def-opposite-category]]).

[L2] A theorem derived from category axioms has a formal dual obtained by reversing morphisms and composition ([[thm-category-theoretic-duality-principle]]).

[F2] A presheaf is a functor $\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ ([[def-presheaf-representable-functor-and-representation]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $\mathcal D=\mathcal C^{\mathrm{op}}$, the object $a$, and the covariant functor $P$ of [F2]; by [F1], its hom-functor $\mathcal C^{\mathrm{op}}(a,-)$ is $\mathcal C(-,a)$, and the inverse formula becomes $f:c\to a\mapsto P(f)(x)$. [L1, F1, F2]

1.2 Under the same translation, a morphism $h:a\to a'$ in $\mathcal C$ is reversed in $\mathcal C^{\mathrm{op}}$, so naturality in the object becomes the displayed equation with $\mathcal C(-,h)$ and $P(h)$; naturality in $P$ is unchanged. [L1, F1, L2]

2.1 Steps 1.1 and 1.2 prove the bijection, its inverse formula, and both naturalities. [step 1.1, step 1.2] ∎
