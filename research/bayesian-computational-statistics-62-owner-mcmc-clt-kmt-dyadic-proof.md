# Dyadic assembly of a fixed-dimensional bounded-vector approximation

This note owns only the coupling assembly. It proves the probabilistic and deterministic assembly from explicit local transport estimates. It does not assert that nonsmooth bounded laws satisfy those estimates: they generally do not. The conditional-density branch must prove the local estimates for the smooth or partly smooth rows used by the smoothing branch.

Source checked: A. Yu. Zaitsev, *Multidimensional version of the results of Komlós, Major and Tusnády for vectors with finite exponential moments*, ESAIM: Probability and Statistics 2 (1998), 41–108, <https://www.numdam.org/item/PS_1998__2__41_0.pdf>. I visually read printed pp. 66–68 (PDF pp. 26–28), §5, equations (5.1)–(5.13), Lemma 5.1 and Corollary 5.3. The construction below is a stopped-tree version of (5.7)–(5.11). The marginal-law argument and the elementary maximum estimate are supplied here rather than delegated to the source's assertion. The resulting logarithmic powers are deliberately nonoptimal.

## 1. Exact analytic interface

Fix dimension d≤2. All constants below may depend on fixed d and fixed interface constants. Let M=2^J, τ≥1, and let ξ_1,…,ξ_M be independent centered vectors with covariance I. They may have different laws. For every interval I in the usual dyadic partition write U_I=Σ_{i∈I}ξ_i. For a nonterminal interval with left and right halves write D_I=U_{I_L}−U_{I_R}. Assume the following.

(B) Uniform Bernstein concentration for all contiguous partial sums of this row:

P(|Σ_{i=a+1}^{a+m}ξ_i|>C_B[√(mt)+τt])≤C_B exp(−c_B t),  t≥1.

It suffices to have this for the O(M log M) intervals actually used below. Bounded increments |ξ_i|≤Cτ with covariance I imply (B), by the scalar Bernstein inequality in each fixed coordinate and a union bound. An analytic mgf estimate log E exp(θ·ξ_i)≤C|θ|² for |θ|≤c/τ also suffices.

(T0) There is a measurable root transport R, defined on a vector G~N(0,MI), such that R(G) has law U_[1,M]. On the event |R(G)|≤c_T M/τ and M≥C_T τ²,

|R(G)−G|≤C_T τ[1+|R(G)|²/M].

(T1) For each dyadic interval I of length s, there is a jointly measurable family T_{I,u} taking a fresh Z~N(0,sI) to the conditional law of D_I given U_I=u. For almost every u under the parent law, if s≥C_T τ² and |u|, |T_{I,u}(Z)|≤c_T s/τ, then

|T_{I,u}(Z)−Z|≤C_T τ[1+max(|u|²,|T_{I,u}(Z)|²)/s].

The estimates are stated in target values, as in the smooth conditional-quantile branch. No estimate in Gaussian values is needed. Versions on parent-null sets can be defined arbitrarily. The necessary root and split maps are coordinatewise Rosenblatt quantile maps. Their construction, analytic bounds, and smooth-class hypotheses are separate obligations. At a split the relevant joint vector (U_I,D_I) has dimension 2d≤4; its covariance is s I_{2d}, because the two halves each have covariance (s/2)I. The ordinary Gaussian parent and split coordinates are independent.

## 2. Finite coupling with probability M^{-A}

For every fixed A>0, under (B), (T0), and (T1), there is a coupling of the full independent row with independent g_1,…,g_M~N(0,I) such that

P(max_{k≤M}|Σ_{i≤k}(ξ_i−g_i)|>C_A τ log²(eM))≤C_A M^{-A}.

Constants are uniform over rows obeying the same interface. The full argument follows.

Choose L=a_A log(eM), with a_A sufficiently large for the union bounds below. Choose H sufficiently large in terms of C_B,c_B,C_T,c_T, independently of M and τ. Let m_0 be the least power of two ≥Hτ²L. First suppose m_0<M, so m_0<2Hτ²L and m_0 divides M.

Generate independent Gaussian primitives: one G_root~N(0,MI) and one Z_I~N(0,|I|I) for every dyadic I of length greater than m_0. Set V_root=G_root and U_root=R(G_root). Descending the tree, when U_I,V_I are present, set

D_I=T_{I,U_I}(Z_I),   U_{I_L}=(U_I+D_I)/2,   U_{I_R}=(U_I−D_I)/2,

V_{I_L}=(V_I+Z_I)/2,   V_{I_R}=(V_I−Z_I)/2.

The primitive Z_I is independent of the entire already exposed tree. Thus conditional on the exposed parents, the U split has exactly its required conditional distribution. Distinct splits at the same level use independent primitives.

