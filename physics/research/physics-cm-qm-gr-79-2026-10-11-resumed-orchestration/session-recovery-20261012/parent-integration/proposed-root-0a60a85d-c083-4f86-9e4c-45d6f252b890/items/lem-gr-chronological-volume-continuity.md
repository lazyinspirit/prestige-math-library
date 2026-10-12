---
id: lem-gr-chronological-volume-continuity
kind: lemma
title: "Continuity and strict monotonicity of the chronological volume functions in a globally hyperbolic manifold"
status: draft
origin: session
domain: mathematics
dependency_level: 23
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-finite-smooth-volume-density, lem-gr-globally-hyperbolic-causal-structure, lem-gr-achronal-boundaries-lipschitz-graphs, lem-gr-chronology-openness, def-gr-future-and-past-sets, lem-gr-push-up-rule, lem-gr-causal-curve-calculus, thm-dominated-convergence, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-observer-and-rest-space, thm-gr-local-geodesics-and-exponential-map, lem-gr-parallel-transport-and-geodesic-speed, def-countable-choice]
dependency_roles:
  lem-gr-finite-smooth-volume-density: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  lem-gr-achronal-boundaries-lipschitz-graphs: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  def-gr-future-and-past-sets: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Lemma 2.11.2 (continuity of the volume functions V+-) with full proof, printed pp. 57-59"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the volume/time-function argument of Theorem 4.119 printed pp. 146-147, and Proposition 4.118 (global hyperbolicity implies causal simplicity) printed p. 147"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $(M,g,N)$ be a globally hyperbolic
time-oriented smooth Lorentzian four-manifold
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)) and let
$\mu$ be the finite volume measure of [[lem-gr-finite-smooth-volume-density]],
with $\mu(M)=1$, $\mu(O)>0$ for every nonempty open $O$ and $\mu(E)=0$ for
every chart-Lebesgue-null Borel set $E$. Then:

**(a)** for every sequence $p_k\to p$ in $M$, the indicator functions
$1_{I^-(p_k)}$ converge $\mu$-almost everywhere to $1_{I^-(p)}$, and
$$\mu\bigl(I^-(p_k)\bigr)\longrightarrow\mu\bigl(I^-(p)\bigr),$$
with the same statement for $I^+$;

**(b)** the maps $p\mapsto\mu(I^-(p))$ and $p\mapsto\mu(I^+(p))$ are
continuous on $M$;

**(c)** $J^-(p)=\overline{I^-(p)}$ and $\mu(J^-(p))=\mu(I^-(p))$ for every
$p$, and dually $J^+(p)=\overline{I^+(p)}$ and
$\mu(J^+(p))=\mu(I^+(p))$;

**(d)** if $p\ll q$ then
$$\mu\bigl(I^-(p)\bigr)<\mu\bigl(I^-(q)\bigr),\qquad \mu\bigl(I^+(p)\bigr)>\mu\bigl(I^+(q)\bigr).$$

## Facts & Assumptions

**Given:** A globally hyperbolic $(M,g,N)$, the volume measure $\mu$, a point $p\in M$ and a sequence $p_k\to p$.

[L1] $(M,g,N)$ is strongly causal; hence no nonconstant future causal curve has equal endpoints: a closed causal curve through $x$ would fail strong causality at $x$ with the neighbourhood $U=M$, since every sufficiently small neighbourhood $V\ni x$ is left and re-entered by the curve ([[def-gr-causal-conditions-and-global-hyperbolicity]] clauses (b) and (c)).

[L2] The causal relation is closed and $J^\pm(K)$ is closed for every compact $K$ ([[lem-gr-globally-hyperbolic-causal-structure]] clauses (a) and (b)).

[L3] Openness of chronology: $I^\pm(x)$ is open and the set $\{(y,z):y\ll z\}$ is open ([[lem-gr-chronology-openness]] clauses (a) and (b)). Transitivity of $\le$ and $\ll$ ([[lem-gr-causal-curve-calculus]] clauses (d) and (f)). Push-up: $a\ll b$, $b\le c$ implies $a\ll c$, and dually ([[lem-gr-push-up-rule]] clauses (a) and (b)).

[L4] $I^-(p)$ is a past set: if $x\ll y\in I^-(p)$ then $x\ll p$ by transitivity, so $I^-(I^-(p))\subseteq I^-(p)$; it is open by [L3]. The boundary of the open past set $I^-(p)$ is an achronal boundary in the sense of [[def-gr-future-and-past-sets]] clause (b) (apply that definition in the time reverse), hence is $\mu$-null by [[lem-gr-achronal-boundaries-lipschitz-graphs]] clause (d), whose hypotheses and conclusion are invariant under reversing the time orientation; moreover $J^-(p)=\overline{I^-(p)}$, because $J^-(p)$ is closed by [L2], contains $I^-(p)$, and every $x\in J^-(p)$ is a limit of points $x'\in I^-(p)$: choose $x'$ on a past timelike geodesic segment through $x$ ([L5]), so that $x'\ll x\le p$, and apply push-up to get $x'\ll p$.

