---
id: thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction
aliases: [nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]
kind: theorem
domain: mathematics
title: "Hilbert direct-sum construction"
status: published
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, def-hilbert-space, def-real-and-complex-inner-product-space, def-completion-of-a-normed-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-separable-space, def-dense-top, thm-cauchy-schwarz-in-an-inner-product-space, def-series-and-absolute-convergence-in-a-normed-space, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-densely-defined-closed-and-closable-operator, def-unbounded-linear-operator-domain-and-graph, def-bounded-linear-operator, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-completion-of-a-normed-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-separable-space: mathematical-premise
  def-dense-top: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-series-and-absolute-convergence-in-a-normed-space: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Sections 1.1-1.2 pp. 3-6 (occupation-number representation and Fock space)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 1 (Hilbert spaces, orthonormal bases, direct sums)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert
space with inner product linear in the first argument
([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]). Let
$H^{\otimes 0}:=\mathbb C$, $H^{\otimes 1}:=H$ and
$H^{\otimes(n+1)}:=H^{\otimes n}\widehat\otimes H$ be the completed tensor
powers with elementary tensors $u_1\otimes\cdots\otimes u_n$
([[lem-nrqm-composites-hilbert-tensor-construction]]); for $n\ge 1$ let
$P_+^{(n)}\in\mathcal B(H^{\otimes n})$ be the symmetric projection of
[[lem-nrqm-composites-permutation-sector-projections]] and set
$P_+^{(0)}:=\mathrm{id}_{\mathbb C}$. Write $\operatorname{ran}P_+^{(n)}$ for
its range and define

$$F(H):=\Bigl\{\psi=(\psi_n)_{n\in\mathbb N}:\ \psi_n\in\operatorname{ran}P_+^{(n)}\ \text{for all }n,\ \sum_{n\in\mathbb N}\|\psi_n\|^2<\infty\Bigr\}.$$

Then:

(a) for $\psi,\varphi\in F(H)$ the scalar series
$\sum_{n\in\mathbb N}\langle\psi_n,\varphi_n\rangle$ converges absolutely and
defines a sesquilinear form, linear in the first argument, with respect to
which $F(H)$ is a complex vector space with inner product
$\langle\psi,\varphi\rangle:=\sum_{n\in\mathbb N}\langle\psi_n,\varphi_n\rangle$
([[thm-cauchy-schwarz-in-an-inner-product-space]],
[[def-series-and-absolute-convergence-in-a-normed-space]]);

(b) $(F(H),\langle\cdot,\cdot\rangle)$ is a Hilbert space, i.e. the induced norm
is complete ([[def-hilbert-space]]);

(c) the vacuum vector $\Omega:=(1,0,0,\dots)$ satisfies $\|\Omega\|=1$, and the
finite-particle space
$F_0:=\{\psi\in F(H):\psi_n=0\ \text{for all but finitely many }n\}$ is a dense
linear subspace of $F(H)$ ([[def-dense-top]]);

(d) for every $n$ the map
$\iota_n:\operatorname{ran}P_+^{(n)}\to F(H)$,
$\iota_n(u):=(0,\dots,0,u,0,\dots)$ (entry in coordinate $n$) is a linear
isometry of $\operatorname{ran}P_+^{(n)}$ onto the closed subspace of vectors
supported in coordinate $n$;

(e) if $H$ admits a countable complete orthonormal family
$(e_i)_{i\in I}$, $I$ at most countable
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]),
then $F(H)$ is separable ([[def-separable-space]]);

(f) *direct sums of self-adjoint operators*: if for every $n\in\mathbb N$,
including $n=0$, a self-adjoint operator $T_n$ on the Hilbert space
$\operatorname{ran}P_+^{(n)}$ with domain
$D(T_n)\subseteq\operatorname{ran}P_+^{(n)}$ is given (so $T_0$ is a
self-adjoint operator on $\mathbb C$),
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-unbounded-linear-operator-domain-and-graph]]), and

