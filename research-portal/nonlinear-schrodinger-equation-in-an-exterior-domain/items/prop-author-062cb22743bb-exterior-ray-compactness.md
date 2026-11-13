---
id: prop-author-062cb22743bb-exterior-ray-compactness
kind: proposition
domain: mathematics
title: Closed compactness of arbitrary exterior generalized-ray segments
status: published
deps:
  - prop-se-generalized-ray-contract
  - def-se-geometry
  - lem-author-062cb22743bb-compact-phase
  - lem-author-062cb22743bb-speed-confinement
  - math:thm-metric-compactness-equivalences
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:thm-open-connected-subsets-of-rn-are-polygonally-connected
  - math:thm-path-connected-implies-connected
  - math:thm-heine-borel-rn
  - math:lem-uniform-metric-on-a-function-space
  - math:prop-compact-open-is-uniform-on-a-compact-metric-domain
  - math:def-compact-open-topology
  - math:thm-extreme-value-metric
  - math:cor-mean-value-theorem
  - math:thm-chain-rule-for-total-derivatives
dependency_roles:
  prop-se-generalized-ray-contract: mathematical-premise
  def-se-geometry: mathematical-premise
  lem-author-062cb22743bb-compact-phase: mathematical-premise
  lem-author-062cb22743bb-speed-confinement: mathematical-premise
  math:thm-metric-compactness-equivalences: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  math:thm-open-connected-subsets-of-rn-are-polygonally-connected: mathematical-premise
  math:thm-path-connected-implies-connected: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
  math:lem-uniform-metric-on-a-function-space: mathematical-premise
  math:prop-compact-open-is-uniform-on-a-compact-metric-domain: mathematical-premise
  math:def-compact-open-topology: mathematical-premise
  math:thm-extreme-value-metric: mathematical-premise
  math:cor-mean-value-theorem: mathematical-premise
  math:thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Herbert Koch and Daniel Tataru, On the Spectrum of Hyperbolic Semigroups,
        Comm. PDE 20 (1995), 901–937
      url: https://www.researchgate.net/publication/233138893_On_the_Spectrum_of_Hyperbolic_Semigroups
      locator: "Author-uploaded full text: introduction, manifold/symbol setup and
        negative-inside defining function before (0.3), continuation paragraph
        after (P),(B),(H); §1 compressed-coordinate construction, (1.5),
        Definition 1.1, (1.6), Proposition 1.2(a),(b), and Proposition 1.4"
      statement: Definition 1.1 requires locally Lipschitz compressed coordinates,
        interior Hamilton evolution, and nondiffractive tangential evolution at
        boundary cluster points, with physical time as parameter. Formula (1.5)
        identifies the tangential field. Proposition 1.2(a) conserves temporal
        frequency and energy; (b) gives compactness of all fixed-interval
        generalized bicharacteristics from a compact initial set, with
        generalized-bicharacteristic limits. The introduction states indefinite
        continuation.
      hypotheses: Smooth compact connected Riemannian manifold with smooth boundary,
        dimension at least two, with stationary wave symbol -tau^2+g^{ij}xi_i
        xi_j. Proposition 1.2 uses Definition 1.1; its compactness assertion
        does not assume uniqueness or exclude infinite-order contact.
        Proposition 1.4 separately assumes uniqueness.
      reading_limits: "Read the author-uploaded ResearchGate full-text HTML:
        introductory geometry, wave symbol, negative-inside defining function,
        continuation paragraph, §1 compressed coordinates, (1.5), Definition
        1.1, (1.6), Proposition 1.2(a),(b), and the separate uniqueness
        assumption in Proposition 1.4. The upload is dated February 8, 2024. No
        journal PDF/version identity or proofs in references [5],[9] were
        checked. Compactness and conservation are imported. The compatibility
        argument below is locally authored, not attributed to a checked
        equivalence theorem."
proof_strategy: direct
dependency_level: 2
---

## Statement

