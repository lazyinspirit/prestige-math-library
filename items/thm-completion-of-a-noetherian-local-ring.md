---
id: thm-completion-of-a-noetherian-local-ring
kind: theorem
title: "Completion of a Noetherian local ring is local with the same residue field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherianity-of-adic-completion, thm-faithful-flatness-of-jacobson-adic-completion, cor-completion-commutes-with-finite-quotients-and-submodules, prop-units-in-an-adically-complete-ring, def-local-ring]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 22.13 and Exercise 22.14"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.97"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its
$\mathfrak m$-adic completion.

1. $\widehat R$ is a Noetherian local ring with maximal ideal
   $\mathfrak m\widehat R$.
2. The residue field is unchanged:
   $$    \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m.    $$
3. The completion map $R \to \widehat R$ is faithfully flat.

## Facts & Assumptions

**Given:** A Noetherian local ring $(R,\mathfrak m)$.

[L1] The completion $\widehat R$ of a Noetherian ring is Noetherian ([[thm-noetherianity-of-adic-completion]]).

[L2] If the defining ideal lies in the Jacobson radical, then completion is faithfully flat ([[thm-faithful-flatness-of-jacobson-adic-completion]]).

[L3] Completion commutes with quotient by the defining ideal ([[cor-completion-commutes-with-finite-quotients-and-submodules]]).

[L4] In an adically complete ring, every element congruent to $1$ modulo the defining ideal is a unit ([[prop-units-in-an-adically-complete-ring]]).

[L5] A local ring is a ring with a unique maximal ideal ([[def-local-ring]]).

## Proof

**Proof technique:** direct.

1.1 Since $R$ is local, its unique maximal ideal $\mathfrak m$ equals $J(R)$. Hence [L2] applies and shows that $R \to \widehat R$ is faithfully flat. [L2, L5]

1.2 By [L1], the ring $\widehat R$ is Noetherian. By [L3], $$\widehat R/\mathfrak m\widehat R \cong R/\mathfrak m,$$ and the right-hand side is a field because $R$ is local. Thus $\mathfrak m\widehat R$ is a maximal ideal of $\widehat R$. [L1, L3, L5]

1.3 For each $n \ge 1$, part 3 of [L3] gives $$\widehat R/\mathfrak m^n\widehat R \cong R/\mathfrak m^n.$$ Therefore the canonical map $$\widehat R \longrightarrow \varprojlim_n \widehat R/\mathfrak m^n\widehat R$$ identifies with the identity of $$\varprojlim_n R/\mathfrak m^n = \widehat R.$$ So $\widehat R$ is complete for the $\mathfrak m\widehat R$-adic topology. [L3, algebra]

2.1 Let $x \in \widehat R$ with $x \notin \mathfrak m\widehat R$. Its residue class in $\widehat R/\mathfrak m\widehat R$ is then nonzero, hence a unit. Choose $y \in \widehat R$ with $$xy \equiv 1 \pmod{\mathfrak m\widehat R}.$$ By [L4] and step 1.3, the element $xy$ is a unit, hence $x$ is a unit. Therefore every nonunit lies in $\mathfrak m\widehat R$, so $\mathfrak m\widehat R$ is the unique maximal ideal of $\widehat R$. [L4, step 1.2, step 1.3, choose]

3.1 Step 1.2 proves the residue-field isomorphism, and steps 1.1, 1.3, and 2.1 prove that $\widehat R$ is Noetherian local with maximal ideal $\mathfrak m\widehat R$ and that $R \to \widehat R$ is faithfully flat. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
