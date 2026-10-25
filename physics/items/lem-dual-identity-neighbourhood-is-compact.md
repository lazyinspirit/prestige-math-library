---
id: lem-dual-identity-neighbourhood-is-compact
kind: lemma
title: "A compact identity neighbourhood in the dual"
deps:
- def-pontryagin-dual-and-compact-open-topology
- lem-pointwise-limits-of-characters-are-characters
- lem-unit-circle-is-a-compact-metrizable-topological-group
- cor-equicontinuous-families-into-a-compact-metric-target
- thm-ascoli-arzela-sufficiency
- lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family
- lem-pointwise-closure-preserves-equicontinuity
- def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness
- def-compact-open-topology-for-topological-domains
- def-topology-of-pointwise-convergence
- def-locally-compact-space
- lem-topological-group-translations-and-inversion
- def-complex-metric-convergence-and-continuity
- def-axiom-of-choice
- thm-compact-iff-fip
- def-finite-intersection-property
- thm-closure-characterised-by-nets
- def-directed-set-and-net
- def-compact-space
- lem-continuity-is-local-and-pastes
- def-continuous-map-top
- lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-dual-identity-neighbourhood-is-compact and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-10; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"4865d2ca0649746b0c156deeb48bb831d132efabca7e5dc19c5f355558ed76fa","evidence":["research/frontier-38-owner-30-reader-10.md","research/frontier-38-owner-30-reader-findings-10.json","research/frontier-38-owner-30-dispatch/reader-reader-10.result.json","research/frontier-38-owner-30-step5-hash-10-post-5a.json","research/frontier-38-owner-30-alpha-batch-10-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-10.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-dual-identity-neighbourhood-is-compact.md","historical_raw_sha256":"64011f4b29299272576776e988a2e1e38477f8e0fec2aaeeab108cd2ecef3fd1","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:39:42.737Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.1, Theorem 7.2(f2)-(f3), printed p. 47: W(U,Lambda_4) has compact closure and, when U has compact closure, is an identity neighbourhood with compact closure."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Section 34D, printed pp. 137-138, states local compactness of the character group. The compact equicontinuous identity neighbourhood is proved here using the published Ascoli theorem."
status: published
origin: pipeline
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally
compact Hausdorff abelian group, $K\subseteq G$ a symmetric compact
neighbourhood of $0$, and $D:=\{z\in\mathbb T:|z-1|\le1/2\}$. Then
$N:=\{\gamma\in\widehat G:\gamma[K]\subseteq D\}$ is equicontinuous
([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]),
is compact in the compact-open topology of $C(G,\mathbb T)$
([[def-compact-open-topology-for-topological-domains]]), and is a neighbourhood
of the identity character in $\widehat G$.

## Facts & Assumptions

[F1] $\mathbb T$ is a compact metrizable topological abelian group with continuous multiplication; the map $z\mapsto|z-1|$ is continuous, so $D=\{|z-1|\le1/2\}$ is closed in $\mathbb T$, and $1\in D$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-complex-metric-convergence-and-continuity]])

[F2] Every subgroup $H\le\mathbb T$ with $H\subseteq D$ is trivial; equivalently, for every $z\in\mathbb T$ with $z\ne1$ there is a positive integer $k$ with $z^{k}\notin D$. ([[lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup]])

[F3] In a compact space every family of closed sets with the finite intersection property has nonempty intersection. ([[thm-compact-iff-fip]], [[def-finite-intersection-property]], [[def-compact-space]])

[F4] The dual consists of the continuous homomorphisms $\gamma:G\to\mathbb T$ with the compact-open topology and pointwise multiplication; $S(K,V)=\{\gamma:\gamma[K]\subseteq V\}$ is subbasic open; the compact-open topology is finer than the topology of pointwise convergence, whose subbasic sets on $C(G,\mathbb T)$ are the $S(\{x\},V)$. ([[def-pontryagin-dual-and-compact-open-topology]], [[def-compact-open-topology-for-topological-domains]], [[def-topology-of-pointwise-convergence]])

[F5] Pointwise limits of characters are characters: the pointwise limit of continuous homomorphisms taken along an equicontinuous family is a character, and the pointwise closure of an equicontinuous family of continuous maps consists of continuous maps. ([[lem-pointwise-limits-of-characters-are-characters]], [[lem-pointwise-closure-preserves-equicontinuity]])

[F6] A point lies in the closure of a set exactly when some net in the set converges to it. ([[thm-closure-characterised-by-nets]], [[def-directed-set-and-net]])

[F7] Assume the Axiom of Choice. For any topological space $X$ and compact metric space $Y$, the compact-open closure of an equicontinuous family $\mathcal F\subseteq C(X,Y)$ is compact. ([[cor-equicontinuous-families-into-a-compact-metric-target]], [[thm-ascoli-arzela-sufficiency]], [[def-axiom-of-choice]])

