---
id: lem-gr-corresponding-boundary-structure
kind: lemma
title: "Structure of corresponding boundary points: achronality of the future boundary, equality of pasts, and uniqueness"
status: draft
origin: session
domain: mathematics
dependency_level: 28
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-isometric-immersion-rigidity, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, lem-gr-chronology-openness, lem-gr-push-up-rule, lem-gr-cauchy-set-topology-and-graph, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Proposition 3.7 with full proof (equivalent characterisations of corresponding boundary points, uniqueness), including the achronality argument in the proof of Lemma 3.9, printed pp. 15-17"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: open and closed causal relations, Propositions 2.4, 2.5 and Theorem 4.12 printed pp. 26 and 118"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): openness of chronology and closedness of the causal relation on globally hyperbolic space-times, Theorem 2.8.5 and section 2.8 printed pp. 42-44"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same
data and let $(U,\varphi)$ be a common subdevelopment in the sense of
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a). Write
$\Sigma:=j(\Sigma)$, $\Sigma':=j'(\Sigma)$, $I^\pm=I^\pm_M$ and
$I'^\pm=I^\pm_{M'}$. Then:

**(a)** $\partial U\cap I^+(\Sigma)$ is achronal in $M$, and
$\partial\varphi(U)\cap I'^+(\Sigma')$ is achronal in $M'$.

**(b)** Let $p\in\partial U$ and $p'\in\partial\varphi(U)$ be corresponding
boundary points to the future of the initial surface. Then
$$\varphi\bigl(I^-(p)\cap U\bigr)=I'^-(p')\cap\varphi(U),$$
and for every $q\in I^-(p)\cap U$ also
$$\varphi\bigl(I^+(q)\cap I^-(p)\cap U\bigr)=I'^+(\varphi(q))\cap I'^-(p')\cap\varphi(U).$$

**(c)** Let $p\in\partial U$ and $p'\in\partial\varphi(U)$ be corresponding.
If $\gamma:(-\varepsilon,0)\to U$ is a future timelike curve with
$\gamma(s)\to p$ as $s\nearrow0$, then $\varphi(\gamma(s))\to p'$ as
$s\nearrow0$. Moreover $p$ has at most one corresponding boundary point.

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$, and the points and curves of the clause under consideration.

[L1] Global hyperbolicity of both developments: $\Sigma$ is a Cauchy set of $M$ and $\Sigma'$ one of $M'$, so both $M$ and $M'$ are globally hyperbolic; in particular each is causal, strongly causal and has a closed causal relation, and $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$ ([[def-gr-development-and-data-fixing-isometry]] clause (a)5, [[thm-gr-cauchy-surface-implies-globally-hyperbolic]] clauses (a)-(b), [[lem-gr-globally-hyperbolic-causal-structure]] clause (a), [[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[def-gr-causal-conditions-and-global-hyperbolicity]]).

[L2] Openness of chronology and push-up: $I^+(x)$ and $I^-(x)$ are open for every $x$, and $x\ll y\le z$ implies $x\ll z$; consequently $I^+(\Sigma)$ and $I^-(\Sigma)$ are open ([[lem-gr-chronology-openness]], [[lem-gr-push-up-rule]], [[def-gr-causal-curves-and-reachability]]).

[L3] Strong causality in the form used: for every $p'\in M'$ and every open $U'\ni p'$ there is an open $W'$ with $p'\in W'\subseteq U'$ such that every causal curve with both endpoints in $W'$ is contained in $W'$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b)).

[L4] Convexity of the subdevelopment: every causal curve in $M$ from $\Sigma$ to a point of $U\cap I^+(\Sigma)$ is contained in $U$, and every causal curve in $M$ with both endpoints in $U$ is contained in $U$ ([[lem-gr-subdevelopment-convexity]] clauses (a) and (c)).

[L5] Isometric immersions preserve timelike and causal relations in the sense that $\varphi$ maps every future timelike curve in $U$ to a future timelike curve in $M'$ ([[lem-gr-isometric-immersion-rigidity]] clause (a), [[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c)).

