---
id: thm-nrqm-identical-particles-occupation-number-basis
aliases: [nrqm-identical-particles-occupation-number-basis]
kind: theorem
domain: mathematics
title: "Slater and symmetric occupation-number bases of the finite-dimensional permutation sectors"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, def-determinant-of-a-square-matrix, def-binomial-coefficient, thm-binomial-closed-formula, thm-stars-and-bars, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-space, def-hilbert-space-adjoint, def-bounded-linear-operator, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-binomial-coefficient: mathematical-premise
  thm-binomial-closed-formula: mathematical-premise
  thm-stars-and-bars: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1 printed pages 226-230 (PDF pages 234-238): antisymmetric two-fermion states, exclusion, and the expansion of a pair state over single-particle states"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 1-10: Slater determinants and the occupation-number description of antisymmetric and symmetric states; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Sections 1.1-1.4 pp. 3-11: occupation-number representation, Fock sectors and Slater determinants"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space of finite dimension $d\ge1$ with orthonormal basis
$(e_1,\dots,e_d)$ ([[def-hilbert-space]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). Let
$H^{\otimes n}$ be the $n$-fold completed tensor power with
$H^{\otimes0}:=\mathbb C$, $H^{\otimes1}:=H$ and
$H^{\otimes(k+1)}:=H^{\otimes k}\widehat\otimes H$
([[lem-nrqm-composites-hilbert-tensor-construction]]), and let
$P_\pm^{(n)}\in\mathcal B(H^{\otimes n})$, $n\ge1$, be the permutation
projections of [[lem-nrqm-composites-permutation-sector-projections]]. For a
multi-index $i=(i_1,\dots,i_n)\in\{1,\dots,d\}^n$ write
$$e_i:=e_{i_1}\otimes\cdots\otimes e_{i_n},\qquad |i|_j:=\#\{k:i_k=j\}\ (j=1,\dots,d).$$
For $J\subseteq\{1,\dots,d\}$ with $|J|=n$, written $J=\{j_1<\cdots<j_n\}$, put
$$e_J^\wedge:=\frac1{\sqrt{n!}}\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\, e_{j_{\sigma(1)}}\otimes\cdots\otimes e_{j_{\sigma(n)}},$$
and for $\lambda\in W(n,d):=\{\lambda\in\mathbb N^d:\sum_j\lambda_j=n\}$ put
$\operatorname{orb}(\lambda):=\{c\in\{1,\dots,d\}^n:|c|=\lambda\}$ and
$m_\lambda:=\sum_{c\in\operatorname{orb}(\lambda)}e_c$. Then:

(a) *product basis*: $(e_i)_{i\in\{1,\dots,d\}^n}$ is an orthonormal basis of
$H^{\otimes n}$, and $\dim H^{\otimes n}=d^n$;

(b) *Slater basis*: for every $J$ with $|J|=n$ one has
$e_J^\wedge=\sqrt{n!}\,P_-^{(n)}(e_{j_1}\otimes\cdots\otimes e_{j_n})$ and the
family $(e_J^\wedge)_{J\in\{1,\dots,d\}^n}$ is an orthonormal family whose
closed linear span is $\operatorname{ran}P_-^{(n)}$; it is therefore an
orthonormal basis of $\operatorname{ran}P_-^{(n)}$,
$\dim\operatorname{ran}P_-^{(n)}=\binom dn$, and
$\operatorname{ran}P_-^{(n)}=\{0\}$ when $n>d$. Moreover for every multi-index
$i$ one has $P_-^{(n)}(e_i)=0$ when two entries of $i$ coincide, and
$$P_-^{(n)}(e_i)=\operatorname{sgn}(\rho_i)\,\frac{e_J^\wedge}{\sqrt{n!}}$$
when the entries of $i$ are pairwise distinct with underlying set $J$ and
$\rho_i\in S_n$ is the unique permutation with $i_k=j_{\rho_i(k)}$;

(c) *symmetric basis*: for every $\lambda\in W(n,d)$ the vector $m_\lambda$ is
nonzero, the family $(m_\lambda)_{\lambda\in W(n,d)}$ is orthogonal,
$U_\pi m_\lambda=m_\lambda$ for every $\pi\in S_n$, and for every multi-index
$i$ there is a real number $\gamma_i>0$ with
$P_+^{(n)}(e_i)=\gamma_i\,m_{|i|}$; consequently
$\operatorname{ran}P_+^{(n)}$ is the linear span of $(m_\lambda)$, the family
$(m_\lambda)$ is an orthogonal basis of $\operatorname{ran}P_+^{(n)}$, and
$\dim\operatorname{ran}P_+^{(n)}=\binom{n+d-1}{n}$;

(d) *occupation operators*: for $j\in\{1,\dots,d\}$ the map
$$N_j:H^{\otimes n}\to H^{\otimes n},\qquad N_jx:=\sum_{i\in\{1,\dots,d\}^n}|i|_j\,\langle x,e_i\rangle\,e_i,$$
is a self-adjoint bounded endomorphism, the $N_j$ commute pairwise,
$\sum_{j=1}^dN_j=nI$, and
$$N_je_J^\wedge=\mathbf 1_J(j)\,e_J^\wedge,\qquad N_jm_\lambda=\lambda_j\,m_\lambda .$$
Consequently both sectors are invariant under every $N_j$, the joint
eigenspaces of $(N_1,\dots,N_d)$ inside $\operatorname{ran}P_-^{(n)}$ are the
lines $\mathbb Ce_J^\wedge$ (one for each $n$-element subset $J$, with
eigenvalue vector $\mathbf 1_J$), and the joint eigenspaces inside
$\operatorname{ran}P_+^{(n)}$ are the lines $\mathbb Cm_\lambda$ (one for each
$\lambda\in W(n,d)$, with eigenvalue vector $\lambda$).

## Facts & Assumptions

**Given:** The finite-dimensional complex Hilbert space $H$ of dimension $d\ge1$ with orthonormal basis $(e_1,\dots,e_d)$, the tensor powers $H^{\otimes n}$ with permutation projections $P_\pm^{(n)}$, multi-indices $i\in\{1,\dots,d\}^n$, subsets $J$ with $|J|=n$, and $\lambda\in W(n,d)$.

[F1] **Tensor powers.** For all $n$ the tensor power carries bilinear elementary tensors $v_1\otimes\cdots\otimes v_n$ with $\|v_1\otimes\cdots\otimes v_n\|=\|v_1\|\cdots\|v_n\|$ and $\langle v_1\otimes\cdots\otimes v_n,w_1\otimes\cdots\otimes w_n\rangle=\prod_k\langle v_k,w_k\rangle$; for orthonormal families $(f_a)_{a\in A}$ in $H$ and $(g_b)_{b\in B}$ in $K$ with dense spans, the products $f_a\otimes g_b$ form an orthonormal family in $H\widehat\otimes K$ with dense span; the algebraic tensor product is dense in each completion ([[lem-nrqm-composites-hilbert-tensor-construction]] clauses (b)-(d)).

[F2] **Permutation projections.** $U_\pi(v_1\otimes\cdots\otimes v_n)=v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(n)}$ defines unitaries with $U_\pi U_\sigma=U_{\pi\sigma}$ and $U_\pi^{*}=U_{\pi^{-1}}$; $P_+^{(n)}=\frac1{n!}\sum_{\pi\in S_n}U_\pi$ and $P_-^{(n)}=\frac1{n!}\sum_{\pi\in S_n}\operatorname{sgn}(\pi)U_\pi$ are orthogonal projections with $U_\pi P_-^{(n)}=P_-^{(n)}U_\pi=\operatorname{sgn}(\pi)P_-^{(n)}$, and $P_-^{(n)}(v_1\otimes\cdots\otimes v_n)=0$ whenever two of the vectors $v_k$ coincide ([[lem-nrqm-composites-permutation-sector-projections]] clauses (a),(c),(d)).

