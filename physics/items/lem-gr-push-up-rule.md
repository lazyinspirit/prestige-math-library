---
id: lem-gr-push-up-rule
kind: lemma
title: "The push-up rule: p << q and q <= r imply p << r, together with the timelike-piece criterion"
status: draft
origin: session
domain: mathematics
dependency_level: 20
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-countable-choice, def-gr-causal-curves-and-reachability, lem-gr-chronology-openness, lem-gr-position-vector-differential, lem-gr-joint-exponential-diffeomorphism, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, def-gr-normal-neighborhoods-and-position-vectors, thm-gr-local-geodesics-and-exponential-map, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-observer-and-rest-space, lem-gr-causal-curve-calculus, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-dominating-cone-bounds, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Lemma 2.4.14 (push-up lemma I+) and Corollary 2.4.19 with proof, printed pp. 26-28; Proposition 2.2.3 and Definition 2.2.7 (elementary regions) printed pp. 8-13"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the chronological relation as an open subset of M x M (section 4.2 printed pp. 111-118) and Theorem 2.11 printed p. 28"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the absolutely continuous causal-curve
calculus and the supplied causal results used below.

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) with metric-selected connection
$\nabla$ and the relations $\ll$, $\le$ of
[[def-gr-causal-curves-and-reachability]]. Then:

**(a)** if $p\ll q$ and $q\le r$, then $p\ll r$;

**(b)** if $p\le q$ and $q\ll r$, then $p\ll r$;

**(c)** if $\gamma:[a,b]\to M$ is a future causal curve and there are
$a\le s<t\le b$ such that $\gamma|_{[s,t]}$ is a future timelike curve, then
$\gamma(a)\ll\gamma(b)$;

**(d)** consequently
$$I^+\bigl(J^+(\Omega)\bigr)=I^+(\Omega),\qquad I^-\bigl(J^-(\Omega)\bigr)=I^-(\Omega)$$
for every $\Omega\subseteq M$, and dually
$J^+\bigl(I^+(\Omega)\bigr)=I^+(\Omega)$.

No choice principle beyond the stated assumptions is used.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, points $p,q,r\in M$ with $p\ll q$ and $q\le r$, and a future causal curve $\gamma:[0,1]\to M$ with $\gamma(0)=q$, $\gamma(1)=r$.

[L1] $p\ll q$ means that there are $a<b$ and a future timelike curve $\lambda:[a,b]\to M$ with $\lambda(a)=p$, $\lambda(b)=q$; $q\le r$ means $q=r$ or that there is a future causal curve from $q$ to $r$; the relation $\le$ is reflexive and transitive and $p\ll q$ implies $p\le q$; concatenations of finitely many future causal (respectively future timelike) curves are future causal (respectively future timelike) ([[def-gr-causal-curves-and-reachability]], [[lem-gr-causal-curve-calculus]] clauses (d) and (f)).

[L2] For every $x\in M$ the set $I^+(x)$ is open in $M$ and the set $\{(y,z):y\ll z\}$ is open in $M\times M$ ([[lem-gr-chronology-openness]] clauses (a) and (b)).

[L3] Every point has arbitrarily small strictly convex normal neighborhoods, and the compact image of a curve can be covered by finitely many of them. Such neighborhoods can be chosen inside adapted charts where a local time coordinate is strictly increasing along future causal curves ([[thm-gr-convex-normal-neighborhoods]], [[lem-gr-dominating-cone-bounds]]).

[L4] In a strictly convex normal set C, the causal-cone theorem identifies causal endpoints with future causal or zero position vectors, and a future timelike position vector gives a future timelike radial geodesic ([[thm-gr-normal-neighborhood-causal-cone]] clauses (a),(b)).

[L5] In a strictly convex normal set C, the two-point inverse and D^2(q,r)=g_q(exp_q^{-1}(r),exp_q^{-1}(r)) are smooth on C x C, with
dD^2(q,r)(u,w)=2g_q(P(r,q),u)+2g_r(P(q,r),w)
([[lem-gr-position-vector-differential]] clause (c)).

[L6] The normalized field n=N/sqrt(-g(N,N)) is smooth and future unit timelike. Along a geodesic, causal character and time orientation of its tangent are preserved by parallel transport; the reverse of a past-directed timelike geodesic segment is future timelike ([[def-gr-observer-and-rest-space]], [[lem-gr-parallel-transport-and-geodesic-speed]], [[thm-gr-local-geodesics-and-exponential-map]]).

[L7] A nonzero future causal vector is paired strictly negatively with every future timelike vector; a nonzero past causal vector is paired strictly negatively with every past timelike vector. A timelike vector whose pairing with a future timelike vector is negative is future-directed ([[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-causal-classification-of-lorentz-vectors]]).

[L8] Finite concatenations and restrictions of locally absolutely continuous causal or timelike curves retain the corresponding curve class ([[lem-gr-causal-curve-calculus]] clauses (a),(c),(d)).

## Proof

**Proof technique:** direct.

1.1 (Finite local subdivision.) If q=r then p<<r is immediate. Otherwise fix a future causal curve gamma:[0,1]->M from q to r. Cover its compact image by finitely many open sets C_j, each a strictly convex normal neighborhood contained in an adapted chart. A Lebesgue-number subdivision gives 0=t_0<...<t_m=1 such that gamma([t_i,t_{i+1}]) lies in one such C_i. The adapted chart time is strictly increasing on each subarc, so x_i:=gamma(t_i) and x_{i+1}:=gamma(t_{i+1}) are distinct. [L1, L3, L8, given, construct]

