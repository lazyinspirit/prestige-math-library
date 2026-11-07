---
id: thm-finite-partite-hypergraph-removal
kind: theorem
title: "Finite partite hypergraph removal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - thm-finite-hypergraph-good-atom-counting
  - lem-finite-hypergraph-bad-atom-mass-bound
  - thm-finite-hypergraph-regularity-in-all-face-orders
  - lem-finite-coordinate-projection-and-energy-pythagoras
  - thm-reals-cauchy-complete
  - thm-of-archimedean
  - def-finite-partite-hypergraph-system-and-coordinate-algebras
  - lem-finite-sum-reindexing-and-fubini
  - thm-product-rule
justified_by: []
proof_strategy: cases
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "Theorem 1.13 and Corollary 1.14, printed pp. 5–6; complete deduction, printed pp. 17–18, using §§2–4."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Theorem 11.27 and Proposition 11.28, printed pp. 454–455 (PDF pp. 474–475), framework comparison only. The printed general-k deletion exponent |V|^2 is not used."
---

## Statement

Let $J$ be finite, let $0\le d\le |J|$, and let $\mathcal H_d\subseteq\{e\subseteq J:|e|=d\}$. For each $j\in J$, let $V_j$ be a nonempty finite set, and for each $e\in\mathcal H_d$ let $E_e\subseteq V_e$. Define the labelled-copy density by
$$\rho=\frac{\left|\left\{x\in V_J:x|_e\in E_e\text{ for every }e\in\mathcal H_d\right\}\right|}{|V_J|}.$$
For every $\epsilon>0$ there is a $\delta_0\in(0,1)$ depending only on $J,\mathcal H_d,\epsilon$ such that, if $\rho\le\delta_0$, there are actual subsets $E'_e\subseteq E_e$ with no labelled copies of $\mathcal H_d$ and
$$|E_e\setminus E'_e|\le\epsilon\,|V_e|\qquad(e\in\mathcal H_d).$$
The conclusion counts only deleted edges from the original edge classes. It includes unequal vertex-class sizes and the orders $d=0$ and $d=1$.

## Statement references

