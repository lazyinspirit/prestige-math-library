# Source lane: Ravi Vakil, *The Rising Sea* (2026-09-30)

## Source and retrieval record

I used Ravi Vakil, *The Rising Sea: Foundations of Algebraic Geometry*, the
author-hosted October 21, 2025 notes. The official author index is
<https://math.stanford.edu/~vakil/216blog/> and the full PDF is
<https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf>. The index
identifies October 21, 2025 as the newest notes, says they are essentially the
published Princeton University Press book with minor exceptions, and asks
readers to cite the version date and section/exercise rather than page number.
The author-hosted PDF itself identifies as the 2025-10-21 pre-publication
version and is 852 pages. The retrieved PDF returned HTTP 200, is 9,643,655
bytes, and has SHA-256
`d07177aa0317c13490c170fc6ccc6a2ee07989a9120d9958ed3453eefe5b2784`.
MuPDF extracted its complete body to text (394,445 words, 56,729 lines).

I close-read the bodies of §§2.2–2.7, 3.2–3.7, 4.1–4.5, 7.6–7.7,
11.4.9–11.4.12, 13.2.7–13.2.8, 13.4.1–13.4.2, 16.4, selected parts of
18.4–18.6, 20.1–20.2, 21.4, 22.2–22.4, 24.5.13, 25.1.6, 25.2.1,
25.3.1–25.3.6, 27.0–27.3, 28.4.4–28.5, and 29.2–29.4. I also checked the
full contents and indexed occurrences for the wider pair-by-pair locator map
below. The page numbers are the printed page numbers of the 2025 notes; the
section number is the stable locator.

This is the current edition, not the 2011 PDF cited in the plan's historical
source matrix. Vakil has reorganized material substantially: for example,
blowups are now Chapter 22, differentials Chapter 21, Serre duality Chapter 29,
and curve resolution §28.4.4. The 2011 page locators should not be carried over
as though they locate this edition.

## Proof-coverage map for the existing AV pairs

The status column distinguishes a proof in the body from a theorem whose proof
is left as an exercise or cited elsewhere. “Exercise route” means Vakil supplies
a precise exercise or proof plan that an A page still must write out. Pages are
the printed pages of the October 21, 2025 notes.

