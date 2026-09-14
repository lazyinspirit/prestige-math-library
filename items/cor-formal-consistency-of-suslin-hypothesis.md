---
id: cor-formal-consistency-of-suslin-hypothesis
kind: corollary
title: "External relative consistency of the Suslin Hypothesis"
status: draft
origin: pipeline
deps: [cor-formal-consistency-of-ma-and-not-ch, cor-ma-and-not-ch-implies-suslin-hypothesis, thm-formal-relative-consistency-from-verified-proof-reduction, def-arithmetic-provability-and-consistency]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorem 7.10 and Proposition 7.4, printed pp. 35-38"
      url: https://karagila.org/files/Forcing-2023.pdf
justified_by: []
forward_refs: []
---

## Statement

For the fixed proof predicates and contradiction sentence of
[[def-arithmetic-provability-and-consistency]], the following external
relative-consistency implication holds:

$$\operatorname{Con}(\mathrm{ZFC})\quad\Longrightarrow\quad\operatorname{Con}(\mathrm{ZFC}+\mathrm{SH}).$$

Here consistency means that no standard natural number is a certified finite
refutation. This corollary does not assert that PA, or any other named
arithmetic base, proves the displayed implication, and it does not extract a
transitive model of full ZFC from consistency.

## Facts & Assumptions

**Given:** the fixed arithmetizations of ZFC, ZFC+MA+$\neg$CH, and ZFC+SH,
with their certified finite proof checkers and the fixed contradiction
sentence.

[F1] Externally, consistency of ZFC implies consistency of
ZFC+MA+$\neg$CH by a fixed-finite-fragment model argument; its supplier
explicitly does not claim a PA-verified uniform proof-code reduction.
[[cor-formal-consistency-of-ma-and-not-ch]]

[F2] ZFC+MA+$\neg$CH has a fixed finite derivation of SH.
[[cor-ma-and-not-ch-implies-suslin-hypothesis]]

[F3] A formal implication inside an arithmetic base requires that base to
verify a total map carrying every certified target refutation to a certified
source refutation; external finite-fragment assemblies alone do not provide
that conclusion.
[[thm-formal-relative-consistency-from-verified-proof-reduction]]

[F4] $\operatorname{Con}(T)$ abbreviates absence of a certified proof of the
fixed contradiction for the chosen effective theory $T$.
[[def-arithmetic-provability-and-consistency]]

## Proof

**Proof technique:** direct transformation of a hypothetical finite refutation.

1.1 Let $p$ be a standard certified ZFC+SH refutation. It has finitely many lines and therefore finitely many occurrences at which the added SH axiom is used; zero occurrences are allowed. All its remaining nonlogical axiom lines are ZFC axioms. [F4, assume-hyp]

2.1 Fix once and for all the finite ZFC+MA+$\neg$CH derivation $d_{\mathrm{SH}}$ supplied by [F2]. Scan $p$ in proof order. Copy logical and ZFC-axiom lines and their inference certificates, and replace each SH-axiom line by a fresh variable-renamed copy of $d_{\mathrm{SH}}$, redirecting later line references to its concluding SH line. Finite recursion on the line number produces a finite certified ZFC+MA+$\neg$CH derivation with the same final contradiction. If $p$ contains no SH-axiom line, this is just the original ZFC refutation regarded in the stronger theory; a single occurrence receives one copy. [step 1.1, F2, F4, construct]

3.1 Thus an actual inconsistency of ZFC+SH would give an actual inconsistency of ZFC+MA+$\neg$CH. By [F1] the latter would give an inconsistency of ZFC. Contraposition proves the displayed external implication. [F1, step 2.1]

4.1 The first transformation is an explicit standard finite-proof splice, but [F1] promises only an external fixed-fragment assembly. Since no arithmetic base and no base-verified total code map for that second leg have been supplied, [F3] forbids upgrading step 3.1 to an internal PA proof of the consistency implication. Likewise, consistency alone is not a transitive-model existence theorem, so no such model is inferred. [F1, F3, step 3.1] ∎

## Remarks

- The stronger MA theory is used only as an intermediate proof system. The
  conclusion retains SH but does not retain MA or $\neg$CH.
- The argument concerns standard certified finite proofs. It does not replace
  the fixed proof predicate by an informal notion of derivability.
