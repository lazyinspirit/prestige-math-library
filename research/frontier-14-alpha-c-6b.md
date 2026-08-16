# frontier-14 — group Alpha c, step 6b adjudication (batch 7)

Scope: `research/frontier-14-batch-7.pages.json` — `stone-weierstrass-general` (A,
18 items) and `stone-weierstrass-general-examples` (B, 6 items), 24 items, 19 of
them proof-bearing.

## 0. Blocker cleared first: reader 7's report was lost, and is recovered here

`research/frontier-14-reader-7.md` on disk was a **byte-identical copy of reader
1's batch-1 report** — 14 findings `R1-1 … R1-14` about complex power series and
contour integration. It was not reader 7's read of batch 7 at all.

What happened, from the dispatch records:

- `research/frontier-14-reader-7.task.md` told reader 7 to write
  `research/frontier-14-reader-1.md`. The path was wrong; the git diff shows it
  was corrected to `-reader-7.md` only after the fact.
- `research/frontier-14-dispatch/reader-reader-7.result.json` shows the reader ran
  21:38:19Z → 21:51:32Z, `exit_code 0`, and its closing line is *"Wrote
  research/frontier-14-reader-1.md … 12 findings — 4 fatal, 4 nonfatal, 4 polish.
  Reviewed all 24 scoped items and 96 citation edges."*
- Reader 1 had already run 19:22 → 19:38 and its report was committed in
  `9f92588c`. Reader 7 therefore overwrote reader 1's file; the recovery restored
  reader 1's text from git and copied that restored text into
  `frontier-14-reader-7.md`. Both files carry mtime 08:03 local and identical
  bytes, and `git status` shows `-reader-1.md` clean against `HEAD`.

Reader 1's report is intact. **Reader 7's twelve findings existed only in the
dispatch transcript.** I recovered them verbatim from
`research/frontier-14-dispatch/reader-reader-7.log` — the final `apply_patch`
body at lines 9010–9204 and the reader's own read-back of the file at lines
9209–9307, which agree — and rewrote `research/frontier-14-reader-7.md` with the
recovered text plus a header recording the recovery. **Finding ids `R7-1 … R7-12`
are unchanged.** Nothing was renumbered.

This is precisely the `PREVENTIONS` failure mode "findings live in files, not
messages": had I adjudicated from the file on disk, I would have adjudicated
batch 1 and reported batch 7 as having no findings, and four fatal findings would
have reached step 7 intact.

**For the orchestrator:** `research/frontier-14-reader-<i>.task.md` for other
batches should be checked for the same wrong-output-path bug before their reports
are trusted. I checked mine only.

---

## 1. Adjudications — reader 7, `R7-1 … R7-12`

Twelve findings: **4 confirmed fatal, 4 confirmed nonfatal, 3 confirmed polish, 1
partially reclassified.** All twelve are real; none is a false positive. I opened
every cited item and every cited dependency on disk before ruling.

### R7-1 — `lem-real-part-of-a-self-adjoint-complex-function-algebra` — **confirmed_fatal**

**Evidence.** The title read "The real-valued part of **a self-adjoint complex
function algebra** is separating and has the same common zeros". The Statement
(item lines 28–30) requires "a self-adjoint **point-separating** complex function
algebra". The reader's counterexample is correct and I reproduced it: on a
two-point discrete space, the constant complex functions form a unital
self-adjoint complex function algebra whose real-valued part is the real
constants, which do not separate the two points. So the title asserted a strictly
stronger result than the proof gives, and the step-7 judges — who read Statements
— could not have seen it.

**Repaired.** Title → "The real-valued part of a **point-separating** self-adjoint
complex function algebra is separating and has the same common zeros". The
Statement and proof are unchanged; the title now matches them.

### R7-2 — `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients` — **confirmed_fatal**

**Evidence.** The A-page summary said the page "closes by identifying **a closed
real function algebra** with all continuous functions on the compact Hausdorff
quotient". The theorem's Statement requires a uniformly closed **unital** real
function algebra, and its title carries "unital" correctly — only the page prose
dropped it. The reader's witness is correct: on a nonempty compact Hausdorff
space, `A = {0}` is a uniformly closed real function algebra, its
indistinguishability quotient is a single point, and `C(pt, ℝ) = ℝ ≠ {0}`. I also
checked the source: Erdman's Theorem 21.2.15 reads "if X is a compact topological
space and A is a **closed unital** subalgebra of C(X)…", so unitality is the
source's hypothesis too, not an artefact.

