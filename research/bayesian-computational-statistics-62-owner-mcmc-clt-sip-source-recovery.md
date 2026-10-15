# SIP source recovery and the all-moment deterministic-clock route

2026-10-15. Research only. This note supplements, and does not overwrite, the
sibling-owned `bayesian-computational-statistics-62-owner-mcmc-clt-sip-proof.md`.
No live items, manifests, contracts, metadata, hashes, checks or run state were
changed. The requested complete local SIP proof is **not completed** here.
A newer actual full-text source establishes the desired unrestricted moment
range, but its imported quantitative coupling inputs remain local obligations.

## New complete full-text source

Elena Bashtova and Alexey Shashkin, *Strong Gaussian approximation for cumulative
processes with heavy tails*, arXiv:2007.15481v1, 29 July 2020:
https://arxiv.org/pdf/2007.15481 . Retrieved the actual ten-page PDF and read its
full text, including the complete proof on pp. 3–9 and bibliography pp. 9–10.

Condition (A), p. 2, requires iid **whole regenerative cycles**, including each
length and within-cycle reward path. Condition (Bp) requires, for a fixed
$p>2$, $E\tau_1^p<\infty$ and $E\eta_1^p<\infty$, where $\eta_1$ is the
maximum magnitude of a partial reward sum in a cycle. Theorem 1 gives
$$\sup_{u\le t}|S(u)-\kappa u-\sigma W_u|=o(t^{1/p})\quad\text{a.s.}$$
There is no $p\le4$ restriction. Its variance is
$$\sigma^2=\frac{\operatorname{Var}(\xi_1-\kappa\tau_1)}{E\tau_1},\qquad \kappa=\frac{E\xi_1}{E\tau_1}.$$
Thus, once genuine iid cycles with the required moments have been constructed,
the original SIP's $O(n^{1/p}\log n)$ rate is supported by this newer theorem,
even for $p>4$. This is evidence of an established theorem, **not** a local
proof or permission to use an unproved external supplier.

The companion actual fifteen-page PDF was also retrieved:
Bashtova–Shashkin, *Strong Gaussian approximation for cumulative processes*,
https://arxiv.org/pdf/2006.09583 . Read the definitions/main theorem and the
complete Lemmas 2–4 on PDF pp. 6–7, and the surrounding decomposition on pp. 7–8.
The heavy-tail proof uses these lemmas for its Poissonized Gaussian construction.

This changes the disposition of the unrestricted-moment claim: there is a
confirmed gap in the **original cited proof route**, but no confirmed false
mathematical rate. The newer theorem is stronger than the requested rate at
the regenerative-process level.

## What the new proof actually imports

Theorem 1 is not a self-contained proof from elementary probability. Its first
step, equation (6), invokes finite-moment vector strong approximation, citing
Berger's 1982 thesis, Einmahl (1989) and Zaitsev's 2013 survey. For centered tour
reward $\xi$ it couples the iid two-dimensional vectors
$$(\xi_k-\beta\tau_k+\beta\mu,\tau_k-\mu),\qquad \beta=\frac{\operatorname{Cov}(\xi,\tau)}{\operatorname{Var}(\tau)},\quad \mu=E\tau,$$
to two independent Brownian motions with uniform almost-sure
$o(t^{1/p})$ errors. This finite-moment **joint** approximation is an essential
missing local theorem; scalar reward approximation is insufficient.

The rest also has real imported content:

- Equation (8) constructs a Poisson clock close to the length-sum process,
  using the companion paper's formula (5), itself built from exponential-moment
  strong approximation. It is not an elementary consequence of a CLT.
- Equations (10)–(11) invoke Csörgő–Horváth–Steinebach (1987), Theorems 3.2 and
  4.1, for the simultaneous inverse-renewal approximations and comparison.
- Equation (14) invokes the companion's Lemmas 2–3, whose nontrivial
  Gaussian/Poisson composition construction follows Merlevède–Rio (2015),
  Lemma 2.4. The companion displays a Haar-type construction, but explicitly
  delegates its accuracy estimates to that source.
- The almost-sure final remainder estimates use Brownian short-interval
  bounds. Those bounds can be proved directly by the reflection estimate,
  a deterministic covering and dyadic Borel–Cantelli, so they do not require
  importing a Csörgő–Révész theorem.

Consequently neither quoting Theorem 1 nor reproducing only its final algebra
would satisfy the requirement of a complete local proof. The above first three
quantitative coupling packages must be proved, not merely listed as citations.
None was proved during this source-recovery branch.

## Fully explicit conditional calendar-time calculation

This records exactly what the deep coupling packages must supply, and completes
the elementary remaining calculation. It is conditional evidence, not a fallback
proof of the full SIP.

