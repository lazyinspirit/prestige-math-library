# Public adequate-minimality and Conway-sphere source dependencies

Literature-only. No new proof authoring, accepted-provider proof audit, canonical change, hash/validator/gate operation, or original flyping closure. The lead's full reading of Thistlethwaite1991 ([13]) is retained; that paper was not reread here.

## Acquisition and actual reading

**[12] M. B. Thistlethwaite, On the Kauffman polynomial of an adequate link, Invent. Math.93(1988),285–296, DOI10.1007/BF01394334.** Full authoritative library scan acquired from:

https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0093/LOG_0018.pdf

The actual volume IIIF manifest identifies LOG_0018 by title/author and printed285–296. Durable full PDF: `thistlethwaite-1988-adequate.pdf` (13PDFpages: library terms wrapper plus12article pages). All12article pages rendered in `thistlethwaite-1988-rendered/`. The scan has no usable article text layer; `thistlethwaite-1988-adequate-text-layer-only.txt` is explicitly NOT a fulltext transcription. Springer’s exact PDF endpoint returned HTML, not a PDF; Göttingen supplied the real scan.

Actual reading was VISUAL and restricted to the required proof chain: identity/context on285; signed-graph notation and polynomial/Tutte background286–288; adequacy definitions, Proposition2andTheorem3statement289; Theorem3proof and Corollary3.1on290; Corollaries3.3–3.4on291; Section5from the bottom of292through296, including Propositions4–6and the full Theorem1proof. Application examples, classification and unrelated results were not used. This is not a claim of full uninterrupted reading of all article content.

**[5] W. Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology23(1984),37–44, DOI10.1016/0040-9383(84)90023-5.** The publisher PDF returned403HTML; its article API returned406XML, not fulltext. Authoritative-host PDF acquisition did not succeed. However the exact FULL eight primary page scans were already durably available from the ordinary public reader acquisition:

`research/inverse-problems-knot-theory-all-109-2026-10-19-owner-flyping-round1/sources/menasco1984-public-reader-pages/printed-37.jpg` through `printed-44.jpg`.

The existing acquisition record identifies the ordinary public document and exact rendered-image URLs. This task reuses those primary scans, NOT an accepted library proof or an old reading receipt. For convenient full-paper access, `menasco-1984-public-reader-derived.pdf` wraps all eight UNALTERED page images; it is explicitly a derived reader-scan PDF, not an original publisher PDF. The unrelated503-page file `menasco-ndl.pdf` was identified by its cover as *Handbook of Knot Theory* and is NOT credited as this article.

Actual reading for the NEW Conway interface: selected introduction/definition text on37; Theorem3statement and bubble-model setup38; Lemma1andits proof39–40; alternation rule40; Lemma2andthe annulus argument41–42; Lemma3andits proof42; the n=4part of Theorem3(b)proof42–43andFigure9. Images38–43were directly inspected; no full-paper reread is claimed. Hyperbolicity, peripheral tubing, n=6details and surgery Theorem4are not required or credited.

## Exact adequate-link minimality contract and proof chain

Corollary3.4, printed291: if a link admits an ADEQUATE diagram with n crossings, it cannot be projected with fewer than n crossings. It is NOT restricted to alternating diagrams. This is the contract needed for [13]'s generally NONALTERNATING pure doubles.

The proof of3.4is explicitly OMITTED in the source as very similar to3.1. The actual supplied proof model is3.1, together with the two-sided coefficient information and writhe shift:

1. The regular-isotopy polynomial Lambda_D satisfies Lambda_D=a^w F_L. The skein, kink and normalization axioms are stated on286–287. If Lambda_D=sum u_rs a^r z^s for an n-crossing diagram, the source uses the GENERAL constraints r+s<=n and -r+s<=n. These bounds are cited to reference[10], rather than proved in this paper.
2. Define the two outermost polynomials Phi_D^+ and Phi_D^- using coefficients on those two boundary lines. Theorem1(p288, proof295–296) identifies them as products of suitable Tutte-polynomial evaluations of the signed checkerboard graph and its signed quotient graphs.
3. Corollary1.1(ii), together with Proposition2(p289), gives Phi_D^+ nonzero exactly for +adequacy, and Phi_D^- nonzero exactly for -adequacy. Thus an adequate diagram has BOTH outer faces nonzero. Theorem3(i), pp289–290, states this for arbitrary diagrams, with the displayed disjoint-union polynomial formula handling the disconnected case.
4. Corollary3.1models the extremal coefficient obstruction for regular isotopy. Corollary3.3models the writhe-shift version. For3.4, the two nonzero outer faces survive multiplication by the a-power associated with the writhe difference: one shifted extremal degree rises by that shift and the other falls by it. The general coefficient constraints therefore prevent a smaller crossing count. This describes the source's advertised omitted argument, not a newly authored library lemma.

The substantial internal proof of Theorem1is also read, so the report does not treat its Tutte formula as a theorem-name shortcut:

