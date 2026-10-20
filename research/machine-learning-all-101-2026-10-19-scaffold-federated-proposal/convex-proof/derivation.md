# General-convex SCAFFOLD: exact bound, optimized correction, and counterexample

Proof-only proposal; no item, metadata, gate or publication changes. Read on
2026-10-19 by the delegated convex-proof agent.

## Reading evidence and scope

Read CLAUDE.md and README.md fully, the relevant schema/workflow instructions,
the complete current theorem `thm-scaffold-convex-and-nonconvex-rates`, definition
`def-scaffold-analysis-trajectory-and-errors`, all four `lem-scaffold-convex-*`
items, and `alg-scaffold`. Verified the configured compaction threshold is
500000, without exposing unrelated configuration.

Primary source: https://cs.nyu.edu/~mohri/pub/scaffold.pdf. Read complete
Theorem III (PDF page 6), Appendix E preamble/Theorem VII (pages 25–26),
complete E.1 (pages 26–31, Lemmas 10–13 with every proof), and complete E.2
(pages 31–35, Lemmas 14–17 with every proof). Local PDF SHA256:
`5b1ce1c57658d1d939ba12df0e55899f5eb395a310742bef413c2f739a3c7db2`.
The page-marked text `/tmp/ml30-scaffold.txt` SHA256 is
`a7c508b2e34f4723b89c9bc563817e6122c65ccc2fd8aac55ff4bed4243bfcc5`.
The exact text read for Theorem III is lines 691–749; the Appendix E
reading spans lines 2700–4163, including the complete E.1/E.2 sections.

The source headline literally prints `NF/S`, while Theorem VII and its
initial-potential discussion retain a control-initialization contribution.
E.1 ends by invoking Lemma 2; it provides no extra argument removing epsilon
from that initial-control contribution. The source also defines drift at
post-update points but uses query points in its proofs, and treats several
adaptive-gradient means/variances too informally. This note uses the current
query-anchor definitions and the current proved convex potential, not those
informal source substitutions.

## Exact summation and strongest simple optimization of the current potential

Write `h=tilde_eta`, `p=S/N`, and `B=19 sigma^2/(KS)`. The convex round
inequality gives, for every fixed `0<h<=1/(81 beta)`,

$$ G_R:=R^{-1}\sum_{r=0}^{R-1}\mathbb E[f(x_r)-f^\star]\le \frac{D^2}{hR}+\frac{14h C_0}{pR}+Bh. $$

Gradient-consistent initialization and convex smoothness imply
`C_0 <= 2 beta F`. Therefore, with `A=28 beta NF/S`,

$$ G_R\le\frac{D^2}{hR}+\frac{Ah}{R}+Bh. $$

For a prescribed R, the exact minimizer of this right side is

$$ h_R=\min\left\{\frac1{81\beta},\frac{D}{\sqrt{A+BR}}\right\}, $$

with the usual zero-denominator convention. In the unconstrained regime the
bound is `2D sqrt(A+BR)/R`. In the constrained regime it is
`81 beta D^2/R + A/(81 beta R) + B/(81 beta)`.

For a transparent target-accuracy version, when `D>0`, choose

$$ h=\min\left\{\frac1{81\beta},\frac{D}{\sqrt A},\frac{\epsilon}{3B}\right\},\qquad R\ge\max\left\{1,\frac{6D^2}{h\epsilon}\right\}, $$

omitting zero-denominator restrictions. Then `Ah<=D^2/h`, the initial term
is at most epsilon/3, and `Bh<=epsilon/3`. This proves

$$ R=O\left(1+\frac{\sigma^2D^2}{KS\epsilon^2}+\frac{\beta D^2}{\epsilon}+\frac{D\sqrt{\beta NF/S}}{\epsilon}\right). $$

This preserves more than merely inserting a missing epsilon in the headline:
it optimizes the initialization contribution. One can retain the exact
`C_0` instead, replacing the square-root numerator by `D sqrt(N C_0/S)`.
The simpler fixed maximal-step argument gives the valid but potentially
weaker `NF/(S epsilon)` contribution. If `D=0`, returning x0 already solves
the objective problem. The finite-R bound remains meaningful for noisy
trajectories. All constants here follow from the current recurrence; no new
convex supplier lemma is required.

## Counterexample to the literal current uniform-output headline

The current theorem explicitly returns a uniformly sampled server iterate
from `x0,...,x_{R-1}` and chooses a single constant local step. Under that
literal contract, the claimed `NF/S` headline is false, even with exact
gradient-consistent initialization and deterministic identical clients.
The following proof covers **every** admissible constant step, not merely
the maximal step.

Let `N>=2`, `d=K=S=1`, `eta_g=1`, `x0=1`, and

$$ f_i(x)=\frac\beta2x^2\quad(1\le i\le N),\qquad g_i(x)=\beta x,\qquad c_i^0=\beta,\quad c^0=\beta. $$

Thus each client is convex and beta-smooth (indeed beta-strongly convex),
`sigma=0`, `x*=0`, `f*=0`, `D=1`, `F=beta/2`, and every stated sampling,
unbiasedness, fresh-draw, integrability and initialization hypothesis holds.
In each round choose one independent uniform client. Put
`t=beta eta_l in (0,1/81]` and `a_i^r=c_i^r/beta`, `m_r=N^{-1}sum_i a_i^r`.
Option II becomes exactly

