# Step 3b pair report — plane-curves-local-intersection-multiplicity-and-bezout

- Run: `frontier-40-geometry-braids-rep-27` (batch 1)
- Role: alpha-high, label `step3b-pair-plane-curves-local-intersection-multiplicity-and-bezout-8f9b2bb18768a9a8`
- A page: `plane-curves-local-intersection-multiplicity-and-bezout` (31 items)
- B page: `plane-curves-local-intersection-multiplicity-and-bezout-examples` (10 items)
- Owned IDs (authoring order = dependency_level, then page order, then item ID as dispatched):
  L0 def-linear-system-plane-curves; def-plane-projective-curve;
  def-resultant-homogeneous-polynomials; lem-local-intersection-length-finite;
  lem-truncated-plane-local-length. L1 def-multiplicity-plane-curve-point;
  lem-bezout-global-length-degree-product; lem-resultant-detects-common-projective-point.
  L2 def-local-intersection-multiplicity-plane-curves; def-tangent-lines-plane-curve-point;
  lem-bezout-no-common-component-finite-intersection. L3
  lem-intersection-multiplicity-independent-equations-coordinates;
  lem-intersection-with-line-order-of-vanishing; lem-smooth-plane-curve-unique-tangent;
  lem-tangent-cone-ideal-containment. L4 def-local-parameter-smooth-plane-curve;
  lem-global-intersection-length-sum-local-lengths; lem-plane-syzygy-truncation-injectivity;
  thm-intersection-multiplicity-basic-properties. L5
  lem-local-intersection-as-vanishing-order-on-smooth-curve; thm-bezout-plane-curves;
  thm-intersection-multiplicity-at-least-product-multiplicities. L6
  cor-line-meets-degree-d-curve-counted-with-multiplicity; cor-projective-plane-curves-meet;
  cor-transverse-smooth-curves-intersection-one; lem-projective-coordinate-invariance-bezout-sum;
  cex-common-component-bezout-sum-not-finite; cex-real-bezout-needs-algebraic-closure;
  ex-cusp-line-intersection-multiplicities; ex-node-line-intersection-branches. L7
  cor-pascal-bezout-obstruction-template; def-flex-and-bitangent-plane-curve;
  rem-bezout-needs-projective-algebraic-closure-multiplicity;
  thm-bezout-uniqueness-low-degree-interpolation;
  cex-affine-bezout-misses-points-at-infinity; ex-line-conic-two-intersections;
  ex-two-plane-cubics-nine-points. L8 cor-tangent-line-flex-multiplicity;
  ex-tangent-line-conic-double-intersection. L9
  cex-distinct-point-count-needs-multiplicity; ex-flex-cubic-contact-order-three.

## Entry state and open obligations

- Scaffold inputs read: `research/frontier-40-geometry-braids-rep-27-batch-1.pages.json`
  (31 A + 10 B statements with deps/provenance/sources), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (owned input `[]`), the Step 3a scope report
  (`...-step3a-pair-plane-curves-local-intersection-multiplicity-and-bezout.md`, decision
  `sufficient`), owner authoring direction, and the 41 step-1 readiness records.
- No item files exist on disk at entry; all 41 are authored here, in dependency order.
- Direct in-run prerequisite pairs: none. All declared suppliers are published items
  before order 366.063 (Step 3a verified 200 published suppliers, 0 missing).
- Step 3a statement-precision findings to repair during authoring (referred to 3b):
  (i) `def-multiplicity-plane-curve-point` product formula needs no common factor;
  (ii) `thm-intersection-multiplicity-basic-properties` (3) same caveat;
  (iii) the same theorem (4) needs Fulton's degree condition deg A = deg G − deg F and
  care with the square-free convention. All three are adopted in the authored items and
  the surrounding statements are strengthened only where the scaffold's intent requires.
- Open obligations: author 41 items + 2 pages; write batch-1 proof contracts; record 41
  item decisions; run the explicit-path checks; keep this report current per item.

## Checkpoints (one per item, dependency order)

1. `def-linear-system-plane-curves` — authored. Definition + scaling/base-locus conventions;
   deps from manifest. precheck n/a (no proof body), rendercheck clean.
