---
id: thm-finite-iterated-homological-gaussian-elimination
kind: theorem
title: Finite iteration of current invertible-block cancellations
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [prop-homological-gaussian-elimination-gives-a-strong-deformation-retract, def-invertible-differential-block-and-schur-complement-reduction, lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block, def-complex-homotopy-and-contractibility-in-an-additive-category, thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5 (PDF p. 5)"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
verification:
  precheck: pass
---

## Statement

Let $X^\bullet$ be a cochain complex in an additive category.

1. **Iteration.** Suppose a finite sequence of Gaussian cancellations is
   performed on $X^\bullet$, each step cancelling an invertible pivot block in
   the *current* complex, so that each step is a block decomposition as in
   [[def-invertible-differential-block-and-schur-complement-reduction]] and the
   current complex is replaced by its candidate reduction. Then the composite of
   the steps is a strong deformation retract of $X^\bullet$ onto the final
   reduction, with the explicit data described in clause 2.
2. **Composition of retract data.** If $X^\bullet\rightleftarrows
   Y^\bullet$ has data $(p_1,\imath_1,h_1)$ and $Y^\bullet\rightleftarrows
   Z^\bullet$ has data $(p_2,\imath_2,h_2)$ in the sense of
   [[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]],
   then
   $$p=p_2p_1,\qquad \imath=\imath_1\imath_2,\qquad h=h_1+\imath_1h_2p_1$$
   satisfy $p\imath=1_{Z^\bullet}$, $1_{X^\bullet}-\imath
   p=dh+hd$, $ph=0$, $h\imath=0$ and $h^2=0$, so they are strong deformation
   retract data of $X^\bullet$ onto $Z^\bullet$.
3. **Aggregate pivots.** If a decomposition of $X^n,X^{n+1}$ is presented with
   pivot blocks that are finite biproducts $U=U_1\oplus\cdots\oplus U_k$,
   $V=V_1\oplus\cdots\oplus V_k$ and a block-diagonal isomorphism
   $\Phi=\operatorname{diag}(\varphi_1,\dots,\varphi_k):U\to V$, then a single
   cancellation with pivot $\Phi$ is available, and the resulting reduction is
   the complex obtained by cancelling $\varphi_1,\dots,\varphi_k$ successively
   in the current Schur-complement complexes.
4. **Choices and limits.** Different valid finite choices of cancellations
   yield reductions that are homotopy equivalent but not generally equal
   complexes: there is no canonical reduced complex, no guarantee that a
   reduction is smaller, and no assertion about infinite sequences of
   cancellations.

## Facts & Assumptions

**Given:** A cochain complex $X^\bullet$ in an additive category, its invertible-block decompositions at the chosen degrees, the explicit strong deformation retracts attached to single cancellations, and the composites described in the statement.

[L1] A single cancellation with pivot $\varphi:U\to V$ in the current complex gives cochain maps $p,\imath$ and a homotopy $h$ of degree $-1$ with $p\imath=1$ and $1-\imath p=dh+hd$, $ph=0$, $h\imath=0$, $h^2=0$ ([[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]).

[L2] The candidate reduction at the pivot replaces the objects $A\oplus U,B\oplus V$ in degrees $n,n+1$ by $A,B$, keeps all other objects and arrows, keeps the neighbouring components $p$ of $d^{n-1}$ and $r$ of $d^{n+1}$, and replaces $d^n$ by the Schur complement $a-b\varphi^{-1}c$; the pivot blocks $U,V$ may themselves be biproducts and $\varphi$ may be any isomorphism between them ([[def-invertible-differential-block-and-schur-complement-reduction]]).

[L3] The candidate reduction is a cochain complex, and the identities $Ld^nR=\operatorname{diag}(\bar d,\varphi)$, $R^{-1}(p;q)=(p;0)$, $(r\ s)L^{-1}=(r\ 0)$ hold for every pivot ([[lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block]]).

[L4] Composition of morphisms between finite biproducts is matrix multiplication, and finite biproducts may be reassociated: splitting $A\oplus U_1\oplus U'$ as $(A\oplus U')\oplus U_1$ and $B\oplus V_1\oplus V'$ as $(B\oplus V')\oplus V_1$ is a biproduct decomposition again ([[thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]], [[def-invertible-differential-block-and-schur-complement-reduction]]).

