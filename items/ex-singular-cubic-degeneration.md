---
id: ex-singular-cubic-degeneration
kind: example
title: "A singular cubic outside the lattice family"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - lem-nonsingular-complex-algebraic-curve-holomorphic-charts
  - thm-holomorphic-implicit-function-theorem
  - def-projective-space-points
  - cor-complex-differentiability-implies-continuity
  - lem-complex-conjugation-and-modulus-laws
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, the cubic relation and the discussion of the discriminant g2^3 - 27g3^2, printed pp. 45-47."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, the smoothness discussion at the end of the Weierstrass-cubic passage, printed p. 83."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(iii), equations (23.2.8)-(23.2.12): the invariants g2, g3 and the discriminant of the associated cubic."
verification:
  precheck: pass
---

## Example

For the coefficient pair $(g_2,g_3)=(3,1)$ the number
$\Delta:=g_2^3-27g_3^2=3^3-27\cdot1^2=0$, and the projective cubic
$$Y^2Z=4X^3-3XZ^2-Z^3$$
has the affine singular point $(x,y)=(-1/2,0)$: the affine equation
$y^2=4x^3-3x-1$ factors as $y^2=(x-1)(2x+1)^2$, and near that point the curve
is the union of the two smooth branches $y=\pm(x+\tfrac12)u(x+\tfrac12)$ meeting
transversally. Consequently no full complex lattice has these invariants, and
this cubic is a degeneration *outside* the lattice family; it cannot be used as
a supplier for any lattice statement.

## Facts & Assumptions

**Given:** The coefficient pair $(g_2,g_3)=(3,1)$, its associated projective cubic $C:=\{[X:Y:Z]\in\mathbb{CP}^2:Y^2Z=4X^3-3XZ^2-Z^3\}$ and the affine chart $\{Z\ne0\}$ of $\mathbb{CP}^2$ with coordinates $x=X/Z$, $y=Y/Z$, containing the affine curve $F(x,y):=y^2-(4x^3-3x-1)=0$ and the point $p:=(-1/2,0)$.

[F1] For a full complex lattice $\Lambda$ with Weierstrass invariants $g_2=60G_4$, $g_3=140G_6$ and discriminant $\Delta(\Lambda):=g_2^3-27g_3^2$ one has $\Delta(\Lambda)\ne0$, and the projective cubic $C_\Lambda=\{[X:Y:Z]\in\mathbb{CP}^2:Y^2Z=4X^3-g_2XZ^2-g_3Z^3\}$ is nonsingular in the Jacobian-rank sense at every point, including its unique point at infinity $O=[0:1:0]$ ([[thm-weierstrass-lattice-discriminant-is-nonzero]]).

