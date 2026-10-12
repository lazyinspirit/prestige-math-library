---
id: lem-rescaled-pulse-map-is-c-one-close-to-kick
kind: lemma
title: "The rescaled pulse endpoint map converges to the kick $K(q,p)=(q,p+q^2-a)$ in $C^1$, and the period map is smooth, symplectic and $C^1$-close to $F$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-smooth-periodic-oscillator-pulse-model, thm-gronwall-integral-inequality, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-c1-dependence-of-solutions-on-initial-data, thm-smooth-dependence-of-ode-solutions-on-parameters, lem-newton-contraction-near-an-invertible-derivative, thm-real-square-matrix-invertible-iff-determinant-nonzero, cor-inverse-matrix-by-adjugate, thm-higher-regularity-of-local-inverses, def-first-order-ode-initial-value-problem-and-solution, def-maximal-ode-solution, def-locally-lipschitz-in-the-state-variable, def-ck-euclidean-maps-and-diffeomorphisms, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, thm-chain-rule-for-total-derivatives, thm-mean-value-inequality-for-total-derivatives, def-darboux-integral, thm-continuous-implies-integrable, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, thm-ftc-second-part, def-interval, def-abs-value, lem-of-abs-value, def-metric-ball, def-metric-space, def-continuity-real, thm-extreme-value-metric, thm-heine-borel-rn, thm-norm-inequality-for-the-vector-valued-integral]
dependency_roles:
  thm-heine-borel-rn: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  def-smooth-periodic-oscillator-pulse-model: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-c1-dependence-of-solutions-on-initial-data: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  lem-newton-contraction-near-an-invertible-derivative: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  thm-higher-regularity-of-local-inverses: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-interval: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-space: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Sections 2.4 (Gronwall), 7.1 (dependence on initial data) and 13.3 (pulse pertubation of a homoclinic loop)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 8 Sections 8.2 and 8.5, Hamiltonian maps and symplectic structure"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$, put $R:=\sqrt a+3\ge13$, $S:=[-R-1,R+1]^2$, and let $w$, $\delta$, $P$, $\beta_\delta$, $R_0$, the rescaled pulse equation, the endpoint map $K_\delta$ and the stroboscopic map $G_\delta=K_\delta\circ R_0$ be as in [[def-smooth-periodic-oscillator-pulse-model]]. Let

$$K(q,p):=(q,\,p+q^2-a),\qquad F(q,p):=(p,\,p^2-a-q),\qquad J:=\begin{pmatrix}0&1\\-1&0\end{pmatrix},$$

so that $F=K\circ R_0$. Then there are constants $\delta_1>0$ and $C_1<\infty$ depending only on $a$ and $w$ such that for every $0<\delta\le\delta_1$:

1. **(existence on the pulse)** for every $(q,p)\in S$ the solution of the rescaled equation with initial data $(q,p)$ exists on $[0,1]$ and stays in the compact tube $T:=[-R-2,R+2]\times[-M,M]$, $M:=R+1+(R+1)^2+1$; hence $K_\delta$ is defined on $S$, $K_\delta(S)\subseteq T$, and

$$\sup_{S}\bigl(|K_\delta-K|+\|DK_\delta-DK\|\bigr)\le C_1\delta$$

for the Euclidean norm and the operator norm;
2. **(closeness of the period map)** $\sup_S\bigl(|G_\delta-F|+\|DG_\delta-DF\|\bigr)\le C_1\delta$;
3. **(smoothness, invertibility, symplecticity)** $G_\delta$ is of class $C^\infty$ on an open neighbourhood $N$ of $S$; $DG_\delta(z)$ is invertible for every $z\in N$ and $G_\delta$ is injective on $N$, so $G_\delta:N\to G_\delta(N)$ is a $C^\infty$ diffeomorphism onto its image; and

$$DG_\delta(z)^{\mathsf T}J\,DG_\delta(z)=J\qquad(z\in N),$$

that is, $G_\delta$ is symplectic;
4. **(the reverse-conjugated map)** let $S_w(q,p):=(p,q)$ and $H_\delta:=S_w\circ G_\delta^{-1}\circ S_w$ on a neighbourhood of $S$. Then $H_\delta$ is of class $C^\infty$ there, and there is $C_2<\infty$, depending only on $a$ and $w$, with

