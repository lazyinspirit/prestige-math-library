---
id: thm-gr-volume-time-function
kind: theorem
title: "The Geroch volume function: a continuous strictly increasing time function whose levels are Cauchy sets"
status: published
origin: session
domain: mathematics
dependency_level: 24
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-finite-smooth-volume-density, lem-gr-chronological-volume-continuity, lem-gr-globally-hyperbolic-causal-structure, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-observer-and-rest-space, thm-gr-local-geodesics-and-exponential-map, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-push-up-rule, lem-gr-causal-curve-calculus, lem-gr-causal-curve-conventions, lem-gr-strong-causality-compact-length-bound, thm-gr-auxiliary-complete-riemannian-metric, def-riemannian-distance-on-a-connected-manifold, thm-riemannian-distance-is-a-metric, thm-continuity-from-above-for-measures, def-natural-logarithm, thm-natural-logarithm-laws, cor-intermediate-value-theorem-topological, def-countable-choice, def-dependent-choice, def-continuity-real, def-interval]
dependency_roles:
  lem-gr-finite-smooth-volume-density: mathematical-premise
  lem-gr-chronological-volume-continuity: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
  thm-continuity-from-above-for-measures: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  cor-intermediate-value-theorem-topological: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Theorem 2.11.1 with the volume-function proof (Lemma 2.11.2 on continuity, Lemma 2.11.3 on the limits along causal curves, and the passage to the ratio tau = V-/V+), printed pp. 57-60"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "R. Geroch, Domain of dependence, Journal of Mathematical Physics 11 (1970) 437-449: the volume function and its use in constructing time functions on globally hyperbolic space-times; E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019) 3, Theorem 4.119 printed pp. 146-147"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]) for the curve calculus and auxiliary-length suppliers. Let $(M,g,N)$ be a globally hyperbolic
time-oriented smooth Lorentzian four-manifold
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)) and let
$\mu$ be the volume measure of [[lem-gr-finite-smooth-volume-density]] with
$\mu(M)=1$, $\mu(O)>0$ for every nonempty open $O$ and $\mu(E)=0$ for every
chart-Lebesgue-null Borel set. Let $L:=\ln$ denote the natural logarithm
([[def-natural-logarithm]]) and define the **volume time function**
$$t:M\longrightarrow\mathbb R,\qquad t(p):=L\bigl(\mu(I^-(p))\bigr)-L\bigl(\mu(I^+(p))\bigr) =\ln\frac{\mu(I^-(p))}{\mu(I^+(p))}.$$
Then:

**(a)** $t$ is well defined and continuous on $M$;

**(b)** $t$ is strictly increasing along causal relations: if $p\le q$
with $p\ne q$, then $t(p)<t(q)$; in particular $t$ is a time function in
the sense of [[def-gr-causal-conditions-and-global-hyperbolicity]] clause
(d);

**(c)** for every inextendible future-directed causal curve
$\gamma:I\to M$ one has
$$\lim_{s\to\sup I}t(\gamma(s))=+\infty,\qquad \lim_{s\to\inf I}t(\gamma(s))=-\infty;$$

**(d)** every level set $t^{-1}(c)$, $c\in\mathbb R$, is a Cauchy set
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c)); in
particular it is acausal, and it is met in exactly one parameter value by
every inextendible causal curve.

No smoothness of $t$ is asserted.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a globally hyperbolic $(M,g,N)$, the volume measure $\mu$, the function $t$, and an inextendible future-directed causal curve $\gamma:I\to M$.

[L1] There is no nonconstant closed future causal curve, and no closed causal curve at all: strong causality fails at a point lying on such a curve, because the curve has a point other than the base point and therefore leaves and re-enters every sufficiently small neighbourhood of the base point ([[def-gr-causal-conditions-and-global-hyperbolicity]] clauses (b) and (c)).

[L2] The volume functions are continuous and strictly monotone in the following form: for $p_k\to p$ one has $\mu(I^\pm(p_k))\to\mu(I^\pm(p))$; the sets $I^\pm(x)$ are open with $0<\mu(I^\pm(x))<1$; for $p\ll q$ one has $\mu(I^-(p))<\mu(I^-(q))$ and $\mu(I^+(p))>\mu(I^+(q))$; if $x\ll p$ then $x\ll q$ for every $q\ge p$ and dually ([[lem-gr-chronological-volume-continuity]] clauses (a)-(d), [[lem-gr-push-up-rule]] clauses (a) and (b)).

