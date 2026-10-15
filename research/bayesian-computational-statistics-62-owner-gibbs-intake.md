# Gibbs missing-supplier intake — cycle 1

The reported BCS-29/BCS-30 absence is not supported by the current disk state. Both A/B page pairs, all their listed item bodies, and their manifests exist. The page chain Gibbs → Metropolis–Hastings → general-state reversibility is intact. No missing mathematical lemma or source dependency repair was identified within this boundary.

Authors 32, 33 and 34 remain active. This records observed interfaces, with no hashes, acceptance, readiness stamps, tests, or broad audit. Root must bind final current evidence after writers drain.

## Boundary disposition

- All current batch32 and batch33 A/B page files and manifest-listed item bodies exist; the direct page chain batch34 -> batch33 -> batch32 remains intact. No page dependency should be removed to clear this escalation.
- Batch34 item metadata currently declares no logical dependency on any batch32/33 item. MH is an earlier pedagogical page prerequisite, not a premise in the Gibbs block, mixture or sweep proofs. Its stronger standard-Borel/AC RN construction assumptions therefore need not be imposed on the independent supplied-kernel Gibbs statements.
- Batch32 reversibility is equality of the finite joint flow with its coordinate-swapped measure. Batch34 gives equality on every measurable rectangle. The existing finite-measure uniqueness supplier extends rectangle equality to the product sigma-algebra, so the interfaces coincide. No new equivalence lemma is required: the local block proof already uses that measure-uniqueness supplier and proves invariance directly by setting C=S.
- The block-update proof uses supplied proper pointwise conditional kernels and target disintegration event identities; it does not assume generic conditional existence. Random scan uses finite mixtures; systematic sweep uses chronological kernel composition and preserves target without claiming reversibility. These promises match the inspected upstream boundary.
- The systematic nonreversibility example already explicitly extends rectangle symmetry by finite-measure uniqueness before comparing integrable coordinate products. No missing upstream reversibility-to-covariance theorem is required for this boundary.
- 14 observed readiness records carry the same absent-page escalation; the current manifest has 16 item IDs. def-finite-markov-chain-reducible and cor-bivariate-normal-full-conditional-kernels have no readiness record at this intake. This is an active-author inventory observation, not permission to stamp or drop them.

## Item dispositions

| Item | Readiness record at intake | Boundary disposition |
|---|---|---|
| `def-gibbs-full-conditional-kernel` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `def-gibbs-reversibility-for-a-markov-kernel` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `def-finite-markov-chain-reducible` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `cor-gibbs-density-formula-supplies-full-conditional-kernels` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `alg-gibbs-block-update` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `cor-bivariate-normal-full-conditional-kernels` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `lem-gibbs-block-update-is-a-probability-kernel` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `alg-gibbs-scan-schemes` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `lem-gibbs-block-refresh-is-conditionally-independent` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `lem-gibbs-block-update-is-reversible-and-invariant` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `lem-gibbs-scan-schemes-are-probability-kernels` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `thm-random-scan-gibbs-is-reversible-and-invariant` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `thm-systematic-gibbs-sweep-preserves-target` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `ex-single-site-gibbs-reducible-on-disconnected-support` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `ex-bivariate-normal-gibbs-full-conditionals` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |
| `ex-systematic-gibbs-sweep-is-not-reversible` | escalated | No missing BCS-29/30 supplier identified; reconcile current evidence after writer drain. |

## Exact relevant excerpts

### def-general-state-reversibility-by-symmetric-flow-measure

Source: `items/def-general-state-reversibility-by-symmetric-flow-measure.md` (draft; live author).

## Definition

Let $(\mathsf X,\mathcal X)$ be a measurable space, let $P$ be a probability
kernel on it, meaning that $P(x,\cdot)$ is a probability measure for each $x$
and $x\mapsto P(x,A)$ is measurable for each $A\in\mathcal X$
([[def-measure-kernel-and-probability-kernel]]), and let $\pi$ be a
probability measure, that is a countably additive measure of total mass one
([[def-probability-measure]]). The product sigma-algebra
$\mathcal X\otimes\mathcal X$ is generated by measurable rectangles
([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]). The joint
flow measure of $(\pi,P)$ is the probability measure $\Lambda_{\pi,P}$ on
$(\mathsf X\times\mathsf X,\mathcal X\otimes\mathcal X)$ given, for each
$C\in\mathcal X\otimes\mathcal X$, by

