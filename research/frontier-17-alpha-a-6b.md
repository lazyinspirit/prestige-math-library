# Frontier 17 — Alpha group a, Step 6b adjudication

Scope: batches 2, 4, and 5, the complete real-analysis group. Text was
unfrozen throughout this audit. I recovered the group-a Step-3 review and
recheck before acting, read the three independent-reader reports, the current
manifests, page files, item text, coverage ledgers, and owning proof contracts,
and checked the exact cited items behind every finding I confirmed. Reader 2,
Reader 4, and Reader 5 were distinct dispatches from the Betas that scaffolded
and authored their assigned batches; no exclusion conflict was found.

The machine half is
`research/frontier-17-alpha-a-6b-findings.json`. It contains one row for every
reader or refuter finding. The defect rows for every distinct fatal defect were
appended in the same adjudication pass as `f17-6b-a-001` through
`f17-6b-a-050`; duplicated Reader 2/Reader 4 detections share one defect row,
as the ledger contract requires.

## Reader coverage received

| Reader | Batch | Coverage | Result |
|---|---:|---|---|
| Reader 2 | 2 | 10/10 scoped items, 40 additional direct dependency items, both pages, manifest, coverage, notes, and all ten contracts | complete |
| Reader 4 | 4 | 66/66 scoped items, 53 proof-bearing items, 263 Fact citations to 110 dependency items, and four pages | complete |
| Reader 5 | 5 | 56/56 scoped items, 51 proof-bearing items, 160 final contract citations to 89 external dependency items, and four pages | complete |

All A-page summaries have exactly two nonempty prose paragraphs. Their word
counts are 60/72 for batch 2, 60/74 and 49/66 for batch 4, and 56/67 and 52/78
for batch 5. Every owned B page has an empty authored body.

## Reader 2 adjudications

| Finding | Verdict | Adjudication and disposition |
|---|---|---|
| R2-1 | confirmed fatal | The title did claim more than the Statement and proof. Accepted the narrowed title, short label, manifest title, and A-summary sentence. |
| R2-2 | confirmed fatal | The original references did not state the circular vector-valued mean-value counterexample. The added Hall–Newell full text gives the exact witness and replacement inequality; accepted. |
| R2-3 | confirmed fatal | The false universal equality likewise lacked an exact source. Accepted the Hall–Newell reference. |
| R2-4 | confirmed fatal | `lem-integral-elementary-bounds` and the FTC theorem require a nondegenerate interval. The repaired Facts and proof now use `pi>0` before applying them; accepted. |
| R2-5 | confirmed fatal | The surface computation had the same omitted FTC interval hypothesis. The repaired Fact and integrability step discharge it; accepted. |
| R2-6 | confirmed fatal | This is the same false-title defect as R4-1. The first derivative is now displayed. I additionally repaired the reader-introduced single-quoted YAML apostrophe that made the corrected item unparsable. |
| R2-7 | confirmed fatal | This is the same missing-`q` Statement defect as R4-3. The final theorem quantifies continuous `q`, names its domain and the patch, and requires `a<b`; accepted. |

Reader 2's five mathematical edits were otherwise sound. Its plan title change
is accepted. No result was added or deleted.

## Reader 4 adjudications

