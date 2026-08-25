# frontier-18 — group Alpha `d`, step-3 scaffold breadth and depth review

Batches **2** (`extraspecial-p-groups-and-central-products`,
`cayley-graphs-word-metrics-and-quasi-isometry`) and **9**
(`ends-coends-and-weighted-limits`). Three A/B pairs, 202 scoped items after
the repairs below.

Read for each pair, together: `research/frontier-18-batch-<i>.pages.json`,
`.notes.md`, `.coverage.json`, the governing design section
(`plan-group-theory-track.md` §GT-2 lines 571–680 and §GT-10 lines 1449–1552;
`plan-category-theory-track.md` §MA-5 lines 1438–1560), the Beta task files,
`research/plan-spec.json`, `research/frontier-18-alpha-step0-drift.md` and every
published item the scaffolds cite. The two design line numbers each Beta task
names are, in every case, the section header and the section's own `fs-`/B-page
block — one design section per pair, no later amendment document.

**Verdicts: all three pairs `sufficient`.** Two of them are sufficient *after*
repairs I made under the 2026-08-16 step-3 licence, listed as B2-1, B9-1 and
B9-2 below; nothing is routed to a Beta at `3-fix`. No permission was requested
at any point.

## Severity table

| id | pair | class | severity | disposition |
|---|---|---|---|---|
| B2-1 | extraspecial | route does not close; Statement over-precise for its route | **fatal-class** | **repaired by me** — two intermediate lemmas added, strategy rewritten |
| B2-2 | extraspecial | design items 13–15 dropped (quadratic form, polar form, Arf) | high | **partly overturned** — 13–14 restored by B2-1; only the Arf invariant stays declined |
| B2-12 | cayley | manifest/spec `requires` disagreement, live splice refusal | high | **repaired by me** — splice now clean |
| B2-11 | cayley | A page at exactly 60/60, split proposed by Beta | high | **split declined**, with the verified cut recorded and escalated to the owner |
| B9-1 | ends/coends | item delivers one clause where two harvest rows name it | high | **repaired by me** — dual clause added to title and strategy |
| B9-2 | ends/coends | ends half has an existence corollary, weighted half has none | medium | **repaired by me** — corollary added |
| B2-3 | extraspecial | commutator pairing built group-theoretically, not from order 92 | medium | accepted; constants verified |
| B2-4 | extraspecial | ten dependencies were frontier-17 drafts | medium | **resolved on disk** — all published 2026-08-24 |
| B2-14 | cayley | design calls the word-metric space *geodesic* | medium | **design defect; scaffold is right** |
| B2-8 | extraspecial | Craven Thm 3.16 declined to `owner-decision` | medium | accepted; no planned page owns it |
| B2-9 | extraspecial | plus/minus type defined for all $p$, against the design | low | accepted; source-backed, with a recording requirement |
| B9-3 | ends/coends | Loregian Ex. 1.13 forward half sent to `owner-decision` | low | accepted; home named for step 9 |
| B9-4 | ends/coends | design's B-page `cex-` dropped | low | drop approved |
| B9-5 | ends/coends | Mac Lane (non-open) replaced by Richter | low | approved |
| B2-5, B2-6, B2-7, B2-13, B2-15, B9-6 | both | Beta findings 4/5/7/10/11 and F3–F8 | low | accepted, one rationale corrected |
| D-1 | — | `SCHEMA.md` §6 still states a 100-item ceiling | doc bug | reported, not mine to fix here |

---

## Batch 2 · `extraspecial-p-groups-and-central-products` — VERDICT: sufficient

46 authored A items against the design's 20 + 4 `fs-`, and 16 B items against 7.
Every design item is present or has a written disposition. The scaffold is
richer than its design and its strategies are unusually concrete; the one place
it does not close is B2-1.

### B2-1 — `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`: the route does not close, and the Statement is finer than the route. **Repaired.**

The Statement is van Beek Proposition 2.39(ii), harvested and `included`: the
maximal elementary abelian subgroups of $2^{1+2n}_{+}$ have order $2^{n+1}$ and
those of $2^{1+2n}_{-}$ have order $2^{n}$. It is true. The planned route was:

> "In the all-dihedral group the product of one Klein four-subgroup from each
> factor is elementary abelian of order $2^{n+1}$; a larger one would meet the
> product of the first $n-1$ factors in an elementary abelian subgroup of order
> $2^{n}$ whose centraliser is too small to contain the last factor. In the group
> with one quaternion factor, the Dedekind modular law splits a hypothetical
> elementary abelian subgroup of order $2^{n+1}$ across that factor and produces
> a Klein four-subgroup of $Q_8$, which does not exist."

Three defects, in increasing order of seriousness.

1. The plus-type upper bound is already free and the route does not use it. An
   elementary abelian subgroup is abelian, and
   `prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n`
   — item 26, already a declared dependency — bounds every abelian subgroup by
   $2^{n+1}$. The "centraliser is too small" clause is an unlicensed inference
   standing where a one-line citation belongs.
