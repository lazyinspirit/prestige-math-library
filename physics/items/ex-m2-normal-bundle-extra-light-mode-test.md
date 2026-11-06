---
id: ex-m2-normal-bundle-extra-light-mode-test
kind: example
title: M2 Normal Bundle Extra Light Mode Test
status: published
origin: session
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
axiom_strength: "ZF + AC"
physical_scope: "Pure mathematical conditional statement/example; no physical membrane realization asserted."
deps:
  - def-axiom-of-choice
  - thm-cohomology-projective-space-twisting-sheaves
  - def-sheaf-cohomology-derived-global-sections
  - def-projective-line-two-affine-cover-and-twisting-sheaf
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  def-projective-line-two-affine-cover-and-twisting-sheaf: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 9, printed pp. 83–87: divisor theory and Riemann–Roch; the canonical-line transition on P1 is computed locally in this item"
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §1 and Ch. 6 §§1 and 3, printed pp. 41–44 and 52–55: divisors, canonical line, and Riemann–Roch"
generation:
  role: example
---

## Example

Assume full AC. Let $C=\mathbb P^1_{\mathbb C}$ be the algebraic
projective line formed by gluing two affine-line charts with coordinates
$z$ and $w$ on their nonzero loci via $w=1/z$. The algebraic line
bundle $\mathcal O(d)$ has frame transition $e_\infty=z^d e_0$.
Write $H^q(C,-)$ for algebraic sheaf cohomology. For a holomorphic
vector bundle $N\to C$, its total space is
$$\operatorname{Tot}(N):=\{(p,v):p\in C,\ v\in N_p\},$$
with the holomorphic structure induced by its bundle charts; its zero
section is $s_0(p):=(p,0_p)$. Define the normal bundle of this section
by
$$\nu_{s_0}:=s_0^*T\operatorname{Tot}(N)/ds_0(TC).$$
For a displayed split bundle, its rank is its complex fiber dimension
and its degree is the sum of the degrees of its line summands, with
$\deg\mathcal O(d)=d$. For any rank-three $N$, the complex dimension of
$\operatorname{Tot}(N)$ is four and its canonical line is the top
holomorphic cotangent line $K_{\operatorname{Tot}(N)}:=
\Lambda^{4,0}T^*\operatorname{Tot}(N)$.

Set $N_1=\mathcal O\oplus\mathcal O(-1)\oplus\mathcal O(-1)$ and
$N_2=\mathcal O\oplus\mathcal O\oplus\mathcal O(-2)$. Under the
natural identification $\nu_{s_0}\cong N_i$, their cohomology dimensions
are
$(\dim H^0(C,N_1),\dim H^1(C,N_1))=(1,0)$ and
$(\dim H^0(C,N_2),\dim H^1(C,N_2))=(2,1)$. Both bundles have rank
three and degree $-2$, and each $K_{\operatorname{Tot}(N_i)}$ is
holomorphically trivial.

