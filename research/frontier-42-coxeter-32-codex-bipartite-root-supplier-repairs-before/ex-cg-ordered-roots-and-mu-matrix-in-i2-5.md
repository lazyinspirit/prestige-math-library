---
id: ex-cg-ordered-roots-and-mu-matrix-in-i2-5
kind: example
title: "Ordered roots and the mu-dot-root matrix in I2(5)"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 19
deps: [def-cg-bipartite-coxeter-element-and-root-recursion, lem-cg-steinberg-bipartite-root-enumeration, lem-cg-ordered-root-pairings-and-simple-systems, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-finite-parabolic-longest-element-and-opposition, def-hh-coxeter-matrix-word-group-and-length]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Thomas Brady and Colum Watt, Lattices in finite real reflection groups (arXiv:math/0501502, 29-page PDF)"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "Section 3, Example 3.6 and its rho_i, mu_i and mu_i.rho_j tables printed pp. 5-7, used as a comparison for the independently recomputed rank-two formulas"
    - title: "Robert Steinberg, Finite reflection groups, Transactions of the American Mathematical Society 91 (1959) 493-504 (AMS free digital archive, 10-page PDF)"
      url: "https://www.ams.org/journals/tran/1959-091-03/S0002-9947-1959-0106428-2/S0002-9947-1959-0106428-2.pdf"
      locator: "Corollary 4.6 and the reflections 4.8, printed pp. 497-498, specialized to n = 2 and h = 5"
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: "https://www.math.ubc.ca/~cass/research/pdf/Element.pdf"
      locator: "Sections 2 and 3.1-3.7, printed pp. 5-8, and Section 4, printed pp. 9-10, specialized to the dihedral case"
    - title: "Sergey Fomin and Nathan Reading, Root systems and generalized associahedra, IAS/Park City Mathematics Series lecture notes (arXiv:math/0505518)"
      url: "https://arxiv.org/pdf/math/0505518"
      locator: "Example 2.2, Figure 1 (the pentagon) and Section 2.5, printed pp. 4 and 22-24"
verification:
  precheck: pending
---

## Example

Let $S=\{s_1,s_2\}$ with $m(s_1,s_2)=5$, so $W=I_2(5)$ is dihedral of order $10$. Let $\alpha_i=e_{s_i}$ and
$$B(\alpha_1,\alpha_1)=B(\alpha_2,\alpha_2)=1,\qquad B(\alpha_1,\alpha_2)=-\frac{\varphi}{2},\qquad \varphi:=2\cos(\pi/5)=\frac{1+\sqrt5}{2}.$$
Take the bipartition $J=\{s_1\}$, $K=\{s_2\}$, put $c=s_1s_2$, and let $C_V:=\rho(c)$. For $\rho_i,\mu_i,\beta_i$ use the conventions of [[def-cg-bipartite-coxeter-element-and-root-recursion]]. Then:

**(i)** $h=5$, $\Phi_+=\{\rho_1,\dots,\rho_5\}$, where
$$\rho_1=\alpha_1,\quad \rho_2=\alpha_2+\varphi\alpha_1,\quad \rho_3=\varphi(\alpha_1+\alpha_2),\quad \rho_4=\alpha_1+\varphi\alpha_2,\quad \rho_5=\alpha_2.$$
Each $\rho_i$ has $B$-norm $1$, $C_V\rho_i=\rho_{i+2}$ for all $i\ge1$, and $\rho_{i+5}=-\rho_i$.

**(ii)** The dual basis and subsequent $\mu$-vectors are
$$\mu_1=\beta_1=\frac{4\alpha_1+2\varphi\alpha_2}{3-\varphi},\qquad \mu_2=\beta_2=\frac{2\varphi\alpha_1+4\alpha_2}{3-\varphi},$$
$$\mu_3=\mu_1-2\rho_1,\qquad \mu_4=\mu_2-2\rho_2,\qquad \mu_5=\mu_3-2\rho_3.$$
The matrix $\bigl(\mu_i\cdot\rho_j\bigr)_{1\le i,j\le5}$ is
$$\begin{pmatrix}1&\varphi&\varphi&1&0\\ 0&1&\varphi&\varphi&1\\ -1&0&1&\varphi&\varphi\\ -\varphi&-1&0&1&\varphi\\ -\varphi&-\varphi&-1&0&1\end{pmatrix}.$$

**(iii)** The sign assertions of [[lem-cg-ordered-root-pairings-and-simple-systems]] (2) hold for this matrix: entries on and above the diagonal are nonnegative, entries strictly below it are nonpositive, and the entries one step below the diagonal vanish. The cyclicity $\mu_{i+2}\cdot\rho_{j+2}=\mu_i\cdot\rho_j$ holds for all $i,j\ge1$.