Assume Countable Choice and Dependent Choice. Let $n\ge2$ and let $\Theta\subset\mathbb R^n$ be a smooth compact obstacle with connected exterior $\Omega=\mathbb R^n\setminus\Theta$, without a finite-contact assumption. Fix $R>0$ with $\Theta\subset B_R(0)$ and $0\le T<\infty$. For every sequence of normalized unit-speed generalized rays $q_j$ on $[0,T]$ with $|x_j(0)|\le R$, there is a subsequence converging uniformly in compressed phase on $[0,T]$ to another admissible normalized unit-speed generalized ray with $|x(0)|\le R$. All choices of rays at infinite-order contact are included.

Here is the precise uniform-convergence convention. Put $S=R+T$ and $K_S=\overline\Omega\cap\overline B_S(0)$. Let $\mathcal K_S$ be the compressed image of $\{(0,x,-1,\xi):x\in K_S,\ |\xi|=1\}$. Choose any metric $d$ inducing its compressed topology. Suppress the time coordinate of each ray by the stationary identification with time zero, so $q_j:[0,T]\to\mathcal K_S$. Uniform convergence means convergence for the metric $\rho(f,g)=\sup_{0\le t\le T}\min\{d(f(t),g(t)),1\}$ on $C([0,T],\mathcal K_S)$. The phase set is compact and metrizable, and the rays take values in it, as justified below.

## Facts & Assumptions

[F1] Use the geometry of [[def-se-geometry]] and the compressed-ray rules of [[prop-se-generalized-ray-contract]]. Only smoothness and connectedness of the exterior are used; non-trapping is not assumed here. Stationarity identifies the compressed phase at time $t$ with the phase at time zero by replacing $t$ by $0$.

[F2] Closed bounded spatial sets are compact by [[math:thm-heine-borel-rn]]. For compact spatial $K$, [[lem-author-062cb22743bb-compact-phase]] supplies a compact metrizable normalized compressed phase set and continuous base projection.

[F3] Under Countable Choice and Dependent Choice ([[math:def-countable-choice]], [[math:def-dependent-choice]]), [[lem-author-062cb22743bb-speed-confinement]] gives $|x(t)-x(s)|\le|t-s|$, the bound $|x(t)|\le R+t$, and compatibility with a distant artificial sphere.

[F4] A connected open Euclidean set is polygonally connected by [[math:thm-open-connected-subsets-of-rn-are-polygonally-connected]]. Path-connected spaces are connected by [[math:thm-path-connected-implies-connected]].

[F5] For a nonempty set $X$ and a metric target $(Y,d)$, [[math:lem-uniform-metric-on-a-function-space]] makes $\sup_{t\in X}\min\{d(f(t),g(t)),1\}$ a metric on all maps, hence also on continuous maps.

[F6] On a nonempty compact metric domain, [[math:prop-compact-open-is-uniform-on-a-compact-metric-domain]] identifies the compact-open topology on continuous maps into any metric target with this uniform metric topology.

[F7] [[math:thm-metric-compactness-equivalences]] gives sequential compactness of a compact metric family under the stated Countable Choice and Dependent Choice hypotheses. These hypotheses are retained from that supplier and [F3]; no claim that both are necessary for this implication is made.

[F8] The compact-open subbasis is $S(A,V)=\{f:f[A]\subseteq V\}$ for compact $A$ in a metric domain and open $V$ in an arbitrary topological target, by [[math:def-compact-open-topology]].

[F9] [[math:thm-extreme-value-metric]] bounds a continuous scalar function on a nonempty compact metric set and supplies its extrema. [[math:cor-mean-value-theorem]] applies to scalar functions continuous on a closed interval and differentiable in its interior. [[math:thm-chain-rule-for-total-derivatives]] gives the derivative of a smooth coordinate composition. These are used for the local compatibility argument, including interval minima and one-sided derivative limits.


Koch–Tataru, §1 Definition 1.1, requires a physical-time curve with Lipschitz compressed coordinates, classical Hamilton evolution in the interior, and tangential evolution at boundary cluster points satisfying its nondiffractive sign condition. Their defining function $\phi$ is negative in the domain. Formula (1.5) specifies the tangential field $H'_p$. Proposition 1.2(a),(b) supplies conservation and compactness, including generalized-bicharacteristic limits, for that convention on a smooth compact connected Riemannian manifold with boundary. The introduction states indefinite continuation. Proposition 1.4 separately assumes uniqueness; it is not used. Compatibility with the declared ray contract is proved locally below, rather than imported as an unverified equivalence.

