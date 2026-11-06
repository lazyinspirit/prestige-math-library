---
id: lem-cft-r5-charged-heisenberg-fock-module
kind: lemma
title: Charged rank-one Fock spaces carry a central-charge-one Virasoro action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-charged-heisenberg-fock-space
  - def-virasoro-algebra
dependency_roles:
  def-cft-r5-charged-heisenberg-fock-space: mathematical-premise
  def-virasoro-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Section 8.1, printed pp. 112–114, oscillator trace and conformal weights of charge sectors.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For every real $p$, the operators in the charged rank-one Heisenberg Fock space satisfy $[a_m,a_n]=m\delta_{m+n,0}I$ and the normally ordered modes $L_n^{(p)}$ are a representation of the Virasoro algebra with central charge $1$. On the algebraic core,

$$L_0^{(p)}=\frac{p^2}{2}I+\sum_{k\ge1}k x_k\frac{\partial}{\partial x_k},\qquad L_{-1}^{(p)}=\sum_{k\ge1} kx_{k+1}\frac{\partial}{\partial x_k}+p x_1.$$

Let $\mathcal I$ be the set of finitely supported sequences $u:\mathbb Z_{>0}\to\mathbb Z_{\ge0}$, where $\mathbb Z_{>0}=\{1,2,\ldots\}$. The monomial $\prod_{k\ge1}x_k^{u_k}$ has oscillator level $\sum_{k\ge1}ku_k$ and conformal weight $p^2/2+\sum_{k\ge1}ku_k$. For real $p$, the inner product is positive. Put
$$e_u=\frac{\prod_{k\ge1}x_k^{u_k}}{\sqrt{\prod_{k\ge1}k^{u_k}u_k!}}\qquad (u\in\mathcal I).$$
For $k\ge1$, the closures $A_k,A_{-k}$ in $F_p$ of the polynomial mode restrictions have domains
$$\operatorname{Dom}(A_k)=\left\{\sum_u c_ue_u:\sum_u ku_k|c_u|^2<\infty\right\},\qquad \operatorname{Dom}(A_{-k})=\left\{\sum_u c_ue_u:\sum_u k(u_k+1)|c_u|^2<\infty\right\},$$
with $A_ke_u=\sqrt{ku_k}\,e_{u-\delta_k}$ (zero when $u_k=0$) and $A_{-k}e_u=\sqrt{k(u_k+1)}\,e_{u+\delta_k}$, where $(\delta_k)_j=1$ if $j=k$ and $0$ otherwise. They satisfy $A_k^*=A_{-k}$ and $A_{-k}^*=A_k$ with these Hilbert-space domains. The zero mode $a_0=pI$ is bounded self-adjoint for real $p$.

## Statement references

[Ginsparg, Section 8.1](https://arxiv.org/pdf/hep-th/9108028v1)

## Facts & Assumptions

**Given:** A real number $p$ and the polynomial core and modes of the charged Heisenberg Fock space.

[F1] [[def-cft-r5-charged-heisenberg-fock-space]] fixes $a_{-k}=x_k$, $a_k=k\partial_{x_k}$, $a_0=pI$, the normal-order convention, and the monomial inner product.

[F2] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] uses the bracket $[L_m,L_n]=(m-n)L_{m+n}+\frac{m^3-m}{12}\delta_{m+n,0}C$.

## Proof

**Given:** $p\in\mathbb R$.

1.1 Multiplication and differentiation give $[a_k,a_{-\ell}]=k\delta_{k\ell}I$ for $k,\ell\ge1$, while all two multiplication operators commute, all two derivative operators commute, and $a_0=pI$ commutes with every mode. Therefore $[a_m,a_n]=m\delta_{m+n,0}I$ for all integers $m,n$. [given, F1, algebra]

