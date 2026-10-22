---
id: lem-qftx-finite-lorentz-cocycle-splitting
kind: lemma
domain: mathematics
library: mathematics
title: Finite-dimensional Lorentz normalization cocycles split
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - def-riemannian-volume-density
  - def-support-and-compactly-supported-riemann-integral-in-rn
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands
  - thm-heine-borel-rn
dependency_roles:
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  def-riemannian-volume-density: mathematical-premise
  def-support-and-compactly-supported-riemann-integral-in-rn: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 18.755 Lie Groups and Lie Algebras II, Spring 2024, Lecture Notes, §§34.8 and 35.1"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§34.8, printed p.186: compact Lie groups and normalized Haar probability; §35.1, printed pp.186–187: averaging a Hermitian form over a compact group."
    - title: "D. H. Fuchs, Notes on Lie Groups, §3.2.4, First Whitehead Lemma"
      url: "https://www.math.ucdavis.edu/static/research/Fuchs_Profile-MAT261A_Notes_on_Lie_Groups.pdf"
      locator: "§3.2.4, printed pp.44–46: First Whitehead Lemma for finite-dimensional semisimple modules; its cohomological proof is context only, while the proof below supplies the Lorentz case directly."
verification:
  precheck: pass
---

## Statement

Let $\mathfrak l$ be the six-dimensional real Lie algebra with basis $J_1,J_2,J_3,K_1,K_2,K_3$ and brackets $[J_i,J_j]=\epsilon_{ijk}J_k$, $[J_i,K_j]=\epsilon_{ijk}K_k$, and $[K_i,K_j]=-\epsilon_{ijk}J_k$, where $\epsilon_{ijk}$ is the alternating symbol with $\epsilon_{123}=1$. This fixes the convention for $\mathfrak{so}(1,3)$. Let $V$ be a finite-dimensional complex vector space and let $\rho:\mathfrak l\to\operatorname{End}_{\mathbb C}(V)$ be a real-linear representation, meaning $\rho([X,Y])=[\rho(X),\rho(Y)]$. If a real-linear map $c:\mathfrak l\to V$ satisfies the Lie-algebra $1$-cocycle identity

$$c([X,Y])=\rho(X)c(Y)-\rho(Y)c(X)\qquad(X,Y\in\mathfrak l),$$

then there is $v\in V$ such that $c(X)=\rho(X)v$ for every $X\in\mathfrak l$. No infinite-dimensional module, gauge cohomology, or interacting-field conclusion is asserted.

## Statement references

[MIT 18.755 Lie Groups and Lie Algebras II, §§34.8 and 35.1](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf)

[Fuchs, *Notes on Lie Groups*, §3.2.4](https://www.math.ucdavis.edu/static/research/Fuchs_Profile-MAT261A_Notes_on_Lie_Groups.pdf)

## Facts & Assumptions

**Given:** the real Lie algebra brackets, finite-dimensional complex representation $\rho$, and cocycle $c$ exactly as specified in the Statement.

[A1] By the complexification $\mathfrak l_{\mathbb C}$ we mean $\mathfrak l\otimes_{\mathbb R}\mathbb C$ with the complex-bilinear extension of the stated bracket; $\rho$ and $c$ extend complex-linearly.

[F1] [[def-riemannian-metric-and-riemannian-manifold]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]], [[def-riemannian-volume-density]]: the round metric on $S^3\subset\mathbb R^4$ is induced by the Euclidean metric, and its volume density in coordinates with metric matrix $G$ is $\sqrt{\det G}\,|dx^1dx^2dx^3|$.

[F2] [[def-support-and-compactly-supported-riemann-integral-in-rn]], [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]], [[thm-heine-borel-rn]]: continuous functions with compact support in a Euclidean chart are Riemann integrable on a bounding rectangle, and the unit sphere in $\mathbb R^4$ is compact.

[F3] [[lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands]]: a $C^1$ diffeomorphism between Euclidean open sets obeys the change-of-variables formula for continuous compactly supported integrands.

## Proof

**Proof technique:** direct.

**Given:** [A1] and the hypotheses in the Statement.

1.1 In $\mathfrak l_{\mathbb C}$ set $L_i=(J_i+iK_i)/2$ and $R_i=(J_i-iK_i)/2$. Expanding the stated brackets gives $[L_i,L_j]=\epsilon_{ijk}L_k$, $[R_i,R_j]=\epsilon_{ijk}R_k$, and $[L_i,R_j]=0$. The real span $\mathfrak k=\operatorname{span}_{\mathbb R}\{L_i,R_i\}$ has compact Lie-algebra bracket: with $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, the basis $-i\sigma_i/2$ of $\mathfrak{su}(2)$ has the same $\epsilon_{ijk}$ brackets. The two summands commute, and $\mathfrak k\otimes_{\mathbb R}\mathbb C=\mathfrak l_{\mathbb C}$ because $J_i=L_i+R_i$ and $K_i=(L_i-R_i)/i$. [given, A1, algebra]

