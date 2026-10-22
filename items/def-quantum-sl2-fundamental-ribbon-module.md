---
id: def-quantum-sl2-fundamental-ribbon-module
kind: definition
title: "The fundamental quantum sl2 module in the Kauffman-bracket ribbon convention"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-drinfeld-jimbo-quantized-enveloping-algebra
  - thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra
  - def-absolutely-simple-object
  - def-braiding
  - def-twist-and-ribbon-structure
  - def-left-dual-and-right-dual-object
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Julien Korinman, Finite presentations for stated skein algebras and lattice gauge field theory, Algebraic & Geometric Topology 23 (2023), §2.1, subsection “Relation with Uqsl2 and Oq[SL2]”, printed pp. 1256–1257 (PDF pp. 10–11)"
      url: "https://msp.org/agt/2023/23-3/agt-v23-n3-p05-p.pdf"
    - title: "Noah Snyder and Peter Tingley, The half-twist for U_q(g) representations, Algebra & Number Theory 3 (2009), §§3–5, printed pp. 810–830"
      url: "https://msp.org/ant/2009/3-7/ant-v3-n7-p04-p.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §8.3.13 and §§8.9–8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Let $\omega$ be an indeterminate, set $A=\omega^{-2}$, and put $k'=\mathbb Q(\omega)$, $q_K=A^2$, and $q_L=A^{-2}$. Work over the scalar extension to $k'$ of the library Hopf algebra at $q_L$. The parameter and Cartan-generator conversion from Korinman's convention is $q_L=q_K^{-1}$ and $K_L=K_K^{-1}$; the root generators $E,F$ correspond unchanged. The vector basis order remains $(v_+,v_-)$. Korinman displays these same column-action matrices for the root generators; no transpose is required. Thus the module matrices are
$$E=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad F=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad K_K=\begin{pmatrix}q_K&0\\0&q_K^{-1}\end{pmatrix}.$$
Equivalently, for the library parameter use $K_L=K_K^{-1}=\operatorname{diag}(q_L,q_L^{-1})$ and the library coproduct convention $\Delta(E)=E\otimes K_L^{-1}+1\otimes E$, $\Delta(F)=F\otimes1+K_L\otimes F$. The parameters $q_K$ and $q_L$ are not identified.

The object $V$ is absolutely simple in the $k'$-linear representation category.

Korinman's §2.1 matrix
$$C_K=\begin{pmatrix}0&\omega\\-\omega^5&0\end{pmatrix}$$
is labeled there as the matrix of his inverse half-ribbon operator on the underlying vector space $V$. It is not the equivariant left-duality identification used below. Here $\Omega$ denotes specifically the Snyder–Tingley operator $X$, whose inverse matrix is computed independently below; it is not identified with $C_K$.

To specify the half-ribbon action, use the Snyder–Tingley convention $q_{\mathrm{ST}}=q_K$, $K_{\mathrm{ST}}=K_K=K_L^{-1}$, $E_{\mathrm{ST}}=E$, and $F_{\mathrm{ST}}=F$ in the same ordered basis. Since $q_K=\omega^{-4}$, choose $q_{\mathrm{ST}}^{1/4}=\omega^{-1}$. Let $X=JT_{w_0}$ be their half-ribbon element and let $\Omega$ be its operator on $V$. On the fundamental highest- and lowest-weight vectors, their formula gives $Xv_+=-q_{\mathrm{ST}}^{3/4}v_-$ and $Xv_-=q_{\mathrm{ST}}^{3/4}v_+$. The half-ribbon action therefore gives the actual inverse matrix and its square:
$$\operatorname{Mat}_{(v_+,v_-)}(\Omega^{-1})=\begin{pmatrix}0&-\omega^3\\\omega^3&0\end{pmatrix},\qquad \Omega^2=-\omega^{-6}\operatorname{id}_V=-A^3\operatorname{id}_V.$$
Snyder–Tingley’s associated Hopf-algebra ribbon element is $X^{-2}$; the positive categorical twist in this Kauffman-bracket convention is its inverse $X^2=\Omega^2$. In the ordered basis $(v_+\otimes v_+,v_+\otimes v_-,v_-\otimes v_+,v_-\otimes v_-)$, the positive braiding is
$$c_{V,V}=\begin{pmatrix}A&0&0&0\\0&0&A^{-1}&0\\0&A^{-1}&A-A^{-3}&0\\0&0&0&A\end{pmatrix}.$$
Its ribbon quantum dimension is $\delta=-A^2-A^{-2}$. The half-ribbon and universal $R$-matrix are those of the topological half-ribbon representation category; the selected ribbon element is the Kauffman-bracket one, not the usual $U_q(\mathfrak{sl}_2)$ ribbon element.

