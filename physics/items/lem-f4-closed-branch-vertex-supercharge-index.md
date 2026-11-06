---
id: lem-f4-closed-branch-vertex-supercharge-index
kind: lemma
title: F4 Closed Branch Vertex Supercharge Index
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-fredholm-operator-cokernel-and-index
  - cor-finite-dimensional-subspaces-are-closed
  - thm-bounded-inverse-theorem
  - thm-orthogonal-decomposition-by-a-closed-subspace
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-fredholm-operator-cokernel-and-index: mathematical-premise
  cor-finite-dimensional-subspaces-are-closed: mathematical-premise
  thm-bounded-inverse-theorem: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
status: published
origin: session
physical_scope: >-
  Pure operator theorem; physical application requires actual realization data
  and transfer-domain identification.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis (2017 lecture notes)"
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
      locator: "Definition 4.31, printed p. 190, for Fredholm bounded maps between real Banach spaces (the complex convention is stated in the cited local definition supplier); Theorem 2.12, p. 64, for the bounded inverse theorem; Lemma 5.37, p. 238, for orthogonal decompositions; Definition 6.26 and Lemma 6.27(i)–(iv), printed pp. 323–324, for adjoints of densely defined maps between possibly distinct complex Hilbert spaces. Lemma 6.27 states the double-adjoint properties and leaves details to the reader; the needed cross-space argument is supplied locally below."
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Spring 2021 full lecture notes"
      url: https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf
      locator: "Theorem 180, printed pp.88–90."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume Countable Choice and Dependent Choice. Let $H_+$ and $H_-$ be complex
Hilbert spaces, and let $D:\operatorname{Dom}(D)\subset H_+\to H_-$ be densely
defined and closed. Give $X:=\operatorname{Dom}(D)$ the graph inner product
$\langle x,y\rangle_D=\langle x,y\rangle_{H_+}+\langle Dx,Dy\rangle_{H_-}$.
Write $\widetilde D:X\to H_-$ for $x\mapsto Dx$ on this graph Hilbert space.
Throughout this statement, “$D$ is Fredholm” means that $\widetilde D$ has
closed range, finite-dimensional kernel and
finite-dimensional algebraic cokernel $H_-/\operatorname{ran}D$; its index is
$\operatorname{ind}D=\dim\ker D-\dim(H_-/\operatorname{ran}D)$. Assume that $D$ is
Fredholm in this graph-domain sense. For each
Fredholm graph-domain map $A:X_A\to Y_A$ below, use the same convention
$\operatorname{ind}A=\dim\ker A-\dim(Y_A/\operatorname{ran}A)$, in particular
for $L$. Let $E,V$ be
finite-dimensional complex Hilbert spaces, $S:E\to H_-$ and $M:E\to V$
bounded linear maps, and $T:X\to V$ bounded. Put
$$L(x,e)=(Dx+Se,Tx+Me),\qquad \operatorname{Dom}(L)=\operatorname{Dom}(D)\oplus E.$$
The source and target Hilbert spaces for $L$ are
$H_{\mathrm{even}}:=H_+\oplus E$ and $H_{\mathrm{odd}}:=H_-\oplus V$. For
these choices $\operatorname{Dom}(L)$ is dense in $H_{\mathrm{even}}$, since
$\operatorname{Dom}(D)$ is dense in $H_+$ and all of $E$ is included. For
this possibly unbounded $L$, “Fredholm” means that the bounded map from its
graph-norm domain
$$\bigl(\operatorname{Dom}(L),\ \|(x,e)\|_L^2=\|(x,e)\|_{H_{\mathrm{even}}}^2+\|L(x,e)\|_{H_{\mathrm{odd}}}^2\bigr)\longrightarrow H_{\mathrm{odd}}$$
has closed range, finite-dimensional kernel and finite-dimensional algebraic
cokernel. Then $L$ is closed Fredholm and
$$\operatorname{ind}L=\operatorname{ind}D+\dim E-\dim V.$$

