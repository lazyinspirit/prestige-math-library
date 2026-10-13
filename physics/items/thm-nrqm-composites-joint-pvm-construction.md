---
id: thm-nrqm-composites-joint-pvm-construction
aliases: [nrqm-composites-joint-pvm-construction]
kind: theorem
domain: mathematics
title: "Joint PVM construction for strongly commuting regular projection-valued measures"
status: draft
origin: pipeline
dependency_level: 0
deps:
  [
    def-projection-valued-measure,
    lem-scalar-and-complex-measures-from-a-pvm,
    def-premeasure-on-an-algebra,
    cor-premeasure-induced-set-function-is-an-outer-measure,
    thm-caratheodory-outer-measure-theorem,
    lem-induced-outer-measure-agrees-with-premeasure,
    lem-source-algebra-is-caratheodory-measurable,
    cor-finite-premeasure-extension-is-unique,
    lem-finite-measure-uniqueness-on-a-pi-system,
    thm-dynkin-pi-lambda,
    def-measurable-rectangle,
    def-pi-system,
    def-product-sigma-algebra-and-finite-product-sigma-algebras,
    thm-borel-products-of-euclidean-spaces-are-euclidean-borel,
    thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact,
    thm-riesz-representation-for-hilbert-space,
    def-hilbert-orthogonal-projection,
    lem-orthogonal-projection-is-linear-self-adjoint-contractive,
    def-borel-sigma-algebra,
    def-hilbert-space,
    def-countable-choice,
  ]
dependency_roles:
  def-projection-valued-measure: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  def-premeasure-on-an-algebra: mathematical-premise
  cor-premeasure-induced-set-function-is-an-outer-measure: mathematical-premise
  thm-caratheodory-outer-measure-theorem: mathematical-premise
  lem-induced-outer-measure-agrees-with-premeasure: mathematical-premise
  lem-source-algebra-is-caratheodory-measurable: mathematical-premise
  cor-finite-premeasure-extension-is-unique: mathematical-premise
  lem-finite-measure-uniqueness-on-a-pi-system: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
  def-measurable-rectangle: mathematical-premise
  def-pi-system: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Thm 3.1-3.2 pp. 90-92 (projection-valued measures and Borel calculus)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "A. W. Knapp, Advanced Real Analysis, Ch. II-III (Carathéodory extension, measure uniqueness and regularity)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]) and let $E,F$ be **regular** projection-valued measures on the Borel $\sigma$-algebra of $\mathbb R$ ([[def-projection-valued-measure]], [[def-borel-sigma-algebra]]) satisfying the strong commutation relation

$$E(B)F(C)=F(C)E(B)\qquad\text{for all Borel }B,C\subseteq\mathbb R .$$

Then there is a unique regular projection-valued measure $G$ on the Borel $\sigma$-algebra of $\mathbb R^2$ with

$$G(B\times C)=E(B)F(C)\qquad\text{for every Borel rectangle }B\times C,$$

where rectangle means a measurable rectangle in the sense of [[def-measurable-rectangle]]. Its marginals are $G(B\times\mathbb R)=E(B)$ and $G(\mathbb R\times C)=F(C)$.

For the scalar construction, let $\mathcal A_0$ be the algebra of finite unions of Borel rectangles, and define $P_0(\bigsqcup_{i=1}^n B_i\times C_i):=\sum_{i=1}^nE(B_i)F(C_i)$ on disjoint rectangular decompositions. For every $\psi\in H$, $\mu_\psi(A):=\langle P_0(A)\psi,\psi\rangle$ is a finite premeasure on $\mathcal A_0$ and has a unique extension $G_\psi=\langle G(\cdot)\psi,\psi\rangle$ to the Borel $\sigma$-algebra. For $x,y\in H$, define the polarized measure $\nu_{x,y}:=\frac14\sum_{k=0}^3 i^kG_{x+i^ky}$. Then every Borel $S\subseteq\mathbb R^2$ has a unique bounded operator $G(S)$ satisfying $\langle G(S)x,y\rangle=\nu_{x,y}(S)$ for all $x,y\in H$, and $0\le G(S)\le I$.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; regular PVMs $E,F$ on $\mathcal B(\mathbb R)$ with $E(B)F(C)=F(C)E(B)$; the algebra $\mathcal A_0$ of finite unions of measurable rectangles in $\mathbb R^2$.

