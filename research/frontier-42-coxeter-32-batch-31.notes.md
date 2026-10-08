Run `frontier-42-coxeter-32`; role beta; pair CG-28, orders 1778 (A) and 1779 (B),
category `coxeter-groups`. Outputs written by this batch:

- `research/frontier-42-coxeter-32-batch-31.pages.json` (6 A items, 3 B items)
- `research/frontier-42-coxeter-32-batch-31.coverage.json` (4 sources on the A page,
  2 on the B page; 64 harvested results; every source fetch-stamped)
- `research/frontier-42-coxeter-32-batch-31.cross-batch-dependencies.json`
  (48 reviewed rows: 1 page-level `requires` edge and 47 item edges)
- `research/frontier-42-coxeter-32-batch-31-url-liveness.json` (4/4 URLs live)
- `research/frontier-42-coxeter-32-step1-<item>.json` (9 readiness records, all `ready`,
  hashed after the verification repairs recorded below)

## Design, plan and owner direction

`research/frontier-42-coxeter-32-owner-authoring-direction.md` was read before construction.
The design section is `research/plan-coxeter-groups-track.md` L563 (CG-28, order 1778); the
`plan-spec.json` entries for orders 1778/1779 agree with it in id, title, category, companion,
`requires` (`bipartite-coxeter-elements-and-ordered-root-complexes` on A, the A page on B) and
scope. **No design/plan conflict was found, and no conflict with the binding owner direction
was found.** The four contracted A-page items were preserved with their proof routes: the
noncrossing interval and Kreweras map definition (with the dependence on `c` declared before
transport), the subcomplex-intersection/purity lemma (realization intersection by unique
simplex carriers; full-span maximal simplices; empty and zero-dimensional cases; the purity
sentence that Brady–Watt's Theorem 7.8 proof asserts without proof is supplied here), the
lattice theorem (intersect `X(a)`, `X(b)`; reversed ordered-root reflections give
`sigma <=_T c`; wall restriction proves `sigma <= a,b` and `P_sigma = P_a cap P_b`; meets of
common uppers give joins; conjugacy independence via source-sink moves is proved rather than
assumed for the bipartite `c`), and the Kreweras/type-A theorem (length equalities,
`K^2(w) = c^{-1}wc`, the noncrossing criterion in both directions, the set-partition model,
and the classical complement — with clause (5) recording that no model or Catalan count is
claimed in other types). The B companion fulfils the three design tasks: the `S_4` model with
all Kreweras complements, a dihedral example covering the noncrystallographic `I_2(5)`, and a
contrasting arbitrary absolute interval (`x = (1 3)(2 4)`; `Abs(S_3)` not a lattice).

### Recorded discrepancies with scaffold-preparation metadata (the design and plan control)

The following divergences from `research/coxeter-scaffold/inventory.json` and
`research/coxeter-scaffold/independent-audit.json` are deliberate and verified against the
completed arguments; declaring an unused dependency would be a padded inventory.

1. The inventory's `depends_on` for `def-cg-coxeter-noncrossing-poset-and-kreweras-map`, and one
   audit ordinary edge, name `thm-cg-root-complex-convex-cones-and-facet-induction`. The
   definition never refers to the ordered root complex `X(c)`; its well-definedness justifiers
   are declared in `justified_by` instead
   (`thm-cg-noncrossing-finite-lattice-and-conjugacy-independence`,
   `thm-cg-kreweras-complement-and-type-a-partition-model`). Recorded, not copied.
2. The inventory's `depends_on` for
   `thm-cg-kreweras-complement-and-type-a-partition-model` names the same root-complex theorem;
   the completed argument uses it nowhere. Clause (1) consumes only the finite-lattice
   conclusion of the lattice theorem and Carter rigidity; clauses (2)–(4) use the cycle
   combinatorics of `S_N` (von Dyck, transpositions, cycle decomposition) and the lattice
   theorem's clause (2) for finiteness. Recorded, not copied.
3. The inventory records a single `justified_by` for the definition; the manifest declares two,
   because clause (4)'s deferred properties of `K` are exactly the content of
   `thm-cg-kreweras-complement-and-type-a-partition-model` — a strictly more complete justifier
   record, not a new claim.
4. The design's lattice contract ("Intersect X(a),X(b)…") omits the case
   `P_a cap P_b = empty` with `a,b != 1` (e.g. two distinct reflections of type `A_2`, whose
   meet is `1`). The manifest's clause (1) and strategy handle it explicitly; see the repair
   record below.
5. The inventory lists four A items; the manifest has six, because the moves-space computation
   `M(R(v_r)...R(v_1)) = span(v_1,...,v_r)` and the source-sink conjugacy of Coxeter elements
   are mathematically necessary local additions on the same A page (see below). The B page's
   three items are the design prose's three tasks and have no enumerated inventory contract.

## Local additions (not scope changes)

Two lemmas were added on the A page, both before their consumers and both inside the page's
100-item cap (the page has 6 items):

- `lem-cg-reversed-reflection-product-and-face-spans` (A2): pure finite-dimensional linear
  algebra. It supplies the moved-space identity used in the lattice theorem's meet
  construction, where the design's route needs `M(sigma) = span` of a maximal simplex with no
  in-run supplier for it.
- `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves` (A4): the design instructs
  "prove all Coxeter elements in a finite tree diagram conjugate via source-sink moves, do not
  silently restrict the theorem to one bipartite `c`". The lemma proves the firing-connectivity
  of tree orientations (Eriksson–Eriksson, Proposition 2.3) and the conjugation identity
  `c(omega') = s c(omega) s`, in finite type only, and is the supplier of the lattice theorem's
  clause (4).

## Mathematical route and the choices made

- **Definition (A1).** Coxeter elements are arbitrary simple-reflection orderings; the
  bipartite construction is an example only. `NC(W,c) = [1,c]` in absolute order, with the
  dependence on `c` declared and the reducible case defined as the componentwise product whose
  agreement with the ambient interval is deferred to the lattice theorem (3). `K(w) = w^{-1}c`
  with all properties deferred to the Kreweras theorem; `justified_by` names both justifiers.
  The convention was checked against Armstrong's Lemma 2.5.4 with `mu = 1`, `nu = c` and
  against Brady–Watt's `[1,c]`.
- **Moved spaces of reversed products (A2).** Induction on `k`: upper bound
  `M(XY) subset M(X) + X M(Y)` with `R(sigma_k)sigma_i in span(sigma_i, sigma_k)`; lower bound
  from the decomposition `v = u + w`, `u in U = M(Y)`, `w in F(Y)`, where the two summands of
  `(XY - id)u` range over `U` and `span(sigma_k)` (if `sigma_k` is not orthogonal to `U`), or
  `(XY - id)sigma_k = -2sigma_k` if it is. Clause (2) converts the dimension count into
  reflection length via Carter's formula; clause (3) records that only linear independence is
  used.
- **Purity (A3).** `c[Y cap Z] = c[Y] cap c[Z]` from the common-face identity, with
  `c[empty] = {0}`; purity by an interior-point argument (`x_t = (1-t)x + tq` escapes the
  proper subspace `span(F)`, finitely many closed carriers force `F subset F'`, maximality gives
  `F = F'`, contradiction). Clause (4) records that the lemma does **not** determine
  `M(alpha) cap M(beta)` — the lattice theorem needs `span(P_a cap P_b)` instead, and the
  strategy proves that separately.
- **Conjugacy of Coxeter elements (A4).** Firing connectivity of orientations of a tree by
  induction on the number of vertices, with the leaf-lifting argument and the final correction
  of the leaf edge; well-definedness of `c(omega)` via adjacent commuting swaps; connected
  finite type is a tree by `lem-cg-positive-definite-diagram-exclusions` (2); reducible `W`
  componentwise. Finite type only, as the design's warning requires.
- **Lattice theorem (A5).** Meets by intersecting the convex realizations, choosing a
  full-span maximal simplex, reversing its ordered root reflections, and applying
  common-upper-bound rigidity twice; `P_sigma = P_a cap P_b` via the identification
  `P_x = {alpha : M(t_alpha) subset M(x)}`; the greatest-common-lower-bound property from
  `P_tau subset P_sigma`. The empty-intersection case is handled first. Joins as the meet of
  the common uppers in the finite graded interval. Reducible systems componentwise. Clause (4)
  transports by `Ad_w` after conjugacy is proved, with the exact identity
  `M(wxw^{-1}) = rho(w)M(x)` (the moved space is transported by the reflection
  representation, not fixed pointwise — see the repair record). Clause (5) excludes
  `Abs(W)`, non-Coxeter intervals and non-finite types; no classification is used.
- **Kreweras complement and the type-A model (A6).** `K` order-reversing by the length
  identities, `K(K(w)) = c^{-1}wc`, bijectivity from finiteness. Type A: reflection length
  `= N - #cycles` with both bounds (cycle splitting/merging and the explicit factorization);
  the noncrossing criterion proved in both directions (contraction of an interval block upward;
  downward induction from `c` through graded covers using the prefix form); the poset
  isomorphism by meet preservation and rigidity; the classical Kreweras complement by the
  interleaving description with `w_pi w_{K(pi)} = c`, `|K(pi)| = N + 1 - |pi|`,
  `pi cap K(pi) = 0`, `pi join K(pi) = 1`. Clause (5) records the limits: only the Coxeter
  presentation of type `A_{N-1}` is used, and no model or count is claimed in other types.
- **B companion.** B1 enumerates the 14-element interval for `c = (1 2 3 4)`, the 15 partitions
  with the unique crossing `{1,3}|{2,4}`, and the full Kreweras table; B2 does the dihedral
  bookkeeping (`{1} cup T cup {c}`, the claw operations, `K` on reflections and the cycle
  structure of `K^2`) including the noncrystallographic `m = 5`; B3 exhibits a crossing
  interval that is nevertheless a Boolean lattice and shows `Abs(S_3)` is not a lattice.

## Item inventory (level = step-1 dependency level)

| # | Item | Kind | Level | In-run deps (batch) |
|---|---|---|---|---|
| A1 | `def-cg-coxeter-noncrossing-poset-and-kreweras-map` | def | 15 | b2, b4 x2, b13 x2, b18, b19; 1 published |
| A2 | `lem-cg-reversed-reflection-product-and-face-spans` | lem | 20 | b4 x3, b13, b18, b19; 7 published |
| A3 | `lem-cg-convex-root-subcomplex-intersection-and-purity` | lem | 21 | A1, b19 x3; 9 published |
| A4 | `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves` | lem | 16 | A1, b2, b13 x3; 3 published |
| A5 | `thm-cg-noncrossing-finite-lattice-and-conjugacy-independence` | thm | 22 | A1, A2, A3, A4, b2, b4 x2, b7, b13 x2, b18 x2, b19 x6; 7 published |
| A6 | `thm-cg-kreweras-complement-and-type-a-partition-model` | thm | 23 | A1, A2, A5, b2, b13, b18; 6 published |
| B1 | `ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4` | ex | 24 | A1, A6, b2; 5 published |
| B2 | `ex-cg-dihedral-noncrossing-interval-and-kreweras-complement` | ex | 24 | A1, A5, A6, b2, b4, b13, b18; 0 published |
| B3 | `ex-cg-crossing-interval-and-non-lattice-absolute-order` | ex | 24 | A6, b18; 2 published |

Every item declares explicit stable `deps`; the two A-page local additions sit before their
consumer A5, and A6's type-A work consumes no item of another page's B side. No dep is
forward or circular; the page has 9 items, far inside the 100-item cap.

## Sources (all fetched as full text and stamped)

Two independent treatments back every A-page claim, including a monograph and a survey; the
companion page reuses the monograph and the survey. No source retrieval failed, so no
`source_resolution` record is attached anywhere.

1. T. Brady and C. Watt, *Lattices in finite real reflection groups*, arXiv:math/0501502;
   Trans. Amer. Math. Soc. 360 (2008), 4809–4844, `https://arxiv.org/pdf/math/0501502`,
   29-page arXiv text, stamp sha256_16 `cbb25cebbc62ec8f`, 532448 bytes. Read: §2 (absolute
   order, moved/fixed spaces and moved-space rigidity), §3 (Petrie root enumeration, mu-dot-rho
   identities), §4–5 (the complex `X(gamma)` and its subcomplexes), §6 (walls of fat simplices),
   §7 (characterisation of `|X(sigma)|` and the lattice theorem, Definition 7.3, Theorems 7.4,
   7.6, 7.8, Corollaries 7.7). §8 only at its opening statements; §1 and the appendix only for
   orientation. Recorded in the locator: the purity sentence inside the proof of Theorem 7.8 is
   asserted without proof in the source and is supplied locally by A3.
2. D. Armstrong, *Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups*,
   Mem. Amer. Math. Soc. 202 (2009), no. 949, arXiv:math/0611106v2,
   `https://arxiv.org/pdf/math/0611106`, 169 pages, stamp sha256_16 `cb0fbe1e158bccf2`.
   Read: ch. 2, §2.4–2.6, printed pp. 22–34 (Definition 2.4.4, Theorem 2.4.7, Shifting Lemma
   2.5.1, Subword Property 2.5.2, Definition 2.5.3 and Lemma 2.5.4 with the complement remark,
   Definition 2.6.1, Lemma 2.6.2, Definition 2.6.7, Notation 2.6.10, Theorem 2.6.12) and ch. 4,
   §4.1–4.2, printed pp. 82–89 (Definition 4.1.1, Theorems 4.1.2–4.1.3, Lemmas 4.1.4–4.1.5,
   Definition 4.2.2, Definition 4.2.3, identity (4.4)). Remaining chapters not read here (in
   particular §2.7 invariant-theoretic counting, ch. 3, and the refined B/D models).
3. H. Eriksson and K. Eriksson, *Conjugacy of Coxeter elements*, Electron. J. Combin. 16(2)
   (2009), #R4, `https://www.combinatorics.org/ojs/index.php/eljc/article/download/v16i2r4/pdf/`,
   complete 7-page article (rotation equivalence, Theorem 1.1, and §2: edge orientations, chip
   firing, Propositions 2.1, 2.3, Corollary 2.2), stamp sha256_16 `5acccf511546d631`.
4. J. McCammond, *Noncrossing partitions in surprising locations*, survey,
   `https://web.math.ucsb.edu/~jon.mccammond/papers/nc-survey.pdf`, 14 pages, stamp sha256_16
   `65f0224d7c694fc8`. Read: complete sections 3–4 (refinement lattice, minimal factorisations,
   Lemma 4.3, the Kreweras complement as the complementary divisor); §5–6 at statement level.

Every harvested heading in the read ranges has a disposition in `coverage.json` (A page: 43
results — 24 included, 10 inline, 9 out-of-scope; B page: 21 results — 14 included, 2 inline,
5 out-of-scope; 64 in total; `coverage-checklist --require-destination`: 0 errors, 0 warnings).
No decline reason is boilerplate, and no declined result is needed by any item of this pair.

`url-sweep --fail-on-dead`: 4/4 unique URLs live, 0 failed. `source-fetch-check --stamp`:
6/6 source rows fetch-verified; check mode 6/6 resolved. `source-backing`: 10 authored results,
every one backed by an openable source or documented alternative argument.

## Dependency verification

Supplier statements and proof strategies were read for every in-run supplier used, in
dependency order: batch 2 (presentations and word group), batch 4 (forms, reflections and
rank-two orders), batch 13 (diagram components, products and the positive-definite criterion),
batch 18 (reflection length, absolute order and Carter's theorem) and batch 19 (the bipartite
Coxeter element, Steinberg root enumeration, ordered root complex, root pairings, geometric
simpliciality and convex cones). The checked clauses are recorded in the 48 evidence rows of
`research/frontier-42-coxeter-32-batch-31.cross-batch-dependencies.json` (consumer, supplier,
required claim, use, and the statement that no mismatch was found in statement, hypotheses,
direction, conventions or axiom strength). Consumed facts include: `S_N` with adjacent
transpositions is the Coxeter system of type `A_{N-1}` and von Dyck; Carter's clauses
(1), (2)(i)–(iv) and (3), especially rigidity under a common upper bound and conjugation
invariance; `P_sigma` as the positive roots of the reflection subgroup; the common-face
identity and the convexity of `|X(sigma)|`; the prefix form of the absolute order.

- Every `[[...]]` target in every item statement and strategy is declared in `deps` or
  `justified_by`, and conversely every dep is cited (script check: 0 problems for all 9
  items); every `deps` target resolves to an in-run scaffolded item or a published item on
  disk (`items/<id>.md`).
- No item depends on a later item: the in-run levels are 15, 20, 22, 16, 23, 24, 25, 25, 25,
  recomputed by `item-dependency-levels.mjs` with no batch-31 error. Out-of-run suppliers are
  scaffolded but not treated as published: no proof is marked ready on the strength of an
  unauthored supplier, and the consuming claims use only the supplier statements reviewed
  above.
- Hypotheses, direction and conventions checked in the round: the reversed product order of
  the root complex versus the induction in A2; `sigma = R(v_r)...R(v_1)` versus
  `K(w) = w^{-1}c`; the label rotation direction of `Ad_{c^{-1}}`; the claw's
  `r vee r' = c`; the crossing criterion's "cyclically increasing" orientation. All displayed
  permutation products, the 14-element interval, the full Kreweras table for `S_4`, and the
  dihedral statements for `m = 2..6` were recomputed independently during this batch (see the
  repair record).
- Axiom strength: every item is finite or finite-dimensional and **no item uses the Axiom of
  Choice**; no `def-axiom-of-choice` consumption appears anywhere in the pair, and no
  incompatible-axiom branch is touched. `Foundations must not reach
  deferred-set-theory-beyond-choice` is satisfied vacuously (no path).

## Verification repairs before readiness recording (honest record)

A full read-through plus independent recomputation of every finite claim found and corrected
the following defects **before** the readiness records were written; the records therefore hash
the repaired text. The generator sources under `/tmp/cg28/gen/` were edited and the manifest
rebuilt, and the rebuild reproduces the previous manifest with exactly these edits and no others.

- **A5 clause (1), false nonemptiness claim.** The statement asserted that for `a,b != 1` the
  intersection `X(a) cap X(b)` always has a vertex. This fails for two distinct reflections of
  type `A_2` (whose meet is `1`); the strategy had no empty case either. The statement now
  states `a wedge b = 1` when `P_a cap P_b = empty` (equivalently `X(a) cap X(b) = empty`) and
  records the degenerate reading of the displayed identities; the strategy proves the case
  (`P_tau subset P_a cap P_b = empty` forces `M(tau) = 0`, hence `tau = 1` by Carter's
  formula).
- **A5 clause (4), imprecise transport claim.** The statement claimed `Ad_w` preserves "the
  moved spaces `M(x)`, the sets `P_x`". That is false pointwise: `M(wxw^{-1}) = rho(w)M(x)`
  for the canonical reflection representation `rho`. The statement and strategy now state
  exactly this identity (and the strategy gives the two-line image computation); the poset
  isomorphism, reflection length, meets and joins are kept.
- **B1 clause (3), wrong illustrative product.** The example `(1 3)(2 4)(1 2 3 4) = (2 4)` was
  false; independently recomputed, `(1 3)(2 4)(1 2 3 4) = (1 4 3 2)`. The example now reads
  `(1 2)(3 4)(1 2 3 4) = (2 4)`, which is in the listed table and was verified. All 14 listed
  complement values and the whole interval were then re-verified (no other error).
- **B2 clause (3), wrong cycle structure of `K^2`.** "an `m`-cycle on the `m` reflections when
  `m >= 3`" is false for even `m`: independently computed for `m = 2..6`, `K^2 = Ad_{c^{-1}}`
  is the identity for `m = 2`, a single `m`-cycle for odd `m`, and two `(m/2)`-cycles for even
  `m >= 4`. The statement now says exactly this (rotation of the reflection axes).
- **B3 clause (1), wrong product and length.** The claim
  `x^{-1}(1 2 3 4) = (1 2)(3 4)` with "reflection length 2 != 3-2" was false; independently
  recomputed, `x^{-1}(1 2 3 4) = (1 4 3 2)` of reflection length `3 != 1 = 3 - 2`, which is
  the correct reason `x` is not below `c`. Statement and strategy were corrected.

The `c` convention itself (`s_1 s_2 s_3 = (1 2 3 4)` under the product convention "compose
from the right"; `(1 2)(1 2 3 4) = (2 3 4)`) was re-derived from scratch and is consistent
across A6, B1 and B3.

## Checks run (actual commands and results)

| Command | Result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-31.pages.json` | 9 items, 0 errors |
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 293 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 293 scoped items, 0 errors, 0 warnings |
| `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with exactly two errors, both the empty batch-25 scaffold `coxeter-descents-poincare-polynomials-and-growth(-examples)`; **no batch-31 error**, labels 15/20/22/16/23/24/25/25/25 match |
| `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests, no scope drift |
| `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-31.coverage.json --require-destination` | 2 pages, 64 harvested results, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage ...batch-31.coverage.json` | 6/6 fetch-verified, 6/6 resolved |
| `node tools/source-fetch-check.mjs --coverage ...batch-31.coverage.json --stamp` | 6/6 fetch-verified (stamps written at construction time, sha256_16 recorded above) |
| `node tools/url-sweep.mjs --coverage ...batch-31.coverage.json --out ...batch-31-url-liveness.json --fail-on-dead` | 4/4 live, 0 failed |
| `node tools/source-backing.mjs --coverage ...batch-31.coverage.json --liveness ...batch-31-url-liveness.json` | 10/10 authored results backed |
| `node tools/extcheck.mjs research/frontier-42-coxeter-32-batch-31.pages.json` | 0 recorded-not-proved items, 0 external references, 0 external fallbacks (corpus check; exit 0) |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed and deduplicated; 48/48 batch-31 edges reviewed, 0 orphaned reviews; `unreviewed_batches` = `["25"]` at the last refresh (batch 32's file was registered in the same pass) |
| `node tools/step1-decisions.mjs record --run frontier-42-coxeter-32 --item <id> --decision ready ...` | 9 records written, one per item (deps counts 10/13/10/7/22/15/9/10/8) |
| `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | 293 items, 293 ready records current (all 9 batch-31 records current); run `closed:false` only because of the two empty batch-25 pages. An intermediate run during the final sweep briefly showed two batch-32 examples pending while that concurrent sibling recorded them |
| `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | exit 2: `frontier gate selection: Empty frontier page coxeter-descents-poincare-polynomials-and-growth` (batch 25, in flight); the validator stops at page selection, so requires-closure was verified separately (see Dependency verification) with no violation |

`fwdcheck`, `depcheck`, `depsource` and `precheck` are item-level validators that resolve
manifest ids through authored item files; at Step 1 those files intentionally do not exist yet,
and the engine runs the manifest-only policy and dependency passes instead (the same note as
the sibling batch-30). They remain Step-3 obligations. No item of this batch declares a
`forward_refs` target or an external-reference fallback.

Scope note: the batch-31-only invocation
`node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-31.pages.json`
reports 47 `batch-dependency-missing` errors for sibling suppliers that are scaffolded in this
run but not yet authored on disk. That is the expected Step-1 state (the tool is given one
batch as the declaring scope); the run-scoped invocation in the table above is the
gate-relevant one and passes with 0 errors.

## Escalations and unresolved findings

- **No escalation is required for batch 31.** Every assigned pair member has a complete proof
  strategy with its prerequisites scaffolded on the same A page (or in scaffolded supplier
  batches 2/4/13/18/19), the closure fits the 100-item cap, and no source retrieval failed. No
  published item consumed by this pair was found defective, so no published-defect note is
  recorded.
- Run-level, not batch-31 defects: batch 25's two pages are still empty scaffolds, which is the
  sole cause of the nonzero exits of `item-dependency-levels.mjs` and `validate-plan.mjs`, of
  `step1-decisions check` reporting `closed:false`, and of the ledger's last unreviewed batch;
  the ledger's `--require-reviewed` stage gate therefore cannot pass until the remaining
  sibling lands. Sibling batches were in flight concurrently while these notes were written
  (batch 32's cross-batch review file was registered during the final ledger refresh; batch 25
  was observed empty throughout); all results above are stated as measured at that time.
- Source caveat carried to Step 3: Brady–Watt's Theorem 7.8 proof asserts the purity sentence
  without proof; A3 supplies it locally, and the source locator records this. This is a
  source-reading note, not a defect in any published library item.
- Limits of this record: the readiness records certify scaffold completeness, dependency
  adequacy and the reviewed source reading — not independent mathematical approval. Step 3
  authors and audits the actual items; the engine owns transitions and gates. Every item text
  repaired above changed its hash before recording, and any later edit to an item or its deps
  invalidates its readiness record and requires re-recording.
