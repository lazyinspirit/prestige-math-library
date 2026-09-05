---
id: thm-property-star-and-leaf-reducibility-imply-generalized-niceness
kind: theorem
title: "Property (*) and leaf reducibility imply generalized niceness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generalized-nice-finite-family, def-property-star-for-a-finite-family, def-leaf-reducible-finite-family, lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade, thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade, lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 4.5 and Lemma 1.13"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Lemma 5.4"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
---

## Statement

Let $\mathcal F$ be a finite family of graphs. If $\mathcal F$ has property
$(*)$ and $\mathcal F$ is leaf-reducible, then $\mathcal F$ is generalized
nice.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ with property $(*)$ and leaf-reducible.

[L1] There exist constants $c_1'>0$, $c_4'\ge 4$, and $d\ge 58c_4'$ such that, for every $x\in(0,2^{-d})$, every $\overline{\mathcal F}$-free graph of size at least $x^{-d}$ satisfies the four-outcome theorem with parameter $x$ ([[lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem]]).

[L2] Under the failure of the clique/stable-set, complete-or-anticomplete blockade, and restricted-set outcomes, every induced subgraph of size at least $\epsilon^d|G|$ has a pure or $x$-sparse $(k,|F|/k^d)$-blockade for some integer $k\in[2,x^{-1}]$ when $x=\epsilon^{5d}$, provided $|G|\ge \epsilon^{-10d^2}$ ([[lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade]]).

[L3] If every induced subgraph $F$ of $G$ with $|F|\ge \epsilon^d|G|$ has a pure or $x$-sparse $(k,|F|/k^d)$-blockade for some $k\in[2,x^{-1}]$, where $x=\epsilon^{5d}$ and $|G|\ge \epsilon^{-10d^2}$, then $G$ has an $(\epsilon^{-1},\epsilon^{10d^2}|G|)$-blockade whose distinct block pairs are pairwise complete or weakly $\epsilon^d$-sparse ([[thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]]).

[L4] The definition of generalized niceness is the four-outcome schema in [[def-generalized-nice-finite-family]].

## Proof

**Proof technique:** choose the source exponents, assume the last three generalized-nice outcomes fail, and then force the first outcome by the local pure-or-sparse blockade theorem.


1.1 Let $c_1'>0$, $c_4'\ge 4$, and $d\ge 58c_4'$ be the constants from [L1]. Set $$ c_1:=10d^2,\quad c_2:=d,\quad c_3:=156c_4'd,\quad c_4:=c_1',\quad c_5:=2d,\quad c_6:=5d,\quad c_7:=5d,\quad c_8:=116c_4'd. $$ Then $c_1\ge 3$, $c_2\ge 8$, $c_6\ge 1$, and $c_7\ge 4$. [L1, choose, algebra]


2.1 Let $G$ be an $\overline{\mathcal F}$-free graph and let $\epsilon\in(0,\tfrac12)$. If outcome 2, 3, or 4 of [L4] already holds for these constants, there is nothing left to prove. So assume for contradiction that all three fail, and write $x:=\epsilon^{5d}$. [step 1.1, L4, assume-contra]


3.1 If $|G|<\epsilon^{-1}$, then $$ \epsilon^{c_3}|G|\le \epsilon^{c_3-1}\le 1, $$ because $c_3>1$. Any vertex of $G$ therefore gives a clique or stable set of size at least $(\epsilon^{c_3}|G|)^{c_4}$, so outcome 2 of [L4] holds. Hence we may assume that $|G|\ge \epsilon^{-1}$. [step 1.1, step 2.1, L4, algebra, cases]


4.1 If $|G|\le \epsilon^{-10d^2}$, then choose $\lceil\epsilon^{-1}\rceil$ distinct vertices of $G$ and make them singleton blocks. Step 3.1 makes this possible, and each singleton has size $$ 1\ge \epsilon^{10d^2}|G|=\epsilon^{c_1}|G|. $$ Every pair of singleton blocks is either complete or anticomplete, hence either complete or weakly $\epsilon^d$-sparse. Thus outcome 1 of [L4] holds. Therefore we may assume that $|G|\ge \epsilon^{-10d^2}$. [step 1.1, step 3.1, L4, choose, algebra, cases]


5.1 Under steps 2.1 and 4.1, [L2] applies to every induced subgraph $F$ of $G$ with $|F|\ge \epsilon^d|G|$. [step 2.1, step 4.1, L2]


6.1 If an induced subgraph $F$ of $G$ with $|F|\ge \epsilon^d|G|$ contained a clique or stable set of size at least $(x^{31c_4'}|F|)^{c_1'}$, then $$ x^{31c_4'}|F|\ge x^{31c_4'}\epsilon^d|G| = \epsilon^{155c_4'd+d}|G| \ge \epsilon^{156c_4'd}|G|=\epsilon^{c_3}|G|, $$ so outcome 2 would hold, contrary to step 2.1. Likewise, if such an $F$ contained a complete or anticomplete $(k,|F|/k^d)$-blockade with $k\ge x^{-1}$, then $$ \frac{|F|}{k^d}\ge \frac{\epsilon^d|G|}{k^d}\ge \frac{|G|}{k^{2d}}, $$ so outcome 3 would hold, again contrary to step 2.1. Therefore [L2] really does give the pure-or-$x$-sparse blockade alternative on every such $F$. [step 2.1, step 5.1, L2, algebra]


7.1 By steps 4.1 and 6.1, the hypotheses of [L3] are satisfied with the parameter $d$ and $x=\epsilon^{5d}$: the graph $G$ has order at least $\epsilon^{-10d^2}$, and every induced subgraph $F$ with $|F|\ge \epsilon^d|G|$ has a pure or $x$-sparse $(k,|F|/k^d)$-blockade for some integer $k\in[2,x^{-1}]$. Hence $G$ has an $(\epsilon^{-1},\epsilon^{10d^2}|G|)$-blockade whose distinct block pairs are either complete or weakly $\epsilon^d$-sparse. This is exactly outcome 1 of [L4], because $c_1=10d^2$ and $c_2=d$. [step 1.1, step 4.1, step 5.1, step 6.1, L3, L4]


8.1 Outcome 1 follows whenever outcomes 2, 3, and 4 fail, and step 1.1 records the remaining lower-bound requirements on the constants. Therefore the constants from step 1.1 satisfy Definition [L4], so $\mathcal F$ is generalized nice. [step 1.1, step 2.1, step 7.1, L4, discharge-contradiction] ∎
