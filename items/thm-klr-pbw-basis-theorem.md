---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-klr-pbw-basis-theorem.json
  precheck: pass
id: thm-klr-pbw-basis-theorem
kind: theorem
title: "The PBW (monomial) basis theorem for KLR algebras"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-representation-of-a-klr-algebra, thm-hh-matsumoto-reduced-word-theorem, def-klr-grading-and-diagrammatic-composition, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.2.1-§3.2.2, Theorem 3.7 and its proof, printed pp. 23-27: spanning family $S$, PBW equivalence, and the reduction to Proposition 3.12; Remark 3.14: finiteness of graded components below any degree.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: 'Theorem 2.5 and Corollary 2.6, printed pp. 15-22: the homogeneous basis of ${}_jR(\nu)_i$ and faithfulness of the polynomial representation; Proposition 2.7: freeness over the polynomial subalgebra.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: '§2, printed pp. 3-5: the same rings $R(\nu)$ for an arbitrary Cartan datum and their basis, with the dot-count relations.'
---

## Statement

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and fix a reduced-expression system: for each $w\in S_n$ one reduced word $w=s_{i_1}\cdots s_{i_r}$, and for $\nu\in I^n$ put $\tau_w:=\tau_{i_1}\cdots\tau_{i_r}\in R_n(Q)$. Then the monomials $\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)$, over all $w\in S_n$, $a_1,\dots,a_n\ge0$ and $\nu\in I^n$, form a $k$-basis of $R_n(Q)$; equivalently $R_n(Q)$ is a free $k$-module on these monomials, and $R(\beta)$ has the corresponding basis. Moreover each $R(\beta)$ has finite-dimensional homogeneous components, and the graded dimension of the summand $e(\nu)R_n(Q)e(\nu')$ is the formal Laurent Hilbert series counting the monomials (bounded below, equivalently the finite sum of the corresponding rational geometric series), so the graded ranks are independent of the parameters $Q$: for each fixed $\beta$, $\dim_kR(\beta)_m<\infty$ for all $m$ and $R(\beta)_m=0$ for $m\ll0$; if $I$ is finite the same holds for $R_n(Q)$. In particular $R(\beta)$ is a locally finite graded algebra; its degree-zero part need not be one-dimensional (already $x_1\tau_1\in R(2\alpha_i)_0$ is a nontrivial idempotent).

## Facts & Assumptions

**Given:** A KLR datum $Q$ with the algebra $R_n(Q)$ of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], its grading of [[def-klr-grading-and-diagrammatic-composition]], a reduced-expression system for $S_n$, and the faithful graded polynomial representation of [[thm-polynomial-representation-of-a-klr-algebra]] on $\mathrm{Pol}_n$.

[F1] Faithfulness ([[thm-polynomial-representation-of-a-klr-algebra]]): the operators of the polynomial representation satisfy relations (1)-(7) and the homomorphism $\rho:R_n(Q)\to\mathrm{End}^{\mathrm{gr}}_k(\mathrm{Pol}_n\{w\})$ is injective for nonzero $P_{ij}$, and it becomes an isomorphism onto the localized skew group algebra $k(I)[x]\rtimes S_n$ after inverting the nonzero polynomials $P_{ij}(x_a,x_b)$ and differences $x_a-x_b$.

[F2] Relations (4), (5), (6), (7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], used as rewriting rules for words in the generators, and the degree assignment $\deg x_a=2d_{\nu_a}>0$, $\deg\tau_a=-b_{\nu_a\nu_{a+1}}$ of [[def-klr-grading-and-diagrammatic-composition]].

[F3] Reduced-word moves and deletion: [[thm-hh-matsumoto-reduced-word-theorem]], clauses (1) and (2), applied to the type-$A$ Coxeter system of adjacent transpositions, connects reduced words by far and three-term braid moves and transforms any nonreduced word by such moves to an adjacent repeat.

## Proof

**Proof technique:** direct; first reduce arbitrary words to monomials with reduced crossing words and right-hanging dots, then obtain independence from the faithful polynomial representation.

1.1 (Dots move right.) Move the word idempotents to the right using relations (2)–(3). On each resulting component, if $x_b$ stands immediately left of $\tau_a$, relation (6) gives $x_b\tau_ae(\nu)=\tau_ax_{s_a(b)}e(\nu)$ except for adjacent equal colours. In that case the exact rules are $x_a\tau_ae(\nu)=\tau_ax_{a+1}e(\nu)+e(\nu)$ and $x_{a+1}\tau_ae(\nu)=\tau_ax_ae(\nu)-e(\nu)$. The leading term moves one dot past one crossing, and each correction removes that dot and crossing; hence every term has fewer dot/crossing inversions. Induction on their number puts all dots to the right of all crossings. [given, F2, algebra]

