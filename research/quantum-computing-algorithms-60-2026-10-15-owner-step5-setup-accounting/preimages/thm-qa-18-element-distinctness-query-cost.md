---
id: thm-qa-18-element-distinctness-query-cost
kind: theorem
title: "Element-distinctness O(N^{2/3}) query bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-18-element-distinctness-johnson-walk
  - thm-qa-18-reversible-search-cost
  - lem-qa-18-johnson-walk-spectrum
  - lem-qa-18-johnson-stored-data-query-access
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument uses finite subset counts and the finite reversible-walk search theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, Theorems 4–5 and §§3–4"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §§20.1–20.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.3.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Let $N\ge4$, $f:[N]\to\mathcal V$ be given by the coherent value oracle in [[def-qa-18-element-distinctness-johnson-walk]], and suppose some distinct $a,b$ satisfy $f(a)=f(b)$. For any $2\le r\le\lfloor N/2\rfloor$, the lazy Johnson walk has absolute gap $\delta=N/[2r(N-r)]$, marked stationary mass at least $\varepsilon=r(r-1)/[N(N-1)]$, stored-vertex setup value-query cost $r$, elementary replacement-update cost $2$, and check cost $0$. The controlled row-access construction of [[lem-qa-18-johnson-stored-data-query-access]] supplies stationary edge-state setup at most $r+2$, controlled row reflection at most $4$, and controlled two-reflection walk/inverse at most $8$ value queries. The reversible-walk finding theorem therefore gives a constant-success marked-subset finder with

$$r+O\!\left(\frac{N}{\sqrt r}\right)$$

value queries. Taking $r=\min\{\lfloor N/2\rfloor,\max\{2,\lfloor N^{2/3}\rfloor\}\}$ gives $O(N^{2/3})$ queries. A measured marked subset contains a colliding pair among its stored values, which can be output without further value queries; comparison gates are separate resources.

## Facts & Assumptions

**Given:** The Johnson walk and stored-value query convention of [[def-qa-18-element-distinctness-johnson-walk]], its spectrum, and the reversible-walk finding guarantee.

[F1] [[lem-qa-18-johnson-walk-spectrum]]: for $2\le r\le N/2$, the lazy Johnson walk has nonnegative eigenvalues and absolute gap $N/[2r(N-r)]$.

[F2] [[def-qa-18-element-distinctness-johnson-walk]]: states are uniform $r$-subsets; the marked condition is that some pair in the subset has equal function values; setup costs $r$ value queries, a replacement update costs $2$, and checking the stored values costs no value queries.

[F3] [[thm-qa-18-reversible-search-cost]]: with a supplied gap lower bound $\delta_0\le\delta$ and marked stationary-mass lower bound $0<\varepsilon_0<1/2$, finding costs $S_0+O(\varepsilon_0^{-1/2}(\delta_0^{-1/2}U_0+C))$, where $S_0$ prepares the stationary edge state and $U_0$ bounds controlled $W$, controlled $W^*$, and the controlled row-space reflection.

[F4] [[lem-qa-18-johnson-stored-data-query-access]]: encoded Johnson row preparation, inverse and controlled access use at most two value queries per call; controlled row reflection uses at most four, controlled $W$ and its inverse at most eight, stationary edge setup at most $r+2$, and checking zero.

## Proof


1.1 The total number of $r$-subsets is $\binom Nr$. The number containing a fixed pair $\{a,b\}$ is $\binom{N-2}{r-2}$, so its uniform probability is $\frac{\binom{N-2}{r-2}}{\binom Nr}=\frac{r(r-1)}{N(N-1)}.$ Every subset containing this colliding pair is marked, so the marked stationary mass is at least this value. [given, algebra]

2.1 Apply [F1] to the lazy walk in [F2]. Its stationary law is uniform and its absolute gap is the displayed $\delta$; the nonnegative spectrum rules out a negative-eigenvalue obstruction to the absolute gap. For any positive rational $q\le1$, let $\operatorname{dyad}(q)=2^{-j}$ for the least integer $j\ge0$ with $2^{-j}\le q$; exact rational comparisons compute it and give $q/2\le\operatorname{dyad}(q)\le q$. Supply the dyadic lower gap bound $\delta_0=\operatorname{dyad}(\delta)$. The initial stored list requires one query for each of its $r$ values. Replacing one selected index by one unselected index erases the old stored value with one inverse value query and loads the new value with one forward value query. The marked check compares the already stored values, so it costs no additional value query. Explicitly, the basis permutation $|S,d,b\rangle\mapsto|S,d,b\mathbin\oplus c(d)\rangle$, where $c(d)$ is the collision bit of the stored list, is a clean coherent check: it preserves the list, needs no value-oracle call, and is its own inverse. Tensoring identity on every other existing register gives exactly the check interface in [F3]; its fresh-flag Lüders readout and inverse therefore add zero value queries as well, with gates and readout resources separate. These are stored-vertex setup and elementary replacement costs. The coherent row construction [F4] separately supplies the stronger access inputs required by [F3], with stationary edge setup $S_0\le r+2$, common controlled-walk/inverse/row-reflection bound $U_0=8$, and $C=0$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Put $\varepsilon_*=r(r-1)/[N(N-1)]$ and supply the dyadic lower marked-mass bound $\varepsilon_0=\operatorname{dyad}(\varepsilon_*)$. For $r\ge2$ and $N\ge4$, $r-1\ge r/2$ and $N(N-1)\le N^2$, hence $\varepsilon_*\ge r^2/(2N^2)$ and $\varepsilon_0\ge\varepsilon_*/2\ge r^2/(4N^2)$. Also $r\le N/2$ gives $\delta=N/[2r(N-r)]\ge1/(2r)$, so $\delta_0\ge\delta/2\ge1/(4r)$ by step 2.1. Since $r\le N/2$, $\varepsilon_*\le(N-2)/(4(N-1))<1/2$, so [F3] applies even if the actual marked mass is larger. Run the wrapper with the dyadic failure target $\rho=1/2$. By [F3] and [F4], its query bound is $r+2+O\!\left(\frac{1}{\sqrt{\varepsilon_0}}\frac{8}{\sqrt{\delta_0}}\right)\le r+O\!\left(\frac Nr\sqrt r\right)=r+O(N/\sqrt r)$, with the additive $2$ absorbed since $N/\sqrt r\ge1$. The measured set is marked; by [F2] it contains two indices with equal stored values, and scanning those $r$ stored values identifies such a pair without a new value-oracle query. [F2, F3, F4, step 2.1, algebra]

4.1 For $N\ge8$, $N^{2/3}\le N/2$; for $4\le N\le7$, the displayed clamp selects an admissible integer in $[2,\lfloor N/2\rfloor]$. The clamp differs from $N^{2/3}$ by only fixed factors over this finite range and is $\Theta(N^{2/3})$ for all $N\ge4$. Therefore both $r$ and $N/\sqrt r$ are $O(N^{2/3})$. If $N\le3$, the definition specifies direct pairwise value comparison instead of a Johnson walk; querying each value once uses at most $N$ value queries. [F2, step 3.1, algebra] ∎

