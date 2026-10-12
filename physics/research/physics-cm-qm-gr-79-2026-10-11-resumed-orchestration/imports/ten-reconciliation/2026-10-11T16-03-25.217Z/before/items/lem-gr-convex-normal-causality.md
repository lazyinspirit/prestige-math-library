---
id: lem-gr-convex-normal-causality
kind: lemma
title: "Pointwise local causality: closed cones, openness of the local chronological future, no local closed causal curves, corner smoothing and closedness of the local causal relation"
status: draft
origin: session
domain: mathematics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-normal-neighborhood-causal-cone, lem-gr-null-position-vector-forces-null-velocity, lem-gr-normal-neighborhood-length-monotonicity, thm-gronwall-integral-inequality, thm-gr-convex-normal-neighborhoods, def-gr-normal-neighborhoods-and-position-vectors, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, def-gr-future-and-past-sets, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, thm-gr-local-geodesics-and-exponential-map, def-gr-smooth-lorentzian-objects, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, def-interval]
dependency_roles:
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-null-position-vector-forces-null-velocity: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-future-and-past-sets: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 2.9, Corollary 2.10 and Theorem 2.11 printed pp. 29-32"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Proposition 2.4.5, Proposition 2.4.7 and Corollary 2.4.10, printed pp. 20-24"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$. For every $x\in M$ there is an open
neighborhood $B$ of $x$, a strictly convex normal ball satisfying the
hypotheses of [[thm-gr-normal-neighborhood-causal-cone]] with base point
$x$, such that, writing $J_B(x)$, $I_B(x)\subseteq B$ for the endpoints in
$B$ of future causal, respectively future timelike, curves with image in
$B$ starting at $x$, and $\mathcal C^+,\mathcal T^+,\mathcal N^+$ for the
future causal or zero, future timelike, and future null nonzero vectors of
$\exp_x^{-1}(B)$:

**(a)** $J_B(x)=\exp_x(\mathcal C^+)$, $I_B(x)=\exp_x(\mathcal T^+)$, and
$J_B(x)\setminus(I_B(x)\cup\{x\})=\exp_x(\mathcal N^+)$;

**(b)** $J_B(x)$ and $J_B(x)\setminus I_B(x)$ are closed in $B$ and
$I_B(x)$ is open in $B$;

**(c)** there is no nonconstant future causal curve $\gamma:[0,1]\to B$
with $\gamma(0)=\gamma(1)=x$;

**(d) corner smoothing.** if $\gamma:[0,1]\to B$ is future causal with
$\gamma(0)=x$ and there is $t_0$ at which $\gamma'(t_0)$ is future
timelike, then $\gamma(1)\in I_B(x)$;

**(e) closed relation at fixed base.** if $q_n\in J_B(x)$ and
$q_n\to q\in B$, then $q\in J_B(x)$; the same holds for the other two
sets of (a) in place of $J_B(x)$.

## Facts & Assumptions

**Given:** A point $x\in M$ and a cone-theorem ball around $x$ as in [[thm-gr-convex-normal-neighborhoods]] and [[thm-gr-normal-neighborhood-causal-cone]].

[L1] The cone theorem holds in $B$ with base $x$: clauses (a)-(d) of [[thm-gr-normal-neighborhood-causal-cone]] (future causal curves from $x$ have future causal or zero position vectors; the cone characterizations; null rigidity; length maximality).

[L2] A future causal curve in $B$ from $x$ that has a null position vector at some time has null velocity almost everywhere up to that time and zero length there ([[lem-gr-null-position-vector-forces-null-velocity]]).

[L3] The future causal cone in a tangent space is closed, the future timelike cone is open, and a limit of future timelike vectors is future causal or zero ([[lem-timelike-cone-has-two-convex-components]], [[lem-gr-observer-pairing-with-future-causal-vectors]]).

## Proof

**Proof technique:** direct.

1.1 (Existence of $B$ and the cone characterizations.) Choose $B$ as a strictly convex normal ball around $x$, small enough that the hypotheses of [[thm-gr-normal-neighborhood-causal-cone]] hold at $x$; this is possible by taking the ball of [[thm-gr-convex-normal-neighborhoods]] inside a normal-coordinate ball at $x$ on which $\nabla u_x^0$ is past timelike. Then clause (a) is literally the cone theorem's clause (b) applied with $p=x$. [L1, given]

