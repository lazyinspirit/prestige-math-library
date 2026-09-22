---
page: square-integrable-kernels-and-hilbert-schmidt-compactness-examples
title: Square-Integrable Kernels and Hilbert–Schmidt Compactness — Examples
status: published
items: []
examples: [ex-square-integrable-separable-product-kernel, ex-square-integrable-kernel-without-continuous-representative, ex-square-integrable-kernel-finite-rank-truncations, ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two]
---

The companion computes the kernel theorem on explicit kernels. A separable
product kernel $k(x,y)=a(x)\overline{b(y)}$ of two $L^2$ classes is shown to be
square integrable with $\|k\|_2=\|a\|_2\|b\|_2$, with operator
$(T_kf)(x)=a(x)\langle f,b\rangle$, range contained in the line $\mathbb C a$,
and operator norm equal to the Hilbert–Schmidt norm
$\|a\|_2\|b\|_2$; the degenerate cases $a=0$ and $b=0$ are included, the range
then admitting the empty ordered basis.

The pair of Lebesgue measures on the two factors of the square is used next for
a discontinuity witness: the rank-one kernel $\mathbf 1_{[0,1/2]}(x)$ is square
integrable of norm squared one half, but no continuous function on the square
agrees with it almost everywhere — a null set cannot contain a ball of positive
radius, so continuity propagates the value $1$ from the left half and the value
$0$ from the right half to the interface $x=1/2$, a contradiction.

The diagonal kernel of a square-summable sequence on $\mathbb N$ is then
examined with counting measure: the kernel operator is the diagonal map, its
truncations are finite rank with an explicit ordered basis of standard vectors
(hence compact), and the truncation errors are computed exactly, the
Hilbert–Schmidt error being the square root of the tail of $\sum|a_n|^2$ and the
operator-norm error being $\sup_{n>N}|a_n|$. The section closes by noting that
every square-integrable kernel over sigma-finite factors defines a compact
integral operator, so the discontinuous witness of the second example is
compact as well: compactness of these integral operators does not require
continuity of the kernel.
