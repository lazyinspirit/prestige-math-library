# Completed analytic reductions and the precise missing existence theorem

Research only, same escalation cycle1. These are complete proofs of the implications below. They are **not** a proof of barrier existence or an unconditional local proof of occupation absolute continuity. No active supplier, consumer edit, acceptance or certification is proposed by this packet.

## 1. The missing deterministic core

For dimension d≥1 and finite T, the sufficient core is the following assertion. For every nonnegative f∈Cc∞(R×R^d), there is a globally spatially defined nonnegative v with bounded weak derivatives v_t,Dv,D²v, on a time neighborhood of [0,T], such that

S=v−v_t≥0, H=vI−D²v≥0,

S det H ≥ (f/(d+1))^(d+1) almost everywhere,

and sup v ≤ C_T ||f||_{L^(d+1)(R^(d+1))} there. The neighborhood may be fixed as [−1,T+1]; its height constant is allowed to depend on T,d. Spatial domain is all R^d. One can instead supply the equivalent simultaneous Bellman inequalities in section2 and the same height/derivative properties.

Existence, bounded weak derivatives and the L^(d+1) height bound are the **unproved authoring obligation** in this packet. They are not consequences of a.e. second-order differentiability of an already given semiconvex function. That local Alexandrov item does not construct v or its curvature/Monge–Ampère measure and supplies no height bound. No assertion that the weak determinant inequality follows merely from a distributional inequality is made.

The actual primary source arXiv:2005.08831v4, Lemma4.1, PDFpp6–8, invokes Krylov2018 Theorem2.2.4 precisely for v. The arXiv proof contains no proof of that existence theorem. No full AMS233 theorem proof has been obtained or read by this author. A preview entry or the citation itself is not credited as proof. This remains an established-result local-authoring obligation, not an open mathematical problem.

## 2. Exact Bellman/determinant equivalence (proved)

Fix real S, a real symmetric d×d H and f≥0. The following are equivalent:

(a) S≥0, H≥0 and S det H≥(f/(d+1))^(d+1).

(b) For every symmetric α≥0,

S+tr(αH) ≥ (det α)^(1/(d+1)) f.

If (a) holds, first take α positive definite. The d eigenvalues of α^(1/2)Hα^(1/2), together with S, are nonnegative. Arithmetic–geometric mean gives

S+tr(αH) ≥ (d+1)(S det α det H)^(1/(d+1)) ≥ (det α)^(1/(d+1))f.

The same inequality for singular α follows by continuity, replacing α by α+εI and sending ε to zero. Conversely, (b) at α=0 gives S≥0. Taking α=t ee^T for each unit e and t→∞ gives e^THe≥0 when d>1, since its determinant is zero. When d=1 the right side grows only as t^(1/2), so a negative e^THe would likewise contradict (b) for large t. Thus H≥0 in every dimension. For ε>0 let Sε=S+ε and Hε=H+εI, and insert α=Sε Hε^(−1). Since S+tr(αH)≤Sε+tr(αHε)=(d+1)Sε, (b) yields

f≤(d+1)(Sε det Hε)^(1/(d+1)).

Send ε↓0. This also handles S=0 or singular H without division by zero. With S=v−v_t and H=vI−D²v, (b) is exactly

v_t+α:D²v−(1+tr α)v+(det α)^(1/(d+1))f≤0.

No ellipticity of α is needed for this equivalence.

## 3. Global nonnegativity plus H≥0 gives the gradient bound (proved)

For a smooth u≥0 on R^d with D²u≤uI, restrict to y(r)=u(x+re), |e|=1. Variation of constants gives, for r≥0,

y(r)=y(0)cosh r+y′(0)sinh r+∫_0^r sinh(r−s)(y″(s)−y(s))ds

≤y(0)cosh r+y′(0)sinh r.

Since y(r)≥0, y′(0)≥−y(0)coth r for every r>0, and hence y′(0)≥−y(0). Apply this to −e to obtain |e·Du(x)|≤u(x), for every e; therefore |Du|≤u. The entire spatial line is used; a bounded spatial cylinder would not justify this conclusion without boundary control.

For bounded weak derivatives, convolve only in x with a nonnegative smooth unit-mass kernel. Distributional D²u≤uI and u≥0 are preserved, so the smooth inequality applies. Passing to Lebesgue points, or weak-* limits of the bounded derivatives, gives |Du|≤u a.e. For a time-dependent v this applies for almost every time by Fubini. Thus the missing core's height estimate also bounds |Dv| by C_T||f||.

## 4. Smoothing removes every exceptional-set issue (proved)

Use a nonnegative unit-mass ζ∈Cc∞(R^(d+1)) and ζε(t,x)=ε^(−d−1)ζ(t/ε,x/ε). Take ε small enough that convolution over [0,T] stays in the supplied time neighborhood. This is the approximate-identity normalization; the printed arXiv text's ζ(εt,εx) with the same prefactor is not an approximate identity.

Write vε=v*ζε and fε=f*ζε. For each constant α≥0 the Bellman inequality is linear in v,f, hence convolution gives

(vε)_t+α:D²vε−(1+tr α)vε+(det α)^(1/(d+1))fε≤0

everywhere on [0,T]×R^d. It is enough initially to use a countable dense set of PSD α, take the common full-measure set, and then use continuity in α. After convolution all derivatives are continuous and the inequality holds at every point; it may therefore be evaluated at an arbitrary random α_t without evaluating the original Sobolev derivatives on a singular occupation measure. Also vε≥0 and sup(vε),sup|Dvε|≤C_T||f||. Finally fε→f uniformly because f is smooth compactly supported.