2. `def-plane-projective-curve` — authored. Nonemptiness given a complete elementary proof
   (k infinite; specialise a variable with nonzero leading coefficient, root in k); component
   identification cites `lem-projective-irreducibility-homogeneous-prime` (AC noted, exact use
   stated). Added published deps: cor-polynomials-over-an-infinite-domain-are-determined-by-values,
   def-algebraically-closed-field, def-axiom-of-choice, def-graded-ring-and-graded-module,
   def-polynomial-evaluation-and-root, lem-projective-irreducibility-homogeneous-prime,
   thm-polynomial-degree-of-a-product-over-a-domain.
3. `def-resultant-homogeneous-polynomials` — authored, deps as scaffolded.
   Note: manifest Gathmann URL corrected to the fetch-verified URL (same string as coverage).
4. `lem-truncated-plane-local-length` — authored. Direct proof: monomial basis of R/m^t,
   locality of R/m^t via nilpotence, localisation isomorphism R/m^t → O/m^tO, composition
   series by decreasing-degree monomials; t=0 handled; choice-free. Steps renumbered by
   precheck layers; precheck PASS, proof-layout 0 defects.
5. `lem-local-intersection-length-finite` — authored. Equivalence (1)⇔(3) via height-one
   primes (UFD), (1)⇒(2) via Noetherian local dimension zero ⇒ Artinian ⇒ finite length,
   (2)⇒(1) by contrapositive with the nonmaximal prime (h)O; AC declared, exact uses listed.
   precheck PASS.
6. `def-multiplicity-plane-curve-point` — authored. Repaired 3a finding (i): product formula
    stated for square-free forms with no common factor, with the necessary counterexample.
    Well-definedness remark; degree bound; p∉C convention. precheck n/a (definition body).
7. `lem-bezout-global-length-degree-product` — authored. Specialises the published
    complete-intersection length theorem; residue degrees are 1 over an algebraically closed
    field. precheck PASS.
8. `lem-resultant-detects-common-projective-point` — authored. Nonvanishing of the resultant
    from coprimality over K=k(x0,x1) (Gauss), specialisation criterion, fibre count by root
    bound. precheck PASS.
9. `def-local-intersection-multiplicity-plane-curves` — authored; justified_by points to the
    invariance lemma; local-branch convention ∞ elsewhere. Defined at p with no common local
    component; uses lem-local-intersection-length-finite for finiteness.
10. `def-tangent-lines-plane-curve-point` — authored. Factorisation of the lowest binary form
    into linear forms (complete elementary argument), multiplicities r_L, Σr_L=m, m=1 case,
    chart independence.
11. `lem-bezout-no-common-component-finite-intersection` — authored. Coordinate choice off
    both curves (nonzero polynomial over infinite field), resultant detection, nonempty
    finite intersection, scheme-point correspondence. precheck PASS, proof-layout 0 defects.
12. `lem-intersection-multiplicity-independent-equations-coordinates` — authored. (a)–(d)
    invariance via ideal equality and induced local-ring isomorphisms; AC declared.
13. `lem-intersection-with-line-order-of-vanishing` — authored. DVR of the line at p,
    length = valuation = order of the restricted binary form.
14. `lem-smooth-plane-curve-unique-tangent` — authored. Multiplicity one ⇔ smooth ⇔ single
    simple tangent; Jacobian criterion at a k-rational point; proper closed singular locus
    (char-p argument via p-th powers recorded).
