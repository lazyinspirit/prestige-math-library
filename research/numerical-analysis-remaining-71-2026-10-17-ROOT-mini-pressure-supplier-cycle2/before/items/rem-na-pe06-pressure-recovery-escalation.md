---
id: rem-na-pe06-pressure-recovery-escalation
kind: remark
title: "PE06 instantaneous pressure clauses remain escalated after primitive recovery"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 12
deps: [thm-na-mini-navier-stokes-be-subsequential-limit, thm-na-mini-be-smooth-velocity-error, def-na-evolutionary-incompressible-ns-weak-solution, lem-na-continuous-pressure-recovery-from-solenoidal-residual, lem-na-solenoidal-evolution-integrated-pressure-recovery, thm-na-mini-be-smooth-integrated-pressure-error, thm-na-discrete-helmholtz-projection-and-pressure-schur, thm-na-mini-element-fortin-stability, thm-na-mini-element-h1-pressure-error]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "Definition 2.1 and following paragraph, PDF p.5; §§3.1–3.3 and §4. The paper's pressure-free solution class and distinct regularized-stress setting are not identified with the PE06 Newtonian claim."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53 — Stokes Equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Lemma 53.9 and Theorems 53.17–53.19: static divergence lifting, inf-sup and pressure estimates; these do not prove the missing time-dependent claims."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2, and Chapter 8 MINI-element sections: static mixed estimates only."
verification: {}
---

## Escalation

The PE06 plan requires two instantaneous pressure conclusions: a pressure-bearing subsequential weak solution with $p\in L^{4/3}(0,T;L^2_0(D))$, and the pressure part of the smooth-branch velocity/pressure error estimate. The unchanged [[thm-na-mini-navier-stokes-be-subsequential-limit]] proves the solenoidal velocity equation and its energy inequality; it does not state a pressure-bearing solution in the regular-pressure class [[def-na-evolutionary-incompressible-ns-weak-solution]]. The unchanged [[thm-na-mini-be-smooth-velocity-error]] proves the velocity estimate only.

The additive [[lem-na-solenoidal-evolution-integrated-pressure-recovery]] now gives a unique mean-zero time-distribution pressure and bounded continuous pressure primitive for the limiting velocity, plus uniformly bounded discrete primitives and weak convergence of reconstructed pressures as time distributions. It also proves the exact criterion: the regular $L^{4/3}_tL^2_0$ pressure exists precisely when the actual full distributional derivative $u_t\in L^{4/3}(0,T;V^*)$. The current limit argument establishes the derivative only after restriction to $V_\sigma$. Extending that restricted functional by a divergence lift does not prove that the extension is the actual full derivative. The sufficient condition $u\in W^{1,4/3}(0,T;L^2(D)^d)$ would imply the criterion, but this regularity is not supplied by the stated energy hypotheses. The primitive result does not establish it.

The additive [[thm-na-mini-be-smooth-integrated-pressure-error]] gives a first-order estimate for the accumulated pressure $P(t)=\int_0^tp(s)\,ds$, its piecewise-affine discrete primitive, and the specified negative time norm. It does not bound the instantaneous $L^{4/3}_tL^2_x$ pressure error. Applying the discrete inf-sup inequality to the unintegrated pressure equation leaves the full-test derivative residual
$$d_n=\sup_{v_h\ne0}\frac{|(D_\tau e_n,v_h)_{L^2}|}{\|v_h\|_V},\qquad \Delta=\left(\sum_n\tau_nd_n^{4/3}\right)^{3/4}.$$
A proof of $\Delta=O(h+\tau_{\max})$, or a different complete instantaneous pressure argument under the original hypotheses, would close that clause. The current nodal velocity estimate does not itself control this derivative norm uniformly as the smallest time step tends to zero. The new primitive estimate cannot be differentiated to supply it.

The formerly proposed uniform $H^1$ bound for the $L^2$-orthogonal projector $P_{Z_h}:V_h\to Z_h$ is false. On the square, the continuous orthogonal projection of an explicit smooth no-slip velocity onto the Leray space has a nonzero tangential boundary trace, so it is not in $H^1_0$. If the proposed discrete bound held on a refining MINI family, composition with the actual uniformly $H^1$-stable Fortin maps and weak compactness would force that false continuous mapping property. The full-test and restricted-$V_h$ versions are therefore unavailable. The projector obstruction is a refutation of that proposed supplier only; it proves neither that the original pressure claims are impossible nor that another route cannot prove them.

**Affected claims:** the PE06 pressure-bearing regularity clause following [[thm-na-mini-navier-stokes-be-subsequential-limit]], including $p\in L^{4/3}(0,T;L^2_0(D))$, and the instantaneous pressure-rate clause paired with [[thm-na-mini-be-smooth-velocity-error]].

**Source limits:** Süli–Tscherpel explicitly use a pressure-free weak formulation and discuss a distributional-in-time pressure expectation for their Lipschitz no-slip setting. Their problem has a more general stress law and a different approximation/limit route, so that statement is not a proof of the exact Newtonian, $L^2$-forcing PE06 claim or of its impossibility. Guermond and Boffi–Brezzi–Fortin supply static divergence lifting and mixed inf-sup context, not either missing evolutionary estimate.

**Current decision:** keep both original instantaneous pressure claims escalated to the owner for a complete proof under their unchanged hypotheses. Do not replace them by the primitive conclusions, classify them as an open problem, or use the false projector route.