[F3] **Determinant.** For a square matrix $A=(a_{ab})$ of size $n$ over a commutative ring, $\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{a=1}^n a_{\sigma(a),a}$; in particular $\det(I_n)=1$, and $\det(A)=0$ if some row of $A$ is zero ([[def-determinant-of-a-square-matrix]]).

[F4] **Binomial coefficients as counts.** $\binom dk=|[d]^k|$ for $d,k\in\mathbb N$, so with $k=n$ the number of $n$-element subsets of $\{1,\dots,d\}$ is $\binom dn$ ([[def-binomial-coefficient]]).

[F5] **Weak compositions.** For $m\ge1$ and $n\in\mathbb N$, $|W(n,m)|=\binom{n+m-1}{m-1}$ ([[thm-stars-and-bars]]); and $\binom{n+d-1}{d-1}=\binom{n+d-1}{n}$ ([[thm-binomial-closed-formula]] clause 3, with $N=n+d-1$ and $k=d-1$).

[F6] **Orthonormal expansions.** For an orthonormal family $(f_a)_{a\in A}$ in a Hilbert space whose closed linear span is the whole space, every $x$ equals the limit of the finite partial sums $\sum_{a\in F}\langle x,f_a\rangle f_a$; for a finite complete orthonormal family this is the finite equality $x=\sum_a\langle x,f_a\rangle f_a$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]] clauses 1 and 4, [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F7] **Self-adjointness and boundedness.** A bounded endomorphism $T$ of $H^{\otimes n}$ is self-adjoint when $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$, equivalently $T^{*}=T$ for the Hilbert adjoint of [[def-hilbert-space-adjoint]] ([[def-bounded-linear-operator]]).

