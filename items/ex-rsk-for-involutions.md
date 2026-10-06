---
id: ex-rsk-for-involutions
kind: example
title: RSK pairs for two nonidentity involutions
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-involutions-are-counted-by-standard-tableaux, cor-rsk-symmetry-under-inversion, thm-robinson-schensted-correspondence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for ex-rsk-for-involutions and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-9; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"18d25ab067dadf0a9cbe5fcf44e764eee53d92d016d7302516ef4f9e9b176a15","evidence":["research/frontier-38-owner-30-reader-9.md","research/frontier-38-owner-30-reader-findings-9.json","research/frontier-38-owner-30-dispatch/reader-reader-9.result.json","research/frontier-38-owner-30-step5-hash-9-post-5a.json","research/frontier-38-owner-30-alpha-batch-9-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-9.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/ex-rsk-for-involutions.md","historical_raw_sha256":"832acdea0419896b1a381c8e0cd6c1fc4f186aae2198f4964a167510fc2d62ba","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:30:27.180Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pages)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§8, printed p. 29: Remark 8.3, the P=Q characterization and the involution count; read in the full text."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§4, printed p. 719: Theorem 4, the symmetric-matrix specialization giving P=Q; read in the complete article as the symmetric counterpart."
    - title: "Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics (263 pp.)"
      url: "https://jeremymartinmath.github.io/CombinatoricsNotes.pdf"
      locator: "§9.10, the involution-count consequence of Proposition 9.10.9 (statement only); read in the full 263-page notes."
---

## Example

For $w=(2,1,4,3)$ row insertion gives
$$P=\begin{array}{ll}1&3\\2&4\end{array},\qquad Q=\begin{array}{ll}1&3\\2&4\end{array},$$
so $P=Q$ as required for the involution $w=w^{-1}$. For $w=(3,2,1)$ one gets
$P=Q=\begin{array}{l}1\\2\\3\end{array}$. The involution $(2,1,4,3)$ is not the
identity, so $P=Q$ is not equivalent to $P$ being a single row; for $n=3$ the
derivation $\sum_{\lambda\vdash3}f^\lambda=1+2+1=4$ matches the four
involutions $\mathrm{id},(1\,2),(1\,3),(2\,3)$ (in one-line form $123$, $213$,
$321$, $132$).

## Facts & Assumptions

**Given:** The words $w=(2,1,4,3)$ and $w=(3,2,1)$ and their RSK pairs, and the partitions of $3$.

[L1] A permutation is an involution exactly when its RSK pair satisfies $P=Q$; the map $w\mapsto P(w)$ is a bijection from the involutions of $\{1,\dots,n\}$ onto the standard tableaux with $n$ boxes ([[cor-involutions-are-counted-by-standard-tableaux]], [[cor-rsk-symmetry-under-inversion]]).

[L2] The RSK map is a bijection from the permutations of $\{1,\dots,n\}$ in one-line form onto the pairs of standard tableaux of common shape $\lambda\vdash n$ ([[thm-robinson-schensted-correspondence]]).

[F1] The partitions of $3$ are $(3),(2,1),(1,1,1)$; the standard tableaux with three boxes are $(1,2,3)$ of shape $(3)$, the two tableaux $(1,2;3)$ and $(1,3;2)$ of shape $(2,1)$, and $(1;2;3)$ of shape $(1,1,1)$, so $\sum_{\lambda\vdash3}f^\lambda=1+2+1=4$, and the number of involutions of $\{1,2,3\}$ equals this sum ([[cor-involutions-are-counted-by-standard-tableaux]]).

## Verification

**Proof technique:** direct.

1.1 ($w=(2,1,4,3)$.) Inserting $2,1$ gives the first column $(2)$, then $(1,2)$ after $1$ displaces $2$; inserting $4$ appends it at the end of the first row, giving $(1,4;2)$; inserting $3$ replaces $4$ in the first row and appends $4$ in the second row, giving $P=(1,3;2,4)$. The added boxes in order are $(1,1),(2,1),(1,2),(2,2)$, so $Q$ carries $1,2,3,4$ in those boxes, i.e. $Q=(1,3;2,4)=P$. [L2, given]

1.2 ($w=(3,2,1)$.) Inserting $3,2,1$ successively replaces the first row entry each time and appends downwards, giving the single column $P=(1;2;3)$; the added boxes are $(1,1),(2,1),(3,1)$, so $Q=(1;2;3)=P$. [L2, given]

2.1 (Consistency with the criterion.) Both words are involutions: $(2,1,4,3)=(1\,2)(3\,4)$ and $(3,2,1)=(1\,3)$, and in both cases step 1.1 or step 1.2 found $P=Q$, as [L1] requires; the shapes $(2,2)$ and $(1,1,1)$ are different, so $P=Q$ does not force a single shape. [L1, step 1.1, step 1.2, given]

2.2 (Not only single rows.) The identity $123$ has RSK pair $P=Q=(1,2,3)$ of one-row shape $(3)$, while the involution $w=(2,1,4,3)$ has $P=Q$ of shape $(2,2)$ by step 1.1 and the involution $(3,2,1)$ has $P=Q$ of shape $(1,1,1)$ by step 1.2. These non-row examples show that $P=Q$ is not equivalent to $P$ being a single row. [L1, step 1.1, step 1.2, given]

3.1 ($n=3$ count.) By [F1], $\sum_{\lambda\vdash3}f^\lambda=f^{(3)}+f^{(2,1)}+f^{(1,1,1)}=1+2+1=4$; the four involutions of $\{1,2,3\}$ are the identity $123$, the transpositions $(1\,2)=213$, $(1\,3)=321$ and $(2\,3)=132$, also four in number, matching the bijection of [L1] in size $3$. [F1, L1, step 1.2, algebra] ∎
