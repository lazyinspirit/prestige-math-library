# Frontier 37 owner 30 B6 examples: final repair report

Snapshot: 2026-10-01. This report covers only the singular-cubic counterexample
and the smooth-plane-quartic example. It records item-local mathematical
repairs and local format/render checks; those checks are not independent
certification.

## Final item snapshots

| Item | Final SHA-256 | Repair |
|---|---|---|
| cex-rational-map-singular-curve-not-extend-uniquely | abcc22407739b0e697df763ac95f248503b7c593c8e5b397289c09699b7c20e3 | Proves geometric integrality after every field extension and identifies the full smooth locus. The counterexample remains a failure of existence with conditional uniqueness. |
| ex-plane-quartic-genus-three-smooth | 01f48a5afd0e960d40a87ac18eed6b866c9f0c127372e5d0f0ce30d5b1f3f281 | Proves irreducibility/geometric integrality by the repeated-factor and component-intersection Jacobian arguments, then derives the arithmetic and geometric genera. |

## Singular cubic route

Let $A=k[x,y]/(y^2-x^2(x+1))$ with $\operatorname{char}k\ne2$. For every
extension $K/k$, the order valuation at the prime $(x+1)$ of $K[x]$ satisfies
$v_{x+1}(x^2(x+1))=1$. Thus the right side is not a square in $K(x)$, and the
quadratic remains irreducible in $K(x)[y]$. Monicity and Gauss's lemma give
irreducibility in $K[x,y]$; the finite-variable UFD source makes the
irreducible polynomial prime, so the quotient is a domain and its spectrum is
integral. This proves geometric integrality, in particular over $\bar k$.

The coordinate ring has fraction field algebraic over $k(x)$, with $x$
transcendental, so its dimension and chain dimension are one. The point $o=V(x,y)$ is closed. The quotient $A/(x)=k[y]/(y^2)$ has only the prime
$(y)$, hence $D(x)=X\setminus\{o\}$. With $t=y/x$, the localization is
$A_x\cong k[t,(t^2-1)^{-1}]$, presented by
$k[t,s]/(s(t^2-1)-1)$ with invertible Jacobian minor $t^2-1$; therefore $D(x)$
is smooth. At $o$, the local dimension is one and the cotangent space has
basis $x,y$, so the embedding dimension is two. Thus $D(x)$ is exactly the
smooth locus.

The map $\nu:\mathbf A^1\to X$ given by $x=t^2-1$, $y=t(t^2-1)$ sends both
$1$ and $-1$ to $o$. On $D(t^2-1)$, the slope $y/x$ pulls back to the chart
coordinate $t$ of $\mathbf P^1$. Any extension would agree with that coordinate on the
dense open and therefore everywhere, by separated-target equality on reduced
sources. Its values at 1 and -1 would then both equal the value at o, although
they are distinct when $\operatorname{char}k\ne2$. No extension exists. The same
separated-target criterion makes any extension unique if one exists.

Actual supplier interfaces read in full for this route included

def-algebraic-curve-over-field, def-integral-scheme,
lem-finite-variable-polynomial-rings-over-fields-are-ufds,
lem-gauss-lemma-over-a-ufd,
thm-affine-domain-dimension-transcendence-degree,
cor-morphisms-equal-on-dense-open-reduced-source,
def-smooth-morphism-classical, def-ag-standard-smooth-algebra,
thm-projective-space-proper-over-base, and
lem-rational-map-smooth-curve-to-proper-scheme-extends.

## Smooth quartic route

Let $k$ be algebraically closed, with no characteristic restriction. The
projective-hypersurface dimension result makes $V_+(F)$ nonempty and pure of
dimension one. Factor the homogeneous quartic into homogeneous irreducibles.
If an irreducible factor occurs at least twice, every first derivative of
$F=G^2H$ vanishes at every point of $V_+(G)$, in every characteristic. The
affine hypersurface Jacobian criterion gives a nonregular local ring at such a
point, contradicting smoothness. If $F$ is square-free but reducible, write
$F=GH$ with coprime positive-degree homogeneous factors. The projective Bezout
supplier gives a nonempty intersection $V_+(G,H)$; at every intersection point
the derivatives of GH vanish, again contradicting smoothness by the Jacobian
criterion. Therefore F is irreducible and prime, so the projective hypersurface
is an integral curve. Since k is algebraically closed, it is geometrically
integral.

The plane arithmetic-genus formula gives $p_a(X)=3$. Smoothness makes all local
rings regular, so all $\delta$ invariants vanish. The plane geometric-genus/delta
formula then gives g(X^{\mathrm{nu}})=3. Regular local rings are normal, so the
normalization is isomorphic to X and $g(X)=3$. The fully proved
cor-genus-degree-smooth-plane-curve supplies the general formula
$g(C)=\frac{(d-1)(d-2)}2$
for the retained triangular-number sequence claim.

The actual supplier interfaces read in full for this route included

cor-dimension-affine-and-projective-space,
lem-projective-hypersurface-dimension-drop,
cor-projective-plane-bezout-length-form,
lem-projective-hypersurface-affine-pieces,
thm-jacobian-criterion-affine-variety,
thm-plane-curve-arithmetic-genus,
cor-plane-curve-geometric-genus-delta-correction,
def-delta-invariant-curve-singularity,
thm-normalization-glues-integral-finite-type-curves,
thm-regular-local-rings-are-normal, and
cor-genus-degree-smooth-plane-curve.

## Choice accounting

Both items state AC and its route to DC explicitly. The inherited DC use is
through lem-curve-closed-subsets-finite, which occurs in the smooth-curve
extension supplier for the singular example and in the finiteness route for
the plane genus correction supplier. AC implies DC by
theorem choice-implies-dependent-implies-countable-choice. No characteristic
restriction is added to the quartic argument.

## Local checks

- node tools/tsx-run.mjs tools/precheck.mts items/cex-rational-map-singular-curve-not-extend-uniquely.md — pass.
- node tools/tsx-run.mjs tools/precheck.mts items/ex-plane-quartic-genus-three-smooth.md — pass.
- node tools/rendercheck.mjs items/cex-rational-map-singular-curve-not-extend-uniquely.md items/ex-plane-quartic-genus-three-smooth.md — pass; YAML frontmatter and KaTeX expressions render.
