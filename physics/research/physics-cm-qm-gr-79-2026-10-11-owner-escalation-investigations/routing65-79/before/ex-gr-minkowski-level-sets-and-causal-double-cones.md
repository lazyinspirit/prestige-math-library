---
id: ex-gr-minkowski-level-sets-and-causal-double-cones
kind: example
title: "Worked Minkowski slice: Cauchy level sets, causal double cones and the compact diamond"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-countable-choice, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, def-time-orientation-and-future-causal-sets, def-gr-causal-curves-and-reachability, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-embedded-submanifold-and-slice-chart, def-causal-classification-of-lorentz-vectors, thm-gr-minkowski-cauchy-and-global-hyperbolicity, lem-gr-flat-time-monotonicity-and-lipschitz-graphs, cor-heine-borel-in-the-product-topology, def-compact-space, thm-euclidean-space-complete]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-gr-minkowski-cauchy-and-global-hyperbolicity: mathematical-premise
  lem-gr-flat-time-monotonicity-and-lipschitz-graphs: mathematical-premise
  cor-heine-borel-in-the-product-topology: mathematical-premise
  def-compact-space: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Minkowski spacetime as the basic model (section 1.1 printed pp. 3-6) and global hyperbolicity (Definition 4.117 and Theorem 4.119 printed pp. 146-147)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): spacelike hypersurfaces and the orthogonal projector, section 2.4 printed pp. 28-34; foliations by spacelike slices, section 3.2.2 printed pp. 40-41"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Example

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the general absolutely continuous causal-curve
conclusions used here.

Let $(A,\eta,N)$ be the flat model of
[[def-gr-flat-minkowski-model-and-inertial-charts]], written $A=\mathbb R^4$,
with its global inertial chart $x=(x^0,z)=(t,z)$, and write
$e_0:=(1,0,0,0)\in A$. This example works through the explicit computations
behind [[thm-gr-minkowski-cauchy-and-global-hyperbolicity]].

**(i)** For every $c\in\mathbb R$ the level set
$\Sigma_c:=x^{-1}(\{c\}\times\mathbb R^3)$ is a spacelike embedded
hypersurface with induced metric $\delta=\operatorname{diag}(1,1,1)$ in the
coordinates $(z^1,z^2,z^3)$ and future unit normal $\partial_0$
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)).

**(ii)** The coordinate $t=x^0$ is a temporal function: its gradient in the
chart is $\nabla t=-\partial_0$, with
$\eta(\nabla t,\nabla t)=-1<0$ and $dt(\partial_0)=1>0$
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e),
[[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clause (d)).

**(iii)** For $\varepsilon>0$ and $p\in A$ the double cone
$$V_\varepsilon(p):=I^+\bigl(p-\varepsilon e_0\bigr)\cap I^-\bigl(p+\varepsilon e_0\bigr)$$
is open, contains $p$, and is causally convex for causal curves that meet it
twice: if a future causal curve $\gamma:[a,b]\to A$ has
$\gamma(a),\gamma(b)\in V_\varepsilon(p)$, then $\gamma(s)\in
V_\varepsilon(p)$ for every $s\in(a,b)$. In coordinates,
$$V_\varepsilon(p)=\Bigl\{q:\ |z(q)-z(p)|_{\mathrm e}<\varepsilon-\bigl|x^0(q)-x^0(p)\bigr|\Bigr\}.$$

**(iv)** For $o:=0\in A$ and $q:=Te_0$, $T>0$, the causal diamond is
$$J^+(o)\cap J^-(Te_0)=\bigl\{r:\ |z(r)|_{\mathrm e}\le x^0(r)\le T-|z(r)|_{\mathrm e}\bigr\},$$
a closed bounded subset of $\mathbb R^4$, hence compact; its $t$-sections are
closed balls of radius $\min(t,T-t)$ for $0\le t\le T$, and are empty otherwise.

**(v)** The domain of dependence of each $\Sigma_c$ is all of $A$:
$D^+(\Sigma_c)\supseteq\{t\ge c\}$, $D^-(\Sigma_c)\supseteq\{t\le c\}$ and
$D(\Sigma_c)=A$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause
(d)).

## Facts & Assumptions

