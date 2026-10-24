---
id: lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents
kind: lemma
title: "The identity of a finite-dimensional algebra decomposes into primitive central idempotents"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-algebra-over-a-commutative-ring, thm-dimension-of-a-linear-subspace, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, printed pp. 9-10: the orthogonal central-idempotent bookkeeping used for the block decomposition (the dimension-descent argument is proved locally, choice-free, and is not quoted from the source)"
---

## Statement

Let $F$ be a field and $A$ a finite-dimensional unital $F$-algebra with centre
$Z(A):=\{z\in A:za=az\text{ for all }a\in A\}$
([[def-algebra-over-a-commutative-ring]]). Then $Z(A)$ is a finite-dimensional
commutative $F$-algebra, and the identity $1\in Z(A)$ admits a decomposition
$$1=e_1+\cdots+e_k$$
into pairwise orthogonal primitive central idempotents of $A$: each $e_i$ is a
nonzero idempotent of $Z(A)$ that is not the sum of two nonzero orthogonal
idempotents of $Z(A)$. No semisimplicity of $A$ is assumed and no choice
principle is used.

## Facts & Assumptions

**Given:** A field $F$, a finite-dimensional unital $F$-algebra $A$, and the centre $C:=Z(A)=\{z\in A:za=az\text{ for all }a\in A\}$.

[F1] $F$-algebra conventions: a unital $F$-algebra $A$ is a unital ring together with a unital ring homomorphism $\eta:F\to A$ whose image is central, and the induced scalar action $ra:=\eta(r)a$ makes $A$ an $F$-module with multiplication $A\times A\to A$ bilinear ([[def-algebra-over-a-commutative-ring]]).

[F2] Subspace dimension: if $V$ is a finite-dimensional vector space over $F$ with $\dim_FV=n$ and $U$ a linear subspace of $V$, then $U$ is finite-dimensional with $\dim_FU\le n$, and $\dim_FU=n$ if and only if $U=V$ ([[thm-dimension-of-a-linear-subspace]]).

[F3] Well-ordering principle: every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 If $A=0$, then $C=Z(A)=\{0\}$ and the empty family ($k=0$) satisfies $1=e_1+\cdots+e_k$ with the stated conditions vacuously, so assume $A\ne0$; then in $A$ one has $1\ne0$ and hence $1\ne0$ in $C$. [given, F1]

1.2 The centre $C$ is a commutative unital $F$-subalgebra of $A$ and, in particular, a linear subspace of the $F$-vector space $A$: $1\in C$; if $x,y\in C$, $\alpha\in F$ and $a\in A$, then $(x+y)a=xa+ya=ax+ay=a(x+y)$, $(\alpha x)a=\alpha(xa)=\alpha(ax)=a(\alpha x)$ and $(xy)a=x(ya)=x(ay)=(xa)y=(ax)y=a(xy)$, while $0\in C$; and distinct elements of $C$ commute with each other because each commutes with all of $A$. [given, F1, algebra]

1.3 Suppose, for contradiction, that the following general claim fails: every finite-dimensional commutative unital $F$-algebra $D$ with $1_D\ne0$ and $\dim_FD\ge1$ admits a decomposition of $1_D$ into pairwise orthogonal idempotents of $D$ that are primitive in $D$. Let $S\subseteq\mathbb N$ be the nonempty set of $F$-dimensions of such counterexamples; by [F3] let $d\in S$ be least and fix a counterexample $D$ with $\dim_FD=d$. [given, F3]

2.1 The centre $C$ is finite-dimensional over $F$ with $\dim_FC\le\dim_FA$, by [F2] applied to the linear subspace $C$ of the finite-dimensional space $A$. [step 1.2, F2]

2.2 Since $D$ is a counterexample, $1_D$ is not primitive in $D$: otherwise $k=1$, $e_1=1_D$ would be the required decomposition. Hence there are nonzero orthogonal idempotents $u,v\in D$ with $1_D=u+v$. [step 1.3, given]

3.1 The set $D_u:=uD=\{ux:x\in D\}$ is a linear subspace of $D$ and, with the inherited operations, a commutative unital $F$-algebra with identity $u$: it is closed since $ux+uy=u(x+y)$, $\alpha(ux)=u(\alpha x)$ and $(ux)(uy)=u^2xy=u(xy)$ for $x,y\in D$, $\alpha\in F$, while $u\cdot ux=ux$; and $u\ne0$. The same holds for $D_v:=vD$ with identity $v$. [step 2.2, F1, algebra]

4.1 One has $D_u\ne D$ because $v\notin D_u$: if $v=ux$ then $0=uv=u^2x=ux=v\ne0$, a contradiction using $uv=0$ and $u^2=u$. Hence by [F2], applied to the subspace $D_u$ of $D$ with $\dim_FD=d$, one has $\dim_FD_u<d$; the same argument gives $\dim_FD_v<d$. [step 3.1, step 1.3, F2, algebra]

5.1 By the minimality of $d$ in $S$, no counterexample has dimension $<d$, and since $\dim_FD_u<d$ and $\dim_FD_v<d$ with $1_{D_u}=u\ne0$, $1_{D_v}=v\ne0$, the general claim holds for $D_u$ and for $D_v$: there are pairwise orthogonal idempotents $f_1,\dots,f_a$ of $D_u$ primitive in $D_u$ with $u=f_1+\cdots+f_a$, and pairwise orthogonal idempotents $g_1,\dots,g_b$ of $D_v$ primitive in $D_v$ with $v=g_1+\cdots+g_b$. [step 4.1, step 1.3, given]

6.1 The combined family $f_1,\dots,f_a,g_1,\dots,g_b$ is a decomposition of $1_D$ into pairwise orthogonal idempotents of $D$ that are primitive in $D$: the elements lie in $D_u\cup D_v\subseteq D$; distinct $f$'s are orthogonal and distinct $g$'s are orthogonal by step 5.1; $f_ig_j=(uf_i)(vg_j)=uvf_ig_j=0$; and if $f_i=p+q$ with $p,q$ nonzero orthogonal idempotents of $D$, then $p=f_ip=uf_ip=up\in D_u$ and likewise $q=uq\in D_u$, contradicting primitivity of $f_i$ in $D_u$ (and symmetrically for $g_j$ in $D_v$). [step 5.1, step 3.1, algebra]

7.1 Step 6.1 contradicts the choice of $D$ as a counterexample, so no counterexample exists and the general claim of step 1.3 holds: every finite-dimensional commutative unital $F$-algebra $D$ with $1_D\ne0$ and $\dim_FD\ge1$ decomposes its identity into pairwise orthogonal primitive idempotents. [step 6.1, step 1.3]

8.1 Apply step 7.1 to $D=C=Z(A)$: by steps 1.1 and 1.2, $C$ is a commutative unital $F$-algebra with $1\ne0$ and $\dim_FC\ge1$; by step 2.1 it is finite-dimensional. This produces $1=e_1+\cdots+e_k$ with the $e_i$ pairwise orthogonal idempotents of $C=Z(A)$ primitive in $C$; idempotents of $Z(A)$ are exactly the central idempotents of $A$, and primitive in $C$ says precisely that $e_i$ is not the sum of two nonzero orthogonal idempotents of $Z(A)$. Since no semisimplicity was used and the only invoked principles are the choice-free subspace theorem [F2], the choice-free well-ordering principle [F3] and finite selections, the proof is complete. [step 7.1, step 2.1, step 1.1] ∎
