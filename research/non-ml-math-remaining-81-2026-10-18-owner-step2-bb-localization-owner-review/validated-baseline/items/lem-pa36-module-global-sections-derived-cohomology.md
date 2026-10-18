---
id: lem-pa36-module-global-sections-derived-cohomology
kind: lemma
title: Global sections on module sheaves have ordinary sheaf cohomology as derived functors
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-f-acyclic-resolution
  - def-axiom-of-choice
  - def-extension-by-zero-abelian-sheaf
  - def-injective-module
  - def-module-on-ringed-space
  - def-sheaf-cohomology-derived-global-sections
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-exactness-of-sheaves-stalkwise
  - thm-extension-by-zero-adjunction-exactness
  - thm-flasque-sheaves-acyclic
  - thm-module-categories-have-enough-injectives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves, Lemma 20.8.1"
      url: "https://stacks.math.columbia.edu/tag/01EA"
      locator: "Injective sheaves of modules are flasque and acyclic"
    - title: "The Stacks Project, Sheaves of Modules, Section 19.5"
      url: "https://stacks.math.columbia.edu/tag/01DI"
      locator: "Enough injectives for sheaves of modules on a ringed space"
---

## Statement

Assume the Axiom of Choice. Let $(X,\mathscr A)$ be a topological space with
a sheaf of unital rings (not necessarily commutative), and let
$\operatorname{Mod}(\mathscr A)$ be the category of sheaves of left
$\mathscr A$-modules. Then this category has enough injectives, every
injective $\mathscr A$-module sheaf is flasque as an underlying sheaf of
abelian groups, and for every $\mathscr A$-module sheaf $M$ the right-derived
functors of global sections in $\operatorname{Mod}(\mathscr A)$ satisfy
$$R^q\Gamma_{\operatorname{Mod}(\mathscr A)}(X,M) \cong H^q(X,M)\qquad(q\ge0),$$
where the right side is ordinary sheaf cohomology of the underlying abelian
sheaf.

## Facts & Assumptions

**Given:** Axiom of Choice, a topological space $X$, a sheaf of unital rings
$\mathscr A$, and a sheaf $M$ of left $\mathscr A$-modules.

[F1] For every unital ring $R$, every left $R$-module embeds in an injective
left $R$-module ([[thm-module-categories-have-enough-injectives]]).

[F2] Stalks are exact, and the stalk $(\mathscr A_x,M_x)$ is a ring-module
pair ([[def-module-on-ringed-space]],
[[thm-exactness-of-sheaves-stalkwise]]).

[F3] Extension by zero for module sheaves along an open inclusion is exact
and left adjoint to restriction
([[def-extension-by-zero-abelian-sheaf]],
[[thm-extension-by-zero-adjunction-exactness]]).

[F4] Flasque sheaves of abelian groups are acyclic for global sections
([[thm-flasque-sheaves-acyclic]]).

[F5] The acyclic-resolution theorem computes a right-derived functor from
any acyclic resolution ([[def-f-acyclic-resolution]],
[[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

## Proof

1.1 For each point $x\in X$, choose an embedding $M_x\hookrightarrow I_x$ into an injective $\mathscr A_x$-module by [F1]. The skyscraper sheaf $i_{x*}I_x$ has sections $I_x$ on opens containing $x$ and zero on opens not containing $x$, with $\mathscr A(U)$ acting through $\mathscr A_x$. The natural bijection $$\operatorname{Hom}_{\mathscr A}(N,i_{x*}I_x) \cong\operatorname{Hom}_{\mathscr A_x}(N_x,I_x)$$ shows $i_{x*}I_x$ is injective, since taking stalks is exact by [F2]. The product of these injectives is injective: Hom into the product is the product of Hom functors, and products of exact sequences of abelian groups are exact under the stated Axiom of Choice. The diagonal map $M\to\prod_{x\in X}i_{x*}I_x$ is injective on each stalk by construction. Thus $\operatorname{Mod}(\mathscr A)$ has enough injectives. [F1, F2, given, choose]

2.1 Let $I$ be an injective $\mathscr A$-module sheaf and let $U\subseteq V$ be open. A section $s\in I(U)$ corresponds by evaluation at $1$ to a morphism $j_!\mathscr A_U\to I|_V$. The natural map $j_!\mathscr A_U\to\mathscr A_V$ is a monomorphism: on stalks it is the identity for points of $U$ and the map $0\to\mathscr A_x$ outside $U$. Restriction preserves injectivity here because its exact left adjoint is extension by zero [F3]. Injectivity of $I|_V$ extends the morphism across $j_!\mathscr A_U\hookrightarrow\mathscr A_V$. The extension is determined by the image $t$ of $1\in\mathscr A(V)$, and $t|_U=s$. Every restriction $I(V)\to I(U)$ is therefore surjective, so $I$ is flasque. [F2, F3, step 1.1, construct]

3.1 Take an injective resolution $0\to M\to I^0\to I^1\to\cdots$ in $\operatorname{Mod}(\mathscr A)$, which exists by step 1.1. Each underlying abelian sheaf $I^p$ is flasque by step 2.1 and hence $\Gamma$-acyclic by [F4]. It is therefore an acyclic resolution for ordinary sheaf global sections. The acyclic-resolution theorem [F5] identifies the cohomology of $\Gamma(X,I^\bullet)$ both with the right-derived global sections in $\operatorname{Mod}(\mathscr A)$ and with ordinary sheaf cohomology $H^q(X,M)$. The identifications are natural in $M$ and preserve degree zero. [F4, F5, step 1.1, step 2.1] ∎

