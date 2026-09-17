---
id: thm-spectral-theorem-for-unbounded-self-adjoint-operators
kind: theorem
title: "Spectral theorem for unbounded self-adjoint operators (PVM form)"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unbounded-integral-against-a-pvm, lem-unbounded-pvm-integral-is-well-defined-and-closed, thm-cayley-correspondence, def-cayley-transform-of-a-self-adjoint-operator, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, thm-support-and-uniqueness-of-the-spectral-measure, def-projection-valued-measure, def-regular-borel-measure-on-an-lch-space, def-spectrum-and-resolvent-of-a-bounded-operator, lem-neumann-series, def-axiom-of-choice, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-bounded-borel-pvm-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 3.1, (3.52)-(3.53) and Theorem 3.2 area, pp.103-110"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Theorem 7.35 (alternative resolvent route, complete proof), pp.36-37"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.40, Theorem 6.41 and Corollary 6.44, Sec. 6.4"
---

## Statement

Assume the Axiom of Choice. Let $T$ be a self-adjoint operator on the nonzero
complex Hilbert space $H$. Then there is a unique regular projection valued
measure $E$ on the Borel $\sigma$-algebra of $\mathbb R$ such that
$$
D(T)=\Bigl\{x\in H:\int_{\mathbb R}\lambda^2\,dE_x(\lambda)<\infty\Bigr\},\qquad Tx=\int_{\mathbb R}\lambda\,dE(\lambda)x\quad(x\in D(T)).
$$
Conversely, if $E$ is a regular projection valued measure on $\mathbb R$, then
the operator $\int\lambda\,dE$ with that domain is self-adjoint and its
spectral projection valued measure is $E$ again.

## Facts & Assumptions

