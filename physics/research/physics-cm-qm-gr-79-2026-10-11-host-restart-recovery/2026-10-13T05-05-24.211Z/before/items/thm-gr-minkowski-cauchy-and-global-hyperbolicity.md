---
id: thm-gr-minkowski-cauchy-and-global-hyperbolicity
kind: theorem
title: "The flat model is globally hyperbolic and its inertial level sets are Cauchy hypersurfaces"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-countable-choice, def-gr-causal-curves-and-reachability, lem-gr-flat-time-monotonicity-and-lipschitz-graphs, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, def-time-orientation-and-future-causal-sets, def-causal-classification-of-lorentz-vectors, def-embedded-submanifold-and-slice-chart, cor-heine-borel-in-the-product-topology, def-compact-space]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-flat-time-monotonicity-and-lipschitz-graphs: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  cor-heine-borel-in-the-product-topology: mathematical-premise
  def-compact-space: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Definition 4.117 and Theorem 4.119 (global hyperbolicity, Cauchy hypersurfaces and the R x S splitting) printed pp. 146-147; Minkowski spacetime as the basic model, section 1.1 printed pp. 3-6"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): globally hyperbolic spacetimes and Cauchy surfaces, section 3.2.1 printed pp. 39-40"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the general absolutely continuous causal-curve
conclusions used here.

Let $(M,\eta,N)$ be the flat model of
[[def-gr-flat-minkowski-model-and-inertial-charts]], with its global inertial
chart $x=(x^0,z)$, its cone sets $C^+,\overline{C^+}$ of clause (f) and its
translation action of clause (d), and with the causal relations of
[[def-gr-causal-curves-and-reachability]]. Then:

**(a)** For every $p\in M$, $J^+(p)=p+\overline{C^+}$ and
$I^+(p)=p+C^+$, where the sum is the translation of clause (d), the cone sets
are those of clause (f), and the displacement is read in the vector space
$M=\mathbb R^4$; in the chart,
$$q\in J^+(p)\Longleftrightarrow x^0(q)-x^0(p)\ge|z(q)-z(p)|_{\mathrm e}.$$

**(b)** For every $c\in\mathbb R$ the level set
$\Sigma_c:=x^{-1}(\{c\}\times\mathbb R^3)$ is a spacelike embedded hypersurface of $M$, and
every inextendible causal curve of $M$ meets $\Sigma_c$ in exactly one
parameter value; equivalently, $\Sigma_c$ is a Cauchy hypersurface in the
sense of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c).

**(c)** For all $p,q\in M$ the causal diamond $J^+(p)\cap J^-(q)$ is
compact.

**(d)** The model is strongly causal in the sense of
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b); hence it is
globally hyperbolic in the sense of clause (c) of that definition.

## Facts & Assumptions

**Given:** The flat model of [[def-gr-flat-minkowski-model-and-inertial-charts]], its global inertial chart $x$, and events $p,q\in M$.

[L1] The flat model of [[def-gr-flat-minkowski-model-and-inertial-charts]]: $M=\mathbb R^4$, the chart $x$ of clause (a) is global and inertial with $\eta=\operatorname{diag}(-1,1,1,1)$ in its coordinates, the cone sets are $C^+=\{v:v^0>|v_s|\}$ and $\overline{C^+}=\{v:v^0\ge|v_s|\}$ by clause (f), and clause (d) supplies the translations, displacements and straight paths; by [[lem-gr-flat-inertial-cone-criterion-and-sums]] clause (a) a nonzero future causal vector has positive time coordinate in every inertial chart.

[L2] The straight path $s\mapsto p+s(q-p)$ of clause (d) has constant tangent $q-p$, whose coordinate path in the chart $x$ is $x(p)+s\,(q-p)$, and its tangent is classified by the cone criterion: it is future causal when $q-p\in\overline{C^+}\setminus\{0\}$ and future timelike when $q-p\in C^+$ ([[def-gr-flat-minkowski-model-and-inertial-charts]] clause (d), [[lem-gr-flat-inertial-cone-criterion-and-sums]] clauses (a) and (b), [[def-causal-classification-of-lorentz-vectors]]).

