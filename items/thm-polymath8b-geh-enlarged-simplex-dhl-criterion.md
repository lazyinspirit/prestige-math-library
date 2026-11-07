---
dependency_level: 7
id: thm-polymath8b-geh-enlarged-simplex-dhl-criterion
kind: theorem
title: Polymath8b’s GEH enlarged-simplex criterion for DHL[k,m+1]
status: draft
origin: pipeline
deps:
- def-polymath8b-enlarged-simplex-variational-quantity
- def-generalized-elliott-halberstam-hypothesis
- def-admissible-prime-tuple
- def-countable-choice
- lem-polymath8b-direct-selberg-forms-and-weighted-almost-primality
- lem-polymath8b-rough-prime-products-and-difference-energy
- lem-geh-prime-level-and-rough-divisor-product-distribution
- lem-riemann-simplex-tensor-box-approximation
- lem-polymath8b-l2-marginal-is-well-defined
- thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
- lem-prime-level-shifted-endpoint-and-divisor-weight-control
- lem-prime-power-removal-for-fixed-tuple-divisor-weights
- lem-nonnegative-prime-cluster-weights-detect-bounded-gaps
- lem-euclidean-bump-for-a-compact-set-inside-an-open-set
- thm-chinese-remainder-theorem
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4
    url: https://arxiv.org/pdf/1407.4897v4
proof_strategy: direct
axiom_use: CountableChoice is retained exactly from the existing completeLebesgue L2Definition, smoothdensity/comparison and directSchwartzFourier form. GEH(theta) is given at its full family-uniform scope; no stronger choice axiom or external theorem is imported.
---

## Statement

Let $k\ge2$, $m\ge1$, $0<\epsilon<1/(k-1)$, and $0<\theta<1$, and let $H$ be an admissible $k$-tuple. Assume GEH($\theta$). If $M_{k,\epsilon}>2m/\theta$, then infinitely many translates of $H$ contain at least $m+1$ primes.


## Statement references

[[def-polymath8b-enlarged-simplex-variational-quantity|Enlarged-simplex functionals]]

[[def-generalized-elliott-halberstam-hypothesis|GEH hypothesis]]

[[def-admissible-prime-tuple|Admissibility]]



## Facts & Assumptions

**Given:** Exactly the original Statement. Write $A=1+\epsilon$, $B=1-\epsilon$, $D=\{t_i\ge0,\sum_i t_i\le A\}$.

[A1] [[def-polymath8b-enlarged-simplex-variational-quantity]] defines the full nonzero real completedLebesgue $L^2$ supremum under [[def-countable-choice]]. That inherited choice boundary is retained.

[F1] [[lem-polymath8b-direct-selberg-forms-and-weighted-almost-primality]] proves the direct $\mu F$ quadratic forms for denominators $[d,e]$ and $\varphi([d,e])$, and the full mixed-weight rough-removal bound $O(\delta+1/\log N)$ with its uniform constants.

[F2] [[lem-polymath8b-rough-prime-products-and-difference-energy]] proves the fixed-$\delta$ rough coordinate moment and its limiting constant $\int_0^1f'g'$ by the finite-difference energy identity.

[F3] [[lem-geh-prime-level-and-rough-divisor-product-distribution]] derives every fixed interior prime level from the GIVEN [[def-generalized-elliott-halberstam-hypothesis]], and every logarithmic saving for the rough-coordinate discrepancy at squarefree moduli with fixed divisor weights. Its input families verify all SW savings, not merely the output saving.

[F4] [[lem-polymath8b-l2-marginal-is-well-defined]], [[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]] and [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]] give respectively the $\sqrt A$ marginal norm bound, global smooth $L^2$ approximation, and exact BorelRiemann/Lebesgue comparison under the same CountableChoice scope.

[F5] [[lem-riemann-simplex-tensor-box-approximation]] gives finite tensor boxes, a uniform absolute envelope and coordinate GOOD sums $G_i$ with $\beta_i=2\int H_iG H_iG_i-\int(H_iG_i)^2\ge J_{i,B}(G)-C_{k,A}M^2h$.

