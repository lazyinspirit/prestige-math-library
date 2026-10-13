---
id: def-cm-one-dimensional-action-variable
kind: definition
title: "The one-dimensional action variable of a family of two-turning-point energy levels"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-interval, def-continuity-real, def-darboux-integral, thm-of-square-roots, thm-continuous-implies-integrable, lem-sine-positive-and-cosine-decreasing-on-zero-two]
dependency_roles:
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  lem-sine-positive-and-cosine-decreasing-on-zero-two: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §4.5.3, printed pp. 108-111, Eqs. (4.133)-(4.142): the action variable $I=\\frac{1}{2\\pi}\\oint p\\,dq$ of a one-dimensional system and the identity $\\omega=dE/dI$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §10.4: adiabatic invariants and the action variable of a periodic one-dimensional motion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

Let $J_0\subseteq\mathbb R$ be an open interval, let $U:J_0\to\mathbb R$ be
continuous ([[def-continuity-real]]), let $m>0$, let $E_0<E_1$ be reals, and
let $a,b:(E_0,E_1)\to J_0$ be functions with

$$a(E)<b(E),\qquad U(a(E))=U(b(E))=E,\qquad U(q)<E\ (a(E)<q<b(E)) \qquad(E_0<E<E_1).$$

The **action variable** of this datum is the function
$J_{\mathrm{a}}:(E_0,E_1)\to\mathbb R$,

$$J_{\mathrm{a}}(E):=\frac{1}{\pi}\int_{a(E)}^{b(E)}\sqrt{2m\bigl(E-U(q)\bigr)}\;dq,$$

the integral being the Riemann integral on the compact interval
$[a(E),b(E)]$ ([[def-darboux-integral]]). It is defined because
$q\mapsto\sqrt{2m(E-U(q))}$ is continuous on $[a(E),b(E)]$: the radicand is a
continuous nonnegative function there (it vanishes exactly at the two
endpoints). Existence and uniqueness of nonnegative roots follow from
[[thm-of-square-roots]]. For $x,y\ge0$, if $s=\sqrt x\ge t=\sqrt y$, then
$(s-t)^2\le(s-t)(s+t)=x-y$; interchanging $x,y$ gives
$|\sqrt x-\sqrt y|^2\le|x-y|$. Thus $|x-y|<\varepsilon^2$ implies
$|\sqrt x-\sqrt y|<\varepsilon$, proving continuity, including at zero.
The continuous integrand is Riemann integrable by [[thm-continuous-implies-integrable]].

**Reading of the notation.** The interval $[a(E),b(E)]$ is the classically
allowed segment between the two turning points of the energy $E$, and the
closed curve $p=\pm\sqrt{2m(E-U(q))}$ encloses the area
$A(E)=2\int_{a(E)}^{b(E)}\sqrt{2m(E-U(q))}\,dq$ (the upper graph minus the
lower graph), so $J_{\mathrm{a}}(E)=A(E)/(2\pi)$; no physical interpretation of $m$, $U$ or $E$ is a
mathematical premise here, and no period is claimed by this definition.
