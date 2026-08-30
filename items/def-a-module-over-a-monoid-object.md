---
id: def-a-module-over-a-monoid-object
kind: definition
title: "Modules over a monoid object, their morphisms, and their category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-monoid-object-and-comonoid-object-in-a-monoidal-category, def-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

Let $M$ be a monoid object in a monoidal category
$(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$
([[def-monoid-object-and-comonoid-object-in-a-monoidal-category]]).

A **left $M$-module** is an object $X$ together with an action morphism

$$a:M\otimes X\longrightarrow X$$

such that

$$a\circ(\mu\otimes1_X)=a\circ(1_M\otimes a)\circ\alpha_{M,M,X},$$

$$a\circ(\eta\otimes1_X)=\lambda_X.$$

A **morphism of left $M$-modules** from $(X,a)$ to $(Y,b)$ is a morphism
$f:X\to Y$ in $\mathcal C$ such that

$$f\circ a=b\circ(1_M\otimes f).$$

## Facts & Assumptions

**Given:** A monoid object $(M,\mu,\eta)$ and left $M$-modules $(X,a)$, $(Y,b)$, and $(Z,c)$.

[L1] A category has identities and associative composition ([[def-category]]).

## Verification

**Proof technique:** direct.

1.1 For every module $(X,a)$, the identity $1_X$ is a module morphism because $1_X\circ a=a=a\circ(1_M\otimes1_X)$. Thus identities exist. [given, L1]

1.2 If $f:(X,a)\to(Y,b)$ and $g:(Y,b)\to(Z,c)$ are module morphisms, then $(g\circ f)\circ a=g\circ(f\circ a)=g\circ b\circ(1_M\otimes f)=c\circ(1_M\otimes g)\circ(1_M\otimes f)=c\circ(1_M\otimes(g\circ f))$, so $g\circ f$ is again a module morphism. [given, L1, algebra]

2.1 Because composition in $\mathcal C$ is associative by [L1], the module morphisms with these identities and composites form a category. [step 1.1, step 1.2, L1] ∎