$$ x_{r+1}=(1-t)x_r+t(a_{I_r}^r-m_r),\qquad a_{I_r}^{r+1}=x_r,\qquad a_j^{r+1}=a_j^r\ (j\ne I_r). $$

Define `z_r=E x_r^2` and
`V_r=E[N^{-1}sum_i(a_i^r-m_r)^2]`. Conditional centering yields

$$ \mathbb E x_r=(1-t)^r,\qquad z_{r+1}=(1-t)^2z_r+t^2 V_r. $$

The uniform-output gap equals `F R^{-1}sum_{r<R} z_r`.

### Bias lower bound

For `0<t<=1/81`, let `L=floor(1/(4t))`. Then `L>=1/(8t)`.
For `r<L`, `(1-t)^{2r}>=1-2rt>=1/2` by Bernoulli's inequality. Hence

$$ \frac1R\sum_{r<R}z_r\ge\min\left\{\frac12,\frac1{16tR}\right\}. $$

### Stale-table variance lower bound

After r updates at least `N-r` table entries still equal 1. For a fixed
realized table, the pairwise variance identity gives

$$ \frac1N\sum_i(a_i^r-m_r)^2=\frac1{2N^2}\sum_{i,j}(a_i^r-a_j^r)^2\ge\frac{N-r}{N}\frac1N\sum_i(a_i^r-1)^2. $$

For any fixed client i, the event that its last update before r occurred
at s has probability `N^{-1}(1-1/N)^{r-1-s}`. The current client sample
and all future client samples are independent of x_s, so conditional on
that event its stored value is x_s with the unconditional law of x_s.
Consequently Jensen gives

$$ V_r\ge\left(1-\frac rN\right)\frac1N\sum_{s=0}^{r-1}\left(1-\frac1N\right)^{r-1-s}\left(1-(1-t)^s\right)^2. $$

If `2 ceil(1/t)<=r<=N/2`, restrict to `s>=ceil(1/t)`.
There are at least r/2 such indices, each squared factor is at least 1/4
since `(1-t)^s<=e^{-1}<1/2`, and each geometric factor is at least 1/2
by Bernoulli. The prefactor is also at least 1/2. Therefore

$$ V_r\ge\frac r{32N}. $$

### Combined lower bound, uniform in the admissible step

Assume `R<=N/2` and write `q=tR`. If `q<16`, the bias bound is at least
1/256. If `q>=16`, then `R>=1296`. Take integer
`r in [ceil(R/2),floor(3R/4)]`; there are at least R/8 choices, all satisfy
`r>=2 ceil(1/t)`, and `V_r>=R/(96N)`. Each contribution `t^2 V_r` to
`z_{r+1}` persists for at least `floor(1/(4t))` summands before time R;
their geometric weights sum to at least `1/(16t)` by the same Bernoulli
estimate used above. Summing the nonnegative contributions yields

$$ \frac1R\sum_{r<R}z_r\ge\frac{q}{12288N}. $$

Together with the bias lower bound `1/(16q)`, this implies

$$ \boxed{\quad \mathbb E[f(x_J)-f^\star]\ge\frac{F}{1024\sqrt N}\quad\text{for every }R\le N/2,\ 0<t\le1/81,\ J\text{ uniform on }\{0,\ldots,R-1\}.\quad} $$

Indeed the geometric mean of `1/(16q)` and `q/(12288N)` exceeds
`1/(1024 sqrt N)`. The q<16 case also satisfies this bound.

Finally set `beta=N^{-2}` and `epsilon=F N^{-3/4}`. The claimed sufficient
round expression becomes

$$ \frac{\beta D^2}{\epsilon}+NF=2N^{3/4}+\frac1{2N}. $$

For every universal big-O constant C this gives `R<N/2` for sufficiently
large N, whereas the boxed lower bound exceeds epsilon when
`N^{1/4}>1024`. Any fixed powers of logarithms allowed by the source's
tilde-O also remain `o(N)`. Thus no admissible **constant** stepsize can
prove the stated uniform-output headline. This is an analytic
counterexample; numerical experiments are unnecessary for its proof.

## Output and repair boundaries

The counterexample refutes exactly the present random uniform server output.
It does not refute selecting a suffix iterate, geometric weights, the last
iterate, or the arithmetic average of the iterates. Such an output change is
a statement/approved-interface change and requires its own proof and owner
reconciliation; it is not a missing algebraic step in the present proof.
The source permits unspecified weights in its appendix, so this note does
not claim to refute every possible interpretation of the source headline.
Nor does the counterexample cover time-varying local steps, which the
current theorem and its exact finite-R potential do not specify.

Suggested concrete repair, subject to owner reconciliation: retain the
present exact finite-R inequality and uniform output; replace the false
round headline with the optimized bound above, including its explicit
stepsize choice. Preserve the strongly convex and nonconvex branches, and
cross-check consumers of the changed general-convex statement. Do not
silently replace the approved headline: retain this counterexample and the
source-versus-literal-output distinction as the reason for reconciliation.