15. `lem-tangent-cone-ideal-containment` — authored (Fulton's Lemma (a)). REPAIRED the
    scaffold statement to an algebraically closed field (needed for the zero-set equivalence
    and the linear-factor argument); containment m^t ⊆ (f,g) for t ≥ m+n−1 proved by graded
    surjectivity of the initial forms plus primarity of (f,g)O.
16. `def-local-parameter-smooth-plane-curve` — authored. DVR of a smooth curve, uniformiser
    from a non-tangent line, order of vanishing.
17. `lem-global-intersection-length-sum-local-lengths` — authored. Local rings of X and the
    finite weighted total length.
18. `lem-plane-syzygy-truncation-injectivity` — authored (Fulton's Lemma (b)). REPAIRED the
    scaffold domain to O/m^n × O/m^m (Fulton's diagram) so the truncated map is well defined;
    injectivity iff the initial forms are coprime, with the explicit syzygy in the shared-
    tangent case (k algebraically closed).
19. `thm-intersection-multiplicity-basic-properties` — authored. REPAIRED (3) additivity to
    square-free coprime factors and (4) to the local-ideal invariance with the degree
    condition deg A = deg G − deg F; symmetry, vanishing and locality proved.
20. `lem-local-intersection-as-vanishing-order-on-smooth-curve` — authored. I_p = ord_p(g|_C)
    through the DVR quotient.
21. `thm-bezout-plane-curves` — authored. len_k(X) = de and len_k(X) = Σ I_p combined.
22. `thm-intersection-multiplicity-at-least-product-multiplicities` — authored. Exact-sequence
    dimension count following Fulton: I_p ≥ mn, equality iff the tangent cones are coprime.
    Final proof revision (after first decision record): kept Fulton's two inequalities
    separate — I_p ≥ dim_k(R/J) ≥ mn — since the first is an equality only when
    m^{m+n} ⊆ (f,g)O (available under coprime initial forms by the containment lemma);
    equality requires both equalities. The affected transitive consumers were re-recorded.
23. `cor-line-meets-degree-d-curve-counted-with-multiplicity` — authored.
24. `cor-projective-plane-curves-meet` — authored.
25. `cor-transverse-smooth-curves-intersection-one` — authored.
26. `lem-projective-coordinate-invariance-bezout-sum` — authored.
27. `cor-pascal-bezout-obstruction-template` — authored.
28. `def-flex-and-bitangent-plane-curve` — authored.
29. `rem-bezout-needs-projective-algebraic-closure-multiplicity` — authored; forward_refs to
    the three companion counterexamples on the B page.
30. `thm-bezout-uniqueness-low-degree-interpolation` — authored.
31. `cor-tangent-line-flex-multiplicity` — authored.
32. `cex-common-component-bezout-sum-not-finite` — authored (generation.role counterexample).
33. `cex-real-bezout-needs-algebraic-closure` — authored.
34. `ex-cusp-line-intersection-multiplicities` — authored; lengths 3 and 2.
35. `ex-node-line-intersection-branches` — authored; tangents with contact 3, non-tangent
    line through the node with contact 2.
36. `cex-affine-bezout-misses-points-at-infinity` — authored.
37. `ex-line-conic-two-intersections` — authored.
38. `ex-two-plane-cubics-nine-points` — authored.
39. `ex-tangent-line-conic-double-intersection` — authored.
40. `cex-distinct-point-count-needs-multiplicity` — authored.
41. `ex-flex-cubic-contact-order-three` — authored.

## Scaffold defects repaired (Step 3a findings adopted and extended)

- `def-multiplicity-plane-curve-point`: product formula now requires the two square-free
  forms to have no common factor; the `F1=F2=x0` witness is recorded. (3a finding (i).)
- `thm-intersection-multiplicity-basic-properties`: additivity restricted to square-free
  coprime factors; the "adding a multiple" clause replaced by the invariant local-ideal
  statement with Fulton's degree condition. (3a findings (ii), (iii).)
- `lem-plane-syzygy-truncation-injectivity`: the scaffold domain `O/m^m × O/m^n` is not
  well defined when `m ≠ n`; the authored statement uses Fulton's pairing `O/m^n × O/m^m`
  (f-coefficient truncated by ord g, and conversely). The same correction is used in
  `thm-intersection-multiplicity-at-least-product-multiplicities`.
- `lem-tangent-cone-ideal-containment`: statement now over an algebraically closed field
  (the "(equivalently their zero sets meet only at the origin)" clause and the use of a
  linear common factor both need it).
- `def-plane-projective-curve`: the nonemptiness claim is proved in a remark; the AC use in
  the component identification is stated explicitly and confined to a published supplier.

## Checks run (all on this pair's explicit paths unless noted)

| check | command | result |
|---|---|---|
| item precheck | `node tools/tsx-run.mjs tools/precheck.mts` with the 41 item paths | 32 proof-bearing items, 0 failing |
| proof layout (required single batched run) | `node tools/proof-layout.mjs <41 item paths>` | 41 items, 112 steps, 0 defects |
| rendering | `node tools/rendercheck.mjs <41 item paths>` | all 41 parse (YAML and KaTeX) |
| pages rendering | `node tools/rendercheck.mjs <2 page paths>` | both parse |
| content policy (item mode) | `node tools/content-policy.mjs ...batch-1.pages.json` | 41 scoped, 0 errors |
| manifest deps | `node tools/manifest-deps.mjs ...batch-1.pages.json` | 41 items, 0 errors |
| coverage | `node tools/coverage-checklist.mjs ...batch-1.coverage.json --require-destination` | 1 page, 41 rows, 0 errors |
| dependency levels | `item-dependency-levels.mjs` on batch 1 | 0 errors; max level 8; manifest and item frontmatter levels re-synced to the recomputed values |
| proof contracts (batch) | `node tools/proof-contract.mjs ...batch-1.proof-contracts.json --strict` | 41/41 entries, 0 errors |
| boundary audit | `node tools/boundary-audit.mjs <batch file> --fail-on-contradicted --fail-on-template` | no template cluster, no contradicted row |
| citation fidelity | `node tools/citation-fidelity.mjs <batch file> --fail-on-missing-quote` | 308 citations, no missing quote, no widening candidate |
| finite smoke | `node tools/finite-smoke.mjs <batch file>` | 0 errors (no finite-model obligation declared) |
| risk report | `node tools/risk-report.mjs <batch file>` | 0 errors (routing only) |
| validate plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK |
| fwdcheck / extcheck / prosecheck / depsource | repo-wide | no finding attributable to this pair (fwdcheck failures listed belong to other pairs' in-flight items) |
| step 3 scope | `node tools/step3-decisions.mjs check --run ... --phase scope` | this pair's scope decision current; remaining work is other pairs |
| step 3 item decisions | 41 × `record-item` (37 accept, 4 repaired per the table above — `def-multiplicity-plane-curve-point`, `lem-tangent-cone-ideal-containment`, `lem-plane-syzygy-truncation-injectivity`, `thm-intersection-multiplicity-basic-properties`); after the final proof revision of `thm-intersection-multiplicity-at-least-product-multiplicities`, its seven transitive consumers and the degeneration note on `ex-two-plane-cubics-nine-points` were re-recorded with the same decisions | no item of this pair remains in the final-phase work list |

## Published concerns / cross-pair notes

- No published supplier used here was found defective; the CA-21 seam items matched their
  stated uses. `cor-projective-plane-bezout-length-form` is used only for its stated
  global-length content and its disclaimer is respected.
- Cross-batch input `research/frontier-40-geometry-braids-rep-27-batch-1.cross-batch-dependencies.json`
  remains `[]`: every dependency of every batch-1 item is published or belongs to this same
  pair, so batch 1 declares no cross-batch consumer edge. The page-level edge from batch 22
  (`chow-groups-...`) into this A page stays owned by batch 22.
- Reported to Step 4: the scaffold's provisional dependency levels differed from the levels
  recomputed from the authored dependencies (several dropped by one or two); the batch
  manifest, item frontmatter and the dispatch order were reconciled against the recomputed
  values (no item is justified by a later item).
- Transient external blocker (not this pair): `node tools/frontier-dependency-ledger.mjs
  refresh --run frontier-40-geometry-braids-rep-27` currently exits 1 on a YAML parse error
  in a sibling pair's in-flight item ("Coconnected Hopf algebras: the coordinate ring of
  U_n …"). Batch 1's cross-batch input is unchanged (`[]`), so no row of this pair is
  waiting on the refresh; the serial reconciler should re-run it once the sibling writer
  drains.

## Open obligations

- None within this pair. All 41 items are authored, decided, contract-covered and pass the
  explicit-path checks; the two pages are registered as drafts. Independent review and
  adjudication follow in Steps 5–8, as scheduled.
