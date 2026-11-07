---
dependency_level: 7
id: lem-moment-curve-finite-branching-iteration
kind: lemma
title: Finite branching iteration in every moment-curve dimension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- def-moment-curve-multiscale-ball-averages
- thm-ball-inflation-for-moment-curve
- thm-lower-dimensional-moment-curve-decoupling
- lem-bandlimited-tools-for-weighted-decoupling
- lem-compatible-interval-meshes-for-moment-curve-decoupling
- lem-parabolic-rescaling-with-weight-buffer
- thm-complex-holder-minkowski-and-the-quotient-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bourgain–Demeter–Guth, Proof of the main conjecture in Vinogradov’s mean
      value theorem
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
---

## Statement

Assume Countable Choice. Fix $n\ge2$ and $p<n(n+1)$ sufficiently close to $n(n+1)$. Suppose the endpoint decoupling estimates hold in every dimension $2\le d<n$, for every admissible weight exponent and every positive power loss; for $n=2$ this hypothesis is empty. Then for every $E\ge100n$, $\eta>0$ and $0<\delta\le1$,
$$ D_{p,n}(\delta,E)\le C_{n,p,E,\eta}\delta^{-\eta}. $$
More precisely, for every $W>0$ there are finitely many positive rational scale factors $b_l$, positive weights $\gamma_l$, $\Gamma=\sum_l\gamma_l<1$, $\sum_lb_l\gamma_l>W$, and $u_0>0$, depending only on $n,p,W$, such that for sufficiently small $0<u<u_0$ and every $\epsilon>0$ the finite multiscale inequality is
$$ A_p(u,B^n,u)\le C\delta^{-\epsilon}\bigl(D_{p,n}(\delta,E)D_p(1,B^n)\bigr)^{1-\Gamma}\prod_l A_p(ub_l,B^n,ub_l)^{\gamma_l}. $$
It holds on compatible nested meshes; the proof below gives its extension and the displayed all-real-scale consequence without assuming norm-boundedness of arbitrary sharp interval restrictions. The constant may depend on the fixed finite tree, $u,E,K,\epsilon$, but not on $g,\delta$ or the ball center.

## Statement references

[Source proof development](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] Normalized ball averages and exact interval meshes are [[def-moment-curve-multiscale-ball-averages]]. All-$k$ ball inflation, lower-dimensional slicing, local Fourier/$L^2$ tools, mesh compatibility and buffered rescaling are the other listed proved suppliers. Holder and Minkowski are used only at exponents at least one. Lower-dimensional endpoint estimates are the explicit hypothesis of this lemma, not imported results. The remaining explicit interfaces are [[def-countable-choice]] [[thm-ball-inflation-for-moment-curve]] [[thm-lower-dimensional-moment-curve-decoupling]] [[lem-bandlimited-tools-for-weighted-decoupling]] [[lem-compatible-interval-meshes-for-moment-curve-decoupling]] [[lem-parabolic-rescaling-with-weight-buffer]] [[thm-complex-holder-minkowski-and-the-quotient-norm]].

## Proof

1.1 Put $\Delta=p/n$. For $n\ge3$ take $\Delta<n+1$ sufficiently close that $\Delta>n$ and all numbers
$$ \alpha_j=\frac{\Delta-j-1}{\Delta-j}\ (1\le j<n),\qquad \beta_j=\frac{2\Delta}{(j+1)(\Delta-j+1)}\ (2\le j<n),\qquad c_j=\frac{j+1}{j} $$
lie strictly between zero and one where applicable. They satisfy
$$ \frac1{j\Delta}=\frac{1-\alpha_j}{j(j+1)}+\frac{\alpha_j}{(j+1)\Delta},\qquad \frac1{j(j+1)}=\frac{1-\beta_j}{j(j-1)}+\frac{\beta_j}{j\Delta}. $$
These equalities follow by substitution and are the exact Holder interpolation identities for the argument. [given, F1, construct, algebra]

