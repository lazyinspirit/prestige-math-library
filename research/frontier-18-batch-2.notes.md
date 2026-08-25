# frontier-18 · Beta-2 batch notes — steps 1–2

Pairs owned: `extraspecial-p-groups-and-central-products` (A, order 71.003) with
`extraspecial-p-groups-and-central-products-examples` (B, 71.004); and
`cayley-graphs-word-metrics-and-quasi-isometry` (A, 302.001) with
`cayley-graphs-word-metrics-and-quasi-isometry-examples` (B, 302.002).

Artifacts written: `research/frontier-18-batch-2.pages.json`,
`research/frontier-18-batch-2.coverage.json`,
`research/frontier-18-batch-2.proof-contracts.json`, and this file. Nothing else
was written; `research/plan-spec.json`, `items/` and `library/` were read only.

## Continuity checkpoint

- **Substage:** step 2 complete; all four artifacts written and self-checked.
- **Completed checks, run by me from the repo root:**
  `validate-plan.mjs` against a temporary spliced copy of the spec **outside the
  repo** (`/tmp/spec-spliced.json`, my four pages' `items` and `requires`
  substituted into a read-only copy) — exit 0, no error, no warning on my pages;
  `content-policy.mjs --manifest-only` — 141 scoped items, 0 errors;
  `coverage-checklist.mjs --require-destination` — 177 harvested results, 0
  errors; `source-fetch-check.mjs --stamp` then the plain gate — 4/4 stamped;
  `url-sweep.mjs --recover --fail-on-dead` (writing its receipt to `/tmp`, since
  that path is outside my write boundary) — 4/4 live, 0 recoverable, 0 suspect;
  `boundary-audit.mjs` — 0 template clusters, 0 contradicted; `prosecheck.mjs
  --warnings` on this file — 0 errors, 0 warnings.
- **Checks I could not run, and why:** `proof-contract.mjs`, `finite-smoke.mjs`,
  `risk-report.mjs` and `citation-fidelity.mjs` all load `items/<id>.md`, and no
  item of this batch is authored yet; each reports `item-missing` for every
  scoped id. They are step-5 gates. `depsource.mjs` resolves its spec argument
  against the repo root, so it cannot read a temporary spec outside the
  checkout; I reproduced its classification myself and report the result below.
  The engine runs the authoritative gates.
- **Exact next action:** none in this dispatch. At step 5 I return as author of
  the same four pages.

## Which design document controls

The dispatch named two design locations for each pair. Both pairs of line
numbers fall inside a single section of `research/plan-group-theory-track.md`:
lines 571 and 643 are the header and the `fs-`/B-page block of §GT-2, and lines
1449 and 1517 are the header and the `fs-`/B-page block of §GT-10. There is no
second, later amendment document for either page, so §GT-2 and §GT-10 of that
file are controlling, read together with §2.1 (fixed conventions), §3
(dependency table), §4 (component-provenance codes), §5 (well-definedness
ledger) and §24.2/§24.3 (the canonical harvest).

## Design against spec: what disagrees

Recorded, not settled by me. Stage 1's `drift` unit and the step-3 Alpha own these.

1. **GT-2 prerequisites.** §GT-2 line 574 declares `requires`
   `frattini-subgroups-and-the-burnside-basis-theorem` **and**
   `dual-spaces-bilinear-forms-and-inertia`; `research/plan-spec.json` declares
   only `frattini-subgroups-and-the-burnside-basis-theorem-examples`.
   `research/frontier-18-alpha-step0-drift.md` already adjudicated this as
   `drift-blocked`: the linear-algebra page is at order 92 and this page at
   71.003, so the edge points forward and closing it is a reading-order change.
   I built against the spec, which is what that verdict requires. Finding 1
   states what I did instead.
2. **GT-10 prerequisites.** §GT-10 line 1452 declares `requires`
   `free-groups-and-presentations` and `metric-spaces`; the spec declares
   `applications-of-the-fundamental-group-examples`. Both design entries are
   inside the spec's declared closure, so there is no conflict to settle; the
   spec's anchor is a placement instruction, exactly as §3 says. I carried on
   with the spec and added two backward edges the design did not name — Finding 6.

## Findings — one recommendation each, most severe first

### Finding 1 — GT-2 cannot use symplectic linear algebra; I built the pairing group-theoretically (approve)

**What is wrong.** §GT-2 routes the whole classification through
`thm-alternating-forms-have-a-symplectic-normal-form` on
`dual-spaces-bilinear-forms-and-inertia`. That page is at order 92 and this page
at 71.003. Worse than a single missing citation: **no vector-space theory at all
is available below order 71.003.** `vector-spaces-and-subspaces` is order 72, so
`def-vector-space`, bases, dimension and every bilinear-form item are forward.
The step-0 drift review reached the same conclusion and blocked the edge.

**What I propose.** Build the form natively in group-theoretic language and
never cite the linear-algebra page. `def-commutator-pairing-of-an-extraspecial-p-group`
defines $b_z(\bar x,\bar y)\in\mathbb Z/p$ by $[x,y]=z^{b_z(\bar x,\bar y)}$ on
the elementary abelian quotient, whose canonical $\mathbb F_p$-scalar action is
supplied by `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces` on
the immediately preceding page. Bilinearity, alternation and nondegeneracy are
then the class-two commutator identities. The symplectic normal form is replaced
by `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-p-cubed`
— stated with its real id
`thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed`
— proved by induction on the order inside the group: pick a noncentral $x$, get
$y$ with $[x,y]=z$, take $P_1=\langle x,y\rangle$ of order $p^3$, show
$P=P_1C_P(P_1)$ using bilinearity, and recurse on the centraliser. This is
Gorenstein's and Aschbacher's route rather than Craven's, and it needs nothing
the page does not build.

**What breaks if declined.** The alternative is moving the pair above order 92 or
moving the linear-algebra page down, both reading-order changes and owner-only.
Declining without one of those leaves the page unbuildable.

**A consequence Alpha should record.** `lem-orthogonal-complement-counting-for-the-commutator-pairing`
does by hand, on an elementary abelian group with a chosen basis, what
rank–nullity does on a vector space. At step 6 this is a seam to check: the
statement must not be phrased so that it reads as a general linear-algebra fact.

### Finding 2 — the extraspecial pair rests on ten draft items of run frontier-17 (approve, with a publication-order constraint)

**What is wrong.** Ten distinct dependencies of the extraspecial pair are items
on `frontier-18`'s declared prerequisite page
`frattini-subgroups-and-the-burnside-basis-theorem`, which is `status: draft` on
disk, authored by run `frontier-17` and not yet published:
`def-elementary-abelian-p-group`,
`lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`,
`def-fp-basis-of-an-elementary-abelian-p-group`,
`lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension`,
`def-pth-power-subgroup-of-a-group`,
`thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`,
`thm-frattini-subgroup-formula-for-a-finite-p-group`, `thm-burnside-basis-theorem`,
`def-generator-rank-of-a-finite-p-group`, and
`thm-automorphisms-act-linearly-on-the-frattini-quotient`. My brief permits a
load-bearing dependency to be an item earlier in the pair, a published item on a
strictly earlier page, or an item inside run `frontier-18`, and a frontier-17
draft is none of the three. Batch 1 of this run met the same condition and
avoided it, because it had a published route.

**Why I could not avoid it.** There is no published elementary-abelian
$p$-group, no published $\Phi(P)=P'P^p$, and no published Burnside basis
theorem. The definition of a special group is *stated in terms of* an elementary
abelian subgroup, and the equivalence of the three characterisations turns on the
Frattini formula. Re-minting those ids is barred outright — the ids exist on disk
and are immutable — and re-proving them under new ids would put two definitions
of "elementary abelian $p$-group" in the library at adjacent orders, which is
the level-7 two-notions-of-open defect in a new place.

**What I propose.** Approve the citations, and record the constraint they
create: **`frattini-subgroups-and-the-burnside-basis-theorem` must publish no
later than this pair.** A published item citing a draft item is not caught by
`depcheck` — its `draft-on-published-page` error is page-level — but the link
404s for the public while resolving for the owner.

**What breaks if declined.** The page cannot be written at all at this order.
The only decline that leaves mathematics standing is to move the pair after a
published elementary-abelian development, which is a reading-order change.

### Finding 3 — the design's Arf-invariant route is not buildable here; I replaced it with a counting invariant (approve)

**What is wrong.** §GT-2 items 13 to 15 propose
`def-quadratic-form-of-an-extraspecial-two-group`,
`lem-extraspecial-two-group-quadratic-form-is-well-defined` and
`thm-central-product-type-agrees-with-the-arf-invariant`. Quadratic forms over
$\mathbb F_2$ and the Arf invariant are not in the library at any order, and
neither Craven nor van Beek proves the Arf statement; Craven separates the two
$2$-group types by counting elements of order four in one case of order thirty-two,
and van Beek by the order of a maximal elementary abelian subgroup.

**What I propose.** Two invariants, both proved in general and both harvested:
`lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups`
gives $t(P_1\circ P_2)=(t_1t_2+(|P_1|-t_1)(|P_2|-t_2))/2$ in two lines from the
fact that commuting factors square coordinatewise, and induction turns it into
$2^{2n}\pm2^{n}$ — a complete separation at every order, not just at $n=2$; and
`prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`
reproves the separation by van Beek's independent route. Two genuinely different
proofs of one separation is what the owner's 2026-08-20 second-proof rule
welcomes; each names the other.

**What breaks if declined.** Building the Arf invariant means building
$\mathbb F_2$-quadratic forms, their polar forms and the Arf class — a
linear-algebra block below order 71.003, in a group-theory page, duplicating what
`dual-spaces-bilinear-forms-and-inertia` will hold at order 92.

### Finding 4 — the design's `D_8`/`Q_8` naming contradicts the library's dihedral convention (approve the rename)

**What is wrong.** `cor-dihedral-groups-as-semidirect-products` says in as many
words: "This group is written $D_n$ here and called the dihedral group of order
$2n$." So the library's $D_4$ is the group of order eight. Craven writes $D_8$
for that group and van Beek writes $\operatorname{Dih}(8)$. Every design id
containing `d-eight` would therefore name, in library notation, a group of order
sixteen.

**What I propose.** Use `\operatorname{Dih}(C_4)` throughout, the notation
`def-generalized-dihedral-group` fixes, and rename the affected design ids:
`ex-d-eight-and-q-eight-are-extraspecial` becomes
`prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial` (moved
to the A page, see Finding 5), `ex-central-product-of-two-d-eight-groups` becomes
`ex-the-two-extraspecial-groups-of-order-thirty-two`, and
`ex-quadratic-forms-of-d-eight-and-q-eight` becomes
`ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight`.
Each authored item records the source notations in a Remark.

**What breaks if declined.** An id and a title that name the wrong group. The
judge reads Statements and cannot see a false title.

### Finding 5 — the design left the classification without an existence half (approve the added constructions)

**What is wrong.** §GT-2 items 16 and 18 assert that for each admissible order
there are *exactly* two isomorphism types. "Exactly two" needs existence and
non-isomorphy as well as the upper bound. The design's A-page list constructs no
group of order $p^3$ at all: the Heisenberg group and the two order-eight groups
appear only on the B page, and B-page items may not be dependency targets, so the
existence half would have had nothing to rest on. The published
`ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` does construct
$H_p$, but it is homed on `sylow-theorems-and-nilpotent-groups-examples`, a B
page, and `validate-plan`'s `b-leaf` rule forbids depending on it.

**What I propose.** Four A-page items supplying existence:
`def-heisenberg-group-of-order-p-cubed` with
`prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed`
and `prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p`;
`lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared` with
`def-modular-group-of-order-p-cubed` and
`prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p`;
and `prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial`
for $p=2$, resting on the published $Q_8$ and $\operatorname{Dih}(C_4)$. The
B-page Heisenberg example keeps a wikilink to the published Sylow example so the
two constructions are visibly the same group.

**What breaks if declined.** `thm-classification-of-extraspecial-two-groups` and
`thm-classification-of-extraspecial-p-groups-for-odd-p` would claim "exactly two"
while proving "at most two".

