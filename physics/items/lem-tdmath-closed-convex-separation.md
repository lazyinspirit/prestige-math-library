---
id: lem-tdmath-closed-convex-separation
kind: lemma
title: "Strictly separate a point from a nonempty closed convex Euclidean set"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - def-complete-ordered-field
  - def-convex-subset-of-euclidean-space
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-extreme-value-metric
  - thm-heine-borel-rn
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §11, especially Theorem 11.5"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §1.1.1"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Let $n\ge1$, let $E\subseteq\mathbb R^n$ be nonempty, closed, and convex, and let $z\notin E$. Then there are a nonzero $u\in\mathbb R^n$ and a real $c$ such that

$$\langle u,e\rangle\le c<\langle u,z\rangle\qquad(e\in E).$$

Thus an affine hyperplane strictly separates the point from the entire set.

## Facts & Assumptions

**Given:** The Euclidean inner product and norm, a nonempty closed convex $E\subseteq\mathbb R^n$, and $z\notin E$.

[F1] [[def-euclidean-inner-product]]: $\|x\|_2^2=\langle x,x\rangle$ and the squared norm expands bilinearly.

[F2] [[def-convex-subset-of-euclidean-space]]: for $e_0,e_1\in E$ and $t\in[0,1]$, $(1-t)e_0+te_1\in E$.

[L1] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality, so $e\mapsto\|z-e\|_2$ is continuous by the reverse triangle inequality.

[L2] [[thm-heine-borel-rn]]: a closed bounded subset of $\mathbb R^n$, $n\ge1$, is compact.

[L3] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its minimum.

## Proof

**Proof technique:** direct.

1.1 Choose $e_0\in E$ and set $R=\|z-e_0\|_2+1$. The set $K=E\cap\{e:\|z-e\|_2\le R\}$ is nonempty and bounded; it is closed because $E$ is closed and the distance map is continuous by [L1]. Hence [L2] makes it compact, and the continuous function $e\mapsto\|z-e\|_2^2$ attains a minimum at some $e_*\in K$ by [L3]. [given, L1, L2, L3, choose]

2.1 This $e_*$ is nearest to $z$ in all of $E$: every $e\in E\setminus K$ satisfies $\|z-e\|_2>R>\|z-e_0\|_2\ge\|z-e_*\|_2$. Put $u=z-e_*$; since $z\notin E$, $u\ne0$. [step 1.1, given, algebra]

3.1 Fix $e\in E$ and put $v=e-e_*$. For $0<t\le1$, [F2] gives $e_*+tv\in E$, so minimality of $e_*$ and [F1] imply $2t\langle u,v\rangle\le t^2\|v\|_2^2$. If $\langle u,v\rangle>0$, then $v\ne0$; setting $t=\min\{1,\langle u,v\rangle/\|v\|_2^2\}$ contradicts this inequality whether the minimum is $1$ or the quotient. Hence $\langle u,v\rangle\le0$. [F1, F2, step 2.1, algebra]

4.1 Therefore $\langle u,e\rangle\le\langle u,e_*\rangle$ for every $e\in E$, while $\langle u,z\rangle=\langle u,e_*\rangle+\|u\|_2^2>\langle u,e_*\rangle$. Taking $c=\langle u,e_*\rangle$ proves strict separation. [F1, step 3.1, algebra] ∎
