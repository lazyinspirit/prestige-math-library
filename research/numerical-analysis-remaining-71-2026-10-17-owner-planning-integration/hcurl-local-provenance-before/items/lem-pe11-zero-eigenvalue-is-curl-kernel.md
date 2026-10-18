---
id: lem-pe11-zero-eigenvalue-is-curl-kernel
kind: lemma
title: The unquotiented zero eigenspace is the PEC curl kernel
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $V$, $K$, and the unquotiented PEC curl-curl pencil be as in
[[def-na-pe11-maxwell-cavity-eigenproblem]], with constant $mu>0$. For
$u\in V$, the weak eigenrelation at eigenvalue $0$ holds for every $v\in V$
if and only if $u\in K$. Thus the zero eigenspace is exactly the full PEC
curl kernel.

## Facts & Assumptions

**Given:** the space $V=H_0(\operatorname{curl};\Omega)$, its curl kernel $K$, the unquotiented weak eigenrelation, and $mu>0$.

[F1] At eigenvalue $0$, the unquotiented relation is $\mu^{-1}(\operatorname{curl}u,\operatorname{curl}v)_{L^2}=0$ for all $v\in V$, and $K=\{u\in V:\operatorname{curl}u=0\}$. ([[def-na-pe11-maxwell-cavity-eigenproblem]])

## Proof

**Given:** $u\in V$ and the weak eigenrelation at eigenvalue $0$.

1.1 Set $v=u$ in [F1]. Then $\mu^{-1}\|\operatorname{curl}u\|_{L^2}^2=0$. Since $\mu>0$, the squared norm vanishes and $\operatorname{curl}u=0$, so $u\in K$ by [F1]. [F1, given, algebra]

2.1 Conversely, if $u\in K$, then [F1] gives $\operatorname{curl}u=0$. Hence $\mu^{-1}(\operatorname{curl}u,\operatorname{curl}v)_{L^2}=0$ for every $v\in V$, which is precisely the unquotiented eigenrelation at $\lambda=0$. The two inclusions identify the zero eigenspace with $K$. [F1, given, algebra] ∎