| Finding | Verdict | Adjudication and disposition |
|---|---|---|
| R4-1 | confirmed fatal | The title's second derivative was false. Accepted the first-derivative correction; amended only its YAML escaping so the renderer can parse it. Duplicate of R2-6. |
| R4-2 | confirmed fatal | Scalar and vector fields were unquantified at the interface. Accepted the added domain and continuity hypotheses and the Statement retag. |
| R4-3 | confirmed fatal | The scalar field in the revolution theorem was free. Accepted the quantified continuous field. Duplicate of R2-7. |
| R4-4 | confirmed fatal | Without `a<b`, the parameter region can have empty interior. Accepted the nondegeneracy hypothesis and corrected boundary rows. |
| R4-5 | confirmed fatal | The inverse function theorem alone supplies only a C1 inverse. Accepted the higher-inverse-regularity dependency. REF4-1 later exposed a separate complement-citation defect in the same item, repaired below. |
| R4-6 | confirmed fatal | The coordinate cross-product formula was absent from the cited lemma. Accepted the direct Definition dependency. |
| R4-7 | confirmed fatal | Pointwise derivative algebra did not prove Ck closure of the graph-defining map. Accepted the exact Ck closure theorem. |
| R4-8 | confirmed fatal | The sphere derivative used a product/power route absent from the cited theorem. Accepted the repaired power, Jacobian, and continuous-partials route. |
| R4-9 | confirmed fatal | The ellipsoid quadratic derivative had the same citation defect. Accepted the repaired route. |
| R4-10 | confirmed fatal | The hyperboloid polynomial derivative had the same citation defect. Accepted the repaired route. |
| R4-11 | confirmed fatal | The cone derivative and smoothness had the same citation defect. Accepted the exact derivative and Ck inputs. |
| R4-12 | confirmed fatal | Computed cusp partials were not identified with the total derivative. Accepted the Jacobian and continuous-partials citations. |
| R4-13 | confirmed fatal | The `xy` derivative used a theorem without a product rule. Accepted the product-rule and continuous-partials route. |
| R4-14 | confirmed fatal | The `x^2` witness lacked the total-derivative identification. Accepted the Jacobian and continuous-partials inputs. |
| R4-15 | confirmed fatal | The inline cone witness had the same missing identification and smoothness route. Accepted the replacement dependencies. |
| R4-16 | confirmed fatal | The inline critical-value witness had the same defect. Accepted the replacement dependencies. |
| R4-17 | confirmed fatal | Global injectivity contradicted the boundary-seam allowance. Accepted the consistent interior-injectivity Definition, refreshed consumer Facts, and `ai-altered` tag. |
| R4-18 | confirmed fatal | The cross-product Definition did not state triangle area. Accepted the explicit affine-patch/standard-triangle derivation. |
| R4-19 | confirmed fatal | Inner-product algebra did not state norm continuity. Accepted the exact norm-continuity lemma. |
| R4-20 | confirmed fatal | The cross-product Definition did not define flux. Accepted the regular-patch and oriented-flux Definitions and the two regularity checks. |
| R4-21 | confirmed fatal | The old title asserted an undefined surface convergence. Accepted the narrower inscribed-mesh title and Statement retag. |
| R4-22 | confirmed nonfatal | The prose repeats step 2.2, while the bracket cites 2.1, 2.2, 2.3 correctly. Recorded; no mathematical edit. |
| R4-23 | confirmed nonfatal | The fixed cylinder's finite area is a direct substitution into the preceding formula. This is a sub-30-second gap; recorded without edit. |
| R4-24 | confirmed nonfatal | The standard cap maps are named but not displayed. Their formulas and cross products are immediate; recorded without edit. |
| R4-25 | confirmed nonfatal | The tangent transport to the kernel compresses one chain-rule calculation. Recorded under the 30-second rule. |
| R4-26 | confirmed nonfatal | The target shear requires an implicit neighbourhood shrink. The product neighbourhood supplies it; recorded without edit. |
| R4-27 | confirmed nonfatal | Relative openness of the local patch cover follows immediately from the local graph equality; recorded. |
| R4-28 | confirmed nonfatal | The tangent-plane velocity contradiction compresses differentiation of graph curves. Recorded. |
| R4-29 | confirmed nonfatal | The limit-to-divergence step is one lower-bound multiplication. Recorded. |
| R4-30 | confirmed nonfatal | The authored tangent Definition correctly uses rank-nullity but the manifest omitted it. Accepted and synchronized the manifest. |
| R4-31 | confirmed nonfatal | The authored revolution theorem correctly uses Jordan–Fubini but the manifest omitted it. Accepted and synchronized the manifest. |

Every Reader 4 item-level dependency repair, including its explicit handoff,
was synchronized into `research/frontier-17-batch-4.pages.json`. No Reader 4
mathematical repair was rejected; no result was added or deleted.

## Reader 5 adjudications