2.1 (Crossing words reduce.) Induct on crossing length. By [F3], a nonreduced transposition word can be changed by finitely many far and braid moves into a word with an adjacent repeat; each braid correction has three fewer crossings and is handled by induction after step 1.1, and relation (4) removes the repeated pair. For a reduced word, [F3] connects it to the chosen reduced word by finitely many braid moves; their correction terms again have fewer crossings. Thus every crossing word is a sum of chosen $\tau_w$ times dot polynomials, and step 1.1 puts the dots on the right. This proves spanning without a decreasing-length claim for braid moves themselves. [step 1.1, F2, F3, induction, algebra]

3.1 (Independence.) Under the representation of [F1], the image of $\tau_wx^ae(\nu)$ in the localization at the nonzero $P_{ij}(x_a,x_b)$ and $x_a-x_b$ is triangular: expanding the operators of the chosen reduced word, its highest term is a nonzero scalar times the permutation $w$ acting on the summand, and all other terms are permutations of strictly smaller length (an unequal crossing contributes its nonzero $P$-factor together with the transposition, an equal crossing contributes $(1-s_a)/(x_a-x_{a+1})=-(s_a-1)/(x_a-x_{a+1})$, again transposition plus lower-length terms). A linear relation $\sum c_{w,a,\nu}\tau_wx^ae(\nu)=0$ in $R_n(Q)$ would therefore give, after applying $\rho$ and looking at a source/destination block and the maximal occurring length, a nontrivial linear relation $\sum_wd_ww=0$ among distinct permutations $w$ of the field $k(x_1,\dots,x_n)$. Distinct field automorphisms are linearly independent: in a shortest nonzero relation choose two different automorphisms $w,w_0$ and $g$ with $w(g)\ne w_0(g)$. Evaluation on $fg$ minus $w_0(g)$ times evaluation on $f$ removes one term and leaves the $w$ term nonzero, contradicting minimality; a one-term relation is impossible by evaluation on $1$. Hence the spanning monomials of step 2.1 have linearly independent images, and since $\rho$ is injective by [F1] applied to the fixed factorization, the monomials themselves are linearly independent; together with step 2.1 they form a basis. [step 2.1, F1, choose, algebra]

4.1 (Grading bookkeeping.) The bidegree of the basis monomial $\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)$ is $(\nu,w\nu)$ together with the integer $\deg(\tau_w\text{ on }\nu)+\sum_ja_j\cdot2d_{\nu_j}$, where $\deg(\tau_w\text{ on }\nu)$ is the sum of the degrees $-b_{\nu_r\nu_{r+1}}$ of its crossings read in the successive permuted sequences; this is independent of the parameters $Q$ and of the factorization. The summand $e(\nu)R_n(Q)e(\nu')$ therefore has the Laurent Hilbert series $\sum_{w:w\nu'=\nu}q^{\deg(\tau_w\text{ on }\nu')}\prod_{j=1}^n(1-q^{2d_{\nu'_j}})^{-1}$, a finite sum of rational geometric series bounded below (each $d_{\nu_j}>0$ and the finitely many crossing degrees are bounded below), which proves the displayed graded-dimension claim and shows that $R(\beta)_m=0$ for $m$ below the finite minimum of the finitely many crossing contributions over the finitely many $\nu,w$ with $w\nu=\nu'$ and $\sum_j\alpha_{\nu_j}=\beta$. [step 3.1, F2, algebra]

5.1 (Local finiteness.) Fix $\beta\in Q_+$ and a degree $m$. The basis monomials of $R(\beta)_m$ involve only the finitely many sequences $\nu\in I^\beta$ and the finitely many $w\in S_{|\beta|}$; each crossing degree is one of the finitely many integers $-b_{pq}$ and each dot degree $2d_{\nu_j}$ is at least $2\min_id_i>0$, so $\sum_ja_j$ is bounded, leaving finitely many exponent tuples; hence $\dim_kR(\beta)_m<\infty$. If $I$ is finite, $I^\beta$ is finite for every $|\beta|$, so the same argument applies to $R_n(Q)$ degree by degree. The element $x_1\tau_1\in R(2\alpha_i)_0$ is nonzero by the basis of step 3.1 and squares to itself by the nil-Hecke dot move, so degree zero need not be one-dimensional. [step 3.1, step 4.1, algebra] ∎


## Remarks

