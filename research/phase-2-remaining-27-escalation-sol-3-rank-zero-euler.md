# Escalation resolution: rank-zero Euler normalization

Run: `phase-2-remaining-27`

Lane: `escalation-sol-3`

Date: 2026-09-20

## Decision

Restrict the statements $u=1$, $e_{\rm Th}(0_B)=1$, and “the Thom map is the
identity” to the zero bundle with its **standard unit orientation**.  Retain the
existing cohomological $R$-orientation interface for an arbitrary supplied
rank-zero generator.

For the rank-zero bundle, $D(0_B)=B$, $S(0_B)=\varnothing$, and both the
relative-to-absolute map and zero section are identities.  A supplied
orientation is therefore a class $o\in H^0(B;R)$ whose value on each component
generates the free rank-one $R$-module $R$, hence is a unit.  Fiber
normalization gives
$$
u=o,\qquad e_{\rm Th}(0_B,o)=s^*j^*(u)=o.
$$
The rank-zero Thom map is multiplication by $o$, with inverse multiplication
by the componentwise class $o^{-1}$.  It is the identity when $o=1$ and is
multiplication by $-1$ when $R=\mathbb Z$ and the standard orientation is
reversed.

The rejected option was to make the rank-zero Euler class independent of the
supplied orientation.  That would contradict the defining composite
$e=s^*j^*u$ when $j$ and $s$ are identities, or else require a special
rank-zero exception that discards the supplied Thom generator.  It would also
contradict `thm-naturality-and-uniqueness-of-thom-classes`, Proof 3.1, which
correctly sends the rank-zero integral generator $1$ to $-1$ under reversal.
The standard-unit restriction changes neither interface and is therefore the
minimal consistent repair.

## Repaired witnesses

`def-thom-euler-class-of-an-oriented-vector-bundle`, Definition, now states:

> The rank-zero assertion in the preceding paragraph is restricted to the
> standard unit orientation. For an arbitrary supplied rank-zero orientation
> $o\in H^0(B;R)$, fiber normalization gives $u=o$; since $j$ and $s$ are
> identities, $e_{\rm Th}(0_B,o)=o$.

`thm-thom-isomorphism-for-oriented-vector-bundles`, Proof 4.1, now states:

> For $n=0$, identify the supplied orientation with the class
> $o\in H^0(B;R)$ whose value on every component is a unit. Fiber
> normalization gives $u=o$, so the displayed untwisted Thom map is
> multiplication by $o$ and is inverted by multiplication by the
> componentwise inverse $o^{-1}$.

These clauses agree with
`def-r-oriented-vector-bundle-and-orientation-local-system`, preserve the
rank-zero reversal in `thm-naturality-and-uniqueness-of-thom-classes`, and
support the repaired run theorem's explicit restriction to the standard unit
orientation on every rank-zero input.

## Authoritative sources

- J. P. May, *A Concise Course in Algebraic Topology*, Chapter 23 section 5,
  printed pp.194–196:
  https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf

  May defines an $R$-orientation/Thom class by restriction to a generator on
  every fiber and states that cup product with that chosen class is the Thom
  isomorphism.  In the preceding trivial-bundle calculation he separately
  selects the suspension of the unit.  This supports distinguishing the
  standard unit orientation from an arbitrary supplied generator.

- Allen Hatcher, *Vector Bundles and K-Theory*, section 3.2, printed pp.89 and
  91–92:
  https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf

  Hatcher writes the Thom isomorphism as cup product with a class restricting
  to a generator on every fiber, defines the Euler class by passing that Thom
  class to absolute cohomology and restricting it to the zero section, and
  states that choosing the opposite integral orientation changes the Thom
  class's sign.  These clauses support the dependence of the rank-zero Euler
  class and Thom map on the supplied generator.

The formulas $u=o$, $e(0_B,o)=o$, and $a\mapsto ao$ are the direct rank-zero
specializations of these definitions; neither source is represented as
explicitly discussing this repository's rank-zero counterexample.

## Hashes and licence rows

