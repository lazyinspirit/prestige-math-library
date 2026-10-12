---
id: thm-nrqm-controlled-dynamics-compact-scattering-defects
aliases: [nrqm-controlled-dynamics-compact-scattering-defects]
kind: theorem
domain: mathematics
title: "Compact scattering defects"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation, thm-nrqm-controlled-dynamics-cook-domain-criterion, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, thm-l-two-kernels-give-hilbert-schmidt-operators, thm-hilbert-schmidt-operators-are-compact, lem-compositions-with-a-compact-operator-are-compact, thm-norm-limit-of-compact-operators-is-compact, thm-weyl-essential-spectrum-invariance, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]
dependency_roles:
  thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation: mathematical-premise
  thm-nrqm-controlled-dynamics-cook-domain-criterion: mathematical-premise
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  thm-l-two-kernels-give-hilbert-schmidt-operators: mathematical-premise
  thm-hilbert-schmidt-operators-are-compact: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  thm-weyl-essential-spectrum-invariance: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (wave operators, compactness of scattering defects)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "M. Reed and B. Simon, Methods of Modern Mathematical Physics IV: Analysis of Operators, Section XIII.5 (compactness criteria for scattering)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real with
$\operatorname{supp}V\subseteq B_R$, put $H_0=-\Delta$ and $H=H_0+M_V$ on
$D(H)=H^2(\mathbb R^3)$, and let $\Omega_\pm$ be the wave operators of
[[thm-nrqm-controlled-dynamics-cook-domain-criterion]] for the pair $(H_0,H)$
(they exist on all of $L^2$ by the Cook construction applied to the Schwartz
class, as in [[thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]] (a)–(b)).
Let $P_\pm=\mathbf 1_{(0,\infty)}(\pm D)$ be the dilation half-line projections
of [[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]], and
let $f\in C_c(\mathbb R)$. Then:

(a) $V(H_0-i)^{-1}$ is compact;

(b) the scattering defects $C_\pm:=(\Omega_\pm-I)f(H_0)P_\pm$ are compact
operators on $L^2(\mathbb R^3)$;

(c) $f(H)-f(H_0)$ is compact and $\sigma_{\mathrm{ess}}(H)=[0,\infty)$.

## Facts & Assumptions

**Given:** the real bounded compactly supported $V$, the operators $H_0,H$, the wave operators $\Omega_\pm$, the projections $P_\pm$, and $f\in C_c(\mathbb R)$.

[F1] $V(H_0-i)^{-1}$ has kernel $\frac{V(x)e^{-|x-y|}}{4\pi|x-y|}$ up to normalization, square-integrable because $V$ is bounded with compact support and $|x-y|^{-2}$ is locally integrable in dimension $3$; hence it is Hilbert–Schmidt and compact, and compositions of compact with bounded operators stay compact ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[thm-hilbert-schmidt-operators-are-compact]], [[lem-compositions-with-a-compact-operator-are-compact]]).

[F2] Duhamel and integrability: from the Cook construction, $C_+ = i\int_0^\infty e^{itH}Ve^{-itH_0}f(H_0)P_+\,dt$, and each integrand is compact: it factors as $e^{itH}\cdot V(H_0-i)^{-1}\cdot (H_0-i)e^{-itH_0}f(H_0)P_+$, a compact operator times a uniformly bounded one; the integral converges in operator norm because the Mellin estimate of [[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]] (c) makes $\|Ve^{-itH_0}f(H_0)P_+\|$ integrable ([[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]], [[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]], [[def-operator-norm]]).

[F3] Weyl's theorem: relatively compact perturbations do not change the essential spectrum; polynomial/rational functions of $H$ and $H_0$ differ by compact operators after approximation in $C_0(\mathbb R)$ ([[thm-weyl-essential-spectrum-invariance]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-bounded-linear-operator]]).

## Proof

1.1 [Compactness of the defect] Step (a) is [F1]. For (b), the integral formula of [F2] writes $C_+$ as a norm limit of Riemann sums of compact operators (the integrand is norm-continuous and norm-integrable), hence $C_+$ is compact by the closedness of the compact operators under norm limits; the incoming sign is identical. [F1, F2, F3, algebra]

2.1 [Consequences for the spectrum] First, the resolvent difference $(H-i)^{-1}-(H_0-i)^{-1}=-(H-i)^{-1}V(H_0-i)^{-1}$ is compact, because $V(H_0-i)^{-1}$ is compact by [F1] and $(H-i)^{-1}$ is bounded. Telescoping products of resolvents then show that $r(H)-r(H_0)$ is compact for every rational function $r$ vanishing at infinity; since such rational functions are uniformly dense in $C_0(\mathbb R)$ (Stone-Weierstraß on the one-point compactification), [F3] yields that $f(H)-f(H_0)$ is compact for every $f\in C_0(\mathbb R)$ and, by Weyl's theorem, that $\sigma_{\mathrm{ess}}(H)=\sigma_{\mathrm{ess}}(H_0)=[0,\infty)$. [step 1.1, F1, F2, F3, algebra] ∎
