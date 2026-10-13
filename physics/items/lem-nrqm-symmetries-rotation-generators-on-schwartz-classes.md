---
id: lem-nrqm-symmetries-rotation-generators-on-schwartz-classes
aliases: [nrqm-symmetries-rotation-generators-on-schwartz-classes]
kind: lemma
domain: mathematics
title: "Coordinate-rotation generators on the Schwartz classes and their commutators"
status: published
origin: session
dependency_level: 6
deps: [def-axiom-of-choice, def-countable-choice, def-cross-product-in-r3, def-cm-special-orthogonal-group,
       def-hilbert-space, def-infinitesimal-generator-of-a-unitary-group, def-l-p-space-as-a-quotient-by-null-functions,
       def-metric-continuity, def-schwartz-space-and-its-seminorms, def-strongly-continuous-one-parameter-unitary-group,
       def-weak-derivative-of-a-locally-integrable-function, lem-cm-so3-is-a-matrix-group,
       lem-nrqm-framework-ccr-on-the-schwartz-core, lem-nrqm-kinematics-componentwise-position-and-momentum,
       lem-nrqm-symmetries-spatial-rotation-action, lem-schwartz-space-is-dense-in-l-two,
       thm-algebra-of-derivatives, thm-dominated-convergence,
       thm-mean-value-inequality, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives,
       thm-stone-one-parameter-unitary-groups]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-nrqm-framework-ccr-on-the-schwartz-core: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-symmetries-spatial-rotation-action: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 4.1.2-4.1.3 and 4.2, printed pages 60-66 (PDF pages 68-74): continuous transformations, their Hermitian generators, the rotation operator and the vector transformation laws of position and momentum"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 8.2, printed pages 175-177 (PDF pages 187-189): the one-parameter unitary groups of rotations, their generators and the commutation relations on the Schwartz class"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Sections 1.1-1.2, printed pages 1-9 (PDF pages 1-9): definition of the angular momentum operators and their commutation relations"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix an integer $r\ge1$ and
$\hbar>0$, let $H^{(r)}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ with the
componentwise operators $Q_{j},P_{k}$ and the Schwartz class
$\mathcal S^{(r)}=\mathcal S(\mathbb R^{3};\mathbb C^{r})$
([[lem-nrqm-kinematics-componentwise-position-and-momentum]],
[[def-schwartz-space-and-its-seminorms]]), and let $U(R)$ for $R\in SO(3)$ be
the spatial rotation action of [[lem-nrqm-symmetries-spatial-rotation-action]]
(so that $(U(R)f)(x)=f(R^{-1}x)$ componentwise and $U$ is a strongly continuous
unitary representation). For $i=1,2,3$ define the rotation matrices
$$R_{1}(t):=\begin{pmatrix}1&0&0\\0&\cos t&-\sin t\\0&\sin t&\cos t\end{pmatrix},\quad R_{2}(t):=\begin{pmatrix}\cos t&0&\sin t\\0&1&0\\-\sin t&0&\cos t\end{pmatrix},\quad R_{3}(t):=\begin{pmatrix}\cos t&-\sin t&0\\\sin t&\cos t&0\\0&0&1\end{pmatrix},$$
put $U_{i}(t):=U(R_{i}(t))$, and let $L_{i}$ be the self-adjoint operator with
$U_{i}(t)=e^{-itL_{i}/\hbar}$ furnished by Stone's theorem
([[thm-stone-one-parameter-unitary-groups]],
[[def-infinitesimal-generator-of-a-unitary-group]]). Then:

(a) for each $i$ the family $t\mapsto U_{i}(t)$ is a strongly continuous
one-parameter unitary group with $U_{i}(s+t)=U_{i}(s)U_{i}(t)$ and
$U_{i}(0)=\mathrm{id}$ ([[def-strongly-continuous-one-parameter-unitary-group]]);