[F8] Translations and the maps $u\mapsto ku$ $(k\ge1)$ on a topological group are continuous, and a finite intersection of open neighbourhoods of $0$ is an open neighbourhood of $0$; composites of continuous maps are continuous. ([[lem-topological-group-translations-and-inversion]], [[lem-continuity-is-local-and-pastes]], [[def-continuous-map-top]])

## Proof

**Given:** A locally compact Hausdorff abelian group $G$, a symmetric compact neighbourhood $K$ of $0$, the set $D=\{|z-1|\le1/2\}$, and $N=\{\gamma\in\widehat G:\gamma[K]\subseteq D\}$.

1.1 $N$ is a neighbourhood of the identity character: the constant character $1$ satisfies $1[K]=\{1\}\subseteq D$ by [F1], so $1\in N$; and the open arc $D^\circ=\{z\in\mathbb T:|z-1|<1/2\}$ contains $1$. Hence $S(K,D^\circ)$ is a subbasic compact-open neighbourhood of the identity by [F4], and $S(K,D^\circ)\subseteq N$ because $D^\circ\subseteq D$. Thus $N$ is a neighbourhood, although it need not be open. [F1, F4]

1.2 $N$ is equicontinuous: fix $\varepsilon>0$ and put $O:=B(1,\varepsilon)\cap\mathbb T$, an open neighbourhood of $1$ in $\mathbb T$; for $k\ge1$ put $F_{k}:=\{z\in\mathbb T:z^{j}\in D\text{ for }j=1,\dots,k\}$. Each $F_{k}$ is closed, being a finite intersection of preimages of the closed set $D$ under the power maps $z\mapsto z^{j}$, which are continuous by induction on $j$ from the continuity of multiplication on $\mathbb T$ by [F1]; the sequence $F_{1}\supseteq F_{2}\supseteq\cdots$ has intersection $\{1\}$ by [F2], because any $z\ne1$ satisfies $z^{j}\notin D$ for some $j$. Hence $F_{k}\subseteq O$ for some $k$: otherwise the sets $F_{k}\setminus O$ would be nonempty closed sets with the finite intersection property, being decreasing, and [F3] would produce $z\in\bigcap_{k}(F_{k}\setminus O)\subseteq\{1\}\setminus O=\varnothing$. [F1, F2, F3, F8]

2.1 With $k$ as in step 1.2 put $U:=\{u\in G:ju\in K\text{ for }j=0,1,\dots,k\}$, a neighbourhood of $0$: for $j\ge1$ the set $\{u:ju\in K\}$ contains the open set $\{u:ju\in K^{\circ}\}$, which is the preimage of the open $K^{\circ}$ under the continuous map $u\mapsto ju$ and contains $0$, while $0\in K$ for $j=0$; a finite intersection of neighbourhoods of $0$ is a neighbourhood of $0$ by [F8]. For $u\in U$ and $\gamma\in N$ one has $\gamma(u)^{j}=\gamma(ju)\in D$ for $j=1,\dots,k$, so $\gamma(u)\in F_{k}\subseteq O$, that is $|\gamma(u)-1|<\varepsilon$. Thus $N$ is equicontinuous at $0$. [step 1.2, F1, F8]

3.1 $N$ is equicontinuous at every point $x_{0}\in G$: for $x-x_{0}\in U$ and $\gamma\in N$, $\gamma(x)=\gamma(x_{0})\gamma(x-x_{0})$ and hence $|\gamma(x)-\gamma(x_{0})|=|\gamma(x_{0})|\,|\gamma(x-x_{0})-1|=|\gamma(x-x_{0})-1|<\varepsilon$ by step 2.1 and [F1]. [step 2.1, F1]

4.1 $N$ is closed in $C(G,\mathbb T)$ for the compact-open topology: let $\gamma$ lie in the compact-open closure of $N$. The compact-open topology is finer than the pointwise topology by [F4], so $\gamma$ lies in the pointwise closure of $N$; by [F6] some net $(\gamma_{j})$ in $N$ converges to $\gamma$ pointwise. All $\gamma_{j}$ are characters and the family $N$ is equicontinuous by step 3.1, so $\gamma$ is a character by [F5]; and $\gamma[K]\subseteq D$ because each $\gamma_{j}[K]\subseteq D$ and $D$ is closed by [F1]. Hence $\gamma\in N$ and $N$ is compact-open closed. [step 1.1, step 3.1, F1, F4, F5, F6]

5.1 $N$ is compact in the compact-open topology: $N\subseteq C(G,\mathbb T)$ is equicontinuous by step 3.1 and $\mathbb T$ is a compact metric space by [F1], so the compact-open closure of $N$ is compact by [F7]; by step 4.1 that closure is $N$ itself. [step 3.1, step 4.1, F1, F7]

6.1 By steps 1.1, 3.1 and 5.1 the set $N$ is equicontinuous, compact in the compact-open topology, and a neighbourhood of the identity character in $\widehat G$. [step 1.1, step 3.1, step 5.1] ∎
