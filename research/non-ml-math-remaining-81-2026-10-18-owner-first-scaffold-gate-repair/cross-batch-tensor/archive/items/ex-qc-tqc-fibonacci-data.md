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

1.1 The positive real choices give $u^2+u=1$, $v^2=u$ and $u^2+v^2=1$, so the real symmetric block $F$ satisfies $F^\dagger F=F^2=I$. All scalar unit-gauge blocks are unitary. The phases $x,y$ have modulus one and $x=y^2$ exactly. To fix the root and sign without a numerical cosine approximation, $y^5=-1$ and $y\ne-1$ give $y^4-y^3+y^2-y+1=0$. Dividing by $y^2$ shows that $z=y+y^{-1}$ satisfies $z^2-z-1=0$. Since $z=2\cos(3\pi/5)<0$, it is $(1-\sqrt5)/2=-u$. Thus $y^2+uy+1=0$, with this chosen root, not its conjugate. The object-level braiding has eigenvalues $x^{-1},y^{-1}$, so inverse-precomposition gives exactly the stated pullback eigenvalues $x,y$. [F1, F4, F5, given, algebra]

1.2 Formal fusion-tree labels can be counted before assuming coherence: for a fixed binary tree, enumerate each vertex's allowed outgoing simple label by the displayed fusion rules, and keep its unique channel coordinate. The recursion is $m_{n+1}(\mathbf1)=m_n(\tau)$ and $m_{n+1}(\tau)=m_n(\mathbf1)+m_n(\tau)$, with $m_1(\mathbf1)=0,m_1(\tau)=1$. Hence $m_3(\mathbf1)=1,m_3(\tau)=2$ and $m_4(\mathbf1)=2,m_4(\tau)=3$. These are direct-sum coordinate counts; once the category axioms are checked, they are exactly the orthonormal tree counts of [F3]. Zero-dimensional blocks are the unique empty maps. [F2, F3, given, algebra]

2.1 **Pentagon types and unit cases.** For four ordered inputs $a,b,c,d$, name the five trees $T_0=(((ab)c)d)$, $T_1=((a(bc))d)$, $T_2=(a((bc)d))$, $T_3=(a(b(cd)))$, $T_4=((ab)(cd))$. Their two nonroot edge-label coordinates are respectively $(ab,abc)$, $(bc,abc)$, $(bc,bcd)$, $(cd,bcd)$ and $(ab,cd)$, ordered lexicographically with $\mathbf1<\tau$. Let $A_1:T_0\to T_1$, $A_2:T_1\to T_2$, $A_3:T_2\to T_3$, $A_4:T_0\to T_4$ and $A_5:T_4\to T_3$ denote the inverse-precomposition matrices of the corresponding associators. Thus the typed pentagon is $A_3A_2A_1=A_5A_4$. If an input is the unit, deleting it canonically identifies the endpoint tree-coordinate spaces. Every local move with that unit is identity; each route then contains the same associator on the remaining three inputs, or only identities if fewer than three nonunit inputs remain. Thus every unit-input case holds, including empty blocks. For four $\tau$ inputs with total $\mathbf1$, the bases of $T_0,T_1,T_2,T_3$ are $(\mathbf1,\tau),(\tau,\tau)$, and that of $T_4$ is $(\mathbf1,\mathbf1),(\tau,\tau)$. Fixing the unchanged subtree in each move gives $A_1=A_3=F$ and $A_2=A_4=A_5=I$: the latter blocks use either a unit input or the scalar $F^{\tau\tau\tau}_{\mathbf1}=1$. Therefore the two routes are $F^2=I$ and $I$. [F4, F6, step 1.1, step 1.2, algebra]

2.2 **Hexagon unit and total-unit cases.** In either hexagon, an input unit gives the canonical unit identification for its exchanges and every associator involving it. Deleting that strand reduces the two routes to the same exchange of the other two inputs. For three $\tau$ inputs and total $\mathbf1$, the only intermediate charge in either tree is $\tau$, by step 1.2, so the associator is $[1]$. Exchanging $\tau$ with the fused pair has coordinate $x$, whereas the two successive simple exchanges have product $y^2$. Both typed root hexagons therefore say $x=y^2$, proved in step 1.1. [F2, F3, F5, F7, step 1.1, step 1.2, algebra]

2.3 The unit object is self-dual. The $\mathbf1$ summand of $\tau\otimes\tau$ gives an isometric inclusion $i:\mathbf1\to\tau\otimes\tau$; set $\operatorname{coev}=\sqrt\phi\,i$ and $\operatorname{ev}=\sqrt\phi\,i^\dagger$. In either zig-zag composite for $\tau$, the only intermediate channel is $\mathbf1$, so its scalar is $\sqrt\phi\sqrt\phi\,F^{\tau\tau\tau}_{\tau}[\mathbf1,\mathbf1]=\phi u=1$. The opposite zig-zag uses $F^{-1}=F$ from step 1.1 and has the same coefficient. Hence $\tau$ is self-dual; duality extends to finite direct sums, so the category is rigid. [F1, F2, F4, step 1.1, algebra]

