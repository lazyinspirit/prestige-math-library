---
id: thm-regular-fractional-factorial-aliasing-criterion
kind: theorem
title: "The defining subgroup gives the exact alias relations"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps: [def-regular-fractional-factorial-defining-relation-and-resolution]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 18, §18.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
      locator: "Printed pp. 472–478; PDF pp. 491–497: signed generators, defining relations, and aliases obtained by multiplying defining words."
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §§5.3.3.4.2–5.3.3.4.4"
      url: "https://www.itl.nist.gov/div898/handbook/pri/section3/pri3342.htm"
      locator: "Complete focused sections on generator construction, signed defining relations, aliases, and shortest-word resolution."
---

## Statement

Let $\mathcal F$ be the regular fraction determined by $p$ independent generator equations $x_{G_i}=s_i$ on the full $2^k$ sign design, and let $H$ be its signed defining subgroup. Then $|\mathcal F|=2^{k-p}$, $|H|=2^p$, and $H$ consists of all signed words $(\epsilon,C)$ for which $\epsilon x_C=+1$ on every run in $\mathcal F$. For all factor subsets $A,B\subseteq[k]$ and signs $\sigma\in\{-1,+1\}$,

$$x_A=\sigma x_B\text{ on }\mathcal F\quad\Longleftrightarrow\quad(\sigma,A\triangle B)\in H.$$

In particular, the columns agree exactly when $(+1,A\triangle B)\in H$; a relation with sign $-1$ means the columns are opposites.

## Facts & Assumptions

**Given:** Integers $k\ge1$ and $1\le p\le k$, $p$ subsets $G_i\subseteq[k]$ with linearly independent incidence vectors over $\mathbb F_2$, signs $s_i\in\{-1,+1\}$, the resulting regular fraction $\mathcal F$, and its signed defining subgroup $H$.

[F1] [[def-regular-fractional-factorial-defining-relation-and-resolution]]: $p$ independent factor subsets $G_i$ and signs $s_i$ specify the fraction by the equations $x_{G_i}=s_i$.

[F2] [[def-regular-fractional-factorial-defining-relation-and-resolution]]: the signed generators are $h_i=(s_i,G_i)$, $H=\langle h_1,\ldots,h_p\rangle$, and signed-word multiplication uses symmetric difference of factor subsets.

[A1] The incidence vectors $1_{G_i}\in\mathbb F_2^k$ are linearly independent; this is part of the stated generator hypothesis.

## Proof

**Proof technique:** encode signs by bits and row-reduce the independent generator equations.

1.1 Write each run coordinate as $x_j=(-1)^{z_j}$ and each generator sign as $s_i=(-1)^{b_i}$, with $z\in\mathbb F_2^k$ and $b\in\mathbb F_2^p$. Let $M$ have rows $1_{G_i}$. The equations for $\mathcal F$ become $Mz=b$. By [A1], $M$ has rank $p$; row reduction gives $p$ pivot coordinates and $k-p$ free coordinates, and every assignment of the free coordinates determines exactly one pivot assignment. Therefore $|\mathcal F|=2^{k-p}$. [given, F1, A1, choose, algebra]

2.1 Row-reduce $M$ to $R=UM$, where $U$ is invertible, and let $D=\{d_1,\ldots,d_p\}$ be the pivot coordinates; write $R_i$ for row $i$ of $R$. For a subset $C$, put $c=1_C$; on a solution $z$, $x_C=(-1)^{c\cdot z}$. Substitution of the pivot equations gives $c\cdot z=\sum_i c_{d_i}b'_i+\sum_{j\notin D}(c_j+\sum_i c_{d_i}R_{ij})z_j$, where $b'=Ub$. This exponent is constant over all free coordinates exactly when every displayed free-coordinate coefficient is zero. Since the pivot columns of $R$ are the identity, those equations say precisely that $c=\sum_i c_{d_i}R_i$, so $c$ lies in the row space of $M$. [given, F1, A1, step 1.1, algebra]

3.1 If $c$ is outside the row space of $M$, step 2.1 shows that $x_C$ is nonconstant on $\mathcal F$, so neither sign $\epsilon$ makes $\epsilon x_C=+1$ on every run. If $c$ is in the row space, then $c=\sum_i\lambda_i1_{G_i}$ for a unique $\lambda\in\mathbb F_2^p$, and on $\mathcal F$ we have $x_C=(-1)^{\lambda\cdot b}=\prod_i s_i^{\lambda_i}$. Exactly one sign $\epsilon=\prod_i s_i^{\lambda_i}$ makes $\epsilon x_C=+1$ on all of the nonempty set $\mathcal F$, and $(\epsilon,C)=\prod_{i:\lambda_i=1}(s_i,G_i)$. Conversely, every such product evaluates to $+1$. Independence makes the $2^p$ choices of $\lambda$ distinct, proving that $H$ is precisely the set of constant-$+1$ signed words and $|H|=2^p$. [given, F1, F2, A1, step 1.1, step 2.1, algebra]

4.1 For any $A,B\subseteq[k]$, cancellation of repeated factors gives $x_Ax_B=x_{A\triangle B}$. Therefore $x_A=\sigma x_B$ on $\mathcal F$ exactly when $\sigma x_{A\triangle B}=+1$ there. By step 3.1 and the definition of $H$ in [F2], this is equivalent to $(\sigma,A\triangle B)\in H$. The case $\sigma=+1$ is equality of columns, and $\sigma=-1$ is opposition. [F1, F2, step 3.1, algebra] ∎

## Sources

Oehlert §18.2 and NIST/SEMATECH §§5.3.3.4.2–5.3.3.4.4 present signed generators, defining relations, and alias multiplication. The exact row-space characterization and both directions of the column criterion are proved here.
