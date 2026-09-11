---
id: "ex-boundary-extension-of-a-tree-quasi-isometry"
kind: "example"
title: "Boundary extension of a tree quasi isometry"
deps: ["lem-hg-toolkit-free-cayley-tree-from-reduced-words", "lem-boundary-products-are-independent-of-representative-and-basepoint", "def-word-metric"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Hamann §5.3, tree specialization"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Left translation by a finite reduced word $g$ acts isometrically on the unit-edge Cayley tree of a free group on a finite alphabet. Identifying its Gromov-sequence boundary with infinite reduced words (ends from the identity), the extension sends an infinite word $w$ to the word obtained by concatenating $g$ with $w$ and cancelling the finite inverse prefix at their join. This extension is a homeomorphism.

## Facts & Assumptions

**Given:** The reduced-word Cayley tree, its identity vertex $e$, and a finite reduced word $g$.

[F1] The graph is a geodesic tree and reduced paths are geodesic by [[lem-hg-toolkit-free-cayley-tree-from-reduced-words]].

[F2] Boundary products and their Hausdorff product topology are justified in [[lem-boundary-products-are-independent-of-representative-and-basepoint]].

[F3] Vertex distance is $d_S(x,y)=|x^{-1}y|_S$ by [[def-word-metric]].

## Verification

1.1 For vertices, $d_S(gx,gy)=|(gx)^{-1}(gy)|_S=|x^{-1}y|_S=d_S(x,y)$. Left multiplication carries each right-labelled edge $x\to xs$ to $gx\to(gx)s$ and extends linearly as an isometry on it. Every finite edge route and its translated route have equal length; translating back by $g^{-1}$ shows equality of the path distances, including interior-edge points. [F1, F3, given, algebra]

1.2 For points $x,y$ in the tree, their paths from $e$ have a common initial segment of length $c$ and then separate, so $d(x,y)=d(e,x)+d(e,y)-2c$ by F1. Thus $(x|y)_e=c$. A Gromov sequence therefore eventually shares, for each integer $r$, a common prefix of length $r$, and its radii tend to infinity because $(x_n|x_n)_e=d(e,x_n)$. These eventual prefixes are uniquely determined and compatible, so they define one infinite reduced word. Conversely the vertices along an infinite reduced word have products $\min\{n,m\}$ and are a Gromov sequence. Two such sequences are equivalent exactly when all their eventual prefixes agree. This identifies the entire boundary with infinite reduced words, without a representative selection theorem. [F1, F2, given, algebra]

2.1 For two different infinite words whose common prefix has length $r$, any representatives of their classes eventually lie beyond that common prefix in the respective different branches. Their mixed products then equal $r$ by step 1.2. Equal words give infinite product. Hence F2's boundary topology is exactly the prefix topology: requiring common prefix length greater than $R$ gives $U_R$. For the empty alphabet there are no infinite reduced words and the boundary is empty. [step 1.2, F2]

2.2 In the concatenation of the reduced finite word $g$ with an infinite reduced word $w$, cancellations occur only at their join. Each cancellation removes one letter of $g$, so at most $|g|$ letters from the start of $w$ disappear. After that finite process the remaining infinite word is reduced. The same cancellation applies to every sufficiently long finite prefix of $w$, so the translated vertices converge to the resulting end under the identification in step 1.2. For example, $g=ab$ sends $w=b^{-1}a^{-1}bbb\cdots$ to $bbb\cdots$, cancelling precisely two letters at the join. [step 1.1, step 1.2, F1]

3.1 By step 1.1, $(gx|gy)_e=(x|y)_{g^{-1}}$. The basepoint estimate in F2 bounds its difference from $(x|y)_e$ by $|g|$. Passing to tail products and then the boundary gives $B_e(g\xi,g\eta)\ge B_e(\xi,\eta)-|g|$. Thus sharing a prefix longer than $R+|g|$ forces the images to share one longer than $R$, proving continuity by step 2.1. Translation by $g^{-1}$ supplies the inverse, by its equality on every finite vertex and the identification of ends. It is continuous by the same bound. The empty word gives the identity, and no infinite sequence of choices occurs in the finite cancellation rule. [step 1.1, step 2.1, step 2.2, F2] ∎
