---
id: thm-tdmath-local-tame-entropy-compactness
kind: theorem
title: Compactness of Finite-Specific-Entropy Levels in the Local-Tame Topology
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-axiom-of-choice, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-tdmath-poisson-configuration-reference, thm-tdmath-poisson-reference-count-properties, def-tdmath-local-tame-topology, def-tdmath-finite-region-relative-entropy, lem-tdmath-relative-entropy-variational-and-chain-rules, thm-tdmath-specific-entropy-density, def-standard-borel-space, def-weak-topology-on-a-normed-space, thm-holder-inequality-for-integrals, lem-standard-complete-metric-on-a-countable-product, lem-borel-subspaces-admit-polish-presentations, lem-finite-products-of-standard-borel-spaces-are-standard-borel, thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, thm-dunford-pettis-for-l-one-on-a-finite-measure-space, thm-eberlein-smulian, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, thm-monotone-convergence-for-the-integral, thm-dominated-convergence]
justified_by: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  def-standard-borel-space: mathematical-premise
  def-weak-topology-on-a-normed-space: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  lem-standard-complete-metric-on-a-countable-product: mathematical-premise
  lem-borel-subspaces-admit-polish-presentations: mathematical-premise
  lem-finite-products-of-standard-borel-spaces-are-standard-borel: mathematical-premise
  thm-kolmogorov-extension-for-standard-borel-coordinate-spaces: mathematical-premise
  thm-dunford-pettis-for-l-one-on-a-finite-measure-space: mathematical-premise
  thm-eberlein-smulian: mathematical-premise
  thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Proposition 2.6 and its proof, printed pp.184 and 197–198 / PDF pp.7 and 20–21, compact entropy levels in a linear-count-growth local topology"
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Section 6, printed pp.48–50 / PDF pp.9–12, finite-state lattice entropy density and local tests; comparison only"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB. Let
$$\mathcal H_c:=\{P\in\mathcal P^1_{\rm stat}(\Omega): I(P)\leq c\},\qquad c\in[0,\infty),$$
where $I$ and the local-tame topology $\tau_L$ are defined by [[thm-tdmath-specific-entropy-density]] and [[def-tdmath-local-tame-topology]]. Then $\mathcal H_c$ is compact and sequentially compact in $\tau_L$. This is a pure measure-theoretic compactness theorem for simple locally finite configurations relative to the independent unit-intensity Poisson reference; it makes no thermodynamic-limit or physical claim.

## Facts & Assumptions

**Given:** AC, the ultrafilter extension principle, DC, HB, dimension $d\geq1$, and a finite $c\geq0$.

[A1] AC supplies the standard-Borel extension and the choice principles required by the local standard-Borel and Dunford–Pettis suppliers ([[def-axiom-of-choice]]).

[A2] The ultrafilter extension principle gives Tychonoff compactness for arbitrary products of compact Hausdorff spaces. Together with DC and HB it supplies the weak Eberlein–Šmulian equivalence: these are all three hypotheses of [[thm-eberlein-smulian]] ([[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]).

[F1] For every integer $m\geq1$, $I(P)=\sup_{m\geq1}m^{-d}D(P_{\Lambda_m}\Vert Q_{\Lambda_m})$ ([[thm-tdmath-specific-entropy-density]]).

[F2] Relative entropy is nonnegative, decreases under restriction, and obeys its variational formula ([[def-tdmath-finite-region-relative-entropy]], [[lem-tdmath-relative-entropy-variational-and-chain-rules]]).

[F3] On a finite measure space, a uniformly integrable family in real $L^1$ is relatively weakly compact, and relative weak compactness is equivalent to relative weak sequential compactness under the named choice hypotheses ([[thm-dunford-pettis-for-l-one-on-a-finite-measure-space]], [[thm-eberlein-smulian]]).

[F4] A product of compact Hausdorff spaces is compact under the ultrafilter extension principle, and consistent finite-dimensional laws on standard-Borel coordinate spaces extend to a unique probability law under AC ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]], [[def-standard-borel-space]], [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]).

[F5] Under $Q$, a bounded-region count is Poisson and has finite exponential moment $E_Qe^{aN_A}=\exp(|A|(e^a-1))$ for every $a>0$ ([[thm-tdmath-poisson-reference-count-properties]], [[def-tdmath-poisson-configuration-reference]]).

[F6] A bounded measurable test defines a bounded linear functional on real $L^1(Q_W)$ by integration, using Hölder; it is therefore weakly continuous by the definition of the weak topology. Such tests separate distinct $L^1$ classes (test a nonzero difference against its measurable sign), so the weak topology is Hausdorff ([[thm-holder-inequality-for-integrals]], [[def-weak-topology-on-a-normed-space]]).

[F7] Monotone and dominated convergence justify the nonnegative count truncations and the exponential-moment limit used below ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]]).

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Let $W=a+[0,m)^d$ be any integer cube, with $a\in\mathbb Z^d$ and integer $m\geq1$. Translation invariance and [F1] give $D(P_W\Vert Q_W)\leq c|W|$. If $A$ is any bounded Borel set, choose one such cube $W$ containing it; by restriction monotonicity [F2], every $P\in\mathcal H_c$ satisfies $D(P_A\Vert Q_A)\leq C_A:=c|W|$. [A1, F1, F2, construct]

1.2 For any probability density $h$ relative to a probability $Q$ with $D(hQ\Vert Q)\leq C$, and any $K>1$, $$\int_{\{h>K\}}h\,dQ\leq\frac{C+1/e}{\log K}.$$ Indeed, $-u\log u\leq1/e$ on $[0,1]$, while $h\log h\geq h\log K$ on $\{h>K\}$. Split the entropy integral at $h=1$ and combine these bounds. Thus, for each fixed cube $W$, the densities $dP_W/dQ_W$ with $P\in\mathcal H_c$ have $L^1(Q_W)$ norm one and are uniformly integrable. [F1, F2, algebra]

