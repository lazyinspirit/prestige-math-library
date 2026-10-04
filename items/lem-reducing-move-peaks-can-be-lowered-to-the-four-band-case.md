---
id: lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case
kind: lemma
title: "Reducing-move peaks can be lowered to the four-band case"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-braid-like-moves-can-be-moved-to-height-zero,
       def-reducing-arc-and-yamada-vogel-reducing-move,
       lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity,
       def-coherence-of-seifert-circles-and-the-height-of-a-diagram,
       lem-a-positive-height-diagram-has-a-defect-region,
       lem-a-height-zero-diagram-represents-a-closed-braid,
       lem-ordinary-exchange-moves-are-markov-sequences,
       def-markov-conjugation-and-stabilization-moves,
       def-geometric-braid-with-setwise-endpoints,
       def-elementary-geometric-half-twist,
       prop-stacking-of-geometric-braids-is-well-defined,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       thm-the-artin-presentation-is-complete-for-geometric-braids, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1 and Figures 6-9, printed pp. 412-417"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Lemmas 2.4-2.7, printed pp. 21-25"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Assume AC. Consider a finite reducing sequence with height-zero endpoints and
strictly positive interior diagrams. An empty reducing portion needs no
replacement. Every nonempty such portion may be replaced by a path of strictly
smaller maximum height, or reduced to irreducible interior peaks supported by
at most four bands of parallel Seifert circles, arranged as in Figures 7 and 8
of the source. The replacement may include finite height-zero ordinary Markov
exchange portions; its remaining reducing content is split at height-zero
diagrams.

## Facts & Assumptions

**Given:** AC, a finite sequence whose endpoints have height zero, whose interior diagrams have strictly positive height, and whose consecutive diagrams are related by a reducing move or its inverse. For a nonempty reducing portion let $H$ be its maximum height; the empty portion requires no replacement.

[F1] The height is a nonnegative integer, a reducing move lowers it by exactly one, its inverse raises it by one, and a height-zero diagram can be put in closed-braid form by sphere isotopy and a choice of planar chart ([[lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity]], [[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]], [[lem-a-height-zero-diagram-represents-a-closed-braid]]).

[F2] A reducing move is realized by a reducing arc lying in a defect region and joining an incoherent pair of Seifert circles; a local maximum (a peak) of the sequence is a triple $Y(r),\widehat Y,Y(s)$ of consecutive diagrams with two reducing arcs $\alpha_r,\alpha_s$ of $\widehat Y$, which may be assumed transverse and meeting minimally ([[def-reducing-arc-and-yamada-vogel-reducing-move]]).

[F3] Two disjoint reducing arcs whose moves involve three or four distinct Seifert circles commute: the moves may be performed in either order with the same result. If the two arcs involve the same two Seifert circles, the moves form a non-commuting pair, and after one is performed the other is no longer a reducing move ([[def-reducing-arc-and-yamada-vogel-reducing-move]]).

[F4] A region of the Seifert picture with at least three exposed Seifert circles is a defect region, and therefore supports a reducing arc ([[lem-a-positive-height-diagram-has-a-defect-region]]).

[F5] Type I moves and braid-like II and III moves can be replaced by height-zero braid isotopies or Markov moves together with reducing content. Between height-zero portions, split the reducing content into sequences whose intermediate diagrams have positive height and whose endpoints have height zero ([[lem-braid-like-moves-can-be-moved-to-height-zero]]).


[F6] If $P,Q\in B_{n-1}$ and $t=\sigma_{n-1}$, $PtQt^{-1}$ and $Pt^{-1}Qt$ differ by an explicit finite sequence of ordinary signed Markov moves and conjugations ([[lem-ordinary-exchange-moves-are-markov-sequences]], [[def-markov-conjugation-and-stabilization-moves]]).


[F7] The fixed real base configuration is symmetric; positive generators are the anticlockwise geometric half twists. The geometric product runs its rightmost factor first. The Artin map to geometric braids is choice-free and surjective and, under AC, an isomorphism ([[def-geometric-braid-with-setwise-endpoints]], [[def-elementary-geometric-half-twist]], [[prop-stacking-of-geometric-braids-is-well-defined]], [[prop-the-artin-presentation-surjects-onto-geometric-braids]], [[thm-the-artin-presentation-is-complete-for-geometric-braids]]).

## Proof

**Proof technique:** direct.

