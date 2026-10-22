---
id: def-qftx-local-time-ordered-system
kind: definition
title: Local scalar time-ordered product contract
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-qftx-off-shell-local-polynomial-functionals
  - lem-qftx-balanced-local-functional-representatives
  - lem-qftx-local-polynomial-functionals-are-microcausal
  - def-qftx-wavefront-hadamard
  - def-qftx-polynomial-microcausal-functionals
  - def-qftx-local-wavefront-set
  - lem-qftx-microcausal-star-product
  - thm-qftx-wavefront-product
  - def-qft-distribution-scaling-degree
  - def-countable-choice
dependency_roles:
  def-qftx-off-shell-local-polynomial-functionals: mathematical-premise
  lem-qftx-balanced-local-functional-representatives: mathematical-premise
  lem-qftx-local-polynomial-functionals-are-microcausal: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  def-qftx-polynomial-microcausal-functionals: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  lem-qftx-microcausal-star-product: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Sections 4–7, equations (23)–(25), (52)–(53), (77)–(84); full local-functional, microcausal, time-ordering and graph conventions, with the exact scalar input data fixed here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Sections 3–4, printed pp. 14–21, local S-matrix axioms, causal factorization, causal cover and off-diagonal products.
verification:
  precheck: n/a
---

## Definition

Let $\mathbb M=\mathbb R^4$ have metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and future direction given by increasing $x^0$. Use units $c=1$, so a mass parameter has inverse-length units. Define $x\in J^+(y)$ by $x^0-y^0\ge|\mathbf x-\mathbf y|$ and $x\in J^-(y)$ by $y^0-x^0\ge|\mathbf y-\mathbf x|$; for $A\subseteq\mathbb M$, put $J^\pm(A)=\bigcup_{y\in A}J^\pm(y)$. A field configuration is any smooth real function $\phi$; it is off shell because no field equation is imposed. The allowed local interactions are compactly supported finite polynomial functionals of $\phi$ and finitely many coordinate derivatives, integrated against $d^4x$. The support of a functional $F$ is the closed set of points each of whose neighborhoods contains the support of a compactly supported variation that changes $F$ for some configuration.

For $\Lambda\in SO^+(1,3)$, require $\Lambda^{\mathsf T}\eta\Lambda=\eta$, $\det\Lambda=1$, and preservation of the chosen future cone; $SO^+(1,3)$ denotes this identity component. The proper orthochronous Poincare group consists of $\gamma=(a,\Lambda)$ with $a\in\mathbb M$ and $\Lambda\in SO^+(1,3)$. It acts by $(\gamma\cdot\phi)(x)=\phi(\Lambda^{-1}(x-a))$ and $(\gamma\cdot F)(\phi)=F(\gamma^{-1}\cdot\phi)$.

For a distribution on a coordinate chart, its wavefront set consists of the nonzero cotangent directions where every compact localization fails to have a rapidly decreasing Fourier transform in every conic neighborhood. Covectors are future or past causal when their metric-dual vectors are causal with the indicated time orientation; a nonzero causal covector has a nonzero time component. Write $\Delta=\{(x,x):x\in\mathbb M\}$ and $N^*\Delta=\{(x,\xi;x,-\xi):\xi\ne0\}$. Write $(x,\xi)\sim(y,\zeta)$ when both covectors are nonzero null and cotangent to the same null straight line, with parallel transport carrying $\xi$ to $\zeta$. Precisely, for $x\ne y$ there must be a future-directed nonconstant affinely parametrized null straight line $\gamma$ and parameters $s,t$ in either order with $x=\gamma(s)$, $y=\gamma(t)$ and a real $\lambda\ne0$ such that $\xi=\lambda\eta(\dot\gamma(s),\cdot)$ and $\zeta=\lambda\eta(\dot\gamma(t),\cdot)$. When $x=y$, require $\xi=\zeta$ and allow every nonzero null covector. This relation is unsigned: the future first-covector condition below selects $\lambda>0$, while the Feynman past branch selects $\lambda<0$. A fixed free scalar input consists of $m\ge0$, a two-point distribution $W$ satisfying
$$P_xW=P_yW=0,\qquad P=-\eta^{ab}\partial_a\partial_b+m^2,$$
and the positive-frequency null wavefront condition
$$\operatorname{WF}(W)=\mathcal C^+:=\{(x,\xi;y,-\eta):(x,\xi)\sim(y,\eta),\ \xi\text{ future null}\}.$$
For a two-point distribution $U$, set $U^{\mathsf T}(x,y)=U(y,x)$ and let $U^*$ be complex conjugation. Assume $W$ is invariant under translations and $SO^+(1,3)$, satisfies $W-W^{\mathsf T}=iE$ for a fixed distribution $E$ supported where $x-y$ is causal, and satisfies $W^*=W^{\mathsf T}$.

