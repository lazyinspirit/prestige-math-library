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
deps: [def-countable-choice, def-dependent-choice, thm-gr-local-geodesics-and-exponential-map, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-causal-curve-calculus, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-isometric-immersion-rigidity, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, lem-gr-chronology-openness, lem-gr-push-up-rule, lem-gr-cauchy-set-topology-and-graph, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
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

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]).

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

**Given:** Countable Choice and Dependent Choice; two fixed developments of the same fixed model and initial data, a common subdevelopment $(U,\varphi)$, and the corresponding points or curves in the stated clause. All causal relations are ambient unless a subscript states otherwise.

[L1] The common initial surface is Cauchy in $M$, $M'$ and $U$; the developments are globally hyperbolic, hence causal and strongly causal, with closed causal relation. Each manifold splits into its chronological past of the initial surface, the initial surface, and its chronological future; the initial surface lies in the open common subdevelopment ([[def-gr-development-and-data-fixing-isometry]], [[def-gr-common-subdevelopment-and-corresponding-boundary]], [[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[lem-gr-globally-hyperbolic-causal-structure]], [[lem-gr-cauchy-set-topology-and-graph]]). The global-hyperbolicity and closed-relation suppliers require the stated choice assumptions.

[L2] Chronology is open in each point and as a relation; causal relations are transitive, and $x\ll y\le z$ implies $x\ll z$. A future timelike curve has strictly chronologically ordered values at different parameters ([[lem-gr-chronology-openness]], [[lem-gr-push-up-rule]], [[lem-gr-causal-curve-calculus]], [[def-gr-causal-curves-and-reachability]]).

[L3] Every causal curve from the initial surface to a future point of $U$ lies in $U$; every causal segment with both endpoints in $U$ lies in $U$. The corresponding past-side statements hold by time reversal ([[lem-gr-subdevelopment-convexity]]). The same applies to $\varphi(U)$ in $M'$ because the image common subdevelopment is again a development of the same data.

[L4] $\varphi:U\to\varphi(U)$ is a diffeomorphism preserving metric, time orientation and the common initial embedding. It carries timelike curves lying entirely in $U$ to timelike curves, and its inverse has the same properties. Correspondence is symmetric under reversing the two developments ([[def-gr-development-and-data-fixing-isometry]], [[def-gr-common-subdevelopment-and-corresponding-boundary]], [[lem-gr-isometric-immersion-rigidity]]).

[L5] Through every point there are arbitrarily short future and past timelike geodesic segments, whose squared velocity and time orientation stay constant ([[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-parallel-transport-and-geodesic-speed]]). Smooth coordinate neighborhoods give a countable neighborhood basis for taking limits ([[def-gr-smooth-lorentzian-objects]]).

[L6] Strong causality supplies arbitrarily small open causal-convex neighborhoods: a causal curve with both endpoints in such a neighborhood stays there ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b)).

## Proof

**Proof technique:** direct.

