---
id: ex-oriented-lattice-bases-and-sl2z
kind: example
title: "Oriented bases and $\\mathrm{SL}_2(\\mathbb Z)$"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'Lattices and bases': change of basis matrices lie in GL_2(Z) and orientation selects SL_2(Z), printed p. 42."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, examples of lattice bases and their transition matrices, printed p. 80."
verification:
  precheck: pass
---

## Example

Let $\Lambda=\mathbb Z+i\mathbb Z=\{m+ni:m,n\in\mathbb Z\}$.

1. The pairs $(1,i)$ and $(1+i,i)$ are bases of $\Lambda$ of positive complex
   orientation and differ by an integer change-of-basis matrix of determinant
   $1$;
2. the pair $(i,1)$ is a basis of $\Lambda$ of negative orientation, and it
   differs from $(1,i)$ by an integer matrix of determinant $-1$;
3. all three pairs are bases of the same lattice, so they all define the same
   complex torus $\mathbb C/\Lambda$ and the same compact Riemann surface.

## Facts & Assumptions

**Given:** The lattice $\Lambda=\mathbb Z+i\mathbb Z$, whose elements are the
numbers $m+ni$ with $m,n\in\mathbb Z$ and whose real-linear independence datum
is $i/1=i\notin\mathbb R$.

[F1] A basis of a lattice $\Lambda$ is a pair $(\omega_1,\omega_2)$ with $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ and $\omega_1,\omega_2$ real-linearly independent; it is oriented when $\operatorname{Im}(\omega_2/\omega_1)>0$; two bases of the same lattice differ by a matrix in $\mathrm{GL}_2(\mathbb Z)$, and two oriented bases by a matrix in $\mathrm{SL}_2(\mathbb Z)$; the quotient torus and all its structure depend on the set $\Lambda$ alone ([[def-complex-lattice-and-complex-torus]]).

[F2] For a full lattice $\Lambda$ the quotient $T_\Lambda=\mathbb C/\Lambda$ is a compact Riemann surface with the quotient topology of the class map $\pi$, which is a holomorphic covering map ([[thm-complex-torus-quotient-is-well-defined]]).

## Verification

1.1 The pair $(1,i)$ is a basis of $\Lambda$: by definition $\Lambda=\mathbb Z\cdot1+\mathbb Z\cdot i$, and $1,i$ are real-linearly independent since $i\notin\mathbb R$; its orientation is positive because $\operatorname{Im}(i/1)=1>0$. [F1]

1.2 The pair $(1+i,i)$ is a basis of the same lattice: $1+i,i\in\Lambda$, so $\mathbb Z(1+i)+\mathbb Zi\subseteq\Lambda$, while $1=(1+i)-i$ and $i=i$ show the reverse inclusion; the change-of-basis matrix, whose columns are the new vectors in the old basis, expressing $(1+i,i)=(\omega_1+\omega_2,\omega_2)$ in the basis $(1,i)$ is $\left(\begin{smallmatrix}1&0\\1&1\end{smallmatrix}\right)$, of determinant $1$, so the orientation is positive as well, and independently $\operatorname{Im}\bigl(i/(1+i)\bigr)=\operatorname{Im}\bigl((1+i)/2\bigr)=\tfrac12>0$. [F1, algebra]

1.3 The pair $(i,1)$ is a basis of $\Lambda$ with change-of-basis matrix $\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ relative to $(1,i)$, of determinant $-1$; its orientation is negative because $\operatorname{Im}(1/i)=\operatorname{Im}(-i)=-1<0$. [F1, algebra]

2.1 By steps 1.1, 1.2 and 1.3 the three pairs are bases of the same lattice $\Lambda$, so they give the same quotient $\mathbb C/\Lambda$ and the same lattice sums, and by [F2] this quotient is a compact Riemann surface with holomorphic covering map $\pi$, independently of which basis is used to describe $\Lambda$. [F1, F2, step 1.1, step 1.2, step 1.3] ∎

The example illustrates that orientation is a property of an ordered basis, not of
the lattice: $(1,i)$ and $(1+i,i)$ are related by the unipotent matrix
$\left(\begin{smallmatrix}1&0\\1&1\end{smallmatrix}\right)\in\mathrm{SL}_2(\mathbb Z)$,
whereas swapping the two vectors multiplies the orientation sign by $-1$.
