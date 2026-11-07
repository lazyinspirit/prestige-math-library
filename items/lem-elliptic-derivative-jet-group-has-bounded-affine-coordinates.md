---
dependency_level: 2
id: lem-elliptic-derivative-jet-group-has-bounded-affine-coordinates
kind: lemma
title: "Elliptic derivative jet groups have bounded affine quotient coordinates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-pointed-genus-one-curve-has-a-regular-group-law-by-relative-Riemann-Roch
  - lem-vector-extension-of-an-elliptic-curve-has-a-proper-affine-quotient-in-characteristic-p
  - lem-function-field-coordinate-derivations-and-constant-kernel
  - lem-smooth-pointed-function-field-curve-spreads-to-good-model
  - lem-normal-affine-variety-has-normal-projective-compactification
  - lem-affine-jet-functions-have-uniform-pole-bounds
  - def-derivation-algebra
  - thm-differentials-smooth-locally-free
  - lem-ag-differentials-transitivity
  - def-ag-standard-smooth-algebra
  - lem-ag-standard-smooth-flatness
  - thm-gluing-affine-schemes
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §2(C), printed pp. 67–69; simultaneous jet construction and elliptic group refinement supplied locally"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, genus-one logarithmic-derivative context only; no Mordell–Weil input imported"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed of characteristic $p>0$, let
$K/k$ be finitely generated of positive transcendence degree $d$, and fix
the coordinate derivations $\delta_1,\ldots,\delta_d$ from a separating
transcendence basis. Let $E/K$ be a smooth proper geometrically integral
genus-one curve with $O\in E(K)$ and its regular group law.

The simultaneous derivative jet scheme $J\to E$ is a smooth separated
commutative finite-type $K$-group extension of $E$ by
$V=(T_OE)^d\cong\mathbf G_a^d$. For a $K$-point $P$, write $j(P)$ for
its derivative jet. There are an affine finite-type $K$-group $Y$, a proper
smooth homomorphism $\psi:J\to Y$ with geometrically integral curve
fibres, and a homomorphism $\theta:E\to J$ such that
$$\pi\theta=[p]_E,\qquad [p]_J=\theta\pi.$$
The homomorphism $\theta:E\to\ker\psi$ is finite faithfully flat,
and this kernel is a smooth proper geometrically integral curve.
Choose affine coordinate generators $f_1,\ldots,f_m$ of $Y$. There is a
fixed finite-dimensional $k$-subspace $W\subset K$ such that
$$f_i(\psi(j(P)))\in W\quad(P\in E(K),\ 1\le i\le m).$$

For every extension field $M/K$, every $k$-derivation $\Delta_l$ of $M$
restricting to $\delta_l$, and $Q\in E(M)$, the corresponding simultaneous
jet satisfies $j_\Delta([p]Q)=\theta(Q)$. This assertion is about the
natural jet of a point and does not assume that $E$ has a regular
connection over $k$.

## Facts & Assumptions

**Given:** AC, $k$, $K$, the specified coordinate derivations and the
pointed smooth genus-one curve $E$.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Coordinate derivations extend uniquely from a separating
transcendence basis and form a basis of $\operatorname{Der}_k(K)$.
Derivations obey the product and chain rules.
[[lem-function-field-coordinate-derivations-and-constant-kernel]]
[[def-derivation-algebra]]

[F2] A pointed smooth genus-one curve has a regular commutative group
law and a tangent trivialization by translation. A smooth standard
presentation solves its dependent differentials using an invertible
Jacobian minor. Schemes glue from compatible affine charts.
[[lem-pointed-genus-one-curve-has-a-regular-group-law-by-relative-Riemann-Roch]]
[[thm-differentials-smooth-locally-free]]
[[lem-ag-differentials-transitivity]] [[def-ag-standard-smooth-algebra]]
[[lem-ag-standard-smooth-flatness]] [[thm-gluing-affine-schemes]]

[F3] A commutative vector extension of a pointed genus-one curve in
characteristic $p$ has the proper smooth affine quotient and the
multiplication factorization stated above, with geometrically integral
curve fibres.
[[lem-vector-extension-of-an-elliptic-curve-has-a-proper-affine-quotient-in-characteristic-p]]

[F4] A pointed smooth proper function-field curve over perfect constants
spreads to a smooth projective model over a smooth affine base with the
same function field. Every normal affine base has a normal projective
compactification. Given such models, any finite list of regular functions
on the splitting-jet bundle has uniformly bounded poles on the
compactification along the jets of rational sections, hence lies in a
fixed finite-dimensional constant-field vector space.
[[lem-smooth-pointed-function-field-curve-spreads-to-good-model]]
[[lem-normal-affine-variety-has-normal-projective-compactification]]
[[lem-affine-jet-functions-have-uniform-pole-bounds]]