2. The minus-type argument does not close as written. The obstruction is not
   that $Q_8$ has no Klein four-subgroup on its own; splitting an elementary
   abelian $E$ of order $2^{n+1}$ "across the factor" by the Dedekind law gives
   $E\cap D$ inside the dihedral part and a quotient inside $Q_8/Z$, and the
   counting that would force a Klein four-subgroup of $Q_8$ needs the
   orthogonality bookkeeping the strategy never performs. I could not close it
   from what is written.
3. **"Maximal" is ambiguous and only the weaker reading is delivered.** The
   route exhibits one subgroup of order $2^{n+1}$ and bounds above, which gives
   the *maximum* order. van Beek's statement is about every subgroup maximal
   under inclusion, and that is strictly stronger: it also says no maximal
   elementary abelian subgroup is *smaller*. Nothing in the route reaches it.
   Left alone this is a title asserting more than its proof gives, which the
   judges read as a Statement and cannot see as a title.

**What the route needed, and what I inserted.** The missing machinery is exactly
the design's dropped items 13–14 — the square map and its polar-form identity —
and it is two lines from item 2, which is already on the page. Inserted after
`cor-the-exponent-of-an-extraspecial-p-group`:

- `def-square-map-of-an-extraspecial-two-group` — for $P$ extraspecial of order
  $2^{1+2n}$ with $Z(P)=\langle z\rangle$, $q(\bar x)\in\mathbb F_2$ defined by
  $x^2=z^{q(\bar x)}$.
- `lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing` —
  $x^2\in Z(P)$ because $P/Z(P)$ is elementary abelian, and $(xz)^2=x^2z^2=x^2$
  because $z^2=1$, so $q$ descends to the central quotient; the class-two power
  formula `lem-power-of-a-product-in-a-group-of-class-two` at $n=2$ gives
  $(xy)^2=[y,x]x^2y^2$, and over $\mathbb F_2$ an alternating pairing is
  symmetric, so
  $q(\bar x\bar y)=q(\bar x)+q(\bar y)+b(\bar x,\bar y)$.
  The lemma also records the two facts the count spends: a subgroup of the
  central quotient on which $q$ vanishes has elementary abelian preimage of
  twice its order, and a maximal elementary abelian subgroup always contains
  $Z(P)$ (otherwise it is properly contained in what it generates with $Z(P)$).

**The rewritten route**, which I verified end to end before writing it. Let $E$
be maximal elementary abelian, so $Z(P)\le E$, $|E|=2^{k+1}$, and $q$ vanishes on
$\bar E$ of order $2^{k}$. Maximality says no $\bar v\notin\bar E$ orthogonal to
$\bar E$ has $q(\bar v)=0$, since $q(\bar e\bar v)=q(\bar e)+q(\bar v)+b(\bar e,\bar v)$
would then vanish on $\bar E\langle\bar v\rangle$. Count the classes with $q=0$
coset by coset of $\bar E$:

- on $\bar E$: $2^{k}$;
- on a coset inside $\bar E^{\perp}$: $b(\cdot,\bar v)$ vanishes on $\bar E$, so
  $q$ is constantly $1$ there — none;
- on a coset outside $\bar E^{\perp}$: $\bar u\mapsto b(\bar u,\bar v)$ is a
  nonzero linear functional on $\bar E$, so exactly half — $2^{k-1}$.

`lem-orthogonal-complement-counting-for-the-commutator-pairing` gives
$|\bar E^{\perp}|=2^{2n-k}$, so the total is
$2^{k}+(2^{2n-k}-2^{2n-2k})2^{k-1}=2^{2n-1}+2^{k}-2^{2n-k-1}$ classes, hence
twice that many elements with $x^2=1$. `thm-classification-of-extraspecial-two-groups`
already counts those elements as $2^{2n}+2^{n}$ (plus) and $2^{2n}-2^{n}$
(minus), so $2^{k}-2^{2n-k-1}=\pm2^{n-1}$. The left side is strictly increasing
in $k$, so the solution is unique: $k=n$ in the plus case, $k=n-1$ in the minus
case. Both are attained. That proves van Beek's exact statement — *every*
maximal elementary abelian subgroup, not a largest one — with no quadratic-form
theory beyond the two inserted items, no Witt index and no appeal to order 92.

Item 46's `deps` were rewritten accordingly: the two new items, item 25's
counting lemma, item 26, item 39's count, and the nondegeneracy lemma. The A
page is now **48** items.

### B2-2 — the Arf-invariant decline (Beta Finding 3): partly overturned.

Beta declined design items 13, 14 and 15 together on the ground that
"quadratic forms over $\mathbb F_2$ and the Arf invariant are not in the library
at any order". Split that into two claims.

**The Arf invariant itself: decline upheld.** I checked both harvests: 36 Craven
rows and 32 van Beek rows, and neither source contains an Arf row at all —
Craven separates the two 2-group types at Theorem 3.14(ii) and van Beek at
Proposition 2.39, neither through Arf. So the design's
`thm-central-product-type-agrees-with-the-arf-invariant` was never
source-backed, and building $\mathbb F_2$-quadratic-form theory with its Witt
decomposition below order 71.003 would duplicate
`dual-spaces-bilinear-forms-and-inertia` at order 92. Declining it is correct
and is not the forbidden "dropping a result for want of a lemma I could have
written".

