---
id: ex-alexanders-braiding-algorithm-on-a-small-diagram
kind: example
title: "The Yamada-Vogel algorithm on a small diagram"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-alexanders-closed-braid-theorem, lem-a-height-zero-diagram-represents-a-closed-braid,
       lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity,
       lem-a-positive-height-diagram-has-a-defect-region,
       def-reducing-arc-and-yamada-vogel-reducing-move,
       def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram,
       def-axiom-of-choice, def-braid-group-by-the-artin-presentation,
       def-markov-conjugation-and-stabilization-moves,
       lem-markov-moves-preserve-oriented-closure-isotopy,
       thm-choice-implies-dependent-implies-countable-choice,
       prop-stacking-of-geometric-braids-is-well-defined,
       def-elementary-geometric-half-twist,
       def-coherence-of-seifert-circles-and-the-height-of-a-diagram]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Example 2.1 and Figure 4, printed pp. 14-15"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Example

Assume the Axiom of Choice. Run the Yamada-Vogel algorithm on the standard
five-crossing diagram of the knot $5_2$, the first knot in the tables whose
standard diagram has height greater than zero. Its Seifert picture has four
Seifert circles and five positive signed arcs, so $h=2$; two reducing moves
along the arcs $\alpha_1,\alpha_2$ of the source bring it to height zero, and
reading the resulting closed braid gives

$$X=\sigma_2\sigma_1^{-1}\sigma_2\sigma_3^{-1}\sigma_2\sigma_1\sigma_2\sigma_3\sigma_2;$$

the algorithm gives this nine-crossing four-braid. Braid relations and one ordinary destabilization, with conjugations, give an eight-crossing three-braid, which simplifies to the six-letter three-braid $\sigma_2\sigma_1^{-1}\sigma_2\sigma_1^2\sigma_2$. Thus the algorithm's initial four-braid has nonminimal braid index, and the eight-letter three-braid word is not shortest.

## Facts & Assumptions

**Given:** AC, the standard diagram $D$ of the knot $5_2$ with its five crossings, the Seifert smoothing of [[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]], and the Yamada-Vogel algorithm ([[def-reducing-arc-and-yamada-vogel-reducing-move]]).

[F1] Smoothing the five positive crossings of $D$ gives the Seifert picture of the source: four Seifert circles and five positive signed arcs, and the height counts the incoherent pairs ([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]], [[def-reducing-arc-and-yamada-vogel-reducing-move]], [[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]]).

[F2] If $h>0$ there is a defect region and a reducing arc; a reducing move lowers the height by exactly one ([[lem-a-positive-height-diagram-has-a-defect-region]], [[lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity]]).

[F3] A height-zero diagram represents the closure of the braid read in angular order from a cut ray of its nested chain, after a sphere isotopy and choice of planar chart ([[lem-a-height-zero-diagram-represents-a-closed-braid]]).


[F4] Artin inverse cancellation, far commutations and $\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2$ are the defining braid relations ([[def-braid-group-by-the-artin-presentation]]).

[F5] For $\beta=uv$, conjugate by $v$, right stabilize, and conjugate by $v^{-1}$ to insert $\sigma_n^{\pm1}$ as $u\sigma_n^{\pm1}v$; stabilizations have $n\ge1$ ([[def-markov-conjugation-and-stabilization-moves]]).