**Repaired.** `library/topology/stone-weierstrass-general.md` paragraph 2 → "a
closed **unital** real function algebra". The summary remains exactly two
paragraphs, each under 150 words.

### R7-3 — `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense` — **confirmed_fatal**

**Evidence.** `[L3]` claimed "Uniform convergence in `C(X,ℂ)` uses the metric
`d_ℂ(z,w)=|z-w|`" and attributed it to
`def-complex-metric-convergence-and-continuity`. That definition says only:
"Convergence in ℂ, Cauchy sequences in ℂ, and continuity of maps between subsets
of ℂ mean the notions of … for `d_ℂ`". It says nothing about uniform convergence
of functions `X → ℂ` or about a topology on `C(X,ℂ)`. The fact line changed the
object of the cited clause — the dominant defect class this run — and step 2.1
leaned on the inflated version to license the word "uniform" in the conclusion.

**Repaired.** I did **not** re-cite a different item to prop up the inflated
line. `[L3]` is deleted, `def-complex-metric-convergence-and-continuity` is
removed from `deps` (nothing else in the item used it), the old `[L4]` is
renumbered `[L3]`, and step 2.1 now reads: "Steps 1.1 and 1.2 make `A` a unital
point-separating self-adjoint complex function algebra, so `[L1]` gives exactly
the asserted conclusion that `A` is uniformly dense in `C(X,ℂ)`." `[L1]` is
`thm-complex-stone-weierstrass-self-adjoint`, whose Statement already concludes
"uniformly dense in `C(X,ℂ)`" in those words, so the corollary's conclusion is now
carried verbatim by its source and no bridging claim is needed.

### R7-4 — `ex-two-point-duplication-algebra-and-its-quotient` — **confirmed_fatal**

**Evidence.** `[L3]` said `thm-heine-borel-r` proves every closed bounded interval
is "a compact **topological subspace** of the real line". That theorem's Statement
is the ambient-cover condition of `def-open-cover-r`: "every family of open
subsets of ℝ whose union contains `[a,b]` has a finite subfamily whose union
already contains `[a,b]`". Subspace compactness is a different assertion, and step
1.1 needed the subspace form to meet `[L1]`'s compact-Hausdorff-space hypothesis.
The reader named the right bridge: `lem-compactness-of-a-subspace-is-ambient`
(published) proves the equivalence, and it was absent from `deps` and Facts.

**Repaired.** `[L3]` now quotes the ambient-cover form; a new `[L4]` states
`lem-compactness-of-a-subspace-is-ambient` clause 1; step 1.1 is "By [L3] and the
equivalence in [L4], the subspace `[0,1]` of ℝ is a compact topological space."
The Hausdorff half of that step also rested on an unstated
restricted-metric-induces-the-subspace-topology claim, so I replaced it with the
published `lem-t0-t1-and-hausdorff-are-hereditary`: ℝ is Hausdorff by `[L5]`,
`[L6]`, and heredity transfers it to the subspace. `deps` gains
`lem-compactness-of-a-subspace-is-ambient`,
`lem-t0-t1-and-hausdorff-are-hereditary`, `def-hereditary-property`.

### R7-5 — `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval` — **confirmed_nonfatal, repaired anyway**

**Evidence.** The reader is right that this is the same gap as R7-4 without the
inflated wording: `[L4]` said only "`[a,b]` is compact", which is faithful to
`thm-heine-borel-r`, but step 1.1 then used it as compactness of the topological
subspace to feed `[L1]`. That is a bridge a competent reader closes at once, so
nonfatal is the correct severity.

**Repaired anyway**, because step 8 will not permit it: `[L4]` now quotes the
ambient-cover form, and new facts `[L7]` and `[L8]` supply
`lem-compactness-of-a-subspace-is-ambient` and hereditary Hausdorffness, with step
1.1 rewritten to match `ex-two-point-duplication`. Both examples now cross the
same bridge the same way.

### R7-6 — `cex-disc-algebra-is-not-dense-without-self-adjointness` — **confirmed_nonfatal in severity, but the gap sat under a Statement clause; repaired in full**

