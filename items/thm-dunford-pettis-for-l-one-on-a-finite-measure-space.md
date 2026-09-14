---
id: thm-dunford-pettis-for-l-one-on-a-finite-measure-space
kind: theorem
title: "Dunford--Pettis for real $L^1$ on a finite measure space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-ultrafilter-lemma, def-hahn-banach-extension-principle-relative, thm-hahn-banach-dominated-extension, def-banach-space, def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-riesz-fischer-completeness-of-l-p, thm-absolute-continuity-of-the-integral, thm-holder-inequality-for-integrals, thm-sigma-finite-duality-for-bounded-functionals-on-l-p, def-weak-topology-on-a-normed-space, def-weak-star-topology, lem-basic-weak-star-neighborhoods, thm-banach-alaoglu, thm-eberlein-smulian, thm-weakly-convergent-sequences-are-norm-bounded, lem-index-map-grows, def-relative-weak-compactness-and-three-sequential-notions, thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces, thm-reflexivity-of-lp-for-one-less-p-less-infinity, thm-reflexive-iff-unit-ball-weakly-compact, cor-relative-hahn-banach-bidual-isometry, thm-baire-category-for-complete-metric-spaces, thm-finite-products-of-compact-spaces, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "Theorem 4.30, printed p. 115; Problem 23 A--B, printed pp. 466--468; partial solutions, printed pp. 544--547"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. Let $(S,\mathcal A,\mu)$ be a finite measure
space, and let $K$ be a subset of the real Banach space $L^1(\mu)$ of
almost-everywhere equivalence classes. Then $K$ is relatively weakly compact
if and only if it is uniformly integrable. Here uniform integrability is
equivalently the conjunction of $L^1$ boundedness and uniform absolute
continuity:

$$\sup_{f\in K}\|f\|_1<\infty,\qquad \forall\varepsilon>0\ \exists\delta>0\ \forall f\in K\ \forall E\in\mathcal A\quad \mu(E)<\delta\Longrightarrow\int_E|f|\,d\mu<\varepsilon.$$

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] AC supplies Dependent Choice and Countable Choice, the ultrafilter lemma,
and the real Hahn--Banach principle
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[thm-ultrafilter-lemma]], [[def-hahn-banach-extension-principle-relative]],
[[thm-hahn-banach-dominated-extension]]).

[L2] Real $L^1(\mu)$ is the almost-everywhere quotient with its integral norm
and is complete under Countable Choice, hence is Banach
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]],
[[thm-riesz-fischer-completeness-of-l-p]], [[def-banach-space]]).

[L3] On a finite measure space, uniform integrability is exactly $L^1$
boundedness plus the displayed uniform absolute continuity
([[thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces]]).

[L4] Under the principles supplied by [L1], Eberlein--Smulian identifies
relative weak compactness with relative weak sequential compactness, and every
weakly convergent sequence is norm bounded
([[def-relative-weak-compactness-and-three-sequential-notions]],
[[thm-eberlein-smulian]],
[[thm-weakly-convergent-sequences-are-norm-bounded]],
[[lem-index-map-grows]]).

[L5] An individual integrable function has absolutely continuous integral,
and under DC a nonempty complete metric space is a Baire space
([[thm-absolute-continuity-of-the-integral]],
[[thm-baire-category-for-complete-metric-spaces]]).

[L6] Under Countable Choice, real $L^2(\mu)$ is reflexive. Under the
ultrafilter lemma and HB, its closed ball is weakly compact
([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]],
[[thm-reflexive-iff-unit-ball-weakly-compact]]).

[L7] Holder's inequality gives the bounded inclusion $L^2\hookrightarrow L^1$
on a finite measure space. Since a finite measure is sigma-finite, every member
of $(L^1)^*$ is integration against a member of $L^\infty$
([[thm-holder-inequality-for-integrals]],
[[thm-sigma-finite-duality-for-bounded-functionals-on-l-p]]).

