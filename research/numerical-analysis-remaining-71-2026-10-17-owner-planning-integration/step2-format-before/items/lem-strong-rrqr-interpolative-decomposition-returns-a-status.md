---
id: lem-strong-rrqr-interpolative-decomposition-returns-a-status
kind: lemma
title: "Capped RRQR interpolation returns a status and its direct certificate bounds the actual residual"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-strong-rank-revealing-qr-with-finite-swaps
  - alg-strong-rrqr-interpolative-decomposition
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Ming Gu and Stanley C. Eisenstat, Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization, Sections 3–4"
      url: "https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf"
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, Section 13"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
dependency_level: 1
---

## Statement

For every admissible input to
[[alg-strong-rrqr-interpolative-decomposition]], in either exact arithmetic or
its specified represented finite-precision mode, the procedure terminates
with exactly one listed algorithm status. The interior branch makes at most
$S$ swaps and at most $S+1$ score-test passes. In finite precision the reported
input rank is the exact rank of the represented matrix, not a numerical-rank
estimate for unrepresented data. Every certificate status is assigned in finite
work, without a search until success.

On a finite-precision successful interior branch, the direct certificate data
$(D,r^2,c^2)$ refer to the actual returned $J,T$ and satisfy

$$D=A-A(:,J)T,\qquad r^2=\sum_{a,b}|D_{ab}|^2,\qquad c^2=\max_{a,b}|T_{ab}|^2.$$

An ID-certificate status `certified` guarantees

$$T(:,J)=I_k,\qquad \max_{a,b}|T_{ab}|\le f,\qquad \|A-A(:,J)T\|_2\le\sqrt{r^2}.$$

This direct bound needs no successful RRQR certificate. It asserts no
singular-value-relative error bound for an uncertified RRQR candidate.

## Facts & Assumptions

**Given:** Finite dimensions $m\ge n\ge1$, integer $0\le k\le n$, $f\ge1$,
finite integer swap cap $S\ge0$, and the selected arithmetic mode. Exact
arithmetic includes exact scalar arithmetic, square roots of nonnegative
numbers, and comparisons as in the algorithm. Finite-precision components
are finite dyadic rationals, with exact rational arithmetic for the rank and
direct-certificate checks.

[F1] [[alg-strong-rank-revealing-qr-with-finite-swaps]]: the represented-input
rank test scans columns by exact elimination; QR uses finite local elimination
sweeps; a failed required operation returns a status; every repeated pass either
returns or consumes one of the $S$ swaps. Optional QR certification has a fixed
finite operation/refinement budget and otherwise returns `uncertified`.

[F2] [[alg-strong-rrqr-interpolative-decomposition]]: endpoint branches return
explicit matrices, nonsuccess is propagated without $J,T$, and success constructs
$T$ from a finite candidate $X$, exact identity entries, and a permutation.
The finite-precision direct check computes $(D,r^2,c^2)$ in exact rational
arithmetic and tests the listed entrywise conditions.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for complex or real
vectors $u,v$, $|\langle u,v\rangle|^2\le\|u\|_2^2\|v\|_2^2$.

## Proof

1.1 In the rank test [F1], each of the $n$ columns scans at most $m$ rows. A nonzero pivot is the only divisor used in a row elimination, so every exact rational operation is defined and has finite integer numerators and denominators. Row swaps and subtracting a multiple of one row from another are invertible operations; they preserve all linear dependence relations among columns. At completion the echelon matrix has $r$ nonzero rows with distinct pivot columns, and all remaining rows vanish. Its pivot columns are independent by triangular back-substitution, and its image is contained in the $r$-dimensional space of vectors supported on the nonzero rows. Its rank is therefore exactly $r$, which equals the original rank. The same finite argument applies to the represented selected-block singularity test. Thus no rounded pivot threshold or undecidable limiting test is involved in either finite-precision rank decision. In exact mode the same rank-preserving operations and finite pivot scans apply over the exact input field, using the assumed exact arithmetic and comparisons. [F1, given, algebra]

1.2 Each QR initialization or refactorization has finitely many pivot scans and at most $mn$ local updates by [F1]. Their scalar operations terminate individually in the specified model. A zero target is skipped, and division is performed only after its denominator check. An inadmissible rounded operation exits with `range-failure`; a singular selected block exits with `singular-selected-block`. Otherwise triangular solves and inverse-row calculations use finitely many nonzero diagonal divisions, and finitely many norms and comparisons produce a score-test pass. In exact arithmetic the corresponding finite QR eliminations, norms, and comparisons are defined by the exact model; the same singular-block branch prevents an undefined solve. [F1, given, step 1.1, algebra]

2.1 Starting with zero swaps, every score-test pass either returns success, returns another nonsuccess status, or finds a violation. At a violation the procedure returns when the count is already $S$; otherwise it increments the count and repeats. Hence there are at most $S$ swaps and $S+1$ score-test passes. Each has finite work by step 1.2. The rank-deficient and $k=0$ QR branches return earlier. The optional QR certificate check uses only its fixed finite budget, so failure to certify cannot cause another unbounded loop or change a core status. The ordered exit branches assign exactly one core status. [F1, step 1.1, step 1.2, algebra]

2.2 The ID endpoint branches [F2] return after constructing finite empty or identity matrices. Every interior call terminates by step 2.1. Nonsuccess is propagated with both certificate statuses not applicable. On success the permutation determines distinct valid selected indices, and insertion and permutation of finitely many entries constructs $T$ in finite work. Every finite candidate entry is rational in the represented mode. Thus all entries of $D$, all squared moduli and their finite sum and maximum are exactly computable rationals, regardless of their magnitude; the symbolic square root $\sqrt{r^2}$ requires no rounded conversion. Identity and rational inequality checks terminate, assigning either `certified` or `uncertified`; endpoint certificate statuses are not required. This proves termination and well-definedness of all outputs and statuses. [F2, step 2.1, algebra]

3.1 On an ID-certified branch the explicit checks [F2] give $T(:,J)=I_k$ and $c^2\le f^2$. Since $f\ge1$ and all moduli are nonnegative, $|T_{ab}|^2\le c^2\le f^2$ gives $|T_{ab}|\le f$. For every unit vector $x\in\mathbb F^n$, apply [F3] to each row of $D$ to obtain $|(Dx)_a|^2\le\sum_b|D_{ab}|^2$. Summing over rows gives $\|Dx\|_2^2\le\sum_{a,b}|D_{ab}|^2=r^2$. Taking the supremum over unit $x$ proves $\|D\|_2\le\sqrt{r^2}$ for the actual reconstruction residual. This uses only the direct exact data and no RRQR score certificate, as claimed. [F2, F3, step 2.2, algebra] ∎