Here a first-order embedded deformation means a closed subscheme of
$\operatorname{Tot}(N_i)\times_{\mathbb C}\operatorname{Spec}(\mathbb C[\varepsilon]/(\varepsilon^2))$
that is flat over the dual numbers and whose special fiber is the zero
section; its tangent space is $H^0(C,N_i)$. A small extension means a
surjective local $\mathbb C$-algebra homomorphism $A'\twoheadrightarrow A$
of Artinian local algebras with common residue field $\mathbb C$, whose
kernel $I$ satisfies $I^2=0$ and $\mathfrak m_{A'}I=0$. Thus $I$ is a
$\mathbb C$-vector space. For supplied local lifts of an embedded
deformation over $A$ to $A'$, their normal-bundle differences on the standard two-chart
cover define a Čech class in $H^1(C,N_i\otimes_\mathbb C I)$; the cover
computes this sheaf cohomology, and vanishing is exactly the condition
that the local lifts can be adjusted to glue. For $I=\mathbb C$ this
linear obstruction space is $H^1(C,N_i)$, whose dimension is the
second entry displayed above. Thus the linearized deformation and
obstruction spaces have different dimensions despite equal rank and
degree. These total spaces are noncompact; this is a complex-geometric
calculation, neither a physical membrane spectrum nor a compact
$F_4$ counterexample.

## Facts & Assumptions

**Given:** Full AC; $C=\mathbb P^1_{\mathbb C}$; its standard twisting sheaves $\mathcal O(d)$ with transition $e_\infty=z^d e_0$; the two split rank-three bundles and their total spaces. For these split bundles, degree means the sum of the degrees of the displayed line summands. Cohomology means algebraic sheaf cohomology.

[A1] The total space $\operatorname{Tot}(N)$ is the algebraic vector bundle with fiber $N_p$ over $p\in C$, and its zero section is $p\mapsto0\in N_p$. A first-order embedded displacement means a flat embedded deformation over $\mathbb C[\epsilon]/(\epsilon^2)$ reducing to that zero section. A small extension means a surjective local $\mathbb C$-algebra homomorphism $A'\twoheadrightarrow A$ of Artinian local algebras with common residue field $\mathbb C$, whose kernel $I$ satisfies $I^2=0$ and $\mathfrak m_{A'}I=0$; local lifts over an open cover are supplied when the obstruction group is considered.

[F1] [[def-axiom-of-choice]]: full AC is assumed for the supplied projective-line cohomology interface.

[F2] [[thm-cohomology-projective-space-twisting-sheaves]]: for $A=\mathbb C$, $n=1$, and $d\in\mathbb Z$, $H^0$ is the degree-$d$ polynomial space when $d\ge0$ and zero when $d<0$; $H^1$ is freely generated by the all-negative Laurent monomials of total degree $d$. Its proof computes these groups from the standard affine-cover Čech complex.

[F3] [[def-projective-line-two-affine-cover-and-twisting-sheaf]]: the two charts of $\mathbb P^1_{\mathbb C}$ are affine, their overlap has coordinate $z\in\mathbb C^\times$, and the twisting line $\mathcal O(d)$ has transition $e_\infty=z^d e_0$. Write $K_C:=\Omega^1_{C/\mathbb C}$ for its algebraic canonical line.

[F4] [[def-sheaf-cohomology-derived-global-sections]]: sheaf cohomology is computed by applying global sections to an injective resolution.

## Verification

1.1 For two sheaves, choose injective resolutions $I_1^\bullet$ and $I_2^\bullet$ as in [F4]. Their termwise finite direct sum is injective: $\operatorname{Hom}(-,I_1^q\oplus I_2^q)$ is the finite direct sum of exact Hom functors. It resolves the direct sum sheaf. Global sections commute with finite direct sums, and kernels and images of the resulting pair of cochain maps are the direct sums of their kernels and images. Thus $H^q(C,F_1\oplus F_2)=H^q(C,F_1)\oplus H^q(C,F_2)$; applying this twice handles rank three. By [F2] with $A=\mathbb C$, $n=1$, and $d=0,-1,-2$, the three line summands have $(h^0,h^1)(\mathcal O)=(1,0)$, $(h^0,h^1)(\mathcal O(-1))=(0,0)$, and $(h^0,h^1)(\mathcal O(-2))=(0,1)$. Hence $(h^0(N_1),h^1(N_1))=(1,0)$ and $(h^0(N_2),h^1(N_2))=(2,1)$. The ranks are three by the displayed direct sums, and additivity of degree gives $\deg N_1=0-1-1=-2=\deg N_2$. [F1, F2, F4, given, algebra]

1.2 On the chart with coordinate $z$, use the canonical frame $dz$; near infinity put $w=1/z$, so $dz=-w^{-2}dw$. The canonical-line transition is therefore $e_\infty=-z^{-2}e_0$. Multiplying one frame by the nonzero constant $-1$ gives the standard transition $z^{-2}$ from [F3], hence $K_C\cong\mathcal O(-2)$. Therefore $\det N_1\cong\mathcal O(-2)\cong K_C$ and $\det N_2\cong\mathcal O(-2)\cong K_C$. [F3, given, algebra]

