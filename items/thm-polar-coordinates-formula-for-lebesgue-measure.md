---
id: thm-polar-coordinates-formula-for-lebesgue-measure
kind: theorem
title: "Polar coordinates decompose Lebesgue measure into r^{n-1} dr d sigma"
status: published
origin: session
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polar-surface-measure-on-the-unit-sphere, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-linear-change-of-variables-for-lebesgue-measure, thm-measure-uniqueness-on-a-sigma-finite-pi-system, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-pi-system, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.49"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n \ge 1$,
let $S^{n-1} \subseteq \mathbb R^n$ be the unit sphere, and let $\sigma$ be the
set function of [[def-polar-surface-measure-on-the-unit-sphere]]. Then $\sigma$
is a finite Borel measure on $S^{n-1}$, and for every Borel measurable
$f : \mathbb R^n \to [0,\infty]$,
$$\int_{\mathbb R^n} f(x)\,d\lambda_n(x) = \int_0^\infty \int_{S^{n-1}} f(r\omega) r^{n-1}\,d\sigma(\omega)\,dr.$$
Moreover, $\sigma$ is the unique Borel measure on $S^{n-1}$ with this
property.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a positive integer $n$, and a Borel
measurable function $f : \mathbb R^n \to [0,\infty]$.

[L1] The set function $\sigma$ is defined by $$\sigma(E)=n\,\lambda_n(\{r\omega : \omega \in E,\ 0<r\le 1\})$$ for Borel $E \subseteq S^{n-1}$. ([[def-polar-surface-measure-on-the-unit-sphere]])

[L2] Linear dilations scale Lebesgue measure by the determinant. ([[thm-linear-change-of-variables-for-lebesgue-measure]])

[L3] Two measures that agree on a sigma-finite generating pi-system agree on the generated sigma-algebra. ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

[L4] Tonelli's theorem turns equality of measures on sets into the corresponding equality of nonnegative integrals. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L5] Assuming countable choice, bounded subsets of Euclidean space have finite
outer measure. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[A1] Let $\Phi : \mathbb R^n \setminus \{0\} \to (0,\infty)\times S^{n-1}$
be $\Phi(x)=(|x|,x/|x|)$. This map is continuous, so
$m^*(B):=\lambda_n(\Phi^{-1}(B))$ defines a measure on the Borel subsets of
$(0,\infty)\times S^{n-1}$.

[A2] Sets of the form $(a,b]\times E$ with $0<a<b$ and Borel $E \subseteq S^{n-1}$ form a sigma-finite generating pi-system for the Borel sigma-algebra of $(0,\infty)\times S^{n-1}$.

## Proof

**Proof technique:** direct.

1.1 For Borel $E\subseteq S^{n-1}$ put $E_r:=\{s\omega:\omega\in E,\ 0<s\le r\}$. By [A1], each $E_r$ is Borel. If $(E_j)$ is pairwise disjoint, then the sets $(E_j)_1$ are pairwise disjoint and $(\bigcup_jE_j)_1=\bigcup_j(E_j)_1$, so countable additivity of $\lambda_n$ makes $\sigma$ a Borel measure. It is finite because $\sigma(S^{n-1})=n\lambda_n(\{x:0<|x|\le1\})<\infty$ by [L5]. [L1, L5, A1]

2.1 For Borel $E \subseteq S^{n-1}$ and $0<a<b$, [L1] gives $\lambda_n(E_1)=\sigma(E)/n$. The dilation $x \mapsto rx$ has determinant $r^n$, so [L2] gives $$\lambda_n(E_r)=r^n\lambda_n(E_1)=\frac{r^n}{n}\sigma(E).$$ Therefore $$m^*((a,b]\times E)=\lambda_n(E_b\setminus E_a)=\frac{b^n-a^n}{n}\sigma(E)=\sigma(E)\int_a^b r^{n-1}\,dr.$$ [L1, L2, A1, step 1.1]

3.1 Step 2.1 shows that $m^*$ and the product measure $r^{n-1}dr \times \sigma$ agree on the generating pi-system of [A2]. Both are sigma-finite there, so [L3] implies that they agree on every Borel subset of $(0,\infty)\times S^{n-1}$. Applying [L4] to this measure identity gives the stated polar-coordinate integral formula for every nonnegative Borel measurable $f$. If $\widetilde{\sigma}$ is another Borel measure on $S^{n-1}$ with the same integral formula, apply that formula to $\mathbf 1_{E_1}$, where $E_1=\{r\omega:\omega\in E,\ 0<r\le1\}$. Then $$\lambda_n(E_1)=\int_0^\infty\int_{S^{n-1}}\mathbf 1_{E_1}(r\omega)r^{n-1}\,d\widetilde{\sigma}(\omega)\,dr=\widetilde{\sigma}(E)\int_0^1r^{n-1}\,dr=\frac{\widetilde{\sigma}(E)}{n},$$ so $\widetilde{\sigma}(E)=n\lambda_n(E_1)=\sigma(E)$ by [L1]. Thus $\widetilde{\sigma}=\sigma$, proving uniqueness. [A2, L3, L4, step 1.1, step 2.1] ∎
