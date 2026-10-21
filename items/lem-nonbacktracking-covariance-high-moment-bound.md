---
id: lem-nonbacktracking-covariance-high-moment-bound
kind: lemma
title: "Nonbacktracking covariance high moments and an independent coarse norm bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - lem-nested-iid-fourth-moment-truncation-and-diagonal-control
  - cor-first-borel-cantelli-lemma-for-events
  - cor-markov-inequality-for-random-variables
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-operator-norm-is-the-largest-singular-value
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, second edition, Chapters 3 and 5 (source context for the local reconstruction)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite real iid array with $E\xi_{11}=0$, $E\xi_{11}^2=1$ and $E|\xi_{11}|^4<\infty$, and let $p_h/h\to\gamma\in(0,\infty)$. Put $N_h=\max(h,p_h)$, $m_h=\min(h,p_h)$ and $y_h=m_h/N_h\to y:=\min(\gamma,\gamma^{-1})$. Take the centered slow truncations of the upper-left $h\times p_h$ blocks, orient each with $m_h$ rows and $N_h$ columns, and divide by $\sqrt{N_h}$, obtaining $Y_h$. For each fixed integer $\ell\ge1$, define $T_{h,\ell}$ by summing the products of the entries of $Y_h,Y_h^{\mathsf T},\ldots,Y_h,Y_h^{\mathsf T}$ along all paths of length $2\ell$, subject to every pair of vertices two positions apart being unequal. Its row and column endpoints are included in these exclusions. Then almost surely
$$\limsup_h\|T_{h,\ell}\|_{\mathrm{op}}\le(2\ell+1)(\ell+1)y^{(\ell-1)/2}.$$
In particular, for the original untruncated $X_h=(\xi_{ij})_{i\le h,j\le p_h}$, almost surely $\limsup_h\|X_h/\sqrt h\|_{\mathrm{op}}<\infty$.

## Statement references

Bai and Silverstein, Chapters 3 and 5 ([complete book](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)); the argument below supplies its own counting and probability estimates.

## Facts & Assumptions

[F1] [[lem-nested-iid-fourth-moment-truncation-and-diagonal-control]] supplies eventual truncation equality, the uniform third-moment bound, slow threshold, negligible mean matrix and diagonal laws.

[F2] Markov's inequality and first Borel–Cantelli are [[cor-markov-inequality-for-random-variables]] and [[cor-first-borel-cantelli-lemma-for-events]].

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and [[thm-operator-norm-is-the-largest-singular-value]] identify the Hermitian norm and bound its even powers by their trace.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Apply F1 to the original nested rectangular array and, as necessary, its transpose. Orient the centered truncated matrix with $p$ rows and $n$ columns, $p\le n$, and divide by $\sqrt n$. In this proof the original sequence index is $h$, $n=N_h=\max(h,p_h)$, $p=\min(h,p_h)$, and $y_n=p/n\to y\in(0,1]$. These dimensions are comparable to $h$; all probability series below are summed over $h$. Enlarge the slow truncation threshold by a fixed factor to bound the centered entries by $L_n=\delta_n\sqrt n$ with $\delta_n\ge1/\log(n+2)$, $\delta_n\to0$. F1 gives independent centered entries, variance at most one, and $E|x|^q\le CL_n^{q-3}$ for $q\ge3$. Define $Y=(x_{ij}/\sqrt n)$ and the restricted matrices $T_\ell$ as in the statement. The same arguments hold if the orientation changes infinitely often. [F1, given, construct]

2.1 Fix $\ell\ge1$. Set $N=4m\ell$, with integer $m$ chosen so that $m/\log n\to\infty$ and $\delta_n(m/\log n)^2\to0$; for example $m=\lceil\log n\,\delta_n^{-1/8}\rceil$. Since $\delta_n\ge1/\log n$, $N$ is polylogarithmic. Reversing each admissible path exchanges its endpoints and preserves its real weight, so $T_\ell$ is real symmetric. Thus its even-power trace bounds $\|T_\ell\|^{2m}$. Expand $E\operatorname{tr}T_\ell^{2m}$ into closed alternating walks of length $N$, split into $2m$ consecutive nonbacktracking blocks of length $2\ell$. Bound absolute expectations termwise. Any edge appearing exactly once vanishes by centering and independence. [F1, F2, F3, step 1.1, algebra]

