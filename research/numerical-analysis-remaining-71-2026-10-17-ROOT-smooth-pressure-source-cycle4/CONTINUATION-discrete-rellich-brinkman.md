# Fresh discrete pressure-observation / Brinkman source lane

Research only. Target: an actual MINI geometric pressure-observation estimate, such as ||C_pre z_h||2 <= C||A_h z_h||2^(1/2)||z_h||V^(1/2), or quantitative Darcy-to-Brinkman lift approximation on every original matching shape-regular graded mesh. No such completed estimate was obtained here. No original smooth counterexample is claimed. The new useful source is an actual MINI parameter-robust Brinkman proof with local mesh weights, described precisely below.

## 1. Actual MINI parameter-robust full text, with local weights

Mika Juntunen and Rolf Stenberg, *Analysis of finite element methods for the Brinkman problem*, Helsinki University of Technology Institute of Mathematics Research Reports A557 (2009), published Calcolo 47 (2010), 129–147, DOI 10.1007/s10092-009-0017-6.

Actual complete author/institutional PDF: https://math.aalto.fi/reports/a557.pdf . Saved `brinkman-analysis2009.pdf` and `.txt`, 24 PDF pages including report front matter.

Actually read the complete continuous parameter/norm setup §2, full actual-MINI definition and stability/a-priori proofs §§3.1–3.2, and local residual/cutoff argument §§3.3–3.4. Also inspected the boundary-space discussion §5. The stabilized equal-order method §4 and every numerical detail are not claimed independently certified.

The generalized MINI family at k=1 is the original continuous P1 plus one full simplex bubble per velocity component, with continuous P1 mean-zero pressure. The model is

    u−t² div epsilon(u)+grad p=f,   div u=g.

For each t>0 its velocity space has the original zero trace. Its natural norm is ||v||t²=||v||2²+t²||epsilon(v)||2². Pressure is measured in the actual continuous dual norm

    |||q|||t=sup_{v in H10} (v,grad q)/||v||t.

The local computable pressure seminorm is

    |||q_h|||t,h²=sum_K [h_K²/(t²+h_K²)]||grad q_h||L2(K)².

The proof has a genuine original-grading-compatible mechanism:

- Lemma 1 tests with actual element bubbles [h_K²/(t²+h_K²)] b_K grad q_h. Reference-simplex scaling proves the weighted inf-sup without h_min or a global h inverse.
- Lemma 2 combines continuous pressure duality, one common L2/H1-stable local interpolation, and the exact local weighted interpolation-error sum. A Pitkäranta–Verfürth combination with Lemma 1 yields parameter-uniform inf-sup in the continuous pressure norm.
- Theorems 3–5 give parameter-uniform mixed stability and quasioptimal approximation, using these norms.

No quasiuniform ratio is invoked in those local stability calculations. Their constants use the ordinary local shape-regular scaling and finite patch overlap. The recently proved common L2/H1 local retraction is an appropriate fully explicit local input for this part.

There is a minor displayed proof issue worth retaining rather than copying blindly: the last inequality in their equation (35) appears to replace ||w||t by ||w_tilde||t in the reverse direction without a bound. The preceding inequality with ||w||t is all that is needed. Keep it, use ||w_tilde||t<=C||w||t, and divide only when the lower-bound numerator is positive; if it is nonpositive the supremum>=0 already gives the desired intermediate lower bound. This repairs the routine Verfürth argument without changing its theorem or assumptions.

### Exact limitation for the current question

Uniform norm equivalence/stability is not a rate for the difference of the actual mass-minimal and Brinkman divergence lifts. Comparing uniformly equivalent Schur operators gives a constant floor, not the desired vanishing modulus in the parameter.

Moreover, this source's **t=0 space differs from the original fixed MINI mass space**: its continuous space becomes L2, and the FE definition correspondingly releases boundary nodes. Section 5 explicitly discusses using Nitsche to relax the boundary conditions in the Darcy limit. Our actual W_h mass lift retains the original zero-boundary MINI degrees of freedom. Their t=0 Darcy lift must not be identified with W_h. Only the t>0 parameter-uniform estimates above are directly about the original zero-trace space.

Their local cutoff and weighted face-trace estimates in the a-posteriori section establish polynomial residual efficiency. They do not show

    ||v_epsilon−W_h q_h||2 <= C epsilon^(1/2)||q_h||2,
    ||v_epsilon||V <= C epsilon^(−1/2)||q_h||2,

