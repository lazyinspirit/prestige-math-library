---
id: def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
kind: definition
title: Spherical Hecke algebra and normalized Satake transform for GL(n)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- def-discrete-valuation-ring
- def-uniformising-parameter
- def-left-haar-integral-and-left-haar-measure
- def-axiom-of-choice
- cor-existence-of-left-and-right-haar-measures
- thm-uniqueness-of-left-haar-measure-up-to-scale
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §§8.2, 11.1–11.2
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
---
## Definition

Assume the Axiom of Choice. Let $F$ be a field with a surjective discrete valuation $v:F^\times\to\mathbb Z$. Put $\mathcal O=\{0\}\cup\{x\in F^\times:v(x)\ge0\}$ and assume that $\mathcal O$ is compact and open in the valuation topology. Choose a uniformizer $\varpi\in F$ with $v(\varpi)=1$, and assume that the residue field $k=\mathcal O/\varpi\mathcal O$ is finite of cardinality $q$. For $x\ne0$, put $|x|=q^{-v(x)}$. The valuation topology is Hausdorff because $\bigcap_{m\ge0}\varpi^m\mathcal O=\{0\}$; since $\mathcal O$ is a compact neighbourhood of zero, $F$ is locally compact.

Let $n\ge1$, $G=\mathrm{GL}_n(F)$, $K=\mathrm{GL}_n(\mathcal O)$, $T$ be the diagonal subgroup, $U$ the upper unitriangular subgroup, and $B=TU$ the upper triangular subgroup. The groups $G,T,U$ are locally compact Hausdorff groups. The set $M_n(\mathcal O)$ is compact, $\mathcal O^\times=\mathcal O\setminus\varpi\mathcal O$ is clopen in $\mathcal O$, and $K=\{A\in M_n(\mathcal O):\det A\in\mathcal O^\times\}$ is a closed subset of $M_n(\mathcal O)$ and open in $G$; hence $K$ is compact open. Also $T\cap K=(\mathcal O^\times)^n$ and $U\cap K$ are compact open in $T$ and $U$. For $t=\operatorname{diag}(t_1,\ldots,t_n)$ put $\delta(t)=\prod_{i<j}|t_i/t_j|$ and set $\delta(tu)=\delta(t)$ for $u\in U$. Choose left Haar measures $dg,dt,du$ with $\operatorname{vol}(K)=\operatorname{vol}(T\cap K)=\operatorname{vol}(U\cap K)=1$. Their existence, uniqueness up to scale, and positive finite mass on compact open subgroups are part of the Haar prerequisites.

The spherical Hecke algebra $H=H(G,K)$ is the complex vector space of compactly supported locally constant functions $f:G\to\mathbb C$ satisfying $f(k_1gk_2)=f(g)$ for $k_1,k_2\in K$. Its product is
$$
(f_1*f_2)(g)=\int_G f_1(x)f_2(x^{-1}g)\,dx,
$$
and its identity is $e_K=1_K$, since $\operatorname{vol}(K)=1$. A smooth complex representation of $G$ is a homomorphism $\pi:G\to\mathrm{GL}(V)$ such that every vector has an open stabilizer. It is admissible if $\dim V^J<\infty$ for every compact open subgroup $J\subseteq G$, and spherical if $V^K\ne0$. The action of $H$ on $V^K$ is $\pi(f)v=\int_G f(g)\pi(g)v\,dg$; each such integral is a finite sum because $f$ is compactly supported and locally constant and $v$ has an open stabilizer.

Write $t_\lambda=\operatorname{diag}(\varpi^{\lambda_1},\ldots,\varpi^{\lambda_n})$ for $\lambda\in\mathbb Z^n$. The normalized Satake expression is the function on $T$ defined by
$$
\mathcal S_0f(t)=\delta(t)^{1/2}\int_U f(tu)\,du.
$$
For fixed $t$, this integral is well-defined: $U$ is closed in $G$, so $u\mapsto tu$ is a closed embedding and the preimage of $\operatorname{supp}(f)$ is compact; right $U\cap K$ invariance reduces the integral to a finite coset sum. No finite-support or $T\cap K$-invariance assertion is part of this definition. When those properties are proved, a finitely supported function on $T/(T\cap K)$ is identified with the Laurent polynomial $\sum_{\lambda\in\mathbb Z^n}a(t_\lambda)X_1^{\lambda_1}\cdots X_n^{\lambda_n}$; torus convolution then corresponds to Laurent multiplication.

An unramified character of $T$ is a homomorphism $\chi(t)=\prod_i\chi_i(t_i)$ with each group homomorphism $\chi_i:F^\times\to\mathbb C^\times$ trivial on $\mathcal O^\times$. It extends to $B$ trivially on $U$. The normalized principal-series function space $I(\chi)$ consists of locally constant functions $s:G\to\mathbb C$ satisfying $s(bg)=\delta(b)^{1/2}\chi(b)s(g)$ for $b\in B$, $g\in G$, with the right-translation action $(\pi(g)s)(x)=s(xg)$. These conditions define a $G$-representation; its smoothness is proved after Iwasawa decomposition is established.

## Definition references

[[def-discrete-valuation-ring]]

[[def-uniformising-parameter]]

[[def-left-haar-integral-and-left-haar-measure]]

[[cor-existence-of-left-and-right-haar-measures]]

[[thm-uniqueness-of-left-haar-measure-up-to-scale]]

[[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]

[[def-axiom-of-choice]]

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §§8.2, 11.1–11.2](https://masaooi.github.io/LLC.pdf)

[W. Casselman, *Introduction to the Theory of Admissible Representations of p-adic Reductive Groups*, §§2.1–2.2](https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf)

## Facts & Assumptions

[A1] The Axiom of Choice is assumed for the Haar-existence and uniqueness suppliers used to choose and normalize $dg$, $dt$, and $du$. [[def-axiom-of-choice]]

[F1] A discrete valuation ring and a uniformizer have the meanings stated in the cited definitions; here $\mathcal O$ is the valuation ring and $v(\varpi)=1$. [[def-discrete-valuation-ring]], [[def-uniformising-parameter]]

[F2] Haar measures exist on locally compact Hausdorff groups, are unique up to scale, and have positive finite mass on compact open subgroups; these facts justify all three normalizations. [[def-left-haar-integral-and-left-haar-measure]], [[cor-existence-of-left-and-right-haar-measures]], [[thm-uniqueness-of-left-haar-measure-up-to-scale]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]

## Remarks

No Weil group, local Langlands correspondence, global automorphic representation, or pre-existing Satake parameter is used to define these objects. No topology is imposed on representation vector spaces beyond the smoothness condition stated here.
