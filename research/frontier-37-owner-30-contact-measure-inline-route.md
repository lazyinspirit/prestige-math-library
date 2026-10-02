# Frontier 37 owner-30: inline strict-contact measure route

## Audit disposition

The one-dimensional strict-contact identity has a complete proof under
Dependent Choice (DC). It can replace the target's external [F7] invocation;
no Bedford–Taylor contact identity for unbounded functions is assumed. The
proof also supplies the full-mass-class bridge for the target's unbounded pair,
starting only from the finite logarithmic energy of μ. It does not assume
ν≤μ, finite energy of ν, or a stronger choice principle.

I read the complete current target and audited the actual local Riesz,
potential, mollification, Sobolev, Hilbert-space, capacity, and measure
interfaces used below. The target remains unchanged at SHA-256
8635b12f699f00d46bdf0b01421601155eb2242487d6cf402d34530352a3f666.
The companion proof audit is
research/frontier-37-owner-30-unbounded-contact-repair-route.md at SHA-256
2e0ae1d4bad8a5a39db1226a31f8a4c6793bd845e1db404fa5119a7b639c97e8; it records
separate defects in the target's domination argument. This report addresses
the strict-contact measure route only.

The exact mismatch is in target [F7]: it asserts the contact identity for an
arbitrary unbounded pair, while the cited Guedj–Zeriahi §1.1 identity (1)
states it for bounded psh functions. The item applies [F7] to (u+ε,v), neither
of which is known to be bounded. The route below repairs that bridge: prove the
bounded plane identity inline, derive the full-mass truncation facts from
their definitions, put the finite-energy potential in the full-mass class by
an inline Sobolev estimate, and pass to the arbitrary second obstacle by
truncation.

## Exact current interfaces

The proof uses the following existing library routes; no full-Choice Sobolev
chain-rule supplier is used.

| Interface | Actual role and choice level |
|---|---|
| def-plane-subharmonic-function, thm-plane-subharmonic-functions-are-locally-integrable, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity | USC, circle submean, local integrability, and finite maxima. The latter two are current pipeline suppliers; DC implies their CC requirements. |
| def-riesz-measure-subharmonic-function, thm-riesz-measure-is-positive-radon | Distributional normalization μp=(2π)⁻¹Δp, positivity, and locally finite Radon measure. These are the current draft suppliers already used by the target; their stated choice premise is DC. |
| lem-logarithmic-potential-distributional-laplacian | pσ(z)=∫log|z−w|dσ(w) is subharmonic and Δpσ=2πσ; CC is supplied by DC. |
| lem-distributional-laplacian-commutes-with-mollification, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign | Smoothness and Laplacian of mollifications. The weak-derivative/convolution identity needed below is also shown by a test-function calculation, so the draft lem-mollification-commutes-with-weak-derivatives-in-the-interior is not a premise. |
| thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, thm-minkowski-inequality-for-integrals, thm-jensens-integral-inequality, thm-c-c-infinity-rn-is-dense-in-l-p-of-rn, thm-riesz-representation-for-hilbert-space, def-weak-derivative-of-a-locally-integrable-function, def-sobolev-space-wkp-and-its-norm, and the L2 Hilbert-space interface | Approximate identities, L2 bounds, density of smooth tests, and representation of bounded derivative functionals. These interfaces require at most CC; DC implies CC. |
| def-logarithmic-potential-and-energy, thm-logarithmic-energy-well-defined-and-lower-semicontinuous, thm-tonelli-theorem-for-sigma-finite-product-spaces | The shifted-kernel energy convention and Tonelli show directly that finite energy makes μ({pμ=−∞})=0. This is the only null-set fact needed for the full-mass bridge. |

The existing suppliers cor-positive-negative-part-and-truncation-calculus-in-w-one-p
and thm-sobolev-chain-rule-for-c-one-lipschitz-compositions carry full Choice.
The proof below replaces both uses by an explicit scalar approximation
argument under CC. The separate published GZ text was read in full at
/tmp/math-0612630-gz.txt; the report derives the required truncation,
comparison, and unbounded-contact consequences instead of adopting those
conclusions as axioms. GZ references the bounded identity to Bedford–Taylor,
but the inline proof below makes that unavailable paper unnecessary.

## Local Sobolev facts under DC

