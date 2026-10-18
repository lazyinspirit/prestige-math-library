# r6 local proof development: privacy, wiretap, degradable channels, erasure, and QKD

This second r6 supplement develops proofs for thm-it-quantum-private-classical-capacity-regularized, thm-it-degradable-channel-single-letter-quantum-capacity, thm-it-degradable-quantum-private-capacity-single-letter, thm-it-quantum-erasure-channel-capacities, lem-it-channel-resolvability-soft-covering, thm-it-finite-classical-wiretap-auxiliary-capacity, thm-it-degraded-wiretap-secrecy-capacity, and thm-it-qkd-composable-security-composition. It is deliberately separate from quantum-coding-proof-developments.md, whose HSW/LSD/EA sections are stable for integration. The finite quantum DPI/SSA/Holevo prerequisites are the audited resolvent/joint-convexity/twirl ladder in audit/independent-proof-notes.md. Wilde source locators: Ch. 23 for quantum wiretap/private coding and QKD distinctions; Ch. 13 and 24 for degradable coherent information and erasure channels; Portmann–Renner, arXiv:1409.3525v1, full text for abort-aware ideal/real QKD security and composition.

All logs are base 2. The channels and alphabets are finite, memoryless, and mathematical CPTP/DMC models; no infinite-dimensional or physical implementation claim is made. The note proves the strong-secrecy wiretap, degradable, erasure, and composability claims under the models stated below.

## General regularized quantum private capacity

Operational model. For n uses of N:A→B with a fixed complementary output N^c:A→E, Alice receives a uniform private message M and may use arbitrary private local randomness to prepare an input state on A^n. Bob's decoder has average block error e_n. Eve receives E^n, including the entire complementary output. A strong secrecy code has a state σ_{E^n}, independent of m, such that
max_m D(ρ_{E^n|m},σ_{E^n})≤δ_n,       D(ρ,σ)=||ρ−σ||₁/2,
with e_n→0 and δ_n→0. There is no pre-shared secret key or public forward classical aid. The codebook may be public. The quantum private capacity is the supremum of achievable liminf n⁻¹log|M| under these criteria.

For finite n define
p_n(N)=max_{finite ensembles {p_x,ρ_x on A^n}}
[I(X;B^n)−I(X;E^n)]_{(id_X⊗N^⊗n)(cq ensemble)}.                (PC)
A maximum over finite ensembles exists and needs only at most (dim A^n)²+1 letters. To prove this, write
I(X;B)−I(X;E)=S(N(ρ̄))−S(N^c(ρ̄))+Σ_xp_x g(ρ_x),
g(ρ)=S(N^c(ρ))−S(N(ρ)).
The objective depends on an ensemble only through the average state ρ̄ and the scalar Σp_xg(ρ_x). The real affine state space has dimension D²−1 for D=dim A^n; append the one g-coordinate to embed the needed point in R^{D²}. The finite-dimensional Carathéodory argument gives at most D²+1 points: if a convex representation uses more than d+1 points in R^d, affine dependence provides coefficients summing to zero and with zero weighted vector; vary the weights along that dependence until one becomes zero, and iterate. Compactness of the fixed-cardinality probability/state parameter space and finite entropy continuity attain the maximum.

Direct part. For any finite ensemble on A^k, use the packing-plus-covering construction above on the block channel N^⊗k, with β_x=N^⊗k(ρ_x), ε_x=(N^c)^⊗k(ρ_x). It gives private message rate arbitrarily close to I(X;B^k)−I(X;E^k), with maximum-over-message average decoding error and maximum-over-message trace-norm leakage to a fixed Eve state both tending to zero. Distinct codeword deletion is harmless for this classical private task and may be omitted. Moreover, with fixed positive rate margins, every atypical probability, packing overlap, soft-covering variance term, and collision fraction above decays exponentially by the finite bounded concentration lemma and displayed rate exponents. A codebook with exponentially small sum error/leakage/collisions exists by Markov; both expurgations preserve an exponential bound (with a smaller exponent). Thus the per-message Eve trace distance δ_n can be taken exponentially small. The conditional-entropy estimate below then gives I(M;E^n)≤2δ_n log|M|+(1+δ_n)h₂(δ_n/(1+δ_n))→0. This direct code satisfies the unnormalized strong mutual-information secrecy criterion as well as the explicit per-message trace criterion. Repeating the k-use super-symbol and then letting k grow achieves every rate below sup_k p_k(N)/k.

