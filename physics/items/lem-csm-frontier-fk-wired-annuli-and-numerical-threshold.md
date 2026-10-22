---
id: lem-csm-frontier-fk-wired-annuli-and-numerical-threshold
kind: lemma
title: "Wired FK annuli and the numerical self-dual threshold"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 5
deps:
  - lem-csm-frontier-fk-cylinder-pressure-comparison
  - lem-csm-frontier-fk-fkg-spatial-markov
  - thm-csm-frontier-fk-torus-rsw
  - lem-csm-frontier-fk-influence-threshold
  - lem-csm-frontier-fk-planar-duality
  - lem-csm-frontier-grid-crossings-intersect
  - thm-polygonal-jordan-curve
dependency_roles:
  lem-csm-frontier-fk-cylinder-pressure-comparison: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  thm-csm-frontier-fk-torus-rsw: mathematical-premise
  lem-csm-frontier-fk-influence-threshold: mathematical-premise
  lem-csm-frontier-fk-planar-duality: mathematical-premise
  lem-csm-frontier-grid-crossings-intersect: mathematical-premise
  thm-polygonal-jordan-curve: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Beffara and Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Sections 3–4, Proposition 10, Theorem 13, Lemmas 14–15 and Proposition 16; finite wired outer seed and numerical-limit formulation developed here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $q\geq1$ be real, $p\in(0,1)$, $\Lambda_n=[-n,n]^2\cap\mathbb Z^2$, and $\phi^b_{n,p,q}$ the finite square-lattice FK law with free boundary partition $b=0$ or wired partition $b=1$. All paths below use actual open lattice edges, not artificial wiring edges. For each cylinder event $A$ let $\pi^b_{p,q}(A)=\lim_{n\to\infty}\phi^b_{n,p,q}(A)$ be its numerical cylinder limit. Put $p_s=\sqrt q/(1+\sqrt q)$ and let $D_r$ be the cylinder event that $0$ connects inside $\Lambda_r$ to its vertex boundary. Then $a_n(p,q)=\phi^1_{n,p,q}(D_n)$ decreases, and
$$\Theta^1(p,q):=\lim_{n\to\infty}a_n(p,q)=\inf_{r\geq1}\pi^1_{p,q}(D_r).$$
For $p>p_s$, $\Theta^1(p,q)>0$; for $p<p_s$, $\Theta^1(p,q)=0$. Consequently $\inf\{p\in(0,1):\Theta^1(p,q)>0\}=p_s$. No value at $p_s$ is asserted. These numerical conclusions do not require Countable Choice or the extension of cylinder weights to an infinite-volume measure.

More precisely, fix $p>p_s$ and any real $\alpha>1$. Put $r_k=\lfloor\alpha^k\rfloor$. For all sufficiently large $k$, let $A_k$ be the cylinder event that an actual open simple circuit surrounds $\Lambda_{r_k}$, lies outside $\Lambda_{r_k}$ and strictly inside $\Lambda_{r_{k+1}}$, and is connected inside $\Lambda_{r_{k+2}}$ to its vertex boundary. There are $C,\varepsilon>0$ and an integer $K$ such that $d_k=C e^{-\varepsilon k}<1/2$ for $k\geq K$ and, for every $n\geq m\geq N\geq K$,
$$\phi^1_{r_{n+2},p,q}\left(\bigcap_{k=N}^{m}A_k\right)\geq\prod_{k=N}^{n}(1-d_k),\qquad \pi^1_{p,q}\left(\bigcap_{k=N}^{m}A_k\right)\geq1-\sum_{k=N}^{\infty}d_k.$$
For $0<p<t<1$ and $H_n$ the finite Hamming distance to $D_n$, the finite cylinder expectation satisfies
$$\pi^1_{p,q}(D_n)\leq\exp\{-4(t-p)\mathbb E_{\pi^1_{t,q}}H_n\}.$$
For every $0<s<p_s$ and every $d>0$, there are $C_d,n_d$ such that $\pi^1_{s,q}(D_n)\leq C_d n^{-(2d+4)}$ for $n\geq n_d$. The expectation here is a finite sum of cylinder atom weights.

