---
id: lem-lorentz-lie-algebra-structure
kind: lemma
title: The Lie algebra of eta-antisymmetric endomorphisms, its generators and commutators
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 7
deps: [def-lorentz-map-and-lorentz-group,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       def-lorentz-form-and-inertia, def-linear-map,
       def-vector-space-of-linear-maps,
       def-coordinate-column-and-matrix-of-a-linear-map,
       def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix,
       def-derivative, thm-algebra-of-derivatives, thm-chain-rule]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-linear-map: mathematical-premise
  def-vector-space-of-linear-maps: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(V,\eta)$ be a $4$-dimensional Lorentz vector space and let
$(e_0,e_1,e_2,e_3)$ be an ordered $\eta$-orthonormal basis with
$\eta_0=\operatorname{diag}(-1,1,1,1)$. For a linear map $K:V\to V$
([[def-linear-map]]) with matrix $M$ in this basis, the following are
equivalent:

(a) $\eta(Kv,w)+\eta(v,Kw)=0$ for all $v,w\in V$;
(b) $M^{T}\eta_0+\eta_0M=0$;
(c) $M$ has the block form
$M=\begin{pmatrix}0&u^{T}\\ u&\Omega\end{pmatrix}$ with
$u\in\mathbb R^3$ and $\Omega^{T}=-\Omega$.

The set
$\mathfrak g:=\{K:\eta(Kv,w)+\eta(v,Kw)=0\text{ for all }v,w\}$ is a
$6$-dimensional linear subspace of the space of linear maps $V\to V$. Define
the maps $M_{ab}$ for all $0\le a,b\le3$ by
$(M_{ab})^{\mu}{}_{\nu}=\delta^{\mu}_{a}\eta_{b\nu}
-\delta^{\mu}_{b}\eta_{a\nu}$. Thus $M_{aa}=0$ and $M_{ba}=-M_{ab}$; the six maps with $a<b$ form a basis of
$\mathfrak g$ and satisfy
$[M_{ab},M_{cd}]=\eta_{bc}M_{ad}-\eta_{ac}M_{bd}-\eta_{bd}M_{ac}
+\eta_{ad}M_{bc}$ for all $0\le a,b,c,d\le3$, where
$[K_1,K_2]:=K_1K_2-K_2K_1$ is the commutator. Here a real Lie algebra means a real vector space with a bilinear antisymmetric bracket satisfying $[K_1,[K_2,K_3]]+[K_2,[K_3,K_1]]+[K_3,[K_1,K_2]]=0$. The commutator makes $\mathfrak g$ such an algebra.
If $L:I\to O(V,\eta)$, with $I\subseteq\mathbb R$ an open interval containing $0$, is a
$\mathcal C^1$ curve in $O(V,\eta)$ with $L(0)=\operatorname{id}_V$, then its
derivative $K:=L'(0)$ belongs to $\mathfrak g$, and $L(s)=\operatorname{id}_V+sK+o(s)$ as $s\to0$. Here $\mathcal C^1$ means that each matrix entry is continuously differentiable on $I$, $K$ has entries $(L^a{}_b)\prime(0)$, and $o(s)$ denotes a matrix remainder each of whose entries divided by $|s|$ tends to $0$.

## Facts & Assumptions

**Given:** A $4$-dimensional Lorentz vector space $(V,\eta)$, an ordered $\eta$-orthonormal basis $(e_a)$ with $\eta_0=\operatorname{diag}(-1,1,1,1)$, a linear map $K:V\to V$ with matrix $M$, and the components of the matrix product and transpose conventions below.

[L1] $\eta$ is a symmetric bilinear form ([[def-lorentz-form-and-inertia]]); in the basis $(e_a)$ one has $\eta(e_a,e_b)=\eta_{ab}$ with $\eta_0$ diagonal, so for coordinate columns $v,w$ of vectors of $V$ one has $\eta(v,w)=v^{T}\eta_0w$ ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L2] $(KM)$ has matrix product convention $(AB)_{ik}=\sum_ja_{ij}b_{jk}$ and the identity matrix has entry $1$ on the diagonal and $0$ elsewhere ([[def-matrix-product-and-identity-matrix]]); $(A^{T})_{ij}=A_{ji}$ ([[def-transpose-of-a-matrix]]).

