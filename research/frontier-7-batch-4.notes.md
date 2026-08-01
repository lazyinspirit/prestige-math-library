# Frontier-7 batch 4 — Step-1/2 scaffold notes

Pages: `tychonoff-embedding-and-stone-cech` (271/272) and
`metrization-theorems` (275/276). These notes bind Beta-frontier7-4 at Step 5.
The final page objects are in `research/frontier-7-batch-4.pages.json` and the
durable proof obligations are in
`research/frontier-7-batch-4.proof-contracts.json`.

## 1. Applyable prose-scaffold amendments

### 1.1 Page 271: make the split-off Tychonoff/Stone–Čech scope authoritative

**File:** `research/plan-topology-track.md`

**Section:** `## T7. Separation Axioms   [needs F1]`

**Anchor:** the final sentence `CEX: one per failing implication in the chain,
matched explicitly.`

**Edit:** insert immediately after that sentence and before the following
horizontal rule:

```md
**Frontier-7 page-271 scaffold (2026-08-01).** The split-off page
`tychonoff-embedding-and-stone-cech` defines point–closed-set separating
families of unit-interval-valued functions, their evaluation maps, Hausdorff
compactifications, and the Stone–Čech extension property. It proves the
Tychonoff cube-embedding theorem without a compactness assumption. Assuming
the ultrafilter lemma, the closure of the full evaluation image is a compact
Hausdorff compactification; dependent choice is additionally stated where the
published compact-Hausdorff-to-Tychonoff theorem is used to pass from
unit-interval extensions to arbitrary compact Hausdorff targets. The universal
property and uniqueness are not silently attributed to compactness of the cube
alone. The companion computes finite discrete spaces and $\beta\mathbb N$'s
bounded-function extension property, and the one-point compactification of
discrete $\mathbb N$ supplies a compactification that is not Stone–Čech.
No ultrafilter model of $\beta\mathbb N$, cardinality claim, no-convergent-
sequence theorem, Gelfand spectrum, or Wallman construction is asserted here.
```

This is an additive correction to the old combined T7 inventory. It prevents
the old phrase "the Stone-Cech compactification" from hiding both the universal
property proof and its choice route.

### 1.2 Page 275: replace the underspecified metrization block

**File:** `research/plan-topology-track.md`

**Section:** `### T8b. Metrization Theorems   (spec order 275)`

**Old text:**

```md
DEFS: sigma-locally-finite and sigma-discrete bases (the local finiteness notion
comes from 269, `partitions-of-unity-and-paracompactness`).

THMS: **URYSOHN METRIZATION** (regular + second countable + $T_1$ $\Rightarrow$
metrizable); **NAGATA–SMIRNOV** (metrizable $\iff$ regular $T_1$ with a
sigma-locally-finite basis); **BING** (the sigma-discrete form); **SMIRNOV**
(locally metrizable + paracompact + Hausdorff $\Rightarrow$ metrizable).

FS: every regular space is metrizable.

B (276): the Niemytzki plane (Tychonoff, not normal, not metrizable); the
Sorgenfrey line again, now as the standard failure of Urysohn's hypotheses.
```

**New text:**

```md
DEFS: discrete families; sigma-locally-finite and sigma-discrete bases; locally
metrizable spaces; stars, star refinements, and compatible normal sequences of
open covers. "Regular" does not include $T_1$ in this library, so every
metrization criterion states $T_1$ separately.

THMS (with Choice stated as a sufficient hypothesis for the proofs given): the
Alexandroff–Urysohn compatible-normal-sequence metrization lemma; metric spaces
have sigma-locally-finite and sigma-discrete bases; **NAGATA–SMIRNOV**
(metrizable iff regular $T_1$ with a sigma-locally-finite basis); **BING** (the
sigma-discrete form); **URYSOHN METRIZATION** as the second-countable corollary;
and **SMIRNOV** (metrizable iff paracompact, Hausdorff, and locally metrizable).
The Smirnov sufficiency proof merges sigma-locally-finite bases over a locally
finite metrizable cover and then invokes Nagata–Smirnov.

FS: every regular space is metrizable. B (276): an uncountable discrete metric space shows that second
countability is sufficient rather than necessary; the lower-limit line is the
regular separable nonmetrizable witness; and the Niemytzki plane is the
Tychonoff locally metrizable nonnormal witness showing why Smirnov needs
paracompactness.
```

