---
id: lem-csm-frontier-fk-crossing-amplification
kind: lemma
title: "Crossing sharpness and subcritical decay for square-lattice FK"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-csm-frontier-fk-real-boundaries
  - def-csm-frontier-fk-infinite-volume-states
  - lem-csm-frontier-fk-free-wired-limits
  - lem-csm-frontier-fk-fkg-spatial-markov
  - lem-csm-frontier-fk-influence-threshold
  - lem-csm-frontier-fk-planar-duality
  - thm-csm-frontier-fk-torus-rsw
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  def-csm-frontier-fk-infinite-volume-states: mathematical-premise
  lem-csm-frontier-fk-free-wired-limits: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  lem-csm-frontier-fk-influence-threshold: mathematical-premise
  lem-csm-frontier-fk-planar-duality: mathematical-premise
  thm-csm-frontier-fk-torus-rsw: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Sections 3–4: Theorems 12–13, Propositions 10 and 16, Lemmas 14–15, and the proof of Theorem 2."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapters 4 and 6: free/wired limits, planar sharpness route, and subcritical finite-size estimates."
verification:
  precheck: pending
---

## Statement

Put $p_{\rm sd}(q)=\sqrt q/(1+\sqrt q)$. Assume the periodic-torus crossing estimates at $p_{\rm sd}(q)$ from [[thm-csm-frontier-fk-torus-rsw]], the influence inequality from [[lem-csm-frontier-fk-influence-threshold]], and the following two unresolved inputs. First, the source's wired-boundary path construction must convert the polynomial high-probability torus crossing estimates into $\theta^1(p,q)>0$ for every $p>p_{\rm sd}(q)$. Second, its subcritical finite-size/Hamming-distance argument, including the greedy-lattice-animal bound, must give constants $C,c>0$ such that $\phi^1_{p,q}(x\leftrightarrow y)\leq C e^{-c\lVert x-y\rVert_2}$ for $p<p_{\rm sd}(q)$. Under these hypotheses, both conclusions hold. In particular, $p_c^1(q)=p_{\rm sd}(q)$, where $p_c^1$ is defined in [[def-csm-frontier-fk-infinite-volume-states]].

The same hypotheses imply the identical free threshold if, in addition, the planar free/wired threshold-coincidence input recorded below is supplied. They do not assert equality of the free and wired measures at $p=p_{\rm sd}(q)$.

## Statement references

[[def-csm-frontier-fk-infinite-volume-states]]

[[lem-csm-frontier-fk-free-wired-limits]]

[[lem-csm-frontier-fk-fkg-spatial-markov]]

[[lem-csm-frontier-fk-influence-threshold]]

[[thm-csm-frontier-fk-torus-rsw]]

## Facts & Assumptions

**Given:** $q\geq1$, $p\in(0,1)$, the square-lattice free and wired cylinder-limit FK states, and the finite torus crossing and influence estimates at $p_{\rm sd}(q)$.

[F1] The finite FK weights and boundary partitions are those of [[def-csm-frontier-fk-real-boundaries]].

[F2] The finite conditional edge law, FKG inequality, and monotonicity in $p$ and boundary wiring are proved in [[lem-csm-frontier-fk-fkg-spatial-markov]].

[F3] The square-lattice wired state exists as the cylinder limit of wired box laws; arbitrary boundary-condition limits lie between the free and wired states on increasing cylinder events ([[def-csm-frontier-fk-infinite-volume-states]], [[lem-csm-frontier-fk-free-wired-limits]]).

[F4] The periodic-torus crossing estimate is the statement of [[thm-csm-frontier-fk-torus-rsw]].

[F5] For $p\in[\varepsilon,1-\varepsilon]$, finite FK increasing events satisfy the maximum conditional edge influence bound of [[lem-csm-frontier-fk-influence-threshold]].

[F6] In the planar free/dual convention, the dual parameter satisfies $p^*/(1-p^*)=q(1-p)/p$ ([[lem-csm-frontier-fk-planar-duality]]).

[A1] **Unresolved wired crossing-construction input.** For fixed $q\geq1$ and $p>p_{\rm sd}(q)$, the source's annulus-crossing construction, including transfer from periodic tori to wired boxes and outer-to-inner conditional wiring, turns the polynomial torus crossing estimates derived below into $\theta^1(p,q)>0$. The complete path construction and its conditional boundary bookkeeping are not proved locally here.

[A2] **Unresolved subcritical input.** For fixed $q\geq1$ and $p<p_{\rm sd}(q)$, the source's dual annulus construction, Hamming-distance differential estimate, finite-size criterion, and greedy-lattice-animal strong law imply the wired two-point bound $\phi^1_{p,q}(x\leftrightarrow y)\leq C(p,q)e^{-c(p,q)\lVert x-y\rVert_2}$. The cited strong law and its use in the finite-size step are not proved locally here.

