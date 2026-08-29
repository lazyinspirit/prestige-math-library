---
id: ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps
kind: example
title: "The kernel-cokernel sequence of a composite of module maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-kernel-cokernel-sequence-of-a-composite,
       thm-modules-over-a-ring-form-an-abelian-category]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Example

In $\mathbb Z\text{-}\mathbf{Mod}$, take
$$f:\mathbb Z \to \mathbb Z,\quad f(n)=2n,\qquad g:\mathbb Z \to \mathbb Z/2,\quad g(n)=n \bmod 2.$$
Then $g f = 0$, and the sequence of
[[thm-the-kernel-cokernel-sequence-of-a-composite]] becomes
$$0 \to 0 \to \mathbb Z \xrightarrow{\times 2} 2\mathbb Z \xrightarrow{0} \mathbb Z/2 \xrightarrow{1_{\mathbb Z/2}} \mathbb Z/2 \to 0 \to 0,$$
which is exact.

## Facts & Assumptions

**Given:** The maps $f$ and $g$ in $\mathbb Z\text{-}\mathbf{Mod}$.

[L1] Module categories are abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] Every composite has the kernel-cokernel exact sequence ([[thm-the-kernel-cokernel-sequence-of-a-composite]]).

## Verification

**Proof technique:** direct.

1.1 Here $\ker(f)=0$, $\ker(g f)=\mathbb Z$, $\ker(g)=2\mathbb Z$, $\operatorname{coker}(f)\cong \mathbb Z/2$, $\operatorname{coker}(g f)\cong \mathbb Z/2$, and $\operatorname{coker}(g)=0$. [L1, algebra]

2.1 The map $\ker(g f)\to\ker(g)$ is just $f$, so it is multiplication by $2$ onto the subgroup $2\mathbb Z$. The connecting map $\ker(g)\to\operatorname{coker}(f)$ is zero because it is induced by the cokernel map $q_f:\mathbb Z\to\mathbb Z/2$, which kills every even integer. The map $\operatorname{coker}(f)\to\operatorname{coker}(g f)$ is the identity on $\mathbb Z/2$, and the remaining arrows are the obvious zero maps. This is the displayed sequence. [L2, step 1.1, algebra]

3.1 That concrete sequence is exact by direct inspection. [step 2.1, algebra] ∎