Converse. Let ρ_m be Alice's average encoded input state for message m, after tracing out her private local randomness. This gives an ensemble with
I(M;B^n)−I(M;E^n)≤p_n(N).
Fano and the measurement/Holevo bound give
(1−e_n)logM≤I(M;B^n)+h₂(e_n)
≤p_n(N)+I(M;E^n)+h₂(e_n).                                         (PC1)
We bound the leakage term without a dimension-dependent estimate on E^n. If every message output has D(ρ_{E^n|m},σ)≤δ, then the joint cq state ω_ME is within normalized trace distance δ of π_M⊗σ:
D(ω_ME,π_M⊗σ)=M⁻¹Σ_mD(ρ_{E|m},σ)≤δ.

Here is the finite conditional-entropy continuity estimate used:
|S(A|B)_ρ−S(A|B)_σ|≤2δ log d_A+(1+δ)h₂(δ/(1+δ)),
for D(ρ,σ)=δ and dim A=d_A. Let Δ=ρ−σ=Δ_+−Δ_- be its Jordan decomposition. Each positive part has trace δ; if δ>0 set τ_±=Δ_±/δ. Then
ω=(ρ+δτ_-)/(1+δ)=(σ+δτ_+)/(1+δ).
For t=δ/(1+δ), conditional-entropy concavity gives S(A|B)_ω≥(1−t)S(A|B)_ρ+tS(A|B)_τ-. The upper mixing inequality is S(A|B)_ω≤(1−t)S(A|B)_σ+tS(A|B)_τ++h₂(t): flag the mixture by a classical J; the excess over the average conditional entropy is I(A;J|B), between zero (SSA) and H(J)=h₂(t), since H(J|AB)≥0 for classical J by χ(J;AB)≤H(J). Subtract and use |S(A|B)|≤log d_A to get the displayed estimate; the range follows from subadditivity above and, for the lower bound, purify AB to C and use S(B)=S(AC)≤S(A)+S(C)=S(A)+S(AB). Swap ρ,σ for the reverse inequality. The δ=0 case is immediate.

Apply this with A=M, d_A=M, ρ=ω_ME, σ=π_M⊗σ_E. Since S(M|E)_{π⊗σ}=logM,
I(M;E)≤2δ_n logM+(1+δ_n)h₂(δ_n/(1+δ_n)).
Combining with (PC1),
(1−e_n−2δ_n)logM
≤p_n(N)+h₂(e_n)+(1+δ_n)h₂(δ_n/(1+δ_n)).                         (PC2)
Also 0≤p_n≤nlog dim B: a one-letter ensemble gives zero, and I(X;B^n)≤nlog dim B while I(X;E^n)≥0. Thus (PC2) first bounds logM/n, then implies the converse rate bound by lim p_n/n.

If the operational definition instead states strong secrecy directly as I(M;E^n)→0, (PC1) immediately gives the same converse without (PC2); the direct construction above has exponentially small per-message trace distance and hence I(M;E^n)→0, so the capacity formula is the same under either named strong-secrecy criterion.

Product ensembles give p_{n+m}≥p_n+p_m and p_n≥0. Fekete's elementary argument used above gives lim_n p_n/n=sup_n p_n/n. With the direct part and (PC2),
P(N)=lim_n p_n(N)/n=sup_n p_n(N)/n.
This is a regularized finite-dimensional theorem. It does not assert a generic single-letter formula, nor equate private and quantum capacities without degradability.

## Degradable channels: single-letter quantum and private capacities

A finite-dimensional channel N:A→B with finite complement N^c:A→E is degradable if there is a finite CPTP map D:B→E such that N^c=D∘N. This definition is representation-independent up to the usual finite environment isometry; fix one Stinespring representation for the proof.

For any ensemble {p_x,ρ_x}, entropy expansion gives
Ic(ρ̄,N)=I(X;B)−I(X;E)+Σ_xp_x Ic(ρ_x,N).                         (D1)
Indeed the right side is S(B̄)−ΣpS(B_x)−S(Ē)+ΣpS(E_x)+Σp[S(B_x)−S(E_x)]=S(B̄)−S(Ē). Degradability and quantum data processing give I(X;B)≥I(X;E), so (D1) proves concavity of coherent information. Apply it to a spectral pure-state ensemble of any ρ. Every pure input has pure BE output and hence Ic=0; therefore Ic(ρ,N)≥0 for all ρ.

