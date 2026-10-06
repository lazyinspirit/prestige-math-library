---
id: ex-gm-on-projective-line-with-two-linearizations
kind: example
title: GIT quotients of the projective line for different linearizations
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 12
justified_by: []
aliases: []
deps: [def-g-linearization-of-an-invertible-sheaf, def-invariant-section-ring-and-projective-git-quotient, def-semistable-and-stable-points-for-a-linearization, thm-projective-git-quotient-from-invariant-section-ring, thm-good-and-geometric-quotient-on-stable-locus, def-projective-variety-classical, def-twisting-sheaf-proj, def-ample-invertible-sheaf, def-axiom-of-choice, thm-cohomology-projective-space-twisting-sheaves, lem-torus-rational-modules-and-gradings, thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, lem-standard-opens-proj-affine, def-proj-graded-ring-points]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Example 4.1 and Section 3.5 (linearisations of O(1) on P^n)"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Example 5.8; Example 5.18(2) (twisting by a character)"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Example 1.32(2), printed p. 11 (the standard linearization)"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Examples 8.1-8.4, printed pp. 121-124"
---

## Example

Assume AC inherited from the Proj, cohomology and quotient suppliers ([[def-axiom-of-choice]]); the explicit weight and orbit computations make no additional choice.

Let $G=\mathbf G_m=\mathbb C^\times$ act on $X=\mathbf P^1=\mathbf P(\mathbb C e_0\oplus\mathbb C e_1)$ by $t\cdot[e_0:e_1]=[t^{-1}e_0:te_1]$, so that the fixed points are $[1:0]$ and $[0:1]$, and let $L=\mathcal O_{\mathbf P^1}(1)$ with the standard linearization $L_0$ for which the monomial $e_0^ie_1^{n-i}$ is an eigenvector of weight $2i-n$ in $\Gamma(X,L^{\otimes n})$ ([[def-g-linearization-of-an-invertible-sheaf]]). Then:

(i) for $L_0$ the invariant sections are the multiples of $(e_0e_1)^{n/2}$ for even $n$, so $X^{ss}(L_0)=X^s(L_0)=\{[e_0:e_1]:e_0e_1\ne0\}\cong\mathbf G_m$; the action on this locus is transitive with finite stabilizer $\mu_2=\{t\in\mathbf G_m:t^2=1\}$ at every point, so every orbit is closed there, and $X/\!/_{L_0}G$ is a one-point scheme, so the quotient is a geometric quotient onto a point ([[thm-good-and-geometric-quotient-on-stable-locus]]);

(ii) for the twist $L_+=L_0\otimes\chi$ by the character $\chi(t)=t$ the invariant sections of $L_+^{\otimes n}$ are the multiples of $e_1^n$, so $X^{ss}(L_+)=\{e_1\ne0\}\cong\mathbb A^1$ and $X^s(L_+)=\varnothing$: the fixed point $[0:1]$ has stabilizer $G$ and lies in the closure of every other orbit, so the good quotient $X^{ss}(L_+)\to\operatorname{Proj}\mathbb C[e_1]$ collapses the affine line to a point and is not geometric;

(iii) for the twist $L_-=L_0\otimes\chi^{-1}$ the roles of the two charts are exchanged: $X^{ss}(L_-)=\{e_0\ne0\}\cong\mathbb A^1$, $X^s(L_-)=\varnothing$; for $k\in\mathbb Z$ with $|k|\ge2$ the twist $L_0\otimes\chi^k$ has no nonzero invariant section of positive degree, so $X^{ss}=\varnothing$ and the GIT quotient is the empty scheme;

(iv) all these linearizations have the same underlying ample invertible sheaf $\mathcal O(1)$ and the same action on $X$, so the example shows the dependence of $(X^{ss},X^s,\pi)$ on the linearization alone; the standard case with $n=1$ is the computation of Newstead's Example 4.1 (stated there for $n\ge2$; for $n=1$ the same argument gives $(\mathbf P^n)^{ss}=(\mathbf P^n)^s\cong\mathbb C^n\smallsetminus\{0\}$ and quotient $\mathbf P^{n-1}$, which for $n=1$ is a point) and of Hoskins' Example 5.8 with $n=1$.

## Facts & Assumptions

**Given:** AC inherited from the Proj, cohomology and quotient suppliers; the action $t\cdot[e_0:e_1]=[t^{-1}e_0:te_1]$ of $G=\mathbf G_m$ on $X=\mathbf P^1$, the sheaf $L=\mathcal O(1)$ with its standard linearization $L_0$, and the twists $L_0\otimes\chi^k$ by the characters $\chi^k$, $k\in\mathbb Z$.

[F1] *Sections and weights.* By [[thm-cohomology-projective-space-twisting-sheaves]], $\Gamma(X,L^{\otimes n})=\mathbb C[e_0,e_1]_n$, and for the standard linearization $L_0$ the monomial $e_0^ie_1^{n-i}$ is an eigenvector of weight $2i-n$; twisting by $\chi$ adds $n$ to the weight and twisting by $\chi^{-1}$ subtracts $n$, so for $L_0\otimes\chi^k$ the weight of $e_0^ie_1^{n-i}$ is $2i-n+kn$. This follows from the contragredient action on coordinate linear forms: their weights are $1,-1$, while the fibre twist multiplies the section action in tensor degree $n$ by $t^{kn}$. ([[def-g-linearization-of-an-invertible-sheaf]], [[def-twisting-sheaf-proj]])

