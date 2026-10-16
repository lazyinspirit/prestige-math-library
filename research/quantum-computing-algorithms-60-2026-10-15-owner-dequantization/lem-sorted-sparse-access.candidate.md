---
id: lem-qa-25-sorted-xor-sparse-access-isometries
kind: lemma
title: Clean sparse-state preparation from sorted XOR locations
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qc-coherent-function-oracle
  - def-qa-22-block-encoding
  - def-qc-dirac-notation-conversion
  - def-qc-state-preparation-cost-model
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemmas 47–48
      url: https://arxiv.org/pdf/1806.01838
    - title: Ronald de Wolf, Quantum Computing Lecture Notes, Chapter 9 §9.4 Example 2
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $H$ have the exact sorted $d$-sparse Hermitian XOR-location/value interface of [[def-qa-20-sparse-hamiltonian-oracle-model]], with $N,d\ge1$. Put $M=2^{\lceil\log_2(N+d)\rceil}$ and $\widetilde H=H\oplus0$ on the $M$-label register. Given a positive certified bound $h\ge\max_{i,j}|H_{ij}|$, an exact costed preparation $d^{-1/2}\sum_{l<d}|l\rangle$, and costed exact value-decoding and flag-rotation arithmetic, one can construct a unitary whose clean block is $\widetilde H/(dh)$. It and its actual adjoint and coherent controlled versions use $O(\log(d+1))$ QA20 location calls and $O(1)$ value calls each. Index bits, reversible workspace, search arithmetic, comparisons, uniform preparation, flags and gate precision remain separately charged. In particular $h=1$ is admissible when $\|H\|_{\rm op}\le1$, without computing the global maximum entry. The stronger separately supplied in-place-location interface keeps its original constant location-call count.

## Facts & Assumptions

**Given:** The exact finite input interfaces and separately costed operations of the Statement; no gate-count or bit-time bound for the supplied exact arithmetic is assumed.

[F1] [[def-qa-20-sparse-hamiltonian-oracle-model]] lists each row's nonzero column indices once in strictly increasing order, uses a distinguished missing-slot sentinel, supplies total coherent XOR maps, and makes invalid-value entries zero.

[F2] [[def-qc-coherent-function-oracle]] describes reversible total-function XOR evaluation. A classical finite reversible computation may retain its history, copy its answer and uncompute the history; each named oracle call and its reversal is charged.

[F3] [[def-qa-22-block-encoding]] defines the clean auxiliary compression of a unitary. [[def-qc-dirac-notation-conversion]] fixes matrix coordinates: with the root pairing linear in its first argument, the matrix entry of $U_L^*U_R$ is $\langle U_R(0,j),U_L(0,i)\rangle$.

[F4] [[def-qc-state-preparation-cost-model]] charges the actual uniform-state preparation, inverse, arithmetic and controlled implementations separately.

## Proof

1.1 For $x<M$ and $l<d$, let $F_x(l)$ be the listed column if $x<N$ and that slot exists, and $N+l$ otherwise; set $F_x(l)=0$ on $l\ge d$. This is a total function of finite bitstrings. On $[d]$ it is strictly increasing: actual indices are distinct, sorted and below $N$, followed by distinct pads $N+l$. All outputs are below $N+d\le M$. For an invalid $x$, use a valid dummy query input and mask its answer, giving exactly the padded branch. The same masking handles padded physical slot strings. Every masked or externally controlled XOR evaluation can use two ordinary calls: compute the function to clean work, conditionally XOR-copy it to the desired target, and uncompute. Thus no controlled oracle is assumed free. [given, F1, F2, algebra, construct]

