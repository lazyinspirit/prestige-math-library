---
id: thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness
aliases: [nrqm-controlled-dynamics-resolvent-tail-short-range-completeness]
kind: theorem
domain: mathematics
title: "Resolvent-tail short-range completeness"
status: draft
origin: pipeline
dependency_level: 11
deps: [thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness, thm-nrqm-controlled-dynamics-compact-scattering-defects, thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation, thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound, thm-kato-rellich, thm-l-two-kernels-give-hilbert-schmidt-operators, thm-hilbert-schmidt-operators-are-compact, def-operator-norm, def-bounded-linear-operator, def-sobolev-space-wkp-and-its-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness: mathematical-premise
  thm-nrqm-controlled-dynamics-compact-scattering-defects: mathematical-premise
  thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation: mathematical-premise
  thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound: mathematical-premise
  thm-kato-rellich: mathematical-premise
  thm-l-two-kernels-give-hilbert-schmidt-operators: mathematical-premise
  thm-hilbert-schmidt-operators-are-compact: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "M. Reed and B. Simon, Methods of Modern Mathematical Physics IV: Analysis of Operators, Section XIII.5 (short-range completeness under integrable resolvent tails)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (Cook's criterion and completeness)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V=V_2+V_{\mathrm b}$ with $V_2\in L^2(\mathbb R^3;\mathbb R)$ real,
$V_{\mathrm b}\in L^\infty(\mathbb R^3;\mathbb R)$ real, and assume that the
function
$$h(r):=\bigl\|V(H_0-i)^{-1}\mathbf 1_{\{|x|\ge r\}}\bigr\|,\qquad H_0=-\Delta,$$
is finite for every $r\ge0$ and integrable on $[0,\infty)$. Then $H:=H_0+M_V$
is self-adjoint on $D(H)=H^2(\mathbb R^3;\mathbb C)$, the wave operators
$\Omega_\pm$ exist and are asymptotically complete:
$H_{\mathrm{sc}}(H)=\{0\}$ and
$\operatorname{ran}\Omega_\pm=H_{\mathrm{ac}}(H)=H_{\mathrm{c}}(H)$; the
scattering operator $S=\Omega_+^*\Omega_-$ is unitary on $L^2$.

In particular these conclusions hold for
$V=V_{\mathrm{loc}}+V_{\mathrm{tail}}$ with $V_{\mathrm{loc}}\in L^2$
compactly supported and $|V_{\mathrm{tail}}(x)|\le C(1+|x|)^{-1-\delta}$,
$\delta>0$, since then $h(r)\le Cr^{-1-\delta}+C(1+r)^{3/2}e^{-c'r}$ is
integrable. Coulomb tails ($\delta=0$) are excluded.

## Facts & Assumptions

**Given:** the decomposition $V=V_2+V_{\mathrm b}$, the integrability of $h$, and $H_0=-\Delta$.

[F1] Kato–Rellich with a bounded part: $V_{\mathrm b}$ is bounded and $V_2$ is infinitesimally $H_0$-bounded, so $H_0+M_V$ is self-adjoint on $H^2$ with the quadratic-form core used in [[thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]] ([[thm-kato-rellich]], [[thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]]).

[F2] $V(H_0-i)^{-1}$ is compact: on the piece $\{|y|<R\}$ the kernel is square-integrable (bounded compactly supported multiplier times the exponentially decaying free resolvent kernel), and the difference from the full operator has norm at most $h(R)$, which tends to $0$ as $R\to\infty$ because $h$ is nonincreasing and integrable ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[thm-hilbert-schmidt-operators-are-compact]], [[def-operator-norm]]).

[F3] The Cook integrand is integrable: for a free outgoing energy-cutoff vector $\eta=f(H_0)P_+\xi$, splitting $\|Ve^{-itH_0}\eta\|\le\|VR_0\|\cdot\|(1-\chi_{2at})e^{-itH_0}(H_0-i)f(H_0)P_+\xi\|+h(2at)\|(H_0-i)f(H_0)\xi\|$ and using the Mellin decay of [[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]] for the first term and the integrability of $h$ for the second shows $\int\|Ve^{-itH_0}\eta\|dt<\infty$ on each half-line; the linear span of such vectors and their free translates is dense and free-invariant ([[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]], [[thm-nrqm-controlled-dynamics-compact-scattering-defects]], [[def-bounded-linear-operator]]).

## Proof

1.1 [Self-adjointness and compactness] By [F1] the operator $H$ is self-adjoint on $H^2$, and by [F2] the operator $V(H_0-i)^{-1}$ is compact; this is the only input needed for the Weyl-type compactness statements. [F1, F2, algebra]

2.1 [Wave operators and defects] Integrability of the Cook integrand [F3] on a dense free-invariant set, together with uniform boundedness $(\|V_{\mathrm b}\|_\infty$ and the infinitesimal bound for $V_2$), gives the wave operators $\Omega_\pm$ by [[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]]-style Duhamel and the Cook criterion, and shows compactness of the defects $C_\pm=(\Omega_\pm-I)f(H_0)P_\pm$ by the same norm-integral argument as in [[thm-nrqm-controlled-dynamics-compact-scattering-defects]]. [step 1.1, F2, F3, algebra]

3.1 [Completeness] With steps 1.1 and 2.1 established, the proof of [[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]] applies without change: it uses only relative compactness of $V(H_0-i)^{-1}$, the integrable Cook estimate, and the free absolutely continuous spectrum of $H_0$. Hence $H_{\mathrm{sc}}(H)=\{0\}$ and $\operatorname{ran}\Omega_\pm=H_{\mathrm{ac}}(H)=H_{\mathrm{c}}(H)$; the scattering operator is unitary. The stated concrete decay model yields $h(r)\le Cr^{-1-\delta}+C(1+r)^{3/2}e^{-c'r}$ by the same Hilbert–Schmidt estimates, which is integrable for $\delta>0$. [step 1.1, step 2.1, algebra] ∎