1.3 On a trivializing affine chart $U=\operatorname{Spec}R$, put
$S=R[v_1,v_2,v_3]$ and let $J\subset S\otimes A$ define a flat
embedded deformation of the zero section over an Artinian local
$\mathbb C$-algebra $A$ with maximal ideal $\mathfrak m$. Write
$M=(S\otimes A)/J$. The projection induces $f:R\otimes A\to M$
reducing to the identity on $R$. Flatness gives
$\mathfrak m^kM/\mathfrak m^{k+1}M\cong
(\mathfrak m^k/\mathfrak m^{k+1})\otimes_{\mathbb C}R$:
tensor the inclusions of successive ideals with $M$ and then reduce
modulo $\mathfrak m$. The map $f$ induces the identity on each such
quotient. Since $\mathfrak m$ is nilpotent, finite induction on this
filtration makes $f$ an isomorphism. The images of the $v_j$ are
therefore unique $t_j\in\mathfrak m(R\otimes A)$, and
$J=(v_1-t_1,v_2-t_2,v_3-t_3)$. Conversely this ideal has quotient
$R\otimes A$, which is free over $A$ and hence flat. For the dual
numbers, $t_j=\varepsilon s_j$ with $s_j\in R$. On overlaps the
vectors $s$ transform by the vector-bundle transition, so their
compatible graphs are precisely global sections of $N_i$. Addition
and scalar multiplication of these coefficients identify the
first-order tangent space with $H^0(C,N_i)$. [A1, given, algebra]

2.1 In a local trivialization of a rank-three algebraic vector bundle $N$, the total-space transition has the form $(z,v)\mapsto(\phi(z),G(z)v)$, where $G(z)\in GL_3(\mathbb C)$. Its tangent transition is block triangular with diagonal blocks $\phi'(z)$ and $G(z)$. Along the zero section the vertical tangent is $N$ and $d\pi\circ ds_0$ is the identity on $T_C$, so $s_0^*T\operatorname{Tot}(N)=ds_0(T_C)\oplus N$. The normal quotient defined in the Statement is therefore naturally $N$. The tangent quotient by the vertical bundle is $\pi^*T_C$, and the cotangent determinant has transition $K_{\operatorname{Tot}(N)} \cong\pi^*(K_C\otimes(\det N)^*)$, where $\pi:\operatorname{Tot}(N)\to C$ is projection. Substituting $\det N_i\cong K_C$ from step 1.2 makes this line bundle trivial for each $i$. [F3, step 1.2, algebra]

3.1 Apply step 1.3 on both affine charts to the supplied lifts over
$A'\twoheadrightarrow A$. Two lifts of the same graph differ by a
vector in $R\otimes_{\mathbb C}I$. On overlaps this difference
transforms by $N_i$; the condition $\mathfrak m_{A'}I=0$ makes it
independent of the original nilpotent coefficients. Thus the
pairwise differences form a Čech cocycle in $N_i\otimes I$.
Changing local graphs by sections of $N_i\otimes I$ changes the
cocycle by their coboundary. A compatible glued lift gives zero
class; conversely a zero class supplies graph corrections that make
the lifts agree and glue. Since $I$ is finite-dimensional and $N_i$
splits into twisting lines, the standard-cover comparison in [F2],
combined with the finite-sum argument of step 1.1, identifies this
Čech group with $H^1(C,N_i\otimes I)$. This is an obstruction space,
not a claim that any nonzero obstruction occurs. For $I=\mathbb C$
it is $H^1(C,N_i)$; for $I=0$ both the difference class and group
vanish. Step 1.1 gives the stated different dimensions. No physical
spectrum follows. [A1, F2, step 1.1, step 1.3, algebra] ∎
