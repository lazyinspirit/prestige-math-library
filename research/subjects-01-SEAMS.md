# subjects-01 — the seam, ownership and placement contract

Owner commission, 2026-08-13: amend and expand the prose scaffolds so future
mathematical content is richer, across **thirteen subjects**, one Opus 5
`scaffolder` lane each (xhigh, 1M window), each free to fan out to its own Opus 5
research subagents.

This file is the ORCHESTRATOR's answer to the owner's fourth requirement —
*"many of these subjects will be inter-dependent … YOUR job is to identify and
reconciliate dependencies. Minimize forward references wherever possible, but do
NOT drop content to avoid forward references."* Every scaffolder reads it and is
bound by it. Where a scaffolder believes a ruling here is mathematically wrong,
it records the objection in its own "Amendments owed" section and proceeds under
the ruling; it never silently re-decides a seam.

---

## 0. The three rules that make thirteen concurrent scaffolders safe

1. **Exclusive file ownership.** A track writes exactly the file(s) named as its
   own in §2. It never opens another track's file for writing, even to fix an
   obvious error. Anything it wants changed elsewhere goes in its own
   **"Amendments owed to other scaffolds"** section — the existing house idiom
   (`plan-combinatorics-and-categories.md` §10,
   `plan-algebra-track-expansion.md` §8) — and the orchestrator applies it at
   reconciliation. This is what replaces Alpha's cap-of-1 mutual exclusion.
2. **No absolute plan orders.** Number your pages **relative** (`MT-1`, `MT-2`,
   …). Quote an ANCHOR page id from §3, never an integer order. Orders are
   recomputed globally in one splice pass at the end, exactly as
   `research/scaffold-expansion-2026-07-28.md` records: *"Any order quoted in the
   three scaffold files is a PROPOSAL … believe the spec, never the prose."*
   **The absolute orders written in the existing scaffold files are STALE** —
   `plan-complex-analysis-track.md` says CA-1 is order 243; it is actually 303.
3. **`items[]` is the only honest signal of what exists.** A page in
   `research/plan-spec.json` with a non-empty `items` array is authored; an empty
   one is a plan and its content does not exist. 244 of 448 pages are authored.
   Never claim "the library has X" from a scaffold file's prose.

---

## 1. Verified from disk, 2026-08-13 — findings that shape several tracks

Checked by the orchestrator, not taken from any agent's prose.

- **There is no Galois theory anywhere in the 448-page plan.** No Galois
  correspondence, no solvability by radicals, no insolubility of the quintic.
  Published: splitting fields, normal extensions, `def-normal-algebraic-extension`,
  `thm-real-automorphisms-of-the-complex-numbers`. Planned but unauthored:
  `algebraic-extensions-degree-and-finite-fields` (96/97).
  **Orders 98–101 are the only free integers below 443**, and they sit exactly
  between 96/97 and `modules-and-module-homomorphisms` (102). A two-A/B-pair hole
  in precisely the right place. This is `abstract-algebra`'s headline gap and
  `number-theory` and `commutative-algebra` both depend on it being filled.
- **The field of fractions and localisation IS now published** —
  `the-field-of-fractions-and-localisation`, order 53.2, 22 items. The gap
  recorded in `scaffold-expansion-2026-07-28.md` §"Verified from disk" is closed.
  `commutative-algebra` builds on it and must not redefine it.
- **Measure theory and functional analysis exist only as `deferred-*` catalogue
  pages** at orders 1 and 2, with `DEFERRED.md` §1 and §2 as their backlog.
  Those two tracks are expected to DISCHARGE that backlog and to say, item by
  item, which deferred result they now supply. `DEFERRED.md` §0 lists what is
  *already available* without those tracks — do not re-mint any of it.
- **Definitional coverage probes** (`grep` over 4172 item files): zero definitions
  of Noetherian, quadratic residue, tensor product, chain complex, smooth
  manifold, chart, Banach space, Hilbert space, countably additive, Lebesgue
  measure. One definition mentioning outer measure. The measure-theoretic
  vocabulary in the corpus is the *elementary* one (`DEFERRED.md` §0): measure
  zero in the covering sense, Jordan content. Do not mistake it for a measure
  track.
