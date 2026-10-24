---
id: thm-transfinite-description-of-generated-sigma-algebras
kind: theorem
title: "Assuming countable choice, a generated sigma-algebra is obtained in omega-one stages of complements and countable unions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-generated-sigma-algebra, thm-generated-sigma-algebra-exists-and-is-minimal, thm-transfinite-recursion, def-countable-choice, thm-countable-subsets-of-omega-one-are-bounded]
aliases: []
landmark: true
short: "$\\omega_1$-stage generation"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.15"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "D. H. Fremlin, Measure Theory, Chapter 56, result 567E(b)"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $X$ be a set and
$\mathcal E\subseteq\mathcal P(X)$. Define families
$(\mathcal E_\alpha)_{\alpha<\omega_1}$ by

$$\mathcal E_0:=\mathcal E\cup\{\varnothing\},$$

$$\mathcal E_{\alpha+1}:=\{X\setminus A:A\in\mathcal E_\alpha\}\cup\left\{\bigcup_{n\in\mathbb N}A_n:(A_n)_{n\in\mathbb N}\text{ is a sequence in }\mathcal E_\alpha\right\},$$

and $\mathcal E_\lambda:=\bigcup_{\alpha<\lambda}\mathcal E_\alpha$ at every
nonzero limit ordinal $\lambda<\omega_1$. Then

$$\sigma_X(\mathcal E)=\bigcup_{\alpha<\omega_1}\mathcal E_\alpha.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a set $X$, and a family $\mathcal E\subseteq\mathcal P(X)$.

[L1] Transfinite recursion on a well-order produces a unique function whose value at each stage is prescribed from all earlier values ([[thm-transfinite-recursion]]).

[L2] Under $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ is bounded below $\omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]]).

[L3] The Axiom of Countable Choice supplies a choice function for every family of nonempty sets indexed by $\mathbb N$ ([[def-countable-choice]]).

[L4] The family $\sigma_X(\mathcal E)$ exists and is the smallest sigma-algebra on $X$ containing $\mathcal E$ ([[thm-generated-sigma-algebra-exists-and-is-minimal]]).

## Proof

**Proof technique:** direct.

1.1 The displayed successor and limit prescriptions define a class function of the earlier stages, so [L1] produces the unique family $(\mathcal E_\alpha)_{\alpha<\omega_1}$. Each stage is contained in the next because $A$ is the union of the constant sequence with value $A$. [L1, construct]

2.1 Transfinite induction gives $\mathcal E_\alpha\subseteq\sigma_X(\mathcal E)$ for every $\alpha<\omega_1$: at the base, the generated sigma-algebra contains $\mathcal E$ and $\varnothing$; complements and countable unions stay in the sigma-algebra at a successor stage; and a limit stage is a union of earlier subfamilies. [step 1.1, L4]

2.2 Put $\mathcal S:=\bigcup_{\alpha<\omega_1}\mathcal E_\alpha$. It contains $\mathcal E$ and $\varnothing$ and is closed under complements. Given $(A_n)$ in $\mathcal S$, [L3] may choose stages $\alpha_n$ with $A_n\in\mathcal E_{\alpha_n}$; [L2] bounds the set of chosen stages by some $\beta<\omega_1$. Monotonicity from step 1.1 puts every $A_n$ in $\mathcal E_\beta$, so $\bigcup_nA_n\in\mathcal E_{\beta+1}\subseteq\mathcal S$. Thus $\mathcal S$ is a sigma-algebra. [step 1.1, L2, L3]

3.1 Minimality in [L4] gives $\sigma_X(\mathcal E)\subseteq\mathcal S$, while step 2.1 gives the reverse inclusion. Hence the two families are equal. [step 2.1, step 2.2, L4] ∎
