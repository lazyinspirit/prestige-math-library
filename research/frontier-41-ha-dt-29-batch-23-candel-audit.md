# Batch 23: Candel–Conlon source and local-proof audit

Audit scope: `lem-a-compressible-leaf-yields-a-vanishing-cycle`. Read-only mathematical/source audit; no batch manifest, page, item, receipt or controller edits. The full compressible-leaf implication and standing countable-choice strength are preserved. This note does not certify item readiness.

## Verified source availability and exact locators

Alberto Candel and Lawrence Conlon, *Foliations II*, Graduate Studies in Mathematics 60, AMS, 2003, ISBN 0-8218-0881-8. Publisher record: <https://pubs.ams.org/ebooks/gsm/060/>. Author research page: <https://www.csun.edu/~ac53971/research/>. Author sample: <https://www.csun.edu/~ac53971/research/Foliations2_sample.pdf>.

I retrieved and inspected all seven pages of that author sample. It contains front matter, contents and an unrelated appendix sample, **not Chapter 9 proofs**. SHA-256: `136de31728063b4f398c0ba5ed617e3afd61a21512a9f1026179662074803e34`, 96,593 bytes. Its contents place Chapter 9 at p. 287 and §9.2 at p. 292; this differs by two pages from the final-book Google-preview locators recorded in the earlier audit. Use section and result numbers to avoid conflating the sample with the final pagination.

Google Books: <https://books.google.com/books?id=GLOIAwAAQBAJ>. The existing limited-preview evidence locates Lemma 9.2.1, Lemma 9.2.2, Exercise 9.2.3, Lemma 9.2.4 and Proposition 9.2.5 in §9.2.A, approximately final printed pp. 290–295. The implication sought is Proposition 9.2.5; its suppliers are the relative general-position lemma, the saturated-domain selection lemma and the finite-center induction. The original audit's assertion that Proposition 9.2.5 begins p. 294 should be treated as a provisional locator, not verified final pagination.

A search also exposed a third-party full-book OCR render on Scribd. I initially inspected the relevant text via the browser, then stopped on the orchestrator's instruction. No full-book download, proof-text copy or redistribution was made. The attempted local text extraction failed before it wrote a file. The mirror's provenance, transcription, diagrams and authorization are unverified. **It is not an authoritative source of record and no mathematical or source-readiness certification here relies on it.**

Conclusion: I did not obtain an authoritative, lawfully accessible full Candel–Conlon Chapter 9 source. I cannot certify the entirety of Lemma 9.2.4 or Proposition 9.2.5 from the AMS/author/Google material actually accessible. This is an access limitation, not evidence that the theorem is false.

## Lawful full alternate source checked

Mark Brittenham, *Foliations and the Topology of 3-manifolds*, UT Austin Spring 1993 lecture notes, author-hosted PDF: <https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf>. The author attribution is also confirmed by the companion file's indexed title: <https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lectures_1_to_10.pdf>.

I retrieved the former PDF and read the relevant class-11 discussion on PDF pp. 1–5. File: `/tmp/f41-brittenham11.pdf`; SHA-256 `ae8227fce4107df28370b3a27e6b3f3caeea629b419e3ff6ed3a3713c8fdf17d`, 566,935 bytes, 42 PDF pages. Requests required bypassing the local TLS certificate validation failure; the content is therefore identified by URL and hash, rather than a claim of independently verified transport authenticity.

The class-11 discussion begins on PDF p. 1 and ends on PDF p. 5; class 12 begins PDF p. 6. The file has no stable printed page numbers for these pages. Exact source argument locators:

| PDF page | Supplied argument | Remaining proof requirement |
|---|---|---|
| 1 | Grow characteristic circles from a center. An essential frontier gives a vanishing cycle. Exclude a noncompact frontier by a closed transverse shortcut and same-sign intersection contradiction in a disk/sphere. | Establish shortcut, orientation and compact-frontier hypotheses locally. |
| 2 | Boundary frontier is the essential boundary loop. Saddle sectors give two planar pictures. For an inessential favorable lobe, replace its disk map by a leafwise filling. | Prove exhaustive saddle incidence; construct relative gluing. |
| 3 | Smooth that replacement to remove one center/saddle. For unfavorable nested figure eights, use an innermost lobe, index-based center existence and finite descent. | Give actual smoothing formula, support/collar checks, nondegeneracy and strict descent. |
| 4–5 | Complete the sphere alternative; begin conversion of a singular vanishing cycle to an immersed cycle and reduction of its self-intersections. | Smooth the disk-case frontier while preserving essentiality and transverse family. |

The relative smoothing on PDF p. 3 remains pictorial. This verified author outline supports the full theorem and map-level route, but does not close the library's cancellation carrier.

## Independent mathematical checks: what can be justified locally

### Map general position is the correct target

