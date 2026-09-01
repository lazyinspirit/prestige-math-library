---
id: thm-inverse-limits-are-left-exact
kind: theorem
title: "Inverse limits preserve kernels"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inverse-system-and-inverse-limit-of-modules, thm-universal-property-of-an-inverse-limit-of-modules, def-module-homomorphism-kernel-image-and-cokernel]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 9.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.87"
      url: "https://stacks.math.columbia.edu/tag/03C9"
pipeline_run: null
---

## Statement

Let
$$
(f_n)\colon (M_n,\varphi_n) \to (N_n,\psi_n)
$$
be a morphism of inverse systems of $R$-modules. Then the kernel of the induced
map
$$
\varprojlim M_n \longrightarrow \varprojlim N_n
$$
is canonically isomorphic to
$$
\varprojlim \ker(f_n).
$$

Consequently, if
$$
0 \to A_n \to B_n \to C_n
$$
is an exact sequence of inverse systems, then
$$
0 \to \varprojlim A_n \to \varprojlim B_n \to \varprojlim C_n
$$
is exact.

## Facts & Assumptions

**Given:** A morphism of inverse systems $(f_n)\colon (M_n,\varphi_n)\to (N_n,\psi_n)$.

[L1] The inverse limit consists of the compatible elements in the product
system ([[def-inverse-system-and-inverse-limit-of-modules]]).

[L2] The kernel of a homomorphism is the submodule of elements mapping to $0$
([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L3] A map into an inverse limit is determined by its compatible coordinate maps
([[thm-universal-property-of-an-inverse-limit-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 For each $n$, let $K_n:=\ker(f_n)$. Compatibility of the squares $$\psi_n \circ f_n = f_{n-1} \circ \varphi_n$$ shows that $\varphi_n(K_n)\subseteq K_{n-1}$, so the kernels form an inverse system. [L2, given]

1.2 An element $(x_n)\in\varprojlim M_n$ lies in the kernel of $\varprojlim M_n \to \varprojlim N_n$ exactly when $f_n(x_n)=0$ for every $n$. By [L2], that is equivalent to $x_n \in K_n$ for every $n$. Together with the compatibility condition from [L1], this says precisely that $(x_n)\in\varprojlim K_n$. [L1, L2]

2.1 Thus the underlying subsets of $$\ker\!\left(\varprojlim M_n \to \varprojlim N_n\right) \quad\text{and}\quad \varprojlim \ker(f_n)$$ coincide inside $\prod M_n$, and the module structures also agree componentwise. Hence these two modules are canonically equal, in particular canonically isomorphic. [step 1.2]

3.1 For an exact sequence $0 \to A_n \to B_n \to C_n$, exactness means $A_n=\ker(B_n\to C_n)$ for every $n$. Applying step 2.1 to the maps $B_n\to C_n$ gives $$\ker\!\left(\varprojlim B_n \to \varprojlim C_n\right)=\varprojlim A_n,$$ which is exactly left exactness. [step 2.1, L3] ∎