[L3] The space $L(V,V)$ of linear maps $V\to V$ is a real vector space, and the map sending a linear map to its matrix in a fixed ordered basis is a linear isomorphism onto $M_4(\mathbb R)$ ([[def-vector-space-of-linear-maps]], [[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L4] $L:V\to V$ is a linear Lorentz map when $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$, and $O(V,\eta)$ denotes the set of such maps ([[def-lorentz-map-and-lorentz-group]]).

[L5] For a curve $s\mapsto L(s)$ in the finite-dimensional space $L(V,V)$, the derivative $L'(0)$ is the linear map with $L(s)=L(0)+sL'(0)+o(s)$ as $s\to0$, and $s\mapsto L(s)v$ is differentiable with derivative $L'(0)v$; sums and products of differentiable scalar functions obey the algebra of derivatives ([[def-derivative]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

## Proof

**Proof technique:** direct.

1.1 Let $v,w\in V$ have coordinate columns $v,w$. By [L1] and [L2], $\eta(Kv,w)=v^{T}M^{T}\eta_0w$ and $\eta(v,Kw)=v^{T}\eta_0Mw$, so $\eta(Kv,w)+\eta(v,Kw)=v^{T}(M^{T}\eta_0+\eta_0M)w$. If (a) holds this bilinear form vanishes for all $v,w$, and testing $v,w$ among the standard basis vectors of $\mathbb R^4$ forces every entry of $M^{T}\eta_0+\eta_0M$ to vanish, which is (b); conversely (b) gives (a) for all $v,w$ by the same identity. Hence (a) and (b) are equivalent. [L1, L2, algebra]

1.2 Write $M$ in the block form $M=\begin{pmatrix}k&u^{T}\\ w&\Omega\end{pmatrix}$ with $k\in\mathbb R$, $u,w\in\mathbb R^3$ and $\Omega\in M_3(\mathbb R)$, and recall $\eta_0=\operatorname{diag}(-1,I_3)$. Then $M^{T}=\begin{pmatrix}k&w^{T}\\ u&\Omega^{T}\end{pmatrix}$, so $M^{T}\eta_0=\begin{pmatrix}-k&w^{T}\\ -u&\Omega^{T}\end{pmatrix}$ and $\eta_0M=\begin{pmatrix}-k&-u^{T}\\ w&\Omega\end{pmatrix}$; the sum $M^{T}\eta_0+\eta_0M=\begin{pmatrix}-2k&w^{T}-u^{T}\\ w-u&\Omega^{T}+\Omega\end{pmatrix}$ vanishes exactly when $k=0$, $w=u$ and $\Omega^{T}=-\Omega$. Hence (b) and (c) are equivalent. [L2, algebra]

1.3 With the convention of [L2], $(M_{ab}M_{cd})^{\mu}{}_{\nu}=\sum_{\lambda}(\delta^{\mu}_{a}\eta_{b\lambda}-\delta^{\mu}_{b}\eta_{a\lambda})(\delta^{\lambda}_{c}\eta_{d\nu}-\delta^{\lambda}_{d}\eta_{c\nu})=\delta^{\mu}_{a}\eta_{bc}\eta_{d\nu}-\delta^{\mu}_{a}\eta_{bd}\eta_{c\nu}-\delta^{\mu}_{b}\eta_{ac}\eta_{d\nu}+\delta^{\mu}_{b}\eta_{ad}\eta_{c\nu}$, because $\sum_{\lambda}\eta_{b\lambda}\delta^{\lambda}_{c}=\eta_{bc}$ and $\sum_{\lambda}\eta_{b\lambda}\delta^{\lambda}_{d}=\eta_{bd}$. Interchanging the pairs $(a,b)$ and $(c,d)$ and subtracting, the eight resulting terms regroup as $(\delta^{\mu}_{a}\eta_{d\nu}-\delta^{\mu}_{d}\eta_{a\nu})\eta_{bc}-(\delta^{\mu}_{a}\eta_{c\nu}-\delta^{\mu}_{c}\eta_{a\nu})\eta_{bd}-(\delta^{\mu}_{b}\eta_{d\nu}-\delta^{\mu}_{d}\eta_{b\nu})\eta_{ac}+(\delta^{\mu}_{b}\eta_{c\nu}-\delta^{\mu}_{c}\eta_{b\nu})\eta_{ad}$, which is exactly $\eta_{bc}M_{ad}-\eta_{bd}M_{ac}-\eta_{ac}M_{bd}+\eta_{ad}M_{bc}$; the computation is entrywise and therefore valid for all index values, including repeated indices and the diagonal generators $M_{aa}=0$. [L2, algebra]

1.4 Let $s\mapsto L(s)$ be a $\mathcal C^1$ curve in $O(V,\eta)$ with $L(0)=\operatorname{id}_V$, and fix $v,w\in V$. The function $s\mapsto\eta(L(s)v,L(s)w)$ is constant equal to $\eta(v,w)$ because each $L(s)$ satisfies the defining identity of [L4], and $s\mapsto L(s)v$, $s\mapsto L(s)w$ are differentiable with derivatives $L'(0)v$, $L'(0)w$ by [L5]. Differentiating the constant function at $s=0$ with the product rule for the bilinear form $\eta$ gives $0=\eta(L'(0)v,w)+\eta(v,L'(0)w)$, so $K:=L'(0)$ satisfies condition (a) and lies in $\mathfrak g$; and $L(s)=L(0)+sK+o(s)=\operatorname{id}_V+sK+o(s)$ is the definition of the derivative in the finite-dimensional space $L(V,V)$ recalled in [L5]: each scalar matrix entry has remainder divided by $s$ tending to $0$ by [[def-derivative]], and the coordinates of $L(s)v$ are finite linear combinations of these entries. [L4, L5, algebra]

2.1 By (c), the maps in $\mathfrak g$ are precisely those whose matrices have the form $\begin{pmatrix}0&u^{T}\\ u&\Omega\end{pmatrix}$ with $u\in\mathbb R^3$ and $\Omega$ skew-symmetric; this set is closed under addition and scalar multiplication, so $\mathfrak g$ is a linear subspace of $L(V,V)$ by [L3]. A skew-symmetric $3\times3$ matrix is determined by its three entries above the diagonal and conversely every such triple occurs, so the skew-symmetric matrices form a $3$-dimensional subspace; adding the three free coordinates of $u$ gives $\dim\mathfrak g=3+3=6$. For $K,H\in\mathfrak g$, $\eta(KHv,w)=-\eta(Hv,Kw)=\eta(v,HKw)$ and $\eta(HKv,w)=\eta(v,KHw)$, so $\eta([K,H]v,w)=-\eta(v,[K,H]w)$; thus the commutator is closed on $\mathfrak g$. Composition is bilinear, hence so is the commutator, and $[K,H]=-[H,K]$. Finally $[K,[H,Z]]=KHZ-KZH-HZK+ZHK$; adding the two cyclic permutations cancels all twelve terms by associativity. This proves the Lie algebra axioms stated above. [step 1.2, L3, algebra]

3.1 For $0\le a<b\le3$ define $M_{ab}$ by $(M_{ab})^{\mu}{}_{\nu}=\delta^{\mu}_{a}\eta_{b\nu}-\delta^{\mu}_{b}\eta_{a\nu}$. Reading off the matrix entries: $M_{0i}$ has $(M_{0i})^{\mu}{}_{\nu}=\delta^{\mu}_0\delta_{i\nu}+\delta^{\mu}_i\delta_{0\nu}$, the block form with $u=e_i$ and $\Omega=0$, while for $1\le i<j\le3$ the matrix $M_{ij}$ has entries $(M_{ij})^{\mu}{}_{\nu}=\delta^{\mu}_i\delta_{j\nu}-\delta^{\mu}_j\delta_{i\nu}$, the block form with $u=0$ and $\Omega=e_ie_j^{T}-e_je_i^{T}$ (the $i$-th row of $\eta$ restricted to spatial indices being $e_i^{T}$). Hence each $M_{ab}$ belongs to $\mathfrak g$ by (c), and the correspondence $M_{ab}\leftrightarrow(u,\Omega)$ maps the three $M_{0i}$ onto the three coordinate directions of $u$ and the three $M_{ij}$ onto the three standard skew matrices $e_ie_j^{T}-e_je_i^{T}$, which are independent; therefore the six $M_{ab}$ are linearly independent and, since $\dim\mathfrak g=6$ by step 2.1, they form a basis of $\mathfrak g$. [step 1.2, step 2.1, L3, algebra]

4.1 Steps 1.1 and 1.2 establish the equivalence of (a), (b), (c); steps 2.1 and 3.1 establish that $\mathfrak g$ is a $6$-dimensional linear subspace with basis $M_{ab}$; step 1.3 establishes the commutator identity; and step 1.4 establishes the derivative statement. This proves every clause of the statement. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, step 1.4] ∎
