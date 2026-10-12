---
page: the-hook-length-formula-and-rsk-correspondence-examples
title: "The Hook Length Formula and Rsk Correspondence — Examples"
status: published
items: []
examples: [ex-hook-table-for-shape-three-two-one, ex-hook-lengths-for-row-column-and-hook-shapes, ex-rsk-insertion-and-reverse-deletion, ex-rsk-for-involutions, ex-empty-and-singleton-rsk-boundaries]
---

These examples exercise the hook length formula and the Robinson-Schensted
correspondence of [[the-hook-length-formula-and-rsk-correspondence]] at
explicit small shapes.

The shape $(3,2,1)$ is worked out in full: its hook table, hook product and the
value $f^{(3,2,1)}=16$, checked independently by the removal recursion against
the three smaller shapes. The one-row, one-column and hook shapes
$(n)$, $(1^n)$ and $(n-1,1)$ are computed in closed form. On the RSK side the
permutation $(1\,6\,3)(2\,4)$ is inserted letter by letter, producing the
displayed $P_k$ and $Q_k$, and reverse deletion is then run backwards through
the six labels and expels the word in reverse order; the involutions $(2,1,4,3)$
and $(3,2,1)$ exhibit the criterion $P=Q$, while the counts at $n=3$ match
$\sum_{\lambda\vdash3}f^\lambda=4$. The empty and singleton boundaries close
the page with $f^\varnothing=f^{(1)}=1$ and the corresponding one-point RSK
correspondences.
