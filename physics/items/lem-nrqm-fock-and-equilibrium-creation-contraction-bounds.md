---
id: lem-nrqm-fock-and-equilibrium-creation-contraction-bounds
aliases: [nrqm-fock-and-equilibrium-creation-contraction-bounds]
kind: lemma
domain: mathematics
title: "Creation contraction bounds"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, thm-riesz-representation-for-hilbert-space, cor-cauchy-schwarz-inequality-for-l-two, def-hilbert-space, def-real-and-complex-inner-product-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.2-1.4 pp. 5-11 (creation and annihilation operators, canonical commutation relations)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.4 (orthogonal sums and tensor products) and Section 0.5 (bounded operators)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space with inner product linear in the first argument
([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]), with
completed tensor powers $H^{\otimes n}$, symmetric projections $P_+^{(n)}$,
Fock space $F(H)$ and finite-particle space $F_0$ as in
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] and
[[lem-nrqm-fock-and-equilibrium-fock-sector-projections]].

(a) *Contraction map.* For every $f\in H$ and $n\ge0$ there is a unique bounded
linear map $\Psi_f^{(n)}:H^{\otimes(n+1)}\to H^{\otimes n}$ with
$$\langle\varphi,\Psi_f^{(n)}\chi\rangle=\langle f\otimes\varphi,\chi\rangle \qquad(\varphi\in H^{\otimes n},\ \chi\in H^{\otimes(n+1)})$$
([[thm-riesz-representation-for-hilbert-space]]); it satisfies
$\|\Psi_f^{(n)}\|\le\|f\|$,
$\Psi_f^{(n)}(u_1\otimes\cdots\otimes u_{n+1})=\langle u_1,f\rangle\,u_2\otimes\cdots\otimes u_{n+1}$
on elementary tensors, $\Psi_f^{(n)}(\operatorname{ran}P_+^{(n+1)})\subseteq\operatorname{ran}P_+^{(n)}$,
and the map $f\mapsto\Psi_f^{(n)}$ is conjugate-linear.

(b) *Creation and annihilation on the core.* Define, for $f\in H$ and
$\psi\in F_0$,
$$(S_+(f)\psi)_n:=\sqrt n\,P_+^{(n)}(f\otimes\psi_{n-1})\ (n\ge1),\quad (S_+(f)\psi)_0:=0,$$
$$(S_-(f)\psi)_n:=\sqrt{n+1}\,\Psi_f^{(n)}(\psi_{n+1})\ (n\ge0).$$
Then $S_+(f)\psi,S_-(f)\psi\in F_0$; $S_+(f)$ is linear in $f$ and
$S_-(f)$ is conjugate-linear in $f$; and with
$\|\psi\|_1^2:=\sum_{n}\bigl(n+1\bigr)\|\psi_n\|^2<\infty$ for $\psi\in F_0$,
$$\|S_+(f)\psi\|\le\|f\|\,\|\psi\|_1,\qquad \|S_-(f)\psi\|\le\|f\|\,\|\psi\|_1.$$

(c) *Adjoint relation.* $\langle S_+(f)\varphi,\psi\rangle=\langle\varphi,S_-(f)\psi\rangle$
for all $f\in H$ and $\varphi,\psi\in F_0$
([[def-operator-norm]], [[def-bounded-linear-operator]]).

(d) *Canonical commutation relation.* For all $f,g\in H$ and $\psi\in F_0$,
$$S_-(f)S_+(g)\psi-S_+(g)S_-(f)\psi=\langle g,f\rangle\,\psi,$$
and consequently
$$\|S_+(g)\psi\|^2=\|S_-(g)\psi\|^2+\|g\|^2\|\psi\|^2.$$

Neither $S_+(f)$ nor $S_-(f)$ is asserted to be bounded on $F(H)$, and no
physical interpretation (particle creation, radiation or measurement) is
asserted.

