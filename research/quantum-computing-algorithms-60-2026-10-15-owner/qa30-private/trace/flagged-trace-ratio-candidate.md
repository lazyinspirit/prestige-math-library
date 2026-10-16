# Private candidate: flagged trace ratio, floors and coherent access

Private proof only. No canonical content, metadata, receipts, tests, checks,
hashes, gates, layout, readiness records, stamps or commits are changed.
Interfaces inspected: OP8 TraceMean/GibbsFlag and the accepted generic
relative-probability candidate at `/tmp/qa27-owner-candidates/generic-relprob.md`.
The analytic Fourier coefficient theorem and ShiftMin's spectral guarantee
are suppliers, not reproved here.

## Precise conditional contract

Let $d\ge1$, $0<\theta\le1/4$, and let the frozen finite Hermitian matrix
$G$ satisfy $1\le\lambda_{\min}(G)\le2$ and a supplied finite norm bound.
Let $A$ be Hermitian with $\|A\|\le1$, put
$$Z=\operatorname{tr}(e^{-G}),\qquad \rho_G=e^{-G}/Z,\qquad F_A=\tfrac12\sqrt{I+A/2}.$$
Choose $0<e\le\min(1/2,\theta/(100000d))$ and use the *same* declared
normalizations $B_G^+=B_A^+=1+e/8$. A supplied finite block circuit for
$e^{-G/2}/B_G^+$ has operator error at most $e$. A supplied finite
observable block for $F_A/B_A^+$ has operator error at most $e$.
The baseline observable block is $I/(2B_A^+)$, not $I/2$ with a different
normalization. Its approximation error may also be bounded by $e$.
All block flags and work are retained, and inverses and controlled circuits
are supplied and charged. The reference-state circuit prepares
$|\Phi_d\rangle=d^{-1/2}\sum_{k=1}^d|k,k\rangle$ at cost $C_\Phi$.
The exact baseline scalar block can, for example, be implemented by an
ancilla rotation with that declared amplitude; finite synthesis error must
be included in its $e$ budget.

Let $V_A$ first prepare $\Phi_d$, then apply the Gibbs block on its first
factor, followed by the observable block on that factor, using distinct
zero-initialized work registers. Its success flag requires **both** block
work registers zero. Let $V_0$ be the identical construction with the
baseline block. These are ordinary unmeasured circuits. A finite preparation
error of norm at most $e_\Phi$ can be included by adding $e_\Phi$ to the
vector-error bound below; the numerical bounds stated here allocate an
exact supplied reference state. A compiled reference circuit may instead
be regarded as exact for its supplied implemented reference state only if
its error against $\Phi_d$ has been accounted for.

The procedure calls generic RelProb separately on $V_A,V_0$ with
$p_{\min}=1/(1024d)$, relative tolerance $c_{\rm rel}=\theta/36$, and
specified conditional failure budgets. It forms $2(\widehat q_A/\widehat
q_0-1)$ with final additive classical rounding error at most $\theta/4$,
and clips to $[-1,1]$. On the joint RelProb good event its output differs
from $\operatorname{tr}(A\rho_G)$ by less than $\theta$.

## Ideal probabilities and common normalization

The maximally entangled trace identity gives
$\|(M\otimes I)\Phi_d\|^2=\operatorname{tr}(M^*M)/d$. It follows simply
by expanding the orthonormal second-factor labels. The ideal all-zero
block of the sequential circuit is the product of its two blocks:
the first block does not act on the second work register and vice versa,
so projecting both work registers to zero yields their product on the
system. Hence
$$p_0=\frac{Z}{4d(B_G^+)^2(B_A^+)^2},\qquad p_A=\frac{Z\,[1+\tfrac12\operatorname{tr}(A\rho_G)]}{4d(B_G^+)^2(B_A^+)^2}.$$
No commutation of $A$ and $G$ is needed: $F_A^2=(I+A/2)/4$ and trace
cyclicity gives
$\operatorname{tr}(e^{-G/2}F_A^2e^{-G/2})=\operatorname{tr}(F_A^2e^{-G})$.
In particular
$$p_A/p_0=1+\tfrac12\operatorname{tr}(A\rho_G)\in[1/2,3/2].$$
The normalization cancels because it is identical in numerator and
baseline, not because normalization can be discarded independently.

