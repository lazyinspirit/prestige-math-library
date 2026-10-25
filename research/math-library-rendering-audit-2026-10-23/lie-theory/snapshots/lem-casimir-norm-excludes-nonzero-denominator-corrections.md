---
id: lem-casimir-norm-excludes-nonzero-denominator-corrections
kind: lemma
title: Casimir norm excludes nonzero denominator corrections
deps: ["lem-the-denominator-quotient-has-only-imaginary-cone-support", "lem-casimir-constrained-verma-character-expansion", "thm-universal-property-and-pbw-character-of-kac-moody-verma-modules", "def-kac-moody-denominator-product-with-root-multiplicities", "thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra", "def-kac-moody-weyl-vector"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Proposition 9.2.5 and Theorem 10.2.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Lemmas 11.2.4–11.2.5 and Theorem 11.2.1
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For the denominator quotient $C$ of the preceding lemma, every nonconstant coefficient is zero. Hence $C=1$. The argument uses the symmetrizing form and the Casimir constraint, not any assertion that points of $K^+$ are roots.

## Facts & Assumptions

**Given:** A finite symmetrizable GCM and the quotient $C=D/A_\rho$.

[F1] The quotient, constant coefficient, alternant finiteness and least-height inequalities are [[lem-the-denominator-quotient-has-only-imaginary-cone-support]].

[F2] Highest-module characters admit the constrained Verma expansion in [[lem-casimir-constrained-verma-character-expansion]].

[F3] The Verma character is $e^\mu P^{-1}$ by [[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]].

[F4] The symmetrized form is [[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]].

[F5] The Weyl vector satisfies $\rho(h_i)=1$ by [[def-kac-moody-weyl-vector]].

[F6] The shifted and normalized denominators satisfy $D=e^\rho P$ by [[def-kac-moody-denominator-product-with-root-multiplicities]].

## Proof

1.1 Apply F2 to the one-dimensional trivial module, whose highest weight is zero and character one. Multiplying its Verma expansion by $e^\rho P$ using F3 and identifying this factor as $D$ by F6 gives $D=\sum_\mu c_\mu e^{\mu+\rho}$. Therefore a nonzero coefficient of $e^{\rho-\beta}$ in $D$ must satisfy $(\rho-\beta)^2=\rho^2$, or $\beta^2=2(\rho,\beta)$. All multiplications are coefficientwise finite by F1 and F2. [F1, F2, F3, F6, algebra]

2.1 If $C$ has nonconstant support, take a least-height $\beta=\sum_i k_i\alpha_i\ne0$ in it. F1 gives $k_i\ge0$ and $\beta(h_i)\le0$ for every $i$. F4 gives $(\alpha_i,\xi)=d_i\xi(h_i)$ with $d_i>0$. Thus $$\beta^2=\sum_i k_i d_i\beta(h_i)\le0,\qquad 2(\rho,\beta)=2\sum_i k_i d_i>0.$$ This contradicts the equality required in step 1.1, if that coefficient of $D$ is nonzero. [F1, F4, F5, step 1.1, algebra]

3.1 It is nonzero. Write $a=e^{-\rho}A_\rho$ and $p=e^{-\rho}D=aC$. In the coefficient at $e^{-\beta}$ every mixed product with a nonzero degree of $C$ strictly smaller than $\beta$ vanishes by minimality. Hence $p_\beta=C_\beta+a_\beta$. A nonzero $a_\beta$ would require $\beta=\rho-w\rho$ for some $w$. The reflection formula and F4 show the form is Weyl invariant: expansion of a reflected pairing cancels its two cross terms against $(\alpha_i,\alpha_i)=2d_i$. Thus such a $\beta$ would satisfy $(\rho-\beta)^2=\rho^2$, contradicting the two inequalities of step 2.1. So $a_\beta=0$ and $p_\beta=C_\beta\ne0$, contradicting step 1.1 after all. There is no nonconstant support, and F1's unit constant coefficient gives $C=1$. The choice of a least-height term is finite, so no AC is used. [F1, F4, step 1.1, step 2.1, algebra] ∎
