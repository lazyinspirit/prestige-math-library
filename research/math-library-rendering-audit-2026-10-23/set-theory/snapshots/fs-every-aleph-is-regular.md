---
id: fs-every-aleph-is-regular
kind: false-statement
title: "FALSE: $\\aleph_\\alpha$ is regular for every ordinal $\\alpha$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-regularity-of-the-alephs, def-cofinality, def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, def-cardinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$\\aleph_\\omega$ is singular"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "UCL, Axiomatic Set Theory, Ch. 4: Cardinal Arithmetic"
      url: "https://www.homepages.ucl.ac.uk/~ucahcjm/ast/ast_notes_4.pdf"
    - title: "Regular cardinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_cardinal"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
pipeline_run: null
---

## Statement

**FALSE.** Every aleph is regular: $\operatorname{cf}(\aleph_\alpha) = \aleph_\alpha$
for every ordinal $\alpha$ ([[def-cofinality]],
[[def-aleph-and-beth-hierarchies]]).

The claim is plausible because the alephs a reader meets first are regular:
$\aleph_0$ is regular in ZF, and assuming the Axiom of Choice every **successor**
aleph is regular ([[thm-regularity-of-the-alephs]]). It fails at the first aleph
whose index is a limit ordinal, and the failure is a theorem of ZF requiring no
choice principle at all.

## Facts & Assumptions

**Given:** The alephs of [[def-aleph-and-beth-hierarchies]] and the cofinality of [[def-cofinality]].

[L1] $\operatorname{cf}(\aleph_\omega) = \aleph_0$, and $\aleph_0 < \aleph_\omega$, so $\aleph_\omega$ is singular; this is a theorem of ZF (clause (c) of [[thm-regularity-of-the-alephs]]).

[L2] An infinite cardinal $\kappa$ is regular when $\operatorname{cf}(\kappa) = \kappa$, and singular when $\operatorname{cf}(\kappa) \ne \kappa$ ([[def-cofinality]], [[def-cardinal]]).

[L3] The operation $\alpha \mapsto \aleph_\alpha$ is defined at every ordinal and is strictly increasing ([[cor-the-aleph-and-beth-hierarchies-are-well-defined]]).

[L4] Ordinals satisfy trichotomy and $\alpha \notin \alpha$, so $\alpha < \beta$ and $\alpha = \beta$ cannot both hold ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\operatorname{cf}(\aleph_\alpha) = \aleph_\alpha$ for every ordinal $\alpha$. [assume-contra]

1.2 By [L1] and [L3], $\operatorname{cf}(\aleph_\omega) = \aleph_0$ and $\aleph_0 < \aleph_\omega$. [L1, L3]

2.1 Instantiating the assumption at $\alpha = \omega$ gives $\operatorname{cf}(\aleph_\omega) = \aleph_\omega$, hence $\aleph_0 = \aleph_\omega$ by step 1.2, which [L4] forbids; so not every aleph is regular, and $\aleph_\omega$ is singular by [L2]. [step 1.1, step 1.2, L2, L4, discharge-contradiction] ∎

## Remarks

**Which alephs the theorem does certify.** $\aleph_0$, in ZF; and every $\aleph_{\alpha+1}$, assuming the Axiom of Choice ([[thm-regularity-of-the-alephs]]). So the false claim is not wrong everywhere — it is wrong exactly where the index is a limit ordinal reached from below by a short family, and $\omega$ is the smallest such index.

**Singularity here is about the index, not about the size.** The cofinal family that witnesses $\operatorname{cf}(\aleph_\omega) = \aleph_0$ is $n \mapsto \aleph_n$, indexed by $\omega$ because the *subscript* $\omega$ is a limit of an $\omega$-sequence. Nothing about how large $\aleph_\omega$ is enters the argument, and nothing is chosen, which is why clause (c) of [[thm-regularity-of-the-alephs]] is choice free while clause (b) is not.

**The claim is not repaired by assuming choice.** Adding the Axiom of Choice certifies more alephs as regular, but it does not touch the witness above: the refutation is a theorem of ZF and remains one in ZFC.
