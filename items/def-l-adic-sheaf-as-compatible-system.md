---
dependency_level: 5
id: def-l-adic-sheaf-as-compatible-system
kind: definition
title: Adic sheaf systems and their isogeny category
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-etale-sheaf-of-finite-modules
  - def-lisse-etale-sheaf-of-finite-modules
  - def-p-adic-integers-as-compatible-residue-classes
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé VI, Sections 1.1–1.5
      url: https://grothendiecksga.com/read/sga5/en/VI-1.html
      locator: Strict adic systems, constructibility, common stratification and rational Hom localization in 1.4.3
---

## Definition

Fix a prime $\ell$, put $A=\mathbb Z_\ell=\varprojlim_{n\geq1}\mathbb Z/\ell^n\mathbb Z$, $A_n=\mathbb Z/\ell^n\mathbb Z$, and $E=\mathbb Q_\ell=A[1/\ell]$. Fix a scheme $X$ and a universe for its small étale site. A **strict constructible adic system** is a sequence $F=(F_n)_{n\geq1}$ of sheaves of finite $A_n$-modules with $A_{n+1}$-linear transition maps $F_{n+1}\to F_n$ inducing isomorphisms $F_{n+1}/\ell^nF_{n+1}\cong F_n$, compatible with all further reductions. It has a common finite partition $X=\coprod_aX_a$ into locally closed subschemes on which every $F_n$ is finite locally constant. On a possibly non-Noetherian scheme the finite-stratification condition, rather than Noetherianity itself, is part of this convention. A morphism of systems is a levelwise linear morphism commuting with all transitions. Scalar multiplication makes each morphism group an $A$-module.

The **constructible rational adic category** has the same objects and morphism groups $\operatorname{Hom}_E(F,G)=\operatorname{Hom}_{\mathrm{sys}}(F,G)\otimes_AE$, with composition extended $E$-bilinearly. Thus a morphism is represented by $\ell^{-s}v$ for a system morphism $v$ and $s\geq0$, modulo the equality relation of module localization. An object in this rational category is called a constructible $\mathbb Q_\ell$-sheaf. At a geometric point $\bar x$ its adic stalk is $F_{\bar x}=E\otimes_A\varprojlim_n(F_n)_{\bar x}$, with the action induced by the finite-level geometric-stalk actions. These are adic stalks; they are not defined as geometric stalks of the ordinary discrete sheaf $\varprojlim_nF_n$.

The common finite stratification is explicit in this object model. Identifying it with a convention that only asks each level separately to be constructible requires the common-stratification theorem. Neither this identification, abelian exactness of the rational category, nor a construction of derived pushforward is an assertion of this definition. A system is **flat** if every geometric stalk of $F_n$ is a free $A_n$-module for every $n$; constructible systems are not required to be flat in this definition.

## Definition references

[[def-etale-sheaf-of-finite-modules]]

[[def-lisse-etale-sheaf-of-finite-modules]]

[[def-p-adic-integers-as-compatible-residue-classes]]

[SGA 5, Exposé VI, Sections 1.1–1.5](https://grothendiecksga.com/read/sga5/en/VI-1.html)
