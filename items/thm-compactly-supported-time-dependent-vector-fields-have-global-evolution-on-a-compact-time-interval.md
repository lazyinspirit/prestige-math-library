---
id: thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
kind: theorem
title: "Compactly supported time-dependent vector fields have global evolution on a compact time interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-time-dependent-vector-field-and-evolution-operator, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law, def-smooth-section-local-section-and-support, def-compact-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marius Crainic, Rui Loja Fernandes, and Ioan Marcut, Lectures on Poisson Geometry"
      url: "https://webspace.science.uu.nl/~crain101/gsm217.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $J\subseteq\mathbb R$ be a compact interval, and let $X_t$ be a smooth
time-dependent vector field on $M$ such that

$$ \bigcup_{t\in J}\operatorname{supp}(X_t) $$

is contained in a compact subset $K\subseteq M$. Then there is a global evolution
operator $\Psi_{t,s}:M\to M$ for all $s,t\in J$.

## Facts & Assumptions

**Given:** A compact interval $J$, a smooth time-dependent vector field $X_t$ on $M$, and a compact set $K$ containing all supports $\operatorname{supp}(X_t)$ for $t\in J$.

[L1] Smooth time-dependent vector fields have unique local smooth evolution operators ([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).

[L2] Local evolution operators satisfy the two-time cocycle law ([[prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]]).

[L3] Outside the support of $X_t$, the vector field $X_t$ vanishes ([[def-smooth-section-local-section-and-support]]).

## Proof

**Proof technique:** direct.

1.1 Let $\gamma:(a,b)\to M$ be a maximal solution of $\dot\gamma(t)=X_t(\gamma(t))$ with initial time $s\in J$. If $\gamma(t_0)\notin K$ for some $t_0\in(a,b)$, then $X_t(\gamma(t_0))=0$ for every $t\in J$ by [L3], so the constant curve through $\gamma(t_0)$ also solves the equation. Uniqueness therefore forces $\gamma$ to be constant on the connected component of $\{t\in(a,b):\gamma(t)\notin K\}$ containing $t_0$. Thus every nonconstant part of the trajectory stays inside $K$. [L3, given]

2.1 Suppose $b<\sup J$. Choose times $t_n\uparrow b$. If infinitely many $\gamma(t_n)$ lie in $K$, compactness of $K$ gives a subsequence converging to some $q\in K$. Otherwise $\gamma(t_n)\notin K$ for all large $n$, and step 1.1 makes those tail values constant on a neighbourhood of $b$; hence $\gamma(t_n)\to q$ for some $q\in M\setminus K$. Applying [L1] at $(b,q)$ gives $\varepsilon>0$, an open neighbourhood $U$ of $q$, and a local evolution operator $\Psi_{t,s}$ for $s,t\in (b-\varepsilon,b+\varepsilon)$. Choose $n$ large enough that $t_n\in (b-\varepsilon,b)$ and $\gamma(t_n)\in U$. Then $t\mapsto \Psi_{t,t_n}(\gamma(t_n))$ is a solution on $(b-\varepsilon,b+\varepsilon)$. On the common interval $(b-\varepsilon,b)$ it agrees with $\gamma$ by uniqueness, because both solve the same equation and have the same value at time $t_n$. This extends $\gamma$ past $b$, contradicting maximality. [L1, step 1.1, choose]

3.1 The same argument excludes a left endpoint larger than $\inf J$. Therefore every maximal solution with initial time in $J$ exists on all of $J$. [step 2.1]

4.1 Define $\Psi_{t,s}(p)$ to be the value at time $t$ of the unique solution starting from $p$ at time $s$. Step 3.1 makes this global on $J$, and [L2] supplies the cocycle law. Hence $\Psi_{t,s}:M\to M$ is the desired global evolution operator. [L2, step 3.1] ∎