## 2. Web-research ledger

All URLs below returned HTTP 200 on 2026-08-01 except the discarded AMS preview,
which returned 403 and is not used.

| key | working source | material supported | convention / risk checked |
|---|---|---|---|
| S1 | [Stacks Project, Tag 0908, Stone–Čech compactification](https://stacks.math.columbia.edu/tag/0908) | Universal property, existence by a product-and-closure construction, density-based uniqueness | Stacks constructs the universal map for arbitrary spaces; this pair restricts the reader-facing compactification statement to Tychonoff spaces so the canonical map is an embedding. |
| S2 | [E. Moorhouse, *The Stone–Čech Compactification*](https://ericmoorhouse.org/handouts/stone-cech.pdf) | Full evaluation-cube construction, extension property, fixed compact-Hausdorff case, finite/discrete examples | The local library route explicitly separates the ultrafilter-lemma compactness cost from the additional DC route used to embed compact Hausdorff targets. |
| S3 | [Encyclopedia of Mathematics, *Metrizable space*](https://encyclopediaofmath.org/wiki/Metrizable_space) | Exact Urysohn, Nagata–Smirnov and Bing criteria and historical attributions | Its word "regular" follows a convention that may include separation; library Statements say regular **and $T_1$**. |
| S4 | [Umeå University, *The Smirnov- and Bing–Nagata–Smirnov Metrization Theorems*](https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1395113) | Full proof routes for compatible cover sequences and the sigma-locally-finite criterion | Used for the hard sufficiency direction; Step 5 must not replace it by a one-line "standard construction". |
| S5 | [R. H. Bing, *Metrization of Topological Spaces*, Canadian J. Math. 3 (1951)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf) | Sigma-discrete basis theorem and its well-ordering construction | Necessity is recorded under Choice; no claim about exact ZF strength is made. |
| S6 | [UCR, *Partitions of Unity and a Metrization Theorem of Smirnov*](https://math.ucr.edu/~res/math205A/smirnov.pdf) | Exact local-to-global theorem: paracompact Hausdorff plus locally metrizable implies metrizable | The scaffold uses a Nagata–Smirnov basis proof rather than importing the PDF's normed-space patching machinery. |
| S7 | [University of Illinois Math 535 course record](https://lerman.web.illinois.edu/535/f20/535f20hw.html) | Unit-cube proof of Urysohn metrization and the Moore-plane nonnormal example | Course record confirms the standard curricular statements; detailed Moore-plane nonnormality is additionally supported by S8. |
| S8 | [D. Chodounský, *Non-normality and relative normality of Niemytzki plane*](https://eudml.org/doc/196374) | Nonnormality of the Niemytzki plane | The planned proof uses the already published Jones bound rather than treating nonnormality as a picture. |

The discarded claims from the broad survey are deliberate: no identification
of $\beta\mathbb N$ with ultrafilters, no $|\beta\mathbb N|$ calculation, no
Gelfand–Kolmogorov theorem, and no claim that the ultrafilter lemma implies DC.

## 3. Authorship and exact source plan

Every in-flight item is `authorship: ai-altered`, not `literature-derived`:
the mathematical statements are established and source-backed, but Step 5 will
write a new library-specific proof, verification, or witness and therefore
materially reformulate the source. There are no `ai-generated` claims and no
`generation` blocks in this batch.

| planned id(s) | source key(s) and rationale |
|---|---|
| `def-unit-interval-function-family-separates-points-from-closed-sets`, `def-evaluation-map-into-unit-cube`, `lem-evaluation-map-of-separating-family-is-an-embedding`, `thm-tychonoff-embedding-theorem` | S2, S7; standard evaluation embedding, rewritten to match this library's $f(x)=1$, $f[C]=0$ convention. |
| `def-compactification-of-a-tychonoff-space`, `cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma`, `def-stone-cech-compactification`, `lem-unit-interval-functions-extend-over-evaluation-closure`, `lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`, `thm-stone-cech-evaluation-closure-universal-property`, `cor-stone-cech-compactification-is-unique-over-x`, `cor-stone-cech-of-compact-hausdorff-space-is-itself` | S1, S2; standard construction/universal property, with the library's available choice hypotheses made explicit. |
| `ex-stone-cech-of-a-finite-discrete-space`, `ex-bounded-functions-on-n-extend-to-beta-n`, `cex-one-point-compactification-of-n-is-not-beta-n`, `fs-every-hausdorff-compactification-is-stone-cech` | S1, S2; standard consequences and standard parity obstruction, with newly written local verifications. |
| `def-discrete-family-and-sigma-bases`, `lem-discrete-families-are-locally-finite`, `def-compatible-normal-sequence-of-open-covers`, `lem-alexandroff-urysohn-metrization-lemma`, `lem-metric-spaces-have-sigma-locally-finite-bases`, `rem-sigma-locally-finite-base-produces-compatible-normal-sequence`, `thm-nagata-smirnov-metrization` | S3, S4; established definitions and theorem/proof decomposition. Star refinement itself is reused from `def-cover-refinement-and-local-finiteness`, not re-minted. |
| `rem-metric-spaces-have-sigma-discrete-bases`, `thm-bing-metrization` | S3, S5; Bing's established theorem and its hard necessity lemma. |
| `cor-urysohn-metrization` | S3, S7; classical corollary, proved here through Nagata–Smirnov rather than a second independent long construction. |
| `def-locally-metrizable-space`, `lem-locally-finite-union-of-sigma-locally-finite-bases`, `thm-smirnov-local-metrization` | S4, S6; standard local-to-global route, decomposed at the locally-finite basis merger. |
| `ex-uncountable-discrete-space-meets-bing-not-urysohn`, `ex-lower-limit-line-is-regular-and-not-metrizable`, `fs-every-regular-space-is-metrizable` | S3 and the published lower-limit-line sources; standard witnesses, locally reverified. |
| `ex-niemytzki-plane-metrization-profile` | S7, S8; classical Moore/Niemytzki plane and its standard use against normality and metrization. |

At Step 5 every item receives the URL(s) named in its row under
`sources.references`. The source prose is not copied.

## 4. Published-dependency semantic ledger

Every dependency listed in the batch manifest was opened from `items/` and was
confirmed `status: published`. None has an `authorship` field, so all are
`legacy-unclassified`; no provenance tag is inferred or backfilled.

**Established-from-knowledge after reading the exact on-disk Definition or
Statement:** `def-continuous-map-top`, `def-interval`, `def-product-topology`,
`thm-product-universal-property`, `def-homeomorphism-and-open-maps`,
`def-completely-regular-and-tychonoff-spaces`,
`lem-products-preserve-complete-regularity`,
`lem-complete-regularity-is-hereditary`,
`lem-products-preserve-t0-t1-and-hausdorff`,
`lem-t0-t1-and-hausdorff-are-hereditary`, `def-dense-top`,
`def-compact-space`, `def-hausdorff-space`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-closure-characterisation-top`, `def-dependent-choice`,
`cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal`,
`thm-compact-subset-of-a-hausdorff-space-is-closed`,
`thm-compactness-under-continuous-maps`, `def-standard-topologies`,
`def-natural-numbers`, `def-one-point-compactification`,
`thm-one-point-compactification-properties`,
`def-cover-refinement-and-local-finiteness`,
`def-topology-basis-subbasis`, `def-countable`, `def-neighbourhood-top`,
`def-subspace-topology-top`, `def-metrizable-space`, `def-metric-space`,
`def-t0-and-t1-spaces`, `def-regular-and-t3-spaces`,
`def-axiom-of-choice`, `def-second-countable-space`,
`def-separable-space`, `thm-rationals-countable`, `lem-rat-embeds-dense`,
`thm-r-uncountable`, `thm-basis-criterion`, `def-paracompact-space`, and
`lem-paracompact-hausdorff-is-regular`.

**Source-checked after reading the exact on-disk Statement:**
`thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` (its WVU source
and S1/S2), `cor-a-compact-hausdorff-space-is-tychonoff` (its cited Tychonoff/
compact-space references and S2), `thm-stone-metric-spaces-are-paracompact`
(its AMS Ornstein paper), `thm-metric-countability-equivalences` (its UCR
notes), `def-lower-limit-topology` and
`lem-lower-limit-line-is-regular-and-lindelof` (their Steen–Seebach/Gruenhage
references), `lem-jones-normal-density-discrete-bound` (its Jones/Gruenhage
references), `thm-cardinal-power-set-and-cantor` (its Cantor/cardinal
references), and `thm-paracompact-hausdorff-implies-normal` (its Dartmouth
notes). The exact hypotheses and directions in the manifest match the disk
Statements; in particular regularity never silently includes $T_1$.

No opened published dependency contains an unambiguous load-bearing falsehood.
No published-dependency repair is proposed.

## 5. Proof-obligation and boundary map

The machine-readable per-item map is the proof-contract file. The following
cross-cutting obligations are mandatory at Step 5:

- The empty space, empty function family, and empty cube index are handled in
  the evaluation items. A separating family cannot separate two distinct points
  if it is empty, but the empty and one-point spaces still satisfy the embedding
  theorem without a fabricated coordinate.
- Evaluation injectivity uses $T_1$ exactly to make a singleton closed. Recovery
  of the source topology uses the complement of the chosen neighbourhood, not
  a stronger normality hypothesis.
- Compactness of the evaluation cube cites the published compact-Hausdorff
  product theorem under the ultrafilter lemma. The arbitrary-target extension
  theorem separately states dependent choice; no implication between those
  principles is asserted.
- The Stone–Čech target map is shown to land in the embedded target by
  closedness plus density. Coordinatewise extension alone is insufficient.
- The one-point-compactification witness starts at $0$: parity gives infinitely
  many even and odd naturals, and every neighbourhood of infinity is cofinite.
- Normal-cover sequences are indexed from $0$. Any metric series uses weights
  beginning at $2^{-1}$, not $2^0$, and empty cover layers remain legal.
- All four metrization biconditionals prove both directions. "Regular" and
  "$T_1$" are separate inputs. Necessity never cites second countability.
- The sigma-locally-finite basis construction uses shrinking mesh; local
  finiteness alone does not make its union a basis. The sigma-discrete basis
  lemma retains the well-ordering/Choice use from Bing's construction.
- In Smirnov sufficiency the refining cover consists of open subspaces of the
  original metrizable neighbourhoods; metrizability passes to those subspaces.
  Local finiteness of the outer cover is used to make each merged basis layer
  locally finite.
- The lower-limit-line injection sends each real $x$ to a basis member
  $B_x$ with $x\in B_x\subseteq[x,x+1)$; equality $B_x=B_y$ forces both
  $x\le y$ and $y\le x$. No arbitrary choice is needed if one assumes a fixed
  countable basis and chooses the first member in its enumeration.
- The Niemytzki tangent radii are strictly positive. The boundary is proved
  closed and discrete, the proposed countable upper-half-plane subset is proved
  dense, and Jones's lemma is applied only after normality is assumed. The
  cardinal contradiction explicitly uses Cantor's strict inequality.

## 6. Step-6 Alpha forensic dispositions

- The empty-family separation definition was corrected: an empty family works
  exactly when the space is empty, since the closed set in the condition may be
  empty.
- The ultrafilter-lemma compactification corollary now states the full
  evaluation closure, not merely existence, and its compact/Hausdorff factor
  facts are cited locally. The Stone--Cech theorem now cites that exact result.
- The purported local compatible-normal-sequence construction and the purported
  local sigma-discrete-basis construction were both invalid. Each is retained
  only as a source-backed `proved_here: false` external fallback, documenting
  the exact standard statement, the failed local route, and why the theorem
  still needs it. The Nagata--Smirnov and Bing theorem facts explicitly say
  that these inputs are external fallbacks.
- The Niemytzki cardinal argument was repaired using the continuum bijection,
  countability bounds, Cantor, and Schroder--Bernstein. Its Tychonoff assertion
  now includes a local tangent-disk bump-function proof of complete regularity
  and a basis argument for Hausdorff/$T_1$.
- Reader-identified tangent/cotangent, coset, hyperbolic, one-sided-convex,
  and gradient-equality presentation gaps were classified as the permitted
  30-second nonfatal polish class and left unchanged.

No forward reference is load-bearing. No item in either pair depends on the
other selected pair. Both B pages are leaves: their items depend only on their
own A page or published A-page material. The three refutation/example pairs do
not cite their B-page witnesses: each repeats the required witness argument from
published/A-page premises, because the plan gate treats every B page as a leaf
even with respect to other B-page items.

## 6. Richness and decomposition pass

- Tychonoff/Stone–Čech: the long universal-property proof is decomposed into
  the evaluation-embedding lemma, compactification corollary, interval-extension
  lemma, and compact-target embedding lemma. The useful corollary pass adds
  uniqueness over $X$ and the compact-Hausdorff fixed-point result.
- Metrization: the Nagata–Smirnov proof is decomposed into the compatible-normal-
  sequence lemma and its construction from a sigma-locally-finite basis; Bing's
  hard necessity direction is its own sigma-discrete-basis lemma; Smirnov is
  decomposed at the locally-finite basis-merger lemma. The useful corollary pass
  adds Urysohn metrization.
- Neither A page exceeds the 100-item review ceiling. No padding was added.

## 7. ID and closure report

An exact `rg` search over `items/` and `research/plan-spec.json` for all planned
ids returned no matches before the manifest was written. No existing id is
renamed or duplicated. Every load-bearing dependency is earlier inside its own
pair or is a published item opened from disk. There is no external fallback,
no `proved_here: false` item, no forward dependency, and no cross-batch edge.

## 8. Step-5 mechanism observations

- The proof-obligation pass exposed a fatal premise error before independent
  review: point–closed-set separation alone does not imply point separation in a
  non-$T_1$ space. The separating-family definition now records both clauses,
  and the evaluation-embedding proof uses the point clause directly. The full
  Tychonoff family is licensed by complete regularity together with its explicit
  $T_1$ hypothesis.
- The exact-dependency pass exposed a second load-bearing omission: compactness
  of the cube under the ultrafilter lemma did not by itself state Hausdorffness.
  The compactification proof now cites the published product-Hausdorff lemma
  separately. It also found the missing compactness definition in the
  one-point-compactification refutation and added that real dependency.
- The batch leaf check remained effective: the four B-page witnesses use only
  A-page or published material. No B-to-B dependency was introduced.
- YAML and phase-format gates found invalid TeX escaping in draft titles and
  noncanonical proof stratification. Both were repaired before the contracts
  were frozen. These were presentation/mechanical defects, not mathematical
  findings.
- High-risk items retained for independent Step-6 refutation are the two hard
  sigma-base construction lemmas, the compatible-cover metrization lemma, and
  the Niemytzki-plane profile. Their source URLs and proof contracts are present;
  Step 5 does not certify their detailed topology arguments.
