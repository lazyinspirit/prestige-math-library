---
id: ex-hh-sweedler-frobenius-pairing
kind: example
title: "The Frobenius pairing on the four-dimensional Sweedler algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 6
deps: [def-hh-frobenius-functional-and-associative-pairing, lem-hh-taft-algebra-pbw-and-hopf-structure]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Assume $\operatorname{char}(k)\ne2$ and identify the four-dimensional Sweedler Hopf algebra $H_4$ with $T_2$ using $\zeta=-1$. Let $\lambda:H_4\to k$ extract the coefficient of $gx$ in the basis $(1,g,x,gx)$. Then $(a,b)\mapsto\lambda(ab)$ is an associative nondegenerate pairing, so $H_4$ is Frobenius.

## Facts & Assumptions

**Given:** A field $k$ of characteristic different from $2$, $H_4=T_2$ with basis $(1,g,x,gx)$, and $\lambda$ equal to the $gx$-coordinate functional.

[F1] [[lem-hh-taft-algebra-pbw-and-hopf-structure]]: for $N=2$ and $\zeta=-1$, $g^2=1$, $x^2=0$, $gx=-xg$, and $(1,g,x,gx)$ is a basis of the Taft algebra.

[F2] [[def-hh-frobenius-functional-and-associative-pairing]]: a functional is Frobenius when $(a,b)\mapsto\lambda(ab)$ is associative and nondegenerate in both variables.

## Verification
1.1 Using [F1] and the definition of $\lambda$, the matrix of $\beta(a,b)=\lambda(ab)$ in the ordered basis $(1,g,x,gx)$ in both variables is $M=\begin{pmatrix}0&0&0&1\\0&0&1&0\\0&-1&0&0\\1&0&0&0\end{pmatrix}$. Indeed the only products with a nonzero $gx$-coefficient are $1\cdot gx=gx$, $g\cdot x=gx$, $x\cdot g=-gx$, and $gx\cdot1=gx$. [F1, given, algebra]

2.1 The displayed matrix is antidiagonal with nonzero antidiagonal entries, so it is invertible; hence both maps $a\mapsto\beta(a,-)$ and $b\mapsto\beta(-,b)$ are isomorphisms. The form is associative because $\beta(ab,c)=\lambda((ab)c)=\lambda(a(bc))=\beta(a,bc)$ by associativity in $H_4$. [step 1.1, algebra]

3.1 By [F2], $\lambda$ is a Frobenius functional and $H_4$ is Frobenius. [step 2.1, F2] ∎