(b) for every $\psi\in\mathcal S^{(r)}$ the curve $t\mapsto U_{i}(t)\psi$ is
differentiable at $t=0$ into $H^{(r)}$ with
$$\frac{d}{dt}\Big|_{t=0}U_{i}(t)\psi=-\sum_{j=1}^{3}(e_{i}\times x)_{j}\,D_{j}\psi,$$
and consequently $\mathcal S^{(r)}\subseteq D(L_{i})$ and
$$L_{i}\psi=-i\hbar\sum_{j=1}^{3}(e_{i}\times x)_{j}D_{j}\psi=\sum_{j,k=1}^{3}\varepsilon_{ijk}\,Q_{j}P_{k}\psi\qquad(\psi\in\mathcal S^{(r)});$$

(c) $L_{i}\mathcal S^{(r)}\subseteq\mathcal S^{(r)}$ for each $i$, and on
$\mathcal S^{(r)}$ the commutation relations hold:
$$L_{i}L_{k}\psi-L_{k}L_{i}\psi=i\hbar\sum_{j=1}^{3}\varepsilon_{ikj}\,L_{j}\psi\qquad(\psi\in\mathcal S^{(r)}).$$
(d) For each $i$ the Schwartz class is a core for $L_i$: on $D(L_i)$
the graph norm
$$\|\psi\|_{L_i}:=\bigl(\|\psi\|_{H^{(r)}}^{2}+\hbar^{-2}\|L_i\psi\|_{H^{(r)}}^{2}\bigr)^{1/2}$$
makes $\mathcal S^{(r)}$ dense in $D(L_i)$ (equivalently, the graph closure of
$L_i|_{\mathcal S^{(r)}}$ is $L_i$). This norm is equivalent to the ordinary
graph norm because $\hbar>0$ is fixed.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; $r\ge1$;
$\hbar>0$; the space $H^{(r)}$; the componentwise operators $Q_{j},P_{k}$; the
rotation action $U$ and the groups $U_{i}$; the generators $L_{i}$; a class
$\psi\in\mathcal S^{(r)}$; real $s,t$ and $h\ne0$.

[F1] **Rotation action.** $(U(R)f)(x)=f(R^{-1}x)$ componentwise defines a
strongly continuous unitary representation of $SO(3)$ on $H^{(r)}$; for $R$ near the identity and $\psi\in\mathcal S^{(r)}$ the reflected class
$\psi\circ R^{-1}$ is Schwartz, and $R\mapsto U(R)\psi$ is continuous
([[lem-nrqm-symmetries-spatial-rotation-action]] clauses (a),(b),
[[def-metric-continuity]]).

[F2] **Matrices.** $t\mapsto R_{i}(t)$ is a continuous group homomorphism
$(\mathbb R,+)\to SO(3)$ with $R_{i}(0)=I$, $R_{i}(s)R_{i}(t)=R_{i}(s+t)$ and
$R_{i}(t)^{-1}=R_{i}(-t)$; and $\frac{d}{dt}\big|_{t=0}R_{i}(t)=G_{i}$, where
$G_{1}x=(0,-x_{3},x_{2})$, $G_{2}x=(x_{3},0,-x_{1})$ and $G_{3}x=(-x_{2},x_{1},0)$
for $x\in\mathbb R^{3}$, so that $G_{i}x=e_{i}\times x$. These follow by
direct computation from the addition formulas and the derivatives
$\sin'=\cos$, $\cos'=-\sin$ and the multiplication rules for $3\times3$
matrices ([[thm-sine-and-cosine-addition-formulas]],
[[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]],
[[def-cross-product-in-r3]], [[def-cm-special-orthogonal-group]],
[[lem-cm-so3-is-a-matrix-group]]).

[F3] **Componentwise operators and derivatives.** $Q_{j},P_{k}$ are
self-adjoint with maximal componentwise domains, they map $\mathcal S^{(r)}$
into itself, and $D_{j}$ denotes the weak derivative, which on Schwartz classes
agrees with the classical partial derivative
([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a),
[[def-weak-derivative-of-a-locally-integrable-function]],
[[def-schwartz-space-and-its-seminorms]]).

