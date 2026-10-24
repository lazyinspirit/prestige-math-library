---
id: thm-bem-matrix-perturbation-transfer
kind: theorem
title: A certified matrix defect transfers to a Galerkin error bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps: [alg-bem-certified-inexact-matrix-assembly, def-bem-surface-mesh-and-piecewise-constant-density-space, thm-bem-single-layer-transmission-mapping-and-coercivity, thm-second-strang-lemma-for-nonconforming-galerkin, thm-lax-milgram, def-countable-choice, def-axiom-of-choice, lem-bem-panel-pair-duffy-certificates, lem-bem-far-panel-quadrature-residual, cor-duffy-weighted-product-gauss-error, thm-three-dimensional-laplace-expansion-error-and-work, def-bem-calderon-boundary-operators, def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, thm-cauchy-schwarz-in-an-inner-product-space]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is used through Lax–Milgram and the second Strang lemma; the Axiom of Choice and Countable Choice are inherited by the BEM specialization through the single-layer coercivity theorem and the certified assembly's weak-pairing identity.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8, and Chapter 3 §§3.1–3.3, printed pp. 40–46: the energy Galerkin system and stability from coercivity."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§4, printed pp. 620–622: coercive energy estimates and perturbation stability."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H$ be a real Hilbert space and $X_h\subset H$ a finite-dimensional subspace. Let $a:H\times H\to\mathbb R$ be bounded with continuity constant $C$ and coercive with constant $c>0$, and let $F\in H'$. Write $F_h=F|_{X_h}$ and
$$\|F_h\|_{X_h'}=\sup_{\substack{w_h\in X_h\\\|w_h\|_H\le1}}|F_h(w_h)|.$$
Let $u\in H$ solve $a(u,w)=F(w)$ for all $w\in H$, and let $u_h\in X_h$ be its exact Galerkin solution. Suppose a bilinear form $\widetilde a_h:X_h\times X_h\to\mathbb R$ and load $\widetilde F_h\in X_h'$ satisfy
$$|\widetilde a_h(v_h,w_h)-a(v_h,w_h)|\le\delta\|v_h\|_H\|w_h\|_H,\qquad |\widetilde F_h(w_h)-F_h(w_h)|\le\eta\|w_h\|_H$$
for all $v_h,w_h\in X_h$, with $0\le\delta<c$. The perturbed equation $\widetilde a_h(\widetilde u_h,w_h)=\widetilde F_h(w_h)$ has a unique solution and
$$\|u-\widetilde u_h\|_H\le(1+C/c)\inf_{v_h\in X_h}\|u-v_h\|_H+\frac1c\left(\eta+\frac{\delta(\|F_h\|_{X_h'}+\eta)}{c-\delta}\right).$$
Independently of the condition $\delta<c$ in the variational estimate, for a successful assembly in [[alg-bem-certified-inexact-matrix-assembly]], every near or far certificate gives $|A_{TS}-\widetilde A_{TS}|\le\varepsilon_{TS}\le\tau_{TS}$. If the supplied $\gamma_h>0$ satisfies $\|c\|_2\le\gamma_h^{-1}\|\sum_Tc_T1_T\|_{H^{-1/2}}$, then the returned value
$$\delta_h=\gamma_h^{-2}\left(\sum_{T,S}\varepsilon_{TS}^2\right)^{1/2}$$
bounds the bilinear form defect in the fixed $H^{-1/2}$ norm. This guarantee includes the exact near-pair identities and all derivative, nested-fiber, evaluation and arithmetic errors, and uses the far tail only under $R>a+b$; an uncertified output supplies no such bound.

For the standard branches of [[alg-bem-certified-inexact-matrix-assembly]], assume the required geometry, derivative and denominator certificates are verified and outward arithmetic can reach each prescribed positive radius. Every positive entry tolerance is then attained after finitely many levels. A supplied custom identity is accepted only with an already verified finite certificate meeting its tolerance; no refinement-termination assertion is made for arbitrary custom identities.

For P0 single-layer BEM, take $H=H^{-1/2}(\Gamma)$ with its Sobolev norm and $a(v,w)=\langle w,Vv\rangle_\Gamma$. The single-layer theorem supplies $c,C$, and a successful matrix-assembly certificate supplies $\delta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the real Hilbert exact variational problem, its finite-dimensional conforming subspace, and the stated form/load defect bounds; for the separate assembly assertion, the successful algorithm certificates and their positive lower norm bound.

[A1] The Axiom of Choice and Countable Choice are inherited by the BEM specialization through the single-layer coercivity theorem and the certified assembly's weak-pairing identity; Countable Choice is also assumed by Lax–Milgram and the second Strang theorem ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The second Strang theorem gives existence, uniqueness, and quasi-optimality for the exact coercive problem and its conforming finite-dimensional restriction; the exact restricted form/load have zero consistency defect ([[thm-second-strang-lemma-for-nonconforming-galerkin]]).

[F2] A bounded coercive real bilinear form on a real Hilbert space has a unique variational solution under Countable Choice ([[thm-lax-milgram]], [[def-countable-choice]]).

[F3] In the P0 BEM specialization, the exact form is bounded and coercive with constants $C,c>0$ ([[thm-bem-single-layer-transmission-mapping-and-coercivity]]), and $X_h$ is a finite-dimensional conforming subspace ([[def-bem-surface-mesh-and-piecewise-constant-density-space]]).

[F4] The assembly procedure records each near/far certificate, its error sum $\varepsilon_{TS}$, the exact lower norm bound $\gamma_h$ and the displayed computed $\delta_h$; missing or unverified input returns uncertified. The guarantee is proved below, not assumed from the algorithm. ([[alg-bem-certified-inexact-matrix-assembly]])

[F5] Touching panel pairs have exact finite reference-triangle identities, and disjoint pairs have the smooth fallback; the kernel integral is the weak P0 pairing. ([[lem-bem-panel-pair-duffy-certificates]], [[def-bem-calderon-boundary-operators]])

[F6] The positive centroid far rule has its stated physical-kernel quadrature residual, with charges $v_j/(4\pi)$ and strict separation $R>a+b$. ([[lem-bem-far-panel-quadrature-residual]])

[F7] The positive Duffy rule for a verified exponent $\alpha<2$ and $C^{2n}$ transformed amplitude has the stated derivative error. ([[cor-duffy-weighted-product-gauss-error]])

[F8] The single-cluster evaluator under $R>a+b$ has the geometric tail used by the procedure, with its separate arithmetic error; its work assertion is for one cluster only. ([[thm-three-dimensional-laplace-expansion-error-and-work]])

[F9] Finite-dimensional Cauchy–Schwarz gives $|d^TEc|\le\|E\|_F\|c\|_2\|d\|_2$. The BEM real Hilbert space and its dual norm are the fixed square-sum chart convention. ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]])

## Proof


1.1 For a standard near certificate, [F5] supplies the exact identity; a custom certificate supplies it as an audited hypothesis. In either case each exponent and transformed amplitude meet [F7], so the positive Duffy rule error is bounded by $E_m$. Add the separately certified nested fiber, node-evaluation and outward arithmetic radii with the triangle inequality; the certificate condition gives $|A_{TS}-\widetilde A_{TS}|\le\sum_m|c_m|(E_m+\rho_m)=\varepsilon_{TS}^{\rm near}\le\tau_{TS}$. [A1, F5, F7, given, algebra]


1.2 For a far certificate, [F6] bounds the difference between the exact entry and the positive centroid sum by $\varepsilon_{TS}^{\rm quad}+\varepsilon_{TS}^{\rm eval}$. Under the strict ball condition, [F8] bounds the point-cluster error uniformly over the target ball. Multiplying by the positive target weights and adding the outward arithmetic radius gives the remaining terms in $\varepsilon_{TS}^{\rm far}$. The total is at most $\tau_{TS}$ by the certificate condition; if $R\le a+b$, no FMM tail is used. [F6, F8, given, algebra]


1.3 Apply [F1] with exact form $a$, exact load $F$, and conforming subspace $X_h$. It gives the unique exact solution $u$, the unique exact Galerkin solution $u_h$, and $\|u-u_h\|_H\le(1+C/c)\inf_{v_h\in X_h}\|u-v_h\|_H$, since the consistency defect is zero. [A1, F1, given, construct]


1.4 The perturbation bound and coercivity of $a$ imply $\widetilde a_h(v_h,v_h)\ge(c-\delta)\|v_h\|_H^2$ for all $v_h$. Also $|\widetilde a_h(v_h,w_h)|\le(C+\delta)\|v_h\|_H\|w_h\|_H$, and $\|\widetilde F_h\|\le\|F_h\|+\eta$. Lax–Milgram [F2] therefore gives a unique perturbed solution $\widetilde u_h$. [A1, F2, given, algebra]


1.5 For a standard touching pair, [F5] gives finitely many smooth amplitudes with fixed derivative bounds. At level $k$, midpoint triangle subdivision and the $n=1$ pure-derivative remainder give total triangle error at most $C_{TS}4^{-k}$; where an opposite face has dimension three, its $2^k$ fiber midpoints add at most $C_{TS}4^{-k}$. The disjoint smooth fallback has the same bound after subdividing both reference triangles. For the far branch, [F6] gives centroid error at most $C_{TS}2^{-k}$. The fixed whole-panel balls give $q=a/(R-b)<1$, and positivity fixes $Q=|S|/(4\pi)$ and $W_T=|T|$ independently of level; hence [F8] gives a tail at most $C_{TS}q^{k+1}$ (zero if $a=0$). By [F4] the combined evaluation and arithmetic radius is at most $2^{-k-1}\tau_{TS}$, reached in finite precision refinement by hypothesis. Each total therefore tends to zero, so the first accepted level is finite for every $\tau_{TS}>0$. The ordered panel-pair set is finite, and a custom identity uses a supplied finite certificate rather than this loop. This proves the stated termination assertion. [F4, F5, F6, F7, F8, given, algebra]

2.1 Write $E_{TS}=A_{TS}-\widetilde A_{TS}$. For coefficient vectors $c,d$, finite Cauchy–Schwarz gives $|d^TEc|\le\left(\sum_{T,S}|E_{TS}|^2\right)^{1/2}\|c\|_2\|d\|_2$. The certified entry bounds imply $|E_{TS}|\le\varepsilon_{TS}$. The supplied lower norm bound in [F4] gives $\|c\|_2\le\gamma_h^{-1}\|\sum_Sc_S1_S\|_{H^{-1/2}}$ and the corresponding bound for $d$. Substitute both inequalities and take the supremum over unit $H^{-1/2}$ densities to obtain the bilinear operator-defect bound $\delta_h$. If a pair has no successful certificate, steps 1.1–1.2 provide no bound for that entry, so the procedure correctly returns uncertified. [F4, F5, F9, step 1.1, step 1.2, given, algebra]


2.2 Test the perturbed equation with $\widetilde u_h$. Then $(c-\delta)\|\widetilde u_h\|_H^2\le(\|F_h\|_{X_h'}+\eta)\|\widetilde u_h\|_H$, so $\|\widetilde u_h\|_H\le(\|F_h\|_{X_h'}+\eta)/(c-\delta)$; this also holds if $\widetilde u_h=0$. [step 1.4, given, algebra]


3.1 Put $e_h=u_h-\widetilde u_h$. Subtracting the perturbed equation from the exact discrete equation gives $a(e_h,w_h)=F_h(w_h)-\widetilde F_h(w_h)+(\widetilde a_h-a)(\widetilde u_h,w_h)$. Take $w_h=e_h$. If $e_h\ne0$, coercivity and the two defects give $\|e_h\|_H\le c^{-1}(\eta+\delta\|\widetilde u_h\|_H)$; if $e_h=0$ the same inequality holds. Substitute step 2.2 to obtain $\|e_h\|_H\le c^{-1}(\eta+\delta(\|F_h\|_{X_h'}+\eta)/(c-\delta))$. [F1, step 1.4, step 2.2, given, algebra]


4.1 By the triangle inequality, $\|u-\widetilde u_h\|_H\le\|u-u_h\|_H+\|e_h\|_H$. Apply step 1.3 and step 3.1 to get the displayed bound. In the BEM specialization, [F3] verifies the exact-form hypotheses and the entrywise and form estimates in steps 1.1–2.1 verify that the successful assembly defect is the $\delta$ required here. [F1, F3, F4, F9, step 2.1, step 1.3, step 3.1, given, algebra] ∎

