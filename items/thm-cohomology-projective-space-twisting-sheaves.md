---
id: thm-cohomology-projective-space-twisting-sheaves
kind: theorem
title: "Cohomology of O(d) on projective space"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-acyclic-cover-for-sheaf
  - def-associated-sheaf-graded-module-proj
  - def-axiom-of-choice
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-commutative-ring
  - def-direct-sum-of-a-family-of-modules
  - def-graded-ring-and-graded-module
  - def-kernel-and-image-of-a-linear-map
  - def-monomials-on-an-index-set
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-proj-graded-ring-points
  - def-quasi-coherent-module-scheme
  - def-relative-projective-space-standard-charts
  - def-standard-open-proj
  - def-twisting-sheaf-proj
  - lem-projective-space-cech-monomial-complex
  - lem-standard-opens-proj-affine
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-leray-acyclic-cover-theorem
  - thm-projective-space-as-proj
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.8.2 (Tag 01XV) and Section 30.8"
      url: "https://stacks.math.columbia.edu/tag/01XV"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1-19.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative
ring with $1$ ([[def-commutative-ring]]), let $n\ge0$, let $d\in\mathbb Z$ and
let $X=\mathbb P^n_A\cong\operatorname{Proj}A[x_0,\dots,x_n]$ be relative
projective space ([[def-relative-projective-space-standard-charts]],
[[def-polynomial-ring-on-a-family-of-indeterminates]]), with twisting sheaf
$\mathcal O_X(d)$ ([[def-twisting-sheaf-proj]]) and cohomology
$H^q(X,\mathcal O_X(d))$. Then
$$H^q(X,\mathcal O_X(d))=0\qquad\text{unless }q=0\text{ or }q=n.$$
If $n>0$, then $H^0(X,\mathcal O_X(d))\cong A[x_0,\dots,x_n]_d$ when $d\ge0$
and $H^0(X,\mathcal O_X(d))=0$ when $d<0$, where
$A[x_0,\dots,x_n]_d$ is the degree-$d$ graded piece
([[def-graded-ring-and-graded-module]]); and $H^n(X,\mathcal O_X(d))$ is the
free $A$-module on the Laurent monomials $x_0^{e_0}\cdots x_n^{e_n}$ with
$e_i<0$ for every $i$ and $\sum_ie_i=d$, so that it is nonzero precisely when
$d\le-n-1$ and $A\ne0$. For $n=0$ one has $\mathbb P^0_A=\operatorname{Spec}A$
and $H^0(X,\mathcal O_X(d))\cong A$ for every $d\in\mathbb Z$, with all higher
groups zero. The zero ring $A=0$ is allowed: then $X=\varnothing$ and all
groups are zero, in agreement with both displayed descriptions.

## Facts & Assumptions
**Given:** The Axiom of Choice, a commutative ring $A$ with $1$, integers $n\ge0$ and $d$, and the twisting sheaf $\mathcal O(d)$ on $\mathbb P^n_A$.

[F1] For a commutative nonnegatively graded ring $S$, the scheme
$\operatorname{Proj}S$ has points the homogeneous primes not containing $S_+$;
for homogeneous $f\in S_+$ of positive degree, $D_+(f)=\{\mathfrak p:f\notin\mathfrak p\}$,
one has $D_+(f)\cap D_+(g)=D_+(fg)$, and the family of all such $D_+(f)$ is a
basis of the topology.
([[def-proj-graded-ring-points]], [[def-standard-open-proj]],
[[def-graded-ring-and-graded-module]])

[F2] There is a canonical isomorphism of $\operatorname{Spec}A$-schemes
$\operatorname{Proj}A[x_0,\dots,x_n]\cong\mathbb P^n_A$ for the total-degree
grading, and for $n=0$ both sides are $\operatorname{Spec}A$; for every
homogeneous $f\in S_+$ of positive degree the chart map
$D_+(f)\to\operatorname{Spec}S_{(f)}$ is an isomorphism, and $D_+(f)=\varnothing$
when $f$ is nilpotent.
([[thm-projective-space-as-proj]], [[def-relative-projective-space-standard-charts]],
[[lem-standard-opens-proj-affine]])

