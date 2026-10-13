---
id: lem-cm-verlet-local-truncation-error-is-cubic
kind: lemma
title: 'The velocity-Verlet step matches the exact flow through order two: local truncation error $O(h^3)$ on a convex tube'
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
- def-cm-splitting-hamiltonian-and-verlet-map
- def-cm-phase-domain-and-standard-symplectic-two-form
- def-cm-local-flow-of-an-autonomous-system
- thm-picard-lindelof-local-existence-and-uniqueness
- thm-ftc-second-part
- def-vector-valued-derivative-and-integral
- thm-norm-inequality-for-the-vector-valued-integral
- thm-chain-rule-for-total-derivatives
- def-total-derivative-in-euclidean-space
- def-jacobian-matrix-and-gradient
- def-hessian-and-euclidean-critical-point
- cor-hessian-is-symmetric
- def-ck-euclidean-maps-and-diffeomorphisms
- def-matrix-product-and-identity-matrix
- def-metric-ball
- def-metric-topology
- thm-heine-borel-rn
- thm-extreme-value-metric
dependency_roles:
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 ''Symplectic integrators'', Theorem 2 and Section 5: the Stormer-Verlet method is of order 2 and is the Strang splitting of the kinetic and potential flows, printed pages 1-3 and 12-13'
    url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
  - title: 'A. Quillen, PHY411 Lecture notes Part 7 ''Integrators'' (University of Rochester), Sections 1.1-1.2 and 2.5: Taylor comparison of one-step methods with the exact flow and the second-order Stormer-Verlet update, printed pages 2-7 and 23-24'
    url: https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf
verification:
  precheck: pass
---

## Statement

Let $d\ge1$ and let $U$, $M$, $V$, $A$, $B$, $H=A+B$, $D_h$, $K_h$ and $V_h$ be as in [[def-cm-splitting-hamiltonian-and-verlet-map]]. Let $W\subseteq U$ be open, bounded and convex, let $K\subseteq W$ be nonempty compact, and let $r>0$ satisfy $K+\overline B_r(0)\subseteq W$ ([[def-metric-ball]]). Put

$$X_H(q,p):=(M^{-1}p,\,-\nabla V(q)),\qquad M_0:=\sup_W\lVert X_H\rVert,\quad L_1:=\sup_W\lVert DX_H\rVert,\quad L_2:=\sup_W\lVert D^2X_H\rVert,$$

the derivatives being the total derivatives with operator norms ([[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-total-derivative-in-euclidean-space]]); assume all three numbers are finite (for example, this holds when $\overline W\subseteq U$). Let $\Phi_t$ be the local flow of $X_H$ ([[def-cm-local-flow-of-an-autonomous-system]]).

Then there exist $h_0>0$ and $C<\infty$, depending only on $d$, $r$, $\lVert M^{-1}\rVert$, $\sup_K\lVert p\rVert$, $M_0$, $L_1$ and $L_2$, such that for every $(q,p)\in K$ and every $0<|h|\le h_0$:

1. $\Phi_h(q,p)$ is defined and lies in $W$, and
 $$\Bigl\lVert\Phi_h(q,p)-(q,p)-hX_H(q,p)-\tfrac{h^2}{2}DX_H(q,p)X_H(q,p)\Bigr\rVert\le C|h|^3.$$
2. $V_h(q,p)$ is defined and lies in $W$, and its two block components satisfy
 $$V_h(q,p)=\Bigl(q+hM^{-1}p-\tfrac{h^2}{2}M^{-1}\nabla V(q)+\rho_1,\;\; p-h\nabla V(q)-\tfrac{h^2}{2}H_V(q)M^{-1}p+\rho_2\Bigr)$$
 with $\lVert\rho_1\rVert,\lVert\rho_2\rVert\le C|h|^3$; equivalently $V_h$ and $\Phi_h$ have the same expansion through order two,
 $$X_H(q,p)=\bigl(M^{-1}p,\,-\nabla V(q)\bigr),\qquad DX_H(q,p)X_H(q,p)=\bigl(-M^{-1}\nabla V(q),\,-H_V(q)M^{-1}p\bigr).$$
3. Consequently $\lVert V_h(q,p)-\Phi_h(q,p)\rVert\le C|h|^3$ for every $(q,p)\in K$ and $0<|h|\le h_0$.

## Facts & Assumptions

**Given:** The data of [[def-cm-splitting-hamiltonian-and-verlet-map]]; an open bounded convex $W\subseteq U$, a nonempty compact $K\subseteq W$ and $r>0$ with $K+\overline B_r(0)\subseteq W$; the finite constants $M_0,L_1,L_2$ of the Statement; the local flow $\Phi_t$ of $X_H$; the abbreviations $z=(q,p)$.

