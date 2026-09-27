---
id: thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family
kind: theorem
title: "Deleting a leaf and a co-leaf preserves virality of a finite forbidden family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-viral-property-for-a-finite-family, def-coleaf-of-a-graph, def-viral-divisive-finite-family, lem-leaf-extension-copy-or-blockade, lem-viral-divisive-finite-family-yields-weak-viral, thm-nikiforov-few-induced-copies-force-a-linear-restricted-set, cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property, cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Theorems 6.1 and 7.8"
      url: "https://arxiv.org/pdf/2307.06455"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $\mathcal F$ be a finite family of finite graphs. Let $H_1\in\mathcal F$
have a leaf $v$, and let $H_2\in\mathcal F$ have a co-leaf $w$. Write
$H_1'=H_1-v$ and $H_2'=H_2-w$. If

$$\mathcal F_1=\{H_1'\}\cup(\mathcal F\setminus\{H_1\}),\qquad \mathcal F_2=\{H_2'\}\cup(\mathcal F\setminus\{H_2\})$$

are both viral, then $\mathcal F$ is viral.

## Facts & Assumptions

**Given:** The family, chosen graphs and vertices, and viral modified families in the statement.

[L1] A co-leaf of $H_2$ is a leaf of $\overline{H_2}$ ([[def-coleaf-of-a-graph]]). Complementation preserves labelled induced embedding counts: $\operatorname{ind}_{H_2}(G)= \operatorname{ind}_{\overline{H_2}}(\overline G)$, and the same holds after deleting $w$.

[L2] For each fixed graph $H$ and $0<\eta<1/2$, Nikiforov's theorem gives $\delta>0$ such that fewer than $(\delta|G|)^{|H|}$ induced $H$-embeddings force an $\eta$-restricted set of size at least $\delta|G|$ ([[thm-nikiforov-few-induced-copies-force-a-linear-restricted-set]]).

[L3] The leaf-extension blockade lemma supplies its three quantitative outcomes for ordinary graphs with a leaf ([[lem-leaf-extension-copy-or-blockade]]). Applying it in $\overline G$ to the leaf of $\overline{H_2}$ gives the corresponding dense-blockade alternative in $G$.

[L4] Divisiveness implies virality ([[lem-viral-divisive-finite-family-yields-weak-viral]], [[def-viral-divisive-finite-family]]).

## Proof

**Proof technique:** iterative sparsification and a divisive blockade.

1.1 If $|H_1|\le2$ or $|H_2|\le2$, the chosen graph has two vertices: a leaf or co-leaf cannot occur on fewer. Every graph on two vertices has the Erdős-Hajnal property by the at-most-three-vertex theorem, so its singleton family is viral by the single-graph equivalence. The same viral exponent works for $\mathcal F$: the few-copy premise for $\mathcal F$ includes the premise for that singleton. Hence assume both orders are at least three. Put $$h=\max\{|H_1|,|H_2|,4\},\qquad c=4^{-h}.$$ [given, L1]

1.2 Apply [L2] to $H_1$ with $\eta=c^2$, obtaining $\delta>0$; shrink $\delta$ to at most $1$ if necessary. Choose a common viral exponent $d\ge4$ for $\mathcal F_1,\mathcal F_2$ large enough that $c^d\le\delta$. Define $$a=2d^2h,\qquad b=a+6d+1.$$ For any $0<x<c$, if every member of $\mathcal F$ has fewer than $(x^b|G|)^{|H|}$ copies in $G$, then [L2] supplies a $c^2$-restricted set of size at least $\delta|G|\ge c^d|G|$, because $x^b<c^b\le c^d\le\delta$. [L2, given, algebra]

1.3 We establish a one-step assertion. Let $0<x\le y\le c$, and let $Q$ be a $y^2$-restricted graph on $q$ vertices. Then at least one of these happens:

- some $H\in\mathcal F$ has more than $(x^{b-4d}q)^{|H|}$ copies in $Q$;
- for $i=1$ or $2$, some $S\subseteq V(Q)$ has $|S|\ge y^2q$ and $\operatorname{ind}_{H_i'}(Q[S])<(y^{2d^2}|S|)^{|H_i'|}$;
- $Q$ has an $x$-sparse or $(1-x)$-dense blockade of length at least $y^{-1}$ and width at least $y^{a+1}q$.

If $Q$ has maximum degree at most $y^2q$, apply [L3] to $H_1$ in $Q$. Its first outcome is stronger than the first here because $2a+2|H_1|\le(b-4d)|H_1|$; its second is stronger than the second here because $a-2>2d^2(|H_1|-1)$ and $y<1$; and its third is the sparse blockade above. If $\overline Q$ has maximum degree at most $y^2q$, apply [L3] to $\overline{H_2}$ in $\overline Q$ and translate the counts and blockade back using [L1]. Since $Q$ is restricted, one of these cases applies. [L1, L3, step 1.2, algebra]

