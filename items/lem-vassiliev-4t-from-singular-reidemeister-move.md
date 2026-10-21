---
id: lem-vassiliev-4t-from-singular-reidemeister-move
kind: lemma
title: The four-term relation from singular Reidemeister III
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
  - def-countable-choice
justified_by: []
dependency_level: 3
sources:
  references:
    - title: "The Fundamental Theorem of Vassiliev Invariants"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
    - title: "Introduction to Vassiliev Knot Invariants"
      url: "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
---

## Statement

Let $R$ be a commutative ring and $n\ge0$. In the unframed category, let $V$ be an $R$-valued invariant of type at most $n$. In the framed category assume $\mathrm{AC}_\omega$ and let $V$ be an $R$-valued framed invariant of type at most $n$. In either category, every degree-$n$ chord diagram $D$ has an $n$-singular representative $K$ with no framing zeroes in the framed case, and $w_V(D):=D_nV(K)$ is independent of the representative and of its zero-free framing class. For every degree-$n$ 4T generator $D_1-D_2+D_3-D_4$, the induced values satisfy $w_V(D_1)-w_V(D_2)+w_V(D_3)-w_V(D_4)=0$; this holds in the framed category with no 1T condition.

## Statement references

[Bar-Natan and Stoimenow, §1.1, pp. 3–5](https://arxiv.org/pdf/q-alg/9702009v1)

[Chmutov, Duzhin, and Mostovoy, §§3.4 and 4.1–4.2, pp. 70–73 and 89–94](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

## Facts & Assumptions

**Given:** A commutative ring $R$, an integer $n\ge0$, an $R$-valued ambient-isotopy invariant $V$ of oriented knots of type at most $n$, and the singular-knot and chord-diagram conventions below.

[F1] [[def-singular-knot-and-vassiliev-derivative]]: the finite difference is the alternating sum over all $2^m$ independent resolutions; in the framed case the $m$ singularities include double points and simple zeroes of the normal section.

[F2] [[def-framed-chord-diagram-and-four-term-relations]]: a degree-$n$ chord diagram is an oriented circle with $n$ paired endpoint sets; the 4T generator is $D_1-D_2+D_3-D_4$ from the endpoint-slide construction.

[F3] [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]: each local oriented Reidemeister III replacement, with fixed outside lift, is an ambient isotopy supported over its move disk.

[F4] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: a crossing has sign $\operatorname{sgn}\det(v_{\mathrm{over}},v_{\mathrm{under}})$ in the oriented projection plane, calibrated so the positive Artin half twist has sign $+1$.

[A1] [[def-countable-choice]]: the framed normal-bundle and section clauses assume $\mathrm{AC}_\omega$; no choice axiom is used in the unframed crossing-change and 4T calculations.

## Proof

**Given:** The invariant, type bound, and singularity conventions in [F1], and the diagram conventions in [F2].

1.1 To realize a degree-$n$ diagram, take its finite cyclic list of chord endpoints, identify each paired pair as a four-valent vertex, and join consecutive endpoints by arcs in $S^3$. Choose disjoint small vertex balls first. Place the finitely many intervening arcs successively in general position relative to those already placed; two one-dimensional arcs in a three-manifold can be separated by a small endpoint-fixed perturbation, so there are no unintended intersections. Smoothing the joins gives exactly the prescribed double points. In the framed case choose a nonzero normal section along the regular arcs and the two branches at every vertex. To close the section around the parameter circle, cut at one regular parameter; the two endpoint unit normals lie in an oriented two-plane and can be joined because its unit circle is connected. Smooth the finitely many joins. This constructs a zero-free framed representative. The framed branch uses [A1] for the normal-bundle structures. [given, A1, F1, F2, construct]

2.1 Let $K,K'$ be representatives of the same diagram. Identify their finite marked graphs and fix matching local models in disjoint vertex balls. Join corresponding edge arcs by a homotopy relative to those balls, and homotope the normal sections over the edge strips, allowing zeroes during the homotopy. A finite relative perturbation makes the coincidence equations for two distinct curve parameters transverse: they are three scalar equations in the two curve parameters and time, so their solutions are isolated. It also makes the normal-section zero equation transverse: it is two scalar equations in the curve parameter and time, so its solutions are isolated. The parameter domains can be made compact after deleting a neighborhood of the diagonal, where each curve is locally embedded; the fixed vertex neighborhoods contain no new events. The higher-codimension loci for tangencies, triple points, degenerate section zeroes, or simultaneous events are avoided by the same finite perturbation. Hence only finitely many isolated double-point or framing-zero events occur. Passing any one event changes $D_nV$ by, up to sign, $D_{n+1}V$ on the object with that extra singularity, which vanishes by type at most $n$ in [F1]. Therefore $D_nV(K)=D_nV(K')$. These are finite-dimensional perturbations of a compact one-parameter family; the framed branch additionally uses [A1], and no countable choice is used in the unframed argument. [given, A1, F1, step 1.1, construct]

3.1 For a 4T generator choose the four local singular representatives with the same outside $(n-2)$ marked double points and, in the framed case, the same zero-free framing outside the move ball. Resolving the local marked double point with the positive-minus-negative convention gives $w_V(D_1)=a-b$, $w_V(D_2)=c-d$, $w_V(D_3)=c-a$, and $w_V(D_4)=d-b$, where $a,b,c,d$ are the four values of $D_{n-1}V$ on the remaining local configurations. The repeated configurations are identified by the oriented Reidemeister III isotopies in [F3]: $a$ occurs in the positive resolution of $D_1$ and negative resolution of $D_3$, $b$ in the negative resolutions of $D_1,D_4$, $c$ in the positive resolutions of $D_2,D_3$, and $d$ in the negative resolution of $D_2$ and positive resolution of $D_4$. Their resolution signs follow [F4]. Therefore $w_V(D_1)-w_V(D_2)+w_V(D_3)-w_V(D_4)=(a-b)-(c-d)+(c-a)-(d-b)=0$. The same local calculation applies to zero-free framed representatives because the framing outside the move ball is unchanged. This local calculation is choice-free once the framed objects are defined. [given, A1, F1, F2, F3, F4, step 2.1, algebra] ∎
