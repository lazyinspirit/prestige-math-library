---
dependency_level: 0
id: lem-canonical-lattice-bounded-valuation-for-frobenius-semilinear-map
kind: lemma
title: Canonical lattice-bounded valuation for a Frobenius-semilinear map
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-discrete-valuation
- thm-reals-cauchy-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique
      des invariants
    url: https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf
    locator: Chapter II §1, Definitions II.1.1–II.1.2 and Proposition II.1.3; reconstructed
      limit proof.
verification: {}
---

## Statement

Let $K$ have a discrete valuation $v$, let $q>1$ be an integer, and let $\sigma:K\to K$ be a field homomorphism with $v(\sigma(a))=qv(a)$. Let $V$ be a nonzero finite-dimensional $K$-vector space and let $\phi:V\to V$ be $\sigma$-semilinear with invertible linearization $K\otimes_{\sigma,K}V\to V$. For a basis $e_1,\ldots,e_r$ put $\nu_0(\sum a_i e_i)=\min_i v(a_i)$ and $\nu_0(0)=\infty$. There is a unique function $\nu:V\to\mathbb R\cup\{\infty\}$ satisfying $\nu(0)=\infty$, $\nu(x)\in\mathbb R$ for $x\ne0$, $\nu(ax)=v(a)+\nu(x)$ for $a\ne0$, $\nu(x+y)\ge\min(\nu(x),\nu(y))$, $\nu(\phi x)=q\nu(x)$, and $|\nu(x)-\nu_0(x)|$ bounded independently of $x\ne0$. It is independent of the basis and is given by
$$\nu(x)=\lim_{n\to\infty}q^{-n}\nu_0(\phi^n x).$$
If $|\nu_0(\phi x)-q\nu_0(x)|\le C$, the error after $n$ iterates is at most $C/((q-1)q^n)$. No completeness assumption on $K$ or choice axiom is needed.

## Facts & Assumptions

**Given:** The valued field, endomorphism, basis and semilinear map in the Statement.

[F1] A discrete valuation is multiplicative on products and satisfies the ultrametric inequality. In particular coordinate minima satisfy the same inequality. ([[def-discrete-valuation]])

[F2] A Cauchy sequence of real numbers converges; this result uses no choice axiom. ([[thm-reals-cauchy-complete]])

## Proof

1.1 In the given basis write $\phi(x)=M\sigma(x)$ with $M\in\mathrm{GL}_r(K)$. For a matrix $A$ let $m_A$ be the minimum valuation of its nonzero entries. The coordinate inequality gives $\nu_0(Az)\ge\nu_0(z)+m_A$. Applying it to $M$ and $M^{-1}$ gives $q\nu_0(x)+m_M\le\nu_0(\phi x)\le q\nu_0(x)-m_{M^{-1}}$. Thus a finite $C\ge0$ bounds the absolute difference in the Statement. Since $\sigma$ is injective and $M$ invertible, all iterates of a nonzero vector are nonzero. [F1, given, algebra]

2.1 For $x\ne0$ set $a_n(x)=q^{-n}\nu_0(\phi^n x)$. Step 1.1 gives $|a_{n+1}(x)-a_n(x)|\le Cq^{-n-1}$. Summing from $n$ through $m-1$ bounds $|a_m(x)-a_n(x)|$ by $C/((q-1)q^n)$. The sequence is Cauchy and has a real limit by [F2]. Taking $m\to\infty$ gives the claimed error, including $|\nu(x)-\nu_0(x)|\le C/(q-1)$ at $n=0$. Put $\nu(0)=\infty$. [F2, step 1.1, construct, algebra]

3.1 Semilinearity gives $\phi^n(ax)=\sigma^n(a)\phi^n(x)$, so $a_n(ax)=v(a)+a_n(x)$ and the limit has the required homogeneity. The coordinate ultrametric inequality for the additive map $\phi^n$ gives $a_n(x+y)\ge\min(a_n(x),a_n(y))$. If all three vectors are nonzero, passing to limits proves the same inequality for $\nu$; the cases with a zero vector follow directly. Finally $a_n(\phi x)=q a_{n+1}(x)$, so $\nu(\phi x)=q\nu(x)$. [F1, step 2.1, algebra]

4.1 If $\mu$ is another such function and $|\mu-\nu_0|\le D$ away from zero, then $\mu(x)=q^{-n}\mu(\phi^n x)$ differs from $a_n(x)$ by at most $Dq^{-n}$. Taking the limit yields $\mu(x)=\nu(x)$. A change of basis replaces $\nu_0$ by another coordinate minimum at uniformly bounded distance, using the two change-of-basis matrices exactly as in step 1.1. Hence the bounded-distance class, and its unique solution, are independent of the basis. [step 1.1, step 2.1, step 3.1, algebra] ∎
