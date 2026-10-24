---
id: lem-qftx-positive-real-monad-flat-splitting
kind: lemma
title: Constant flat summands of positive real monads
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - lem-qftx-positive-real-monad-analytic-twist-cohomology
  - lem-qftx-positive-real-monad-chain-lift
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  lem-qftx-positive-real-monad-analytic-twist-cohomology: mathematical-premise
  lem-qftx-positive-real-monad-chain-lift: mathematical-premise
axiom_base: "ZF + full AC inherited through the analytic scalar-cohomology input; the finite orthogonal splitting is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. Barth and K. Hulek, Monads and Moduli of Vector Bundles"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf
      locator: "Section 3, Proposition 4, printed pp. 331–332: extension of maps between monad cohomology bundles under explicit Hom/Ext vanishings."
    - title: "J.-L. Verdier, Exposé VII, Astérisque 71–72"
      url: https://numdam.org/item/AST_1980__71-72__1_0.pdf
      locator: "§§6.10–6.12, printed pp. 125–126: the real-line complement and sign argument used in splitting the constant summand."
verification:
  precheck: pending
---

## Statement

Let
$$
\mathcal O(-1)\otimes U\xrightarrow{\alpha}\mathcal O\otimes S\xrightarrow{\beta}\mathcal O(1)\otimes U'
$$
be a locally split linear monad on $\mathbb P^3(\mathbb C)$ with locally free middle cohomology $F$. Suppose a nondegenerate Hermitian form $H$ on $S$, linear in the first variable, satisfies $\beta(z)=\alpha(jz)^\dagger H$ for $j(\lambda_1,\lambda_2,\mu_1,\mu_2)=(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1)$. Assume $H^0(\mathbb P^3,\mathcal O)=\mathbb C$, $H^q(\mathbb P^3,\mathcal O(-1))=0$ for every $q\ge0$, and $H^0(\mathbb P^1,\mathcal O(-1))=0$. Define $L=\bigcap_i\ker\beta_i\subseteq S$ and $M=\sum_i\operatorname{im}\alpha_i\subseteq S$, where $\alpha(z)=\sum_i z_i\alpha_i$ and $\beta(z)=\sum_i z_i\beta_i$. If the Hermitian form induced by $H$ on $H^0(F|_\ell)$ is positive definite for every $\sigma$-invariant real line $\ell$, then $H^0(F)=L=M^{\perp_H}$, $H|_L$ is positive definite, and $S=L\oplus M$ is an $H$-orthogonal decomposition. The monad and its pairing split as the constant summand $L\otimes\mathcal O$ plus the reduced monad $U\otimes\mathcal O(-1)\to M\otimes\mathcal O\to U'\otimes\mathcal O(1)$; the reduced cohomology has no global sections and remains positive on every real line. The conclusion includes $U=0$, when $L=S$ and $M=0$.

## Statement references

[[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[[lem-qftx-positive-real-monad-chain-lift]]

[Barth–Hulek, Section 3, Proposition 4](https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf)

[Verdier, Exposé VII, §§6.10–6.12](https://numdam.org/item/AST_1980__71-72__1_0.pdf)

## Facts & Assumptions

**Given:** The stated monad, the nondegenerate Hermitian form $H$, the real-line pairing, and the analytic scalar vanishings.

[A1] AC is the choice base inherited from the sheaf-cohomology supplier. [[def-axiom-of-choice]]

[F1] The analytic cohomology groups of $\mathcal O$ and $\mathcal O(-1)$ have the values stated in the hypothesis, and $H^0(\mathbb P^1,\mathcal O(-1))=0$. [[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[F2] A linear monad morphism with its specified map on middle cohomology has the unique chain lift from the preceding lemma; its sigma-dual identities are $\beta(z)=\alpha(jz)^\dagger H$ and $\beta(jz)^\dagger=-H\alpha(z)$. [[lem-qftx-positive-real-monad-chain-lift]]

[F3] For a locally split monad, restriction to a real line preserves the two short exact kernel/image sequences, and the induced section pairing is the restriction of $H$ to the orthogonal quotient. [[def-complex-manifolds-and-holomorphic-vector-bundles]]

## Proof

**Given:** The hypotheses and the definitions of $L$ and $M$ in the Statement.

1.1 Let $K=\ker\beta$. The locally split sequence $0\to U\otimes\mathcal O(-1)\to K\to F\to0$ and [F1] give an isomorphism $H^0(K)\to H^0(F)$. Since $K\subseteq S\otimes\mathcal O$ and $H^0(\mathcal O)=\mathbb C$, every global section of $K$ is a constant vector $s\in S$. Its image in $F$ is a global section exactly when $\beta(z)s=0$ for every $z$, equivalently $\beta_i s=0$ for every coefficient. Hence $H^0(F)=L$. [A1, F1, F3, algebra]

1.2 If $l\in L$, then $\beta(z)l=0$ for all $z$. By [F2], $\beta(z)=\alpha(jz)^\dagger H$, so $H(l,\alpha(jz)u)=0$ for every $u$ and $z$; since $j$ is bijective, $l\perp_H M$. Conversely, if $s\perp_H M$, then $\alpha(jz)^\dagger Hs=0$ for every $z$, hence $\beta(z)s=0$ and $s\in L$. Thus $L=M^{\perp_H}$, and nondegeneracy of $H$ gives $M=L^{\perp_H}$. [F2, algebra]

2.1 For a real line $\ell$, a constant vector $l\in L$ defines a section of $F|_\ell$. If that section is zero, exactness of $0\to U\otimes\mathcal O_\ell(-1)\to K|_\ell\to F|_\ell\to0$ and $H^0(\ell,\mathcal O_\ell(-1))=0$ force $l=0$. Hence $L\to H^0(F|_\ell)$ is injective. Positivity of the given section pairing implies $H(l,l)>0$ for every nonzero $l\in L$. Therefore $L$ is nondegenerate and $S=L\oplus M$ orthogonally. [F1, F3, step 1.2, algebra]

3.1 Every coefficient image of $\alpha$ lies in $M$ by definition, and every coefficient of $\beta$ kills $L$ by definition. Thus the complex is the direct sum of $0\to L\otimes\mathcal O\to0$ and the displayed reduced monad on $M$. The induced cohomology splitting is $F=(L\otimes\mathcal O)\oplus F_M$ and is orthogonal for $H$. On each real line, the original section form is positive definite and the $L$ summand is a positive orthogonal subspace by step 2.1; its orthogonal complement, the section space of $F_M|_\ell$, is therefore positive definite. Since $H^0(F)=L$ by step 1.1, the direct sum decomposition implies $H^0(F_M)=0$. If $U=0$, then $\alpha=\beta=0$, so $M=0$ and $L=S$, which gives the stated boundary case. [F3, step 1.1, step 2.1, algebra] ∎
