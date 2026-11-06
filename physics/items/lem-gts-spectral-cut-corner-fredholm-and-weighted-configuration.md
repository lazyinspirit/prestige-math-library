---
id: lem-gts-spectral-cut-corner-fredholm-and-weighted-configuration
kind: lemma
title: General totally real corner cappings and weighted Fredholm configurations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: gts-symplectic-compactness-floer-fukaya
dependency_level: 4
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
- def-axiom-of-choice
- def-gts-capped-weighted-label-changing-corner-data
- lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions
- thm-plancherel
- thm-bounded-inverse-theorem
- thm-fredholm-index-is-stable-under-compact-perturbations
- thm-implicit-function-theorem-for-banach-spaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-capped-weighted-label-changing-corner-data: mathematical-premise
  lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-bounded-inverse-theorem: mathematical-premise
  thm-fredholm-index-is-stable-under-compact-perturbations: mathematical-premise
  thm-implicit-function-theorem-for-banach-spaces: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry
    url: https://arxiv.org/pdf/1011.1690v2
    locator: 'Sections 3.2–3.4, especially Exercise 3.26, printed pp.104–117: formal-adjoint, closed Fredholm and
      smooth totally real disk Maslov-index background. Wendl gives only a sphere proof and heuristic general-genus
      discussion of the closed index; the actual arbitrary-genus local Dirac supplier is retained. The general nonunitary/Jordan
      corner capping, arbitrary-forcing inverse, weighted nonlinear charts and full proof below are local constructions,
      not assertions imported from these sections.'
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. The spectral-cut construction exists for every pair of totally real planes, including non-unitary monodromy, nonreal exponents and nontrivial Jordan blocks. For the defined capped corner data, let $P$ be a smooth real Cauchy–Riemann operator on the punctured bordered surface. In the end frames suppose its cylindrical expression is $\partial_s+i\partial_t+B(s,t)$, with $B$ real-linear multiplication whose derivatives through every required finite order are $O(e^{-\epsilon s})$ for some $\epsilon>0$. Then
$$
P:\mathcal X^k_\delta\longrightarrow\mathcal Y^{k-1}_\delta
$$
is real Fredholm for every integer $k\ge1$, with index $m\chi(S)+\mu_\delta$. Kernel/cokernel dimensions and range obstructions agree for all $k$ in the precise capped reference comparison below. Solutions are smooth on each open arc and finite cylindrical segment; no ordinary smoothness across a label jump is asserted. Its $H^1\to L^2$ realization has its genuine finite-dimensional weak adjoint annihilator, with the induced dual weight and adjoint edge conditions.

Adding a prescribed finite-dimensional asymptote parameter manifold of real dimension $c$ adds $c$ to the index, provided its cutoff constant extensions have image in the stated weighted target; $\delta<\epsilon$ is sufficient under the displayed coefficient bound. For $k\ge3$, so all node and incidence evaluations are bounded, matching normalization nodes away from the corner marks subtracts $2m$ per interior node and $m$ per same-label boundary node; ordinary core incidence constraints and finite obstruction parameters have their usual finite-codimension/finite-rank effects.

For smooth embedded totally real labels, the defined fixed-asymptote map problem has local weighted Banach charts without a clean-intersection hypothesis. The moving branch has such charts on its prescribed clean $C_j$ (or an explicitly restricted smooth parameter submanifold). The nonlinear Cauchy–Riemann map is smooth from order $k\ge3$ to order $k-1$, with the weighted quadratic remainder estimate on bounded coordinate neighborhoods. At a surjective finite augmentation, its regular zero set is a finite-dimensional manifold in that weighted topology, of the Fredholm index plus the stated parameter contributions. These conclusions do not identify that topology with the unenhanced compact-graph topology at arbitrary nonclean corners.

## Statement references

[[def-gts-capped-weighted-label-changing-corner-data]]

[[lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions]]

## Facts & Assumptions