**Evidence.** Step 1.2 asserted that `P`, "and therefore its closure `A`", is a
unital point-separating complex function algebra, and that "`A` is closed by
definition". Nothing in the listed inputs established that the coordinate
polynomials are continuous members of `C(D,ℂ)`, nor that uniform closure preserves
multiplication. The reader graded this nonfatal on the ground that the conclusion
is true and the repairs are short; I agree the mathematics is standard. But the
"Statement refuted" block asserts that `A` **is** a closed unital point-separating
complex function algebra — the whole force of the counterexample is that such an
algebra can fail to be self-adjoint or dense — so the claim is load-bearing and
must be proved, not left to the reader.

**Repaired.** The Statement now spells out `A`: the functions `D → ℂ` that for
every `ε>0` admit `p ∈ P` with `|f(z)-p(z)|<ε` on all of `D`. Step 1.2 now proves,
inline and elementarily:

- **Polynomials are continuous.** `z^j - w^j = (z-w)Σ_{k<j} z^k w^{j-1-k}` with
  `|zw|=|z||w|` and `|z+w|≤|z|+|w|` from `[L3]` gives `|z^j-w^j| ≤ j|z-w|` on `D`,
  hence `|p(z)-p(w)| ≤ C_p|z-w|` with `C_p = Σ_{j≥1} j|α_j|`.
- **Members of `A` are continuous**, by a new `[L15]` = `thm-uniform-limit-theorem`
  clause 1 (published; domain an arbitrary topological space, target any metric
  space, so ℂ is covered).
- **`A` is closed under products**, by the coefficient-sum bound `|p| ≤ Σ|α_j|` on
  the unit disc: fix `b₀` with `|g-b₀|<1`, so `|g| ≤ K := M_{b₀}+1`; choose `a` with
  `|f-a| < η/(2K)` and `b` with `|g-b| < η/(2(M_a+1))`; then from
  `ab-fg = a(b-g)+(a-f)g`, `|ab-fg| ≤ M_a|b-g| + K|a-f| < η`. No extreme-value
  theorem is needed — the bound comes from the coefficients and `|z| ≤ 1`.
- **`A` is uniformly closed**, by the `ε/2` triangle argument.

`deps` gains `thm-uniform-limit-theorem`.

### R7-7 — `cex-disc-algebra-is-not-dense-without-self-adjointness` — **confirmed_nonfatal, repaired**

**Evidence.** Step 1.4 identified the `N`th roots of unity as `1, ζ, …, ζ^{N-1}`
for `ζ := exp(2πi/N)` and used `ζ^r ≠ 1`. `[L7]`
(`thm-complex-nth-roots-and-roots-of-unity`) gives the roots as the *exponential
values* `exp(2πik/N)`; turning those into *powers of ζ* needs
`exp(z+w) = exp z · exp w`, which was not an input. `[L9]` was de Moivre, which
concerns `(cos θ + i sin θ)^m` and does not connect to `exp` without Euler's
formula — also not an input. The reader is right, and right that it is short to
close.

**Repaired.** `[L9]` is now `thm-complex-exponential-addition-and-real-extension`
("For all `z,w ∈ ℂ`, `exp(z+w) = exp z exp w`", verbatim), replacing
`cor-complex-de-moivre-formula` in `deps` — de Moivre was used nowhere else. Step
1.4 now derives `exp(2πik/N) = ζ^k` by the addition law along `[L11]`'s induction
with base `exp 0 = 1 = ζ^0`, gets `ζ^r ≠ 1` for `1 ≤ r < N` from `[L10]`
(`ker exp = 2πiℤ`, so `ζ^r = 1` would force `N | r`), and gets `(ζ^r)^N = exp(2πir)
= 1` the same way.

### R7-8 — `cex-disc-algebra-is-not-dense-without-self-adjointness` — **confirmed_polish, repaired**

**Evidence.** Step 1.5 proved the finite geometric identity for `q ≥ 1` starting
at `q = 1` and then cited `[L11]` (`thm-induction-principle`, base case `0`). The
identity is correct; only the induction's indexing did not line up with the cited
principle.

**Repaired.** The step now applies `[L11]` to the property "the identity holds for
`q = n+1`", with base `n = 0` reading `(x-1)x^0 = x-1`, and the successor step
unchanged.

### R7-9 — `ex-trigonometric-polynomials-are-dense-on-the-circle` — **confirmed_nonfatal, repaired**

