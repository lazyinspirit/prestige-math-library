---
id: lem-gr-fx-trapped-boundary-compactness
kind: lemma
title: "Compactness of the future horismos under null completeness"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: "A conditional Lorentzian-geometric deduction from compact trapping, global hyperbolicity, null Ricci convergence, and future null completeness; it asserts no curvature singularity or event horizon."
deps:
  - def-gr-fx-trapped-surface-and-black-region
  - def-gr-fx-null-screen-geometry
  - def-gr-causal-conditions-and-global-hyperbolicity
  - def-gr-causal-curves-and-reachability
  - lem-gr-chronology-openness
  - def-gr-future-and-past-sets
  - def-gr-smooth-lorentzian-objects
  - def-gr-fx-future-null-geodesic-completeness
  - def-countable-choice
  - def-dependent-choice
  - lem-gr-globally-hyperbolic-causal-structure
  - lem-gr-time-separation-maximizers
  - lem-gr-parallel-transport-and-geodesic-speed
  - lem-gr-achronal-boundaries-lipschitz-graphs
  - lem-gr-fx-null-normal-plane-and-screen
  - lem-gr-push-up-rule
  - prop-gr-fx-null-raychaudhuri
  - lem-gr-fx-null-focal-boundary-exclusion
  - thm-gr-local-geodesics-and-exponential-map
  - lem-gr-joint-exponential-diffeomorphism
  - thm-gr-convex-normal-neighborhoods
  - thm-gr-normal-neighborhood-causal-cone
  - lem-gr-position-vector-differential
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-compactness-under-continuous-maps
  - thm-finite-products-of-compact-spaces
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-heine-borel-rn
  - thm-compactness-agrees-with-metric-compactness
dependency_roles:
  def-gr-fx-trapped-surface-and-black-region: mathematical-premise
  def-gr-fx-null-screen-geometry: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  def-gr-future-and-past-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-fx-future-null-geodesic-completeness: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  lem-gr-time-separation-maximizers: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-achronal-boundaries-lipschitz-graphs: mathematical-premise
  lem-gr-fx-null-normal-plane-and-screen: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  prop-gr-fx-null-raychaudhuri: mathematical-premise
  lem-gr-fx-null-focal-boundary-exclusion: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-finite-products-of-compact-spaces: mathematical-premise
  thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-compactness-agrees-with-metric-compactness: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, arXiv:1901.03928v6 (2023), §§5.2–5.6, latest v6 PDF (107 pages)."
      url: "https://arxiv.org/pdf/1901.03928v6"
    - title: "José M. M. Senovilla and David Garfinkle, The 1965 Penrose singularity theorem, Classical and Quantum Gravity 32 (2015), 124008, arXiv:1410.5226v2, §4.1, §4.2 and Theorem 2."
      url: "https://arxiv.org/pdf/1410.5226"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Éric Gourgoulhon, From Geometry to Numerics: Interdisciplinary Aspects in Mathematical and Numerical Relativity, arXiv:0712.2332v2 (2008), §§2.1–2.2 and 6.2.2, full 72-page PDF."
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold that is globally hyperbolic, meaning strongly causal with compact causal diamonds. Let $S\subset M$ be a nonempty compact smooth embedded spacelike two-surface whose two future null expansions are negative everywhere. Assume the direct null Ricci condition $\operatorname{Ric}(\ell,\ell)\ge0$ for every null vector $\ell$ and assume every future-directed affinely parametrized null geodesic in $M$ is future complete. Define
$$I^+(S)=\bigcup_{s\in S}I^+(s),\qquad J^+(S)=\bigcup_{s\in S}J^+(s),\qquad E^+(S)=J^+(S)\setminus I^+(S).$$
Then $E^+(S)=\partial I^+(S)$ is a closed topological three-manifold without boundary and is compact in the subspace topology of $M$.

## Statement references

[[def-gr-fx-trapped-surface-and-black-region]]

[[def-gr-causal-conditions-and-global-hyperbolicity]]

[[def-gr-causal-curves-and-reachability]]

[[def-gr-fx-future-null-geodesic-completeness]]

[[prop-gr-fx-null-raychaudhuri]]

[[lem-gr-fx-null-focal-boundary-exclusion]]

## Facts & Assumptions

