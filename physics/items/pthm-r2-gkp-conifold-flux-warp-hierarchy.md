---
id: pthm-r2-gkp-conifold-flux-warp-hierarchy
kind: physics-theorem
title: "Quantized IIB conifold fluxes generate a leading GKP throat redshift"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 14
domain: physics
library: physics
deps:
  - post-r2-gvw-iib-flux-superpotential
  - post-r2-iib-three-form-flux-quantization
  - pthm-r2-iib-d3-tadpole-from-f5-bianchi
  - thm-r2-conifold-dual-period-logarithm
  - pthm-r2-gkp-no-scale-flux-potential
  - def-r2-iib-flux-background-conventions
  - def-r2-conifold-smoothing-and-period-conventions
  - def-axiom-of-choice
dependency_roles:
  post-r2-gvw-iib-flux-superpotential: physical-assumption
  post-r2-iib-three-form-flux-quantization: physical-assumption
  pthm-r2-iib-d3-tadpole-from-f5-bianchi: physical-result
  thm-r2-conifold-dual-period-logarithm: mathematical-premise
  pthm-r2-gkp-no-scale-flux-potential: physical-result
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  def-r2-conifold-smoothing-and-period-conventions: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: "Conditional leading tree-level GKP/KS calculation for one conifold region in a compact Type IIB O3/O7 Calabi–Yau orientifold, in a fixed Einstein-frame and cover convention. It assumes weak coupling, large g_s M, large K/(g_s M), control of the local source/core, a compact throat that fits and satisfies the D3 tadpole, and an additional flux sector fixing tau. The matching coefficient is fixed only relative to the large K/(g_s M) exponent at fixed remaining data; its value may depend on flux, topology and volume. It proves neither a complete vacuum nor a parametric family at fixed tadpole, all-moduli stabilization, or a post-uplift/de Sitter solution."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "Full paper; §3 equations (3.4)–(3.19), PDF pp. 16–19; especially period/flux equations (3.7)–(3.12), tau stabilization equations (3.14)–(3.18), and redshift equation (3.19)."
    - title: "Igor R. Klebanov and Matthew J. Strassler, Supergravity and a Confining Gauge Theory: Duality Cascades and χSB–Resolution of Naked Singularities, hep-th/0007191v4"
      url: "https://arxiv.org/pdf/hep-th/0007191v4"
      locator: "Full paper; §§7–8 equations (53)–(93), PDF pp. 21–25, and §5.2 equations (94)–(95), PDF p. 23; regular cap warp factor and restoration of the deformation scale."
    - title: "Michele Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Full paper; §3.4 equations (114)–(118a), PDF pp. 34–37; independent GKP flux, tadpole, conifold and redshift review."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722v2"
      url: "https://arxiv.org/pdf/2305.01722v2"
      locator: "Full lecture notes; §4.4 equations (4.71)–(4.83), PDF pp. 34–36; §4.5 equations (4.87)–(4.88), pp. 36–37; §5.1 equation (5.1), p. 39."
    - title: "Xin Gao, Arthur Hebecker, Simon Schreyer, and Gerben Venken, The LVS parametric tadpole constraint, arXiv:2202.04087, JHEP 07 (2022) 056"
      url: "https://scoap3-prod-backend.s3.cern.ch/media/files/71318/10.1007/JHEP07%282022%29056_a.pdf"
      locator: "Full paper; §2 equations (2.6)–(2.8), PDF pp. 2–3; Appendix A equations (A.1)–(A.10), pp. 14–16; explicit compact-gluing prefactors in one LVS setup."
---

## Statement

