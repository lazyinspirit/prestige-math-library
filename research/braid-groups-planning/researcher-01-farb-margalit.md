# Researcher 01 — Farb--Margalit, *A Primer on Mapping Class Groups*

## Assignment and source status

This report covers the requested mapping-class/topological core of the braid
track: geometric braids, ordered and unordered configuration spaces, the
punctured-disk mapping-class model, marked points versus punctures,
boundary-fixed conventions, point pushing and the Birman exact sequence,
Fadell--Neuwirth, pure braids, and the Artin generators.  It is evidence for
planning only; it neither authors nor alters library mathematics.

### Bibliographic identity and legitimate complete-text retrieval

- **Authors:** Benson Farb and Dan Margalit.
- **Title/version retrieved:** *A Primer on Mapping Class Groups*, Version
  5.0, 4 January 2011, the complete pre-publication author draft.  The title
  page names both authors and Princeton University Press; its contents list
  Chapter 9, “Braid groups,” on pp. 251--272.
- **Original authoritative host:** Dan Margalit's University of Chicago URL
  `http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf`.
- **Live complete-text URL used:**
  <https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf>.
  This is an Internet Archive capture of that author/institution-hosted PDF,
  not a third-party scan or a book preview.  The archived 2011 author page
  says that the authors were finalizing the book with Princeton, explicitly
  labels the linked file “Version 5.0,” and distinguishes it from the later
  contractual restriction on posting the *published* version:
  <https://web.archive.org/web/20110607145937id_/http://www.math.utah.edu/~margalit/primer/>.
- **Local ignored cache:**
  `scratchpad/source-cache/braid-groups/farb-margalit-primer-v5-author-draft.pdf`.
- **Retrieval verification:** `curl -L -D -` returned `HTTP/2 200`,
  `content-type: application/pdf`, and `content-length: 3609750`; Wayback
  identifies the original capture date as 2011-10-27 and original last
  modification as 2011-01-04.  `file` reports “PDF document, version 1.3,
  509 page(s)”; `mutool info` reports `Pages: 509`; SHA-256 is
  `46c4cc848134ba38d6e7fe15462aac3069796db23b0e34a50a9018773d7fc7f2`.
  A full `mutool` extraction has 26,264 words / 165,177 lines and ends in the
  index on printed p. 499, so this is a complete 509-page body rather than a
  chapter sample.

The current live original University of Chicago URL returned HTTP 403 in this
run.  The publisher/JSTOR listings identify the later published edition but
do not supply an openly downloadable complete body.  No replacement was
needed: the recovered text is the authors' complete, author-distributed
Version 5.0 draft.  It must nevertheless be cited as **Version 5.0 draft**,
not silently as the final 2012 printed edition; final pagination and minor
wording may differ.

### Retrieval is not reading

The 509-page PDF was retrieved and full-body-validated as above.  The portions
actually read for this assignment were:

| Printed pages | Source heading(s) read | Planning use |
|---|---|---|
| title through contents, esp. contents pp. v--vi | title, authors, Version 5.0, Parts/Chapters 1--9 | bibliographic identity and chapter scope |
| 18--19 | §1.1.1 “Surfaces” | surface, puncture, marked-point, boundary, and Euler-characteristic conventions |
| 37--38 | §1.2.7 “Arcs” | proper arcs ending at marked points/boundary; relative-boundary isotopy distinction |
| 43--45 | §1.4 “Three facts about homeomorphisms” | homotopy versus isotopy; the contractibility input used in the Birman proof |
| 46--48 | §2.1 “Definition and first examples” | `Mod(S)=π₀(Homeo⁺(S,∂S))`, boundary-fixed isotopies, and the puncture/marked-point warning |
| 50--51 | §2.2.1 “The Alexander lemma” | `Mod(D²)=1` relative to the boundary; the disk step in the braid/mapping-class identification |
| 101--109 | §4.2 “The Birman exact sequence,” including §§4.2.1--4.2.5 | one-point pushing, proof via evaluation fibration, pure restriction, Dehn-twist formula, and capping |
| 251--272 | Chapter 9, §§9.1--9.4, including §9.4.3 | all three braid models, Fadell--Neuwirth, Artin/pure braid facts, and symmetric mapping-class bridge |

