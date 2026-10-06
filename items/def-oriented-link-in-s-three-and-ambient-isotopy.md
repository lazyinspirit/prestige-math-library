---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered cumulative historical verification: original independent Step5 whole-item claim/body/proof reading for def-oriented-link-in-s-three-and-ambient-isotopy, completed Step5 repairs/dispositions, and later exact Step7 local correction reasoning. Later correction evidence is local author repair/self-review, not an independent fresh audit. Every substantive preguard-to-current delta is covered by the recorded repair reason; no new review or historical audit stamp is claimed. Supplier/source coverage is limited to actual recorded passages/interfaces, excluding recursive foundational closure/all bibliography.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader and Step7 repair dispatch","content_sha256":"c9b404fca026d01774c0888106607a8cbc489ecfc28c6ecfa7a38e6dd6d72146","evidence":["research/frontier-38-owner-30-reader-17.md","research/frontier-38-owner-30-reader-findings-17.json","research/frontier-38-owner-30-dispatch/reader-reader-17.result.json","research/frontier-38-owner-30-alpha-batch-17-5a-decisions.json","research/frontier-38-owner-30-step5-closure.json","research/frontier-38-owner-30-step7-auditor-baseline.json","research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u17.json","research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u17.result.json"],"historical_binding":{"preguard_raw_sha256":"0adc2192e5ab73e240d1aa4ba0c3b17c0fd71ff9cd956aed818019333bf646ab","preguard_content_sha256":"7fdcd12fe9d135fda37a5c8f59dad29fec0bd26f1648d9f0ac0a014a67c519a7","captured_carrier":{"path":"research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u17.log","line":6466},"postguard_content_sha256":"068a9fc7650f59a9737fceb92b8132daf77dd534aba3029b369d4c77ec22a744","final_carrier":"git d90f26208:items/def-oriented-link-in-s-three-and-ambient-isotopy.md","publication_transformation":"status draft to published; verification excluded; remaining mathematics/source bytes match exact postguard carrier","original_read_completed_at":"2026-10-03T09:03:35.943Z","local_repair_completed_at":"2026-10-03T15:55:38.314Z","local_repair_reason":"The closed ball and S^3 times I are not manifolds without boundary under def-smooth-manifold. Added local smooth-extension conventions across their boundary; links, orientations and equivalence are unchanged. Composition and inverse families remain smooth under this convention.","local_repair_qualification":"Local author repair/self-review; cumulative with original independent full item reading"}}
id: def-oriented-link-in-s-three-and-ambient-isotopy
kind: definition
title: "Oriented links in the three-sphere and ambient isotopy"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-smooth-embedding, def-euclidean-spheres-and-closed-balls,
       def-oriented-smooth-manifold-and-oriented-chart,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-smooth-manifold]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2 (printed pp. 12-26) and Figures 3-12"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 2-3"
      url: "https://arxiv.org/pdf/2406.18203v1"
---

## Definition

Work in the smooth category ([[def-smooth-manifold]]). Fix once and for all the
three-sphere as the one-point compactification

$$S^3:=\mathbb R^3\cup\{\infty\}$$

of Euclidean three-space, carrying its standard smooth structure, and fix the
standard orientation of $S^3$: the orientation induced by the standard
orientation of $\mathbb R^3$ under the one-point compactification, so that the
charts of the standard atlas away from $\infty$ are orientation-preserving and
the orientation is that of a connected oriented $3$-manifold in the sense of
[[def-oriented-smooth-manifold-and-oriented-chart]]. For $r>0$ write
$\overline B_r:=\{x\in\mathbb R^3:\lVert x\rVert_2\le r\}$, the closed ball of
[[def-euclidean-spheres-and-closed-balls]] with the following restriction convention. Smoothness on a closed ball means
local extension to a smooth map on an open neighborhood in Euclidean space;
smoothness on $M\times I$, for a smooth manifold $M$ without boundary, means
local extension across $t=0,1$ in $M\times\mathbb R$. Thus these closed domains
are not asserted to be manifolds without boundary in the cited definition.

**Links.** The **standard oriented circle** is the circle
$S^1=\mathbb R/\mathbb Z$ with its standard counterclockwise orientation,
regarded as a smooth $1$-manifold; a
**finite disjoint union of oriented circles** is a smooth manifold
$C=S^1\sqcup\dots\sqcup S^1$ ($k$ summands, $k\in\mathbb N$)
diffeomorphic to the disjoint union of $k$ standard oriented circles. An
**oriented link** (with $k$ components) is a smooth embedding

$$L\colon C\longrightarrow S^3$$

of such a disjoint union in the sense of [[def-smooth-embedding]]. So $L$ is
injective, is an immersion, and is a homeomorphism onto its image with the
subspace topology, and its image $L(C)$ is a finite disjoint union of smoothly
embedded circles. Thus every link considered here is finite and tame: the
smoothness of $L$ is exactly the standing convention, and no polygonal or other
tame model is used. The **components** of $L$ are the images of the individual
summands, and the number of components is $k$.

**Ambient isotopy.** Let $I=[0,1]$. An **ambient isotopy** of $S^3$ is a smooth
map

$$H\colon S^3\times I\longrightarrow S^3$$

such that $H_0=\mathrm{id}_{S^3}$, each $H_t\colon S^3\to S^3$,
$H_t(x):=H(x,t)$, is a diffeomorphism ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]),
and each $H_t$ is orientation-preserving with respect to the fixed orientation.
The last clause is in fact automatic: $t\mapsto H_t$ is continuous in the
$C^\infty$ topology of the diffeomorphism group, the orientation sign is locally
constant in $t$, and $H_0=\mathrm{id}$ is orientation-preserving, so it is kept
only for emphasis.

**Equivalence of links.** Two oriented links $L_0\colon C_0\to S^3$ and
$L_1\colon C_1\to S^3$ are **equivalent** (written $L_0\sim L_1$), or
**ambient isotopic**, when there are an ambient isotopy $H$ and an orientation-preserving diffeomorphism $f:C_0\to C_1$ with
$H_1\circ L_0=L_1\circ f$. Thus parametrizations and component labels are
irrelevant, while the induced orientation of each image component is preserved. The relation is an equivalence relation on links:
it is reflexive with $H=\mathrm{id}$, transitive by composing isotopies, and
symmetric because a smooth family of diffeomorphisms has a smooth family of
inverses. An equivalence class is an **(oriented) link type**.

**Moving off $\infty$.** Because the definition of equivalence allows the
isotopy to move a link through $\infty$, the standard practice of this page is
to first apply an ambient isotopy that carries a given link into the open ball,
and only then to project; every projection and every Reidemeister move below is
read after moving the link off $\infty$ into $\mathbb R^3$ in this way. The
orientation-preserving clause in the definition of ambient isotopy is exactly
what the oriented Reidemeister moves and the oriented closure construction must
respect. The unoriented theory uses the same ambient isotopies but forgets
the orientations of the link components.

**Links in the three-sphere versus links in $\mathbb R^3$.** A link contained in
$\mathbb R^3\subset S^3$ is a link in $S^3$; conversely every link may be
assumed after isotopy to lie in $\mathbb R^3$, by choosing a point outside the compact one-dimensional image and moving that
point to $\infty$ by a smooth rotation of the standard sphere. When comparing
links already in $\mathbb R^3$, an isotopy can also be arranged to avoid
$\infty$ throughout; the track-avoidance argument is given in
[[thm-oriented-reidemeister-equivalence-theorem]].
