---
id: thm-qa-18-reversible-search-cost
kind: theorem
title: "Finite reversible-walk finding cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-18-reversible-walk-finding
  - def-qa-18-marked-set-and-stationary-mass
  - def-qa-17-absolute-spectral-gap
  - thm-qa-17-absolute-gap-eigenvalue-characterization
  - thm-qa-17-szegedy-spectral-mapping
  - thm-qa-17-discriminant-self-adjoint
  - alg-qa-quantum-phase-estimation
  - def-qa-eigenphase-estimation-model
  - def-qa-circular-phase-distance
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - lem-qa-phase-estimation-sine-chord-bounds
  - thm-qa-phase-estimation-exact-grid
  - thm-qa-phase-estimation-superposition-law
  - thm-qa-phase-estimation-access-cost
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - def-principal-inverse-sine-and-cosine
  - thm-triple-angle-identities
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-sine-and-cosine-are-one-lipschitz
  - thm-double-angle-and-power-reduction-identities
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-projective-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - def-qc-povm-and-outcome-law
  - def-non-negative-and-positive-operator
  - thm-non-negative-square-root-exists-and-is-unique
  - def-qc-dirac-notation-conversion
  - def-trace-of-an-endomorphism
  - cor-triangle-inequality-for-inner-product-norm
  - lem-reverse-triangle-inequality-in-a-normed-space
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite-dimensional spectral decomposition, finite probability bounds, and explicit finite unitaries."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk, Theorem 3, §3.2 Theorem 6, and §4 Lemmas 1–2"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §20.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Let $(X,P,\pi)$ be a finite ergodic reversible chain with actual absolute spectral gap $\delta_{\rm act}\in(0,1]$. Supply the algorithm with a dyadic rational lower bound $\delta_0\in(0,\delta_{\rm act}]$ and suppose the marked set is empty or has stationary mass at least the dyadic rational lower bound $\varepsilon_0\in(0,1]$. Let the dyadic rational failure target be $\rho\in(0,1)$. Let $S_0$ be the cost of preparing the stationary walk state, $U_0$ a common upper bound for one controlled $W$ or $W^*$ update and the exact controlled row-space reflection $R_A$ used by the construction, and $C$ the cost of a coherent marked check. For $0<\varepsilon_0<1/2$, one outer trial of [[alg-qa-18-reversible-walk-finding]] with gap input $\delta_0$ has one-sided error, finds a marked state with a fixed positive probability when one exists, and uses

$$S_0+O\!\left(\frac{1}{\sqrt{\varepsilon_0}}\left(\frac{U_0}{\sqrt{\delta_0}}+C\right)\right).$$

in the corresponding query/update/check cost coordinates. The capped wrapper with failure target $\rho\in(0,1)$ uses $O((S_0+\varepsilon_0^{-1/2}(U_0/\sqrt{\delta_0}+C))(1+\ln(1/\rho)))$ in that profile. When $\varepsilon_0\ge1/2$, its direct-sampling branch uses $O((S_0+C)(1+\ln(1/\rho)))$. If the actual gap is dyadic and supplied exactly, one may set $\delta_0=\delta_{\rm act}$; otherwise a dyadic lower bound within a factor of two gives the same asymptotic bound in the actual gap. For gate, width, precision, and bit-time coordinates, the phase-register gates, controlled reflection, comparisons, numerical generation, and retained workspace are charged separately.

## Facts & Assumptions

The finite dyadic inputs retain all real promise cases: for any positive real lower bounds and desired failure target, choose dyadic lower bounds within a factor of two and a dyadic target no larger than the desired failure probability.

**Given:** The finite reversible chain and marked promise, the finite access model of [[alg-qa-18-reversible-walk-finding]], and the constants in its displayed algorithm.

[F1] [[def-qa-18-marked-set-and-stationary-mass]]: $\varepsilon=\pi(\mathcal M)$ is the actual stationary mass; on a promised nonempty instance $\varepsilon\ge\varepsilon_0$, and finding returns a marked label.