[A1] For a Borel function $f$ the integral $f(E)$ of [[def-unbounded-integral-against-a-pvm]] has domain $\{x:\int|f|^2dE_x<\infty\}$, is closed, satisfies $(f(E))^*=\overline f(E)$ and $\|f(E)x\|^2=\int|f|^2dE_x$, and is self-adjoint for real $f$ ([[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

[A2] Every bounded normal operator $C$ has a unique regular spectral PVM $F$ with $C=\int z\,dF$; the support of $F$ is $\sigma(C)$, and $F$ is unique among regular PVMs representing $C$ on a compact set ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[thm-support-and-uniqueness-of-the-spectral-measure]]).

[A3] $C_T=(T-i)(T+i)^{-1}$ is unitary with $\ker(I-C_T)=\{0\}$, $\operatorname{ran}(I-C_T)=D(T)$, and $T=i(I+C_T)(I-C_T)^{-1}$ on $D(T)$ ([[def-cayley-transform-of-a-self-adjoint-operator]], [[thm-cayley-correspondence]]).

[A4] For a unitary $C$ one has $\sigma(C)\subseteq S^1=\{z:|z|=1\}$: $|z|>\|C\|$ forces $z\in\rho(C)$ by the Neumann series, so $\sigma(C)$ lies in the closed unit disk, and $0\notin\sigma(C)$ with $z\in\sigma(C)$ equivalent to $z^{-1}\in\sigma(C^{-1})$ ([[lem-neumann-series]], [[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A5] For bounded Borel $h$ on $S^1$ the identity $\int h\,dF=\Phi_F(h)$ holds, and for any bijection $\psi:\mathbb R\to S^1\setminus\{1\}$ with Borel inverse the formula $E(B):=F(\psi(B))$ defines a PVM on $\mathbb R$ with $\int(h\circ\psi)\,dE=\int h\,dF$; regularity is preserved by such a transport ([[thm-bounded-borel-pvm-integral]], [[def-projection-valued-measure]], [[def-regular-borel-measure-on-an-lch-space]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint operator $T$ on $H$ and $C:=C_T$.

1.1 By [A3] the operator $C$ is unitary with $\ker(I-C)=\{0\}$, and by [A4] its spectrum lies in $S^1$; let $F$ be the regular spectral PVM of $C$ on $\sigma(C)\subseteq S^1$, so $C=\int z\,dF$ by [A2]. [A2, A3, A4]

2.1 $F(\{1\})=0$: for a bounded normal operator the spectral projection at a point $\lambda$ is the orthogonal projection onto $\ker(C-\lambda)$, because $F(\{\lambda\})x=x$ gives $Cx=\int z\,dF_x=\lambda x$, while $Cx=\lambda x$ gives $\int|z-\lambda|^2dF_x=\|(C-\lambda)x\|^2=0$, hence $F_x(\{z\ne\lambda\})=0$ and $F(\{\lambda\})x=x$; with $\lambda=1$ the kernel is $\{0\}$ by [A3]. [A2, A3, step 1.1]

3.1 Let $\psi(\lambda)=(\lambda-i)(\lambda+i)^{-1}$. Then $\psi$ is a homeomorphism of $\mathbb R$ onto $S^1\setminus\{1\}$, and $E(B):=F(\psi(B))$ is a PVM on the Borel sets of $\mathbb R$ with $E(\mathbb R)=F(S^1\setminus\{1\})=I-F(\{1\})=I$; it is regular because $F$ is and $\psi$ is a homeomorphism, and $C=\int z\,dF=\int\psi(\lambda)\,dE(\lambda)$. [A5, step 2.1]

4.1 Let $A$ be the self-adjoint operator $\int\lambda\,dE$ with domain $D(A)=\{x:\int\lambda^2dE_x<\infty\}$, given by [A1]; write $h(\lambda)=(\lambda+i)^{-1}$, a bounded Borel function. Then $1-C=\int(1-\psi)dE=\int2i h\,dE=2i\,h(E)$, and $(A+i)h(E)=I$ because $(\lambda+i)h(\lambda)=1$ and $A h(E)=( \lambda h)(E)$ on the natural domain; hence $h(E)=(A+i)^{-1}$ and $(A+i)(1-C)=2iI$, so $A+i=2i(1-C)^{-1}$ on $\operatorname{ran}(1-C)=D(A)$. [A1, A3, A5, step 3.1]

5.1 Substituting 2.1 into the formula $T=i(I+C)(I-C)^{-1}$ of [A3] gives $T=(1/2)(I+C)(A+i)$; now $I+C=\int(1+\psi)dE=\int2\lambda h(\lambda)\,dE=2\lambda h(\lambda)(E)$, so $T=(\lambda h)(E)(A+i)=(\lambda^2h)(E)+i(\lambda h)(E)=(\lambda)(E)=A$ on $D(A)$, because $\lambda^2h+i\lambda h=\lambda h(\lambda+i)=\lambda$. [A1, A3, step 4.1]

5.2 Uniqueness: let $E'$ be a regular PVM on $\mathbb R$ with $D(T)=\{x:\int\lambda^2dE'_x<\infty\}$ and $Tx=\int\lambda\,dE'x$ for $x\in D(T)$, and put $F'(B):=E'(\psi^{-1}(B))$ for Borel $B\subseteq S^1$. Then $F'$ is a regular PVM on $S^1$ with $\int z\,dF'=\int\psi\,dE'=I-2i\,h(E')=I-2i(T+i)^{-1}=C$, where $(T+i)^{-1}=h(E')$ is proved as in step 4.1 with $E'$ in place of $E$. By the uniqueness clause of [A2] applied to the bounded normal operator $C$, $F'=F$ on $\sigma(C)$ and $F'(S^1\setminus\sigma(C))=0$, so $E'=F'\circ\psi=F\circ\psi=E$. [A2, A5, step 3.1, step 4.1]

6.1 Conversely, if $E$ is a regular PVM on $\mathbb R$, then $A=\int\lambda\,dE$ is self-adjoint by [A1] and $E$ represents $A$; by step 5.2 the representing PVM is unique, so $E$ is the spectral PVM of $A$. [A1, step 5.2] ∎
