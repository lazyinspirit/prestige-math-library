---
page: highest-weights-and-rational-representations-of-split-reductive-groups-examples
title: "Highest Weights and Rational Representations of Split Reductive Groups — Examples"
status: published
items: []
examples:
  - ex-fundamental-sl2-modules-in-characteristic-p
  - cex-rational-modules-need-not-be-semisimple-in-characteristic-p
requires:
  - highest-weights-and-rational-representations-of-split-reductive-groups
---

These examples exercise the highest-weight theory of
[[highest-weights-and-rational-representations-of-split-reductive-groups]] on $\mathrm{SL}_2$ and record a sharp boundary between
the classification of simple modules and semisimplicity of all modules.

The first leaf, [[ex-fundamental-sl2-modules-in-characteristic-p]], computes
the root datum $X(T_2)=\mathbb Z\chi$ with $\alpha=2\chi$, the dominant
characters $\{m\chi:m\ge0\}$, and the simple modules $L(m)$ of
$\mathrm{SL}_2$: their top weight space is one-dimensional, their weights
lie between $m\chi$ and $-m\chi$ with multiplicity at most one, and
$\dim_kL(m)\le m+1$. Over a field of characteristic $p>0$ it exhibits the
two-dimensional Frobenius-twist submodule of $S^p(k^2)$ spanned by $e_1^p$ and
$e_2^p$, which is isomorphic to $L(p)$.

The second leaf,
[[cex-rational-modules-need-not-be-semisimple-in-characteristic-p]], shows
that the symmetric power $S^p(k^2)$ itself is not semisimple in characteristic
$p$: its unique simple submodule is that Frobenius twist, so its socle is
two-dimensional inside the $(p+1)$-dimensional space. Thus the
characteristic-free classification of simples does not extend to complete
reducibility, which the companion page proves only in characteristic zero
([[thm-complete-reducibility-of-rational-modules-in-characteristic-zero]]).