[F1] A PVM is a map into orthogonal projections with $E(\varnothing)=0$, $E(\mathbb R)=I$, $E(B\cap C)=E(B)E(C)$ and strong countable additivity; regularity means every scalar measure $E_x(B)=\langle E(B)x,x\rangle$ is a regular Borel measure. For an orthogonal projection $P$ one has $\langle Px,x\rangle=\|Px\|^2\ge0$ ([[def-projection-valued-measure]], [[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[F2] For a PVM, $E_x(B)=\langle E(B)x,x\rangle$ is a positive measure with $E_x(\mathbb R)=\|x\|^2$; the polarized $E_{x,y}(B)=\langle E(B)x,y\rangle$ is a finite complex measure with $E_{y,x}=\overline{E_{x,y}}$, $|E_{x,y}(B)|\le\|x\|\,\|y\|$ and the polarization identity $E_{x,y}=\frac14\sum_{k=0}^3i^kE_{x+i^ky}$ ([[lem-scalar-and-complex-measures-from-a-pvm]]).

[F3] A premeasure on an algebra is finitely additive and countably additive on disjoint families whose union lies in the algebra; the outer set function it induces is an outer measure under $\mathrm{AC}_\omega$, the Carathéodory $\sigma$-algebra carries the extended measure, the source algebra consists of Carathéodory measurable sets, the extension agrees with the premeasure on the source algebra, and a **finite** premeasure has at most one extension to the generated $\sigma$-algebra ([[def-premeasure-on-an-algebra]], [[cor-premeasure-induced-set-function-is-an-outer-measure]], [[thm-caratheodory-outer-measure-theorem]], [[lem-induced-outer-measure-agrees-with-premeasure]], [[lem-source-algebra-is-caratheodory-measurable]], [[cor-finite-premeasure-extension-is-unique]]).

[F4] Finite positive measures agreeing on a $\pi$-system that generates a $\sigma$-algebra and having equal total mass agree everywhere on it ([[lem-finite-measure-uniqueness-on-a-pi-system]], [[def-pi-system]]).

[F5] The $\sigma$-algebra generated by the measurable rectangles of $\mathcal B(\mathbb R)\times\mathcal B(\mathbb R)$ is the product $\sigma$-algebra, and $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^2)$ ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F6] Every finite Borel measure on $\mathbb R^2$ is regular once every open subset of $\mathbb R^2$ is $\sigma$-compact ([[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]]). This topological hypothesis holds: for an open proper $U\subsetneq\mathbb R^2$, the compact sets $K_n=\{x\in[-n,n]^2:\operatorname{dist}(x,\mathbb R^2\setminus U)\ge1/n\}$ cover $U$; for $U=\mathbb R^2$, the squares $[-n,n]^2$ cover it.

[F7] For a bounded sesquilinear form on a Hilbert space there is a unique bounded operator representing it; equivalently, bounded linear functionals are represented by vectors ([[thm-riesz-representation-for-hilbert-space]]).

[F8] If $\mathcal P$ is a $\pi$-system and $\mathcal D$ is a $\lambda$-system containing $\mathcal P$, then $\mathcal D$ contains the $\sigma$-algebra generated by $\mathcal P$ ([[thm-dynkin-pi-lambda]]).

## Proof

1.1 [The finitely additive projection on the rectangle algebra] For a finite disjoint union $A=\bigsqcup_{i=1}^n(B_i\times C_i)$ of measurable rectangles put $P(A):=\sum_iE(B_i)F(C_i)$. This is well defined: two finite rectangle decompositions have a common refinement into disjoint rectangles (intersections of the pieces), and on a common refinement both sums agree by additivity of $E$ and $F$; in particular $P(\varnothing)=0$ and $P(\mathbb R^2)=I$. Each $E(B_i)F(C_i)$ is an orthogonal projection because $(E(B_i)F(C_i))^2=E(B_i)^2F(C_i)^2=E(B_i)F(C_i)$ and $(E(B_i)F(C_i))^*=F(C_i)E(B_i)=E(B_i)F(C_i)$ by [F1] and strong commutation; summands belonging to disjoint rectangles are orthogonal, since $E(B_i)F(C_i)E(B_j)F(C_j)=E(B_i\cap B_j)F(C_i\cap C_j)=0$. Hence $P(A)$ is a sum of pairwise orthogonal projections, so $P(A)^2=P(A)=P(A)^*$; and from the refinement description $P$ is finitely additive on disjoint unions, $P(A\cap A')=P(A)P(A')$ and $P(A\cup A')=P(A)+P(A')$ for disjoint $A,A'\in\mathcal A_0$. [given, F1, algebra]

1.2 [Uniqueness for finite complex measures] Let $\mu,\nu$ be finite complex measures on $\mathcal B(\mathbb R^2)$ that agree on $\mathcal A_0$, which contains $\mathbb R^2$. Then $\mathcal D:=\{S\in\mathcal B(\mathbb R^2):\mu(S)=\nu(S)\}$ contains $\mathbb R^2$ and the $\pi$-system $\mathcal A_0$; it is a $\lambda$-system because equality on the whole space gives closure under complements and countable additivity gives closure under disjoint countable unions. By Dynkin's $\pi$-$\lambda$ theorem [F8], $\mathcal D$ contains $\sigma(\mathcal A_0)=\mathcal B(\mathbb R^2)$ by [F5], so $\mu=\nu$ on every Borel set. [F5, F8, algebra]

2.1 [The scalar set functions are premeasures] For $\psi\in H$ define $\mu_\psi(A):=\langle P(A)\psi,\psi\rangle=\|P(A)\psi\|^2$ for $A\in\mathcal A_0$; by step 1.1, $\mu_\psi(\varnothing)=0$, $\mu_\psi$ is finitely additive, and $\mu_\psi\le\|\psi\|^2$. To verify countable additivity, fix pairwise disjoint $A_n\in\mathcal A_0$ with union $A\in\mathcal A_0$ and put $R_N:=A\setminus\bigcup_{n\le N}A_n\in\mathcal A_0$. Finite additivity gives $\mu_\psi(A)=\sum_{n\le N}\mu_\psi(A_n)+\mu_\psi(R_N)$, and $R_N\downarrow\varnothing$, so continuity from above at $\varnothing$ implies $\mu_\psi(A)=\sum_n\mu_\psi(A_n)$. It remains to prove that continuity: for $A_n\downarrow\varnothing$ in $\mathcal A_0$, show $\mu_\psi(A_n)\to0$. Given $\varepsilon>0$, approximate each $A_n$ from inside by a compact union of rectangles: for a rectangle $B\times C$ one has $P(B\times C)-P(K_B\times K_C)=E(B\setminus K_B)F(C)+E(K_B)F(C\setminus K_C)$ with the two summands orthogonal, so $\mu_\psi(B\times C)-\mu_\psi(K_B\times K_C)\le E_\psi(B\setminus K_B)+F_\psi(C\setminus K_C)$ for $E_\psi(B)=\langle E(B)\psi,\psi\rangle$, $F_\psi(C)=\langle F(C)\psi,\psi\rangle$; by regularity [F1] compact $K_B\subseteq B$, $K_C\subseteq C$ make this arbitrarily small, and finite unions are handled by summing. Choose compact $L_n\subseteq A_n$ with $\mu_\psi(A_n\setminus L_n)<\varepsilon2^{-n}$. If $\mu_\psi(A_n)\ge\varepsilon$ for all $n$, then for every $N$ additivity and $L_1\cap\dots\cap L_N\supseteq A_N\setminus\bigcup_{n\le N}(A_n\setminus L_n)$ give $\mu_\psi(L_1\cap\dots\cap L_N)\ge\mu_\psi(A_N)-\sum_{n\le N}\mu_\psi(A_n\setminus L_n)\ge\varepsilon-\sum_{n\le N}\varepsilon2^{-n}>0$; hence every finite intersection $L_1\cap\dots\cap L_N$ is nonempty, and compactness gives a point of $\bigcap_nL_n\subseteq\bigcap_nA_n=\varnothing$, a contradiction. Thus $\mu_\psi(A_n)\to0$, and $\mu_\psi$ is a finite premeasure on $\mathcal A_0$. [step 1.1, F1, F3, algebra]

3.1 [Carathéodory extension and polarization] By steps 1.1 and 2.1 the algebra $\mathcal A_0$ of finite unions of measurable rectangles is a $\pi$-system containing $\mathbb R^2$ and generates $\mathcal B(\mathbb R^2)$ by [F5]; hence $\mu_\psi$ extends to a finite measure $\nu_\psi$ on $\mathcal B(\mathbb R^2)$, unique by [F3], and $\nu_\psi(S)=\mu_\psi(S)$ for $S\in\mathcal A_0$. Uniqueness also extends the scalar homogeneity $\nu_{\alpha x}=|\alpha|^2\nu_x$ and the parallelogram identity from $\mathcal A_0$ to every Borel set: the corresponding finite positive measures agree on $\mathcal A_0$ and have the same total mass. For $x,y\in H$ define $\nu_{x,y}(S):=\frac14\sum_{k=0}^3i^k\nu_{x+i^ky}(S)$; this is a finite complex measure and for $S\in\mathcal A_0$ it coincides with $\langle P(S)x,y\rangle$ by the polarization identity [F2]. The scalar homogeneity and parallelogram identity imply, by expansion of the four polarization terms, that $(x,y)\mapsto\nu_{x,y}(S)$ is sesquilinear and Hermitian for every Borel $S$, with $\nu_{x,x}(S)=\nu_x(S)\ge0$. Positivity gives Cauchy–Schwarz for this form (apply $0\le\nu_{x+\lambda y}(S)$ for all $\lambda\in\mathbb C$), so $|\nu_{x,y}(S)|\le\nu_x(S)^{1/2}\nu_y(S)^{1/2}\le\|x\|\,\|y\|$. [step 1.1, step 2.1, F2, F3, F4, F5, algebra]

4.1 [The operators $G(S)$] Fix a Borel $S\subseteq\mathbb R^2$. For fixed $x$, the map $y\mapsto\overline{\nu_{x,y}(S)}$ is a bounded linear functional of norm at most $\|x\|$ by step 3.1, so by [F7] there is a unique $G(S)x\in H$ with $\overline{\nu_{x,y}(S)}=\langle y,G(S)x\rangle$, that is $\nu_{x,y}(S)=\langle G(S)x,y\rangle$, and $\|G(S)x\|\le\|x\|$. The assignment $x\mapsto G(S)x$ is linear because the form is linear in its first argument and the representative is unique, so $G(S)\in\mathcal B(H)$ with $\|G(S)\|\le1$; moreover $\langle G(S)x,y\rangle=\nu_{x,y}(S)=\overline{\nu_{y,x}(S)}=\overline{\langle G(S)y,x\rangle}=\langle x,G(S)y\rangle$, so $G(S)$ is self-adjoint, and $\langle G(S)x,x\rangle=\nu_x(S)\in[0,\|x\|^2]$ gives $0\le G(S)\le I$. For every $A\in\mathcal A_0$, step 3.1 gives $\nu_{x,y}(A)=\langle P(A)x,y\rangle$, so the defining pairings imply $G(A)=P(A)$; in particular $G(B\times C)=E(B)F(C)$. [step 3.1, F7, algebra]

5.1 [Multiplicativity and the PVM axioms] First observe that for arbitrary Borel $S$ and rectangle $R=B'\times C'$, for every $x,y$ the scalar set functions $S'\mapsto\langle G(S'\cap R)x,y\rangle=\nu_{x,y}(S'\cap R)$ and $S'\mapsto\langle G(S')G(R)x,y\rangle=\nu_{G(R)x,y}(S')$ are finite complex measures; they agree on rectangles $S'=B\times C$ because $G(S'\cap R)=E(B\cap B')F(C\cap C')=E(B)E(B')F(C)F(C')=E(B)F(C)E(B')F(C')=G(S')G(R)$ by [F1] and the commutation hypothesis, and they agree on $\mathbb R^2$ since each value is $G(R)$. By step 1.2 [F8], these scalar measures agree on all Borel $S'$, so $G(S'\cap R)=G(S')G(R)$ for all Borel $S'$. Now fix arbitrary Borel $S$ and compare, for every $x,y$, the finite complex measures $T\mapsto\langle G(S\cap T)x,y\rangle=\nu_{x,y}(S\cap T)$ and $T\mapsto\langle G(S)G(T)x,y\rangle=\nu_{x,G(S)y}(T)$; by the previous result they agree on every rectangle $T$, and by step 1.2 [F8] they agree for all Borel $T$. Taking $S=T$ yields $G(S)^2=G(S)$, so every $G(S)$ is an orthogonal projection; $G(\varnothing)=0$ and $G(\mathbb R^2)=I$ follow from the rectangle values. Strong countable additivity holds because for pairwise disjoint $S_n$ with union $S$ the scalar measures satisfy $\nu_x(S)=\sum_n\nu_x(S_n)$, so $\sum_n\|G(S_n)x\|^2=\sum_n\nu_{x}(S_n)=\nu_x(S)\le\|x\|^2<\infty$ and the orthogonal series $\sum_nG(S_n)x$ converges in norm to a vector whose pairings with every $y$ equal $\sum_n\nu_{x,y}(S_n)=\nu_{x,y}(S)=\langle G(S)x,y\rangle$, hence to $G(S)x$. Finally the scalar measures of $G$ are the $\nu_\psi$, finite Borel measures on $\mathbb R^2$ and hence regular by [F6]; so $G$ is a regular PVM with $G(B\times C)=E(B)F(C)$. [step 1.1, step 1.2, step 4.1, F1, F2, F6, F8, algebra]

6.1 [Marginals and uniqueness] For the marginal, $G(B\times\mathbb R)=E(B)F(\mathbb R)=E(B)$ and $G(\mathbb R\times C)=F(C)$ by [F1]. If $G'$ is another regular PVM with $G'(B\times C)=E(B)F(C)$, then for every $x,y$ the finite complex measures $S\mapsto\langle G'(S)x,y\rangle$ and $\nu_{x,y}$ agree on rectangles, including $\mathbb R^2$, so step 1.2 [F8] gives their equality on $\mathcal B(\mathbb R^2)$. Taking $y=G'(S)x-G(S)x$ gives $G'(S)=G(S)$ for every Borel $S$. Hence $G$ is unique, completing the proof. [step 5.1, step 1.2, F1, F2, F8, algebra] ∎
