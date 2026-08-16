# frontier-15 — Alpha group `b`, step-3 scaffold breadth and depth review

Group `b` covers batches **4, 5, 6** (`research/frontier-15-alpha-groups.json`:
measure theory's Borel/σ-algebra layer, the topology batch working the same
published Euclidean and quotient topology, and the complex-analysis batch
sharing the plane, its compactness-and-subdivision arguments and the winding
number seen from the integration side).

| batch | A page | A items | B items | verdict |
|---|---|---:|---:|---|
| 4 | `sigma-algebras-and-borel-sets` | 42 | 16 | **insufficient** |
| 5 | `the-fundamental-group-of-the-circle` | 21 | 4 | **insufficient** |
| 6 | `goursat-and-cauchys-theorem-in-a-convex-domain` | 16 | 8 | **insufficient** |

No pair is near the 60-item `validate-plan` ceiling, so no split is adjudicated
and none should have been proposed.

## Severity table

| id | batch | severity | one line | disposition |
|---|---|---|---|---|
| B4-1 | 4 | **high** | `λ(E)` and `M(E)` have no well-definedness result, and five items consume one | route to Beta |
| B4-2 | 4 | high | AC vs AC$_\omega$ on $\lvert\mathcal B(\mathbb R^n)\rvert=\mathfrak c$ | **approved** — the design's trap 3 is the error |
| B4-3 | 4 | medium | swap `thm-regularity-of-the-alephs` → `thm-countable-subsets-of-omega-one-are-bounded` | **approved** |
| B4-4 | 4 | medium | `proved_here: false` fallback for Borel-hierarchy strictness | **approved with one condition** |
| B4-5 | 4 | low | two unused/imprecise dependency edges on the cardinality theorem | route to Beta |
| B5-1 | 5 | **mechanical** | `kind: "false_statement"` is not a legal kind; step-4 splice would have failed | **repaired by me** |
| B5-2 | 5 | medium | no witness for sharpness of the "length $<1$" hypothesis | route to Beta |
| B5-3 | 5 | medium | the design's third B item is absent | route to Beta |
| B5-4 | 5 | low-medium | no degree-zero-but-nonconstant witness | route to Beta |
| B5-5 | 5 | low | Hatcher locator stops at Theorem 1.7; the applications get no disposition row | route to Beta |
| F5-1 | 5 | — | trig `requires` re-pin | **approved; already on disk, verified** |
| F5-2…F5-5 | 5 | — | quotient rebuild, A-spine promotion, degree pipeline, section argument | **approved** (F5-2, F5-3 with conditions) |
| F5-6, F5-7 | 5 | — | un-deferral/alias; published scope-denial prose | **declined at this stage — owner decision** |
| B6-1 | 6 | medium | a false `inline` disposition hides the rectangle theorem | route to Beta |
| B6-2 | 6 | medium | unused `deps` edge to a false-statement item, twice | route to Beta |
| B6-3 | 6 | low | openness of the annulus asserted with nothing supplying it | route to Beta |
| B6-4 | 6 | low | the higher-derivative Statement must assert existence | route to Beta |
| B6-5 | 6 | low | the design's first FS has no `fs-` carrier | author's call, record it |
| F1…F6 | 6 | — | all six Beta-6 findings | **approved**, each verified from disk |

---

# Batch 4 — `sigma-algebras-and-borel-sets`

Design: `research/plan-measure-theory-track.md` §MT-1 (L1626+). Every DEF and
every THM the design lists is present, the B page carries all seven design
examples and all five design counterexamples, and the five traps the Beta task
names check out: the π–λ theorem is decomposed into (a) `lem-lambda-system-with-finite-intersections-is-sigma`,
(b) `lem-lambda-good-sets`, (c) `lem-generated-lambda-system-closed-under-intersections`;
the monotone class theorem is decomposed the same way with the *first*
good-sets pass its own item; the generating-family theorem is one item with
seven conditions, not seven items; the transfinite description is stated in ω₁
**stages**; and no countable additivity appears anywhere on the page. I opened
`def-f-sigma-g-delta` on disk — it is stated for `$\mathbb R$` only, it is not
re-minted, and the scaffold uses it only for `$\mathbb R$`.

