---
id: thm-gr-local-geometric-uniqueness
kind: theorem
title: "Local geometric uniqueness for a fixed covariant Einstein-matter model with complete data"
status: published
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-flowout-theorem, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, thm-smooth-partitions-of-unity-exist-on-manifolds, def-countable-choice, def-gr-harmonic-gauge-and-reduced-equations, lem-gr-reduced-einstein-principal-part, def-gr-periodic-symmetric-hyperbolic-system, thm-gr-local-symmetric-hyperbolic-well-posedness, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, thm-gr-local-geodesics-and-exponential-map, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-christoffel-symbols-of-an-affine-connection, thm-smooth-inverse-function-theorem-on-manifolds, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-gronwall-integral-inequality]
dependency_roles:
  thm-flowout-theorem: mathematical-premise
  lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it: mathematical-premise
  lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
sources:
  references:
    - title: "Friedrich and Rendall, The Cauchy Problem for the Einstein Equations, sections 3.1-3.2, 5.1-5.2 and 5.4"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Fix $\kappa>0$, $\Lambda\in\mathbb R$ and one covariant matter model: specified smooth tensor fields $\Psi$, specified equations $\mathcal E(g,\Psi)=0$, and a specified stress expression $T=\mathcal T(g,\Psi)$. Covariance means pullback by a local diffeomorphism commutes with these equations and stress expression. Fix complete smooth matter Cauchy data $d$ for this model, a smooth Riemannian metric $h$ and smooth symmetric tensor $K$ on a smooth three-manifold $\Sigma$, with $K(V,W)=g(\nabla_Vn,W)$ for the future unit normal.

The following explicit harmonic-reduction hypothesis is required. On each relatively compact initial coordinate ball, with flat comparison metric $\bar g=-(dx^0)^2+\sum_i(dx^i)^2$, specify finite first-order variables
$$z=(g_{ab},p_{ab}=\partial_0g_{ab},q_{abi}=\partial_ig_{ab},w),$$
fixed smooth extraction and reconstruction rules for $w,\Psi$, and fixed smooth coefficient functions $A^\mu(x,z),B(x,z)$ on an open state set $O$, shared by both solutions, such that:

**(R1)** Every smooth solution of this same model written in harmonic coordinates has extracted variables satisfying
$$A^0(x,z)\partial_0z+\sum_iA^i(x,z)\partial_iz+B(x,z)=0,$$
where all $A^\mu$ are symmetric and $A^0$ is positive definite. Reconstruction recovers all matter fields and $T$ from $z$. Any internal matter gauge has already been fixed with its specified data and equations; otherwise the conclusion must include the appropriate internal gauge equivalence.
**(R2)** The initial value of $w$ is a specified smooth expression $\mathcal I(h,K,d)$ in the full data in this coordinate gauge. Thus $d$ determines every initial first-order variable, not merely initial stress tensor jets.
**(R3)** After shrinking a closed cylinder, both state ranges lie in one compact convex subset of $O$, coefficient first derivatives are bounded and $A^0\ge aI$ for some $a>0$.

These are PDE and extraction hypotheses, not an assumption of geometric uniqueness. Let $(M,g,\Psi,j)$ and $(M',g',\Psi',j')$ be two smooth time-oriented developments of this same model, solving the same Einstein equation $G+\Lambda g=\kappa\mathcal T(g,\Psi)$ and the same matter equations, whose spacelike embeddings induce $(h,K,d)$. Then near each initial point there is a smooth time-orientation-preserving isometry $\Phi$ with $\Phi\circ j=j'$ on the initial patch, $\Phi^*\Psi'=\Psi$ and consequently $\Phi^*T'=T$. Its germ along the initial patch is unique. These germs glue to one such isometry between open neighborhoods of the entire embedded initial surfaces. No uniform collar width or global-in-time assertion is made.

## Facts & Assumptions

**Given:** Countable Choice, the one specified covariant model, its stated reduction and complete data, the two smooth developments, and the normal and second fundamental form convention.