**Given:** A time-oriented globally hyperbolic smooth Lorentzian four-manifold, a nonempty compact future trapped surface $S$, null Ricci nonnegativity, Countable Choice, Dependent Choice, and future null geodesic completeness.

[F1] [[def-gr-causal-conditions-and-global-hyperbolicity]]: global hyperbolicity is strong causality together with compactness of each causal diamond $J^+(p)\cap J^-(q)$.

[F2] [[def-gr-causal-curves-and-reachability]]: $p\ll q$ means a future timelike curve joins $p$ to $q$; $p\le q$ means $p=q$ or a future causal curve joins them; $I^+(S)$ and $J^+(S)$ are the corresponding unions over $s\in S$.

[F3] [[lem-gr-globally-hyperbolic-causal-structure]]: in a globally hyperbolic spacetime, $J^+(K)$ is closed for every compact $K\subseteq M$.

[F4] [[lem-gr-time-separation-maximizers]]: if $s\le p$ and $s\ne p$, a maximizing causal curve from $s$ to $p$ exists and is a causal geodesic up to increasing reparametrization; its Lorentzian length is zero exactly when $s\not\ll p$.

[F5] [[lem-gr-parallel-transport-and-geodesic-speed]]: along an affinely parametrized geodesic, $g(\dot\gamma,\dot\gamma)$ is constant.

[F6] [[def-gr-future-and-past-sets]] and [[lem-gr-chronology-openness]]: $I^+(S)$ is an open future set, so its boundary is an achronal boundary.

[F7] [[lem-gr-achronal-boundaries-lipschitz-graphs]]: the boundary of an open future set is closed and is a topological three-manifold without boundary. Its statement assumes Countable Choice and Dependent Choice.

[F8] [[def-gr-fx-null-screen-geometry]]: on a patch with a smooth future null normal $\ell$, $\theta_\ell=\operatorname{tr}_q\chi_\ell$, where $\chi_\ell(X,Y)=g(\nabla_X\ell,Y)$; a positive boost $\ell\mapsto e^f\ell$ sends $\theta_\ell$ to $e^f\theta_\ell$.

[F9] [[lem-gr-fx-null-normal-plane-and-screen]]: near every point of a spacelike two-surface, there are smooth future null normal fields representing the two rays, normalized as a pair by $g(\ell,k)=-2$.

[F10] [[prop-gr-fx-null-raychaudhuri]]: along a smooth null normal congruence with $\operatorname{Ric}(\ell,\ell)\ge0$ and $\theta(0)<0$, a focal instant occurs by affine parameter $2/|\theta(0)|$ if the congruence exists through that parameter.

[F11] [[lem-gr-fx-null-focal-boundary-exclusion]]: a focal instant on a future null geodesic normal to $S$ puts all sufficiently close later points on that generator in $I^+(S)$, provided the geodesic and variation data continue slightly past the focal instant.

[F12] [[thm-gr-local-geodesics-and-exponential-map]]: the maximal geodesic evaluation $(t,p,v)\mapsto\gamma_{p,v}(t)$ is smooth on its open domain $\{(t,p,v):t\in I_{p,v}\}$, where $I_{p,v}$ is the maximal affine interval for initial data $(p,v)$. The exponential map satisfies $\exp_p(tv)=\gamma_{p,v}(t)$ when defined, its differential at zero is the identity, and short geodesics are its radial curves.

[F13] [[lem-gr-joint-exponential-diffeomorphism]]: the joint exponential map is a diffeomorphism near $(s,0)$ with differential $(X,V)\mapsto(X,X+V)$; its inverse therefore has differential $(X,Y)\mapsto(X,Y-X)$ on the diagonal.

[F14] [[thm-gr-convex-normal-neighborhoods]] and [[thm-gr-normal-neighborhood-causal-cone]]: in a sufficiently small strictly convex normal neighborhood, a future timelike position vector gives a future timelike radial geodesic.

[F15] [[lem-gr-push-up-rule]]: if $s\le r$ and $r\ll p$, then $s\ll p$; a future causal curve containing a timelike subcurve has chronologically related endpoints.

[F16] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: for a smooth ODE, near fixed initial data there is a common local compact time interval on which solutions depend smoothly on the initial data and parameters. For the full maximal geodesic domain use [F12].

[F17] [[thm-compactness-under-continuous-maps]], claim 1: for topological spaces $X,Y$ and a continuous map $f:X\to Y$, the image $f[K]$ of every compact subset $K\subseteq X$ is compact in $Y$.

