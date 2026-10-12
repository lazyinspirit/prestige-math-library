# Proposed KAM sequence proof and necessary supplier repairs

Research proof proposal only. This does not certify the current production one-step lemma: its domain, frequency bound, and exact identity require the corrections below. The owning reviewer must independently check those repairs and consumers.

**Superseded for production:** the recurrence author correctly removed the optional lower bound h₀≥16nCE₀, which is unnecessary once the genuine frequency bound B=CαEσ^μ replaces the false CE bound. That optional bound is sound for a fixed α but incompatible with uniform ε≤cα² as α→0. Their production proposal uses h₀≥DαE₀σ^μ with D=max(16nC4^μ,1/c); its extra 4^μ factor ensures Bⱼ≤hⱼ₊₁/(16n) for augmented compositions. Use their source and the subsequent physical-positive-measure-proof.md, not this earlier scalar proposal, for integration.

## Corrected scalar statement

Let n≥2, τ>n−1, μ=τ+3n+2, α>0, C≥1, 0<c≤1, and C_*≥3C·2^μ. Enlarge C to dominate all genuine one-step constants, including the affine mean estimate |v|≤Cε/r. Put

q=2^(−2μ−2), t=2^(−2μ), and A=C_*²E₀.

Choose 0<σ₀≤min(1,s₀/32), 0<r₀≤1, K₀≥1 and E₀,h₀>0 such that

E₀≤min(c²,c,σ₀²,1/64,1/(16C²),q²/C_*²),

K₀σ₀≥max(1,2[|log A|+n log(1/σ₀)+2log C_*+n log2]),

max(16nCE₀,16nCαE₀σ₀^μ,(α/c)E₀σ₀^μ)≤h₀≤min(1,α/(2K₀^(τ+1))).

Define

σⱼ=σ₀2^(−j), Kⱼ=K₀4^j, hⱼ=h₀4^(−μj),

sⱼ=s₀−8∑_{i<j}σᵢ, Eⱼ₊₁=C_*Eⱼ^(3/2), ηⱼ=√Eⱼ,

rⱼ₊₁=ηⱼrⱼ, εⱼ=αEⱼrⱼσⱼ^μ,

Bⱼ=Cεⱼ/rⱼ=CαEⱼσⱼ^μ.

Then every one-step scalar hypothesis holds; the genuine frequency inverse has Bⱼ≤hⱼ/(16n); and the corrected one-step remainder on D_{ηⱼrⱼ,sⱼ−8σⱼ,hⱼ}, composed with its frequency inverse, is bounded by εⱼ₊₁ on D_{rⱼ₊₁,sⱼ₊₁,hⱼ₊₁}.

## Proof of all scalar conditions

Since C_*√E₀≤q<1, induction gives Eⱼ₊₁≤qEⱼ and Eⱼ≤q^jE₀. Indeed Eⱼ≤E₀ implies C_*√Eⱼ≤C_*√E₀≤q. Consequently ηⱼ≤√E₀·2^(−(μ+1)j)≤σ₀2^(−j)=σⱼ, ηⱼ≤1/8, and Eⱼ≤cηⱼ. Also CEⱼ≤C E₀≤√E₀/4≤ηⱼ/4 after replacing E₀ by Eⱼ in C√Eⱼ≤1/4. Thus the flow displacement C Eⱼrⱼ is at most ηⱼrⱼ/4 (and its angular displacement C Eⱼσⱼ≤σⱼ/4).

The radii are positive and ≤1. The strip sum is ∑σⱼ=2σ₀, so sⱼ≥s₀−16σ₀≥s₀/2>0. Moreover σⱼ≤σ₀≤s₀/32≤sⱼ/16≤sⱼ/8, and sⱼ₊₁=sⱼ−8σⱼ. Kⱼσⱼ=K₀σ₀2^j≥1. hⱼ≤h₀≤1.

Because μ−(τ+1)=3n+1>0,

hⱼKⱼ^(τ+1)=h₀K₀^(τ+1)4^(−(3n+1)j)≤α/2.