1.1 **Intersection numbers of the two arcs at a peak.** Let $Y(r),\widehat Y,Y(s)$ be a peak with arcs $\alpha_r,\alpha_s$, assumed transverse and meeting minimally, and let $n=|\alpha_r\cap\alpha_s|$. If $n\ge2$, then smoothing out one or more of the intersection points produces a reducing arc $\alpha_{r'}$ with the same endpoints as $\alpha_r$ that is disjoint from $\alpha_r$ and meets $\alpha_s$ in fewer than $n$ points; inserting $r'$ at the peak replaces it by the two peaks $Y(r),\widehat Y,Y(r')$ and $Y(r'),\widehat Y,Y(s)$, both of the same height $h(\widehat Y)$. Repeating this finitely many times we may assume that the two arcs of every peak meet in at most one point, the maximum height being unchanged because insertion only replaces one peak by two peaks of equal height. [F1, F2, algebra]

1.2 **Height-one peaks with their actual crossing choices.** Exactly one pair $C_1,C_2$ is incoherent, and all other $e=n-2$ circles are coherent with both and with each other. In a chart where $C_1,C_2$ bound their common annulus, their orientations are opposite. An additional circle cannot lie in either end disk: coherence with that end circle and with the other would impose opposite orientation requirements. It also cannot be essential in the common annulus, since its two neighbouring annuli would likewise impose opposite requirements. Thus its bounded disk lies in the common annulus and misses $C_1,C_2$. Coherence with either fixes its orientation, so two such additional circles cannot be side by side: they would have equal planar orientations and be incoherent. Consequently the additional circles form one coherent nested band, possibly empty. This proves the inside/outside-band description used by the survey's height-one lemma, printed p.24, without a connectedness assumption. Cut its outside region along the two disjoint reducing arcs. On each side the signed crossing strips involve the coherent band and one of $C_1,C_2$ only: a strip cannot join the incoherent pair. Reading the two sides gives arbitrary boxes $P,Q$ on the core $e$ strands and one selected strand each. After either reduction choose the cut before the $P$ side in the frame where the two selected single-circle ports are the first two inner ports and the coherent $e$-band is outside them. Thus $n=e+2$, both arbitrary contexts act on the last $n-1$ ports, and the two new crossings are $\sigma_1$ and its inverse. The physical records are $P\sigma_1Q\sigma_1^{-1}$ and $P\sigma_1^{-1}Q\sigma_1$. To put their supports in [F6], use an actual old-strand conjugation. The distinct paths $e^{\pi iu}q_j$, $0\le u\le1$, form a geometric braid $\delta$ because the base configuration in [F7] is symmetric. For any braid path $\gamma$, the square $e^{\pi iu}\gamma(t)$ has the same $\delta$ along its two endpoint edges and gives $R_\pi(\gamma)=\delta\gamma\delta^{-1}$ in the rightmost-first convention. It sends the positive $i$th half twist to the positive $(n-i)$th, since the disk rotation preserves orientation. By the surjection and completeness in [F7], an Artin word for $\delta$ therefore satisfies $\delta\sigma_i\delta^{-1}=\sigma_{n-i}$. Hence its old-strand conjugation takes the two last-supported boxes to first-$n-1$-supported boxes and $\sigma_1$ to $t=\sigma_{n-1}$. Rename these conjugated contexts $P,Q$. The two resulting records are exactly $PtQt^{-1}$ and $Pt^{-1}Qt$, with signs retained. If the other reducing arc starts on the $Q$ side, its record is $Qt^\epsilon Pt^{-\epsilon}$, cyclically conjugate to $Pt^{-\epsilon}Qt^\epsilon$. These formulas retain every original signed strip in its whole core-plus-one box, rather than fixing the peak's given crossing choices. Isotopic arcs bounding an empty strip give the same pair of records with one context empty. If records are taken chronologically, reverse them for the rightmost-first product: the two actual records are cyclically conjugate to $\operatorname{rev}(P)t^{-1}\operatorname{rev}(Q)t$ and $\operatorname{rev}(P)t\operatorname{rev}(Q)t^{-1}$, so [F6] applies in reverse direction with the same supports. Therefore the height-one peak is replaced at height zero by conjugations and, when the choices differ, the ordinary exchange sequence [F6]. At $e=0$, $P=Q=1$ and both records are $1$, so no strand change is needed. This is the source's equivalence of the resulting diagrams, not literal equality or an appeal to the later four-band or Markov theorem. [F1, F2, F6, F7, construct]

2.1 **Peaks whose arcs meet once.** Now let $|\alpha_r\cap\alpha_s|=1$. If some reducing arc $\alpha_t$ is disjoint from both $\alpha_r$ and $\alpha_s$, then inserting $t$ at the peak replaces it by two peaks, each carrying a disjoint pair of arcs. Suppose no third arc of the defect region supporting $\alpha_r$ and $\alpha_s$ is disjoint from both; then the region has the single arrangement exhibited in the source (survey, printed pp. 21-22) and the two arcs act on four distinct Seifert circles. Consider the region $R$ outside the circles of the defect region and the signed arcs joining them. If $R$ contains a Seifert circle, then some region of the picture has three exposed Seifert circles, hence is a defect region by [F4], and it supports a reducing arc disjoint from both $\alpha_r$ and $\alpha_s$, a contradiction. If $R$ contains no Seifert circle, then it contains no signed arc between its four exposed circles either, and a pair of diagonally opposed circles can be joined by a reducing arc inside $R$, again disjoint from both. Hence in every case a third disjoint arc exists, insertion is possible, and the peak may be replaced by two peaks with disjoint pairs of arcs; the height is unchanged. [F2, F4, step 1.1, algebra]

3.1 **Commuting pairs, insertions and peaks of height one.** Let a peak have disjoint arcs $\alpha_r,\alpha_s$. If their moves involve three or four distinct Seifert circles they form a commuting pair: performing the two reducing moves in either order gives the same diagram $Y'$ with $h(Y')=h(\widehat Y)-2$, so the peak is replaced by the valley $Y(r),Y',Y(s)$ and is removed, and any new peaks created in this replacement lie at levels strictly below $h(\widehat Y)$. If the arcs involve the same two Seifert circles, the pair is non-commuting; call the peak irreducible if in addition no reducing arc disjoint from both is available that involves a Seifert circle other than those two. If such an arc $\alpha_t$ exists, insertion at the peak replaces it by two peaks whose pairs of arcs involve at least three circles, hence are commuting pairs, and each is removed by a valley, so the peak is replaced by content of strictly smaller height. The height-one case is verified separately; its two diagrams need not be literally equal. Summarizing: after finitely many replacements, either the maximum height of the sequence strictly decreases, or every remaining peak is irreducible. [F1, F2, F3, step 2.1, algebra]


