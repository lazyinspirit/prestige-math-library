---
id: lem-even-row-tableau-generating-identity
kind: lemma
title: Generating identity for tableaux with even row lengths
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Florian Schreier-Aigner, Growth diagram proofs for the Littlewood identities, §§2–3"
      url: https://arxiv.org/pdf/2404.04014
      locator: "The horizontal-strip commutation and even-part projection identities; the finite interval bijections are supplied below."
---

## Statement

Let $t\ge1$. A semistandard tableau has weakly increasing rows and strictly increasing columns. For tableaux $T$ with entries in $[t]$ and all row lengths even, let $w_i(T)$ count its entries equal to $i$. Then, as a formal power series,
$$
\sum_T\prod_{i=1}^t x_i^{w_i(T)}=\prod_{1\le i\le j\le t}(1-x_ix_j)^{-1}.
$$
In particular the number of these tableaux with $2d$ boxes is $\binom{t(t+1)/2+d-1}{d}$ for $d\ge0$.

## Facts & Assumptions

**Given:** Finite partitions, including the empty partition, padded by zero parts. Write $\mu\prec\lambda$ when $\lambda_i\ge\mu_i\ge\lambda_{i+1}$ for every $i$; equivalently $\lambda/\mu$ is a horizontal strip.

## Proof

1.1 We first give a finite interval bijection. Fix partitions $\lambda,\rho$. Common lower interlacers $\mu\prec\lambda,\rho$ have independent coordinates $\max(\lambda_{i+1},\rho_{i+1})\le\mu_i\le\min(\lambda_i,\rho_i)$. If one interval is empty, there are no common upper interlacers either. Otherwise, from such a $\mu$ and an integer $a\ge0$, set $\nu_1=\max(\lambda_1,\rho_1)+a$ and $\nu_{i+1}=\max(\lambda_{i+1},\rho_{i+1})+\min(\lambda_i,\rho_i)-\mu_i$. These are precisely the independent intervals for a common upper interlacer $\lambda,\rho\prec\nu$, with its first coordinate unbounded above. The coordinates form a partition since successive intervals are separated by $\max(\lambda_{i+1},\rho_{i+1})\ge\min(\lambda_{i+1},\rho_{i+1})$. The inverse recovers $a$ from $\nu_1$ and reverses each finite interval. Summing the coordinates gives $|\nu|+|\mu|=|\lambda|+|\rho|+a$. [given, construct, algebra]

2.1 On the vector space with partitions as basis define $U_x\lambda=\sum_{\lambda\prec\nu}x^{|\nu|-|\lambda|}\nu$ and $D_y\lambda=\sum_{\mu\prec\lambda}y^{|\lambda|-|\mu|}\mu$, interpreted coefficientwise in formal power series. The coefficient from $\lambda$ to $\rho$ in $D_yU_x$ sums over the common upper interlacers, while that in $U_xD_y$ sums over the common lower interlacers. The bijection of step 1.1 gives $x^{|\nu|-|\lambda|}y^{|\nu|-|\rho|}=(xy)^a x^{|\rho|-|\mu|}y^{|\lambda|-|\mu|}$. Thus $D_yU_x=(1-xy)^{-1}U_xD_y$. All coefficients of prescribed total degree involve only finitely many partitions, so these rearrangements are valid formally. [step 1.1, algebra]

2.2 Let $E$ be the partitions with even parts and let $\pi_E$ be the linear functional equal to one on $E$ and zero on the other partition basis vectors. Fix $\lambda$ and put $\alpha_i=\lfloor\lambda_i/2\rfloor$, $\beta_i=\lceil\lambda_i/2\rceil$. An even upper interlacer $2\theta$ of $\lambda$ is equivalent to a common upper interlacer $\theta$ of $\alpha,\beta$: its inequalities are $\theta_i\ge\beta_i$ and $\theta_{i+1}\le\alpha_i$. Similarly an even lower interlacer $2\eta$ is equivalent to a common lower interlacer $\eta$ of $\alpha,\beta$, since $\alpha_i\ge\eta_i\ge\beta_{i+1}$. Apply step 1.1 to $\alpha,\beta$. As $|\alpha|+|\beta|=|\lambda|$, it gives $|2\theta|-|\lambda|=|\lambda|-|2\eta|+2a$. Consequently $\pi_EU_x=(1-x^2)^{-1}\pi_ED_x$. This includes the case of empty interlacer sets and the empty partition. [step 1.1, construct, algebra]

3.1 A chain $\varnothing=\lambda^{(0)}\prec\lambda^{(1)}\prec\cdots\prec\lambda^{(t)}$ corresponds bijectively to a semistandard tableau: fill $\lambda^{(i)}/\lambda^{(i-1)}$ with $i$. The horizontal-strip condition forbids repeated labels in a column; the nested partition condition makes the rows weakly increasing. Conversely the boxes with entries at most $i$ in any such tableau form the required partition. Thus its weight-generating series, restricted to even row lengths, is $\pi_EU_{x_t}\cdots U_{x_1}\varnothing$. Apply step 2.2 to the leftmost up operator, then step 2.1 to commute $D_{x_t}$ past each preceding $U_{x_i}$. Since $D_{x_t}\varnothing=\varnothing$, this produces the factor $(1-x_t^2)^{-1}\prod_{i<t}(1-x_ix_t)^{-1}$ and the same expression with $t-1$ operators. Induction from $t=0$ proves the displayed identity. Substituting all $x_i=q$ gives $(1-q^2)^{-t(t+1)/2}$, whose coefficient of $q^{2d}$ is the stated binomial coefficient by the product expansion counting monomials of degree $d$ in $t(t+1)/2$ independent variables. [step 2.1, step 2.2, construct, algebra] ∎
