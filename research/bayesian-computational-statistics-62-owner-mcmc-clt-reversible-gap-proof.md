# Local reversible geometric-rate to rho-mixing proof

Prepared for the owner escalation on 2026-10-15. This is a research proposal
only. No live item, manifest, contract, native result, or run state was edited;
no tests, hashes, gates, or readiness checks were run.

## Resolution

The exact Statement of `lem-geometric-reversible-chain-rho-mixing` can be
preserved. Its current geometric-ergodicity definition supplies a common
$r\in(0,1)$ and a measurable finite envelope $M(x)$ for every state. Neither
$\pi(M)<\infty$ nor a geometric-to-drift theorem is needed. An elementary
repeated-square argument proves the stronger bound $\rho_X(n)\le r^n$.
Irreducibility, aperiodicity and Harris recurrence can remain in the Statement;
the proof does not need them after its explicit geometric bound is assumed.

## Complete elementary proof

Work over real $L^2(\pi)$ and write $\langle f,g\rangle=\pi(fg)$ and
$H=\{f\in L^2(\pi):\pi(f)=0\}$. Define $Tf=Pf$ as an almost-everywhere
class. Invariance and Jensen give
$$\|Tf\|_2^2\le\pi(Pf^2)=\pi(f^2).$$
They also give $\pi(Tf)=\pi(f)$, $T1=1$, and show that the class does not depend
on the representative: a function vanishing $\pi$-almost everywhere has
$\pi(Pf^2)=0$. The existing square-integrable kernel lemma supplies these
integrability conventions. Kernel iteration gives $T^nf=P^nf$.

Reversibility makes $T$ symmetric. For bounded measurable $f,g$, integrate
$f(x)g(y)$ against the symmetric flow measure to obtain
$$\langle f,Tg\rangle=\langle Tf,g\rangle.$$
For general $L^2$ functions this identity follows by bounded truncation and the
contraction estimate. Thus $T$ restricts to a symmetric bounded contraction on
$H$. Nothing below requires a compact operator, an eigenbasis, or even
completeness beyond the standard $L^2$ infrastructure.

For the event-supremum TV convention and bounded measurable $h$, one has
$$|P^kh(x)-\pi(h)|\le2\|h\|_\infty M(x)r^k.$$
This elementary dual estimate can either cite
`thm-total-variation-bounds-for-expectations` or be proved locally: for
$0\le a\le1$, approximate $a$ uniformly by
$2^{-q}\sum_{i=1}^{2^q}1_{\{a\ge i2^{-q}\}}$, bound each indicator integral
by TV, and pass to the limit; apply the result to
$a=(h+\|h\|_\infty)/(2\|h\|_\infty)$, separating $h=0$.

Let $C_m=\{M\le m\}$ for positive integers $m$. Let $h$ be bounded measurable
and vanish off $C_m$, and put $f=h-\pi(h)$. For every integer $k\ge1$,
selfadjointness, invariance, and $T1=1$ give
$$\|T^kf\|_2^2=\langle f,T^{2k}f\rangle=\int h(x)(P^{2k}h(x)-\pi(h))\,\pi(dx).$$
Consequently,
$$0\le\|T^kf\|_2^2\le 2\|h\|_\infty^2r^{2k}\int_{C_m}M\,d\pi\le 2m\|h\|_\infty^2r^{2k}.$$
In particular $\|T^kf\|_2\le A_fr^k$, where
$A_f=\sqrt{2m}\|h\|_\infty$ is a finite constant attached to the chosen
representation of $f$. No uniqueness of that constant is needed.

For any $u\in H$ and any integer $a\ge1$, symmetry and Cauchy–Schwarz yield
$$\|T^au\|_2^2=\langle u,T^{2a}u\rangle\le\|u\|_2\|T^{2a}u\|_2.$$
Iterating this inequality with $a=1,2,4,\ldots,2^{j-1}$ gives
$$\|Tu\|_2\le\|u\|_2^{1-2^{-j}}\|T^{2^j}u\|_2^{2^{-j}}\qquad(j\ge1).$$
Apply it to the preceding $f$. If $f=0$ the desired estimate is immediate;
otherwise its representing $h$ is nonzero, so $A_f>0$, and
$$\|Tf\|_2\le r A_f^{2^{-j}}\|f\|_2^{1-2^{-j}}\longrightarrow r\|f\|_2.$$
Thus $\|Tf\|_2\le r\|f\|_2$ for every such centered bounded function.

