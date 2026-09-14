---
id: lem-nice-refinement-exists-and-is-not-lindelof
kind: lemma
title: Nice refinements exist and are regular but not Lindelof
status: draft
origin: pipeline
deps:
  - def-ordered-fundamental-space-and-nice-refinement
  - def-regular-and-t3-spaces
  - def-compact-space
  - def-compactness-variants
  - def-locally-compact-space
  - thm-compact-implies-complete-and-totally-bounded
  - thm-countable-elementary-submodels-and-transitive-collapses
  - thm-transfinite-recursion
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  references:
    - title: "Hart–Kunen, Ultra Strong S-Spaces, Lemmas 4.5, 4.8 and 4.12, printed pp. 96–100"
      url: https://www.uwosh.edu/faculty_staff/hartj/ultra.pdf
---

## Statement

Every ordered fundamental space has a nice refinement
$(\omega_1,\widetilde{\mathcal T})$ satisfying $(\star_\alpha)$ for every
$\omega\leq\alpha<\omega_1$.  The refinement is separable, locally compact,
locally countable, zero-dimensional, regular, and Hausdorff, but it is not
Lindelöf.  Here locally countable means that every point has a countable
neighbourhood.

## Facts & Assumptions

**Given:** An ordered fundamental space $(\omega_1,\mathcal T)$ and ZFC.

[F1] [[def-ordered-fundamental-space-and-nice-refinement]] gives the rings, intermediate topologies, model chain, metrics, nice-refinement clauses, the families $\Gamma_\alpha(S,\nu)$, and $(\star_\alpha)$.

[F2] A compact topological space is one whose every open cover has a finite subcover, and a compact subset carries the intrinsic subspace topology ([[def-compact-space]]).

[F3] A compact metric space is totally bounded: at every positive radius it has a finite net ([[thm-compact-implies-complete-and-totally-bounded]]).

[F4] A space is locally compact when every point has a compact neighbourhood ([[def-locally-compact-space]]).

[F5] A space is Lindelöf when every open cover has an at most countable subcover ([[def-compactness-variants]]).

[F6] A clopen base gives the point--closed-set separation required for regularity ([[def-regular-and-t3-spaces]]).

[F7] [[thm-countable-elementary-submodels-and-transitive-collapses]] supplies a countable elementary hull containing any prescribed countable parameter set.

[F8] [[thm-transfinite-recursion]] constructs the model chain and the later stage-by-stage refinement from their functional successor and limit clauses.

[F9] [[def-axiom-of-choice]] supplies the simultaneous recursive choices of hulls, metrics, finite nets, ring points, and compact clopen enlargements.

## Proof

**Proof technique:** transfinite and finite recursion.

1.1 Construct the required continuous chain $\langle M_\alpha:\alpha<\omega_1\rangle$ explicitly. Start with an F7 hull containing the ordered fundamental space and its base assignment. At a successor, apply F7 to the countable set $M_\alpha\cup\{M_\alpha,\alpha\}$ and the fixed parameters; at a countable limit take the union of the earlier increasing elementary chain, which is countable and elementary by the Tarski--Vaught test. F8 performs this recursion, and F9 makes the simultaneous hull choices. Now choose the compatible metrics $d_\alpha$ allowed by F1 and F9. For $\alpha<\omega$ put $V_n^\alpha=\{\alpha\}$. Inductively suppose the $V_n^\xi$ and $H_\ell^\xi$ have been constructed for every $\xi<\alpha$, and that the resulting topology below $\alpha$ is locally compact and zero-dimensional. [F1, F7, F8, F9, given, base, ih]

2.1 Fix $\omega\leq\alpha<\omega_1$.  The countable model $M_{\alpha+1}$ contains only countably many sets $S$ satisfying $|S|\leq\aleph_0$ and $S\subseteq K(\alpha,\widetilde{\mathcal T}\restriction\alpha)$; list them as $\langle S_\nu:\nu<\omega\rangle$, repeating every such $S$ infinitely often.  This collection is nonempty because it contains $S=\varnothing$, and that particular $S$ makes the later star implication vacuous. [F1, F7, F9, step 1.1]

3.1 Recursively suppose $H_\ell^\alpha$ is fixed for $\ell<\nu$ and put $A_\nu=\bigcup_{\ell<\nu}H_\ell^\alpha$.  This is a finite union of compact sets, hence compact.  Every $K\in\Gamma_\alpha(S_\nu,\nu)$ lies in $A_\nu\cup(W_\nu^\alpha\cap\alpha)$: the first $\nu$ ring intersections lie in their $H_\ell^\alpha$, while all remaining points lie in the nested $W_\nu^\alpha$. [F1, F2, step 1.1, step 2.1, ih]

