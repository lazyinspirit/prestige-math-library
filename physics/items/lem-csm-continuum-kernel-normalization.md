---
id: lem-csm-continuum-kernel-normalization
kind: lemma
title: Stable finite-range continuum specification normalization and consistency
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-continuum-dlr-kernels
  - def-csm-stable-superstable-continuum-interaction
  - def-tdmath-poisson-configuration-reference
  - def-axiom-of-choice
  - thm-tdmath-poisson-reference-count-properties
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - def-factorial-and-falling-factorial
  - def-multinomial-coefficient
  - thm-multinomial-theorem
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-tdmath-monotone-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dynkin-pi-lambda
dependency_roles:
  def-csm-continuum-dlr-kernels: mathematical-premise
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  thm-nonnegative-measurable-functions-admit-increasing-simple-approximations: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-multinomial-coefficient: mathematical-premise
  thm-multinomial-theorem: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-tdmath-monotone-convergence: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sabine Jansen, Gibbsian Point Processes, complete author-hosted lecture notes"
      url: "https://www.math.lmu.de/~jansen/gibbspp.pdf"
      locator: "Sections 3.2–3.3, PDF pp.47–49, and 5.1–5.2, PDF pp.71–73: boundary energy, finite-volume partition kernels, their nested-region consistency proof, and the DLR conditional-law identity."
    - title: "David Dereudre, Introduction to the theory of Gibbs point processes, complete author-hosted mini-course notes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Sections 1.3–1.4 and 2.3–2.4, PDF pp.10–13 and 19–21: finite-volume normalization, local conditional energy, and finite/infinite-volume DLR equations."
---

## Statement

Assume the Axiom of Choice and fix $d\geq1$. For every bounded Borel set $D\subset\mathbb R^d$ and $n\in\mathbb N_0$, the unit-intensity Poisson law restricted to $N_D=n$, represented on ordered simple tuples in $D^n$ before forgetting labels, is the pushforward of $e^{-|D|}/n!$ times product Lebesgue measure. Now fix a nonempty bounded Borel region $\Lambda\subset\mathbb R^d$, a stable even Borel pair potential $\phi$ with finite range $R>0$ as in [[def-csm-continuum-dlr-kernels]], a locally finite exterior configuration $\eta\subset\Lambda^c$, and $z,\beta>0$. Let $m=N_{\Lambda^R}(\eta)$, with $\Lambda^R=\{y:\operatorname{dist}_2(y,\Lambda)\leq R\}$. Then the partition integral in [[def-csm-continuum-dlr-kernels]] obeys
$$e^{-|\Lambda|}\leq Z_\Lambda^\eta(z,\beta)\leq e^{-|\Lambda|}\exp\!\left(z|\Lambda|e^{\beta B(1+2m)}\right)<\infty.$$
Consequently $\gamma_\Lambda^\eta$ is a Borel probability kernel in $\eta$. For every nonempty bounded Borel region $\Delta\subseteq\Lambda$, the extended kernels satisfy $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$, and their fixed measures are exactly the probability laws whose conditional distribution inside each $\Lambda$, given the exterior, is $\gamma_\Lambda^\eta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the dimension, region, stable finite-range potential, exterior configuration, activity, inverse-energy parameter, and reference conventions stated above; for the fixed-measure equivalence let $\mu$ be any probability measure on configuration space.

[F1] [[def-csm-continuum-dlr-kernels]] defines the simple locally finite configurations, $H_\Lambda(\omega\mid\eta)$, $Z_\Lambda^\eta$, $\gamma_\Lambda^\eta$, and the DLR fixed-kernel identity.

[F2] The current draft [[def-csm-stable-superstable-continuum-interaction]] defines stability by $U_N(X)\geq-BN$ for a finite $B\geq0$, every finite position list $X$, and every $N$. Enumerating the $n$ distinct points of $\omega$ gives $U_\phi(\omega)\geq-Bn$; applying the same bound to any two-point list gives $\phi(x-y)\geq-2B$ for every nonzero separation. This carrier is a definition, so no proof-status claim is used.

