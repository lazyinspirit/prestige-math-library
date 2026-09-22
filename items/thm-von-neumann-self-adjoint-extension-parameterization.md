---
id: thm-von-neumann-self-adjoint-extension-parameterization
kind: theorem
title: "Von Neumann parameterization of self-adjoint extensions"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-deficiency-subspaces-and-deficiency-indices, thm-cayley-correspondence, def-cayley-transform-of-a-self-adjoint-operator, def-densely-defined-closed-and-closable-operator, def-orthogonality-and-orthogonal-complement, thm-cauchy-schwarz-in-an-inner-product-space, def-axiom-of-choice, def-countable-choice]
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

Assume the Axiom of Choice. Let $T$ be a densely defined closed symmetric operator on a complex Hilbert space H, with first-variable-linear inner product,
with deficiency subspaces $K_\pm$ ([[def-deficiency-subspaces-and-deficiency-indices]]),
and let $V:K_+\to K_-$ be a unitary operator. Then
$$D(T_V)=D(T)\oplus\{u+Vu:u\in K_+\},\qquad T_V(x+u+Vu)=Tx+iu-iVu$$
defines a self-adjoint extension $T_V$ of $T$; the sum is direct and $D(T_V)$
is dense. The map $V\mapsto T_V$ is a bijection from the set of unitary
operators $K_+\to K_-$ onto the set of self-adjoint extensions of $T$.

## Facts & Assumptions

[A1] For the given closed densely defined symmetric T, $K_+=\ker(T^*-i)$ and $K_-=\ker(T^*+i)$ are closed, and $H=\operatorname{ran}(T+i)\oplus K_+=\operatorname{ran}(T-i)\oplus K_-$ orthogonally. The linear map $C_T((T+i)x)=(T-i)x$ is an isometric isomorphism between these ranges, and $(I-C_T)(T+i)x=2ix$. Full AC licenses this deficiency-space interface, including its Hilbert-dimension convention. [[def-deficiency-subspaces-and-deficiency-indices]]

[A2] Under Countable Choice the Cayley correspondence sends a unitary U with $\ker(I-U)=\{0\}$ to the self-adjoint operator $S(I-U)y=i(I+U)y$, with domain $\operatorname{ran}(I-U)$, and recovers $C_S=U$. For self-adjoint S its Cayley transform satisfies $C_S(S+i)x=(S-i)x$ on D(S). [[thm-cayley-correspondence]] [[def-cayley-transform-of-a-self-adjoint-operator]]

[A3] D(T) is norm dense in H. Orthogonal decompositions have zero intersection and their squared norms add. A vector orthogonal to a dense subspace is zero: continuity of pairings follows from Cauchy-Schwarz. [[def-densely-defined-closed-and-closable-operator]] [[def-orthogonality-and-orthogonal-complement]] [[thm-cauchy-schwarz-in-an-inner-product-space]]

[A4] Full AC is assumed to use [A1]. It implies the Countable Choice required by [A2] directly: AC supplies a choice function for the range family of any given sequence of nonempty sets, and composing that choice function with the sequence gives the required indexed choices. No additional family of choices is made in the construction from the supplied unitary V. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Proof technique:** direct.

**Given:** T as in the statement and a unitary $V:K_+\to K_-$. Put $M_+=\operatorname{ran}(T+i)$ and $M_-=\operatorname{ran}(T-i)$.

1.1 Define $U(m+u)=C_Tm-Vu$ for $m\in M_+$ and $u\in K_+$. The orthogonal decomposition in [A1] makes this a uniquely defined linear map on H. Its two output terms lie in the orthogonal subspaces $M_-$ and $K_-$, so $\|U(m+u)\|^2=\|C_Tm\|^2+\|Vu\|^2=\|m\|^2+\|u\|^2=\|m+u\|^2$. Since both component maps are onto their corresponding summands, U is onto H. Thus U is unitary and extends C_T; the minus sign on K_+ is necessary for the displayed plus sign in u+Vu. [A1, A3, A4]

2.1 For $x\in D(T)$, $(I-U)(T+i)x=2ix$, hence $\operatorname{ran}(I-U)$ contains D(T) and is dense. If Uz=z, then for every y in H, $\langle z,(I-U)y\rangle=\langle z,y\rangle-\langle Uz,Uy\rangle=0$, since a unitary preserves inner products. Consequently z is orthogonal to the dense D(T), so z=0 by [A3]. This proves $\ker(I-U)=\{0\}$. [A1, A3, step 1.1]

3.1 Apply [A2], licensed by [A4], to get the self-adjoint operator $S(I-U)y=i(I+U)y$ on $\operatorname{ran}(I-U)$, with $C_S=U$. Because $(I-U)((T+i)x+u)=2ix+u+Vu$, that domain equals $D(T)+\{u+Vu:u\in K_+\}$; scalar multiplication by 2i maps D(T) onto itself. To prove the sum direct, suppose $x=u+Vu\in D(T)$. Then $(I-U)(T+i)x=2ix=(I-U)(2iu)$, and injectivity from step 2.1 gives $(T+i)x=2iu$. The two sides lie in M_+ and K_+, whose intersection is zero. Hence u=0 and x=0. Also u+Vu=(I-U)u shows the parametrization of the second summand is injective. Thus every vector has a unique representation x+u+Vu, and the domain contains the dense D(T). [A1, A2, A3, A4, step 1.1, step 2.1]

4.1 On D(T), $S(2ix)=i(I+U)(T+i)x=2iTx$, so Sx=Tx. On the second summand, $S(u+Vu)=S(I-U)u=i(I+U)u=iu-iVu$. Linearity yields $S(x+u+Vu)=Tx+iu-iVu$. Thus S is exactly the well-defined operator T_V in the statement and is a self-adjoint extension of T. [A1, step 1.1, step 3.1]

5.1 Let R be any self-adjoint extension of T and put W=C_R. For x in D(T), $(R+i)x=(T+i)x$, so $W(T+i)x=(R-i)x=(T-i)x$. Thus W agrees with C_T on M_+ and maps M_+ onto M_-. For u in K_+ and m in M_+, $\langle Wu,Wm\rangle=\langle u,m\rangle=0$, so Wu belongs to K_-. Conversely, for v in K_-, take the unique y with Wy=v. For every m in M_+, $\langle y,m\rangle=\langle v,Wm\rangle=0$, hence y belongs to K_+. This proves W(K_+)=K_-, without treating W* as the Cayley transform of R. Consequently V=-W restricted to K_+ is unitary from K_+ onto K_-, and the construction of step 1.1 returns U=W. The inverse correspondence [A2] then gives T_V=R. [A1, A2, A3, step 1.1, step 4.1]

6.1 If T_V=T_{V'}, their Cayley transforms agree by [A2]. Step 3.1 identifies these transforms with the constructed U and U', whose restrictions to K_+ are -V and -V'. Hence V=V'. Along with steps 4.1 and 5.1, this proves the bijection. This includes empty parameter sets: if no such unitary exists, step 5.1 rules out every self-adjoint extension. If K_+=K_-={0}, the unique unitary of the zero spaces gives D(T_V)=D(T) and T_V=T, so T is already self-adjoint. If H={0}, every displayed map is its unique zero-space map and the same conclusion holds directly. No finite-dimensional or separability assumption is used. AC is used only through [A4]. [A1, A2, A4, step 1.1, step 3.1, step 4.1, step 5.1] ∎