**Design items 13–14: decline overturned, and restored as B2-1.** The square map
and the identity $q(\bar x\bar y)=q(\bar x)+q(\bar y)+b(\bar x,\bar y)$ are not
part of that linear-algebra block. They are two lines from
`lem-power-of-a-product-in-a-group-of-class-two`, which the page already proves,
and the page needed them: item 46 is a quadratic-form theorem in disguise and
its route did not close without them. This is the exact case the
self-contained-scope rule names, and the cost was two scaffold items.

Beta's positive replacement stands and is good: the general counting formula
$t(P_1\circ P_2)=(t_1t_2+(|P_1|-t_1)(|P_2|-t_2))/2$ separates the types at every
order rather than at $n=2$ as Craven does. I checked it on the two cases the B
page uses — $t(\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4))=(36+4)/2=20$
and $t(\operatorname{Dih}(C_4)\circ Q_8)=(12+12)/2=12$ — and the induction to
$2^{2n}\pm2^{n}$.

### B2-3 — building the pairing inside the group (Beta Finding 1): approved, constants verified.

The design routes the classification through
`thm-alternating-forms-have-a-symplectic-normal-form` on a page at order 92,
forward of this one; the step-0 drift review already declined that edge, and no
vector-space theory at all exists below 71.003. Beta's replacement is the
Gorenstein/Aschbacher induction inside the group, and it is the one place on the
page where a wrong constant would be invisible, so I checked it.

In `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed`,
with $b(\bar x,\bar y)=1$, $c=b(\bar g,\bar x)$, $a=b(\bar g,\bar y)$ and
$u=x^{a}y^{-c}$: $b(\bar u,\bar x)=a\,b(\bar x,\bar x)-c\,b(\bar y,\bar x)=c$ and
$b(\bar u,\bar y)=a\,b(\bar x,\bar y)-c\,b(\bar y,\bar y)=a$, so $gu^{-1}$ is
orthogonal to both and centralises $P_1$. The recursion is sound: $Z(C_P(P_1))=Z(P)$
because an element centralising both $P_1$ and $C_P(P_1)$ centralises
$P=P_1C_P(P_1)$, and $\Phi(C_P(P_1))\le C'C^{p}\le Z(P)$ because $P/Z(P)$ is
elementary abelian, so $C_P(P_1)$ is central or extraspecial.

`lem-orthogonal-complement-counting-for-the-commutator-pairing` is the seam Beta
asked me to record. Its strategy is correct — nondegeneracy makes
$\bar u\mapsto(b(\bar u,\bar e_i))_i$ bijective, and the first $k$ coordinates
give a surjection with kernel the orthogonal complement — and it is stated about
this pairing, not as a general linear-algebra fact. Carry the seam to step 6
anyway: it is the item most likely to drift into a rank–nullity phrasing while
being written.

### B2-4 — the frontier-17 draft dependencies (Beta Finding 2): resolved on disk, no action.

Beta recorded ten load-bearing dependencies on
`frattini-subgroups-and-the-burnside-basis-theorem`, `status: draft` when the
notes were written at 06:15, and asked that the publication-order constraint be
recorded. It is already satisfied: that page, its examples companion and all ten
items are `status: published` on disk with `audited: 2026-08-24`.

I checked every external dependency of both batches — 115 in batch 2 and 59 in batch 9:
every one is `status: published`, none carries `provenance.statement:
ai-generated`, and none is legacy-unclassified — every one has component
provenance. The provenance-order rule is satisfied with nothing to adjudicate.

### B2-5 — naming and the existence half (Beta Findings 4 and 5): approved.

`cor-dihedral-groups-as-semidirect-products` on disk does say "This group is
written $D_n$ here and called the dihedral group of order $2n$", so the library's
$D_4$ has order eight and every design id containing `d-eight` would have named a
group of order sixteen. `\operatorname{Dih}(C_4)` is right.

Finding 5 is the sharper one and I agree with it. The design asserts "exactly
two" at items 16 and 18 while constructing no group of order $p^3$ on the A page
at all; the Heisenberg and order-eight groups sat on the B page, and a B page is
a leaf that may not be a dependency target. Without Beta's four added
constructions the two classification theorems would have claimed "exactly two"
and proved "at most two". Checked: `prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed`
handles $p=2$ correctly (the third coordinate separates the two products for
every prime), and `prop-the-heisenberg-group-...-has-exponent-p-for-odd-p`
correctly records that $(1,1,0)$ has order four at $p=2$.

### B2-8 — Craven Theorem 3.16 declined to `owner-decision` (Beta Finding 9): approved.

P. Hall's recognition theorem needs the Hall–Witt identity, the Three Subgroup
Lemma, $[\gamma_i,\gamma_j]\le\gamma_{i+j}$, the $\Omega_1$/$\mho_1$ subgroups and
a $p$-rank argument — five or six items whose only consumer on this page is that
one theorem. This is not "want of a lemma I could have written": it is the local
structure theory of finite $p$-groups, a subject area the library has not
reached, which is a permitted `deferred` ground. I confirmed there is nowhere to
send it — `plan-group-theory-track.md` line 3033 defers Craven Ch. 4 to "an
advanced finite-$p$ local-structure pair" and no such page exists in
`plan-spec.json` — so `owner-decision` is the honest destination. Craven's own
write-up leaves two steps as assertions, so a local proof would be a
reconstruction; that raises the truth risk but is not by itself the reason.
**Carry to the lead Alpha for step 9 and the step-10 owner report.**