**Given:** The data in the Statement, full AC, the fixed positive admissible cuts, and the specified finite coefficient bounds.

[F1] Smooth capped boundary pairs have the real Fredholm index $m\chi+\mu$, with smooth kernel, weak adjoint regularity and identical higher realizations. [[lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions]]

[F2] Plancherel and the bounded inverse theorem apply to the explicit end inverse and Fredholm complements; compact zeroth-order perturbations preserve index. [[thm-plancherel]], [[thm-bounded-inverse-theorem]], [[thm-fredholm-index-is-stable-under-compact-perturbations]]

[F3] The Banach implicit function theorem applies to a smooth map whose derivative has a bounded right inverse and finite-dimensional kernel. [[thm-implicit-function-theorem-for-banach-spaces]]

## Proof

**Given:** [F1]–[F3]. All matrix functions used below are specified by finite primary decompositions, not by an assumed unitary diagonalization.

1.1 Choose a complex basis sending $F_0$ to $\mathbb R^m$. Its conjugation is ordinary complex conjugation, so for $M=\tau_1\tau_0$ one has $\overline M=M^{-1}$: indeed $\tau_0M\tau_0=\tau_0\tau_1=(\tau_1\tau_0)^{-1}$. Both involutions are invertible, so every eigenvalue of $M$ is nonzero. The forbidden arguments modulo $2\pi$ form a finite set; hence positive admissible $\delta$ exist, arbitrarily close to zero if desired. On the plane slit along the forbidden ray choose $f(z)=-(2\pi i)^{-1}\log z$ with $\delta<\operatorname{Re}f(z)<\delta+1$. The slit is invariant under $z\mapsto1/\bar z$, and directly from modulus and argument one has $f(1/\bar z)=\overline{f(z)}$. [given, construct, algebra]

2.1 Define $A=f(M)$ explicitly. Factor the characteristic polynomial over $\mathbb C$; the pairwise coprime primary factors give complementary projectors by Bézout identities. On the generalized eigenspace $V_\lambda=\ker(M-\lambda I)^m$, write $N=M-\lambda I$ and set $f(M)|_{V_\lambda}=\sum_{r=0}^{m-1}f^{(r)}(\lambda)N^r/r!$, ignoring terms already zero. Analytic scalar identities are preserved by these finite nilpotent expansions. In particular $\exp(-2\pi iA)=M$ and $\operatorname{spec}A=f(\operatorname{spec}M)$. Conjugating this finite functional calculus and using $\overline M=M^{-1}$ and the identity in step 1.1 gives $\overline A=\overline f(M^{-1})=f(M)=A$. Thus $A$ is a real matrix, although its eigenvalues may be nonreal and it need not be diagonalizable. For $T=e^{-i\pi A}$, the conjugation fixing $T\mathbb R^m$ is $T\overline T^{-1}\tau_0=e^{-2\pi iA}\tau_0=M\tau_0=\tau_1$, so $F_1=e^{-i\pi A}\mathbb R^m$. This proves the required logarithm and endpoint identity at the full totally real scope. [step 1.1, construct, algebra]

3.1 The capping is an actual smooth bundle construction. On a punctured half-disk $G(z)=\exp(A\log z)$ is invertible and holomorphic. On $t=0$, $G=e^{-sA}$ is real invertible; on $t=\pi$, $G=e^{-i\pi A}e^{-sA}$ maps $\mathbb R^m$ onto $F_1$. Glue a new trivial bundle over the filled half-disk to the old bundle on an annular overlap by $G$. Its transition is smooth and invertible on that overlap, and its new boundary condition is the constant real plane at both edges and the filled point. Away from this one overlap use the old transition maps. This defines $(\widehat E_\delta,\widehat F_\delta)$ without requiring $G$ to be invertible at zero. Its conjugate double and Chern degree are the smooth-pair construction of [F1]. No continuous old trace plane at the jump was manufactured. [F1, step 2.1, construct, algebra]

