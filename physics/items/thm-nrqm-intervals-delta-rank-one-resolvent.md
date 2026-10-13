---
id: thm-nrqm-intervals-delta-rank-one-resolvent
aliases: [nrqm-intervals-and-contacts-delta-rank-one-resolvent]
kind: theorem
domain: mathematics
title: "Rank-one resolvent formula for the delta interface operator"
status: draft
origin: pipeline
dependency_level: 6
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, thm-nrqm-intervals-delta-interface-operator, lem-nrqm-intervals-free-line-resolvent, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, lem-nrqm-intervals-integration-by-parts, lem-nrqm-intervals-weak-derivative-ac-representative, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-bounded-linear-operator, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-intervals-delta-interface-operator: mathematical-premise
  lem-nrqm-intervals-free-line-resolvent: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
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
    - title: "Sarang Gopalakrishnan, Self-Adjointness and the Renormalization of Singular Potentials (2006), Section 1.2 pp. 16-18 and Section 8.2.5 pp. 129-130 (one-dimensional derivative jump, attractive bound-state calculation and extension background; rigorous operator and resolvent proofs are supplied locally)"
      url: "https://math.ucr.edu/home/baez/gopalkrishnan.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics (2009), Section 2.6, Lemma 2.29 pp. 83-84 (differences of extension resolvents; point-interface results are proved locally)"
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
$K_z:=(A_\alpha-z)^{-1}-(A_0-z)^{-1}$ is a bounded operator of rank at most one (rank one if $\alpha\ne0$, and zero if $\alpha=0$),
$K_zf=-\dfrac{\alpha}{1+\alpha G_z(0)}\,\ell_z(f)\,G_z$, its range is
contained in $\mathbb C G_z$, and
$\|K_z\|\le\frac{|\alpha|\,\|G_z\|_{L^2}^2}{|1+\alpha G_z(0)|}
=\frac{|\alpha|}{4|k|^2\operatorname{Re}k\,\bigl|1+\alpha/(2k)\bigr|}\,;$
consequently
$\bigl\|(A_\alpha-z)^{-1}\bigr\|\le
\bigl\|(A_0-z)^{-1}\bigr\|+\|K_z\| .$

## Facts & Assumptions

**Given:** $\alpha\in\mathbb R$; the operators $A_\alpha$, $A_0$ of [[thm-nrqm-intervals-delta-interface-operator]]; $z\in\mathbb C\setminus\mathbb R$; $k^2=-z$, $\operatorname{Re}k>0$; the kernel $G_z$.

[F1] $A_\alpha$ is self-adjoint, so $\operatorname{ran}(A_\alpha-z)=L^2(\mathbb R)$ and $A_\alpha-z$ is injective; $(A_\alpha-z)^{-1}$ is bounded ([[thm-nrqm-intervals-delta-interface-operator]]). The free operator $A_{\mathrm{free}}=-D^2$ on $H^2(\mathbb R)$ has resolvent $(A_{\mathrm{free}}-z)^{-1}f=G_z*f$ with range $H^2(\mathbb R)$; $G_z'(0+)-G_z'(0-)=-1$ and $G_z(0)=(2k)^{-1}$ ([[lem-nrqm-intervals-free-line-resolvent]]). Step 1.1 proves that $A_{\mathrm{free}}$ equals the member $A_{\alpha=0}$ of the interface family, justifying the notation $A_0$ in the Statement.

[F2] Cauchy-Schwarz: $|\ell_z(f)|\le\|G_z\|_{L^2}\|f\|_{L^2}$, with $\|G_z\|_{L^2}=(2|k|\sqrt{\operatorname{Re}k})^{-1}$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[lem-nrqm-intervals-free-line-resolvent]]); a map $f\mapsto\ell(f)w$ with $\ell$ bounded linear and fixed $w\ne0$ is bounded of norm $\|\ell\|\,\|w\|$ ([[def-bounded-linear-operator]]).

## Proof

