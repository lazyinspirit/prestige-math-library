---
id: ex-rank-one-heisenberg-jordan-module-is-logarithmic
kind: example
title: "An explicit logarithmic conformal Heisenberg module"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [thm-rank-one-heisenberg-jordan-fock-module, def-logarithmic-vertex-module]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "Sections 3.1 and 3.3: Heisenberg vertex algebra and conformal field; the explicit Jordan calculation follows from the proved local Fock construction."
---

## Example

For the rank-one Heisenberg conformal VOA, take $F_1=\mathbb C[x_1,x_2,\ldots]\otimes E$ with $E=\mathbb C e_0\oplus\mathbb C e_1$, $Ne_1=e_0$, $Ne_0=0$, and $a_0=I+N$. The positive modes are $a_r=r\partial_{x_r}$ and negative modes are $a_{-r}=x_r$. Its fields are the normal-ordered divided derivatives in the A-page construction, not constant dual-number fields. It is an admissible, grading-restricted logarithmic module, and on its lowest generalized weight space

$$a_0|_E=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad L_F(0)|_E=\begin{pmatrix}\tfrac12&1\\0&\tfrac12\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The concrete zero-mode matrix and oscillator action above.

[F1] [[thm-rank-one-heisenberg-jordan-fock-module]] proves the full conformal-VOA module construction, module Jacobi, truncation, admissibility and generalized weight spaces, with $L_F(0)=D+I/2+N$ at $\lambda=1$.

[F2] [[def-logarithmic-vertex-module]] requires grading restriction and a nontrivial Jordan chain for $L_F(0)$.

## Verification

1.1 In the ordered basis $e_0,e_1$, $N$ has matrix $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and square zero. Thus $(I+N)^2/2=I/2+N$, giving the two displayed matrices by [F1]. In particular $(L_F(0)-1/2)e_1=e_0\ne0$ and $(L_F(0)-1/2)e_0=0$. These are an actual length-two conformal Jordan chain, not just a nonsemisimple action of an unrelated algebra element. [given, F1, F2, algebra]

2.1 On a weighted-degree-$d$ monomial $p$, $L_F(0)(p\otimes e_0)=(d+1/2)p\otimes e_0$ and $L_F(0)(p\otimes e_1)=(d+1/2)p\otimes e_1+p\otimes e_0$. The generalized weights are exactly $d+1/2$, with finite spaces $P_d\otimes E$ and lower bound $1/2$, by [F1]. Therefore the module meets every grading restriction and is logarithmic by [F2]. Formally on this pair, exponentiating the nilpotent part terminates and gives $z^{L_F(0)}(p\otimes e_1)=z^{d+1/2}(p\otimes e_1+(\log z)p\otimes e_0)$; this explains the terminology while the module fields themselves remain the ordinary Laurent fields already proved in [F1]. [given, F1, F2, step 1.1, algebra] ∎
