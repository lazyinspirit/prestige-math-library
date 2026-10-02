---
page: integral-specht-modules-and-modular-simple-modules-examples
title: "Integral Specht Modules and Modular Simple Modules — Examples"
status: draft
requires: [integral-specht-modules-and-modular-simple-modules]
items: []
examples: [ex-specht-form-rank-for-shape-two-two-in-small-characteristics,
           ex-decomposition-matrices-of-s3-in-characteristics-two-and-three,
           cex-p-regular-and-p-restricted-are-not-the-same-label,
           cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head]
---

These four entries make the modular theory concrete on small shapes. The first
computes the integral Gram matrix of shape $(2,2)$ in its standard
polytabloid basis, $G_{(2,2)}=\begin{pmatrix}4&2\\2&4\end{pmatrix}$, and reads
off the dimensions $\dim_kD^{(2,2)}=2,1,0$ for $p>3$, $p=3$, $p=2$: in
characteristic $2$ the Specht module is nonzero of dimension $2$ while its
invariant form is identically zero and its form quotient vanishes.

The second entry works out the complete decomposition matrices of $S_3$. At
$p=2$ the sign representation coincides with the trivial one and the
two-dimensional standard module is simple, giving rows $(3),(2,1),(1,1,1)$
equal to $(1,0),(0,1),(1,0)$ over the columns $D^{(3)},D^{(2,1)}$. At $p=3$
the all-ones vector $v_1+v_2+v_3$ spans a trivial submodule of $S^{(2,1)}_k$
with sign quotient, giving rows $(1,0),(1,1),(0,1)$; both matrices exhibit
the dominance orientation of the main page.

The last two entries record failures of ordinary-case expectations. The
$p$-regular and $p$-restricted label sets already differ at $n=2$, $p=2$: the
partition $(2)$ is $2$-regular but not $2$-restricted, while its conjugate
$(1,1)$ is $2$-restricted but not $2$-regular, and the two labels describe
the same simple module because the sign twist is invisible in characteristic
$2$; applying a $p$-restricted statement to the James label therefore needs
the transpose translation. Finally, modular Specht modules need not be
simple and their form quotients can vanish: $S^{(2,1)}_k$ is reducible in
characteristic $3$, where it has a one-dimensional trivial submodule and
one-dimensional sign quotient, while $S^{(2,2)}_k$ is nonzero of dimension
$2$ in characteristic $2$ with $D^{(2,2)}=0$; no simplicity claim is made for
the characteristic-$2$ witness.
