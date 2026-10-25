---
id: ex-sl2-reducible-and-generic-verma-modules
kind: example
title: "Reducible and generic sl2 Verma modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module, thm-pbw-model-of-a-verma-module]
proof_strategy: direct
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, Example 4.3"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-sl2-reducible-and-generic-verma-modules). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

$M(\lambda)$ for $\mathfrak{sl}_2$ is reducible exactly when $\lambda=m\in\mathbb Z_{\ge0}$; then $f^{m+1}v_m$ is a singular vector.  When $\lambda\notin\mathbb Z_{\ge0}$ it is simple.

## Facts & Assumptions

**Given:** The $\mathfrak{sl}_2$ relations $[h,f]=-2f$ and $[e,f]=h$, the highest vector $v_\lambda$ with $ev_\lambda=0$ and $hv_\lambda=\lambda v_\lambda$ ([[def-verma-module]]), and the PBW basis $w_n=f^nv_\lambda$ for $n\ge0$ ([[thm-pbw-model-of-a-verma-module]]).

## Verification

**Proof technique:** direct.

1.1 The commutator $[h,f]=-2f$ gives $hw_n=(\lambda-2n)w_n$ by induction. Similarly $[e,f]=h$ gives $ew_{n+1}=few_n+hw_n$. Starting with $ew_0=0$, induction yields $ew_n=n(\lambda-n+1)w_{n-1}$ for $n\ge1$. PBW makes every $w_n$ nonzero, and their $h$-eigenvalues are pairwise distinct. [given, algebra]

2.1 If $\lambda=m\in\mathbb Z_{\ge0}$, step 1.1 gives $ew_{m+1}=0$. The tail $W=\operatorname{span}\{w_n:n\ge m+1\}$ is invariant under $f$ and $h$, and under $e$ because $ew_{m+1}=0$ and $ew_n$ is a scalar multiple of $w_{n-1}$ for larger $n$. It is nonzero and proper by PBW, so $M(m)$ is reducible and $w_{m+1}=f^{m+1}v_m$ is singular. [step 1.1, algebra]

3.1 Conversely, suppose $\lambda\notin\mathbb Z_{\ge0}$ and let $N$ be a nonzero submodule. A nonzero vector of $N$ is a finite sum of basis vectors $w_n$. Since their $h$-eigenvalues are distinct, a finite Lagrange interpolation polynomial in $h$ extracts one nonzero $w_n\in N$. Each coefficient $k(\lambda-k+1)$ for $1\le k\le n$ is nonzero, so applying $e^n$ gives a nonzero multiple of $w_0\in N$. Applying powers of $f$ then gives every $w_j\in N$. Thus $N=M(\lambda)$ and $M(\lambda)$ is simple. Together with step 2.1 this proves the asserted classification without a determinant criterion. [step 1.1, step 2.1, algebra] ∎
