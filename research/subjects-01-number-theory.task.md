# subjects-01 — `number-theory`

**You are an expert of number theory.**

| | |
|---|---|
| track | `number-theory` |
| wave | 3 |
| file you own | `research/plan-number-theory-track.md` (**NEW**) |
| placement anchor | THREE separate blocks — elementary/reciprocity after `splitting-fields-examples`; algebraic after `commutative-algebra`'s last page; analytic after `bloch-schottky-and-picard-examples` |
| sibling tracks to read first | `research/plan-commutative-algebra-track.md` (the finished `commutative-algebra` track), `research/plan-algebra-track-expansion.md` (the finished `abstract-algebra` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- elementary number theory above the published base: primitive roots and the structure of (ℤ/nℤ)*, **quadratic residues, the Legendre and Jacobi symbols, and quadratic reciprocity** with at least one complete proof, sums of squares, Pell's equation and continued fractions
- arithmetic functions: multiplicativity, Möbius inversion in the number-theoretic setting, Dirichlet convolution, average orders, elementary estimates for π(x) — Chebyshev and Mertens
- p-adic numbers and valuations: absolute values on ℚ, Ostrowski's theorem, completions, Hensel's lemma, local–global as a theme with Hasse–Minkowski stated honestly
- **algebraic number theory**: number fields, rings of integers, integral bases and the discriminant, unique factorisation of ideals in a Dedekind domain applied to O_K, splitting and ramification of primes, the decomposition and inertia groups, the class group and finiteness of the class number, Minkowski's bound, Dirichlet's unit theorem, cyclotomic fields and quadratic reciprocity revisited via Frobenius
- **analytic number theory**: Dirichlet series and Euler products, Dirichlet characters and L-functions, Dirichlet's theorem on primes in arithmetic progressions, the prime number theorem via the zero-free region, and the explicit formula if sourced

## What you must NOT mint — cite it instead

- **`commutative-algebra` owns Dedekind domains, DVRs, integral extensions, going-up/down and completions.** Read its finished file; you apply its theory to O_K rather than rebuilding it.
- **`abstract-algebra` owns Galois theory** — the correspondence, finite fields, cyclotomic extensions, Kummer theory. Read its finished file. Your Frobenius and ramification theory rests on it.
- **`complex-analysis` owns the Riemann zeta function as a function-theoretic object** (its planned page 345) — analytic continuation, the functional equation, the Γ-function (343). You cite those for the analytic machinery and own the arithmetic consequences.
- the published elementary base is real and authored: `divisibility-gcd-and-bezout` (26, 26 items), `primes-and-the-fundamental-theorem-of-arithmetic` (28, 18), `congruences-and-the-chinese-remainder-theorem` (30, 23). Read all three; do not re-mint gcd, Bézout, Euclid's lemma, unique factorisation or CRT.

## Verified from disk by the orchestrator, 2026-08-13

- Definitional probes found **zero** published items mentioning "quadratic residue" or "quadratic reciprocity". The single most famous elementary theorem in the subject is absent, and it needs only the published congruence material plus finite fields.
- **Your track splits across three widely separated anchors** and that is the defining structural fact about it. Elementary and reciprocity material can sit low, immediately above the published congruence pages. Algebraic number theory cannot land before `commutative-algebra`. Analytic number theory cannot land before the complex-analysis ζ pages. Scaffold three clearly separated blocks, say which results fall in each, and do not let a low block forward-reference a high one.
- `plan-algebra-track.md` already contains NT-1, NT-2 and NT-3 sections covering the published elementary pages. Read them as input; that file belongs to `abstract-algebra` and you may not edit it.
- The Γ-function (343) and ζ (345) are PLANNED and unauthored in the complex-analysis track. Your analytic block therefore rests on pages that do not exist yet — that is legal because they sit below your anchor, but state the dependency explicitly and check `complex-analysis`'s file for what it actually promises.

## Source research

Milne's *Algebraic Number Theory* notes (free, author-hosted) and Stein's notes are open and harvestable. Ireland–Rosen *A Classical Introduction to Modern Number Theory*, Neukirch *Algebraic Number Theory*, Marcus *Number Fields*, Apostol *Introduction to Analytic Number Theory*, Davenport *Multiplicative Number Theory* and Hardy–Wright are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
number theory, gather a rich corpus of lecture notes and other open-web sources,
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
