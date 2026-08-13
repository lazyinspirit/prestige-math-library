# subjects-01 — `commutative-algebra`

**You are an expert of commutative algebra.**

| | |
|---|---|
| track | `commutative-algebra` |
| wave | 2 |
| file you own | `research/plan-commutative-algebra-track.md` (**NEW**) |
| placement anchor | `modules-over-a-pid-and-canonical-forms-examples` — above the Galois block, so Galois theory is available to you |
| sibling tracks to read first | `research/plan-algebra-track-expansion.md` (the finished `abstract-algebra` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- Noetherian and Artinian rings: the Hilbert basis theorem, Noetherian induction, the Artin–Rees lemma, the Krull intersection theorem
- prime and primary ideals, primary decomposition, associated primes, the spectrum and the Zariski topology, radicals and the Nullstellensatz
- localisation as a technique: local rings, local properties, localisation of modules, support
- integral extensions, going-up and going-down, Noether normalisation, Hilbert's Nullstellensatz in its several forms
- discrete valuation rings, **Dedekind domains**, invertible and fractional ideals, unique factorisation of ideals, the class group at the level of general Dedekind theory
- dimension theory: Krull dimension, systems of parameters, Hilbert–Samuel polynomials, the dimension theorem
- completions, inverse limits, Hensel's lemma, the Cohen structure theorem if sourced
- flatness, faithful flatness, and the local criterion
- **a homological block placed AFTER `homological-algebra`**: Koszul complexes, regular sequences, depth, Cohen–Macaulay and regular local rings, Auslander–Buchsbaum, Serre's regularity criterion. Scaffold it as a clearly separated block and say so, because its anchor is different from the rest of your track.

## What you must NOT mint — cite it instead

- `def-noetherian-module`, `def-artinian-module` and `def-noetherian-ring` are all minted by `abstract-algebra` on its chain-conditions page. Read its finished file and cite them; do not re-mint.
- the field of fractions and localisation is **PUBLISHED** — `the-field-of-fractions-and-localisation`, order 53.2, 22 items. Open it, build on it, never redefine it.
- rings, ideals, quotient rings, Euclidean domains, PIDs, UFDs and polynomial rings are all published (46–52). Modules and free modules with exact sequences are published (102, 104).
- the number-field application — rings of integers, class group, unit theorem, ramification — belongs to `number-theory`, which cites your Dedekind theory. You do the general theory; it does the arithmetic.
- Ext, Tor and derived functors belong to `homological-algebra`.

## Verified from disk by the orchestrator, 2026-08-13

- Definitional probes found **zero** items defining "Noetherian" anywhere in the published corpus. This is greenfield above the published ring theory.
- The published ring band is substantial and you must read it rather than assume: `rings-subrings-and-integral-domains` (46, 28 items), `ideals-and-quotient-rings` (48, 24), `euclidean-domains-pids-and-unique-factorisation` (50, 7), `polynomial-rings-and-roots` (52, 44), `the-field-of-fractions-and-localisation` (53.2, 22).
- `euclidean-domains-pids-and-unique-factorisation` at order 50 carries only **7 items**, which is thin for its subject next to its 24–44-item neighbours. Investigate; if it is genuinely thin, record an enrichment amendment rather than working around it.
- Your homological block creates the one genuine ordering tension in this track: the rest of commutative algebra sits low, in the algebra band, but depth and Cohen–Macaulay theory need derived functors that live at 381–392. Split the track rather than forward-referencing the whole homological apparatus, and say exactly which results fall on each side of the split.

## Source research

The Stacks Project (free), Altman–Kleiman *A Term of Commutative Algebra* (free) and Milne's commutative algebra notes (free) are fully open. Atiyah–Macdonald *Introduction to Commutative Algebra*, Eisenbud *Commutative Algebra with a View Toward Algebraic Geometry* and Matsumura *Commutative Ring Theory* are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
commutative algebra, gather a rich corpus of lecture notes and other open-web sources,
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