The ledger hashes are the `itemHashGuard` form, which excludes the complete
`verification` block and matches the `pre-step7` prefixes in
`research/phase-2-remaining-27-touches.json`.

| Item | Pre-Step-7 guard SHA-256 | Repaired guard SHA-256 |
|---|---|---|
| `def-thom-euler-class-of-an-oriented-vector-bundle` | `e1992ea0189f69fd7f08a90fb05ab7aae34a5e6649e500b985e0d392e4664905` | `b21d5018e61785898b4f6dd57891d11ec273380503845b8282ee5c16670e7006` |
| `thm-thom-isomorphism-for-oriented-vector-bundles` | `a077098eb3957ad618141cde63aba594e00591dd0e4533b5b06c898695b605f8` | `75a979787fbd251e145fe4c139e9ef50d95d20d1d22864f1df616b93b773b092` |

For byte-level comparison, the raw SHA-256 values changed from
`cdf9e3b3662e2925233b9724a69f67adf94f53141fe0c6364c35a92a49f53592`
to `8e79621c8fa23ec8dbd1a4453b4a779d3b500de78f9fff9c3772305f6f72144a`
for the definition, and from
`9621d8496fbafcd78e2cbc08545aab717e6950d66bb7e0f62a784f09d561dd53`
to `3a2e10b9ce06e658571f6eaa85eddd62aa4add38d8c53debd372cb1151fb0283`
for the theorem.

Two `kind:"repaired"` rows were appended through
`tools/published-repairs.mjs` to
`research/phase-2-remaining-27-step7-published-repairs.jsonl`.  Their
`found_via` item has two real `keep:false` judge rows, including the rank-zero
rejection at `7-rejudge`.

## Focused checks

- `node tools/prosecheck.mjs` on the two repaired items: exit 0; 2 files,
  0 errors, 0 warnings.
- The three batch-10 contract entries with direct citation witnesses to the
  repaired items were checked individually with
  `node tools/proof-contract.mjs ... --strict --items ...`.
  `def-euler-class-by-zero-section-pullback-of-the-thom-class` and
  `thm-thom-identity-for-stiefel-whitney-classes` pass.  The
  `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class` contract exits 1
  because its F2 quote is an old statement of the separate draft item
  `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`.
  That mismatch predates and is independent of these two published edits; the
  citation witness to the repaired Euler definition still occurs exactly.
  This lane did not edit the foreign contract carrier.
  A source-section extraction restricted to the two repaired suppliers found
  all 3 of their batch-10 citation witnesses as exact matches.
- `node tools/depcheck.mjs`: exit 1 with two repository-level errors, neither in
  a repaired item: an unresolved aggregate wikilink in
  `def-fleissner-hyp-covering-interface` and the pre-existing two-page cycle
  between the root-systems and highest-weight pages.
- `node tools/step7-terminal-resolution.mjs queue-status --run
  phase-2-remaining-27 --queue
  research/phase-2-remaining-27-step7-fa-b-round-2.json`: exit 0; positions
  1–12 were `current` at the final check and `pending: 62 of 74`. In
  particular, the completed position-1 Euler receipt remained current according
  to the required queue tool; no completed group-b receipt was reported stale.
- `git diff --check`: exit 2 because the concurrently modified, foreign file
  `items/thm-naturality-orientation-sign-and-whitney-product-for-euler-classes.md`
  has trailing whitespace on line 36.  The scoped check on this lane's tracked
  edits passes.  This lane did not alter that hash-bound run item merely to fix
  foreign whitespace.

No item dependency or batch frontier-input row changed, so the frontier ledger
did not require a refresh.

## Frozen certification and owner obligation

Both mathematical carriers changed.  The definition's 2026-09-14 embedded
judge record and owner audit, and the theorem's 2026-09-14 owner audit, are
therefore historical rather than current evidence for the repaired text.  The
round-2 group-b queue tool did not mark any completed terminal receipt stale.

**Each changed published item now owes one current judge verdict — a paid Terra
call the terminal stage cannot buy, which only the owner can authorise.**  No
judge verdict, pass stamp, final-adjudicator terminal receipt, or closure file
was written by this lane.
