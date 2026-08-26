---
id: ex-the-incidence-matrix-of-the-fano-plane
kind: example
title: "The Fano plane has incidence matrix $N$ with $NN^{\\mathsf T}=2I+J$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-skolems-construction-gives-the-fano-plane,
       def-incidence-matrix-of-a-two-design,
       thm-incidence-matrix-identity-for-a-two-design,
       thm-fishers-inequality-for-two-designs]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
---

## Example

Order the Fano lines as
$$L_0=\{0,1,3\},\ L_1=\{1,2,4\},\ L_2=\{2,3,5\},\ L_3=\{3,4,6\},\ L_4=\{4,5,0\},\ L_5=\{5,6,1\},\ L_6=\{6,0,2\},$$
and order the points as $0,1,\dots,6$. Then the point-block incidence matrix is
$$N=\begin{pmatrix}1&0&0&0&1&0&1\\1&1&0&0&0&1&0\\0&1&1&0&0&0&1\\1&0&1&1&0&0&0\\0&1&0&1&1&0&0\\0&0&1&0&1&1&0\\0&0&0&1&0&1&1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The Fano plane from [[ex-skolems-construction-gives-the-fano-plane]].

[L1] Every two distinct points of the Fano plane lie on exactly one line ([[ex-skolems-construction-gives-the-fano-plane]]).

## Verification

**Proof technique:** direct.

1.1 Each row of $N$ has three ones, because each point lies on three of the seven displayed lines. Hence every diagonal entry of $NN^{\mathsf T}$ is $3$. [given, algebra]

1.2 Distinct rows of $N$ have dot product $1$, because [L1] says that any two distinct points lie on exactly one common line. Hence every off-diagonal entry of $NN^{\mathsf T}$ is $1$. [L1, algebra]

2.1 Therefore $NN^{\mathsf T}$ has diagonal entries $3$ and off-diagonal entries $1$, so $NN^{\mathsf T}=2I_7+J_7$. In particular this example realizes equality in Fisher's inequality, since the plane has $7$ points and $7$ lines. [step 1.1, step 1.2, algebra] ∎
