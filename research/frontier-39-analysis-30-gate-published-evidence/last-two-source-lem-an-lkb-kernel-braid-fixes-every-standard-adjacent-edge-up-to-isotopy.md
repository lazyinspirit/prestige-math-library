---
id: lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy
kind: lemma
title: An LKB kernel braid fixes every standard adjacent edge up to isotopy
status: draft
origin: pipeline
deps: [lem-the-fork-noodle-pairing-detects-essential-intersections, def-lawrence-krammer-bigelow-representation, thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions, def-axiom-of-choice, lem-the-fork-noodle-pairing-is-well-defined-and-equivariant, thm-the-integral-lkb-module-is-free-of-rank-n-choose-two, def-lexicographic-order-on-fork-noodle-deck-monomials, lem-fork-detection-transports-to-arbitrary-boundary-crosscuts, lem-jordan-schoenflies-extension-for-plane-curves]
justified_by: []
aliases: []
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 3.2, printed p. 482, proof of Theorem 1.1: the successive disjoining of sigma(E_1) from N_3,...,N_n and the repetition for E_2,...,E_{n-1}; Section 2.3, printed pp. 477-479: the Basic Lemma"
    - title: "Farb and Margalit, A Primer on Mapping Class Groups, version 5.0 author draft"
      url: "https://www.math.utah.edu/~margalit/primer/"
      locator: "Chapter 1, sections 1.2.4-1.2.7, printed pp. 25-38: arcs in surfaces, homotopic arcs, and isotopy extension"
verification:
  precheck: n/a
---
## Statement

Assume AC. Fix the standard configuration: punctures
$p_1<\cdots<p_n$ on the real axis of the disk $D$, boundary points
$d_1,d_2$ in the lower half-plane, standard edges
$E_i=[p_i,p_{i+1}]$ for $1\le i\le n-1$, and standard noodles $N_j$ winding
around $p_j$ and no other puncture, crossing the real axis twice. If a
boundary-fixed homeomorphism $\sigma$ of $(D,P)$ represents an element of the
kernel of $\rho_{\mathrm{LKB}}$, then for every $i$ the arc $\sigma(E_i)$ is
isotopic relative to $\partial D\cup P$ to $E_i$; in particular $\sigma$
fixes each $E_i$ up to isotopy and preserves the labelling of the punctures.

## Facts & Assumptions

**Given:** the standard configuration, the standard edges $E_1,\dots,E_{n-1}$
and standard noodles $N_1,\dots,N_n$, each $N_j$ winding
around $p_j$ and no other puncture; a homeomorphism $\sigma$ fixing
$\partial D$ pointwise with $\sigma(P)=P$ and representing a class in
$\ker\rho_{\mathrm{LKB}}$.

[F1] For the proof use auxiliary singleton crosscuts $M_j$ with DISTINCT boundary endpoint pairs, not a pairwise-disjoint family of common-endpoint noodles. Join the lower boundary point $-\mathrm i$ to the real punctures by straight tethers; their interiors are disjoint and each meets the real axis only at its terminal puncture. In a small boundary half-disk fan out their initial germs to disjoint boundary intervals, in their cyclic order. Thin closed polygonal/circular neighborhoods $V_j$ of the resulting disjoint tethers are disks meeting $\partial D$ in disjoint intervals, containing exactly $p_j$. Choose the widths below the finitely many positive separations from the other tethers, punctures and nonincident $E_i$. Their inner boundaries $M_j$ are pairwise disjoint proper crosscuts; $E_i$ misses $M_j$ and $V_j$ for $j\notin\{i,i+1\}$. This is finite standard geometry. Bigelow's Figure 3 supplies individual singleton noodles, not the impossible common-endpoint disjointness assertion formerly used here.

[F2] (Basic Lemma; Bigelow 2001, Lemma 2.3.) A kernel braid preserves
$\langle N,F\rangle$ for every noodle and fork. Use the exact closed-first-argument
identity of [[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]]:
choose the closing neighborhoods for $c_F$ disjoint from both $N$ and
$\sigma^{-1}N$, whose compact images avoid the punctures. Then $\sigma c_F$
is a closed replacement for the image fork, with its closing parts disjoint
from $N$. Since the kernel acts as identity on absolute $H_2$,
$$\Delta_F\langle N,\sigma(F)\rangle=\langle\sigma c_F,y_N\rangle=\langle c_F,y_N\rangle=\Delta_F\langle N,F\rangle.$$
Cancel $\Delta_F=(1-q)^2(1+qt)\ne0$ in the Laurent domain. No kernel action on
the end-relative noodle class is presumed.

