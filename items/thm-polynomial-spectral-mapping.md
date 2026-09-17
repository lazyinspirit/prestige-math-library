---
id: thm-polynomial-spectral-mapping
kind: theorem
title: Polynomial spectral mapping
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, thm-fundamental-theorem-of-algebra-liouville-proof, def-unital-banach-algebra, def-invertible-element-and-general-linear-group-of-a-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.2.1 and the Jordan-form computation of spectra, printed pp. 219–222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Let $A$ be a unital complex Banach algebra, let $a \in A$, and let
$p \in \mathbb C[z]$ be a complex polynomial with constant term $c_0$ and degree
at most $n$. Form $p(a) := \sum_{k=0}^{n} c_k a^k \in A$, with $a^0 := 1$. Then

$$\sigma_A\bigl(p(a)\bigr) \;=\; p\bigl(\sigma_A(a)\bigr) \;=\; \{\,p(\lambda) : \lambda \in \sigma_A(a)\,\},$$

where spectra are taken in the ambient algebra $A$
([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]). The identity holds for
constant polynomials as well: if $p \equiv c$ then $p(a) = c1$ and both sides
equal $\{c\}$.

## Facts & Assumptions

**Given:** A unital complex Banach algebra $A$, an element $a \in A$, and a complex polynomial $p$; write $p(a) = \sum_k c_k a^k$, a finite sum of scalar multiples of powers of $a$.

[L1] The algebra $A$ is associative, the multiplication is bilinear and $1u = u1 = u$; every polynomial in $a$ commutes with $a$, and powers of $a$ satisfy the usual index laws ([[def-unital-banach-algebra]]).

[L2] For $u \in A$ the element $z1 - u$ is invertible exactly when $z \in \rho_A(u)$, and invertibility is a two-sided condition; commuting invertible elements have commuting inverses ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]).

[L3] If $u,v \in A$ commute and $uv$ is invertible, then $u$ and $v$ are invertible: with $w := (uv)^{-1}$ one has $u(vw) = uvw = 1$ and $(vw)u = vwu = vuw = uvw = 1$, so $u^{-1} = vw$; symmetrically $v^{-1} = wu$. [L1, L2, algebra]

[L4] Every nonconstant complex polynomial of degree $d$ has a factorisation $q(z) = c\prod_{j=1}^{d}(z - \lambda_j)$ with $c \ne 0$ and $\lambda_j \in \mathbb C$ the roots of $q$ ([[thm-fundamental-theorem-of-algebra-liouville-proof]]).

## Proof

**Proof technique:** direct.

1.1 Constant case: if $p \equiv c$ then $p(a) = c1$ and, for $z \in \mathbb C$, the element $z1 - c1 = (z-c)1$ is invertible exactly when $z \ne c$ — its inverse is then $(z-c)^{-1}1$ — while at $z = c$ it is $0$, which is not invertible in a nonzero algebra. Hence $\sigma_A(c1) = \{c\} = p(\sigma_A(a))$. [L1, L2, algebra]

1.2 Nonconstant case, factor step: for $\lambda \in \mathbb C$ the polynomial $q(z) := p(z) - p(\lambda)$ vanishes at $\lambda$, so $q(z) = (z-\lambda)r(z)$ for a polynomial $r$ of degree $\deg p - 1$; evaluating at $a$ gives $p(a) - p(\lambda)1 = (a - \lambda 1)\,r(a)$. [L1, algebra]

1.3 Root factorisation of the translated polynomial: for $\mu \in \mathbb C$ the polynomial $z \mapsto p(z) - \mu$ has degree $\deg p \ge 1$ and a leading coefficient $c_{\deg p} \ne 0$, so by [L4] there are $\lambda_1,\dots,\lambda_d \in \mathbb C$ with $p(z) - \mu = c_{\deg p}\prod_{j=1}^{d}(z - \lambda_j)$; evaluating at $a$ gives $p(a) - \mu 1 = c_{\deg p}\prod_{j=1}^{d}(a - \lambda_j1)$, a product of commuting elements. [L4, L1, algebra]

2.1 Forward inclusion: if $\mu \in \sigma_A(p(a))$ then $\mu \in p(\sigma_A(a))$. Indeed, suppose $p(z) - \mu$ has no zero in $\sigma_A(a)$; by [step 1.3] the roots $\lambda_j$ of $p(z)-\mu$ satisfy $p(\lambda_j) = \mu$, so $\lambda_j \notin \sigma_A(a)$ and each $a - \lambda_j1$ is invertible; the product $p(a)-\mu1 = c_{\deg p}\prod_j(a-\lambda_j1)$ of commuting invertible elements is invertible, so $\mu \notin \sigma_A(p(a))$. [step 1.3, L2, algebra]

2.2 Reverse inclusion: if $\lambda \in \sigma_A(a)$ then $p(\lambda) \in \sigma_A(p(a))$. For if $p(a) - p(\lambda)1$ were invertible, then by [step 1.2] the commuting product $(a-\lambda1)r(a)$ would be invertible, so [L3] would make $a - \lambda1$ invertible, contradicting $\lambda \in \sigma_A(a)$. [step 1.2, L3, L2]

3.1 Combining [step 2.1] and [step 2.2] with [step 1.1] gives $\sigma_A(p(a)) = p(\sigma_A(a))$ in the nonconstant case and $\sigma_A(c1) = \{c\} = p(\sigma_A(a))$ in the constant case, which is the assertion. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Where the fundamental theorem of algebra is used.** The forward inclusion [step 2.1] needs the *existence* of all roots of $p(z) - \mu$, which is [[thm-fundamental-theorem-of-algebra-liouville-proof]]. The reverse inclusion needs only polynomial division by the known linear factor $z - \lambda$.

- **The statement is about the ambient algebra.** Both spectra in the theorem are computed in the same unital Banach algebra $A$; the identity can fail for spectra taken in different algebras, since spectra may shrink in a larger algebra (`cex-spectrum-can-shrink-in-a-larger-banach-algebra`).

- **Reading order.** The example items named by ID above are homed on later pages of the plan, so they are named rather than hyperlinked: a body link to later material must be declared as a forward reference, and Step-5b closure removes every such declaration. Rehoming those items to an earlier page (an owner-only reading-order change) would make the citations backward and restore the links.