3.2 An end parametrix exists for unrestricted forcing. Put $\xi=e^{-itA}w$, so $w$ has real boundary trace at both edges, and the flat end operator becomes $\partial_s+i\partial_t+A$. On the real Hilbert space of interval functions, the basis $e^{-int}v$, $n\in\mathbb Z$, $v\in\mathbb R^m$, is complete: the paired frequencies span real cosine coefficients and imaginary sine coefficients, both complete in their respective $L^2$ summands. Conjugation by $e^{\delta s}$ and Fourier transform in $s$ give matrices $(i\tau+n-\delta)I+A$. Their eigenvalues never vanish because $\delta<\operatorname{Re}\operatorname{spec}A<\delta+1$. For $|\tau|+|n|$ sufficiently large the Neumann series around the scalar $(i\tau+n-\delta)I$ bounds the inverse by $C/(1+|\tau|+|n|)$. On the remaining compact $\tau$ intervals and finitely many $n$, continuity and invertibility give the same bound with a larger constant. This includes every Jordan block; no orthogonal eigenbasis or unit-circle spectrum is used. Plancherel gives an $L^2\to H^1$ inverse on the full strip. Longitudinal difference quotients commute with the operator and preserve real traces; the equation recovers the missing normal derivatives inductively. Thus it gives $H^{k-1}\to H^k$ bounds for arbitrary forcing, without a high-order reflection assertion for its boundary jets. At the finite strip endpoint use the finite Vandermonde extension in $s$, then restrict the full-strip inverse. [F2, step 2.1, construct, algebra]

4.1 Patch these end inverses to ordinary smooth boundary/core parametrices from [F1]. Cutoff commutators are zeroth order on fixed compact strips; after a first-order inverse they are compact by finite-chart Sobolev inclusion, proved by bounded half-chart extension and Fourier truncation. Multiplication by $B$ is compact from $\mathcal X^k_\delta$ to $\mathcal Y^{k-1}_\delta$: truncate it at depth $R$, use the same compact inclusion on the truncated part, and bound its tail norm by $Ce^{-\epsilon R}$. The patched two-sided parametrix proves Fredholmness. It also allows replacing $P$, through a compact perturbation, by a reference $P_0$ which agrees on the core and is exactly flat on sufficiently deep ends. For $P_0$, the change by $G$ defines a smooth capped CR operator $\widehat P_0$: on the cap it is the ordinary $\bar\partial$, and on the overlap this follows from holomorphicity of $G$. [F1, F2, step 3.1, step 3.2, construct, algebra]

5.1 The kernel comparison for $P_0$ is exact. If $P_0\xi=0$ on an end, $v=G^{-1}\xi$ is holomorphic and has real boundary values on both open edges, so conjugate reflection extends it holomorphically to a punctured disk. There is a positive gap $h$ with $\max\operatorname{Re}\operatorname{spec}A-\delta\le1-h$. Finite nilpotent expansions bound $G^{-1}$ by a polynomial in $s$ times $e^{s\max\operatorname{Re}\operatorname{spec}A}$. The homogeneous local end estimates of step 3.2 promote a weighted kernel element through $H^2$ on unit patches, whose Sobolev estimate bounds $\xi$ by $Ce^{-\delta s}$, so $v=O(e^{(1-h)s}(1+s)^m)=o(|z|^{-1})$. Its Laurent coefficients of negative degree vanish: the coefficient of $z^{-r}$ is bounded on a circle of radius $\rho$ by $\rho^r\sup|v|\to0$ for every $r\ge1$. Thus $v$ extends smoothly over zero. Conversely a smooth capped homogeneous $v$ gives $\xi=Gv$; every cylindrical derivative is bounded by a polynomial in $s$ times $e^{-s\min\operatorname{Re}\operatorname{spec}A}$, which lies in every specified finite-order $\delta$ norm by the strict lower spectral gap. This identifies the real kernels. [F1, step 2.1, step 3.1, step 3.2, step 4.1, algebra]