$$\Lambda_{\pi,P}(C):=\int_{\mathsf X}P(x,C_x)\,\pi(dx),\qquad C_x:=\{y\in\mathsf X:(x,y)\in C\}.$$

Existence, countable additivity, and the nonnegative iterated-integral identity
for this measure follow from
[[lem-prior-and-model-kernel-define-joint-law]]. Let $\tau(x,y):=(y,x)$ be
the coordinate-swap map. It is measurable because the preimage of a measurable
rectangle $A\times B$ is $B\times A$ and such rectangles generate the product
sigma-algebra. Define the transpose measure by
$\Lambda_{\pi,P}^{\top}(C):=\Lambda_{\pi,P}(\tau^{-1}(C))$.

The kernel $P$ is **reversible with respect to $\pi$** when
$$\Lambda_{\pi,P}=\Lambda_{\pi,P}^{\top}.$$
This definition uses equality of measures and requires no density, standard
Borel assumption, or prior assumption that $\pi$ is invariant.

### thm-general-state-reversibility-implies-invariance

Source: `items/thm-general-state-reversibility-implies-invariance.md` (draft; live author).

## Statement

Let $(\mathsf X,\mathcal X)$ be a measurable space, $P$ a probability kernel
([[def-measure-kernel-and-probability-kernel]]) on it, and $\pi$ a probability
measure ([[def-probability-measure]]) on it. If $P$ is reversible with
respect to $\pi$ in the sense of
[[def-general-state-reversibility-by-symmetric-flow-measure]], then $\pi$ is
invariant for $P$: for every $A\in\mathcal X$,

$$\int_{\mathsf X}P(x,A)\,\pi(dx)=\pi(A).$$

### thm-general-state-reversibility-implies-invariance

Source: `items/thm-general-state-reversibility-implies-invariance.md` (draft; live author).

## Proof

**Given:** The hypotheses in the statement.

**Proof technique:** Apply the nonnegative kernel-Tonelli identity to the two
marginals of the symmetric joint flow measure.

1.1 Fix $A\in\mathcal X$. By [F2] on $1_{\mathsf X\times A}$, whose section at each $x$ is $A$, $\Lambda_{\pi,P}(\mathsf X\times A)=\int_{\mathsf X}P(x,A)\,\pi(dx)$, a nonnegative integral bounded by one. [F2, F4, given]

1.2 Symmetry [F1] and $\tau^{-1}(\mathsf X\times A)=A\times\mathsf X$ give $\Lambda_{\pi,P}(\mathsf X\times A)=\Lambda_{\pi,P}^{\top}(\mathsf X\times A)=\Lambda_{\pi,P}(A\times\mathsf X)$. [F1, given]

1.3 The rectangle formula [F2] gives $\Lambda_{\pi,P}(A\times\mathsf X)=\int_A P(x,\mathsf X)\,\pi(dx)=\int_A1\,\pi(dx)=\pi(A)$, since each kernel row has mass one by [F4]. [F2, F4, given]

2.1 Steps 1.1, 1.2, and 1.3 give $\int_{\mathsf X}P(x,A)\,\pi(dx)=\pi(A)$ for arbitrary $A$, which is invariance by [F3]. The proof uses only nonnegative indicators, with no density, countability, or standard-Borel hypothesis. [F3, step 1.1, step 1.2, step 1.3, given] ∎

### alg-metropolis-hastings-kernel

Source: `items/alg-metropolis-hastings-kernel.md` (draft; live author).

## Definition

Assume AC. The **Metropolis–Hastings procedure** takes as input a standard-Borel
space $(\mathsf X,\mathcal X)$ ([[def-standard-borel-space]]), a target
probability measure $\pi$ ([[def-probability-measure]]), and a probability
kernel $Q$ from $(\mathsf X,\mathcal X)$ to itself
([[def-measure-kernel-and-probability-kernel]]).