[L5] Through every point $x$ there are past and future timelike geodesic segments: for every sufficiently small $\varepsilon>0$ the points $\exp_x(-\varepsilon N_x)$ and $\exp_x(\varepsilon N_x)$ are defined and satisfy $\exp_x(-\varepsilon N_x)\ll x\ll\exp_x(\varepsilon N_x)$ ([[def-gr-observer-and-rest-space]], [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d), [[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[def-gr-causal-curves-and-reachability]] clause (b)).

[L6] Dominated convergence: if $|f_k|\le g$ with $\int g<\infty$ and $f_k\to f$ almost everywhere, then $\int f_k\to\int f$; here $\mu(M)=1$ so the constant $1$ is integrable ([[thm-dominated-convergence]], [[lem-gr-finite-smooth-volume-density]] clause (a)).

## Proof

**Proof technique:** direct.

1.1 (Pointwise lower bound.) If $q\in I^-(p)$, that is, $q\ll p$, then by openness of the chronological relation [L3] there is $k_0$ with $q\ll p_k$ for all $k\ge k_0$; hence $1_{I^-(p_k)}(q)=1$ eventually and $\liminf_k1_{I^-(p_k)}(q)\ge1=1_{I^-(p)}(q)$. [L3, given]

1.2 (Pointwise upper bound outside $J^-(p)$.) If $q\notin J^-(p)$, that is, $q\not\le p$, then $q\notin I^-(p_k)$ for all sufficiently large $k$: otherwise $q\ll p_{k_j}$ for infinitely many $j$, so $q\le p_{k_j}$, and closedness of the causal relation [L2] applied to $p_{k_j}\to p$ gives $q\le p$, a contradiction. Hence $\limsup_k1_{I^-(p_k)}(q)\le 1_{J^-(p)}(q)$. [L2, given]

2.1 (Almost-everywhere convergence.) By steps 1.1 and 1.2, for every $q$ the limit of the indicators exists and equals $1_{I^-(p)}(q)$ whenever $q\in I^-(p)$ or $q\notin J^-(p)$; the exceptional set is $J^-(p)\setminus I^-(p)\subseteq\partial I^-(p)$, which is $\mu$-null by [L4]. Hence $1_{I^-(p_k)}\to1_{I^-(p)}$ $\mu$-almost everywhere. Since all indicators are bounded by the $\mu$-integrable constant $1$, dominated convergence [L6] gives $\mu(I^-(p_k))\to\mu(I^-(p))$. The same argument in the time reverse gives the statement for $I^+$. [step 1.1, step 1.2, L4, L6, given]

3.1 (Continuity.) Clause (b) is the sequential characterization of continuity of $p\mapsto\mu(I^\pm(p))$, since the limits are the values at the limit point for every sequence $p_k\to p$; it is clause (a) read as a statement about all sequences. [step 2.1]

3.2 (Closures and measure of the closed cones.) $J^-(p)=\overline{I^-(p)}$ and both have equal $\mu$-measure by [L4], because $J^-(p)=\overline{I^-(p)}=I^-(p)\cup\partial I^-(p)$ with the boundary null; dually for $J^+(p)$. [L4, L5, step 2.1]

4.1 (Strict monotonicity.) Let $p\ll q$ and choose a future timelike curve $\lambda:[0,1]\to M$ with $\lambda(0)=p$, $\lambda(1)=q$; put $r:=\lambda(1/2)$, so that $p\ll r\ll q$ by transitivity [L3]. If $x\ll p$ then $x\ll q$, so $I^-(p)\subseteq I^-(q)$. The point $r$ lies in $I^-(q)$ but not in $J^-(p)$: otherwise $r\le p$ together with $p\ll r$ would give a nonconstant closed future causal curve through $p$ (concatenating a timelike curve from $p$ to $r$ with a causal curve from $r$ to $p$), contradicting [L1]. Since $J^-(p)$ is closed [L2], the open set $I^-(q)\setminus J^-(p)$ containing $r$ has positive $\mu$-measure; by additivity and monotonicity of $\mu$, $$\mu(I^-(q))\ge\mu(I^-(p))+\mu\bigl(I^-(q)\setminus J^-(p)\bigr)>\mu(I^-(p)).$$ Dually, $I^+(q)\subseteq I^+(p)$ and $r\in I^+(p)\setminus J^+(q)$ is an interior point of an open subset of $I^+(p)\setminus I^+(q)$, so $\mu(I^+(q))<\mu(I^+(p))$. [step 3.2, L1, L2, L3, given]

5.1 (Conclusion.) Clauses (a), (b), (c), (d) are steps 2.1, 3.1, 4.1 and 5.1. [step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The role of global hyperbolicity.** Strong causality is used only to exclude closed causal curves (step 4.1) and closedness of the causal relation (steps 1.2 and 5.1) is used to keep the limit-superior set inside $J^-(p)$. Neither the Cauchy property nor compactness of the diamonds is used directly, and both conclusions remain true for causally simple spacetimes; the global-hyperbolic setting is the one supplied by the previous items of this page.

- **Why almost everywhere is enough.** The volume functions are integrals of indicators, so pointwise convergence on a full-measure set suffices; the exceptional set $J^-(p)\setminus I^-(p)$ is exactly the achronal boundary of $I^-(p)$, which is a local Lipschitz graph and hence null for $\mu$.

- **Use.** Clauses (a)-(c) enter the proof that the volume time function is continuous in [[thm-gr-volume-time-function]], and clause (d) supplies its strict monotonicity.