2.1 Here is the full state rule, specifying every dimension. A state $W_j(s)$ is a product of $\ell^2$ sums at exponent $j\Delta$, interval exponent $s$, on balls of exponent $js$, pending inflation to exponent $(j+1)s$ as its first processing operation. A state $H_j(s)$ has exponent $j(j+1)$, interval exponent $c_js$, on the same balls of exponent $(j+1)s$. Interpolating $W_j$ by the first identity and applying dimension-$j$ endpoint decoupling to its lower branch gives $H_j(s)$ with weight $1-\alpha_j$ and $W_{j+1}(s)$ with weight $\alpha_j$. For $j=1$ the lower branch is $L^2$ orthogonality, producing the absorbing $A_p(2s,B^n,2s)$ factor instead. In $H_j$, interpolation by the second identity gives $H_{j-1}(c_js)$ with weight $1-\beta_j$ and $W_j(c_js)$ with weight $\beta_j$. For $j=2$ the first branch is $L^2$ orthogonality, and for $j>2$ it uses dimension $j-1$ at radius $\delta^{-(j+1)s}$, so its interval exponent is $(j+1)s/(j-1)=c_{j-1}c_js$; the second awaits inflation from exponent $j c_js=(j+1)s$ to $(j+1)c_js$. At $W_n$ the norm exponent is $p$, and only ordinary averaging is used; this is a terminal factor, not an $A$-leaf. [given, F1, construct, algebra]

3.1 We justify the finite analytic implementation of these rules. Begin with $A_p(u,B^n,u)$, use forward Holder $L^2\le C L^\Delta$ on each normalized finite weight, and inflate with $k=1$ from radius exponent $u$ to $2u$. At a later $W_j$ the proved inflation inequality applies with interval length $\delta^s$, $k=j$ and norm exponent $j\Delta$; its hypotheses $p\ge2n$ and $\delta^s<K^{-1}$ hold for small $\delta$. Interpolation of a finite $\ell^2$ sum follows from norm interpolation and finite Holder, so it has precisely the same weights as the displayed reciprocal identities. On a branch with exponent $j(j+1)$ apply the proved dimension-$j$ slicing inequality separately to every current interval and use the assumed endpoint estimate at its target scale $\delta^{c_js}$. At $L^2$ use the proved orthogonality at reciprocal ball radius. Every such mesh is canonical and nested. Move the resulting geometric products through finite ball averages by Holder with these branch weights. Normalized averaging from smaller balls to a larger ball is valid by the local Fourier helper: integrate the small-ball weights over their locally bounded-overlap centers, giving a weight bounded by the larger-ball weight, and apply Holder over the $M$ families and Minkowski over interval sums. Thus it introduces a fixed constant, with no scale power. [given, F1, construct, algebra]

4.1 For a fixed depth process the live states in increasing order of their required ambient ball exponent, carrying other factors through those nested averages; equal exponents may be processed together. All required exponents are rational multiples of $u$, because only $2$ and $c_j$ change scales. Every return to a state strictly increases its scale, while scale-preserving edges strictly increase $j$. Thus any chosen finite tree has a finite schedule. Choose $u_0$ so all its ambient exponents are at most $n$ and all interval exponents are at most $1$. Truncated live factors are raised to exponent $p$ by forward Holder and averaged to $B^n$. Apply $D_{p,n}(\delta,E)$ to each coarse input, using the shifted fine mesh and zero extension. Nestedness ensures the nonzero fine pieces are exactly those entering $D_p(1,B^n)$; moving their sums by Minkowski gives terminal bound $C D_{p,n}(\delta,E)D_p(1,B^n)$. This uses no comparison of the norm of a sharp subpiece to the norm of a cancelling whole. Each local epsilon loss can be made arbitrarily small. There are only finitely many weighted uses, so choose their input losses with total weighted exponent at most $\epsilon$. Every replacement preserves total exponent one. The resulting finite inequality therefore has the precise form in the Statement, with $\Gamma$ the total probability of its $A$-leaves and $b_l$ their scale multipliers. [given, F1, construct, algebra]