Suppose $(\tau_k,\xi_k,\text{cycle path}_k)$ are iid, $\tau_k\ge1$,
$E\xi_k=0$, and the preceding $p$-moment conditions hold. Write
$T_k=\sum_{i\le k}\tau_i$, $m(t)=\max\{k:T_k\le t\}$, and suppose first that
$s^2=\operatorname{Var}(\tau)>0$. Put
$$\beta=\frac{\operatorname{Cov}(\xi,\tau)}{s^2},\quad v^2=\operatorname{Var}(\xi-\beta\tau),\quad \gamma=\frac{s^2}{\mu},\quad\lambda=\frac{\mu^2}{s^2}.$$
Thus $\lambda\gamma=\mu$. Assume a joint construction supplies independent
standard Brownian motions $B,\widetilde B$ with
$$\max_{k\le t}|S(T_k)-\beta T_k+\beta\mu k-vB_k|=o(t^{1/p}),$$
$$\max_{k\le t}|T_k-\mu k-s\widetilde B_k|=o(t^{1/p}).$$
Assume also that the Poisson/inverse/composition construction supplies a
rate-$\lambda$ Poisson process $N$, $y(u)=\inf\{z:N(z)>u/\gamma\}$,
Brownian motions $\widetilde W,W^*$, with $W^*$ independent of
$\widetilde W$, and the simultaneous bounds
$$\sup_{u\le t}|\gamma N(u)-T_{\lfloor u\rfloor}|=o(t^{1/p}),\qquad \sup_{u\le t}|m(u)-y(u)|=o(t^{1/p}),$$
$$\sup_{u\le t}\left|y(u)-\frac{u}{\mu}-\frac{\widetilde W_u}{\lambda\sqrt\gamma}\right|=o(t^{1/p}),\qquad \sup_{u\le t}\left|B_u-\lambda^{-1/2}W^*_{N(u)}\right|=O(\log t).$$
The variables $y(u)$ are real, $|N(y(u))-u/\gamma|\le1$, and the ordinary
strong laws give $m(t),y(t)=O(t)$ almost surely. These are precisely the
substantial inputs, not claims proved in this note.

Define
$$G(u)=\frac{v}{\sqrt\lambda}W^*_{u/\gamma}-\frac{\beta\mu}{\lambda\sqrt\gamma}\widetilde W_u.$$
It is a Brownian motion scaled by $\sigma$, since the two terms are independent
Brownian motions and
$$\frac{v^2}{\lambda\gamma}+\frac{\beta^2\mu^2}{\lambda^2\gamma}=\frac{v^2+\beta^2s^2}{\mu}=\frac{E\xi^2}{\mu}=\sigma^2.$$
If $\sigma=0$, then $G=0$ and an independent standard Brownian motion may be
adjoined as its unused coefficient. Thus this Gaussian construction naturally
includes the zero-variance case.

With $y=y(u)$, expand exactly
$$S(u)-G(u)=\sum_{q=1}^8\Phi_q(u),$$
where
$$\Phi_1=S(u)-S(T_{m(u)}),\qquad \Phi_2=S(T_{m(u)})-S(T_{\lfloor y\rfloor}),$$
$$\Phi_3=S(T_{\lfloor y\rfloor})-\beta T_{\lfloor y\rfloor}+\beta\mu y-vB_y,$$
$$\Phi_4=\beta(T_{\lfloor y\rfloor}-\gamma N(y)),\qquad \Phi_5=-\beta\mu\left(y-\frac{u}{\mu}-\frac{\widetilde W_u}{\lambda\sqrt\gamma}\right),$$
$$\Phi_6=v(B_y-\lambda^{-1/2}W^*_{N(y)}),\qquad \Phi_7=\lambda^{-1/2}v(W^*_{N(y)}-W^*_{u/\gamma}),$$
$$\Phi_8=\beta(\gamma N(y)-u).$$
The eighth term is uniformly bounded by $|\beta|\gamma$. The displayed deep
inputs bound terms 3–6 by $o(t^{1/p})$ uniformly over $u\le t$, after absorbing
the within-unit Brownian increments and bounded $\beta\mu(y-\lfloor y\rfloor)$
in term 3. Term 7 is also $o(t^{1/p})$, because its Brownian arguments differ
by at most one.

Here is a direct uniform Brownian estimate sufficient for these assertions and
term 2. For a standard Brownian motion $Z$, reflection and a deterministic
cover of $[0,C2^j]$ by intervals of length $h_j=2^{j/p}$ imply
$$\max_{\substack{a,b\le C2^j\\|a-b|\le h_j}}|Z_a-Z_b|=O(\sqrt{h_jj})=o(2^{j/p})\quad\text{a.s.}$$
Indeed, put a grid of spacing $h_j$. Every interval of length at most $h_j$
is contained in one of at most $C2^j/h_j+2$ overlapping intervals of length
$2h_j$. Reflection bounds each oscillation tail at $K\sqrt{h_jj}$ by
$4\exp(-cK^2j)$ for an absolute $c>0$; choose $K$ large enough so the union
bound is summable over $j$. Borel–Cantelli proves the estimate. Taking grid
spacing one similarly bounds all within-unit oscillations by $O(\sqrt j)$.
No independence of the random arguments and the Brownian motion is needed,
because these are uniform sample-path estimates over deterministic intervals.

