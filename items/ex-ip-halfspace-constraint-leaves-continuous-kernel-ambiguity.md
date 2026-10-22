---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
id: ex-ip-halfspace-constraint-leaves-continuous-kernel-ambiguity
kind: example
title: A half-space constraint leaves a continuous kernel ambiguity
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-admissible-constraint-class
  - prop-ip-constraints-can-remove-kernel-ambiguity
justified_by: []
aliases: []
proof_strategy: verification
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Use $X=\mathbb R^2$ with its Euclidean metric, $Y=\mathbb R$ with its absolute-value metric, and $U=X$. Let $A:X\to Y$ be $A(s,t)=s$, and restrict the truth class to the half-space $C_+=\{(s,t)\in\mathbb R^2:t\ge0\}$. For every datum $y\in\mathbb R$, the constrained fiber is $\{(y,t):t\ge0\}$, a continuous half-line of admissible truths; moreover $(C_+-C_+)\cap\ker A=\{(0,t):t\in\mathbb R\}\ne\{0\}$.

## Facts & Assumptions

**Given:** $X=\mathbb R^2$ and $Y=\mathbb R$ with the stated Euclidean and absolute-value metrics, $U=X$, $A(s,t)=s$ and the nonempty constraint class $C_+=\{(s,t)\in\mathbb R^2:t\ge0\}$.

[F1] [[def-ip-admissible-constraint-class]]: $C-C=\{x-x':x,x'\in C\}$, $\ker A=\{x:Ax=0\}$, and restricted identifiability is injectivity on $C$.

[F2] [[prop-ip-constraints-can-remove-kernel-ambiguity]]: injectivity on $C$ implies $(C-C)\cap\ker A=\{0\}$.

## Verification

1.1 We have $\ker A=\{(0,t):t\in\mathbb R\}$. If $(a,b)\in\mathbb R^2$ with $b\ge0$, then $(a,b)=(a,b)-(0,0)$ with both points in $C_+$. If $b<0$, then $(a,b)=(a,0)-(0,-b)$ with both points in $C_+$. Thus $C_+-C_+=\mathbb R^2$, so its intersection with $\ker A$ is the nonzero vertical axis. [given, F1, construct, algebra]

2.1 Since this intersection is nontrivial, the forward implication in [F2] rules out injectivity of $A|_{C_+}$. Directly, $A(s,t)=y$ and $t\ge0$ hold exactly when $(s,t)=(y,t)$ with $t\ge0$; distinct such $t$ give distinct admissible truths with the same datum. [given, F1, F2, step 1.1, algebra] ∎
