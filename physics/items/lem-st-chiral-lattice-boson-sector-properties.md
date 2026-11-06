---
id: lem-st-chiral-lattice-boson-sector-properties
kind: lemma
title: "Even-lattice chiral boson sector properties"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 2
domain: mathematics
physical_scope: null
deps:
  - def-st-chiral-lattice-boson-sector
  - def-positive-even-unimodular-lattice
  - def-vertex-algebra-state-field
  - def-formal-distribution-on-a-vector-space
  - lem-state-field-reconstruction-from-local-generators
dependency_roles:
  def-st-chiral-lattice-boson-sector: mathematical-premise
  def-positive-even-unimodular-lattice: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
  lem-state-field-reconstruction-from-local-generators: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104–107: chiral fermion bosonization and E8/rank-16 even self-dual lattice sectors."
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.9, printed pp. 140–154: RNS spectrum/GSO, Type I projection, and heterotic construction."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the algebraic chiral boson sector of a positive-definite even integral lattice $\Lambda$ of rank $r$ fixed by the preceding chiral-boson construction, the lattice fields form an associative mutually local lattice vertex algebra on the finite-energy state space. A momentum state $|\lambda\rangle$ has conformal weight $\langle\lambda,\lambda\rangle/2$, descendants add their oscillator level, and the stress tensor has central charge $c=r$. This central-charge calculation depends only on the rank-$r$ Heisenberg oscillator algebra, not on whether its zero-mode labels are discrete or continuous. For a rank-16 positive-definite even unimodular lattice, the internal chiral sector therefore has $c=16$; the ten noncompact right-moving bosons use the same rank calculation with $r=10$.

## Statement references

[[def-st-chiral-lattice-boson-sector]]

[[def-positive-even-unimodular-lattice]]

[[def-vertex-algebra-state-field]]

[[lem-state-field-reconstruction-from-local-generators]]

[[def-formal-distribution-on-a-vector-space]]

