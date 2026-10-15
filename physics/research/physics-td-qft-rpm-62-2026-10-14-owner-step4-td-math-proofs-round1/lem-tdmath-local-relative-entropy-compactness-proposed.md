---
id: lem-tdmath-local-relative-entropy-compactness
kind: lemma
title: Local entropy bounds give local-tame relative compactness
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-axiom-of-choice, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-tdmath-poisson-configuration-reference, def-tdmath-local-tame-topology, def-tdmath-finite-region-relative-entropy, lem-tdmath-relative-entropy-variational-and-chain-rules, thm-tdmath-poisson-reference-count-properties, def-weak-topology-on-a-normed-space, thm-holder-inequality-for-integrals, thm-dunford-pettis-for-l-one-on-a-finite-measure-space, thm-eberlein-smulian, thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, thm-dominated-convergence, thm-monotone-convergence-for-the-integral]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-weak-topology-on-a-normed-space: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  thm-dunford-pettis-for-l-one-on-a-finite-measure-space: mathematical-premise
  thm-eberlein-smulian: mathematical-premise
  thm-kolmogorov-extension-for-standard-borel-coordinate-spaces: mathematical-premise
  thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
sources:
  references:
    - title: "Georgii and Zessin, Large deviations and the maximum entropy principle for marked point random fields, Proposition 2.6 and local-density compactness proof"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB. Let $Q$ be the unit-intensity Poisson configuration law, and let $\mathcal A\subseteq\mathcal P^1_{\rm stat}(\Omega)$ be a family of stationary finite-intensity laws. Suppose that for each integer cube $W=a+[0,m)^d$, $a\in\mathbb Z^d$, $m\ge1$ an integer, there is a finite $C_W\ge0$ with
$$\sup_{P\in\mathcal A}D(P_W\Vert Q_W)\le C_W.$$
Then $\mathcal A$ is relatively compact and relatively sequentially compact in the local-tame topology. Its bounded-region counts are uniformly integrable, and its closure consists of stationary finite-intensity laws with the same cube entropy bounds. For any local-tame convergent net $P_\alpha\to P$, finite-region entropy is lower semicontinuous:
$$D(P_W\Vert Q_W)\le\liminf_\alpha D((P_\alpha)_W\Vert Q_W).$$
There is also an eventual-bound sequence version: if $(P_n)\subseteq\mathcal P^1_{\rm stat}(\Omega)$ and for every fixed integer cube $W$ a finite bound $D((P_n)_W\Vert Q_W)\le C_W$ holds for all sufficiently large $n$, where that threshold may depend on $W$, then every subsequence with indices tending to infinity has a local-tame convergent further subsequence. The bounded-region counts are uniformly integrable over that sequence, and each resulting limit retains those eventual cube bounds. No uniform bound on the specific entropy of the original laws is assumed.

## Facts & Assumptions

**Given:** The four named choice principles, the Poisson reference, and the finite cube entropy bounds.

