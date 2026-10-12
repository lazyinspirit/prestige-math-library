---
id: thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation
aliases: [nrqm-magnetic-and-detection-gauge-h2-domain-preservation]
kind: theorem
domain: mathematics
title: "Gauge multiplication preserves H2 and transports the magnetic momentum"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator, def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, lem-nrqm-magnetic-and-detection-weak-product-rule, lem-classical-derivatives-are-weak-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-derivative-of-exponential, def-complex-exponential, def-sobolev-space-wkp-and-its-norm, thm-dominated-convergence, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  lem-nrqm-magnetic-and-detection-weak-product-rule: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, first edition 2009, Section 7.2 printed pp. 167-168 (PDF pp. 179-180), equations (7.22)-(7.24) and Theorem 7.8: the free H2 operator and Fourier realization. Background only; this source does not state the magnetic gauge H2-domain or time-derivative theorem, whose argument is supplied locally."
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.3.1 printed pp. 46-47 (PDF pp. 54-55), equations (3.40)-(3.45): time-independent vector-potential gauge change, compensating phase and magnetic momentum/Hamiltonian intertwining. The explicit H2 bounds and time-dependent derivative assertion are supplied locally, not attributed to this section."
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$, $m>0$,
$q\in\mathbb R$, an open interval $I\subseteq\mathbb R$, admissible magnetic
data $(A,\Phi)$ on $\mathbb R^3$ and a real function
$\chi:\mathbb R^3\times I\to\mathbb R$ such that:

1. for every $t\in I$, $\chi(\cdot,t)$ is $C^2$ on $\mathbb R^3$, and the
   functions $D_j\chi(\cdot,t)$, $D_kD_j\chi(\cdot,t)$ are bounded on
   $\mathbb R^3$ with bounds independent of $t\in I$;
2. for every $x\in\mathbb R^3$, $t\mapsto\chi(x,t)$ is differentiable on $I$,
   and $\partial_t\chi$ is bounded on $\mathbb R^3\times I$.

Put $\theta(x,t):=\frac{q}{\hbar}\chi(x,t)$ and let
$G(t):L^2(\mathbb R^3;\mathbb C)\to L^2(\mathbb R^3;\mathbb C)$ be
multiplication by $e^{i\theta(\cdot,t)}$ ([[def-complex-exponential]]).
Then for every $t\in I$:

(a) $G(t)$ is unitary and preserves $W^{1,2}$ and $W^{2,2}$:
$G(t)W^{k,2}(\mathbb R^3;\mathbb C)=W^{k,2}(\mathbb R^3;\mathbb C)$ for
$k=1,2$;

(b) for every $u\in W^{1,2}$ and every $j$,
$$D_j(G(t)u)=G(t)D_ju+i\,(D_j\theta(\cdot,t))\,G(t)u \qquad\text{as }L^2\text{ classes};$$

(c) for every $u\in W^{1,2}$ the gauge covariance identity holds:
$$\bigl(P_j-q(A_j+D_j\chi(\cdot,t))\bigr)G(t)u=G(t)\bigl(P_j-qA_j\bigr)u;$$

(d) $t\mapsto G(t)h$ is continuous on $I$ for every $h\in L^2$, and for every
$h\in L^2$ and $t\in I$ the difference quotients converge in $L^2$:
$$\lim_{s\to0}\frac1s\bigl(G(t+s)h-G(t)h\bigr) =\frac{iq}{\hbar}\,\bigl(\partial_t\chi(\cdot,t)\bigr)\,G(t)h .$$

The function $\chi$ is an arbitrary function with the stated regularity; no
identification with a physical gauge choice is asserted.

## Facts & Assumptions

**Given:** $\hbar,m>0$, $q\in\mathbb R$, admissible $(A,\Phi)$, a gauge function $\chi$ as in the Statement, $\theta=q\chi/\hbar$ and the multipliers $G(t)$.

[F1] Multiplication by a unimodular measurable function is unitary on $L^2$, with inverse given by multiplication by the conjugate; it preserves every $L^p$ norm, $1\le p\le\infty$. In particular $|G(t)h|=|h|$ pointwise for chosen representatives.

[F2] Classical partial derivatives of smooth functions are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F3] Chain rule and product rule: for each fixed $t$, $D_j(e^{i\theta(x,t)})=i\,D_j\theta\,e^{i\theta}$ and $D_kD_j(e^{i\theta})=\bigl(i\,D_kD_j\theta-(D_k\theta)(D_j\theta)\bigr)e^{i\theta}$ pointwise, by the $C^2$ regularity of $\theta(\cdot,t)$ and the usual chain and product rules for real partial derivatives ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-derivative-of-exponential]]).

