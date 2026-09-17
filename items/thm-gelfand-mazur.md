---
id: thm-gelfand-mazur
kind: theorem
title: Gelfand-Mazur
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectrum-is-nonempty-compact-and-norm-bounded, def-axiom-of-choice, def-unital-banach-algebra, def-invertible-element-and-general-linear-group-of-a-banach-algebra, def-spectrum-and-resolvent-set-in-a-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.20 and §5.1.1, printed pp. 209–214 and 222–223"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.1, printed pp. 19–24"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra ([[def-unital-banach-algebra]]) which is a **division
algebra**: every nonzero element of $A$ is invertible
([[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]). Then
the map

$$\mathbb C \to A, \qquad \lambda \mapsto \lambda 1,$$

is an isomorphism of complex algebras and an isometry, and consequently
$A = \mathbb C\,1$ and $\dim_{\mathbb C} A = 1$.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a unital complex Banach algebra $A$ in which every nonzero element is invertible, and the map $\varphi : \mathbb C \to A$, $\varphi(\lambda) = \lambda 1$.

[L1] $A$ is a complex vector space with associative bilinear multiplication, $1a = a1 = a$ for all $a$, $\|1\| = 1$ and $\|xy\| \le \|x\|\,\|y\|$; in particular $1 \ne 0$ ([[def-unital-banach-algebra]]).

[L2] $a \in A$ is invertible exactly when some $b$ satisfies $ab = ba = 1$; the only non-invertible element of a division algebra is $0$ ([[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]).

[L3] $\lambda \in \sigma_A(a)$ exactly when $\lambda 1 - a$ is not invertible ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L4] Under the Axiom of Choice every element of a nonzero unital complex Banach algebra has nonempty spectrum ([[thm-spectrum-is-nonempty-compact-and-norm-bounded]]).

## Proof

**Proof technique:** direct.

1.1 The map $\varphi$ is complex-linear and multiplicative: $\varphi(0) = 0$ and $\varphi(1) = 1$; $\varphi(\lambda+\mu) = (\lambda+\mu)1 = \lambda 1 + \mu 1$; $\varphi(\lambda\mu) = (\lambda\mu)1 = (\lambda1)(\mu1) = \varphi(\lambda)\varphi(\mu)$, using bilinearity and $1\cdot1 = 1$; and $\varphi$ is injective, because $\lambda1 = 0$ with $\lambda \ne 0$ would give $1 = \lambda^{-1}\lambda 1 = 0$, contradicting [L1]. [L1, algebra]

1.2 For every $a \in A$ the spectrum $\sigma_A(a)$ is nonempty by [L4]. [L4]

2.1 Fix $a \in A$ and pick $\lambda \in \sigma_A(a)$ by [step 1.2]; then $\lambda 1 - a$ is not invertible by [L3], so $\lambda1 - a = 0$ by the division-algebra hypothesis [L2]; hence $a = \lambda1 = \varphi(\lambda)$ lies in the image of $\varphi$. [step 1.2, L2, L3]

2.2 The isomorphism is isometric: $\|\varphi(\lambda)\| = \|\lambda 1\| = |\lambda|\,\|1\| = |\lambda|$ by [L1]. [step 1.1, L1, algebra]

3.1 Since $a$ was arbitrary, $\varphi$ is surjective, and by [step 1.1] it is an injective complex-algebra homomorphism; hence it is a complex-algebra isomorphism $\mathbb C \to A$ and $A = \mathbb C 1$. [step 1.1, step 2.1, algebra]

4.1 The statements of the theorem are proved: $\varphi$ is an algebra isomorphism by [step 3.1] and an isometry by [step 2.2], so a complex unital Banach division algebra is one-dimensional over $\mathbb C$. [step 2.2, step 3.1] ∎

## Remarks

- **The Axiom of Choice enters only through the nonemptiness of the spectrum.** If one is willing to assume that the spectrum of every element is nonempty, the argument above is choice-free; conversely the theorem is the standard quantitative form of the fact that one-point spectra force division algebras to be scalars.

- **"Division algebra" cannot be weakened to "no zero divisors".** The disc algebra $A(\overline{\mathbb D})$ is a unital commutative complex Banach algebra without zero divisors: a product of two functions whose product vanishes on the connected disc $\mathbb D$ vanishes identically by analytic continuation, so one factor is zero. It is nevertheless not a division algebra, because the coordinate function $z$ is nonzero while $\sigma_{A(\overline{\mathbb D})}(z)=\overline{\mathbb D}$ (`cex-spectrum-can-shrink-in-a-larger-banach-algebra`, `ex-maximal-ideal-space-of-the-disc-algebra`). The boundary argument for the spectrum produces only a *topological* zero divisor, that is, an element $a$ admitting unit vectors $b_n$ with $ab_n\to0$ or $b_na\to0$; topological zero divisors need not be algebraic ones, as $1-z$ in the disc algebra shows, so the two notions must not be conflated. The correct replacement of "no zero divisors" is "no nonzero topological zero divisors": every element of the boundary of the invertible group is a topological zero divisor, so a unital complex Banach algebra in which no nonzero element is a topological zero divisor is a division algebra.

- **Use in the Gelfand theory.** This is the step that identifies the quotient $A/\mathfrak m$ of a commutative unital Banach algebra by a maximal ideal with $\mathbb C$, making characters and maximal ideals correspond; the following page of this track uses the theorem in exactly that form.

- **Reading order.** The example items named by ID above are homed on later pages of the plan, so they are named rather than hyperlinked: a body link to later material must be declared as a forward reference, and Step-5b closure removes every such declaration. Rehoming those items to an earlier page (an owner-only reading-order change) would make the citations backward and restore the links.
