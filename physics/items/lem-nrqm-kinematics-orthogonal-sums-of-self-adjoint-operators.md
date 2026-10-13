---
id: lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators
aliases: [nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]
kind: lemma
domain: mathematics
title: "Finite orthogonal sums of self-adjoint operators and of bounded operators"
status: published
origin: session
dependency_level: 0
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-bounded-linear-operator, def-countable-choice, def-hilbert-space, def-hilbert-space-adjoint, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.5, printed pages 79-80 (PDF pages 91-92): orthogonal sums of operators, reducing subspaces and the adjoint of an orthogonal sum; Section 1.4, printed page 45 (PDF page 57): orthogonal sums of Hilbert spaces"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), the choice
hypothesis of the cited definitions of the adjoint. Fix an integer $r\ge1$, let
$H_{1},\dots,H_{r}$ be complex Hilbert spaces with inner products linear in the
first argument ([[def-hilbert-space]]), and let
$$H:=\bigoplus_{l=1}^{r}H_{l},\qquad \bigl\langle (x_{l}),(y_{l})\bigr\rangle:=\sum_{l=1}^{r}\langle x_{l},y_{l}\rangle_{H_{l}},$$
be their orthogonal sum. For each $l$ let $A_{l}:D(A_{l})\subset H_{l}\to H_{l}$
be a densely defined self-adjoint operator
([[def-adjoint-of-a-densely-defined-unbounded-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]) and put
$$D(A):=\Bigl\{(x_{l})\in H:\ x_{l}\in D(A_{l})\ \text{for all }l,\ \sum_{l=1}^{r}\|A_{l}x_{l}\|_{H_{l}}^{2}<\infty\Bigr\},\qquad A(x_{l}):=(A_{l}x_{l}).$$
Then:

(a) $H$ is a complex Hilbert space, $D(A)$ is a dense linear subspace of $H$,
and $A:D(A)\to H$ is a linear operator;

(b) $A$ is symmetric and self-adjoint, and
$\|Ax\|^{2}=\sum_{l=1}^{r}\|A_{l}x_{l}\|_{H_{l}}^{2}$ for every $x\in D(A)$;

(c) if $B_{l}\in\mathcal B(H_{l})$ for every $l$
([[def-bounded-linear-operator]]), then $B:=\bigoplus_{l=1}^{r}B_{l}$, defined
by $B(x_{l}):=(B_{l}x_{l})$ for all $(x_{l})\in H$, is bounded with
$$\|B\|=\max_{1\le l\le r}\|B_{l}\|$$
([[def-operator-norm]]), its adjoint is
$B^{*}=\bigoplus_{l=1}^{r}B_{l}^{*}$ ([[def-hilbert-space-adjoint]]), and $B$
is unitary if every $B_{l}$ is unitary.

No assertion is made about infinite orthogonal sums: only the finite case is
proved here.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; the integer $r\ge1$; complex Hilbert spaces $H_{1},\dots,H_{r}$ with pairings linear in the first argument; densely defined self-adjoint operators $A_{l}$ on $H_{l}$; bounded operators $B_{l}\in\mathcal B(H_{l})$; vectors $x=(x_{l}),y=(y_{l})\in H$; unit vectors $u_{l}\in H_{l}$; scalars $\alpha,\beta\in\mathbb C$.

[F1] **The orthogonal sum.** $\langle(x_{l}),(y_{l})\rangle=\sum_{l}\langle x_{l},y_{l}\rangle_{l}$ is a Hermitian sesquilinear form, linear in the first argument, with $\langle x,x\rangle=\sum_{l}\|x_{l}\|^{2}\ge0$ and equality exactly for $x=0$; the induced norm is $\|x\|^{2}=\sum_{l}\|x_{l}\|^{2}$ ([[def-hilbert-space]]). A complex Hilbert space is complete for its norm.

[F2] **Adjoints.** For a densely defined operator $T$ on a Hilbert space, $D(T^{*})$ consists of those $y$ for which $x\mapsto\langle Tx,y\rangle$ is a bounded linear functional on $D(T)$, and $T^{*}y$ is its Riesz representative; $T$ is symmetric when $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y\in D(T)$, and self-adjoint when $D(T^{*})=D(T)$ and $T^{*}=T$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). In particular a symmetric operator with $D(T^{*})\subseteq D(T)$ is self-adjoint.

