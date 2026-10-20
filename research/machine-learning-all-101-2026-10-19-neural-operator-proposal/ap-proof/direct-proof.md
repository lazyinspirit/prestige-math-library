# Direct proof proposal: AP for all listed Lipschitz-domain spaces

This is a proof-only research proposal, not an edited item or an acceptance record. It preserves all approved exponents, integer orders and dimensions. No basis, extension theorem, measure-space isomorphism, Schauder basis, or reflexivity premise is used. The construction in fact has uniformly bounded approximants; only AP needs to be stated, especially for C^m.

## Exact claim and conventions

Let D be a bounded Lipschitz open set in R^d, d>=1. For every integer m>=0 and 1<=p<infinity, W^{m,p}(D) has AP; W^{0,p}=L^p. For every integer m>=0, C^m(Dbar) has AP. Here C^m(Dbar) means C^m in D with every derivative through order m extending continuously to Dbar, with norm max_{|alpha|<=m} sup_Dbar |D^alpha u|. Using the sum norm instead changes only fixed constants. This proof also applies if C^m(Dbar) is instead defined through restrictions of neighborhood-smooth functions: the constructed approximants are neighborhood-smooth and converge in the same derivative norm. Real scalars are sufficient for the target; complex scalars work componentwise.

For exact library interfaces, assume Countable Choice: the local Sobolev definition, interior mollification and finite-p translation theorem explicitly require it. The new geometric selection and finite-rank constructions use only finite choices. There is no basis/uniform-boundedness-principle argument and no need for Dependent Choice or full AC beyond CC. The parent must explicitly carry the library's CC convention into the target contract rather than silently using a stronger published localization supplier that assumes AC.

If D is empty, each space is zero and the zero operator proves AP. Below D is nonempty.

## 1. Finite geometric construction (new helper, with complete proof)

There are finitely many ambient smooth functions psi_j with compact support, indexed 0<=j<=J, with sum_j psi_j=1 on an open neighborhood of Dbar, and vectors v_j in R^d and t_0>0 such that

    closed B(x+t v_j,t) is compactly contained in D

whenever x in Dbar intersect supp psi_j and 0<t<t_0. Functions with empty support may be omitted.