[A1] [[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], and [[def-hahn-banach-extension-principle-relative]] are assumed. AC is used by Dunford–Pettis, standard-Borel marginal extension and the countable subsequence choices; the ultrafilter extension principle supplies product compactness, and together with DC and HB supplies Eberlein–Šmulian.

[F1] [[def-tdmath-finite-region-relative-entropy]] and [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: finite entropy gives a probability density $h$ relative to $Q_W$, the negative part of $h\log h$ is at most $1/e$ in integral, and entropy is the supremum over bounded measurable tests of $P(\phi)-\log Q(e^\phi)$.

[F2] [[thm-dunford-pettis-for-l-one-on-a-finite-measure-space]]: under AC, a uniformly integrable family in real $L^1$ of a finite measure space is relatively weakly compact. [[thm-eberlein-smulian]]: under the ultrafilter lemma, DC and HB, relative weak compactness is equivalent to relative weak sequential compactness.

[F3] [[thm-holder-inequality-for-integrals]] and [[def-weak-topology-on-a-normed-space]]: integration against a bounded measurable test is a bounded linear functional on $L^1(Q_W)$ and is weakly continuous. These tests separate distinct classes, by taking the measurable sign of their difference.

[F4] [[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]] supplies compactness of products of compact Hausdorff spaces. [[def-tdmath-poisson-configuration-reference]] supplies the countable standard-Borel finite-cell coordinate model for simple locally finite configurations; [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]] extends consistent finite-dimensional laws under AC.

[F5] [[thm-tdmath-poisson-reference-count-properties]]: for bounded Borel $A$, $Q(N_A)$ is finite and $Q(e^{tN_A})=\exp(|A|(e^t-1))$ for every $t>0$.

[F6] [[thm-monotone-convergence-for-the-integral]] and [[thm-dominated-convergence]] supply the nonnegative truncation and Poisson exponential-tail limits used below. [[def-tdmath-local-tame-topology]] defines convergence by every measurable local test with at most linear count growth.

## Proof

**Given:** The data and finite constants in the Statement; the empty family is immediate, so suppose $\mathcal A$ is nonempty.

1.1 For each cube $W$, write $h_{P,W}=dP_W/dQ_W$. For $K>1$, the entropy bound and the negative-part bound in [F1] give
$$\int_{\{h_{P,W}>K\}}h_{P,W}\,dQ_W\le\frac{C_W+1/e}{\log K}.$$
Their $L^1$ norms are one. For any measurable $E$, split at $h=K$ to get $\int_Eh\,dQ_W\le KQ_W(E)+(C_W+1/e)/\log K$; choosing $K$ and then $Q_W(E)$ small proves uniform absolute continuity. Thus these densities are uniformly integrable, and their weak closure $K_W$ is weakly compact by [F2], and Hausdorff by [F3]. Testing against all indicators and $1$ shows that every member is a nonnegative density of integral one. The variational formula [F1] expresses entropy as a supremum of weakly continuous affine functions, so every member of $K_W$ retains $D(hQ_W\Vert Q_W)\le C_W$. [A1, F1, F2, F3, algebra]

2.1 Form the product $K_*:=\prod_WK_W$ over the countable set of integer cubes. By [F4] this is compact Hausdorff. Require consistency of the restrictions for every inclusion $W\subseteq V$ and stationarity for every real translation on every bounded measurable local test. These are closed conditions: each is an equality of integrals against bounded measurable functions on cubes containing the respective supports, so [F3] makes the equality continuous in its finitely many coordinates. Their common solution set $K_{\rm stat}$ is compact and contains the tuples from $\mathcal A$. A consistent tuple defines finite-dimensional laws on any finite set of unit cells by taking its marginal from a containing integer cube. A larger cube containing any two choices and the imposed nested consistency show that these definitions agree. By [F4], they extend to a unique law on the countable cell product. Each cell configuration is finite and simple; a bounded set meets finitely many cells, so the resulting configuration is simple and locally finite. The stationarity equations pass to this law. Its $W$-marginal is the tuple's density times $Q_W$, hence has entropy at most $C_W$. [A1, F3, F4, step 1.1, construct]

3.1 All laws constructed in step 2.1 have uniformly integrable local counts. Fix bounded $A\subset W$ and $t>0$. The bounded test $t\min(N_A\mathbf1_{\{N_A>K\}},M)$ in [F1], followed by $M\to\infty$ using [F6], gives
$$tE_P[N_A\mathbf1_{\{N_A>K\}}]\le C_W+\log E_Qe^{tN_A\mathbf1_{\{N_A>K\}}}.$$
For fixed $t$, the logarithm tends to zero as $K\to\infty$ by [F5] and dominated convergence [F6], since $e^{tN_A\mathbf1_{\{N_A>K\}}}\le e^{tN_A}$. First choose $t$ large and then $K$ large; this proves uniform integrability of $N_A$ over all those laws. It also proves finite expected unit-cell count, so every constructed law belongs to $\mathcal P^1_{\rm stat}(\Omega)$. [F1, F5, F6, step 2.1, algebra]

4.1 The extension map from $K_{\rm stat}$ to these laws is continuous for every bounded local test by [F3]. For a tame test $|f|\le b(1+N_A)$, replace $f$ by $f\mathbf1_{\{N_A\le K\}}$. The uniform error is bounded by $bE_P[(1+N_A)\mathbf1_{\{N_A>K\}}]$, tending to zero uniformly by step 3.1. Hence this map is continuous for every local tame test. Its image is compact in $\tau_L$ and contains $\mathcal A$. The topology is Hausdorff, since bounded local indicators determine the law, so the closure of $\mathcal A$ is a closed subset of this compact image. This proves relative compactness and the asserted retained bounds in its closure. [F3, F6, step 2.1, step 3.1]

5.1 Each compact weak set $K_W$ is weakly sequentially compact by [F2]. Enumerate the cubes and repeatedly extract subsequences converging in the next coordinate; the diagonal subsequence converges in all cube coordinates. AC permits these countably many extractions. Every closed consistency and stationarity equality remains true at the limiting tuple, so step 2.1 constructs its law, and the uniform tails from step 3.1 upgrade bounded-local convergence to local-tame convergence as in step 4.1. This proves relative sequential compactness for $\mathcal A$. Finally, for any local-tame convergent net, each bounded measurable test on $W$ has convergent expectations; taking the supremum of their continuous affine variational expressions [F1] proves lower semicontinuity of the finite-region entropy. [A1, F1, F2, F3, F6, step 2.1, step 3.1, step 4.1]

5.2 For the eventual-bound sequence version, enumerate the integer cubes. At the first coordinate discard the finite prefix before its entropy bound holds, and extract a weakly convergent subsequence in the corresponding compact density closure of step 1.1. At the next coordinate discard its finite exceptional prefix from that subsequence and extract again; repeat and diagonalize. Each fixed coordinate then converges weakly to a nonnegative density of mass one and entropy at most its $C_W$. Every consistency or stationarity equality involves finitely many cube coordinates, so it holds along a sufficiently late tail and passes to the limiting tuple as in step 2.1. That step's standard-Borel extension therefore gives a stationary law. For each bounded $A\subset W$, the count-tail estimate of step 3.1 holds uniformly on the sequence's sufficiently late tail; its finitely many remaining laws each have integrable $N_A$, so dominated convergence controls their tails as well. Thus the counts are uniformly integrable over the entire sequence, and the limiting law has finite intensity. The truncation argument of step 4.1 upgrades the diagonal bounded-local convergence to local-tame convergence. The same construction begins with any subsequence of indices tending to infinity. This proves the eventual-bound assertion with its cube-dependent thresholds. [A1, F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
