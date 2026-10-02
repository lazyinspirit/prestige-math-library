---
id: cex-degree-two-g-minus-one-not-always-basepoint-free
kind: counterexample
title: "Degree 2g-1 does not force base-point-freeness"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-h0-canonical-differentials-genus
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - def-axiom-of-choice
  - def-base-point-linear-system
  - def-canonical-line-bundle-curve
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-riemann-roch-space-of-divisor
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-degree-two-g-line-bundle-basepoint-free
  - thm-full-riemann-roch-divisor
  - thm-genus-one-canonical-bundle-trivial
  - thm-line-bundle-rational-section-cartier-divisor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02

---

## Statement refuted

Assume the Axiom of Choice; it supplies Dependent Choice through
[[thm-choice-implies-dependent-implies-countable-choice]].
The theorem that a line bundle of degree at least $2g$ on a curve of genus $g$
is base-point-free is sharp in its degree bound: a line bundle of degree
$2g-1$ need not be base-point-free.

## Facts & Assumptions

**Given:** the Axiom of Choice and its consequence Dependent Choice; a field
$k$, a smooth proper geometrically integral curve $C$ of genus $g\ge1$ over
$k$ with a $k$-rational point $p$, and the invertible sheaf
$\mathcal L=\mathcal O_C(K_C+p)$ with associated divisor $D=K_C+p$.

[F1] $\deg_kK_C=2g-2$, so $\deg_kD=2g-1$; and the divisor--invertible-sheaf
dictionary identifies $\mathcal L(-p)=\mathcal O_C(K_C)$ and
$H^0(C,\mathcal L(-p))\subseteq H^0(C,\mathcal L)$.
([[cor-canonical-degree-two-g-minus-two]], [[def-canonical-line-bundle-curve]],
[[def-degree-divisor-proper-curve]], [[def-invertible-sheaf-of-cartier-divisor]],
[[thm-cartier-weil-divisors-curves-agree]])

[F2] For a divisor of degree $>2g-2$ on a curve of genus $g$ the nonspecial
formula gives $\ell(D)=\deg_kD+1-g$ and $H^1=0$; equivalently
$\mathcal L$ has $h^0(C,\mathcal L)=\deg\mathcal L+1-g$.
([[cor-rr-exact-high-degree-formula]],
[[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]],
[[thm-full-riemann-roch-divisor]], [[def-little-l-divisor]])

[F3] $\ell(K_C)=h^0(C,\omega_C)=g$, where $\omega_C=\mathcal O_C(K_C)$ is the
canonical bundle; the Riemann-Roch space of $K_C$ is the space of holomorphic
differentials. ([[cor-h0-canonical-differentials-genus]],
[[def-riemann-roch-space-of-divisor]])

[F4] A closed point $q$ is a base point of the complete linear system $|D|$ of a
divisor $D$ exactly when every global section of $\mathcal O(D)$ vanishes at
$q$, equivalently $H^0(C,\mathcal O(D-q))=H^0(C,\mathcal O(D))$; the sheaf is
base-point-free when no closed point is a base point.
([[def-base-point-linear-system]])

[F5] A line bundle of degree at least $2g$ on a curve of genus $g$ is
base-point-free; this is the statement whose degree bound is tested here.
([[thm-degree-two-g-line-bundle-basepoint-free]])

[F6] On a genus-one curve, the canonical bundle is trivial and every canonical
divisor is principal; hence $K_C\sim0$ and
$\mathcal O_C(K_C+p)\cong\mathcal O_C(p)$. The divisor-line-bundle dictionary
identifies this linear equivalence with the corresponding isomorphism of
invertible sheaves. ([[thm-genus-one-canonical-bundle-trivial]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[thm-cartier-weil-divisors-curves-agree]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F8] In ZF, the Axiom of Choice implies Dependent Choice; this supplies the
Dependent Choice premise of the Cartier-to-Weil divisor dictionary used in
[F1] and [F6]. ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]])



## Counterexample

Assume the Axiom of Choice; it supplies Dependent Choice through
[[thm-choice-implies-dependent-implies-countable-choice]].
Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve of
genus $g\ge1$ over $k$ with a $k$-rational point $p$, let $K_C$ be a canonical
divisor and put
$$\mathcal L=\mathcal O_C(K_C+p),\qquad D=K_C+p .$$
Then $\deg_kD=2g-2+1=2g-1$, and since $2g-1>2g-2$ the nonspecial formula gives
$$\ell(D)=\deg_kD+1-g=g,\qquad H^1(C,\mathcal L)=0 .$$
On the other hand $\mathcal L(-p)=\mathcal O_C(K_C)$ has
$\ell(K_C)=h^0(C,\omega_C)=g$ by the canonical-sections computation, and
$H^0(C,\mathcal L(-p))\subseteq H^0(C,\mathcal L)$ is an inclusion of spaces of
the same dimension $g$; hence the two spaces are equal and every global section
of $\mathcal L$ vanishes at $p$. Therefore $p$ is a base point of the complete
linear system $|D|=|\mathcal L|$, and $\mathcal L$ is not base-point-free even
though its degree is the largest value below the safe bound $2g$ of the
base-point-freeness theorem.
For $g=1$, [F6] gives $K_C\sim0$, so
$\mathcal L\cong\mathcal O_C(p)$; its unique section has zero divisor $[p]$
and vanishes at $p$.

**Proof technique:** compute both section spaces and observe that the evaluation
at $p$ has no room to be nonzero.

1.1 By [F1], $\deg_kD=2g-1>2g-2$, so [F2] applies and gives $\ell(D)=g$ together with $H^1(C,\mathcal L)=0$. [F1, F2]

2.1 Since $\mathcal L(-p)=\mathcal O_C(K_C)$ by [F1] and $\ell(K_C)=g$ by [F3], the space $H^0(C,\mathcal L(-p))$ has dimension $g$; by the inclusion of [F1] and Step 1.1, $H^0(C,\mathcal L(-p))\subseteq H^0(C,\mathcal L)$ is an inclusion of $k$-vector spaces of the same dimension $g$, hence an equality. [F1, F3, step 1.1]

3.1 The equality of Step 2.1 says exactly that every global section of $\mathcal L$ vanishes at the $k$-rational point $p$; by the base-point criterion [F4], $p$ is a base point of the complete linear system $|D|$ and $\mathcal L=\mathcal O_C(K_C+p)$ is not base-point-free. [F4, step 2.1]

4.1 Since $\deg\mathcal L=2g-1<2g$, this counterexample shows that the degree bound in the base-point-freeness theorem [F5] cannot be lowered from $2g$ to $2g-1$: the bound is sharp. [F5, step 3.1]

5.1 For $g=1$, [F6] gives $K_C\sim0$ (the chosen representative need not equal the zero divisor), so $\mathcal L\cong\mathcal O_C(p)$. Step 1.1 gives $h^0(C,\mathcal L)=1$, and this isomorphism makes $H^0(C,\mathcal O_C(p))$ one-dimensional. Its canonical section has zero divisor $[p]$, so the unique one-dimensional section space vanishes at $p$, in agreement with Step 3.1. The Axiom of Choice is used through the degree, duality, and divisor suppliers, and [F8] supplies the Dependent Choice premise of the Cartier-to-Weil route. [F1, F2, F6, F7, F8, step 1.1, step 3.1] ∎