## Statement references

[[lem-csm-frontier-fk-cylinder-pressure-comparison]]

[[lem-csm-frontier-fk-fkg-spatial-markov]]

[[thm-csm-frontier-fk-torus-rsw]]

[[lem-csm-frontier-fk-influence-threshold]]

[[lem-csm-frontier-fk-planar-duality]]

[[lem-csm-frontier-grid-crossings-intersect]]

[[thm-polygonal-jordan-curve]]

## Facts & Assumptions

**Given:** The finite FK laws for real $q\geq1$, their deterministic cylinder limits, and the finite torus RSW and influence interfaces in the cited suppliers.

[F1] Finite FK is positively associated, has the spatial Markov property, is increasing in parameter and boundary wiring, and has conditional edge-open probability at least $\rho=p/[p+q(1-p)]$ ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[F2] Numerical free/wired cylinder limits exist, are translation and quarter-turn invariant, obey parameter and boundary comparison, and agree outside an at most countable parameter set $J_q$ ([[lem-csm-frontier-fk-cylinder-pressure-comparison]]). These are numerical identities, not an assumed Borel extension.

[F3] Every fixed-aspect rectangle strictly inside a periodic torus has a uniform positive self-dual crossing probability ([[thm-csm-frontier-fk-torus-rsw]]).

[F4] The finite conditional-influence bound is that of [[lem-csm-frontier-fk-influence-threshold]].

[F5] Complement-edge planar duality has parameter $p^*/(1-p^*)=q(1-p)/p$ and includes the exterior-face convention ([[lem-csm-frontier-fk-planar-duality]]).

[F6] Opposite-direction grid crossings intersect, and simple polygonal circuits separate their bounded and unbounded components ([[lem-csm-frontier-grid-crossings-intersect]], [[thm-polygonal-jordan-curve]]).

## Proof

1.1 For an increasing event $B$ on a finite graph, differentiation of its finite FK weights gives $\phi'_p(B)=\operatorname{Cov}_p(\mathbf1_B,|\omega|)/[p(1-p)]$. Writing $u_e=\phi_p(e\text{ open})$ and $I_B(e)=\phi_p(B\mid e\text{ open})-\phi_p(B\mid e\text{ closed})$ yields $\phi'_p(B)=\sum_e u_e(1-u_e)I_B(e)/[p(1-p)]$. By [F1] the coefficients have a positive lower bound on a compact parameter interval inside $(0,1)$. On an $L$-torus a translation-invariant $B$ has equal influences on each of the two edge orbits, each of size $L^2$. Thus [F4] implies $\phi'_p(B)\geq c\phi_p(B)(1-\phi_p(B))\log L$. Integrating its logistic derivative between $p_s$ and fixed $p>p_s$ shows that $\phi_{p_s}(B)\geq b>0$ implies $1-\phi_p(B)\leq C L^{-\eta}$, with constants independent of $L$. [F1, F4, algebra]

1.2 We specify the finite stopping operation used for an outer circuit. In a finite ambient box list all simple circuits disjoint from $\Lambda_{r_{k+1}}$, strictly inside $\Lambda_{r_{k+2}}$, and surrounding the inner square. For a candidate $\gamma$, let $I(\gamma)$ be the edges whose relative interiors lie in its bounded component, including edges entering that component from circuit vertices. Let $O(\gamma)$ contain all other ambient edges, including circuit edges. The event selecting $\Gamma=\gamma$ is: every edge of $\gamma$ is open and there is no surrounding open circuit in $O(\gamma)$ whose bounded interior strictly contains that of $\gamma$. These tests involve only $O(\gamma)$. To verify that exactly one candidate is selected whenever a surrounding circuit exists, splice any exterior excursion of another surrounding circuit with the outer arcs of $\gamma$, keeping the unbounded face on the outside, and erase subloops not surrounding the inner square. This gives a surrounding circuit in the union, on or outside $\gamma$, with strictly larger interior if that excursion protrudes. Applying this finite operation to all candidates yields an outermost circuit; two different maximal circuits would enlarge each other by the same surgery. Equal interiors have the same Jordan boundary. Thus the selected candidate is unique. For each output $(\gamma,\tau)$, where $\tau$ is the full assignment on $O(\gamma)$, the output fiber is precisely the fixed-exterior cylinder $\{\omega|_{O(\gamma)}=\tau\}$ if $\tau$ passes the tests, and is empty otherwise. Every interior assignment is admitted. This fiber identity, rather than a claim about a particular probing order, certifies that conditioning on the output never conditions an interior edge. [F6, construct]