3.1 Canonicalize row and column labels separately by order of first appearance. Innovations lead to a previously unvisited vertex and form a spanning tree of the visited vertices. Let $k$ be their number, so $k+1$ vertices are visited. Classify the second occurrence of each innovation edge as T3; all other noninnovation occurrences are T4. There are exactly $k$ T3 occurrences and $d=N-2k$ T4 occurrences. A T4 class is a distinct unoriented edge supporting at least one T4 occurrence; let $t$ be their number. Then $0\le t\le d$, and $t=0$ implies $d=0$. Every innovation edge appears at least twice. [F1, F2, F3, step 1.1, algebra, step 2.1]

4.1 **Moment bound.** An innovation edge of multiplicity two contributes at most one. An innovation edge of multiplicity $q\ge3$ contributes at most $CL_n^{q-3}$. A noninnovation edge of multiplicity $q\ge2$ contributes at most $CL_n^{q-1}$, a deliberately weaker bound valid for $L_n\ge1$. Consequently the product is bounded by $C^tL_n^{d-t}$. This follows by summing exponents: an innovation edge contributes $q-2-1_{q\ge3}$, while a noninnovation edge contributes $q-1$; the resulting total is $N-2k-t$. [F1, F2, F3, step 1.1, algebra, step 3.1]

5.1 **Coding bound, including a replacement for Lemmas 5.5–5.6.** At each time keep the forest $F$ of innovation edges seen exactly once. At a T3 step the endpoint is selected among the neighbors of the current vertex in $F$. Call the step regular if there are at least two such neighbors; otherwise its endpoint is forced. Let $Q$ be the number of nonempty edge components of $F$ not containing the current vertex. An innovation leaves $Q$ unchanged. A regular T3 step increases $Q$ by one (deleting its edge leaves a nonempty component on the departure side); an irregular T3 leaves $Q$ unchanged. A T4 step leaves $F$ unchanged and changes $Q$ by at most one. Since $F$ starts and ends empty, there are at most $d$ regular T3 steps. [F1, F2, F3, step 1.1, algebra, step 4.1]

6.1 At any time the degree of the current vertex in $F$ is at most $2t+1$. To prove this, delete that vertex from the full innovation tree. Each incident open edge determines one branch. Except for the possible branch containing the initial vertex, the prefix walk crosses the cut of such a branch an even number of times. Its innovation-tree edge has been crossed exactly once, so some T4 class must cross this cut with odd multiplicity. A fixed T4 edge can join at most two branches at the deleted vertex. There are $t$ classes, proving the bound. This parity argument allows classes whose first T4 occurrence is in the future by harmless overcounting. [F1, F2, F3, step 1.1, algebra, step 5.1]

7.1 Given innovation and T3 positions, choose the $t$ T4 edge classes in at most $(k+1)^{2t}$ ways and assign all T4 positions to classes in at most $t^d$ ways. Innovation endpoints are forced by canonical order. At any T3 position there are at most $2t+1$ choices, and at most $d$ positions can be regular. A decision tree of depth at most $d$ with branching at most $2t+1$ has at most $(2t+1)^d$ leaves (pad shorter branches with forced dummy choices); no separate selection of regular positions is required. T4 endpoints are forced by current vertex and chosen class, or the code is invalid. Thus the remaining coding factor is at most $(k+1)^{2t}t^d(2t+1)^d\le(k+1)^{2t}3^d(t+1)^{2d}$. Interpret $0^0=1$. [F1, F2, F3, step 1.1, algebra, step 6.1]

8.1 In block $b$, let $a_b$ count adjacent innovation/noninnovation pairs. Such a pair must have a NEW noninnovation edge: its departure vertex was just introduced, and immediate reversal is prohibited inside a block. It is therefore the first T4 occurrence of its class. Consequently $\sum a_b\le t$. Innovation runs have at most $a_b+1$ components; their alternating row/column innovations differ in number by at most one each. If $r,s$ count row and column innovations, then $k=r+s$ and $|r-s|\le t+2m$. Hence $r\ge(k-t-2m)/2$. [F1, F2, F3, step 1.1, algebra, step 7.1]