[F6] [[lem-prime-level-shifted-endpoint-and-divisor-weight-control]] supplies the exact full-weight shifted endpoints and every logarithmic saving with modulus weight $\tau_{3k}$.

[F7] [[lem-prime-power-removal-for-fixed-tuple-divisor-weights]] removes proper powers GLOBALLY before expanding moduli, for arbitrary finite coefficient arrays with product support $R<N/2$.

[F8] [[lem-nonnegative-prime-cluster-weights-detect-bounded-gaps]] turns $S_2>mS_1$ at arbitrarily large intervals into the full prime-cluster conclusion for $m<k$.

[F9] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] gives the explicit finite smooth cutoffs used below. [[thm-chinese-remainder-theorem]] and [[def-admissible-prime-tuple]] give a finite good presieving residue; all estimates hold uniformly in that residue.

## Proof

1.1 By [A1] choose ONE class $F$ with $I(F)>0$ and $\rho=\sum_iJ_i(F)/I(F)>2m/\theta$; otherwise $2m/\theta$ would bound the supremum. Choose $2m/\rho<\theta_1<\theta$ and $m/\rho<\alpha<\theta_1/2$. Then $\alpha\sum J_i(F)>mI(F)$. The original range $\epsilon<1/(k-1)$ gives $A(k-1)/k<1$ and $A\alpha<1$, since $A<k/(k-1)\le2$ and $\alpha<1/2$. The marginal bound in [F4] gives $\sum J_i(F)\le kAI(F)$, hence $m<kA\alpha<k$. No restriction of the original parameter range was added. [A1, F4, given, construct, algebra]

2.1 Here is the precise reuse of the completed $L^2$ bridge, independently of the EH condition $A\theta<1$. Choose a real smooth compact global $\phi$ near $F$ in norm by [F4], and put $F_0=\phi1_D$. Because $F=0$ almost everywhere off $D$, $\|F-F_0\|_2\le\|F-\phi\|_2$. The marginal bound gives $\|H_iF-H_iF_0\|_2\le\sqrt A\|F-F_0\|_2$. If $u=\|F\|_2$ and this error is $\eta<u/4$, then $|I(F_0)-I(F)|\le\eta(2u+\eta)$ and $|J_i(F_0)-J_i(F)|\le A\eta(2u+\eta)$. Choose $\eta>0$ so small that $(\alpha kA+m)\eta(2u+\eta)$ is less than half the positive margin $\alpha\sum J_i(F)-mI(F)$. The function $F_0$ and its sections are bounded Borel and continuous off finitely many faces; its marginal on the positive outer simplex is $\int_0^{A-S}\phi(t)dt_i$, a continuous function there. The finite-face Darboux argument and [F4]'s comparison identify all its Riemann and Lebesgue functionals. Thus $F_0$ is a bounded Riemann witness with $I(F_0)>0$ and $\alpha\sum J_i(F_0)>mI(F_0)$. Apply [F5] with fixed sufficiently small mesh $h$ and norm tolerance to obtain a FINITE smooth box sum $G=\sum_Qc_Q\prod_i\rho_{Q,i}$ and its GOOD partial sums $G_i$ such that $I(G)>0$ and $\alpha\sum_i\beta_i>mI(G)$. Every box has compact closure in the positive simplex $S<A$, and a GOOD $i$th box has other-coordinate right endpoints summing strictly below $B$. All functions, mesh and constants are now fixed before $N\to\infty$. [A1, F4, F5, step 1.1, construct, algebra]