Let $v_+^*,v_-^*$ be the ordinary dual basis. The left-dual action on $V^*$ is the contragredient action $(x\cdot f)(v)=f(S(x)v)$ for the antipode $S$ of the stated library Hopf convention. Identify the displayed copy of $V$ with this left dual $V^\vee$ by $v_+\mapsto v_-^*$ and $v_-\mapsto -A^{-2}v_+^*$. In this identification the evaluation and coevaluation maps are
$$B(v_+\otimes v_-)=1,\quad B(v_-\otimes v_+)=-A^{-2},\quad B(v_+\otimes v_+)=B(v_-\otimes v_-)=0,$$
$$U(1)=-A^2v_+\otimes v_-+v_-\otimes v_+.$$
These are the explicit duality maps used in the closure trace.

The positive Artin generator is drawn with braid height increasing upward; the left input strand ends on the right, and the right input strand passes over it:

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=.8]
  \draw[->] (0,-1) -- (.46,-.08);
  \draw[->] (.54,.08) -- (1,1);
  \draw[->] (1,-1) .. controls (.72,-.5) and (.28,.5) .. (0,1);
  \node at (-.2,-1) {$i$};
  \node at (1.2,-1) {$i+1$};
\end{tikzpicture}
```

The uninterrupted strand in the drawing is the overpassing strand. This is the crossing convention for the displayed matrix; the proof below uses its matrix entries and the half-ribbon source formulas, not the drawing.

## Definition references

[[def-drinfeld-jimbo-quantized-enveloping-algebra|Drinfeld–Jimbo algebra presentation]]

[[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra|Library coproduct convention]]

[[def-absolutely-simple-object|Absolute simplicity]]

[[def-braiding|Braiding definition]]

[[def-twist-and-ribbon-structure|Ribbon twist definition]]

[[def-left-dual-and-right-dual-object|Left-dual maps and snake identities]]

[Korinman, *Finite presentations for stated skein algebras and lattice gauge field theory*, §2.1](https://msp.org/agt/2023/23-3/agt-v23-n3-p05-p.pdf)

[Snyder and Tingley, *The half-twist for $U_q(\mathfrak g)$ representations*, §§3–5](https://msp.org/ant/2009/3-7/ant-v3-n7-p04-p.pdf)

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§8.3, 8.9–8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** The generic parameter $A$, the basis $(v_+,v_-)$, and the two explicitly distinguished parameters $q_K=A^2$ and $q_L=A^{-2}$.

[F1] The Drinfeld–Jimbo presentation has $K E K^{-1}=q^2E$, $K F K^{-1}=q^{-2}F$, and $EF-FE=(K-K^{-1})/(q-q^{-1})$ in the $\mathfrak{sl}_2$ case ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F2] In the library convention, $\Delta(E)=E\otimes K^{-1}+1\otimes E$, $\Delta(F)=F\otimes1+K\otimes F$, and the antipode is $S(E)=-EK$, $S(F)=-K^{-1}F$, $S(K)=K^{-1}$ ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]).

[F3] A braiding is a natural isomorphism $c_{X,Y}:X\otimes Y\to Y\otimes X$ satisfying the two hexagon identities ([[def-braiding]]).

[F4] A ribbon twist is a natural automorphism satisfying $\theta_{X\otimes Y}=(\theta_X\otimes\theta_Y)\circ c_{Y,X}\circ c_{X,Y}$ and compatible with duality ([[def-twist-and-ribbon-structure]]).

[F5] Korinman's full-text §2.1 gives the generic two-dimensional module, the displayed matrix of its inverse half-ribbon operator $C_K$, the positive braiding matrix, and the Kauffman-bracket quantum dimension $-q_K-q_K^{-1}$; the parameter, Cartan-generator, and column-action conversions used here are stated in the Definition ([Korinman, §2.1](https://msp.org/agt/2023/23-3/agt-v23-n3-p05-p.pdf)).

[F6] Snyder–Tingley Lemma 3.10 computes the action of $X=JT_{w_0}$ on highest- and lowest-weight vectors; Theorems 3.11 and 5.2 establish its standard braiding and half-ribbon structure, with associated Hopf-algebra ribbon element $v=X^{-2}$ satisfying $\Delta(v)=(v\otimes v)(R_{21}R)^{-1}$ ([Snyder–Tingley, §§3, 5](https://msp.org/ant/2009/3-7/ant-v3-n7-p04-p.pdf)).

[F7] Absolute simplicity means $\operatorname{End}(V)=k'\operatorname{id}_V$ ([[def-absolutely-simple-object]]).

[F8] A left dual has evaluation $V^\vee\otimes V\to\mathbf1$ and coevaluation $\mathbf1\to V\otimes V^\vee$ satisfying both snake identities ([[def-left-dual-and-right-dual-object]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Definition.

1.1 The displayed $E,F,K_K$ satisfy the $\mathfrak{sl}_2$ relations: conjugating $E$ by $K_K$ multiplies its only nonzero entry by $q_K^2$, conjugating $F$ multiplies its only nonzero entry by $q_K^{-2}$, and $EF-FE=\operatorname{diag}(1,-1)=(K_K-K_K^{-1})/(q_K-q_K^{-1})$, with nonzero denominator since $q_K-q_K^{-1}=\omega^{-4}-\omega^4\ne0$ in $k'$. Replacing $(q_K,K_K)$ by $(q_L,K_L)=(q_K^{-1},K_K^{-1})$ leaves the commutator quotient unchanged and gives the stated library toral relations. The coproduct conversion in the Definition is exactly [F2] after this substitution. [F1, F2, given, algebra]

1.2 Any $U_{q_K}(\mathfrak{sl}_2)$-endomorphism of $V$ commutes with $K_K$, whose distinct eigenvalues force it to be diagonal in $(v_+,v_-)$. Commuting with $E(v_-)=v_+$ forces the two diagonal entries to agree. Thus $\operatorname{End}(V)=k'\operatorname{id}_V$, which is [F7]'s absolute-simplicity condition. [F7, given, algebra]

1.3 In Korinman's convention the positive braiding is $P D(1+(q_K-q_K^{-1})E\otimes F)$, where $P$ is the flip and $D=\operatorname{diag}(A,A^{-1},A^{-1},A)$ in the displayed tensor basis. Since $E^2=F^2=0$, $(E\otimes F)^2=0$ and the source $q$-exponential truncates after its linear term. Applying this operator to the four basis vectors gives, in order, $A v_+\otimes v_+$, $A^{-1}v_-\otimes v_+$, $A^{-1}v_+\otimes v_-+(A-A^{-3})v_-\otimes v_+$, and $A v_-\otimes v_-$. These are exactly the columns of the displayed matrix; [F6] supplies the half-ribbon completion in which this finite action is a braiding. [F3, F5, F6, given, algebra]

1.4 The bilinear map $B$ and vector $U(1)$ are $U_{q_K}(\mathfrak{sl}_2)$ intertwiners. The $K_K$-weights in each nonzero pairing and coevaluation term multiply to $1$. For the only nonzero $E$-pairing, $\Delta(E)(v_-\otimes v_-)=q_K^{-1}v_+\otimes v_-+v_-\otimes v_+$, whose $B$-value is $q_K^{-1}-q_K^{-1}=0$; the other basis inputs give zero or a multiple of $v_+\otimes v_+$, also killed by $B$. For $F$, the only nonzero check is $\Delta(F)(v_+\otimes v_+)=v_-\otimes v_++q_K^{-1}v_+\otimes v_-$, whose $B$-value is $-q_K^{-1}+q_K^{-1}=0$. On coevaluation, $\Delta(E)$ sends $-q_Kv_+\otimes v_-+v_-\otimes v_+$ to $-q_Kv_+\otimes v_++q_Kv_+\otimes v_+=0$, and $\Delta(F)$ sends it to $-q_Kv_-\otimes v_-+q_Kv_-\otimes v_-=0$; the $K_K$-weight is zero. Since these checks hold on the generators and $\Delta,\varepsilon$ are algebra maps, they establish invariance of $B$ and $U$ for every algebra element. The Hopf identity $\sum x_{(1)}\otimes x_{(2)}S(x_{(3)})=x\otimes1$ then gives $B(xv,w)=\sum B(x_{(1)}v,x_{(2)}S(x_{(3)})w)=\sum\varepsilon(x_{(1)})B(v,S(x_{(2)})w)=B(v,S(x)w)$. Thus $\phi(v)=B(v,-)$ intertwines the stated contragredient action. Its matrix from $V$ to $V^*$ has nonzero determinant $A^{-2}$, so it is an isomorphism. Transporting the standard coevaluation $1\mapsto v_+\otimes v_+^*+v_-\otimes v_-^*$ by $\phi^{-1}$ gives exactly the displayed $U$. The snake composites are identities: $(B\otimes1)(1\otimes U)$ returns $v_+$ and $v_-$ with coefficients $B(v_+,v_-)=1$ and $(-A^2)B(v_-,v_+)=1$, respectively, while $(1\otimes B)(U\otimes1)$ returns them with coefficients $(-A^2)B(v_-,v_+)=1$ and $B(v_+,v_-)=1$. By [F8], these are the defining left-dual identities. The closed loop is $B(U(1))=-A^2-A^{-2}=\delta$. Thus these maps give the stated self-duality and quantum dimension. [F2, F5, F8, given, algebra]

2.1 For $\mathfrak{sl}_2$, the fundamental highest weight $\lambda$ satisfies $(\lambda,\lambda)=1/2$, $(\lambda,\rho)=1/2$, and $\langle2\lambda,\rho^\vee\rangle=1$. Snyder–Tingley’s formula [F6] therefore gives $Xv_+=-q_{\mathrm{ST}}^{3/4}v_-$ and $Xv_-=q_{\mathrm{ST}}^{3/4}v_+$. With $q_{\mathrm{ST}}^{1/4}=\omega^{-1}$, this yields $\operatorname{Mat}(\Omega)=\begin{pmatrix}0&\omega^{-3}\\-\omega^{-3}&0\end{pmatrix}$ and $\operatorname{Mat}(\Omega^{-1})=\begin{pmatrix}0&-\omega^3\\\omega^3&0\end{pmatrix}$, whose square is $\Omega^2=-A^3I$. The Hopf ribbon identity in [F6] gives $\Delta(v^{-1})=(v^{-1}\otimes v^{-1})R_{21}R$; since the monodromy $R_{21}R$ is $c_{Y,X}c_{X,Y}$, this inverse acts as the categorical twist for the balancing convention in [F4]. Thus the positive categorical twist is $v^{-1}=X^2=\Omega^2$. [F4, F6, step 1.3, algebra] ∎