For two degradable channels N_i:A_i→B_i with complements E_i obtained by D_i, a pure R A₁A₂ input gives
Ic(ρ,N₁⊗N₂)
=Ic(ρ_A₁,N₁)+Ic(ρ_A₂,N₂)−I(B₁;B₂)+I(E₁;E₂).                    (D2)
This follows by expanding S(B₁B₂) and S(E₁E₂) using mutual information. The product degrading map D₁⊗D₂ and QMI DPI imply I(B₁;B₂)≥I(E₁;E₂), so joint coherent information is at most the sum of its marginal values. Product inputs attain the sum of the two maxima. Thus max coherent information is additive for degradable channels, and for N itself a_n=n max_ρ Ic(ρ,N). The regularized theorem already proved therefore specializes to
Q(N)=max_ρ Ic(ρ,N).

For the same degradable N, (D1) and nonnegativity of each Ic(ρ_x,N) imply every finite-ensemble private information is at most Ic(ρ̄,N)≤Q(N). A pure spectral ensemble of a maximizing state has Ic(ρ_x,N)=0 for every letter and attains exactly Q(N). Thus p_1(N)=Q(N). The tensor power N^⊗n is degradable by D^⊗n, so the same argument gives p_n(N)=Q(N^⊗n)=nQ(N). Consequently quantum private capacity equals quantum capacity and is additive on this class:
P(N)=Q(N)=max_ρ Ic(ρ,N).
This conclusion uses degradability at every step; it is not a general channel identity.

## Qudit erasure channel capacities

Let A≅C^d, d≥2, let |e〉 be orthogonal to B≅C^d, and define
N_ε(ρ)=(1−ε)ρ_B⊕ε Tr(ρ)|e〉〈e|, 0≤ε≤1.
A finite Stinespring isometry is
V|ψ〉=√(1−ε)|ψ〉_B|e〉_E+√ε|e〉_B|ψ〉_E.
The complementary channel is the erasure channel with retention probability ε (erasure probability 1−ε), up to swapping the output labels.

Quantum capacity. For any input ρ,
S(N_ερ)=h₂(ε)+(1−ε)S(ρ),
S(N_ε^cρ)=h₂(ε)+εS(ρ),
so Ic(ρ,N_ε)=(1−2ε)S(ρ).
When ε≤1/2, N_ε is degradable: from B, keep its quantum state with probability ε/(1−ε) and otherwise replace it by |e〉; this extra-erasure probability is (1−2ε)/(1−ε), and the resulting retention is ε, exactly N_ε^c. The degradable formula gives Q=(1−2ε)log d, attained at ρ=I/d.
When ε≥1/2, N_ε is antidegradable: from the complementary output, retain its quantum state with probability (1−ε)/ε and otherwise erase; this gives Bob's retention probability 1−ε. For any input, the complement can therefore simulate Bob. Coherent-information data processing gives I(R⟩E)≥I(R⟩B, while purity of RBE gives I(R⟩E)=−I(R⟩B); hence Ic≤0. The same argument applies to every tensor power, and a pure input has Ic=0, so all block maxima vanish. Thus Q=max{0,(1−2ε)log d}.

Classical capacity. The general HSW formula is regularized, so evaluate each tensor power. For an n-use input state and any ensemble {p_x,ρ_x}, an erasure pattern S⊆{1,…,n} appears in an orthogonal output flag with probability
p_S=(1−ε)^|S| ε^{n−|S|},
independent of x; conditioned on S, the surviving state is Tr_{S^c}ρ_x. The block-diagonal cq entropy identity gives exactly
χ(X;B^n)=Σ_S p_S χ({p_x,Tr_{S^c}ρ_x})
≤Σ_Sp_S |S|log d
=n(1−ε)log d.
The product computational-basis ensemble attains equality: given S, the surviving basis symbols are perfectly distinguishable and uniformly distributed, so χ=|S|log d. Therefore χ(N_ε^⊗n)=n(1−ε)log d for every n, and C=(1−ε)log d.

