---
id: lem-csm-frontier-fk-subcritical-exponential-decay
kind: lemma
title: "Subcritical FK exponential connectivity under Countable Choice"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-countable-choice
  - def-csm-frontier-fk-infinite-volume-states
  - lem-csm-frontier-fk-free-wired-limits
  - lem-csm-frontier-fk-cylinder-pressure-comparison
  - lem-csm-frontier-fk-fkg-spatial-markov
  - lem-csm-frontier-fk-wired-annuli-and-numerical-threshold
  - lem-csm-frontier-fk-independent-cluster-animal-envelope
  - lem-csm-lattice-product-and-measure-compactness
  - thm-tdmath-monotone-convergence
  - lem-tdmath-fatou
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-frontier-fk-infinite-volume-states: mathematical-premise
  lem-csm-frontier-fk-free-wired-limits: mathematical-premise
  lem-csm-frontier-fk-cylinder-pressure-comparison: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  lem-csm-frontier-fk-wired-annuli-and-numerical-threshold: mathematical-premise
  lem-csm-frontier-fk-independent-cluster-animal-envelope: mathematical-premise
  lem-csm-lattice-product-and-measure-compactness: mathematical-premise
  thm-tdmath-monotone-convergence: mathematical-premise
  lem-tdmath-fatou: mathematical-premise
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
      locator: "Section 4, proof of Theorem 2, pp. 20–21; countable-kernel construction and the elementary envelope supplier are made explicit locally."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. For every real $q\geq1$ and $0<p<\sqrt q/(1+\sqrt q)$, the square-lattice wired FK cluster $C_x$ has $\mathbb E|C_x|^d<\infty$ for every real $d>0$. There are constants $C(p,q),c(p,q)>0$ such that every probability measure $\phi$ obtained as a cylinder limit of finite-volume FK laws on boxes with arbitrary boundary partitions satisfies
$$\phi(x\leftrightarrow y)\leq C(p,q)e^{-c(p,q)\lVert x-y\rVert_2}\qquad(x,y\in\mathbb Z^2).$$
Here $x\leftrightarrow y$ means connection by a finite path of actual open lattice edges. In particular every such state has zero probability of an infinite cluster at a given vertex. The constants are uniform over all these cylinder-limit states at the fixed $(p,q)$. No conclusion at the self-dual parameter or equality of the critical free and wired measures is asserted. Countable Choice is used for probability-law extension and selection of countably many coupling kernels in this proof; it is not a premise of the separate numerical finite-volume threshold theorem.

## Statement references

[[def-countable-choice]]

[[def-csm-frontier-fk-infinite-volume-states]]

[[lem-csm-frontier-fk-free-wired-limits]]

[[lem-csm-frontier-fk-cylinder-pressure-comparison]]

