---
id: thm-spectrum-is-nonempty-compact-and-norm-bounded
kind: theorem
title: Spectrum is nonempty compact and norm bounded
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-resolvent-is-banach-valued-holomorphic, thm-invertible-group-is-open-and-inversion-is-continuous, thm-liouville-bounded-entire-function, cor-dual-separates-points, def-axiom-of-choice, def-unital-banach-algebra, def-invertible-element-and-general-linear-group-of-a-banach-algebra, def-spectrum-and-resolvent-set-in-a-banach-algebra, lem-neumann-series]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.20, printed pp. 222–223"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a nonzero
unital complex Banach algebra and let $a \in A$, with spectrum $\sigma_A(a)$
and resolvent $R(z,a) = (z1-a)^{-1}$ as in
[[def-spectrum-and-resolvent-set-in-a-banach-algebra]]. Then

1. $\sigma_A(a)$ is a compact subset of the closed disc
   $\{\,z \in \mathbb C : |z| \le \|a\|\,\}$;
2. $\sigma_A(a) \ne \varnothing$.

The Axiom of Choice is used exactly once, in the form of the Hahn–Banach
separation supplied by [[cor-dual-separates-points]]; the closedness,
boundedness and nonemptiness arguments are otherwise choice-free.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero unital complex Banach algebra $A$, an element $a \in A$, and the spectrum, resolvent set and resolvent of $a$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L1] $A$ is complete, $\|1\| = 1$, $\|uv\| \le \|u\|\,\|v\|$ and $1u = u$, and $0 \ne 1$ because $A$ is nonzero; in particular $0$ is not invertible, since $0b = 0 \ne 1$ for every $b$ ([[def-unital-banach-algebra]], [[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]).

[L2] $z \in \rho_A(a)$ exactly when $z1-a$ is invertible, and then $R(z,a) = (z1-a)^{-1}$ satisfies $(z1-a)R(z,a) = R(z,a)(z1-a) = 1$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L3] If $\|y\| < 1$ then $1-y$ is invertible with $(1-y)^{-1} = \sum_{n\ge0}y^n$ ([[lem-neumann-series]]).

[L4] The resolvent set $\rho_A(a)$ is open, and
$z\mapsto R(z,a)$ is norm holomorphic there and hence norm continuous
([[thm-resolvent-is-banach-valued-holomorphic]],
[[thm-invertible-group-is-open-and-inversion-is-continuous]]).

[L5] Every bounded entire function $\mathbb C \to \mathbb C$ is constant ([[thm-liouville-bounded-entire-function]]).

[L6] If $x \ne y$ in a complex normed space then there is a bounded linear functional $\varphi$ with $\varphi(x) \ne \varphi(y)$ ([[cor-dual-separates-points]]).

[A1] The standing hypothesis is the Axiom of Choice, used here through [L6] and nowhere else ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $|z| > \|a\|$ then $\|a/z\| = \|a\|/|z| < 1$, so by [L3] the element $1 - a/z$ is invertible and hence $z1 - a = z(1 - a/z)$ is invertible with
$$R(z,a)=z^{-1}(1-a/z)^{-1}=\sum_{n\ge0}z^{-n-1}a^n.$$
The Neumann-series norm estimate gives
$\|R(z,a)\|\le |z|^{-1}/(1-\|a\|/|z|)=1/(|z|-\|a\|)$.
Therefore $z \in \rho_A(a)$ and
$\sigma_A(a) \subseteq \{|z| \le \|a\|\}$. [L1, L2, L3, algebra]

2.1 The set $\rho_A(a)$ is open by [L4], so its complement $\sigma_A(a)$ is closed; combined with the boundedness of [step 1.1] this makes $\sigma_A(a)$ a closed bounded subset of $\mathbb C$, hence compact, which is claim 1. [step 1.1, L4]

3.1 Suppose, for contradiction, that $\sigma_A(a) = \varnothing$, so that $\rho_A(a) = \mathbb C$ and $R(z,a)$ is defined for every $z \in \mathbb C$. [step 2.1, L2]

4.1 The element $R(0,a) = (0-a)^{-1} = -a^{-1}$ is nonzero: if $a^{-1} = 0$ then $1 = a a^{-1} = 0$, contradicting [L1]; here $a$ is invertible because $0 \in \rho_A(a)$. [step 3.1, L1, L2, algebra]

5.1 By [L6], applied to the distinct points $R(0,a)$ and $0$ in $A$, there is a bounded linear functional $\varphi : A \to \mathbb C$ with $\varphi(R(0,a)) \ne 0$. [step 4.1, L6, A1]

6.1 Define $g : \mathbb C \to \mathbb C$ by $g(z) := \varphi(R(z,a))$. Then $g$ is holomorphic on $\mathbb C$: at each $z_0$ the resolvent is complex differentiable with $R'(z_0,a) = -R(z_0,a)^2$ by [L4], and a bounded linear functional is complex differentiable with $\varphi'(x) = \varphi$ for $x \in A$, so the chain rule gives $g'(z_0) = -\varphi(R(z_0,a)^2)$; thus $g$ is entire. [step 3.1, step 5.1, L4, algebra]

7.1 The function $g$ is bounded: on the compact set $\{|z| \le \|a\| + 1\}$ the norm $\|R(z,a)\|$ is bounded by some $C_1 < \infty$ because $z \mapsto R(z,a)$ is norm continuous by [L4], and for $|z| > \|a\| + 1$ the estimate in [step 1.1] gives $\|R(z,a)\| \le 1/(|z| - \|a\|) \le 1$; hence $|g(z)| \le \|\varphi\|\max(C_1,1)$ for every $z \in \mathbb C$. [step 6.1, step 1.1, L4, algebra]

8.1 By [L5] the bounded entire function $g$ is constant; since the estimate in [step 1.1] gives $\|R(z,a)\| \le 1/(|z|-\|a\|) \to 0$ as $|z| \to \infty$ and $\varphi$ is continuous, $g(z) \to 0$ along $|z| \to \infty$, so the constant value is $0$ and $g \equiv 0$. [step 1.1, step 7.1, L5, algebra]

9.1 But $g(0) = \varphi(R(0,a)) \ne 0$ by the choice of $\varphi$ in [step 5.1], contradicting $g \equiv 0$; hence $\sigma_A(a) \ne \varnothing$, which is claim 2. [step 8.1, step 5.1]

10.1 Claim 1 was proved in [step 2.1] and claim 2 in [step 9.1], so the spectrum of $a$ is a nonempty compact subset of the disc of radius $\|a\|$. [step 2.1, step 9.1] ∎
