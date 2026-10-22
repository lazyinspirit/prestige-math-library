---
id: thm-qftx-green-hyperbolic-existence
kind: theorem
title: Existence and uniqueness of continuous scalar Green maps on smooth globally
  hyperbolic spacetimes
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
- def-qftx-green-hyperbolic-interface
- lem-qftx-smooth-scalar-cauchy-evolution
- def-countable-choice
- def-dependent-choice
- def-qftx-distributions-on-smooth-manifolds
- thm-smooth-partitions-of-unity-exist-on-manifolds
dependency_roles:
  def-qftx-green-hyperbolic-interface: mathematical-premise
  lem-qftx-smooth-scalar-cauchy-evolution: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian
      Manifolds and Quantization
    url: https://arxiv.org/pdf/0806.1036
    locator: Chapter 3 §§3.2–3.4, Theorems 3.2.11–3.2.12 and Corollary 3.4.3, printed
      pp. 85–89. Local analytic construction here instead uses the explicitly cited
      published symmetric-hyperbolic suppliers.
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Let $(M,g,N)$ be any Hausdorff second-countable oriented time-oriented smooth globally hyperbolic Lorentzian four-manifold without boundary, with signature $(-,+,+,+)$, and let $V\in C^\infty(M;\mathbb R)$ be arbitrary. For $P=-\Box_g+V$ there exist unique continuous real-linear maps $E_+,E_-:C_c^\infty(M;\mathbb R)\to C^\infty(M;\mathbb R)$ such that

$$PE_+f=E_+Pf=f,\qquad PE_-f=E_-Pf=f,$$

$$\operatorname{supp}E_+f\subseteq J^+(\operatorname{supp}f),\qquad\operatorname{supp}E_-f\subseteq J^-(\operatorname{supp}f).$$

Continuity uses the test-function LF topology and the compact derivative topology of the Green-data definition. The operator is formally self-adjoint for $\mu_g$, and its smooth Cauchy problem has uniqueness on every smooth spacelike Cauchy hypersurface. Thus these maps realize the complete Green-data interface for every such geometry and potential. No Green-map existence or scalar Cauchy solvability is assumed.

## Statement references

[[def-qftx-green-hyperbolic-interface]]

[[lem-qftx-smooth-scalar-cauchy-evolution]]

[[def-qftx-distributions-on-smooth-manifolds]]

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice and the smooth geometric and operator hypotheses in the Statement; the conventions for $P$, $\mu_g$, test topology and causal support are those of the Green-data definition.

[F1] [[lem-qftx-smooth-scalar-cauchy-evolution]] constructs smooth scalar Cauchy evolution, one-sided metric causal support, uniqueness even without support bounds, and estimates of every compact-output seminorm by finitely many fixed-compact input seminorms. It supplies a smooth Cauchy temporal foliation and arbitrary-Cauchy-surface uniqueness. Its proof uses published local symmetric-hyperbolic results, not Green maps.

[F2] [[def-qftx-distributions-on-smooth-manifolds]] and [[def-qftx-green-hyperbolic-interface]] define the LF test topology and the positive metric density. [[thm-smooth-partitions-of-unity-exist-on-manifolds]] permits localization of integrations of compactly supported smooth densities to finitely many charts.

[A1] [[def-countable-choice]] and [[def-dependent-choice]] are inherited exactly from the local analytic and causal construction in [F1].

## Proof

**Proof technique:** constructive.

1.1 (Retarded construction.) Fix the smooth time $t$ of [F1]. For nonzero compact test $f$, choose $a<\min t(\operatorname{supp}f)$ and solve $Pu=f$ with zero data on $S_a$ using [F1]. Below that slice the source and both data vanish, so uniqueness and its time-reversed support assertion give $u=0$. Above it the one-sided support assertion gives $\operatorname{supp}u\subseteq J^+(\operatorname{supp}f)$. Define $E_+f=u$ and $E_+0=0$. A different sufficiently early slice gives the same solution: both solutions have zero data on a still earlier common slice and the same source, so [F1] uniqueness identifies them. Reversing time constructs $E_-f$ from zero data on any slice later than the support and gives the past support. [F1, A1, construct]

1.2 (Two-sided inverse identities and uniqueness.) The construction gives $PE_\pm f=f$. If $k$ is compact, locality gives $\operatorname{supp}Pk\subseteq\operatorname{supp}k$. The compact smooth function $k$ and $E_+(Pk)$ both solve $Pu=Pk$ and have zero data on a common slice earlier than $\operatorname{supp}k$; uniqueness gives $E_+Pk=k$. The advanced identity is time reversed. If any other smooth retarded solution of $Pu=f$ has support in $J^+(\operatorname{supp}f)$, it has zero data on that earlier slice and equals $E_+f$ by [F1]. The same holds for advanced solutions, proving uniqueness of the maps. Common early or late slices for a finite list of tests and uniqueness give additivity and real homogeneity, hence real linearity. [step 1.1, F1, algebra]

2.1 (Continuity in the actual topologies.) Fix compact input support $K$ and compact output set $L$ with a specified derivative order. Choose $a<\min t(K)$ and a finite slab containing $S_a$ and $L$; if $K$ is empty the restriction is zero. Step 1.1 constructs every $E_+f$ for $\operatorname{supp}f\subseteq K$ from zero data on this same $S_a$. The estimate in [F1] therefore bounds the selected output seminorm by a constant times finitely many fixed-$K$ input derivative seminorms. This proves continuity of $E_+$ restricted to each fixed-compact test space. The LF topology in [F2] is the locally convex inductive-limit topology of these spaces, so a linear map into the locally convex space $C^\infty(M)$ is continuous precisely when all such restrictions are continuous. Thus $E_+$ is continuous; the late-slice estimate gives continuity of $E_-$. No sequential-continuity substitute or unsupported closed-graph argument is used. [step 1.1, step 1.2, F1, F2, algebra]

3.1 (The remaining interface conditions.) For compact smooth $f$ and arbitrary smooth $u$, the coordinate divergence expression for $\Box_g$ and integration by parts give

$$\int_M f(-\Box_g u)\,\mu_g=\int_M g^{ab}(\partial_af)(\partial_bu)\,\mu_g=\int_M(-\Box_g f)u\,\mu_g.$$

These identities are justified by localizing the compact support to finitely many charts using [F2]: the extra partition derivatives sum to zero, and each chart integration has compact support. Multiplication by the real $V$ is symmetric, proving formal self-adjointness. Arbitrary smooth spacelike Cauchy-surface uniqueness is the last conclusion of [F1]. Together with steps 1.1–2.1 these establish every condition in the defined Green-data interface for the full stated class of backgrounds. [step 1.1, step 1.2, step 2.1, F1, F2, construct, discharge-construct] ∎