Entanglement-assisted classical capacity. For any purification RA of ρ, append the erasure flag F. F is independent of R, and conditioned on success Bob receives A; conditioned on erasure he receives a fixed state. Thus
I(R;B F)=(1−ε)I(R;A)+ε·0=2(1−ε)S(ρ)≤2(1−ε)log d.
A maximally entangled input attains equality. The EA formula gives C_EA=2(1−ε)log d.



## Finite classical channel resolvability and wiretap capacity

Finite-DMC resolvability lemma. Let W(z|u) be a finite channel, P_U an input law, P_Z=Σ_uP_U(u)W(·|u), and draw L=⌈2^{nR₀}⌉ independent codewords U^n(ℓ)∼P_U^⊗n. The induced mixture is
Q_{Z^n}=L⁻¹Σ_ℓ W^⊗n(·|U^n(ℓ)).
For every γ>0,
E TV(Q_{Z^n},P_Z^⊗n)
≤Pr{i(U^n;Z^n)>n(I(U;Z)+γ)}
 + 1/2·2^{-n(R₀−I(U;Z)−γ)/2},                                (RSL)
where i(u^n;z^n)=log[W^⊗n(z^n|u^n)/P_Z^⊗n(z^n)] on the joint support and TV is one-half the ℓ₁ distance.

Proof. For each codeword/output pair define L_ℓ(z)=W^n(z|U^n(ℓ))/P_Z^n(z) and truncate it to \tilde L_ℓ=L_ℓ 1{i≤n(I+γ)}. The expected missing mass of the random mixture is exactly the atypical probability α_n in (RSL). The mean truncated output is a sub-probability measure below P_Z^n and has missing mass α_n. For fixed z, E_U L(U,z)=1 and \tilde L≤2^{n(I+γ)}, so E_U\tilde L²≤2^{n(I+γ)}E_U\tilde L. Independence yields
E|L⁻¹Σ_ℓ(\tilde L_ℓ(z)−E\tilde L_ℓ(z))|
≤√(L⁻¹E\tilde L(U,z)²).
Multiply by P_Z^n(z), sum over z, and use Cauchy–Schwarz to obtain at most 2^{-n(R₀−I−γ)/2}. The two missing-mass terms each contribute α_n/2 in TV; the fluctuation term contributes half its ℓ₁ bound. This proves (RSL). On the finite positive support, i(U_i;Z_i) is bounded. Its iid mean is I(U;Z), so for every γ>0 an exponential Markov bound gives α_n≤e^{-c n}: the moment generating function of i−I−γ has value 1 at parameter zero and negative derivative there, hence is below one at some small positive parameter. Thus R₀>I(U;Z) gives exponentially small expected resolvability error.

Classical wiretap model. Let W(y,z|x) be a finite memoryless channel with main output Y and Eve output Z. A code has uniform message M, a stochastic encoder with private local randomness, Bob's decoder, average error e_n, and strong secrecy I(M;Z^n)→0. No preshared secret key or public forward aid is given. Its capacity is
C_s=max_{finite P_{U,X}: U−X−(Y,Z)} [I(U;Y)−I(U;Z)].                 (CW)
The maximum can be restricted to |U|≤|X|. The main/eavesdropper output pair W(y,z|x) is only used to define the wiretap channel; the coding arguments need its marginals.

Achievability. Fix P_{U,X} and a rate R<I(U;Y)−I(U;Z). Choose R₀ with
I(U;Z)<R₀<I(U;Y)−R.
For every message m and randomization label ℓ∈{1,…,L}, draw U^n(m,ℓ) iid P_U^⊗n, independently across all pairs; M=⌊2^{nR}⌋ and L=⌈2^{nR₀}⌉. Alice privately draws X_i according to P_{X|U}(·|u_i(m,ℓ)) and sends X^n. Bob sees the finite DMC U→Y with W_{Y|U}(y|u)=Σ_xP(x|u)W_Y(y|x). A threshold decoder recovers the pair (m,ℓ) with vanishing average error because its total rate R+R₀+o(1) is below I(U;Y): accept the unique codeword satisfying
log[W_{Y|U}^n(y^n|u^n)/P_Y^n(y^n)]≥log(ML)+nγ.
For a sent codeword the missed-threshold probability tends to zero by the law of large numbers. For any false independent codeword and fixed y^n, the expectation of the likelihood ratio is one; Markov and a union bound give false-alarm probability at most 2^{-nγ}. Thus the expected average error vanishes (exponentially with a fixed rate gap).

