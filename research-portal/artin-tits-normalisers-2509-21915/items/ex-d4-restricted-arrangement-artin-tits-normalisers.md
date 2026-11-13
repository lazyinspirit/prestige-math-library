---
id: ex-d4-restricted-arrangement-artin-tits-normalisers
kind: example
title: Seven relative D4 hyperplanes and thirty-two chambers
status: draft
domain: mathematics
origin: pipeline
deps:
  - prop-root-inversion-interface-artin-tits-prerequisites
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-positive-roots-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - prop-relative-linear-interface-artin-tits-prerequisites
  - def-real-coxeter-interface-artin-tits-prerequisites
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
  - math:ex-convex-subsets-of-rn-are-path-connected
dependency_roles:
  prop-root-inversion-interface-artin-tits-prerequisites: mathematical-premise
  def-d4-example-data-artin-tits-normalisers: mathematical-premise
  ex-d4-positive-roots-artin-tits-normalisers: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  prop-relative-linear-interface-artin-tits-prerequisites: mathematical-premise
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  math:def-connected-space: mathematical-premise
  math:def-connected-component-and-quasicomponent: mathematical-premise
  math:ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 27–28, §7.1 and Figure 1
      statement: In the D4 example with J={2}, the relative cone is the whole
        coordinate hyperplane, the positive relative roots are all positive
        roots except the central simple root, and their restrictions give seven
        hyperplanes and 32 chambers.
      hypotheses: The D4 diagram has central vertex 2 and J={2}, with the article's
        geometric representation and relative-arrangement conventions.
      reading_limits: The frozen article text and rendered pages were inspected for
        attribution. The verification below is local and does not use the
        article's assertion as a premise.
dependency_level: 9
formulation_deps:
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-positive-roots-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - prop-relative-linear-interface-artin-tits-prerequisites
  - def-real-coxeter-interface-artin-tits-prerequisites
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-connected-component-and-quasicomponent
argument_deps:
  - prop-root-inversion-interface-artin-tits-prerequisites
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-positive-roots-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - prop-relative-linear-interface-artin-tits-prerequisites
  - def-real-coxeter-interface-artin-tits-prerequisites
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
  - math:ex-convex-subsets-of-rn-are-path-connected
---

## Example

Use the $D_4$ data with central vertex $2$ and $J=\{2\}$. Then $\mathrm{Cone}(J)^\circ=\mathrm{Cone}(J)=\Theta_J=H_{\alpha_2}$ and the positive $J$-roots are $\Phi^+\setminus\{\alpha_2\}$. Different roots can restrict to the same hyperplane; for example, $H_{\alpha_1}\cap H_{\alpha_2}=H_{\alpha_1+\alpha_2}\cap H_{\alpha_2}$. The seven distinct relative hyperplanes are represented by $\alpha_1,\alpha_3,\alpha_4,\alpha_1+\alpha_2+\alpha_3,\alpha_1+\alpha_2+\alpha_4,\alpha_2+\alpha_3+\alpha_4,\alpha_1+\alpha_2+\alpha_3+\alpha_4$. Their complement in $\Theta_J$ has $32$ chambers, meaning connected components.

For $f\in\Theta_J$, the values $x=f(\alpha_1)$, $y=f(\alpha_3)$ and $z=f(\alpha_4)$ are independent coordinates, and the seven relative hyperplanes are the kernels of $x,y,z,x+y,x+z,y+z,x+y+z$. The chambers are precisely the nonempty strict sign regions of these seven forms: for signs $\epsilon_\ell\in\{1,-1\}$, the corresponding region consists of the points satisfying $\epsilon_\ell\ell>0$ for every one of the seven forms $\ell$.

## Example references

[[def-d4-example-data-artin-tits-normalisers]]

[[ex-d4-positive-roots-artin-tits-normalisers]]

[[def-relative-cone-artin-tits-normalisers]]

[[prop-relative-linear-interface-artin-tits-prerequisites]]

[[def-real-coxeter-interface-artin-tits-prerequisites]]

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[math:def-connected-space]]

[[math:def-connected-component-and-quasicomponent]]

[[math:ex-convex-subsets-of-rn-are-path-connected]]

## Facts & Assumptions

[F1] In the simple-root basis, $s_i$ changes only coordinate $i$, replacing it by its negative plus the sum of its neighbours' coordinates. The positive roots are the twelve vectors listed in [[ex-d4-positive-roots-artin-tits-normalisers]]; the full root set is their union with their negatives by [[prop-root-inversion-interface-artin-tits-prerequisites]], applied to the finite set $S=\{s_1,s_2,s_3,s_4\}$ and this canonical representation. The representation and dual action are as in [[def-d4-example-data-artin-tits-normalisers]] and [[def-real-coxeter-interface-artin-tits-prerequisites]].

[F2] The Tits cone is the union of the translates of the nonnegative fundamental chamber. The subspace $\Theta_J$ consists of functionals vanishing on $\alpha_2$; a relative hyperplane is the kernel in that subspace of a nonzero restricted root evaluation. Relative interior is taken in $\Theta_J$. See [[def-coxeter-arrangement-artin-tits-normalisers]], [[def-relative-cone-artin-tits-normalisers]], and [[prop-relative-linear-interface-artin-tits-prerequisites]].

