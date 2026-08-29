---
id: thm-the-kernel-cokernel-sequence-of-a-composite
kind: theorem
title: "The kernel-cokernel sequence of a composite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,
       thm-exactness-is-self-dual,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism,
       cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For composable morphisms
$$A\xrightarrow{f}B\xrightarrow{g}C$$
in an abelian category, there is an exact sequence
$$0 \to \ker(f) \to \ker(g f) \to \ker(g) \xrightarrow{q_f k_g} \operatorname{coker}(f) \to \operatorname{coker}(g f) \to \operatorname{coker}(g) \to 0,$$
where $k_g:\ker(g)\to B$ is a kernel of $g$, $q_f:B\to\operatorname{coker}(f)$
is a cokernel of $f$, and the unlabeled arrows are the canonical comparison
maps induced by the chosen kernels and cokernels.

## Facts & Assumptions

**Given:** Composable morphisms $A \xrightarrow{f} B \xrightarrow{g} C$.

[L1] Under the stated endpoint hypotheses, the induced kernel and cokernel sequences are exact ([[thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses]]).

[L2] Exactness is self-dual ([[thm-exactness-is-self-dual]]).

[L3] Kernels and cokernels are universal for the morphisms they annihilate ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L4] The identity of an object is a kernel of its map to $0$, and dually a cokernel of the map $0 \to A$ ([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

[L5] Every kernel is monic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 Choose kernels $$k_f:K_f\to A,\qquad k_{g f}:K_{g f}\to A,\qquad k_g:K_g\to B$$ and cokernels $$q_f:B\to Q_f,\qquad q_{g f}:C\to Q_{g f},\qquad q_g:C\to Q_g.$$ Because $g f k_f = 0$, [L3] gives a canonical map $u:K_f \to K_{g f}$ with $k_{g f}u = k_f$. Likewise $g f k_{g f}=0$ gives a canonical map $v:K_{g f}\to K_g$ with $k_g v = f k_{g f}$. Put $$\delta := q_f k_g:K_g\to Q_f.$$ Since $q_{g f} g f=0$ and $q_g g=0$, [L3] also gives canonical maps $w:Q_f\to Q_{g f}$ and $x:Q_{g f}\to Q_g$. [L3, construct]

2.1 The map $u$ is monic: if $u s = u t$, then $k_f s = k_{g f}u s = k_{g f}u t = k_f t$, and monicity of $k_f$ from [L5] forces $s=t$. So the sequence is exact at $\ker(f)$. [L5, step 1.1, algebra]

2.2 Apply [L1] to the commutative diagram ```tikzcd \ker(f) \arrow[r, "k_f"] \arrow[d, "0"'] & A \arrow[r, "f"] \arrow[d, "g f"'] & B \arrow[d, "g"'] \\ 0 \arrow[r] & C \arrow[r, "1_C"'] & C. ``` The top row is exact, and $0 \to C$ is monic. Hence the induced sequence $$\ker(0) \to \ker(g f) \to \ker(g)$$ is exact. By [L4], $\ker(0)$ is represented by $1_{\ker(f)}$, so this is exactly the sequence $$\ker(f) \xrightarrow{u} \ker(g f) \xrightarrow{v} \ker(g)$$ at $\ker(g f)$. [L1, L4, step 1.1, construct]

2.3 Apply [L1] again to ```tikzcd A \arrow[r, "f"] \arrow[d, "g f"'] & B \arrow[r, "q_f"] \arrow[d, "g"'] & \operatorname{coker}(f) \arrow[d, "0"'] \\ C \arrow[r, "1_C"'] & C \arrow[r] & 0. ``` The top row is exact, and $1_C$ is monic. Therefore the induced sequence $$\ker(g f) \to \ker(g) \to \ker(0_{\operatorname{coker}(f),0})$$ is exact. By [L4], the last kernel is represented by $1_{\operatorname{coker}(f)}$, and the induced map is $q_f k_g = \delta$. Hence $$\ker(g f) \xrightarrow{v} \ker(g) \xrightarrow{\delta} \operatorname{coker}(f)$$ is exact at $\ker(g)$. [L1, L4, step 1.1, construct]

3.1 Apply steps 2.1 to 2.3 in the opposite category to the composable pair $$C \xrightarrow{g^{\mathrm{op}}} B \xrightarrow{f^{\mathrm{op}}} A.$$ Using [L2], the resulting exactness statements transport back to exactness of $$\ker(g) \xrightarrow{\delta} \operatorname{coker}(f) \xrightarrow{w} \operatorname{coker}(g f) \xrightarrow{x} \operatorname{coker}(g) \to 0$$ at $\operatorname{coker}(f)$, at $\operatorname{coker}(g f)$, and at $\operatorname{coker}(g)$. [L2, step 1.1, step 2.1, step 2.2, step 2.3]

4.1 Steps 2.1 to 2.3 and 3.1 give the full exact sequence displayed in the statement. [step 2.1, step 2.2, step 2.3, step 3.1] ∎
