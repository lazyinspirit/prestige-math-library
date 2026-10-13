---
id: lem-gr-boundary-null-geodesic-segment
kind: lemma
title: "An exposed boundary point: the last boundary point of a boundary null
  geodesic has no other boundary point in its past"
status: published
origin: session
domain: mathematics
dependency_level: 32
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-gr-auxiliary-complete-riemannian-metric
  - lem-gr-strong-causality-compact-length-bound
  - def-gr-development-and-data-fixing-isometry
  - def-gr-common-subdevelopment-and-corresponding-boundary
  - lem-gr-subdevelopment-convexity
  - lem-gr-corresponding-boundary-structure
  - lem-gr-corresponding-set-smooth-extension
  - lem-gr-compact-past-above-cauchy-set
  - lem-gr-geodesic-extension-from-compact-length
  - lem-gr-isometric-immersion-rigidity
  - thm-gr-cauchy-surface-implies-globally-hyperbolic
  - lem-gr-globally-hyperbolic-causal-structure
  - thm-gr-normal-neighborhood-causal-cone
  - lem-gr-null-position-vector-forces-null-velocity
  - lem-gr-push-up-rule
  - lem-gr-chronology-openness
  - lem-gr-maximal-geodesics-and-extension
  - lem-gr-parallel-transport-and-geodesic-speed
  - lem-gr-cauchy-set-topology-and-graph
  - def-gr-causal-curves-and-reachability
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-gr-smooth-lorentzian-objects
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-corresponding-set-smooth-extension: mathematical-premise
  lem-gr-compact-past-above-cauchy-set: mathematical-premise
  lem-gr-geodesic-extension-from-compact-length: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-null-position-vector-forces-null-velocity: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the
        Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Lemma
        3.9 with full proof (existence of an exposed boundary point satisfying
        J^-(p) cap boundary U cap J^+(iota(M)) = {p}), printed pp. 17-18"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity
        22 (2019), article 3: the fundamental proposition on causal versus
        timelike curves (timelike perturbation of null segments with corners),
        Proposition 2.27 and the discussion in section 2.15, printed pp. 44-46
        and 62-66"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011):
        Theorem 2.9.9 and the causal convexity of elementary regions, printed
        pp. 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same data and
let $(U,\varphi)$ be a common subdevelopment in the sense of
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a). Let
$C\subseteq\partial U$ be the set of boundary points that have a corresponding
point (clause (c) of that definition), and write $\Sigma:=j(\Sigma)$. If
$C\cap J^+(\Sigma)\neq\varnothing$, then there exists $p\in C\cap J^+(\Sigma)$
with
$$J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}.$$

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$ with $C\cap J^+(\Sigma)\neq\varnothing$.

[L1] Global hyperbolicity and closed relations: $\Sigma$ is Cauchy in $M$ and in $U$; $M$ and $U$ are globally hyperbolic, causal and strongly causal; $J^+(\Sigma)\cap J^-(\Sigma)=\Sigma$ and $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$ ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[lem-gr-globally-hyperbolic-causal-structure]] clause (a), [[lem-gr-cauchy-set-topology-and-graph]] clause (a)).

[L2] Achronality and convexity: $\partial U\cap I^+(\Sigma)$ is achronal, and every causal curve in $M$ from $\Sigma$ to a point of $U\cap I^+(\Sigma)$ is contained in $U$ ([[lem-gr-corresponding-boundary-structure]] clause (a), [[lem-gr-subdevelopment-convexity]] clause (a)).

[L3] Null versus timelike: a past-directed causal curve between two points of an achronal set with a timelike point or a genuine corner somewhere can be replaced by a timelike curve joining the endpoints ([[thm-gr-normal-neighborhood-causal-cone]], [[lem-gr-null-position-vector-forces-null-velocity]], [[lem-gr-push-up-rule]] clause (c), [[lem-gr-chronology-openness]]); hence such a curve between distinct boundary points must be a null geodesic.

[L4] Maximal nonconstant causal geodesics have no limit at either end, so are inextendible causal curves and meet the Cauchy surface once. The geodesic equation has unique maximal affine solutions, and null character and time orientation are preserved ([[lem-gr-maximal-geodesics-and-extension]] clause (b), [[lem-gr-parallel-transport-and-geodesic-speed]]).

