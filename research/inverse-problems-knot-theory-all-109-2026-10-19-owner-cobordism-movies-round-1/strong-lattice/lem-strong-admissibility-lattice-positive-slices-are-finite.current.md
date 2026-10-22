---
id: lem-strong-admissibility-lattice-positive-slices-are-finite
kind: lemma
title: "The strong-admissibility lattice criterion makes positive affine slices finite"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - cor-bolzano-weierstrass-in-rn
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Definition4.10 and Lemma4.14, printed pp.37–39; Definition8.8 and Lemma8.10, printed pp.67–68. Actual bodies read. The finite-dimensional argument below isolates the strict strong-admissibility criterion and does not assume the geometric domain/Spin-c identifications."
---

## Statement

Let $r\ge1$, let $w\in\{1,\ldots,r\}$, and let $G\subseteq\mathbb Z^r$ be a subgroup given by a finite list of generators. Suppose $P_w=0$ for every $P\in G$, and let $\ell:G\to\mathbb Q$ be additive. Assume the strict strong-admissibility condition
$$P\in G\setminus\{0\},\quad\ell(P)\ge0\quad\Longrightarrow\quad\max_{1\le j\le r}P_j>\ell(P).$$
Put $V=\operatorname{span}_{\mathbb R}G$, let $\widetilde\ell:V\to\mathbb R$ be the unique real-linear extension of $\ell$, and let $\mathbf1=(1,\ldots,1)\in\mathbb R^r$. Then for every $D_0\in\mathbb R^r$ the set
$$\bigl(D_0+\{\widetilde\ell(P)\mathbf1-P:P\in V\}\bigr)\cap\mathbb Z_{\ge0}^r$$
is finite. In particular any collection of nonnegative integral domains whose differences from $D_0$ have the displayed form is finite, without fixing or bounding the distinguished marked coefficient in advance.

This is a finite-dimensional lattice statement. Its hypotheses include both the zero marked coordinate and the strict inequality, including the case $\ell(P)=0$. Identifying actual disk or triangle classes, their Spin-c data, Maslov indices and domains with such a slice is a separate prerequisite. Finiteness of homotopy classes with a fixed domain and compactness of moduli spaces are not asserted. No choice principle is needed.

## Statement references

[[cor-bolzano-weierstrass-in-rn|Finite-dimensional bounded sequences have convergent subsequences]]

[Ozsvath–Szabo, Definitions4.10/8.8 and Lemmas4.14/8.10](https://arxiv.org/pdf/math/0101206)

## Facts & Assumptions

**Given:** The integer $r$, marked coordinate $w$, finite generating list for $G$, additive rational-valued $\ell$, its strict condition, and $D_0$ as in the statement.

[F1] [[cor-bolzano-weierstrass-in-rn]] supplies a convergent subsequence of a bounded sequence in $\mathbb R^r$. Its finite-dimensional compactness proof uses no choice principle.

## Proof

1.1 **A rational linear model.** Apply finite Gaussian elimination over $\mathbb Q$ to the given integer generators, retaining an independent sublist $g_1,\ldots,g_s$ spanning their rational span. Any rational linear relation among the original generators gives the corresponding relation among their $\ell$ values: multiply by a common denominator and apply additivity in $G$. Therefore the assignments $g_i\mapsto\ell(g_i)\in\mathbb Q$ give a well-defined rational linear functional on that rational span and a unique real-linear extension on $V$. In these basis coordinates its coefficients are rational. The marked-coordinate equation $P_w=0$ holds on all of $V$. The case $G=0$ gives the empty basis and the zero functional. [given, construct, algebra]

2.1 Define $T:V\to\mathbb R^r$ by $T(P)=\widetilde\ell(P)\mathbf1-P$ and put $H=T(V)$. This is a rational linear subspace, since $T(g_i)=\ell(g_i)\mathbf1-g_i$ have rational coordinates. Moreover $T$ is injective: if $T(P)=0$, its $w$th coordinate gives $\widetilde\ell(P)=0$ and then $P=0$. Thus an independent rational basis for $V$ maps to one for $H$, and a rational vector of $H$ has rational coordinates in that basis by finite Gaussian elimination. Its inverse image under $T$ consequently lies in $\operatorname{span}_{\mathbb Q}G$. Rational subspaces are closed, for Gaussian elimination expresses each as the kernel of a finite matrix of rational linear equations. [step 1.1, construct, algebra]

3.1 **Exclude every nonnegative real direction.** Suppose $0\ne h\in H\cap\mathbb R_{\ge0}^r$, and let $I=\{j:h_j>0\}$. The subspace $H_I=H\cap\{x_j=0:j\notin I\}$ has a rational basis by elimination. Express $h$ in that basis and approximate its finitely many coefficients by rational numbers closely enough that all the coordinates in $I$ remain positive. This gives a nonzero rational $q\in H_I$ which is nonnegative. By step 2.1 its inverse image $P=T^{-1}q$ lies in $\operatorname{span}_{\mathbb Q}G$. Clear its finitely many rational generator coefficients with a positive integer $N$ so $NP\in G\setminus\{0\}$. The nonnegative vector $T(NP)=Nq$ has marked coefficient $\ell(NP)\ge0$, and all of its coefficients say $(NP)_j\le\ell(NP)$. This contradicts the strict hypothesis. Therefore $H\cap\mathbb R_{\ge0}^r=\{0\}$. The support-face argument keeps exactly zero coordinates zero; it does not approximate across the boundary of the positive cone. [given, step 1.1, step 2.1, construct, algebra]

4.1 **The affine positive lattice set is bounded.** Let $\mathcal D=(D_0+H)\cap\mathbb Z_{\ge0}^r$. If it were unbounded, fix an explicit enumeration of $\mathbb Z^r$, for example increasing coordinate-maximum norm and lexicographic order within each finite shell. For each positive integer $n$, take its first member $D_n\in\mathcal D$ with $\|D_n\|_2>n$. This uses a fixed least element of a subset of the natural numbers, not a choice principle. The nonnegative unit vectors $D_n/\|D_n\|_2$ have a convergent subsequence by [F1], with limit $v\ge0$ and $\|v\|_2=1$. Since $(D_n-D_0)/\|D_n\|_2\in H$ and $D_0/\|D_n\|_2\to0$, closedness of $H$ in step 2.1 gives $v\in H$. This contradicts step 3.1. Hence $\mathcal D$ is bounded. [F1, step 2.1, step 3.1, given, construct]

5.1 A bounded subset of $\mathbb R^r$ has only finitely many integral vectors: a common coordinate bound places them in a finite product of finite integer intervals. Apply this to step 4.1. The empty slice needs no reference member; if $G=0$ the slice has at most the vector $D_0$. If $\ell=0$, step 3.1 still applies because the strict hypothesis includes zero, and no marked multiplicity bound was introduced. Thus the entire displayed set, and every collection contained in it, is finite. All selections and approximations were finite or used the fixed integer enumeration and the choice-free finite-dimensional supplier [F1]. This proves the statement without any geometric or analytic inference beyond its explicit lattice hypotheses. [given, F1, step 1.1, step 3.1, step 4.1, algebra] ∎
