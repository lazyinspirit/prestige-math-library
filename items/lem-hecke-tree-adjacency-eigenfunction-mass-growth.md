---
id: lem-hecke-tree-adjacency-eigenfunction-mass-growth
kind: lemma
title: "Uniform mass growth for an adjacency eigenfunction on a regular Hecke tree"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-cauchy-schwarz-finite]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Elon Lindenstrauss, Invariant measures and arithmetic quantum unique ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Section 8, Lemma 8.3; the local proof uses a recurrence invariant. Semisimple trigonometric visit-density shortcut is not used."
---

## Statement

Let $p\ge2$ be an integer and $T$ a $(p+1)$-regular tree rooted at $o$. Suppose $f:T\to\mathbb C$ satisfies $\sum_{w\sim v}f(w)=\lambda f(v)$ at every vertex, where $\lambda\in\mathbb R$. For every integer $R\ge0$,
\[
\sum_{d(o,v)\le R}|f(v)|^2\ge\frac{R}{48}|f(o)|^2.
\]

## Statement references

[Elon Lindenstrauss, Invariant measures and arithmetic quantum unique ergodicity, §8, Lemma 8.3.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

## Facts & Assumptions

**Given:** The tree, eigenfunction, real eigenvalue and integer radius in the Statement.

[F1] [[thm-cauchy-schwarz-finite]]: for finite real lists, $(\sum a_i b_i)^2\le(\sum a_i^2)(\sum b_i^2)$.

## Proof

**Proof technique:** direct.

1.1 If $f(o)=0$, the conclusion is immediate. Otherwise put $m_n=\sum_{d(o,v)=n}f(v)$. Counting edges between successive spheres gives $m_0=f(o)$, $m_1=\lambda f(o)$, $m_2=(\lambda^2-p-1)f(o)$ and $m_{n+1}=\lambda m_n-pm_{n-1}$ for $n\ge2$. Indeed every vertex in sphere $n\ge1$ has one predecessor and $p$ successors; the root has $p+1$ successors. [given, algebra]

1.2 Set $q=\lambda/\sqrt p$, $v_0=1+1/p$, $v_1=q$, and $v_{n+1}=qv_n-v_{n-1}$ for $n\ge1$. All $v_n$ are real. The initial values and recurrence in step 1.1 imply $m_n=p^{n/2}v_nf(o)$ for $n\ge1$. Sphere $n$ has $(p+1)p^{n-1}$ vertices. The triangle inequality followed by [F1] applied to the real lists $|f(v)|$ and $1$ therefore gives
\[
\sum_{d(o,v)=n}|f(v)|^2\ge\frac{|m_n|^2}{(p+1)p^{n-1}}=\frac p{p+1}v_n^2|f(o)|^2\ge\frac23v_n^2|f(o)|^2.
\]
[step 1.1, F1, algebra]

1.3 Suppose $|q|\le2$. Substitution of the recurrence shows that $J=v_n^2+v_{n+1}^2-qv_nv_{n+1}$ is independent of $n\ge0$. At $n=0$ it equals $(1+1/p)^2-q^2/p\ge(1-1/p)^2\ge1/4$. Since $|qv_nv_{n+1}|\le v_n^2+v_{n+1}^2$, we have $v_n^2+v_{n+1}^2\ge1/8$. Pairing indices $(1,2),(3,4),\ldots$ gives $\sum_{n=1}^R v_n^2\ge\lfloor R/2\rfloor/8\ge R/24$ for $R\ge2$. Thus step 1.2 gives the stronger lower bound $R|f(o)|^2/36$. [step 1.2, algebra]

1.4 Suppose $|q|>2$. Replacing $v_n$ by $(-1)^nv_n$ when $q<0$ reduces to $q>2$. Now $v_1>2>v_0$ and $v_{n+1}=qv_n-v_{n-1}>v_n$ whenever $v_n>v_{n-1}>0$. Induction gives $v_n>2$ for every $n\ge1$, and step 1.2 again implies the claimed bound. Finally $R=0$ is trivial and $R=1$ follows from the root term alone. [step 1.2, step 1.3, algebra] ∎
