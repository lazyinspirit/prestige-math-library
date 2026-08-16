# Batch 2 of run `frontier-15` — Sylow, and chain conditions with Wedderburn–Artin

Two A/B pairs, both `abstract-algebra`. You own all four pages.

## READ THIS FIRST — the base designs are Part I; Part II amends both

Both pairs live in `research/plan-algebra-track-expansion.md`, and that file
**amends its own Part I sections**. Reading only the base section will make
you re-mint published items and plan withdrawn ones. Read the enrichment
sections §II.3 and §II.5 in full before touching a scaffold. Part I's
absolute orders are all stale (§II.1.b) — orders below are today's spec.

## Pair A — Sylow

| | |
|---|---|
| A page | `sylow-theorems-and-nilpotent-groups` · order **70** |
| B page | `sylow-theorems-and-nilpotent-groups-examples` · order **71** |
| requires | `semidirect-products-and-automorphism-groups`, `group-actions-and-cayleys-theorem`, `primes-and-the-fundamental-theorem-of-arithmetic` — all published |
| base design | §AG-4, line ~961 |
| **amendment** | **§II.3, line ~2101 — controlling** |

§II.3 withdraws, in full: the nilpotency definitions and series theorems
(published on `composition-series-and-solvable-groups`) and the p-group
toolkit — fixed-point congruence, Cauchy, Z(P)≠1, order-p² abelian, the
class equation (published on `group-actions-and-cayleys-theorem`). §II.3.a
lists the exact published ids: **open each one you cite**. Part I's
circularity trap (Cauchy vs Sylow I) is discharged — Cauchy is published
below, so Sylow I may use it freely.

What the page still owns: Sylow I/II/III, `N_G(N_G(P)) = N_G(P)`, the
normaliser condition, the **Sylow characterisation of nilpotence** (the one
nilpotency theorem that genuinely needs Sylow — it is how the page earns its
title), the order-pq classification (consumes AG-3's isomorphic-semidirect-
products lemma), no-simple-group counts, and — per §II.3.b — the
**index-p subgroup existence theorem** for finite p-groups. That last item is
load-bearing for a future page (§II.8 input (4)): the published
`cor-index-p-subgroups-of-finite-p-groups-are-normal` presupposes such a
subgroup and does not produce one. Scaffold the existence form.

## Pair B — chain conditions

| | |
|---|---|
| A page | `chain-conditions-and-semisimple-modules` · order **108** |
| B page | `chain-conditions-and-semisimple-modules-examples` · order **109** |
| requires | `tensor-products-of-modules`, `composition-series-and-solvable-groups` — both published |
| base design | §MOD-4, line ~1248 |
| amendments | §II.5 (Wedderburn route, radical denial), §II.1.d (re-homed shortfalls), §II.5.c (integrality block moved here) |

**This page is the run's split risk, and the design says so twice**: the
overview table says "size this at step 0; it is the page at risk of the
60-item ceiling", and trap (iv) says "if the integrality block of MOD-2 is
moved here, split it out instead" — and §II.5.c DID move it here, along with
the §II.1.d re-homes (module isomorphism/correspondence theorems, End_R(M),
End_R(R) ≅ R^op, maximal submodules). Count honestly at scaffold time. If
the A page exceeds 60, **split into two A pages each with its own B
companion** — `validate-plan` enforces it at step 2 and a split after
authoring is a rewrite. Splitting is never dropping.

Denials that bind you: **no Jacobson radical anywhere** (denial 8 — semisimple
ring is defined as `_R R` semisimple; the Crawley-Boevey route to
Wedderburn–Artin needs the radical nowhere, §II.5.b); state the left/right
convention once and check the side at every use; the Zorn cost in the
semisimple equivalences goes in Facts, with the finite-length case
choice-free.

The `Z(p^∞)` FS item: check constructibility in scope before scaffolding it;
if out of scope, DROP with a note and keep the `Z` asymmetry example — the
design licenses exactly that disposition.

## Sources

Part I §13 backed these pairs primarily on Wikipedia, which the source-depth
rule now forbids. The discharged harvest is indexed at **companion §II.12**
— work from those sources, at least one textbook/monograph per pair, and
record your exact ranges.

**No permission prompts of any kind**, including inside an `&&` chain.
