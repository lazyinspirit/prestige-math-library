---
id: ex-q-schaper-for-shape-three-two-at-e-two
kind: example
title: "The q-Schaper calculation for (3,2) at e = 2"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular, def-alternating-weyl-and-specht-symbols-from-beta-sequences, def-type-a-hecke-specht-module-and-cell-form, thm-q-schaper-virtual-radical-layer-formula, thm-q-schur-weyl-weight-space-gram-determinant-hook-product, thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules, lem-dj-bridge-murphy-cellular-basis-and-cell-form, lem-dj-bridge-integral-murphy-and-polytabloid-straightening, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 15
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Examples 5.28 and 5.33, printed pp. 54-60: the Gram determinant of (3,2), the q-Schaper sums at e=2 and the concluding dimension count for d_{(3,2),(2^2,1)}"
---

## Example

Take $R=\mathbb C[\hat q]_{(1+\hat q)}$, the prime element $\pi=1+\hat q$ (so that $F=\mathbb C$ and $q:=\hat q+\pi R$ specialises to $-1$, giving $e=2$), and $\lambda=(3,2)$, $n=5$. Evaluating the q-Schaper virtual sums ([[thm-q-schaper-virtual-radical-layer-formula]], [[thm-q-schur-weyl-weight-space-gram-determinant-hook-product]], [[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]], [[lem-dj-bridge-murphy-cellular-basis-and-cell-form]], [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]], [[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]) with the hook valuations $\nu_\pi([2]_{\hat q})=\nu_\pi([4]_{\hat q})=1$, $\nu_\pi([3]_{\hat q})=\nu_\pi([1]_{\hat q})=0$ gives, in the source's normalisation, $$\sum_{i>0}\bigl[W^{(3,2)}_F(i)\bigr]=\bigl[W^{(3,1^2)}_F\bigr]+\bigl[W^{(2^2,1)}_F\bigr]-\bigl[W^{(1^5)}_F\bigr],\qquad \sum_{i>0}\bigl[S^{(3,2)}_F(i)\bigr]=2\bigl[D^{(2^2,1)}_{\mathrm{M}}\bigr].$$ Further Jantzen calculations give $W^{(1^5)}_F=L^{(1^5)}_F$, $W^{(2^2,1)}_F=L^{(2^2,1)}_F$ and $W^{(3,1^2)}_F\sim L^{(3,1^2)}_F+L^{(2^2,1)}_F+L^{(1^5)}_F$, so at the level of the sum formula alone one gets $d_{(3,2),(3,1^2)}=1$ and only the bound $d_{(3,2),(2^2,1)}\in\{1,2\}$. The extra dimension/filtration argument on the Specht side gives $S^{(3,2)}_{\mathrm{M}}\cong D^{(2^2,1)}_{\mathrm{M}}$ (both sides have dimension $5$), whence $d_{(3,2),(2^2,1)}=1$: the virtual sum alone did not determine the entry. Translated to the Dipper-James convention of this page by conjugating and applying the same $\theta$ pullback to both modules ([[def-type-a-hecke-specht-module-and-cell-form]]), this reads $S^{(2,2,1)}_{\mathrm{DJ}}\cong D^{(3,2)}_{\mathrm{DJ}}$, while the partition $(2,2,1)$ is not $2$-regular, so its own labelled cell-form quotient vanishes, $D^{(2,2,1)}_{\mathrm{DJ}}=0$. The computed entry is consistent with the dominance bound $d_{\lambda\mu}\ne0\Rightarrow\mu\unrhd\lambda$ of [[cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular]].

## Facts & Assumptions

**Given:** The DVR $R=\mathbb C[\hat q]_{(1+\hat q)}$, unit $\hat q$, uniformizer $\pi=1+\hat q$, residue field $F=\mathbb C$, $q=-1$, $e=2$, and $d\ge5$. All displayed Weyl modules are for this $S_F(d,5)$.

[F1] The corrected **balanced** sum formula and its signs are [[thm-q-schaper-virtual-radical-layer-formula]] and [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]. The weight Gram product is [[thm-q-schur-weyl-weight-space-gram-determinant-hook-product]].

[F2] $v([h]_{\hat q})$ is $1$ for $h=2,4$ and $0$ for $h=1,3,5$; the even roots are simple over $\mathbb C$. The Weyl forms have nonzero simple heads and their first reduced Jantzen submodule is the radical.

