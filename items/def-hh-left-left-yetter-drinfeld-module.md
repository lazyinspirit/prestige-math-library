---
id: def-hh-left-left-yetter-drinfeld-module
kind: definition
title: "Left-left Yetter–Drinfeld module"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps:
  - def-hh-bialgebra-and-bialgebra-map
  - def-hh-hopf-algebra-and-antipode
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-convolution-algebra-associativity-and-unit
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. A. García and C. Vay, Simple modules of small quantum groups at dihedral groups, Doc. Math. 29 (2024), §3.1.3"
      url: "https://ems.press/content/serial-article-files/42618"
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych and Victor Ostrik, Tensor Categories, §7.15"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Let $H$ be a Hopf algebra over a field $k$. A **left-left Yetter–Drinfeld $H$-module** is a $k$-vector space $V$ with a bilinear left action $H\otimes V\to V$, $(h,v)\mapsto h\cdot v$, satisfying $1_H\cdot v=v$ and $(hh')\cdot v=h\cdot(h'\cdot v)$, and a left coaction $\delta:V\to H\otimes V$, $\delta(v)=\sum v_{-1}\otimes v_0$, satisfying

$$\sum (\Delta\otimes\operatorname{id})\delta(v)=\sum (\operatorname{id}\otimes\delta)\delta(v),\qquad (\varepsilon\otimes\operatorname{id})\delta(v)=v,$$

and the compatibility equation

$$\delta(h\cdot v)=\sum h_1v_{-1}S(h_3)\otimes h_2\cdot v_0.$$

A morphism is a $k$-linear map preserving both action and coaction. For $f\in H^*$ define $f\cdot v:=\sum f(v_{-1})v_0$. With convolution $(f*g)(x)=\sum f(x_1)g(x_2)$ and opposite product $f\odot g=g*f$, this is a left $H^{*\mathrm{op}}$-action.

## Facts & Assumptions

**Given:** A Hopf algebra $H$ with coproduct $\Delta$ and counit $\varepsilon$, and a vector space $V$ with a left $H$-action and a counital, coassociative left $H$-coaction. Prove that evaluation of the coaction defines a left $H^{*\mathrm{op}}$-action.

[F1] [[def-hh-bialgebra-and-bialgebra-map]]: $H$ is a coassociative counital coalgebra, with coproduct $\Delta$ and counit $\varepsilon$.

[F2] [[lem-hh-convolution-algebra-associativity-and-unit]]: convolution on linear maps from a coalgebra to an algebra is associative and unital.

[A1] The displayed action is associative and unital, and the displayed coaction is coassociative and counital; these are the structure hypotheses in the definition.

## Proof


1.1 For each $v$, the algebraic tensor $\delta(v)$ is a finite sum, so evaluation defines $f\cdot v=\sum f(v_{-1})v_0$. For $f,g\in H^*$, coassociativity gives $f\cdot(g\cdot v)=\sum g(v_{-1,1})f(v_{-1,2})v_0=\sum(g*f)(v_{-1})v_0=(f\odot g)\cdot v$. Thus evaluation reverses convolution exactly as required for the opposite product. [given, A1, F1, F2, algebra]

2.1 The dual algebra unit is $\varepsilon_H$, and counitality gives $\varepsilon_H\cdot v=\sum\varepsilon_H(v_{-1})v_0=v$. The action is therefore unital and associative for $H^{*\mathrm{op}}$. [given, A1, F1, step 1.1, algebra] ∎
