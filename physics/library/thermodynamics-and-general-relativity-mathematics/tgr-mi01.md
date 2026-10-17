---
page: tgr-mi01
title: Finite spacelike slab and normal flux charge
status: published
library: mathematics
items:
  - lem-tgr-coordinate-boxes-are-compact-jordan
  - lem-tgr-c1-current-density-divergence
  - def-tgr-spacelike-current-slab
  - lem-tgr-normal-flux-coordinate-density
  - thm-tgr-finite-current-production-balance
examples: []
---

This page develops the finite-box geometry and integration inputs before
stating the balance. A slab has a compact product-box closure in a positively
oriented Lorentzian chart; its spatial region is the open rectangle $\Omega$
and its slices are the spacelike level sets $x^0=t$. The current is $C^1$ on
a neighborhood of the closure, and the slice charge is
the signed flux against the future unit normal and induced three-volume:
[[def-tgr-spacelike-current-slab]]. The coordinate identity converting that
normal integral to $wJ^0$ is proved in
[[lem-tgr-normal-flux-coordinate-density]].

The balance proof uses the locally extended $C^1$ density formula
[[lem-tgr-c1-current-density-divergence]] and one-dimensional FTC on each
coordinate direction. It gives the exact equation
$$Q_J(t_1)-Q_J(t_0)+\Phi_J(B)=\int_K\nabla_aJ^a\,\mathrm{vol}_g.$$
Writing $P:=\int_K\Pi\,\mathrm{vol}_g$ and
$\Delta Q:=Q_J(t_1)-Q_J(t_0)$, the balance gives
$\Delta Q=P-\Phi_J(B)$. Thus the endpoint charge is nondecreasing across this
slab exactly when $P\ge\Phi_J(B)$. Under the theorem's hypothesis
$\Pi\ge0$, zero net outward side flux is sufficient, but not necessary:
production can outweigh positive outward flux, and negative net flux
contributes positively to $\Delta Q$. The independent flat-current
calculations in proof steps 1.4, 2.2 and 4.1 of
[[thm-tgr-finite-current-production-balance]] verify both nonzero-flux
possibilities directly. The side flux is a three-form integral,
so the side faces need not admit unit normals.

The diagram is a $1+1$ dimensional cross-section of the four-dimensional
coordinate box. Two spatial coordinates are suppressed. It marks the two
spacelike slice caps and the side boundary only; it makes no assertion about
the causal character of the side faces and is not used in any proof.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[->] (0,0) -- (0,3.7) node[above] {$x^0$};
  \draw[->] (0,0) -- (5.2,0) node[right] {$x^1$};
  \draw[thick] (1,0.8) -- (4.2,0.8);
  \draw[thick] (1,2.8) -- (4.2,2.8);
  \draw[thick] (1,0.8) -- (1,2.8);
  \draw[thick] (4.2,0.8) -- (4.2,2.8);
  \node[left] at (1,0.8) {$\Sigma_{t_0}$};
  \node[left] at (1,2.8) {$\Sigma_{t_1}$};
  \node[right] at (4.2,1.8) {$B$};
  \node[below] at (2.6,0.4) {spatial interval};
\end{tikzpicture}
```

The companion page gives an explicit flat example in which current production
vanishes but the charge in an open box decreases because current leaves
through its side boundary:
[[cex-tgr-open-region-entropy-export]].
