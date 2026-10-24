---
id: ex-finite-dimensional-sl2-quotient-of-a-verma-module
kind: example
title: "The finite-dimensional sl2 quotient of a Verma module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module, thm-pbw-model-of-a-verma-module, thm-verma-module-has-a-unique-simple-quotient]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-finite-dimensional-sl2-quotient-of-a-verma-module). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

For $m\in\mathbb Z_{\ge0}$,

$$L(m)=M(m)/U(\mathfrak{sl}_2)f^{m+1}v_m$$

has basis $\overline v_m,\overline{fv_m},\ldots,\overline{f^mv_m}$ and
dimension $m+1$.

## Facts & Assumptions

**Given:** The highest-vector relations of [[def-verma-module]], the PBW basis $w_n=f^nv_m$ of [[thm-pbw-model-of-a-verma-module]], the $\mathfrak{sl}_2$ commutators $[h,f]=-2f$, $[e,f]=h$, and the unique simple quotient [[thm-verma-module-has-a-unique-simple-quotient]].

## Verification

**Proof technique:** direct.

1.1 Write $w_n=f^nv_m$. Induction from $[h,f]=-2f$, $[e,f]=h$, $ew_0=0$, and $hw_0=mw_0$ gives $hw_n=(m-2n)w_n$ and $ew_n=n(m-n+1)w_{n-1}$ for $n\ge1$. In particular $ew_{m+1}=0$. The tail $W=\operatorname{span}\{w_n:n\ge m+1\}$ is stable under $e,f,h$ and equals $U(\mathfrak{sl}_2)w_{m+1}$: it contains that generated submodule by invariance, while every tail vector is $f^kw_{m+1}$. Hence the quotient has the displayed $m+1$ surviving, distinct-weight PBW vectors. [given, algebra]

2.1 Any nonzero submodule of the quotient contains a nonzero finite combination of its basis vectors. Their $h$-eigenvalues are distinct, so a finite interpolation polynomial in $h$ extracts some $\overline w_r$. Applying $e^r$ reaches a nonzero multiple of $\overline w_0$, because all coefficients $k(m-k+1)$ for $1\le k\le r\le m$ are nonzero. Applying $f$ then gives every displayed basis vector, so the quotient is simple. The unique-simple-quotient theorem identifies its kernel with $J(m)$ and the quotient with $L(m)$. [step 1.1, given, algebra] ∎
