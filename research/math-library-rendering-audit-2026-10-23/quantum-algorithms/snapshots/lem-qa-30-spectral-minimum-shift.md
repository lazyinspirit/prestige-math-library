---
id: lem-qa-30-spectral-minimum-shift
kind: lemma
title: "Coherent spectral minimum and a frozen Gibbs energy shift"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - thm-qa-28-spectral-estimation-guarantee
  - thm-qa-28-spectral-law-measurement
  - thm-qa-phase-estimation-success-and-tail
  - thm-qa-30-generalized-minimum-guarantee
  - def-qa-30-sdp-reference-state-access
  - thm-integral-logarithm-derivative-and-normalisation
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - lem-qa-13-pi-rational-bounds
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument uses finite spectral decompositions, finite circuits and explicit finite probability bounds."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "van Apeldoorn et al., Quantum SDP-solvers: Better upper and lower bounds, Section 2.2 and Appendix C"
      url: "https://arxiv.org/pdf/1705.01843v4"
---

## Statement

Let $H=H^*$ have dimension $d\ge1$, with supplied rational $K\ge0$ and $\|H\|\le K$. Supply a costed exact preparation of $|\Phi_d\rangle$, controlled Hamiltonian evolutions, their inverses, and the input and success reflections used by generalized minimum finding. Let rational $0<\delta<1$, $T=2K+1$, and let $Q_{\rm cap}$ bound the sampler, inverse and controlled sampler calls of [[thm-qa-30-generalized-minimum-guarantee]] at confidence $\delta/2$. Choose
$$0<\nu\le\frac{\delta^2}{10^{12}d(Q_{\rm cap}+1)^2}.$$
There is a finite coherent spectral sampler whose rational label is within $1/8$ of its eigenvalue with bad probability at most $\nu$ at every preserved spectral index. Generalized minimum finding with $N=d$ returns, with probability at least $1-\delta$, a rational $s$ satisfying
$$\lambda_{\min}(H)-1/8\le s\le\lambda_{\min}(H)+1/8.$$
Measure $s$ once, put $\widetilde\lambda=s-1/8$, and freeze
$$G=H-(\widetilde\lambda-3/2)I.$$
On that event $I\preceq G$, $\lambda_{\min}(G)\le2$, and $\|G\|\le K+|\widetilde\lambda-3/2|$. This one measurement and its resulting parameters are fixed before the round's coherent indexed trace circuits are constructed.

The minimum step uses $O(\sqrt d(1+\ln(1/\delta)))$ complete spectral-sampler, inverse and reflection calls. Each sampler includes repeated costed reference preparation where invoked, all QPE powers, controlled gates, coherent decoding, median computation and history storage. One QPE trial has total physical Hamiltonian-evolution time $O(1)$ in the power-evolution model. A sparse-simulation substitution such as $\widetilde O(d_HK)$ per trial is conditional on an independently supplied evolution-cost theorem and does not acquire a second factor of $K$ from this application. Query counts imply no unproved total quantum-gate bound.

## Facts & Assumptions

**Given:** The finite Hermitian matrix, rational norm bound, confidence, supplied controlled access and inverses, costed reference preparation, and finite precision budgets stated above.

[F1] [[thm-qa-28-spectral-law-measurement]] gives the eigenphase output kernel and its orthogonal spectral decomposition; [[def-qa-30-sdp-reference-state-access]] supplies $\Phi_d=d^{-1/2}\sum_k|k,k\rangle$ with its declared preparation cost.

[F2] [[thm-qa-phase-estimation-success-and-tail]]: for dyadic $M$ and $L=\lfloor M\eta\rfloor\ge2$, the probability of circular phase error at least $\eta$ is at most $1/[2(L-1)]$.

[F3] [[thm-qa-28-spectral-estimation-guarantee]] records the principal-branch spectral decoder, finite certified scheduling, conditional eigenstate median argument, and the controlled-power resource model. Its least-schedule Statement is not used to assert a guarantee for a different QPE size; the bounds for the schedule here are proved below.

[F4] [[thm-qa-30-generalized-minimum-guarantee]] supplies its finite call cap and the good-label nondomination conclusion for a preserved uniform index when $\nu\le(\delta/(16Q_{\rm cap}))^2$. Its per-index cleaning and controlled/inverse hybrid are part of that theorem, not free implementation of a spectral projector.

[F5] [[thm-integral-logarithm-derivative-and-normalisation]] gives $L'(x)=1/x$ for $x>0$ and $L(1)=0$; [[cor-integral-logarithm-agrees-with-natural-logarithm]] identifies $L=\ln$. Differentiability gives continuity by [[cor-differentiable-implies-continuous]], so [[cor-mean-value-theorem]] applies on every positive compact interval.