I did not treat the remainder of the book as read merely because it was
downloaded.  In particular, the Teichmüller and Nielsen--Thurston parts were
not read for this report.

## Conventions that the scaffold must make non-negotiable

1. **Surface notation is not interchangeable by default.**  On p. 18 the
   authors use a compact connected oriented surface, possibly with points
   removed from its interior; `S_{g,n}` has `n` punctures and empty boundary,
   and `χ=2-2g-(b+n)`.  P. 19 says one may instead regard a puncture as a
   distinguished marked point, but marked points are otherwise absent unless
   declared.
2. **For the mapping class group, the boundary is pointwise fixed.**  On pp.
   46--48, `Homeo⁺(S,∂S)` means orientation-preserving homeomorphisms equal
   to the identity on every boundary component, and `Mod(S)` is its group of
   components.  Isotopies also fix the boundary pointwise.  Punctures/marked
   points, in contrast, may be permuted for the full group.  A neighborhood
   of a puncture may rotate; a boundary component may not.
3. **“Puncture” and “marked point” need a convention at every map.**  If a
   puncture is represented as a marked point, homeomorphisms and isotopies
   preserve the *set* of marked points throughout; pp. 47--48 warn that a
   marked-point homotopy must also keep nonmarked points nonmarked.  The
   pure subgroup fixes every marked point/strand individually.
4. **Use a closed disk with marked interior points for the disk mapping-class
   model.**  The book's `D_n` is a closed `D²` with `n` marked points (p. 255),
   and the boundary is fixed pointwise.  It is not the same definition as an
   unbounded punctured plane.  P. 257 explicitly warns that the generalized
   Birman theorem does *not* identify `B_n` with the mapping class group of
   `C` minus `n` points, because `π₁(Homeo⁺(C)) ≅ Z`.
5. **Composition convention must be surfaced.**  Mapping classes use
   right-to-left functional notation (p. 47); the braid-presentation section
   uses the customary algebraic convention that the left factor comes first
   (p. 258).  Translate before writing a conjugacy or point-pushing formula.

## Harvest: exact results, hypotheses, usable proof routes, and disposition

The proposed IDs below were checked only against the current library enough to
avoid obvious duplication.  The published items
`def-braid-group-by-the-artin-presentation`,
`thm-braid-group-surjects-onto-the-symmetric-group`,
`thm-the-two-strand-braid-group-is-infinite-cyclic`, and
`def-the-braid-category` already exist.  Do **not** recreate their claims in
this track.  The new-ID labels below are recommendations for the lead's
inventory, not edits.

