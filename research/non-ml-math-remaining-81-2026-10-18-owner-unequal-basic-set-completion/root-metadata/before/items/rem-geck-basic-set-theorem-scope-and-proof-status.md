---
id: rem-geck-basic-set-theorem-scope-and-proof-status
kind: remark
title: "The scope and proof status of the finite-Weyl basic-set theorem"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-weyl-lusztig-basic-set-data
  - thm-finite-weyl-canonical-basic-sets-from-lusztig-properties
  - cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {}
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, sections 4–6"
      url: "https://arxiv.org/pdf/math/0511548"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised text, sections 18–21"
      url: "https://arxiv.org/pdf/math/0208154"
---

## Remark

The general local basic-set theorem is the finite-Weyl theorem corresponding to Geck's Theorem 6.6, with its standing section 5.2 hypotheses P2–P8 and P15′ written explicitly. The local chain supplies the asymptotic algebra, integral homomorphism and layer compatibility, Schur leading coefficients, good-characteristic splitting, actual free integral models, lifted-idempotent reciprocity and strict triangularity. Geck's notes cite Lusztig for the algebra constructions, sketch the leading-term and splitting arguments, and refer elsewhere for Proposition 6.7; those source omissions are supplied locally rather than silently treated as proofs.

The hypotheses are finite Weyl $W$, nonnegative integral $L$, the split generic setup, $\theta:\mathbb Z[v^{\pm1}]\to k$ with $\theta(v)\ne0$, and characteristic zero or L-good characteristic: every leading Schur integer $f_E$ is nonzero. The multiplicative parameter is $\xi=\theta(v)^2$. The full Schur elements may vanish. Requiring all $\theta(c_E)\ne0$ would instead restrict the theorem to a semisimple identity-decomposition situation and would lose its modular content. The general theorem and its cell corollary retain that content.

These statements prove a conditional implication under the exact stated Lusztig properties; they do not prove those properties for an unspecified unequal weight. As source-status context, Geck section 5.2 records proofs in the equal-parameter finite-Weyl case, in asymptotic type $B_n$ with $b>(n-1)a>0$, and the $b=0,a>0$ type-$D$ reduction, with citations to the relevant original papers. His type $G_2$ and $F_4$ discussions also describe separate calculation-based results. This is a dated account of that source's regimes, not a current census and not a logical premise asserting their proofs locally. No result for arbitrary Coxeter groups or universal P1–P15 is inferred.

The cell corollary uses the dagger twist explicitly. It links the unique leading generic basic-set label to a cell quotient and its specialization; it does not replace a canonical basic set by all cell labels or claim all cell modules are irreducible.
