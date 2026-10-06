# Batch 23 center–saddle disk audit

**Scope.** Read-only audit of the center-basin and center–saddle steps in the
current Novikov/compressible-leaf scaffold. I read the complete English
translation of Novikov's *The Topology of Foliations*, especially §6, printed
pp. 16–19 (PDF SHA-256 `9267c190c5a0a0aa3364735a577ccbed1ca1e71cd7b7314c3ec9cf9cded0be35`),
and the complete Ranz thesis, §3.1, printed pp. 52–54, including Lemma 3.5,
Proposition 3.6 and Figure 1 (PDF SHA-256
`295eb897b32142651d79f4f3c2ff52e5ae42ffe606989d1a89ef812fde45cc3d`). I also
read the current batch-23 page manifest and Novikov-item strategies. No
manifest, item, coverage, or receipt was changed.

## Finding

The center-basin picture gives a sound route to the required conclusion, but
the sources do not prove the limiting-disk or cancellation assertions as
written. This is a missing local proof, not evidence that Novikov's theorem or
the rich compressible-leaf claim is false. Preserve that claim and repair the
argument in batch 23; no additional pair is needed.

There is an important distinction about the limiting disk. A family of
leafwise immersed filling disks inside a center basin need not converge to a
disk on the limiting leaf: the sources give no uniformity, compactness, or
derivative control on those fillings. The basin geometry alone therefore does
**not** prove that the limiting separatrix bounds an immersed or embedded
disk. But convergence of filling disks is unnecessary to detect a vanishing
cycle. If the basin is a foliated annulus of closed characteristic curves,
its curves are individually leafwise null-homotopic by the basin condition;
the annulus converges to its separatrix circuit on one leaf. After proving the
endpoint circuit is a smooth immersed loop (rounding its finitely many saddle
corners in a leaf chart), an essential endpoint is precisely a vanishing
cycle. Under the standing no-vanishing-cycle assumption, the endpoint circuit
is instead null-homotopic in that leaf. This yields a continuous, and by
relative smoothing a smooth, leafwise disk map. It does not by itself yield an
immersed leafwise disk with the prescribed boundary: that is a relative
immersion/framing issue. Ranz's Lemma 3.5 constructs an ambient immersed
spanning disk for an initial loop after a leafwise regular homotopy, but does
not establish the required extension for the limiting circuits used in the
surgery.

## What the sources establish and leave open

- Novikov §6, Theorem 6.1(3), printed pp. 18–19, says the kernel case follows
  “in an entirely similar fashion” to the preceding center/saddle argument,
  noting only that saddles may occur on the disk boundary and that the
  non-null-homotopic curve is supplied by the kernel condition. It does not
  give a basin definition, a limit-disk argument, or a center–saddle
  cancellation. The preceding proof, Theorem 6.1(1), printed pp. 17–18, does
  describe center regions, separatrix circuits, and an innermost curve, but
  relies on Haefliger's theorem and omits the required local construction.
- Ranz §3.1, Proposition 3.6, printed pp. 52–54, gives the closest template:
  it defines a maximal saturated basin whose characteristic leaves bound
  immersed leaf disks, claims its frontier is a singular leaf, and then
  asserts two saddle-sharing configurations and a replacement immersion with
  one fewer center. The proposition does not prove those steps. In particular:
  (i) the boundary-of-basin limit and its smooth one-sided family are not
  constructed; (ii) the cited Corollary A.9 counts centers minus saddles but
  does not, by that count alone, prove that two basin frontiers share a
  saddle; (iii) Figure 1 does not prove that the image of the two frontier
  curves bounds a disk in the ambient leaf—an immersed source disk need not
  have embedded image; and (iv) the replacement map is not built or checked
  to remain an immersion, keep the external boundary fixed, and reduce the
  singularity count. Ranz's introduction (printed p. ix) summarizes
  Proposition 3.6 as reducing to one critical point, but the proposition's
  written proof does not justify that reduction.
- The current `lem-a-compressible-leaf-yields-a-vanishing-cycle` strategy
  retains this unsupported Ranz Proposition 3.6 cancellation and asserts that
  the limiting basin boundary is essential, hence a vanishing cycle, without
  supplying the frontier-family argument. Its current sentence about
  “several centres and a common saddle” therefore cannot yet serve as a local
  proof. The null-transversal strategy has related extraction gaps, but is
  outside this narrow center–saddle audit.

## Locally usable repair route

The published argument can be made local without assuming convergence of the
filling disks:

1. For a generic immersed spanning disk, prove a **basin-frontier lemma**:
   each proper center basin is an open disk foliated by characteristic circles;
   its compact frontier is a finite separatrix circuit on one leaf; and the
   circles admit a smooth one-sided transverse-trace parametrization ending
   at a rounded immersed representative of that circuit. Their individual
   leafwise nullhomotopies come from the basin definition. Thus an essential
   frontier is a vanishing cycle; with no vanishing cycles, each frontier has
   a leafwise nullhomotopy.
2. Prove a **planar incidence and surgery lemma** for the finite separatrix
   graph on the disk, including boundary saddles: either a basin is all of the
   disk, or a pair of center basins can be chosen in one of the two Figure 1
   configurations. Use the leafwise nullhomotopies to fill the exact
   concatenated frontier loop used in that configuration. Do not infer an
   embedded leaf disk from the planar source-domain picture; use a smooth
   nullhomotopy and a separately justified relative ambient-immersion/smoothing
   construction. Glue and smooth the surgery so the original outer loop is
   fixed and one center–saddle pair is removed, with no new singularities.
3. Iterate. The disk has finitely many nondegenerate singularities and every
   surgery strictly lowers the number of centers and saddles, so this process
   terminates. In the one-center case, a proper basin frontier would give a
   vanishing cycle; hence its basin is the disk and the original loop bounds
   in its leaf. This contradicts an assumed nonzero kernel class.

The critical missing work is Steps 1–2, not the finite termination in Step 3.
The authors must prove the separatrix incidence statement (the index formula
alone is insufficient), show the chosen frontier loops and leafwise
nullhomotopies glue with the correct orientations, and verify the relative
immersion and characteristic-singularity control. This is a substantial
localized proof repair—one carefully stated frontier lemma and one surgery
lemma with explicit local models—not a reason to narrow the theorem or rebuild
the surrounding foliation theory.

## Unsupported assertions to remove or discharge

Do not cite Novikov §6(3) as a completed center–saddle proof or Ranz
Proposition 3.6 as a proof of its surgery step. Until the two local lemmas are
written, the following remain unsupported: the center-basin boundary is a
single suitable separatrix loop; its nearby curves form the required smooth
one-sided family; two center frontiers share a saddle in one of the listed
configurations; the relevant frontier concatenation bounds a disk on the
limiting leaf; and replacing the spanning disk preserves its boundary and
immersion while lowering the singularity count. A limiting immersed/embedded
leaf disk must not be inferred merely by taking a limit of the basin's
individual immersed filling disks.
