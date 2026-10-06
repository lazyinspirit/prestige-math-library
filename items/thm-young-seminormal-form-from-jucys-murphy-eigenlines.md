---
id: thm-young-seminormal-form-from-jucys-murphy-eigenlines
kind: theorem
title: "Young's seminormal form from the Jucys-Murphy eigenlines"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors, thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis, lem-jucys-murphy-local-relations, def-young-tableau-standard-tableau-and-shape, def-content-vector-of-a-standard-tableau, def-jucys-murphy-elements-of-the-symmetric-group-algebra, def-partition-young-diagram-and-conjugate-partition, lem-a-partition-is-determined-by-its-multiset-of-node-contents]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, sections 4-6, printed pp. 15-23"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorems 4.2-4.4, printed pp. 26-32"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-19.md"
      - "research/frontier-38-owner-30-alpha-batch-19-5a.md"
      - "research/frontier-38-owner-30-step5-hash-19-post-5a.json"
    content_sha256: "a9c55b4a8e06613ad3a46e58c058a0bfc44c611e8cde3ac958fc59e68be7dac6"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $n\ge1$, $\lambda\vdash n$, and $T^\lambda$ be the standard row-filled
tableau of shape $\lambda$. Fix $0\ne v_0\in L_{T^\lambda}$, where $L_T$
is the Young line of $T$. Let $\sigma_T$ be the unique permutation carrying
$T^\lambda$ to $T$, put $\ell(T):=\operatorname{inv}(\sigma_T)$, and define
$$v_T:=P_T\sigma_Tv_0.$$
These vectors are nonzero and form a basis of $S^\lambda_{\mathbb C}$.
For $s_i=(i\ i+1)$ and $r=c_T(i+1)-c_T(i)$, the same-row and same-column
cases give $s_iv_T=v_T$ and $s_iv_T=-v_T$, respectively. Otherwise
$T'=s_iT$ is standard and $|r|>1$. When $\ell(T')=\ell(T)+1$,
$$s_iv_T=v_{T'}+r^{-1}v_T,\qquad s_iv_{T'}=(1-r^{-2})v_T-r^{-1}v_{T'}.$$
When $\ell(T')=\ell(T)-1$, the equivalent formulas in the original ordering are
$$s_iv_T=(1-r^{-2})v_{T'}+r^{-1}v_T,\qquad s_iv_{T'}=v_T-r^{-1}v_{T'}.$$
In particular the matrices of the Coxeter generators in this basis are rational.

## Facts & Assumptions

**Given:** $n,\lambda,T^\lambda$, its nonzero Young vector $v_0$, and the Young projections $P_T$ and lines $L_T$ in $S^\lambda_{\mathbb C}$.

[F1] The Young lines form a basis of each complex Specht module, and $P_Tv=\delta_{TS}v$ for $v\in L_S$. ([[thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis]])

[F2] On $L_T$, $X_k$ acts by $c_T(k)$. The content vector uniquely determines a standard tableau, and these are exactly the joint weights in the multiplicity-free sum of complex Specht modules. ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]], [[def-content-vector-of-a-standard-tableau]])

[F3] The local relations give $X_is_i=s_iX_{i+1}-1$, $X_{i+1}s_i=s_iX_i+1$, and $X_js_i=s_iX_j$ for $j\notin\{i,i+1\}$; also $s_i^2=1$. ([[lem-jucys-murphy-local-relations]])

[F4] Standard tableaux increase along rows and columns; the row-filled tableau orders the nodes row by row. Consecutive entries in a common row or column occupy adjacent nodes, with content difference $+1$ or $-1$. ([[def-young-tableau-standard-tableau-and-shape]], [[def-content-vector-of-a-standard-tableau]], [[def-partition-young-diagram-and-conjugate-partition]])

[F5] The multiset of node contents determines a partition. ([[lem-a-partition-is-determined-by-its-multiset-of-node-contents]])

## Proof

**Proof technique:** local eigenvector calculation and reduced-chain normalization.

1.1 Swapping consecutive entries in different rows and columns preserves standardness: every neighbour other than the swapped entry is either smaller than both entries or larger than both. Such nodes must be incomparable in the northwest order, since comparable nodes in different rows and columns would have an intermediate node with entry strictly between $i$ and $i+1$. Their row and column differences therefore have opposite signs, so $|c_T(i+1)-c_T(i)|\ge2$. In a common row or column the nodes are adjacent and the difference is $+1$ or $-1$ by [F4]. Thus the axial distance never vanishes. [F4, algebra]

