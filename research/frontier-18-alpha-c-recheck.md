# frontier-18 — Alpha group **c**, step-3 fix-pass re-check

Batches **1, 3, 4**. Re-checked from disk against
`research/frontier-18-alpha-c-step3-scaffold-review.md` and each Beta's
`## Step-3 fix pass` in `research/frontier-18-batch-<i>.notes.md`. Every
disposition below was confirmed by opening the artifact, not by reading the
notes' claim about it.

Machine half updated in the same act:
`research/frontier-18-alpha-c-step3-verdicts.json` — all three pairs flipped to
`sufficient`.

---

## Per finding

| id | Beta's claim | my verdict |
|---|---|---|
| **B1-1** | applied | **confirmed** |
| B1-2 | no action, owner decision | **confirmed** — nothing to apply, nothing applied |
| B1-3 | no action, routed to owner/engine | **confirmed** |
| **B3-1** | applied | **confirmed** |
| **B3-2** | applied | **confirmed** |
| B3-3 | applied | **confirmed** |
| B3-4 | applied (boundary note) | **confirmed** |
| B3-5 | no action, as directed | **confirmed** |
| **B4-1** | applied | **confirmed** |
| B4-2 | no action, Alpha declined | **confirmed** |
| T-1 | recorded, no action | **confirmed**, and re-run by hand this dispatch |

Four Betas went past the letter of a finding. Each is adjudicated as an
extension below; all four are accepted.

---

### B1-1 — `lem-four-square-congruence-for-primes` cites the published proposition · **confirmed**

`research/frontier-18-batch-1.pages.json` now carries
`deps: [def-prime, def-congruence-modulo-an-integer, def-divides-in-z,
lem-units-of-z, prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares,
lem-congruence-respects-integer-arithmetic]`. The five counting dependencies are
gone from the manifest, and a grep over both pages' items finds none of them
anywhere in batch 1. The `strategy` is rewritten to the routed proof: $p=2$ by
$1^2+0^2+1=2$; odd $p$ by the cited proposition at $a=-1$ with $p\nmid-1$
discharged from `def-divides-in-z` and `lem-units-of-z`; then adding $1\equiv1$.
It tells the step-5 author in terms not to re-run the square-class count.

All six new dependency targets read `status: published` on disk and none carries
`provenance.statement: ai-generated`.
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` is homed on the A
page `sums-of-two-squares`, so no leaf-rule question arises.

The contract entry was rewritten, not patched: six citations F1–F3 / L1–L3, six
derivations over steps 1.1, 2.1, 3.1, 3.2, 3.3, 4.1, and eight boundary rows
redispositioned against the new proof. I re-verified all six quotes by
whitespace-normalised substring against the cited item's `## Statement` or
`## Definition` on disk: **6/6 exact**. The boundary rows carry proof-specific
evidence — `empty` moved to `not_applicable` with a reason naming why no index
range is constructed any more, `degenerate` records $x=y$ admitted with $p=3$ and
$(1,1)$, `one` records $p=2$ as the prime [L1] does not cover. No template row.

The consequential B-page edit is on disk too:
`ex-four-square-congruence-for-an-odd-prime` declares the proposition and its
strategy says the display instantiates it at $p=11$. I recomputed the display:
squares mod $11$ are $\{0,1,3,4,5,9\}$, the translate $\{-1-y^2\}$ is
$\{10,9,6,1,5,7\}$, the intersection is $\{1,5,9\}$, and $1^2+3^2+1=11\equiv0$.
Correct.

**The seam is closed.** Both pages now carry a dependency edge into
`sums-of-two-squares`, where both had zero.

**Extension E1 — `def-integers-modulo-n` also removed. Accepted.** B1-1 named
five dependencies; the Beta removed a sixth and flagged it. The new proof is
stated entirely as congruences between integers and never forms a residue class,
so the edge had no consumer. An unused `deps` edge is exactly what the
cross-edge rule treats as noise. It is a removal, not an addition, and the
contract's citations confirm nothing consumes $\mathbb Z/p$ vocabulary.

### B1-2 — Conrad Thm 5.1 · **confirmed**

`thm-fermat-two-square-theorem-by-descent` appears in no artifact of batch 1, and
no artifact asserts the superseded "the target is a draft" reason. The notes
record the live blocker (the reciprocal cross-reference is an edit to a published
item outside this level) and route it to the owner. That is what I decided.

### B1-3 — empty `finite_smoke` · **confirmed**

`finite_smoke` is `[]` on all 24 contract entries including the rewritten one, and
the notes state plainly that `0 check(s) over 0/24 item(s)` is a gate reporting
green over zero checks and not a pass being claimed. No registry change was made
mid-run, which is what I directed.