5.1 It remains to prove that the scale moment can exceed every prescribed number. Delete the two absorbing states $H_1,W_n$ and form the finite matrix $Q(\Delta)$ of live transition probabilities multiplied by their scale factors: $1$ on $W_j$ edges and $c_j$ on $H_j$ edges. An $H_1$ exit has reward $2$ and a $W_n$ exit reward zero. The total first moments solve
$$ \omega_j=(1-\alpha_j)\zeta_j+\alpha_j\omega_{j+1},\qquad \zeta_j=c_j((1-\beta_j)\zeta_{j-1}+\beta_j\omega_j),\quad \zeta_1=2,\quad\omega_n=0. $$
At $\Delta=n+1$, direct substitution gives the positive live solution $\omega_j^0=(n-j)/(n-1)$ and $\zeta_j^0=2(n-j)/(n-1)$. Conjugate $Q$ by its positive diagonal vector. The resulting matrix has row sums at most one, with a strict deficit at every row admitting an $A$ exit. Every live state has a positive path to such a row, by moving from $W_j$ to $H_j$ and down the $H$ states. Since there are finitely many states, some common power has all row sums at most $1-\kappa$ for a fixed $\kappa>0$: choose a path for each row, take the maximum length, and the minimum positive path-loss probability. Missing extra steps preserve the lost mass. Thus $\rho(Q)<1$ at the endpoint and in a neighborhood of it, by the same strict power-norm bound and continuity. The Neumann series converges there and gives the unique sum of tree rewards. [given, F1, construct, algebra]

6.1 Replace the boundary $\omega_n=0$ by $\theta$. The solution has $\omega_1=A(\Delta)+B(\Delta)\theta$, with $B(\Delta)>0$, since the direct path $W_1\to\cdots\to W_n$ has positive probability. Direct substitution gives another solution
$$ \theta_*=(\Delta-n-1)/(\Delta-2),\quad\omega_j^*=(\Delta-j-1)/(\Delta-2),\quad\zeta_j^*=2\omega_j^*, $$
whose first value is $1$. For $\Delta<n+1$, $\theta_*<0$, so $A(\Delta)=1-B(\Delta)\theta_*>1$. This is exactly the infinite sum of $b_l\gamma_l$ over all $A$-leaves. A finite truncation therefore has first moment $S>1$. Its total probability $\Gamma$ is strictly below one because the terminal $W_n$ path has fixed positive mass; nonnegative probabilities always sum to at most one. Apply this same finite tree to every $A$-leaf $m$ times. The new total probability is $\Gamma^m<1$, and its first scale moment is $S^m$. Choose $m$ with $S^m>W$. All scales and scheduling are still finite, giving the asserted arbitrary-$W$ inequality. [given, F1, construct, algebra]

7.1 For $n=2$ no lower-dimensional endpoint is used. Take $4<p<6$ and $\alpha=(p-4)/(p-2)\in(0,1)$. A single $k=1$ inflation, the identity $1/(p/2)=(1-\alpha)/2+\alpha/p$, and $L^2$ orthogonality give one $A$-leaf with $b=2$ and $\gamma=1-\alpha$, the other branch terminal. Its scale moment is $2(1-\alpha)=4/(p-2)>1$. Repetition gives the same arbitrary-$W$ assertion with $\Gamma=\gamma^m<1$. This proves the base finite iteration without citing a parabola decoupling theorem. [given, F1, construct, algebra]

8.1 We now derive the all-scale exponent consequence with the proved weight buffer. Write $\eta_E$ for the infimum exponent of $D_{p,n}(\delta,E)$ and $\eta_*:=\sup_{E\ge100n}\eta_E\le1/2$, the last bound following from triangle and the at most $\lceil\delta^{-1}\rceil$ intervals. For every $\sigma_0>0$, each $D_{p,n}(\tau,E')\le C_{E',\sigma_0}\tau^{-\eta_*-\sigma_0}$; the constant need not be uniform in $E'$. Forward Holder and averaging give $A_p(v,B^n,v)\le C D_p(v,B^n)$. Buffered rescaling on each step-$\delta^v$ input gives $D_p(v,B^n)\le C D_{p,n}(\delta^{1-v},E+n+1)D_p(1,B^n)$, with the fine nested mesh. For a final shorter coarse interval use its actual length $\sigma\le\delta^v$; when $\sigma\ge\delta$, the residual scale $\delta/\sigma\ge\delta^{1-v}$ has no greater power loss, and when $\sigma<\delta$ it is already a single final fine piece. Apply these bounds to the arbitrary-$W$ inequality, also bounding its terminal $D(\delta,E)$ by the exponent $\eta_*+\sigma_0$. For $u\max b_l<1$ this gives
$$ A_p(u,B^n,u)\le C\delta^{-\epsilon-(1-uW)(\eta_*+\sigma_0)}D_p(1,B^n), $$
provided $uW<1$; replacing the actual larger scale moment by $W$ only weakens this upper bound. [given, F1, construct, algebra]

