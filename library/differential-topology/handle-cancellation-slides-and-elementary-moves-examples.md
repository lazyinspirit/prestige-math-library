---
page: handle-cancellation-slides-and-elementary-moves-examples
title: Handle Cancellation Slides and Elementary Moves — Examples
status: draft
requires: [handle-cancellation-slides-and-elementary-moves]
items: []
examples: [ex-cancelling-zero-one-handle-pair, ex-cancelling-one-two-handle-pair-on-a-surface, ex-a-handle-slide-realizes-an-elementary-row-operation, cex-algebraic-intersection-one-with-three-geometric-points, cex-adjacent-index-handles-with-zero-intersection-do-not-cancel]
---

The examples make the two elementary moves concrete. A $0$-$1$ pair is
cancelling as soon as the attaching $0$-sphere of the band has one point on the
belt sphere of the ball, and the model is the identity that two balls joined by
a band are one ball; a $1$-$2$ pair on a surface cancels when the attaching
circle of the disc runs through exactly one point of the belt $0$-sphere of the
band, and the matrix definition deliberately does not cover these endpoint
cases. On the four-dimensional side, a $1$-handle attached to a $4$-ball has
middle boundary $S^1\times S^2$, and two $2$-handles attached along disjoint
circles realize an elementary row operation: sliding the second $2$-handle over
the first changes the matrix column $(\pm1,0)^T$ to $(\pm1,\pm1)^T$, exactly the
row operation of the matrix-operation proposition.

The two counterexamples display the hypotheses that the theorem cannot drop. A
finger move of a sphere across a belt circle produces three transverse
intersections with local signs $+1,+1,-1$, so the algebraic intersection is
still a unit while the geometric intersection has three points: a unit entry
does not supply the single point the cancellation theorem needs. This inserted
opposite pair can be removed by reversing the finger isotopy; a general
algebraic-to-geometric conversion needs separate geometric hypotheses, such as
those of the Whitney trick. Finally, a
$2$-handle attached to a solid torus along a circle that bounds a disk in the
boundary disjoint from the belt circle has vanishing intersection with the belt
sphere, so the pair is not geometrically cancelling and in fact cannot cancel:
the attaching circle is null-homotopic in the solid torus, so the total space
stays with fundamental group $\mathbb{Z}$ while the lower stage is simply
connected.
