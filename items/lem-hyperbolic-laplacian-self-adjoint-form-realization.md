---
id: lem-hyperbolic-laplacian-self-adjoint-form-realization
kind: lemma
title: "The form realization of the congruence-surface Laplacian is self-adjoint"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-weight-zero-maass-form-on-gamma0n
  - def-hyperbolic-laplacian-on-the-upper-half-plane
  - def-countable-choice
  - thm-lax-milgram
  - thm-self-adjointness-range-criterion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1, printed pp. 26–27: the positive weight-zero hyperbolic Laplacian and its automorphic domain. The self-adjoint form construction below is local."
    - title: "Henryk Iwaniec, Spectral Methods of Automorphic Forms, second edition (2002)"
      url: "https://www.scribd.com/document/909808834/Iwaniec-2002-Spectral-Methods-of-Automorphic-Forms"
      locator: "Chapter 4 §4.1, printed pp. 63–64: Green's formula, symmetry, nonnegativity and the self-adjoint Laplace operator convention."
---

## Statement

Assume Countable Choice. Fix $N\\ge1$ and an even unitary character $\\chi$ as
in the definition of a weight-zero Maass form. Let $H=L^2(X_{N,\\chi})$ be the
completion in the hyperbolic $L^2$ norm of the smooth compactly supported
$\\chi$-automorphic functions $D_0$. Let $V$ consist of those elements of $H$
with weak first partial derivatives in local quotient charts and
$$\\|u\\|_V^2=\\|u\\|_H^2+\\int_{\\mathcal F_N}(|u_x|^2+|u_y|^2)\\,dx\\,dy<\\infty.$$
Define $q(u,v)=\\int_{\\mathcal F_N}(u_x\\overline{v_x}+u_y\\overline{v_y})\\,dx\\,dy$.
The operator $A$ associated with $q$ has domain
$$D(A)=\\{u\\in V:\\text{there is }f\\in H\\text{ with }q(u,v)=\\langle f,v\\rangle_H\\text{ for every }v\\in V\\},\\qquad Au=f.$$
Then $V$ is a Hilbert space, $A$ is a nonnegative self-adjoint operator on $H$,
and $A$ extends the positive-sign differential expression
$-y^2(\\partial_x^2+\\partial_y^2)$ on $D_0$.

## Statement references

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-hyperbolic-laplacian-on-the-upper-half-plane]]

[[def-countable-choice]]

[[thm-lax-milgram]]

[[thm-self-adjointness-range-criterion]]

## Facts & Assumptions

**Given:** Countable Choice; the Hilbert space $H$, the form domain $V$, and
the sesquilinear form $a(u,v)=\\langle u,v\\rangle_H+q(u,v)$.

[F1] Countable Choice, bounded coercivity, and completeness of the form domain
give a unique $S f\\in V$ with $a(Sf,v)=\\langle f,v\\rangle_H$ for all $v\\in V$.
([[def-countable-choice]], [[thm-lax-milgram]])

[F2] If a densely defined symmetric operator $T$ satisfies
$\\operatorname{ran}(T-i)=\\operatorname{ran}(T+i)=H$, then $T$ is self-adjoint.
([[thm-self-adjointness-range-criterion]])

[F3] On $C^\\infty(\\mathbb H)$ the positive-sign differential expression is
$-y^2(\\partial_x^2+\\partial_y^2)$.
([[def-hyperbolic-laplacian-on-the-upper-half-plane]])

## Proof

**Proof technique:** direct.

**Given:** The data and hypotheses of the statement.

1.1 The form $a$ is the inner product defining $\\|\\cdot\\|_V$, so it is
bounded and coercive with constants $1,1$. The domain $V$ is complete: if
$u_n$ is Cauchy in $V$, its $H$-limit is some $u$ and its weak derivatives
have $L^2$ limits $g_x,g_y$; passing to the limit in the weak-derivative test
identities on every compact chart shows $g_x=u_x$ and $g_y=u_y$. Thus $u\\in V$
and $u_n\\to u$ in $V$. For $f\\in H$, the functional $v\\mapsto\\langle
f,v\\rangle_H$ is bounded on $V$. Apply [F1] to obtain a unique $Sf\\in V$
with $a(Sf,v)=\\langle f,v\\rangle_H$. [F1, given, construct]

2.1 Let $J:V\\to H$ be inclusion and $R=JS:H\\to H$. Testing the defining
equation for $Sf$ at $Sg$, then using the Hermitian symmetry of $a$, gives
$\\langle f,Rg\\rangle_H=a(Sf,Sg)=\\langle Rf,g\\rangle_H$; hence $R$ is
self-adjoint. Also $\\langle f,Rf\\rangle_H=a(Sf,Sf)\\ge0$. If $Rf=0$, then
$Sf=0$ and $\\langle f,Jv\\rangle_H=0$ for every $v\\in V$; since $J(V)$
contains the dense set $D_0$, this forces $f=0$. Thus $R$ is positive and
injective, and $\\operatorname{ran}R$ is dense because
$\\operatorname{ran}(R)^\\perp=\\ker(R^*)=\\ker R=\\{0\\}$. [step 1.1, given, algebra]

3.1 Define $T=R^{-1}$ on $D(T)=\\operatorname{ran}R$. This domain is dense by
step 2.1, and $T$ is symmetric because $R$ is self-adjoint. For either sign,
$\\|(I\\pm iR)x\\|_H^2=\\|x\\|_H^2+\\|Rx\\|_H^2\\ge\\|x\\|_H^2$; hence
$I\\pm iR$ has closed range. A vector orthogonal to its range lies in
$\\ker(I\\mp iR)$, and the same norm identity makes that kernel zero. Thus
$I\\pm iR$ is onto. Given $f\\in H$, choose $g$ with
$(I\\pm iR)g=f$; then $u=Rg\\in D(T)$ and
$(T\\pm i)u=(I\\pm iR)g=f$. Therefore both ranges in [F2] equal $H$, so $T$
is self-adjoint. [F2, step 2.1, algebra, choose]

4.1 The real shift $A=T-I$ is self-adjoint on $D(T)$: from the definition of
the adjoint, $y\\in D((T-I)^*)$ exactly when $y\\in D(T^*)$, and
$(T-I)^*y=T^*y-y=Ty-y$. For $u=Rf\\in D(A)$, the defining equation for $Sf$
gives $q(u,v)=\\langle f-u,v\\rangle_H=\\langle Au,v\\rangle_H$ for every
$v\\in V$; hence this is precisely the operator associated with $q$.
Moreover $\\langle Au,u\\rangle_H=q(u,u)\\ge0$. [step 3.1, given, algebra]

5.1 If $\\varphi\\in D_0$, integration by parts in the quotient has no boundary
term because $\\varphi$ is compactly supported. Thus
$q(\\varphi,v)=\\langle-y^2(\\varphi_{xx}+\\varphi_{yy}),v\\rangle_H$ for
$v\\in D_0$, and density extends the identity to $v\\in V$. Hence
$\\varphi\\in D(A)$ and $A\\varphi=-y^2(\\varphi_{xx}+\\varphi_{yy})$ by [F3].
[F3, step 4.1, algebra] ∎