[F3] **Bounded operators.** For $B\in\mathcal B(H)$ one has $\|Bx\|\le\|B\|\,\|x\|$, and $\|B\|=\sup_{\|x\|\le1}\|Bx\|$ is attained as a supremum over the unit ball ([[def-bounded-linear-operator]], [[def-operator-norm]]). The Hilbert adjoint $B^{*}$ is characterized by $\langle Bx,y\rangle=\langle x,B^{*}y\rangle$ for all $x,y\in H$; $B$ is unitary exactly when $B^{*}B=BB^{*}=I$ ([[def-hilbert-space-adjoint]]).

## Proof

**Proof technique:** direct; verify the Hilbert-space axioms componentwise, prove density, symmetry and the adjoint computation slot by slot, and compute the norm and adjoint of a bounded orthogonal sum.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Hilbert-space axioms] [F1] gives sesquilinearity, Hermitian symmetry and positive definiteness of the displayed form, since all of these are checked componentwise and the sum over $l=1,\dots,r$ is finite. For completeness let $(x^{(n)})_{n}$ be a Cauchy sequence in $H$, $x^{(n)}=(x^{(n)}_{l})_{l}$. For each $l$ and all $m,n$ one has $\|x^{(n)}_{l}-x^{(m)}_{l}\|_{l}\le \|x^{(n)}-x^{(m)}\|$, so $(x^{(n)}_{l})_{n}$ is Cauchy in $H_{l}$ and converges to some $x_{l}\in H_{l}$; then $\sum_{l}\|x_{l}\|^{2}= \lim_{n}\sum_{l}\|x^{(n)}_{l}\|^{2} \le\limsup_{n}\|x^{(n)}\|^{2}<\infty$ because a Cauchy sequence is bounded, so $x:=(x_{l})\in H$, and $\|x^{(n)}-x\|^{2}=\lim_{m}\sum_{l}\|x^{(n)}_{l}-x^{(m)}_{l}\|^{2} =\lim_{m}\|x^{(n)}-x^{(m)}\|^{2}$, which tends to $0$ as $n\to\infty$ uniformly in $n$ because the sequence is Cauchy; hence $x^{(n)}\to x$. This proves (a) for the space. [F1, algebra]

1.2 [Density and linearity of the domain] The algebraic sum $\bigoplus_{l}D(A_{l})\subseteq D(A)$: each $(x_{l})$ with $x_{l}\in D(A_{l})$ has a finite sum $\sum_{l}\|A_{l}x_{l}\|^{2}$. It is dense in $H$: given $x\in H$ and $\varepsilon>0$, density of $D(A_{l})$ gives for each $l$ a vector $y_{l}\in D(A_{l})$ with $\|x_{l}-y_{l}\|<\varepsilon/\sqrt r$, so $y:=(y_{l})\in\bigoplus_{l}D(A_{l})$ and $\|x-y\|^{2}=\sum_{l}\|x_{l}-y_{l}\|^{2}<\varepsilon^{2}$. The set $D(A)$ is a linear subspace because $\sum_{l}\|\alpha A_{l}x_{l}+\beta A_{l}y_{l}\|^{2}\le 2|\alpha|^{2}\sum_{l}\|A_{l}x_{l}\|^{2} +2|\beta|^{2}\sum_{l}\|A_{l}y_{l}\|^{2}<\infty$ for $x,y\in D(A)$, and $A$ is linear because each $A_{l}$ is. [F1, F2, algebra]

1.3 [Symmetry] Let $x,y\in D(A)$. Then $\langle Ax,y\rangle=\sum_{l}\langle A_{l}x_{l},y_{l}\rangle_{l} =\sum_{l}\langle x_{l},A_{l}y_{l}\rangle_{l}=\langle x,Ay\rangle$, because each $A_{l}$ is self-adjoint and hence symmetric; all sums are finite. [F2, algebra]

