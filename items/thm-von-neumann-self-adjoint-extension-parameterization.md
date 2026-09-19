---
id: thm-von-neumann-self-adjoint-extension-parameterization
kind: theorem
title: "Von Neumann parameterization of self-adjoint extensions"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-deficiency-subspaces-and-deficiency-indices, thm-cayley-correspondence, def-cayley-transform-of-a-self-adjoint-operator, thm-self-adjointness-range-criterion, thm-partial-isometry-characterizations, thm-double-orthogonal-complement-is-closure, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-densely-defined-closed-and-closable-operator, def-orthogonality-and-orthogonal-complement, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 2.26, Theorem 2.27 and (2.106)-(2.107) with proof, pp.91-95"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Theorem 6.39 and Sec. 6.3.2"
---

## Statement

Assume Countable Choice. Let $T$ be a densely defined closed symmetric operator
with deficiency subspaces $K_\pm$ ([[def-deficiency-subspaces-and-deficiency-indices]]),
and let $V:K_+\to K_-$ be a unitary operator. Then
$$D(T_V)=D(T)\oplus\{u+Vu:u\in K_+\},\qquad T_V(x+u+Vu)=Tx+iu-iVu$$
defines a self-adjoint extension $T_V$ of $T$; the sum is direct and $D(T_V)$
is dense. The map $V\mapsto T_V$ is a bijection from the set of unitary
operators $K_+\to K_-$ onto the set of self-adjoint extensions of $T$.

## Facts & Assumptions

[A1] $H=\operatorname{ran}(T+i)\oplus K_+=\operatorname{ran}(T-i)\oplus K_-$ orthogonally, $K_+\cap K_-=\{0\}$, and $C_T:\operatorname{ran}(T+i)\to\operatorname{ran}(T-i)$ is an isometric isomorphism ([[def-deficiency-subspaces-and-deficiency-indices]], [[def-cayley-transform-of-a-self-adjoint-operator]]).

[A2] For a self-adjoint operator $S\supseteq T$, its Cayley transform $U_S$ is unitary and extends $C_T$. Hence $U_S$ maps $\operatorname{ran}(T+i)$ onto $\operatorname{ran}(T-i)$ and maps their orthogonal complements onto one another, so $U_S(K_+)=K_-$ ([[thm-cayley-correspondence]], [[def-cayley-transform-of-a-self-adjoint-operator]], [A1]).

[A3] A densely defined symmetric operator $S$ with $\operatorname{ran}(S\pm i)=H$ is self-adjoint, and the inverse Cayley construction $S=i(I+U)(I-U)^{-1}$ on $\operatorname{ran}(I-U)$ produces a self-adjoint operator for every unitary $U$ with $\ker(I-U)=\{0\}$ ([[thm-cayley-correspondence]], [[thm-self-adjointness-range-criterion]]).

[A4] If a unitary $V$ satisfies $\|Vu\|=\|u\|$ and $V(K_+)=K_-$, then $U:=C_T\oplus(-V)$ is unitary on $H$ ([[thm-partial-isometry-characterizations]], [A1]).

## Proof

**Proof technique:** direct.

**Given:** A closed symmetric densely defined $T$ and a unitary $V:K_+\to K_-$.

1.1 Define $U:=C_T\oplus(-V)$ on $H=\operatorname{ran}(T+i)\oplus K_+$; by [A1] and [A4] the operator $U$ is unitary and extends $C_T$. [A1, A4]

2.1 $I-U$ is injective: for $z=(T+i)x+u$ with $x\in D(T)$, $u\in K_+$ one has $(I-U)z=2ix+u+Vu$, so $(I-U)z=0$ gives $u+Vu=-2ix$. Both sides of this identity lie in $D(T^*)$ and $T^*x=Tx$ because $T$ is symmetric, while $T^*(u+Vu)=iu-iVu$ because $u\in K_+$ and $Vu\in K_-$; applying $T^*$ is therefore legitimate and gives $Tx=-\frac12(u-Vu)$. Pairing the two identities $u+Vu=-2ix$ and $Tx=-\frac12(u-Vu)$ with $u$, and using $\langle Tx,u\rangle=\langle x,T^*u\rangle=-i\langle x,u\rangle$, gives $\|u\|^2+\langle Vu,u\rangle=-\|u\|^2+\langle Vu,u\rangle$, so $\|u\|^2=0$ and $u=0$; then $2ix=0$ gives $x=0$. [A1, step 1.1]

2.2 Distinct unitaries give distinct extensions: if $T_V=T_{V'}$, their Cayley transforms agree, and on $K_+$ this transform equals $-V$ and $-V'$ respectively by step 1.1; hence $V=V'$. [A3, step 1.1]

3.1 The operator $T_V:=i(I+U)(I-U)^{-1}$ with domain $\operatorname{ran}(I-U)$ is self-adjoint by [A3]; its domain is $D(T)\oplus\{u+Vu:u\in K_+\}$, because $(I-U)((T+i)x+u)=2ix+(u+Vu)$ and the sum is direct: if $x\in D(T)$ satisfies $x=u+Vu=(I-U)u$, then $2ix=(I-U)(T+i)x=(I-U)2iu$, so by step 2.1 $(T+i)x=2iu$, and this forces $u=0$ and $x=0$ because $\operatorname{ran}(T+i)$ meets $K_+$ only in $0$. [A1, A3, step 2.1]

4.1 $T_V$ extends $T$: for $x\in D(T)$ one has $(I-U)(T+i)x=2ix$ and hence $T_V(2ix)=i(I+U)(T+i)x=i(2Tx)=2iTx$, that is $T_Vx=Tx$ by linearity. [step 3.1]

4.2 The stated action: for $x\in D(T)$ and $u\in K_+$ the vector $2i(x+u+Vu)$ equals $2ix+u'+Vu'$ with $u':=2iu\in K_+$, so by step 3.1 $T_V(2ix+u'+Vu')=i(2Tx+u'-Vu')=i(2Tx+2iu-2iVu)$, that is $2i(Tx+iu-iVu)$; dividing by the nonzero scalar $2i$ gives the displayed formula $T_V(x+u+Vu)=Tx+iu-iVu$. [step 3.1]

5.1 Every self-adjoint extension $S\supseteq T$ arises this way: by [A2] its unitary $U_S$ extends $C_T$ and maps $K_+$ onto $K_-$. Thus $V:=-U_S|_{K_+}$ is a unitary $K_+\to K_-$ whose construction reproduces $S$, the Cayley transform being recovered as $U$. [A2, A3, step 4.2]

6.1 By steps 4.1, 4.2, 5.1 and 2.2 the map $V\mapsto T_V$ is a bijection from unitaries $K_+\to K_-$ onto the self-adjoint extensions of $T$, with the displayed domain and action. ∎
