# Smooth MINI pressure: full-text source lane, cycle 4

## Disposition

The unchanged instantaneous smooth pressure clause is not resolved by this lane. No canonical file, controls, metadata, hash, gate, test, publication or commit was changed. No theorem has been imported without proof. All saved work is in this directory. The new positive spatial supplier from the owner remains the H2 MINI Fortin approximation; this lane supplies no additional ready canonical prerequisite.

Read CLAUDE.md, README.md and SCHEMA.md fully, and the current smooth velocity theorem, scheme definition, pressure escalation, cycle-3 derivative-route review and cycle-4 smooth approximation review. The target retains arbitrary shape-regular matching meshes, arbitrary partitions, mass P_Zh initialization, Lipschitz polyhedral domains in d=2 or 3, smooth u,u_t in H2, p,p_t in H1 and interval forcing averages.

The most useful outcome is a source-level diagnosis: an apparently direct published-preprint pressure route invokes precisely the forbidden full-test H1 kernel-projector statement, and its supplied proof contains an explicit best-approximation error. Two modern full-text alternatives correctly retain stronger mesh/initial-data conditions. A fractional discrete-Stokes source also explicitly uses global inverse assumptions and extra elliptic domain regularity. These sources cannot certify the missing exact-scope result.

## 1. Fiordilino: the advertised pressure technique contains the same forbidden step

J. A. Fiordilino, *On pressure estimates for the Navier–Stokes equations*, arXiv:1803.04366v1, 12 March 2018, 9 pp.

Full text: https://arxiv.org/pdf/1803.04366 . Saved `fiordilino2018.pdf` and text extraction `fiordilino2018.txt`. Actually inspected the introduction and mathematical preliminaries pp.1–3, the derivative-to-pressure transition in the stability/error arguments, and the entire Appendix pp.8–9. This is not a claim to have independently verified all arithmetic in its complete convergence proof.

Section 2.1 assumes quasiuniform meshes. Its Lemma 3 asserts equivalence between the full velocity-space negative norm and the restricted discrete-kernel negative norm for w in the discrete kernel. The accompanying remark expressly says the proof uses H1 stability of the L2-orthogonal kernel projection. This is the same forbidden interface identified in the local escalation. The proof is referred to Galvin; the Appendix tries to supply H1 stability itself.

Appendix Theorem 8 claims, for all u in H1(Ω)^d, that the L2 projection P onto the discrete divergence kernel satisfies ||∇Pu|| <= C||∇u||. The argument introduces Scott–Zhang I_SZ u in the full velocity space X_h. Its final displayed estimate bounds

    h^(-1) ||Pu-u||_2 <= C ||∇u||_2

by interpolation properties of I_SZ. That inference is invalid: P is best approximation in the kernel Z_h, while I_SZ u is only in X_h. For arbitrary u, no kernel approximation of u with this estimate exists. The argument has silently replaced inf_{z_h in Z_h} by inf_{v_h in X_h}. Restricting the theorem to solenoidal u would change the relevant input and would not imply its full-test negative-norm equivalence.

The existing local square Leray-boundary obstruction independently disproves the claimed full-test conclusion, including on quasiuniform families; hence extending this source to graded meshes cannot repair it. This note does not assert a counterexample to the original smooth pressure error estimate. It diagnoses an invalid proof route.

Further mismatches: the source uses a linearly implicit scheme, uniform time steps, nodal forcing, and convex domains. Its advertising of MINI/Taylor–Hood applicability cannot override these proof defects or mismatches. No result from it is a logical supplier here.

## 2. Contri–Kovács–Massing: actual pressure proof with strong initial norm

Alessandro Contri, Balázs Kovács, André Massing, *Error Analysis of BDF 1–6 Time-Stepping Methods for the Transient Stokes Problem: Velocity and Pressure Estimates*, arXiv:2312.05511. Full text: https://arxiv.org/pdf/2312.05511 . Saved `stokesbdf2023.pdf` and `.txt`, 28 pp.

Actually inspected setup pp.1–3, spatial/time assumptions pp.6–9, Theorem 4.2 with derivative test and Theorem 4.3's inf-sup pressure derivation pp.10–15, error decomposition and Theorems 6.1–6.2 pp.19–22, and discussion of alternative initialization §7 pp.22–23. Intermediate higher-order multiplier calculations were not independently certified.

This is an actual full-test pressure proof, avoiding the false kernel/full negative-norm equivalence: first bound D_tau u_h in L2_x by testing with D_tau u_h, then use Poincare to bound its action on all velocity tests and apply inf-sup. Theorem 4.2's bound retains the initial velocity V norm. Theorem 6.2 controls that initial error by choosing a method-dependent Ritz initial projection. Its equation (6.18) uses the V norm of S_hu_0-R_hu_0, which is small by static Ritz approximation. Replacing R_hu_0 by the authorized mass P_Zh u_0 requires a genuinely new estimate.

Precise mismatches:

- §3.1 assumes quasiuniform triangulations; global inverse estimates enter approximation arguments.
- §3.3 uses a fixed τ and nodal forcing f(t_n).
- Theorem 6.2 prescribes Ritz initial data, not the mass projection.
- For BDF1 its stated regularity includes H2_t L2_x, stronger than the original W1,infinity_t H2_x assumption.
- The system is linear Stokes. Applying it to NS also needs a complete treatment of the discrete nonlinear residual.

