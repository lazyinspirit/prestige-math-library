---
id: ex-zero-section-empty-effective-divisor
kind: example
title: "A nowhere-vanishing section has empty zero divisor"
status: published
origin: pipeline
deps:
  - def-section-zero-scheme-invertible-sheaf
  - def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Let $X$ be a scheme and let
$$1\in\Gamma(X,\mathcal O_X)$$
be the unit section of the structure sheaf, regarded as a section of the
invertible sheaf $\mathcal O_X$
([[def-section-zero-scheme-invertible-sheaf]]). Then the zero ideal of $1$ is
the unit ideal sheaf
$$\mathcal I_1=\mathcal O_X,$$
and its zero scheme is empty:
$$Z(1)=V(\mathcal I_1)=\varnothing.$$
Moreover the empty closed subscheme is the effective Cartier divisor with unit
local equation $1$. This holds for every scheme $X$, including $X=\varnothing$
and including schemes whose structure sheaf has nilpotents or zero divisors.

## Facts & Assumptions

**Given:** A scheme $X$, the invertible sheaf $\mathcal O_X$, its global unit section $1$, and the contraction map $c_s:\mathcal O_X^{-1}\to\mathcal O_X$ of [[def-section-zero-scheme-invertible-sheaf]].

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] For a global section $s\in\Gamma(X,L)$ of an invertible sheaf $L$, the contraction map $c_s:L^{-1}\to\mathcal O_X$ is defined by $\varphi\mapsto\varphi(s)$, its image $\mathcal I_s=\operatorname{Im}(c_s)$ is a quasi-coherent sheaf of ideals, and the zero scheme is the closed subscheme $Z(s)=V(\mathcal I_s)\hookrightarrow X$; on an affine open $U=\operatorname{Spec}A$ on which $L$ is trivialised with local equation $f$, the map $c_s|_U$ becomes multiplication by $f$ and $Z(s)\cap U=\operatorname{Spec}(A/(f))$. ([[def-section-zero-scheme-invertible-sheaf]])

[F2] If the section $s$ vanishes nowhere, then each local equation $f$ is a unit, so $\mathcal I_s=\mathcal O_X$ and the induced closed immersion $Z(s)\to X$ is an isomorphism onto the empty subscheme; one says $Z(s)=\varnothing$. Moreover $Z(s)$ is an effective Cartier divisor precisely when each local equation is a nonzerodivisor or a unit, and if every local equation is a unit then $Z(s)=\varnothing$ is the empty divisor. ([[def-section-zero-scheme-invertible-sheaf]])

## Verification

**Proof technique:** direct: compute the contraction map of the unit section in every trivialisation and evaluate the local chart formula $Z(s)\cap U=\operatorname{Spec}(A/(f))$ with $f=1$.

1.1 The contraction is the identity. Take $L=\mathcal O_X$ and $s=1$. The dual is $L^{-1}=\mathcal O_X$ and the pairing $\mathcal O_X\otimes\mathcal O_X\to\mathcal O_X$ is multiplication, so $c_1:\mathcal O_X\to\mathcal O_X$ sends a local function $g$ to $g\cdot1=g$; that is, $c_1=\mathrm{id}_{\mathcal O_X}$. Consequently $\mathcal I_1=\operatorname{Im}(c_1)=\mathcal O_X$, the unit ideal sheaf. [F1]

2.1 The zero scheme is empty. Let $U=\operatorname{Spec}A\subseteq X$ be any affine open; over $U$ the structure sheaf is trivialised by the identity and the local equation of the unit section is $f=1\in A$. By the local chart formula of [F1], $Z(1)\cap U=\operatorname{Spec}(A/(1))=\operatorname{Spec}0=\varnothing$. Since the affine opens cover $X$, the closed subscheme $Z(1)$ has no points; it is the empty closed subscheme. [F1, step 1.1]

3.1 The empty divisor. In the trivialisation of step 2.1 the local equation $f=1$ is a unit of $A$, hence in particular a nonzerodivisor, and $\mathcal I_1=\mathcal O_X$ is an invertible sheaf of ideals; by the criterion of [F2] the zero scheme $Z(1)=\varnothing$ is an effective Cartier divisor, namely the empty divisor, whose local equation is the unit $1$. [F2, step 1.1, step 2.1]

4.1 Conclusion and empty scheme. Steps 1.1, 2.1 and 3.1 give $\mathcal I_1=\mathcal O_X$ and $Z(1)=\varnothing$ with unit local equation, so the empty closed subscheme of $X$ is an effective Cartier divisor. If $X=\varnothing$ then $\mathcal O_X$ is the zero sheaf, $\Gamma(X,\mathcal O_X)=0$ and the unit section is $1=0$, the unit of the zero ring; the same computation gives $\mathcal I_1=0=\mathcal O_X$ and $Z(1)=\varnothing=X$, and since $\mathcal O_X$ is invertible (the zero sheaf is locally free of rank one on the empty scheme, where there is no point to test) the conclusion holds vacuously for the empty base as well. No hypothesis on $X$ beyond the trivialisations of $\mathcal O_X$ enters; in particular nilpotents or zero divisors in $\mathcal O_X$ do not affect the computation, which uses only multiplication by $1$. The Axiom of Choice [A1] is inherited from the affine quotient and gluing suppliers of [F1]; no choice is made here. [A1, F1, F2, step 1.1, step 2.1, step 3.1, cases: empty X and units as local equations]
\qed