3.1 For each box and $s\ge0$ put $f_{Q,i}(s)=\int_{s/\alpha}^\infty\rho_{Q,i}(u)du$. It is constant near zero and zero for $s$ at or above $\alpha$ times that box's right endpoint. Multiplication by one cutoff from [F9], equal to one on a neighbourhood of $[0,\alpha A]$ and supported in $(-1,\alpha A+1)$, makes it a specified member of $C_c^\infty(\mathbb R)$ without changing any nonnegative argument. Thus $S(f_{Q,i})\le\alpha b_{Q,i}<1$ and $f_{Q,i}'(s)=-\alpha^{-1}\rho_{Q,i}(s/\alpha)$ for $s\ge0$. Write $T=\log N$, $y=\log\log\log N$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$ and [F9, step 1.1, step 2.1, construct, algebra]
$$L=\alpha T,\qquad D_N=\frac N{W(aL)^k},\qquad B_G(n)=\sum_Qc_Q\prod_i\lambda_{f_{Q,i}}(n+h_i),\qquad\lambda_f(u)=\sum_{d\mid u}\mu(d)f(\log d/T).$$
Define $B_{G_i}$ by selecting its GOOD components. On a good residue $n\equiv b\pmod W$, shared coordinate primes outside $W$ cannot occur in nonzero divisor tuples, since they would divide a fixed shift difference; primes in $W$ divide no $n+h_i$. Thus the effective divisor arrays may be restricted to product-squarefree tuples coprime to $W$. Their coefficients are uniformly bounded (all component sums are finite) and have product support $R=N^{\alpha A}<N/2$ for large $N$. Admissibility and finite CRT in [F9] supply such $b$; no simultaneous selection over $N$ is needed. [F9, step 1.1, step 2.1, construct, algebra]

4.1 For a pair of components $Q,Q'$ write $f_i=f_{Q,i}$, $g_i=f_{Q',i}$, $s_i=S(f_i)$ and $t_i=S(g_i)$. Their total is less than $2\alpha A$. One coordinate $j$ satisfies [F3, step 1.1, step 3.1, algebra]
$$\sum_{i\ne j}(s_i+t_i)\le\frac{k-1}{k}\sum_i(s_i+t_i)<2\alpha<\theta_1.$$
Fix, once for the FINITELY MANY pairs, a cutoff exponent $\theta_2<\theta_1$ larger than all these outer sums. Every individual $s_i,t_i<1$, as proved in step 3.1. These are the exact supports needed in [F3]; no global condition $R^2<N$ is assumed. [F3, step 1.1, step 3.1, algebra]

5.1 We now derive the actual non-prime first moment for this component pair. First fix $0<\delta<\min(1/(20k),1/4)$. By [F1], removing integers with $p(n+h_j)\le N^\delta$ changes the pair sum by at most $O(\delta+1/T)N/[W(aT)^k]$. This is its mixed-weight consequence: $|\lambda_f\lambda_g|\le(|\lambda_f|^2+|\lambda_g|^2)/2$ at each shift, followed by a finite $2^k$ expansion. In particular the constant is independent of small fixed $\delta$; no rough-removal theorem is imported. [F1, step 4.1, algebra]

