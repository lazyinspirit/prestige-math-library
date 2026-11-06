---
id: thm-cft-dual-fusion-product-existence
kind: theorem
title: Existence of C2-cofinite dual fusion products
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
deps:
- def-cft-voa-conformal-block-and-dual-fusion-product
- def-c2-cofinite-vertex-algebra
- def-grading-restricted-generalized-vertex-module
- def-axiom-of-choice
- lem-cft-c2-cofinite-modules-finitely-generated
- thm-cft-finitely-generated-weak-joint-modules-grading-restricted
- lem-cft-universal-top-window-controls-weak-joint-modules
- lem-cft-fixed-curve-partial-coinvariants-finite
- lem-cft-fixed-curve-strong-residue-and-vacuum-propagation
- thm-residue-theorem-compact-riemann-surface
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  thm-cft-finitely-generated-weak-joint-modules-grading-restricted: mathematical-premise
  lem-cft-universal-top-window-controls-weak-joint-modules: mathematical-premise
  lem-cft-fixed-curve-partial-coinvariants-finite: mathematical-premise
  lem-cft-fixed-curve-strong-residue-and-vacuum-propagation: mathematical-premise
  thm-residue-theorem-compact-riemann-surface: mathematical-premise
axiom_use: AC is carried through the compact-surface genus convention in the pointed-worldsheet
  definition; the source's algebraic representability argument makes no additional
  choice claim.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex
      Operator Algebras I: Propagation and Dual Fusion Products'
    url: https://arxiv.org/pdf/2305.10180v4
    locator: Theorem 0.5, PDF pp. 7–8; construction and proof route in §3 and Appendix
      A.
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---



## Statement

Let $V$ be a C2-cofinite conformal vertex algebra of CFT type over $\mathbb C$, let $X$ be a compact pointed Riemann surface with finitely many incoming and outgoing marked points and local coordinates, and assume every connected component of $X$ contains an incoming marked point. If $W$ is a grading-restricted generalized $V^{\otimes N}$-module at the $N$ incoming points, then a grading-restricted generalized $V^{\otimes M}$-module $D_X(W)$ and a conformal block $\gamma_X\in\mathrm{CB}_X(W\otimes D_X(W))$ exist such that, for every grading-restricted generalized $V^{\otimes M}$-module $M_0$ and every $\Gamma\in\mathrm{CB}_X(W\otimes M_0)$, there is a unique $V^{\otimes M}$-module homomorphism $T:M_0\to D_X(W)$ with $\Gamma=\gamma_X\circ(\mathrm{id}_W\otimes T)$. No rationality, semisimplicity, or self-duality assumption is included.

## Statement references

[[def-cft-voa-conformal-block-and-dual-fusion-product]]

[[def-c2-cofinite-vertex-algebra]]

[[def-grading-restricted-generalized-vertex-module]]

[[lem-cft-dual-fusion-product-uniqueness]]

## Facts & Assumptions

**Given:** Exactly the fixed-surface and full generalized joint-module conventions in the unchanged Statement. Incoming and test modules need not split into tensor factors.

[F1] [[lem-cft-fixed-curve-partial-coinvariants-finite]] defines the outgoing pole lattice indexed by a tuple a and proves the finite-dimensionality of $W/J_{a}$. Here $J_{a}$ is the incoming residue action of global state differentials in that lattice.

[F2] [[lem-cft-fixed-curve-strong-residue-and-vacuum-propagation]] reconstructs every partial block as a meromorphic state covector, with outgoing pole bound $wt(v)+a_{j}$ on a homogeneous state v, and proves double propagation, symmetry and the collision OPE by full residue Jacobi.

[F3] [[lem-cft-universal-top-window-controls-weak-joint-modules]] gives a universal finite root set E and lower bound b for every weak joint module, and proves generation by the joint spaces at $E^M$. Finite dimension of this top window implies finite generation and full grading restriction.

[F4] [[lem-cft-c2-cofinite-modules-finitely-generated]] gives finite generation, finite weight support in bounded windows and compatible auxiliary gradings for every incoming or test module. [[thm-cft-finitely-generated-weak-joint-modules-grading-restricted]] supplies full grading restriction once finite generation is proved.

[F5] [[thm-residue-theorem-compact-riemann-surface]] gives zero total residue on each compact component. [[def-cft-voa-conformal-block-and-dual-fusion-product]] defines blocks by the sum of residue actions, with ordinary left module actions at all marks and the exact coordinate conventions already proved locally.

