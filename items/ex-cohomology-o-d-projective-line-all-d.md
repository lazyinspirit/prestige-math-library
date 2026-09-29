---
id: ex-cohomology-o-d-projective-line-all-d
kind: example
title: "All twists on the projective line"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-dimension
  - def-euler-characteristic-coherent-sheaf
  - def-field
  - def-finite-type-finite-presentation-module-sheaf
  - def-graded-ring-and-graded-module
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-proper-morphism
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-twisting-sheaf-proj
  - lem-field-is-noetherian
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-projective-space-proper-over-base
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Example

Assume the Axiom of Choice, inherited from the cohomology and finiteness
suppliers cited below ([[def-axiom-of-choice]]). Let $k$ be a field
([[def-field]]) and let $d\in\mathbb Z$. Consider the projective line
$X=\mathbb P^1_k$ ([[def-relative-projective-space-standard-charts]]) with its
twisting sheaves $\mathcal O_X(d)$ ([[def-twisting-sheaf-proj]]), and write
$$h^q=\dim_kH^q\bigl(\mathbb P^1_k,\mathcal O_X(d)\bigr)$$
for the dimensions of its sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]]). Then
$$h^0=\max(d+1,0),\qquad h^1=\max(-d-1,0),\qquad \chi\bigl(\mathbb P^1_k,\mathcal O_X(d)\bigr)=d+1,$$
where $\chi$ is the Euler characteristic
([[def-euler-characteristic-coherent-sheaf]]); all higher cohomology groups
vanish. The field $k$ is arbitrary, the twist $d=0$ is included with
$\mathcal O_X(0)=\mathcal O_X$ and $\chi=1$, and the boundary value $d=-1$ is
included with $h^0=h^1=0$ and $\chi=0$.

## Facts & Assumptions
**Given:** A field $k$, an integer $d$, the projective line $X=\mathbb P^1_k$ with its twisting sheaves $\mathcal O_X(d)$; the Axiom of Choice is inherited from the cited suppliers.

[F1] Cohomology of the twists of projective space: for a commutative ring $A$ with $1$, an integer $n\ge0$, the scheme $\mathbb P^n_A\cong\operatorname{Proj}A[x_0,\dots,x_n]$ and every $d\in\mathbb Z$, one has $H^q(\mathbb P^n_A,\mathcal O(d))=0$ unless $q=0$ or $q=n$; for $n>0$, $H^0(\mathbb P^n_A,\mathcal O(d))\cong A[x_0,\dots,x_n]_d$ when $d\ge0$ and $H^0=0$ when $d<0$, while $H^n(\mathbb P^n_A,\mathcal O(d))$ is the free $A$-module on the Laurent monomials $x_0^{e_0}\cdots x_n^{e_n}$ with $e_i<0$ for all $i$ and $\sum_ie_i=d$, so, for $n>0$, it is nonzero precisely when $A\ne0$ and $d\le-n-1$. ([[thm-cohomology-projective-space-twisting-sheaves]], [[def-polynomial-ring-on-a-family-of-indeterminates]], [[def-graded-ring-and-graded-module]], [[def-relative-projective-space-standard-charts]], [[def-twisting-sheaf-proj]])

[F2] Finiteness and Euler characteristic: for a field $k$, a scheme proper over $k$ and a coherent $\mathcal O_X$-module $\mathcal F$, each $H^q(X,\mathcal F)$ is a finite-dimensional $k$-vector space, only finitely many are nonzero, and $\chi(X,\mathcal F)=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F)$ is a well-defined integer. ([[def-euler-characteristic-coherent-sheaf]], [[cor-projective-cohomology-finite-dimensional-field]], [[def-dimension]])

[F3] Properness: projective space $\mathbb P^n_A$ is proper over $\operatorname{Spec}A$ for every commutative ring $A$ and every $n\ge0$. ([[thm-projective-space-proper-over-base]], [[def-proper-morphism]])

[F4] Local Noetherianity and coherence: a field is a Noetherian ring, the polynomial ring $k[t]$ is Noetherian, the standard charts of $\mathbb P^1_k$ are spectra of polynomial rings in one variable, so $\mathbb P^1_k$ is a locally Noetherian scheme; on a locally Noetherian scheme a quasi-coherent module is coherent if and only if it is of finite type. ([[lem-field-is-noetherian]], [[cor-finite-variable-polynomial-ring-noetherian]], [[def-relative-projective-space-standard-charts]], [[def-locally-noetherian-and-noetherian-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]])