[Tao, Theorem 1.13 and Corollary 1.14](https://arxiv.org/pdf/math/0503572v2)

[Tao and Van H. Vu, *Additive Combinatorics*, Theorem 11.27 and Proposition 11.28](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** A finite coordinate set, a finite uniform pattern, nonempty finite vertex classes, edge events on the corresponding coordinate products, and $\epsilon>0$.

[F1] With its explicit $Q,R_j,P,D_j,C,L$ constants, the good-atom theorem gives every good full atom intersection density at least $\tfrac34L(M_0)^{-S}>0$ ([[thm-finite-hypergraph-good-atom-counting]]).

[F2] For a fixed coarse face atom, the lower-face bad set has mass at most $1/L(M_j)+1/F(M_j)$ ([[lem-finite-hypergraph-bad-atom-mass-bound]]).

[F3] The regularity hierarchy supplies coarse face algebras of complexity at most $M_j$ and parameters $M_j\ge m$ ([[thm-finite-hypergraph-regularity-in-all-face-orders]]).

[F4] An algebra of complexity at most $M_j$ has at most $2^{M_j}$ atoms ([[lem-finite-coordinate-projection-and-energy-pythagoras]]).

[F5] The real numbers form a complete ordered field, so their canonical naturals are cofinal ([[thm-reals-cauchy-complete]], [[thm-of-archimedean]]).

[F6] Under the uniform product measure, a coordinate event on $e$ has normalized mass $|E|/|V_e|$; events on distinct coordinates have product density, by counting equal fibers and finite product cardinality ([[def-finite-partite-hypergraph-system-and-coordinate-algebras]], [[thm-product-rule]], [[lem-finite-sum-reindexing-and-fubini]]).

## Proof

1.1 Put $\epsilon_0=\min(\epsilon,\tfrac12)$. If $d=0$ and $\mathcal H_0=\varnothing$, then the copy density is $1$, so the hypothesis is impossible for $\delta_0=\tfrac12$. If $d=0$ and $\mathcal H_0=\{\varnothing\}$, the empty-face space is a singleton: its edge event is either empty, in which case there are no copies and no deletion is needed, or full, in which case the density is $1$. If $d\ge1$ and $\mathcal H_d=\varnothing$, the copy density is also $1$, so again choose $\delta_0=\tfrac12$. [given, F6, assume-case zero]

1.2 Suppose $d=1$ and $\mathcal H_1\ne\varnothing$. Let $h=|\mathcal H_1|$ and $\rho_j=|E_{\{j\}}|/|V_j|$ for $\{j\}\in\mathcal H_1$. The copy density is $\prod_{\{j\}\in\mathcal H_1}\rho_j$. Set $\delta_0=\epsilon_0^h$. If the density is at most $\delta_0$, at least one factor $\rho_j$ is at most $\epsilon_0$; otherwise their product would exceed $\epsilon_0^h$. Delete that entire edge event and leave all other edge classes unchanged. Every copy is destroyed, and the deleted class loses at most $\epsilon_0|V_j|\le\epsilon|V_j|$. [given, F6, choose, algebra, assume-case one]

1.3 Now suppose $2\le d\le |J|$ and $\mathcal H_d\ne\varnothing$. Use the constants from [F1], so $L(n)=C2^{2n}$ and $F=L^P$, with $C$ a positive integer depending only on the pattern. Put $S=|\mathcal H|$. By [F5], choose an integer $m\ge1$ so large that $2^m>2S/(C\epsilon_0)$. Such an $m$ exists: the Archimedean property first gives a natural above the right side, and induction gives $2^m\ge m+1$. Hence $2S/(C2^m)<\epsilon_0$. For every top event $E_e$, let $\mathcal B_e$ be the algebra it generates, of complexity at most $1\le m$, and apply [F3] with growth $F$. Let $U$ be the finite bound it gives for $M_0$. By [F1], every good full atom intersection has density at least $c_0=\frac34L(U)^{-S}>0$. Set $\delta_0=\min(\tfrac12,c_0/2)$. [given, F1, F3, F5, construct, assume-case higher]

1.4 If some $E_e$ is empty, the original copy set is empty and taking $E'_f=E_f$ for all faces proves the conclusion. Otherwise, every $E_e$ is an atom of its generated algebra (including $E_e=V_J$). For each face $f\in\mathcal H$ and each atom $A_f$ of its coarse algebra, let $B_{f,A_f}$ be the lower-face bad set from [F2]. For each top face $e$ put $D_e=B_{e,E_e}\cup\bigcup_{f\subsetneq e}\bigcup_{A_f\text{ an atom}}(A_f\cap B_{f,A_f})$ and $E'_e=E_e\setminus D_e$. Every set in this union depends only on coordinates in $e$, because all lower-face coordinate algebras are contained in $\mathcal A_e$. Thus the resulting event is in $\mathcal A_e$; identify it with its corresponding subset $E'_e\subseteq V_e$, so $E'_e\subseteq E_e$. [given, F2, F3, construct]

2.1 For a face $f\in\mathcal H_j$, each atom contributes at most $1/L(M_j)+1/F(M_j)\le2/L(M_j)$ to the bad mass by [F2], since $P\ge1$ and $L\ge1$. There are at most $2^{M_j}$ atoms by [F4], so their total contribution is at most $2^{M_j}\,2/L(M_j)=2/(C2^{M_j})\le2/(C2^m)$. Summing over the $S$ faces gives total bad mass at most $2S/(C2^m)<\epsilon_0$. Thus, for every top $e$, the normalized mass of $E_e\setminus E'_e$ is at most $\epsilon_0$. By [F6], this is exactly $|E_e\setminus E'_e|/|V_e|$, proving the required per-class deletion bound. [step 1.3, step 1.4, F2, F4, F6, algebra]

2.2 Suppose a labelled copy $x\in V_J$ survives in every $E'_e$. For each face $f\in\mathcal H$, choose the unique coarse atom $A_f$ containing its coordinate projection. If this atom family is not good, some face $f$ fails one of its defining tests, so $x\in A_f\cap B_{f,A_f}$. Because $\mathcal H$ is the downward closure of $\mathcal H_d$, this face lies in a top edge $e$; then $x\in D_e$, contradicting survival in $E'_e$. Hence the chosen atom family is good. [given, step 1.4, F2, choose]

3.1 The full intersection of the chosen atoms contains $x$ and, by [F1], has density at least $c_0>\delta_0$. It is contained in the original labelled-copy set because its top atoms are exactly the $E_e$. This contradicts $\rho\le\delta_0$. Therefore no labelled copy survives. [step 2.2, F1, step 1.3, algebra]

4.1 Every witness selection is finite: choose the least natural number $m$ satisfying the bound in step 1.3, and in step 2.2 each point lies in a unique atom of a finite partition. All face, atom, and edge families used to form the deletions are finite. Thus the proof uses only finite choices and no form of the axiom of choice. [step 1.3, step 1.4, step 2.2, construct, cases] ∎
