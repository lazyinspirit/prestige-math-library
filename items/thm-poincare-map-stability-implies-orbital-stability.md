---
id: thm-poincare-map-stability-implies-orbital-stability
kind: theorem
title: Hyperbolic return-map stability is orbital stability
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-local-periodic-orbit-poincare-and-floquet-data
  - thm-hyperbolic-local-map-stability
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-continuous-image-of-a-compact-space-is-compact
  - cor-compact-domain-maps-are-uniformly-continuous
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 1 and 3B, printed pp. 15–22 and 91–94, transverse sections and orbital stability
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §§3.4–3.5, printed pp. 86–101, Poincare return multipliers and periodic-orbit stability
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $f$ be a $C^1$ autonomous vector field on an open subset of $\mathbb R^d$. Let $x_*(t)$ be a nonconstant periodic solution of least period $T$, let $\Gamma=\{x_*(t):0\le t<T\}$, and let $\Sigma$ be a local smooth Poincare section through $a=x_*(0)$ transverse to $f(a)$. Assume locally $\Sigma=\{y:\rho(y)=0\}$ for a smooth $\rho$ with $D\rho(a)f(a)\ne0$, and take a relatively compact section patch $W$ with $\overline W\cap\Gamma=\{a\}$. If the derivative of the local return map $P$ at $a$ has no eigenvalue on the unit circle, then $\Gamma$ is orbitally asymptotically stable when all eigenvalues of $DP(a)$ have modulus less than one, and is orbitally unstable when at least one has modulus greater than one.

## Facts & Assumptions

**Given:** The $C^1$ vector field, periodic solution, period, section, and return map in the Statement.

[F1] [[def-local-periodic-orbit-poincare-and-floquet-data]]: the section is codimension one and transverse to the vector field; orbital stability is stability of the orbit as a set plus attraction in distance.

[F2] [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]: a $C^1$ autonomous vector field has a jointly $C^1$ maximal flow on an open time-state domain. Nearby initial states share every sufficiently short compact local time interval; the time derivative is the vector field, and uniqueness gives the flow law and finite composition along compact trajectory segments.

[F3] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: for a $C^1$ equation, a nonzero derivative in a scalar solved variable gives a $C^1$ local implicit function of the remaining variables.

[F4] [[thm-hyperbolic-local-map-stability]]: a $C^1$ fixed point with no unit-circle multiplier is locally asymptotically stable when all multipliers are inside and unstable when one is outside.

[F5] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions obey the chain rule.

[F6] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: in finite-dimensional Euclidean space, closed bounded sets are compact and continuous real-valued functions on nonempty compact sets attain their extrema.

[F7] [[thm-continuous-image-of-a-compact-space-is-compact]]: the image of a compact metric space under a continuous map is compact.

[F8] [[cor-compact-domain-maps-are-uniformly-continuous]]: a continuous map from a compact metric domain to a metric target is uniformly continuous.

## Proof

**Given:** The data and spectral alternatives in the Statement.

1.1 The periodic solution over $[0,2T+1]$ is a compact trajectory segment by [F6]–[F7]. Cover it by finitely many neighborhoods on which the local flow in [F2] exists, subdivide $[0,2T+1]$ into finitely many pieces contained in those flow times, and compose the corresponding local flows. After shrinking the initial-state neighborhood, this gives a jointly $C^1$ map $(t,y)\mapsto\phi_t(y)$ for $0\le t\le2T+1$ and $y$ near $a$. Set $\Psi(t,y)=\rho(\phi_t(y))$. At $(T,a)$, $\Psi(T,a)=0$ and $\partial_t\Psi(T,a)=D\rho(a)f(a)\ne0$. Apply [F3] with $k=1$ to obtain a $C^1$ return time $\tau(y)$ near $T$ and hence a $C^1$ return map $P(y)=\phi_{\tau(y)}(y)$ on a section neighborhood. [F1, F2, F3, F5, F6, F7, given, algebra]

