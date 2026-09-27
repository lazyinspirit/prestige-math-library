---
id: def-p-residual-of-a-finite-group
kind: definition
title: "P residual of a finite group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-normal-subgroup, def-quotient-group, def-finite-p-group, thm-first-isomorphism-theorem-groups, thm-image-subgroup-and-kernel-normal, prop-order-of-finite-direct-product, cor-order-of-a-quotient-group, thm-lagrange, def-finite-cardinality, cor-cardinality-of-the-power-set, lem-subgroups-of-finite-p-groups-are-p-groups, def-group-homomorphism, lem-intersection-of-subgroups, def-generated-subgroup, lem-every-integer-above-one-has-a-prime-divisor]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2–5, PDF pp. 1–15"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $G$ be a finite group and let $p$ be a prime. A normal subgroup
$N\mathrel{\trianglelefteq}G$ is *$p$-cofinal* when the quotient $G/N$ is a
finite $p$-group, that is, when $[G:N]$ is a power of $p$
([[def-quotient-group]], [[cor-order-of-a-quotient-group]],
[[def-finite-p-group]]). The **$p$-residual** of $G$ is

$$O^{p}(G):=\bigcap\{\,N\mathrel{\trianglelefteq}G:N \text{ is } p\text{-cofinal}\,\},$$

the intersection of all $p$-cofinal normal subgroups of $G$. It is the unique
smallest normal subgroup of $G$ whose quotient is a $p$-group: it is
$p$-cofinal itself, and $O^{p}(G)\le N$ for every $p$-cofinal $N$.

**Why the definition is well posed.** The family
$\mathcal N=\{N\mathrel{\trianglelefteq}G:G/N$ is a $p$-group$\}$ is nonempty
($G\in\mathcal N$, since $G/G$ is the trivial group, of order $p^{0}$), and it is
finite, because every member is a subset of the finite set $G$ and a finite set
has finitely many subsets ([[def-finite-cardinality]],
[[cor-cardinality-of-the-power-set]]). The intersection $O^{p}(G)$ is a subgroup
of $G$ by [[lem-intersection-of-subgroups]], and a normal subgroup because each
$N$ is normal ([[def-normal-subgroup]]); it remains to see that it is again
$p$-cofinal, and least.

*Finite intersections of $p$-cofinal subgroups are $p$-cofinal.* Let
$N_1,\dots,N_r$ be $p$-cofinal. The diagonal map
$\delta:G\to G/N_1\times\cdots\times G/N_r$, $\delta(g)=(gN_1,\dots,gN_r)$, is a
homomorphism of groups ([[def-group-homomorphism]]); its kernel is
$N_1\cap\cdots\cap N_r$, and its image is a subgroup of the direct product
([[thm-first-isomorphism-theorem-groups]],
[[thm-image-subgroup-and-kernel-normal]]). The direct product has order
$|G/N_1|\cdots|G/N_r|$, a power of $p$
([[prop-order-of-finite-direct-product]]), hence is a finite $p$-group, and a
subgroup of a finite $p$-group is a finite $p$-group
([[lem-subgroups-of-finite-p-groups-are-p-groups]]). By the first isomorphism
theorem $G/(N_1\cap\cdots\cap N_r)\cong\operatorname{im}\delta$, so the
intersection is $p$-cofinal.

*The intersection of all of them is a member.* Since $\mathcal N$ is finite, say
$\mathcal N=\{N_1,\dots,N_r\}$, the preceding paragraph shows that
$O^{p}(G)=N_1\cap\cdots\cap N_r$ is $p$-cofinal; in particular $G/O^{p}(G)$ is a
$p$-group and $O^{p}(G)\le N$ for every $N\in\mathcal N$ by construction.

*Smallest and unique.* If $K\mathrel{\trianglelefteq}G$ has $G/K$ a $p$-group,
then $K\in\mathcal N$, so $O^{p}(G)\le K$; and $O^{p}(G)$ itself has $p$-group
quotient. Hence $O^{p}(G)$ is the smallest normal subgroup of $G$ with $p$-group
quotient, and it is the only one with that property, since two such subgroups
contain each other.

The construction is the lower $p$-series counterpart of the $p'$-core
$O_{p'}(G)$ of [[def-p-prime-core-of-a-finite-group]]: the $p'$-core is the
largest normal $p'$-subgroup, while the $p$-residual is the smallest normal
subgroup with $p$-group quotient. In particular $O^{p}(G)$ is the kernel of the
natural map onto the largest $p$-group quotient of $G$, so every homomorphism
from $G$ to a finite $p$-group factors through $G/O^{p}(G)$
([[def-quotient-group]]).