1.3 For $m\geq r$, reaching $\partial\Lambda_m$ entails $D_r$, and wired domain comparison gives $a_m\leq\phi^1_{m,p,q}(D_r)\leq a_r$. In particular $a_n$ decreases, so $\Theta^1=\inf_n a_n$ exists. Taking $m\to\infty$ in the displayed inequalities gives $\Theta^1\leq\pi^1_{p,q}(D_r)\leq a_r$. Infimizing over $r$ proves $\Theta^1=\inf_r\pi^1_{p,q}(D_r)$. This is a pair of real inequalities, not an exchange of two limits. [F1, F2, algebra]

1.4 On a finite edge set and for an increasing event $D$, its Hamming distance $H_D$ is the minimum number of closed edges to open to enter $D$. Opening one coordinate lowers it by zero or one; hence $|\omega|+H_D$ is increasing, $H_D$ is decreasing, and $H_D\mathbf1_D=0$. Finite differentiation and FKG give $\frac{d}{dp}\phi_p(D)=\{\operatorname{Cov}_p(\mathbf1_D,|\omega|+H_D)+\phi_p(D)\mathbb E_pH_D\}/[p(1-p)]\geq4\phi_p(D)\mathbb E_pH_D$. Integrate from $p$ to $t>p$ and use monotonicity of the decreasing $H_D$ to obtain $\phi_p(D)\leq\exp\{-4(t-p)\mathbb E_tH_D\}$. Apply this to $D_n$ in wired $\Lambda_m$ with $m>n$ and take $m\to\infty$. Both sides involve only fixed finite cylinder sums, proving the claimed Hamming inequality. [F1, F2, algebra]

1.5 We derive the exact numerical free/wired duality from a concrete free plane graph. Let $H_m$ be the free rectangular grid on the $(2m)^2$ unit-cell centers of $\Lambda_m$. Each bounded face of $H_m$ surrounds one interior vertex of $\Lambda_m$; its one unbounded face represents all vertices of $B_m$ identified together. A dual edge of $H_m$ crosses exactly one nonperimeter edge of $\Lambda_m$, with precisely those interior-vertex or boundary-class endpoints. Thus $H_m^*$ is the wired quotient graph with the perimeter edge labels omitted. Each omitted perimeter edge is a loop after wiring, so its open/closed weight sums to $p+(1-p)=1$ independently and changes no retained-edge law. Apply [F5] to the connected free plane graph $H_m$ at parameter $t^*$, whose dual parameter is $t$. The inverse complement bijection sends the wired retained-edge law at $t$ to the free law on $H_m$ at $t^*$. This proves the finite identity before taking any limit; the exterior face is one of the wired-quotient vertices, not an additional cell-center vertex. The cell-center grids exhaust the translated dual lattice, and, after its fixed half-unit identification with $\mathbb Z^2$, lie between centered boxes with radii differing by a fixed constant. Finite domain comparison and [F2] therefore give, for every dual cylinder $E$, $\pi^1_{t,q}(\text{dual-complement }E)=\pi^0_{t^*,q}(E)$. This is a numerical cylinder identity, not a claim of an unconstructed infinite law. [F1, F2, F5, construct, algebra]

