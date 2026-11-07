---
dependency_level: 2
id: def-fiberwise-semiabelian-group-scheme
kind: definition
title: Fiberwise semiabelian group scheme
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-scheme
- def-group-scheme-over-a-scheme
- def-smooth-morphism-schemes
- def-separated-morphism-schemes
- def-locally-finite-type-and-finite-type-morphism
- def-abelian-variety-over-a-field
- def-algebraic-torus-over-a-field
- def-abelian-scheme
- def-semiabelian-variety-over-a-scheme
- def-faithfully-flat-morphism-schemes
- def-closed-immersion-schemes
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: G. Faltings, Endlichkeitssätze für abelsche Varietäten über Zahlkörpern
      (1983)
    url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf
    locator: §2 Definition, printed p. 350; §4 Lemma 5, printed pp. 358–359. The conditional
      cotangent/index/metric formulation separates supplied model and analytic data
      from their existence.
---

## Definition

Let $S$ be a scheme. A **fiberwise semiabelian group scheme** over $S$ means a smooth, separated, finitely presented commutative $S$-group scheme $X$ with connected geometric fibres such that, for each geometric point $\bar s\to S$, there is an exact sequence
$$
0\longrightarrow T_{\bar s}\longrightarrow X_{\bar s}\longrightarrow B_{\bar s}\longrightarrow0,
$$
where $T_{\bar s}$ is a torus over the algebraically closed residue field and $B_{\bar s}$ is an abelian variety over that field. Exactness means the first map is a closed immersion identifying the scheme-theoretic kernel of the second map and the second map is faithfully flat. Finite presentation means affine-locally a finite list of generators and relations. Saying that $X$ has relative dimension $g$ means every geometric fibre has dimension $g$. The dimensions of $T_{\bar s}$ and $B_{\bar s}$ need not individually be locally constant.

An extension of an abelian scheme by an $S$-torus as in [[def-semiabelian-variety-over-a-scheme]], when smooth, separated and finitely presented, is a special case: base change gives the displayed extensions of geometric fibres. The global-extension definition remains unchanged. The present definition does not assert the existence of a model for a given abelian variety, an extension of a generic homomorphism, or any reduction or base-change theorem.

## Definition references

[Faltings, §2 Definition, printed p. 350](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf). This is the fibrewise model notion used there, with explicit scheme and exactness conventions.

## Facts & Assumptions

**Given:** A scheme $S$ and the stated group scheme and fibre extensions.

[F1] Schemes and group schemes, including Cartesian scheme-theoretic kernels, have their usual meanings ([[def-scheme]], [[def-group-scheme-over-a-scheme]]).

[F2] Smoothness, separatedness and finite type are properties of scheme morphisms; finite presentation is specified explicitly above ([[def-smooth-morphism-schemes]], [[def-separated-morphism-schemes]], [[def-locally-finite-type-and-finite-type-morphism]]).

[F3] The fibre groups are tori and abelian varieties; abelian schemes have abelian-variety geometric fibres ([[def-algebraic-torus-over-a-field]], [[def-abelian-variety-over-a-field]], [[def-abelian-scheme]]).

[F4] The old global-extension convention, closed immersions and faithful flatness specify the comparison and exactness conventions ([[def-semiabelian-variety-over-a-scheme]], [[def-closed-immersion-schemes]], [[def-faithfully-flat-morphism-schemes]]).
