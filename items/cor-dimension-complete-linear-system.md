---
id: cor-dimension-complete-linear-system
kind: corollary
title: "The dimension of a complete linear system"
status: draft
origin: pipeline
deps:
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-complete-linear-system
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-dimension-noetherian-topological-space
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - def-relative-projective-space-standard-charts
  - def-symmetric-algebra-of-a-vector-space
  - def-vector-space
  - lem-chain-dimension-open-cover
  - lem-effective-divisors-sections-mod-scalars
  - lem-field-is-noetherian
  - lem-riemann-roch-space-finite-dimensional
  - thm-h0-structure-sheaf-proper-curve
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-projective-space-as-proj
  - thm-riemann-roch-as-l-minus-index
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from proper-cohomology,
projective-space and Riemann-Roch suppliers ([[def-axiom-of-choice]]). Let $k$
be a field, let $C$
be a smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]) of genus $g=g(C)$
([[def-genus-euler-characteristic-curve]]), let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]) and let $|D|$ be its complete linear
system ([[def-complete-linear-system]]). For a finite-dimensional $k$-vector
space $W$, write
$$\mathbf P_k(W):=\operatorname{Proj}(\operatorname{Sym}_k(W^\vee))$$
for the projective scheme parameterizing one-dimensional subspaces of $W$.
When $|D|$ is nonempty, put
$$\mathscr P_D:=\mathbf P_k(L(D)).$$
The section-divisor correspondence identifies the set $|D|$ with the set of
$k$-rational points $\mathscr P_D(k)$.

Then:

1. $|D|$ is nonempty if and only if $l(D)\ge1$
   ([[def-little-l-divisor]]); equivalently $|D|$ is empty exactly when
   $L(D)=0$;
2. if $|D|$ is nonempty and $l(D)=r\ge1$, a choice of basis of $L(D)$
   identifies $\mathscr P_D$ with the projective scheme $\mathbf P_k^{r-1}$,
   and we define $\dim_k|D|:=\dim\mathscr P_D$. Its dimension is
   $$\dim_k|D|=l(D)-1=\deg_k(D)-g+i(D),$$
   with $i(D)$ the index of speciality
   ([[def-index-speciality-divisor]]);
3. if $D$ is nonspecial ([[def-nonspecial-divisor]]) then $|D|$ is nonempty if
   and only if $\deg_k(D)\ge g$, and in that case
   $\dim_k|D|=\deg_k(D)-g$;
4. for the zero divisor, $|0|=\{0\}$ is a single $k$-rational point,
   $\mathscr P_0\cong\mathbf P^0_k$, and
   $\dim_k|0|=0=l(0)-1$. The nonspecial value $\deg_k(0)-g=-g$ is attained as
   $\dim_k|0|$ exactly when $g=0$.

Thus $\dim_k|D|$ means the Krull dimension of the projectivization scheme,
not the dimension of its set of $k$-rational points. No algebraic-closure
hypothesis on $k$ is used.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g=g(C)$; a divisor $D$ on $C$; the complete linear system $|D|$; and the index of speciality $i(D)=h^1(C,\mathcal O_C(D))$.

[F1] The assignment $f\mapsto\operatorname{div}(f)+D$ induces a bijection $(L(D)\setminus\{0\})/k^{\times}\to|D|$. Hence $|D|$ is identified with the set of $k$-lines in $L(D)$ and is empty exactly when $L(D)=0$ ([[lem-effective-divisors-sections-mod-scalars]], [[def-complete-linear-system]]).

[F2] Under the stated Axiom of Choice, the current [[lem-riemann-roch-space-finite-dimensional]] proves that $L(D)$ and all $H^q(C,\mathcal O_C(D))$ are finite-dimensional. Thus $l(D)$ and $i(D)$ are nonnegative integers ([[def-little-l-divisor]], [[def-index-speciality-divisor]], [[def-dimension]]). For $D=0$, $H^0(C,\mathcal O_C)=k$, so $l(0)=1$ ([[thm-h0-structure-sheaf-proper-curve]]).

[F3] The cohomological Riemann-Roch identity is $l(D)-i(D)=\deg_k(D)+1-g$, and a divisor is nonspecial exactly when $i(D)=0$ ([[thm-riemann-roch-as-l-minus-index]], [[def-nonspecial-divisor]]).

[F4] For a nonzero finite-dimensional $k$-vector space $W$ of dimension $r$, $\mathbf P_k(W):=\operatorname{Proj}(\operatorname{Sym}_k(W^\vee))$ is the projective scheme parameterizing lines in $W$. A basis of $W$ identifies it with $\mathbf P_k^{r-1}$; its $k$-rational points are exactly the one-dimensional $k$-subspaces of $W$: if $e_0,\ldots,e_{r-1}$ is a basis, the points $[a_0:\cdots:a_{r-1}]$ with $a_i\in k$ and not all $a_i=0$, modulo common nonzero scalar, correspond to the line spanned by $\sum_i a_i e_i$. The case $r=1$ is $\mathbf P^0_k$ ([[def-symmetric-algebra-of-a-vector-space]], [[def-relative-projective-space-standard-charts]], [[thm-projective-space-as-proj]]).

