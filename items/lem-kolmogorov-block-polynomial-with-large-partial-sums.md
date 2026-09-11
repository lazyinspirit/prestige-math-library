---
id: "lem-kolmogorov-block-polynomial-with-large-partial-sums"
kind: "lemma"
title: "Kolmogorov block polynomial with large partial sums"
deps: ["def-kolmogorov-analytic-partial-sum-maximal-function", "lem-kolmogorov-atomic-kernel-maxima", "lem-fejer-kernel-is-a-positive-approximate-identity", "thm-continuity-from-below-for-measures", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: Lemmas 4.2.3–4.2.4, printed pp.256–259; analytic conversion is local
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For every $H>0$ and $0<\eta<1$ there is an analytic polynomial $P$ with $\|P\|_1=1$ and $m\{A_*P>H\}>1-\eta$. There is also a nonnegative trigonometric polynomial $g=\sum_{|k|\le d}b_ke_k$ with $\|g\|_1=1$ and $m\{\sup_{N\ge0}|S_Ng|>H\}>1-\eta$. Here “symmetric” refers to the frequency interval and the partial-sum cutoff, not to evenness of $g$.

## Facts & Assumptions

[F1] Analytic partial sums include the convention $A_{-1}=0$ [[def-kolmogorov-analytic-partial-sum-maximal-function]].

[F2] Arbitrarily large finite atomic averages of Dirichlet kernels have almost-everywhere supremum at least $c\log n$ [[lem-kolmogorov-atomic-kernel-maxima]].

[F3] $F_M$ is nonnegative with integral one and satisfies $F_M=(M+1)^{-1}|\sum_{j=0}^M e_j|^2$ [[lem-fejer-kernel-is-a-positive-approximate-identity]].

[F4] Measures of increasing unions are limits of their measures [[thm-continuity-from-below-for-measures]].

[F5] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** $H>0$, $0<\eta<1$, and AC.

1.1 Choose an atomic configuration from F2 with $c\log n>2H+2$, and write $b_k=n^{-1}\sum_je_{-k}(t_j)$. Then $|b_k|\le1$ and $B_L=\sum_{|k|\le L}b_ke_k$, by expanding its finite kernel sum. The increasing measurable sets $E_K=\{x:\max_{1\le L\le K}|B_L(x)|>2H+2\}$ have union of measure one, so some finite $K\ge1$ has $m(E_K)>1-\eta$ by F4. Strict inequality in the chosen logarithmic threshold ensures that a finite cutoff attains the threshold used here, even if the original supremum is not attained. [F2, F4, F5]

2.1 Choose $M\ge K$ so large that $K(K+1)/(M+1)<1$. Set $g(x)=n^{-1}\sum_jF_M(x-t_j)$. F3 gives $g\ge0$ and $\int g=1$, hence $\|g\|_1=1$. Expanding the square in F3 yields $F_M=(M+1)^{-1}\sum_{r,s=0}^M e_{r-s}$. For each $|k|\le M$ exactly $M+1-|k|$ pairs have $r-s=k$, and no pairs give larger $|k|$. Translating by $t_j$ multiplies this coefficient by $e_{-k}(t_j)$. Thus g has coefficients $b_k(1-|k|/(M+1))$ for $|k|\le M$. Consequently, for every $1\le L\le K$ and every x, $|S_Lg(x)-B_L(x)|\le\sum_{|k|\le L}|k|/(M+1)=L(L+1)/(M+1)<1$. For every $x\in E_K$ there is therefore an L with $|S_Lg(x)|>2H+1>H$. This proves the nonnegative symmetric-frequency interface by finite coefficient computation alone. [F3, step 1.1]

3.1 Put $P=e_Mg$, an analytic polynomial of degree at most $2M$. Since $|e_M|=1$, $\|P\|_1=1$. For $0\le L\le M$, direct reindexing gives $e_MS_Lg=A_{M+L}P-A_{M-L-1}P$. At each point of $E_K$, the L from step 2.1 is at most K and hence at most M; the difference has modulus greater than $2H+1$. The triangle inequality implies one of its two terms has modulus greater than H. If the second index is -1, that term is zero by F1, and the first supplies the bound. Thus $A_*^{2M}P>H$ throughout $E_K$, proving the analytic interface with the same measure bound. AC is propagated from F2; the subsequent K and M may be chosen as least integers, and no Recorded block theorem is used. [F1, F5, step 1.1, step 2.1] ∎
