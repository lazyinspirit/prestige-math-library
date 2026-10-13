---
id: lem-gr-causal-curve-conventions
kind: lemma
title: "Equivalence of the absolutely-continuous and continuous causal conventions, and one-sided inextendible extensions"
status: draft
origin: session
domain: mathematics
dependency_level: 19
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-parallel-transport-and-geodesic-speed, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-causal-curve-calculus, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, lem-gr-convex-normal-causality, lem-gr-dominating-cone-bounds, def-gr-normal-neighborhoods-and-position-vectors, lem-gr-joint-exponential-diffeomorphism, lem-gr-maximal-geodesics-and-extension, thm-gr-local-geodesics-and-exponential-map, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-gr-observer-and-rest-space, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-interval, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-convex-normal-causality: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: continuous causal curves and Theorem 2.12 with Remark 2.14 (printed pp. 32-33), Definition 2.16 (printed p. 33) and Lemma 2.17 (printed pp. 33-34)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): causal curves, their local Lipschitz property and the causal relation, section 6.2"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]], [[def-gr-metric-selected-connection]]).
Call a map $x:I\to M$ a **geodesically connectible continuous causal curve**
when it is continuous ([[def-continuity-real]]) and for every strictly convex
normal ball $C$ as produced by [[thm-gr-convex-normal-neighborhoods]]
([[def-gr-normal-neighborhoods-and-position-vectors]] clause (b)) and all
$t_1<t_2$ in $I$ with $x([t_1,t_2])\subseteq C$, the endpoints $x(t_1)$ and
$x(t_2)$ are joined by a future causal geodesic whose image is contained in
$C$. Write $\le$ for the causal relation of
[[def-gr-causal-curves-and-reachability]] (defined by locally absolutely
continuous future causal curves) and put
$$n:=\frac{N}{\sqrt{-g(N,N)}},\qquad h:=g+2\,n^\flat\otimes n^\flat .$$

**(a) Absolutely continuous implies connectible.** Every future causal curve
$\gamma:I\to M$ in the sense of [[def-gr-causal-curves-and-reachability]] is a
geodesically connectible continuous causal curve.

**(b) Connectible curves give causal relations.** Let $x:I\to M$ be a
geodesically connectible continuous causal curve and let $t_1<t_2$ in $I$.
If $x|_{[t_1,t_2]}$ is nonconstant, then for every open neighborhood $W$ of
$x([t_1,t_2])$ there is a piecewise smooth future causal curve
$\eta:[t_1,t_2]\to W$ with $\eta(t_1)=x(t_1)$ and $\eta(t_2)=x(t_2)$; in
particular $x(t_1)\le x(t_2)$. If the restriction is constant, its endpoints
coincide and reflexivity gives $x(t_1)\le x(t_2)$ without asserting a curve
in the nonconstant future causal class.

**(c) Equality of relations.** For $p,q\in M$ the following are equivalent:
$p\le q$; $p=q$ or there is a geodesically connectible continuous causal
curve with endpoints $p,q$.

**(d) One-sided extension.** Let $\gamma:[0,\infty)\to M$ be a
future-inextendible future causal curve in the sense of
[[def-gr-causal-curves-and-reachability]] clause (d). Then there is an
inextendible future causal curve $\gamma^*:I^*\to M$ with
$[0,\infty)\subseteq I^*\subseteq\mathbb R$ and $\gamma^*|_{[0,\infty)}=\gamma$;
that is, $\gamma$ is contained in a curve that is both future- and
past-inextendible. The dual statement holds for past-inextendible curves.

No choice principle is used. The extension in (d) is not asserted to be
unique.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and the objects of the four clauses.

[L1] Strictly convex normal balls exist around every point; in such a ball $C$ with base $p$ the future causal reachability is the exponential cone: $J^+_C(p)=\exp_p(\mathcal C^+)$ and $I^+_C(p)=\exp_p(\mathcal T^+)$, where $\mathcal C^+$ is the set of future causal or zero vectors in the open star-shaped inverse domain $W_p=\{u\in\mathcal E_p:\exp_p(tu)\in C\ \forall t\in[0,1]\}$; the radial geodesic of $v\in\mathcal C^+$ stays in $C$ ([[thm-gr-convex-normal-neighborhoods]] clauses (a) and (b), [[thm-gr-normal-neighborhood-causal-cone]] clauses (a) and (b), [[def-gr-normal-neighborhoods-and-position-vectors]] clause (b)).

[L2] Every future causal curve with image in a strictly convex normal ball $C$ starting at $p\in C$ has its endpoint in $J^+_C(p)$ ([[thm-gr-normal-neighborhood-causal-cone]] clause (a)).

[L3] Finite concatenation of locally absolutely continuous causal curves needs no choice: split the finitely many test intervals at each junction, use the AC modulus on each of the finitely many pieces with error tolerance $\varepsilon/k$, and take the minimum of these finitely many moduli. The triangle inequality bounds the concatenated coordinate increments by the sum of the piecewise errors. Velocities agree with the original velocities off the finitely many junctions, so nonzero future causal velocity holds almost everywhere. Smooth geodesic pieces are locally AC directly by their bounded coordinate derivatives on compact pieces ([[def-gr-causal-curves-and-reachability]]).

