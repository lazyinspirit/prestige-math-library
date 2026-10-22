---
id: lem-trefoil-double-branched-cover-is-lens-space-order-three
kind: lemma
title: "The trefoil double branched cover is a lens space of order three"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-double-branched-cover-of-an-oriented-link
  - lem-double-branched-cover-of-an-oriented-link-well-defined
  - lem-double-cover-of-two-arc-rational-tangle-is-solid-torus
  - lem-lift-of-two-strand-half-twist-is-annular-dehn-twist
  - def-lens-space-surgery-orientation-convention
  - thm-seifert-van-kampen
proof_strategy: direct
axiom_use: "Uses AC only through the branched-cover and lens-space convention suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §3"
      url: "https://arxiv.org/pdf/math/0309170v1"
---

## Statement

Assume the Axiom of Choice. Let $T$ be either oriented trefoil in $S^3$. Its double branched cover $\Sigma(T)$ is diffeomorphic, up to orientation reversal, to the lens space $L(3,1)$ in the convention in which $L(p,q)$ is the $p/q$ filling of the standard unknot exterior. In particular, $\pi_1(\Sigma(T))$ is cyclic of order three.

## Statement references

[[def-double-branched-cover-of-an-oriented-link|Double branched cover convention]]

[[def-lens-space-surgery-orientation-convention|Lens-space filling and orientation convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §3](https://arxiv.org/pdf/math/0309170v1)

## Facts & Assumptions

**Given:** AC and the closure of the two-strand braid $\sigma_1^k$, $k=3$ or $k=-3$, with the given knot orientation; the cover conventions of the statement. Circle coordinates below are taken modulo $2\pi$, and the page parameter $u$ modulo one.

[F1] [[def-double-branched-cover-of-an-oriented-link]] and [[lem-double-branched-cover-of-an-oriented-link-well-defined]] give the meridian-character cover and its simple branched extension, and invariance under the chosen oriented link isotopies.

[F2] [[lem-double-cover-of-two-arc-rational-tangle-is-solid-torus]] supplies the annular cover of the disk with two branch points and its product extension over an interval.

[F3] [[lem-lift-of-two-strand-half-twist-is-annular-dehn-twist]] gives the unique boundary-fixed smooth mapping-class lift of a positive half-twist as the positive annular twist, with the inverse for its reverse. It includes the actual orientation/sign calculation.

[F4] [[def-lens-space-surgery-orientation-convention]] defines $L(3,1)$ as the unknot-exterior filling with meridian slope $3\mu_U+\lambda_U$.

[F5] [[thm-seifert-van-kampen]] identifies the fundamental group of a two-solid-torus union as the pushout of its boundary inclusion maps. Thickening the two pieces by collars gives its required open connected cover.

## Proof


1.1 **The covered disk pages and their binding fillings.** Use the standard disk open book of $S^3$ about the braid axis $U$: its complement of a small axis neighborhood is $D^2\times S^1$, and the closed two-strand braid meets each disk in two points. This description is explicit in $S^3\subset\mathbb C^2$: the axis is $\{z_1=0\}$ and the page parameter is $u=\arg z_1/(2\pi)$; the disk page is parametrized by $z_2$, with $z_1$ having the remaining modulus and chosen argument. Cut the page parameter at zero. The two moving points over the resulting interval are a braid isotopy of the twice-marked disk. Its double branched cover is the corresponding annular product by the same square-coordinate and sheet-gluing construction as [F2]. On gluing the ends, the annular monodromy is the boundary-fixed lift of the braid mapping class, hence $T^k$ by [F3]. There is no extra deck map: the page-parameter loop near the axis bounds a small meridian disk in its neighborhood disjoint from the branch link, and has trivial meridian character. Moreover the axis itself links the two-strand braid twice, so its mod-two character is zero as well. Thus the cover of its solid-torus neighborhood consists of two ordinary copies, one for each annular boundary. In each copy the meridian is the loop $u$ at a fixed boundary-page point. Consequently the whole branched cover is exactly the annular mapping torus with both boundary tori filled along these page-parameter meridians. The local branched models retain the smooth structures. [F1, F2, F3, given, construct]

2.1 **Untwist the mapping torus, retaining both meridians.** Write $A=(\mathbb R/2\pi\mathbb Z)_\theta\times[-1,1]_t$, with a positive twist $T(\theta,t)=(\theta+2\pi\rho(t),t)$, where $\rho=0$ near $-1$ and $\rho=1$ near $1$. The mapping torus has the equivalence $(\theta,t,1)\sim(\theta+2\pi k\rho(t),t,0)$. The function $$\theta'=\theta+2\pi k\rho(t)u\pmod {2\pi}$$ is well-defined across that equivalence and gives an actual diffeomorphism of the mapping torus with $S^1_{\theta'}\times[-1,1]_t\times S^1_u$. Its inverse on the cut parameter interval is $\theta=\theta'-2\pi k\rho(t)u$, with the same endpoint compatibility. At the lower boundary the filling meridian $u\mapsto(\theta_0,-1,u)$ has class $(0,1)$ in the $(\theta',u)$ basis. At the upper boundary the corresponding meridian has class $(k,1)$. This computes their actual slopes, not only their intersection number. [F3, step 1.1, construct, algebra]