## B4-1 (high) — the generated λ-system and monotone class are never shown to be one

`def-generated-lambda-system` and `def-generated-monotone-class` define the
generated system as the intersection of all such systems containing the family.
Minimality then follows by definition. **Being a λ-system, respectively a
monotone class, does not** — that is the content of "a nonempty intersection of
λ-systems is a λ-system", and nothing on the page states it. σ-algebras get
exactly this, as the landmark `thm-generated-sigma-algebra-exists-and-is-minimal`.

Where the route fails to close, read from the proof contract rather than
inferred:

- `lem-generated-lambda-system-closed-under-intersections`, derivation
  `second-good-set-pass` (step 1.2), applies `lem-lambda-good-sets` with
  $\mathcal D=\lambda(\mathcal P)$. That lemma's hypothesis is *"for a member
  $A$ of a **λ-system** $\mathcal D$"*. Its only listed input for that clause is
  `def-generated-lambda-system`, which cannot supply it.
- `lem-generated-monotone-class-closed-under-complements` needs
  $M(\mathcal A_0)$ closed under increasing unions and decreasing intersections
  to show the good-set family is a monotone class; same gap.
- `lem-monotone-good-sets-for-algebra-elements` and
  `lem-generated-monotone-class-closed-under-intersections` inherit it, and
  `thm-dynkin-pi-lambda` and `thm-monotone-class` sit on top.

This is the design's trap (iii) — *"the definite article is earned, not
assumed"* — applied to the two generated families the design did not name. The
proof is genuinely short (each defining clause is preserved under intersection),
which is exactly why it will be waved rather than written if nothing asks for
it, and why the σ-algebra case was made an explicit theorem.

**Remedy.** Add two lemmas before their first consumers:
`lem-generated-lambda-system-exists-and-is-minimal` (a nonempty intersection of
λ-systems on $X$ is a λ-system, so $\lambda(\mathcal E)$ is a λ-system
containing $\mathcal E$ and contained in every λ-system containing it) and
`lem-generated-monotone-class-exists-and-is-minimal`. Sources already in the
ledger carry both: DEMBO Theorem 1.1.38's proof route constructs
$\lambda(\mathcal P)$ as that intersection, and BASS Definition 2.9 /
Theorem 2.10 does the same for the monotone class. Routed to Beta rather than
repaired here because two proof-bearing items need contract entries and
`canonical` coverage rows, which Beta owns.

## B4-2 (high) — AC, not AC$_\omega$, on the cardinality equality: **approved**

Beta's Finding 1 asks to state `thm-cardinality-bound-for-generated-sigma-algebras`
and `thm-cardinality-of-the-borel-sigma-algebra-on-rn` under the full Axiom of
Choice, against the design's *"the choice cost is AC$_\omega$ and the Statement
says so"* and against this dispatch's run-specific check. I approve it, and I
checked the mathematics independently rather than taking either side's word.

AC$_\omega$ is enough for the ω₁-**stage** description: the union over the
stages is closed under countable unions because the least stage containing each
member of a countable family is canonical (no choice), and the resulting
countable set of countable ordinals is bounded below ω₁ by
`thm-countable-subsets-of-omega-one-are-bounded` — that is the one place
AC$_\omega$ is spent, and the scaffold states it there.

