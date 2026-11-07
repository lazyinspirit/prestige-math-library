---
id: thm-chow-technau-lacunary-dispersion-estimate
kind: theorem
title: "Chow–Technau dispersion estimate for dilated lacunary sequences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-fourier-decay-gives-full-series-lacunary-moment-bound
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
sources:
  references:
    - title: "Chow\u2013Technau 2024"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "Theorem 3.1 and its proof in \u00a73, with the Fourier-decay hypothesis from Theorem 1.9"
axiom_use: "No choice premise. The moment bound is now unqualified; integer parameters/grids are explicit, witnesses can be least in finite blocks, and Borel-Cantelli uses the GIVEN probability space."
---

## Statement

Let $a_1<a_2<\cdots$ be positive integers and suppose that for some $r\in(1,2]$, $a_{j+1}>r a_j$ for every $j$. Let $\mu$ be a Borel probability measure on $[0,1]$ such that for some $\tau>0$ and $C_0>0$,
$$\left|\widehat\mu(k)\right|\le C_0(1+|k|)^{-\tau}\qquad(k\in\mathbb Z),\quad \widehat\mu(k)=\int_0^1e^{-2\pi ikx}\,d\mu(x).$$
For a finite subset $A$ of the circle $\mathbb R/\mathbb Z$, define $\operatorname{disp}(A)$ to be the length of its largest cyclic gap. Then for every $\varepsilon>0$, for $\mu$-almost every $\beta\in[0,1]$ there is $C_{\beta,r,\varepsilon,\tau,\mu}>0$ such that for all sufficiently large integers $T$,
$$\operatorname{disp}\bigl(\{a_j\beta\bmod 1:T<j\le2T\}\bigr)\le C_{\beta,r,\varepsilon,\tau,\mu}\frac{(\log T)^{3+\varepsilon}}{T}.$$

## Statement references

[Chow–Technau 2024](https://arxiv.org/pdf/2307.14871v1) — Theorem 3.1 and its proof in §3; the measure hypothesis is Theorem 1.9.

## Facts & Assumptions

**Given:** The lacunary sequence, probability measure, Fourier-decay constants and exponent $\varepsilon>0$ in the Statement.

[F1] For a nonnegative normalized smooth bump supported on $[-1,1]$, the full periodized count $C_{T,c}$ satisfies $\|C_{T,c}-D\|_{2s}\le A[sD/(\log T)^{1+\eta/2}+DL(a_T/8)^{-\tau/(2s)}]$, uniformly in $c$, where $D=(\log T)^{3+2\eta}$, $L=\lfloor T/(\log T)^{3+\eta}\rfloor$, and $1\le s\le T$. The count is continuous and nonnegative. [[lem-fourier-decay-gives-full-series-lacunary-moment-bound]]

[F2] Events with summable probabilities occur only finitely often almost surely; independence is not required. [[cor-first-borel-cantelli-lemma-for-events]]

## Proof

**Proof technique:** an even-moment bound, a finite target grid and first Borel–Cantelli.

1.1 Take $\eta=\varepsilon/2$ and $s=\lfloor\log T/\sqrt{\log\log T}\rfloor$ for all sufficiently large integers $T$. Since $a_T>a_1r^{T-1}$, the second term in F1 divided by $D$ is at most $L\exp(-cT/s)$ after increasing the lower threshold on $T$. It is negligible compared with the first term. Therefore uniformly in $c$, $\|C_{T,c}-D\|_{2s}/D\le A's/(\log T)^{1+\eta/2}$. Here $s\ge1$ and $s\le T$, so F1 is applicable. [given, F1, algebra]

2.1 Pointwise $|C_{T,c}-D|^{2s}\ge(D/2)^{2s}\mathbf1_{\{|C_{T,c}-D|\ge D/2\}}$. Integrating this elementary inequality against the Borel probability $\mu$ gives an exceptional probability at most $[2A's/(\log T)^{1+\eta/2}]^{2s}$. For large $T$, the logarithm of the bracket is at most $-(\eta/4)\log\log T$, while $s\ge\log T/(2\sqrt{\log\log T})$. Thus this probability is at most $\exp(-c_\eta\log T\sqrt{\log\log T})$, and hence at most $T^{-B}$ for every fixed $B>0$ once $T$ is sufficiently large. This direct integration avoids applying a finite-space-only probability inequality to the present general measure. [step 1.1, algebra]

3.1 Put $Q_T=\lceil T/D\rceil$ and choose the explicit circle grid $c_j=j/Q_T$, $0\le j<Q_T$. Every circle point lies within $1/(2Q_T)\le D/(2T)$ of a grid point. Also $Q_T\le T+1$ for large $T$. A finite union bound using step 2.1 with $B=4$ shows that the event that some grid point has $|C_{T,c_j}-D|\ge D/2$ has probability at most $(T+1)T^{-4}$. These probabilities are summable over integer $T$. All events are Borel, since the counts are continuous finite sums of periodized smooth functions. [step 2.1, construct, algebra]

4.1 By F2, for almost every $\beta$ all sufficiently large integer $T$ have $C_{T,c_j}(\beta)>D/2>0$ for every grid point. Positivity of the nonnegative bump sum means that for each grid point some $T<t\le2T$ satisfies $\|a_t\beta-c_j\|_{\mathbb R/\mathbb Z}\le D/T$. Every point of the circle is therefore within $3D/(2T)$ of the finite orbit segment. The midpoint of each cyclic gap has distance half that gap from this segment, so its largest cyclic gap is at most $3D/T=3(\log T)^{3+\varepsilon}/T$. This proves the full stated estimate, uniformly over the circle targets, with a permissible constant3 and an almost-sure starting threshold. [F1, F2, step 3.1, algebra] ∎

## Remarks

The original unqualified Statement is proved without Countable Choice: its full-series moment supplier now derives the only needed compact one-dimensional periodization directly by finite coefficients and explicit Fejer kernels. The parameters $s(T)$ and grids $j/Q_T$ are explicit; thresholds may be taken least among the valid integers. Positivity uses only a finite sum, so a witness index can always be its least qualifying index; no countable family of witnesses is selected. First Borel–Cantelli applies to the GIVEN Borel probability measure. All original bounds and the full circle-target quantifier are unchanged.