---

### B3-1 — five items retagged off `ai-generated` · **confirmed**

§5 of `research/frontier-18-batch-3.notes.md` now reads `ai-altered` on all five:
`rem-the-two-descriptions-of-the-subfield-lattice-of-a-finite-field` (statement
`ai-altered`, proof `not-applicable`) and the four `fs-` items, each with the
source clause it adapts or negates named in its reason row — Milne Cor 4.21,
Conrad `linearchar` Ex 3.1, Conrad `cyclotomic` Thm 5.4 with Cor 5.7 against
Clark Thm 9.8, Clark Prop 9.4 with Conrad `cyclotomic` §1, and Clark Cor 9.12.
The remark's row states explicitly that no `generation` block is written and why.
`cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field` is untouched and
still `ai-generated` with `generation.role: direct-corollary`, which is what the
`GENERATED_ROLE` map licenses.

**Extension E2 — four further examples retagged `ai-generated` → `ai-altered`.
Accepted.** `ex-the-galois-group-of-f-eight-over-f-two`,
`ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve`,
`ex-the-first-twelve-cyclotomic-polynomials` and
`ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field`. The Beta's test —
does a harvest row name the source clause the construction comes from — is the
right one, and I checked each row exists and is dispositioned against that exact
id: Conrad `finitefields` Ex 4.3–4.5 (`inline`), Ex 2.9 (`included`), Conrad
`cyclotomic` Ex 5.1 (`included`), Conrad `linearchar` Ex 3.2 (`included`, with a
note explaining the reuse). Leaving them `ai-generated` while the coverage file
asserts a source realises each id would have put the two artifacts in
contradiction. The retag widens dependency eligibility, so I checked the
consequence rather than the label: **zero `deps` edges point at any of the four.**
The three examples with no harvest row stay `ai-generated`, which is the right
side of the same test.

### B3-2 — the edge into an `ai-generated` statement · **confirmed**

`ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve` now declares
`[thm-intermediate-fields-of-an-extension-of-finite-fields,
thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group,
thm-subfield-lattice-of-a-finite-field]`. The remark is gone from its `deps`.
`thm-subfield-lattice-of-a-finite-field` reads `status: published`,
`literature-derived`, homed on the A page
`algebraic-extensions-degree-and-finite-fields`. The contract gained it as `L3`.

**Extension E3 — four further edges cut or replaced. Accepted.** The Beta scripted
the intra-batch check my finding was one instance of and found five edges, not
one. I opened each of the four it handled beyond mine:

- `ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial`
  now declares `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate`
  and `thm-eisenstein-irreducibility-criterion`; its argument is the binomial
  expansion of $((t+1)^7-1)/t$ and consumes no table of $\Phi_n$. Cut is correct.
- `ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields`
  runs on $(\mathbb Z/12)^\times$ and the correspondence; $\Phi_{12}$ plays no
  part. Cut is correct.
- `fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one`
  keeps `def-cyclotomic-polynomial` and the monic-integer theorem, which is what
  computing $\Phi_{105}$ from the recursion needs. Cut is correct.
- `fs-the-group-of-n-th-roots-of-unity-has-n-elements-in-every-field` had its edge
  to a worked example **replaced** by `prop-p-power-roots-of-unity-in-characteristic-p`,
  the A-page proposition stating the fact the refutation uses, with a contract
  citation to match. This is the substantive one and the replacement is better
  than the cut would have been: a false statement's refutation should rest on the
  proposition, not on an instance of it.

None of the four cut edges appeared in any proof contract, which is independent
evidence that none was load-bearing. §5a records the check honestly, including
that §5's original assertion was false.

### B3-3 — Wedderburn, and the $E\otimes E$ normal-basis route · **confirmed**

Both coverage rows now carry `destination: owner-decision`. The Wedderburn row's
reason is rewritten to the true blocker — the archimedean bound
$|\Phi_n(q)|>q-1$ needing complex primitive roots of unity published at order
189 against this page's 101.2 — and states explicitly that the class equation
*is* available at order 42, correcting the materially wrong reason. It also
closes both substitutes (Möbius product formula at 348.001; central simple
algebras nowhere in `plan-spec.json`) and records that no page above 189 claims
the result. That is the check I asked for, done rather than asserted.

### B3-4 — the $p=3$ boundary · **confirmed**

Recorded as obligation 3 in §6b. The manifest title still reads "exactly one
**intermediate field** of degree two", not "proper subfield". The
$\mathbb Q(\sqrt{p^{*}})$ observation is recorded with its instruction.

