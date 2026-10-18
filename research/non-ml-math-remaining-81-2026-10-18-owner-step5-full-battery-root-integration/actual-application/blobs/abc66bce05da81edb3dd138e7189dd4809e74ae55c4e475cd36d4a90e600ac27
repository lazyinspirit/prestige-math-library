---
id: lem-finite-right-n-module-frame-from-projection-model
kind: lemma
title: "Ordinary finite Jones index supplies a bounded finite Parseval frame"
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-von-neumann-algebra-and-commutant
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - lem-finite-factor-projection-comparison-and-normalized-trace
  - lem-finite-index-bounded-vector-pull-down
  - def-extremal-finite-index-ii1-subfactor-data
  - lem-tracial-hilbert-module-dimension-and-finite-corners
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assume AC. Zorn supplies maximal orthogonal families and cyclic decompositions. AC supplies the hypotheses of the published functional analytic suppliers; all nonseparable index sets are allowed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Anantharaman and Sorin Popa, An Introduction to II1 Factors"
      url: "https://www.math.ucla.edu/~popa/Books/IIun.pdf"
      locator: "Proposition 9.4.8 (p. 150), complete proof read, together with Proposition 8.6.1 (p. 134). Local proof derives the finite bounded coordinates and complete module model from ordinary finite Jones index."
---

## Statement

Assume AC. Under the ordinary finite-index hypotheses of [[lem-finite-index-bounded-vector-pull-down]] there are a finite
integer $k$, elements $u_1,\ldots ,u_k\in M$ and a projection $p\in M_k(N)$ such that

- $\sum  u_j e u_j^*=1$ on $L^2(M)$;
- $x=\sum  u_j E_N(u_j^*x)$ for all $x\in M$;
- $\sum  \tau (u_j^*u_j)=\lambda $ and $\sum  u_j u_j^*=\lambda 1$;
- $U:M\to pN^k$, $U(x)=(E_N(u_j^*x))_j$, is an onto right-module unitary
  for the $N$-valued inner product $E_N(x^*y)$;
- $p_{ij}=E_N(u_i^*u_j)$ and $(\operatorname{Tr}_k\otimes \tau _N)(p)=\lambda $.

In particular $M$ is complete in the norm $\|E_N(x^*x)\|^{1/2}$ and the
bounded coordinate representatives are exactly $u_j=U^{-1}(p \varepsilon _j)$.
Furthermore $\|x\|\le \sqrt{\lambda}\|E_N(x^*x)\|^{1/2}$ for $x\in M$.

The map $U$ also extends to a right-module Hilbert-space unitary $L^2(M)\cong pL^2(N)^k$. Consequently $\operatorname{End}_N(L^2(M))\cong pM_k(N)p$, every such endomorphism preserves $M$, and for its matrix $a=(a_{ij})\in pM_k(N)p$ one has $T(x)=\sum_{i,j}u_i a_{ij}E_N(u_j^*x)$ for every $x\in M$.

## Facts & Assumptions

**Given:** AC and the algebras, traces, Hilbert modules, and finite dimension hypotheses in the Statement.

[F1] AC permits Zorn maximality and implies Countable Choice and the ultrafilter lemma required by the Hilbert and compactness suppliers. ([[def-axiom-of-choice]])

[F2] A concrete von Neumann algebra is a WOT-closed unital star-algebra; commutants are WOT closed and multiplication by a fixed bounded operator is WOT continuous. ([[def-von-neumann-algebra-and-commutant]])

[F3] A faithful normal tracial state is positive, faithful, tracial, normalized, and WOT continuous on the operator unit ball. ([[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]])

[F4] In a factor projections are comparable; for finite-trace projections, trace inequalities characterize subequivalence. Diffuse factor corners are diffuse factors; a diffuse factor equipped with a faithful normal normalized trace has a unique normalized tracial state. ([[lem-finite-factor-projection-comparison-and-normalized-trace]])

[F5] For ordinary finite Jones index, the commutant of right N is the basic construction, has finite canonical trace of total mass lambda, and satisfies bounded pull-down: Te=xe for unique x in M. All right-N bounded vectors of L2(M) belong to M. ([[lem-finite-index-bounded-vector-pull-down]])