$$\sup_{S}\bigl(|H_\delta-F|+\|DH_\delta-DF\|\bigr)\le C_2\delta .$$

Consequently, for every $\delta$ small enough that $\varepsilon:=\max(C_1,C_2)\delta$ satisfies $\varepsilon\le1/6$ and $C\varepsilon\le1$ ($C$ the constant of the perturbed-recurrence lemma on this page), the maps $G_\delta$ and $H_\delta$ satisfy all hypotheses of the perturbed horseshoe theorem on this page on the square $S$.

## Facts & Assumptions

**Given:** The data in the Statement. Extend $w$ by zero to a smooth function on $\mathbb R$, and put $f_\delta(s,q,p)=(\delta p,-\delta q+w(s)(q^2-a))$ for real $\delta$.

[F1] The model defines this smooth field and its unique maximal solutions ([[def-smooth-periodic-oscillator-pulse-model]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-maximal-ode-solution]], [[def-locally-lipschitz-in-the-state-variable]]). A solution trapped in a compact time-state tube extends past a finite endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

[F2] Norms of vector integrals are bounded by integrals of their norms ([[thm-norm-inequality-for-the-vector-valued-integral]]). Integral comparison and differentiation: continuous functions are integrable, their integrals satisfy linearity, monotonicity and the fundamental theorem; Gronwall controls a nonnegative function satisfying $u(s)\le A+B\int_0^su$ ([[def-darboux-integral]], [[thm-continuous-implies-integrable]], [[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]], [[thm-ftc-second-part]], [[thm-gronwall-integral-inequality]]).

[F3] On an established common compact interval the derivative in initial data solves $Y'=D_zf(s,z)Y$, $Y(0)=I$ ([[thm-c1-dependence-of-solutions-on-initial-data]]). The jointly smooth field has local smooth dependence on initial data and parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]); this local assertion will be patched over the established interval, rather than assumed to give existence for a whole period.

[F4] Closed Euclidean boxes are compact ([[thm-heine-borel-rn]]). Smooth invertible derivatives give smooth local inverses ([[thm-higher-regularity-of-local-inverses]]). Euclidean calculus uses the chain rule, mean-value inequality, continuity and boundedness of continuous derivatives on compact sets ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]], [[thm-chain-rule-for-total-derivatives]], [[thm-mean-value-inequality-for-total-derivatives]], [[thm-extreme-value-metric]], [[def-metric-space]], [[def-metric-ball]], [[def-continuity-real]], [[def-abs-value]], [[lem-of-abs-value]], [[def-interval]]).

## Proof

**Proof technique:** direct; trap the forward and backward pulse evolutions in separate compact tubes, compare their state and variational equations, and use uniqueness to identify the backward endpoint as the inverse.

1.1 At $\delta=0$ the forward solution through $(q_0,p_0)$ is $z_0(s)=(q_0,p_0+(q_0^2-a)\int_0^sw)$. For initial data in $S$, $|q_0|\le R+1$ and $|q_0^2-a|\le(R+1)^2$; hence $|p_0+(q_0^2-a)\int_0^sw|\le M-1$ on $[0,1]$. Thus this reference solution lies at least distance $1$ from the boundary of the stated tube $T$. Its endpoint is $K(q_0,p_0)$. [given, F1, F2, algebra]

2.1 On $T$ and for $|\delta|\le1$, there are constants $B_0,L_0$ depending only on $a,w$ such that $|f_\delta-f_0|\le B_0|\delta|$ and $\|D_zf_\delta\|\le L_0$: one may take $B_0=M+R+2$ and $L_0=1+2\|w\|_\infty(R+2)$. Up to the first exit from $T$, subtracting the integral equations gives $|z_\delta(s)-z_0(s)|\le B_0|\delta|+L_0\int_0^s|z_\delta-z_0|$, so Gronwall gives $\sup|z_\delta-z_0|\le B_0e^{L_0}|\delta|$. Choose $d_0>0$ with $B_0e^{L_0}d_0<1/2$. An exit on $[0,1]$ is impossible by the distance margin in step 1.1. A maximal solution terminating before the end without exiting is extendible by [F1]. Therefore every datum in $S$ has a solution on $[0,1]$ staying in $T$. [step 1.1, F1, F2, F4, algebra]