Use the orthogonal direct sum $\mathscr H:=H_{\mathrm{even}}\oplus
H_{\mathrm{odd}}$ with grading operator $\Gamma(u,v)=(u,-v)$. For a densely
defined operator $L:H_{\mathrm{even}}\to H_{\mathrm{odd}}$, its cross-Hilbert
adjoint $L^*:\operatorname{Dom}(L^*)\subset H_{\mathrm{odd}}\to
H_{\mathrm{even}}$ is characterized by
$$y\in\operatorname{Dom}(L^*),\ L^*y=z\quad\Longleftrightarrow\quad \langle Lx,y\rangle_{H_{\mathrm{odd}}}=\langle x,z\rangle_{H_{\mathrm{even}}}\quad\text{for every }x\in\operatorname{Dom}(L).$$
The vector $z$, when it exists, is unique because $\operatorname{Dom}(L)$ is
dense in $H_{\mathrm{even}}$.
Define $Q:\operatorname{Dom}(L)\oplus\operatorname{Dom}(L^*)\subset\mathscr H\to
\mathscr H$ by $Q(u,v)=(L^*v,Lu)$. Then $Q$ is odd
($Q\Gamma=-\Gamma Q$ on its domain) and self-adjoint (equality with its
Hilbert-space adjoint, including equality of domains). Its even and odd zero
spaces are respectively $\ker L$ and $\ker L^*$, whose dimension difference
is $\operatorname{ind}L$. For finitely many supplied local sectors, the
corrections $\dim E-\dim V$ add. These are operator assertions only; they
assign no physical meaning to the maps and assert no singular membrane or
regulator exists.

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement. Inner products are
linear in their first variable. A Fredholm operator has closed range and
finite-dimensional kernel and cokernel, and its index is kernel dimension
minus cokernel dimension.

[A1] Countable Choice and Dependent Choice are assumed
([[def-countable-choice]], [[def-dependent-choice]]).

[F1] A closed operator's graph domain is a Hilbert space in its graph norm
([[def-densely-defined-closed-and-closable-operator]]).

[F2] A bounded bijective linear map between Banach spaces has bounded inverse
under Dependent Choice ([[thm-bounded-inverse-theorem]]).

