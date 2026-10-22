---
id: lem-branched-cover-surgery-presentation-from-seifert-surface
kind: lemma
title: "Surgery presentation from a Seifert surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-countable-choice-principle-for-foliation-pair
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Selman Akbulut and Robion Kirby, Branched Covers of Surfaces in 4-Manifolds"
      url: "https://math.berkeley.edu/~kirby/papers/Akbulut%20and%20Kirby%20-%20Branched%20covers%20of%20surfaces%20in%204-manifolds%20-%20MR0593626.pdf"
      locator: "Section 2, printed pp. 113–117; cyclic branched cover of B^4 and band-handle construction"
    - title: "Jozef H. Przytycki and Akira Yasuhara, Linking Numbers in Rational Homology 3-Spheres, Cyclic Branched Covers and Infinite Cyclic Covers"
      url: "https://arxiv.org/pdf/math/0111203v1"
      locator: "Section 3, printed pp. 12–14; block matrix M_{q,V}; the surgery presentation is attributed to Akbulut–Kirby and proved locally here"
---

## Statement

Assume the Axiom of Choice. Let $K$ bound a connected compact oriented Seifert surface $F$ of genus $g$. Choose a disk-band decomposition of $F$ with one disk and $2g$ bands, and use its band-core basis $a_1,\ldots,a_{2g}$ to form the positive-push Seifert matrix $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. For $q\ge2$, define the symmetric block matrix $M_q(V)$ of size $2g(q-1)$ by specifying its $2g\times2g$ blocks, indexed by $1\le k,\ell\le q-1$:
$$(M_q(V))_{k\ell}=\begin{cases}V+V^T,&k=\ell,\\-V^T,&\ell=k+1,\\-V,&k=\ell+1,\\0,&|k-\ell|\ge2.\end{cases}$$
Push the interior of $F$ into $B^4$ while keeping $K$ on $S^3=\partial B^4$, cut $B^4$ along a thickened copy of the pushed-in surface, and take $q$ copies. For $i=1,\ldots,q-1$, glue the positive face of copy $i$ to the negative face of copy $i+1$ by reflecting the normal coordinate; do not glue the last positive face to the first negative face. Call the resulting $q$-fold cyclic branched cover $W_q(F)$. It has one $0$-handle and $2g(q-1)$ $2$-handles, and its framed attaching link has linking matrix $M_q(V)$. The boundary branched cover, with the boundary marking induced by the covering map, is $\Sigma_q(K)$.

## Statement references

[[def-oriented-seifert-surface|Connected compact oriented spanning surfaces and the genus convention]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The disk-band handle form for a compact surface with one boundary component]]

[[def-cyclic-branched-cover-of-a-knot|The exterior cover and meridional filling defining $\Sigma_q(K)$]]

