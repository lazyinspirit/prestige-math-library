---
id: thm-relative-koopman-von-neumann-structure-decomposition
kind: theorem
title: "Relative Koopman–von Neumann structure decomposition"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-relative-koopman-von-neumann-energy-increment
  - def-k-pseudorandom-measure
  - def-gowers-uniformity-norm-on-finite-cyclic-groups
  - lem-gowers-cauchy-schwarz-inequality
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§6–8, Lemma 6.1, Propositions 6.2, 7.2–7.3, 8.1–8.2, and their complete proofs, printed pp. 504–522"
---

## Statement

Fix an integer $k\ge3$ and a $k$-pseudorandom measure sequence $\nu_p$ on the prime fields as $p\to\infty$. Set $\epsilon_k=2^{-(2^{k+1}+8)}$. For every sequence of functions $f_p:F_p\to[0,\infty)$ with $0\le f_p\le\nu_p$ and every fixed $0<\epsilon<\epsilon_k$ and $\rho>0$, all sufficiently large primes admit a finite partition $\mathcal B_p$ of $F_p$ and a union $\Omega_p$ of its cells such that, writing $g_p=\mathbb E(f_p\mid\mathcal B_p)$ and $F_{U,p}=(1-1_{\Omega_p})(f_p-g_p)$,

$$\mathbb E((\nu_p+1)1_{\Omega_p})\le\rho,\qquad \|(1-1_{\Omega_p})\mathbb E(\nu_p-1\mid\mathcal B_p)\|_{\infty}\le\rho,\qquad \|F_{U,p}\|_{U^{k-1}(F_p)}\le\epsilon^{1/2^k}.$$

Here $\mathbb E(u\mid\mathcal B_p)$ is the average of $u$ on the cell containing its argument. The partitions and exceptional sets can be produced by the relative Koopman–von Neumann energy-increment procedure, and the construction uses only finite choices.

## Statement references

[[alg-relative-koopman-von-neumann-energy-increment|Relative Koopman–von Neumann energy-increment procedure]]

[[def-k-pseudorandom-measure|$k$-pseudorandom measure in the Green–Tao convention]]

[[def-gowers-uniformity-norm-on-finite-cyclic-groups|Gowers $U^d$ norm on finite cyclic groups]]

[[lem-gowers-cauchy-schwarz-inequality|Gowers Cauchy–Schwarz inequality]]

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz|The complex $L^2$ pairing is well-defined and satisfies Cauchy–Schwarz]]

[Green and Tao, §§6–8, Propositions 6.2, 7.2–7.3, and 8.1–8.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)


## Facts & Assumptions

**Given:** The fixed $k$, a $k$-pseudorandom sequence $\nu_p$, nonnegative $f_p\le\nu_p$, and fixed $\epsilon,\rho>0$ as in the Statement.

[F1] The measure sequence satisfies the $(k2^{k-1},3k-4,k)$ linear-forms condition and the $2^{k-1}$ correlation condition, including all fixed finite moments ([[def-k-pseudorandom-measure]]).

[F2] $\|F\|_{U^d}^{2^d}$ is the normalized alternating $d$-cube average, and the norm is nonnegative ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F3] A Gowers cube average is bounded in absolute value by the product of its vertex $U^d$ norms ([[lem-gowers-cauchy-schwarz-inequality]]).

[F4] Finite $L^2$ averages satisfy Cauchy–Schwarz ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F5] The procedure begins with the trivial partition, refines by bins of dual functions, removes cells with small $(\nu_p+1)$-mass, and stops when the residual $U^{k-1}$ norm is at most $\epsilon^{1/2^k}$ ([[alg-relative-koopman-von-neumann-energy-increment]]).

[A1] At iteration $K$, the induction invariant is that $\Omega_K$ is a union of cells of $\mathcal B_K$, $\mathbb E((\nu_p+1)1_{\Omega_K})\le\rho$, and $\|(1-1_{\Omega_K})\mathbb E(\nu_p-1\mid\mathcal B_K)\|_\infty\le\rho$. At $K=0$ these follow from $\Omega_0=\varnothing$ and $\mathbb E\nu_p=1+o(1)$, and step 4.1 proves preservation.