[F1] Field and derivatives. The coordinate Hamiltonian-field convention $X_G=J\nabla G$ of [[def-cm-splitting-hamiltonian-and-verlet-map]] gives $X_H(q,p)=J\nabla H(q,p)=(M^{-1}p,-\nabla V(q))$; here $(M^{-1})^{\mathsf T}=M^{-1}$ by that definition. Its total derivative is the block matrix $DX_H(q,p)=\begin{pmatrix}0&M^{-1}\\-H_V(q)&0\end{pmatrix}$ with $H_V$ the Hessian of $V$ ([[def-jacobian-matrix-and-gradient]], [[def-hessian-and-euclidean-critical-point]]). Since $V\in C^3$, $X_H$ is $C^2$, and the finiteness of $M_0,L_1,L_2$ is an explicit hypothesis, satisfied in particular when $\overline W\subseteq U$ by continuity and the extreme value theorem ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-extreme-value-metric]], [[thm-heine-borel-rn]]).

[F2] Quantitative local existence and uniqueness. If $F$ is continuous and locally Lipschitz on the open $D\subseteq\mathbb R\times\mathbb R^n$, $(t_0,x_0)\in D$, and $h,r>0$ satisfy $[t_0-h,t_0+h]\times\overline B(x_0,r)\subseteq D$, $\lVert F\rVert\le M$ and $\operatorname{Lip}$-constant $L$ on that cylinder with $hM\le r$ and $Lh<1$, then there is exactly one solution through $(t_0,x_0)$ on $[t_0-h,t_0+h]$ with graph in the cylinder; any two solutions through the same data agree on every common interval containing $t_0$ ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-cm-local-flow-of-an-autonomous-system]]). A $C^1$ field on $W$ has Lipschitz constant $L_1$ on $W$: for $x,y\in W$ the segment lies in $W$ by convexity, and the mean value estimate $\lVert F(x)-F(y)\rVert\le L_1\lVert x-y\rVert$ follows by integrating the derivative along the segment.

[F3] Vector-valued FTC and norm inequality. For a $C^1$ curve $u:[a,b]\to\mathbb R^n$ with continuous derivative, $u(b)-u(a)=\int_a^b u'$; and $\lVert\int_a^bu\rVert\le\int_a^b\lVert u\rVert$ for continuous $u$ ([[def-vector-valued-derivative-and-integral]], [[thm-ftc-second-part]], [[thm-norm-inequality-for-the-vector-valued-integral]]).

[F4] Chain rule. $D(g\circ f)(x)=Dg(f(x))\circ Df(x)$ for totally differentiable composites ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]]).

