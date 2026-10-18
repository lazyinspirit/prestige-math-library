# Complete direct complex rangefinder proof — research proposal

This proof does **not** use sharp complex Chevet/Gordon comparison. It uses coarse second-moment estimates, then changes the **analysis rank**, never the algorithm or sketch width. All Gaussian laws are normalized complex, z=(X+iY)/sqrt2, E|z|²=1, with the already explicit Countable Choice convention. This is a research proof for root/native integration and independent review, not a native acceptance stamp.

## Supplier A: concave rank-envelope reduction for invariant random matrices

**Proposed typed lemma:** Let Z be a random matrix in F^{d×k}, F=R or C, on a given probability space, with E||Z||_F²<∞ and left orthogonal/unitary invariant law. Let h:[0,d]→[0,∞) be concave, and suppose for every integer 0≤j≤d that

E||P_j Z||₂²≤h(j),

where P_j keeps the first j rows (P_0Z is zero). Then for every fixed compatible S, with S≠0,

E||S Z||₂²≤||S||₂² h(||S||_F²/||S||₂²).

For S=0 the left side is zero.

**Complete proof.** Diagonalize S*S by a fixed orthogonal/unitary matrix and use the law invariance to reduce to S*S=σ²diag(w₁,…,w_d), where σ=||S||₂>0, 0≤w_i≤1, and sum_i w_i=||S||_F²/σ². The map

f(w)=E λmax(Z*diag(w)Z)

is finite, convex, and invariant under permutations of w. Finiteness follows from λmax≤tr and E||Z||_F²<∞. Convexity follows from the unit-vector variational formula for λmax, then integration. Permutation symmetry follows from left-invariant law.

Use the explicit finite probability measure on subsets J⊆{1,…,d} which includes coordinate i independently with probability w_i. This is just the finite list of 2^d weights product_{i∈J}w_i product_{i∉J}(1−w_i); their sum is1 and E1_J=w. No new choice axiom or infinite probability-space construction is needed. Finite Jensen gives

f(w)≤E_J f(1_J)≤E_J h(|J|)≤h(E_J|J|)=h(sum_i w_i).

Here symmetry identifies f(1_J) with E||P_{|J|}Z||₂², and the last inequality is finite Jensen for concave h. Multiplying by σ² proves the assertion. This proof applies in particular to an affine h(j)=a+bj, and to h(j)=(a+b√j)². ∎

## Supplier B: coarse normalized-complex Gaussian block second moments

**Proposed typed lemma:** Let k≥1,p≥2 be integers, ℓ=k+p, and let G₁∈C^{k×ℓ}, G₂∈C^{d×ℓ} be independent iid normalized complex Gaussian matrices. Put Z=G₂G₁†, where the usual Moore–Penrose inverse is used; values on the null rank-loss set may equivalently be set to zero for these integrals. For every fixed compatible S, write σ=||S||₂ and R=||S||_F². With C=2√2 e,

E||S Z||₂² ≤ C ℓ/p² [R+(p/4)σ²],                                      (H)

E||S Z||₂² ≤ e² ℓ/p² [R+(p/2)σ²].                                    (F)

These are coarse RMS estimates, not a claim of sharp complex Chevet.

### Exact unweighted positive moments

First prove, for an integer row count j≥1 and every real 0<q<p+1,

E||P_j Z||₂^{2q} ≤ Γ(j+q)Γ(k+q)Γ(p+1−q) / [Γ(j)Γ(k)Γ(q+1)Γ(p+1)].     (M)

The independent scalar/Gamma argument is complete as follows. On the almost-sure full-row-rank event put M=(G₁G₁*)^{-1}, so (G₁†)*G₁†=M. For a fixed unit v∈C^k, unitary invariance and the already proved inverse-diagonal Gamma law give v*Mv distributed as1/V for V~Gamma(p+1,1). Conditional on G₁, each row of G₂G₁†v is normalized complex Gaussian with variance v*Mv; the rows are independent. Indeed a fixed linear combination of independent normalized complex coordinates has that Gaussian law by unitary completion and joint density invariance. Hence the direct Gamma-square integral gives

E||P_j Z v||₂^{2q}= [Γ(j+q)/Γ(j)] [Γ(p+1−q)/Γ(p+1)].

No independence of inverse entries is assumed. This equality follows by integrating first over G₂ and then G₁. The reciprocal moment is finite exactly in the displayed q range.