[F3] [[def-tdmath-poisson-configuration-reference]] constructs $Q$ as a product of independent half-open unit-cell Poisson configurations, each of Lebesgue volume one. In each cell the count has mass $e^{-1}/n!$, and conditional on that count the point coordinates are independent and uniform before sorting. The configuration sigma-algebra is generated by bounded-set counts.

[F4] [[thm-tdmath-poisson-reference-count-properties]] states that $N_\Lambda$ is Poisson with mean $|\Lambda|$, disjoint bounded restrictions are independent, and
$$E_{Q_\Lambda}e^{aN_\Lambda}=\exp\!\left(|\Lambda|(e^a-1)\right).$$

[F5] [[def-factorial-and-falling-factorial]] defines the finite factorials; [[def-multinomial-coefficient]] defines the number of label allocations, and [[thm-multinomial-theorem]] proves that the number with counts $n_i$ summing to $n$ is $n!/\prod_i n_i!$.

[F6] [[def-real-exponential-function-and-e]] defines $\exp(t)=\sum_{m\geq0}t^m/m!$ for real $t$, and [[thm-exponential-addition-formula]] gives $\exp(s+t)=\exp(s)\exp(t)$.

[F7] [[thm-tdmath-monotone-convergence]] permits increasing nonnegative partial sums and integrals to pass to their pointwise limit.

[F8] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] permits nonnegative integration in either order and makes parameter integrals of nonnegative jointly measurable functions measurable. For the exterior parameter below, apply it to the finite measures $Q_\Lambda$ and $Q$ restricted to the measurable exterior subspace $\{\eta:N_\Lambda(\eta)=0\}$.

[F9] [[thm-dynkin-pi-lambda]] gives the pi-lambda theorem: a lambda-system containing a generating pi-system contains its generated sigma-algebra.

[F10] [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]]: every nonnegative measurable function is the increasing pointwise limit of simple measurable functions.

## Proof

1.1 Let $D$ be any bounded Borel set. It meets finitely many half-open unit cells $C_i$. Put $A_i=D\cap C_i$ and $B_i=C_i\setminus A_i$. Conditional on $r+s$ points in a cell, the iid uniform-position rule in [F3] gives the labelled sector density $e^{-1}/(r+s)!$. Splitting the labels between $A_i$ and $B_i$ yields $(r+s)!/(r!s!)$ assignments by [F5]; integrating the $s$ outside coordinates and summing over $s$ gives
$$\frac{e^{-1}}{r!}\sum_{s=0}^\infty\frac{|B_i|^s}{s!}\,dx_1\cdots dx_r=\frac{e^{-|A_i|}}{r!}\,dx_1\cdots dx_r,$$
by [F6], since $|A_i|+|B_i|=1$. Tonelli and monotone convergence [F7, F8] justify the nonnegative sector sum and integral. The cells are independent by [F3]. For total count $n$ across their finitely many pieces, the label assignments for counts $(r_i)$ number $n!/\prod_i r_i!$ by [F5]; partitioning $D^n$ by these assignments shows that the $n$-point sector on $D$ has density $e^{-|D|}/n!$ against product Lebesgue measure. The collision diagonals have product measure zero because Lebesgue measure has no atoms; this is also the simplicity convention in [F3]. Thus the density pushes to the sector on unordered simple configurations. Zero-volume pieces contribute no points. [F3, F5, F6, F7, F8, given, construct]