### B2-9 — plus/minus type for every $p$: accepted, with a recording requirement.

The design decides that plus/minus be "reserved here for $2$-groups" and asks for
`def-exponent-type-of-an-extraspecial-odd-p-group` plus
`fs-plus-and-minus-type-is-the-standard-odd-prime-convention`. The scaffold
instead has `def-plus-and-minus-type-of-an-extraspecial-p-group` for every $p$.
The scaffold is right and the design is not: van Beek Definition 2.38, harvested
and dispositioned `included` against exactly this item, defines
$p^{1+2n}_{\pm}$ for every prime, and Craven Definition 3.3 writes $p^{1+2}_{+}$
for the odd exponent-$p$ group. The convention the design calls misleading is the
standard one. **Requirement for step 5:** the item's Remark records both source
notations and states which is in force here, exactly as Beta undertook to do for
$\operatorname{Dih}(C_4)$.

Beta's Finding 11 replacement of the terminological `fs-` is a separate and
correct call: a claim about naming is not a refutable proposition, and
`fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism`
— refuted by $\operatorname{Dih}(C_4)$ and $Q_8$ — is the mathematically
substantive version of the same warning.

### B2-10 — two harvest rows under-mapped: step-6 note, not a defect.

van Beek Proposition 2.32(i) covers both $p^{1+2}_{\pm}$ but names only the
modular item; Theorem 2.42 covers both classifications but names only
`thm-classification-of-extraspecial-two-groups`. The coverage schema allows one
item per row, both partners are on the page, and `coverage-checklist
--require-destination` passes with 0 errors on 331 harvested results. Recorded so
the step-6 faithfulness read does not re-derive it.

### Harvest faithfulness

Two independent full lecture-note sets, both with harvestable tables of
contents, no encyclopedia entry anywhere: Craven, *The Theory of p-Groups*
(ch. 2 pp. 5–13 and ch. 3 pp. 19–27 in full, 36 rows) and van Beek, *Topics in
Finite $p$-groups* (§2.4 pp. 29–35 in full plus the opening of §3.1, 32 rows).
The design's Gorenstein *Finite Groups* §5.5 and Winter's 1972 paper are absent;
Gorenstein is not openly available and van Beek is a legitimate independent
replacement carrying the same material, and Winter's content survives as items
44–45. I read the enumerated headings against Craven's and van Beek's actual
section structure over the stated ranges and they track it: the numbering is
continuous, the ranges are what the locators claim, and every decline names the
specific result rather than the range. Nothing standard for an extraspecial
chapter appears in neither source's contents.

### Size

48 items after B2-1, twelve under the ceiling. No split.

---

## Batch 2 · `cayley-graphs-word-metrics-and-quasi-isometry` — VERDICT: sufficient

60 A items against the design's 23 + 5 `fs-`, and 19 B items against 7. All 23
design items are present; the extra 37 are Finding 7's native graph theory
(eleven items) and results Beta declined to prune from Löh and Druţu–Kapovich.

### B2-12 — the manifest/spec `requires` disagreement: **repaired**, splice refusal cleared.

`node tools/splice-plan.mjs --run frontier-18 --batch 2 --dry-run` was refusing:

```
splice-plan: batch 2 WITHHELD — 1 requires edge(s) await adjudication
  cayley-graphs-word-metrics-and-quasi-isometry-examples: semidirect-products-and-automorphism-groups
```

Beta Finding 6 routed this adjudication here by design. The situation is that
the step-0 drift review ran **after** the Betas on this run and added
`graphs-walks-and-connectivity` (207), `trees-forests-and-spanning-trees` (209)
and `semidirect-products-and-automorphism-groups` (68) to the A page in
`plan-spec.json`, while the manifest, written at 06:04, still carried Beta's own
two-edge A declaration and put the semidirect edge on the B page.

Adjudicated: the edge is real — `ex-two-generating-sets-of-a-dihedral-group` and
`ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers` cite
`cor-dihedral-groups-as-semidirect-products` and `def-generalized-dihedral-group`
— it is backward (68 against 302.001), and a B page inherits its A page's
closure, so declaring it on the B page as well is redundant. I aligned the
manifest to the spec: the A page now declares the spec's four edges, the B page
declares only its A page. Verified: `splice-plan --batch 2 --dry-run` now reports
`4 page(s) spliced, 143 item(s)`, and `validate-plan` on a spliced copy outside
the repo returns no error on any of my pages.

One spec-side advisory remains and I left it: `graphs-walks-and-connectivity` is
reachable through `trees-forests-and-spanning-trees`, so the drift review's
direct edge produces `[redundant-prereq]`. It is one of 340 such advisories in
the current spec, it is not an error, and undoing a recorded drift verdict to
silence a warning is not worth the churn. Beta's own reasoning on this point was
correct.

### B2-11 — the page stands at exactly 60/60: **split declined**, cut verified, escalated.

