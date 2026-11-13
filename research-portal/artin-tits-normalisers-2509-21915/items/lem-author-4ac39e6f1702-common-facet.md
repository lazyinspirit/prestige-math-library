---
id: lem-author-4ac39e6f1702-common-facet
kind: lemma
title: Common relative facets have one enlarged standard subset
status: draft
domain: mathematics
origin: pipeline
deps:
  - prop-relative-stratification-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - math:thm-cg-dual-chamber-intersections-and-point-stabilizers
dependency_roles:
  prop-relative-stratification-artin-tits-normalisers: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
  def-chamber-labels-artin-tits-normalisers: mathematical-premise
  math:thm-cg-dual-chamber-intersections-and-point-stabilizers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement

In the finite-rank canonical Coxeter representation with simple-root basis $(\alpha_i)$ and dual space $\Theta$, fix $J$. Let $(x,I),(y,K)\in\mathrm{Cham}(J)$ be algebraic chamber labels such that $xC_I$ and $yC_K$ are adjacent relative chambers in $\Theta_J$, with common closed wall $F$. There are unique indices $a\notin I$ and $b\notin K$ describing this wall, and
$$F=\overline{xC_{I+a}}=\overline{yC_{K+b}},\qquad I+a=K+b=:L.$$
Here $I+a=I\cup\{a\}$, and closures are taken in $\Theta_J$. The two chambers lie on opposite sides of the supporting relative hyperplane of $F$.

## Facts & Assumptions

[F1] Coordinate faces and their disjoint translated stratification, including the descriptions of chamber walls and the equality $|I|=|J|$ for a chamber $xC_I\subseteq\Theta_J$, are supplied by [[prop-relative-stratification-artin-tits-normalisers]]. Wall and adjacency use [[def-chambers-walls-artin-tits-normalisers]]; in particular adjacent chambers are distinct connected components and are disjoint.

[F2] The algebraic chamber-label set $\mathrm{Cham}(J)$ consists of pairs $(x,I)$ satisfying $W_Jx=xW_I$ with $x$ of minimum length in $xW_I$, as defined in [[def-chamber-labels-artin-tits-normalisers]]. The Statement additionally specifies that the corresponding face translates are adjacent relative chambers.

[F3] Two points in the closed fundamental chamber in the same orbit are equal; the translating element fixes that point, by [[math:thm-cg-dual-chamber-intersections-and-point-stabilizers]], part (3), with its basis vectors $e_i$ identified with $\alpha_i$.

## Proof

**Given:** The finite-rank canonical Coxeter representation, root basis and dual action, with the notation and hypotheses in the Statement and the labels of [F2]. **Goal:** prove the stated assertions.

**Proof technique:** direct.

1.1 Put $E=\Theta_J$. The linear span of the positive coordinate orthant $C_I$ is $\Theta_I$, so $xC_I\subseteq E$ implies $x\Theta_I\subseteq E$. By [F1], $|I|=|J|$, and hence these subspaces have the same finite dimension and $x\Theta_I=E$. Likewise $y\Theta_K=E$. Thus both chamber closures are full-dimensional linear images of nonnegative orthants in $E$. [F1, given]

2.1 Pull the closed wall of $xC_I$ back by $x$. The distinct facets of the nonnegative orthant in $\Theta_I$ are obtained by setting exactly one of its coordinates indexed outside $I$ to zero. Consequently there is one and only one $a$ with $F=\overline{xC_{I+a}}$. Applying the same argument to $yC_K$ gives a unique $b$. [F1, step 1.1]

3.1 The relative interior of a facet closure is its face with every other coordinate strictly positive. Equality of the closed walls therefore gives $xC_{I+a}=yC_{K+b}$. Choose a point in this common face and write it $xf=yg$ with $f\in C_{I+a}$ and $g\in C_{K+b}$. Both $f$ and $g$ lie in the closed fundamental chamber, and $y^{-1}xf=g$. By [F3], $f=g$. Their zero-coordinate sets coincide, so $I+a=K+b$. [F1, F3, step 2.1]

4.1 Choose $p\in xC_{I+a}=yC_{K+b}$. On $E$ set $\lambda_i(q)=(x^{-1}q)(\alpha_i)$ for $i\notin I$ and $\mu_j(q)=(y^{-1}q)(\alpha_j)$ for $j\notin K$. By step 1.1 these are coordinate systems: $xC_I$ is given by all $\lambda_i>0$ and $yC_K$ by all $\mu_j>0$. At $p$, only $\lambda_a$ and $\mu_b$ vanish, while all the other listed coordinates are positive. Their common wall $F$ spans a hyperplane $H$ of $E$, and $\ker\lambda_a=H=\ker\mu_b$, since each kernel contains $F$ and has codimension one. [F1, step 1.1, step 2.1, step 3.1]

5.1 The finitely many other coordinate inequalities remain strict in some open ball $U$ about $p$ in $E$. Thus $xC_I\cap U=\{q\in U:\lambda_a(q)>0\}$ and $yC_K\cap U=\{q\in U:\mu_b(q)>0\}$. Since the two nonzero functionals have the same kernel, $\mu_b=c\lambda_a$ for a nonzero real scalar $c$: choose $v\in E$ with $\lambda_a(v)=1$ and write $q=\lambda_a(q)v+(q-\lambda_a(q)v)$, whose second term lies in their common kernel. If $c>0$, then $p+tv$ for sufficiently small $t>0$ belongs to both chambers, contrary to their disjointness in [F1]. Hence $c<0$. The whole first chamber has $\lambda_a>0$ and the whole second has $\lambda_a<0$, proving the opposite-side assertion. [F1, step 4.1] ∎
