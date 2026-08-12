# frontier-11 — Step 9: scope-denial sweep

`LEVELS.md` step 9 is a sweep, not a pause, and its rule is that **grep is the
entry point, never the sweep**. What follows is the enumeration and then the
reading.

## Entry point — the enumeration

**107 scope denials** (`deferred` or `out-of-scope`) across 515 harvested
headings in nine pairs.

| page | denials |
|---|---|
| `universal-properties-and-the-yoneda-lemma` | 56 |
| `formal-power-series` | 22 |
| `the-integral-logarithm-and-its-characterisations` | 7 |
| `extremal-graph-theory` | 6 |
| `conjugacy-and-simplicity-in-the-symmetric-groups` | 4 |
| `the-fundamental-theorems-of-calculus` | 4 |
| `field-extensions-and-the-complex-numbers` | 3 |
| `the-determinant-of-a-linear-operator` | 3 |
| `arc-length-and-rectifiable-curves` | 2 |

The two large counts are not a concentration of laziness — they are the two
pages whose harvests are largest. Yoneda's harvest was re-enumerated from 37 to
**124** headings against Riehl and Leinster, and Alpha verified that enumeration
is genuinely the sources' own and not padded. A bigger harvest mechanically
produces more dispositions of every kind; the denial *rate* is what matters, and
on those pages it tracks how much of Riehl and Leinster's category theory sits
beyond a first Yoneda page.

## The reading — is any denial actually a build?

The governing rule is the owner's, 2026-08-11: a missing definition or lemma is
something to **build**, and `deferred`/`out-of-scope` is reserved for material
belonging to another page's topic or resting on a whole subject area the library
has not reached.

**Ten denials name a prerequisite in their reason.** Each was read; all ten rest
on a whole subject area or another page's declared topic, not on a writable
lemma:

- *Theorem 2.4.2, analyticity inside the circle of convergence* — needs analytic
  continuation and Cauchy estimates. Complex analysis; the library reaches it at
  orders 303+.
- *Example 2.1.6(vi), singular cohomology represented by Eilenberg–Mac Lane
  spaces* — needs singular cohomology, CW complexes and homotopy categories.
- *Example 4.1.8, the underlying set of the fundamental group* — needs pointed
  homotopy classes and `the-fundamental-group-of-the-circle`, order 295.
- *Example 2.3.7, representable G-sets as torsors* — a group-action application
  past the monoid evaluation example the page does carry.
- *9.51, eigenvalues and determinants* — `det(λI − T) = 0` is explicitly owned by
  `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, order 86, the
  page immediately downstream of this one and blocked only by it.
- *Example 2.6(3), partial fractions* and *Section 1.2, a two-term recurrence* —
  machinery of `linear-recurrences-and-rational-generating-functions`, order 195.
- *A.10, OGF of permutations* and *A.12, Abel's identity* — enumeration
  applications, not formal-series machinery.
- *Checkpoint 6.35* — two unsolved drill exercises practising the chain rule.

**No denial in this run is a lemma that could simply have been written.**

## Reason quality

**Zero reason-prefixes reused more than twice.** The failure mode the rule exists
to catch — one reason pasted across several declines — does not occur here. Every
denial carries a reason about *that specific result*, which is what makes the
disposition checkable rather than decorative.

## Cross-checks already performed upstream

- Alpha ruled at step 3 that batch 1's transcendental decline **stood for the
  field-of-fractions construction and fell for the mathematics**; the mathematics
  was then built (T1, T2), so that denial is no longer in the register.
- Alpha's §0 ruling settled the missing field of fractions once for three
  batches: do not build it in this run, it belongs with orders 46–50. **D10**
  records for the owner that two *published* items already assume it.
- Batch 3's Flajolet–Sedgewick under-enumeration, flagged at step 3 and still
  open after the fix round, was closed in the step-6 artifact round.
- Batch 2's three integration-theory declines (Lebesgue FTC, Banach–Zarecki,
  Henstock–Kurzweil) were approved at **D4**: each needs a whole absent
  integration theory.

## Verdict

**The scope-denial sweep passes.** Every denial is licensed, specific, and rests
on another page's topic or an unreached subject area. Nothing here is a silent
loss: each denial's `coverage.json` row is what makes the result recoverable by a
future build, which is the reason the harvest records dispositions rather than
just inclusions.

Step 9 does not pause the build.