[Akbulut–Kirby, “Branched Covers of Surfaces in 4-Manifolds,” §2](https://math.berkeley.edu/~kirby/papers/Akbulut%20and%20Kirby%20-%20Branched%20covers%20of%20surfaces%20in%204-manifolds%20-%20MR0593626.pdf)

[Przytycki–Yasuhara, §3](https://arxiv.org/pdf/math/0111203v1)

## Facts & Assumptions

**Given:** Full AC, the oriented knot $K$, a connected compact oriented Seifert surface $F$, its disk-band decomposition, the ordered band-core basis, and $q\ge2$.

[A1] Full AC implies the countable-choice hypothesis of the finite surface normal-form supplier. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A Seifert surface is connected, compact, smooth, oriented, and embedded with oriented boundary $K$; its genus is the integer $g$ with $\chi(F)=1-2g$. [[def-oriented-seifert-surface]]

[F2] Under countable choice, a connected compact surface with one boundary component has a disk-band handle form with $2g$ bands and a standard integral homology basis given by the band cores. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F3] The positive-push Seifert matrix has entries $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, with the positive normal determined by the surface and ambient orientations. [[def-knot-seifert-pairing-and-matrix]]

[F4] The $q$-fold branched cover of $S^3$ is formed from the meridian-mod-$q$ cover of the compact exterior by filling the lift of $\mu^q$. [[def-cyclic-branched-cover-of-a-knot]]

## Proof

**Given:** Full AC, the oriented knot $K$, the connected compact oriented Seifert surface $F$, its disk-band decomposition and band-core basis, the positive-push matrix $V$, and $q\ge2$.

1.1 By [F1] and [F2], cut $B^4$ along the thickening of the pushed-in disk-band surface, producing cut copies $B_1^4,\ldots,B_q^4$. First glue these copies only along the disk $0$-handle of the branch surface. A disk thickening is a $3$-ball in the boundary of each cut $4$-ball; joining the two face balls for consecutive copies is the standard boundary-connected-sum operation, so the resulting $4$-manifold is again a $4$-ball with one $0$-handle. For each surface band, the positive face of copy $k$ glued to the negative face of copy $k+1$ joins the two band-core arcs; its regular neighborhood is a $2$-handle $D^2\times D^2$ attached along $S^1\times D^2$. There are $q-1$ such seams and $2g$ bands, so the construction gives $2g(q-1)$ $2$-handles and no other handles. [A1, F1, F2, given, construct]

2.1 For band $a_i$ and seam $k$, the attaching circle $C_{i,k}$ is obtained by joining its oriented core arc in the positive face of copy $k$ to the core arc in the negative face of copy $k+1$, with endpoints joined through the common disk $0$-handle. In the collar of $F$, closing either face arc through that disk gives the corresponding positive or negative push-off of the closed core cycle $a_i$. Simultaneously moving $a_i^-$ and $a_j$ through the product collar to $a_i$ and $a_j^+$ preserves linking, so symmetry of linking and [F3] give $\operatorname{lk}(a_i^-,a_j)=\operatorname{lk}(a_j^+,a_i)=V_{ji}$. For two handles at the same seam, the positive-face and negative-face contributions are therefore $V_{ij}$ and $V_{ji}$, giving $V_{ij}+V_{ji}$; for the self-entry this is framing $2V_{ii}$. For handles at consecutive seams, only their common sheet contributes, and the reflection reverses one normal direction, giving $-\operatorname{lk}(a_j^+,a_i)=-V_{ji}$ in the upper block; symmetry gives $-V_{ij}$ in the lower block. If the seams are separated by at least one unused seam, the attaching circles lie in disjoint sheet neighborhoods, so their linking is zero. These cases exhaust all pairs and give exactly $M_q(V)$. [F3, step 1.1, given, construct, algebra]

3.1 In a normal disk to the branch surface, the $q$ cut sheets form the standard cyclic degree-$q$ branched disk; its map is $w\mapsto w^q$. Away from the branch locus, a positive meridian moves through the $q$ sheets cyclically, so the boundary exterior cover is the connected cover classified by the homomorphism $\pi_1(E_K)\to\mathbb Z/q$ sending $\mu$ to $1$. Its meridian boundary is the closed lift of $\mu^q$, which bounds the filling disk. By [F4] and uniqueness of the classified connected cover, the boundary with its branch marking is $\Sigma_q(K)$. [F4, step 1.1, step 2.1, given]

4.1 For $q=2$ there is one seam, so the block matrix has only its diagonal block $V+V^T$, as stated. [step 2.1, given, algebra] ∎

## Remarks

The boxes represent the $q$ copies of the cut $4$-ball; each arrow represents the $2g$ handles attached at one seam. The upper and lower matrix blocks record the opposite normal directions across that seam. The display sketches $q\ge4$; when $q=2$ there is one arrow. The proof computes the framed-link entries directly and does not rely on the schematic.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,minimum width=1.1cm,minimum height=0.65cm] (b1) at (0,0) {$B_1^4$};
  \node[draw,minimum width=1.1cm,minimum height=0.65cm] (b2) at (2.1,0) {$B_2^4$};
  \node[draw,minimum width=1.1cm,minimum height=0.65cm] (b3) at (4.2,0) {$B_3^4$};
  \node at (5.2,0) {$\cdots$};
  \node[draw,minimum width=1.1cm,minimum height=0.65cm] (bq) at (6.3,0) {$B_q^4$};
  \draw[->,thick] (b1) -- node[above] {$2g$ handles} (b2);
  \draw[->,thick] (b2) -- node[above] {$2g$ handles} (b3);
  \draw[->,thick] (b3) -- (4.9,0);
  \draw[->,thick] (5.5,0) -- (bq);
\end{tikzpicture}
```