for all epsilon independently of the actual mesh. Neither the pressure-observation estimate nor its Lp-softened initial-layer consequence follows from the proved parameter-uniform inf-sup alone.

## 2. Actual continuous Lipschitz pressure estimates: no discrete transfer

Jun Geng and Zhongwei Shen, *Resolvent Estimates in Linfinity for the Stokes Operator in Nonsmooth Domains*, arXiv:2408.03844v2, 41 pp.

Full source https://arxiv.org/pdf/2408.03844v2 . Saved `linfty-resolvent2024.pdf` and `.txt`.

Actually inspected the introduction's theorem/geometry scope; the Neumann-pressure setup §4 and Theorems 4.1/4.5; pressure Theorems 6.1–6.2 with their proof; and the concluding two-dimensional Lipschitz scope. The entire continuous L-infinity resolvent argument and appendices were not independently reconstructed.

Theorems 6.1–6.2 give actual pressure-oscillation bounds by maximal averaged gradient quantities at scales related to the distance to the boundary. Their proofs use the actual harmonic-pressure Neumann problem, smooth-domain exhaustion, and tangential normal-vector identities. This is a promising continuous geometric model for why a pressure observation bound differs from generic mixed inf-sup.

The final L-infinity resolvent theorem assumes C1 geometry in d>=3 and permits Lipschitz geometry only in d=2. Its pressure subtheorems permit Lipschitz geometry but assume a genuine continuous resolvent solution with smooth compact solenoidal force and appropriate C1/continuous regularity. There is no finite-element theorem, no actual MINI multiplier, and no local weighted residual argument proving the same boundary identities for discrete functions. Interior facet jumps, weak divergence and the discrete pressure lift would have to be handled explicitly. No discrete transfer is asserted here.

## 3. Brinkman comparison sources do not add the missing observation estimate

Juho Könnö and Rolf Stenberg, *Numerical computations with H(div)-finite elements for the Brinkman problem*, arXiv:1103.5338, 27 pp. Full source https://arxiv.org/pdf/1103.5338, saved `brinkman-hdiv2011.pdf` and `.txt`.

Actually inspected introduction/method definitions, parameter-dependent norms, and the actual MINI comparison §5.2. The principal scheme is H(div)-conforming with tangential Nitsche treatment, not the original MINI scheme. The source explicitly refers to Juntunen–Stenberg for MINI analysis. Its adaptive numerical performance does not prove a uniform original-MINI pressure observation estimate.

Antti Hannukainen, Mika Juntunen and Rolf Stenberg, *Computations with finite element methods for the Brinkman problem*, institutional report A569, full source https://math.aalto.fi/reports/a569.pdf, saved `brinkman-computations2011.pdf` and `.txt`. Inspected model/norm setup, MINI-family analysis summary and boundary-layer discussion. This reinforces the distinction between fixed strong no-slip boundary conditions and Nitsche relaxation. It does not supply the missing quantitative fixed-space lift approximation.

Two nominal Hindawi Brinkman downloads were one-page challenge documents. They were removed and are not treated as mathematical evidence.

## 4. A separate pressure-gradient estimate is not the requested pressure observation

Retrieved Elaine Cozzi and Robert L. Pego, *On Optimal Estimates for the Laplace–Leray Commutator in Planar Domains with Corners*, arXiv:0912.3958v2, 15 pp (`laplace-leray-corners2009.pdf`/`.txt`). Inspected introduction and exact theorem statements only. It shows that a particular strict domination estimate for the **pressure gradient**, with leading constant beta<1 multiplying ||Delta u||2², fails at straight corners. That claim differs from the requested pressure **L2** observation bound and from actual MINI geometry. It does not refute the current target. Its precise role here is to prevent substituting a smooth-boundary pressure-gradient commutator estimate as though all polyhedral boundary estimates were interchangeable.

The companion Liu–Liu–Pego full text `pressure-viscosity2005.pdf`/`.txt` was retrieved to locate these boundary identities; only its introduction, C3 geometry requirements and pressure definition were inspected. No complete proof from its 44 pages is asserted read or used.

## Disposition

The actual MINI Brinkman source supplies a useful local-weighted, parameter-uniform stability proof under the original mesh geometry for positive parameter. It does not supply the single missing quantitative discrete Rellich/observation estimate. The original smooth instantaneous pressure clause remains unresolved. No source or toy argument here proves it false. All new writes remain in this research directory, with no canonical, metadata or workflow changes.
