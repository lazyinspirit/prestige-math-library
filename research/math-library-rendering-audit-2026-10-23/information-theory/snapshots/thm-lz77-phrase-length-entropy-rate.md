---
id: thm-lz77-phrase-length-entropy-rate
kind: theorem
title: "Stationary-ergodic LZ77 phrase-length theorem"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-lz77-previous-match-phrase-length
  - cor-ergodic-shannon-mcmillan-breiman
  - thm-kac-return-time-formula
  - lem-infinite-past-conditional-block-information-rate
justified_by: []
axiom_use: "No choice axiom is used; finite-past conditional probabilities are constructed by martingale limits, and Kac recurrence, ergodic SMB and Birkhoff are used with their stated hypotheses."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ioannis Kontoyiannis, Recurrence and Waiting Times in Stationary Processes and Their Applications in Data Compression, Stanford University dissertation"
      url: "https://www.dpmms.cam.ac.uk/~ik355/PAPERS/thesis.pdf"
      locator: "Chapter 3 §§3.1–3.2, PDF pp.50–57 (printed pp.35–42): Theorem 3.1, Corollary 3.1(a), and the complete proof of Theorem 3.1. This is the inspected alternative full-text proof source; the Wyner–Ziv primary article was unavailable and is not claimed as inspected."
---
## Statement

For a stationary ergodic finite-alphabet source with bit entropy rate $h$, define $R_n=\min\{j\ge1:X_{-j}^{-j+n-1}=X_0^{n-1}\}$ using [[def-lz77-previous-match-phrase-length]]. Then $n^{-1}\log_2R_n\to h$ in probability. If $h>0$, the inverse window length satisfies $L_W/\log_2W\to1/h$ in probability as integer $W\to\infty$.

## Facts & Assumptions

**Given:** A stationary ergodic finite-alphabet source with bit entropy rate $h$, the recurrence distance $R_n$ and inverse window phrase length $L_W$ of [[def-lz77-previous-match-phrase-length]].

[F1] [[cor-ergodic-shannon-mcmillan-breiman]]: $-n^{-1}\log_2P(X_0^{n-1})\to h$ almost surely.

[F2] [[thm-kac-return-time-formula]]: for a positive-measure set $E$ in an ergodic probability-preserving system, the integral over $E$ of its first positive return time is $1$.

[F3] [[lem-infinite-past-conditional-block-information-rate]]: $-n^{-1}\log_2P(X_0^{n-1}\mid\mathcal F^-)\to h$ almost surely, with finite-past conditional averages defining the displayed versions.

[F4] [[def-lz77-previous-match-phrase-length]]: $R_n=\min\{j\ge1:X_{-j}^{-j+n-1}=X_0^{n-1}\}$ and $L_W=\max(\{0\}\cup\{n\ge1:R_n\le W\})$, with maximum $+\infty$ if unbounded; the empty match is allowed.

## Proof

**Given:** The source, entropy rate and definitions above.

1.1 Fix $\varepsilon>0$ and put $S_n=\{w:P(X_0^{n-1}=w)\ge2^{-n(h+\varepsilon/2)}\}$. By [F1], the current block belongs to $S_n$ with probability tending to one, and $|S_n|\le2^{n(h+\varepsilon/2)}$ because its word probabilities sum to at most one. For $w\in S_n$, let $E_w=\{X_0^{n-1}=w\}$. On $E_w$, $R_n$ is the first positive return to $E_w$ under the inverse shift, which is also measure-preserving and ergodic. Hence [F2] gives $\int_{E_w}R_n\,dP=1$. On $E_w$, $1_{\{R_n>M\}}\le R_n/M$ for $M=2^{n(h+\varepsilon)}$, so integrating and using [F2] yields $P(E_w\cap\{R_n>M\})\le1/M=2^{-n(h+\varepsilon)}$. Summing over $S_n$ and adding the atypical-block probability proves $P(R_n>2^{n(h+\varepsilon)})\to0$. [F1, F2, given, algebra]

1.2 Suppose $h>0$ and choose $0<\varepsilon<h$. Fix a past $x^-=(\ldots,x_{-2},x_{-1})$ and a current word $w\in\mathcal A^n$. Write $x^-\frown w$ for their concatenation on coordinates $i<0$ and $0\le i<n$; every coordinate used in a match of the current block at positive offset lies in this range. For any fixed offset $j\ge1$, the match equations $w_i=(x^-\frown w)_{-j+i}$ determine at most one word $w$: for $i<j$ the right side is fixed by the past, and for $i\ge j$ it equals the already determined letter $w_{i-j}$. Therefore at most $m$ words have $R_n\le m$ for any positive integer $m$. [F3, F4, given, algebra]

2.1 Put $m_n=\lfloor2^{n(h-\varepsilon)}\rfloor$ and, for each past $x^-$, let $G_n(x^-)=\{w:q_{\infty,n}(w\mid x^-)\le2^{-n(h-\varepsilon/2)}\}$. By [F3], the actual block lies outside $G_n(X^-)$ with probability tending to zero. For fixed $x^-$, let $C_n(x^-,m_n)$ be the words whose recurrence offset is at most $m_n$; step 1.2 gives $|C_n(x^-,m_n)|\le m_n$. Splitting its conditional mass into $G_n(x^-)$ and its complement gives $$P(R_n\le m_n\mid X^-=x^-)\le m_n2^{-n(h-\varepsilon/2)}+\sum_{w\notin G_n(x^-)}q_{\infty,n}(w\mid x^-).$$ The first term is at most $2^{-n\varepsilon/2}$, and the integral of the second term over pasts is exactly $P(X_0^{n-1}\notin G_n(X^-))$ by the conditional-law property in [F3]. Therefore $P(R_n\le m_n)\to0$, so the lower tail below $h-\varepsilon$ vanishes. [F3, step 1.2, given, algebra]

3.1 If $h=0$, the lower tail below $h-\varepsilon$ is impossible because $R_n\ge1$. If $h>0$, step 2.1 handles $0<\varepsilon<h$, while larger lower-tail thresholds are also impossible. Together with step 1.1 this proves $n^{-1}\log_2R_n\to h$ in probability. Kac recurrence makes $R_n$ finite almost surely for every $n$, after intersecting the countably many full-measure recurrence events. [F1, F2, F4, step 1.1, step 2.1, given, algebra]

4.1 For $h>0$ and all sufficiently large integer $W$, fix $0<\delta<1/h$ and set $n_-(W)=\lfloor(1/h-\delta)\log_2W\rfloor$, $n_+(W)=\lceil(1/h+\delta)\log_2W\rceil$. Step 3.1 implies $P(R_{n_-(W)}\le W)\to1$ and $P(R_{n_+(W)}>W)\to1$: choose $\eta>0$ with $(h+\eta)(1/h-\delta)<1<(h-\eta)(1/h+\delta)$ and apply convergence in probability at these indices. Since a match of length $n+1$ is also a match of length $n$, $R_n\le R_{n+1}$. Thus with probability tending to one, $n_-(W)\le L_W<n_+(W)$. Divide by $\log_2W$ and let $\delta\downarrow0$ to obtain $L_W/\log_2W\to1/h$ in probability. [F4, step 3.1, algebra] ∎
