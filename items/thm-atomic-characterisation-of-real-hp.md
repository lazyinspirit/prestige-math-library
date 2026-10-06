---
id: thm-atomic-characterisation-of-real-hp
kind: theorem
title: "Atomic characterisation of real $H^p$ for $0<p\\le1$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [lem-calderon-reproducing-formula-for-the-hardy-decomposition, lem-an-hp-atom-has-uniform-hp-quasinorm, lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions, lem-hardy-calderon-zygmund-level-decomposition-produces-atoms, thm-maximal-function-characterisations-of-real-hardy-spaces, def-hp-atom-with-moment-order, def-real-hardy-space-by-a-radial-maximal-function, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "Theorem 1 and the surrounding equivalence, printed pp. 61 and 72 (PDF pp. 3 and 14): $H^p=H^p_A$ with equivalent quasi-norms"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "Theorem 1.3, printed pp. 11-12: the atomic decomposition and the infimum formula"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: 'a distribution $f\\in\\mathcal S'$ is in $H^p$ if and only if it can be written as $f=\\sum\\lambda_ja_j$' with convergence in $\\mathcal S'$"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<p\le1$, fix the admissible kernel $\varphi$ defining $H^p$,
and set $s=\lfloor n(1/p-1)\rfloor$. Fix an integer $K\ge n/p$ and the
associated reproducing pair from
[[lem-calderon-reproducing-formula-for-the-hardy-decomposition]]. Fix an
admissible grand-maximal order $N\ge\max\{N_0(n,p,\varphi),n+s+1\}$ as in the
two cited lemmas. For
$f\in\mathcal S'(\mathbb R^n)$ the following are equivalent:

1. $f\in H^p(\mathbb R^n)$ in the sense of
[[def-real-hardy-space-by-a-radial-maximal-function]];
2. there exist a sequence $(\lambda_j)\in\ell^p$ and a sequence $(a_j)$ of
   $(p,\infty,s)$-atoms ([[def-hp-atom-with-moment-order]]) with
   $f=\sum_j\lambda_ja_j$ converging in $\mathcal S'(\mathbb R^n)$.

In that case
$$\|f\|_{H^p}\asymp_{n,p,N,K,\varphi}\inf\Bigl(\sum_j|\lambda_j|^p\Bigr)^{1/p},$$
the infimum being taken over all atomic representations of $f$, and every such
series converges also in the $H^p$ quasi-norm.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<p\le1$, the fixed kernel $\varphi$ and reproducing order $K\ge n/p$, $s=\lfloor n(1/p-1)\rfloor$, an admissible order $N\ge\max\{N_0(n,p,\varphi),n+s+1\}$ as in the two cited lemmas, and $f\in\mathcal S'$.

[F1] Level decomposition: if $f\in H^p$ then there are $(p,\infty,s)$-atoms $a_B$ and coefficients $\lambda_B>0$ with $f=\sum_B\lambda_Ba_B$ in $\mathcal S'$ and $\sum_B\lambda_B^p\le C_1\|f\|_{H^p}^p$, where $C_1=C(n,p,N,K,\varphi,\Phi)$ includes the auxiliary flat reproducing kernel $\Phi$ ([[lem-hardy-calderon-zygmund-level-decomposition-produces-atoms]]). For the norm bound, use Countable Choice over the integer pairs $(n,K)$ to fix once one admissible kernel $\Phi_{n,K}$ from [[lem-calderon-reproducing-formula-for-the-hardy-decomposition]]. With this fixed family, $C(n,p,N,K,\varphi,\Phi_{n,K})$ is a function of $n,p,N,K,\varphi$. No uniformity over all admissible reproducing kernels is asserted or needed: the atomic class and the infimum over representations do not depend on the auxiliary kernel.

[F2] $\ell^p$ sums: if $(a_j)$ are $(p,\infty,s)$-atoms and $(\lambda_j)\in\ell^p$, then $g=\sum_j\lambda_ja_j$ converges absolutely in $\mathcal S'$, lies in $H^p$ and satisfies $\|g\|_{H^p}\le C_2(\sum_j|\lambda_j|^p)^{1/p}$ with $C_2$ depending on $n,p,s,N,\varphi$; the tail bound of that lemma gives convergence in the $H^p$ quasi-norm ([[lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions]]).

**Proof technique:** the two implications supplied by the level decomposition and the $\ell^p$-summation lemma, then the infimum.

## Proof

**Proof technique:** direct.

1.1 2$\Rightarrow$1 and the upper norm bound. Let $f=\sum_j\lambda_ja_j$ with $(\lambda_j)\in\ell^p$ and atoms $a_j$. By [F2], $f\in H^p$ and $\|f\|_{H^p}\le C_2(\sum_j|\lambda_j|^p)^{1/p}$; taking the infimum over all representations gives the inequality $\|f\|_{H^p}\le C_2\inf(\sum_j|\lambda_j|^p)^{1/p}$. [F2, algebra]

1.2 1$\Rightarrow$2 and the lower norm bound. Let $f\in H^p$ and apply [F1] using the auxiliary kernel $\Phi_{n,K}$ fixed there, obtaining $f=\sum_B\lambda_Ba_B$. Then $(\lambda_B)\in\ell^p$ with $\sum_B\lambda_B^p\le C_1\|f\|_{H^p}^p$, so $f$ has an atomic representation and $\inf(\sum_j|\lambda_j|^p)^{1/p}\le C_1^{1/p}\|f\|_{H^p}$. [F1, algebra]

2.1 $H^p$ convergence. If $f=\sum_j\lambda_ja_j$ with $(\lambda_j)\in\ell^p$, the tail estimate of [F2] applied to the partial sums gives $\|f-\sum_{j\le J}\lambda_ja_j\|_{H^p}\le C_2(\sum_{j>J}|\lambda_j|^p)^{1/p}\to0$; hence the series converges in the $H^p$ quasi-norm. This applies in particular to the level-decomposition representation of [F1] and to any atomic representation of $f\in H^p$. [F2, step 1.2]

3.1 Conclusion. Steps 1.1-1.2 prove the equivalence and the two-sided norm bound, and step 2.1 gives the quasi-norm convergence. This proves the theorem. [step 1.1, step 1.2, step 2.1] ∎
