---
id: thm-shannon-bounds-for-finite-binary-codes
kind: theorem
title: "Shannon bounds for finite binary codes"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-finite-discrete-source-and-blocks, def-base-two-entropy-of-a-finite-source, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-binary-source-code-and-extension, thm-binary-kraft-criterion-for-finite-lengths, thm-mcmillan-inequality-for-finite-binary-codes, lem-finite-gibbs-inequality]
justified_by: []
proof_strategy: direct
strategy: "Use McMillan and finite Gibbs nonnegativity for the lower bound; realize the rounded self-information lengths by the binary Kraft criterion for the upper bound."
axiom_use: "No choice axiom is used; the code lengths and probability vectors are finite."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§§4.3–4.4, Shannon code construction, Kraft–McMillan, and entropy lower bound"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 1–2, entropy bound for prefix codes"
---
## Statement

Let $p$ be a finite full-support source and let $H_2(p)$ be its entropy in bits. Every finite binary uniquely decodable code $C$ satisfies $L_p(C)\ge H_2(p)$. If $m\ge2$, the binary prefix code with lengths
$\ell_i=\left\lceil-\log_2p_i\right\rceil$
(called a Shannon code) has expected length strictly less than $H_2(p)+1$. If $m=1$, the one-bit codeword $0$ has length $1=H_2(p)+1$.

## Facts & Assumptions

**Given:** A finite full-support source $p=(p_i)_{i=1}^m$ and a finite binary code $C$.

[F1] [[def-finite-discrete-source-and-blocks]]: $m\ge1$, $p_i>0$, and $\sum_i p_i=1$.

[F2] [[def-base-two-entropy-of-a-finite-source]]: $H_2(p)=H(p)/\ln2=-\sum_i p_i\log_2p_i$.

[F3] [[def-binary-source-code-and-extension]]: $L_p(C)=\sum_i p_i\ell_i$, and $C$ is uniquely decodable exactly when its finite-word concatenation extension is injective.

[F4] [[thm-mcmillan-inequality-for-finite-binary-codes]]: Every finite binary uniquely decodable code has $\sum_i2^{-\ell_i}\le1$.

[F5] [[lem-finite-gibbs-inequality]]: For finite probability vectors $p,q$ with $q_i>0$, $D(p\|q)\ge0$.

[F6] [[thm-binary-kraft-criterion-for-finite-lengths]]: Positive integer lengths are realized by a binary prefix code whenever their Kraft sum is at most one.

[F7] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p):=-\sum_i p_i\ln p_i$ and $D(p\|q):=\sum_{i:p_i>0}p_i\ln(p_i/q_i)$ when $q_i>0$.

## Proof

1.1 Let $C$ be uniquely decodable and set $K:=\sum_i2^{-\ell_i}>0$. By [F3] and [F4], $K\le1$. Define $q_i:=2^{-\ell_i}/K$; then $q$ is a positive probability vector. [F3, F4, given, construct]

1.2 Suppose $m\ge2$. Full support gives $0<p_i<1$, so $\ell_i=\lceil-\log_2p_i\rceil$ is a positive integer. Because $\ell_i\ge-\log_2p_i$, $2^{-\ell_i}\le p_i$ and hence $\sum_i2^{-\ell_i}\le1$. By [F6] there is a binary prefix code with these lengths. [F1, F6, given, construct]

2.1 By [F2], [F5], and [F7], $0\le D(p\|q)=\sum_i p_i\ln(p_i/q_i)=-H(p)+(\ln2)L_p(C)+\ln K$. Since $K\le1$, $\ln K\le0$, so $H(p)\le(\ln2)L_p(C)+\ln K\le(\ln2)L_p(C)$. Divide by $\ln2>0$ and use [F2] to obtain $H_2(p)\le L_p(C)$. [F2, F3, F5, F7, step 1.1, given, algebra]

3.1 For every real $a$, $\lceil a\rceil<a+1$. Therefore this Shannon code satisfies $L_p(C)=\sum_i p_i\lceil-\log_2p_i\rceil<\sum_i p_i(-\log_2p_i+1)=H_2(p)+1$. If $m=1$, then $p_1=1$ by [F1], so $H_2(p)=0$ by [F2]; the codeword $0$ is a prefix code of length one. [F1, F2, step 1.2, given, algebra] ∎