[F3] Under Countable Choice, a closed subspace $M$ of a Hilbert space $H$
satisfies $H=M\oplus M^\perp$
([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F4] For densely defined $A$, the adjoint satisfies
$\langle Ax,y\rangle=\langle x,A^*y\rangle$ on the respective domains
([[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F5] For Fredholm $A$, $\operatorname{ind}A=\dim\ker A-
\dim\operatorname{coker}A$ ([[def-fredholm-operator-cokernel-and-index]]).

[F6] A finite-dimensional normed subspace with a finite ordered basis is
closed ([[cor-finite-dimensional-subspaces-are-closed]]).

[L1] Bühler and Salamon, *Functional Analysis*, Definition 6.26 and Lemma 6.27(i)–(iv), printed pp. 323–324, formulate the adjoint for a densely defined
operator $A:\operatorname{Dom}(A)\subset X\to Y$ between possibly distinct
complex Hilbert spaces and state that a closed $A$ satisfies
$\operatorname{Dom}(A^*)$ dense and $A^{**}=A$. Lemma 6.27 leaves its proof
details to the reader; the cross-space graph argument needed here is given in
step 4.1.

## Proof

**Given:** The hypotheses and objects in the Statement.

1.1 The domain is dense since $\operatorname{Dom}(D)$ is dense. Suppose
$(x_n,e_n)\to(x,e)$ in $H_+\oplus E$ and $L(x_n,e_n)\to(y,z)$ in
$H_-\oplus V$. Boundedness of $S$ gives
$Dx_n=\operatorname{pr}_{H_-}L(x_n,e_n)-Se_n\to y-Se$. Closedness of $D$
then gives $x\in\operatorname{Dom}(D)$ and $Dx=y-Se$. Thus $x_n\to x$ in
the graph norm. Boundedness of $T$ and $M$ gives $Tx_n+Me_n\to Tx+Me=z$.
So $L(x,e)=(y,z)$ and $L$ is closed. On the graph Hilbert space
$X\oplus E$, $L$ is bounded. Its graph norm is equivalent to the product
graph norm: boundedness gives $\|(x,e)\|_L\le C_0(\|x\|_D^2+\|e\|^2)^{1/2}$
for some $C_0$, while $\|e\|\le\|(x,e)\|_L$ and
$\|Dx\|\le\|\operatorname{pr}_{H_-}L(x,e)\|+\|S\|\|e\|\le
(1+\|S\|)\|(x,e)\|_L$ give the reverse bound. Thus the block argument below
computes Fredholmness and index on the graph-norm domain in the Statement.
[given, F1, construct]

2.1 In $X$, let $K=\ker D$, $R=\operatorname{ran}D$, and $X_1=K^\perp$.
By the assumed Fredholmness of $D$ and [F5], $K$ is finite and $R$ is
closed of finite codimension. By [F3],
$X=K\oplus X_1$ and $H_-=R\oplus C_0$, where $C_0=R^\perp$ is finite.
The map $D|_{X_1}:X_1\to R$ is a bounded bijection: its kernel is zero, and
if $Dx=y\in R$, decomposing $x=k+x_1$ gives $Dx_1=y$. Both spaces are
Banach, so [F2] gives a bounded inverse. Let $P_R$ be the orthogonal
projection and $W=\operatorname{span}(P_R S(E))$. A basis of the finite
dimensional $E$ gives a finite spanning list for $W$; deleting dependent
vectors leaves a finite ordered basis (the empty basis if $W=0$). Thus [F6]
makes $W$ closed. By [F3], $R=W\oplus R_1$, with $R_1=R\cap W^\perp$.
Applying the bounded isomorphism $D|_{X_1}$ gives
$X_1=D^{-1}W\oplus D^{-1}R_1$; the first summand is finite-dimensional and
both are closed because the isomorphism and its inverse are bounded.
[given, A1, F1, F2, F3, F5, F6, step 1.1, construct]

3.1 Decompose the source as
$X_f\oplus D^{-1}R_1$, where $X_f=K\oplus D^{-1}W\oplus E$, and the target
as $Y_f\oplus R_1$, where $Y_f=W\oplus C_0\oplus V$. In these coordinates
$L=\begin{pmatrix}A&B\\0&J\end{pmatrix}$, where $J=D|_{D^{-1}R_1}$ is a
bounded isomorphism. The lower-left block vanishes because $D(K)=0$,
$D(D^{-1}W)=W$, and $P_RS(E)\subset W$. The upper-right block is the
bounded map $T|_{D^{-1}R_1}$. The bounded invertible target change
$(y_f,y_1)\mapsto(y_f-BJ^{-1}y_1,y_1)$ conjugates this operator to $A\oplus J$.
The finite-dimensional map $A:X_f\to Y_f$ has closed range and index
$\dim X_f-\dim Y_f$ by rank-nullity, while $J$ has index zero. Therefore
$L$ is Fredholm, and
$\operatorname{ind}L=(\dim K-\dim C_0)+\dim E-\dim V
=\operatorname{ind}D+\dim E-\dim V$; the first equality uses
$H_-/R\cong C_0$. [F2, F3, F5, step 2.1, construct, algebra]

4.1 Write $\Gamma(L)=\{(x,Lx):x\in\operatorname{Dom}(L)\}\subset H_{\mathrm{even}}\oplus H_{\mathrm{odd}}$ and define the unitary $U:H_{\mathrm{odd}}\oplus H_{\mathrm{even}}\to H_{\mathrm{even}}\oplus H_{\mathrm{odd}}$ by $U(y,z)=(-z,y)$. By the cross-space adjoint definition in the Statement, $U\Gamma(L^*)=\Gamma(L)^\perp$: indeed, $(y,L^*y)$ is sent to $(-L^*y,y)$, which is perpendicular to every $(x,Lx)$ by the adjoint identity; conversely, if $(-z,y)\in\Gamma(L)^\perp$, that orthogonality is exactly $\langle Lx,y\rangle=\langle x,z\rangle$ for every $x\in\operatorname{Dom}(L)$, so $y\in\operatorname{Dom}(L^*)$ and $z=L^*y$. If $w\in H_{\mathrm{odd}}$ is perpendicular to $\operatorname{Dom}(L^*)$, then $\langle(0,w),(-L^*y,y)\rangle=0$ for every $y\in\operatorname{Dom}(L^*)$; the identity just proved gives $(0,w)\in\Gamma(L)^{\perp\perp}=\Gamma(L)$, since $L$ is closed and [F3] applies. A graph contains only one output over each input, so $(0,w)=(0,L0)=(0,0)$ and $w=0$. Thus $\operatorname{Dom}(L^*)$ is dense in $H_{\mathrm{odd}}$. Apply the same graph identity to $L^*$, using $U':H_{\mathrm{even}}\oplus H_{\mathrm{odd}}\to H_{\mathrm{odd}}\oplus H_{\mathrm{even}}$, $U'(x,z)=(-z,x)$. Since $\operatorname{Dom}(L^*)$ is dense, $L^{**}$ is defined, and $\Gamma(L^{**})=U'^{-1}\Gamma(L^*)^\perp=U'^{-1}U^{-1}\Gamma(L)=-\Gamma(L)=\Gamma(L)$. Here $\Gamma(L)$ is closed, and the middle equality uses $U'^{-1}U^{-1}(x,y)=(-x,-y)$; a linear subspace equals its negative. Hence $L^{**}=L$ as operators with equal domains. The domain of $Q$ is dense because $\operatorname{Dom}(L)$ is dense by step 1.1 and $\operatorname{Dom}(L^*)$ was just shown dense, so $Q^*$ is defined. For $Q^*(a,b)=(c,d)$, the adjoint identity is $\langle L^*y,a\rangle_{H_{\mathrm{even}}}+\langle Lx,b\rangle_{H_{\mathrm{odd}}}=\langle x,c\rangle_{H_{\mathrm{even}}}+\langle y,d\rangle_{H_{\mathrm{odd}}}$ for every $x\in\operatorname{Dom}(L)$ and $y\in\operatorname{Dom}(L^*)$. Taking $x=0$ and then $y=0$, the cross-space adjoint definition and $L^{**}=L$ give respectively $a\in\operatorname{Dom}(L)$, $d=La$, and $b\in\operatorname{Dom}(L^*)$, $c=L^*b$. Conversely these conditions make the identity hold, so $\operatorname{Dom}(Q^*)=\operatorname{Dom}(L)\oplus\operatorname{Dom}(L^*)$ and $Q^*=Q$. The grading is odd by the block formula. The even and odd zero spaces are $\ker L$ and $\ker L^*$; the latter is $(\operatorname{ran}L)^\perp$, which has dimension $\dim(H_{\mathrm{odd}}/\operatorname{ran}L)$ because $\operatorname{ran}L$ is closed. Their signed dimension is $\operatorname{ind}L$. [A1, F3, F4, F5, L1, step 1.1, step 3.1, construct]

5.1 For finitely many supplied local sectors set $E=\bigoplus_pE_p$ and
$V=\bigoplus_pV_p$. Finite-dimensionality gives
$\dim E-\dim V=\sum_p(\dim E_p-\dim V_p)$, so the index corrections add.
This bookkeeping does not assert an actual singular transfer is finite
dimensional or that a physical Fredholm regulator exists. [step 3.1, algebra] ∎
