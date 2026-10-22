---
id: ex-knot-kt-36-worked-cases
kind: example
title: "Unknot, fundamental color, and a trefoil value"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-normalized-colored-jones-sequence
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free: the statements and verification concern fixed finite braid words and exact matrix operations."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Hitoshi Murakami, An Introduction to the Volume Conjecture, §2.4 and Example 2.5"
      url: "https://arxiv.org/pdf/1002.0126"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
---

## Example

For every finite braid word $\beta$ in the declared generic matrix convention, the $N=1$ value is $1$; the one-strand identity braid has value $1$ for every $N\ge1$. Let $T$ be the closure of the positive two-strand braid $\sigma_1^3$ in the declared crossing convention. With $t=q^{-1}=A^{-4}$, its $N=2$ value is $J_2(T;q)=t+t^3-t^4$.

## Example references

[Murakami, *An Introduction to the Volume Conjecture*, §2.4 and Example 2.5](https://arxiv.org/pdf/1002.0126)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)

## Facts & Assumptions

**Given:** The admissible generic color matrices, their normalization from the preceding definition, and the positive two-strand braid $\sigma_1^3$.

[F1] The generic matrix value is $J_N^{\mathrm{gen}}(\beta;q)=\lambda_N^{-w(\beta)}\operatorname{Tr}(G_N^{\otimes n}\rho_N(\beta))/d_N$, with $d_N\ne0$ in $\mathbb Q(A)$ ([[def-normalized-colored-jones-sequence]]).

## Verification

**Proof technique:** direct matrix evaluation.

**Given:** [F1] and the matrix data in the preceding definition.

1.1 For $N=1$, the basis has one vector, $E=F=0$, $K_L=1$, $c_1=G_1=1$, $d_1=\lambda_1=1$. Every braid generator therefore acts as $1$, and the normalized value of any finite braid closure is $1$. For the unknot at any $N$, the one-strand identity braid has $w=0$ and trace $\operatorname{Tr}(G_N)=d_N$, so its normalized value is also $1$. [F1, given, algebra]

2.1 At $N=2$, the only nonzero terms of $\mathcal R_2$ are $r=0,1$. Applying them to the ordered basis $(v_+v_+,v_+v_-,v_-v_+,v_-v_-)$ gives
$$c_2=\begin{pmatrix}A&0&0&0\\0&0&A^{-1}&0\\0&A^{-1}&A-A^{-3}&0\\0&0&0&A\end{pmatrix},\qquad G_2\otimes G_2=\operatorname{diag}(A^4,1,1,A^{-4}).$$
The middle block of $c_2$ is $B=\begin{pmatrix}0&A^{-1}\\A^{-1}&A-A^{-3}\end{pmatrix}$; direct multiplication gives $\operatorname{tr}(B^3)=A^3-A^{-9}$. The other two diagonal entries of $c_2^3$ are $A^3$, so
$$\operatorname{Tr}((G_2\otimes G_2)c_2^3)=A^7+A^3+A^{-1}-A^{-9}.$$
Here $w(\sigma_1^3)=3$, $\lambda_2=-A^3$, and $d_2=-A^2-A^{-2}$ by the color definition. [F1, given, construct, algebra]

2.2 Substitution into [F1] yields
$$J_2(T;q)=\frac{A^{-9}(A^7+A^3+A^{-1}-A^{-9})}{A^2+A^{-2}}=A^{-4}+A^{-12}-A^{-16}=t+t^3-t^4,$$
where $t=A^{-4}=q^{-1}$. [F1, step 2.1, algebra] ∎

## Remarks

The KT-36 B leaf also tracks the general identity $J_2(K;q)=V_K(q^{-1})$ for every knot. This finite example does not prove that identity. The current bridge candidate `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket` depends on `def-kauffman-bracket-smoothing-and-loop-value`, whose active Step 1 record is escalated for a curl-correction defect, and on the draft `lem-hecke-bracket-trace-dictionary-and-local-descent`. Those supplier bodies and hypotheses are recorded for owner reconciliation; this example does not use the bridge as a proof supplier.