[L3] The causal relation $\le$ is closed: $p_k\le q_k$, $p_k\to p$, $q_k\to q$ implies $p\le q$; the sets $J^\pm(x)$ are closed ([[lem-gr-globally-hyperbolic-causal-structure]] clause (a)).

[L4] Through every point $x$ there are past and future timelike geodesic segments: for every sufficiently small $\varepsilon>0$ the points $x^-_\varepsilon:=\exp_x(-\varepsilon N_x)$ and $x^+_\varepsilon:=\exp_x(\varepsilon N_x)$ are defined with $x^-_\varepsilon\ll x\ll x^+_\varepsilon$; a causal curve is not constant on a nondegenerate parameter interval ([[def-gr-observer-and-rest-space]], [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d), [[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[def-gr-causal-curves-and-reachability]] clause (b)).

[L5] In this proof fix $h$ to be the complete conformal metric $h\prime$ of [[thm-gr-auxiliary-complete-riemannian-metric]] clauses (b)-(d), and use that same metric for every length and distance. Strong causality bounds auxiliary lengths: for every compact $K$ there is $L(K)<\infty$ such that every future causal curve with image in $K$ has $h$-length at most $L(K)$; the auxiliary metric $h$ is complete on each connected component and its distance induces the topology ([[lem-gr-strong-causality-compact-length-bound]], [[thm-gr-auxiliary-complete-riemannian-metric]]).

[L6] For a compact subarc, the Riemannian distance between its endpoints is at most its $h$-length, by the absolutely continuous distance-length inequality proved in [[thm-gr-auxiliary-complete-riemannian-metric]] step 1.2 ([[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]]). A Cauchy sequence in a connected component converges under the complete auxiliary metric ([[thm-gr-auxiliary-complete-riemannian-metric]] clause (c)). No arbitrary increasing reparametrization is asserted to preserve absolute continuity.

[L7] Measure continuity from above: for a decreasing sequence of measurable sets $A_n$ with $\mu(A_{n_0})<\infty$ one has $\mu(\bigcap_nA_n)=\inf_n\mu(A_n)$ ([[thm-continuity-from-above-for-measures]]). The logarithm $L=\log$ is continuous, strictly increasing and onto $\mathbb R$, with $L(1)=0$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]); consequently $L(x)\to-\infty$ as $x\to0+$ and $L(x)\to+\infty$ as $x\to+\infty$, because for every real $M$ the level $x_M>0$ with $L(x_M)=M$ exists by surjectivity and strict increase gives $L(x)<M$ for all $0<x<x_M$ and $L(x)>M$ for all $x>x_M$. Intermediate values of a continuous real function on a connected domain are attained ([[cor-intermediate-value-theorem-topological]]).

## Proof

**Proof technique:** direct.

1.1 (Well-definedness.) Let $p\in M$. The set $I^-(p)$ is open and nonempty (it contains the points $x^-_\varepsilon\ll p$ of [L4]), so $0<\mu(I^-(p))$ by positivity of the measure [L2]; and $\mu(I^-(p))<1$: the point $x^+_\varepsilon\gg p$ of [L4] does not lie in $J^-(p)$, because $x^+_\varepsilon\le p$ together with $p\ll x^+_\varepsilon$ would produce a nonconstant closed causal curve through $p$, contradicting [L1]; since $J^-(p)$ is closed by [L3] and $x^+_\varepsilon\notin J^-(p)$, a whole neighbourhood of $x^+_\varepsilon$ is disjoint from $I^-(p)$, so $\mu(I^-(p))\le1-\mu(\text{that neighbourhood})<1$. The same holds for $I^+(p)$. Hence $0<\mu(I^\pm(p))<1$ and $t(p)$ is a well-defined real number. [L1, L2, L3, L4]