2.1 To turn this estimate into a bound for one specified rectangle, first take width $2u$, height $2bu$ with integer $b\geq1$, and torus side $L=16b^2u$. Let $B$ mean that some translate of a width-$u$, height-$L/2$ rectangle has a vertical crossing. It is translation invariant and has self-dual probability bounded below by [F3], since its fixed aspect is $8b^2$ and its height is strictly less than $L$. Every such narrow strip is contained horizontally in one of the width-$2u$ strips starting on the $u$-grid, and its height interval contains a full height-$2bu$ band starting on the $2bu$-grid. Its crossing therefore crosses one of $M=(L/u)(L/(2bu))$ fixed translates of the target rectangle. Wrapping translates are lifted to the plane for this containment. If their crossing events are $B_i$, positive association of their decreasing complements gives $(1-\phi_p(B_1))^M\leq\phi_p(\bigcap_iB_i^c)\leq\phi_p(B^c)$. Step 1.1 proves $\phi_p(B_1)\geq1-Cu^{-\eta/M}$. The number $M$ is independent of $u$. [F1, F3, F6, step 1.1, construct]

3.1 For a rectangle of width $w$ and height $h$ with $1\leq h/w\leq\beta$, take $u=\lfloor w/2\rfloor$ and a fixed integer $b$ depending only on $\beta$ with $2bu\geq h$. A crossing of the narrower, taller rectangle restricts to a crossing of the target. Rotating handles the other orientations. A fixed enlargement of $L/u$ in step 2.1 preserves the proof and accommodates any surrounding planar box of size comparable to $w$. Condition that torus law on all edges outside the box; its induced partition is bounded above by the wired partition. Hence the wired box gives the specified rectangle a crossing probability at least $1-Cw^{-\delta}$. The finitely many small widths are absorbed into $C$. [F1, step 2.1, construct, algebra]

4.1 Fix $\alpha>1$. For large $k$ put $a=r_k+2$, $b=r_{k+1}-2$, $R=r_{k+2}$. Use vertical crossings of $[a,b]\times[-b,b]$ and $[-b,-a]\times[-b,b]$, horizontal crossings of $[-b,b]\times[a,b]$ and $[-b,b]\times[-b,-a]$, and a horizontal crossing of $[-R,R]\times[-b,b]$. In each corner square the adjacent side crossings intersect by [F6]; their union contains a surrounding closed walk, from which erasing nonsurrounding loops gives a simple circuit. The last crossing intersects the two vertical sides and connects that circuit to the outer boundary. All widths are comparable to $\alpha^k$ and all aspects are fixed. Step 3.1 and a union bound give $\phi^1_{r_{k+2},p,q}(A_k)\geq1-d_k$ with $d_k=C e^{-\varepsilon k}$. Enlarge $K$ until $b>a$ and $d_k<1/2$ for $k\geq K$. [F6, step 3.1, construct, algebra]

5.1 Suppose $A_{k+1},\ldots,A_n$ hold. Apply step 1.2 to the next annulus. The selected $\Gamma$ has an outgoing open connection to $\partial\Lambda_{r_{k+3}}$: an outgoing path from any surrounding circuit meets $\Gamma$. These outer events are measurable in its returned exterior data. For $A_{k+1}$ one may use $\Gamma$ itself, and any path excursion inside it can be replaced by an open circuit arc; circuits of $A_j$ for $j\geq k+2$ are outside it. On each output fiber, [F1] gives the interior FK law with all vertices of $\Gamma$ wired together by its actual open edges. Let $G_k(\Gamma)$ mean that a circuit of the inner annulus connects to $\Gamma$ inside its bounded domain. In wired $\Lambda_{r_{k+2}}$, $A_k$ implies $G_k(\Gamma)$ by separation, even when the fixed geometric $\Gamma$ is not open in that comparison law. Wired FK inside $\Gamma$ dominates the restriction of wired FK on the larger square. Step 4.1 therefore gives conditional probability at least $1-d_k$ for $G_k(\Gamma)$. Its connection then follows the already exposed outgoing path through $\Gamma$ to $\partial\Lambda_{r_{k+2}}$, giving $A_k$. Averaging the exterior fibers proves $P(A_k\mid A_{k+1},\ldots,A_n)\geq1-d_k$. No square boundary is asserted to be wired in the random configuration. [F1, F6, step 4.1, step 1.2, construct]