4.1 The family $\Gamma_\alpha(S_\nu,\nu)$ has a finite Hausdorff $2^{-\nu}$-net $P_\nu$ chosen from itself.  Indeed, by [F3] choose a finite $\varepsilon$-net of the compact metric set $A_\nu$, where $2\varepsilon<2^{-\nu}$.  Partition the remaining tail into the outer ring $R_\nu=(W_\nu^\alpha\setminus W_{\nu+1}^\alpha)\cap(\alpha+1)$ and the deeper tail $T_\nu=W_{\nu+1}^\alpha\cap(\alpha+1)$.  Record for each $K$ which finitely many $\varepsilon$-cells meet $K\cap A_\nu$, whether $K$ meets $R_\nu$, and whether it meets $T_\nu$.  There are finitely many records.  Two compacta with the same record are within Hausdorff distance at most $2^{-\nu}$: match their points in $A_\nu$ through a common recorded cell; points in $R_\nu$ are within its internal diameter $2^{-\nu-3}$; and points in $T_\nu$ are within $2^{-\nu}$ by the triangle inequality, since every such point has distance at most $2^{-\nu-1}$ from $\alpha$.  The two tail-incidence bits ensure that each required matching part is nonempty.  Choosing one member for each realized record gives $P_\nu$; if $\Gamma_\alpha(S_\nu,\nu)=\varnothing$, take $P_\nu=\varnothing$. [F1, F3, F9, step 3.1]

5.1 Let $Q_\nu$ be the union of $J\cap(W_\nu^\alpha\setminus W_{\nu+1}^\alpha)$ over $J\in\bigcup_{\mu\leq\nu}P_\mu$.  It is a compact subset of the relatively clopen nonempty $\nu$-th ring.  Local compactness and the clopen base below $\alpha$ cover $Q_\nu$ by finitely many compact clopen sets lying in that ring; their union is compact clopen.  If this union is empty, choose a ring point and one compact clopen neighbourhood of it in the ring.  Call the resulting nonempty compact clopen set $H_\nu^\alpha$; it contains $Q_\nu$. [F1, F2, F9, step 1.1, step 4.1]

6.1 For $J\in P_\nu$, membership in $\Gamma_\alpha(S_\nu,\nu)$ already puts its intersections with rings $\ell<\nu$ inside $H_\ell^\alpha$.  For $\ell\geq\nu$, the stage-$\ell$ definition includes $P_\nu$ in $\bigcup_{\mu\leq\ell}P_\mu$, so $H_\ell^\alpha$ absorbs the $\ell$-th ring intersection of $J$.  Hence $P_\nu\subseteq\Gamma_\alpha(S_\nu,\omega)$. [F1, step 4.1, step 5.1]

6.2 Put $V_m^\alpha=\{\alpha\}\cup\bigcup_{\ell\geq m}H_\ell^\alpha$.  Its maximum is $\alpha$ and its part below $\alpha$ is open.  It is compact in the intermediate topology: an intermediate-open cover has a member containing $\alpha$, hence contains some $W_N^\alpha\cap(\alpha+1)$ and all $H_\ell^\alpha$ for $\ell\geq N$; only finitely many earlier compact $H_\ell^\alpha$ remain.  It is therefore intermediate-closed, and [F1] makes the $V_m^\alpha$ a clopen local base in the final refinement.  The same argument for a final-open cover, now using a contained $V_N^\alpha$, proves that $V_m^\alpha$ is compact in the final topology. [F1, F2, step 5.1]

7.1 Whenever $S_\nu=S$, steps 4.1 and 6.1 give $\forall K\in\Gamma_\alpha(S,\nu)\ \exists J\in\Gamma_\alpha(S,\omega)\ d_\alpha(K,J)\leq2^{-\nu}$.  Every relevant $S$ occurs infinitely often, so $(\star_\alpha)$ holds. [F1, step 2.1, step 4.1, step 6.1]

8.1 Steps 2.1--7.1 together with step 6.2 perform the successor construction at every countable $\alpha$, while limit stages take the accumulated earlier data.  Transfinite induction therefore produces a nice refinement satisfying every $(\star_\alpha)$. [F1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, step 7.1, discharge-induction]

9.1 Every $V_m^\alpha$ is compact by step 6.2, so [F4] gives local compactness.  It lies in $\alpha+1$, a countable ordinal, so it is a countable neighbourhood and the space is locally countable.  The base is clopen and Hausdorff by [F1], hence zero-dimensional and regular by [F6]. [F1, F4, F6, step 6.2, step 8.1]

9.2 The set $\omega$ remains dense.  Inductively, every nonempty relatively open $H_\ell^\alpha\subseteq\alpha$ meets the already dense $\omega$, so every basic tail $V_m^\alpha$ meets $\omega$; for $\alpha<\omega$ the singleton $V_m^\alpha$ itself lies in $\omega$.  Thus the refinement is separable. [F1, step 5.1, step 8.1]

9.3 Every initial segment $\alpha$ is open: if $\xi<\alpha$, then each basic neighbourhood $V_m^\xi$ is contained in $\xi+1\subseteq\alpha$.  Consequently $\mathcal U=\{\alpha:0<\alpha<\omega_1\}$ is an open cover of $\omega_1$.  A countable subfamily has countable supremum $\delta<\omega_1$ and its union is contained in $\delta$, so it misses $\delta$.  By [F5] the refined space is not Lindelöf. [F1, F5, step 6.2, step 8.1]

10.1 Combining steps 7.1 and 8.1--9.3 gives all asserted properties.  The empty $\Gamma$ cases were handled in steps 2.1 and 4.1, $\nu=0$ has $A_0=\varnothing$, the finite ordinals use singleton bases, and F9 records every nonempty simultaneous choice. [F8, F9, step 2.1, step 4.1, step 7.1, step 8.1, step 9.1, step 9.2, step 9.3, discharge-induction] ∎