| Source locator and harvested statement | Hypotheses / convention | Scaffold proof or dependency route | Disposition |
|---|---|---|---|
| **§9.1.1, pp. 251--253.** A geometric `n`-braid is `n` disjoint level-preserving strands in `C×[0,1]`, with endpoints the chosen base configuration up to a permutation; stacking gives multiplication.  The standard `σ_i` are the one-crossing braids and generate `B_n`. | Isotopies preserve levels and the endpoint *set*; strands cannot cross during isotopy. | Define geometric braid before invoking algebra.  For generation, first isotope crossings to distinct heights and read them from top to bottom.  The relation completeness is not proved here. | **Included:** `def-geometric-n-braid` and `def-standard-artin-half-twist`; use existing `def-braid-group-by-the-artin-presentation` for the quotient presentation. |
| **§9.1.2, pp. 254--255.** `Cord(S,n)=S^n\setminus BigDiag` is the ordered configuration space; `Σ_n` acts freely and `C(S,n)=Cord(S,n)/Σ_n` is unordered.  Slicing a braid yields `B_n≅π₁(C(C,n))`; the ordered cover yields `PB_n≅π₁(Cord(C,n))`. | Base configurations must be stated.  The free finite `Σ_n` action is what makes the quotient and covering distinction work. | Build an explicit loop-to-level-strands and strand-slicing mutual construction, then use the standard quotient cover to identify the pure kernel.  This needs the library's fundamental-group, product/subspace, and covering foundations. | **Included:** `def-ordered-and-unordered-configuration-spaces`, `def-pure-braid-group`, and `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations`. |
| **§9.1.2, p. 255.** Forgetting the final ordered point has fibre `C\setminus\{x_1,…,x_{n-1}\}` and is a Fadell--Neuwirth fibration with section.  Inductively, ordered and unordered planar configuration spaces are aspherical; `C(C,n)` is `K(B_n,1)`. | Plane, ordered configurations; fibration with section is an external theorem attributed here to Fadell--Neuwirth. | State the fibration accurately first.  The long exact sequence plus the punctured-plane fibre proves asphericity inductively; the splitting later yields `PB_n≅PB_{n-1}⋉F_{n-1}`.  Do not claim the fibration from an informal picture. | **Included:** `thm-fadell-neuwirth-forgetful-map`; **inline:** the special planar fibre and induction; **defer:** a full proof of local triviality to the Fadell--Neuwirth primary source / dedicated fibration treatment. |
| **§9.1.3, p. 256; §9.1.4, pp. 256--257; Theorem 9.1.** For a closed disk `D_n` with `n` marked interior points and boundary fixed pointwise, `B_n≅Mod(D_n)`.  More generally, if `S` has no marked points and `π₁(Homeo⁺(S,∂S))=1`, then `1→π₁(C(S,n))→Mod(S^*)→Mod(S)→1` is exact.  With `S=D²` and `Mod(D²)=1`, this gives the disk result. | `S^*` is `S` with `n` interior marked points; `S` may have punctures but no marked points.  The `π₁(Homeo⁺)` hypothesis is essential; negative Euler characteristic is a sufficient condition cited by the source. | Use the evaluation bundle `PHomeo⁺(S,{x_i})→PHomeo⁺(S)→C(S^\circ,n)` and its long exact sequence.  In the disk special case, combine `Mod(D²)=1` (Alexander lemma) with the configuration equivalence. | **Included:** `thm-punctured-disk-mapping-classes-are-braids`, with `def-disk-mapping-class-group-relative-boundary` possibly folded into the conventions item.  **Defer:** spherical braid correction (p. 258) to an extension/remark. |
| **§4.2.1--4.2.3, pp. 101--105; Theorem 4.6.** For `χ(S)<0`, adding one marked interior point `x` gives `1→π₁(S,x) --Push--> Mod(S^*) --Forget--> Mod(S)→1`; restricting to pure groups gives `1→π₁(S_{g,n})→PMod(S_{g,n+1})→PMod(S_{g,n})→1`.  `Push` is induced by extending an isotopy of the point; it is well defined. | `S` has no marked points before adding `x`, may have punctures/boundary, and `χ(S)<0`.  The source's injectivity uses that `π₁(S)` is centreless. | The proof route is clean and should be exposed: evaluation `Homeo⁺(S,x)→Homeo⁺(S)→S`, its long exact sequence, `π₁(Homeo⁺(S))=1` from Theorem 1.14, and connectedness of `S`.  Identify the connecting map with Push and the component map with Forget. | **Included:** `thm-birman-exact-sequence-one-marked-point`; do not state it without the Euler-characteristic and convention hypotheses. |
| **§4.2.2, pp. 103--104; Facts 4.7--4.8.** If a simple based loop `α` is pushed, `Push([α])=T_aT_b^{-1}` for its left/right push-offs in `S^*=S\setminus\{x\}`; `Push(h_*(α))=h Push(α) h^{-1}` for pure `h`. | The left/right curves and signs depend on the orientation and the source's functional composition convention. | Give the annular isotopy as the construction; then show endpoint twists have opposite signs.  Treat naturality as a conjugation calculation after types are fixed. | **Included:** `prop-point-pushing-along-a-simple-loop-is-a-bounding-pair-map` (word it without claiming the pair is a conventional bounding pair in every low-complexity case), or keep this as a proved lemma inside the Birman page. |
| **§4.2.5, pp. 107--109.** Capping a boundary component `β` with a disk gives `1→⟨T_β⟩→Mod(S^\circ)→Mod(\bar S,p)→1`; `⟨T_β⟩` is central because representatives are identity near the boundary. | `S^\circ` has nonempty boundary; `p` is in the capping disk.  This is a boundary-fixed theorem, not a statement about erasing a puncture. | Use the framed-point/embedded-disk fibre-bundle proof only after the one-point Birman construction.  This is the precise explanation of the boundary full twist. | **Inline** in the boundary-versus-puncture caveat, or **included** later with centre/capping material.  Do not make it a prerequisite for the initial three-model equivalence. |
| **§9.2, pp. 258--260.** Artin's presentation is `⟨σ_1,…,σ_{n-1}\mid σ_iσ_{i+1}σ_i=σ_{i+1}σ_iσ_{i+1},\;σ_iσ_j=σ_jσ_i\ (|i-j|>1)⟩`.  The full twist `(σ_1…σ_{n-1})^n` is the boundary Dehn twist and generates `Z(B_n)` for `n≥3`. | In the source's algebraic multiplication convention.  The displayed geometric checks establish the relations, not by themselves presentation completeness. | Reuse the existing Artin-presentation item.  Explain `σ_i` geometrically as the half twist on a twice-marked disk; use the capping sequence for the centre only on the later normal-forms/centre page. | **Inline:** geometric interpretation of the existing Artin generators.  **Defer:** centre theorem and all normal-form/word-problem work to `garside-structure-normal-forms-and-the-center`; do not duplicate the existing definition. |
| **§9.3, pp. 261--265.** `PB_n=ker(B_n→Σ_n)≅π₁(Cord(C,n))≅PMod(D_n)`.  Artin's `a_{i,j}` are conjugates of `σ_i^2` and are twists surrounding the `i`th and `j`th marked points.  The exact sequence `1→F_{n-1}→PB_n→PB_{n-1}→1` splits by adding a strand, hence `PB_n≅PB_{n-1}⋉F_{n-1}` and iterated free extensions. | The permutation map has to be the endpoint permutation / deck quotient map.  The splitting is planar and comes from the Fadell--Neuwirth section. | First prove the ordered/unordered cover identifies the kernel.  Then apply the forgetful fibration and describe the section by adjoining a fixed far-away strand.  Avoid calling the semidirect action trivial. | **Included:** `thm-pure-braid-group-is-an-iterated-semidirect-product-of-free-groups` and an example computing `PB_3`; **defer:** Artin's full pure presentation and centre factorisation to the later algebra page. |
| **§9.4, pp. 265--272; Theorem 9.2.** A chain of Dehn twists gives `B_n→Mod(S_g^1)` for `n≤2g+1`; the symmetric mapping class group of `S_g^1` is `B_{2g+1}`.  In the closed case the quotient is `SMod(S_g)/⟨ι⟩≅Mod(S_{0,2g+2})`. | This is a separate hyperelliptic/symmetric mapping-class convention; `SMod` is the image of homeomorphisms centralising the involution.  Boundary behavior is decisive: `ι` is not in `Homeo⁺(S_g^1,∂S_g^1)`. | The source's proof uses quotient arcs, symmetric isotopy, the bigon criterion, and the Alexander method.  It is too specialized to be silently used as proof of the disk result. | **Defer:** preserve as a sourced future bridge to a mapping-class-groups/hyperelliptic page.  A one-sentence contextual remark on the braid page is safe only if it states the hypotheses. |