- **Probability is finite only.** `finite-probability-spaces-and-random-variables`
  (220.2) and `finite-probability-and-the-probabilistic-method` (221) are
  authored. There is no σ-additive probability.
- **Category theory is authored through limits and colimits** (359–363).
  Adjunctions, monads, Kan extensions, additive/abelian, monoidal, braided and the
  whole homological block (365–392) are planned and unauthored.

---

## 2. Roster: subject → owned file → wave

A track marked ENRICH edits its existing file in place. A track marked NEW
creates its file. **No file appears twice in this table.**

| # | track | owned file | mode | wave |
|---|---|---|---|---|
| 1 | `measure-theory` | `research/plan-measure-theory-track.md` | NEW | 1 |
| 2 | `abstract-algebra` | `research/plan-algebra-track.md` **and** `research/plan-algebra-track-expansion.md` | ENRICH | 1 |
| 3 | `combinatorics` | `research/plan-combinatorics-and-categories.md` (CB-\*, GT-\* sections only) | ENRICH | 1 |
| 4 | `monoidal-abelian-categories` | `research/plan-category-theory-track.md` | NEW | 1 |
| 5 | `functional-analysis` | `research/plan-functional-analysis-track.md` | NEW | 2 |
| 6 | `commutative-algebra` | `research/plan-commutative-algebra-track.md` | NEW | 2 |
| 7 | `group-theory` | `research/plan-group-theory-track.md` | NEW | 2 |
| 8 | `homological-algebra` | `research/plan-homological-algebra-track.md` | NEW | 2 |
| 9 | `probability-theory` | `research/plan-probability-track.md` | NEW | 3 |
| 10 | `pde` | `research/plan-pde-track.md` | NEW | 3 |
| 11 | `number-theory` | `research/plan-number-theory-track.md` | NEW | 3 |
| 12 | `differential-geometry` | `research/plan-differential-geometry-track.md` | NEW | 3 |
| 13 | `complex-analysis` | `research/plan-complex-analysis-track.md` | ENRICH | 4 |

**Why `group-theory` gets a new file rather than the algebra expansion.**
`plan-algebra-track-expansion.md` already holds AG-1…AG-4 (A_n simplicity,
Jordan–Hölder, semidirect products, Sylow), MOD-1…MOD-5 and RT-1…RT-4. Those stay
with `abstract-algebra`, which owns that file. `group-theory` takes only what the
algebra files do not reach — see §4.

**Wave order is a dependency pipeline, not a barrier.** A wave-2 track launches
the moment the specific wave-1 track it depends on finishes, not when all of
wave 1 finishes. The cap of 4 on the `scaffolder` lane is a memory ceiling
(`ARCHITECTURE.md`), not a batching decision.

---

## 3. Placement anchors

Each track's block sits **immediately after its anchor page** in reading order.
Everything at or below the anchor is available to cite; nothing above it is.
Anchors are page **ids**; the orchestrator converts them to orders at splice.

| track | anchor page id | note |
|---|---|---|
| `abstract-algebra` (Galois block) | `algebraic-extensions-degree-and-finite-fields-examples` | the free 98–101 slot |
| `group-theory` (structure) | `sylow-theorems-and-nilpotent-groups-examples` | |
| `group-theory` (geometric/topological) | `applications-of-the-fundamental-group-examples` | needs the fundamental group |
| `commutative-algebra` | `modules-over-a-pid-and-canonical-forms-examples` | above Galois, so it may use it |
| `number-theory` (elementary, reciprocity) | `splitting-fields-examples` | |
| `number-theory` (algebraic) | `commutative-algebra`'s last page | |
| `number-theory` (analytic) | `bloch-schottky-and-picard-examples` | needs ζ and the CA track |
| `combinatorics` | in place, within its existing 191–228 band | |
| `measure-theory` | `stone-weierstrass-general-examples` | earliest legal: needs only real analysis + LCH topology |
| `functional-analysis` | `measure-theory`'s last page | |
| `probability-theory` | `functional-analysis`'s last page | |
| `pde` | `probability-theory`'s last page | |
| `monoidal-abelian-categories` | in place, within 365–380 | |
| `homological-algebra` | in place, within 381–392 | |
| `differential-geometry` | `spectral-sequences-examples` | needs the homological machinery for de Rham |
| `complex-analysis` | in place, within 303–356 | |

