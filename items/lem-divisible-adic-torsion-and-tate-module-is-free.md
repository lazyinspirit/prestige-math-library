---
id: lem-divisible-adic-torsion-and-tate-module-is-free
kind: lemma
title: "Torsion and Tate modules of a divisible module over a DVR"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §3.7, Lemma 3.12(b)"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §3.2"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification: {}
---

## Statement

Let $R$ be a complete discrete valuation ring with uniformizer $\pi$ and finite residue field $k=R/\pi R$. For an $R$-module $D$, write $D[\pi^n]=\{x\in D:\pi^n x=0\}$. Assume that every element of $D$ is killed by some power of $\pi$, every map $\pi:D[\pi^{n+1}]\to D[\pi^n]$ is surjective, and $D[\pi]$ has finite $k$-dimension $d$. If dependent choice holds, then $D[\pi^n]\cong(R/\pi^nR)^d$ as $R$-modules for every $n\ge1$, and the Tate module $T(D)=\operatorname{Hom}_R(\operatorname{Frac}(R)/R,D)$ is a free $R$-module of rank $d$; its inverse-limit topology from restriction to the finite torsion levels agrees with its $\pi$-adic topology.

## Statement references

Bjorn Poonen, *Introduction to Drinfeld Modules*, §3.7, Lemma 3.12(b): https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §3.2: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf

## Exact sequence diagram

For the induction in the proof, $Q_n=\pi^{-n}R^d/R^d$ and $i_n:Q_n\to D[\pi^n]$ are the finite-level modules and maps. The top row is exact by the definition of $Q_n$; the bottom row is exact by the assumed surjectivity. The diagram only displays these maps; the proof verifies the exactness and the inductive isomorphism directly.

```tikzcd
0 \arrow[r] & Q_1 \arrow[r,hook] \arrow[d,"i_1"'] & Q_{n+1} \arrow[r,"\pi"] \arrow[d,"i_{n+1}"] & Q_n \arrow[r] \arrow[d,"i_n"] & 0 \\
0 \arrow[r] & D[\pi] \arrow[r,hook] & D[\pi^{n+1}] \arrow[r,"\pi"] & D[\pi^n] \arrow[r] & 0
```

## Facts & Assumptions

**Given:** A complete discrete valuation ring $R$ with uniformizer $\pi$ and finite residue field $k$, a $\pi$-primary $R$-module $D$ with finite-dimensional $D[\pi]$, surjective multiplication maps on successive torsion levels, and dependent choice.

[A1] [[def-dependent-choice]]: from a serial relation and a prescribed starting state, dependent choice supplies an $\mathbb N$-indexed sequence following that relation.

## Proof

1.1 Choose a $k$-basis $e_{1,1},\ldots,e_{d,1}$ of $D[\pi]$. This gives an $R$-module isomorphism $i_1:Q_1\to D[\pi]$, where $Q_1=\pi^{-1}R^d/R^d\cong k^d$. [given, choose]

1.2 Let the states at level $n$ be the ordered $d$-tuples in $D[\pi^n]$ lifting the fixed initial basis tuple by repeated multiplication by $\pi$. From any such tuple, surjectivity of $\pi:D[\pi^{n+1}]\to D[\pi^n]$ gives a lift of each of its finitely many coordinates; finite choice, provable by induction on $d$, makes the set of successor tuples nonempty. The relation “is a successor tuple” is therefore serial. Applying [A1] from the initial tuple gives compatible tuples $(e_{1,n},\ldots,e_{d,n})$ for every $n$. [A1, given, choose]

2.1 For each $n\ge1$, define $i_n:Q_n\to D[\pi^n]$ by sending the class of $\pi^{-n}e_j$ to $e_{j,n}$ and extending $R$-linearly. The relation $\pi^n e_{j,n}=0$ makes the map well-defined, and the compatible choices in step 1.2 make the maps commute with multiplication by $\pi$. [step 1.2, given, construct, algebra]

3.1 The top row is exact because multiplication by $\pi$ on $Q_{n+1}$ is onto $Q_n$ with kernel $Q_1$; the bottom row is exact by the assumed surjectivity and because its kernel is $D[\pi]$. If $i_n$ is an isomorphism and $i_{n+1}(x)=0$, then $i_n(\pi x)=\pi i_{n+1}(x)=0$, so $\pi x=0$; hence $x\in Q_1$, where $i_{n+1}$ agrees with the injective $i_1$. Thus $i_{n+1}$ is injective. For $y\in D[\pi^{n+1}]$, choose $x_n\in Q_n$ with $i_n(x_n)=\pi y$, then choose $x\in Q_{n+1}$ with $\pi x=x_n$. The difference $y-i_{n+1}(x)$ lies in $D[\pi]$, so it equals $i_1(z)=i_{n+1}(z)$ for some $z\in Q_1$; therefore $i_{n+1}(x+z)=y$. Induction from step 1.1 proves every $i_n$ is an isomorphism. [step 1.1, step 2.1, algebra]

4.1 The compatible isomorphisms identify $D=\bigcup_nD[\pi^n]$ with $\bigcup_nQ_n\cong(\operatorname{Frac}(R)/R)^d$. Therefore $T(D)\cong\operatorname{End}_R(\operatorname{Frac}(R)/R)^d$. [step 3.1, given, algebra]

5.1 An $R$-endomorphism of $\operatorname{Frac}(R)/R$ restricts on each $Q_n$ to multiplication by some $a_n\in R/\pi^nR$. Compatibility is exactly $a_{n+1}\equiv a_n\pmod{\pi^nR}$, so $\operatorname{End}_R(\operatorname{Frac}(R)/R)\cong\varprojlim_nR/\pi^nR=R$. Under the compatible bases from steps 1.2–1.4, restriction to $Q_n$ is reduction modulo $\pi^n$ in every coordinate; thus the inverse-limit topology is the $\pi$-adic topology on $R^d$. [step 1.2, step 3.1, step 4.1, given, algebra] ∎
