# r6 local proof development: cq packing, quantum transmission, and entanglement assistance

This note supplies local finite-dimensional proofs for the HSW, LSD, and entanglement-assisted (EA) capacity obligations, corresponding to thm-it-hsw-classical-quantum-channel-capacity, thm-it-quantum-channel-capacity-regularized-coherent-information, and thm-it-entanglement-assisted-classical-capacity. It is a mathematical supplement for integration; it does not edit any shared/canonical information-theory item. All logarithms in this note are base 2, all systems and alphabets are finite and nonempty, and all channels are finite-dimensional CPTP maps on full operator spaces. A channel is an abstract map; no laboratory-realization assumption is used.

The proof locators are Wilde, *From Classical to Quantum Shannon Theory*, arXiv:1106.1445v8: typical projectors, Ch. 14; packing and Hayashi–Nagaoka, Ch. 16, pp. 483–494; cq HSW, Ch. 20, pp. 562–573; EA coding/converse, Ch. 21, pp. 587–604; private coding, Ch. 23, pp. 637–660; quantum capacity, Ch. 24, pp. 661–671. Devetak, quant-ph/0304127v6, pp. 9–20, is the independent private/quantum capacity cross-check. These are locators only: the arguments below include the finite lemmas used by the capacity proofs.

## Finite interfaces and conventions

For a state ρ, S(ρ)=−Tr ρ log ρ, with 0 log 0=0. For a finite ensemble (p_x,ρ_x), put ρ̄=Σ_x p_xρ_x and χ= S(ρ̄)−Σ_xp_xS(ρ_x). The associated cq state has entropy H(p)+Σp_xS(ρ_x), so χ=I(X;B). This identity follows by diagonalizing each orthogonal classical block. A measurement is the CPTP map ρ↦Σ_yTr(ρΛ_y)|y〉〈y| for a finite POVM {Λ_y}. The measurement/Holevo bound follows from finite quantum relative-entropy DPI applied to each pair (ρ_x,ρ̄), then summing: I(X;Y)≤χ. The finite QRE-DPI proof contract is the independent resolvent/joint-convexity/twirl ladder in audit/independent-proof-notes.md, “Quantum relative-entropy DPI: finite-dimensional resolvent ladder”; finite SSA follows there by applying partial-trace DPI to (ρ_ABC,ρ_A⊗ρ_BC), after checking support inclusion. Trace-distance channel contractivity alone does not supply either statement.

A channel N:A→B has a finite Stinespring isometry U:A→BE, supplied by the published thm-qc-finite-stinespring-dilation; write N^c for its E marginal. For a state ρ_A, choose any purification |φ〉_RA and set
Ic(ρ,N)=S(B)_(id⊗N)(φ)−S(E)_(id⊗N^c)(φ)=−S(R|B).
The equality follows because RBE is pure and hence S(E)=S(RB); changing a purification changes the purifying register by an isometry and leaves these entropies invariant. The root-fidelity convention of the QC library is retained. If F is root fidelity and F² is squared fidelity, the Fuchs–van de Graaf inequality is D≤√(1−F²), where D=||ρ−σ||₁/2.

The following code convention is used throughout. An (n,M) classical code has a uniform message M∈{1,…,M}, one encoder state per message (or a declared stochastic encoder), a finite decoder POVM, and average block error
e= M⁻¹Σ_m [1−Tr Λ_m ρ_m].
An (n,K) quantum code has an encoder CPTP map L(K)→A^⊗n and a decoder CPTP map B^⊗n→L(K). Its entanglement-transmission error is tested on the maximally entangled state Φ_RL of Schmidt rank K; the displayed squared-fidelity convention is F_s=〈Φ|ω_RL|Φ〉. The LSD direct proof below establishes this criterion on Φ_RL. EA codes have a uniform classical message, arbitrary prior shared state independent of the message, Alice’s local message-controlled CPTP encoder, N^⊗n as the only transmitted system, and Bob’s joint decoder using his retained share. There is no forward classical aid in the EA theorem.

## Typical-projector lemma

Finite bounded concentration lemma. Suppose Z₁,…,Z_n are independent, each with law chosen from a fixed finite family of bounded real distributions. For every a>0 there are c,C>0, depending only on that family and a, such that
Pr{|Σ_i(Z_i−E Z_i)|≥na}≤C e^{-cn}
uniformly over the coordinate-by-coordinate choices of laws. For each law j, the centered moment generating function m_j(λ)=E exp(λ(Z−EZ)) has m_j(0)=1 and derivative zero at zero. Since the family is finite and bounded, Taylor's theorem gives log m_j(λ)≤C₀λ² uniformly for |λ|≤λ₀. Choose 0<λ≤λ₀ with C₀λ≤a/2. Exponential Markov then bounds the upper tail by exp(−λna+nC₀λ²)≤exp(−λna/2); apply the same argument to −Z for the lower tail. The one-letter boundedness and finite-family hypotheses are load-bearing; this is the exact concentration statement used below.

Let τ be a state on a finite nonzero space and let h=S(τ). For every fixed δ>0 there are spectral projectors Π_n such that, for all sufficiently large n,
Tr Π_n τ^⊗n ≥1−a_n,
rank Π_n ≤2^{n(h+δ)}, and
Π_n τ^⊗n Π_n ≤2^{-n(h−δ)}Π_n,
where a_n→0.

