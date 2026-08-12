# Run `frontier-12` — Alpha stage-0 scaffold review (step 3)

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** all 11 A/B pairs across 7 batches.
**Authored nothing; edited no batch file.** Findings are returned for the
orchestrator to route to the owning Beta; I re-check before the step-4 splice.

**No blocker this run.** Unlike `frontier-11`, `WebFetch` was available, so
criterion 2 (harvest faithfulness) was actually performed: I opened sources at
their stated `locator` — HTML directly, PDFs via a local `pypdf` extraction —
and compared what the range contains against what `coverage.json` claims. Every
faithfulness finding below is backed by the source text, quoted or enumerated.

---

## 1. Verdict table

| batch | pair | A+B | verdict |
|---|---|---|---|
| 1 | `the-field-of-fractions-and-localisation` (53.2) | 22+8 | **sufficient** |
| 1 | `splitting-fields` (56) | 15+8 | **insufficient** — 3 named additions |
| 2 | `composition-series-and-solvable-groups` (66) | 27+10 | **sufficient** |
| 2 | `free-modules-and-exact-sequences` (104) | 29+10 | **sufficient** |
| 3 | `eigenvalues-…-characteristic-polynomial` (86) | 19+7 | **insufficient** — 3 named additions |
| 3 | `dual-spaces-bilinear-forms-and-inertia` (92) | 33+12 | **sufficient** |
| 4 | `pi-the-equivalent-characterizations` (183) | 12+7 | **insufficient** — 2 named additions |
| 4 | `line-integrals-and-the-gradient-theorem` (241) | 31+9 | **sufficient** |
| 5 | `finite-probability-spaces-and-random-variables` (220.2) | 37+8 | **insufficient** — sourcing, not content |
| 5 | `finite-probability-and-the-probabilistic-method` (221) | 28+6 | **sufficient** |
| 6 | `complex-differentiability-and-cauchy-riemann` (303) | 28+13 | **sufficient** |
| 7 | `limits-and-colimits` (363) | 46+17 | **sufficient** |

Four pairs `insufficient`, seven `sufficient`. Splice-blocking work is confined
to batches 1, 3, 4 and 5.