2.1 For $0\ne v\in L_T$, put $a=c_T(i)$, $b=c_T(i+1)$ and $r=b-a$. By [F3], $u:=(s_i-r^{-1})v$ is a joint eigenvector with the weight of $T$ having coordinates $i,i+1$ exchanged: $X_iu=bu$, $X_{i+1}u=au$, and the other eigenvalues are unchanged. If the nodes are in different rows and columns, [F2] identifies this weight with $T'=s_iT$. Moreover $u\ne0$, since $u=0$ would imply $s_iv=r^{-1}v$ and then $v=s_i^2v=r^{-2}v$, contrary to $|r|>1$. Hence $s_iL_T\subseteq L_T\oplus L_{T'}$, and its component in $L_{T'}$ is nonzero. [F1, F2, F3, step 1.1, algebra]

2.2 A reduced admissible chain joins $T^\lambda$ to each $T$. To construct it in reverse, let the last node in row order carry $k$ in $T$. Swap $k$ with $k+1$, then $k+1$ with $k+2$, through $n$. Every value larger than the current value in that node is in a different row and column: entries in its own row or column are smaller by standardness. The swaps are therefore admissible by step 1.1. In the row-reading word each swap moves the larger of two consecutive values from an earlier position to the final position, decreasing its inversion count by exactly one; all other inversion comparisons are unchanged. Remove the final node and entry $n$ and repeat. The process reaches $T^\lambda$ after exactly $\ell(T)$ swaps, since the row-reading word is the one-line notation of $\sigma_T$ and the final word has no inversions. Reversing this chain gives the asserted reduced chain. [F4, step 1.1, algebra]

3.1 In the same-row or same-column case, the exchanged weight is not a tableau weight. Indeed, uniqueness of reconstruction from contents fixes the prefix through $i-1$, while equality of the content multisets through $i+1$ fixes that prefix shape by [F5]. Thus the two new nodes must be the original nodes of $i,i+1$, with their entries exchanged. The node originally carrying $i+1$ cannot be added first, because its immediate left or upper neighbour is the still-absent node of $i$. This violates standardness. By [F2] the vector $u$ of step 2.1 is zero, giving $s_iv=r^{-1}v$, hence $+v$ in the row case and $-v$ in the column case. [F2, F4, F5, step 2.1, algebra]

4.1 Expand $\sigma_Tv_0$ along such a reduced chain of length $L=\ell(T)$ using [F1] and steps 2.1 and 3.1. At each factor a vector in a Young line either stays in that line or passes to its admissible neighbour; every neighbour changes the inversion count by one, and the component passing to it is nonzero by step 2.1. To reach a line of inversion count $L$ after $L$ factors, every factor must pass to the neighbour and increase the count. This unique sequence is the reduced chain to $T$, and its product of nonzero coefficients is nonzero. All other resulting lines have length less than $L$. Therefore $v_T=P_T\sigma_Tv_0\ne0$ and $\sigma_Tv_0-v_T$ is a linear combination of lines $L_R$ with $\ell(R)<\ell(T)$. The permutation $\sigma_T$ is uniquely determined by the fillings, so this definition does not depend on a reduced expression. [F1, step 2.1, step 3.1, step 2.2, algebra]

5.1 Suppose $T'=s_iT$ is standard and $\ell(T')=\ell(T)+1$. The unique permutations obey $\sigma_{T'}=s_i\sigma_T$. By step 4.1, write $\sigma_Tv_0=v_T+w$, with $w$ supported on lines of length strictly less than $\ell(T)$. Steps 2.1 and 3.1 show that $s_iw$ is supported on lines of length at most $\ell(T)$, so $P_{T'}s_iw=0$. Hence $v_{T'}=P_{T'}s_i\sigma_Tv_0=P_{T'}s_iv_T$. Together with step 2.1 this gives $s_iv_T=v_{T'}+r^{-1}v_T$. Applying $s_i$ once more and using $s_i^2=1$ yields $s_iv_{T'}=(1-r^{-2})v_T-r^{-1}v_{T'}$. [F1, F3, step 2.1, step 3.1, step 4.1, algebra]

6.1 If $T'$ is shorter, apply step 5.1 to the pair $(T',T)$ with axial distance $-r$. It gives $s_iv_{T'}=v_T-r^{-1}v_{T'}$ and $s_iv_T=(1-r^{-2})v_{T'}+r^{-1}v_T$, as stated. The vectors $v_T$ form a basis by [F1] and step 4.1. Steps 3.1, 5.1 and this reverse reading give rational matrices for every generator, with no zero denominator. They are matrices of the actual group action, so satisfy all Coxeter relations and define a rational representation whose complexification is the given Specht module. The chain construction and projections are finite; no arbitrary-index choice is used. [F1, step 3.1, step 4.1, step 5.1, algebra] ∎

## Remarks

The normalization uses the unique label permutation $\sigma_T$, not a choice of reduced word. The length condition specifies which off-diagonal coefficient equals $1$. The reduced-chain expansion in steps 4.1-5.1 supplies the compatibility needed for all adjacent pairs simultaneously; compare Okounkov–Vershik, Lemma 5.4 and Remark 5.6, printed pp. 20–21, and equations (6.1)–(6.4), printed pp. 22–23.
