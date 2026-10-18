---
id: ex-cold-two-stream-stipulated-pic-experiment
kind: example
title: A stipulated cold two-stream periodic PIC experiment
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-pic-charge-conservation-and-neutralized-source
  - def-periodic-pic-regularized-grid-interaction-kernel
  - alg-periodic-pic-classical-rk4-step
proof_strategy: direct
axiom_use: No choice principle is used; this is a finite initial-data specification.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Chapters 2 and 4
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

Here is a fully specified cold two-stream input for the fixed-$\varepsilon$ periodic grid model. Let $d=1$, $L=2\pi$, $N=63$, $P=126$, $Q=M=1$, $\varepsilon=1/5$, and $\Delta t=10^{-3}$ with $4000$ steps to $T=4$. For $\sigma\in\{-1,+1\}$ and $j\in\mathbb Z/63\mathbb Z$, assign charge and mass $1/126$ and set
$$ X_{\sigma,j}(0)=\left(\frac{2\pi j}{63}+\sigma\,\frac1{100}\cos\frac{2\pi j}{63}\right)\pmod{2\pi},\qquad V_{\sigma,j}(0)=\frac{\sigma}{2}. $$
Use the smooth assignment shape, neutralizing background, centered periodic Poisson solve, and exact-arithmetic update of [[alg-periodic-pic-classical-rk4-step]]. The two beams are cold because each beam has one velocity value. This is a stipulated numerical experiment only: it asserts no growth rate, nonlinear saturation, or physical validation.

## Facts & Assumptions

**Given:** The finite parameter tuple above, the two beam labels, and the fixed-regularization periodic PIC definitions.

[F1] [[def-periodic-pic-regularized-grid-interaction-kernel]]: the equal-weight particle system uses total charge $Q$, total mass $M$, and the fixed smooth grid interaction kernel.

[F2] [[thm-periodic-pic-charge-conservation-and-neutralized-source]]: normalized assignment deposits total charge $Q$, and subtracting $Q/L$ gives a compatible zero-mean source.

[F3] [[alg-periodic-pic-classical-rk4-step]]: the exact-arithmetic RK4 step evaluates the periodic PIC field at each stage and returns the updated particle state.

## Proof

1.1 There are $2\cdot63=126$ labels. Their positive charges sum to $126/126=1=Q$ and their positive masses sum to $126/126=1=M$. Within each fixed $\sigma$, every velocity equals $\sigma/2$, so the two populations are cold counter-streaming beams. [given, algebra]

2.1 The stated positions are points of $\mathbb T_{2\pi}$ after reduction modulo $2\pi$, and $N=63$ is odd as required by the grid convention. At each of the finitely many RK4 stages, the smooth-shape deposition conserves charge $Q=1$; subtracting the uniform background $Q/L=1/(2\pi)$ makes the source compatible by [F2]. By [F3], the exact finite Fourier Poisson solve therefore returns a potential at every stage, so this exact-arithmetic experiment is defined. No physical conclusion follows from this specification. [F1, F2, F3, given, algebra] ∎