[Ginsparg, Chapter 7](https://arxiv.org/pdf/hep-th/9108028v1)

## Facts & Assumptions

**Given:** A positive-definite even integral lattice of rank $r\ge1$, a fixed lattice basis, and the finite-energy state space and mode actions of the preceding definition.

[F1] [[def-st-chiral-lattice-boson-sector]] fixes the Heisenberg commutator $[a^v_m,a^w_n]=m\langle v,w\rangle\delta_{m+n,0}$, the basis cocycle $\epsilon$, momentum-shift operator $U_\lambda$, lattice fields, and stress tensor.

[F2] [[def-positive-even-unimodular-lattice]] defines evenness by $\langle\lambda,\lambda\rangle\in2\mathbb Z$ and integrality by $\langle\lambda,\mu\rangle\in\mathbb Z$.


[F3] [[lem-state-field-reconstruction-from-local-generators]] constructs a unique vertex algebra from mutually local creative fields, translation covariance, a translation-killed vacuum, and negative-mode spanning. Its state map carries a field residue product to the corresponding mode acting on the creative state. [[def-vertex-algebra-state-field]] specifies all four axioms to be verified.

[F4] [[def-formal-distribution-on-a-vector-space]] fixes field truncation, the two formal binomial expansions, and the residue definition of every integer field product.

## Proof

1.1 The exponent defining $\epsilon$ is bilinear in the integer coordinates of each argument, so $\epsilon(\lambda,\mu)\epsilon(\lambda+\mu,\nu)=\epsilon(\mu,\nu)\epsilon(\lambda,\mu+\nu)$ after expanding both exponents. Also $\epsilon(0,\mu)=\epsilon(\lambda,0)=1$. Thus the momentum shifts are normalized and associative. Modulo two,
$$\langle\lambda,\mu\rangle=\sum_iG_{ii}\lambda_i\mu_i+\sum_{i>j}G_{ij}(\lambda_i\mu_j+\lambda_j\mu_i)\equiv\sum_{i>j}G_{ij}(\lambda_i\mu_j+\lambda_j\mu_i),$$
since $G_{ii}$ is even. Therefore $\epsilon(\lambda,\mu)/\epsilon(\mu,\lambda)=(-1)^{\langle\lambda,\mu\rangle}$. [F1, F2, algebra]

1.2 The explicit oscillator operators in [F1] satisfy their commutator on every polynomial momentum sector, including the zero modes. For a fixed polynomial all sufficiently large positive modes vanish. The positive exponential in $Y(e^\lambda,z)$ differentiates that polynomial only finitely many times, so it gives a finite Laurent polynomial; the negative exponential has nonnegative powers of $z$, and each coefficient is a finite sum. Integrality of $\langle\lambda,\mu\rangle$ then makes $Y(e^\lambda,z)$ lower-truncated on every state. The currents are fields for the same reason. Thus these are actual fields in [F4], not merely arbitrary formal distributions. [F1, F2, F4, algebra]

2.1 Commuting the positive exponential of the $\lambda$ field past the negative exponential of the $\mu$ field gives the scalar contraction
$$\exp\!\left(-\langle\lambda,\mu\rangle\sum_{n\ge1}\frac{(w/z)^n}{n}\right)=\iota_{z,w}(1-w/z)^{\langle\lambda,\mu\rangle}.$$
Moving its zero-mode factor past $U_\mu$ supplies $z^{\langle\lambda,\mu\rangle}$. The common ordered expression is consequently multiplied by $\epsilon(\lambda,\mu)\iota_{z,w}(z-w)^{\langle\lambda,\mu\rangle}$. In the opposite order the same oscillator and momentum-shift expression is multiplied by $\epsilon(\mu,\lambda)\iota_{w,z}(w-z)^{\langle\lambda,\mu\rangle}$. Step 1.1 identifies the signs. Multiplying by $(z-w)^N$ with $N\ge\max(0,-\langle\lambda,\mu\rangle)$ makes both scalar expansions the same polynomial, proving mutual locality. The current-current commutator is $\langle v,w\rangle\partial_w\delta(z,w)$ and is killed by $(z-w)^2$. Directly $[a^v_m,Y(e^\lambda,w)]=\langle v,\lambda\rangle w^mY(e^\lambda,w)$, including $m=0$; hence the current-lattice commutator is $\langle v,\lambda\rangle\delta(z,w)Y(e^\lambda,w)$ and is killed by $z-w$. All pairs in the generating family of currents and momentum fields are local. [F1, F2, F4, step 1.1, algebra]

2.2 Let $\mathsf T$ be the explicit operator in [F1]. It kills $\mathbf1$ and satisfies $[\mathsf T,a^v_m]=-m a^v_{m-1}$ for every integer $m$, so $[\mathsf T,J^v(z)]=\partial_zJ^v(z)$. Also $[\mathsf T,U_\lambda]=a^\lambda_{-1}U_\lambda$. Write the two oscillator exponentials as $E_-(z),E_+(z)$, in their displayed order. Their commuting exponents give
$$[\mathsf T,E_-]=\partial_zE_--a^\lambda_{-1}E_-,\qquad [\mathsf T,E_+]=\partial_zE_++z^{-1}a^\lambda_0E_+.$$
Here $[\mathsf T,z^{a^\lambda_0}]=0$. When computing $[\mathsf T,E_-E_+U_\lambda z^{a^\lambda_0}]$, use
$$E_+a^\lambda_{-1}=(a^\lambda_{-1}-\langle\lambda,\lambda\rangle z^{-1})E_+,\qquad a^\lambda_0U_\lambda=U_\lambda(a^\lambda_0+\langle\lambda,\lambda\rangle).$$
The two norm terms cancel, and the remaining $z^{-1}a^\lambda_0$ is precisely the derivative of the rightmost $z^{a^\lambda_0}$. Thus $[\mathsf T,Y(e^\lambda,z)]=\partial_zY(e^\lambda,z)$, with the stated zero-mode order. [F1, step 1.2, algebra]

3.1 The currents applied to $\mathbf1$ have nonnegative powers with constant state $a^v_{-1}\mathbf1$. Likewise $Y(e^\lambda,z)\mathbf1=E_-(z)|\lambda\rangle$ has nonnegative powers and constant state $|\lambda\rangle$. Translation covariance and $\mathsf T\mathbf1=0$ give the coefficient recursion $(k+1)v_{k+1}=\mathsf T v_k$ for each such vacuum series. They are therefore exactly $e^{z\mathsf T}a^v_{-1}\mathbf1$ and $e^{z\mathsf T}|\lambda\rangle$. The mode $Y(e^\lambda)_{(-1)}\mathbf1$ produces $|\lambda\rangle$, and negative current modes then produce every oscillator monomial on that sector. These states span the full algebraic direct sum. All hypotheses of [F3] have now been verified, so it gives a unique state-field map with field truncation, vacuum/creation, translation and locality, extending the displayed generating fields. [F1, F3, step 1.2, step 2.1, step 2.2, construct]

4.1 This state-field map is exactly the descendant prescription in the definition. For a current $J^v$ and a field $B$, expand the two binomial expressions in [F4] in its $(-n)$th product, for $n\ge1$. Their residue separates the original current modes with $m<0$ from those with $m\ge0$ and gives
$$(J^v)_{(-n)}B=\frac{\partial_z^{n-1}J^v_-}{(n-1)!}B+B\frac{\partial_z^{n-1}J^v_+}{(n-1)!}.$$
By the state transport in [F3], its creative state is $a^v_{-n}b$ if $B=Y(b,z)$. Induction on the number of oscillator factors proves the displayed recursive state-field formula, and uniqueness makes it independent of how an oscillator monomial is ordered. In particular all descendant fields inherit the vertex-algebra axioms. The transported residue products give the vertex-algebra iterated products; associativity here is the formal vertex-algebra product convention, not equality of unexpanded products in incompatible radial orders. [F1, F3, F4, step 3.1, algebra]

5.1 The stress tensor is the reconstructed field of $\omega=\frac12\sum_i(a^{e_i}_{-1})^2\mathbf1$, for an orthonormal basis $e_i$. Its modes are $L_m=\frac12\sum_i\sum_{k\in\mathbb Z}:a^{e_i}_k a^{e_i}_{m-k}:$, with every negative-index oscillator placed to the left; each sum is finite on a state. At $m=0,-1$ this gives
$$L_0=\frac12\sum_i(a^{e_i}_0)^2+\sum_i\sum_{n\ge1}a^{e_i}_{-n}a^{e_i}_n,\qquad L_{-1}=\sum_i a^{e_i}_{-1}a^{e_i}_0+\sum_i\sum_{n\ge1}a^{e_i}_{-n-1}a^{e_i}_n=\mathsf T.$$
Thus $|\lambda\rangle$ has weight $\langle\lambda,\lambda\rangle/2$ and $a^v_{-n}$ adds $n$. The current contraction is $J^{e_i}(z)J^{e_j}(w)\sim\delta_{ij}(z-w)^{-2}$. In $T(z)T(w)$ the two double contractions for each $i$ give $\frac12(z-w)^{-4}$; the four single contractions, including their first Taylor term at $w$, give $2T(w)(z-w)^{-2}+\partial_wT(w)(z-w)^{-1}$. The fourth-order coefficient is therefore $r/2$, so $c=r$. This contraction calculation uses only the oscillator rank, not discreteness of the momentum labels. It gives the stated values 16 and 10 at those ranks. [F1, F2, step 4.1, algebra] ∎

## Remarks

This local proof supplies the even-lattice chiral algebra and central-charge interface. It does not prove modular covariance of a full heterotic spin-structure sum or identify a global gauge group.