3.1 **The two solid tori.** Split the product at any fixed interior $t$. Fill its lower end along $(0,1)$. This caps the $u$ circle in the annulus $[-1,t]\times S^1_u$ by a disk, so that piece is the solid torus $V_-=S^1_{\theta'}\times D^2$. Its meridian on the common torus is $m=(0,1)$ and its core longitude is $l=(1,0)$. The upper filled piece is also a solid torus: the integral shear $(\theta',u)\mapsto(\theta'-2\pi ku,u)$ extends over its whole product collar, is single-valued because $k$ is an integer, and takes its filling slope $(k,1)$ to $(0,1)$. After that shear it is the same disk-capped product as the lower piece. Before undoing the shear, its meridian on the common torus is precisely $kl+m$. Hence this is a genus-one gluing with that meridian slope. [step 2.1, construct, algebra]

4.1 **Identify the fixed unknot peripheral basis.** Identify $V_-$ with the standard unknot exterior, using the same $S^3\subset\mathbb C^2$ decomposition: $E_U=\{|z_1|\ge\varepsilon\}$ for a small standard axis neighborhood $\{|z_1|\le\varepsilon\}$. On its boundary the unknot meridian $\mu_U$ is the $\arg z_1$ circle, which generates the core circle of $E_U$, and the preferred longitude $\lambda_U$ is the $\arg z_2$ circle, which bounds its meridian disk. Thus take $l=\mu_U$, $m=\lambda_U$ by an actual product-coordinate identification. Up to the global orientation choice allowed in the statement, the other solid torus is attached with meridian $k\mu_U+\lambda_U$. For $k=3$ this is exactly [F4]. For $k=-3$, the reflection $(z_1,z_2)\mapsto(\overline z_1,z_2)$ reverses the orientation of $S^3$, preserves the unknot, and sends $\mu_U$ to $-\mu_U$ and $\lambda_U$ to $\lambda_U$. It carries the slope $-3\mu_U+\lambda_U$ to $3\mu_U+\lambda_U$ and extends over the filled solid torus by the same meridian identification. Hence the other handedness has the same $L(3,1)$ description up to orientation reversal. Reversing the orientation of the branch knot does not change its mod-two meridian character. [F1, F4, step 3.1, construct, algebra]

5.1 In $E_U$ the group is generated by $\mu_U$ and $\lambda_U$ is trivial, by its product $S^1\times D^2$ coordinates. Gluing the second solid torus kills the slope $k\mu_U+\lambda_U$. By [F5] there are no further relations: a primitive complementary boundary longitude identifies the core generator of the attached solid torus with the corresponding word in the exterior generator, so that generator is eliminated from the pushout presentation. The group is therefore $\langle\mu_U\mid\mu_U^k=1\rangle$, cyclic of order $|k|=3$. All new coordinate and slope calculations were finite; the only inherited choice use is the already declared cover and peripheral-convention branch. This proves both assertions for either oriented trefoil without replacing a meridian-slope calculation by the determinant alone. [F1, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