The prescribed scalar time-ordered contraction input is a symmetric distribution $H_F\in\mathcal D'(\mathbb M^2)$ invariant under translations and $SO^+(1,3)$, equal to $W(x,y)$ on the open set $x^0>y^0$ and to $W(y,x)$ on $y^0>x^0$. The two prescriptions agree on spacelike-separated open supports because $E$ is supported on causal pairs. Translation invariance gives $H_F(x,y)=h_F(x-y)$ and $W(x,y)=w(x-y)$. For a distribution $T$ on $\mathbb R^4$, set $T_\rho(\varphi)=\rho^{-4}T(\varphi(\cdot/\rho))$ and define $\operatorname{sd}_0(T)$ as the infimum of real $\omega$ for which $\rho^\omega T_\rho\to0$ on each fixed test as $\rho\downarrow0$. Require $\operatorname{sd}_0(h_F),\operatorname{sd}_0(w)\le2$ and
$$\operatorname{WF}(H_F)\subseteq\Gamma_F:=N^*\Delta\cup\{(x,\xi;y,-\eta):x\ne y,\ (x,\xi)\sim(y,\eta),\ \xi\text{ future null if }x\in J^+(y),\ \xi\text{ past null if }x\in J^-(y)\}.$$
This is fixed conditional data: it does not claim existence of $W$ or $H_F$, and it does not define any singular restriction or product of $H_F$ on a diagonal.

For $r\ge1$, $F^{(r)}(\phi)$ denotes the distribution kernel on $\mathbb M^r$ of the mixed variation in $r$ compactly supported smooth directions, and set $F^{(0)}(\phi)=F(\phi)$. Define $\deg F$ as the largest positive $r$ with $F^{(r)}\ne0$, or $0$ if all positive-order derivative kernels vanish; in particular $\deg0=0$. The class $\mathcal F_{\mu c}^{\mathrm{poly}}(\mathbb M)$ consists of finite polynomial functionals with compactly supported derivative kernels such that every nonzero wavefront tuple of each derivative kernel avoids both the cone of tuples whose entries are all future causal and the cone of tuples whose entries are all past causal; zero entries in either cone are allowed. For $F,G$ in this class, define
$$F\star_WG=\sum_{r=0}^{\min(\deg F,\deg G)}\frac{\hbar^r}{r!}\left\langle F^{(r)}(\phi)\otimes G^{(r)}(\phi),W^{\otimes r}\right\rangle,$$
using distribution products and pushforwards under the stated wavefront transversality conditions, with the $r=0$ pairing interpreted as the pointwise product $F(\phi)G(\phi)$. Here $\hbar$ is a formal indeterminate, and Countable Choice is assumed for the supplier theorem defining these contractions.

A scalar time-ordered system is a sequence of symmetric multilinear maps
$$T_n:\big(\mathcal F_{\mathrm{loc}}^{\mathrm{poly}}(\mathbb M)\big)^n\longrightarrow \mathcal F_{\mu c}^{\mathrm{poly}}(\mathbb M)\llbracket\hbar\rrbracket,\qquad T_0=1,\quad T_1=\operatorname{id}.$$
For $I\subseteq\{1,\ldots,n\}$ put $S_I=\bigcup_{i\in I}\operatorname{supp}F_i$ and $F_I=(F_i)_{i\in I}$. Causal factorization requires
$$T_n(F_1,\ldots,F_n)=T_{|I|}(F_I)\star_W T_{|I^c|}(F_{I^c})$$
for every nonempty proper $I$ such that $S_I\cap J^-(S_{I^c})=\varnothing$; an empty block is the unit.