At least one eigenvalue of $G$ is at most two, so $Z\ge e^{-2}>1/8$.
For completeness, the exponential series gives $\exp(1)<11/4$: the terms
through degree three sum to $8/3$, and the remaining tail is at most
$(1/24)\sum_{j\ge0}5^{-j}=5/96$, whose total is $87/32<11/4$.
Thus $\exp(2)<121/16<8$. Since $e\le1/2$,
$(B_G^+)^2(B_A^+)^2\le(17/16)^4<2$. Consequently
$$p_0\ge1/(64d),\qquad p_A\ge p_0/2\ge1/(128d).$$
Strict inequalities could be retained, but these closed lower bounds suffice.
Also $G\succeq I$ implies $Z\le d/\exp(1)$; the ideal block operators
are contractions, as expected for successful blocks.

## Block error, actual floors and ratio stability

Write the ideal Gibbs and observable blocks as $D,C$ and their actual
successful blocks as $D+E_D,C+E_C$, with $\|E_D\|,\|E_C\|\le e$.
Their product error has operator norm at most
$$\|E_CD+CE_D+E_CE_D\|\le2e+e^2,$$
since $\|C\|,\|D\|\le1$. The same bound applies to the baseline. Acting
on normalized $\Phi_d$ gives the same vector bound. If $u$ is either ideal
successful vector and $v$ the actual vector, $\|u\|\le1$ and
$\|v-u\|\le2e+e^2\le(5/2)e$. Therefore
$$|\|v\|^2-\|u\|^2|\le2\|v-u\|+\|v-u\|^2\le5e+\tfrac{25}{4}e^2\le15e.$$
This deliberately loose bound avoids assuming an exact implementation of
an ideal nonunitary block. Let $q_A,q_0$ be the probabilities of the actual
finite circuits. Then $|q_s-p_s|\le\Delta=15e$ for $s=A,0$, and
$$q_A,q_0\ge1/(128d)-15\theta/(100000d)>1/(1024d).$$
Thus both calls satisfy RelProb's positive probability promise, and its
zero-detection branch cannot occur on its good event.

Put $x=p_A/p_0$ and $\kappa=\Delta/p_0\le960de\le\theta/100\le1/400$.
A direct cross multiplication, using $x\le3/2$, gives
$$|q_A/q_0-x|\le\frac{\Delta+x\Delta}{p_0-\Delta}\le\frac{(5/2)\kappa}{1-\kappa}\le3\kappa\le3\theta/100.$$
In particular $q_A/q_0<2$. On the two relative-estimate good events,
$|\widehat q_s-q_s|\le c_{\rm rel}q_s$, so $\widehat q_0>0$ and
$$\left|\frac{\widehat q_A}{\widehat q_0}-\frac{q_A}{q_0}\right|\le\frac{q_A}{q_0}\frac{2c_{\rm rel}}{1-c_{\rm rel}}\le5c_{\rm rel}=5\theta/36,$$
where $c_{\rm rel}\le1/144$. Thus the unrounded trace estimate has error
at most $2(3\theta/100+5\theta/36)<\theta/2$. Allowing $\theta/4$ final
rounding still gives less than $\theta$. Clipping cannot increase its
distance from the true trace, which lies in $[-1,1]$. RelProb's returned
probabilities and the ratio are rational; exact division with a nonzero
rational denominator followed by rational-grid rounding implements this
finite allowance. Its bit work is charged separately.

## Frozen spectral shift and coherent indexed implementation