**Evidence.** Step 2.1 verified that the Laurent sums form a unital, separating,
self-adjoint family but never that they are *continuous*, which `[L1]` needs in
order to treat `T` as a subalgebra of `C(𝕋,ℂ)`. Correct finding.

**Repaired.** Step 2.1 now proves continuity: step 1.2 rewrites a Laurent sum as
`Σ_{j≥0} a_j z^j + Σ_{j<0} a_j (z̄)^{-j}` on `𝕋`; conjugation satisfies
`|z̄-w̄| = |z-w|` because `z̄-w̄ = conj(z-w)` and `|conj u|² = conj(u)·u = |u|²`; and
`|u^r - v^r| ≤ r|u-v|` for `|u|=|v|=1`, so each Laurent sum is Lipschitz for the
metric of `[L3]`.

**I also repaired a citation defect the reader did not report.** `[L5]` read
"Conjugation respects sums and products and satisfies `z z̄ = |z|²`", yet step 1.1
invoked "the reverse triangle inequality from `[L5]`" — which that fact line did
not state. The cited `lem-complex-conjugation-and-modulus-laws` *does* state
`|z+w| ≤ |z|+|w|` and `|zw|=|z||w|` and `conj(conj z) = z`, so the repair is to
quote the source properly rather than to weaken the step: `[L5]` now carries the
automorphism laws, `z z̄ = |z|²`, `|zw|=|z||w|` and `|z+w| ≤ |z|+|w|`. This is the
mirror image of the dominant class — a fact line *narrower* than the step that
cites it — and it is equally a citation failure.

### R7-10 — `thm-real-stone-weierstrass-dichotomy-for-separating-algebras` — **confirmed_polish, repaired by restructuring**

**Evidence.** Step 2.2 invoked "the unitization `A^+`" and concluded it was dense,
while `A^+ := A + ℝ1` was defined only in the later step 3.1. The object was
unambiguous, so polish is the right severity, but the step genuinely received it
from nowhere.

**Repaired.** `A^+` is now constructed once, before the case split, in a new step
1.3 that also proves it is an algebra —
`(a+c1)(b+d1) = (ab+da+cb) + cd·1` — is unital, separates points because it
contains `A`, and is therefore dense by `[L3]`. Both branches then cite step 1.3.
`precheck` recomputed the canonical stratification and I adopted its printed form,
so the steps are now 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1, 4.1; the two closure
inclusions for the common-zero branch are steps 2.2 and 2.3, and step 3.1 is the
no-common-zero branch. I also made explicit in step 2.2 that `a(x₀)=0` and
`f(x₀)=0` are what force `|c| < ε/2` — previously left to the reader.

### R7-11 — `ex-two-point-duplication-algebra-and-its-quotient` — **confirmed_polish, repaired**

**Evidence.** Step 1.4 called the two-branch tent `t_c` continuous with no check
at the joining point `c` and no cited pasting result. The two formulas do agree at
`c` (both give 1), so the claim is true and the severity is polish.

**Repaired.** `t_c` is now defined as a pointwise minimum,
`t_c := min{c⁻¹ι, (1-c)⁻¹(1-ι)}` where `ι` is the subspace inclusion, so
continuity follows from `[L8]` (`def-subspace-topology-top`: the inclusion is
continuous), `[L9]` (`lem-algebra-of-continuous-real-maps-on-a-space`: sums,
products and minima of continuous real maps on a topological space are
continuous), and a one-line inline argument that constant maps are continuous
because the preimage of any open set is `∅` or the whole space, which is `[L10]`'s
condition. The step then verifies that the minimum really is the two-branch
formula: for `0 ≤ x ≤ c`, `x/c ≤ 1 ≤ (1-x)/(1-c)`, and the inequalities reverse on
`[c,1]`.

### R7-12 — `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval` — **confirmed_polish, repaired**

**Evidence.** Step 1.2 declared `h(x)=|x-c|` continuous with no fact and no
derivation, and step 2.1 needs that continuity to place `h` in the uniform
closure. Correct, and immediate to close.

**Repaired.** `h := |ι - c|` for the subspace inclusion `ι`, continuous by the
same three facts added for R7-11 (`[L9]`, `[L10]`, `[L11]` in this item's
numbering).

---

## 2. Findings I raised that no reader reported

- **`ex-trigonometric-polynomials-are-dense-on-the-circle` `[L5]`** — a fact line
  narrower than the step citing it. Adjudicated `confirmed_fatal` as a citation
  defect and repaired; recorded under R7-9 above.