## Proof

1.1 It suffices to prove the conclusion for a smaller requested error, so assume $0<\rho<1/8$. Set $d=k-1$. For any real $F$, define $DF(x)=\mathbb E_{h\in F_p^d}\prod_{\omega\ne0}F(x+\omega\cdot h)$. Expanding the inner product gives $\mathbb E_x F(x)DF(x)=\|F\|_{U^d}^{2^d}$. Under induction assumption [A1], $g=\mathbb E(f_p\mid\mathcal B)$ is nonnegative and at most $1+\rho$ off the exceptional set, so the current residual obeys $|F|\le2(\nu_p+1)$. Expanding $\prod_{\omega\ne0}(2(\nu_p(x+\omega\cdot h)+1))$ and applying the linear-forms condition gives $|DF(x)|\le2^{2^k}+o(1)$ uniformly in $x$: every nonempty subset is a test on at most $2^{k-1}-1$ distinct forms $x+\omega\cdot h$, with $k$ variables, coefficients $0,1$, and shifts all equal to $x$. [A1, F1, F2, algebra]

1.2 Expanding the cube average of $\nu_p-1$ over its $2^d$ vertices gives one linear-forms test for each subset of the cube vertices. Every test is $1+o(1)$ by [F1], and the alternating coefficients sum to $(1-1)^{2^d}=0$. Hence $\|\nu_p-1\|_{U^d}=o(1)$. [F1, F2, algebra]

1.3 Fix an integer $K$ and functions $F_1,\ldots,F_K$ with $|F_j|\le2(\nu_p+1)$. For a monomial of degree $K$, put $g_u(x)=\prod_{j=1}^K F_j(x+u_j)$ for $u=(u_1,\ldots,u_K)$. Expanding its dual functions with independent increments and writing each increment as a common $h\in F_p^d$ plus an independent $H^{(j)}\in F_p^d$ rewrites $\mathbb E((\nu_p-1)\prod_j D F_j)$ as the average over $H=(H^{(1)},\ldots,H^{(K)})$ of the Gowers cube inner product with zero vertex $\nu_p-1$ and other vertices $g_{(\omega\cdot H^{(j)})_{j=1}^K}$, where $\omega\cdot H^{(j)}=\sum_{a=1}^d\omega_a H^{(j)}_a$. By [F3] its absolute value is at most $\|\nu_p-1\|_{U^d}$ times the average of the product of the other $2^d-1$ vertex norms. For each nonzero $\omega$, the values $u_j=\omega\cdot H^{(j)}$ are independent uniform elements of $F_p$, so Hölder and Jensen reduce the bound to showing $\mathbb E_{u\in F_p^K}\|g_u\|_{U^d}^{2^d}=O_{K,k}(1)$. [F3, algebra]

