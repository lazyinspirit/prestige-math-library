---
id: lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi
kind: lemma
title: "Heisenberg normal-ordered fields give modules with an arbitrary zero-mode action"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-rank-one-heisenberg-vertex-algebra, thm-rank-one-heisenberg-vertex-operator-algebra, def-vertex-algebra-module, lem-module-jacobi-formal-delta-substitution-identity, def-formal-distribution-on-a-vector-space, def-admissible-vertex-algebra-module]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "Section 2.6, Theorem 2.2 and its complete Wick proof, printed pp. 50–51; Section 3.1, Propositions 3.1–3.2 and Example 3.1, pp. 66–68. Full module Jacobi is proved locally by the common Wick expression."
    - title: "Christophe Nozaradan, Introduction to Vertex Algebras"
      url: "https://arxiv.org/pdf/0809.1380"
      locator: "Sections 3.3–3.4: normal products and formal Taylor expansion."
---

## Statement

Let $V=P$ be the rank-one Heisenberg vertex algebra of [[thm-rank-one-heisenberg-vertex-operator-algebra]]. For any complex vector space $E$ and any $A\in\operatorname{End}_{\mathbb C}(E)$, set $F(E,A)=P\otimes E$ and define

$$a_{-r}=x_r\cdot\otimes I_E,\qquad a_r=r\partial_{x_r}\otimes I_E\ (r\ge1),\qquad a_0=I_P\otimes A.$$

Write $a^F(z)=\sum_na_nz^{-n-1}$ and $b_r^F(z)=\partial_z^{r-1}a^F(z)/(r-1)!$. With the same negative/nonnegative-mode normal ordering as [[def-rank-one-heisenberg-vertex-algebra]], put

$$Y_F(x_{r_1}\cdots x_{r_s},z)={:}b_{r_1}^F(z)\cdots b_{r_s}^F(z){:},\qquad Y_F(1,z)=I.$$

These fields give a $V$-module in the full formal-Jacobi convention of [[def-vertex-algebra-module]]. In particular, no diagonalizability or nilpotence condition on $A$ is required. For $v\in P_w$ and $f\in P_d\otimes E$, each mode satisfies

$$v^F_{(k)}f\in P_{d+w-k-1}\otimes E,$$

where negative degrees are zero. Thus the fields are lower truncated, and this is an admissible nonnegative integer grading whenever the module is viewed over the conformal VOA. No logarithmic powers occur in $Y_F$ itself.

## Facts & Assumptions

**Given:** The polynomial vacuum VOA, an arbitrary $E,A$, and the displayed oscillator and normal-field formulas.

[F1] [[def-rank-one-heisenberg-vertex-algebra]] fixes the normal products and divided derivatives; [[thm-rank-one-heisenberg-vertex-operator-algebra]] proves these are precisely the vacuum state fields.

[F2] [[def-formal-distribution-on-a-vector-space]] fixes the two binomial expansions, locality and formal residues.

[F3] [[lem-module-jacobi-formal-delta-substitution-identity]] proves $D_{12}-D_{21}=D_{20}$, where $D_{12}=z_0^{-1}\delta((z-w)/z_0)$, $D_{21}=z_0^{-1}\delta((w-z)/(-z_0))$, and $D_{20}=w^{-1}\delta((z-z_0)/w)$ have the three prescribed module-Jacobi expansions.

[F4] [[def-vertex-algebra-module]] requires lower truncation, the identity vacuum action and the complete three-variable module Jacobi identity. [[def-admissible-vertex-algebra-module]] requires exactly the nonnegative integer grading and conformal-weight mode shift displayed in the Statement.

## Proof

1.1 The polynomial formulas give $[a_m,a_n]=m\delta_{m,-n}I$ on $F(E,A)$: the zero mode commutes with every mode because it acts on $E$ alone. Every positive mode of index exceeding the degree of a polynomial kills it. In a fixed coefficient of a normal product applied to a degree-$d$ vector, all nonnegative modes act first. Their positive indices have bounded total sum, at most $d$; there are finitely many such choices, including zero indices. The total exponent then bounds the sum of the remaining negative indices, so there are finitely many remaining choices too. Every coefficient is therefore a genuine endomorphism. Counting degrees in a term of $b_r^F(z)$ gives degree change $-n$ at exponent $-n-r$. For a weight-$w$ monomial, $w=\sum r_i$, so its coefficient of $z^{-k-1}$ has degree change $w-k-1$. This proves the displayed shift and lower truncation; $Y_F(1,z)=I$ is the vacuum action. [given, F1, F2, algebra]