[F5] The twisting sheaves of $\mathbb P^1_k$ are invertible. Indeed, put $S=k[x_0,x_1]$ with its total-degree grading. On each of the two standard charts $D_+(x_i)$, multiplication by $x_i^d$ identifies $S_{(x_i)}$ with $S(d)_{(x_i)}$: in $S[x_i^{-1}]$ the element $x_i^d$ is a unit for every integer $d$, and its inverse sends each degree-$d$ element to degree zero. These maps commute with localisation, so the chart description of the twisting sheaf gives $\mathcal O_X(d)|_{D_+(x_i)}\cong\mathcal O_{D_+(x_i)}$. The two charts cover $X$, proving local freeness of rank one, hence invertibility, quasi-coherence and finite type. Thus each $\mathcal O_X(d)$ is coherent by [F4]. ([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]], [[def-twisting-sheaf-proj]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-coherent-module-scheme]])

## Verification

**Proof technique:** direct: specialise the projective-space cohomology theorem to $n=1$ and the field $k$, decide the two surviving degrees by explicit monomial conditions in the three ranges $d\ge0$, $d=-1$ and $d\le-2$, count the monomial basis of the top-degree group, and read off the alternating sum.

1.1 Setup and well-definedness of $\chi$. By [F4] the projective line $X=\mathbb P^1_k$ is a locally Noetherian scheme, and by [F5] the twist $\mathcal O_X(d)$ is a coherent $\mathcal O_X$-module on it; by [F3] the scheme $X$ is proper over $k$; hence [F2] applies, so each $H^q(X,\mathcal O_X(d))$ is a finite-dimensional $k$-vector space, only finitely many are nonzero, and $\chi(X,\mathcal O_X(d))=h^0-h^1+\sum_{q\ge2}(-1)^qh^q$ is a well-defined integer. By [F1] with $n=1$ one has $H^q(X,\mathcal O_X(d))=0$ for every $q\notin\{0,1\}$, so $\chi=h^0-h^1$. [F1, F2, F3, F4, F5]

1.2 The case $d\ge0$. By [F1] with $n=1$ the group $H^0$ is $k[x_0,x_1]_d$, for which the monomials $x_0^{d-j}x_1^j$ with $0\le j\le d$ form a $k$-basis, so $h^0=d+1=\max(d+1,0)$. The degree-one group is free on the Laurent monomials with both exponents negative and sum $d$, a set that is empty because $d\ge0$, so $h^1=0=\max(-d-1,0)$ since $-d-1\le-1$. Hence $\chi=d+1$. [F1, algebra]

1.3 The case $d=-1$. By [F1] the group $H^0$ vanishes because $d<0$; the group $H^1$ is free on the Laurent monomials with $e_0,e_1<0$ and $e_0+e_1=-1$, which is impossible for integers, so $h^1=0$. Thus $h^0=h^1=0$, and $\max(d+1,0)=\max(0,0)=0$, $\max(-d-1,0)=\max(0,0)=0$, and $\chi=0-0=0=d+1$. [F1, algebra]

1.4 The case $d\le-2$. By [F1] the group $H^0$ vanishes because $d<0$, so $h^0=0=\max(d+1,0)$ since $d+1\le-1$. For the top-degree group, write $e_0=-a$ and $e_1=-b$ with integers $a,b\ge1$; the condition $e_0+e_1=d$ becomes $a+b=-d$, whose solutions are $a=1,\dots,-d-1$ with $b=-d-a$. These are exactly $-d-1=\max(-d-1,0)$ monomials, and they form a $k$-basis by [F1], so $h^1=-d-1$. Hence $\chi=h^0-h^1=0-(-d-1)=d+1$. [F1, algebra]

2.1 Conclusion, boundaries and choice. The three cases $d\ge0$, $d=-1$, $d\le-2$ exhaust $\mathbb Z$ and give $h^0=\max(d+1,0)$, $h^1=\max(-d-1,0)$ and $\chi=d+1$ in every case, with all higher groups zero by 1.1. The field $k$ is arbitrary, of any characteristic and in particular $k=\mathbb F_2$; the twist $d=0$ gives the structure sheaf with $h^0=1$, $h^1=0$, $\chi=1$, and $d=-1$ is the endpoint where both groups vanish, handled separately in 1.3; the case $d=1$ gives the line bundle whose sections are the linear forms, $h^0=2$. The projective line over a field is nonempty, so no empty scheme occurs, and the alternating sums are finite because $H^q=0$ for $q\ge2$; the empty-sum convention is not needed. The Axiom of Choice [F1, F2] is inherited through the projective-space cohomology theorem and the finiteness corollary, and the only basis used is the explicit monomial basis of $k[x_0,x_1]_d$ together with the explicit monomial enumeration of 1.4, determined by $d$ with no further selection. [F1, F2, 1.2, 1.3, 1.4] ∎