### Finding 6 — the Cayley pair needs two backward `requires` edges the spec lacks (approve)

**What is wrong.** `validate-plan`'s `undeclared-prereq` rule requires every page
edge induced by an item dep to lie inside the closure of the page's declared
`requires`. The closure of `applications-of-the-fundamental-group-examples`
contains `metric-spaces`, `free-groups-and-presentations`,
`group-actions-and-cayleys-theorem` and everything else I need — except
`graphs-walks-and-connectivity` (order 207) and `trees-forests-and-spanning-trees`
(order 209). Both are far below 302.001, so both edges are backward and legal.

**What I propose.** `research/frontier-18-batch-2.pages.json` declares
`requires: ["applications-of-the-fundamental-group-examples",
"trees-forests-and-spanning-trees"]` for the A page.
`graphs-walks-and-connectivity` is deliberately **not** listed directly: it is
already reachable through the trees page, and listing it produced a
`redundant-prereq` warning, which `CLAUDE.md`'s transitive-reduction rule says to
avoid. The B page additionally declares
`semidirect-products-and-automorphism-groups` (order 68), used only by
`ex-two-generating-sets-of-a-dihedral-group`.

`splice-plan.mjs` refuses a `requires` disagreement between manifest and spec and
routes it here by design; this finding is that adjudication.

**What breaks if declined.** Without the trees page the agreement lemma
`lem-the-graph-notions-agree-with-the-published-finite-graph-theory` and the
finite-Cayley-graph lemma cannot cite the published graph theory at all, and the
page would silently re-define graphs with no recorded dictionary — the level-7
two-notions-of-open defect.

### Finding 7 — the published graph theory is finite-only, so the Cayley page builds possibly-infinite graphs (approve)

**What is wrong.** `def-finite-simple-graph` says "$V$ is a finite set";
`def-graph-distance-and-girth` justifies its minimum by "$V(G)$ is finite";
`def-multigraph-loop-and-digraph` is finite too; `def-tree-forest-and-leaf` and
`thm-tree-characterisations` are stated for finite graphs. A Cayley graph of an
infinite group is infinite, so none of these applies to the page's main object.

**What I propose.** Build the notions natively — `def-simple-graph-without-a-finiteness-hypothesis`,
`def-walks-paths-and-connectedness-in-a-simple-graph`,
`lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints`,
`def-graph-path-metric`, `thm-the-path-metric-of-a-connected-simple-graph-is-a-metric`,
`def-locally-finite-graph`, `lem-balls-in-a-connected-locally-finite-graph-are-finite`,
`def-cycles-trees-and-forests-in-a-simple-graph`,
`thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path`,
`def-labelled-directed-graph-and-labelled-graph-isomorphism` — and record the
agreement explicitly in `lem-the-graph-notions-agree-with-the-published-finite-graph-theory`
and `lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph`,
in the dictionary style of `def-metrizable-space`. The published items are cited
inside those two agreement items and nowhere else.

**A seam Alpha must decide.** Amendment 4 of the track (line 155) assigns "the
arbitrary simplicial-tree bridge" to §GT-14, `simplicial-trees-and-group-actions`
at order 302.009. That page is planned with an empty item list, so a forward
reference from here could not resolve, and Löh §3.3 — which the harvest at §24.3
assigns to `GT-10` — cannot be scaffolded without a tree notion for infinite
graphs. I built the tree definition here. **Amendment owed to GT-14: cite
`def-cycles-trees-and-forests-in-a-simple-graph` and
`thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path`;
do not re-mint them.**

**What breaks if declined.** `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree`
and its converse — Löh 3.3.1 and 3.3.3, the highlight of the chapter the harvest
assigns to this page — would be dropped for want of a definition I could write,
which the self-contained-scope rule does not permit.

### Finding 8 — the Cayley A page stands at sixty items; here is the split (decide)

**What is wrong.** `validate-plan`'s `size` rule errors above sixty. The page has
exactly sixty, which passes, and leaves **no** headroom: one intermediate lemma
added at step 6 turns a repair into a page split, and the rule exists because
splitting after authoring is a rewrite. The sixty are not padding — Finding 7
accounts for eleven of them, and the last six are results I declined to prune
(Löh 5.1.13 and Exercise 5.2.1, Kapovich 8.1 and 8.17, Löh Remark 5.2.2).

**What I propose, and my recommendation.** Split, at Löh's own chapter boundary:

- `cayley-graphs-and-word-metrics` — the first thirty items, from
  `def-simple-graph-without-a-finiteness-hypothesis` through
  `thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis`,
  with companion `cayley-graphs-and-word-metrics-examples`;
- `quasi-isometry-of-metric-spaces-and-groups` — the remaining thirty, from
  `def-geodesic-and-geodesic-metric-space` through
  `prop-finiteness-is-a-geometric-property-of-finitely-generated-groups`, with
  companion `quasi-isometry-of-metric-spaces-and-groups-examples`.

The cut is clean: nothing in the first part cites anything in the second.

**What breaks if the split is approved.** Three things Alpha must resolve, none
of them mine. First, the batch becomes three A/B pairs and
`content-policy.mjs --manifest-only` enforces a cap of two, so a pair must move to
another Beta or the cap must be waived. Second, `cayley-graphs-word-metrics-and-quasi-isometry`
is named in the `requires` of `geometric-actions-svarc-milnor-and-growth`,
`hyperbolic-spaces-and-hyperbolic-groups`, `amenable-groups-and-folner-criteria`
and `simplicial-trees-and-group-actions`; all four must be repointed. Third, the
run's own coverage file keys its harvest by A-page id and would need resplitting.

**What breaks if it is declined.** Nothing today: sixty passes. The risk is
entirely at step 6, and it is the risk the ceiling exists to prevent. I recommend
the split; if Alpha declines it, I recommend recording that any step-6 repair to
this page which adds an item must split it then.

### Finding 9 — Craven Theorem 3.16 declined, with the machinery it would need (decide)

**What is wrong.** Craven's Chapter 3 closes with a theorem of P. Hall: a
nonabelian $p$-group all of whose characteristic abelian subgroups are central
and cyclic satisfies $P=Z(P)E$ with $E$ extraspecial. §24.2 dispositions Chapter 3
as "included/inline `GT-2`" without singling it out, and the self-contained-scope
rule forbids declining a result for want of a lemma I could write.

