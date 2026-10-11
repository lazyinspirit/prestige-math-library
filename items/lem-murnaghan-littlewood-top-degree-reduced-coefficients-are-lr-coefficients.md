---
id: lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients
kind: lemma
title: "Murnaghan–Littlewood: top-degree reduced coefficients are Littlewood–Richardson coefficients"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient,
       def-iterated-schur-coefficients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Murnaghan–Littlewood Theorem, p. 4"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I §5 (Littlewood-Richardson rule)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Statement

Let $\alpha,\beta,\gamma$ be partitions with $|\gamma|=|\alpha|+|\beta|$. Then
$$\bar g^\gamma_{\alpha,\beta}=c^\gamma_{\alpha,\beta},$$
the Littlewood–Richardson coefficient
([[def-littlewood-richardson-tableau-and-coefficient]]). In particular
$$\bar g^{\alpha+\beta}_{\alpha,\beta} =c^{\alpha+\beta}_{\alpha,\beta}=1,$$
where $\alpha+\beta=(\alpha_1+\beta_1,\alpha_2+\beta_2,\dots)$.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta,\gamma$ with $|\gamma|=|\alpha|+|\beta|$, and six-tuples of partitions $(\mu,\lambda,\eta,\rho,\theta,\pi)$.

[F1] $\bar g^\gamma_{\alpha,\beta}=\sum_{\mu,\lambda,\eta,\rho,\theta,\pi}c^\gamma_{\mu,\theta,\pi}c^\alpha_{\rho,\lambda,\theta}c^\beta_{\rho,\eta,\pi}g^\mu_{\lambda,\eta}$, and for every nonzero summand $|\alpha|=|\rho|+|\lambda|+|\theta|$, $|\beta|=|\rho|+|\eta|+|\pi|$, $|\gamma|=|\mu|+|\theta|+|\pi|$, $|\mu|=|\lambda|=|\eta|$, with all summands nonnegative integers ([[lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients]]).

[F2] $c^\delta_{a,b,c}=[s_\delta]s_as_bs_c$, symmetric in $a,b,c$; moreover $c^\delta_{a,b,\varnothing}=[s_\delta]s_as_b$, equal to the Littlewood–Richardson coefficient $c^\delta_{a,b}$ ([[def-iterated-schur-coefficients]], [[thm-littlewood-richardson-schur-product-expansion]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F3] LR tableaux have weakly increasing rows, strictly increasing columns, the prescribed content and a lattice reading word ([[def-littlewood-richardson-tableau-and-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 *Degree collapse.* Take a nonzero summand of the expansion in [F1]; by the degree equations of [F1], $|\alpha|+|\beta|-|\gamma|=(|\rho|+|\lambda|+|\theta|)+(|\rho|+|\eta|+|\pi|)-(|\mu|+|\theta|+|\pi|)=2|\rho|+|\lambda|+|\eta|-|\mu|=2|\rho|+|\mu|$, using $|\lambda|=|\eta|=|\mu|$. Since $|\gamma|=|\alpha|+|\beta|$, this gives $2|\rho|+|\mu|=0$, so $\rho=\mu=\varnothing$ and then $|\lambda|=|\eta|=0$, so $\lambda=\eta=\varnothing$. [F1]

2.1 *Collapse of the sum.* With $\rho=\lambda=\eta=\mu=\varnothing$, the only possibly nonzero summands have $c^\alpha_{\varnothing,\varnothing,\theta}=[s_\alpha]s_\theta=\delta_{\alpha,\theta}$ and $c^\beta_{\varnothing,\varnothing,\pi}=[s_\beta]s_\pi=\delta_{\beta,\pi}$, and $g^\varnothing_{\varnothing,\varnothing}=1$; hence $\bar g^\gamma_{\alpha,\beta}=c^\gamma_{\varnothing,\alpha,\beta}=c^\gamma_{\alpha,\beta}$ by the symmetry of the threefold coefficient in [F2], which is the first display. [F1, F2, step 1.1]

3.1 *The top coefficient equals one.* For $\gamma=\alpha+\beta$ we have $c^{\alpha+\beta}_{\alpha,\beta}=1$. If $\beta=\varnothing$, the skew shape is empty and its unique empty tableau proves this; this is also the induction base. Suppose $\beta\ne\varnothing$. Existence: fill row $i$ of the skew shape $(\alpha+\beta)/\alpha$, which has $\beta_i$ cells, with the letter $i$; the rows are constant and hence weakly increasing, the columns are strictly increasing because the letters increase down the rows, and the reading word is $1^{\beta_1}2^{\beta_2}\cdots$, which is lattice because $\beta$ is weakly decreasing. Uniqueness: let $T$ be a Littlewood–Richardson tableau of shape $(\alpha+\beta)/\alpha$ and content $\beta$. The first letter of its reading word is the rightmost cell of the first skew row; the lattice condition on the prefix of length one forces that letter to be $1$, and since the row is weakly increasing every cell of the first row is $1$. The first row is read first and consists of exactly $\beta_1$ cells, so it exhausts the $\beta_1$ letters $1$ of the content. Deleting the first row leaves the shape $(\alpha'+\beta')/\alpha'$ with $\alpha'=(\alpha_2,\alpha_3,\dots)$, $\beta'=(\beta_2,\beta_3,\dots)$, carrying no letter $1$; its reading word, with every letter decreased by one, satisfies the lattice condition: the comparisons among letters $\ge2$ hold because they hold for the corresponding prefixes of the original lattice word, and the comparison with letter $1$ is not required after the shift. Induction on the number of rows now shows that row $i$ consists of $\beta_i$ copies of $i$, so $T$ is the displayed filling and $c^{\alpha+\beta}_{\alpha,\beta}=1$. With [F2] and step 2.1 this gives $\bar g^{\alpha+\beta}_{\alpha,\beta}=c^{\alpha+\beta}_{\alpha,\beta}=1$. [F2, F3, step 2.1]

4.1 *Empty cases.* If $\alpha=\varnothing$, step 2.1 gives $\bar g^\gamma_{\varnothing,\beta}=c^\gamma_{\varnothing,\beta}=[s_\gamma]s_\beta=\delta_{\gamma,\beta}$ under the top-degree hypothesis. Thus equal size alone does not force $\gamma=\beta$: the value is zero for every other partition of that size. Similarly, if $\beta=\varnothing$ the value is $\delta_{\gamma,\alpha}$. If both inputs are empty then the top-degree hypothesis forces $\gamma=\varnothing$ and the coefficient is one. No choice principle is used. [F1, F2, step 2.1] ∎