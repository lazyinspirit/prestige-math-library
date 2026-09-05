---
id: lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph
kind: lemma
title: "Under failure of the global outcomes, a large y^(10/3)-restricted induced subgraph forces a y^(11/3)-restricted induced subgraph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 4.3.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $\mathcal F$ have property $(*)$ and be leaf-reducible, and let
$c_1,c_2,c_3>0$, $c_4,c_5\ge 4$, and $c:=2^{-4c_5}$ be the constants from
[[lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome]].
Fix $x\in(0,c^{10}]$, and let $G$ be a $c^{10}$-restricted
$\overline{\mathcal F}$-free graph for which none of the following holds:

1. $G$ has an $x$-restricted induced subgraph with at least $x^{22c_4}|G|$
   vertices;
2. $G$ has a clique or stable set of size at least $(x^{30c_4}|G|)^{c_1}$;
3. $G$ has a complete or anticomplete $(k,|G|/k^{c_2+27c_4/c_3})$-blockade for
   some real $k\ge 2$;
4. $G$ has a pure or $x$-sparse $(\ell,|G|/\ell^{29c_4})$-blockade for some
   real $\ell\in[c^{-1},x^{-2}]$.

Then for every $y\in[x,c^3]$ and every $y^{10/3}$-restricted induced subgraph
$F$ of $G$ with $|F|\ge y^{10(c_4+2)}|G|$, there exists a
$y^{11/3}$-restricted induced subgraph of $F$ with at least
$y^{c_4+2}|F|$ vertices.

## Facts & Assumptions

**Given:** The data and failure hypotheses in the Statement, together with a parameter $y\in[x,c^3]$ and an induced subgraph $F$ of $G$ that is $y^{10/3}$-restricted and satisfies $|F|\ge y^{10(c_4+2)}|G|$.

[L1] The previous lemma says that every $cy^3$-restricted $\overline{\mathcal F}$-free graph satisfies one of five outcomes: a long $x$-sparse or complete blockade, a $2y^4$-restricted induced subgraph, a clique or stable set, a complete or anticomplete blockade, or a pure blockade ([[lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome]]).

[L2] If a set is $\eta$-restricted, then it is also $\eta'$-restricted for every $\eta'\ge \eta$ ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** apply the previous lemma to $F$ with parameter $y$ and show that every outcome except the deeper restricted-set outcome contradicts one of the assumed global failures.


1.1 Because $y\le c^3$, one has $y^{10/3}=y^3y^{1/3}\le cy^3$. Thus [L2] upgrades the hypothesis that $F$ is $y^{10/3}$-restricted to the statement that $F$ is $cy^3$-restricted. [given, L2, algebra]


2.1 Apply [L1] to the graph $F$ with the original parameter $x$ and the current parameter $y$. One of the five outcomes of [L1] holds for $F$. [step 1.1, L1]


3.1 Suppose the first outcome of [L1] holds for $F$: there is an $x$-sparse or complete blockade in $F$ of length at least $y^{-1}$ and width at least $y^{c_4+2}|F|$. Since $y^{-1}\in[c^{-1},x^{-1}]\subseteq[c^{-1},x^{-2}]$ and $$ y^{c_4+2}|F|\ge y^{11(c_4+2)}|G|\ge y^{29c_4}|G|, $$ this produces the forbidden global outcome 4. [step 2.1, algebra]


3.2 Suppose the second outcome of [L1] holds for $F$. Because $2y^4\le y^{11/3}$ for $0<y<1$, the resulting induced subgraph is already the desired $y^{11/3}$-restricted induced subgraph of size at least $y^{c_4+2}|F|$. [step 2.1, algebra]


3.3 Suppose the third outcome of [L1] holds for $F$. Then $$ (x^{10}|F|)^{c_1}\ge (x^{10}\cdot y^{10(c_4+2)}|G|)^{c_1} \ge (x^{10c_4+30}|G|)^{c_1} \ge (x^{30c_4}|G|)^{c_1}, $$ because $y\ge x$ and $c_4\ge 4$. This contradicts the failure of global outcome 2. [step 2.1, algebra]


3.4 Suppose the fourth outcome of [L1] holds for $F$: there is a complete or anticomplete $(k,|F|/k^{c_2+7/c_3})$-blockade with $k\ge y^{-c_3}$. If $k\ge 2$, then $$ \frac{|F|}{k^{c_2+7/c_3}} \ge \frac{y^{10(c_4+2)}|G|}{k^{c_2+7/c_3}} \ge \frac{|G|}{k^{c_2+7/c_3+10(c_4+2)/c_3}} \ge \frac{|G|}{k^{c_2+27c_4/c_3}}, $$ so global outcome 3 holds, a contradiction. If instead $1<k<2$, then the blockade has at least two blocks, and $$ \frac{|F|}{k^{c_2+7/c_3}} \ge \frac{|F|}{2^{c_2+7/c_3}} \ge \frac{|G|}{2^{c_2+7/c_3+10(c_4+2)/c_3}} \ge \frac{|G|}{2^{c_2+27c_4/c_3}}, $$ because $|F|\ge y^{10(c_4+2)}|G|$, the inequality $y^{-c_3}\le k<2$ implies $y^{10(c_4+2)}\ge 2^{-10(c_4+2)/c_3}$, and $7+10(c_4+2)\le 27c_4$ for $c_4\ge 4$. Thus $G$ has a complete or anticomplete $(2,|G|/2^{c_2+27c_4/c_3})$-blockade, again contradicting the failure of global outcome 3. [step 2.1, algebra]


3.5 Suppose the fifth outcome of [L1] holds for $F$: there is a pure $(\ell,|F|/\ell^9)$-blockade with $\ell\in[y^{-1},x^{-2}]$. Then $$ \frac{|F|}{\ell^9}\ge \frac{y^{10(c_4+2)}|G|}{\ell^9}\ge \frac{|G|}{\ell^{29c_4}}, $$ because $\ell\ge y^{-1}$. This again gives the forbidden global outcome 4. [step 2.1, algebra]


4.1 The first, third, fourth, and fifth cases are impossible under the standing global failure hypotheses. Therefore the second case, recorded in step 3.2, must hold, which is exactly the desired conclusion. [step 3.1, step 3.2, step 3.3, step 3.4, step 3.5] ∎
