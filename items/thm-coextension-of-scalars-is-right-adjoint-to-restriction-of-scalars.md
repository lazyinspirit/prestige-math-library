---
id: thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars
kind: theorem
title: 'Coextension of scalars is right adjoint to restriction of scalars'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-coextension-of-scalars-carries-a-module-structure, prop-modules-and-homomorphisms-form-category-rmod, thm-the-adjunction-hom-set-bijection-under-local-smallness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

For a unital ring homomorphism $\varphi:R\to S$, restriction of scalars

$$\operatorname{Res}:S\text{-}\mathbf{Mod}\to R\text{-}\mathbf{Mod}$$

is left adjoint to coextension of scalars

$$\operatorname{Coind}(M):=\operatorname{Hom}_R(S,M).$$

Naturally in an $S$-module $N$ and an $R$-module $M$,

$$\operatorname{Hom}_S(N,\operatorname{Hom}_R(S,M))\cong\operatorname{Hom}_R(\operatorname{Res}N,M).$$

## Facts & Assumptions

**Given:** The ring homomorphism $\varphi:R\to S$, a left $S$-module $N$, and a left $R$-module $M$.

[L1] On $\operatorname{Hom}_R(S,M)$ the canonical left $S$-action is $(s\cdot h)(t)=h(ts)$ ([[lem-coextension-of-scalars-carries-a-module-structure]]).

[F1] Left modules and module homomorphisms form locally small categories ([[prop-modules-and-homomorphisms-form-category-rmod]]).

[L2] A natural family of hom-set bijections determines an adjunction ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 Given an $S$-linear map $\alpha:N\to\operatorname{Hom}_R(S,M)$, define $E(\alpha):\operatorname{Res}N\to M$ by $E(\alpha)(n)=\alpha(n)(1_S)$. It is $R$-linear because $\alpha(\varphi(r)n)=\varphi(r)\cdot\alpha(n)$ and [L1] gives $(\varphi(r)\cdot\alpha(n))(1)=\alpha(n)(\varphi(r))=r\alpha(n)(1)$. [L1, algebra]

1.2 Given an $R$-linear map $u:\operatorname{Res}N\to M$, define $C(u)(n)(s):=u(sn)$. For $r\in R$, $C(u)(n)(\varphi(r)s)=u(\varphi(r)sn)=r u(sn)$, so $C(u)(n)$ is $R$-linear. [construct, algebra]

2.1 For $a,s\in S$, $C(u)(an)(s)=u(san)=C(u)(n)(sa)=(a\cdot C(u)(n))(s)$ by [L1], so $C(u)$ is $S$-linear. [step 1.2, L1]

2.2 Evaluation gives $E(C(u))(n)=C(u)(n)(1)=u(n)$. Conversely, $S$-linearity of $\alpha$ gives $C(E(\alpha))(n)(s)=E(\alpha)(sn)=\alpha(sn)(1)=(s\cdot\alpha(n))(1)=\alpha(n)(s)$. [step 1.1, step 1.2, L1]

3.1 Thus $E$ and $C$ are inverse bijections. Precomposition in $N$ and postcomposition in $M$ commute with the two displayed formulas, so the bijections are natural. [step 2.1, step 2.2, F1]

4.1 By [L2], these natural bijections define $\operatorname{Res}\dashv\operatorname{Coind}$. No tensor-product or extension-of-scalars construction is used. [step 3.1, L2] ∎