**(iv)** The longest element is $w_0=c^2s_1=(s_1s_2)^2s_1$. The displayed word is a reduced $S$-expression of Coxeter length $\ell(w_0)=5=nh/2$ and its prefix roots are $\rho_1,\dots,\rho_5$. The vector $p=(1,1)$ is a positive eigenvector of $A=2(I-B)$ with eigenvalue $\lambda=\varphi=2\cos(\pi/5)$, and the Coxeter plane is $V$ itself.

No Choice is used; all computations are finite and rank two.

## Facts & Assumptions

**Given:** The rank-two Coxeter system and bilinear form specified in the Example, together with the conventions for $\beta_i,\rho_i,\mu_i$, the Coxeter element $c$, the positive roots, and the longest element from the declared suppliers.

[F1] $r_s(x)=x-2B(x,\alpha_s)\alpha_s$; the reflections preserve $B$, and when $m(s_1,s_2)=5$ the product $R_1R_2$ has exact order $5$. [[def-cg-real-coxeter-form-and-reflection]] (2)-(3) [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2),(3)(iv)

[F2] The canonical homomorphism satisfies $\rho(s_i)=R_i$; its root system is $\Phi=\{\rho(w)e_s:w\in W,s\in S\}$, and $C_V=\rho(c)$. [[def-cg-canonical-reflection-homomorphism]] (1)-(2)

[F3] $C_V=R_1R_2$, $\rho_{i+2}=C_V\rho_i$, $\mu_{i+2}=C_V\mu_i$, $\rho_1=\alpha_1$, $\rho_2=R_1\alpha_2$, and $\mu_i=\beta_i$ for $i=1,2$; the conditional map is $\mu(v)=-2(C_V-\mathrm{id})^{-1}v$ when the inverse exists. [[def-cg-bipartite-coxeter-element-and-root-recursion]] (1)-(4)

[F4] $B(C_Vx,C_Vy)=B(x,y)$ for all $x,y\in V$. [[lem-cg-reflection-representation-descends-and-root-norms]] (2)

[F5] For $n=2$, $h=5$, $\Phi_+=\{\rho_1,\dots,\rho_5\}$, $C_V-\mathrm{id}$ is invertible, and $\mu(\rho_i)=\mu_i$; for odd $h$, $w_0=c^{(h-1)/2}a$ and the corresponding word is reduced of length $nh/2$ with prefix roots $\rho_1,\dots,\rho_{nh/2}$. The Coxeter plane is $P=\operatorname{span}(u,v)$ for $u=\sum_{s\in J}p_s\alpha_s$ and $v=\sum_{t\in K}p_t\alpha_t$. [[lem-cg-steinberg-bipartite-root-enumeration]] (2)-(4)

