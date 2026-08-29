---
id: thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
kind: theorem
title: "The Euclidean Lebesgue measure is the completion of the product of the factor Lebesgue measures"
status: published
origin: session
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-is-a-complete-measure, def-completed-product-measure, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Example 1.7.13"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.6 opening paragraph"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$m,n \ge 1$. Under the identification
$$\mathbb R^{m+n}=\mathbb R^m \times \mathbb R^n,$$
the Lebesgue measure $\lambda_{m+n}$ is the completion of the product measure
$\lambda_m \times \lambda_n$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and positive integers $m,n$.

[L1] On Borel sets, $\lambda_m \times \lambda_n$ agrees with $\lambda_{m+n}$. ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]])

[L2] Assuming countable choice, the full Lebesgue sigma-algebra is the
completion of the Borel Lebesgue measure.
([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]])

[L3] For sigma-finite factors, the product measure is the unique measure on the
product sigma-algebra with the rectangle formula.
([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[L4] Assuming countable choice, Euclidean Lebesgue measure is sigma-finite.
([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[L5] Assuming countable choice, Euclidean Lebesgue measure is complete.
([[thm-lebesgue-measure-is-a-complete-measure]])

[L6] The completed product measure is the completion of the product measure.
([[def-completed-product-measure]])

## Proof

**Proof technique:** direct.

1.1 Let $A\in\mathcal L(\mathbb R^m)$ and $B\in\mathcal L(\mathbb R^n)$. By [L2], choose Borel cores $A_0,B_0$ and Borel null hulls $Z,W$ such that $A\mathbin\triangle A_0\subseteq Z$ and $B\mathbin\triangle B_0\subseteq W$. The slabs $Z\times\mathbb R^n$ and $\mathbb R^m\times W$ are Euclidean null: for example, $Z\times\mathbb R^n=\bigcup_{k\ge1}Z\times[-k,k]^n$, and [L1], [L3], and [L4] give Euclidean measure $0$ to each Borel rectangle in this union. Since $$(A\times B)\mathbin\triangle(A_0\times B_0)\subseteq(Z\times\mathbb R^n)\cup(\mathbb R^m\times W),$$ [L2] makes $A\times B$ Euclidean Lebesgue measurable. [L1, L2, L3, L4, algebra]

2.1 Step 1.1 puts every measurable rectangle in $\mathcal L(\mathbb R^{m+n})$, so $\mathcal L(\mathbb R^m)\otimes\mathcal L(\mathbb R^n)\subseteq\mathcal L(\mathbb R^{m+n})$. Let $\rho$ be the restriction of $\lambda_{m+n}$ to this product sigma-algebra. For the rectangle in step 1.1, completeness [L5] and the null symmetric difference give $\rho(A\times B)=\lambda_{m+n}(A_0\times B_0)$; [L1] and [L2] identify this with $\lambda_m(A)\lambda_n(B)$. Thus $\rho$ has the product rectangle formula. By [L4] the factors are sigma-finite, so uniqueness in [L3] gives $\rho=\lambda_m\times\lambda_n$. [step 1.1, L1, L2, L3, L4, L5]

3.1 Because the product sigma-algebra is contained in the complete Euclidean Lebesgue sigma-algebra and the measures agree there by step 2.1, its completion is contained in $\mathcal L(\mathbb R^{m+n})$. Conversely, if $E\in\mathcal L(\mathbb R^{m+n})$, [L2] gives a Borel $C$ and a Borel null set $Z$ with $E\mathbin\triangle C\subseteq Z$. The Borel sets $C,Z$ belong to the product sigma-algebra, and [L1] and step 2.1 give $(\lambda_m\times\lambda_n)(Z)=\lambda_{m+n}(Z)=0$. Hence $E$ belongs to the completion of the product measure. The domains and measures therefore coincide, which is exactly the completion claim of [L6]. [L1, L2, L5, L6, step 2.1] ∎