1. On the product sigma-algebra ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]),
form the proposal-flow measure $\mu$ ([[def-measure]]) on
$\mathsf X\times\mathsf X$ by
$$\mu(C)=\int_{\mathsf X}Q(x,C_x)\,\pi(dx),\qquad C_x=\{y:(x,y)\in C\}.$$
This is a probability measure by [[lem-prior-and-model-kernel-define-joint-law]].
Let $\tau(x,y)=(y,x)$ and set $\mu^{\mathsf T}(C)=\mu(\tau^{-1}C)$.

2. Set $\eta=\mu\wedge\mu^{\mathsf T}$, the greatest measure dominated by both
flows. Put $\lambda_0=\mu+\mu^{\mathsf T}$, which is a finite measure by
[[thm-nonnegative-weighted-sums-of-measures]], and choose nonnegative measurable
representatives $f=d\mu/d\lambda_0$ and $g=d\mu^{\mathsf T}/d\lambda_0$
with $f+g=1$ everywhere after modification on a $\lambda_0$-null set. Define
$$\alpha(x,y)=\begin{cases}\min\{1,g(x,y)/f(x,y)\},&f(x,y)>0,\\1,&f(x,y)=0.\end{cases}$$
This is a jointly measurable version of $d\eta/d\mu$ taking values in $[0,1]$.

3. For $x\in\mathsf X$, compute the integrated acceptance probability
$$a(x)=\int_{\mathsf X}\alpha(x,y)\,Q(x,dy)$$
and rejection probability $r(x)=1-a(x)$.

4. Return the transition rule
$$P(x,A)=\int_{\mathsf X}\mathbf1_A(y)\alpha(x,y)\,Q(x,dy)+\mathbf1_A(x)r(x),\qquad A\in\mathcal X.$$
The second term retains every rejected proposal as a self-transition.

The item [[lem-common-submeasure-and-bounded-radon-nikodym-density]] proves the
common-submeasure construction and density-version claims in step 2.

### thm-metropolis-hastings-kernel-is-reversible-and-invariant

Source: `items/thm-metropolis-hastings-kernel-is-reversible-and-invariant.md` (draft; live author).

## Statement

Assume AC and the hypotheses of [[alg-metropolis-hastings-kernel]]. Its output
$P$ is a probability kernel, the joint measure
$J_P(dx,dy)=\pi(dx)P(x,dy)$ is symmetric under $(x,y)\mapsto(y,x)$, and $\pi$
is invariant for $P$. Symmetry of this joint measure is reversibility. No
irreducibility, uniqueness, convergence-rate, or central limit theorem
conclusion is asserted.

### thm-metropolis-hastings-kernel-is-reversible-and-invariant

Source: `items/thm-metropolis-hastings-kernel-is-reversible-and-invariant.md` (draft; live author).

## Proof

**Given:** AC, $\pi$, $Q$, and the procedure in [F1].

1.1 The acceptance function satisfies $0\le\alpha\le1$. For each $x$,
$0\le a(x):=\int\alpha(x,y)Q(x,dy)\le1$ because $Q(x,\cdot)$ is a
probability measure. The function $a$ is measurable by [F5], so
$r(x)=1-a(x)$ is measurable and takes values in $[0,1]$. [F1, F5, given]

1.2 For fixed $x$, the accepted term
$A\mapsto\int\mathbf1_A(y)\alpha(x,y)Q(x,dy)$ is a measure by [F9], since the
section $y\mapsto\alpha(x,y)$ is measurable by [F8]. The rejection term
$A\mapsto r(x)\mathbf1_A(x)$ is a measure: for disjoint sets at most one can
contain $x$. Their sum is a measure by [F10], and its total mass is
$a(x)+r(x)=1$. For each fixed $A$, the accepted term is measurable in $x$ by
[F5], and the rejection term is measurable since $r$ and $\mathbf1_A$ are
measurable. Thus [F2] applies pointwise and $P$ is a probability kernel.
[F1, F2, F5, F8, F9, F10, step 1.1, algebra]