Write dA for plane area measure and use μp=(2π)⁻¹Δp. Fix a nonnegative,
radial, radially nonincreasing C∞ compactly supported mollifier ρ of mass one,
and write pδ=p*ρδ on compact subsets of the domain.

For pointwise convergence at the canonical subharmonic representative, take
the explicit radial profile ρ(s)=c exp(−1/(1−s²)) for 0≤s<1 and zero for
s≥1, with c chosen to give unit mass in R². If
Arp(z)=(πr²)⁻¹∫D(z,r)p dA, then

    pδ(z)=∫₀¹ πs²(−ρ'(s)) Aδs p(z) ds,
    ∫₀¹ πs²(−ρ'(s))ds=1.

For finite p(z), the circle submean inequality gives Arp(z)≥p(z), and upper
semicontinuity gives Arp(z)≤p(z)+ε for every sufficiently small r. If
p(z)=−∞, upper semicontinuity bounds p above by any prescribed real number
on a sufficiently small disk. The formula therefore gives pδ(z)→p(z) in
the extended reals in both cases. This is also the pointwise convergence used
below for finite-energy potentials.

### Bounded subharmonic functions lie in W¹,²loc

Let p be locally bounded above and below and subharmonic. Distributional
convolution gives Δpδ=2π μp*ρδ≥0. For a smooth compactly supported cutoff η,
integration by parts gives

    ∫η²|∇pδ|² = −∫η²pδΔpδ − 2∫ηpδ∇η·∇pδ.

On a fixed compact neighborhood, pδ is uniformly bounded by the local
two-sided bound for p. The positive Radon measures μp have bounded mass on
that neighborhood, so the first term is uniformly bounded in absolute value.
Young's inequality bounds the cross term by one half of the left side plus a
fixed constant. Hence ∇pδ is bounded in local L².

The canonical pointwise convergence pδ→p follows from the radial-mean
formula above; local boundedness then gives pδ→p in local L². For a test
function φ,

    |∫p ∂iφ dA| = limδ→0 |∫(∂i pδ)φ dA| ≤ C||φ||₂.

Smooth compactly supported tests are dense in local L²: exhaust the domain by
relatively compact open sets, extend each truncated function by zero, use the
current C∞c(R²)-density supplier, and multiply by a smooth cutoff equal to
one on the truncated support. Thus each distributional derivative functional
extends boundedly to L². Hilbert-space Riesz representation (CC) represents
it by an L² function. Therefore p∈W¹,²loc.

Strong local convergence pδ→p in W¹,² follows from L² translation continuity
and Minkowski's inequality, applied to p and its weak derivatives. The
convolution/weak-derivative identity required here follows directly by
testing on a safe interior:

    ∂i(p*ρδ)(x) = −∫p(y)∂yiρδ(x−y)dA(y)
                =  ∫(∂i p)(y)ρδ(x−y)dA(y).

### Finite-energy logarithmic potentials lie in local W¹,²

This is the extra bridge needed to place the target's first compactified
potential in the full-mass class without using the source's dimension-one
“no polar mass iff full mass” assertion as an axiom. Let μ have compact
support K, mass M>0, and finite energy, and put

    p(z)=pμ(z)=∫log|z−w|dμ(w).

For each compact Q, Jensen's inequality and Tonelli give

    ∫Q |p(z)|²dA(z)
      ≤ M∫K∫Q |log|z−w||²dA(z)dμ(w) < ∞,

because log²|z−w| is locally area-integrable uniformly for w∈K. Thus
p∈L²loc.

Set μδ=μ*ρδ and pδ=p*ρδ=pμδ. The convolution of two radial mollifier
measures is a radial probability measure κδ=ρδ*ρδ. For every a∈C and
radius r, the elementary circle-mean calculation

    (2π)⁻¹∫₀²π log|a+reⁱᵗ|dt = log max(|a|,r) ≥ log|a|

follows by factoring out the larger of |a| and r and averaging the
convergent logarithm series; the boundary case follows by its integrable
limit. Integrating in the radial variable of κδ shows
(kR*κδ)(a)≤kR(a), where kR(a)=log(R/|a|). Choose a fixed
R>1+diam(K)+2, large enough for all δ<1. The shifted kernel is nonnegative
on all smoothed supports. Tonelli and the convolution formula then give

    I(μδ)+M²log R
      = ∬(kR*κδ)(z−w)dμ(z)dμ(w)
      ≤ ∬kR(z−w)dμ(z)dμ(w)
      = I(μ)+M²log R.

In particular I(μδ)≤I(μ). On the support of μδ, pδ≤Mlog R;
consequently

    ∫pδ⁻dμδ = I(μδ)+∫pδ⁺dμδ ≤ I(μ)+M²log R.

For a fixed cutoff η, integration by parts and Δpδ=2πμδ yield

    ∫η²|∇pδ|²
      ≤ 4π∫pδ⁻dμδ + 4∫pδ²|∇η|².

The second term is uniformly bounded: Jensen's inequality for convolution
and p∈L²loc bound ||pδ||L²(Q) by ||p||L²(Q') on a slightly larger compact
Q'. The first term has the energy bound above. Hence ∇pδ is locally bounded
in L². Approximate-identity convergence gives pδ→p in L²loc. The same
bounded-functional and Hilbert Riesz argument as in the bounded case
produces the weak derivatives of p in local L². Therefore every finite-energy
logarithmic potential is in W¹,²loc, under DC.

The energy comparison uses only the radial circle-mean formula, the
nonnegative shifted kernel, and Tonelli; it does not assume a
potential-energy Sobolev theorem. Distributional mollification and Hilbert
representation require at most CC.

### Scalar composition and positive part without the AC suppliers

For F∈C∞(R) with bounded Lipschitz derivative and f∈W¹,²loc, approximate f
strongly in local W¹,² by smooth mollifications. Classical differentiation
applies to the smooth approximants. In passing to the limit, split
F'(fn)∇fn−F'(f)∇f into the term containing ∇fn−∇f and the term containing
(F'(fn)−F'(f))∇f. The first tends to zero by boundedness of F'; the second
tends to zero by uniform continuity of F', convergence of fn in measure, and
absolute continuity of the integral of |∇f|². Thus ∇F(f)=F'(f)∇f. The
same estimate shows strong convergence of F(fn) in local W¹,².

Choose a smooth θ with θ=0 on (−∞,0] and θ=1 on [1,∞), put q(t)=tθ(t),
and set Pδ(t)=δq(t/δ). These functions have uniformly bounded derivatives,
|Pδ(t)−t⁺|≤δ, and Pδ'(t)→1{t>0}, with limit zero at t=0. The just-proved
smooth chain rule followed by dominated convergence gives

    ∇f⁺ = 1{f>0}∇f a.e.

This is the only positive-part rule needed; neither full-Choice Sobolev
supplier is imported.

## Bounded plane strict-contact identity

Let x,y be locally bounded above and below subharmonic functions on a plane
domain, w=max(x,y), and f=x−y. The preceding result gives
x,y,w∈W¹,²loc, and

    ∇(w−x)=∇(f⁺−f)=0 on {f>0}.

For each n choose a smooth χn that is zero for t≤1/(2n) and one for
t≥1/n. Given φ∈C∞c, let ψn=φχn(f). Its Sobolev gradient vanishes where
f≤1/(2n); where f>1/(2n), ∇(w−x)=0. Therefore

    ∫∇(w−x)·∇ψn dA=0.

Approximate ψn by the smooth compactly supported
ψnδ=φχn(xδ−yδ). The scalar chain rule and strong local W¹,² convergence
give ψnδ→ψn strongly in W¹,². Pointwise radial mollification convergence
and |ψnδ|≤|φ| give convergence against each locally finite positive Riesz
measure by dominated convergence. For every smooth test ψnδ, the Riesz
identity is

    ∫ψnδ dμp = −(1/(2π))∫∇p·∇ψnδ dA,    p=x,w.

Pass first δ↓0, subtract the identities for x,w, then let n→∞.
Dominated convergence and χn(f)→1{f>0} give

    1{x>y} μx = 1{x>y} μmax(x,y)

as Borel measures. The argument is local, so it proves the identity on every
plane domain. This is the bounded one-dimensional case needed from the cited
literature, with no fine-topology locality assumption.

## Finite-energy obstacle and the E-class input

Let M=μ(C)>0, a=ν(C)/M≤1, pσ=−Uσ, and use

    ρFS(z)=½log(1+|z|²),  ω=ddᶜρFS,  ∫P¹ω=1,
    ddᶜ=(i/π)∂∂bar=(2π)⁻¹ΔdA.

Put u=pμ/M, v=(pν−c)/M, φ=u−ρFS, and ψ=v−ρFS. The compact-support
expansions at w=1/z=0 are

    φ(1/w)=M⁻¹∫log|1−wζ|dμ(ζ)−½log(1+|w|²),

    ψ(1/w)=(1−a)log|w|+M⁻¹∫log|1−wζ|dν(ζ)
            −c/M−½log(1+|w|²).

Thus φ is smooth near infinity, and

    T:=ω+ddᶜφ=μ/M,
    S:=ω+ddᶜψ=ν/M+(1−a)δ∞.

The residual infinity atom is required by the mass-only condition. No
domination ν≤μ is used.

The set P={pμ=−∞} is Borel by upper semicontinuity. Choose
R>max(1,diam K), and define

    Ũ(z)=∫kR(z,w)dμ(w),  kR(z,w)=log(R/|z−w|)≥0 on K².

The energy convention and Tonelli give
∫Ũdμ=I(μ)+M²log R<∞. Since Ũ=Uμ+Mlog R, P={Ũ=∞}; finiteness of the
nonnegative integral therefore gives μ(P)=0 directly. Hence T(P)=0. No
capacity-polar regularity theorem or Borel inner-regularity claim is needed.

The finite-energy Sobolev estimate above applies to u. For each integer j,
let φj=max(φ,−j), Tj=ω+ddᶜφj, and Ej={φ>−j}. On C,

    φj+ρFS = max(u,ρFS−j).

The one-obstacle version of the same test-function proof applies to the
finite-energy subharmonic u and the smooth subharmonic obstacle ρFS−j: use
f=u−(ρFS−j)∈W¹,² and w=max(u,ρFS−j)=(ρFS−j)+f⁺. For
ψn=varphi χn(f), the pairing
∫∇(w−u)·∇ψn vanishes by the same positive-part calculation. Approximate
ψn with the smooth tests
ψnδ=varphi χn(uδ−(ρFS−j)). Strong W¹,² convergence handles the gradient
pairing, while uδ→u pointwise in the extended reals, including u=−∞, and
|ψnδ|≤|varphi| give dominated convergence against μu and μw. Letting
δ↓0 and then n→∞ gives the identity on {u>ρFS−j}. It follows that

    1Ej Tj = 1Ej T.

For all sufficiently large j, Ej contains a neighborhood of infinity and
φj=φ there, so this equality also holds on the compactified chart. Therefore

    limj 1Ej Tj = limj 1Ej T = T|P¹\\P,
    (T|P¹\\P)(P¹)=1.

By the definition of the full-mass class E(P¹,ω), φ∈E without importing the
source's dimension-one no-polar-mass characterization. Adding a constant
preserves this property; it just shifts the truncation levels by a fixed
amount.

## Truncation route to the unbounded obstacle identity

For completeness, this derives the needed GZ consequences from the bounded
identity above and the full-mass definition. It also records exactly where
full mass is spent.

For any ω-psh q, let qj=max(q,−j), Tj=ω+ddᶜqj, and Fj={q>−j}. Each
bounded current Tj is a positive measure of mass one: in a finite atlas the
local Riesz measures define ddᶜqj, and the integral of ddᶜqj on the compact
surface is ⟨ddᶜqj,1⟩=⟨qj,ddᶜ1⟩=0. The bounded identity applied to (qj,−k),
for j≥k, gives

    Tj|F_k = Tk|F_k,
    since {qj>−k}=F_k and max(qj,−k)=qk.

Thus Rj:=1Fj Tj is an increasing sequence of measures and its limit Tq^np
is the one-dimensional nonpluripolar measure in the GZ definition. Since
Tj(P¹)=1,

    q∈E  iff Tq^np(P¹)=1
       iff Tj({q≤−j})→0.                         (1)

If q∈E, then Tj→Tq^np in total variation. Indeed stabilization gives
Tj|Fj=Tq^np|Fj; both complementary tails have mass
1−Rj(P¹)→0, so the total variation distance is at most twice that tail.

The same construction and stabilization hold for real truncation levels
t→+∞: for s≤t, apply bounded contact to (qt,−s) to get
Tt|Fs=Ts|Fs. The integer levels are cofinal, so the limiting measure and
full-mass condition are unchanged when a fixed constant shifts all
truncation levels. This justifies the constant shifts below and the target's
θ=φ+ε.

For a bounded ω-psh pair on P¹, use a finite chart cover with local smooth
potentials ρU for ω. On each chart, adding ρU turns the pair into bounded
subharmonic functions, preserves the strict-contact set, and turns
ω+ddᶜq into the local Riesz measure. The plane identity therefore gives the
bounded contact identity globally on P¹.

The bounded comparison inequality follows from bounded strict-contact.
For bounded α,β, put r=max(α,β). On {α<β}, Tr=Tβ, and on {α>β},
Tr=Tα. Since Tr has mass one,

    Tβ({α<β})
      =1−Tr({α≥β})
      ≤1−Tα({α>β})
      =Tα({α≤β}).

Apply this with β−ε and let ε↓0; the two increasing sets converge to
{α<β}. This yields Tβ(α<β)≤Tα(α<β).

For α,β∈E, truncate them as αj,βk and apply bounded comparison:
Tβk(αj<βk)≤Tαj(αj<βk). For fixed j, the indicators converge pointwise
as k→∞ to 1{αj<β}; total-variation convergence for Tβk and dominated
convergence for the fixed finite measure Tαj give
Tβ(αj<β)≤Tαj(αj<β). As j→∞ these strict sets increase to {α<β};
total-variation convergence for Tαj gives the comparison principle

    Tβ({α<β}) ≤ Tα({α<β}).                         (2)

The class E is upward closed. Suppose θ∈E and θ≤q with q ω-psh.
Subtract a sufficiently large integer constant from both, which only shifts
truncation indices, so θ≤q≤−2. Put v=q/2, which is ω-psh because
ω+ddᶜv=½(ω+ddᶜq)+½ω≥0. Let vj=max(v,−j)=q2j/2 and
θ2j=max(θ,−2j). With Sj={θ2j<vj−j+1}, one has

    {v≤−j} ⊂ Sj ⊂ {θ≤−j}.

The second inclusion uses vj≤−1; the first uses θ2j≤q2j=2vj=−2j
on {v≤−j}. Apply (2) to the bounded pair (θ2j,vj−j+1). Since adding
constants does not change the current,

    Tvj({v≤−j})
      ≤ Tvj(Sj)
      ≤ Tθ2j(Sj)
      ≤ Tθ2j({θ≤−j}) → 0.

The last limit follows from (1) and truncation stabilization: on
{θ>−j}, Tθ2j=Tθj, so this tail equals Tθj({θ≤−j}). Criterion (1) gives
v∈E. Since

    Tvj = ½Tq2j + ½ω,

the tail criterion gives Tq2j({q≤−2j})≤2Tvj({v≤−j})→0.
These are the even-index tails in (1); tail monotonicity gives all indices,
so q∈E.

Finally let θ∈E and ξ be any ω-psh function. Upward closure puts
q=max(θ,ξ) in E. Define

    θj=max(θ,−j), ξj+1=max(ξ,−j−1), qj=max(q,−j),
    E={θ>ξ}, Ej={θj>ξj+1}.

Then max(θj,ξj+1)=qj, E⊂Ej, and

    Ej\\E ⊂ {θ≤−j},     Ej\\E ⊂ {q≤−j}.

The bounded contact identity gives Tθj|Ej=Tqj|Ej. For any bounded
Borel test b, the two excess integrals on Ej\\E are bounded by ||b||∞
times the respective tails in (1), which tend to zero. Total-variation
convergence passes the remaining integrals to Tθ and Tq. Hence

    1{θ>ξ}(ω+ddᶜθ)
      =1{θ>ξ}(ω+ddᶜmax(θ,ξ))

as Borel measures, for arbitrary ξ, including its −∞ set.

Apply this with θ=φ+ε and ξ=ψ. The strict set on C is exactly
{u+ε>v}, and the common smooth ρFS cancels from the maximum. This is the
actual unbounded-contact route needed by target step 3.1. The only energy
used is I(μ)<∞; a=ν(C)/M≤1 is used for the residual atom at infinity, and
no measure domination or energy bound on ν is introduced.

## Current status and limits

No genuine mathematical gap remains in the strict-contact identity or its
application to the target pair under DC. This report is evidence for the
route, not a target/carrier/receipt edit. The target's [F7] statement and
provenance still need root-owned synchronization to say that the bounded
identity is proved inline and the unbounded use is supplied by the
full-mass truncation argument. Other defects in steps 2.1, 2.2, and 5.1 are
listed in the companion audit and are outside this contact-only report.