Beta Finding 8 proposes splitting at Löh's chapter boundary into
`cayley-graphs-and-word-metrics` (items 1–30) and
`quasi-isometry-of-metric-spaces-and-groups` (items 31–60), and recommends the
split. I verified the cut mechanically: **no item among the first thirty cites
any item among the last thirty**, and 25 dependency edges run the other way. The
cut is clean and Beta's reading of it is right.

I decline it, and none of the reasons is a preference.

1. **The ceiling is not breached.** `validate-plan`'s `size` rule errors *above*
   60 and this page has 60. Two pages already in `plan-spec.json` sit at exactly
   60 — `algebraic-closure-embeddings-and-separability` and
   `categories-functors-and-natural-transformations` — so the state is
   precedented, not novel.
2. **The split is not executable on this run.** It would put three A/B pairs in
   batch 2, and `content-policy.mjs --manifest-only` errors `batch-a-pair-cap` at
   `BATCH_A_PAIR_CAP = 2`; that gate runs at ~~`3-review`, `3-fix`, `3-recheck`,
   `4-splice` and `5-author`~~ — **CORRECTED at `recheck-d`: `1-scaffold`,
   `3-fix`, `5-author` and `6c-cross`, which is where
   `stages/mathlib.mts` wires `policyGates` and `policyItemGate`, both of which
   pass the manifests, so the cap fires in both modes. Three of my five entries
   were wrong; the decision is unchanged and better supported, since `3-fix` has
   just run. `research/frontier-18-alpha-d-recheck.md` §B2-11 carries the
   evidence.** Moving a pair to a new batch needs a manifest, a
   coverage harvest, notes, contracts, a Beta task file and a group-Alpha
   reassignment, none of which any stage generates mid-run. And retiring the id
   `cayley-graphs-word-metrics-and-quasi-isometry` in favour of two new ids trips
   `manifest-integrity` as SCOPE LOSS against
   `research/frontier-18-scope-ledger.json`, whose only remedy is a
   `--write-ledger --force` re-baseline — the deliberate, on-the-record act the
   tool exists to prevent. Executing the split would trade a warning-free page
   for two red gates.
3. **The risk it avoids does not materialise as Beta describes it.** `planGate()`
   — and with it the `size` rule — runs at `1-drift` (**corrected at `recheck-d`
   from `2-assign`**), `1-scaffold`, `3-review`,
   `3-fix`, `3-recheck`, `4-splice` and `5-author`, and at no stage after step 5.
   Re-verified from `stages/mathlib.mts` at `recheck-d`: that list is otherwise
   exact, so the constraint below binds as written.
   A step-6 repair that adds an A item is not caught by any gate on this run.
   That is not a licence to add one: 61 items would violate the owner's rule
   whether or not a gate sees it.

**The binding constraint I record instead.** No A item may be added to this page
after step 4. A step-6 repair that wants an intermediate lemma inlines it into
the proof that needs it — which `CLAUDE.md` explicitly permits for a would-be
decomposition lemma — or routes an example to the B page, which has nineteen
items and no ceiling pressure. If a step-6 defect genuinely cannot be closed
without a new A item, that is a blocker for the owner, not a silent 61st item.
I added no A items to this page, and B2-1's two additions are on the other pair.

**For the owner.** The split is the right shape and it is cheap *between* runs
and expensive *inside* one. All four consumers of this page —
`geometric-actions-svarc-milnor-and-growth`,
`hyperbolic-spaces-and-hyperbolic-groups`, `amenable-groups-and-folner-criteria`
and `simplicial-trees-and-group-actions` — are planned with empty item lists, so
repointing them today is four spec lines and no rewrite. Recommended for
`frontier-19` planning, at the verified cut above, with new orders in
(302.0005, 302.001).

### B2-13 — native graph theory for infinite graphs (Beta Finding 7): approved.

The published graph theory is finite-only — `def-finite-simple-graph` says "$V$
is a finite set", `def-graph-distance-and-girth` justifies its minimum by
finiteness, and `def-tree-forest-and-leaf` and `thm-tree-characterisations` are
stated for finite graphs — and a Cayley graph of an infinite group is infinite.
Building the notions natively and recording the dictionary in
`lem-the-graph-notions-agree-with-the-published-finite-graph-theory` and
`lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph`
is the right answer, and it is what makes
`thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree`
and its converse buildable at all. The two agreement items are the only place the
published items are cited, which is the discipline that keeps this from being a
second notion of "graph".

Beta's amendment owed to §GT-14 `simplicial-trees-and-group-actions` — cite
`def-cycles-trees-and-forests-in-a-simple-graph` and
`thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path`,
do not re-mint them — is correct and I endorse it. **Carry to the lead Alpha:
it is a prose-scaffold amendment for step 4, not a batch edit.**

### B2-14 — the design calls the word-metric space geodesic; it is not. Scaffold is right.

Design item 10 asks for
`prop-finite-generating-sets-give-proper-locally-finite-geodesic-cayley-graphs`.
The vertex set of a Cayley graph with the word metric is a discrete space and is
not a geodesic metric space — there are no intermediate points. The scaffold
does not carry the claim: it has
`prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one`
with `cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space`,
and it refutes the design's wording outright at
`fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space`.
A design defect caught and corrected by the scaffold; I checked that nothing
downstream inherits it, since §GT-11's Švarc–Milnor statement puts "proper
geodesic" on the ambient space, which is correct.

