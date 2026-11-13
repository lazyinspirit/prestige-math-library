---
title: Non-trapping and geometric control from infinity
status: published
research_item: rem-se-nontrapping-gcc
dependency_level: 25
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Frozen v2 PDF page 3, Remark 1 and Figure 1(b); pages 4–5, Theorems
        1.1–1.5 and Corollary 1.6; pages 6–7, equations (2.1)–(2.3); page 21,
        Section 5.1
      statement: Remark 1 identifies non-trapping with uniform geometric control from
        infinity, distinguishes geometric hitting time from arbitrary positive
        Schrödinger control time, and attributes the geometric input to the
        resolvent and smoothing estimates. Section 5.1 distinguishes linear
        control, local control near zero and conditional control near a
        trajectory.
      hypotheses: Attribution under the article’s smooth nonempty compact non-trapping
        obstacle and connected-exterior assumptions, with the respective control
        theorems’ dimension, regularity, endpoint-smallness and trajectory
        hypotheses. This reference supplies attribution, not a prerequisite
        proof.
      reading_limits: Read the frozen extracted text of Remark 1, the stated control
        results on pages 4–5, equations (2.1)–(2.3) on pages 6–7, and Section
        5.1. The original PDF is not being independently assessed for author
        defects here. The local argument uses the listed geometric, control and
        independently imported analytic suppliers rather than this article
        citation.
---

PDF p. 3: ` Remark 1; Figure 1(b) and caption `; PDF p. 21: ` §5.1 `

## Prerequisites

- [def-se-nontrapping](item-def-se-nontrapping)
- [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)
- [prop-author-062cb22743bb-exterior-ray-compactness](item-prop-author-062cb22743bb-exterior-ray-compactness)
- [lem-author-062cb22743bb-uniform-hitting](item-lem-author-062cb22743bb-uniform-hitting)
- [lem-author-062cb22743bb-free-no-return](item-lem-author-062cb22743bb-free-no-return)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-boundary-state-space](item-def-se-boundary-state-space)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-ucpw](item-def-se-ucpw)
- [thm-se-1-1](item-thm-se-1-1)
- [thm-se-1-2](item-thm-se-1-2)
- [thm-se-1-3](item-thm-se-1-3)
- [thm-se-1-5](item-thm-se-1-5)
- [cor-se-1-6](item-cor-se-1-6)
- [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent)
- [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing)
- [lem-author-062cb22743bb-speed-confinement](item-lem-author-062cb22743bb-speed-confinement)
- [lem-author-062cb22743bb-compact-phase](item-lem-author-062cb22743bb-compact-phase)
- [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric)
- [math:lem-metric-limits-unique](https://alphabetamath.cc/item/lem-metric-limits-unique)


## Statement

Assume Countable Choice and Dependent Choice for the geometric assertion. Let $n\ge2$, and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. For a ball $B_R=B_R(0)$ containing $\Theta$ strictly, non-trapping gives a uniform time $L_R<\infty$ such that every complete unit-speed generalized reflected or glancing ray meets $\omega=\{x\in\Omega:|x|>R\}$ at a time in $(0,L_R)$. This is GCC for observation from infinity. Conversely, this uniform hitting property for every sufficiently large ball implies pointwise non-trapping. All complete admissible rays are included, without uniqueness or a finite-order-contact assumption.

For the analytic assertions assume also the Axiom of Choice, as required by their suppliers. Let $\Delta_D$ be the Dirichlet Laplacian and $H_D^s(\Omega)$ its spectral scale associated with $I-\Delta_D$. Choose a smooth real cutoff $\varphi\in C^\infty(\mathbb R^n;[0,1])$ that is zero for $|x|\le R$, positive for $|x|>R$, and one for $|x|\ge R+1$. Exact control at time $T$ means joining every admissible pair of endpoints by a solution in the specified class. For every $T>0$ and $s\in[-2,2]$, arbitrary $z_0,z_T\in H_D^s(\Omega)$ can be joined by a mild solution of $i\partial_tz+\Delta_Dz=\varphi h$, with both $z,h\in C([0,T];H_D^s(\Omega))$. The homogeneous Dirichlet condition is encoded by the realization and scale, including at negative orders; $C([0,T];X)$ means norm-continuous paths.

The nonlinear arbitrary-time assertions retain their local scope. For $n\in\{2,3\}$, $s\in\{1,2\}$, $\lambda\in\mathbb R\setminus\{0\}$ and $m\in\{3,5\}$, the equation $i\partial_tv+\Delta_Dv+\lambda|v|^{m-1}v=\varphi h$ has internal control between sufficiently small endpoints in $H_D^s(\Omega)$, with the control and integral solution continuous in that space. The corresponding outer Dirichlet boundary control holds on $\Omega_0=B_{R_0}(0)\setminus\Theta$, where $\Theta\subset B_{R_0}(0)$: sufficiently small $H^s(\Omega_0)$ endpoints with zero value trace on $\partial\Theta$ can be joined by a solution continuous in $H^s$, with an outer-sphere control continuous in $H^{s-1/2}(\partial B_{R_0})$ and zero obstacle trace. Each positive smallness radius may depend on $T$ and the fixed parameters.

For the cubic equation in those dimensions and orders, internal control also holds for endpoints sufficiently close in $H_D^s$ to $w(0),w(T)$, provided (W) and (UCPw) hold. Here (W) requires $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$, in the intersection norm, solving $i\partial_tw+\Delta w+\lambda|w|^2w=0$ in distributions with homogeneous Dirichlet condition. The additional assumption (UCPw) says that every $q\in C([0,T];H_0^1(\Omega))$ solving $iq_t+\Delta q+2\lambda|w|^2q-\lambda w^2\overline q=0$ in distributions and vanishing on $(0,T)\times\omega$ is identically zero. It is not asserted for all trajectories satisfying (W).

These control statements hold for every $T>0$ under their respective hypotheses, so the geometric time $L_R$ imposes no lower bound on their Schrödinger control time. The non-trapping geometry enters the article's analytic argument through the cutoff resolvent and local smoothing estimates specified below; the geometric argument alone does not assert an observability inequality.

## Statement references

[def-se-nontrapping](item-def-se-nontrapping)

[prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)

[prop-author-062cb22743bb-exterior-ray-compactness](item-prop-author-062cb22743bb-exterior-ray-compactness)

[lem-author-062cb22743bb-uniform-hitting](item-lem-author-062cb22743bb-uniform-hitting)

[lem-author-062cb22743bb-free-no-return](item-lem-author-062cb22743bb-free-no-return)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-internal-systems](item-def-se-internal-systems)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[def-se-boundary-state-space](item-def-se-boundary-state-space)