9.1 For given $a_b$, innovation positions in block $b$ have at most $\binom{2\ell+1}{2a_b+1}$ patterns: a binary string with $a_b$ transitions $1\to0$ has this count, by specifying its alternating run endpoints, including a possible terminal run. Their product is at most $(2\ell+1)^{2t+2m}$. There are at most $(\ell+1)^{2m}$ choices of the $a_b$. Once innovation positions are fixed, T3 positions have at most $\binom{N-k}{k}$ choices. Labelings contribute at most $p^{r+1}n^s=n^{k+1}y_n^{r+1}\le n^{k+1}y_n^{(k-t-2m)/2}$, for $0<y_n\le1$. [F1, F2, F3, step 1.1, algebra, step 8.1]

10.1 Combining all factors, with $A=(2\ell+1)(\ell+1)$, gives $$E\operatorname{tr}T_\ell^{2m}\le nA^{2m}y_n^{-m}\sum_{1\le k\le N/2}\binom{N-k}{k}y_n^{k/2}\delta_n^{N-2k}3^{N-2k}\sum_{t=0}^{N-2k}q_{n,k}^{t}(t+1)^{2(N-2k)},$$ where $q_{n,k}=C(2\ell+1)^2(k+1)^2/(\sqrt{ny_n}\delta_n)$. This derivation uses absolute values and requires no symmetry of the real entry law. [F1, F2, F3, step 1.1, algebra, step 9.1]

11.1 Uniformly in $k$, $q_{n,k}=n^{-1/2+o(1)}$. Set $a=-\log q_{n,k}$, so eventually $(\log n)/3\le a\le\log n$. For $d\ge1$, $$\sum_{t\ge0}e^{-at}(t+1)^{2d}\le2e^{a/2}\max\{1,(4d/(ae))^{2d}\}\le2n\,[C_1\max\{1,N/\log n\}^2]^d.$$ Indeed split the exponential into two halves, sum one geometric factor, and maximize $u^{2d}e^{-au/2}$ for $u=t+1\ge1$. For $d=0$ the finite inner sum is exactly one. Thus, after enlarging a fixed constant, let $\varepsilon_n=C_2\delta_n\max\{1,N/\log n\}^2\to0$; the trace is at most $$2n^2A^{2m}y_n^{-m}\sum_k\binom{N-k}{k}y_n^{k/2}\varepsilon_n^{N-2k}\le2n^2A^{2m}y_n^{-m}(y_n^{1/4}+\varepsilon_n)^N.$$ [F1, F2, F3, step 1.1, algebra, step 10.1]

12.1 For the final inequality, $\binom{N-k}{k}\le\binom N{2k}$: map a $k$-subset of $\{1,\ldots,N-k\}$ to the $2k$-subset formed by the adjacent pairs $(b_i+i-1,b_i+i)$; these are disjoint and recover the original subset. The sum is consequently bounded by the binomial expansion with nonnegative coefficients. Since $N=4m\ell$, the last display equals $2n^2[A y_n^{(\ell-1)/2}]^{2m}(1+o(1))^N$. [F1, F2, F3, step 1.1, algebra, step 11.1]

13.1 For $\eta>Ay^{(\ell-1)/2}$, Markov's inequality gives $P(\|T_\ell\|\ge\eta)\le2n^2e^{-cm}$ eventually, which is summable since $m/\log n\to\infty$. Borel–Cantelli and a countable sequence of $\eta$ prove the stated fixed-length norm bound. This completes all graph estimates locally. [F1, F2, F3, step 1.1, algebra, step 12.1]

14.1 In particular, $\limsup\|T_1\|\le6$. Since $YY^{\mathsf T}=T_1+D$ with $D=\operatorname{diag}(YY^{\mathsf T})$ and $\|D-I\|\to0$ by F1, $\limsup\|Y\|^2\le7$. On the event of eventual truncation equality, the original oriented normalized matrix differs from $Y$ by the constant matrix with every entry $\mu_h/\sqrt{N_h}$. Its norm is $\sqrt{p}\,|\mu_h|\to0$ by F1, since a constant $p\times n$ matrix of entry $a$ maps a vector to $a$ times its coordinate sum in every row and has norm $|a|\sqrt{pn}$. Thus the original normalized matrices have an eventual finite norm bound. Changing the normalization from $\sqrt{N_h}$ to $\sqrt h$ multiplies this norm by the bounded factor $\sqrt{N_h/h}$. This proves the independent coarse bound. [F1, step 1.1, F2, algebra, step 13.1] ∎