6.1 On the remaining integers expand the direct divisor sums in all coordinates EXCEPT $j$. A compatible pair has $d_i,e_i$ squarefree, all coordinate lcms pairwise coprime and coprime to $W$. Its modulus is [F3, F9, step 4.1, step 5.1, algebra]
$$q=W\prod_{i\ne j}[d_i,e_i]\le WN^{\sum_{i\ne j}(s_i+t_i)}\le N^{\theta_2}$$
for large $N$. The residue class of $u=n+h_j$ is reduced: every outside prime in coordinate $i$ makes $u\equiv h_j-h_i\ne0$, and at $W$ this is the chosen good class. The EXACT interval is $N+h_j-1<u\le2N+h_j-1$. Use [F3] for the rough sequence $\lambda_{f_{Q,j}}\lambda_{f_{Q',j}}$ on that shifted window. The discrepancy errors have every logarithmic saving even after summing outer coefficients: each squarefree $q$ has at most $\tau_{3k}(q)$ coefficient pairs, since each outside prime chooses a coordinate and membership in $d$ only, $e$ only or both; every coefficient is bounded by a fixed constant. On squarefree $q$, $\tau_{3k}(q)\le\tau(q)^s$ for a fixed integer $s\ge\log_2(3k)$. Choose the saving in [F3] larger than every fixed logarithm loss. The total error is $o_\delta(D_N)$. [F3, F9, step 4.1, step 5.1, algebra]

7.1 The unit mean in this expansion is $\varphi(q)^{-1}\sum_{(u,q)=1}\lambda_{f_j}(u)\lambda_{g_j}(u)1_{p(u)>N^\delta}$ on the same window. Replace it by the unrestricted rough sum. This correction is negligible, and its bound is as follows. On the rough set the divisor product is bounded by a constant depending on fixed $\delta$. A deleted $u$ has a prime $p>N^\delta$ dividing one outer lcm and $u$. There are at most $CN/p$ such $u$ in the window. For an outer coordinate with squarefree lcm $\ell$, there are at most $3^{\omega(\ell)}$ pairs; the sum of their absolute mean weights is bounded by $\sum_{\ell\le N^2}\mu(\ell)^2 3^{\omega(\ell)}/\varphi(\ell)\ll(\log N)^C$ by the fixed Euler-product bound in [F1]'s proof. If $p\mid\ell$, factoring that prime out gives the additional factor $O(1/p)$. Drop all remaining coprimality restrictions for this positive majorant and sum over the at most $k-1$ designated coordinates. The full correction is therefore [F1, step 6.1, algebra]
$$\ll_\delta\frac N{\varphi(W)}(\log N)^C\sum_{p>N^\delta}p^{-2}\ll_\delta N^{1-\delta}(\log N)^C/\varphi(W)=o_\delta(D_N).$$
This retains both the $1/p$ progression count and the $1/p$ outer-lcm factor; no unsupported per-modulus prime-power or coprimality error is used. [F1, step 6.1, algebra]

8.1 The remaining outer coefficient sum is EXACTLY the direct quadratic form of [F1] with $k-1$ coordinates, $\chi(p)=p-1$, $Q=W$, $L=T$. It equals $(aT)^{-(k-1)}[\prod_{i\ne j}\int_0^\infty f_i'g_i'+o(1)]$. The unrestricted rough coordinate sum is $[C_\delta(f_j,g_j)+o_\delta(1)]N/T$ by [F2]. Multiplication by $1/\varphi(W)=1/(aW)$ therefore gives [F1, F2, F3, step 3.1, step 5.1, step 6.1, step 7.1, algebra]
$$\frac N{W(aT)^k}\left[C_\delta(f_j,g_j)\prod_{i\ne j}\int_0^\infty f_i'g_i'+o_\delta(1)\right].$$
All $f_i,g_i$ have support less than one on the nonnegative half-line. By [F2], $C_\delta(f_j,g_j)\to\int_0^1f_j'g_j'=\int_0^\infty f_j'g_j'$. First take $N\to\infty$ at fixed $\delta$, then let $\delta\downarrow0$ and use the explicit rough error in step 5.1. This proves the full pair first moment with constant $\prod_i\int f_i'g_i'$, with no varying-$\delta$ GEH family. Finite summation over the fixed component pairs and the substitutions in step 3.1 give
$$S_1=\sum_{N\le n<2N,\ n\equiv b\ (W)}B_G(n)^2=D_N[I(G)+o(1)],$$
because $\int_0^\infty f_{Q,i}'f_{Q',i}'=\alpha^{-1}\int\rho_{Q,i}\rho_{Q',i}$ and the $k$ factors yield $\alpha^{-k}I(G)$. The omitted coordinate may vary between component pairs; all are in a finite set and all margins were fixed in step 4.1. [F1, F2, F3, step 3.1, step 5.1, step 6.1, step 7.1, algebra]