## Proof

**Proof technique:** direct; build the product basis by induction from the tensor construction, determine the two permutation projections on basis vectors by explicit reindexing sums, evaluate the resulting orthonormality as a determinant, read the dimension counts off the index sets, and compute the occupation operators on the two resulting bases.

**Given:** The data of the statement and [F1]-[F7].

1.1 [Product basis] We show by induction on $n$ that $(e_i)_{i\in\{1,\dots,d\}^n}$ is an orthonormal basis of $H^{\otimes n}$. For $n=1$ this is the hypothesis. If it holds for $n$, then by [F1] applied to the orthonormal basis $(e_i)_{i\in\{1,\dots,d\}^n}$ of $H^{\otimes n}$ and $(e_j)_{j\in\{1,\dots,d\}}$ of $H$, the products $e_i\otimes e_j$ form an orthonormal family with dense span in $H^{\otimes(n+1)}=H^{\otimes n}\widehat\otimes H$; this is the displayed family for $n+1$, and its span is $H^{\otimes(n+1)}$ because $H^{\otimes(n+1)}$ is finite dimensional, so a dense subspace is the whole space. Hence the family is an orthonormal basis, its cardinality is $d\cdot d^n=d^{n+1}$ and $\dim H^{\otimes n}=d^n$, which is (a). [F1, algebra, induction]

1.2 [The alternating projection on basis vectors] Let $i\in\{1,\dots,d\}^n$. By the action formula of [F2], $P_-^{(n)}(e_i)=\frac1{n!}\sum_{\pi\in S_n}\operatorname{sgn}(\pi)e_{i_{\pi^{-1}(1)}}\otimes\cdots\otimes e_{i_{\pi^{-1}(n)}}=\frac1{n!}\sum_{\tau\in S_n}\operatorname{sgn}(\tau)e_{i_{\tau(1)}}\otimes\cdots\otimes e_{i_{\tau(n)}}$ after the substitution $\tau=\pi^{-1}$. If two entries of $i$ coincide, say $i_k=i_l$ with $k\ne l$, then the transposition $\upsilon=(kl)$ satisfies $e_{i_{\upsilon\tau(1)}}\otimes\cdots=e_{i_{\tau(1)}}\otimes\cdots$ for every $\tau$ and $\operatorname{sgn}(\upsilon\tau)=-\operatorname{sgn}(\tau)$, so the sum pairs to zero and $P_-^{(n)}(e_i)=0$ by [F2]. If the entries are pairwise distinct with underlying set $J=\{j_1<\cdots<j_n\}$ and $i_k=j_{\rho_i(k)}$, then $e_{i_{\tau(1)}}\otimes\cdots=e_{j_{\rho_i\tau(1)}}\otimes\cdots$ and $\operatorname{sgn}(\tau)=\operatorname{sgn}(\rho_i)\operatorname{sgn}(\rho_i\tau)$; substituting $\omega=\rho_i\tau$ gives $P_-^{(n)}(e_i)=\frac{\operatorname{sgn}(\rho_i)}{n!}\sum_{\omega\in S_n}\operatorname{sgn}(\omega)e_{j_{\omega(1)}}\otimes\cdots\otimes e_{j_{\omega(n)}}=\operatorname{sgn}(\rho_i)\frac{e_J^\wedge}{\sqrt{n!}}$, which is the second formula of (b). [F2, algebra]

