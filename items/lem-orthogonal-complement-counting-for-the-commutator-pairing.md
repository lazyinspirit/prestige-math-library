---
id: lem-orthogonal-complement-counting-for-the-commutator-pairing
kind: lemma
title: "A subgroup of the central quotient and its orthogonal complement have orders multiplying to the order of the quotient"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, thm-first-isomorphism-theorem-groups, thm-lagrange, def-elementary-abelian-p-group, def-center-of-a-group, def-quotient-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Lemma 3.10 and Lemma 3.11"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 2.40"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group of order $p^{1+2n}$, let $V=P/Z(P)$ and let
$b_z$ be its commutator pairing. For a subgroup $U\le V$ put

$$U^{\perp}:=\{v\in V:b_z(v,u)=0\text{ for every }u\in U\}.$$

Then $U^{\perp}$ is a subgroup of $V$ and

$$\lvert U\rvert\,\lvert U^{\perp}\rvert=\lvert V\rvert=p^{2n}.$$

This is a statement about this pairing on this quotient, proved by counting
inside $V$; no theory of bilinear forms on a vector space is used.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ of order $p^{1+2n}$, the quotient $V=P/Z(P)$ with its commutator pairing $b_z$, and a subgroup $U\le V$.

[F1] The commutator pairing of $P$ relative to $z$ is the map $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F2] A subset $S$ of an elementary abelian $p$-group spans when every element is a product $\prod_{s\in S}s^{a_s}$ with coefficients in $\mathbb F_p$, and is independent when such a product is the identity only for zero coefficients; a basis is an independent spanning subset ([[def-fp-basis-of-an-elementary-abelian-p-group]]).

[F3] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

[L1] The commutator pairing is well defined, $\mathbb F_p$-bilinear and alternating ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L2] The radical of the commutator pairing is trivial ([[lem-the-commutator-pairing-is-nondegenerate]]).

[L3] An extraspecial $p$-group has $\lvert P\rvert=p^{1+2n}$ with $n\ge1$ and $\lvert P/Z(P)\rvert=p^{2n}$ ([[cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number]]).

[L4] Every finite elementary abelian $p$-group has a basis; every independent subset extends to a basis, every spanning subset contains a basis, and all bases have the same finite size ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]]).

[L5] The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]]).

[L6] For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

[L7] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 The group $V$ is elementary abelian of order $p^{2n}$, and $U$ is a subgroup of it, hence also a finite abelian $p$-group whose nonidentity elements have order $p$. [F3, L3, L5]

1.2 For each fixed $u\in V$ the map $v\mapsto b_z(v,u)$ is a homomorphism from $V$ to the additive group of $\mathbb F_p$, by additivity of $b_z$ in its first variable; $U^{\perp}$ is the intersection of the kernels of these maps as $u$ runs over $U$, hence a subgroup of $V$. [F1, L1]

2.1 Choose a basis $u_1,\dots,u_k$ of $U$ and extend it to a basis $u_1,\dots,u_m$ of $V$. Unique representation in a basis makes the assignment of coefficient families to elements a bijection, so $\lvert U\rvert=p^{k}$ and $p^{m}=\lvert V\rvert=p^{2n}$, whence $m=2n$. [F2, L4, L5, step 1.1]

3.1 Define $\Psi:V\to V$ by $\Psi(v)=\prod_{i=1}^{m}u_i^{\,b_z(v,u_i)}$. It is a homomorphism, again by additivity in the first variable. If $\Psi(v)$ is the identity then independence of the basis forces $b_z(v,u_i)=0$ for every $i$, and then additivity in the second variable gives $b_z(v,w)=0$ for every $w\in V$, so $v$ is the identity by triviality of the radical. Thus $\Psi$ is injective, hence bijective because $V$ is finite. [F1, F2, L1, L2, step 2.1]

4.1 Let $\pi:V\to U$ send $\prod_{i=1}^{m}u_i^{a_i}$ to $\prod_{i=1}^{k}u_i^{a_i}$; unique representation makes $\pi$ a well-defined homomorphism, and it is surjective onto $U$ because it fixes each $u_i$ with $i\le k$. The composite $\Phi=\pi\circ\Psi$ is therefore a surjective homomorphism from $V$ onto $U$, and $\Phi(v)$ is the identity exactly when $b_z(v,u_i)=0$ for every $i\le k$, which by additivity in the second variable is exactly $v\in U^{\perp}$. [F2, step 2.1, step 3.1]

5.1 The first isomorphism theorem and Lagrange applied to $\Phi$ give $\lvert V\rvert=\lvert U^{\perp}\rvert\,\lvert U\rvert$, that is $\lvert U\rvert\,\lvert U^{\perp}\rvert=p^{2n}$. [L6, L7, step 2.1, step 4.1] ∎

## Remarks

The two ends of the range behave as the formula predicts and are worth naming. For the trivial subgroup the formula reads $\lvert V\rvert=\lvert V\rvert$, since the perpendicular of the trivial subgroup is all of $V$; for $U=V$ it reads $\lvert V^{\perp}\rvert=1$, which is triviality of the radical.