For the original time-averaged BE recurrence, the previously proved L2 time-consistency residual can eliminate the need for u_tt, but it does not resolve the initial V norm or nonlinear residual. Therefore this source confirms the exact local obligations already recorded; it does not discharge them.

## 3. Leykekhman–Vexler: general-mesh results concern velocity L2, with initial projector norm retained

Dmitriy Leykekhman and Boris Vexler, *L2(I;H1(Ω)) and L2(I;L2(Ω)) best approximation type error estimates for Galerkin solutions of transient Stokes problems*, arXiv:2304.13839v1, 17 pp.

Full text: https://arxiv.org/pdf/2304.13839 . Saved `stokesbest2023.pdf` and `.txt`.

Actually inspected introduction pp.1–2, spaces and temporal hypotheses pp.5–7, Theorems 4.1–4.2 and proof pp.8–10, projector estimates §5.2 pp.11–12, main theorem statements and duality structure pp.12–14. This is not a claim to have verified every interpolation estimate in the remaining paper.

Its introduction explicitly states that the velocity L2_t L2_x best-approximation estimate admits graded and even anisotropic meshes subject to uniform inf-sup; the H1 velocity estimate needs a discrete Leray stability input. Those two norms concern the velocity, despite the mixed formulation and pressure variable. They are not instantaneous pressure-error estimates.

Theorem 4.1's L2 derivative/discrete-Stokes bound explicitly carries ||∇P_h u_0||_2. Lemma 5.4 controls that term only for a solenoidal no-slip input v in V1, on convex domains and quasiuniform meshes. Its proof uses a solenoidal Stokes Ritz approximation and the global h^-1 inverse inequality. This restricted statement does not say that P_h maps arbitrary full velocity tests boundedly in H1; it is consistent with the local false-projector diagnosis.

Time partitions are not arbitrary: (3.7) gives a polynomial lower bound on τ_min in terms of τ_max, (3.8) gives adjacent step-ratio bounds. No attempt here is made to decide which individual dG(0) sub-estimates can dispense with those hypotheses, since the pressure problem remains unresolved independently.

Remark 5.5 cites fractional all-input projector stability only for s<1/2, and expressly rejects its extension to s>=1/2 because of the boundary mismatch. Its cited source was retrieved next.

## 4. Guermond–Pasciak: fractional estimates have extra mesh and domain hypotheses

Jean-Luc Guermond and Joseph Pasciak, *Stability of Discrete Stokes Operators in Fractional Sobolev Spaces*, Journal of Mathematical Fluid Mechanics 10 (2008), 588–610, DOI 10.1007/s00021-007-0244-z.

Full PDF: https://people.tamu.edu/~guermond/PUBLICATIONS/Guermond_Pasciak_2008.pdf . Saved `guermond-pasciak.pdf` and `.txt`.

Actually inspected §1.2–1.4, all discrete hypotheses §2.1, Lemma 3.1 with full proof and Remark 3.1 (§3), and the norm-comparison proof around Theorem 4.1/Corollary 4.1. The complete remaining appendix and subsequent applications were not independently checked.

Lemma 3.1 gives H^s stability of P_h for 0<=s<1/2. But its discrete setup assumes the global inverse inequality

    ||v_h||_{H^s} <= c(s) h^(-s) ||v_h||_2,                   (2.3)

and H^s stability of the full finite-element L2 projector (2.4). Remark 2.1 says these hypotheses hold on quasiuniform meshes. The proof of Lemma 3.1, equation (3.2), explicitly multiplies a global O(h^s) approximation error by this global h^-s factor. Those hypotheses are not supplied on all allowed graded meshes. Additionally, §1 imposes elliptic boundary regularity: the Leray-projection proof uses H2 regularity of the homogeneous Neumann problem, and the Stokes framework assumes ||v||H2 <= C||Av||2 in (1.9). Neither is an available arbitrary Lipschitz polyhedron input.

Remark 3.1 is particularly clear: continuous Leray projection can lose tangential boundary conditions; hence full-input stability in the boundary-zero Sobolev scale fails at s>=1/2. This authoritative full-text passage agrees with the existing local counterexample to the forbidden full H1 route. It must not be confused with solenoidal-input stability on stronger meshes.

No fractional theorem in this paper is a ready original-scope supplier. Its global inverse/projection assumptions would first need replacement by actual local weighted or approximation-defect estimates under the original shape-regular hypotheses.

## 5. Scope of retained files and next precise interface

The directory retains the four actually used full-text sources and their page-marked text extractions, plus Vexler–Wagner arXiv:2307.14217v2, which was used only as a source locator. Its introduction and §4.1 explicitly assume convex 2D domains and quasiuniform meshes; no claim from that nonlinear paper is used here. Two nominal ESAIM PDF downloads returned challenge documents and were removed; neither was treated as source evidence. The uninspected grad-div PDF was removed to avoid suggesting it supported any conclusion.

The needed original-scope estimate is still the actual full-test derivative interface

    (sum_n τ_n [sup_{v_h != 0}|(D_tau e_n,v_h)|/||v_h||V]^(4/3))^(3/4)
        <= C(h+τ_max),

or a complete direct pressure proof with the same hypotheses. The new H2 Fortin supplier proves that the mass-projection L2 defects, including differentiated exact velocities, are O(h2) on the original meshes. No inspected source upgrades these special defects to the required full-test derivative bound without an additional, currently unproved mesh-uniform argument.
