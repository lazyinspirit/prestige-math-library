---
id: rem-jump-multipliers-can-be-bounded-outside-mihlin
kind: remark
title: Jump multipliers may lie outside the Mihlin criterion
status: draft
origin: pipeline
deps:
  - def-mihlin-symbol-with-more-than-half-dimension-derivatives
  - def-lp-fourier-multiplier-and-multiplier-norm
  - def-countable-choice
landmark: false
proved_here: false
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
external_dependency:
  source_url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
  exact_statement: "The shifted signum symbol sgn(xi-1) is an Lp multiplier on R for 1<p<infinity by modulation of the Hilbert transform, and it fails the punctured-domain Mihlin C1 condition at xi=1."
  local_proof_attempt: "The smoothness failure and the modulation identity are direct. The Hilbert-transform Lp theorem is assigned to later FR-8 and is not proved on this page."
  necessity: "Records a genuine bounded jump multiplier outside the adopted Mihlin class and corrects the design claim about unshifted signum."
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§3.1 Hilbert-transform signum symbol, printed p. 6; §3.9 Lp-multiplier comparison, printed p. 12"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.5.5, Proposition 2.5.14 frequency-translation invariance, printed pp. 156-157; §6.2.3, Theorem 6.2.7 and display (6.2.14), printed pp. 445-446"
---

## Remark

Assume Countable Choice for the library Fourier and $L^p$ conventions. In one
dimension the Mihlin convention of
[[def-mihlin-symbol-with-more-than-half-dimension-derivatives]] uses
$q=\lfloor 1/2\rfloor+1=1$: a symbol must agree almost everywhere with a $C^1$
function $m_0$ on $\mathbb R\setminus\{0\}$ satisfying
$|\partial^\alpha m_0(\xi)|\le C_\alpha|\xi|^{-|\alpha|}$ for $|\alpha|\le1$
and $\xi\ne0$. In this convention:

**Unshifted signum satisfies the criterion.** The function
$m_0(\xi)=\operatorname{sgn}\xi$ is constant on each of the two components
$(-\infty,0)$ and $(0,\infty)$ of the punctured line, hence $C^1$ there with
all derivatives zero; the bounds hold with $C_0=1$ and $C_1=0$. Its only jump
is at the excluded frequency $0$. (This corrects a claim that the unshifted
signum symbol fails the punctured-domain condition.)

**Shifted signum fails the criterion.** The symbol
$m(\xi)=\operatorname{sgn}(\xi-1)$ equals $-1$ on $(0,1)$ and $+1$ on
$(1,\infty)$. A function $m_0$ continuous on $\mathbb R\setminus\{0\}$ that
agreed with $m$ almost everywhere would have to equal $-1$ everywhere on
$(0,1)$ and $+1$ everywhere on $(1,\infty)$, since it is continuous and the
two open intervals have full measure in themselves; continuity at the nonzero
point $\xi=1$ would then fail. So the jump at the nonzero frequency $1$ is not
excused by the punctured domain, and $m$ is not a Mihlin symbol here.

**Recorded $L^p$ boundedness.** Write $h(\xi)=-i\operatorname{sgn}\xi$; the
Hilbert transform on $\mathbb R$ is the Fourier multiplier with symbol $h$
(Williams §3.1). Then
$$m(\xi)=\operatorname{sgn}(\xi-1)=i\,h(\xi-1).$$
The shifted symbol is a unimodular constant times the frequency translate of
the Hilbert multiplier, and frequency translation preserves the $L^p$
multiplier norm (Grafakos Proposition 2.5.14; modulation of the operator is an
$L^p$ isometry). So the $L^p(\mathbb R)$ boundedness of $\operatorname{sgn}
(\xi-1)$ for $1<p<\infty$, hence its membership in
[[def-lp-fourier-multiplier-and-multiplier-norm|this library's $M^p$]], is
exactly the $L^p$ boundedness of the Hilbert transform, a recorded result
assigned to the later singular-integral material and **not proved or used on
this page**.

Thus the Mihlin condition is sufficient but not necessary: a multiplier with a
jump at a nonzero frequency can still be bounded on every $L^p(\mathbb R)$,
$1<p<\infty$. This remark is a recorded orientation leaf; the only locally
checked content is the elementary smoothness comparison and the constant
modulation identity above. Countable Choice is inherited from the cited
conventions ([[def-countable-choice]]).
