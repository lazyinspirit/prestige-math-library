# Final-adjudicator evidence: Dirichlet-series summatory integral

## Disposition

`repaired`

The Alpha's first repair correctly excluded the undefined $N=0$ endpoint by requiring an integer $N\ge1$. Its second repair correctly made the coefficient domain and the summatory function start at $1$, removing the counterexample in which an unmatched $a_0$ entered $A(x)$. The resulting statement was true, but the proof still said to apply the cited zero-indexed Abel lemma to $u_n=a_n$ even though the repaired carrier no longer defined $a_0$. I therefore repaired the cited-interface application rather than accepting it unchanged.

## Materials independently checked

I read the current theorem; `def-dirichlet-series`; the exact cited `lem-abel-summation-for-complex-series`; the alternative published Abel-summation item named by the batch design; the full `dirichlet-series-and-euler-products` A page and its B companion; the batch-8 manifest, coverage record, notes, proof contract, and moderate-risk classification; both exact judge rejections and adjudications; and both Alpha repair records. No item cites this theorem directly, and the page uses it only as the summatory-function bridge inside the positive-index Dirichlet-series convention.

The theorem's actual cited dependency is the correct one for complex coefficients. Its tail identity is indexed from $0$ and contains the term $s_{p-1}b_p$, so an application with $p=1$ must explicitly arrange that the zeroth partial sum is zero. The older real-sequence Abel item named in the planning manifest is not needed by the final proof.

## Source verification

- https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf — Tomczak's Theorem 2.1 writes Abel summation with sums beginning at $1$ and explicitly assumes $a_0=A_0=0$. Theorem 3.5 gives the Dirichlet-series summatory integral and its convergence on the appropriate strict right half-plane. These statements directly support the zero extension, endpoint term, and limiting argument used here.
- https://pub.math.leidenuniv.nl/~evertsejh/ant20-2.pdf — Evertse's Theorem 2.1.1 states partial summation for complex coefficients with $A(t)$ summing only the listed positive-index points, and Theorem 2.1.2 applies it to $g(t)=t^{-s}$, displaying the same endpoint term, integral, absolute tail bound, and vanishing boundary term.

## Mathematical verification and repair

I explicitly typed $\theta\in\mathbb R$. For an arbitrary integer $N\ge1$, step 1.1 now extends the coefficient sequence by $a_0:=0$, sets an irrelevant weight $b_0:=0$, and takes $b_n=n^{-s}$ for $1\le n\le N$. Thus the cited lemma's partial sums satisfy

$$
S_0=0,\qquad S_n=\sum_{k=0}^n a_k=A(n)\quad(1\le n\le N).
$$

Its $p=1,q=N$ tail identity therefore gives

$$
\sum_{n=1}^N a_n n^{-s}
=A(N)N^{-s}+\sum_{n=1}^{N-1}A(n)\bigl(n^{-s}-(n+1)^{-s}\bigr).
$$

For positive real $x$, the real-logarithm convention gives $(x^{-s})'=-s x^{-s-1}$. Since $A(x)=A(n)$ on $[n,n+1)$, summing the integrals of these differences proves the finite endpoint formula. At $N=1$, the interior sum and $\int_1^1$ are both zero and the identity reads $a_1=A(1)$, so the lower endpoint is genuine.

From $A(x)=O(x^\theta)$ there are $C>0$ and $x_0\ge1$ such that on the tail

$$
|A(x)x^{-s-1}|\le Cx^{\theta-\Re s-1}.
$$

Because $\Re s>\theta$, this majorant is integrable at infinity. On the compact initial interval, $A$ is a bounded step function and the remaining factor is continuous. Hence the improper integral converges absolutely. The same bound gives $|A(N)N^{-s}|\le CN^{\theta-\Re s}\to0$, so the finite identities prove convergence of the Dirichlet-series partial sums and their stated limit. The strict boundary $\Re s=\theta$ is not claimed. If $s=0$ is admitted because $\theta<0$, the same estimate gives $A(N)\to0$, so both sides are zero.

I regenerated the theorem's derivation in `research/frontier-29-batch-8.proof-contracts.json`, replaced its stale zero/one/endpoint boundary dispositions with checked evidence, added the completed moderate-risk review, and rebuilt `research/frontier-29-proof-contracts.json`. No dependency item or other queued item was changed, so no owner-prerequisite-repair licence was required.

Final item SHA-256 before recording: `54b1b6180d495f5b5bceb335d23a6a4994528f3c14748be329e74a33a397366f`.

## Focused checks

- Focused precheck: 1 checked, 0 failing.
- Renderer check on the theorem and both A/B page files: 3 files clean.
- Strict batch and merged proof-contract checks filtered to this theorem: 0 errors, 0 warnings.
- Batch-8 risk report with reviews required: theorem classified `MODERATE 4`; 0 errors over 45 items.
- Batch-8 boundary audit: no template reuse or contradicted dispositions.
- Batch-8 citation fidelity: 119 citations checked, no missing quote or widening candidate.
- Batch-8 content policy: 52 scoped items, 0 errors, 0 warnings.
- Full dependency check: success, with only the repository's standing warnings.

