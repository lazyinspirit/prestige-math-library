---
id: thm-gr-auxiliary-complete-riemannian-metric
kind: theorem
title: "The auxiliary Riemannian metric h=g+2n-flat tensor n-flat is complete after a proper-exhaustion conformal factor, and its closed bounded sets are compact"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, def-gr-inverse-metric-and-musical-isomorphisms, def-lorentz-orthogonality-and-orthogonal-complement, def-gr-smooth-covariant-two-tensor-field, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-absolutely-continuous-function, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function, thm-hopf-rinow, def-riemannian-distance-on-a-connected-manifold, thm-riemannian-distance-is-a-metric, thm-the-riemannian-distance-topology-is-the-manifold-topology, def-complete-metric-space, def-countable-choice, def-metric-ball, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function: mathematical-premise
  thm-hopf-rinow: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
  thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  def-complete-metric-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-metric-ball: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: auxiliary Riemannian metrics, section 1.6 with Theorem 1.5 (Nomizu-Ozeki; a complete metric in every conformal class) and the Hopf-Rinow compactness of closed balls, printed pp. 10-11; Definition 2.16 and Lemma 2.17 (h-arclength of inextendible causal curves), printed pp. 33-34"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "R. M. Wald, General Relativity, University of Chicago Press (1984): the auxiliary positive definite metric on a time-oriented spacetime, Chapter 8"
      url: "https://doi.org/10.7208/chicago/9780226870373.001.0001"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $(M,g,N)$ be a time-oriented smooth Lorentzian
four-manifold ([[def-gr-smooth-lorentzian-objects]]) and put
$$n:=\frac{N}{\sqrt{-g(N,N)}}\quad\text{(pointwise)},\qquad h:=g+2\,n^\flat\otimes n^\flat,$$
with the flat map $\flat$ of [[def-gr-inverse-metric-and-musical-isomorphisms]],
so that $h$ is a smooth covariant $2$-tensor field
([[def-gr-smooth-covariant-two-tensor-field]]). Then:

**(a)** $h$ is a smooth Riemannian (positive definite) metric on $M$.

