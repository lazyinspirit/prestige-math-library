---
id: lem-qft-l2-product-tensor-identification
kind: lemma
title: Tensor products of sigma-finite L2 spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - def-completed-product-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-complex-l-two-inner-product
  - def-product-measure-on-sigma-finite-spaces
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-rectangle
  - def-pi-system
  - def-lambda-system
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-nrqm-composites-hilbert-tensor-construction
  - thm-continuity-from-below-for-measures
  - thm-dynkin-pi-lambda
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-completed-product-measure: mathematical-premise
  def-finite-sigma-finite-and-semifinite-measures: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-l-two-inner-product: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-measurable-rectangle: mathematical-premise
  def-pi-system: mathematical-premise
  def-lambda-system: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  thm-continuity-from-below-for-measures: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gerald Teschl, Mathematical Methods in Quantum Mechanics, §1.4 (orthogonal sums and tensor products), pp. 45–47
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
      locator: Complete 317-page book; §1.4, printed pp. 45–47.
    - title: Jan Dereziński, Mathematical Introduction to Quantum Field Theory, lecture notes, §5.3 (tensor products), pp. 34–35
      url: https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
      locator: Full 136-page author-hosted notes; PDF pp. 34–35.
---

## Statement

Assume the Axiom of Countable Choice [[def-countable-choice]]. Let
$(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces,
let $\overline{\mu\times\nu}$ be their completed product measure, and put
$H_X=L^2(X,\mu;\mathbb C)$ and $H_Y=L^2(Y,\nu;\mathbb C)$ with the
second-variable-linear pairing fixed in
[[def-qft-fock-and-test-spaces]]. There is a unique unitary

$$T:H_X\widehat\otimes H_Y\longrightarrow L^2(X\times Y,\overline{\mu\times\nu};\mathbb C)$$

whose value on each elementary tensor is
$T(f\otimes g)(x,y)=f(x)g(y)$ almost everywhere. In particular, the Hilbert
tensor completion is identified with the full product $L^2$ space, not only
with the closure of a chosen class of product functions.

## Facts & Assumptions

**Given:** Countable Choice; sigma-finite measure spaces $(X,\mathcal A,\mu)$
and $(Y,\mathcal B,\nu)$; their completed product measure; and the quotient
$L^2$ spaces with their integral pairings.

[A1] The Axiom of Countable Choice is the premise used by the completed-product
measure and Hilbert tensor suppliers. [[def-countable-choice]]

[F1] The product measure is sigma-finite and satisfies
$(\mu\times\nu)(A\times B)=\mu(A)\nu(B)$ on measurable rectangles; its
completion changes measurable sets only by subsets of product-null sets.
[[def-finite-sigma-finite-and-semifinite-measures]]
[[def-product-measure-on-sigma-finite-spaces]]
[[def-completed-product-measure]]
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F2] Tonelli's theorem computes integrals of nonnegative product functions,
and Fubini's theorem identifies product integrals of integrable functions
with either iterated integral.
[[thm-tonelli-and-fubini-for-completed-product-measures]]

[F7] Cauchy–Schwarz holds in each $L^2$ space, so products of two $L^2$
functions on the same factor are integrable.
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[F3] Simple functions with finite-measure support are dense in $L^2$.
[[def-l-p-space-as-a-quotient-by-null-functions]]
[[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]

[F4] The product sigma-algebra is generated by measurable rectangles; these
rectangles form a pi-system, and a lambda-system containing a generating
pi-system contains its generated sigma-algebra.
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]
[[def-measurable-rectangle]]
[[def-pi-system]]
[[def-lambda-system]]
[[thm-dynkin-pi-lambda]]

[F5] The tensor inner product on elementary tensors is the product pairing and
their finite linear span is dense in the Hilbert tensor completion.
[[lem-nrqm-composites-hilbert-tensor-construction]]

[F6] For increasing measurable sets, measure is continuous from below.
[[thm-continuity-from-below-for-measures]]

## Proof