2.1 Let $J_P$ be the joint measure of $\pi$ and $P$ supplied by [F3]. Splitting
its defining integral into accepted and rejected terms gives, for every product
measurable $C$,
$$J_P(C)=\int\!\int\mathbf1_C(x,y)\alpha(x,y)Q(x,dy)\,\pi(dx)
+\int\mathbf1_C(x,x)r(x)\,\pi(dx)=\eta(C)+R(C).$$
The accepted term is $\eta(C)$ by the iterated-integral identity in [F3] for
the proposal flow $\mu$ and the density identity $\alpha\,\mu=\eta$ in [F4].
Define $R(C)=\int\mathbf1_C(x,x)r(x)\,\pi(dx)$. [A1, F1, F3, F4, given]

2.2 The coordinate swap $\tau(x,y)=(y,x)$ is measurable by [F7] and is an
involution. Since $\eta$ is the greatest measure dominated by both $\mu$ and
$\mu^{\mathsf T}$, its transpose $\eta^{\mathsf T}$ is also dominated by both:
for every $C$, $\eta^{\mathsf T}(C)=\eta(\tau^{-1}C)\le\mu^{\mathsf T}(C)$ and
$\eta^{\mathsf T}(C)\le\mu(C)$. Maximality gives
$\eta^{\mathsf T}\le\eta$; transposing this inequality and using
$\tau^2=\mathrm{id}$ gives $\eta\le\eta^{\mathsf T}$. Hence
$\eta^{\mathsf T}=\eta$. [F4, F7, step 2.1, construct]

2.3 On the diagonal, $\tau(x,x)=(x,x)$, so
$\mathbf1_C(x,x)=\mathbf1_{\tau^{-1}C}(x,x)$ for every $x$. Therefore
$R(C)=R(\tau^{-1}C)$. Step 2.2 gives the same identity for $\eta$. Combining
this with the decomposition in step 2.1 gives $J_P(C)=J_P(\tau^{-1}C)$ for every
$C$. Thus the joint flow is symmetric, so $P$ is reversible by [F11]. [F4, F7, F11, step 2.1, step 2.2, algebra]

3.1 Steps 1.2 and 2.3 prove that $P$ is a probability kernel reversible with
respect to $\pi$. The general-state result [F12] applies on this measurable
space and gives $\int P(x,A)\,\pi(dx)=\pi(A)$ for every $A\in\mathcal X$.
Thus $\pi$ is invariant in the sense of [F6]. [F2, F6, F12, step 1.2, step 2.3] ∎

### def-gibbs-reversibility-for-a-markov-kernel

Source: `items/def-gibbs-reversibility-for-a-markov-kernel.md` (draft; live author).

## Definition

Let $P$ be a probability kernel on $(S,\mathcal S)$ and let $\pi$ be a probability measure on that space. The kernel $P$ is **reversible with respect to $\pi$**, or satisfies **detailed balance**, when
$$
\int_A P(x,C)\,\pi(dx)=\int_C P(y,A)\,\pi(dy)\qquad(A,C\in\mathcal S).
$$
This is the symmetry of the two-time transition flow $\pi(dx)P(x,dy)$, stated through its values on measurable rectangles. The definition is for a general measurable state space and makes no irreducibility, uniqueness, or convergence assertion. Invariance means $\int P(x,A)\,\pi(dx)=\pi(A)$ for every $A\in\mathcal S$, as in [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

### lem-gibbs-block-update-is-reversible-and-invariant

Source: `items/lem-gibbs-block-update-is-reversible-and-invariant.md` (draft; live author).

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F8].

1.1 The full conditional identity [F1] says that the target law in coordinates $(z,u)$ and the iterated law $\pi_{-B}(dz)K_B(z,du)$ agree on coordinate rectangles. Both are probability measures, and rectangles generate the finite product sigma-algebra, so [F8] makes them equal on every product-measurable event. Integrating nonnegative simple functions and then increasing limits gives $\int h(x)\pi(dx)=\int\pi_{-B}(dz)\int h(\operatorname{splice}_B(z,u))K_B(z,du)$ for every nonnegative product-measurable $h$. [F1, F8, algebra]