[F4] Weak product rule: if $a\in L^\infty$ has weak first derivatives $D_ka\in L^\infty$ and $u\in W^{1,2}$, then $au\in W^{1,2}$ and $D_k(au)=a\,D_ku+(D_ka)u$ ([[lem-nrqm-magnetic-and-detection-weak-product-rule]]).

[F5] $P_jf=-i\hbar D_jf$ for $f\in D(P_j)$, and $W^{1,2}\subseteq D(P_j)$; $W^{2,2}=\{f:D_jf\in W^{1,2}\ \forall j\}$ ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]], [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [[def-sobolev-space-wkp-and-its-norm]]).

[F6] Dominated convergence for a sequence of measurable functions dominated by an $L^2$ class ([[thm-dominated-convergence]]).

## Proof

1.1 [Unitarity] For each $t$, $|e^{i\theta(x,t)}|=1$ for every $x$, so [F1] gives that $G(t)$ is unitary on $L^2$. This is the first assertion of (a). [given, F1]

1.2 [First-order preservation] Let $u\in W^{1,2}$. By [F3] the multiplier $a:=e^{i\theta(\cdot,t)}$ is bounded with classical derivative $D_ja=i(D_j\theta)a$, and this classical derivative is its weak derivative by [F2]; the coefficient $D_j\theta$ is bounded by hypothesis. So [F4] applies: $G(t)u\in W^{1,2}$ and $D_j(G(t)u)=G(t)D_ju+i(D_j\theta)G(t)u$, which is (b). [given, F2, F3, F4]

2.1 [Second-order preservation] Let $u\in W^{2,2}$, so $D_ju\in W^{1,2}$ for every $j$. By step 1.2, $D_j(G(t)u)=G(t)D_ju+i(D_j\theta)G(t)u$. Apply [F4] to $a=G(t)$ and the class $D_ju\in W^{1,2}$: $G(t)D_ju\in W^{1,2}$, with $D_k(G(t)D_ju)=G(t)D_kD_ju+i(D_k\theta)G(t)D_ju$. Apply [F4] to the bounded coefficient $iD_j\theta$ (whose weak derivative $iD_kD_j\theta$ is bounded by [F2], [F3]) and $u$: $i(D_j\theta)G(t)u\in W^{1,2}$. Adding, $D_j(G(t)u)\in W^{1,2}$ with an explicit formula, so $G(t)W^{2,2}\subseteq W^{2,2}$; applying the same argument to $-\chi$ (which satisfies the same hypotheses) shows $G(t)^{-1}W^{2,2}\subseteq W^{2,2}$, hence equality, and with step 1.2 this proves (a). [given, step 1.2, F2, F3, F4]

2.2 [Gauge covariance] Let $u\in W^{1,2}$. By [F5], $P_j(G(t)u)=-i\hbar D_j(G(t)u)$ and $P_ju=-i\hbar D_ju$; substituting step 1.2, $\bigl(P_j-q(A_j+D_j\chi)\bigr)G(t)u=-i\hbar\bigl(G(t)D_ju+i(D_j\theta)G(t)u\bigr)-q(A_j+D_j\chi)G(t)u=G(t)P_ju+\hbar(D_j\theta)G(t)u-qA_jG(t)u-q(D_j\chi)G(t)u$. Since $D_j\theta=\frac q\hbar D_j\chi$, the middle two terms cancel and the right side equals $G(t)\bigl(P_ju-qA_ju\bigr)=G(t)\bigl(P_j-qA_j\bigr)u$, which is (c). [given, step 1.2, F5, algebra]

3.1 [Time continuity and differentiability] Fix $h\in L^2$ and $t\in I$. Since $t\mapsto\theta(x,t)$ is differentiable, it is continuous, so $G(t+s)h\to G(t)h$ pointwise a.e. as $s\to0$, and $|G(t+s)h-G(t)h|\le2|h|\in L^2$; [F6] gives $L^2$ convergence, which is the first half of (d). For the difference quotients, $\frac1s(G(t+s)h-G(t)h)(x)=\frac{e^{i(\theta(x,t+s)-\theta(x,t))}-1}{s}e^{i\theta(x,t)}h(x)$. By differentiability of $t\mapsto\theta(x,t)$ and the complex chain rule, the bracket tends to $i\,\partial_t\theta(x,t)$ for every $x$, and its modulus is bounded by $\sup_{\mathbb R^3\times I}|\partial_t\theta|$, so the difference quotients converge pointwise with domination by $\sup|\partial_t\theta|\,|h|\in L^2$; [F6] gives the asserted $L^2$ limit $\frac{iq}{\hbar}(\partial_t\chi(\cdot,t))G(t)h$. This is the second half of (d). [given, F3, F6, algebra] ∎