## External input

Koch–Tataru, §1 Definition 1.1, requires a physical-time curve with Lipschitz compressed coordinates, classical Hamilton evolution in the interior, and tangential evolution at boundary cluster points satisfying its nondiffractive sign condition. Their defining function $\phi$ is negative in the domain. Formula (1.5) specifies the tangential field $H'_p$. Proposition 1.2(a),(b) supplies conservation and compactness, including generalized-bicharacteristic limits, for that convention on a smooth compact connected Riemannian manifold with boundary. The introduction states indefinite continuation. Proposition 1.4 separately assumes uniqueness; it is not used. Compatibility with the declared ray contract is proved locally below, rather than imported as an unverified equivalence.

## Proof

**Given:** The arbitrary sequence of normalized exterior segments and the fixed $R,T$. **Goal:** An admissible uniformly convergent subsequence with the same initial bound and without a uniqueness assumption.

1.1 Choose $L>R+T+1$ and put $D=B_L(0)\setminus\Theta$. The smooth-obstacle charts and the separated outer sphere make $\overline D$ a smooth manifold with boundary $\partial\Theta\cup\partial B_L(0)$, and it is compact by Heine–Borel. To check connectedness explicitly, choose $r$ with $R<r<L$. The open connected exterior is polygonally connected by [F4]. A point $a\in D$ with $|a|<r$ can therefore be joined in the exterior to a point with radius greater than $r$; restrict that path up to its first hit of the closed sphere of radius $r$. This prefix stays in $D$. Points already of radius at least $r$ lie in the annulus $r\le|x|<L$. That annulus is path connected: move radially to radius $r$ and join directions by normalized straight segments on the unit sphere, inserting a perpendicular unit direction when they are antipodal, which is possible for $n\ge2$. Thus $D$ is path connected. Each boundary point joins $D$ along a short inward normal segment, so $\overline D$ is path connected and hence connected by [F4]. It therefore has the compact connected manifold geometry required by the external input. [F1, F2, F4, choose, construct]

1.2 For $a\in\{R,S\}$ the set $K_a=\overline\Omega\cap\overline B_a(0)$ is closed and bounded, hence compact by Heine–Borel. Apply [F2] to obtain its compact metrizable normalized compressed phase set $\mathcal K_a$ and continuous base projection. In particular $\mathcal K_R$ is a compact initial phase set and $\mathcal K_S$ supplies the target and the compatible metric $d$ in the Statement. Since compression is independent of time and leaves the time coordinate unchanged, the normalized target over $[0,T]$ is $[0,T]\times\mathcal K_S$ with its product topology and metric $\Delta((t,z),(s,w))=|t-s|+d(z,w)$. These identifications agree with the source's local coordinates $(t,x;\tau,\xi',x_n\xi_n)$ in every interior and obstacle-boundary chart. [F1, F2, construct]

1.3 Establish the local coordinate correspondence before applying compactness. In a boundary normal chart write $u=y_n\ge0$, $v=\eta_n$, $r_1=\partial_u r|_{u=0}$ and $z=uv$; tangential coordinates include time. For $\tau=-1$ physical-time normalization divides both Hamilton fields in [F1] by $2$. The interior equations are $\dot u=v$, $\dot v=-\partial_u r/2$, $\dot y'=\partial_{\eta'}r/2$, and $\dot\eta'=-\partial_{y'}r/2$. Thus $\dot z=v^2-u\partial_u r/2$. At glancing $u=v=0$, the field $H_{r_0}/2$ has the same tangential components and zero normal components. Use $\phi=-u$ to match the source's negative-inside convention. Then $\{p,\{p,\phi\}\}=2r_1$ at glancing, and (1.5) gives $H'_p=H_p+r_1\partial_v=H_{r_0}$ there. In particular $H_p=H_{r_0}$ at every glancing point with $r_1=0$, including all higher-order and infinite-order points. These are direct coordinate calculations using [F1] and the chain rule in [F9]. The imported Definition 1.1 consequently requires $r_1\ge0$ at boundary cluster points and derivative $H_{r_0}/2$ there. [F1, F9, algebra]