[F3] [[lem-fork-detection-transports-to-arbitrary-boundary-crosscuts]] detects disjoinability of the tine from $M_j$ by the exact absolute/end-stable pairing $\langle c_F,y_{M_j}\rangle$. A kernel element fixes $[c_F]$, so also fixes this scalar pairing, for every $M_j$; this uses no kernel action on the second class. Closing neighborhoods can be chosen to miss $M_j$ and $\sigma^{-1}M_j$, as in [F2].

[F4] [[lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions]], proof 2.1–4.1, gives simultaneous disjoining from a finite DISJOINT family of proper crosscuts when each is individually disjoinable. Its clean bigon moves are ambient and fix $P\cup\partial D$. Under AC, [[lem-jordan-schoenflies-extension-for-plane-curves]] also supplies the finite relative graph/face construction for a disk and an embedded arc; this extends a prescribed arc map while fixing the outer boundary and the marked endpoint vertices. The construction is the relative graph/face construction in the minimal-position supplier and its declared general-arc prerequisite.

[F5] For $n=2$ one has $B_2=\langle\sigma_1\rangle\cong\mathbb Z$ by the
Artin presentation, and $H_2(\widetilde C;\mathbb Z)$ is free of rank one by
[[thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]]; the standard
generator acts on it by the unit $\pm tq^2$ (Bigelow 2001, Theorem 4.1, case
$i=j=k-1$ in the source's parameter). Hence
$\rho_{\mathrm{LKB}}(\sigma_1^m)=(\pm tq^2)^m\operatorname{id}$, which is the
identity only for $m=0$, because $\pm t^mq^{2m}=1$ in $\Lambda$ forces
$m=0$.



## Proof

1.1 For $n=2$, [F5] forces a kernel braid to be the identity class, proving both edge fixing and label preservation. For $n=1$, the braid group is trivial and there are no edges. Hence assume $n\ge3$. Fix $i$ and a standard fork with tine $E_i$. For each $j\notin\{i,i+1\}$, choose its closing neighborhoods small enough to miss $M_j$; its compact replacement pairs to zero with $y_{M_j}$ because the tine is disjoint and the closing pieces also miss the crosscut. The kernel fixes that absolute class. The image replacement therefore still pairs to zero; [F3] makes $\sigma(E_i)$ individually disjoinable from each $M_j$. By [F4] isotope this one arc simultaneously off all those crosscuts. No previously arranged edge is invoked or trimmed. [F1, F2, F3, F4, F5, given, construct]

1.2 Each $M_j$ separates a disk $V_j$ containing only $p_j$ from all other punctures. A connected arc disjoint from it whose two distinct ends are punctures cannot have an end $p_j$: otherwise the entire arc would lie in that component and there would be no possible second puncture end. Consequently
$$\{\sigma(p_i),\sigma(p_{i+1})\}=\{p_i,p_{i+1}\}.$$
The disjoined arc lies in the remaining closed disk $R_i$ obtained by removing the interiors of the caps $V_j$ for $j\notin\{i,i+1\}$, with their crosscut boundaries retained. This disk has exactly two marked interior points $p_i,p_{i+1}$ and also contains $E_i$. [F1, step 1.1, construct]

2.1 In a disk with exactly two marked interior points, every simple arc joining them is isotopic, as an unoriented image, to any other. Here is the relative construction rather than a simply-connectedness assertion about the punctured disk. Extend each such arc by two access arcs to distinct boundary points, yielding a crosscut and an outer-circle graph. Prescribe the target graph map to the corresponding graph for the original arc, fixing the outer boundary and taking the two ordered marked vertices to themselves; relative Schoenflies on the Jordan faces extends it to an orientation-preserving marked disk homeomorphism $h$. The two-point mapping-class theorem identifies $[h]$ with a power of its standard half twist, because $B_2\cong\mathbb Z$. That half twist has a representative supported around the target arc and preserves its image. Thus an isotopy from $h$ to that representative applied to the target arc takes the original image to the target image, with both marked points fixed during the isotopy whenever $h$ fixes them: its power is then even. Extend the isotopy of $R_i$ by identity over the removed caps, since it fixes $\partial R_i$. This proves $\sigma(E_i)\simeq E_i$ relative to all of $P\cup\partial D$. [F4, F5, step 1.2, construct]

3.1 Repeat the independent argument for every $i$, obtaining both its edge image class and its unordered endpoint pair. The pairs for $i=1,2$ intersect in the singleton $p_2$, so their preserved images force $\sigma(p_2)=p_2$ and then $\sigma(p_1)=p_1$, $\sigma(p_3)=p_3$. Each subsequent pair forces the next puncture fixed. Thus every label is preserved. Once this is known, the edge isotopies in step 2.1 may also be parametrized from $p_i$ to $p_{i+1}$: any final increasing interval reparametrization $f$ is corrected by $(1-s)f+s\operatorname{id}$. The lemma claims the individual edge classes; simultaneous pointwise spine fixing is proved by its separate boundary-twist consumer. [step 1.2, step 2.1, construct] ∎
