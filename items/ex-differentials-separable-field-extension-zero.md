---
id: "ex-differentials-separable-field-extension-zero"
kind: "example"
title: "Finite separable extensions have zero Omega"
status: published
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
deps: ["thm-kahler-differentials-existence-presentation", "thm-primitive-element-theorem-for-finite-separable-extensions", "thm-evaluation-kernel-and-minimal-polynomial", "cor-irreducible-polynomial-is-separable-iff-derivative-nonzero", "def-separable-elements-and-separable-extensions", "thm-simple-algebraic-extension-quotient-power-basis-and-degree"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.158.1"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil 22.2.F, p.577"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Example

For every finite separable field extension $L/k$ one has $\Omega_{L/k}=0$. The
proof differentiates the minimal polynomial of a primitive element, so the
separability hypothesis is used both to obtain a primitive element and to
ensure that its minimal-polynomial derivative is nonzero and hence invertible; the converse direction, that a finitely generated field
extension with $\Omega=0$ is finite and separable, is a strictly harder result
and appears on the category page
([[lem-finite-type-field-zero-differentials-finite-separable]]).

## Facts & Assumptions

**Given:** A finite separable field extension $L/k$ and a primitive element $\alpha\in L$ with $L=k(\alpha)$.

[F1] [[thm-kahler-differentials-existence-presentation]]: a Kähler differential module $(\Omega_{L/k},\mathrm d)$ exists for the ring map $k\to L$, the map $\mathrm d$ is a $k$-derivation of $L$, and $\Omega_{L/k}$ is generated as an $L$-module by the elements $\mathrm df$ for $f\in L$.

[F2] [[thm-primitive-element-theorem-for-finite-separable-extensions]]: every finite separable extension is simple, so $L=k(\alpha)$ for some $\alpha\in L$.

[F3] [[thm-evaluation-kernel-and-minimal-polynomial]]: the minimal polynomial $m\in k[x]$ of the algebraic element $\alpha$ is the unique monic irreducible generator of the kernel of evaluation $k[x]\to L$, $f\mapsto f(\alpha)$; hence $f(\alpha)=0$ if and only if $m\mid f$.

[F4] [[cor-irreducible-polynomial-is-separable-iff-derivative-nonzero]]: an irreducible polynomial $p$ over a field is separable if and only if its formal derivative $p'$ is not zero.

[F5] [[def-separable-elements-and-separable-extensions]]: an extension is separable when every element is separable, and an element is separable when it is algebraic with separable minimal polynomial.

[F6] [[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]: every element of the simple algebraic extension $k(\alpha)$ is a polynomial $p(\alpha)$ in $\alpha$ with coefficients in $k$; evaluation $k[x]\to k(\alpha)$, $p\mapsto p(\alpha)$, is an isomorphism $k[x]/(m)\cong k(\alpha)$.

## Verification

1.1 By [F2] there is $\alpha\in L$ with $L=k(\alpha)$; since $L/k$ is separable, [F5] makes $\alpha$ separable over $k$, so its minimal polynomial $m\in k[x]$ is monic, irreducible and separable. [F2, F5, given]

2.1 By [F4] the separability of the irreducible polynomial $m$ says $m'\neq0$, where $m'$ is the formal derivative; since $\deg m'<\deg m=n$, the minimality statement of [F3] shows $m'(\alpha)\neq0$: a vanishing of $m'$ at $\alpha$ would force $m\mid m'$ and hence $m'=0$. [F3, F4, step 1.1]

3.1 Because $\mathrm d$ is a $k$-derivation [F1] and $m(\alpha)=0$, applying $\mathrm d$ to the relation $m(\alpha)=c_0+c_1\alpha+\cdots+c_n\alpha^{n}$ with $c_n=1$ and using additivity, $k$-linearity and the Leibniz rule gives $0=\mathrm d(m(\alpha))=\sum_i c_i\,\mathrm d(\alpha^{i})=m'(\alpha)\,\mathrm d\alpha$, with $m'(\alpha)\in L$ the value at $\alpha$ of the formal derivative. Since $m'(\alpha)\neq0$ by step 2.1 and $L$ is a field, $m'(\alpha)$ is invertible in $L$, so $\mathrm d\alpha=0$. [F1, step 1.1, step 2.1]

4.1 It follows that $\mathrm d$ vanishes on all of $L$: by [F6] every $f\in L$ equals $p(\alpha)$ for a polynomial $p\in k[x]$, and the Leibniz rule over the expansion of $p(\alpha)$ in powers of $\alpha$ gives $\mathrm dp(\alpha)=p'(\alpha)\,\mathrm d\alpha=0$, since $\mathrm d\alpha=0$ [F1, step 3.1]. [F1, F6, step 3.1]

5.1 By [F1] the module $\Omega_{L/k}$ is generated over $L$ by the elements $\mathrm df$ with $f\in L$, and step 4.1 shows that each such generator is zero; hence $\Omega_{L/k}=0$. [F1, step 4.1] ∎