Let v be an independent invariant sphere vector in C^k. Its coordinate moment is

c_k(q)=E|v₁|^{2q}=Γ(k)Γ(q+1)/Γ(k+q).

For k=1 this is1. For k≥2 it follows by writing v=h/||h|| for iid normalized complex h: |h₁|² and sum_{i>1}|h_i|² are independent Gamma variables with shapes1 and k−1; their ratio has Beta(1,k−1) density, and the Beta–Gamma identity evaluates its qth moment. For each fixed positive matrix A=Z*P_j*P_j Z, pointwise top-eigenvector dominance gives

E_v(v*Av)^q≥λmax(A)^q c_k(q).

This needs only a pointwise finite-dimensional eigenvector choice, not a measurable random eigenvector. Tonelli and the preceding fixed-v integral prove (M). All rank-loss events are null by the existing full-row-rank lemma.

The left-unitary law of Z follows by multiplying G₂ on the left; moreover direct coordinate second moments and the exact inverse-Frobenius moment give E||Z||_F²=dk/p<∞. Thus Supplier A applies.

### Elementary finite-product simplifications

For integer 1≤q≤p, Jensen applied to the convex qth power and (M) imply

E||P_j Z||₂² ≤ [(k)_q (j)_q / (q! (p)_{↓q})]^{1/q},

where (a)_q=a(a+1)…(a+q−1) and (p)_{↓q}=p(p−1)…(p−q+1). The Gamma recurrence proves this identity directly. Arithmetic–geometric mean gives

(k)_q^{1/q}≤k+(q−1)/2≤ℓ,    (j)_q^{1/q}≤j+(q−1)/2.

Also q!^{1/q}≥q/e: sum_{r=1}^q log r≥int_1^q log t dt≥q log q−q. Pairing the first/last, second/next-to-last, etc. factors of (p)_{↓q} yields

(p)_{↓q}^{1/q}≥sqrt[p(p−q+1)],

since (p−i)(p−q+1+i)=p(p−q+1)+i(q−1−i)≥p(p−q+1); the middle factor for odd q satisfies the same squared bound.

For q=ceil(p/2), both q≥p/2 and p−q+1≥p/2, so

q!^{1/q}(p)_{↓q}^{1/q}≥p²/(2√2 e),    (q−1)/2≤p/4.

Consequently E||P_j Z||₂²≤Cℓ/p² (j+p/4). Apply Supplier A with this affine h to prove (H). The j=0 input is valid because its left side is zero and h(0)≥0.

For q=p, the denominator is (p!)^{2/p}≥(p/e)² and (p−1)/2≤p/2. Thus E||P_j Z||₂²≤e²ℓ/p²(j+p/2); Supplier A with this affine h proves (F). All estimates include p=2; there is no large-p approximation or Stirling remainder. ∎

## Direct expected projector error with original k,p and unchanged sketch

**Complete complex-branch theorem.** For the current approved fixed A∈C^{m×n}, k≥2,p≥2,ℓ=k+p≤min(m,n), iid normalized complex Ω, and exact projector P onto Ran(AΩ),

E||(I−P)A||₂ ≤ sqrt(ℓ/p) σ_{k+1} + (e sqrtℓ/p)(sum_{j>k}σ_j²)^{1/2}.    (D)

In particular this proves the original approved bound, since sqrt(ℓ/p)≤1+sqrt(k/(p−1)).

### Deterministic squared partition at any analysis rank

For any integer a with1≤a<ℓ, split V*Ω into a top a×ℓ block Ω₁ and bottom block Ω₂. On its full-row-rank event define C₀=YΩ₁†[I_a 0], in SVD coordinates. As in the existing deterministic partition proof, Ran(C₀)⊆Ran(Y), and the first a rows of Σ−C₀ vanish. The other rows are [−Σ_tail Ω₂Ω₁†, Σ_tail]. Therefore

||(I−P)A||₂² ≤ ||Σ−C₀||₂²
≤ σ_{a+1}² + ||Σ_tail Ω₂Ω₁†||₂².                                    (S)

The last inequality follows from ||[B D]||₂²=||BB*+DD*||₂≤||B||₂²+||D||₂². No inverse of the leading singular-value block is used, so rank(A)<a is included. P is the same algorithm output for every choice of analysis rank a. The exceptional rank-loss events are null; error is bounded by||A||₂ for every draw, and its projector is measurable by the existing finite-scan algorithm.

