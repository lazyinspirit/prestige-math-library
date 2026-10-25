---
id: thm-extensions-of-amenable-groups-are-amenable
kind: theorem
title: "Extensions of amenable groups are amenable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-invariant-mean-and-amenable-group, def-normal-subgroup, thm-subgroups-and-quotients-of-amenable-groups-are-amenable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Let $N\trianglelefteq G$. If $N$ and $G/N$ are amenable, then $G$ is amenable.

## Facts & Assumptions

**Given:** A normal subgroup $N\trianglelefteq G$ such that both $N$ and $G/N$ are amenable.

[L1] Amenability means existence of a left-invariant mean ([[def-left-invariant-mean-and-amenable-group]]).

[L2] Quotients are formed from normal subgroups ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Let $m_N$ be a left-invariant mean on $N$. For bounded $f:G\to\mathbb R$ and $g\in G$, define $\Phi_f(gN):=m_N(n\mapsto f(gn))$. If $g'=gh$ with $h\in N$, then the integrand for $g'$ is $n\mapsto f(ghn)$, which is the left translate of $n\mapsto f(gn)$ by $h^{-1}$ in the $N$-variable. Thus the value of $\Phi_f(gN)$ does not depend on the chosen representative of the right coset $gN$. The same formula also shows $|\Phi_f(gN)|\le\|f\|_\infty$, so $\Phi_f$ is bounded on $G/N$. [L1, L2, given, construct]

2.1 Let $m_Q$ be a left-invariant mean on $G/N$, and set $m_G(f)=m_Q(\Phi_f)$. Positivity and $m_G(\mathbf 1_G)=1$ are immediate. For $x\in G$, one has $\Phi_{x\cdot f}(gN)=m_N(n\mapsto f(x^{-1}gn))=\Phi_f(x^{-1}gN)$, so $\Phi_{x\cdot f}=xN\cdot\Phi_f$. Therefore $m_G(x\cdot f)=m_Q(xN\cdot\Phi_f)=m_Q(\Phi_f)=m_G(f)$. [L1, step 1.1]

3.1 Thus $m_G$ is a left-invariant mean on $G$, so [L1] makes $G$ amenable. [L1, step 2.1] ∎