3.1 Larger tubes establish the domains needed for inversion. Set $b:=R+2$, $Q:=[-b,b]^2$, $B:=b+b^2+a+2$ and $E:=[-B,B]^2$. For every datum in $E$, the forward reference solution has $|q|\le B$, $|p|\le B+B^2+a$. For a terminal datum $y=(y_q,y_p)\in E$ at $s=1$, the reference backward solution is $(y_q,y_p-(y_q^2-a)\int_s^1w)$ with exactly the same bounds. Both reference families therefore have distance at least $1$ from the boundary of $T_E:=[-B-1,B+1]\times[-B-B^2-a-1,B+B^2+a+1]$. Apply the integral comparison of step 2.1 on this tube, in the backward case after $\tau=1-s$ so that the field is $-f_\delta(1-\tau,z)$. This field has the same boundedness and Lipschitz estimates. With a smaller threshold $d_E>0$, both evolutions exist over the whole unit interval for all their data in $E$, and their state differences from the reference evolutions are uniformly $O(|\delta|)$. All constants depend only on $a,w$. In particular $K^{-1}(Q)\subset\operatorname{int}E$, since $K^{-1}(y)=(y_q,y_p-y_q^2+a)$ and its coordinates are bounded by $b$ and $b+b^2+a=B-2$. This uses the actual inverse preimage, without assuming it lies in $Q$. [given, step 2.1, F1, F2, F4, algebra]

4.1 These families are smooth in initial or terminal data and $\delta$ on neighbourhoods of the compact data sets after decreasing $d_E$. To justify the whole interval from the local assertion [F3], cover each reference graph by finitely many local time-state-parameter neighbourhoods where [F3] gives smooth local solution operators, and subdivide $[0,1]$ into finitely many sufficiently short successive intervals. The graph stays inside the tube with a positive margin by step 3.1; the field and its state derivative are bounded on a slightly enlarged compact tube, so one common short interval is admissible at every graph point. At each subdivision endpoint local existence and smooth dependence apply to the endpoint data from the preceding interval. Their finite composition is smooth and equals the unique solution. Shrinking the initial-data and parameter neighbourhoods finitely many times keeps each intermediate value in its admissible neighbourhood. Finitely many such initial-data neighbourhoods cover each compact data set, yielding one positive parameter threshold. The same argument for the time-reflected field gives the backward family. Thus $K_\delta$ and the backward endpoint map $L_\delta(y):=z(0)$ for $z(1)=y$ are smooth near $E$ and $Q$, respectively, for all sufficiently small $|\delta|$, including $0$. [step 3.1, F1, F3, F4, choose]

5.1 The state comparisons in steps 2.1 and 3.1 also hold in $C^1$. Indeed, on either compact tube, $D_zf_\delta-D_zf_0$ is bounded by $|\delta|$, and $D_zf_0$ is uniformly Lipschitz in $z$, so along compared trajectories $\|D_zf_\delta(s,z_\delta)-D_zf_0(s,z_0)\|\le C|\delta|$. By [F3] their derivative matrices solve the variational equations with the same initial matrix $I$. Gronwall first bounds both matrices by $e^L$, then, after subtracting their integral equations, bounds the difference by $Ce^{2L}|\delta|$, with fixed constants for the tube. The identical argument for the reflected field controls derivatives in terminal data. Consequently there are finite positive $C_f,C_b$ with $\sup_Q(|K_\delta-K|+\|DK_\delta-DK\|)\le C_f|\delta|$ and $\sup_Q(|L_\delta-K^{-1}|+\|DL_\delta-DK^{-1}\|)\le C_b|\delta|$. Increasing $C_f$ includes the forward estimates on $S$ in the original tube; hence clause 1 follows. [step 2.1, step 3.1, step 4.1, F2, F3, F4, algebra]

