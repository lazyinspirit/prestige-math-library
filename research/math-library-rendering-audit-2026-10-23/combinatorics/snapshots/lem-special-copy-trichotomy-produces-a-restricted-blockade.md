---
id: lem-special-copy-trichotomy-produces-a-restricted-blockade
kind: lemma
title: "Special copy trichotomy produces a restricted blockade"
status: published
origin: pipeline
deps: [lem-good-copy-extension-count, lem-few-induced-copies-exclude-a-fixed-labelled-blowup, lem-local-special-copy-trichotomy, lem-qid-maximal-blowup-trichotomy, def-qid-restricted-blockade-with-empty-blocks, thm-logarithm-change-of-base, thm-real-power-laws, lem-integer-part]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "4.4; 2.3"
proof_strategy: induction
---

## Statement

For every nonempty finite graph $H$ there exist $k_1,k_2>0$ such that, whenever $G$ is nonempty, $n=|G|$, $0<x\leq1/(8|H|)$ and $\operatorname{ind}_H(G)<x^{k_1}n^{|H|}$, there is a QID $x$-restricted sequence of length at least $2\log_2(1/x)$ and width at least $\lfloor x^{k_2}n\rfloor$. At least half its indices form a sequence uniformly $x$-sparse in $G$ or its complement, so that sequence has length at least $\log_2(1/x)$ and the same width lower bound.

## Facts & Assumptions

**Given:** A nonempty finite pattern $H$. The host $G$ and $x$ obey the statement, with the copy threshold imposed after the constants are chosen.

[F1] Given $H,g,\alpha$, the maximal-blowup trichotomy supplies constants $\beta,\gamma>0$ for all hosts of order $n\geq2$ and $0<x\leq1/(8|H|)$: a few-$(H-g)$ subset of size at least $x^\beta n$, at least $x^\gamma n^{|H|}$ copies, or an $x$-sparse pair with sizes at least $x^\beta n$ and $n/(2|H|)$. ([[lem-qid-maximal-blowup-trichotomy]]).

[F2] QID sequences allow empty blocks. Restrictedness means that each later union is directionally sparse to its earlier block in one fixed graph or complement for that index. ([[def-qid-restricted-blockade-with-empty-blocks]]).

[F3] For every real $y$, its unique integer part satisfies $\lfloor y\rfloor\leq y<\lfloor y\rfloor+1$. ([[lem-integer-part]]).

[F4] $\log_bx=\frac{\log x}{\log b},\qquad b^{\log_bx}=x,\qquad \log_b(b^u)=u\quad(u\in\mathbb R)$. ([[thm-logarithm-change-of-base]]).

## Proof

1.1 Induct on $h=|H|$. If $h=1$, take $k_1=k_2=1$; the premise $n<xn$ is impossible. For $h\geq2$, fix $g\in V(H)$ and let $k_1^{\prime},k_2^{\prime}$ be the constants for $H-g$. Apply [F1] with $\alpha=k_1^{\prime}$ to obtain $\beta,\gamma$. Set $d_0=\log_2(2h)>0$, $k_1=\gamma+2d_0h$, and $k_2=k_2^{\prime}+\beta+2d_0$. [base, ih, F1]

2.1 If $x^{k_2}n<1$, take $-\lfloor-2\log_2(1/x)\rfloor$ empty blocks. By [F3] this integer is at least the required length, and the width is $0=\lfloor x^{k_2}n\rfloor$. All degree conditions hold by [F2]. Hence assume $x^{k_2}n\geq1$. [F2, F3, step 1.1]

3.1 Consider nonempty restricted sequences $(B_1,\ldots,B_k)$ whose first $k-1$ blocks have size at least $x^{k_2}n$ and whose last block has size at least $(2h)^{1-k}n$. The one-block sequence $V(G)$ qualifies. All these sequences have length at most $n$, so a maximum length is attained in a finite nonempty family. Fix such a sequence. If $k-1\geq2\log_2(1/x)$, its first $k-1$ blocks prove the restricted assertion. Otherwise [F4] gives $|B_k|\geq2^{(1-k)d_0}n>x^{2d_0}n\geq x^{2d_0-k_2}>1$. Thus $|B_k|\geq2$. [F4, step 2.1, algebra]

4.1 Apply [F1] inside $G[B_k]$ at $x$ with $\alpha=k_1^{\prime}$. Its count outcome would give $\operatorname{ind}_H(G)\geq\operatorname{ind}_H(G[B_k])\geq x^\gamma|B_k|^h>x^{\gamma+2d_0h}n^h=x^{k_1}n^h$, contrary to the premise; the first inequality holds by inclusion of the embedding sets. Its sparse-pair outcome would replace $B_k$ by $A,B$ with $|A|\geq x^\beta|B_k|>x^{\beta+2d_0}n\geq x^{k_2}n$ and $|B|\geq|B_k|/(2h)\geq(2h)^{-k}n$. Earlier degree conditions persist because their target blocks are unchanged and their later vertices are restricted. The new pair meets the last condition, contradicting maximum length. [F1, step 1.1, step 3.1]

5.1 Therefore [F1] supplies $A\subseteq B_k$ with $|A|\geq x^\beta|B_k|>x^{\beta+2d_0}n$ and $\operatorname{ind}_{H-g}(G[A])<x^{k_1^{\prime}}|A|^{h-1}$. Here $A$ is nonempty and $x\leq1/(8h)\leq1/(8(h-1))$, so induction applies. It gives length at least $2\log_2(1/x)$ and width at least $\lfloor x^{k_2^{\prime}}|A|\rfloor\geq\lfloor x^{k_2^{\prime}+\beta+2d_0}n\rfloor=\lfloor x^{k_2}n\rfloor$. Floor monotonicity follows from [F3]: if $u\leq v$ and $\lfloor u\rfloor>\lfloor v\rfloor$, then $u\geq\lfloor v\rfloor+1>v$. This completes the restricted-sequence induction. [F1, F3, step 1.1, step 4.1, induction]

6.1 In the resulting sequence assign an index to $I$ if its later union is $x$-sparse to its block in $G$, and to $J$ otherwise. Restrictedness ensures the latter indices use $\overline G$; the last index can be assigned to $I$ because its tail is empty. One of the two sets has at least half the indices. Retain its blocks in their old order. Each later union has only shrunk, so its degree inequalities remain true, and each retained block has its old size. This proves the uniform conclusion. [F2, step 1.1, step 5.1, algebra, discharge-induction] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 4.4; 2.3.