1.2 The delta identity [F3] implies, for each scalar Laurent monomial $z^r w^s(z-w)^{-K}$ with $K\ge0$, the corresponding identity $D_{12}\iota_{z,w}G-D_{21}\iota_{w,z}G=D_{20}\iota_{w,z_0}G(w+z_0,w)$. Indeed multiplying either of the first two delta sums by its expansion of $(z-w)^{-K}$ shifts the delta summation index and gives $z_0^{-K}$ times that delta sum. Also $D_{20}z=D_{20}(w+z_0)$, directly from its delta sum; integer powers give substitution of $z^r$, using the binomial inverse of $w+z_0$ for negative $r$. Multiplying [F3] by $z^r w^s z_0^{-K}$ therefore gives exactly the asserted identity, with the prescribed expansions. [F2, F3, algebra]

2.1 Split $a^F=a^-+a^+$ into $n<0$ and $n\ge0$. The only mixed commutator is $[a^+(z),a^-(w)]=\sum_{n\ge1}n z^{-n-1}w^{n-1}=\iota_{z,w}(z-w)^{-2}I$; same-sign parts commute. Differentiating gives the scalar contraction $K_{r,s}(z-w)=(-1)^{r-1}(r+s-1)!\,(z-w)^{-r-s}/((r-1)!(s-1)!)$ for $b_r^F(z),b_s^F(w)$. For $u=\prod_{i=1}^p x_{r_i}$ and $v=\prod_{j=1}^q x_{s_j}$, let a partial matching $J$ pair distinct left factors with distinct right factors, and write $I(J),O(J)$ for its unmatched left and right indices. Define the common expression $G_F(z,w)=\sum_J(\prod_{(i,j)\in J}K_{r_i,s_j}(z-w)){:}\prod_{i\in I(J)}b_{r_i}^F(z)\prod_{j\in O(J)}b_{s_j}^F(w){:}$. This is a finite sum over matchings. Reorder the annihilators of the left product across the creators of the right product. At each crossing use $XY=YX+[X,Y]$; every commutator is the displayed scalar and commutes with all remaining factors. Each choice of disjoint crossings contributes exactly one partial matching, including the empty matching. This proves $Y_F(u,z)Y_F(v,w)=\iota_{z,w}G_F(z,w)$. Reversing the ordered products gives $Y_F(v,w)Y_F(u,z)=\iota_{w,z}G_F(z,w)$: differentiation of $(w-z)^{-2}$ gives the same rational $K_{r_i,s_j}(z-w)$ after swapping variables, and the unmatched normal product is unchanged. [F1, F2, step 1.1, algebra]

3.1 The same calculation on the vacuum space computes every state coefficient $u_{(n)}v$. Apply its Wick expression to $1$ and set $w=0$. This is legitimate because $Y(v,w)1$ has only nonnegative powers of $w$. All nonnegative oscillator modes in the normal product kill $1$, and the negative part of $b_r(z)$ is $\sum_{k\ge0}\binom{r+k-1}{k}x_{r+k}z^k$. Consequently $Y(u,z_0)v$ is the state-valued Laurent series $\sum_J(\prod_{(i,j)\in J}K_{r_i,s_j}(z_0))(\prod_{i\in I(J)}\sum_{k\ge0}\binom{r_i+k-1}{k}x_{r_i+k}z_0^k)(\prod_{j\in O(J)}x_{s_j})$. Every coefficient is a finite sum, since the contraction pole order is bounded and the required sum of the $k$'s is fixed. Apply $Y_F(-,w)$ coefficientwise. The formal Taylor identity $b_r^F(w+z_0)=\sum_{k\ge0}\binom{r+k-1}{k}z_0^k b_{r+k}^F(w)$ follows by differentiating the binomial expansion of each power of $w$. The normal parts obey that same Taylor identity. Hence the resulting iterate is precisely $Y_F(Y(u,z_0)v,w)=\iota_{w,z_0}G_F(w+z_0,w)$. This proves the complete iterate formula, including negative products, rather than only the singular OPE. [F1, F2, step 2.1, algebra]

4.1 Apply step 1.2 termwise to the common expression in step 2.1. To justify every infinite-series operation, fix an input polynomial degree and project the output to degrees at most $D$. Each unmatched normal product then has only finitely many modes in each variable: the positive indices are bounded by the input degree, and the creation indices are bounded by the output degree plus the input degree. It is therefore a Laurent polynomial after this projection, multiplied by the finite-order contraction poles. Step 1.2 applies without an infinite rearrangement. Since $D$ is arbitrary and every vector is a finite sum of homogeneous polynomials, the identity holds coefficientwise on all of $F(E,A)$. Substitute the two ordered products from step 2.1 and the iterate from step 3.1. The resulting equality is exactly the full module Jacobi identity in [F4], for all monomial states and thus all states by linearity. Along with step 1.1 this proves the module assertion. All calculations are algebraic and choice-free. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 1.2, algebra] ∎
