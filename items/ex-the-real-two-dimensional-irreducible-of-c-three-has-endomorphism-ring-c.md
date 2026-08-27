---
id: ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c
kind: example
title: "The real $2$-dimensional irreducible representation of $C_3$ has endomorphism ring $\\mathbb C$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-numbers-and-arithmetic, def-generated-subgroup, def-intertwiner-equivalent-and-faithful-representations, def-subrepresentation-and-irreducible-representation, lem-of-square-positive, thm-complex-numbers-form-a-field, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 4.2.2 and Example 9.2.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Example

Let $C_3=\langle g\rangle$, and let $V=\mathbb R^2$. Define
$$A:=\begin{pmatrix}-\frac12&-\frac{\sqrt3}{2}\\[2pt]\frac{\sqrt3}{2}&-\frac12\end{pmatrix}.$$
Sending $g$ to $A$ makes $V$ into a real $2$-dimensional representation of
$C_3$. This representation is irreducible, and its endomorphism ring is a copy
of $\mathbb C$.

## Facts & Assumptions

**Given:** The cyclic group $C_3=\langle g\rangle$ and the matrix $A$ above.

[L1] A representation is irreducible exactly when it has no proper nonzero subrepresentation ([[def-subrepresentation-and-irreducible-representation]]).

[L2] A $G$-endomorphism is a linear map commuting with the action of every group element ([[def-intertwiner-equivalent-and-faithful-representations]]).

[L3] The real numbers form an ordered field, and every nonzero square is positive ([[thm-reals-ordered-field]], [[lem-of-square-positive]]).

[L4] Every complex number has a unique form $a+bi$, and $$(a+bi)(u+vi)=(au-bv)+(av+bu)i$$ ([[thm-complex-numbers-form-a-field]], [[def-complex-numbers-and-arithmetic]]).

## Verification

**Proof technique:** direct.

1.1 A direct multiplication gives $A^2+A+I_2=0$, hence $A^3=I_2$. Therefore $g \mapsto A$ defines a real representation of $C_3=\langle g\rangle$ on $V=\mathbb R^2$. [given, algebra]

1.2 Let $T=\begin{pmatrix}a&b\\ c&d\end{pmatrix}$. The condition $TA=AT$ from [L2] is equivalent to $c=-b$ and $d=a$, so the commuting endomorphisms are exactly the matrices $\begin{pmatrix}a&-b\\ b&a\end{pmatrix}$ with $a,b \in \mathbb R$. [L2, given, algebra]

2.1 Let $W \subseteq V$ be a nonzero invariant line, and choose $0 \ne v \in W$. Then $Av=\lambda v$ for some $\lambda \in \mathbb R$. Applying the polynomial identity from step 1.1 gives $(\lambda^2+\lambda+1)v=0$, so $\lambda^2+\lambda+1=0$. But $4(\lambda^2+\lambda+1)=(2\lambda+1)^2+3>0$ by [L3], impossible. Hence no nonzero proper invariant line exists, so the representation is irreducible by [L1]. [step 1.1, L1, L3, given, choose]

3.1 The map $\Phi:\mathbb C \to \operatorname{End}_{C_3}(V)$ given by $\Phi(a+bi)=\begin{pmatrix}a&-b\\ b&a\end{pmatrix}$ is bijective by the uniqueness in [L4], and the multiplication formula in [L4] matches matrix multiplication of these $2 \times 2$ matrices. Therefore $\operatorname{End}_{C_3}(V)$ is a copy of $\mathbb C$. [step 1.2, L4] ∎