## Proof

1.1 For each nonnegative tuple a set $D_{a}=(W/J_{a})*$, embedded in W* by the quotient map, and let D be their directed union. If a increases, the outgoing lattice shrinks, $J_{a}$ shrinks and $D_{a}$ increases. Every $D_{a}$ is finite dimensional by F1. If there are no outgoing points, D is simply $(W/J_0)*$, and evaluation gives the universal block and representing bijection for finite-dimensional zero-component test modules. Hence assume $M>0$. [F1, F5, construct]

2.1 For phi in $D_{a}$ use F2's propagation $\Phi_{\phi}(v,p;w)$. At outgoing point $y_{j}$ with coordinate z define $$\langle Y_j(v)_{(n)}\phi,w\rangle=\operatorname{Res}_{z=0}z^n\Phi_\phi(v,z;w)\,dz.$$ This is independent of a by propagation uniqueness. It is zero for $n\ge wt(v)+a_{j}$ because $z^{wt(v)+a_{j}}\Phi_{\phi}(v,z;w)$ is regular there. Thus the proposed fields are vectorwise lower-truncated in the precise uniform state-weight form needed below. [F2, step 1.1, construct]

2.2 Let $M_0$ be any test module in the unchanged Statement and Gamma any block on W tensor $M_0$. Define $T(m)(w)=\Gamma(w\text{ tensor }m)$. Each m has finite joint-weight support and $M_0$ has a coordinatewise lower bound. Choose $a_{j}$ so that for every homogeneous v of weight r the mode $v_{n}^{j}m$ is zero for $n\ge r+a_{j}$: the weight shift and the lower bound give such $a_{j}$ uniformly over all v. A global differential in the outgoing lattice at this a acts trivially on m at every outgoing point. Gamma's Ward identity therefore says T(m) annihilates $J_{a}$. Thus T(m) belongs to D and $T:M_0→D$ is an actual linear map. [F4, F5, given, step 1.1, construct]

3.1 We check stability and the outgoing pole level explicitly. Fix a homogeneous v of weight r, an integer n and an index j. Set $a'_{j}=a_{j}+\operatorname{max}(0,r-n-1)$, with all other levels unchanged. For homogeneous u of weight s write F(x,z;w) for F2's double propagation with u at x and v at z near $y_{j}$. The propagated covector for $\psi=Y_{j}(v)_{n}\phi$ is its z-residue. To bound its x-pole, take three nested circles about zero and move the x-circle across z. For every integer m, the resulting residue identity is $$\operatorname{Res}_x x^m\operatorname{Res}_z z^nF(x,z;w)=\operatorname{Res}_z z^n\operatorname{Res}_{x\text{ inside }z}x^mF(x,z;w)+\sum_{l\ge0}\binom ml\operatorname{Res}_z z^{m+n-l}\Phi_\phi(u_{(l)}v,z;w).$$ The first term is zero when $m\ge s+a_{j}$. In the second term $wt(u_{l}v)=s+r-l-1$; F2's pole bound makes it zero when $m+n-l\ge s+r-l-1+a_{j}$. The finite state truncation $u_{l}v=0$ for large l makes this a finite sum. Hence every moment with $m\ge s+a'_{j}$ vanishes. At a different outgoing mark the original bound is unchanged, since the two residue circles are disjoint. [F2, step 2.1, algebra]

3.2 Propagate Gamma once at a vacuum-module point, as in F2. Near an incoming point its expansion is $\Gamma(Y_i(v,z)w\text{ tensor }m)$, exactly the incoming expansion used to reconstruct $\Phi_{T(m)}$. Its outgoing expansion near $y_{j}$ is Gamma(w tensor $Y_{j}(v,z)m$). The uniform outgoing cutoff on m in step 2.2 supplies the required partial pole lattice. Uniqueness of the fixed-curve meromorphic reconstruction in F2 consequently identifies these two descriptions. Taking the nth residue gives $$Y_j(v)_{(n)}T(m)=T(Y_j(v)_{(n)}m).$$ Thus T intertwines every component mode. Evaluation immediately gives $\Gamma=\gamma$ composed with ($id_{W}$ tensor T). If a second map had that property, its value on every m would have the same evaluation on every w, and therefore be the same vector of D inside W*. Hence T is unique. This proves the representing property for all component module maps, without an auxiliary grading-preserving restriction. [F2, F5, step 2.1, step 2.2, algebra]