These functions are dense in $H$: for any $u\in H$ set
$h_m=1_{C_m}\max(-m,\min(u,m))$. Finiteness of $M$ gives $h_m\to u$
almost everywhere, and $|h_m-u|\le |u|$, so dominated convergence gives
$\|h_m-u\|_2\to0$. Cauchy–Schwarz gives $\pi(h_m)\to\pi(u)=0$, hence
$f_m=h_m-\pi(h_m)\to u$ in $L^2$. Since $T$ is continuous, the last estimate
extends to every $u\in H$. Iteration proves
$$\|T^nu\|_2\le r^n\|u\|_2\qquad(n\ge1).$$

It remains to check the actual past/future coefficient, rather than only
state-to-state correlations. Use the repository's one-sided convention:
fix $j\ge0$ and bounded centered $U,V$ measurable respectively for
$\mathcal F_j=\sigma(X_0,\ldots,X_j)$ and
$\sigma(X_{j+n},X_{j+n+1},\ldots)$. The existing bounded-future-functional
Markov theorem gives a bounded measurable $g$ such that
$$E[V\mid\mathcal F_{j+n}]=g(X_{j+n}).$$
Stationarity and conditional Jensen imply $\pi(g)=0$ and
$\|g\|_2\le\|V\|_2$. By the tower property and the iterated kernel Markov
identity,
$$E[V\mid\mathcal F_j]=P^ng(X_j).$$
Taking out the bounded known factor $U$, then using Cauchy–Schwarz and
stationarity, gives
$$|E[UV]|=|E[U P^ng(X_j)]|\le\|U\|_2\|T^ng\|_2\le r^n\|U\|_2\|V\|_2.$$
For arbitrary centered square-integrable $U,V$, truncate each variable and
recenter its truncations. These bounded centered variables stay measurable for
the same sigma-algebras and converge in $L^2$; Cauchy–Schwarz passes their
covariances and norms to the limit. Divide by the positive standard deviations
and take the defining suprema. This proves $\rho_X(n)\le r^n$, hence the
original claimed conclusion with $C=1$.

This argument never factors a conditional expectation of a past variable through
an arbitrary-state random variable. It therefore needs no new Doob–Dynkin or
regular-disintegration assumption on the state space.

For completeness, the coefficient actually equals $\|T^n|_H\|$: the preceding
argument gives the upper bound by that norm even without the rate estimate.
For the reverse inequality use $U=f(X_0)$ and $V=g(X_n)$ with $f,g\in H$.
Their covariance is $\langle f,T^ng\rangle$. For any $g$ with $T^ng\ne0$,
choose $f=T^ng/\|T^ng\|_2$ and then take the supremum over unit $g$.
If $H=\{0\}$ all these correlations vanish; the usual empty-supremum convention
for a mixing coefficient is zero, and the rate bound holds directly.

## Optional spectral-measure version

The elementary proof above is preferable because it adds no spectral supplier.
If the owner chooses a spectral proof, the dense-class estimate is unchanged.
For the scalar spectral measure $\mu_f$ of the centered selfadjoint contraction,
$$\int_{[-1,1]}|\lambda|^{2k}\,\mu_f(d\lambda)=\|T^kf\|_2^2\le A_f^2r^{2k}.$$
For each $s>r$, the mass of $\{|\lambda|\ge s\}$ is at most
$A_f^2(r/s)^{2k}$, hence zero. A countable union over rational $s>r$
gives support in $[-r,r]$. This gives $\|Tf\|_2\le r\|f\|_2$ on the same
dense set, then everywhere. There is no point spectrum assumption.

A general noncompact supplier already exists:
`thm-spectral-theorem-for-bounded-normal-operators-pvm-form`, published, with a
PVM for arbitrary bounded normal operators on arbitrary nonzero complex Hilbert
spaces. Its Statement was inspected; its proof closure was not audited here.
The compact selfadjoint spectral theorem would be insufficient. Using the PVM
route also requires the complexification/scalar spectral-integral infrastructure;
the real repeated-square proof avoids all of this.

## Actual local supplier interfaces

The minimum substantive ingredients are already present or are proved in the
argument above:

- `def-general-state-reversibility-by-symmetric-flow-measure` supplies symmetry
  of the flow measure, not a density-based reversibility condition.
- `lem-square-integrable-markov-transition-conditional-expectation` supplies the
  exceptional-set conventions and kernel $L^2$ contraction. Alternatively the
  short Jensen/invariance construction above proves it directly here.
- `thm-markov-property-for-bounded-future-path-functionals` supplies the only
  nontrivial past/future interface, valid for a general measurable state space.
- `thm-chapman-kolmogorov-equations`, `thm-tower-property-of-conditional-expectation`,
  `thm-taking-out-what-is-known`, and `thm-conditional-jensen-inequality` supply
  the iterated conditional identity and covariance bound.
- `cor-cauchy-schwarz-inequality-for-l-two`, `thm-dominated-convergence`, the
  integral linearity infrastructure and the stated $L^2$ definition supply
  the Hilbert pairing, truncation and limits. The bounded TV estimate can be
  included in the proof rather than adding a cross-batch supplier.
- AC is already in the lemma's dependency list; its axiom-use text should
  acknowledge inherited conditional-expectation/path-law interfaces. The proof
  uses no new arbitrary selections or spectral representation.

No new substantial intermediate theorem is mathematically necessary. If useful
for readability, the repeated-square dense-class principle can be extracted as
a short proved lemma, but that is an editorial choice, not a missing premise.
The original Statement need not change, so there is no statement-change-driven
consumer repair. Ordinary owner integration must still record the actual new
logical dependencies and provide the local proof rather than this research link.

## Full-text source checks and exact limitations

Retrieved the complete source PDFs directly, opened them with PyMuPDF and
inspected the relevant complete theorem arguments and their surrounding
hypotheses. The temporary downloads are outside the repository. No claim is
made to have audited unrelated parts of these books/papers.

1. Jones, *On the Markov Chain Central Limit Theorem*, 24-page PDF:
   https://arxiv.org/pdf/math/0409112 . PDF pp. 7–8 define the centered kernel
   operator, its contraction and reversibility interfaces, and state the
   geometric/reversible rho-mixing implication in Theorem 2(3). The argument
   cites Roberts–Rosenthal's nontrivial implication rather than supplying its
   proof. The extracted paragraph has a vector-norm power equality; the local
   proof above does not use or repeat that equality.
2. Roberts and Rosenthal, *Geometric ergodicity and hybrid Markov chains*,
   complete 19-page author-hosted preprint:
   https://www.probability.ca/jeff/ftpdir/hybrid.pdf . Theorem 2 and its entire
   proof occupy PDF pp. 7–10. The preprint numbers it Theorem 2; Jones refers
   to the published version as Theorem 2.1. The theorem identifies the
   reversible centered $L^2$ gap with several geometric formulations. Its
   proof of (iii) => (ii) uses the general bounded-selfadjoint spectral measure,
   Hahn decomposition and an exponential lower bound. Its final relation to
   Proposition 1 uses a drift envelope with a finite second moment, obtained
   through cited Meyn–Tweedie results. That imported drift route is unnecessary
   under the repository's explicit common-rate hypothesis, by the level-set
   proof above. This note does not claim the elementary argument is transcribed
   from Roberts–Rosenthal.
3. Geyer, *Markov Chain Monte Carlo Lecture Notes*, complete 166-page PDF:
   https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf . Sections 2.2.2 and 2.2.5
   identify kernel contraction and reversibility/selfadjointness; §4.8.2,
   printed pp. 135–136 (PDF pp. 139–140), identifies the Markov rho coefficient
   with the centered operator norm and discusses exponential decay through
   submultiplicativity. These give an independent check of the operator/mixing
   interface; the full past/future reduction is explicitly proved above.
4. Roberts and Rosenthal, *General State Space Markov Chains and MCMC
   Algorithms*, complete corrected 64-page PDF:
   https://www.probability.ca/jeff/ftpdir/probsurv.pdf . Retrieved and text
   extracted as source context. It is not needed as a proof supplier here;
   the original 1997 paper above was read for the actual gap argument.

Mathematical disposition: the reversible-gap escalation has a complete local
resolution with the approved Statement intact and without an integrable-envelope
or spectral-theorem premise. This does not resolve the separate general-chain
integrable-envelope escalation or any mixing CLT proof obligation.