2.1 Expanding this cube average, taking absolute values, and averaging the independent $u_j$ gives $\mathbb E_u\|g_u\|_{U^d}^{2^d}\le \mathbb E_{h\in F_p^d}\prod_{j=1}^K\mathbb E_{z\in F_p}\prod_{\widetilde\omega\in\{0,1\}^d}2(\nu_p(z+\widetilde\omega\cdot h)+1)$. For each $j$, expand the product over the $2^d$ vertices; the common factor $2^{2^d}$ is harmless. An empty subset contributes $1$, a singleton contributes $\mathbb E\nu_p=1+o(1)$, and a subset $S$ of size $s\ge2$ contributes at most $\prod_{\substack{\widetilde\omega,\widetilde\omega'\in S\\\widetilde\omega<_{\mathrm{lex}}\widetilde\omega'}}\tau_{s,p}((\widetilde\omega-\widetilde\omega')\cdot h)$ by the correlation condition [F1]. Every difference vector is nonzero and has a coordinate $1$ or $-1$, so its dot product with uniform $h$ is uniform in $F_p$. By [F1], each $\tau_{s,p}$ has every fixed moment bounded, and its argument is uniform by the preceding sentence. Expanding the finite subset sums and product over $j$ leaves finitely many products of such values; Hölder bounds the displayed average by $O_{K,k}(1)$. Since step 1.2 gives $\|\nu_p-1\|_{U^d}=o(1)$, step 1.3 now proves $\mathbb E((\nu_p-1)P(D F_1,\ldots,D F_K))=o(1)$ for every fixed polynomial $P$. [F1, step 1.2, step 1.3, algebra]

3.1 The bound in step 1.1 places each $DF_j$ in a fixed compact interval $I_k$. Every continuous $\Phi:I_k^K\to\mathbb R$ is uniformly approximable by polynomials: after rescaling to $[0,1]^K$, its multivariate Bernstein polynomial is the expectation of $\Phi(Y_1/n,\ldots,Y_K/n)$ for independent binomial variables of means $nt_i$; uniform continuity controls the event $\max_i|Y_i/n-t_i|\le\delta$, and the variance bound $\operatorname{Var}(Y_i/n)\le1/(4n)$ plus Chebyshev controls its complement by $K/(4n\delta^2)$. Therefore step 2.1 and $\mathbb E(\nu_p+1)=2+o(1)$ imply $\mathbb E((\nu_p-1)\Phi(DF_1,\ldots,DF_K))=o(1)$. For the bin cutoffs used below, only finitely many bins meet $I_k$ and their offsets range over the compact cube $[0,1]^K$; uniform continuity gives a finite uniform-norm net for this family, so the same estimate holds uniformly over all those cutoffs. [F1, step 1.1, step 2.1, algebra]

4.1 Start with the trivial partition and refine it by the bins of each dual function as in [F5]. For each bin, a continuous piecewise-linear cutoff agrees with its indicator except within the boundary strip of width $\eta\epsilon$; averaging the strip weight over offsets gives $2\eta\mathbb E(\nu_p+1)$, so the selected offset makes the weighted $L^1$ error $O(\eta)$. Intersections of the $K$ bin cells are approximated by products of these cutoffs; boundedness of the cutoffs and a telescoping product expansion keep the weighted $L^1$ error $O_{K,k,\epsilon}(\eta)$. Step 3.1 then gives $|\mathbb E((\nu_p-1)1_A)|\le o(1)+O_{K,k,\epsilon}(\eta)$ for every cell $A$. There are $O_{K,k,\epsilon}(1)$ cells. Put into $\Omega$ every cell with $\mathbb E((\nu_p+1)1_A)<\eta^{1/2}$. Their union has $(\nu_p+1)$-mass $O_{K,k,\epsilon}(\eta^{1/2})$. For a remaining cell, $\mathbb E((\nu_p+1)1_A)=\mathbb E((\nu_p-1)1_A)+2\mathbb E1_A\ge\eta^{1/2}$; for large $p$ and small $\eta$ this gives $\mathbb E1_A\ge\eta^{1/2}/4$. Dividing the discrepancy bound by this lower bound gives $|\mathbb E(\nu_p-1\mid A)|\le o(1)+O_{K,k,\epsilon}(\eta^{1/2})$. Taking $\eta$ small and $p$ large proves the invariant in [A1]. [A1, F1, F5, step 3.1, algebra]

5.1 Suppose the residual $F=(1-1_\Omega)(f_p-g)$, $g=\mathbb E(f_p\mid\mathcal B)$, has $\|F\|_{U^d}>\epsilon^{1/2^k}$. Then step 1.1 gives $\mathbb E FDF>\epsilon^{1/2}$. Refine $\mathcal B$ by the bins of $DF$ and add the new small-mass cells to $\Omega'\supseteq\Omega$. The bin diameter gives $\|DF-\mathbb E(DF\mid\mathcal B')\|_\infty\le\epsilon$. Replacing $DF$ by this conditional average costs at most $\epsilon\mathbb E|F|=O_k(\epsilon)$, since $|F|\le2(\nu_p+1)$; deleting the new exceptional cells costs $O_{k,\epsilon}(\eta^{1/2})$, since their $(\nu_p+1)$-mass is $O_{k,\epsilon}(\eta^{1/2})$ and, by step 1.1, $\|DF\|_\infty\le M_k:=2^{2^k+1}$ for sufficiently large $p$. Also $\mathbb E|F|\le2\mathbb E(\nu_p+1)\le5$ for large $p$, and the stated restriction $\epsilon<2^{-(2^{k+1}+8)}$ gives $5\epsilon\le\epsilon^{1/2}/4$; choosing $\eta$ small makes the second at most $\epsilon^{1/2}/4$. Hence $|\langle(1-1_{\Omega'})(f_p-g),\mathbb E(DF\mid\mathcal B')\rangle|\ge\epsilon^{1/2}/2$. Since $g'=\mathbb E(f_p\mid\mathcal B')$ and $\mathcal B\subseteq\mathcal B'$, the projection identity gives $\mathbb E((f_p-g)H)=\mathbb E((g'-g)H)$ for every $\mathcal B'$-measurable $H$; apply it with $H=(1-1_{\Omega'})\mathbb E(DF\mid\mathcal B')$. By [F4] and $\|\mathbb E(DF\mid\mathcal B')\|_\infty\le M_k$, $\|(1-1_{\Omega'})(g'-g)\|_2\ge\epsilon^{1/2}/2^{2^k+2}$. Write $E_K=\mathbb E((1-1_{\Omega_K})g^2)$. Expanding $E_{K+1}$ around $g$ gives the squared increment plus twice its cross term. The cross term with $1-1_{\Omega_K}$ vanishes because $g'-g$ is orthogonal to $\mathcal B$; the remaining cross term is $-\mathbb E(1_{\Omega'\setminus\Omega}g(g'-g))=-\mathbb E(1_{\Omega'\setminus\Omega}g(f_p-g))$, since its first factor is $\mathcal B'$-measurable. On this new exceptional set $g\le2$ and $|f_p-g|\le2(\nu_p+1)$, so its magnitude is $O_{k,\epsilon}(\eta^{1/2})$. The old energy lost on the new cells is at most $\mathbb E(1_{\Omega'\setminus\Omega}g^2)=O_{k,\epsilon}(\eta^{1/2})$ as well. Choose $\eta$ so the sum of these losses, including twice the cross term, is at most half the squared increment. The squared increment is at least $\epsilon/2^{2^{k+1}+4}$, so the truncated energy increases by at least $\Delta=\epsilon/2^{2^{k+1}+6}$. [A1, F1, F4, F5, step 1.1, step 4.1, algebra]

6.1 Initially $\mathcal B_0$ is trivial and $\Omega_0=\varnothing$, so [A1] follows from $\mathbb E\nu_p=1+o(1)$. Step 4.1 preserves [A1] at every refinement. Outside $\Omega$, that invariant gives $\mathbb E(f_p\mid\mathcal B)\le\mathbb E(\nu_p\mid\mathcal B)\le1+\rho$ once $p$ is sufficiently large and $\eta$ is small; hence the truncated energy is at most $(1+\rho)^2\le2$ for $\rho<1/4$. If the procedure made $K_0=\lceil2^{2^{k+1}+8}/\epsilon\rceil$ nonterminal refinements, step 5.1 would increase this energy by at least $K_0\Delta\ge4$, a contradiction. It must stop with the norm threshold in [F5]. Taking $\eta$ small enough for the prescribed $\rho$, then $p$ sufficiently large, gives both exceptional-set bounds in the Statement. All selections are from finite cells and finite breakpoints, so no choice principle is used. [A1, F1, F5, step 4.1, step 5.1, algebra] ∎
