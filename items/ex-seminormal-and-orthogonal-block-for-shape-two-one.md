---
id: ex-seminormal-and-orthogonal-block-for-shape-two-one
kind: example
title: "The seminormal and orthogonal blocks for shape (2,1)"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-young-seminormal-form-from-jucys-murphy-eigenlines, thm-young-orthogonal-form-from-seminormal-rescaling, def-content-vector-of-a-standard-tableau, def-young-tableau-standard-tableau-and-shape, thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, section 6, printed pp. 22-24"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer (1978), section 25 (Young's orthogonal form, 25.1-25.5 and Theorem 25.3), printed pp. 114-124"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorems 4.2-4.4, printed pp. 26-32"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $T=\begin{smallmatrix}1&3\\2\end{smallmatrix}$ and
$T'=\begin{smallmatrix}1&2\\3\end{smallmatrix}$ be the two standard tableaux
of shape $(2,1)$, so that $s_2T=T'$ and
$r:=c_T(3)-c_T(2)=1-(-1)=2$. In the seminormal normalization of the cited
theorem the two relations are
$$s_2v_{T'}=v_T-\tfrac12v_{T'},\qquad s_2v_T=\tfrac12v_T+\tfrac34v_{T'},$$
so the matrix of $s_2$ in the ordered basis $(v_T,v_{T'})$ with columns the
images is $\begin{pmatrix}1/2&1\\3/4&-1/2\end{pmatrix}$; its transpose
$\begin{pmatrix}1/2&3/4\\1&-1/2\end{pmatrix}$ records the same images as rows rather than columns. Taking $v_{T'}$ to have unit norm, the longer vector $v_T$ has norm
$\sqrt{1-r^{-2}}=\sqrt3/2$, so unit normalization multiplies $v_T$ by
$1/\sqrt{1-r^{-2}}=2/\sqrt3$, and the orthogonal form of $s_2$ becomes the
symmetric orthogonal block
$\begin{pmatrix}1/2&\sqrt3/2\\ \sqrt3/2&-1/2\end{pmatrix}$. For $s_1$ the
entries $1,2$ lie in the same row of $T'$ and in the same column of $T$, so
$s_1v_{T'}=+v_{T'}$ and $s_1v_T=-v_T$. Both matrices square to the identity
and satisfy $s_1s_2s_1=s_2s_1s_2$ on the two-dimensional Specht module.

## Facts & Assumptions

**Given:** The two standard tableaux $T,T'$ of shape $(2,1)$, with $T$ obtained from the row tableau $T'=T^{(2,1)}$ by the transposition $s_2=(2\ 3)$, and the Young basis vectors $v_T,v_{T'}$ of the seminormal theorem ([[thm-young-seminormal-form-from-jucys-murphy-eigenlines]], [[def-young-tableau-standard-tableau-and-shape]]).

[F1] For a standard tableau $S$ the contents of the cells containing $2$ and $3$ are $c_S(2)$ and $c_S(3)$; $T$ carries $2$ in $(2,1)$ and $3$ in $(1,2)$ so that $c_T(2)=-1$, $c_T(3)=1$ and $r=c_T(3)-c_T(2)=2$; the size-two prefixes are $T\downarrow[2]=\begin{smallmatrix}1\\2\end{smallmatrix}$ of shape $(1,1)$ and $T'\downarrow[2]=[1\ 2]$ of shape $(2)$ ([[def-content-vector-of-a-standard-tableau]], [[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]]).

[F2] The seminormal formulas: if $S'=s_iS$ is standard with $i,i+1$ in different rows and columns and $S'$ the longer tableau, then $s_iv_S=v_{S'}+r_S^{-1}v_S$ and $s_iv_{S'}=(1-r_S^{-2})v_S-r_S^{-1}v_{S'}$, where $r_S=c_S(i+1)-c_S(i)$; in the reverse ordering the pair is governed by the same formulas with $S,S'$ interchanged and $r_S$ replaced by $-r_S$; entries $i,i+1$ in the same row or column give $s_iv_S=\pm v_S$ ([[thm-young-seminormal-form-from-jucys-murphy-eigenlines]]).

[F3] Rescaling the seminormal basis to unit vectors for the invariant form gives the symmetric orthogonal block $\begin{pmatrix}r^{-1}&\sqrt{1-r^{-2}}\\ \sqrt{1-r^{-2}}&-r^{-1}\end{pmatrix}$ on $(v_S,v_{S'})$, the positive square root being taken ([[thm-young-orthogonal-form-from-seminormal-rescaling]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F2] with $S=T'$ (the row tableau, of length $0$) and $S'=s_2S=T$ (of length $1$, the longer one): here $r_{T'}=c_{T'}(3)-c_{T'}(2)=(-1)-1=-2$, so $s_2v_{T'}=v_T+(-2)^{-1}v_{T'}=v_T-\tfrac12v_{T'}$ and $s_2v_T=(1-(-2)^{-2})v_{T'}-(-2)^{-1}v_T=\tfrac34v_{T'}+\tfrac12v_T$. [F1, F2, algebra]

1.2 The action of $s_1=(1\ 2)$: in $T$ the entries $1,2$ occupy $(1,1)$ and $(2,1)$, the same column, so $s_1v_T=-v_T$; in $T'$ they occupy $(1,1)$ and $(1,2)$, the same row, so $s_1v_{T'}=+v_{T'}$. Hence $s_1$ acts by $\operatorname{diag}(-1,1)$ in the ordered basis. [F1, F2, given, algebra]

2.1 Matrix. In the ordered basis $(v_T,v_{T'})$ whose columns are the images, step 1.1 gives $M=\begin{pmatrix}1/2&1\\3/4&-1/2\end{pmatrix}$. The transpose $M^{\mathsf T}$ is the array obtained when the images are written as rows. The matrix acting on coordinate columns is $M$. [step 1.1, algebra]

3.1 Involution. Squaring the matrix of step 2.1 gives $\begin{pmatrix}1/4+3/4&1/2-1/2\\3/8-3/8&3/4+1/4\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$, and the matrix of step 1.2 is visibly an involution; this is the statement $s_1^2=s_2^2=1$ in the two-dimensional Specht module. [step 2.1, step 1.2, algebra]

3.2 Braid relation. With $M$ the matrix of step 2.1 and $D=\operatorname{diag}(-1,1)$ that of step 1.2, direct multiplication gives $DMD=\begin{pmatrix}1/2&-1\\-3/4&-1/2\end{pmatrix}=MDM$, which is $s_1s_2s_1=s_2s_1s_2$ in the ordered basis. [step 2.1, step 1.2, algebra]

3.3 Orthogonal rescaling. Normalize the shorter vector $v_{T'}$ to norm $1$. The norm ratio from [F3], applied first in the shorter-to-longer ordering $(T',T)$, gives $\|v_T\|=\sqrt3/2$. Thus the unit basis in the example's ordering is $(u_T,u_{T'})=((2/\sqrt3)v_T,v_{T'})$. With $E=\operatorname{diag}(2/\sqrt3,1)$, direct change of basis gives $E^{-1}ME=\begin{pmatrix}1/2&\sqrt3/2\\\sqrt3/2&-1/2\end{pmatrix}$. This real symmetric matrix squares to $I$ and is orthogonal. [F3, step 2.1, algebra]

4.1 Consistency with the row and column cases. The signs $s_1v_T=-v_T$ and $s_1v_{T'}=+v_{T'}$ of step 1.2 are the same-row and same-column scalars of [F2] and are unchanged by the positive unit rescaling, so the full action of $S_3$ on the two-dimensional Specht module is exhibited in both normalizations. [F2, F3, step 1.2, step 3.3, algebra]

5.1 The example is the smallest nontrivial check of the seminormal and orthogonal forms: the axial distance $r=2$, the structure constants $\tfrac12,\tfrac34,1$, the rescaling factor $2/\sqrt3$ and the orthogonal block agree with the displayed matrices of the sources, and both matrices were verified by exact rational multiplication in steps 3.1 and 3.2. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Image placement.** The column-image matrix is $\begin{pmatrix}1/2&1\\3/4&-1/2\end{pmatrix}$; writing the images as rows transposes this array. If both arrays are instead regarded as column-action matrices, they are similar by rescaling $v_T$ by $4/3$. All computations above use the column-image convention.

- **The orthogonal block.** $\begin{pmatrix}1/2&\sqrt3/2\\ \sqrt3/2&-1/2\end{pmatrix}$ is the reflection of the plane in the line spanned by the eigenvector of $s_2$ with eigenvalue $+1$; it squares to the identity and satisfies the braid relation with the diagonal matrix of $s_1$ by step 3.2.

- **Comparison with James.** For shape $(3,2)$ the same conventions produce $2\times2$ blocks with axial distances $r=\pm2,\pm3$; the shape $(2,1)$ block here is its smallest instance and the one displayed in the sources.
