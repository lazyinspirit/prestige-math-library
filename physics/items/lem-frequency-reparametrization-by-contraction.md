---
id: lem-frequency-reparametrization-by-contraction
kind: lemma
title: "Elimination of the frequency shift by a holomorphic contraction retraction"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-cauchy-fourier-and-lattice-shell-bounds, thm-banach-fixed-point, thm-complete-subspace-iff-closed, rem-complex-euclidean-space-dictionary, thm-weierstrass-convergence-holomorphic-functions, thm-power-series-expansion-in-several-complex-variables, thm-chain-rule-for-total-derivatives, thm-mean-value-inequality, def-lipschitz-holder-contraction, def-complete-metric-space, def-operator-norm, def-metric-topology]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  thm-complete-subspace-iff-closed: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  def-complete-metric-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §3 (the parameter retraction $\\nu=\\nu_++v(\\nu)$ solved by a contraction with $|Dv|\\le2nB/h\\le1/8$, giving $|\\phi-\\mathrm{id}|\\le B$ and $h|D\\phi-\\mathrm{id}|\\le(16n/7)B$), PDF pp. 16-19."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.4 (estimates for the linearized equation) and §6.1-§6.2 (solution of the frequency-shift equation by the contraction principle on a complex parameter ball), printed pp. 36-40 and 92-106."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $h>0$, let $\Omega\subseteq\mathbb R^n$, and let $v:O_h(\Omega)\to\mathbb C^n$ be holomorphic with $|v|_{O_h(\Omega)}\le B$ where
$$0\le B\le\frac{h}{16n}.$$
Then:

1. **Existence and uniqueness.** For every $\nu_+\in O_{h/4}(\Omega)$ there is exactly one $\nu\in O_{h/2}(\Omega)$ with
$$\nu+v(\nu)=\nu_+.$$
   The assignment $\phi(\nu_+):=\nu$ defines a map $\phi:O_{h/4}(\Omega)\to O_{h/2}(\Omega)$ with $|\phi(\nu_+)-\nu_+|_\infty\le B$ for every $\nu_+$.
2. **Holomorphy.** $\phi$ is holomorphic on $O_{h/4}(\Omega)$.
3. **Derivative bounds.** With $D\phi$ the complex Jacobian and the row-sum norm, for every $\nu_+\in O_{h/4}(\Omega)$
$$\|D\phi(\nu_+)-I_n\|\le\frac{16n}{7}\,\frac{B}{h},\qquad\text{equivalently}\qquad h\,\|D\phi(\nu_+)-I_n\|\le\frac{16n}{7}B.$$

## Facts & Assumptions

**Given:** The dimension $n$, the parameter width $h>0$, the set $\Omega\subseteq\mathbb R^n$, and the holomorphic vector field $v$ with $|v|_{O_h(\Omega)}\le B$ and $0\le B\le h/(16n)$.

[F1] Definitions of $O_h(\Omega)$, holomorphy and the sup-norm ([[def-holomorphic-kam-domain-and-diophantine-labels]]).

[F2] Cauchy bound in the parameter variable: if $u$ is holomorphic and $|u|\le M$ on $O_h(\Omega)$, then $|\partial_{\nu_j}u|\le M/\delta$ on $O_{h-\delta}(\Omega)$ for every $0<\delta<h$ ([[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 2, with the $\nu$-variable in place of the action variable).

[F3] The complex Euclidean dictionary makes $\mathbb C^n$ complete in its Euclidean metric ([[rem-complex-euclidean-space-dictionary]]). For every $z\in\mathbb C^n$, $|z|_\infty\le |z|_2\le\sqrt n\,|z|_\infty$, so a sequence is Cauchy or convergent in the supremum metric exactly when it is Cauchy or convergent in the Euclidean metric; hence $\mathbb C^n$ is complete in the supremum metric as well. The set $K:=\{\nu:|\nu-\nu_+|_\infty\le2B\}$ is closed: if $\nu\notin K$, the reverse triangle inequality gives a positive-radius supremum ball about $\nu$ disjoint from $K$ ([[def-metric-topology]]). Thus $K$ is complete by the closed-subspace direction of [[thm-complete-subspace-iff-closed]] clause 2. This argument includes $B=0$, when $K=\{\nu_+\}$; compactness is not needed.

[F4] Banach fixed point theorem: a contraction of a nonempty complete metric space has exactly one fixed point ([[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]], [[def-complete-metric-space]]).

[F5] On an open subset of $\mathbb C$, a locally uniform limit of scalar holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]). A continuous separately holomorphic scalar function on a complex polydisc has a local absolutely convergent power-series expansion ([[thm-power-series-expansion-in-several-complex-variables]]). Apply these statements to each coordinate slice and each scalar component, respectively; the several-variable statement requires continuity as well as slice holomorphy.

[F6] Operator norm and the inverse bound: for the row-sum norm $\|M\|=\max_i\sum_j|M_{ij}|$ one has $\|MN\|\le\|M\|\,\|N\|$ and $\|I_n\|=1$ ([[def-operator-norm]]); if $\|M\|\le1/2$ then $I_n+M$ is invertible with $\|(I_n+M)^{-1}\|\le1/(1-\|M\|)$ and $\|(I_n+M)^{-1}-I_n\|\le\|M\|/(1-\|M\|)$, because $(I_n+M)^{-1}=\sum_{k\ge0}(-M)^k$ converges in the operator norm.

[F7] If $u_i:[0,1]\to\mathbb C$ is differentiable as a map of real variables, apply the one-variable mean-value inequality to its realification $[0,1]\to\mathbb R^2$ to obtain $|u_i(1)-u_i(0)|\le\sup_{t\in[0,1]}|u_i'(t)|$; the derivative of a composition with a line segment is given by the chain rule ([[thm-chain-rule-for-total-derivatives]], [[thm-mean-value-inequality]], [[rem-complex-euclidean-space-dictionary]]).