[F6] The exponential is increasing and inverse to the natural logarithm, $\ln(1/\nu)=-\ln\nu$, and $e^{-x}=1/e^x$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]).

[F7] The finite rational bounds $3<\pi<22/7<4$ follow from [[lem-qa-13-pi-rational-bounds]].

## Proof

**Given:** The data and supplied access in the Statement.

1.1 Let $U=\exp(iH/T)$. Its signed eigenphase is $\phi=\lambda/(2\pi T)$, with $|\phi|<1/(4\pi)$ because $|\lambda|\le K$ and $T=2K+1$. Thus the principal representative is injective on the promised spectrum. By [F7], choose a certified rational $\pi_+\in(\pi,4)$ (for example $22/7$) and let $M$ be the least dyadic integer at least $128\pi_+T$, so $128\pi T\le M<256\pi_+T$. Choose an odd $r\ge8\ln(1/\nu)+8$ using a certified rational logarithm upper enclosure of additive width at most one, with the least such odd choice giving $r=O(1+\ln(1/\nu))$. Doubling and integer comparisons give finite schedules as in [F3]. [given, F3, F7, construct, algebra]

2.1 Prepare $\Phi_d$ once. Apply $r$ QPE trials to its same first factor, with fresh phase registers; preserve all phase outputs and arithmetic history. In an orthonormal eigenbasis $u_j$, $\Phi_d=d^{-1/2}\sum_j u_j\otimes\overline{u_j}$. The second factor is untouched and supplies a uniform orthogonal index in analysis. Conditional on $j$, controlled evolutions preserve $u_j$ and each fresh phase register has the kernel of [F1]; their conditional joint law is its $r$-fold product. Thus the median estimates one eigenvalue repeatedly, rather than independently redrawing spectral eigenvalues. No eigenbasis knowledge is required; repeated eigenvalues use any orthonormal basis within their eigenspaces. [F1, step 1.1, construct, algebra]

2.2 Set $\eta=1/(32\pi T)$. Then $M\eta\ge4$, so [F2] bounds one trial's circular error probability by $1/6<1/4$. On circular success its signed estimate has distance below $\eta$ from $\phi$ and lies in $(-1/2,1/2)$: indeed $|\phi|+\eta<1/(4\pi)+1/(32\pi)<1/2$. Hence it is exactly the principal representative, and decoding by $2\pi T$ gives error below $1/16$. This derives the trial bound for this actual $M$ directly, without substituting it into a least-$M$ theorem. [F2, F7, step 1.1, algebra]

3.1 Conditional on an eigenindex, let $X_i$ indicate an accurate exact trial and $S=\sum_iX_i$. By step 2.1 and step 2.2 the indicators are independent and each has success probability at least $3/4$. Markov's inequality applied to $3^{-S}$ gives $\Pr(S\le r/2)\le3^{r/2}\mathbb E3^{-S}\le(\sqrt3/2)^r$. For the elementary exponential estimate, apply [F5] on $[1,8/7]$: some $c\in(1,8/7)$ satisfies $\ln(8/7)=L(8/7)-L(1)=1/(7c)>1/8$. Since $2/\sqrt3>8/7$, monotonicity of $\ln$ (also immediate from [F5] and the mean value theorem) gives $\ln(2/\sqrt3)>1/8$, so [F6] gives $(\sqrt3/2)^r\le\exp(-r/8)\le\nu\exp(-1)$. Applying [F5] on $[1,2]$ gives $\ln2=1/c_2<1$ for some $c_2\in(1,2)$, hence [F6] gives $\exp(-1)<1/2$. The conditional failure is therefore below $\nu/2$. An inaccurate odd median requires at least half the trials to be inaccurate. Therefore the exact decoded median has error at most $1/16$ with conditional failure below $\nu/2$. This is the explicit conditional median argument also used in [F3]. [F3, F5, F6, step 2.1, step 2.2, algebra]

4.1 For each phase output $y$, set $z=y/M$ if $y/M<1/2$, and $z=y/M-1$ otherwise. Approximate $2\pi Tz$ using a certified rational approximation to $\pi$ of error at most $1/(32T)$, followed by rational rounding of error at most $1/32$, and clip to $[-K,K]$. Since $|z|\le1/2$, the first error is at most $1/32$ and the total is at most $1/16$. Clipping cannot increase distance from the true eigenvalue. The median of entries each perturbed by at most $h$ changes by at most $h$: at least half the new entries remain below the old median plus $h$, and at least half remain above the old median minus $h$. Thus the rational median label has error at most $1/8$ on the event of step 3.1. Retain all rounded values, comparison bits and scratch for reversible computation. [given, step 3.1, construct, algebra]

