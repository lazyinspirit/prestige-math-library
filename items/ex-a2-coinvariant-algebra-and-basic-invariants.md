---
id: ex-a2-coinvariant-algebra-and-basic-invariants
kind: example
title: A2 coinvariant algebra and basic invariants
status: "published"
origin: pipeline
deps: [def-finite-linear-invariant-and-coinvariant-polynomial-algebras]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (ex-a2-coinvariant-algebra-and-basic-invariants). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups, §§11–13; local proof and exact reading limits in the group report
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
proof_strategy: direct
---

## Example

Let $S_3$ act by permuting coordinates on $V=\{(x,y,z)\in\mathbb C^3:x+y+z=0\}$, the $A_2$ reflection plane. Put $e_2=xy+xz+yz$ and $e_3=xyz$ restricted to $V$. Then
$$\mathbb C[V]^{S_3}=\mathbb C[e_2,e_3],\qquad \deg e_2=2,\quad\deg e_3=3.$$
The coinvariant algebra has basis $1,x,y,x^2,xy,x^2y$, Hilbert series $1+2t+2t^2+t^3$, and dimension $6$.

## Facts & Assumptions

**Given:** The displayed permutation action and restricted elementary symmetric polynomials.

[F2] Invariants, the positive invariant ideal, and Reynolds averaging use the conventions of [[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]].

## Verification

1.1 Each transposition fixes a line in $V$ and has eigenvalue $-1$ on the vector that subtracts its two exchanged coordinates. These transpositions generate $S_3$. The action is faithful: a permutation fixing all coordinate differences fixes their labels and hence is identity. Eliminate $z=-x-y$ to identify its polynomial algebra with $\mathbb C[x,y]$ and obtain $e_2=-(x^2+xy+y^2)$ and $e_3=-xy(x+y)$. [given]

2.1 We verify generation directly. Any invariant polynomial on the plane has a polynomial lift to $\mathbb C[x,y,z]$; average its six permuted lifts. By F2 its restriction is unchanged and the resulting lift is symmetric. A symmetric homogeneous polynomial in three variables is a polynomial in $e_1=x+y+z,e_2,e_3$: use lexicographic order $x>y>z$ on its finitely many monomials of fixed total degree. A leading exponent triple $(a,b,c)$ satisfies $a\geq b\geq c$, because swapping an out-of-order pair would produce a larger monomial with the same coefficient. The polynomial $e_1^{a-b}e_2^{b-c}e_3^c$ has leading monomial $x^ay^bz^c$ with coefficient one. Subtract its required multiple and repeat; lexicographic order strictly decreases within a finite set. Sum over the finitely many homogeneous parts. Restricting $e_1=0$ proves invariant generation by $e_2,e_3$. [F2, step 1.1]

3.1 These generators are algebraically independent without an appeal to a degree table. Their Jacobian determinant in $(x,y)$ is $(2x+y)(x+2y)(x-y)$, a nonzero polynomial. If a nonzero relation of least positive total degree $H(e_2,e_3)=0$ existed, differentiating it twice, once in each coordinate, and multiplying by the adjugate Jacobian matrix would give that determinant times each evaluated partial derivative of $H$ is zero. The polynomial ring is a domain, so both evaluated derivatives vanish. In characteristic zero some partial derivative of a nonconstant $H$ is nonzero and has lower degree, a contradiction; a nonzero constant cannot be a relation. Thus the stated invariant polynomial algebra has basic degrees two and three. [step 1.1, step 2.1]

4.1 By 2.1 and 3.1, the positive invariant ideal in F2 generates $(e_2,e_3)$ in $\mathbb C[x,y]$. Put $a=y^2+xy+x^2$ and $b=xy(x+y)$. The identity $xa-b=x^3$ gives $(a,b)=(a,x^3)$. First quotient by $x^3$: with $A=\mathbb C[x]/(x^3)$, the remaining quotient is $A[y]/(y^2+xy+x^2)$. Division by this monic polynomial in $y$ has unique remainder $u+vy$ with $u,v\in A$. Existence follows by canceling the highest power of $y$; uniqueness follows because a nonzero multiple of a monic degree-two polynomial has degree at least two, even over $A$. The unique representatives of elements of $A$ have degrees at most two in $x$. Hence $1,x,x^2,y,xy,x^2y$ are independent and spanning, proving the asserted basis and Hilbert series by their degrees $0,1,2,1,2,3$. [F2, step 2.1, step 3.1]

5.1 The quotient dimension is therefore $6=|S_3|$, and the degree product is $2\cdot3=6$. The degree-zero class is nonzero, the top class $x^2y$ is nonzero by unique remainder, and all degrees above three vanish. This is an explicit calculation on the nonzero two-dimensional plane; there is no limiting parameter or choice assumption. [step 4.1] ∎