Fix one smooth compact cover $X$ of a Type IIB O3/O7 Calabi–Yau orientifold and its GKP Einstein-frame and period conventions. Let a single conifold region have oriented free cycles $A,B$ with $A\cdot B=+1$, vanishing period $z=\int_A\Omega$, and dual period
$
\Pi_B(z)=\int_B\Omega=\frac{z}{2\pi i}\log z+f(z),
$
with $f$ holomorphic at $z=0$ on the chosen branch. Adopt the free-period GKP quantization convention
$
\frac{1}{(2\pi)^2\alpha'}\int_A F_3=M,\qquad
\frac{1}{(2\pi)^2\alpha'}\int_B H_3=-K
$
for positive integers $M,K$, and the tree-level superpotential $W_{\mathrm{flux}}\propto\int_X\Omega\wedge(F_3-\tau H_3)$. Assume an additional independent flux sector fixes the dimensionless four-dimensional axio-dilaton to $\tau=i/g_s$, with $0<g_s\ll1$. The two-cycle fluxes alone do not generically solve $D_\tau W=0$ in a compact model.

In the leading conifold and large-radius regime, assume $g_sM\gg1$, $K/(g_sM)\gg1$, the regular terms in $D_zW$ are controlled and subleading to its logarithmic/flux balance, and a controlled Klebanov–Strassler throat fits into the compact geometry. Impose the global sourced D3 tadpole and all local source/core constraints. At fixed $g_s,M$ and compact matching data, assume the redshift prefactor does not itself scale exponentially with $K/(g_sM)$. Then
$
\log |z|=-\frac{2\pi K}{g_sM}+O(1),\qquad
e^{A_{\min}}=C_{\mathrm{match}}|z|^{1/3}
=C_{\mathrm{match}}\exp\!\left(-\frac{2\pi K}{3g_sM}+O(1)\right),
$
where $e^{A_{\min}}$ is the dimensionless minimum warp factor in the fixed ten-dimensional Einstein-frame metric and $C_{\mathrm{match}}$ is the positive matching coefficient. The exponential statement is at fixed $g_s,M$ and compact matching data; no numerical order-one bound or uniform bound over varying flux, topology, or volume families is asserted. The two-cycle flux assignment alone does not stabilize $\tau$, and the classical single-overall-modulus GKP no-scale F-term leaves that Kähler modulus unfixed on its stated F-flat locus. This is not a claim of a complete vacuum or of all-moduli stabilization.
## Facts & Assumptions

**Given:** The fixed smooth covering space, orientations and period branch in the Statement; natural units with $[\alpha']=\mathrm{length}^2$; dimensionless period coordinate $z$, flux integers $M,K\in\mathbb Z_{>0}$ and coupling $g_s=1/\operatorname{Im}\tau>0$; the tree-level four-dimensional GKP truncation; and the controlled leading and compact-matching hypotheses stated above.

[F1] [[post-r2-gvw-iib-flux-superpotential]]: adopt $W_{\mathrm{flux}}=\mathcal N_{4\mathrm D}\int_X\Omega\wedge G_3$, $G_3=F_3-\tau H_3$, in GKP equation (2.40) wedge order. $\mathcal N_{4\mathrm D}$ and the normalization of $\Omega$ are common nonzero factors; reversing the order of two degree-three forms changes one overall sign. This is an adopted tree-level effective-theory input, not a consequence of flux quantization.

[F2] [[post-r2-iib-three-form-flux-quantization]]: on the selected smooth cover, each free integral three-cycle has normalized $F_3$ and $H_3$ periods in $\mathbb Z$, with unit $(2\pi)^2\alpha'$. Torsion, differential/K-theory refinements, and quotient multiplicities are outside this postulate.

[F3] [[pthm-r2-iib-d3-tadpole-from-f5-bianchi]]: if the sourced GKP five-form Bianchi identity holds as a degree-six current on compact oriented boundaryless $X$, then
$
\frac{1}{(2\pi)^4\alpha'^2}\int_XH_3\wedge F_3+Q_3^{\mathrm{loc}}=0.
$
This is a Maxwell-flux identity, not a Page-charge equation or a vacuum-existence result.

[F4] [[thm-r2-conifold-dual-period-logarithm]]: for the one-node smoothing with its stated cycle and form conventions, $\Pi_B(z)=\frac{z}{2\pi i}\log z+f(z)$, where $f$ is holomorphic at $0$ on the chosen branch. Its proof invokes the full axiom of choice through its Gauss–Manin/Hodge prerequisites.

[F5] [[def-r2-conifold-smoothing-and-period-conventions]]: the vanishing cycle is normalized by $\int_A\Omega=z$, $A\cdot B=+1$, and the positive meridian sends $B$ to $B+A$; the branch and integral-cycle orientation are fixed together.

[F6] [[def-r2-iib-flux-background-conventions]]: $F_3$ is the raw RR three-form, $H_3$ the NS three-form, $G_3=F_3-\tau H_3$, $\tau=C_0+i e^{-\phi}$, and $g_s=1/\operatorname{Im}\tau$. The flux, source and period integrals use the same smooth cover and normalization. In the Einstein frame $ds^2_{10,E}=e^{2A}ds^2_{4,E}+e^{-2A}d\widetilde s_6^2$.

[F7] [[pthm-r2-gkp-no-scale-flux-potential]]: in the classical two-derivative single-overall-Kähler-modulus O3/O7 zero-mode truncation, with $W$ independent of $\rho$, the $\rho$ contribution cancels the negative term in the F-term potential. If $D_\tau W=D_{z^a}W=0$, the flux potential is zero for every $\rho$; $D_\rho W$ may be nonzero. Its conclusion is conditional on its own stated reduction and $N=1$ inputs.

[F8] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. This is included because [F4]'s current proof depends transitively on full AC; it is not an additional physical assumption.

[A1] The selected compactification uses the same smooth cover, integral pairing and GKP orientation for the flux periods, cycle periods, source charges and tadpole. The local symplectic pair is $A\cdot B=+1$; all other cycles and fluxes belong to the compact bulk sector.

[A2] The additional bulk flux sector fixes $\tau=i/g_s$ at weak coupling. For the local two-cycle sector, the GKP tree-level axiodilaton Kähler potential has $\partial_\tau\mathcal K=-1/(\tau-\bar\tau)$, and the regular part $f(0)$ is generically nonzero; see [GKP §3, equations (3.14)–(3.18)](https://arxiv.org/pdf/hep-th/0105097v2). Special compact data with $f(0)=0$ are not ruled out by the generic statement.

[A3] The compact embedding satisfies the sourced D3 tadpole [[pthm-r2-iib-d3-tadpole-from-f5-bianchi]] and all local source constraints. The KS solution is used only in a regime with $g_sM\gg1$, small curvature in string units at the tip, and controlled localized-source backreaction; see [Klebanov–Strassler §§7–8](https://arxiv.org/pdf/hep-th/0007191v4). A throat that fits inside the compact bulk is an additional geometric hypothesis, not proved by the noncompact solution.

[A4] The $D_zW$ equation is used only at leading order: write $D_zW/\mathcal C=M(2\pi i)^{-1}\log z-iK/g_s+R(z)$. For the chosen background $R(z)/M$ stays bounded as $z\to0$, so regular terms are subleading to the large $K/(g_sM)$ exponent and give a correction of order one to $\log z$; compare [GKP §3, equations (3.11)–(3.13)](https://arxiv.org/pdf/hep-th/0105097v2). No bound uniform over varying bulk geometries or flux families is assumed.

[A5] In the chosen compact gluing, $e^{A_{\min}}=C_{\mathrm{match}}|z|^{1/3}$, with positive dimensionless $C_{\mathrm{match}}$ fixed relative to the large $K/(g_sM)$ exponent when $g_s,M$, topology and bulk matching data are held fixed. It may contain flux-dependent factors such as $(g_sM)^{-1/2}$; it is not asserted numerically order one or uniform when those data vary. Compare [GKP §3, equation (3.19)](https://arxiv.org/pdf/hep-th/0105097v2), [Klebanov–Strassler §§7–8, equations (90)–(95)](https://arxiv.org/pdf/hep-th/0007191v4), and [Cicoli et al. §3.4, equations (117)–(118a)](https://arxiv.org/pdf/2303.04819v2).

[A6] Use dimensionless moduli and Kähler potential $\mathcal K$, with $D_qW=\partial_qW+(\partial_q\mathcal K)W$ for $q=z,\tau$. The flux integer $K$ is distinct from $\mathcal K$. For the compact symplectic pair choose cohomology representatives $\alpha,\beta$ with $\int_A\alpha=\int_B\beta=1$, $\int_X\alpha\wedge\beta=1$, and the other local periods zero.

[A7] In the KS local solution, write the dimensionful deformed-conifold parameter as $\epsilon^2=c_z z$, where fixed $c_z\ne0$ supplies the units in the chosen period normalization. Its tip warp factor satisfies $h_0\propto(g_sM\alpha')^2|\epsilon|^{-8/3}$ and the external redshift is $h_0^{-1/4}$; hence it is proportional to $(g_sM)^{-1/2}|z|^{1/3}$ in the fixed local frame. Compact Weyl and gluing factors are included in $C_{\mathrm{match}}$. This is the local supergravity regime $g_sM\gg1$, not a compact-gluing theorem; see [Klebanov–Strassler §§7–8, equations (90)–(93), and §5.2, equations (94)–(95)](https://arxiv.org/pdf/hep-th/0007191v4).

## Proof

**Given:** [F1]–[F8] and [A1]–[A7]. Write $\Pi_A=\int_A\Omega=z$, $\Pi_B=\int_B\Omega$, and use the GKP sign convention of [F1].

1.1 The free-period quantization in [F2], with the selected cycles and orientations in [A1]–[A2], gives $\int_A F_3=(2\pi)^2\alpha'M$ and $\int_B H_3=-(2\pi)^2\alpha'K$. Both normalized periods are dimensionless; this step adopts the physical quantization postulate and derives no period lattice from de Rham theory. [given, F2, A1, A2, algebra]

1.2 In the deformed-conifold local model $\sum_{j=1}^4w_j^2=z$, the tip has $|w|$ of order $|z|^{1/2}$, so the conical radius scales as $\widetilde r_{\mathrm{tip}}^{\,3}\propto|z|$. The KS warp-factor integral gives $h_0\propto(g_sM\alpha')^2|\epsilon|^{-8/3}$; with $|\epsilon|^2=|c_z z|$, the external redshift $h_0^{-1/4}$ is proportional to $(g_sM)^{-1/2}|z|^{1/3}$. The compact Weyl and matching factors are collected in $C_{\mathrm{match}}$, yielding $e^{A_{\min}}=C_{\mathrm{match}}|z|^{1/3}$. Its dependence on $g_sM$ and compact data is retained rather than asserted uniformly bounded. The local KS solution is noncompact and supplies no compact gluing. [given, A3, A5, A7, algebra]

2.1 The GKP symplectic pairing of these local fluxes gives the conifold-dependent part
$$
W_{\mathrm{loc}}=\mathcal C\bigl(M\Pi_B(z)-K\tau\Pi_A(z)\bigr),
$$
where $\mathcal C\ne0$ is the common normalization fixed by [F1] and [F2]; bulk cycles contribute terms regular at $z=0$. By [F4]–[F5], $\Pi_A=z$ and $\Pi_B=\frac{z}{2\pi i}\log z+f(z)$. Thus
$$
W_{\mathrm{loc}}=\mathcal C\left[M\left(\frac{z}{2\pi i}\log z+f(z)\right)-K\tau z\right].
$$
The common sign from a reversed degree-three wedge order would multiply the whole expression and would not change $D_zW=0$. [given, F1, F2, F4, F5, F6, F8, A1, step 1.1, algebra]

2.2 Apply the compact tadpole identity [F3] on the same $X$ and normalization [A1]. By [F2] and [A6], the local pair is $F_3=(2\pi)^2\alpha'M\alpha$, $H_3=-(2\pi)^2\alpha'K\beta$, so
$$ \frac{1}{(2\pi)^4\alpha'^2}\int_XH_3\wedge F_3=\int_X(-K\beta)\wedge(M\alpha)=MK\int_X\alpha\wedge\beta=MK. $$
Here $\beta\wedge\alpha=-\alpha\wedge\beta$, which cancels the minus sign in $H_3$. All remaining cycles and localized sources must be included in the same global equation. Hence every compact realization must satisfy the D3 tadpole rather than treating $M,K$ as an unconstrained noncompact KS sequence. This identity alone does not prove that any flux choice or parametric family exists. [F2, F3, A1, A6, step 1.1, algebra]

3.1 Differentiating $z\log z$ gives $\log z+1$. The $+1$, $Mf'(z)$, the Kähler-covariant term $(\partial_z\mathcal K)W$, and the bulk contribution are regular terms under [A4]. Therefore the leading conifold equation is
$$ 0=\frac{D_zW}{\mathcal C}=\frac{M}{2\pi i}\log z-K\tau+R(z)=\frac{M}{2\pi i}\log z-\frac{iK}{g_s}+R(z). $$
where $R(z)$ is controlled as stated in [A4]. This is the GKP leading equation; it does not set the regular terms to zero. [F1, F4, F6, A2, A4, step 2.1, algebra]

3.2 For the two-cycle sector alone, $W_{\mathrm{loc}}$ and $\partial_\tau\mathcal K=-1/(\tau-\bar\tau)$ from [A2] give
$$ D_\tau W_{\mathrm{loc}}\propto\frac{M\Pi_B(z)-Kz\bar\tau}{\bar\tau-\tau}. $$
As $z\to0$, $Kz\bar\tau\to0$, whereas $\Pi_B(z)\to f(0)$; for generic $f(0)\ne0$ the numerator tends to $Mf(0)\ne0$. Thus the local two-cycle assignment does not generically solve the compact $D_\tau W=0$ equation. The additional flux sector fixing $\tau=i/g_s$ is an independent hypothesis, not a result of the throat calculation. [F1, A2, step 2.1, algebra]

4.1 Multiplying the equation in step 3.1 by $2\pi i/M$ and taking real parts yields
$$
\log|z|=-\frac{2\pi K}{g_sM}+O(1).
$$
Exponentiating gives the stated leading $|z|$ hierarchy, with its non-uniform regular correction retained as an order-one factor only under [A4]. [A4, step 3.1, algebra]

5.1 Substituting step 4.1 into step 1.2 gives
$$ e^{A_{\min}}=C_{\mathrm{match}}\exp\!\left(-\frac{2\pi K}{3g_sM}+O(1)\right). $$
At fixed $g_s,M$ and matching data this has the leading $K$-dependent exponential $\exp[-2\pi K/(3g_sM)]$; the prefactor may vary when those data vary. [A4, A5, step 4.1, step 1.2, algebra]

6.1 On the F-flat $(\tau,z^a)$ locus and within the single-overall-modulus classical truncation, [F7] gives $V_{\mathrm{flux}}=0$ for every $\rho$, while $D_{Z^\rho}W$ can be nonzero. The rescaling $Z^q=M_Pq$ with $M_P>0$ preserves the zero locus of the dimensionless $(\tau,z^a)$ derivatives. Thus the overall Kähler modulus is not fixed by this classical flux F-term on that locus; this calculation establishes neither stabilization of other Kähler moduli nor a post-uplift vacuum. [F7, A3, A6, algebra] ∎
## Remarks

The coefficient of the logarithmic period and the sign of $-K\tau z$ are tied to $A\cdot B=+1$, the flux signs in [F2], and the GKP $\Omega\wedge G_3$ order. Reversing the wedge order changes the whole superpotential by one sign, not the relative flux terms. Flux periods use the selected smooth cover; quotient multiplicities cannot be changed in only the flux or source term.

The leading formula is conditional. GKP equation (3.12) retains regular $O(1)$ terms. The KS tip solution also carries a factor proportional to $(g_sM)^{-1/2}$ in the local frame, and the compact Weyl/gluing factors are collected in $C_{\mathrm{match}}$. Gao–Hebecker–Schreyer–Venken, §2 and Appendix A, exhibit additional flux-, topology-, and volume-dependent prefactors in one LVS compact gluing and uplift. These factors do not refute the exponential dependence at fixed remaining data, but they prevent reading the canonical order-one matching phrase as a uniform numerical bound over varying flux or compactification families. Owner review is needed on this precision.

The following is a two-dimensional schematic of the local throat only. Its vertical coordinate is conical radius; the lower boundary is the smooth cap and the upper boundary is where the local solution is matched to the compact bulk. A and B label the vanishing and dual integral three-cycles; their drawn crossing is only a projection. The intersection number $A\cdot B=+1$ is the declared topological convention in [A1], not something established by the drawing.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth]
  \fill[blue!8] (0.4,0.4) -- (1.15,3.35) -- (2.35,3.35) -- (3.1,0.4) -- cycle;
  \draw[thick] (0.4,0.4) -- (1.15,3.35);
  \draw[thick] (3.1,0.4) -- (2.35,3.35);
  \draw[thick] (1.15,3.35) -- (2.35,3.35);
  \draw[thick] (0.4,0.4) .. controls (1.0,0.05) and (2.5,0.05) .. (3.1,0.4);
  \draw[very thick,red] (0.95,0.4) ellipse (0.55 and 0.19);
  \draw[very thick,orange,dashed] (2.0,0.3) -- (2.0,3.55);
  \fill (2.0,0.4) circle (0.05);
  \draw[->] (0.05,0.45) -- (0.05,3.35) node[midway,left] {$\widetilde r$};
  \node[below] at (2.0,0.08) {smooth cap};
  \node[above] at (1.75,3.55) {compact bulk matching};
  \node[left,red] at (0.45,0.55) {$A$};
  \node[right,orange] at (2.15,2.1) {$B$};
  \node[right] at (3.15,0.6) {$\widetilde r_{\mathrm{tip}}\propto |z|^{1/3}$};
\end{tikzpicture}
```

The colored curves indicate cycle roles, not literal embeddings in a two-dimensional manifold; the orange dashed curve is dual to the red vanishing cycle in the full six-dimensional geometry. The scale relation is proved from the deformed-conifold radial coordinate and the KS matching assumption above, not from this picture.

The direct no-scale dependency [[pthm-r2-gkp-no-scale-flux-potential]] is omitted from the canonical plan item's dependency list. It is included here because the statement uses its Kähler-flatness conclusion. Its complete current proof and the proof of [[def-cmp4-gkp-single-overall-kahler-modulus-coordinate]] were inspected. The current no-scale Step 1 record is escalated: the O3/O7 definition is not in the live run manifest, the GKP-coordinate item has no current readiness record, and its pseudoaction/self-duality chain remains unresolved. The GVW postulate, free-period quantization postulate, D3 tadpole theorem, and [[def-r2-iib-flux-background-conventions]] also have current escalated Step 1 records on their stated prerequisite chains. The conifold-period theorem and [[def-r2-conifold-smoothing-and-period-conventions]] are ready-current. These input records keep this item escalated; the conditional calculation above is complete at the inspected statements and proofs.

The conifold-period proof transitively assumes full AC. The direct dependency [[def-axiom-of-choice]] records that inherited mathematical foundation. The source papers report model deductions and approximation regimes; they do not make the flux choice an experimental observation.
