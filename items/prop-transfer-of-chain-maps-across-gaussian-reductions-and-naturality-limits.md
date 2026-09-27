---
id: prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits
kind: proposition
title: Transferred maps are functorial up to homotopy, with strict naturality limits
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [prop-homological-gaussian-elimination-gives-a-strong-deformation-retract, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-complex-homotopy-and-contractibility-in-an-additive-category, def-homotopy-classes-of-chain-maps, def-homotopy-category-of-chain-complexes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 1, printed pp. 2-5 and 17-18"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mathcal A$ be an additive category and let chosen strong deformation
retract data be given as in
[[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]:
$$(p_X,\imath_X,h_X)\ \text{for }X^\bullet\text{ onto }\bar X^\bullet,\qquad (p_Y,\imath_Y,h_Y)\ \text{for }Y^\bullet\text{ onto }\bar Y^\bullet,\qquad (p_Z,\imath_Z,h_Z)\ \text{for }Z^\bullet\text{ onto }\bar Z^\bullet .$$
For every cochain map $f:X^\bullet\to Y^\bullet$ define the **transfer**
$$\bar f:=p_Yf\imath_X:\bar X^\bullet\to\bar Y^\bullet,$$
and for every homotopy $s:f\simeq g$ define $\bar s:=p_Ys\imath_X$.

1. **Maps and homotopies.** Each transfer $\bar f$ is a cochain map, each $\bar
   s$ is a homotopy $\bar f\simeq\bar g$ of degree $-1$, and consequently
   transfer is well defined on homotopy classes of cochain maps.
2. **Functoriality up to homotopy.** The identity transfers strictly,
   $\overline{1_{X^\bullet}}=1_{\bar X^\bullet}$, and for composable cochain
   maps $f:X^\bullet\to Y^\bullet$, $g:Y^\bullet\to Z^\bullet$,
   $$\overline{(gf)}-\bar g\bar f=dk+kd,\qquad k:=p_Zgh_Yf\imath_X,$$
   so $\overline{(gf)}\simeq\bar g\bar f$: transfer preserves identities and
   composition on homotopy classes, but it is not asserted to be a strict
   functor on cochain maps.
3. **Strictness fails.** Transfer need not preserve composition strictly: for
   over a field $k$, take $Y^\bullet=K=(k\xrightarrow{1}k)$ in degrees
   $0,1$ and $X^\bullet=Y^\bullet\oplus K$. The split-off retract onto
   $\bar X^\bullet=Y^\bullet$ admits cochain maps $f,g$ with $\bar f=0=\bar g$ and
   $\overline{(gf)}=1_{\bar X^\bullet}$, so $\overline{(gf)}-\bar g\bar f\ne0$.
4. **Strict naturality, and what is not claimed.** If cochain maps $f:X^\bullet
   \to Y^\bullet$ and $g:Y^\bullet\to Z^\bullet$ commute with the chosen retract
   data, that is $f\imath_X=\imath_Y\bar f$, $p_Yf=\bar f p_X$, $g\imath_Y=\imath_Z\bar g$
   and $p_Zg=\bar g p_Y$, then $\overline{(gf)}=\bar g\bar f$ strictly. Transfer
   depends on the chosen retracts and homotopies; no choice-free, canonical or
   confluent transfer, and no independence of the chosen data, is claimed.

## Facts & Assumptions

**Given:** An additive category $\mathcal A$ with three chosen strong deformation retract data $(p_X,\imath_X,h_X)$, $(p_Y,\imath_Y,h_Y)$, $(p_Z,\imath_Z,h_Z)$ as in the statement, composable cochain maps $f:X^\bullet\to Y^\bullet$ and $g:Y^\bullet\to Z^\bullet$, and, separately, parallel cochain maps $u,v:X^\bullet\to Y^\bullet$ with a homotopy $s:u\simeq v$.

[L1] For each of the three pairs, $p$ and $\imath$ are cochain maps, $h$ has degree $-1$, and $p\imath=1$, $1-\imath p=dh+hd$, $p h=0$, $h\imath=0$, $h^2=0$ ([[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]).

[L2] The split-off retract of the theorem: if $X^\bullet=\bar X^\bullet\oplus K$ is a biproduct in which $K$ is the contractible two-term complex with differential the identity in degrees $n,n+1$, then the projection $p$, the inclusion $\imath$ and the homotopy $h$ with $h^{n+1}=\begin{pmatrix}0&0\\ 0&1\end{pmatrix}$ and $h^j=0$ for $j\ne n+1$ are strong deformation retract data of $X^\bullet$ onto $\bar X^\bullet$ ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]], [[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]).

[L3] A homotopy $s$ of degree $-1$ between cochain maps satisfies $f-g=ds+sd$; composites and sums of cochain maps are cochain maps, and a cochain map $u$ satisfies $du=ud$ in the graded sense; homotopy is an equivalence relation compatible with composition, so the homotopy classes of cochain maps are the morphisms of the homotopy category under the reindexing dictionary of [[def-complex-homotopy-and-contractibility-in-an-additive-category]] ([[def-homotopy-classes-of-chain-maps]], [[def-homotopy-category-of-chain-complexes]]).

## Proof

**Proof technique:** direct.

1.1 Transfer of maps and homotopies. The composite $\bar f=p_Yf\imath_X$ of cochain maps is a cochain map, so $d\bar f=\bar fd$ by [L3]. If $f-g=ds+sd$, then $\bar f-\bar g=p_Y(f-g)\imath_X=p_Yds\imath_X+p_Ysd\imath_X=d(p_Ys\imath_X)+(p_Ys\imath_X)d$, using $p_Yd=dp_Y$ and $d\imath_X=\imath_Xd$; hence $\bar s=p_Ys\imath_X$ is a degree-$(-1)$ homotopy $\bar f\simeq\bar g$. Therefore homotopic maps have homotopic transfers, and transfer is well defined on homotopy classes. [L1, L3, algebra]

1.2 Functoriality up to homotopy. The identity transfers strictly: $\overline{1_{X^\bullet}}=p_X1_{X^\bullet}\imath_X=p_X\imath_X=1_{\bar X^\bullet}$. For composable $f,g$ set $k:=p_Zgh_Yf\imath_X$; then $\bar g\bar f=p_Zg\imath_Yp_Yf\imath_X=p_Zg(1_{Y^\bullet}-(dh_Y+h_Yd))f\imath_X=\overline{(gf)}-(p_Zgdh_Yf\imath_X+p_Zgh_Ydf\imath_X)$, and since $p_Z,g,f,\imath_X$ are cochain maps the two correction terms are $d(p_Zgh_Yf\imath_X)$ and $(p_Zgh_Yf\imath_X)d$, that is $dk$ and $kd$. Hence $\bar g\bar f=\overline{(gf)}-(dk+kd)$, equivalently $\overline{(gf)}-\bar g\bar f=dk+kd$, so $\overline{(gf)}\simeq\bar g\bar f$ with this sign convention. [L1, L3, algebra]

1.3 Strictness fails. Take $\mathcal A$ the category of vector spaces over a field, let $K$ be the two-term complex $k\xrightarrow{1}k$ concentrated in degrees $0,1$ with zero neighbouring terms, let $\bar X^\bullet$ be a second copy of it and $X^\bullet=\bar X^\bullet\oplus K$, and use the split-off retract of [L2] with $\imath$ the inclusion of the first summand, $p$ the projection onto it and $h^1=\begin{pmatrix}0&0\\ 0&1\end{pmatrix}$, $h^0=h^2=0$. In each degree let $f=\begin{pmatrix}0&0\\ 1&0\end{pmatrix}$ and $g=\begin{pmatrix}0&1\\ 0&0\end{pmatrix}$ in the coordinates $\bar X^0\oplus K^0$ respectively $\bar X^1\oplus K^1$; the components in degrees $0$ and $1$ agree, so both maps commute with the only nonzero differential $d^0=1$, so $f$ and $g$ are cochain maps. Then $gf=\begin{pmatrix}1&0\\ 0&0\end{pmatrix}=\imath p$, and the transfers are $\bar f=p f\imath=0$ and $\bar g=pg\imath=0$ because $f\imath$ and $g\imath$ land in the complementary summand killed by $p$, while $\overline{(gf)}=p(gf)\imath=p\imath=1_{\bar X^\bullet}$. Hence $\overline{(gf)}-\bar g\bar f=1_{\bar X^\bullet}\ne0$, so transfer is not a strict functor on cochain maps. [L2, L3, algebra]

1.4 Strict naturality for commuting morphisms. Let $f:X^\bullet\to Y^\bullet$ and $g:Y^\bullet\to Z^\bullet$ satisfy $f\imath_X=\imath_Y\bar f$, $p_Yf=\bar f p_X$, $g\imath_Y=\imath_Z\bar g$ and $p_Zg=\bar g p_Y$. Then $\overline{(gf)}=p_Zgf\imath_X=p_Zg\imath_Y\bar f=\bar g p_Y\imath_Y\bar f=\bar g\bar f$, the last step by [L1]; under these hypotheses the transfer $p_Yf\imath_X=\bar fp_X\imath_X=\bar f$ is the given $\bar f$, so the computation compares the transfer of the composite with the composite of the transfers. In this situation identity and composition are preserved strictly, not merely up to homotopy. [L1, L3, algebra]

2.1 Conclusion. Step 1.1 shows that transfer sends cochain maps to cochain maps and homotopic maps to homotopic maps, so it is well defined on homotopy classes of cochain maps; step 1.2 shows that it preserves identities strictly and composition up to the explicit homotopy $p_Zgh_Yf\imath_X$, so it is functorial on homotopy classes while not being a strict functor on cochain maps; step 1.3 exhibits cochain maps with $\bar f=\bar g=0$ and $\overline{(gf)}=1$, which establishes that failure; and step 1.4 gives strict functoriality on the subcategory of morphisms commuting with the chosen retract data. Since the transfer uses the chosen projections and inclusions, while the displayed comparison homotopy also uses the chosen homotopies, clause 4 records that no choice-free, canonical or confluent transfer and no independence of the chosen data is being claimed. ∎ [step 1.1, step 1.2, step 1.3, step 1.4, L3]