## Proof

**Proof technique:** direct; solve the frequency equation by the contraction principle on the closed supremum-metric set of points at distance at most $2B$ from $\nu_+$, prove holomorphy from the uniformly convergent iteration, and differentiate the defining identity to bound the Jacobian.

1.1 *The closed set lies inside the parameter domain.* Fix $\nu_+\in O_{h/4}(\Omega)$ and put $K:=\{\nu\in\mathbb C^n:|\nu-\nu_+|_\infty\le2B\}$, which is nonempty also when $B=0$. Every $\nu\in K$ satisfies $\operatorname{dist}_\infty(\nu,\Omega)\le\operatorname{dist}_\infty(\nu_+,\Omega)+2B<h/4+2\cdot h/(16n)\le h/4+h/8<h/2$, so $K\subseteq O_{h/2}(\Omega)\subseteq O_h(\Omega)$. [F1, given, algebra]

2.1 *The map and its contraction property.* Define $T(\nu):=\nu_+-v(\nu)$ on $K$. For $\nu\in K$, $|T(\nu)-\nu_+|=|v(\nu)|\le B\le2B$, so $T(K)\subseteq K$. For $\nu,\nu'\in K$, the segment between them lies in $K\subseteq O_{h/2}$. By [F2], each entry of $Dv$ has modulus at most $2B/h$ there. Along the segment, the derivative of each realified complex component of $v$ is therefore bounded by $(2B/h)\sum_j|\nu_j-\nu'_j|\le(2nB/h)|\nu-\nu'|_\infty$. Applying [F7] componentwise gives $|v(\nu)-v(\nu')|_\infty\le(2nB/h)|\nu-\nu'|_\infty\le\frac18|\nu-\nu'|_\infty$, because $B\le h/(16n)$. Thus $T:K\to K$ is a contraction with factor $1/8$. [step 1.1, F2, F7, algebra]

3.1 *Fixed point.* $K$ is complete by [F3], so [F4] gives exactly one $\nu\in K$ with $T(\nu)=\nu$, i.e. $\nu+v(\nu)=\nu_+$, and then $|\nu-\nu_+|=|v(\nu)|\le B$. If $\nu_1,\nu_2\in O_{h/2}(\Omega)$ both satisfy $\nu_i+v(\nu_i)=\nu_+$, then each lies in $K$ because $|\nu_i-\nu_+|=|v(\nu_i)|\le B\le2B$; their connecting segment lies in the convex ball $K$, so $|\nu_1-\nu_2|=|v(\nu_2)-v(\nu_1)|\le(1/8)|\nu_1-\nu_2|$ by the same estimate of step 2.1, hence $\nu_1=\nu_2$. This proves the uniqueness assertion of clause 1 and defines $\phi$. [step 2.1, F3, F4, algebra]

4.1 *Holomorphy.* On the open set $U:=O_{h/4}(\Omega)$ define $f_0(x):=x$ and $f_{k+1}(x):=x-v(f_k(x))$. Steps 1.1 and 2.1 keep every $f_k(x)$ in the ball $K_x:=\{z:|z-x|_\infty\le2B\}\subseteq O_{h/2}(\Omega)$, so induction and holomorphic composition make each $f_k:U\to\mathbb C^n$ holomorphic. The increments satisfy $|f_k(x)-f_{k-1}(x)|_\infty\le8^{-(k-1)}B$ for $k\ge1$, uniformly in $x$, hence $f_k\to\phi$ uniformly on $U$ by step 3.1. Each scalar component of $\phi$ is continuous: at a point, approximate it uniformly by a continuous component of $f_k$ within one third of a prescribed tolerance, and use continuity of that component for the remaining third. On any coordinate disc contained in $U$, the corresponding scalar components converge uniformly and are one-variable holomorphic, so the one-variable part of [F5] makes the limit holomorphic on that slice. Thus every component of $\phi$ is continuous and separately holomorphic; the polydisc part of [F5], applied on a polydisc about each point of $U$, gives its local power-series expansion. This proves clause 2, including $B=0$ when every iterate is the identity; if $U$ is empty the assertion is vacuous. [step 1.1, step 2.1, step 3.1, F1, F5, algebra]

5.1 *Derivative bound.* Differentiating the identity $\phi(\nu_+)+v(\phi(\nu_+))=\nu_+$ with respect to $\nu_+$ (both sides holomorphic in $\nu_+$ on $O_{h/4}$) gives $(I_n+Dv(\phi(\nu_+)))D\phi(\nu_+)=I_n$, and $\|Dv(\phi(\nu_+))\|\le2nB/h\le1/8$ by step 2.1, so [F6] gives $\|D\phi(\nu_+)-I_n\|=\bigl\|(I_n+Dv\circ\phi)^{-1}-I_n\bigr\|\le\frac{\|Dv\circ\phi\|}{1-\|Dv\circ\phi\|}\le\frac{2nB/h}{7/8}=\frac{16n}{7}\frac{B}{h}.$ This is clause 3. [step 2.1, step 4.1, F2, F6, algebra] ∎

## Remarks

- **Why $2B$ and $h/(16n)$.** The radius $2B$ is what makes the range of $T$ stay in the ball while keeping the ball inside $O_{h/2}$; the smallness $B\le h/(16n)$ makes the row-sum Lipschitz constant at most $1/8$, so the inverse bound costs the factor $8/7$.
- **Uniformity.** The constant in clause 3 is explicit and independent of $\nu_+$; this is exactly the smallness later used to compare the perturbed frequency parametrisation with the unperturbed one.
