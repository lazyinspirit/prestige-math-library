# Step 8 adjudication — group **d**, run `phase-2-wave-1`

You are the group Alpha for batches **2**, **12**: 2 A/B pair(s), 4 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-wave-1-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `finite-averaging-and-character-theory-prerequisites` | A | abstract-algebra | 144.2 | `the-group-algebra-and-representations`, `inner-product-spaces-and-orthogonality` |
| 2 | `finite-averaging-and-character-theory-prerequisites-examples` | B | abstract-algebra | 144.4 | `finite-averaging-and-character-theory-prerequisites` |
| 12 | `galois-orbits-and-descent-of-simple-finite-group-modules` | A | representation-theory | 510.0341 | `chain-conditions-and-semisimple-modules`, `the-galois-correspondence`, `tensor-products-of-modules`, `the-group-algebra-and-representations`, `maschkes-theorem-and-complete-reducibility` |
| 12 | `galois-orbits-and-descent-of-simple-finite-group-modules-examples` | B | representation-theory | 510.0342 | `galois-orbits-and-descent-of-simple-finite-group-modules` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-averaging-and-character-theory-prerequisites` — Finite Averaging and Character-Theory Prerequisites (9 item(s))

- `lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field` · lemma — For a field k and integer n>0, n·1_k is invertible if and only if char(k) does not divide n; 0 divides no positive integer.
- `lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice` · lemma — If V is a finite-dimensional k-vector space and U is a subspace, there exists a k-linear P:V→V with P²=P, image P=U and P restricted to U equal to the identity. This uses no choice axiom, including when U=0 or U=V.
- `lem-trace-of-an-idempotent-is-the-dimension-of-its-image` · lemma — For an idempotent endomorphism P of a finite-dimensional vector space over any field k, tr(P)=(dim_k image P)·1_k. In positive characteristic this is a scalar equality, not recovery of the integer rank from trace.
- `lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition` · lemma — For a group acting on a set X with finitely many orbits and any field k, invariant functions X→k form a vector space with basis the indicators of the distinct orbits. The dimension equals the number of orbits. For the conjugation action of a finite group these are class functions and conjugacy-class indicators. The empty X case has the empty basis.
- `lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product` · lemma — For nonempty finite X, the form (f,h)=|X|^(-1) sum_x f(x) conjugate(h(x)) on C^X is an inner product, linear in the first variable. The denominator is the positive real image of |X|.
- `lem-equality-case-for-a-finite-sum-of-unit-complex-numbers` · lemma — For n>0 and complex z_1,...,z_n with |z_i|=1, |sum_i z_i|≤n, with equality if and only if all z_i agree. The n=1 case is included.
- `lem-conjugates-of-an-average-of-roots-of-unity-are-averages-of-roots-of-unity` · lemma — If n>0 and z_1,...,z_n are complex roots of unity and a=(sum_i z_i)/n, then a is algebraic over Q. For every complex Q-conjugate b of a there is a finite cyclotomic splitting field E⊂C containing all z_i and a Q-automorphism σ of E such that b=σ(a)=(sum_i σ(z_i))/n; each σ(z_i) has the same order as z_i. No integrality hypothesis on a is needed.
- `lem-kernel-of-a-direct-sum-of-representations-is-the-intersection` · lemma — For a finite family of finite-dimensional k-representations ρ_i of the same group G, the componentwise direct-sum representation has kernel intersection_i ker(ρ_i). For the empty family the representation is on 0 and the intersection is G.
- `lem-a-group-is-abelian-iff-every-conjugacy-class-is-a-singleton` · lemma — A group G is abelian if and only if every conjugacy class is a singleton; no finiteness hypothesis is required.

### `finite-averaging-and-character-theory-prerequisites-examples` — Finite Averaging and Character-Theory Prerequisites: Examples (4 item(s))

- `ex-coordinate-projection-onto-a-subspace-of-c-three` · example — On C³, U=span((1,1,0),(0,1,1)); P(x,y,z)=(x,x+z,z) projects onto U along span((0,1,0)).
- `ex-conjugacy-class-indicator-basis-for-s-three` · example — The indicators of {e}, {(12),(13),(23)}, {(123),(132)} form the class-function basis for S₃.
- `ex-standard-hermitian-inner-product-on-functions-on-a-three-point-set` · example — On X={1,2,3}, the normalized form has Gram matrix I₃/3 in the indicator basis. For f=(1,i,0) and h=(i,1,1), (f,h)=0 and (f,f)=2/3.
- `cex-unit-complex-sum-strict-with-distinct-summands` · counterexample — The assertion that unit summands always attain the bound |sum z_i|=n is false: z_1=1,z_2=-1 give 0<2.

### `galois-orbits-and-descent-of-simple-finite-group-modules` — Galois Orbits and Descent of Simple Finite-Group Modules (5 item(s))

- `def-semilinear-galois-action-on-a-scalar-extended-algebra` · definition — Semilinear Galois actions, twists, and split central idempotents
- `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension` · lemma — Galois fixed points recover finite-dimensional scalar extensions
- `lem-galois-orbit-sums-of-split-central-idempotents-descend` · lemma — Orbit sums of primitive split central idempotents descend
- `lem-a-descended-galois-orbit-idempotent-is-primitive` · lemma — Descended orbit idempotents are primitive and their blocks have one simple type
- `thm-galois-orbits-classify-simple-modules-after-splitting-base-change` · theorem — Galois orbits classify simple modules after splitting base change

### `galois-orbits-and-descent-of-simple-finite-group-modules-examples` — Galois Orbits and Descent of Simple Finite-Group Modules: Examples (3 item(s))

- `ex-galois-descent-for-the-two-nontrivial-characters-of-c-three` · example — Descent of the two nontrivial characters of C₃
- `ex-the-rational-simple-block-of-the-quaternion-group` · example — The rational simple quaternion block
- `cex-a-galois-stable-character-need-not-have-schur-index-one` · counterexample — A Galois-stable character need not descend with multiplicity one

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-wave-1-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `phase-2-wave-1`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
