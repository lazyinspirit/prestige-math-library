# IP47 finite-sample question: precise status review and established baseline

This is source-review evidence and an independent elementary derivation, not a global novelty certificate or native acceptance. The registered question in `op-ip-finite-sample-generalization-of-neural-inverse-maps` is to be retained in full: fixed compact EIT joint data Z, bounded generalized-FNO classes F_{s,B}, worst Borel joint law, Borel learners, excess squared risk, and growing complexity together with the deterministic logarithmic noise modulus.

## Literature actually located and read

1. de Hoop–Kovachki–Lassas–Nelsen, arXiv:2511.20361, full authentic 80-page PDF archived. Theorem4.8 and its complete PDF31–34 proof give compact-set continuum approximation and a deterministic noise bound; §4.5/PDF35 explicitly distinguishes worst-case existence and empirical average-case behavior. It does not supply the registered minimax excess-risk theorem.
2. Kovachki–Lanthaler–Mhaskar, `Data Complexity Estimates for Operator Learning`, arXiv:2405.15992, full authentic 43-page PDF archived. Actually read §3 Theorem3.3, Remark3.4, Prop3.8–3.9, Cor3.10 and the full Theorem3.3 proof (PDF13–16); full AppendixE.0.1–E.0.2 proofs and E.1–E.4.2 supporting proofs (PDF32–43). This is EXISTING continuum-FNO sample-complexity/entropy/ERM theory. Its approximation-space target family, prescribed input law and noiseless functional labels differ from the registered all-joint-laws noisy EIT excess-risk problem. It explicitly assumes quantitative algebraic model-size approximation. Do not import its displayed constants or exponents as independently validated here: the current retrieved preprint has visible discrepancies between CorE.4's statement and its proof, and between covering-number and log-covering-number notation. The elementary bound below does not depend on those discrepancies.
3. Grohs–Lanthaler–Trautner, `Theory-to-Practice Gap for Neural Networks and Neural Operators`, arXiv:2503.18219, full authentic 43-page current PDF archived. Actually read relevant approximation-space setup, Proposition3.6 statement, averaging/Fourier architecture comparison, full Theorem3.20 statement/proof, Theorem3.22 and proof (PDF15–17,23–28), and full Lemma3.21 proof in AppendixB.6 (PDF40–41). Its sampling-rate lower bounds concern ReLU approximation classes, admissible rich input measures and point-value learning. These assumptions are not the fixed smooth-activation bounded EIT class, and its rate is not the registered minimax excess-risk rate. The full encoder-construction and finite-dimensional lower-bound dependency closure was not independently audited; this is a precise status comparison, not use as a logical supplier.
4. Current primary-source search also identified 2026 JMLR `Statistical Learning Theory for Neural Operators` (25-0543), `Optimal Convergence Rates for Neural Operators` (25-0507), and arXiv:2610.07295 on minimax learning of holomorphic operators. Their search results establish that a claim of global absence of neural-operator statistical or minimax theory would be false. Their authentic full PDFs have now been retrieved (82,78,36 pages respectively), and the first three pages of each, including abstracts, statistical models and the holomorphic informal minimax statement, were read. Their full proofs have not been read, and no theorem from them is used as a logical supplier here.
5. The EIT-specific primary article `A DeepONet for Inverting the Neumann-to-Dirichlet Operator in Electrical Impedance Tomography`, DOI10.1007/s10915-026-03300-0, has a public publisher page explicitly identifying minimal training-data requirements as future work (Remark2). This is evidence about that article, not a global-open-status proof. Its full primary proof was not needed to derive the bound below and has not been represented as fully read.

## Established finite-cover baseline, with complete proof

Let X be compact metric, Y a real Hilbert space, Z⊂X×Y compact and nonempty, and F⊂C(X,Y) nonempty with uniform output bound C and target bound D=sup_{(x,y)∈Z}||y||. Put A=(C+D)^2. Suppose a finite ε-net {f_1,...,f_m}⊂F exists in the uniform norm. The learner chooses the smallest index minimizing the empirical square loss over this finite list. It is Borel: each list member's empirical loss is continuous on Z^N and the event that one index is the first minimizer is a finite intersection of weak and strict comparisons of continuous functions.

For any f,g∈F and z=(x,y),

    | ||f(x)−y||² − ||g(x)−y||² | ≤ 2(C+D)||f−g||∞.

Thus the infimum risk over the net exceeds inf_F risk by at most 2(C+D)ε. For any law P, put Δ=max_j |R_P(f_j)−Rhat_N(f_j)|. The empirical minimizing property gives

    R_P(fhat_N)−inf_F R_P ≤2Δ+2(C+D)ε.

