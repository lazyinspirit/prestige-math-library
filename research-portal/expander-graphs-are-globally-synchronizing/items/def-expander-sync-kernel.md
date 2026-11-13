---
id: def-expander-sync-kernel
title: Kernel for stability amplification
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-phasor-calculus
  - math:def-pi-via-first-positive-cosine-zero
  - math:thm-quarter-turn-values-and-shift-formulas
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:def-abs-value
dependency_roles:
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-pi-via-first-positive-cosine-zero: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:def-abs-value: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 16, Section 2.2, equation (2.13)
      statement: The kernel is defined on $(-\pi,\pi]\times(-\pi,\pi]$ by
        $K(\alpha,\beta)=\sin(|\alpha|-\min\{|\beta|,\pi/2\})$, with the two
        equivalent branches displayed in equation (2.13).
      hypotheses: $\alpha,\beta\in(-\pi,\pi]$.
      reading_limits: Equation (2.13) and its surrounding introduction were inspected
        in the extracted article text. This reference attributes the definition;
        the justification below uses independent mathematical inputs.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 1
---

## Definition

For real angles $\alpha,\beta\in(-\pi,\pi]$, define the kernel, meaning the real-valued function $K:(-\pi,\pi]\times(-\pi,\pi]\to\mathbb R$, by $K(\alpha,\beta)=\sin(|\alpha|-\min\{|\beta|,\pi/2\})$. Here $|t|$ is the absolute value of a real number and $\min\{a,b\}$ is the smaller of two real numbers. Sine and cosine are the real trigonometric functions.

Equivalently, $K(\alpha,\beta)=\sin(|\alpha|-|\beta|)$ when $|\beta|\le\pi/2$, and $K(\alpha,\beta)=-\cos\alpha$ when $|\beta|\ge\pi/2$.

## Justification

For every real $t$, absolute value is $t$ when $t\ge0$ and $-t$ otherwise ([[math:def-abs-value]]). Thus $|\alpha|$ and $|\beta|$ are real, and $|\alpha|$ is either $\alpha$ or $-\alpha$. The real sine function is defined for every real argument, so the displayed rule assigns a unique real number to every pair in the stated domain ([[def-expander-prereq-phasor-calculus]]). If $|\beta|\le\pi/2$, the minimum is $|\beta|$, giving the first branch. If $|\beta|\ge\pi/2$, the minimum is $\pi/2$. The quarter-turn identity and oddness of sine give $\sin(|\alpha|-\pi/2)=-\sin(\pi/2-|\alpha|)=-\cos(|\alpha|)$; evenness of cosine then gives $-\cos(|\alpha|)=-\cos\alpha$ ([[math:thm-quarter-turn-values-and-shift-formulas]], [[math:cor-trigonometric-parity-and-pythagorean-identity]]). At equality $|\beta|=\pi/2$, both branches therefore have the same value.

## Source attribution

Equation (2.13) of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 16, attributes this definition.