[F5] The projective scheme $\mathbf P_k^{r-1}$ has $r$ standard open charts, each isomorphic to $\operatorname{Spec}k[y_1,\ldots,y_{r-1}]$ ([[def-relative-projective-space-standard-charts]], [[thm-projective-space-as-proj]]). The coordinate ring has Krull dimension $r-1$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]). Since a field is Noetherian, these polynomial rings are Noetherian ([[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]), and their spectra are Noetherian spaces ([[thm-noetherian-ring-has-noetherian-spectrum]]). Any descending chain of closed subsets of $\mathbf P_k^{r-1}$ stabilizes after restriction to each standard chart. Since there are finitely many charts, the maximum of their stabilization indices works on the whole projective space, so it is Noetherian. Its dimension is the supremum of the chart dimensions by [[lem-chain-dimension-open-cover]] and [[def-dimension-noetherian-topological-space]]. Consequently $\dim\mathbf P_k^{r-1}=r-1$ for every field $k$.

[F6] The Axiom of Choice is inherited from the finiteness, projective-space and Riemann-Roch suppliers. The only choice made below is a basis of the finite-dimensional space $L(D)$ ([[def-axiom-of-choice]]).

[F7] The $k$-degree is $\deg_kD=\sum_xn_x[\kappa(x):k]$, a sum over the finite support of $D=\sum_xn_x[x]$; the zero divisor has empty support and $\deg_k(0)=0$ ([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]]).

## Proof

**Proof technique:** read the complete linear system off the bijection with the $k$-lines in $L(D)$, use its projectivization scheme for dimension, and substitute the Riemann-Roch identity.

1.1 The empty case. By [F1], $|D|$ is in bijection with the $k$-lines in $L(D)$. It is empty exactly when $L(D)=0$, which by [F2] is equivalent to $l(D)=0$. Therefore $|D|$ is nonempty exactly when $l(D)\ge1$. [F1, F2]

1.2 The projective parameter scheme. Suppose $|D|$ is nonempty, so $L(D)\ne0$ by [F1]. By [F2], $L(D)$ is finite-dimensional; put $r=l(D)=\dim_kL(D)\ge1$. Choose a basis. By [F4] it identifies $\mathscr P_D=\operatorname{Proj}(\operatorname{Sym}_k(L(D)^\vee))$ with $\mathbf P_k^{r-1}$, whose $k$-rational points are the $k$-lines in $L(D)$. By [F1], these points are exactly $|D|$. The standard-chart calculation [F5] then gives $$\dim_k|D|:=\dim\mathscr P_D=r-1=l(D)-1.$$ [F1, F2, F4, F5]

1.3 The zero divisor. By [F2], $L(0)=H^0(C,\mathcal O_C)=k$ and $l(0)=1$. Its unique $k$-line maps under [F1] to $\operatorname{div}(1)+0=0$, so $|0|=\{0\}$ and $\mathscr P_0\cong\mathbf P^0_k$ by [F4]. Therefore $\dim_k|0|=0=l(0)-1$. By [F7], $\deg_k(0)=0$, and by [F3], $i(0)=g$. The nonspecial value $\deg_k(0)-g=-g$ equals the actual dimension zero exactly when $g=0$. [F1, F2, F3, F4, F5, F7]

2.1 Riemann-Roch substitution. By [F3], $l(D)=\deg_k(D)+1-g+i(D)$. Combining this with step 1.2 gives $$\dim_k|D|=l(D)-1=\deg_k(D)-g+i(D).$$ [F3, step 1.2]

3.1 The nonspecial case. If $D$ is nonspecial then $i(D)=0$ by [F3], so $l(D)=\deg_k(D)+1-g$. By step 1.1, $|D|$ is nonempty exactly when this integer is at least one, equivalently when $\deg_k(D)\ge g$. When this holds, step 2.1 gives $\dim_k|D|=\deg_k(D)-g$. [F3, step 1.1, step 2.1]

4.1 Conclusion and choice accounting. Steps 1.1 and 1.2 give $|D|\ne\varnothing\iff l(D)\ge1$ and define its dimension as the Krull dimension of the projectivization scheme. Steps 2.1 and 3.1 give the general and nonspecial dimension formulas; step 1.3 verifies all four zero-divisor claims. The projective-space dimension computation uses standard relative Proj charts and holds over every field, including fields that are not algebraically closed. Choice is used only for the cohomology and Riemann-Roch suppliers and the basis of $L(D)$ in step 1.2. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 2.1, step 3.1, step 1.3]

5.1 Current supplier boundary. The section-to-divisor set bijection is given by the current [[lem-effective-divisors-sections-mod-scalars]] and [[def-complete-linear-system]]. The Cartier, divisor-space, finite-dimension and Riemann-Roch sources cited above are present in the working tree; their draft or published status remains as recorded in their frontmatter. The projective parameter scheme is defined in this item and its dimension is proved from the published relative-Proj charts and affine polynomial-ring dimension theorem. The construction and dimension calculation apply over arbitrary fields $k$. [F1, F2, F3, F4, F5, F6, F7] ∎