It is **not** enough for the cardinal equality. In ZF there is a definable
injection $\omega_1\to\mathcal B(\mathbb R)$: send $\alpha$ to the Borel set of
reals coding a well-ordering of $\omega$ of order type $\alpha$. So
$\lvert\mathcal B(\mathbb R)\rvert\le\mathfrak c$ would give
$\omega_1\le\mathfrak c$, and ZF + DC is consistent with $\omega_1\not\le
\mathfrak c$ (Solovay's model satisfies ZF + DC + the perfect set property for
every set of reals, which leaves no set of reals of size $\aleph_1$). Since DC
implies AC$_\omega$, AC$_\omega$ cannot prove the equality. Beta reaches the
same conclusion by the other route — AC$_\omega$ gives a surjection from a real
code space onto the Borel sets and nothing turns it into an injection — and
Fremlin 567E(b), which I take as the primary backing here, states only the image
claim; the two Stack Exchange entries in the ledger are correctly marked
corroboration and not backing.

Full AC does suffice (well-order $\mathbb R$, and the stagewise counting closes
with `thm-hessenberg` and `cor-cardinal-absorption`). Amendments A and B to
`plan-measure-theory-track.md` §MT-1 are **approved for the step-4 splice**. I
am recording the override explicitly so this reads as an adjudicated decision
and not as silent drift from the dispatch's check list: on this point the design
trap and the dispatch instruction are the error, and the scaffold is right.

## B4-3 (medium) — the sharper ω₁ dependency: **approved**

Verified both items on disk. `thm-regularity-of-the-alephs` clause (b) —
successor alephs are regular — carries "**Assuming the Axiom of Choice**" and
its own paragraph saying clause (b) is where AC becomes indispensable.
`thm-countable-subsets-of-omega-one-are-bounded` clause (a) states exactly the
AC$_\omega$ boundedness the transfinite construction needs, and names the single
step that spends it. Citing the former would have strengthened the transfinite
theorem's hypothesis from AC$_\omega$ to AC without saying so. Approved.

## B4-4 (medium) — the Borel-hierarchy strictness fallback: **approved, one condition**

`rem-the-borel-hierarchy-never-stabilizes` as a `proved_here: false` remark on
the leaf B page, with `fs-the-borel-hierarchy-closes-after-two-steps` as its one
consumer. I checked the "failed local route" claim rather than accepting it:
separating a finite Borel level from $\mathcal B(\mathbb R)$ needs a
$\Sigma^0_\alpha$-universal set and a diagonal argument — descriptive set
theory MT-1 does not build — and cardinality cannot do it, since every level
from the second on already has $\mathfrak c$ many sets. The decline is real.
The remark is on a B leaf, so nothing outside the pair can rest on it.

**Condition.** The only backing is a Berkeley course-notes comment (CHRIST,
PDF p. 9) which, by Beta's own convention note, states non-stabilization,
says a precise formulation needs countable ordinals, and supplies no proof.
That is thin for a load-bearing external statement. Step 5 must add a
book-grade locator alongside it — Kechris, *Classical Descriptive Set Theory*,
§22.4 (the Borel hierarchy is strictly increasing), or Srivastava, *A Course on
Borel Sets*, §3.6 — with a live URL, and quote the exact statement from it in
`external_dependency.exact_statement`.

## B4-5 (low) — two dependency edges that no step will use

`thm-cardinality-of-the-borel-sigma-algebra-on-rn` lists
`thm-cantor-set-ternary-description` and `lem-of-q-dense`. The lower bound
$\mathfrak c\le\lvert\mathcal B(\mathbb R^n)\rvert$ is the injection
$x\mapsto\{x\}$ into the closed sets; neither edge is needed for it. Either the
contract names the exact clause each supplies, or the edges go — an unused edge
is what the citation-fidelity rule forbids and what a judge reads as an
inflated dependency.

Recorded, not a finding: the A page is 42 items against the MT design's stated
18–40 band. It is well under the hard 60-item ceiling, the extra items are the
honest decompositions above, and nothing should be cut to hit a band.

---

# Batch 5 — `the-fundamental-group-of-the-circle`