| Pair | Planned claim group | Vakil locator | Coverage and proof status |
|---|---|---|---|
| AV-1 | Classical affine algebraic sets, Nullstellensatz, coordinate rings | Only scheme analogues: Ch. 3 §§3.2–3.7, pp. 101–130; structure sheaf Ch. 4 §4.1, pp. 131–134 | **No classical supplier.** These sections construct `Spec A` from prime ideals, not the classical ideal–variety correspondence over an algebraically closed field. They do not prove the strong Nullstellensatz or the antiequivalence of classical affine algebraic sets with reduced finite-type algebras. Use the already-built AG-P2 replacement, not Vakil as proof of the classical claim. |
| AV-2 | Classical morphisms, local rings, rational maps, function fields | Ch. 7 §§7.2–7.5, pp. 204–222; Ch. 11 §11.3, pp. 321–323 | **Partial / wrong register.** The locally ringed-space definition, scheme morphisms and rational maps from reduced schemes are useful later, but do not supply the classical affine morphism–coordinate-ring proof. §7.5 is a scheme-level rational-map treatment. |
| AV-3 | Classical projective sets, maps, cones | Ch. 4 §4.5, pp. 148–156; Ch. 7.4, pp. 214–215; Ch. 9.3, pp. 259–264; Chs. 15–17, pp. 425–492 | **Partial.** Proj and projective-scheme constructions are developed, but the classical cone/coordinate arguments still need the affine-classical supplier. |
| AV-4 | Products, Segre/Veronese, Grassmannians | Fibre products Ch. 10 §§10.1–10.3, pp. 275–290; Segre Ch. 10.6, pp. 301–302; projective examples Ch. 9.3, pp. 259–264; Grassmannian Ch. 7.7, pp. 227–228, Ch. 16.4, pp. 471–476, and Ch. 25.3.3–25.3.6, pp. 742–746 | **Good coverage with exercise seams.** The Grassmannian represents rank-k locally free quotients of a free sheaf and has the universal sequence and Plücker construction. Some patching/Plücker details are exercises. §25.3 proves the moduli interpretation for families of linear projective subspaces and degree-d hypersurfaces, with steps left as exercises. This is already an AV-4 subject; do not recommission a second Grassmannian pair. |
| AV-5 | Dimension, constructible images, fibre dimensions | Ch. 12 §§12.1–12.4, pp. 333–358; Chevalley Ch. 8.4, pp. 245–252 | **Strong supplier.** The dimension/transcendence-degree and fibre-dimension arguments are in the body. Chevalley/elimination is treated in §8.4. |
| AV-5a | Differentials, separability, smooth local presentations | Differentials Ch. 21 §§21.1–21.7, pp. 595–634; smooth/étale definitions Ch. 13.6, pp. 385–388; flatness Ch. 24 §§24.1–24.8, pp. 685–728 | **Strong but not complete for the binding’s generic-freeness item.** The differential and smoothness material is substantive. Generic flatness is only stated in §24.5.13, p. 711, and explicitly attributed to Stacks tag 052B without proof. It is not a proof of the planned finite-type-domain generic-freeness lemma. |
| AV-6 | Tangent spaces, regularity, smoothness, Bertini | Ch. 13 §§13.1–13.4, pp. 359–377; in particular Smoothness-Regularity Comparison Theorem 13.2.7 and Bertini Theorem 13.4.2 | **Strong supplier.** The imperfect-field warning and example are in §13.2.8, pp. 367–368. Bertini is stated with a dense open of hyperplanes and a proof through the bad-incidence locus. The dual-number point interpretation can be proved from the scheme-morphism/differential definitions, but is not isolated as the exact named lemma in the plan. |
| AV-7 | Normality, normalization, Zariski Main | Normality/factoriality Ch. 5.4, pp. 165–170; normalization Ch. 10.7, pp. 303–310; Zariski Main Ch. 28.5, pp. 781–785 | **Partial for the binding’s general ZMT factorization.** Vakil proves Grothendieck’s proper form (Theorem 28.5.1) and proper quasi-finite implies finite (Theorem 28.5.2). He does not prove the general separated quasi-finite factorization without properness: §28.5.3 invokes Nagata compactification and §28.5.4 cites other versions. The separately bound AV-15 algebraic ZMT suppliers remain necessary. |
| AV-8 | Plane curves, local intersection multiplicity, Bézout | Plane-curve Bézout Ch. 18.6.4, pp. 520–521, following Exercise 18.6.J; surface/global intersection Ch. 20.1–20.2, pp. 575–588 | **Global theorem only; local theory missing.** The global count is degree of the scheme-theoretic intersection, with an exercise proof via Hilbert polynomials. The local multiplicity example is the length of a scheme-theoretic intersection, but Vakil does not develop the planned general local intersection-multiplicity theory. Existing Fulton/Artin/MIT sources remain the proper suppliers. |
| AV-9 | Presheaves, sheaves, stalks, sheafification | Ch. 2 §§2.1–2.7, pp. 71–96 | **Strong foundational treatment.** The definitions, stalk criteria, sheafification, sheaves on a base, abelian sheaves and inverse image are covered. A number of useful constructions are posed as exercises. |
| AV-10 | Sheaf operations, exactness, ringed spaces, module pullback | Ch. 2 §§2.3–2.7, pp. 79–96; Ch. 7.2–7.3, pp. 204–213; module pullback Ch. 14.5, pp. 416–421 | **Broad supplier with exercise seams.** The exact stalkwise and categorical claims should be checked against the live AV-10 inventory; Vakil leaves some of the operations as exercises. |
| AV-11 | Affine schemes, structure sheaf | Ch. 3 §§3.2–3.7, pp. 101–130; Ch. 4 §§4.1–4.2, pp. 131–138 | **Strong supplier.** Spectrum, distinguished opens, structure sheaf, nilpotents and affine scheme examples are proved through the standard affine constructions. |
| AV-12 | Schemes, subschemes, morphisms locally of finite type | Ch. 4.3–4.4, pp. 139–147; Ch. 5.1–5.3, pp. 157–164; Ch. 6.1–6.4, pp. 171–182; Ch. 7.1–7.5, pp. 203–222; Ch. 9.1–9.4, pp. 253–268 | **Strong coverage.** Closed subschemes and ideal sheaves are treated in §9.1, with the quasi-coherent ideal construction left as an important exercise. Scheme morphisms and scheme-theoretic images are covered in the body. |
| AV-13 | Fibre products, base change, scheme-theoretic fibres | Ch. 10 §§10.1–10.5, pp. 275–300; projective products §10.6, pp. 301–302 | **Strong supplier.** The constructions, computations and base-change properties are developed in the body. Distinguish the properties in §10.4 that are preserved from §10.5’s non-preservation/correction results. |
| AV-14 | Diagonals, separatedness, valuative uniqueness | Ch. 11 §§11.1–11.3, pp. 312–323; valuative criteria Ch. 13.7, pp. 388–392 | **Strong, with starred valuative section.** Diagonal criteria and equality loci are proved; the valuative criteria are deliberately starred. |
| AV-15 | Finite, proper, projective morphisms | Ch. 8.3–8.4, pp. 236–252; Ch. 11.4, pp. 324–330; Ch. 17.3, pp. 485–492; Ch. 28.5.1–28.5.2, pp. 781–785 | **Proper quasi-finite finite is proved; general ZMT is not.** Theorem 28.5.2 proves finite iff affine and proper iff proper and quasi-finite for locally Noetherian schemes. The proper ZMT factorization is proved. The binding’s separated quasi-finite factorization needs its own local supplier. |
| AV-16 | Kähler differentials, conormal sequences, infinitesimal lifting | Ch. 21 §§21.1–21.3, pp. 595–615; unramified morphisms §21.7, pp. 631–634; smooth/étale §13.6, pp. 385–388 | **Strong for differentials; check the exact lifting criterion.** Kähler differentials and conormal tools are in the body. Vakil develops smooth/étale via presentations, but a planned infinitesimal-lifting statement should be matched item-by-item rather than inferred from the chapter title. |
| AV-17 | Flat, smooth, étale morphisms, generic freeness | Flatness Ch. 24 §§24.1–24.8, pp. 685–728; smooth/étale Ch. 13.6, pp. 385–388; generic smoothness Ch. 21.6, pp. 627–630 | **Generic freeness is not supplied.** The only generic-flatness theorem is the externally cited, unproved Theorem 24.5.13. It does not replace the binding’s `lem-generic-freeness-finite-type-domain-algebra-module`. |
| AV-18 | Quasi-coherent/coherent sheaves, vector bundles | Ch. 6 §§6.1–6.4, pp. 171–182; Ch. 14 §§14.1–14.6, pp. 399–424; relative Spec Ch. 17.1, pp. 477–480 | **Strong supplier.** The affine equivalence and coherent/vector-bundle properties are developed. Relative Spec provides an additional construction. |
| AV-19 | Proj, twisting sheaves, projective schemes, ampleness | Ch. 4.5, pp. 148–156; Ch. 15 §§15.1–15.7, pp. 425–456; Ch. 16 §§16.1–16.4, pp. 457–476; Ch. 17 §§17.2–17.3, pp. 481–492; Ch. 18.8, pp. 527–529 | **Strong supplier, with starred/graded seams.** Relative Proj and projective morphisms are explicit. The precise homogeneous-ideal correspondence still needs the saturation/irrelevant-ideal hypotheses bound in the plan. |
| AV-20 | Cartier/Weil divisors, line bundles, Picard groups | Ch. 9.5, pp. 269–274; Ch. 15.4–15.6, pp. 440–452; Ch. 20.1–20.2, pp. 575–588 | **Strong for the planned divisor basics.** Weil-divisor identification uses normal/factorial hypotheses; Cartier divisors and invertible ideal sheaves are developed. Intersection theory here is only a glimpse. |
| AV-21 | Sheaf and Čech cohomology, derived comparison | Čech/coherent cohomology Ch. 18.1–18.2, pp. 493–503; derived functors and Čech comparison Ch. 23.1–23.5, pp. 659–684 | **Strong proof route.** The Čech-to-derived comparison is specifically addressed in §23.5. |
| AV-22 | Quasi-coherent cohomology, projective cohomology, base change | Ch. 18.3–18.9, pp. 504–534; base change Ch. 25.1–25.3, pp. 729–746 | **Strong, but match the perfect-complex wording carefully.** Cohomology/base-change Theorem 25.1.6 is proved in §25.2. The Key Theorem 25.2.1 gives a complex of finite free modules extending infinitely to the left, computing cohomology after every base change and having no negative cohomology after base change. It is not stated as a bounded finite-projective complex; that stronger planned supplier needs an explicit truncation/perfectness argument or another source. |
| AV-23 | Smooth proper curves, divisors, genus, ramification | Curves Ch. 19 §§19.1–19.11, pp. 535–574; Riemann–Hurwitz Ch. 21.4, pp. 616–621; normalization Ch. 10.7, pp. 303–310 | **Broad curve coverage.** Note that the general Riemann–Hurwitz proof is an exercise, and normalization finiteness/gluing should follow the binding’s narrowed curve hypotheses. See the not-supplied audit below. |
| AV-24 | Curve Riemann–Roch via Euler characteristic | Ch. 18.4.1–18.4.4, pp. 507–513; curve applications Ch. 19.2, pp. 538–541 | **Exact elementary route, not a written proof.** Essential Exercise 18.4.B proves χ(C,O(D)) = deg(D)+χ(C,O_C) by induction on point additions, using the closed-subscheme exact sequence and additivity of Euler characteristic. This matches the intended proof without invoking Serre duality; the AV A page should write out the induction. |
| AV-25 | Residues, curve Serre duality, full Riemann–Roch and degree bounds | First statement Ch. 18.5.1, pp. 514–516; complete proof Ch. 29 §§29.1–29.4, pp. 793–812; degree bounds Ch. 19.2.5–19.2.11, pp. 539–541; Riemann–Hurwitz Ch. 21.4.3–21.4.D, pp. 620–621 | **Duality proof is strong; some curve corollaries are exercise-led.** Corollary 29.3.10 proves functorial Serre duality for vector bundles on every pure-dimensional Cohen–Macaulay projective $k$-scheme; Corollary 29.3.14 gives the Ext version. On a smooth projective curve or surface these hypotheses hold. For the Riemann–Hurwitz and degree bounds, use the precise item audit below. |
| AV-26 | Blowups, exceptional divisors, strict transforms | Ch. 22 §§22.1–22.4, pp. 635–656; Proj/Rees construction §22.3, pp. 642–646; examples §22.4, pp. 647–656 | **Strong local supplier.** Theorem 22.3.2 identifies the blowup with relative Proj of the Rees algebra and proves the universal property. Chart, exceptional-divisor and strict-transform calculations are present; the termination proof for curve resolution is elsewhere, in §28.4.4. |

