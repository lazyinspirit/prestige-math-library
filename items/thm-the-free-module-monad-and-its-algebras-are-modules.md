---
id: thm-the-free-module-monad-and-its-algebras-are-modules
kind: theorem
title: "For a unital ring R, the free-R-module monad on sets has left R-modules as its Eilenberg–Moore algebras"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint, def-eilenberg-moore-category, thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor, def-left-and-right-modules]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.4(iii) and Exercise 5.2.i"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Fix a unital ring $R$. The monad on $\mathbf{Set}$ induced by the free-left-$R$-module adjunction sends a set $X$ to the underlying set of its free module $R^{(X)}$. Its Eilenberg–Moore category is isomorphic over $\mathbf{Set}$ to the category of left $R$-modules.

## Facts & Assumptions

**Given:** A unital ring $R$ and the free-left-$R$-module adjunction.

[L1] The free-module functor $X\mapsto R^{(X)}$ is left adjoint to the underlying-set functor ([[thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L2] Every adjunction induces a monad on the domain of its left adjoint ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

[L3] A left $R$-module is an abelian group with a compatible unital left $R$-action ([[def-left-and-right-modules]]).

## Proof

**Proof technique:** direct.

1.1 By [L1]–[L2], the monad sends $X$ to finite formal sums $\sum_x r_x[x]$, its unit sends $x$ to $1[x]$, and multiplication evaluates a finite formal sum of finite formal sums. Every left $R$-module gives an algebra by evaluating such sums. [L1, L2]

2.1 Conversely, for an algebra $a:R^{(X)}\to X$, define $0=a(0)$, $x+y=a(1[x]+1[y])$, and $r x=a(r[x])$. The algebra unit and multiplication laws say that substituting finite formal sums before evaluation has the same result as flattening them first; the module axioms in [L3] follow by applying this equality to the corresponding formal sums. [L3, step 1.1]

3.1 An algebra homomorphism commutes with evaluation, hence preserves $0$, addition, and scalar multiplication. Conversely an $R$-linear map preserves every finite formal sum and is therefore an algebra homomorphism. These identifications are inverse over $\mathbf{Set}$. [L3, step 1.1, step 2.1] ∎
