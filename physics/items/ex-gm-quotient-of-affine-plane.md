---
id: ex-gm-quotient-of-affine-plane
kind: example
title: The quotient of the plane by the hyperbolic multiplicative-group action
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane, thm-invariant-ring-finite-generation-and-affine-categorical-quotient, thm-stable-locus-geometric-quotient, def-stable-points-of-an-affine-action, def-categorical-and-geometric-quotients-of-classical-varieties, def-axiom-of-choice, def-reductive-and-linearly-reductive-over-c]
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "I. Dolgachev, Lectures on Invariant Theory (lecture notes, archived copy)"
      url: "https://web.archive.org/web/2016id_/http://modular.math.washington.edu/people/dolgachev/invbook.ps"
---

## Example

Assume the Axiom of Choice inherited from the named suppliers. In the setting
of [[lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane]], let
$G=\mathbf G_m$ act on $X=\mathbb C^2$ by $t\cdot(x,y)=(tx,t^{-1}y)$. Then:
(i) the invariant ring is $\mathbb C[X]^G=\mathbb C[xy]$, so the categorical
quotient is $\pi:X\to X/\!/G=\mathbb C$, $\pi(x,y)=xy$
([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]);
(ii) the orbits are the hyperbolae $xy=c$ for $c\neq0$, the two punctured
coordinate axes $\{x=0,y\neq0\}$, $\{y=0,x\neq0\}$, and the origin; the two
punctured-axis orbits are not closed and their closures are the corresponding
axes through the origin; the origin is closed and is the unique closed orbit in
the fibre $\pi^{-1}(0)$; (iii) the stable locus is $X^s=\{xy\neq0\}$,
$\pi(X^s)=\mathbb C^\times$, and $\pi^s:X^s\to\mathbb C^\times$ is a geometric
quotient, a principal $\mathbf G_m$-bundle
([[thm-stable-locus-geometric-quotient]],
[[def-stable-points-of-an-affine-action]]); the origin is unstable although
its orbit is closed, its stabilizer being all of $\mathbf G_m$.

## Facts & Assumptions

**Given:** the group $G=\mathbf G_m=\mathbb C^\times$ acting on $X=\mathbb C^2$ by $t\cdot(x,y)=(tx,t^{-1}y)$, its invariant ring $\mathbb C[X]^G=\mathbb C[xy]$, and the quotient $\pi:X\to X/\!/G$, $\pi(x,y)=xy$.

[F1] *The invariant ring.* $\mathbb C[x,y]^{\mathbf G_m}=\mathbb C[xy]$, a polynomial ring in one variable ([[lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane]]).

[F2] *The affine quotient.* For a complex reductive group with an algebraic action on an affine algebraic set, the invariant ring is finitely generated, the quotient $\pi$ is a categorical quotient, and every fibre of $\pi$ contains exactly one closed orbit ([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]).

[F3] *The stable locus is a geometric quotient.* The stable locus $X^s$ is open and saturated, and $\pi^s:X^s\to\pi(X^s)$ is a geometric quotient with fibres exactly the orbits, each orbit in $X^s$ closed in $X$ ([[thm-stable-locus-geometric-quotient]]).

[F4] *Stable points.* A point is stable exactly when its orbit is closed in $X$ and its stabilizer is finite, equivalently of dimension zero ([[def-stable-points-of-an-affine-action]]).

[F5] *Geometric quotient.* A $G$-invariant morphism is a geometric quotient when it is surjective with fibres exactly the orbits, defines the quotient topology on its image, and pulls regular functions back isomorphically onto the invariant regular functions ([[def-categorical-and-geometric-quotients-of-classical-varieties]]).

[F6] *Reductivity of $\mathbf G_m$.* A complex affine group is reductive when it has no non-trivial closed normal subgroup for which every non-zero rational module has a non-zero fixed vector ([[def-reductive-and-linearly-reductive-over-c]]).

## Verification

**Proof technique:** direct.