| Finding | Verdict | Adjudication and disposition |
|---|---|---|
| R5-1 | confirmed fatal | The cited integer-part lemma defines no ceiling. Accepted the `1+floor` construction and exact inequalities. |
| R5-2 | confirmed fatal | Three interfaces widened a positive-radius-only published Definition to radius zero. Accepted the explicit local radius-zero extensions; the published item stayed read-only. |
| R5-3 | confirmed fatal | Cavalieri was applied before either set was proved bounded Jordan. Accepted the rebuilt compact-Jordan construction, section proof, additivity, and comparison. |
| R5-4 | confirmed fatal | The `a=b` shell case was sent through a strict partition and nondegenerate theorem. Accepted the separate zero-content annulus case. |
| R5-5 | confirmed fatal | Rectangle monotonicity did not license Jordan-subannulus bounds and extrema were unsupported. Accepted the cover-bound, extreme-value, and finite-additivity repair. |
| R5-6 | confirmed fatal | The Fubini Fact omitted ambient bounded-Jordan/integrability and exceptional-set hypotheses. Accepted the exact restatement. |
| R5-7 | confirmed fatal | Five Cavalieri Facts were inflated. Accepted their exact bounded-Jordan and sectional hypotheses. |
| R5-8 | confirmed fatal | Dominated differentiation omitted continuity and an absolutely integrable slice. Accepted the exact Fact and all-orders discharge. |
| R5-9 | confirmed fatal | Change of variables omitted compact-Jordan, boundedness, and integrability hypotheses. Accepted the exact Fact and compact exhaustion. |
| R5-10 | confirmed fatal | A result-name label replaced the ball recursion formula. Accepted the formula. My later audit found that its `n=1` branch still used the omitted base clause; I added it and regenerated the contract. |
| R5-11 | confirmed fatal | The unit-ball induction used `V_1(1)=2` absent from its Fact. Accepted the base clause. |
| R5-12 | confirmed fatal | The density and Fubini labels were swapped. Accepted the corrected labels and inputs. |
| R5-13 | confirmed fatal | The witness is a compact subset with empty interior, not a solid. Accepted the narrowed counterexample title. |
| R5-14 | confirmed fatal | The companion false-statement title overclaimed the same solid domain. Accepted the narrowed title. |
| R5-15 | confirmed nonfatal | The unsupported extra verification step was not load-bearing. Accepted its removal and removal of the unused dependency. |
| R5-16 | confirmed fatal | Contract quotes throughout the batch were hypothesis-free fragments. Accepted the semantic rewrite of all citation rows; the final contract has 161 citations after Alpha's added norm-continuity citation. |
| R5-17 | confirmed nonfatal | One summary surveyed another page and the other misstated the Gautschi route. Accepted both page-prose repairs. |
| R5-18 | confirmed nonfatal | Several boundary anchors described the wrong case or step. Accepted the full semantic boundary-row pass. |
| R5-19 | confirmed nonfatal | The torus semicircle-to-disc bridge is a direct cited substitution. Recorded without edit. |
| R5-20 | confirmed nonfatal | The low-dimensional ball substitutions are compressed but immediate from the declared disc and Wallis inputs. Recorded. |
| R5-21 | confirmed nonfatal | Two convex-combination lines behind monotone secant slopes are omitted. Recorded under the 30-second rule. |
| R5-22 | confirmed nonfatal | Uniform termwise integration of the logarithm series is compressed on a fixed half-radius interval. Recorded. |
| R5-23 | confirmed nonfatal | Strict increase of the derivative of a differentiable strictly convex function is a short secant-slope bridge. Recorded. |
| R5-24 | confirmed fatal | The compactness induction had no compact base. Accepted the Heine–Borel base repair. REF5-2 later found the separate missing norm-continuity input, polished below. |
| R5-25 | confirmed fatal | The annulus was called compact from closedness and boundedness without a cited theorem. Accepted the Heine–Borel input. |

No Reader 5 result was added or deleted. Its two summary edits and all item
repairs were accepted, with the two Alpha extensions named above.

## Read-only refuter adjudications

The required no-write refuters completed every proof-bearing item: REF2 covered
10/10, REF4 covered 53/53 including all forty high/critical items, and REF5
covered 51/51. They opened every cited item before alleging insufficiency.

| Finding | Verdict | Evidence and disposition |
|---|---|---|
| REF2-1 | confirmed fatal | The typed map has domain `[0,2pi]`, but its Statement and proof quantified `f'(t)` over all reals. Restricted the norm claim and derivative steps to `(0,2pi)` and synchronized the downstream false statement. |
| REF2-2 | confirmed fatal | Fact L2 omitted `c in A` from the exact vector-valued differentiability Definition. Restored it and regenerated both batch-2 contracts. |
| REF4-1 | confirmed fatal | The general complement theorem explicitly assumes Choice, which L2 silently dropped. Replaced it by the choice-free finite-dimensional orthogonal decomposition, used `E=K^perp`, retagged the Statement `ai-altered`, and refreshed every consumer contract. |
| REF4-2 | confirmed fatal | At `m=0` the positive-radius sphere is empty and has no extrema. Added `m>=1` to the Example and Given block and retagged the Statement `ai-altered`. |
| REF5-1 | confirmed nonfatal | Continuity of the square-root ball profile is an immediate composition argument. Recorded; no edit. |
| REF5-2 | confirmed nonfatal | Algebra of continuous functions did not itself prove norm continuity in the ball recursion. I unfolded the reverse-triangle proof from the Euclidean metric axiom, then updated the Fact, step input, contract, and manifest dependency. |
| REF5-3 | confirmed nonfatal | The shell proof compresses the final one-variable tagged-sum convergence. Continuity/uniform continuity closes it in under 30 seconds; recorded without edit. |