1.2 (No closed causal curves.) Let $\gamma:[0,1]\to B$ be future causal with $\gamma(0)=\gamma(1)=x$, not constant. Let $F:=D_x^2\circ\gamma\le0$, an AC function with $F(0)=F(1)=0$ (the cone theorem gives $F\le0$, and $F(0)=D_x^2(x)=0$). If $F(t_0)<0$ for some $t_0$, the propagation of [[lem-gr-normal-neighborhood-length-monotonicity]] clause (a) gives $F(1)<0$, a contradiction; hence $F\equiv0$, and by [L2] the velocity of $\gamma$ is null almost everywhere. Let $v:=\exp_x^{-1}\circ\gamma$, AC with $v(0)=v(1)=0$. On the open set $\{t:v(t)\ne0\}$, the a.e. computation of the cone theorem's rigidity proof gives $v'(t)=\lambda(t)v(t)$ a.e. with $\lambda(t)\ge0$ (the proportionality factor being nonnegative because both $P(x,\gamma(t))$ and $\gamma'(t)$ are future causal). Put $g:=|v|_{\mathrm e}$ for a Euclidean norm on $T_xM$; on $\{g>0\}$ one has $g'=\langle v,v'\rangle/g=\lambda g$ a.e., and $g$ is AC. If $\{g>0\}$ were nonempty, let $(a_1,a_2)$ be one of its connected components; then $g(a_1)=0$ by maximality and continuity of $v$, and Grönwall's inequality ([[thm-gronwall-integral-inequality]]) applied to $g'=\lambda g$ from $a_1$ gives $g\equiv0$ on $(a_1,a_2)$, a contradiction. Hence $g\equiv0$, so $v\equiv0$ and $\gamma$ is constant, contrary to the assumption. [L1, L2, given, algebra]

2.1 (Closedness and openness.) By step 1.1, $J_B(x)$ is the image under the diffeomorphism $\exp_x|_{W_x}$ of $\mathcal C^+$, and it is described by the closed conditions $g_x(v,v)\le0$, $g_x(v,N_x)\le0$ on $W_x$; since the sets $\{g_x(v,v)\le0\}$ and $\{g_x(v,N_x)\le0\}$ are closed in $T_xM$ by [L3] and continuity, and $\exp_x$ is a homeomorphism onto $B$, $J_B(x)$ is closed in $B$. Similarly the null-boundary set is the image of the closed set $\{g_x(v,v)=0\}\cap\{g_x(v,N_x)<0\}$ and $I_B(x)$ is the image of the open set $\{g_x(v,v)<0\}$. This proves (b) and (e). [L1, L2, L3, given, algebra]

2.2 (Corner smoothing.) Let $\gamma:[0,1]\to B$ be future causal from $x$ with $\gamma'(t_0)$ future timelike at some differentiability point $t_0\in(0,1)$. By step 1.1 and [L2], the position vector of $\gamma(1)$ with respect to $x$ cannot be null or zero: if it were, [L2] would force $\gamma'$ to be null almost everywhere, contradicting the existence of a timelike derivative at $t_0$. By the cone theorem's clause (a), the position vector is therefore future timelike, i.e. $\gamma(1)\in I_B(x)$. This proves (d). [step 1.1, L1, L2, given]

3.1 Claims (a)-(e) are the preceding steps, with (e) from the closedness step. [step 1.1, step 2.1, step 1.2, step 2.2] ∎

## Remarks

- **Locality and use.** All statements are about one small ball $B$ and one
  base point $x$; in the downstream arguments they are applied at the
  finitely many base points that occur in a fixed compact region, and the
  openness of $I_B(x)$ together with the closedness of $J_B(x)$ is exactly
  the local input used in [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]
  and [[lem-gr-globally-hyperbolic-causal-structure]].

- **The closedness of $J_B(x)$ is not asserted for the relation with
  varying base point.** That stronger statement is proved where it is used,
  from the limit curve theorem ([[thm-gr-limit-curve-two-endpoints]]).