[F3] The exact integral corner identifies each Weyl corner and its form with the Murphy cell and form, and identifies each simple image with its Murphy form quotient, including zero images ([[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]], steps 1.1–5.1). Nonzero images are pairwise distinct absolutely simple modules by [[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]. The specific zero forms needed here are proved below from the actual integral row symmetrizers and straightening ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]], [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]]); no general finite-$e$ restricted nonzero criterion is used.



## Verification

**Proof technique:** direct.

1.1 Check the lift. Localization makes $\hat q$ a unit since its residue is $-1$, so the exact PID hypotheses of [F1] hold; the generic factorial is nonzero. The identities $[2]=1+\hat q$, $[4]=(1+\hat q)(1+\hat q^2)$ and evaluation of the odd quantum integers at $-1$ prove [F2]. These values refer to this lift, not an arbitrary field or lift with quantum characteristic $2$. [given, F1, F2]

1.2 Compute the balanced symbols explicitly. For $(3,2)$, $\beta=(6,5,3,1,0)$ and its hook array is $\begin{smallmatrix}4&3&1\\2&1\end{smallmatrix}$. The pair $(1,1),(1,2)$ gives $(9,2,3,1,0)$, which sorts to the beta sequence of $(1^5)$ with sign $-1$ and coefficient $v(4)-v(3)=1$. The pair $(1,1),(1,3)$ gives $(7,5,2,1,0)$, shape $(2,2,1)$ with sign $+1$ and coefficient $v(4)-v(1)=1$. The pair $(2,1),(2,2)$ gives $(7,4,3,1,0)$, shape $(3,1^2)$ with sign $+1$ and coefficient $v(2)-v(1)=1$. The remaining pair has repeated beta entries and vanishes. Thus the first displayed Weyl identity follows by direct substitution. [F1, F2]

1.3 Verify the two zero forms directly at $q=-1$. For each $\eta\in\{(3,2),(3,1,1)\}$, write $v_j$ for the Murphy vector whose row-reading word is, respectively, $12345,12435,12534,13425,13524$ for $j=0,\ldots,4$; the shape $(3,1,1)$ has the additional word $14523$, giving $v_5$. The row action gives $v_0T_1=v_0T_2=-v_0$, $v_1T_2=v_3$ and $v_2T_2=v_4$. The first-column Garnir belt between the first two rows gives $v_3T_1=-v_0-v_1-v_3$: its row-standard terms have lower first entry $1,2,3,4$, and its other side has shape $(4,1)$, strictly above either $\eta$. Also $v_3T_4=v_4$, $v_1T_4=v_2$ and $v_0T_4=-v_0$. The last identity is the row action for $(3,2)$; for $(3,1,1)$ it follows from $x_{(3,1,1)}(1+T_4)=x_{(3,2)}$, a higher-shape element. Since $T_1T_4=T_4T_1$, these identities give $v_4T_1=v_0-v_2-v_4$. These are finite row-action and Garnir calculations from the supplied integral Murphy construction. [F3, algebra]

2.1 Put $r_j=\langle v_0,v_j\rangle$. Self-adjointness of $T_1,T_2$ and $v_0T_i=-v_0$ imply $\langle v_0,v_jT_i\rangle=-r_j$. The four identities of step 1.3 consequently give $r_1=-r_0$, $r_2=r_0$, $r_3=-r_1$ and $r_4=-r_2$. But $r_0=[\eta]!_{-1}=0$, since $x_\eta^2=[\eta]!_q x_\eta$ and $[3]!_{-1}$ contains $[2]_{-1}=0$. Thus $r_0,\ldots,r_4$ are zero for both shapes. [F3, step 1.3, algebra]

