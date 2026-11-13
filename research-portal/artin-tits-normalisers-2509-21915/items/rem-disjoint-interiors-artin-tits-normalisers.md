---
id: rem-disjoint-interiors-artin-tits-normalisers
kind: remark
title: Relative cones can avoid the interior of the full cone
status: published
domain: mathematics
origin: pipeline
deps:
  - def-real-coxeter-interface-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - prop-tits-domain-interface-artin-tits-prerequisites
  - prop-relative-local-finiteness-artin-tits-normalisers
  - def-hyperplane-arrangement-artin-tits-normalisers
dependency_roles:
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
  prop-relative-local-finiteness-artin-tits-normalisers: mathematical-premise
  def-hyperplane-arrangement-artin-tits-normalisers: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 9, Remark 3.7
      statement: The relative cone can be disjoint from the full Tits-cone interior;
        this occurs when the relevant parabolic subgroup is infinite. Relative
        local finiteness therefore does not immediately follow by restricting
        the full arrangement, and the proof of Proposition 3.6 also applies when
        J is empty.
      hypotheses: The article's finite-rank Coxeter-system and relative-cone conventions.
      reading_limits: The frozen article text at Remark 3.7 was read for attribution.
        The local argument below uses the declared mathematical suppliers, not
        the article's assertion as a premise.
dependency_level: 11
---

## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, with canonical real representation on $V$, simple roots $(e_s)_{s\in S}$ and dual space $\Theta=V^*$ as in [[def-real-coxeter-interface-artin-tits-prerequisites]]. Let $J\subseteq S$ and $W_J=\langle J\rangle$. Write $\Theta_J=\{f\in\Theta:f(e_j)=0\text{ for every }j\in J\}$, let $\mathrm{Cone}$ be the union of the $W$-translates of the closed fundamental chamber, and put $\mathrm{Cone}(J)=\mathrm{Cone}\cap\Theta_J$ as in [[def-relative-cone-artin-tits-normalisers]]. The superscript $\circ$ denotes interior in the indicated ambient space: $\Theta$ for $\mathrm{Cone}$ and $\Theta_J$ for $\mathrm{Cone}(J)$.

Although $\mathrm{Cone}(J)\subseteq\mathrm{Cone}$, the relative cone can be disjoint from $\mathrm{Cone}^{\circ}$. Indeed, if $W_J$ is infinite, then $\mathrm{Cone}(J)\cap\mathrm{Cone}^{\circ}=\varnothing$, and hence $\mathrm{Cone}(J)^\circ$ is also disjoint from $\mathrm{Cone}^{\circ}$. Consequently the relative interior arrangement need not be a restriction of the full interior arrangement, so its local finiteness does not immediately follow by restricting the latter. The general proof of relative local finiteness also applies to $J=\varnothing$, where it gives the full interior arrangement.

## Proof


**Given:** The finite-rank Coxeter system and notation in the Statement.

**Goal:** Prove the disjointness assertion, exhibit an instance, and explain the arrangement comparison.

[F1] For $j\in S$, the simple reflection acts on $V$ by $r_j(v)=v-2B(v,e_j)e_j$, and the dual action is $(wf)(v)=f(w^{-1}v)$. The simple reflections are involutions. [[def-real-coxeter-interface-artin-tits-prerequisites]]

[F2] The closed fundamental chamber meets every $W$-orbit in the Tits cone. A point of its face with zero-coordinate set $I$ has stabilizer $W_I$ and lies in the full Tits-cone interior exactly when $W_I$ is finite. The cone is the union of the translates of the chamber. [[prop-tits-domain-interface-artin-tits-prerequisites]]

[F3] The relative cone is the intersection specified in the Statement. For $J=\varnothing$, its relative interior and relative hyperplanes give the full interior and full root-hyperplane arrangement. [[def-relative-cone-artin-tits-normalisers]]

[F4] The relative local-finiteness proposition and its proof apply for every subset $J\subseteq S$, including the empty subset. [[prop-relative-local-finiteness-artin-tits-normalisers]]

[F5] An arrangement consists of a convex underlying set and a set of linear hyperplanes meeting it. Its restriction has a convex underlying subset of that set and retains the hyperplanes meeting the subset. Local finiteness is the open-neighbourhood condition on finitely many distinct hyperplanes. [[def-hyperplane-arrangement-artin-tits-normalisers]]



**Proof technique:** direct.

1.1 Let $f\in\Theta_J$. For $j\in J$ and $v\in V$, [F1] gives $(jf)(v)=f(r_jv)=f(v)-2B(v,e_j)f(e_j)=f(v)$. Thus every generator in $J$ fixes $f$, so $W_J$ is contained in the stabilizer of $f$. [F1, given]

2.1 The action of each $w\in W$ on $\Theta$ is an invertible linear map, hence a homeomorphism. Since the union defining $\mathrm{Cone}$ is $W$-invariant, its interior is also $W$-invariant. If $f\in\mathrm{Cone}^{\circ}$, [F2] gives $w$ with $wf$ in the closed chamber. This point is interior and lies in a face of some type $I$; [F2] makes its stabilizer $W_I$ finite. The stabilizer of $f$ is conjugate to that of $wf$, so it too is finite. Therefore, if $W_J$ is infinite, step 1.1 rules out every point of $\Theta_J$ from $\mathrm{Cone}^{\circ}$. Intersecting with $\mathrm{Cone}$ proves the claimed disjointness, and the same holds for the relative interior. [F2, F3, step 1.1]

3.1 Such a case exists: take $S=J=\{s,t\}$ with Coxeter exponent $m(s,t)=\infty$. The assignments $s(n)=-n$ and $t(n)=1-n$ define involutions of $\mathbb Z$, so the presentation gives an action of $W$ on $\mathbb Z$. Their product acts as translation by $-1$, and therefore has infinite order; $W_J=W$ is infinite. Also $\Theta_J=\{0\}$ and $0\in\mathrm{Cone}$, so $\mathrm{Cone}(J)=\{0\}$ and its interior in $\Theta_J$ is nonempty. Step 2.1 makes it disjoint from the full interior. By [F5], restriction requires its underlying set to be a subset of the original underlying set. The nonempty set $\mathrm{Cone}(J)^\circ=\{0\}$ is disjoint from $\mathrm{Cone}^{\circ}$, so this relative arrangement cannot be obtained by restricting an arrangement whose underlying space is $\mathrm{Cone}^{\circ}$. Finally, [F3] and [F4] give the empty-subset specialization of the general relative proof. [F1, F3, F4, F5, step 2.1] ∎

## Source notes

Remark 3.7 of the article is cited for attribution. The disjointness argument above uses the stated stabilizer and interior criteria.