5.1 Allocate total operator-error sum at most $\nu/4$ to the implemented controlled evolutions and other synthesis slots of a complete spectral sampler. With $S_0$ slots, error at most $\nu/(4S_0)$ per slot suffices. Telescoping unitary products bounds conditional output-vector error by that sum, and measured total variation by at most twice the sum. Together with step 3.1, the bad-label probability is at most $\nu$ at every spectral index. Exact reference preparation is assumed; an approximate reference may instead be covered by a separately allocated whole-algorithm hybrid since its error can destroy exact index preservation. Retain every QPE target, phase register, arithmetic register and coin, so reversing the whole finite circuit, including reference preparation, provides its inverse. Controlled implementations are supplied or constructed gatewise with their actual costs. [given, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 The uniform-index cleaning proof of [F4] is basis independent: in analysis its per-index rotations can act in the orthogonal $\overline{u_j}$ reference sectors from step 2.1. No such unknown-basis rotation or spectral projector is implemented. The declared $\nu$ is smaller than $(\delta/(16Q_{\rm cap}))^2$. Apply [F4] with $N=d$. With probability at least $1-\delta$, it returns a good rational score $s$ not strictly larger than every good label at any one index. Its goodness gives $s\ge\lambda_{\min}(H)-1/8$. At an index of minimum eigenvalue, every good label is at most $\lambda_{\min}(H)+1/8$; a larger selected score would contradict nondomination. Thus the stated two-sided bound on $s$ holds without a probability lower bound on any individual label. [given, F4, step 2.1, step 5.1, algebra]

6.2 In power-evolution access, a QPE trial uses controlled $\exp(iH2^\ell/T)$ for $0\le\ell<\log_2M$. Their total physical evolution time is $\sum_\ell2^\ell/T=(M-1)/T<256\pi_+$, and each individual time is bounded by this constant. Thus each trial has total physical time $O(1)$. With repeated base-$U$ access there are instead $M-1=O(K+1)$ base calls; the two models have distinct costs. One must not multiply the power-time sum by another factor $M$. With supplied evolution cost $C_H(t,\varepsilon)$, the precise charge is $\sum_\ell C_H(2^\ell/T,\varepsilon_\ell)$ per trial with slot errors summed as in step 5.1, plus QFT, control and decoding work. [given, F3, step 1.1, step 5.1, algebra]

7.1 Measure $s$ once and put $\widetilde\lambda=s-1/8$. Step 6.1 implies $\lambda_{\min}(H)-1/4\le\widetilde\lambda\le\lambda_{\min}(H)$, so $\lambda_{\min}(G)=\lambda_{\min}(H)-\widetilde\lambda+3/2\in[3/2,7/4]$. In particular $I\preceq G$, its smallest eigenvalue is at most two, and the triangle inequality gives the finite norm bound in the Statement. Optionally $\lfloor8s\rfloor/8-1/8$ yields the weaker lower estimate greater than $\lambda_{\min}(H)-3/8$ and hence $\lambda_{\min}(G)<15/8$, still sufficient. The formulas include $K=0$ and rational rounding ties. [step 6.1, construct, algebra]

8.1 Freeze this measurement, the shift, the norm certificate and all ensuing coefficient encodings, cutoffs and synthesis precisions once per MMW round, before making coherent indexed trace circuits. These later circuits use one fixed $G$; they do not rerun or remeasure the spectral minimum. Since an identity energy shift multiplies numerator and partition function by the same positive scalar, $e^{-G}/\operatorname{tr}(e^{-G})=e^{-H}/\operatorname{tr}(e^{-H})$. The spectral good-event failure remains part of the round's confidence budget. [step 7.1, construct, algebra]

9.1 The minimum theorem charges $O(\sqrt d(1+\ln(1/\delta)))$ complete sampler, inverse and reflection accesses. Each sampler includes its reference preparation at declared cost $C_\Phi$, $r$ QPE trials and all coherent decoding, comparisons, median arithmetic and history storage; inverses reverse all of this work and include reference unpreparation. These are charged quantum gates and workspace, not free classical preprocessing. If an independently proved sparse-simulation theorem bounds the sum in step 6.2 by $\widetilde O(d_HK)$, substitute that cost to obtain $\widetilde O(\sqrt d\,d_HK)$ evolution cost, adding preparation and every other charged coordinate; at $K=0$ retain any supplied nonzero overhead. This conditional substitution supplies neither an unproved simulation theorem nor a total-gate guarantee, and introduces no $K^2$ factor. The finite $Q_{\rm cap}$ is chosen first, then $\nu$, then the confidence and synthesis budgets, so no unknown stopping time sets precision retrospectively. Together with step 7.1 this proves the claims. [given, F4, step 1.1, step 5.1, step 7.1, step 6.2, algebra] ∎