6.1 Choose $\delta_1>0$ below all previous thresholds and with $C_b\delta_1<1$. Then $L_\delta(Q)\subset\operatorname{int}E$, because $K^{-1}(Q)$ has coordinate margin at least $2$ in $E$. Put $V:=(-b,b)^2$ and $O:=\operatorname{int}E$. Uniqueness of the original and reflected equations shows that $K_\delta$ is injective on $O$: solutions sharing their terminal value coincide when evolved backwards. Its differential is invertible by the following direct calculation: the rescaled field is $J\nabla h$ for $h(s,q,p)=\delta(p^2+q^2)/2+w(s)(aq-q^3/3)$; hence $A=D_zf_\delta=J\operatorname{Hess}h$ with symmetric Hessian and $A^{\mathsf T}J+JA=0$. The variational matrix satisfies $(Y^{\mathsf T}JY)'=0$ and $Y(0)=I$, so $Y^{\mathsf T}JY=J$. A vector in the kernel of $Y$ must then lie in the kernel of the invertible matrix $J$, so $Y$ is invertible. By [[thm-higher-regularity-of-local-inverses]], $K_\delta$ has smooth local inverses, which agree by injectivity; therefore $K_\delta:O\to K_\delta(O)$ is a smooth diffeomorphism onto its open image. For every $y\in V$, its backward trajectory starts at $L_\delta(y)\in O$ and ends at $y$; hence $V\subset K_\delta(O)$ and the inverse on $V$ is exactly $L_\delta$. Define $N:=R_0^{-1}(O)$, an open neighbourhood of $S$. Then $G_\delta=K_\delta\circ R_0:N\to K_\delta(O)$ is a smooth diffeomorphism, and clause 2 follows from step 5.1 and $R_0(Q)=Q$, since $R_0$ is a linear isometry. [step 4.1, step 5.1, F1, F3, F4, algebra]

7.1 The matrix computation of step 6.1 also gives symplecticity. The rescaled field is $J\nabla h$ with $h(s,q,p)=\delta(p^2+q^2)/2+w(s)(aq-q^3/3)$. Its derivative matrix is $A=J\operatorname{Hess}h$ with symmetric Hessian. Since $J^{\mathsf T}=-J$ and $J^2=-I$, direct multiplication gives $A^{\mathsf T}J+JA=0$. Therefore the variational matrix satisfies $(Y^{\mathsf T}JY)'=Y^{\mathsf T}(A^{\mathsf T}J+JA)Y=0$ and $Y(0)=I$, giving $Y^{\mathsf T}JY=J$. This identity forces $Y$ invertible (a vector in its kernel must lie in the kernel of $J$). Also $DR_0=J$ satisfies $J^{\mathsf T}JJ=J$. Applying the chain rule to the composition yields $DG_\delta^{\mathsf T}JDG_\delta=J$ on $N$, proving clause 3. [given, step 6.1, F3, F4, algebra]

7.2 Since $S_w(V)=V$, the conjugated inverse is defined on the open neighbourhood $V$ of $S$ and has the explicit expression $H_\delta=R_0\circ S_w\circ L_\delta\circ S_w$, using $S_wR_0^{-1}=R_0S_w$. At $\delta=0$ this is $S_wF^{-1}S_w=F$. Fixed linear isometries preserve both state and derivative comparison norms, so step 5.1 gives $\sup_S(|H_\delta-F|+\|DH_\delta-DF\|)\le C_b\delta$. The composition is a smooth diffeomorphism onto its image, and clause 4 holds with $C_2:=C_b$ and clause 2 with $C_1:=C_f$. [step 5.1, step 6.1, F4, algebra]

8.1 Increase $C_1,C_2$ to positive constants if needed and decrease $\delta_1$ to include every threshold above. For $0<\delta\le\delta_1$, each coordinate difference is bounded by the Euclidean difference norm and each derivative entry difference by the operator norm. Thus both maps satisfy the six componentwise closeness inequalities with the common constant $\varepsilon:=\max(C_1,C_2)\delta$ on $S$. When $\varepsilon\le1/6$ and $C\varepsilon\le1$, all required smoothness, diffeomorphism, inverse-domain and closeness hypotheses of the perturbed horseshoe theorem hold. The forward tube conclusion was established independently in steps 1.1-2.1 and was preserved throughout the enlarged-domain argument. [step 5.1, step 6.1, step 7.1, step 7.2, F4, algebra] ∎

## Remarks

- The enlarged compact set $E$ is used only for forward and inverse domain control. The stated small forward tube $T$ for data in $S$ is retained. Constants and smallness thresholds depend on the fixed $a$ and $w$; no global completeness of the polynomial field is assumed.

- Symplecticity is proved directly for the time-dependent system. The autonomous result [[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]] is not invoked. The coordinate matrix agrees with the canonical layer, while the whole-period smoothness assertion uses explicit finite patching of local solution maps.
