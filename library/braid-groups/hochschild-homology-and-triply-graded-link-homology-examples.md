---
page: hochschild-homology-and-triply-graded-link-homology-examples
title: "Hochschild Homology and Triply-Graded Link Homology — Examples"
status: published
items: []
examples: [ex-hochschild-homology-of-the-rank-one-soergel-bimodule,
           ex-hhh-of-the-positive-two-strand-torus-knot,
           ex-the-trivial-one-braid-hhh-grading-normalization,
           ex-termwise-and-total-hochschild-theories-have-different-grading-outputs]
---

These four worked examples make the companion page's comparison concrete. The
rank-one example computes the Hochschild homology of the two-strand
rank-one Soergel bimodule $B_1=\mathbb Q[y]\otimes_{\mathbb Q[y^2]}\mathbb Q[y]$
from its one-variable diagonal Koszul complex, with
$\delta(1\otimes1)=y\otimes1-1\otimes y$ having displayed matrices in the
basis $\{1\otimes1,1\otimes y\}$, giving $HH_0=R$ and $HH_1=R\{4\}$ and
exhibiting the generator of $HH_1$ as $rb_1(1)$ times the Koszul symbol. The
two-strand torus example reduces Khovanov's generator complex
$F(\sigma_1^n)$ to the minimal complex with alternating differentials,
recomputes the induced maps $2y$ and $0$ on the two Hochschild degrees, and
derives the source's $n$ one-dimensional classes with their explicit
$(p,c)$ bidegrees, so that $HHH$ of the $(2,n)$ torus knot has rank $n$ for
odd $n$. The trivial one-braid example checks the base case of the
comparison: the unit complex gives $HHH$ in tridegree $(0,0,0)$, the global
correction sends the raw Khovanov-Rozansky class $(-1,1,0)$ to $(0,0,0)$, and
the two normalizations agree. The final example contrasts the termwise and
total Hochschild theories on a two-term complex with zero differential:
the termwise page keeps the full $(c,h)$ bigrading with four labels, while
the declared hyperhomology grading records the total degree $c-h$ and the
internal degree, with the pair reflected in the induced filtration. In this
zero-differential example, the column decomposition also canonically splits
the total complex and its degree-zero hyperhomology $R\oplus R\{2\}$,
preserving the column labels as additional structure; the two constructions
still have different declared grading outputs.
