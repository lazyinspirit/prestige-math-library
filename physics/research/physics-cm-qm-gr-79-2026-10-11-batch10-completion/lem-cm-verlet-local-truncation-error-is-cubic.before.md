---
id: lem-cm-verlet-local-truncation-error-is-cubic
kind: lemma
title: "The velocity-Verlet step matches the exact flow through order two: local truncation error $O(h^3)$ on a convex tube"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-splitting-hamiltonian-and-verlet-map, def-cm-phase-domain-and-standard-symplectic-two-form, def-cm-local-flow-of-an-autonomous-system, thm-picard-lindelof-local-existence-and-uniqueness, thm-ftc-second-part, def-vector-valued-derivative-and-integral, thm-norm-inequality-for-the-vector-valued-integral, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-hessian-and-euclidean-critical-point, cor-hessian-is-symmetric, def-ck-euclidean-maps-and-diffeomorphisms, def-matrix-product-and-identity-matrix, def-metric-ball, def-metric-topology, thm-heine-borel-rn, thm-extreme-value-metric]
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
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 'Symplectic integrators', Theorem 2 and Section 5: the Stormer-Verlet method is of order 2 and is the Strang splitting of the kinetic and potential flows, printed pages 1-3 and 12-13"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
    - title: "A. Quillen, PHY411 Lecture notes Part 7 'Integrators' (University of Rochester), Sections 1.1-1.2 and 2.5: Taylor comparison of one-step methods with the exact flow and the second-order Stormer-Verlet update, printed pages 2-7 and 23-24"
      url: "https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf"
verification:
  precheck: pass
---

## Statement

Let $d\ge1$ and let $U$, $M$, $V$, $A$, $B$, $H=A+B$, $D_h$, $K_h$ and $V_h$ be as in [[def-cm-splitting-hamiltonian-and-verlet-map]]. Let $W\subseteq U$ be open, bounded and convex, let $K\subseteq W$ be nonempty compact, and let $r>0$ satisfy $K+\overline B_r(0)\subseteq W$ ([[def-metric-ball]]). Put

$$X_H(q,p):=(M^{-1}p,\,-\nabla V(q)),\qquad M_0:=\sup_W\lVert X_H\rVert,\quad L_1:=\sup_W\lVert DX_H\rVert,\quad L_2:=\sup_W\lVert D^2X_H\rVert,$$

the derivatives being the total derivatives with operator norms ([[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-total-derivative-in-euclidean-space]]); all three numbers are finite by compactness of $\overline W$ and continuity. Let $\Phi_t$ be the local flow of $X_H$ ([[def-cm-local-flow-of-an-autonomous-system]]).

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

[F1] Field and derivatives. The Hamiltonian field of $H$ is $X_H(q,p)=J\nabla H(q,p)=(M^{-1}p,-\nabla V(q))$ ([[def-cm-phase-domain-and-standard-symplectic-two-form]]); its total derivative is the block matrix $DX_H(q,p)=\begin{pmatrix}0&M^{-1}\\-H_V(q)&0\end{pmatrix}$ with $H_V$ the Hessian of $V$ ([[def-jacobian-matrix-and-gradient]], [[def-hessian-and-euclidean-critical-point]]). Since $V\in C^3$, $X_H$ is $C^2$, so $M_0,L_1,L_2$ are finite on the bounded set $W$ by continuity on $\overline W$ and the extreme value theorem ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-extreme-value-metric]], [[thm-heine-borel-rn]]).

[F2] Quantitative local existence and uniqueness. If $F$ is continuous and locally Lipschitz on the open $D\subseteq\mathbb R\times\mathbb R^n$, $(t_0,x_0)\in D$, and $h,r>0$ satisfy $[t_0-h,t_0+h]\times\overline B(x_0,r)\subseteq D$, $\lVert F\rVert\le M$ and $\operatorname{Lip}$-constant $L$ on that cylinder with $hM\le r$ and $Lh<1$, then there is exactly one solution through $(t_0,x_0)$ on $[t_0-h,t_0+h]$ with graph in the cylinder; any two solutions through the same data agree on every common interval containing $t_0$ ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-cm-local-flow-of-an-autonomous-system]]). A $C^1$ field on $W$ has Lipschitz constant $L_1$ on $W$: for $x,y\in W$ the segment lies in $W$ by convexity, and the mean value estimate $\lVert F(x)-F(y)\rVert\le L_1\lVert x-y\rVert$ follows by integrating the derivative along the segment.