**(b)** There is a smooth nonnegative proper function $f:M\to[0,\infty)$ such
that the metric
$$h':=(1+|df|_h^2)\,h$$
is a smooth Riemannian metric with $|df|_{h'}\le1$ everywhere.

**(c)** For each connected component $M_0$ of $M$, the metric space
$(M_0,d_{h'})$ is complete, where $d_{h'}$ is the Riemannian distance of
$h'|_{M_0}$ ([[def-riemannian-distance-on-a-connected-manifold]],
[[thm-riemannian-distance-is-a-metric]]).

**(d)** Consequently, for every connected component $M_0$, every subset of
$M_0$ that is closed in $M_0$ and bounded in $d_{h'}$ is compact, and every
closed ball $\{q\in M_0:d_{h'}(q,p)\le r\}$ is compact.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a time-oriented smooth Lorentzian four-manifold $(M,g,N)$, the fields $n$, $h$, and a connected component $M_0$ of $M$.

[L1] $n$ is smooth, nowhere vanishing, with $g(n,n)=-1$ and $g(n,N)<0$; the flat map is the smooth bundle isomorphism $X\mapsto g(X,\cdot)$ and $n^\flat$ is the smooth covector field $g(n,\cdot)$; tensor products and sums of smooth tensor fields are smooth ([[def-gr-smooth-lorentzian-objects]], [[def-gr-observer-and-rest-space]], [[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-smooth-covariant-two-tensor-field]]).

[L2] For a timelike vector $u$ the orthogonal complement $u^\perp=\{w:g(w,u)=0\}$ is a three-dimensional positive definite subspace, and every $v\in T_qM$ decomposes uniquely as $v=\alpha n_q+w$ with $w\in n_q^\perp$ and $\alpha=-g_q(v,n_q)$; then $g_q(v,v)=-\alpha^2+g_q(w,w)$ ([[def-lorentz-orthogonality-and-orthogonal-complement]], [[def-gr-smooth-lorentzian-objects]]).

[L3] For a smooth positive definite metric $H$ and a smooth function $u$, the metric $H'=(1+|du|_H^2)H$ has inverse $H'^{-1}=(1+|du|_H^2)^{-1}H^{-1}$ and satisfies $|du|_{H'}^2=|du|_H^2/(1+|du|_H^2)\le1$; this is multilinear algebra applied at each point ([[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L4] Assuming $\mathrm{AC}_\omega$, there is a smooth nonnegative proper function $f:M\to[0,\infty)$, that is, every closed sublevel $f^{-1}([0,c])$ is compact ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[L5] If $H$ is a smooth positive definite metric on a connected smooth manifold $M_0$ and $\gamma:[a,b]\to M_0$ is a locally absolutely continuous curve, then $|u(\gamma(b))-u(\gamma(a))|\le\int_a^b|du|_H(\gamma(t))\,|\gamma'(t)|_H\,dt$ for every smooth $u$, by the chain rule and the Cauchy-Schwarz inequality in $H$, together with the absolutely continuous calculus ([[def-absolutely-continuous-function]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[lem-gr-causal-curve-calculus]] clause (b)).

[L6] The Riemannian distance $d_H$ of a smooth positive definite metric $H$ on a connected manifold is a metric, and it induces the manifold topology; in particular metric limits and topological limits agree, and a subset is compact for $d_H$ exactly when it is compact in the manifold topology ([[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]], [[thm-the-riemannian-distance-topology-is-the-manifold-topology]], [[def-metric-ball]]).

[L7] In a compact metric space every sequence has a convergent subsequence, and a Cauchy sequence with a convergent subsequence converges; these are the standard completeness facts encoded in [[def-complete-metric-space]].

[L8] Hopf-Rinow, under $\mathrm{AC}_\omega$: for a connected Riemannian manifold $(M_0,H)$, completeness of $(M_0,d_H)$ is equivalent to every closed $d_H$-bounded subset being compact, and closed metric balls are then compact ([[thm-hopf-rinow]], conditions 1 and 5).

## Proof

**Proof technique:** direct.

1.1 (Clause (a).) Let $q\in M$ and $v\in T_qM$ nonzero, and decompose $v=\alpha n_q+w$ as in [L2]. Then $g_q(v,n_q)=-\alpha$, so $$h_q(v,v)=g_q(v,v)+2g_q(v,n_q)^2=-\alpha^2+g_q(w,w)+2\alpha^2=\alpha^2+g_q(w,w).$$ If $w\ne0$ then $g_q(w,w)>0$ by positive definiteness on $n_q^\perp$, so $h_q(v,v)>0$; if $w=0$ then $\alpha\ne0$ and $h_q(v,v)=\alpha^2>0$. Symmetry of $h$ is inherited from $g$ and the symmetric product $n^\flat\otimes n^\flat$, and smoothness from [L1]. This proves (a). [L1, L2, given, algebra]

2.1 (The conformal factor.) By [L4] choose a smooth nonnegative proper $f$ and set $h':=(1+|df|_h^2)h$. By [L3], applied at each point with $H=h$, the field $h'$ is positive definite and smooth and satisfies $|df|_{h'}\le1$ everywhere. This proves (b). [step 1.1, L3, L4, given]

3.1 (The proper function is $1$-Lipschitz for $h'$.) Let $q,q'\in M_0$ and let $\varepsilon>0$; by the definition of the Riemannian distance as an infimum of lengths of locally absolutely continuous curves ([[def-riemannian-distance-on-a-connected-manifold]]) there is a locally absolutely continuous curve $\gamma:[a,b]\to M_0$ from $q$ to $q'$ with $\ell_{h'}(\gamma)\le d_{h'}(q,q')+\varepsilon$. By [L5] with $H=h'$ and $u=f$, $$|f(q')-f(q)|\le\int_a^b|df|_{h'}\,|\gamma'|_{h'}\le\ell_{h'}(\gamma)\le d_{h'}(q,q')+\varepsilon;$$ letting $\varepsilon\downarrow0$ gives $|f(q')-f(q)|\le d_{h'}(q,q')$. [step 2.1, L5, given, algebra]

4.1 (Completeness.) Let $(x_k)$ be a Cauchy sequence in $(M_0,d_{h'})$. There is $k_0$ with $d_{h'}(x_k,x_{k_0})\le1$ for all $k\ge k_0$; by step 3.1, $f(x_k)\le f(x_{k_0})+1$ for those $k$, so the tail of the sequence lies in the closed sublevel $K:=f^{-1}\bigl([0,f(x_{k_0})+1]\bigr)$, which is compact in $M$ by [L4] and hence compact in $M_0$; note $K$ contains $x_k$ only for $k\ge k_0$ together with $x_{k_0}$, and we may add the finitely many remaining terms to obtain a compact subset of $M_0$ containing the whole sequence, since a finite set is compact and a finite union of compact sets is compact. On this compact set the sequence has a convergent subsequence by [L7]; that subsequence converges in the manifold topology, hence, by [L6], in $d_{h'}$, and a Cauchy sequence with a convergent subsequence converges in $d_{h'}$. Hence $(M_0,d_{h'})$ is complete, which is (c). [step 3.1, L4, L6, L7, given]

5.1 (Clause (d).) Apply [L8] to the connected Riemannian manifold $(M_0,h'|_{M_0})$, which is complete by step 4.1: every closed $d_{h'}$-bounded subset of $M_0$ is compact, and every closed ball is compact. This proves (d) and completes the proof. [step 4.1, L8, given] ∎

## Remarks

- **Choice.** The countable choice assumption is inherited from the proper-exhaustion theorem and Hopf-Rinow and is used only there; the metric $h$ itself and clauses (a)-(b) need no choice.

- **Why $h$ and not just some Riemannian metric.** The particular combination $g+2n^\flat\otimes n^\flat$ has the additional property, recorded in [[lem-gr-causal-curve-conventions]] and used in the limit-curve arguments, that $h(X,X)\ge1$ for every $g$-unit future timelike $X$; this is what makes the arclength depth of prepended geodesics controlled without completeness assumptions on $g$.

- **Scope.** The theorem is a global existence statement about one auxiliary Riemannian metric on the smooth Lorentzian model; it asserts no completeness of $g$, no geodesic completeness and no physical conclusion.
