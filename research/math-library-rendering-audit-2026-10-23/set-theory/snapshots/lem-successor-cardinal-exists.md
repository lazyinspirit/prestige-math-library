---
id: lem-successor-cardinal-exists
kind: lemma
title: "For every set $A$ the Hartogs number $\\aleph(A)$ is a cardinal, and for every cardinal $\\kappa$ it is the least cardinal strictly above $\\kappa$; this is a theorem of ZF"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hartogs, def-cardinal, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-equinumerous, lem-cardinality-of-a-well-orderable-set, lem-cardinal-arithmetic-basic-laws, def-injection-surjection-bijection]
justified_by: []
aliases: [lem-successor-cardinal]
landmark: true
short: "$\\aleph(\\kappa)$ is the least cardinal above $\\kappa$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "claude-sonnet-5 + deepseek-v4-pro"
    verdict: pass
    date: 2026-08-05
    scope: published-audit-targeted
    context_sha256: 3040be9b00229f39a602d4c0d1342e12baadab71af6d56a57c8e155950bcbe85
    item_sha256: da00ef029d47201d1b4f551e98b18fb47118ff44570e73ef79ee8ec90767f37c
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "P. Koellner, Set Theory: The Independence Phenomenon, Definition 3.8"
      url: "https://people.math.harvard.edu/~wboney/fall16/settheory.pdf"
    - title: "Hartogs number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hartogs_number"
    - title: "Successor cardinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Successor_cardinal"
pipeline_run: null
---

## Statement

Work in ZF; no choice principle is used. For a set $A$ let $\aleph(A)$ be its
Hartogs number ([[thm-hartogs]]), the least ordinal ([[def-ordinal]]) admitting
no injection into $A$. Then:

**(a)** $\aleph(A)$ is a cardinal ([[def-cardinal]]), for **every** set $A$,
well-orderable or not.

**(b)** If $\kappa$ is a cardinal then $\kappa < \aleph(\kappa)$, and every
cardinal $\lambda$ with $\kappa < \lambda$ satisfies $\aleph(\kappa) \le \lambda$.
So $\aleph(\kappa)$ is the **least cardinal strictly above $\kappa$**.

**(c)** If $\kappa$ is an infinite cardinal then so is $\aleph(\kappa)$.

**What this supplies, and what it does not.** It gives a successor operation on
cardinals in ZF alone: there is always a next one, and it is definable. It says
nothing about how *large* the next cardinal is compared with $2^{\kappa}$; that
comparison is not decided by the axioms in use here.

## Facts & Assumptions

**Given:** A set $A$ and a cardinal $\kappa$, in ZF, with no choice principle.

[L1] $\aleph(A)$ is an ordinal that does not inject into $A$, and it is the least such; consequently every ordinal $\beta \in \aleph(A)$ does inject into $A$ ([[thm-hartogs]]).

[L2] An ordinal $\kappa$ is a cardinal when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$ ([[def-cardinal]], [[def-equinumerous]]).

[L3] For cardinals, $\kappa \le \lambda$ if and only if there is an injection $\kappa \to \lambda$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L4] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, and every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

[L5] A composition of an injection with a bijection is an injection, a subset inclusion is an injection, and the identity is a bijection ([[def-injection-surjection-bijection]]).

[L6] For a well-orderable $X$, $\lvert X\rvert = X$ when $X$ is a cardinal, and $\lvert \alpha\rvert \le \alpha$ ([[lem-cardinality-of-a-well-orderable-set]]).

## Proof

**Proof technique:** direct.

1.1 Every $\beta \in \aleph(A)$ injects into $A$, and $\aleph(A)$ itself does not. [L1]

1.2 If $\lambda$ is a cardinal with $\kappa < \lambda$ then $\lambda$ does not inject into $\kappa$: an injection $\lambda \to \kappa$ would give $\lambda \le \kappa$ by [L3], contradicting $\kappa \in \lambda$ and trichotomy. [L3, L4]

2.1 Claim (a): if $\beta \in \aleph(A)$ had $\beta \approx \aleph(A)$, then composing a bijection $\aleph(A) \to \beta$ with an injection $\beta \to A$ supplied by step 1.1 would inject $\aleph(A)$ into $A$, which step 1.1 forbids; so no element of $\aleph(A)$ is equinumerous with it and $\aleph(A)$ is a cardinal by [L2]. [step 1.1, L2, L5]

2.2 First half of claim (b): $\kappa$ injects into $\kappa$ by the identity, so $\kappa \ne \aleph(\kappa)$ by step 1.1; and $\aleph(\kappa) \in \kappa$ is impossible, since then $\aleph(\kappa) \subseteq \kappa$ by [L4] and the inclusion would inject it into $\kappa$; trichotomy leaves $\kappa \in \aleph(\kappa)$, that is $\kappa < \aleph(\kappa)$. [step 1.1, L4, L5]

3.1 Second half of claim (b) and claim (c): a cardinal $\lambda$ with $\kappa < \lambda$ does not inject into $\kappa$ by step 1.2, so $\aleph(\kappa) \le \lambda$ by the minimality in [L1]; with step 2.2 and step 2.1 this makes $\aleph(\kappa)$ the least cardinal strictly above $\kappa$; and if $\omega \le \kappa$ then $\omega \le \kappa < \aleph(\kappa)$ by step 2.2, so $\aleph(\kappa)$ is infinite. [step 1.2, step 2.1, step 2.2, L1, L4, L6] ∎

## Remarks

**Why claim (a) is stated for an arbitrary set.** For a cardinal $\kappa$ only the special case is needed here, but the general case costs the same two lines and is exactly what [[thm-tarski-square]] uses: there, $A$ is an arbitrary infinite set that is not known to be well-orderable, and the argument needs $\aleph(A)$ to be an infinite **cardinal** before Hessenberg's theorem can be applied to it.

**No power set is involved.** [[thm-hartogs]] builds $\aleph(A)$ from the well-ordered subsets of $A$, so the successor cardinal is obtained without ever forming $\mathcal{P}(A)$ as a size. That separation is what makes the aleph hierarchy a ZF construction while the beth hierarchy is not.

**The notation collides with the ordinal successor, and this page keeps them apart.** $\alpha^{+} = \alpha \cup \{\alpha\}$ is the **ordinal** successor ([[def-ordinal]]) and is almost never a cardinal: an infinite cardinal is a limit ordinal, so $\kappa \cup \{\kappa\}$ is not one. The cardinal successor is $\aleph(\kappa)$, which is much larger. Where an item on this page writes the superscript on an ordinal letter, as [[lem-cardinality-of-a-well-orderable-set]] does with $\alpha^{+}$, it carries the published ordinal meaning $\alpha \cup \{\alpha\}$. This item writes the cardinal successor as $\aleph(\kappa)$ throughout; the abbreviation $\kappa^{+} := \aleph(\kappa)$, on a cardinal letter only, is introduced later on this page, and the superscript on an ordinal letter keeps the ordinal meaning there too.
