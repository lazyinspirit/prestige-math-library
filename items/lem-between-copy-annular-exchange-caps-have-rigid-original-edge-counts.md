---
id: lem-between-copy-annular-exchange-caps-have-rigid-original-edge-counts
kind: lemma
title: Between-copy annular exchange caps have rigid original edge counts
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-essential-pl-disks-admit-normal-replacements
  - lem-admissible-normal-vectors-have-rigid-edge-count-averages
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

Let $D$ be an essential normal disk of least original-edge weight and, among such disks, of lexicographically least normal vector in a finite simplicial PL three-manifold triangulation. In an actual original-triangulation regular normal diagram, suppose two distinct full-resolution components $D_0,D_1$ have vector $d=v(D)$. Let one of its exchange annuli $A$ have one frontier circle on each of these components, with its usual rectangular switching neighborhood and interior disjoint from the full resolution.

Let $E_i\subset D_i$ be the disk cap bounded by that circle. Then $N(E_0)=N(E_1)$ on every original global edge and $w(E_0)=w(E_1)>0$. Replacing either cap by the other cap joined across $A$ gives an embedded proper essential PL disk with the original boundary of that copy. Each replacement has edge-count vector $N(D)$, and every componentwise edge-nonincreasing essential normal replacement of it has vector $d$.

No irreducibility, orientability or fundamentalness assumption is required. Equal edge counts here do not assert that the caps are normally parallel or that the exchange lies in the product between the two copies.

## Facts & Assumptions

**Given:** The actual normal diagram, the two disk components, the selected annular exchange and the least-weight lexicographic choice in the Statement. Write $N$ for counts on all original global edges and $w$ for their sum.

[F1] The normal vector determines the abstract surface and the boundary homotopy class of its corresponding curves. Actual regular diagrams retain their original normal tetrahedral disk pieces and their rectangular exchange neighborhoods; exchange strips miss the original edges. [[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[F2] An embedded essential PL disk has an essential normal replacement componentwise nonincreasing on the original edges. The finite cap preparations and compressions used for that replacement do not assert preservation of its ambient isotopy class. [[lem-essential-pl-disks-admit-normal-replacements]]

[F3] If two admissible normal vectors have original-edge counts averaging to those of $D$, their normal vectors average to $d$. If both are least-weight essential disks, the lexicographic choice forces both vectors to be $d$. [[lem-admissible-normal-vectors-have-rigid-edge-count-averages]]

[F4] A disk patch cut out by actual exchange traces, with no original-boundary side and with its trace segments joining distinct original normal-cell sides, has positive original-edge weight. [[lem-normal-exchange-disk-patches-have-positive-edge-weight]]

## Proof

1.1 Each $D_i$ is an essential disk: its vector is $d$, so [F1] identifies its abstract disk and boundary homotopy class with those of $D$. Its one trace circle bounds the unique disk cap $E_i$ not containing $\partial D_i$. Put $K_i=\overline{D_i\setminus E_i}$. This is an annulus with outer boundary $\partial D_i$. The two end components are disjoint, and the interior of $A$ misses both of them. Consequently $K_0\cup A\cup E_1$ and $K_1\cup A\cup E_0$ are embedded disks after rounding their attaching corners in the supplied switching rectangles. Their boundaries are respectively exactly $\partial D_0$ and $\partial D_1$. They are therefore proper and essential. Denote them by $P_0,P_1$. [given, F1, construct]

2.1 This rounding preserves all original-edge counts. Its attaching circles and exchange strips miss the original edges, so take their finitely many corner neighborhoods disjoint from those edges. Keep the retained cap and remainder unchanged near their edge intersections. All these choices are finite. Since $N(D_0)=N(D_1)=N(D)$, the resulting identities are $N(P_0)=N(D)-N(E_0)+N(E_1)$ and $N(P_1)=N(D)-N(E_1)+N(E_0)$. Thus $N(P_0)+N(P_1)=2N(D)$. The two disks are normalized separately; no assertion that their images are disjoint is needed. [F1, step 1.1, construct, algebra]

3.1 Choose essential normal replacements $U_0,U_1$ by [F2]. Their edge counts satisfy $N(U_i)\le N(P_i)$. Least weight gives $w(U_i)\ge w(D)$, while step 2.1 gives $w(U_0)+w(U_1)\le2w(D)$. Hence both weights equal $w(D)$. The nonnegative componentwise deficits sum to zero, so $N(U_0)+N(U_1)=2N(D)$. Apply [F3] and the lexicographic minimum to obtain $v(U_0)=v(U_1)=d$, and hence $N(U_0)=N(U_1)=N(D)$. Again the componentwise inequalities and equality of their sums force $N(P_0)=N(P_1)=N(D)$. Substituting in step 2.1 proves $N(E_0)=N(E_1)$. The argument applies to any choices of the two replacements having the stated componentwise property. [F2, F3, step 2.1, given, construct, algebra]

4.1 Cut each $D_i$ only along its selected trace circle. Its cap $E_i$ is a disk patch with no original-boundary side. In each original normal cell the selected trace pieces join distinct sides, as they are the frontier traces of the actual original exchange in [F1]. Thus [F4] gives $w(E_i)>0$. Together with step 3.1 this proves every edge-count and replacement assertion. None of the constructions fills the sphere $E_0\cup A\cup E_1$, uses a ball bounded by it, or provides a normal isotopy across it. In particular the conclusion has not supplied the missing relative-parallelism or first-contact argument. [F1, F4, step 1.1, step 3.1, construct] ∎