No choice principle is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Chronology openness in the form used.) For $x,y\in M$ with $x\ll y$ and every open $V\ni y$ there exist $x_1\ll y_1$ with $x_1\in I^+(x)$ and $y_1\in V$, and for every open $V'\ni x'$ there exist $y_1'\in I^+(x')$ with $x'\ll y'_1$; these are immediate from the openness of $I^\pm$ in [L2] and are used below. [L2, algebra]

1.2 (First inclusion of the past equality.) Let $q\in I^-(p)\cap U$. Then $I^+(q)$ is an open neighbourhood of $p$ [L2]. Choose $t'_1\in M'$ with $p'\ll t'_1$; then $I'^-(t'_1)$ is an open neighbourhood of $p'$ [L2]. Since $p,p'$ are corresponding and $I^+(q)$ is a neighbourhood of $p$, there is $r'\in I'^-(t'_1)\cap\varphi(U)$ with $\varphi^{-1}(r')\in I^+(q)\cap U$; that is, $\varphi(q)\ll r'\ll t'_1$, so $\varphi(q)\le t'_1$. Choose a sequence $t'_i$ with $p'\ll t'_i$ and $t'_i\to p'$ (possible since $I'^+(p')$ contains points arbitrarily close to $p'$). By [L1] the causal relation of $M'$ is closed, so $\varphi(q)\le p'$. [L1, L2, given, choose, algebra]

2.1 (Achronality of the boundary.) Suppose $x,y\in\partial U\cap I^+(\Sigma)$ with $x\ll y$. By step 1.1 applied at $y$ and at $x$: choose $x'\in M\setminus U$ with $x'\ll y$ (possible because $I^-(y)$ is a neighbourhood of $x$ and $x\in\partial U$), and then $y'\in U$ with $x'\ll y'$ and $y'\in I^+(\Sigma)$ (possible because $I^+(x')\cap I^+(\Sigma)$ is a neighbourhood of $y$ and $y\in\partial U$). Now $x'\in I^+(\Sigma)$ since $I^+(\Sigma)$ is open [L2], so there is a future timelike curve from $\Sigma$ to $x'$; concatenating it with a future timelike curve from $x'$ to $y'$ gives a causal curve in $M$ from $\Sigma$ to $y'\in U\cap I^+(\Sigma)$, which by [L4] must be contained in $U$; but it passes through $x'\notin U$, a contradiction. Hence no two distinct points of $\partial U\cap I^+(\Sigma)$ are timelike related. The claim for $\partial\varphi(U)$ follows by applying the same argument to the common subdevelopment $(\varphi(U),\varphi^{-1})$ of $M'$ and $M$, which by [L5] and [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a) is again a common subdevelopment. This is clause (a). [step 1.1, L1, L2, L4, L5, contradiction]

2.2 (Upgrading to the strict past.) Since $q\in I^-(p)$ and $p\in\partial U$, choose $s\in U\cap I^+(q)\cap I^-(p)$, which is nonempty because $I^+(q)\cap I^-(p)$ is a nonempty open set and every neighbourhood of $p$ meets $U$. Applying step 1.2 with $s$ in place of $q$ gives $\varphi(s)\le p'$, and by [L5] $q\ll s$ implies $\varphi(q)\ll\varphi(s)$; push-up [L2] gives $\varphi(q)\ll p'$. Hence $\varphi(I^-(p)\cap U)\subseteq I'^-(p')\cap\varphi(U)$. [step 1.2, L2, L5, choose, algebra]

3.1 (The reverse inclusion and the second equality.) The reverse inclusion follows by symmetry: $\varphi^{-1}:(\varphi(U),\varphi^{-1})$ is a common subdevelopment of $M'$ and $M$ ([L5], [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a), [[lem-gr-isometric-immersion-rigidity]] clause (b)), and $p',p$ are corresponding boundary points for it, so step 2.2 applies with the roles exchanged and yields $\varphi^{-1}(I'^-(p')\cap\varphi(U))\subseteq I^-(p)\cap U$. This proves the first equality of (b). For the second equality, let $q\in I^-(p)\cap U$ and apply step 2.2 to each $r\in I^+(q)\cap I^-(p)\cap U$ (for $r\in I^-(p)\cap U$ with $q\ll r$ it gives $\varphi(q)\ll\varphi(r)\ll p'$, hence $\varphi(r)\in I'^+(\varphi(q))\cap I'^-(p')\cap\varphi(U)$, i.e. one inclusion; the reverse follows from the first equality applied to $\varphi^{-1}$ and to the pair $(q',p')$ with $q':=\varphi(q)$). [step 2.2, L5, algebra]

