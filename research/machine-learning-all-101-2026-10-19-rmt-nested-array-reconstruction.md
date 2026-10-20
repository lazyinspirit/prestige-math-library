# Nested sampling, fourth-moment truncation, and uniform diagonal laws

This is separate repair research, not a native report or accepted proof carrier.

## Confirmed interface defect and source contract

The current upper-edge supplier permits arbitrary dependence across the matrices: within each X_n its entries are iid with one fixed mean-zero, variance-one, finite-fourth law. This is insufficient for its claimed almost-sure conclusion. The original YBK full PDF `/tmp/yin-bai-krishnaiah-1988.pdf`, SHA-256 `7580d6bfd8dfbe8884e3072d5f11f19e98c226a51198a484fe44898ca1153dcf`, introduction printed p.509 and Theorem3.1 printed p.517 explicitly posit one infinite iid matrix and take its upper-left rectangular blocks. The correction must state that coupling explicitly, preserve arbitrary finite-fourth laws and all aspect ratios, and propagate it to every actual consumer using the a.s. upper-edge bound. The general finite-dimensional covariance definition needs no restriction.

For an explicit counterexample choose a positive variable R with survival P(R>t)=c t^-4(log t)^-2 for t≥e, completing its law below e, and independent equiprobable sign ε. Then Y=εR is centered, has nonzero finite variance σ² and finite fourth moment: its tail contribution to E R⁴ is 4c∫_e^∞[t(log t)²]^-1dt<∞. Let ξ=Y/σ. Take all entries of all n×floor(γn) matrices independent across n as well. For every fixed M>0, q_n=P(|ξ|>M√n) is asymptotic to c_M n^-2(log n)^-2 with c_M>0. If A_n is the event that some entry exceeds M√n, then P(A_n)=1-(1-q_n)^{n floor(γn)} is asymptotic to γc_M/(log n)²; its series diverges. The A_n are independent, so the second Borel–Cantelli lemma gives A_n infinitely often almost surely. Since ||X_n||op≥max_ij|X_n(i,j)|, λmax(X_nᵀX_n/n)≥M² infinitely often. Intersecting the probability-one conclusions for positive integer M proves limsup λmax=∞ almost surely. This refutes the literal current upper and largest-edge interfaces, with exactly their moment and aspect assumptions.

## Complete elementary uniform row-sum estimate

Let Z_ij be one infinite iid real array with EZ=0 and EZ²=v<∞. Then for every C<∞,

max_{i≤Cn} max_{k≤n}|∑_{j≤k}Z_ij|/n →0 almost surely.

The same result holds after exchanging row and column coordinates. No extra moment or logarithmic moment is needed.

Here is a complete proof. Fix ε>0, dyadic m=2^ℓ, N=2m and I=ceil(2Cm). It is enough to bound the probability that any of these I rows has a partial sum up to N exceeding x=εm in absolute value. Put r=4 and y=x/r. For the positive tail truncate W=Z1_{Z≤y}. Then EW=-E[Z1_{Z>y}]≤0 and EW²≤v. For every t>0 and every w≤y,

e^{tw}≤1+tw+(e^{ty}-1-ty)w²/y².

Indeed (e^u-1-u)/u²=∫_0^1(1-s)e^{su}ds is increasing in u. Hence Ee^{tW}≤exp(v(e^{ty}-1-ty)/y²). If ψ=v(e^{ty}-1-ty)/y², independence and finite stopping at the first partial sum exceeding x show

P(max_{k≤N}∑_{j≤k}W_j≥x)≤exp(-tx+Nψ).

For completeness, exp(t∑_{j≤k}W_j-kψ) is a nonnegative supermartingale with initial value1. Stopping at the first crossing or N preserves expectation≤1 by conditioning each finite increment. At a crossing its value is at least exp(tx-Nψ), yielding the inequality. Choose e^{ty}=1+xy/(Nv), when v>0. Since Nψ≤x/y=r, the bound is at most e^r(Nv/(xy))^r≤K m^-r. The case v=0 is trivial. The untruncated positive-tail probability is at most NP(Z>y)+K m^-r. Apply the identical proof to -Z for the negative tail. Union over rows gives