[L5] Cochain maps are closed under composition, the equations $p\imath=1$, $1-\imath p=dh+hd$, $ph=0$, $h\imath=0$, $h^2=0$ are degreewise identities of morphisms, and a cochain map $u$ satisfies $du=ud$ in the graded sense ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

## Proof

**Proof technique:** direct.

1.1 Composition of retract data. Assume $p_1\imath_1=1_Y$, $\imath_1p_1=1_X-(dh_1+h_1d)$, $p_2\imath_2=1_Z$ and $\imath_2p_2=1_Y-(dh_2+h_2d)$, and put $p=p_2p_1$, $\imath=\imath_1\imath_2$, $h=h_1+\imath_1h_2p_1$. Then $p\imath=p_2p_1\imath_1\imath_2=p_21_Y\imath_2=p_2\imath_2=1_Z$; moreover $\imath p=\imath_1\imath_2p_2p_1=\imath_1(1_Y-dh_2-h_2d)p_1=\imath_1p_1-\imath_1dh_2p_1-\imath_1h_2dp_1$, so $1_X-\imath p=(1_X-\imath_1p_1)+\imath_1dh_2p_1+\imath_1h_2dp_1=dh_1+h_1d+\imath_1dh_2p_1+\imath_1h_2dp_1$. On the other hand $dh+hd=d(h_1+\imath_1h_2p_1)+(h_1+\imath_1h_2p_1)d=dh_1+h_1d+d\imath_1h_2p_1+\imath_1h_2p_1d$, and $d\imath_1=\imath_1d$, $p_1d=dp_1$ because $\imath_1,p_1$ are cochain maps, so the two expressions coincide and $1_X-\imath p=dh+hd$. [L1, L5, algebra]

