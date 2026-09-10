---
id: ex-the-a2-serre-relations
kind: example
title: "The a2 serre relations"
status: draft
origin: pipeline
deps: ["thm-serre-presentation-of-a-kac-moody-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Example 1.5.2, pp.20–21; complete A2 matrix calculation"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Example

For $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$, the positive Serre relations are $[e_1,[e_1,e_2]]=0$ and $[e_2,[e_2,e_1]]=0$, with the two analogous negative relations. The algebra is $\mathfrak{sl}_3(\mathbb C)$ and its six roots are $\pm\alpha_1,\pm\alpha_2,\pm(\alpha_1+\alpha_2)$.

## Facts & Assumptions

**Given:** The symmetric A2 matrix with D=I.

[F1] The separate half presentations and triangular decomposition follow from Serre generation. ([[thm-serre-presentation-of-a-kac-moody-algebra]]).

## Verification

1.1 Set $z=[e_1,e_2]$. The two positive relations say $[e_1,z]=[e_2,z]=0$. Hence the span of $e_1,e_2,z$ is a Lie subalgebra containing the positive generators and equals the positive half. The same argument gives at most three dimensions for the negative half. Since $\det A=3$, the Cartan has dimension two, so F1 gives $\dim\mathfrak g\le8$. [F1, given]

1.2 Take $e_1=E_{12}$, $e_2=E_{23}$, $f_1=E_{21}$, $f_2=E_{32}$, $h_1=E_{11}-E_{22}$ and $h_2=E_{22}-E_{33}$. The identity $[E_{ab},E_{cd}]=\delta_{bc}E_{ad}-\delta_{da}E_{cb}$ gives $[e_1,e_2]=E_{13}$, $[f_2,f_1]=E_{31}$, $[e_i,f_j]=\delta_{ij}h_i$, and zero second brackets $[E_{12},E_{13}]=[E_{23},E_{13}]=0$, with the analogous negative zeros. For a diagonal $h=\operatorname{diag}(t_1,t_2,t_3)$, $[h,E_{ab}]=(t_a-t_b)E_{ab}$. Thus $\alpha_1=t_1-t_2$, $\alpha_2=t_2-t_3$ give $(\alpha_j(h_i))_{ij}=A$. All presentation relations hold, so F1 gives a homomorphism. [F1, given]

2.1 The six off-diagonal matrix units and the two displayed diagonal matrices are independent and span all traceless matrices. Step 1.2 therefore gives a surjection onto an eight-dimensional algebra; step 1.1 makes it an isomorphism. The diagonal commutator formula assigns the six weights stated in the example to these six units; the diagonal subspace has weight zero. Thus the root list is exhaustive, with each root multiplicity one. [step 1.1, step 1.2] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Example 1.5.2, pp.20–21; complete A2 matrix calculation.
