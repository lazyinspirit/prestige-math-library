# Step 3a scope review — matrix-factorizations-and-khovanov-rozansky-link-homology

- Run `frontier-40-geometry-braids-rep-27` (batch 10), role alpha, label
  `step3a-pair-matrix-factorizations-and-khovanov-rozansky-link-homology-1b63110281ce4964`.
- A page `matrix-factorizations-and-khovanov-rozansky-link-homology` (order 763,
  category `braid-groups`, 15 manifest items).
- B page `matrix-factorizations-and-khovanov-rozansky-link-homology-examples`
  (order 764, 4 items); companion pointers A->B and B->A are consistent and both
  pages sit alone in batch 10.
- Decision: **sufficient**, recorded as a non-owner review with
  `node tools/step3-decisions.mjs record-scope --run frontier-40-geometry-braids-rep-27
  --page matrix-factorizations-and-khovanov-rozansky-link-homology --decision sufficient`.
  Receipt: `research/frontier-40-geometry-braids-rep-27-step3a-review-matrix-factorizations-and-khovanov-rozansky-link-homology.json`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-40-geometry-braids-rep-27-batch-10.pages.json` | Full A inventory (15 items) and B inventory (4 items): every statement, kind, `deps`, page `requires`, companion pairing |
| `research/frontier-40-geometry-braids-rep-27-batch-10.coverage.json` | Four source records (KR II arXiv v2; KR II published version; KR I; Kanstrup lecture notes), locators, read stamps, 66 disposed rows |
| `research/frontier-40-geometry-braids-rep-27-batch-10.notes.md` | Step-1 scaffold record: plan/design reconciliation, negative-crossing and v2-skein errata, dependency levels, AC audit |
| `research/frontier-40-geometry-braids-rep-27-batch-10.cross-batch-dependencies.json` and the run cross-batch file | One page edge and three item edges into the categorification comparison, all against the batch-6 Hecke–Markov pair |
| `research/plan-braid-groups-track.md` BG-18 (L866 A page, L891 examples page), L948, L972–974, §5–§7 | Controlling prose design: role ("matrix-factorization branch from BG-11 that also consumes BG-12's fixed HOMFLYPT normalization"), 15 A rows, 4 B rows, the negative-crossing warning, deliberate exclusions |
| `research/plan-spec.json` rows 763/764 | Identity, kind, order, category, companion, `requires`; empty item arrays (manifest controls items) |
| `research/frontier-40-geometry-braids-rep-27-alpha-step1-drift.md` (L59) and `…-drift-evidence.json` | Verdict `no-drift` for this pair; design locations; "no prerequisite is missing" |
| `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` | Binding owner direction: preserve each pair's complete promised scope; in-run suppliers allowed; publication owner-held |
| 19 step-1 readiness records for the pair and the batch-6 manifest (three supplier items) | Dependency and interface checks on the exact supplier claims |
| Published items on disk (8 external deps) | Presence and statement-level interface of every published supplier |
| Re-downloaded sources this session (see below) | Independent re-verification of the load-bearing source claims at the stamped bytes |

## Inventory against the prose design

All 15 designed A rows are present, in design order, with the designed ids and
kinds: `def-bigraded-matrix-factorization-with-potential`,
`def-arc-and-wide-edge-khovanov-rozansky-factorizations`,
`def-factorization-of-a-marked-moy-graph`,
`lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type`,
`def-chi-zero-and-chi-one-wide-edge-morphisms`,
`def-positive-and-negative-khovanov-rozansky-crossing-complexes`,
`def-khovanov-rozansky-complex-and-trigraded-braid-homology`,
`thm-markings-do-not-change-the-khovanov-rozansky-complex`,
`lem-khovanov-rozansky-braid-oriented-kink-shifts`,
`thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a`,
`thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three`,
`lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation`,
`thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift`,
`def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series`,
`thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`.
All 4 designed B rows are present with the designed ids and kinds
(`ex-the-khovanov-rozansky-unknot-factorization`,
`ex-a-positive-crossing-factorization-complex`,
`ex-a-two-crossing-closed-braid-factorization-complex`,
`ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus`).
No design row was dropped, renamed or re-kinded; the pair adds no claim beyond
the design (the only departures are added direct `deps`, recorded in the batch
notes, which strengthen rather than extend scope).

The statements carry the designed scope boundaries, checked row by row:

- the bigrading and the potential $w=a\sum\epsilon_ix_i$, the $(1,1)$-degree
  differential with $d^2=w$, homotopies of degree $(-1,-1)$, and the explicit
  caveat that a factorization is not an ordinary complex;
- the arc and wide-edge local factorizations with the shifts $\{-1,1\}$ and
  $\{-1,3\}$, the marked-graph tensor product over shared internal variables,
  internal versus boundary variables, and $w_\Gamma=0$ exactly for closed graphs;
- the Koszul row operations, variable exclusion $(0,y-\mu)$, and the graph
  standard-form collapse;
- $\chi_0,\chi_1$ with matrices, bidegrees $(0,2)$ and $(0,0)$, and the Koszul
  flip forms (8),(9) of the source;
- the corrected negative crossing complex $0\to C(\Gamma_1)\{0,-2\}\xrightarrow{\chi_1}C(\Gamma_0)\{0,-2\}\to0$
  with the arXiv v2 misprint and its resolution recorded explicitly;
- the trigraded $H^j_{k,l}(D)$ with termwise cohomology, trivial $a$-action and
  Euler characteristic; markings, IIa, coherence-oriented III, conjugation, and
  the IA shift $\{1,1\}[1]$ versus the IB no-shift rule kept separate;
- link invariance **up to an overall trigrading shift** with the AC use confined
  to Markov's theorem, and no absolute normalization;
- the v2 series $\widetilde F=\sqrt\alpha^{\,|D|_+-|D|_--s(D)+1}\langle D\rangle$,
  $\alpha=-t^{-1}q^{-1}$, with the published (Wu) half-integer normalization and
  the comparison homomorphism to the batch-6 Hecke–Markov normalization
  ($\varphi(l)=t^{-1}$, $\varphi(m)=q^{-1}-q$, $\varphi(\alpha)=\delta$).

Deliberate limits are honored: unreduced theory only (the reduced/extra-$\mathbb Q[x]$
refinement is the HHH pair's subject), no claim of IIb invariance (the B example
explains that KR II restricted to braid diagrams precisely to avoid it), and the
coefficient field is $\mathbb Q$ throughout.

## Source coverage assessment

Four sources, 66 harvested rows, every row disposed. The primary KR II arXiv v2
PDF was re-downloaded this session: **303442 bytes, SHA-256
`1b6580406c3d35b5…`**, matching the coverage stamp. Directly re-read at those
bytes: formula (1) bigradings; formula (2) the arc $(a,x_1-x_2)$ with middle
shift $\{-1,1\}$; formulas (3)–(4) the wide-edge tensor with shifts $\{-1,1\}$
and $\{-1,3\}$ and potential $a(x_1+x_2-x_3-x_4)$; the single-circle computation
$H\cong\mathbb Q[x]\{-1,1\}$; Figure 6 and the `χ0`/`χ1` matrices (5)–(6) with
the arXiv prose misprint of the negative crossing (p. 6) exactly as recorded in
the manifest; Propositions 4–5 (IA $\{1,1\}[1]$, IB no shift); formula (7) and
the five defining properties of $F$; Theorem 2 and the unknot normalization
$\langle D\rangle=t^{-1}/(q^{-1}-q)$. The published version of record was also
re-downloaded: **368705 bytes, SHA-256 `124c65fb4c939c93…`**, matching its stamp;
formula (13) is the corrected `χ1`-cone, formula (20) records the type-I shift
$\{\frac12,\frac12\}[\frac12]$, and §3.7 "Computing the Euler characteristic"
gives (28)–(30) and the proof of Theorem 2 exactly as the manifest's part (1)
claims.

The remaining dispositions are accounted for: KR I rows are `included`/`inline`
into the same items (independent parallel treatment) or `out-of-scope` with
reasons (sl(2)/sl(3) foam specializations, tangle-cobordism/TQFT functoriality);
Kanstrup rows are `already-published` (links, Markov), `inline` (Orlov's
homotopy category), `deferred` to the in-run Rouquier (761) and HHH (765) pairs,
or `out-of-scope` with reasons (GNR/Hilbert-scheme, equivariant/convolution
models, dg-scheme machinery). Nothing promised by the design is declined. The
two v2 errata recorded by the scaffold (negative-crossing display; mutually
inconsistent skein displays, with the published formulas (3),(4),(28)–(30) as
the consistent version) are source defects handled in the items, not scope gaps.

## Prerequisites, consumers and role in the library

- Page `requires`: `oriented-links-braid-closures-and-markov-equivalence` and
  `graded-bimodules-and-tensor-functors` are published pages on disk;
  `hecke-markov-traces-and-polynomial-link-invariants` is scaffolded as batch 6
  of this run (order 751, 27 items).
- The 25 distinct item dependencies classify as 8 published items on disk
  (`def-graded-ring-module-bimodule-and-internal-shift`,
  `def-polynomial-ring-over-a-commutative-ring`,
  `def-braid-group-by-the-artin-presentation`, `def-closure-of-a-geometric-braid`,
  `def-markov-conjugation-and-stabilization-moves`,
  `thm-markovs-closed-braid-equivalence-theorem`,
  `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-axiom-of-choice`),
  14 items of this pair's own scaffold, and 3 batch-6 items
  (`def-homflypt-polynomial-from-the-hecke-markov-trace`,
  `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`).
  **No dependency is absent from both the published library and the current
  scaffold: no unmet prerequisite is confirmed or suspected.** Every `[[…]]`
  cross-reference on the pair resolves within the published library or the run.
- In-run supplier check (batch 6, statement level): the coefficient ring carries
  $s^2=v$, $vzu^2=z+1-v$, $l=us$, $m=s-s^{-1}$, $\alpha=(uz)^{-1}$; the
  trace formula is $P=u^{e}\alpha^{n-1}\mathrm{tr}_n$; the skein relation is
  $l^{-1}P(L_+)-lP(L_-)=mP(L_0)$, $P(\text{unknot})=1$. Direct substitution of
  $\varphi$ ($v\mapsto q^{-2}$, $s\mapsto q^{-1}$, $u\mapsto t^{-1}q$,
  $z\mapsto\frac{(q^2-1)t^2}{q^2(1-t^2)}$) satisfies both defining relations and
  yields $\varphi(l)=t^{-1}$, $\varphi(m)=q^{-1}-q$, $\varphi(\alpha)=\delta$,
  which is exactly what the categorification theorem's part (3) consumes.
- Downstream, batch 11 (HHH) requires this A page and consumes 8 of its items
  (`def-bigraded-…`, `def-arc-and-wide-edge-…`, `def-factorization-…`,
  `def-chi-zero-and-chi-one-…`, `def-positive-and-negative-…`,
  `def-khovanov-rozansky-complex-…`, `def-normalized-…`,
  `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-…`,
  `thm-khovanov-rozansky-homology-categorifies-…`), including the corrected
  negative crossing via its comparison lemma. All exist. No other batch in the
  run consumes the pair. The B page is a dependency leaf (deps: A page only).
- Role check against the design's §6/§7 sentences: the pair is the
  matrix-factorization branch from BG-11 (`oriented-links-…`), consumes BG-12's
  fixed HOMFLYPT normalization, records the corrected negative KR crossing with
  its source-conflict resolution, and separates braid moves from both Markov
  shifts. All four obligations are visible in the statements.

## Uncertainty and non-blocking observations

- I re-verified the KR II arXiv v2 and published-of-record passages listed above
  at the stamped bytes, but did not re-read the KR I introduction or the
  Kanstrup notes at their stamps this session; those rows are secondary
  (independent parallel treatment, framing) and their dispositions are
  `included`/`inline`/`out-of-scope` with stated reasons.
- The coverage record for the published version of record lists only four rows
  (abstract, formulas (12)–(13), Figure 6), although the batch notes and the
  step-1 readiness record for the categorification theorem also rely on the
  published (20), (28)–(30) and §3.7, which I verified directly in the published
  PDF. This is a records-completeness observation, not an omitted topic: the
  claims are supported by the version of record, and no scope consequence
  follows.
- Observation, no scope consequence: `def-arc-and-wide-edge-…` references the
  Koszul notation of `lem-koszul-…` in its statement while that lemma depends
  (via `def-factorization-…`) on the definition, a forward reference not listed
  in the declared `deps`. This is item-level citation hygiene for the Step-3b
  item audit, not an omitted result; Step 3a edits no scaffold.
- I did not independently reprove the batch-6 supplier items (scope review reads
  statements, not proofs); the comparison arithmetic above was checked by direct
  substitution only at the level the consumer uses.

## Decision

**Sufficient.** The planned definitions, results and examples cover the intended
subject — the Khovanov–Rozansky II matrix-factorization construction of a
trigraded braid-closure homology, its braid-move and Markov invariance up to an
overall shift, and its HOMFLYPT categorification with the Hecke–Markov
comparison — with all design rows preserved, load-bearing sources verified at
the stamped bytes, all prerequisites resolving to published pages/items or
current in-run scaffolds, and consumer-facing interfaces present. No enrichment
or pair merger is needed; the owner may proceed.
