---
id: thm-extension-of-scalars-is-left-adjoint-to-restriction
kind: theorem
title: "Extension of scalars is left adjoint to restriction of scalars"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-restriction-and-extension-of-scalars, thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced]
aliases: []
landmark: true
short: "Extension-restriction adjunction"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.721 Algebraic Geometry notes, Lemma 2.1.35"
      url: "https://math.mit.edu/classes/18.721/ag-jun17-2021.pdf"
pipeline_run: null
---

## Statement

Let $f:R\to S$ be a homomorphism of commutative rings, let $M$ be an $R$-module, and let $N$ be an $S$-module. There is a natural bijection

$$\operatorname{Hom}_S(S\otimes_RM,N)\cong\operatorname{Hom}_R(M,\operatorname{Res}^S_RN).$$

It sends $F$ to $m\mapsto F(1_S\otimes m)$. Its inverse sends $u:M\to\operatorname{Res}^S_RN$ to the $S$-linear map determined by

$$s\otimes m\longmapsto s\,u(m).$$

## Facts & Assumptions

**Given:** A ring map $f:R\to S$, an $R$-module $M$, and an $S$-module $N$.

[L1] Restriction uses $r n=f(r)n$, while extension is the $S$-module $S\otimes_RM$ with $s'(s\otimes m)=s's\otimes m$ ([[def-restriction-and-extension-of-scalars]]).

[L2] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L3] An elementary-tensor prescription descends exactly when its underlying pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Proof

**Proof technique:** direct.

1.1 If $F:S\otimes_RM\to N$ is $S$-linear, define $\Theta(F)(m)=F(1\otimes m)$. Then $\Theta(F)(rm)=F(1\otimes rm)=F(f(r)\otimes m)=f(r)F(1\otimes m)$, so $\Theta(F)$ is $R$-linear into the restriction of $N$. [given, L1, algebra]

1.2 If $u:M\to\operatorname{Res}^S_RN$ is $R$-linear, the pairing $(s,m)\mapsto s\,u(m)$ is $R$-balanced because $(s f(r))u(m)=s u(rm)$. By [L2] and [L3] it induces a homomorphism $\Lambda(u):S\otimes_RM\to N$. [given, L1, L2, L3]

2.1 The map $\Lambda(u)$ is $S$-linear because $\Lambda(u)(s'(s\otimes m))=\Lambda(u)(s's\otimes m)=s'su(m)=s'\Lambda(u)(s\otimes m)$. [step 1.2, L1, algebra]

2.2 For $u$, one has $\Theta(\Lambda(u))(m)=\Lambda(u)(1\otimes m)=u(m)$. [step 1.1, step 1.2]

2.3 Precomposition in $M$ and postcomposition in $N$ commute with both displayed formulas, so the inverse bijections are natural in both modules. [step 1.1, step 1.2, algebra]

3.1 For $F$, one has $\Lambda(\Theta(F))(s\otimes m)=sF(1\otimes m)=F(s\otimes m)$ by $S$-linearity, so uniqueness on elementary tensors gives $\Lambda\Theta(F)=F$. [step 1.1, step 1.2, step 2.1, L2]

4.1 Steps 2.2, 2.3 and 3.1 prove that extension of scalars is left adjoint to restriction of scalars. [step 2.2, step 3.1, step 2.3] ∎