Thus every truncated divisor survives: for 0<|k|₁≤Kⱼ and ν∈O_{hⱼ}(Ω_{α,τ}), choose ω∈Ω_{α,τ} with |ν−ω|∞<hⱼ. Then

|k·ν|≥α|k|₁^(−τ)−|k|₁hⱼ≥(α/2)|k|₁^(−τ).

The nearest point need not exist; the strict distance definition guarantees the required ω. Empty label sets cause vacuous inequalities and empty maps, consistently with the domain definition.

The first smallness condition is εⱼ≤cαηⱼrⱼσⱼ^μ because Eⱼ≤cηⱼ. For the second,

εⱼ/(rⱼhⱼ)=(αE₀σ₀^μ/h₀)(Eⱼ/E₀)2^(μj)
≤(αE₀σ₀^μ/h₀)2^(−(μ+2)j)≤c.

Similarly

CEⱼ/hⱼ≤(CE₀/h₀)4^(−j)≤1/(16n),

Bⱼ/hⱼ≤(CαE₀σ₀^μ/h₀)2^(−(μ+2)j)≤1/(16n).

These distinguish the coarse scalar CEⱼ bound from the genuine mean frequency bound Bⱼ; α cannot be absorbed into a constant stipulated to depend only on n,τ.

For the Fourier tail, the recursion gives exactly Eⱼ=A^((3/2)^j)/C_*². Write L=|log A| and D=n log(1/σ₀)+2log C_*; these are nonnegative. For j≥0, 2^j≥(3/2)^j and 2^j≥j. The initial cutoff therefore gives

(K₀σ₀/2)2^j≥L(3/2)^j+D+n jlog2.

Hence

log(σⱼ^(−n)e^(−Kⱼσⱼ/2))
=n log(1/σ₀)+njlog2−(K₀σ₀/2)2^j
≤−L(3/2)^j−2log C_*=log Eⱼ.

This proves the full tail estimate with its actual factor 1/2 and correct logarithmic sign.

## Domains, radius restriction, and Newton recursion

The corrected remainder estimate must be on B_{ηr}, not B_{r/2}. The flow can still be constructed on B_{r/2}×S_{s−8σ}; restricting its input to B_{ηr} gives |I(t)|≤ηr+CEr≤(5/4)ηr<2ηr, and |Im θ(t)|<s−8σ+CEσ≤s−7σ. This is inside the region where the Taylor error bound Cη²ε is available. This uses uniform estimates for 0≤t≤1, furnished by the same weighted flow argument as at t=1.

Use the exact identity

(N+P)∘Φ=N+Rhat+(P−R)∘Φ+∫₀¹{(1−u)Rhat+uR,F}∘Φᵤ du.

There is no additional integral of {P−R,F}. To verify the formula, integrate the derivative of χᵤ∘Φᵤ, obtaining R∘Φ−Rhat=∫(R−Rhat)∘Φᵤ+∫{χᵤ,F}∘Φᵤ. Combine with N∘Φ=N−∫(R−Rhat)∘Φᵤ and then add P∘Φ. The bracket estimate for χ is quadratic, while the Taylor and Fourier estimates apply to (P−R)∘Φ on the restricted domain. Thus

|P⁺|_{ηr,s−8σ,h}≤C[E+η²+σ^(−n)e^(−Kσ/2)]ε.

For the sequences this is ≤3CEⱼεⱼ. The frequency inverse is defined on O_{hⱼ/4} and lands in O_{hⱼ/2}; hⱼ₊₁/hⱼ=2^(−2μ)<1/4, so it is defined throughout O_{hⱼ₊₁}. Composition preserves the remainder bound. Finally

εⱼ₊₁=α(C_*Eⱼ^(3/2))(√Eⱼrⱼ)(σⱼ/2)^μ
=C_*2^(−μ)Eⱼεⱼ≥3CEⱼεⱼ.

