---
id: def-khovanov-seidel-complex-of-a-braid-word
kind: definition
title: "The complex of a braid word"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-khovanov-seidel-positive-and-negative-twist-complexes
  - lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m
  - def-signed-totalization-of-graded-a-m-bimodule-actions
  - def-khovanov-seidel-beta-and-gamma-bimodule-maps
  - lem-graded-balanced-tensor-and-shift-isomorphisms
  - thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules
  - thm-a-direct-summand-of-a-projective-is-projective
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Definition 2.6 and the following paragraph"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Definition 2.6 and the paragraph defining R_sigma, printed p. 14"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Fix $m\ge1$ and let $R_i,R_i^{-1}$ be the twist complexes of
[[def-khovanov-seidel-positive-and-negative-twist-complexes]], built from
$\beta_i,\gamma_i$ of [[def-khovanov-seidel-beta-and-gamma-bimodule-maps]] and
acting on $C_m=K^b(\operatorname{proj}^{gr}A_m)$. Fix a word
$$\sigma=\tau_1\tau_2\cdots\tau_k,\qquad \tau_\ell\in\{\sigma_i^{\pm1}:1\le i\le m\},$$
in the Artin generators and their inverses, and put
$$R_{\sigma_i}:=R_i,\qquad R_{\sigma_i^{-1}}:=R_i^{-1},\qquad R_{1}:=A_m,$$
the last being the diagonal bimodule $A_m$ concentrated in homological degree
$0$. The **complex of the word** $\sigma$ is the iterated signed totalization
$$R_\sigma:=R_{\tau_1}\otimes_{A_m}R_{\tau_2}\otimes_{A_m}\cdots\otimes_{A_m}R_{\tau_k}$$
of [[def-signed-totalization-of-graded-a-m-bimodule-actions]], and $R_\sigma$
also denotes the endofunctor
$$R_\sigma\colon C_m\to C_m,\qquad M\mapsto R_\sigma\otimes_{A_m}M .$$

**Claims.** (i) $R_\sigma$ is a bounded complex of graded $(A_m,A_m)$-bimodules
each of whose terms is finitely generated graded projective as a left
$A_m$-module and as a right $A_m$-module; (ii) consequently the functor
$R_\sigma\otimes_{A_m}-$ is an exact additive endofunctor of $C_m$ carrying
distinguished triangles to distinguished triangles and agreeing with the derived
tensor product through the identity replacements, by
[[lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m]]. These
two claims are verified below. The definition fixes the complex attached to the
chosen word; that different words for the same braid give isomorphic functors
is the content of the weak action theorem below and is **not** asserted here.

## Facts & Assumptions
**Given:** An integer $m\ge1$, the algebra $A_m$, the twist complexes $R_i,R_i^{-1}$ of $C_m$-bimodules, a word $\sigma=\tau_1\cdots\tau_k$ in $\sigma_i^{\pm1}$, and the class $\mathcal P$ of bounded complexes of graded $(A_m,A_m)$-bimodules whose every term is finitely generated graded projective as a left $A_m$-module and as a right $A_m$-module.

[L1] A graded left $A_m$-module is finite graded projective exactly when it is a degree-zero direct summand of a finite direct sum of internal shifts $A_m\{r_1\}\oplus\cdots\oplus A_m\{r_n\}$; the same characterization holds for graded right $A_m$-modules with the shifts acting on the other side; a direct summand of a projective object is projective, and a finite direct sum of finite graded projectives is finite graded projective ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]], [[thm-a-direct-summand-of-a-projective-is-projective]]).

