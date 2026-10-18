# Fresh continuation: actual MINI mass-Schur and graded meshes

This is new research following the owner's actual MINI bubble-condensation note, not a repetition of the earlier projector counterexample. Read that note fully and coordinated with the graded-structure and maximal-route agents. No canonical or control write was made. The original smooth pressure claim is still unresolved.

## New full text: shape-regular discrete Meyers estimate

Nadine Badr and Emmanuel Russ, *A Meyers type regularity result for approximations of second order elliptic operators by Galerkin schemes*, arXiv:1201.6332v2, 9 October 2012, 24 pp. Published under the title *A Meyers type regularity result for approximations of second order elliptic operators by P1 finite elements*, DOI 10.1002/mana.201200273.

Full source https://arxiv.org/pdf/1201.6332v2, saved as `badr-russ2012.pdf` and `.txt`.

Actually inspected §1 statements and mesh definitions pp.1–4; graph/Sobolev/interpolation setup and theorem statements §2–3; the full finite-element proof §4 pp.14–19, including Proposition 4.3, Lemma 4.4 and the reconstruction argument. The additional general-graph Hölder theorem §5 was not independently checked.

This source genuinely allows arbitrary conforming shape-regular triangulations, rather than quasiuniform meshes: its definition of regularity is h_T/rho_T <= sigma, with no global minimum-element condition. Theorem 1.1 gives a uniform W1,p estimate for p in (2,2+epsilon) for scalar P1 Galerkin solutions. But it is stated on **convex polygons in two dimensions**, with **Dirichlet** boundary conditions, for a local divergence-form bilinear form integral A grad u grad v. It does not assert p=3, d=3, Neumann boundary conditions or the actual nonlocal g_h form.

The proof is nevertheless relevant to the new structure. It obtains uniform isomorphism at p=2 by Lax–Milgram; proves boundedness on a surrounding W1,p scale; then invokes the complex interpolation openness lemma of Šneǐberg (Lemma 4.4) to obtain a small interval around p=2. Graph reconstruction transfers the estimate back to the P1 functions. The proof has no step establishing a fixed width epsilon>=1, so it cannot be read as a W1,3 theorem. Proposition 1.2 moreover explains that a fixed large interval is impossible for arbitrary elliptic coefficient fields; that proposition is not a counterexample to the special actual g_h.

### A concrete new structural interface, still requiring proof

The owner's actual full-MINI R_h has uniform Lp bounds for every 1<=p<=infinity. Therefore the actual form satisfies

    |g_h(q_h,r_h)|
      = |(R_h grad q_h,R_h grad r_h)|
      <= C_p ||grad q_h||Lp ||grad r_h||Lp'.

This is an immediate valid consequence of Holder and the proved R_h bounds. Its p=2 inverse is uniformly bounded by the already-proved bubble lower bound. Thus an extension of the interpolation argument to the actual zero-mean Q_h Neumann scale is plausible. A uniform Scott–Zhang retraction onto Q_h in W1,p would provide the required finite-element interpolation scale; an actual quantitative Šneǐberg proof would still need to be supplied locally. The result would at best give some p>2 depending on domain and shape bounds. This note does **not** assert that extension as a proved lemma, and even such a lemma would not reach p=3 or prove physical H^s regularity of grad phi_h. Higher integrability and positive fractional differentiability are different assertions.

## New full text: current projection stability results still quantify grading

Lars Diening, Viktoria Lingert and Tabea Tscherpel, *Sobolev stability of the L2-projection on hybrid meshes*, arXiv:2607.02362v1, 2 July 2026, 24 pp. Full source https://arxiv.org/pdf/2607.02362 . Saved `hybrid2026.pdf` and `.txt`.

Actually inspected introduction pp.1–3, grading definitions §2.2, decay estimates and Theorem 3.13/Corollary 3.14 §§3.4–3.5 pp.17–22. The local quadrilateral calculations were not independently certified.

Its introduction carefully distinguishes one-dimensional bad-grading counterexamples from the higher-dimensional question, saying analogous higher-dimensional counterexamples are unknown and that available stability results impose grading assumptions. Its main stability theorem explicitly contains the mesh grading parameter and a decay threshold. The spaces are Lagrange/hybrid spaces, not the bubble-enriched actual MINI mass space. Neither the theorem nor its introductory literature review supplies arbitrary-shape-regular fractional stability for the constrained P_Zh.

The useful connection is methodological: the new owner's strict diagonal dominance supplies an improved genuine decay mechanism for the full MINI mass inverse. The graded agent separately proved its graph off-diagonal decay. Turning this graph-distance decay into physical H^s bounds on every allowed mesh still requires an argument handling volume ratios, boundary behavior and fractional cross-cell differences. Substituting a bound h_K/h_J <= Gamma^distance gives a fractional threshold depending on Gamma and does not automatically yield s>1/4. Neither graph decay nor Lp stability alone is a proof of that threshold.

## New full text: local stable projections do not automatically transfer to the mass projector

Lars Diening, Johannes Storn and Tabea Tscherpel, *Interpolation operator on negative Sobolev spaces*, arXiv:2112.08515, Mathematics of Computation, DOI 10.1090/mcom/3824, 31 pp.

Full source https://arxiv.org/pdf/2112.08515 . Saved `negative2021.pdf` and `.txt`.

Actually inspected Theorems 1–2 and fractional-order Remark 3 pp.2–4, §3.1 uniqueness of self-adjoint projection and §3.2 local self-adjoint averaging pp.16–18. This does not claim a full check of all 31 pages.

It gives stable local projections and adjoints on arbitrary shape-regular meshes, and a local self-adjoint averaging operator I which is elliptic on the FE space and satisfies I Pi_2 = I = Pi_2 I. These operators are useful for interpolation-space constructions and preconditioning. They are not the orthogonal mass projection. The text explicitly explains that the local projection sacrifices self-adjointness, whereas the self-adjoint averaging operator sacrifices projection. Inverting its elliptic restriction to recover the mass projection reintroduces a nonlocal inverse; no arbitrary-mesh H1 or fractional stability follows just from its L2 ellipticity.

This distinction applies equally to using a local Fortin map in place of the actual P_Zh in the original initialization. The original initialization remains fixed.

## Exact remaining questions

No new ready canonical prerequisite or exact-scope counterexample was obtained. The genuinely useful fresh source is the arbitrary-shape-regular discrete Meyers interpolation mechanism, with its sharply limited exponent and boundary scope. The source results inspected here do not prove either requested fractional interface:

    ||A_h^alpha P_Zh v||2 <= C ||v||V, alpha>1/8,

or the appropriate special-initialization estimate at a larger exponent/endpoint Besov scale. A small positive p−2 or an arbitrarily small fractional exponent cannot be silently substituted for the quantitative thresholds needed by the nonlinear/parabolic argument.

The original actual mass-Schur equation and special O(h²) load are more structured than the generic coefficient equations in these sources. Whether that structure yields the required quantitative fractional regularity remains an actual proof obligation, rather than a licensed narrowing of the original hypotheses.