1.3 [Orthonormality of the Slater family] For subsets $J,K$ with $|J|=|K|=n$ put $A_{ab}:=\langle e_{j_a},e_{k_b}\rangle=\delta_{j_a,k_b}$. By [F1], $\langle e_J^\wedge,e_K^\wedge\rangle=\frac1{n!}\sum_{\sigma,\pi\in S_n}\operatorname{sgn}(\sigma)\operatorname{sgn}(\pi)\prod_{l=1}^n A_{\sigma(l),\pi(l)}$. For each fixed $\pi$ substitute $\sigma=\omega\pi$ and reindex the product by $t=\pi(l)$. Then $\prod_l A_{\sigma(l),\pi(l)}=\prod_t A_{\omega(t),t}$ and $\operatorname{sgn}(\sigma)\operatorname{sgn}(\pi)=\operatorname{sgn}(\omega)$, so the sum over $\pi$ contributes $n!$ and the remaining sum is $\det(A)$ by [F3]. For $J=K$, $A=I_n$ and this is $1$; for $J\ne K$, some $j_a$ is absent from $K$, giving a zero row and determinant $0$. Thus the Slater family is orthonormal. [F1, F2, F3, algebra]

2.1 [Occupation operators] For $j\in\{1,\dots,d\}$ the formula of (d) defines a linear endomorphism of the finite-dimensional space $H^{\otimes n}$; by [F6] applied to the complete orthonormal family $(e_i)$ we have $x=\sum_i\langle x,e_i\rangle e_i$ and $N_jx=\sum_i|i|_j\langle x,e_i\rangle e_i$ for every $x$. Self-adjointness: for $x,y\in H^{\otimes n}$ the expansions give $\langle N_jx,y\rangle=\sum_i|i|_j\langle x,e_i\rangle\overline{\langle y,e_i\rangle}=\langle x,N_jy\rangle$ because the numbers $|i|_j$ are real, so $N_j$ is self-adjoint by [F7]; it is bounded because its range is spanned by the finitely many $e_i$ with eigenvalue at most $n$, and $\|N_jx\|\le n\|x\|$. The same computation on the basis vectors $e_i$, on which $N_j$ is diagonal with the real eigenvalues $|i|_j$, gives $N_jN_ke_i=|i|_k|i|_je_i=N_kN_je_i$ and $\sum_jN_je_i=\bigl(\sum_j|i|_j\bigr)e_i=ne_i$; since the $e_i$ form a basis by step 1.1 and both sides of each identity are linear, $N_jN_k=N_kN_j$ and $\sum_{j=1}^dN_j=nI$. This proves the operator statements of (d) except the two eigenvector formulas. [F6, F7, step 1.1, algebra]

2.2 [Slater basis and its dimension] By step 1.2 each $e_J^\wedge=\sqrt{n!}\,P_-^{(n)}(e_{j_1}\otimes\cdots\otimes e_{j_n})$ lies in $\operatorname{ran}P_-^{(n)}$, and each $P_-^{(n)}(e_i)$ is either zero or a multiple of some $e_J^\wedge$; since the $e_i$ form a basis of $H^{\otimes n}$ by step 1.1 and $P_-^{(n)}$ is linear, the closed linear span of $(e_J^\wedge)$ is exactly $\operatorname{ran}P_-^{(n)}$ (a finite-dimensional, hence closed, subspace). By step 1.3 the family is orthonormal, so it is an orthonormal basis of $\operatorname{ran}P_-^{(n)}$, indexed by the $n$-element subsets $J$ of $\{1,\dots,d\}$; by [F4] there are $\binom dn$ of them, so $\dim\operatorname{ran}P_-^{(n)}=\binom dn$. If $n>d$, then two of the $n$ entries of any $i$ coincide, so $P_-^{(n)}(e_i)=0$ for every basis vector $e_i$ by step 1.2, whence $P_-^{(n)}=0$ and $\operatorname{ran}P_-^{(n)}=\{0\}$. In particular $e_J^\wedge\ne0$ whenever $|J|=n\le d$. This completes (b). [F4, step 1.1, step 1.2, step 1.3, algebra]