Proof. Diagonalize τ=Σ_j λ_j|j〉〈j| and sample J with probabilities λ_j on its positive support. The surprisal Z=−log λ_J is a bounded finite-valued random variable with mean h. Define Π_n as the span of |j_1…j_n〉 whose sum of surprisals lies in [n(h−δ),n(h+δ)]. The bounded concentration lemma gives omitted mass at most C e^{-cn}. Each included eigenvalue is at most 2^{-n(h−δ)}, proving the operator bound. Each included eigenvalue is at least 2^{-n(h+δ)}; since their sum is at most one, their count is at most 2^{n(h+δ)}. Zero eigenvalues are excluded, so no logarithm at zero is used.

For an ensemble (p_x,σ_x) on B, choose an input strong-typical set T_n defined by |n_x(x^n)/n−p_x|≤κ for each positive-probability letter x, with Pr{X^n∉T_n}=η_n≤C e^{-cn}. This follows by applying the bounded concentration lemma to each symbol indicator and taking a finite union bound. Choose κ small enough that the empirical means of each finite family of conditional surprisals below differ from their p-averages by at most half the projector window δ. For x^n∈T_n, let σ_{x^n}=⊗_iσ_{x_i}. A conditional spectral projector Π_{x^n} can be chosen with
Tr Π_{x^n}σ_{x^n}≥1−b_n,
rank Π_{x^n}≤2^{n(H(B|X)+δ)},
Π_{x^n}σ_{x^n}Π_{x^n}≤2^{-n(H(B|X)−δ)}Π_{x^n},
where H(B|X)=Σ_xp_xS(σ_x), and b_n≤C e^{-cn} (with the δ slack chosen to absorb the strong-typical type tolerance). To see this, diagonalize each σ_x, draw its eigenbasis outcome independently at each coordinate, and apply bounded concentration to the finite family of conditional surprisal laws; the empirical counts of x are close to p. The same eigenvalue and rank argument as above gives the last two inequalities.

There is also a global projector Π_n for σ̄^⊗n with
Tr Π_nσ_{x^n}≥1−c_n for every x^n∈T_n,
Π_nσ̄^⊗nΠ_n≤2^{-n(S(σ̄)−δ)}Π_n,
rank Π_n≤2^{n(S(σ̄)+δ)},
where c_n≤C e^{-cn}. For the first inequality, measure each output in an eigenbasis of σ̄. On supp σ̄ every σ_x is supported there when p_x>0. The random variable −log λ_J is bounded on that finite support; its mean conditioned on x is μ_x=Tr σ_x(−log σ̄), and Σ_xp_xμ_x=S(σ̄). By the choice of κ, every strong-typical x^n satisfies |Σ_iμ_{x_i}−nS(σ̄)|≤nδ/2; apply bounded concentration with deviation nδ/2 to the finite family of conditional eigenbasis-outcome laws. The remaining two bounds are the first state-projector lemma.

## Gentle measurement and packing

Gentle measurement lemma. If 0≤Λ≤I and Tr Λρ≥1−u for a state ρ, then
||ρ−√Λρ√Λ||₁≤2√u.
Purify ρ to |ψ〉. Put v=(√Λ⊗I)|ψ〉 and q=||v||²=Tr Λρ. The trace norm difference of two rank-one positive operators is
|| |ψ〉〈ψ|−|v〉〈v| ||₁ =√((1+q)²−4|〈ψ,v〉|²).
Since √Λ≥Λ, 〈ψ,v〉=Tr ρ√Λ≥q. Therefore the square is at most (1+q)²−4q²=(1−q)(1+3q)≤4(1−q)≤4u. Partial-trace contractivity proves the claim for ρ. By scaling, if X≥0 has trace at most one, then
||X−√ΛX√Λ||₁≤2√(Tr X · Tr[(I−Λ)X]).
This follows by applying the same purification calculation to the unnormalized vector of squared norm Tr X.

Square-root packing lemma. Let (p_x,σ_x) be a finite ensemble on B, let σ̄=Σp_xσ_x, and for each sampled x choose projections Π and Π_x with
Tr Πσ_x≥1−u, Tr Π_xσ_x≥1−u, rank Π_x≤d,
Πσ̄Π≤D⁻¹Π.
Draw M code letters independently from p. Set Γ_m=ΠΠ_{x(m)}Π and S=Σ_mΓ_m. Define Λ_m=S^{-1/2}Γ_mS^{-1/2} on supp S and zero off supp S; add Λ_0=I−Σ_mΛ_m. Then
E e ≤2(u+2√u)+4(M−1)d/D.                                               (P)

Proof. For 0≤S₀≤I and T₀≥0, the Hayashi–Nagaoka inequality is
I−(S₀+T₀)^{-1/2}S₀(S₀+T₀)^{-1/2}
≤2(I−S₀)+4T₀.                                                        (HN)
Here inverses are on support. For completeness, for c>0 and any A,B,
c⁻¹A* A+cB*B≥A*B+B*A by (A−cB)*(A−cB)≥0. Set A=√T₀R and B=√T₀(I−R). Expanding T₀ gives
T₀=R*T₀R+R*T₀(I−R)+(I−R)*T₀R+(I−R)*T₀(I−R).
The weighted square inequality bounds the two middle terms by c⁻¹R*T₀R+c(I−R)*T₀(I−R), so
T₀≤(1+c⁻¹)R*T₀R+(1+c)(I−R)*T₀(I−R).
Put X=S₀+T₀ and R=√X. Congruence by I−√X and T₀≤X give
T₀≤X^1/2[(1+c⁻¹)T₀+(1+c)(I+X−2√X)]X^1/2
=X^1/2[(2+c+c⁻¹)T₀+(1+c)(I+S₀−2√X)]X^1/2.
The identity uses (I−√X)X(I−√X)=X^1/2(I+X−2√X)X^1/2 and X=S₀+T₀. The scalar square-root function is operator monotone in finite dimensions: use
√X=π⁻¹∫₀^∞ t^(-1/2)X(X+tI)⁻¹dt
and inverse order (X+tI)⁻¹≥(Y+tI)⁻¹ when 0<X≤Y, then approximate semidefinite X by X+εI. Thus S₀≤√S₀≤√X, so I+S₀−2√X≤I−S₀. Conjugating by X⁻¹/² on supp X yields
X⁻¹/²T₀X⁻¹/²≤(2+c+c⁻¹)T₀+(1+c)(P_X−S₀),
where P_X is the support projector; S₀ and T₀ vanish off P_X. Finally,
I−X⁻¹/²S₀X⁻¹/²=I−P_X+X⁻¹/²T₀X⁻¹/².
Since I−P_X+(1+c)(P_X−S₀)≤(1+c)(I−S₀), setting c=1 proves (HN).