Put σ=σ_{k+1}, R=sum_{j>k}σ_j². If σ=0 then R=0 and (S) gives zero error almost surely. Suppose σ>0 and set

x=R/(pσ²),    b=σ sqrt(ℓ/p).

It suffices to prove Eerror≤b(1+e√x), which is exactly (D). Jensen permits Eerror≤sqrt(Eerror²). Every use of Supplier B below has deterministic S equal to the relevant trailing singular-value block and independent Gaussian blocks by the actual joint-density invariance lemma.

### Region I: x≥1

Apply (S) at a=k and (F):

Eerror²/b² ≤ p/ℓ + e²(x+1/2) ≤1+e²x+e²/2.

Since e<4 and x≥1, e²/2≤2e√x. Thus this is at most(1+e√x)².

### Region II: 1/7≤x≤1

Apply (S) at a=k and (H):

Eerror²/b² ≤1+C(x+1/4).

To show this is at most(1+e√x)², write y=√x and a₀=2√2−e. The difference, divided by e, is

f(y)=2y−a₀y²−1/√2.

Here a₀>0, so f is concave on[1/√7,1]; it suffices to check its endpoints. The elementary bounds

27/10<e<68/25,    7/5<√2<17/12,    √7<8/3

give 0<a₀<2/15, 1/√2<5/7 and2/√7>3/4. Hence

f(1/√7)>3/4−2/105−5/7=1/60>0,

f(1)>2−2/15−5/7=121/105>0.

This proves the desired comparison throughout Region II.

### Region III: 0<x≤1/7 — shifted analysis rank

Let s=floor(p/4), p'=p−s and a=k+s. This changes only the SVD partition used in the proof, not Ω, ℓ, P, or the algorithm. We have p'≥ceil(3p/4)≥2 and s+1>p/4. Let σ'=σ_{k+s+1} and R'=sum_{j>k+s}σ_j². Monotonicity of singular values gives

(σ')²≤R/(s+1),    R'≤R.

Apply (S) at a=k+s and (H) with analysis parameters k+s,p' (their sum is stillℓ):

Eerror²≤(σ')²+Cℓ/(p')² [R'+(p'/4)(σ')²].

Dividing by b² and using the preceding bounds gives

Eerror²/b²≤x [p²/(ℓ(s+1)) + C p²/(p')² + C p²/(4p'(s+1))]
≤x [4+(16/9)C+(4/3)C]
=x K²,    K²=4+(28/9)C.

The first inequality uses ℓ≥p, and the other two use p'≥3p/4, s+1>p/4. These bounds are valid even for p=2 or3 (then s=0), and do not require divisibility by4.

We have K²<28. For a fully rational verification, √2<99/70 and e<68/25 give C<6732/875<77/10, hence K²<4+(28/9)(77/10)=1258/45<28. Also √7>21/8 and e>27/10 give √7+e>213/40>√28. Therefore K<√7+e. Since x≤1/7,

K√x≤(√7+e)√x≤1+e√x.

This proves Region III. The bounds for e follow directly from its series: the partial sum through1/5! exceeds27/10, and the partial sum through1/4! plus the geometric tail(1/5!)/(1−1/6) equals1631/600<68/25. All square-root rational comparisons follow by squaring positive quantities.

The three regions exhaust x>0. Thus (D) holds for all approved parameters. Finally

(1+sqrt(k/(p−1)))²≥1+k/p=ℓ/p,

so (D) proves the original displayed complex expected-error inequality without changing its constants, fields or hypotheses. ∎

## Power assembly and consumer ownership

Once the two suppliers above and this direct branch are genuinely authored/reviewed, the existing shared-field power claim follows by applying the completed base theorem to B=(AA*)^qA, whose singular values are σ_j^{2q+1}, then using the existing measurable-projector power-transfer/Jensen theorem. q=0, zero/rank-deficient A, smaller actual sample ranks and null sketch exceptions retain their existing handling. The complete real theorem and both-field inverse mean estimates are preserved; the new complex proof simply does not require sharp Chevet.

Original/current consumer ownership remains with this reviewer. Current held-theorem logical closure is base→shared power; the two external Gaussian tail/OSE consumers use only the unchanged law/invariance. If any original Statement/Definition is changed during integration, follow the union of old/current actual consumer edges documented in cycle3. No expectation is a deterministic draw certificate or OSE. This proof file has made no canonical, metadata, gate, hash or runtime change.
