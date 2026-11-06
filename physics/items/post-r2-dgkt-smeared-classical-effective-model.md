---
id: post-r2-dgkt-smeared-classical-effective-model
kind: postulate
title: DGKT classical smeared four-dimensional effective solution
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 3
deps:
- post-r2-massive-iia-f0-h3-flux-quantization
dependency_roles:
  post-r2-massive-iia-f0-h3-flux-quantization: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Adopted classical two-derivative, four-dimensional N=1 constant-mode DGKT solution in its canonical RR basis.
  The model uses a smeared/averaged O6 source and does not establish a globally localized ten-dimensional solution or include
  all string-loop and alpha-prime corrections.
empirical_premises: []
sources:
  references:
  - title: Oliver DeWolfe, Alexander Giryavets, Shamit Kachru, and Washington Taylor, Type IIA Moduli Stabilization
    url: https://arxiv.org/pdf/hep-th/0505160v3
    locator: §§2–5; flux conventions and tadpole in §§3.1–3.14; N=1 system in §§4.18–4.36; explicit bulk and blow-up extrema
      in §5.1; hierarchy and control discussion in §5.2.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  sources_checked:
    date: 2026-10-26
    scope: Read the full DGKT source; all formulas adopted here are from its §§2–5 with the normalization and truncation limits stated.
    by: batch-85 beta authoring
    evidence: research/conformal-field-theory-string-theory-all-97-2026-10-26-batch-85.source-coverage.json
---

## Postulate

