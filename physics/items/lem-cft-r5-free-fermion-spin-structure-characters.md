---
id: lem-cft-r5-free-fermion-spin-structure-characters
kind: lemma
title: Free Majorana and Dirac torus spin-structure characters
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-free-fermion-spin-theory
  - def-countable-choice
  - lem-jacobi-theta-transformation-laws
  - thm-jacobi-theta-triple-product
dependency_roles:
  def-cft-r5-free-fermion-spin-theory: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-jacobi-theta-transformation-laws: mathematical-premise
  thm-jacobi-theta-triple-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Sections 7.3–7.5 and 8.2, printed pp. 91–100 and 114–116, fermion spin-structure characters, the common-spin Dirac sum, and the independent-Majorana sum.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Sections 6.3.10.3–6.3.11.2, printed pp. 218–220, Majorana modes, the spin-structure vector, and the complex Dirac character.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Countable Choice. Let $q=e^{2\pi i\tau}$, $\operatorname{Im}\tau>0$, and use the $\eta$ and $\theta_j$ functions defined in the free-fermion spin-theory definition. Put $a_j=|\theta_j(\tau)/\eta(\tau)|$ for $j=2,3,4$. The common-spin-structure torus traces of the two-Majorana complex Dirac theory are $Z_{NS,NS}=a_3^2$, $Z_{NS,R}=a_4^2$, $Z_{R,NS}=a_2^2$, and $Z_{R,R}=0$. Its specified GSO sum is $Z_D=\frac12(a_3^2+a_4^2+a_2^2)$. A single real Majorana spin sum is $Z_M=\frac12(a_3+a_4+a_2)$, so two independently spin-summed Majoranas have $Z_M^2=\frac14(a_3+a_4+a_2)^2$. Under $S:\tau\mapsto-1/\tau$, $a_2$ and $a_4$ are exchanged and $a_3$ is fixed; under $T:\tau\mapsto\tau+1$, $a_3$ and $a_4$ are exchanged and $a_2$ is fixed. Thus both spin sums are modular invariant.

## Statement references

[[def-cft-r5-free-fermion-spin-theory]]

[[lem-jacobi-theta-transformation-laws]]

[[thm-jacobi-theta-triple-product]]