This is the required Newton induction. The original s loss 5σ cannot support this domain induction; loss 8σ and σ₀≤s₀/32 suffice.

The inverse derivative bound is ||Dφⱼ−I||≤(16n/7)Bⱼ/hⱼ≤1/7. In fact its error series is summable because Bⱼ/hⱼ≤(B₀/h₀)2^(−(μ+2)j). Its image satisfies dist(φⱼ(ν),Ω)<hⱼ₊₁+Bⱼ<hⱼ/2. For the phase flow parameter derivatives, evaluation at φⱼ is inside O_{hⱼ/2}; the chain rule and ||Dφⱼ||≤8/7 give

|Wⱼ ∂ν(Φⱼ(phase,φⱼ(ν)))|≤(8/7)CEⱼ/hⱼ,

up to the dimension factor already included in C. The right side is summable, since Eⱼ/hⱼ≤(E₀/h₀)4^(−j). These are the actual inverse-domain and Cauchy-loss checks. They do not by themselves prove estimates for nonlinear compositions of many phase maps; those consumers still need their own valid derivative argument.

## Sums and simultaneous initial choices

The following elementary bounds preserve the old displayed numerical bounds:

∑Eⱼ≤E₀/(1−q)≤2E₀,

∑2^jEⱼ≤E₀/(1−2q)≤2E₀,

∑(rⱼ+σⱼ)Eⱼ≤(r₀+σ₀)E₀/(1−q)≤2(r₀+σ₀)E₀,

∑εⱼ/(rⱼhⱼ)≤[αE₀σ₀^μ/h₀]/[1−2^(−μ−2)]≤(4/3)αE₀σ₀^μ/h₀.

Also rⱼ≤r₀8^(−j), so any desired comparison rⱼ≤const·σⱼ must retain r₀/σ₀; it cannot silently assume r₀≤σ₀.

For fixed σ₀,r₀,α,c,C,C_*, these choices exist. Take E₀→0 subject to the finite smallness list and choose K₀=max(1,σ₀^(−1)max(1,2[|log(C_*²E₀)|+nlog(1/σ₀)+2log C_*+nlog2])). Then K₀=O(1+|log E₀|). The lower endpoint for h₀ is M E₀ with fixed M=max(16nC,16nCασ₀^μ,(α/c)σ₀^μ), whereas its upper endpoint is min(1,α/(2K₀^(τ+1))). For sufficiently small E₀, M E₀K₀^(τ+1)≤α/2 and M E₀≤1, because E₀(1+|log E₀|)^(τ+1)→0. To prove this elementary limit put x=−log E₀ and choose integer m>τ+1; e^x≥x^m/m! implies e^(−x)x^(τ+1)≤m!x^(τ+1−m)→0. Then choose any h₀ in the nonempty interval.

## Remaining consumer traps requiring owning-reviewer attention

1. A composition must carry the frequency coordinate: the actual extended map is (phase Φⱼ(phase,φⱼ(ν)),φⱼ(ν)). Otherwise successive parameter substitutions are lost and H∘Ψⱼ has no correct claimed normal form.
2. Weighted phase Jacobian bounds do not imply unweighted ||DΦⱼ||≤1+CEⱼ. The weights vary with j and rⱼ/σⱼ is not 1. Products and mixed derivatives need a common norm or a blockwise estimate using the affine action structure.
3. On disconnected/nonconvex O_h(Ω), a bounded parameter derivative gives a Lipschitz estimate only for points joined by an admissible segment. For arbitrary label pairs split into |ν−ν′|<h/const (the segment is inside a ball around a label) and farther pairs (use twice the sup norm), with explicit constants.
4. Bounds for differences of derivatives of compositions require second derivatives or Cauchy on a fixed surviving angular margin; simply differentiating a first-derivative product bound does not establish them.
5. Frequency inverse uniqueness itself is sound: any inverse lies in the same radius-B ball around ν_+, so the segment contraction argument uses that convex ball, not the whole O_h(Ω).

No production files, manifests, contracts, or run state were changed by this proof author.