2.1 First take a normalized ray segment in the declared convention. Its compressed curve is continuous by [F1]. On any smaller chart neighborhood with compact closure the normalized characteristic lifts are bounded, and the smooth coefficients and their first derivatives are bounded by Heine–Borel and [F9]. The equations in step 1.3 therefore uniformly bound the derivatives of all compressed coordinate components off reflection times. This remains true at glancing: use $H_{r_0}/2$ or $H_p/2$ as prescribed. Differentiability off the reflection set extends to the compressed continuous extension at its missing isolated times when taking a derivative at a nonreflection time: the first-order difference-quotient bound on the dense complement passes to the missing times by continuity. At a reflection time itself, its adjacent interior intervals and the prescribed one-sided phase limits give a bounded right derivative of each compressed coordinate, using the outgoing lift in the equations of step 1.3; the analogous left derivative also exists. Thus every scalar compressed coordinate $f$ has $|f'_+|\le M$ on any closed time interval lying in this smaller chart. To prove the required Lipschitz estimate without assuming finitely many reflections, take $a<b$ in that interval and $\varepsilon>0$. If $f(b)-f(a)>(M+\varepsilon)(b-a)$, the continuous function $g(t)=f(t)-(M+\varepsilon)t$ has an attained minimum at some $c<b$, by [F9]. Its right derivative must be nonnegative there, contradicting $g'_+(c)\le-\varepsilon$. Apply the same reasoning to $-f$ and let $\varepsilon$ decrease to zero. Each coordinate is Lipschitz, which is precisely Definition 1.1(i), locally in compressed coordinates. [F1, F2, F9, step 1.3]

2.2 Conversely take a normalized source segment. At any glancing time the full covector has a unique continuous lift: compressed continuity gives $(y,\eta')$ and the characteristic identity $v^2=-r(y,\eta')$ gives $v\to0$. A hyperbolic contact is isolated among boundary times by Definition 1.1(iii). On its adjacent interior intervals, the characteristic identity yields the two nonzero normal limits, and $u\ge0$ forces the incoming limit to be negative and the outgoing limit positive. They have equal tangential covectors and opposite normal covectors, giving the reflection rule in [F1]. At a boundary cluster time the derivative required by Definition 1.1(iii) is $H'_p/2=H_{r_0}/2$, with $r_1\ge0$; if $r_1=0$ this also equals $H_p/2$, so the higher-order diffractive rule agrees as well. At an isolated glancing time, the adjacent interior phase derivatives converge to the same $H_p/2$ value. Applying the mean value theorem to each full coordinate on either side shows that its derivative at the contact equals this common limit. Such an isolated contact cannot have $r_1>0$: otherwise $\dot v=-\partial_u r/2<0$ nearby, so $v(t)<0$ just after contact and $\dot u=v$ would give $u(t)<0$. For $r_1<0$ the contact is second-order diffractive, while for $r_1=0$ the two possible fields coincide. Hence the derivative agrees with [F1] at every glancing time. Removing exactly the isolated hyperbolic contact times gives the differentiable characteristic map and all local rules required there; its compressed extension is the original continuous curve. The same statements at segment endpoints are one-sided. This proves the reverse inclusion and admissibility of source limits in the declared convention, including at infinite-order contact. [F1, F9, step 1.3]

