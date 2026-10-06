# Corrected square-conic termination argument

This argument repairs the omitted triple-cubic step in the earlier Stacks route. Its source is Lipman, *Rational singularities* (1969), §24, printed pp.264–268, especially relations (5) and (5′), together with *Desingularization of two-dimensional schemes* (1978), printed pp.171–174, relations (1.29) and the fixed-coordinate termination argument. The classification diagrams are not imported. The algebraic steps and termination used here are proved below.

Let A be a rational normal local surface ring in the existing regular-base canonical-module setting, with invertible canonical module and normal completion. Its ordinary point blowups remain normal and rational, and the canonical pullback is surjective. Locally an invertible canonical module is free, so that pullback identifies the successor canonical module with its structure sheaf. Thus every singular successor is again a rational Gorenstein point with embedding dimension three, a plane-conic tangent ring and normal completion. These are the already closed suppliers in the manifest.

Write m=(x,y,z). In the square-conic case choose the generating triple so its quadratic relation is z². Then z²∈m³. Grouping the terms of a relation modulo m⁴ gives

`z² + G(x,y) ∈ z m² + (x,y)⁴`,

where the residue cubic H of G on κ[X,Y] is nonzero. The square-conic branching lemma proves this nonvanishing from the DVR at the generic point of the reduced exceptional line and normality of the next blowup. Singular successors lie over closed zeros of H. A simple closed zero has nonsquare successor conic, already resolved by the nonsquare lemma. Since H has degree three, a multiple closed zero has degree one and is unique. If one exists, H is either a unit times a product of a simple linear factor and the square of a distinct linear factor, or a unit times a cube. We treat these two cases without dividing by 2 or 3.

## 1. The stable double-plus-simple cubic class

Choose x for the simple factor and y for the double factor. For some unit a,

`z² + a x y² ∈ z m² + (x,y)⁴`.                                            (S)

This is the corrected broad invariant. It permits the terms that were absent from the earlier restrictive persistence class. Absorbing the terms z²m into a unit coefficient and dividing by that unit writes an exact relation

`z² + a x y² + b x²z + c xyz + d y²z + e x⁴ + f x³y + g x²y² + h xy³ + i y⁴ = 0`,

where a is a unit and all other letters are arbitrary coefficients in A. The reduced exceptional cubic is aXY². Its simple zero X=0 gives only the already closed nonsquare branch. The only possible continuing square successor is the κ-rational point in the x-chart with y/x=z/x=0. Set u=y/x and v=z/x. Dividing the displayed relation by x² gives the **full next equation**

`v² + a x u² + b x v + c xuv + d xu²v + e x² + f x²u + g x²u² + h x²u³ + i x²u⁴ = 0`.   (S1)

Here and below coefficients denote their pullbacks. The successor quadratic is

`P(X,V)=V² + b̄ XV + ē X²`.

If P is nonsquare, the closed nonsquare-conic termination lemma applies. If P is a square, choose δ in A lifting its residue square coefficient, so b̄=2δ̄ and ē=δ̄². This is a characterization of a monic square, valid also in characteristic two; no division by 2 is used. Put w=v+δx. Define b′=b−2δ and e′=e−bδ+δ². Both belong to the **old** maximal ideal, which pulls back to xA′. Thus b′=xB and e′=xE in the chart. Substituting in (S1) gives exactly

`w² + a x u² + c xuw + d xu²w`

`+ x²[Bw + (f−cδ)u + (g−dδ)u² + h u³ + i u⁴] + x³E = 0`.                (S2)

In particular an old quartic x⁴ coefficient contributes to E and to the new cubic x³; the old xyz coefficient changes the x²u coefficient. None is discarded. Modulo terms divisible by w and terms of total degree at least four, the successor cubic is

`C(X,U)=X(ā U² + ρ XU + σ X²)`,

with ā≠0. Therefore X=0 is a simple closed zero. There can be at most one multiple closed zero, and it is κ-rational in the X-chart: its coordinates are (X:U)=(1:ε). Algebraically,

`ā ε² + ρε + σ=0`,  `2ā ε + ρ=0`.

These are precisely the conditions that the quadratic factor be a scalar times (U−εX)²; in characteristic two they require ρ=0 and the relevant residue square to exist. If no multiple closed zero exists, every singular branch is already nonsquare. If it exists, replace u by u−εx (using any local lift of ε). This is an invertible change of the generating triple, leaves x unchanged, leaves the tangent square w² unchanged, and changes the cubic restriction to āXu². All remaining cubic terms are divisible by w, and all higher terms lie in m′⁴⊂w(m′)²+(x,u)⁴. Thus the successor again satisfies (S), with a unit coefficient.

Consequently every continuing square step in this class takes the x-chart, has residue field κ, and the same element x generates the pulled-back centre ideal. Both the square shift w=v+δx and the root shift u↦u−εx preserve that ideal. If the continuing branch were infinite, the fixed-coordinate arc helper would give a nonsingular arc and a surjection from the completion onto a complete DVR. Normality of the completion gives a regular height-one kernel. The established generator/exponent argument makes the completed blowup chain regular after finitely many steps, and equality of closed-fibre local completions transfers that regularity back. This contradicts an infinite singular branch. The branch therefore terminates, and its finitely many simple-zero side branches terminate by the nonsquare lemma.

## 2. The triple cubic: the missing finite transition

