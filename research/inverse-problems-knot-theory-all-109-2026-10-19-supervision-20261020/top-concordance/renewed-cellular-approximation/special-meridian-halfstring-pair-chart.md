# Explicit whole pair chart and proper half-space neighborhood for the special meridian

This is NEW research construction. It uses the actual proper product-tube input at its adopted scope, without rereading that provider. It does not presume a general Lacher string theorem, almost-flat-sphere theorem or hyperplane unknotting result. It constructs the specific chart and a proper closed half-space neighborhood needed by an alternative cap assembly.

## 1. Actual tube and half-meridian

Work in the adopted actual tube coordinates (t,u)∈(−δ,δ)×D⁴_R inside N, with its core u=0 the removed proper line. Choose 0<r<R. The half-meridian in N\L is

    X={t=0, u₁≥0, 0<|u|≤r}.

It is closed in N\L: the unpunctured compact half-disk is closed in N and its sole point on L has been deleted. The complementary half is obtained by reversing u₁. The ambient tube coordinates include a larger radial and longitudinal buffer, rather than ending at ∂X.

Take the open subset with 0<|u|<R and omit the negative u₁-axis. Invert u to v=u/|u|², use a strictly increasing radial coordinate s:(1/R,∞)→R with s(1/r)=0, and stereographically parametrize the direction sphere S³ from its negative u₁-pole by y∈R³. Choose the convention d₁=(1−|y|²)/(1+|y|²), d'=2y/(1+|y|²). Also take a homeomorphism (−δ,δ)→R carrying t=0 to zero. These are actual displayed ambient coordinates on an open neighborhood of the WHOLE X, in which

    X={t=0, |y|≤1, s≥0}.

The half-string is a capped cylinder C=D³×[0,∞), rather than a conjecturally trivial embedding.

## 2. An ambient coordinate map flattening the capped cylinder

Put ρ=|y| and retain its direction when ρ>0. On the meridional half-plane ρ≥0 define a homeomorphism (s,ρ)↦(S,P) as follows.

Inside C, where s≥0 and 0≤ρ≤1, set

    S=s(1−ρ),       P=ρ(s+1).

This maps C bijectively onto the quadrant S≥0,P≥0. Indeed with v=S+P, the inverse is

    s=(v−1+sqrt((v−1)²+4S))/2,       ρ=v−s.

The inequalities S≥0,P≥0 imply s≥0 and 0≤ρ≤1. At S=0, the part P≤1 corresponds to the cap s=0,ρ=P; the part P≥1 corresponds to the wall ρ=1,s=P−1. The formula is continuous also at their corner.

Outside C set a=−min(s,1−ρ)>0. If s=−a and ρ≤1+a, define (S,P)=(-a,ρ). If ρ=1+a and s≥−a, define (S,P)=(-a,s+1+2a). These formulas agree at s=−a,ρ=1+a, and agree with the inside formulas on ∂C. For each fixed a>0, the outside level is an L-shaped ray; its displayed P-coordinate increases continuously from zero to infinity. Its inverse is explicit: for S=−a, if P≤1+a use s=−a,ρ=P; otherwise use ρ=1+a,s=P−1−2a. Thus the full half-plane map and its inverse are continuous.

Revolve by setting Y=(P/ρ)y for ρ>0 and Y=0 at ρ=0. On the axis P=0 and S=s. Near that axis the inside ratio is P/ρ=s+1; on the negative-s outside region it is one. Hence this is an actual ambient homeomorphism of R⁴_(y,s) onto R⁴_(Y,S), including its axis. Its inverse is continuous by the same formulas. It sends C to {S≥0}. Product with the unchanged t-coordinate yields an actual whole pair chart

    h:(U,X) ≅ (R⁵,H⁴),       H⁴={t=0,S≥0}.

All outer hemisphere and equatorial boundary pieces of X are included in this chart. This is specific to the supplied tube meridian; no global chart theorem for arbitrary locally flat half-strings has been imported.