[F5] Hessian symmetry and the integral form of the mean value estimate. $H_V(q)^{\mathsf T}=H_V(q)$, and for $C^1$ $H_V$ and points $q,q'\in Q:=\operatorname{pr}_q(W)\subseteq\Pi$, where $\operatorname{pr}_q(q,p)=q$ and $Q$ is open and convex, one has $\nabla V(q')-\nabla V(q)=\int_0^1H_V(q+t(q'-q))(q'-q)\,dt$ by [F3] applied to $t\mapsto\nabla V(q+t(q'-q))$ and [F4] ([[cor-hessian-is-symmetric]], [[def-hessian-and-euclidean-critical-point]]).

## Proof

**Proof technique:** direct; bound the second derivative of the exact-flow deviation by the fundamental theorem of calculus, and expand the three Verlet factors exactly, bounding the potential-gradient remainder by the Lipschitz constant of the Hessian.

1.1 Uniform short existence. Put $P=\sup_K\|p\|$ and $M_1=\|M^{-1}\|$. Choose $0<h_0\le1$ so that $h_0M_0\le r/8$, $h_0L_1\le1/2$, and $h_0M_1(P+M_0)\le r/8$, ignoring a restriction whose left side is identically zero. Then [F2] on the ball $\overline B(z,r/2)\subseteq W$ supplies the flow from each $z\in K$ for $|t|\le h_0$. Its displacement is at most $M_0|t|$ by the integral equation and [F3]. [given, F1, F2, F3, algebra]

2.1 Deviation of the exact flow. Define $g(t):=\Phi_t(z)-z-tX_H(z)-\tfrac{t^2}{2}DX_H(z)X_H(z)$ for $|t|\le h_0$. By [F4] and the flow equation $\partial_t\Phi_t=X_H(\Phi_t)$ ([[def-cm-local-flow-of-an-autonomous-system]]) the curve $g'$ has derivative $g''(t)=DX_H(\Phi_t(z))X_H(\Phi_t(z))-DX_H(z)X_H(z)$; writing $\Delta_t:=\Phi_t(z)-z$ and using the mean value estimate for $X_H$ on the convex $W$ (so that $\lVert X_H(\Phi_t)-X_H(z)\rVert\le L_1\lVert\Delta_t\rVert$, [F2]), $$\lVert g''(t)\rVert\le\lVert DX_H(\Phi_t)-DX_H(z)\rVert\lVert X_H(\Phi_t)\rVert+\lVert DX_H(z)\rVert\lVert X_H(\Phi_t)-X_H(z)\rVert\le (L_2M_0+L_1^2)\lVert\Delta_t\rVert\le (L_2M_0+L_1^2)M_0|t|.$$ Since $g(0)=g'(0)=0$, two applications of [F3] give $\lVert g'\rVert\le\tfrac12(L_2M_0+L_1^2)M_0t^2$ and $\lVert g(h)\rVert\le\tfrac16(L_2M_0+L_1^2)M_0|h|^3$. This proves clause 1 with $C_1:=\tfrac16(L_2M_0+L_1^2)M_0+1$. [given, step 1.1, F2, F3, F4, algebra]

2.2 Intermediate points. Put $p_1=p-h\nabla V(q)/2$, $q_2=q+hM^{-1}p_1$, and $p_2=p_1-h\nabla V(q_2)/2$. The first kick displacement is at most $r/16$, and the drift displacement is at most $r/8$, so $(q_2,p_1)\in B(z,r/2)\subseteq W$. The final kick also has displacement at most $r/16$ since the field is bounded there. Thus every intermediate point and the endpoint lie in $W$, legitimating all three evaluations. The block formula for $DX_HX_H$ follows from [F1]. [given, step 1.1, F1, algebra]

3.1 Expansion of the potential gradient. With $w:=q_2-q$, [F5] gives $\nabla V(q_2)=\nabla V(q)+\int_0^1H_V(q+tw)w\,dt=\nabla V(q)+H_V(q)w+R$ with $\lVert R\rVert\le\tfrac12L_V\lVert w\rVert^2$, where $L_V:=\sup_{q\in Q}\lVert DH_V(q)\rVert\le L_2$ is a Lipschitz constant of $H_V$ on the convex position set $Q=\operatorname{pr}_q(W)$. Indeed, each $q\in Q$ has a lift $(q,p)\in W$, and $DH_V(q)$ is the momentum-output, position-input block of $D^2X_H(q,p)$, giving its operator-norm bound by $L_2$. Integrating this derivative along segments in $Q$ gives $\lVert H_V(q+tw)-H_V(q)\rVert\le tL_2\lVert w\rVert$, and then [F3] gives the stated remainder. Both endpoints $q,q_2$ lie in $Q$ by step 2.2, and $\lVert w\rVert\le r/8$. [given, step 2.2, F1, F2, F3, F5, algebra]

4.1 Exact algebra and remainders. The position identity is exact: $q_2=q+hM^{-1}p-h^2M^{-1}\nabla V(q)/2$, so $\rho_1=0$. In the momentum identity use step 3.1 with $w=hM^{-1}p-h^2M^{-1}\nabla V(q)/2$. This gives $p_2=p-h\nabla V(q)-h^2H_V(q)M^{-1}p/2+\rho_2$, where $\rho_2=h^3H_V(q)M^{-1}\nabla V(q)/4-hR/2$. Its norm is at most $|h|^3(L_1M_1M_0+L_2M_1^2(P+M_0)^2)/4$, since $\|H_V(q)\|\le L_1$ and $\|DH_V(q)\|\le L_2$ on $Q$ are block restrictions of $DX_H,D^2X_H$ at any lift $(q,p)\in W$. [given, step 2.2, step 3.1, F1, algebra]

5.1 Conclusion. Step 2.1 bounds the exact-flow remainder and step 4.1 bounds the Verlet remainder. Their terms through degree two agree, so the triangle inequality gives the cubic local defect after enlarging $C$ to bound both expansions and their difference. All constants use only the stated finite bounds and tube data. [step 2.1, step 4.1, algebra] ∎

## Remarks

- The convexity of $W$ is used only to have the segment between any two points of $W$ inside $W$, so that mean value estimates for $X_H$ and $H_V$ apply; the constants are unoptimised, and no sharpness of the cubic order is claimed here. The oscillator example on the companion page supplies an exact quadratic invariant and an original-energy comparison.
- The hypotheses are open conditions on the data: the convex tube is an explicit hypothesis; a compact subset of a general nonconvex $U$ need not admit one ([[thm-heine-borel-rn]], [[def-metric-topology]]). No physical interpretation of $M$, $V$ or $h$ enters the argument.