[F6] $\ell(w_0)=|\Phi_+|=5$ and $w_0$ is the unique element of length $5$. [[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(ii)-(iii)

[F7] From $\varphi=(1+\sqrt5)/2$ one has $1<\varphi<2$, $\varphi^2=\varphi+1$ and $\varphi^3=2\varphi+1$. [algebra]

[F8] For $1\le i\le j\le nh/2$ one has $\mu_i\cdot\rho_j\ge0$; for $1\le i<j\le nh/2$ one has $\mu_j\cdot\rho_i\le0$; and $\mu_{i+t}\cdot\rho_i=0$ for $1\le t\le n-1$. [[lem-cg-ordered-root-pairings-and-simple-systems]] (2)(b)-(d)

[F9] The Coxeter presentation includes the relator $(s_1s_2)^5=1$ when $m(s_1,s_2)=5$, and each simple generator satisfies $s_i^2=1$. [[def-hh-coxeter-matrix-word-group-and-length]]

## Verification

**Proof technique:** direct calculation.

1.1 The Gram matrix is $G=\begin{pmatrix}1&-\varphi/2\\-\varphi/2&1\end{pmatrix}$ with determinant $1-\varphi^2/4=(3-\varphi)/4>0$, so it is positive definite. By [F2], $C_V=R_1R_2$, which has exact order $5$ by [F1]; [F9] gives $c^5=1$, so $h=\operatorname{ord}(c)=5$. From $c=s_1s_2$ and [F9] we have $s_2=s_1c$ and $s_1cs_1=c^{-1}$, so every group word has one of the ten normal forms $c^q$ or $c^qs_1$, $0\le q<5$. The five rotations are distinct by the order of $c$, as are the five elements $c^qs_1$; their determinants under $\rho$ differ, so the two lists are disjoint. Thus $|W|=10$. In the ordered basis $(\alpha_1,\alpha_2)$, the reflection matrices give $R_1=\begin{pmatrix}-1&\varphi\\0&1\end{pmatrix}$ and $R_2=\begin{pmatrix}1&0\\\varphi&-1\end{pmatrix}$, hence $C_V=R_1R_2=\begin{pmatrix}\varphi&-\varphi\\\varphi&-1\end{pmatrix}$. [F1, F2, F7, F9, algebra]

1.2 Direct application of the reflection formula gives $\rho_1=(1,0)$ and $\rho_2=(\varphi,1)$ in simple-root coordinates. Multiplication by $C_V$ gives $\rho_3=(\varphi,\varphi)$, $\rho_4=(1,\varphi)$, and $\rho_5=(0,1)$; a second application gives $\rho_6=(-1,0)=-\rho_1$ and $\rho_7=(-\varphi,-1)=-\rho_2$. Since $\rho_{i+2}=C_V\rho_i$, induction on each parity gives $\rho_{i+5}=-\rho_i$ for every $i\ge1$. The first five vectors are distinct, and [F5] identifies $\Phi_+=\{\rho_1,\dots,\rho_5\}$, so they exhaust the positive roots. Their squared norms are $Q(a,b):=a^2+b^2-\varphi ab$: $Q(1,0)=Q(\varphi,1)=Q(\varphi,\varphi)=Q(1,\varphi)=Q(0,1)=1$ using [F7]. This proves (i). [F1, F2, F3, F5, F7, algebra]

1.3 The inverse Gram matrix is $G^{-1}=\frac{4}{3-\varphi}\begin{pmatrix}1&\varphi/2\\\varphi/2&1\end{pmatrix}$, so its columns give the displayed $\beta_1,\beta_2$. From $\mu_{i+2}=C_V\mu_i$ in [F3] and $(C_V-\mathrm{id})\mu_i=-2\rho_i$, which follows from [F5] and the definition of $\mu$ in [F3], we obtain $\mu_{i+2}=\mu_i-2\rho_i$; taking $i=1,2,3$ gives the three displayed recursions. [F3, F5, F7, algebra]

1.4 For coefficient vectors $(a,b)$ and $(u,v)$, the pairing is $B((a,b),(u,v))=au+bv-\frac{\varphi}{2}(av+bu)$. The columns of the root-coordinate matrix and the $\mu$-coordinate matrix are respectively $R=\begin{pmatrix}1&\varphi&\varphi&1&0\\0&1&\varphi&\varphi&1\end{pmatrix}$ and $M=\begin{pmatrix}\frac4d&\frac{2\varphi}d&\frac4d-2&\frac{2\varphi}d-2\varphi&\frac4d-2-2\varphi\\\frac{2\varphi}d&\frac4d&\frac{2\varphi}d&\frac4d-2&\frac{2\varphi}d-2\varphi\end{pmatrix}$, with $d:=3-\varphi$. Therefore the desired dot-product matrix is $M^{\mathsf T}GR$, which, using [F7], is the displayed matrix. For example, its $(3,1)$ entry is $(\beta_1-2\alpha_1)\cdot\alpha_1=1-2=-1$, and its $(4,3)$ entry is $(\beta_2-2\rho_2)\cdot\rho_3=\varphi-2(\varphi/2)=0$. The displayed entries give the stated signs and the one-step subdiagonal zeros. Specifically, these signs agree with [F8](2)(b),(d), and for $n=2$ the zero immediately below the diagonal is [F8](2)(c) with $t=1$. Finally $\mu_{i+2}=C_V\mu_i$ and $\rho_{j+2}=C_V\rho_j$, so $\mu_{i+2}\cdot\rho_{j+2}=\mu_i\cdot\rho_j$ by $B$-invariance of $C_V$. This proves (ii)-(iii). [F3, F4, F7, F8, algebra]

2.1 The odd-$h$ clause of [F5] gives $w_0=c^{(5-1)/2}a=c^2s_1=(s_1s_2)^2s_1$ and asserts the alternating word $(s_1s_2)^2s_1$ is reduced of Coxeter length $5$ with prefix roots $\rho_1,\dots,\rho_5$. It is the unique longest element by [F6]. The coordinate matrix $A=2(I-B)$ is $\begin{pmatrix}0&\varphi\\\varphi&0\end{pmatrix}$, so $A(1,1)=\varphi(1,1)$; by [F7] and the definition of $\varphi$, $\lambda=\varphi=2\cos(\pi/5)$. Here $J=\{s_1\}$ and $K=\{s_2\}$, so the theorem's $u=p_1\alpha_1$ and $v=p_2\alpha_2$ span $V$ since $p_1,p_2>0$; hence its Coxeter plane $P=\operatorname{span}(u,v)$ is $V$. No Choice is used. [F5, F6, F7, algebra] ∎
