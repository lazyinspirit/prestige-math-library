---
id: lem-geometric-intersection-numbers-are-isotopy-invariants
kind: lemma
title: "Geometric intersection numbers are isotopy invariants"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints
  - lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions
  - def-boundary-fixed-mapping-class-group-of-a-punctured-disk
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Lemmas 3.2 and 3.3 and the definition of I"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Lemmas 3.2 and 3.3 and the discussion around Figure 5, printed pp. 18-20 (quoting [10, Expose III, Proposition III.12])"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, Chapter 1"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
      locator: "Proposition 1.7 (bigon criterion), Proposition 1.10 (isotopy versus homotopy), Proposition 1.11 (extension of isotopies), printed pp. 31-38"
verification:
  precheck: pass
---

## Statement

Assume AC, used in the relative-isotopy input where homotopic arcs are
replaced by isotopic ones through
[[lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints]].
For curves $c_0,c_1$ in $(D,\Delta)$
([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]) the
number $I(c_0,c_1)$ does not depend on the chosen minimal-intersection
representative $c_1'$ of $c_1$, and if $c_i'$ is isotopic to $c_i$ for $i=0,1$
then
$$I(c_0',c_1')=I(c_0,c_1).$$
Consequently $I$ is an invariant of isotopy classes of curves, and it is
computed in the source's picture as well as in any curve system obtained from it
by an ambient isotopy.

## Facts & Assumptions
**Given:** The marked disk $(D,\Delta)$, the isotopy relation $\simeq$ of [[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]], its minimal-intersection condition, the half-weight formula for $I$ with the exceptional value $2$ for isotopic simple closed curves and the flow extension for pairs meeting on $\partial D$, and curves $c_0,c_1$.

[L1] For curves with $c_0\cap c_1\cap\partial D=\varnothing$ the number $I(c_0,c_1)$ is defined as $|(c_0\cap c_1')\setminus\Delta|+\tfrac12|c_0\cap c_1'\cap\Delta|$ for any minimal-intersection representative $c_1'$ of $c_1$, with the exceptional value $2$ when $c_0,c_1$ are simple closed curves with $c_0\simeq c_1$; for pairs meeting on $\partial D$ it is defined after pushing $c_0$ by a small positive boundary flow ([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]).

[L2] Assume AC. Simple proper arcs in the punctured disk with the same endpoints that are homotopic relative to endpoints are isotopic relative to endpoints as unoriented arc images ([[lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints]]).

[L3] Assume AC. Let $\mathcal N$ be a finite family of pairwise disjoint simple arcs in $D$ with endpoints on $\partial D$ and interiors avoiding the marked points, and let $T$ be a simple arc with endpoints in $\Delta\cup\partial D$. Then $T$ is isotopic relative to endpoints to an arc meeting every member of $\mathcal N$ minimally, and $T$ is isotopic relative to endpoints to an arc disjoint from $\mathcal N$ if and only if some minimal-position representative is disjoint from $\mathcal N$ ([[lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions]]).

[L4] The relative minimal-position comparison is Khovanov–Seidel Lemma 3.2: if $c_1',c_1''$ are isotopic, both minimal with $c_0$, and not isotopic to $c_0$, a boundary-fixed ambient isotopy preserving $\Delta$ and $c_0$ setwise carries one to the other. Lemma 3.3 says that an isotopic minimal pair is either closed or has all endpoints marked, and is carried, relative to $c_0$, to one of the two configurations of Figure 5. For a two-marked-endpoint arc each configuration has precisely the two common marked endpoints. These are the source's relative comparison lemmas, not a claim that arbitrary isotopies preserve a fixed intersection set (Khovanov–Seidel, printed pp. 18–19).

[L5] Simultaneous transport by a boundary-fixed diffeomorphism preserving $\Delta$ bijects intersection sets, preserves their marked subsets, and carries bigons and minimal positions to bigons and minimal positions. An identity-component isotopy gives isotopic transported curves ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], [[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]).


## Proof

**Proof technique:** direct.

1.1 *The exceptional cases.* Suppose the pair has no common boundary endpoint and $c_0\simeq c_1$. For closed curves the prescribed value is $2$. For arcs, isotopy preserves their endpoint set, so both endpoints must lie in $\Delta$. Each relative minimal model in [L4] has just those two common marked endpoints, giving $I=1$. These values depend only on the isotopy classes. [L1, L4]