[L6] The smooth observer normalization $n=N/\sqrt{-g(N,N)}$ supplies a specified future unit timelike vector $n_q$ at each given point $q$. The geodesic with this initial velocity has a unique open maximal parameter domain containing $0$, is smooth, and remains future timelike because parallel transport preserves its causal character and direction ([[def-gr-observer-and-rest-space]], [[thm-gr-local-geodesics-and-exponential-map]] clause (a), [[lem-gr-parallel-transport-and-geodesic-speed]] clause 3).

[L7] Every maximal geodesic with nonzero initial velocity has no point limit at either end of its open maximal parameter interval, whether the end is finite or infinite ([[lem-gr-maximal-geodesics-and-extension]] clause (b)). This is the exact no-limit statement; compact closure of an image alone does not imply geodesic extendibility.

## Proof
**Proof technique:** direct.

1.1 (Clause (b).) Let $x|_{[t_1,t_2]}$ be nonconstant and let $W$ be an open neighborhood of its compact image. Include a parameter $t_*$ with $x(t_*)$ different from $x(t_1)$ in a finite partition. Cover the image by finitely many strictly convex normal balls $C_1,\dots,C_m\subseteq W$ and refine the partition to a Lebesgue-number subdivision so each subarc is contained in one ball. Each successive pair of endpoint values is joined there by its unique causal geodesic. If a pair coincides, that geodesic is constant and is omitted; the chosen parameter $t_*$ ensures at least one nonconstant segment remains. Reparametrize the remaining segments affinely, in their original order, onto consecutive subintervals of positive length partitioning $[t_1,t_2]$. Their concatenation is piecewise smooth with nonzero future causal velocity away from finitely many joints, so it is a future causal curve by [L3]. It lies in $W$ and has the required endpoints, proving (b). [L1, L3, given, construct]

1.2 (Clause (a).) Let $\gamma:I\to M$ be a future causal curve and let $C$ be a strictly convex normal ball with $\gamma([t_1,t_2])\subseteq C$; put $p:=\gamma(t_1)$. The restricted curve $s\mapsto\gamma(t_1+s)$, $s\in[0,t_2-t_1]$, is a future causal curve with image in $C$ starting at $p$, so by [L2] its endpoint $\gamma(t_2)$ lies in $J^+_C(p)$; by [L1] there is $v\in\mathcal C^+\subseteq W_p$ with $\exp_p(v)=\gamma(t_2)$, and the radial geodesic $s\mapsto\exp_p(sv)$, $s\in[0,1]$, is a future causal geodesic whose image is contained in $C$ because $W_p$ is star-shaped and $\exp_p(W_p)=C$. This proves (a). [L1, L2, given]

1.3 (One past maximal geodesic.) Let $\gamma:[0,\infty)\to M$ be the given future-inextendible curve, and put $q=\gamma(0)$. The normalized time-orientation field specifies the nonzero future timelike vector $n_q$, so no choice of a family of vectors is involved. Let $\rho:J\to M$ be the unique maximal geodesic with $\rho(0)=q$ and $\rho'(0)=n_q$. Write $\alpha=\inf J\in[-\infty,0)$ and put $I^*:=(\alpha,\infty)$. Define $\gamma^*(t)=\rho(t)$ for $\alpha<t\le0$ and $\gamma^*(t)=\gamma(t)$ for $t\ge0$. The pieces agree at $0$. [given, L6, construct]

2.1 (Clause (c).) If $p\le q$ then either $p=q$ or there is a locally absolutely continuous future causal curve from $p$ to $q$, which is geodesically connectible by step 1.2; conversely, if a geodesically connectible continuous causal curve joins $p\ne q$, apply step 1.1 with $W=M$ to obtain a future causal locally absolutely continuous curve from $p$ to $q$, so $p\le q$ by [[def-gr-causal-curves-and-reachability]] clause (c). This proves (c). [step 1.1, step 1.2, given]

2.2 (Causal gluing and both ends.) Every compact subinterval of $I^*$ meets at most these two pieces. The geodesic piece is smooth and future timelike by [L6], and the other piece is the given future causal curve, so [L3] proves the glued map is locally AC with nonzero future causal velocity almost everywhere. By [L7], $\rho(t)$ has no point limit as $t\to\alpha^+$, including $\alpha=-\infty$; hence the identical past tail of $\gamma^*$ is past-inextendible in the exact no-limit convention. Its future tail is $\gamma$, so it is future-inextendible by hypothesis. Thus $\gamma^*$ is inextendible, $[0,\infty)\subseteq I^*$, and the original parametrization is unchanged on that half-line. Reversing time gives the dual claim. This proves (d). [step 1.3, L3, L6, L7, given]

3.1 (Conclusion.) Clauses (a), (b), (c) and (d) are proved in steps 1.2, 1.1, 2.1 and 2.2, respectively. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **What the conventions have in common.** Clause (b) shows that the causal relation defined in [[def-gr-causal-curves-and-reachability]] is unchanged if one uses the classical "locally connected by future causal geodesics" convention; clause (a) shows that every curve of the library convention fits that convention. This is the content of Minguzzi's Theorem 2.12 and Remark 2.14, proved here from the local cone theorem.

- **Not every connectible curve is locally absolutely continuous.** A continuous causal curve can be so singularly reparametrized that it has zero derivative almost everywhere, so clauses (b) and (c) replace it by a piecewise geodesic curve with the same endpoints; the parametrization itself is not a library curve. Clause (d) preserves the given half-line parametrization exactly and adds one maximal geodesic past tail.

- **Scope.** The lemma is a local-to-global convention statement inside the smooth Lorentzian model; it uses no completeness and no global causal condition.
