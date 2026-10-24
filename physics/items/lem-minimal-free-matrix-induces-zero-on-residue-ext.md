---
id: "lem-minimal-free-matrix-induces-zero-on-residue-ext"
kind: "lemma"
title: "minimal free matrix induces zero on residue ext"
deps: ["def-balanced-ext-bifunctor", "thm-module-categories-have-enough-injectives"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 1.53 proof, Claim, p.25"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, let $\alpha:R^s\to R^t$ be a map between finite free modules all of whose matrix entries lie in $\mathfrak m$. Then $\operatorname{Ext}^i_R(k,\alpha)=0$ for every $i\ge0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-balanced-ext-bifunctor]]: Assume the Axiom of Dependent Choice. Let $\mathcal A$ be an abelian category with enough projectives and enough injectives, and fix supplied projective and injective resolution data on all objects of $\mathcal A$. For each $n\geq0$, define $$\operatorname{Ext}_{\mathcal A}^{n}(M,N)$$ to mean either $\operatorname{Ext}_{P}^{n}(M,N)$ or $\operatorname{Ext}_{I}^{n}(M,N)$, identified by the natural comparison isomorphism already proved. This notation is justified by the comparison theorem, its independence of comparison data, its two-variable naturality, and its change-of-resolution cocycle law; it is not a definition by equality of the two complexes.

[F2] [[thm-module-categories-have-enough-injectives]]: Assume the Axiom of Choice. For every unital ring $R$ and every left $R$-module $M$, there is an injective left $R$-module $I$ and a monomorphism $M\to I$. Thus left $R$-modules have enough injectives. For commutative $R$, one explicit functorial target is $$J(M)=\left(R^{(M^\vee)}\right)^\vee\cong\prod_{\phi\in M^\vee}R^\vee,$$ where $X^\vee=\operatorname{Hom}_{\mathbb Z}(X,\mathbb Q/\mathbb Z)$; the embedding is $M\to M^{\vee\vee}\to J(M)$. Here $X^\vee$ is a left $R$-module by $(r\phi)(x)=\phi(rx)$.

## Proof

1.1 Choose an injective resolution $I^\bullet$ of $R$. Finite direct sums $(I^\bullet)^s$ and $(I^\bullet)^t$ are injective resolutions of the free modules. The same coefficient matrix defines a chain map between them extending $\alpha$. Enough injectives is used with AC, and the balanced Ext convention with its supplied data and DC. [F2, F1]

2.1 For $a\in\mathfrak m$ and $h:k\to I^j$, $ah(z)=h(az)=0$. Consequently that matrix induces the zero map on every term of $\operatorname{Hom}_R(k,I^\bullet)$. It therefore induces zero on cohomology in every degree. This includes $i=0$ and $s=0$ or $t=0$. [F1, step 1.1, algebra] ∎