[L2] For an $(A_m,A_m)$-bimodule $M$ and an integer $r$ there is a canonical degree-zero isomorphism of graded $(A_m,A_m)$-bimodules $M\otimes_{A_m}A_m\{r\}\cong M\{r\}$ and, symmetrically, $A_m\{r\}\otimes_{A_m}N\cong N\{r\}$ for a graded left $A_m$-module $N$, both given on elementary tensors by multiplication ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L3] The signed totalization $(R\otimes_{A_m}S)^n=\bigoplus_{p+q=n}R^p\otimes_{A_m}S^q$ of two bounded complexes of graded bimodules is a bounded complex of graded bimodules with $d(r\otimes s)=d_Rr\otimes s+(-1)^pr\otimes d_Ss$; the construction is functorial and associative up to canonical degree-zero isomorphism ([[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L4] $R_i$ and $R_i^{-1}$ are bounded complexes of graded $(A_m,A_m)$-bimodules with degree-zero differentials, and every term of either is finitely generated graded projective on the left and on the right ([[def-khovanov-seidel-positive-and-negative-twist-complexes]]).

[L5] For a bounded complex $R$ of graded $(A_m,A_m)$-bimodules whose every term is finitely generated graded projective as a left and as a right $A_m$-module, the functor $R\otimes_{A_m}-$ is a well-defined additive exact endofunctor of $C_m$ sending distinguished triangles to distinguished triangles, and it agrees with the derived tensor product through the identity replacements ([[lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m]]).



## Proof

**Proof technique:** direct.

1.1 *Tensor products of two-sided finite graded projectives are again two-sided finite graded projectives.* Let $M,N$ be graded $(A_m,A_m)$-bimodules finite graded projective on each side. To prove left projectivity, split $N$ as a left module by degree-zero left $A_m$-linear maps $i:N\to\bigoplus_jA_m\{r_j\}$ and $p:\bigoplus_jA_m\{r_j\}\to N$ with $pi=1$. The maps $1_M\otimes i$ and $1_M\otimes p$ are well-defined over $A_m$ and left $A_m$-linear for the action on $M$; they exhibit $M\otimes_{A_m}N$ as a left-module summand of $\bigoplus_jM\{r_j\}$ by [L2]. Thus it is finite graded projective on the left by [L1]. To prove right projectivity, split $M$ as a right module and apply $-\otimes_{A_m}N$; the resulting right-linear maps exhibit the tensor product as a summand of finitely many shifts of the right-projective module $N$. No splitting is assumed bimodule-linear, and each is tensored on its valid balanced side. [L1, L2]

2.1 *The totalization of two complexes in $\mathcal P$ lies in $\mathcal P$, and is bounded.* Let $R,S\in\mathcal P$. Every term of $R\otimes_{A_m}S$ is a finite direct sum of modules $R^p\otimes_{A_m}S^q$ with $p+q=n$; each summand is two-sided finite graded projective by step 1.1, and a finite direct sum of such is again such by [L1]. By [L3] the totalization is a complex of graded bimodules, and it is bounded because only finitely many pairs $(p,q)$ with $p+q=n$ occur and $R,S$ each have finitely many nonzero terms. [step 1.1, L3]

3.1 *The claim for $k\le1$, and the induction step.* For $k=0$ the complex $R_1=A_m$ is a single copy of the diagonal bimodule in degree $0$, which is finite graded projective on both sides, so $R_1\in\mathcal P$. For $k=1$ the factors are $R_i$ or $R_i^{-1}$, which lie in $\mathcal P$ by [L4]; and in general, if $R_{\tau_1}\otimes\cdots\otimes R_{\tau_{\ell}}\in\mathcal P$ then tensoring with the next factor, which lies in $\mathcal P$ by [L4], stays in $\mathcal P$ by step 2.1; hence by induction on $k$ the complex $R_\sigma$ lies in $\mathcal P$ for every word. Associativity of the iterated totalization up to canonical isomorphism, which is what makes the notation $R_{\tau_1}\otimes\cdots\otimes R_{\tau_k}$ unambiguous, is part of [L3]. [step 2.1, L3, L4]

4.1 *The functor properties.* By step 3.1 the complex $R_\sigma$ satisfies the hypothesis of [L5], so $R_\sigma\otimes_{A_m}-$ is a well-defined additive endofunctor of $C_m$, exact for the triangulations and carrying distinguished triangles to distinguished triangles, and it agrees with the derived tensor product through the identity replacements. [step 3.1, L5]

5.1 *Conclusion and scope.* The complex $R_\sigma$ attached to a word $\sigma$ is a bounded complex of graded $(A_m,A_m)$-bimodules with two-sided finite graded projective terms by step 3.1, and its action on $C_m$ is an exact triangulated endofunctor agreeing with derived tensor by step 4.1. The construction depends on the chosen word: nothing here compares $R_\sigma$ for different words representing the same braid, and no choice principle is used, the tensor products and shifts being explicit and finite. [step 3.1, step 4.1] ∎ 