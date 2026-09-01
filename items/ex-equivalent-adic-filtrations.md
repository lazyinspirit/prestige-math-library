---
id: ex-equivalent-adic-filtrations
kind: example
title: "Equivalent adic filtrations have canonically isomorphic completions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adic-topology-on-a-module, def-adic-completion-of-a-module, thm-universal-property-of-an-inverse-limit-of-modules]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, Lemma 24.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 10.96.9"
      url: "https://stacks.math.columbia.edu/tag/00M9"
pipeline_run: null
---

## Example

Let $R$ be a commutative ring, let $M$ be an $R$-module, and let $I,J \subseteq R$
be ideals. Assume that there exist integers $c,d>0$ with
$$I^c \subseteq J \qquad\text{and}\qquad J^d \subseteq I.$$
Then the $I$-adic and $J$-adic topologies on $M$ have the same completion:
$$\widehat M^{\,I} \cong \widehat M^{\,J}.$$

## Facts & Assumptions

**Given:** A commutative ring $R$, an $R$-module $M$, ideals $I,J \subseteq R$,
and integers $c,d>0$ with $I^c \subseteq J$ and $J^d \subseteq I$.

[L1] The $I$-adic and $J$-adic completions are the inverse limits of the
quotient towers $(M/I^nM)$ and $(M/J^mM)$
([[def-adic-completion-of-a-module]]).

[L2] A compatible family of quotient maps induces a unique map into the corresponding inverse limit ([[thm-universal-property-of-an-inverse-limit-of-modules]]).

## Verification

**Proof technique:** direct.

1.1 For each $k\ge1$, the inclusion $I^c\subseteq J$ gives $I^{ck}M\subseteq J^kM$ and hence a quotient map $$M/I^{ck}M\to M/J^kM.$$ The powers $ck$ form a cofinal subsystem of the $I$-adic tower. The displayed maps are compatible, so [L2] induces an $R$-linear map $$\Phi:\widehat M^{\,I}\to\widehat M^{\,J}.$$ [L1, L2, given, construct]

1.2 Similarly, $J^d\subseteq I$ gives compatible quotient maps $$M/J^{dk}M\to M/I^kM$$ on a cofinal subsystem and hence a map $$\Psi:\widehat M^{\,J}\to\widehat M^{\,I}.$$ [L1, L2, given, construct]

2.1 On either side, composing the two systems of quotient maps eventually reduces modulo a larger and larger power of the same ideal. Hence the composites $\Psi\Phi$ and $\Phi\Psi$ induce the identity on every finite stage, so they are the identity on the inverse limits. Therefore $\Phi$ and $\Psi$ are inverse isomorphisms. [step 1.1, step 1.2, algebra]

3.1 Thus equivalent adic filtrations have canonically isomorphic completions. [step 2.1] ∎
