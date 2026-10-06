---
id: thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere
kind: theorem
title: "Euler number $\\pm1$ implies the Milnor sphere bundle is a homology seven-sphere"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-sphere-bundle-m-h-j, lem-euler-and-first-pontryagin-classes-of-xi-h-j, thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle, lem-closed-oriented-pid-manifolds-have-finitely-generated-homology, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, thm-the-homology-universal-coefficient-sequence-splits-nonnaturally, def-axiom-of-choice, cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules, lem-ext-one-of-z-mod-n-by-z-is-z-mod-n, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 402-403, the bundles with h+j = 1 and Theorem 3; the present proof supplies a separate Gysin calculation, also for h+j = -1"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.D, the Gysin sequence, printed pp. 438-442; Section 3.1, universal coefficients"
---

## Statement

Assume the Axiom of Choice as inherited from the Gysin and duality suppliers.
If $h+j=\pm1$, then the Milnor sphere bundle $M_{h,j}$ has
$H_k(M_{h,j};\mathbb Z)\cong H_k(S^7;\mathbb Z)$ for every $k$; that is, only
$H_0$ and $H_7$ are $\mathbb Z$ and all intermediate integral homology
vanishes.

## Facts & Assumptions

**Given:** Integers $h,j$ with $h+j=\varepsilon=\pm1$ and the oriented sphere bundle $S^3\to M_{h,j}\to S^4$ of [[def-milnor-sphere-bundle-m-h-j]].

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] Assume AC. The integral Gysin sequence of the oriented rank-four sphere bundle is $\cdots\to H^{k-4}(S^4;\mathbb Z)\xrightarrow{\smile e}H^k(S^4;\mathbb Z)\xrightarrow{p^*}H^k(M_{h,j};\mathbb Z)\xrightarrow{\partial}H^{k-3}(S^4;\mathbb Z)\to\cdots$ ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[L2] $e(\xi_{h,j})=(h+j)u=\varepsilon u$ with $u$ the generator of $H^4(S^4;\mathbb Z)$ ([[lem-euler-and-first-pontryagin-classes-of-xi-h-j]]).

[L3] Assume AC. A closed oriented seven-manifold has finitely generated integral homology in every degree ([[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]]).

[L4] Under AC the cohomological UCT has the exact sequence $0\to\operatorname{Ext}^1(H_{k-1}(M;\mathbb Z),\mathbb Z)\to H^k(M;\mathbb Z)\to\operatorname{Hom}(H_k(M;\mathbb Z),\mathbb Z)\to0$ ([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]).

[L5] A finitely generated abelian group is $\mathbb Z^r\oplus T$ with $T$ finite ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]). The finite cyclic resolution gives $\operatorname{Ext}^1(\mathbb Z/m,\mathbb Z)=\mathbb Z/m$ ([[lem-ext-one-of-z-mod-n-by-z-is-z-mod-n]]); its DC assumption follows from AC ([[thm-choice-implies-dependent-implies-countable-choice]]). Thus $\operatorname{Hom}(G,\mathbb Z)=0$ detects rank zero, and $\operatorname{Ext}^1(G,\mathbb Z)=0$ detects absence of torsion.

## Proof

**Proof technique:** direct.

1.1 In the Gysin sequence [L1] with $k=0,1,2,3$ and with negative cohomology zero, the only possible intermediate term is $H^3(M_{h,j})\to H^0(S^4)=\mathbb Z\xrightarrow{\smile e}H^4(S^4)=\mathbb Z\to H^4(M_{h,j})\to H^1(S^4)=0$; since $e=\varepsilon u$ by [L2] and $\varepsilon=\pm1$, the multiplication map is an isomorphism, so $H^3(M_{h,j})=0$ and $H^4(M_{h,j})=0$, while also $H^1(M_{h,j})=H^2(M_{h,j})=0$ and $H^0(M_{h,j})=\mathbb Z$. [L1, L2, A1]

2.1 For $k=5,6$ the sequence reads $0\to H^k(M_{h,j})\to H^{k-3}(S^4)$ with $k-3=2,3$, so $H^5(M_{h,j})=H^6(M_{h,j})=0$. [step 1.1, L1]

3.1 For $k=7$ the sequence gives $0=H^7(S^4)\to H^7(M_{h,j})\xrightarrow{\partial}H^4(S^4)=\mathbb Z\xrightarrow{\smile e}H^8(S^4)=0$, so $\partial$ is an isomorphism and $H^7(M_{h,j})=\mathbb Z$; for $k=8$, $H^4(S^4)\xrightarrow{\smile e}H^8(S^4)=0$ gives $H^8(M_{h,j})=0$, and all higher degrees vanish. [step 2.1, L1, L2]

4.1 Combining: $H^0(M_{h,j};\mathbb Z)=H^7(M_{h,j};\mathbb Z)=\mathbb Z$ and $H^k(M_{h,j};\mathbb Z)=0$ for $1\le k\le6$. [step 3.1]

5.1 Write $H_k(M_{h,j};\mathbb Z)=\mathbb Z^{r_k}\oplus T_k$ by [L3], [L5]. The UCT exact sequence [L4] and the vanishing of $H^k$ for $1\le k\le6$ give $r_k=0$ in these degrees and $T_{k-1}=0$. In degree seven, $\operatorname{Ext}(H_6,\mathbb Z)$ injects into $H^7=\mathbb Z$; it is finite, so it is zero and $T_6=0$. The resulting isomorphism $\operatorname{Hom}(H_7,\mathbb Z)\cong\mathbb Z$ gives $r_7=1$. Finally $H^8=0$ from step 3.1 forces $\operatorname{Ext}(H_7,\mathbb Z)=0$, hence $T_7=0$. Since the bundle is locally path connected, $H^0=\mathbb Z$ from step 4.1 forces it to have one component; thus $H_0=\mathbb Z$. [step 3.1, step 4.1, L3, L4, L5]

6.1 Thus $H_0=H_7=\mathbb Z$ and $H_1,\ldots,H_6=0$. The closed seven-manifold finiteness supplier [L3] also gives zero groups outside degrees zero through seven, proving the statement in every degree. [step 5.1, L3] ∎