3.1 **All total-$\tau$ pentagon entries.** In the tree order of step 2.1, each of the five bases is $(\mathbf1,\tau),(\tau,\mathbf1),(\tau,\tau)$. The moves $A_1,A_3$ fix the total of their three-leaf subtree, and mix precisely coordinates one and three; their other coordinate is the scalar total-unit block. The moves $A_2,A_4$ fix the pair subtree and mix precisely coordinates two and three. For $A_5$, the fixed $cd$ label is $\tau$ in source coordinates one and three; these map to target coordinates two and three by the columns of $F$. Source coordinate two has $cd=\mathbf1$ and maps to target coordinate one with coefficient one. Consequently $$A_1=A_3=\begin{pmatrix}u&0&v\\0&1&0\\v&0&-u\end{pmatrix},\quad A_2=A_4=\begin{pmatrix}1&0&0\\0&u&v\\0&v&-u\end{pmatrix},\quad A_5=\begin{pmatrix}0&1&0\\u&0&v\\v&0&-u\end{pmatrix}.$$ Exact multiplication using $u^2+u=1$ and $v^2=u$ gives $$A_3A_2A_1=\begin{pmatrix}0&u&v\\u&u&-uv\\v&-uv&u^2\end{pmatrix}=A_5A_4.$$ This exhibits every one of the nine entries, with their source and target bases fixed. Together with step 2.1 it covers both possible totals for every simple-input pentagon. [F3, F4, F6, step 1.1, step 2.1, algebra]

3.2 **Both total-$\tau$ hexagons, with their types.** In the intermediate-pair order $(\mathbf1,\tau)$ put $D=\operatorname{diag}(x,y)$ and $E=\operatorname{diag}(1,y)$. Here $D$ is a simple pair exchange in the tree where that pair is fused first; $E$ exchanges one $\tau$ with the composite pair, whose summands are $\mathbf1,\tau$, in the respective source and target composite-channel bases. It is not a braiding on two simple objects. The functor $\Phi(h)(f)=f\circ h^{-1}$ satisfies $\Phi(kh)=\Phi(k)\Phi(h)$, so it preserves the displayed order of the typed root composites. For the first root hexagon [F7], the route through associator, composite exchange, associator has matrix $FEF$; the route through simple exchange, associator, simple exchange has matrix $DFD$. For the second root hexagon the inverse associators also have matrix $F^{-1}=F$, giving the same two matrices. Thus both root equations are $FEF=DFD$, equivalently $B_2D=EF$ and $DB_2=FE$, where $B_2=FDF$. Expanding $B_2$ gives entries $u^2x+uy$, $uv(x-y)$, $uv(x-y)$, $ux+u^2y$. The four entries of $B_2D=EF$ require exactly $$x(u^2x+uy)=u,\qquad ux(x-y)=y,\qquad uy(x-y)=1,\qquad y(ux+u^2y)=-uy.$$ The last entry contains no extra factor $u$. From step 1.1, $y^3=u(1-y)$ and $y^4=y+u$. Therefore the four left sides are respectively $u(uy^4+y^3)=u(u^2+u)=u$, $u(y^4-y^3)=u(1+u)y=y$, $u(y^3-y^2)=u(1+u)=1$, and $uy(y^2+uy)=-uy$. This proves all four entries. Transposing gives $DB_2=FE$, since $D,B_2,E,F$ are symmetric. Together with step 2.2, all simple-input hexagon sectors hold exactly. [F1, F4, F5, F7, step 1.1, step 1.2, step 2.2, algebra]

4.1 The matrix Hom spaces and fusion rules give a finite semisimple complex category with simple unit, orthogonal direct sums and the stated $C^*$ norms. The distributive tensor action on multiplicity matrices is a dagger-compatible bifunctor. On simple inputs choose the associator whose induced inverse-precomposition matrix is the specified $F$; this is well defined because its object-level block is $(F^{-1})^{\mathsf T}=F$ in the only nonscalar case. Choose the object-level braiding eigenvalues $x^{-1},y^{-1}$ as specified. Extend both maps by direct sums and identities on copy coordinates. This makes them natural for arbitrary block matrices, not just for scalar maps of simple objects. A pentagon or hexagon on arbitrary direct sums decomposes into the finite simple-input blocks already proved in steps 2.1–3.2; zero summands give empty blocks. The triangle is the identity in the strict unit gauge. Step 1.1 proves unitarity and step 2.3 proves rigidity. Hence these data define the claimed unitary braided fusion category on every finite direct sum. The finite block exhaustion is the full coherence proof; no numerical approximation, unproved category realization or choice principle is used. [F1, F2, F4, F6, F7, step 1.1, step 2.1, step 3.1, step 2.2, step 3.2, step 2.3] ∎