- **`lem-two-compact-cover-sweeps-for-function-lattices` step 4.1** —
  `confirmed_nonfatal`, repaired. The step formed `G` as "the set of all `g ∈ L`
  obtained as in step 3.1 for some `x ∈ X`", which reads as one selection per
  point of a possibly infinite `X`. The set is now given by comprehension —
  `G := {g ∈ L : g > f-ε everywhere, and g(x)=f(x) for some x}` — and the covering
  argument is unchanged: step 3.1 produces, for each `x`, a member of `L` with both
  defining properties. No choice principle is used anywhere in the lemma, and now
  nothing in the text suggests one is.
- **The `205B` source was misattributed** — see §4.

---

## 3. Proof-refuter subagents and their findings

I dispatched four read-only refuters (GPT 5.6 Sol, `--sandbox read-only`, via
`tools/dispatch.mjs --role refuter`) covering all 19 proof-bearing items, none
overlapping. Two ran on the pre-repair text and two on the repaired text; all
four ran to completion.

| refuter | items | result |
|---|---|---|
| `c7-lattice` | 8 lattice-route items | 2 fatal |
| `c7-real` | 7 real-theorem and quotient items | 1 fatal |
| `c7-complex` | 5 complex-route items (post-repair) | 1 fatal, 2 nonfatal |
| `c7-examples` | 4 B-page items (post-repair) | **no defect found** |

**Four confirmed, none refuted.** The three fatal findings are one class the
readers missed entirely, and it is not the inflated-citation class:

### F1 (c7-lattice) — `thm-lattice-stone-weierstrass` asserts density in a topology that does not exist on its own boundary case — **confirmed_fatal**

The Statement read "Then `L` is dense in `C(X,ℝ)` **for the topology of uniform
convergence**", with `X` any compact Hausdorff space, `X = ∅` included, and step
1.1 was the empty branch. I opened `def-topology-of-uniform-convergence` and it
says, in its own words at lines 77–80: "**`X` is nonempty throughout.** The
uniform metric is defined only for nonempty `X` … so the topology of uniform
convergence is defined only there. The notion of uniform convergence itself makes
sense for `X = ∅` and is vacuous". So on the empty space the item asserted density
in an object the library declines to define. That is a defect in the Statement,
and a Statement defect is never 30-second.

**Repaired** by stating what is true rather than by excluding the case: the
Statement now leads with the pointwise condition — for every `f` and `ε>0` there
is `g ∈ L` within `ε` of `f` at every point, which is meaningful for every `X` and
vacuously true on `∅` — and adds that for nonempty `X` this is exactly density for
the topology of uniform convergence, naming the item that restricts it. Step 1.1
says the topological reading is not asserted on the empty domain and step 3.1
opens by assuming `X ≠ ∅`.

### F2 (c7-lattice) — `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` inherits F1 — **confirmed_fatal**

Same defect one level down: the Example said "`L` is uniformly dense in
`C(X,ℝ)`" for any compact metric space, empty included. **Repaired** the same way,
and `[L1]` now restates `thm-lattice-stone-weierstrass` in its repaired two-part
form.

### F3 (c7-real) — `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients` claims an isometry where no metric exists — **confirmed_fatal**

The Statement claimed the descent map is an "isometric unital algebra
isomorphism" for any compact Hausdorff `X`. On `X = ∅` the uniform metric is
undefined: `lem-uniform-metric-on-a-function-space` opens "Let `X` be a
**nonempty** set", and its distance is a supremum over `X`. The old step 2.2 said
"the empty case is the unique-function case", which establishes the bijection and
says nothing about a metric — the parenthetical looked like a disposition and was
not one.

**Repaired.** The Statement now asserts the unital algebra isomorphism for every
`X` and the isometry only for nonempty `X`; a new `[L8]` quotes the nonemptiness
hypothesis of `lem-uniform-metric-on-a-function-space`, which is added to `deps`;
step 2.2 separates the algebra-isomorphism claim from the isometry and disposes of
the empty case explicitly; and step 5.1's surjectivity argument was rewritten to
run pointwise (`|f(x) − g(q_A(x))| < ε`) instead of through a supremum, so it is
correct on the empty domain too. `ex-two-point-duplication-algebra-and-its-quotient`
`[L1]` and step 3.1 were updated to match — that example's domain `[0,1]` is
nonempty, so it still gets the isometric conclusion, but it now says why.

