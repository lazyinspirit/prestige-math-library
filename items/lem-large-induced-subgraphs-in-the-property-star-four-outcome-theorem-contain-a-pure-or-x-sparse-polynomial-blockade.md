---
id: lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade
kind: lemma
title: "Large induced subgraphs in the property (*) four-outcome theorem contain a pure or x-sparse polynomial blockade"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 4.5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $\mathcal F$ have property $(*)$ and be leaf-reducible, and let
$c_1'>0$, $c_4'\ge 4$, and $d\ge 58c_4'$ be the constants from
[[lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem]].
Fix $\epsilon\in(0,\tfrac12)$, put $x:=\epsilon^{5d}$, and let $G$ be an
$\overline{\mathcal F}$-free graph with $|G|\ge \epsilon^{-10d^2}$ such that

1. $G$ has no clique or stable set of size at least
   $(\epsilon^{156c_4'd}|G|)^{c_1'}$;
2. $G$ has no complete or anticomplete $(k,|G|/k^{2d})$-blockade with
   $k\ge \epsilon^{-5d}$;
3. $G$ has no $\epsilon^{5d}$-restricted induced subgraph with at least
   $\epsilon^{116c_4'd}|G|$ vertices.

Then every induced subgraph $F$ of $G$ with $|F|\ge \epsilon^d|G|$ has a pure
or $x$-sparse $(k,|F|/k^d)$-blockade for some integer $k\in[2,x^{-1}]$.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement, together with an induced subgraph $F$ of $G$ satisfying $|F|\ge \epsilon^d|G|$.

[L1] The previous lemma says that every $\overline{\mathcal F}$-free graph of size at least $x^{-d}$ satisfies one of four outcomes: an $x$-restricted induced subgraph of size at least $x^{23c_4'}$ times the ambient order, a pure or $x$-sparse $(k,|F|/k^d)$-blockade for some integer $k\in[2,x^{-1}]$, a clique or stable set of size at least $(x^{31c_4'}|F|)^{c_1'}$, or a complete or anticomplete polynomial blockade ([[lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem]]).

[L2] If $|G|\ge \epsilon^{-10d^2}$ and $|F|\ge \epsilon^d|G|$, then $$ |F|\ge \epsilon^{-5d^2}=x^{-d} $$ because $d\ge 1$.

[L3] If $k\ge x^{-1}=\epsilon^{-5d}$, then $\epsilon^d=x^{1/5}\ge k^{-1/5}$.

## Proof

**Proof technique:** apply the Rödl-initialized four-outcome theorem to $F$ and use the three standing failure hypotheses to rule out every branch except the pure-or-sparse blockade branch.


1.1 The size hypothesis on $G$ and the bound $|F|\ge \epsilon^d|G|$ imply $$ |F|\ge \epsilon^d\epsilon^{-10d^2}=\epsilon^{-10d^2+d}\ge \epsilon^{-5d^2}=x^{-d}, $$ because $d\ge 1$. Thus [L1] applies to $F$. [given, L1, algebra]


2.1 Apply [L1] to the induced subgraph $F$. One of its four outcomes holds. [step 1.1, L1]


3.1 If [L1] yields an $x$-restricted induced subgraph $S$ of $F$ with at least $x^{23c_4'}|F|$ vertices, then $$ |S|\ge x^{23c_4'}\epsilon^d|G| = \epsilon^{115c_4'd+d}|G| \ge \epsilon^{116c_4'd}|G|, $$ because $c_4'\ge 1$. This contradicts standing hypothesis 3. [step 2.1, algebra]


3.2 If [L1] yields a clique or stable set of size at least $(x^{31c_4'}|F|)^{c_1'}$, then $$ x^{31c_4'}|F|\ge x^{31c_4'}\epsilon^d|G| = \epsilon^{155c_4'd+d}|G| \ge \epsilon^{156c_4'd}|G|, $$ so standing hypothesis 1 is contradicted. [step 2.1, algebra]


3.3 If [L1] yields a complete or anticomplete $(k,|F|/k^d)$-blockade with $k\ge x^{-1}$, then [L3] gives $\epsilon^d\ge k^{-1/5}$, and therefore $$ \frac{|F|}{k^d}\ge \frac{\epsilon^d|G|}{k^d}\ge \frac{|G|}{k^{2d}}. $$ Since $k\ge x^{-1}=\epsilon^{-5d}$, this contradicts standing hypothesis 2. [step 2.1, L3, algebra]


4.1 The first three branches are impossible, so the remaining branch of [L1] must hold: $F$ has a pure or $x$-sparse $(k,|F|/k^d)$-blockade for some integer $k\in[2,x^{-1}]$. This is exactly the desired conclusion. [step 3.1, step 3.2, step 3.3] ∎