For each m, Eve's output after averaging over ℓ is
Q_{Z^n|m}=L⁻¹Σ_ℓ W_{Z|U}^n(·|U^n(m,ℓ)).
By (RSL), the expected average over messages of TV(Q_{Z^n|m},P_Z^⊗n) decays exponentially because R₀>I(U;Z). There is one deterministic public codebook for which the sum of average error and average leakage tends to zero. Expurgate messages whose sum of their decoder error and Eve TV leakage exceeds the square root of this average; the retained message rate still tends to R and both quantities tend to zero uniformly over retained messages. The retained average Eve state is exponentially close in TV to P_Z^⊗n. Its mutual-information leakage also tends to zero: the retained joint law P_{MZ^n} is within exponentially small TV of P_M⊗P_Z^⊗n; its true product P_M⊗P_{Z^n} differs by at most another such amount. The conditional-entropy continuity bound proved in the quantum-private section, restricted to classical registers M, gives I(M;Z^n)≤2η_n log|M|+(1+η_n)h₂(η_n/(1+η_n)) for that joint/product distance η_n. Since η_n is exponential and log|M|=O(n), the leakage tends to zero. This proves strong secrecy, not only normalized leakage.

Finite auxiliary reduction. For q∈Δ(X), write g(q)=I_q(X;Y)−I_q(X;Z). Given P_{U,X}, let q_u=P_{X|U=u}, q̄=P_X. Markovity gives
I(U;Y)−I(U;Z)=g(q̄)−Σ_up(u)g(q_u).
The objective is preserved by retaining q̄ and Σp(u)g(q_u). Map each q∈Δ(X) to the vector consisting of its first |X|−1 coordinates and g(q), in R^m, m=|X|. The map is continuous, and Δ(X) is path connected, so its image C is path connected. The average vector lies in conv C. A connected-support refinement of Carathéodory gives at most m points: first ordinary Carathéodory gives m+1 points. If there are already at most m, stop; if a weight is zero or the points are affinely dependent, affine-dependence elimination reduces the support. Otherwise the m+1 points are affinely independent with positive weights. Join the first point continuously within C to the second, keeping the other m−1 points fixed. Until affine dependence occurs, the unique barycentric coordinates of the fixed target vector vary continuously. If a coordinate first reaches zero, the target is in the convex hull of the remaining m points. If affine dependence occurs first, take a convergent subsequence of the nonnegative barycentric coordinates (they sum to one); its limit represents the target by dependent points, which affine-dependence elimination reduces to m. At the endpoint of the path the first two points coincide, so affine dependence must occur. This proves the m-point bound. Thus |U|≤|X| preserves q̄ and average g exactly, and the maximum is attained by compactness with zero weights allowed.

Converse. For a stochastic n-use encoder, define V_i=(Y^{i−1},Z_{i+1}^n). The telescoping quantities
A_i=I(M;Y^i,Z_{i+1}^n),   i=0,…,n,
satisfy A_0=I(M;Z^n), A_n=I(M;Y^n), and by the chain rule
I(M;Y^n)−I(M;Z^n)
=Σ_i [I(M;Y_i|V_i)−I(M;Z_i|V_i)].                               (CS)
For each v with positive probability, memorylessness gives the Markov chain M−X_i−(Y_i,Z_i) under the conditional law given V_i=v: once X_i is fixed, the ith channel output is independent of the message and all other-coordinate outputs. Thus each bracket averaged over v is an average of valid single-letter objectives I(U;Y)−I(U;Z) with U=M and input law P_{M,X_i|V_i=v}; it is at most C_s. Hence the right side of (CS) is ≤nC_s. Fano and strong secrecy give
(1−e_n)log|M|≤I(M;Y^n)+h₂(e_n)
≤nC_s+I(M;Z^n)+h₂(e_n).
Divide by n and let e_n→0, I(M;Z^n)→0. This proves (CW).

Physically degraded wiretap channel. If X→Y→Z, then for every U−X−Y−Z,
I(U;Y)−I(U;Z)=I(U;Y|Z).
Moreover
[I(X;Y)−I(X;Z)]−[I(U;Y)−I(U;Z)]
=I(X;Y|U)−I(X;Z|U)≥0
by conditional data processing through Y→Z for each u. Thus U cannot improve the objective; U=X attains the maximum, and
C_s=max_{P_X}[I(X;Y)−I(X;Z)].
The general wiretap code above with U=X proves achievability under the same strong-secrecy criterion.