### F4 (c7-complex) — `def-self-adjoint-complex-function-algebra` equips a function space with a metric on the plane — **confirmed_fatal**

The Definition read "The space `C(X,ℂ)` consists of the continuous maps from `X`
to `ℂ` **equipped with the metric of** `def-complex-metric-convergence-and-continuity`".
That item's metric is `d_ℂ(z,w) = |z−w|` on `ℂ`. It is not a metric on
`C(X,ℂ)`, and the sentence is ill-typed as written. Because this Definition was
the only place the batch attempted to give `C(X,ℂ)` a metric structure, the words
"uniform closure" and "uniformly dense" in the complex theorem had no declared
meaning. Nothing downstream was *wrong* — every proof uses explicit `ε` estimates
— but a Definition stating a falsehood is a defect in reader-facing mathematical
content.

**Repaired.** The Definition now says `C(X,ℂ)` consists of the continuous maps
`X → ℂ` where **`ℂ`** carries `d_ℂ`, states outright that `d_ℂ` is a metric on `ℂ`
and not on `C(X,ℂ)`, and then defines uniform approximability, uniform closure and
uniform density by the `ε` condition on `d_ℂ` — available for every `X` — noting
that for nonempty `X` this coincides with `def-topology-of-uniform-convergence`
applied to `d_ℂ`. I added the same paragraph to
`def-unital-separating-real-function-algebra-general` so the real chain's
"uniformly dense" has a declared meaning as well, and added
`def-topology-of-uniform-convergence` to both definitions' `deps`.

### F5 (c7-complex) — `lem-real-part-...` step 2.1 never concludes continuity — **confirmed_nonfatal, polished**

The step gave `|u(x)−u(y)| ≤ d_ℂ(f(x),f(y))` and called it "consistent with their
continuity" without drawing the conclusion, while step 1.2 needs
`A_ℝ ⊆ C(X,ℝ)`. The refuter graded it inside the 30-second rule and I agree.
Polished now because step 8 will not allow it: step 2.1 concludes that `u` and `v`
are continuous into `ℝ`, by corestricting maps already continuous into `ℂ` along
the agreement of `d_ℂ` with the real metric on real values.

### F6 (c7-complex) — `thm-complex-stone-weierstrass-self-adjoint` step 4.1 uses an unquantified `ε` — **confirmed_nonfatal, polished**

Step 4.1 approximates "within `ε/2`" in the common-zero branch, but the only `ε`
introduced belongs to step 2.1's dense alternative. Quantifier hygiene, not a gap
in the inclusion. Polished: the step now opens "let `F ∈ I^ℂ_{x_0}` and let
`ε>0`" and closes "as `ε` was arbitrary".

### What c7-examples confirmed

The refuter reading the four repaired B-page items independently recomputed the
disc-algebra sampling identity, the `M_a·η/(2(M_a+1)) + K·η/(2K) < η` product
bound I wrote for R7-6, the `m = 0`/`N = 2` degenerate cases, the tent's
equality with its two-branch formula, and the `a<b` dependence of the polynomial
example, and reported **no defect**. That is the check I most wanted, because the
`PREVENTIONS` note records a repair that reproduced the defect it was meant to
fix.

### Three boundary rows were false, and each hid one of the fatal findings

`thm-lattice-stone-weierstrass`, `ex-distance-function-lattice-...` and
`thm-closed-real-function-algebras-...` each carried an `empty` row marked
`checked`. The first credited step 2.1, which runs only after nonemptiness is
assumed; the second called a conclusion "immediate" that had no meaning on the
empty domain; the third recorded the bijection and passed over the isometry. All
three now record the determination I actually made. `boundary-audit` had reported
no template reuse and no contradiction for all three — the rows were individually
written and individually wrong, which is the failure mode a clustering detector
cannot see.

---

## 4. Risk reviews

`risk-report` routes **14 of the 19** proof-bearing items — 12 CRITICAL, 2 HIGH.
All 14 now carry a complete `risk_review` written by me in
`research/frontier-14-batch-7.proof-contracts.json`, each naming what I checked
and what I determined, with the five amended after their refuter reported.
`risk-report --require-reviewed` → **0 errors, 19 items routed**.

Every one of the 19 proof-bearing items also went to a refuter, not only the 14
routed ones.

## 5. Harvest faithfulness — checked by extracting the sources, not by HTTP status

