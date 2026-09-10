---
id: ex-defect-zero-and-p-group-boundaries
kind: example
title: Defect zero and p group boundaries
deps: [prop-principal-block-has-sylow-defect, thm-defect-zero-blocks-are-simple-algebras, cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Example

Over a splitting field $k$ of characteristic $p$, a finite $p$-group $P$ has a single block $kP$ with defect group $P$. The trivial group has the defect-zero block $k=M_1(k)$. A nontrivial ambient defect-zero example is the block $(a+a^2)kS_3\cong M_2(k)$ in characteristic $2$, where $a=(123)$.

## Facts & Assumptions

**Given:** A splitting field $k$ of characteristic $p$; the indicated finite groups.

[F1] A principal block has Sylow defect. ([[prop-principal-block-has-sylow-defect]])

[F2] Over a splitting field a matrix block is equivalent to a defect-zero block. ([[thm-defect-zero-blocks-are-simple-algebras]])

[F3] A finite $p$-group over the given splitting field has only the trivial simple module. ([[cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p]])

## Verification

**Proof technique:** direct.

1.1 Any nonzero finite-dimensional block algebra has a simple module: choose a proper left ideal of largest dimension; its quotient is simple since a strictly larger proper ideal would have larger dimension. Different blocks cannot have isomorphic simple $kP$-modules, since their orthogonal central idempotents act respectively as identity and zero. By [F3] there is only one simple module, so there is only one block, necessarily the principal one. By [F1] its defect is $P$. For $P=C_p$, the explicit algebra $k[u]/((u-1)^p)$ illustrates this: elements with nonzero constant coefficient in $u-1$ are units by a finite geometric series, the rest are nilpotent, and hence its only idempotents are $0,1$. [F1, F3]

2.1 If $P=1$, then $kP=k$, its sole block has defect group $1$ by step 1.1 and is $M_1(k)$, in agreement with [F2]. This covers the simultaneous zero-defect and full-defect boundary without requiring a nontrivial group. [F2, step 1.1]

3.1 For the nontrivial example take characteristic $2$, $a=(123)$ and $t=(12)$. Put $f=a+a^2$. Then $f^2=f$, and inversion by $t$ fixes $f$, so $f$ is central. The elements $f,fa$ are independent and span $fk\langle a\rangle$, since $fa^2=f+fa$; disjoint coset supports therefore make $f,fa,ft,fat$ a basis of $fkS_3$. Define $A=\begin{pmatrix}0&1\\1&1\end{pmatrix}$ and $T=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Direct multiplication gives $A^3=T^2=I$ and $TAT=A^{-1}$. The presentation with these relations defines $S_3$: every word reduces to $a^i t^j$ with $0\le i<3$, $0\le j<2$, and the six corresponding permutations are distinct. Thus $a\mapsto A,t\mapsto T$ extends to an algebra map $\rho:kS_3\to M_2(k)$. It sends $f$ to $A+A^2=I$, and the displayed basis of $fkS_3$ to $I,A,T,AT$. These span all matrices, since $E_{22}=A+T$, $E_{11}=I+A+T$, $E_{21}=AT+I$, and $E_{12}=T+AT+I$. Hence the restricted map is a surjection between four-dimensional algebras, and is an isomorphism. Its scalar centre makes $f$ primitive central, and [F2] gives defect $1$. This repeats the calculation within this example over every characteristic-two field, without a root-of-unity assumption or a dependency on another example. [F2] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