## Recommended dependency shape for the current braid pages

The source supports the following non-artificial order.  Parentheses mark
already published or separately planned infrastructure, not material that
this braid source can conjure out of an unsupported citation.

```text
(subspaces/products; fundamental group; covering spaces; fibrations)
     |                         |                    |
     v                         |                    |
configuration spaces ----------+                    |
     |                                               |
     +--> geometric braids <---- Artin generators --+-- existing Artin definition
     |          |                 (half twists)
     |          v
     +--> B_n = pi_1(unordered configurations)
     |          |
     |          +--> B_n = Mod(closed disk, n marked points; boundary fixed)
     |
     +--> ordered cover / pure braids --> Fadell--Neuwirth --> PB_n iterated free extension

(isotopy extension; mapping-class conventions; centreless surface group)
     |
     v
one-point Birman exact sequence --> point pushing --> generalized configuration-space sequence
```

The three-model equivalence should not be a circular chain of definitions.
Define geometric braids and configurations independently, identify them by
the slicing construction, then obtain the disk mapping-class model from the
generalized Birman/evaluation-fibration result plus the Alexander lemma.  The
one-point Birman page is a conceptual prerequisite for that proof route, but
the generalized theorem is the exact `n`-point statement the equivalence
needs.

## Caveats and review checks for the lead

