---
id: lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy
kind: lemma
title: "A standard stem arc system can be straightened by a boundary- and puncture-fixed ambient isotopy"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 3
deps: [lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies, thm-choice-implies-dependent-implies-countable-choice, lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints, lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk, thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians, thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group, def-axiom-of-choice, def-standard-meridians-of-a-punctured-disk]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, Proposition 1.11 and sections 1.2.6-1.2.7, printed pp. 36-38"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "The published supplier lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points, finite-sequence clause"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
---

## Statement

Assume AC. Let $h\in\operatorname{Homeo}^+(D^2,\partial D^2)$ fix every
$q_i$, and suppose each $h(s_i)$ is isotopic to $s_i$ relative to endpoints.
Then $h$ is isotopic relative to $\partial D^2\cup Q_n$ to a homeomorphism
$h'$ with $h'(s_i(t))=s_i(t)$ for every $i,t$.

## Facts & Assumptions

**Given:** AC, the finite standard stems of [[def-standard-meridians-of-a-punctured-disk]], and the stated $h$.

[F1] Relative homotopy of simple proper arcs implies relative isotopy, by the finite bigon and final-disk construction under AC of [[lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints]].

[F2] The completed full slit surface is a compact disk, with the quotient and isotopy correspondence of [[lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk]].

[F3] A boundary-fixed disk homeomorphism is joined to the identity by the Alexander contraction ([[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]]). In a disk coordinate centered at a fixed interior marked point, the same formula fixes that point throughout.

