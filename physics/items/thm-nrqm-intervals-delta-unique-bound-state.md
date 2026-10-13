---
id: thm-nrqm-intervals-delta-unique-bound-state
aliases: [nrqm-intervals-and-contacts-delta-unique-bound-state]
kind: theorem
domain: mathematics
title: "The unique negative eigenvalue of the attractive delta interface operator"
status: draft
origin: pipeline
dependency_level: 6
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, thm-nrqm-intervals-delta-interface-operator, thm-derivative-of-exponential, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  thm-nrqm-intervals-delta-interface-operator: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sarang Gopalakrishnan, Self-Adjointness and the Renormalization of Singular Potentials (2006), Section 1.2 pp. 16-18 and Section 8.2.5 pp. 129-130 (one-dimensional derivative jump, attractive bound-state calculation and extension background; rigorous operator and resolvent proofs are supplied locally)"
      url: "https://math.ucr.edu/home/baez/gopalkrishnan.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics (2009), Section 2.6, Lemma 2.29 pp. 83-84 (differences of extension resolvents; point-interface results are proved locally)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $\alpha\in\mathbb R$ and let $A_\alpha$ be the
self-adjoint delta interface operator of
[[thm-nrqm-intervals-delta-interface-operator]] on
$L^2(\mathbb R;\mathbb C)$. Then:

(a) $A_\alpha$ has no negative eigenvalue when $\alpha\ge0$; and $E=0$ is
not an eigenvalue of $A_\alpha$ for any $\alpha\in\mathbb R$;

(b) if $\alpha<0$, then $E_\alpha:=-\alpha^2/4<0$ is an eigenvalue of
$A_\alpha$ with one-dimensional eigenspace
$\ker(A_\alpha-E_\alpha)=\mathbb C\,\psi_\alpha,\qquad
\psi_\alpha(x):=\sqrt{-\tfrac\alpha2}\,e^{\alpha|x|/2};$
the vector $\psi_\alpha$ satisfies $\|\psi_\alpha\|=1$, and $E_\alpha$ is the unique
negative eigenvalue, that is, if $E<0$ and $A_\alpha u=Eu$ for some
$0\ne u\in D(A_\alpha)$, then $E=E_\alpha$ and $u\in\mathbb C\psi_\alpha$;

(c) scaling: for any $\hbar,m>0$, the operator
$H_\alpha:=(\hbar^2/2m)A_\alpha$ on the same domain is self-adjoint,
and if $\alpha<0$, then
$H_\alpha\psi_\alpha=E_H\psi_\alpha$ with
$E_H=-\hbar^2\alpha^2/(8m)$; writing $g:=\hbar^2\alpha/(2m)$ gives
$E_H=-mg^2/(2\hbar^2)$.

## Facts & Assumptions

**Given:** $\alpha\in\mathbb R$; the operator $A_\alpha$ of [[thm-nrqm-intervals-delta-interface-operator]]; the parametrization $\alpha=-2\kappa$, $\kappa>0$ in part (b).