1.2 Let $G=\mathrm{SU}(2)\times\mathrm{SU}(2)$, whose Lie algebra is $\mathfrak k$. The matrices $\begin{pmatrix}a&b\\-\overline b&\overline a\end{pmatrix}$ with $|a|^2+|b|^2=1$ identify $\mathrm{SU}(2)$ with the unit quaternions and hence with $S^3\subset\mathbb R^4$, so $G$ is compact. To prove simple connectivity in the form needed here, take any piecewise-smooth based loop in $S^3$. Uniform continuity gives a finite subdivision on which each subarc lies in an open hemisphere. If $\delta(t)$ is the short great-circle arc between its endpoints, then $H(s,t)=((1-s)\gamma(t)+s\delta(t))/\|(1-s)\gamma(t)+s\delta(t)\|$ is defined throughout that hemisphere, fixes the endpoints, and homotopes the subarc to $\delta$. Each great-circle arc lies in the intersection of $S^3$ with a proper two-dimensional linear subspace $P_j\subset\mathbb R^4$. A finite union of proper linear subspaces cannot cover $\mathbb R^4$: induct on their number; after choosing $x$ outside $P_1,\ldots,P_{n-1}$, if $x\notin P_n$ we are done, and otherwise choose $y\notin P_n$; the line $x+ty$ meets each $P_j$ in at most one parameter value, so a real $t$ outside the finite forbidden set gives a point outside all $P_j$. Thus the resulting polygonal loop omits some $q\in S^3$. Stereographic projection identifies $S^3\setminus\{q\}$ with $\mathbb R^3$; straight-line contraction there to the basepoint fixes the loop endpoints and is piecewise smooth. Hence every piecewise-smooth based loop contracts through piecewise-smooth based loops. Applying this factorwise proves the required property for $G$. [F2, given, construct]

2.1 Complexify $\rho$ and $c$ and, on $W=V\oplus\mathbb C$, define $\widetilde\rho(X)(v,z)=(\rho(X)v+zc(X),0)$ for $X\in\mathfrak k$. The representation identity for $\rho$ and the cocycle identity for $c$ give $[\widetilde\rho(X),\widetilde\rho(Y)](v,z)=([\rho(X),\rho(Y)]v+z(\rho(X)c(Y)-\rho(Y)c(X)),0)=\widetilde\rho([X,Y])(v,z)$, so $\widetilde\rho$ is a finite-dimensional Lie-algebra representation. [given, A1, step 1.1, algebra]

3.1 Reparameterize each smooth path segment to $[0,1]$. For a piecewise-smooth path $\gamma$ put $a(t)=\gamma(t)^{-1}\dot\gamma(t)\in\mathfrak k$ and $A(t)=\widetilde\rho(a(t))$. Solve $U'=UA$, $U(0)=I$, separately on each segment and concatenate. On a segment with $\|A\|\le M$, the Picard series has $n$th term $\int_{0\le t_1\le\cdots\le t_n\le t}A(t_1)\cdots A(t_n)\,dt_1\cdots dt_n$, bounded by $M^n/n!$; it converges uniformly and termwise integration verifies the integral equation. If $D$ is the difference of two solutions with $D(0)=0$, then $\|D(t)\|\le M\int_0^t\|D(r)\|dr$; iterating gives $\|D(t)\|\le\sup\|D\|M^nt^n/n!\to0$, proving uniqueness. Solving $V'=-AV$, $V(0)=I$, by the same series gives $(UV)'=0$ and $UV=I$, so each transport matrix is invertible. Concatenating paths multiplies their transports in order, since on the second segment the solution with initial value $U_1$ is $U_1$ times the solution with initial value $I$. For a piecewise-smooth endpoint-fixed homotopy $\Gamma(s,t)$, the series terms and their $s$-derivatives are uniformly bounded by $M^n/n!$ and $nLM^{n-1}/n!$, respectively, where $L=\sup\|\partial_sA\|$ and we enlarge $M$ so $M\ge1$. Both series converge uniformly; integrating the derivative series in $s$ shows the limit $U$ is differentiable in $s$. Put $a=\Gamma^{-1}\partial_t\Gamma$ and $b=\Gamma^{-1}\partial_s\Gamma$. Direct differentiation yields $\partial_sa-\partial_tb=[a,b]$. The matrix-valued form $\theta=g^{-1}dg$ satisfies $d\theta=-\theta\wedge\theta$, by differentiating $g^{-1}g=I$; equivalently $d\theta+\frac12[\theta,\theta]=0$. Applying the representation from step 2.1 gives $A_s-B_t=[A,B]$, where $B=\widetilde\rho(b)$. For $K=U_s-UB$, differentiation now gives $K_t=KA+U(BA+A_s-AB-B_t)=KA$, and $K(s,0)=0$ because the initial endpoint is fixed. The uniqueness just proved gives $K=0$; at the fixed terminal endpoint $B(s,1)=0$, so $U_s(s,1)=0$. Thus transport is invariant under these homotopies. If $\gamma_1,\gamma_2$ run from $e$ to the same $g$, the loop $\gamma_1$ followed by the reverse of $\gamma_2$ contracts by step 1.2, so its transport is $I$; the analogous loop using $\gamma_2$ shows the two transports agree. Hence transport is path-independent. Locally near $g_0$, choose paths from $e$ to $g_0^{-1}g$ varying smoothly with $g$ in a coordinate ball; the same uniform-series bounds imply continuous dependence on $g$, so $U$ is continuous. Finally, left-translating a path from $e$ to $h$ and concatenating it after a path from $e$ to $g$ gives $U(gh)=U(g)U(h)$, since left translation preserves $\gamma^{-1}\dot\gamma$. Thus $U$ is a continuous group representation. [step 1.2, step 2.1, algebra]