[F6] The ordinary-index contract supplies a unital II1 subfactor inclusion $N\subseteq M$, with $\lambda=\dim_N L^2(M)<\infty$. Extremality is unused in this lemma; the module model is derived in the proof. ([[def-extremal-finite-index-ii1-subfactor-data]])

[F7] Every Hilbert right module has its matrix-entry commutant algebra; in a finite projection model this is the corner $pM_k(N)p$. ([[lem-tracial-hilbert-module-dimension-and-finite-corners]])

## Proof

**Given:** The hypotheses of the Statement and the stated prerequisite contracts.

1.1 In the finite factor $B$ choose orthogonal projections $q_1,\ldots ,q_k$ summing to $1$ with $q_j\precsim e$. This is a finite construction: while the remainder has trace greater than $1$, comparison lets one remove a projection equivalent to $e$; after at most $\lfloor\lambda\rfloor$ such removals, the remainder has trace at most $1$ and hence is subequivalent to $e$. If $\lambda $ is an integer, the final remainder can be zero and is discarded. Since $\operatorname{Tr}_B(e)=1\le \operatorname{Tr}_B(1)=\lambda $, this also proves $\lambda \ge 1$. Choose partial isometries $v_j$ with $v_jv_j^*=q_j$ and $v_j^*v_j\le e$; then $v_j=v_j e$. Pull-down writes $v_j=u_j e$ with $u_j\in M$. Thus $\sum u_j e u_j^*=1$. Applying this to $x\in M$ proves the frame identity. Taking $\operatorname{Tr}_B$ gives $\sum \tau (u_j^*u_j)=\lambda $; applying $F$ to the same identity gives $\sum u_j u_j^*=\lambda 1$. [F1, F2, F3, F4, F5, F6, given]

2.1 Let $V:L^2(N)^k\to H$ be $V((n_j))=\sum u_j n_j$; then $VV^*=1$ and $V^*V=p=(E_N(u_i^*u_j))_{ij}$. Hence $p=p^*=p^2$ and $U=V^*$ is an isometry on Hilbert spaces with image $pL^2(N)^k$. On bounded elements, $U(M)\subseteq pN^k$, and for each $a\in pN^k$, $x=\sum u_j a_j\in M$ satisfies $U(x)=pa=a$, proving bounded-module surjectivity. Directly, $\langle U(x),U(y)\rangle _N=\sum  E_N(x^*u_j)E_N(u_j^*y)=E_N(x^*y)$ by the frame identity. Thus this is an $N$-valued isometry, not merely an $L^2$ isometry. The finite column module $pN^k$ is complete: its norm is the operator norm of its column in the C*-algebra of $(k+1)$-by- $(k+1)$ matrices over $N$, and its range is closed because $p$ is a bounded idempotent. This proves the required completeness. Matrix trace gives $(\operatorname{Tr}_k\otimes \tau _N)(p)=\sum \tau (u_j^*u_j)=\lambda $, and $V(p \varepsilon _j)=VV^*V \varepsilon _j=u_j$ gives the specified coordinate compatibility. [F1, F2, F3, F4, F5, F6, step 1.1]

3.1 Finally, $xex^*\le \|E_N(x^*x)\|1_B$: its norm is $\|V_xV_x^*\|=\|V_x^*V_x\|=\|E_N(x^*x)\|$, and it is positive. Applying positive $F$ yields $\lambda ^{-1} xx^*\le \|E_N(x^*x)\|1_M$, proving the norm estimate. This also gives an independent completeness proof by norm equivalence, since $\|E_N(x^*x)\|^{1/2}\le \|x\|$ and $M$ is operator-norm complete. [F1, F2, F3, F4, F5, F6, step 2.1]


4.1 The scalar trace of the $N$-valued inner-product identity proves that $U$ preserves the Hilbert-space norm. Its bounded range $pN^k$ is dense in $pL^2(N)^k$, so it extends to an onto Hilbert-space unitary. Under this unitary every bounded right-$N$ endomorphism is a matrix in $pM_k(N)p$ by the matrix-entry commutant calculation of [[lem-tracial-hilbert-module-dimension-and-finite-corners]]. Such a matrix preserves $pN^k$. Transporting it back by $U^{-1}((a_i))=\sum_i u_i a_i$ gives the asserted finite formula and preservation of $M$. [F1, F2, F3, F4, F5, F6, F7, step 3.1] ∎
