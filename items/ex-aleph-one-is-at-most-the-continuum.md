---
id: ex-aleph-one-is-at-most-the-continuum
kind: example
title: "$\\aleph_1 \\le 2^{\\aleph_0}$ under the Axiom of Choice, because $2^{\\aleph_0}$ is a cardinal strictly above $\\aleph_0$ and $\\aleph_1$ is the least such; so $\\omega_1$ injects into $\\mathbb{R}$"
status: draft
origin: session
deps: [ex-the-cardinality-of-the-continuum, def-aleph-and-beth-hierarchies, lem-successor-cardinal-exists, thm-cardinal-power-set-and-cantor, thm-every-infinite-cardinal-is-an-aleph, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, lem-cardinality-of-a-well-orderable-set, def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, def-axiom-of-choice, def-cardinal, def-equinumerous, def-injection-surjection-bijection, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$\\aleph_1 \\le 2^{\\aleph_0}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Continuum hypothesis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuum_hypothesis"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Then

$$\aleph_0 < \aleph_1 \le 2^{\aleph_0},$$

and consequently $\omega_1$ injects into $\mathbb{R}$
([[def-first-uncountable-ordinal]], [[ex-the-cardinality-of-the-continuum]]).
Moreover $2^{\aleph_0} = \aleph_\alpha$ for exactly one ordinal $\alpha$, and
that $\alpha$ satisfies $1 \le \alpha$
([[thm-every-infinite-cardinal-is-an-aleph]]).

The computation is one line and uses nothing about $\mathbb{R}$: $2^{\aleph_0}$
is a cardinal strictly above $\aleph_0$ by Cantor's theorem in cardinal form
([[thm-cardinal-power-set-and-cantor]]), and $\aleph_1$ is *by construction* the
least cardinal strictly above $\aleph_0$ ([[lem-successor-cardinal-exists]]). The
inequality is therefore forced, and the interest lies entirely in the fact that
nothing here decides whether it is an equality.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] $\kappa < 2^{\kappa}$ and $2^{\kappa}$ is a cardinal, for every cardinal $\kappa$ ([[thm-cardinal-power-set-and-cantor]], [[def-cardinal-arithmetic]], [[def-cardinal]]).

[L2] $\aleph_1 = \aleph_0^{+}$ is the least cardinal strictly above $\aleph_0$, and $\aleph_0 < \aleph_1$; also $\aleph_1 = \omega_1$ ([[lem-successor-cardinal-exists]], [[def-aleph-and-beth-hierarchies]], [[def-first-uncountable-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]]).

[L3] Every infinite cardinal is $\aleph_\alpha$ for exactly one ordinal $\alpha$, and the enumeration is strictly increasing ([[thm-every-infinite-cardinal-is-an-aleph]]).

[L4] $\lvert \mathbb{R}\rvert = 2^{\aleph_0}$ and $\mathbb{R} \approx \lvert \mathbb{R}\rvert$ ([[ex-the-cardinality-of-the-continuum]], [[lem-cardinality-of-a-well-orderable-set]]).

[L5] For cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L6] Ordinals satisfy trichotomy ([[lem-ordinal-trichotomy]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] at $\kappa = \aleph_0$, the value $2^{\aleph_0}$ is a cardinal with $\aleph_0 < 2^{\aleph_0}$. [L1]

1.2 By [L2], $\aleph_1$ is the least cardinal strictly above $\aleph_0$, and $\aleph_1 = \omega_1$. [L2]

2.1 Steps 1.1 and 1.2 give $\aleph_1 \le 2^{\aleph_0}$ directly from minimality; hence $\omega_1 = \aleph_1 \preceq 2^{\aleph_0} = \lvert \mathbb{R}\rvert \approx \mathbb{R}$ by [L5] and [L4], so $\omega_1$ injects into $\mathbb{R}$. [step 1.1, step 1.2, L4, L5]

3.1 Finally $2^{\aleph_0}$ is an infinite cardinal by step 1.1, so $2^{\aleph_0} = \aleph_\alpha$ for exactly one $\alpha$ by [L3], and $\alpha = 0$ is excluded because $\aleph_0 < 2^{\aleph_0}$, so $1 \le \alpha$ by [L6]. [step 1.1, step 2.1, L3, L6] ∎

## Remarks

**What the inequality is not.** It is not evidence for the continuum hypothesis, and it is not a partial result towards one. $\aleph_1 \le 2^{\aleph_0}$ holds in every model of ZFC, including those where $2^{\aleph_0}$ is very large; the inequality is a consequence of $\aleph_1$ being defined as a *least* cardinal above $\aleph_0$, so it would hold even if the continuum were enormous.

**Where the real constraint lies.** The one genuine restriction on $2^{\aleph_0}$ proved in this development is on its **cofinality**, not on its position: [[cor-cofinality-of-a-cardinal-power]] gives $\operatorname{cf}(2^{\aleph_0}) > \aleph_0$, which excludes candidate values such as $\aleph_\omega$ ([[fs-the-continuum-has-cardinality-aleph-omega]]) while excluding neither $\aleph_1$ nor $\aleph_2$, both of which are regular under choice. Whether $2^{\aleph_0} = \aleph_1$ is the continuum hypothesis, and [[rem-cardinal-arithmetic-choice-ledger]] records what is and is not settled about it here.

**Without choice the statement is not even expressible in this form.** In ZF alone $\mathcal{P}(\mathbb{N})$ need not be well-orderable, so $2^{\aleph_0}$ need not be a cardinal and "$\aleph_1 \le 2^{\aleph_0}$" has no ordinal to compare. What is a theorem of ZF is the existence of $\omega_1$ itself ([[def-first-uncountable-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]]); the injection $\omega_1 \to \mathbb{R}$ of step 2.1 is obtained here from the Axiom of Choice, and nothing above claims it without that hypothesis.
