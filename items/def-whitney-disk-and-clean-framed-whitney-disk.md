---
id: def-whitney-disk-and-clean-framed-whitney-disk
kind: definition
title: Whitney disk, clean Whitney disk and framed Whitney disk
deps:
- def-whitney-circle-for-a-pair-of-intersection-points
- lem-opposite-local-signs-give-the-compatible-whitney-circle-framing
- def-normal-and-conormal-bundles-of-an-embedded-submanifold
- def-smooth-embedding
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Theorem 7.27(i) and its proof, printed pp. 138-140 (the "Whitney disc" $D^2\subseteq M$ and the condition
      that the framing changes so as to extend across $D^2$)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 and Lemma 6.7, printed pp. 71-74 (the standard model embedding $\varphi:U\subseteq\mathbb
      R^2\to V$ extending the arcs)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
verification:
  precheck: n/a
---

## Definition

Let $\gamma=\alpha*\beta$ be a Whitney circle for two complementary sheets, with distinct transverse corners $p,q$. Use the genuine two-corner bigon $\mathcal B=\{(u,v):-1\le u\le1,\ |v|\le1-u^2\}$ as its source. A **Whitney disk** is a map $W:\mathcal B\to X$ smooth as a map from a manifold with corners, meaning that it admits a smooth local extension near every source point, with the fixed product corner charts, taking its two boundary edges to $\alpha,\beta$, with the prescribed product corner collars, and transverse to both sheets on its interior. A **clean** disk is embedded, its open interior misses the two sheets, and its boundary collars are adapted to the sheets: along each open edge its inward tangent is transverse to the corresponding sheet, so the disk tangent plane intersects the sheet tangent space in exactly the edge tangent line. An **immersed** Whitney disk has injective differential on the full two-dimensional tangent space at every source point, including boundary and corners, with the same fixed corner data, allowing interior self-intersections and intersections with the sheets.

For a clean or immersed disk, $\nu_W:=W^*TX/dW(T\mathcal B)$ is a rank-$(m-2)$ smooth normal bundle, using the full-rank local extensions at the boundary and corners. A general Whitney disk map may have singular interior points; no normal bundle is asserted for such a map. An **admissible boundary frame** is a pair of orthogonal partial frames of ranks $a-1,b-1$ as in [[lem-opposite-local-signs-give-the-compatible-whitney-circle-framing]], adapted to the respective sheet collars and matched at the corners. A summand of rank zero has its unique empty frame; this convention includes the one-dimensional-sheet local model. The compatible-framing lemma supplies existence only in its stated positive-rank range. A **clean framed Whitney disk** is a clean disk equipped with a smooth normal trivialization extending an admissible boundary frame. The boundary frame is part of the data; the existence theorem permits an allowed one-summand correction before extension. A specified arbitrary full boundary frame is extendible exactly when its loop discrepancy from a disk frame is nullhomotopic. The rounded boundary circle has rank-$m-1$ normal bundle; its inward tangent-to-disk line is additional to the disk normal bundle. Null-homotopy, cleanliness and admissible frame extension are separate conditions.