Proof. For a boundary point choose a rigid graph chart Q in which D is x_d>phi(x'), with phi Lipschitz of constant L, and choose an ambient neighborhood U of the point with Ubar compactly contained in Q. In chart coordinates put v=(L+2)e_d. For x in Dbar intersect Ubar and |z|<=1, set y=x+t v-tz. As long as y stays in Q,

    y_d-phi(y') >= x_d-phi(x')+t(L+2)-t|z_d|-Lt|z'| >= t>0.

Indeed |z_d|<=1 and |z'|<=1. Since Ubar has positive distance from Q's complement, all such y stay in Q for t small enough, uniformly in x and z. This proves the entire closed ball is in D; it is compact, so it is compactly contained. In the original coordinates v is the rigid rotation of this vector; translations of x are unaffected by the chart's origin.

Compactness of the boundary gives finitely many such U_j covering the boundary. The set Dbar minus their union is compact and lies in D. Cover that remainder by one bounded open U_0 with U_0bar compactly contained in D (or use finitely many interior balls). On this interior set choose v_0=0; positive distance to D^c gives the same ball property for small t. Thus the U_j form a finite open cover of Dbar. Apply the locally proved finite ambient partition lemma to obtain nonnegative psi_j in C_c^infinity(U_j) summing to one near Dbar. Take the minimum of the finitely many positive chart/interior t bounds. The resulting geometric construction is proved, not delegated to an unproved extension theorem.

An interior U_0 exists explicitly by finite balls covering the compact remainder, with closures in D; their union has compact closure in D. No boundary-connectedness or connectedness of D is used.

## 2. Inward mollification (new helper, complete proof)

Fix a nonnegative rho in C_c^infinity(B_1(0)) of integral one and rho_t(w)=t^{-d}rho(w/t). For an L^1(D) function let E_0u be its zero extension and define on all R^d

    H_{j,t}u(x) = (rho_t * E_0u)(x+t v_j),
    S_tu(x) = sum_j psi_j(x) H_{j,t}u(x).

For each fixed t this is an ambient C_c^infinity function, because the convolution is smooth and the psi_j have fixed compact support. Each map is linear and independent of the representative. Every target space embeds continuously into L^1(D): Holder gives ||u||_1 <= |D|^{1-1/p}||u||_p for finite p, including p=1 with factor 1, while ||u||_1 <= |D|||u||_infinity in the C^m case. Thus all displayed integrals are legitimate.

For u in W^{m,p}(D), for |gamma|<=m and x in Dbar intersect supp psi_j, interior mollification and the ball property give

    D^gamma H_{j,t}u(x)
      = integral rho(z) (E_0 D^gamma u)(x+t v_j-tz) dz.                 (1)

The local derivative identity is justified by testing the weak derivative against y -> rho_t(x+t v_j-y), whose support is compact in D. The two signs cancel. Equivalently use the proved local interior-mollification item; the translated center has distance >t from D^c. This identity is valid on an open neighborhood of each such x, because the closed convolution-support ball has a strict interior margin. The right side of (1) also gives the continuous representative at boundary x. We do NOT assert that weak derivatives of E_0u are E_0D^gamma u globally: that assertion would be false.

Write f_gamma=E_0D^gamma u in L^p(R^d), and write

    T_{j,t}f(x)=integral rho(z) f(x+t(v_j-z)) dz.

Translation invariance and Minkowski (p=1 follows directly from Tonelli) give ||T_{j,t}f||_{L^p(R^d)}<=||f||_p. Let

    omega_f(r)=sup_{|h|<=r} ||f(.+h)-f||_p.

The proved finite-p translation theorem gives omega_f(r)->0 as r->0, and Minkowski gives

    ||T_{j,t}f-f||_p <= omega_f((|v_j|+1)t).                       (2)

For every |alpha|<=m, the ordinary finite Leibniz rule and sum psi_j=1 near Dbar yield the a.e. identity on D

    D^alpha(S_tu-u)
      = sum_j sum_{beta<=alpha} binom(alpha,beta)
          (D^beta psi_j) [T_{j,t}f_{alpha-beta}-D^{alpha-beta}u].  (3)

Here D^beta psi_j can be nonzero only on supp psi_j, where (1) is valid. Formula (3) therefore makes no claim about differentiating the zero extension at the boundary. All derivatives of the fixed psi_j are bounded. Equations (2)--(3), finite sums and the Sobolev norm show

    S_tu -> u in W^{m,p}(D),    sup_{0<t<t_0} ||S_t|| <= M_{m,p}<infinity. (4)

For the uniform bound use the same Leibniz formula for S_tu, the contraction bound for T_{j,t}, and ||D^gamma u||_p<=||u||_{W^{m,p}}. No estimate changes at p=1, and m=0 is exactly L^p.

For u in C^m(Dbar), the same derivative identity follows either by local integration by parts or by viewing u as a W^{m,p} function on bounded D. A classical C^m function has its classical weak derivatives; their boundedness ensures finite-p integrability. At all the sampled points y=x+t(v_j-z), geometry gives y in D and |y-x|<=(|v_j|+1)t. Uniform continuity of each D^gamma u on the compact Dbar gives

    sup_{x in Dbar intersect supp psi_j}
      |D^gamma H_{j,t}u(x)-D^gamma u(x)| ->0.

Apply (3), now in the sup norm, to obtain

    S_tu ->u in C^m(Dbar),    sup_{0<t<t_0} ||S_t|| <= M_m<infinity. (5)

The uniform bound uses the positivity and mass one of rho and the same fixed cutoff derivatives. This proves only the approximation estimate needed for AP; no basis is claimed for C^m.

## 3. Finite-rank approximation of each S_t (new elementary helper)

For fixed t write

    k_t(x,y)=sum_j psi_j(x) rho_t(x+t v_j-y),
    S_tu(x)=integral_D k_t(x,y)u(y)dy.

This is a globally smooth kernel in (x,y). Fix a closed box Q containing Dbar. For |alpha|<=m, D_x^alpha k_t is uniformly continuous on Dbar x Q. Given eta>0, partition Q into finitely many half-open cells of sufficiently small diameter, with a consistent assignment of the outer faces, and choose a point y_l in each cell Q_l (it need not be in D). Then

    max_{|alpha|<=m} sup_{x in Dbar, y in Q_l}
      |D_x^alpha k_t(x,y)-D_x^alpha k_t(x,y_l)| < eta.

Define the bounded linear finite-rank operator

    F_{t,eta}u(x)=sum_l k_t(x,y_l) integral_{D intersect Q_l} u(y)dy.

All output functions are restrictions of ambient smooth compactly supported functions. The coefficient functionals are bounded: for W^{m,p}, their absolute value is <=|D intersect Q_l|^{1-1/p}||u||_p, with the p=1 bound ||u||_1; for C^m it is <=|D intersect Q_l|||u||_infinity. Empty cells contribute zero and need no representative from D.

Differentiating the finite sum and comparing kernels gives

    max_{|alpha|<=m} sup_Dbar
      |D^alpha(F_{t,eta}-S_t)u| <= eta ||u||_{L^1(D)}.              (6)

For W^{m,p}, if A_m is the number of multi-indices of order <=m, this implies

    ||F_{t,eta}-S_t||_{W^{m,p}->W^{m,p}}
      <= A_m^{1/p}|D| eta.                                      (7)

Indeed first bound every derivative L^p norm by |D|^{1/p}eta||u||_1, then use Holder. For C^m with the maximum norm it gives

    ||F_{t,eta}-S_t||_{C^m->C^m} <= |D| eta.                     (8)

Thus every fixed S_t is an operator-norm limit of bounded finite-rank maps on each target space. This step is not an invocation of AP for an unknown supplier; its finite-rank formula and estimate are explicit.

## 4. Compact-uniform conclusion (complete proof)

Fix one target X, a compact set K subset X and epsilon>0. Empty K is trivial. From (4) or (5), take a uniform bound M for ||S_t||. Choose delta<epsilon/[4(M+1)] and a finite delta-net {u_1,...,u_N} of K. Pointwise convergence permits a single t>0 small enough that max_i||S_tu_i-u_i||<epsilon/4. For u in K select one net point within delta. Then

    ||S_tu-u|| <= (M+1)delta+max_i||S_tu_i-u_i|| < epsilon/2.

Compactness also gives R=sup_{u in K}||u||<infinity. Choose eta so that the operator-norm error in (7) or (8) is <epsilon/[2(R+1)]. For the explicit bounded finite-rank F=F_{t,eta},

    sup_{u in K}||Fu-u||
      <= ||F-S_t||R+sup_{u in K}||S_tu-u|| < epsilon.

This proves AP exactly as defined locally. No sequence or infinite selection is needed. The same proof works independently for each output dimension and order, so the output-space clause follows without an additional supplier.

## Supplier plan and read limits

Recommended single new substantial helper: `lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains`, comprising Sections 1--3 above, followed by a concise proof of the existing target using Section 4. Alternatively integrate all four sections into the target if the parent considers its length manageable. No statement narrowing is necessary.

Actually read in full for mathematical interfaces:

- `def-approximation-property-and-bounded-approximation-property`.
- `def-sobolev-space-wkp-and-its-norm` (explicitly assumes Countable Choice).
- `lem-finite-ambient-partitions-for-euclidean-boundary-integration` (finite normalized-bump proof; no full AC requirement).
- `lem-mollification-commutes-with-weak-derivatives-in-the-interior` (local derivative identity, with CC).
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign` (smoothness, with CC).
- `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` (finite-p norm continuity, with CC).
- `lem-complex-translation-and-approximate-identity-interfaces` (contains all needed translation/Young/Minkowski consequences, with CC).
- `thm-minkowski-integral-inequality` (explicit p=1 Tonelli proof).
- `def-ck-and-multi-index-notation-in-several-variables`.
- `lem-na-lipschitz-domain-finite-star-shaped-cover` (graph-chart convention only; not needed as a supplier).
- `lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces` and `lem-locally-finite-smooth-partition-of-unity-on-domain` were read, but should not be used: their AC hypotheses are needlessly strong here.

Also needed as ordinary local suppliers if not expanded inline: `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `lem-classical-derivatives-are-weak-derivatives`, `thm-holder-inequality-for-integrals`, `def-countable-choice`, and the appropriate Banach-space well-definedness result if required by the AP definition. Their full bodies were not independently read in this delegation. The current proof expands the only nontrivial new geometry, kernel finite-rank approximation and compact-uniform step. Do not represent this proposal as auditing the entire transitive prerequisite closure.

Instruction reads: CLAUDE.md and README.md fully; SCHEMA.md fully across two reads; WORKFLOW.md read relevant construction/escalation and proof-authoring portions (the large batched tool output was truncated, so no claim of full WORKFLOW read). Config verified `/home/lazyinspirit/.codex/config.toml` line 14 `model_auto_compact_token_limit=500000` and line 15 `model_auto_compact_token_limit_scope="total"`. No gates or live items edited.

## Source evidence actually checked

Downloaded JMLR full PDF `https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf` (97 pages) and extracted its text with PyMuPDF; original full PDF and extraction are in this directory. Read the complete Lemma 26 proof, JMLR PDF/printed pp. 78--80, and preceding Lemmas 23--25 on pp. 77--78. This corrects the target's locator: Lemma 26 is in Appendix B and continues onto p.80, not Appendix A pp.77--79. The checked source indeed uses Lp isomorphisms, Stein extension, basis constructions, Fefferman extension for C^m, and a separate W^{m,1} argument. The direct construction here replaces those unproved-premise routes without importing their conclusions. No underlying Stein/Fefferman/Pełczyński/Ciesielski full text was read or needed for this proof.

## Follow-up item conversion

After the parent's independent mathematical review of the geometric/mollification/finite-rank construction, complete item proposals were authored in `items/` under this proposal directory, not the repository's active `items/`. The helper's actual Statement includes smooth finite-rank range and smooth-restriction density. `proposed-proof-contracts.json` records each actual numbered derivation and exact local source excerpts; it is a proposal, not a workflow receipt. No precheck, render, proof-layout or gates were attempted, per the assigned write-only proposal scope.

The AP theorem additionally supplies direct Banach completeness arguments because the existing published Sobolev completeness theorem states AC even though its proof says it only invokes CC. The replacement argument uses the existing CC Riesz–Fischer interface directly and passes the weak test identity through the Lp limit using Hölder. The C^m argument identifies uniform derivative limits by coordinate-segment fundamental calculus. The full `lem-weak-leibniz-rule-with-a-smooth-factor` and `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` bodies were read for this follow-up, and the relevant Statements of Riesz–Fischer, Hölder, Sobolev norm definiteness, Heine–Cantor, bounded-set Lebesgue measure and the mollifier definition were read. This does not claim a new transitive supplier audit or a full read of those latter source bodies.