At each terminal interval I of length m_0, sample a vector of ξ increments from the regular conditional distribution of the original independent increments in I given their sum U_I. Use independent fresh randomization for different terminal intervals. Such conditional laws exist because finite-dimensional Euclidean spaces are standard Borel. Their dependence on U_I can be chosen measurable. Independently sample Gaussian increments in I conditional on sum V_I, also using independent fresh randomization across terminal intervals. Explicitly, if h_i are fresh iid N(0,I) for i∈I, put g_i=V_I/m_0+h_i−m_0^{-1}Σ_{j∈I}h_j. This has the required Gaussian bridge law.

### Marginal laws, including independence

For the original independent row, conditional on the vector of sums of disjoint blocks, the subvectors within those blocks are conditionally independent: their joint probability kernel is the product of their individual conditional kernels. This follows first for product indicator functions by independence and disintegration and then for all Borel sets by the monotone-class theorem. Apply this fact at each binary split. Given the parent sums, the desired conditional law of all child sums factors over parents, and the conditional law within each parent is exactly the law specified by D_I conditioned on U_I. Therefore induction down the levels gives the same joint law for the constructed terminal sums as for the corresponding sums of the original independent row. Applying the terminal product kernels recovers the original joint product law of all ξ_i. This proves full independence of increments, not merely correct block marginals.

For Gaussians, at every split (V_I±Z_I)/2 are jointly Gaussian, centered with covariance (s/2)I each and zero cross covariance. As V_I is independent of all unexposed primitives, induction gives mutually independent Gaussian sums at each level. The terminal bridge disintegration then recovers the joint product N(0,I) law of the g_i. There is no claim of independence between the two coupled rows.

### One good event controls every transport

Using (B), take the event on which all dyadic sums U_I satisfy

|U_I|≤C[√(|I|L)+τL].

There are fewer than 2M dyadic intervals. Also require the same Bernstein bounds for all within-terminal prefixes of ξ, and the Gaussian bounds C√(m_0L) for all within-terminal prefixes of g. There are at most M such prefixes of each type. Their unconditional distributions are the ordinary sums by the marginal-law argument. A union bound, with a_A enlarged, gives failure probability ≤C_A M^{-A}. Dependence between these events is irrelevant.

For every active split with s=|I|≥2m_0, the event gives

|U_I|≤C[√(sL)+τL],  |D_I|≤|U_{I_L}|+|U_{I_R}|≤C[√(sL)+τL].

Since s≥Hτ²L, these are at most c_T s/τ when H is sufficiently large: the ratios are bounded by C/√H+C/H. Also (|U_I|²+|D_I|²)/s≤C L, since τ²L²/s≤L/H. The same reasoning applies to the root. Consequently every active node satisfies

|D_I−Z_I|≤CτL,  |U_root−V_root|≤CτL.

This uses only target concentration. It avoids an unproved transfer of Gaussian tail bounds through the transport.

### Deterministic prefix bound

Let E(k)=Σ_{i≤k}(ξ_i−g_i), initially at terminal boundaries. At the root E(0)=0 and E(M)=U_root−V_root. At each active interval [a,b] with midpoint h,

E(h)=[E(a)+E(b)]/2+[D_I−Z_I]/2.

Thus introducing one finer level increases the maximum norm over grid points by at most half the maximum split discrepancy at that level, by convexity of the Euclidean norm. After at most J levels,

max_{terminal boundaries k}|E(k)|≤|U_root−V_root|+(1/2)Σ_levels max_{I at level}|D_I−Z_I|≤CτL(1+J).

For a k inside one terminal interval, compare it with the interval's left boundary. The two within-terminal prefix norms are at most C[√(m_0L)+τL] and C√(m_0L), respectively. Since m_0<2Hτ²L, their sum is ≤CτL. This proves the stated maximum bound.

If m_0≥M, use an independent product coupling of the full rows and do not invoke any transport. Then M≤m_0<2Hτ²L, unless m_0=1, which is trivial. A union bound over all initial prefixes gives maximum discrepancy ≤C[√(ML)+τL]≤CτL with the same failure probability. Thus the proof covers small M and large τ uniformly.

For a non-dyadic target n, perform the construction at M=2^{ceil(log_2 n)}<2n and discard the excess increments. The same conclusion holds with n in the bound and failure probability C_A n^{-A}.

## 3. Two target rows and arbitrary terminal laws

Suppose two independent-increment rows ξ and η each satisfy (B), (T0), and (T1) with the same constants, without requiring their single-increment laws to agree. Construct both target trees from the same Gaussian primitives. Each target has its correct product marginal by the preceding argument. Their root and split discrepancies are bounded by the sums of the two discrepancies from the common Gaussian root/splits. Union the two good events. Therefore