[F3] Vector-valued FTC and norm inequality. For a $C^1$ curve $u:[a,b]\to\mathbb R^n$ with continuous derivative, $u(b)-u(a)=\int_a^b u'$; and $\lVert\int_a^bu\rVert\le\int_a^b\lVert u\rVert$ for continuous $u$ ([[def-vector-valued-derivative-and-integral]], [[thm-ftc-second-part]], [[thm-norm-inequality-for-the-vector-valued-integral]]).

[F4] Chain rule. $D(g\circ f)(x)=Dg(f(x))\circ Df(x)$ for totally differentiable composites ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]]).

[F5] Hessian symmetry and the integral form of the mean value estimate. $H_V(q)^{\mathsf T}=H_V(q)$, and for $C^1$ $H_V$ and points $q,q'\in W$ one has $\nabla V(q')-\nabla V(q)=\int_0^1H_V(q+t(q'-q))(q'-q)\,dt$ by [F3] applied to $t\mapsto\nabla V(q+t(q'-q))$ and [F4] ([[cor-hessian-is-symmetric]], [[def-hessian-and-euclidean-critical-point]]).

## Proof

**Proof technique:** direct; bound the second derivative of the exact-flow deviation by the fundamental theorem of calculus, and expand the three Verlet factors exactly, bounding the potential-gradient remainder by the Lipschitz constant of the Hessian.

1.1 Set $b:=r/2$ and $h_0:=\min\{b/M_0,\,1/L_1,\,b\,\lVert M^{-1}\rVert^{-1}(1+\sup_K\lVert p\rVert+M_0)^{-1}\}$, omitting the terms involving a vanishing denominator; fix $z=(q,p)\in K$ and $0<|h|\le h_0$. Then $\overline B(z,b)\subseteq K+\overline B_r(0)\subseteq W$, and $M_0 h\le b$, $L_1h<1$, so [F2] applies with $D=\mathbb R\times U$, $x_0=z$ and radius $b$: the flow $\Phi_t(z)$ is defined for $|t|\le h_0$ and its graph lies in $\overline B(z,b)\subseteq W$; hence $\lVert\Phi_t(z)-z\rVert\le M_0|t|$ by [F3] applied to $t\mapsto\Phi_t(z)$. [given, F1, F2, F3, algebra]

2.1 Deviation of the exact flow. Define $g(t):=\Phi_t(z)-z-tX_H(z)-\tfrac{t^2}{2}DX_H(z)X_H(z)$ for $|t|\le h_0$. By [F4] and the flow equation $\partial_t\Phi_t=X_H(\Phi_t)$ ([[def-cm-local-flow-of-an-autonomous-system]]) the curve $g'$ has derivative $g''(t)=DX_H(\Phi_t(z))X_H(\Phi_t(z))-DX_H(z)X_H(z)$; writing $\Delta_t:=\Phi_t(z)-z$ and using the mean value estimate for $X_H$ on the convex $W$ (so that $\lVert X_H(\Phi_t)-X_H(z)\rVert\le L_1\lVert\Delta_t\rVert$, [F2]), $$\lVert g''(t)\rVert\le\lVert DX_H(\Phi_t)-DX_H(z)\rVert\lVert X_H(\Phi_t)\rVert+\lVert DX_H(z)\rVert\lVert X_H(\Phi_t)-X_H(z)\rVert\le (L_2M_0+L_1^2)\lVert\Delta_t\rVert\le (L_2M_0+L_1^2)M_0|t|.$$ Since $g(0)=g'(0)=0$, two applications of [F3] give $\lVert g'\rVert\le\tfrac12(L_2M_0+L_1^2)M_0t^2$ and $\lVert g(h)\rVert\le\tfrac16(L_2M_0+L_1^2)M_0|h|^3$. This proves clause 1 with $C_1:=\tfrac16(L_2M_0+L_1^2)M_0+1$. [given, step 1.1, F2, F3, F4, algebra]

2.2 The Verlet intermediate points. Put $p_1:=p-\tfrac h2\nabla V(q)$, $q_2:=q+hM^{-1}p_1$, $p_2:=p_1-\tfrac h2\nabla V(q_2)$, so that $V_h(q,p)=(q_2,p_2)$ whenever the intermediate points lie in $U$. By [F1], $\lVert\nabla V\rVert\le M_0$ on $W$; with $h_0$ as in step 1.1, $\lVert p_1-p\rVert\le\tfrac12M_0|h|\le b/2$, $\lVert q_2-q\rVert\le\lVert M^{-1}\rVert\,|h|\,(\lVert p\rVert+M_0)\le b/2$ (the third term in the definition of $h_0$), and $\lVert p_2-p\rVert\le M_0|h|\le b$ because $\lVert p_2-p\rVert\le\lVert p_1-p\rVert+\tfrac12M_0|h|$. All intermediate points lie in $\overline B(z,b)\subseteq W$; hence $V_h(z)$ is defined and lies in $W$, and the identity $DX_H(z)X_H(z)=(-M^{-1}\nabla V(q),-H_V(q)M^{-1}p)$ is the block product of [F1]. [given, step 1.1, F1, algebra]

3.1 Expansion of the potential gradient. With $w:=q_2-q$, [F5] gives $\nabla V(q_2)=\nabla V(q)+\int_0^1H_V(q+tw)w\,dt=\nabla V(q)+H_V(q)w+R$ with $\lVert R\rVert\le\tfrac12L_V\lVert w\rVert^2$, where $L_V:=\sup_W\lVert DH_V\rVert<\infty$ is a Lipschitz constant of $H_V$ on the convex $W$ by the mean value estimate of [F2] applied to the rows of $H_V$; here $\lVert w\rVert\le\tfrac12b$ by step 2.2 and $L_V$ is finite because $V\in C^3$. [given, step 2.2, F1, F2, F5, algebra]

4.1 Expansion of the Verlet update. Substituting $w=hM^{-1}p_1$ into step 3.1 and multiplying by $-\tfrac h2$, $$p_2=p_1-\tfrac h2\nabla V(q)-\tfrac h2H_V(q)M^{-1}p_1-\tfrac h2R=p-h\nabla V(q)-\tfrac{h^2}{2}H_V(q)M^{-1}p+\rho_2,$$ where the collected remainder is $\rho_2=\tfrac{h^3}{4}H_V(q)M^{-1}\nabla V(q)+\tfrac{h^2}{2}H_V(q)M^{-1}(p_1-p)-\tfrac h2R$; its norm is at most $|h|^3\bigl(\tfrac14\lVert H_V\rVert M_1M_0+\tfrac14\lVert H_V\rVert M_1M_0+\tfrac14L_VM_1^2(\lVert p\rVert+M_0)^2\bigr)$ with $M_1:=\lVert M^{-1}\rVert$, using $\lVert p_1-p\rVert\le\tfrac12M_0|h|$ and $\lVert w\rVert\le M_1|h|(\lVert p\rVert+M_0)$ from step 2.2. Similarly $q_2=q+hM^{-1}p-\tfrac{h^2}{2}M^{-1}\nabla V(q)+\rho_1$ with $\rho_1=-\tfrac{h^2}{2}M^{-1}(p_1-p)$, $\lVert\rho_1\rVert\le\tfrac14M_1M_0|h|^3$. Both remainders are bounded by $C_2|h|^3$ for a constant $C_2$ depending only on $d$, $r$, $M_1$, $\sup_K\lVert p\rVert$, $M_0$, $L_1$, $L_2$, $L_V$ and $\sup_W\lVert H_V\rVert$, all of which are controlled by the listed data. [given, step 2.2, step 3.1, algebra]

5.1 Conclusion. Clause 1 is step 2.1 and clause 2 is steps 1.3 and 2.2 with the constants combined into $C:=\max\{C_1,C_2\}$; clause 3 follows by subtracting the two expansions, whose order-zero, order-one and order-two terms agree. Since $W,K,r$ and the bounds depend only on the listed data, so do $h_0$ and $C$. [step 2.1, step 2.2, step 4.1, algebra] ∎

## Remarks

- The convexity of $W$ is used only to have the segment between any two points of $W$ inside $W$, so that mean value estimates for $X_H$ and $H_V$ apply; the constants are unoptimised, and no sharpness of the cubic order is claimed here. Sharpness of the order-three local error is exhibited for a quadratic model on the companion page.
- The hypotheses are open conditions on the data: any compact subset of $U$ admits such a convex tube $W$ by the positive distance of the compact set from the complement of $U$ ([[thm-heine-borel-rn]], [[def-metric-topology]]). No physical interpretation of $M$, $V$ or $h$ enters the argument.
