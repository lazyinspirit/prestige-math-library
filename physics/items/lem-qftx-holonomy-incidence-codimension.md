---
id: lem-qftx-holonomy-incidence-codimension
kind: lemma
title: Dimension of the finite holonomy incidence manifold
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 1
deps:
  - lem-qftx-complex-grassmannian-compactness
  - thm-a-regular-level-set-is-an-embedded-submanifold
dependency_roles:
  lem-qftx-complex-grassmannian-compactness: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "I. M. Singer, Some Remarks on the Gribov Ambiguity, Communications in Mathematical Physics 60 (1978), 7–12"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-60/issue-1/Some-remarks-on-the-Gribov-ambiguity/cmp/1103904019.pdf"
      locator: "§2, pp. 8–10, irreducible holonomy and the reducible locus; the finite-dimensional incidence calculation is proved locally."
    - title: "Steven Sivek, Lectures on Instantons and Contact Structures"
      url: "https://wwwf.imperial.ac.uk/~ssivek/papers/regensburg-notes.pdf"
      locator: "§1, pp. 2–3, stabilizers of irreducible connections; the finite-dimensional incidence calculation is proved locally."
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§5.13.2–§5.13.3, PDF pp. 114–116, Sobolev connection/gauge setup and holonomy-stabilizer convention; the incidence dimension calculation is proved locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

Let $N\ge2$, $r\ge1$, and $1\le k<N$. Regard $M_N(\mathbb C)$ as $\mathbb R^{2N^2}$ by real and imaginary entries, write $Q^*=\overline Q^{\mathsf T}$, and set $U(N)=\{Q:Q^*Q=I_N\}$ and $SU(N)=\{Q\in U(N):\det Q=1\}$. Equip $U(N)$ with the embedded regular-level smooth structure of $Q\mapsto Q^*Q$ on $GL_N(\mathbb C)$, and $SU(N)$ with the embedded regular-level smooth structure of $\det:U(N)\to S^1$, where $S^1=\{z\in\mathbb C:|z|=1\}$ has its embedded circle structure. For each orthogonal projection $P$ onto a complex $k$-plane in $\mathbb C^N$, write $V_P=\operatorname{ran}P$. Define
$$
I_{k,r}=\{(g_1,\ldots,g_r,P)\in SU(N)^r\times\operatorname{Gr}_{\mathbb C}(k,N):g_iV_P=V_P\text{ for every }i\},
$$
Here $\operatorname{Gr}_{\mathbb C}(k,N)=\{P:P^*=P,\ P^2=P,\ \operatorname{tr}P=k\}$ has the orthogonal-projection topology and the smooth atlas whose chart at a plane $V_0$ sends the graph of $T\in\operatorname{Hom}_{\mathbb C}(V_0,V_0^\perp)$ to $T$; the chart domain consists of planes transverse to $V_0^\perp$. Then $I_{k,r}$ is a closed embedded smooth submanifold,
$$
\dim I_{k,r}=2k(N-k)+r\bigl(k^2+(N-k)^2-1\bigr).
$$
Its codimension in $SU(N)^r\times\operatorname{Gr}_{\mathbb C}(k,N)$ is $2r\,k(N-k)$, and
$$
\dim SU(N)^r-\dim I_{k,r}=2(r-1)k(N-k).
$$

## Facts & Assumptions

**Given:** Integers $N\ge2$, $r\ge1$, and $1\le k<N$.

[F1] $\operatorname{Gr}_{\mathbb C}(k,N)$ is represented by Hermitian rank-$k$ orthogonal projections with the subspace topology inherited from the real and imaginary matrix entries ([[lem-qftx-complex-grassmannian-compactness]]).

[F2] If a smooth map between finite-dimensional smooth manifolds has a regular value with nonempty fiber, that fiber is an embedded submanifold of codimension equal to the target dimension ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

## Proof

**Proof technique:** direct.

1.1 Regard $M_m(\mathbb C)$ as $\mathbb R^{2m^2}$ and the Hermitian matrices as a real vector space of dimension $m^2$. On the open set of invertible matrices, the smooth map $\Theta(Q)=Q^*Q$ has derivative $d\Theta_Q(X)=Q^*X+X^*Q$. At a unitary $Q$, every Hermitian $H$ is the derivative value for $X=\tfrac12 QH$. Thus $I_m$ is a regular value and [F2] makes $U(m)=\Theta^{-1}(I_m)$ a manifold of dimension $m^2$. The determinant map $U(m)\to S^1$ is a submersion: at the identity its derivative on a skew-Hermitian tangent matrix $X$ is $\operatorname{tr}X$, which reaches the tangent line $i\mathbb R$ by $X=itI_m/m$, and translation gives surjectivity at every group element. Consequently $SU(m)=\det^{-1}(1)$ has dimension $m^2-1$. The same determinant argument for $(U(k)\times U(N-k))\to S^1$, $(U,V)\mapsto\det U\det V$, shows that
$$H_k=\{\operatorname{diag}(U,V):U\in U(k),\,V\in U(N-k),\,\det U\det V=1\}$$
is a closed Lie subgroup of dimension $k^2+(N-k)^2-1$. [F2, given, algebra]

1.2 Fix a $k$-plane $V_0$ and its orthogonal complement. A plane transverse to $V_0^\perp$ is the graph of a unique complex-linear map $T:V_0\to V_0^\perp$. The graph projection is
$$
P_T=\begin{pmatrix}I\\T\end{pmatrix}(I+T^*T)^{-1}\begin{pmatrix}I&T^*\end{pmatrix},
$$
and its inverse chart is $T=(P_T)_{21}(P_T)_{11}^{-1}$. These formulas are smooth, and such planes form an open neighborhood because invertibility of $(P)_{11}$ is an open matrix condition. Thus the Grassmannian has local charts modeled on $\operatorname{Hom}_{\mathbb C}(V_0,V_0^\perp)$ and real dimension $2k(N-k)$. [F1, algebra, construct]

2.1 On a sufficiently small graph chart, Gram–Schmidt applied to the columns of $\binom I T$ and $\binom{-T^*}I$ gives a smoothly varying unitary matrix $Q(T)$ carrying $V_0$ to the graph of $T$; all normalization denominators are positive because each list is linearly independent. A unitary matrix preserving a plane also preserves its orthogonal complement. Therefore $g_iV_P=V_P$ exactly when $Q(T)^*g_iQ(T)$ is block diagonal and belongs to $H_k$. The map $$(T,h_1,\ldots,h_r)\longmapsto(Q(T)h_1Q(T)^*,\ldots,Q(T)h_rQ(T)^*,P_T)$$ and its inverse are smooth local coordinates for $I_{k,r}$. Hence $I_{k,r}$ is an embedded submanifold with dimension $2k(N-k)+r\dim H_k$. It is closed because it is the zero set of the continuous matrix equations $g_iP-Pg_i=0$. [F1, step 1.1, step 1.2, construct, algebra]

3.1 Substituting $\dim H_k=k^2+(N-k)^2-1$ gives the displayed dimension. Since $\dim SU(N)=N^2-1$, subtraction from the ambient product dimension gives codimension $r\bigl((N^2-1)-(k^2+(N-k)^2-1)\bigr)=2r\,k(N-k)$. Subtracting $\dim I_{k,r}$ from $\dim SU(N)^r=r(N^2-1)$ instead gives $2(r-1)k(N-k)$, the dimension deficit used when the plane variable is included in the source of a holonomy family. [step 1.1, step 1.2, step 2.1, algebra] ∎