`coverage-checklist` is structural, and `url-sweep` reports 3/3 live; neither
tells you a locator is real. I downloaded all three sources and extracted their
text with `pypdf`:

| source | pages | extracted | locator verdict |
|---|---|---|---|
| Erdman, *A Companion to Real Analysis* | 265 | 648,206 chars | **faithful** |
| Xu / Mazzeo, Math 205B notes | 57 | 125,933 chars | **faithful; title was wrong** |
| Carlen, *Notes on Topology for Functional Analysis* | 21 | 48,402 chars | **faithful** |

- **Erdman.** Every harvested heading matches the source verbatim: 21.2.1 Example
  (polynomials on `[-1,1]`), 21.2.2 Definition (two-point duplication), 21.2.3
  Theorem (SW lattice version), 21.2.4 Proposition (closed subalgebra is a
  sublattice), 21.2.5 Proposition (separating unital ⟹ duplication), 21.2.6
  Theorem (real SW), 21.2.7 Corollary (Weierstrass approximation), 21.2.13
  Definition (self-adjoint), 21.2.14 Theorem (complex SW), 21.2.15 Theorem
  (generalized SW). I also confirmed 21.2.15 assumes a "closed **unital**
  subalgebra", which independently corroborates R7-2.
- **Carlen.** Theorem 1.26, Lemmas 1.27 and 1.28, the unnumbered complex
  counterexample, Theorem 1.29 and Theorem 1.30 (density of complex trigonometric
  polynomials) all present as harvested.
- **Xu / Mazzeo.** Theorem 9.3, Definition 9.4, Lemma 9.5, Theorem 9.6
  (Kakutani–Krein) all present, and the harvest's two honest annotations are
  accurate: Definition 9.4 really does define a lattice without the vector-space
  clause the scaffold adds, and Theorem 9.6's printed proof really does use that
  clause silently.

**One defect found and repaired.** The source was titled "Berkeley Math 205B
Notes". The PDF is *"MATH 205B NOTES — MOOR XU — NOTES FROM A COURSE BY RAFE
MAZZEO … at Stanford University"*; "Berkeley" occurs zero times in it, "Stanford"
once. It is hosted on a Berkeley personal page, which is presumably how the
attribution arose. Corrected to "M. Xu, Math 205B notes from a course by R.
Mazzeo (Stanford)" in `research/frontier-14-batch-7.coverage.json`,
`research/frontier-14-batch-7.notes.md`, and the four item `sources.references`
blocks that carried it (`def-separating-real-function-lattice`,
`lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice`,
`thm-lattice-stone-weierstrass`, `thm-real-stone-weierstrass-general`).

**One locator gap closed.** The Erdman locator declared "items 21.2.1–21.2.7 and
21.2.13–21.2.15 in full; items 21.2.8–21.2.12 are outside the claimed range".
That is a complete harvest of the declared range and the gate passed on it, but
the excluded run is exactly where Erdman's *applications* of Stone–Weierstrass
sit, so the exclusion was invisible rather than reasoned. I read 21.2.8–21.2.12
from the extracted text and gave each an explicit disposition, widening the
locator to §21.2 in full: 21.2.8 (separability of `C([a,b])`) `out-of-scope`,
21.2.9 (the moment criterion) `deferred`, 21.2.10 (differentiable functions with
`f'(1/2)=0` are dense) `deferred`, 21.2.11 and 21.2.12 (open-ended exercises)
`out-of-scope`, each with a reason about that specific result. The harvest is now
33 rows and every one of Erdman's §21.2 headings is dispositioned.

## 6. Gates, after every repair

Batch-scoped, all run against the final disk state:

```
precheck            19 checked, 0 failing — all clean   (24 items; 5 definitions are n/a)
proof-contract      0 error(s), 0 warning(s), 19/19 item(s) checked          [--strict]
citation-fidelity   109 citations over 19 items; QUOTE NOT FOUND — none;
                    WIDENING CANDIDATES — none                    [--fail-on-missing-quote]
boundary-audit      152 rows, 61 not_applicable; TEMPLATE REUSE — none;
                    CONTRADICTED DISPOSITIONS — none            [--fail-on-contradicted]
risk-report         0 error(s), 19 item(s) routed                  [--require-reviewed]
finite-smoke        0 error(s), 0 check(s)
coverage-checklist  1 page(s), 33 harvested result(s), 0 error(s), 0 warning(s)
content-policy      24 scoped item(s), 0 error(s), 0 warning(s)
url-sweep           3/3 live; 0 failed; 0 recoverable       [--recover --fail-on-dead]
depcheck            OK — no cycles, all references resolve, no draft items on published pages
fwdcheck            OK — every forward reference is declared and points strictly forward
extcheck            OK — every recorded-not-proved statement is a cited remark
```