Use natural units $\hbar=c=1$ and set $\ell_s:=\sqrt{\alpha'}=1$ in the four-dimensional DGKT reduction formulas below. Every reduced flux coefficient, Kähler coordinate, axion, and volume appearing in those formulas denotes its dimensionless numerical value in this source string-unit convention; $\kappa$ and $\beta$ are dimensionless intersection coefficients, and $e^D$ and $e^\phi$ are dimensionless couplings. In the associated ten-dimensional convention, coordinate components of the R-R fields and $H_3$ have units of inverse length; a raw R-R $p$-form period has units of length$^{p-1}$, while an $H_3$ period has units of length squared. The flux integers are dimensionless, and equations (3.8)–(3.9) fix the period normalizations in DGKT's R-R basis, including its $1/\sqrt2$ rescaling relative to the unrescaled R-R basis. The scalar coefficients in the reduction formulas are those basis-normalized source numbers after setting $\ell_s=1$. In particular, the source hierarchy $|\widehat e_i|\gg|\widehat f_A|\gg|m_0|$ compares dimensionless string-unit numbers, not dimensionful quantities.

Adopt the source-reported classical four-dimensional $N=1$ constant-mode solution of DeWolfe–Giryavets–Kachru–Taylor (DGKT) for the $T^6/\mathbb Z_3$ orientifold with a further freely acting $\mathbb Z_3$ quotient. This is a product of two $\mathbb Z_3$ actions; it is not a quotient by three independent $\mathbb Z_3$ factors. In the resolved Calabi–Yau model of the source, $h^{1,1}=12$ gives three bulk Kähler moduli and nine blow-up Kähler moduli, while $h^{2,1}=0$. The source adopts a smeared/averaged O6 term in the four-dimensional reduction.

Let $m_{0,\mathrm{phys}}$ and $p_{\mathrm{phys}}$ denote the dimensionful Romans and NS-flux parameters before setting $\ell_s=1$; they have units of inverse length and length squared, respectively. The source normalization is
$$m_{0,\mathrm{phys}}=\frac{f_0}{2\sqrt2\pi\ell_s},\qquad p_{\mathrm{phys}}=(2\pi\ell_s)^2h_3,\qquad H_3^{\mathrm{phys}}=-p_{\mathrm{phys}}\,\beta^0.$$
Thus the positively oriented dual cycle used by the source has $\int_{\Sigma_3}H_3^{\mathrm{phys}}=-p_{\mathrm{phys}}$, so its normalized free period is $-h_3$. In the reduced string-unit equations write $m_0:=\ell_s m_{0,\mathrm{phys}}=f_0/(2\sqrt2\pi)$ and $p:=p_{\mathrm{phys}}/\ell_s^2=(2\pi)^2h_3$. On the source cover its D6/O6 signed source charge is $-2$, and the DGKT source-model tadpole input is $f_0h_3=-2$. The standard Graña Romans parameter is $F_0^{\rm Gra\~na,phys}=\sqrt2m_{0,\mathrm{phys}}=f_0/(2\pi\ell_s)$.

The bulk four-form coefficients also obey the explicit DGKT lattice, in the source cycles and R-R basis of equations (3.8)–(3.9):
$$e_{i,\mathrm{phys}}=\frac{\kappa^{1/3}}{\sqrt2}(2\pi\ell_s)^3 f_4^i,\qquad f_4^i\in\mathbb Z,\qquad e_i:=\frac{e_{i,\mathrm{phys}}}{\ell_s^3}=c_4 f_4^i,\quad c_4:=\frac{\kappa^{1/3}}{\sqrt2}(2\pi)^3>0.$$
Thus setting $\ell_s=1$ does not make $e_i$ an arbitrary integer: it leaves the fixed spacing $c_4$. The factor $1/\sqrt2$ is the source R-R normalization and $\kappa^{1/3}$ is the source bulk-cycle/basis normalization. The source notes possible shifted lattices generally, and states that this shift does not affect the cycles of its specified Calabi–Yau example; this adopted integer lattice is model specific. In particular, the allowed equal-bulk sequence is $f_4^i=-N$ for $N\in\mathbb N$, so $e_i=-c_4N=-\bar e$ with $\bar e:=c_4N\to\infty$ and $c_4$ fixed.

For cyclic $(i,j,k)$ in $\{1,2,3\}$, write the bulk Kähler coordinates as $t_i=b_i+i v_i$, with $\kappa>0$, and define
$$\widehat e_i=e_i+\frac{\kappa m_jm_k}{m_0},\qquad b_i=\frac{m_i}{m_0},\qquad v_i=\frac{1}{|\widehat e_i|}\sqrt{-\frac{5\widehat e_1\widehat e_2\widehat e_3}{3\kappa m_0}}.$$
For each of the nine exceptional divisors, let $f_A\in\mathbb Z$ be the source-normalized exceptional $F_4$ flux, let $t_A=b_A-i v_A$, and define
$$\widehat f_A=f_A+\frac{\beta n_A^2}{2m_0},\qquad b_A=\frac{n_A}{m_0},\qquad v_A=\sqrt{-\frac{10\widehat f_A}{3\beta m_0}},\quad \beta>0.$$
Here $v_i>0$ is the bulk imaginary coordinate, whereas $v_A>0$ is the magnitude of the negative exceptional imaginary coordinate: $\operatorname{Im}t_A=-v_A$ (DGKT Eq. (5.8), footnote 9). The real flux coefficients $m_i,n_A,e_0$ and the displayed lattice coefficients specify the branch. Require $m_0p<0$, common sign of the $\widehat e_i$, $m_0\widehat e_1\widehat e_2\widehat e_3<0$, and $m_0\widehat f_A<0$ for every $A$, together with the source's Kähler-cone hierarchy below and positive total volume.

To fix the volume convention, let $w_i,w_A$ be the source's real degree-two cohomology basis represented by smooth closed forms on the resolved threefold $X$, with symmetric triple intersections $\int_Xw_1\wedge w_2\wedge w_3=\kappa$, $\int_Xw_A^3=\beta$ and all other independent triple intersections zero. The Kähler form $J$ is a smooth closed real $(1,1)$-form with $J(u,Iu)>0$ for every nonzero tangent vector $u$, where $I$ is the complex structure; its class is $[J]=\sum_i v_i[w_i]-\sum_Av_A[w_A]$. Consequently the dimensionless volume and four-dimensional dilaton are
$$\mathcal V:=\frac16\int_XJ^3=\kappa v_1v_2v_3-\frac{\beta}{6}\sum_Av_A^3>0,\qquad e^D=\frac{5|p|}{4\sqrt2|m_0|\mathcal V},\qquad e^\phi=e^D\sqrt{\mathcal V}.$$
The factor six in the bulk contraction counts the permutations of three distinct indices; there is one exceptional term per $A$, with negative sign because $\operatorname{Im}t_A=-v_A$. The dilaton expression follows from DGKT Eq. (5.10) and $e^D=e^\phi/\sqrt{\mathcal V}$ in Eq. (4.12). These defining equations resolve the sign inconsistency of the printed positive exceptional term in Eq. (5.11); that term cannot be used with the negative exceptional coordinate of Eq. (5.8). The bulk-only expression $|p|\sqrt{27\kappa|m_0|/(160|\widehat e_1\widehat e_2\widehat e_3|)}$ is the leading approximation when the exceptional-volume contribution is negligible, not the exact dilaton with nine nonzero exceptional moduli. On the branch $m_i=n_A=0$, the RR axion is fixed by $\xi=e_0/p$. These equations are adopted source-model data, not a derivation from a ten-dimensional localized solution.

In the controlled scaling regime of the source, scale the dimensionless bulk four-form coefficients together, $|e_i|\sim\bar e\to\infty$, while the Romans and NS quanta and blow-up fluxes remain fixed with
$$|\widehat e_i|\gg|\widehat f_A|\gg|m_0|.$$
The source reports $\mathcal V\sim\bar e^{3/2}$ and $e^\phi\sim\bar e^{-3/4}$. With dimensions restored, its four-dimensional Einstein-frame scalings mean
$$\frac{|\Lambda_4|}{M_P^4}\sim\bar e^{-9/2},\qquad M_P\ell_s\sim\bar e^0,\qquad \left(\frac{R_{KK}}{\ell_s}\right)^2\sim\bar e^{7/2},$$
where $\Lambda_4$ is the vacuum-energy density (units of length$^{-4}$), $M_P$ is the reduced four-dimensional Planck mass (units of length$^{-1}$), and $R_{KK}$ is the characteristic internal Kaluza–Klein length (units of length). The volume $\mathcal V$ is the dimensionless volume in string units. Defining $H_{\rm AdS}^2:=|\Lambda_4|/(3M_P^2)$ gives $(H_{\rm AdS}R_{KK})^2\sim\bar e^{-1}$. These are source-reported scalings within the classical constant-mode truncation; the hierarchy and all reduced formulas use the source string-unit normalization.

## Source references

[[post-r2-massive-iia-f0-h3-flux-quantization]]