For message m apply (HN) with S₀=Γ_m and T₀=Σ_{j≠m}Γ_j. The first term obeys
Tr (I−Γ_m)σ_{x(m)}≤u+2√u:
indeed Tr Γ_mσ=Tr Π_xΠσΠ≥Tr Π_xσ−||ΠσΠ−σ||₁≥1−u−2√u by the gentle lemma. For j≠m, independence gives
E Tr Γ_jσ_{x(m)}
=Tr [Π EΠ_{X'} Π] σ̄
≤D⁻¹ Tr Π EΠ_{X'}Π
≤d/D.
The first inequality uses Πσ̄Π≤D⁻¹Π; the last uses rank Π_{X'}≤d and Π≤I. Summing the Hayashi–Nagaoka bound proves (P). In particular, some deterministic code has average error no greater than its expected average error. If average error is e, expurgating messages with individual error greater than √e removes at most √e of them and gives maximum error at most √e.

## Finite cq HSW theorem

Let X be a fixed finite nonempty alphabet, x↦ρ_x a cq channel to a finite nonzero B, and use it memorylessly: x^n maps to ⊗_iρ_{x_i}. With a uniform message set, deterministic codewords x^n(m), and average block error as defined above, the capacity is
C_cq=max_p χ(p),   χ(p)=S(Σ_xp_xρ_x)−Σ_xp_xS(ρ_x) bits/use.             (HSW)

Direct part. Fix p and a rate R<χ(p). Pick a small δ>0 so R<χ(p)−4δ. Draw each length-n codeword independently from p^⊗n conditioned on the strong-typical set T_n. The conditioning probability tends to one; its output barycenter σ̄'_n satisfies
σ̄'_n = E[ρ_{X^n}|X^n∈T_n] ≤(1−η_n)⁻¹ (Σ_xp_xρ_x)^⊗n.
Use the global and conditional projectors above. The conditions for (P) hold with u=max(b_n,c_n), d≤2^{n(H(B|X)+δ)}, and
D⁻¹=(1−η_n)⁻¹2^{-n(S(B)−δ)}.
For N=⌊2^{nR}⌋ messages, (P) gives
E e ≤2(u+2√u)+4N(1−η_n)⁻¹2^{-n(χ(p)−2δ)}→0.
Choose a deterministic code with this average-error bound. Taking p maximizing χ proves every R<max_pχ achievable. The maximum exists by compactness of the finite probability simplex and continuity of finite entropy.

Converse. For any n-use code, let M be uniform and let ρ_m be its output. The measurement/Holevo bound and Fano give
(1−e)log M ≤ I(M;Y)+h₂(e) ≤ χ({1/M,ρ_m})+h₂(e).
For any codeword x^n(m), the conditional output is a product, so its entropy is Σ_iS(ρ_{x_i(m)}). If p_i is the empirical distribution of the i-th input symbol across uniform messages, subadditivity gives
S(M⁻¹Σ_m⊗_iρ_{x_i(m)})≤Σ_i S(Σ_xp_i(x)ρ_x).
Subtracting the average conditional entropy yields
χ({1/M,ρ_m})≤Σ_iχ(p_i)≤n max_pχ(p).
Thus (1−e)log M≤nC_cq+h₂(e), which proves the converse when e_n→0. If only average error is given in a direct code, the expurgation just proved also yields a maximum-error code with the same asymptotic rate.

For a fully quantum finite channel N:A→B, apply this cq theorem to any finite ensemble of input states on A^⊗k and the block channel N^⊗k, then use that block as one super-symbol. This proves achievability of χ(N^⊗k)/k for each k. Conversely the measurement/Holevo/Fano bound gives (1−e)log M≤χ(N^⊗n)+h₂(e) for every n-use code. The sequence a_n=χ(N^⊗n) is superadditive by product ensembles, and 0≤a_n≤n log dim B. If a_{qk+r}≥q a_k+a_r with a_r≥0, dividing by qk+r and taking q→∞ gives liminf_n a_n/n≥a_k/k for each k; the reverse bound by sup is immediate. Hence lim_n a_n/n=sup_k a_k/k, the general unassisted classical capacity formula. This is a regularized statement; no single-letter additivity is inferred for a general quantum channel.


## Randomized privacy lemma and its proof

This section proves the finite block ingredients needed for the LSD direct part; it does not claim a private-capacity formula or treat arbitrary mixed cq codewords as orthogonal quantum codewords.

Fix a finite alphabet X, a distribution p with p_x>0 on its support, and a finite cq wiretap channel x↦(β_x,ε_x), where β_x and ε_x are Bob's and Eve's states for input letter x. They may be mixed and need not have a common purification on BE. For a quantum channel N and a chosen input ensemble, take β_x=N(ρ_x), ε_x=N^c(ρ_x); the pure output extension is needed only for the later spectral-ensemble LSD construction. The codebook is public; Alice chooses the randomizer k locally and uniformly, while Bob decodes both the message and randomizer. Eve's security criterion below is raw trace-norm distance to a fixed state for each message. Write
β̄=Σp_xβ_x, ε̄=Σp_xε_x,
I_B=S(β̄)−Σp_xS(β_x), I_E=S(ε̄)−Σp_xS(ε_x), H_X=−Σp_xlog p_x.
By the Holevo bound χ≤H(X), 0≤I_B≤H_X and 0≤I_E≤H_X. One direct proof of χ≤H(X) is
χ=Σ_xp_xD(β_x||β̄)≤Σ_xp_xlog(1/p_x)=H_X,
because β̄≥p_xβ_x and operator log is monotone on positive support; this operator monotonicity follows from the inverse-resolvent formula in the finite DPI ladder. The same applies to Eve. The formula also proves support inclusion supp β_x⊆supp β̄.

For each n use the strong-typical input law p'_n(x^n)=p^⊗n(x^n)/P_n(T_n) on T_n and zero off it, where P_n(T_n)=1−η_n→1. For every fixed small δ>0, the output typical-projector construction above supplies:
- global projectors P_B,P_E of ranks at most 2^{n(S(B)+δ)},2^{n(S(E)+δ)} and operator bounds for β̄^⊗n, ε̄^⊗n;
- for every x^n∈T_n, conditional projectors P_{B|x^n},P_{E|x^n}, with acceptance at least 1−u_n, ranks at most 2^{n(H(B|X)+δ)},2^{n(H(E|X)+δ)}, and conditional operator norm at most 2^{-n(H(B|X)−δ)},2^{-n(H(E|X)−δ)}.
Here u_n→0. These are the preceding typical-projector proof applied separately to the B and E marginals.

Iid covering bound. Let x^n(1),…,x^n(K) be independent draws from p'_n, and put
ω_E=K⁻¹Σ_k ε_{x^n(k)},     ε_{x^n}=⊗_iε_{x_i}.
For every fixed δ as above, there is r_n→0, explicitly
r_n=2√u_n+2√(u_n+2√u_n),
such that
E ||ω_E−ε̄^⊗n||₁
≤ 2r_n+2η_n +(1−η_n)⁻¹/² 2^{-n(R₀−I_E−2δ)/2}                       (C)
whenever K≥2^{nR₀}.

Proof. For typical x^n set
τ_{x^n}=P_E P_{E|x^n} ε_{x^n} P_{E|x^n}P_E,
and set τ=0 off T_n. The conditional gentle lemma gives
||ε_{x^n}−P_{E|x^n}ε_{x^n}P_{E|x^n}||₁≤2√u_n.
Let X=P_{E|x^n}ε_{x^n}P_{E|x^n}. The global acceptance and the preceding estimate imply Tr(P_E X)≥1−u_n−2√u_n. Hence Tr[(I−P_E)X]≤u_n+2√u_n, and the unnormalized gentle lemma gives
||X−P_EX P_E||₁≤2√(u_n+2√u_n).
Thus the mean truncation loss E_{p'_n}||ε_{X^n}−τ_{X^n}||₁≤r_n. Conditioning p^⊗n on T_n changes its law in total variation by η_n, so
||E_{p'_n}ε_{X^n}−ε̄^⊗n||₁≤2η_n.
Consequently ||Eτ−ε̄^⊗n||₁≤r_n+2η_n.

Every τ is supported on P_E, has trace at most one, and obeys
||τ_{x^n}||∞≤2^{-n(H(E|X)−δ)}.
Therefore Tr τ²≤2^{-n(H(E|X)−δ)}. Independence and centering cancel cross terms in Hilbert–Schmidt norm:
E||K⁻¹Σ_k(τ_k−Eτ)||₂²
=K⁻¹E Tr(τ−Eτ)²≤K⁻¹ETrτ².
For an operator A supported on a D-dimensional space, ||A||₁≤√D||A||₂ by Cauchy–Schwarz on its singular values. Here D=rank P_E≤2^{n(S(E)+δ)}. Jensen therefore bounds
E||K⁻¹Σ_kτ_k−Eτ||₁
≤(1−η_n)⁻¹/² 2^{-n(R₀−I_E−2δ)/2}.
Finally triangle inequality adds the sample truncation loss r_n and the mean bias r_n+2η_n, proving (C). This establishes covering without an operator Chernoff citation.

## Finite private code from packing plus covering

Fix R₀>I_E+4δ and R>0 such that
R+R₀<I_B−4δ,     R+R₀<H_X−2δ.                                      (R)
The strict last inequality is possible whenever R+R₀<I_B and I_B≤H_X. Take M=⌊2^{nR}⌋ and K=⌈2^{nR₀}⌉ independent random typical input sequences x^n(m,k), with common law p'_n. Since K≤2·2^{nR₀}, the ceiling changes the block-code rate by at most 1/n; the strict packing and collision margins absorb this constant factor for all sufficiently large n. In particular K≥2^{nR₀}, as required by the covering bound (C).

Apply the square-root packing lemma to the N=MK codewords through Bob's cq channel, using the B typical projectors. Its expected average error over uniform (m,k) is
e_n≤2(u_n+2√u_n)+4MK(1−η_n)⁻¹2^{-n(I_B−2δ)}→0.
For each message m the averaged Eve state is ω_m=K⁻¹Σ_k ε_{x^n(m,k)}. Apply (C) independently to each message bin and average over m; the expected leakage
ℓ_n=M⁻¹Σ_m||ω_m−ε̄^⊗n||₁
is bounded by the right side of (C), hence tends to zero.

Distinctness is needed for coherent encoding. Each x^n drawn from p'_n is strongly typical, so
max_{x^n∈T_n}p'_n(x^n)≤(1−η_n)⁻¹2^{-n(H_X−δ)}.
For N iid codewords, the expected fraction f_n of entries that have a duplicate is at most
(N−1)(1−η_n)⁻¹2^{-n(H_X−δ)}→0
by (R): for a fixed entry, union bound over the other N−1 entries bounds its collision probability by (N−1) times the maximum atom. This argument controls the fraction of marked entries, even when the expected number of colliding pairs itself is large.

Since e_n+ℓ_n+f_n→0 in expectation, for each sufficiently large n there is one deterministic codebook with all three quantities tending to zero. In that book delete every entry whose sequence is duplicated; all remaining sequences are distinct. For message m let f_m be its deleted fraction, so M⁻¹Σ_m f_m=f_n. Retain initially the messages with f_m≤√f_n; at least (1−√f_n)M remain and each retains K_m≥(1−√f_n)K keys.

Let e_m be message m's original average pair-error over its K keys and let ℓ_m=||ω_m−ε̄^⊗n||₁. The average over retained messages of the post-deletion key-average error is at most e_n/(1−√f_n)²: total retained error is at most the original total MKe_n, while every retained message has at least (1−√f_n)K keys and there are at least (1−√f_n)M such messages. Deleting fraction f_m of a mixture and renormalizing changes its state by at most 2f_m in trace norm (write the original as (1−f_m)ρ_keep+f_mρ_del and use ||ρ_del−ρ_keep||₁≤2). Thus the average post-deletion leakage among retained messages is at most ℓ_n/(1−√f_n)+2√f_n. Both averages vanish.

Put q_n equal to the sum of these two post-deletion message averages. Markov's inequality permits a final expurgation removing at most a √q_n fraction of messages and leaving, for every remaining m,
K_m⁻¹Σ_{k∈K_m} [1−Tr Λ_{m,k}β_{x^n(m,k)}]≤√q_n,
||K_m⁻¹Σ_{k∈K_m}ε_{x^n(m,k)}−ε̄^⊗n||₁≤√q_n.                     (W)
The retained pairs keep their old POVM effects; all discarded outcomes are combined into the failure outcome, so their success probabilities do not decrease. The final message rate tends to R, each K_m has rate at least R₀−o(1), all codeword sequences are distinct, and (W) is a per-message reliability/secrecy criterion. No privacy capacity formula for arbitrary mixed ensembles is used in the quantum argument below.

## LSD direct coding: coherentizing the spectral private code

Fix a finite-dimensional channel N:A→B and any input density operator ρ_A on its nonzero finite-dimensional input. Choose a spectral decomposition
ρ_A=Σ_xp_x|x〉〈x|,
where the |x〉 are an orthonormal eigenbasis on the support and p_x>0. Apply a fixed finite Stinespring isometry U_N:A→BE. The state U_N|x〉 is pure, so its marginals are β_x=N(|x〉〈x|) and ε_x=N^c(|x〉〈x|), and
I_B−I_E
=[S(B)_N(ρ)−Σ_xp_xS(β_x)]−[S(E)_{N^c(ρ)}−Σ_xp_xS(ε_x)]
=S(B)_{N(ρ)}−S(E)_{N^c(ρ)}
=Ic(ρ,N).                                                          (I)
Indeed S(β_x)=S(ε_x) for each pure BE output. Thus for any R<Ic(ρ,N), when Ic>0, choose R₀>I_E and δ>0 so that (R) holds; the finite private code above has message rate R. For Ic≤0 there is no positive rate to prove.

For each retained message m choose phases θ_{m,k} and define the input vector
|φ_m〉_{A^n}=K_m⁻¹/²Σ_{k∈K_m}e^{iθ_{m,k}}|x^n(m,k)〉.
Different sequences label orthogonal product eigenvectors, and every retained sequence is distinct across all pairs (m,k); hence the summands are orthonormal and the vectors |φ_m〉 for distinct m are orthonormal. Therefore |m〉↦|φ_m〉 is an actual isometric encoder on the K-dimensional logical code space, with K the retained number of messages. This is a constructed encoder, not an assertion that a general CPTP encoder may be replaced by an isometry.

Bob's packing POVM has outcomes (m,k) and a failure outcome 0. Its coherent measurement is the isometry
W_B=Σ_{m,k}√Λ_{m,k}⊗|m,k〉 +√Λ_0⊗|0〉.
For a pure Stinespring output |ψ_{m,k}〉_BE=U_N^⊗n|x^n(m,k)〉, the diagonal overlap between W_B|ψ_{m,k}〉 and the correct branch |ψ_{m,k}〉|m,k〉 is
〈ψ_{m,k}|√Λ_{m,k}|ψ_{m,k}〉≥〈ψ_{m,k}|Λ_{m,k}|ψ_{m,k}〉.
For each m put
|χ_m(θ)〉=K_m⁻¹/²Σ_k e^{iθ_{m,k}}|ψ_{m,k}〉_{BE}|m,k〉.
The overlap of the coherently decoded codeword with this target is
z_m(θ)=〈χ_m(θ)|W_B|φ_m(θ)〉
=K_m⁻¹Σ_{k,l}e^{i(θ_{m,l}−θ_{m,k})}〈ψ_{m,k}|√Λ_{m,k}|ψ_{m,l}〉.
Orthogonal input codewords do not make the off-diagonal decoder matrix elements vanish. Instead choose the phases independently and uniformly on the unit circle. Averaging z_m cancels every k≠l term and leaves the diagonal average, which is at least the key-average success 1−e_m≥1−√q_n by (W). Hence some fixed phase choice for each m has Re z_m≥1−√q_n. Use these phases in the actual encoder. The E marginal of |χ_m(θ)〉 is exactly K_m⁻¹Σ_kε_{x^n(m,k)}, since the orthogonal Bob label |m,k〉 kills off-diagonal key terms; it is independent of the phases and is within raw trace norm δ_n=√q_n of ε̄^⊗n.

Use the maximally entangled logical input |Φ_K〉=K⁻¹/²Σ_m|m〉_R|m〉_L. Its orthogonal reference labels kill cross-message terms in the overlap. Thus the overlap between the coherently measured actual vector and K⁻¹/²Σ_m|m〉_R|χ_m(θ)〉 is at least 1−√q_n in real part. The trace norm between these pure vectors is at most 2√(2√q_n). This maximally entangled criterion is the one needed for entanglement transmission; a uniform guarantee for every pure reference/logical input is not asserted by this argument.

For each m, the published finite Uhlmann characterization thm-qc-fidelity-purification-characterization, together with thm-qc-purification-existence-and-unitary-equivalence to pad auxiliary spaces, supplies an isometry on Bob's purifying system taking |χ_m(θ)〉 to a purification of ε̄^⊗n. The Fuchs–van de Graaf inequality converts raw trace norm δ_n to normalized distance δ_n/2, then to root fidelity at least 1−δ_n/2; the resulting pure-state trace norm is at most 2√δ_n. Control these isometries by Bob's decoded m register. Because the reference labels m are orthogonal, the maximally entangled vector after these controlled isometries has overlap at least 1−δ_n/2 with |Φ_K〉⊗|θ〉, where |θ〉 is the fixed purification. Bob discards the recovered purification and key registers. The resulting logical output satisfies
||ω_RL−|Φ_K〉〈Φ_K|||₁≤2√(2√q_n)+2√(√q_n)→0.                              (Q)
In particular, the squared entanglement fidelity on Φ_RL tends to one. All receiver operations are local CPTP maps; this protocol consumes no preshared entanglement and uses no forward classical channel.
For block size k, apply this construction to N^⊗k and a state ρ_{A^k}. It achieves every rate below k⁻¹Ic(ρ,N^⊗k) per use of N. Put
a_k=max_{ρ_{A^k}}Ic(ρ,N^⊗k).
The maximum exists by compactness and finite entropy continuity. Product inputs show a_{k+l}≥a_k+a_l. A pure input gives Ic=0, so a_k≥0. For any input with purification R and channel isometry R A^k→R B^k E, subadditivity gives S(B^k)≤S(R)+S(E), whence Ic≤S(R)≤k log dim A; thus a_k/k is bounded. If n=qk+r, repeated superadditivity gives a_n≥q a_k+a_r≥q a_k. Therefore liminf_n a_n/n≥a_k/k for every k, and
lim_n a_n/n=sup_k a_k/k.                                            (F)
Using N^⊗k as a superchannel and then k→∞ proves achievability of the regularized coherent-information rate. Leftover fewer than k channel uses can be ignored, so the operational sequence need not restrict n to exact multiples of k.

## LSD converse for arbitrary encoders

Let a length-n quantum code have logical dimension K, arbitrary encoder CPTP map E:L(K)→A^⊗n, decoder D:B^⊗n→L(K), and squared entanglement fidelity
F_s=〈Φ_K|(id_R⊗D∘N^⊗n∘E)(Φ_K)|Φ_K〉≥1−ε.
This is the entanglement-transmission task; no presumption is made that E is an isometry. For K=1 the rate is zero, so take K≥2.

First, finite entropy continuity near the maximally mixed state can be proved classically here. If two distributions p,q on K points have total variation δ, a maximal coupling has Pr[X≠Y]=δ. Then
H(X|Y)≤h₂(δ)+δlog(K−1),   H(Y|X)≤h₂(δ)+δlog(K−1),
because on the mismatch event there are at most K−1 alternatives. Hence
|H(p)−H(q)|≤h₂(δ)+δlog(K−1).                                    (E)
The decoder output marginal ω_B commutes with π_K=I/K, so its eigenvalue distribution is at TV distance D(ω_B,π_K)≤√ε from uniform: partial trace contracts trace distance, and Fuchs–van de Graaf with squared fidelity gives this bound. Therefore
S(B)_ω≥logK−h₂(√ε)−√ε log(K−1).

Let q=1−〈Φ_K|ω_RB|Φ_K〉≤ε. Pinch ω_RB by {Φ_K,I−Φ_K}; pinching is the average of identity and conjugation by the unitary 2Φ_K−I, so entropy concavity and unitary invariance imply it cannot decrease entropy. The pinched state has blocks of weights 1−q and q, and the orthogonal block dimension is K²−1. Thus
S(RB)_ω≤h₂(q)+qlog(K²−1)≤h₂(ε)+εlog(K²−1),
for ε≤1/2 (the asymptotic regime). Combining,
I(R⟩B)_ω≥logK−h₂(√ε)−√εlog(K−1)−h₂(ε)−εlog(K²−1).             (L)

Coherent information cannot increase under Bob's decoder. Indeed, dilate the decoder to an isometry B→B'F. Isometric invariance gives I(R⟩B)=I(R⟩B'F); subtracting I(R⟩B') yields I(R;F|B')≥0 by finite SSA. Hence the coherent information immediately after N^⊗n is at least the lower bound (L).

Now form the encoded state ω_RA^n=(id_R⊗E)(|Φ_K〉〈Φ_K|), and take a finite spectral decomposition ω_RA^n=Σ_jq_j|φ_j〉〈φ_j|. Introduce a classical flag J and send A^n through N^⊗n. The unflagged output is the actual pre-decoder state. SSA gives
I(R⟩B^n)_ω≤I(R⟩B^nJ)=Σ_jq_j I(R⟩B^n)_{φ_j}.                   (A)
The equality is the block entropy formula for a classical J; the inequality is
I(R;J|B^n)≥0.
Each |φ_j〉_RA^n is pure. After a Stinespring isometry its RB^nE output is pure, so its coherent information equals Ic(ρ_j,N^⊗n) for ρ_j=Tr_R|φ_j〉〈φ_j|. The right side of (A) is at most a_n=max_ρ Ic(ρ,N^⊗n). This handles every CPTP encoder, including one that discards a local environment; the classical flag is the step that must not be omitted.

Consequently
logK−h₂(√ε)−√εlog(K−1)−h₂(ε)−εlog(K²−1)≤a_n.
Since a_n≤nlog dim A, rearranging gives
(1−√ε−2ε)logK≤nlog dim A+h₂(√ε)+h₂(ε)
for ε small enough. Thus logK=O(n) along every reliable sequence; divide the sharper preceding inequality by n and let ε_n→0 to obtain limsup n⁻¹logK≤lim_n a_n/n. With the direct part and (F),
Q(N)=lim_n n⁻¹ max_{ρ_{A^n}} Ic(ρ,N^⊗n)=sup_n n⁻¹ max_ρ Ic(ρ,N^⊗n).
No one-letter formula is claimed for a general channel. This finite-dimensional operational theorem is established even if additivity remains unknown.

## Entanglement-assisted classical capacity

Theorem and resource model. Let N:A→B be a finite-dimensional memoryless channel. Alice and Bob may begin with any finite-dimensional pure entangled state independent of the message; its Schmidt rank may grow arbitrarily with n and is free in the EA model. Alice sends only through N^⊗n; Bob may jointly decode the outputs and his retained share. The message is uniform, error is average block error, and no forward classical channel is available. Then
C_EA(N)=max_{ρ_A} I(R;B)_{(id_R⊗N)(φ_RA)},                         (EA)
where |φ〉_RA is any purification of ρ_A. The maximizer exists in finite dimensions. The formula is additive, so no tensor-power regularization is needed.

Direct coding resource reduction. Fix a finite pure |φ〉_RA and its Schmidt decomposition
|φ〉_RA=Σ_x√p_x |x〉_A|x〉_R,
on its positive support. For block length n, the type class T_t of sequences with empirical distribution t has size d_t. Since p^⊗n(x^n) is constant on T_t, define
p(t)=d_t p^⊗n(x_t),   |Φ_t〉=d_t⁻¹/²Σ_{x^n∈T_t}|x^n〉_A|x^n〉_R.
Then
|φ〉_RA^⊗n=Σ_t√p(t)|Φ_t〉,
an orthogonal sum of maximally entangled states with Schmidt ranks d_t. There are at most (n+1)^{|X|} types, so H(T)≤|X|log(n+1)=o(n).

On each type subspace choose the d_t-dimensional Weyl operators W_t(a,z)=X_t(a)Z_t(z), a,z∈{0,…,d_t−1}, and an independent bit b_t∈{0,1}. Define U_s=⊕_t (−1)^{b_t}W_t(a_t,z_t) on Alice's supported subspaces. The finite transpose identity
(U_s⊗I)|Φ_t〉=(I⊗U_s^T)|Φ_t〉
holds on each block, hence holds for their superposition |φ〉^⊗n. Alice's message encoder chooses one s and applies U_s to her share before sending it through N^⊗n; Bob retains R^n. No quantum or classical message is sent in this local encoding step.

Let θ_{B^nR^n}=(N^⊗n⊗id)(φ^⊗n). The resulting ensemble at Bob is
θ_s=(U_s^T⊗I) θ (U_s^T⊗I)^*,
up to the fixed ordering of factors. Its average is
θ̄=Σ_t p(t) N^⊗n(π_{A,t})⊗π_{R,t},                                (T)
where π_{A,t},π_{R,t} are maximally mixed on the type subspaces. To verify (T), average first over the Weyl pair in each block. The d_t² Bell vectors (W_t(a,z)⊗I)|Φ_t〉 form an orthonormal basis: their inner products are d_t⁻¹Tr(W_t(a,z)*W_t(a',z'))=δ_{a,a'}δ_{z,z'}, verified by summing the finite shift and phase matrix entries. Their projectors sum to identity on the tensor product of the two type spaces, so their uniform mixture is π_{A,t}⊗π_{R,t}. For distinct types t≠t', averaging the independent phase bits gives E[(-1)^{b_t+b_{t'}}]=0, killing every off-diagonal type block. Linearity of N^⊗n proves (T).

For each s, S(θ_s)=S(θ)=nS(BR). By (T), the R^n type blocks are orthogonal, so
S(θ̄)=H(T)+Σ_t p(t)[S(N^⊗n(π_{A,t}))+log d_t].
The marginal θ̄_{B^n}=N(ρ_A)^⊗n. Since the type register is classical, its Holevo information with B^n is at most H(T), which gives
Σ_t p(t)S(N^⊗n(π_{A,t}))≥nS(B)−H(T).
Also p(t)=d_t p^⊗n(x_t), so
Σ_t p(t)log d_t=nH(p)−H(T)=nS(R)−H(T).
Therefore the ensemble Holevo information satisfies
χ({|S|⁻¹,θ_s})=S(θ̄)−|S|⁻¹Σ_sS(θ_s)
≥n[S(B)+S(R)−S(BR)]−H(T)
=n I(R;B)_θ−o(n).                                                  (EA-dir)

For fixed n, view s↦θ_s as a finite cq channel whose one use consumes n uses of N and n copies of the fixed prior shared state |φ〉. Apply the already proved cq HSW direct theorem to L independent such blocks. It produces uniform classical messages with average error tending to zero and rate per physical channel use at least χ/n. Choose n large in (EA-dir), then take L large. Ignore fewer than n leftover channel uses. This is a concrete reduction to the cq HSW code: shared entanglement is the only extra resource, Bob's retained half is part of his decoder, and there is no forward classical aid. Maximizing over ρ_A proves the EA lower bound.

Converse and additivity. Consider an arbitrary n-use EA code. Let M be uniform, let T_A T_B be its prior shared state independent of M, let Alice's message-m encoder be CPTP, and let Bob measure B^nT_B to obtain estimate M̂. Write e for average error. Fano and the measurement/Holevo bound give
(1−e)log|M|≤I(M;M̂)+h₂(e)≤I(M;B^nT_B)+h₂(e).
Alice's local trace-preserving operation cannot signal to T_B: for every m, tracing out A^n after her encoder leaves the original T_B marginal. Thus I(M;T_B)=0. The chain identity
I(M;B^nT_B)=I(MT_B;B^n)+I(M;T_B)−I(T_B;B^n)
and nonnegativity of mutual information yield
I(M;B^nT_B)≤I(MT_B;B^n)≤I(N^⊗n).
For the last inequality, M T_B is a reference correlated with the channel input. Purify the reference-input state and use data processing when the extra purifying register is traced out; the resulting pure purification is among those in the maximum defining I(N^⊗n).

For finite channels N₁:A₁→B₁ and N₂:A₂→B₂, product optimizing inputs show I(N₁⊗N₂)≥I(N₁)+I(N₂). For the reverse, take any pure R A₁A₂ input and the two channel outputs. The mutual-information chain rule and SSA give
I(R;B₁B₂)=I(R;B₁)+I(R;B₂|B₁)
≤I(RA₂;B₁)+I(RB₁;B₂)
≤I(N₁)+I(N₂).
The first inequality uses I(A₂;B₁|R)≥0 and I(B₁;B₂)≥0:
I(RA₂;B₁)−I(R;B₁)=I(A₂;B₁|R),
I(RB₁;B₂)−I(R;B₂|B₁)=I(B₁;B₂).
For the second inequality, B₁ is the output of N₁ with reference RA₂, which purifies A₁. For the B₂ term, first add the Stinespring environment E₁ of N₁ to the reference: I(RB₁;B₂)≤I(RB₁E₁;B₂) by nonnegative conditional mutual information. The global state R B₁ E₁ A₂ is pure, so RB₁E₁ purifies A₂ and the channel mutual-information maximum applies. Thus I(N₁⊗N₂)=I(N₁)+I(N₂), and I(N^⊗n)=nI(N). The converse becomes
(1−e)log|M|≤nI(N)+h₂(e).
For every sequence e_n→0 this implies C_EA(N)≤I(N); with (EA-dir) it proves (EA).

## Exact scope, suppliers, and remaining boundaries

The local proofs use the following already published finite interfaces:
- states, spectral decompositions, ensembles, Schmidt decompositions, finite purification and purification equivalence: pure-and-mixed-states-ensembles-and-schmidt-decomposition.md;
- finite tensor registers and partial trace: registers-tensor-products-and-partial-trace.md;
- finite CPTP channels, tensoring, and Stinespring: channels-kraus-choi-and-stinespring-representations.md, especially thm-qc-finite-stinespring-dilation;
- POVMs, branch probabilities, and output measurement channels: measurements-povms-and-instruments.md;
- trace norm, normalized trace distance, trace-distance contractivity, root fidelity, Uhlmann purification characterization, Fuchs–van de Graaf: trace-distance-fidelity-and-information-limits.md, especially thm-qc-fidelity-purification-characterization and thm-qc-fuchs-van-de-graaf;
- concentration of independent bounded surprisal variables: the published thm-hoeffding-independent-bounded-sums applies with each coordinate's finite interval and V=Σ_i(b_i−a_i)²; our bounded-family mgf lemma is the exact finite-family specialization and does not require an unstated iid assumption;
- finite mutual-information/Holevo measurement DPI, SSA, conditional entropy identities, and nonnegativity: the separately audited QRE-DPI/SSA ladder identified above. These entropy and divergence statements are not currently published suppliers in the library and must be integrated as local prerequisites before production theorem items can depend on them.

Natural-log finite Shannon entropy in def-qa-35-finite-probability-entropy-and-stochastic-matrices converts to these bit units by division by ln 2. The finite hypothesis-testing mutual-information item is not a general discrete I(X;Y) supplier. Published trace-distance contractivity is not used as relative-entropy DPI.

Wilde Ch. 24 states squared entanglement fidelity in its error model; the code criterion here uses the same squared quantity F_s, while every Uhlmann/Fuchs step uses root fidelity F_root=√F_s. The finite-dimensionality assumptions are essential to the finite spectra, bounded surprisal variables, type-class dimensions, compact maximization, and finite Stinespring spaces. No energy-constrained bosonic or infinite-dimensional claim follows. The EA resource model allows an unbounded number of prior ebits as n grows but each selected block resource is finite-dimensional; the converse permits arbitrary finite prior shared states. The quantum direct proof chooses a pure spectral ensemble solely for its selected ρ; it does not promote the general private-information optimization to quantum capacity. General additivity, strong converses, efficient encoders/decoders, physical realization, and QKD composability are outside these proved claims.



