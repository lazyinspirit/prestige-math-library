---
page: geometric-braids-and-artin-generators-examples
title: "Geometric Braids and Artin Generators — Examples"
status: draft
requires: [geometric-braids-and-artin-generators, the-fundamental-group-of-the-circle]
items: []
examples: [ex-geometric-two-strand-braids-are-integer-twists,
           ex-the-three-strand-geometric-braid-relation,
           cex-setwise-endpoints-do-not-make-a-braid-pure,
           cex-arbitrary-link-isotopy-need-not-be-braid-isotopy]
---

These four worked entries make the abstract items of the companion page
concrete, and each one is a computation or a witness rather than a restatement.
The first example handles the case $n=2$ completely without assuming completeness of the Artin presentation:
for $h=\frac1{12}$ and $q_1=(-\frac1{12},0)$, $q_2=(\frac1{12},0)$, the
relative motion $w=z_1-z_2$ of a two-strand braid is a nowhere-zero path
in $\mathbb R^2\setminus\{0\}$ ending at one of $\pm w(0)$, whose argument class lifts uniquely to
$\theta\colon I\to\mathbb R$ with $\theta(0)=\frac12$, and $k(\beta):=2\theta(1)-1$
is an integer. The example proves that $k$ is a braid-isotopy invariant, that
$k(\gamma\star\beta)=k(\gamma)+k(\beta)$, that $k(e)=0$, $k(\sigma_1)=1$ and
$k(\sigma_1^-)=-1$, and hence that $[\beta]=[\sigma_1]^{k(\beta)}$: every
two-strand braid is braid-isotopic to exactly one integer twist, $G_2\cong\mathbb Z$
via $k$, and the twist exponent is the total argument change of the relative
motion divided by $\pi$. The parity of $k$ records the endpoint permutation,
which is exactly the ingredient that makes additivity of $k$ under stacking
work.

The second example takes $n=3$, $i=1$ and $h=\frac1{16}$, so that the three base
points are $-\frac18,0,\frac18$ on the horizontal axis, and writes out the two
words $W_0=\sigma_1\star(\sigma_2\star\sigma_1)$ and
$W_1=\sigma_2\star(\sigma_1\star\sigma_2)$ strand by strand, in the six explicit
windows dictated by the stacking formula; the windows glue at
$u=\frac14,\frac12$ and both words end at $(q_3,q_2,q_1)$, giving the endpoint
permutation $(1\,3)$. The example checks the two products in $S_3$,
$(1\,2)(2\,3)(1\,2)=(2\,3)(1\,2)(2\,3)=(1\,3)$, computes the separation
$2\lVert\rho(v)\rVert_2\ge\sqrt2\,h=\frac{\sqrt2}{16}$ of the two moving strands
and the clearance $2h=\frac18$ from the frozen base point, exhibits the rotation
braid $\mathrm{rot}$ and the linear interpolation between $W_0$ and
$\mathrm{rot}$, whose slice at $\frac12$ is $((h,-h),(-h,0),(0,h))$, and
concludes $[\sigma_1][\sigma_2][\sigma_1]=[\sigma_2][\sigma_1][\sigma_2]$ in
$G_3$.

The two counterexamples record the two places where the geometric definitions
could be misread. Setwise endpoints do not make a braid pure: the half twist
$\sigma_1$ on two strands has top endpoint set $\{q_1,q_2\}$ but ends at
$(q_2,q_1)$, so no strand returns to its own starting point, and since the
endpoint permutation is an isotopy invariant $\sigma_1$ is not braid-isotopic
to the trivial braid. And an arbitrary isotopy of arcs with fixed endpoints need
not be a braid isotopy: the explicit family
$\alpha_s(u)=((\frac{\lambda(s)}8w(u),0),\,u+\lambda(s)w(u))$ with
$\lambda(s)=\frac14\min(2s,2-2s)$ and the piecewise linear $w$ with
$w(\frac14)=1,w(\frac34)=-1$ consists of simple arcs with the fixed endpoints
$(q_1,0)$ and $(q_1,1)$ whose boundary arcs are the trivial braid, yet at
$s=\frac12$ the arc passes through the two distinct points
$((\pm\frac1{32},0),\frac12)$ at the single height $\frac12$, so it is not the
graph of a strand of any braid; the one-point-per-height requirement in the definition
of braid isotopy is therefore not redundant. Nothing in these four entries uses
a choice principle.
