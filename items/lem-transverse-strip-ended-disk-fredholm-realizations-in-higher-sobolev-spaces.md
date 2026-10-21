---
id: lem-transverse-strip-ended-disk-fredholm-realizations-in-higher-sobolev-spaces
kind: lemma
title: "Transverse strip-ended disk Fredholm realizations in higher Sobolev spaces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-finite-transverse-strip-ended-disk-cauchy-riemann-fredholm
  - lem-geometric-oriented-disk-cauchy-riemann-fredholm-and-higher-regularity
  - lem-transverse-linear-strip-cauchy-riemann-isomorphism
  - lem-countable-choice-weighted-strip-sobolev-algebra-and-composition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Local higher regularity and the actual transverse strip inverse"
      locator: "The global end bootstrap and range/cokernel comparison are proved below from the explicitly cited local analytic suppliers."
---

## Statement

Assume Countable Choice and all the actual geometric, frame, boundary, operator and weight hypotheses of [[lem-finite-transverse-strip-ended-disk-cauchy-riemann-fredholm]]. In addition suppose every end coefficient $B_i$ and its coordinate derivatives through order two are uniformly bounded. Keep its exact weighted $H^1$ boundary domain $X_\delta$ and target $Y_\delta=L^2_\delta$. For $q=0,1,2$ put $$X_{q,\delta}=H^{q+1}_\delta(E)\cap X_\delta,\qquad Y_{q,\delta}=H^q_\delta\bigl(E\otimes\Lambda^{0,1}\bigr).$$ The higher norms use the same finite compact atlas, the specified product end frames and the given smooth positive weight. Only the zeroth totally real boundary condition is imposed; no higher normal trace or $H^3$ closure of smooth boundary sections is asserted.

Each actual realization $D_q:X_{q,\delta}\to Y_{q,\delta}$ is bounded Fredholm. Its kernel is the same set as that of $D_0$, its range is $Y_{q,\delta}\cap\operatorname{Ran}D_0$, and inclusion into $L^2_\delta$ identifies its real cokernel with that of $D_0$. In particular its real index agrees with the $H^1\to L^2$ index, without asserting a value for that index. If $u\in X_\delta$ and $Du=f\in Y_{q,\delta}$, then $$\|u\|_{H^{q+1}_\delta}\le C_q\bigl(\|f\|_{H^q_\delta}+\|u\|_{H^1_\delta}\bigr).$$ The $H^1$ kernel-complement range inverse restricts to a bounded range inverse with these higher norms. This is actual linear higher regularity and Fredholm theory for the specified operator; no nonlinear configuration space, polygon regularity, domain-index formula, compactification or gluing follows from it alone.

## Statement references

[[lem-finite-transverse-strip-ended-disk-cauchy-riemann-fredholm|Exact actual operator and completed domain]]

## Facts & Assumptions

**Given:** The actual operator and domain in the Statement, including bounded end coefficient derivatives through order two.

[A1] [[def-countable-choice]] is the choice hypothesis of the analytic suppliers.

[F1] [[lem-finite-transverse-strip-ended-disk-cauchy-riemann-fredholm]] proves actual $D_0:X_\delta\to L^2_\delta$ Fredholmness, closed range and a bounded inverse on its Hilbert kernel complement. Its proof constructs an actual compact disk extension of the core symbol and oriented boundary condition, not a merely topological cap.

[F2] [[lem-geometric-oriented-disk-cauchy-riemann-fredholm-and-higher-regularity]] proves local weak higher regularity, including boundary patches, for the exact zeroth real trace domain and gives its estimates. Its proof steps 5.2 and 6.2 use tangential difference quotients and then recover normal derivatives from the equation, without imposing differentiated normal boundary traces.

[F3] [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]] proves the constant whole-strip inverse with the actual product-plane completion and weights strictly below the angular gap.

[F4] [[lem-countable-choice-weighted-strip-sobolev-algebra-and-composition]] proves weak strip extensions, smooth approximation, weak derivative identities, and the weighted Sobolev norms through order three. In particular smooth weights with bounded logarithmic derivatives give equivalent product/differentiation estimates on translated strip windows.

## Proof

1.1 **Higher regularity of the actual constant whole-strip inverse.** Replace the weight $e^{\delta|s|}$ of [F3] by a smooth weight equal to it off a compact interval. The two weighted $H^1$ and $L^2$ norms are equivalent, so its same inverse $Q$ is bounded in these norms. Translations $\tau_h$ for $|h|\le1$ are uniformly bounded on every indicated weighted Sobolev norm, since the smooth logarithmic weight has bounded derivatives; smooth approximation from [F4] proves translation continuity and $h^{-1}(\tau_h f-f)\to f_s$ in weighted $L^2$ for $f\in H^1_\delta$. The operator $D_*=\partial_s+i\partial_t$ and its constant boundary planes commute with translations. Uniqueness of [F3] therefore gives $\tau_hQf=Q\tau_hf$, and the difference quotients of $u=Qf$ converge in weighted $H^1$ to $Qf_s$. Passing their weak derivative tests to the limit proves $u_s=Qf_s\in H^1_\delta$, in the same real boundary domain. For $f\in H^2_\delta$ repeat this argument to obtain $u_{ss}=Qf_{ss}\in H^1_\delta$. The equation $u_t=i u_s-i f$ then recovers every missing derivative through order three: for example $u_{tt}=-u_{ss}+f_s-if_t$ belongs to $H^1_\delta$ when $f\in H^2_\delta$. Consequently $Q:H^q_\delta\to H^{q+1}_\delta$ is bounded for $q=1,2$. This uses no unjustified higher boundary completion; all tangential derivatives were obtained in the actual $H^1$ completion by norm limits. [F3, F4, construct, algebra]

