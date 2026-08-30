---
id: cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake
kind: corollary
title: "The kernel-cokernel sequence of a composite is a snake"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abelian-category,
       thm-snake-lemma-in-an-abelian-category,
       thm-the-kernel-cokernel-sequence-of-a-composite]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

For composable morphisms $A \xrightarrow{f} B \xrightarrow{g} C$ in an abelian
category, the exact sequence of
[[thm-the-kernel-cokernel-sequence-of-a-composite]] is an instance of the snake
sequence.

## Facts & Assumptions

**Given:** Composable morphisms $A \xrightarrow{f} B \xrightarrow{g} C$.

[L1] The snake lemma gives an exact kernel-cokernel sequence for a morphism of short exact sequences ([[thm-snake-lemma-in-an-abelian-category]]).

[L2] The composite already has a kernel-cokernel exact sequence ([[thm-the-kernel-cokernel-sequence-of-a-composite]]).

[L3] An abelian category is additive and has finite biproducts ([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Consider the morphism between the canonical split short exact sequences ```tikzcd 0 \arrow[r] & A \arrow[r, "j_A"] \arrow[d, "f"'] & A\oplus B \arrow[r, "\pi_B"] \arrow[d, "m"'] & B \arrow[r] \arrow[d, "g"'] & 0 \\ 0 \arrow[r] & B \arrow[r, "j_B"'] & B\oplus C \arrow[r, "\pi_C"'] & C \arrow[r] & 0 ``` where, in biproduct matrix notation, $$m=\begin{pmatrix}f&-1_B\\0&g\end{pmatrix},\qquad m(a,b)=(f(a)-b,g(b)).$$ The two squares commute, so [L1] applies. [L1, L3, given, construct]

2.1 The map $a\mapsto(a,f(a))$ identifies $\ker(gf)$ with $\ker(m)$: the equations $m(a,b)=0$ are exactly $b=f(a)$ and $gf(a)=0$. Dually, the map $$B\oplus C\longrightarrow\operatorname{coker}(gf),\qquad (b,c)\longmapsto[c+g(b)]$$ identifies $\operatorname{coker}(m)$ with $\operatorname{coker}(gf)$. Under these identifications, the snake sequence of step 1.1 is exactly $$0\to\ker(f)\to\ker(gf)\to\ker(g)\to\operatorname{coker}(f)\to\operatorname{coker}(gf)\to\operatorname{coker}(g)\to0.$$ [L1, L2, L3, step 1.1, algebra]

3.1 The maps in step 2.1 are the canonical comparison maps of [L2], so the kernel-cokernel sequence of a composite is a special case of the snake lemma. [L2, step 2.1] ∎