1.2 (Future decay of the future volumes.) Let $\gamma:I\to M$ be future-inextendible and fix $s_0\in I$. The family $\{I^+(\gamma(s))\}_{s\ge s_0}$ is decreasing, and each term has measure at most one. Suppose $\inf_{s\ge s_0}\mu(I^+(\gamma(s)))\ge\varepsilon>0$ for some $\varepsilon$. Choose an increasing cofinal sequence $s_j$ in the future parameter tail (a real interval admits one). The decreasing sequence $I^+(\gamma(s_j))$ has intersection $A:=\bigcap_{s\ge s_0}I^+(\gamma(s))$ by cofinality and nesting. Measure continuity from above [L7] gives $\mu(A)\ge\varepsilon$, so $A\ne\emptyset$; choose $z\in A$, so that $\gamma(s)\ll z$ for all $s\ge s_0$. Then $\gamma([s_0,\sup I))\subseteq J^+(\gamma(s_0))\cap J^-(z)$, a compact causal diamond, so by [L5] the $h$-length of every subcurve of $\gamma$ is at most $L(K)<\infty$ with $K:=J^+(\gamma(s_0))\cap J^-(z)$. Put $F(s)=\ell_h(\gamma|_{[s_0,s]})$ and $L_\infty=\sup_{s\ge s_0}F(s)\le L(K)$. Integral additivity gives $\ell_h(\gamma|_{[s,t]})=F(t)-F(s)\le L_\infty-F(s)$ for $s<t$, which tends to zero as $s\to\sup I$. Hence [L6] makes the image points along an increasing cofinal parameter sequence Cauchy; they converge to $z_0$ by completeness. The same distance bound and cofinality show that the entire tail $\gamma(s)$ tends to $z_0$, contradicting future-inextendibility. No change of parametrization is needed. Therefore $\mu(I^+(\gamma(s)))\to0$ as $s\to\sup I$. [L5, L6, L7, given]

2.1 (Continuity.) If $p_k\to p$ then $\mu(I^\pm(p_k))\to\mu(I^\pm(p))$ by [L2], and the logarithm is continuous on $(0,\infty)$ by [L7]; the difference of two continuous functions is continuous, so $t$ is continuous. This proves (a). [step 1.1, L2, L7]

2.2 (Strict monotonicity.) Let $p\le q$ with $p\ne q$ and choose a future causal curve $\gamma:[0,1]\to M$ with $\gamma(0)=p$, $\gamma(1)=q$. Fix $s_0\in(0,1)$ and put $x:=\gamma(s_0)$; then $p\le x\le q$, and $p\ne x$, $x\ne q$ because equality would give a nonconstant closed causal subcurve, contrary to [L1]. We show $\mu(I^-(q))>\mu(I^-(p))$ and $\mu(I^+(p))>\mu(I^+(q))$. For the first: $I^-(p)\subseteq I^-(q)$, since $y\ll p\le q$ gives $y\ll q$ by [L2]. If $I^-(q)$ were contained in $J^-(p)$, then for every point $x^-_\varepsilon\ll x$ of [L4] we would have $x^-_\varepsilon\ll x\le q$, hence $x^-_\varepsilon\ll q$ and therefore $x^-_\varepsilon\in I^-(q)\subseteq J^-(p)$, that is, $x^-_\varepsilon\le p$; letting $\varepsilon\downarrow0$ and using closedness of $\le$ [L3] gives $x\le p$, which with $p\le x$ yields a nonconstant closed causal curve through $x$ (nonconstant because $p\ne x$), contradicting [L1]. Hence $I^-(q)\setminus J^-(p)$ is nonempty; it is open (as the intersection of the open $I^-(q)$ with the complement of the closed $J^-(p)$) and is contained in $I^-(q)\setminus I^-(p)$, so it has positive $\mu$-measure, and additivity gives $\mu(I^-(q))\ge\mu(I^-(p))+\mu(I^-(q)\setminus J^-(p))>\mu(I^-(p))$. For the second: $I^+(q)\subseteq I^+(p)$ by the dual push-up, and if $I^+(p)\subseteq J^+(q)$ then every $x^+_\varepsilon\gg x$ satisfies $x^+_\varepsilon\gg x\ge p$, hence $x^+_\varepsilon\gg p$ and $x^+_\varepsilon\in I^+(p)\subseteq J^+(q)$, that is $x^+_\varepsilon\ge q$; closedness of $\le$ gives $x\ge q$, which with $x\le q$ is again a closed causal curve, contradicting [L1]. So $I^+(p)\setminus J^+(q)$ is a nonempty open subset of $I^+(p)\setminus I^+(q)$ and $\mu(I^+(p))>\mu(I^+(q))$. Since $L$ is strictly increasing, $t(p)=L(\mu(I^-(p)))-L(\mu(I^+(p)))<L(\mu(I^-(q)))-L(\mu(I^+(q)))=t(q)$. This proves (b). [step 1.1, L1, L2, L3, L4, L7]

