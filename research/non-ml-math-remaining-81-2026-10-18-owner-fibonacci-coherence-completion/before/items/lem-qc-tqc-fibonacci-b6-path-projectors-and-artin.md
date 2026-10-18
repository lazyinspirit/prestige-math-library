---
id: lem-qc-tqc-fibonacci-b6-path-projectors-and-artin
kind: lemma
title: Fibonacci B6 path projectors satisfy the braid relations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-fusion-tree-basis
  - ex-qc-tqc-fibonacci-data
  - def-braid-group-by-the-artin-presentation
dependency_level: 7
axiom_use: None; the proof uses finite fusion-path enumeration and exact algebraic identities.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
---

## Statement

Use the Fibonacci fusion rule $\tau\otimes\tau=1\oplus\tau$ and the
fixed-chirality data
$F^{\tau\tau\tau}_\tau=\begin{pmatrix}\phi^{-1}&\phi^{-1/2}\\
\phi^{-1/2}&-\phi^{-1}\end{pmatrix}$ and
$r=R_\tau/R_1=e^{-3\pi i/5}$. The fixed-total-charge B6 path bases are

$$\mathcal P_1=\{0101010,0101110,0110110,0111010,0111110\},$$

$$\mathcal P_\tau=\{0101011,0101101,0101111,0110101,0110111,0111011,0111101,0111111\},$$

where each path is $(x_0,\ldots,x_6)$, $x_0=0$ is the unit label,
$x_1=1$ is $\tau$, and adjacent labels obey the fusion rule. For
$d_0=1,d_1=\phi$, define $E_i$ on either path basis by
$$(E_i)_{x,y}=
\begin{cases}
\sqrt{d_{x_i}d_{y_i}}/d_{x_{i-1}},
&x_j=y_j\ (j\ne i),\ x_{i-1}=x_{i+1}=y_{i-1}=y_{i+1},\\
0,&\text{otherwise,}
\end{cases}
\qquad P_i:=\phi^{-1}E_i.$$
Then $P_i$ are orthogonal projections, have ranks $2$ on $\mathcal P_1$
and $3$ on $\mathcal P_\tau$, satisfy
$P_iP_{i+1}P_i=\phi^{-2}P_i$ and commute at separation at least two.
Consequently $B_i=rI+(1-r)P_i$ are unitary matrices satisfying the Artin
relations of $B_6$, with
$\det B_i=r^3$ on $V(\tau^6\to1)$ and $\det B_i=r^5$ on
$V(\tau^6\to\tau)$.

## Facts & Assumptions

**Given:** The fixed Fibonacci fusion rule, the unitary fusion-tree bases, and
the chiral $F/R$ coordinates displayed in the Statement.

[F2] A fusion-tree basis retains each admissible intermediate charge and
vertex multiplicity index. The current supplier body was inspected.
[[def-qc-tqc-fusion-tree-basis]]

[A1] Assume the Fibonacci fusion rule and the fixed-chirality data displayed
in the Statement: the normalized pair-channel eigenvalues are $1,r$, and
the nontrivial recoupling block is the displayed $F$ matrix. The actual
Fibonacci data carrier states this fusion rule and these fixed sector
matrices. [[ex-qc-tqc-fibonacci-data]]

## Proof

1.1 Starting with $(x_0,x_1)=(0,1)$, the fusion rule permits only $x_{j+1}=1$
when $x_j=0$, and permits $x_{j+1}\in\{0,1\}$ when $x_j=1$. Enumerating the
five remaining transitions with endpoint $x_6=0$ or $1$ gives exactly the
two path sets displayed in the Statement; hence the block dimensions are
$5$ and $8$. Also $r^5=-1$ and $r\ne-1$, so
$r^4-r^3+r^2-r+1=0$. For $y=r+r^{-1}$, division by $r^2$ gives
$y^2-y-1=0$; since $y=2\cos(3\pi/5)<0$, $y=-\phi^{-1}$. Thus
$r^2+\phi^{-1}r+1=0$. [given, A1, F2, construct, algebra]

1.2 In a fixed left-tree basis, $P_i$ is the projection onto pair channel
$1$. The $F$-move gives the only nontrivial local block, on the two
intermediate channels $(1,\tau)$:
$$\begin{pmatrix}\phi^{-2}&\phi^{-3/2}\\
\phi^{-3/2}&\phi^{-1}\end{pmatrix}.$$
Its square equals itself because
$\phi^{-4}+\phi^{-3}=\phi^{-2}$,
$\phi^{-3/2}(\phi^{-2}+\phi^{-1})=\phi^{-3/2}$, and
$\phi^{-3}+\phi^{-2}=\phi^{-1}$; its entries are real symmetric. When the
surrounding charge is the unit, the only allowed pair-channel block is
$[1]$. Thus each $P_i=P_i^*=P_i^2$.
Counting the diagonal entries of these blocks on the listed paths gives
$\operatorname{tr}P_i=2$ on $\mathcal P_1$ and $3$ on $\mathcal P_\tau$,
so these are the ranks. [given, A1, F2, algebra]

2.1 On the nontrivial three-strand total-$\tau$ block, the adjacent
projections are $P=|e_1\rangle\langle e_1|$ and
$Q=|f_1\rangle\langle f_1|$, where
$f_1=(\phi^{-1},\phi^{-1/2})$ is the first column of $F$. Therefore
$PQP=|\langle e_1,f_1\rangle|^2P=\phi^{-2}P$ and symmetrically
$QPQ=\phi^{-2}Q$. In the one-dimensional total-$1$ block both adjacent
projections are zero, so the same identities hold. Tensoring with spectator
path factors leaves these identities unchanged. Operators on disjoint pairs
commute by the interchange law for tensor products. [A1, algebra]

2.2 Put $q_0=\phi^{-2}$. For adjacent $P=P_i,Q=P_{i+1}$ and
$s=1-r$, direct expansion using $P^2=P$, $Q^2=Q$,
$PQP=q_0P$, and $QPQ=q_0Q$ gives
$$[rI+sP][rI+sQ][rI+sP]-[rI+sQ][rI+sP][rI+sQ]
=s\bigl(r+q_0s^2\bigr)(P-Q).$$
Because $r+r^{-1}=-\phi^{-1}$,
$\bigl(r+q_0(1-r)^2\bigr)/r
=1+\phi^{-2}(r+r^{-1}-2)
=1-\phi^{-2}(\phi^{-1}+2)=0$; here $\phi^{-1}+2=\phi^2$.
Thus the adjacent braid relation holds. [A1, step 2.1, algebra]

3.1 Since $P_i$ is an orthogonal projection and $|r|=1$, $B_i$ acts by
$1$ on $\operatorname{ran}P_i$ and by $r$ on its orthogonal complement, so
it is unitary. The distant commutation and adjacent relation from steps
2.1–2.2 are the defining Artin relations, hence the matrices represent $B_6$.
The rank table gives rank $2$ on the five-dimensional block and rank $3$ on
the eight-dimensional block, so $\det B_i=r^{5-2}=r^3$ and
$\det B_i=r^{8-3}=r^5$, respectively. [given, step 1.2, step 2.1, step 2.2, algebra] ∎
