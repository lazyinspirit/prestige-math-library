---
id: ex-gts-a2-king-stability-sign-example
kind: example
title: A2 King stability distinguishes the arrow map
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-quiver-jacobian-king-theta-stability-data
dependency_roles:
  def-gts-quiver-jacobian-king-theta-stability-data: mathematical-premise
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $Q$ have vertices $1,2$ and one arrow $a:1\to2$, let the potential be $W=0$, and let $\theta(d_1,d_2)=d_1-d_2$. The representation $E$ with $E_1=E_2=\mathbb C$ and $E(a)=\operatorname{id}_{\mathbb C}$ is $\theta$-stable under the sign convention in King theta stability. The representation $E_0$ with the same vertex spaces and $E_0(a)=0$ is not $\theta$-semistable. Thus the dimension vector and weight alone do not decide stability; the arrow map matters.

The diagram fixes the single arrow's orientation and its endpoint labels. The algebraic verification below does not rely on the drawing.

```tikz
\begin{tikzpicture}[>=stealth,baseline=-0.5ex]
  \node[circle,draw,inner sep=2pt] (v1) at (0,0) {$1$};
  \node[circle,draw,inner sep=2pt] (v2) at (2,0) {$2$};
  \draw[->,thick] (v1) -- node[above] {$a$} (v2);
\end{tikzpicture}
```

## Example references

[[def-gts-quiver-jacobian-king-theta-stability-data]]

## Facts & Assumptions

**Given:** Work over $\mathbb C$. A representation of $Q$ is a pair of finite-dimensional vector spaces $V_1,V_2$ and a linear map $V(a):V_1\to V_2$. A subrepresentation is a pair $U_i\subseteq V_i$ with $V(a)(U_1)\subseteq U_2$.

[F1] [[def-gts-quiver-jacobian-king-theta-stability-data]]: $\theta$-semistability requires $\theta(E)=0$ and $\theta(A)\le0$ for every subobject; stability requires strict inequality for every proper nonzero subobject.

## Verification

**Given:** The data above and $\theta(d_1,d_2)=d_1-d_2$.

1.1 Since each $E_i\cong\mathbb C$, a subspace $U_i\subseteq E_i$ is either $0$ or $\mathbb C$. The subrepresentation condition for $E(a)=\operatorname{id}$ excludes $(U_1,U_2)=(\mathbb C,0)$. Thus the subrepresentations of $E$ are $(0,0),(0,\mathbb C),(\mathbb C,\mathbb C)$. [given, F1, algebra]

2.1 We have $\theta(E)=1-1=0$, and the only proper nonzero subobject in step 1.1 has weight $\theta(0,\mathbb C)=-1<0$. Therefore $E$ is $\theta$-stable. [given, F1, step 1.1, algebra]

3.1 For $E_0(a)=0$, the pair $(\mathbb C,0)$ is a subrepresentation because the zero map sends $\mathbb C$ into $0$. It is nonzero and proper, and $\theta(\mathbb C,0)=1>0$; hence $E_0$ is not $\theta$-semistable. [given, F1, algebra] ∎
