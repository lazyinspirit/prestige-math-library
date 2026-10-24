---
id: thm-stable-locus-geometric-quotient
kind: theorem
title: The stable locus has a geometric quotient
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-stable-points-of-an-affine-action, thm-invariant-ring-finite-generation-and-affine-categorical-quotient, thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, lem-stabilizer-dimension-semicontinuity, lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant, def-categorical-and-geometric-quotients-of-classical-varieties, lem-orbit-dimension-and-closed-orbits-for-complex-group-actions, def-axiom-of-choice, thm-classical-principal-open-coordinate-ring-localization]
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "V. L. Popov and E. B. Vinberg, Invariant Theory, in Algebraic Geometry IV, Encyclopaedia of Mathematical Sciences 55, Springer 1994"
      url: "https://www.mathnet.ru/php/getFT.phtml?jrnid=intf&paperid=158&what=fullt&option_lang=rus"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
complex reductive affine algebraic group acting algebraically on an affine
algebraic set $X$, with categorical quotient $\pi:X\to X/\!/G$
([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]) and
stable locus $X^s$ ([[def-stable-points-of-an-affine-action]]). Then
$\pi(X^s)$ is open in $X/\!/G$, one has $X^s=\pi^{-1}(\pi(X^s))$ (so that
$X^s$ is an open $G$-stable subset of $X$), and the restriction
$\pi^s:X^s\to\pi(X^s)$ is a geometric quotient
([[def-categorical-and-geometric-quotients-of-classical-varieties]]). In
particular the fibres of $\pi^s$ are exactly the $G$-orbits, each orbit in
$X^s$ is closed in $X$, and
$\mathcal O_{\pi(X^s)}=(\pi^s_*\mathcal O_{X^s})^G$.

## Facts & Assumptions

**Given:** AC; a complex reductive affine algebraic group $G$ acting on an affine algebraic set $X$; the categorical quotient $\pi:X\to X/\!/G$; the stable locus $X^s$; and $Y=\{y\in X:\dim G_y\ge1\}$, the locus of positive-dimensional stabilizers.

[F1] *Stable points.* A point $x$ is stable exactly when its orbit $Gx$ is closed in $X$ and its stabilizer is finite, equivalently $\dim G_x=0$ ([[def-stable-points-of-an-affine-action]]).

