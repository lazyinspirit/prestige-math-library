# subjects-01 — `functional-analysis`

**You are an expert of functional analysis.**

| | |
|---|---|
| track | `functional-analysis` |
| wave | 2 |
| file you own | `research/plan-functional-analysis-track.md` (**NEW**) |
| placement anchor | `measure-theory`'s last page |
| sibling tracks to read first | `research/plan-measure-theory-track.md` (the finished `measure-theory` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- normed and Banach spaces, bounded operators, quotients and complements, finite-dimensional normed spaces and Riesz's lemma
- Hahn–Banach in its analytic and geometric forms, separation of convex sets, and its choice cost stated explicitly
- the Baire consequences: uniform boundedness, open mapping, bounded inverse, closed graph — citing the PUBLISHED Baire category theorem, not re-proving it
- dual spaces and computations of duals, adjoint operators, annihilators, weak and weak* topologies, Banach–Alaoglu, Goldstine, reflexivity, Krein–Milman, Eberlein–Šmulian
- Hilbert spaces: orthogonality, projection onto closed convex sets, orthonormal bases, Bessel/Parseval, Riesz representation for Hilbert space, Lax–Milgram if you place it here rather than in PDE (coordinate with `pde` and say which)
- compact operators, the Fredholm alternative, the Riesz–Schauder theory, Hilbert–Schmidt and trace-class operators
- **spectral theory**: spectrum and resolvent, spectral radius, the spectral theorem for compact self-adjoint operators, then for bounded self-adjoint and normal operators via continuous and Borel functional calculus and projection-valued measures, and unbounded self-adjoint operators with Stone's theorem if sourced
- Banach algebras, Gelfand theory, commutative C*-algebras and the Gelfand–Naimark theorem
- **Fourier analysis**: Fourier series as an orthonormal-basis application, the Fourier transform on L¹, the Schwartz space, Plancherel on L², convolution, approximate identities, inversion
- distributions D′ and S′, their topologies, differentiation of distributions, tempered distributions and the Fourier transform on S′

## What you must NOT mint — cite it instead

- ALL of L^p — including completeness and the duality (L^p)* ≅ L^q — is `measure-theory`'s. Read its finished track file and cite its page and item ids. Do not re-mint L^p.
- Radon–Nikodym, Riesz–Markov–Kakutani and the Radon-measure machinery are `measure-theory`'s.
- the Baire category theorem is published (`cantor-set-baire-and-measure-zero`, 133) and further planned (`complete-metrizability-and-baire`, 277). Ascoli–Arzelà (285) and Stone–Weierstrass (287) are planned in the topology track. Tychonoff, needed for Alaoglu, is published. Cite all of them.
- Sobolev spaces belong to `pde`. You supply distributions and the Fourier transform; it builds W^{k,p} on them.
- `DEFERRED.md` §0 records Riesz's lemma and the non-compactness of the infinite-dimensional closed unit ball as ALREADY in scope — check what exists before minting.

## Verified from disk by the orchestrator, 2026-08-13

- **`DEFERRED.md` §2 is your explicit backlog** and you are expected to discharge it result by result, saying which pair supplies each and giving a reason for anything that stays deferred.
- Definitional probes over all 4172 published items found **zero** definitions of "Banach space" or "Hilbert space". `rn-as-a-normed-space` (167) and `approximation-and-compactness-in-ck` (171) are authored and are the closest existing material — read them.
- The `deferred-functional-analysis` catalogue page sits at plan order 2 with an empty item list. Record in your Amendments-owed section what should become of it.
- **The choice ledger matters unusually much in this track.** Hahn–Banach is strictly weaker than AC; the Baire category theorem is four inequivalent principles over ZF (`DEFERRED.md` §0 states the exact equivalences and cites Blair 1977, Fossy–Morillon 1998, Bacsich 1972). Every item using either must say which version it uses and what that version costs.

## Source research

Brezis *Functional Analysis, Sobolev Spaces and PDE*, Rudin *Functional Analysis*, Conway *A Course in Functional Analysis*, Lax *Functional Analysis*, Reed–Simon *Methods of Modern Mathematical Physics* vol. 1. Tao's 245B/245C lecture notes and several university graduate FA note sets are openly available and make good harvestable secondary backings.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
functional analysis, gather a rich corpus of lecture notes and other open-web sources,
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
