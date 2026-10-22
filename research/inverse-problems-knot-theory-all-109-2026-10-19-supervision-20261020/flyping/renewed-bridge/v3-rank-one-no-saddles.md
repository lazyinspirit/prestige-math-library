# Rank-one W: direct no-saddle proof without Lemma 2.26

2026-10-21. NEW bounded author work for the actual v3 last-Move-10 route.
Research only. The accepted nine-good normalizer is an input, not
rechecked. No use of the false v2 general cap classification.

## Exact inputs and conclusion

Let W be an annulus or Möbius band, and let u=F intersect W and v be the
actual reference-axis family. Assume the supplied old nine-good input:

* u and v are finite families of proper, non-boundary-parallel arcs;
* u is nonempty (the supplied N=b1(F)+b1(W) is at least one);
* common whole arcs w are counted in BOTH families; off w the families
  are transverse, with distinct endpoints;
* no disk of W cut along u union v has one u side and one v side. This
  is the OLD six-good conclusion, before any Move 10, and excludes its
  bigon, triangle, and rectangle possibilities.

Then u has NO transverse intersection with v. Consequently F has no
saddle disks, and no Type I prism can occur. This is the needed rank-one
alternative; it does NOT assert that every parallel arc is common.
One can have additional disjoint parallel noncommon arcs, so an
unqualified claim u=v=w would be unjustified without extra input.

The new full AC after Move 10 is not needed for this alternative. In
particular the proof does not extend the negative-Euler-characteristic
hypothesis of source Lemma 2.26 by assertion.

## Cutting the actual rank-one surface

Every essential proper arc in an annulus joins its two boundary circles.
Cutting along one gives a rectangle whose two opposite sides are copies
of that arc, and whose other sides are intervals of actual boundary W.
Every further disjoint essential proper arc spans those latter sides:
if it had both endpoints on the same actual boundary interval, it and
the intervening boundary subinterval would bound a disk in W, making
it boundary-parallel. Each further cut therefore splits a rectangle
into rectangles.

The same argument holds for a Möbius band. An essential proper arc
cuts it to a disk with four marked sides: two copies of the cut arc
and two intervals of actual boundary W. If another disjoint essential
arc had both ends on one of those actual-boundary sides, its disk in
this rectangle would already be a boundary-parallelism disk in W.
It consequently spans the two actual-boundary sides and again splits
the rectangle into rectangles. Inductively, cutting along ALL u gives
a finite collection of rectangles. Each has two opposite u sides and
two opposite actual-boundary sides. All physical copies are retained;
for example when u has one arc the two u sides can be copies of the
same actual arc, but they are not silently identified in a rectangle.

## A transverse crossing forces an actual forbidden cell

Suppose a noncommon arc b of v crosses u. Start at an actual endpoint
of b on boundary W and follow b up to its FIRST crossing with u.
This initial subarc s lies in one of the cut rectangles R, starts on
an actual-boundary side, and ends on a u side. The two sides meet at
a corner of R. Together with their subintervals to that corner, s
bounds a corner disk T in R. Its boundary uses one u subinterval,
one actual-boundary subinterval, and one v subarc.

The interior of T contains no u. The remaining v pieces in T are
disjoint proper arcs after cutting at its boundary; they cannot end
on the selected v subarc s, since arcs within v are disjoint. They
therefore have their endpoints only on its u side or its actual-boundary
side. There are exactly three cases:

1. A v piece has both endpoints on the u side. Its subarc and the
   intervening u interval bound a disk in T. Choose an innermost such
   disk, passing to a further such disk if necessary. Its interior
   misses both u and v, so it is an actual complementary bigon.
2. A v piece has both endpoints on the actual-boundary side. Those
   are actual endpoints of v: there is no cut across u on that side.
   Thus the piece is an entire v arc. Its disk bounded with the
   boundary interval is a boundary-parallelism disk in W, contrary
   to the essential-arc input.
3. Otherwise every remaining piece joins the u side to the
   actual-boundary side. Choose one cutting off an innermost corner
   disk. This has interior disjoint from all u and v and is an actual
   complementary triangle. If there are no remaining pieces, use T.

These are finite innermost choices. In the first case an innermost
bigon has no hidden v circles, since v consists of proper arcs, and
no u can occur in the interior of the cut rectangle. In the third
case the smaller corner disks are nested toward the same corner.
Thus one of the cases always gives a complementary disk with exactly
one u side and one v side.

The resulting disk embeds back in W: it meets only ONE u-side copy
of R and one adjacent actual-boundary interval, not the opposite
u-side copy or another corner. This remains true when R is obtained
by cutting the annulus or Möbius band along a SINGLE u arc. Hence
this is a physical disk, not a disk created by identifying the two
banks of one arc.

Finally its u side is NONCOMMON. The original first crossing was
with a noncommon u arc, since b is disjoint from every common whole
arc w; the whole u side of R is a copy of that same noncommon arc.
Its v side is likewise noncommon. No protected w side is on the
triangle/bigon boundary. Therefore the boundary really has one
component in u and one in v even when common arcs are counted in
both families. The old six-good input forbids this disk, a contradiction.

It follows that there are no transverse u-v crossings.

## Actual crossing-book consequence

In the supplied standard crossing-book charts, a saddle disk meets
W in an arc transverse to its reference axis once. A positive crossing
band instead contributes the whole common axis; the latter is not a
transverse crossing. Consequently absence of transverse u-v crossings
means absence of every saddle disk of F.

A Type I prism requires precisely a selected old saddle. Thus a
Move 10 from this old nine-good F has no Type I prism. The last-Move-10
argument can use its no-Type-I branch directly, bypassing Lemma 2.26
and its chi(W)<0 assumption. Type II/III may insert common positive
bands, and do not create saddle disks. This conclusion is narrower
than u=v=w and is exactly sufficient for the saddle/Type-I issue.