[L3] Along a future causal curve, inertial time is strictly increasing with the Lipschitz bound of [[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clause (b): $|z(\gamma(b))-z(\gamma(a))|_{\mathrm e}\le x^0(\gamma(b))-x^0(\gamma(a))$ for $a<b$; and the displacement of a future causal curve from $p$ to $q$ lies in $\overline{C^+}$ ([[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clause (b) and its proof, [[def-gr-causal-curves-and-reachability]]).

[L4] The level sets $\{x^0=c\}$ of the global coordinate are embedded submanifolds with slice chart $y=(x^1,x^2,x^3,x^0-c)$, for which $y(\Sigma_c)=\mathbb R^3\times\{0\}$, and the restriction of $\eta$ to the tangent space $\operatorname{span}(\partial_1,\partial_2,\partial_3)$ is positive definite by clause (b) of the definition ([[def-embedded-submanifold-and-slice-chart]], [[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (a) and (b)).

[L5] A subset of $\mathbb R^4$ that is closed and bounded is compact ([[cor-heine-borel-in-the-product-topology]], [[def-compact-space]]).

[L6] Cone closure properties: $C^++\overline{C^+}\subseteq C^+$ and $\overline{C^+}+\overline{C^+}\subseteq\overline{C^+}$ ([[lem-gr-flat-inertial-cone-criterion-and-sums]] clause (c)).


## Proof

**Proof technique:** direct.

1.1 (Reachability is the closed cone.) If $q=p$ then $q-p=0\in\overline{C^+}$ and $q\in J^+(p)$, so both displays of (a) hold. If $q\ne p$ and $q-p\in\overline{C^+}$, then by [L2] the straight path $s\mapsto p+s(q-p)$, $s\in[0,1]$, has the nonzero future causal tangent $q-p$ and is a future causal curve from $p$ to $q$; conversely, if a future causal curve joins $p$ to $q$, then its coordinate displacement $(x^0(q)-x^0(p),z(q)-z(p))$ satisfies the Lipschitz bound of [L3], which is precisely $q-p\in\overline{C^+}$ in the chart. This proves the second display of (a). For the first display: if $q-p\in C^+$, the same straight path has tangent $q-p$ in the open cone, hence is a future timelike curve from $p$ to $q$, so $q\in I^+(p)$; conversely, let $\gamma:[a,b]\to M$ be a future timelike curve from $p$ to $q$ and put $c(t):=x(\gamma(t))=(c^0(t),c_s(t))$. At almost every $t$ one has $c^0{}'(t)>|c_s'(t)|_{\mathrm e}$, and the set of such $t$ has full measure in $[a,b]$; by the fundamental theorem of calculus of [L3], $c^0(b)-c^0(a)=\int_a^bc^0{}'$ and $c_s(b)-c_s(a)=\int_a^bc_s'$, so $c^0(b)-c^0(a)-\bigl|c_s(b)-c_s(a)\bigr|_{\mathrm e}\ge\int_a^b\bigl(c^0{}'-|c_s'|_{\mathrm e}\bigr)>0$, because the integrand is nonnegative almost everywhere by the Lipschitz bound and strictly positive on a set of full measure. Hence $x^0(q)-x^0(p)>|z(q)-z(p)|_{\mathrm e}$, that is $q-p\in C^+$. This proves the first display of (a). [given, L1, L2, L3, algebra]

1.2 (The level sets are Cauchy hypersurfaces.) By [L4] each $\Sigma_c$ is a spacelike embedded hypersurface. Let $\gamma:I\to M$ be an inextendible causal curve; by [[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clause (c), $x^0\circ\gamma$ is a strictly increasing surjection onto $\mathbb R$, so for the value $c$ the parameter set $\{t:x^0(\gamma(t))=c\}$ is a singleton. Thus every inextendible causal curve meets $\Sigma_c$ in exactly one parameter value, and $\Sigma_c$ is a Cauchy hypersurface. This proves (b). [given, L3, L4, algebra]

2.1 (Compactness of the diamonds.) By step 1.1, $J^+(p)\cap J^-(q)=\{r:r-p\in\overline{C^+}\text{ and }q-r\in\overline{C^+}\}$. This set is closed in $\mathbb R^4$: the maps $r\mapsto r-p$ and $r\mapsto q-r$ are continuous and $\overline{C^+}$ is closed, being described by the non-strict inequality $v^0\ge|v_s|$. It is bounded: if $r$ lies in it then $x^0(r)-x^0(p)\ge0$ and $x^0(q)-x^0(r)\ge0$, so $x^0(r)\in[x^0(p),x^0(q)]$, and $|z(r)-z(p)|_{\mathrm e}\le x^0(r)-x^0(p)\le x^0(q)-x^0(p)$; in particular $r$ lies in a closed bounded box. By [L5] the diamond is compact. This proves (c). [step 1.1, L1, L5, algebra]

2.2 (Strong causality.) Let $p\in M$, write $e_0:=(1,0,0,0)\in M$ for the first coordinate vector of the chart $x$, and let $U\ni p$ be open. Choose $\varepsilon>0$ so small that the double cone $V:=I^+(p-\varepsilon e_0)\cap I^-(p+\varepsilon e_0)$ is contained in $U$: in the coordinates of $x$, $V$ is a neighborhood of $p$ contained in the coordinate box of radius $2\varepsilon$ around $p$, and $\varepsilon$ can be taken below half the Euclidean distance from $p$ to the complement of $U$. Then $V$ is open and $p\in V$. To see that $V$ is causally convex for causal curves that meet it twice, let $\gamma:[a,b]\to M$ be a future causal curve with $\gamma(a),\gamma(b)\in V$ and let $a<t<b$. Since $\gamma|_{[a,t]}$ and $\gamma|_{[t,b]}$ are future causal curves, step 1.1 gives $\gamma(t)-\gamma(a)\in\overline{C^+}$ and $\gamma(b)-\gamma(t)\in\overline{C^+}$. Since $\gamma(a)\in V$, step 1.1 gives $\gamma(a)-(p-\varepsilon e_0)\in C^+$; by [L6], $\gamma(t)-(p-\varepsilon e_0)=\bigl(\gamma(a)-(p-\varepsilon e_0)\bigr)+\bigl(\gamma(t)-\gamma(a)\bigr)\in C^+$, that is $p-\varepsilon e_0\ll\gamma(t)$ by step 1.1. Similarly $\gamma(b)\in V$ gives $(p+\varepsilon e_0)-\gamma(b)\in C^+$, and [L6] applied to $\bigl((p+\varepsilon e_0)-\gamma(b)\bigr)+\bigl(\gamma(b)-\gamma(t)\bigr)$ gives $(p+\varepsilon e_0)-\gamma(t)\in C^+$, that is $\gamma(t)\ll p+\varepsilon e_0$. Hence $\gamma(t)\in V$: no causal curve leaves $V$ and later returns to it, and the model is strongly causal. This proves (d). [step 1.1, given, L1, L6, algebra]

3.1 (Conclusion.) By step 1.2 the inertial level sets are Cauchy hypersurfaces and by [[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e) the coordinate $x^0$ is temporal by [[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clause (d); step 2.2 gives strong causality and step 2.1 gives compactness of all causal diamonds, so the model is globally hyperbolic in the sense of clause (c) of that definition. With steps 1.1, 2.1 and 2.2 this proves all the claims. [step 1.1, step 1.2, step 2.1, step 2.2, given] ∎

## Remarks

- **Scope.** The theorem concerns the flat model only. It is a mathematical statement about $\eta$ and the curve class of [[def-gr-causal-curves-and-reachability]]; the reading of the model as the flat classical spacetime and the identification of $x^0$ with $c$ times a clock time belong to the framework postulates.
- **What is proved and what is not.** Global hyperbolicity is proved here directly from the explicit model, not deduced from a general splitting theorem; the converse direction, that every globally hyperbolic model admits a smooth temporal function with Cauchy levels, is a separate theorem and is not used.