[F2] *Semistability and quotients.* A point is semistable for a linearized ample sheaf exactly when some invariant section of a positive tensor power does not vanish there; the quotient is $\operatorname{Proj}$ of the invariant section ring, the charts are the nonvanishing loci of invariant sections, and the restriction of the quotient to the stable locus is geometric. ([[def-semistable-and-stable-points-for-a-linearization]], [[def-invariant-section-ring-and-projective-git-quotient]], [[thm-projective-git-quotient-from-invariant-section-ring]], [[thm-good-and-geometric-quotient-on-stable-locus]])

[F3] *Projective line computations.* $G=\mathbf G_m$ is reductive: its rational modules decompose into character spaces by [[lem-torus-rational-modules-and-gradings]], so it is linearly reductive and hence reductive by [[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]]. $L=\mathcal O(1)$ is ample: its coordinate sections have nonvanishing loci equal to the two standard affine charts, which cover $X$; the invariant ring of a linearized $L_0\otimes\chi^k$ is the span of the monomials of weight zero, and $\operatorname{Proj}\mathbb C[u]$ is a one-point scheme whether $\deg u=1$ or $2$: its only chart $D_+(u)$ has ring $\mathbb C[u,u^{-1}]_0=\mathbb C$ ([[lem-standard-opens-proj-affine]]). Also $\operatorname{Proj}\mathbb C=\varnothing$ by [[def-proj-graded-ring-points]]. The stabilizer of $[0:1]$ under the given action is all of $G$, so the point is never stable. ([[def-ample-invertible-sheaf]], [[def-projective-variety-classical]])

## Verification

1.1 *The standard linearization (i).* By [F1] the weight of $e_0^ie_1^{n-i}$ in $L_0^{\otimes n}$ is $2i-n$, which vanishes exactly when $i=n/2$; hence the invariant sections of positive degree are the multiples of $(e_0e_1)^{n/2}$ for even $n$, and the invariant section ring is $\mathbb C[e_0e_1]$. Therefore $X^{ss}(L_0)=\{e_0e_1\ne0\}$, the complement of the two fixed points, and $X/\!/_{L_0}G=\operatorname{Proj}\mathbb C[e_0e_1]$, a one-point scheme. On the locus $e_0e_1\ne0$ write $z=e_0/e_1$; then $z\mapsto t^{-2}z$, so the action is transitive onto $\mathbb C^\times$ with stabilizer $\mu_2$ at every point, and the unique orbit is the whole locus and is therefore closed there. Hence $X^s(L_0)=X^{ss}(L_0)\cong\mathbf G_m$, and by [F2] the good quotient restricts to a geometric quotient onto the point. [F1, F2, F3, algebra]

1.2 *The twist by $\chi$ (ii).* By [F1] the weight of $e_0^ie_1^{n-i}$ in $L_+^{\otimes n}$ is $2i$, so the invariant sections of positive degree are the multiples of $e_1^n$ and the invariant ring is $\mathbb C[e_1]$; hence $X^{ss}(L_+)=\{e_1\ne0\}\cong\mathbb A^1$ and $X/\!/_{L_+}G=\operatorname{Proj}\mathbb C[e_1]$ is a point, so the quotient collapses the affine line to a point. The point $[0:1]$ (that is, $z=0$ in the coordinate $z=e_0/e_1$) is fixed with stabilizer $G$, and every other orbit $z\ne0$ has closure containing $0$, so no point of $X^{ss}(L_+)$ is stable: $X^s(L_+)=\varnothing$ and the quotient is not geometric. [F1, F2, F3, algebra]

2.1 *The opposite twist and the higher twists (iii).* For $L_-=L_0\otimes\chi^{-1}$ the weight is $2i-2n$, vanishing exactly for $i=n$; the invariant sections are the multiples of $e_0^n$, the invariant ring is $\mathbb C[e_0]$, and $X^{ss}(L_-)=\{e_0\ne0\}\cong\mathbb A^1$ with $X^s(L_-)=\varnothing$ by the same fixed-point argument as in step 1.2. For $k\ge2$ the weight is $2i-n+kn$, which vanishes only for $i=n(1-k)/2<0$, impossible for a monomial; for $k\le-2$ it vanishes only for $i=n(1-k)/2>n$, also impossible. Hence for $|k|\ge2$ there is no nonzero invariant section of positive degree, $X^{ss}(L_0\otimes\chi^k)=\varnothing$, and the quotient is $\operatorname{Proj}\mathbb C=\varnothing$. [F1, F2, F3, algebra]

3.1 *Conclusion (iv).* All the linearizations considered have the same underlying ample sheaf $\mathcal O(1)$ and the same action on $X$: the standard linearization gives the nonempty stable locus $\mathbf G_m$ with quotient a point, the two single twists give the two affine lines with non-geometric one-point quotients and empty stable loci, and the remaining twists give the empty quotient. This exhibits the dependence of the GIT data on the linearization alone and matches the computations in Newstead's Lecture 4 example (stated there for $n\ge2$, with the same argument at $n=1$) and in the corresponding example of Hoskins' notes. [step 1.1, step 1.2, step 2.1, F2] ∎ 