4.1 The block form of $\widetilde\rho$ makes $U(g)=\begin{pmatrix}R(g)&b(g)\\0&1\end{pmatrix}$, and its group law gives $b(hg)=R(h)b(g)+b(h)$. Identify each $\mathrm{SU}(2)$ with the unit quaternions and regard $S^3$ as the unit quaternions. For an explicit normalized round-volume integral, let $\chi(t)=0$ for $t\le1/3$ and $\chi(t)=e^{-1/(t-1/3)}$ for $t>1/3$. For $x=(x_1,\ldots,x_4)\in S^3$, put $D(x)=\sum_{j=1}^4(\chi(x_j)+\chi(-x_j))$ and $\psi_{j,\pm}(x)=\chi(\pm x_j)/D(x)$. Since some $|x_j|\ge1/2$, $D(x)>0$; these eight smooth nonnegative functions sum to $1$ and have supports compactly contained in $U_{j,\pm}=\{\pm x_j>1/4\}$. In the chart given by the other three coordinates $y$, the sphere is $x_j=\pm\sqrt{1-|y|^2}$, the metric matrix is $G=I+yy^{\mathsf T}/(1-|y|^2)$, and therefore $\sqrt{\det G}=(1-|y|^2)^{-1/2}$. Define $I(f)=\sum_{j,\pm}\int_{\mathbb R^3}\psi_{j,\pm}(x(y))f(x(y))(1-|y|^2)^{-1/2}\,dy$, extending each integrand by zero outside its chart. Each term is continuous with compact support inside the chart, so [F1]–[F2] make it a finite Riemann integral. Its sum $I(1)$ is finite and positive: at $x=(1,0,0,0)$ one partition function is positive on a neighborhood, and on a small coordinate cube there the integrand has a positive lower bound. Set $\nu(f)=I(f)/I(1)$. This is the normalized round-volume functional. Its chart definition is independent of a finite subordinate chart partition: insert the second partition into each summand; each product has compact support in the chart overlap, and the metric identity $G(x)=DT(x)^{\mathsf T}G(Tx)DT(x)$ gives $\sqrt{\det G(x)}=|\det DT(x)|\sqrt{\det G(Tx)}$. Then [F3] transfers each compactly supported integral, and summing the finite terms gives equality. Quaternion left multiplication is an orthogonal map of $\mathbb R^4$, hence an isometry of this metric; using the transported charts and partition in the same identity gives $\nu(f\circ L_q)=\nu(f)$. The functional is positive and normalized, so its integral triangle inequality gives $|\nu(h)|\le\sup|h|$. Define the product round-volume functional on continuous $F:G\to\mathbb C$ by $\mu(F)=\nu(q\mapsto\nu(r\mapsto F(q,r)))$. The inner function is continuous because $F$ is uniformly continuous on compact $S^3\times S^3$ and the displayed norm bound holds. The product functional is normalized and left invariant by applying the factor identity twice. Since $b$ is continuous on compact $G$ and $V$ is finite-dimensional, $\bar v:=\mu(b)$ exists coordinatewise. Left invariance and the cocycle formula give $R(h)\bar v+b(h)=\mu(g\mapsto b(hg))=\bar v$ for every $h\in G$. [F1, F2, F3, step 1.2, step 3.1, construct]

5.1 Differentiate the fixed-point identity of step 4.1 at $h=\exp(tX)$ and $t=0$. The path equation defining $U$ gives $dR_e(X)=\rho(X)$ and $db_e(X)=c(X)$: these are the upper-left and upper-right blocks of $\widetilde\rho(X)$ in step 2.1. Hence $\rho(X)\bar v+c(X)=0$ for $X\in\mathfrak k$. Set $v=-\bar v$. The identity $c(X)=\rho(X)v$ extends complex-linearly from $\mathfrak k$ to $\mathfrak l_{\mathbb C}$ by step 1.1, and hence holds for every original $X\in\mathfrak l$. [A1, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