[F4] **Stone's theorem.** $T\mapsto e^{itT}$ is a bijection from self-adjoint
operators onto strongly continuous one-parameter unitary groups, and the domain
$D(T)$ is exactly the set of vectors where $t\mapsto e^{itT}x$ is
differentiable at $0$, with derivative $iTx$
([[thm-stone-one-parameter-unitary-groups]],
[[def-infinitesimal-generator-of-a-unitary-group]]).

[F5] **Schwartz decay and dominated convergence.** For $\psi\in\mathcal S^{(r)}$ each component and each of its first partial derivatives is bounded and decays faster than any polynomial; hence for fixed $x$ the map $t\mapsto\psi_{l}(R_{i}(t)^{-1}x)$ is differentiable with derivative $-\sum_{j}(G_{i}x)_{j}(D_{j}\psi_{l})(x)$ at $t=0$, and the difference quotients are dominated by a fixed Schwartz-decaying function near $t=0$ ([[def-schwartz-space-and-its-seminorms]],
[[thm-mean-value-inequality]], [[thm-dominated-convergence]],
[[thm-algebra-of-derivatives]]).

[F6] **Canonical commutation relations.** On $\mathcal S^{(r)}$ one has
$(Q_{j}P_{k}-P_{k}Q_{j})\psi=i\hbar\delta_{jk}\psi$
([[lem-nrqm-framework-ccr-on-the-schwartz-core]] clause (a)).

[F7] **Schwartz density.** The componentwise Schwartz classes are dense in
$H^{(r)}$ ([[lem-schwartz-space-is-dense-in-l-two]]).

## Proof

**Proof technique:** direct; read the group law and continuity from the rotation
representation, differentiate the orbit in the position representation along
the coordinate subgroups, identify the generator with the angular-momentum
expression on Schwartz classes, and compute the commutators from the canonical
commutation relations.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Group law and strong continuity] By [F1], $U_{i}(s+t)=U(R_{i}(s+t))=U(R_{i}(s)R_{i}(t))=U(R_{i}(s))U(R_{i}(t))=U_{i}(s)U_{i}(t)$ using the group law of [F2] and the representation property of [F1]; $U_{i}(0)=U(I)=\mathrm{id}$; each $U_{i}(t)$ is unitary; and strong continuity of $t\mapsto U_{i}(t)\psi$ is the composition of the continuous map $t\mapsto R_{i}(t)$ of [F2] with the continuous orbit map of [F1]. This proves (a). [F1, F2, given, algebra]

1.2 [Differentiation of the orbit on Schwartz classes] Fix $\psi\in\mathcal S^{(r)}$, $i$ and one component. By [F2], $R_{i}(h)^{-1}=R_{i}(-h)=I-hG_{i}+O(h^{2})$ entrywise, so $R_{i}(h)^{-1}x=x-hG_{i}x+O(h^{2})$ uniformly for $x$ in a compact set; hence $\psi_{l}(R_{i}(h)^{-1}x)-\psi_{l}(x)=-h\sum_{j}(G_{i}x)_{j}(D_{j}\psi_{l})(x)+o(h)$ pointwise as $h\to0$ by the differentiability of $\psi_{l}$ and the chain rule [F5], with $(G_{i}x)_{j}=(e_{i}\times x)_{j}$ by [F2]. The difference quotients are dominated near $h=0$ by a fixed Schwartz-decaying function because $\psi_{l}$ and its first derivatives decay faster than any polynomial and $|x-hG_{i}x+O(h^{2})|\le2|x|$ for small $h$; dominated convergence [F5] therefore gives convergence in $H^{(r)}$, so the orbit is differentiable at $0$ with the displayed derivative. [F1, F2, F5, given, algebra]