## Composable QKD security: abort, transcript, and hybrids

Resource assumptions. The insecure quantum channel is controlled by Eve. The public classical channel is authenticated; its transcript C is public to Eve and any outside distinguisher. If authentication is not an ideal resource, an authentication protocol with error ε_auth must be analyzed separately. The ideal key resource outputs a uniform shared key on success or abort; Eve/simulator may choose the abort flag, so security does not imply availability or force acceptance. On abort, both key registers are replaced by a fixed dummy symbol ⊥. All correctness and secrecy bounds are required uniformly over every allowed Eve/environment strategy and external quantum context, with the same public abort flag in the real and simulated resources.

Let F∈{acc,abort}, let E denote Eve's entire quantum side information (including any external reference retained by a distinguisher), and let C denote the complete public transcript. The stated bounds hold uniformly when the protocol is placed in any allowed external quantum context; its retained registers are included in E. A precise secrecy error is the abort-weighted normalized distance
ε_sec=Pr[F=acc]·D(ρ_{K_A C E|acc}, τ_K⊗ρ_{C E|acc}),
D=||·||₁/2,
where τ_K is uniform on the declared key space. Correctness error is
ε_cor=Pr[F=acc and K_A≠K_B].
If Pr[F=acc]=0, define ε_sec=0 without using a conditional state on the null event. The secrecy expression compares Alice's key, the public transcript and Eve jointly, so it does not omit transcript leakage. Abort branches are left unchanged and the simulator reproduces their probability, transcript and Eve side information.

Hybrid proof. Let R₀ be the real output state, with Alice's and Bob's keys and all outside registers. Construct R₁ by replacing Bob's key by Alice's on acceptance and setting both to ⊥ on abort. These states differ only on the event of acceptance with unequal keys. Since the mismatch event is a classical flag, block-decompose by that event; the trace distance of two normalized states is at most one, hence D(R₀,R₁)≤ε_cor. Construct R₂ from R₁ by replacing the common accepted key by an independent uniform key while preserving the joint marginal of (F,C,E) and the abort branch. On acceptance, the state distance is exactly the secrecy distance above; orthogonal abort/accept blocks weight it by Pr[F=acc]. Therefore D(R₁,R₂)=ε_sec. An explicit simulator runs the prescribed protocol internally through the same adversarial insecure-channel interface and ideal authenticated public channel, forwards the resulting public transcript and Eve's side system, and tells the ideal key resource to abort exactly when that internal run aborts. On success it discards the internal key registers; it cannot inspect or alter the independent uniform key supplied by the ideal resource. This produces R₂. Triangle inequality gives
D(R₀,R₂)≤ε_cor+ε_sec.                                             (QKD)

Any distinguisher is a CPTP map followed by a binary POVM, so its distinguishing advantage is at most trace distance by measurement contractivity/Holevo–Helstrom; the resource bound therefore holds against arbitrary quantum side information and arbitrary subsequent processing. If the public channel is implemented by an authentication scheme within ε_auth of an ideal authenticated channel, replace that channel in one more hybrid and use contractivity; the total error is at most ε_cor+ε_sec+ε_auth. Any authentication key is an additional resource and is counted as consumed or recycled only under that authentication scheme's own proof; it is not supplied for free by the QKD theorem. Without authentication, a man-in-the-middle can alter the public transcript and this QKD theorem's authenticated-channel premise is absent.

Composition. Suppose resources R_i are each within ε_i distinguishing distance of ideal resources I_i in every allowed external context. In a sequential or parallel protocol, define hybrids H_j with the first j components ideal and the remainder real. The transition H_{j−1}→H_j places the i-th resource in a fixed interactive CPTP context, so contractivity bounds that hybrid distance by ε_j. Telescoping the hybrids and applying triangle inequality gives total real/ideal distance at most Σ_i ε_i. Transcript, abort, and Eve's retained quantum memory remain part of the hybrid state, so no independence assumption is made between sequential protocol rounds. A one-time-pad use is a concrete instance: XOR with a key is a CPTP map, so encrypting with a key within ε of uniform and independent preserves at most ε distinguishing error; correctness failure adds its own probability by a hybrid.