- Proposition4(pp292–294): a reduced diagram with the prescribed long bridge and alternating-switch condition has both outer polynomials zero. Its proof is a lexicographic induction on crossing count and the number of switches needed to reach a maximal bridge. Switching the endpoint crossing and the two nullifications reduce the complexity; the nugatory/untwisting cases are handled by the explicit Figure5moves and kink factors.
- Proposition5(pp294–295): inadequacy forces the corresponding outer polynomial to vanish. It inducts on the appropriate positive-edge count, with Proposition4for its key initial case and signed graph deletion/contraction for the general step.
- Proposition6(p295) says switching an edge of an adequate signed graph makes the corresponding one-sided graph inadequate.
- Theorem1then inducts on graph-edge count: the inadequate case vanishes, the no-essential-edge case is calculated by kink factors, and in the essential-edge case the switching term vanishes by5/6while the two resolutions satisfy the Tutte deletion/contraction recurrence. This is a finite signed-graph/skein argument, not a flyping input.

### Minimal outstanding first-principles boundary for [12]

Do not substitute accepted ALTERNATING crossing minimality. A sufficient exact foundation is:

- the two-variable Kauffman regular polynomial and ordinary-link writhe normalization, including disconnected diagrams;
- the general bounds r+s<=n and -r+s<=n for every n-crossing diagram (the paper cites its[10], *Kauffman's polynomial and alternating links*; no additional acquisition is started here);
- finite Tutte deletion/contraction, factorization and the evaluation/nonvanishing facts used in Corollary1.1;
- the explicit finite Proposition4–6geometry and signed-graph induction just located in this acquired paper.

These are the finite boundary contracts to bind or prove later. No assertion is made that the repository already supplies them, and no accepted supplier was checked. No new paper chain is expanded pending root review.

## Exact Menasco Conway-sphere contract and proof chain

Theorem3(p38) assumes a NON-SPLIT PRIME ALTERNATING link L and an incompressible, PAIRWISE INCOMPRESSIBLE surface S with n>0 meridional boundary components. For the required case S is a CONNECTED four-punctured sphere. Pairwise incompressibility is the actual meridional-disk condition defined on37; it is not inferred merely from ordinary incompressibility or from an arbitrary four-punctured embedding. [13]'s pairwise-essential Conway predicate must retain that interface.

The theorem's displayed conclusion3(b)is genus zero for n=4or6. The VISIBLE/HIDDEN NORMAL FORM is established in its n=4PROOF, not written as that modern terminology in the theorem statement:

1. Bubble coordinates give upper/lower projection spheres, crossing saddles and cyclic words in P(puncture)andS(saddle).
2. Lemma1case(3) gives an ISOTOPIC standard representative with no empty intersection word and no loop meeting one bubble twice. Its proof uses incompressibility, pairwise incompressibility and irreducibility to remove innermost disks and repeated-bubble rectangles; this is stronger than choosing an arbitrary surface replacement.
3. Alternation parity and Lemma2force at least two P's per upper/lower loop and exclude words P^i S^j with j>0.
4. Lemma3bounds each loop's saddle letters by n-2. Its proof deletes an innermost saddle loop and pushes the adjoining loops off its saddles; puncture count does not increase. Repeating on the other loops leaves the selected loop's length unchanged and bounds its saddle count.
5. With n=4there are at most two upper loops. One loop gives word P^4by the same no-repeated-bubble argument used for the annulus case: this is the VISIBLE form. With two loops, the P^2/P^2case would give two annuli rather than the connected Conway sphere; the remaining case has PSPSon both upper loops and on both lower loops. There are two saddles. The cap Euler characteristic is2, and Figure9gives the Borromean-type HIDDEN arrangement with arbitrary2-string tangles substituted into its four nonsaddle crossings.

Thus the actual required geometry is the two normal forms, with all essential/prime/non-split and meridional hypotheses retained. It is NOT a normal-form theorem for an arbitrary TOP surface or arbitrary rigid graph. The further isotopy exposing the hidden form while adding two crossings is read by the lead in [13], Figure3(ii)–(iii); it is not falsely attributed to a new theorem in Menasco1984.

### Minimal outstanding first-principles boundary for [5]

The finite geometric boundary is the bubble/saddle normalization and word Lemmas1–3, with ordinary incompressibility/pairwise incompressibility and the elementary disk/ball isotopies used there. The visible/hidden n=4case itself is now read directly. No need to import the paper's hyperbolic or surgery applications.

MT's RIGID-GRAPH adaptation is NOT literal in this link-only theorem: the actual fixed five-crossing insertion, preservation of the needed essential Conway sphere, and transfer of the resulting tangle statements are MT's separate finite interface. The exact MT NORMAL TANGLE definition is still needed to verify its sphere satisfies these hypotheses. No guessed definition or graph extension is supplied here.

## Source-search and checklist disposition

A bounded ordinary public search for MT's exact normal-tangle/complexity definition found citations and later tangle papers, not an indexed quotation of the actual MT definition. [13]has no such definition according to the lead's full reading. No alternative definition was substituted.

The immediate user packet remains ONLY MT complexity/minimal representative and NORMAL TANGLE definitions (and the still-unidentified[4]bibliography lines when convenient). All other outstanding MT source supports are already grouped in `MT-source-checklist-current.json` and the lead's `mt-route-execution-readiness.md`: Sections2–3preparation;4.4–4.6excellent/cut/rigidity;5.2–5.5exclusions; finite4.8.1/5.7figure identification. Do not resume predecessor-by-predecessor requests. These acquisitions remove the public-source access burden from the user, but do not certify a completed first-principles proof or authorize authoring.