[def-se-trajectory](item-def-se-trajectory)

[def-se-ucpw](item-def-se-ucpw)

[thm-se-1-1](item-thm-se-1-1)

[thm-se-1-2](item-thm-se-1-2)

[thm-se-1-3](item-thm-se-1-3)

[thm-se-1-5](item-thm-se-1-5)

[cor-se-1-6](item-cor-se-1-6)

[prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent)

[prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing)

## Facts & Assumptions

[F1] Use the non-trapping predicate of [def-se-nontrapping](item-def-se-nontrapping) and the arbitrary-contact complete-ray and GCC convention of [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract). Only rays defined for all physical times in $\mathbb R$ are quantified over in non-trapping. The geometric proof assumes [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) and [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice). A forward admissible curve alone does not meet the complete-ray hypothesis; no unique global flow or finite-order-contact assumption is imposed.

[F2] [prop-author-062cb22743bb-exterior-ray-compactness](item-prop-author-062cb22743bb-exterior-ray-compactness) supplies closed subsequence compactness for normalized compressed ray segments on each fixed finite interval, under Countable Choice and Dependent Choice. It does not by itself assert that an arbitrary forward limit extends to all real times. [lem-author-062cb22743bb-uniform-hitting](item-lem-author-062cb22743bb-uniform-hitting) gives the abstract forward-path hitting conclusion once both its finite-interval subsequence condition and its admissibility condition for every locally uniform limit have been verified. The full-time extension needed for this application is constructed below from sequences of already complete rays.

[F3] [lem-author-062cb22743bb-free-no-return](item-lem-author-062cb22743bb-free-no-return) gives Euclidean escape after an outward crossing of a ball containing the obstacle and the treatment of rays initially outside that ball.

[F4] Exact and local control have the meanings in [def-se-foundation-control-language](item-def-se-foundation-control-language). The cutoff, equations, spectral spaces, and time-space notation are fixed by [def-se-control-cutoffs](item-def-se-control-cutoffs), [def-se-internal-systems](item-def-se-internal-systems), [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). Boundary endpoint compatibility is [def-se-boundary-state-space](item-def-se-boundary-state-space). The analytic suppliers assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); this assumption is inherited, not attributed to the original article.