P(max_{k≤M}|Σ_{i≤k}(ξ_i−η_i)|>C_A τ log²(eM))≤C_A M^{-A}.

The terminal conditional distributions may be completely different, nonsmooth, or mixed. The only transport assumptions are on nodes strictly above the stopping level. Unconditional concentration of the two completed target rows supplies the terminal-prefix bounds. This is exactly the feature needed by the half-anchor replacement construction: no conditional concentration inside a terminal block is assumed.

This is a coupling-existence statement between row laws. It can be applied while preserving an already realized row. Indeed disintegrate the coupling law as P_ξ(dx)K(x,dy), and extend the existing probability space by sampling y from K(x,·). All prior random variables, including an already coupled Gaussian row, retain their joint distribution. Iterating finitely many such kernels realizes a chain of pairwise prescribed couplings on one space. A union bound and the triangle inequality then add their maximum errors; no independence between successive errors is required.

## 4. Gaussian half-anchor replacement, conditional on its analytic inputs

Here is the simpler final assembly interface agreed with the smoothing branch. Let the raw independent increments be centered with covariance I and scale τ≤CB. At a stage of compressed length m, consider the target row consisting of raw increments at even positions and independent N(0,I) increments at odd positions. Assume this mixed row satisfies (B), (T0), and (T1) uniformly at all nodes above the stopping threshold. Each half of every active split contains half Gaussian anchors; their covariance gives the analytic Fourier smoothing. The smoothing branch supplies that verification. Nonidentical raw laws are permitted.

Begin with a product Gaussian row of ambient length M. Couple the mixed target row directly to this Gaussian row using §2, then freeze its raw even positions and retain only its Gaussian odd positions as the active row. Repeat on the compressed active row. This uses the one-target Gaussian coupling, so the two-target comparison of §3 is available but unnecessary. To realize a prescribed stage coupling while preserving an already realized Gaussian row and all prior variables, disintegrate that stage coupling over its Gaussian marginal and sample its target conditional kernel using fresh randomness. The full target row retains a product marginal at each stage: the kernel acts only on an active subrow independent of its complement and uses fresh randomness. At an original prefix, the change equals the change over an initial prefix of the compressed active subrow.

The confidence parameter must use ambient length: at every compressed length m≤M take L=a_A log(eM), never a_A log(em). The proof of §2, with m in place of M for row length and this larger L in the good event, gives failure at most C m exp(−cL) and error at most CτL log(em)≤Cτlog²(eM). Stop when m≤Cτ²L. At that point replace the remaining Gaussian subrow by an independent raw row with the required individual laws. Bernstein and Gaussian concentration over its at most m prefixes give residual error at most C[√(mL)+τL]≤CτL, with failure at most C m exp(−cL). If this stopping condition holds at the initial stage the same argument applies immediately.

There are at most log_2 M replacement stages. Union their bad events and enlarge a_A, obtaining total failure at most C_A M^{-A}. Add maximum prefix errors by the triangle inequality, obtaining total error at most C_A τ log³(eM). Therefore, **conditional on the analytic Gaussian-anchor interface supplied by the smoothing branch**, the final raw row and the original independent Gaussian row satisfy

P(Δ_M>C_A B log³(eM))≤C_A M^{-A}.

This argument only uses Bernstein concentration of raw increments and validity of the mixed-row local transports. It does not use a hard bound on the Gaussian anchors, equal raw laws, matching third moments, or two-row density comparison. Those are not hidden additional assumptions. It also does not infer mixed-row local estimates from covariance and boundedness alone.

## 5. Countable independent epochs

If a single infinite coupling is needed for a fixed bounded iid law, partition time into epochs of sizes 1,2,4,8,… and take independent copies of its finite coupling for each epoch. A countable product probability space realizes them. Each whole sequence has its correct iid marginal, because the epoch row laws are products and different epochs are independent. Taking A=3, the failure probabilities are summable over epoch index. Borel–Cantelli gives, almost surely, all sufficiently large epochs good. On epoch j, the finite bound from §4 is C B(j+1)^3. A prefix ending in epoch j is bounded by the sum of all preceding full-epoch errors and its current partial-epoch error. Thus it is at most a finite random constant plus C B Σ_{r≤j}(r+1)^3=O(B(j+1)^4). Since j=O(log n),

max_{k≤n}|Σ_{i≤k}(ξ_i−g_i)|=O(B log⁴(en)) almost surely.

If only the smooth-law theorem of §2 is used, the same argument gives O(τ log³(en)). The epoch argument requires no consistency between different finite-N couplings, and does not claim that directly taking an arbitrary subsequential limit preserves finite-N error events.