1.4 [The adjoint domain] Let $y\in D(A^{*})$ and $z:=A^{*}y$. For fixed $l$ and each $u\in D(A_{l})$ let $x^{(l,u)}\in H$ have $u$ in slot $l$ and $0$ in all other slots; then $x^{(l,u)}\in D(A)$ and $Ax^{(l,u)}$ has $A_{l}u$ in slot $l$. Using [F2] for $A$ and the componentwise pairing, $\langle A_{l}u,y_{l}\rangle_{l} =\langle Ax^{(l,u)},y\rangle=\langle x^{(l,u)},z\rangle =\langle u,z_{l}\rangle_{l}$ for every $u\in D(A_{l})$. Hence $u\mapsto\langle A_{l}u,y_{l}\rangle_{l}$ is bounded on $D(A_{l})$, represented by $z_{l}$; so $y_{l}\in D(A_{l}^{*})=D(A_{l})$ and $A_{l}^{*}y_{l}=z_{l}$, that is $A_{l}y_{l}=z_{l}$. Summing, $\sum_{l}\|A_{l}y_{l}\|^{2}=\sum_{l}\|z_{l}\|^{2}=\|z\|^{2}<\infty$, so $y\in D(A)$ and $Ay=z$. Hence $D(A^{*})\subseteq D(A)$ and $A^{*}y=Ay$. [F1, F2, algebra]

2.1 [Self-adjointness] Step 1.3 gives symmetry; symmetry gives $D(A)\subseteq D(A^{*})$ with $A^{*}$ agreeing with $A$ there ([[def-adjoint-of-a-densely-defined-unbounded-operator]]), and step 1.4 gives the converse inclusion, so $A^{*}=A$ by [F2]. The norm identity is [F1] applied to $Ax=(A_{l}x_{l})$. This proves (b). [step 1.1, step 1.2, step 1.3, step 1.4, F1, F2, algebra]

3.1 [Bounded sums] Let $B_{l}\in\mathcal B(H_{l})$ and put $M:=\max_{1\le l\le r}\|B_{l}\|$, which exists because the index set is finite and nonempty. For $x\in H$, $\|Bx\|^{2}=\sum_{l}\|B_{l}x_{l}\|^{2} \le M^{2}\sum_{l}\|x_{l}\|^{2}=M^{2}\|x\|^{2}$, so $B$ is bounded with $\|B\|\le M$ by [F3]. If $M>0$, choose $l_{0}$ with $\|B_{l_{0}}\|=M$; since $\|B_{l_{0}}\|>0$, $H_{l_{0}}\ne\{0\}$. For each $\eta>0$, the unit-sphere formula for the operator norm in [F3] gives a unit vector $u_{l_{0}}\in H_{l_{0}}$ with $\|B_{l_{0}}u_{l_{0}}\|>M-\eta$. The vector with $u_{l_{0}}$ in slot $l_{0}$ and $0$ elsewhere is a unit vector of $H$, so $\|B\|\ge\|Bx\|=\|B_{l_{0}}u_{l_{0}}\|>M-\eta$; letting $\eta\downarrow0$ gives $\|B\|\ge M$. If $M=0$, the upper bound already gives $\|B\|=0=M$. Thus $\|B\|=\max_l\|B_l\|$. For $B_{l}^{*}$ the adjoint of $B_{l}$, the operator $\bigoplus_{l}B_{l}^{*}$ satisfies $\langle Bx,y\rangle=\sum_{l}\langle B_{l}x_{l},y_{l}\rangle_{l} =\sum_{l}\langle x_{l},B_{l}^{*}y_{l}\rangle_{l} =\langle x,(\bigoplus_{l}B_{l}^{*})y\rangle$ for all $x,y\in H$, so $B^{*}=\bigoplus_{l}B_{l}^{*}$ by [F3]. If every $B_{l}$ is unitary then $B^{*}B=\bigoplus_{l}B_{l}^{*}B_{l}=\bigoplus_{l}I_{H_{l}}=I$ and likewise $BB^{*}=I$, so $B$ is unitary. This proves (c). [F3, step 1.1, algebra] ∎

## Remarks

- **Where the finiteness is used.** Both the norm identity of (b) and the norm formula of (c) are finite-sum statements; for infinite orthogonal sums the domain condition in (b) and the supremum in (c) require separate arguments, and no such statement is made here.
- **Choice.** Only the Axiom of Countable Choice is declared, as the choice hypothesis of the cited definitions of the adjoint; the argument itself handles finitely many slots and makes no further selection.