P(max_{i≤I,k≤N}|∑_{j≤k}Z_ij|≥εm)≤K_C m²P(|Z|>εm/4)+K'_C m^{1-r}.

The series over dyadic m converges: ∑_ℓ 2^{2ℓ}P(|Z|>a2^ℓ)≤K_a EZ², by summing the geometric progression up to |Z|/a under the expectation. Also ∑_ℓ 2^{(1-r)ℓ}<∞. First Borel–Cantelli proves the desired bound for every sufficiently large dyadic block. For m≤n≤2m every i≤Cn and k≤n occurs in that block, so the same estimate divided by n applies. Intersect over rational ε>0. This proves the claim.

Apply Z=ξ²-1, whose second moment is finite under Eξ⁴<∞. This gives the exact diagonal control missing at the β=1 endpoint of the book's B.25 argument, simultaneously for all top-left row and column sums, including p_n/n→γ. Changing the endpoint proof this way does not change the finite-fourth law hypothesis.

## Complete nested maximum/truncation estimate

For a nested iid array ξ with E|ξ|⁴<∞ and p_n≤Cn eventually, for every ε>0,

∑_ℓ P(max_{i,j≤C'2^ℓ}|ξ_ij|>ε2^{ℓ/2})≤K_C∑_ℓ 2^{2ℓ}P(|ξ|>ε2^{ℓ/2})<∞.

The final summability follows by summing a geometric progression under E|ξ|⁴. Consequently the maximum of the entries in X_n divided by √n tends to zero almost surely. A deterministic truncation sequence δ_n↓0 can be selected with the following stronger property: all top-left blocks equal their δ_n√n truncations eventually almost surely, and δ_n decreases more slowly than any finitely specified rates. To construct it, for each integer a≥1 choose an increasing cutoff L_a so that the tail from ℓ≥L_a of the convergent series with ε=1/a is at most 2^-a, and also impose every specified lower bound for δ on that tail by increasing L_a. On L_a≤ℓ<L_{a+1} set δ at the dyadic threshold to a sufficiently enlarged constant/a to cover the adjacent block; the resulting union probabilities have summable total. First Borel–Cantelli gives eventual equality. Monotonicity can be imposed by the step construction.

If ξhat_n=ξ1_{|ξ|≤δ_n√n} and μ_n=Eξhat_n, then Eξ=0 gives |μ_n|≤E[|ξ|1_{|ξ|>δ_n√n}]≤E|ξ|⁴/(δ_n³ n^{3/2}). For slow δ_n with δ_n^-3/n→0, the mean matrix divided by √n has norm √p_n|μ_n|→0. The truncation variance tends to1 by dominated convergence. Thus centering and normalization change all normalized singular values by o(1), via the elementary variational singular-value perturbation inequality, once that finite-dimensional inequality is supplied locally or from a checked supplier.

For the higher entry-power matrices used in the nonbacktracking recurrence, n^-2∑_{i≤Cn,j≤n}|ξ_ij|⁴ is almost surely bounded. Enclose the rectangle in a square of side ceil(C''n), enumerate the infinite array by consecutive square shells, and use the ordinary iid integrable strong law on |ξ|⁴. The square contains exactly k² entries, so its average tends to E|ξ|⁴. Consequently for every fixed f>2,

n^-f∑_{i≤Cn,j≤n}|ξ_ij|^{2f}≤(max_{i≤Cn,j≤n}|ξ_ij|/√n)^{2f-4} n^-2∑|ξ_ij|⁴→0.

For centered truncated entries the same conclusions follow from |a+b|^q≤2^{q-1}(|a|^q+|b|^q), the vanishing normalized mean, and the uniform diagonal control above; write those substitutions explicitly in the final carrier.