2.3 (Future growth of the past volumes and the limit at the future end.) With $\gamma$, $s_0$ as in step 1.2: for $s\ge s_0$ one has $I^-(\gamma(s_0))\subseteq I^-(\gamma(s))$ because $y\ll\gamma(s_0)\le\gamma(s)$ gives $y\ll\gamma(s)$ by [L2], hence $\mu(I^-(\gamma(s)))\ge c:=\mu(I^-(\gamma(s_0)))>0$ by monotonicity and step 1.1. Combining with step 1.2, $$t(\gamma(s))=L\bigl(\mu(I^-(\gamma(s)))\bigr)-L\bigl(\mu(I^+(\gamma(s)))\bigr)\ge L(c)-L\bigl(\mu(I^+(\gamma(s)))\bigr).$$ Since $\mu(I^+(\gamma(s)))\to0+$ and the logarithm tends to $-\infty$ at $0+$ [L7], the second term satisfies $-L(\mu(I^+(\gamma(s))))\to+\infty$, while $L(\mu(I^-(\gamma(s))))\ge L(c)$ remains bounded below; hence $t(\gamma(s))\to+\infty$ as $s\to\sup I$. [step 1.1, step 1.2, L2, L7, given]

3.1 (The limit at the past end.) Apply steps 1.2 and 2.3 in the time-reversed orientation: the time reverse of $\gamma$ is future-inextendible, its future volumes are the $I^-$-volumes of $\gamma$, and its past volumes the $I^+$-volumes; hence $\mu(I^-(\gamma(s)))\to0$ as $s\to\inf I$ and, with $\mu(I^+(\gamma(s)))\ge\mu(I^+(\gamma(s_1)))>0$ for $s\le s_1$, one gets $t(\gamma(s))\to-\infty$ as $s\to\inf I$. This proves (c) for future-directed curves; a past-directed inextendible causal curve becomes future-directed after reversing its parameter, and the limits are interchanged accordingly. [step 1.2, step 2.3, given]

4.1 (Level sets are Cauchy.) Let $c\in\mathbb R$ and let $\gamma:I\to M$ be inextendible and causal; reversing the parameter if necessary, assume it is future-directed. By step 2.3 and step 3.1 the continuous function $s\mapsto t(\gamma(s))$ on the interval $I$ tends to $+\infty$ at $\sup I$ and to $-\infty$ at $\inf I$; since the intermediate value theorem [L7] applies to continuous real functions on connected domains, for every $c$ between the two limits there is $s\in I$ with $t(\gamma(s))=c$. Hence every level set is met at least once. It is met at most once: if $s_1<s_2$ with $t(\gamma(s_1))=t(\gamma(s_2))=c$, then $\gamma(s_1)\le\gamma(s_2)$ with $\gamma(s_1)\ne\gamma(s_2)$ (equality would be a nonconstant closed causal curve on $[s_1,s_2]$, contradicting [L1]), so strict monotonicity, step 2.2, gives $t(\gamma(s_1))<t(\gamma(s_2))$, a contradiction. Therefore every inextendible causal curve meets $t^{-1}(c)$ in exactly one parameter value, so $t^{-1}(c)$ is a Cauchy set; acausality is the special case of two points $y\le y'$ of the level set with $y\ne y'$, which strict monotonicity forbids. This proves (d). [step 2.2, step 2.3, step 3.1, L1, L7] ∎

## Remarks

- **Why the proof avoids analysing the union of the pasts.** Divergence of $t$ is obtained from the decay of the *future* volumes alone, together with the monotone lower bound provided by one initial past volume; no claim that $\bigcup_{s}I^-(\gamma(s))=M$ is needed. This is the only place where completeness of the auxiliary metric is used, and it is used to rule out total imprisonment without a separate compactness argument.

- **Regularity.** The function $t$ is continuous but not asserted smooth; producing a smooth (temporal) function from $t$ is the content of [[thm-gr-smooth-cauchy-temporal-splitting]], and the continuous $t$ is only used to identify the Cauchy levels on which the smooth construction is based.

- **Use.** The level sets supplied here are the Cauchy sets $S_b$ used throughout H3: the compact cone intersections of [[lem-gr-compact-future-cone-intersections]], the base and bound levels of the bump construction [[lem-gr-cone-bump-functions]], and the flow levels of [[thm-gr-smooth-cauchy-temporal-splitting]]. Clause (b) is the time-function property invoked by the local Cauchy-neighbourhood lemma [[lem-gr-local-cauchy-neighborhood]].