[F2] [[def-qa-17-absolute-spectral-gap]] and [[thm-qa-17-absolute-gap-eigenvalue-characterization]]: the actual absolute gap is $\delta_{\rm act}=1-\max_{\lambda\ne1}|\lambda|$, and the supplied algorithm parameter satisfies $0<\delta_0\le\delta_{\rm act}$.

[F3] [[thm-qa-17-szegedy-spectral-mapping]]: on the signal planes of $W=U^2$, a discriminant eigenvalue $\lambda$ contributes phases $\exp(\pm2i\arccos\lambda)$; the stationary eigenline has phase zero and the orthogonal complement has phase zero but lies in $A^\perp$.

[F4] [[alg-qa-quantum-phase-estimation]] and [[def-qa-eigenphase-estimation-model]]: an $s$-bit QPE uses controlled powers of the stated unitary and its forward phase-register convention.

[F5] [[lem-qa-phase-estimation-outcome-kernel]]: on an eigenphase $\theta$, outcome $y$ has probability $Q^{-2}|\sum_{j<Q}\exp(2\pi ij(\theta-y/Q))|^2$.

[F6] [[lem-qa-phase-estimation-geometric-sum]] and [[lem-qa-phase-estimation-sine-chord-bounds]]: for $z\ne1$, $\sum_{j<Q}z^j=(1-z^Q)/(1-z)$, and $\sin(\pi d)\ge2d$ for $0\le d\le1/2$.

[F7] [[thm-qa-phase-estimation-exact-grid]]: phase $0$ is returned as $y=0$ with certainty.

[F8] [[thm-qa-phase-estimation-superposition-law]]: a coherent phase-estimation circuit acts blockwise on the finite orthogonal eigenspaces, so a uniform eigenphase bound holds on their superpositions.

[F9] [[thm-qa-phase-estimation-access-cost]]: an $s$-bit QPE made from one controlled-step oracle uses $2^s-1$ controlled-step calls; its phase-register gates are counted separately.

[F10] For $j\ge2$, $j^{-2}\le[j(j-1)]^{-1}=(j-1)^{-1}-j^{-1}$, so every finite partial sum $\sum_{j=1}^n j^{-2}$ is at most $2$ by telescoping.

