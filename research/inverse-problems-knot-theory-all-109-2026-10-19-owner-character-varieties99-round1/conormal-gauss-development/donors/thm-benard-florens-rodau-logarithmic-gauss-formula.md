---
id: thm-benard-florens-rodau-logarithmic-gauss-formula
kind: theorem
title: Bénard–Florens–Rodau logarithmic Gauss formula and ideal-point slope
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - thm-adjoint-logarithmic-gauss-slope-and-ideal-point
  - lem-adjoint-twisted-slope-is-rational-on-a-character-component
  - def-character-variety-logarithmic-slope-invariant
  - def-knot-a-polynomial
  - def-boundary-slope-of-an-incompressible-surface
  - lem-absolutely-irreducible-sl2-representations-have-quadratic-trace-field-models
  - lem-irreducible-sl2-character-components-have-specializing-quadratic-models
  - lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, Theorems 1.3 and 1.5
      url: https://arxiv.org/pdf/2103.14151
    - title: Allen Hatcher, Boundary slopes of incompressible surfaces
      url: https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, and let $X$ be a one-dimensional irreducible component of its $SL_2(\mathbb C)$ character variety whose peripheral image is a curve in $(\mathbb C^*)^2$. With Bénard–Florens–Rodau's variable order $A_K(L,M)$ and their slope convention, on the admissible smooth locus where the displayed derivatives are nonzero,
$$s_K(\rho)=-\frac{M}{L}\frac{\partial_M A_K}{\partial_L A_K}.$$
At an ideal point of the curve, if the associated Culler-Shalen surface has boundary slope $r$ measured by $a[\lambda]+b[\mu]$ with $r=b/a$, the limiting Bénard–Florens–Rodau slope is $-r$.

## Statement references