The contract was re-synced from disk after every repair. Along the way the strict
gate caught two things worth recording, both of which it is supposed to catch and
did:

- 79 errors immediately after my first round of repairs, because new facts,
  renumbered facts and rewritten steps were not yet in the contract. Fixed by
  regenerating `citations` and `derivations` from the item text.
- 8 `citation-quote-mismatch` errors after the empty-domain repairs, because I had
  edited the Statement or Definition of three items that **other** items quote.
  Fixed by refreshing only the quotes that no longer occurred in their cited item,
  so clause-level quotes elsewhere kept their precision.

**`finite-smoke` reports zero checks for batch 7, and that is the correct
disposition, not a vacuous pass.** `finite-smoke.mjs` runs a fixed registry of
named checks — graphs, posets, cyclic subgroups, binomial congruences, Vieta,
linear recurrences, matrix rings mod `n` — and the tool's own comments record that
a contract may reference a registered check but cannot define one, and that
extending the registry is the orchestrator's job. Nothing in the registry applies
to function algebras on a compact Hausdorff space, so attaching one would
manufacture coverage rather than test anything. **For the orchestrator:** this is
level-wide, not batch-7-specific — across all seven batches there is exactly
**one** `finite_smoke` row (in batch 5), so `finite-smoke` is green on
`frontier-14` while testing essentially nothing.

## 7. Per-page verdict

- **`stone-weierstrass-general` (A, 18 items) — passes, after repair.** Fatal
  findings R7-1, R7-2, R7-3, F1, F3, F4 all repaired; nonfatal F5, F6 and the
  cover-sweep choice-scope looseness polished; R7-10 repaired by restructuring.
  Every item precheck-clean, contract-complete, and risk-reviewed where routed.
- **`stone-weierstrass-general-examples` (B, 6 items) — passes, after repair.**
  Fatal R7-4 and F2 repaired; nonfatal R7-5, R7-6, R7-7, R7-9 and polish R7-8,
  R7-11, R7-12 all repaired rather than deferred to step 8. An independent refuter
  reading the repaired text found no defect.

## 8. Counts

- **Reader findings adjudicated: 12** (`R7-1 … R7-12`) — 4 `confirmed_fatal`,
  4 `confirmed_nonfatal`, 3 `confirmed_polish`, 1 nonfatal that I repaired in
  full because the claim it left unproved sits in a Statement. **No false
  positives**: every one of reader 7's findings was real.
- **Refuter findings adjudicated: 6** — 4 `confirmed_fatal`, 2
  `confirmed_nonfatal`. No refuter finding was refuted.
- **Findings I raised myself: 3** — 1 fatal (the `[L5]` fact line narrower than
  the step citing it), 1 nonfatal (the cover-sweep selection), 1 citation-precision
  defect (the misattributed source).
- **Total adjudicated: 21. Items repaired: 14 of 24, plus one page file.**

## 9. What I could not check, and what I am handing on

- **I did not verify the other batches' reader task files.** The wrong-output-path
  bug in `frontier-14-reader-7.task.md` is the kind that repeats; batches 1–6
  should be checked before their reports are trusted. Reader 1's report is intact
  and reader 6's was written to its own correct path, so at minimum those two are
  fine.
- **`finite-smoke` coverage is a level-wide gap** (§6) and only the orchestrator
  can extend the check registry.
- **I did not touch anything outside batch 7.** No published item was edited, so
  the obvious-published-dependency delegation was not used and no
  `published-dependency-repairs` record was needed. `impact-audit` is not mine to
  run at 6b; nothing in batch 7 changed a published public interface.
- **The empty-domain class is worth a level-wide sweep.** Three of the four fatal
  refuter findings were the same defect: a Statement that includes `X = ∅` while
  using a metric, supremum or topology the library defines only on a nonempty
  domain. Batch 7 is unlikely to be the only place a `C(X,·)` statement does this,
  and no gate detects it — `boundary-audit` passed all three items clean.
