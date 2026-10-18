---
id: ex-qc-tqc-fibonacci-data
kind: example
title: Fibonacci fusion data and chiral convention
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-qc-tqc-unitary-fusion-category, def-qc-tqc-fusion-multiplicity-space, def-qc-tqc-fusion-tree-basis, lem-qc-tqc-fusion-tree-dimension, def-qc-tqc-f-symbol, def-qc-tqc-r-symbol, def-fusion-and-multifusion-category, def-monoidal-category, def-braiding]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§IV.B.c, PDF pp. 53–57: Fibonacci fusion rule, F-matrix, R phases, and basis conventions."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.5, PDF pp. 4–16: unitary structure, fusion-tree bases, and F-matrices."
---

## Example

Take the skeletal complex-linear category whose simple labels are
$\mathbf1,\tau$ and whose objects are finite direct sums of them, including
the empty direct sum $0$. For objects
$A=\bigoplus_s s^{\oplus m_s}$ and $B=\bigoplus_s s^{\oplus n_s}$, set
$\operatorname{Hom}(A,B)=\bigoplus_s\operatorname{Mat}_{n_s\times m_s}(\mathbb C)$;
composition is block-matrix multiplication, dagger is conjugate transpose,
and the norm is the maximum of the operator norms of its blocks. Thus direct
sums are orthogonal. Define tensor product on simple labels by the fusion rules
$\mathbf1\otimes a=a\otimes\mathbf1=a$ and $\tau\otimes\tau=\mathbf1\oplus\tau$,
and extend it distributively to direct sums. For each allowed simple fusion
channel, use the standard unit-vector inclusion as the orthonormal basis of
its one-dimensional multiplicity space. On simple-label blocks, tensor a pair
of morphism matrices by their Kronecker product on multiplicity coordinates
and by the identity on each simple fusion channel; extend over direct sums.
This defines a bifunctor compatible with dagger. Use the strict unit gauge:
every F or R coordinate involving $\mathbf1$ is the identity. Put

$$\phi=\frac{1+\sqrt5}{2},\qquad u=\phi^{-1},\qquad v=\phi^{-1/2}.$$

The only nontrivial associator blocks are

$$F^{\tau\tau\tau}_{\mathbf1}=[1],\qquad F^{\tau\tau\tau}_{\tau}=\begin{pmatrix}u&v\\v&-u\end{pmatrix},$$

in the intermediate-channel order $(\mathbf1,\tau)$. In the pullback R
convention of [[def-qc-tqc-r-symbol]], the exchange blocks are

$$R^{\tau\tau}_{\mathbf1}=x=e^{-4\pi i/5},\qquad R^{\tau\tau}_{\tau}=y=e^{3\pi i/5}.$$

Because these are pullback symbols, define the object-level braiding
$c_{\tau,\tau}$ on the $\mathbf1$ and $\tau$ summands by $x^{-1}$ and
$y^{-1}$, respectively. Every braiding with a unit input is the strict
identity. These fixed chiral data define the Fibonacci unitary braided fusion
category in this gauge; the verification checks every nontrivial pentagon and
hexagon sector.

## Facts & Assumptions

**Given:** the simple labels, fusion rules, strict unit gauge, and F/R blocks
in the Example.

[F1] [[def-qc-tqc-unitary-fusion-category]]: the dagger is conjugate-linear,
tensor-compatible, and the associator and unit constraints must be unitary.

[F2] [[def-qc-tqc-fusion-multiplicity-space]]: the multiplicity at a vertex
is $N_{ab}^c=\dim V_{ab}^c$.

[F3] [[lem-qc-tqc-fusion-tree-dimension]]: fusion-space dimensions are the
finite sums/products of the vertex multiplicities over admissible internal
labels.

[F4] [[def-qc-tqc-f-symbol]]: F is the matrix between left and right
fusion-tree bases induced by the associator.

[F5] [[def-qc-tqc-r-symbol]]: R is the channel-exchange matrix induced by the
braiding in the specified pullback convention.

[F6] [[def-monoidal-category]]: associators satisfy the pentagon axiom and the
unitors satisfy the triangle axiom.

[F7] [[def-braiding]]: a braiding is a natural isomorphism satisfying both
hexagon identities.

## Verification
**Given:** the fusion, F, and R data in the Example; prove that they define a
unitary braided fusion category.

1.1 The golden ratio satisfies $\phi^2=\phi+1$, so $u^2+u=1$ and $v^2=u$; therefore $u^2+v^2=1$. The real symmetric matrix $F=\begin{pmatrix}u&v\\v&-u\end{pmatrix}$ has $F^\dagger F=F^2=I$, since its off-diagonal entries in $F^2$ cancel and each diagonal entry is $u^2+v^2=1$. The scalar block $[1]$ is unitary, and $|x|=|y|=1$ because $x,y$ are complex exponentials. Thus every specified F/R block is unitary. [F1, F4, F5, given, algebra]

1.2 The fusion recurrence [F3] gives $m_2(\mathbf1)=m_2(\tau)=1$, $m_3(\mathbf1)=1$, and $m_3(\tau)=2$. One more recurrence gives $m_4(\mathbf1)=2$ and $m_4(\tau)=3$. These are the dimensions of the four-$\tau$ total-$\mathbf1$ and total-$\tau$ tree spaces, so the pentagon matrices below have sizes two and three. [F2, F3, given, algebra]

