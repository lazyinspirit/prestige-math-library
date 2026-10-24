---
id: lem-cha-kim-integral-solvability-and-blanchfield-bordism
kind: lemma
title: "Integral-pair persistence and Blanchfield bordism for iterated infection"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-blanchfield-pairing-and-higher-order-rho-invariant
  - def-integral-half-solutions-strebel-and-l2-signatures
  - lem-higher-order-blanchfield-pairings-are-nonsingular
  - thm-integral-pair-data-yield-blanchfield-bordisms-after-standard-infections
  - thm-unimodular-infection-tower-data-force-mixed-derived-meridian-survival
  - lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha and Taehee Kim, “Iterated satellite operators on the knot concordance group”"
      url: "https://arxiv.org/pdf/2402.04629v2"
      locator: "§§4.1–4.3 and Appendix A, infection cobordism and Blanchfield bordism"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $n\ge1$. Supply a compact connected oriented topological four-manifold $V$ with boundary a marked knot zero surgery, $H_1(V;\mathbb Z)=\mathbb Z$ and $H_2(V;\mathbb Z)=\mathbb Z^{2r}$, and exactly $r$ integral pairs $x_i,y_i\in H_2(V;\mathbb Z[\pi/\pi^{(n)}])$, $\pi=\pi_1(V)$, satisfying $\lambda(x_i,x_j)=0$ and $\lambda(x_i,y_j)=\delta_{ij}$. Form $W$ by any finite sequence of the actual marked standard connected-sum and winding-zero infection cobordism adjunctions along outgoing knot-surgery components, including orientation reversals, using supplied smooth peripheral products and collars. Let $\phi:\pi_1(W)\to\Gamma$ have PTFA target and restrict on $V$ through $\pi/\pi^{(n)}$. Take $k=\mathbb Q$ or $\mathbb F_p$ and put $A=k[\Gamma]$, with involutive Ore fraction division ring $K$ and the based standard parallel Hermitian structure.

The image pairs $\ell_i,d_i\in H_2(W;A)$ satisfy $\lambda(\ell_i,\ell_j)=0$ and $\lambda(\ell_i,d_j)=\lambda(d_j,\ell_i)=\delta_{ij}$. Their localized boundary-intersection cokernel has dimension at most $2r$. For each boundary component $M_0$ on which $\phi$ is nontrivial, $H_1(M_0;K)=0$, its coefficient Bockstein–duality linking form is defined, and its actual inclusion kernel is isotropic:
$$B_{M_0}(z,w)=0\quad\text{for all }z,w\in\ker\{H_1(M_0;A)\to H_1(W;A)\}.$$
Thus every boundary class with nonzero self-pairing survives in $H_1(W;A)$ and lies outside every isotropic submodule. If a component's coefficient image is cyclic, its form additionally has the nonsingularity furnished by the cyclic-image coefficient theorem; no unrestricted PTFA nonsingularity is asserted.

For a finite forest of iterated winding-zero infections with these initial data, suppose each top meridian generates $H_1(W_n;\mathbb Z)=\mathbb Z$ up to sign, and each pattern-axis integral classical self-pairing is nonzero. Use the actual intermediate $W_j$, rational mixed coefficients through index $n$, and one bottom field $\mathbb F_p$. For every odd prime outside the explicit finite exceptional set of the axis values, every branch meridian has a nonzero class in $P^{n-j}\pi_1(W_j)/P^{n-j+1}\pi_1(W_j)$, of infinite order when $j>0$ and order $p$ when $j=0$. All these conclusions hold for the supplied locally flat topological bordisms and smooth bordisms without a choice principle. Existence of the initial $V$ and its lifted pairs from a concordance relation is a separate hypothesis, as are analytic rho invariance and signature vanishing.

## Facts & Assumptions

**Given:** The actual initial integral homology and pair data, finite marked standard adjunctions, coefficient homomorphism and field, and the extra finite-forest hypotheses when that conclusion is invoked.

[F1] Integral pair data persist under the actual standard adjunctions, whose ordinary boundary homology maps give nonincreasing boundary cokernel dimension. For PTFA targets factoring through the initial derived quotient, the localized bound and every selected boundary-kernel isotropy follow in the full supplied topological scope. [[thm-integral-pair-data-yield-blanchfield-bordisms-after-standard-infections]]

