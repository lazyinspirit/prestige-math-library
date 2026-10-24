# Differential Topology rendering audit — lane 02

Reviewed 98 assigned items and all 184 listed screenshot tiles individually at original resolution. The current source hashes match the assignment; each snapshot is byte-identical to its source; all local HTML and PNG hashes match their manifests. Per-item source/snapshot/HTML hashes and every tile hash are recorded in `lane-02.json`.

## Rendering review

No confirmed rendering defects. KaTeX errors: 0; captured TikZ diagrams: 0; reported diagram failures: 0. Formulas, subscripts/superscripts, and reference links rendered legibly. The CSS uppercase technique banners and block-line wikilinks are expected. Long-item tile seams continue as expected; no accidental content clipping or reference-title leak was observed.

## Optional diagram candidates

These are uncertain, source-supported candidates for useful explanatory diagrams, not defects. No existing diagram was present in the lane to check.

### prop-two-map-intersection-as-a-diagonal-preimage

- Source lines: 33, 39, 41, 43, 45, 53, 55
- Kind: optional-intersection-as-diagonal-diagram (optional; uncertain)
- Source claim: “Then f and g are transverse iff f×g:X×Z→M×M is transverse to Δ_M; the sets {(a,b):f(a)=g(b)} and (f×g)⁻¹(Δ_M) coincide.” The proof identifies T_(y,y)Δ_M={(v,v)} and quotient map (v,w)↦v−w.
- Why a diagram may help: This is a geometric equivalence of two transversality tests and their coincidence locus; a compact diagram makes the product map and diagonal preimage immediately visible.
- Suggested content: Show X×Z --f×g--> M×M with Δ_M⊂M×M, label the pulled-back locus X×_M Z=(f×g)⁻¹(Δ_M)={(a,b):f(a)=g(b)}; optionally indicate the diagonal inclusion y↦(y,y). Keep the stated local sign factors in prose.
- Mathematical check: The proposed arrows and preimage are exactly the Statement and [F1]–[F3]. The source fixes the diagonal orientation by the orientation-preserving map y↦(y,y), the product orientation, and the sign I(f,g)=(-1)^z I(f×g,Δ_M); these conventions must not be reversed in any diagram annotation.
- Screenshot evidence: screenshots/prop-two-map-intersection-as-a-diagonal-preimage--01.png, screenshots/prop-two-map-intersection-as-a-diagonal-preimage--02.png

### thm-handle-cancellation

- Source lines: 30, 34, 36, 38, 42
- Kind: optional-handle-cancellation-schematic (optional; uncertain)
- Source claim: “If the attaching sphere of h^{k+1} meets the belt sphere of h^k transversely in exactly one point, then W∪h^k∪h^{k+1} is diffeomorphic to W relative to ∂₀W.” [F1] defines the cancellation as one transverse intersection point; [F4] says the standard complementary pair fills an n-disc.
- Why a diagram may help: The theorem is organized around a geometric one-point intersection criterion and local cancellation. A labeled schematic can help readers see which attaching and belt spheres intersect and what is removed.
- Suggested content: Use a clearly schematic middle-boundary cross-section: the attaching sphere of the (k+1)-handle intersects the belt sphere {0}×S^{n−k−1} of the k-handle in one transverse point; show the complementary pair filling a ball and the unchanged incoming boundary ∂₀W. Label dimensions and the relative-to-∂₀W conclusion; do not imply a general low-dimensional picture or any extra sign rule.
- Mathematical check: Source lines 30, 34, 36, and 42 support precisely the one-point transverse intersection, belt sphere, complementary pair, and ball filling. The diagram is an explanatory schematic for all 0≤k≤n−1, not a proof or a literal 2D realization.
- Screenshot evidence: screenshots/thm-handle-cancellation--01.png, screenshots/thm-handle-cancellation--02.png

### thm-pontryagin-thom-correspondence-in-fixed-codimension

- Source lines: 50, 55, 60, 63, 70, 80, 88, 90, 92, 94, 96
- Kind: optional-pontryagin-thom-correspondence-diagram (optional; uncertain)
- Source claim: The Statement gives a bijection between framed cobordism classes of closed framed (n−k)-submanifolds of Sⁿ and πₙ(Sᵏ); [F1] defines the collapse map, and [F6] says the centre regular preimage recovers (N,φ) while collapse after regular preimage is homotopic to the original map.
- Why a diagram may help: The theorem asserts two inverse geometric constructions. A correspondence diagram can expose their direction and the two composite identities at a glance.
- Suggested content: Show framed submanifold (N,φ) ↦ collapse/Thom map f_(N,φ):Sⁿ→Sᵏ and smooth map f:Sⁿ→Sᵏ ↦ framed regular preimage f⁻¹(y); annotate that the collapse of that preimage is homotopic to f and that the centre preimage of the collapse recovers (N,φ). Include n=k as a zero-dimensional/empty-preimage case if shown.
- Mathematical check: Maps and inverse checks match [F1], [F6], and proof steps 2.1–2.2. The correspondence is on framed cobordism classes and homotopy classes; avoid depicting a pointwise inverse map between representatives.
- Screenshot evidence: screenshots/thm-pontryagin-thom-correspondence-in-fixed-codimension--01.png, screenshots/thm-pontryagin-thom-correspondence-in-fixed-codimension--02.png, screenshots/thm-pontryagin-thom-correspondence-in-fixed-codimension--03.png

## Limitations

This review covers local title and complete ItemBody captures only. No live site, production route, bibliography footer, or proof validity audit was performed. The preview preparation notes that the reference-title lookup was limited; no leak was visible in these captures. Diagram candidates are optional editorial suggestions.