4.1 **Irreducible peaks have at most four bands.** Let $Y(r),\widehat Y,Y(s)$ be an irreducible peak of height at least two, let $C_1,C_2$ be its two Seifert circles, and for $i=1,2$ let $D_i$ be the disk bounded by $C_i$ that contains neither $\alpha_r$ nor $\alpha_s$. The complement of $D_1\cup D_2\cup\alpha_r\cup\alpha_s$ in the sphere has two components; by irreducibility neither component contains a defect region, since such a region would support a reducing arc disjoint from $\alpha_r,\alpha_s$ and involving a further circle. Hence the Seifert circles in either component, if any, form a band of mutually coherent parallel circles oriented oppositely to $C_1$ and $C_2$, and the same argument applied inside $D_1$ and $D_2$ shows that each $D_i$ contains no defect region either, so $C_i$ is the outer circle of a band. Therefore the diagram consists of at most four bands of parallel Seifert circles, joined by braids on the sums of the band multiplicities, with bands of multiplicity zero allowed, exactly the configuration classified by the source (survey, printed pp. 23-24; Traczyk's Figures 7 and 9). [F2, F3, step 3.1, algebra]

5.1 **Conclusion on the source's reducing portions.** If the reducing portion is empty, nothing is required. Otherwise its height-zero endpoints force each maximal positive height to occur at interior peaks. The finite arc-intersection insertions, commuting valleys and height-one exchange comparisons of the preceding steps either remove all peaks at the current maximum height or leave only irreducible peaks of the four-band shape classified in step 4.1. Height-zero exchange portions are ordinary Markov paths by step 1.2; split the remaining reducing content at their height-zero diagrams, as in [F5]. Thus the maximum height decreases when no irreducible peak remains, and otherwise the stated special configuration is reached. All replacement paths retain the original endpoints and the given first reducing choices. AC is inherited from the coherence/reducing and geometric-completeness suppliers. [F1, F5, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
