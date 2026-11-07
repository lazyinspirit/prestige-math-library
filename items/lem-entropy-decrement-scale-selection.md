---
id: lem-entropy-decrement-scale-selection
kind: lemma
title: "Entropy decrement selects a scale with small mutual information"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Tao"
      url: https://arxiv.org/pdf/1509.05422v4
      locator: "Lemma 3.2 and (3.12), PDF pp. 21\u201322; finite quantitative abstraction"
---

## Statement

Fix $a\ge1$ integer, $H_-\ge e^{e^e}$, and constants $B,C\ge1$. There exists $H_+\ge H_-$ depending only on these data such that the following holds. For each integer $H\in[H_-,H_+]$ divisible by $a$, suppose $0\le h_H\le BH$ and $i_H\ge0$, and suppose whenever $k\ge1$ is integer and $kH\le H_+$,
$$\frac{h_{kH}}{kH}\le\frac{h_H}{H}-\frac{i_H}{H}+\frac Ck.$$
Then some such $H$ has $i_H\le H/(\log H\log\log\log H)$. In particular this applies to entropy and mutual information once the displayed finite-scale inequality has been proved for them.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

## Proof

1.1 Write $d(H)=\log H\log\log\log H$, which is positive and increasing on the stated range. Start with $H_1=a\lceil H_-/a\rceil$ and set $k_j=\lceil4C d(H_j)\rceil$, $H_{j+1}=k_jH_j$. If the asserted small $i_{H_j}$ fails, the given inequality decreases $h_{H_j}/H_j$ at the next scale by at least $3/(4d(H_j))$. [given, algebra]

2.1 These decrements have divergent sum. Here are the needed growth details. Put $u_j=\log H_j$. The recursion gives $u_{j+1}\le u_j+K+\log u_j+\log\log\log u_j$ for a constant $K$ depending on $C$. Consequently $u_j\le D(j+2)\log(j+2)$ for a sufficiently large fixed $D$: the increment of this proposed upper bound is at least $D\log(j+2)$, while the recursion increment evaluated at the upper bound is at most $2\log(j+2)+O_{C,D}(1)$; enlarge $D$ to handle the finitely many initial indices. Hence $d(H_j)=u_j\log\log u_j\le D'(j+2)\log(j+2)\log\log(j+3)$ for another fixed $D'$. The reciprocal series diverges by the substitution $v=\log(j+2)$ in the integral comparison. [step 1.1, algebra]

3.1 Choose a finite $J$ for which $\sum_{j<J}3/(4d(H_j))>B$ and set $H_+=H_J$. If every tested scale failed, telescoping step 1.1 would give $h_{H_J}/H_J<0$, contradicting its nonnegativity. Only a finite deterministic recursion is used. [step 1.1, step 2.1, algebra] ∎