[L8] Under HB the canonical map $J_E:E\to E^{**}$ is linear and isometric.
The weak and weak-star topologies are their evaluation initial topologies, and
weak-star addition and scalar multiplication are continuous; weak-star space
is Hausdorff
([[cor-relative-hahn-banach-bidual-isometry]],
[[def-weak-topology-on-a-normed-space]], [[def-weak-star-topology]],
[[lem-basic-weak-star-neighborhoods]]).

[L9] Under the ultrafilter lemma, bidual balls are weak-star compact. Closed
subsets and continuous images of compact spaces are compact, finite products
of compact spaces are compact, and compact subsets of Hausdorff spaces are
closed ([[thm-banach-alaoglu]],
[[thm-closed-subspace-of-a-compact-space-is-compact]],
[[thm-compactness-under-continuous-maps]],
[[thm-finite-products-of-compact-spaces]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a finite measure space, $E=L^1(\mu;\mathbb R)$, and
$K\subseteq E$.

1.1 Expose every choice principle used below. By [L1], AC supplies Countable Choice for [L2] and [L6], DC for Baire and Eberlein--Smulian, the ultrafilter lemma for Alaoglu and the compactness forms in [L4], [L6], and [L9], and HB for [L4], [L6], and [L8]. No additional choice principle will be left implicit. [given, A1, L1]

1.2 Fix the Banach and weak-topology conventions. By [L2], $E$ is the real Banach space of classes, not the raw class of integrable representatives. Its weak topology is $\sigma(E,E^*)$. By [L8], $J_E$ is an isometry and a homeomorphism from weak $E$ to its image in $E^{**}$ with the relative weak-star topology: the identity $(J_Ef)(\Lambda)=\Lambda(f)$ makes the two evaluation families identical. [given, L2, L8]

1.3 Dispose of the empty and null cases. If $K=\varnothing$, it is relatively weakly compact and uniformly integrable vacuously. If $\mu(S)=0$, then $E=\{0\}$ and every subset of $E$ is finite, weakly compact, and uniformly integrable. Hence below we may assume $K\ne\varnothing$ and $\mu(S)>0$. [given, L2, L3, L4]

2.1 A relatively weakly compact family is norm bounded. Suppose $K$ is relatively weakly compact but not norm bounded. Using AC choose $f_n\in K$ with $\|f_n\|_1>n$. By Eberlein--Smulian in [L4], a subsequence $f_{n_j}$ converges weakly in $E$. The weak-sequence boundedness theorem in [L4] makes its norms bounded, whereas strict increase of the indices gives $n_j\geq j$ and hence $\|f_{n_j}\|_1>n_j\geq j$, a contradiction. [A1, L4, step 1.1, step 1.2, choose]

2.2 Set up the Baire argument for a weakly null sequence. Let $g_n\rightharpoonup0$ in $E$, and let $\mathcal X=\{[\mathbf1_A]:A\in\mathcal A\}\subseteq E$ with the $L^1$ metric. This set is closed: if a sequence of indicator classes converges in $L^1$, [L2] supplies a subsequence of representatives converging almost everywhere to a representative $u$ of the limit; outside the countable union of the null sets on which those representatives differ from their indicators, $u$ is a pointwise limit of zeros and ones and therefore equals an indicator. Thus $\mathcal X$ is complete and nonempty. [L2, L5, L7, step 1.1, step 1.2]

For $\eta>0$ define

$$\mathcal X_m=\left\{[\mathbf1_A]\in\mathcal X:\left|\int_Ag_n\,d\mu\right|\leq\eta\ \text{for every }n\geq m\right\}.$$

Each $\mathcal X_m$ is closed. Indeed, $L^1$ convergence of indicators means
$\mu(A_j\mathbin\triangle A)\to0$, and [L5] applied to the fixed $g_n$ gives
$\int_{A_j\mathbin\triangle A}|g_n|\to0$ for every $n$. Also
$\bigcup_m\mathcal X_m=\mathcal X$, because
$h\mapsto\int_Ah$ is a bounded functional by the endpoint Holder inequality
in [L7], and hence weak nullity gives $\int_Ag_n\to0$ for each fixed $A$.

2.3 Uniform integrability gives weakly compact truncation approximants. For the reverse implication assume $K$ is uniformly integrable and fix $\varepsilon>0$. By [L3] choose $M>0$ so that $\int_{\{|f|>M\}}|f|<\varepsilon$ for all $f\in K$. The truncation $T_Mf=\max(-M,\min(f,M))$ is well defined on classes, measurable, and [L3, L6, L7, step 1.1, step 1.2, step 1.3, construct]

$$\|f-T_Mf\|_1\leq\int_{\{|f|>M\}}|f|\,d\mu<\varepsilon.$$

Every $T_Mf$ belongs to $L^2$ and has $L^2$ norm at most
$R=M\sqrt{\mu(S)}$. By [L6], $R B_{L^2}$ is weakly compact. The inclusion
$I:L^2\to E$ satisfies $\|Ih\|_1\leq\sqrt{\mu(S)}\|h\|_2$ by [L7] and is
weak-to-weak continuous: if $\Lambda\in E^*$, [L7] writes
$\Lambda(h)=\int hg$ for some $g\in L^\infty$; finiteness of $\mu$ puts
$g\in L^2$, so this is an $L^2$-continuous functional. Therefore
$C_\varepsilon=I(RB_{L^2})$ is weakly compact and
$K\subseteq C_\varepsilon+\varepsilon B_E$.

3.1 Apply Baire to obtain one uniform tail neighborhood. The Baire theorem applied to the complete nonempty space $\mathcal X$ and its closed cover $(\mathcal X_m)$ gives $N$, an indicator $[\mathbf1_{A_0}]$, and $\rho>0$ such that every indicator whose $L^1$ distance from $[\mathbf1_{A_0}]$ is below $\rho$ belongs to $\mathcal X_N$. [L5, step 1.1, step 2.2]

3.2 Put the uniformly integrable family into a compact bidual closure. Uniform integrability gives a bound $C$ for $\|f\|_1$, $f\in K$. Let $G=\overline{J_E(K)}^{\,w^*}$ in $E^{**}$. Every $z\in G$ satisfies $\|z\|\leq C$: for $\Lambda\in E^*$, every weak-star neighborhood of $z$ meets $J_E(K)$, so $|z(\Lambda)|\leq C\|\Lambda\|$ by letting the neighborhood radius tend to zero. Hence $G\subseteq C B_{E^{**}}$. Banach--Alaoglu and [L9] make that ball weak-star compact; $G$, being closed in it, is weak-star compact. [L3, L8, L9, step 1.1, step 1.2, step 2.3]

4.1 Derive uniform absolute continuity for every weakly null sequence. Fix a desired $\varepsilon>0$ and run steps 2.2--3.1 with $\eta=\varepsilon/8$. If $\mu(A)<\rho$, put $B_1=A_0\cup A$ and $B_2=B_1\setminus A$. Both indicators are within $\mu(A)<\rho$ of $\mathbf1_{A_0}$, so for $n\geq N$, [L5, step 3.1]

$$\left|\int_Ag_n\right|=\left|\int_{B_1}g_n-\int_{B_2}g_n\right|\leq2\eta.$$

Apply this to $A\cap\{g_n\geq0\}$ and $A\cap\{g_n<0\}$. Their measures are
below $\rho$, and the two signed integrals have absolute value at most
$2\eta$, whence $\int_A|g_n|\leq4\eta=\varepsilon/2$ for $n\geq N$.
For the finitely many $n<N$, [L5] supplies a common positive $\delta\leq\rho$
for which every corresponding integral is below $\varepsilon$. Thus
$\mu(A)<\delta$ implies $\int_A|g_n|<\varepsilon$ for every $n$: every weakly
null sequence has uniformly absolutely continuous integrals.

4.2 Trap the bidual closure in compact neighborhoods of the canonical image. For each $\varepsilon>0$, the set $J_E(C_\varepsilon)$ is weak-star compact, because $C_\varepsilon$ is weakly compact and $J_E$ is weak-to-weak-star continuous. The product $J_E(C_\varepsilon)\times\varepsilon B_{E^{**}}$ is compact by [L9], and weak-star addition is continuous by [L8]. Hence [L8, L9, step 1.2, step 2.3, step 3.2]

$$S_\varepsilon:=J_E(C_\varepsilon)+\varepsilon B_{E^{**}}$$

is weak-star compact and therefore weak-star closed in the Hausdorff weak-star
space. Step 2.3 gives $J_E(K)\subseteq S_\varepsilon$, so its weak-star
closure satisfies $G\subseteq S_\varepsilon$ for every $\varepsilon>0$.

5.1 Every weakly convergent sequence is uniformly integrable. If $f_n\rightharpoonup f$, then $g_n=f_n-f$ is weakly null. Step 4.1 gives uniform absolute continuity of $(g_n)$, and [L4] gives norm boundedness. The individual function $f$ has absolutely continuous integral by [L5], so $\int_A|f_n|\leq\int_A|g_n|+\int_A|f|$ makes $(f_n)$ uniformly absolutely continuous as well. It is norm bounded by the triangle inequality. Thus [L3] makes the entire sequence $(f_n)$ uniformly integrable, including its finite initial segment. [L3, L4, L5, step 1.1, step 4.1]

5.2 Show that the compact bidual closure actually lies in $J_E(E)$. First $J_E(E)$ is norm closed. Indeed, if $y$ is in its norm closure, AC chooses $x_n\in E$ with $\|y-J_Ex_n\|<1/(n+1)$. Isometry makes $(x_n)$ Cauchy; completeness of $E$ gives $x_n\to x$, and then $J_Ex_n\to J_Ex=y$. [A1, L2, L8, step 1.1, step 4.2, choose]

Now let $z\in G$. From $G\subseteq S_{1/(n+1)}$, AC chooses
$c_n\in J_E(C_{1/(n+1)})\subseteq J_E(E)$ with
$\|z-c_n\|\leq1/(n+1)$. Hence $z$ belongs to the norm closure of $J_E(E)$,
which is $J_E(E)$. Therefore $G\subseteq J_E(E)$.

6.1 Complete the relatively-weakly-compact-to-UI implication. Assume $K$ is relatively weakly compact. If its integrals were not uniformly absolutely continuous, AC would supply $\varepsilon_0>0$, $f_n\in K$, and $A_n\in\mathcal A$ with $\mu(A_n)<1/(n+1)$ but $\int_{A_n}|f_n|\geq\varepsilon_0$. By [L4], a subsequence $f_{n_j}$ converges weakly. Step 5.1 makes that subsequence uniformly integrable and hence uniformly absolutely continuous by [L3]. But $n_j\geq j$ makes $\mu(A_{n_j})\to0$, contradicting the displayed lower bound. Thus $K$ is uniformly absolutely continuous; step 2.1 supplies norm boundedness, so [L3] makes $K$ uniformly integrable. [A1, L3, L4, step 1.1, step 2.1, step 5.1, choose]

6.2 Complete the UI-to-relatively-weakly-compact implication. Assume $K$ is uniformly integrable. Step 3.2 makes $G$ weak-star compact and step 5.2 puts it inside $J_E(E)$. Since $J_E$ is the weak-to-relative-weak-star homeomorphism of step 1.2, $J_E^{-1}(G)$ is weakly compact. Because ambient weak-star closure agrees with relative closure once $G\subseteq J_E(E)$, this inverse is exactly $\overline K^{\,w}$. Thus $K$ is relatively weakly compact in the sense of [L4]. [L4, L8, L9, step 1.2, step 3.2, step 5.2]

7.1 Combine both directions and account for all boundaries. [A1, L3, step 1.3, step 6.1, step 6.2] Steps 6.1 and 6.2 prove the two implications; step 1.3 covers empty $K$ and null measure spaces. Zero truncation levels are unnecessary because uniform integrability permits positive $M$, and arbitrary positive $\varepsilon$ is retained in the bidual intersection argument. The theorem is specifically for real $L^1$; no complex-duality conclusion is silently used. AC is spent only as itemized in step 1.1 and for the explicit countable selections in the norm-boundedness argument, step 5.2, and step 6.1. [A1, step 1.1, step 1.3, step 6.1, step 6.2] ∎