## Explicit `not-supplied` rows and binding reconciliation

The binding amendments in the canonical plan control over historical rows.

### AV-1 classical affine duality

Historical `thm-affine-algebraic-sets-coordinate-duality` is indeed marked
`not-supplied`; Vakil does not close it. Chapters 3–4 construct schemes and
their structure sheaves, and therefore do not prove the classical
Nullstellensatz-based antiequivalence. The binding Phase-2 repair merges the
unproved announcement with its completion into
`thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence` on the
replacement pair `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`.
That replacement is already present in the current library. Keep its local
classical proof and do not revive the old `not-supplied` row or commission a
duplicate pair.

### AV-23 Riemann–Hurwitz and high-degree previews

The binding deletes the four historical AV-23 `not-supplied` previews and
places complete stable IDs on AV-25. Vakil gives a direct proof route for each
claim, but the author scaffold must turn the exercises into proofs:

- **Riemann–Hurwitz.** Theorem 21.4.3 (pp. 620–621) assumes a finite separable
  morphism $X\to Y$ of projective regular curves of pure degree $n$, and
  states $2g(X)-2=n(2g(Y)-2)+\deg R$. Proposition 21.4.2 proves the
  cotangent sequence is left exact for a generically separable morphism of
  irreducible varieties of the same dimension with smooth target. Exercise
  21.4.D gives the exact proof route: take degrees in that sequence, use
  additivity of degree on exact sequences, pullback of line-bundle degree,
  and identify the torsion cokernel degree with the ramification divisor.
  Thus the old `thm-riemann-hurwitz` is not a new missing theorem, but its
  exercise proof must be written in AV-25's stable `thm-riemann-hurwitz-complete`
  (with AV-16/AV-23 supplies and ramification/degree conventions explicit).
