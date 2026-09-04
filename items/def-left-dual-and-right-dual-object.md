---
id: def-left-dual-and-right-dual-object
kind: definition
title: "Left dual and right dual object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definitions 2.10.1-2.10.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Definition

Let $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ be a monoidal
category and let $X$ be an object of $\mathcal C$.

A **left dual** of $X$ is an object $X^\vee$ together with morphisms

$$\operatorname{ev}_X:X^\vee\otimes X\to\mathbf 1,\qquad \operatorname{coev}_X:\mathbf 1\to X\otimes X^\vee$$

such that the composites

$$X\xrightarrow{\lambda_X^{-1}}\mathbf 1\otimes X\xrightarrow{\operatorname{coev}_X\otimes1_X}(X\otimes X^\vee)\otimes X\xrightarrow{\alpha_{X,X^\vee,X}}X\otimes(X^\vee\otimes X)\xrightarrow{1_X\otimes\operatorname{ev}_X}X\otimes\mathbf 1\xrightarrow{\rho_X}X$$

and

$$X^\vee\xrightarrow{\rho_{X^\vee}^{-1}}X^\vee\otimes\mathbf 1\xrightarrow{1_{X^\vee}\otimes\operatorname{coev}_X}X^\vee\otimes(X\otimes X^\vee)\xrightarrow{\alpha^{-1}_{X^\vee,X,X^\vee}}(X^\vee\otimes X)\otimes X^\vee\xrightarrow{\operatorname{ev}_X\otimes1_{X^\vee}}\mathbf 1\otimes X^\vee\xrightarrow{\lambda_{X^\vee}}X^\vee$$

are identity morphisms.

A **right dual** of $X$ is an object ${}^\vee X$ together with morphisms

$$\operatorname{ev}'_X:X\otimes{}^\vee X\to\mathbf 1,\qquad \operatorname{coev}'_X:\mathbf 1\to{}^\vee X\otimes X$$

such that the mirror composites

$$X\xrightarrow{\rho_X^{-1}}X\otimes\mathbf 1\xrightarrow{1_X\otimes\operatorname{coev}'_X}X\otimes({}^\vee X\otimes X)\xrightarrow{\alpha^{-1}_{X,{}^\vee X,X}}(X\otimes{}^\vee X)\otimes X\xrightarrow{\operatorname{ev}'_X\otimes1_X}\mathbf 1\otimes X\xrightarrow{\lambda_X}X$$

and

$${}^\vee X\xrightarrow{\lambda_{{}^\vee X}^{-1}}\mathbf 1\otimes{}^\vee X\xrightarrow{\operatorname{coev}'_X\otimes1_{{}^\vee X}}({}^\vee X\otimes X)\otimes{}^\vee X\xrightarrow{\alpha_{{}^\vee X,X,{}^\vee X}}{}^\vee X\otimes(X\otimes{}^\vee X)\xrightarrow{1_{{}^\vee X}\otimes\operatorname{ev}'_X}{}^\vee X\otimes\mathbf 1\xrightarrow{\rho_{{}^\vee X}}{}^\vee X$$

are identity morphisms.

This page uses EGNO's convention: the word "left" refers to the side on which
the dual object sits in the evaluation map.