[F3] A space is connected when it has no partition into two nonempty disjoint open subsets; a connected subset carries the subspace topology ([[math:def-connected-space]]). The connected component of a point is the union of all connected subsets containing that point, and is itself the largest such connected subset ([[math:def-connected-component-and-quasicomponent]]).

[F4] Every convex subset of $\mathbb R^n$, for $n\geq1$, is connected in the product topology, which is the metric topology of $d_\infty(p,q)=\max_i|p_i-q_i|$ ([[math:ex-convex-subsets-of-rn-are-path-connected]], claim 1 and its topology convention).

## Verification



**Given:** The $D_4$ data and $J=\{2\}$ in the Example.

**Goal:** Verify the cone, relative roots, seven restricted hyperplanes and chamber count.

1.1 Let $\rho$ be the sum of the twelve positive roots. Adding their coordinates gives $\rho=6\alpha_1+10\alpha_2+6\alpha_3+6\alpha_4$. The reflection formula gives $s_i\rho=\rho-2\alpha_i$ for each $i$. The orbit $W\rho$ is finite: it consists of sums of twelve elements of the finite root set. For any $f\in\Theta$, choose $w$ maximizing $f(w\rho)$. Since $ws_i\rho=w\rho-2w\alpha_i$, maximality gives $f(w\alpha_i)\geq0$ for every $i$. Thus $w^{-1}f$ belongs to the nonnegative fundamental chamber, so $f$ belongs to the Tits cone. Consequently the Tits cone is $\Theta$; its intersection with $\Theta_J$ and the interior of that intersection in $\Theta_J$ are both $\Theta_J=H_{\alpha_2}$. [F1, F2, given]

1.2 Put $x=f(\alpha_1)$, $y=f(\alpha_3)$ and $z=f(\alpha_4)$ for $f\in\Theta_J$. These are independent coordinates on $\Theta_J$. The twelve positive roots restrict, in the order listed by the positive-root supplier, to $x,0,y,z,x,y,z,x+y,x+z,y+z,x+y+z,x+y+z$. Hence only $\alpha_2$ has zero restriction, and the positive relative roots are exactly the other eleven. The seven distinct nonzero restricted forms are $x,y,z,x+y,x+z,y+z,x+y+z$; no two are nonzero scalar multiples. Their kernels are therefore seven distinct relative hyperplanes, represented by the seven roots in the Example. In particular both $\alpha_1$ and $\alpha_1+\alpha_2$ restrict to $x$. [F1, F2, given]

2.1 The coordinates in step 1.2 identify $\Theta_J$ with $\mathbb R^3$ with its Euclidean metric $d_2$. The inequalities $d_\infty\leq d_2\leq\sqrt3d_\infty$ follow by comparing the largest squared coordinate difference with the sum of the three squared differences; hence the two metrics induce the same topology, the product topology in [F4]. For each of the seven forms $\ell$ in step 1.2, the triangle inequality gives $|\ell(q)-\ell(p)|\leq3d_2(p,q)$. If $\ell(p)\ne0$, the ball of radius $|\ell(p)|/6$ about $p$ therefore has the same sign of $\ell$ as $p$. Thus $\{\ell>0\}$ and $\{\ell<0\}$ are open. If a subset $A$ of the complement met both half-spaces, their traces on $A$ would be disjoint nonempty relatively open sets covering $A$, a separation. Every nonempty connected subset of the complement consequently has constant signs for all seven forms. [F2, F3, F4, step 1.2, algebra]

3.1 Each nonempty sign region is convex: a convex combination of two points satisfying the same seven strict linear inequalities satisfies those inequalities. It is therefore connected by [F4] and the topology identification in step 2.1. For a point $p$ in that region, step 2.1 places every connected subset of the complement containing $p$ inside the same region; the region itself is such a connected subset. The union defining the connected component of $p$ in [F3] is thus exactly that region. Hence the nonempty sign regions are exactly the chambers. [F3, F4, step 2.1, algebra]

4.1 In the two coordinate orthants where $x,y,z$ have the same sign, each orthant is one chamber. In each of the other six orthants, after an overall sign change and permutation, write $(x,y,z)=(a,b,-c)$ with $a,b,c>0$. The only additional equations are $c=a$, $c=b$ and $c=a+b$. They give five connected sign regions: $c<\min(a,b)$; $a<c<b$; $b<c<a$; $\max(a,b)<c<a+b$; and $c>a+b$. Each is nonempty and convex, as its displayed inequalities are linear. Therefore the total is $2+6\cdot5=32$. [step 1.2, step 3.1, given] ∎

## Source notes

The article reference attributes the example. The verification uses the stated suppliers and the displayed local calculation, not the article's conclusion as a premise. The coordinate and sign-region assertions in the Example are locally proved in Verification steps 1.2, 2.1 and 3.1; they are not imported from the article.
