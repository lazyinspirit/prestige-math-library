# Reader 7 report — `fluid-dynamics-all-47-2026-10-23`

Batch: `7`  
Role: independent reader  
Scope: `fd-x03` and its examples companion

## Opened inventory

- Assigned manifest: `research/fluid-dynamics-all-47-2026-10-23-batch-7.pages.json`.
- Assigned pages: `library/fluid-dynamics-mathematics/fd-x03.md` (A) and `library/fluid-dynamics-mathematics/fd-x03-examples.md` (B).
- Assigned items, read after their suppliers: `thm-fd-x07`, `thm-fd-x10`, `thm-fd-x11`, `ex-fd-x07-formal-verification`, `ex-fd-x10-formal-verification`, and `ex-fd-x11-application`.
- Supplier items opened: draft `def-fd-x00`; published `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, and `def-countable-choice`.
- Page prerequisite context opened: local `fd-x01`; root mathematics pages `countability-and-uncountability`, `euclidean-surface-measure-divergence-and-green-identities`, and `rn-as-a-normed-space`. These are read-only context.
- Read the batch-7 notes, coverage record, cross-batch dependency record, and the six batch-7 proof-contract entries. I treated those records as context and checked the current item and page carriers independently.

## Mathematical review

- `thm-fd-x07`: The componentwise integrations by parts follow from the stated $C^2/C^1$ regularity and zero trace, using the bounded-$C^1$ divergence theorem with its stated `AC_omega` assumption. The integral Cauchy–Schwarz bound is proved locally from pointwise Euclidean Cauchy–Schwarz and a nonnegative quadratic, including the zero-norm case. The periodic-channel $h$-bound is proved separately by the vertical fundamental theorem of calculus and does not apply the bounded-domain theorem to a torus cell. Subtracting the stationary Stokes equation from the already-existing Navier–Stokes field gives the stated residual with the correct sign. The explicit Poincaré inequality is a hypothesis, not an unproved assertion that it holds for every domain. No mathematical defect found.
- `thm-fd-x10`: Subtracting the Couette base gives the displayed perturbation equation. The transport, pressure, diffusion, and periodic-face terms in the energy identity cancel as stated; the shear term is bounded by $|S|E/2$, and the channel inequality yields the differential inequality with decay rate $2\nu/h^2-|S|$. The strict condition makes that rate positive. The conclusion remains conditional on an existing smooth solution over $[0,T]$ and makes no global-regularity or physical-transition claim. No mathematical defect found.
- `thm-fd-x11`: Substitution into the Laplace and interface conditions gives $D_+H=-kA_+$, $D_-H=kA_-$, then $D_+^2+D_-^2=0$, and the stated roots. For $\Delta U\ne0$ the positive branch has the claimed growth. The periodic real cosine modes have initial $H^m$-norm $1/\sqrt2$ and evolved norm $e^{k|\Delta U|t/2}/\sqrt2$; hence the asserted lack of a uniform bound follows for every fixed $t>0$. The claim is restricted to the stipulated linear model. No mathematical defect found.
- `ex-fd-x07-formal-verification`: The wall trace, residual, trigonometric norm integrals, and comparison with the channel constant (h) check directly. It does not misapply the Euclidean bounded-domain theorem.
- `ex-fd-x10-formal-verification`: The field satisfies the full stated smooth Navier–Stokes equation and wall data; its exact energy (2\pi^2a^2e^{-2\pi^2t}) is bounded by the supplier estimate. The zero-amplitude case is covered.
- `ex-fd-x11-application`: Direct differentiation verifies harmonicity, decay, pressure continuity, and both kinematic conditions; the parameters yield λ=1. No nonlinear or experimental conclusion is made.

The declared dependencies and proof-contract fact/step mappings match the current arguments. The Cauchy–Schwarz supplier is used for pointwise finite-dimensional vector inequalities; the required scalar integral estimate is established in `thm-fd-x07`. The divergence-theorem supplier is used only on the stated bounded (C^1) Euclidean domain. No TikZ or tikzcd diagrams occur in the assigned items.

## Source checks

- Jean-Luc Guermond, *Introduction to Partial Differential Equations for Engineering Applications*, Part I, Chapter 3, §3.3 and §3.4.4, Theorem 3.4 and Corollary 3.5, <https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf>. The source states a Poincaré–Steklov inequality for a bounded connected cone-domain and explicitly defers its proof. The assigned residual estimate assumes its own Poincaré bound and does not import this source as its proof.
- David Tong, *Fluid Mechanics*, Chapter 2, §3.2.2, printed pp. 64–65/PDF pp. 10–11, <https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf>. The source gives the linear Couette profile between moving plates, matching the contextual use in `thm-fd-x10` after setting the top-wall speed to $Sh$. Its printed pp. 82–83 Stokes minimum-dissipation discussion is explicitly context only for `thm-fd-x07`.
- Paolo Falsaperla, Giuseppe Mulone, and Carla Perrone, *Energy stability of plane Couette and Poiseuille flows and Couette paradox*, arXiv:2105.06443v1, §§2.1 and 3.1, <https://arxiv.org/pdf/2105.06443>. The source restricts its nonlinear result to streamwise perturbations; the assigned all-smooth-perturbation estimate is derived locally and does not rely on that result.
- David Tong, *Fluid Mechanics*, Chapter 4, §§5.1 and 5.1.1, printed pp. 182–185/PDF pp. 1–5, <https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids4.pdf>. Its equal-density, zero-gravity, zero-surface-tension dispersion relation agrees with the assigned $\lambda$ convention after $\lambda=-i\omega$.
- Markus Zahn, MIT OpenCourseWare 6.642, *Kelvin–Helmholtz Instability*, complete four-page note, <https://ocw.mit.edu/courses/6-642-continuum-electromechanics-fall-2008/acf162c3f92b66baf592c488ee2624ca_kelvin_helmholtz.pdf>. Its finite-depth relation has the matching equal-density, zero-gravity, zero-surface-tension deep-layer specialization.

I independently checked the relevant cited sections above, not every page of each long source PDF. The source coverage record’s retrieval stamps were not treated as a substitute for that scoped check.

## Page verdicts and unedited findings

- `fd-x03` (A): its frontmatter-only layout, draft status, mathematics classification, prerequisites, and item inventory are structurally consistent. Its title, “Bounded-domain Stokes residual estimate,” names only `thm-fd-x07`, while the same page also lists the separate Couette energy result `thm-fd-x10` and linear interface result `thm-fd-x11`. This is a nonfatal title-scope mismatch.
- `fd-x03-examples` (B): its frontmatter-only layout, draft status, mathematics classification, companion, and examples inventory are consistent. Its title, “Bounded-domain Stokes residual estimate — Examples,” names only the `ex-fd-x07-formal-verification` subject while the page also lists the Couette and interface examples `ex-fd-x10-formal-verification` and `ex-fd-x11-application`. This is a nonfatal title-scope mismatch.

Both title findings are retained for owner disposition. No item or page was edited: the current page titles are mirrored in the run manifest, and the B-page title is outside this reader's A-page write scope. No proof-contract or verification metadata changed.

## Blocker

No blocker to verifying the six mathematical arguments. The two page-title findings remain unresolved for the title/manifest and paired-page owners.
