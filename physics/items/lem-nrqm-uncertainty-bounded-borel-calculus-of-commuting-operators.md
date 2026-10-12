---
id: lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators
aliases: [nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators]
kind: lemma
domain: mathematics
title: "Bounded Borel calculus of strongly commuting self-adjoint operators"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-borel-sigma-algebra, def-bounded-linear-operator, def-countable-choice, def-hilbert-space, def-operator-norm, def-projection-valued-measure, def-self-adjoint-positive-unitary-and-normal-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-nrqm-uncertainty-strong-spectral-commutation, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-nrqm-uncertainty-strong-spectral-commutation: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 3, printed pages 87-100 (PDF pages 99-112): the bounded Borel functional calculus of a projection-valued measure, its multiplicativity and its interplay with the spectral theorem"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', Sections 7-8, printed pages 16-19: simultaneous diagonalization of commuting Hermitian operators"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H$ be a nonzero
complex Hilbert space and let $A,B$ be self-adjoint operators on $H$ with
spectral projection-valued measures $E_{A},E_{B}$ that strongly commute in the
sense of [[def-nrqm-uncertainty-strong-spectral-commutation]] clause (b):
$$E_{A}(\Lambda)E_{B}(\Sigma)=E_{B}(\Sigma)E_{A}(\Lambda)\qquad\text{for all Borel }\Lambda,\Sigma\subseteq\mathbb R .$$
For a bounded Borel function $h$ write $h(A):=\int h\,dE_{A}$ and
$h(B):=\int h\,dE_{B}$ for its operators under the bounded Borel functional
calculus ([[thm-bounded-borel-pvm-integral]]). Then:

(a) for all bounded Borel $f,g:\mathbb R\to\mathbb C$,
$$f(A)g(B)=g(B)f(A);$$

(b) for every bounded Borel $f$ one has $f(B)D(A)\subseteq D(A)$, and
$$A\,f(B)x=f(B)Ax\qquad\text{for every }x\in D(A);$$
the same statement holds with the roles of $A$ and $B$ exchanged, and it is
also true with $f(B)$ replaced by any bounded linear combination or norm limit
of bounded Borel functions of $B$;

(c) for every bounded Borel $f$ the bounded operator $f(B)$ commutes with all
spectral projections of $A$: $f(B)E_{A}(\Lambda)=E_{A}(\Lambda)f(B)$ for every
Borel $\Lambda\subseteq\mathbb R$. Consequently, for real-valued bounded Borel
$f$ the pair $(f(A),B)$ strongly commutes: the map
$F(\Lambda):=E_{A}(f^{-1}(\Lambda))$ is a projection-valued measure on the
Borel sets of $\mathbb R$ representing the bounded self-adjoint operator
$f(A)$, and $F(\Lambda)E_{B}(\Sigma)=E_{B}(\Sigma)F(\Lambda)$ for all Borel
$\Lambda,\Sigma$; hence also $(f(A),g(B))$ strongly commutes for real-valued
bounded Borel $f,g$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice; a nonzero complex Hilbert space $H$; self-adjoint operators $A,B$ with strongly commuting spectral projection-valued measures $E_{A},E_{B}$; bounded Borel functions $f,g,h$; vectors $x\in D(A)$ and $y\in D(B)$.

[F1] **Bounded Borel calculus.** For bounded Borel $h$ the operator $\Phi_{E}(h)=\int h\,dE$ is the unique bounded operator with $\langle\Phi_{E}(h)x,y\rangle=\int h\,dE_{x,y}$, it satisfies $\|\Phi_{E}(h)\|\le\|h\|_{\infty}$, $\langle\Phi_{E}(h)x,x\rangle=\int h\,dE_{x}$ and $\|\Phi_{E}(h)x\|^{2}=\int|h|^{2}\,dE_{x}$, it is the norm limit of $\int s_{n}\,dE$ for every sequence of complex simple functions with $\|h-s_{n}\|_{\infty}\to0$, and for a simple function $s=\sum_{j}c_{j}\mathbf 1_{D_{j}}$ over a disjoint measurable cover one has $\int s\,dE=\sum_{j}c_{j}E(D_{j})$ ([[thm-bounded-borel-pvm-integral]] clauses 1 and 2). A projection-valued measure is multiplicative, $E(\Lambda\cap\Sigma)=E(\Lambda)E(\Sigma)$, and every value is an orthogonal projection ([[def-projection-valued-measure]]).

[F2] **Star homomorphism.** The map $h\mapsto\Phi_{E}(h)$ is linear and unital, multiplicative, and adjoint preserving: $\Phi_{E}(hg)=\Phi_{E}(h)\Phi_{E}(g)$ and $\Phi_{E}(\overline h)=\Phi_{E}(h)^{*}$ ([[thm-pvm-integral-is-a-star-homomorphism]] clauses 1-3).