$$D(T):=\Bigl\{\psi\in F(H):\ \psi_n\in D(T_n)\ \text{for all }n,\ \sum_{n\in\mathbb N}\|T_n\psi_n\|^2<\infty\Bigr\},\qquad (T\psi)_n:=T_n\psi_n,$$

then $T$ is self-adjoint and $D(T)$ is dense; if in addition every $T_n$ is
bounded with $\sup_{n}\|T_n\|<\infty$, then $T$ is bounded with
$\|T\|=\sup_n\|T_n\|$ ([[def-bounded-linear-operator]]).

No physical interpretation of $F(H)$, of the tensor powers or of the direct-sum
operators is asserted.

## Facts & Assumptions

**Given:** the complex Hilbert space $H$ with inner product linear in the first argument, the completed tensor powers $H^{\otimes n}$ with symmetric projections $P_+^{(n)}$, the set $F(H)$, vectors $\psi,\varphi\in F(H)$, and, in part (f), self-adjoint operators $T_n$ on $\operatorname{ran}P_+^{(n)}$.

[F1] For every $n\in\mathbb N$, $P_+^{(n)}$ is an orthogonal projection (with $P_+^{(0)}=\mathrm{id}_{\mathbb C}$), so $\operatorname{ran}P_+^{(n)}$ is a closed linear subspace of the complete space $H^{\otimes n}$; for fixed $v\in H^{\otimes m}$ the map $u\mapsto u\otimes v$ is linear and bounded ([[lem-nrqm-composites-permutation-sector-projections]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] Cauchy-Schwarz holds in each sector by [[thm-cauchy-schwarz-in-an-inner-product-space]]. For square-summable scalar sequences, apply that theorem to the finite nonnegative real vectors $(|a_0|,\ldots,|a_N|)$ and $(|b_0|,\ldots,|b_N|)$ in $\mathbb R^{N+1}$ with inner product $\langle a,b\rangle:=\sum_{n=0}^Na_nb_n$, then let $N\to\infty$ in the nonnegative partial sums; this gives $\sum_n|a_nb_n|\le\bigl(\sum_n|a_n|^2\bigr)^{1/2}\bigl(\sum_n|b_n|^2\bigr)^{1/2}$.

[F3] A self-adjoint operator is closed and symmetric; a densely defined symmetric operator $S$ satisfies $S\subseteq S^*$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-densely-defined-closed-and-closable-operator]]).

[F4] A subset $A$ of a normed space is dense exactly when every vector is the norm limit of a sequence from $A$ ([[def-dense-top]]).



## Proof

1.1 [Absolutely convergent pairing] Let $\psi,\varphi\in F(H)$. Coordinatewise addition preserves the defining square-summability because $\|\psi_n+\varphi_n\|^2\le2\|\psi_n\|^2+2\|\varphi_n\|^2$, and scalar multiplication does as well, so $F(H)$ is a complex vector space. By [F2] with $a_n:=\|\psi_n\|$, $b_n:=\|\varphi_n\|$, $\sum_n|\langle\psi_n,\varphi_n\rangle|\le\sum_n\|\psi_n\|\,\|\varphi_n\|\le\bigl(\sum_n\|\psi_n\|^2\bigr)^{1/2}\bigl(\sum_n\|\varphi_n\|^2\bigr)^{1/2}=\|\psi\|\,\|\varphi\|<\infty$, so the series defining $\langle\psi,\varphi\rangle$ converges absolutely ([[def-series-and-absolute-convergence-in-a-normed-space]]); termwise addition and scalar multiplication give sesquilinearity and linearity in the first argument, inherited from the pairings on the $H^{\otimes n}$. If $\|\psi\|^2=\sum_n\|\psi_n\|^2=0$ then $\psi_n=0$ for every $n$, so the displayed form is positive definite and is an inner product. [F2, algebra]