### B2-15 — one design `fs-` absent: accepted.

`fs-word-metrics-from-finite-generating-sets-are-literally-equal` has no
counterpart. Its content is carried concretely by
`ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics`,
which exhibits the failure at the element $1$, and Beta added two `fs-` items the
design did not name (`fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space`,
`fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs`). Net richer;
accepted.

### Routes spot-checked

Choice scope is handled with unusual care and I checked it rather than assuming.
`thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`
names the selection as a use of choice and records the choice-free shortlex
route for a group with a fixed finite generating set;
`thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces` correctly points
at that selection as the cost of symmetry rather than hiding it; and
`thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets`
flags the extension's selection in the same place. I checked the separated-net
theorem's constants: taking the separation to exceed $\lambda c$ makes the
restricted map bilipschitz in both directions and its image separated, which is
what the strategy claims.

`thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis`
is Löh 3.3.3 and its hypothesis discharge is right: length one in the kernel is
excluded because $s=e$ would give $s\cdot s=e$, length two by hypothesis, length
three or more by the cycle the successive partial products trace. Its boundary is
marked by `cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set`,
which is the correct counterexample for exactly that hypothesis.
`prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz`
gives the constant $\lambda+c$ by chaining along a geodesic word, and
`cor-a-bijective-quasi-isometry-...-is-a-bilipschitz-equivalence` follows.

### Harvest faithfulness

Löh, *Geometric Group Theory* (ch. 3 pp. 39–52 in full, §§5.1–5.2.1 pp. 79–93,
§5.3.1 pp. 94–96, §5.5.1 pp. 116–117 — 63 rows) and Druţu–Kapovich, *Geometric
Group Theory* monograph (§7.9 pp. 229–233 and ch. 8 §8.1 pp. 253–262 with the
opening of §8.2 — 46 rows). Both are primary kinds with harvestable tables of
contents; the design's Bridson–Haefliger and de la Harpe are absent and
Druţu–Kapovich is a legitimate monograph replacement covering the same
quasi-isometry material. The enumerated headings track the sources' own
numbering over the stated ranges and the declines name specific results. The
deferrals with real destinations point at `simplicial-trees-and-group-actions`
and `subgroups-of-free-groups-and-schreier-rewriting`, both planned; the
`owner-decision` rows (Burago–Kleiner on separated nets in $\mathbb R^2$, the
Petersen graph, coarse uniform convergence, quasi-isometric relations) are
genuinely homeless and each names its specific result.

### Size

60 items, at the ceiling. See B2-11.

---

## Batch 9 · `ends-coends-and-weighted-limits` — VERDICT: sufficient

49 authored A items against the design's 24 + 4 `fs-`, and 9 B items against 7.
**All 24 design items are present**, mapped one to one, and all four design
`fs-` items with two more. This is the strongest scaffold in my group and its
strategies anticipate the design's own traps by name.

### B9-1 — `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` delivered half of what its harvest rows promise. **Repaired.**

Two coverage rows name this single item: Riehl *CHT* (7.1.8), "a weighted limit
is a limit reindexed along the category of elements", and (7.2.4), "a weighted
colimit is a colimit reindexed along the category of elements", both `included`.
The item's title and strategy carried only the limit clause. Design item 21 also
asks for both — "reduces $\{W,D\}$, and dually $W\star D$".

This is the defect class only a joint read of the manifest and the harvest can
find: the harvest is structurally complete, `coverage-checklist` passes, and the
promised half is simply not in the item. Left alone it becomes a step-6
faithfulness finding on frozen-adjacent text.

Repaired: the title now reads "…, and a weighted colimit an ordinary colimit over
it", and the strategy states the colimit clause as a separate numbered part with
its proof — for $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$ the same
identification reads a cocone under the composite of the category-of-elements
projection with the diagram as a natural transformation from $W$ into
$\mathcal M(F-,m)$ — and names both Riehl locators. I added
`def-small-locally-small-and-large-category` to the `deps`, which the smallness
remark uses and which was undeclared.

### B9-2 — the ends half has an existence corollary and the weighted half had none. **Repaired.**

`cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete`
is item 12, and it is what stops the ends half from being a page of formulas
each conditional on an object nobody has shown exists. The weighted half proves
the same shape of formula — item 35's end formula, item 36's category-of-elements
formula, item 38's comparison — and never says when the object exists. The fact
was present only as a clause inside item 36's strategy.

Added, immediately after item 36:
`cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target`
— for small $\mathcal J$ and $W:\mathcal J\to\mathbf{Set}$, the category of
elements has as objects the disjoint union of the sets $W(j)$ and as morphisms a
subset of a disjoint union of morphism sets of $\mathcal J$, hence is small; item
36 exhibits $\{W,F\}$ as an ordinary limit over it, and completeness supplies it.
Dually for $W\star F$. The strategy carries out the smallness count inline, as
item 12's does, and states explicitly that this is sufficiency and not necessity
— which is design trap 1, the one every blanket existence claim on this page has
to respect. The A page is now **50** items.

### B9-3 — Loregian Exercise 1.13 to `owner-decision`: accepted, with the home named.