The refuters independently recomputed every AI-generated construction in these
batches for which a concrete truth concern could arise. The mixed-partial,
reciprocal-radius, radial-gradient, sine-product, ellipsoid, hyperboloid, cone,
cusp, critical-value, and periodic-Gamma witnesses all survived the targeted
counterexample checks. None is an authored or planned dependency target.

## Alpha-only defects found while adjudicating

- `cor-surface-area-of-revolution-formula`: Reader 4's mathematically correct
  prime repair left an apostrophe unescaped inside single-quoted YAML. The real
  renderer parser dropped the item. I doubled the YAML apostrophe, preserving
  the rendered first derivative; `rendercheck` is now clean. Ledger row
  `f17-6b-a-048`.
- `cor-volume-of-a-radius-r-n-ball`: after accepting R5-10, Fact F1 still
  omitted the base clause `V_1(r)=2r` used by proof step 1.2—the same defect
  R5-11 had caught in the unit-ball corollary. I restored the clause and
  regenerated the contract. Ledger row `f17-6b-a-049`.
- Three repaired volume proofs cited continuity lemmas homed on
  `partitions-of-unity-and-paracompactness`, outside the volume page's declared
  closure. I unfolded norm continuity from the Euclidean metric triangle
  inequality, used the already licensed composition theorem, rebound all three
  item/manifest dependency lists, and kept the unrelated page out of
  `requires`. Ledger row `f17-6b-a-050`.

## Risk reviews

`risk-report` routed 8 high/critical items in batch 2, 40 in batch 4, and 34 in
batch 5. Each received a substantive per-item `risk_review` in its owning batch
contract, recording the refuter, the specific boundary/citation/construction
obligations checked, and any repair. The three owning contract files—not the
merged file—are authoritative:

- `research/frontier-17-batch-2.proof-contracts.json`
- `research/frontier-17-batch-4.proof-contracts.json`
- `research/frontier-17-batch-5.proof-contracts.json`

`risk-report --require-reviewed` passes all three files. The revised REF5-2 citation
raises no new routed item; the ball recursion was already critical and its
review was amended to record the repair.

## Harvest faithfulness

I re-opened the current source URLs at the recorded locators rather than
treating liveness as evidence of contents. The 22/22 full-text fetch stamps are
current.

- Batch 2: Lebl §8.3/§11.4 and Toronto §2.1 support the derivative, polar, and
  standard counterexample context; OpenStax §2.2 and §2.4 contain the disc and
  surface-of-revolution formulas; Hall–Newell contains the exact circular
  vector-valued witness. The low-yield 7/25 warning is honest: most rows are
  already-published results, and the only remaining decline is the washer topic
  housed on the volume page. The APEX exact sine computation is additionally
  backed by a current archived full-text stamp.
- Batch 4: Tu §11 contains the constant-rank, level-set, immersion, submersion,
  and open-map development; Toronto §2.8 contains all five optimization
  examples including the two repaired harvest rows. Taylor §3.2, Toronto §5.3,
  Sjamaar §8.1, APEX Gabriel's horn, the Northwestern cone discussion, and
  Brewin §3.2 collectively support every surface, flux, graph, revolution,
  horn, and lantern heading. Brewin explicitly has the `4NM` triangle count
  and the stated convergence/divergence regimes.
- Batch 5: Taylor §3.1 contains graph-null and between-graphs Fubini; Angenent
  Chapter 8 contains slicing, Cavalieri, discs, washers, and shells; Axler §5C
  contains the unit-ball formula, table, limiting/maximizing exercises, and
  Gamma form. The complete Toronto Gamma/Beta handout contains every listed
  §1–§2.4 result, and Chandrasekharan Lectures 6–7 contain convergence,
  Bohr–Mollerup, and Stirling. The complex Gamma declines have the settled
  complex page as destination; the surface-area decline has the regular
  surfaces page.

