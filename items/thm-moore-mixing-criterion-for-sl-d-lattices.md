---
id: thm-moore-mixing-criterion-for-sl-d-lattices
kind: theorem
title: "Moore mixing criterion for the diagonal action on unimodular lattices"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-homogeneous-space-of-a-lie-group
  - lem-sl-real-unitary-matrix-coefficients-decay
  - lem-sl-integer-lattice-has-finite-covolume
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-countable-choice
  - thm-feferman-levy-reals-are-a-countable-union-of-countable-sets
  - cor-relative-consistency-of-feferman-levy-choice-failures-over-zf
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§2.2 and 4.2: Moore and Brezin–Moore mixing inputs"
---

## Statement

Assume the Axiom of Countable Choice.

Moore's mixing criterion gives the following conclusion for the standard lattice quotient.

Let $d\ge2$ and let $a_t$ be a one-parameter subgroup whose image is not relatively compact of $\mathrm{SL}_d(\mathbb R)$. The action $x\mapsto a_t x$ on the finite-volume homogeneous space $\mathrm{SL}_d(\mathbb R)/\mathrm{SL}_d(\mathbb Z)$ is mixing with respect to normalized invariant measure. Explicitly, for square-integrable $F,G$, the correlation $\int F(a_t x)G(x)\,d\mu(x)$ tends to $(\int F\,d\mu)(\int G\,d\mu)$ as $t\to+\infty$.

## Statement references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§2.2 and 4.2: Moore and Brezin–Moore mixing inputs.



## Declared proof scope

Countable Choice is now explicit in the public Statement. The full existing measure, Hilbert-space and mixing conclusion is retained; no stronger Choice axiom is adopted.

## Why the full measure interface needs a choice hypothesis

The supplied conclusion uses an ordinary countably additive smooth probability on the FULL Borel space, and the Hilbert space of ALL square-integrable measurable classes. Replacing it by a measure only on uniformly coded sets would change the claim. Here is a genuine ZF obstruction. If $\mathbb R=\bigcup_n A_n$ with each $A_n$ countable, first replace $A_n$ by its increasing finite unions. Every finite-dimensional coordinate chart is then a countable union of countable sets: use $A_n^r$ in dimension $r$, intersect with the chart domain and apply its chart map. A countably additive atomless measure makes each of these countable sets null, so it makes the entire chart null. This contradicts positive smooth density on a nonempty chart. No simultaneous enumeration of the $A_n$ was used: each individual set is null by its own countability, and countable additivity applies to the GIVEN sequence of these sets.

The published [[thm-feferman-levy-reals-are-a-countable-union-of-countable-sets]] and [[cor-relative-consistency-of-feferman-levy-choice-failures-over-zf]] supply exactly that ZF countermodel context. Their public Statements are used here; no forcing proof is re-audited. Thus the original full smooth-measure existence interface cannot simply be asserted in ZF without a further hypothesis. Countable Choice is the weakest sufficient hypothesis of the EXISTING measure, Fourier and Hilbert interfaces actually used below; no implication that it is equivalent to this mixing result or axiomatically optimal is asserted. Its use is public, not a new Given conclusion, a coded-measure replacement, or a theorem import.


## Facts & Assumptions

**Given:** Countable Choice, $d\ge2$, and the non-relatively-compact one-parameter subgroup in the Statement.

[F1] The integer special linear lattice has finite positive smooth invariant quotient measure, null lifts, and a strongly continuous unitary $L^2$ action under Countable Choice. [[lem-sl-integer-lattice-has-finite-covolume]]

[F2] Complex $L^2$ is a complete Hilbert space under Countable Choice. [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[F3] A strongly continuous unitary representation of $\operatorname{SL}_d(\mathbb R)$ with no nonzero fixed vector has all matrix coefficients tending to zero at infinity. [[lem-sl-real-unitary-matrix-coefficients-decay]]

[F4] Fubini applies to integrable functions on sigma-finite smooth coordinate measure spaces. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[A1] The PUBLIC Countable Choice hypothesis supplies the exact Lie, integration, measure and Hilbert interfaces invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** invariant-vector exclusion and the direct SLd coefficient bound.

1.1 Normalize the finite measure in F1 to probability. A group-fixed $L^2$ function lifts to a locally $L^2$ scalar function $f(g)$ on $\operatorname{SL}_d(\mathbb R)$ with $f(hg)=f(g)$ almost everywhere for every fixed $h$. F4 on compact product charts makes this equality hold for almost every pair $(h,g)$. The smooth diffeomorphism $(h,g)\mapsto(z=hg,g)$ preserves the smooth measure class, giving $f(z)=f(g)$ for almost every pair. Another application of F4 gives a constant value almost everywhere. Countably many charts and the null-lift property in F1 transfer the conclusion back to the quotient. Thus group-fixed vectors are exactly constants. [given, F1, F4, algebra, A1]

1.2 Write $a_t=\exp(tX)$. In a fixed complex Jordan basis, if $X$ has an eigenvalue with nonzero real part, trace zero forces real parts of both signs and the operator norms of both $a_t$ and $a_{-t}$ tend to infinity. If all real parts are zero but some Jordan block has a nonzero nilpotent part, its highest nonzero polynomial term in $t$ again makes these norms tend to infinity. In the remaining case $X$ is diagonalizable with purely imaginary spectrum, so both signs of the flow are bounded and its closure in the determinant-one matrix group is compact. The last case is excluded by the hypothesis. Thus $a_{-t}$ leaves every compact set as $t\to\infty$. [given, algebra]

2.1 The zero-mean subspace is closed by Cauchy–Schwarz and invariant by measure preservation. It is a Hilbert space by F2, and the representation on it is strongly continuous by F1 and has no nonzero fixed vector by step 1.1. Hence F3 applies there. [F1, F2, F3, step 1.1, algebra]

3.1 For square-integrable $F,G$, subtract their means to obtain $F_0,G_0$. With the convention $\pi(g)F(x)=F(g^{-1}x)$ their centred correlation is $\langle\pi(a_{-t})F_0,\overline{G_0}\rangle$. F3 and step 1.2 make this tend to zero. Expanding the two means gives the displayed product limit, including complex-valued $F,G$. [F3, step 2.1, step 1.2, algebra] ∎

## Remarks

The source's criterion is non-relative-compactness, explicitly stated in Kleinbock §2.2. Literal noncompactness of a nonclosed image inside a compact rotation torus would not suffice. The public Statement now explicitly includes the Countable Choice needed by its quotient-measure and Hilbert interfaces. The missing-hypothesis correction retains the full mixing conclusion and does not claim an optimal choice axiom.
