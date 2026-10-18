---
id: lem-finite-scan-range-basis-is-borel
kind: lemma
title: Borel measurability and range correctness of the finite scan
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [alg-gaussian-randomized-range-finder, cor-continuous-functions-are-borel-measurable, thm-continuous-preimages-of-borel-sets-are-borel, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, thm-composition-with-borel-functions-preserves-measurability, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, prop-orthogonal-projection-formula-and-linearity, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integrable-real-and-complex-functions-and-their-integrals]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Algorithms 4.1 and 4.4 and Gaussian conventions in section 10.1; local prerequisite proof"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
---

## Statement

Assume Countable Choice. Apply the column scan specified in
[[alg-gaussian-randomized-range-finder]] to any $Y\in F^{m\times s}$,
$F\in\{\mathbb R,\mathbb C\}$, allowing $s=0$. It terminates and returns an
orthonormal basis $Q$ of $\operatorname{Ran}(Y)$. On each output-rank stratum
$Q$ is Borel measurable, with the variable-size output interpreted in the
finite disjoint union of the matrix spaces $F^{m\times r}$. The projector
$QQ^*$ is a Borel function of $Y$. Consequently the range-finder projector
and $\|(I-QQ^*)A\|_2$ are Borel functions of the sketch for fixed $A$.

## Facts & Assumptions

**Given:** Countable Choice and a finite real or complex input matrix, including an empty column list.

[F1] The scan subtracts projections onto previously retained vectors, skips zero residuals, and normalizes nonzero residuals; in the complex case it fixes the phase by the first nonzero coordinate. [[alg-gaussian-randomized-range-finder]]

[F2] Continuous maps of finite real coordinate spaces are Borel measurable under Countable Choice. [[cor-continuous-functions-are-borel-measurable]]

[F3] A continuous map between topological spaces pulls Borel sets back to Borel sets, and the Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]). Thus a relatively continuous map on an ambient Borel stratum has ambient Borel preimages relative to that stratum.

[F4] Compositions of measurable maps are measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F5] The spectral norm is bounded by the Frobenius norm, including the zero matrix ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F6] An orthonormal basis gives the unique orthogonal projection by its finite basis formula, and $I-P$ projects onto the orthogonal complement ([[prop-orthogonal-projection-formula-and-linearity]]).

[F7] Nonnegative integrals are monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]), and a nonnegative constant has integral equal to its simple integral, namely that constant times the total measure ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]). Finiteness of the absolute-value integral is the definition of integrability ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

1.1 After each scanned column, the retained vectors are orthonormal and span the scanned columns: subtracting their projections gives an orthogonal residual; a zero residual adds no span, while normalizing and multiplying a nonzero residual by a unit complex scalar adds exactly its line. This proves the invariant by finite induction. There are exactly $s$ scan steps, with no division on a zero branch, so the scan terminates with the asserted basis. If $s=0$ or $Y=0$, it returns the empty basis and zero projector. [given, F1, algebra]

2.1 Record all skip/retain branches and, in the complex case, the first nonzero coordinate at each retain branch. There are finitely many such records. Start with the whole input space as one Borel stratum. Inductively on a fixed partial record, residuals are continuous relative to its stratum; the zero and nonzero tests are relatively closed or open and hence ambient Borel by [F3]. Normalization is continuous where the norm is positive. If the first nonzero coordinate of the normalized residual is $w_j$, its phase multiplier is $\overline{w_j}/|w_j|$, continuous where $w_j\ne0$; the conditions $w_1=\cdots=w_{j-1}=0$, $w_j\ne0$ give Borel substrata by the same argument. Thus every complete record has a Borel stratum and a relatively continuous output map of fixed size. For a Borel target set, [F3] expresses its preimage on each stratum as that stratum intersected with an ambient Borel set; the finite union over records is Borel. The rank strata are finite unions of these record strata, so this proves the stated variable-size Borel map, without asserting global continuity. Multiplication $Q\mapsto QQ^*$ is continuous for each rank; [F4] and finite pasting give a Borel fixed-size projector. If either matrix coordinate dimension is zero, the empty-matrix input space has one point and these conclusions are immediate. [step 1.1, F1, F3, F4, algebra]

3.1 For fixed $A$, the map $\Omega\mapsto A\Omega$ is continuous and hence Borel by [F2] when both coordinate dimensions are positive; if either dimension is zero it is constant and Borel directly. Composing with step 2.1 using [F4] gives a Borel range-finder projector. The norm triangle inequality and [F5] give $|\|X\|_2-\|Z\|_2|\le\|X-Z\|_2\le\|X-Z\|_F$, so the matrix norm is continuous and the residual error is Borel too. By [F6], $v=Pv+(I-P)v$ is an orthogonal decomposition, whence $\|(I-P)v\|_2^2\le\|v\|_2^2$ and the residual is bounded by $\|A\|_2$. For any probability law $\mu$ of the sketch, [F7] therefore gives $\int\|(I-P)A\|_2\,d\mu\le\int\|A\|_2\,d\mu=\|A\|_2<\infty$, including $A=0$. Thus the Borel residual has a finite expectation under every such law. [step 2.1, F2, F4, F5, F6, F7, algebra] ∎