**The consequence worth understanding: the whole analysis band (measure →
functional analysis → probability → PDE) lands BELOW complex analysis, categories
and homological algebra.** That is deliberate. Measure theory's true
prerequisites stop at real analysis and locally compact Hausdorff topology, both
published, so the earliest legal anchor is also the most useful one: it lets the
complex-analysis enrichment cite $L^p$ and Lebesgue integration (Hardy spaces,
boundary values, Fatou's theorem) instead of forward-referencing them, and it
lets differential geometry integrate on manifolds against a real measure. Placing
that band high — after Erdős–Hajnal, where there is free integer space — would
have been easier and would have cost exactly those citations.

---

## 4. The ownership table — contested concepts, one owner each

**This is the operative section.** If a concept is listed, the named track mints
the definition and the main theorems, and every other track CITES it and does not
re-mint it. An id minted twice is the single most expensive failure this
commission can produce.

### Analysis

| concept | owner | everyone else |
|---|---|---|
| σ-algebras, outer measure, Carathéodory, Lebesgue measure on $\mathbb{R}^n$ | `measure-theory` | cite |
| measurable functions, the integral, MCT / Fatou / DCT | `measure-theory` | cite |
| $L^p$ spaces **entire**: Hölder, Minkowski, Riesz–Fischer completeness, separability, **and the duality $(L^p)^*\cong L^q$** | `measure-theory` | cite |
| finite product measures, Fubini–Tonelli | `measure-theory` | cite |
| Radon–Nikodym, Lebesgue decomposition, signed/complex measures | `measure-theory` | cite |
| Lebesgue differentiation, Vitali covering, Egorov, Lusin, absolutely continuous FTC, Banach–Zarecki | `measure-theory` | cite |
| **Riesz–Markov–Kakutani** (positive functionals on $C_c(X)$ ↔ Radon measures) | `measure-theory` | cite |
| measure-preserving maps, Poincaré recurrence, **Birkhoff and von Neumann ergodic theorems** | `measure-theory` | `probability-theory` cites for stationary sequences |
| normed and Banach spaces, Hahn–Banach, uniform boundedness, open mapping, closed graph | `functional-analysis` | cite |
| dual spaces, weak and weak\* topologies, Banach–Alaoglu, reflexivity, Krein–Milman | `functional-analysis` | cite |
| Hilbert spaces, orthonormal bases, **Riesz representation for Hilbert space** ($H^*\cong H$) | `functional-analysis` | cite |
| compact operators, Fredholm theory, **spectral theory of bounded / self-adjoint / normal / unbounded operators**, functional calculus, projection-valued measures | `functional-analysis` | cite |
| Banach algebras, Gelfand theory, C\*-algebras | `functional-analysis` | cite |
| **Fourier series, Fourier transform on $L^1$/$L^2$/Schwartz, Plancherel, convolution** | `functional-analysis` | `pde` cites |
| distributions $\mathcal{D}'$, $\mathcal{S}'$ and their topologies | `functional-analysis` | `pde` cites |
| **Sobolev spaces $W^{k,p}$, embeddings, traces, Poincaré, Rellich–Kondrachov** | `pde` | — |
| weak solutions, Lax–Milgram, elliptic regularity, variational methods, semigroups, characteristics, conservation laws | `pde` | — |
| **harmonic functions in $\mathbb{R}^n$**: fundamental solution, mean value property, maximum principle, Harnack, Green's functions, Newtonian potential | `pde` | — |
| **harmonic functions in the plane**: Poisson kernel on the disc, subharmonicity via holomorphic methods, Perron's method for plane domains, conformal invariance | `complex-analysis` | `pde` cites and does **not** redo the 2-D theory |
| measure-theoretic probability, independence, Borel–Cantelli, LLN, weak convergence and tightness, characteristic functions, CLT | `probability-theory` | — |
| **Kolmogorov extension / infinite product measures**, conditional expectation, martingales, Markov chains, Brownian motion | `probability-theory` | — |
| **finite probability and the probabilistic method** (authored, 220.2/221) | `combinatorics` | `probability-theory` cites it and does **not** rebuild finite probability |

### Algebra

| concept | owner | everyone else |
|---|---|---|
| **Galois correspondence, solvability by radicals, insolubility of the quintic, cyclotomic and finite-field Galois theory** | `abstract-algebra` | cite |
| linear-algebra completion: inner product spaces, diagonalisation, minimal polynomial, Jordan form, **finite-dimensional spectral theorem and SVD** | `abstract-algebra` | cite |
| modules: tensor products of modules, chain conditions, semisimplicity, Wedderburn–Artin, modules over a PID | `abstract-algebra` | cite |
| **`def-noetherian-module`, `def-artinian-module`, `def-noetherian-ring`** — all three minted on the chain-conditions page | `abstract-algebra` | `commutative-algebra` cites all three |
| representation theory of finite groups: group algebra, Maschke, characters, induced representations | `abstract-algebra` | `group-theory` may extend to modular/Brauer theory |
| Hilbert basis, primary decomposition, integral extensions, going-up/down, Noether normalisation, Nullstellensatz, dimension theory, DVRs, **Dedekind domains**, completions, flatness | `commutative-algebra` | cite |
| localisation and the field of fractions (**published**, 53.2) | nobody re-mints | `commutative-algebra` builds on it |
| Koszul complexes, regular sequences, depth, Auslander–Buchsbaum | `commutative-algebra`, placed **after** `homological-algebra` | — |
| $p$-groups and nilpotency beyond Sylow, permutation group theory, presentations and combinatorial group theory, **geometric group theory** (Cayley graphs, growth, quasi-isometry, amenability, Bass–Serre), profinite groups, the finite simple group landscape | `group-theory` | — |
| **group extensions**: low-degree interpretation, $H^1$ as complements, $H^2$ as extensions, Schur multiplier | `group-theory` | cites `homological-algebra` for the derived-functor construction |
| **group cohomology $H^n(G,M)$ as a derived functor** | `homological-algebra` | `group-theory` cites |
| **Lie groups, Lie algebras, the exponential map, and the abstract structure theory of Lie algebras** (solvable/nilpotent/semisimple, Killing form, root systems, Cartan classification) — **the whole block** | `differential-geometry` | `abstract-algebra` and `group-theory` do **not** open it |
| quadratic reciprocity, arithmetic functions, continued fractions, Diophantine equations | `number-theory` | — |
| algebraic number theory: rings of integers, class group, unit theorem, splitting and ramification of primes | `number-theory` | cites `commutative-algebra` for Dedekind theory |
| analytic number theory: PNT, Dirichlet's theorem, $L$-functions | `number-theory` | cites `complex-analysis` for ζ's continuation and functional equation |
| **the Riemann zeta function as a function-theoretic object** (planned 345) | `complex-analysis` | `number-theory` cites |

### Categories

| concept | owner | everyone else |
|---|---|---|
| adjunctions and the adjoint functor theorems, monads and their algebras, Kan extensions, ends and coends | `monoidal-abelian-categories` | cite |
| additive categories, biproducts, **abelian categories**, exactness, the diagram lemmas | `monoidal-abelian-categories` | cite |
| monoidal categories, strictness and coherence, braided/symmetric/enriched categories | `monoidal-abelian-categories` | cite |
| **tensor product of modules** (concrete) | `abstract-algebra` | `monoidal-abelian-categories` cites it as the motivating example of a monoidal structure |
| chain complexes, homology, long exact sequences, mapping cones, projective/injective resolutions, derived functors, **Ext and Tor**, spectral sequences | `homological-algebra` | cite |
| **de Rham complex, Poincaré lemma, Mayer–Vietoris for de Rham, the de Rham theorem** | `differential-geometry` | cites `homological-algebra` for the machinery |
| smooth manifolds, charts, tangent and cotangent bundles, vector bundles, vector fields and flows, Frobenius, differential forms, exterior derivative, orientation, integration on manifolds, **Stokes**, Riemannian metrics, connections, geodesics, curvature, Gauss–Bonnet | `differential-geometry` | — |

### Already published or planned — nobody re-mints

`cantor-set-baire-and-measure-zero` (133) and `complete-metrizability-and-baire`
(277) own the **Baire category theorem**; `ascoli-arzela` (285) and
`stone-weierstrass-general` (287) own theirs; Tychonoff, Urysohn, Tietze,
Stone–Čech, partitions of unity and paracompactness are all in the published
topology band. `functional-analysis` cites every one of these and re-mints none.
`DEFERRED.md` §0 additionally names Riesz's lemma, non-compactness of the
infinite-dimensional unit ball, Kelley's Tychonoff⇒AC, and Hahn–Mazurkiewicz as
already in scope — check there before claiming something is missing.

---

## 5. Forward references: the rule, and the one legal shape

The owner's instruction is exact: **minimize forward references wherever
possible, but do NOT drop content to avoid them.** In that order. A track that
quietly omits a theorem because citing it would point forwards has failed the
instruction more seriously than one that declares a forward reference.

The mechanism is `forward_refs` in item frontmatter, gated by
`tools/fwdcheck.mjs`. Two rules bind:

- a load-bearing forward reference is legal **only on a consequence kind** —
  example, counterexample, false-statement, remark, corollary. On a spine item it
  is error `forward-on-spine`;
- the target must sit **strictly later** in plan order (`forward-not-later`).

So when your development genuinely needs a result another track owns and that
track lands above you, your choices in order of preference are: (1) reorder
within your own block so the need disappears; (2) prove the special case you
actually need, locally and honestly, and cite the general result as a forward
reference from a remark; (3) declare the forward reference on a consequence
item. Only if all three fail do you record it as an **unresolved seam** in your
"Amendments owed" section, naming the exact result and the track that owns it —
the orchestrator resolves it at reconciliation, possibly by moving a block.

---

## 6. What every scaffolder must NOT do

- Write another track's file, or `research/plan-spec.json`, or anything under
  `items/`, or `library/`. **The scaffolders produce prose scaffolds only.** No
  page is spliced and no item is authored by this commission.
- Publish anything, or change any `status:` field.
- Quote an absolute plan order as fact (§0.2).
- Re-mint anything owned by another track in §4.
- Ask for a permission of any kind, or let a subagent ask — see the brief.

---

## 7. Orchestrator rulings, 2026-08-14 — post-reconciliation

`research/subjects-01-RECONCILIATION.md` audited all thirteen finished tracks:
152 amendment routes (85 stale, 48 apply, 37 owner, 5 conflicts), 32 seam checks,
41 duplicate-id candidates with **no genuine double-mint**. Most named seams came
back clean — Birkhoff/conditional expectation, Stokes, Γ/ζ, Lie theory, $L^p$
duality, de Rham, chain complexes, finite probability, Dedekind/class group and
group cohomology all complied.

These are the rulings on what did not. They amend §4 and bind any future build.

### R-1. Flat modules — §4 was wrong, and it is amended narrowly

§4 assigned "flatness" to `commutative-algebra` while assigning module tensor
products to `abstract-algebra`. Those cannot both hold: `def-flat-module` is a
module notion built directly on the tensor product, and MOD-3 already mints it.

**Ruling: `abstract-algebra` (MOD-3) mints `def-flat-module` and basic module
flatness. `commutative-algebra` owns faithful flatness, the local criterion and
flat descent, and cites MOD-3 for the definition.** This is where the definition
already sits, so it costs no rewrite, and it keeps flatness with the tensor
product that defines it.

### R-2. Harmonic theory — "does not redo" means no plane-SPECIFIC proof

The contract said `pde` "cites and does not redo the 2-D theory". PDE read that
as *no plane-specific proof* and still states dimension-uniform theorems at
$n=2$; complex analysis read it as *no theorem instance at $n=2$*.

**Ruling: PDE's reading is correct.** A theorem whose proof is uniform in $n$ may
include $n=2$. What PDE may not do is give a plane-specific argument, or restate
a result complex analysis proves more sharply by holomorphic methods — the disc
Poisson kernel, planar Perron and subharmonicity, conformal invariance. Where the
plane case is sharper, PDE cites CA. PDE-5's logarithmic $n=2$ fundamental
solution stands.

### R-3. Characters of finite abelian groups → `abstract-algebra`

`combinatorics` proposed minting `def-character-of-a-finite-abelian-group`. §4
gives finite-group representation theory including characters to
`abstract-algebra`, and RT sits earlier in reading order, so citation is
available. **Combinatorics cites RT and does not mint.**

### R-4. $p$-adic integers → `group-theory` mints, `commutative-algebra` cites

A conceptual double construction even though the ids differ: GT-17 mints
compatible residues and the topology; CA-13B still says it constructs the inverse
limit. **GT-17 is the supplier. CA-13B cites it and proves only the agreement
with adic completion.**

### R-5. Jordan–Chevalley → `abstract-algebra` supplies, `differential-geometry` cites

X-2 supplies the single-operator theorem. **DG's fallback is replaced by a
citation**, and DG keeps the Lie-algebra Jordan decomposition, which is its own.

### The four SILENT seams — nobody owned these, and that is the dangerous class

Each is a case where §4 said nothing and two tracks each assumed the other would
supply it. None would have been reported by a single track, because from inside
each one it looks covered.

### R-6. Riesz–Thorin interpolation → `measure-theory`

The clearest instance: MT offered it to CA, CA never accepted, and FA explicitly
excludes general interpolation. It would have fallen through entirely.
**`measure-theory` mints it** — it owns $L^p$, and the theorem is about $L^p$
scales. CA and FA cite it.

### R-7. Floor and ceiling → real analysis

Two tracks request the same supplier and neither mints it. **Real analysis owns
`def-floor-and-ceiling`**; it is elementary real analysis and belongs nowhere
else. Recorded as an amendment to `plan-realanalysis-pages.md`.

### R-8. The $\mathbb{C}\cong\mathbb{R}^2$ analytic dictionary → `complex-analysis`

Both real analysis (RA-33) and complex analysis (CA-1) offered to own it "if
authored first" — a two-sides-waiting seam that resolves to neither.
**`complex-analysis` CA-1 owns it**: CA-1 is the one authored page of that track,
so the dictionary has a real home today. Real analysis cites it.

### R-9. General $C^1$ Lebesgue change of variables → `measure-theory`

Caught before it fell through: MT and DG could each have assumed the other
supplied it. Both final scaffolds agree MT should own it, but **the MT items are
still written conditionally — make them unconditional.**

### R-10. Pair labels are namespaced by track (2026-08-14)

**§0 rule 2 above used `MT-1`, `MT-2` as a generic illustration of relative
numbering, and the number-theory track took the placeholder prefix literally.**
Both it and measure theory then labelled their pairs `MT-1 … MT-23`, over an
identical range, for entirely different pages. The reconciliation had been
silently working around it by writing "NT MT-5".

Number theory's labels are now **`NT-1 … NT-24`**, and every cross-file reference
was repointed — five in `plan-combinatorics-and-categories.md`, one in
`plan-algebra-track.md`, and the qualified ones in the reconciliation and apply
reports. The surviving bare `MT-n` references, notably complex analysis citing
MT-8/11/17/20 for integration and Riesz–Thorin, genuinely mean measure theory and
were left alone.

**The rule going forward: a pair label must be unique across the whole
commission, not merely within its own file.** It is the key the splice joins on,
so a duplicated label is a silent mis-splice rather than a visible error. When
illustrating the relative-numbering rule, use a prefix no real track will claim.

### Deferred to the owner

37 amendment routes and 5 conflicts are classified `owner`: deletions, id changes
and reading-order changes, which are owner-only by standing rule. They are listed
per-track in the reconciliation report and are NOT actioned here.