[F2] (Jacobian-rank nonsingularity.) If a complex algebraic curve near $q$ in $\mathbb C^N$ is the common zero set of exactly $N-1$ holomorphic functions whose complex Jacobian matrix at $q$ has rank $N-1$, then after permuting the ambient coordinates so that the $j$-th comes first the curve agrees near $q$ with the graph $\{(z,\varphi(z)):z\in A\}$ of a holomorphic $\varphi$ on a plane domain $A$, the projection to the first coordinate being a homeomorphism onto $A$ ([[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]). In particular, the graph representation holds in one of the two coordinate directions when $N=2$.

[F3] (Implicit function theorem.) If $G$ is holomorphic near $(a,b)\in\mathbb C^2$, $G(a,b)=0$ and $\partial G/\partial w(a,b)\ne0$, then on a product of discs around $(a,b)$ the zero set of $G$ is the graph $w=\psi(z)$ of a unique holomorphic function $\psi$ with $\psi(a)=b$ ([[thm-holomorphic-implicit-function-theorem]]).

[F4] A function complex differentiable at a point is continuous there; and for all complex numbers $|z+w|\le|z|+|w|$ and $|z|\ge0$ with $|z|=0$ only for $z=0$ ([[cor-complex-differentiability-implies-continuity]], [[lem-complex-conjugation-and-modulus-laws]]). Hence if $u$ is holomorphic near $0$ with $u(0)\ne0$, then $|u(s)-u(0)|\le|u(0)|/2$ on a neighbourhood of $0$, and there $|u(s)|\ge|u(0)|/2>0$.

[F5] $\mathbb{CP}^2=(\mathbb C^3\setminus\{0\})/\sim$ with $a\sim b$ exactly when $b=\lambda a$ for some $\lambda\in\mathbb C^\times$, classes written $[X:Y:Z]$, and the sets where one homogeneous coordinate is nonzero are the standard affine charts with the remaining ratios as coordinates: on $\{Z\ne0\}$ one uses $(x,y)=(X/Z,Y/Z)$ ([[def-projective-space-points]]).

## Verification

1.1 (The discriminant vanishes.) For the coefficient pair $(g_2,g_3)=(3,1)$ the number displayed in the statement is $\Delta=g_2^3-27g_3^2=27-27=0$, since $3^3=27$ and $27\cdot1^2=27$. [given, algebra]

1.2 (The point lies on the affine curve.) With the chart coordinates of [F5], the cubic of the statement has affine equation $y^2=4x^3-3x-1$ at $Z=1$; writing $F(x,y):=y^2-(4x^3-3x-1)$, at $p=(-1/2,0)$ one has $x^2=1/4$ and $4x^3-3x-1=4(-1/8)-3(-1/2)-1=-1/2+3/2-1=0$, so $F(p)=0-0=0$ and $p$ lies on the affine curve. [given, F5, algebra]

1.3 (The differential vanishes at the point.) The partial derivatives of $F$ are $\partial F/\partial y=2y$ and $\partial F/\partial x=-(12x^2-3)$; at $p$ these are $2\cdot0=0$ and $-(12\cdot\tfrac14-3)=-(3-3)=0$. Thus $dF(p)=0$, so the plane curve $F=0$ has vanishing differential at $p$; this is the elementary singularity criterion of the affine chart. [given, algebra]

1.4 (Factorisation and the unit square root.) Expanding $(x-1)(2x+1)^2=(x-1)(4x^2+4x+1)=4x^3-3x-1$ gives $4x^3-3x-1=(x-1)(2x+1)^2$. Put $s:=x+\tfrac12$, so that $2x+1=2s$ and $x-1=s-\tfrac32$, and hence $4x^3-3x-1=(s-\tfrac32)(2s)^2=4s^3-6s^2=s^2h(s)$ with $h(s):=4s-6$. Apply [F3] to $G(s,w):=w^2-h(s)=w^2-4s+6$ at $(0,w_0)$ with $w_0:=i\sqrt6$: $G(0,w_0)=-6+6=0$ and $\partial G/\partial w(0,w_0)=2w_0=2i\sqrt6\ne0$; hence there is a holomorphic $u$ on a disc around $0$ with $u(0)=w_0$ and $u(s)^2=h(s)=4s-6$. By [F4] there is $\varepsilon>0$ with $u(s)\ne0$ for $|s|<\varepsilon$. [F3, F4, algebra]

2.1 (Two smooth branches crossing at $p$.) With $u$ as in step 1.4, the identity $y^2-s^2h(s)=(y-su(s))(y+su(s))$ exhibits the affine curve near $p$ (which is $s=0$, $y=0$) as the union of the two graphs $\Sigma_\pm=\{(s,y):y=\pm su(s)\}$ over the $s$-coordinate, $|s|<\varepsilon$. Each $\Sigma_\pm$ is smooth with parametrisation $s\mapsto(s,\pm su(s))$, and the two branches meet exactly at $s=0$: for $0<|s|<\varepsilon$ one has $su(s)\ne0$ by step 1.4, so the two points $(s,su(s))$ and $(s,-su(s))$ are distinct. The tangent directions at the meeting point are $(1,w_0)$ and $(1,-w_0)$ with $w_0\ne0$, hence distinct, so the branches cross transversally. Moreover $\varphi(s):=su(s)$ satisfies $\varphi(0)=0$ and $\varphi'(0)=u(0)=w_0\ne0$; applying [F3] to $(y,s)\mapsto\varphi(s)-y$ at $(0,0)$ gives a holomorphic inverse branch $\psi$ with $\varphi(\psi(y))=y$ for small $y$. The inverse branches of the two curve graphs are $s=\psi(y)$ and $s=\psi(-y)$. [F3, step 1.4, algebra]

3.1 (The point is not a holomorphic graph in either direction.) Let $P=D_s\times D_y$ be any small polydisc around $(0,0)$ contained in the domain of $u$ and $\psi$, with $u$ nowhere zero on $D_s$ and $\varphi(D_s)\subset D_y$. (i) For small $0\ne s\in D_s$, both $(s,su(s))$ and $(s,-su(s))$ are points of the curve in $P$ with the same $s$-coordinate and distinct $y$-coordinates; a graph over the $s$-coordinate would contain exactly one point over $s$, so the curve is not a holomorphic graph over $s$. (ii) For small $0\ne y\in D_y$ with $\psi(\pm y)\in D_s$, the points $(\psi(y),y)\in\Sigma_+$ and $(\psi(-y),y)\in\Sigma_-$ are distinct points of the curve in $P$ with the same $y$-coordinate, because $\psi$ is injective on $D_y$ and $y\ne-y$; so the curve is not a holomorphic graph over $y$ either. By [F2] a Jacobian-rank nonsingular point of a plane curve germ is a holomorphic graph over one of the two coordinates, so $p$ is not nonsingular in the Jacobian-rank sense. [F2, step 2.1, algebra]

4.1 (No lattice has these invariants.) Suppose a full complex lattice $\Lambda$ had invariants $g_2=3$, $g_3=1$. Then its associated cubic $C_\Lambda$ of [F1] is exactly the projective cubic of the statement, and [F1] asserts that $C_\Lambda$ is nonsingular in the Jacobian-rank sense at every point. But the affine point $p$ is a point of $C_\Lambda$ by step 1.2 and is not Jacobian-rank nonsingular by step 3.1, a contradiction. The same conclusion is visible in the numbers alone: [F1] gives $\Delta(\Lambda)\ne0$, while step 1.1 computes $\Delta=0$ for the pair $(3,1)$. Hence no full complex lattice realizes the invariants $(3,1)$, so the cubic of the statement is a degeneration outside the lattice family. [F1, step 1.1, step 1.2, step 3.1]

5.1 (Assembly.) Steps 1.1, 1.2 and 2.1 show that the projective cubic $Y^2Z=4X^3-3XZ^2-Z^3$ has $\Delta=3^3-27\cdot1^2=0$ and has at $(x,y)=(-1/2,0)$ an affine singular point at which the two smooth branches $y=\pm(x+\tfrac12)u(x+\tfrac12)$ cross transversally, with vanishing differential recorded in step 1.3; step 4.1 shows that this coefficient pair is excluded for every full lattice, by both the nonsingularity clause and the nonvanishing-discriminant clause of [F1]. This is the asserted degeneration. ∎

## Remarks

The factorisation $4x^3-3x-1=(x-1)(2x+1)^2$ is what makes the cubic a *nodal* curve: the affine polynomial has a double root at $x=-1/2$, so the two branches $y=\pm(x+\tfrac12)u(x+\tfrac12)$ cross rather than osculate, and the same vanishing differential that produces the node also annihilates the discriminant $\Delta=g_2^3-27g_3^2$ with the coefficient pair $(g_2,g_3)=(3,1)$. The lattice theorem [[thm-weierstrass-lattice-discriminant-is-nonzero]] is the statement that $\Delta\ne0$ for every lattice, and it mentions this example only as a contrast: no proof step of any item in the pair cites this example, so it is terminal and contributes no dependency. The unique point at infinity $O=[0:1:0]$ is nonsingular even for this cubic: in the chart $\{Y\ne0\}$ with coordinates $u=X/Y$, $v=Z/Y$ the equation is $v-4u^3+3uv^2+v^3=0$, whose partial derivative in $v$ equals $1+6uv+3v^2=1$ at the origin.