2.1 Fix $W$. By [F3], the weak closure $K_W$ of these densities in real $L^1(Q_W)$ is weakly compact. It is Hausdorff by [F6]. Every $h\in K_W$ remains nonnegative and has integral one: testing against each indicator and against $1$ gives weakly closed conditions by [F6]. Also $D(hQ_W\Vert Q_W)\leq c|W|$, because [F2] expresses $D$ as the supremum of weakly continuous affine functions of $h$, with continuity given by [F6]. Hence all entropy sublevels used below are closed in their local weak topologies. [A1, F2, F3, F6, step 1.2]

3.1 Index all integer cubes $W=a+[0,m)^d$ with $a\in\mathbb Z^d$ and integer $m\geq1$ by their countable set of pairs $(a,m)$, and form the product $K_*:=\prod_WK_W$. It is compact by [A2] and Hausdorff because each weak $L^1$ topology is Hausdorff by [F6]. Impose the following closed conditions on its tuples: whenever $W\subseteq V$, the $W$-marginal of $h_VQ_V$ equals $h_WQ_W$; and, for every real translation $x$ and bounded local measurable test $f$, the two marginals containing the supports of $f$ and $f\circ T_x$ satisfy $E_Pf=E_P(f\circ T_x)$. Each equality is closed because it tests weak convergence against bounded measurable functions on a containing cube, which are continuous by [F6]. The intersection $K_{\rm stat}$ of these closed conditions is compact. [A2, F6, step 2.1, construct]

4.1 A tuple in $K_{\rm stat}$ defines consistent finite-dimensional laws on the countable standard-Borel cell spaces: for a finite set of cells, choose any integer cube containing it and take that marginal. If two cubes contain the same finite set, a larger integer cube contains both; the imposed nested consistency makes their induced laws agree. By [F4] there is a unique law $P$ on $\Omega$ with those marginals. The imposed equalities make $P$ stationary. For each integer cube $W$, consistency identifies $P_W=h_WQ_W$ for its coordinate $h_W\in K_W$, so step 2.1 gives $D(P_W\Vert Q_W)\leq c|W|$. In particular, these local entropy bounds hold for every law constructed from $K_{\rm stat}$ before its finite intensity has been established. [A1, F4, step 2.1, step 3.1, construct]

5.1 The same variational inequality controls particle-count tails uniformly on the whole family of laws constructed from $K_{\rm stat}$. Fix bounded $A$ and an integer cube $W\supseteq A$. For every such law $P$, its $W$ marginal is $h_WQ_W$ with $h_W\in K_W$, so step 2.1 gives $D(P_W\Vert Q_W)\leq C_A:=c|W|$. Let $K\geq0$, $a>0$, and $M\in\mathbb N$. The bounded local test $\phi_M=a\min(N_A\mathbf1_{\{N_A>K\}},M)$ in [F2] gives $$aE_P\min(N_A\mathbf1_{\{N_A>K\}},M)\leq C_A+\log E_Q\exp(\phi_M).$$ As $M\to\infty$, monotone convergence yields $$aE_P[N_A\mathbf1_{\{N_A>K\}}]\leq C_A+\log E_Qe^{aN_A\mathbf1_{\{N_A>K\}}}.$$ By [F5] and dominated convergence the logarithmic term tends to zero as $K\to\infty$. First choose $a$ large and then $K$ large; this proves uniform integrability of the counts $N_A$ over all laws constructed from $K_{\rm stat}$. Taking $A=C_0$ gives finite cell intensity for each such $P$. Since step 4.1 gives stationarity, $P\in\mathcal P^1_{\rm stat}(\Omega)$; its origin-anchored cube bounds from step 4.1 and [F1] now give $I(P)\leq c$. [A1, F2, F5, F7, step 2.1, step 4.1, algebra]

6.1 The product compactness in step 3.1 first gives compactness for all bounded local tests. For any tame $f$ supported in $A$ with $|f|\leq b(1+N_A)$, set $f_K=f\mathbf1_{\{N_A\leq K\}}$. Then $f_K$ is bounded and local, and its expectation is weakly continuous by [F6], while $$\sup_{P\in\mathcal H_c}|E_P(f-f_K)|\leq b\sup_{P\in\mathcal H_c}E_P[(1+N_A)\mathbf1_{\{N_A>K\}}]\longrightarrow0$$ by step 5.1. Thus on the entropy level the tame expectation maps are uniform limits of bounded-local continuous maps. Every $P\in\mathcal H_c$ supplies its cube densities and gives a tuple in $K_{\rm stat}$, so the extension map from $K_{\rm stat}$ is onto; the local expectations just shown make it continuous. Its image $\mathcal H_c$ is compact in $\tau_L$. [F6, step 3.1, step 4.1, step 5.1]

7.1 Each $K_W$ is weakly compact in real $L^1(Q_W)$ and hence weakly sequentially compact by [F3]. Given a sequence in $K_{\rm stat}$, successively take subsequences converging in the first, second, and later cube coordinates and diagonalize; AC supplies the countable choices. The limit tuple preserves all closed consistency, stationarity, and entropy constraints from step 3.1, so steps 4.1–5.1 give a law in $\mathcal H_c$. Count-tail uniformity from step 5.1 upgrades coordinate convergence on bounded local tests to convergence for every tame test by the same truncation estimate in step 6.1. Hence $\mathcal H_c$ is sequentially compact in $\tau_L$. [A1, A2, F3, step 3.1, step 4.1, step 5.1, step 6.1] ∎