[F2] The full simultaneous finite-forest induction gives actual mixed-derived meridian survival and exact orders from one supplied initial integral-pair bordism, using the finite exceptional-prime set for nonzero integral axis self-values. [[thm-unimodular-infection-tower-data-force-mixed-derived-meridian-survival]]

[F3] Integral and field PTFA group rings have the compatible involution and fractions; a closed component's cyclic coefficient image gives nonsingularity when its fraction-field first homology vanishes. [[lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions]], [[lem-higher-order-blanchfield-pairings-are-nonsingular]]

## Proof

1.1 The supplied height-$n$ integral pairs and the factorization of $\phi|_{\pi_1(V)}$ verify the exact input of [F1]. Its coefficient extension, cap naturality and Hermitian symmetry give the zero and both unit cross-pairings for their actual images in $W$. The ordinary homology computation bounds $\dim_k\operatorname{coker}(H_2(\partial W;k)\to H_2(W;k))$ by $2r$; its full topological rank comparison bounds the localized cokernel by this ordinary dimension. Thus the displayed pairs and localized rank bound are established for the actual supplied $W$, including all orientations and finite attachment orders. [F1, given, construct, algebra]

2.1 Every remaining boundary component is a marked knot zero surgery and has ordinary first Betti number one over $k$. By [F1], a nontrivial restricted PTFA system makes its first $K$ homology zero, so its Bockstein–duality form is defined. The same theorem applies the finite pairs and the localized bound from step 1.1 to give exactly the asserted kernel isotropy, without a vanishing assumption on any other boundary component. This is the boundary-kernel conclusion used in the source's Blanchfield-bordism argument. It does not require invertibility of an arbitrary noncommutative universal-coefficient evaluation map. [F1, F3, step 1.1, construct, algebra]

3.1 If $B_{M_0}(z,z)\ne0$, the class $z$ cannot belong to the inclusion kernel of step 2.1, since all self-values in that kernel are zero. Its image in $H_1(W;A)$ is therefore nonzero. The same reasoning excludes it from every isotropic submodule. If the coefficient image on a closed component is cyclic, step 2.1 verifies the fraction-field vanishing required by [F3], and that theorem supplies its additional nonsingularity. For a general PTFA image only the defined form and the proved isotropic kernel are used. [F1, F3, step 2.1, algebra]

4.1 In the finite-forest situation, each intermediate $W_{j+1}$ is obtained from the same $V$ by a finite list of standard adjunctions. Its coefficient target $\Gamma_j=\pi_1(W_{j+1})/P^{n-j}\pi_1(W_{j+1})$ has rational-prefix derived length at most $n-j\le n$, so the restriction to $V$ factors through $\pi/\pi^{(n)}$. Step 1.1 supplies the finite intersection data required in [F2] for all these actual intermediate manifolds and fields. The stipulated top-meridian homology condition supplies its base case, and its integral-axis reduction gives the common finite exceptional prime set. Apply [F2] to obtain precisely the simultaneous nonzero mixed factors and infinite/prime orders in the Statement, with the actual inclusion quotient maps. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 The constructions use only the stated initial integral-pair data and the actual supplied finite adjunctions; [F1] and [F2] establish them without smoothing the initial topological manifold or choosing arbitrary infinite bases. The resulting multi-boundary bordisms have the finite Lagrangian-pair and kernel-isotropy properties proved above. These properties do not identify a nonzero-self axis with an isotropic kernel, and do not assert that such a multi-boundary manifold is itself an integral half-solution. No analytic rho conclusion or existence of initial pair data was used. This completes every stated supplied-data conclusion. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

The original carrier incorrectly described the iterated multi-boundary infection bordism as an integral half-solution and its infection axes as a metabolizer. An integral knot half-solution has a single prescribed surgery boundary; moreover an axis with nonzero self-value cannot lie in an isotropic metabolizer. The actual source uses an initial solution $V$ and proves finite Lagrangian-pair and Blanchfield-kernel properties for its standard adjunctions. The initial solution's existence and analytic signature constraints remain separate requirements in the original infinite-rank theorem.
