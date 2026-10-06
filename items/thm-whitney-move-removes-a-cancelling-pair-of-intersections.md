---
id: thm-whitney-move-removes-a-cancelling-pair-of-intersections
kind: theorem
title: The Whitney move removes a cancelling pair of intersection points
deps:
- def-countable-choice
- def-local-whitney-move
- def-whitney-disk-and-clean-framed-whitney-disk
- lem-a-clean-framed-whitney-bigon-has-an-adapted-tube
- lem-euclidean-bump-for-a-compact-set-inside-an-open-set
- def-smooth-embedding
- thm-compactly-supported-vector-fields-are-complete
- prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 and its proof, printed pp. 71-74, especially Figure 6.3 (the isotopy $F_t$ of $V$ supported
      in the image of $\varphi$, fixing $M\cap M'-\{p,q\}$ and removing the pair)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed pp. 139-140 (the isotopy near $\gamma_2$, after the clean disk and the
      extended framing are available)
proof_strategy: direct
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a clean framed Whitney bigon for two complementary embedded sheet neighbourhoods $A^a,B^b$ along its boundary arcs, $a,b\ge1$, with an admissible extended disk-normal frame and fixed compatible corner collars. Then its local model gives a compactly supported auxiliary ambient isotopy $G_t$, applied to the first sheet while the second is held fixed, removing exactly its two prescribed intersections and creating none. It is the identity near the boundary of the selected first-sheet patch and near all other intersections. For globally embedded closed sheets this gives an ambient isotopy carrying $A$ to an embedded $A'$ with $A'\cap B=(A\cap B)\setminus\{p,q\}$. For a source immersion patch the construction is an isotopy of that patch relative to its boundary; extending it by the unchanged map on the remaining source gives a regular homotopy when the supporting tube meets no other source-image branches. The local model requires an actual admissible framed disk, and asserts no simultaneous ambient action on both images.

## Facts & Assumptions

[F1] A clean framed Whitney bigon has a smooth adapted tube with exactly the two prescribed sheet inverse images, preserving its normal quotient framing. [[lem-a-clean-framed-whitney-bigon-has-an-adapted-tube]]

[F5] Under Countable Choice every compactly supported smooth vector field is complete. [[thm-compactly-supported-vector-fields-are-complete]]

[F6] Time maps of a smooth flow are diffeomorphisms with inverse the reverse-time map. [[prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]]

[F7] The explicit compactly supported vector field moves the first model sheet and compares it with the unchanged second sheet. [[def-local-whitney-move]]

[F8] A compact set inside an open Euclidean set admits a smooth bump; taking its open support neighbourhood relatively compact gives compact support. [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]

## Proof


**Given:** Countable choice, a clean bigon with an admissible smooth normal frame $E,H$, and the selected first-sheet patch with its fixed boundary collars.

1.1 Apply the adapted-tube lemma to the supplied smooth clean framed bigon and its compatible corner collars. It gives an open plane extension and a uniformly thin embedded tube whose sheet inverse images are precisely the two extended edges with their respective normal blocks. The affine-in-$v$ plane change $(u,v)\mapsto(u,(v-(1-u^2))/2)$ sends the upper edge of $\mathcal B$ to $v=0$ and the lower edge to $v=u^2-1$; its determinant is $1/2$ even at the two corners. Reparametrize the tube by this diffeomorphism, keeping the $E,H$ coordinates. The selected sheets are therefore exactly $\{v=0,h=0\}$ and $\{v=u^2-1,e=0\}$ on the adapted neighbourhood. [given, construct, algebra, F1]

2.1 Choose $\varepsilon>0$ small and the transition of $b$ close to the two corners. The swept plane set $S=\{(u,tg(u)):u\in\operatorname{supp}b,\ 0\le t\le1\}$ is compact, as the continuous image of a compact product; these choices put $S$ inside the open plane tube domain $U$, since the swept segments lie in the bigon plus an arbitrarily thin collar. Choose a compact neighbourhood $K_S$ of $S$ inside $U$ using finitely many sufficiently small closed balls, and a relatively compact open set $O$ with $K_S\subset O\subset\overline O\subset U$. The Euclidean bump supplier gives $c(u,v)=1$ on $K_S$ with support in $O$; its support is compact since it is closed and lies in the compact $\overline O$. Choose the smooth normal cutoff $\chi$ with compact support in the normal tube balls, equal to one near zero, and with $0\le\chi\le1$. The model vector field $g(u)c(u,v)\chi(e,h)\partial_v$ is then smooth and compactly supported in the tube. On the first sheet it keeps $u,e,h$ fixed and takes $v=0$ to $v=tg(u)\chi(e,0)$: the entire trajectory belongs to the swept segment in $S$, where $c=1$. Its support avoids the tube boundary and selected patch boundary. Transport it and extend it by zero to a compactly supported smooth ambient vector field on $X$. Compact-support completeness gives its global smooth flow, and the flow time maps are diffeomorphisms with inverse the negative-time map. This is the asserted auxiliary isotopy. [step 1.1, construct, F5, F6, F7, F8]

3.1 At a possible intersection of the moved first sheet with the fixed second one must have $e=0$ and $h=0$. At time one the second coordinate of the moved sheet is $g(u)$, since $\chi(0,0)=1$. For $|u|\le1$ it is $f(u)-\varepsilon<f(u)$. Outside that interval $f(u)>0$, and $g(u)=b(u)f(u)-b(u)\varepsilon<f(u)$, including where $b=0$. Hence no model intersection remains. The first sheet stays embedded because the auxiliary time map is a diffeomorphism. The tube can avoid every remaining sheet part outside its designated arc collars: the disk interior is clean, and the closed sheet parts outside smaller designated collar neighbourhoods are disjoint from the compact disk and can be excluded by shrinking its neighbourhood, while the product charts handle the endpoints. All intersections outside the tube are fixed. [step 2.1, construct, algebra, F7]

4.1 For global embedded sheets, apply this auxiliary isotopy to $A$ and compare with the unchanged $B$, obtaining the asserted $A'$. For an immersion patch $P$, set $f_t=G_t\circ f$ on $P$ and $f_t=f$ outside $P$. Agreement on an open collar of $\partial P$ makes these formulas smooth. On $P$, the derivative is $dG_t\circ df$ and remains injective; outside it is unchanged. Tube avoidance of all other source-image branches excludes extra coincidences. Intermediate intersections with the fixed second sheet may be tangent, while each source branch remains immersed. The cancellation formula at time one follows from step 3.1. The map $G_t\circ f$ on the whole source would preserve all coincidences and is not this construction. [step 3.1, construct] ∎