2.1 Let $M$ be the joint law of the current and updated states under initial law $\pi$ and transition $P_B$, which exists by [F3]–[F4]. For arbitrary measurable $A,C\subseteq S$, the update formula and step 1.1 give $M(A\times C)=\int\pi_{-B}(dz)\int K_B(z,du)\mathbf1_A(\operatorname{splice}_B(z,u))\int K_B(z,dv)\mathbf1_C(\operatorname{splice}_B(z,v))$. All integrands are bounded measurable functions, so the iterated integrals are defined. [F2, F3, F4, step 1.1]

3.1 For each $z$, the product measure $K_B(z,\cdot)\otimes K_B(z,\cdot)$ is invariant under swapping its two coordinates: the product measure and its swapped image agree on every rectangle because $K_B(z,A)K_B(z,C)=K_B(z,C)K_B(z,A)$, hence agree on the generated product sigma-algebra by [F8]. Applying this symmetry to the two inner factors in step 2.1 yields $M(A\times C)=M(C\times A)$ for arbitrary $A,C$. By [F6], $P_B$ is reversible with respect to $\pi$. [F5, F6, F8, step 2.1, algebra]

4.1 Set $C=S$ in the detailed-balance identity of step 3.1. Since $P_B(x,S)=1$, its left side is $\pi(A)$ and its right side is $\int P_B(y,A)\pi(dy)=(\pi P_B)(A)$. This is invariance by [F7], for every measurable $A$. [F3, F6, F7, step 3.1] ∎

### thm-random-scan-gibbs-is-reversible-and-invariant

Source: `items/thm-random-scan-gibbs-is-reversible-and-invariant.md` (draft; live author).

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F7].

1.1 By [F2] and nonnegativity of the weights, for every measurable $A,C$, $\int_A P_{\rm rand}(x,C)\pi(dx)=\sum_{j=1}^m w_j\int_A P_j(x,C)\pi(dx)$. This follows by applying [F7] to each scalar multiple and [F6] repeatedly to the finite sum. [F1, F2, F6, F7]

2.1 Reversibility of each $P_j$ in [F1] changes the last expression to $\sum_{j=1}^m w_j\int_C P_j(y,A)\pi(dy)=\int_C P_{\rm rand}(y,A)\pi(dy)$. Thus the detailed-balance identity [F3] holds for every $A,C$. [F1, F2, F3, step 1.1]

3.1 Set $C$ equal to the whole state space in step 2.1 and use $P_{\rm rand}(y,S)=1$ from [F5]. The resulting identity is $\int P_{\rm rand}(y,A)\pi(dy)=\pi(A)$, which is invariance by [F4]. The proof establishes stationarity only; it does not establish irreducibility, uniqueness, ergodicity, or a rate. [F3, F4, F5, step 2.1] ∎

### thm-systematic-gibbs-sweep-preserves-target

Source: `items/thm-systematic-gibbs-sweep-preserves-target.md` (draft; live author).

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F5].

1.1 For two probability kernels $P,Q$, the iterated-kernel identity [F5] gives $\int (PQ)(x,A)\,\pi(dx)=\int Q(y,A)\,(\pi P)(dy)$. This follows by expanding $(PQ)(x,A)=\int Q(y,A)P(x,dy)$ and applying the joint-law iterated-integral identity to the bounded nonnegative function $Q(y,A)$. [F3, F5]

2.1 Define $\mu_0=\pi$ and $\mu_k=\mu_{k-1}P_k$ for $1\le k\le m$. If $\mu_{k-1}=\pi$, then [F1] gives $\mu_k=\pi P_k=\pi$. Induction from $\mu_0=\pi$ yields $\mu_m=\pi$; associativity in [F3] identifies $\mu_m=\pi(P_1\cdots P_m)$, and [F4] calls this invariance. This argument makes no claim that the composition is reversible. [F1, F2, F3, F4, step 1.1] ∎

## Minimal eventual action

Preserve all page requirements and original Gibbs promises. After authors drain, refresh the stale cross-batch evidence and current readiness through the authorized native workflow. The original escalation records remain genuine historical observations. No active source, manifest, contract, notes, or readiness file was modified.
