---
id: ex-dual-numbers-are-nonsemisimple-symmetric-frobenius
kind: example
title: "The dual numbers are symmetric Frobenius and nonsemisimple over every field"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-frobenius-object-and-knowledgeable-sewing-data, def-semisimple-module, def-simple-module, lem-finite-frobenius-functional-determines-coproduct]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
axiom_use: "Choice-free and valid over every field, including characteristic two."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§2.4, PDF pp. 25–30, for Frobenius functionals and the basis coproduct construction."
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§2.1–2.2, PDF pp. 4–11, for the Frobenius algebra/object convention."
generation:
  role: example
---

## Example

Let $k$ be any field and let $A=k[x]/(x^2)$, with $\epsilon(1)=0$ and $\epsilon(x)=1$. The basis $(1,x)$ has pairing matrix
$$
\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$
It is symmetric and nondegenerate in every characteristic. Its associated coproduct is
$$
\Delta(1)=1\otimes x+x\otimes1, \qquad \Delta(x)=x\otimes x.
$$
The Frobenius algebra is not semisimple as a left module over itself.

## Facts & Assumptions

**Given:** An arbitrary field $k$ and the quotient algebra $A=k[x]/(x^2)$.

[F1] A Frobenius object has a unital associative algebra, counital coassociative coalgebra, and the two typed Frobenius identities; its pairing is $\epsilon\mu$ ([[def-frobenius-object-and-knowledgeable-sewing-data]]).

[F2] A nondegenerate associative functional determines the unique coproduct by its inverse-pairing tensor ([[lem-finite-frobenius-functional-determines-coproduct]]).

[F3] A semisimple module is an internal direct sum of simple submodules, and a simple module is nonzero with no nonzero proper submodule ([[def-semisimple-module]], [[def-simple-module]]).

## Verification

1.1 Every class in $A$ has a unique form $a+bx$, so $(1,x)$ is a basis, $x^2=0$, and the multiplication is associative as a quotient of $k[x]$. The matrix of $\beta(u,v)=\epsilon(uv)$ in this basis is the displayed matrix; its determinant is $-1$, which is nonzero even in characteristic two. Thus $\beta$ is symmetric and nondegenerate, so $\epsilon$ is a Frobenius functional. The right-dual basis to $(1,x)$ for $\beta$ is $(x,1)$, so the inverse-pairing tensor is $x\otimes1+1\otimes x$. Applying $\Delta(a)=(a\otimes1)(x\otimes1+1\otimes x)$ gives the two formulas. [given, F1, F2, construct]

2.1 Direct computation verifies the coalgebra laws. The two counits on $\Delta(1)$ give $\epsilon(1)x+\epsilon(x)1=1$ and $1\epsilon(x)+x\epsilon(1)=1$; on $\Delta(x)$ each gives $x\epsilon(x)=x$. Coassociativity on $1$ gives on both sides $1\otimes x\otimes x+x\otimes1\otimes x+x\otimes x\otimes1,$ and on $x$ gives $x\otimes x\otimes x$ on both sides. [step 1.1, F1, algebra]

3.1 To check both Frobenius identities it is enough by bilinearity to use the four ordered basis pairs. For $(1,1)$ both sides are $\Delta(1)$; for $(1,x)$ both sides are $\Delta(x)$; for $(x,1)$ both sides are $x\otimes x$; for $(x,x)$ both sides are $0$, since $x^2=0$. These are exactly $\Delta(ab)=(a\otimes1)\Delta(b)=\Delta(a)(1\otimes b)$, the two typed identities after inserting the vector-space associator. Thus $(A,\mu,\eta,\Delta,\epsilon)$ is a symmetric Frobenius object. [step 1.1, step 2.1, F1, algebra]

4.1 Let $J=kx$. It is a nonzero proper left submodule of $A$, since $x\cdot x=0$ and scalars preserve $J$. If $L\subseteq A$ is any simple left submodule, multiplication by $x$ maps $L$ into $L$. Its image $xL$ is a submodule, so simplicity gives $xL=0$ or $xL=L$. The latter would imply $L=xL=x^2L=0$, contradicting simplicity; hence $xL=0$. For $a+bx\in L$, this implies $0=x(a+bx)=ax$, so $a=0$ and $L\subseteq J$. Therefore every simple submodule of $A$ is contained in the one-dimensional space $J$; their sum cannot equal the two-dimensional module $A$. By [F3], $A$ is not semisimple as a left module over itself. [given, F3, algebra] ∎