Design: `research/plan-topology-set-theory-track.md` §HT-4 (L~931). The A page
is right: the computation runs entirely in $\mathbb R/\mathbb Z$, trigonometry
enters only in the dictionary theorem, degree well-definedness
(`cor-degree-descends-to-circle-loop-classes`) precedes every homomorphism and
isomorphism claim, openness of $p$ by saturation is its own numbered lemma
rather than a "clearly", and `thm-int-comm-ring` is the source for
$(\mathbb Z,+)$. I opened the three lifting items on disk: path lifting,
homotopy lifting and the lifted-endpoint corollary impose only a covering and a
prescribed initial lift — no local path-connectedness, no semilocal simple
connectedness — so Beta's convention note is accurate and no hypothesis is being
smuggled in.

The B page is where this pair is thin: four items against twenty-one, and the
hypothesis the covering proof actually consumes has no witness anywhere.

## B5-1 (mechanical) — repaired by me

`fs-every-continuous-self-map-of-the-circle-is-nullhomotopic` carried
`"kind": "false_statement"`. `tools/validate-plan.mjs` (`PREFIX_OF_KIND`,
line 88; the check at line 146) raises a hard `prefix` error on an unknown kind,
so the step-4 splice gate would have failed on it. Corrected in place to
`false-statement`. No content, contract or coverage consequence — the id prefix
`fs-` was already right.

## B5-2 (medium) — nothing shows the "length $<1$" bound is sharp

`lem-open-quotient-arcs-in-real-line-mod-integers` claims that $p$ restricted to
any interval of length below one is a homeomorphism onto its image, and
`thm-real-line-covers-real-line-mod-integers` chooses $J=(x-1/3,x+1/3)$ for
exactly that reason. No item on the pair shows the bound cannot be relaxed, so
a reader has no way to see the hypothesis doing work.

**Add** a `cex-`: $p|_{[0,1)}$ is a continuous bijection onto
$\mathbb R/\mathbb Z$ that is **not** a homeomorphism — its source is not
compact while its target is, or directly, $p[[0,1/2)]$ is not open in
$\mathbb R/\mathbb Z$ — and $p|_{[0,1]}$ is not injective. This also marks the
boundary of the compact-to-Hausdorff criterion the dictionary theorem leans on,
which is the one place on the page where "continuous bijection" is upgraded.
Sources: Hatcher §1.1 and Wise §3.4 both restrict to intervals of length below
one for this reason; the published
`ex-real-line-mod-integer-translations-is-a-covering` makes the corresponding
remark for the closed interval $[0,\tfrac12]$, but it is a B leaf and cannot be
cited from here.

## B5-3 (medium) — the design's third B item is absent

HT-4's B list is three items, and the third is *"the circle as the first
published space with nontrivial fundamental group — the B page states what
became available"*. Nothing in the scaffold does this.

**Add** an `ex-`/`rem-` recording that $\mathbb R/\mathbb Z$ is not simply
connected while $\mathbb R$ is — `thm-convex-subsets-have-trivial-fundamental-group`
is published and I opened it: nonempty convex $C\subseteq\mathbb R^n$ is simply
connected, with the straight-line homotopy printed. So a quotient of a simply
connected space need not be simply connected, and a covering map does not
transport $\pi_1$. That is the honest boundary of the machinery this page
builds, and it closes from one published item plus
`cor-real-line-mod-integers-is-not-simply-connected`.

## B5-4 (low-medium) — degree zero is never separated from constant

`cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero` has no witness of a
nonconstant — indeed surjective — loop of degree zero. Take $u(t)=2t$ on
$[0,\tfrac12]$ and $u(t)=2-2t$ on $[\tfrac12,1]$ and $\alpha=p\circ u$: the
pasting lemma gives continuity, $u$ is the lift from zero and ends at zero, so
$\deg\alpha=0$, while $\alpha$ is onto. It is the same machinery as the paused
loop already scaffolded and it is what stops a reader reading "degree zero" as
"constant" or "not onto".

## B5-5 (low) — the Hatcher locator stops exactly where the consequences start

