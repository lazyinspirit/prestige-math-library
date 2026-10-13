---
page: kronecker-coefficients-and-internal-products-examples
title: "Kronecker Coefficients and Internal Products — Examples"
status: published
requires:
  - kronecker-coefficients-and-internal-products
items: []
examples:
  - ex-kronecker-products-for-s3
  - cex-first-row-padding-before-the-partition-threshold-is-undefined
  - cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability
---

**Objective.** This companion computes the complete internal product
table for $S_3$, fixes the exact domain on which a padded family exists, and exhibits the
first boundary at which eventual constancy fails to be immediacy. All three
items are read through the definitions and theorems of
[[kronecker-coefficients-and-internal-products]]; none of them is presented as
a general rule.

The first item is the complete internal product table for $S_3$
([[ex-kronecker-products-for-s3]]): the characters of $S^{(3)}$, $S^{(2,1)}$
and $S^{(1,1,1)}$ are recomputed from the Frobenius dictionary rather than
imported from another examples page, and the three-character formula gives
$S^{(2,1)}\otimes S^{(2,1)}\cong S^{(3)}\oplus S^{(2,1)}\oplus S^{(1,1,1)}$
with all other entries trivial. The second item is the padding threshold
([[cex-first-row-padding-before-the-partition-threshold-is-undefined]]): for
$\alpha=(2,1)$ the padded sequence is a partition exactly from $n\ge5$ on, so
the padded family, and with it any padded Kronecker coefficient with this
shape, is undefined below that size.

The third item is the pre-stability failure
([[cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability]]),
Pak–Panova's Example 4.4 recomputed from the character tables of $S_4$ and
$S_5$: $g((2,2),(2,2),(3,1))=0$ while
$g((2+t,2),(2+t,2),(3+t,1))=1$ for every $t\ge1$. The separation hypothesis of
the row-gap theorem fails at $t=0$, which is exactly why the padded sequence
can jump at its first step; once the rows are separated, the theorem forces the
value $1$ forever.