1.2 (Normalization.) At any base point x use the specified smooth future unit timelike vector n_x=N_x/sqrt(-g_x(N_x,N_x)); no unit-length hypothesis on the original time-orientation field N is needed. [L6, given, algebra]

1.3 (Pushing up one causal segment.) Let x,y be distinct points in one C_i with a future causal curve in C_i from x to y, and suppose p<<x. By [L4] the position vector v=exp_x^{-1}(y) is future causal and nonzero. If v is timelike, the radial geodesic gives x<<y and hence p<<y. Suppose v is null. For small epsilon>=0 let x_epsilon=exp_x(-epsilon n_x); this is defined and lies in C_i for epsilon small, and x_epsilon tends to x. Define H(epsilon)=D^2(x_epsilon,y). By [L5], H is differentiable at zero, H(0)=g_x(v,v)=0, and
H'(0)=2g_x(P(y,x),-n_x)<0,
because the reversed null geodesic has past-directed null terminal tangent P(y,x), while -n_x is past timelike ([L6],[L7]). Thus H(epsilon)<0 for all sufficiently small positive epsilon. The inverse vector exp_{x_epsilon}^{-1}(y) varies continuously with epsilon and at epsilon=0 is future null, so for small positive epsilon it is future timelike: its timelike character follows from H(epsilon)<0 and its future orientation follows by continuity of its pairing with the smooth future unit field n. By [L4] the radial segment in C_i gives x_epsilon<<y. Since I^+(p) is open and x belongs to it, choose epsilon small enough that x_epsilon also belongs to I^+(p). Then p<<x_epsilon<<y, so p<<y. This proves the local push-up step. [L2, L4, L5, L6, L7, given, construct]

2.1 (Finite induction along gamma.) Put x_i=gamma(t_i). Initially p<<x_0=q. If p<<x_i, apply step 1.3 to the causal subarc from x_i to x_{i+1} in C_i to obtain p<<x_{i+1}. Finite induction gives p<<x_m=r, proving (a). No uniform perturbation radius along the entire arc is used. [step 1.1, step 1.3, given, construct]

3.1 (Conclusion of (a).) Step 2.1 proves that p<<q and q<=r imply p<<r, including the reflexive case handled in step 1.1. [step 1.1, step 2.1]

4.1 (Clause (b).) Consider the time reverse: $(M,g,-N)$ is again a time-oriented smooth Lorentzian four-manifold, its chronological and causal relations are the reverse relations $\ll^{\mathrm{rev}}=\{(x,y):y\ll x\}$ and $\le^{\mathrm{rev}}=\{(x,y):y\le x\}$, and every object used in the proof of (a) is defined by the same formulas with $N$ replaced by $-N$. Suppose $p\le q$ and $q\ll r$; in the reversed orientation $r\ll^{\mathrm{rev}}q$ and $q\le^{\mathrm{rev}}p$, so (a) applied in the reversed orientation gives $r\ll^{\mathrm{rev}}p$, that is, $p\ll r$. [step 3.1, given, construct]

5.1 (Clause (c).) Let $\gamma$ and $s<t$ be as in (c). The subcurve $\gamma|_{[s,t]}$ is a future timelike curve, so $\gamma(s)\ll\gamma(t)$ by definition; the segment $\gamma|_{[a,s]}$ gives $\gamma(a)\le\gamma(s)$, and clause (b) yields $\gamma(a)\ll\gamma(t)$; the segment $\gamma|_{[t,b]}$ gives $\gamma(t)\le\gamma(b)$, and clause (a) yields $\gamma(a)\ll\gamma(b)$. [step 3.1, step 4.1, given, L1]

6.1 (Clause (d).) Let $\Omega\subseteq M$ and $z\in I^+(J^+(\Omega))$: there is $y\in J^+(\Omega)$ and $x\in\Omega$ with $x\le y$ and $y\ll z$. Then $x\ll z$ by (b), so $z\in I^+(\Omega)$; the reverse inclusion is trivial because $x\le y$ for $y=x$. This proves the first identity, the second is its time reverse, and $J^+(I^+(\Omega))=I^+(\Omega)$ follows from the same argument with $x\ll y$, $y\le z$. [step 3.1, step 4.1, given] ∎

## Remarks

- **What the proof uses.** Only the openness of chronology, the convex normal neighbourhood cone description, the smooth joint inverse exponential with its first-order differential, and one elementary cone computation. No completeness or global causal condition is used; the stated choice premises are inherited from the local causal suppliers, and the argument is equally valid for every smooth Lorentzian manifold of dimension at least two.

- **Use.** Clause (a) is the input that makes the chronological volume function strictly monotone in [[thm-gr-volume-time-function]], and clause (c) is used in [[thm-gr-cauchy-surface-implies-globally-hyperbolic]] to convert the closure of the causal relation into a chronological relation between two points of a Cauchy set.

- **Finite propagation.** The perturbation is chosen separately at each
  vertex of a fixed finite normal-region subdivision. Openness of chronology
  permits each local perturbation after that vertex has been reached; no
  cover contained in $I^+(p)$ and no uniform increment along the arc is assumed.
