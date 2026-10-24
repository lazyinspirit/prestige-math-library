---
id: cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps
kind: counterexample
title: Gaussian transfer is not strictly functorial on arbitrary cochain maps
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits, def-complex-homotopy-and-contractibility-in-an-additive-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 1, printed pp. 2-5 and 17-18"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
generation:
  role: counterexample
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement refuted

Transfer of cochain maps along a Gaussian reduction is strictly functorial: for
every pair of composable cochain maps $f,g$ and every chosen retract data,
$$\overline{(gf)}=\bar g\bar f .$$

## Facts & Assumptions

**Given:** A field $k$, the two-term cochain complex $Y^\bullet$ with $Y^0=Y^1=k$, $d^0=1$, $d^1=0$ and $Y^j=0$ otherwise, a second copy $K^\bullet$ of it, the biproduct $X^\bullet=Y^\bullet\oplus K^\bullet$, and the projection $p$, inclusion $\imath$ and homotopy $h$ displayed below.

[L1] For chosen retract data the transfer of a cochain map $f$ is $\bar f=p_Yf\imath_X$, the identity transfers strictly, and $\overline{(gf)}-\bar g\bar f=dk+kd$ with $k=p_Zgh_Yf\imath_X$; hence transfer is functorial on homotopy classes but is not asserted to be strictly functorial ([[prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits]]).

[L2] Cochain maps are the morphisms commuting with the differentials; a biproduct of complexes has the differentials acting componentwise and its projection and inclusion as cochain maps; a homotopy $s$ satisfies $f-g=ds+sd$, and a complex is contractible when $1=dh+hd$ for a suitable $h$ ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

## Counterexample

1.1 Retract data for $X^\bullet$ onto $Y^\bullet$. Write elements of $X^j=k\oplus k$ as pairs with the first coordinate in $Y^j$ and the second in $K^j$, and let $\imath=\binom{1}{0}$, $p=(1\ 0)$ in both degrees, with $h^1=\begin{pmatrix}0&0\\ 0&1\end{pmatrix}$, $h^0=0$ and $h^2=0$. Then $p\imath=1_k$ and $1-\imath p=\begin{pmatrix}0&0\\ 0&1\end{pmatrix}$. Here $d^0=1_{k^2}$ and $d^1=0$: in degree $1$, $d^0h^1+h^2d^1=1_{k^2}h^1+0=\begin{pmatrix}0&0\\ 0&1\end{pmatrix}$, and in degree $0$, $d^{-1}h^0+h^1d^0=0+h^1 1_{k^2}=\begin{pmatrix}0&0\\ 0&1\end{pmatrix}$. Thus $1-\imath p=dh+hd$, and the displayed data is a strong deformation retract of $X^\bullet$ onto $Y^\bullet$. [L2, algebra]

1.2 Two cochain maps. In both nonzero degrees set $f=\begin{pmatrix}0&0\\ 1&0\end{pmatrix}$ and $g=\begin{pmatrix}0&1\\ 0&0\end{pmatrix}$. At the only nonzero differential $d^0=1_{k^2}$, $f^1=f^0$ and $g^1=g^0$, so $f^1d^0=d^0f^0$ and $g^1d^0=d^0g^0$; at $d^1=0$ the cochain-map equations hold trivially. Thus $f$ and $g$ are cochain maps. Here $f$ sends the $Y$-coordinate isomorphically onto the $K$-coordinate and kills the $K$-coordinate, while $g$ sends the $K$-coordinate isomorphically onto the $Y$-coordinate and kills the $Y$-coordinate. [L2, algebra]

2.1 The individual transfers vanish. Since $\imath=\binom{1}{0}$, one has $f\imath=\binom{0}{1}$ and $g\imath=0$; applying $p=(1\ 0)$ gives $\bar f=pf\imath=0$ and $\bar g=pg\imath=0$ as cochain maps $Y^\bullet\to Y^\bullet$. [L1, step 1.2, algebra]

3.1 The transfer of the composite does not vanish. Since $gf=\begin{pmatrix}0&1\\ 0&0\end{pmatrix}\begin{pmatrix}0&0\\ 1&0\end{pmatrix}=\begin{pmatrix}1&0\\ 0&0\end{pmatrix}=\imath p$, one has $\overline{(gf)}=p(gf)\imath=p\imath p\imath=p\imath=1_{Y^\bullet}$, the identity cochain map of $Y^\bullet$, which is nonzero. Hence $\overline{(gf)}-\bar g\bar f=1_{Y^\bullet}\ne0$, so transfer is not strictly functorial on cochain maps, and the statement refuted is false. [L1, step 1.2, step 2.1, algebra]

4.1 The failure is consistent with the proposition. The complex $Y^\bullet$ is contractible, with contracting homotopy $\bar h^1=1_k$ and $\bar h^0=\bar h^2=0$, because in degree $0$ one has $d^{-1}\bar h^0+\bar h^1d^0=1_k$ and in degree $1$ one has $d^0\bar h^1+\bar h^2d^1=1_k$. Consequently every endomorphism $u$ of $Y^\bullet$, in particular the discrepancy $\overline{(gf)}-\bar g\bar f$ of step 3.1, is null-homotopic: from $1_{Y^\bullet}-0=d\bar h+\bar hd$ and $ud=du$ one obtains $u=u(d\bar h+\bar hd)=d(u\bar h)+(u\bar h)d$, so $u\simeq0$ with homotopy $u\bar h$. This is exactly the up-to-homotopy functoriality asserted by [L1], so the counterexample refutes strictness only, not the homotopy-class statement. ∎ [L1, L2, step 3.1, algebra]