By the first two joint approximations,
$$S(T_k)=vB_k+\beta s\widetilde B_k+o(t^{1/p})\quad\text{uniformly for }k\le Ct.$$
The inverse comparison implies $|m(u)-\lfloor y(u)\rfloor|\le t^{1/p}$
eventually, uniformly for $u\le t$. The just-proved Brownian short-interval
estimate therefore makes $\sup_{u\le t}|\Phi_2(u)|=o(t^{1/p})$.

Finally $|\Phi_1(u)|\le\eta_{m(u)+1}$. If $E\eta^p<\infty$, Tonelli gives
$\sum_kP(\eta_k>\varepsilon k^{1/p})<\infty$ for every $\varepsilon>0$;
hence $\eta_k/k^{1/p}\to0$ by Borel–Cantelli, and therefore
$\max_{k\le Ct}\eta_k=o(t^{1/p})$ by splitting the maximum at a fixed finite
index and letting that index tend to infinity. This bounds term 1. All eight
terms are now controlled, and the conditional deterministic-clock conclusion
follows. The case $s^2=0$ has deterministic cycle lengths and reduces directly
to the scalar iid finite-$p$ strong approximation plus this same within-cycle
maximum estimate; that scalar strong approximation is still a deep input.

This calculation also corrects possible transcription ambiguity in the source's
last bounded term: the identity needed is $\gamma N(y(u))-u$, equal to
$\gamma(\lfloor u/\gamma\rfloor+1)-u$ with the stated strict inverse convention.

## Original Csáki–Csörgő recovery attempts and authoritative limitation

The original article was **not** recovered. Its theorem/proof was not read.
The following actual author-hosted resources were recovered and inspected:

- https://users.renyi.hu/~csaki/ : Csáki's homepage.
- https://users.renyi.hu/~csaki/csakip4.dvi and the actual publication-list PDF
  https://users.renyi.hu/~csaki/csakip4.pdf : publication list, not article text.
- https://users.renyi.hu/~csaki/preprints.html : preprints begin in 1998;
  no 1995 additive-functionals manuscript is linked.
- http://lrsp.carleton.ca/directors/csorgo/ : genuine Carleton LRSP author
  profile, research list and links; inspected its actual outgoing links.
  Its recent-research list does not supply the requested 1995 article.

The `people.math.carleton.ca`, `math.carleton.ca` and `www.math.carleton.ca`
`/~mcsorgo/` variants returned HTTP 403. Exact DOI and exact-title search
results exposed the Springer paywall but no actual article PDF. The encoded
Springer PDF URL and `?pdf=button` variant returned article **HTML**, not a PDF:
https://link.springer.com/content/pdf/10.1007%2FBF02410117.pdf . They cannot be
recorded as recovered full text. No messages were sent to authors.

Independently read the complete introductory recollection on PDF pp. 3–4 of
Merlevède–Rio, *Strong approximation for additive functionals of geometrically
ergodic Markov chains*, full 28-page HAL PDF:
https://hal.science/hal-01044508v1/file/MarkovKMT15julysubmitted.pdf . It explicitly
states the Csáki–Csörgő result for $p\in(2,4]$ and says, verbatim,
"However this result has not been extended to the case p > 4." This confirms
that the old Csáki–Csörgő citation does not justify unrestricted $p>4$ merely
by improving the cycle moment. It does not disprove the later all-$p$ result
above or imply that the original library SIP must be narrowed.

## Regeneration compatibility still requires proof

Read the owner's complete geometric-envelope research proposal. Its return-time
construction splits an **m-skeleton on a restricted countably generated
sigma-field**. Its exponential return and occupation conclusions are useful,
but do not themselves establish the whole iid original-step reward cycles in
Condition (A). In particular, the intermediate original-step rewards in a
skeleton block cannot simply be attached as independent marks: their joint
law can depend on both block endpoints, and one endpoint is also the next
cycle's starting state. A rigorous bridge/reward-cycle construction, or a proved
one-dependent-cycle extension, remains necessary. The restricted sigma-field
must include the observable's level sets as well as the original envelope.

No authoritative counterexample to the desired SIP rate was found. The precise
remaining authoring obligations are (i) correct reward regeneration, (ii) the
finite-$p$ joint iid strong approximation, (iii) Poisson/inverse/Gaussian
composition coupling with its marginal and independence properties, and
(iv) the already-identified occupation/variance and arbitrary-start transfer.
The elementary calendar-time remainder argument is completed above conditional
on those substantive inputs; the full local SIP remains unresolved.