## 5. Stopped occupation absolute continuity, conditional ONLY on section1 (proved implication)

Let Z_t=Z_0+M_t+B_t be a continuous R^d-valued semimartingale on [0,T]. M_0=B_0=0; B is an arbitrary continuous adapted finite-variation process, not necessarily absolutely continuous. Suppose d⟨M⟩_t=2a_t dt with progressively measurable symmetric a_t, and let γ≤T be a stopping time such that

A=E∫_0^γ tr a_t dt<∞,  B*=E Var(B)_[0,γ]<∞,

and a_t≥κI for dt×P-almost every t<γ, for a deterministic κ>0. There is no moment assumption on Z_0. If the lead owner's bracket convention is d⟨M⟩=a^lead dt, use a=a^lead/2 and κ=κ^lead/2.

Set Q_t=exp(−t−∫_0^t tr a_s ds), up to γ. This is positive a.s. on the stopped interval; finiteness of A guarantees pathwise finite stopped trace. Apply the continuous-semimartingale Itô/product rule to Q_t vε(t,Z_t), stopped at γ. Section4 gives

d(Qvε) ≤ Q Dvε·dM + Q Dvε·dB − Q(det a)^(1/(d+1))fε(t,Z_t)dt.

The stochastic integral is a true square-integrable martingale on the stopped interval: its expected bracket is at most 2 C_T²||f||² A, since Q≤1. The finite-variation integral has integrable absolute value at most C_T||f|| B*. The initial and terminal Qvε are bounded nonnegative random variables, regardless of Z_0. Taking expectations and discarding the nonnegative terminal value yields

E∫_0^γ Q_t(det a_t)^(1/(d+1)) fε(t,Z_t)dt ≤ C_T(1+B*)||f||_{d+1}.

The same estimate holds with f by Fatou (or dominated convergence using finiteness of the weighted measure below). Notice that this version needs no deterministic bound on the trace and no Lp or square-integrability bound on the drift. Trace appears in the strictly positive discount; it was used only for stochastic-integral integrability.

Define the finite Borel measure

ν(E)=E∫_0^γ Q_t(det a_t)^(1/(d+1))1_E(t,Z_t)dt.

It is finite because (det a)^(1/(d+1))≤(tr a/d)^(d/(d+1))≤C_d(1+tr a), and A<∞. We have ν(f)≤C_T(1+B*)||f||_{d+1} for every nonnegative compact smooth f on spacetime. If K is a compact Lebesgue-null set, outer regularity and smooth cutoffs give nonnegative compact smooth fj≥1 on K with ||fj||_{d+1}→0. Thus ν(K)=0. Inner regularity of finite Borel measures on Euclidean space extends this to every Lebesgue-null Borel set N, so ν≪Lebesgue measure.

Finally the weight Q_t(det a_t)^(1/(d+1)) is strictly positive dt×P-a.e. on t<γ. If ν(N)=0 then the nonnegative integral defining it vanishes a.s.; positivity of the weight implies ∫_0^γ1_N(t,Z_t)dt=0 a.s. Hence

μ(E)=E∫_0^γ1_E(t,Z_t)dt ≪ Lebesgue measure.

Endpoints t=γ have zero dt mass. This is exactly the stopped absolute-continuity conclusion, with no new hypothesis on initial law or drift, **provided section1's existence assertion has been proved**. No optimization in λ, sharp Krylov constant or density integrability exponent is required for this consequence.

## 5a. Dimension one if only a d≥2 deterministic core is authored (proved)

On a product extension adjoin an independent standard scalar Brownian motion W and set Z′=(Z,W). In dimension two its half-bracket matrix is diag(a,1/2), hence uniformly nondegenerate with constant min(κ,1/2). The stopped expected trace is A+Eγ/2≤A+T/2, and its drift variation is unchanged. The completed implication in section5 applied in dimension two gives spacetime occupation absolute continuity for Z′. For a Lebesgue-null Borel set N⊂[0,T]×R, each set {(t,x,w):(t,x)∈N, |w|≤k} is null by Fubini. Thus its occupation expectation is zero for every integer k. Monotone convergence as k→∞ gives E∫_0^γ1_N(t,Z_t)dt=0, because W has finite real values. The original expectation equals that on the product extension. This uses no moment of Z_0 and imposes no further drift regularity. Therefore a complete deterministic core for dimensions d≥2 suffices for all original dimensions d≥1; the source paper's d≥2 convention need not narrow the final occupation conclusion.

## 6. Minimum prerequisite closure and honest remaining gap

The completed implications need: finite-dimensional spectral theorem and AM–GM; elementary scalar variation of constants; weak-derivative convolution and approximate identity; continuous-semimartingale Itô/product rule, square-integrable martingale expectation, and finite-variation integration; finite Euclidean Borel measure regularity/smooth cutoffs; Fatou/Tonelli. No new source or consumer dependency metadata has been changed. Existing semimartingale/measure suppliers must be selected by the lead owner if this branch is integrated; this research does not claim their exact interfaces have been audited.

The only newly identified substantive analytic prerequisite not proved here is section1: construct a globally spatially nonnegative parabolic Monge–Ampère/Bellman supersolution with the stated Sobolev regularity and L^(d+1) height bound. A proof must include its actual existence and maximum/height estimate. A quotation of Krylov2018, a.e. Peano jets of a pre-existing semiconvex function, the algebra in section2, or citing stochastic occupation absolute continuity itself would leave the dependency unclosed. No simpler complete alternative proof was obtained in this focused research pass. Keep the branch blocked pending genuine authoring rather than introducing an unproved active fallback.
