---
id: lem-contractibility-implies-trivial-fundamental-group
kind: lemma
title: "A contractible space has trivial fundamental group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-nullhomotopic-map-and-contractible-space,
       cor-contractible-iff-identity-nullhomotopic,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "A. Hatcher, Algebraic Topology, Proposition 1.17"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Let $X$ be a contractible topological space and let $x_0\in X$. Then
$\pi_1(X,x_0)$ is the trivial group.

## Facts & Assumptions

**Given:** A contractible space $X$ and a basepoint $x_0\in X$.

[L1] A nonempty topological space is contractible exactly when its identity map is nullhomotopic ([[def-nullhomotopic-map-and-contractible-space]], [[cor-contractible-iff-identity-nullhomotopic]]).

[L2] Based loops at $x_0$ are identified up to path homotopy relative to the endpoints, and the class of the constant loop $c_{x_0}$ is the identity of $\pi_1(X,x_0)$ ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there are a point $x_1\in X$ and a homotopy $H:X\times I\to X$ from $\operatorname{id}_X$ to the constant map $c_{x_1}$. Evaluating at the chosen basepoint gives a path $$\lambda(t)=H(x_0,t)$$ from $x_0$ to $x_1$. [given, L1, construct]

2.1 Let $[\alpha]\in\pi_1(X,x_0)$. Define $K:I\times I\to X$ by $$K(s,t)=\begin{cases} H\bigl(x_0,\,3st\bigr),&0\le s\le \tfrac13,\\[2mm] H\bigl(\alpha(3s-1),\,t\bigr),&\tfrac13\le s\le \tfrac23,\\[2mm] H\bigl(x_0,\,(3-3s)t\bigr),&\tfrac23\le s\le1. \end{cases}$$ The three pieces are continuous and agree on the seams $s=\tfrac13,\tfrac23$ because $\alpha(0)=x_0=\alpha(1)$, so $K$ is continuous. Also $K(0,t)=x_0=K(1,t)$ for every $t$, so $K$ is a path homotopy relative to the endpoints between loops at $x_0$. At $t=0$ it is $c_{x_0}*\alpha*c_{x_0}$, and at $t=1$ it is $\lambda*c_{x_1}*\bar\lambda$. Hence $$[c_{x_0}*\alpha*c_{x_0}]=[\lambda*c_{x_1}*\bar\lambda].$$ Since $[c_{x_0}]$ is the identity by [L2], this gives $[\alpha]=[\lambda*c_{x_1}*\bar\lambda]$. [step 1.1, L2, construct]

3.1 Define $J:I\times I\to X$ by $$J(s,u)=\begin{cases} \lambda\bigl(3s(1-u)\bigr),&0\le s\le \tfrac13,\\[2mm] \lambda(1-u),&\tfrac13\le s\le \tfrac23,\\[2mm] \lambda\bigl((3-3s)(1-u)\bigr),&\tfrac23\le s\le1. \end{cases}$$ The three pieces are continuous and agree on the seams, so $J$ is continuous. Also $J(0,u)=x_0=J(1,u)$ for every $u$, while $J(-,0)=\lambda*c_{x_1}*\bar\lambda$ and $J(-,1)=c_{x_0}$. Thus $[\lambda*c_{x_1}*\bar\lambda]=[c_{x_0}]$ by [L2], and step 2.1 yields $[\alpha]=[c_{x_0}]$. [step 1.1, step 2.1, L2, construct]

4.1 Every loop class at $x_0$ is therefore the identity, so $\pi_1(X,x_0)$ is trivial. [step 3.1, L2] ∎