A foliation chart has a local submersion `z` whose level sets are plaques. For a smooth spanning map `f`, the characteristic singularities are precisely the critical points of `z∘f`; rank deficiency of `df` itself is not the relevant criterion. Perturbing the scalar transverse coordinate inside a chart changes `z∘f` directly. A correct relative genericity proof must use a finite chart subdivision, compactly supported scalar perturbations, and openness of previously obtained nondegeneracy on compact subsets; the outer boundary collar must stay fixed. At a resulting Morse critical point, the Hessian classifies the characteristic singularity as a center or saddle. Thus ambient cross-caps are not an obstruction to the desired conclusion. This paragraph is a proof target and local mechanism, not a claimed completed finite-chart construction.

There is a distinct statement that must not be used: arbitrary smooth disk maps are arbitrarily `C²`-close to immersions. Independently of any source, consider the local map

`f(u,v)=(u,v²,uv)`.

For a sufficiently small `C²` perturbation `g`, its first component remains a submersion. Change domain coordinates to use that component as `x`; then `g=(x,a(x,y),b(x,y))`, and rank drops exactly where `(a_y,b_y)=0`. For the displayed map, this pair is `(2y,x)`, whose restriction to a small circle has degree `±1`. A sufficiently small perturbation preserves the nonzero boundary degree, so the pair has a zero in the disk. Hence a nearby map still fails to immerse there. This is an independent reason to avoid an arbitrary-map-to-immersion approximation step. It is **not** a finding about the exact wording of an unseen authoritative Candel–Conlon page. The spanning-map route needs no such step.

### Compact leafwise filling transport

The object to transport is one fixed filling map `F:D²→L`, not a hypothetical limit of filling disks. Cover its compact domain by finitely many pieces mapping into foliation charts. On overlaps, compatibility is checked using the filling disk's simple connectivity: transition around every domain loop has trivial holonomy. Shrinking the transverse interval finitely many times makes these charts compatible and yields a transported filling family. This removes any need to choose a filling disk on every nearby leaf, take an area bound, or pass to a limit of disks.

For a loop family arising from a characteristic collar, the transported boundary must be compared to the actual collar loop by a leafwise homotopy; ambient metric closeness alone is insufficient. A local carrier should state this comparison explicitly. Finite chart data and one chosen filling do not require a stronger choice axiom than the standing strength.

### Finite ranking, conditional on strict graph advance

If a graph-advance operation replaces a saturated domain `D` by `D'` with `D⊂int(D')`, the old boundary graph cannot subsequently reappear as a boundary of a later domain in the same increasing chain: it is already interior. Consequently a finite supply of compact saddle graphs bounds the number of such advances. A branch selecting a separate lobe with fewer centers is handled by induction on center count. These observations provide the missing no-revisit justification **provided** strict inclusion and the lobe center inequality have been proved in each incidence case. Finiteness of graphs by itself does not prove termination, nor can this conditional ranking replace the incidence proof.

## Remaining exact local proof obligations

1. **Relative generic characteristic-map lemma.** Complete the finite-chart transverse scalar perturbation construction while fixing the prescribed tangent boundary collar, then separate tangency images as needed. Do not import the false arbitrary `C²` immersion approximation statement.
2. **Saturated frontier selection.** From the generic characteristic foliation with essential tangential boundary, select a domain with no interior limit cycle. Explain the minimal-graph/limit-set step and all tangential-boundary cases using locally proved planar dynamics. Neither a phrase that the case is similar nor a citation to Volume I is local proof.
3. **Compact graph incidence classification.** Prove the disk, nested-lobe and pinched-annulus alternatives, with exact boundary orientation and saddle-sector incidence. The index formula only ensures centers exist; it does not supply this classification.
4. **Inessential graph advance or relative cancellation.** Choose one route. For advance, construct the complete neighboring closed-orbit band from trivial holonomy of each graph generator, identify the maximal frontier, and prove strict inclusion. For cancellation, build a parameter-domain map agreeing with the original outside a specified neighborhood, glue the fixed leafwise filling to its collar, prescribe the transverse scalar with one fewer center/saddle, and check smoothness/nondegeneracy. A global embedded foliated neighborhood of the image of an immersed filling is not automatically available; compatibility should be constructed over its parameter domain instead.
5. **Terminal essential frontier gives a vanishing cycle.** Produce the actual transverse annulus and nullhomotopic nearby loops; if the frontier is a saddle graph, justify smoothing to a smooth essential loop in its leaf and the compatible transverse family. Calling the graph itself a cycle does not satisfy a definition requiring smooth loops.
6. **Finite descent.** After obligations 2–5, apply the strict-inclusion/no-revisit and smaller-center arguments above. Keep the original essential outer loop fixed.

These are mathematical prerequisites within the existing pair, not a need for a new pair or a justification for narrowing Novikov's theorem. Neither the accessible Candel preview nor the checked Brittenham outline closes all six by itself. A readiness receipt must remain unissued until the local carriers supply the missing steps.