[F3] **Spectral theorem and truncated integrals.** The spectral projection-valued measure of a self-adjoint operator is unique, its scalar measures $E_{A,x}(\Lambda)=\langle E_{A}(\Lambda)x,x\rangle$ are finite Borel measures with $E_{A,x}(\mathbb R)=\|x\|^{2}$, and $D(A)=\{x:\int\lambda^{2}\,dE_{A,x}<\infty\}$ with $\|Ax\|^{2}=\int\lambda^{2}\,dE_{A,x}$ for $x\in D(A)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). For $g:\mathbb R\to\mathbb C$ Borel the operator $g(A)$ has domain $\{x:\int|g|^{2}\,dE_{A,x}<\infty\}$ and satisfies $\|g(A)x\|^{2}=\int|g|^{2}\,dE_{A,x}$; the operators $A_{n}:=\int\lambda\mathbf 1_{\{|\lambda|\le n\}}\,dE_{A}$ are bounded with $\|A_{n}x\|^{2}=\int\lambda^{2}\mathbf 1_{\{|\lambda|\le n\}}\,dE_{A,x}$, and $A_{n}x\to Ax$ for every $x\in D(A)$ ([[thm-unbounded-borel-functional-calculus]]; [[thm-bounded-borel-pvm-integral]] for the bounded truncations).

[F4] **Norm convergence of simple approximants.** For every bounded complex-valued Borel function $h$ on $\mathbb R$ and every $\varepsilon>0$ there is a complex simple Borel function $s$ with $\|h-s\|_{\infty}\le\varepsilon$: choose $M>\|h\|_{\infty}$ and partition the square $[-M,M]+i[-M,M]\subset\mathbb C$ into finitely many Borel squares of diameter at most $\varepsilon$. Their inverse images under $h$, after empty sets are removed, form a finite disjoint measurable cover; choose a value in each square and let $s$ take that value on its inverse image. Then $\|\Phi_{E}(h)-\Phi_{E}(s)\|\le\|h-s\|_{\infty}$ by [F1].

## Proof

**Proof technique:** verify the commutation on simple functions, transfer it to all bounded Borel functions by uniform approximation in operator norm, and control the domain statement by truncating the unbounded operator.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Simple functions commute] Let $f=\sum_{i}a_{i}\mathbf 1_{\Lambda_{i}}$ and $g=\sum_{j}b_{j}\mathbf 1_{\Sigma_{j}}$ be complex simple Borel functions over disjoint measurable covers. By [F1], $f(A)=\sum_{i}a_{i}E_{A}(\Lambda_{i})$ and $g(B)=\sum_{j}b_{j}E_{B}(\Sigma_{j})$, so $f(A)g(B)=\sum_{i,j}a_{i}b_{j}E_{A}(\Lambda_{i})E_{B}(\Sigma_{j})=\sum_{i,j}a_{i}b_{j}E_{B}(\Sigma_{j})E_{A}(\Lambda_{i})=g(B)f(A),$ because products of scalars commute and each pair of projections commutes by the strong commutation hypothesis. [given, F1, algebra]

1.2 [Uniform approximation] Let $f,g$ be bounded Borel and fix $\varepsilon>0$. By [F4] choose simple $s,t$ with $\|f-s\|_{\infty}\le\varepsilon$ and $\|g-t\|_{\infty}\le\varepsilon$. By [F1], $\|s(A)-f(A)\|\le\varepsilon$, $\|t(B)-g(B)\|\le\varepsilon$ and $\|t(B)\|\le\|g\|_{\infty}+\varepsilon$, so the operator norm estimate $\|s(A)t(B)-f(A)g(B)\|\le\|s(A)-f(A)\|\,\|t(B)\|+\|f(A)\|\,\|t(B)-g(B)\|\le\varepsilon\bigl(\|g\|_{\infty}+\varepsilon+\|f\|_{\infty}\bigr)$ gives $s(A)t(B)\to f(A)g(B)$ in operator norm as $\varepsilon\downarrow0$, with the approximants chosen along any sequence $\varepsilon_{n}\to0$. [F1, F4, construct, algebra]

2.1 [Clause (a)] Let $f,g$ be bounded Borel and choose the approximating sequences $s_{n}\to f$, $t_{n}\to g$ of step 1.2. By step 1.1, $s_{n}(A)t_{n}(B)=t_{n}(B)s_{n}(A)$ for every $n$; both sides converge in operator norm to $f(A)g(B)$ and to $g(B)f(A)$ respectively by step 1.2 (applied to the pairs $(s_{n},t_{n})$ and $(t_{n},s_{n})$). Limits in operator norm are unique, so $f(A)g(B)=g(B)f(A)$. This is (a). [step 1.1, step 1.2, F1, algebra]

3.1 [Clause (c), first part] Let $f$ be bounded Borel and let $\Lambda$ be Borel. Applying (a), already proved, to the pair $(f,\mathbf 1_{\Lambda})$ gives $f(B)E_{A}(\Lambda)=E_{A}(\Lambda)f(B)$. This is the first assertion of (c). [step 2.1, F1, algebra]