The declared range is "pp. 29–31 through the proof of Theorem 1.7 and stopping
before Theorem 1.8". Everything inside it is dispositioned, so
`coverage-checklist` is clean — but the results Hatcher proves immediately
afterwards from Theorem 1.7 (the fundamental theorem of algebra via $\pi_1$,
Brouwer's fixed point theorem in dimension 2, Borsuk–Ulam in dimension 2) get
no row at all. The *content* decision is correct: the design assigns
no-retraction, Brouwer in dimension 2, FTA via $\pi_1$ and Borsuk–Ulam to
**HT-7** (`plan-topology-set-theory-track.md` L1109–1119), and
`rem-brouwer-fixed-point` is amended there, not here. Extend the locator through
them and disposition them `deferred` naming HT-7, so the record shows they were
considered rather than unseen — a locator drawn to end at the boundary is
exactly how a harvest passes structurally while looking thin.

## Beta-5's findings F5-1 … F5-7

**F5-1 — approved; already applied, verified from disk.** The surjectivity and
fibre theorem the dictionary uses is
`thm-sine-and-cosine-parametrize-the-unit-circle`, which lives on
`fundamental-trigonometric-identities` (order 185), not on
`sine-cosine-and-the-definition-of-pi` (order 179). 185 requires 179, so
`def-pi-via-first-positive-cosine-zero` and
`thm-sine-cosine-zero-sets-and-fundamental-period` are in closure.
`research/plan-spec.json` already carries
`requires: [covering-spaces-and-lifting, fundamental-trigonometric-identities]`
at order 295 — the step-0 drift review applied this re-pin. Nothing to re-pin,
so no `validate-plan.mjs` re-run is owed for this edge. I traced the route once
more: 2π-periodicity plus injectivity on $[0,2\pi)$ gives exactly the
integer-translation fibres of $t\mapsto(\cos2\pi t,\sin2\pi t)$, so the quotient
universal property applies and the route closes.

**F5-2 — approved, with a condition.** Rebuild $\mathbb R/\mathbb Z$ on the A
page from `def-quotient-topology` with the agreement remark; the published
occurrences are B leaves and silent re-definition is the known defect class.
Condition: `rem-circle-quotient-model-agrees-with-published-examples` must name
the published pages in prose (`subspaces-products-and-quotients-examples`,
`covering-spaces-and-lifting-examples`) **without** minting a citation edge to a
B-leaf item; `depcheck` and `citecheck` must stay clean afterwards.

**F5-3 — approved.** Verified the overlap from disk:
`ex-real-line-mod-integer-translations-is-a-covering` is published on
`covering-spaces-and-lifting-examples` (order 294, a B page), it does state that
$q$ is a covering, and it has two same-page consumers
(`ex-the-unit-loop-in-real-line-mod-integers-is-essential`,
`ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings`), so
re-homing it to order 295 would leave both citing forward. The b-leaf rule makes
it uncitable from an A page. The design already licenses this rebuild pattern
for the *definition*; extending it to the covering clause is the same decision,
not a new one. Two conditions: the agreement remark goes in Remarks with no
`deps` edge to the B id, and `thm-real-line-covers-real-line-mod-integers` must
claim only the covering clause — the deck-transformation half stays on the
published example.

**F5-4 — approved.** Keep homotopy invariance, descent to classes, the lift
formulas, the degree laws and the equal-degree classification as separate items
in the listed order. Well-definedness #17 precedes its consumers, which is the
whole point.

**F5-5 — approved.** The identity is not a based loop, so based-degree
invariance alone does not refute an arbitrary unbased nullhomotopy; the
reversed-homotopy-to-a-section argument is the right route and its hypotheses
are available — I checked `thm-homotopy-lifting-for-covering-maps` on disk and
it needs only a covering, a homotopy $Y\times I\to B$ and a lift at time zero.

**F5-6 — declined at this stage; owner decision.** Deleting
`items/rem-pi1-circle-is-z.md` and transferring its id as an alias are a
deletion and an id change, which CLAUDE.md and my brief reserve to the owner.
Mint `cor-geometric-unit-circle-has-fundamental-group-z` with **no aliases** —
taking `rem-pi1-circle-is-z` as an alias while that file still exists is an id
collision, and `validate-plan` reads aliases as existing ids. Step 5 must also
drop the sentence in that item's `strategy` that instructs the alias
transfer. Separately for step 6c and the owner report: `rem-pi1-circle-is-z` is
`status: draft`, so confirm no *published* page lists it — a published page
listing a draft item is a hard error.

**F5-7 — declined at this stage; owner decision, not a delegated repair.** The
obvious-published-dependency-repair delegation reaches only "a published item
the current level **depends on**". Beta states, and I confirm, that
`ex-circle-as-r-mod-z` and `ex-torus-as-a-quotient-of-the-square` are not
dependencies of this level — they are B leaves and cannot be. So the delegation
does not reach them, however clearly their prose goes stale.

I want to be plain about what declining costs, rather than let it read as
resolved: once HT-4 publishes, `ex-circle-as-r-mod-z` asserts *"This library
does **not** identify either of them with a circle in $\mathbb R^2$"* while
another published page proves precisely that identification. That is a real
internal contradiction and it will still be there at step 10. Beta's proposed
replacement texts are correct and I would apply them verbatim under
authorisation. Carried to the step-10 owner report as an owner decision; not
applied at step 5.

---

# Batch 6 — `goursat-and-cauchys-theorem-in-a-convex-domain`

Design: `research/plan-complex-analysis-track.md` §CA-4 (L~1020). All thirteen
designed A items are present and the three additions are each load-bearing
rather than decorative: `prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain`
separates the segment-integration bridge from its two Goursat inputs,
`cor-cauchy-theorem-convex-domain` states the theorem the page title promises,
and `thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain` is what
the circle formula actually consumes. All five design traps are honoured: the
interior-edge cancellation is its own lemma citing CA-3's additivity and
reversal, the nested selection is its own lemma, Goursat-with-an-exceptional-point
is its own theorem and not a remark, differentiation under the integral is a
direct difference-quotient lemma with no general theorem invoked, and
star-shaped/convex come from the published Euclidean machinery through the plane
dictionary. No keyhole contour appears.

The harvest is the most thorough of the three — seven sources, ~88 headings,
three of them textbooks — and I checked the one thing only a reader can check.

## B6-1 (medium) — a false `inline` disposition hides the rectangle theorem

Two rows disposition a named source result as `inline` to
`thm-goursat-triangle-theorem`:

- Ahlfors §1.4 Theorem 2, *"Cauchy's theorem for a rectangle without assuming
  continuity of the derivative"* — the section's own title;
- Stein–Shakarchi §1 Corollary 1.2, the rectangle version of Goursat.

`inline` means *the item whose proof absorbs it*. The triangle theorem's proof
absorbs neither: nothing anywhere on the pair states a conclusion about a
rectangle, and the triangle boundary definition does not cover one. So the row
is not true of disk, and the structural gate cannot see that.

**Remedy (preferred): mint `cor-goursat-rectangle-theorem`.** It is the corollary
pass the scaffold-richness rule asks for and it is cheap — split the rectangle
along a diagonal, cancel the diagonal by the reversal argument already carried
by `lem-goursat-four-triangle-boundary-cancellation` and
`prop-reversal-and-concatenation-of-complex-line-integrals`, apply Goursat to
each half. It is the headline form of the theorem in Ahlfors and a named
corollary in Stein–Shakarchi, so both primary treatments back it. Alternatively
disposition it `deferred`/`out-of-scope` with a result-specific reason; what
cannot stand is the current row.

## B6-2 (medium) — an unused `deps` edge to a false-statement item, twice

`cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`
and `cex-connected-domain-need-not-be-star-shaped` both list
`fs-every-continuous-complex-function-on-a-domain-has-a-primitive` in `deps`,
and Beta's own notes say it is *"attached only for provenance continuity …
not a load-bearing inference from a false claim"*. Both strategies then rebuild
the witness locally from `thm-circle-integrals-of-integer-monomials`,
`lem-punctured-rn-is-polygonally-connected` and `def-complex-domain`. An unused
edge is exactly what the citation-fidelity rule forbids.

The edge is legitimate to keep if it is *used*: I checked, and that item is on
`contour-integration` (order 307), an **A** page, so the b-leaf rule does not
bite, and the design says of the annulus row "uses CA-3's `fs-` witness for
$1/z$; open it and cite, don't rebuild". Its printed [L2] and [L3] give exactly
that $\mathbb C\setminus\{0\}$ is polygonally connected and
$\int_{|z|=1}z^{-1}\,dz=2\pi i$. Resolve one way or the other: cite those exact
clauses and drop the duplicated local derivation, or drop the edge.

## B6-3 (low) — the annulus is called a domain with nothing supplying openness

`cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`
must establish that $A=\{z:\tfrac12<|z|<2\}$ is open before invoking
`def-complex-domain`, which I opened on disk: *nonempty, connected, open*. The
strategy proves nonemptiness and path-connectedness but no listed dependency
gives openness. Add the continuity-of-modulus step, or the published dependency
that carries it.

## B6-4 (low) — the higher-derivative Statement must assert existence

Howell–Mathews Corollary 6.5.10, *"every complex derivative order exists and
remains holomorphic"*, is dispositioned `included` to
`thm-cauchy-integral-formula-higher-derivatives`, whose title states only the
formula. The induction through `lem-differentiating-cauchy-integrals` does
establish that $f^{(n)}$ exists on the open disc for every $n$, so the Statement
must say so — otherwise the disposition claims more than the item. The
"remains holomorphic" / $C^\infty$ half belongs to CA-5
(`cor-holomorphic-functions-are-real-analytic-and-smooth`, order 311) and that
part of the row should be `deferred` naming it.

## B6-5 (low) — the design's first FS has no `fs-` carrier

CA-4's FS list opens with *"Cauchy's theorem holds for every closed contour in
every domain"*. The scaffold carries the mathematics as a `cex-` and the page
therefore marks its landmark hypothesis only positively; no item states the
false claim in the reader-facing FALSE form. Minting one would duplicate the
annulus witness, so this is the author's call — but if it stays a `cex-` only,
record the decision in the coverage `canonical` list so the design's FS row is
accounted for rather than silently dropped.

## Beta-6's findings F1 … F6 — all approved, each verified from disk

**F1 (convexity dependency).** Approved. `def-star-shaped-open-subset-of-rn`
states that nonemptiness and the chosen centre are part of the definition and
that *every convex open set is star-shaped with respect to each of its points* —
which is precisely the one step `cor-cauchy-theorem-convex-domain` needs, and
`def-complex-domain` records that these are the usual Euclidean notions via
`rem-complex-plane-euclidean-dictionary`. The design's `convexity` page is about
convex real-valued functions; citing it would have named a different notion.

**F2 (nested-set dependency).** Approved. `thm-cantor-intersection-metric`
(published, order 118) requires each $F_k$ nonempty, closed, **bounded**,
nested, with $\operatorname{diam}(F_k)\to0$, in a **complete** metric space, and
concludes the intersection is exactly one point. The scaffold supplies all four
chain conditions through compactness of the filled triangles and completeness
through `thm-complex-plane-is-complete`. `equivalent-forms-of-completeness` is
an ordered-field nested-interval result and is not the theorem used, so the
design's trap (iv) is the error; Edits 4 and 7 approved.

I also checked the dependency whose *name* reads like a choice citation:
`thm-well-ordering-principle` is on disk the ZF statement *every nonempty subset
of $\mathbb N$ has a least element*, not the AC-equivalent well-ordering
theorem. So "choose the least-indexed maximizer to avoid a choice principle" is
honest, and the deterministic selection does what it claims.

**F3 (triangle-to-primitive bridge and the exceptional star-shaped theorem).**
Approved — a triangle theorem does not assert a zero integral around a circle,
and deriving the integral formula from plain Goursat is the circularity the
design's trap (ii) names. I traced the inserted route: the filled triangle with
vertices $a,z,z+h$ lies in a star-shaped $\Omega$ because it is the union of the
segments $[a,w]$ for $w\in[z,z+h]$, and $[z,z+h]\subseteq\Omega$ once $|h|$ is
small enough that $B(z,|h|)\subseteq\Omega$. That closes.

One authoring obligation this creates: `cor-closed-contour-integral-of-a-derivative-is-zero`,
which I opened, requires *$F$ holomorphic, **$F'$ continuous**, $\gamma$ closed
rectifiable*. All three uses satisfy it — the primitive's derivative is the
holomorphic $f$, the exceptional theorem's is the continuous $f$ by hypothesis,
and Goursat's affine part has a polynomial derivative — but the continuity
clause must be discharged explicitly at step 5, not elided.

**F4 (off-centre kernel).** Approved, and independently checked.
`thm-circle-integrals-of-integer-monomials` computes $\int_\gamma(z-a)^m\,dz$
for $\gamma$ centred at $a$; $\int_{|\zeta-a|=r}\mathrm d\zeta/(\zeta-z)$ for
$z\ne a$ is not that clause, and paraphrasing it as one would be an inaccurate
citation of exactly the kind the judges look for. The finite geometric
expansion $1/(\zeta-z)=\sum_{k\le N}(z-a)^k/(\zeta-a)^{k+1}+R_N$ with
$|z-a|/r<1$, uniform on the circle, closes it through
`thm-uniform-limit-interchanges-complex-line-integrals` and
`lem-geometric-sequence-null`, leaving only the $m=-1$ term and $2\pi i$.

**F5 (convex corollary).** Approved — the page title promises it and it is the
published dictionary applied once.

**F6 (locators and the exceptional-point source).** Approved. Howell–Mathews'
live section headings differ from the design's labels, and Tang-Kai Lee §2.1.2
Theorems 2.14–2.16 is the source that states the one-continuously-filled-point
theorem the circle formula consumes; without it the ledger would not show which
source warrants that seam.

---

# Cross-checks run over all three batches

- **Every external dependency exists on disk**: 27 (batch 4), 36 (batch 5), 39
  (batch 6) distinct ids, all present in `items/`, none missing.
- **No dependency has `provenance.statement: ai-generated`**, and none is
  legacy-unclassified — every external target of all three batches carries both
  component labels.
- **No internal forward reference** on any of the six pages: every same-page
  `deps` target precedes its consumer, and every B-page item cites only its A
  companion, an earlier B item, or published content.
- **Kind/prefix agreement**: one violation, B5-1, repaired.
- **Split adjudication**: 42, 21 and 16 A-page items; 16, 4 and 8 B-page items.
  No pair is near the 60-item ceiling, none should have proposed a split, and
  none did.
- **Primary backing**: batch 4 Bass + Tao (textbooks), batch 5 Hatcher
  (textbook) + May (monograph), batch 6 Ahlfors + Stein–Shakarchi +
  Howell–Mathews (textbooks). No pair rests on encyclopedia entries.

# Files I changed

- `research/frontier-15-batch-5.pages.json` — B5-1, `kind` corrected to
  `false-statement`.

Nothing else was edited. Every other finding is routed to its owning Beta
through `research/frontier-15-alpha-b-step3-verdicts.json`, because each one
adds or retitles a proof-bearing item and therefore needs a matching proof
contract entry and coverage row, which the Beta owns.