2.2 Compute the smaller rows rather than assuming them. The same calculation for $(3,1^2)$ gives $\sum_{i>0}[W^{(3,1^2)}(i)]=[W^{(2,2,1)}]+[W^{(1^5)}]$: the pairs with hook lengths $(5,2)$ and $(2,1)$ give those two terms, while the $(5,1)$ coefficient is zero. For $(2,2,1)$, the only nonzero symbols arise from pairs $(4,2)$ and $(3,1)$, both of valuation difference zero. For $(2,1^3)$ the sole pair is $(5,1)$, also zero; $(1^5)$ has no pair. Hence these three Weyl modules have zero positive sums and zero radicals, so they equal their simple heads. For $(3,1^2)$ each displayed simple occurs once in the positive sum; because its first submodule is the radical and later ones lie inside it, both radical multiplicities are exactly $1$. Its class is consequently $[L^{(3,1^2)}]+[L^{(2,2,1)}]+[L^{(1^5)}]$. Substitution into step 1.2 now gives $[L^{(3,1^2)}]+2[L^{(2,2,1)}]$, proving the stated preliminary multiplicity conclusions without reading a signed individual Weyl coefficient as a simple multiplicity. [F1, F2, step 1.2]

3.1 For the remaining vector of $(3,1,1)$, put $x=x_{(3,1,1)}$. Its distinguished inverse word is $T_3T_4T_2T_3$. Expanding the finite row symmetrizers with $T_i^2=-2T_i-1$ and the braid relations gives the exact identity $$xT_3T_4T_2T_3x=x_{(5)}-(1+T_4)x_{(4,1)}(1+T_4)-x_{(3,2)}.$$ Every term on the right belongs to the higher dominance ideal for $(3,1,1)$, so the cell-product coefficient is $r_5=0$. Together with step 2.1, this puts the canonical vector $v_0$ in the form radical of each cell. That radical is a submodule, and $v_0H$ is the entire Murphy cell, since its standard basis is $x_\eta T_{d(t)}$ modulo the higher ideal. Hence both forms are identically zero. Their Schur-simple images are zero by the exact radical-corner identity in [F3]. This uses no general Gram-entry divisor or finite-$e$ classification. [F3, step 2.1, algebra]



4.1 Supply the actual dimension argument. The regular-weight Gram product for the Murphy cell $(2,2,1)$ is $$\hat q^7\frac{[4]_{\hat q}}{[2]_{\hat q}}[3]_{\hat q}^4   =\hat q^7(1+\hat q^2)[3]_{\hat q}^4,$$ since its two signed symbols have shapes $(1^5)$ and $(2,1^3)$ with standard-tableau counts $1$ and $4$. The five standardizations have lengths $0,1,1,2,3$, giving exponent $7$. At $\hat q=-1$ this determinant is $-2\ne0$. Thus $S_{\mathrm M}^{(2,2,1)}=D_{\mathrm M}^{(2,2,1)}$ is simple of dimension $5$, counted by its five standard tableaux. Both Schur simples $L^{(3,1^2)}$ and $L^{(3,2)}$ are killed by the local zero-form calculation of step 3.1 and the exact corner/form identity [F3]. Applying the functor to the positive sum of step 2.2 therefore gives $\sum_{i>0}[S_{\mathrm M}^{(3,2)}(i)]=2[D_{\mathrm M}^{(2,2,1)}]$. The form of $(3,2)$ is identically zero by step 3.1, so its first submodule is the whole five-dimensional cell. Every composition factor of that cell must appear in the positive sum, hence must be this five-dimensional simple. Dimension forces exactly one factor, proving $S_{\mathrm M}^{(3,2)}\cong D_{\mathrm M}^{(2,2,1)}$. Exact projection of a composition series, with distinct nonzero simple images as in [F3], gives $d_{(3,2),(2,2,1)}=1$. [F1, F3, step 2.2, step 3.1]

5.1 A further consistency check is the regular-weight Gram product $\hat q^8[3]_{\hat q}[4]_{\hat q}^4[2]_{\hat q}^6$ for $(3,2)$, whose valuation is $10$, agreeing with two five-dimensional positive Specht submodules. This is a check of the complete balanced formula; it is not the unsupported full-hook product used in the former classification proof. [F1, step 1.2, step 4.1]

6.1 Translate simultaneously by $\theta$ and conjugation. The actual ordinary/Murphy module-and-form comparison sends the isomorphism of step 4.1 to $S_{\mathrm{DJ}}^{(2,2,1)}\cong D_{\mathrm{DJ}}^{(3,2)}$. The partition $(2,2,1)$ is not regular, so its own **cell-form quotient** is zero; this does not say its actual head is zero, since the module itself is simple. The dominance inequality $(3,2)\unrhd(2,2,1)$ agrees with the ordinary-convention unitriangular bound. This proves every claimed numeric conclusion. [F3, step 2.2, step 3.1, step 4.1] ∎