[A3] **Unresolved free/wired threshold input.** For the square-lattice FK states of [[def-csm-frontier-fk-infinite-volume-states]], the free and wired percolation thresholds coincide. This boundary-condition conclusion is required by the design; a local proof or exact current supplier is absent.

## Proof

1.1 Let $G=(V,E)$ be any finite graph with $m=|E|$, and let $B\subseteq2^E$ be increasing. Differentiating the finite FK mass in [F1] gives $\frac{d}{dp}\phi_p(B)=\operatorname{Cov}_p(\mathbf1_B,|\omega|)/(p(1-p))$. Expanding $|\omega|=\sum_e\mathbf1_{\{e\text{ open}\}}$ and conditioning on one edge gives
$$\frac{d}{dp}\phi_p(B)=\sum_{e\in E}\frac{u_e(1-u_e)}{p(1-p)}I_B(e),\qquad u_e=\phi_p(e\text{ open}).$$
By [F2], every edge conditional-open probability lies between $p/[p+q(1-p)]$ and $p$; therefore for fixed $q$ and $p\in[\varepsilon,1-\varepsilon]$ the displayed coefficient has a positive lower bound $a(q,\varepsilon)$. Hence $\phi_p'(B)\geq a(q,\varepsilon)\sum_e I_B(e)$. [F1, F2, algebra]

1.2 For each torus side $m\geq12$, put $n_m=\lfloor m/12\rfloor$ and let $B_m$ be the event that some translate of a vertical crossing of a strip of width $n_m$ and height $3n_m$ occurs. This event is increasing and translation invariant. Rotating the strip and applying the torus RSW bound [F4] at aspect ratio $3$ gives $\phi_{p_{\rm sd}}(B_m)\geq b(q)>0$, because $m>3n_m$. The two translation-orbits of edges each contain $m^2$ edges; translation invariance makes the conditional influence constant on each orbit. Thus the maximum influence bound [F5] implies $\sum_e I_{B_m}(e)\geq a_1(q,\varepsilon)\phi_p(B_m)(1-\phi_p(B_m))\log m$. Combining with step 1.1 yields $\frac{d}{dp}\log\frac{\phi_p(B_m)}{1-\phi_p(B_m)}\geq a_2(q,\varepsilon)\log m$. [F4, F5, step 1.1, algebra]

1.3 Integrate step 1.2 from $p_{\rm sd}$ to fixed $p>p_{\rm sd}$, choosing $\varepsilon$ so the interval lies in $[\varepsilon,1-\varepsilon]$. The initial lower bound $b(q,\alpha)$ gives $1-\phi_p(B_m)\leq K m^{-a_2(q,\varepsilon)(p-p_{\rm sd})}$ for a constant $K$ independent of $m$. This is the polynomial torus crossing estimate required by [A1]. [step 1.2, algebra]

2.1 By [A1] and step 1.3, $\theta^1(p,q)>0$ for every $p>p_{\rm sd}(q)$. If $p<p_{\rm sd}(q)$, [F6] gives a dual parameter $p^*$ with $p^*/(1-p^*)=q(1-p)/p>\sqrt q=p_{\rm sd}/(1-p_{\rm sd})$, hence $p^*>p_{\rm sd}$. The dual annulus route in [A2] then supplies the wired two-point bound $C(p,q)e^{-c(p,q)\lVert x-y\rVert_2}$. The probability that the origin connects to the vertex boundary of the radius-$r$ box is at most $\sum_{y\in\partial\Lambda_r}C(p,q)e^{-c(p,q)\lVert y\rVert_2}$, which tends to zero because $|\partial\Lambda_r|=8r$ and each boundary vertex has Euclidean norm at least $r$. An infinite origin cluster would connect to every such boundary, so $\theta^1(p,q)=0$. The infimum in the definition of $p_c^1$ is therefore $p_{\rm sd}(q)$. [A1, A2, F3, F6, step 1.3, algebra]

2.2 For an arbitrary cylinder-limit FK state and fixed vertices $x,y$, the event that a path from $x$ to $y$ lies inside a finite box is an increasing cylinder event. These events increase with the box and their union is $\{x\leftrightarrow y\}$. By finite-volume boundary monotonicity [F2] and the cylinder limits [F3], each such event has probability at most its wired-state probability; continuity from below gives the same inequality for $\{x\leftrightarrow y\}$. Applying [A2] to the wired probability gives the same exponential upper bound in every cylinder-limit state. By [A3], the free and wired thresholds agree; hence both equal $p_{\rm sd}(q)$. No comparison in this proof identifies the measures at $p=p_{\rm sd}(q)$. [A2, A3, F2, F3] ∎

## Remarks

Step 1 proves the finite differential amplification from the local torus and influence interfaces. Readiness is escalated because [A1] and [A2] still contain the source's wired path construction and subcritical greedy-lattice-animal argument, and [A3] lacks a local proof or exact current supplier.