[F5] Under the stated geometry, cutoff and Choice assumptions, [thm-se-1-2](item-thm-se-1-2) supplies linear exact control at every $T>0$ and $s\in[-2,2]$. For $n=2,3$, $s=1,2$ and real nonzero coupling, [thm-se-1-3](item-thm-se-1-3) supplies near-zero cubic internal control, [thm-se-1-1](item-thm-se-1-1) supplies near-zero cubic outer boundary control, and [cor-se-1-6](item-cor-se-1-6) supplies both quintic conclusions. Each nonlinear result requires sufficiently small compatible endpoints, with its own positive radius.

[F6] [def-se-trajectory](item-def-se-trajectory) specifies (W), and [def-se-ucpw](item-def-se-ucpw) specifies the additional energy-level implication (UCPw). Under these and its other stated hypotheses, [thm-se-1-5](item-thm-se-1-5) supplies cubic internal control near the trajectory endpoints for $n=2,3$, $s=1,2$, at every fixed $T>0$.

[F7] For the stated nonempty smooth non-trapping exterior, a real nonnegative $\chi\in C_c^\infty(\mathbb R^n)$ and $s\in[-1,1]$, [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent) gives $\|\chi(-\Delta_D-(\mu\pm i\epsilon)^2)^{-1}\chi\|_{H_D^s\to H_D^{s+1}}\le C_s$, uniformly for real $\mu$ and sufficiently small positive $\epsilon$. For $f\in L^2(0,T;H_D^s)$, [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing) gives $\|\chi u\|_{L^2(0,T;H_D^{s+1})}\le C_s\|\chi f\|_{L^2(0,T;H_D^s)}$, where $u(t)=\int_0^t e^{i(t-\tau)\Delta_D}\chi f(\tau)\,d\tau$; its constant is independent of $T$. For $s\in[0,1]$ and $v_0\in H_D^s$, the same smoothing supplier gives $\|\chi e^{it\Delta_D}v_0\|_{L^2(0,T;H_D^{s+1/2})}\le C_s\|v_0\|_{H_D^s}$, also independently of $T$. These are the independent Burq–Gérard–Tzvetkov inputs, not consequences proved by the ray-hitting argument.