4.1 The residue covector in step 3.1 is therefore regular on the outgoing lattice of level a'. Pair it with any global differential sigma in that lattice. The resulting meromorphic one-form has poles only at the incoming points. Its total residue is zero; at $x_{i}$ the residue is psi(sigma acting in component i on w), by F2's defining incoming expansion and commuting the fixed outgoing residue past that disjoint circle. Thus psi annihilates $J_{a}'$, so psi lies in $D_{a}'$. This proves all proposed modes act on D, not only on W*. The same calculation identifies the propagated covector of psi with that residue, by F2's uniqueness. [F1, F2, step 3.1, algebra]

5.1 Vacuum propagation gives $Y_{j}(1)_{n}=\delta_{n,-1}$ on D. At distinct outgoing marks disjoint double residues commute, so component modes commute. At a single outgoing mark, the three expansions of the same double propagation in F2 are the two ordered products of the modes in step 2.1 and the iterate obtained from Y(u,x-z)v. Deforming the same nested circles as in step 3.1, now testing $x^m$ $z^n(x-z)^p$, gives for every m,n,p in Z $$\sum_{i\ge0}\binom mi (u_{(p+i)}v)^{(j)}_{(m+n-i)}\phi=\sum_{i\ge0}(-1)^i\binom pi\left(u^{(j)}_{(m+p-i)}v^{(j)}_{(n+i)}\phi-(-1)^p v^{(j)}_{(n+p-i)}u^{(j)}_{(m+i)}\phi\right).$$ This is full coefficient module Jacobi, including negative p, with the ordinary non-super signs. The sums are finite separately by state truncation on the left and the rightmost outgoing-mode truncations from step 2.1 on the right. The equality follows after evaluation on every w in W; such evaluations separate D. Thus D is a weak joint module, without any grading restriction assumed in its construction. [F2, step 2.1, step 4.1, algebra]

6.1 Apply F3 to this weak joint module. It has a direct-sum joint generalized-weight decomposition, universal coordinate lower bound b, and is generated by $G(D)=$ the sum of the spaces at lambda in $E^M$. Choose an integer $A\ge 0$ with $A>\max_{e\in E}\operatorname{Re}(e)-b$. If phi lies in one of those joint spaces and v has weight r, the mode $Y_{j}(v)_{n}\phi$ has jth weight $\lambda_{j}+r-n-1$. For $n\ge r+A$ its real part is below b, so it is zero. Thus every phi in G(D) has the same outgoing cutoff r+A, for every state and every component. [F3, step 5.1, algebra]

7.1 We show that this improved mode cutoff places phi in $D_{A,...,A}$, rather than merely in some larger $D_{a}$. It already lies in some $D_{a}$ by construction. Its propagated covector has Laurent coefficients given by step 2.1, so step 6.1 says it is regular on the smaller-pole lattice $V_{C,(A,...,A)}$. Pair it with a global differential in that lattice. There are no outgoing residues; the sum of incoming residues is phi evaluated on that differential's incoming action. The residue theorem makes it zero. Hence phi annihilates $J_{A,...,A}$. We conclude G(D) is a subspace of the finite-dimensional $D_{A,...,A}$. F3 now proves finite generation and full grading restriction of D. This is the complete finiteness step; projective covers and a finite-length category theorem have not been assumed. [F1, F2, F3, step 6.1, algebra]

8.1 Define $\gamma(w\text{ tensor }\phi)=\phi(w)$. For a global state differential allowed poles at both kinds of marks, pair it with F2's propagated covector for phi. Its incoming residues give the action on w, and its outgoing residues give the just-constructed actions on phi by step 2.1. Their sum is zero by the global residue theorem. This is precisely the Ward condition in F5, so gamma is a conformal block for W tensor D. It has the admitted module labels by step 7.1. [F2, F5, step 2.1, step 7.1, construct]

9.1 The construction is natural in test-module maps because T is defined by evaluation. Together with the zero-outgoing case of step 1.1 and the full grading restriction in step 7.1, this establishes every assertion of the original Statement. No rationality, semisimplicity, self-duality, tensor-factorization or conformal-local-finiteness hypothesis has been inserted. [step 1.1, step 7.1, step 8.1, step 3.2, algebra] ∎