1.2 [Completeness] Let $(\psi^{(k)})_k$ be a Cauchy sequence in $F(H)$ and let $\varepsilon>0$. For each $n$, $\|\psi_n^{(k)}-\psi_n^{(l)}\|\le\|\psi^{(k)}-\psi^{(l)}\|$, so $(\psi_n^{(k)})_k$ is Cauchy in the complete space $H^{\otimes n}$ ([F1]) and converges to some $\psi_n\in H^{\otimes n}$; since $\operatorname{ran}P_+^{(n)}$ is closed, $\psi_n\in\operatorname{ran}P_+^{(n)}$ ([F1]). Choose $K$ with $\|\psi^{(k)}-\psi^{(m)}\|\le\varepsilon$ for $k,m\ge K$. Fix $k\ge K$. For every finite $N$, $\sum_{n\le N}\|\psi_n\|^2\le2\sum_{n\le N}\|\psi_n^{(k)}\|^2+2\sum_{n\le N}\|\psi_n-\psi_n^{(k)}\|^2\le2\|\psi^{(k)}\|^2+2\varepsilon^2$, where the last term uses the limit as $m\to\infty$ in $\sum_{n\le N}\|\psi_n^{(m)}-\psi_n^{(k)}\|^2\le\varepsilon^2$. Taking the supremum over finite $N$ shows $\psi=(\psi_n)_n\in F(H)$. Also, for each $k\ge K$ and finite $N$, $\sum_{n\le N}\|\psi_n^{(k)}-\psi_n\|^2\le\varepsilon^2$ by letting $m\to\infty$ in $\sum_{n\le N}\|\psi_n^{(k)}-\psi_n^{(m)}\|^2\le\varepsilon^2$; taking the supremum gives $\|\psi^{(k)}-\psi\|\le\varepsilon$. Thus $\psi^{(k)}\to\psi$ and $F(H)$ is complete, proving (b). [F1, algebra]

1.3 [Vacuum, density and embeddings] The vacuum has $\|\Omega\|=|1|=1$. For $\psi\in F(H)$ the truncations $\psi^{(N)}:=(\psi_0,\dots,\psi_N,0,0,\dots)\in F_0$ satisfy $\|\psi-\psi^{(N)}\|^2=\sum_{n>N}\|\psi_n\|^2\to0$, so $F_0$ is dense by [F4]; $F_0$ is a linear subspace because each $\operatorname{ran}P_+^{(n)}$ is one ([F1]). Each $\iota_n$ is linear and $\|\iota_n(u)\|^2=\|u\|^2$, and its range is the set of vectors supported in coordinate $n$, a closed subspace identified isometrically with $\operatorname{ran}P_+^{(n)}$. [F1, F4, algebra]

1.4 [The direct sum is closed] Let $(T_n)$ be as in (f) and let $(\psi^{(k)})_k\subseteq D(T)$ with $\psi^{(k)}\to\psi$ and $T\psi^{(k)}\to\eta$ in $F(H)$. For each $n$, $\psi_n^{(k)}\to\psi_n$ and $T_n\psi_n^{(k)}=(T\psi^{(k)})_n\to\eta_n$; since $T_n$ is self-adjoint, hence closed ([F3]), $\psi_n\in D(T_n)$ and $T_n\psi_n=\eta_n$. For every finite $N$, continuity of the norm and the finite sum give $\sum_{n\le N}\|T_n\psi_n\|^2=\lim_k\sum_{n\le N}\|T_n\psi_n^{(k)}\|^2\le\lim_k\|T\psi^{(k)}\|^2=\|\eta\|^2$. Taking the supremum over finite partial sums shows $\sum_n\|T_n\psi_n\|^2\le\|\eta\|^2<\infty$, so $\psi\in D(T)$ and $T\psi=\eta$; thus $T$ is closed. It is symmetric because for $\psi,\varphi\in D(T)$ the middle series below converges absolutely by [F2] applied to the square-summable families $(\|T_n\psi_n\|)_n$, $(\|\varphi_n\|)_n$ and $(\|T_n\varphi_n\|)_n$: $\langle T\psi,\varphi\rangle=\sum_n\langle T_n\psi_n,\varphi_n\rangle=\sum_n\langle\psi_n,T_n\varphi_n\rangle=\langle\psi,T\varphi\rangle$. [F2, F3, algebra]