6.1 The cokernel comparison does not equate ordinary and weighted Sobolev objects. Send a smooth capped target to the old cylindrical target using $G$ and the actual coordinate factor $-2\bar z$, since $\partial_s+i\partial_t=-2\bar z\partial_{\bar z}$. It belongs to $\mathcal Y^{k-1}_\delta$ by the same strict spectral gap. This intertwines the two operators on smooth sections. Compactly supported smooth targets away from the caps are dense in the weighted target and lie in this image; since the weighted cokernel is finite-dimensional by step 4.1, the induced map of cokernels is surjective. If such a smooth capped target has a weighted preimage $\xi$, then $v=G^{-1}\xi$ solves the smooth capped equation off the mark with growth $o(|z|^{-1})$. Subtract a smooth local solution of the capped inhomogeneous equation with real edge trace, obtained from the smooth boundary local parametrix of [F1]. The remaining function is holomorphic with real edge trace and the same growth, so the Laurent argument of step 5.1 removes its puncture. The preimage is consequently a smooth capped section. This proves injectivity on the smooth-target quotient and hence equality of cokernel dimensions for $P_0$. It proves the same kernel/cokernel comparison for every finite Sobolev order. Therefore $\operatorname{ind}P=\operatorname{ind}P_0=\operatorname{ind}\widehat P_0=m\chi(S)+\mu_\delta$. For the perturbed $P$ the Fredholm kernel and cokernel may change, while the index remains this value; no equality of their separate dimensions with $P_0$ is claimed. [F1, F2, step 4.1, step 5.1, construct, algebra]

7.1 At order one the closed weighted range has its actual finite-dimensional annihilator by the Hilbert-space orthogonal decomposition. Conjugate the weight into the operator. Integration by parts against compactly supported end tests gives the weak formal adjoint, with longitudinal sign reversed and the induced adjoint edge planes $(iF_j)^{\perp_{\mathbb R}}$. This equation is obtained before assuming any boundary trace. The adjoint of the full-strip inverse in step 3.2 gives the corresponding local weak $H^1$ estimate; folding/tangential difference quotients as in [F1] promote the annihilator to smoothness on each finite closed half-strip. On the ends its membership is the actual dual weighted Hilbert condition, not ordinary smoothness at the filled corner. The same parametrices and local estimates show that the higher realizations of a fixed $P$ have their identical kernel and obstruction quotient. Uniformity over compact coefficient families follows because the ray avoids the spectra by a uniform gap and the finite matrices/resolvents in step 3.2 have bounded norm there. Smooth dependence of $A$ even through repeated eigenvalues follows from $f(M)=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta I-M)^{-1}d\zeta$ on fixed local contours avoiding the slit; this identity equals the finite primary formula by residues and differentiation of its finite matrix entries is legitimate. [F1, F2, step 2.1, step 3.2, step 4.1, step 6.1, construct, algebra]

7.2 Adding an asymptote coordinate $a$ in a prescribed $c$-dimensional smooth parameter manifold adds $c$ dimensions to the linear domain. Its cutoff extension is a finite-rank augmentation: the limiting constant belongs to both trace planes, its flat end derivative is zero, and its remaining image decays with the coefficients and lies in the target by the stated $\delta<\epsilon$ or image condition. Thus the index increases by $c$. For the asserted node/point constraints take $k\ge3$. Node differences and incidence evaluations are supported away from the corner marks and are onto their finite targets, using disjoint smooth cutoff sections in the core. Splitting by those lifts as in [F1] subtracts exactly their dimensions, $2m$ or $m$ per node and the declared incidence codimensions. This argument does not treat the singular set $L_0\cap L_1$ as a smooth parameter manifold by fiat. [F1, F2, step 4.1, step 6.1, construct, algebra]