[F8] Under the same choice assumptions, [lem-author-062cb22743bb-speed-confinement](item-lem-author-062cb22743bb-speed-confinement) gives $|x(t)-x(s)|\le|t-s|$ on finite intervals; stationarity in [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract) permits translating any finite interval to start at zero. [lem-author-062cb22743bb-compact-phase](item-lem-author-062cb22743bb-compact-phase) gives compact metrizable normalized compressed phase over compact spatial bases and a continuous base projection. [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric) makes that projection uniformly continuous on each such compact phase set. [math:lem-metric-limits-unique](https://alphabetamath.cc/item/lem-metric-limits-unique) gives uniqueness of limits in a metric space; the compact phase sets carry the intrinsic compressed-bundle topology, so their inclusions and overlapping limits are compatible.

## Proof

**Given:** The geometric hypotheses and Countable Choice and Dependent Choice in F1–F3 and F8, and, for the analytic assertions, the additional Choice and system hypotheses in F4–F7.

**Goal:** Verify the complete-ray applicability of uniform hitting, prove the geometric equivalence, and retain the distinct scope of the control and analytic assertions.

1.1 Put $Z=\overline\Omega$ with the Euclidean metric and let $\mathcal F$ be the family of forward spatial restrictions of all complete unit-speed generalized rays whose initial bases lie in $\overline B_R$. For each member of any countable sequence in $\mathcal F$, Countable Choice in F1 selects one normalized complete compressed lift. Fix an integer $a\ge1$. Apply the finite-interval compactness in F2 to these lifts on $[0,a]$. Their values lie in a compact normalized phase set over the closed base bound $|x|\le R+a$. The continuous base projection is uniformly continuous by F8, so the resulting compressed-phase subsequence convergence implies uniform spatial convergence on $[0,a]$. This works for every sequence and every subsequence in $\mathcal F$, verifying the first condition of the abstract hitting lemma with this spatial metric. [given, F1, F2, F8]

2.1 Now suppose $(x_j)$ in $\mathcal F$ has a locally uniform forward spatial limit $x$; choose complete normalized lifts $q_j$ as in step 1.1. For every integer $a\ge1$, F8 applied on the interval from $-a$ to $0$ gives $|x_j(-a)|\le R+a$. Translate the restrictions $q_j|_{[-a,a]}$ to $[0,2a]$ by stationarity. The compactness supplier in F2 applies with initial radius $R+a$ and length $2a$; its compact target may be taken over $|x|\le R+3a$. Dependent Choice successively selects nested infinite subsequences, converging in compressed phase on $[-1,1]$, then on $[-2,2]$, and so on, with admissible finite-interval limits $p_a$. On $[-a,a]$ the sequence selected at stage $a+1$ is a subsequence of the one selected at stage $a$. Both phase limits can be compared in the larger compact phase set, since the topology is the intrinsic compressed topology. Uniqueness of metric limits in F8 therefore gives $p_{a+1}|_{[-a,a]}=p_a$. Equivalently, choosing successive original indices from these nested subsequences, each larger than the previous index and the stage number, gives one diagonal sequence converging on every centered finite interval. Define $q(t)=p_a(t)$ for any $a>|t|$; consistency makes this independent of $a$. Each point has a neighborhood on which $q$ is an admissible finite ray segment, so $q$ is continuous and satisfies the local compressed ray rules of F1 for all $t\in\mathbb R$. It is a normalized complete admissible ray, without selecting a unique continuation through any initial covector. Its spatial projection on $[0,a]$ is $x$: that projection is the uniform limit of the same subsequence of $x_j$, and $x_j\to x$ there. Thus every locally uniform forward limit considered by the hitting lemma is the forward restriction of a complete ray and belongs to $\mathcal F$. This proves the second condition without assuming an extension theorem for an arbitrary forward curve. [F1, F2, F8, step 1.1]

3.1 Apply the hitting lemma in F2 with $Z=\overline\Omega$, $B=Z$, $\pi$ the identity, $\mathcal A=\mathcal F$ and the relatively open set $U=\{x\in Z:|x|>R\}$. Steps 1.1 and 2.1 verify its two compactness and admissibility conditions. Non-trapping in F1 applies to the complete ray constructed in step 2.1, so its forward restriction must hit $U$ at a finite time. The lemma gives a common finite bound $L$, which may be enlarged to be nonnegative, for all members of $\mathcal F$. Set $L_R=L+1$. An initial point in $\overline B_R$ is not in $U$, so its hit occurs at a time in $(0,L_R)$. If a complete ray starts outside $\overline B_R$, spatial continuity gives a hit of $U$ at a sufficiently small positive time below $L_R$. Hence every complete ray has the required hit and GCC holds. [given, F1, F2, step 1.1, step 2.1]

4.1 By F3, after an outward exit from a ball containing the obstacle a complete ray follows a Euclidean straight line tending to infinity and cannot return. Conversely, suppose that the uniform GCC property holds for every sufficiently large containing ball, without assuming non-trapping for this implication. Choose any such ball. Its hitting bound applies in particular to every complete ray initially in its closure, so the no-return conclusion in F3 makes all those rays tend to spatial infinity. The same supplier treats complete rays initially outside that ball and makes them eventually tend to infinity as well. Every compact spatial set lies inside a finite-radius ball; eventual divergence therefore gives the required pointwise non-trapping predicate for every complete ray. Together with step 3.1 this establishes the stated geometric equivalence. [given, F1, F3, step 3.1]

4.2 Apply F5 to the controlled systems and endpoint classes specified in F4, and F6 to each fixed cubic trajectory satisfying both (W) and (UCPw). Each result quantifies over every $T>0$ within its own hypotheses: arbitrary linear endpoints, sufficiently small nonlinear endpoints near zero, or sufficiently close trajectory endpoints, respectively. Their conclusions impose no positive lower bound $L_R$ on $T$. This application uses those control suppliers; the ray-hitting argument alone supplies no observability inequality. [given, F4, F5, F6, step 3.1]

5.1 The geometry, Dirichlet realization, cutoff and orders in F7 meet its independent estimate suppliers' hypotheses, so the stated cutoff resolvent and local smoothing estimates are available. Their role as the article's analytic geometric input is attributed in the Source notes. They are separate analytic premises: steps 1.1–4.1 establish the geometric statement, and step 4.2 records the control assertions with their own supplied arguments. This completes all assertions with their respective hypotheses retained. [given, F4, F7, step 3.1, step 4.1, step 4.2] ∎

## Source notes

The original article's Remark 1 (PDF page 3, with Figure 1(b)) attributes the equivalence and the distinction between geometric time and Schrödinger control time, and identifies its resolvent bound (2.1) and homogeneous smoothing effect (2.3) as the way geometry enters the proof. The related retarded smoothing estimate is equation (2.2) on PDF page 7. Section 5.1 (PDF page 21) distinguishes linear, near-zero nonlinear and conditional trajectory control. This citation is attribution only. The proof above uses the listed local geometric and control suppliers and independent analytic imports; it does not use the article's assertions as their own proof.

The two-sided subsequence and gluing argument above is a local generated-proof repair using the existing compactness, speed and phase suppliers. It ensures that the non-trapping predicate is applied only to a ray defined on all real times. The statement is unchanged; this records neither an original-article defect nor independent acceptance.