1.5 [Density of the direct-sum domain] Let $\psi\in F(H)$ and $\varepsilon>0$. Choose $N$ so that $\sum_{n>N}\|\psi_n\|^2<\varepsilon^2/4$. For each of the finitely many $n\le N$, the self-adjoint operator $T_n$ is densely defined, so choose $\varphi_n\in D(T_n)$ with $\|\varphi_n-\psi_n\|<\varepsilon/(2\sqrt{N+1})$; put $\varphi_n=0$ for $n>N$. The vector $\varphi$ belongs to $D(T)$ because it has finite support and every retained coordinate belongs to its operator domain. Moreover, $\|\varphi-\psi\|^2=\sum_{n\le N}\|\varphi_n-\psi_n\|^2+\sum_{n>N}\|\psi_n\|^2<\varepsilon^2/2<\varepsilon^2$. Thus $D(T)$ is dense in $F(H)$. [F3, algebra]

2.1 [The adjoint is the same diagonal sum] Let $\varphi\in D(T^*)$ with $C:=\|T^*\varphi\|$, so $|\langle T\psi,\varphi\rangle|\le C\|\psi\|$ for all $\psi\in D(T)$. Testing with $\psi$ supported in a single coordinate $n$ shows that the functional $\psi_n\mapsto\langle T_n\psi_n,\varphi_n\rangle$ on the dense domain $D(T_n)$ is bounded by $C\|\psi_n\|$; hence $\varphi_n\in D(T_n^*)=D(T_n)$ and $T_n\varphi_n=(T^*\varphi)_n$. Since $T^*\varphi\in F(H)$, the coordinate identity gives $\sum_n\|T_n\varphi_n\|^2=\|T^*\varphi\|^2<\infty$. Therefore $D(T^*)\subseteq D(T)$ and $T^*\varphi=T\varphi$; with $T\subseteq T^*$ from step 1.4, $T=T^*$ is self-adjoint, and $D(T)$ is dense by step 1.5. If every $T_n$ is bounded by $M:=\sup_n\|T_n\|<\infty$, then $\|T\psi\|^2=\sum_n\|T_n\psi_n\|^2\le M^2\|\psi\|^2$ for every $\psi\in F(H)$ and testing on unit vectors in individual nonzero sectors where $\|T_n\|$ approaches $M$ gives the reverse inequality. [F2, F3, step 1.4, step 1.5, algebra]

3.1 [Separability] Assume $(e_i)_{i\in I}$ is a complete orthonormal family of $H$ with $I$ at most countable. For $n\ge1$ the elementary tensors $e_{i_1}\otimes\cdots\otimes e_{i_n}$, $(i_1,\dots,i_n)\in I^n$, have dense linear span in $H^{\otimes n}$ by the product-bases statement of [[lem-nrqm-composites-hilbert-tensor-construction]]; since $P_+^{(n)}$ is bounded, the image $P_+^{(n)}$ of a dense set is dense in $\operatorname{ran}P_+^{(n)}$ (given $u=P_+^{(n)}u$ in the range and approximants $v_j\to u$, continuity gives $P_+^{(n)}v_j\to u$). Hence the at most countable set $D:=\{\iota_n(P_+^{(n)}(e_{i_1}\otimes\cdots\otimes e_{i_n})):n\ge1,\ i_1,\dots,i_n\in I\}\cup\{\Omega\}$ has dense span in $F(H)$: any $\psi\in F(H)$ is the limit of its truncations, and each $\psi_n$ is approximated in $\operatorname{ran}P_+^{(n)}$ by finite combinations from $D$. A normed space with a countable set whose finite linear combinations are dense is separable. [F1, step 1.3, algebra] ∎