**Mechanical baseline.** `research/frontier-12-splice.mjs --dry` merges all seven
manifests into a scratch spec; `validate-plan.mjs` on that spec is **exit 0 over
442 items across 244 item-bearing pages** — no `size`, `undeclared-prereq`,
`forward-ref`, `b-leaf`, `dup-id`, item cycle, or unresolved id. The one hard
error of record at step 2 (D1's `size`) is discharged. The 310 `redundant-prereq`
warnings are pre-existing on other pages.

**Presentation is untouched.** `git status --porcelain` shows no file outside
`research/`. No Beta edited a renderer or app-repo file. Batch 6's new
`complex-analysis` category is content only and renders on the existing neutral
fallback, as step 0 recorded.

---

## 2. The two run-specific obligations

### 2.1 D10 — batch 1 can carry the published wiring. Confirmed.

The step-9 wiring needs four citable **A-page** items with stable ids. All four
are on the A page at 53.2, none on the B page, so no `b-leaf` risk:

| needed | scaffolded id | page |
|---|---|---|
| construction of `Frac(D)` | `def-field-of-fractions` | A (53.2) |
| it is a field, `D` embeds | `thm-field-of-fractions-is-a-field-and-the-domain-embeds` | A |
| universal property | `thm-universal-property-of-the-field-of-fractions` | A |
| `ℝ(t) = Frac(ℝ[t])` as a named result | `cor-rational-function-field-as-a-fraction-field` | A |

The last one states it explicitly — *"For a field $F$, $F(t)=\operatorname{Frac}(F[t])$
… in particular $\mathbb R(t)=\operatorname{Frac}(\mathbb R[t])$"* — so the
order-9 counterexample's load-bearing forward reference and the order-125
example's ordinary `deps` edge both land on a named A-page target. The
construction is also genuinely built rather than assumed: `def-multiplicative-subset-and-localisation`
→ `thm-localisation-equivalence-and-ring-laws` → `prop-localisation-zero-equality-and-kernel-criteria`
→ the field-of-fractions specialisation, with the domain hypothesis entering at
exactly one place (`cex-nonzero-elements-of-a-ring-need-not-form-a-multiplicative-set`
on the B page marks that boundary). **No step-3 action needed for D10.**

### 2.2 Batch 6 founds `complex-analysis` on the ℂ that is on disk. Confirmed.

The scaffold's opening item is `rem-complex-plane-euclidean-dictionary`:
*"$\mathbb C=\mathbb R[x]/(x^2+1)$ as the Euclidean plane and as a normed real
algebra: what the identification preserves."* That is the construction actually
published in `field-extensions-and-the-complex-numbers` (`def-complex-numbers-and-arithmetic`,
`thm-complex-numbers-are-the-real-coordinate-plane`), which the page declares in
`requires`. The convention 53 downstream pages inherit is therefore pinned to
disk, not to a remembered construction. This is the right instinct and it is the
reason batch 6 is the strongest-sourced pair in the run.

---

## 3. Rulings on D1–D9, by name

### D1 — the probabilistic-method split. Applied correctly; seam verified independently.

`plan-spec.json` carries `finite-probability-spaces-and-random-variables` at
**220.2** and its companion at **220.4**; `finite-probability-and-the-probabilistic-method`
keeps id and order **221**, companion 222. Batch 5's manifest partitions 37/8 and
28/6, and the cut falls after `cor-relative-variance-positive-probability-bound`
as approved.

The failure mode a split can cause is a dependency that now points forward across
the new seam. I checked this independently of the Beta: in the merged scratch
spec, `validate-plan` performs the item-level forward-reference check across all
244 item-bearing pages and reports **no `forward-ref` and no `undeclared-prereq`**.
Direction is also right by construction — 221 declares 220.2 in `requires`, so
every method-page citation of a foundations item is a backward edge, and the
foundations page declares only `the-logarithm-and-general-powers`, so it cannot
reach 221 at all.

One consequence of the cut that is *not* a defect but should be recorded: page
222's `ex-second-moment-bound-for-a-nonempty-random-subset` uses the
second-moment theorems, which the split moved to 220.2. That is legal — 220.2 is
in 222's closure through 221 — but it is the one edge that crosses the seam in a
B page, so it is worth a Beta re-read at step 5 rather than an assumption.

**D1: no further action.** See §4.5 for a separate finding about page 220.2 that
the split created but did not cause.

### D2 — Green's theorem. Built, and built at the scope the decision fixed.

Batch 4 re-scaffolded order 241 from 23 to **31 A items** and added the machinery
in the order the decision required:

- `def-type-i-type-ii-and-elementary-green-regions` — the hypothesis is a
  *definition on the page*, not an adjective in a theorem statement;
- `def-positive-orientation-for-elementary-region-boundaries`;
- `lem-green-type-i-boundary-identity`, `lem-green-type-ii-boundary-identity` —
  the two halves proved separately rather than as one monolith;
- `lem-green-boundary-cancellation-under-finite-gluing` — the finite-union step
  is its own lemma, which is where a hand-wave would otherwise hide;
- `thm-greens-theorem-for-finite-unions-of-elementary-regions` — the theorem is
  *named* for its hypothesis class, so a reader cannot mistake its reach;
- `cor-area-as-a-line-integral-for-elementary-regions`.

The limitation is named rather than left implied, in a dedicated item:
`rem-greens-theorem-jordan-domain-limitation` — *"arbitrary Jordan domains are
not covered by the elementary Green theorem."* That is exactly what the decision
demanded, and putting it in a `rem-` item rather than a parenthesis means it
renders to readers. `requires` reads
`[the-fundamental-theorems-of-calculus, arc-length-and-rectifiable-curves, fubini-and-change-of-variables]`
as decided, and the merged spec validates.

**D2: correctly applied. No action.** One precision note carried to §4.4: the
Donaldson source is a two-page course handout whose Green proof is explicitly
*"A Sketch Proof"*; it is fine as a corroborating source but must not be the
clause the local proof cites for a step.

### D3 — `splitting-fields` at 15 items. The core is complete; the normality development is not. **insufficient.**

I verified Milne's range against the PDF and Judson's against the live HTML.

**The core development is present and is not thin.** Against Judson §21.2 and
Milne §2 (pp. 28–31, opened and read), the scaffold has: the definition;
Kronecker's one-root step; existence; finite families; the composite; transport
along field isomorphisms; extension across a simple root adjunction; extension to
splitting fields; uniqueness; the factorial bound; the roots of $x^n-a$;
endomorphisms permute roots and are automorphisms. Every main theorem of both
sources' ranges is there. 15 items is a correct slice, not an inattentive one —
the pair-level count is misleading because `the-field-of-fractions-and-localisation`
had to build a construction from nothing while `splitting-fields` inherits a rich
order-54 page.

**The factorial bound is the right call and deserves saying so.** Milne
Proposition 2.7 reads *"Every polynomial $f\in F[X]$ has a splitting field $E_f$,
and $[E_f:F]\le(\deg f)!$"*. The library has no extension degree as a vector-space
dimension at order 56 — `algebraic-extensions-degree-and-finite-fields` is order
**96**, and linear algebra begins at 72, so declaring it would be a forward
reference and building it would be a land-grab on two pages. The scaffold's
`thm-factorial-coordinate-bound-for-a-splitting-field` — *"spanned over $F$ by at
most $n!$ explicit root monomials"* — is a faithful weakening that preserves the
bound's content without asserting a dimension the library cannot define. Keep it.

**Where the page is genuinely short: normality.** Three items
(`def-normal-algebraic-extension`, `prop-algebraic-splitting-extensions-are-normal`,
`prop-finitely-generated-normal-extensions-are-splitting-fields`) rest on a
**two-row harvest** of the only source that carries normality, and that harvest's
locator is *"Section 9.15 opening splitting paragraph and Definition 9.15.1 only,
stopping before Lemma 9.15.2."* I opened tag 09HL: the section continues
9.15.2 … 9.15.10. **The locator stops immediately before every result in a
section titled "Normal extensions."** That is the `group-actions-and-cayleys-theorem`
failure shape — citing a source for its title and harvesting only its definition —
and `coverage-checklist.mjs` cannot see it, because both listed rows are disposed.

**Required additions, with the source that carries them:**

1. **Normality passes to intermediate fields.** *If $K/F$ is normal and
   $F\subseteq E\subseteq K$, then $K/E$ is normal.* — **Stacks Project, tag
   09HN (Lemma 9.15.2)**, same section, same URL as the source already in the
   ledger. Buildable at order 56 from published items only: for $\alpha\in K$ the
   minimal polynomial over $E$ divides the minimal polynomial over $F$
   (`thm-evaluation-kernel-and-minimal-polynomial`), which splits in $K$ by
   normality, and a divisor of a split polynomial splits by unique factorisation
   in $K[x]$ (`thm-polynomial-ring-over-a-field-is-a-ufd`). This is the
   workhorse every later field page will cite.
2. **Intersections of normal subextensions are normal.** — **Stacks Project, tag
   09HP (Lemma 9.15.3)**. Same range. Proof from unique factorisation in a common
   ambient extension; four lines given item 1.
3. **The generation criterion for normality.** *If $E/F$ is generated by elements
   whose minimal polynomials split completely in $E$, then $E/F$ is normal.* —
   **Stacks Project, tag 0BR3 (Lemma 9.15.6)**. This removes the finiteness
   restriction the scaffold currently carries in
   `prop-finitely-generated-normal-extensions-are-splitting-fields`. If the
   reduction from an arbitrary generating set to a finite one costs a
   finite-support lemma for generated subfields that the library does not have,
   **record it as a `deferred` row naming that exact missing lemma** — it must
   not simply be absent.

**Also required:** extend the 09HL `locator` to cover 9.15.2 through 9.15.10 and
give **every** heading in it a disposition. 9.15.4, 9.15.5, 9.15.7, 9.15.8,
9.15.9 and 9.15.10 will legitimately decline (separable degree, algebraic
closure, `Aut(E/F)` counting — all order-96 or later), but each needs its own row
and its own reason.

### D4 — `pi-the-equivalent-characterizations` at 12 items. **insufficient.**

Verified Lebl §11.4 against the live HTML and the Imperial and Keisler ranges
against their PDFs.

**One decline I can now confirm as correct rather than assume.** The Beta
declined Lebl Proposition 11.4.2(11) (complex-exponential periodicity) because it
is *"not in either declared prerequisite closure."* This looked like the D2
situation — a `requires` edit the Beta was forbidden to make and the orchestrator
is not. It is not: `the-complex-exponential-and-eulers-formula` is at order
**189**, *after* 183, so declaring it would be a hard `forward-ref`, and no
orchestrator edit can fix it. The Euler characterization of $\pi$ is already
published six orders later (`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
`thm-kernel-and-fibres-of-complex-exponential`), so nothing is lost to the
library. **Decline upheld.**

**Required addition 1 — the Archimedean characterization is absent from the
scaffold, from every source's `contents`, and from the page's own ledger.**
I asked Lebl §11.4 directly: it *"does not discuss inscribed or circumscribed
polygons or the limit $n\sin(\pi/n)$."* Neither does Keisler §4.4 nor the
Imperial handout. Yet `thm-pi-equivalent-characterizations-ledger` claims to
reconcile *"the zero, period, arc-length, area, circumference, series, and
product characterizations"* — and the oldest characterization of $\pi$, the one
the word *"circumference"* historically means, is missing from the list.

Add: **the perimeters $2n\sin(\pi/n)$ of inscribed regular $n$-gons increase to
the unit circle's circumference $2\pi$, and the circumscribed perimeters
$2n\tan(\pi/n)$ decrease to it.** This is not an import — it is the library's own
definition of arc length specialised to the circle. `arc-length-and-rectifiable-curves`
(order 181, published, already in `requires`) defines length as the supremum of
polygonal lengths (`def-path-polygonal-length-and-rectifiability-in-rn`) and
proves refinement monotonicity (`lem-polygonal-length-is-monotone-under-refinement`);
the inscribed regular $n$-gon *is* the polygonal approximation at the uniform
partition, its perimeter is $2n\sin(\pi/n)$ by the published chord formula, and
convergence is `cor-sin-x-over-x-limit` (published, order 179). The circumscribed
bound follows from `thm-tangent-cotangent-secant-cosecant-derivatives-and-periods`.
Every input is on disk. Under the self-contained rule this is a thing to build,
not to omit, and it belongs in the ledger item. Record it as a `canonical` row
and source the statement — Archimedes' polygon method is in every history-of-
analysis treatment, and the Imperial handout's Question 1 already motivates
Viète's product by *"finite polygon-area approximation"*, which is the same idea
one dimension over.

**Required addition 2 — a decline whose reason does not survive checking.** The
harvest declines the Imperial handout's *"Question 3 final note, de Moivre's
central-binomial asymptotic"* as `out-of-scope`, reasoning that it *"requires
machinery beyond the Wallis recurrence."* It does not. The scaffold's
`lem-wallis-integrals-recurrence-and-squeeze` already supplies the double-factorial
closed forms, and from the Wallis partial product
$W_N=\bigl[(2N)!!/(2N-1)!!\bigr]^2/(2N+1)\to\pi/2$ one gets
$(2N-1)!!/(2N)!!\sim1/\sqrt{\pi N}$, and $\binom{2N}{N}/4^N=(2N-1)!!/(2N)!!$, so
$\binom{2N}{N}\sim4^N/\sqrt{\pi N}$. Three lines of algebra from an item already
on the page. Add it as a corollary of `thm-wallis-product-for-pi`, or replace the
reason with one that is true.

**Two bookkeeping fixes on the same page:**

- **The Basel problem gets no row at all.** $\zeta(2)=\pi^2/6$ is a standard
  characterization-adjacent result and appears in no source's `contents` and in
  no disposition. It is genuinely homed elsewhere — `the-riemann-zeta-function`
  at order **345** — so the correct disposition is `deferred` naming that page.
  A missing row is what makes a result unrecoverable; that is the D10 pattern the
  run exists to close.
- **A misquoted source statement.** The harvest row reads *"Proposition 11.4.2(9),
  the inequality $|\sin x|\le|x|$"*. Lebl actually states *"For all $x\ge0$,
  $\sin(x)\le x$"* — one-sided, and not an absolute-value inequality. The row is
  `out-of-scope` so nothing rests on it, but citation fidelity binds the harvest
  as much as a `[F#]` fact.

**On the sourcing.** Rule (a) is satisfied — Lebl *Basic Analysis II* and Keisler
*Elementary Calculus* are both textbooks. But the third source is a **two-page
problem-set solution sheet**, and it is the sole backing for two of the page's
three analytic characterizations (Viète and Wallis). That is thin for load-bearing
material. Add a second treatment for the Wallis product; it is in every standard
analysis text and the Beta should not be resting a headline theorem on a
solutions handout alone.

### D5 — batch 3's asymmetry. Explained by the plan, not by attention. Cayley–Hamilton is correct. But §12.3 was skipped. **eigenvalues insufficient; dual spaces sufficient.**

**The asymmetry is justified and I verified it against `plan-spec.json` rather
than assuming it.** Order 86 is followed by `diagonalisation-and-the-minimal-polynomial`
(88) and `triangularisation-and-jordan-canonical-form` (90). Diagonalisability
and the minimal polynomial are those pages' declared subject, and the Beta's four
`deferred` rows say exactly that and name order 88. Order 92, by contrast, has no
successor to share with: `inner-product-spaces-and-orthogonality` (94) is a
different subject, so duals, transposes, bilinear, sesquilinear and quadratic
forms, orthogonal bases, symplectic normal form, Sylvester's law and Sylvester's
criterion all have to land on one page. **19 versus 33 is the plan's shape, not a
Beta's inattention.**

**Cayley–Hamilton's route is correct, and the classic pseudo-proof is explicitly
guarded against.** `thm-cayley-hamilton` takes the adjugate route over $F[x]$ —
expand $\operatorname{adj}(xI-A)=B_0+\dots+B_{n-1}x^{n-1}$, apply the published
`thm-adjugate-identity-over-a-commutative-ring`, compare matrix coefficients and
telescope — and its strategy ends *"This never treats substitution of $A$ into an
arbitrary matrix-coefficient polynomial as a ring homomorphism."* The B page then
carries `fs-matrix-polynomial-substitution-is-a-ring-homomorphism` as a
false-statement item, so the trap is documented for readers rather than merely
avoided. This is exactly what the decision asked for. **Confirmed correct.**

A page-boundary note for the orchestrator, not a Beta fix: `plan-spec.json` titles
order 88 *"Diagonalisation, the Minimal Polynomial and **Cayley-Hamilton**"*,
while batch 3 homes Cayley–Hamilton at 86. Proving it at 86 is the better call —
the adjugate route needs only determinants and cofactors, both published at 82/84,
and order 88 will want to cite it for minimal-polynomial divisibility. But page
88's title should be reconciled, or a future Beta will scaffold it twice.

**Where the page is short — and this one is a real harvest failure.** The Pinkham
locator reads: *"section 12.1 from Definition 12.1.1 through Example 12.1.9 …
section 12.2 through Theorem 12.2.1 … and section 12.4 through Theorem 12.4.1."*
I extracted the PDF. Chapter 12 runs §12.1, §12.2, **§12.3**, §12.4. The locator
**jumps over §12.3 entirely**, and §12.3 contains four numbered results, none of
which receives a row or a disposition anywhere in `coverage.json`:

- **Theorem 12.3.1** — the trace of $A$ is the sum of the eigenvalues counted
  with multiplicity;
- **Theorem 12.3.2** — the determinant of $A$ is the product of the eigenvalues
  counted with multiplicity;
- **Theorem 12.3.3 (Spectral Mapping Theorem)** — the eigenvalues of $p(A)$ are
  $p(\lambda_i)$;
- **Corollary 12.3.4**.

**Required additions:**

1. **Trace and determinant as eigenvalue sum and product**, under the hypothesis
   that $\chi_T$ splits over $F$ — **Pinkham, *Linear Algebra*, Theorems 12.3.1
   and 12.3.2** (PDF p. 243), a source already in the pair's ledger. This is a
   two-line corollary of items already scaffolded:
   `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients` already
   identifies the $x^{n-1}$ coefficient as $-\operatorname{tr}(A)$ and the
   constant term as $(-1)^n\det(A)$; comparing with the factored form over a
   splitting $\chi_T$ gives both. Leaving the coefficients computed but never
   connected to the eigenvalues is depth loss in the precise sense of criterion 5.
2. **The Spectral Mapping Theorem** — **Pinkham Theorem 12.3.3 and Corollary
   12.3.4** (PDF p. 243). The page already has
   `def-polynomial-evaluation-at-an-endomorphism`, and this is the natural
   companion of Cayley–Hamilton and of
   `cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator`.
3. **Extend the Pinkham `locator` over §12.3 and dispose every heading in it.**

**A citation-fidelity defect on the same source.** The harvest row reads
*"Theorem 12.1.3, triangular characteristic polynomial **and independence of
eigenvectors for distinct eigenvalues**"* and maps it to
`thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`. Pinkham's
Theorem 12.1.3 is *"The characteristic polynomial of an upper or lower triangular
matrix is …"* — it says nothing about linear independence of eigenvectors. Two
consequences: `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`
has **no genuine source row**, and `lem-characteristic-polynomial-of-block-triangular-matrix`
— which is what 12.1.3 actually supports — appears in the scaffold with no
coverage row at all. Split the row in two and map each to the item it really
carries.

**`dual-spaces-bilinear-forms-and-inertia`: sufficient.** 33 items covering
Pinkham ch. 6–7 and three Conrad/Kuan note ranges, with 49 `included` rows, only
2 unmapped A items, and a 12-item B page that marks the characteristic-2
boundary in three separate counterexamples. The infinite-dimensional dual is
handled honestly (`thm-dual-family-does-not-span-in-infinite-dimension`,
`thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional`), and
choice hypotheses are stated on the items that need them rather than assumed.

### D6 — batch 1's 22 declines of 87. Substantively right; two reasons name destinations that do not exist.

The 25% rate is an artifact of **position in the reading order**, not of effort.
Batch 1 sits at orders 53.2 and 56 — the two earliest pages in the run — so far
more of what its sources contain is genuinely downstream of it. Batch 7 sits at
363 with Riehl chapter 3 as its exact subject and almost nothing downstream, so
it declines 5 of 135. Comparing the rates directly compares positions, not
diligence.

Checking the declines themselves:

- **The 11 module-localisation deferrals are correct in substance.** Every one is
  a *module* analogue of a ring result the page does build (module localisation,
  its universal property, exactness, the filtered-colimit description, submodule
  correspondence). Modules are homed at `modules-and-module-homomorphisms`,
  order **102** — 49 pages downstream of 53.2 and unreachable. This is the
  "material genuinely belonging to another page's topic" case the 2026-08-11 rule
  preserves, not the "build the missing prerequisite" case it closed.
- **But three of those reasons name the wrong destination, and it is a
  destination this run is building.** They read *"belongs with scalar extension
  on the planned free-modules-and-exact-sequences page"*, *"preserved for the
  free-modules-and-exact-sequences treatment"*, *"full module exactness belongs
  on free-modules-and-exact-sequences"*. That page is **order 104, batch 2 of
  this very run** — and I read its scaffold: it contains no module localisation,
  and it cannot, because 53.2 is not in its `requires` closure and the run's
  cross-batch seams are zero by construction. So module localisation is currently
  homed **nowhere in `plan-spec.json`**. The `coverage.json` rows keep it
  recoverable, which is what matters, but the reasons must be corrected to say so
  rather than pointing at a page that will ship without it. **Route to the
  orchestrator as well as the Beta:** its natural future home is
  `tensor-products-of-modules` (106), where $S^{-1}M=S^{-1}R\otimes_R M$ is the
  standard treatment.
- **The 2 CRing `out-of-scope` rows are correct.** The infinite-variable
  polynomial presentation genuinely needs a polynomial ring on an arbitrary index
  set, which the library does not have; corepresentability of the units functor
  genuinely needs representable functors, which arrive at 363.
- **The 9 splitting-field declines are correct in substance.** Milne 2.6's exact
  degree dichotomy, 2.12, 2.14 and 2.15 all turn on general extension degree and
  the tower law, assigned to order 96 and unreachable. Arbitrary-family existence
  and algebraic closure genuinely need either Artin's infinite-variable
  polynomial ring or a transfinite construction; Zorn is available, the
  polynomial ring is not, so the decline is honest — but the reason should name
  that blocker rather than "an entire subject."
- **One reason is factually wrong about the plan.** Milne Example 2.8
  (cyclotomic splitting fields) is declined as belonging to *"the Galois track."*
  There is no Galois track: I enumerated all 74 `abstract-algebra` pages in
  `plan-spec.json` and **no page anywhere homes Galois theory, cyclotomic fields,
  or the algebraic closure.** The disposition should stand as `deferred` with a
  reason that says the truth — no page currently homes it — which is what keeps
  the row recoverable and flags the plan gap to the owner.

**D6 verdict: the declines are real; two reasons are not. Correct the reasons;
add no results on this account.** The splitting-fields additions in D3 are a
separate finding about a truncated locator, not about the decline rate.

### D7 — two pairs with no textbook or monograph. Batch 2 passes. Batch 5 does not.

The rule accepts *"a full lecture-note set with a harvestable table of contents"*,
so both are legal on their face. The test that matters is §6b.0 criterion 4:
does anything standard in the pair's development appear in **no** source's
`contents` at all? I ran that mechanically across all seven batches by checking
which scaffolded items are the target of no `included` coverage row.

**`composition-series-and-solvable-groups` (batch 2): passes.** Milne's *Group
Theory* is a 130-page course-notes set with a full table of contents; I opened
chapter 6 in the PDF and confirmed it runs Example 6.1 through Theorem 6.31, that
the declared range *"through Corollary 6.17"* is a real boundary, and that what
lies past it — Theorem 6.18 (finite nilpotent = direct product of Sylow
subgroups), Theorem 6.23, the groups-with-operators material, Krull–Schmidt — is
either homed at `sylow-theorems-and-nilpotent-groups` (order 70, whose title
literally names it) or a separate topic. Conrad's *Subgroup Series I* supplies 26
more headings over Theorem 4.13–5.7. The sources' subject **is** the page's
subject, and the 27+10 scaffold covers Jordan–Hölder, Zassenhaus, Schreier, the
derived series, solvability, and both central series with a 10-item B page
carrying five false-statement items. Sufficient.

*Bookkeeping only:* six A items and five B items carry no coverage row
(`thm-every-finite-group-has-a-composition-series`, `def-characteristic-subgroup`,
`def-derived-series-solvable-group-and-derived-length`,
`lem-homomorphisms-respect-commutators-and-derived-series`, and others) even
though Milne 6.9 and 6.10 plainly carry the characteristic-subgroup and
derived-series material and sit inside the declared range. Complete the mapping;
do not add results.

**`finite-probability-spaces-and-random-variables` (batch 5): fails.** See §4.5 —
this is the run's clearest criterion-4 finding and it is the D7 pattern exactly.

### D8 — batch 4 lists Lebl three times. Legal, but the presentation overstates the backing.

After the Green's-theorem rebuild the pair has **five source entries and three
independent treatments**: Lebl *Basic Analysis II* (three separate section
ranges — `sec_pathintegral`, `sec_pathind`, `sec_mvgreenstheorem`), Campesato's
Poincaré-lemma notes, and Donaldson's Math 2E handout. Rule (a) is satisfied —
Lebl is a textbook and there are two other treatments — so nothing is blocked.

But three entries of one work read as three treatments in any count, and this is
now a run-wide pattern, not a batch-4 quirk: batch 2 lists the Stacks Project
**four** times (tags 05CD, 01D6, 01D8, 07JV) as four of its six sources.

**Ruling: one work, one source entry, with a compound `locator` naming every
range read.** Nothing is lost — the `contents` array already carries the headings
— and the independent-treatment count stops being inflated by a factor of three.
Apply to batch 4 (Lebl ×3) and batch 2 (Stacks ×4).

### D9 — the Stacks Project's classification. It is a **monograph**. Uniformly.

Currently: `monograph` in batch 1 (tag 00CM) and batch 2 (four tags),
`reference-work` in batch 1 (tag 09HL) and batches 3 and 7. Batch 1 classifies
the same publication both ways inside a single artifact.

The tier distinction is load-bearing for one reason only: a `reference-work` can
never be a pair's primary backing, because the rule wants primary backing to be a
source that **develops a subject linearly and has a harvestable table of
contents**. The Stacks Project does exactly that, and I verified it rather than
asserting it: tag 00CM is Section 10.9, and it runs Definition 10.9.1, Definition
10.9.2, Proposition 10.9.3, Lemma 10.9.4, … Lemma 10.9.16 in order, with
Example 10.9.8 carrying four numbered sub-examples. That is a chapter of a
treatise, not an entry in an encyclopedia.

`reference-work` should be reserved for **entry-based, alphabetically organised
sources** — Wikipedia, the Encyclopedia of Mathematics, PlanetMath, nLab — which
the source-depth rule already confines to convention tiebreakers.

**Ruling: `monograph`, in all four places.** Two things this does **not** change,
and both should be said plainly so the precedent is not misread:

- It does not rescue batch 1's `splitting-fields`. There the Stacks entry is a
  **two-heading truncation**, and a monograph harvested at two headings is not
  primary backing in substance whatever its `kind` field says. Judson is that
  pair's textbook and the D3 finding stands unchanged.
- It does not make batch 7's Stacks entry primary either — Riehl and Leinster
  are its textbooks. The reclassification is about the precedent, not about any
  pair's legality this run.

---

## 4. Split rulings

The 60-item ceiling is `validate-plan` error `size`, on the **A page**. I rule
explicitly on all three candidates the brief named, and on the pair D1 already
split.

### 4.1 `finite-probability-and-the-probabilistic-method` — already split by D1. **No further split.**

37 and 28 A items. Both comfortably under. The cut is at the right seam:
everything up to and including the classical inequalities and the second-moment
bound is the foundation; everything from `thm-positive-probability-existence-principle`
onward is the method. **Correct as applied.**

### 4.2 `complex-differentiability-and-cauchy-riemann` — **no split.**

28 A + 13 B. Not close to the ceiling, and splitting would be actively wrong: the
page's four blocks — the Cauchy–Riemann characterization, the derivative calculus,
conformality, and harmonicity — are mutually supporting, and the conformality
block depends on `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`
in the same way the harmonicity block does. Cutting between them would put a
seam through the one theorem the whole page turns on, and it would fix the ℂ
conventions for 53 downstream pages in two places instead of one.

### 4.3 `limits-and-colimits` — **no split.**

46 A + 17 B. Under the ceiling with 14 items of headroom, and the page is exactly
Riehl *Category Theory in Context* chapter 3. I verified the chapter's extent
against the book's own table of contents: chapter 3 is printed pp. **81–130**,
sections **3.1–3.8** — precisely the locator's claim — and all eight sections are
represented in the scaffold (universal cones; Set limits; functoriality;
preservation, reflection, creation; the representable nature of limits;
completeness; matters of size, including
`thm-cardinality-sized-products-or-coproducts-force-a-preorder`; interactions,
including filtered colimits commuting with finite limits). Splitting a single
textbook chapter that develops one universal property in eight coordinated
passes would cost more in cross-page citation than it saves.

**One condition.** Batch 4 grew from 23 to 31 A items during a single scaffold
revision. If authoring pushes order 363 past **55** A items, the Beta must stop
and report rather than absorb the overflow — after authoring, a split is a
rewrite. Say so in the step-5 brief.

### 4.4 The one pair that grew: `line-integrals-and-the-gradient-theorem` at 31 A items

Well clear of the ceiling after the D2 rebuild. No split.

### 4.5 `finite-probability-spaces-and-random-variables` (220.2) — **insufficient on sourcing.** The split created a page whose subject none of its sources treats.

This is the most consequential finding in the review, and it is not about the
mathematics, which is good.

The orphan analysis is stark: **14 of 37 A items on this page are the target of
no `included` coverage row from any source.** They are not marginal items. They
are: `thm-finite-additivity-of-probability`, `cor-two-event-inclusion-exclusion`,
`thm-conditional-probability-multiplication-and-chain-rules`,
`thm-finite-law-of-total-probability`, `thm-finite-bayes-theorem`,
`lem-mutual-independence-under-subfamilies-and-complements`,
`def-product-of-finite-probability-spaces`,
`thm-product-probability-has-independent-coordinate-events`,
`thm-event-independence-and-indicator-independence`,
`thm-covariance-bilinearity-and-symmetry`,
`def-bernoulli-and-binomial-random-variables`,
`lem-cauchy-schwarz-for-finite-random-variables`,
`thm-finite-second-moment-lower-bound`, and `lem-finite-probability-basic-laws`.
That is Bayes, total probability, the chain rule, product spaces, the binomial
distribution and Cauchy–Schwarz — the spine of elementary probability — appearing
in **no source's `contents` at all**. §6b.0 criterion 4 names this exact signal:
*"That is the signal that the sources themselves were too thin, and it is a
scaffold defect even though every listed row is disposed."*

The cause is structural and it is nobody's carelessness. All three sources —
Matoušek–Vondrák, Zhao, Bucić — are **probabilistic-method** note sets. I opened
Matoušek–Vondrák §1.1 and it is titled *"Preliminaries"* and opens *"This section
summarizes the fundamental notions of probability theory … In no way is it
intended to serve as a substitute for a course in probability theory."* Those
notes carry 1.1.1 (probability space), 1.1.3 (union bound), 1.1.4 (independence),
1.1.5 (conditional probability), 1.1.6 (random variable) — and then stop. They
are a two-page preface. The D1 split minted a **new A page whose subject is
elementary finite probability**, and its three sources treat that subject only as
a preface to something else. The page's `coverage.json` shows **52 rows, all
`included`, zero declines** — not because the harvest was generous, but because
there was nothing left in those ranges to decline.

Batch 5 is also the only batch in the run with **no `canonical` block on either
page**. That array is precisely the mechanism for recording a standard result no
listed source's `contents` carries, and its absence is why 14 items have no row.

**Required, in order:**

1. **Add a genuine finite-probability textbook as the page's primary backing and
   harvest it.** Recommended: **Grinstead & Snell, *Introduction to Probability*,
   2nd revised edition, AMS** — a real textbook, freely redistributable under the
   GFDL, at `https://math.dartmouth.edu/~prob/prob/prob.pdf`. I opened it and
   verified its table of contents. The ranges that match this page's development
   exactly: **§1.2 Discrete Probability Distributions (printed pp. 18–40)**,
   **§4.1 Discrete Conditional Probability (pp. 133–161)** — conditional
   probability, Bayes, independence, the chain rule — **§5.1 Important
   Distributions (pp. 183–204)** — Bernoulli and binomial — **§6.1 Expected Value
   (pp. 225–256)**, **§6.2 Variance of Discrete Random Variables (pp. 257–267)**,
   and **§8.1 Law of Large Numbers, Discrete Random Variables (pp. 305–…)** —
   Markov and Chebyshev. Enumerate each range's own numbered headings and give
   every one a disposition.
2. **Add the missing `canonical` block** for both batch-5 pages, and use it for
   any standard result the sources still do not carry.
3. **The B page at 220.4 marks no boundary for the page's inequalities.** Eight
   examples cover conditioning, independence and expectation, and stop. Markov,
   Chebyshev, Cauchy–Schwarz and the second-moment bound — four headline theorems,
   items 33–37 — get nothing. Counterexamples marking the boundary of each theorem
   are the point of a B page. Add at minimum: an example showing **Markov's
   inequality is sharp** (a variable taking one positive value on an event of the
   extremal probability), a **counterexample showing Markov fails without
   nonnegativity**, and an example showing **Chebyshev is tight** on a symmetric
   three-point distribution. Grinstead & Snell §8.1 carries all three.

**The mathematics on this page is not in question.** The 37-item development is
correct in shape and the boundary discipline inside it is good — linearity of
expectation is stated *"without any independence hypothesis"*, variance addition
is stated for *pairwise* independence, mutual versus pairwise independence is
separated at the definition. The defect is that a page of this weight — 27 pages
downstream depend on the pair — currently rests on three prefaces.

**`finite-probability-and-the-probabilistic-method` (221): sufficient.** Its
subject *is* its sources' subject, its 28 items run from the first-moment method
through Chernoff, the asymmetric and symmetric Local Lemma, and the four
classical applications (Ramsey, Szele, sum-free sets, high girth with high
chromatic number), and its declines are 8 `out-of-scope` rows with real reasons.

---

## 5. Findings that are corrections, not additions

Collected so they are not confused with the work that drives an `insufficient`
verdict. None of these blocks the step-4 splice on its own; all are cheap now and
expensive after authoring.

| # | batch / pair | correction |
|---|---|---|
| C1 | 1 / localisation | Three module-localisation deferral reasons name `free-modules-and-exact-sequences` as the destination. That page is batch 2 of this run and ships without module localisation. Restate; flag to the orchestrator that it is now homed nowhere. |
| C2 | 1 / splitting-fields | Milne Example 2.8 declined to "the Galois track". No Galois page exists in `plan-spec.json`. Restate. |
| C3 | 1 / splitting-fields | The Judson locator cites **Corollary 21.36, Theorem 21.34, Lemma 21.32, Examples 21.29–21.30**. The cited HTML edition numbers those items **21.2.8, 21.2.6, 21.2.4, 21.2.1–21.2.2**. Content and order match one-for-one — the harvest is faithful — but a reader following the URL finds no "Corollary 21.36". Cite the numbering used at the cited URL, or cite the print edition where 21.36 appears. |
| C4 | 1 / splitting-fields | The Milne locator says "PDF pp. 27-30 … through Proposition 2.17". Proposition 2.17 is on PDF p. **31**. |
| C5 | 1 / localisation | `thm-ideal-correspondence-for-localisation` claims the prime-ideal correspondence. Stacks Lemma 10.9.16, its cited row, gives only the ideal statement. Source the prime clause or drop it from the row's scope. |
| C6 | 3 / eigenvalues | The Pinkham Theorem 12.1.3 row conflates two claims and maps to an item 12.1.3 does not state; split it (see D5). |
| C7 | 4 / pi | Lebl Prop 11.4.2(9) misquoted as $\lvert\sin x\rvert\le\lvert x\rvert$; the source states $\sin(x)\le x$ for $x\ge0$. |
| C8 | 4 / line-integrals | Donaldson's Green section is headed *"A Sketch Proof of Green's Theorem"*. Fine as corroboration; must not be the clause a `[F#]` fact cites. |
| C9 | 2, 4 | One work, one source entry with a compound locator (D8). |
| C10 | 1, 3, 7 | Stacks Project → `monograph` uniformly (D9). |
| C11 | 2 / both pairs | Nine A items (6 on order 66, 3 on order 104) and thirteen B items carry no coverage row though the sources evidently contain the material. Complete the mapping. |
| C12 | 3 / eigenvalues | Order 88's `plan-spec` title still promises Cayley–Hamilton, now homed at 86. Orchestrator decision, not a Beta fix. |

---

## 6. What I checked, so the next reader knows what is and is not covered

**Opened at the stated `locator` and compared against `contents`:** Judson §21.2
(HTML, live); Stacks tags 00CM and 09HL (HTML, live); Milne *Fields and Galois
Theory* pp. 27–31 (PDF); Milne *Group Theory* ch. 6 (PDF); Pinkham *Linear
Algebra* ch. 12 (PDF); Lebl *Basic Analysis II* §11.4 (HTML, live); Riehl
*Category Theory in Context* front matter and ch. 3 extent (PDF);
Matoušek–Vondrák §1.1 (PDF); Grinstead & Snell front matter (PDF, for the batch-5
recommendation).

**Checked mechanically across all seven batches:** the merged-splice
`validate-plan` run; every scaffolded item's coverage-row backing; every
`deferred`/`out-of-scope` reason read individually; page homes and orders for
every destination a decline reason names, against `plan-spec.json`.

**Not individually opened:** Khovanov, Kleshchev, Hekmati, Conrad (three
blurbs), Kuan, Keisler, the Imperial handout, CRing, Zhao, Bucić, Lebl
*Guide to Cultivating Complex Analysis*, Howell–Mathews, Orloff, Campesato,
Donaldson, Leinster, the Harvard tutorial, and the Stacks category and
module tags. For those the check was structural — orphan analysis plus reason
review — which is weaker than opening the range. Batch 6 came through the
structural check cleanest in the run (**zero** unmapped A items across 28), and
batch 7 next (2 of 46); batch 5's foundations page came through worst (14 of 37)
and is the finding in §4.5.

## 7. Next action

Route §3 and §4.5 to the owning Betas — batch 1 (`splitting-fields`), batch 3
(`eigenvalues`), batch 4 (`pi`), batch 5 (foundations) — together with the §5
corrections for batches 1, 2, 3, 4 and 7. I re-check every routed item from disk
before step 4 splices anything. The seven `sufficient` pairs need no scaffold
work and should not wait.