## Axiom use

AC is inherited from [F1]–[F4], including their declared DC consequences.
Only finitely many charts, rational functions and denominators are spread.

## Proof

**Proof technique:** direct; explicit derivative equations construct the
jet group, its vector kernel permits the characteristic-$p$ quotient,
and the existing jet pole bound supplies bounded affine coordinates.

1.1 On an affine presentation of an open of $E$, with coordinates $x_a$ and equations $g_b(x)=0$, adjoin variables $u_{la}$ for each $\delta_l$ and impose$\delta_l(g_b)(x)+\sum_a (\partial g_b/\partial x_a)(x)u_{la}=0.$ Coefficient differentiation in the first term and the usual partial derivatives in the second give precisely a lift of $\delta_l:K\to K$ to the value algebra at the given point. Relations generated by the $g_b$ and localized inverse coordinates obey the same rule, so this construction represents the functor independently of the presentation. Under a coordinate change $x'_b=h_b(x)$, the formula is $u'_{lb}=\delta_l(h_b)(x)+\sum_a\partial_a h_b(x)u_{la}$. The chain rule [F1] gives inverse transition maps and their cocycle identity, so these affine schemes glue by [F2]. On a standard smooth chart the Jacobian solves the dependent $u$ variables. Thus $\pi:J\to E$ is a torsor under $T_E^d$, Zariski locally an affine $d$-space bundle. It is smooth and surjective, and $J$ is smooth, separated and finite type over $K$. [A1, F1, F2, given, construct, algebra]

2.1 Differentiating addition and inversion on $E$ with the same coefficient rule defines regular addition and inversion on $J$. The chain rule makes differentiation preserve compositions, so the group identities follow from those of $E$, as identities of morphisms, on every value algebra including nonreduced ones. The identity is the derivative jet $j(O)$. The kernel over $O$ consists of differences from this jet, that is $(T_OE)^d$. Differentiating addition at $(O,O)$ adds tangent vectors, so the induced kernel law is addition in the vector group $V$. Translation from [F2] identifies $T_E^d$ with the constant vector bundle $E\times V$, and this is exactly the torsor action induced by the group law on $J$. Thus $0\to V\to J\to E\to0$ is the fppf-exact commutative vector extension required by [F3]. No splitting of that extension is asserted. [F1, F2, algebra, step 1.1]

3.1 Apply [F3] to obtain $Y$, $\psi$ and $\theta$, with the stated fibre and multiplication properties. For any $M$ and derivations $\Delta_l$ as in the Statement, pointwise coefficient differentiation defines $j_\Delta:E(M)\to J(M)$ by step 1.1. Differentiation preserves the regular group operations by step 2.1, so this is a group homomorphism. Consequently$j_\Delta([p]Q)=[p]_J j_\Delta(Q)=\theta(\pi j_\Delta(Q))=\theta(Q).$ This identity holds for every chosen extension of the derivations; no integrability of a connection and no regular derivation lift on $E$ is used. [F1, F3, algebra, step 2.1]

4.1 Spread $E$ by [F4] to a smooth projective family $X\to R$ on a smooth affine integral $k$-base with function field $K$. Shrink $R$ so the finite list $\delta_l$ extends to a basis of its tangent sheaf: their values on finitely many affine algebra generators have only finitely many denominators; the determinant of their basis comparison is nonzero at the generic point, so invert it as well. The splitting bundle $F\to X$ of the absolute-to-relative tangent sequence then has generic fibre the scheme $J$ of step 1.1. Each $f_i\circ\psi$ is regular on this entire generic fibre. It extends to a regular function on $F$ after further nonempty affine shrinking of $R$. Indeed use a finite affine cover of the separated finite-type $F$; generic regularity clears one base denominator on each chart, and equality on their quasi-compact overlaps clears finitely many further denominators. The affine-cover equalizer then glues the extensions. This is a finite list, so one base shrinking suffices. [F1, F2, F4, construct, algebra, step 3.1]

5.1 By [F4] compactify the normal affine $R$ to a normal projective $\overline R$. Apply the uniform jet pole bound of [F4] to the finite regular functions on $F$ obtained in step 4.1 and to the given projective embedding of $X$. Every $P\in E(K)$ is a rational section, and its jet on the generic fibre is exactly $j(P)$. The resulting fixed finite-dimensional $k$-space $W\subset K$ therefore contains every $f_i(\psi(j(P)))$. An empty generator list or an empty set of sections imposes no extra condition; the construction of $J$, $Y$ and their fibres is unaffected. This proves the boundedness assertion and completes the construction. [F4, algebra, step 4.1] ∎