**What I propose.** Defer it, with the cost stated. Its proof needs the Hall–Witt
identity, the Three Subgroup Lemma, the inequality $[\gamma_i,\gamma_j]\le\gamma_{i+j}$,
the $\Omega_1$ and $\mho_1$ subgroups, and a $p$-rank argument about normal
abelian subgroups — five or six items of machinery whose only consumer on this
page is this one theorem, and which the track itself defers ("the full omega
calculus is deferred to an advanced finite-$p$ sequel", §24.2). Craven's own
write-up leaves two steps as assertions, including "The same is true in the
$p$-rank 2 case", so a faithful local proof is a reconstruction rather than a
transcription, and the risk of shipping a wrong proof is real.

**What breaks if declined.** The page ends at the classification and the
automorphism propositions, and a recognition theorem about arbitrary $p$-groups
is not built. The coverage row records the exact machinery so the decision is
reversible; `owner-decision` is its destination because no planned page owns
advanced finite-$p$ local structure.

### Finding 10 — `fs-` items belong on the B page, not the A page (approve)

**What is wrong.** The track's summary table counts "exact A-page items,
including `fs-`", and §GT-2 and §GT-10 list their `fs-` items in a block before
the B page. `SCHEMA.md` §6 puts `fs-` in a page's `examples` array, and
`frontier-17`'s `frattini-subgroups-and-the-burnside-basis-theorem` pair, the
immediately preceding page, put all four of its `fs-` items on the B page.

**What I propose.** Follow the schema and the precedent: all `fs-` items on the
B pages. This is also what keeps the Cayley A page at sixty rather than above it.

**What breaks if declined.** The A pages exceed the size ceiling and the
composition files disagree with `SCHEMA.md` §6.

### Finding 11 — three `fs-` statements in the design are terminological, not mathematical; replaced (approve)

**What is wrong.** §GT-2 proposes
`fs-plus-and-minus-type-is-the-standard-odd-prime-convention`. That is a claim
about naming, not a false mathematical statement, and a `fs-` item is
banner-rendered as a refutable proposition.

**What I propose.** Replace it with
`fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism`,
refuted by $\operatorname{Dih}(C_4)$ and $Q_8$, which is the mathematically
substantive version of the same warning — the pairing does not see the type. The
convention itself is recorded in `def-plus-and-minus-type-of-an-extraspecial-p-group`,
where §2.1's decision ("define by central products first") belongs. I also
replaced `fs-the-commutator-form-is-defined-without-identifying-the-centre-with-fp`
with `fs-the-commutator-pairing-needs-no-choice-of-a-central-generator`, which
states the same defect as a checkable claim about rescaling, and added
`fs-an-extraspecial-p-group-has-a-complement-to-its-centre` (van Beek 2.32(ii),
generalised) and `fs-a-group-of-order-p-to-an-even-power-can-be-extraspecial`.

**What breaks if declined.** A false-statement item whose refutation is a
citation to a convention table.

## Per-page item lists

### extraspecial-p-groups-and-central-products (A, order 71.003) — 46 items
1. `lem-commutator-identities-in-a-group-of-class-two` — lemma
2. `lem-power-of-a-product-in-a-group-of-class-two` — lemma
3. `cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p` — corollary
4. `def-special-and-extraspecial-p-groups` — definition
5. `prop-equivalent-characterisations-of-an-extraspecial-p-group` — proposition
6. `cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p` — corollary
7. `cor-an-extraspecial-p-group-has-no-complement-to-its-centre` — corollary
8. `prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p` — proposition
9. `cor-the-centralizer-of-a-noncentral-element-of-an-extraspecial-p-group-has-index-p` — corollary
10. `def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups` — definition
11. `lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup` — lemma
12. `prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images` — proposition
13. `prop-order-centre-and-derived-subgroup-of-a-central-product` — proposition
14. `thm-universal-property-of-the-central-product` — theorem
15. `def-internal-central-product-of-a-family-of-subgroups` — definition
16. `thm-recognition-of-an-internal-central-product` — theorem
17. `thm-a-central-product-of-extraspecial-p-groups-is-extraspecial` — theorem
18. `def-commutator-pairing-of-an-extraspecial-p-group` — definition
19. `lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating` — lemma
20. `lem-the-commutator-pairing-is-nondegenerate` — lemma
21. `lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed` — lemma
22. `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed` — theorem
23. `cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number` — corollary
24. `cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank` — corollary
25. `lem-orthogonal-complement-counting-for-the-commutator-pairing` — lemma
26. `prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n` — proposition
27. `cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups` — corollary
28. `def-heisenberg-group-of-order-p-cubed` — definition
29. `prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed` — proposition
30. `prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p` — proposition
31. `lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared` — lemma
32. `def-modular-group-of-order-p-cubed` — definition
33. `prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p` — proposition
34. `prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial` — proposition
35. `thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial` — theorem
36. `thm-classification-of-the-nonabelian-groups-of-order-p-cubed` — theorem
37. `lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups` — lemma
38. `lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups` — lemma
39. `thm-classification-of-extraspecial-two-groups` — theorem
40. `lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p` — lemma
41. `thm-classification-of-extraspecial-p-groups-for-odd-p` — theorem
42. `def-plus-and-minus-type-of-an-extraspecial-p-group` — definition
43. `cor-the-exponent-of-an-extraspecial-p-group` — corollary
44. `prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner` — proposition
45. `prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing` — proposition
46. `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups` — proposition
### extraspecial-p-groups-and-central-products-examples (B, order 71.004) — 16 items
1. `ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight` — example
2. `ex-the-heisenberg-group-of-order-twenty-seven` — example
3. `ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight` — example
4. `ex-the-modular-group-of-order-twenty-seven` — example
5. `ex-the-two-extraspecial-groups-of-order-thirty-two` — example
6. `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two` — example
7. `ex-a-central-product-of-two-cyclic-groups-of-order-four` — example
8. `ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight` — example
9. `cex-a-special-p-group-that-is-not-extraspecial` — counterexample
10. `cex-the-central-product-decomposition-of-an-extraspecial-group-is-not-unique` — counterexample
11. `fs-every-special-p-group-is-extraspecial` — false-statement
12. `fs-there-is-exactly-one-extraspecial-group-of-each-admissible-order` — false-statement
13. `fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism` — false-statement
14. `fs-the-commutator-pairing-needs-no-choice-of-a-central-generator` — false-statement
15. `fs-an-extraspecial-p-group-has-a-complement-to-its-centre` — false-statement
16. `fs-a-group-of-order-p-to-an-even-power-can-be-extraspecial` — false-statement
### cayley-graphs-word-metrics-and-quasi-isometry (A, order 302.001) — 60 items
1. `def-simple-graph-without-a-finiteness-hypothesis` — definition
2. `def-walks-paths-and-connectedness-in-a-simple-graph` — definition
3. `lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints` — lemma
4. `def-graph-path-metric` — definition
5. `thm-the-path-metric-of-a-connected-simple-graph-is-a-metric` — theorem
6. `lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism` — lemma
7. `lem-the-graph-notions-agree-with-the-published-finite-graph-theory` — lemma
8. `def-locally-finite-graph` — definition
9. `lem-balls-in-a-connected-locally-finite-graph-are-finite` — lemma
10. `def-cycles-trees-and-forests-in-a-simple-graph` — definition
11. `thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path` — theorem
12. `def-labelled-directed-graph-and-labelled-graph-isomorphism` — definition
13. `def-directed-labelled-cayley-graph` — definition
14. `def-cayley-graph` — definition
15. `def-finitely-generated-group` — definition
16. `lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group` — lemma
17. `prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite` — proposition
18. `thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph` — theorem
19. `thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem` — theorem
20. `lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph` — lemma
21. `def-word-length-with-respect-to-a-generating-set` — definition
22. `lem-word-length-is-well-defined-and-satisfies-the-length-laws` — lemma
23. `def-word-metric` — definition
24. `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph` — theorem
25. `prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite` — proposition
26. `prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity` — proposition
27. `prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance` — proposition
28. `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree` — theorem
29. `cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length` — corollary
30. `thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis` — theorem
31. `def-geodesic-and-geodesic-metric-space` — definition
32. `def-coarse-lipschitz-map-and-quasi-isometric-embedding` — definition
33. `def-bounded-distance-between-maps` — definition
34. `lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition` — lemma
35. `def-coarsely-dense-subset-and-quasi-isometry` — definition
36. `lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings` — lemma
37. `lem-a-map-at-bounded-distance-from-a-quasi-isometric-embedding-is-a-quasi-isometric-embedding` — lemma
38. `thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse` — theorem
39. `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings` — corollary
40. `thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces` — theorem
41. `def-quasi-isometry-group-of-a-metric-space` — definition
42. `prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups` — proposition
43. `def-bilipschitz-embedding-and-bilipschitz-equivalence` — definition
44. `prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy` — proposition
45. `def-separated-net-in-a-metric-space` — definition
46. `thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets` — theorem
47. `prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter` — proposition
48. `thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics` — theorem
49. `def-quasi-isometry-type-of-a-finitely-generated-group` — definition
50. `prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space` — proposition
51. `prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included` — proposition
52. `prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry` — proposition
53. `def-quasi-geodesic-and-quasi-geodesic-metric-space` — definition
54. `prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one` — proposition
55. `cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space` — corollary
56. `prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic` — proposition
57. `prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz` — proposition
58. `cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence` — corollary
59. `def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group` — definition
60. `prop-finiteness-is-a-geometric-property-of-finitely-generated-groups` — proposition
### cayley-graphs-word-metrics-and-quasi-isometry-examples (B, order 302.002) — 19 items
1. `ex-the-cayley-graph-and-word-metric-of-the-integers` — example
2. `ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics` — example
3. `ex-the-cayley-graph-of-a-free-abelian-group-of-finite-rank` — example
4. `ex-the-cayley-tree-of-a-free-group-of-rank-two` — example
5. `ex-two-generating-sets-of-a-dihedral-group` — example
6. `ex-the-integers-are-quasi-isometric-to-the-real-line` — example
7. `ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it` — example
8. `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers` — example
9. `cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics` — counterexample
10. `cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective` — counterexample
11. `fs-the-cayley-graph-of-a-group-does-not-depend-on-the-generating-set` — false-statement
12. `fs-the-word-metric-is-right-invariant` — false-statement
13. `fs-a-quasi-isometry-is-continuous-or-bijective` — false-statement
14. `fs-all-infinite-finitely-generated-groups-are-quasi-isometric` — false-statement
15. `fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space` — false-statement
16. `fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs` — false-statement
17. `cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set` — counterexample
18. `ex-the-quasi-isometry-group-of-a-metric-space-of-finite-diameter-is-trivial` — example
19. `ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals` — example

## Per-pair richness report

Both passes were performed on both pairs.

### `extraspecial-p-groups-and-central-products`

**Long proofs decomposed.** Craven's Theorem 3.14 and van Beek's Theorem 2.42
are one classification argument each; I split the shared machinery into
`lem-commutator-identities-in-a-group-of-class-two`,
`lem-power-of-a-product-in-a-group-of-class-two` and
`cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p` (the
class-two calculus, used by five later items), then
`def-commutator-pairing-of-an-extraspecial-p-group` with its well-definedness and
nondegeneracy lemmas, then
`lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed`
as the step the induction repeats, then the decomposition theorem itself. The
external central product is separated into construction, antidiagonal lemma,
canonical-maps proposition, order/centre/derived proposition, universal property
and internal recognition, because Craven's Proposition 3.5 and van Beek's
Definition 2.34 assert those six things together and only two of them are proved
in either source. The two-group and odd-prime classifications are separated so
that each carries its own separating invariant.

**Corollaries added beyond the design.**
`cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p`,
`cor-an-extraspecial-p-group-has-no-complement-to-its-centre` (van Beek 2.32(ii),
proved for all orders rather than $p^3$),
`cor-the-centralizer-of-a-noncentral-element-of-an-extraspecial-p-group-has-index-p`,
`cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank`,
`cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups`,
`cor-the-exponent-of-an-extraspecial-p-group`, and
`prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`
as the second proof of the $p=2$ separation.

**Size.** Forty-six A-page items against the sixty ceiling. No split proposed.

### `cayley-graphs-word-metrics-and-quasi-isometry`

**Long proofs decomposed.** Löh's Proposition 5.1.10 bundles the quasi-inverse
construction with the characterisation of quasi-isometries; I split it into
`thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`
and `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings`,
so that the choice-scope discussion attaches to the step that makes the
selection. Löh's Proposition 5.1.11 bundles five inheritance properties; I split
it into the bounded-distance equivalence lemma, the composition lemma and the
perturbation lemma, because the equivalence-relation theorem and the
quasi-geodesic proposition cite different ones. The word metric is split into
word length, its three laws, the metric, and the identification with the graph
path metric.

**Corollaries added beyond the design.**
`lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism`
(Löh Remark 5.2.2, used by the infinite-dihedral example),
`prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity`
(Kapovich Exercise 7.73(1)),
`prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz`
(Kapovich Lemma 8.7),
`cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence`
(Löh Exercise 5.2.1),
`cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length`,
`cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space`,
`def-quasi-isometry-group-of-a-metric-space` with its group proposition, and
`def-separated-net-in-a-metric-space` with the net characterisation of
quasi-isometry.

**Size.** Sixty A-page items, exactly at the ceiling. Finding 8 proposes the
split and recommends taking it.

## Forward references kept

None. No item on either A page or either B page declares a `forward_refs` target,
and no dep resolves to a later page. The two places where a forward pointer would
have been natural are handled without one: the linear-algebra agreement of
Finding 1 is left to a Remark naming no id, because
`dual-spaces-bilinear-forms-and-inertia` is published and could be linked but the
agreement is not proved here and a bare orientation link would invite a reader to
treat it as the source of the pairing; and the simplicial-tree seam of Finding 7
points the other way, from GT-14 back to this page.

## Cross-batch dependencies

Nothing in this batch depends on batch 1 of run `frontier-18`
(`lagrange-four-square-theorem` and its companion, number theory at order 57.009),
and nothing there can depend on this batch: both of its pages sit below both of
mine in reading order. There is no shared item id and no shared source.

Outside this run, the extraspecial pair depends on run `frontier-17`'s Frattini
pair as Finding 2 records. Alpha should confirm nothing in that pair is edited at
step 6 of this run — it is out of scope, and the read-only boundary holds.

## New ids proposed, and the greps run

Every id on both pairs is new; none existed before this batch. The searches I
ran, each over `items/` and over the item lists of `research/plan-spec.json`:

- `extraspecial`, `special-p-group`, `central-product`, `commutator-pairing`,
  `symplectic`, `heisenberg`, `modular-group`, `arf` — no match except the
  published `ex-heisenberg-group-is-nilpotent-of-class-two` (order 67, B page),
  `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` (order 71, B page)
  and `ex-symplectic-normal-form-of-a-degenerate-alternating-form` (order 93, B
  page). None is an A-page item, so none is reusable as a dependency, and none
  states what my items state; Finding 5 records the Heisenberg overlap and the
  wikilink that makes it visible.
- `cayley`, `word-metric`, `word-length`, `quasi-isom`, `coarse`, `geodesic`,
  `bilipschitz`, `separated-net`, `locally-finite`, `finitely-generated-group`,
  `simple-graph`, `tree-and-forest` — no match on any of the concepts I mint. The
  near-misses are `thm-cayleys-theorem` (order 42), `thm-cayley-formula` and
  `cor-cayley-hamilton-recurrences-for-matrix-powers`, none of which is about a
  Cayley graph; `thm-cayleys-theorem` is cited, not re-minted, by
  `thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem`.
- `validate-plan`'s `dup-id` check ran clean over the spliced spec, which is the
  mechanical form of the same search.

## Dependency-closure statement

Every published item I propose as a dependency was opened from disk and its
Statement or Definition read; the exact clause each fact will cite is recorded in
`research/frontier-18-batch-2.proof-contracts.json`, and for published sources
those quotes were extracted verbatim from the item file rather than retyped.

Classification of every external dependency, reproducing what `depsource.mjs`
computes (I could not run it against a spec outside the checkout, so this is my
own count over the same data; the engine's run is authoritative):

| page | published | draft-page | planned-earlier | planned-later | homeless | unresolved |
|---|---:|---:|---:|---:|---:|---:|
| `extraspecial-p-groups-and-central-products` | 204 | 23 | 0 | 0 | 0 | 0 |
| `extraspecial-p-groups-and-central-products-examples` | 34 | 1 | 0 | 0 | 0 | 0 |
| `cayley-graphs-word-metrics-and-quasi-isometry` | 106 | 0 | 0 | 0 | 0 | 0 |
| `cayley-graphs-word-metrics-and-quasi-isometry-examples` | 30 | 0 | 0 | 0 | 0 | 0 |

The Cayley pair rests on published content only. The extraspecial pair's
`draft-page` edges are the ten distinct items of Finding 2, all on its own
declared prerequisite page. No dependency is unresolved, homeless, or on a later
page, and no item depends on an item homed on an examples page.

Provenance eligibility: no dependency has `provenance.statement: ai-generated`.
I checked the frontmatter of every one.

**Legacy-unclassified dependencies.** None. Every published item I cite carries
component `provenance`, so the `established-from-knowledge` versus
`source-checked` route does not arise for this batch.

**Published-dependency repairs.** None found. I read every cited Statement and
Definition and none contains an unambiguous falsehood. Two conventions differ
from my sources and are recorded rather than repaired: the commutator convention
$[g,h]=ghg^{-1}h^{-1}$ (`def-commutator-and-commutator-subgroup`) against
Craven's and van Beek's $x^{-1}y^{-1}xy$, which flips the sign in the class-two
power formula and is why my
`lem-power-of-a-product-in-a-group-of-class-two` reads $[y,x]^{\binom n2}$ rather
than $[x,y]^{\binom n2}$; and the dihedral convention of Finding 4.

## Web-research ledger

Every source below was fetched in full and stamped by
`source-fetch-check.mjs --stamp`. The byte counts in the stamps match the files I
extracted text from, so the harvest in
`research/frontier-18-batch-2.coverage.json` is against these exact documents.
The Kaur–Kulshrestha row was added in the step-3 fix pass; see B2-1 below.

| source | kind | what it backs | stamp |
|---|---|---|---|
| Craven, *The Theory of p-Groups*, <https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf> | lecture-notes | extraspecial definition, central products, the classification, the automorphism theorem; ch. 2 §§2.1–2.2 read for the commutator and Frattini conventions | 350479 bytes, 48 pages |
| van Beek, *Topics in Finite $p$-Groups*, <https://martinvanbeek.github.io/uploads/LectureNotes.pdf> | lecture-notes | independent control on every extraspecial statement; the two order-$p^3$ presentations, the maximal abelian and maximal elementary abelian results | 596884 bytes, 62 pages |
| Löh, *Geometric Group Theory*, <https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf> | lecture-notes | graph conventions, Cayley graphs, Cayley trees, quasi-isometry, quasi-geodesics, invariants | 1740037 bytes, 264 pages |
| Druţu–Kapovich, *Geometric Group Theory*, <https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf> | monograph | independent control on Cayley graphs and word metrics; the coarse-Lipschitz formulation, the net characterisation, the maximal-metric and Lipschitz lemmas | 4998235 bytes |
| Kaur–Kulshrestha, *Characters of real special 2-groups*, <https://arxiv.org/pdf/1510.06583> | paper | the square map $q(xZ(G))=x^2$ and its polar map, the polarization identity, and the fact that the form of an extraspecial $2$-group is $\mathbb F_2$-valued — the backing for the two items Alpha inserted at B2-1 | 246050 bytes, 21 pages |

### Convention disagreements found, and what I did

1. **Commutator.** Craven Definition 2.8 and van Beek both use
   $[x,y]=x^{-1}y^{-1}xy$; the library uses $ghg^{-1}h^{-1}$. Every commutator
   identity is restated in the library convention, which changes the sign in the
   power formula as recorded above.
2. **Dihedral subscript.** Craven $D_{2^n}$, van Beek $\operatorname{Dih}(n)$,
   library $D_n$ of order $2n$. Finding 4.
3. **Special group.** Craven Definition 3.1 says $G'=\Phi(G)=Z(G)$ elementary
   abelian; van Beek Definition 2.28 says $G'=Z(G)$ with $G/Z(G)$ of exponent $p$.
   These agree for nonabelian groups, and Craven's page-8 informal version
   ("$G/Z(G)$ elementary abelian and $|Z(G)|=p$") would additionally call the
   cyclic group of order $p$ extraspecial. `def-special-and-extraspecial-p-groups`
   takes the nonabelian hypothesis explicitly and
   `prop-equivalent-characterisations-of-an-extraspecial-p-group` proves the three
   descriptions equivalent, which is where the disagreement is discharged.
4. **Cayley graph.** Löh Definition 3.2.1 takes edges $\{g,gs\}$ for $s$ in
   $(S\cup S^{-1})\setminus\{e\}$, giving a simple graph; Kapovich's undirected
   version takes $\{g,h\}$ with $h=gs$ for $s\in S$ and does not exclude the
   identity. I follow Löh, and `def-cayley-graph` says so and says why: excluding
   the identity is what keeps the object a simple graph in the library's sense.
5. **Quasi-isometry.** Löh Definition 5.1.6 defines a quasi-isometry through a
   quasi-inverse quasi-isometric embedding; Kapovich Definition 8.10 through a
   coarse Lipschitz coarse inverse, and Definition 8.1 through bilipschitz
   separated nets. All three are scaffolded and the equivalences proved, at
   `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings`
   and `thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets`.
6. **Quasi-geodesic constant.** Löh Definition 5.3.4 allows the additive constant
   to be zero; his Definition 5.1.6 requires the quasi-isometry additive constant
   to be strictly positive. I take the additive constant nonnegative throughout
   and say so in `def-coarse-lipschitz-map-and-quasi-isometric-embedding`; nothing
   on the page needs it positive.
7. **A typographical slip in the source, not a convention.** Löh Definition 5.1.6
   writes the finite-distance condition as $d_X(f(x),f'(x))\le c$ where the
   distance is taken in the target; `def-bounded-distance-between-maps` writes
   $d_Y$. Recorded so the step-5 author does not copy the slip.

### Choice-scope record

Two items use a selection over a possibly infinite family and say so.
`thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`
follows Löh Proposition 5.1.10 in choosing a preimage for each target point;
Kapovich Remark 8.18 observes the choice is avoidable for proper spaces, and the
item records the sharper form the page can actually use: for a group with a fixed
finite generating set the shortlex-least representative word gives a definable
selection, because the set of words over a finite alphabet carries an explicit
well-ordering, so the group case needs no choice at all.
`thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets`
selects twice, once for a maximal separated subset and once for a nearby net
point, and cites `def-axiom-of-choice` for the first.

## Component provenance, planned per item

Codes as in §4 of the track: `[LN]` literature-derived statement with no proof
component, `[LL]` both literature-derived, `[LA]` literature-derived statement
with an AI-altered proof, `[AA]` both AI-altered. **No item in this batch has an
`ai-generated` statement or construction**, so no `generation` block is needed
anywhere and no truth-risk counterexample search is owed. The rationale for each
assignment is the source locator recorded against it in
`research/frontier-18-batch-2.coverage.json`.

- **`[LL]`** — every item whose statement and proof both follow a named source
  range: on the extraspecial pair, the definition and characterisation items, the
  conjugacy-class and centraliser results, the pairing lemmas, the two
  order-$p^3$ constructions and their properties, the two classifications, the
  maximal-abelian results and the two automorphism propositions; on the Cayley
  pair, the graph notions from Löh §3.1, the Cayley graph items from §3.2 and
  Kapovich §7.9, the word-metric items, the tree theorems of §3.3, and the
  quasi-isometry items of §5.1–5.2 and Kapovich §8.1.
- **`[LA]`** — literature-derived statement, proof reorganised to close library
  dependencies rather than to follow the source. These are the items where my
  route differs from the source because the source's route is unavailable:
  `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed`
  (Craven Theorem 3.9 and van Beek Theorem 2.40(iii) prove it in linear algebra; I
  prove it inside the group), `lem-orthogonal-complement-counting-for-the-commutator-pairing`
  (Craven Lemma 3.11 is rank–nullity; mine is a counting argument on an
  elementary abelian group), `lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups`
  and `thm-classification-of-extraspecial-two-groups` (Craven counts elements of
  order four in one case; mine is a general recursion),
  `lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p`
  (Craven's Proposition 3.13(ii) is partly unproved and van Beek leaves it an
  exercise), the central-product construction items (both sources assert the
  existence-and-uniqueness theorem without proof),
  `cor-an-extraspecial-p-group-has-no-complement-to-its-centre` (van Beek states
  it for order $p^3$; the argument is general), and on the Cayley pair the four
  agreement items, `thm-the-path-metric-of-a-connected-simple-graph-is-a-metric`
  and `thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces`.
- **`[LN]`** — every definition, including the two new construction definitions,
  since a definition supplies no proof component.
- **`[AA]`** — the B-page items that adapt a sourced example to library notation:
  `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two`,
  `ex-a-central-product-of-two-cyclic-groups-of-order-four`,
  `ex-two-generating-sets-of-a-dihedral-group`, and
  `ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals`.
- **`external_dependency`** — none. No item on either pair is `proved_here: false`,
  and no external fallback was needed.

Every `[LL]`, `[LA]` and `[AA]` item needs a reader-visible
`sources.references` URL at step 5, drawn from the web-research ledger above and
from nowhere else; the coverage file records which locator backs which item.

**Added in the step-3 fix pass (B2-1).** Alpha inserted two items and did not
touch this file, so their labels are recorded here.
`def-square-map-of-an-extraspecial-two-group` is `[LN]`: Kaur–Kulshrestha §2.1
defines exactly this map, $q(xZ(G))=x^2$ with polar map
$b_q(xZ(G),yZ(G))=xyx^{-1}y^{-1}$, and a definition supplies no proof component.
`lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing` is
`[LA]`: the statement is that source's §2 quadratic-map definition together with
its §2.1 identification, but the source obtains the polarization identity by
declaring $b_q$ the polar map of a quadratic map, whereas the proof here derives
it inside the group from `lem-power-of-a-product-in-a-group-of-class-two` at
$n=2$ and the alternation of the pairing. Both take
<https://arxiv.org/pdf/1510.06583> in `sources.references`. Neither is
`ai-generated`, which matters because
`lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing` is a
load-bearing dependency of
`prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`
and an AI-generated Statement may never be a `deps` target. No truth-risk
counterexample search is owed for either.

## Finite smoke tests selected, and why so few

Eight of the one hundred and thirteen proof-bearing items carry a
`finite_smoke` obligation:

- `tree-characterisation` on
  `lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints`,
  `thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path`,
  `lem-the-graph-notions-agree-with-the-published-finite-graph-theory`,
  `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree`
  and `cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set`. The
  registry check enumerates every simple graph through five vertices and tests
  "tree iff connected with $n-1$ edges", including the null graph — which is
  exactly the convention my definitions fix.
- `cyclic-subgroup-lagrange` on `ex-the-heisenberg-group-of-order-twenty-seven`
  and `ex-the-modular-group-of-order-twenty-seven`, whose claims are subgroup
  counts of prescribed order.
- `binomial-congruence-solution-count` on
  `lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared`, whose
  claim is the order of a unit in a cyclic unit group.

**The other one hundred and five carry none, and that is a refusal, not an
omission.** `finite-smoke --self-test` lists ten checks: three graph checks, two
poset checks, one cyclic-subgroup check and four arithmetic or polynomial checks.
None models an extraspecial-group claim, a central product, a commutator pairing,
a coarse-Lipschitz estimate or a quasi-isometry. `QUALITY-CONTROLS.md` records
that on `frontier-13` two Betas in the same position "correctly refused rather
than attach an unrelated check and manufacture coverage", and that extending the
registry is the orchestrator's job. **Gap reported for the orchestrator:** a
bounded check that enumerates small $p$-groups and verifies a central-product
order or an involution count would cover most of the extraspecial page, and one
that enumerates small finite Cayley graphs and compares two word metrics would
cover much of the Cayley page. Neither exists today.

## Notes with no scaffold anchor, for my step-5 self

1. **The class-two power formula in the library's commutator convention is**
   $(xy)^n=[y,x]^{\binom n2}x^ny^n$, **not** $[x,y]^{\binom n2}$. From
   $[x,y]=xyx^{-1}y^{-1}$ one gets $yx=[x,y]^{-1}xy=[y,x]xy$, and the induction
   uses $\binom n2+n=\binom{n+1}{2}$. Getting the sign backwards is invisible for
   odd $p$, where the factor vanishes anyway, and wrong at $p=2$.
2. **The $p=2$ exception must be stated wherever the odd-$p$ power argument is
   used.** $\binom22=1$ is not divisible by $2$. Three items depend on this and
   each says where it fails.
3. **`ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group`** (published,
   order 71) already writes the same multiplication $(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$.
   Use the same formula verbatim in `def-heisenberg-group-of-order-p-cubed` and
   wikilink the published example from the B-page Heisenberg item, so a reader
   meets one group and not two.
4. **The Heisenberg construction at $p=2$ returns $\operatorname{Dih}(C_4)$, not
   a group of exponent two.** Say so; do not write "for a prime $p$" and leave the
   exponent claim unqualified.
5. **Do not write $\iota(n)$ anywhere.** Several items name natural numbers
   ($p^{1+2n}$, $2^{2n}\pm2^n$, degree four, index two); write the numbers.
6. **`def-graph-distance-and-girth` justifies its minimum by finiteness of the
   vertex set.** My `def-graph-path-metric` must justify it by connectedness and
   well-ordering instead, and `lem-the-graph-notions-agree-with-the-published-finite-graph-theory`
   must say that the two justifications give the same value on a finite graph
   rather than that the two definitions are literally the same sentence.
7. **A word metric space is not geodesic.** Write $(1,1)$-quasi-geodesic. The
   false statement on the B page exists to make the distinction visible.
8. **The `redundant-prereq` warning is load-bearing here.** Do not add
   `graphs-walks-and-connectivity` to the A page's `requires`; it is reachable
   through `trees-forests-and-spanning-trees` and adding it warns.
9. **`prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite`
   counts the symmetrised set, not $S$.** An involution contributes one neighbour.
   The dihedral B-page example turns on exactly this.
10. **No prose count and no positional claim.** Both page summaries name the
    mathematics only; neither says how many items the page has, nor that any other
    page is earlier or later.

## Honest confidence statement

**What I verified.** Every published dependency was opened on disk and its
Statement or Definition read; the exact clause each planned fact will cite is
recorded verbatim in the proof contract, extracted from the source file rather
than retyped, so the step-5 quotes cannot drift. All four sources were downloaded
in this dispatch and read over the ranges the coverage file claims. The
`requires` closures were computed from `research/plan-spec.json` rather than
assumed. `validate-plan` was run against a spliced copy of the spec and exits 0.

**What I did not verify.** The proof contracts are a *plan*: the step numbers,
the fact labels and the quotes of items in this batch are what I intend to write,
not what is written, and `proof-contract.mjs` cannot check any of it until step 5.
The strategies are routes I believe close, not proofs I have written out; the two
I would look at hardest are
`lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p`,
where Craven's own argument has a gap he does not fill ("It turns out that there
is another non-abelian subgroup of order $p^3$ that centralizes..."), and
`prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`,
where van Beek's induction is terse. I have not run
`finite-smoke`, `risk-report`, `citation-fidelity` or `proof-contract`, because
none can run before the items exist. I did not read the Gorenstein or Winter
sources the design names: neither has an openly fetchable full text, and the
fetch-verification rule forbids recording a URL I have not read.

**What is most likely to be wrong.** The classification of extraspecial
$2$-groups depends on my counting recursion being right at every $n$; I checked
it by hand at $n=1$ and $n=2$ against Craven's element counts (20 and 12 for the
two groups of order 32) and it agrees, but the induction is mine and not the
source's.

## Continuity checkpoint

- **Substage:** step 5 authoring, pre-edit context gathered; existing step-3
  repairs re-read from disk and treated as binding.
- **Owned artifact paths:** `items/` for the 76 still-missing batch-2 ids;
  `library/group-theory/extraspecial-p-groups-and-central-products.md`;
  `library/group-theory/extraspecial-p-groups-and-central-products-examples.md`;
  `library/group-theory/cayley-graphs-word-metrics-and-quasi-isometry.md`;
  `library/group-theory/cayley-graphs-word-metrics-and-quasi-isometry-examples.md`;
  `research/frontier-18-batch-2.proof-contracts.json`;
  `research/frontier-18-batch-2.coverage.json`; this notes file.
- **Completed gates / checks relied on at authoring start:** scaffold-stage
  `content-policy --manifest-only`, `coverage-checklist --require-destination`,
  `source-fetch-check --stamp`, Alpha step-3 review and re-check; worktree
  baseline taken with many unrelated owner changes present and left untouched.
- **Frozen-text state:** 38 scoped item files already exist on disk, 76 do not;
  `proof-contracts.json` already has 114/114 contract entries and is the
  authoring map; the square-map seam repaired by Alpha re-check is already in the
  manifest and must be preserved.
- **Open mathematical constraints:** no forward use of the linear-algebra page
  on the extraspecial pair; no B-page item may become a load-bearing dependency;
  the Cayley graph keeps Löh's simple-graph convention excluding the identity
  generator; word-metric spaces are only quasi-geodesic, not geodesic; the
  $p=2$ exception in the class-two power formula must stay explicit.
- **Exact next action:** author the missing definitions and first low-dependency
  Cayley/extraspecial items from the manifest and proof-contract scaffold, then
  run `reflow` and `precheck` on that first cluster before expanding to the
  remaining examples and false statements.

## Step-3 fix pass

Reviewing Alpha: group **`d`**, report
`research/frontier-18-alpha-d-step3-scaffold-review.md`, which uses the id
prefix `B2-` for this batch and covers batches 2 and 9. Both my pairs are
`sufficient`. Ids below are Alpha's and are not renumbered. Alpha repaired
`research/frontier-18-batch-2.pages.json` itself under the 2026-08-16 step-3
licence and states it edited no coverage, notes or proof-contract file; those
three are mine, so every derived obligation of a repair Alpha made lands here.

### B2-1 — the maximal-elementary-abelian route. **applied** (the parts Alpha left me)

Alpha's repair of the manifest is on disk and I did not touch it: the two
inserted items and the rewritten strategy and `deps` of
`prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`.
I re-derived the counting argument from the page's own lemmas before adopting
it, because I author it at step 5 and Alpha's report is not a proof:

- `lem-power-of-a-product-in-a-group-of-class-two` is $(xy)^n=[y,x]^{\binom n2}x^ny^n$,
  so at $n=2$ it gives $(xy)^2=[y,x]x^2y^2$ — Alpha's step, confirmed against
  the item's own strategy rather than against the report.
- `lem-orthogonal-complement-counting-for-the-commutator-pairing` gives
  $|\bar A||\bar A^{\perp}|=|P/Z(P)|$, so $|\bar E^{\perp}|=2^{2n-k}$.
- the coset sum is $2^{k}+(2^{2n-k}-2^{2n-2k})2^{k-1}=2^{2n-1}+2^{k}-2^{2n-k-1}$,
  doubling to $2^{2n}+2^{k+1}-2^{2n-k}$ elements with $x^2=1$; against
  `thm-classification-of-extraspecial-two-groups`'s $2^{2n}\pm2^{n}$ this is
  $2^{k}-2^{2n-k-1}=\pm2^{n-1}$, strictly increasing in $k$, so $k=n$ and
  $k=n-1$. Both attained. $|E|=2^{k+1}$ gives $2^{n+1}$ and $2^{n}$.
- **The $n=1$ boundary closes, and it is the one that could have failed.** At
  $k=0$ the "coset outside $\bar E^{\perp}$" case is vacuous, the count is one
  class and two elements, and $2^{0}-2^{2n-1}=-2^{n-1}$ forces $n=1$: the $Q_8$
  case, where $Z(Q_8)$ genuinely is the unique maximal elementary abelian
  subgroup, of order $2=2^{n}$. The route is right at its first index.

Three consequences were left in my files and I applied all three.

1. **`research/frontier-18-batch-2.proof-contracts.json`, contract rewritten.**
   The stored contract for
   `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`
   was the old induction-and-Dedekind route. It was not merely stale prose: it
   cited `lem-dedekind-modular-law-for-subgroups`,
   `def-centralizer-of-a-subgroup`, `def-quaternion-group-of-order-eight`,
   `lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups`
   and `prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial`,
   all five of which Alpha removed from the item's `deps`, so every one would
   have failed `proof-contract --strict` as `citation-undeclared-dependency`
   after step 5. Replaced with the counting route: nineteen citations, nine
   numbered steps, all eight boundary rows disposed.
2. **`research/frontier-18-batch-2.proof-contracts.json`, contract added.**
   `lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing` is
   proof-bearing and had no contract and no `scope` entry, which is
   `scope-missing-contract` under `--strict`. Added to `scope` (now 114) with a
   twelve-citation, six-step contract. `def-square-map-of-an-extraspecial-two-group`
   correctly has none: it is a definition, like the other twenty-eight on this
   batch's pages.
3. **`research/frontier-18-batch-2.coverage.json`, a source added.** This is the
   part that would otherwise have shipped a provenance label with no harvest row
   behind it — the defect Alpha itself repaired as B9-6/F3 on the other batch.
   Neither Craven nor van Beek contains the square map: I re-extracted the text
   of both PDFs in this dispatch and the strings `quadratic` and `Arf` occur
   **zero** times in either document, which independently confirms Alpha's
   B2-2 reading. So Alpha's two inserted items had no source at all, and
   `ai-generated` is not available for either, because the lemma is a
   load-bearing `deps` target of item 48. I harvested a third source that
   states exactly both: Kaur–Kulshrestha, *Characters of real special
   $2$-groups* (arXiv:1510.06583v1) §2, pp. 2–6, whose §2.1 reads "the map
   $q:G/Z(G)\to Z(G)$ defined by $q(xZ(G))=x^2$ ... is a well defined quadratic
   map and its polar map $b_q$ is given by $b_q(xZ(G),yZ(G))=xyx^{-1}y^{-1}$",
   and whose §2 opening defines the polar map by $b_q(v,w)=q(v+w)-q(v)-q(w)$ —
   the polarization identity, which in characteristic two is the identity the
   lemma states. Fourteen rows harvested over that range, six `included` and
   eight `out-of-scope`; the source is `kind: paper`, which is legal here
   because the pair keeps two `lecture-notes` primaries. Fetched and stamped in
   this dispatch: 246050 bytes, 21 pages.

Component provenance for the two new items is recorded in
**§Component provenance** above, not only here.

**Convention notes for my step-5 self, from the new source.** It writes $D_4$
for the dihedral group of order eight — which agrees with the library's $D_n$ of
order $2n$ and so does not reopen Finding 4 — but $Q_2$ for the quaternion group
of order eight, where the library and both other sources write $Q_8$. Use $Q_8$.
Its Remark 2.4 says "for each $n\in\mathbb N$ there are exactly two extraspecial
$2$-groups of order $2^{2n+1}$"; read that as $n\ge1$, since at $n=0$ the group
has order two and is abelian. `thm-classification-of-extraspecial-two-groups`
already says $n\ge1$ and must keep saying it. This is defect class 1 and the
source is the place it would have entered.

### B2-2 — the Arf decline, partly overturned. **already correct**, with the restoration absorbed

Alpha upheld the decline of design item 15 and overturned the decline of design
items 13–14, restoring them as the two items of B2-1. Nothing in my files
asserted the overturned half as settled — Finding 3 declined all three together
and Alpha's report is the record of the split — so the entry that would have
gone stale is the coverage harvest, and that is repaired above. Evidence for the
half Alpha upheld: the zero occurrences of `Arf` in either source, re-measured
in this dispatch.

### B2-3 — the pairing built inside the group. **already correct**; the seam is now carried

Approved with constants verified. The action Alpha left is a step-6 seam
warning, and it is an authoring obligation, so it is recorded here rather than
left in the report: when writing
`lem-orthogonal-complement-counting-for-the-commutator-pairing`, state it about
**this pairing on $P/Z(P)$** and prove it by the coordinate-map count its
strategy describes. Do not phrase it as rank–nullity or as a general fact about
alternating forms on an $\mathbb F_p$-space: no vector-space theory is available
below order 71.003, and a rank–nullity phrasing would be an appeal to
`dual-spaces-bilinear-forms-and-inertia` at order 92, a forward reference on the
spine. It is now cited by the new item-48 contract as well, which raises the
cost of that drift.

### B2-4 — the frontier-17 draft dependencies. **already correct**

Verified on disk in this dispatch rather than taken from the report:
`grep -L "^status: published"` over the ten items named in Finding 2 returns
nothing, and `frattini-subgroups-and-the-burnside-basis-theorem` and its
examples companion are `status: published`. Finding 2's publication-order
constraint is discharged; no edit.

### B2-5 — the dihedral rename and the existence half. **already correct**

Findings 4 and 5 approved as written, with Alpha's independent check of the
Heisenberg construction at $p=2$ agreeing with the scaffold. No edit.

### B2-6 — my rationale for putting `fs-` items on the B page was wrong. **applied**

Alpha accepts the conclusion and corrects the reason, and the correction is
right: `SCHEMA.md` §6 does not put `fs-` items on B pages, A pages carry an
`examples:` array too, and published A pages list `fs-` items in it. Finding 10
above is left standing as the record of what I argued at step 2; this entry is
the correction. **The conclusion holds on the other two grounds Finding 10
gives** — the frontier-17 `frattini-subgroups-and-the-burnside-basis-theorem`
pair immediately preceding does the same, and it is what keeps the Cayley A page
at sixty rather than sixty-five. Both placements are legal; nothing moves.

### B2-7 — accepted. **already correct**

No edit; Alpha's severity table records it as accepted with the rationale
correction handled at B2-6.

### B2-8 — Craven Theorem 3.16 to `owner-decision`. **already correct**

Decline upheld. Alpha additionally confirmed from `plan-spec.json` that no page
owns P. Hall's recognition theorem and carried it to step 9 and the step-10
owner report. The coverage row and its reason are unchanged; the destination
`owner-decision` is the honest one.

### B2-9 — plus/minus type for every $p$. **applied** (recording requirement)

Alpha accepts the scaffold over the design and imposes a recording requirement,
which is an authoring obligation for step 5, so it is recorded here:
`def-plus-and-minus-type-of-an-extraspecial-p-group` must carry a Remark naming
**both** source notations — van Beek Definition 2.38's $p^{1+2n}_{\pm}$ for
every prime and Craven Definition 3.3's $p^{1+2}_{+}$ for the odd exponent-$p$
group — and stating which is in force here, in the same way the Remark of
`def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups`
records $\operatorname{Dih}(C_4)$ against $D_8$. Finding 11's replacement `fs-`
item stands.

### B2-10 — two van Beek rows under-mapped. **already correct**

van Beek Proposition 2.32(i) and Theorem 2.42 each cover a pair of results and
each names one item. The coverage schema allows one item per row and both
partners are scaffolded, so there is nothing to repair; Alpha recorded it so the
step-6 faithfulness read does not re-derive it. No edit.

### B2-11 — the Cayley split, declined. **applied** (the binding constraint)

I recommended the split at Finding 8 and Alpha declines it, having verified the
cut mechanically and agreed the cut is clean. I do not push back: Alpha's three
reasons are all facts about this run rather than preferences, and the second is
decisive — the split would put three A/B pairs in batch 2 and
`content-policy.mjs` errors `batch-a-pair-cap` at `BATCH_A_PAIR_CAP = 2`, while
retiring the page id would trip `manifest-integrity` as scope loss.

**One correction to Alpha's reason 2, which does not change the decision.**
Alpha writes that the pair-cap gate "runs at `3-review`, `3-fix`, `3-recheck`,
`4-splice` and `5-author`". On disk it runs at four stages and only two of them
are on that list. `tools/content-policy.mjs` line 238 puts the check behind
`!auditMode` alone, not behind `manifestOnly`, so it fires in both modes;
`tools/autopilot/stages/mathlib.mts` calls the manifest form (`policyGates`) at
`1-scaffold` and `3-fix` only, and the item form (`policyItemGate`) at
`5-author` and `6c-cross`. `3-review`, `3-recheck` and `4-splice` do not run
content-policy in any form. The decision stands unchanged and is if anything
better supported for this dispatch: `3-fix` is the stage executing now, so the
split would fail the cap immediately rather than at some later stage. The recommendation is carried to
`frontier-19` planning with the cut recorded.

**The constraint this puts on my step-5 and step-6 self, recorded because it
binds me and no gate will catch it:** `cayley-graphs-word-metrics-and-quasi-isometry`
stands at exactly sixty A items and **no A item may be added to it after step 4**.
`planGate()` — and with it `validate-plan`'s `size` rule — runs at no stage after
`5-author`, so a sixty-first item added during a step-6 repair would be invisible
to every gate on this run and would still violate the owner's ceiling. If a
step-6 defect needs an intermediate lemma, inline it into the proof that needs it
(explicitly permitted for a would-be decomposition lemma) or route an example to
the B page, which has nineteen items and no ceiling pressure. If neither closes
the defect, it is a blocker for the owner, not a silent sixty-first item.

### B2-12 — the manifest/spec `requires` disagreement. **already correct**

Finding 6 routed this adjudication to Alpha by design and Alpha adjudicated it
and repaired the manifest: the A page now declares the spec's four edges and the
B page declares only its A page. Verified on disk in this dispatch —
`splice-plan.mjs --run frontier-18 --batch 2 --dry-run` reports four pages
spliced and no withholding. I made no further edit; the `[redundant-prereq]`
advisory on `graphs-walks-and-connectivity` is a spec-side drift verdict and is
not mine to undo.

### B2-13 — native graph theory for infinite graphs. **already correct**

Finding 7 approved in full, including the two agreement items being the only
place the published finite graph theory is cited. The §GT-14 amendment I owe
(`simplicial-trees-and-group-actions` cites this page's tree items rather than
re-minting them) is a **prose-scaffold** amendment and Alpha carried it to the
lead Alpha for step 4; it is not a batch edit and I have not made one.

### B2-14 — the design calls the word-metric space geodesic. **already correct**

The scaffold does not carry the design's claim and refutes it outright at
`fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space`.
Alpha additionally checked that nothing downstream inherits the design's error.
No edit.

### B2-15 — one design `fs-` absent. **already correct**

Accepted; its content is carried concretely by
`ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics`,
and two `fs-` items the design did not name were added. No edit.

### D-1 — not mine

`SCHEMA.md` §6 states a 100-item ceiling where `tools/validate-plan.mjs`
defaults `--max-items` to 60. Alpha reports it as a doc bug for whoever next
touches `SCHEMA.md`. It is outside a step-3 batch write boundary and I made no
edit. It did not affect this batch: I scaffolded to 60.

### Gates re-run after these edits

From the repo root, in this dispatch:

```
node tools/coverage-checklist.mjs research/frontier-18-batch-2.coverage.json --require-destination
  -> 2 page(s), 191 harvested result(s), 0 error(s), 0 warning(s)
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json
  -> 0 error(s), 0 warning(s) on every run in this dispatch. The scoped-item
     total is whole-run and moved from 786 to 796 between my first and last
     invocation, because the other batches are live and editing their own
     manifests; batch 2's own contribution, 143 items over four pages, is the
     figure the splice dry-run reports and it did not change.
node tools/validate-plan.mjs research/plan-spec.json
  -> OK; acyclic and consistent across 348 page(s) with item lists
node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-2.coverage.json --stamp
  -> 5/5 source(s) fetch-verified (1 newly stamped)
node tools/splice-plan.mjs --run frontier-18 --batch 2 --dry-run
  -> 4 page(s) spliced, 143 item(s)
```

`node tools/proof-contract.mjs research/frontier-18-batch-2.proof-contracts.json --strict`
reports 114 `item-missing` errors and nothing else, which is the correct result
before step 5: it checks contracts against authored item files and no item on
this batch is authored yet. The structural half — every scoped id carrying a
contract, every numbered step covered once, all eight boundary rows present — is
what I changed and it is what the run after step 5 will check.

## Step-5 authoring

Authored all 114 scoped item files and the four page files for this batch. Every scoped item now exists on disk; `precheck` passes on the full A-page and B-page clusters.

### Per-item list

- lem-commutator-identities-in-a-group-of-class-two — precheck: pass
- lem-power-of-a-product-in-a-group-of-class-two — precheck: pass
- cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p — precheck: pass
- prop-equivalent-characterisations-of-an-extraspecial-p-group — precheck: pass
- cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p — precheck: pass
- cor-an-extraspecial-p-group-has-no-complement-to-its-centre — precheck: pass
- prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p — precheck: pass
- cor-the-centralizer-of-a-noncentral-element-of-an-extraspecial-p-group-has-index-p — precheck: pass
- lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup — precheck: pass
- prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images — precheck: pass
- prop-order-centre-and-derived-subgroup-of-a-central-product — precheck: pass
- thm-universal-property-of-the-central-product — precheck: pass
- thm-recognition-of-an-internal-central-product — precheck: pass
- thm-a-central-product-of-extraspecial-p-groups-is-extraspecial — precheck: pass
- lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating — precheck: pass
- lem-the-commutator-pairing-is-nondegenerate — precheck: pass
- lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed — precheck: pass
- thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed — precheck: pass
- cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number — precheck: pass
- cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank — precheck: pass
- lem-orthogonal-complement-counting-for-the-commutator-pairing — precheck: pass
- prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n — precheck: pass
- cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups — precheck: pass
- prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed — precheck: pass
- prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p — precheck: pass
- lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared — precheck: pass
- prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p — precheck: pass
- prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial — precheck: pass
- thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial — precheck: pass
- thm-classification-of-the-nonabelian-groups-of-order-p-cubed — precheck: pass
- lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups — precheck: pass
- lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups — precheck: pass
- thm-classification-of-extraspecial-two-groups — precheck: pass
- lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p — precheck: pass
- thm-classification-of-extraspecial-p-groups-for-odd-p — precheck: pass
- cor-the-exponent-of-an-extraspecial-p-group — precheck: pass
- lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing — precheck: pass
- prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner — precheck: pass
- prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing — precheck: pass
- prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups — precheck: pass
- ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight — precheck: pass
- ex-the-heisenberg-group-of-order-twenty-seven — precheck: pass
- ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight — precheck: pass
- ex-the-modular-group-of-order-twenty-seven — precheck: pass
- ex-the-two-extraspecial-groups-of-order-thirty-two — precheck: pass
- ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two — precheck: pass
- ex-a-central-product-of-two-cyclic-groups-of-order-four — precheck: pass
- ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight — precheck: pass
- cex-a-special-p-group-that-is-not-extraspecial — precheck: pass
- cex-the-central-product-decomposition-of-an-extraspecial-group-is-not-unique — precheck: pass
- fs-every-special-p-group-is-extraspecial — precheck: pass
- fs-there-is-exactly-one-extraspecial-group-of-each-admissible-order — precheck: pass
- fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism — precheck: pass
- fs-the-commutator-pairing-needs-no-choice-of-a-central-generator — precheck: pass
- fs-an-extraspecial-p-group-has-a-complement-to-its-centre — precheck: pass
- fs-a-group-of-order-p-to-an-even-power-can-be-extraspecial — precheck: pass
- lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints — precheck: pass
- thm-the-path-metric-of-a-connected-simple-graph-is-a-metric — precheck: pass
- lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism — precheck: pass
- lem-the-graph-notions-agree-with-the-published-finite-graph-theory — precheck: pass
- lem-balls-in-a-connected-locally-finite-graph-are-finite — precheck: pass
- thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path — precheck: pass
- lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group — precheck: pass
- prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite — precheck: pass
- thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph — precheck: pass
- thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem — precheck: pass
- lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph — precheck: pass
- lem-word-length-is-well-defined-and-satisfies-the-length-laws — precheck: pass
- thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph — precheck: pass
- prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite — precheck: pass
- prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity — precheck: pass
- prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance — precheck: pass
- thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree — precheck: pass
- cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length — precheck: pass
- thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis — precheck: pass
- lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition — precheck: pass
- lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings — precheck: pass
- lem-a-map-at-bounded-distance-from-a-quasi-isometric-embedding-is-a-quasi-isometric-embedding — precheck: pass
- thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse — precheck: pass
- cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings — precheck: pass
- thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces — precheck: pass
- prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups — precheck: pass
- prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy — precheck: pass
- thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets — precheck: pass
- prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter — precheck: pass
- thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics — precheck: pass
- prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space — precheck: pass
- prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included — precheck: pass
- prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry — precheck: pass
- prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one — precheck: pass
- cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space — precheck: pass
- prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic — precheck: pass
- prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz — precheck: pass
- cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence — precheck: pass
- prop-finiteness-is-a-geometric-property-of-finitely-generated-groups — precheck: pass
- ex-the-cayley-graph-and-word-metric-of-the-integers — precheck: pass
- ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics — precheck: pass
- ex-the-cayley-graph-of-a-free-abelian-group-of-finite-rank — precheck: pass
- ex-the-cayley-tree-of-a-free-group-of-rank-two — precheck: pass
- ex-two-generating-sets-of-a-dihedral-group — precheck: pass
- ex-the-integers-are-quasi-isometric-to-the-real-line — precheck: pass
- ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it — precheck: pass
- ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers — precheck: pass
- cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics — precheck: pass
- cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective — precheck: pass
- fs-the-cayley-graph-of-a-group-does-not-depend-on-the-generating-set — precheck: pass
- fs-the-word-metric-is-right-invariant — precheck: pass
- fs-a-quasi-isometry-is-continuous-or-bijective — precheck: pass
- fs-all-infinite-finitely-generated-groups-are-quasi-isometric — precheck: pass
- fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space — precheck: pass
- fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs — precheck: pass
- cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set — precheck: pass
- ex-the-quasi-isometry-group-of-a-metric-space-of-finite-diameter-is-trivial — precheck: pass
- ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals — precheck: pass

### Ledger

Dependency-list changes from the scaffold:
- lem-commutator-identities-in-a-group-of-class-two — deps changed from [def-commutator-and-commutator-subgroup, def-center-of-a-group, lem-center-is-normal, def-subgroup-commutator-and-lower-central-series, def-group-power, lem-group-power-laws, lem-group-inverse-laws] to [def-commutator-and-commutator-subgroup, def-center-of-a-group, def-group, def-subgroup-commutator-and-lower-central-series, def-group-power, lem-group-power-laws, lem-group-inverse-laws] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-power-of-a-product-in-a-group-of-class-two — deps changed from [lem-commutator-identities-in-a-group-of-class-two, def-commutator-and-commutator-subgroup, def-center-of-a-group, def-group-power, lem-group-power-laws, def-binomial-coefficient, lem-the-partial-alternating-sum-of-a-binomial-row] to [lem-commutator-identities-in-a-group-of-class-two, def-commutator-and-commutator-subgroup, def-center-of-a-group, def-group-power, lem-group-power-laws, def-binomial-coefficient, thm-pascals-rule] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p — deps changed from [lem-power-of-a-product-in-a-group-of-class-two, def-binomial-coefficient, def-prime, def-exponent-of-a-finite-group, def-order-in-a-group, def-center-of-a-group, def-commutator-and-commutator-subgroup] to [lem-power-of-a-product-in-a-group-of-class-two, def-binomial-coefficient, def-prime, def-exponent-of-a-finite-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, thm-binomial-closed-formula, def-factorial-and-falling-factorial, lem-group-power-laws] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-equivalent-characterisations-of-an-extraspecial-p-group — deps changed from [def-special-and-extraspecial-p-groups, def-elementary-abelian-p-group, thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, thm-quotient-abelian-iff-contains-commutator-subgroup, lem-center-is-normal, def-quotient-group, thm-lagrange, def-finite-p-group, def-frattini-subgroup-of-a-finite-group] to [def-special-and-extraspecial-p-groups, def-elementary-abelian-p-group, thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, thm-quotient-abelian-iff-contains-commutator-subgroup, lem-center-is-normal, def-quotient-group, thm-lagrange, def-finite-p-group, def-frattini-subgroup-of-a-finite-group, cor-prime-order-group-is-cyclic, def-commutator-and-commutator-subgroup, def-center-of-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-nilpotent-group-and-nilpotency-class, thm-upper-and-lower-central-characterizations-of-nilpotence, def-subgroup-commutator-and-lower-central-series, def-center-of-a-group, def-order-in-a-group] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-nilpotent-group-and-nilpotency-class, thm-upper-and-lower-central-characterizations-of-nilpotence, def-subgroup-commutator-and-lower-central-series, def-center-of-a-group, cor-prime-order-group-is-cyclic, def-special-and-extraspecial-p-groups] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-an-extraspecial-p-group-has-no-complement-to-its-centre — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-internal-semidirect-product, def-index, thm-lagrange, def-elementary-abelian-p-group, thm-first-isomorphism-theorem-groups] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-internal-semidirect-product, def-elementary-abelian-p-group, thm-first-isomorphism-theorem-groups, def-quotient-group, def-center-of-a-group, def-special-and-extraspecial-p-groups] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-conjugacy-class-and-centralizer, thm-conjugacy-class-cardinality, def-index, thm-lagrange, def-center-of-a-group, def-coset, def-finite-p-group] to [cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-conjugacy-class-and-centralizer, thm-conjugacy-class-cardinality, def-index, thm-lagrange, def-center-of-a-group, def-coset, def-finite-p-group, def-commutator-and-commutator-subgroup, def-special-and-extraspecial-p-groups] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-the-centralizer-of-a-noncentral-element-of-an-extraspecial-p-group-has-index-p — deps changed from [prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p, thm-conjugacy-class-cardinality, def-conjugacy-class-and-centralizer, def-index] to [prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p, thm-conjugacy-class-cardinality, def-conjugacy-class-and-centralizer, def-index, thm-lagrange, def-center-of-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup — deps changed from [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-center-of-a-group, lem-center-is-normal, def-normal-subgroup, def-subgroup, def-external-direct-product-of-groups, thm-first-isomorphism-theorem-groups] to [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-center-of-a-group, def-normal-subgroup, def-subgroup, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, lem-group-homomorphism-basic-properties, def-group-isomorphism-and-automorphism] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images — deps changed from [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, thm-first-isomorphism-theorem-groups, def-quotient-group, def-external-direct-product-of-groups, def-commutator-and-commutator-subgroup, def-generated-subgroup] to [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, def-quotient-group, def-external-direct-product-of-groups, def-generated-subgroup, def-kernel-and-image-of-group-homomorphism, def-group-isomorphism-and-automorphism, def-center-of-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-order-centre-and-derived-subgroup-of-a-central-product — deps changed from [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, prop-order-of-finite-direct-product, thm-lagrange, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-generated-subgroup, def-quotient-group] to [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, prop-order-of-finite-direct-product, thm-lagrange, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-generated-subgroup, def-quotient-group, def-external-direct-product-of-groups] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-universal-property-of-the-central-product — deps changed from [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, def-external-direct-product-of-groups, thm-coset-multiplication-well-defined-iff-normal, thm-first-isomorphism-theorem-groups, def-quotient-group] to [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, def-external-direct-product-of-groups, thm-coset-multiplication-well-defined-iff-normal, def-quotient-group, def-kernel-and-image-of-group-homomorphism, lem-group-homomorphism-basic-properties, def-center-of-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-recognition-of-an-internal-central-product — deps changed from [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, thm-universal-property-of-the-central-product, def-internal-central-product-of-a-family-of-subgroups, thm-first-isomorphism-theorem-groups, def-external-direct-product-of-groups, thm-internal-direct-product-recognition, def-generated-subgroup] to [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-internal-central-product-of-a-family-of-subgroups, thm-first-isomorphism-theorem-groups, def-external-direct-product-of-groups, def-generated-subgroup, def-kernel-and-image-of-group-homomorphism, def-center-of-a-group, def-subgroup-commutator-and-lower-central-series] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-a-central-product-of-extraspecial-p-groups-is-extraspecial — deps changed from [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, prop-order-centre-and-derived-subgroup-of-a-central-product, def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, def-elementary-abelian-p-group, def-frattini-subgroup-of-a-finite-group, def-external-direct-product-of-groups, def-quotient-group] to [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, prop-order-centre-and-derived-subgroup-of-a-central-product, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, thm-quotient-abelian-iff-contains-commutator-subgroup, def-elementary-abelian-p-group, def-finite-p-group, def-quotient-group, def-center-of-a-group, def-commutator-and-commutator-subgroup] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating — deps changed from [lem-commutator-identities-in-a-group-of-class-two, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-commutator-pairing-of-an-extraspecial-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, thm-z-mod-p-is-a-field, def-commutator-and-commutator-subgroup, def-group-power] to [lem-commutator-identities-in-a-group-of-class-two, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-commutator-pairing-of-an-extraspecial-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, thm-z-mod-p-is-a-field, def-commutator-and-commutator-subgroup, def-group-power, def-center-of-a-group, def-quotient-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, def-generated-subgroup, thm-lagrange, lem-cyclic-quotient-by-center-implies-abelian, def-quotient-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-fp-basis-of-an-elementary-abelian-p-group, def-center-of-a-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, def-generated-subgroup, thm-lagrange, lem-cyclic-quotient-by-center-implies-abelian, def-quotient-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-fp-basis-of-an-elementary-abelian-p-group, def-center-of-a-group, def-elementary-abelian-p-group, cor-prime-order-group-is-cyclic, lem-subgroups-of-finite-p-groups-are-p-groups, def-commutator-and-commutator-subgroup] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, def-centralizer-of-a-subgroup, thm-lagrange, def-index, lem-subgroups-of-finite-p-groups-are-p-groups, def-center-of-a-group, def-generated-subgroup] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, def-centralizer-of-a-subgroup, thm-lagrange, def-center-of-a-group, def-generated-subgroup, lem-centralizers-and-normalizers-are-subgroups, def-elementary-abelian-p-group, thm-first-isomorphism-theorem-groups, def-quotient-group, thm-z-mod-p-is-a-field] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number — deps changed from [prop-order-centre-and-derived-subgroup-of-a-central-product, def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, thm-lagrange, def-center-of-a-group] to [thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-lagrange, def-index, def-center-of-a-group, def-quotient-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, def-frattini-subgroup-of-a-finite-group] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, def-frattini-subgroup-of-a-finite-group, def-fp-basis-of-an-elementary-abelian-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-center-of-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-orthogonal-complement-counting-for-the-commutator-pairing — deps changed from [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, thm-first-isomorphism-theorem-groups, thm-lagrange, thm-product-rule] to [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, thm-first-isomorphism-theorem-groups, thm-lagrange, def-elementary-abelian-p-group, def-center-of-a-group, def-quotient-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, lem-orthogonal-complement-counting-for-the-commutator-pairing, def-center-of-a-group, thm-lagrange, def-quotient-group, thm-correspondence-theorem-groups, def-fp-basis-of-an-elementary-abelian-p-group] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, lem-orthogonal-complement-counting-for-the-commutator-pairing, def-center-of-a-group, thm-lagrange, def-quotient-group, thm-correspondence-theorem-groups, def-generated-subgroup] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups — deps changed from [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, lem-orthogonal-complement-counting-for-the-commutator-pairing, prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n, thm-correspondence-theorem-groups, thm-lagrange, def-generated-subgroup, def-center-of-a-group] to [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-orthogonal-complement-counting-for-the-commutator-pairing, prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, def-internal-central-product-of-a-family-of-subgroups, thm-correspondence-theorem-groups, thm-second-isomorphism-theorem-groups, thm-lagrange, def-generated-subgroup, def-center-of-a-group, def-subgroup-commutator-and-lower-central-series, cor-prime-order-group-is-cyclic, lem-centralizers-and-normalizers-are-subgroups, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-quotient-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed — deps changed from [def-heisenberg-group-of-order-p-cubed, def-group, thm-integers-modulo-n-basic-algebra, def-finite-cardinality, thm-product-rule] to [def-heisenberg-group-of-order-p-cubed, def-group, thm-integers-modulo-n-basic-algebra, def-finite-cardinality, thm-product-rule, thm-z-mod-p-is-a-field, def-group-power, def-order-in-a-group, def-generated-subgroup] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p — deps changed from [cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, def-exponent-of-a-finite-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-order-in-a-group] to [cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, def-exponent-of-a-finite-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-order-in-a-group, thm-quotient-abelian-iff-contains-commutator-subgroup, lem-cyclic-quotient-by-center-implies-abelian, thm-lagrange, def-elementary-abelian-p-group, def-generated-subgroup, def-finite-p-group, def-quotient-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared — deps changed from [thm-automorphisms-of-a-finite-cyclic-group, thm-integers-modulo-n-basic-algebra, thm-binomial-theorem, def-binomial-coefficient, def-order-in-a-group, thm-classification-of-cyclic-groups, def-prime] to [thm-automorphisms-of-a-finite-cyclic-group, thm-integers-modulo-n-basic-algebra, def-order-in-a-group, thm-classification-of-cyclic-groups, def-prime, def-group-isomorphism-and-automorphism, def-group-power] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p — deps changed from [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared, def-modular-group-of-order-p-cubed, prop-canonical-subgroups-of-an-external-semidirect-product, def-exponent-of-a-finite-group, def-order-in-a-group, prop-order-of-finite-direct-product, def-center-of-a-group, def-commutator-and-commutator-subgroup] to [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared, def-modular-group-of-order-p-cubed, prop-canonical-subgroups-of-an-external-semidirect-product, def-exponent-of-a-finite-group, def-order-in-a-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, thm-lagrange, lem-cyclic-quotient-by-center-implies-abelian, thm-quotient-abelian-iff-contains-commutator-subgroup, def-elementary-abelian-p-group, cor-dihedral-groups-as-semidirect-products, def-generated-subgroup, lem-group-power-laws, def-quotient-group, def-finite-p-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial — deps changed from [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-generalized-dihedral-group, cor-dihedral-groups-as-semidirect-products, def-quaternion-group-of-order-eight, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-order-in-a-group] to [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-generalized-dihedral-group, cor-dihedral-groups-as-semidirect-products, def-quaternion-group-of-order-eight, def-quaternions, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-order-in-a-group, thm-lagrange, lem-cyclic-quotient-by-center-implies-abelian, thm-quotient-abelian-iff-contains-commutator-subgroup, def-elementary-abelian-p-group, def-generated-subgroup, def-quotient-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-nontrivial-center-of-a-finite-p-group, lem-cyclic-quotient-by-center-implies-abelian, thm-lagrange, def-finite-p-group, def-center-of-a-group, def-quotient-group, def-elementary-abelian-p-group, thm-cyclic-decomposition-of-finite-abelian-p-groups] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-nontrivial-center-of-a-finite-p-group, lem-cyclic-quotient-by-center-implies-abelian, thm-lagrange, def-finite-p-group, def-center-of-a-group, def-quotient-group, def-elementary-abelian-p-group, cor-groups-of-order-p-squared-are-abelian, lem-subgroups-of-finite-p-groups-are-p-groups] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-classification-of-the-nonabelian-groups-of-order-p-cubed — deps changed from [cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared, def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial, def-exponent-of-a-finite-group, thm-internal-external-semidirect-product-equivalence, thm-classification-of-cyclic-groups, thm-lagrange, thm-index-p-subgroup-existence-in-finite-p-groups, def-quaternion-group-of-order-eight, cor-dihedral-groups-as-semidirect-products, def-generated-subgroup, def-order-in-a-group] to [cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial, prop-equivalent-characterisations-of-an-extraspecial-p-group, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, lem-commutator-identities-in-a-group-of-class-two, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, def-exponent-of-a-finite-group, thm-internal-external-semidirect-product-equivalence, thm-classification-of-cyclic-groups, thm-lagrange, lem-group-power-laws, def-quaternion-group-of-order-eight, def-quaternions, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, cor-dihedral-groups-as-semidirect-products, def-generated-subgroup, def-order-in-a-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-quotient-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups — deps changed from [def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, def-quaternion-group-of-order-eight, def-generalized-dihedral-group, def-generated-subgroup, def-order-in-a-group] to [def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, def-quaternion-group-of-order-eight, def-quaternions, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, cor-dihedral-groups-as-semidirect-products, thm-internal-external-semidirect-product-equivalence, thm-lagrange, def-generated-subgroup, def-order-in-a-group, def-center-of-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups — deps changed from [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, prop-order-centre-and-derived-subgroup-of-a-central-product, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, def-finite-cardinality, thm-product-rule, def-order-in-a-group, def-center-of-a-group] to [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-elementary-abelian-p-group, def-external-direct-product-of-groups, def-quotient-group, def-center-of-a-group, def-finite-cardinality, thm-lagrange, def-order-in-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-classification-of-extraspecial-two-groups — deps changed from [thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups, lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups, def-finite-cardinality, def-order-in-a-group] to [thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups, lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups, thm-recognition-of-an-internal-central-product, def-internal-central-product-of-a-family-of-subgroups, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-special-and-extraspecial-p-groups, def-center-of-a-group, def-generated-subgroup, thm-lagrange, def-order-in-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p — deps changed from [cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, def-generated-subgroup, def-exponent-of-a-finite-group, def-centralizer-of-a-subgroup, def-order-in-a-group] to [def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, def-heisenberg-group-of-order-p-cubed, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, lem-commutator-identities-in-a-group-of-class-two, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, def-centralizer-of-a-subgroup, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, thm-recognition-of-an-internal-central-product, lem-group-power-laws, def-exponent-of-a-finite-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-generated-subgroup, def-order-in-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- thm-classification-of-extraspecial-p-groups-for-odd-p — deps changed from [cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p, def-exponent-of-a-finite-group, def-order-in-a-group] to [thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p, cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, thm-recognition-of-an-internal-central-product, def-internal-central-product-of-a-family-of-subgroups, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, def-exponent-of-a-finite-group, def-center-of-a-group, def-generated-subgroup, thm-lagrange, def-order-in-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- cor-the-exponent-of-an-extraspecial-p-group — deps changed from [prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-classification-of-extraspecial-two-groups, thm-classification-of-extraspecial-p-groups-for-odd-p, def-plus-and-minus-type-of-an-extraspecial-p-group, def-exponent-of-a-finite-group, def-order-in-a-group] to [prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, thm-classification-of-extraspecial-two-groups, thm-classification-of-extraspecial-p-groups-for-odd-p, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, def-plus-and-minus-type-of-an-extraspecial-p-group, def-exponent-of-a-finite-group, def-order-in-a-group] to match the authored definition/statement and the exact fact links carried by the final prose.
- prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner — deps changed from [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank, def-group-isomorphism-and-automorphism, def-inner-automorphism-group, cor-group-mod-center-is-inner-automorphism-group, thm-automorphisms-act-linearly-on-the-frattini-quotient, thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, def-finite-cardinality, def-frattini-subgroup-of-a-finite-group] to [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank, def-group-isomorphism-and-automorphism, def-inner-automorphism-group, cor-group-mod-center-is-inner-automorphism-group, thm-automorphisms-act-linearly-on-the-frattini-quotient, thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, def-finite-cardinality, def-frattini-subgroup-of-a-finite-group, thm-product-rule, def-center-of-a-group, def-commutator-and-commutator-subgroup] to match the authored definition/statement and the exact fact links carried by the final prose.

Provenance by component and source/edit history:
- literature-derived / ai-altered — lem-commutator-identities-in-a-group-of-class-two, lem-power-of-a-product-in-a-group-of-class-two, cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p, cor-the-centralizer-of-a-noncentral-element-of-an-extraspecial-p-group-has-index-p, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n, cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups, thm-classification-of-extraspecial-p-groups-for-odd-p, cor-the-exponent-of-an-extraspecial-p-group, prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner, prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing, prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups, lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints, thm-the-path-metric-of-a-connected-simple-graph-is-a-metric, lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism, lem-the-graph-notions-agree-with-the-published-finite-graph-theory, lem-balls-in-a-connected-locally-finite-graph-are-finite, thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path, lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group, prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite, thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph, thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem, lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph, lem-word-length-is-well-defined-and-satisfies-the-length-laws, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite, prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity, prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree, cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length, thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis, lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition, lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings, lem-a-map-at-bounded-distance-from-a-quasi-isometric-embedding-is-a-quasi-isometric-embedding, thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse, cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings, thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces, prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups, prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy, thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets, prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space, prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included, prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry, prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one, cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space, prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic, prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz, cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence, prop-finiteness-is-a-geometric-property-of-finitely-generated-groups. The stated result was kept source-backed, but the local proof text was rewritten into the library’s phase-proof format and dependency spine.
- ai-altered / ai-altered — cor-an-extraspecial-p-group-has-no-complement-to-its-centre, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, prop-order-centre-and-derived-subgroup-of-a-central-product, thm-universal-property-of-the-central-product, thm-recognition-of-an-internal-central-product, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank, lem-orthogonal-complement-counting-for-the-commutator-pairing, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups, thm-classification-of-extraspecial-two-groups, lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p, lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing, ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight, ex-the-heisenberg-group-of-order-twenty-seven, ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight, ex-the-modular-group-of-order-twenty-seven, ex-the-two-extraspecial-groups-of-order-thirty-two, ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two, ex-a-central-product-of-two-cyclic-groups-of-order-four, ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight, cex-a-special-p-group-that-is-not-extraspecial, cex-the-central-product-decomposition-of-an-extraspecial-group-is-not-unique, fs-every-special-p-group-is-extraspecial, fs-there-is-exactly-one-extraspecial-group-of-each-admissible-order, fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism, fs-the-commutator-pairing-needs-no-choice-of-a-central-generator, fs-an-extraspecial-p-group-has-a-complement-to-its-centre, fs-a-group-of-order-p-to-an-even-power-can-be-extraspecial, ex-the-cayley-graph-and-word-metric-of-the-integers, ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics, ex-the-cayley-graph-of-a-free-abelian-group-of-finite-rank, ex-the-cayley-tree-of-a-free-group-of-rank-two, ex-two-generating-sets-of-a-dihedral-group, ex-the-integers-are-quasi-isometric-to-the-real-line, ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it, ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers, cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics, cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective, fs-the-cayley-graph-of-a-group-does-not-depend-on-the-generating-set, fs-the-word-metric-is-right-invariant, fs-a-quasi-isometry-is-continuous-or-bijective, fs-all-infinite-finitely-generated-groups-are-quasi-isometric, fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space, fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs, cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set, ex-the-quasi-isometry-group-of-a-metric-space-of-finite-diameter-is-trivial, ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals. The witness, counterexample, example wording, or false-statement refutation was adapted to the library’s notation and then verified locally from named source-backed items.

- No scaffold item was dropped after authoring. No title was narrowed. The only substantive authoring route changes were the step-3-approved in-group pairing route, the square-map insertion, and the Cayley graph finite/infinite graph dictionary already recorded earlier in these notes and carried through exactly.

### Escalations

- No batch-local mathematical blocker remains.
- The four page files were written under `library/group-theory/` because `research/plan-spec.json` records `category: group-theory` for all four pages. This is draft-only authoring; publish-time category plumbing (`_category.md` / `_pathway.md`) was not attempted in step 5.
- Repo-wide `depcheck` and `fwdcheck` still fail on inherited items outside this batch. After the batch-local YAML title fix, neither tool reports a batch-2-specific failure line.

### Gates

- `node tools/tsx-run.mjs tools/reflow.mts` on all batch A items and all batch B items — pass.
- `node tools/tsx-run.mjs tools/precheck.mts` on all batch A items and all batch B items — pass.
- `node tools/proof-contract.mjs research/frontier-18-batch-2.proof-contracts.json --strict` — pass after regenerating citations/derivations from final text and re-anchoring boundary evidence.
- `node tools/citation-fidelity.mjs research/frontier-18-batch-2.proof-contracts.json --fail-on-missing-quote` — pass; no missing quote and no widening candidate.
- `node tools/coverage-checklist.mjs research/frontier-18-batch-2.coverage.json --require-destination` — pass.
- `node tools/content-policy.mjs research/frontier-18-batch-2.pages.json` — pass.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass.
- `node tools/extcheck.mjs` — pass (repo-wide warnings only on inherited recorded-not-proved items).
- `node tools/citecheck.mjs` — pass with one batch-local heuristic warning on `lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition` about the word "reflexivity"; no hard failure.

### Honest confidence

- The batch is mechanically much stronger now than at scaffold time: every scoped item exists, both A and B clusters precheck cleanly, and the proof-contract/citation-fidelity gates match the final prose on disk.
- I did not clear the repo-wide inherited `depcheck` / `fwdcheck` failures outside this batch.
- The highest remaining content risk is not format but depth: several generated proofs and examples are concise skeletonised writeups derived from the approved proof contract rather than line-by-line hand-composed expositions, so step 6 should read the classification items, the quasi-isometry equivalence theorem, and the large B-page witness set with that in mind.
