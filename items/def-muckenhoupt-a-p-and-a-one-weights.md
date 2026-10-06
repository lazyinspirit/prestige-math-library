---
id: def-muckenhoupt-a-p-and-a-one-weights
kind: definition
title: Muckenhoupt A_p and A_1 weights
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-weight-and-weighted-lp-space, def-axis-parallel-cube-averages-and-cube-maximal-functions, lem-ball-and-cube-maximal-functions-are-comparable, def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-essential-supremum-with-respect-to-a-measure, cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Definition 7.1.1 with (7.1.16)-(7.1.19) and Remark 7.1.2 (the A_1 class and characteristic), printed pp. 502-503; Definition 7.1.3 and Remark 7.1.4 (the A_p condition and its cube/ball equivalence), printed pp. 503-504; Proposition 7.1.5 (1)-(3), printed p. 504"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Definitions 4.7 and 4.14 with Remarks 4.9 and 4.16, printed pp. 71-74"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Fix $n\ge1$. All averages and maximal functions below are the cube-based ones of
[[def-axis-parallel-cube-averages-and-cube-maximal-functions]]. Nonnegative measurable averages are extended integrals in $[0,\infty]$; in particular the reciprocal-weight average may be infinite before $A_p$ membership is established. Use the positive finite representative of [[def-weight-and-weighted-lp-space]] for reciprocal powers.

**The class $A_p$, $1<p<\infty$.** A weight $w$
([[def-weight-and-weighted-lp-space]]) belongs to $A_p$ when
$$[w]_{A_p}:=\sup_Q\langle w\rangle_Q\bigl\langle w^{-1/(p-1)}\bigr\rangle_Q^{p-1}<\infty,$$
the supremum over all axis-parallel cubes $Q$, and $[w]_{A_p}$ is the **$A_p$
characteristic** of $w$. The supremum over all Euclidean balls instead differs
from the cube supremum by at most a dimensional factor: the two sandwiches of
[[lem-ball-and-cube-maximal-functions-are-comparable]] compare $w$- and
$w^{-1/(p-1)}$-averages over nested balls and cubes, so
$\sup_B\langle w\rangle_B\langle w^{-1/(p-1)}\rangle_B^{p-1}$ is finite exactly
when $[w]_{A_p}$ is, and the two numbers are bounded by dimensional powers of
one another. If $[w]_{A_p}<\infty$, then $\langle w^{-1/(p-1)}\rangle_Q<\infty$
and $\langle w\rangle_Q>0$ for every cube $Q$ (both are finite or nonzero
because $w>0$ a.e. and $[w]_{A_p}$ is finite), so $w^{-1/(p-1)}\in
L^1_{\mathrm{loc}}$ and every cube satisfies $0<w(Q)<\infty$ and
$0<\int_Qw^{-1/(p-1)}\,d\lambda<\infty$.

**The class $A_1$.** A weight $w$ belongs to $A_1$ when $M^*w\le Cw$ almost
everywhere for some constant $C<\infty$, where $M^*$ is the uncentred ball
maximal function of [[def-centered-and-uncentered-hardy-littlewood-maximal-functions]];
by the ball-cube comparison this is equivalent to the same pointwise bound for
the uncentred cube maximal function $M_c^*$, and $M_cw\le M_c^*w\le2^nM_cw$
pointwise (an uncentred cube $Q\ni x$ of side $\ell$ is contained in the
centred cube $Q(x,\ell)$ of $2^n$-fold volume), so the centred form is
equivalent as well. For an $A_1$ weight the infimum $a$ of admissible constants is attained: choose admissible $C_j<a+1/(j+1)$, discard their countably many exceptional null sets, and pass to the limit in $M^*w\le C_jw$. Thus the **$A_1$ characteristic** $[w]_{A_1}$ is defined as the least such
$C$, and $M^*w\le[w]_{A_1}w$ holds almost everywhere. The class $A_1$ is **not**
obtained by substituting $p=1$ into the $A_p$ formula: the reciprocal power
$w^{-1/(p-1)}$ has no finite-exponent analogue, and the equivalent
cube-average/essential-infimum condition $\langle w\rangle_Q\le
c_n[w]_{A_1}\operatorname{ess\,inf}_Qw$, with a dimensional factor $c_n$ is a separate lemma on this page. Here $\operatorname{ess\,inf}_Qw:=\sup\{a\ge0:w\ge a\text{ a.e. on }Q\}$, the lower-bound analogue of [[def-essential-supremum-with-respect-to-a-measure]]. It is finite because $w$ is integrable on $Q$, and $w$ is at least this supremum a.e.: take a sequence of admissible bounds tending to it and discard their countable union of null exceptional sets.

**Invariance.** Translations, positive isotropic dilations and positive scalar
multiples preserve both classes with the same characteristic: for
$\tau_zw(x):=w(x-z)$ one has $\langle\tau_zw\rangle_Q=\langle w\rangle_{Q-z}$
and, with $\sigma=w^{-1/(p-1)}$, $\langle\tau_z\sigma\rangle_Q^{p-1}
=\langle\sigma\rangle_{Q-z}^{p-1}$ by the $C^1$ change-of-variables theorem
applied to the translation $x\mapsto x-z$
([[cor-c-one-change-of-variables-for-l-one-functions]]), which carries cubes to
cubes of the same side length; for $\delta_\lambda w(x):=w(\lambda x)$ with
$\lambda>0$ the determinant $\lambda^n$ introduced by the substitution
$x\mapsto\lambda x$ cancels between the two averages, since
$\delta_\lambda\sigma=(\delta_\lambda w)^{-1/(p-1)}$; and $\langle cw\rangle_Q
\bigl\langle(cw)^{-1/(p-1)}\bigr\rangle_Q^{p-1}
=\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}$ for $c>0$. The same
computations apply verbatim to the condition $M^*w\le Cw$ a.e.