ShiftMin is measured **once per MMW round** to choose the energy shift.
Condition on that round's good shift event and freeze $G$, its norm bound,
Fourier cutoffs, coefficient encodings, common normalizations and every
classical synthesis parameter before constructing indexed TraceMean.
An identity energy shift changes no normalized Gibbs density matrix.
Re-running or measuring ShiftMin inside the indexed sampler would produce
a different construction and is not justified by this proof. The same
frozen Gibbs block is used for every $A_i$ and for the separate scalar $C$
estimate. The latter may be measured to obtain one supplied good
$\widetilde c$ before defining the geometric oracle's region.

The finite RelProb algorithm can be implemented as a unitary score sampler:
replace each internal measurement by copying its computational-basis
outcome to a fresh retained history register, run the subsequent classical
arithmetic reversibly, and condition subsequent operations on that history.
Use a fixed worst-case finite cap, padding halted branches by identities.
Independent repetitions use fresh registers; any random coins are also
retained. Orthogonal history records prevent interference between distinct
classical branches, so measuring the final estimate has exactly the
classical adaptive RelProb output distribution. Retain every AE/QPE target,
coin, stop flag, rounded value, comparison bit and arithmetic scratch. Then
reverse the complete padded circuit, not merely the last block, to obtain
the sampler inverse. Controlled versions are implemented from supplied
controlled circuits or by controlling explicit gates, with their actual
costs. There is no inverse preparation of a normalized postselected state.

For each basis index, the two relative calls and rounding proof give a
$\theta$-good trace label with the budgeted failure probability. This is
uniform in the index because the floor and all caps are uniform. It is
not a claim that every supported coherent label is good. A robust-minimum
consumer must use its separate good-label cleaning/operator-hybrid theorem.

## Explicit implementation hybrids and costs

The $e$ block errors above compare the mathematical ideal successful blocks
with the actual finite flag circuits. RelProb estimates the latter circuits'
actual probabilities. It does not require repeating an ideal block while
charging only a single block-error term. If the implemented sampler and
controlled inverse/reflection primitives further approximate their declared
finite unitaries, let the worst-case padded RelProb circuit use at most
$L$ such elementary access slots and allocate operator error at most
$\zeta\le\delta_{\rm hyb}/(4L)$ per slot (or nonuniform errors whose sum
is at most $\delta_{\rm hyb}/4$). The telescoping product identity bounds
final state-vector error by $\sum\zeta$, and measurement total variation
by at most twice that sum, hence at most $\delta_{\rm hyb}/2$.
The same bound holds for controlled versions when the operator bound is
uniform across their controlled index blocks; inverse errors have the same
operator norm. Classical outcome-goodness therefore loses at most that
additional budget. For coherent robust minimum use, apply its operator
cleaning and entire-circuit hybrid bound with its prescribed tolerances;
a marginal outcome bound alone does not replace that hypothesis.

Let $Q_{\rm flag}$ be a declared upper cost for one complete $V_s$, its
inverse or controlled version, including $C_\Phi$, both finite blocks,
flag handling and their reversible scratch; add the declared costs of
controlled input and success reflections where they are not included.
The generic RelProb finite cap with $p_{\min}=1/(1024d)$ and
$c_{\rm rel}=\theta/36$ uses
$$\widetilde O(\sqrt d/\theta)$$
sampler-plus-inverse calls for each probability, with logarithms in $d$
and confidence. Two calls preserve this order, giving
$\widetilde O((\sqrt d/\theta)Q_{\rm flag})$ in the corresponding access
cost coordinate. Reference preparation and its inverse are invoked inside
these calls and are included, not charged only once. All controlled
reflections, QFT/AE gates, reversible rounding/comparison/division gates,
coherent history storage, measurement simulation, and any higher-precision
synthesis required by the hybrid budget are charged separately or included
explicitly in the declared primitive cost. The generic RelProb supplier
proves finite but potentially large algebraic/classical rounding costs;
this note asserts no unproved polylogarithmic bit or sparse-matrix gate
bound. In particular no sparse-access, QRAM or postselection-normalization
cost follows merely from the trace ratio.