1.2 Put $\Lambda^R=\{y:\operatorname{dist}_2(y,\Lambda)\leq R\}$. The distance map is $1$-Lipschitz, so $\Lambda^R$ is a bounded Borel set. For bounded Borel $S,T\subseteq\mathbb R^d$, the product sigma-algebra generated by Borel rectangles in $S\times T$ is its relative Euclidean Borel sigma-algebra: relative open rectangles from countable Euclidean bases form a countable base for $S\times T$, so every open set is a countable union of such rectangles; conversely Borel rectangles are Borel because coordinate projections are continuous. The map $(x,y)\mapsto x-y$ is continuous, and for every Borel $E\subseteq\mathbb R\cup\{+\infty\}$, the preimage of $E$ under $(x,y)\mapsto\phi(x-y)$ is the continuous preimage of the Borel set $\phi^{-1}(E)$. Hence $f(x,y)=\phi(x-y)$ is Borel on these products and on their off-diagonal Borel subspaces. [F2]

2.1 If $\omega$ has $n$ points, [F2] gives its internal energy at least $-Bn$ and pair potential at least $-2B$ at every distinct separation. There are at most $mn$ interior-to-exterior pairs in $H_\Lambda$, so $H_\Lambda(\omega\mid\eta)\geq-B(1+2m)n$. The empty configuration has $H_\Lambda(\varnothing\mid\eta)=0$ and $Q_\Lambda(\{\varnothing\})=e^{-|\Lambda|}$, proving the lower bound. The sector density from step 1.1 gives
$$Z_\Lambda^\eta\leq e^{-|\Lambda|}\sum_{n=0}^\infty\frac{\left(z|\Lambda|e^{\beta B(1+2m)}\right)^n}{n!} =e^{-|\Lambda|}\exp\!\left(z|\Lambda|e^{\beta B(1+2m)}\right)<\infty.$$ [F1, F2, step 1.1, algebra]

2.2 Define $\nu_\omega^{\rm int}(E)=\sum_{x,y\in\omega\cap\Lambda,\ x\ne y}1_E(x,y)$ for Borel $E\subseteq(\Lambda\times\Lambda)\setminus\{(x,x):x\in\Lambda\}$, and define $\nu_{\omega,\eta}^{\rm bd}(E)=\sum_{x\in\omega\cap\Lambda,\ y\in\eta\cap\Lambda^R}1_E(x,y)$ for Borel $E\subseteq(\Lambda\times\Lambda^R)\setminus\{(x,x):x\in\Lambda\cap\Lambda^R\}$. On a restricted rectangle $(A_1\times A_2)$, the first measure evaluates to $N_{A_1}(\omega)N_{A_2}(\omega)-N_{A_1\cap A_2}(\omega)$ for Borel $A_1,A_2\subseteq\Lambda$, measurable by [F3]; the second evaluates to $N_A(\omega)N_C(\eta)$ for Borel $A\subseteq\Lambda$, $C\subseteq\Lambda^R$, jointly measurable in $(\omega,\eta)$. These are finite measures: their total masses are respectively $n(n-1)$ and $nN_{\Lambda^R}(\eta)$, where $n=N_\Lambda(\omega)$. For either family, the sets whose pair-count evaluations are measurable form a lambda-system: the whole space has measurable total mass, complements subtract from that finite mass, and disjoint unions give pointwise limits of measurable partial sums. Restricted Borel rectangles form a pi-system generating each off-diagonal product Borel sigma-algebra, so [F9] gives measurability of the pair-count evaluations on every Borel subset. By stability on two-point lists [F2], the shifted Borel function $f+2B$ is nonnegative on both off-diagonal pair spaces. Apply [F10] there to obtain increasing nonnegative simple Borel functions converging to $f+2B$. Each simple-function integral is a finite linear combination of the measurable pair-count evaluations, so its pointwise limit, the integral of $f+2B$, is measurable in $\omega$ or in $(\omega,\eta)$ as appropriate. Subtracting $2B$ times the measurable total pair count gives the signed pair integral without losing measurability; the subtraction is of a finite real quantity, and a value $+\infty$ remains $+\infty$. Evenness makes the internal unordered-pair energy half its ordered-pair integral. Thus $H_\Lambda(\omega\mid\eta)$ and $g(\omega,\eta)=z^{N_\Lambda(\omega)}e^{-\beta H_\Lambda(\omega\mid\eta)}$ are jointly measurable. [F2, F3, F9, F10, step 1.2]

