---
id: ex-gts-framing-comparison-bracket-rank-one-check
kind: example
title: "Gts framing comparison bracket rank one check"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli-examples
dependency_level: 1
deps:
  - def-gts-weak-phase-framing-moduli-datum
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definition 5.3(a), equations (5.5)–(5.8), for actual spherical-source extensions and concentration; Definition 5.11 and equation (6.31) for the cross-kernel convention. The actual class calculation is reconstructed here; the geometric seed remains pending."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§§3.2 and 4.2; exact conditional hypotheses and scope limits."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Example

Check pure source point normalization, ordered cross-kernel changes and first nontrivial triangular coefficient for any eventual nondegenerate comparison. Mark absent geometric supplier pending, not proved by the check.

## Example references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Setup


Let $A=\sum_{\beta>0}z_\beta$ in the formal positive-charge Lie algebra, and let $\delta$ be a pure source symbol. Then the source-degree-one conjugation is $e^Ae^{s\delta}e^{-A}=1+s e^{\operatorname{ad}A}\delta\pmod{s^2}$. This checks pure-source normalization and ordered low-rank coefficients only; the geometric nonzero comparison remains pending.

For the ordered cross-kernel calculation, use the actual spherical source $S_i=(1,0)_{k_i}$ in the specified CY4 category of the datum. Write $P,Q$ for the left and right source bundles, $E,F$ for the old objects, and $V_i(E)=\mathrm{Fr}_{k_i}(E)$, $V_i(F)=\mathrm{Fr}_{k_i}(F)$. A framing $P\to V_i(E)$ is an extension class $S_i\otimes P\to E[1]$. Its ACTUAL extension object $\mathcal P_i$ fits into the triangle
$$
E\longrightarrow\mathcal P_i\longrightarrow S_i\otimes P\longrightarrow E[1],
$$
and likewise $F\to\mathcal Q_i\to S_i\otimes Q\to F[1]$. These are the original pair extensions of source Definition 5.3(a); alternatively they are constructed as the homotopy fibres of the displayed extension maps. They are not hypothetical secondary-source objects.

The ordered cross-deformation complex is $R\operatorname{Hom}(\mathcal P_i,\mathcal Q_i)[1]$. Define $\Theta_i$ INTRINSICALLY as the Grothendieck class of its shifted-dual cross-cotangent complex, namely $-[R\operatorname{Hom}(\mathcal P_i,\mathcal Q_i)^\vee]$. We will compute this from the two ACTUAL extension triangles, rather than define it by its desired expansion. Put $K_i=-[R\operatorname{Hom}(E,F)^\vee]$ in the same category. Keep any prescribed index-independent trace correction throughout. For distinct indices, a comparison of total kernels must retain $K_2-K_1$ until the original old obstruction compatibility identifies those old terms; this example does not assume a missing geometric comparison to make them cancel.

Write $\iota$ for exchanging the two factors, $W_i=P^\vee\otimes V_i(F)$ and $H_i=W_i^\vee+\iota^*W_i$. Source degree is the dimension of the named source bundle, so the old sector has source zero and $\delta$ has source one and old object zero. All exponential calculations are in the formal positive-charge completion with finite coefficient sums, equivalently in each finite charge truncation. No cofinal divisor, torsion-free hypothesis or finite quiver class box is imposed.

## Facts & Assumptions

**Given:** the exact data and all unresolved suppliers retain their stated status.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records scope, not proof acceptance.




## Context only — no held theorem assumed

The actual uncapped-seed interface, `lem-gts-original-k-nondegenerate-change-of-framing` and `thm-gts-original-k-uncapped-js-and-index-independence` name the separate held geometric targets. Their conclusions are not premises of the computations below.

## Verification

1.1 Modulo $s^2$, $e^{s\delta}=1+s\delta$, so the coefficient of $s$ after conjugation is $e^A\delta e^{-A}$. Differentiating $e^{uA}\delta e^{-uA}$ gives $[A,e^{uA}\delta e^{-uA}]$ with initial value $\delta$, hence the coefficient is $e^{\operatorname{ad}A}\delta$. [given, F1, algebra]

1.2 The actual cross-deformation complex used above can be seen directly in a dg resolution: deforming a differential $d$ by $d+\epsilon a$ gives $da+ad=0$, while a first-order change of basis changes $a$ by a commutator with $d$. Thus cocycles and coboundaries are the endomorphism complex shifted by one. Off-diagonal blocks for $\mathcal P_i\oplus\mathcal Q_i$ give the stated ordered $R\operatorname{Hom}(\mathcal P_i,\mathcal Q_i)[1]$; taking the shifted dual gives $\Theta_i$. Applying $R\operatorname{Hom}$ successively to the two actual extension triangles gives additivity of its Grothendieck class in each argument:
$$
\begin{aligned} [R\operatorname{Hom}(\mathcal P_i,\mathcal Q_i)] ={}&[R\operatorname{Hom}(E,F)] +P^\vee\otimes[R\operatorname{Hom}(S_i,F)]\\ &+[R\operatorname{Hom}(E,S_i)]\otimes Q +P^\vee\otimes Q\otimes[R\operatorname{Hom}(S_i,S_i)]. \end{aligned}
$$
This is an equality of classes of the actual complexes. Their differentials include the actual extension classes; no direct-sum quasi-isomorphism or split extension is asserted. The same construction works for perfect families because derived Hom and these fibre/cofibre triangles commute with the stipulated base changes. [given, F1, algebra]