- A braid disk has **marked interior points and a fixed boundary**.  Replacing
  it by the plane with deleted points loses a rotation class; source p. 257
  expressly warns against this.
- `PB_n` is associated with **ordered** configurations and the **pure**
  mapping class group.  `B_n` is associated with **unordered** configurations
  and the full mapping class group that may permute the marked set.
- For a general surface, the generalized exact sequence needs
  `π₁(Homeo⁺(S,∂S))=1`; for one point, the usual statement recorded here
  assumes `χ(S)<0`.  Spherical braid groups have the visible `Z/2` correction
  in equation (9.1), pp. 257--258, and cannot be folded into the disk theorem.
- The Artin relations are geometrically evident from the distant-crossing and
  Reidemeister-III moves (p. 259), but an item asserting that these are a
  *complete presentation* needs a faithful presentation proof/source.  It is
  already owned by the published Artin-presentation item.
- The full twist is a **boundary** Dehn twist, explaining both centrality and
  why capping produces a quotient.  It is not a Dehn twist about a
  once-puncture-parallel curve (that one is trivial under the puncture
  convention used here).
- The source calls `Dn` a disk “with n marked points” even while the section
  heading says “punctured disk.”  The scaffold should name the object once as
  a closed disk with marked points and reserve “puncture” for removed points,
  then state the controlled identification.

## Source-specific included / inline / deferred ledger

- **Included as planned claims:** the ordered/unordered distinction; geometric
  braid definition; configuration-space fundamental-group model; disk
  mapping-class model; pure-braid kernel/model; Fadell--Neuwirth special case;
  one-point and generalized Birman exact sequences; point-pushing formula.
- **Inline explanatory material:** Alexander lemma's role, the `Σ_n` quotient,
  half twists as representatives of `σ_i`, boundary-fixed versus
  puncture/marked-point behavior, and the pure exact sequence's splitting.
- **Deferred deliberately:** Artin-presentation completeness and the existing
  Artin/symmetric-group claims (already published); full twist/centre and
  Garside theory (normal-form page); pure Artin presentation; spherical braid
  groups; Birman--Hilden/hyperelliptic symmetric mapping classes; all
  Teichmüller and Nielsen--Thurston material.

The source gives no license to turn a later categorical braid action into a
mapping-class proof, nor to elide the listed boundary and isotopy hypotheses.