3.1 The exterior subspace $\{\eta:N_\Lambda(\eta)=0\}$ is measurable by [F3], and its restriction of $Q$ is a finite measure; together with the probability $Q_\Lambda$, this permits Tonelli [F8] for each map $\eta\mapsto\int 1_C(\omega)g(\omega,\eta)Q_\Lambda(d\omega)$, where $C$ is a measurable interior event. Taking $C$ to be the whole space shows $Z_\Lambda^\eta$ is measurable. Step 2.1 gives $0<Z_\Lambda^\eta<\infty$, so division defines a probability and makes $\eta\mapsto\gamma_\Lambda^\eta(C)$ measurable for every $C$. This is the probability-kernel condition. [F3, F8, step 2.1, step 2.2]

4.1 Under $Q_\Lambda$, the restrictions to disjoint $\Delta$ and $\Lambda\setminus\Delta$ are independent by [F4]. Write an interior configuration as $\omega_\Delta\cup\zeta$, with $\zeta\subseteq\Lambda\setminus\Delta$. Every finite pair term in $H_\Lambda(\omega_\Delta\cup\zeta\mid\eta)$ either touches $\Delta$, in which case it is a term of $H_\Delta(\omega_\Delta\mid\zeta\cup\eta)$, or does not touch $\Delta$, in which case it depends only on $\zeta,\eta$. Likewise $z^{N_\Lambda}=z^{N_\Delta(\omega_\Delta)}z^{N_{\Lambda\setminus\Delta}(\zeta)}$. Thus, for fixed $\zeta,\eta$, the conditional density of $\omega_\Delta$ under $\gamma_\Lambda$ is proportional to $z^{N_\Delta(\omega_\Delta)}e^{-\beta H_\Delta(\omega_\Delta\mid\zeta\cup\eta)}$ relative to $Q_\Delta$; its normalizer is finite and positive by step 2.1. It is exactly $\gamma_\Delta^{\zeta\cup\eta}$, proving $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$ after nonnegative iterated integration over $\zeta$ by [F8]. [F1, F4, F8, step 2.1, step 3.1, algebra]

4.2 The extended kernel leaves the exterior fixed. For an interior event $A$ and exterior event $E$, apply $\mu\gamma_\Lambda=\mu$ to the full-configuration test $1_A(\eta_\Lambda)1_E(\eta_{\Lambda^c})$. This gives
$$\int 1_E(\eta_{\Lambda^c})1_A(\eta_\Lambda)\,\mu(d\eta)=\int 1_E(\eta_{\Lambda^c})\gamma_\Lambda^\eta(A)\,\mu(d\eta)$$
for every exterior event $E$. This is the defining conditional-expectation identity, so $\gamma_\Lambda^\eta$ is a version of the conditional interior law given the exterior. Conversely, if those conditional identities hold, the probability measures $\mu\gamma_\Lambda$ and $\mu$ agree on every rectangle generated by an interior and an exterior event. Such rectangles form a pi-system and generate the full configuration sigma-algebra because each bounded-set count splits into its parts in $\Lambda$ and $\Lambda^c$ by [F3]. The sets on which the two probability measures agree form a lambda-system; [F9] therefore gives $\mu\gamma_\Lambda=\mu$. This proves the stated equivalence. [F1, F3, F9, step 3.1]

5.1 Steps 2.1, 3.1, 4.1, and 4.2 establish, respectively, finite positive normalization, Borel-kernel measurability, specification consistency, and the DLR conditional-law interpretation. No infinite-volume existence, uniqueness, or minimizer-identification claim was used. [step 2.1, step 3.1, step 4.1, step 4.2] ∎