2.1 If one of four pentagon inputs is $\mathbf1$, the strict unit gauge makes each unit map and each F block involving that unit the identity; substituting them into [F6] leaves the same remaining associator on both routes. For four $\tau$ inputs with total $\mathbf1$, the five route matrices are $A_1=A_3=F$, $A_2=A_4=A_5=I$, where $F=F^{\tau\tau\tau}_{\tau}$ and $F^2=I$ by step 1.1. Hence $A_3A_2A_1=F^2=I=A_5A_4$. [F4, F6, step 1.1, algebra]

2.2 If one of the three hexagon inputs is $\mathbf1$, the strict unit gauge reduces each route to the same remaining exchange map. For three $\tau$ inputs with total $\mathbf1$, the fusion space is one-dimensional by step 1.2, and both hexagons reduce to $x=y^2$. Indeed $y^2=e^{6\pi i/5}=e^{-4\pi i/5}=x$. [F2, F3, F5, F7, step 1.2, algebra]

2.3 The unit object is self-dual. The $\mathbf1$ summand of $\tau\otimes\tau$ gives an isometric inclusion $i:\mathbf1\to\tau\otimes\tau$; set $\operatorname{coev}=\sqrt\phi\,i$ and $\operatorname{ev}=\sqrt\phi\,i^\dagger$. In either zig-zag composite for $\tau$, the only intermediate channel is $\mathbf1$, so its scalar is $\sqrt\phi\sqrt\phi\,F^{\tau\tau\tau}_{\tau}[\mathbf1,\mathbf1] =\phi u=1$. The opposite zig-zag uses $F^{-1}=F$ from step 1.1 and has the same coefficient. Hence $\tau$ is self-dual; duality extends to finite direct sums, so the category is rigid. [F1, F2, F4, step 1.1, algebra]

3.1 For four $\tau$ inputs with total $\tau$, in lexicographic internal-label order the five matrices are $$A_1=A_3=\begin{pmatrix}u&0&v\\0&1&0\\v&0&-u\end{pmatrix},\quad A_2=A_4=\begin{pmatrix}1&0&0\\0&u&v\\0&v&-u\end{pmatrix},\quad A_5=\begin{pmatrix}0&1&0\\u&0&v\\v&0&-u\end{pmatrix}.$$ Multiplying in the indicated orders and using $u^2+u=1$ and $v^2=u$ gives $$A_5A_4=\begin{pmatrix}0&u&v\\u&u&-uv\\v&-uv&u^2\end{pmatrix} =A_3A_2A_1.$$ Together with the unit-input and total-$\mathbf1$ cases of step 2.1, this checks every pentagon sector. [F3, F4, F6, step 1.1, step 2.1, algebra]

3.2 For three $\tau$ inputs with total $\tau$, put $D=\operatorname{diag}(x,y)$, $E=\operatorname{diag}(1,y)$, and $B_2=FDF$. In the left-tree bases, $D$ is the first-pair exchange, $B_2$ is the last-pair exchange after recoupling, and $E$ is the exchange of $\tau$ with the composite $\tau\otimes\tau=\mathbf1\oplus\tau$. The two root hexagons [F7] in these bases are exactly $B_2D=EF$ and $DB_2=FE$. Write $B_2=\begin{pmatrix}u^2x+v^2y&uv(x-y)\\uv(x-y)&v^2x+u^2y\end{pmatrix}$; entrywise, the two equations reduce to $$x(u^2x+uy)=u,\quad ux(x-y)=y,\quad uy(x-y)=1,\quad y(ux+u^2y)=-uy.$$ The phase $y=e^{3\pi i/5}$ satisfies $y^2+uy+1=0$ because $2\cos(3\pi/5)=-u$, and $x=y^2$. These identities give $y^3=u(1-y)$ and $y^4=y+u$: the first follows by multiplying $y^2=-uy-1$ by $y$ and using $u^2+u=1$, and the second follows by multiplying $y^3=u(1-y)$ by $y$. Consequently $u y^4+y^3=u^2+u=1$, $u y^2(y^2-y)=u(y^4-y^3)=u(1+u)y=y$, $u y(y^2-y)=u(y^3-y^2)=u(1+u)=1$, and $u y^2+u^2y=u(y^2+uy)=-u$. These are precisely the four displayed entry conditions. Thus both hexagons hold in the total-$\tau$ sector; with step 2.2, all hexagon sectors are checked. [F1, F5, F7, step 1.1, step 1.2, step 2.2, algebra]

4.1 The specified simple labels, matrix Hom spaces, and fusion rules give a finite semisimple complex category with simple unit. Matrix composition and conjugate-transpose dagger make each endomorphism algebra a finite direct sum of matrix $C^*$-algebras, and the stated maximum operator norm is a $C^*$ norm. The distributive tensor action on multiplicity matrices is a bifunctor and preserves dagger. The associator and braiding extend blockwise from the stated simple-object matrices; naturality follows because a morphism between simple labels is zero or a scalar identity, and the extensions act identically on copy indices. Step 1.1 gives unitary structural matrices, steps 2.1 and 3.1 verify the associator pentagon sectors, steps 2.2 and 3.2 verify the two nontrivial braiding hexagon sectors, and step 2.3 supplies duals. Thus these data define a unitary braided fusion category in the stated gauge. All calculations are finite and use no choice principle. [F1, F2, F4, F6, F7, step 1.1, step 2.1, step 3.1, step 2.2, step 3.2, step 2.3] ∎