8.1 Nonlinear boundary charts need no simultaneous straightening of two submanifolds. For a fixed $p\in L_0\cap L_1$, choose a product tubular metric $g_0$ making $L_0$ totally geodesic near $p$ and independently $g_1$ making $L_1$ totally geodesic there. Join them by a smooth positive metric $g_t$, constant near $t=0,\pi$. The chart $\Phi(p,t,v)=\exp_p^{g_t}(v)$ sends $T_pL_j$ into $L_j$ at its corresponding edge and has derivative in $v$ equal to the identity at $v=0$. It is uniformly invertible on a small ball by the finite-dimensional inverse theorem, including at both edges; its inverse on the edge therefore maps $L_j$ back to $T_pL_j$. For a moving asymptote use $p$ in the specified clean $C$, choose these metrics smoothly near $C$, and trivialize its two edge tangent bundles along a small parameter chart. A fixed asymptote requires only the point $p$, regardless of whether the intersection is clean. An unrestricted moving asymptote requires its actual intersection to be the stated smooth clean local manifold; otherwise this chart is only for an explicitly prescribed stratum or fixed point. [given, step 7.2, construct, algebra]

9.1 The map chart on a corner is $u(s,t)=\Phi(p,t,v_0(s,t)+\xi(s,t))$, where $v_0$ is the coordinate expression of the reference map and $\xi$ has the fixed linear edge traces. At fixed $p$, the small weighted ball gives exactly the maps sufficiently close in this specified weighted norm, by pointwise invertibility of $\Phi$. For varying $p$, first separate its finite coordinate in $C$; a smooth trivialization of the edge tangent data identifies the decaying remainders. Changing such choices gives smooth chart transitions. On unit rectangles/half-rectangles a bounded finite reflection extension and Fourier Cauchy–Schwarz give $H^2\hookrightarrow L^\infty$ and the usual differentiated product bounds. The exponential weights vary by a bounded factor on each patch, and $e^{-\delta s}\le1$, so summing over bounded-overlap patches gives $H^k_\delta\cdot H^{k-1}_\delta\subset H^{k-1}_\delta$ for $k\ge3$, with the mixed bounded-coefficient versions as well. At $v=0$ the corner map is constant in $s,t$, so its CR expression vanishes for every allowed $p$; every differentiated nonlinear term has a decaying remainder or a derivative of the decaying reference map. Smooth composition and the product estimates therefore make the CR map smooth to the stated weighted target and give $\|F(\xi)-F(\eta)-DF(0)(\xi-\eta)\|\le C(\|\xi\|+\|\eta\|)\|\xi-\eta\|$ on a small ball, including its finite coordinates. In complex pullback frames its derivative has the flat limiting principal part and exponentially decaying lower coefficients; smooth frame changes tending to their limiting frames put it in the linear realization already proved. [F1, step 3.2, step 7.2, step 8.1, construct, algebra]

10.1 A surjective finite augmentation of this Fredholm derivative has a bounded right inverse on a Hilbert complement by [F2]. Its kernel is finite-dimensional, with dimension equal to its index. Apply [F3], or the contraction map $\xi\mapsto\xi-QF(\xi)$ and the quadratic estimate in step 9.1, to obtain the asserted local regular zero-set manifold and parameter projection whenever its joint derivative is onto. All neighborhoods here use the declared weighted corner topology. Constant corner parameters, finite incidence coordinates and forcing parameters are retained as their actual finite-dimensional variables. This proves the linear corner theory and weighted nonlinear configuration assertion, not an unproved automatic equivalence with an unweighted graph moduli problem. [F2, F3, step 6.1, step 7.1, step 7.2, step 8.1, step 9.1, algebra] ∎

## Remarks

For $F_0=F_1$ and $0<\delta<1$, this convention gives $A=I$ and $G=zI$: the fixed-asymptote cap records a vanishing value at the marked point. Restoring all $m$ real common values adds $m$ to the index and recovers the smooth-boundary value. Thus a corner constraint is not counted for free. Changing the cut can change the capped Maslov degree. A nilpotent or nonreal block is retained in $z^A$, including its logarithmic and oscillatory factors; replacing it by a list of unitary angles would change the problem.
