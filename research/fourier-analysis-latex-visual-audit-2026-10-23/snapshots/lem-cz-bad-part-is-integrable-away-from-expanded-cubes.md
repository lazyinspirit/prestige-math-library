---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-5.md"
      - "research/frontier-38-owner-30-alpha-batch-5-5a.md"
      - "research/frontier-38-owner-30-step5-hash-5-post-5a.json"
    content_sha256: "cc9c6e38065c001bc4bcb97151aabdab3428b83659fe0b80ed271d170a5acb62"
id: lem-cz-bad-part-is-integrable-away-from-expanded-cubes
kind: lemma
title: "The bad part is integrable away from expanded cubes"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-calderon-zygmund-kernel-and-principal-value-operator, def-dyadic-cube-in-rn-all-generations, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "proof of Theorem 5.3.3: the cubes Q_j^* of side 2√n ℓ(Q_j) and the A_2 bound, printed pp. 362–363"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Lemma 2.7 and its proof, printed pp. 7–8"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $T$ be a Calderón–Zygmund operator with kernel constants $A_1,A_2$
([[def-calderon-zygmund-kernel-and-principal-value-operator]]), let $Q$ be a
dyadic cube ([[def-dyadic-cube-in-rn-all-generations]]) with centre $c_Q$, and let
$b_Q\in L^2(\mathbb R^n)$ be supported in $Q$ with $\int b_Q=0$. If $Q^*$ is the
cube concentric with $Q$ whose side length is $2\sqrt n$ times the side length of
$Q$, then
$$\int_{\mathbb R^n\setminus Q^*}|Tb_Q(x)|\,dx\le A_2\|b_Q\|_1.$$

## Facts & Assumptions

**Given:** A Calderón–Zygmund operator $T$ with kernel $k$ and constants $A_1,A_2$; a dyadic cube $Q$ of side length $\ell=2^{-k}$ with centre $c_Q$; the concentric cube $Q^*$ of side length $2\sqrt n\,\ell$; a function $b_Q\in L^2$ supported in $Q$ with $\int b_Q=0$.

[F1] $T$ is linear and $L^2$-bounded, and for every compactly supported $f\in L^2$ one has $Tf(x)=\int k(x-y)f(y)\,dy$ for almost every $x\notin\operatorname{supp}f$, the integral converging absolutely there; the Hörmander condition reads $\sup_{y\ne0}\int_{|x|\ge2|y|}|k(x-y)-k(x)|\,dx\le A_2$ and is invariant under replacing the origin by any centre ([[def-calderon-zygmund-kernel-and-principal-value-operator]]).

[F2] $Q\subseteq\{x:|x_i-c_{Q,i}|\le\ell/2\ \text{for every }i\}$ and $Q^*=\{x:|x_i-c_{Q,i}|\le\sqrt n\,\ell\ \text{for every }i\}$ in the notation of [[def-dyadic-cube-in-rn-all-generations]]; the Euclidean and supremum norms on $\mathbb R^n$ satisfy $\|v\|_\infty\le\|v\|_2\le\sqrt n\,\|v\|_\infty$.

[F3] On a product of $\sigma$-finite measure spaces a nonnegative product-measurable function may be integrated in either order, both integrals possibly $+\infty$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).



## Proof

**Proof technique:** direct.

1.1 If $y\in Q$ and $x\notin Q^*$, then $\|x-c_Q\|_\infty>\sqrt n\,\ell$ and $\|y-c_Q\|_\infty\le\ell/2$, so by [F2] $\|x-c_Q\|_2\ge\|x-c_Q\|_\infty>\sqrt n\,\ell\ge2\|y-c_Q\|_2$; hence $|x-c_Q|\ge2|y-c_Q|$, and in particular $x\ne c_Q$ and $x\ne y$. [F2, given, algebra]

2.1 For almost every $x\notin Q^*$ one has, using [F1] and the mean-zero condition, $$Tb_Q(x)=\int k(x-y)b_Q(y)\,dy=\int_{\mathbb R^n}\bigl[k(x-y)-k(x-c_Q)\bigr]b_Q(y)\,dy,$$ because $b_Q$ vanishes off $Q$, the subtracted term is the constant $k(x-c_Q)$ times $\int b_Q=0$, and $x-c_Q\ne0$ by step 1.1. [F1, given, algebra]

3.1 By step 2.1 and nonnegativity, for almost every $x\notin Q^*$, $$|Tb_Q(x)|\le\int_Q|k(x-y)-k(x-c_Q)|\,|b_Q(y)|\,dy.$$ Integrating this inequality over $\mathbb R^n\setminus Q^*$, whose complement has finite measure at every scale and which is $\sigma$-finite, and applying Tonelli's theorem [F3] to the nonnegative product-measurable integrand gives $$\int_{\mathbb R^n\setminus Q^*}|Tb_Q|\le\int_Q|b_Q(y)|\Bigl(\int_{\mathbb R^n\setminus Q^*}|k(x-y)-k(x-c_Q)|\,dx\Bigr)dy.$$ [F3, step 2.1, algebra]

4.1 For $y=c_Q$ the difference integrand is zero. For every other $y\in Q$ the inner integral is at most $A_2$: by step 1.1 the domain $\mathbb R^n\setminus Q^*$ is contained in $\{x:|x-c_Q|\ge2|y-c_Q|\}$, and the change of variables $u=x-c_Q$, $v=y-c_Q$ turns the integral over that larger set into $\int_{|u|\ge2|v|}|k(u-v)-k(u)|\,du\le A_2$ by the translation-invariant Hörmander condition of [F1]. Substituting into step 3.1 yields the asserted bound $\int_{\mathbb R^n\setminus Q^*}|Tb_Q|\le A_2\int_Q|b_Q|=A_2\|b_Q\|_1$. [F1, step 1.1, step 3.1, algebra] ∎
