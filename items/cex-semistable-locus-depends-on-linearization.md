---
id: cex-semistable-locus-depends-on-linearization
kind: counterexample
title: The semistable locus depends on the linearization, not only on the sheaf
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
justified_by: []
aliases: []
deps: [def-g-linearization-of-an-invertible-sheaf, def-invariant-section-ring-and-projective-git-quotient, def-semistable-and-stable-points-for-a-linearization, def-proj-graded-ring-points, def-projective-variety-classical, def-ample-invertible-sheaf, def-dimension-classical-variety, def-axiom-of-choice, lem-torus-rational-modules-and-gradings, thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, lem-standard-opens-proj-affine]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 3, Sections 3.4-3.5 (dependence of (semi)stability on the linearisation); Example 4.1"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Example 5.18(1)-(2) (linearizations on a point and twisting by a character) and Example 5.8"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Chapters 7.1 and 8.1, printed pp. 103-105 and 115-121"
---

## Statement refuted

The assertion "for a fixed projective action of a reductive group $G$ on a projective variety $X$ and a fixed ample invertible sheaf $L$, the semistable locus $X^{ss}(L)$ depends only on $X$, $G$ and the isomorphism class of $L$" is false.

## Facts & Assumptions

**Given:** AC inherited from the Proj construction ([[def-axiom-of-choice]]); the one-point projective variety $X=\mathbf P^0=\operatorname{Proj}\mathbb C[t]$, the group $G=\mathbf G_m=\mathbb C^\times$ acting trivially on $X$, the invertible sheaf $L=\mathcal O_X$ (which is trivial and ample because $X$ is affine), the trivial linearization $L_0$ of $L$, and the linearization $L_\chi$ obtained from $L_0$ by the twist by the identity character $\chi:G\to\mathbb C^\times$, $\chi(t)=t$ ([[def-g-linearization-of-an-invertible-sheaf]]).

[F1] *The variety and its sections.* $X=\operatorname{Proj}\mathbb C[t]$ is a single point $p$; $\mathcal O_X$ is the trivial invertible sheaf, so $\Gamma(X,L^{\otimes n})=\mathbb C$ for every $n\ge0$ and the global section $1$ is nowhere vanishing ([[def-proj-graded-ring-points]], [[def-projective-variety-classical]]). The trivial sheaf on a one-point scheme is ample: the nonvanishing locus of the constant section $1$ is the affine scheme $X$ itself ([[def-ample-invertible-sheaf]]).

[F2] *Linearizations on the point.* The total space of $\mathcal O_X$ is the one-dimensional vector space $\mathbb C$, and a linearization of $\mathcal O_X$ for the trivial action on $X$ is precisely an algebraic group homomorphism $\chi:G\to\mathbb C^\times$ together with the action $t\cdot z=\chi(t)z$ on the fibre; the trivial linearization is $\chi=1$, and the twist of a linearization by a character multiplies the fibre action by that character ([[def-g-linearization-of-an-invertible-sheaf]]).

[F3] *Semistable and stable points.* A point $x$ is semistable for a linearized ample sheaf if some invariant section of a positive tensor power does not vanish at $x$, and it is stable if in addition its orbit is closed in the semistable locus and its stabilizer is finite; the quotient is $\operatorname{Proj}$ of the invariant section ring ([[def-semistable-and-stable-points-for-a-linearization]], [[def-invariant-section-ring-and-projective-git-quotient]]).

[F4] *Proj of the invariant rings.* $\operatorname{Proj}\mathbb C[t]=X$ is the one-point scheme: $D_+(t)$ is its whole space and has chart ring $\mathbb C[t,t^{-1}]_0=\mathbb C$ ([[lem-standard-opens-proj-affine]]), while $\operatorname{Proj}\mathbb C=\varnothing$ because the ring $\mathbb C$ concentrated in degree zero has $S_+=0$ contained in every homogeneous prime ([[def-proj-graded-ring-points]]). The stabilizer of $p$ is $G$ itself, which is not finite and has dimension $1>0$ ([[def-dimension-classical-variety]]).

## Counterexample

1.1 *The trivial linearization.* Let $L_0$ be the trivial linearization of $L=\mathcal O_X$, so that $G$ acts trivially on the total space $\mathbb C$. Then every global section of every $L_0^{\otimes n}$ is invariant and equal to a constant, and the section $1\in\Gamma(X,\mathcal O_X)$ is nonzero at $p$; hence $p$ is semistable and $X^{ss}(L_0)=X$. The stabilizer $G_p=G$ is not finite, so $p$ is not stable and $X^s(L_0)=\varnothing$. The invariant section ring is $R(X,L_0)^G=\mathbb C[t]$, so $X/\!/_{L_0}G=\operatorname{Proj}\mathbb C[t]=X$. [F1, F2, F3, F4, given]

1.2 *The twisted linearization.* Let $L_\chi$ be the twist of $L_0$ by the character $\chi(t)=t$. By [F2] the induced action on the one-dimensional space $\Gamma(X,L^{\otimes n})=\mathbb C$ is multiplication by $\chi^n$, so a nonzero invariant section of $L_\chi^{\otimes n}$ would require $\chi^n=1$, which fails for every $n\ge1$ since $\chi(2)^n=2^n\ne1$. Hence there is no nonzero invariant section of positive degree, $X^{ss}(L_\chi)=\varnothing$, and the invariant section ring is $\mathbb C$ in degree zero, so $X/\!/_{L_\chi}G=\operatorname{Proj}\mathbb C=\varnothing$. [F1, F2, F3, F4, given]

2.1 *Conclusion.* The two linearizations $L_0$ and $L_\chi$ have the same underlying ample invertible sheaf $\mathcal O_X$ up to isomorphism, the same group $G$ and the same projective action on the same variety $X$, yet they give the nonempty semistable locus $X$ and the empty semistable locus $\varnothing$, and the one-point quotient $X$ and the empty quotient $\varnothing$; in particular at least one of the two linearizations is not the other (their invariant rings and quotient loci differ). So semistability depends on the linearization and not only on the isomorphism class of the sheaf, and the assertion displayed in the Statement refuted is false. [step 1.1, step 1.2, F3] ∎

## Remarks

- **Reductivity and ampleness are satisfied.** $G=\mathbf G_m$ is linearly reductive: [[lem-torus-rational-modules-and-gradings]] decomposes every finite-dimensional rational module into character spaces, each a sum of one-dimensional modules. It is therefore reductive by [[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]]. Also $\mathcal O_X$ is ample on the one-point variety, so the counterexample meets every hypothesis of the refuted assertion; the failure is exactly the dependence on the linearization.
- **Same twist computation as the example.** This is the degenerate one-point case of the twist computation carried out on $\mathbf P^1$ in [[ex-gm-on-projective-line-with-two-linearizations]]; it is the test prescribed by the design's boundary checks for this pair.