Every loss is in [0,A]. For completeness, the exponential moment bound used next is elementary. If V∈[0,A], set F(t)=log E exp(t(V−EV)). Differentiating the bounded integrand gives F(0)=F′(0)=0 and F″(t)=Var_{P_t}(V)≤A²/4: E[(V−A/2)²]≤A²/4 and variance is the least mean square distance to a constant. Integrating twice gives F(t)≤t²A²/8 for either sign of t. Independence therefore gives

    E exp(t(R_P(f_j)−Rhat_N(f_j))) ≤ exp(t²A²/(8N)),

also with the sign reversed. Sum these 2m exponential bounds and use Jensen on exp(tΔ) to get

    EΔ ≤ log(2m)/t + t A²/(8N).

Minimizing at t=sqrt(8N log(2m))/A yields EΔ≤A sqrt(log(2m)/(2N)). If A=0, all losses vanish and the conclusion is immediate. Consequently the minimax expression in the registered question satisfies, whenever this net exists,

    0 ≤ R_N(F) ≤ min{ A, 2A sqrt(log(2m)/(2N)) + 2(C+D)ε }.

The bound is uniform over EVERY Borel joint law on Z, including noisy nondeterministic labels. It uses a concrete Borel learner and never assumes a measurable selection of an exact infinite-class ERM. If F is totally bounded, take the infimum over finite uniform ε-nets. This proves a known upper bound directly, so that upper-bound existence must not be advertised as an unproved neural-operator result.

For a fixed finite-parameter architecture with all geometric maps held fixed, compact parameter cube [−B,B]^p and globally Lipschitz activation, the realization map θ↦f_θ is uniformly Lipschitz on X. To verify rather than assume it: each matrix and finite Fourier multiplier has operator norm bounded by a finite coefficient sum; biases have a finite Fourier-mode L² bound; hidden-state norms satisfy a finite affine recursion from the compact input bound. Subtract two layers, bound their input difference by the preceding layer's difference and their parameter difference by the uniform preceding-state norm, then iterate through the finitely many layers. The fixed chart lifting, averaging and restriction maps only multiply constants. The pointwise input/output networks satisfy the same recursion using their affine matrices and globally Lipschitz activation. The finite family of allowed integer architectures gives a finite union of compact images. Hence it is totally bounded, with a grid cover m≤J(1+2B L/ε)^p after enlarging J,p,L for that finite family. This argument applies when the words 'fix the architecture' keep its nonlearned geometric maps fixed; if E or a kernel is allowed to vary arbitrarily outside the finite scalar parametrization, the implication needs that actual extra hypothesis and is not asserted.

## Approximation and deterministic noise remain separate

For the EIT joint support, a continuum approximant with uniform reconstruction error ≤a+C_star ω_star(δ) gives inf_F R_P≤(a+C_star ω_star(δ))² whenever that approximant lies in F. Combining this with the established estimation bound gives a risk upper bound and retains the deterministic noise term after taking square roots. The existence theorem alone gives no quantitative relation between a and the allowed size/weight budget (s,B), so it does NOT specify a sharp rate or an efficient growth regime.

A qualitative slow-growth existence statement also follows, provided the finite-parametrization convention above is fixed. For each k, choose one continuum approximant with a_k≤1/k and enlarge nested budgets (s_k,B_k) to contain it and every earlier approximant. Its whole bounded parameter class has some finite output bound C_k and finite uniform nets. Choose a net radius ε_k with 2(C_k+D)ε_k≤1/(2k), then choose N_k increasing so that the estimation term for that finite net is at most 1/(2k) for all N≥N_k. Use budgets (s_k,B_k) when N_k≤N<N_{k+1}. The finite-net Borel learner then has worst-law risk at most (1/k+C_star ω_star(δ))²+1/k. This is a diagonal existence construction, not an efficient explicit rate or a matching minimax characterization. The torus construction uses only finitely many trigonometric bias functions, so those approximants fit the finite-bias-mode union of model classes.

Thus the still-requested quantitative work is a matching worst-law minimax characterization for the SPECIFIED EIT data geometry and bounded architecture, together with quantitative EIT approximation-versus-(s,B) control. Neither the absence of this theorem from the original EIT paper nor the difference between these existing theories certifies its global novelty. The op source should expressly acknowledge the established upper-bound framework and the precise missing matching/approximation analysis. Root owns final status/classification and canonical records.