[F18] [[thm-closed-subspace-of-a-compact-space-is-compact]]: a closed subset of a compact topological space is compact, and a finite union of compact subsets of any topological space is compact.

[F19] [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]]: closed bounded Euclidean subsets, including closed balls and $[0,L]$, are compact for their metric topologies; compactness in a metric space agrees with topological compactness for that topology.

[F20] [[def-gr-smooth-lorentzian-objects]]: the time-orientation field $N$ is future timelike, and a future null vector $\ell$ satisfies $g(\ell,N)<0$.

[F21] [[def-gr-fx-future-null-geodesic-completeness]]: future null completeness means every maximal future affine interval of a future null geodesic is unbounded above.

[F22] [[thm-finite-products-of-compact-spaces]]: the product of finitely many compact spaces is compact.

[A1] Countable Choice and Dependent Choice are explicit mathematical assumptions, as defined by [[def-countable-choice]] and [[def-dependent-choice]].

[A2] $S$ is future trapped and compact; the null Ricci inequality holds along every future null normal geodesic; and every such geodesic exists for all future affine parameters. These are hypotheses, not deductions from an Einstein equation or a matter-energy condition.

## Proof

**Given:** [F1]–[F22] and [A1]–[A2].

1.1 Put $F:=I^+(S)$. It is open because it is the union of the open sets $I^+(s)$, $s\in S$. If $x\in F$ and $x\ll y$, then some $s\in S$ satisfies $s\ll x$; transitivity gives $s\ll y$, so $y\in F$. Thus $F$ is an open future set. [F2, F6, given, construct]

1.2 For each point of $S$, choose a neighborhood with the two smooth null normal branches supplied by [F9]. On each branch rescale by a positive smooth factor so that $g(\ell,N)=-1$; this is possible by [F20] and does not change the sign of the expansion by [F8]. Both normalized expansions are continuous and negative at the chosen point by the trapped-surface hypothesis. Shrink the neighborhood so that both are at most $-c_j$ for some $c_j>0$. Compactness of $S$ gives a finite subcover; the minimum of its finitely many positive constants gives $c>0$ such that every normalized future null normal has initial expansion $\theta_0\le -c$. [A2, F8, F9, F20, given, choose]

2.1 By [F1] and [F3], $J^+(S)$ is closed, and $F\subseteq J^+(S)$; hence $\overline F\subseteq J^+(S)$. Therefore $\partial F=\overline F\setminus F\subseteq E^+(S)$. Conversely, take $p\in E^+(S)$ and choose $s\in S$ with $s\le p$. The timelike vector $N_p$ and the local exponential map give future timelike points $p_\epsilon\to p$ by [F12], [F14] and [F20]. If $s=p$ then $s\ll p_\epsilon$; if $s\ne p$ then $s\le p\ll p_\epsilon$ and [F15] gives $s\ll p_\epsilon$. Thus $p_\epsilon\in F$ and, since $p\notin F$, $p\in\partial F$. Hence $E^+(S)=\partial F$. [F1, F2, F3, F12, F14, F15, F20, step 1.1, given]

2.2 Set $L:=2/c$. For each normalized null normal at $s\in S$, future completeness [F21], local smooth dependence [F16], and smooth evaluation on the maximal geodesic domain [F12] give a smooth null normal geodesic congruence near that initial datum through $[0,L]$. Applying [F10] with $\theta_0\le-c$ and the null Ricci hypothesis gives a first focal parameter $\lambda_f\le 2/|\theta_0|\le L$. The extension required in [F11] is supplied by future null completeness, so its local variation data also exist slightly beyond $\lambda_f$. [A2, F10, F11, F12, F16, F21, step 1.2, given]

3.1 Apply [F7] to the open future set $F$. The equality in step 2.1 shows that $E^+(S)$ is closed and is a topological three-manifold without boundary. [A1, F7, step 2.1]

3.2 Let $p\in E^+(S)$ and choose $s\in S$ with $s\le p$. If $s=p$, use the zero-length segment at $s$. If $s\ne p$, [F4] supplies a maximizing causal geodesic $\gamma$ from $s$ to $p$. Since $p\notin I^+(S)$, $s\not\ll p$, so the maximizing length is zero; the nonconstant affine geodesic has constant squared speed by [F5], and therefore its future causal tangent is null. Rescale its affine parameter by a positive constant so that $g(\dot\gamma(0),N_s)=-1$, and translate the parameter so that its initial value is $0$. [F2, F4, F5, F20, step 2.1, given]