- **Base-point-free and very ample bounds.** Sections 19.2.5–19.2.11 prove
  the route from curve Riemann–Roch, Serre duality, point exact sequences,
  and separation of points/tangent directions to degree (\ge 2g) and
  (\ge 2g+1), respectively. The numerical statement in §19.2.11 explicitly
  assumes $k$ algebraically closed; the extension to non-algebraically closed
  fields is Exercise 19.2.E. Preserve the binding's stable AV-25 IDs
  `thm-degree-two-g-line-bundle-basepoint-free` and
  `thm-degree-two-g-plus-one-line-bundle-very-ample`; either prove the field
  extension step or state the algebraically closed hypothesis. Do not emit
  the deleted AV-23 preview IDs.

### AV-26 plane-curve resolution

The binding deleted historical
`thm-resolution-plane-curves-by-point-blowups` because the old source inventory
appeared to lack the termination invariant. The 2025 Vakil source materially
changes that evidence: §28.4.4, pp. 781–782, supplies the arithmetic-genus
termination argument for resolving a **reduced projective curve over a field**
by repeatedly blowing up singular points, with no characteristic-zero
qualification. It constructs the finite birational comparison
\(0\to\mathcal O_C\to\pi_*\mathcal O_{C'}\to G\to0\), deduces
\(p_a(C')\le p_a(C)\), and equality only when the map is O-connected; the
exercise 28.4.E says an affine O-connected morphism is an isomorphism. The
section then shows that if the blowup at the chosen point were an isomorphism,
the maximal ideal would be principal and the one-dimensional local ring
regular. Hence every blowup at a singular point strictly decreases the integer
arithmetic genus, bounded below by that of the normalization; the process
terminates.

This is a usable proof route, not a fully written proof: AV must supply the
O-connected-implies-isomorphism exercise, strict decrease, the lower bound via
normalization, and the proper/quasi-finite-to-finite step. For **plane** curves,
the identification of the strict transform with blowing up the curve at its
point must also cite the blow-up closure lemma (Vakil §22.2.5–22.2.7) and state
the reducedness/finiteness hypotheses. It is not a proof of higher-dimensional
resolution.

Do not simply reinstate the removed theorem on AV-26: its proof needs the
arithmetic-genus/cohomology and curve-normalization suppliers that occur later
in the current AV order. If the track wants this subject, add a later
`resolution-of-reduced-projective-curves-by-point-blowups` A/B pair after
AV-23/AV-24 and AV-26. The A page can complete Vakil's invariant argument;
the B page can run it on a singular plane curve beyond the first blowup (not
repeat AV-26's existing first-step node/cusp examples).

Other historical `not-supplied` rows are handled by binding rather than by
this source: AV-6's tangent-vector/dual-number statement is a short local
consequence of scheme morphisms and differentials, while its imperfect-field
counterexample is explicitly in §13.2.8; AV-12's quasi-coherent ideal to
closed-subscheme result is §9.1 plus important Exercise 9.1.F; the AV-15
properness fpqc-descent theorem is deleted; and the smooth relative-dimension
definition is relocated to AV-17. Vakil does not supply a general fpqc
properness-descent proof.

## Other material gaps and dependency-ordered additions

### 1. Surface intersection theory and the Hodge index theorem

The current AV sequence has plane-curve Bézout and blowup arithmetic, but no
intersection pairing for divisors on projective surfaces. Vakil Ch. 20 is a
valuable supplier for a focused addition:

- §20.1.1 (p. 575) defines the intersection of $n$ line bundles with a
  coherent sheaf of support dimension at most $n$ by an alternating sum of
  Euler characteristics. Proposition 20.1.3 (pp. 576–578) proves symmetry and
  multilinearity for projective $X$, though the base case is Exercise
  20.1.E.
- §20.2, pp. 580–588, identifies the intersection of two curves on a regular
  projective surface with the degree of a restricted line bundle, the Euler
  characteristic product, and—when there are no common components—the length
  of their scheme-theoretic intersection (Exercise/Definition 20.2.A).
- The Hodge Index Theorem 20.2.13 (p. 586) assumes $X$ is an irreducible
  smooth projective surface over a field, $L,H\in\mathrm{Pic}(X)$,
  $H^2>0$, and $L\cdot H=0$; it concludes $L^2\le0$, with equality iff
  $L$ is numerically trivial. The proof is written in §§20.2.14–20.2.19,
  pp. 586–588, but depends on Exercise 20.2.B: surface Riemann–Roch
  \(\chi(\mathcal O_X(D))=D\cdot(D-K_X)/2+\chi(\mathcal O_X)\), conditional
  on Serre duality. Vakil supplies the Hodge proof, not the missing surface
  Riemann–Roch proof.

Recommended ordered A/B additions (the first A owns its B; the second A depends
on the first A):

1. `intersection-theory-on-projective-surfaces` — A proves the Euler
   characteristic definition, bilinearity, degree/length comparison and the
   surface intersection pairing under AV-18–AV-22. B computes the forms on
   \(\mathbf P^2\) and \(\mathbf P^1\times\mathbf P^1\). Keep proper support
   and the dimension bound on \(\mathcal F\) in the definition.
2. `surface-riemann-roch-and-hodge-index` — A first supplies the surface
   Riemann–Roch and adjunction arguments locally, then follows §§20.2.14–.19
   to prove Hodge Index. There is a concrete proof route for the exercise:
   for a smooth effective divisor $C$, use the exact sequence
   $0\to\mathcal O_X(D)\to\mathcal O_X(D+C)\to
   \mathcal O_C(D+C)\to0$, curve Riemann–Roch, and adjunction to show
   that
   $\Phi(D)=\chi(\mathcal O_X(D))-\tfrac12D\cdot(D-K_X)$ is unchanged by adding
   $C$. First extend the base field to its algebraic closure; Euler
   characteristics and the intersection product are invariant under field
   extension (write out Exercise 20.1.B for the latter). Choose a very ample
   $H$ with $D+H$ very ample; Bertini gives
   smooth representatives of $H$ and $D+H$, so adding the first and
   subtracting the second connects any $D$ to zero and gives the formula. The
   proof therefore
   depends on AV-6 Bertini, AV-19 very ampleness, AV-24 curve Riemann–Roch,
   AV-25 adjunction/canonical degree, and the new addition 1. Then follow
   §§20.2.14–.19, using the already-published smooth-projective
   Serre-duality A page, to prove Hodge Index. The A page can also require
   AV-26 so its singleton B leaf may compute a blowup intersection lattice
   and apply the theorem.

The library currently has no AG/scheme page for this surface pairing. Do not
advertise these additions as the Chow ring, Chern-class formalism, or
Grothendieck–Riemann–Roch: Vakil's Ch. 20 calls itself “a glimpse,” and does
not prove those theories.

### 2. Curve resolution as a later pair

As above, §28.4.4 is an unusually good supplier for a real hole, but its
dependencies rule out placing it on AV-26. Add the later A/B pair only after
the existing A pages for proper finite maps, curve arithmetic genus/cohomology,
normalization, and blowups. Exact hypotheses for the source route: reduced
projective curve over a field; the planned plane-curve specialization should
add the closed plane embedding and prove that ambient blowup strict transform
agrees with the intrinsic curve blowup.

### 3. Optional cubic-surface application

The present scaffold has no cubic-surface classification or enumerative
application. Vakil Ch. 27, pp. 757–768, is an evidence-backed optional addition
after surface intersection/Hodge, AV-4's Grassmannian, Bertini, and AV-26's
blowups. Theorem 27.0.2 states that every smooth cubic surface over an
algebraically closed field is \(\mathbf P^2\) blown up at six points; §27.3
proves it, using an exercise to produce two disjoint lines. Theorem 27.0.1
states the 27-line count; §27.2 gives a proof away from characteristic 3,
while the extension to arbitrary characteristic is the starred Exercise
27.2.K. If commissioned from this source alone, scope the proved 27-line
theorem to characteristic different from 3 (or fill Exercise 27.2.K); a useful
B leaf is the Fermat cubic's 27 lines, Exercise 27.1.C. This is an enrichment,
not a missing supplier for the current AV pairs.

### Moduli and algebraic groups: what Vakil does not license

- **Grassmannian and elementary projective moduli:** already part of AV-4.
  §§7.7, 16.4 and 25.3.3–25.3.6 give useful functor-of-points and family
  proof routes. Do not duplicate the existing AV-4 pair.
- **Hilbert scheme:** Theorem 25.3.1 (p. 741) only states that
  \(\operatorname{Hilb}_{\mathbf P^n_{\mathbf Z}}\) is representable and
  cites Mumford/FGIKNV for construction. It is not a proof supplier for a
  Hilbert-scheme-existence pair. The later Grassmannian and hypersurface
  examples are proved (with exercises) without using that existence theorem.
- **Group schemes/algebraic groups:** §7.6 defines group objects and group
  schemes, but labels most of the discussion entertainment and leaves GL\(_n\),
  SL\(_n\), and action results as exercises. §11.4.9–.12 gives definitions,
  group-variety examples and the rigidity lemma; §19.10 treats elliptic curves
  as group varieties. §§7.7.1 and 16.4.5 say partial flag varieties generalize
  the Grassmannian construction and leave details to the reader. Vakil does not
  construct a general semisimple quotient \(G/B\), root-subgroup structure,
  Bruhat cells, Borel-character line bundles, or coroot degree conventions.
  The already-existing AG-LIE flag pair has those duties; Vakil supplements its
  smooth-projective Serre-duality supplier but does not replace its group/flag
  bridge. Do not create a second flag pair from this source.
- **Abelian-variety projectivity:** §§11.4.9–11.4.12 (pp. 328–330) define
  algebraic/group varieties, prove the Rigidity Lemma and use it to show that
  a projective geometrically integral smooth group variety is commutative.
  Vakil defines an abelian variety to be an algebraic group that is
  geometrically integral **and projective** (§11.4.11); he does not prove the
  general theorem that a proper smooth connected group variety is projective.
  The intervening §11.4.10 calls automatic quasi-projectivity of algebraic
  groups a side remark that will not be proved or used, and points elsewhere.
  He says only elliptic curves will appear as examples (§19.10). If the
  expansion wants that general projectivity theorem, Vakil is not its proof
  supplier and a separate complete treatment is needed.

## Further proof-supplier limits to preserve

- Zariski Main: §§28.5.1–28.5.2 prove proper forms. The separated,
  quasi-finite, locally Noetherian factorization uses additional compactification
  input and is not a Vakil-only proof.
- Generic freeness: Vakil §24.5.13 cites Stacks tag 052B without proof. It is
  generic flatness, not the binding's algebraic generic-freeness lemma.
- Proper cohomology/base change: §25.2.1 is a strong all-base-change supplier
  for the proper, Noetherian, coherent-and-base-flat setup. Its stated Mumford
  complex is bounded above but infinite to the left; do not silently relabel it
  as the planned bounded finite-projective complex.
- Higher-dimensional Serre duality: the 2025 edition closes the old source
  matrix's apparent gap. Corollary 29.3.10 covers vector bundles on every
  pure-dimensional Cohen–Macaulay projective (k)-scheme; Corollary 29.3.14
  gives Ext duality. This includes smooth projective surfaces and is a full
  proof route in Ch. 29, not merely the §18.5 first glimpse. The AG-LIE pair
  already published in the current library must not be duplicated.
- Embedded resolution in dimension greater than one: no general theorem is
  proved. Chapter 22 gives blowup charts and local examples; §22.4.6 cites
  Hironaka. The curve proof at §28.4.4 does not generalize to surface or higher
  dimensional resolution.

## Handoff

Update only if the canonical plan is being deliberately amended: the strongest
new omission covered by this 2025 source is surface intersection/Hodge theory;
the strongest former `not-supplied` gap newly supplied is curve resolution,
which needs a later home after its genus and blowup prerequisites. AV-1's
classical antiequivalence is already repaired by the extant Phase-2 pair; AV-23
previews are already deleted/replaced by complete AV-25 IDs; the AG-LIE flag
pair already exists. No files beyond this report were changed.
