---
id: thm-resolvent-is-banach-valued-holomorphic
kind: theorem
title: Resolvent is Banach-valued holomorphic
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-neumann-series, thm-invertible-group-is-open-and-inversion-is-continuous, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Lemma 5.19, printed pp. 221–222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Chapter 2 §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Let $A$ be a unital complex Banach algebra and let $a \in A$ with resolvent set
$\rho_A(a)$ and resolvent $R(z,a) = (z1-a)^{-1}$
([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]). Then:

1. $\rho_A(a)$ is an open subset of $\mathbb C$, so $\sigma_A(a)$ is closed;
2. for every $z_0 \in \rho_A(a)$ and every $h \in \mathbb C$ with
   $|h|\,\|R(z_0,a)\| < 1$ the Neumann expansion
   $$R(z_0+h,a) = \sum_{n \ge 0} (-h)^n R(z_0,a)^{n+1}$$
   converges in $A$ and exhibits $z_0 + h \in \rho_A(a)$;
3. the map $z \mapsto R(z,a)$ is holomorphic on $\rho_A(a)$ in the norm sense,
   with derivative
   $$R'(z,a) = -R(z,a)^2 \qquad (z \in \rho_A(a)),$$
   and in particular it is norm continuous there, with the local estimate
   $\|R(z_0+h,a) - R(z_0,a)\| \le |h|\,\|R(z_0,a)\|^2/(1-|h|\,\|R(z_0,a)\|)$
   for $|h|\,\|R(z_0,a)\| < 1$.

## Facts & Assumptions

**Given:** A unital complex Banach algebra $A$, an element $a \in A$, a point $z_0 \in \rho_A(a)$ with $R_0 := R(z_0,a)$, and $h \in \mathbb C$ with $|h|\,\|R_0\| < 1$.

[L1] $A$ is complete, the norm is submultiplicative with $\|1\| = 1$, and multiplication is associative and bilinear ([[def-unital-banach-algebra]]).

[L2] $R(z,a)$ is the unique two-sided inverse of $z1-a$, so $(z1-a)R(z,a) = R(z,a)(z1-a) = 1$, and $R(z_0+h,a)$ exists exactly when $(z_0+h)1-a$ is invertible ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L3] If $\|y\| < 1$ then $1-y$ is invertible with $(1-y)^{-1} = \sum_{n\ge0}y^n$ and $\|(1-y)^{-1}\| \le 1/(1-\|y\|)$ ([[lem-neumann-series]]).

[L4] Inversion is continuous on the invertible group, and $\rho_A(a)$ is therefore open: it is the preimage of the open set $A^{\times}$ under the continuous map $z \mapsto z1-a$ ([[thm-invertible-group-is-open-and-inversion-is-continuous]]).

## Proof

**Proof technique:** direct.

1.1 Put $x := -hR_0$, so that $\|x\| \le |h|\,\|R_0\| < 1$ by [L1], and $(z_0+h)1 - a = (z_0 - a)(1 - x)$: indeed $(z_0-a)(1+hR_0) = (z_0-a) + h(z_0-a)R_0 = (z_0-a) + h$, using $(z_0-a)R_0 = 1$ from [L2]. [L1, L2, algebra]

2.1 By [L3] applied to $x$, the element $1-x$ is invertible with $(1-x)^{-1} = \sum_{n\ge0}(-h)^nR_0^n$ and $\|(1-x)^{-1}\| \le 1/(1-|h|\,\|R_0\|)$. [step 1.1, L3]

3.1 By [step 1.1] and [step 2.1], $(z_0+h)1-a$ is a product of two invertible elements, hence invertible, with $R(z_0+h,a) = (1-x)^{-1}R_0 = \sum_{n\ge0}(-h)^nR_0^{n+1}$; combined with [L4] this shows that $\rho_A(a)$ is open, which is claim 1. [step 1.1, step 2.1, L2, L4]

4.1 The map $z \mapsto R(z,a)$ is norm continuous at $z_0$: from [step 3.1], $R(z_0+h,a) - R_0 = \sum_{n\ge1}(-h)^nR_0^{n+1}$, whose norm is at most $\sum_{n\ge1}|h|^n\|R_0\|^{n+1} = |h|\|R_0\|^2/(1-|h|\|R_0\|)$, and this tends to $0$ with $h$; independently, continuity of inversion [L4] applied to the continuous map $z \mapsto z1-a$ gives the same conclusion. [step 3.1, L4, L1]

4.2 For nonzero $h$ with $|h|\,\|R_0\|<1$, divide the expansion of [step 3.1] by $h$ after subtracting $R_0$: $\frac{R(z_0+h,a)-R_0}{h}+R_0^2=\sum_{n\ge2}(-1)^nh^{n-1}R_0^{n+1}$. The right-hand side converges in $A$ and has norm at most $\sum_{n\ge2}|h|^{n-1}\|R_0\|^{n+1}=\frac{|h|\,\|R_0\|^3}{1-|h|\,\|R_0\|}$, which tends to $0$ as $h\to0$. [step 3.1, L1, algebra]

5.1 Thus the norm difference quotient of $h\mapsto R(z_0+h,a)$ at $0$ converges to $-R_0^2$. Since $z_0$ was arbitrary in the open set $\rho_A(a)$, the resolvent is Banach-valued holomorphic there and $R'(z_0,a)=-R(z_0,a)^2$. [step 4.2, L4]

6.1 The three claims are established: claim 1 by [step 3.1], claim 3 together with its continuity and estimate by [step 4.1] and [step 5.1], and claim 2 is exactly the expansion of [step 3.1]. [step 3.1, step 4.1, step 5.1] ∎
