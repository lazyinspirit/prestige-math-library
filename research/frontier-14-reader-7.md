# Frontier 14 — Step 6a independent reader 7 (batch 7)

> **Recovery note (Alpha c, step 6b, 2026-08-16).** The reader-7 dispatch wrote its
> report to `research/frontier-14-reader-1.md`, because `research/frontier-14-reader-7.task.md`
> named the wrong output path (fixed after the fact in the working tree). Reader 1's
> own report later landed at that same path, and the copy made into
> `research/frontier-14-reader-7.md` was therefore reader 1's batch-1 report, not this one.
> The text below is recovered verbatim from the dispatch transcript
> `research/frontier-14-dispatch/reader-reader-7.log` (the final `apply_patch` body and the
> reader's own read-back of the file, lines 9209–9307). Only this header and the
> report title are added; findings R7-1 … R7-12 keep their original ids and wording.

Scope: every item on the two pages in `research/frontier-14-batch-7.pages.json`.

Coverage: I read all 24 scoped item files and both page files in full. I checked all 19 numbered proofs step by step and checked all 96 recorded `[L#]` citation edges against the cited Definition or Statement on disk. I opened all 34 declared external dependency items, plus four additional bridge items needed to assess the gaps below. All 24 scoped mathematical-content items carry both `provenance.statement` and `provenance.proof`.

The sole `ai-generated` Statement is `ex-finite-space-function-algebras-interpolate-exactly`. It is not a `deps` or direct-citation target: its only appearances outside its own file are its page listing and scaffold/manifest records. I checked the empty and singleton cases, finite Hausdorff discreteness, the finite separator choices, and the indicator-function expansion for both scalar fields. I found no counterexample.

## Findings

### R7-1 — `lem-real-part-of-a-self-adjoint-complex-function-algebra`

- **Location:** item title, `items/lem-real-part-of-a-self-adjoint-complex-function-algebra.md:4`; the same overclaim appears in the A-page summary at `library/topology/stone-weierstrass-general.md:28`. Compare the formal Statement at item lines 28–30.
- **Defect:** the title says that the real-valued part of “a self-adjoint complex function algebra is separating,” and the summary repeats that claim. The formal Statement and proof require the original complex algebra to be **point-separating** as well as self-adjoint.
- **Evidence:** take a two-point compact discrete space and let `A` be the algebra of constant complex-valued functions. It is a unital self-adjoint complex function algebra, but its real-valued part consists only of real constants and does not separate the two points. Thus the title and page summary assert more than the proved Statement.
- **Severity:** **fatal**.

### R7-2 — `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients`

- **Location:** A-page summary, `library/topology/stone-weierstrass-general.md:28`; compare the theorem Statement at `items/thm-closed-real-function-algebras-are-function-spaces-on-their-quotients.md:26-28`.
- **Defect:** the summary says the page identifies “a closed real function algebra” with all continuous functions on its quotient. The theorem requires a uniformly closed **unital** real function algebra. Dropping unitality makes the summary false.
- **Evidence:** on a nonempty compact Hausdorff space let `A={0}`. It is a uniformly closed real function algebra. Its indistinguishability quotient is a one-point space, whose full continuous real function algebra is `\mathbb R`, whereas `A` contains only zero. The theorem's unital hypothesis is load-bearing.
- **Severity:** **fatal**.

### R7-3 — `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense`

- **Location:** `[L3]`, `items/cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense.md:40`, used in proof step 2.1 at line 52.
- **Defect:** `[L3]` attributes the function-space claim “Uniform convergence in `C(X,\mathbb C)` uses the metric `d_{\mathbb C}(z,w)=|z-w|`” to `def-complex-metric-convergence-and-continuity`. The cited Definition only defines `d_{\mathbb C}` and says that convergence and Cauchy sequences **in `\mathbb C`**, and continuity of maps between subsets of `\mathbb C`, use that metric. It does not define uniform convergence of functions `X\to\mathbb C` or the uniform topology on `C(X,\mathbb C)`.
- **Why it matters:** this changes the object and conclusion of the cited item. `def-topology-of-uniform-convergence` is the on-disk item that supplies the missing function-space definition. `[L1]` already states the needed uniform-density conclusion, so `[L3]` could also simply be removed, but it is presently an inaccurate `[L#]` restatement.
- **Severity:** **fatal**.

### R7-4 — `ex-two-point-duplication-algebra-and-its-quotient`

- **Location:** `[L3]`, `items/ex-two-point-duplication-algebra-and-its-quotient.md:38`, used in proof step 1.1 at line 48.
- **Defect:** `[L3]` says `thm-heine-borel-r` proves that every closed bounded interval is “a compact topological subspace of the real line.” The cited theorem's actual clause is only that `[a,b]` is compact in the ambient-cover sense of `def-open-cover-r`: every cover by open subsets of `\mathbb R` has a finite subcover. It does not state compactness of the topological subspace.
- **Evidence:** the exact on-disk bridge is `lem-compactness-of-a-subspace-is-ambient`, whose Statement proves the equivalence between subspace compactness and the ambient-cover condition. That bridge is absent from the item's dependencies and Facts. Step 1.1 therefore relies on a widened restatement to meet the compact-topological-space hypothesis of `[L1]`.
- **Severity:** **fatal**.

### R7-5 — `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval`

- **Location:** `[L4]` at `items/ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval.md:38`, proof step 1.1 at line 48, and the application of `[L1]` in step 2.1 at line 52.
- **Defect:** `thm-heine-borel-r` supplies compactness only in the ambient-cover sense of `def-open-cover-r`, but step 1.1 silently treats this as compactness of the topological subspace so that step 2.1 can apply the general Stone–Weierstrass theorem. Unlike R7-4, the `[L4]` wording itself merely says “compact”; the defect is the unstated bridge in the proof's use of that word.
- **Why it matters:** `lem-compactness-of-a-subspace-is-ambient` closes the gap immediately, and `[L2]` independently proves the density needed by the example. This is therefore a short bridge gap rather than a false conclusion or inflated quoted clause.
- **Severity:** **nonfatal**.

### R7-6 — `cex-disc-algebra-is-not-dense-without-self-adjointness`

- **Location:** proof step 1.2, `items/cex-disc-algebra-is-not-dense-without-self-adjointness.md:70`.
- **Defect:** after observing that the coordinate polynomials are an algebra, the step says “therefore its closure `A` is a ... complex function algebra.” None of the listed inputs proves that uniform closure preserves multiplication, and the step also does not establish that the coordinate polynomials are continuous members of `C(D,\mathbb C)`.
- **Why it matters:** the conclusion is true. Polynomial continuity follows from continuity of the complex field operations, and if `p_n\to f` and `q_n\to g` uniformly on compact `D`, boundedness gives `p_nq_n\to fg` uniformly. These are short repairs a competent reader can supply, but they are not among step 1.2's stated inputs.
- **Severity:** **nonfatal**.

### R7-7 — `cex-disc-algebra-is-not-dense-without-self-adjointness`

- **Location:** proof step 1.4, `items/cex-disc-algebra-is-not-dense-without-self-adjointness.md:74`, propagated into the cancellations in steps 2.1 and 3.1.
- **Defect:** `[L7]` lists the roots as exponential values, `[L9]` gives powers of `\cos\theta+i\sin\theta`, and `[L10]` gives the exponential kernel. The step nevertheless identifies those roots as `1,\zeta,\ldots,\zeta^{N-1}` and uses `\zeta^r\ne1` without an input establishing `\exp(i\theta)=\cos\theta+i\sin\theta` or `\exp(z+w)=\exp z\exp w`.
- **Evidence:** the matching on-disk clauses are `thm-eulers-formula` and `thm-complex-exponential-addition-and-real-extension`; neither is a dependency or Fact of this item. Adding one of the standard short derivations from those clauses closes the argument.
- **Severity:** **nonfatal**.

### R7-8 — `cex-disc-algebra-is-not-dense-without-self-adjointness`

- **Location:** proof step 1.5, `items/cex-disc-algebra-is-not-dense-without-self-adjointness.md:76`.
- **Defect:** `[L11]` is induction with base case `0`, but the written proof starts with `q=1` and proves the transition from `q` to `q+1`, then says `[L11]` completes the induction. Formally it has not supplied the base case required for the property as stated on all naturals.
- **Why it matters:** reindexing with `P(n)` equal to the identity for `q=n+1`, or explicitly invoking induction from one, repairs this immediately. The finite geometric identity itself is correct.
- **Severity:** **polish**.

### R7-9 — `ex-trigonometric-polynomials-are-dense-on-the-circle`

- **Location:** proof step 2.1, `items/ex-trigonometric-polynomials-are-dense-on-the-circle.md:62`, before `[L1]` is applied in step 3.1.
- **Defect:** the step verifies algebraic closure, constants, separation, and conjugation closure, but never verifies that the Laurent sums are continuous and hence form a subalgebra of `C(\mathbb T,\mathbb C)`, a hypothesis of `[L1]`.
- **Why it matters:** step 1.2 rewrites negative powers as powers of conjugation; the coordinate map and conjugation are continuous and finite sums/products preserve continuity. This is a short missing verification, not a false density claim.
- **Severity:** **nonfatal**.

### R7-10 — `thm-real-stone-weierstrass-dichotomy-for-separating-algebras`

- **Location:** proof step 2.2 at `items/thm-real-stone-weierstrass-dichotomy-for-separating-algebras.md:56`; compare step 3.1 at line 58.
- **Defect:** step 2.2 invokes “the unitization `A^+`” before `A^+:=A+\mathbb R1` is defined in the later step 3.1. The intended object is unambiguous, but the earlier numbered step does not receive it from a Fact, the Given, or an earlier definition.
- **Severity:** **polish**.

### R7-11 — `ex-two-point-duplication-algebra-and-its-quotient`

- **Location:** proof step 1.4, `items/ex-two-point-duplication-algebra-and-its-quotient.md:54`.
- **Defect:** the step calls the displayed piecewise-linear tent `t_c` continuous without checking continuity at the joining point `c` or citing a piecewise-continuity result.
- **Why it matters:** both formulas equal `1` at `c`, and each branch is continuous, so a one-line check closes the gap.
- **Severity:** **polish**.

### R7-12 — `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval`

- **Location:** proof step 1.2, `items/ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval.md:50`.
- **Defect:** the step declares `h(x)=|x-c|` continuous without a cited fact or derivation, although that continuity is needed when `[L2]` is applied in step 2.1.
- **Why it matters:** the reverse triangle inequality gives `||x-c|-|y-c||\le|x-y|`, so the omitted verification is immediate.
- **Severity:** **polish**.

## Per-page verdicts

- `stone-weierstrass-general` — **fails independent read** because of fatal R7-1 through R7-3. It also has polish R7-10. I opened all 18/18 scoped items; the other 14 were clean.
- `stone-weierstrass-general-examples` — **fails independent read** because of fatal R7-4. It also has nonfatal R7-5 through R7-7 and R7-9, plus polish R7-8, R7-11, and R7-12. I opened all 6/6 scoped items; `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` and `ex-finite-space-function-algebras-interpolate-exactly` were clean.

Total: **12 findings — 4 fatal, 4 nonfatal, 4 polish**. Scoped items opened: **24/24**. Unique item files opened including dependencies and bridge evidence: **62**.
