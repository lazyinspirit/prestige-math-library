# subjects-01 — `abstract-algebra`

**You are an expert of abstract algebra.**

| | |
|---|---|
| track | `abstract-algebra` |
| wave | 1 |
| file you own | `research/plan-algebra-track.md` **and** `research/plan-algebra-track-expansion.md` (**ENRICH**) |
| placement anchor | the Galois block goes after `algebraic-extensions-degree-and-finite-fields-examples`; everything else enriches in place |
| sibling tracks to read first | _none — you are in wave 1 and depend on no sibling track_ |

This file already exists and is substantial. **Enrich it — do not restart it.** Read it fully first, reconcile every claim in it against `research/plan-spec.json` and the actual item files, and extend. Where you find a stale claim, correct it in place and say so in your summary.

---

## Your remit — what you mint

- **GALOIS THEORY — the headline gap, see the findings below**: automorphism groups of extensions, separability, normality, the Galois correspondence, the primitive element theorem, finite fields and Frobenius, cyclotomic extensions, Kummer theory, solvability by radicals and the insolubility of the quintic, the Galois-theoretic proof of the fundamental theorem of algebra
- linear-algebra completion: inner product spaces and orthogonality, diagonalisation and the minimal polynomial, triangularisation and Jordan canonical form, the finite-dimensional spectral theorem and the SVD
- modules: tensor products of modules, chain conditions and semisimple modules, Wedderburn–Artin, modules over a PID and the canonical forms
- `def-noetherian-module`, `def-artinian-module` **and** `def-noetherian-ring` — all three are minted by you on the chain-conditions page, and `commutative-algebra` cites all three
- representation theory of finite groups: the group algebra, Maschke, complete reducibility, characters and orthogonality, induced representations and Frobenius reciprocity
- symmetric polynomials (planned, unauthored at 58/59)

## What you must NOT mint — cite it instead

- Lie groups and Lie algebras — including the ABSTRACT structure theory of Lie algebras — belong entirely to `differential-geometry`. Do not open that block.
- advanced and geometric group theory belongs to `group-theory`; you keep AG-1…AG-4 (A_n simplicity, Jordan–Hölder, semidirect products, Sylow) because they are already in your file
- Noetherian ring THEORY — Hilbert basis onward — belongs to `commutative-algebra`. You mint the definitions; it builds the theory.
- the field of fractions and localisation is PUBLISHED at order 53.2 with 22 items. Do not redefine it.

## Verified from disk by the orchestrator, 2026-08-13

- **There is no Galois theory anywhere in the 448-page plan.** Verified by the orchestrator from disk: no correspondence, no solvability by radicals, no insolubility of the quintic, no primitive element theorem. What IS published is the raw material — splitting fields, `def-normal-algebraic-extension`, `thm-real-automorphisms-of-the-complex-numbers`, `cor-stem-fields-are-uniquely-f-isomorphic`, `thm-universal-property-of-adjoining-an-irreducible-root`, `prop-splitting-field-of-x-n-minus-a`. Open every one of them before scaffolding on top.
- **Orders 98–101 are the only free integers below 443**, and they sit exactly between `algebraic-extensions-degree-and-finite-fields` (96/97, planned, unauthored) and `modules-and-module-homomorphisms` (102, authored). That is a two-A/B-pair hole in precisely the right place for the Galois correspondence and solvability by radicals. Whether two pairs suffice is your call — say so explicitly and justify it; if Galois needs four pairs, scaffold four and let the orchestrator place them.
- Several planned linear-algebra and module pages are unauthored: `inner-product-spaces-and-orthogonality` (94), `diagonalisation-and-the-minimal-polynomial` (88), `triangularisation-and-jordan-canonical-form` (90), `the-spectral-theorem-and-singular-value-decomposition` (141), `tensor-products-of-modules` (106), `chain-conditions-and-semisimple-modules` (108), `modules-over-a-pid-and-canonical-forms` (110). Your file already scaffolds most of them — enrich rather than restart, and reconcile against what is actually there.
- Your file quotes STALE absolute orders throughout (LA-1 says "order 68"; the page is at 72). Do not propagate them. If you touch a section, convert its heading to a relative label and note the id.

## Source research

Milne's *Fields and Galois Theory* notes (free, author-hosted) and Dummit–Foote are natural primaries; Lang *Algebra*, Artin *Algebra*, Isaacs *Algebra: A Graduate Course*, Hungerford, and Milne's other notes are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
abstract algebra, gather a rich corpus of lecture notes and other open-web sources,
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