1.1 First $\mathbf G_m$ is reductive: every non-trivial subgroup $U$ has an element $u\ne1$, and its rational scalar action on the one-dimensional space $\mathbb C$ has no non-zero fixed vector, since $(u-1)v=0$ forces $v=0$. Thus no such closed subgroup is unipotent in the fixed-vector sense of [F6]. Part (i): by [F1] the invariant ring is $\mathbb C[xy]$, a polynomial ring in the single variable $xy$, and by [F2] the quotient is $\pi:X\to X/\!/G=\mathbb C$ with $\pi(x,y)=xy$, a categorical quotient. [F1, F2, F6]

1.2 Part (ii): for $c\neq0$ the fibre $\pi^{-1}(c)=\{(x,y):xy=c\}$ is a single orbit, because for $(x,y),(x',y')$ with $xy=x'y'=c$ the element $t=x'/x$ is nonzero and $t\cdot(x,y)=(x',t^{-1}y)=(x',(x/x')y)=(x',c/x')=(x',y')$. The hyperbola $xy=c$ is closed in the plane, being the zero set of the polynomial $xy-c$. On $\{x=0,y\neq0\}$ the action is transitive by the second coordinate and the orbit is not closed: its closure contains the origin, and a polynomial vanishing on $\{x=0,y\neq0\}$ vanishes on the whole axis $\{x=0\}$ because a one-variable polynomial with infinitely many roots is zero; similarly for $\{y=0,x\neq0\}$. The origin is fixed by the action, so it is an orbit, it is closed, and it is the unique closed orbit in the zero fibre by [F2]; the zero fibre consists of exactly the two punctured axes and the origin. [F1, F2]

2.1 Stabilizers and stability: at a point with $x\neq0$ the condition $tx=x$ gives $t=1$, and at a point with $y\neq0$ the condition $t^{-1}y=y$ gives $t=1$; hence every point of $X\setminus\{0\}$ has trivial stabilizer, while the origin has stabilizer $\mathbf G_m=\mathbb C^\times$, which is infinite. By [F4] and step 1.2 the stable points are exactly those with $xy\neq0$: there the orbit is a closed hyperbola and the stabilizer is trivial, while the punctured-axis points and the origin are unstable. [F4, step 1.2]

3.1 Part (iii): by step 2.1 the stable locus is $X^s=\{xy\neq0\}$ and $\pi(X^s)=\mathbb C^\times$, and by [F3] the restriction $\pi^s:X^s\to\mathbb C^\times$ is a geometric quotient whose fibres are exactly the orbits and whose orbits are closed in $X$. [F3, step 2.1]

4.1 The bundle statement: the map $\Phi:\mathbf G_m\times\mathbf G_m\to X^s$, $\Phi(t,c)=(t,c/t)$, is an isomorphism with inverse $(x,y)\mapsto(x,xy)$, and it is $G$-equivariant for the action on the first factor because $\Phi(t't,c)=(t't,c/(t't))=t'\cdot(t,c/t)=t'\cdot\Phi(t,c)$. Under $\Phi$ the quotient $\pi^s$ corresponds to the projection $\mathbf G_m\times\mathbf G_m\to\mathbf G_m$, $(t,c)\mapsto c$, which is a trivial principal $\mathbf G_m$-bundle with structure group acting on the first factor and a geometric quotient; so $\pi^s$ is a principal $\mathbf G_m$-bundle in this explicit trivialized sense, and no identification with any other principal-bundle theory is used. [F5, step 3.1]

5.1 Assembly: (i) is step 1.1, (ii) is step 1.2 together with the closed-orbit count of [F2], (iii) is steps 2.1, 3.1 and 4.1; the origin is unstable although its orbit is closed because its stabilizer is all of $\mathbf G_m$. All Axiom of Choice content is inherited from the affine quotient and stable-locus suppliers. [F2, F3, step 1.1, step 1.2, step 3.1, step 4.1] ∎

## Remarks

- This is Brion's Example 1.27(2) (printed p. 10). The computation exhibits directly why the stable locus must exclude the punctured axes as well as the origin: the axes have non-closed orbits and the origin has an infinite stabilizer.
- **The phrase "principal bundle".** Only the explicit product decomposition $\Phi:\mathbf G_m\times\mathbf G_m\to X^s$ of step 4.1 is asserted, with the structure group acting on the first factor; this is a trivial bundle in the elementary sense. The topological definition of a principal bundle is a different register and is not invoked, and no algebraic principal-bundle theory is assumed anywhere in this pair.
