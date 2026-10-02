---
id: ex-genus-one-rr-degree-positive
kind: example
title: "A degree-n line bundle on a genus-one curve has an n-dimensional space of sections for n > 0"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-dimension-complete-linear-system
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - def-axiom-of-choice
  - def-complete-linear-system
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-riemann-roch-space-of-divisor
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-degree-positive-line-bundle-sections-zero-bound
  - thm-full-riemann-roch-divisor
  - thm-genus-one-canonical-bundle-trivial
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-serre-duality-curves-line-bundles
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
  precheck: pass

---

## Example

Assume the Axiom of Choice; it supplies Dependent Choice through
[[thm-choice-implies-dependent-implies-countable-choice]].
Let $C$ be a smooth proper geometrically integral curve of genus one over a
field $k$, and let $\mathcal L$ be an invertible sheaf of degree $n\ge1$, with
associated divisor $D$ under the divisor--invertible-sheaf dictionary.

Since $n\ge1>0=2g-2$, the line bundle $\mathcal L$ is nonspecial:
$$H^1(C,\mathcal L)=0,\qquad \ell(D)=h^0(C,\mathcal L)=\deg_kD+1-g=n .$$
Equivalently, since $\omega_C\cong\mathcal O_C$ for a genus-one curve, Serre
duality reads
$$h^1(C,\mathcal L)=h^0(C,\omega_C\otimes\mathcal L^{-1})=h^0(C,\mathcal L^{-1})=0,$$
because $\deg\mathcal L^{-1}=-n<0$ forces the vanishing of the sections of the
negative-degree dual.

For $n=1$ the space of sections is one-dimensional. Under an isomorphism
$\mathcal L\cong\mathcal O_C(D)$, a nonzero section corresponds to a nonzero
rational function $f\in L(D)$, and its zero divisor is
$E=D+\operatorname{div}(f)$. This is effective by the definition of $L(D)$
and has degree $1$, since principal divisors have degree zero. Thus
$E=[p]$ for a closed point $p$ with $[\kappa(p):k]=1$, so $p$ is
$k$-rational. The same argument applies to every degree-one divisor $D$; its
complete linear system has the single effective member $[p]$. The dimension formula
$$\dim|D|=\deg_kD-g+i(D)=n-1+0$$
recovers this for $n=1$ and shows that the complete linear system grows by
exactly one dimension for each added degree.

## Facts & Assumptions

**Given:** the Axiom of Choice and its consequence Dependent Choice; a smooth
proper geometrically integral curve $C$ of genus one over a field $k$, an
invertible sheaf $\mathcal L$ of degree $n\ge1$, and the associated divisor
$D$.

[F1] For an invertible sheaf of degree $>2g-2$ on a smooth proper
geometrically integral curve of genus $g$, $H^1(C,\mathcal L)=0$ and
$h^0(C,\mathcal L)=\deg\mathcal L+1-g$; equivalently
$\ell(D)=\deg_kD+1-g$ for divisors of degree $>2g-2$.
([[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]],
[[cor-rr-exact-high-degree-formula]])

[F2] The full Riemann-Roch theorem reads
$\ell(D)-\ell(K_C-D)=\deg_kD+1-g$; the line bundle associated with $D$ has
$h^0(C,\mathcal O(D))=\ell(D)$, and the degree of $\mathcal L^{-1}$ is
$-\deg\mathcal L$. ([[thm-full-riemann-roch-divisor]],
[[def-little-l-divisor]], [[def-invertible-sheaf-of-cartier-divisor]],
[[thm-cartier-weil-divisors-curves-agree]])

[F3] On a genus-one curve $\omega_C\cong\mathcal O_C$, and Serre duality for
invertible sheaves gives
$h^1(C,\mathcal L)=h^0(C,\omega_C\otimes\mathcal L^{-1})$; a line bundle of
degree $<0$ has no nonzero global section.
([[thm-genus-one-canonical-bundle-trivial]],
[[thm-serre-duality-curves-line-bundles]],
[[thm-degree-positive-line-bundle-sections-zero-bound]])

[F4] The dimension of the complete linear system of a divisor is
$\dim|D|=\ell(D)-1=\deg_kD-g+i(D)$, where $i(D)=\ell(K_C-D)$ is the index of
speciality. Under an isomorphism $\mathcal L\cong\mathcal O_C(D)$, a nonzero
global section corresponds to a nonzero $f\in L(D)$; its zero divisor is the
effective divisor $D+\operatorname{div}(f)$, of degree $\deg_kD$ because
principal divisors have degree zero. ([[cor-dimension-complete-linear-system]],
[[def-complete-linear-system]], [[def-riemann-roch-space-of-divisor]],
[[def-degree-divisor-proper-curve]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[thm-principal-divisor-degree-zero-proper-curve]])

[F5] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F6] In ZF, the Axiom of Choice implies Dependent Choice; this supplies the
Dependent Choice premise of the Cartier-to-Weil dictionary used in [F2] and
[F4]. ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]])



## Verification

**Proof technique:** apply the nonspecial Riemann-Roch formula and check the
degree-one case separately, with Serre duality as an independent computation of
$H^1$.

1.1 Since $g=1$ we have $2g-2=0$, and $n\ge1$ gives $\deg\mathcal L=n>0$; by [F1] applied to $\mathcal L$, $H^1(C,\mathcal L)=0$ and $\ell(D)=h^0(C,\mathcal L)=n+1-1=n$. [F1]

2.1 Independently, [F3] gives $h^1(C,\mathcal L)=h^0(C,\mathcal L^{-1})$ up to the identification $\omega_C\cong\mathcal O_C$, and $\deg\mathcal L^{-1}=-n<0$, so [F3] again gives $h^0(C,\mathcal L^{-1})=0$; this agrees with Step 1.1 and confirms that $\mathcal L$ is nonspecial. [F3, step 1.1]

2.2 For $n=1$, Step 1.1 gives $\ell(D)=1$. Choose a nonzero section $s\in H^0(C,\mathcal L)$ and an isomorphism $\mathcal L\cong\mathcal O_C(D)$; the section corresponds to a nonzero $f\in L(D)$, and [F4] gives the effective zero divisor $E=D+\operatorname{div}(f)$. By [F4] and the degree-zero theorem for principal divisors, $\deg_k(E)=\deg_k(D)=1$. Hence $E=[p]$ for a closed point with residue degree one, so $p$ is $k$-rational and $D\sim[p]$. Since $\ell(D)=1$, the complete linear system has exactly the single effective member $[p]$. This argument applies to every degree-one divisor. [F4, F5, step 1.1]

3.1 The dimension formula of [F4] gives $\dim|D|=\deg_kD-g+i(D)=n-1+0=n-1$, with $i(D)=h^1(C,\mathcal L)=0$ by Step 1.1; for $n=1$ this says $\dim|D|=0$ in agreement with Step 2.2, and each increase of the degree by one increases $\dim|D|$ by exactly one. [F4, step 1.1, step 2.2, algebra]

4.1 The Axiom of Choice is used through the duality, degree, and divisor suppliers; [F6] supplies the Dependent Choice premise required by the Cartier-to-Weil divisor dictionary. [F5, F6, F2, F3, step 3.1] ∎
