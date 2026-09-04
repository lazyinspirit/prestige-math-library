---
id: fs-derived-functors-in-two-variables-are-automatically-balanced
kind: false-statement
title: "FALSE: derived functors in two variables are automatically balanced"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied, def-balanced-derived-bifunctor]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Whenever a bifunctor can be derived in each variable, the two derived
constructions are automatically balanced.
## Facts & Assumptions

**Given:** The Axiom of Dependent Choice, a field $k$, the ring
$R=k[\varepsilon]/(\varepsilon^2)$, the abelian categories
$\mathcal A=\mathbf{Vect}_k^{\mathrm{fd}}$ and
$\mathcal C=R\text{-}\mathbf{Mod}^{\mathrm{fd}}$, and the bifunctor
$$B(A,C):=A^*\otimes_k\operatorname{Hom}_R(k,C)$$ to
$\mathbf{Vect}_k^{\mathrm{fd}}$.

[L1] With supplied projective and injective data, one may derive an additive bifunctor in either variable and thereby obtain two candidate constructions ([[prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied]]).

[L2] A balanced derived bifunctor relative to the supplied data requires extra
natural isomorphisms, natural in both variables and normalized by the
degree-zero identifications ([[def-balanced-derived-bifunctor]]).

## Refutation

**Proof technique:** direct.

1.1 The functor $A\mapsto A^*$ is exact on finite-dimensional vector spaces, $C\mapsto\operatorname{Hom}_R(k,C)$ is left exact, and tensoring over $k$ is exact. Hence $B$ is additive and left exact in each variable in the sense required by [L1]. Give $k\in\mathcal A$ its length-zero projective resolution. The first-variable right-derived object at $(k,k)$ is then zero in every positive degree. [L1, given, construct, algebra]

1.2 The $R$-module $R$ is injective: the coefficient-of-$\varepsilon$ functional identifies $R$ with $\operatorname{Hom}_k(R,k)$ as an $R$-module, and $\operatorname{Hom}_R(-,\operatorname{Hom}_k(R,k))\cong \operatorname{Hom}_k(-,k)$ is exact. Thus $$0\to k\xrightarrow{1\mapsto\varepsilon}R \xrightarrow{\varepsilon}R\xrightarrow{\varepsilon}R\to\cdots$$ is an injective resolution of $k$: at every copy of $R$, both the image and kernel of multiplication by $\varepsilon$ are the ideal $(\varepsilon)$. [given, construct, algebra]

2.1 Applying $B(k,-)=\operatorname{Hom}_R(k,-)$ to the deleted resolution in step 1.2 gives a cochain complex with one copy of $k$ in every degree and zero differentials, since multiplication by $\varepsilon$ annihilates $\operatorname{Hom}_R(k,R)\cong(\varepsilon)$. Consequently the second-variable right-derived object in degree $1$ is $k$, whereas the first-variable object from step 1.1 is $0$. They cannot be isomorphic, so the balance data required by [L2] do not exist and the displayed automatic-balance claim is false. [L1, L2, step 1.1, step 1.2, algebra] ∎