4.1 [Clause (b), membership in the domain] Fix a bounded Borel $f$ and $x\in D(A)$; put $y:=f(B)x$. Put $u_{n}(\lambda):=\lambda\mathbf 1_{\{|\lambda|\le n\}}$, so that $A_{n}=\int u_{n}\,dE_{A}$ is a bounded Borel function of $A$; clause (a), already proved, applied to the pair of bounded Borel functions $(u_{n},f)$ gives $A_{n}f(B)=f(B)A_{n}$, so by [F1] and [F3] $\int\lambda^{2}\mathbf 1_{\{|\lambda|\le n\}}\,dE_{A,y}=\|A_{n}y\|^{2}=\|A_{n}f(B)x\|^{2}=\|f(B)A_{n}x\|^{2}\le\|f(B)\|^{2}\|A_{n}x\|^{2}\le\|f(B)\|^{2}\|Ax\|^{2},$ where the last step uses $\|A_{n}x\|\le\|Ax\|$ for $x\in D(A)$. Letting $n\to\infty$ and using monotone convergence on the left (equivalently the identities of [F3]) gives $\int\lambda^{2}\,dE_{A,y}\le\|f(B)\|^{2}\|Ax\|^{2}<\infty$, so $y\in D(A)$. [step 3.1, F1, F3, algebra]

5.1 [Clause (b), action] With $x$ and $y=f(B)x$ as in step 4.1, both $x$ and $y$ lie in $D(A)$. By [F3], $A_{n}x\to Ax$ and $A_{n}y\to Ay$. Using $A_{n}f(B)=f(B)A_{n}$ from step 4.1, $Ay=\lim_{n}A_{n}y=\lim_{n}A_{n}f(B)x=\lim_{n}f(B)A_{n}x=f(B)Ax,$ the last equality because $f(B)$ is bounded and $A_{n}x\to Ax$. Hence $Af(B)x=f(B)Ax$ for every $x\in D(A)$. Exchanging the roles of $A$ and $B$ gives the other asserted identity, since the strong commutation hypothesis is symmetric. [step 4.1, F1, F3, algebra]

6.1 [Norm limits of functions of $B$] Let $T_n$ be a sequence of bounded Borel functions of $B$ that converges in operator norm to a bounded operator $T$. By steps 4.1-5.1, for every $x\in D(A)$ one has $T_nx\in D(A)$ and $AT_nx=T_nAx$. Thus $T_nx\to Tx$ and $AT_nx=T_nAx\to T Ax$. Since the self-adjoint operator $A$ is closed, $Tx\in D(A)$ and $ATx=T Ax$. Finite bounded linear combinations are again bounded Borel functions of $B$, so the same domain and action identities hold for them. This completes (b). [step 5.1, F1, algebra]

7.1 [Clause (c), composition] Let $f$ be real-valued and bounded Borel and put $F(\Lambda):=E_{A}(f^{-1}(\Lambda))$ for Borel $\Lambda\subseteq\mathbb R$. Preimages preserve the empty set, the whole space, complements and countable unions, so $F$ is a projection-valued measure. For a complex simple $u=\sum_{i}c_{i}\mathbf 1_{D_{i}}$ the preimages $f^{-1}(D_{i})$ are pairwise disjoint, so $\int u\,dF=\sum_{i}c_{i}F(D_{i})=\sum_{i}c_{i}E_{A}(f^{-1}(D_{i}))=\int(u\circ f)\,dE_{A}$; both sides extend to bounded Borel $u$ by the uniform approximation of [F1] and [F4], giving, for every $x\in H$, the scalar identity $\int u\,dF_{x}=\int(u\circ f)\,dE_{A,x}$. Taking $u=u_{n}$ from step 4.1 and letting $n\to\infty$ with monotone convergence gives $\int\lambda^{2}\,dF_{x}=\int f^{2}\,dE_{A,x}=\|f(A)x\|^{2}<\infty$, where the last equality is [F1] for the bounded $f$; and the signed version of the same change of variables gives $\int\lambda\,dF_{x,y}=\int f\,dE_{A,x,y}=\langle f(A)x,y\rangle$ for all $x,y\in H$. Since $f$ is real-valued, the adjoint-preservation clause of [F2] gives $f(A)^{*}=\Phi_{E_{A}}(\overline f)=\Phi_{E_{A}}(f)=f(A)$, so $f(A)$ is self-adjoint, and $f(A)$ is bounded by [F1]. By the uniqueness of the spectral projection-valued measure of a self-adjoint operator in [F3], $F$ is the spectral projection-valued measure of the bounded self-adjoint operator $f(A)$. By the strong commutation hypothesis, $F(\Lambda)E_{B}(\Sigma)=E_{A}(f^{-1}(\Lambda))E_{B}(\Sigma)=E_{B}(\Sigma)E_{A}(f^{-1}(\Lambda))=E_{B}(\Sigma)F(\Lambda)$, so $(f(A),B)$ strongly commutes. Applying the same argument once more, now to the pair $(f(A),B)$ and the real-valued bounded Borel function $g$, shows that $(f(A),g(B))$ strongly commutes. This completes (c). [step 3.1, step 4.1, F1, F2, F3, F4, algebra] ∎
