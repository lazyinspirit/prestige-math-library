---
id: prop-functional-calculus-for-normal-endomorphisms
kind: proposition
title: "For normal endomorphisms, the spectral functional calculus respects sums, products, adjoints, and composition of scalar functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functional-calculus-for-a-normal-endomorphism, thm-spectral-resolution-and-polynomial-spectral-projections, prop-adjoint-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $V$ be a finite-dimensional complex inner product space, let $T:V\to V$ be
normal, and let $f,g:\sigma(T)\to\mathbb C$.

1. $(f+g)(T)=f(T)+g(T)$.
2. $(fg)(T)=f(T)g(T)$.
3. If $\overline f(\lambda)=\overline{f(\lambda)}$, then $\overline f(T)=f(T)^*$.
4. If $h:f(\sigma(T))\to\mathbb C$, then $(h\circ f)(T)=h(f(T))$.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner product space $V$, a normal endomorphism $T:V\to V$, its spectral resolution
$$T=\sum_{j=1}^r \lambda_jP_j,$$
and functions $f,g:\sigma(T)\to\mathbb C$.

[L1] A normal endomorphism has a spectral resolution by pairwise orthogonal projections $P_j$ with $P_iP_j=0$ for $i\ne j$ and $P_j^2=P_j=P_j^*$ ([[thm-spectral-resolution-and-polynomial-spectral-projections]]).

## Proof

**Proof technique:** direct.

1.1 By definition $f(T)=\sum_j f(\lambda_j)P_j$ and $g(T)=\sum_j g(\lambda_j)P_j$, so $(f+g)(T)=\sum_j (f(\lambda_j)+g(\lambda_j))P_j=f(T)+g(T)$; using $P_iP_j=0$ for $i\ne j$ and $P_j^2=P_j$ from [L1], one also gets $f(T)g(T)=\sum_j f(\lambda_j)g(\lambda_j)P_j=(fg)(T)$. [L1, algebra]

1.2 Because each $P_j$ is self-adjoint by [L1], one has $f(T)^*=\left(\sum_j f(\lambda_j)P_j\right)^*=\sum_j \overline{f(\lambda_j)}P_j=\overline f(T)$. [L1, algebra]

2.1 Put $\mu_1,\dots,\mu_s$ for the distinct values taken by $f$ on $\sigma(T)$ and define $Q_\ell:=\sum_{f(\lambda_j)=\mu_\ell} P_j$; then the $Q_\ell$ are pairwise orthogonal projections, $f(T)=\sum_{\ell=1}^s \mu_\ell Q_\ell$, and applying the same definition of functional calculus once more gives $h(f(T))=\sum_{\ell=1}^s h(\mu_\ell)Q_\ell=\sum_j h(f(\lambda_j))P_j=(h\circ f)(T)$. [L1, step 1.1, algebra] ∎