1.2 Aggregate pivots. Let $X^n=A\oplus U_1\oplus U'$ and $X^{n+1}=B\oplus V_1\oplus V'$ with pivot blocks $U=U_1\oplus U'$, $V=V_1\oplus V'$ and $\Phi=\operatorname{diag}(\varphi_1,\Phi')$, where $\varphi_1:U_1\to V_1$ and $\Phi':U'\to V'$ are isomorphisms; write $d^n$ as the block matrix with rows $B,V_1,V'$ and columns $A,U_1,U'$ as $\begin{pmatrix}a&b_1&b'\\ c_1&\varphi_1&0\\ c'&0&\Phi'\end{pmatrix}$, and write $d^{n-1}=(p;q_1;q')$ and $d^{n+1}=(r\ s_1\ s')$ accordingly. Cancelling $\Phi$ at once, $\Phi^{-1}=\operatorname{diag}(\varphi_1^{-1},\Phi'^{-1})$ multiplies out to $b\Phi^{-1}c=b_1\varphi_1^{-1}c_1+b'\Phi'^{-1}c'$, so by [L2] the reduced differential is $a-b_1\varphi_1^{-1}c_1-b'\Phi'^{-1}c'$ and the neighbouring arrows are $p$ and $r$. Cancelling first $\varphi_1$ in the reassociated decomposition $(A\oplus U')\oplus U_1$, $(B\oplus V')\oplus V_1$ of [L4], the pivot matrix is $\begin{pmatrix}\tilde a&\tilde b\\ \tilde c&\varphi_1\end{pmatrix}$ with $\tilde a=\begin{pmatrix}a&b'\\ c'&\Phi'\end{pmatrix}$, $\tilde b=(b_1;0)$, $\tilde c=(c_1\ 0)$, so the new Schur complement is $\tilde a-\tilde b\varphi_1^{-1}\tilde c=\begin{pmatrix}a-b_1\varphi_1^{-1}c_1&b'\\ c'&\Phi'\end{pmatrix}$, a complex by [L3], whose $(U',V')$-pivot is $\Phi'$ and whose neighbouring arrows are $(p;q')$ and $(r\ s')$; cancelling $\Phi'$ there gives reduced differential $a-b_1\varphi_1^{-1}c_1-b'\Phi'^{-1}c'$, incoming arrow $p$ and outgoing arrow $r$. The two orders therefore produce the same objects and the same three reduced arrows; iterating the two-block comparison cancels $\operatorname{diag}(\varphi_1,\dots,\varphi_k)$ in one step with the same result as the successive cancellations. [L2, L3, L4, algebra]

2.1 Side conditions of the composite. With the data of step 1.1, $ph=p_2p_1h_1+p_2p_1\imath_1h_2p_1=p_2\cdot0+p_2\cdot1_Y\cdot h_2p_1=p_2h_2p_1=0$, using $p_1h_1=0$ and $p_2h_2=0$; likewise $h\imath=h_1\imath_1\imath_2+\imath_1h_2p_1\imath_1\imath_2=0+\imath_1h_2\cdot1_Y\cdot\imath_2=\imath_1h_2\imath_2=0$, using $h_1\imath_1=0$ and $h_2\imath_2=0$; and $h^2=h_1^2+h_1\imath_1h_2p_1+\imath_1h_2p_1h_1+\imath_1h_2p_1\imath_1h_2p_1=0+0+\imath_1h_2(p_1h_1)+\imath_1h_2\cdot1_Y\cdot h_2p_1=\imath_1h_2^2p_1=0$, using $h_1^2=0$ and $h_2^2=0$. Hence the composite data satisfies all three side conditions of [L1]. [L1, L5, step 1.1, algebra]

3.1 Finite iteration. A sequence of length one is a single cancellation, which is [L1]. For a sequence of length $m\ge2$, apply the inductive hypothesis to the first $m-1$ cancellations, obtaining a strong deformation retract of $X^\bullet$ onto the intermediate complex $Y^\bullet$ given by data $(p_1,\imath_1,h_1)$, and let $(p_2,\imath_2,h_2)$ be the data of the last cancellation, performed in the current complex $Y^\bullet$ with an invertible pivot, so that it is a strong deformation retract of $Y^\bullet$ onto the final reduction $Z^\bullet$; such data is supplied by [L1] for that pivot. Steps 1.1 and 2.1 then show that $p=p_2p_1$, $\imath=\imath_1\imath_2$, $h=h_1+\imath_1h_2p_1$ are strong deformation retract data of $X^\bullet$ onto $Z^\bullet$. By induction on the length, every finite sequence of cancellations with invertible current pivots yields such a composite retract. [L1, step 1.1, step 2.1, algebra]

4.1 Different choices. Suppose two finite sequences of cancellations lead from $X^\bullet$ to reductions $\bar X^\bullet$ and $\bar X'^\bullet$; by step 3.1 there are strong deformation retract data $(p,\imath,h)$ of $X^\bullet$ onto $\bar X^\bullet$ and $(p',\imath',h')$ of $X^\bullet$ onto $\bar X'^\bullet$. Define $u:=p'\imath:\bar X^\bullet\to\bar X'^\bullet$ and $v:=p\imath':\bar X'^\bullet\to\bar X^\bullet$; then $uv=p'\imath p\imath'=p'(1_{X^\bullet}-(dh+hd))\imath'=1_{\bar X'}-d(p'h\imath')-(p'h\imath')d$ and similarly $vu=1_{\bar X}-d(ph'\imath)-(ph'\imath)d$, using that $p',\imath,p,\imath'$ are cochain maps and $p'\imath'=1$, $p\imath=1$. Hence the two reductions are homotopy equivalent, with explicit comparison maps. They need not be equal: in the complex $k\xrightarrow{1}k\xrightarrow{0}k\xrightarrow{1}k$ over a field, cancelling at degree $0$ leaves the two-term complex with $k$ in degrees $2,3$ and cancelling at degree $2$ leaves the two-term complex with $k$ in degrees $0,1$; these complexes are both contractible, hence homotopy equivalent, but their degree-$0$ objects are $0$ and $k$, so they are not equal. [L1, L2, step 3.1, algebra]

5.1 Conclusion. Step 1.1 and step 2.1 give the composition formulas of clause 2 together with all five identities; step 3.1 gives clause 1 by induction; step 1.2 verifies clause 3, including that a block-diagonal aggregate pivot may be cancelled in one step with the same outcome as the successive cancellations; and step 4.1 gives clause 4, producing explicit homotopy inverse comparison maps between reductions obtained from different choices and an example where the reductions are not equal. The statement asserts nothing about infinite sequences of cancellations, about termination of any automatic procedure, or about the size of the reduction when no invertible pivot is available at a chosen degree. ∎ [step 1.1, step 2.1, step 1.2, step 3.1, step 4.1, L2]