2.1 *Other minimal representatives give the same count.* Suppose $c_0\not\simeq c_1$ and let $c_1',c_1''$ be minimal representatives of $c_1$ relative to $c_0$. The relative comparison [L4] gives an ambient isotopy preserving $c_0$ setwise and carrying $c_1'$ to $c_1''$. Its endpoint map bijects intersections with $c_0$ and preserves $\Delta$, so the ordinary and marked intersection counts agree. With step 1.1 this proves representative independence away from boundary intersections. The AC-dependent arc inputs [L2] and [L3] retain their hypotheses; the stronger relative comparison is the source lemma [L4]. [L2, L3, L4, L5, step 1.1]

3.1 *Isotopy invariance away from boundary intersections.* An endpoint map $F$ of an identity-component ambient isotopy carrying $c_0$ to $c_0'$ carries a minimal representative $c_1'$ to a minimal representative of the same class of $c_1$. Simultaneous transport preserves both counts. If the pair is isotopic and closed, both values instead equal the prescribed $2$; otherwise the weighted formula applies. Hence $I(c_0',c_1)=I(c_0,c_1)$ by step 2.1. Representative independence gives invariance in the second argument as well. [L1, L5, step 1.1, step 2.1]

4.1 *The boundary push is independent of its small positive choice.* Interpolate between the two positive boundary fields and their extensions by convex combination, and between sufficiently small positive flow times; write $g_s$ for the resulting endpoint diffeomorphisms. Compactness of the parameter interval allows a common small-time bound, so each boundary endpoint of $g_s(c_0)$ stays in one complementary interval of $\partial D\setminus c_1$. Larger allowed times can first be decreased within those intervals. Choose a boundary isotopy $h_s$, starting at the identity and fixing the endpoints of $c_1$, which carries these moving endpoints back to those of $g_0(c_0)$. Extend $h_s$ to $H_s$ in a thin collar preserving $c_1$ setwise and missing $\Delta$: in collar coordinates straightening the endpoint germs of $c_1$ to radial segments, extend the boundary velocity tangentially along these segments, with a cutoff. Then $a_s:=H_sg_s(c_0)$ is a smooth isotopy of embedded arcs with fixed endpoints. It extends to a boundary-fixed ambient isotopy fixing $\Delta$: extend the velocity along the moving arc over tubular charts with cutoffs; it vanishes at fixed endpoints, and transversality at boundary endpoints allows the extension to vanish on the boundary. Thus step 3.1 gives $I(a_0,c_1)=I(a_1,c_1)$. Simultaneous transport by $H_1$, which preserves $c_1$, bijects intersections and marked subsets and preserves the Jordan-disk condition; therefore $I(g_1(c_0),c_1)=I(a_1,c_1)=I(g_0(c_0),c_1)$. The comparison is between isotopy classes before minimization; no isotopy preserving $c_1$ is asserted between the arbitrary pushed arcs themselves. [L1, L5, step 3.1]

5.1 *Invariance with the boundary convention.* A boundary-fixed endpoint map $F$ transports a positive field $Z$ to $F_*Z$ and conjugates their flows, so simultaneous transport identifies $I(f_t(c_0),c_1)$ with $I(Ff_t(c_0),F(c_1))$. Step 4.1 permits the transported push for $F(c_0)$. Since the pushed pair has disjoint boundary endpoints and $F(c_1)\simeq c_1$, step 3.1 identifies the latter count with the pushed count for $(F(c_0),c_1)$. This proves invariance in the first argument. For an isotopy in the second argument, use the same fixed push of $c_0$; its boundary endpoints are disjoint from the fixed endpoints of every curve in that isotopy, so step 3.1 applies directly. [L5, step 3.1, step 4.1]

6.1 *Conclusion.* The ordinary weighted formula, the exceptional closed value, and the positive-boundary extension all define numbers independent of minimal representatives and invariant under the stated isotopies. The AC-dependent arc inputs retain the hypothesis in the Statement; the finite counts and explicit collar comparison require no additional choice. [step 1.1, step 2.1, step 3.1, step 5.1] ∎

