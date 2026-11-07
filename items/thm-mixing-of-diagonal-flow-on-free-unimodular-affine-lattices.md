---
id: thm-mixing-of-diagonal-flow-on-free-unimodular-affine-lattices
kind: theorem
title: "Mixing of the standard diagonal flow on free unimodular affine lattices"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-free-unimodular-affine-lattice-space-and-diagonal-flow
  - def-homogeneous-space-of-a-lie-group
  - lem-sl-real-unitary-matrix-coefficients-decay
  - lem-affine-lattice-sl-fixed-ltwo-vectors-are-constant
  - def-countable-choice
  - thm-feferman-levy-reals-are-a-countable-union-of-countable-sets
  - cor-relative-consistency-of-feferman-levy-choice-failures-over-zf
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1–4.7: affine Dani criterion, mixing and thickness"
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§2: diagonal-flow conventions"
---

## Statement

Assume the Axiom of Countable Choice.

Kleinbock's affine-flow mixing application states the following.

For $m,n\ge1$ with $m+n\ge2$, the standard diagonal flow $g_t=\operatorname{diag}(e^{t/m}I_m,e^{-t/n}I_n)$ on the free affine unimodular-lattice space of dimension $m+n$ is mixing with respect to its invariant probability measure.

## Statement references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal-flow conventions.


## Declared proof scope

Countable Choice is now explicit in the public Statement. The full existing measure, Hilbert-space and mixing conclusion is retained; no stronger Choice axiom is adopted.

## Why the full measure interface needs a choice hypothesis

The supplied conclusion uses an ordinary countably additive smooth probability on the FULL Borel space, and the Hilbert space of ALL square-integrable measurable classes. Replacing it by a measure only on uniformly coded sets would change the claim. Here is a genuine ZF obstruction. If $\mathbb R=\bigcup_n A_n$ with each $A_n$ countable, first replace $A_n$ by its increasing finite unions. Every finite-dimensional coordinate chart is then a countable union of countable sets: use $A_n^r$ in dimension $r$, intersect with the chart domain and apply its chart map. A countably additive atomless measure makes each of these countable sets null, so it makes the entire chart null. This contradicts positive smooth density on a nonempty chart. No simultaneous enumeration of the $A_n$ was used: each individual set is null by its own countability, and countable additivity applies to the GIVEN sequence of these sets.

The published [[thm-feferman-levy-reals-are-a-countable-union-of-countable-sets]] and [[cor-relative-consistency-of-feferman-levy-choice-failures-over-zf]] supply exactly that ZF countermodel context. Their public Statements are used here; no forcing proof is re-audited. Thus the original full smooth-measure existence interface cannot simply be asserted in ZF without a further hypothesis. Countable Choice is the weakest sufficient hypothesis of the EXISTING measure, Fourier and Hilbert interfaces actually used below; no implication that it is equivalent to this mixing result or axiomatically optimal is asserted. Its use is public, not a new Given conclusion, a coded-measure replacement, or a theorem import.


## Facts & Assumptions

**Given:** Countable Choice, integers $m,n\ge1$ and the standard flow in the Statement, with $d=m+n$.

[F1] The full affine quotient has invariant probability, its $L^2$ action is a strongly continuous unitary representation on a Hilbert space, and its only vectors fixed by the linear subgroup $\operatorname{SL}_d(\mathbb R)$ are constants, under Countable Choice. Its origin-containing subset is closed null and invariant under this linear subgroup. [[lem-affine-lattice-sl-fixed-ltwo-vectors-are-constant]]

[F2] On a given Hilbert space, an SLd representation without nonzero group-fixed vectors has matrix coefficients vanishing at infinity. [[lem-sl-real-unitary-matrix-coefficients-decay]]

[A1] The PUBLIC Countable Choice hypothesis supplies the exact Lie, integration, measure and Hilbert interfaces invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** the independent affine-fibre invariant-vector argument and SLd coefficient decay.

1.1 Restrict the representation in F1 to the closed zero-mean subspace. Measure invariance preserves it, Hilbert completeness and strong continuity restrict to it, and F1 says it has no nonzero SLd-fixed vector. F2 therefore makes its coefficients tend to zero at infinity. The matrices $g_{-t}=\operatorname{diag}(e^{-t/m}I_m,e^{t/n}I_n)$ leave every compact set because $e^{t/n}\to\infty$. [given, F1, F2, algebra, A1]

2.1 Subtract the means of two square-integrable functions. Their centred correlation under $g_t$ is $\langle\pi(g_{-t})F_0,\overline{G_0}\rangle$ and tends to zero by step 1.1. Adding back the means proves mixing. Removing the closed null origin-containing subset does not change any integral or the probability representation, and it is invariant under the flow by F1, so the equivalent conull-space interpretation also follows. [F1, step 1.1, algebra] ∎

## Remarks

The general [[thm-brezin-moore-mixing-transfer-to-affine-lattice-quotients]] and the linear-quotient [[thm-moore-mixing-criterion-for-sl-d-lattices]] give source context. Neither is a logical input to the direct affine proof above. The broad Brezin–Moore theorem remains a separate unresolved local-proof obligation. The corrected public Statement explicitly includes the Countable Choice premise of F1; its full-measure conclusion is not replaced by a coded-measure or origin-free-only claim.
