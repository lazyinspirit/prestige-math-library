---
page: dirichlets-unit-theorem-regulators-and-s-units-examples
title: "Dirichlets Unit Theorem Regulators and S Units — Examples"
status: published
items: []
examples: [ex-units-of-q-and-imaginary-quadratic-fields, ex-real-quadratic-units-and-pell, ex-units-in-a-real-cubic-field, ex-regulator-of-a-real-quadratic-field, ex-change-of-fundamental-units-preserves-regulator, ex-s-units-of-q, cex-z-sqrt-d-units-need-not-equal-ok-units]
---

The examples compute the unit group or the regulator in the three rank
patterns the theorem allows. Rank zero is $\mathbb Q$ and the imaginary
quadratic fields: the groups $\{\pm1\}$, $\{\pm1,\pm i\}$ and
$\{\pm1,\pm\omega,\pm\omega^2\}$ are found by solving the norm equation
$N(u)=\pm1$ with the quadratic norm formula. Rank one is the real quadratic
field $\mathbb Q(\sqrt d)$, where the units of the maximal order are governed
by the negative Pell equation through the period of the continued fraction of
$\sqrt d$, the fundamental unit is $(1+\sqrt5)/2$ for $d=5$, and
$R_K=\log\varepsilon$. Rank two is the totally real cubic field of
$2\cos(2\pi/9)$: the elements $\alpha$ and $\alpha-1$ have norm $-1$ and $1$,
their logarithmic vectors are independent, and the two independent units pin
down the full rank.

Two computations make the regulator's conventions and invariance visible. The
deleted-row minors of the cubic logarithmic matrix all have absolute value
$0.849287\ldots$, and the unimodular tuple $(\alpha(\alpha-1),\alpha-1)$
reproduces them exactly, illustrating the $\mathrm{GL}_2(\mathbb Z)$ step of
the well-definedness theorem; replacing the fundamental unit $(1+\sqrt5)/2$ of
$\mathbb Q(\sqrt5)$ by the Pell generator $9+4\sqrt5$ of the order
$\mathbb Z[\sqrt5]$ would multiply the regulator by six. The page ends with
the $S$-units of $\mathbb Q$, equal to
$\{\pm p_1^{n_1}\cdots p_m^{n_m}\}$ of rank $m$, and with the counterexample
showing that $\mathbb Z[\sqrt5]^\times=\pm\langle(2+\sqrt5)\rangle$ is a
subgroup of index three in $\mathcal O_{\mathbb Q(\sqrt5)}^\times$.
