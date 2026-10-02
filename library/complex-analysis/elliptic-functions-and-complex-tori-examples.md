---
page: elliptic-functions-and-complex-tori-examples
title: "Elliptic Functions and Complex Tori: Examples and Counterexamples"
status: published
items: []
examples: [ex-oriented-lattice-bases-and-sl2z,
           ex-boundary-free-fundamental-parallelogram,
           ex-square-and-hexagonal-lattice-invariants,
           ex-half-period-values-and-branching,
           ex-weierstrass-addition-and-duplication,
           ex-sigma-simple-lattice-zero,
           ex-singular-cubic-degeneration,
           ex-rectangular-weierstrass-function-and-elliptic-integral,
           ex-rank-one-cotangent-uniformization,
           ex-canonical-basis-of-complex-lattice]
---

These computations make the constructions of the companion page explicit on
lattices that can be manipulated by hand. The examples begin with lattice
bookkeeping: the reduced ratio
$\operatorname{Im}\tau>0$, $-\tfrac12<\operatorname{Re}\tau\le\tfrac12$,
$|\tau|\ge1$, with $\operatorname{Re}\tau\ge0$ when $|\tau|=1$, is shown to exist and be unique for every lattice, with stabiliser
counts two, four and six at the square and hexagonal ratios, and the oriented
bases of $\mathbb Z+i\mathbb Z$ are enumerated with their
$\mathrm{SL}_2(\mathbb Z)$ change-of-basis data. A shifted fundamental
parallelogram is exhibited whose boundary misses every pole and every zero of
a given nonconstant elliptic function, so the divisor laws of the companion
page can always be applied without a boundary degeneracy.

The invariant computations are symmetry arguments rather than numerical
evaluations: $i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}$ forces
$g_3(\mathbb Z+i\mathbb Z)=0$ and $\rho\Lambda_{\mathrm{hex}}=
\Lambda_{\mathrm{hex}}$ forces $g_2(\mathbb Z+\mathbb Z\rho)=0$, while the
nonvanishing of the complementary invariant follows from $\Delta\ne0$. On the
square lattice the scaling identity $\wp(iz)=-\wp(z)$ then gives
$\wp\bigl(\tfrac{1+i}2\bigr)=0$, and the remaining two half-period values are
the two nonzero roots of $4x^3-g_2x$; the four branch values of the associated
degree-two map are $0,\pm\sqrt{g_2}/2,\infty$. The same identities specialise
to the duplication formula for $\wp(2z)$, the simple zero of $\sigma$ at each
lattice point, and the degenerate singular cubic with $g_2=3$, $g_3=1$, whose
node at $(-1/2,0)$ shows that $\Delta\ne0$ cannot be dropped.

The rectangular case turns the real locus of $\wp$ into an explicit conformal
map: the boundary of a half-period rectangle is carried onto the extended real
line, the interior onto a half-plane, and the inverse is an elliptic integral
$\int d\zeta/\sqrt{4\zeta^3-g_2\zeta-g_3}$ with the classical relation to the
Jacobi function $\mathrm{sn}$. Finally the rank-one analogue
$\pi\cot(\pi z)$ is uniformised by the conic $YZ=X^2+\pi^2Z^2$ through the
bijection $\mathbb C/\mathbb Z\to\mathbb C^\ast$, $z\mapsto e^{2\pi iz}$ — the
rank-one counterpart of the cubic uniformisation of the companion page.
