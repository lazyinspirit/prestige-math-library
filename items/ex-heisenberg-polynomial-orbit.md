---
dependency_level: 3
id: ex-heisenberg-polynomial-orbit
kind: example
title: A quadratic orbit on the Heisenberg nilmanifold
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-polynomial-sequence-on-a-filtered-group
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - lem-tangent-space-of-a-lie-group-is-a-lie-algebra
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Heisenberg nilmanifold example, printed pp. 466–467 and Section 5, printed pp. 491–492
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Heisenberg nilmanifold and linear orbit, pp. 16–19 and 44–45
---

## Example

For real $x,y,z$, put
$u(x,y,z)=\begin{pmatrix}1&x&z\\0&1&y\\0&0&1\end{pmatrix}$, and let
$G=\{u(x,y,z):x,y,z\in\mathbb R\}$ and
$\Gamma=\{u(a,b,c):a,b,c\in\mathbb Z\}$. Use the filtration
$G_0=G_1=G$, $G_2=\{u(0,0,z):z\in\mathbb R\}$, and $G_3=\{u(0,0,0)\}$.
For $a=u(\sqrt2,1,0)$, the sequence $g(n)=a^n$ defines a polynomial orbit
on the nilmanifold $G/\Gamma$, with top-right matrix coordinate
$\binom n2\sqrt2$, where $\binom n2=n(n-1)/2$ for every integer $n$.

## Example references

[Green and Tao, Heisenberg nilmanifold example](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)

## Facts & Assumptions

**Given:** The matrix group $G$, integer subgroup $\Gamma$, filtration
$G_\bullet$, matrix $a$, and sequence $g(n)=a^n$ from the example statement.

[F1] A filtered nilmanifold consists of a connected simply connected
finite-dimensional nilpotent Lie group, its filtration by closed connected
subgroups with the group commutator condition, a discrete cocompact lattice,
and the right quotient. [[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[F2] A sequence is polynomial when every $i$-fold right difference lies in
the filtration subgroup $G_i$. [[def-polynomial-sequence-on-a-filtered-group]]

[F3] The tangent Lie algebra bracket is induced by commutators of the
left-translation-invariant derivations. [[lem-tangent-space-of-a-lie-group-is-a-lie-algebra]]

## Verification

**Proof technique:** direct.

1.1 Matrix multiplication and inversion give $(x,y,z)(x',y',z')=(x+x',y+y',z+z'+xy')$ and $(x,y,z)^{-1}=(-x,-y,-z+xy)$. These formulas show that the integer triples form a subgroup and a discrete subset of $G$. Every right coset has a representative in $[0,1)^3$: right multiply first to put $x,y$ in $[0,1)$, then choose the integer central coordinate to put $z+xb$ in $[0,1)$, where $b$ was the integer used to reduce $y$. Therefore the image of the compact cube $[0,1]^3$ covers $G/\Gamma$, so the quotient is compact. The coordinates identify $G$ smoothly with $\mathbb R^3$, hence $G$ is connected and simply connected. [given, F1, algebra, construct]

2.1 The group commutator is $(0,0,xy'-x'y)$, so $[G,G]=G_2$ and $G_2$ is central. The tangent vector $X=(r,s,t)$ gives the left-invariant derivation $D_X=r\partial_x+s\partial_y+(t+xs)\partial_z$, because $(x,y,z)(\varepsilon r,\varepsilon s,\varepsilon t) =(x+\varepsilon r,y+\varepsilon s,z+\varepsilon t+x\varepsilon s)$. For $Y=(r',s',t')$, operator commutation gives $[D_X,D_Y]=(rs'-r's)\partial_z$. Thus the tangent Lie algebra has derived algebra contained in the central one-dimensional span of $\partial_z$, and its third lower-central term is zero. Together with step 1.1 this verifies that $G/\Gamma$ and $G_\bullet$ meet [F1]. [given, F1, F3, step 1.1, algebra]

2.2 In the coordinates above, for every integer $n$, $a^n=(n\sqrt2,n,\binom n2\sqrt2)$. Indeed the group law and identity $\binom{n+k}{2}=\binom n2+\binom k2+nk$ show that the displayed formula is a homomorphism from $\mathbb Z$ to $G$ taking $1$ to $a$, hence it is $a^n$. This gives the stated top-right coordinate. [given, step 1.1, algebra]

3.1 Since $g(n)=a^n$, its first right difference is $\partial_hg(n)=g(n+h)g(n)^{-1}=a^h$, independent of $n$. Its next right difference is $e$, and every higher difference is also $e$. The first difference lies in $G_1=G$, the second lies in $G_2$, and all later ones lie in the corresponding trivial groups. By [F2], $g\in\operatorname{poly}(\mathbb Z,G_\bullet)$, so the example is a polynomial nil-orbit. [given, F1, F2, step 2.2, algebra] ∎