[F2] *The affine quotient theorem.* The morphism $\pi$ is a surjective categorical quotient, every fibre of $\pi$ contains exactly one closed $G$-orbit, and for closed $G$-stable $Y,Y'\subseteq X$ one has $\pi(Y\cap Y')=\pi(Y)\cap\pi(Y')$, so the image of a closed $G$-stable subset is closed in $X/\!/G$ ([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]], clauses (iv) and (v)).

[F3] *Semicontinuity.* For every $n$ the locus $\{x:\dim G_x\ge n\}$ is closed in $X$; in particular $Y$ is closed, and it is $G$-stable because $G_{gx}=gG_xg^{-1}$ has the same dimension as $G_x$ ([[lem-stabilizer-dimension-semicontinuity]]).

[F4] *Separation by an invariant.* If $Z\subseteq X$ is closed and $G$-stable and $x$ satisfies $\pi(x)\notin\pi(Z)$, there is $f\in\mathbb C[X]^G$ with $f(x)\neq0$ and $f|_Z=0$ ([[lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant]]).

[F5] *Orbit dimensions and closures.* For every orbit one has $\dim G=\dim G_x+\dim Gx$; every irreducible component of the closure $\overline{Gy}$ has dimension $\dim Gy$ and the boundary consists of orbits of strictly smaller dimension; every orbit closure contains a closed orbit, and orbits of minimal dimension are closed ([[lem-orbit-dimension-and-closed-orbits-for-complex-group-actions]]).

[F6] *Geometric quotients.* A $G$-invariant morphism is a geometric quotient when it is surjective with fibres exactly the orbits, when a subset of the target is open exactly when its preimage is open, and when on open subsets the pullback of regular functions is an isomorphism onto the invariant regular functions ([[def-categorical-and-geometric-quotients-of-classical-varieties]]).

[F7] *Naturality of the Reynolds operator.* For a morphism $f:V\to W$ of rational $G$-modules one has $R_W\circ f=f^G\circ R_V$ ([[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]], clause (ii)); applied to the localisation $A\to A_g$ of the coordinate ring this gives $(A_g)^G=(A^G)_g$ for $g\in A^G$: an invariant fraction equals $R_A(a)/g^m$, and the localized inclusion $(A^G)_g\to A_g$ is injective: a numerator $a\in A^G$ killed by a power of $g$ in $A$ is killed by that same power in the subring $A^G$. Here $A_g$ is rational, since $a/g^m$ lies in the image of the finite-dimensional rational span of $a$ divided by the invariant denominator.

[F8] *Principal-open functions.* On an affine algebraic set $T$ with coordinate ring $B$, $\mathcal O_T(D_T(f))=B_f$ ([[thm-classical-principal-open-coordinate-ring-localization]]). Such opens form a basis, as a point outside a closed polynomial zero locus has a defining polynomial nonzero there.

## Proof

**Proof technique:** direct.

1.1 The subset $Y=\{y:\dim G_y\ge1\}$ is closed in $X$ and $G$-stable by [F3]. [F3]

2.1 Let $x\in X^s$. Then $\pi(x)\notin\pi(Y)$: if $\pi(y)=\pi(x)$ for some $y\in Y$, then the fibre $F=\pi^{-1}(\pi(x))$ is closed, $G$-stable and contains both the closed orbit $Gx$ and $Gy$; by the unique closed orbit property [F2] the orbit $Gx$ is the unique closed orbit in $F$, so the closed orbit contained in $\overline{Gy}$ by [F5] must be $Gx$, giving $Gx\subseteq\overline{Gy}$. Since $\dim Gy=\dim G-\dim G_y\le\dim G-1<\dim G=\dim Gx$, the point $x$ is not in $Gy$, so $Gx$ lies in the boundary of $\overline{Gy}$; but every orbit in that boundary has dimension strictly smaller than $\dim Gy$, by [F5], contradicting $\dim Gx=\dim G>\dim Gy$. Hence $\pi(x)\notin\pi(Y)$. [F2, F5, step 1.1]

3.1 By [F4] applied to the closed $G$-stable set $Y$ and the point $x\in X^s$ of step 2.1, there is $f\in\mathbb C[X]^G$ with $f(x)\neq0$ and $f|_Y=0$. Put $X_f=\{f\neq0\}$. Since $f$ is invariant, $X_f=\pi^{-1}(D(f))$, so it is open, saturated and $G$-stable. Every $y\in X_f$ satisfies $y\notin Y$, hence $\dim G_y=0$ and $\dim Gy=\dim G$. If $Gy$ were not closed, its boundary would contain an orbit of dimension strictly smaller than $\dim Gy$ by [F5]. But $\overline{Gy}\subseteq\pi^{-1}(\pi(y))\subseteq X_f$, since the quotient fibre is closed and contains $Gy$; every point of this closure lies outside $Y$, so each orbit in the boundary has dimension $\dim G$, a contradiction. Thus $X_f\subseteq X^s$. Applying the same construction to every stable point gives $X^s=\bigcup_fX_f$, where $f$ ranges over invariants vanishing on $Y$. [F2, F4, F5, step 2.1]

4.1 Consequences for openness and saturation: $X_f=\pi^{-1}(D(f))$, so $\pi(X_f)=D(f)$ by surjectivity of $\pi$, so it is open in $X/\!/G$ and $\pi(X^s)=\bigcup_fD(f)$ is open. If $\pi(x')=\pi(x)$ with $x\in X^s$, choose the invariant $f$ constructed at $x$ in step 3.1; then $\pi(x)\in D(f)$, so $x'\in\pi^{-1}(D(f))=X_f\subseteq X^s$. Thus $X^s=\pi^{-1}(\pi(X^s))$ is saturated, and it is open and $G$-stable in $X$. [F2, step 3.1]

4.2 Structure sheaf: let $f\in\mathbb C[X]^G$ with $X_f\subseteq X^s$. By [F8] the invariant regular functions on $\pi^{-1}(D(f))=X_f$ form $(A_f)^G$ with $A=\mathbb C[X]$, and the Reynolds localisation identity [F7] identifies this with $(A^G)_f=\mathcal O_{\pi(X^s)}(D(f))$, so the pullback along $\pi^s$ is an isomorphism onto the invariant functions on each principal piece; the identity is compatible with restriction and glues over the basis of the $D(f)$. This is condition (iii) of [F6], and it also gives $\mathcal O_{\pi(X^s)}=(\pi^s_*\mathcal O_{X^s})^G$. [F6, F7, F8, step 3.1]

5.1 The fibres of $\pi^s$ are exactly the orbits: if $\pi(x')=\pi(x)$ with $x,x'\in X^s$, then $Gx$ and $Gx'$ are both closed orbits in the same fibre, so they coincide by uniqueness of the closed orbit in that fibre [F2]. Together with surjectivity of $\pi^s$ onto $\pi(X^s)$ this gives condition (i) of the geometric quotient [F6]. [F1, F2, F6, step 4.1]

6.1 Quotient topology: let $W\subseteq X^s$ be open. Then $W$ is open in $X$ because $X^s$ is open, and $G\cdot W$ is open, $G$-stable and satisfies $\pi^{-1}(\pi(G\cdot W))\cap X^s=G\cdot W\cap X^s$ by step 5.1. The complement $X\setminus G\cdot W$ is closed and $G$-stable, so its image is closed in $X/\!/G$ by [F2]; intersecting with $\pi(X^s)$ gives $\pi(G\cdot W)\cap\pi(X^s)=\pi(X^s)\setminus\pi(X\setminus G\cdot W)$, which is open in $\pi(X^s)$. Since $\pi(W)=\pi(G\cdot W)$, condition (ii) of [F6] holds: a subset of $\pi(X^s)$ is open exactly when its preimage in $X^s$ is open. [F2, F6, step 5.1]

7.1 Conclusion: by steps 4.1 and 5.1 the map $\pi^s:X^s\to\pi(X^s)$ is surjective with fibres exactly the orbits, and by steps 6.1 and 4.2 it satisfies the quotient topology and invariant-function conditions, so it is a geometric quotient by [F6]; the orbits in $X^s$ are closed in $X$ by the definition of stability [F1], and the sheaf identity of step 4.2 completes the statement. All Axiom of Choice content is inherited from the quotient, semicontinuity, separation and orbit suppliers used above. [F1, F2, F6, F7, step 4.1, step 5.1, step 6.1, step 4.2] ∎

## Remarks

- This is Brion's proof of Proposition 1.26 (printed pp. 9-10): the stable locus is a union of saturated invariant principal opens obtained from separating functions, and on it the quotient fibres are exactly the orbits. The topological condition is checked after saturating the open set, so no claim is made that images of arbitrary invariant opens outside $X^s$ are open.
- The class of the principal bundle, that is the local triviality of $\pi^s$ as a $\mathbf G_m$-bundle in the example, is not asserted by this theorem; it is verified directly in `ex-gm-quotient-of-affine-plane`.
