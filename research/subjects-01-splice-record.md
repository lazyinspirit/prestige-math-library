# subjects-01 — the splice

Applied 2026-08-14. One pass, keyed by **anchor page id resolved from the live
spec**, never by composing shift tables. Fractional orders mean **nothing was
renumbered**: every pre-existing page kept its order, so no order quoted anywhere
else went stale.

## Result

| | |
|---|---|
| pages before → after | **448 → 894** |
| pairs spliced | **237** (474 pages) |
| planned band pages superseded | 28 (orders 365–392, all empty `items[]`) |
| max order | 442 → **516** |
| authored pages touched | **none** |

`validate-plan` passes: declared page order acyclic and consistent, no item-level
cycles, forward references, B-page dependencies or unresolved ids. `depcheck`,
`fwdcheck` and `rendercheck` all pass. The 297 `redundant-prereq` warnings are
**pre-existing** — there were 310 before the splice, and **zero** of the survivors
names a newly created page.

## Layout

Each block sits immediately after its anchor, inside that anchor's integer gap.

| block | pairs | anchor | orders |
|---|---:|---|---|
| number theory, elementary (NT-1…8) | 8 | `splitting-fields-examples` (57) | 57.001–57.016 |
| group theory, structure (GT-1…9) | 9 | `sylow-theorems-and-nilpotent-groups-examples` (71) | 71.001–71.018 |
| abstract algebra, Galois (GA-1…4) | 4 | `algebraic-extensions-degree-and-finite-fields-examples` (97) | **98, 99, 100, 101** then 101.2–101.8 |
| commutative algebra (CA-1…18) | 18 | `modules-over-a-pid-and-canonical-forms-examples` (111) | 111.001–111.036 |
| number theory, algebraic (NT-17…24) | 8 | chained after commutative algebra | 111.037–111.052 |
| group theory, modular (GT-18…20) | 3 | `induced-representations-and-frobenius-reciprocity-examples` (150) | 150.001–150.006 |
| measure theory (MT-1…23) | 23 | `stone-weierstrass-general-examples` (288) | 288.001–288.046 |
| functional analysis (FA-1…25) | 25 | chained after measure theory | 288.047–288.096 |
| probability (PT-1…22) | 22 | chained after functional analysis | 288.097–288.140 |
| PDE (PDE-1…26) | 26 | chained after probability | 288.141–288.192 |
| group theory, geometric (GT-10…17) | 8 | `applications-of-the-fundamental-group-examples` (302) | 302.001–302.016 |
| number theory, analytic (NT-9…16) | 8 | `bloch-schottky-and-picard-examples` (348) | 348.001–348.016 |
| monoidal/abelian categories (MA-1…18) | 18 | band start 365 | 365.001–365.036 |
| homological algebra (HA-1…17) | 17 | chained after MA | 365.037–365.070 |
| group theory, cohomological (GT-21…23) | 3 | chained after HA | 365.071–365.076 |
| differential geometry (DG-1…37) | 37 | free integer space | **443–516** |

**The whole analysis band stays inside `(288, 289)`** — 192 pages at three
decimals. That is deliberate and is the reason SEAMS §3 chose that anchor: it
puts measure theory, $L^p$ and the Fourier machinery *below* complex analysis
(303–356), so complex analysis can cite Hardy spaces and boundary values instead
of forward-referencing them.

**Differential geometry takes clean integers at 443+** rather than crowding
392.x. Its anchor is a lower bound (`spectral-sequences`, now at 365.0xx), so any
order above the homological band is legal, and 443 was the one free integer below
the old ceiling with open space above it.

## Group theory has FOUR blocks, not the two SEAMS §3 listed

The scaffold is explicit: "the cohomological block is deliberately placed after
homological algebra rather than pointed backward from the earlier structure
block." GT-18…19 additionally need abstract algebra RT-4 (order 150) *and* the
commutative-algebra completion machinery (111.x), so they anchor at **150**, the
later of the two. Anchoring them after commutative algebra alone would have
forward-referenced RT-4.

## The superseded band

Orders 365–392 held 28 planned pages with empty `items[]`. The monoidal/abelian
and homological tracks replace them with a finer decomposition; 5 ids are kept
(`abelian-categories`, `chain-complexes-and-homology`,
`projective-and-injective-resolutions`, `derived-functors`, `spectral-sequences`)
and 9 A-page ids retire. **Every one of the 19 `requires` edges into a retired id
came from inside the band itself, and no authored page consumed any of them**, so
the supersession is self-contained — that was measured before the edit, not
assumed.

## What is deliberately NOT here

- **Complex analysis.** Its own decision CX-D2 states: "CA-1–CA-23 and SC-1–SC-4
  already occupy their plan band; this commission performs no splice and no
  renumber." It is an in-place enrichment of existing pages.
- **Combinatorics.** In place within its existing 191–228 and 393–442 bands.

## Open, and owner-gated

**Seven new `category` values** — `measure-theory`, `functional-analysis`,
`probability`, `pde`, `differential-geometry`, `group-theory`,
`commutative-algebra` — carry 348 pages between them. `category` is the
`library/<category>/` directory and the index group, and the app repo's
`web/lib/library-categories.ts` is **frozen presentation**. Nothing renders today
because every new page has empty `items[]`, but **a style must be added there
before any of these levels publishes**, and that is an owner decision, not one to
make from this repo.

**`requires` is the reading-order chain**, each A page requiring the previous
pair's B page and each B page its own A page. That is the honest minimum: it is
what the anchors actually assert. The scaffolds themselves prescribe the
refinement — number theory's §12, for instance: "For each pair, resolve
`requires` to exact ids, re-run collision checks". Each level does that when it is
built.
