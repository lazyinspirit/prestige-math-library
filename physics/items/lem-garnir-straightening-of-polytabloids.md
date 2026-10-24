---
id: lem-garnir-straightening-of-polytabloids
kind: lemma
title: Garnir straightening spans the complex Specht module
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [lem-adjacent-column-garnir-relation, def-tabloid-and-column-orders-for-specht-straightening, lem-polytabloid-covariance-and-column-sign, def-column-antisymmetrizer-polytabloid-and-specht-module, def-young-tableau-standard-tableau-and-shape, def-row-and-column-stabilizers-of-a-tableau, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Definition 6.9 and Lemma 6.10 with proof, printed pp. 30-31; the local order reverses Wildon's, and the right-action Garnir step is adapted using the proved left-action relation over C"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

For every $n\ge0$, partition $\lambda\vdash n$, and $\lambda$-tableau $t$,
the polytabloid $e_t$ is a finite complex linear combination of standard
$\lambda$-polytabloids. This is proved without using the later RSK identity.

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda\vdash n$, and a $\lambda$-tableau $t$.

[F1] Column $j$ has height $\lambda'_j$, and the column heights weakly
decrease with $j$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] A tableau is standard exactly when its rows and columns strictly
increase ([[def-young-tableau-standard-tableau-and-shape]]).

[F3] The left action is $(\sigma\cdot t)(i,j)=\sigma(t(i,j))$
([[def-young-tableau-standard-tableau-and-shape]]).

[F4] $C_t$ consists of the permutations preserving each column set, so its
elements act by permuting labels within columns
([[def-row-and-column-stabilizers-of-a-tableau]]).

[F5] $e_t=\kappa_t\cdot\{t\}$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F6] $S^\lambda$ is the complex span of all $\lambda$-polytabloids
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F7] Polytabloid covariance gives $e_{\sigma\cdot t}=\sigma\cdot e_t$
([[lem-polytabloid-covariance-and-column-sign]]).

[F8] For $\gamma\in C_t$, $\gamma\cdot e_t=\operatorname{sgn}(\gamma)e_t$
([[lem-polytabloid-covariance-and-column-sign]]).

[F9] A tableau is column-standard when its entries strictly increase down
each column ([[def-tabloid-and-column-orders-for-specht-straightening]]).

[F10] Column-standard tableaux have a finite strict total order, with
$s\prec u$ exactly when the greatest label assigned to different columns is
farther left in $s$ than in $u$
([[def-tabloid-and-column-orders-for-specht-straightening]]).

[F11] The adjacent-column Garnir relation accepts a supplied left-coset
transversal containing the identity
([[lem-adjacent-column-garnir-relation]]).

[F12] If $X,Y$ lie in adjacent columns and $|X|+|Y|>\lambda'_j$, the
corresponding Garnir sum annihilates $e_t$ over $\mathbb C$
([[lem-adjacent-column-garnir-relation]]).
For every such transversal $T$,
$$\left(\sum_{g\in T}\operatorname{sgn}(g)g\right)e_t=0$$

No Axiom of Choice (AC) is used. Column sorting, the inversion, and the
Garnir representatives below are specified by unique rules on finite sets;
there is no AC dependency to propagate.

## Proof

**Proof technique:** finite strong induction using Garnir straightening.

1.1 Given any $\lambda$-tableau $t$, sort the entries in each column increasingly to obtain the unique column-standard $s$ with the same column sets. The rule $\pi(t(i,j))=s(i,j)$ defines a unique $\pi\in C_t$ with $\pi\cdot t=s$, so by covariance and the column sign rule $e_s=\pi\cdot e_t=\operatorname{sgn}(\pi)e_t$ and hence $e_t=\operatorname{sgn}(\pi)e_s$. It remains to prove the claim for column-standard tableaux; when $n=0$, the unique empty tableau is already standard. [given, F3, F4, F5, F7, F8, F9, algebra]

1.2 Let $s$ be column-standard but not standard. There is an adjacent row descent $s(q,j)>s(q,j+1)$; take the lexicographically least such $(q,j)$, put $h=\lambda'_j$, $x_r=s(r,j)$ for $q\le r\le h$, and $y_a=s(a,j+1)$ for $1\le a\le q$. Because row $q$ contains both boxes, $q\le\lambda'_{j+1}\le h$; column-standardness gives $x_q<\cdots<x_h$, $y_1<\cdots<y_q$, and $x_q>y_q$. Hence every $x$ in $X=\{x_q,\ldots,x_h\}$ exceeds every $y$ in $Y=\{y_1,\ldots,y_q\}$ and $|X|+|Y|=(h-q+1)+q=h+1>\lambda'_j$. [given, F1, F2, F9, algebra]

2.1 Put $Z=X\cup Y$ and $p=|X|$. For each $p$-element subset $A\subseteq Z$, list $X\setminus A=\{a_1<\cdots<a_r\}$ and $A\setminus X=\{b_1<\cdots<b_r\}$ and set $g_A=(a_1\ b_1)\cdots(a_r\ b_r)$, with the empty product the identity. These are disjoint swaps and $g_A(X)=A$. Since $H=S_X\times S_Y$ preserves $X$, two elements of $S_Z$ lie in the same left coset $gH$ exactly when their images of $X$ agree; thus the $g_A$ form a canonical transversal and $g_X=1$. Apply the Garnir relation and use covariance [F7] to rewrite its terms, isolating $e_s=-\sum_{A\ne X,\,|A|=p}\operatorname{sgn}(g_A)e_{g_A\cdot s}$. [given, F7, F11, F12, step 1.2, algebra]

3.1 For $A\ne X$, the greatest element $x_A$ of $X\setminus A$ is swapped with an element of $Y$ and, under the left action, moves from column $j$ of $s$ to column $j+1$ of $g_A\cdot s$. Every other changed label is smaller: changed labels from $Y$ are below every element of $X$, and $x_A$ is largest among the changed elements of $X$. Sort the columns of $g_A\cdot s$ to obtain the unique column-standard $u_A$ with the same column sets; then $x_A$ remains in column $j+1$, so the finite column order gives $s\prec u_A$. The unique column permutation taking $g_A\cdot s$ to $u_A$, covariance, and the column sign rule give $e_{g_A\cdot s}=\pm e_{u_A}$. [given, F3, F4, F7, F8, F9, F10, step 2.1, algebra]

4.1 The base case is a greatest column-standard tableau. If it were nonstandard, step 1.2 would give nonempty $X,Y$, so $0<|X|<|X\cup Y|$ and step 2.1 has a nonidentity representative; step 3.1 would then construct a strictly later column-standard tableau. Thus the greatest tableau is standard, and its polytabloid already has the required form. [given, F1, F2, F10, step 1.2, step 2.1, step 3.1, base]

5.1 For a column-standard $s$, assume as the induction hypothesis that every later $u$ has $e_u$ equal to a finite complex linear combination of standard polytabloids. [ih] If $s$ is standard the claim is immediate; otherwise step 2.1 expresses $e_s$ as a finite sum of $e_{g_A\cdot s}$ and step 3.1 rewrites each as $\pm e_{u_A}$ with $s\prec u_A$. The induction hypothesis then proves the claim for $s$. [given, F2, F10, step 2.1, step 3.1, step 4.1, ih]

6.1 Finite reverse induction in the order of [F10] now proves the claim for every column-standard tableau; step 1.1 extends it to every tableau. Since $S^\lambda$ is the span of all polytabloids by [F6], the standard polytabloids span $S^\lambda$. The empty shape is included, all sums are finite, and RSK is not used. [given, F6, F10, step 1.1, step 5.1, discharge-induction] $\square$
