---
id: "def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex"
kind: "definition"
title: "Cartan-Eilenberg injective resolution of a bounded-below complex"
deps: ["def-abelian-category", "def-cochain-complex-in-an-abelian-category", "def-homological-double-complex", "rem-commuting-versus-anticommuting-double-complex-conventions", "def-direct-sum-total-complex-of-a-double-complex", "def-injective-resolution-in-an-abelian-category"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Homological Algebra, Section 5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Sharifi, Homological Algebra, Section 4.3"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
---

## Definition

Let $K$ be a [[def-cochain-complex-in-an-abelian-category|cochain complex]] in an [[def-abelian-category|abelian category]], with $K^p=0$ for $p<b$. We use commuting arrows $h:I^{p,q}\to I^{p+1,q}$ and $v:I^{p,q}\to I^{p,q+1}$, with $h^2=v^2=0$ and $hv=vh$. A **Cartan–Eilenberg injective resolution** is this bicomplex, zero for $p<b$ or $q<0$, and an augmentation $\epsilon:K\to I^{\bullet,0}$ satisfying $h\epsilon=\epsilon d_K$ and $v\epsilon=0$, with the following data.

Write $Z^{p,q}=\ker h^{p,q}$, $B^{p,q}=\operatorname{im}h^{p-1,q}$ and $H^{p,q}=Z^{p,q}/B^{p,q}$. The induced vertical complexes, with the augmentations induced by $\epsilon$, are [[def-injective-resolution-in-an-abelian-category|injective resolutions]] of $K^p$, $Z^pK$, $B^pK$ and $H^pK$, respectively:
$$0\to K^p\to I^{p,0}\to I^{p,1}\to\cdots,$$
$$0\to Z^pK\to Z^{p,0}\to Z^{p,1}\to\cdots,$$
$$0\to B^pK\to B^{p,0}\to B^{p,1}\to\cdots,$$
$$0\to H^pK\to H^{p,0}\to H^{p,1}\to\cdots.$$
In particular every displayed unaugmented term is injective. The sequences $0\to B^{p,q}\to Z^{p,q}\to H^{p,q}\to0$ and $0\to Z^{p,q}\to I^{p,q}\to B^{p+1,q}\to0$ and their augmentation squares are part of the compatibility. Require these two sequences to be split exact in each bidegree; splittings need not commute with $v$ and are not distinguished data.

For comparison with [[def-homological-double-complex]], set $C_{r,s}=I^{-r,-s}$ and twist the vertical arrow by $(-1)^r$, as in [[rem-commuting-versus-anticommuting-double-complex-conventions]]. The cohomological version of [[def-direct-sum-total-complex-of-a-double-complex]] is therefore
$$\operatorname{Tot}^n I=\bigoplus_{p+q=n} I^{p,q},\qquad D|_{I^{p,q}}=h+(-1)^pv.$$
The identity $D^2=0$ follows from the two square-zero identities and cancellation of the mixed terms. Only $b\le p\le n$ occur. Replacing $p$ by $p-b$ makes the support first quadrant and shifts total degree by $b$; the signed differential is the displayed one with the original $p$.

This definition asks for supplied resolution data and makes no existence or choice claim. The zero bicomplex resolves the zero complex. A complex concentrated in one degree may use a single column resolving that object. Empty diagonals are zero; a one-term diagonal is that term. The lower bound $b$ may be negative.