The local pictures illustrate steps 1.1 and 2.1. Read upward, with the rightmost algebra factor at the bottom, as in the diagram dictionary of [[def-klr-grading-and-diagrammatic-composition]]. Only the indicated adjacent strands are shown; all others are straight. A crossing has no over/under choice. In the first two rows both strands have colour $i$; a dot above a crossing moves below it, producing the indicated signed identity term. Thus moving dots to the right in a word places them below the reduced crossing diagram.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\begin{scope}
\draw[thick] (0,0) -- (0,0.4) -- (0.8,1.1) -- (0.8,1.5);
\draw[thick] (0.8,0) -- (0.8,0.4) -- (0,1.1) -- (0,1.5);
\fill (0,1.3) circle (0.065);
\node at (0,-0.25) {$i$}; \node at (0.8,-0.25) {$i$};
\node at (0.4,-0.7) {$x_a\tau_ae(\nu)$};
\node at (1.8,0.75) {$=$};
\draw[thick] (3,0) -- (3,0.4) -- (3.8,1.1) -- (3.8,1.5);
\draw[thick] (3.8,0) -- (3.8,0.4) -- (3,1.1) -- (3,1.5);
\fill (3.8,0.2) circle (0.065);
\node at (3,-0.25) {$i$}; \node at (3.8,-0.25) {$i$};
\node at (3.4,-0.7) {$\tau_ax_{a+1}e(\nu)$};
\node at (4.9,0.75) {$+$};
\draw[thick] (6,0) -- (6,1.5); \draw[thick] (6.8,0) -- (6.8,1.5);
\node at (6,-0.25) {$i$}; \node at (6.8,-0.25) {$i$};
\node at (6.4,-0.7) {$e(\nu)$};
\end{scope}
\begin{scope}[yshift=-3.2cm]
\draw[thick] (0,0) -- (0,0.4) -- (0.8,1.1) -- (0.8,1.5);
\draw[thick] (0.8,0) -- (0.8,0.4) -- (0,1.1) -- (0,1.5);
\fill (0.8,1.3) circle (0.065);
\node at (0,-0.25) {$i$}; \node at (0.8,-0.25) {$i$};
\node at (0.4,-0.7) {$x_{a+1}\tau_ae(\nu)$};
\node at (1.8,0.75) {$=$};
\draw[thick] (3,0) -- (3,0.4) -- (3.8,1.1) -- (3.8,1.5);
\draw[thick] (3.8,0) -- (3.8,0.4) -- (3,1.1) -- (3,1.5);
\fill (3,0.2) circle (0.065);
\node at (3,-0.25) {$i$}; \node at (3.8,-0.25) {$i$};
\node at (3.4,-0.7) {$\tau_ax_ae(\nu)$};
\node at (4.9,0.75) {$-$};
\draw[thick] (6,0) -- (6,1.5); \draw[thick] (6.8,0) -- (6.8,1.5);
\node at (6,-0.25) {$i$}; \node at (6.8,-0.25) {$i$};
\node at (6.4,-0.7) {$e(\nu)$};
\end{scope}
\end{tikzpicture}
```

For the braid correction let $(\nu_a,\nu_{a+1},\nu_{a+2})=(i,j,i)$ and write $C_{ij}:=(Q_{ij}(x_a,x_{a+1})-Q_{ij}(x_{a+2},x_{a+1}))/(x_{a+2}-x_a)$, the polynomial of relation (7). The third term below has no crossings: its polynomial dots are at the bottom. Each braid word reverses the three strand positions and has top word $(i,j,i)$, so all three terms have the same boundary words. For unequal outer colours the correction is zero. This is the three-crossing reduction used in step 2.1, rather than an assertion that an individual braid move decreases length. The proof above is independent of these illustrations.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw[thick] (0,0) -- (0,0.6) -- (0.7,1.2) -- (1.4,1.8);
\draw[thick] (0.7,0) -- (1.4,0.6) -- (1.4,1.2) -- (0.7,1.8);
\draw[thick] (1.4,0) -- (0.7,0.6) -- (0,1.2) -- (0,1.8);
\node at (0,-0.25) {$i$}; \node at (0.7,-0.25) {$j$}; \node at (1.4,-0.25) {$i$};
\node at (0.7,-0.8) {$\tau_{a+1}\tau_a\tau_{a+1}e(\nu)$};
\node at (2.2,0.9) {$=$};
\begin{scope}[xshift=3cm]
\draw[thick] (0,0) -- (0.7,0.6) -- (1.4,1.2) -- (1.4,1.8);
\draw[thick] (0.7,0) -- (0,0.6) -- (0,1.2) -- (0.7,1.8);
\draw[thick] (1.4,0) -- (1.4,0.6) -- (0.7,1.2) -- (0,1.8);
\node at (0,-0.25) {$i$}; \node at (0.7,-0.25) {$j$}; \node at (1.4,-0.25) {$i$};
\node at (0.7,-0.8) {$\tau_a\tau_{a+1}\tau_ae(\nu)$};
\end{scope}
\node at (5.2,0.9) {$+$};
\draw[thick] (6,0.4) -- (6,1.8); \draw[thick] (6.7,0.4) -- (6.7,1.8); \draw[thick] (7.4,0.4) -- (7.4,1.8);
\draw (5.8,0) rectangle (7.6,0.4); \node at (6.7,0.2) {$C_{ij}$};
\node at (6,-0.25) {$i$}; \node at (6.7,-0.25) {$j$}; \node at (7.4,-0.25) {$i$};
\node at (6.7,-0.8) {$C_{ij}e(\nu)$};
\end{tikzpicture}
```