**Given:** The flat model $(A,\eta,N)$ of [[def-gr-flat-minkowski-model-and-inertial-charts]], its global inertial chart, and the sets and curves of the claims.

[L1] In the global inertial chart $x$, $\eta=\operatorname{diag}(-1,1,1,1)$, the cone sets of clause (f) are $C^+=\{v:v^0>|v_s|_{\mathrm e}\}$ and $\overline{C^+}=\{v:v^0\ge|v_s|_{\mathrm e}\}$, and $q-p\in\overline{C^+}$ exactly when $q\in J^+(p)$, $q-p\in C^+$ exactly when $q\in I^+(p)$ ([[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (a), (b), (f), [[thm-gr-minkowski-cauchy-and-global-hyperbolicity]] clause (a), [[def-time-orientation-and-future-causal-sets]]).

[L2] Along every future causal curve the coordinate $t$ is strictly increasing and $|z(b)-z(a)|_{\mathrm e}\le t(b)-t(a)$ for $a<b$; every inextendible causal curve has $t$-range all of $\mathbb R$ and meets each level $t=c$ exactly once ([[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clauses (a), (b), (c), [[thm-gr-minkowski-cauchy-and-global-hyperbolicity]] clause (b)).

[L3] Cone additivity: $C^++\overline{C^+}\subseteq C^+$ and $\overline{C^+}+\overline{C^+}\subseteq\overline{C^+}$ ([[lem-gr-flat-inertial-cone-criterion-and-sums]] clause (c)).

[L4] The hyperplanes $\{t=c\}$ are embedded submanifolds with slice chart $x$, and the restriction of $\eta$ to $\operatorname{span}(\partial_1,\partial_2,\partial_3)$ is $\operatorname{diag}(1,1,1)$ ([[def-embedded-submanifold-and-slice-chart]], [[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (a), (b)).

[L5] A subset of $\mathbb R^4$ that is closed and bounded is compact ([[cor-heine-borel-in-the-product-topology]], [[def-compact-space]]).

[L7] The domain of dependence of $S\subseteq A$ consists of the points through which every past-inextendible (respectively future-inextendible) causal curve meets $S$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (d)).

[L8] Euclidean space $\mathbb R^3$ is complete: every Cauchy sequence in its Euclidean norm converges to a point of $\mathbb R^3$ ([[thm-euclidean-space-complete]]).

## Verification

**Proof technique:** direct.

1.1 (The level sets.) By [L4] each $\Sigma_c$ is an embedded three-dimensional submanifold with tangent space $\operatorname{span}(\partial_1,\partial_2,\partial_3)$ on which $\eta$ restricts to $\operatorname{diag}(1,1,1)>0$; hence $\Sigma_c$ is a spacelike embedded hypersurface. Its normal line is spanned by $\partial_0$ with $\eta(\partial_0,\partial_0)=-1$, and $g(\partial_0,N)=g(\partial_0,\partial_0)=-1<0$ with $N=\partial_0$, so $\partial_0$ is the future unit normal. This proves (i). [given, L4]

1.2 (The coordinate is temporal.) The function $t=x^0$ has differential $dt$ with $dt(\partial_0)=1$ and $dt(\partial_a)=0$ for $a=1,2,3$; the vector field $w:=-\partial_0$ satisfies $\eta(w,X)=dt(X)$ for every $X$ because $\eta(-\partial_0,\partial_0)=\eta(\partial_0,\partial_0)(-1)=1$ and $\eta(-\partial_0,\partial_a)=0$; hence $\nabla t=w$ with $\eta(\nabla t,\nabla t)=-1<0$ and $dt(\partial_0)=1>0$. This is (ii). [given, L1, L4]

2.1 (The double cone is causally convex.) Let $p\in A$, $\varepsilon>0$, let $\gamma:[a,b]\to A$ be future causal with $\gamma(a),\gamma(b)\in V_\varepsilon(p)$ and let $a<s<b$. Since $\gamma(a)\in I^+(p-\varepsilon e_0)$, [L1] gives $\gamma(a)-(p-\varepsilon e_0)\in C^+$; since $\gamma|_{[a,s]}$ is future causal, [L1] gives $\gamma(s)-\gamma(a)\in\overline{C^+}$; by [L3], $\gamma(s)-(p-\varepsilon e_0)\in C^+$, so $p-\varepsilon e_0\ll\gamma(s)$. Similarly $\gamma(b)\in I^-(p+\varepsilon e_0)$ gives $(p+\varepsilon e_0)-\gamma(b)\in C^+$; since $\gamma|_{[s,b]}$ is future causal, $\gamma(b)-\gamma(s)\in\overline{C^+}$ and [L3] gives $(p+\varepsilon e_0)-\gamma(s)\in C^+$, so $\gamma(s)\ll p+\varepsilon e_0$. Hence $\gamma(s)\in V_\varepsilon(p)$, which is causally convex. The displayed coordinate description follows from [L1]: $q\in V_\varepsilon(p)$ iff $(x^0(q)-x^0(p)+\varepsilon,\ z(q)-z(p))\in C^+$ and $(x^0(p)+\varepsilon-x^0(q),\ z(p)-z(q))\in C^+$, i.e. $|z(q)-z(p)|_{\mathrm e}<\varepsilon+x^0(q)-x^0(p)$ and $|z(q)-z(p)|_{\mathrm e}<\varepsilon-x^0(q)+x^0(p)$, which is the stated inequality. This proves (iii). [step 1.2, given, L1, L2, L3]

2.2 (The diamond is compact.) Let $r\in A$ with coordinates $(t_r,z_r)$. By [L1], $r\in J^+(o)$ means $t_r\ge|z_r|_{\mathrm e}$ and $r\in J^-(Te_0)$ means $T-t_r\ge|z_r|_{\mathrm e}$; this is the displayed description. The set described is closed (non-strict inequalities of continuous functions) and bounded: $t_r\in[0,T]$ and $|z_r|_{\mathrm e}\le\min(t_r,T-t_r)\le T/2$. By [L5] it is compact, and its $t$-section is the closed ball of radius $\min(t,T-t)$ in $\mathbb R^3$. This proves (iv). [step 1.2, given, L1, L5]

2.3 (The domain of dependence is everything.) Let $p\in A$ with $t(p)\ge c$, and let $\gamma:I\to A$ be any past-inextendible causal curve through $p$. I claim $\inf\,(t\circ\gamma)(I)=-\infty$. Otherwise put $m:=\inf\,(t\circ\gamma)(I)>-\infty$. Since $t\circ\gamma$ is increasing, it tends to $m$ as the parameter tends to $\inf I$. For every $\varepsilon>0$ choose a parameter $a\in I$ with $m\le t(\gamma(a))<m+\varepsilon$. For any $u,v\in I$ with $u,v\le a$, the Lipschitz bound [L2] gives $|z(\gamma(u))-z(\gamma(v))|_{\mathrm e}\le |t(\gamma(u))-t(\gamma(v))|<\varepsilon$. Thus the full spatial tail is Cauchy as the parameter tends to $\inf I$; by completeness [L8] it converges to some $z_\infty\in\mathbb R^3$. Since $t(\gamma(\cdot))\to m$, the full curve tail converges to $x^{-1}(m,z_\infty)\in A$, contradicting past-inextendibility by clause (d) of [[def-gr-causal-curves-and-reachability]]. Hence its time range is unbounded below. Since $t\circ\gamma$ is continuous and strictly increasing on the interval $I$ and attains $t(p)\ge c$ at the parameter of $p$, its image contains $(-\infty,t(p)]$, in particular $c$; so some parameter lies on $\Sigma_c$ and $p\in D^+(\Sigma_c)$. The case $t(p)\le c$ is the time reverse: every future-inextendible causal curve through $p$ has time range unbounded above and hence meets $\Sigma_c$, so $p\in D^-(\Sigma_c)$. Therefore $D^+(\Sigma_c)\cup D^-(\Sigma_c)=A$, which is (v). [step 1.1, given, L2, L7, L8]

3.1 (Conclusion.) Parts (i)-(v) are steps 1.1, 1.2, 2.1, 2.2 and 2.3; this completes the example. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Reparametrization of the proof.** The computations above are exactly the content of the general theorem for this model; they are recorded separately because the concrete inequalities are used by the flat cylinder and slab examples.
- **The double cone.** The set $V_\varepsilon(p)$ has two vertex tips at $p\pm\varepsilon e_0$ and is the standard causally convex neighborhood of strong causality; it is not an open coordinate ball.
