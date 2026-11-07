---
id: thm-finite-hypergraph-good-atom-counting
kind: theorem
title: "Good hypergraph atoms have a uniform positive count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-finite-hypergraph-regularity-in-all-face-orders
  - def-good-atoms-in-a-finite-hypergraph-hierarchy
  - def-finite-coordinate-hypergraph-bundle
  - lem-finite-hypergraph-bad-atom-mass-bound
  - lem-hypergraph-bundle-freezing-discrepancy-bound
  - lem-hypergraph-bundle-conditional-cauchy-schwarz-doubling
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§3 Lemma 3.4 and complete §4 counting proof, printed pp. 17–24; the explicit finite error and growth ledger is local."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 454–462 (PDF pp. 474–482), independent low-order framework and higher-order discussion. The book omits the complete all-order counting/removal details, which are not attributed to it."
---

## Statement

Let $J$ be finite with $v=|J|$, let $1\le d\le |J|$, and let $\mathcal H_d$ be a finite $d$-uniform pattern. Let $\mathcal H=\bigcup_{j=0}^d\mathcal H_j$ be its downward face family and let $S=|\mathcal H|$. Put $Q=2^{v2^d}$, $R_j=2^{v2^{d-j}}$ for $1\le j\le d$, $P=8\cdot2^dQ$, $D_0=0$, $D_j=4(R_j+1)(D_{j-1}+1)$ for $1\le j\le d$, $C=2+16dQ+8D_d$, $L(n)=C2^{2n}$ for integers $n\ge1$, and $F(n)=L(n)^P$. For every integer $m\ge1$, every face-order regularity hierarchy with top complexity at most $m$ and parameters $M_d=m$ satisfying $F(M_j)\le M_{j-1}$ for $1\le j\le d$, with $M_0$ bounded by the finite recurrence in the Proof, and every good family of one coarse atom $A_e$ for each $e\in\mathcal H$, the normalized full intersection satisfies
$$\mathbb E\prod_{e\in\mathcal H}1_{A_e}\ge\frac34\,L(M_0)^{-S}>0.$$
The constants are uniform over all nonempty finite vertex classes and all algebras satisfying the hierarchy hypotheses.

## Statement references