[L5] The corresponding-point map $f:U\cup C\to\varphi(U)\cup C'$ is a homeomorphism and is the restriction of a smooth local diffeomorphism $\Phi$ on a neighborhood of $U\cup C$. It agrees with $\varphi$ on $U$ and maps every geodesic lying wholly in $U\cup C$ to an affinely parametrized geodesic, preserving nullness; $C$ is relatively open in $\partial U$. These assertions do not assert an exterior isometry ([[lem-gr-corresponding-set-smooth-extension]] clauses (a)-(d)). Corresponding future boundary points lie in $I'^+(\Sigma')$, where $\Sigma':=j'(\Sigma)$ ([[lem-gr-corresponding-boundary-structure]], proof step 1.1).

[L6] In either development, $J^-(x)\cap J^+(\Sigma)$ is compact; on the connected component traversed by a curve there is a smooth complete proper auxiliary metric $h$, and strong causality bounds the $h$-length of every compact causal subsegment contained in a fixed compact set. A geodesic with a compact tail, finite auxiliary length and a finite affine endpoint extends beyond that endpoint ([[lem-gr-compact-past-above-cauchy-set]], [[thm-gr-auxiliary-complete-riemannian-metric]], [[lem-gr-strong-causality-compact-length-bound]], [[lem-gr-geodesic-extension-from-compact-length]] clause (b)). The length bound applies to past curves by reversing their parametrization.

[L7] Correspondence means that every pair of neighborhoods $V\ni x$, $V'\ni x'$ admits a witness $z\in V\cap U$ with $\varphi(z)\in V'$ ([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (c)). Consequently correspondence is closed under joint limits whose two limits lie on the respective boundaries: for convergent corresponding pairs, first put a late pair inside $V\times V'$, then apply correspondence to those same neighborhoods.

Countable Choice and Dependent Choice are inherited from the global causal, auxiliary metric, compactness and smooth-extension suppliers. The proof uses no arbitrary-index choice.
## Proof

**Proof technique:** direct.

1.1 (An initial boundary generator.) Choose $p_0\in C\cap J^+(\Sigma)$. Because $\Sigma\subseteq U$, the splitting in [L1] gives $p_0\in I^+(\Sigma)$. If the displayed exposed-point property already holds, take $p=p_0$. Otherwise choose a distinct $q_0\in J^-(p_0)\cap\partial U\cap J^+(\Sigma)$ and a causal curve joining them. Achronality [L2] and the null-versus-timelike alternative [L3] make this a null geodesic segment. Parametrize its maximal extension $\gamma:(\alpha,\beta)\to M$ in the past direction with $\gamma(0)=p_0$ and $\gamma(1)=q_0$. By [L4] it meets $\Sigma$ once, at a parameter $T>1$: a crossing at $T\le1$ would imply $q_0\in J^-(\Sigma)\cap J^+(\Sigma)=\Sigma$, impossible. All points $\gamma(t)$ for $0\le t<T$ lie in $I^+(\Sigma)$, because they are causally after $\gamma(T)\in\Sigma$, are not on $\Sigma$, and [L1] excludes the past side. [given, L1, L2, L3, L4, choose, construct]

1.2 (No interior complement point below a future boundary.) Let $x\in\partial U\cap I^+(\Sigma)$ and suppose $r\in\operatorname{int}(U^c)\cap J^+(\Sigma)$ with $r\le x$. Since $\Sigma\subseteq U$, one has $r\in I^+(\Sigma)$. Choose a sufficiently small past timelike perturbation $r_-\ll r$ inside the open set $\operatorname{int}(U^c)\cap I^+(\Sigma)$. Push-up gives $r_-\ll x$. The open neighborhood $I^+(r_-)\cap I^+(\Sigma)$ of $x$ meets $U$, at $s$ say. Concatenate a timelike curve from $\Sigma$ to $r_-$ with one from $r_-$ to $s$. Past convexity [L2] puts this entire curve in $U$, contradicting $r_-\notin U$. Thus no such $r$ exists. The perturbation is to the past, so the push-up direction is valid. [L1, L2, L3, choose, contradiction]

2.1 (Boundary-to-boundary causal segments stay on the boundary.) Let $y\le x$ be future boundary points and let $\eta$ be a future causal segment from $y$ to $x$. Every point $z$ of the segment lies in $I^+(\Sigma)$: some $\sigma\in\Sigma$ has $\sigma\ll y\le z$. If $z\in U$, concatenate a timelike curve from $\Sigma$ to $y$ with the segment from $y$ to $z$; past convexity [L2] would give $y\in U$. If $z\in\operatorname{int}(U^c)$, step 1.2 with $z\le x$ gives a contradiction. Thus every point lies in $\partial U$. Achronality and [L3] further make every nonconstant such segment a null geodesic. [step 1.2, L1, L2, L3, contradiction]

3.1 (The actual last boundary parameter before the Cauchy crossing.) Set $B:=\{t\in[0,T]:\gamma(t)\in\partial U\}$. It is closed in the compact interval $[0,T]$, contains $[0,1]$ by step 2.1, and misses a neighborhood of $T$ because $\gamma(T)\in\Sigma\subseteq U$. Whenever $t\in B$, step 2.1 applied to $\gamma(t)\le\gamma(0)$ puts $[0,t]$ in $B$. Therefore $B=[0,b]$ for its maximum $b$, with $1\le b<T<\beta$. In particular the whole segment $\gamma([0,b])$ is future boundary, and no parameter in $(b,T]$ is a boundary parameter. This establishes the interval property instead of assuming it for a closed preimage. [step 1.1, step 2.1, L1, algebra]

4.1 (Follow only the initial connected component of corresponding points.) Let $J:=\{t\in[0,b]:\gamma(t)\in C\}$. It is relatively open and contains $0$ by [L5]. Define $s:=\sup\{t\in[0,b]:[0,t]\subseteq J\}$; relative openness at $0$ gives $s>0$, and every $0\le t<s$ belongs to $J$. On the interval $[0,s)$, the curve $f\circ\gamma=\Phi\circ\gamma$ is a past null affine geodesic by [L5]. Let $\eta$ be its unique maximal geodesic extension in $M'$, with the same parameter and initial data at $0$. Local uniqueness and connectedness give $\eta(t)=f(\gamma(t))$ for all $0\le t<s$; equivalently the interval solution itself is a restriction of the maximal solution. Each such value is a corresponding future boundary point, and hence belongs to $K':=J'^-(f(p_0))\cap J'^+(\Sigma')$, which is compact by [L6]. No connectedness of the entire open set $J$ has been assumed. [step 3.1, L4, L5, L6, construct]

5.1 (Continuation of the image at the first possible exit.) The right endpoint $\beta'$ of the maximal domain of $\eta$ satisfies $\beta'\ge s$. If $\beta'=s$, its tail $\eta([0,s))$ lies in $K'$. On the component containing that curve choose the auxiliary complete proper metric $h'$ from [L6]; $K'$ intersected with this component is compact, since connected components of a manifold are closed. Strong causality gives a uniform length bound for every subsegment $\eta([0,t])$, $t<s$. Taking the supremum of these integrals gives finite $h'$-length of the entire tail. Since $s\le b<\infty$, the compact-length affine extension theorem [L6] extends $\eta$ beyond $s$, a contradiction. Thus $\beta'>s$, and $\eta(s)$ is an actual smooth geodesic value with $\eta(t)\to\eta(s)$ as $t\uparrow s$. [step 4.1, L6, contradiction]

6.1 (The first exit is still corresponding.) As $t\uparrow s$, the corresponding pairs $(\gamma(t),\eta(t))$ converge to $(\gamma(s),\eta(s))$. Their source values lie in $\partial U$ and their target values in $\partial\varphi(U)$; both boundaries are closed. Step 3.1 already gives $\gamma(s)\in\partial U$, and closedness gives $\eta(s)\in\partial\varphi(U)$. For any neighborhoods of these two limits, sufficiently late values of the pair lie in both neighborhoods; [L7] then supplies an interior witness for the same neighborhoods. Hence the limit pair is corresponding, and $s\in J$. If $s<b$, relative openness gives an interval to the right of $s$ in $J$, which together with $[0,s]\subseteq J$ contradicts the definition of $s$. Therefore $s=b$, and $p:=\gamma(b)$ belongs to $C\cap I^+(\Sigma)$. In particular all of $[0,b]$ lies in $J$. The map used at boundary points throughout is $f$ or $\Phi$, never the interior map $\varphi$ evaluated off its domain. [step 3.1, step 4.1, step 5.1, L5, L7, contradiction]

7.1 (Expose the final boundary point.) Suppose a distinct $q\in J^-(p)\cap\partial U\cap J^+(\Sigma)$ existed. By step 2.1 a past causal segment from $p$ to $q$ is a null geodesic lying in the future boundary. Concatenate the past segment $\gamma|_{[0,b]}$ from $p_0$ to $p$ with this past segment from $p$ to $q$. If the two tangent rays at $p$ differ, the resulting corner and [L3] yield $q\ll p_0$, contradicting achronality [L2]. If they agree, rescale the second affine parameter by a positive constant to match the nonzero velocities at $p$. Uniqueness of the geodesic equation [L4] identifies a short initial portion of the second segment with $\gamma((b,b+\varepsilon])$, for some $0<\varepsilon<T-b$. That portion lies in $\partial U$ by step 2.1, contradicting step 3.1. Both alternatives are impossible. Thus $J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}$, with $p\in C\cap J^+(\Sigma)$ as required. [step 3.1, step 6.1, step 2.1, L2, L3, L4, contradiction] ∎

## Remarks

This proves the full claim of Sbierski's Lemma 3.9. The last boundary parameter is taken before the genuine Cauchy crossing. Propagation of correspondence follows its initial connected interval and uses compactness, strong-causality length control and affine ODE continuation in the primed development. The final corner would join the original point $p_0$ to $q$ timelikely; a corner-free segment instead contradicts the last boundary parameter. Neither geodesic completeness nor an isometry on exterior neighborhoods is assumed.