9.1 For completeness the required linear/multilinear comparison is proved with a buffer, without invoking the unproved same-weight version. At any point, on a coarse mesh of $K$ intervals, put $a_I=|E_Ig|$ and threshold $\max a_I/K$. If there are not $M$ mutually separated large intervals, greedy deletion covers all large ones by at most $3(M-1)$ adjacent cells, while all small terms sum to at most $\max a_I$. Thus the narrow term is $C_M\max a_I$. Otherwise $M$ separated values exceed $\max a_I/K$ and the total sum is at most $K^2$ times their geometric mean. Iterate this pointwise dichotomy down to scale $\delta$, in the original physical coordinates, taking a dyadic $K$. Narrow factors have coefficient $C_M$, independent of $K,E$. At each broad node rescale that original interval only once and use the buffered lattice comparison from the rescaling lemma for its product norm. Finite Holder and Minkowski sum its fine pieces. This gives
$$ D_{p,n}(\delta,E)\le C_{n,p,E,K}\delta^{-\epsilon_{n,p}(K)}\max\{1,\sup_{\delta\le\tau\le1}M_{p,n}(\tau,K,E+n+1)\},\qquad \epsilon_{n,p}(K)\longrightarrow0. $$
Indeed a depth $l\le C+\log_K\delta^{-1}$ contributes at most $lC_M^l$ narrow coefficient after $\ell^2$ summation; all broad-node and buffer constants are used once per node, hence enter the prefactor, not its depth exponent. Absorb $l\le2^l$. For dyadic $\delta$ the actual residual scales in this argument are dyadic, so the supremum may first be restricted to those actual scales. Taking $K$ dyadic loses no limit; all-scale recovery is deferred to the final step. Include $\tau=1$ or the explicit $1$ to handle the final and $\delta=1$ cases. The buffered product estimate uses the same $\ell^2$ degree-one superadditive functional as the linear estimate, so its weight transfer is valid. [given, F1, construct, algebra]

10.1 To bound that multilinear quantity locally on $B^n$, Cauchy over the step-$\delta^u$ pieces loses at most $C_K\delta^{-u/2}$. Cover by radius-$\delta^{-u}$ balls. On each unweighted small ball use Holder over the $M$ factors, Minkowski over pieces, and local Bernstein from $L^2(w_{U,E})$ to $L^p(U)$ for their length-$\delta^u$ arcs. The result is $\|\prod_i|E_{I_i}g|^{1/M}\|_{L^p_\sharp(B^n)}\le C\delta^{-u/2}A_p(u,B^n,u)$. Homogeneous product transfer gives the weighted estimate with the same $E$. Combining with the preceding two steps, for each fixed $E$ and every small $\epsilon,\sigma_0>0$ gives
$$ \eta_E\le\epsilon_{n,p}(K)+\epsilon+u/2+(1-uW)(\eta_*+\sigma_0). $$
Choose the finite tree and a positive rational $u$ using only $n,p,W$, before choosing $K$ or $E$. First let the two losses tend to zero and then let dyadic $K\to\infty$ for this fixed $E$. Now take the supremum over $E$ to obtain $\eta_*\le u/2+(1-uW)\eta_*$, hence $\eta_*\le1/(2W)$. Since $W$ was arbitrary, every $\eta_E=0$. This order uses no uniform-in-$E$ bound on constants. [given, F1, construct, algebra]

11.1 All mesh uses in the preceding estimates can be exact. At any chosen finite depth the scale multipliers are rational and the branch probabilities alone may be irrational. For $\delta=2^{-N}$ choose $Q$ clearing the finitely many multiplier denominators and use $u_N=(Q/N)\lfloor Nu/Q\rfloor$. Then every logarithmic mesh scale is an integer, $u_N\to u$, and $u_N\in[u/2,u]$ for large $N$. The inequalities are uniform in that compact range because their analytic suppliers are uniform in actual radii; replacing $u$ by $u_N$ changes exponents by $O(1/N)$ and therefore only a bounded factor. This proves the preceding exponent bounds on all dyadic scales; pass to arbitrary real $\delta$ by the smooth two-grid mesh lemma. Coarse starting offsets inside each $I_i$ remain fixed, so all its fine meshes are nested; dyadic $K$ makes the broad/narrow meshes compatible too. The bounded remaining range follows from the trivial finite Cauchy bound. Thus no claim has been narrowed to convenient scales, and no same-$E$ reverse Holder or anisotropic covering inequality was used. [given, F1, construct, algebra] ∎