## 3. A closed half-space neighborhood inside the pair chart

Write the chart as (a,b,t)∈R³×R×R, with H⁴={b≥0,t=0}. Let

    P₀={b≥−1, |t|≤1}.

It is a closed half-space-shaped set. Explicitly apply the preceding two-dimensional meridional formula with s=b+1 and ρ=|t| (retaining the sign of t): it carries P₀ to a standard closed half-plane. Product with R³ gives a parameter P₀≅R⁴×[0,∞), and its boundary Y₀ is an actual parametrized R⁴ with a full bicollar.

Choose a positive continuous function ε(a,b) for b≥0, with ε≤1. Let ε₀(a)=ε(a,0), and define an ambient homeomorphism Ψ of R⁵ by

    B=b, T=ε(a,b)t                    if b≥0,
    B=ε₀(a)b, T=ε₀(a)t               if b≤0,

leaving a unchanged. These formulas agree at b=0. They are triangular homeomorphisms with continuous inverses; on H⁴ they are the identity. Put P=Ψ(P₀) and Y=∂P. Thus P is an actual closed half-space and Y is an actual parametrized bicollared R⁴, both contained in the coordinate R⁵.

## 4. Properness in the ORIGINAL ambient R⁵

The accepted recognition supplies the actual original ambient N\L≅R⁵; use its proper Euclidean metric d. Since X is closed in that ambient, the restriction h|X:X→H⁴ is proper. Choose ε sufficiently small that every point of h⁻¹(P) has d-distance less than one from its corresponding basepoint h⁻¹(a,max(b,0),0)∈X. This is possible by continuity of h⁻¹ on compact coordinate boxes: cover the base H⁴ by compact annular boxes, take positive finite continuity tolerances on each enlarged box, and choose a continuous positive minorant. On the negative cap b∈[−ε₀(a),0], use the basepoint (a,0,0); both coordinate displacements there are at most ε₀(a). The same minorant handles it.

Suppose points z_i∈h⁻¹(P) converge in the original ambient. Their corresponding X-basepoints lie within distance one of a common compact set, hence in a compact Euclidean set. Since X is closed and h|X is proper, their base coordinates are bounded. Their cap coordinates and transverse coordinates are bounded too, because ε≤1. Passing to a subsequence, their coordinates converge in the CLOSED set P⊂R⁵. Continuity of h⁻¹ shows the ambient limit lies in h⁻¹(P). Thus h⁻¹(P) is closed in the original ambient; in particular h⁻¹(Y) is a proper bicollared R⁴. This proof requires the closedness of the entire P, not only its boundary.

## 5. Exact remaining half-space operation

The original ambient has now been decomposed along the ACTUAL proper bicollared hyperplane h⁻¹(Y). One closed side, h⁻¹(P), already has a displayed half-space parameter and contains X. The OTHER closed side Q is not being declared a half-space by Brown: its compactification has the very exceptional point whose geometry is at issue.

A sufficient separate TOP operation is: this Q, with its displayed boundary parameter and bicollar, is homeomorphic to R⁴×[0,∞), relative a smaller supplied boundary collar. If supplied, match the boundary map h|h⁻¹(Y) by the constant product extension on Q and on the standard complementary half-space of P. Paste it to h on h⁻¹(P). Both sides are closed and cover the ambient, so the pasted map and inverse are continuous. It is an actual ambient homeomorphism carrying X to standard H⁴. On compactifying, X together with p becomes a flat boundary-point half-disk. Applying this to the two halves of the special meridian, then the separately reviewed LOCAL union chart, would flatten its exceptional interior point and produce the required opposite meridional cap.

The separate finite TOP collar/half-space work may eventually supply this Q operation. This file supplies its exact actual hyperplane and side input, but does NOT count that operation as proved, reviewed or accepted. It also does not yet establish the sphere/half homotopy-equivalence markings needed after a cap is obtained.