2.1 We prove that $(b,c)$ witnesses divisiveness. Fix $0<x<c$ and a nonempty graph $G$ on $n\ge x^{-b/2}$ vertices satisfying the defining few-copy bounds for $\mathcal F$. Suppose it has no blockade required by divisiveness. Let $m\ge2$ be the least integer with $c^{d^{m-1}}\le x$. We construct nested sets $$V(G)=S_0\supseteq S_1\supseteq\cdots\supseteq S_m$$ such that, for $1\le i\le m$, $$|S_i|\ge c^{3d^i}|S_{i-1}|, \quad G[S_i]\text{ is }c^{2d^{i-1}}\text{-restricted}.\tag{1}$$ For $i=1$, step 1.2 gives a $c^2$-restricted set of size at least $c^dn\ge c^{3d}n$. [step 1.2, L2]

3.1 Suppose (1) is constructed through $S_i$ with $1\le i<m$, and put $y=c^{d^{i-1}}$. Minimality of $m$ gives $x< c^{d^{m-2}}\le y$; also $y\le c$. Summing the geometric exponents in (1), with $d\ge4$, gives $$|S_i|\ge c^{3(d+\cdots+d^i)}n\ge c^{4d^i}n =y^{4d}n\ge x^{4d}n.\tag{2}$$ Consequently every $H\in\mathcal F$ has fewer than $(x^{b-4d}|S_i|)^{|H|}$ copies in $G[S_i]$, because it has fewer than $(x^bn)^{|H|}$ copies in $G$. Apply step 1.3 to $Q=G[S_i]$. Its first outcome is impossible. Its blockade outcome would have length at least $y^{-1}\in[2,x^{-1}]$ and width at least $y^{a+1}|S_i|\ge y^{a+4d+1}n\ge y^bn$ because $b=a+6d+1$; it would be the forbidden divisive blockade. Thus its second outcome supplies $S\subseteq S_i$ of size $|S|\ge y^2|S_i|$ with few $H_j'$ copies for some $j\in\{1,2\}$. [step 1.3, step 2.1, algebra]

4.1 Since (2) gives $|S|\ge y^{4d+2}n\ge y^{5d}n$, we have $$y^{2d^2}|S|\ge y^{2d^2+5d}n\ge x^bn.$$ The final inequality uses $x\le y<1$ and $b=a+6d+1\ge2d^2+5d$. Thus every unchanged member of $\mathcal F_j$ has fewer than $(y^{2d^2}|S|)^{|H|}$ copies; the replaced member $H_j'$ has the same strict bound by step 3.1. Apply virality of $\mathcal F_j$ with parameter $y^{2d}$ to obtain $S_{i+1}\subseteq S$ that is $y^{2d}=c^{2d^i}$-restricted and has $$|S_{i+1}|\ge y^{2d^2}|S| \ge y^{2d^2+2}|S_i| \ge c^{3d^{i+1}}|S_i|.$$ The last inequality follows from $2d^2+2\le3d^2$. This completes the induction. [step 1.2, step 3.1, algebra]

5.1 At the final stage, $c^{d^{m-1}}\le x$, so $G[S_m]$ is $x^2$-restricted. The geometric sum in (1), together with the minimality inequality $x<c^{d^{m-2}}$, yields $$|S_m|\ge c^{4d^m}n\ge x^{4d^2}n\ge x^{-1},\tag{3}$$ where the last step uses $n\ge x^{-b/2}$ and $b\ge8d^2+2$. Put $k=\lceil x^{-1/2}\rceil$ and $r=\lfloor2x|S_m|\rfloor$. As $x<c\le1/16$, one has $2\le k\le x^{-1}$, $kr\le4x^{1/2}|S_m|\le|S_m|$, and $r\ge x|S_m|\ge1$. Choose $k$ disjoint $r$-element subsets of $S_m$. If $G[S_m]$ is sparse, they form an $x$-sparse blockade: each later vertex has at most $x^2|S_m|\le xr$ neighbors in an earlier block. If $\overline G[S_m]$ is sparse, they form the dense alternative. Finally $$r\ge x|S_m|\ge x^{4d^2+1}n\ge n/k^b,$$ since $k\ge x^{-1/2}$ and $b\ge8d^2+2$. This contradicts step 2.1. Hence $\mathcal F$ is divisive, and [L4] makes it viral. [step 2.1, step 4.1, L4, algebra] ∎

## Source notes

The source's ordered Theorem 6.1 has one leaf and one leaf in the complement; its overbars matter. The proof above applies the two leaf counting lemmas directly to ordinary induced embeddings. Their counting and blockade arguments do not require order, while complementing the second graph and host handles the dense case.
