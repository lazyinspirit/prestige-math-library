---
id: thm-b-l-s-interval-certificate-correctness
kind: theorem
title: Correctness and Termination of the BLS Interval Certificates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-bls-nonnegative-spectral-excess-excludes-exceptional-eigenvalues
  - lem-bls-single-sign-change-implies-imaginary-axis-positivity
  - thm-bls-rational-transcript-core-terminates-and-encloses
  - alg-interval-arithmetic-selberg-eigenvalue-verification
  - def-b-l-s-finite-trace-certificate-data
  - thm-booker-lee-strombergsson-explicit-gamma0n-twist-minimal-trace-formula
  - thm-booker-lee-strombergsson-twist-minimal-sieve
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§5, Lemma 5.1 and numerical remarks: interval enclosures and the strict Q<1 criterion."
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§4.1–§4.3: the trace-formula inequality excluding exceptional eigenvalues."
---

## Statement

The exact-core verifier terminates on every finite input string, rejecting
malformed records. For a core record, assume each coefficient leaf contains
the corresponding exact coefficient of the normalized excess $Q(x)$.
Assume also that the trace and sieve identities, known-contribution bound
and multiplicity assertion identify this $Q$ with a nonnegative spectral
excess in which any unaccounted positive cuspidal eigenvalue below $1/4$
contributes at least $1$. If the core accepts, no such eigenvalue is present
in the specified twist-minimal sector.

The same soundness implication holds for any broader verifier mode that
independently establishes enclosure of $Q$, positivity $h(it)\ge1$ for
$0\le t\le1/2$, and acceptance only at interval upper endpoint below $1$,
under those spectral hypotheses. Totality of arbitrary backend/positivity
modes is a separate held construction obligation; it is not inferred from
finiteness of an opaque record.

## Statement references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)

## Facts & Assumptions

**Given:** A finite core input; for the exclusion implication its coefficient
leaf enclosures and spectral-identification hypotheses in the Statement.

[F1] [[thm-bls-rational-transcript-core-terminates-and-encloses]] proves total
parsing/evaluation and conditional enclosure for the exact finite transcript.

[F2] [[lem-bls-single-sign-change-implies-imaginary-axis-positivity]] proves
real-axis nonnegativity and $h(it)\ge1$ for every real $t$ from the pivot signs.

[F3] [[lem-bls-nonnegative-spectral-excess-excludes-exceptional-eigenvalues]]
proves exclusion from a nonnegative excess and a strict interval upper bound.

[A1] The exact trace and twist-minimal sieve identities, known-contribution
bound and multiplicity assertion are hypotheses here; their named local
suppliers remain unsupplied.

[F4] [[alg-interval-arithmetic-selberg-eigenvalue-verification]] specifies the
constructed quadratic expression and the strict acceptance test.

## Proof

1.1 Parsing scans finite strings and lists. Every dimension, pivot, sum and sign check uses terminating integer or rational operations. Construction of the expression has $M^2$ terms and fixed finite node patterns. Its evaluation and optional finite syntax comparison terminate by [F1]. All rejection and acceptance branches therefore terminate, including malformed inputs. [given, F1, F4, construct]

1.2 For an accepted record, $\delta=X/(2M)>0$, the vector sums to one and its pivot signs pass. Consequently [F2] gives the required positivity on both the real and imaginary axes. From the leaf enclosure hypothesis, [F1] gives an interval containing the exact constructed normalized $Q(x)$; [F4] makes its upper endpoint strictly less than one. [given, F1, F2, F4]

2.1 Under [A1], an unaccounted exceptional eigenvalue forces $Q\ge1$ by [F3], contradicting that enclosure. The identical contradiction proves the broader-mode implication whenever that mode independently supplies enclosure, positivity and the strict upper-bound test. No termination property for an unspecified broader checker enters this contradiction. [step 1.2, A1, F3, F4, contradiction] ∎ 
## Proof status

This is a complete conditional arithmetic/exclusion proof for the exact
core, and a conditional implication for richer certified modes. It is not
a proof of the trace formula, sieve, multiplicities, Artin count, coefficient
leaf enclosures, arbitrary backend totality, or existence of a production
certificate. The linked BLS numerical code has not been recovered or replayed;
no finite BLS range is accepted as a computation input.

## Proof references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)