[Ginsparg, Sections 7.3–7.5 and 8.2](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, Sections 6.3.10.3–6.3.11.2](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

## Facts & Assumptions

**Given:** The NS and R Majorana mode Fock spaces, the common-spin-structure trace convention, and $\operatorname{Im}\tau>0$.

[F1] [[def-cft-r5-free-fermion-spin-theory]] fixes the NS half-integer modes, R integer modes and zero-mode representation, the four spin traces, the GSO sum, and the independent-Majorana spin sum.

[F2] [[thm-jacobi-theta-triple-product]] gives the product for $\Theta(z\mid\tau)$; the $\theta_j$ product specializations used below are derived locally in the proof.

[F3] Under countable choice, [[lem-jacobi-theta-transformation-laws]] gives the inversion formula for $\Theta(z\mid\tau)$ and the shifted-theta relation $\theta(1-1/\tau)=s(\tau)\sum_{n\in\mathbb Z}e^{\pi i(n+1/2)^2\tau}$, with $s(\tau)=\exp(\tfrac12\operatorname{Log}(\tau/i))$. It does not state the separate $\theta_2,\theta_3,\theta_4$ and $\eta$ transformations used below.

[F4] [[def-countable-choice]] supplies countable choice used by [F3].

## Proof

**Given:** $\tau\in\mathfrak H$, the Fock spaces in [F1], and the Axiom of Countable Choice [F4].

1.1 Put $\rho=|q|<1$. The product defining $\eta$ is nonzero: choose $K$ so $|q|^k\le\frac12$ for $k\ge K$. For $|w|<1$, the absolutely convergent series $L(w)=-\sum_{j\ge1}w^j/j$ has $L'(w)=-1/(1-w)$, so $e^{L(w)}/(1-w)$ has derivative $0$ and value $1$ at $w=0$; hence $e^{L(w)}=1-w$. Also $|L(w)|\le |w|/(1-|w|)$, so $\sum_{k\ge K}|L(q^k)|\le2\sum_{k\ge K}\rho^k<\infty$. Thus the tail product is the nonzero exponential $\exp(\sum_{k\ge K}L(q^k))$, every preceding factor $1-q^k$ is nonzero, and $e^{\pi i\tau/12}\ne0$. The product also converges locally uniformly on $\mathfrak H$, since $|q|$ is bounded above by a constant less than $1$ on each compact subset. Therefore $\eta(\tau)\ne0$ and the ratios in the statement are defined. For one real chiral Majorana, the double contraction in $T(z)T(w)$ from $T=-\frac12{:}\psi\partial\psi{:}$ is $\frac14(z-w)^{-4}$, so the Virasoro central term $c/(2(z-w)^4)$ has $c=1/2$. The cylinder trace factor is therefore $q^{-c/24}=q^{-1/48}$. In a chiral NS sector each positive half-integer mode is either empty or occupied, so its trace contributes $1+q^{k+1/2}$; insertion of fermion parity changes this to $1-q^{k+1/2}$. For the two independent real components in one chiral Dirac field, the two traces are $q^{-1/24}\prod_{k\ge0}(1+q^{k+1/2})^2$ and $q^{-1/24}\prod_{k\ge0}(1-q^{k+1/2})^2$. [given, F1, F4, algebra]

1.2 In the R sector the two real zero modes form the two-dimensional complex Clifford module specified in [F1]. Each real Ramond ground has weight $1/16$ by the declared spin-field normalization, so the two-component chiral ground has weight $1/8$; subtracting $c/24=1/24$ gives the factor $q^{1/12}$. Setting $z=\tau/2$ in [F2] and using $\theta_2=e^{\pi i\tau/4}\Theta(\tau/2\mid\tau)$ gives $\theta_2=2q^{1/8}\prod_{n\ge1}(1-q^n)(1+q^n)^2$. Including the two ground states and the positive modes therefore gives $2q^{1/12}\prod_{n\ge1}(1+q^n)^2=\theta_2/\eta$. The parity-inserted trace is zero because the two zero-mode parity eigenspaces have equal dimension and the positive-mode factors are paired. Taking the right-moving trace gives $Z_{R,NS}=a_2^2$ and $Z_{R,R}=0$. [F1, F2, algebra]

2.1 Setting $z=0$ and $z=1/2$ in [F2] gives $\theta_3=\prod_{n\ge1}(1-q^n)(1+q^{n-1/2})^2$ and $\theta_4=\prod_{n\ge1}(1-q^n)(1-q^{n-1/2})^2$. Together with $\eta=q^{1/24}\prod_{n\ge1}(1-q^n)$ these identify the two NS products in step 1.1 with $\theta_3/\eta$ and $\theta_4/\eta$, respectively. Taking the independent right-moving trace gives $Z_{NS,NS}=a_3^2$ and $Z_{NS,R}=a_4^2$. [F2, step 1.1, algebra]

3.1 The four common-spin traces are averaged with coefficient $1/2$ in the defined GSO projection, hence $Z_D=\frac12(a_3^2+a_4^2+a_2^2)$. For one real Majorana, the NS, NS-with-parity, R, and R-with-parity nonchiral traces are $a_3,a_4,a_2,0$; averaging its four spin structures gives $Z_M=\frac12(a_3+a_4+a_2)$. Independence of two separately spin-summed Majorana systems makes their joint trace the product $Z_M^2$. [F1, step 2.1, step 1.2, algebra]

4.1 Write $s(\tau)=\exp(\tfrac12\operatorname{Log}(\tau/i))$, so $|s(\tau)|=|\tau|^{1/2}$. From the theta definitions, $\theta_3(\tau)=\Theta(0\mid\tau)$, $\theta_4(\tau)=\Theta(1/2\mid\tau)$, and $\theta_2(\tau)=e^{\pi i\tau/4}\Theta(\tau/2\mid\tau)$. The inversion formula in [F3] at $z=0$ gives $\theta_3(-1/\tau)=s(\tau)\theta_3(\tau)$; at $z=1/2$ it gives $\theta_4(-1/\tau)=s(\tau)\theta_2(\tau)$. Apply the shifted-theta identity in [F3] with $\tau$ replaced by $-1/\tau$: its left side is $\theta_4(\tau)$ by the series definition, and its right side is $s(-1/\tau)\theta_2(-1/\tau)$. The holomorphic nonzero function $s(\tau)s(-1/\tau)$ has square $1$ and equals $1$ at $\tau=i$, so connectedness of $\mathfrak H$ gives $s(-1/\tau)=s(\tau)^{-1}$ and therefore $\theta_2(-1/\tau)=s(\tau)\theta_4(\tau)$. To obtain the eta factor, apply the triple product [F2] at $z=0$, $z=1/2$, and $z=\tau/2$ (with $Q=e^{\pi i\tau}$ and $q=Q^2$). Absolute convergence permits regrouping and gives $\theta_3=\prod_{k\ge1}(1-q^k)(1+q^{k-1/2})^2$, $\theta_4=\prod_{k\ge1}(1-q^k)(1-q^{k-1/2})^2$, and $\theta_2=2q^{1/8}\prod_{k\ge1}(1-q^k)(1+q^k)^2$. Since $\prod_{k\ge1}(1+q^k)\prod_{k\ge1}(1-q^{2k-1})=1$, multiplication yields $\theta_2\theta_3\theta_4=2q^{1/8}\prod_{k\ge1}(1-q^k)^3=2\eta(\tau)^3$. The three theta inversion formulas then imply $\eta(-1/\tau)^3=s(\tau)^3\eta(\tau)^3$. The continuous nonzero ratio $\eta(-1/\tau)/(s(\tau)\eta(\tau))$ has cube $1$, so it is constant on the connected upper half-plane; its value at $\tau=i$ is $1$. Thus $|\eta(-1/\tau)|=|\tau|^{1/2}|\eta(\tau)|$, and the three $S$ laws exchange $a_2,a_4$ and fix $a_3$. Directly from the series, $\theta_3(\tau+1)=\theta_4(\tau)$, $\theta_4(\tau+1)=\theta_3(\tau)$, and $\theta_2(\tau+1)=e^{\pi i/4}\theta_2(\tau)$; from the product, $\eta(\tau+1)=e^{\pi i/12}\eta(\tau)$. Hence $T$ exchanges $a_3,a_4$ and fixes $a_2$. Both displayed spin sums are symmetric in $a_2,a_3,a_4$, so they are invariant. [F2, F3, F4, step 1.1, algebra] ∎
## Remarks

The R/R trace vanishes from fermion zero modes. The common-spin Dirac sum and the product of two independent Majorana spin sums are distinct expressions; their later identification with the circle and reflection orbifold requires separate charge and twisted-sector arguments.
