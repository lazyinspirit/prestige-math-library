---
id: post-r2-massive-iia-f0-h3-flux-quantization
kind: postulate
title: "Massive IIA Romans-mass and NS three-form flux quantization"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps:
  - def-st-string-tension-alpha-prime
  - def-smooth-differential-k-form
  - def-gts-smooth-integral-singular-chain-complex
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-smooth-differential-k-form: formulation-prerequisite
  def-gts-smooth-integral-singular-chain-complex: formulation-prerequisite
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Adopted free-period quantization for a compact oriented smooth six-dimensional internal space in a massive IIA sector with smooth closed $H_3$, constant $F_0$, and no NS5 magnetic current. The periods are measured in the Graña democratic RR normalization. Torsion refinements, K-theory classification, quotient/cover multiplicities, and global solution existence are outside this postulate."
empirical_premises: []
sources:
  references:
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review"
      url: https://arxiv.org/pdf/hep-th/0509003v3
      locator: "§4.2, massive IIA Bianchi and integrated charge conventions, equations (4.18)–(4.21)."
    - title: "Oliver DeWolfe, Alexander Giryavets, Shamit Kachru, and Washington Taylor, Type IIA Moduli Stabilization"
      url: https://arxiv.org/pdf/hep-th/0505160v3
      locator: "§3.8–3.9, RR flux quantization and the canonical sqrt(2) rescaling; equations (3.8)–(3.9)."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-10-26
    scope: Inspected the full Graña §4.2 and DGKT §§3.1–3.14, including the RR rescaling and flux integer conventions.
    by: batch-85 beta authoring
    evidence: research/conformal-field-theory-string-theory-all-97-2026-10-26-batch-85.source-coverage.json
---

## Postulate

Let $X$ be the compact oriented smooth six-manifold used as the internal space. A smooth differential three-form is a smooth section of $\Lambda^3T^*X$, so $H_3\in\Omega^3(X)$ has smooth coordinate coefficients; $F_0\in\mathbb R$ is a constant scalar on $X$. In local coordinates, if $H_3=\frac1{3!}H_{ijk}\,dx^i\wedge dx^j\wedge dx^k$, then $d_XH_3=\frac1{3!}\partial_\ell H_{ijk}\,dx^\ell\wedge dx^i\wedge dx^j\wedge dx^k$, with repeated indices summed. The NS5-free hypothesis means that the magnetic Bianchi identity has no NS5 current: this four-form vanishes. Use the smooth singular chain complex of $X$: $C_k^\infty(X;\mathbb Z)$ is the free abelian group of finite integral sums of smooth singular $k$-simplices $\sigma:\Delta^k\to X$, where each simplex extends smoothly to an open neighborhood of $\Delta^k$ in its affine span; $\partial$ is the alternating sum of face restrictions. Put $H_k^\infty(X;\mathbb Z):=\ker\partial_k/\operatorname{im}\partial_{k+1}$ and write $\operatorname{Tor}H_3^\infty(X;\mathbb Z)$ for its torsion subgroup. A free integral three-cycle $\Sigma_3$ is a class in $H_3^\infty(X;\mathbb Z)/\operatorname{Tor}H_3^\infty(X;\mathbb Z)$. For a representative $z=\sum_jn_j\sigma_j$, define $\int_{\Sigma_3}H_3:=\sum_jn_j\int_{\Delta^3}\sigma_j^*H_3$; Stokes' theorem and $d_XH_3=0$ make this period independent of the representative.

The period also descends through the torsion quotient: if a homology class $[z]$ is torsion, some integer $r>0$ and smooth chain $b$ satisfy $rz=\partial b$, so $r\int_zH_3=\int_b d_XH_3=0$ by Stokes and closedness, and therefore $\int_zH_3=0$ as a real number.

Set $\ell_s:=\sqrt{\alpha'}>0$. Adopt, in the standard RR normalization of the democratic supergravity equations,
$$(2\pi\ell_s)F_0\in\mathbb Z,\qquad \frac{1}{(2\pi\ell_s)^2}\int_{\Sigma_3}H_3\in\mathbb Z$$
for every free integral three-cycle $\Sigma_3$. Use natural units $\hbar=c=1$: $\ell_s$ has units of length, $F_0$ has units of inverse length, the coordinate components of $H_3$ have units of inverse length, and an $H_3$ period has units of length squared. Thus both displayed normalized quantities are dimensionless. In this smooth-field formulation, $d_XH_3=0$ expresses the exclusion of NS5 magnetic sources; a sector with an NS5 current is outside this postulate. This is a free-period postulate; it makes no claim about torsion classes or K-theory refinements.

The DGKT canonical RR convention rescales its RR fields by $\sqrt2$. In the DGKT source convention, use the conversion $m_0=f_0/(2\sqrt2\pi\sqrt{\alpha'})$ and hence $F_0^{\rm Gra\~na}=\sqrt2m_0=f_0/(2\pi\sqrt{\alpha'})$; use the source's separate $H_3$ period and cover conventions rather than identifying its canonical integers with a different RR basis.

## Source references

[[def-st-string-tension-alpha-prime]]

[[def-smooth-differential-k-form]]

[[post-r2-dgkt-smeared-classical-effective-model]]

## Remarks

The smooth integral chain complex and simplex convention are those of [[def-gts-smooth-integral-singular-chain-complex]]. The representative-independence of the period uses the published Stokes theorem for smooth singular chains [[thm-stokes-theorem-for-smooth-singular-chains]], applied to the integer chains through the coefficient inclusion $\mathbb Z\hookrightarrow\mathbb R$. These are mathematical formulation inputs, not derivations of the adopted physical quantization.
