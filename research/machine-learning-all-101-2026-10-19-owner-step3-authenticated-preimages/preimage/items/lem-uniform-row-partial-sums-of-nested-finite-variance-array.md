---
id: lem-uniform-row-partial-sums-of-nested-finite-variance-array
kind: lemma
title: "Uniform row partial sums of a nested finite-variance array"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, second edition, Chapters 3 and 5 (source context for the local reconstruction)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(Z_{ij})_{i,j\ge1}$ be one infinite iid real array with $EZ_{11}=0$ and $EZ_{11}^2<\infty$. For every fixed $C<\infty$,
$$\frac1n\max_{1\le i\le\lfloor Cn\rfloor}\max_{1\le k\le n}\left|\sum_{j=1}^{k}Z_{ij}\right|\longrightarrow0\quad\text{almost surely}.$$
The maximum over an empty index set is zero. The same conclusion holds with row and column coordinates exchanged.

## Statement references

Bai and Silverstein, Chapters 3 and 5 ([complete book](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)); the argument below supplies its own counting and probability estimates.

## Facts & Assumptions

[F1] The iid convention is [[def-identically-distributed-and-iid-random-variables]]; [[cor-first-borel-cantelli-lemma-for-events]] applies to every summable sequence of event probabilities. The finite stopping and exponential estimates used below are proved in the argument.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 If $C\le0$ the claim is vacuous. Suppose $C>0$, set $v=EZ_{11}^2$ and fix $\varepsilon>0$. For a dyadic integer $m=2^\ell$ put $N=2m$, $I=\lceil2Cm\rceil$, $x=\varepsilon m$, $r=4$ and $y=x/r$. For one row write $Z_j=Z_{ij}$ and $W_j=Z_j\mathbf1_{\{Z_j\le y\}}$. These variables are independent with $EW_j=-E[Z_j\mathbf1_{\{Z_j>y\}}]\le0$ and $EW_j^2\le v$. For $t>0$ and $w\le y$, $e^{tw}\le1+tw+(e^{ty}-1-ty)w^2/y^2$: the function $(e^u-1-u)/u^2=\int_0^1(1-s)e^{su}\,ds$, extended continuously at zero, is increasing in $u$. Consequently $Ee^{tW_j}\le\exp\{v(e^{ty}-1-ty)/y^2\}$. [given, F1, algebra]

2.1 Set $\psi=v(e^{ty}-1-ty)/y^2\ge0$. Independence shows that $M_k=\exp(t\sum_{j\le k}W_j-k\psi)$ has conditional expected next value at most $M_k$. If $\tau$ is the first $k\le N$ with $\sum_{j\le k}W_j\ge x$, stopping this finite sequence at $\tau$ or $N$ preserves the expectation bound $1$: condition each increment and observe that the indicator of not having stopped is determined by the preceding variables. On a crossing its stopped value is at least $e^{tx-N\psi}$. Nonnegativity therefore gives $P(\max_{k\le N}\sum_{j\le k}W_j\ge x)\le e^{-tx+N\psi}$. This proves the needed maximal bound directly. [step 1.1, algebra]

3.1 If $v=0$, every $Z_j=0$ almost surely and the conclusion follows. Otherwise choose $t>0$ by $e^{ty}=1+xy/(Nv)$. Then $N\psi\le x/y=r$, so the preceding probability is at most $e^r(Nv/(xy))^r\le K m^{-r}$, with $K$ depending only on $v,\varepsilon$. On the event that all $Z_j\le y$, the original and truncated partial sums agree; the complement has probability at most $NP(Z_{11}>y)$. Thus the positive original maximal tail is at most $NP(Z_{11}>y)+Km^{-r}$. Apply the same argument to $-Z_j$ for the negative tail and use a union bound over the $I$ rows. The result is $$P\left(\max_{i\le I,k\le N}\left|\sum_{j\le k}Z_{ij}\right|\ge\varepsilon m\right)\le K_Cm^2P(|Z_{11}|>\varepsilon m/4)+K'_Cm^{1-r}.$$ [step 1.1, step 2.1, algebra]

4.1 The right-hand side is summable over dyadic $m$: for every $a>0$, $\sum_\ell2^{2\ell}P(|Z_{11}|>a2^\ell)\le K_aE|Z_{11}|^2<\infty$, by summing the finite geometric progression $\sum_{\ell:\,a2^\ell<|Z_{11}|}2^{2\ell}$ under expectation. Also $\sum_\ell2^{(1-r)\ell}<\infty$. First Borel–Cantelli gives the displayed maximal estimate eventually on each dyadic block. Whenever $m\le n\le2m$, every $i\le Cn$ and $k\le n$ occurs in the corresponding block; division by $n\ge m$ bounds the desired ratio by $\varepsilon$ eventually. Intersecting over positive rational $\varepsilon$ proves convergence to zero. Exchanging the two coordinates preserves the iid law and gives the column version. [F1, step 3.1, algebra] ∎
