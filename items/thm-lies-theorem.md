---
id: thm-lies-theorem
kind: theorem
title: Lie's theorem
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field, def-representation-of-a-lie-algebra, cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue, thm-trace-of-ab-equals-trace-of-ba]
landmark: true
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Theorem 1.25"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Theorem 1.25 and proof, printed pp. 26–28"
---

## Statement

Let $\mathfrak g$ be a finite-dimensional solvable Lie algebra over an
algebraically closed field $k$ of characteristic zero. Every nonzero
finite-dimensional $\mathfrak g$-module $V$ contains a common eigenvector:
there are $0\neq w\in V$ and $\chi\in\mathfrak g^*$ such that
$yw=\chi(y)w$ for every $y\in\mathfrak g$.

## Facts & Assumptions

**Given:** The algebraically closed characteristic-zero field $k$, a finite-dimensional solvable $k$-Lie algebra $\mathfrak g$, and a nonzero finite-dimensional representation on $V$.

[L1] A nonzero finite-dimensional solvable Lie algebra has a codimension-one ideal ([[lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field]]).

[L2] A representation is linear and satisfies $[x,h]v=x(hv)-h(xv)$ ([[def-representation-of-a-lie-algebra]]).

[L3] Every endomorphism of a nonzero finite-dimensional vector space over an algebraically closed field has an eigenvalue ([[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]).

[L4] For finite-dimensional endomorphisms, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof

**Proof technique:** induction on $\dim\mathfrak g$.

1.1 If $\mathfrak g=0$, any nonzero $w\in V$ is a common eigenvector with the zero functional. [base, given]

1.2 Assume $\mathfrak g\neq0$ and the theorem for solvable Lie algebras of smaller dimension. [ih, given]

2.1 By [L1], choose a codimension-one ideal $\mathfrak h$ and write $\mathfrak g=\mathfrak h\oplus kx$. Its derived series is contained termwise in that of $\mathfrak g$, so $\mathfrak h$ is solvable. Step 1.2 gives $0\neq v\in V$ and $\lambda\in\mathfrak h^*$ with $hv=\lambda(h)v$ for every $h\in\mathfrak h$. [L1, L2, step 1.2, algebra]

3.1 Put $W_j=\operatorname{span}(v,xv,\ldots,x^jv)$ and $W=\sum_{j\geq0}W_j$; finite dimensionality makes $W$ finite-dimensional and $x$-stable. Induction on $j$, using $hx^j=x^jh+\sum_{i=0}^{j-1}x^i[h,x]x^{j-1-i}$ and $[h,x]\in\mathfrak h$, shows $hW_j\subseteq W_j$ and $hx^jv\equiv\lambda(h)x^jv\pmod{W_{j-1}}$. Thus $W$ is $\mathfrak g$-stable and every $h\in\mathfrak h$ acts upper triangularly on a basis extracted from the cyclic list, with constant diagonal $\lambda(h)$. [L2, step 2.1, algebra]

4.1 Let $d=\dim W>0$. Because $W$ is stable, [L2] and [L4] give $0=\operatorname{tr}_W([x,h])=d\lambda([x,h])$ for every $h\in\mathfrak h$, where the last equality uses the constant diagonal from step 3.1. Characteristic zero makes $d\cdot1_k\neq0$, so $\lambda([x,h])=0$. This is the exact use of the characteristic hypothesis. [L2, L4, step 3.1, algebra]

5.1 The nonzero common $\mathfrak h$-weight space $V_\lambda=\{u:hu=\lambda(h)u\text{ for all }h\in\mathfrak h\}$ contains $v$. It is $x$-stable: for $u\in V_\lambda$, [L2] and step 4.1 give $h(xu)=x(hu)+[h,x]u=\lambda(h)xu+\lambda([h,x])u=\lambda(h)xu$. [L2, step 2.1, step 4.1, algebra]

6.1 By algebraic closure and [L3], $x|_{V_\lambda}$ has a nonzero eigenvector $w$, say $xw=aw$. Then $hw=\lambda(h)w$ for $h\in\mathfrak h$, and for $y=h+tx$ we have $yw=(\lambda(h)+ta)w$. This defines the required linear functional $\chi$. Algebraic closure is used only in [L3], characteristic zero only in step 4.1, and all choices are a finite sequence of existential choices rather than AC. [L3, step 2.1, step 5.1, discharge-induction] ∎
