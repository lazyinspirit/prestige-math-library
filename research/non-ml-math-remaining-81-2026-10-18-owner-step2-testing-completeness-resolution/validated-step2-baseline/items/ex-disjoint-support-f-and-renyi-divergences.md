---
id: ex-disjoint-support-f-and-renyi-divergences
kind: example
title: Disjoint supports and singular divergence values
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-probability-vector
  - def-finite-f-divergence
  - def-finite-kullback-leibler-divergence
  - def-finite-renyi-divergence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §§7.1 and 7.12"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §II-A"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Example

Let $\mathcal X=\{a,b\}$, $P=(1,0)$, and $Q=(0,1)$. The two laws have
disjoint supports.

## Facts & Assumptions

**Given:** The displayed $P,Q$, the total-variation generator
$f(t)=\frac12|t-1|$, and the KL and Rényi conventions.

[F1] [[def-finite-probability-vector]]: coordinates may be zero, and
$\operatorname{supp}P=\{x:p_x>0\}$.

[F2] [[def-finite-f-divergence]]: a coordinate with $q_x>0=p_x$
contributes $q_xf(0)$, while one with $p_x>0=q_x$ contributes
$p_xf_\infty$.

[F3] [[def-finite-kullback-leibler-divergence]]: any coordinate with
$p_x>0=q_x$ makes $D(P\|Q)=+\infty$; zero $P$-mass contributes zero.

[F4] [[def-finite-renyi-divergence]]: below order one a $p_x>0=q_x$
coordinate contributes zero to the affinity; above order one it makes the
affinity infinite.

## Verification

**Given:** $P=(1,0)$ and $Q=(0,1)$ on $\{a,b\}$.

1.1 For the total-variation generator, $f(0)=1/2$ and $f_\infty=1/2$. The coordinate $a$ contributes $p_af_\infty=1/2$ by [F2], and coordinate $b$ contributes $q_bf(0)=1/2$. Thus $D_f(P\|Q)=1$. [F1, F2, algebra]

1.2 Since $p_a=1>0=q_a$, [F3] gives $D(P\|Q)=+\infty$. This records the singular direction; $D(Q\|P)$ is also infinite by the same support calculation with $a,b$ exchanged. [F3, algebra]

2.1 If $0<\alpha<1$, the only coordinate with $q_x>0$ is $b$, where $p_b=0$, so $S_\alpha(P,Q)=0$ and $D_\alpha(P\|Q)=+\infty$ by [F4] and the definition. If $\alpha>1$, coordinate $a$ gives infinite affinity by [F4]. At $\alpha=1$, KL is infinite by step 1.2. [F3, F4, step 1.2, algebra] ∎
