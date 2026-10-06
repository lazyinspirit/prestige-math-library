# Batch 23: independent center–saddle proof attempt

## Conclusion

The compressible-leaf theorem should remain in full strength. The best modern
source found is Candel–Conlon, *Foliations II*, §9.2: it treats exactly the
implication “a leaf is not π₁-injective ⇒ some leaf has a vanishing cycle,”
and the visible proof text uses a finite induction on centers and compact
saddle graphs. This is a better route than trying to take a limit of Ranz's
individual immersed basin-filling disks. It keeps the original essential
boundary loop fixed and appears to avoid any convergence assertion about such
disks.

I could not independently certify the entire proof from the available copy:
the book is under Google Books limited preview, and the page images for the
critical part of Proposition 9.2.5 are unavailable. The source evidence below
supports the finite graph strategy and its cases, but it does not let me claim
that every transition in the tangential-boundary version has been verified.
The smallest remaining local proof obligation is the **tangential-boundary
finite graph reduction lemma** stated below. This is a missing exposition
check, not a mathematical obstruction or a reason to narrow the theorem.

## Authoritative source and what was accessible

Alberto Candel and Lawrence Conlon, *Foliations II*, Graduate Studies in
Mathematics 60, American Mathematical Society, 2003, ISBN 978-0-8218-0881-8.
Official listing: <https://pubs.ams.org/ebooks/gsm/060/>; book page:
<https://bookstore.ams.org/view?ProductCode=GSM/60>; Google Books limited
preview: <https://books.google.com/books?id=GLOIAwAAQBAJ>.

The preview snippets expose the following, but not the full text of every
page:

- Theorem 9.1.3, printed p. 287, states the Novikov equivalence between a
  Reeb component, a non-π₁-injective leaf, and a vanishing cycle. Proposition
  9.2.5, beginning on p. 294, is explicitly identified as the implication
  from non-π₁-injectivity to a vanishing cycle.
- The proof of Lemma 9.2.4 on pp. 291–294 defines the relevant set `D` as
  closures of open `F*`-saturated disks containing no limit cycles and whose
  boundary is an essential closed orbit or an essential compact separatrix
  graph. It says `D` is nonempty, lists disks and pinched annuli as the only
  possibilities, proves that each member contains a center, and proceeds by
  induction on its number `k` of centers.
- The exposed text distinguishes a disk with a saddle graph from a pinched
  annulus with figure-eight boundary. In the latter case it compares the two
  based loops through the saddle. If both are essential, a lobe disk with at
  most `k−1` centers is used for induction. If both are inessential, the
  text enlarges through a band of closed inessential orbits and takes a
  maximal disk; if its boundary remains a graph, the case analysis repeats.
  The source says only finitely many compact graphs can occur, so this process
  terminates, and says termination can occur only at a vanishing cycle.
- The same section says the tangential-boundary case is “nearly the same” as
  the transverse-boundary case. It treats both limit-cycle and no-limit-cycle
  alternatives. This is the key source bridge to a disk whose fixed outer
  boundary is the essential leaf loop.

The Google Books API provides snippets, not full page text. The attempts to
retrieve page images for pp. 291–296 returned “image not available”; the
author-hosted CSUN sample PDF contains only seven front-matter/table-of-
contents pages. Thus I have not read the full proof of Proposition 9.2.5 or
verified the entire tangential-boundary transition. Candel–Conlon I is also
referenced for the graph compactness/selection results: *Foliations I*,
Graduate Studies in Mathematics 23, AMS, 2000, §§7.1–7.3, especially Theorem
7.1.10, Lemma 7.2.7 and Proposition 7.3.2. Its Google Books record is
<https://books.google.com/books?id=7x8SCgAAQBAJ>; here too I inspected only
search-preview snippets for those locators.

## Locally usable proof route suggested by §9.2

Let `h:D²→M` be a generic immersed spanning disk for a representative
`γ⊂L` that is essential in `L` and nullhomotopic in `M`. Arrange the
characteristic foliation `F*=h*F` to have finitely many nondegenerate centers
and saddles and to be tangent to `∂D²`; the image of the outer boundary stays
in `L`, so it remains the same essential class throughout. A center has a
small plaque disk, hence its nearby characteristic circles are leafwise
nullhomotopic.

For each closed characteristic orbit or compact separatrix graph `G`, call it
inessential when `h(G)` is nullhomotopic in its leaf and essential otherwise.
Use finite relative general position to ensure distinct saddles do not lie on
one characteristic leaf. The source's local graph classification then reduces
the relevant boundaries to a closed orbit, a single-saddle separatrix loop,
the two-loop figure-eight case, or a pinched annulus with figure-eight
boundary. A pinched-annulus boundary has two based loops `σ,σ′`, with the
full boundary representing their concatenation. The single-loop case still
needs the cited minimal-graph argument; I do not infer its conclusion from
the index formula.