[[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]

[[lem-csm-frontier-fk-independent-cluster-animal-envelope]]

## Facts & Assumptions

**Given:** Countable Choice, real $q\geq1$, a sub-self-dual parameter, and the actual free/wired Borel laws extending their finite-cylinder limits.

[A1] Countable Choice is the axiom in [[def-countable-choice]]. It is spent in the indicated measure-extension and countable-kernel steps, without invoking arbitrary-index choice or dependent choice.

[F1] The actual free/wired probability laws exist under [A1] and have the numerical cylinder weights supplied by [[lem-csm-frontier-fk-free-wired-limits]] and [[lem-csm-frontier-fk-cylinder-pressure-comparison]]; cylinder-limit states are defined in [[def-csm-frontier-fk-infinite-volume-states]].

[F2] Finite FK has spatial Markov, association, common-uniform heat-bath monotone couplings, and parameter/boundary comparison ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[F3] For every $0<s<p_s=\sqrt q/(1+\sqrt q)$ and $d>0$, the numerical one-arm bound is $\pi^1_{s,q}(D_n)\leq C_d n^{-(2d+4)}$ for large $n$; for $p<s$, $\pi^1_{p,q}(D_n)\leq\exp\{-4(s-p)\mathbb E_{\pi^1_{s,q}}H_n\}$, where $H_n$ is finite Hamming distance to $D_n$ ([[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]). Its proof supplies all annulus ratios and intermediate nonexceptional dual parameters, without a critical-state assumption.

[F4] Given independent shifted finite connected sets with all size moments on a probability space, their envelope has a deterministic uniform large-animal average bound ([[lem-csm-frontier-fk-independent-cluster-animal-envelope]]).

[F5] Under [A1], consistent finite-alphabet probabilities on a countable coordinate set extend uniquely to a probability law, and such laws have cylinder-convergent subsequences ([[lem-csm-lattice-product-and-measure-compactness]]).

[F6] Nonnegative monotone convergence and Fatou's inequality hold on the actual measure spaces ([[thm-tdmath-monotone-convergence]], [[lem-tdmath-fatou]]).

## Proof

1.1 Fix any $0<s<p_s:=\sqrt q/(1+\sqrt q)$ and let $R_x=\sup\{\lVert z-x\rVert_\infty:z\in C_x\}$, allowing infinity initially. The event $R_x\geq n$ is the translate of $D_n$: a path reaching that distance has an initial segment inside the centered box to its boundary. Its probability under the wired law is its numerical cylinder weight by [F1]. Thus [F3], with arbitrarily large $d$, gives polynomial tails of arbitrarily high order for $R_x$. Since $|C_x|\leq(2R_x+1)^2$, nonnegative monotone convergence applied to successive integer layers proves $\mathbb E_s^1|C_x|^d<\infty$ for every $d>0$; explicitly the layer bound for $R_x^{2d}$ is a constant times $\sum_{n\geq1}n^{2d-1}P(R_x\geq n)$, which converges after choosing [F3] with that $d$. Every $C_x$ is finite almost surely, simultaneously at all countably many vertices. Translation invariance follows from the numerical cylinder identities in [F1] and uniqueness in [F5]. [F1, F3, F5, F6, algebra]

2.1 We establish a conditional cluster comparison before constructing a new law. Enumerate the vertices deterministically. Suppose a finite number of complete finite clusters have been discovered, with union $E$. Revealing their vertex sets says that each discovered set is connected by its internal open edges and every edge from it to its complement is closed. These are finite-edge events. In each finite FK box, after all edges between $E$ and its complement are fixed closed, the component factors and edge weights internal to $E$ factor from the remaining weights; summing over allowed internal configurations preserves that factorization. Hence the law outside $E$ depends on the discovered sets only through the closed boundary edges. Passing fixed finite-cylinder conditional probabilities to the wired limit proves the same identity there. A positive-probability history has a positive denominator because its defining finite edge event does; null histories may be assigned arbitrary normalized kernels and are never reached. [F1, F2, step 1.1, construct, algebra]

3.1 If the next vertex $y$ is outside $E$, its conditional cluster law is dominated, by inclusion of vertex sets, by the unconditional wired cluster law of $y$. Indeed in a finite box compare the original wired law with the same law constrained to close every edge from $E$ to its complement. The common-uniform heat-bath update in [F2] preserves order; fixed-closed coordinates stay below the upper chain, and all other conditional edge probabilities remain ordered. Taking stationary limits gives an ordered finite-box coupling. Apply [F5] to the pair of binary edge fields along growing boxes and take a joint cylinder limit. Its upper marginal is the wired law; its lower marginal outside $E$ is the conditional law in step 2.1, since conditioning a fixed positive-probability cylinder commutes with these limits. The order event is a countable intersection of coordinatewise closed conditions and holds in the limit. Project to the two clusters of $y$. Both are finite almost surely, by the upper marginal and step 1.1. This proves existence of an ordered coupling on pairs of finite connected vertex sets for each possible positive-probability history. [A1, F2, F5, step 1.1, step 2.1, construct]

4.1 The possible finite histories, finite connected lattice sets, and pairs of such sets have explicit countable encodings by integer vertex lists. Apply [A1] to the fixed countable family of nonempty sets of coupling kernels from step 3.1, choosing one kernel for every history in advance. At a stage whose vertex $y$ is already discovered, its actual-cluster output is its earlier cluster and the second output is a fresh independent set with the unconditional cluster law of $y$. At an undiscovered $y$, use its selected ordered kernel: its first marginal is the conditional cluster law from step 2.1 and its second marginal is again that fixed unconditional law. Each kernel is a probability on a countable set of pairs of finite sets. The product of the successive kernels defines normalized consistent finite-prefix atomic probabilities; summing the last kernel's mass one verifies consistency. A kernel's second marginal is fixed for every history, including the earlier second outputs, so these second outputs have product marginals for every finite list of stages. Countable Choice here selects kernels for a countable set fixed in advance, rather than successive unspecified choices from a relation. [A1, step 2.1, step 3.1, construct, algebra]

5.1 Here is an explicit extension of the process, to avoid assuming a countable-alphabet extension theorem. Enumerate each stage's possible output pairs by integers $j\geq0$, and encode $j$ by a bit row consisting of $j$ ones, a zero, and then zeros. For every finite set of coordinates in the countable array of bits, sum the appropriate finite-prefix atomic probabilities from step 4.1. All sums are nonnegative countable sums over explicitly enumerated finite tuples of integers. Summing the last kernel verifies consistency of the binary finite-dimensional laws. Identify the bit array with the countable coordinates in [F5] and extend under [A1]. For a given row the weight of its first $K$ bits being all ones is the atomic tail $P(j\geq K)$, tending to zero, so the all-ones row has probability zero by countable additivity. Each finite pattern having a one after its first zero also has prescribed probability zero. A countable union shows that almost surely every row is a valid integer code. Decode on this measurable full-probability set, assigning a fixed default on its null complement. The resulting process has exactly the specified finite-prefix laws. This constructs the required law without an additional invocation of a process-extension or independent-uniform theorem. [A1, F5, step 4.1, construct, algebra]

6.1 Write $S_y$ for the second output at the stage of $y$, and $\widehat C_z$ for the actual cluster assigned by the first outputs. Step 4.1 shows that the $S_y-y$ are independent and identically distributed as the translated wired cluster; their sizes have all moments by step 1.1. The first outputs have precisely the original wired cluster-exploration laws by induction on every finite prefix. The complete cluster at each fixed $z$ is assigned by the stage reaching $z$, so all finite lists of complete cluster sets have the actual wired joint law. Equality of the whole countably indexed cluster-set law follows as well: unary encode these finite-set labels; its binary cylinder values determine its law uniquely by [F5]. Whenever a new cluster is discovered at $y$, it is a subset of $S_y$ by the ordered kernel. Every $z$ in that cluster therefore satisfies $|\widehat C_z|\leq M_z:=\sup\{|S_y|:z\in S_y\}$. The enumeration eventually assigns every vertex. This coupled object is a cluster partition, not an edge configuration reconstructed from clusters. [F5, step 1.1, step 4.1, step 5.1, construct, algebra]

7.1 Apply [F4] to the given independent family $S_y$ on the constructed probability space. There is a deterministic finite $K_0$ such that almost surely all sufficiently large animals $\Gamma$ satisfy $\sum_{z\in\Gamma}|\widehat C_z|\leq\sum_{z\in\Gamma}M_z\leq K_0|\Gamma|$. This countably measurable property of the cluster partition transfers to the actual wired law by step 6.1. An animal is a finite connected vertex set containing $0$, so this applies simultaneously to every sufficiently long self-avoiding path starting at $0$. No claim that the dependent envelope variables are independent is made. [F4, step 6.1, algebra]

8.1 In any edge configuration with such a cluster partition, let $\gamma$ be a self-avoiding path from $0$ to $\partial\Lambda_n$, with $m$ vertices. It has $m\geq n+1$. If it visits $J$ distinct open clusters, its number $T(\gamma)$ of closed edges is at least $J-1$. Each visited cluster $C$ contributes at most one to $\sum_{z\in\gamma}|C_z|^{-1}$, because the path visits distinct vertices. Cauchy–Schwarz therefore gives $T(\gamma)+1\geq\sum_{z\in\gamma}|C_z|^{-1}\geq m^2/(\sum_{z\in\gamma}|C_z|)\geq m/K_0$ for all sufficiently long paths, by step 7.1. The subtraction of one is necessary even for a path contained in a single cluster. Since this inequality holds for every edge configuration with that partition, transferring the partition law was sufficient; no internal open edges had to be selected in the coupling. [step 7.1, algebra]

9.1 A path minimizing the number of closed edges in the finite box may be taken self-avoiding by erasing loops without increasing that number. The uniform large-animal cutoff in step 7.1 and step 8.1 give $H_n\geq(n+1)/K_0-1$ for all sufficiently large $n$, almost surely in the actual wired law at $s$. Fatou's inequality from [F6], applied to the nonnegative measurable variables $H_n/n$, gives $\liminf_n\mathbb E_s^1H_n/n\geq1/K_0$. Thus for all sufficiently large deterministic $n$, $\mathbb E_s^1H_n\geq n/(2K_0)$. This expectation conclusion does not assume a deterministic bound on the random almost-sure cutoff. [F6, step 7.1, step 8.1, algebra]

10.1 Now fix the parameter $p$ in the statement and choose $s\in(p,p_s)$. The preceding moment, coupling, and Hamming-expectation arguments apply at this $s$. Since $H_n$ is a finite-coordinate function, its expectation under the wired Borel law is exactly the finite sum of its numerical cylinder atom weights in [F3]. That supplier's Hamming inequality therefore gives $\phi^1_{p,q}(D_n)\leq\exp\{-2(s-p)n/K_0\}$ for sufficiently large $n$. Increasing a prefactor covers all $n\geq1$. In particular the probability of an infinite cluster at $0$ is zero: that event is contained in every $D_n$, whose probabilities tend to zero. [F1, F3, step 9.1, choose, algebra]

11.1 By translation invariance, the same one-arm bound holds at every center. If $x\ne y$ and $r=\lVert x-y\rVert_\infty$, any finite open path from $x$ to $y$ has an initial segment from $x$ to the vertex boundary of $x+\Lambda_r$ inside that box. Thus its wired connection probability is at most the translated one-arm bound at radius $r$. Since $r\geq\lVert x-y\rVert_2/\sqrt2$, changing constants proves $\phi^1_{p,q}(x\leftrightarrow y)\leq C(p,q)e^{-c(p,q)\lVert x-y\rVert_2}$, also for $x=y$ after enlarging $C$. [F1, step 10.1, algebra]

12.1 Let $\phi$ be any cylinder limit in the statement. An increasing event supported on a fixed inner box has finite-volume conditional laws with boundary partitions at most wired; passing its cylinder probabilities to the limit bounds them above by the wired inner-box law. Then increase that inner box to infinity, using the wired cylinder limit in [F1], to obtain domination by the wired state on increasing cylinder events. The event that $x$ connects $y$ by a path in a fixed box is such an event. These events increase to $\{x\leftrightarrow y\}$ as boxes grow; countable additivity, or [F6] applied to their indicators, therefore gives the identical upper bound in step 11.1 for $\phi$. Similarly the translated $D_n$ events dominate any infinite cluster at their center, giving probability zero. Constants depend only on $p,q$, not on the cylinder-limit state. The proof has made no assertion at $p_s$ and has used Countable Choice exactly in the stated extensions and kernel selection. [A1, F1, F2, F6, step 10.1, step 11.1, algebra] ∎