1.1 [Zero-coupling identification and nonvanishing denominator] Let $A_0^{\mathrm{int}}$ be the interface operator with parameter $\alpha=0$. If $u\in D(A_0^{\mathrm{int}})$, its piecewise second derivative $q$ is in $L^2(\mathbb R)$ and the two one-sided derivative traces agree. For every $\varphi\in C_c^\infty(\mathbb R)$, integration by parts on the two half-lines gives $\int_{\mathbb R}u'\varphi'=(u'^*(0-)-u'^*(0+))\varphi(0)-\int_{\mathbb R}q\varphi=-\int_{\mathbb R}q\varphi$; hence $D^2u=q$ globally and $u\in H^2(\mathbb R)$. Conversely, if $u\in H^2(\mathbb R)$, then $u'\in H^1(\mathbb R)$ has a single continuous representative, so its one-sided traces at zero agree; the restrictions of $u$ lie in $H^2$ on each half-line and satisfy the zero-jump condition. Thus $D(A_0^{\mathrm{int}})=H^2(\mathbb R)$ and both $A_0^{\mathrm{int}}$ and $A_{\mathrm{free}}$ act as $-D^2$ there, proving the identification asserted in the Statement. Now, if $1+\alpha/(2k)=0$, then $2k=-\alpha\in\mathbb R$; but $k^2=-z$ is nonreal because $z$ is nonreal, so $k$ itself is nonreal. Hence $1+\alpha G_z(0)=1+\alpha/(2k)\ne0$. [F1, given, algebra]

2.1 [Construction of the preimage] Fix $f\in L^2(\mathbb R)$ and put $r:=(A_0-z)^{-1}f$, with $A_0=A_{\mathrm{free}}$ by step 1.1. Exactly as in the range construction of [[thm-nrqm-intervals-delta-interface-operator]], the vector $u:=r+cG_z,\qquad c:=-\frac{\alpha\,r(0)}{1+\alpha G_z(0)},$ lies in $D(A_\alpha)$ and satisfies $(A_\alpha-z)u=f$; here $r(0)=\int_{\mathbb R}G_z(y)f(y)dy=\ell_z(f)$ because $r(x)=\int G_z(x-y)f(y)dy$ evaluated at $x=0$. [step 1.1, F1, given, algebra]

3.1 [The resolvent formula] Since $A_\alpha-z$ is injective by [F1], the vector $u$ of step 2.1 is the unique preimage of $f$, hence $(A_\alpha-z)^{-1}f=u=r+cG_z=(A_0-z)^{-1}f -\frac{\alpha\,\ell_z(f)}{1+\alpha G_z(0)}G_z,$ which is (a). [step 2.1, F1]

4.1 [Rank one and bounds] The map $K_z$ displayed in (b) equals $f\mapsto\ell_z(f)w$ with $w:=-\alpha G_z/(1+\alpha G_z(0))$; its range is contained in $\mathbb C G_z$. If $\alpha\ne0$, then $w\ne0$, and $f=\overline{G_z}\in L^2$ satisfies $\ell_z(f)=\int_{\mathbb R}|G_z(y)|^2dy=\|G_z\|_{L^2}^2>0$. Hence the range contains a nonzero multiple of $G_z$, so $K_z$ has rank exactly one; if $\alpha=0$, then $w=0$ and $K_z=0$. By [F2], $\|\ell_z\|\le\|G_z\|_{L^2}$, and therefore [step 3.1, F2, algebra]
$$\|K_z\|\le\|\ell_z\|\,\|w\|\le\|G_z\|_{L^2}\frac{|\alpha|\,\|G_z\|_{L^2}}{|1+\alpha G_z(0)|}=\frac{|\alpha|\,\|G_z\|_{L^2}^2}{|1+\alpha G_z(0)|}.$$
Substituting $\|G_z\|_{L^2}^2=(4|k|^2\operatorname{Re}k)^{-1}$ from [F2] gives the displayed value, and the triangle inequality for operator norms gives $\|(A_\alpha-z)^{-1}\|\le\|(A_0-z)^{-1}\|+\|K_z\|$. This is (b). [step 3.1, F2, algebra] ∎