Take the collection `D` of saturated disks or pinched annuli with essential
closed-orbit/graph boundary and no interior limit cycle. The source's
Poincaré–Bendixson selection argument supplies a starting member, including
the tangential-boundary case `D=D²` when there are no interior limit cycles.
The boundary-saddle index formula is needed only to show every chosen domain
contains a center: an interior center contributes `+1`, an interior saddle
`−1`, and a boundary saddle contributes `−1` when both local separatrices
enter the domain and `0` when only one enters. This formula follows by
rounding the boundary at the saddle and applying the ordinary index theorem
to the resulting vector field; it is not enough by itself to prove the
induction.

Now induct on the number `k` of centers in a chosen domain.

1. If its essential boundary is a regular closed orbit and the orbit-side
   family consists of closed characteristic circles, the circles near a
   center are nullhomotopic. Nullhomotopy is open under a compact transverse
   family: transport one fixed filling disk through finitely many foliated
   charts. At the first essential orbit, the endpoint is non-nullhomotopic
   and the preceding loops are nullhomotopic, giving a vanishing cycle.
   No limit of the filling disks is taken.
2. If the boundary is a one-saddle graph, use the minimal-graph/Poincaré–
   Bendixson classification rather than assuming the graph has two lobes.
   For a figure-eight with an essential lobe, the source chooses its proper
   disk, whose center count is at most `k−1`; induction applies. In the
   inessential-loop cases, use one leafwise nullhomotopy and compact
   transverse transport to pass across the graph through a band of closed
   inessential orbits. Take the maximal such filled disk. If its new
   boundary is a regular orbit, maximality makes that frontier essential and
   Step 1 gives a vanishing cycle; otherwise repeat the graph case. The
   single-loop saddle case is among the transitions that require the full
   minimal-graph proof.
3. If the domain is a pinched annulus with figure-eight boundary, its two
   based loops satisfy `[σ][σ′]=1` when the full boundary is inessential.
   Hence they are either both essential or both inessential. If both are
   essential, one lobe disk lies outside the annulus and contains at most
   `k−1` centers, so induction applies. If both are inessential, fill each
   loop in its leaf and advance the maximal saturated disk through the
   annulus of closed inessential orbits. A regular maximal frontier gives a
   vanishing cycle; a graph frontier returns to the preceding cases.

There are finitely many admissible saddle graphs, and each lobe reduction
strictly lowers `k`. Candel–Conlon state that the inessential-frontier process
must terminate and that its only terminal alternative is a vanishing cycle.
I have not verified the no-revisit/maximality argument from the full pages, so
I record this as the source's asserted termination, not as a completed local
proof. The fixed outer loop is never changed; the described argument selects
subdomains of the original disk rather than replacing its boundary or taking
a sequence limit of leafwise disks.

## What still needs a local proof before adopting this route

The proof above is a faithful reconstruction of the accessible Candel–Conlon
outline, not yet a complete stand-alone proof. Four points must be checked in
full text or proved locally:

1. **Starting-domain lemma with tangential boundary.** Prove that a generic
   disk with an essential characteristic boundary yields a nonempty finite
   collection `D` of saturated disks/pinched annuli with essential boundary
   and no interior limit cycles. The accessible source says this case is
   “nearly the same” as the transverse case; that phrase is not a proof.
2. **Saddle-frontier exhaustiveness.** Prove the compact graph classification
   and the exact disk/pinched-annulus incidence cases from the local saddle
   charts, the no-distinct-saddles-on-one-leaf perturbation, and planar
   separation. The index formula proves center existence but not that two
   center regions share a saddle.
3. **Inessential-graph advance.** Starting from one fixed leafwise
   nullhomotopy of the graph loops, prove that chartwise transport produces
   the entire neighboring annulus of closed inessential characteristic
   orbits and that its maximal filled disk has a new essential closed-orbit
   or graph frontier. This is the smallest critical lemma: without it, the
   induction can stop at an inessential graph and does not force a vanishing
   cycle.
4. **Strict finite ranking.** State the lexicographic ranking that decreases
   at every graph advance or lobe reduction. “There are finitely many compact
   graphs” alone does not rule out revisiting a graph unless maximality and
   strict inclusion are shown.

These are same-pair planar/disk arguments. They do not require a convergent
family of leafwise filling disks, an embedded image of the original disk, or
a new prerequisite pair. The simplest safe repair is to build the
inessential-graph advance as a separate local lemma first; then either finish
the full Candel–Conlon finite-induction route with explicit domain/ranking
definitions or retain the theorem and mark any remaining graph transition as
unproved. The direct Ranz center–saddle replacement immersion is unnecessary
if this finite-domain proof is completed.

## Direct comparison with the proposed disk surgery

The earlier Ranz Proposition 3.6 argument attempts to replace the spanning
immersion after identifying two center basins sharing a saddle. Its source
does not justify the frontier incidence, the leafwise disk for the cut-and-
paste contour, or relative re-immersion. The Candel–Conlon route is preferable
because it does not require changing the immersion: it works with essential
or inessential compact graphs and smaller saturated subdomains. But until
items 1–4 above are proved locally, it is still a source-guided proof sketch,
not a completed batch carrier.