6.1 Start in wired $\Lambda_{r_{n+2}}$, where $A_n$ has probability at least $1-d_n$, and descend using step 5.1. This proves the finite product bound for $\bigcap_{k=N}^n A_k$, and hence for $\bigcap_{k=N}^m A_k$. For fixed $m$, take the deterministic outer-box limit along $n\to\infty$; finite additivity and $\prod_{k=N}^n(1-d_k)\geq1-\sum_{k=N}^n d_k$ prove the stated cylinder lower bound. No probability of an infinite intersection or measure extension is used. [F2, step 4.1, step 5.1, algebra]

7.1 For $p>p_s$ choose $N\geq K$ with $\sum_{k\geq N}d_k\leq1/2$. Fix a deterministic nearest-neighbor tree containing all vertices of $\Lambda_{r_{N+1}}$; if it has $M_0$ edges, its all-open event $T$ has probability at least $\rho^{M_0}$ by successive edge conditioning. Finite FKG and step 6.1 give $\phi^1_{r_{n+2},p,q}(T\cap\bigcap_{k=N}^m A_k)\geq\rho^{M_0}/2$ for $n\geq m\geq N$. Consecutive circuits connect because an outgoing path meets the next surrounding circuit. For any prescribed $R$, take the least $m\geq N$ with $r_{m+2}>R$; this finite chain and the tree imply $D_R$. Taking only the outer-box limit gives $\pi^1_{p,q}(D_R)\geq\rho^{M_0}/2$ for every $R$, with the same constant. Step 1.3 proves $\Theta^1(p,q)>0$. [F1, F2, F6, step 6.1, step 1.3, construct]

7.2 Fix $0<s<p_s$ and choose one $t\in(s,p_s)$ such that $t^*\notin J_q$. The preimage of $J_q$ under the explicit dual bijection is countable. A point outside it can be specified without Countable Choice: enumerate that exceptional set, start with a rational closed interval inside $(s,p_s)$, and recursively take the first smaller rational closed interval in a fixed enumeration which avoids the next exceptional point and has diameter at most half the previous diameter. Its unique limit lies outside the exceptional set. Since $t^*>p_s$, step 6.1 at the dual parameter, for any chosen $\alpha>1$, supplies $N$ such that every finite intersection of dual annulus events with indices from $N$ onward has numerical wired weight at least $1/2$. By equality of the free/wired cylinder weights at $t^*$ and step 1.5, the same finite dual-circuit intersections have primal wired cylinder weight at least $1/2$ at $t$. [F2, step 6.1, step 1.5, construct]

8.1 Retain every other annulus, so its dual circuits have disjoint edge supports. Among the annuli strictly inside $\Lambda_{n-2}$ there are at least $(\log n)/(2\log\alpha)-O(N+1)$ retained circuits; the fixed dual-lattice translation changes only the cutoff. Every primal path realizing $D_n$ must cross each such circuit at a distinct closed primal edge. On the finite cylinder supporting these circuits and $H_n$, multiply this pointwise inequality by its nonnegative atom weights and sum. Step 7.2 gives $\mathbb E_{\pi^1_{t,q}}H_n\geq(\log n)/(8\log\alpha)$ for large $n$. Taking $\log\alpha=(t-s)/(4d+8)$ in step 1.4 gives $\pi^1_{s,q}(D_n)\leq n^{-(2d+4)}$ for sufficiently large $n$, proving the claimed bound after enlarging $C_d$. In particular these probabilities tend to zero, so step 1.3 yields $\Theta^1(s,q)=0$. All intersections and expectations used here are finite. [F6, step 1.3, step 1.4, step 7.2, algebra]

9.1 Every parameter strictly above $p_s$ belongs to the set defining the numerical threshold by step 7.1, and none strictly below belongs by step 8.1. Its infimum is therefore $p_s$. The proof never assigns a value at $p_s$ and never invokes an infinite-volume probability measure or Countable Choice. [step 7.1, step 8.1, algebra] ∎