## Facts & Assumptions
**Given:** the complex Hilbert space $H$ with inner product linear in the first argument, completed tensor powers $H^{\otimes n}$ with symmetric projections $P_+^{(n)}$ ($n\ge1$), the Fock space $F(H)$ and its dense finite-particle subspace $F_0$, vectors $f,g,u,u_1,\dots,u_{n+1}\in H$, indices $n\ge0$, and $\varphi,\psi\in F_0$.

[F1] $F(H)$ is a Hilbert space with $\langle\psi,\varphi\rangle=\sum_n\langle\psi_n,\varphi_n\rangle$; $\psi\in F_0$ has finitely many nonzero coordinates; $F_0$ is dense ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

[F2] $\Pi_n$ is the orthogonal projection onto the vectors supported in coordinate $n$; $\|\Pi_n\|=1$; the sectors are orthogonal ([[lem-nrqm-fock-and-equilibrium-fock-sector-projections]]).

[F3] For $n\ge1$: $P_+^{(n)}$ is an orthogonal projection; every vector of $\operatorname{ran}P_+^{(n)}$ is fixed by each permutation unitary $U_\pi$ ($\pi\in S_n$), and conversely; for fixed $v$ the map $u\mapsto u\otimes v$ is linear and bounded with $\|u\otimes v\|=\|u\|\,\|v\|$ ([[lem-nrqm-composites-permutation-sector-projections]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F4] Cauchy-Schwarz in $H^{\otimes m}$ and for square-summable families ([[def-real-and-complex-inner-product-space]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F5] Riesz representation: every bounded linear functional on a Hilbert space is evaluation against a unique vector ([[thm-riesz-representation-for-hilbert-space]], [[def-bounded-linear-operator]]).




## Proof

1.1 [The contraction map] Fix $f\in H$, $n\ge0$ and $\chi\in H^{\otimes(n+1)}$. The map $\varphi\mapsto\langle f\otimes\varphi,\chi\rangle$ is linear, and by [F4] and [F3] $|\langle f\otimes\varphi,\chi\rangle|\le\|f\otimes\varphi\|\,\|\chi\|=\|f\|\,\|\varphi\|\,\|\chi\|$, so it is bounded with norm at most $\|f\|\,\|\chi\|$; by [F5] there is a unique $\Psi_f^{(n)}\chi\in H^{\otimes n}$ representing it. The assignment $\chi\mapsto\Psi_f^{(n)}\chi$ is linear (the representing vectors of $\chi\mapsto\langle f\otimes\varphi,\chi\rangle$ depend linearly on $\chi$), and $\|\Psi_f^{(n)}\chi\|=\sup_{\|\varphi\|\le1}|\langle f\otimes\varphi,\chi\rangle|\le\|f\|\,\|\chi\|$ gives $\|\Psi_f^{(n)}\|\le\|f\|$. For an elementary tensor, the tensor-product inner product and the first-linear convention give [F3, F4, F5, algebra]
$$\langle f\otimes\varphi,u_1\otimes\cdots\otimes u_{n+1}\rangle=\langle f,u_1\rangle\langle\varphi,u_2\otimes\cdots\otimes u_{n+1}\rangle=\langle\varphi,\langle u_1,f\rangle u_2\otimes\cdots\otimes u_{n+1}\rangle.$$
This equality for every $\varphi$ and uniqueness of the representing vector imply $\Psi_f^{(n)}(u_1\otimes\cdots\otimes u_{n+1})=\langle u_1,f\rangle u_2\otimes\cdots\otimes u_{n+1}$. Finally $\Psi_{cf}^{(n)}=\overline c\,\Psi_f^{(n)}$ for $c\in\mathbb C$ since $\langle u_1,cf\rangle=\bar c\,\langle u_1,f\rangle$ on elementary tensors, so $f\mapsto\Psi_f^{(n)}$ is conjugate-linear. [F3, F4, F5, algebra]

2.1 [Symmetry preservation] Let $\chi\in\operatorname{ran}P_+^{(n+1)}$ and let $\sigma\in S_n$ act on the last $n$ tensor factors by $U_{1\otimes\sigma}$; by [F3] applied to the permutation $(1,\sigma)\in S_{n+1}$ one has $U_{1\otimes\sigma}\chi=\chi$. Then for every $\varphi\in H^{\otimes n}$, $\langle\varphi,\Psi_f^{(n)}\chi\rangle=\langle f\otimes\varphi,\chi\rangle=\langle U_{1\otimes\sigma}^{-1}(f\otimes\varphi),\chi\rangle=\langle f\otimes U_{\sigma^{-1}}\varphi,\chi\rangle=\langle U_{\sigma^{-1}}\varphi,\Psi_f^{(n)}\chi\rangle=\langle\varphi,U_\sigma\Psi_f^{(n)}\chi\rangle$, the third equality because $U_{1\otimes\sigma}^{-1}=U_{1\otimes\sigma^{-1}}$ permutes only the last factors and fixes $f$. Hence $U_\sigma\Psi_f^{(n)}\chi=\Psi_f^{(n)}\chi$ for every $\sigma\in S_n$, so $\Psi_f^{(n)}\chi\in\operatorname{ran}P_+^{(n)}$ by the converse direction of [F3]. [F3, step 1.1, algebra]

2.2 [Contraction bounds] For $\psi\in F_0$, using $\|P_+^{(n)}\|\le1$ ([F3]) and the tensor norm identity of [F3], $\|S_+(f)\psi\|^2=\sum_{n\ge1}n\|P_+^{(n)}(f\otimes\psi_{n-1})\|^2\le\sum_{n\ge1}n\|f\otimes\psi_{n-1}\|^2=\|f\|^2\sum_{n\ge0}(n+1)\|\psi_n\|^2=\|f\|^2\|\psi\|_1^2$. Similarly $\|S_-(f)\psi\|^2=\sum_{n\ge0}(n+1)\|\Psi_f^{(n)}\psi_{n+1}\|^2\le\|f\|^2\sum_{n\ge0}(n+1)\|\psi_{n+1}\|^2\le\|f\|^2\|\psi\|_1^2$, where step 1.1 supplied $\|\Psi_f^{(n)}\|\le\|f\|$. [F3, step 1.1, algebra]

3.1 [The operators on the core] For $\psi\in F_0$ only finitely many coordinates are nonzero, each in the appropriate range ([F1]); by [F2] and step 2.1 all displayed expressions $(S_\pm(f)\psi)_n$ lie in $\operatorname{ran}P_+^{(n)}$ and are nonzero only for finitely many $n$, so $S_\pm(f)\psi\in F_0$. Linearity of $S_+(f)$ in $\psi$ and of $S_+(\cdot)\psi$ in $f$, and conjugate-linearity of $S_-(f)$ in $f$ from step 1.1, are immediate from the formulas. [F1, F2, step 1.1, step 2.1, algebra]

3.2 [Per-sector commutator computation] For $n\ge0$ define $A_g^{(n)}\chi:=P_+^{(n+1)}(g\otimes\chi)$ from $\operatorname{ran}P_+^{(n)}$ to $\operatorname{ran}P_+^{(n+1)}$, and for $n\ge1$ define $B_f^{(n)}\chi:=\Psi_f^{(n-1)}\chi$ from $\operatorname{ran}P_+^{(n)}$ to $\operatorname{ran}P_+^{(n-1)}$. Let $\chi=P_+^{(n)}(v_1\otimes\cdots\otimes v_n)$. Since $P_+^{(n+1)}(g\otimes\chi)=P_+^{(n+1)}(g\otimes v_1\otimes\cdots\otimes v_n)$, averaging over the $(n+1)!$ permutations and grouping by the first tensor factor gives [F3, step 1.1, step 2.1, algebra]
$$B_f^{(n+1)}A_g^{(n)}\chi=\frac1{n+1}\left(\langle g,f\rangle\chi+\sum_{j=1}^n\langle v_j,f\rangle P_+^{(n)}(g\otimes v_1\otimes\cdots\otimes\widehat{v_j}\otimes\cdots\otimes v_n)\right).$$
The same grouping over the $n!$ permutations of $\chi$ gives
$$B_f^{(n)}\chi=\frac1n\sum_{j=1}^n\langle v_j,f\rangle P_+^{(n-1)}(v_1\otimes\cdots\otimes\widehat{v_j}\otimes\cdots\otimes v_n),$$
so applying $A_g^{(n-1)}$ and multiplying by $n$ yields exactly the sum over $j$ in the preceding display. Therefore $(n+1)B_f^{(n+1)}A_g^{(n)}\chi-nA_g^{(n-1)}B_f^{(n)}\chi=\langle g,f\rangle\chi$. The maps in this identity are bounded by step 1.1 and contractivity of $P_+^{(m)}$ ([F3]); the displayed $\chi$ have dense span in $\operatorname{ran}P_+^{(n)}$ ([F3]), so the identity extends to every vector in that sector. For the vacuum scalar $c\in\mathbb C$, $\Psi_f^{(0)}P_+^{(1)}(g\otimes c)=\langle g,f\rangle c$ and the annihilation-then-creation term vanishes, so the commutator identity also holds at $n=0$. [F3, step 1.1, step 2.1, algebra]

4.1 [Adjoint relation] Let $\varphi,\psi\in F_0$. Using the definition of $S_+$ and the self-adjointness of $P_+^{(n+1)}$, and the fact that $\psi_{n+1}\in\operatorname{ran}P_+^{(n+1)}$, $\langle S_+(f)\varphi,\psi\rangle=\sum_{n\ge0}\sqrt{n+1}\langle P_+^{(n+1)}(f\otimes\varphi_n),\psi_{n+1}\rangle=\sum_{n\ge0}\sqrt{n+1}\langle f\otimes\varphi_n,\psi_{n+1}\rangle$. By the defining property of $\Psi_f^{(n)}$ in step 1.1 this equals $\sum_{n\ge0}\sqrt{n+1}\langle\varphi_n,\Psi_f^{(n)}\psi_{n+1}\rangle=\langle\varphi,S_-(f)\psi\rangle$, both sums being finite. [F1, step 1.1, step 3.1, algebra]

4.2 [Canonical commutation relation] Let $f,g\in H$ and $\psi\in F_0$. For $n\ge1$, the definitions of $S_\pm$ and step 3.2 give $\bigl(S_-(f)S_+(g)\psi\bigr)_n=(n+1)B_f^{(n+1)}A_g^{(n)}\psi_n$ and $\bigl(S_+(g)S_-(f)\psi\bigr)_n=nA_g^{(n-1)}B_f^{(n)}\psi_n$. For $n=0$, the first composition is $\Psi_f^{(0)}P_+^{(1)}(g\otimes\psi_0)=\langle g,f\rangle\psi_0$ and the second is zero. Thus each coordinate of the difference is $\langle g,f\rangle\psi_n$; all coordinates outside a finite set vanish, so the two sides agree. [step 3.1, step 3.2, algebra]

5.1 [The norm identity] Let $g\in H$ and $\psi\in F_0$. Taking the inner product of the commutation relation of step 4.2 (with $f=g$) with $\psi$ gives $\langle S_-(g)S_+(g)\psi,\psi\rangle-\langle S_+(g)S_-(g)\psi,\psi\rangle=\|g\|^2\|\psi\|^2$. By the adjoint relation of step 4.1, $\langle S_-(g)S_+(g)\psi,\psi\rangle=\langle S_+(g)\psi,S_+(g)\psi\rangle=\|S_+(g)\psi\|^2$ and $\langle S_+(g)S_-(g)\psi,\psi\rangle=\langle S_-(g)\psi,S_-(g)\psi\rangle=\|S_-(g)\psi\|^2$; hence $\|S_+(g)\psi\|^2=\|S_-(g)\psi\|^2+\|g\|^2\|\psi\|^2$. This completes the proof of (a)-(d). [step 4.1, step 4.2, algebra] ∎

