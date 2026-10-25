---
page: coxeter-artin-and-hecke-interfaces
title: "Coxeter, Artin, and Hecke Interfaces"
status: published
requires: [coxeter-presentations-exchange-and-reduced-word-theorems,
           canonical-roots-signs-and-faithful-reflections,
           parabolic-subgroups-and-double-coset-geometry,
           group-homomorphisms-and-the-isomorphism-theorems,
           generic-coxeter-hecke-algebras-and-the-standard-basis,
           garside-structure-normal-forms-and-the-center,
           braids-as-fundamental-groups-of-configuration-spaces,
           artin-presentation-completeness-and-braid-combing]
items: [def-cg-artin-monoid-and-group-presentations,
        lem-cg-artin-presentation-universal-properties-and-coxeter-surjection,
        thm-cg-reduced-positive-section-and-length-additive-products,
        lem-cg-hecke-and-lie-seam-contract-compatibility]
examples: []
---

From one finite Coxeter matrix $(S,m)$ the page builds three presentation-level
interfaces: the Artin monoid and group carried by the braid pairs alone, the
positive section lifted from a reduced-word indexing of $W$, and the generic
Hecke algebra with its standard basis and quadratic normalizations.

The Artin monoid $A^{+}$ is the quotient of the word monoid $S^{*}$ by the
smallest congruence containing every braid pair $\{s\,t\,s\cdots,\
t\,s\,t\cdots\}$, and the Artin group $A$ is the quotient of the free group
$F(S)$ by the normal closure of the relators $u\,v^{-1}$, so that no relation
$\sigma_s^{2}=1$ is imposed. The two words of a braid pair agree in $A$, and
minimality of the congruence descends $s\mapsto\sigma_s$ to the canonical
comparison $\gamma:A^{+}\to A$. The same universal property applied to
$s\mapsto s$ produces the projection $\pi:A\to W$ with
$\pi\circ\gamma=\pi^{+}$, and $\pi$ is surjective because the images of the
$\sigma_s$ generate $W$. Quotienting $A$ by the normal closure $D$ of the
squares of the generators returns the Coxeter presentation, the induced map
$A/D\to W$ is an isomorphism, and $\ker\pi=D$.

Reduced-word control of $W$ then produces the positive section. For each $w$ the
product of the $\sigma_s$ along any reduced expression is independent of that
expression by Matsumoto's theorem, giving $b_w\in A^{+}$ with
$\pi^{+}(b_w)=w$ and $b_1=[\varepsilon]$; the map $w\mapsto b_w$ is injective
and a set-theoretic section, and $b_ub_v=b_{uv}$ holds exactly when
$\ell(uv)=\ell(u)+\ell(v)$. The additive class length $L$ on $A^{+}$ and the
group degree $\deg$ on $A$ make the failure of multiplicativity explicit when
$S\ne\emptyset$:
$b_sb_s=[ss]\ne[\varepsilon]=b_{s^{2}}$ for every $s\in S$, because
$L([ss])=2\ne0=L([\varepsilon])$, and the composite $\gamma\circ b$ is
therefore not a group homomorphism either. Nothing here asserts injectivity of
$\gamma$ or of $\pi^{+}$, an Ore or Garside condition, or an embedding of
$A^{+}$ into $A$.

The Hecke side of the interface reuses the same indexing. Since the generators
$T_s$ of the generic Hecke algebra satisfy the braid relations, the universal
property of the Artin monoid gives a monoid homomorphism $\Theta:A^{+}\to H$
with $\Theta(\sigma_s)=T_s$ and $\Theta(b_w)=T_w$, so the positive section and
the standard basis share one reduced-word indexing, with base-change
compatibility of the specialized bases. The four normalizations
$T_s$, $S_s=v_sT_s$, $-T_s$ and $-v_s^{-1}T_s$ are interconverted by unit
changes of generators, and the root-length matching clause records exactly what
a supplied root system must satisfy to match the canonical form: the diagram
fixes the normalized products but neither the root lengths nor the individual
values of the form. For Soergel and Kazhdan–Lusztig applications the page
separates a faithful canonical representation from the reflection-faithful
realization required by arguments that assume reflection faithfulness; the companion page computes a degenerate
rank-two instance in which the canonical representation is faithful but not
reflection faithful.

For the standard type-$A_{n-1}$ system the page records one conditional
application: under AC, and only by consuming the independently published
presentation-completeness theorem, the presentation-defined Artin group is
identified with the geometric braid group. The companion
[[coxeter-artin-and-hecke-interfaces-examples]] exercises the projection to
$S_n$, the positive lifts, the positive braid monoid and the quadratic Hecke
conventions.

Throughout the type-$A$ discussion on this page and its companion, use the
order-preserving relabelling $k\mapsto k+1$ from the library's underlying set
$\{0,\ldots,n-1\}$ to $\{1,\ldots,n\}$. Thus $(i\ i+1)$ denotes the
transported adjacent transposition, and one-line notation and inversion
positions use the transported labels; inversion numbers are unchanged.
