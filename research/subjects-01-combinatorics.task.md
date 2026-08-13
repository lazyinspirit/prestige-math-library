# subjects-01 — `combinatorics`

**You are an expert of combinatorics.**

| | |
|---|---|
| track | `combinatorics` |
| wave | 1 |
| file you own | `research/plan-combinatorics-and-categories.md` (**ENRICH**) |
| placement anchor | in place, within the existing 191–228 band |
| sibling tracks to read first | _none — you are in wave 1 and depend on no sibling track_ |

This file already exists and is substantial. **Enrich it — do not restart it.** Read it fully first, reconcile every claim in it against `research/plan-spec.json` and the actual item files, and extend. Where you find a stale claim, correct it in place and say so in your summary.

---

## Your remit — what you mint

- the CB-* and GT-* sections of your file, and only those
- enumerative combinatorics: generating functions ordinary and exponential, linear recurrences, lattice paths and Catalan numbers, set partitions and Stirling numbers, integer partitions and the twelvefold way, incidence algebras and Möbius inversion, Burnside and Pólya, the transfer-matrix method, Lagrange inversion, species or analytic combinatorics if you can source them properly
- extremal and structural graph theory beyond what is authored: Turán-type problems, the regularity lemma and its applications, expansion, minors and the Kuratowski/Wagner circle, perfect graphs
- algebraic and spectral methods: linear-algebra methods in combinatorics, block designs and finite projective planes, algebraic and spectral graph theory (223–228 are planned and unauthored)
- the probabilistic method — you own it, including its finite-probability base at orders 220.2 and 221
- design theory, Ramsey theory beyond the authored page, and additive combinatorics if properly sourced

## What you must NOT mint — cite it instead

- the category-theory sections of your own file are NOT yours to edit — `monoidal-abelian-categories` and `homological-algebra` own that material and write their own new files. Leave those sections alone.
- measure-theoretic probability belongs to `probability-theory`; you keep finite probability and the probabilistic method
- the Erdős–Hajnal block (393–442) is a separate, already-scaffolded programme — read it, do not duplicate it

## Verified from disk by the orchestrator, 2026-08-13

- A large amount is already authored: chains/antichains/Sperner/Dilworth (191), formal power series (193), incidence algebras and Möbius inversion (203), graphs and connectivity (207), trees (209), Eulerian/Hamiltonian (211), matchings and flows (213), Ramsey (217), extremal graph theory (219), finite probability (220.2, 221), plane graphs and five-colour (357), induced subgraphs and hereditary classes (393). Read them before scaffolding.
- **`graph-colouring` at order 215 is authored with only 4 items** — anomalously thin next to its neighbours (which run 20–35). Investigate and, if it is genuinely thin, scaffold the enrichment as an amendment.
- Planned but unauthored in your band: linear recurrences (195), lattice paths and Catalan (197), set partitions and Stirling (199), integer partitions and the twelvefold way (201), Burnside and Pólya (205), linear-algebra methods (223), block designs and finite projective planes (225), algebraic and spectral graph theory (227). These are your first-class enrichment targets.
- Binomial coefficients and elementary counting ARE published now (`finite-counting-and-binomial-coefficients`, order 20; `inclusion-exclusion-and-the-pigeonhole-principle`, 22). The gap your file records as open is closed.

## Source research

Stanley *Enumerative Combinatorics* vol. 1 (author-hosted version, free), Flajolet–Sedgewick *Analytic Combinatorics* (free) and Diestel *Graph Theory* (free, author-hosted) are all fully open. Bóna, van Lint–Wilson, Bollobás *Extremal Graph Theory*, Alon–Spencer *The Probabilistic Method* and Godsil–Royle *Algebraic Graph Theory* are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
combinatorics, gather a rich corpus of lecture notes and other open-web sources,
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