2.1 For each $s\in[0,T]$, put $t_s=2T-s$. Then $\phi_{t_s}(x_*(s))=a$ and $T\le t_s\le2T$. Cover the compact segment from $x_*(s)$ to $a$ by finitely many flow neighborhoods from [F2] and compose them; this defines the flow near $(t_s,x_*(s))$. Apply [F3] to $\Psi(t,x)=\rho(\phi_t(x))$ there; its time derivative is $D\rho(a)f(a)\ne0$. This gives a $C^1$ positive hitting time near each $x_*(s)$, bounded by $2T+1$, whose flow endpoint lies on $\Sigma$ near $a$. Compactness of $\Gamma$ from [F6]–[F7] gives finitely many such neighborhoods and a uniform neighborhood of $\Gamma$ on which this forward-to-section property holds. Continuity of the finitely composed flow on compact time subintervals also makes each initial segment, up to its hitting time, uniformly close to the corresponding segment of $\Gamma$ when the initial point is close to $\Gamma$. [F1, F2, F3, F5, F6, F7, step 1.1, given, algebra]

3.1 Suppose all eigenvalues of $DP(a)$ lie inside the unit circle. By [F4], after shrinking the section neighborhood, every return iterate of a sufficiently close section point stays in that neighborhood and converges to $a$. The return times are continuous and bounded below by $T/2$ after another shrink. The flow is uniformly continuous on the compact time-section product by [F6] and [F8], so the orbit segment from each return point approaches one traversal of $\Gamma$ uniformly as the return point tends to $a$. Since the return points converge to $a$, distance to $\Gamma$ tends to zero along the full forward trajectory. [F1, F2, F4, F6, F7, F8, step 1.1, step 2.1, given]

4.1 For Lyapunov stability, fix $\varepsilon>0$. For a relatively compact section patch $\overline V$, the product $[0,T+1]\times\overline V$ is closed and bounded in Euclidean space and hence compact by [F6]. The flow on this set is continuous by [F2] and the finite-composition construction in step 1.1, so [F8] makes it uniformly continuous. Shrink $V$ so every orbit segment starting in $V$ stays within $\varepsilon$ of $\Gamma$ until its next return. Fixed-point stability in [F4] gives a smaller neighborhood whose return iterates all remain in $V$. Step 2.1 then supplies a neighborhood of $\Gamma$ whose points first reach the section inside that smaller neighborhood while their initial segments stay within $\varepsilon$ of $\Gamma$. Thus all forward trajectories from this neighborhood remain within $\varepsilon$ of $\Gamma$. Together with step 3.1 this proves orbital asymptotic stability. [F1, F2, F4, F6, F8, step 1.1, step 2.1, step 3.1, given]

5.1 Suppose instead that $DP(a)$ has an eigenvalue outside the unit circle. By [F4], there is a fixed section neighborhood $V$ and section points arbitrarily close to $a$ whose return iterates leave $V$. Choose a relatively compact local section patch $W$ with $\overline W\cap\Gamma=\{a\}$ and then choose $V$ with $\overline V\subset W$ and $P(V)\subset W$. The set $K=\overline W\setminus V$ is closed, bounded, and nonempty, hence compact by [F6]; it is disjoint from compact $\Gamma$ by construction. For each $x\in K$, compactness of $\Gamma$ gives a closest point, so $d_\Gamma(x):=\operatorname{dist}(x,\Gamma)>0$. The triangle inequality gives $|d_\Gamma(x)-d_\Gamma(y)|\le\|x-y\|$, so $d_\Gamma$ is continuous; [F6] gives it a positive minimum on $K$. Therefore the first return point outside $V$ lies a fixed positive distance from $\Gamma$. Such initial points can be chosen arbitrarily close to $a\in\Gamma$, so $\Gamma$ is not Lyapunov stable as a set. It is orbitally unstable. [F1, F4, F6, F7, given, contradiction] ∎
