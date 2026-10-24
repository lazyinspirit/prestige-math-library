---
id: cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented
kind: corollary
title: "Every algebra of finite type over a Noetherian ring is finitely presented"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-finite-type-and-module-finite-algebras, def-finitely-presented-module-and-algebra, cor-finite-variable-polynomial-ring-noetherian, thm-noetherian-ring-ideal-characterisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3 Corollary 3.8"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §16"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring and let $A$ be a commutative
$R$-algebra of finite type ([[def-finite-type-and-module-finite-algebras]]).
Then $A$ is finitely presented as an $R$-algebra
([[def-finitely-presented-module-and-algebra]]).

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a commutative $R$-algebra $A$ of finite type.

[L1] An $R$-algebra is of finite type over $R$ exactly when it is isomorphic as an $R$-algebra to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$ for some $n\in\mathbb N$ and some ideal $\mathfrak a$ ([[def-finite-type-and-module-finite-algebras]]).

[L2] If $R$ is a Noetherian commutative ring then $R[x_1,\ldots,x_n]$ is Noetherian for every $n\in\mathbb N$ ([[cor-finite-variable-polynomial-ring-noetherian]]).

[L3] For a commutative ring, being Noetherian is equivalent to every ideal being finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

[L4] A commutative $R$-algebra is finitely presented when it is isomorphic as an $R$-algebra to $R[x_1,\ldots,x_n]/\mathfrak a$ for some $n\in\mathbb N$ and some **finitely generated** ideal $\mathfrak a$ ([[def-finitely-presented-module-and-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Being of finite type, $A$ is isomorphic as an $R$-algebra to $R[x_1,\ldots,x_n]/\mathfrak a$ for some $n\in\mathbb N$ and some ideal $\mathfrak a$ of $R[x_1,\ldots,x_n]$. [L1, given]

2.1 The ring $R[x_1,\ldots,x_n]$ is Noetherian because $R$ is, so its ideal $\mathfrak a$ is finitely generated. [L2, L3, step 1.1]

3.1 A presentation by a polynomial ring in finitely many variables modulo a finitely generated ideal is exactly what finite presentation as an algebra asks for, so $A$ is finitely presented over $R$. [L4, step 1.1, step 2.1] ∎

## Remarks

- **Over a Noetherian base the two algebra conditions coincide.** Finite presentation always implies finite type; this corollary supplies the converse when the base ring is Noetherian, so no relation-finiteness hypothesis needs to be carried in that setting.
