# subjects-01 — build the reconciliation report

**You are an expert mathematician auditing thirteen freshly written prose
scaffolds for cross-track consistency.**

Thirteen subject tracks were scaffolded concurrently under
`research/subjects-01-SEAMS.md`, which forbade any track from writing another's
file. Every cross-track finding was therefore parked in an "Amendments owed" or
"Unresolved seam" section instead of being applied. Your job is to collect and
classify all of it into one report the orchestrator can adjudicate from.

**You produce exactly one file: `research/subjects-01-RECONCILIATION.md`.** Do not
edit any track file, any item, `plan-spec.json`, or anything else. You are
analysing, not applying — the orchestrator adjudicates and applies.

## No permission prompts, ever

Owner standing rule (2026-07-30, broadened 2026-08-11). No segment of an `&&`
chain may prompt. Record a blocker instead; never ask.

## Read

`research/subjects-01-SEAMS.md` first — especially §4, the ownership table, which
is the authority on who mints what. Then every `research/plan-*.md`.

## Produce four sections

### 1. Amendments owed — a routing table

One row per amendment: **from track · to track · what it asks for · the exact
section/line it lives in · your assessment**. Assessment is one of:

- `apply` — clearly correct and mechanical
- `conflicts` — two tracks ask for incompatible things; say what each wants
- `stale` — already true on disk, or superseded by a later track
- `owner` — needs a decision only the owner can make (a deletion, an id change, a
  reading-order change)

### 2. Unresolved seams

One row per seam: **the mathematical object · which tracks touch it · what §4 of
the seam contract says · whether the tracks actually complied**. Flag every case
where a track's behaviour contradicts the contract, and every case where the
contract is silent and two tracks each assumed the other would handle it. The
second kind is the dangerous one — nobody reports it, because each side thinks
it is covered.

Known seams to check explicitly, at minimum:
- Birkhoff's ergodic limit function being a conditional expectation
  (`measure-theory` MT-23 vs `probability-theory`)
- Stokes: classical Euclidean vs general on manifolds (`pde` vs
  `differential-geometry`)
- harmonic function theory: plane vs $\mathbb{R}^n$ (`complex-analysis` vs `pde`)
- the $\Gamma$/$\zeta$ supplier contract (`complex-analysis` → `number-theory`)
- Lie theory, assigned WHOLE to `differential-geometry` — verify neither
  `group-theory` nor `abstract-algebra` scaffolded any of it
- $L^p$ and its duality, owned by `measure-theory` — verify
  `functional-analysis` cites rather than re-mints
- de Rham: the complex belongs to `differential-geometry`, the machinery to
  `homological-algebra`

### 3. Duplicate-id triage — the section that needs real reading

These unpublished ids are claimed by two or more tracks. Presence in two files is
**ambiguous**: it may be a genuine double-mint (a defect) or a correct
mint-and-cite (fine). Grep cannot tell them apart. **Open each occurrence and
read what the track claims about it.**

For each id: **which track MINTS it (defines/scaffolds it as its own item), which
merely CITE it, and whether that matches §4.** Verdict per id: `ok-mint-and-cite`,
`DOUBLE-MINT` (name the tracks), or `unclear`.

Start from this list, and extend it — regenerate the candidate set yourself
rather than trusting mine:

```
def-artinian-module def-noetherian-ring def-noetherian-module def-dihedral-group
def-bimodule def-module thm-quotient-space-universal-property def-finite-set
def-hausdorff-dimension def-additive-functor def-chain-complex def-flat-module
ex-p-adic-integers-as-an-inverse-limit def-riemann-zeta-function
def-cochain-complex-in-an-abelian-category
```

### 4. Placement conflicts

Each track was given an ANCHOR page id, not an order. Check that no track's
declared anchor forces a page to sit below something it cites, and list any pair
of tracks whose blocks would interleave badly. Do not compute orders — that is
the orchestrator's splice, and it happens once.

## Standard of care

A finding that is not in your report does not exist. Where you are unsure, say
`unclear` and say why — a hedged finding the orchestrator can check beats a
confident wrong one. Do not invent problems to look thorough: a clean seam
reported as clean is a real result.