1.1 (Corresponding points have the same side.) Since the initial surface is contained in the open set $U$, a boundary point $p$ is outside it and therefore lies in $I^+(\Sigma)$ or $I^-(\Sigma)$ by [L1]. A point $x\in U\cap I^+(\Sigma)$ is timelike reachable from $\Sigma$ along a curve lying in $U$ by [L3], so $\varphi(x)\in I'^+(\Sigma')$ by [L4]; likewise for the past, using time reversal and [L3]. If $p\in I^+(\Sigma)$, restrict all source neighborhoods in the correspondence definition to that open set. The corresponding point $p'$ cannot lie in $I'^-(\Sigma')$, because this is open and would give a paired witness with inconsistent sides; and it cannot lie in $\Sigma'\subseteq\varphi(U)$ because it is a boundary point of the open image. Thus $p'\in I'^+(\Sigma')$. The past case is identical after time reversal. [given, L1, L2, L3, L4, algebra]

1.2 (Actual interior past at a future boundary.) Let $p\in\partial U\cap I^+(\Sigma)$ and $x\in I^-(p)\cap I^+(\Sigma)$. The open set $I^+(x)\cap I^+(\Sigma)$ contains $p$ and therefore meets $U$ at some $y$. A future timelike curve from $\Sigma$ to $x$ followed by one from $x$ to $y\in U\cap I^+(\Sigma)$ lies entirely in $U$ by [L3]; hence $x\in U$. This proves $I^-(p)\cap I^+(\Sigma)\subseteq U$. Short timelike geodesic segments ending at $p$, with all earlier points sufficiently close to $p$, lie in this set by [L5] and the openness of $I^+(\Sigma)$. Thus there are actual interior past points tending to $p$. Apply the same proof in $M'$ to $\varphi(U)$ and reverse time on the past side. [L1, L2, L3, L5, choose, construct]

2.1 (Achronality.) If distinct $x,y\in\partial U\cap I^+(\Sigma)$ satisfied $x\ll y$, step 1.2 at $y$ would put $x\in U$, contradicting $x\in\partial U$. Thus this boundary is achronal. The identical argument on $\varphi(U)$ proves the second assertion of (a). [step 1.2, L1, L3, algebra]

2.2 (A closed past inclusion from paired witnesses.) Let $(p,p')$ be a corresponding future pair and $q\in I^-(p)\cap U$. Take a short future timelike geodesic through $p'$ and points $t'_n$ on it with $p'\ll t'_n$ and $t'_n\to p'$. For every $n$, $I^+(q)$ is an open neighborhood of $p$, and $I'^-(t'_n)$ is an open neighborhood of $p'$. Correspondence supplies $r_n\in U\cap I^+(q)$ with $\varphi(r_n)\in I'^-(t'_n)$. The timelike curve from $q$ to $r_n$ lies in $U$ by [L3], so $\varphi(q)\ll\varphi(r_n)\ll t'_n$. Closedness of the causal relation in $M'$ gives $\varphi(q)\le p'$. Notice that the neighborhood of $p'$ used here is the past of the strictly later point $t'_n$. [step 1.1, L1, L2, L3, L4, L5, choose, algebra]

3.1 (Strict inclusion and equality of chronological pasts.) With $q$ as above, a sufficiently late point $r$ on the interior timelike geodesic ending at $p$ from step 1.2 satisfies $q\ll r\ll p$, because $I^+(q)$ is an open neighborhood of $p$. It lies in $U$, so step 2.2 gives $\varphi(r)\le p'$, while [L3]-[L4] give $\varphi(q)\ll\varphi(r)$. Push-up yields $\varphi(q)\ll p'$. Hence $\varphi(I^-(p)\cap U)\subseteq I'^-(p')\cap\varphi(U)$. Apply the same strict inclusion to the reversed common subdevelopment and the corresponding pair $(p',p)$ to obtain equality. For the second equality in (b), if $r\in I^+(q)\cap I^-(p)\cap U$, both endpoints $q,r$ lie in $U$ and their joining timelike curve lies there by [L3]; consequently $\varphi(q)\ll\varphi(r)\ll p'$. Conversely if $r'\in I'^+(\varphi(q))\cap I'^-(p')\cap\varphi(U)$, the first equality puts $r=\varphi^{-1}(r')$ in $I^-(p)\cap U$, and the joining timelike curve between $\varphi(q),r'$ lies in $\varphi(U)$ by [L3], so its inverse gives $q\ll r$. This proves both equalities. [step 1.2, step 2.2, L2, L3, L4, algebra]

4.1 (Limit along an interior timelike curve.) Let $\gamma:(-\varepsilon,0)\to U$ be future timelike with limit $p$. For every $s<t<0$, $\gamma(s)\ll\gamma(t)$, and closedness applied to later values tending to $p$ gives $\gamma(t)\le p$; push-up gives $\gamma(s)\ll p$. If $p$ were to the past of $\Sigma$, then for sufficiently late $s$ the point $\gamma(s)$ would lie in $I^-(\Sigma)$, and a concatenated timelike curve from $\gamma(s)$ through $p$ to $\Sigma$ would have both endpoints in $U$, putting $p\in U$ by [L3], a contradiction. Therefore such a curve can converge only to a future boundary point. Fix an open neighborhood $V'$ of the corresponding $p'$. By [L6] choose an open causal-convex $W'$ with $p'\in W'\subseteq V'$. The interior past-geodesic construction of step 1.2 on the primed side supplies $q'\in W'\cap I'^-(p')\cap\varphi(U)$, with $q'\in I'^+(\Sigma')$. Step 3.1 gives $q:=\varphi^{-1}(q')\in I^-(p)\cap U$. For all sufficiently late $s$, $\gamma(s)\in I^+(q)$ by chronology openness, and also $\gamma(s)\in I^-(p)$ by the first argument of this step. The second equality of (b) then gives $q'\ll\varphi(\gamma(s))\ll p'$. Concatenate the ambient timelike curves from $q'$ to this point and from it to $p'$; both endpoints $q',p'$ are in $W'$, so causal convexity places $\varphi(\gamma(s))$ in $W'\subseteq V'$. This proves $\varphi(\gamma(s))\to p'$. Reversing time proves the corresponding limit statement for past-directed curves ending at a past boundary point. [step 1.1, step 1.2, step 3.1, L1, L2, L3, L6, choose, algebra]

5.1 (Uniqueness.) Suppose a future boundary point $p$ corresponds to $p'_1,p'_2$. By step 1.1 both lie in the future of $\Sigma'$, and by step 3.1 their chronological pasts intersected with $\varphi(U)$ agree. Step 1.2 supplies points $y'_n\in I'^-(p'_1)\cap I'^+(\Sigma')\subseteq\varphi(U)$ on a short past geodesic, tending to $p'_1$. The past equality therefore gives $y'_n\ll p'_2$ for every $n$. Closedness of the causal relation implies $p'_1\le p'_2$. Interchanging the two points gives $p'_2\le p'_1$. Causality forces equality. For a past boundary point, apply this proof with the time orientation reversed; uniqueness holds on both sides. Together with step 4.1, this proves (c). [step 1.1, step 1.2, step 3.1, step 4.1, L1, L2, L5, algebra] ∎

## Remarks

The points approaching a future boundary from its chronological past are obtained from the actual past-set structure above the common Cauchy surface. The proof never treats a point's own chronological past as its neighborhood. Correspondence gives paired witnesses, causal convexity legitimizes mapping their entire joining curves, and global hyperbolicity supplies the closed causal relation and the causal-convex neighborhood squeeze. The time-reversed argument handles the past branch without reversing the future-curve convention in clause (c).