2.1 [Generator on Schwartz classes] By step 1.2 the difference quotient of $t\mapsto U_{i}(t)\psi$ at $0$ converges, so $\psi\in D(L_{i})$ and $-\frac{i}{\hbar}L_{i}\psi=-\sum_{j}(e_{i}\times x)_{j}D_{j}\psi$ by [F4]; multiplying by $i\hbar$ gives $L_{i}\psi=-i\hbar\sum_{j}(e_{i}\times x)_{j}D_{j}\psi$. Since $(e_{i}\times x)_{j}=x_{j'}$ for the two indices $j'$ complementary to $i$ with the signs of [F2], this reads $L_{i}\psi=\sum_{j,k}\varepsilon_{ijk}Q_{j}P_{k}\psi$: for example $L_{3}\psi=-i\hbar(-x_{2}D_{1}+x_{1}D_{2})\psi=x_{1}(-i\hbar D_{2})\psi-x_{2}(-i\hbar D_{1})\psi=(Q_{1}P_{2}-Q_{2}P_{1})\psi$, and the other two cases are the cyclic permutations. This proves (b). [step 1.2, F2, F3, F4, given, algebra]

2.2 [Schwartz classes are a graph core] Fix $i$ and choose a nonnegative $\eta\in C_c^\infty(\mathbb R)$ supported in $[-1,1]$ with $\int_{\mathbb R}\eta(t)\,dt=1$; for example, normalize $e^{-1/(1-t^2)}$ on $|t|<1$ and extend it by zero. Its derivatives at the endpoints vanish because each is a finite sum of powers of $(1-t^2)^{-1}$ times the exponential, and $u^{-N}e^{-1/u}\to0$ as $u\downarrow0$ for every $N$. Put $\eta_\epsilon(t)=\epsilon^{-1}\eta(t/\epsilon)$ and, for $f\in H^{(r)}$, define $S_\epsilon f:=\int_{\mathbb R}\eta_\epsilon(t)U_i(t)f\,dt$, where the integral is the norm limit of Riemann sums for the continuous $H^{(r)}$-valued integrand on its compact support; completeness of $H^{(r)}$ gives this limit. If $f\in\mathcal S^{(r)}$, then $S_\epsilon f\in\mathcal S^{(r)}$: its representative is $\int\eta_\epsilon(t)f(R_i(-t)x)\,dt$, and on the compact $t$-support every spatial derivative and polynomially weighted derivative is bounded uniformly by finitely many Schwartz seminorms, so differentiation under the integral gives finite seminorms of every order. By the group law and the substitution $s=t+h$, $\frac{U_i(h)S_\epsilon f-S_\epsilon f}{h}=\int_{\mathbb R}\frac{\eta_\epsilon(s-h)-\eta_\epsilon(s)}{h}\,U_i(s)f\,ds\longrightarrow-\int_{\mathbb R}\eta_\epsilon'(s)U_i(s)f\,ds$ in $H^{(r)}$: the scalar difference quotients converge uniformly to $-\eta_\epsilon'$ and have support in a common compact interval for small $h$. The Stone-generator domain characterization in [F4] therefore gives $S_\epsilon f\in D(L_i)$ and $L_iS_\epsilon f=-i\hbar\int\eta_\epsilon'(s)U_i(s)f\,ds$, so $\hbar^{-1}\|L_iS_\epsilon f\|\le\epsilon^{-1}\|\eta'\|_{1}\|f\|$. If $f\in D(L_i)$, instead write the quotient as $\int\eta_\epsilon(t)U_i(t)\frac{U_i(h)f-f}{h}\,dt$; its integrand converges uniformly in $t$ in $H^{(r)}$ to $-\frac{i}{\hbar}\eta_\epsilon(t)U_i(t)L_if$, so $L_iS_\epsilon f=S_\epsilon L_if$. Strong continuity and nonnegativity of $\eta$ now give $\|S_\epsilon f-f\|\le\sup_{|t|\le\epsilon}\|U_i(t)f-f\|\to0$, and the same estimate for $L_if$ shows $S_\epsilon f\to f$ in $\|\cdot\|_{L_i}$. Finally take $\epsilon_n=1/n$ and choose $\varphi_n\in\mathcal S^{(r)}$ with $\|\varphi_n-f\|<[n(1+\epsilon_n^{-1}\|\eta'\|_1)]^{-1}$, possible by [F7]. The bounds above give $\|S_{\epsilon_n}(\varphi_n-f)\|_{L_i}\to0$, while $S_{\epsilon_n}\varphi_n\in\mathcal S^{(r)}$; hence $\mathcal S^{(r)}$ is dense in $D(L_i)$ in the stated graph norm. [step 1.1, F1, F4, F7, given, algebra]

3.1 [Invariance of the Schwartz class] The expression $L_{i}\psi=-i\hbar\sum_{j}(e_{i}\times x)_{j}D_{j}\psi$ is a finite sum of products of a linear polynomial with a first weak derivative of a Schwartz class; hence $L_{i}\psi\in\mathcal S^{(r)}$ by the closure of $\mathcal S^{(r)}$ under polynomial multiplication and differentiation [F5], so $L_{i}\mathcal S^{(r)}\subseteq\mathcal S^{(r)}$. [step 2.1, F3, F5, given, algebra]

4.1 [Commutators on the Schwartz class] Let $\psi\in\mathcal S^{(r)}$ and use the product rule for commutators $[AB,CD]=A[B,C]D+AC[B,D]+[A,C]DB+C[A,D]B$, verified by expanding both sides. By step 2.1, $L_{1}=Q_{2}P_{3}-Q_{3}P_{2}$ and $L_{2}=Q_{3}P_{1}-Q_{1}P_{3}$, and by [F3] all displayed products are defined on $\mathcal S^{(r)}$. Using [F6] and bilinearity, only the terms containing a nonvanishing commutator contribute: $[Q_{2}P_{3},Q_{3}P_{1}]=Q_{2}[P_{3},Q_{3}]P_{1}=-i\hbar Q_{2}P_{1}$, and $[Q_{3}P_{2},Q_{1}P_{3}]=Q_{1}[Q_{3},P_{3}]P_{2}=i\hbar Q_{1}P_{2}$, while $[Q_{2}P_{3},Q_{1}P_{3}]=0$ and $[Q_{3}P_{2},Q_{3}P_{1}]=0$ because in the remaining products every commutator is of coordinate with coordinate or of momentum with momentum, namely $[P_{3},Q_{1}]=[Q_{2},Q_{1}]=[Q_{2},P_{3}]=0$ for the first and $[P_{2},Q_{3}]=[Q_{3},Q_{3}]=[Q_{3},P_{1}]=0$ for the second. Hence $[L_{1},L_{2}]\psi=-i\hbar Q_{2}P_{1}\psi+i\hbar Q_{1}P_{2}\psi=i\hbar(Q_{1}P_{2}-Q_{2}P_{1})\psi=i\hbar L_{3}\psi$. The index triple $(1,2,3)$ and the three coordinate directions enter the definitions of $L_{1},L_{2},L_{3}$ cyclically symmetrically, and the canonical commutation relations are cyclically invariant, so the two cyclic permutations of this computation give $[L_{2},L_{3}]=i\hbar L_{1}$ and $[L_{3},L_{1}]=i\hbar L_{2}$ on $\mathcal S^{(r)}$; that is $[L_{i},L_{k}]\psi=i\hbar\sum_{j}\varepsilon_{ikj}L_{j}\psi$ for all $i,k$. This proves (c). [step 2.1, step 3.1, F3, F6, given, algebra]

5.1 [Assembly] Step 1.1 proves (a), steps 1.2 and 2.1 prove (b), step 3.1 proves the Schwartz invariance in (c), steps 2.2 and 4.1 prove the graph-core and commutator assertions, and the fixed definition of the graph norm in the Statement completes (d). [step 1.1, step 1.2, step 2.1, step 3.1, step 2.2, step 4.1] ∎

## Remarks

- **Sign and normalization.** All three generators are fixed by the convention $U_{i}(t)=e^{-itL_{i}/\hbar}$ already used for the energy flow; with it, $L_{i}=\sum_{j,k}\varepsilon_{ijk}Q_{j}P_{k}$ on $\mathcal S^{(r)}$, the classical expression $L=x\times p$ read with $P=(-i\hbar D)$.
- **Core and commutators.** The graph-core statement concerns each coordinate generator separately and does not assert a joint graph core for products or for a sum such as $\sum_iL_i^2$.
