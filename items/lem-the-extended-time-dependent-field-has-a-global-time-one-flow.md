---
id: lem-the-extended-time-dependent-field-has-a-global-time-one-flow
kind: lemma
title: "A compactly supported time-dependent field has a global time-one flow"
status: draft
origin: session
dependency_level: 8
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-fundamental-theorem-for-nonautonomous-smooth-odes,
       thm-time-dependent-vector-fields-have-local-smooth-evolution-operators,
       lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field,
       thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval,
       prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law,
       def-complete-vector-field,
       def-countable-choice,
       def-time-dependent-vector-field-and-evolution-operator,
       thm-unique-maximal-integral-curve-through-each-point,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "Julian Chaidez, Notes on Smooth Topology and Symplectic Embedding Problems (Berkeley Geometry REU), Proposition 2.38 (Picard–Lindelöf for time-dependent fields) and Theorem 2.39 (isotopy extension), printed pp. 35–36"
      url: "https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G:N\times I\to TN$ be a smooth map with $G(y,t)\in T_yN$, representing the time-dependent vector field $V:I\times N\to TN$, $V(t,y)=G(y,t)$, on a smooth manifold $N$. Suppose its union of slice supports $\bigcup_{t\in I}\operatorname{supp}G_t$ is contained in a compact subset of $N$ ([[def-time-dependent-vector-field-and-evolution-operator]]), as produced in [[lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field]]. If $N$ has boundary, assume additionally that $G_t$ is tangent to $\partial N$ there for every $t$. Then there is a unique global **evolution operator** $\Psi_{t,s}:N\to N$, $s,t\in I$, such that:

1. $\Psi_{s,s}=\mathrm{id}_N$ and $\Psi_{u,t}\circ\Psi_{t,s}=\Psi_{u,s}$ for all $s,t,u\in I$;
2. every $\Psi_{t,s}$ is a diffeomorphism of $N$, with inverse $\Psi_{s,t}$;
3. for fixed $s$ and $y$ the curve $t\mapsto\Psi_{t,s}(y)$ solves $\frac{d}{dt}\Psi_{t,s}(y)=G_t(\Psi_{t,s}(y))$ and $\Psi_{s,s}(y)=y$;
4. $\Psi_{t,s}=\mathrm{id}_N$ whenever $G$ vanishes identically between $s$ and $t$.

Consequently $H_t:=\Psi_{t,0}$ is a compactly supported ambient isotopy with $H_0=\mathrm{id}_N$, inverse $H_t^{-1}=\Psi_{0,t}$, and $H_t$ stationary on every time interval on which $G$ vanishes ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]]).

## Facts & Assumptions

**Given:** Countable choice and a smooth time-dependent vector field $G$ on $N$ whose supports lie in one compact subset of $N$, with boundary tangency when $N$ has boundary.

[F1] The evolution operator $\Psi_{t,s}$ of a time-dependent field is defined by the initial-value problem $\frac{d}{dt}\Psi_{t,s}(y)=G_t(\Psi_{t,s}(y))$, $\Psi_{s,s}(y)=y$ ([[def-time-dependent-vector-field-and-evolution-operator]], [[def-complete-vector-field]]).

[L1] On a boundaryless $N$, if the union of the supports of $G_t$ over the compact interval $J$ is contained in a compact subset of $N$, then a global evolution operator $\Psi_{t,s}:N\to N$ exists for all $s,t\in J$ ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]); the construction supplies the smooth dependence of $(t,s,y)\mapsto\Psi_{t,s}(y)$.

[L2] Whenever both sides are defined, an evolution operator satisfies the two-time cocycle law $\Psi_{r,t}\circ\Psi_{t,s}=\Psi_{r,s}$ ([[prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]]).

[L3] Integral curves of a smooth vector field with a prescribed initial value are unique; for time-dependent fields the exact local existence, uniqueness and smooth dependence are supplied by [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]] and [[thm-fundamental-theorem-for-nonautonomous-smooth-odes]] ([[thm-unique-maximal-integral-curve-through-each-point]]).

[A1] Countable choice is inherited from the local existence theory recorded on the vector-fields page, exactly as in the contract of [L1] ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The factor swap makes $V(t,y)=G(y,t)$ smooth, with $V_t=G_t$, so [F1] applies to $V$. If $N$ is boundaryless, [L1] gives a global smooth evolution on $I$. For the boundary case, in a boundary chart write the inward coefficient as $a(y',r,t)$, where $r\ge0$. Tangency gives $a(y',0,t)=0$, and local smooth extension gives $a=r b$ with $b(y',r,t)=\int_0^1\partial_r a(y',ur,t)\,du$ smooth. Extend the coordinate field across $r=0$ and apply the local smooth ODE theory underlying [L1]. Uniqueness keeps solutions starting on $r=0$ there; for $r(s)>0$, the scalar equation gives $r(t)=r(s)\exp(\int_s^t b(y'(u),r(u),u)\,du)>0$ while the solution is in the chart. Thus local solutions and their reverse-time solutions preserve the half-space. Global continuation is the compact-support argument of [L1]: a solution meeting the complement of the common compact support set is constant by uniqueness; any other solution stays in that compact set. At a finite maximal endpoint a sequence of its values has a convergent subsequence there, and a local evolution around the limiting time and point extends the solution by uniqueness. This works also at a boundary point using the half-space solutions just established, and at $t=0,1$ using local smooth time extension. Hence solutions exist on all of $I$ with smooth dependence. Their initial-value identity and [L2] give properties 1 and 3. [F1, L1, L2, A1, construct]

2.1 Property 2: composing the cocycle law with $r=s$ gives $\Psi_{s,t}\circ\Psi_{t,s}=\Psi_{s,s}=\mathrm{id}_N$, and with the roles of $s,t$ exchanged gives $\Psi_{t,s}\circ\Psi_{s,t}=\mathrm{id}_N$; hence each $\Psi_{t,s}$ is a bijection with inverse $\Psi_{s,t}$, and both are smooth by [L1], so each $\Psi_{t,s}$ is a diffeomorphism of $N$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). [F1, L1, L2, step 1.1]

2.2 Property 4 and uniqueness: suppose $G$ vanishes identically on $[s,t]$. The constant curve $r\mapsto y$ solves the initial-value problem with value $y$ at time $s$, and so does $r\mapsto\Psi_{r,s}(y)$; by uniqueness of integral curves [L3] the two agree, whence $\Psi_{t,s}(y)=y$ for every $y$, i.e. $\Psi_{t,s}=\mathrm{id}_N$. Uniqueness of the evolution operator itself is the same statement: any evolution operator satisfying the initial-value problem has the same integral curves as the one constructed in step 1.1, so it agrees with it everywhere. [F1, L3, step 1.1]

3.1 Setting $H_t:=\Psi_{t,0}$ gives a smooth family of diffeomorphisms with $H_0=\mathrm{id}_N$ and $H_t^{-1}=\Psi_{0,t}$ by step 2.1; since $\Psi_{t,0}$ is the identity outside the compact set containing $\bigcup_t\operatorname{supp}G_t$ (a point outside the supports has the constant curve as its integral curve, by [L3] as in step 2.2), $H$ is a compactly supported ambient isotopy, and it is stationary on every interval on which $G$ vanishes by step 2.2. [L1, L3, step 1.1, step 2.1, step 2.2] ∎