1.2 **The compact core and cut bands are actual boundary patches.** Cover the remaining compact portion, including every cutoff band, by finitely many interior and smooth boundary charts. On a boundary arc use a smooth complex frame flattening its totally real plane locally, so the operator is the Cauchy–Riemann symbol plus a smooth zeroth-order matrix. This is precisely the local weak problem of [F2]; equivalently use the actual compact-core extension in [F1]. Compact cutoffs preserve the zeroth real trace condition. Its weak estimate first gives $H^2$ from $f\in H^1$ and $u\in H^1$, and then $H^3$ from $f\in H^2$ and that $H^2$ conclusion. The weight is a bounded smooth multiplier with bounded inverse and derivatives on this compact part. These are local estimates on successively smaller compact patches, bounded by the local forcing norm and original $H^1$ norm. Finite summation controls every compact cut band as well as the core. Only additional weak derivatives have been obtained, so membership in the original $X_\delta$ is retained. [F1, F2, F4, construct, algebra]

2.1 **Bootstrap on each real end.** Let $u\in X_\delta$ and $Du=f\in H^q_\delta$. Choose an end cutoff $\chi$ zero on its initial collar and one on its tail. In the specified end frame extend $v=\chi u$ by zero to the negative half of the whole strip. It belongs to the whole-strip weighted $H^1$ domain: multiplication by $\chi$ and zero extension act on its defining boundary-compatible smooth approximations; the weights on the positive tail differ only by a constant from the whole-strip weight. Its actual equation is $$D_*v=\chi f-\chi B_i u+\chi' u.$$ If $q\ge1$, the right side belongs to weighted $H^1$ because $u\in H^1_\delta$ and $B_i,\nabla B_i$ are bounded; cutoff terms are supported in a compact end band. Step 1.1 therefore gives $u\in H^2_\delta$ on the tail. If $q=2$, this first conclusion, the bounded second derivatives of $B_i$, and the compact-band regularity in step 1.2 put that right side in $H^2_\delta$. A second application gives $H^3_\delta$ on the tail. Together with step 1.2, apply the order-one conclusions on all finitely many patches and tails first, then the order-two conclusions. Summing their estimates and absorbing the already bounded lower norm gives $\|u\|_{H^{q+1}_\delta}\le C_q(\|f\|_{H^q_\delta}+\|u\|_{H^1_\delta})$ for $q=1,2$. No derivative of $B_i$ is required to decay, since it is multiplied only by an already weighted-integrable derivative of $u$. [F3, F4, step 1.1, step 1.2, construct, algebra]

3.1 **Closed higher domains and actual range comparison.** Weighted Sobolev derivative graphs are closed Hilbert subspaces of finite sums of weighted $L^2$ spaces: pass the distributional test identities to norm limits in every fixed chart and end, as in [F4]. The intersection $X_{q,\delta}$ is closed in $H^{q+1}_\delta$, because its zeroth $H^1$ boundary domain is closed and inclusion in weighted $H^1$ is continuous. Leibniz and the bounded coefficient derivatives make $D_q$ bounded. Step 2.1 implies both $\ker D_q=\ker D_0$ and $$\operatorname{Ran}D_q=H^q_\delta\cap\operatorname{Ran}D_0.$$ The latter range is closed in $H^q_\delta$, since $\operatorname{Ran}D_0$ is closed in $L^2_\delta$ by [F1]. Thus the higher range assertion is an equality of actual ranges, not an assumption about smooth solutions. [F1, F4, step 2.1, construct, algebra]

4.1 **Cokernel, index and range inverse.** Smooth compactly supported interior target sections are dense in weighted $L^2$: cut off the ends, use the finite compact chart partition, then convolve the local coefficient functions as in [F4]. They belong to every indicated $H^q_\delta$. Their images in the finite-dimensional real quotient $L^2_\delta/\operatorname{Ran}D_0$ are dense, while the image of the linear space $H^q_\delta$ is a linear subspace of that quotient and hence closed. The quotient map is therefore onto. Its kernel is exactly the range in step 3.1. This identifies the higher cokernel with the $H^1$ cokernel and proves Fredholmness and equality of real indices; the numerical index has not been computed. Finally apply the estimate of step 2.1 to the bounded $H^1$ kernel-complement inverse of [F1]. Its solution for higher forcing is the same section, now in $X_{q,\delta}$, with the asserted bounded higher norm. All domains retain only the original real trace condition. The argument is a linear operator construction and proves no further moduli-space conclusion. [A1, F1, F4, step 2.1, step 3.1, construct, algebra] ∎