The browser text extractor could not ingest the 51 MB Lee PDF or the archived
APEX PDF directly, and one Northwestern host URL exposed no text to that
extractor. I did not convert those failures into clean source claims: all three
have current full-body stamps, the Northwestern text was recovered from its
same-author university mirror, and their claimed headings were cross-checked
against the independent treatments above and the already completed Step-3
source review. No harvest heading or decline required repair at 6b.

## Provenance, changed artifacts, and twice-touched items

All 132 scoped items pass component-provenance policy. Every
`literature-derived` or `ai-altered` item has a reader-visible URL. Material
Statement/Definition/title repairs were retagged where the local adaptation is
now material: the regular patch Definition, graph/revolution surface theorems,
surface-area title, lantern title, radius-zero ball interfaces, compact-subset
titles, local graph specialization, and sphere-multiplier Example are
`ai-altered` as appropriate. Proof-only citation repairs retain their verified
statement provenance and `ai-altered` proof provenance.

No result was added or deleted, and Alpha authored no new proof. Reader changes
affected five batch-2 items and one A summary; twenty-one batch-4 items; and
twenty-three batch-5 items plus two A summaries. Alpha additionally changed:

- `cex-circular-curve-defeats-vector-valued-mean-value-equality`
- `fs-the-mean-value-equality-holds-for-vector-valued-maps`
- `cor-surface-area-of-revolution-formula`
- `cor-regular-level-set-local-graph-theorem`
- `ex-lagrange-multipliers-on-the-sphere`
- `cor-volume-of-a-radius-r-n-ball`
- `thm-volume-of-a-closed-three-ball-cavalieri-proof`
- `thm-cylindrical-shell-formula-for-solids-of-revolution`
- `thm-volume-recursion-for-closed-euclidean-balls`
- the three owning proof-contract files and the batch-4/batch-5 manifests.

The twice-touched item set for the lead Alpha is:
`cex-circular-curve-defeats-vector-valued-mean-value-equality`,
`fs-the-mean-value-equality-holds-for-vector-valued-maps`,
`cor-surface-area-of-revolution-formula`,
`cor-regular-level-set-local-graph-theorem`,
`cor-volume-of-a-radius-r-n-ball`, and
`thm-volume-of-a-closed-three-ball-cavalieri-proof`,
`thm-cylindrical-shell-formula-for-solids-of-revolution`, and
`thm-volume-recursion-for-closed-euclidean-balls`. Each received a final
step-by-step read here; none remains open.

## Gate record and remaining constraints

Current group-scoped results:

- targeted precheck: 6/6 final Alpha-touched proof items pass;
- strict proof contracts: 10/10, 53/53, and 51/51 pass;
- citation fidelity: 87, 263, and 161 citations, no missing quote or widening detector hit;
- boundary audit: 80, 424, and 408 rows, no contradicted or template disposition;
- risk report with required reviews: all routed items complete;
- content policy: 132 scoped items, no error or warning;
- coverage checklist: 25, 71, and 82 harvested rows; only the adjudicated batch-2 low-yield warning;
- source fetch: 22/22 sources full-text verified;
- rendercheck: 6514 files, clean under real KaTeX and renderer YAML;
- validate-plan: clean after the explicit inner-product prerequisite for the
  choice-free local-graph proof and the volume dependency-closure repairs;
- page-summary shape: all five A pages and five B companions conform.

The accepted batch 2/4/5 manifests have been transcribed with
`splice-plan --update`. The full repo `depcheck` is red only for the pre-existing,
out-of-scope published `rem-sine-period-arc-length-integrand-is-nonelementary`,
whose `verification.sources_checked` is absent; no group-a item is implicated.
The whole-level splice verification and merged-contract battery remain an
engine/global join while group b is still writing its own disjoint manifests.
No mathematical gap remains in batches 2, 4, or 5.

## Context-continuity checkpoint

Substage: final synchronization. Owned artifacts are the two group-a 6b output
files, batch 2/4/5 items, manifests, and owning contracts. All reader/refuter
findings are adjudicated; 50 distinct fatal defects are fixed and ledgered;
text remains unfrozen; no proof or harvest question is open. The working tree
is the active Frontier-17 draft tree with unrelated owner/other-lane changes
preserved. Exact next action: the engine's whole-level splice verification and
final gate battery after the remaining concurrent Alpha returns.