4.1 Every point $r$ on this segment satisfies $s\le r\le p$. If $r\in I^+(S)$, some $s'\in S$ satisfies $s'\ll r\le p$; the push-up rule [F15] then gives $s'\ll p$, contradicting $p\notin I^+(S)$. Thus the entire segment lies in $E^+(S)$. [F2, F15, step 2.1, step 3.2]

5.1 The initial null tangent $\ell=\dot\gamma(0)$ is normal to $S$. Suppose otherwise. Then some $X\in T_sS$ has $g(\ell,X)\ne0$; since $S$ is spacelike, $g(X,X)>0$. Choose a smooth curve $\eta(u)\subset S$ with $\eta(0)=s$ and $\eta'(0)=X$. The joint exponential map lemma [F13] gives a smooth two-point inverse near $(s,s)$ whose differential in local tangent-bundle coordinates at the diagonal sends basepoint/endpoint variations $(X,\ell)$ to $\ell-X$. Therefore, after identifying nearby tangent spaces by a smooth local frame, $v(u,\delta):=\exp_{\eta(u)}^{-1}(\gamma(\delta))=\delta\ell-uX+o(|u|+\delta)$. Choose a small nonzero $a$ with $a\,g(\ell,X)>0$ and $g(\ell-aX,\ell-aX)=-2a g(\ell,X)+a^2g(X,X)<0$. With $u=a\delta$, $v(a\delta,\delta)/\delta\to\ell-aX$, so for sufficiently small $\delta>0$ the vector is timelike; its future orientation follows by continuity from the future null vector $\ell$ for small $|a|$. By [F14], $\eta(a\delta)\ll\gamma(\delta)$. The remaining segment $\gamma|_{[\delta,\lambda_p]}$ is causal; [F15] gives $\eta(a\delta)\ll p$, contradicting $p\notin I^+(S)$. Hence $\ell\perp T_sS$. [F13, F14, F15, step 3.2, step 4.1, given, contradiction]

6.1 Return to $p\in E^+(S)$ and its normal generator from steps 3.2, 4.1, and 5.1, with endpoint parameter $\lambda_p$. If a focal instant $\lambda_f$ occurred strictly before $\lambda_p$, [F11] would give a point $r=\gamma(\lambda)$ with $\lambda_f<\lambda<\lambda_p$ and $r\in I^+(S)$. Since $r\le p$, [F15] would imply $p\in I^+(S)$, a contradiction. Hence $\lambda_p\le\lambda_f\le L$; for $p\in S$ the parameter is $0$ and the same bound holds. [F11, F15, step 3.2, step 4.1, step 5.1, step 2.2, given]

7.1 Choose finitely many relatively compact coordinate patches covering $S$, each contained in a patch with the two smooth normalized null normal fields from step 1.2. Their compact closures $K_j$ exist by choosing smaller Euclidean chart balls and applying Heine–Borel [F19] and the continuous-image theorem [F17]. For each $K_j$ and each branch $\ell_{j,\pm}$, the parameter domain $K_j\times[0,L]$ is compact by [F22], and the map $(s,\lambda)\mapsto\exp_s(\lambda\ell_{j,\pm}(s))$ is continuous on it by [F12], [F16] and future completeness. Its image is compact by [F17]. By [F18], the finite union $C$ of these compact images is compact. Step 6.1 shows that every $p\in E^+(S)$ lies in $C$. [F9, F11, F12, F16, F17, F18, F19, F22, step 1.2, step 6.1, given, construct]

8.1 By step 3.1, $E^+(S)$ is closed in $M$. Since step 7.1 places it inside the compact set $C$, it is closed in $C$ and hence compact by [F18]. This proves the claim. [F18, step 3.1, step 7.1] ∎
## Remarks

The proof does not assume that $S$ is globally achronal or that its normal bundle has a global null frame. It uses local normal branches and their positive, observer-normalized rescalings. Null Ricci nonnegativity is a direct geometric hypothesis; no Einstein equation or matter condition is inferred. A focal point is used only to bound the part of the null generator that can remain in $E^+(S)$, not as a curvature singularity.