[Tao, §3 Lemma 3.4 and §4 counting proof](https://arxiv.org/pdf/math/0503572v2)

[Tao and Van H. Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** A finite pattern on $J$, nonempty finite coordinate classes, a face-order hierarchy with growth $F$, and one good atom on every face in its downward closure.

[F1] The finite regularity theorem supplies the face families, coarse/fine algebras, energy-gap bounds, discrepancy bounds and a finite bound on $M_0$ ([[thm-finite-hypergraph-regularity-in-all-face-orders]]).

[F2] A good family supplies conditional densities $p_e$, localized errors $b_e$, density lower bounds, and localized squared-error bounds on full proper-face supports ([[def-good-atoms-in-a-finite-hypergraph-hierarchy]]).

[F3] Bundle counts are finite normalized sums over separate coordinates; duplicating outside a face shares precisely the selected coordinates ([[def-finite-coordinate-hypergraph-bundle]]).

[F4] For a fixed coarse atom, the mass of its lower-face bad set is at most $1/L(M_j)+1/F(M_j)$ ([[lem-finite-hypergraph-bad-atom-mass-bound]]).

[F5] Freezing outside coordinates bounds a bundle's fine-discrepancy error by the rank-$j$ discrepancy ([[lem-hypergraph-bundle-freezing-discrepancy-bound]]).

[F6] A localized coarse-to-fine error is bounded by Cauchy–Schwarz and a doubled bundle count of strictly smaller order ([[lem-hypergraph-bundle-conditional-cauchy-schwarz-doubling]]).

## Proof

1.1 If $\mathcal H_d$ is empty, then $\mathcal H$ is empty and the full intersection is $V_J$, of normalized size $1$, so the claim holds. Assume henceforth $\mathcal H_d\ne\varnothing$. Define $Q=2^{v2^d}$, $R_j=2^{v2^{d-j}}$ for $1\le j\le d$, and $P=8\cdot2^dQ$. Set $D_0=0$, $D_j=4(R_j+1)(D_{j-1}+1)$ for $1\le j\le d$, $C=2+16dQ+8D_d$, $L(n)=C2^{2n}$ for $n\ge1$, and $F(n)=L(n)^P$. By induction on $|K|$, a finite coordinate set $K$ has $2^{|K|}$ subsets: subsets either omit or contain a fixed element, and each class is in bijection with the subsets of the remaining coordinates. Thus a bundle on at most $K_j=v2^{d-j}$ coordinates has at most $R_j$ edges. The functions are increasing integers, $R_j\le Q$, $P\ge4Q$, and $F(n)\ge n+1$. [given, F1, F3, construct, algebra]

1.2 Put $\eta_j=1/F(M_j)$ and $\tau=1/F(M_0)$. Define $\alpha_0=0$ and $\alpha_j=\alpha_{j-1}+2R_jL(M_j)^{-P/2+R_j}$. Since $M_j\ge m\ge1$, $R_j\le Q\le P/4$, and $L$ is increasing, $\alpha_d\le2dQ L(m)^{-P/4}\le2dQ/C\le1/8$. In particular, every $\alpha_j\le1$, as required in the square-root estimate below. [given, F1, F2, algebra]

1.3 We prove by outer induction on $j$ and inner induction on the number $r$ of order-$j$ edges that every downward-closed bundle $\mathcal G$ of order at most $j$ on at most $K_j=v2^{d-j}$ coordinates satisfies $|T_{\mathcal G}-q_{\mathcal G}|\le\alpha_jq_{\mathcal G}+D_j\tau^{1/2^j}$, where $T_{\mathcal G},q_{\mathcal G}$ are as in [F3]. For $j=0$, the bundle has no nonempty edges; its only possible edge is the empty face, whose atom is $V_J$, so both quantities are $1$. If $r=0$ at a higher rank, apply the outer induction because $K_j\le K_{j-1}$ and because $\tau^{1/2^{j-1}}\le\tau^{1/2^j}$. [given, F2, F3, algebra]

1.4 Suppose $j\ge1$ and $r\ge1$. Choose an edge $g_0\in\mathcal G$ with $|g_0|=j$ and put $e=\pi(g_0)$. Let $D$ be the product of the indicators of all proper-face atoms inside $g_0$. By bundle injectivity and downward closure, these are all the proper faces of $e$. Their intersection is contained in the skeleton support $S_e$. On every point of this intersection the atom of the joined coarse facet algebra is exactly $S_e$, so its conditional average is $p_e$; the fine conditional average differs from it by $b_e$. Hence on the support $D=1$, $1_{A_e}=p_e+b_e+c_e$, where $c_e=1_{A_e}-\mathbb E(1_{A_e}\mid\bigvee_{f\in\partial e}\mathcal B'_f)$. This identity is used only on that support; if the skeleton support is empty, the corresponding product is zero and $p_e=1$ is only provisional. The $p_e$ contribution is $p_eT_{\mathcal G\setminus\{g_0\}}$; inner induction and $0\le p_e\le1$ preserve the relative error and do not increase the additive error. [given, F2, F3, algebra]

1.5 By [F5], the $c_e$ contribution has absolute value at most $\tau\le\tau^{1/2^j}$. For the $b_e$ contribution, discard every other order-$j$ indicator, which is at most $1$. The remaining bundle has the proper $g_0$ edges and the lower edges outside $g_0$. Both the proper-face bundle and its doubled bundle have order at most $j-1$; their coordinate counts are at most $K_{j-1}$ because $K_{j-1}=2K_j$ and $j\le v$. Hence outer induction applies to both counts. [given, F3, F5, F6, algebra]

1.6 Put $q_0=\prod_{g\subsetneq g_0}p_{\pi(g)}$ and let $q_1$ be the product over the other lower edges. By the shared-edge construction, the two lower-bundle main products are $q_0$ and $q_0q_1^2$. Outer induction gives their counts at most $x+z$ and $y+z$, where $x=(1+\alpha_{j-1})q_0$, $y=(1+\alpha_{j-1})q_0q_1^2$, and $z=D_{j-1}\tau^{1/2^{j-1}}$. Both $x$ and $y$ are at most $2$ since $\alpha_{j-1}\le1$. If $z\le1$, then $(x+z)(y+z)=xy+z(x+y)+z^2\le xy+5z$ because $x+y\le4$ and $z^2\le z$, so $\sqrt{(x+z)(y+z)}\le\sqrt{xy}+\sqrt{5z}\le\sqrt{xy}+3\sqrt z$. If $z>1$, the actual bundle counts are at most $1$, so the same upper bound follows directly. Thus the lower-count geometric mean is at most $(1+\alpha_{j-1})q_0q_1+3\sqrt{D_{j-1}}\tau^{1/2^j}$. There are at most $r\le R_j$ order-$j$ edges, each with $p_e\ge1/L(M_j)$, so $q_0q_1\le L(M_j)^{R_j}q_{\mathcal G}$. Using [F2] and [F6], the $b_e$ contribution is therefore at most $2\sqrt{\eta_j}L(M_j)^{R_j}q_{\mathcal G}+3\sqrt{D_{j-1}}\tau^{1/2^j}$. [F2, F3, F6, algebra]

2.1 Each removal of an order-$j$ edge adds at most $2L(M_j)^{-P/2+R_j}q_{\mathcal G}$ to the relative error and at most $(1+3\sqrt{D_{j-1}})\tau^{1/2^j}$ to the additive error; multiplying by $p_e\le1$ does not increase previous additive error. After at most $R_j$ removals the relative error is at most $\alpha_j$, and $D_{j-1}+R_j(1+3\sqrt{D_{j-1}})\le D_{j-1}+4R_j(D_{j-1}+1)\le D_j$. This completes the inner induction and the bundle-count claim. [step 1.4, step 1.5, step 1.6, F2, algebra]

3.1 Apply the bundle-count claim to $\mathcal G=\mathcal H$ on $K=J$ with the identity projection. Then $q_{\mathcal H}=\prod_{e\in\mathcal H}p_e\ge L(M_0)^{-S}$, since $M_j\le M_0$ and each good density is at least $1/L(M_j)$. Also $D_d\tau^{1/2^d}/q_{\mathcal H}\le D_dL(M_0)^{-P/2^d+S}\le D_dL(M_0)^{-P/2^{d+1}}\le1/8$. Here $S\le2^v\le Q$, $P/2^{d+1}=4Q\ge S$, and $C\ge8D_d$. Together with $\alpha_d\le1/8$, the bundle-count inequality yields $T_{\mathcal H}\ge(1-\alpha_d)q_{\mathcal H}-D_d\tau^{1/2^d}\ge\frac34q_{\mathcal H}\ge\frac34L(M_0)^{-S}>0$, as required. The finite regularity theorem bounds $M_0$ by a recurrence depending only on the pattern, $m$, and $F$, so this positive lower bound is uniform over all vertex-class sizes. [step 1.1, step 1.2, step 1.3, step 2.1, F1, F2, algebra]

4.1 Every induction stage and witness family is finite, and the number of bundle refinements is bounded by the displayed integers $R_j$; the proof uses no infinite sequence of choices and no form of the axiom of choice. [step 1.1, step 1.3, step 2.1, F1, F3] ∎
