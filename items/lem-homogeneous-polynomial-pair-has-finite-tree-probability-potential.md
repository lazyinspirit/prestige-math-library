---
dependency_level: 8
id: lem-homogeneous-polynomial-pair-has-finite-tree-probability-potential
kind: lemma
title: "A homogeneous polynomial pair defines a finite-tree probability potential"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-berkovich-rooted-tree-finite-retractions-and-laplacian
  - lem-binary-sylvester-resultant-linear-factor-product
  - lem-berkovich-dynamical-green-kernel-continuous-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §§3.2–3.3 and §7.5, local finite-tree reconstruction"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be complete, algebraically closed and nontrivially nonarchimedean, let $X$ be its Berkovich projective line with Gauss root $o$, and let $J=-\log\delta$. Let $A,B$ be homogeneous binary forms of degree $D\ge1$ with no common projective zero. On a unit chart put
$$Q(x)=D^{-1}\log\max(x(A(T,1)),x(B(T,1))),$$
and use $(1,U)$ on the other chart. This defines a continuous real function on $X$. It factors through a finite rooted subtree $\Gamma$, on which it is piecewise affine for logarithmic path length. The discrete measure
$$\mu_{A,B}=\delta_o-\Delta_\Gamma Q$$
is a positive probability supported on finitely many nonclassical points, and
$$\int_X J(x,y)\,d\mu_{A,B}(y)=Q(o)-Q(x)\qquad(x\in X).$$

## Statement references

[[def-axiom-of-choice]]

[[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]]

## Facts & Assumptions

**Given:** The field, tree, root and homogeneous forms of the statement.

[F1] Root paths are logarithmic-radius intervals, $J$ is common root-path length, finite rooted trees admit continuous retractions, and their Laplacian satisfies $\Delta J(\cdot,y)=\delta_y-\delta_o$ and has only constants in its kernel. ([[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]])

[F2] The forms split into degree-$D$ projective linear factors; their nonzero resultant prevents a common zero. ([[lem-binary-sylvester-resultant-linear-factor-product]])

[F3] Unit-chart polynomial maxima give continuous real logarithms when the forms do not vanish together, and their homogeneous chart transitions agree on the circle. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]])

[A1] Choice is inherited from the compactification; the root lists and the additional choices below are finite. ([[def-axiom-of-choice]])

## Proof

1.1 For a single homogeneous section $A$, write $\ell_A=\log|A(z)|-D\log\|z\|$ on the unit representatives. This is finite away from its classical zero set. Writing each linear factor as its coefficient norm times its spherical distance to its projective zero gives $\ell_A=C_A-\sum_i J(\cdot,a_i)$ for a real constant $C_A$. Thus factorization in [F2] shows that along a root path, its slope away from the Gauss root is the negative of the number of zeros of $A$ farther along that direction, counted with multiplicity. Indeed each root factor contributes the logarithm of its distance to the running disc, which has slope−1 exactly after the disc has entered that root's branch and slope0 before. The same statement holds in the infinity chart, so it counts all $D$ projective zeros. Off the finite tree spanned by the root and all zeros of $A,B$, both section functions are constant on each attached branch. [F1, F2, algebra]

1.2 On every edge of that spanning tree, $\ell_A,\ell_B$ are affine, so their maximum has at most one additional slope break. Near a zero of $A$, the section $B$ is nonzero; sufficiently far along its terminal branch, $\ell_B$ is constant and strictly larger than $\ell_A$. Thus their maximum becomes constant before reaching that classical endpoint. The analogous claim holds near each zero of $B$, and there is no shared zero by [F2]. Truncate all the terminal branches after those constant regions begin. The remaining $\Gamma$ is a finite rooted tree with nonclassical endpoints and finitely many slope breaks, and $Q=D^{-1}\max(\ell_A,\ell_B)$ is continuous, real, piecewise affine there and constant on the fibers of its retraction. [F1, F2, F3, step 1.1, algebra]

2.1 At a non-Gauss vertex $p$, the sum of the outgoing slopes of $\ell_A$ is zero: the slope toward the root counts all zeros below $p$ positively, while the slopes into the outgoing branches count precisely those same zeros negatively. The same is true for $\ell_B$. If their values at $p$ differ, the larger governs $Q$ locally and its slope sum is zero. If they tie, in each outgoing direction the derivative of their maximum is the maximum of their two derivatives. Its sum is at least the sum for either section, hence at least zero. Therefore $\Delta_\Gamma Q(p)\le0$ for $p\ne o$. At $o$ the sum of outgoing slopes of either section is $-D$. If their root values differ, the slope sum for $Q$ is−1. If they tie, each outgoing derivative is at least the corresponding derivative of $\ell_A/D$, so their total is at least−1. Thus $\Delta_\Gamma Q(o)\le1$ in all cases. It follows that $\mu_{A,B}$ is nonnegative at every vertex. [F1, step 1.1, step 1.2, algebra]

2.2 The total mass of $\Delta_\Gamma Q$ is zero by [F1], so $\mu_{A,B}$ has mass1. Its support is finite and nonclassical by construction of $\Gamma$. The function $-\int J(\cdot,y)\,d\mu_{A,B}(y)$ has Laplacian $\delta_o-\mu_{A,B}=\Delta_\Gamma Q$ by [F1]. Their difference is constant, and evaluating at $o$ gives that constant as $Q(o)$, since $J(o,y)=0$. This proves the potential identity on $\Gamma$; both sides factor through its retraction by [F1] and step1.2, so it holds on all of $X$. [F1, step 1.2, step 2.1, algebra] ∎
