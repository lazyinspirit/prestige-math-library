---
title: Path-class independence and equivariance in the topological construction
status: published
research_item: prop-topological-path-properties-artin-tits-normalisers
dependency_level: 19
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 25–26, proof of Lemma 6.6 and footnote 1
      statement: The path class assigned to an adjacent directed arrow is independent
        of the intermediate point and paths; the ordered intersection components
        are equivariant, and the reverse directed arrow is not represented by
        the inverse path class.
      hypotheses: The spherical Coxeter system and relative arrangement in Lemma 6.6,
        with a subset J of its vertices and the chosen equivariant chamber
        points.
      reading_limits: The frozen article passage was consulted for attribution. The
        proof below uses the declared suppliers and a local winding argument,
        not the article's assertions as premises.
---

PDF p. 25: ` Lemma 6.6 proof `; PDF p. 26: ` Lemma 6.6 proof; footnote 1 `

## Prerequisites

- [def-topological-path-assignment-artin-tits-normalisers](item-def-topological-path-assignment-artin-tits-normalisers)
- [def-chamber-open-sets-artin-tits-normalisers](item-def-chamber-open-sets-artin-tits-normalisers)
- [prop-chamber-open-set-properties-artin-tits-normalisers](item-prop-chamber-open-set-properties-artin-tits-normalisers)
- [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)
- [math:thm-fundamental-group-of-the-circle](https://alphabetamath.cc/item/thm-fundamental-group-of-the-circle)
- [math:thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle](https://alphabetamath.cc/item/thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle)
- [math:def-degree-of-a-circle-loop](https://alphabetamath.cc/item/def-degree-of-a-circle-loop)


## Statement

Let $(W,S)$ be a Coxeter system with finite $W$, let $J\subseteq S$, and use the relative arrangement, complement $\mathcal X_J^{\mathbb C}$, normaliser quotient $G$, equivariant chamber points $a_C$, ordered intersection components $X_{C,C'}$, and assigned path classes $p(C,C')$ of [def-topological-path-assignment-artin-tits-normalisers](item-def-topological-path-assignment-artin-tits-normalisers). Thus $C,C'$ are adjacent chambers, and $p(C,C')$ is the endpoint-fixed homotopy class of a path from $a_C$ to $a_{C'}$ passing through $X_{C,C'}$ in the prescribed two chamber sets. The class is independent of the intermediate point and the two chosen paths. For every $g\in G$, $gX_{C,C'}=X_{gC,gC'}$ and $p(gC,gC')=g\,p(C,C')$. The reverse arrow uses $X_{C',C}$ and satisfies $p(C',C)\ne p(C,C')^{-1}$ in the fundamental groupoid of the complement.

## Facts & Assumptions


[F1] The path-assignment definition and its justification establish independence of the intermediate point and paths, the equality $gX_{C,C'}=X_{gC,gC'}$, and equivariance of the assigned classes. [def-topological-path-assignment-artin-tits-normalisers](item-def-topological-path-assignment-artin-tits-normalisers)

[F2] The chambers have a unique separating hyperplane $H_0$. Choose a nonzero real linear functional $a$ with kernel $H_0$, positive on $C$. For $x+iy$ in the complement, $z=a(x)+i a(y)$ is nonzero. The image of $X_C$ avoids the nonpositive imaginary axis, and the image of $X_{C'}$ avoids the nonnegative imaginary axis. The image of $X_{C,C'}$ has positive real part, while that of $X_{C',C}$ has negative real part. [def-chamber-open-sets-artin-tits-normalisers](item-def-chamber-open-sets-artin-tits-normalisers)

[F3] The two ordered intersection components are nonempty, and the chamber sets are contractible. [prop-chamber-open-set-properties-artin-tits-normalisers](item-prop-chamber-open-set-properties-artin-tits-normalisers)

[F4] Endpoint-fixed path homotopies give the fundamental groupoid; concatenating a path with its reverse represents an identity. The map $\operatorname{Deg}:\pi_1(\mathbb R/\mathbb Z,[0])\to\mathbb Z$ is an isomorphism, so a based loop of degree $-1$ is not endpoint-fixed homotopic to the constant loop. [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) [math:thm-fundamental-group-of-the-circle](https://alphabetamath.cc/item/thm-fundamental-group-of-the-circle)

[F5] Identifying $(u,v)\in\mathbb R^2$ with $u+iv\in\mathbb C$, the map $h:\mathbb R/\mathbb Z\to\{w\in\mathbb C:|w|=1\}$ given by $h([s])=\cos(2\pi s)+i\sin(2\pi s)$ is a homeomorphism and sends $[0]$ to $1$. [math:thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle](https://alphabetamath.cc/item/thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle)

[F6] For a loop $\beta:[0,1]\to\mathbb R/\mathbb Z$ based at $[0]$, its degree is $\widetilde\beta(1)$, where $\widetilde\beta:[0,1]\to\mathbb R$ is its unique continuous lift under $q(s)=[s]$ with $\widetilde\beta(0)=0$. [math:def-degree-of-a-circle-loop](https://alphabetamath.cc/item/def-degree-of-a-circle-loop)

## Proof


**Given:** The data and adjacent chambers in the Statement. A path class is taken relative to its endpoints; inverse means the class of the reversed path.

**Proof technique:** direct, using a separating-hyperplane coordinate.

**Goal:** Establish the stated choice independence and equivariance, and distinguish the reverse arrow from the inverse path class.

1.1 **Use the established assignment.** The first two assertions are exactly the independence and equivariance proved in [F1]. The reverse directed arrow is defined using $X_{C',C}$, by the same assignment with the chambers interchanged. [F1]

1.2 **Track an argument around the separating hyperplane.** Represent $p(C,C')$ and $p(C',C)$ by their prescribed two-piece paths and concatenate them to a loop $\Gamma$ based at $a_C$. Apply the continuous nonvanishing map $z/|z|$ from [F2] to obtain the unit-circle loop $\lambda(t)=z(\Gamma(t))/|z(\Gamma(t))|$. On the slit plane containing the image of $X_C$, use the continuous argument $A$ in $(-\pi/2,3\pi/2)$; on the slit plane containing the image of $X_{C'}$, use the continuous argument $B$ in $(-3\pi/2,\pi/2)$. At the first intermediate point, whose real part is positive, $A=B$. At the second, whose real part is negative, $A=B+2\pi$. Along the four successive path segments use $A,B,B,A-2\pi$, respectively. These branches agree at the joins and give a continuous real argument $\theta$ for $\lambda$ satisfying $\theta(1)-\theta(0)=-2\pi$. The conclusion is unaffected by the particular representatives, since the stated restrictions hold throughout each path segment. [F1, F2, F3]

2.1 **Normalize the basepoint and compute degree.** Set $\mu(t)=\lambda(t)/\lambda(0)$; multiplication by the fixed unit complex number $\lambda(0)^{-1}$ is a homeomorphism of the unit circle, so $\mu$ is a loop based at $1$. By [F5], $\beta=h^{-1}\circ\mu$ is a loop in $\mathbb R/\mathbb Z$ based at $[0]$. Define $\widetilde\beta(t)=(\theta(t)-\theta(0))/(2\pi)$. This is continuous, starts at $0$, and satisfies $h(q(\widetilde\beta(t)))=\mu(t)$ by the sine and cosine formula for $h$ and the definition of $\theta$. Injectivity of $h$ therefore gives $q\circ\widetilde\beta=\beta$. Thus $\widetilde\beta$ is precisely the lift in [F6], and $\deg(\beta)=\widetilde\beta(1)=-1$. [F5, F6, step 1.2]

3.1 **Distinguish the classes.** By [F4] and step 2.1, $\beta$ is not endpoint-fixed homotopic to the constant loop at $[0]$. If $\Gamma$ were endpoint-fixed homotopic to the constant loop at $a_C$, composing that homotopy with the continuous map $u\mapsto h^{-1}((z(u)/|z(u)|)/\lambda(0))$ would give such a homotopy of $\beta$, because this map sends $a_C$ to $[0]$. This is a contradiction. If $p(C',C)$ were $p(C,C')^{-1}$, their concatenation would represent the identity at $a_C$ by [F4], which would give exactly the prohibited homotopy of $\Gamma$. Hence the reverse arrow is not the inverse path class. [F2, F4, F5, step 1.2, step 2.1] ∎

## Source notes

The article reference records attribution of the assertions. The separating-hyperplane winding calculation above is a local argument; it does not use the article's footnote as a proof.