Beta's own reason says "The forward half would fit here", then declines the whole
row because the converse has no planned home. Accepted — the forward half has no
consumer on this page — but `owner-decision` understates what is known. The
adjunction-and-end interplay is `kan-extensions-density-and-the-free-cocompletion`
(365.011), where `thm-an-adjunction-is-an-absolute-kan-extension` and
`thm-kan-extensions-as-coends` already live. I left the Beta's row and its reason
untouched, because the reason is that Beta's own record of what it read; this
paragraph is the routing. **Step 9 should look at MA-6 for the forward half
before treating it as homeless.**

The other seven `owner-decision` rows I checked and uphold: the subdivision
category (Loregian Remark 1.2.9, Prop 1.2.10, Riehl Remark 7.2.10) is a third
index category computing an object the page already characterises two ways;
Loregian Example 1.4.4 is a profunctor companion the library has not planned;
Kelly Lemma 3.5.2 and Examples 3.5.3 are the mixed interchange morphism, which
belongs with filtered-colimit technology; Kelly §3.4's closing remarks and Riehl
Construction 7.1.9 are about enrichment and discrete right fibrations
respectively. I confirmed against `plan-spec.json` that there is no filtered
colimit page and no Grothendieck-construction or fibration page in category
theory — `subobject-lattices-generators-and-the-grothendieck-axioms` is the AB
axioms and `fibrations-fiber-bundles-and-homotopy-exact-sequences` is topology.
Beta's search was correct.

### B9-4 — the design's B-page counterexample: drop approved.

The design lists `cex-a-dinatural-family-whose-composite-is-not-dinatural` on the
B page. It is absent, and the B page carries nine examples and no `cex-` at all.
I looked hard at this because a B page with no counterexample is the shape the
step-3 brief warns about, and I approve the drop on the evidence:

- the witness is not lost, it is promoted. `thm-dinatural-transformations-do-not-compose-in-general`
  is a constructive theorem on the A page, built on the walking arrow, and
  `fs-dinatural-transformations-compose` restates the witness in full so the
  false statement stands alone. The design's *decision* — that the fact be shown
  concretely rather than asserted — is honoured; only its placement moved.
- the boundary work the `cex-` would do is done, and done better, by the six
  A-page `fs-` items, every one of which carries a finite witness rather than an
  assertion. I checked all four of the load-bearing ones by hand:
  `fs-every-end-exists` refutes with a *small* index category (discrete
  countably infinite, target the finite sets, diagonal values two-element), so
  the reader sees smallness of the index is not the issue;
  `fs-a-coend-is-a-colimit-over-the-twisted-arrow-category-under-this-pages-convention`
  computes both objects on the walking arrow with the hom-bifunctor — the false
  reading gives a one-element set, the coend two, because the reverse-direction
  slot is empty; `fs-every-functor-preserves-ends` uses the four-element diamond
  collapsed onto the two-chain, where $a\wedge b=\bot\mapsto0$ but
  $F(a)\wedge F(b)=1$; and `fs-a-weighted-limit-is-the-ordinary-limit-of-the-same-diagram`
  computes the kernel-pair weight, ordinary limit two elements against weighted
  limit four. All four are correct as sketched.
- a third full statement of the same three functors on the walking arrow would be
  padding.

The nine B examples are substantive computations, not tokens. The B page is real.

### B9-5 — Richter replacing Mac Lane (Beta F2): approved.

§MA-5 names Mac Lane *CWM* Ch IX as primary and says it was read from a non-open
copy. A source with no fetch-verifiable URL cannot back a coverage row, so the
four backing sources are Loregian, Richter, Kelly and Riehl *CHT*, all four
primary kinds with harvestable tables of contents and none an encyclopedia entry.
Richter §§4.4–4.6 carries exactly the Mac Lane material the design wanted, and
Richter Prop. 4.6.3 is what the design itself cites for Fubini. The
two-treatment rule is satisfied several times over.

### B9-6 — Beta's own repairs F3–F8: all verified, all accepted.

F3 (the re-harvest of Loregian's chapter-1 Exercises and Kelly §3.9, 21 rows
added, three previously unbacked items now backed) is the one that mattered most
and it is the right instinct: items 2, 3 and 42 would otherwise have carried a
provenance label with no harvest row behind it. F4 (dropping
`def-cardinality-of-a-small-category-and-kappa-small-diagram` from item 12,
because the cardinality definition assumes choice and a set-sized count does not)
is correct and is the inflated-dependency defect caught before it was written.
F5, F6, F7 and F8 are all correct; F6 in particular — the library publishes only
`cor-representable-presheaves-detect-isomorphism-of-objects` in the
contravariant form, and the co-Yoneda chain produces an isomorphism of
*covariant* representables, so the corollary must be applied in
$\mathbf{Set}^{\mathrm{op}}$ in a numbered step — is exactly the citation-fidelity
class, found by the Beta on itself.

F7's three title tightenings are the fatal class this stage exists to catch, and
they are right: item 25 now says "For a small source category", item 23 says the
three objects "exist together and agree" rather than asserting existence, and
item 41 says "A set-valued coend".

### Design traps, checked one by one