[Bénard, Florens, and Rodau, Theorems 1.3 and 1.5](https://arxiv.org/pdf/2103.14151)

[Hatcher, *Boundary Slopes of Incompressible Surfaces*](https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf)

## Facts & Assumptions

**Given:** Full AC, the exact ordered adjoint-homology basis and slope convention, a one-dimensional peripheral curve, a smooth admissible locus, and the ideal-point surface specified in the statement.

[F1] The affine logarithmic formula and ideal-point statement are the local theorem with explicit boundary-slope conventions ([[thm-adjoint-logarithmic-gauss-slope-and-ideal-point]]).

[F2] Boundary slope $r=b/a$ is defined using the preferred longitude and positive meridian ([[def-boundary-slope-of-an-incompressible-surface]]).

[F3] The explicit quadratic trace-field recovery formulas use only the two-word semisimple/irreducibility denominators and word traces; the actual generic family satisfies all generator and relator identities. [[lem-absolutely-irreducible-sl2-representations-have-quadratic-trace-field-models]] [[lem-irreducible-sl2-character-components-have-specializing-quadratic-models]]

[F4] The actual boundary-inclusion kernel and the logarithmic differential kernel coincide generically, by the differentiated representation cocycle and local-coefficient duality. [[lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line]]

## Proof obligation

The rational-function and conditional ideal-point assertions are now assembled in the actual proof donor of [F1], with the original Statement unchanged. The remaining issue here is equality with the actual homology-defined value $s_K(\rho)$ at every exceptional admissible smooth point, rather than only with the rational extension. The following pointwise argument proves the equality whenever the actual peripheral restriction is unramified at the given smooth character, and also proves that unramified condition whenever the actual adjoint first cohomology has dimension one. Neither condition is inserted into this Statement as an extra hypothesis.

The displayed nonzero-gradient hypotheses exclude reducible representatives here. Indeed, a reducible representation is triangular, and its diagonal characters factor through the knot abelianization, so its longitude eigenvalue is $L=1$. The ordinary A-polynomial includes the factor $L-1$. If the stated peripheral-image curve is this abelian factor, its $M$-derivative vanishes along it. If it is a different factor, their intersection at $L=1$ makes both derivatives of the full square-free product vanish. Both alternatives contradict the stated derivative hypotheses.

Fix an irreducible representative $\rho_0$ at a smooth point $\chi_0$ of $X$. Choose the two words $a,b$ of [F3] for this representative: $a$ has distinct eigenvalues and the normalized $b$ has both off-diagonal entries nonzero. Their trace discriminant $D$ and off-diagonal product $q$ are nonzero at $\chi_0$, so the exact recovery equations of [F3] have unit denominators in the local ring. Write its completion as $\mathbb C[\![t]\!]$, with $t$ a smooth local parameter. A root $\xi(t)$ of the semisimple word's characteristic polynomial with prescribed root $\xi(0)$ exists formally: after its first coefficient, every successive coefficient is uniquely solved by division by the nonzero constant $2\xi(0)-\operatorname{tr}\rho_0(a)$. Substituting all word-trace series into the recovery equations therefore gives generator matrices in $SL_2(\mathbb C[\![t]\!])$. They satisfy every relator: the same equations are the actual generic conjugated representation on a dense open of this curve, and their only local denominators are the units already named, so those rational identities remain formal identities here. At $t=0$ the recovered matrices are conjugate to $\rho_0$, by the same unique four-trace recovery, and they can be conjugated once to equal it. Thus this is an actual formal family through the specified representative, without presuming that an arbitrary quotient map admits a local section.

Differentiate that formal family at zero. Its right logarithmic derivative $Z(g)=\dot\rho(g)\rho_0(g)^{-1}$ is an actual crossed cocycle, because differentiating each relator gives zero. The finite word-chain calculation in [F4] consequently gives an actual functional on $H_1(E_K;\operatorname{Ad}\rho_0)$. Pairing with the two peripheral cycles gives the two coefficients of $\mathrm dL/L$ and $\mathrm dM/M$ at $t=0$, up to their common nonzero invariant-vector scale. If the restriction is unramified these are not both zero, so this functional's boundary kernel is a line. It contains the actual inclusion kernel, which is a line by admissibility. The two lines are therefore equal. Since the smooth peripheral curve's tangent satisfies $L(A_K)_L\,\mathrm dL/L+M(A_K)_M\,\mathrm dM/M=0$, its slope is precisely the displayed formula, including its sign. This proves genuine pointwise equality in this branch, not merely continuation of a rational map.

If instead one knows $\dim H^1(E_K;\operatorname{Ad}\rho_0)=1$, the same family's tangent cocycle is nonzero in cohomology: a smooth local coordinate of $X$ has a nonzero differential and is a regular function of finitely many word traces, whereas a coboundary differentiates every word trace to zero. By trace self-duality and the actual rank-one boundary inclusion, the cohomological restriction of this one-dimensional space has rank one and is injective. Its nonzero tangent cocycle therefore has nonzero peripheral restriction, proving the unramified condition and hence the preceding pointwise formula. The invariant-vector basis in the admissibility definition excludes boundary-unipotent degeneration: for a nonscalar unipotent commuting pair the invariant line is spanned by its nilpotent matrix, and the torus two-cell boundary gives a nonzero relation between the two invariant-vector edge cycles; they cannot form the stated two-element basis. For a scalar pair the adjoint action is trivial and the boundary first homology has dimension six, also excluded. Thus the explicit semisimple torus model used in [F4] applies. A meridian cannot be scalar unless the whole knot representation is scalar, since its conjugates generate the knot group.

What is still missing is a proof that the full original admissible smooth locus always satisfies the required pointwise conclusion when the actual adjoint cohomology is larger than one and the reduced character-to-peripheral map could be ramified. Smoothness of the reduced character curve alone has not here been identified with smoothness of its possibly nonreduced representation scheme. Linear chain-level Poincare–Lefschetz duality and constant classical boundary-kernel dimension alone permit a jumping specialization; they cannot replace this missing nonlinear knot argument. No restriction of the original Statement and no complete proof claim for this wrapper is made.