2.3 [The symmetric sums] Fix $\lambda\in W(n,d)$. The word $c$ that lists $1$ with multiplicity $\lambda_1$, then $2$ with multiplicity $\lambda_2$, and so on through $d$ has $|c|=\lambda$, so $\operatorname{orb}(\lambda)\ne\varnothing$ and $m_\lambda=\sum_{c\in\operatorname{orb}(\lambda)}e_c$ is a nonempty sum of orthonormal vectors of $H^{\otimes n}$, hence nonzero, with $\|m_\lambda\|^2=|\operatorname{orb}(\lambda)|$ by the orthonormality of the product basis in step 1.1 [F1]. If $\lambda\ne\mu$ then a word has a unique multiplicity vector, so $\operatorname{orb}(\lambda)\cap\operatorname{orb}(\mu)=\varnothing$ and the inner product of $m_\lambda$ and $m_\mu$ is the empty sum $0$. For $\pi\in S_n$ the map $c\mapsto\pi\cdot c$, $(\pi\cdot c)_k:=c_{\pi^{-1}(k)}$, permutes $\operatorname{orb}(\lambda)$ and $U_\pi e_c=e_{\pi\cdot c}$ by [F2], so $U_\pi m_\lambda=m_\lambda$. Finally, $P_+^{(n)}e_i=\frac1{n!}\sum_{\pi\in S_n}e_{\pi\cdot i}$ has coefficients supported on $\operatorname{orb}(|i|)$; for $c\in\operatorname{orb}(|i|)$ the set $\{\pi:\pi\cdot i=c\}$ is the coset $\pi_0\operatorname{Stab}(i)$ for any $\pi_0$ with $\pi_0\cdot i=c$, hence has cardinality $|\operatorname{Stab}(i)|\ge1$, and it is empty for $c\notin\operatorname{orb}(|i|)$; therefore $P_+^{(n)}e_i=\gamma_i\,m_{|i|}$ with $\gamma_i:=|\operatorname{Stab}(i)|/n!>0$. This proves all the assertions of (c) except the dimension. [F1, F2, step 1.1, algebra]

3.1 [Symmetric basis and its dimension] By step 2.3 the $m_\lambda$ are nonzero, pairwise orthogonal and lie in $\operatorname{ran}P_+^{(n)}$ (indeed $m_\lambda=\gamma_i^{-1}P_+^{(n)}e_i$ for any multi-index $i$ with $|i|=\lambda$, and such $i$ exists because $\lambda\in W(n,d)$); conversely every $P_+^{(n)}e_i$ is a multiple of some $m_\lambda$, so by linearity and the basis property of the $e_i$ the span of $(m_\lambda)_{\lambda\in W(n,d)}$ is $\operatorname{ran}P_+^{(n)}$. A pairwise orthogonal family of nonzero vectors spanning a finite-dimensional space is a basis, so $\dim\operatorname{ran}P_+^{(n)}=|W(n,d)|=\binom{n+d-1}{d-1}=\binom{n+d-1}{n}$ by [F5]. This completes (c). [F5, step 2.3, algebra]

4.1 [Occupation numbers on the two bases] Every summand $e_c$ of $e_J^\wedge$ has exactly one entry equal to $j$ when $j\in J$ and none otherwise, so $|c|_j=\mathbf 1_J(j)$ for every such $c$; and every $c\in\operatorname{orb}(\lambda)$ has $|c|_j=\lambda_j$. Since the $N_j$ are linear and act diagonally on the $e_c$ by the formula of step 2.1, this gives $N_je_J^\wedge=\mathbf 1_J(j)e_J^\wedge$ and $N_jm_\lambda=\lambda_jm_\lambda$, the remaining assertions of (d). Both basis families displayed in (b) and (c) therefore consist of joint eigenvectors of $(N_1,\dots,N_d)$, and the two maps $J\mapsto\mathbf 1_J$ and $\lambda\mapsto\lambda$ are injective; hence the joint eigenspaces inside the two sectors are the lines spanned by the corresponding basis vectors, as asserted in (d), and each sector is invariant under every $N_j$. [step 2.1, step 2.2, step 3.1, algebra]

5.1 [Assembly] Step 1.1 proves (a), steps 1.2, 1.3 and 2.2 prove (b), steps 2.3 and 3.1 prove (c), and steps 2.1 and 4.1 prove (d). The proof uses only the completed tensor powers, the permutation projections, the orthonormal expansions and the stated counting facts, under the Countable Choice hypothesis of [F1] and [F2]; no physical reading of the sectors or of the occupation operators is asserted. [step 1.1, step 1.2, step 1.3, step 2.2, step 2.3, step 3.1, step 2.1, step 4.1] ∎

## Remarks

- **Reading of the operators.** $N_j$ counts the particles occupying the
  declared basis vector $e_j$; the theorem proves the exact statements that
  the two permutation sectors diagonalise the family $(N_1,\dots,N_d)$ and
  that the antisymmetric sector has only the occupation values $0$ and $1$.
  The physical reading of this diagonalisation as an occupation readout of the
  framework belongs to
  [[def-nrqm-identical-particles-framework-orbital-occupation-model]] and
  [[pthm-nrqm-identical-particles-orbital-occupation-exclusion]].
- **Finite dimension.** The dimension of $H$ is finite and is part of the
  hypotheses; no infinite-dimensional Slater basis or occupation operator is
  constructed here. The open case is treated by different machinery on the
  Fock-space pair.