9.1 We next derive precisely the prime-LOG bilinear moments needed for the lower bound. By [F3], the given GEH$(\theta)$ supplies the actual full-weight prime level $\theta_1<\theta$. For coordinate $i$, every full component of $G$ and GOOD component of $G_i$ have outer support sum less than $\alpha(A+B)=2\alpha<\theta_1$; two GOOD components satisfy it as well. On $n+h_i$ prime, $\lambda_{f_{Q,i}}(n+h_i)=f_{Q,i}(0)$, since its other possible divisor is the prime and $S(f_{Q,i})<1$. Apply [F7] to the two effective arrays through polarization $(u v)=((u+v)^2-(u-v)^2)/4$. Their support $R<N/2$ and bounded coefficients give global proper-power error $O(N^{1/2+\kappa})$ times a fixed logarithm power, for any fixed $0<\kappa<1/2$; it is $o(D_NL)$. Expand only AFTER this removal. The reduced CRT progression has exactly the endpoints $N+h_i-1$ and $2N+h_i-1$, modulus at most $WN^{2\alpha}$, and the preceding outer support margin. By [F6], its full-Lambda error summed with pair multiplicity $\tau_{3k}$ has every saving. All constants and smooth tests are fixed, so this error is $o(D_NL)$. No maximum over endpoints is invoked. [F3, F6, F7, step 3.1, step 8.1, algebra]

10.1 The main term for a full/GOOD pair is $N/\varphi(W)$ times the $(k-1)$-coordinate direct form with denominators $\varphi([d_l,e_l])$ and the two scalars $f_{Q,i}(0)f_{Q',i}(0)$. Apply [F1] with $Q=W$, $L=T$. The exact substitutions $f_{Q,i}(0)=\int\rho_{Q,i}$ and $f_{Q,l}'=-\alpha^{-1}\rho_{Q,l}(\cdot/\alpha)$ give, after finite summation, [F1, step 3.1, step 9.1, algebra]
$$T_i(G,G_i)=D_NL\left[\int H_iG\,H_iG_i+o(1)\right],\qquad T_i(G_i,G_i)=D_NL\left[\int(H_iG_i)^2+o(1)\right].$$
Indeed the outer form contributes $(aT)^{-(k-1)}\alpha^{-(k-1)}$ and $N/\varphi(W)$ converts it to $D_NL$, so no factor $A$ or $\alpha$ has been lost. This is only a signed prime-LOG bilinear evaluation; no signed prime-count/log conversion is asserted. Empty GOOD collections give zero arrays and zero main terms. [F1, step 3.1, step 9.1, algebra]

11.1 Pointwise $b^2\ge2bg-g^2$. Multiply by the nonnegative prime-LOG weight to get $T_i(G,G)\ge2T_i(G,G_i)-T_i(G_i,G_i)\ge D_NL[\beta_i-o(1)]$. The full nonnegative weights $w(n)=B_G(n)^2$ have $\log(n+h_i)\le\log N+C_H$ on the interval, so their prime-count sum satisfies [F5, F8, step 1.1, step 2.1, step 8.1, step 10.1, algebra]
$$S_2\ge\frac{\sum_iT_i(G,G)}{\log N+C_H}\ge D_N\left[\alpha\sum_i\beta_i-o(1)\right]>mS_1.$$
The strict fixed margin is step 2.1, and $I(G)>0$ makes the first moment positive for all sufficiently large $N$. We converted only the full nonnegative weights. Apply [F8], using $m<k$ from step 1.1, to obtain infinitely many translates containing at least $m+1$ primes. This is precisely the full original conclusion at all its original $k,m,\epsilon,\theta,H$. GEH remains a given hypothesis; no claim about its truth, a numerical DHL[3,2] witness, stronger $4.0043$ certificate or growing-parameter family has been made. [F5, F8, step 1.1, step 2.1, step 8.1, step 10.1, algebra] ∎

## Source notes

This reconstructs the GEH branch of Polymath8b Theorem3.12, full §5.3, printedpp36–40, using the locally reconstructed source Lemma4.1/Proposition4.2 and §4.5 coefficient-convolution arguments. The arithmetic S1 step genuinely goes beyond the ordinary $R^2<N$ CRT error; no ordinary EH criterion is applied outside its scope. The omitted-coordinate main constant, every-log family SW input, boundary/repeated-bin majorants and rough-limit normalization are all proved in the three new suppliers. The actual prior L2 and tensor geometry interfaces are used at their stated scopes; the accepted H246/1295certificate is neither used nor reviewed. The original CountableChoice branch is retained exactly.
