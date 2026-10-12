---
id: thm-nrqm-intervals-delta-rank-one-resolvent
aliases: [nrqm-intervals-and-contacts-delta-rank-one-resolvent]
kind: theorem
domain: mathematics
title: "Rank-one resolvent formula for the delta interface operator"
status: draft
origin: pipeline
dependency_level: 6
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, thm-nrqm-intervals-delta-interface-operator, lem-nrqm-intervals-free-line-resolvent, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-bounded-linear-operator, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-intervals-delta-interface-operator: mathematical-premise
  lem-nrqm-intervals-free-line-resolvent: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sarang Gopalakrishnan, Self-Adjointness and the Renormalization of Singular Potentials (Amherst College honors thesis, 2006), Chapter 1 pp. 15-32 and Chapter 8 pp. 123-138 (resolvent and scattering data for one-dimensional point interactions)"
      url: "https://math.ucr.edu/home/baez/gopalkrishnan.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.2 pp. 187-193 (resolvent formulas for point boundary conditions)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $\alpha\in\mathbb R$ and let $A_\alpha$ be the
self-adjoint delta interface operator of
[[thm-nrqm-intervals-delta-interface-operator]]; write $A_0$ for the
operator with $\alpha=0$, so that $D(A_0)=H^2(\mathbb R)$ and
$A_0u=-D^2u$. For $z\in\mathbb C\setminus\mathbb R$ let $k$ with $k^2=-z$,
$\operatorname{Re}k>0$, let $G_z(t)=(2k)^{-1}e^{-k|t|}$, and define the
bounded linear functional
$\ell_z(f):=\int_{\mathbb R}G_z(y)f(y)\,dy\qquad(f\in L^2(\mathbb R)).$
Then for every $z\in\mathbb C\setminus\mathbb R$:

(a) $1+\alpha G_z(0)=1+\alpha/(2k)\ne0$, and
$(A_\alpha-z)^{-1}f=(A_0-z)^{-1}f-\frac{\alpha\,\ell_z(f)}{1+\alpha G_z(0)}\,G_z
\qquad(f\in L^2(\mathbb R));$

(b) the difference
$K_z:=(A_\alpha-z)^{-1}-(A_0-z)^{-1}$ is a rank-one bounded operator,
$K_zf=-\dfrac{\alpha}{1+\alpha G_z(0)}\,\ell_z(f)\,G_z$, its range is
contained in $\mathbb C G_z$, and
$\|K_z\|\le\frac{|\alpha|\,\|G_z\|_{L^2}^2}{|1+\alpha G_z(0)|}
=\frac{|\alpha|}{4|k|^2\operatorname{Re}k\,\bigl|1+\alpha/(2k)\bigr|}\,;$
consequently
$\bigl\|(A_\alpha-z)^{-1}\bigr\|\le
\bigl\|(A_0-z)^{-1}\bigr\|+|K_z\| .$

## Facts & Assumptions

**Given:** $\alpha\in\mathbb R$; the operators $A_\alpha$, $A_0$ of [[thm-nrqm-intervals-delta-interface-operator]]; $z\in\mathbb C\setminus\mathbb R$; $k^2=-z$, $\operatorname{Re}k>0$; the kernel $G_z$.

[F1] $A_\alpha$ is self-adjoint, so $\operatorname{ran}(A_\alpha-z)=L^2(\mathbb R)$ and $A_\alpha-z$ is injective; $(A_\alpha-z)^{-1}$ is a bounded operator on $L^2(\mathbb R)$. The free resolvent is $(A_0-z)^{-1}f=G_z*f$ with range $H^2(\mathbb R)$; $G_z'(0+)-G_z'(0-)=-1$ and $G_z(0)=(2k)^{-1}$ ([[thm-nrqm-intervals-delta-interface-operator]], [[lem-nrqm-intervals-free-line-resolvent]]).

[F2] Cauchy-Schwarz: $|\ell_z(f)|\le\|G_z\|_{L^2}\|f\|_{L^2}$, with $\|G_z\|_{L^2}=(2|k|\sqrt{\operatorname{Re}k})^{-1}$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[lem-nrqm-intervals-free-line-resolvent]]); a map $f\mapsto\ell(f)w$ with $\ell$ bounded linear and fixed $w\ne0$ is bounded of norm $\|\ell\|\,\|w\|$ ([[def-bounded-linear-operator]]).

## Proof

1.1 [Nonvanishing denominator] If $1+\alpha/(2k)=0$, then $2k=-\alpha\in\mathbb R$; but $k^2=-z$ is nonreal because $z$ is nonreal, so $k$ itself is nonreal (a real $k$ would give the real number $k^2$). Hence $1+\alpha G_z(0)=1+\alpha/(2k)\ne0$. [given, algebra]

1.2 [Construction of the preimage] Fix $f\in L^2(\mathbb R)$ and put $r:=(A_0-z)^{-1}f$. Exactly as in the range construction of [[thm-nrqm-intervals-delta-interface-operator]], the vector $u:=r+cG_z,\qquad c:=-\frac{\alpha\,r(0)}{1+\alpha G_z(0)},$ lies in $D(A_\alpha)$ and satisfies $(A_\alpha-z)u=f$; here $r(0)=\int_{\mathbb R}G_z(y)f(y)dy=\ell_z(f)$ because $r(x)=\int G_z(x-y)f(y)dy$ evaluated at $x=0$. [F1, given, algebra]

2.1 [The resolvent formula] Since $A_\alpha-z$ is injective by [F1], the vector $u$ of step 1.2 is the unique preimage of $f$, hence $(A_\alpha-z)^{-1}f=u=r+cG_z=(A_0-z)^{-1}f -\frac{\alpha\,\ell_z(f)}{1+\alpha G_z(0)}G_z,$ which is (a). [step 1.2, F1]

3.1 [Rank one and bounds] The map $K_z$ displayed in (b) equals $f\mapsto\ell_z(f)w$ with $w:=-\alpha G_z/(1+\alpha G_z(0))$; it is linear, its range is contained in $\mathbb C G_z$, and by [F2] $\|K_z\|\le\|\ell_z\|\,\|w\|=\|G_z\|_{L^2}\cdot \frac{|\alpha|\,\|G_z\|_{L^2}}{|1+\alpha G_z(0)|} =\frac{|\alpha|\,\|G_z\|_{L^2}^2}{|1+\alpha G_z(0)|} .$ Substituting $\|G_z\|_{L^2}^2=(4|k|^2\operatorname{Re}k)^{-1}$ from [F2] gives the displayed value, and the triangle inequality for operator norms gives $\|(A_\alpha-z)^{-1}\|\le\|(A_0-z)^{-1}\|+\|K_z\|$. This is (b). [step 2.1, F2, algebra] ∎
