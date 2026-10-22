# Menasco's four-punctured-sphere normal form: exact source and scope

Research first-review submission. This is not an acceptance record and does not
discharge the normalization argument below by citing its theorem name.

## Primary reading

W. Menasco, *Closed incompressible surfaces in alternating knot and link
complements*, Topology 23 (1984), 37–44,
https://doi.org/10.1016/0040-9383(84)90023-5.

All eight actual printed pages 37–44 were visually read from the retained scans
`research/inverse-problems-knot-theory-all-109-2026-10-19-owner-flyping-round1/sources/menasco1984-public-reader-pages/printed-37.jpg`
through `printed-44.jpg`. The derived eight-page PDF has image pages and no
searchable text. Reading included the complete proofs of Lemmas 1–3, the
four-puncture part of Theorem 3, and Figure 9; the unrelated theorem proofs on
these pages were also read. No assertion of a proof of the six-puncture case is
made: page 43 explicitly leaves its details to the reader.

Thistlethwaite's 1991 Definition 2.4 was separately consulted in the retained
full text, printed page 320. It defines Conway spheres by excluding trivial
tangles, and refers pairwise-essential terminology to Bonahon–Siebenmann. It
does not supply a definition or proof of ordinary geometric incompressibility
being equivalent to fundamental-group injectivity.

## Intended finite supplier

Input: a fixed reduced prime alternating link diagram, its actual bubble
realization of a nonsplit prime link L, and a connected meridional
four-punctured sphere S in the link exterior. S is geometrically
incompressible and pairwise incompressible in the literal page-37 sense:
every embedded disk meeting L once and meeting S precisely in its boundary
has a disk on the puncture-completed S meeting L once with the same boundary.

The intended output is an actual ambient isotopy psi_t of the pair (S^3,L)
which puts S into one of these two forms:

* visible: one upper and one lower intersection circle, each with word P^4,
  and no saddle;
* hidden: two upper and two lower circles, every word PSPS, with exactly two
  actual saddle disks, in the Figure-9 two-saddle pattern.

The isotopy starts at the identity and preserves L setwise. Given surface
parametrization, puncture labels, component labels, and link orientations are
transported through that isotopy. Punctures can slide. There is no promised
pointwise fixing of L, prescribed gates, or an arbitrary patch of S. Applied
to the image h(S), the resulting map is psi_1 composed with the GIVEN h, hence
pairwise isotopic to that given map.

There is no graph normal-form claim, no deduction of essentiality from merely
having nontrivial diagram tangles, and no five-crossing insertion in this
supplier. Those belong to separate interfaces.

## Why the generic genus argument is unnecessary here

Menasco's Lemma 3 uses auxiliary surfaces obtained by deleting innermost
intersection circles and replacing S letters on their neighbors by P letters.
Those operations are NOT isotopies of the original marked surface. They are
legitimate counting devices, but must not be advertised as transporting the
given S.

For an input already known to be a four-punctured sphere, one can instead use
the following direct calculation after the actual normalization and Lemma-2
word exclusion have been earned. Each upper or lower circle has at least two
P letters, and there are exactly four P letters on either sign. Thus each
sign has at most two circles. Disk pieces above and below, saddle disks, and
the ordinary collars give

    2 = chi(capped S) = n_plus + n_minus - n_saddle.

If a saddle exists, its two upper arcs belong to DISTINCT upper circles by
the no-repeated-bubble condition; the same holds below. Consequently
n_plus=n_minus=2 and n_saddle=2. Both upper circles meet both saddle bubbles
once, as do both lower circles; each also has exactly two P letters. The
excluded grouped word PPSS leaves PSPS. If there is no saddle, connectedness
gives one circle on each sign and its word is P^4.

Collapsing the two saddle bubbles in the hidden case gives a sphere-embedded
graph with two vertices and four parallel edges, each edge containing one P.
The upper pairings and the lower pairings are the two opposite adjacent
pairings of its four edges. The complementary regions are four disks. Putting
back the saddle templates gives precisely the two-saddle Figure-9 pattern;
the link in the four complementary regions is unrestricted by this counting
argument. This is a statement about the actual punctured sphere, not a
replacement by another surface with the same Euler characteristic.

## First-review proof supplied

`proof-development.md` now supplies the two actual geometric moves and the
finite gate walk. Its retained prerequisite is ONLY the Statement of
`thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds`.
Cutting the finite-PL exterior along the separating sphere, applying that
Statement to a noninjective boundary inclusion with normal subgroup 1, and
the amalgamated-product normal form give the precise injectivity consequence
used in the meridional slide. No accepted proof body was read or checked.

The Figure-7 check lists all four gates at each saddle and an actual lower
path containing both arcs of the repeated bubble. The generic Lemma-3
auxiliary-surface operation is not used as an isotopy. The exact first
submission is frozen in `first-review-freeze/`; no acceptance is claimed.