1. **Smallness stated where it is used, not built into the word "end".** Held.
   Items 8, 13, 25, 30 carry their size hypotheses; item 23's strategy says in as
   many words "NO smallness hypothesis is used or claimed"; item 45 refutes
   blanket existence with a small index category. My B9-2 addition states
   sufficiency and not necessity for the same reason.
2. **Variance.** Held, and guarded twice. Item 10's strategy names the swap as
   "the page's designated fatal error" and spells out that the colimit is over
   $\mathrm{Tw}(\mathcal C)^{\mathrm{op}}$ of $f:c\to c'\mapsto T(c',c)$ with
   domain and codomain exchanged; `fs-` item 46 is the standing guard; item 41's
   strategy fixes the weight's variance before any computation.
3. **Kelly numbered by equation, not theorem.** Held — the coverage locator says
   so explicitly and the rows name equations.
4. **Split at items 15–24 if the ceiling threatens.** Not needed at 50.

### Size

50 items after B9-2, ten under the ceiling. No split. Beta records that the
design's cut — the ends half against the weighted half, at item 30 — is still
available if step 6 needs it; I confirm it is, and the ten items of headroom mean
step 6 will not.

---

## Gates run

All from the repo root, after the repairs, with no permission requested:

```
node tools/content-policy.mjs --manifest-only \
  research/frontier-18-batch-2.pages.json research/frontier-18-batch-9.pages.json
  -> 202 scoped item(s), 0 error(s), 0 warning(s)

node tools/coverage-checklist.mjs --require-destination \
  research/frontier-18-batch-2.coverage.json research/frontier-18-batch-9.coverage.json
  -> 3 page(s), 331 harvested result(s), 0 error(s), 0 warning(s)

node tools/splice-plan.mjs --run frontier-18 --batch 2 --dry-run
  -> 4 page(s) spliced, 0 already correct, 143 item(s)      [was: WITHHELD]
node tools/splice-plan.mjs --run frontier-18 --batch 9 --dry-run
  -> 2 page(s) spliced, 0 already correct, 59 item(s)

node tools/validate-plan.mjs /tmp/f18-spliced-d.json
  -> OK; no error on any of my six pages; sizes 48 / 60 / 50
```

`validate-plan` was run against a spliced copy written outside the repo, because
splicing `research/plan-spec.json` itself is stage `4-splice`'s act and not mine.
Every dependency of both batches resolves: 115 external dependencies in batch 2
and 59 in batch 9, all `status: published`, none with an `ai-generated`
statement, none legacy-unclassified.

## What I changed

`research/frontier-18-batch-2.pages.json`

- inserted `def-square-map-of-an-extraspecial-two-group` and
  `lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing` after
  `cor-the-exponent-of-an-extraspecial-p-group` (B2-1);
- rewrote the strategy and `deps` of
  `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`
  (B2-1);
- set the Cayley A page's `requires` to the spec's four edges and the B page's to
  its A page alone (B2-12).

`research/frontier-18-batch-9.pages.json`

- extended the title, strategy and `deps` of
  `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` with the
  weighted-colimit clause (B9-1);
- inserted
  `cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target`
  after it (B9-2).

No coverage file, notes file, proof-contract file, `plan-spec.json`, item file or
library page was edited. The three new items are proof-bearing or definitional
scaffold entries only; their proofs and, for the two lemmas/corollary, their
contract rows are the step-5 author's, as for every other item on these pages.

## Carried forward

- **D-1, doc bug.** `SCHEMA.md` §6 still states "an A page has a **100-total-item
  review ceiling** before `validate-plan` emits `size`, raised from 60 on
  2026-07-30". `tools/validate-plan.mjs` line 61 defaults `--max-items` to 60 and
  `CLAUDE.md` states 60 (owner, 2026-08-11). The code is the truth and the doc is
  the bug. Not a scaffold defect and not mine to fix inside a step-3 dispatch;
  flagged for whoever next touches `SCHEMA.md`, since a Beta reading §6 would
  scaffold to the wrong ceiling.
- **B2-6 correction for the record.** Beta-2 Finding 10 puts all `fs-` items on
  the B pages and justifies it by "`SCHEMA.md` §6 puts `fs-` in a page's
  `examples` array". That rationale is wrong: A pages carry an `examples:` array
  too, and 57 published A pages list `fs-` items in it — including
  `monadicity-and-becks-theorem`, the page immediately preceding batch 9's, and
  batch 9's own scaffold does the same. The *conclusion* is fine and I accept it:
  the frontier-17 `frattini-subgroups-and-the-burnside-basis-theorem` pair, the
  page immediately preceding batch 2's, puts all four of its `fs-` items on the B
  page, and following it keeps the Cayley A page at 60 rather than 65. Both
  placements are legal; the two batches in my group differ, and that is not a
  defect in either.
- **For the lead Alpha at step 4:** the §GT-14 amendment Beta-2 owes
  (`simplicial-trees-and-group-actions` cites this page's tree items rather than
  re-minting them) is a prose-scaffold amendment.
- **For step 9 and the owner report:** Craven Theorem 3.16 (B2-8) has no page in
  `plan-spec.json` and no planned one; Loregian Exercise 1.13's forward half
  should be offered to MA-6 (B9-3); and the Cayley split recommendation (B2-11)
  is a `frontier-19` planning decision with the cut already verified.
