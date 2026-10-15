---
dependency_level: 1
id: lem-compact-wavelet-projection-kernel-and-commutator
kind: lemma
title: Compact wavelet projections approximate smooth functions and commute asymptotically with multiplication
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-negative-sobolev-space-for-white-noise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §2 and §5.4
      url: https://arxiv.org/pdf/1310.2484
---

## Statement

Let $V_L$ be the span of wavelets through level $L$ in a compactly supported orthonormal multiresolution basis on $[0,1]$, either boundary corrected or periodized. Assume constants belong to $V_L$, its dimension $d_L\asymp2^L$, and its orthonormal scaling functions $\phi_{Lk}$ have supremum norm at most $C2^{L/2}$, support diameter at most $C2^{-L}$, and uniformly bounded overlap. Periodized supports and distances are interpreted on the circle. Assume also $\sum_k|\psi_{lk}(x)|\le C2^{l/2}$ and $\|\psi_{lk}\|_1\le C2^{-l/2}$. Let $P_L$ denote the orthogonal projection onto $V_L$.

Then $P_L$ has a kernel $K_L$ satisfying $\sup_x\int|K_L(x,y)|dy\le C'$ and $K_L(x,y)=0$ when $\operatorname{dist}(x,y)>C'2^{-L}$. If $a$ is $\beta$-Hölder for $0<\beta\le1$, then
$$\|P_L(ah)-ah\|_\infty\le C'\|a\|_{C^\beta}2^{-\beta L}\|h\|_\infty,\qquad h\in V_L.$$
For the composition assertion, assume additionally an integer $m>\alpha$ such that $\|\psi_{lk}^{(q)}\|_\infty\le C_q2^{l(q+1/2)}$ for $0\le q\le m$, bounded overlap also for their derivatives, and vanishing moments through degree $m-1$ for the detail wavelets, including boundary wavelets; the finite low scaling functions are $C^m$. These are the usual sufficiently regular compact wavelet hypotheses. If a bounded function $g$ has coefficients bounded by $C_g2^{-l(\alpha+1/2)}$, with $\alpha>0$, and its wavelet expansion represents $g$ in $L^2$, then $\|g-P_Lg\|_\infty\le C''C_g2^{-\alpha L}$, up to equality of the continuous representatives. Under these additional derivative and cancellation hypotheses, $e^g$ also has coefficients bounded by $C_g^\prime2^{-l(\alpha+1/2)}$, including integer $\alpha$, and $g,e^g$ are $\beta$-Hölder for every $0<\beta<\min(\alpha,1)$. Moreover $\|h\|_\infty\le C''\sqrt{d_L}\|h\|_2$ for $h\in V_L$.

## Facts & Assumptions

**Given:** The explicitly stated compact multiresolution, scaling-function, wavelet, and Hölder assumptions.

[F1] [[def-negative-sobolev-space-for-white-noise]] supplies the orthonormal coefficient convention; all additional localization hypotheses are stated above.

## Proof

1.1 The finite orthogonal projection has kernel $K_L(x,y)=\sum_k\phi_{Lk}(x)\phi_{Lk}(y)$. At each $x$ only a uniformly bounded number of terms are nonzero, and each has $\|\phi_{Lk}\|_1\le C2^{-L/2}$. Thus $\int|K_L(x,y)|dy\le\sum_{k:\phi_{Lk}(x)\ne0}|\phi_{Lk}(x)|\|\phi_{Lk}\|_1\le C'$. A nonzero term requires $x,y$ to lie in one scaling support, giving the support bound. Also $K_L(x,x)=\sum_k\phi_{Lk}(x)^2\le C'2^L$; Cauchy–Schwarz on the scaling coefficients gives the claimed $L^2$ to $L^\infty$ bound. [F1, given, algebra]

1.2 For $h\in V_L$, $P_Lh=h$. Therefore $P_L(ah)(x)-a(x)h(x)=\int K_L(x,y)(a(y)-a(x))h(y)dy$. Hölder continuity, the support bound, and the kernel integral bound give the asserted commutator estimate. [given, step 1.1, algebra]

2.1 The levelwise tail satisfies $\|\sum_k\langle g,\psi_{lk}\rangle\psi_{lk}\|_\infty\le CC_g2^{-\alpha l}$. Summing its geometric series over $l>L$ proves uniform convergence and the claimed approximation rate. Its uniform limit agrees with its $L^2$ limit, hence with $g$ almost everywhere, and everywhere for continuous representatives. [F1, given, algebra]


3.1 For composition put $u_j=P_jg$ and $v_j=u_j-u_{j-1}$, with the first finite low block treated as $u_0$. Levelwise derivative bounds and overlap give $\|v_j^{(q)}\|_\infty\le C_g2^{j(q-\alpha)}$ for $0\le q\le m$, and $\|u_j^{(q)}\|_\infty\le C_g^\prime2^{jq}$ for $1\le q\le m$ by summing levels; also $\sup_j\|u_j\|_\infty<\infty$. The identity $e^{u_j}-e^{u_{j-1}}=v_j\int_0^1e^{u_{j-1}+tv_j}dt$ and repeated product and chain rules therefore give, writing $H_j=e^{u_j}-e^{u_{j-1}}$, $\|H_j\|_\infty\le C2^{-j\alpha}$ and $\|H_j^{(m)}\|_\infty\le C2^{j(m-\alpha)}$. Indeed a derivative of order $q$ of the exponential factor is a finite sum of products of derivatives of its exponent of total order $q$, bounded by $C2^{jq}$; pairing with the derivative of order $m-q$ of $v_j$ gives $C2^{j(m-\alpha)}$. [given, step 2.1, algebra]

3.2 The telescoping series $e^g=e^{u_0}+\sum_{j\ge1}H_j$ converges uniformly. For a wavelet at level $l$, the terms with $j\ge l$ have coefficients bounded by $C2^{-l/2}\sum_{j\ge l}2^{-j\alpha}\le C2^{-l(\alpha+1/2)}$. For $j<l$, subtract the degree $m-1$ Taylor polynomial of $H_j$ about a point of the wavelet support; all its integrals vanish by the stated moments. The Taylor remainder gives $|\langle H_j,\psi_{lk}\rangle|\le C2^{-l(m+1/2)}2^{j(m-\alpha)}$. Sum the geometric series over $j<l$ to get the same $C2^{-l(\alpha+1/2)}$ bound. The fixed smooth $e^{u_0}$ has the stronger order $2^{-l(m+1/2)}$. This proves composition in the coefficient class directly, for every positive $\alpha$ including integers, without presuming a Hölder–wavelet equivalence. [given, step 3.1, algebra]

3.3 For $0<\beta<\min(\alpha,1)$ the levelwise derivative and supremum bounds for $g$ are respectively at most $C2^{j(1-\beta)}$ and $C2^{-j\beta}$. Given distance $0<\delta<1$, choose $J$ with $2^{-J-1}<\delta\le2^{-J}$. The difference of the levels through $J$ is at most $C\delta\sum_{j\le J}2^{j(1-\beta)}\le C\delta^\beta$ by the derivative bound; the remaining difference is at most $C\sum_{j>J}2^{-j\beta}\le C\delta^\beta$. Thus $g$ is $\beta$-Hölder. The exponential has bounded derivative on the bounded range of $g$, so $e^g$ has the same Hölder bound. [given, step 2.1, step 3.1, algebra] ∎