[F1] $u\in D(A_\alpha)$ means $u\in H^1(\mathbb R)$, both half-line restrictions lie in $H^2$, and $u'^*(0+)-u'^*(0-)=\alpha u^*(0)$; then $A_\alpha u=-D^2u$ on each half-line ([[thm-nrqm-intervals-delta-interface-operator]]). A class in $H^2$ on a half-line whose second weak derivative equals the continuous class $\kappa^2u$ is twice classically differentiable with $u''=\kappa^2u$ ([[lem-nrqm-intervals-weak-derivative-ac-representative]], [[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]).

[F2] The real exponential is differentiable with $(e^x)'=e^x$ ([[thm-derivative-of-exponential]]).

## Proof

1.1 [Form of a negative-energy eigenfunction] Let $E<0$, put $E=-\kappa^2$ with $\kappa>0$, and let $0\ne u\in D(A_\alpha)$ satisfy $A_\alpha u=Eu$. On $(0,\infty)$ the function satisfies $u''=\kappa^2u$ by [F1]. Put $g=u'-\kappa u$; then $g'=-\kappa g$, so [F2] gives $(e^{\kappa x}g)'=0$ and $g=Ce^{-\kappa x}$. Integrating $(e^{-\kappa x}u)'=Ce^{-2\kappa x}$ shows $u(x)=c_+e^{\kappa x}+d_+e^{-\kappa x}$. Since $u\in L^2(0,\infty)$, necessarily $c_+=0$. The same calculation on $(-\infty,0)$ gives $u(x)=c_-e^{\kappa x}+d_-e^{-\kappa x}$ there, and square integrability forces $d_-=0$. Continuity of the global representative at $0$ gives $d_+=c_-=:a$, so $u(x)=ae^{-\kappa|x|}$. Since $u\ne0$, $a\ne0$. [F1, F2, given, algebra]

1.2 [The eigenvalue at zero] Suppose $A_\alpha u=0$ with $u\ne0$. By [F1], $u''=0$ classically on each half-line, so $u$ is affine on each half-line; an affine function in $L^2(0,\infty)$ or $L^2(-\infty,0)$ vanishes, so $u=0$, a contradiction. Hence $0$ is not an eigenvalue. [F1, algebra]

2.1 [Jump condition forces $\alpha<0$] For $u(x)=ae^{-\kappa|x|}$ the one-sided traces of the derivative are $u'^*(0+)=-\kappa a$ and $u'^*(0-)=+\kappa a$, so the interface condition of [F1] reads $-2\kappa a=\alpha a$, i.e. $\alpha=-2\kappa<0$ and $E=-\kappa^2=-\alpha^2/4$. Hence a negative eigenvalue can exist only for $\alpha<0$, and then it equals $-\alpha^2/4$; every such eigenfunction is a multiple of $x\mapsto e^{\alpha|x|/2}$ (because $\kappa=-\alpha/2$). This proves the nonexistence part of (a) and the uniqueness statement of (b) up to normalisation. [step 1.1, F1, algebra]

3.1 [Existence and normalisation] Let $\alpha<0$, $\kappa:=-\alpha/2>0$, $E_\alpha=-\kappa^2=-\alpha^2/4$, and $\psi_\alpha(x):=\sqrt\kappa\, e^{-\kappa|x|}$. Then $\|\psi_\alpha\|^2=\kappa\int_{\mathbb R}e^{-2\kappa|x|}dx =\kappa\cdot\frac1\kappa=1,$ using $\int_0^\infty e^{-2\kappa x}dx=(2\kappa)^{-1}$ and symmetry. By [F2], $\psi_\alpha$ is continuous, $H^1$ on each half-line with derivative $-\kappa\,\operatorname{sgn}(x)\psi_\alpha$ a.e., and $H^2$ on each half-line with $D^2\psi_\alpha=\kappa^2\psi_\alpha$; its derivative jump is $\psi_\alpha'^*(0+)-\psi_\alpha'^*(0-)=-2\kappa\psi_\alpha(0) =\alpha\psi_\alpha(0)$, so $\psi_\alpha\in D(A_\alpha)$ by [F1], and $A_\alpha\psi_\alpha=-D^2\psi_\alpha=-\kappa^2\psi_\alpha=E_\alpha\psi_\alpha$. Hence $E_\alpha$ is a negative eigenvalue for every $\alpha<0$, and $\ker(A_\alpha-E_\alpha)=\mathbb C\psi_\alpha$ by step 2.1. This completes (a) and (b). [step 2.1, step 1.2, F1, F2, algebra]

4.1 [Scaling] For any $\alpha\in\mathbb R$ and $\hbar,m>0$, let $H_\alpha:=(\hbar^2/2m)A_\alpha$ with the same domain. Since the scalar is real and positive, the adjoint identity gives $H_\alpha^*=(\hbar^2/2m)A_\alpha^*=H_\alpha$, so $H_\alpha$ is self-adjoint. If $\alpha<0$, part (b) gives $H_\alpha\psi_\alpha=(\hbar^2/2m)E_\alpha\psi_\alpha=-\hbar^2\alpha^2/(8m)\psi_\alpha$. With $g:=\hbar^2\alpha/(2m)$, one has $\alpha=2mg/\hbar^2$, hence $-\hbar^2\alpha^2/(8m)=-mg^2/(2\hbar^2)$. No eigenvalue claim for $\alpha\ge0$ is made in this scaling clause. This proves (c). [step 3.1, algebra] ∎