### B3-5 · **confirmed** — four rows unchanged, as I directed.

---

### B4-1 — Hochster Corollary 5.9 built · **confirmed**

`research/frontier-18-batch-4.pages.json` carries a new A-page item at position 19,
directly after `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`:
`cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian`,
kind `corollary`, titled "Every algebra of finite type over a principal ideal
domain is a Noetherian ring". The A page holds 39 items against the 60 ceiling.

The coverage row is re-dispositioned: `{"name": "Corollary 5.9: a finitely
generated algebra over a principal ideal domain is Noetherian", "disposition":
"included", "item": "cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian"}`
— the false reason and the unreachable destination are removed, not merely
annotated.

The contract entry is real: the id is in `scope`, two citations, two derivations
over steps 1.1 and 2.1, eight boundary rows. Both quotes re-verified exact
against disk. The `degenerate` row records that a field *is* a principal ideal
domain under `def-principal-ideal-domain`, so this corollary subsumes the field
case of `cor-finite-variable-polynomial-ring-noetherian` rather than sitting
beside it; the `iff-reverse` row records the converse false with the witness
$\mathbb Z[x]$, $(2,x)$ not principal. Both are correct and neither is a
template.

I checked the mathematics rather than the bookkeeping: a PID is Noetherian, an
algebra of finite type over a Noetherian ring is Noetherian, so the composite
holds; and under this library's definition — an integral domain in which every
ideal is principal — a field qualifies, so the subsumption note is right.

**Extension E4 — `def-principal-ideal-domain` added as a fourth `deps` edge.
Accepted.** B4-1 named three. This is the first and only occurrence of the term
on the A page and the Statement uses it, so without the edge the Statement uses
an undefined term. The target is published, `literature-derived`, homed on the A
page `euclidean-domains-pids-and-unique-factorisation`, inside the declared
closure and strictly earlier in reading order.

The notes' section 1 table now lists 39 rows with the new corollary at 19, the
rows after 18 renumbered, and the landmark line unchanged at
4, 5, 14, 17, 18, 21, 27, 31, 35, 38 — item 18 is
`cor-finite-type-algebra-over-noetherian-ring-is-noetherian`, so the new
corollary is correctly not a landmark. I checked the table against the manifest
row by row.

### B4-2 — Hochster Thm 5.5 · **confirmed**

The harvest row stays `deferred` with destination
`noether-normalisation-and-nullstellensatz`. Nothing was built. The Beta
re-fetched the source and its quotation of 5.5 ("the polynomial ring $R$ in $n$
variables over a field $K$ is Noetherian", proof turning on "we may assume that
$f$ is monic in $x_n$") confirms both grounds of my decline.

### T-1 · **confirmed, and re-measured**

No tool change was made, correctly. Because `validate-plan.mjs` still skips the
reading-order test on a dependency that already exists in `items/`, I re-ran the
check by hand over the three edited manifests rather than relying on the gate.
Every `deps` edge of every item on all six pages: **729 dependency uses, 0
problems.** Nothing points forward in reading order, nothing points at an item
homed on a B page, nothing points at an unpublished item or an unpublished page,
nothing points at a `provenance.statement: ai-generated` target, nothing points
outside the declared `requires` closure, and no intra-page edge points forward.

---

## Gates re-run in this dispatch

```
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-{1,3,4}.pages.json
  -> 142 scoped item(s), 0 error(s), 0 warning(s)
node tools/coverage-checklist.mjs research/frontier-18-batch-{1,3,4}.coverage.json
  -> 3 page(s), 380 harvested result(s), 0 error(s), 0 warning(s)
```

Contract quotes re-verified by whitespace-normalised substring against disk for
both rewritten/added entries: **8/8 exact.**

---

## Per-pair verdict

| pair | verdict |
|---|---|
| `lagrange-four-square-theorem` | **ready for splice** |
| `finite-fields-and-cyclotomic-extensions` | **ready for splice** |
| `noetherian-rings-and-hilbert-basis` | **ready for splice** |

Nothing blocks any of the three. The four items still open across the group are
open by my own step-3 decision and none of them gates the splice: **B1-2** (the
Conrad descent second proof, an owner decision about a reciprocal sentence on a
published item), **B1-3** (three proposed `finite-smoke` registry checks, a tool
decision), **B3-3** and the $E\otimes E$ route (two results now correctly
`destination: owner-decision`, with no page in the plan able to home them), and
**T-1** (a `validate-plan.mjs` blind spot on published dependencies, an engine
decision — checked by hand here, clean, and worth asking groups a, b and d
whether they did the same).