1.2 For each $x,y<M$, compute a total inverse lookup $G_x(y)$ by lower_bound search of the strictly increasing list $F_x(0),\ldots,F_x(d-1)$. Start $lo=0,hi=d$; for $\lceil\log_2(d+1)\rceil+1$ rounds, if $lo<hi$, set $m=\lfloor(lo+hi)/2\rfloor$ and update $lo=m+1$ if $F_x(m)<y$, otherwise $hi=m$. In inactive rounds use a masked dummy call. Each active interval shrinks to at most the ceiling of half its old width, and width one becomes zero at the next round, so the stated round count suffices. If the final $lo<d$ and $F_x(lo)=y$, output $lo$; otherwise output zero. Retain and then reverse the fixed finite search history after copying its answer, so all history and oracle workspace are clean. There are $O(\log(d+1))$ forward/reverse location calls including the final equality test. Strict increase gives $G_x(F_x(l))=l$ for every $l<d$, including $l=0$; off the image no inversion is asserted. [F1, F2, step 1.1, algebra, construct]

2.1 On two $\log_2M$-bit registers apply the total permutation circuit $|l,0\rangle\mapsto|l,F_x(l)\rangle\mapsto|l\mathbin{\mathrm{XOR}}G_x(F_x(l)),F_x(l)\rangle\mapsto|F_x(l),0\rangle$, where the middle map is XOR evaluation of $G_x$ into the first register and the final map swaps the registers. The displayed clean formula is asserted only on $l<d$ and follows from step 1.2. Each constituent is a total reversible gate sequence on every bitstring, so its actual inverse exists with the same query order. Coherent row labels and references are untouched. Applying the separately supplied uniform preparation first gives $d^{-1/2}\sum_{l<d}|F_x(l)\rangle$ with all additional work zero. This constructs the required row-neighbor and column-neighbor isometries; Hermiticity identifies the column list at $j$ with the row list at $j$. [F1, F2, F4, step 1.1, step 1.2, algebra, construct]

3.1 Let $V_L|0,i\rangle=d^{-1/2}\sum_{l<d}|i,F_i(l)\rangle$ and $V_R|0,j\rangle=d^{-1/2}\sum_{l<d}|F_j(l),j\rangle$, including the common zero work registers from step 2.1. Put $U_L=I_{\rm flag}\otimes V_L$. After $V_R$, compute $a_{ij}=\widetilde H_{ij}/h$ and apply the flag unitary with first column $(a_{ij},\sqrt{1-|a_{ij}|^2})^T$ and second column $(-\sqrt{1-|a_{ij}|^2},\overline{a_{ij}})^T$, then uncompute values and arithmetic. Its columns are orthonormal because $|a_{ij}|\le1$, so this defines $U_R$. Only $U_R$ inserts the value amplitude; $U_L$ has good-flag amplitude one. [given, F1, F4, step 2.1, algebra, construct]

3.2 By [F3], the clean $(i,j)$ matrix entry of $U_L^*U_R$ is $\langle U_R(0,j),U_L(0,i)\rangle$. For a valid nonzero $H_{ij}$, the ordered pair $(i,j)$ occurs once on each side, with coefficients $H_{ij}/(h\sqrt d)$ and $1/\sqrt d$, respectively. Their root pairing is $H_{ij}/(dh)$. A zero or invalid entry contributes zero even if its padded pair happens to match, since its good-flag value amplitude is zero. Every value workspace has been uncomputed, and each location workspace is zero by step 2.1, so no unmatched work suppresses the desired overlap. This proves the exact compressed block, including zero rows, $H=0$, $d>N$, $N=1$, $d=1$, padded labels and repeated sentinel replies. [F1, F3, step 2.1, step 3.1, algebra]

4.1 Each clean location circuit uses $O(\log(d+1))$ QA20 location calls by steps 1.1–2.1, and computing/uncomputing its value uses a constant number of value calls. Reversing the actual circuit has identical counts. Coherently controlling it controls all known gates, and step 1.1 replaces each controlled XOR query by a constant number of ordinary XOR queries; hence the same asymptotic holds. All other operations remain in [F4]'s separate cost coordinates. Finally $|H_{ij}|=|\langle H e_j,e_i\rangle|\le\|H\|_{\rm op}$, so $h=1$ is a valid supplied bound in the normalized HHL mode. [F1, F2, F4, step 1.1, step 1.2, step 2.1, step 3.2, algebra] ∎
