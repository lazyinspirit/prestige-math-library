---
id: ex-bgg-reciprocity-matrix-for-sl2
kind: example
title: "The sl2 reciprocity matrices"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-verma-flag-and-its-multiplicities
  - ex-projective-covers-in-the-regular-sl2-block
  - thm-bgg-reciprocity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for ex-bgg-reciprocity-matrix-for-sl2 and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-7; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"3fdf0188978abea2d5c4b57ac0dddaf7a0f29213efca678ab47752318383d1f8","evidence":["research/frontier-38-owner-30-reader-7.md","research/frontier-38-owner-30-reader-findings-7.json","research/frontier-38-owner-30-dispatch/reader-reader-7.result.json","research/frontier-38-owner-30-step5-hash-7-post-5a.json","research/frontier-38-owner-30-alpha-batch-7-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-7.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/ex-bgg-reciprocity-matrix-for-sl2.md","historical_raw_sha256":"548673d9e000c8a3e1f9172ceba80c99af461b88b1382ebf5fd07d6e24c1a90f","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:44:13.402Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 2.2 with the rank-one computation"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§2, Theorem 2.2 and the sl2 computation, printed p. 4 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 20.2-20.3"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§20.2-20.3, the sl2 standard-composition and projective-flag matrices, printed pp. 101-105 (full text read at harvest)"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $\mathfrak g=\mathfrak{sl}_2$ and order the two labels of the regular
integral block as $(0,-2)$. The standard-composition matrix $D$ has rows
indexed by the Verma modules $\Delta(0),\Delta(-2)$ and columns by the simples
$L(0),L(-2)$, so
$$D=\begin{pmatrix}1&1\\0&1\end{pmatrix}:$$
$[\Delta(0):L(0)]=[\Delta(0):L(-2)]=1$, $[\Delta(-2):L(-2)]=1$ and
$[\Delta(-2):L(0)]=0$. The projective-flag matrix $F$ has rows indexed by the
projective covers $P(0),P(-2)$ and columns by the standards
$\Delta(0),\Delta(-2)$, so
$$F=\begin{pmatrix}1&0\\1&1\end{pmatrix}.$$
Thus $F$ is the transpose of $D$, which is the two-by-two instance of BGG
reciprocity $(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]$ proved in
[[thm-bgg-reciprocity]].

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$, the regular integral block with labels $0,-2$, and its standards, simples and projective covers.

[F1] The composition multiplicities of the two standards are $[\Delta(0):L(0)]=[\Delta(0):L(-2)]=[\Delta(-2):L(-2)]=1$ and $[\Delta(-2):L(0)]=0$, because $\Delta(0)=M(0)$ has the nonsplit composition series $L(-2),L(0)$ and $\Delta(-2)=M(-2)=L(-2)$ ([[ex-projective-covers-in-the-regular-sl2-block]]).

[F2] The Verma-flag multiplicities of the two covers are $(P(0):\Delta(0))=1$, $(P(0):\Delta(-2))=0$, $(P(-2):\Delta(0))=1$ and $(P(-2):\Delta(-2))=1$ ([[ex-projective-covers-in-the-regular-sl2-block]], [[def-verma-flag-and-its-multiplicities]]).

[F3] BGG reciprocity gives $(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]$ for all weights ([[thm-bgg-reciprocity]]).

## Verification

**Proof technique:** direct: read the two matrices off the sl2 computation and compare entries.

1.1 In the order $(0,-2)$ the standard-composition matrix with entries $D_{\lambda\mu}=[\Delta(\lambda):L(\mu)]$ has rows indexed by the standards $\lambda=0,-2$ and columns indexed by the simples $\mu=0,-2$; by [F1] its entries are $D_{00}=D_{0,-2}=D_{-2,-2}=1$ and $D_{-2,0}=0$, that is, $D=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. [F1, given]

1.2 In the same order the projective-flag matrix with entries $F_{\lambda\mu}=(P(\lambda):\Delta(\mu))$ has, by [F2], $F_{00}=1$, $F_{0,-2}=0$, $F_{-2,0}=1$ and $F_{-2,-2}=1$, that is, $F=\begin{pmatrix}1&0\\1&1\end{pmatrix}$. [F2, given]

2.1 By [F3] each entry of $F$ equals the transposed entry of $D$: $F_{\lambda\mu}=[\Delta(\mu):L(\lambda)]=D_{\mu\lambda}$, so $F=D^{\mathsf T}$; this is the two-by-two instance of BGG reciprocity, as claimed. [F3, step 1.1, step 1.2, algebra] ∎