[F3] The twisting sheaf is $\mathcal O_X(m)=\widetilde{S(m)}$ for the graded
$S$-module $S(m)$ with $S(m)_j=S_{m+j}$; on a standard open $D_+(f)$ its
sections are the degree-zero part $S(m)_{(f)}$ of the homogeneous localisation,
so its restriction to each standard affine chart is an associated sheaf of a
module, and $\mathcal O_X(m)$ is quasi-coherent; quasi-coherence is local on the
scheme and passes to restrictions to open subschemes.
([[def-twisting-sheaf-proj]], [[def-associated-sheaf-graded-module-proj]],
[[def-quasi-coherent-module-scheme]])

[F4] Affine vanishing: for an affine scheme $Y=\operatorname{Spec}R$ and a
quasi-coherent $\mathcal O_Y$-module $\mathcal G$ one has $H^q(Y,\mathcal G)=0$
for every $q>0$. The statement is the one used here; its proof carries the
in-run obligation to the batch-7 supplier `thm-affine-quasi-coherent-equivalence`
recorded in the report.
([[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

[F5] Leray comparison: if $\mathcal U$ is an open cover of a topological space
$X$ indexed by a linearly ordered set and every nonempty finite intersection
$W$ of members satisfies $H^q(W,\mathcal F|_W)=0$ for all $q>0$, then the
canonical Čech-to-sheaf comparison
$\check H^p(\mathcal U,\mathcal F)\to H^p(X,\mathcal F)$ is an isomorphism for
every $p\ge0$, and in degree $0$ it is the identity on global sections; the
Čech cohomology is the cohomology of the ordered cochain complex of alternating
cochains.
([[thm-leray-acyclic-cover-theorem]],
[[thm-cech-to-sheaf-cohomology-comparison]],
[[def-cech-cohomology-open-cover]], [[def-acyclic-cover-for-sheaf]])

[F6] Monomial complex: for the ordered standard cover $U_i=D_+(x_i)$ of
$\operatorname{Proj}A[x_0,\dots,x_n]$ the ordered Čech complex of
$\mathcal O_X(d)$ decomposes as
$$C^\bullet(\mathcal U,\mathcal O_X(d))=\bigoplus_{e\in\mathbb Z^{n+1},\ \sum e_i=d}K^\bullet(e),$$
with one basis element $x^e_\sigma$ per subset $\sigma$ containing
$N(e)=\{i:e_i<0\}$ and $|\sigma|=p+1$ in degree $p$, and: $H^0(K^\bullet(e))=A$
and $H^q(K^\bullet(e))=0$ for $q\ge1$ when $N(e)=\varnothing$;
$H^n(K^\bullet(e))=A$ and $H^q(K^\bullet(e))=0$ for $q\ne n$ when
$N(e)=\{0,\dots,n\}$; and $K^\bullet(e)$ is contractible when $N(e)$ is
nonempty and proper.
([[lem-projective-space-cech-monomial-complex]],
[[def-cech-cochain-complex-open-cover]])

[F7] Direct sums and linear algebra of modules: the direct sum of a family of
modules is the submodule of the product of families with finite support, with
coordinate inclusions; the kernel and the image of a linear map are submodules,
and formation of kernels, images and quotients is compatible with direct sums
of families of linear maps, since a family lies in the kernel of the direct sum
of maps exactly when each component lies in the kernel of its component and the
image of the direct sum is the direct sum of the images.
([[def-direct-sum-of-a-family-of-modules]],
[[def-kernel-and-image-of-a-linear-map]])

[F8] The polynomial ring $R[x_i:i\in I]$ consists of the finitely supported
coefficient families on monomials $x^a$ in the indeterminates; with the
total-degree grading a monomial $x_0^{e_0}\cdots x_n^{e_n}$ lies in degree
$\sum_ie_i$, and $R[x_0,\dots,x_n]_d$ is the free $R$-module on the monomials
of total degree $d$ when $d\ge0$ and is zero when $d<0$.
([[def-polynomial-ring-on-a-family-of-indeterminates]],
[[def-monomials-on-an-index-set]], [[def-graded-ring-and-graded-module]])

[F9] The Axiom of Choice states that every family of nonempty sets has a choice
function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: identify projective space with $\operatorname{Proj}$ of the polynomial ring, verify that the standard cover is acyclic for $\mathcal O(d)$ and apply the Leray comparison, then read off the cohomology of the monomial decomposition of the Čech complex.

1.1 Setup. Write $S=A[x_0,\dots,x_n]=\bigoplus_{j\ge0}S_j$ with the total-degree grading, $X=\mathbb P^n_A\cong\operatorname{Proj}S$ and, for $i=0,\dots,n$, $U_i=D_+(x_i)$; the index set $\{0<\dots<n\}$ is linearly ordered, $D_+(x_i)$ is open, and the $U_i$ cover $X$ because a homogeneous prime $\mathfrak p\not\supseteq S_+$ must miss some $x_i$, the $x_i$ generating $S_+$ by [F1] and [F8]. [F1, F2, F8]

1.2 The members and their finite intersections are affine. For a nonempty finite subset $\sigma\subseteq\{0,\dots,n\}$ put $g_\sigma=\prod_{i\in\sigma}x_i$, a homogeneous element of degree $|\sigma|\ge1$; iterating $D_+(f)\cap D_+(g)=D_+(fg)$ in [F1] gives $\bigcap_{i\in\sigma}U_i=D_+(g_\sigma)$, and [F2] identifies this with $\operatorname{Spec}S_{(g_\sigma)}$, an affine scheme. [F1, F2]

1.3 The sheaves are quasi-coherent. By [F3] the twisting sheaf $\mathcal O_X(d)$ is quasi-coherent, and [F3] also gives that its restrictions to the open subschemes $\bigcap_{i\in\sigma}U_i$ are quasi-coherent. [F3]

1.4 Acyclicity and comparison. By 1.2 and 1.3, every nonempty finite intersection $W$ of members of the cover is affine and $\mathcal O_X(d)|_W$ is quasi-coherent, so $H^q(W,\mathcal O_X(d)|_W)=0$ for all $q>0$ by [F4]. Thus the ordered cover is acyclic for $\mathcal O_X(d)$ and [F5] gives isomorphisms
$$\check H^p(\mathcal U,\mathcal O_X(d))\overset{\sim}{\longrightarrow}H^p(X,\mathcal O_X(d))$$
for every $p\ge0$. [F4, F5, step 1.2, step 1.3]

1.5 Cohomology of the total Čech complex. By [F6] the ordered Čech complex is the direct sum of the complexes $K^\bullet(e)$. Formation of kernels and cokernels of families of linear maps commutes with direct sums by [F7], so for every $p\ge0$,
$$\check H^p(\mathcal U,\mathcal O_X(d))\cong\bigoplus_{e\in\mathbb Z^{n+1},\sum e_i=d}H^p(K^\bullet(e)).$$
[F6, F7]

1.6 Degree-by-degree bookkeeping. By [F6] a summand $H^p(K^\bullet(e))$ can be nonzero only if $N(e)=\varnothing$ and $p=0$, or $N(e)=\{0,\dots,n\}$ and $p=n$; the remaining summands are contractible and contribute nothing in any degree. Hence, when $n\ge1$, the degrees $0$ and $n$ do not overlap and
$$\check H^0(\mathcal U,\mathcal O_X(d))=\bigoplus_{e\ge0,\ \sum e_i=d}A,\qquad \check H^n(\mathcal U,\mathcal O_X(d))=\bigoplus_{e<0,\ \sum e_i=d}A,$$
while $\check H^p(\mathcal U,\mathcal O_X(d))=0$ for $0<p<n$; here $e\ge0$ means $e_i\ge0$ for all $i$ and $e<0$ means $e_i<0$ for all $i$. [F6, step 1.5]

2.1 The degree-zero group. The exponent vectors $e\ge0$ with $\sum_ie_i=d$ are exactly the exponent vectors of the monomials of total degree $d$ in $x_0,\dots,x_n$, so by [F8] the first group of 1.6 is the free $A$-module on that set, namely $A[x_0,\dots,x_n]_d$ when $d\ge0$ and $0$ when $d<0$. [F8, step 1.6]

2.2 The top group. The exponent vectors $e<0$ with $\sum_ie_i=d$ are exactly the Laurent monomials of the statement. If $d\le-n-1$ then $e_0=d+n$, $e_1=\dots=e_n=-1$ is such a vector, and for any such vector the substitution $f_i=-e_i-1\ge0$ shows $\sum_if_i=-d-(n+1)$, so these vectors form a finite set; if $d\ge -n$ then $\sum_ie_i\le-(n+1)$ is impossible, so the set is empty. Hence the second group of 1.6 is the free $A$-module on the stated finite set, which is nonzero exactly when the set is nonempty and $A\ne0$, that is, exactly when $d\le-n-1$ and $A\ne0$. [F7, F8, step 1.6]

2.3 The case $n=0$. The cover has the single member $U_0=D_+(x_0)$ and $\mathbb P^0_A=\operatorname{Spec}A$ by [F2]. In the decomposition of 1.5 there is only the exponent vector $e=(d)$: if $d\ge0$ then $N(e)=\varnothing$ and [F6] gives $\check H^0=A$ with no higher term, while if $d<0$ then $N(e)=\{0\}=\{0,\dots,n\}$ and [F6] gives the same in degree $0$. Hence $\check H^0(\mathcal U,\mathcal O_X(d))=A$ and $\check H^p(\mathcal U,\mathcal O_X(d))=0$ for $p>0$, so 1.4 gives $H^0(X,\mathcal O_X(d))\cong A$ and vanishing of all higher cohomology. [F2, F6, step 1.4, step 1.5]

3.1 Conclusion for $n\ge1$. Combining 1.4 with 1.6, 2.1 and 2.2 gives $H^0(X,\mathcal O_X(d))\cong A[x_0,\dots,x_n]_d$ for $d\ge0$, $H^0(X,\mathcal O_X(d))=0$ for $d<0$, $H^n(X,\mathcal O_X(d))$ free on the all-negative monomials of total degree $d$ (nonzero exactly for $d\le-n-1$ when $A\ne0$), and $H^q(X,\mathcal O_X(d))=0$ for $0<q<n$; with 2.3 the case $n=0$ gives $H^0\cong A$ and no other nonzero group. [step 1.4, step 1.6, step 2.1, step 2.2, step 2.3]

4.1 Boundaries and choice accounting. If $A=0$ then $S=0$, $\operatorname{Proj}S=\varnothing=\mathbb P^n_A$, all Čech terms vanish and 1.4-3.1 give zero groups, matching the descriptions $S_d=0$ and the free module on any set over the zero ring; the empty-scheme convention of [F1] and [F2] applies. The case $d=0$ is included: $H^0\cong A$ (for $n\ge1$, the constant monomials) and the top group vanishes since $0\ge-n$; the endpoint $d=-n-1$ gives the top group $A\cdot(x_0\cdots x_n)^{-1}$, and $d=-1,\dots,-n$ give $H^n=0$ while all intermediate groups vanish. The statement is not an equivalence and asserts no converse, so no iff case arises. The Axiom of Choice [F9] is consumed through the affine vanishing [F4] and the Leray comparison [F5]; the ordering of the cover, the monomial bases $x^e_\sigma$ and the substitution $f_i=-e_i-1$ are canonical, and no further selection is made. [F1, F2, F4, F5, F6, F8, F9, step 3.1] ∎