2.1 If $\alpha$ is a primitive class with no positive proper decomposition, its coefficient is exactly $[z_\alpha,\delta]$, with diagonal coefficient one. If $\alpha=\beta+\gamma$ with distinct positive factors $\beta\ne\gamma$, the two ordered contributions are $\frac12[z_\gamma,[z_\beta,\delta]]$ and $\frac12[z_\beta,[z_\gamma,\delta]]$. If $\beta=\gamma$, the contribution is $\frac12[z_\beta,[z_\beta,\delta]]$. The terms retain their exponential factorials and cannot be replaced by an unordered term. [given, F1, step 1.1, algebra]

2.2 The given concentration says $R\operatorname{Hom}(S_i,F)\simeq V_i(F)[-1]$. CY4 duality gives
$$
R\operatorname{Hom}(E,S_i) \simeq R\operatorname{Hom}(S_i,E)^\vee[-4] \simeq V_i(E)^\vee[-3].
$$
Sphericity gives $[R\operatorname{Hom}(S_i,S_i)]=[\mathbb C]+[\mathbb C[-4]]=2$. Both odd shifts in the cross terms have negative Grothendieck sign. Negating the dual of the equality in 1.2 therefore proves, rather than stipulates,
$$
\Theta_i=K_i-2P\otimes Q^\vee +P\otimes V_i(F)^\vee+V_i(E)\otimes Q^\vee =K_i-2P\otimes Q^\vee+H_i.
$$
Fixed trace/source corrections, if present in the chosen original convention, are retained on both sides and do not change the displayed framing contribution. [given, F1, step 1.2, algebra]

3.1 It follows that the actual ordered framing contribution changes by
$$
\Theta_2-\Theta_1=(K_2-K_1)+(H_2-H_1).
$$
Thus after identifying the old cross-complexes by a supplied old obstruction compatibility, the change is $H_2-H_1$; without that identification the term $K_2-K_1$ must remain. In particular removing an additional framing summand $U$ removes $P\otimes U(F)^\vee$ in the left-source/right-old position and $U(E)\otimes Q^\vee$ in the reversed position. For a formal direct-sum framing these two terms can equally be recorded as $W_U^\vee+\iota^*W_U$, where $W_U=P^\vee\otimes U(F)$. This last bookkeeping does NOT assert that a new spherical source realizing that direct-sum framing has been constructed. On the old-old sector $P=Q=0$ and on the pure-source/pure-source sector $E=F=0$, the framing contribution vanishes. [given, F1, step 2.2, algebra]

4.1 For left factor $\delta$ and right old factor $z_\beta$, set $P=\mathbb C$, $Q=0$, $E=0$: the additional framing contribution is $U(F)^\vee$. In the reversed order set $P=0$, $Q=\mathbb C$, $F=0$: it is $U(E)$. Thus dualization cannot be dropped when reversing the factors. For the rank-one calculation let $\ell=c_1(P)$ in the first order and $x=c_1(U(F))$. The added cross line has first Chern class $\ell-x$; in the exchanged order it has class $x-\ell$. Consequently its formal total-Chern multipliers are
$$
1+(\ell-x)t,\qquad 1+(x-\ell)t.
$$
Deleting the component gives the formal inverse. Multiplying these factors for formal Chern roots gives the higher-rank calculation. This proves the ordered framing terms and their Chern calculation, not a geometric transfer or an injectivity statement. [given, F1, step 3.1, algebra]

5.1 At old charge zero the conjugation coefficient is exactly $\delta$, with scalar coefficient one. It agrees with the positive unit normalization of a source point: after normalizing a one-dimensional source and taking old object zero, its classical model is $\operatorname{Spec}\mathbb C$, whose unit class is one. This fixes the formal normalization; comparison with the virtual class of any particular secondary CY4 master still requires that master's construction and compatible orientation. The source-degree-one terms in 2.1 retain precisely one such $\delta$, and their two-letter coefficients remain $1/2$ in the stated order. The actual extension-complex calculations in steps 1.2, 2.2, 3.1, and 4.1 change neither this unit coefficient nor those exponential factorials. [given, F1, step 1.1, step 2.1, step 4.1, algebra]

6.1 These calculations establish the pure-source normalization, ordered cross-kernel framing changes from the actual extension complexes, and first triangular coefficients requested in this example. They do not prove that a geometric comparison maps to a nonzero multiple of the expression: the actual nondegenerate comparison remains pending. Thus this completed formal check is not an index-independence proof and does not supply the held geometric seed. [given, F1, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, algebra] ∎