1.1 Measurable representatives may be chosen for $f,f',g,g'$. Replacing a
representative on a null set changes its product only on a product-null set:
cover the other sigma-finite factor by countably many finite-measure sets and
apply the rectangle formula [F1] on each. Thus the product rule is well
defined on $L^2$ classes. By [F7], $f\overline{f'}$ and $g\overline{g'}$
are integrable; Fubini [F2] gives the product norm
$\|f(x)g(y)\|_2^2=\|f\|_2^2\|g\|_2^2$, so each elementary product belongs
to the target space. It also gives
$$\langle f(x)g(y),f'(x)g'(y)\rangle_{L^2(X\times Y)} =\langle f,f'\rangle_{H_X}\langle g,g'\rangle_{H_Y}.$$
By sesquilinearity, the rule $\sum_j\alpha_j f_j\otimes g_j\mapsto
\sum_j\alpha_j f_j(x)g_j(y)$ preserves inner products on finite sums. If two
tensor presentations define the same algebraic tensor, their difference has
zero tensor norm by [F5], hence its product function has zero $L^2$ norm; the
rule is well-defined on the algebraic tensor product and extends uniquely as
an isometry $T$ to the completion. [A1, F1, F2, F5, F7, algebra]

2.1 Choose sigma-finite exhaustions $X_k\uparrow X$ and $Y_k\uparrow Y$ with finite measure, and put $Z_k=X_k\times Y_k$. By the rectangle formula [F1], $(\mu\times\nu)(Z_k)<\infty$, and $Z_k\uparrow X\times Y$. For fixed $k$, let $\mathcal C_k$ be the family of product-measurable $E\subseteq Z_k$ such that $\mathbf1_E$ belongs to the closed range of $T$. It contains $Z_k$, since $\mathbf1_{Z_k}=T(\mathbf1_{X_k}\otimes\mathbf1_{Y_k})$. If $E\subseteq F$ are in $\mathcal C_k$, then $\mathbf1_{F\setminus E}=\mathbf1_F-\mathbf1_E$ is in that closed range. If $E_j\uparrow E$ in $Z_k$, then $\|\mathbf1_E-\mathbf1_{E_j}\|_2^2=(\mu\times\nu)(E\setminus E_j)\to0$ by [F6], so $E\in\mathcal C_k$. Thus $\mathcal C_k$ is a lambda-system on $Z_k$. For every measurable rectangle $A\times B$, its restriction to $Z_k$ is $(A\cap X_k)\times(B\cap Y_k)$, whose indicator is the image of $\mathbf1_{A\cap X_k}\otimes\mathbf1_{B\cap Y_k}$; these restricted rectangles are a generating pi-system by [F4]. Dynkin's theorem [F4] gives $\mathbf1_E\in\overline{\operatorname{ran}T}$ for every product-measurable $E\subseteq Z_k$. [F1, F4, F5, F6, step 1.1, construct]

3.1 Let $E$ be any completed-product-measurable set with finite product measure. By the completion definition [F1], it differs from a product-measurable set $E_0$ by a subset of a product-null set, so $\mathbf1_E=\mathbf1_{E_0}$ as $L^2$ classes. Since $Z_k\uparrow X\times Y$, [F6] gives $(\mu\times\nu)(E_0\setminus Z_k)\to0$, so $\mathbf1_{E_0}=\lim_k\mathbf1_{E_0\cap Z_k}$ in $L^2$; step 2.1 puts each truncated indicator in the closed range of $T$. Every finite-measure simple function for the completed measure is a finite linear combination of indicators of completed-measurable finite-measure sets; replacing each set by its product-measurable representative gives the same $L^2$ class. Such simple functions are dense by [F3]. Consequently the range of $T$ is dense in the full target $L^2$ space. Since the range of an isometry from a complete space is closed, $T$ is onto and therefore unitary. Its uniqueness follows because elementary tensors span a dense subspace. [F1, F3, F5, F6, step 1.1, step 2.1] ∎ 