Field independence means that each numerical graph distribution is independent of the background field $\phi$; all $\phi$-dependence enters through the vertex kernels $F_i^{(r)}(\phi)$. In the graph expansion of $T_n$, vertices are labeled by $1,\ldots,n$ and an edge between distinct vertices contracts one derivative slot at each endpoint by $H_F$. A graph is a finite loopless multigraph, so parallel edges are allowed; if $r_{ij}$ edges join vertices $i$ and $j$, the Wick coefficient for that choice includes $\hbar^{\sum_{i<j}r_{ij}}/\prod_{i<j}r_{ij}!$. Finite-order local jet derivatives may act on incident edge kernels. Each coefficient is a finite sum of such contractions, since every input has finite polynomial degree. No graph term uses a singular product at a diagonal before extension.

For $n\ge2$, use relative coordinates $z_i=x_i-x_n$ ($1\le i<n$), so the total diagonal corresponds to $0\in\mathbb R^{4(n-1)}$. The relative scaling degree $\delta_\Gamma$ of a numerical graph distribution is defined by the same positive-dilation rule above in this relative dimension. The scaling condition is imposed compatibly with integration by parts in the local functionals. First write every local density in its unique balanced-jet representative, in which the derivative variables at a degree-$r$ vertex are the relative combinations $q_a=p_a-r^{-1}\sum_bp_b$. At the extension stage, numerical coefficients on independent balanced labels admit extensions across the total diagonal preserving their actual scaling degree; the final normalization conditions below are imposed within the engineering upper bounds. General jet labels are recovered by total coordinate differentiation of the already extended full coefficients and by linearity; this includes differentiation of the remaining field jets. For a primitive differentiated graph the required upper scaling bound is the engineering degree
$$B_\Gamma=2|E(\Gamma)|+\sum_e|\alpha_e|.$$
For a graph containing proper subgraphs, use a finite upper bound obtained by causal block induction from the edge degrees and the finite derivative orders of the chosen lower-order local counterterms; total derivatives add their orders to that bound. Any two extensions of a fixed punctured coefficient with upper bound $B_\Gamma$ differ by derivatives $\partial^\beta\delta_0$ of order $|\beta|\le\lfloor B_\Gamma-4(n-1)\rfloor$ when $B_\Gamma\ge4(n-1)$, and agree when $B_\Gamma<4(n-1)$. The allowed counterterms must also satisfy the stated linearity and derivative identities. For the analytic degree-preserving extension family of an independent balanced coefficient, its actual degree replaces $B_\Gamma$ in this ambiguity bound. A differentiated coefficient is not required to retain the exact scaling degree of a punctured linear combination that vanishes: total differentiation may force a contact term at the diagonal.

Covariance requires $T_n(\gamma\cdot F_1,\ldots,\gamma\cdot F_n)=\gamma\cdot T_n(F_1,\ldots,F_n)$ for each proper orthochronous Poincare transformation. Fix the Lorentz Lie-algebra convention $[J_i,J_j]=\epsilon_{ijk}J_k$, $[J_i,K_j]=\epsilon_{ijk}K_j$, and $[K_i,K_j]=-\epsilon_{ijk}J_i$. For a formal coupling $g$, define coefficientwise
$$\mathcal S_g(V)=\sum_{n=0}^{\infty}\frac{(ig/\hbar)^n}{n!}T_n(V,\ldots,V).$$
The anti-time-ordered series is $\overline{\mathcal S}_g(V):=\mathcal S_g(V)^*$, where the involution conjugates scalar coefficients, fixes real $g,\hbar$, and reverses the order of factors; $W^*=W^{\mathsf T}$ gives $(F\star_WG)^*=G^*\star_WF^*$. Formal unitarity requires $\overline{\mathcal S}_g(V)\star_W\mathcal S_g(V)=1$ for every real $V=V^*$. At each $g$-order, coefficients are finite Laurent polynomials in $\hbar$ before cancellation and are compared algebraically; there is no analytic convergence, positivity of formal coefficients, adiabatic limit, or gauge/Ward identity in this contract.

## Definition references

[[def-qftx-off-shell-local-polynomial-functionals]]

[[def-qftx-wavefront-hadamard]]

[[def-qftx-local-wavefront-set]]

[[def-qft-distribution-scaling-degree]]

[[lem-qftx-microcausal-star-product]]

[[thm-qftx-wavefront-product]]

[[def-countable-choice]]

[[def-qftx-polynomial-microcausal-functionals]]

[[lem-qftx-local-polynomial-functionals-are-microcausal]]

[[lem-qftx-balanced-local-functional-representatives]]