2.1 For fixed $n$ and a fixed polynomial, terms in $\sum_j{:}a_j a_{n-j}{:}$ with a sufficiently large positive index kill that polynomial; terms with two negative indices have $j+(n-j)=n$ and hence occur only finitely many times. Thus $L_n^{(p)}$ is well defined on $P$. [F1, step 1.1, algebra]

3.1 In the commutator $[L_m^{(p)},a_n]$, the identity $[AB,C]=A[B,C]+[A,C]B$ leaves only the summands whose one index is $-n$. Their equal contributions and the prefactor $1/2$ give $[L_m^{(p)},a_n]=-n a_{m+n}$. [F1, step 1.1, step 2.1, algebra]

4.1 Set $C_{m,n}=[L_m^{(p)},L_n^{(p)}]-(m-n)L_{m+n}^{(p)}$. The Jacobi identity and step 3.1 show $[C_{m,n},a_k]=0$ for every $k$. An operator on $P$ commuting with every multiplication $x_j$ and every derivative $j\partial_{x_j}$ is scalar: its value on $1$ is killed by each derivative, so is constant, and commutation with multiplication determines its value on every monomial. Hence each $C_{m,n}$ is scalar. Since $L_j^{(p)}$ has oscillator degree $-j$, this scalar is zero unless $m+n=0$. [step 1.1, step 3.1, algebra]

5.1 For $m>0$, normal ordering gives $L_{-m}^{(p)}1=px_m+\frac12\sum_{k=1}^{m-1}x_kx_{m-k}$, $L_m^{(p)}1=0$, and $L_0^{(p)}1=(p^2/2)1$. Using step 3.1, $[L_m^{(p)},L_{-m}^{(p)}]1=(mp^2+\frac12\sum_{k=1}^{m-1}k(m-k))1$. Subtracting $2mL_0^{(p)}1=mp^2 1$ leaves $\frac12\sum_{k=1}^{m-1}k(m-k)1=(m^3-m)1/12$. Antisymmetry gives the same polynomial for negative $m$, and $m=0$ gives zero. This proves the Virasoro bracket with central charge $1$ in [F2]'s convention. [F2, step 3.1, step 4.1, algebra]

6.1 Direct evaluation of the normally ordered sums for $n=0,-1$ gives the two displayed formulas. For monomials, the inner product in [F1] gives $\langle a_k f,g\rangle=\langle f,a_{-k}g\rangle$ and $\langle a_{-k}f,g\rangle=\langle f,a_kg\rangle$ for every $k\ge1$. Since each normally ordered sum acts finitely on a polynomial, termwise adjunction gives $\langle L_n^{(p)}f,g\rangle=\langle f,L_{-n}^{(p)}g\rangle$ for $f,g\in P$. These are algebraic-core identities for the quadratic modes. The weight formula follows by applying the Euler operator in $L_0^{(p)}$ to each monomial. [F1, step 1.1, step 5.1, algebra]

7.1 Let $e_u$ be the normalized monomial basis in the Statement. On this orthonormal basis, the polynomial restrictions act by the displayed weighted shifts. If a sequence and its weighted-shift images converge in $F_p$, coordinatewise convergence gives the same shift formulas for the limits, so the maximal weighted shifts are closed. Truncation to finitely many basis vectors converges in each graph norm, hence these are the closures of the polynomial restrictions. For $v=\sum_uc_ue_u$, the adjoint coefficient identity against each $e_u$ forces $A_k^*v$ to have the coefficients of $A_{-k}v$. Because finite-support vectors are graph-dense, this identity extends to the full domain exactly when the forced coefficient sequence is square-summable, which is equivalent to $\sum_u k(u_k+1)|c_u|^2<\infty$. Reversing the roles gives $A_{-k}^*=A_k$. The zero mode is the bounded self-adjoint scalar $pI$ because $p\in\mathbb R$. [F1, step 1.1, algebra] ∎
## Remarks

The charge $p$ is real in this lemma because the stated positive inner product makes $a_0=pI$ self-adjoint. The algebraic formulas also define representations for complex $p$, but that larger family is not asserted to be unitary.