[F11] [[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]: for $N=2$, $\pi/4=1-1/3+1/5+R_2$ with $R_2<0$, hence $\pi<52/15<7/2$.

[F12] [[def-principal-inverse-sine-and-cosine]]: $\arcsin:[-1,1]\to[-\pi/2,\pi/2]$ and $\sin(\arcsin x)=x$.

[F13] [[thm-triple-angle-identities]]: $\sin(3x)=3\sin x-4\sin^3x$ for real $x$.

[F14] [[cor-trigonometric-parity-and-pythagorean-identity]] and [[thm-double-angle-and-power-reduction-identities]]: $\sin^2x+\cos^2x=1$, $\sin2x=2\sin x\cos x$, $\cos2x=\cos^2x-\sin^2x$, and $1-\cos x=2\sin^2(x/2)$.

[F15] [[cor-sine-and-cosine-are-one-lipschitz]]: $|\sin x-\sin y|\le|x-y|$, in particular $\sin x\le x$ for $x\ge0$.

[F16] [[def-qc-projective-measurement]] specifies orthogonal outcome projections, and [[thm-qc-projective-measurement-outcome-law]] establishes only their outcome weights $p_a=\operatorname{tr}(\rho\Pi_a)$. The marked test in [[alg-qa-18-reversible-walk-finding]] explicitly selects the Lüders branch $\mathcal I_a(Z)=\Pi_aZ\Pi_a$ on all existing registers; its conditional state when $p_a>0$ is $\mathcal I_a(\rho)/p_a$ by [[def-qc-instrument-and-conditional-state]]. For any orthogonal projection $\Pi$, the vectors $\Pi v$ and $(I-\Pi)v$ are orthogonal and sum to $v$, so $\|v\|^2=\|\Pi v\|^2+\|(I-\Pi)v\|^2$ and $\|\Pi v\|\le\|v\|$. This contractivity is an orthogonal-decomposition identity, independent of a state-update rule.

[F17] [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], and [F14]: $\sin(\pi/4)=1/\sqrt2>1/2$, obtained from $\cos(\pi/2)=0$ and $\cos(2x)=1-2\sin^2x$ at $x=\pi/4$, with sine positive there.

[F18] [[cor-triangle-inequality-for-inner-product-norm]]: the induced inner-product norm satisfies the triangle inequality.

[F19] [[lem-reverse-triangle-inequality-in-a-normed-space]]: $|\|u\|-\|v\||\le\|u-v\|$.

[F20] [[thm-qa-17-discriminant-self-adjoint]]: $T^*T=I$, and in the reversible case $D=\operatorname{diag}(\sqrt\pi)\,P\,\operatorname{diag}(1/\sqrt\pi)$, so the discriminant and transition operator have the same eigenvalues; $TT^*$ is the orthogonal projection onto the row range.

[F21] [[def-non-negative-and-positive-operator]] defines nonnegative operators by self-adjointness and nonnegative quadratic forms; [[def-qc-povm-and-outcome-law]] defines a POVM as such effects summing to identity. [[thm-non-negative-square-root-exists-and-is-unique]] gives the unique nonnegative square root, and [[thm-qc-luders-instrument-of-a-povm-is-valid]] makes the corresponding square-root branch maps a finite instrument. [[thm-qc-projective-conditional-state]] proves that $\Pi_a\rho\Pi_a/p_a$ is a density operator supported on the projected range when $p_a>0$; it is used here for the selected Lüders instrument. [[def-qc-dirac-notation-conversion]] gives the outer-product coordinate matrix $[u][u]^\dagger$, and [[def-trace-of-an-endomorphism]] identifies its trace with the coordinate trace.

## Proof


1.1 By [F2], the stationary eigenvalue $1$ is simple and every other eigenvalue of the reversible transition operator has $|\lambda|\le1-\delta_{\rm act}\le1-\delta_0$. By [F20], the discriminant is similar to this transition operator and has the same eigenvalues; the stationary eigenvector corresponds to $\sqrt\pi$. In the two-reflection Szegedy walk, the circular phase distance of a nonstationary signal eigenvalue is $d_{\mathbb T}(\arccos(\lambda)/\pi)=\arccos(|\lambda|)/\pi$. For $t=\arccos(1-\delta_0)\in[0,\pi/2]$, [F14] and [F15] give $\delta_0=1-\cos t=2\sin^2(t/2)\le t^2/2$, so $t\ge\sqrt{2\delta_0}$. Thus every nonstationary signal phase has circular distance at least $\sqrt{2\delta_0}/\pi$. The only additional zero-phase subspace is the walk-space orthogonal complement in [F3], on which the exact row-space reflection $R_A$ equals $-I$; on the stationary vector it equals $+I$. [F2, F3, F14, F15, F20, algebra]

1.2 In $R(\beta)$, the QPE scale satisfies $Q=2^s\ge8/\sqrt{\delta_0}>2\pi/\sqrt{\delta_0}$ by the algorithm's exact integer test and $\pi<4$ from [F11]. On the stationary phase $0$, [F7] returns outcome $0$ in every register, so the all-zero branch applies $R_A=+I$ and uncomputes; the stationary state is fixed exactly. For a nonzero signal phase at circular distance $d\ge\sqrt{\delta_0}/\pi$, the outcome-kernel [F5] and the geometric sum [F6] give $\Pr(y=0)\le\frac{1}{4Q^2d^2}<\frac1{16}$. The first inequality follows because $|1-\exp(2\pi i\theta)|=2\sin(\pi d)\ge4d$ and $|1-\exp(2\pi iQ\theta)|\le2$. Repeating QPE coherently in $k=\min\{j\ge1:2^j\beta\ge2\}$ fresh phase registers makes the all-zero branch norm at most $4^{-k}$. On a nonzero signal eigenvector, the actual reflection differs from the ideal $-I$ only on that branch, where it applies $R_A$; before QPE uncomputation the difference is $(R_A+I)$ on the all-zero component. By [F20], $R_A=2\Pi_A-I$ for the orthogonal projection $\Pi_A=TT^*$, so $R_A+I=2\Pi_A$ and orthogonal decomposition gives $\|\Pi_Aw\|\le\|w\|$; hence the coherent state error is at most $2\cdot4^{-k}\le2^{1-k}\le\beta$. Reversing the QPE prefixes is unitary and preserves this norm bound. For each nonzero eigenphase, the $k$ QPE circuits use fresh registers and leave the walker eigenvector unchanged, so the joint all-zero probability is the product of the single-register bounds and is at most $16^{-k}$. For a superposition of eigenspaces, the joint all-zero branch is still block-diagonal in the orthogonal eigenspaces; expanding its squared norm gives the eigenspace-weighted average of these joint probabilities (the same orthogonal calculation as [F8]). Its branch norm is therefore at most $4^{-k}$ times the input norm, and the same estimate applies. On $A^\perp\cap B^\perp$, the phase is exactly zero and $R_A=-I$, so the algorithm also agrees exactly with the ideal reflection there. Thus the bound is a coherent state-vector bound, not just an outcome-probability statement. [F4, F5, F6, F7, F8, F11, F20, given, algebra]

1.3 The projectors $\Pi_0,\Pi_1$ of the algorithm are self-adjoint idempotents summing to identity. For each $a$, $\langle\Pi_av,v\rangle=\|\Pi_av\|^2\ge0$, so they form a POVM by [F21]; each $\Pi_a$ is its own nonnegative square root. The square-root-instrument theorem in [F21] therefore proves that the selected maps $Z\mapsto\Pi_aZ\Pi_a$ are a finite instrument, and its projective conditional-state theorem applies on positive-probability branches. For a unit vector $\psi$ of the whole existing register space, the algorithm's clean check sends $\psi|0\rangle_F|0\rangle_J$ to $\sum_{a=0}^1(\Pi_a\psi)|a\rangle_F|0\rangle_J$. The specified computational Lüders readout of the fresh flag selects precisely $(\Pi_a\psi)|a\rangle_F|0\rangle_J$; after recording $a$, the inverse check maps this vector to $(\Pi_a\psi)|0\rangle_F|0\rangle_J$. The resulting branch on the original registers is thus exactly $\Pi_a|\psi\rangle\langle\psi|\Pi_a=|\Pi_a\psi\rangle\langle\Pi_a\psi|$. Its coordinate trace is $\sum_j|(\Pi_a\psi)_j|^2=\|\Pi_a\psi\|^2=p_a$ by [F16] and [F21]. If $p_a>0$, division gives the pure conditional vector $\Pi_a\psi/\|\Pi_a\psi\|$; if $p_a=0$, the branch has zero weight and no conditional state. The identities hold on all retained auxiliary registers, even when entangled with the first label; only the fresh flag and scratch are cleared. Each test uses one forward check, one inverse check and one separately priced flag readout, so it costs $O(C)$ in the algorithm's query/check profile. The same compute/phase/uncompute word implements the exact marked phase flip with two check calls and its separately priced phase gate. [F16, F21, given, construct, algebra]

1.4 Let $\Pi$ be any orthogonal projection and let $\xi,\zeta$ be unit vectors with $\|\xi-\zeta\|\le\Delta$. Put $a=\Pi\xi$ and $b=\Pi\zeta$. By [F16], $\Pi$ is contractive, so $\|a-b\|\le\Delta$; [F19] gives $|\|a\|-\|b\||\le\Delta$. If $\|b\|\ge2/3$ and the actual projected branch has positive probability (so $\|a\|>0$), [F18] yields $$\left\|\frac a{\|a\|}-\frac b{\|b\|}\right\|\le\frac{\|a-b\|+|\|a\|-\|b\||}{\|b\|}\le3\Delta.$$ The same estimate applies when one input is an ideal state and the other differs by a known reflection-error vector. [F16, F18, F19]

2.1 For the recursive branch suppose $0<p:=\pi(\mathcal M)<1/2$ and put $\phi_0=\arcsin\sqrt p$. If $p\ge1/2$, the initial stationary sample already succeeds with probability at least $1/2$, by [F1] and [F16], so no angle analysis is needed. In an exact recursive amplitude-amplification step, the marked phase flip followed by reflection about the current state triples its marked angle. In the ordered marked/unmarked basis, write $s=\sin\phi,c=\cos\phi$ and $|\psi\rangle=(s,c)$. The reflection matrix is $\begin{pmatrix}2s^2-1&2sc\\2sc&2c^2-1\end{pmatrix}=\begin{pmatrix}-\cos2\phi&\sin2\phi\\\sin2\phi&\cos2\phi\end{pmatrix}$. Multiplying it by $\operatorname{diag}(-1,1)(s,c)=(-s,c)$ gives first coordinate $s\cos2\phi+c\sin2\phi=3s-4s^3=\sin3\phi$ and second coordinate $-s\sin2\phi+c\cos2\phi=4c^3-3c=\cos3\phi$, using [F13] and [F14]. At level $i$, let $\phi_i$ be the actual angle after $A_i$, let $\bar\phi_i=3^i\phi_0$, and put $e_i=|\sin\phi_i-\sin\bar\phi_i|$. Let $t$ be the first ideal index with $\bar\phi_t\ge\pi/4$; then $\bar\phi_t<3\pi/4$ and, if $t\ge2$, every $i\le t-1$ has $\bar\phi_{i-1}<\pi/12$. Inductively $e_{i-1}\le\gamma\bar\phi_{i-1}/\pi$ implies $\sin\phi_{i-1}\le\sin(\pi/12)+\gamma/12$. By [F11] and [F15], the right side is less than $7/24+1/1440<1/2$, while $\sin(\pi/4)>1/2$ by [F17]; hence both angles lie in $[0,\pi/4]$. On the input to the level-$i$ approximate stationary reflection, after conjugating by $A_{i-1}^\dagger$, the component orthogonal to the stationary vector has norm $|\sin(2\phi_{i-1})|$. By step 1.2 the reflection error on that component has norm at most $\beta_i|\sin(2\phi_{i-1})|$. The marked-amplitude change is no larger than this norm: the marked projector is orthogonal by [F16], so its orthogonal decomposition makes it contractive, and [F19] bounds the change in projected norms by the vector error. To compare triple angles, set $x=\sin a,y=\sin b$ for $a,b\in[0,\pi/4]$, so $x,y\in[0,1/\sqrt2]$ by [F14]. The identity $\sin2a=2x\sqrt{1-x^2}$ shows that the absolute difference of the two double-angle values is at most $2|x-y|$: for $x\ge y$, the function $2x\sqrt{1-x^2}$ is increasing because its square difference is $4(x^2-y^2)(1-x^2-y^2)\ge0$, while $2x\sqrt{1-x^2}-2y\sqrt{1-y^2}=2(x-y)\sqrt{1-x^2}+2y\bigl(\sqrt{1-x^2}-\sqrt{1-y^2}\bigr)\le2(x-y).$ The case $y\ge x$ is symmetric. By [F13], the triple-angle difference is $(x-y)(3-4(x^2+xy+y^2))$, whose coefficient has absolute value at most $3$ because $0\le x^2+xy+y^2\le3/2$. Therefore, for $i\le t-1$, $e_i\le\beta_i\bigl(\sin(2\bar\phi_{i-1})+2e_{i-1}\bigr)+3e_{i-1}\le 2\beta_i(\bar\phi_{i-1}+e_{i-1})+3e_{i-1}.$ For these indices $\sin(2\bar\phi_{i-1})\le2\bar\phi_{i-1}$ by [F15], so the last inequality follows. [F1, step 1.2, F11, F12, F13, F14, F15, F16, F17, F19, given, algebra]

3.1 Define $\tilde e_0=0$ and $\tilde e_i=4\beta_i\bar\phi_{i-1}+3\tilde e_{i-1}$. Suppose inductively that $e_{i-1}\le\tilde e_{i-1}\le\bar\phi_{i-1}$; then step 2.1 gives $e_i\le\tilde e_i$. Also $u_i:=\tilde e_i/(\gamma\bar\phi_i)$ satisfies $u_i=(4/(3\gamma))\sum_{j=1}^i\beta_j$. Since $\beta_j=\gamma/(16j^2)$ and $j^{-2}\le(j-1)^{-1}-j^{-1}$ for $j\ge2$, telescoping by [F10] gives $\sum_{j=1}^i\beta_j\le\gamma/8$. Thus $u_i\le1/6<1/\pi$ by [F11]. It follows that $\tilde e_i\le\gamma\bar\phi_i/\pi\le\bar\phi_i$ for $i\le t-1$, closing the induction and giving $e_{t-1}\le\gamma\bar\phi_{t-1}/\pi<\gamma/4$ when $t\ge2$. At the last step, $\sin\phi_{t-1}\le1/\sqrt2+\gamma/4<18/25$. By [F13], $g(s)=\sin(3\arcsin s)=3s-4s^3$ and $g(s)-g(u)=(s-u)(3-4(s^2+su+u^2))$; for $s,u\in[0,18/25]$ the coefficient has absolute value at most $13/4$. Therefore $e_t\le\beta_t+\frac{13}{4}e_{t-1}<\frac\gamma8+\frac{13\gamma}{16}<\gamma$, since $\beta_t\le\gamma/16$. If $t=1$, $e_0=0$ and $e_1\le\beta_1<\gamma$. Finally $\bar\phi_t\in[\pi/4,3\pi/4]$, so $A_t$ on a fresh stationary state has marked amplitude at least $1/\sqrt2-\gamma$. [F10, F11, F13, F14, step 2.1, algebra]

4.1 In the tolerant wrapper, after an unsuccessful marked measurement at level $i$, let $|\nu_i^\perp\rangle$ be the normalized unmarked component and let $|\mu_i^\perp\rangle$ be the normalized unmarked component of the ideal recursive state $|\phi_i\rangle=A_i|\pi\rangle$. The actual state differs from $A_i|\pi\rangle$ by the previous input discrepancy $\Delta_i=\|\nu_{i-1}^\perp-\pi\|$, since the same unitary $A_i$ is applied to both inputs. By the explicit Lüders realization in step 1.3, the positive-probability branches are the normalized projected components on all retained registers, and [F16] gives their squared-norm probabilities. For $i<t$, $\bar\phi_i<\pi/4$ and $e_i\le\gamma/4$, so $\sin\phi_i\le1/\sqrt2+\gamma/4<18/25$ and the unmarked norm exceeds $2/3$ (since $1-(18/25)^2>4/9$). Projecting the two states onto the unmarked subspace and normalizing gives $\|\nu_i^\perp-\mu_i^\perp\|\le3\Delta_i$: the projected vectors differ by at most $\Delta_i$, their norms differ by at most $\Delta_i$, and the ideal norm is at least $2/3$. The ideal unmarked directions drift by at most $12\beta_{i+1}\bar\phi_i$: the error vector in the recursive reflection has norm at most $4\beta_{i+1}\bar\phi_i$, and normalizing its unmarked projection costs at most a factor $3$. Also $\|\mu_0^\perp-\pi\|=2\sin(\phi_0/2)\le\phi_0$; the equality follows from the inner product $\langle\mu_0^\perp,\pi\rangle=\cos\phi_0$ and the inequality from [F15]. Let $\Delta_1=0$. The preceding bounds give, for $1\le i<t$, $\Delta_{i+1}\le3\Delta_i+12\phi_0\sum_{j=1}^{i}3^{j-1}\beta_j+\phi_0.$ Iterating this recurrence gives $\begin{aligned}\Delta_t&\le\phi_0\sum_{i=1}^{t-1}3^{t-1-i}+12\phi_0\sum_{i=1}^{t-1}3^{t-1-i}\sum_{j=1}^{i}3^{j-1}\beta_j\\&\le\tfrac12 3^{t-1}\phi_0+2\,3^t\phi_0\sum_{j=1}^{t-1}\beta_j\\&\le\frac\pi8+\frac{3\gamma}{4}.\end{aligned}$ For the second inequality, interchange the finite sums: for fixed $j$, $\sum_{i=j}^{t-1}3^{t-1-i}<(1/2)3^{t-j}$, so its coefficient becomes less than $12\cdot3^{j-1}\cdot3^{t-j}/2=2\cdot3^t$. For the last inequality, $3^t\phi_0<3\pi/4$ by minimality and $\sum_j\beta_j\le\gamma/8$ by the telescoping bound in step 3.1. [F15, F16, F18, F19, step 1.3, step 3.1, step 1.4, given, algebra]

5.1 Therefore at the unknown successful level $t$, the retained-state wrapper's marked amplitude is at least $1/\sqrt2-\gamma-\Delta_t\ge1/\sqrt2-\pi/8-7\gamma/4$. Since $1/\sqrt2>7/10$, $\pi<7/2$ by [F11], and $\gamma=1/120$, this lower bound exceeds $119/480$, whose square exceeds $1/20$. By [F16], the next projective marked measurement succeeds with probability at least $1/20$ without resetting after earlier failed measurements. [F11, F16, step 4.1, algebra]

6.1 If $\mathcal M=\varnothing$, every verified marked-output branch is impossible, so the algorithm never returns a false marked label. For $0<\varepsilon_0<1/2$, the least $t_{\max}$ in the wrapper satisfies $3^{t_{\max}}=O(1/\sqrt{\varepsilon_0})$: minimality gives $3^{t_{\max}-1}\arcsin\sqrt{\varepsilon_0}<\pi/4$, and [F12, F15] imply $\arcsin x\ge x$ for $x\in[0,1]$ because $x=\sin(\arcsin x)\le\arcsin x$. For any nonempty instance with $p\ge\varepsilon_0$, monotonicity of $\arcsin$ gives $t(p)\le t_{\max}$. Each outer trial succeeds with probability at least $1/20$ by step 5.1, so the exact rational-power definition of $n_{\rm out}$ gives $(19/20)^{n_{\rm out}}\le\rho$ and the independent trials fail with probability at most $\rho$. If $\varepsilon_0\ge1/2$, each direct stationary sample succeeds with probability at least $1/2$ by [F1, F16], and the exact rational-power definition of $n_s$ gives $2^{-n_s}\le\rho$. Thus the error is one-sided and at most $\rho$. [F1, F12, F15, F16, step 5.1, given, algebra]

7.1 At level $i$, the reflection $R(\beta_i)$ uses $k_i=O(\log(i+1))$ QPE copies and $Q=O(1/\sqrt{\delta_0})$ controlled $W$ steps per copy by [F9]; its query/update cost is $O((U_0/\sqrt{\delta_0})\log(i+1)+C)$ including the marked phase flip. Each wrapper marked/unmarked test has the $O(C)$ compute/readout/uncompute cost in step 1.3. The recursion satisfies $C_i=3C_{i-1}+O((U_0/\sqrt{\delta_0})\log(i+1)+C)$, so $C_i=O(3^i(U_0/\sqrt{\delta_0}+C))$ because $\sum_{j\ge1}3^{-j}\log(j+1)<\infty$. Summing $C_i$ for $i\le t_{\max}$ is geometric, hence one trial costs $O(S_0+3^{t_{\max}}(U_0/\sqrt{\delta_0}+C))=O(S_0+\varepsilon_0^{-1/2}(U_0/\sqrt{\delta_0}+C))$. Multiplying by the $O(1+\ln(1/\rho))$ outer cap gives the low-mass statement; the direct-sampling branch costs $O((S_0+C)(1+\ln(1/\rho)))$. For other resource coordinates, [F9] separately charges QPE phase gates and registers, while the procedure separately charges $R_A$, comparisons, coefficient precision, and classical arithmetic. [F4, F9, given, step 1.3, step 6.1, algebra] ∎