[F6] Under countable choice every ordinary Markov move preserves the oriented closure, and AC implies that choice principle ([[lem-markov-moves-preserve-oriented-closure-isotopy]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F7] The geometric product runs the rightmost factor first ([[prop-stacking-of-geometric-braids-is-well-defined]]).


[F8] The fixed positive generator is an anticlockwise half twist in the oriented transverse disk, with its first indexed point passing through negative second coordinate ([[def-elementary-geometric-half-twist]]).

## Verification

1.1 **The source's five-arc picture and six circle pairs.** Number the four circles in the first sketch of Figure 4 by their northwest, northeast, southwest and southeast positions. The northwest and southeast arrows are counterclockwise; the northeast and southwest arrows clockwise. For side-by-side circles in $S^2$, coherence requires opposite planar orientations, since the common annulus is outside their two disk interiors. Thus exactly the two diagonal pairs are incoherent; each of the four side pairs is coherent, so $h=2$. The five positive arcs are the two between the top circles, one on each vertical side and one on the bottom side, as shown in that rendered source panel. Their signs and incident circles record the original five crossings by [F1]. The heavy $\alpha_1$ joins the northwest and southeast incoherent pair; [F2] licenses its first reduction. [F1, F2, construct]

2.1 **The two reductions.** Perform the reducing move along $\alpha_1$: it replaces the chosen incoherent pair by two coherent circles joined by two oppositely signed arcs, and by [F2] the height drops to $1$; the new picture has a remaining incoherent pair, and the source's second reducing arc $\alpha_2$ joins it. Performing the reducing move along $\alpha_2$ drops the height to $0$, and the resulting picture has all pairs of Seifert circles coherent. The two moves are Reidemeister II moves of the original diagram, so the represented knot is unchanged. [F2, step 1.1]

3.1 **The source word and its product convention.** The final sketch has four concentric counterclockwise circles. Number them outermost to innermost and read from twelve o'clock counterclockwise. The ordered signed events are $(2,+),(1,-),(2,+),(3,-),(2,+),(1,+),(2,+),(3,+),(2,+)$, giving the displayed chronological list $X$. For this counterclockwise motion use the transverse frame $(-e_r,+e_Z)$; together with tangent $+e_\theta$ it preserves ambient orientation. Its positive half twist has the first outer indexed point go through negative physical depth, so the source's crossing signs agree with the fixed signed generators. By [F7] the actual geometric element of this chronological list is $\operatorname{rev}(X)$, not automatically $X$. We verify both closures by an explicit word comparison. Write $s=\sigma_1$, $t=\sigma_2$, $r=\sigma_3$. The Artin relations [F4] give $$X=t s^{-1}t r^{-1}t s t r t=t s^{-1}t r^{-1}s t s r t=t s^{-1}t s r^{-1}t r s t=t s^{-1}t s t r t^{-1}s t.$$ The successive operations are $tst=sts$, commuting $s$ with $r$, and $r^{-1}tr=trt^{-1}$. Put $A=t s^{-1}t s t$, $B=t^{-1}s t$, so $X=ArB$. By the interior insertion sequence [F5], this is related by one positive ordinary destabilization and conjugations to the three-braid $Y=AB=t s^{-1}t s t t^{-1}s t$. Inverse cancellation gives $Y=Z=t s^{-1}t s^2t$, a six-letter three-braid. Word reversal is an anti-automorphism because the Artin relations are palindromic or far commutations. It carries a right stabilization to a left one of the same sign, which cyclic conjugation converts to a right stabilization; hence the reversed identities likewise give $\operatorname{rev}(X)\leftrightarrow\operatorname{rev}(Z)$ by ordinary Markov moves. Finally put $C=t s^2t$. Directly $$sC=sts^2t=(sts)st=(tst)st=ts(tst)=ts(sts)=ts^2ts=Cs.$$ Therefore $t^{-1}Zt=s^{-1}Ct=Cs^{-1}t=\operatorname{rev}(Z)$. Combining the two destabilization comparisons with this old-strand conjugation gives an explicit Markov sequence between $X$ and $\operatorname{rev}(X)$. By [F6], both have the oriented closure of the source diagram. The algorithm itself yields the nine-letter four-braid; $Y$ is its eight-letter three-braid after destabilization and $Z$ is a strictly shorter word for that same three-braid. [F3, F4, F5, F6, F7, F8, step 2.1, algebra]

4.1 **Conclusion.** The verified two reductions give the source's four-strand, nine-crossing closed braid. Step 3.1 proves that its actual chronological interpretation and the commissioned word $X$ have the same oriented closure, and explicitly gives the eight-letter and six-letter three-braid words. The existence of the three-braid proves that the initial four-braid uses more strands than necessary; the six-letter representative proves that the eight-letter word is longer than necessary. These are separate index and length comparisons, with no assertion that the three-braid has nonminimal braid index. AC supplies the reducing/height-zero constructions and the countable choice in [F6]. [F1, F2, F3, F6, step 1.1, step 2.1, step 3.1] ∎