[F4] Under AC, smooth finite collision-free point motions extend to boundary-fixed disk isotopies ([[lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

1.1 *Relative versions of the elementary arc moves.* The bigon moves and the final puncture-free disk move in [F1] can be performed by ambient isotopies. In a slightly enlarged neighborhood of the moving disk, prescribe an orientation-preserving homeomorphism taking its first arc to its second, and equal to the identity on the neighborhood boundary; disk coordinates extend this prescription across the two complementary disks. [F3] joins this homeomorphism to the identity, with support in that neighborhood. For an endpoint at a marked point, center the coordinate there and use the marked-point version of the same formula; for an outer-boundary endpoint use a half-disk neighborhood and keep its outer edge fixed. These moves fix the outer boundary and all marked points. They work just as well in a surface already cut along some fixed arcs: the boundary of that surface is fixed throughout, and regluing its paired sides gives an ambient isotopy on the filled disk. All neighborhoods and isotopies are compact, so regluing is continuous at their endpoints. [F1, F3, construct]

1.2 *Inductive goal.* For $k=0,\dots,n$ construct an ambient isotopy relative to $\partial D^2\cup Q_n$ whose final composition with $h$ carries $s_i$ onto $s_i$ as a set for every $i\le k$. The identity isotopy gives $k=0$. Earlier stems need be kept pointwise fixed by each new correcting isotopy, though their parametrizations under the composite will be corrected at the end. [given, base, construct]

2.1 *The actual partial cut.* Assume the goal for $k-1$, and call the current homeomorphism $g$. Cut the filled disk along $s_1,\dots,s_{k-1}$, completing their marked endpoints as in [F2], and then remove only the remaining punctures. Call the result $Y$. The outer-strip construction of [F2] with only these $k-1$ stems gives a compact disk with $n-k+1$ remaining marked points before removal. Thus $Y$ is a punctured disk, not a simply connected disk. The arcs $a=g(s_k)$ and $b=s_k$ lift to $Y$ with the same initial sector copy of $d$: $g$ preserves orientation and each earlier stem as a set, so it preserves the sector containing all the remaining standard stems. Their other endpoint is $q_k$. [F2, step 1.2, ih, construct]

3.1 *Why the homotopy survives this cut.* The quotient projection is not a map $Y\to X$ at the completed tips of the earlier punctures. Delete those finitely many boundary tips to obtain $Y_0$. In disjoint boundary collar charts away from $d_k$ and the remaining punctures, push slightly inward near each deleted tip, leaving $d_k$ fixed. This homotopy maps $Y$ into $Y_0$ at its final time and preserves $Y_0$ throughout, so $Y_0\hookrightarrow Y$ induces a based fundamental-group isomorphism. The cut quotient restricts to a based map $Y_0\to X$. It identifies $\pi_1(Y,d_k)$ with the free subgroup generated by $x_k,\dots,x_n$: remove small disks around the remaining punctures and cut along their remaining truncated stems. The resulting region is a disk; reattaching its paired stem-side collars adds exactly one loop for each remaining puncture. The flower retraction and finite tree collapse give these loops as a free basis; their quotient images in $X$ are the corresponding standard lassos, independent by [[thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]]. Now truncate $a,b$ near $q_k$ and join their truncated endpoints to the same $p$ in its small punctured disk. The resulting paths $A,B:d_k\to p$ avoid the deleted tips. Their assumed compact endpoint homotopy in $X$ gives $[AB^{-1}]\in\langle x_k\rangle$: uniform continuity makes a common terminal strip lie in that small disk, and its endpoint connectors differ by an integer winding around $q_k$. Injectivity of the induced map gives the same peripheral relation in $Y$. Append radial tails and absorb that winding by interpolating polar angles and positive radii to a radial tail. The radii tend to zero uniformly in time, giving a compact relative-endpoint homotopy in $Y$. [given, F2, step 2.1, construct]

4.1 *Straightening the next arc in the partial cut.* Choose a closed-disk coordinate for the completed partial cut of step 2.1, prescribing its boundary parametrization so that each opened shore retains its label. Its remaining marked points form an arbitrary finite configuration. Transport that configuration to the canonical one by smooth finite point motions and [F4] (use distinct buffer points and move one point at a time before smoothing the joins). Apply [F1] to the two transported arcs, with the transported compact homotopy of step 3.1, and return through those fixed coordinates. Perform its moves ambiently as in step 1.1, fixing every boundary side of $Y$ and every remaining marked point. These moves run from $a$ to $b$, rather than from $b$ to $a$. Regluing gives an ambient isotopy of $D^2$ relative to $\partial D^2\cup Q_n$ and all earlier stems, whose final map sends $g(s_k)$ onto $s_k$. Compose it with the preceding corrections. This establishes the inductive goal at $k$, and the finite induction yields a map $g$ preserving all stems as sets. [F1, F4, step 1.1, step 1.2, step 3.1, ih]

5.1 *Correcting the parametrizations simultaneously.* For this final $g$, write $g(s_i(u))=s_i(f_i(u))$, where each $f_i$ is an increasing homeomorphism of $[0,1]$ fixing both endpoints. On each of the two copies of $s_i$ in the full completed cut disk $H$ prescribe the same boundary motion $s_i(v)\mapsto s_i((1-t)v+t f_i^{-1}(v))$, and keep its outer boundary arc fixed. These increasing maps agree at every tip and sector endpoint, and give a continuous boundary-circle isotopy $b_t$ starting at the identity. In a disk coordinate extend it by $r z\mapsto r b_t(z)$ for $|z|=1$ and $0\le r\le1$. At the center this is continuous uniformly in $t$. Each extension is a homeomorphism, respects the paired slit-side fibers, and hence descends through the compact quotient to an isotopy of the filled disk fixing the outer boundary and punctures. At $t=1$ its composition with $g$ fixes every $s_i(u)$ pointwise. [F2, step 4.1, construct]

6.1 *Conclusion.* The finite composition of step 4.1 and the parametrization correction of step 5.1 is the required isotopy from $h$ to $h'$. For $n=0$ there is nothing to straighten. AC is used in the general plane-arc and relative Jordan disk route and through countable-choice finite point motions; the completed circular/straight finite cut requires no additional Choice; no smoothing of a topological isotopy and no unsupported avoidance of previously fixed stems is required. [step 4.1, step 5.1, discharge-induction] ∎