[L1] First-order wave reduction, local symmetric-hyperbolic existence and smooth persistence are supplied by [[lem-gr-reduced-einstein-principal-part]], [[thm-gr-local-symmetric-hyperbolic-well-posedness]], [[thm-gr-periodic-symmetric-hyperbolic-existence]] and [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]. Their actual compact-state and Sobolev transfer is made explicit below.

[L2] The future normal is unique and smooth; in coordinates with $\partial_0=n$ on the surface, $K_{ij}=\tfrac12\partial_0g_{ij}$ ([[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L3] Smooth inverse function theorem, smooth unique geodesic flow, and uniqueness of the metric-selected connection ([[thm-smooth-inverse-function-theorem-on-manifolds]], [[thm-gr-local-geodesics-and-exponential-map]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L4] Divergence theorem and Gronwall inequality ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[thm-gronwall-integral-inequality]]).

[L5] Countable relatively compact coordinate covers, locally finite shrinking and smooth partitions of unity are supplied under Countable Choice by [[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]], [[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]] and [[thm-smooth-partitions-of-unity-exist-on-manifolds]]. A smooth transverse vector field has an injective variable-width flowout of an embedded hypersurface by [[thm-flowout-theorem]].

## Proof

1.1 (Physical wave coordinates.) Fix a relatively compact initial coordinate ball with labels $y^i$. On each physical development solve $$\Box_gx^\mu=0,\quad x^0|_\Sigma=0,\quad x^i|_\Sigma=y^i,\quad n(x^0)|_\Sigma=1,\quad n(x^i)|_\Sigma=0.$$ Start in an orthogonal slice chart obtained by normal geodesic flow [L3]. For each scalar use $(f,P=\partial_0f,Q_i=\partial_if)$, with $\partial_0f=P$, $\partial_0Q_i=\partial_iP$, and the wave equation. Multiplying the $Q$ equations by $g^{ij}$ gives positive time matrix $\operatorname{diag}(1,-g^{00},g^{ij})$ and symmetric spatial matrices: the $P,P$ entry for $\partial_i$ is $-2g^{0i}$, and the $P,Q_j$ and $Q_j,P$ entries are $-g^{ij}$. All lower terms are smooth linear functions of $(P,Q)$. On a smaller compact cylinder positivity persists and all fixed-metric coefficients and derivatives are bounded. Extend the positive time matrix and symmetric spatial matrices by a cutoff and convex interpolation to constants on a torus; extend the smooth data with a cutoff inside a larger chart. At every finite $s\ge5$ their compactly supported derivatives are bounded, giving finite $H^s$ norms and compact state ranges; choose the compact $K,K'$ and finite $R$ of the actual periodic existence theorem. Its local existence and smooth persistence [L1] apply, with their $\mathrm{AC}_\omega$ premise. For the fixed linear wave system, subtract two extensions where the physical coefficients agree. On a compact comparison cylinder let $A^0\ge aI$ and $b\ge\sup_{|\xi|=1}\|\xi_iA^i\|$. Integrating the difference energy over a shrinking ball with speed $\lambda>b/a$ gives nonnegative lateral flux and $E\prime\le CE$, so zero common initial data imply zero difference by Gronwall. This removes dependence on the extensions. Since $\partial_0(Q_i-\partial_if)=0$ and the residual vanishes initially, the resulting scalars solve the original wave equations. Their initial differential maps the tangent label basis to the identical basis and $n$ to $\partial_0$, so they give charts by [L3]. [given, L1, L3, construct]

1.2 (Injective normal collars for arbitrary embedded initial surfaces.) Apply [L5]'s flowout theorem to the global smooth future orientation field $N$, which is transverse to the spacelike hypersurface. Restrict the flowout domain to a variable-width product strip, obtaining an open ambient neighborhood $U$ of the surface with smooth projection $\pi:U\to\Sigma$ and with $j(\Sigma)$ closed relative to $U$ as the zero section. The normal-geodesic map $E(s,p)=\exp_{j(p)}(sn_p)$ is smooth near the zero section by [L3], and its derivative there sends $(V,c)$ to $dj(V)+cn_p$, an isomorphism. Obtain a countable locally finite cover $W_i$ with $K_i=\overline{W_i}\subset V_i$ compact and with $V_i$ relatively compact and locally finite, using [L5]. Compactness and continuity give a width $\epsilon_i>0$ such that $E$ is defined, has invertible derivative, and has $E(( -\epsilon_i,\epsilon_i)\times K_i)\subset\pi^{-1}(V_i)$. For every pair $(i,j)$ with $V_i\cap V_j\ne\varnothing$, there is a symmetric pair width $\tau_{ij}=\tau_{ji}>0$ excluding collisions between distinct $(s,p),(t,q)$ with $p\in K_i,q\in K_j$ and $|s|,|t|<\tau_{ij}$: around each diagonal pair $(p,p)$, local injectivity supplies an open product neighborhood with such a width; finitely many cover the compact diagonal part. Outside their union the remaining subset of $K_i\times K_j$ is compact and contains no diagonal pair, so $E(0,p)=j(p)\ne j(q)=E(0,q)$. The Hausdorff property gives disjoint neighborhoods of these two images, and continuity and a finite subcover give a uniform positive width preventing collisions on that remaining compact subset. Thus the pair width exists without any global closedness of $j(\Sigma)$ in $M$. Each $\overline{V_i}$ meets only finitely many $V_j$, by compactness and local finiteness; choose $\delta_i>0$ less than $\epsilon_i$ and all these finitely many pair widths. Then $E$ is injective and a local diffeomorphism on $\bigcup_i(-\delta_i,\delta_i)\times W_i$: a collision would force $V_i\cap V_j\ne\varnothing$ by the projection confinement and is then excluded by $\tau_{ij}$. It is therefore a diffeomorphism onto an open neighborhood of $j(\Sigma)$. A positive smooth width can be chosen inside this union: let $\rho_i$ be a locally finite partition subordinate to $W_i$ and put $f(p)=\tfrac12\sum_i\delta_i\rho_i(p)$. At each point the finite weighted average is at most the largest active $\delta_i$, and the corresponding active index has $p\in W_i$, so $|s|<f(p)$ lies in the union. Repeat on the primed development and intersect the two open collar domains. The countably many width choices and partitions use precisely $\mathrm{AC}_\omega$. [L3, L5, given, construct]

2.1 (Matched Cauchy jets.) In these physical wave charts $\Box_gx^\mu=-g^{ab}\Gamma^\mu{}_{ab}=0$ throughout, hence harmonic gauge holds relative to the flat comparison metric. Initially $g_{00}=-1,g_{0i}=0,g_{ij}=h_{ij}$ and $\partial_0=n$. Their tangential derivatives agree, and [L2] gives $\partial_0g_{ij}=2K_{ij}$. The Christoffel formula yields $$g^{ab}\Gamma^0{}_{ab}=\tfrac12\partial_0g_{00}+\operatorname{tr}_hK,\qquad g^{ab}\Gamma^\ell{}_{ab}=-h^{\ell i}\partial_0g_{0i}+h^{jk}\Gamma(h)^\ell{}_{jk}.$$ Therefore both metric initial jets are identical, with $$\partial_0g_{00}=-2\operatorname{tr}_hK,\qquad \partial_0g_{0i}=h_{i\ell}h^{jk}\Gamma(h)^\ell{}_{jk}.$$ The admissibility hypothesis gives identical initial matter variables $w=\mathcal I(h,K,d)$. No second jet of a gauge map is inferred from its first jet. [step 1.1, L2, given, algebra]

3.1 (Same coupled PDE uniqueness.) On a common smaller coordinate cylinder the extracted variables $z_1,z_2$ solve the identical coefficient system by covariance and the reduction hypothesis. Write $v=z_1-z_2$. Subtraction and the integral mean-value formula for the coefficients give $$A^\mu(x,z_1)\partial_\mu v+C(x)v=0,$$ with $C$ smooth and bounded; coefficient differences multiply bounded first derivatives of $z_2$. Let $a>0$ bound $A^0$ below and let $b$ bound $\sup_{|\xi|=1}\|\sum_i\xi_iA^i\|$ on this cylinder. Choose $\lambda>b/a$. For the shrinking ball $B_t$ of radius $r-\lambda t$, differentiation of $E(t)=\int_{B_t}v^{\mathsf T}A^0v$, the difference equation and [L4] give $$E'(t)\le cE(t)-\int_{\partial B_t}v^{\mathsf T}(\lambda A^0+\nu_iA^i)v\,dS\le cE(t).$$ Indeed the lateral matrix is at least $(\lambda a-b)I$, and coefficient derivatives are bounded. Step 2.1 gives $E(0)=0$, so Gronwall gives $v=0$ in the cone. Repeat with reversed time; the two cone interiors contain a neighborhood of the smaller initial ball. Reconstruction gives equality of metric, all matter fields and stress tensors. This compares the entire coupled model, not an evolution equation for $T$ inferred from conservation. [step 2.1, given, L4, algebra]

4.1 (Isometry and overlap uniqueness.) If $X,X'$ are the wave-coordinate maps, step 3.1 gives $\Phi=(X')^{-1}\circ X$ with the stated pullback equalities. Their data give $\Phi\circ j=j'$ and $d\Phi(n)=n'$; shrink to preserve future orientation. Any other future isometry fixing the initial patch has the same differential on $T\Sigma$ and sends $n$ to $n'$ by normal uniqueness. It preserves the connection by [L3] and therefore the affinely parametrized normal geodesics. Both maps satisfy $$\Phi(\exp_{j(\sigma)}(sn_\sigma))=\exp'_{j'(\sigma)}(sn'_\sigma).$$ The normal exponential map has differential $(V,c)\mapsto dj(V)+cn$ at the zero section, an isomorphism, so its local charts prove equality of the two maps near the patch. This is uniqueness of the isometry germ, not uniqueness of arbitrary diffeomorphisms that restrict to the identity. [step 1.1, step 3.1, L3, algebra]