Choose x,y so H is a nonzero scalar times Y³. Grouping `z m²+(x,y)⁴` now gives the exact ideal relation

`z² + a y³ + β x²z + γ x⁴ ∈ J₁=(x³y,x²y²,xyz,y²z)`,                   (T)

with a a unit. Terms z²m were again absorbed into a unit coefficient. On the unique possible singular x-chart successor, u=y/x and v=z/x. Its quadratic is

`P(X,V)=V² + β̄ XV + γ̄ X²`.

If P is nonsquare, that successor is in the closed nonsquare case. If P is square, choose δ with β̄=2δ̄ and γ̄=δ̄² and make the **old-ring** coordinate correction w=z+δx². The ideals J₁ in the old and new coordinates agree: for example xyz changes by a multiple of x³y, and y²z by a multiple of x²y². The new x²w and x⁴ coefficients are β−2δ and γ−βδ+δ², hence belong to m=(x,y,w). Expand them in these three generators. Terms involving x³w, xyw, y²w or x²y² belong to

`J₂=(x³w,x²y²,xyw,y²w)`;

the x-component of the x⁴ coefficient gives σx⁵, its y-component contributes to ρx³y, and a coefficient of w² is a unit which may be divided out. Therefore there are exact coefficients a (a unit), ρ and σ such that, renaming w as z,

`z² + a y³ + ρ x³y + σ x⁵ ∈ J₂=(x³z,x²y²,xyz,y²z)`.                (T′)

This is Lipman’s relation (5′). For explicit chart calculations write its right side as

`A x³z + B x²y² + C xyz + D y²z`.

The x-chart next equation, after division by x², is exactly

`v² + a x u³ + ρ x²u + σ x³`

`− A x²v − B x²u² − C xuv − D xu²v = 0`.                            (T1)

Its tangent quadratic at the origin is v², and its cubic restriction to the kernel plane v=0 is

`X²(ρ̄ U + σ̄ X)`.

The origin is singular: if its two-dimensional local ring were regular, the quotient by x would have the double-line cotangent generators u,v, so x would be in the square of the maximal ideal and u,v regular parameters. Equation (T1) would then put v² in its third power, impossible for regular parameters. Thus its rational Gorenstein tangent-conic supplier applies. Normality of its next point blowup forces its controlling cubic to be nonzero. It follows that **ρ or σ is a unit**, in every characteristic. This implication uses the normality of the next rational blowup, not a characteristic-sensitive derivative test.

If ρ is a unit, X²(ρ̄U+σ̄X) is a double factor times a distinct simple factor. An invertible linear choice with simple coordinate ρu+σx and double coordinate x puts the successor in (S). This may start the fixed exceptional parameter for the stable branch; no infinite switching is involved.

If ρ is not a unit, σ must be a unit. Since ρ∈m, in the chart ρ=xr. Swap coordinates **X=u, Y=x, Z=v**. Equation (T1) then becomes

`Z² + (σ+rX)Y³ + a X³Y`

`− A Y²Z − B X²Y² − C XYZ − D X²YZ = 0`.                            (T2)

All four terms on the second line belong to `(X³Z,X²Y²,XYZ,Y²Z)`. The coefficient σ+rX is a unit, and the new coefficient of X³Y is the old unit a. Thus (T2) is already relation (T′) with **new ρ a unit and new σ=0**. One further point blowup therefore reaches the double-plus-simple class. Hence a triple-cubic branch enters either the nonsquare case or (S) after at most two successive continuing square successors.

The exact E8 substitution now fits the argument:

`z²+x³+y⁵`, `x=yu`, `z=yv`

`= y²(v²+y u³+y³)`.

For the original equation use the (T′) generators x=y_old, y=x_old, z=z_old, with a=1, ρ=0, σ=1. The displayed successor `v²+y_old u³+y_old³` is its **(T1)** σ-unit chart, not (T′) itself. The (T2) swap X=u, Y=y_old gives `v²+Y³+X³Y`, which is (T′) with new a=1, ρ=1, σ=0. Its X-chart next equation is `w²+X s³+X²s`; the cubic X²s has a double and a distinct simple factor, so it enters (S). The cubic y³ was essential to this finite transition and was never discarded.

## 3. Full termination and scope

For a square-conic point, the nonzero controlling cubic either has no multiple closed factor, has a double-plus-simple factorization, or is a cube. The first gives only nonsquare successors; Sections 1 and 2 handle the other two. Every blowup has finitely many singular successors (indeed at most three closed cubic zeros), and no infinite branch can survive: nonsquare branches terminate; a triple square branch becomes a stable double-plus-simple branch after finitely many steps; and that stable branch terminates by the fixed-parameter arc argument.

A finitely branching infinite rooted tree has an infinite path: choose a child with infinitely many descendants at each step, using the stated AC/DC. Thus absence of infinite branches makes the singular-successor tree finite. Blowing up its finitely many singular closed points gives a regular terminal scheme. All point blowups are ordinary, normal, rational and Gorenstein, with finite normalization equal to the identity; all centres are singular and the morphism is projective over the local base and an isomorphism off its original closed point.

The proof imposes no perfectness or characteristic restriction. It does not import the ADE classification or its intersection diagrams. Normal completion enters only in the already proved fixed-coordinate arc termination. This closes the earlier square-conic interface while preserving the full commissioned normal finite-type surface theorem.