4.1 (Limits along timelike curves.) Let $\gamma:(-\varepsilon,0)\to U$ be future timelike with $\gamma(s)\to p$, and let $V'$ be an open neighbourhood of $p'$. By [L3] choose $W'\ni p'$ with $W'\subseteq V'$ such that every causal curve with both endpoints in $W'$ is contained in $W'$, and choose $q'\in W'\cap I'^-(p')$ (nonempty since $I'^-(p')$ is a neighbourhood of $p'$). By the first equality of (b), $q:=\varphi^{-1}(q')\in I^-(p)\cap U$. Since $I^+(q)$ is an open neighbourhood of $p$ [L2] and $\gamma(s)\to p$, there is $\delta>0$ with $\gamma(s)\in I^+(q)\cap U$ for all $s\in(-\delta,0)$. By the second equality of (b) applied to $q$, $\varphi(\gamma(s))\in I'^+(q')\cap I'^-(p')\cap\varphi(U)\subseteq I'^+(q')\cap I'^-(p')$ for such $s$; hence there are causal curves in $M'$ from $q'$ to $\varphi(\gamma(s))$ and from $\varphi(\gamma(s))$ to $p'$, and their concatenation is a causal curve with endpoints $q',p'\in W'$. By the choice of $W'$ the concatenation is contained in $W'$, so $\varphi(\gamma(s))\in W'\subseteq V'$. Thus $\varphi(\gamma(s))\to p'$. [step 3.1, L2, L3, choose, algebra]

5.1 (Uniqueness of the corresponding point.) Suppose $p$ has corresponding boundary points $p'_1\neq p'_2$. By the first equality of (b) applied to both, $I'^-(p'_1)\cap\varphi(U)=I'^-(p'_2)\cap\varphi(U)=:A'$. Since $p'_i\in\partial\varphi(U)$, the set $\varphi(U)$ accumulates at $p'_i$, so $A'\ni y'_n\to p'_1$ for a sequence (choose $y'_n\in I'^-(p'_1)\cap\varphi(U)$ with $y'_n\to p'_1$; such points exist because $I'^-(p'_1)$ is a neighbourhood of $p'_1$). For every $n$, $y'_n\in I'^-(p'_1)\cap\varphi(U)=I'^-(p'_2)\cap\varphi(U)$, so $y'_n\ll p'_2$; closedness of the causal relation [L1] gives $p'_1\le p'_2$, and symmetrically $p'_2\le p'_1$. If $p'_1\neq p'_2$ these two relations exhibit a nonconstant closed future causal curve through $p'_1$ in $M'$, contradicting causality [L1]. Hence $p'_1=p'_2$, which is the uniqueness assertion of (c). [step 3.1, step 4.1, L1, L2, choose, algebra] ∎

## Remarks

Clause (b) is the exact content of Sbierski's Proposition 3.7 that the future boundary identification preserves chronological pasts; clause (c) is its equivalent characterisation by timelike curves and the uniqueness of the corresponding point. The achronality of clause (a) is used in [[lem-gr-boundary-null-geodesic-segment]] to force boundary segments between boundary points to be null geodesics.