5.1 (Whole-surface isometry.) In the injective normal collars of step 1.2, every local isometry of step 4.1 is the single map $E'\circ E^{-1}$ wherever its normal geodesic segment stays in its local domain. Take the union of all smaller open normal-coordinate product domains on which the entire segment stays in one local isometry domain; each initial point lies in one such domain, so this union contains the entire zero section without a point-indexed choice. Restrict both collars to that same union. The resulting map is a smooth diffeomorphism between open neighborhoods of the initial surfaces and locally is the isometry of step 4.1, so it preserves the metric, all matter fields and future orientation everywhere. No uniform collar width, additional global closedness or additional matter hypothesis is used. [step 4.1, step 1.2, L3, construct] ∎


## Remarks

Vacuum has no matter variables. A fixed scalar model has full data $(\varphi_0,\pi_0)$ and hence harmonic first-order data $(\varphi_0,\partial_0\varphi=\pi_0,\partial_i\varphi=\partial_i\varphi_0)$; its potential and normalization are the same fixed functions/constants on both sides. A fixed strict interior barotropic model has full data $(\epsilon,v)$ with $h(v,v)<1$, $u=W(n+v)$ and $W=(1-h(v,v))^{-1/2}$, hence common coordinate data $u^0=W,u^i=Wv^i$. Its fixed EOS satisfies $\epsilon+p>0$ and $0<p'(\epsilon)<1$ on its open admissible interval. These are applications after their actual reduction suppliers are checked, not an assertion that arbitrary matter is admissible.

Dust requires its actual common flow-coordinate/parallel-frame reduction. If the corresponding supplier derives all initial frame, connection and curvature variables from $(h,K,\rho,v)$ and proves transfer of every physical solution to the same system, steps 3.1 and 4.1 apply after that explicit initialization replaces steps 1.1 and 2.1. This includes empty density regions only when the dust velocity and its Cauchy data remain specified there. Generic fluid positivity with $c_s>0$ does not cover dust.
