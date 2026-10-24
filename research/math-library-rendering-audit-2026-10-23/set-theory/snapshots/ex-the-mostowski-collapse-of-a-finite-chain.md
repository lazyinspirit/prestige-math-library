---
id: ex-the-mostowski-collapse-of-a-finite-chain
kind: example
title: "The Mostowski collapse of a finite chain computes its order type"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [thm-mostowski-collapse, def-ordinal, lem-ordinal-basics,
       def-natural-numbers, def-well-order, def-initial-segment]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 4, Lemma 4.15 and Definition 4.16 (every wellordering is isomorphic to a unique ordinal) and Exercise 4.12"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 6, Theorem 6.1 and Corollary 6.2 (Mostowski collapse, order type)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

Let $W=\{a,b,c,d\}$ carry the well-order $d\prec a\prec b\prec c$
([[def-well-order]]). The collapsing map $F(x)=\{F(y):y\prec x\}$ of
[[thm-mostowski-collapse]] then has

$$F(d)=\varnothing=0,\quad F(a)=\{0\}=1,\quad F(b)=\{0,1\}=2,\quad F(c)=\{0,1,2\}=3,$$

so $F$ is the order isomorphism of $W$ onto the ordinal $4=\{0,1,2,3\}$
([[def-ordinal]], [[def-natural-numbers]]) and the order type of $W$ is $4$. Any
function $F'$ on $W$ with $F'(x)=\{F'(y):y\prec x\}$ for all $x\in W$ equals
$F$, by the uniqueness in [[thm-mostowski-collapse]]. No choice principle is
used: the values are computed and nothing is selected.

## Facts & Assumptions

**Given:** The set $W=\{a,b,c,d\}$ with the total order $d\prec a\prec b\prec c$, so that $d,a,b,c$ are pairwise distinct and $W_{<d}=\varnothing$, $W_{<a}=\{d\}$, $W_{<b}=\{d,a\}$, $W_{<c}=\{d,a,b\}$.

[F1] A well-order on a set $X$ is a total order in which every nonempty $S\subseteq X$ has a least element; in the strict presentation it is irreflexive, transitive and trichotomous ([[def-well-order]]).

[F2] For a well-order $(X,<)$ and $x\in X$ the initial segment is $X_{<x}=\{y\in X:y<x\}$ ([[def-initial-segment]]).

[F3] Every well-order $(X,<)$ is order isomorphic to exactly one ordinal $\mathrm{ot}(X)$; the isomorphism is the collapsing map $F(x)=\{F(y):y<x\}$, and it is unique ([[thm-mostowski-collapse]]).

[F4] $0:=\varnothing$ is an ordinal, and for every ordinal $\alpha$ the successor $\alpha^{+}=\alpha\cup\{\alpha\}$ is an ordinal ([[def-ordinal]], [[lem-ordinal-basics]]).

[F5] The natural numbers are $0=\varnothing$, $1=\{0\}$, $2=\{0,1\}$, $3=\{0,1,2\}$, and in general $n=\{0,1,\dots,n-1\}$, so in particular $4=\{0,1,2,3\}$ ([[def-natural-numbers]]).

## Verification

**Proof technique:** direct.

1.1 The five numerals are as stated and each of $0,1,2,3,4$ is an ordinal: $0=\varnothing$ is an ordinal, and $1=0^{+}$, $2=1^{+}$, $3=2^{+}$, $4=3^{+}$ are ordinals by the successor clause, while $4=\{0,1,2,3\}$ by the von Neumann convention. [F4, F5]

1.2 The order $d\prec a\prec b\prec c$ makes $W$ a well-order: it is total and trichotomous by the given chain, and a nonempty subset of $W$ has a least element, namely the first of its elements in the listing $d,a,b,c$. The initial segments are $W_{<d}=\varnothing$, $W_{<a}=\{d\}$, $W_{<b}=\{d,a\}$ and $W_{<c}=\{d,a,b\}$, read off from the chain. [F1, F2]

2.1 The collapse takes the values $F(d)=\varnothing=0$, $F(a)=\{0\}=1$, $F(b)=\{0,1\}=2$, $F(c)=\{0,1,2\}=3$: by [F3] the map $F$ satisfies $F(x)=\{F(y):y\prec x\}$ for every $x\in W$, and step 1.2 lists the predecessors, so $F(d)=\{\}=\varnothing$, $F(a)=\{F(d)\}=\{0\}$, $F(b)=\{F(d),F(a)\}=\{0,1\}$, $F(c)=\{F(d),F(a),F(b)\}=\{0,1,2\}$; the identifications with $0,1,2,3$ are [F5]. [step 1.2, F3, F5]

3.1 The image of $F$ is $\{0,1,2,3\}$: the four values are distinct, since $0=\varnothing$ has no members, $1=\{0\}$ has exactly the member $0$, $2=\{0,1\}$ has exactly the members $0,1$, and $3=\{0,1,2\}$ has the additional member $2$ by [F5]. Moreover $x\prec y$ if and only if $F(x)\in F(y)$ for all $x,y\in W$: the six strict comparisons of the chain read $0\in1$, $0\in2$, $0\in3$, $1\in2$, $1\in3$, $2\in3$, each true by [F5], while the six reversed non-comparisons read $1\notin0$, $2\notin0$, $3\notin0$, $2\notin1$, $3\notin1$, $3\notin2$, each true because $0=\varnothing$ has no members and $1=\{0\}$, $2=\{0,1\}$. [step 2.1, F5]

4.1 Hence $F$ is an order isomorphism of $W$ onto the ordinal $4=\{0,1,2,3\}$: it is a bijection onto $4$ by step 3.1, and it preserves and reflects the order by step 3.1; since $4$ is an ordinal by step 1.1, the uniqueness clause of [F3] identifies it with the order type of $W$, so $\mathrm{ot}(W)=4$. [step 1.1, step 3.1, F3]

5.1 Uniqueness: if $F'$ is any function on $W$ with $F'(x)=\{F'(y):y\prec x\}$ for all $x\in W$, then reading the chain in order and using the predecessor lists of step 1.2 gives $F'(d)=\varnothing=F(d)$, $F'(a)=\{F'(d)\}=\{0\}=F(a)$, $F'(b)=\{F'(d),F'(a)\}=F(b)$ and $F'(c)=\{F'(d),F'(a),F'(b)\}=F(c)$; so $F'=F$. This is the uniqueness of [F3] verified directly on the finite chain. The order type of $W$ is $4$ and no object is selected anywhere; in particular no choice principle is used. [step 1.2, step 2.1, step 4.1, F3] ∎