3.1 Check the remaining forward boundary condition. A boundary cluster time $t_0$ cannot be a reflection time, since [F1] gives an interior punctured neighborhood at every reflection. It is therefore glancing. Suppose $r_1(t_0)<0$. The ray rule there is $H_p/2$, so differentiability off the reflection set gives $v(t)=c(t-t_0)+o(|t-t_0|)$ with $c=-r_1(t_0)/2>0$. If reflection times $b_k$ accumulated at $t_0$, their opposite one-sided normal limits would both satisfy $v(b_k\pm0)=c(b_k-t_0)+o(|b_k-t_0|)$: take limits in the differentiability estimate at $t_0$ along the two adjacent interior intervals. Adding those opposite limits contradicts $c>0$. Hence there is no reflection near $t_0$. Shrink the neighborhood so $\partial_u r<0$. All its glancing points are then second-order diffractive, so the entire curve there follows the smooth interior field, including its glancing points. The expansion for $v$ and $\dot u=v$ show that $u(t)>0$ on both punctured sides of $t_0$: apply the scalar mean value theorem in [F9] to $u$ between $t_0$ and $t$, noting that $v$ has the sign of $t-t_0$ throughout that punctured side. This contradicts boundary clustering. Thus $r_1(t_0)\ge0$. When $r_1>0$ the contract prescribes $H_{r_0}/2$; when $r_1=0$ both possible fields coincide by step 1.3. This is exactly Definition 1.1(iii). Its interior condition (ii) follows from the smooth interior equations. Every declared segment therefore belongs to the source family. [F1, F9, step 1.3, step 2.1]

4.1 By [F3] every prescribed exterior segment stays in $|x|\le S<L-1$ and is also a segment in $D$. Conversely consider any normalized generalized segment in $D$ starting in $\mathcal K_R$. Conservation in the external input retains $\tau=-1$ and unit spatial covectors. Before a possible first contact with the artificial sphere, its charts are exterior charts, so [F3] gives $|x(t)|\le R+t\le S$. At a first contact time $t_*$ continuity would give $L=|x(t_*)|\le R+t_*\le S<L$, a contradiction. Thus the entire segment stays away from that sphere, obeys the exterior rules, and has time-suppressed values in $\mathcal K_S$. Steps 2.1, 2.2 and 3.1 identify both ray conventions on these charts. In particular the full family of $D$-segments starting in $\mathcal K_R$, rather than an arbitrarily chosen subset, is the family of exterior segments in question. [F1, F3, step 1.1, step 1.2, step 3.1, step 2.2]

5.1 The interval $[0,T]$ is nonempty and compact by Heine–Borel, including when $T=0$. By [F5], the formula for $\rho$ in the Statement is a metric on $C([0,T],\mathcal K_S)$. By [F6], it induces the compact-open topology. Apply the same two suppliers to the product target of step 1.2: for two ray graphs $t\mapsto(t,f(t))$ and $t\mapsto(t,g(t))$, their truncated uniform $\Delta$-distance is exactly $\rho(f,g)$, because the compared times coincide. For curves with values in the common target $Z=[0,T]\times\mathcal K_S$, apply [F8] with the metric domain $[0,T]$ and the compressed bundle as topological target. A subbasic set $S(A,V)$ restricts to $S(A,V\cap Z)$; conversely every relatively open set in $Z$ equals $V\cap Z$ for an ambient open $V$. This checks both subbasis inclusions, with no metrizability requirement on the ambient bundle. Thus the subspace curve topology from the compressed bundle agrees with the target's compact-open topology. The source's topology of continuous compressed-bundle curves is therefore precisely this metric topology on the family in step 4.1. The identification is intrinsic to the compressed topology: each compatible choice of $d$ gives the same compact-open topology by [F6]. [F2, F5, F6, F8, step 1.2, step 4.1]

6.1 For $T>0$, apply Koch–Tataru Proposition 1.2(b), as recorded in the External input, to the full family of $D$-segments from the compact initial set $\mathcal K_R$. It is compact in the topology identified in step 5.1. By steps 2.1, 2.2 and 3.1, its members and its limits have exactly the declared admissibility. Apply [F7], with the stated Countable Choice and Dependent Choice assumptions, to obtain a $\rho$-convergent subsequence of the prescribed sequence. Conservation from Proposition 1.2(a) keeps its limit normalized. By step 4.1 every member of this compact family is confined to $|x|\le S<L-1$ and is an exterior segment, and its initial base satisfies $|x(0)|\le R$. When $T=0$, apply [F7] directly to the compact metric initial set $\mathcal K_R$ from step 1.2; its convergent subsequence is exactly the required convergence of singleton-interval segments. Thus the conclusion holds for every finite interval. Compactness is applied to all admissible segments, including every continuation at infinite-order contact; no selected flow map or uniqueness assumption is used. [F1, F7, step 1.1, step 1.2, step 3.1, step 2.2, step 4.1, step 5.1] ∎
