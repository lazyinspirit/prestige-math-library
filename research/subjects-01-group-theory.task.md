# subjects-01 — `group-theory`

**You are an expert of group theory.**

| | |
|---|---|
| track | `group-theory` |
| wave | 2 |
| file you own | `research/plan-group-theory-track.md` (**NEW**) |
| placement anchor | the structure block after `sylow-theorems-and-nilpotent-groups-examples`; the geometric and topological block after `applications-of-the-fundamental-group-examples` |
| sibling tracks to read first | `research/plan-algebra-track-expansion.md` (the finished `abstract-algebra` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- p-groups and nilpotency beyond Sylow: the class equation refined, upper and lower central series, Frattini and Fitting subgroups, the Burnside basis theorem, extraspecial groups
- permutation group theory: primitivity, multiple transitivity, the O'Nan–Scott landscape as a survey, Iwasawa's simplicity criterion
- presentations and combinatorial group theory beyond the published free-group pages: Tietze transformations, Nielsen–Schreier, the word and conjugacy problems as decision problems (state the undecidability honestly and cite it rather than proving it), small cancellation if sourced
- group extensions: split and non-split, the extension problem, **H¹ as complements up to conjugacy and H² as extensions**, the Schur multiplier — citing `homological-algebra` for the derived-functor construction
- **geometric group theory**: Cayley graphs, word metrics, growth functions, quasi-isometry and the Švarc–Milnor lemma, hyperbolic groups if sourced, amenability, Bass–Serre theory and groups acting on trees
- profinite and topological groups: inverse limits, profinite completion, the p-adic integers as a group
- modular representation theory or Brauer characters IF you can source them properly and they do not collide with `abstract-algebra`'s ordinary representation theory
- the finite simple group classification as a carefully hedged survey — statement, history, and what the library does and does not prove

## What you must NOT mint — cite it instead

- `abstract-algebra` owns AG-1…AG-4 in `plan-algebra-track-expansion.md`: A_n simplicity, Jordan–Hölder and solvable groups, semidirect products and automorphism groups, **Sylow's theorems, p-groups and nilpotent groups**. Read its finished file and start above it. Your p-group material must extend, not repeat.
- `abstract-algebra` owns the representation theory of finite groups (RT-1…RT-4: group algebra, Maschke, characters, induced representations).
- **Lie groups and Lie algebras belong entirely to `differential-geometry`** — including the abstract structure theory. Do not open that block.
- the published group band is large and authored: monoids/groups/subgroups (24), cosets and Lagrange (32), normal subgroups and quotients (34), homomorphisms and isomorphism theorems (36), cyclic groups (38), finite abelian structure (40), group actions and Cayley (42), symmetric groups and sign (44), free groups and presentations (60), free products and amalgamation (62), conjugacy and simplicity in S_n (64), composition series and solvable groups (66). Read them.
- the fundamental group (291) and its applications (301) are the topological anchor for your geometric block — 289 and 291 are authored, 293–302 are planned

## Verified from disk by the orchestrator, 2026-08-13

- You get a NEW file rather than editing the algebra expansion because `plan-algebra-track-expansion.md` is owned by `abstract-algebra` for this commission and two agents cannot write one file. Everything you want changed there goes in your Amendments-owed section.
- `free-groups-and-presentations` at order 60 is authored with only **6 items**, and `cyclic-groups-and-direct-products` at 38 with **6** — both thin for their subjects. Investigate before building on them; if genuinely thin, record enrichment amendments.
- `free-products-and-amalgamation` (62) is authored with 27 items and is the natural published anchor for Bass–Serre theory. Open it.
- Bass–Serre theory needs group actions on trees, and trees are published in the combinatorics band (`trees-forests-and-spanning-trees`, 209, 27 items). Check whether the published notion of tree is the one you need — a graph-theoretic tree and a simplicial tree acted on by a group are not automatically the same object — and if it is not, build the bridge explicitly rather than assuming it.

## Source research

Milne's *Group Theory* notes (free) and Clara Löh's *Geometric Group Theory* (author-hosted) are open. Rotman *An Introduction to the Theory of Groups*, Robinson *A Course in the Theory of Groups*, Isaacs *Finite Group Theory*, Serre *Trees*, Dixon–Mortimer *Permutation Groups* and Ribes–Zalesskii *Profinite Groups* are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
group theory, gather a rich corpus of lecture notes and other open-web sources,
and run the canonical-coverage harvest over the exact chapter ranges you read.
Where two sources disagree on a convention, record the disagreement and say which
the library adopts and why.

---

## Reminders that cost previous runs real time

- **`items[]` in `research/plan-spec.json` is the only honest signal** of what
  exists. A page with an empty `items` array is a plan, not a library page.
- **Absolute orders in the existing scaffold files are stale.** Use relative
  labels and page ids; the orchestrator computes orders at splice.
- **Check an id before coining it** — `ls items/ | grep -i '<name>'`. Ids are
  immutable on `main` and the unqualified name is often already taken by another
  category.
- **Never ask for a permission, and never let a subagent ask.** Record a blocker
  instead. You already hold every permission you need.
- **Write only the file you own.** Everything else goes in "Amendments owed".
